describe('타로 페이지 테스트', () => {
  beforeEach(() => {
    const otp = `${Cypress.env('OTP_CATEGORY_ONE')}`;

    const url = `${Cypress.env('API_URL')}/user/${otp}/info`;

    cy.request({
      method: 'GET',
      url: url,
    }).then((res) => {
      expect(res.status).to.eq(200);
    });

    // 그 다음 페이지 방문
    cy.visit(`/?otp=${otp}`);
  });

  it('Opt가 유효하면 타로 페이지로 이동한다', () => {
    cy.url().should('include', `/tarot`);
  });

  it('시작하기 버튼이 있는 지 확인 하고 클릭한다', () => {
    cy.get('button').contains('시작하기').click();
    cy.wait(3000);
    cy.get('[data-testid="tarot-card"]').first().click();
    cy.wait(2000);
    cy.get('[data-testid="tarot-card"]').first().click();
    cy.wait(1000);
    cy.get('header').should('contain', '타로 결과');
  });
});
