import { Component } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent {
  productDTO = new Product();
  productForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9 ]*$'),
    ]),
    price : new FormControl('',[
      Validators.required
    ]),
    tnc : new FormControl('',[
      Validators.required
    ]),
    shortDescription : new FormControl('',[
      Validators.required
    ]),
    longDescription : new FormControl('',[
      Validators.required
    ]),
    categoryId : new FormControl('',[
      Validators.required
    ])
    ,quantity : new FormControl('',[
      Validators.required
    ]),
  });

  createProduct() {
  }

  get name(): FormControl {
    return this.productForm.get('name') as FormControl;
  }

  get price(): FormControl {
    return this.productForm.get('price') as FormControl;
  }

  get tnc(): FormControl {
    return this.productForm.get('tnc') as FormControl;
  }

  get shortDescription(): FormControl {
    return this.productForm.get('shortDescription') as FormControl;
  }

  get longDescription(): FormControl {
    return this.productForm.get('longDescription') as FormControl;
  }
  get categoryId(): FormControl {
    return this.productForm.get('categoryId') as FormControl;
  }
  get quantity(): FormControl {
    return this.productForm.get('quantity') as FormControl;
  }

  selectedImage: string | ArrayBuffer | null |any = null;

  onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];

    if (file) {
      this.displaySelectedImage(file);
    }
  }

  displaySelectedImage(file: File): void {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.selectedImage = e.target?.result;
    };
    reader.readAsDataURL(file);
  }

}
