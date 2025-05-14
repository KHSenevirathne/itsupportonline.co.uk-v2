export const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://itsupport.co.uk/#breadcrumblist",
        "itemListElement": [
          {
            "@type": "ListItem",
            "@id": "https://itsupport.co.uk/#listItem",
            "position": 1,
            "name": "Home"
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://itsupport.co.uk/#organization",
        "name": "IT Support",
        "description": "by ClickDo IT Specialist in London",
        "url": "https://itsupport.co.uk/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://itsupport.co.uk/wp-content/uploads/2025/04/It-Support-uk-logo.svg",
          "@id": "https://itsupport.co.uk/#organizationLogo",
          "width": 231,
          "height": 55,
          "caption": "It-Support-uk-logo"
        },
        "image": {
          "@id": "https://itsupport.co.uk/#organizationLogo"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://itsupport.co.uk/#webpage",
        "url": "https://itsupport.co.uk/",
        "name": "IT Support - On Demand IT Services Specialist",
        "description": "IT Support services UK company in London for expert technology advice to help business growth! Trusted IT specialists by over 200+ companies For over 10 years.",
        "inLanguage": "en-US",
        "isPartOf": { "@id": "https://itsupport.co.uk/#website" },
        "breadcrumb": { "@id": "https://itsupport.co.uk/#breadcrumblist" },
        "datePublished": "2025-04-14T16:29:24+00:00",
        "dateModified": "2025-05-14T13:50:59+00:00"
      },
      {
        "@type": "WebSite",
        "@id": "https://itsupport.co.uk/#website",
        "url": "https://itsupport.co.uk/",
        "name": "IT Support",
        "description": "by IT Specialist in London",
        "inLanguage": "en-US",
        "publisher": { "@id": "https://itsupport.co.uk/#organization" }
      }
    ]
  };