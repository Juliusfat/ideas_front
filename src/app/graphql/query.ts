import gql  from 'graphql-tag';


export const GET_ALL_IDEAS = gql`
    query getIdeas($page: Int) {
        ideas(page:$page, newest: true) 
        {id,
        idea,
        description,
        author {
            id,
            username
        },
        upvotes,
        downvotes,
        comments {
            id,
            comment
        }}
    }
`