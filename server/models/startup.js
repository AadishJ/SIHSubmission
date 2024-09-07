const mongoose = require('mongoose');

const startupSchema = mongoose.Schema({
    startupName: {
        type: String,
        required: true,
        trim: true 
    },
    dateOfIncorporation: {
        type: Date,
        required: true
    },
    businessEntityType: {
        type: String,
        enum: ['Private Limited', 'LLP', 'Partnership', 'Sole Proprietorship'],
        required: true
    },
    industrySector: {
        type: String,
        required: true
    },
    companyIncorporationNumber: {
        type: String,
        required: true,
        unique: true // Ensures no two companies have the same incorporation number
    },
    companyRegistrationDate: {
        type: Date,
        required: true
    },
    contactInformation: {
        address: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        }
    },
    fullAddress: {
        type: String,
        required: true,
        trim: true
    },
    addressLine1: {
        type: String,
        required: true,
        trim: true
    },
    addressLine2: {
        type: String,
        trim: true
    },
    addressLine3: {
        type: String,
        trim: true
    },
    cityOrVillage: {
        type: String,
        required: true,
        trim: true
    },
    stateOrUnionTerritory: {
        type: String,
        required: true,
        trim: true
    },
    pinCode: {
        type: String,
        required: true,
        trim: true
    },
    district: {
        type: String,
        required: true,
        trim: true
    },
    subDistrict: {
        type: String,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    designation: {
        type: String,
        required: true,
        trim: true
    },
    mobileNo: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: function(v) {
                return /^[0-9]{10}$/.test(v); // Example validation for a 10-digit mobile number
            },
            message: props => `${props.value} is not a valid mobile number!`
        }
    },
    emailId: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: function(v) {
                return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v); // Simple email validation
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    numberOfDirectors: {
        type: Number,
        required: true
    },
    directorsOrPartners: [
        {
            sNo: {
                type: Number,
                required: true
            },
            dinOrDpin: {
                type: String,
                required: true,
                trim: true
            },
            name: {
                type: String,
                required: true,
                trim: true
            },
            gender: {
                type: String,
                enum: ['Male', 'Female', 'Other'], // Enum for gender options
                required: true
            },
            mobileNumber: {
                type: String,
                required: true,
                trim: true,
                validate: {
                    validator: function(v) {
                        return /^[0-9]{10}$/.test(v); // Example validation for a 10-digit mobile number
                    },
                    message: props => `${props.value} is not a valid mobile number!`
                }
            },
            postalAddress: {
                type: String,
                required: true,
                trim: true
            },
            emailId: {
                type: String,
                required: true,
                trim: true,
                validate: {
                    validator: function(v) {
                        return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v); // Simple email validation
                    },
                    message: props => `${props.value} is not a valid email address!`
                }
            }
        },
    ],
    briefDescription: {
        type: String,
        required: true,
        trim: true
    },
    websiteURL: {
        type: String,
        trim: true,
        validate: {
            validator: function(v) {
                return /^(https?:\/\/)?([\w\d\-]+\.)+[a-zA-Z]{2,7}(\/[\w\d\-\.~:?#[\]@!$&'()*+,;=]*)?$/.test(v); // Simple URL validation
            },
            message: props => `${props.value} is not a valid URL!`
        }
    },
    stageOfBusiness: {
        type: String,
        required: true,
        enum: ['Idea Stage', 'Prototype', 'Early Revenue', 'Growth Stage', 'Established'] // Enum for stage of business options
    },
    fundingDetails: {
        amountRaised: {
            type: Number,
            default: 0
        },
        investors: [{
            name: {
                type: String,
                trim: true
            },
            amount: {
                type: Number
            }
        }]
    },
    annualRevenue: {
        type: Number,
        required: false, // Optional field if revenue is not applicable
    },
    bankAccountDetails: {
        accountNumber: {
            type: String,
            required: true,
        },
        bankName: {
            type: String,
            required: true,
        },
        branchName: {
            type: String,
            required: true,
        },
        accountType: {
            type: String,
            enum: ['Checking', 'Savings', 'Other'], // Can expand based on types
            required: true,
        },
        accountHolderName: {
            type: String,
            required: true,
        },
        accountHolderAddress: {
            street: { type: String, required: false },
            city: { type: String, required: false },
            state: { type: String, required: false },
            postalCode: { type: String, required: false },
            country: { type: String, required: false },
        },
        IFSCCode: {
            type: String,
            required: true, // For Indian accounts
        },
        SWIFTCode: {
            type: String,
            required: false, // For international transactions
        },
        routingNumber: {
            type: String,
            required: false, // For US accounts
        },
        contactInfo: {
            bankPhoneNumber: {
                type: String,
                required: false,
            },
            bankEmail: {
                type: String,
                required: false,
            },
        },
    },
    auditedFinancialStatements: {
        type: String, // You could use a path to a file if storing the document
        required: false,
    },
    certificateOfIncorporation: {
        type: String, 
        required: true, 
    },
    panNumber: {
        type: String,
        required: true, // PAN is mandatory for Indian startups
    },
    tanNumber: {
        type: String,
        required: false, // TAN might be optional depending on the startup's structure
    },
    gstRegistration: {
        gstNumber: {
            type: String,
            required: false, // Optional for businesses that aren't GST registered
        },
        gstCertificate: {
            type: String, // Path or URL to the GST certificate document
            required: false,
        },
    },
    intellectualProperty: [
        {
            type: {
                type: String,
                enum: ['Patent', 'Trademark', 'Copyright'], 
                required: true,
            },
            registrationNumber: {
                type: String,
                required: true, 
            },
            document: {
                type: String, 
                required: true,
            },
        },
    ],
    documentType: {
        type: String,
        enum: ['Pitch Deck', 'Business Plan'],
        required: true,
    },
    documentUrl: {
        type: String,
        required: true, // URL or path to the document if stored in cloud or local storage
    },
    fileFormat: {
        type: String,
        enum: ['PDF', 'PPT', 'DOC', 'DOCX', 'Google Slides', 'TXT', 'JPEG', 'PNG'],
        required: true,
    },
    uploadDate: {
        type: Date,
        default: Date.now,
    },
    additionalNotes: {
        type: String,
        required: false,
        trim: true
    },
});

const Startup = mongoose.model('Startup', startupSchema);

module.exports = Startup;
