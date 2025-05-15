import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Blog1 from "../../public/blog-images/detail-post-qgcqjbplr26tb4zy10bze2mopzdllwpk0s6tl4rlrw.jpg.svg"
import Blog2 from "../../public/blog-images/blog7-qgcqjcnfxw83mqykviqlyke5bd8ytltacwub2eq7lo.jpg.svg"
import DetailPost from "../../public/blog-images/detail-post.jpg.svg"
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
      category: "International Trade",
      date: "March 15, 2024",
      title: "Why Partnering with an Export Broker Simplifies International Trade",
      content: [
        "Navigating the complexities of international trade can be daunting. From sourcing quality products to handling logistics and compliance, the process is intricate. This is where an export broker becomes invaluable",
        "Expert Sourcing: Export brokers have established networks, ensuring access to reliable suppliers and quality products that meet your specifications.",
        "Streamlined Logistics: Coordinating shipping, customs, and delivery schedules across countries is challenging. Brokers manage these logistics, ensuring timely and efficient transportation.",
        "Regulatory Compliance: Each country has its own import/export regulations. Brokers stay updated on these laws, ensuring all documentation and procedures are correctly handled to avoid delays or penalties.",
        "Risk Mitigation: With services like shipping insurance and contract management, brokers help protect your investment",
      ],
      author: "Admin",
      conclusion: "Partnering with an experienced export broker simplifies international trade, reduces risks, and allows you to focus on growing your business.",
      learningPoints: [
        "Understand the role of export brokers in international trade",
        "Learn how brokers simplify the sourcing process",
        "Discover the logistics management benefits of working with brokers",
        "Master regulatory compliance in global markets",
        "Explore risk mitigation strategies in international trade",
        "Learn how to select the right export broker for your business",
        "Understand cost structures and ROI when working with brokers",
        "Discover case studies of successful broker partnerships"
      ],
      requirements: [
        "No prior knowledge of international trade required - you'll learn everything you need to know",
        "An interest in global business expansion",
        "A desire to understand import/export processes",
        "Optional: Experience with cross-border transactions for context"
      ],
      detailPost: DetailPost,
    },
    {
      id: 2,
      image: Blog2,
      category: "International Trade",
      date: "April 2, 2024",
      title: "Top 5 Mistakes to Avoid When Importing Goods Internationally",
      content: [
        "Importing goods can open new opportunities, but common pitfalls can lead to costly setbacks. Here are five mistakes to avoid",
        "1. Inadequate Research on Suppliers: Failing to vet suppliers can result in subpar products or scams. Always conduct thorough due diligence",
        "2. Ignoring Import Regulations: Each country has specific import laws. Not adhering to these can cause delays or legal issues",
        "3. Underestimating Shipping Costs: Unexpected fees like tariffs, taxes, and handling charges can inflate costs. Budget accordingly.",
        "4. Poor Communication: Misunderstandings due to language barriers or unclear agreements can derail transactions. Ensure clear and consistent communication",
        "5. Skipping Insurance: Without proper insurance, you're vulnerable to losses from damage, theft, or other unforeseen events during transit.",
      ],
      conclusion: "Being aware of these common mistakes and taking proactive steps can ensure a smoother import experience and protect your business interests.",
      author: "Admin",
      learningPoints: [
        "Master supplier verification techniques",
        "Understand import regulations across different regions",
        "Learn to calculate the true cost of importing goods",
        "Develop effective cross-cultural communication strategies",
        "Explore insurance options for international shipments",
        "Discover documentation requirements for smooth customs clearance",
        "Learn contract negotiation best practices",
        "Understand quality control measures for international procurement"
      ],
      requirements: [
        "No prior importing experience required - you'll learn everything you need to know",
        "An interest in international business",
        "Willingness to learn about regulatory compliance",
        "Optional: Some background in supply chain or procurement"
      ],
      detailPost: DetailPost,
    }
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

  const renderContent = (content) => {
    return content.map((paragraph, index) => {
      const splitIndex = paragraph.indexOf(':')
      if (splitIndex > -1) {
        const heading = paragraph.substring(0, splitIndex)
        const content = paragraph.substring(splitIndex + 1)
        return (
          <div key={index} className="mb-4">
            <h3 className="font-bold plus-jakarta-sans list-item mb-2">{heading}</h3>
            <p className="plus-jakarta-sans-400">{content}</p>
          </div>
        )
      } 
      return (
        <p key={index} className="mb-4 plus-jakarta-sans-400">
          {paragraph}
        </p>
      )
    })
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
            {renderContent(blogPost.content)}
          </div>


          <div className="mb-8 plus-jakarta-sans-400">
            <img
              src={blogPost.detailPost || "/placeholder.svg"}
              alt="Additional imagery for the blog post"
              className="w-full h-auto rounded-md object-cover"
            />
          </div>

          <div>
            <h1 className="text-xl plus-jakarta-sans mb-4">Conclusion</h1>
            <p className="plus-jakarta-sans-400">{blogPost.conclusion}</p>
          </div>
          <CommentSection />
          <RelatedPosts />
        </div>
      </main>
    </div>
  )
}

export default BlogDetailPage