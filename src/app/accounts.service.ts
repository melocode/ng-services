export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor() {
  }

  addAccount(newAccount: { name: string, status: string }): void {
    this.accounts.push(newAccount);
  }

  updateAccount(updateInfo: { id: number, newStatus: string }): void {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }
}
