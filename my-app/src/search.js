import Results from './results';
import getResults from './getResults'
      
export default function search(setGeojson) {
  const results = document.getElementById("results"); 
  const start = document.getElementById("start-input").value;

  var lip = "Lorem ipsum dolor sit amet, natum commune erroribus sed id, his porro verear te. Doming scriptorem in vis. Eu dolor timeam vim, viris everti ut mel, prima tibique mei ex. Eam graece melius intellegat ad, per odio porro interpretaris no, vel alia sonet cu. Te mutat verterem qualisque vim.Ea novum eruditi eos, postea lobortis interesset in ius. Zril interesset et usu, no sit dicit latine salutandi. Quot doctus ei eam, quando viderer no sit, his cu facilis gloriatur. Id nam elit veritus patrioque. Diceret scriptorem usu no. Cu populo accommodare cum, id vel legere perpetua.Tantas meliore ea eam, dicam iracundia consequuntur qui ei. Usu iudico alienum at. Probatus instructior contentiones no pri, eos cu lorem vivendum. Te duo ceteros vituperatoribus. Sed putent consequat conceptam cu. At dico atqui sanctus per, sint euismod inciderint sea ad, at eam habemus ancillae. No mel aperiri adversarium.Quo delenit indoctum no, vim ea ubique omittantur delicatissimi. Ea lorem elitr labores vim. Id regione postulant vim. Id quo docendi nominavi. Ridens diceret vituperata id sit, quem simul ad est, munere malorum partiendo et mei. Pri an impedit feugait. Iusto omnium corrumpit duo no, scribentur complectitur an sed.Melius imperdiet te ius, atqui essent fuisset qui cu. Facer omittam phaedrum his id. Qui possit deserunt delicatissimi ad, id dicta doctus mei, nobis lobortis euripidis vix no. Te quo causae propriae constituto, ut doming deleniti delectus sea.";

  var str = 'Searching for best places to stop along the route from ' + start + lip + lip + lip + lip;
  console.log(str);
  results.innerHTML = str;

  const geojson = getResults();

  setGeojson(geojson);
};