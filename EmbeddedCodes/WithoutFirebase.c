#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BMP085.h>
#include <DHT.h>

#define DHTPIN 4
#define DHTTYPE DHT22

Adafruit_BMP085 bmp;
DHT dht(DHTPIN, DHTTYPE);

const int MQ135_PIN = 23;
const int INTERVAL = 2000;

void setup() {
  Serial.begin(9600);
   

  delay(5000);
 if (!bmp.begin()) {
    Serial.println("Could not find a valid BMP180 sensor, check wiring!");
    while (1);
  }



  dht.begin();
   
}

void loop() {
  float temperature = bmp.readTemperature();
  float pressure = bmp.readPressure() / 100.0F;
  float altitude = bmp.readAltitude();
  float humidity = dht.readHumidity();
  float mq135_value = read_mq135();

  Serial.print("Temperature = ");
  Serial.print(temperature);
  Serial.println(" *C");

  Serial.print("Pressure = ");
  Serial.print(pressure);
  Serial.println(" hPa");

  Serial.print("Altitude = ");
  Serial.print(altitude);
  Serial.println(" m");

  Serial.print("Humidity = ");
  Serial.print(humidity);
  Serial.println(" %");

  Serial.print("MQ135 = ");
  Serial.print(mq135_value);
  Serial.println(" ppm");

  Serial.println();

  delay(INTERVAL);
}

float read_mq135() {
  int val = analogRead(MQ135_PIN);
  float ppm = (((val / 1024.0) * 5.0) - 0.1) / 0.4 * 1000.0;
  return ppm;
}