/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
export class Documentary {
  constructor(private name : string, private year : number,
    private seasons : number, private episodes : number, private broadcastingMedia : string) {}

  getDocumentaryName() {
    return this.name;
  }

  getDocumentaryYear() {
    return this.year;
  }

  getDocumentarySeasons() {
    return this.seasons;
  }

  getDocumentaryEpisodes() {
    return this.episodes;
  }

  getBroadcastingMedia() {
    return this.broadcastingMedia;
  }
}
