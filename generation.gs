function myFunction() {
  var results = ["〇","×"];
  
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var lastRow = spreadsheet.getLastRow();
  var lastColumn = spreadsheet.getLastColumn();
  var inputs = spreadsheet.getSheetByName('入力');

  var range = inputs.getRange(1,1,lastRow,lastColumn);
  var inputs = range.getValues();
  var tmp = 0;
  Logger.log(inputs[0]);
  for(var i = 2 ; i <= lastRow; i++){
    for(var j = 2 ; j <= lastColumn; j++){
      tmp = Math.round(Math.random());
//      inputs[i][j] = results[tmp];
    }
  }
//  Logger.log(inputs[1].length);
//  Logger.log(inputs.length);
//  Logger.log(lastRow);
//  Logger.log(lastColumn);
//  Logger.log(inputs);
  range.setValues(inputs);
  
//  Browser.msgBox(values[0]);
}
