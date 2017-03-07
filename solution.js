'use strict';
var data = [ { "company_name":"Medline Industries, Inc.", "product":"Benzalkonium Chloride", "price":"481.63" }, { "company_name":"PD-Rx Pharmaceuticals, Inc.", "product":"Alprazolam", "price":"167.62", "fda_date_approved":"02/12/2015" }, { "company_name":"West-ward Pharmaceutical Corp.", "product":"Flumazenil", "fda_date_approved":"23/04/2015" }, { "company_name":"HyVee Inc", "product":"Aspirin", "price":"218.32", "fda_date_approved":"26/07/2015" }, { "company_name":"Aurobindo Pharma Limited", "product":"carisoprodol", "price":"375.58", "fda_date_approved":"28/11/2014" }, { "company_name":"Apotex Corp", "product":"Risperidone", "price":"213.49", "fda_date_approved":"06/11/2015" }, { "company_name":"Unit Dose Services", "product":"Lovastatin", "price":"169.14", "fda_date_approved":"14/09/2015" }, { "company_name":"Jubilant HollisterStier LLC", "product":"Dog Hair Canis spp.", "fda_date_approved":"31/12/2014" }, { "company_name":"AAA Pharmaceutical, Inc.", "product":"ACETAMINOPHEN, CHLORPHENIRAMINE MALEATE, DEXTROMETHORPHAN HYDROBROMIDE, and PHENYLEPHRINE HYDROCHLORIDE", "price":"183.33", "fda_date_approved":"13/12/2015" }, { "company_name":"AKG Innovations LLC", "product":"AVOBENZONE, OCTINOXATE, OCTISALATE", "fda_date_approved":"22/01/2015" }, { "company_name":"hikma Farmaceutica", "product":"Oxytocin" }, { "company_name":"prime Packaging, Inc.", "product":"Avobenzone, Homosalate, Octisalate, Octocrylene, Oxybenzone", "price":"208.17" }, { "company_name":"Davion, Inc", "product":"Triclosan", "price":"80.30", "fda_date_approved":"13/12/2014" }, { "company_name":"CARDINAL HEALTH", "product":"CARBOXYMETHYLCELLULOSE SODIUM, GLYCERIN", "price":"330.22", "fda_date_approved":"11/08/2015" }, { "company_name":"Amgen Inc", "product":"darbepoetin alfa", "price":"332.28", "fda_date_approved":"01/07/2015" }, { "company_name":"Autumn Harp, Inc.", "product":"Salicylic Acid", "price":"34.43", "fda_date_approved":"25/03/2015" }, { "company_name":"American Regent, Inc.", "product":"sodium phosphate, monobasic, monohydrate and sodium phosphate, dibasic anhydrous", "price":"11.60" }, { "company_name":"J. A. Cosmetics U.S. INC", "product":"TITANIUM DIOXIDE", "price":"130.90", "fda_date_approved":"01/12/2015" }, { "company_name":"NATURE REPUBLIC CO., LTD.", "product":"Titanium Dioxide, OCTINOXATE, Zinc Oxide", "price":"124.48" }, { "company_name":"L. Perrigo Company", "product":"Dextromethorphan Hydrobromide, Guaifenesin", "price":"73.09", "fda_date_approved":"03/02/2016" } ];
var container = document.getElementById("container");
var tableData = document.createElement("table");
var trData = tableData.insertRow(-1);   
var thData = [];

for (var i = 0; i < data.length; i+=1) 
{
   for (var tbHeader in data[i]) 
	{
        if (thData.indexOf(tbHeader) === -1) 
		{
        
			thData.push(tbHeader);

        }
    }
}

for(var i=0; i < thData.length; i+=1){
	var th = document.createElement("th");
				th.innerHTML = thData[i];
				th.id = thData[i];
				th.setAttribute("onclick", "sort_arr("+i+")");
				trData.appendChild(th);
}
var tbody = document.createElement("tbody");
	tbody.id="DataTable";
 	tbody = tableData.appendChild(tbody); 
for (var i = 0; i < data.length; i+=1) 
{

	trData = tableData.insertRow(-1);
	for (var j = 0; j < thData.length; j+=1) 
	{
		var tabCell = trData.insertCell(-1);
			tabCell.innerHTML = data[i][thData[j]];		
        	
		
    }
    tbody.appendChild(trData);
}
	


container.appendChild(tableData);

function sort_arr (index) {
	var allRows = tbody.rows,
	    rowLen = allRows.length,td, tdLen , i , j,
	    arr = [];
	    for(var i=0;i < rowLen;i+=1){
	    	 td = allRows[i].cells;
	    	 tdLen = td.length;
	    	 arr[i] = [];

	    	 for(j=0;j<tdLen;j+=1){
	    	 	arr[i][j]=td[j].innerHTML;
	    	 }

	    }
	    arr.sort(function(a,b) {
	    	return	a[index].localeCompare(b[index]);
	    });

	    for(i=0;i<rowLen;i+=1){
	    		 arr[i] = "<td>"+arr[i].join("</td><td>")+"</td>";
	    }

 tbody.innerHTML = "<tr>"+arr.join("</tr><tr>")+"</tr>";

}
