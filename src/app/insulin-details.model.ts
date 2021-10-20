import { User } from './user.model';

export class InsulinDetails {
	Type : InsulinType;
	LastDoseTime : Date;
	LastDose : number = 0;
	CurrentDose : number = this.LastDose;

	public constructor (
		typeOfInsulin : InsulinType, 
		timeOfLastDose : Date, 
		lastDose : number) {
		this.Type = typeOfInsulin;
		this.LastDose = lastDose;
		this.LastDoseTime = timeOfLastDose;	
	}

	public GetLastDose(typeOfInsulin : InsulinType, currentUser : User) : number {
		return this.LastDose;
	}

	public SaveDose(insulinDetails : InsulinDetails, currentUser : User) : void {
		// TODO: do this thing
	}
}

export enum InsulinType {
	ShortActing,
	LongActing
}
