import { getRepository, Repository, DeleteResult } from 'typeorm';
import Band from '../../entities/Band';
import { IManager } from '../common/manager';

class BandManager implements Imanager {
  protected bandRepository: Repository<Band>;

  constructor() {
    this.bandRepository = getRepository(Band);
  }

  public async getBand(bandId: string): Promise<Band> {
    return Promise.resolve(new User());
  }

  public async createBand(bandDetails: Partial<Band>): Promise<Band> {}

  public async updateBand(
    bandId: string,
    updates: Partial<Band>
  ): Promise<Band> {
    return Promise.resolve(new User());
  }

  public async removeBand(bandId: string): Promise<DeleteResult | void> {
    return Promise.resolve();
  }
}

export default BandManager;
