// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_addresses
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiAccountsAddressesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_addresses#auto_correct_address ApiAccountsAddresses#auto_correct_address}
  */
  readonly autoCorrectAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_addresses#city ApiAccountsAddresses#city}
  */
  readonly city: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_addresses#customer_name ApiAccountsAddresses#customer_name}
  */
  readonly customerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_addresses#emergency_enabled ApiAccountsAddresses#emergency_enabled}
  */
  readonly emergencyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_addresses#friendly_name ApiAccountsAddresses#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_addresses#id ApiAccountsAddresses#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_addresses#iso_country ApiAccountsAddresses#iso_country}
  */
  readonly isoCountry: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_addresses#path_account_sid ApiAccountsAddresses#path_account_sid}
  */
  readonly pathAccountSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_addresses#postal_code ApiAccountsAddresses#postal_code}
  */
  readonly postalCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_addresses#region ApiAccountsAddresses#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_addresses#street ApiAccountsAddresses#street}
  */
  readonly street: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_addresses#street_secondary ApiAccountsAddresses#street_secondary}
  */
  readonly streetSecondary?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_addresses twilio_api_accounts_addresses}
*/
export class ApiAccountsAddresses extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_api_accounts_addresses";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiAccountsAddresses resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiAccountsAddresses to import
  * @param importFromId The id of the existing ApiAccountsAddresses that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_addresses#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiAccountsAddresses to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_api_accounts_addresses", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_addresses twilio_api_accounts_addresses} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiAccountsAddressesConfig
  */
  public constructor(scope: Construct, id: string, config: ApiAccountsAddressesConfig) {
    super(scope, id, {
      terraformResourceType: 'twilio_api_accounts_addresses',
      terraformGeneratorMetadata: {
        providerName: 'twilio',
        providerVersion: '0.18.46',
        providerVersionConstraint: '0.18.46'
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
    this._customerName = config.customerName;
    this._emergencyEnabled = config.emergencyEnabled;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._isoCountry = config.isoCountry;
    this._pathAccountSid = config.pathAccountSid;
    this._postalCode = config.postalCode;
    this._region = config.region;
    this._street = config.street;
    this._streetSecondary = config.streetSecondary;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_correct_address - computed: true, optional: true, required: false
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

  // customer_name - computed: false, optional: false, required: true
  private _customerName?: string; 
  public get customerName() {
    return this.getStringAttribute('customer_name');
  }
  public set customerName(value: string) {
    this._customerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerNameInput() {
    return this._customerName;
  }

  // emergency_enabled - computed: true, optional: true, required: false
  private _emergencyEnabled?: boolean | cdktf.IResolvable; 
  public get emergencyEnabled() {
    return this.getBooleanAttribute('emergency_enabled');
  }
  public set emergencyEnabled(value: boolean | cdktf.IResolvable) {
    this._emergencyEnabled = value;
  }
  public resetEmergencyEnabled() {
    this._emergencyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emergencyEnabledInput() {
    return this._emergencyEnabled;
  }

  // friendly_name - computed: true, optional: true, required: false
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
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

  // iso_country - computed: false, optional: false, required: true
  private _isoCountry?: string; 
  public get isoCountry() {
    return this.getStringAttribute('iso_country');
  }
  public set isoCountry(value: string) {
    this._isoCountry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isoCountryInput() {
    return this._isoCountry;
  }

  // path_account_sid - computed: true, optional: true, required: false
  private _pathAccountSid?: string; 
  public get pathAccountSid() {
    return this.getStringAttribute('path_account_sid');
  }
  public set pathAccountSid(value: string) {
    this._pathAccountSid = value;
  }
  public resetPathAccountSid() {
    this._pathAccountSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathAccountSidInput() {
    return this._pathAccountSid;
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

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
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

  // street_secondary - computed: true, optional: true, required: false
  private _streetSecondary?: string; 
  public get streetSecondary() {
    return this.getStringAttribute('street_secondary');
  }
  public set streetSecondary(value: string) {
    this._streetSecondary = value;
  }
  public resetStreetSecondary() {
    this._streetSecondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streetSecondaryInput() {
    return this._streetSecondary;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_correct_address: cdktf.booleanToTerraform(this._autoCorrectAddress),
      city: cdktf.stringToTerraform(this._city),
      customer_name: cdktf.stringToTerraform(this._customerName),
      emergency_enabled: cdktf.booleanToTerraform(this._emergencyEnabled),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      iso_country: cdktf.stringToTerraform(this._isoCountry),
      path_account_sid: cdktf.stringToTerraform(this._pathAccountSid),
      postal_code: cdktf.stringToTerraform(this._postalCode),
      region: cdktf.stringToTerraform(this._region),
      street: cdktf.stringToTerraform(this._street),
      street_secondary: cdktf.stringToTerraform(this._streetSecondary),
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
      customer_name: {
        value: cdktf.stringToHclTerraform(this._customerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      emergency_enabled: {
        value: cdktf.booleanToHclTerraform(this._emergencyEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      friendly_name: {
        value: cdktf.stringToHclTerraform(this._friendlyName),
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
      iso_country: {
        value: cdktf.stringToHclTerraform(this._isoCountry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path_account_sid: {
        value: cdktf.stringToHclTerraform(this._pathAccountSid),
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
      street_secondary: {
        value: cdktf.stringToHclTerraform(this._streetSecondary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
