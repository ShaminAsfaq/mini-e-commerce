import { Component } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { SHIRT_MOCKS } from '../../../test-data/mock-data';

@Component({
  selector: 'app-seed-firestore',
  template: `<button (click)="seed()" class="bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-700">Seed Firestore with Mock Data</button>`,
  standalone: true
})
export class SeedFirestoreComponent {
  constructor(private firestore: Firestore) {}

  async seed() {
    const shirtsCollection = collection(this.firestore, 'shirts');
    for (const shirt of SHIRT_MOCKS) {
      await addDoc(shirtsCollection, { ...shirt });
    }
    alert('Seeding complete!');
  }
} 