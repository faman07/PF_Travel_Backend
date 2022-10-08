import { PrismaClient, Prisma, activityType } from '@prisma/client'
const prisma = new PrismaClient()

console.log(`Start Seeding Customer`)

function customerMockup (number: Number) {
    let array = []
    for (let i=0; i < number; i ++) {
        array.push({
            name: `name${i}`,
            lastName: `lastname${i}`,
            userName: `userName${i}`,
            identification: `identification${i}`, 
            address: `address${i}`,   
            phoneNumber: `123456789123`, 
            email: `email${i}@correo`, 
            numberCard: `4242424242424242`, 
            pass: `password${i}`, 
            zipCode: `zipCode${i}`,
        })
    }
    return array
}


async function main() {
    console.log(`Start Seeding...`)
    let data = customerMockup(5)
    console.log(data)
    for (const u of data) {
        const data = await prisma.customer.create({
            data: u,
        })
        console.log(`Created type with id: ${data.id}`)
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.log(e)
        await prisma.$disconnect()
            process.exit(1)        
    })


    