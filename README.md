# url-shortener
A URL Shortener developed using React JS and Django.

For Demo Purpose check - 
https://free-url-shortener.herokuapp.com/

Instructions to use - 

  - Clone this Repository
  - Pip install all the requirements from requirements.txt file into your virtual environment using - 
      pip install -r requirements.txt
      
  - Now , navigate to shortener directory and run -
      npm run build
      
  - navigate back to base directory containing manage.py file and run - 
      python manage.py makemigrations
      python manage.py migrate
      
  - Finally , after successfully executing above commands , run -
      python manage.py runserver
      
  - Now , navigate to http://localhost:8000  on your url , and see this app running.
