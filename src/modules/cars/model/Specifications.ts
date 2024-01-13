import { v4 as uuidv4 } from 'uuid';

class Especification {
  id?: string = '';
  name: string = '';
  description: string = '';
  created_at: Date = new Date();

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Especification };
