const shortid = require('shortid');
const URL=require('../models/url');

async function handleGenerateShortURL(req, res) {
    const body = req.body || {};
    if(!body.url) return res.status(400).json({error: 'URL is required'});

   const shortID=shortid();
   await URL.create({
    shortId:shortID,
    redirectUrl:body.url,
    visitHistory:[],
   });

 return res.json({id:shortID});
}

async function handleGetAnalytics(req, res) {
    const shortId=req.params.shortId;
    const entry= await URL.findOne({shortId});
    if(!entry) return res.status(404).json({error: 'Short URL not found'});
   return res.json({
    totalVisits:entry.visitHistory.length,
    analytics:entry.visitHistory,
   });


}

module.exports={handleGenerateShortURL, handleGetAnalytics,};
