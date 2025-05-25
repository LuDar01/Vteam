-- schema.sql

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('customer', 'admin') NOT NULL DEFAULT 'customer',
    prepaid_balance DECIMAL(10,2) DEFAULT 0.00,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE scooters (
    id INT AUTO_INCREMENT PRIMARY KEY,
    serial_number VARCHAR(100) UNIQUE NOT NULL,
    status ENUM('available', 'in_use', 'charging', 'maintenance') DEFAULT 'available',
    battery_level INT DEFAULT 100,
    is_locked BOOLEAN DEFAULT TRUE,
    needs_service BOOLEAN DEFAULT FALSE,
    latitude DOUBLE,
    longitude DOUBLE
);

CREATE TABLE stations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    latitude DOUBLE,
    longitude DOUBLE,
    type ENUM('charging', 'parking') NOT NULL
);

CREATE TABLE trips (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    scooter_id INT NOT NULL,
    start_time DATETIME,
    end_time DATETIME,
    start_latitude DOUBLE,
    start_longitude DOUBLE,
    end_latitude DOUBLE,
    end_longitude DOUBLE,
    cost DECIMAL(10,2),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (scooter_id) REFERENCES scooters(id)
);

CREATE TABLE payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    method ENUM('prepaid', 'monthly') NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
