const siteUrl = 'https://blog.enqdeq.net'
const title = `Andre's Blog`
const description = '정리하는 블로그'
const keywords = ['dev', 'blog', 'web']
const owner = {
    name: 'Byungwoo Jeon',
    email: 'apply@enqdeq.net',
    github: 'byung-u',
    twitter: 'jeonbyungwoo',
    gravatar: '841c6469756ec301df8b142993e550e3',
}

module.exports = {
    siteMetadata: {
        siteUrl,
        owner,
        title,
        description,
        keywords,
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-resolve-src',
        'gatsby-plugin-typescript',
        'gatsby-plugin-styled-components',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-feed',
        'gatsby-plugin-offline',
        'gatsby-plugin-netlify',
        'gatsby-plugin-sharp',
        'gatsby-plugin-twitter',
        {
            resolve: 'gatsby-plugin-canonical-urls',
            options: {
                siteUrl,
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: title,
                short_name: title,
                description,
                start_url: '/',
                display: 'minimal-ui',
            },
        },
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'UA-71008614-1',
                head: true,
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/blog-posts/posts`,
                name: 'blog-posts',
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 590,
                        },
                    },
                    {
                        resolve: 'gatsby-remark-emojis',
                        options: {
                            active: true,
                            class: 'emoji-icon',
                            size: 24,
                        },
                    },
                    'gatsby-remark-copy-linked-files',
                    'gatsby-remark-prismjs',
                    'gatsby-remark-autolink-headers',
                    'gatsby-remark-embed-youtube',
                    'gatsby-remark-responsive-iframe',
                    'gatsby-remark-external-links',
                    'gatsby-remark-katex',
                ],
            },
        },
    ],
}
