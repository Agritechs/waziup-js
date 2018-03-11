'use strict'
import QuantityKinds from './QuantityKinds.js'

/* Sensing devices list
  Generated from FIESTA IoT ontology with this Jena SPARQL script:
  1 PREFIX qu:<http://purl.org/NET/ssnx/qu/qu#>
  2 PREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>
  3 PREFIX ssn:<http://purl.oclc.org/NET/ssnx/ssn#>
  4 SELECT (strafter(str(?subClass), "#") AS ?quantityKind)
  5 WHERE { ?subClass rdfs:subClassOf* ssn:SensingDevice. } 
  $ bin/sparql --data=http://ontology.fiesta-iot.eu/ontologyDocs/fiesta-iot.owl --query=./rq --results=TSV
  Reference paper: R. Agarwal, D. Farnandez, T. Elsaleh, A.Gyrard, J. Lanza, L. Sanchez, N. Georgantas, V. Issarny, "Unified IoT Ontology to Enable Interoperability and Federation of Testbeds", 3rd IEEE WF-IoT, pp. 70-75, Reston USA, 12-14 December 2016
*/

const dic = [
{id: "Accelerometer",                     label: "Accelerometer",                    QK: ["Acceleration", "AccelerationInstantaneous"]},
{id: "AirHumiditySensor",                 label: "Air humidity sensor",              QK: ["Percent"]},
{id: "AirPollutantSensor",                label: "Air pollutant sensor",             QK: ["AirPollution"]},   
{id: "AirThermometer",                    label: "Air thermometer",                  QK: ["AirTemperature"]},
{id: "AlcoholLevelSensor",                label: "Alcohol level sensor",             QK: ["AlcoholLevel"]},
{id: "AtmosphericPressureSensor",         label: "Atmospheric pressure sensor",      QK: ["AtmosphericPressure"]},
{id: "BloodPressureSensor",               label: "Blood pressure sensor",            QK: ["BloodPressure"]},
{id: "BoardThermometer",                  label: "Board thermometer",                QK: ["BoardTemperature"]},
{id: "BoardVoltageSensor",                label: "Board voltage sensor",             QK: ["Voltage"]},
{id: "BodyThermometer",                   label: "Body thermometer",                 QK: ["BodyTemperature"]},
{id: "CholesterolSensor",                 label: "Cholesterol sensor",               QK: ["Cholesterol"]},
{id: "Clock",                             label: "Clock",                            QK: ["Timestamp"]},
{id: "CloudCoverSensor",                  label: "Cloud cover sensor",               QK: ["CloudCover"]},
{id: "CO2Sensor",                         label: "CO2 sensor",                       QK: ["CO2"]}, 
{id: "ConductivitySensor",                label: "Conductivity sensor",              QK: ["Conductivity"]},
{id: "COSensor",                          label: "CO sensor",                        QK: ["ChemicalAgentAtmosphericConcentrationCO"]},
{id: "Counter",                           label: "Counter",                          QK: ["Count"]},
{id: "CurrentSensor",                     label: "Current sensor",                   QK: ["ElectricCurrent"]},
{id: "DeltaDewPointSensor",               label: "Delta dew point sensor",           QK: ["DewPoint, DewPointTemperature"]},
{id: "DeviceUptimeClock",                 label: "Device uptime clock",              QK: ["DeviceUptime"]},
{id: "DewPointSensor",                    label: "Dew point sensor",                 QK: ["DewPoint, DewPointTemperature"]},
{id: "DirectionOfArrivalSensor",          label: "Direction of arrival sensor",      QK: ["DirectionOfArrival"]},
{id: "DistanceNextVehicleSensor",         label: "Distance next vehicle sensor",     QK: ["DistanceNextVehicle"]},
{id: "DistanceSensor",                    label: "Distance sensor",                  QK: ["Distance"]},
{id: "DoorStateSensor",                   label: "Door state sensor",                QK: ["DoorStatus"]},
{id: "DustSensor",                        label: "Dust sensor",                      QK: ["ChemicalAgentAtmosphericConcentrationDust"]},
{id: "ElectricalSensor",                  label: "Electrical sensor",                QK: ["ElectricalResistance", "ElectricCharge", "ElectricCurrent", "ElectricField", "ElectricPotential", "ActivePower", "BatteryLevel", "Capacitance", "ReactivePower"]},
{id: "ElectricFieldSensor",               label: "Electric field sensor",            QK: ["ElectricField"]},
{id: "EnergyMeter",                       label: "Energy meter",                     QK: ["Energy"]},
{id: "FallDetector",                      label: "Fall detector",                    QK: ["Acceleration", "AccelerationInstantaneous"]},
{id: "FrequencySensor",                   label: "Frequency sensor",                 QK: ["Frequency"]},
{id: "FuelLevel",                         label: "Fuel level",                       QK: ["FillLevel", "FillLevelGasTank"]},
{id: "FuelConsumptionSensor",             label: "Fuel consumption sensor",          QK: ["FuelConsumption", "FuelConsumptionInstantaneous", "FuelConsumptionTotal"]},
{id: "GasDetector",                       label: "Gas detector",                     QK: ["ChemicalAgentAtmosphericConcentration", "ChemicalAgentAtmosphericConcentrationAirParticles", "ChemicalAgentAtmosphericConcentrationCO", "ChemicalAgentAtmosphericConcentrationDust", "ChemicalAgentAtmosphericConcentrationNH3", "ChemicalAgentAtmosphericConcentrationNO", "ChemicalAgentAtmosphericConcentrationNO2", "ChemicalAgentAtmosphericConcentrationO3", "ChemicalAgentAtmosphericConcentrationSO2", "ChemicalAgentAtmosphericConcentrationVOC"]},
{id: "GaseousPollutantSensor",            label: "Gaseous pollutant sensor",         QK: ["AirPollution", "ChemicalAgentConcentration", "ChemicalAgentAtmosphericConcentration", "ChemicalAgentAtmosphericConcentrationAirParticles", "ChemicalAgentAtmosphericConcentrationCO", "ChemicalAgentAtmosphericConcentrationDust", "ChemicalAgentAtmosphericConcentrationNH3", "ChemicalAgentAtmosphericConcentrationNO", "ChemicalAgentAtmosphericConcentrationNO2", "ChemicalAgentAtmosphericConcentrationO3", "ChemicalAgentAtmosphericConcentrationSO2", "ChemicalAgentAtmosphericConcentrationVOC", "AirQuality"]},
{id: "Glucometer",                        label: "Glucometer",                       QK: ["BloodGlucose"]},
{id: "GPSSensor",                         label: "GPS sensor",                       QK: ["Position"]},
{id: "GyroscopeSensor",                   label: "Gyroscope sensor",                 QK: ["AngularSpeed", "RotationalSpeed", "Orientation"]},
{id: "HeartBeatSensor",                   label: "Heart beat sensor",                QK: ["HeartBeat"]},
{id: "HumanPresenceDetector",             label: "Human presence detector",          QK: ["Presence"]},
{id: "HumiditySensor",                    label: "Humidity sensor",                  QK: ["Humidity", "RelativeHumidity", "SoilHumidity"]},
{id: "Hydrophone",                        label: "Hydrophone",                       QK: ["Sound", "SoundPressureLevel", "SoundPressureLevelAmbient"]},
{id: "ImageSensor",                       label: "Image sensor",                     QK: []},
{id: "LeafWetnessSensor",                 label: "Leaf wetness sensor",              QK: ["LeafWetness"]},
{id: "LightSensor",                       label: "Light sensor",                     QK: ["LuminousFlux", "LuminousIntensity", "Illuminance", "WeatherLuminosity"]},
{id: "LoRaInterfaceEnergyMeter",          label: "LoRa interface energy meter",      QK: ["Energy"]},
{id: "Magnetometer",                      label: "Magnetometer",                     QK: ["MagneticField", "MagneticFluxDensity"]},
{id: "MotionSensor",                      label: "Motion sensor",                    QK: ["Motion", "MotionState", "MotionStateVehicle"]},
{id: "NH3Sensor",                         label: "NH3 sensor",                       QK: ["ChemicalAgentAtmosphericConcentrationNH3"]},
{id: "NO2Sensor",                         label: "NO2 sensor",                       QK: ["ChemicalAgentAtmosphericConcentrationNO2"]},
{id: "NOSensor",                          label: "NO sensor",                        QK: ["ChemicalAgentAtmosphericConcentrationNO"]},
{id: "O3Sensor",                          label: "O3 sensor",                        QK: ["ChemicalAgentAtmosphericConcentrationO3"]},
{id: "Odometer",                          label: "Odometer",                         QK: ["Mileage", "MileageDistanceToService", "MileageTotal"]},
{id: "OpticalDustSensor",                 label: "Optical dust sensor",              QK: ["ChemicalAgentAtmosphericConcentrationDust"]},
{id: "OxidationReductionPotentialSensor", label: "Oxidation reduction potential sensor", QK: ["Voltage"]},
{id: "OxygenSensor",                      label: "Oxygen sensor",                    QK: ["ChemicalAgentWaterConcentrationO2", "SPO2"]},
{id: "OtherSensor",                       label: "Other sensor",                     QK: []},
{id: "Pedometer",                         label: "Pedometer",                        QK: ["Speed", "SpeedAverage", "SpeedInstantaneous"]},
{id: "PeopleCountSensor",                 label: "People count sensor",              QK: ["Count", "CountPeople"]},
{id: "PHSensor",                          label: "PH sensor",                        QK: ["PH"]},
{id: "PrecipitationSensor",               label: "Precipitation sensor",             QK: ["Precipitation"]},
{id: "PresenceDetector",                  label: "Presence detector",                QK: ["Count", "Presence", "PresenceStatePeople", "PresenceStateParking"]},
{id: "PressureSensor",                    label: "Pressure sensor",                  QK: ["Pressure", "AtmosphericPressure"]},
{id: "ProximitySensor",                   label: "Proximity sensor",                 QK: ["Proximity"]},
{id: "PulseOxymeter",                     label: "Pulse oxymeter",                   QK: ["SPO2"]},
{id: "RadiationParticleDetector",         label: "Radiation particle detector",      QK: ["IonisingRadiation"]},
{id: "RainFallSensor",                    label: "Rain fall sensor",                 QK: ["RainFall"]},
{id: "RoadSurfaceThermometer",            label: "Road surface thermometer",         QK: ["Temperature", "RoadTemperature"]},
{id: "SaltMeter",                         label: "Salt meter",                       QK: ["Salinity", "Sodium"]},
{id: "Seismometer",                       label: "Seismometer",                      QK: ["Motion"]},
{id: "SkinConductanceSensor",             label: "Skin conductance sensor",          QK: ["Conductivity"]},
{id: "SmokeDetector",                     label: "Smoke detector",                   QK: ["ChemicalAgentAtmosphericConcentrationAirParticles", "ChemicalAgentAtmosphericConcentrationDust"]},
{id: "SO2Sensor",                         label: "SO2 sensor",                       QK: ["ChemicalAgentAtmosphericConcentrationSO2"]},
{id: "SoilHumiditySensor",                label: "Soil humidity sensor",             QK: ["Humidity", "RelativeHumidity", "SoilHumidity", "SoilMoistureTension"]},
{id: "SoilThermometer",                   label: "Soil thermometer",                 QK: ["Temperature", "SoilTemperature"]},
{id: "SolarRadiationSensor",              label: "Solar radiation sensor",           QK: ["SolarRadiation"]},
{id: "SoundSensor",                       label: "Sound sensor",                     QK: ["Sound", "SoundPressureLevel", "SoundPressureLevelAmbient"]},
{id: "SpeedSensor",                       label: "Speed sensor",                     QK: ["Speed", "SpeedAverage", "SpeedInstantaneous"]},
{id: "SunPositionDirectionSensor",        label: "Sun position direction sensor",    QK: ["SunPositionDirection"]},
{id: "SunPositionElevationSensor",        label: "Sun position elevation sensor",    QK: ["SunPositionElevation"]},
{id: "Thermometer",                       label: "Thermometer",                      QK: ["AirTemperature", "BoardTemperature", "BodyTemperature", "BuildingTemperature", "DewPointTemperature", "FoodTemperature", "HouseholdApplianceTemperature", "RoadTemperature", "RoomTemperature", "SoilTemperature", "Temperature", "TemperatureEngine", "TemperatureWasteContainer", "WaterTemperature"]},
{id: "TimeOfArrivalNextVehicleSensor",    label: "Time of arrival next vehicle sensor", QK: ["TimeOfArrivalNextVehicle"]},
{id: "TimeOfArrivalSensor",               label: "Time of arrival sensor",           QK: ["TimeOfArrival"]},
{id: "TouchSensor",                       label: "Touch sensor",                     QK: ["SkinConductance", "Capacitance"]},
{id: "UltrasonicSensor",                  label: "Ultrasonic sensor",                QK: ["Sound", "SoundPressureLevel", "SoundPressureLevelAmbient"]},
{id: "VehicleCountSensor",                label: "Vehicle count sensor",             QK: ["Count", "CountAvailableVehicles", "CountEmptyDockingPoints","TrafficIntensity"]},
{id: "VehiclePresenceDetector",           label: "Vehicle presence detector",        QK: ["Count", "CountAvailableVehicles", "CountEmptyDockingPoints"]},
{id: "VisibilitySensor",                  label: "Visibility sensor",                QK: ["Visibility"]},
{id: "VOCSensor",                         label: "VOC sensor",                       QK: ["ChemicalAgentAtmosphericConcentrationVOC"]},
{id: "VoiceCommandSensor",                label: "Voice command sensor",             QK: ["VoiceCommand"]},
{id: "VoltageSensor",                     label: "Voltage sensor",                   QK: ["Voltage", "ElectricPotential"]},
{id: "WasteLevelSensor",                  label: "Waste level sensor",               QK: ["FillLevelWasteContainer"]},
{id: "WaterLevel",                        label: "Water level sensor",               QK: ["WaterLevel"]},
{id: "WaterConductivitySensor",           label: "Water conductivity sensor",        QK: ["Conductivity"]},
{id: "WaterNH4IonSensor",                 label: "Water NH4 ion sensor",             QK: ["ChemicalAgentWaterConcentrationNH4Ion"]},
{id: "WaterNO3IonSensor",                 label: "Water NO3 ion sensor",             QK: ["ChemicalAgentWaterConcentrationNO3Ion"]},
{id: "WaterO2IonSensor",                  label: "Water O2 ion sensor",              QK: ["ChemicalAgentWaterConcentrationO2"]},
{id: "WaterPHSensor",                     label: "Water PH sensor",                  QK: ["PH"]},
{id: "WaterPollutantSensor",              label: "Water pollutant sensor",           QK: ["ChemicalAgentWaterConcentration"]},
{id: "WaterThermometer",                  label: "Water thermometer",                QK: ["Temperature", "WaterTemperature"]},
{id: "WeightSensor",                      label: "Weight sensor",                    QK: ["Weight", "Mass"]},
{id: "WiFiInterfaceEnergyMeter",          label: "WiFi interface energy meter",      QK: ["Energy"]},
{id: "WindChillSensor",                   label: "Wind chill sensor",                QK: ["WindChill"]},
{id: "WindDirectionSensor",               label: "Wind direction sensor",            QK: ["WindDirection"]},
{id: "WindSpeedSensor",                   label: "Wind speed sensor",                QK: ["WindSpeed"]}
]

function getAll() {
  return dic
}

function getLabel(id) {
  return dic.filter(sd => sd.id == id).label
}

function getQKs(id) {
  const sds = dic.filter(sd => sd.id == id)
  return sds[0]? sds[0].QK.map(qkid => QuantityKinds.getQK(qkid)): []
}

var exports = {getAll, getLabel, getQKs}
export default exports 

