class Welcome {
  constructor() {
    
    this.logo = createImg(this.logoImage);

    this.teacherButton = createButton("become a host");
    this.studentButton = createButton("join by id");
  }

  hideElements() {
    this.teacherButton.hide();
    this.studentButton.hide();
  }

  setElementPosition() {
    this.logo.position(width / 3.2, 10);
    this.teacherButton.position(width / 2.3, height / 2 - 100);
    this.studentButton.position(width / 2.3, height / 2);
  }

  setElementStyle() {
    this.teacherButton.class("customButton");
    this.studentButton.class("customButton");
  }

  handleOnpress() {
    this.teacherButton.mousePressed(() => {
      this.hideElements();
      teacher.display();
    });

    this.studentButton.mousePressed(() => {
      this.hideElements();
      student.display();
    });
  }

  display() {
    this.setElementStyle();
    this.setElementPosition();
    this.handleOnpress();
  }
}
