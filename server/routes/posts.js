const express = require('express')
const Router = express.Router()
const Post = require('../models/Post')
const Comment = require('../models/Comments')

Router.route('/api/posts')
  .get((req, res) => {
    Post.find()
      .populate('comments')
      .exec((err, post) => {
        if (err) {
          res.json({error: err})
        } else {
          res.json({msg: 'Success', post})
        }
      })
  })

Router.route('/api/posts/:postId')
  .get((req, res) => {
    const postId = req.params.postId
    Post.findById({_id: postId})
      .populate('comments')
      .exec((err, post) => {
        if (err) {
          res.json({error: err})
        } else {
          res.json({msg: `Found: ${postId}`, post})
        }
      })
  })

Router.route('/api/posts')
  .post((req, res) => {
    const {message, img, userName, date} = req.body
    const newPost = {message, img, userName, date}
    Post(newPost).save((err, savedPost) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: 'Success', data: savedPost})
      }
    })
  })

Router.route('/api/posts/:postId/comments')
  .post((req, res) => {
    const {text} = req.body
    const newComment = {text}

    Comment(newComment).save((err, savedComment) => {
      if (err) {
        res.json({error: err})
      } else {
        Post.findById({_id: req.params.postId}, (err, post) => {
          if (err) {
            res.json({error: err})
          } else {
            post.comments.push(savedComment._id)
            post.save((err, updatedPost) => {
              if (err) {
                res.json({error: err})
              } else {
                res.json({msg: 'Success', data: updatedPost})
              }
            })
          }
        })
      }
    })
  })

Router.route('/api/posts/:postId')
  .put((req, res) => {
    const editPostId = req.params.postId
    Post.findById({_id: editPostId}, (err, post) => {
      if (err) {
        console.log('ERROR finding post', err)
        res.json({error: err})
      } else {
        post.message = req.body.message ? req.body.message : post.message
        post.img = req.body.img ? req.body.img : post.img
        post.userName = req.body.userName ? req.body.userName : post.userName

        post.save((err, updatedPost) => {
          if (err) {
            console.log('Error saving post')
            res.json({error: err})
          } else {
            res.json({msg: 'Successfully updated', post: updatedPost})
          }
        })
      }
    })
  })

Router.route('/api/posts/:postId')
  .delete((req, res) => {
    const deletePost = req.params.postId
    Post.remove({_id: deletePost}, (err, post) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: `Deleted: ${post}`})
      }
    })
  })

Router.route('/api/comments/:commentId')
  .delete((req, res) => {
    const commentId = req.params.commentId
    Comment.remove({_id: commentId}, (err, comment) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: `Deleted: ${comment}`})
      }
    })
  })

module.exports = Router
