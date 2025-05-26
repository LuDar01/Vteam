INSERT INTO cities (name, latitude, longitude) VALUES
('Stockholm', 59.3293, 18.0686),
('Göteborg', 57.7089, 11.9746);

INSERT INTO stations (city_id, name, latitude, longitude, bike_count) VALUES
(1, 'Centralstationen', 59.3303, 18.0596, 12),
(2, 'Brunnsparken', 57.7072, 11.9670, 7);

INSERT INTO parking_zones (city_id, name, latitude, longitude, fee_per_hour) VALUES
(1, 'Gamla Stan', 59.324, 18.07, 15.00),
(2, 'Avenyn', 57.701, 11.974, 12.00);

INSERT INTO customers (name, email, balance) VALUES
('Anna Andersson', 'anna@example.com', 100.50),
('Erik Eriksson', 'erik@example.com', 200.75);

INSERT INTO trips (customer_id, start_time, end_time, cost) VALUES
(1, '2024-06-01 08:00:00', '2024-06-01 08:10:00', 22.50),
(2, '2024-06-01 09:15:00', '2024-06-01 09:30:00', 18.00);
