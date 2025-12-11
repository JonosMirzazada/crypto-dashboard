# Crypto Dashboard 🚀

A modern cryptocurrency tracker built with **React**, **Vite**, and **TailwindCSS**.  
Track real-time cryptocurrency prices, market data, and visualize price changes with **grid** and **list** views.  
Click on a coin to view detailed information and a 7-day price chart.

---

## Features

- Fetches live cryptocurrency data from [CoinGecko API](https://www.coingecko.com/en/api)
- Grid and List views for flexible browsing
- Search functionality to find specific coins
- Sort by Rank, Price, or Market Cap
- Clickable coins with a **Coin Details** page
- Price change indicators with colored text (green/red) and emojis 📈/📉
- 7-day price chart for each coin using **Chart.js**
- Loading spinner while fetching data
- Responsive design with **TailwindCSS**
- Dark theme background for consistent UI

---

## Tech Stack

- **React 18** – Frontend library
- **Vite** – Fast development and build tooling
- **TailwindCSS 4** – Utility-first styling
- **React Router v6** – Navigation between pages
- **Chart.js & react-chartjs-2** – Line charts for price data
- **Fetch API** – Getting cryptocurrency data
- **Git & GitHub** – Version control

---

## Home Page:
he main dashboard showing a list of cryptocurrencies with live prices, market caps, and 24h change indicators. Users can search, sort, and switch between grid and list views.

<img width="959" height="506" alt="image" src="https://github.com/user-attachments/assets/f156ea96-f02d-4389-bf16-00566f4ddf59" />

---

## Coine Detail:
Detailed view for a selected cryptocurrency, including current price, market cap, 24h change, and a 7-day price chart.

<img width="959" height="506" alt="image" src="https://github.com/user-attachments/assets/8cdec26c-8e7d-4fb1-a2cc-b436178b0f83" />



## Installation

1. Clone the repository:

```bash
git clone https://github.com/JonosMirzazada/crypto-dashboard.git
cd crypto-dashboard

## Instal dependecis
npm install

## Start the development server:
npm run dev
