// https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/customer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Address map with fields related to the address: line1, line2, city, state, postal_code and country
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/customer#address Customer#address}
  */
  readonly address?: { [key: string]: string };
  /**
  * An integer amount in cents that represents the customer’s current balance, which affect the customer’s future invoices. A negative amount represents a credit that decreases the amount due on an invoice; a positive amount increases the amount due on an invoice.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/customer#balance Customer#balance}
  */
  readonly balance?: number;
  /**
  * An arbitrary string that you can attach to a customer object. It is displayed alongside the customer in the dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/customer#description Customer#description}
  */
  readonly description?: string;
  /**
  * Customer’s email address. It’s displayed alongside the customer in your dashboard and can be useful for searching and tracking. This may be up to 512 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/customer#email Customer#email}
  */
  readonly email?: string;
  /**
  * The prefix for the customer used to generate unique invoice numbers. Must be 3–12 uppercase letters or numbers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/customer#invoice_prefix Customer#invoice_prefix}
  */
  readonly invoicePrefix?: string;
  /**
  * Default invoice settings for this customer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/customer#invoice_settings Customer#invoice_settings}
  */
  readonly invoiceSettings?: { [key: string]: string };
  /**
  * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/customer#metadata Customer#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * The customer’s full name or business name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/customer#name Customer#name}
  */
  readonly name?: string;
  /**
  * The sequence to be used on the customer’s next invoice. Defaults to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/customer#next_invoice_sequence Customer#next_invoice_sequence}
  */
  readonly nextInvoiceSequence?: number;
  /**
  * The customer’s phone number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/customer#phone Customer#phone}
  */
  readonly phone?: string;
  /**
  * Customer’s preferred languages, ordered by preference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/customer#preferred_locales Customer#preferred_locales}
  */
  readonly preferredLocales?: string[];
  /**
  * Shipping map with fields like name, phone and fields related to the address: line1, line2, city, state, postal_code and country. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/customer#shipping Customer#shipping}
  */
  readonly shipping?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/customer stripe_customer}
*/
export class Customer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stripe_customer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Customer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Customer to import
  * @param importFromId The id of the existing Customer that should be imported. Refer to the {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/customer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Customer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stripe_customer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/customer stripe_customer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CustomerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'stripe_customer',
      terraformGeneratorMetadata: {
        providerName: 'stripe',
        providerVersion: '3.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._balance = config.balance;
    this._description = config.description;
    this._email = config.email;
    this._invoicePrefix = config.invoicePrefix;
    this._invoiceSettings = config.invoiceSettings;
    this._metadata = config.metadata;
    this._name = config.name;
    this._nextInvoiceSequence = config.nextInvoiceSequence;
    this._phone = config.phone;
    this._preferredLocales = config.preferredLocales;
    this._shipping = config.shipping;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: true, required: false
  private _address?: { [key: string]: string }; 
  public get address() {
    return this.getStringMapAttribute('address');
  }
  public set address(value: { [key: string]: string }) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // balance - computed: false, optional: true, required: false
  private _balance?: number; 
  public get balance() {
    return this.getNumberAttribute('balance');
  }
  public set balance(value: number) {
    this._balance = value;
  }
  public resetBalance() {
    this._balance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get balanceInput() {
    return this._balance;
  }

  // default_invoice_prefix - computed: true, optional: false, required: false
  public get defaultInvoicePrefix() {
    return this.getStringAttribute('default_invoice_prefix');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // invoice_prefix - computed: false, optional: true, required: false
  private _invoicePrefix?: string; 
  public get invoicePrefix() {
    return this.getStringAttribute('invoice_prefix');
  }
  public set invoicePrefix(value: string) {
    this._invoicePrefix = value;
  }
  public resetInvoicePrefix() {
    this._invoicePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invoicePrefixInput() {
    return this._invoicePrefix;
  }

  // invoice_settings - computed: false, optional: true, required: false
  private _invoiceSettings?: { [key: string]: string }; 
  public get invoiceSettings() {
    return this.getStringMapAttribute('invoice_settings');
  }
  public set invoiceSettings(value: { [key: string]: string }) {
    this._invoiceSettings = value;
  }
  public resetInvoiceSettings() {
    this._invoiceSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invoiceSettingsInput() {
    return this._invoiceSettings;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // next_invoice_sequence - computed: false, optional: true, required: false
  private _nextInvoiceSequence?: number; 
  public get nextInvoiceSequence() {
    return this.getNumberAttribute('next_invoice_sequence');
  }
  public set nextInvoiceSequence(value: number) {
    this._nextInvoiceSequence = value;
  }
  public resetNextInvoiceSequence() {
    this._nextInvoiceSequence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextInvoiceSequenceInput() {
    return this._nextInvoiceSequence;
  }

  // phone - computed: false, optional: true, required: false
  private _phone?: string; 
  public get phone() {
    return this.getStringAttribute('phone');
  }
  public set phone(value: string) {
    this._phone = value;
  }
  public resetPhone() {
    this._phone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneInput() {
    return this._phone;
  }

  // preferred_locales - computed: false, optional: true, required: false
  private _preferredLocales?: string[]; 
  public get preferredLocales() {
    return this.getListAttribute('preferred_locales');
  }
  public set preferredLocales(value: string[]) {
    this._preferredLocales = value;
  }
  public resetPreferredLocales() {
    this._preferredLocales = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredLocalesInput() {
    return this._preferredLocales;
  }

  // shipping - computed: false, optional: true, required: false
  private _shipping?: { [key: string]: string }; 
  public get shipping() {
    return this.getStringMapAttribute('shipping');
  }
  public set shipping(value: { [key: string]: string }) {
    this._shipping = value;
  }
  public resetShipping() {
    this._shipping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shippingInput() {
    return this._shipping;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.hashMapper(cdktf.stringToTerraform)(this._address),
      balance: cdktf.numberToTerraform(this._balance),
      description: cdktf.stringToTerraform(this._description),
      email: cdktf.stringToTerraform(this._email),
      invoice_prefix: cdktf.stringToTerraform(this._invoicePrefix),
      invoice_settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._invoiceSettings),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      next_invoice_sequence: cdktf.numberToTerraform(this._nextInvoiceSequence),
      phone: cdktf.stringToTerraform(this._phone),
      preferred_locales: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preferredLocales),
      shipping: cdktf.hashMapper(cdktf.stringToTerraform)(this._shipping),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._address),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      balance: {
        value: cdktf.numberToHclTerraform(this._balance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      invoice_prefix: {
        value: cdktf.stringToHclTerraform(this._invoicePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      invoice_settings: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._invoiceSettings),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_invoice_sequence: {
        value: cdktf.numberToHclTerraform(this._nextInvoiceSequence),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      phone: {
        value: cdktf.stringToHclTerraform(this._phone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_locales: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._preferredLocales),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      shipping: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._shipping),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
