Feature:Login into the github and navigate to profile page


Scenario:Access for github login page 
Given Navigate to the github url
When i enter the username and password
Then i will logined succesfully and navigate to home page


 Scenario: Accesss github profile page      
        Given dropdown is selected 
        When  your profile is clicked         
        Then redirect to user profile page
