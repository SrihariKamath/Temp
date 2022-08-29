function doGet() {
  return HtmlService.createTemplateFromFile('Index').evaluate();
}


/* PROCESS FORM */
function processForm(formObject){  
  var result = "";
  if(formObject.searchtext){//Execute if form passes search text
      result = search(formObject.searchtext);
  }
  return result;
}

//SEARCH FOR MATCHED CONTENTS 
function search(searchtext){
  var spreadsheetId   = '1NnZStGOr8XEOt3JrUtSrIRE2k0hd9FPR9C--5MzoLSM'; //** CHANGE !!!
  var dataRage        = 'updated_data_job_posts!A2:Y';                                    //** CHANGE !!!
  var data = Sheets.Spreadsheets.Values.get(spreadsheetId, dataRage).values;
  var ar = [];
  
  data.forEach(function(f) {
    if (~f.indexOf(searchtext)) {
      ar.push(f);
    }
  });
  return ar;
}