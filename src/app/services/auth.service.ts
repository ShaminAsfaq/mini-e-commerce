import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, authState } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { User } from 'firebase/auth';
import { Firestore, doc, docData, setDoc } from '@angular/fire/firestore';
import { switchMap, map } from 'rxjs/operators';

export interface AppUser {
  uid: string;
  email: string | null;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<AppUser | null>;

  constructor(private auth: Auth, private firestore: Firestore) {
    console.log('AuthService: Initializing user$ observable');
    this.user$ = authState(this.auth).pipe(
      switchMap(user => {
        if (user) {
          // console.log('AuthService: authState emitted user:', user.uid);
          const userDocRef = doc(this.firestore, `users/${user.uid}`);
          // console.log('AuthService: Fetching user document for UID:', user.uid);
          return docData(userDocRef, { idField: 'uid' }).pipe(
            map(userData => {
              // console.log('AuthService: docData emitted user data for UID:', user.uid, userData);
              return { uid: user.uid, email: user.email, role: (userData as any)?.role || 'customer' };
            })
          );
        } else {
          console.log('AuthService: authState emitted null (no user)');
          return of(null);
        }
      })
    );

    // Log first emission of user$ to see how long it takes
    this.user$.subscribe(user => {
        console.log('AuthService: First user$ emission:', user);
    });
  }

  async signup(email: string, password: string): Promise<void> {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      const user = userCredential.user;
      console.log('Firebase Auth user created:', user.uid);
      // Add user to Firestore with a default role
      const userDocRef = doc(this.firestore, `users/${user.uid}`);
      console.log('Attempting to create user document in Firestore for UID:', user.uid);
      await setDoc(userDocRef, { email: user.email, role: 'customer' });
      console.log('User document successfully created in Firestore.');
      console.log('Signup successful!');
    } catch (error: any) {
      console.error('Signup failed:', error); 
      throw error; 
    }
  }

  login(email: string, password: string): Promise<void> {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then(() => { console.log('Login successful!'); })
      .catch(error => { console.error('Login failed:', error); throw error; });
  }

  logout(): Promise<void> {
    return signOut(this.auth)
      .then(() => { console.log('Logout successful!'); })
      .catch(error => { console.error('Logout failed:', error); throw error; });
  }

  // Observable to track authentication state
  getAuthStatus(): Observable<AppUser | null> {
    return this.user$;
  }
} 