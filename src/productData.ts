export const products = [
  {
    id: 1,
    images: [
      '/assets/products/product1.jpg',
      '/assets/products/product2.jpg',
      '/assets/products/product2.jpg',
      '/assets/products/product3.jpg'
    ],
    title: 'Chiraita (Swertia Chiroyita)',
    description: 'Himalayan Herbs & Botanicals',
    price: 'NPR.1000/kg',
    status: 'Most Popular',
    benefits: 'Chiraita is known for its bitter properties that support digestion, help cleanse the liver, regulate blood sugar, and boost overall immunity. Traditionally, it has been used in Ayurveda and Himalayan medicine for reducing fever, skin conditions, and general detoxification.',
    usageInstructions: 'Take 1-2 grams with warm water twice daily after meals, or as directed by a certified herbalist. For liver and digestive health, it can be consumed as an herbal tea infusion. Long-term use should be supervised by an expert due to its strong bitterness.',
    exportInfo: 'Certified organic, hand-harvested, packed in Nepal with moisture-proof packaging. Suitable for both domestic use and international export with quality certifications.',
    comments: [
      { user: 'Ramesh', comment: 'Very effective for digestion.' },
      { user: 'Sita', comment: 'Good quality herbs, fast delivery.' }
    ],
    similarProducts: [
      { id: 2, image: '/assets/products/product2.jpg', title: 'Yarsagumba' },
      { id: 5, image: '/assets/products/product5.jpg', title: 'Ashwagandha',price: 'NPR.1000/kg', }
    ],
    origin: 'Himalayan region, Nepal',
    lifespan: 'Perennial',
    color: 'Green'
  },
  {
    id: 2,
    images: [
      '/assets/products/product2.jpg',
      '/assets/products/product2_2.jpg',
      '/assets/products/product2_3.jpg'
    ],
    title: 'Yarsagumba',
    description: 'Himalayan Herbs & Botanicals',
    price: 'NPR.1000/piece',
    status: 'Top Pick',
    benefits: 'Yarsagumba is prized as a natural tonic that boosts stamina, improves lung health, enhances libido, and increases overall vitality. It has long been considered the "Himalayan Viagra" due to its adaptogenic and aphrodisiac properties. It is also believed to improve oxygen utilization in the body, making it valuable for athletes and those at high altitudes.',
    usageInstructions: 'Consume 1 piece soaked in warm milk or hot water daily, preferably in the morning. It may also be powdered and mixed with honey or ghee. Consult an herbal expert for proper dosage, as potency varies with individuals.',
    exportInfo: 'Wildcrafted at high altitudes of Nepal, carefully cleaned and sun-dried. Packaged in airtight containers for premium export quality.',
    comments: [
      { user: 'Anil', comment: 'Premium quality Yarsagumba.' }
    ],
    similarProducts: [
      { id: 1, image: '/assets/products/product1.jpg', title: 'Chiraita (Swertia Chiroyita)' },
      { id: 5, image: '/assets/products/product5.jpg', title: 'Ashwagandha',price: 'NPR.1000/kg', }
    ],
    origin: 'High Himalayas, Nepal',
    lifespan: 'Annual',
    color: 'Brown'
  },
  {
    id: 3,
    images: [
      '/assets/products/product3.jpg',
      '/assets/products/product2.jpg',
      '/assets/products/product3.jpg'
    ],
    title: 'Jatamansi Oil',
    description: 'Body Care & Cosmetology',
    price: 'NPR.1000/kg',
    status: 'Most Popular',
    benefits: 'Jatamansi oil is a natural relaxant that helps reduce stress, calm the nervous system, and promote restful sleep. It is widely used in aromatherapy for anxiety relief and is also beneficial for skin rejuvenation, improving complexion, and scalp health. Regular use may also aid in controlling hypertension and balancing emotional wellness.',
    usageInstructions: 'Apply a few drops on the temples or forehead before sleep to improve relaxation. For skin health, dilute with a carrier oil such as coconut oil and massage gently. In aromatherapy, use in a diffuser for a calming effect.',
    exportInfo: 'Cold-pressed from wild-harvested Jatamansi roots, certified organic, and packaged in glass bottles to retain purity. Export-quality, suitable for global aromatherapy markets.',
    comments: [
      { user: 'Maya', comment: 'Relaxing fragrance and effective.' }
    ],
    similarProducts: [
      { id: 4, image: '/assets/products/product4.jpg', title: 'Sesame Oil',price: 'NPR.1000/kg', }
    ],
    origin: 'Nepalese Himalayan region',
    lifespan: 'Perennial',
    color: 'Golden Yellow'
  },
  {
    id: 4,
    images: [
      '/assets/products/product4.jpg',
      '/assets/products/product4.jpg',
      '/assets/products/product5.jpg',
      '/assets/products/product6.jpg'
    ],
    title: 'Sesame Oil',
    description: 'Ayurvedic Khana Lakcy',
    price: 'NPR.1000/kg',
    status: 'Most Popular',
    benefits: 'Sesame oil is highly valued in Ayurveda for nourishing the skin, strengthening hair, and supporting digestive health. It is rich in antioxidants, vitamin E, and healthy fats. Regular consumption may help reduce cholesterol, improve heart health, and support strong bones. In Ayurveda, it is also used for oil pulling to maintain oral hygiene.',
    usageInstructions: 'Use 1–2 teaspoons in daily cooking for a nutty flavor and health benefits. For massage, warm slightly and apply to the skin or scalp. For oil pulling, swish a tablespoon in the mouth for 5–10 minutes before spitting out.',
    exportInfo: 'Cold-pressed, pure organic sesame oil. Hygienically bottled and ready for international export.',
    comments: [
      { user: 'Bishal', comment: 'High quality and pure sesame oil.' }
    ],
    similarProducts: [
      { id: 3, image: '/assets/products/product3.jpg', title: 'Jatamansi Oil',price: 'NPR.1000/kg', },
      { id: 5, image: '/assets/products/product5.jpg', title: 'Ashwagandha',price: 'NPR.1000/kg', }
    ],
    origin: 'Terai region, Nepal',
    lifespan: 'Perennial',
    color: 'Light Brown'
  },
  {
    id: 5,
    images: [
      '/assets/products/product5.jpg',
      '/assets/products/product5.jpg',
      '/assets/products/product5.jpg'
    ],
    title: 'Ashwagandha',
    description: 'Adaptogenic Herb',
    price: 'NPR.800/kg',
    status: 'New Arrival',
    benefits: 'Ashwagandha is an ancient adaptogenic herb that helps reduce stress, improve energy levels, enhance focus, and strengthen the immune system. It is traditionally used for balancing hormones, improving reproductive health, and supporting long-term stamina. It also aids in reducing anxiety and promoting better sleep cycles.',
    usageInstructions: 'Take 1–2 grams daily mixed with warm milk or honey before bedtime for stress relief and relaxation. It may also be added to smoothies or teas. For best results, use consistently for several weeks under the guidance of a herbalist.',
    exportInfo: 'Organically grown in the Himalayan foothills, carefully dried and ground into fine powder. Hygienic packaging for both local markets and international export.',
    comments: [
      { user: 'Suman', comment: 'Good potency, effective for stress.' }
    ],
    similarProducts: [
      { id: 1, image: '/assets/products/product1.jpg', title: 'Chiraita (Swertia Chiroyita)',price: 'NPR.1000/kg', },
      { id: 2, image: '/assets/products/product2.jpg', title: 'Yarsagumba',price: 'NPR.1000/kg', }
    ],
    origin: 'Himalayan foothills, Nepal',
    lifespan: 'Perennial',
    color: 'Greenish Brown'
  }
];
