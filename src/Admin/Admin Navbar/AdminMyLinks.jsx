export const links = [{name: 'Home', mainlink:"/add-admin", submenu:true, sublinks:[
    {Head: "Add Home Submenu",
    sublink:[
        {name:'Add Admin',link:'/add-admin'},
        {name:'Add Home Video', link:'/add-home-video'},
        {name:'Add/Update Home Description', link:'/add-home-description'},
        {name:'Add Home Achievements',link:'/add-achievements'},
        {name:'Add Home Counter', link:'/add-counter'},
        {name:'Add Navbar',link:'/add-navbar'}
    ]},
    {Head: "Delete Home Submenu",
    sublink:[
        { name:'Delete Home Cover', link: '/delete-home-cover'},
        { name:'Delete Home Achievement', link: '/delete-home-achievement'},
        { name:'Delete Home Description', link: '/delete-home-description'},
        { name:'Delete Counter By Name', link:'/delete-counters-id'},
        { name:'Delete All Counters', link:'/delete-counters'},
        { name:'Delete Navbar', link: '/delete-navbar'}
    ]}
]}, 
{name: 'Add Excel', mainlink:"", submenu:true, sublinks:[
    {Head: "Excel Submenu",
    sublink:[
        {name:'Add Product Excel', link:'/add-product-excel'},
        {name:'Add Solution Excel', link:'/add-solution-excel'},
        {name:'Add Product Category Excel', link:'/add-product-category-excel'},
        {name:'Add Solution Category Excel', link:'/add-solution-category-excel'}
    ]}
]}, 
    {name: 'Products', mainlink:"", submenu:true, sublinks:[
    {
        Head: "Add/Update Product Submenu",
        sublink:[
            {name:'Add Product', link: '/add-product'},
            {name:'Add Product Category',link:'/add-product-category'},
            {name:'Add/Update/Delete Product Feature', link: '/add-product-feature'},
            {name:'Add/Update/Delete Product Highlights', link: '/add-product-highlights'},
            {name:'Add/Update/Delete Product Specifications',link:'/add-specifications'},
            { name:'Update Product', link:'/update-product'}
        ]
    },
    {
        Head: "Delete Product Submenu",
        sublink:[
            { name:'Delete All Products', link: '/delete-products'},
            { name:'Delete All Product Category', link: '/delete-product-category'},
            { name:'Delete Products By Id', link: '/delete-product-id'},
            { name:'Delete Product Category By Id', link: '/delete-product-category-id'},
            // { name:'Delete Product Highlight', link: '/delete-product-highlight'},
            // { name:'Delete Product Feature', link: '/delete-product-feature'},
            // { name:'Delete Product Specification', link: '/delete-product-specification'}
        ]
    },
    // {
    //     Head: "Update Product Submenu",
    //     sublink:[
    //         { name:'Update Product', link:'/update-product'}
    //     ]
    // }
    ]
    },
    {name: 'Solutions',mainlink:"", submenu:true, sublinks:[
        {
            Head: "Add/Update Solution Submenu",
            sublink:[
                { name:'Add Solution', link: '/add-solution'},
                { name:'Add Solution Category', link: '/add-solution-category'},
                { name:'Add/Update/Delete Solution Feature', link : '/add-solution-features'},
                { name:'Add/Update/Delete Solution Benefits', link: '/add-solution-benefits'},
                { name: 'Update Solution', link: '/update-solution'},
            ]
        },
        {
            Head: "Delete Solution Submenu",
            sublink:[
                { name:'Delete All Solutions', link : '/delete-solutions'},
                { name:'Delete All Solution Category', link: '/delete-solution-category'},
                { name:'Delete Solution By Id', link : '/delete-solution-id'},
                { name:'Delete Solution Category By Id', link: '/delete-solution-category-id'},
                // { name:'Delete Solution Feature', link: '/delete-solution-feature'},
                // { name:'Delete Solution Benefit', link: '/delete-solution-benefit'},
            ]
        },
        // {
        //     Head: "Update Solution",
        //     sublink:[
        //         { name: 'Update Solution', link: '/update-solution'},
        //     ]
        // }
       
    ]}

]