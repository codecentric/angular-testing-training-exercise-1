import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomButtonComponent } from './custom-button.component';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

function selectElementByTestId(
  fixture: ComponentFixture<any>,
  selector: string
) {
  return fixture.debugElement.query(By.css('[data-testid="' + selector + '"]'));
}

describe('CustomButtonComponent', () => {
  let component: CustomButtonComponent;
  let fixture: ComponentFixture<CustomButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomButtonComponent],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(CustomButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //<button type="button" data-testid="custom-button" ></button>

  it('should create a button', () => {
    let buttonEl = selectElementByTestId(fixture, 'custom-button');

    expect(buttonEl.nativeElement.getAttribute('type')).toEqual('button');
  });

  it('sets the buttontext by the text property', () => {
    component.text = 'Click me';
    fixture.detectChanges();

    let buttonEl = selectElementByTestId(fixture, 'custom-button');

    expect(buttonEl.nativeElement.innerText).toEqual('Click me');
  });

  it('emits a clicked event when clicked on the button', () => {
    let clicked = false;
    component.clicked.subscribe(() => (clicked = true));

    let buttonEl = selectElementByTestId(fixture, 'custom-button');
    buttonEl.nativeElement.click();

    expect(clicked).toEqual(true);
  });
});
