const router = require('express').Router();
const { Blogs } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newBlogs = await Blogs.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlogs);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const blogsData = await Blogs.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogsData) {
      res.status(404).json({ message: 'No blogs found with this id!' });
      return;
    }

    res.status(200).json(blogsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
