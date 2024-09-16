# Airbnb Clone - Full-Stack Application

## Overview

This project is a **full-stack Airbnb clone** built with a **Django Rest Framework (DRF)** backend and a **Next.js** frontend. It replicates core features of Airbnb, including property listings, user authentication, booking management, and a **real-time chat system** powered by **Django Channels** and **Socket.IO** on the frontend.

The backend is served using **Daphne** for ASGI support, enabling WebSocket connections for the chat system. The project is fully **Dockerized**, making it easy to deploy across multiple environments, and leverages **Aiven's managed PostgreSQL** service for scalable, cloud-hosted database management.

## Key Features

### 1. **User Authentication and Authorization**
   - User registration, login, and logout functionalities.
   - JWT-based authentication via **Django SimpleJWT** for secure API communication.
   - Email verification and password reset functionalities using **django-allauth**.
   - Role-based access control (admin and regular users).

### 2. **Property Listings & Bookings**
   - Property creation, viewing, and management with image uploads.
   - Property listings with detailed descriptions, price per night, and amenities.
   - Booking system that allows users to book available properties.
   - **Pillow** is used for image manipulation in property listings.

### 3. **Real-Time Chat Application**
   - **Django Channels** and **Daphne** are used to support WebSockets, enabling real-time communication.
   - **Socket.IO** on the frontend integrates seamlessly with the ASGI-powered backend.
   - Users can engage in real-time chat with property landlords.
   - Chat history is stored in **PostgreSQL**, hosted by **Aiven**, ensuring scalability.

### 4. **Search & Filter Functionality**
   - Users can search for properties based on location, price, availability, and other filters.
   - Search queries are optimized using **Django's ORM** for efficient database querying.

### 5. **Booking Management**
   - Users can view their bookings and manage them through a personalized dashboard.
   - Property owners can manage bookings and approve or reject reservation requests.

### 6. **Dockerization**
   - Fully **Dockerized** for simplified development, testing, and deployment.
   - **Dockerfile** and `railway.toml` provided to easily run the backend services on platforms like **Railway**.
   - Seamlessly deployable across different environments using containers.

### 7. **Socket.IO Integration**
   - The frontend uses **Socket.IO** to enable real-time communication between the client and server.
   - WebSocket communication ensures minimal delay in chat and other real-time features.

### 8. **PostgreSQL Database with Aiven**
   - The project leverages **Aiven's managed PostgreSQL** for robust and scalable database management.
   - All user data, property listings, and chat messages are stored securely in the PostgreSQL database.

### 9. **Next.js Frontend**
   - The frontend is built with **Next.js** for server-side rendering (SSR), enhancing SEO and page load speed.
   - The project follows a modern, component-based architecture using **React**.
   - **API Routes** in Next.js communicate efficiently with the Django backend via RESTful APIs.

### 10. **Security**
   - All API endpoints are secured with **JWT authentication** using Django SimpleJWT.
   - **CSRF** protection for forms and authenticated requests.
   - HTTPS enforced in production for secure communication.

### 11. **Scalability & Performance**
   - Backend optimized with **Daphne** to handle WebSocket connections for real-time updates.
   - PostgreSQL hosted on **Aiven** ensures reliable and scalable data storage.
   - **Gunicorn** and **Uvicorn** could be used as alternatives for deployment in a production environment.
   - The frontend and backend are decoupled, allowing independent scaling of both services.

## Tech Stack

### **Backend (Django DRF)**
   - Django 5.x
   - Django Rest Framework (DRF)
   - Django Channels for WebSockets
   - Daphne ASGI server
   - PostgreSQL hosted on Aiven
   - SimpleJWT for JWT-based authentication
   - Docker for containerization

### **Frontend (Next.js)**
   - Next.js (React Framework) for server-side rendering and routing
   - Socket.IO for real-time communication with the backend
   - TailwindCSS for styling
   - Axios for making API calls to the Django backend

### **Infrastructure**
   - **Aiven PostgreSQL** for cloud-hosted database management.
   - **Docker** for containerization and ease of deployment.
   - **Railway** for hosting the backend services using a `railway.toml` configuration file.

## Setup & Installation

### Backend (Django)
1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/airbnb-clone.git
   cd airbnb-clone/backend
## Setup & Installation

### Backend (Django)
1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/airbnb-clone.git
   cd Airbnb-clone/backend
Create a virtual environment:

bash
Copy code
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
Install dependencies:

bash
Copy code
pip install -r requirements.txt
Set environment variables:

Configure your .env file for PostgreSQL, Django settings, and secret keys.
Run migrations:

bash
Copy code
python manage.py migrate
Run the development server:

bash
Copy code
python manage.py runserver
Frontend (Next.js)
Navigate to the frontend directory:

bash
Copy code
cd ../frontend
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
Docker (Optional)
To run the entire project using Docker:

Build the Docker image:

bash
Copy code
docker build -t airbnb-clone-backend .
Run the container:

bash
Copy code
docker run -p 8000:8000 airbnb-clone-backend
How to Contribute
Fork the repository.
Create a new branch for your feature or bug fix.
Submit a pull request to the main branch.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
For any inquiries or questions, please reach out via email at your.email@example.com.