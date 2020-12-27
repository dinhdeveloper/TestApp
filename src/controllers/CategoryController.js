const categoryModel = require("../models/CategoryModel");
const db = require("../configs/db.config");

function getList(req,res) {
  console.log(req.body);
    if(Object.keys(req.body).length === 0 && req.body.constructor === Object){ //check object null
      let sql = "SELECT * FROM tbl_category";
      db.query(sql, (err, response) => {
        if (err) throw err;
        res.json({
          success: "true",
          data: response,
        });
      });
    }else{
      res.json({
        success: "false",
        message: "Không tìm thấy danh mục",
      });
    }
}
function createCategory(req,res) {
  if(req.file.filename){
    if(res.status(201)){
      categoryModel.category_name = req.body.category_name,
      categoryModel.category_image = req.file.filename
    }
    var sql =`INSERT INTO tbl_category SET `;
    if(categoryModel.category_name){
      sql = sql.concat(' ', `category_name = '${categoryModel.category_name}'`)
    }

    if(categoryModel.category_image){
      sql = sql.concat(' ,', `category_image = '/images/${categoryModel.category_image}'`)
    }

    var query = db.query(sql, [categoryModel], (err, response) => {
      if (err) throw err;
      res.json({
        success: "true",
        message: "Tạo danh mục thành công",
      });
    });
  }
  else{
      res.status(500).json({
          mesaage: "Something went wrong!"
      });
  }
}

module.exports ={
    getList:getList,
    createCategory:createCategory,

}