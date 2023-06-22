const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try{
    const tagData = await Tag.findAll({
      include: [
        {
          model: Product,
          through: ProductTag
        }
      ]
    })

    res.json(tagData)
  }catch (err) {
    console.error(err)
     res.status(500).json(err)
  }
});

router.get('/:id',  async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data

  const tagData = await Tag.findOne(req.params.id);
  return res.json(tagData)
});

router.post('/', async (req, res) => {
  // create a new tag
  const tagData = await Tag.create(req.body);
  return res.json(tagData);
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
