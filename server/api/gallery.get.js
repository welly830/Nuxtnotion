// gallery.get.js



import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const image_database_id = process.env.NOTION_DATABASE_ID;

let payload = [];

async function getImages() {
    const data = await notion.databases.query({
        database_id: image_database_id,
    }); 
    return data;
}

getImages().then((data) => {
    payload = data.results;
});

function getUrls(results){
    let urls = [];  
    let url = [];
     
    results.forEach((result) => {
        urls.push(result.properties.File.files[0].file.url);
    });

   /*  for (let i = 0; i < urls.length; i++) {
        url.push(urls[i].file.url);
       console.log(urls[i]);
    }
 */
    
   //console.log(typeof(urls))
    return urls;
}







// .properties.file.files[0]








export default defineEventHandler((event) => {return getUrls(payload)} );


/* const test_data = [
    {
        id: 1,
        name: 'item 1',
    },
    {
        id: 2,
        name: 'item 2',
    },
    {
        id: 3,
        name: 'item 3',
    },
];

export default defineEventHandler((event) => {return test_data}); */