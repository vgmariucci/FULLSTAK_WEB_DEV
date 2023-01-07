import requests 

sites = ["https://google.com", "https://www.linkedin.com/", "https://github.com"]

                
def getRequestSites():
    for site in sites:
        req =   requests.get(site)
        print(site, req.status_code)
    

getRequestSites()




