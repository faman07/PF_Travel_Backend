import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export function formatExcursionData (data: Prisma.excursionCreateInput) { 
    

    return data   
}

export function formatActivityData (data: any) { 
    const activityData = {
        name: data.name,    
        latitude: data.latitude,
        longitude: data.longitude,
        descripton: data.descripton,
        stock: data.stock,
        minimunDuration: data.minimunDuration,
        rating: data.rating,
        cost: data.cost, 
        country: data.country? data.country : "No Country",
        city: data.city? data.city : "No City", 
        pictures:{
            create: data.pictures, 
         } ,
        type: { connect: {id: data.type}},
        }        
    return activityData   
}

export function formatActivityToExcursion (data: Prisma.activityOnExcursionCreateInput) {
    return data
}


export async function storeExcursion (excursionData: Prisma.excursionCreateInput) {
    try {
        const operation = await prisma.excursion.create({
            data: excursionData,
        })
        return operation
    } catch (e) {
        return (e)
    }
}

export async function storeActivity (activityData: Prisma.activityCreateInput) {
    try {
        console.log("proceso storeActivity")
        console.log(activityData)
        const operation = await prisma.activity.create({
            data: activityData,
        })
        return operation
    } catch (e) {
        return (e)
    }
}

export async function relationActivityToExcursion (relation: any) {
    try {
        const operation = await prisma.activityOnExcursion.create({
            data: relation,
        })
        return operation
    } catch (e) {
        return (e)
    }
}


export async function getExcursionData (id: string) {
    try {
        const excursion = await prisma.excursion.findUnique({
            where: {
                id: id,
              },
              include: {
                activity: true,
              }
        })
        return excursion
    } catch (e) {
        return (e)
    }
}

export async function getActivityData (id: string) {
    try {
        const activity = await prisma.activity.findUnique({
            where: {
                id: id,
              },
              include: {
                type: true,
                pictures: true,
              }
        })
        return activity
    } catch (e) {
        return (e)
    }
}

export async function getActivityDataCity (city: string) {
    try {
        const activity = await prisma.activity.findMany({
            where: {
                city: city,
              },
              include: {
                type: true,
                pictures: {
                    select: {url: true}
                },
              },

        })
        return activity
    } catch (e) {
        return (e)
    }
}

export async function getActivityDataCountry (country: string) {
    try {
        const activity = await prisma.activity.findMany({
            where: {
                city: country,
              },
              include: {
                type: true,
                pictures: true,
              }
        })
        return activity
    } catch (e) {
        return (e)
    }
}
//----------------------------------- funciones controladoras de customers

export async function getCustomersByEmail (data: any) { 
    const existing = await prisma.customer.findMany({        
        where: {
            email: data.email
        }
    })
    console.log(existing)
    if (existing) {
        return data 
    } else {
        return null 
    } 
}

export async function storeCustomer (data: any) { 
    const upload = await prisma.customer.create({
        data: data})
    if (upload) {
        return upload
    } else {
        throw new Error ("No se pudo cargar el Cliente, revisar la informacion suministrada") 
    }
}

export async function validateEmailExist (data: any) {
    const existing = await prisma.customer.findUnique({        
        where: {
            email: data.email,
        },
        select: {
            identification: true
        }
    })
    if (existing) {
        throw new Error ("El email ya pertenece a otra cuenta")
    } else {
        return ('available')  
    } 
}

export async function formatDataCustomer (data: any) {
    return ({
        name: data.name? data.name : "Anonymus",
        lastName: data.lastName? data.lastName : "Anonymus", 
        identification: data.identification? data.identification : "No Data", 
        birthday: data.bithday? data.birthday : '', 
        phoneNumber: data.phoneNumber? data.phoneNumber : "No Data", 
        email: data.email? data.email : "No Data", 
        numberCard: data.numberCard? data.numberCard : "No Data ", 
        pass: data.pass, 
        userType: data.userType? data.userType : "GUEST"
    })
}
// -------------------  Validate Functions ---------------------------------

// Revisa si es una fecha valida
function validateDate (data: any) {

}

function validateString (data:any) {


}

function validateNumber (data:any) {


}

function validateMoney (data:any) {


}



