import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Blog1 from "../../public/blog-images/detail-post-qgcqjbplr26tb4zy10bze2mopzdllwpk0s6tl4rlrw.jpg.svg"
import Blog2 from "../../public/blog-images/blog7-qgcqjcnfxw83mqykviqlyke5bd8ytltacwub2eq7lo.jpg.svg"
import Blog3 from "../../public/blog-images/blog9-qgcqjcnfxw83mqykviqlyke5bd8ytltacwub2eq7lo.jpg.svg"
import Blog4 from "../../public/blog-images/detail-post.jpg.svg"
import Admin1 from "../../public/blog-images/test1-150x150.jpg.png"
import CommentSection from "../components/comment"
import RelatedPosts from "../components/related-post"

function BlogDetailPage() {
  const { id } = useParams()
  const [blogPost, setBlogPost] = useState(null)

  const blogPosts = [
    {
      id: 1,
      image: Blog1,
      category: "Automotive",
      date: "March 15, 2024",
      title: "2024 BMW ALPINA XB7 with exclusive details, extraordinary",
      content: [
        "Aliqua pariatur sint culpa adipisicing, quis ipsum amet consequat. Quis do tempor non culpa quis facilis, et adipisicing sint voluptate. Anim ipsum anim ipsum anim ipsum anim ipsum. Ut ad adipisicing elit, et adipisicing sint voluptate. Anim ipsum anim ipsum anim ipsum anim ipsum.",
        "Quis lorem tempor magna, et ipsum magna adipisicing et. Anim ipsum dolor lorem do exercitation pariatur. Quis do tempor non culpa quis facilis, et adipisicing sint voluptate. Anim ipsum anim ipsum anim ipsum anim ipsum. Quis do tempor non culpa quis facilis, et adipisicing sint voluptate. Anim ipsum anim ipsum anim ipsum anim ipsum. Quis do tempor non culpa quis facilis, et adipisicing sint voluptate. Anim ipsum anim ipsum anim ipsum anim ipsum.",
      ],
      author: "Admin",
      learningPoints: [
        "Become an expert in luxury vehicles",
        "Understand the exclusive features of the BMW ALPINA XB7",
        "Learn about the engineering behind extraordinary performance",
        "Discover the craftsmanship of BMW ALPINA",
        "Compare with other luxury SUVs in the market",
        "Explore financing options for luxury vehicles",
        "Understand maintenance requirements for high-end vehicles",
        "Discover the history of the ALPINA brand",
      ],
      requirements: [
        "No prior knowledge of luxury vehicles required - you'll learn everything you need to know",
        "An interest in automotive engineering and design",
        "A desire to understand what makes luxury vehicles special",
        "Optional: Experience with other BMW models for comparison",
      ],
      detailPost: Blog4,
    },
    {
      id: 2,
      image: Blog2,
      category: "Automotive",
      date: "April 2, 2024",
      title: "BMW X4 M50i is designed to exceed your sportiest",
      content: [
        "Aliqua pariatur sint culpa adipisicing, quis ipsum amet consequat. Quis do tempor non culpa quis facilis, et adipisicing sint voluptate. Anim ipsum anim ipsum anim ipsum anim ipsum. Ut ad adipisicing elit, et adipisicing sint voluptate. Anim ipsum anim ipsum anim ipsum anim ipsum.",
        "Quis lorem tempor magna, et ipsum magna adipisicing et. Anim ipsum dolor lorem do exercitation pariatur. Quis do tempor non culpa quis facilis, et adipisicing sint voluptate. Anim ipsum anim ipsum anim ipsum anim ipsum. Quis do tempor non culpa quis facilis, et adipisicing sint voluptate. Anim ipsum anim ipsum anim ipsum anim ipsum. Quis do tempor non culpa quis facilis, et adipisicing sint voluptate. Anim ipsum anim ipsum anim ipsum anim ipsum.",
      ],
      author: "Admin",
      learningPoints: [
        "Master the sports coupe driving experience",
        "Understand the performance characteristics of the BMW X4 M50i",
        "Learn about the engineering behind sporty SUVs",
        "Discover the M-Performance enhancements",
        "Compare with other sports activity vehicles",
        "Explore driving techniques for sports coupes",
        "Understand performance tuning options",
        "Learn about the history of BMW M Performance",
      ],
      requirements: [
        "No prior knowledge of sports vehicles required - you'll learn everything you need to know",
        "A passion for driving and performance",
        "Interest in automotive technology and engineering",
        "Optional: Some experience with performance vehicles",
      ],
      detailPost: Blog4,
    },
    {
      id: 3,
      image: Blog3,
      category: "Automotive",
      date: "May 10, 2024",
      title: "BMW X6 Gold 2024 Sport Review - Light on Sport",
      content: [
        "Aliqua pariatur sint culpa adipisicing, quis ipsum amet consequat. Quis do tempor non culpa quis facilis, et adipisicing sint voluptate. Anim ipsum anim ipsum anim ipsum anim ipsum. Ut ad adipisicing elit, et adipisicing sint voluptate. Anim ipsum anim ipsum anim ipsum anim ipsum.",
        "Quis lorem tempor magna, et ipsum magna adipisicing et. Anim ipsum dolor lorem do exercitation pariatur. Quis do tempor non culpa quis facilis, et adipisicing sint voluptate. Anim ipsum anim ipsum anim ipsum anim ipsum. Quis do tempor non culpa quis facilis, et adipisicing sint voluptate. Anim ipsum anim ipsum anim ipsum anim ipsum. Quis do tempor non culpa quis facilis, et adipisicing sint voluptate. Anim ipsum anim ipsum anim ipsum anim ipsum.",
      ],
      author: "Admin",
      learningPoints: [
        "Understand the balance between luxury and sport in the X6",
        "Analyze the Gold Edition's special features",
        "Learn about the design philosophy of modern SUVs",
        "Compare with competitors in the luxury SUV segment",
        "Explore the technology features of the BMW X6",
        "Understand the driving dynamics of coupe-style SUVs",
        "Discover customization options for the X6",
        "Learn about BMW's special edition strategy",
      ],
      requirements: [
        "No prior knowledge of luxury SUVs required - you'll learn everything you need to know",
        "An interest in automotive design and technology",
        "Curiosity about what makes the Gold Edition special",
        "Optional: Experience with other BMW models for comparison",
      ],
      detailPost: Blog4,
    },
  ]

  useEffect(() => {
    if (id) {
      const post = blogPosts.find((post) => post.id === Number.parseInt(id))
      if (post) {
        setBlogPost(post)
      }
    }
  }, [id])

  if (!blogPost) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        <p>Loading blog post...</p>
      </div>
    )
  }

  return (
    <div className="bg-white">
      <main>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex plus-jakarta-sans-400 items-center gap-2 mb-4">
            <img
              src={Admin1 || "/placeholder.svg"}
              alt={`${blogPost.author} avatar`}
              className="h-6 w-6 rounded-full"
            />
            <span className="text-sm text-gray-600">{blogPost.author}</span>
            <span className="text-sm text-gray-600 mx-1">•</span>
            <span className="text-sm text-gray-600">{blogPost.category}</span>
            <span className="text-sm text-gray-600 mx-1">•</span>
            <span className="text-sm text-gray-600">{blogPost.date}</span>
          </div>

          <div className="mb-6">
            <img
              src={blogPost.image || "/placeholder.svg"}
              alt={blogPost.title}
              className="w-full h-auto rounded-md object-cover"
            />
          </div>

          <h1 className="text-2xl plus-jakarta-sans mb-4">{blogPost.title}</h1>

          <div className="prose max-w-none plus-jakarta-sans-400 mb-8">
            {blogPost.content.map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mb-8">
            <h2 className="text-xl plus-jakarta-sans mb-4">What you'll learn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
              {blogPost.learningPoints.map((point, index) => (
                <div key={index} className="flex items-start plus-jakarta-sans-400 gap-2">
                  <div className="mt-1 text-green-500">✓</div>
                  <div>{point}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8 plus-jakarta-sans-400">
            <img
              src={blogPost.detailPost || "/placeholder.svg"}
              alt="Additional imagery for the blog post"
              className="w-full h-auto rounded-md object-cover"
            />
          </div>

          <div className="mb-8">
            <h2 className="text-xl plus-jakarta-sans mb-4">Requirements</h2>
            <ul className="list-disc pl-5 plus-jakarta-sans-400 space-y-2">
              {blogPost.requirements.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul>
          </div>
          <CommentSection />
          <RelatedPosts />
        </div>
      </main>
    </div>
  )
}

export default BlogDetailPage