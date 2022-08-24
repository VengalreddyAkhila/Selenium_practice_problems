const {Builder , By } = require("selenium-webdriver");
const driver =  new Builder().forBrowser("chrome").build();
 async function example() {
    let results = [];

    await driver.get(
        "https://datatables.net/examples/data_sources/server_side"
        );
   for(let i=1;i < 6; i++){
    let rows = await driver.findElements(By.xpath("//table//tr"));
    
   // console.log(rows,'rows')
    for(const row of rows){

      let Case = driver.switchTo().alert().getText();
      console.log(Case,'cases')
        let rowData =await  row.getText();
        let userData = rowData.split(/\n/);
       // console.log(userData,'userdata')
        results.push({
          employeeDetails:userData[0]
            //  firstName:userData[0],
            // lastName:userData[1],
            // position:userData[2],
            // office:userData[3],
            // startDate:userData[4],
            // salary:userData[5]
        })
    }
    
     await driver.findElement(By.css(".paginate_button"));
     }
    //console.log(results);

   // console.log(window.navigator.platform);
   console.log(driver.in,'driver')

    
}
example();