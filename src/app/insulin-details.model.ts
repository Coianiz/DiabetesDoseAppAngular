import { DecreaseButtonComponent } from './decrease-button/decrease-button.component';
import { IncreaseButtonComponent } from './increase-button/increase-button.component';
import { NumberInputComponent } from './number-input/number-input.component';
import { User } from './user.model';

export class InsulinDetails {
	Type : InsulinType;
	LastDoseTime : Date;
	LastDosage : number = 0;
	CurrentDose : number = this.LastDosage;

	public constructor (
		typeOfInsulin : InsulinType, 
		timeOfLastDose : Date, 
		lastDose : number) {
		this.Type = typeOfInsulin;
		this.LastDosage = lastDose;
		this.LastDoseTime = timeOfLastDose;	
	}

	public GetLastDose(typeOfInsulin : InsulinType, currentUser : User) : InsulinDetails {
		return new InsulinDetails (typeOfInsulin, new Date(), this.LastDosage);
	}

	public SaveDose(insulinDetails : InsulinDetails, currentUser : User) : void {
		// TODO: do this thing
	}

	public IncreaseDose() : void {
		++this.CurrentDose;
	}

	public DecreaseDose() : void {
		--this.CurrentDose;
	}
}

export enum InsulinType {
	ShortActing,
	LongActing
}
