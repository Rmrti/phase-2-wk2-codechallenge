Bot Battlr
Overview

Bot Battlr is a simple web app where you can collect, organize, and battle with different bots. The app lets you build your own army by picking bots with different abilities. You can also sort and filter bots to find the ones that suit your strategy best. Once you have enlisted your army, you can manage it by  releasing, or even permanently deleting bots.
Features

    Bot Collection: This lets you see a list of all available bots, including their stats like health, damage, armor, and catchphrase.
    Sorting: Lets you arrange bots based on their attributes, such as health or damage.
    Filtering: You can find specific bots by class to build a strong and balanced army.
    Enlisting Bots: This feature allows you to add bots to your army, but only one bot from each class can be enlisted at a time.
    Managing Your Army: Lets you view and manage your enlisted bots, check their stats, and choose whether to release or delete them.
    Bot Details: Clicking on a bot to see more detailed information about its abilities.
    Deleting Bots: Incase you don’t want a bot in your army anymore, you can remove it permanently from both your army and the database.

Technologies Used

This project is built using:

    React – Handles the app’s user interface and updates data in time .
    CSS – Used for styling the app and making it visually appealing.
    Fetch API – Retrieves bot data from the backend and allows actions like deleting bots.
    Backend API – The app connects to a backend server that stores all the bot information (assumed to be at http://localhost:8001/bots).but actually in (db.json)

Getting Started

      You can run the app here: https://rmrti.github.io/phase-2-wk2-codechallenge/

How the App Works
1. Viewing Bots

When you open the app, you'll see a collection of bots. You can browse through them, sort them by different stats, or filter them based on their class.
2. Selecting a Bot

Clicking on a bot will show more details about it, including its stats and catchphrase.
3. Enlisting a Bot

Click the photo of the bot to add a bot to your army. However, you can only have one bot per class in your army. If you try to add another bot of the same class, an alert will warn you.
4. Managing Your Army

Once a bot is in your army, you can:

    Release it – Remove it from your army without deleting it from the collection.
    Discharge it – Completely remove it from the database, meaning it's gone for good.(you have to refresh the page for it to actually reflect the changes to the database)

5. Sorting and Filtering

Use the Sort Bar to arrange bots based on health, damage, or other attributes. The Filter Bar helps you find bots of a specific class.
Project Structure

The project is organized into different files and folders for the main app and components:

/bot-battlr
  /src
    /components
      BotCollection.js   - Displays all available bots
      BotSpecs.js        - Shows details of a selected bot
      FilterBar.js       - Filters bots by class
      SortBar.js         - Sorts bots based on attributes
      YourBotArmy.js     - Displays the user's enlisted bots
    App.js               - Main file handling app logic
    App.css              - Styles the app
  package.json           - Lists dependencies and scripts

Contributing

If you’d like to contribute, you can fork this project and submit a pull request. Any improvements, whether fixing bugs or adding new features, are welcome!

Future Improvements

Making the bots actually 'fight' based on their stats and the stronger one wins(all stats considered)
Real time updating of the database without having to refresh the page.

License

This project is Free to use and edit. 
