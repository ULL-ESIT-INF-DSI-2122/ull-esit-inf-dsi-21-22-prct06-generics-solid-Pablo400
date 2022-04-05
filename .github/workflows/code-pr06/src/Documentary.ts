/* eslint-disable require-jsdoc */
/* eslint-disable valid-jsdoc */
/* eslint-disable max-len */

/**
 * Documentary Class that creates a Documentary object
 */
export class Documentary {
  /**
   * Documentary constructor
   * @param name Documentary Name
   * @param year Documentary Year of launch
   * @param seasons Documentary Seasons
   * @param episodes Documentary Episodes
   * @param broadcastingMedia Documentary Broadcasting Media
   */
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
