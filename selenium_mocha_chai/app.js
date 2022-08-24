const {Builder , By } = require("selenium-webdriver");
const driver =  new Builder().forBrowser("chrome").build();

async function example() {

    await driver.get(
        "https://github.com/"
        );
driver=new ChromeDriver();					
try{			
 
    var file = new File("Cookies.data");							
    var fileReader = new FileReader(file);							
    var Buffreader = new BufferedReader(fileReader);							
    var strline;			
    while((strline=Buffreader.readLine())!=null){									
    StringTokenizer token = new StringTokenizer(strline,";");									
    while(token.hasMoreTokens()){					
    String name = token.nextToken();					
    String value = token.nextToken();					
    String domain = token.nextToken();					
    String path = token.nextToken();					
    Date expiry = null;					
            
    String val;			
    if(!(val=token.nextToken()).equals("null"))
    {		
        expiry = new Date(val);					
    }		
    Boolean isSecure = new Boolean(token.nextToken()).								
    booleanValue();		
    Cookie ck = new Cookie(name,value,domain,path,expiry,isSecure);			
    System.out.println(ck);
    driver.manage().addCookie(ck); // This will add the stored cookie to your current session					
    }		
    }		
    }catch(Exception ex){					
    ex.printStackTrace();			
    }		
    driver.get("http://demo.guru99.com/test/cookie/selenium_aut.php");					
}	