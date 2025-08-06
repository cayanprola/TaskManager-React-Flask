# React-Flask App Backend

This is the backend part of the React-Flask application. It is built using Python and Flask, providing a RESTful API for the frontend to interact with.

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd react-flask-app/backend
   ```

2. **Create a virtual environment** (optional but recommended):
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install the required packages**:
   ```
   pip install -r requirements.txt
   ```

4. **Run the Flask application**:
   ```
   python app.py
   ```

The backend will be running on `http://localhost:5000` by default.

## API Endpoints

- **GET /api/example**: Returns an example response.
- **POST /api/example**: Accepts data and returns a response.

## Usage

Make sure the backend is running before starting the frontend. The frontend will make API calls to the backend to fetch or send data.