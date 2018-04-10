import $ from "jquery";

class Modal{
  constructor(){
      this.openModalButton = $(".open-modal");
      this.modalItSelf = $(".modal");
      this.closeModalButton = $(".modal__close-x");
      this.events();
  }

  events(){
    this.openModalButton.click(this.openModalMethod.bind(this));

    this.closeModalButton.click(this.closeModalMethod.bind(this));

    $(document).keyup(this.keyPress.bind(this));
  }

  keyPress(e){
    if(e.keyCode == 27){
      this.closeModalMethod();
    }
  }

  openModalMethod(){
    this.modalItSelf.addClass("modal--is-visible");
    return false;
  }

  closeModalMethod(){
    this.modalItSelf.removeClass("modal--is-visible");
  }

}

export default Modal;
