import { User } from 'src/app/modules/user';
export class Travel {


     idTravel!: number; 
	 startDate!: Date; 
	 lastDate!: Date;
	 destination!: string;
     status!: string; 
	 departurePlace!: string; 
	 confirmationStatus!: boolean; 
	 users!: User[]; 

	


}
