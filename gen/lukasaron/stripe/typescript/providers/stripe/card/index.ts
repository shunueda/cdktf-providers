// https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/card
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Address map with fields related to the address: line1, line2, city, state, zip and country
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/card#address Card#address}
  */
  readonly address?: { [key: string]: string };
  /**
  * The customer that this card belongs to. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/card#customer Card#customer}
  */
  readonly customer: string;
  /**
  * Card security code. Highly recommended to always include this value, but it's required only for accounts based in European countries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/card#cvc Card#cvc}
  */
  readonly cvc?: number;
  /**
  * Two-digit number representing the card's expiration month.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/card#exp_month Card#exp_month}
  */
  readonly expMonth: number;
  /**
  * Four-digit number representing the card's expiration year.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/card#exp_year Card#exp_year}
  */
  readonly expYear: number;
  /**
  * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/card#metadata Card#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Cardholder name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/card#name Card#name}
  */
  readonly name?: string;
  /**
  * The card number, as a string without any separators.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/card#number Card#number}
  */
  readonly number: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/card stripe_card}
*/
export class Card extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stripe_card";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Card resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Card to import
  * @param importFromId The id of the existing Card that should be imported. Refer to the {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/card#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Card to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stripe_card", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/card stripe_card} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CardConfig
  */
  public constructor(scope: Construct, id: string, config: CardConfig) {
    super(scope, id, {
      terraformResourceType: 'stripe_card',
      terraformGeneratorMetadata: {
        providerName: 'stripe',
        providerVersion: '3.4.0',
        providerVersionConstraint: '3.4.0'
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
    this._customer = config.customer;
    this._cvc = config.cvc;
    this._expMonth = config.expMonth;
    this._expYear = config.expYear;
    this._metadata = config.metadata;
    this._name = config.name;
    this._number = config.number;
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

  // address_line1_check - computed: true, optional: false, required: false
  public get addressLine1Check() {
    return this.getStringAttribute('address_line1_check');
  }

  // address_zip_check - computed: true, optional: false, required: false
  public get addressZipCheck() {
    return this.getStringAttribute('address_zip_check');
  }

  // available_payout_methods - computed: true, optional: false, required: false
  public get availablePayoutMethods() {
    return this.getListAttribute('available_payout_methods');
  }

  // brand - computed: true, optional: false, required: false
  public get brand() {
    return this.getStringAttribute('brand');
  }

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getStringAttribute('country');
  }

  // customer - computed: false, optional: false, required: true
  private _customer?: string; 
  public get customer() {
    return this.getStringAttribute('customer');
  }
  public set customer(value: string) {
    this._customer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerInput() {
    return this._customer;
  }

  // cvc - computed: false, optional: true, required: false
  private _cvc?: number; 
  public get cvc() {
    return this.getNumberAttribute('cvc');
  }
  public set cvc(value: number) {
    this._cvc = value;
  }
  public resetCvc() {
    this._cvc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvcInput() {
    return this._cvc;
  }

  // cvc_check - computed: true, optional: false, required: false
  public get cvcCheck() {
    return this.getStringAttribute('cvc_check');
  }

  // exp_month - computed: false, optional: false, required: true
  private _expMonth?: number; 
  public get expMonth() {
    return this.getNumberAttribute('exp_month');
  }
  public set expMonth(value: number) {
    this._expMonth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expMonthInput() {
    return this._expMonth;
  }

  // exp_year - computed: false, optional: false, required: true
  private _expYear?: number; 
  public get expYear() {
    return this.getNumberAttribute('exp_year');
  }
  public set expYear(value: number) {
    this._expYear = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expYearInput() {
    return this._expYear;
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // funding - computed: true, optional: false, required: false
  public get funding() {
    return this.getStringAttribute('funding');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last4 - computed: true, optional: false, required: false
  public get last4() {
    return this.getStringAttribute('last4');
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

  // number - computed: false, optional: false, required: true
  private _number?: string; 
  public get number() {
    return this.getStringAttribute('number');
  }
  public set number(value: string) {
    this._number = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // tokenization_method - computed: true, optional: false, required: false
  public get tokenizationMethod() {
    return this.getStringAttribute('tokenization_method');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.hashMapper(cdktf.stringToTerraform)(this._address),
      customer: cdktf.stringToTerraform(this._customer),
      cvc: cdktf.numberToTerraform(this._cvc),
      exp_month: cdktf.numberToTerraform(this._expMonth),
      exp_year: cdktf.numberToTerraform(this._expYear),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      number: cdktf.stringToTerraform(this._number),
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
      customer: {
        value: cdktf.stringToHclTerraform(this._customer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cvc: {
        value: cdktf.numberToHclTerraform(this._cvc),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      exp_month: {
        value: cdktf.numberToHclTerraform(this._expMonth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      exp_year: {
        value: cdktf.numberToHclTerraform(this._expYear),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      number: {
        value: cdktf.stringToHclTerraform(this._number),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
