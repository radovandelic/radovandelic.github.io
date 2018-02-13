### About:

This is a webscraper application that gets data about used forklift adverts from several webpages and compiles a list of the best offers based on make, model and price. It started out as a C# Windows application and gradually evolved into it's current form as a C# console application running 24/7 on a LAPP server with a small PHP application as support to show and filter the list of adverts.

### How to install:

1. Install LAPP server (same as LAMP, except with PostgreSQL instead of MySQL)
2. Install [dotnet SDK](https://www.microsoft.com/net/learn/get-started/linuxubuntu)
3. `git clone` the contents of this repository to /var/www
4. Create a db.cs file with your database connection string using backbone/db.example.cs as a template
5. Create a db.php file with your database connection string using html/db.example.php as a template
6. Go the /var/www/backbone directory and enter the `dotnet run &` command in your terminal
7. You should be seeing the first data rows being populated in localhost/index.php within a few seconds, the entire cycle should be done in 30-60 minutes and it runs again every 6 hours.