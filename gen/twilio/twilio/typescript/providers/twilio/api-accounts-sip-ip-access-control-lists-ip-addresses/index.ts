// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_sip_ip_access_control_lists_ip_addresses
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiAccountsSipIpAccessControlListsIpAddressesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_sip_ip_access_control_lists_ip_addresses#cidr_prefix_length ApiAccountsSipIpAccessControlListsIpAddresses#cidr_prefix_length}
  */
  readonly cidrPrefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_sip_ip_access_control_lists_ip_addresses#friendly_name ApiAccountsSipIpAccessControlListsIpAddresses#friendly_name}
  */
  readonly friendlyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_sip_ip_access_control_lists_ip_addresses#id ApiAccountsSipIpAccessControlListsIpAddresses#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_sip_ip_access_control_lists_ip_addresses#ip_access_control_list_sid ApiAccountsSipIpAccessControlListsIpAddresses#ip_access_control_list_sid}
  */
  readonly ipAccessControlListSid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_sip_ip_access_control_lists_ip_addresses#ip_address ApiAccountsSipIpAccessControlListsIpAddresses#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_sip_ip_access_control_lists_ip_addresses#path_account_sid ApiAccountsSipIpAccessControlListsIpAddresses#path_account_sid}
  */
  readonly pathAccountSid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_sip_ip_access_control_lists_ip_addresses twilio_api_accounts_sip_ip_access_control_lists_ip_addresses}
*/
export class ApiAccountsSipIpAccessControlListsIpAddresses extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_api_accounts_sip_ip_access_control_lists_ip_addresses";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiAccountsSipIpAccessControlListsIpAddresses resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiAccountsSipIpAccessControlListsIpAddresses to import
  * @param importFromId The id of the existing ApiAccountsSipIpAccessControlListsIpAddresses that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_sip_ip_access_control_lists_ip_addresses#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiAccountsSipIpAccessControlListsIpAddresses to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_api_accounts_sip_ip_access_control_lists_ip_addresses", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/api_accounts_sip_ip_access_control_lists_ip_addresses twilio_api_accounts_sip_ip_access_control_lists_ip_addresses} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiAccountsSipIpAccessControlListsIpAddressesConfig
  */
  public constructor(scope: Construct, id: string, config: ApiAccountsSipIpAccessControlListsIpAddressesConfig) {
    super(scope, id, {
      terraformResourceType: 'twilio_api_accounts_sip_ip_access_control_lists_ip_addresses',
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
    this._cidrPrefixLength = config.cidrPrefixLength;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._ipAccessControlListSid = config.ipAccessControlListSid;
    this._ipAddress = config.ipAddress;
    this._pathAccountSid = config.pathAccountSid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr_prefix_length - computed: true, optional: true, required: false
  private _cidrPrefixLength?: number; 
  public get cidrPrefixLength() {
    return this.getNumberAttribute('cidr_prefix_length');
  }
  public set cidrPrefixLength(value: number) {
    this._cidrPrefixLength = value;
  }
  public resetCidrPrefixLength() {
    this._cidrPrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrPrefixLengthInput() {
    return this._cidrPrefixLength;
  }

  // friendly_name - computed: false, optional: false, required: true
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
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

  // ip_access_control_list_sid - computed: false, optional: false, required: true
  private _ipAccessControlListSid?: string; 
  public get ipAccessControlListSid() {
    return this.getStringAttribute('ip_access_control_list_sid');
  }
  public set ipAccessControlListSid(value: string) {
    this._ipAccessControlListSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAccessControlListSidInput() {
    return this._ipAccessControlListSid;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
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

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cidr_prefix_length: cdktf.numberToTerraform(this._cidrPrefixLength),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      ip_access_control_list_sid: cdktf.stringToTerraform(this._ipAccessControlListSid),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      path_account_sid: cdktf.stringToTerraform(this._pathAccountSid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cidr_prefix_length: {
        value: cdktf.numberToHclTerraform(this._cidrPrefixLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      ip_access_control_list_sid: {
        value: cdktf.stringToHclTerraform(this._ipAccessControlListSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
