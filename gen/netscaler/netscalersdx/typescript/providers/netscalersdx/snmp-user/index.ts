// https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/snmp_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Authentication Password of SNMP User. Minimum length =  8 Maximum length =  32
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/snmp_user#auth_password SnmpUser#auth_password}
  */
  readonly authPassword?: string;
  /**
  * 
  * Authentication Protocol of SNMP User.
  * 	* Values:
  * 		* 0: noValue
  * 		* 1: MD5
  * 		* 2: SHA1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/snmp_user#auth_protocol SnmpUser#auth_protocol}
  */
  readonly authProtocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/snmp_user#id SnmpUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of SNMP User. Minimum length =  1 Maximum length =  32
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/snmp_user#name SnmpUser#name}
  */
  readonly name: string;
  /**
  * Privacy Password of SNMP User. Minimum length =  8 Maximum length =  32
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/snmp_user#privacy_password SnmpUser#privacy_password}
  */
  readonly privacyPassword?: string;
  /**
  * 
  * Privacy Protocol of SNMP User.
  * 	* Values: 
  * 		* 0:noValue, 
  * 		* 1: DES, 
  * 		* 2: AES.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/snmp_user#privacy_protocol SnmpUser#privacy_protocol}
  */
  readonly privacyProtocol?: number;
  /**
  * 
  * Security Level of SNMP User. 
  * 	* Values: 
  * 		* 0: noAuthNoPriv, 
  * 		* 1: authNoPriv, 
  * 		* 2: authPriv.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/snmp_user#security_level SnmpUser#security_level}
  */
  readonly securityLevel: number;
  /**
  * SNMP View Name attached to the SNMP User. Maximum length =  32
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/snmp_user#view_name SnmpUser#view_name}
  */
  readonly viewName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/snmp_user netscalersdx_snmp_user}
*/
export class SnmpUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netscalersdx_snmp_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnmpUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnmpUser to import
  * @param importFromId The id of the existing SnmpUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/snmp_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnmpUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netscalersdx_snmp_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/snmp_user netscalersdx_snmp_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpUserConfig
  */
  public constructor(scope: Construct, id: string, config: SnmpUserConfig) {
    super(scope, id, {
      terraformResourceType: 'netscalersdx_snmp_user',
      terraformGeneratorMetadata: {
        providerName: 'netscalersdx',
        providerVersion: '0.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authPassword = config.authPassword;
    this._authProtocol = config.authProtocol;
    this._id = config.id;
    this._name = config.name;
    this._privacyPassword = config.privacyPassword;
    this._privacyProtocol = config.privacyProtocol;
    this._securityLevel = config.securityLevel;
    this._viewName = config.viewName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_password - computed: false, optional: true, required: false
  private _authPassword?: string; 
  public get authPassword() {
    return this.getStringAttribute('auth_password');
  }
  public set authPassword(value: string) {
    this._authPassword = value;
  }
  public resetAuthPassword() {
    this._authPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPasswordInput() {
    return this._authPassword;
  }

  // auth_protocol - computed: true, optional: true, required: false
  private _authProtocol?: number; 
  public get authProtocol() {
    return this.getNumberAttribute('auth_protocol');
  }
  public set authProtocol(value: number) {
    this._authProtocol = value;
  }
  public resetAuthProtocol() {
    this._authProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authProtocolInput() {
    return this._authProtocol;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // privacy_password - computed: false, optional: true, required: false
  private _privacyPassword?: string; 
  public get privacyPassword() {
    return this.getStringAttribute('privacy_password');
  }
  public set privacyPassword(value: string) {
    this._privacyPassword = value;
  }
  public resetPrivacyPassword() {
    this._privacyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyPasswordInput() {
    return this._privacyPassword;
  }

  // privacy_protocol - computed: true, optional: true, required: false
  private _privacyProtocol?: number; 
  public get privacyProtocol() {
    return this.getNumberAttribute('privacy_protocol');
  }
  public set privacyProtocol(value: number) {
    this._privacyProtocol = value;
  }
  public resetPrivacyProtocol() {
    this._privacyProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyProtocolInput() {
    return this._privacyProtocol;
  }

  // security_level - computed: false, optional: false, required: true
  private _securityLevel?: number; 
  public get securityLevel() {
    return this.getNumberAttribute('security_level');
  }
  public set securityLevel(value: number) {
    this._securityLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityLevelInput() {
    return this._securityLevel;
  }

  // view_name - computed: true, optional: true, required: false
  private _viewName?: string; 
  public get viewName() {
    return this.getStringAttribute('view_name');
  }
  public set viewName(value: string) {
    this._viewName = value;
  }
  public resetViewName() {
    this._viewName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewNameInput() {
    return this._viewName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_password: cdktf.stringToTerraform(this._authPassword),
      auth_protocol: cdktf.numberToTerraform(this._authProtocol),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      privacy_password: cdktf.stringToTerraform(this._privacyPassword),
      privacy_protocol: cdktf.numberToTerraform(this._privacyProtocol),
      security_level: cdktf.numberToTerraform(this._securityLevel),
      view_name: cdktf.stringToTerraform(this._viewName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_password: {
        value: cdktf.stringToHclTerraform(this._authPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_protocol: {
        value: cdktf.numberToHclTerraform(this._authProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      privacy_password: {
        value: cdktf.stringToHclTerraform(this._privacyPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privacy_protocol: {
        value: cdktf.numberToHclTerraform(this._privacyProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_level: {
        value: cdktf.numberToHclTerraform(this._securityLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      view_name: {
        value: cdktf.stringToHclTerraform(this._viewName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
