import { useLoaderData } from 'react-router-dom';

export async function loader({ params }) {
    const url = `https://api.github.com/repos/facebook/create-react-app/issues/${params.issueId}`;
    const issue = await fetch(url).then((response) => response.json());

    return { issue };
}

export default function Issue() {
    const { issue } = useLoaderData();

    return (
        <>
            <h2>
                Issue #{issue.number} : {issue.title}
            </h2>
            <div>
                <p>{new Date(issue.created_at).toDateString()}</p>
                <p>{issue.body}</p>
            </div>
        </>
    );
}
