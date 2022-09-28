import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const customerData: Prisma.customerCreateInput[] = [
    {
        name: 'William',
        //lastName: 'Garcia',
        identification: '80002838',
        birthday: '28/01/1979',
        phoneNumber: '3002812437',
        email: 'willygarciaz@gmail.com',
        numberCard: '4512-5266985-23652',
    },
    {
        name: 'Claudia',
        //lastName: 'Paez',
        identification: '523658965',
        birthday: '12/08/1981',
        phoneNumber: '3012653895',
        email: 'claupb@gmaill.com',
        numberCard: '5632-569856-586',
    },


]

async function main() {
    console.log(`Start Seeding...`)
    for (const u of customerData) {
        const customer = await prisma.customer.create({
            data: u,
        })
        console.log(`Created costumer with id: ${customer.id}`)
    }
    console.log(`Seedding finished.`)
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