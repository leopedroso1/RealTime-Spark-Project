# RealTime-Spark-Project
Real time analytics with spark streaming (PySpark) + AWS + Kafka


Spark-dashboard content

Folders:

Data >> Input data with orders to be processed. Date, ID, Status (An order can be shipped, processing, delivered etc). We will feed this data through Kafka
Kafka >> Script to push the data to the topic
Nodejs >> NodeJS + Kafka configuration 
Spark >> Streaming script + Driver to connect with Kafka. Natively, PySpark doesn't know what is Kafka or where it is placed!
