import { NovaPostRepository } from "../repositories";

export class NovaPostManager {
  private repo: NovaPostRepository;

  constructor(repo: NovaPostRepository) {
    this.repo = repo;
  }

  public getStatusDocuments(documentNumber: string) {
    return this.repo.trackDocuments(documentNumber);
  }
}
