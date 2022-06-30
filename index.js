> show dbs
Human_Resource  0.000GB
Inventory       0.000GB
admin           0.000GB
config          0.000GB
local           0.000GB
reliance        0.000GB
> use Human_Resource
swdb.employee.insertOne({ "firstName": "Jame","lastName": "Doe","salary": "35000","department": "Accounts","lastCompany": "Z","lastSalary": "20000","overallExp": "1","contactInfo": "123567890","yearGrad": "2019","gradStream": "ECE"})000","department": "Accounts","lastCompany": "Z","lastSalary": "20000","overa})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("62bdc678b870ff2708194bc8")
} db.employee.insertOne({"firstName": "Sao","lastName": "Avika","salary": "30000","department": "Sales","lastCompany": "Y","lastSalary": "15000","overallExp": "2","contactInfo": "1234567860","yearGrad": "2015","gradStream": "CSE"})30000","department": "Sales","lastCompany": "Y","lastSalary": "15000","overallE})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("62bdc6c8b870ff2708194bc9")
} db.employee.insertOne({"firstName": "Jame","lastName": "Doe","salary": "35000","department": "Accounts","lastCompany": "Z","lastSalary": "15000","overallExp": "2","contactInfo": "123567890","yearGrad": "2019","gradStream": "EEE"})000","department": "Accounts","lastCompany": "Z","lastSalary": "15000","overal})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("62bdc706b870ff2708194bca")
} db.employee.insertOne({"firstName": "Rohan","lastName": "Jame","salary": "30000","department": "Technical","lastCompany": "Y","lastSalary": "15000","overallExp": "1","contactInfo": "1234567860","yearGrad": "2015","gradStream": "CSE"})0","department": "Technical","lastCompany": "Y","lastSalary": "15000","ove})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("62bdc74bb870ff2708194bcb")
} db.employee.insertOne({"firstName": "Jame", "lastName": "Doe", "salary": "35000", "department": "Accounts", "lastCompany": "Z", "lastSalary": "20000","overallExp": "1","contactInfo": "123567890","yearGrad": "2019","gradStream": "ECE"})", "department": "Accounts", "lastCompany": "Z", "lastSalary": "20000","o})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("62bdc77fb870ff2708194bcc")
} db.employee.insertOne({"firstName": "Sao", "lastName": "Avika", "salary": "30000", "department": "Sales","lastCompany": "Y", "lastSalary": "15000", "overallExp": "2", "contactInfo": "1234567860", "yearGrad": "2015","gradStream": "CSE"})", "department": "Sales","lastCompany": "Y", "lastSalary": "15000", "ove})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("62bdc7b6b870ff2708194bcd")
} db.employee.insertOne({"firstName": "Jame", "lastName": "Doe", "salary": "35000", "department": "Accounts", "lastCompany": "Z", "lastSalary": "15000", "overallExp": "2", "contactInfo": "123567890","yearGrad": "2019","gradStream": "EEE"}) "department": "Accounts", "lastCompany": "Z", "lastSalary": "15000", "})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("62bdc7fdb870ff2708194bce")
}
db.employee.find()
{ "_id" : ObjectId("62bdc3e8b870ff2708194bc2"), "firstName" : "John", "lastName" : "Doe", "salary" : "25000", "department" : "HR", "lastCompany" : "X", "lastSalary" : "10000", "overallExp" : "2", "contactInfo" : "1234567890", "yearGrad" : "2016", "gradStream" : "CSE" }
{ "_id" : ObjectId("62bdc44bb870ff2708194bc3"), "firstName" : "Rohan", "lastName" : "Jame", "salary" : "30000", "department" : "Technical", "lastCompany" : "Y", "lastSalary" : "15000", "overallExp" : "1", "contactInfo" : "1234567890", "yearGrad" : "2015", "gradStream" : "CSE" }
{ "_id" : ObjectId("62bdc4ccb870ff2708194bc4"), "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "20000", "overallExp" : "1", "contactInfo" : "1234567890", "yearGrad" : "2019", "gradStream" : "ECE" }
{ "_id" : ObjectId("62bdc547b870ff2708194bc5"), "firstName" : "Sao", "lastName" : "Avika", "salary" : "30000", "department" : "Sales", "lastCompany" : "Y", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "1234567860", "yearGrad" : "2015", "gradStream" : "CSE" }
{ "_id" : ObjectId("62bdc5abb870ff2708194bc6"), "firstName" : "Jame", "lastName" : "roh", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }
{ "_id" : ObjectId("62bdc62bb870ff2708194bc7"), "firstName" : "Rohan", "lastName" : "Jame", "salary" : "30000", "department" : "Technical", "lastCompany" : "Y", "lastSalary" : "15000", "overallExp" : "1", "contactInfo" : "1234567860", "yearGrad" : "2015", "gradStream" : "CSE" }
{ "_id" : ObjectId("62bdc678b870ff2708194bc8"), "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "20000", "overallExp" : "1", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "ECE" }
{ "_id" : ObjectId("62bdc6c8b870ff2708194bc9"), "firstName" : "Sao", "lastName" : "Avika", "salary" : "30000", "department" : "Sales", "lastCompany" : "Y", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "1234567860", "yearGrad" : "2015", "gradStream" : "CSE" }
{ "_id" : ObjectId("62bdc706b870ff2708194bca"), "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }
{ "_id" : ObjectId("62bdc74bb870ff2708194bcb"), "firstName" : "Rohan", "lastName" : "Jame", "salary" : "30000", "department" : "Technical", "lastCompany" : "Y", "lastSalary" : "15000", "overallExp" : "1", "contactInfo" : "1234567860", "yearGrad" : "2015", "gradStream" : "CSE" }
{ "_id" : ObjectId("62bdc77fb870ff2708194bcc"), "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "20000", "overallExp" : "1", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "ECE" }
{ "_id" : ObjectId("62bdc7b6b870ff2708194bcd"), "firstName" : "Sao", "lastName" : "Avika", "salary" : "30000", "department" : "Sales", "lastCompany" : "Y", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "1234567860", "yearGrad" : "2015", "gradStream" : "CSE" }
{ "_id" : ObjectId("62bdc7fdb870ff2708194bce"), "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }

> db.employee.find({salary: {$gt:"30000"}}).pretty()
{
        "_id" : ObjectId("62bdc4ccb870ff2708194bc4"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "1234567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("62bdc5abb870ff2708194bc6"),
        "firstName" : "Jame",
        "lastName" : "roh",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("62bdc678b870ff2708194bc8"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("62bdc706b870ff2708194bca"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("62bdc77fb870ff2708194bcc"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("62bdc7fdb870ff2708194bce"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
> db.employee.find({overallExp : {$gt:"2"}}).pretty()
> db.employee.find({$and: [{yearGrad: {$gt: "2015"}}, {overallExp: {$gt:"1"}}]}).pretty()
{
        "_id" : ObjectId("62bdc3e8b870ff2708194bc2"),
        "firstName" : "John",
        "lastName" : "Doe",
        "salary" : "25000",
        "department" : "HR",
        "lastCompany" : "X",
        "lastSalary" : "10000",
        "overallExp" : "2",
        "contactInfo" : "1234567890",
        "yearGrad" : "2016",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62bdc5abb870ff2708194bc6"),
        "firstName" : "Jame",
        "lastName" : "roh",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("62bdc706b870ff2708194bca"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("62bdc7fdb870ff2708194bce"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
> db.employee.updateMany({salary: {$gt: "30000"}}, {$set: {salary: "28000"}})
{ "acknowledged" : true, "matchedCount" : 6, "modifiedCount" : 6 }
> db.employee.find({salary: "28000"}).pretty()
{
        "_id" : ObjectId("62bdc4ccb870ff2708194bc4"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "28000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "1234567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("62bdc5abb870ff2708194bc6"),
        "firstName" : "Jame",
        "lastName" : "roh",
        "salary" : "28000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("62bdc678b870ff2708194bc8"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "28000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("62bdc706b870ff2708194bca"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "28000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("62bdc77fb870ff2708194bcc"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "28000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("62bdc7fdb870ff2708194bce"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "28000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
> db.employee.deleteMany({lastCompany: "Y"})
{ "acknowledged" : true, "deletedCount" : 6 }
> db.employee.find().pretty()
{
        "_id" : ObjectId("62bdc3e8b870ff2708194bc2"),
        "firstName" : "John",
        "lastName" : "Doe",
        "salary" : "25000",
        "department" : "HR",
        "lastCompany" : "X",
        "lastSalary" : "10000",
        "overallExp" : "2",
        "contactInfo" : "1234567890",
        "yearGrad" : "2016",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62bdc4ccb870ff2708194bc4"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "28000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "1234567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("62bdc5abb870ff2708194bc6"),
        "firstName" : "Jame",
        "lastName" : "roh",
        "salary" : "28000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("62bdc678b870ff2708194bc8"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "28000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("62bdc706b870ff2708194bca"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "28000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("62bdc77fb870ff2708194bcc"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "28000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("62bdc7fdb870ff2708194bce"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "28000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}