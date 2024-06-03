# Family Budget Application

## Description

This application helps you manage your family budget by keeping track of your income and expenses. It is built with Angular for the frontend and Laravel for the backend, and it uses SQLite for the local database.

## Features

- **Navigation Bar**: Includes links to the Main page, Budget page, and About page.
- **Main Page**: Displays an introduction to the application, and shows the overall income and outcome values.
- **About Page**: Shows the author's details including name, Neptun ID, and email address.
- **Budget Page**: Displays a list of budget entries including title, amount, and category. Provides links to add a new entry or edit existing entries.
- **Add New Budget Entry**: Allows users to add a new budget entry through a form.
- **Edit Budget Entry**: Allows users to edit an existing budget entry through a prefilled form.

## Installation

### Client (Angular)

1. Navigate to the `client` directory:

   ```bash
   cd client
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Serve the Angular application:
   ```bash
   ng serve
   ```

### Server (Laravel)

1. Navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install the dependencies:

   ```bash
   composer install
   ```

3. Set up the database:

   ```bash
   php artisan migrate --seed
   ```

4. Serve the Laravel application:
   ```bash
   php artisan serve
   ```

## Usage

1. Open your web browser and navigate to http://localhost:4200 to access the Angular frontend.
2. Use the navigation bar to explore different pages:
- **Main Page:** View the overall budget summary.
- **About Page:** Learn about the author.
- **Budget Page:** Manage budget entries, add new ones, or edit existing ones.
