import supertest from "supertest"
import app from "../src/index"

 type Fruit = {
    name: string,
    price: number
  }

describe("tests fruits",  ()=>{
    it("create a fruit", async ()=>{
        const fruit : Fruit ={
            name: "maça",
            price: 5
        }
        const result = await supertest(app).post("/fruits").send(fruit);
        const status = result.status
        console.log(status)
        expect(status).toBe(201);


    })
    //----//
    it("should return all fruits", async ()=>{
        
        const result = await supertest(app).get("/fruits");
        const response = result.body
        console.log(response)
        
        expect(response.length).toBe(1);


    })

    it("should return a specific fruit", async ()=>{
        
        const result = await supertest(app).get("/fruits/:id");
        const response = result.body
        console.log(response)
        expect(response.length).toBe(1);


    })
})