import { Link } from "react-router-dom";
import Car1 from '../../public/blog-images/car-1.svg'
import Car2 from '../../public/blog-images/car-2.svg'
import Car3 from '../../public/blog-images/car-3.svg'
function RelatedPosts() {
  const relatedPosts = [
    {
      id: 1,
      image: Car1,
      category: "Exterior",
      date: "November 22, 2023",
      author: "Admin",
      title: "BMW X5 Gold 2024 Sport Review: Light on Sport"
    },
    {
      id: 2,
      image: Car2,
      category: "Body kit",
      date: "November 22, 2023",
      author: "Admin",
      title: "2024 Kia Sorento Hybrid Review: Big Vehicle With Small-Vehicle"
    },
    {
      id: 3,
      image: Car3,
      category: "Exterior",
      date: "November 22, 2023",
      author: "Admin",
      title: "2024 BMW X3 M Sport Seats – available as a standalone option"
    }
  ];

  return (
    <div className="mt-12 mb-8">
      <h2 className="text-2xl font-semibold mb-6 plus-jakarta-sans">Related Posts</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <div key={post.id} className="rounded-lg overflow-hidden shadow-md">
            <div className="relative">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-4 left-4 bg-white text-black text-xs font-medium px-2 py-1 rounded">
                {post.category}
              </span>
            </div>
            
            <div className="p-4">
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <span>{post.author}</span>
                <span className="mx-2">•</span>
                <span>{post.date}</span>
              </div>
              
              <Link to={`/blog/${post.id}`} className="hover:text-blue-600">
                <h3 className="font-medium leading-tight plus-jakarta-sans">{post.title}</h3>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedPosts;