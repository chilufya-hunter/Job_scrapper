# scraper.py
import requests
from bs4 import BeautifulSoup

def scrape_jobs():
    # This is a placeholder function. In a real application, you'd implement
    # the actual scraping logic here.
    jobs = [
        {
            "title": "Software Developer",
            "company": "Tech Co",
            "location": "Lusaka",
            "type": "Full-time",
            "deadline": "2024-12-31",
            "description": "Exciting opportunity for a skilled developer...",
            "link": "https://example.com/job1"
        },
        {
            "title": "Marketing Manager",
            "company": "Marketing Inc",
            "location": "Kitwe",
            "type": "Part-time",
            "deadline": "2024-11-30",
            "description": "Join our dynamic marketing team...",
            "link": "https://example.com/job2"
        }
    ]
    return jobs
