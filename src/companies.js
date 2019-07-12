import Faker from 'faker'

const COMPANIES = []

function makeCompany(i) {
    return {
        id: i,
        name: Faker.company.companyName(),
        industry: "Education",
        ceo: { 
            firstname: Faker.name.firstName(), 
            lastname: Faker.name.lastName(), 
            title: Faker.name.jobTitle() 
        },
        hq: {
          street: Faker.address.streetAddress(),
            city: Faker.address.city(),
           state: Faker.address.state(),
         country: Faker.address.country(),
         zipcode: Faker.address.zipCode()
        },
        finance: [
            { year: 2014, revenue: Faker.finance.amount(), expenses: Faker.finance.amount(), assets: Faker.finance.amount(), liabilities: Faker.finance.amount(), equity: Faker.finance.amount() },
            { year: 2015, revenue: Faker.finance.amount(), expenses: Faker.finance.amount(), assets: Faker.finance.amount(), liabilities: Faker.finance.amount(), equity: Faker.finance.amount() },
            { year: 2016, revenue: Faker.finance.amount(), expenses: Faker.finance.amount(), assets: Faker.finance.amount(), liabilities: Faker.finance.amount(), equity: Faker.finance.amount() },
            { year: 2017, revenue: Faker.finance.amount(), expenses: Faker.finance.amount(), assets: Faker.finance.amount(), liabilities: Faker.finance.amount(), equity: Faker.finance.amount() },
            { year: 2018, revenue: Faker.finance.amount(), expenses: Faker.finance.amount(), assets: Faker.finance.amount(), liabilities: Faker.finance.amount(), equity: Faker.finance.amount() }
        ]
    }
}

for (var i = 1; i < 5; i++) {
    COMPANIES.push(makeCompany(i))
}

export default COMPANIES