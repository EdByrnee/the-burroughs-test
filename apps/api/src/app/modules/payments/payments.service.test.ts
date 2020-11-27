import { PaymentsService } from "./payments.service";
import { DayService } from "./day.service";

describe('PaymentService', () => {

  let paymentService: PaymentsService;

  beforeEach(() => {
    const dayService = new DayService();
    paymentService = new PaymentsService(dayService);
  });

  describe('getMonthlyPaymentSchedule', () => {

    it('should return the last day of month, if a weekday', async () => {
      const expected = "Fri, 31 Dec 2021 00:00:00 GMT"
      const recieved = paymentService.getLastWorkingDayOfMonth(2021,12);

      expect(recieved.toString()).toBe(expected);
    });

    it('should return the friday of month, if last day is a weekend (saturday)', async () => {
      const expected = "Fri, 30 Oct 2020 00:00:00 GMT"
      const recieved = paymentService.getLastWorkingDayOfMonth(2020,10);

      expect(recieved.toString()).toBe(expected);
    });

  
    it('should return the friday of month, if last day is a weekend (sunday)', async () => {
      const expected = "Fri, 29 Jan 2021 00:00:00 GMT"
      const recieved = paymentService.getLastWorkingDayOfMonth(2021,1);

      expect(recieved.toString()).toBe(expected);
    });


  });



  describe('getBonusPaymentDateOfMonth', () => {

    it('should return the 15th if 15 is a weekday', async () => {
      const expected = "Wed, 15 Dec 2021 00:00:00 GMT"
      const recieved = paymentService.getBonusPaymentDateOfMonth(2021,12);

      expect(recieved.toString()).toBe(expected);
    });

    it('should return the following wednesday if 15th is a satuday', async () => {
      const expected = "Tue, 18 May 2021 23:00:00 GMT"
      const recieved = paymentService.getBonusPaymentDateOfMonth(2021,5);

      expect(recieved.toString()).toBe(expected);
    });

  
    it('should return the following wednesday if 15th is a sunday', async () => {
      const expected = "Tue, 17 Aug 2021 23:00:00 GMT"
      const recieved = paymentService.getBonusPaymentDateOfMonth(2021,8);

      expect(recieved.toString()).toBe(expected);
    });


  });



});