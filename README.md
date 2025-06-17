# 🚖 Cabsy – Cab Fare Comparison Web App

**Cabsy** is a simple web application that allows users to compare fare prices across multiple cab service providers like **Ola**, **Uber**, and **Rapido**. Users can enter their pickup and drop locations, and the app will display fare comparisons based on a pre-defined static dataset.

---

## 🧰 Tech Stack

- **Frontend:** HTML5, CSS3, Bootstrap 5, JavaScript
- **Backend:** Node.js, Express.js
- **Data Source:** Static JSON dataset (`cab_fares.json`)


---

## 🚀 Features

- 🛫 **Search by Route**: Enter pickup and drop location.
- 🔍 **Compare Fares Instantly**: See side-by-side comparison of fares from Uber, Ola, and Rapido.
- 📊 **User-Friendly Interface**: Responsive design powered by Bootstrap.
- 🧪 **Static Dataset**: Currently uses a static JSON file for fare data simulation.

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```
git clone https://github.com/prajscoops/Cabsy---Compare-cab-fares.git
cd quickgo-cab-fare-app
```

### 2. Install Dependencies
```
npm install
```

### 3. Start the server
```
node server.js
```

### Server will start at http://localhost:5500

---
## 📦 Sample Usage
- Navigate to http://localhost:5500.

- Enter valid pickup and drop locations (e.g., "lohegaon" to "pune railway station").

- Click "Compare Fares".

- The app will redirect to the fare results page and show a detailed comparison.

---
## Note
- It only fetches static data from the JSON data set. So Only limited inputs can be given.
- No real time fare fetching is implemented.
- Various future improvements need to be done.

