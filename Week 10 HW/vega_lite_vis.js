var vg_1 = "aus_income_choropleth.vg.json";
vegaEmbed("#choropleth", vg_1) 
var vg_2 = "industry_income_bar.vg.json";
vegaEmbed("#bar", vg_2).then(function(result)                                     
                                    {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
