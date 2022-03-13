async function fetchGraphQL(operationsDoc, operationName, variables) {
	const result = await fetch(process.env.REACT_APP_GRAPHQL_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'x-hasura-admin-secret': process.env.REACT_APP_GRAPHQL_TOKEN
		},
		body: JSON.stringify({
			query: operationsDoc,
			variables: variables,
			operationName: operationName
		})
	})

	return await result.json()
}

export function executeInsert_users(usersArray) {
	const json = JSON.stringify(usersArray) // {"name":"John Smith"}
	const unquoted = json.replace(/"([^"]+)":/g, '$1:')

	const mutationString = `
    mutation insert_users {
      insert_users(objects: ${unquoted}) {
        returning {
          id
        }
      }
    }
  `

	return fetchGraphQL(mutationString, 'insert_users', {})
}

export function executeDeleteByClusterId(clusterId) {
	const mutationString = `
    mutation delete_by_clusterId_users {
      delete_users(
        where: {clusterId: {_eq: "${clusterId}"}}
      ) {
        affected_rows
      }
    }
  `

	return fetchGraphQL(mutationString, 'delete_by_clusterId_users', {})
}

export function getCommentsNumber() {
	const operationsDoc = `
    query getCommentsNumber {
      comments {
        pkgname
      }
    }
  `
	return fetchGraphQL(operationsDoc, 'getCommentsNumber', {})
}

export function getComments(pkgname) {
	const operationsDoc = `
    query getCommentsNumber {
      comments (where: {pkgname: {_eq: "${pkgname}"}}) {
        id,
        message,
        author,
        clusterId
      }
    }
  `
	return fetchGraphQL(operationsDoc, 'getCommentsNumber', {})
}

export function writeComment(message, author, pkgname, clusterId) {
	const json = JSON.stringify({ message, author, pkgname, clusterId })
	const unquoted = json.replace(/"([^"]+)":/g, '$1:')

	const mutationString = `
    mutation insert_comments {
      insert_comments(objects: ${unquoted}) {
        returning {
          id
        }
      }
    }
  `

	return fetchGraphQL(mutationString, 'insert_comments', {})
}

export function deleteComment(id) {
	const mutationString = `
    mutation delete_by_id_comments {
      delete_comments(
        where: {id: {_eq: "${id}"}}
      ) {
        affected_rows
      }
    }
  `

	return fetchGraphQL(mutationString, 'delete_by_id_comments', {})
}
