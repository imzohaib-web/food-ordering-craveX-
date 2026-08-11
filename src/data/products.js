export const products = [
  // BURGERS
  {
    id: 'zinger-supreme',
    name: 'Zinger Supreme',
    category: 'burgers',
    price: 599,
    originalPrice: 699,
    rating: 4.9,
    reviewCount: 238,
    badge: 'Best Seller',
    description: 'Crispy chicken fillet layered with fresh lettuce, creamy sauce, cheese and our signature CraveX seasoning.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    popular: true,
    customization: {
      sizes: [
        { id: 'reg', name: 'Regular', price: 0, default: true },
        { id: 'large', name: 'Large', price: 100 },
        { id: 'monster', name: 'Monster Double', price: 220 },
      ],
      extras: [
        { id: 'cheese', name: 'Extra Cheese', price: 80 },
        { id: 'jalapeno', name: 'Jalapeños', price: 30 },
        { id: 'sauce', name: 'Extra CraveX Sauce', price: 40 },
        { id: 'bacon', name: 'Crispy Bacon Strip', price: 120 },
      ],
      drinks: [
        { id: 'none', name: 'No Drink', price: 0, default: true },
        { id: 'pepsi', name: 'Pepsi 345ml', price: 90 },
        { id: '7up', name: '7UP 345ml', price: 90 },
        { id: 'lemonade', name: 'Mint Lemonade', price: 180 },
      ],
    },
  },
  {
    id: 'double-beef-smash',
    name: 'Double Beef Smash',
    category: 'burgers',
    price: 749,
    rating: 4.8,
    reviewCount: 184,
    badge: 'Popular',
    description: 'Smoky double beef patties smashed on flat-top, topped with melted cheddar, pickles and smash sauce.',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80',
    popular: true,
    customization: {
      sizes: [
        { id: 'reg', name: 'Double Patty', price: 0, default: true },
        { id: 'triple', name: 'Triple Beef Smash', price: 250 },
      ],
      extras: [
        { id: 'cheese', name: 'Extra Cheddar', price: 90 },
        { id: 'jalapeno', name: 'Grilled Jalapeños', price: 40 },
        { id: 'sauce', name: 'Extra Smash Sauce', price: 40 },
      ],
    },
  },
  {
    id: 'classic-cheese-burger',
    name: 'Classic Cheese Burger',
    category: 'burgers',
    price: 499,
    rating: 4.6,
    reviewCount: 142,
    badge: 'Classic',
    description: 'Juicy prime beef patty, classic yellow cheddar cheese, dill pickles and house special burger sauce.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    popular: false,
    customization: {
      sizes: [
        { id: 'reg', name: 'Single Patty', price: 0, default: true },
        { id: 'double', name: 'Make it Double', price: 180 },
      ],
      extras: [
        { id: 'cheese', name: 'Extra Cheese', price: 80 },
        { id: 'sauce', name: 'House Sauce Dip', price: 40 },
      ],
    },
  },
  {
    id: 'spicy-jalapeno-burger',
    name: 'Spicy Jalapeño Burger',
    category: 'burgers',
    price: 649,
    rating: 4.7,
    reviewCount: 110,
    badge: 'Hot & Spicy',
    description: 'Spicy crispy chicken breast dipped in ghost pepper honey, topped with fiery jalapeños and mayo.',
    image: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?auto=format&fit=crop&w=800&q=80',
    popular: false,
    customization: {
      sizes: [
        { id: 'reg', name: 'Regular', price: 0, default: true },
        { id: 'large', name: 'Large Fillet', price: 120 },
      ],
      extras: [
        { id: 'cheese', name: 'Extra Cheese', price: 80 },
        { id: 'jalapeno', name: 'Double Jalapeños', price: 40 },
      ],
    },
  },

  // PIZZA
  {
    id: 'chicken-fajita-pizza',
    name: 'Chicken Fajita Pizza',
    category: 'pizza',
    price: 1399,
    originalPrice: 1599,
    rating: 4.9,
    reviewCount: 312,
    badge: 'Hot & Spicy',
    description: 'Spicy fajita chicken, colorful bell peppers, sweet onions, black olives and rich mozzarella cheese.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    popular: true,
    customization: {
      sizes: [
        { id: 'personal', name: 'Personal 7"', price: 0, default: true },
        { id: 'medium', name: 'Medium 10"', price: 400 },
        { id: 'large', name: 'Large 13"', price: 750 },
      ],
      crusts: [
        { id: 'reg', name: 'Regular Pan Crust', price: 0, default: true },
        { id: 'thin', name: 'Italian Thin Crust', price: 0 },
        { id: 'cheese', name: 'Cheese Burst Crust', price: 250 },
      ],
      extras: [
        { id: 'mozzarella', name: 'Extra Mozzarella', price: 150 },
        { id: 'garlic-dip', name: 'Garlic Ranch Dip', price: 60 },
        { id: 'jalapeno-top', name: 'Jalapeño Topping', price: 80 },
      ],
    },
  },
  {
    id: 'bbq-chicken-pizza',
    name: 'BBQ Chicken Pizza',
    category: 'pizza',
    price: 1499,
    rating: 4.8,
    reviewCount: 196,
    badge: 'Chef Special',
    description: 'Smoky hickory BBQ sauce base, roasted chicken chunks, caramelized onions and melted mozzarella cheese.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
    popular: true,
    customization: {
      sizes: [
        { id: 'personal', name: 'Personal 7"', price: 0, default: true },
        { id: 'medium', name: 'Medium 10"', price: 400 },
        { id: 'large', name: 'Large 13"', price: 750 },
      ],
      crusts: [
        { id: 'reg', name: 'Regular Crust', price: 0, default: true },
        { id: 'cheese', name: 'Cheese Burst', price: 250 },
      ],
      extras: [
        { id: 'bbq-sauce', name: 'Extra BBQ Swirl', price: 60 },
        { id: 'mozzarella', name: 'Extra Mozzarella', price: 150 },
      ],
    },
  },
  {
    id: 'pepperoni-passion',
    name: 'Pepperoni Passion',
    category: 'pizza',
    price: 1599,
    rating: 4.9,
    reviewCount: 260,
    badge: 'Top Pick',
    description: 'Double layer of savory pepperoni slices on rich tomato herb sauce and premium mozzarella cheese.',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80',
    popular: false,
    customization: {
      sizes: [
        { id: 'personal', name: 'Personal 7"', price: 0, default: true },
        { id: 'medium', name: 'Medium 10"', price: 400 },
        { id: 'large', name: 'Large 13"', price: 750 },
      ],
      crusts: [
        { id: 'reg', name: 'Regular Crust', price: 0, default: true },
        { id: 'thin', name: 'Thin Crust', price: 0 },
        { id: 'cheese', name: 'Cheese Burst', price: 250 },
      ],
      extras: [
        { id: 'pepperoni', name: 'Extra Pepperoni', price: 180 },
        { id: 'mozzarella', name: 'Extra Mozzarella', price: 150 },
      ],
    },
  },
  {
    id: 'margherita-supreme',
    name: 'Margherita Supreme',
    category: 'pizza',
    price: 1199,
    rating: 4.7,
    reviewCount: 145,
    badge: 'Vegetarian',
    description: 'Fresh aromatic basil leaves, slow-roasted San Marzano tomatoes and creamy fresh mozzarella.',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80',
    popular: false,
    customization: {
      sizes: [
        { id: 'personal', name: 'Personal 7"', price: 0, default: true },
        { id: 'medium', name: 'Medium 10"', price: 350 },
        { id: 'large', name: 'Large 13"', price: 650 },
      ],
      crusts: [
        { id: 'reg', name: 'Regular Crust', price: 0, default: true },
        { id: 'thin', name: 'Thin Crust', price: 0 },
      ],
      extras: [
        { id: 'basil', name: 'Extra Fresh Basil', price: 40 },
        { id: 'mozzarella', name: 'Extra Mozzarella', price: 140 },
      ],
    },
  },

  // CHICKEN
  {
    id: 'crispy-chicken-wings',
    name: 'Crispy Chicken Wings',
    category: 'chicken',
    price: 549,
    rating: 4.7,
    reviewCount: 156,
    badge: 'Crispy',
    description: '6 Pieces of hand-battered golden wings served hot with signature spicy garlic sauce dip.',
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=80',
    popular: true,
    customization: {
      sizes: [
        { id: '6pc', name: '6 Pieces', price: 0, default: true },
        { id: '12pc', name: '12 Pieces', price: 450 },
      ],
      spices: [
        { id: 'mild', name: 'Original Crispy', price: 0, default: true },
        { id: 'hot', name: 'Spicy Buffalo', price: 30 },
        { id: 'bbq', name: 'Honey BBQ', price: 30 },
      ],
      extras: [
        { id: 'garlic-dip', name: 'Extra Garlic Dip', price: 60 },
        { id: 'ranch-dip', name: 'Extra Ranch Dip', price: 60 },
      ],
    },
  },
  {
    id: 'spicy-tenders-4pcs',
    name: 'Spicy Chicken Tenders',
    category: 'chicken',
    price: 499,
    rating: 4.8,
    reviewCount: 130,
    badge: 'Trending',
    description: '4 Large golden fried chicken breast tenders served with tangy honey mustard dipping sauce.',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80',
    popular: false,
    customization: {
      sizes: [
        { id: '4pc', name: '4 Pieces', price: 0, default: true },
        { id: '8pc', name: '8 Pieces', price: 400 },
      ],
      spices: [
        { id: 'mild', name: 'Mild', price: 0, default: true },
        { id: 'spicy', name: 'Fiery Spicy', price: 30 },
      ],
      extras: [
        { id: 'mustard-dip', name: 'Honey Mustard Dip', price: 60 },
        { id: 'fries', name: 'Add Small Fries', price: 120 },
      ],
    },
  },
  {
    id: 'fried-chicken-bucket',
    name: 'Fried Chicken Bucket',
    category: 'chicken',
    price: 1899,
    rating: 4.9,
    reviewCount: 290,
    badge: 'Family Deal',
    description: '9 Pieces of succulent fried chicken, 2 garlic dips, and 1 large family coleslaw.',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
    popular: true,
    customization: {
      sizes: [
        { id: '9pc', name: '9 Pieces Bucket', price: 0, default: true },
        { id: '15pc', name: '15 Pieces Party Bucket', price: 900 },
      ],
      spices: [
        { id: 'mix', name: '50/50 Mix (Spicy & Original)', price: 0, default: true },
        { id: 'spicy', name: 'All Spicy', price: 0 },
        { id: 'original', name: 'All Original', price: 0 },
      ],
      extras: [
        { id: 'fries', name: 'Add Large Fries', price: 220 },
        { id: 'drink', name: 'Add 1.5L Cola', price: 180 },
      ],
    },
  },

  // WRAPS
  {
    id: 'zinger-wrap',
    name: 'Zinger Wrap',
    category: 'wraps',
    price: 449,
    rating: 4.7,
    reviewCount: 120,
    badge: 'Top Pick',
    description: 'Crispy zinger chicken strip, garlic mayo sauce, diced tomatoes and lettuce wrapped in toasted tortilla.',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80',
    popular: false,
    customization: {
      spices: [
        { id: 'mild', name: 'Mild', price: 0, default: true },
        { id: 'spicy', name: 'Extra Spicy', price: 20 },
      ],
      extras: [
        { id: 'cheese', name: 'Extra Cheese Slice', price: 60 },
        { id: 'sauce', name: 'Extra Garlic Mayo', price: 40 },
      ],
    },
  },
  {
    id: 'grilled-chicken-wrap',
    name: 'Grilled Chicken Wrap',
    category: 'wraps',
    price: 479,
    rating: 4.6,
    reviewCount: 95,
    badge: 'Healthy Choice',
    description: 'Herb-marinated grilled chicken breast, fresh cucumbers, tomatoes and light buttermilk ranch in tortilla.',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80',
    popular: false,
    customization: {
      extras: [
        { id: 'cheese', name: 'Feta Cheese', price: 80 },
        { id: 'avocado', name: 'Avocado Slice', price: 120 },
      ],
    },
  },

  // SIDES
  {
    id: 'loaded-cheese-fries',
    name: 'Loaded Cheese Fries',
    category: 'sides',
    price: 399,
    rating: 4.8,
    reviewCount: 280,
    badge: 'Cheesy',
    description: 'Crispy skin-on fries drenched in warm cheddar cheese sauce, topped with jalapeño bits and bacon crumbs.',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
    popular: true,
    customization: {
      extras: [
        { id: 'extra-cheese', name: 'Extra Cheese Sauce', price: 80 },
        { id: 'jalapeno', name: 'Extra Jalapeños', price: 30 },
      ],
    },
  },
  {
    id: 'garlic-bread-cheesy',
    name: 'Garlic Bread Cheesy',
    category: 'sides',
    price: 299,
    rating: 4.7,
    reviewCount: 165,
    badge: 'Sides',
    description: '4 Slices of thick toasted garlic baguette blanketed with melted herbs mozzarella cheese.',
    image: 'https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?auto=format&fit=crop&w=800&q=80',
    popular: false,
    customization: {
      extras: [
        { id: 'marinara-dip', name: 'Marinara Dip', price: 60 },
      ],
    },
  },
  {
    id: 'onion-rings-crispy',
    name: 'Crispy Onion Rings',
    category: 'sides',
    price: 349,
    rating: 4.5,
    reviewCount: 88,
    badge: 'Crunchy',
    description: 'Thick sliced sweet onions in panko breadcrumbs, fried until golden and served with tartar dip.',
    image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=800&q=80',
    popular: false,
    customization: {
      extras: [
        { id: 'tartar-dip', name: 'Extra Tartar Dip', price: 50 },
      ],
    },
  },

  // DRINKS
  {
    id: 'iced-mango-smoothie',
    name: 'Iced Mango Smoothie',
    category: 'drinks',
    price: 299,
    rating: 4.8,
    reviewCount: 190,
    badge: 'Refreshing',
    description: 'Blended Alphonso mango pulp, crushed ice and fresh mint leaves.',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80',
    popular: false,
    customization: {
      sizes: [
        { id: 'reg', name: 'Regular 400ml', price: 0, default: true },
        { id: 'large', name: 'Large 600ml', price: 80 },
      ],
    },
  },
  {
    id: 'mint-lemonade',
    name: 'Mint Margarita Lemonade',
    category: 'drinks',
    price: 249,
    rating: 4.9,
    reviewCount: 220,
    badge: 'Best Seller',
    description: 'Freshly squeezed lemon juice blended with garden mint leaves, ice and sparkling soda.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    popular: true,
    customization: {
      sizes: [
        { id: 'reg', name: 'Regular 400ml', price: 0, default: true },
        { id: 'large', name: 'Large 600ml', price: 70 },
      ],
    },
  },

  // DESSERTS
  {
    id: 'chocolate-lava-cake',
    name: 'Chocolate Lava Cake',
    category: 'desserts',
    price: 349,
    rating: 4.9,
    reviewCount: 340,
    badge: 'Sweet Treat',
    description: 'Warm rich chocolate sponge cake with a flowing molten Belgian dark chocolate center.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    popular: false,
    customization: {
      extras: [
        { id: 'vanilla-ice', name: 'Add Vanilla Ice Cream Scoop', price: 120 },
      ],
    },
  },
  {
    id: 'churros-caramel',
    name: 'Churros with Dulce De Leche',
    category: 'desserts',
    price: 399,
    rating: 4.8,
    reviewCount: 175,
    badge: 'Decadent',
    description: 'Golden cinnamon-sugar coated Spanish churros served warm with thick dulce de leche caramel dip.',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80',
    popular: false,
    customization: {
      extras: [
        { id: 'chocolate-dip', name: 'Add Extra Chocolate Dip', price: 90 },
      ],
    },
  },
];
