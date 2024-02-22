import * as firebase from 'firebase';
import 'firebase/auth';



export class SessionService {
  token: string;



  signupUser(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      )

  }

  signInUser(email: string, password: string){
    firebase.auth().signInWithEmailAndPassword(email, password).then(
      reponse => {

        firebase.auth().currentUser.getIdToken().then(
          (token: string) =>  this.token = token

        )
      }
    ).catch(
      error => console.log(error)
    );
  }

  logout(){
    firebase.auth().signOut();
    this.token = null;
  }

getIdToken(){
    return firebase.auth().currentUser.getIdToken().then(
      (token: string) => this.token = token
    );
    return this.token;
}

isAuthenticated(){
    return this.token != null;
}




  
}
