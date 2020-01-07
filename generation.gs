function myFunction() {
  var results = ['〇','×'];
  
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var lastRow = spreadsheet.getLastRow();
  var lastColumn = spreadsheet.getLastColumn();
  var inputs = spreadsheet.getSheetByName('入力');

  var range = inputs.getRange(1,1,lastRow,lastColumn);
  var inputs = range.getValues();
  var tmp = 0;
  
  for(var i = 1 ; i < lastRow; i++){
    for(var j = 1 ; j < lastColumn; j++){
      tmp = Math.round(Math.random());
      inputs[i][j] = results[tmp];
    }
  }
  
  range.setValues(inputs);
  Browser.msgBox("完了");
}
