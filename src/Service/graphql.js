async function fetchGraphQL(operationsDoc, operationName, variables) {
    const result = await fetch(
        process.env.REACT_APP_GRAPHQL_URL,
        {
            method: "POST",
            body: JSON.stringify({
            query: operationsDoc,
            variables: variables,
            operationName: operationName,
            headers: {
                'Content-Type': 'application/json',
                'x-hasura-admin-secret': process.env.REACT_APP_GRAPHQL_TOKEN
              },
            })
        }
    );
  
    return await result.json();
}

  
export function executeInsert_users(usersArray) {
    return fetchGraphQL(
        `mutation insert_users {
          insert_users(objects: ${usersArray}) {
            returning {
              id
            }
          }
        }
      `,
      "insert_users",
      {}
    );
}