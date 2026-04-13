import { HiArrowLeft, HiCalendar, HiUser, HiArrowRight } from 'react-icons/hi2'

function Blog() {
  const posts = [
    {
      title: 'Understanding SACCO Regulations in Kenya: A Complete Guide',
      excerpt: 'Navigate the complex world of SASRA compliance and learn what every SACCO administrator needs to know about regulatory requirements.',
      author: 'Dr. James Kariuki',
      date: 'March 15, 2026',
      category: 'Compliance',
      image: null
    },
    {
      title: '5 Strategies for Increasing Member Engagement in Your SACCO',
      excerpt: 'Discover proven methods to boost member participation and create a thriving cooperative community.',
      author: 'Elizabeth Akinyi',
      date: 'March 8, 2026',
      category: 'Growth',
      image: null
    },
    {
      title: 'The Future of Digital Banking for Cooperatives',
      excerpt: 'How emerging technologies are transforming the way SACCOs operate and serve their members.',
      author: 'Sarah Nekesa',
      date: 'February 28, 2026',
      category: 'Technology',
      image: null
    },
    {
      title: 'Managing Dividends Effectively: Best Practices for 2026',
      excerpt: 'Learn the latest approaches to calculating and distributing dividends while maintaining member satisfaction.',
      author: 'Grace Wanjiku',
      date: 'February 20, 2026',
      category: 'Finance',
      image: null
    },
    {
      title: 'How to Reduce Loan Default Rates in Your SACCO',
      excerpt: 'Practical tips and strategies for minimizing risk and ensuring healthy loan portfolios.',
      author: 'Michael Ochieng',
      date: 'February 12, 2026',
      category: 'Loans',
      image: null
    },
    {
      title: 'Mobile Money Integration: A Game Changer for SACCOs',
      excerpt: 'Why integrating mobile money platforms can dramatically improve member experience and operational efficiency.',
      author: 'David Kiprotich',
      date: 'February 5, 2026',
      category: 'Technology',
      image: null
    }
  ]

  const categories = ['All', 'Compliance', 'Growth', 'Technology', 'Finance', 'Loans']

  return (
    <div className="info-page-container">
      <div className="info-hero">
        <a href="/" className="back-link"><HiArrowLeft /> Back to Home</a>
        <h1>Blog</h1>
        <p>Insights and updates from the Ayedous team</p>
      </div>

      <section className="info-section">
        <div className="blog-hero-post">
          <div className="blog-hero-content">
            <span className="blog-category">Featured</span>
            <h2>Understanding SACCO Regulations in Kenya: A Complete Guide</h2>
            <p>Navigate the complex world of SASRA compliance and learn what every SACCO administrator needs to know about regulatory requirements.</p>
            <div className="blog-meta">
              <span><HiUser /> Dr. James Kariuki</span>
              <span><HiCalendar /> March 15, 2026</span>
            </div>
            <a href="#" className="blog-read-more">Read Article →</a>
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="category-filters">
          {categories.map((cat, index) => (
            <button key={index} className={`category-btn ${index === 0 ? 'active' : ''}`}>{cat}</button>
          ))}
        </div>
      </section>

      <section className="info-section">
        <div className="blog-grid">
          {posts.map((post, index) => (
            <article key={index} className="blog-card">
              <span className="blog-category-tag">{post.category}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="blog-card-meta">
                <span><HiUser /> {post.author}</span>
                <span><HiCalendar /> {post.date}</span>
              </div>
              <a href="#" className="blog-link">Read more <HiArrowRight /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="info-cta">
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter for the latest insights and updates</p>
        <div className="cta-buttons">
          <a href="/contact" className="btn-primary">Subscribe</a>
        </div>
      </section>
    </div>
  )
}

export default Blog