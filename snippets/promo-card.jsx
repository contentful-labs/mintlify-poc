export const PromoCard = ({ entryId = 'YOUR_ENTRY_ID' }) => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Contentful configuration from environment variables
  // currently this does not work, I had to hardcode the values to get it to work
  const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
  const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
  const ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT;

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/entries/7bPaZiCIH2ebiXXnckGo1N/?access_token=${ACCESS_TOKEN}`
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setContent(data.fields);
        setError(null);
      } catch (err) {
        console.error('Error fetching Contentful data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [entryId]);

  if (loading) {
    return (
      <div className="promo-card" style={{
        border: '1px solid #e1e5e9',
        borderRadius: '8px',
        padding: '24px',
        maxWidth: '400px',
        backgroundColor: '#ffffff',
        textAlign: 'center'
      }}>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="promo-card" style={{
        border: '1px solid #e1e5e9',
        borderRadius: '8px',
        padding: '24px',
        maxWidth: '400px',
        backgroundColor: '#ffffff'
      }}>
        <p style={{ color: '#ef4444' }}>Error loading content: {error}</p>
      </div>
    );
  }

  return (
    <div className="promo-card" style={{
      border: '1px solid #e1e5e9',
      borderRadius: '8px',
      padding: '24px',
      maxWidth: '400px',
      backgroundColor: '#ffffff'
    }}>
      {content?.image && (
        <div style={{ marginBottom: '8px' }}>
          <img 
            src={content.image['en-US'] || content.image} 
            alt={content.imageAlt?.['en-US'] || content.imageAlt || "Image"} 
            style={{ height: '32px', marginBottom: '16px' }}
          />
        </div>
      )}
      
      <h3 style={{ 
        fontSize: '20px', 
        fontWeight: 'bold', 
        marginBottom: '12px',
        color: '#1a1a1a'
      }}>
        {content?.summary?.['en-US'] || content?.summary || 'Default Title'}
      </h3>
      
      <p style={{ 
        color: '#6b7280', 
        marginBottom: '20px',
        lineHeight: '1.5'
      }}>
        {content?.description?.['en-US'] || content?.description || 'Default description'}
      </p>
      
      <a 
        href={content?.buttonLink?.['en-US'] || content?.buttonLink || '#'} 
        style={{
          display: 'inline-block',
          padding: '10px 16px',
          backgroundColor: '#0066cc',
          color: '#ffffff',
          textDecoration: 'none',
          borderRadius: '4px',
          fontSize: '14px',
          fontWeight: '500'
        }}
      >
        {content?.buttonText?.['en-US'] || content?.buttonText || 'Learn More'}
      </a>
    </div>
  );
};