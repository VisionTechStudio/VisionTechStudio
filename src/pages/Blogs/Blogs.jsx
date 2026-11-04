
import { useMemo, useState } from 'react';
import './Blogs.css';

const blogPosts = [
  {
    id: 1,
    category: 'Web Development',
    date: 'October 20, 2026',
    readTime: '6 min read',
    title: 'The Future of Web Development: Trends to Watch',
    excerpt:
      'Explore the technologies and development practices shaping the next generation of modern websites.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85',
    author: 'VisionTechStudio Team',
    content: [
      'Web development continues to evolve as new technologies and user expectations shape the digital world. Modern websites are expected to be fast, accessible, responsive and easy to use.',
      'JavaScript frameworks, cloud platforms and AI-powered development tools are helping developers build better digital experiences. Choosing the right technology depends on the project requirements, performance needs and long-term goals.',
      'The future of web development is not just about using new tools. It is about creating meaningful digital experiences that solve real problems for users.'
    ]
  },
  {
    id: 2,
    category: 'UI/UX Design',
    date: 'October 15, 2026',
    readTime: '5 min read',
    title: 'Why User Experience Matters in Website Design',
    excerpt:
      'Learn how thoughtful design and simple navigation can make a website more useful and engaging.',
    image:
      'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1200&q=85',
    author: 'Design Team',
    content: [
      'User experience is an important part of every successful digital product. A website should help visitors find information and complete tasks without unnecessary confusion.',
      'Clear navigation, readable typography, consistent layouts and responsive design all contribute to a better experience.',
      'Good design combines appearance with usability. Understanding user needs helps teams create products that are both attractive and practical.'
    ]
  },
  {
    id: 3,
    category: 'Artificial Intelligence',
    date: 'October 10, 2026',
    readTime: '7 min read',
    title: 'How Artificial Intelligence Is Transforming Businesses',
    excerpt:
      'Discover how AI tools can support business operations, customer experiences and decision-making.',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85',
    author: 'Technology Team',
    content: [
      'Artificial intelligence is changing how businesses approach everyday tasks. AI-powered tools can help analyze information, automate repetitive processes and support customer service.',
      'Businesses can explore AI applications in data analysis, personalized recommendations and workflow automation.',
      'Successful AI adoption requires clear goals, responsible use and attention to data quality. Technology should support people and improve the way work gets done.'
    ]
  },
  {
    id: 4,
    category: 'Digital Marketing',
    date: 'October 05, 2026',
    readTime: '4 min read',
    title: 'Digital Marketing Strategies for Growing Brands',
    excerpt:
      'Understand the fundamentals of building an online presence and reaching the right audience.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85',
    author: 'Marketing Team',
    content: [
      'A strong digital marketing strategy helps businesses connect with their target audience and communicate their value.',
      'Search engine optimization, useful content, social media and email communication can all contribute to a consistent online presence.',
      'The best strategy is based on audience needs, clear objectives and regular performance measurement.'
    ]
  },
  {
    id: 5,
    category: 'App Development',
    date: 'September 28, 2026',
    readTime: '6 min read',
    title: 'What Makes a Successful Mobile Application?',
    excerpt:
      'Explore the important elements behind useful, reliable and user-friendly mobile applications.',
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=85',
    author: 'Development Team',
    content: [
      'A successful mobile application starts with a clear purpose. It should solve a specific problem and provide a straightforward experience.',
      'Performance, security, accessibility and intuitive navigation are important considerations throughout development.',
      'Testing with real users and improving the application over time helps create a more reliable product.'
    ]
  },
  {
    id: 6,
    category: 'Technology',
    date: 'September 20, 2026',
    readTime: '5 min read',
    title: 'Cloud Computing and the Modern Digital World',
    excerpt:
      'A simple introduction to cloud computing and how it supports modern digital services.',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85',
    author: 'Technology Team',
    content: [
      'Cloud computing allows organizations to access computing resources through online services instead of maintaining every resource locally.',
      'It can support application hosting, data storage, collaboration and scalable infrastructure.',
      'Selecting a cloud solution requires considering security, performance, cost and the needs of the application.'
    ]
  }
];

const categories = [
  'All',
  'Web Development',
  'UI/UX Design',
  'Artificial Intelligence',
  'Digital Marketing',
  'App Development',
  'Technology'
];

function Blogs() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  const featuredPost = blogPosts[0];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === 'All' ||
        post.category === activeCategory;

      const search = searchTerm.toLowerCase();

      const matchesSearch =
        post.title.toLowerCase().includes(search) ||
        post.category.toLowerCase().includes(search) ||
        post.excerpt.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const displayedPosts = filteredPosts.filter(
    (post) => post.id !== featuredPost.id
  );

  return (
    <main className="blogs-page">

      {/* Hero Section */}
      <section className="blogs-hero">
        <img
          className="blogs-hero-bg"
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=2000&q=90"
          alt="Creative workspace with notebook and laptop"
        />

        <div className="blogs-hero-overlay"></div>

        <div className="blogs-hero-content">
          <span className="blogs-eyebrow">
            <span></span>
            INSIGHTS & INNOVATION
          </span>

          <h1>
            Ideas That Inspire.
            <span>Knowledge That Builds.</span>
          </h1>

          <p>
            Explore the latest insights, technology trends and creative
            ideas from the world of digital innovation.
          </p>

          <a href="#latest-blogs" className="blogs-hero-btn">
            Explore Our Blogs <span>↗</span>
          </a>
        </div>

        <div className="blogs-hero-bottom">
          <span>VISIONTECHSTUDIO</span>
          <span>LEARN · EXPLORE · INNOVATE</span>
        </div>
      </section>

      {/* Featured Article */}
      <section className="featured-section">
        <div className="blogs-container">
          <div className="section-heading">
            <div>
              <span className="section-label">EDITOR'S PICK</span>
              <h2>Featured Article</h2>
            </div>
            <span className="heading-line"></span>
          </div>

          <div className="featured-card">
            <div className="featured-image">
              <img src={featuredPost.image} alt={featuredPost.title} />
              <span className="featured-tag">FEATURED</span>
            </div>

            <div className="featured-content">
              <span className="blog-category">
                {featuredPost.category}
              </span>

              <h3>{featuredPost.title}</h3>

              <p>{featuredPost.excerpt}</p>

              <div className="blog-meta">
                <span>{featuredPost.date}</span>
                <span>{featuredPost.readTime}</span>
              </div>

              <button
                className="read-more-btn"
                onClick={() => setSelectedPost(featuredPost)}
              >
                Read Full Article <span>↗</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      <section className="latest-blogs-section" id="latest-blogs">
        <div className="blogs-container">

          <div className="section-heading">
            <div>
              <span className="section-label">OUR KNOWLEDGE HUB</span>
              <h2>Latest Articles</h2>
              <p>
                Discover useful ideas, guides and updates from our team.
              </p>
            </div>
          </div>

          {/* Search */}
          <div className="blogs-toolbar">
            <div className="blogs-search">
              <span>⌕</span>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search articles"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="blog-categories">
            {categories.map((category) => (
              <button
                key={category}
                className={
                  activeCategory === category ? 'active' : ''
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Cards */}
          {displayedPosts.length > 0 ? (
            <div className="blogs-grid">
              {displayedPosts.map((post) => (
                <article className="blog-card" key={post.id}>
                  <div className="blog-card-image">
                    <img src={post.image} alt={post.title} />
                    <span>{post.category}</span>
                  </div>

                  <div className="blog-card-content">
                    <div className="blog-card-meta">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3>{post.title}</h3>

                    <p>{post.excerpt}</p>

                    <button
                      className="blog-card-link"
                      onClick={() => setSelectedPost(post)}
                    >
                      Read Article <span>↗</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="no-blogs">
              <h3>No articles found</h3>
              <p>Try another search term or category.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('All');
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="blogs-cta">
        <div className="blogs-container blogs-cta-content">
          <span className="section-label">STAY INFORMED</span>
          <h2>Curious Minds Build Better Futures.</h2>
          <p>
            Keep exploring new ideas and stay connected with the
            latest digital trends.
          </p>
          <a href="/contact-us" className="blogs-cta-btn">
            Let's Connect <span>↗</span>
          </a>
        </div>
      </section>

      {/* Article Modal */}
      {selectedPost && (
        <div
          className="article-modal-backdrop"
          onClick={() => setSelectedPost(null)}
        >
          <article
            className="article-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="article-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="article-modal-close"
              onClick={() => setSelectedPost(null)}
              aria-label="Close article"
            >
              ×
            </button>

            <img
              className="article-modal-image"
              src={selectedPost.image}
              alt={selectedPost.title}
            />

            <div className="article-modal-content">
              <span className="blog-category">
                {selectedPost.category}
              </span>

              <div className="blog-meta">
                <span>{selectedPost.date}</span>
                <span>{selectedPost.readTime}</span>
                <span>By {selectedPost.author}</span>
              </div>

              <h2 id="article-modal-title">{selectedPost.title}</h2>

              {selectedPost.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </article>
        </div>
      )}

    </main>
  );
}

export default Blogs;
