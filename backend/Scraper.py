from selenium import webdriver
import os

class Scraper(object):

    def __init__(self):
        self.browser = webdriver.Chrome('./chromedriver')
        # self.browser = webdriver.Chrome('/app/.apt/usr/bin/google-chrome')
        # self.browser = webdriver.Chrome()

        # if os.getenv('GOOGLE_CHROME_SHIM'):
        #     self.browser = webdriver.Chrome(os.environ['GOOGLE_CHROME_SHIM'])
        # else:
        #     self.browser = webdriver.Chrome()
        # self.browser = webdriver.PhantomJS()

        self.browser.implicitly_wait(30)

    def getSearch(self, query):
        try:
            query = 'https://www.google.ca/search?q=' + '+'.join(query.split(' '))
            print(query)
            self.browser.get(query)
            links = [l.get_attribute('href') for l in self.browser.find_elements_by_xpath("//h3/a") if 'youtu' not in l.get_attribute('href')][:3]

        except Exception as e:
            raise e
            return []
        return links

    def cleanup(self):
        self.browser.close()

def scrapeTitle(title):
    s = Scraper()
    ret = s.getSearch(title)
    s.cleanup()
    return ret