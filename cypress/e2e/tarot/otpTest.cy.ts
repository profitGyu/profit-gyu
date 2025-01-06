describe('otp 테스트', () => {
  beforeEach(() => {
    cy.visit('/otpTest');
  });

  it('링크 생성 전 데이터를 확인한다.', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env('API_URL')}/crm/link/before-generate?q=diagnosis_id:123123`,
      headers: {
        'x-api-key': Cypress.env('CRM_API_KEY'),
      },
    })
      .then((res) => {
        expect(res.status).to.eq(200);
      })
      .then((response) => {
        expect(response.status).to.eq(200);
      });
  });

  it('링크 생성 후 타로 페이지로 이동 한다.', () => {
    cy.get('input[placeholder="진단지 아이디를 입력해 주세요"]').type('123123');
    cy.get('input[placeholder="이름을 입력해 주세요"]').type('이지성');
    cy.get('button[type="submit"]').click();
    cy.get('[data-testid="link"]').should('exist');

    cy.get('[data-testid="link"]').then((el) => {
      cy.visit(
        `${el.text().replace('https://gotyoo.co.kr', 'http://localhost:3000')}`,
      );
    });

    cy.get('header').should('contain', '타로');
  });
});
