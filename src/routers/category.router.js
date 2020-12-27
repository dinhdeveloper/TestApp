const express = require('express')
const router = express.Router()
const multer  = require('multer')
const upload = multer()
const uploadFiles = require('../helpers/upload')
const categoryController = require('../controllers/CategoryController')

router.post('/list',upload.none(),categoryController.getList)
router.post('/create',uploadFiles.upload.single('category_image'),categoryController.createCategory)

module.exports = router