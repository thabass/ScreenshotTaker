const express = require('express');
const router = express.Router();
const puppeteer=require('puppeteer');
const path = require('path');
// const { uuid } = require('uuid');

router.post('/',function(req,res)
{
   const url = req.body.name;

   console.log(url);

const takescreenshot= async ()=>
{

    const browser= await puppeteer.launch();
    const page= await browser.newPage();

    const options={ 
        path: 'Screenshot/website.png',
        fullpage: true,
        omitbackgrid: true,
        captureBeyondViewport: true,
       };


    await page.goto(url);
    await page.screenshot(options);
    //res.redirect(url);
    res.sendFile(path.join(__dirname+'/contact.html'));

   await browser.close();

};
takescreenshot();
});



module.exports =router
