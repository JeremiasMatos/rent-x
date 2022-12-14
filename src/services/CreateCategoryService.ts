import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface IRequest{
   name: string;
    description: string;
}

class CreateCategoryService{
    constructor(private categoriesRepository: CategoriesRepository){}
execute({name,description}:IRequest):void{

    //const categoriesRepository = new CategoriesRepository()
        const categoryAlreadyExits = this.categoriesRepository.findByName(name);

        if(categoryAlreadyExits){
         throw new Error("Category Alsredy Exits!");
        }
        this.categoriesRepository.create({name,description})    
    }
}

export {CreateCategoryService}