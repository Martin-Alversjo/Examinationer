//All data med LCHF recept, både vegetariska och inte vegetariska
var foods = [
    {name: "Palak Paneer", veg: true, url: "http://www.manjulaskitchen.com/palak-paneer-2016/"},
    {name: "Björns Laxlåda", veg: false, url: "http://www.lchfrecept.com/ShowRecepy.aspx?ID=950"},
    {name: "Kumminstekt Lax", veg: false, url:'http://www.tasteline.com/recept/kumminstekt-lax-med-blomkalsallad-med-parmesan-samt-basilikadipp/'},
    {name: "Fat Head Pizza", veg: false, url:"http://www.kostdoktorn.se/recept/fat-head-pizza"},
    {name: "Tacogratäng med guacamole", veg: false, url:"http://www.kostdoktorn.se/recept/tacogratang-med-guacamole"},
    {name: "Mozarellafyllda köttbullar", veg: false, url:"http://www.kostdoktorn.se/recept/mozzarellafyllda-kottbullar"},
    {name: "Ugnsbakade rödbetor med fetaost", veg: true, url:"http://www.kostdoktorn.se/recept/ugnsbakade-rodbetor-med-fetaost"},
    {name: "ABC-Sallad", veg: false, url:"http://www.kostdoktorn.se/recept/abc-sallad"},
    {name: "Bakad rotselleri med spenat och gorgonzola", veg: true, url:"http://www.kostdoktorn.se/recept/bakad-rotselleri-med-spenat-och-gorgonzola"},
    {name: "Köttfärslåda med brysselkål", veg: false, url:"http://www.kostdoktorn.se/recept/kottfarslada-med-brysselkal"},
    {name: "Paprika- och ostfylld kyclingfilé", veg: false, url:"http://www.kostdoktorn.se/recept/paprika-och-ostfylld-kycklingfile"},
    {name: "Sesamlax med currykål och limeaioli", veg: false, url:"http://www.kostdoktorn.se/recept/sesamlax-med-currykal-och-limeaioli"},
    {name: "Tandorilax med gurksås", veg: false, url:"http://www.kostdoktorn.se/recept/tandoorilax-med-gurksas"},
    {name: "LCHF pasta med ädelostsås", veg: true, url:"http://www.kostdoktorn.se/recept/lchf-pasta-med-adelostsas"},
    {name: "Vitkålsgratäng", veg: true, url:"http://www.kostdoktorn.se/recept/vitkalsgratang"},
    {name: "Pestomarinerad minimozarella med tomat", veg: true, url:"http://www.kostdoktorn.se/recept/pestomarinerad-minimozzarella-med-tomat"},
    {name: "Minicrépes med färskoströra", veg: true, url:"http://www.kostdoktorn.se/recept/minicrepes-med-farskostrora"},
    {name: "Broccolimos med brynt smörslungad brysselkål och stekt kassler", veg: false, url:"http://www.tasteline.com/recept/broccolimos-med-brynt-smorslungad-brysselkal-och-stekt-kassler/"},
    {name: "Asiatisk glasnudelsallad med marinerad fläskytterfilé", veg: false, url:"http://www.tasteline.com/recept/asiatisk-glasnudelsallad-med-marinerad-flaskytterfile/"},
    {name: "Glutenfri grönkålspaj", veg: true, url:"http://www.tasteline.com/recept/gronkalspaj-2/"},
    {name: "Rostad vitlök- och blomkålsmos med kabanoss", veg: false, url:"http://www.tasteline.com/recept/rostad-vitlok-och-blomkalsmos-med-kabanoss/"},
    {name: "LCHF bacon- och ostpaj", veg: false, url:"http://www.tasteline.com/recept/lchf-bacon-och-adelostpaj/"},
    {name: "Blomkålspizza", veg: true, url:"http://www.lchfrecept.com/ShowRecepy.aspx?ID=1747"},
    {name: "Blomkålsris med lime och chili", veg: true, url:"http://www.lchfrecept.com/ShowRecepy.aspx?ID=1490"},
    {name: "Raggmunk av rättika", veg: true, url:"http://www.lchfrecept.com/ShowRecepy.aspx?ID=1802"},
    {name: "Ängamat", veg: true, url:"http://www.lchfrecept.com/ShowRecepy.aspx?ID=1734"},
    {name: "Blomkålscouscous med aijvar", veg: true, url:"http://www.lchfrecept.com/ShowRecepy.aspx?ID=1609"}
  ];


//Hämta data från HTML dokumentet
var col2 = document.getElementById('column2');
var button = document.getElementById('button');

//Funktion för att hämta ut ett random recept
function getRandomMeal(isVeggo) {
  var receptNotFound = true;
  var recept;

  while (receptNotFound) {
    var randomInt = Math.floor(Math.random() * foods.length);
    var randomRecept = foods[randomInt];

    if (isVeggo == randomRecept.veg) {
      recept = randomRecept;
      receptNotFound = false;
    }
  }
    col2.innerHTML = '<span class="recepttitle">' + recept.name + '</span> <a href="' + recept.url + '">Länk till recept</a>';
}
//Funktionen för click eventet på button i html filen
function checkVego() {
  var isVeggo = document.getElementById('vegetarisk').checked;
  getRandomMeal(isVeggo);
}
