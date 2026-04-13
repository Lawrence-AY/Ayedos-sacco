import { HiArrowLeft, HiDocumentText, HiBookOpen, HiAcademicCap, HiPlayCircle } from 'react-icons/hi2'

function Guides() {
  const guides = [
    {
      icon: HiDocumentText,
      title: 'Getting Started Guide',
      description: 'Learn the basics of setting up and using your Ayedous account.',
      category: 'Basics',
      readTime: '5 min read'
    },
    {
      icon: HiBookOpen,
      title: 'Member Portal Tutorial',
      description: 'Complete walkthrough of the member portal features and functionality.',
      category: 'Members',
      readTime: '10 min read'
    },
    {
      icon: HiAcademicCap,
      title: 'Administrator Training',
      description: 'For SACCO administrators: managing members, permissions, and settings.',
      category: 'Admin',
      readTime: '15 min read'
    },
    {
      icon: HiPlayCircle,
      title: 'Video: Making Your First Deposit',
      description: 'Step-by-step video guide on how to make deposits through the platform.',
      category: 'Video',
      readTime: '3 min watch'
    },
    {
      icon: HiDocumentText,
      title: 'Understanding Your Statement',
      description: 'Learn how to read and understand your monthly account statements.',
      category: 'Members',
      readTime: '5 min read'
    },
    {
      icon: HiBookOpen,
      title: 'Loan Application Process',
      description: 'Everything you need to know about applying for and managing loans.',
      category: 'Loans',
      readTime: '8 min read'
    }
  ]

  const categories = ['All', 'Basics', 'Members', 'Admin', 'Loans', 'Video']

  return (
    <div className="info-page-container">
      <div className="info-hero">
        <a href="/" className="back-link"><HiArrowLeft /> Back to Home</a>
        <h1>Guides & Resources</h1>
        <p>Step-by-step guides to help you get the most out of Ayedous</p>
      </div>

      <section className="info-section">
        <div className="info-section-header">
          <h2>Browse by Category</h2>
        </div>
        <div className="category-filters">
          {categories.map((cat, index) => (
            <button key={index} className={`category-btn ${index === 0 ? 'active' : ''}`}>{cat}</button>
          ))}
        </div>
      </section>

      <section className="info-section">
        <div className="guides-grid">
          {guides.map((guide, index) => {
            const Icon = guide.icon
            return (
              <div key={index} className="guide-card">
                <div className="guide-icon"><Icon /></div>
                <span className="guide-category">{guide.category}</span>
                <h3>{guide.title}</h3>
                <p>{guide.description}</p>
                <div className="guide-meta">
                  <span className="guide-read-time">{guide.readTime}</span>
                  <a href="#" className="guide-link">Read more →</a>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="info-section">
        <div className="info-section-header">
          <h2>Need More Help?</h2>
          <p>If you can't find what you're looking for, our support team is ready to assist.</p>
        </div>
        <div className="help-options">
          <div className="help-card">
            <h4>Contact Support</h4>
            <p>Reach our team directly for personalized assistance.</p>
            <a href="/contact" className="btn-secondary">Get Support</a>
          </div>
          <div className="help-card">
            <h4>Video Tutorials</h4>
            <p>Watch our library of video tutorials for visual guides.</p>
            <a href="#" className="btn-secondary">Watch Videos</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Guides