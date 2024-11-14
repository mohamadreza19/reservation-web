export type TimeSlotStatus = 'check' | 'checked-double' | 'idle';
export type TimeSlotType = 'customer' | 'business';
interface AdditionalInfoForBusiness {
  assignedEmployeeName: string;
}
export interface TimeSlot {
  hour: string;
  minutes: string;
  phone: string;
  status: TimeSlotStatus;
  type: TimeSlotType;
  name: string;
  dataForBusiness?: AdditionalInfoForBusiness;
}
// export interface CustomerTimeSlot extends TimeSlot {
//   businessName: string;
// }
// export interface BusinessTimeSlot extends TimeSlot {
//   customerName: string;
// }
