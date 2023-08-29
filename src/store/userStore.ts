import { action, computed, makeObservable, observable, autorun, runInAction } from 'mobx';

// DEFAULT STATE
class UserStore {
    userInfo = {
        id: 'C117',
        name: 'Anas',
        subject: ['English', 'CS', 'Maths']
    }

    // NOTE: MakeObservable, autorun and runInAction are written in constructor
    constructor() {
        makeObservable(this, {
            userInfo: observable,
            totalSubject: computed,
            updateUser: action,      // MOBX SHOULD KNOW - UPDATE STATE
            addSubject: action
        });
        autorun(this.logUserDetails);  // WILL RUN AFTER EVERY ACTION INVOKE
        runInAction(this.prefetchData);
    }

    // All getters behave as computed i.e. instantly calculate without action
    get totalSubject() {
        console.log(`getter`);
        return this.userInfo.subject.length;
    }

    logUserDetails = () => {
        console.log(`Subject length: ${this.totalSubject}`);
    }

    updateUser = (name: string) => {
        this.userInfo.name = name; // UPDATE STATE CODE
    }

    addSubject = (data: string) => {
        return 'NA';
    }


    prefetchData = () => {
        console.log('run in action...'); // ADDED CONSOLE
    }
}
export default UserStore;