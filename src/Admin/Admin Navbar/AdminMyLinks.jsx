export const links = [{name: 'Home', mainlink:"/add-admin", submenu:true, sublinks:[
    {Head: "Home Submenu",
    sublink:[
        {name:'Add Home Video', link:'/add-home-video'},
        {name:'Add Home Description', link:'/add-home-description'},
        {name:'Add Home Achievements',link:'/add-achievements'}
    ]}
]}, 
{name: 'Add Excel', mainlink:"", submenu:true, sublinks:[
    {Head: "Excel Submenu",
    sublink:[
        {name:'Add Product Excel', link:'/add-product-excel'},
        {name:'Add Solution Excel', link:'/add-solution-excel'}
    ]}
]}, 
    {name: 'Add Product', mainlink:"/add-product", submenu:true, sublinks:[
    {
        Head: "Product Submenu",
        sublink:[
            {name:'Add Product Feature', link: '/add-product-feature'},
            {name:'Add Product Highlights', link: '/add-product-highlights'},
            {name:'Add Product Category',link:'/add-product-category'}
        ]
    }
    ]
    },
    {name: 'Add Solution',mainlink:"/add-solution", submenu:true, sublinks:[
        {
            Head: "Solution Submenu",
            sublink:[
                { name:'Add Solution Feature', link : '/add-solution-features'},
                { name:'Add Solution Benefits', link: '/add-solution-benefits'},
                { name:'Add Solution Category', link: '/add-solution-category'}
            ]
        },
       
    ]}]