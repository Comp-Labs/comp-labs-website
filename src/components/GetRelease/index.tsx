import * as React from 'react';
import { Octokit } from "@octokit/core";

interface GetReleaseProps {
  repo: string;
}

const GetRelease: React.FC<GetReleaseProps> = ({ repo }) => {
  const [releaseVersion, setReleaseVersion] = React.useState<string>('');
  React.useEffect(() => {
    const token = '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'
    const fetchLatestRelease = async () => {
      const octokit = new Octokit({auth: token});

      try {
        const response = await octokit.request(`GET /repos/Comp-Labs/${repo}/releases/latest`, {
          owner: 'Comp-Labs',
          repo,
          headers: {
            'X-GitHub-Api-Version': '2022-11-28',
          },
        });

        const { data } = response;
        const { name } = data;

        setReleaseVersion(name);
      } catch (error) {
        console.error('Error fetching latest release:', error);
      }
    };

    fetchLatestRelease();
  }, [repo]);

  return <p>{releaseVersion}</p>;
};

export default GetRelease;