module.exports = function toReadable (number) {
  let a=['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  let b=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  let resultat='';
  let tisatshi=Math.trunc(number/100);
  let sotni=Math.trunc(number%100/10);
  let desatki=number%10;

  if (number==0){return 'zero'};
  if (tisatshi>=1){
    resultat=resultat+a[tisatshi]+' hundred';
    if (number%100 !==0){
        resultat+=' ';
    }
  }
  if (sotni>1){
    resultat=resultat+b[sotni]+(desatki ==0 ? '':' ') + a[desatki];
  } else {
    resultat=resultat+ a[number%100];
  }
  return resultat;
}
