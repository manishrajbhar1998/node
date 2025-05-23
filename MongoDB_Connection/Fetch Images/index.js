const axios = require("axios");
const fs = require("fs");
const cheerio = require("cheerio");
const path = require("path");
console.log("fetching... ");

async function fetchUrl(url) {
  console.log("url :: ",url)
  const { data } = await axios.get(url);

  console.log('data :: ',data)

  const doc = cheerio.load(data);
  let httpArr = [];
  let base64Arr = [];
  doc("img").each((index, element) => {
    let src = doc(element).attr("src");
    let data_src = doc(element).attr("data-src");
    src = src === undefined ? data_src : src;
    if (!src) return;

    if (src.startsWith("data")) {
        base64Arr.push(src);
    } else if(src.startsWith("https")){
      httpArr.push(src);
    }else{
      httpArr.push(`${url}${src}`)
    }
  });

  base64Arr.forEach((ele,index)=>{
    saveBase64Image(ele,"images",`${ele.split("/")[0].replace(":","_")}${index}.png`)
  })

  httpArr.forEach((ele,index)=>{
    saveImageFromUrl(ele,"assets",`${ele.split("/")[0].replace(":","_")}${index}.png`);
  })

  console.log("Task completed")
}

fetchUrl("https://www.carwale.com/ferrari-cars/");

const saveBase64Image = (base64Image, folderPath, filename) => {
  const data = base64Image.split(",")[1];
  const buffer = Buffer.from(data, "base64");
  const filePath = path.join(folderPath, filename);
  fs.writeFile(filePath, buffer, (err) => {
    if (!err) {
      console.log(filename, "created successfully");
    }
  });
};

const saveImageFromUrl = async (url,folderPath,filename) => {
    try{
        const {data} = await axios({url,responseType:"stream"});
        const filePath = path.join(folderPath,filename);
        const write = fs.createWriteStream(filePath);
        data.pipe(write);

        write.on("finish",()=>{
            console.log(`Image saved as ${filename}`)
        })
    }catch(err){
        console.log("error ::",err);
    }
}
