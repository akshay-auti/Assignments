try:
    from setuptools import setup
except ImportError:
    from distutils.core import setup
    
config = {
     'description': 'My Project',
     'author': 'My Name',
     'url': 'URL to get it at.',
     'download_url': 'Where to download it',
     'auther_email': 'My email',
     'version': '0.1',
     'install_requires':['nose'],
     'packges': ['ex47'],
     'scripts': [],
     'name': 'ex47' 
}

setup(**config)
        
