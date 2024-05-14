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
export function fetchJobListings (searchTerm){
//const url = 'https://jsearch.p.rapidapi.com/search?query=software%20intern%20%2C%20India&page=1&num_pages=1';
const url = 'https://jsearch.p.rapidapi.com/search?query=${encodeURIComponent(searchTerm)}&page=1&num_pages=1';
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
/*
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
};*/

// apicall.js
// apicall.js
export function fetchJobListings(searchTerm) {
  const url = `https://jsearch.p.rapidapi.com/search?query=${encodeURIComponent(searchTerm)}&page=2&num_pages=2`;
  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': 'ed4f4df9e2msh55316601320c5c0p1abe5ejsnb67d5d3f788c', // replace with your actual RapidAPI key
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      }
  };

  fetch(url, options)
      .then(response => response.json())
      .then(data => {
          const listingsContainer = document.getElementById('t_body');
          listingsContainer.innerHTML = '';

          data.data.forEach(job => {
              const formattedDate = formatDate(job.job_offer_expiration_datetime_utc);
              const row = document.createElement('tr');
              row.innerHTML = `
                  <td>${job.job_title}</td>
                  <td>${job.employer_name}</td>
                  <td>${job.job_city}</td>
                  <td>${job.job_employment_type}</td>
                  <td>${formattedDate}</td>
                  <td><a href="${job.job_apply_link}" target="_blank">Apply</a></td>
              `;
              listingsContainer.appendChild(row);
          });
      })
      .catch(error => {
          console.error('Error fetching job listings:', error);
      });
}

// Helper function to format the date
function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
