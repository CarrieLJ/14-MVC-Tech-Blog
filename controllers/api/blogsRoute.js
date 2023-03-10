const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  const body = req.body;
  try {
    const newBlog = await Blog.create({
      ...body,
      user_id: req.session.user_id,
    });

    res.json(newBlog);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const [blogData] = await Blog.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: 'No blogs found with this id!' });
      return;
    }
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const [blogData] = await Blog.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!blogData) {
      //could update to >0
      res.status(404).json({ message: 'No blogs found with this id!' });
      return;
    }
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
