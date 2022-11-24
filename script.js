function ButtonClick() {
    var value1 = document.getElementById("site-name");               
    var value2 = document.getElementById("page-title");
    var value3 = document.getElementById("url");
    var value4 = document.getElementById("date");
    var result = value1 + "「" + value2 + "」" + value3 + "(" + value4 + ")";
    var output = document.getElementById("output");
    output = result;
  }