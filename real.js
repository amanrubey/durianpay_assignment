import express from "express"
import axios from "axios";
import cheerio from "cheerio";
import { log } from "console";
import fs from "fs";
import e from "express";
import { title } from "process";
const app = express();

app.use(express.urlencoded({ extended: true }));
let API_URL = 'http://localhost:4000/'
app.get("/", (req,res)=>{
    res.render("./index.ejs");
})
app.post("/do",  async (req,res)=>{
    try{
        console.log(req.body);
        let title = req.body.title;
        title = title.trim().replace(/ /g, '+');
        let company = req.body.comparison_websites;
        let filter = req.body.filter
        let topN = req.body.topN;
        if(topN == '') topN = '3';
        if(title == '') res.redirect("/");
        console.log(title,company,filter,topN);
        console.log(typeof title);
        console.log(typeof filter);
        console.log(typeof topN);
        console.log(typeof company);
        
        if(filter == '') filter = 'hp'
        if(company === undefined)  company = ['flipkart','snapdeal','shopclues'];
        if(typeof company === 'string') company = [company];
        console.log(company.length);
        let suf = '';
        for(let i = 0; i<company.length; i++)
        {
            suf+="&website="+company[i];
        }
        console.log(suf);
        console.log(API_URL+"do?title="+title+"&topN="+topN+"&filter="+filter+suf);
        const {data} = await axios.get(API_URL+"do?title="+title+"&topN="+topN+"&filter="+filter+suf)
        res.send(data)

    }
    catch(err)
    {
        console.log(err)
    }
})

app.listen(3000,()=>{
    console.log("Server started");
})