export type GitHubSignal = {
  commitCount: number;
  publicRepos: number;
  lastSynced: string;
  live: boolean;
};

const fallbackSignal: GitHubSignal = {
  commitCount: 607,
  publicRepos: 50,
  lastSynced: "2026-11-16T00:00:00.000Z",
  live: false,
};

export async function getGitHubSignal(): Promise<GitHubSignal> {
  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "josephmmadubuike-portfolio",
  };

  try {
    const [commitResponse, userResponse] = await Promise.all([
      fetch("https://api.github.com/search/commits?q=author%3AJmmadubuike&per_page=1", {
        headers,
        next: { revalidate: 21600 },
      }),
      fetch("https://api.github.com/users/Jmmadubuike", {
        headers,
        next: { revalidate: 21600 },
      }),
    ]);

    if (!commitResponse.ok || !userResponse.ok) {
      return fallbackSignal;
    }

    const commits = (await commitResponse.json()) as { total_count?: number };
    const user = (await userResponse.json()) as { public_repos?: number };

    if (typeof commits.total_count !== "number" || typeof user.public_repos !== "number") {
      return fallbackSignal;
    }

    return {
      commitCount: commits.total_count,
      publicRepos: user.public_repos,
      lastSynced: new Date().toISOString(),
      live: true,
    };
  } catch {
    return fallbackSignal;
  }
}
