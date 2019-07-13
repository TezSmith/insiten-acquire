import Faker from 'faker'

const companies = []


function makeCompany(i) {
    return {
        id: i,
        coname: Faker.company.companyName(),
        industry: "Education",
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
            { year: 2014, rev: Faker.finance.amount(), exp: Faker.finance.amount(), assets: Faker.finance.amount(), liabilities: Faker.finance.amount(), eq: Faker.finance.amount() },
            { year: 2015, rev: Faker.finance.amount(), exp: Faker.finance.amount(), assets: Faker.finance.amount(), liabilities: Faker.finance.amount(), eq: Faker.finance.amount() },
            { year: 2016, rev: Faker.finance.amount(), exp: Faker.finance.amount(), assets: Faker.finance.amount(), liabilities: Faker.finance.amount(), eq: Faker.finance.amount() },
            { year: 2017, rev: Faker.finance.amount(), exp: Faker.finance.amount(), assets: Faker.finance.amount(), liabilities: Faker.finance.amount(), eq: Faker.finance.amount() },
            { year: 2018, rev: Faker.finance.amount(), exp: Faker.finance.amount(), assets: Faker.finance.amount(), liabilities: Faker.finance.amount(), eq: Faker.finance.amount() }
        ]
    }
}

for (var i = 1; i < 5; i++) {
    companies.push(makeCompany(i))
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

