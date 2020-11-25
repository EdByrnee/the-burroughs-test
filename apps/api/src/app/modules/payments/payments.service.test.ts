import { PaymentsService } from "./payments.service";

describe('PaymentService', () => {

  let paymentService: PaymentsService;

  beforeEach(() => {
    paymentService = new PaymentsService();
  });

  describe('getMonthlyPaymentSchedule', () => {

    it('should return the last day of month, if a weekday', async () => {
      const result = ['test'];
      jest.spyOn(catsService, 'findAll').mockImplementation(() => result);

      expect(await catsController.findAll()).toBe(result);
    });

    it('should return the friday of month, if last day is a weekend', async () => {
        const result = ['test'];
        jest.spyOn(catsService, 'findAll').mockImplementation(() => result);
  
        expect(await catsController.findAll()).toBe(result);
      });

  });



});