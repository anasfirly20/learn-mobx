import { action, computed, makeObservable, observable, autorun, runInAction } from 'mobx';

// DEFAULT STATE
class UserStore {
    userInfo = {
        id: 'C117',
        name: 'Anas',
        subject: ['English', 'CS', 'Maths']
    }

    constructor() {
        makeObservable(this, {
            userInfo: observable,
            totalSubject: computed,
            updateUser: action,
            addSubject: action
        });
        autorun(this.logUserDetails);  // WILL RUN AFTER EVERY ACTION INVOKE
        runInAction(this.prefetchData);
    }

    // All getters behave as computed i.e. instantly calculate without action
    get totalSubject() {
        return this.userInfo.subject.length;
    }

    logUserDetails = () => {
        console.log(`Subject length: ${this.totalSubject}`);
    }

    updateUser = (name: string) => {
        return 'NA';
    }

    addSubject = (data: string) => {
        return 'NA';
    }


    prefetchData = () => {
        console.log('printing prefetchData...');
    }
}
export default UserStore;