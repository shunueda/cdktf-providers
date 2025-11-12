// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_incoming_phone_numbers_assigned_add_ons
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiAccountsIncomingPhoneNumbersAssignedAddOnsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_incoming_phone_numbers_assigned_add_ons#id ApiAccountsIncomingPhoneNumbersAssignedAddOns#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_incoming_phone_numbers_assigned_add_ons#installed_add_on_sid ApiAccountsIncomingPhoneNumbersAssignedAddOns#installed_add_on_sid}
  */
  readonly installedAddOnSid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_incoming_phone_numbers_assigned_add_ons#path_account_sid ApiAccountsIncomingPhoneNumbersAssignedAddOns#path_account_sid}
  */
  readonly pathAccountSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_incoming_phone_numbers_assigned_add_ons#resource_sid ApiAccountsIncomingPhoneNumbersAssignedAddOns#resource_sid}
  */
  readonly resourceSid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_incoming_phone_numbers_assigned_add_ons twilio_api_accounts_incoming_phone_numbers_assigned_add_ons}
*/
export class ApiAccountsIncomingPhoneNumbersAssignedAddOns extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_api_accounts_incoming_phone_numbers_assigned_add_ons";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiAccountsIncomingPhoneNumbersAssignedAddOns resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiAccountsIncomingPhoneNumbersAssignedAddOns to import
  * @param importFromId The id of the existing ApiAccountsIncomingPhoneNumbersAssignedAddOns that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_incoming_phone_numbers_assigned_add_ons#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiAccountsIncomingPhoneNumbersAssignedAddOns to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_api_accounts_incoming_phone_numbers_assigned_add_ons", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_incoming_phone_numbers_assigned_add_ons twilio_api_accounts_incoming_phone_numbers_assigned_add_ons} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiAccountsIncomingPhoneNumbersAssignedAddOnsConfig
  */
  public constructor(scope: Construct, id: string, config: ApiAccountsIncomingPhoneNumbersAssignedAddOnsConfig) {
    super(scope, id, {
      terraformResourceType: 'twilio_api_accounts_incoming_phone_numbers_assigned_add_ons',
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
    this._id = config.id;
    this._installedAddOnSid = config.installedAddOnSid;
    this._pathAccountSid = config.pathAccountSid;
    this._resourceSid = config.resourceSid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // installed_add_on_sid - computed: false, optional: false, required: true
  private _installedAddOnSid?: string; 
  public get installedAddOnSid() {
    return this.getStringAttribute('installed_add_on_sid');
  }
  public set installedAddOnSid(value: string) {
    this._installedAddOnSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get installedAddOnSidInput() {
    return this._installedAddOnSid;
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

  // resource_sid - computed: false, optional: false, required: true
  private _resourceSid?: string; 
  public get resourceSid() {
    return this.getStringAttribute('resource_sid');
  }
  public set resourceSid(value: string) {
    this._resourceSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSidInput() {
    return this._resourceSid;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      installed_add_on_sid: cdktf.stringToTerraform(this._installedAddOnSid),
      path_account_sid: cdktf.stringToTerraform(this._pathAccountSid),
      resource_sid: cdktf.stringToTerraform(this._resourceSid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      installed_add_on_sid: {
        value: cdktf.stringToHclTerraform(this._installedAddOnSid),
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
      resource_sid: {
        value: cdktf.stringToHclTerraform(this._resourceSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
