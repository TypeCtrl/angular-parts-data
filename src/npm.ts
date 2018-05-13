import * as got from 'got';
import * as _ from 'lodash';

interface NPM {
  analyzed: number;
  name: string;
  version: string;
  description: string;
  updated: number;
  deprecated?: string;
  author?: string;
  license?: string;
  // readme?: string;
  keywords?: string[];
  stars?: number;
  downloadsCount: number;
  downloadsAcceleration: number;
  score: number;
  quality: number;
  popularity: number;
  maintenance: number;
  homepageUrl?: string;
  repositoryUrl?: string;
  npmUrl?: string;
  issuesUrl?: string;
}

function fromJson(json: any): NPM {
  return {
    name: json.collected.metadata.name,
    analyzed: new Date(json.analyzedAt).getTime() / 1000,
    version: json.collected.metadata.version,
    description: json.collected.metadata.description,
    updated: new Date(json.collected.metadata.date).getTime() / 1000,
    deprecated: json.collected.metadata.deprecated,
    author: _.get(json, 'collected.metadata.author.name'),
    license: json.collected.metadata.license,
    // readme: json.collected.metadata.readme,
    keywords: json.collected.metadata.keywords,
    stars: _.get(json, 'collected.github.starsCount'),
    downloadsCount: json.evaluation.popularity.downloadsCount,
    downloadsAcceleration: json.evaluation.popularity.downloadsAcceleration,
    score: json.score.final,
    quality: json.score.detail.quality,
    popularity: json.score.detail.popularity,
    maintenance: json.score.detail.maintenance,
    homepageUrl: json.collected.metadata.links.homepage,
    repositoryUrl: json.collected.metadata.links.repository,
    npmUrl: json.collected.metadata.links.npm,
    issuesUrl: json.collected.metadata.links.bugs,
  };
}

export function get(packageName: string) {
  const escapedName = encodeURIComponent(packageName);
  const url = `https://api.npms.io/v2/package/${escapedName}`;
  return got.get(url, { json: true }).then(res => fromJson(res.body));
}
