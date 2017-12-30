import {convertToObj} from '../../assets/jsLibs/utils';

class AccountsApi {
  constructor(data){
    this.data = data;
  }

  getAccounts(){
    return convertToObj(this.data);
  }
}

export default AccountsApi;