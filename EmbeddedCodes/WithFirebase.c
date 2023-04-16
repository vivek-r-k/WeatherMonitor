#include<WiFi.h>
#include<Firebase ESP client.h> 
#include "addons/TokenHelper.h" 
#include "addons/RTDBHelper.h"

#define WIFI_SSID ""
#define WIFI_PASSWORD ""
#define API_KEY "AIzaSyBIXroPUOFonqFSpjjoNHwt2ivsla5cPl8"
#define DATABASE_URL "https://minitest-1e671-default-rtdb.firebaseio.com/"

FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;
unsigned long sendDataPrevMillis = 0;
bool signupOK = false;

void setup() {
    Serial.begin(115200);
    WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
    Serial.print ("Connecting to Wi-Fi");
    while (WiFi.status() != WL_CONNECTED) { 
        Serial.print("."); 
        delay (300);
    }
    Serial.println();
    Serial.print ("Connected with IP: ");
    Serial.println (WiFi.localIP());
    Serial.println();
    config.api_key= API_KEY;
    config.database_url = DATABASE_URL;
    if (Firebase.signUp (&config, &auth, "", "")) {
    Serial.println("signUp OK");
    signupOK = true;
    }
    else{
        Serial.printf("%s\n", config.signer.signupError.message.c_str());
    }
    config.token_status_callback = tokenStatusCallback;
    Firebase.begin (&config, &auth); 
    Firebase.reconnectWiFi (true);
}

void loop() {
    if (Firebase.ready() && signupOK && (millis() - sendDataPrevMillis > 5000 || sendDataPrevMillis == 0)) {
        sendDataPrevMillis = millis();
        // STORE sensor data to a RTDB

        float temperature = bmp.readTemperature();
        float pressure = bmp.readPressure() / 100.0F;
        float altitude = bmp.readAltitude();
        float humidity = dht.readHumidity();
        float mq135_value = read_mq135();

        if (Firebase. RTDB.setInt(&fbdo, "LHCBuilding/Temperature/Value", temperature)) {
            Serial.println(); 
            Serial.print (temperature);
            Serial.print(" - successfully saved to: "+fbdo.dataPath());
            Serial.println(" ("+fbdo.dataType() + ")");
        }
        else{
            Serial.println("FAILED: "+fbdo.errorReason ());
        }
        if (Firebase. RTDB.setInt(&fbdo, "LHCBuilding/Pressure/Value", pressure)) {
            Serial.println(); 
            Serial.print (pressure);
            Serial.print(" - successfully saved to: "+fbdo.dataPath());
            Serial.println(" ("+fbdo.dataType() + ")");
        }
        else{
            Serial.println("FAILED: "+fbdo.errorReason ());
        }
        if (Firebase. RTDB.setInt(&fbdo, "LHCBuilding/Altitude/Value", altitude)) {
            Serial.println(); 
            Serial.print (altitude);
            Serial.print(" - successfully saved to: "+fbdo.dataPath());
            Serial.println(" ("+fbdo.dataType() + ")");
        }
        else{
            Serial.println("FAILED: "+fbdo.errorReason ());
        }
        if (Firebase. RTDB.setInt(&fbdo, "LHCBuilding/Humidity/Value", humidity)) {
            Serial.println(); 
            Serial.print (humidity);
            Serial.print(" - successfully saved to: "+fbdo.dataPath());
            Serial.println(" ("+fbdo.dataType() + ")");
        }
        else{
            Serial.println("FAILED: "+fbdo.errorReason ());
        }
        if (Firebase. RTDB.setInt(&fbdo, "LHCBuilding/Gas/Value", mq135_value)) {
            Serial.println(); 
            Serial.print (mq135_value);
            Serial.print(" - successfully saved to: "+fbdo.dataPath());
            Serial.println(" ("+fbdo.dataType() + ")");
        }
        else{
            Serial.println("FAILED: "+fbdo.errorReason ());
        }
    }
}

// 2nd

#include <WiFi.h>
#include <FirebaseESP32.h>
#include "addons/TokenHelper.h"
#include "addons/RTDBHelper.h"

#define WIFI_SSID ""
#define WIFI_PASSWORD ""
#define API_KEY "AIzaSyBIXroPUOFonqFSpjjoNHwt2ivsla5cPl8"
#define DATABASE_URL "https://minitest-1e671-default-rtdb.firebaseio.com/"
#define DATA_SEND_INTERVAL 180000 //3 minutes in milliseconds

FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;
unsigned long sendDataPrevMillis = 0;
bool signupOK = false;

void setup() {
  Serial.begin(115200);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(300);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();
  config.api_key = API_KEY;
  config.database_url = DATABASE_URL;
  if (Firebase.signUp(&config, &auth, "", "")) {
    Serial.println("signUp OK");
    signupOK = true;
  }
  else {
    Serial.printf("%s\n", config.signer.signupError.message.c_str());
  }
  config.token_status_callback = tokenStatusCallback;
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);
}

void loop() {
  if (Firebase.ready() && signupOK && (millis() - sendDataPrevMillis > 180000 || sendDataPrevMillis == 0)) {
    sendDataPrevMillis = millis();
    // STORE sensor data to a RTDB
    unsigned long timestamp = now();

    float temperature = bmp.readTemperature();
    float pressure = bmp.readPressure() / 100.0F;
    float altitude = bmp.readAltitude();
    float humidity = dht.readHumidity();
    float mq135_value = read_mq135();

    FirebaseJson json;
    json.add("Timestamp", String(timestamp));
    json.add("Value", String(temperature));
    Firebase.RTDB.setString(&fbdo, "/LHC/Temperature", json.toString());
    Serial.printf("Temperature: %f\n", temperature);

    json.clear();
    json.add("Timestamp", String(timestamp));
    json.add("Value", String(pressure));
    Firebase.RTDB.setString(&fbdo, "/LHC/Pressure", json.toString());
    Serial.printf("Pressure: %f\n", pressure);

    json.clear();
    json.add("Timestamp", String(timestamp));
    json.add("Value", String(altitude));
    Firebase.RTDB.setString(&fbdo, "/LHC/Altitude", json.toString());
    Serial.printf("Altitude: %f\n", altitude);

    json.clear();
    json.add("Timestamp", String(timestamp));
    json.add("Value", String(humidity));
    Firebase.RTDB.setString(&fbdo, "/LHC/Humidity", json.toString());
    Serial.printf("Humidity: %f\n", humidity);

    json.clear();
    json.add("Timestamp", String(timestamp));
    json.add("Value", String(mq135_value));
    Firebase.RTDB.setString(&fbdo, "/LHC/Gas", json.toString());
    Serial.printf("Gas: %f\n", mq135_value);
  }
}
