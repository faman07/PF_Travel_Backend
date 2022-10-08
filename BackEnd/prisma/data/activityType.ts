import { PrismaClient, Prisma, activityType } from '@prisma/client'
const prisma = new PrismaClient()


const type: Prisma.activityTypeCreateInput[] = [
    {name: "Instructivas / Educativas" },
    {name: "Culturales" },
    {name: "Recreativas" },
    {name: "naturaleza o Ecoturismo" },
    {name: "Montaña y Aventura" },
    {name: "Gastronomicas" },
    {name: "Deportivas" },
    {name: "Salud / Bienestar" },
    {name: "Religiosas" },
]

export async function activityTypeLoad() {
    console.log(`Start Seeding...`)
    for (const u of type) {
        const data = await prisma.activityType.create({
            data: u,
        })
        console.log(`Created type with id: ${data.id}`)
    }
}

activityTypeLoad()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.log(e)
        await prisma.$disconnect()
            process.exit(1)        
    })