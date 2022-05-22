const {Schema, model} = require('mongoose')

const ConfigSchema = new Schema({
  name: String,
  titles: Array,
  socialLink: Object,
  about: String,
  completedProject: Number,
  cupOfCoffee: Number,
  satisfiedClient: Number,
  nomineeWinner: Number
})
const ConfigModel = new model('Config', ConfigSchema)

const ServiceSchema = new Schema({
  title: String,
  description: String,
  img: String
})
const ServiceModel = new model('Service', ServiceSchema )

const WorkSchema = new Schema({
  title: String,
  category: String,
  img: String,
})
const WorkModel = new model('Work', WorkSchema)

const PriceSchema = new Schema({
  title: String,
  description: String,
  opportunities: Array,
  price: Number,
  pricePer: String,
  recommend: Boolean

})
const PriceModel = new model('Price', PriceSchema)

const ReviewSchema = new Schema({
  img: String,
  name: String,
  title:  String,
  feedback: String
})
const ReviewModel = new model('Review', ReviewSchema)

const TechnologySchema = new Schema({})
const TechnologyModel = new model('Technology', TechnologySchema)

const PostSchema = new Schema({
  img: String,
  category: String,
  title: String,
  date: Date,
  name: String,
})
const PostModel = new model('Post', PostSchema)

const ContactSchema = new Schema({
  name:  String,
  email: String,
  subject: String,
  message: String
})
const ContactModel = new model('Contact', ContactSchema)


module.exports = {
  ConfigModel, 
  ServiceModel,
  WorkModel,
  PriceModel,
  ReviewModel,
  TechnologyModel,
  PostModel,
  ContactModel
}