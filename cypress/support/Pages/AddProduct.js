const Products_url = '[href="/superAdmin/manageProduct"]';
const addNewProduct = '[href="/superAdmin/manageProduct/addNewProduct"]';
const Forcetrue = "{force:true}";
const Product_Name = "#proName"
const Product_Size = "#proArea"
const Product_Price = "#proPrice"
const Discounted_on_price = "#proDiscount"
const Product_category = "#proCat"
const Product_Sample_Price = "input[formcontrolname=samplePrice]"
const Product_Short_Description = '[formcontrolname="shortDisc"]'
const Product_Long_Description = '[formcontrolname="description"]'
const Select_Product_Brand = '[formcontrolname="brand"]'
const Select_Product_Type = '[formcontrolname="type"]'
const Select_Product_Design = '[formcontrolname="design"]'
const Select_Product_Use = '[formcontrolname="use"]'
   const New_Arrival_Checkbox = '[formcontrolname="newArrival"]'
const Clearance_checkbox = '[formcontrolname="clearance"]'
const Select_Product_Colour = '[formcontrolname="color"]' 
const Add_Product_Quantity = '[formcontrolname="quantity"]'
const Add_Product_Warranty = "#proWarranty"
const Add_Product_SKU_Number = "#proSku"
const Click_Submit_Button = 'input[value="Submit"]'



export class AddProduct {

    Upload_File() {
cy.get('#proUploadFile')

    }
  Products() {
    cy.get(Products_url).click();
  }

  Addproduct() {
    cy.get(addNewProduct).click();
  }

  // cy.get('.navbar', {multiple: true})

  Get_product_name() {
    cy.get(Product_Name).click({ force: true });
    cy.get(Product_Name).type("This is a demo Product");
  }

  Product_measurement() {
    cy.get(Product_Size).select("Sq ft", { force: true });
  }

  Add_product_price() {
    cy.get(Product_Price).type("101", { force: true });
  }

  Add_product_discount() {
    cy.get(Discounted_on_price).type("10", { force: true });
  }

  Add_product_category() {
    cy.get(Product_category).select("fabric", { force: true });
  }

  Add_sample_price() {
    cy.get(Product_Sample_Price).type("50", { force: true });
  }

  Add_short_description() {
    cy.get(Product_Short_Description).type("This is short Description", {
      force: true,
    });
  }

  Add_long_description() {
    cy.get(Product_Long_Description).type("This is Long Description", {
      force: true,
    });
  }

  Select_brand() {
    cy.get(Select_Product_Brand).select("brewster", Forcetrue);
  }
  Select_type(){
cy.get(Select_Product_Type).select("peel'n'stick", Forcetrue)

  }
  Select_design() {
    cy.get(Select_Product_Design).select("animal", Forcetrue);
  }

  Select_use() {
    cy.get(Select_Product_Use).select("wallraw2", Forcetrue);
  }

  New_arrival_checkbox() {
    cy.get(New_Arrival_Checkbox).click();
  }

  Clearance_checkbox() {
    cy.get(Clearance_checkbox).click();
  }

  Select_colour() {
    cy.get(Select_Product_Colour).select("black", Forcetrue);
  }

  Add_quantity() {
    cy.get(Add_Product_Quantity).type("100", Forcetrue);
  }

  Add_warranty() {
    cy.get(Add_Product_Warranty).type("1 Year", Forcetrue);
  }

  Add_sku_number() {
    cy.get(Add_Product_SKU_Number).type("123456PSY", Forcetrue);
  }

  Click_submmit_button() {
    cy.get(Click_Submit_Button).click();
  }

  // cy.get('#proUploadFile').attachfile('C:\Cypress\first\cypress\fixtures\Testfile.jpg')

  // cy.get('#proArea').select('Sq ft')
  // cy.get('#proArea').click()
  // cy.select('option[value="Sq ft"]').click({force : true})
  // cy.select('option[value="Sq ft"]').click()
}

export const Productpage = new AddProduct();
