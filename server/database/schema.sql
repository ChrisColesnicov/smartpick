-- Active: 1722333768838@@127.0.0.1@3306@smartpick
CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL
);

INSERT INTO
    user (
        email,
        password,
        firstname,
        lastname
    )
VALUES (
        "user@mail.com",
        "password",
        "John",
        "User"
    );

CREATE TABLE admin (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL
);

INSERT INTO
    admin (
        email,
        password,
        firstname,
        lastname
    )
VALUES (
        "admin@mail.com",
        "password",
        "John",
        "Admin"
    );

CREATE TABLE brand (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO
    brand (name)
VALUES ("Apple"),
    ("Samsung"),
    ("Google"),
    ("Xiaomi"),
    ("Nothing"),
    ("OnePlus"),
    ("Poco"),
    ("Honor"),
    ("Oppo"),
    ("Huawei"),
    ("Sony"),
    ("Vivo"),
    ("Realme"),
    ("Nokia"),
    ("Motorola"),
    ("Asus"),
    ("LG"),
    ("HTC"),
    ("Other");

CREATE TABLE screen_type (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO
    screen_type (name)
VALUES ("OLED"),
    ("Super Retina XDR"),
    ("AMOLED"),
    ("LCD"),
    ("TFT"),
    ("Mini-LED"),
    ("Other");

CREATE TABLE screen_protection_type (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO
    screen_protection_type (name)
VALUES ("Ceramic Shield"),
    ("Gorilla Glass Victus 2"),
    ("Gorilla Glass Victus"),
    ("Gorillas Glass 6"),
    ("Gorilla Glass 5"),
    ("Other");

CREATE TABLE bluetooth (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO
    bluetooth (name)
VALUES ("Bluetooth 5.3 or above"),
    ("Bluetooth 5.2"),
    ("Bluetooth 5.1"),
    ("Bluetooth 5.0 or below");

CREATE TABLE wifi (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO
    wifi (name)
VALUES ("Wi-Fi 7 (802.11be)"),
    ("Wi-Fi 6E (802.11ax)"),
    ("Wi-Fi 6 (802.11ax)"),
    ("Wi-Fi 5 (802.11ac) or below");

CREATE TABLE connectivity (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO
    connectivity (name)
VALUES ("5G"),
    ("4G (LTE)"),
    ("Other");

CREATE TABLE system_type (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO
    system_type (name)
VALUES ("Android"),
    ("iOS"),
    ("Windows Phone"),
    ("Other");

CREATE TABLE phone (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    picture VARCHAR(255),
    brand_id INT NOT NULL,
    model VARCHAR(100) NOT NULL,
    chip VARCHAR(100),
    ram INT,
    price INT,
    release_year INT,
    screen_type_id INT NOT NULL,
    screen_variable_refresh BOOL,
    screen_min_refresh INT,
    screen_max_refresh INT,
    screen_protection_type_id INT NOT NULL,
    brightness_typical iNT,
    brightness_max INT,
    battery_size INT,
    battery_recharge_rate INT,
    wireless_charging BOOL,
    camera_number INT,
    wide_angle_Mpx INT,
    wide_angle_focus VARCHAR(100),
    ultrawide_angle_Mpx INT,
    ultrawide_angle_focus VARCHAR(100),
    other_Mpx INT,
    other_focus VARCHAR(100),
    video_record_capacity VARCHAR(100),
    height FLOAT,
    width FLOAT,
    thickness FLOAT,
    weight FLOAT,
    phone_material VARCHAR(100),
    bluetooth_id INT NOT NULL,
    wifi_id INT NOT NULL,
    connectivity_id INT NOT NULL,
    system_type_id INT NOT NULL,
    minimum_storage INT,
    maximum_storage INT,
    storage_extension_available BOOL,
    admin_id INT NOT NULL,
    CONSTRAINT fk_brand FOREIGN KEY (brand_id) REFERENCES brand (id),
    CONSTRAINT fk_screen_type FOREIGN KEY (screen_type_id) REFERENCES screen_type (id),
    CONSTRAINT fk_screen_protection_type FOREIGN KEY (screen_protection_type_id) REFERENCES screen_protection_type (id),
    CONSTRAINT fk_bluetooth FOREIGN KEY (bluetooth_id) REFERENCES bluetooth (id),
    CONSTRAINT fk_wifi FOREIGN KEY (wifi_id) REFERENCES wifi (id),
    CONSTRAINT fk_connectivity FOREIGN KEY (connectivity_id) REFERENCES connectivity (id),
    CONSTRAINT fk_system_type FOREIGN KEY (system_type_id) REFERENCES system_type (id),
    CONSTRAINT fk_admin FOREIGN KEY (admin_id) REFERENCES admin (id)
);

INSERT INTO
    phone (
        picture,
        brand_id,
        model,
        chip,
        ram,
        price,
        release_year,
        screen_type_id,
        screen_variable_refresh,
        screen_min_refresh,
        screen_max_refresh,
        screen_protection_type_id,
        brightness_typical,
        brightness_max,
        battery_size,
        battery_recharge_rate,
        wireless_charging,
        camera_number,
        `wide_angle_Mpx`,
        wide_angle_focus,
        `ultrawide_angle_Mpx`,
        ultrawide_angle_focus,
        `other_Mpx`,
        other_focus,
        video_record_capacity,
        height,
        width,
        thickness,
        weight,
        phone_material,
        bluetooth_id,
        wifi_id,
        connectivity_id,
        system_type_id,
        minimum_storage,
        maximum_storage,
        storage_extension_available,
        admin_id
    )
VALUES (
        "https://m.media-amazon.com/images/I/71vKy5OHuPL.jpg",
        1,
        "iPhone 15",
        "A16 Bionic",
        6,
        999,
        2023,
        2,
        FALSE,
        60,
        60,
        1,
        1000,
        2000,
        3279,
        20,
        TRUE,
        2,
        48,
        "f/1.6",
        12,
        "f/2.4",
        12,
        "f/2.8",
        "4K@60fps",
        147.6,
        71.6,
        7.8,
        171,
        "Aluminium",
        1,
        3,
        1,
        2,
        128,
        512,
        FALSE,
        1
    );

CREATE TABLE review (
  user_id INT NOT NULL,
  phone_id INT NOT NULL,
  content TEXT NOT NULL,
  score INT NOT NULL,
  date DATE NOT NULL,
  CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES user(id),
  CONSTRAINT fk_phone FOREIGN KEY (phone_id) REFERENCES phone(id)
);