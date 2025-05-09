import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Blog1 from "../../public/blog-images/detail-post-qgcqjbplr26tb4zy10bze2mopzdllwpk0s6tl4rlrw.jpg.svg"
import Blog2 from "../../public/blog-images/blog7-qgcqjcnfxw83mqykviqlyke5bd8ytltacwub2eq7lo.jpg.svg"
import Blog3 from "../../public/blog-images/blog9-qgcqjcnfxw83mqykviqlyke5bd8ytltacwub2eq7lo.jpg.svg"
import Blog4 from "../../public/blog-images/blog8-qgcqjcnfxw83mqykviqlyke5bd8ytltacwub2eq7lo.jpg.svg"
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
      category: "Automotive",
      date: "March 15, 2024",
      title: "2024 BMW ALPINA XB7 with exclusive details, extraordinary",
      content: [
        "The 2024 BMW ALPINA XB7 represents the pinnacle of luxury SUV engineering, combining distinctive design elements with extraordinary performance capabilities. This exclusive vehicle stands as a testament to German automotive excellence, featuring handcrafted details that elevate it above standard production models.",
        "With a meticulously tuned 4.4-liter bi-turbo V8 engine delivering 612 horsepower and 590 lb-ft of torque, the XB7 accelerates from 0-60 mph in just 4.0 seconds, an impressive feat for a vehicle of its size and luxury classification. The ALPINA-specific adaptive suspension system provides both comfort and precision, allowing this three-row SUV to handle like a much smaller sports car when desired.",
        "Inside, the cabin showcases exclusive ALPINA touches including hand-stitched leather upholstery, distinctive blue illuminated gear selector, and ALPINA production plaque. The latest BMW iDrive 8 system comes standard, featuring a curved display that combines a 12.3-inch digital instrument cluster with a 14.9-inch central touchscreen.",
        "Every aspect of the 2024 XB7 is crafted to deliver an uncompromising driving experience that balances raw power with refined luxury. From the signature ALPINA front splitter to the quad oval tailpipes, this vehicle announces its exclusive pedigree through thoughtful design elements that enthusiasts will appreciate."
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
      detailPost: DetailPost,
    },
    {
      id: 2,
      image: Blog2,
      category: "Automotive",
      date: "April 2, 2024",
      title: "BMW X4 M50i is designed to exceed your sportiest",
      content: [
        "The BMW X4 M50i stands as a bold statement in the Sports Activity Coupe segment, designed specifically to exceed the expectations of even the most demanding driving enthusiasts. With its distinctive sloping roofline and aggressive stance, the X4 M50i balances aesthetic appeal with functional aerodynamics.",
        "Powered by BMW's renowned 4.4-liter M TwinPower Turbo V8 engine, the X4 M50i delivers an impressive 523 horsepower and 553 lb-ft of torque, launching this mid-size SAC from 0-60 mph in just 4.1 seconds. The M Sport differential and adaptive suspension ensure that power is delivered efficiently to all four wheels, providing exceptional cornering stability and traction in various driving conditions.",
        "The cabin blends luxury with a sporting character, featuring M-specific touches throughout including sports seats with enhanced bolstering, an M leather steering wheel, and unique digital displays. The latest driver assistance systems come standard, offering a perfect balance of safety and performance-oriented features.",
        "Every aspect of the X4 M50i has been engineered to deliver a driving experience that truly exceeds expectations, from its responsive throttle mapping to its precise steering feedback. This vehicle proves that practicality and thrilling performance can coexist in one exceptionally designed package."
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
      detailPost: DetailPost,
    },
    {
      id: 3,
      image: Blog3,
      category: "Automotive",
      date: "May 10, 2024",
      title: "BMW X6 Gold 2024 Sport Review - Light on Sport",
      content: [
        "The 2024 BMW X6 Gold Edition represents a unique approach to luxury SUV design, emphasizing opulence and exclusivity while taking a lighter approach to the sportiness typically associated with the X6 line. This special edition model features distinctive gold exterior accents and badging that immediately set it apart in BMW's lineup.",
        "Under the hood, the X6 Gold Edition comes equipped with BMW's 3.0-liter turbocharged inline-six engine, producing 335 horsepower and 331 lb-ft of torque. While these numbers are respectable, they represent a more relaxed approach compared to the more aggressive M-badged variants, prioritizing smooth power delivery and refinement over raw performance metrics.",
        "The interior continues the gold-accented theme with subtle metallic trim pieces and exclusive leather upholstery. The comfort-oriented suspension tuning provides an exceptionally smooth ride quality, making this X6 variant more suitable for luxurious cruising than aggressive corner carving. The latest technology package includes a head-up display, premium Harman Kardon sound system, and advanced driver assistance features.",
        "In our testing, the X6 Gold Edition demonstrated poised handling and adequate acceleration, though enthusiasts seeking more dynamic performance might look toward the M50i or X6 M variants instead. This edition clearly targets buyers who value exclusivity and comfort over outright sportiness, creating a niche within the already specialized coupe-SUV segment."
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
      detailPost: DetailPost,
    },
    {
      id: 4,
      image: Blog4,
      category: "Automotive",
      date: "May 25, 2024",
      title: "BMW 3 Series Touring: The Ultimate Family Adventure Vehicle",
      content: [
        "The BMW 3 Series Touring continues to set the standard for what a premium family wagon should be, offering an unmatched blend of practicality, driving dynamics, and refined luxury. Often overshadowed by SUVs in the North American market but beloved in Europe, the 3 Series Touring deserves consideration for families who refuse to compromise on driving pleasure.",
        "With up to 53.3 cubic feet of cargo space with the rear seats folded, the Touring variant offers substantially more utility than its sedan counterpart while maintaining the signature handling characteristics that make the 3 Series a driver's favorite. The standard panoramic sunroof floods the cabin with natural light, creating an airy, spacious feel throughout the interior.",
        "Engine options range from the efficient 330i with its 2.0-liter turbocharged four-cylinder producing 255 horsepower, to the more potent M340i with its 3.0-liter turbocharged inline-six generating 382 horsepower. Both powertrains can be paired with BMW's xDrive all-wheel-drive system, providing sure-footed traction in various weather conditions and making this wagon truly adventure-ready.",
        "The latest technology features include BMW's iDrive 7.0 system with a 10.25-inch central touchscreen and 12.3-inch digital instrument cluster, wireless Apple CarPlay and Android Auto, and an available Driving Assistance Professional Package that brings Level 2 semi-autonomous driving capabilities. For families seeking the perfect balance between practicality and driving engagement, the 3 Series Touring delivers without compromise."
      ],
      author: "Admin",
      learningPoints: [
        "Discover how wagons compare to SUVs for family use",
        "Understand the practical advantages of the 3 Series Touring",
        "Learn about the driving dynamics that set BMW wagons apart",
        "Explore cargo solutions and flexibility features",
        "Compare different engine and drivetrain options",
        "Understand the technology features for family safety",
        "Discover adventure-ready accessories and options",
        "Learn about the heritage of BMW touring models",
      ],
      requirements: [
        "No prior knowledge of BMW vehicles required - you'll learn everything you need to know",
        "An interest in practical yet engaging family vehicles",
        "Curiosity about alternatives to traditional SUVs",
        "Optional: Experience with family road trips and cargo needs",
      ],
      detailPost: DetailPost,
    },
    {
      id: 5,
      image: Blog1,
      category: "Automotive",
      date: "June 3, 2024",
      title: "The BMW M8 Competition: Power Meets Luxury",
      content: [
        "The BMW M8 Competition represents the pinnacle of BMW's performance engineering, combining supercar-level performance with grand touring luxury in a stunning package. As the flagship of the M division, this vehicle showcases what happens when BMW's engineers are given the freedom to create without compromise.",
        "At the heart of the M8 Competition lies a masterpiece of an engine: a 4.4-liter twin-turbocharged V8 producing an astonishing 617 horsepower and 553 lb-ft of torque. This powerplant enables the M8 Competition to accelerate from 0-60 mph in just 3.0 seconds, placing it firmly in supercar territory despite its luxurious appointments and comfortable grand touring capabilities.",
        "The sophisticated M xDrive all-wheel-drive system offers three distinct modes, including a rear-wheel-drive setting that allows experienced drivers to enjoy traditional M car handling characteristics. The adaptive suspension system features model-specific tuning that provides remarkable body control without compromising ride quality, while the carbon ceramic brakes deliver fade-resistant stopping power.",
        "Inside, the cabin showcases BMW's finest materials and craftsmanship, with extended Merino leather upholstery, carbon fiber trim, and M-specific controls. The latest iDrive system with a 12.3-inch display provides intuitive access to vehicle settings and entertainment functions. The M8 Competition successfully bridges the gap between luxury grand tourer and track-capable sports car, representing the ultimate expression of BMW's performance philosophy."
      ],
      author: "Admin",
      learningPoints: [
        "Understand what makes the M8 Competition the flagship BMW model",
        "Learn about the engineering behind 600+ horsepower luxury vehicles",
        "Discover the advanced drivetrain technology in modern performance cars",
        "Explore the balance between luxury and performance",
        "Compare with competitors in the high-performance luxury segment",
        "Understand track capabilities of modern grand tourers",
        "Learn about BMW M division's development process",
        "Discover the history of BMW's flagship coupes",
      ],
      requirements: [
        "No prior knowledge of high-performance vehicles required - you'll learn everything you need to know",
        "An interest in automotive engineering and design",
        "Curiosity about the upper echelon of performance vehicles",
        "Optional: Understanding of basic performance metrics and terminology",
      ],
      detailPost: DetailPost,
    },
    {
      id: 6,
      image: Blog2,
      category: "Automotive",
      date: "June 18, 2024",
      title: "BMW iX: Redefining Electric Mobility with Style",
      content: [
        "The BMW iX represents a bold new direction for the Bavarian automaker, serving as the technological flagship for BMW's electric future. Built from the ground up as an electric vehicle rather than adapted from an existing platform, the iX showcases BMW's dedication to sustainable mobility without compromising on the brand's core values of performance and luxury.",
        "Powered by BMW's fifth-generation eDrive technology, the iX features a dual-motor all-wheel-drive system producing up to 516 horsepower in xDrive50 form, enabling acceleration from 0-60 mph in just 4.4 seconds. The 105.2 kWh battery provides up to 324 miles of range on a single charge, while 200 kW DC fast-charging capability allows for 10-80% charging in approximately 35 minutes.",
        "The exterior design breaks new ground for BMW, with its minimalist approach and aerodynamic optimization taking priority over traditional styling cues. The controversial large kidney grille serves a practical purpose, housing cameras, radar, and other sensors required for advanced driver assistance systems. Inside, the cabin represents BMW's most progressive interior yet, featuring a hexagonal steering wheel, floating curved display, and sustainable materials throughout.",
        "The technological showcase continues with the latest iDrive 8 system, augmented reality navigation, and an available Highway Assistant that enables Level 2+ semi-autonomous driving on limited-access highways. The iX successfully demonstrates that electric mobility can align perfectly with BMW's brand values while pushing boundaries in design, sustainability, and technology."
      ],
      author: "Admin",
      learningPoints: [
        "Understand BMW's approach to purpose-built electric vehicles",
        "Learn about the fifth-generation BMW eDrive technology",
        "Discover the balance between range and performance in premium EVs",
        "Explore sustainable materials and manufacturing processes",
        "Compare with other luxury electric SUVs in the market",
        "Understand charging infrastructure and home charging solutions",
        "Learn about the advantages of dedicated EV platforms",
        "Discover BMW's electric vehicle roadmap",
      ],
      requirements: [
        "No prior knowledge of electric vehicles required - you'll learn everything you need to know",
        "An interest in automotive technology and sustainable mobility",
        "Curiosity about the future of luxury transportation",
        "Optional: Basic understanding of EV terminology",
      ],
      detailPost: DetailPost,
    },
    {
      id: 7,
      image: Blog3,
      category: "Automotive",
      date: "July 5, 2024",
      title: "2024 BMW 7 Series: The New Standard in Luxury Sedans",
      content: [
        "The 2024 BMW 7 Series represents the most dramatic reinvention of BMW's flagship sedan in generations, establishing new benchmarks for luxury, technology, and presence in the ultra-premium segment. With its bold, distinctive styling featuring a split headlight design and illuminated kidney grille, the new 7 Series makes an unmistakable statement that signals BMW's confidence in its flagship's position.",
        "Powertrains span from the efficient 740i with its 3.0-liter turbocharged inline-six producing 375 horsepower, to the range-topping i7 M70 all-electric variant generating an astonishing 650 horsepower. The first-ever all-electric i7 offers up to 318 miles of range and 195 kW fast-charging capability, bringing BMW's signature driving dynamics to the electric luxury segment.",
        "The interior represents a paradigm shift for BMW, centered around the new Theater Screen system – a 31.3-inch 8K resolution display that descends from the headliner to transform the rear compartment into a rolling cinema. This complements the curved display up front and the optional 36-speaker Bowers & Wilkins Diamond Surround Sound System with exciters built into the seats for a truly immersive audio experience.",
        "Advanced features include the Highway Assistant that enables hands-free driving up to 85 mph on limited-access highways, automatic doors that open and close at the touch of a button, and the new Interaction Bar that combines ambient lighting with touch-sensitive controls. The 2024 7 Series doesn't just raise the bar for luxury sedans – it completely redefines what customers should expect from a flagship vehicle."
      ],
      author: "Admin",
      learningPoints: [
        "Understand what defines a true flagship luxury sedan",
        "Learn about the diverse powertrain strategy from ICE to full electric",
        "Discover the latest entertainment and comfort technologies",
        "Explore the design philosophy behind the bold new styling",
        "Compare with competitors in the ultra-luxury segment",
        "Understand advanced driver assistance systems",
        "Learn about the manufacturing process at BMW's Dingolfing plant",
        "Discover the heritage and evolution of the 7 Series",
      ],
      requirements: [
        "No prior knowledge of luxury vehicles required - you'll learn everything you need to know",
        "An interest in automotive luxury and technology",
        "Curiosity about the future of premium transportation",
        "Optional: Understanding of luxury vehicle segments and positioning",
      ],
      detailPost: DetailPost,
    },
    {
      id: 8,
      image: Blog4,
      category: "Automotive",
      date: "July 22, 2024",
      title: "BMW X3 M Competition: Compact SUV with Supercar Performance",
      content: [
        "The BMW X3 M Competition defies conventional wisdom about what a compact SUV can deliver, packing genuine supercar performance into a practical package. This high-performance variant of BMW's popular X3 showcases the M division's ability to transform everyday vehicles into exceptional driving machines without sacrificing utility.",
        "Under the hood lies a 3.0-liter twin-turbocharged inline-six engine producing an incredible 503 horsepower and 442 lb-ft of torque, enabling the X3 M Competition to accelerate from 0-60 mph in just 3.7 seconds. The sophisticated all-wheel-drive system features an Active M Differential that optimizes traction while allowing for dynamic handling characteristics typically associated with rear-wheel-drive sports cars.",
        "The chassis has been comprehensively upgraded with model-specific suspension components, increased chassis bracing, and larger brakes to handle the substantial performance capabilities. Adaptive dampers offer a range of settings from relatively comfortable to track-focused, while the variable ratio steering provides precise feedback to the driver.",
        "Inside, the cabin balances performance elements like heavily bolstered sport seats and an M-specific steering wheel with the practicality expected from an SUV, including 28.7 cubic feet of cargo space behind the rear seats. The latest iDrive system with a 12.3-inch touchscreen handles infotainment duties, while a comprehensive suite of driver assistance features remains available. The X3 M Competition proves that family-friendly transportation need not come at the expense of driving excitement."
      ],
      author: "Admin",
      learningPoints: [
        "Understand the engineering challenges of high-performance SUVs",
        "Learn about the S58 engine and its motorsport heritage",
        "Discover how chassis tuning affects handling in tall vehicles",
        "Explore the balance between daily usability and track capability",
        "Compare with competitors in the high-performance compact SUV segment",
        "Understand performance modifications and their effects",
        "Learn about BMW M's approach to SUV development",
        "Discover the practicality benefits despite performance focus",
      ],
      requirements: [
        "No prior knowledge of performance SUVs required - you'll learn everything you need to know",
        "An interest in automotive performance and engineering",
        "Curiosity about practical vehicles with extraordinary capabilities",
        "Optional: Basic understanding of performance driving concepts",
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