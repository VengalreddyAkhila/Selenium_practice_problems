

module.exports = {
     url :'https://datatables.net/examples/data_sources/server_side',

     getTabledata:async function(driver,By){
        let results = [];
        await driver.get('https://datatables.net/examples/data_sources/server_side')
          for(let i=1;i < 6; i++){
               let rows = await driver.findElements(By.xpath("//table//tr"));
               console.log(rows,'rows')
               for(const row of rows){
                   let rowData =await  row.getText();
                   let userData = rowData.split(/\n/);
                   results.push({
                     employeeDetails:userData[0]
                      })
               }
               
                await driver.findElement(By.css(".paginate_button")).click();
                }
                return results;

     }
     
}