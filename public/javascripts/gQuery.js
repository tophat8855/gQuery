function init(containerNode) {
  gQuery(querySelector);

}

function gQuery(element){
  if(element[0] === '#') {
    var elementLength = element.length;
    var removedHashtag = element.substring(1);

    var body = [document.body];
    while(body.length > 0) {
      var inspectThis = body.shift().innerHTML;
      //console.log(inspectThis);

      if ((inspectThis.indexOf('id=') > -1) && (inspectThis.indexOf(removedHashtag) > -1)) {
        //console.log(inspectThis.indexOf('id='));
        return(inspectThis);
      }
    }

    var arrayOfElements = [];

  }
}

gQuery('#hello');
console.log(gQuery('#hello'));
