import { InsulinDetails, InsulinType } from './insulin-details.model';

describe('InsulinDetails', () => {
  it('should create an instance', () => {
    expect(new InsulinDetails(InsulinType.LongActing, new Date(), 6)).toBeTruthy();
  });
});
