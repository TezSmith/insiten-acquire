import Faker from 'faker'

const companies = []

const status = ['Researching','Pending Approval','Approved','Declined']
const industry = ['Technology', 'Retail', 'Health & Fitness', 'Real Estate', 'Food & Beverage']

function makeCompany(i) {
    return {
        id: i,
        coname: Faker.company.companyName(),
        photo: Faker.random.image(),
        industry: makeIndustry(),
        status: makeStatus(),
        ceo: {
            firstname: Faker.name.firstName(),
            lastname: Faker.name.lastName(),
            email: Faker.internet.email()
        },
        hq: {
          street: Faker.address.streetAddress(),
            city: Faker.address.city(),
           state: Faker.address.state(),
         country: Faker.address.country(),
         zipcode: Faker.address.zipCode()
        },
        finances: [
            { year: 2014, rev: Faker.finance.amount(), exp: Faker.finance.amount(), assets: Faker.finance.amount(), lib: Faker.finance.amount(), eq: Faker.finance.amount() },
            { year: 2015, rev: Faker.finance.amount(), exp: Faker.finance.amount(), assets: Faker.finance.amount(), lib: Faker.finance.amount(), eq: Faker.finance.amount() },
            { year: 2016, rev: Faker.finance.amount(), exp: Faker.finance.amount(), assets: Faker.finance.amount(), lib: Faker.finance.amount(), eq: Faker.finance.amount() },
            { year: 2017, rev: Faker.finance.amount(), exp: Faker.finance.amount(), assets: Faker.finance.amount(), lib: Faker.finance.amount(), eq: Faker.finance.amount() },
            { year: 2018, rev: Faker.finance.amount(), exp: Faker.finance.amount(), assets: Faker.finance.amount(), lib: Faker.finance.amount(), eq: Faker.finance.amount() }
        ]
    }
}

for (var i = 1; i < 20; i++) {
    companies.push(makeCompany(i))
}

function makeStatus() {
  let num = Math.floor(Math.random() * 4)
  return status[num]
}

function makeIndustry() {
  let num = Math.floor(Math.random() * 5)
  return industry[num]
}

const obj = {
    id: '',
    coname: '',
    industry: '',
    ceo: {
        firstname: '',
        lastname: '',
        email: ''
    },
    hq: {
        street: '',
        city: '',
        state: '',
        country: '',
        zipcode: ''
    },
    finances: []
}

export default companies
export { obj }
