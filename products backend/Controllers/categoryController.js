const category=require('../Models/categorySchema')
const product=require('../Models/productSchema')

exports.createCategories=async (req,res)=>{
    try {

        const { categories } = req.body;

        categories.map(async (item)=>{
            const newCategory = new category({
                  name:item
                });
                  await newCategory.save();
            })
  
   
        res.status(200).json({ message: 'Category created successfully', category: categories });
    }
    catch(error){
        res.status(500).json({ error: 'Category creation failed' });
    }
}