import express from 'express';
import mongoose from 'mongoose';
import validUrl from 'valid-url';
import {nanoid} from 'nanoid';
import dotenv from 'dotenv';

const app = express()
app.use(express.json())
dotenv.config();

//mongodb connection
const mongoUrl = process.env.mongodbUrl;
mongoose.connect(mongoUrl)

//URL Schema
const urlSchema = new mongoose.Schema({
    originalUrl: { type:String, reqiured:true },
    shortUrl: String,
    urlCode: { type:String, required: true},
    createdAt: {type: Date, default: Date.now },
    clicks: { type: Number, default: 0}
})

const Url = mongoose.model('Url', urlSchema)


//create short url
app.post('/api/shorten', async (req, res) => {
    const { longUrl } = req.body;

    if (!validUrl.isUri(longUrl)){
        return res.status(400).json({
            "msg": "Invalid URL"
        })
    }

    try {
        let url = await Url.findOne({originalUrl: longUrl});
        if (url){
            return res.json(url)
        }

        const urlCode = nanoid();
        const shortUrl = `${req.protocol}://${req.get('host')}/${urlCode}`;

        url = new Url({
            originalUrl: longUrl,
            shortUrl,
            urlCode
        });

        await url.save();
        res.json(url);

    } catch (error) {
        console.log(error)
        res.status(500).json({
            "msg" : "Server error"
        }) 
    }
})

//original url redirection
app.get('/:code', async(req, res) => {
    try {
        const url = await Url.findOne({ urlCode: req.params.code });
        if(url){
            url.clicks++;
            await url.save();
            return res.redirect(url.originalUrl);
        } else{
            return res.status(404).json({
                "msg": "Url not found"
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            "msg": "Server error"
        })
    }
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`))