export const PromoCard = () => {
  return (
    <div className="promo-card" style={{
      border: '1px solid #e1e5e9',
      borderRadius: '8px',
      padding: '24px',
      maxWidth: '400px',
      backgroundColor: '#ffffff'
    }}>
      <div style={{ marginBottom: '8px' }}>
        <img 
          src="https://shorturl.at/DeZZM" 
          alt="Logo" 
          style={{ height: '32px', marginBottom: '16px' }}
        />
      </div>
      
      <h3 style={{ 
        fontSize: '20px', 
        fontWeight: 'bold', 
        marginBottom: '12px',
        color: '#1a1a1a'
      }}>
        Title
      </h3>
      
      <p style={{ 
        color: '#6b7280', 
        marginBottom: '20px',
        lineHeight: '1.5'
      }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nisi quos aliquam dolor impedit iure?
      </p>
      
      <a 
        href="#" 
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
        Button label
      </a>
    </div>
  );
};