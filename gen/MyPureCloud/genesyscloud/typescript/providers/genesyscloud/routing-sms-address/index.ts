// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_sms_address
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoutingSmsAddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * This is used when the address is created. If the value is not set or true, then the system will, if necessary, auto-correct the address you provide. Set this value to false if the system should not auto-correct the address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_sms_address#auto_correct_address RoutingSmsAddress#auto_correct_address}
  */
  readonly autoCorrectAddress?: boolean | cdktf.IResolvable;
  /**
  * The city in which this address is in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_sms_address#city RoutingSmsAddress#city}
  */
  readonly city: string;
  /**
  * The ISO country code of this address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_sms_address#country_code RoutingSmsAddress#country_code}
  */
  readonly countryCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_sms_address#id RoutingSmsAddress#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name associated with this address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_sms_address#name RoutingSmsAddress#name}
  */
  readonly name?: string;
  /**
  * The postal code this address is in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_sms_address#postal_code RoutingSmsAddress#postal_code}
  */
  readonly postalCode: string;
  /**
  * The state or region this address is in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_sms_address#region RoutingSmsAddress#region}
  */
  readonly region: string;
  /**
  * The number and street address where this address is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_sms_address#street RoutingSmsAddress#street}
  */
  readonly street: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_sms_address genesyscloud_routing_sms_address}
*/
export class RoutingSmsAddress extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_routing_sms_address";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RoutingSmsAddress resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RoutingSmsAddress to import
  * @param importFromId The id of the existing RoutingSmsAddress that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_sms_address#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RoutingSmsAddress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_routing_sms_address", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/routing_sms_address genesyscloud_routing_sms_address} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoutingSmsAddressConfig
  */
  public constructor(scope: Construct, id: string, config: RoutingSmsAddressConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_routing_sms_address',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.70.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoCorrectAddress = config.autoCorrectAddress;
    this._city = config.city;
    this._countryCode = config.countryCode;
    this._id = config.id;
    this._name = config.name;
    this._postalCode = config.postalCode;
    this._region = config.region;
    this._street = config.street;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_correct_address - computed: false, optional: true, required: false
  private _autoCorrectAddress?: boolean | cdktf.IResolvable; 
  public get autoCorrectAddress() {
    return this.getBooleanAttribute('auto_correct_address');
  }
  public set autoCorrectAddress(value: boolean | cdktf.IResolvable) {
    this._autoCorrectAddress = value;
  }
  public resetAutoCorrectAddress() {
    this._autoCorrectAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCorrectAddressInput() {
    return this._autoCorrectAddress;
  }

  // city - computed: false, optional: false, required: true
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // country_code - computed: false, optional: false, required: true
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // postal_code - computed: false, optional: false, required: true
  private _postalCode?: string; 
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }
  public set postalCode(value: string) {
    this._postalCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postalCodeInput() {
    return this._postalCode;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // street - computed: false, optional: false, required: true
  private _street?: string; 
  public get street() {
    return this.getStringAttribute('street');
  }
  public set street(value: string) {
    this._street = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streetInput() {
    return this._street;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_correct_address: cdktf.booleanToTerraform(this._autoCorrectAddress),
      city: cdktf.stringToTerraform(this._city),
      country_code: cdktf.stringToTerraform(this._countryCode),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      postal_code: cdktf.stringToTerraform(this._postalCode),
      region: cdktf.stringToTerraform(this._region),
      street: cdktf.stringToTerraform(this._street),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_correct_address: {
        value: cdktf.booleanToHclTerraform(this._autoCorrectAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      city: {
        value: cdktf.stringToHclTerraform(this._city),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      country_code: {
        value: cdktf.stringToHclTerraform(this._countryCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      postal_code: {
        value: cdktf.stringToHclTerraform(this._postalCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      street: {
        value: cdktf.stringToHclTerraform(this._street),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
