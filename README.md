# TamilMovieAutomation
UIPATH RPA bot for automation
Every website has their own database and it has lot of data. Data need to be uploaded in those websites frequently. In some cases, this job may be a repetitive work. To avoid this repetitive work, UIPATH RPA bots can be implement. Those bots are capable of doing this repetitive work. There is no website that shows movie information in Tamil till date. Creating a website that stores movie information in Tamil is a good idea, but the problem is uploading the movie information in Tamil. The processes are collecting data from IMDB website and translate those collected data into Tamil, then upload those data into the database of the created website. This might be a repetitive and boring job, to automate this work UIPATH RPA bots can be implemented. UIPATH RPA bots are capable of doing the above-mentioned job, it will automatically read movie name from an excel sheet and search the movie in IMDB website and scrap the movie information from the IMDB website and translate it with the help of third party website then it log in into the โTamil Moviesโ website as an admin and then upload those movie details in Tamil. This bot runs at 07:00PM daily without any human intervention.

I've developed my own website called '๐ง๐ฎ๐บ๐ถ๐น๐ ๐ผ๐๐ถ๐ฒ๐' there, movie details are present in Tamil. To upload movie details, I've to collect data from IMDB website and translate it into Tamil and then upload those details into my website. So it is a repetitive and boring job, to automate this work. I developed my own bot that will do the following processes.

# ๐๐ผ๐ ๐ฝ๐ฟ๐ผ๐ฐ๐ฒ๐๐๐ฒ๐:
1.Login into the TamilMovies website as an admin.
2.Iterate over movie names in excel sheet and collect data from IMDB website with respect to movie name.
3.Translate those data and upload it into the TamilMovies website.
4.Send email to me that contains title of all uploaded movies today.

#### Daily at 07:26 PM my bot will run automatically and do the above mentioned work ๐ฌ๐๐ฉ๐๐ค๐ช๐ฉ ๐๐ฃ๐ฎ ๐๐ช๐ข๐๐ฃ ๐๐ฃ๐ฉ๐๐ง๐ซ๐๐ฃ๐ฉ๐๐ค๐ฃ. Here I included the demo video of that bot.
video link : https://youtu.be/jmg3mcGEAaA

## Architecture diagram
![architecture diagram](https://user-images.githubusercontent.com/75019244/204228941-365296ca-7e89-4c0a-a224-a170a5b6fcbe.png)
