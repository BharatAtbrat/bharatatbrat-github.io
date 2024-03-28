/*const url = 'https://bloomberg-market-and-financial-news.p.rapidapi.com/market/auto-complete?query=%3Cadani%3E';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ed4f4df9e2msh55316601320c5c0p1abe5ejsnb67d5d3f788c',
		'X-RapidAPI-Host': 'bloomberg-market-and-financial-news.p.rapidapi.com'
	}
};
*/
/*
const url = 'https://jsearch.p.rapidapi.com/search?query=software%20intern%20%2C%20India&page=1&num_pages=1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ed4f4df9e2msh55316601320c5c0p1abe5ejsnb67d5d3f788c',
		'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
	}
};
*/
/*try {
   const response = await fetch(url, options);
    const resultText = await response.json();
    console.log(resultText);
   // const resultJson = JSON.parse(resultText);
    //var table= document.getElementById("t_body");
//resultJson.each((object) => {
  //  var tr = document.createElement("tr");
    //tr.innerHTML = '<td>' + object.id + '</td>';
    //table.appendChild(tr);


/*$.getJSON(resultJson, function(data) {
    var stud = '';

$.('#t_body').append(stud);

)};


/*
    var tableData="";
    console.log(resultJson); 
    
    resultJson.map((resultJson)=>{
            tableData='<h1>${resultJson.id}</h1>';

    });
    document.getElementById("t_body").innerHTML=tableData;
  */  
    
    // Output the JSON data to the console
/*fetch(url,options).then((data)=>{return data.json();}).then((resultJson)=>{
    console.log(resultJson);
  
  //resultJson.map(()=>{
    //   tableData+='<h1>${resultJson}</h1>';
        
   //  });
      // document.getElementById("t_body").innerHTML=tableData;
});
 

//const response = await fetch(url, options);
//const rows = await response.json();


//console.log(rows);

*/

try {
	
    fetch(url,options)
    .then(response => response.json())
     
    .then((res)=> {
        const data = res.data;
        console.log(data);
        let rows = '';
        data.forEach(product => {
            rows+= `<td> ${product.job_title} </td>
            <td> ${product.employer_name} </td>
            <td> ${product.job_city} </td>
            <td> ${product.job_employment_type} </td>
            <td> ${product.job_offer_expiration_datetime_utc} </td>
            <td> <a href=${product.job_apply_link}>Apply</td></tr>`;
        });
        document.getElementById("t_body").innerHTML = rows;
    })


      
     // result.map(()=>{
        //   tableData+='<h1>${resultJson}</h1>';
            
       //  });
          // document.getElementById("t_body").innerHTML=tableData;
   




} catch (error) {
	console.error(error);
}