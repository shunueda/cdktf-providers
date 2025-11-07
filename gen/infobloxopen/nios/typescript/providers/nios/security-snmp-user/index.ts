// https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/security_snmp_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecuritySnmpUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Determines an authentication password for the user. This is a write-only attribute. Must be between 8 and 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/security_snmp_user#authentication_password SecuritySnmpUser#authentication_password}
  */
  readonly authenticationPassword?: string;
  /**
  * The authentication protocol to be used for this user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/security_snmp_user#authentication_protocol SecuritySnmpUser#authentication_protocol}
  */
  readonly authenticationProtocol: string;
  /**
  * A descriptive comment for the SNMPv3 User.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/security_snmp_user#comment SecuritySnmpUser#comment}
  */
  readonly comment?: string;
  /**
  * Determines if SNMPv3 user is disabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/security_snmp_user#disable SecuritySnmpUser#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Extensible attributes associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/security_snmp_user#extattrs SecuritySnmpUser#extattrs}
  */
  readonly extattrs?: { [key: string]: string };
  /**
  * The name of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/security_snmp_user#name SecuritySnmpUser#name}
  */
  readonly name: string;
  /**
  * Determines a password for the privacy protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/security_snmp_user#privacy_password SecuritySnmpUser#privacy_password}
  */
  readonly privacyPassword?: string;
  /**
  * The privacy protocol to be used for this user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/security_snmp_user#privacy_protocol SecuritySnmpUser#privacy_protocol}
  */
  readonly privacyProtocol: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/security_snmp_user nios_security_snmp_user}
*/
export class SecuritySnmpUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_security_snmp_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecuritySnmpUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecuritySnmpUser to import
  * @param importFromId The id of the existing SecuritySnmpUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/security_snmp_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecuritySnmpUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_security_snmp_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/security_snmp_user nios_security_snmp_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecuritySnmpUserConfig
  */
  public constructor(scope: Construct, id: string, config: SecuritySnmpUserConfig) {
    super(scope, id, {
      terraformResourceType: 'nios_security_snmp_user',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationPassword = config.authenticationPassword;
    this._authenticationProtocol = config.authenticationProtocol;
    this._comment = config.comment;
    this._disable = config.disable;
    this._extattrs = config.extattrs;
    this._name = config.name;
    this._privacyPassword = config.privacyPassword;
    this._privacyProtocol = config.privacyProtocol;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_password - computed: false, optional: true, required: false
  private _authenticationPassword?: string; 
  public get authenticationPassword() {
    return this.getStringAttribute('authentication_password');
  }
  public set authenticationPassword(value: string) {
    this._authenticationPassword = value;
  }
  public resetAuthenticationPassword() {
    this._authenticationPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationPasswordInput() {
    return this._authenticationPassword;
  }

  // authentication_protocol - computed: false, optional: false, required: true
  private _authenticationProtocol?: string; 
  public get authenticationProtocol() {
    return this.getStringAttribute('authentication_protocol');
  }
  public set authenticationProtocol(value: string) {
    this._authenticationProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationProtocolInput() {
    return this._authenticationProtocol;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // disable - computed: true, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // extattrs - computed: true, optional: true, required: false
  private _extattrs?: { [key: string]: string }; 
  public get extattrs() {
    return this.getStringMapAttribute('extattrs');
  }
  public set extattrs(value: { [key: string]: string }) {
    this._extattrs = value;
  }
  public resetExtattrs() {
    this._extattrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extattrsInput() {
    return this._extattrs;
  }

  // extattrs_all - computed: true, optional: false, required: false
  private _extattrsAll = new cdktf.StringMap(this, "extattrs_all");
  public get extattrsAll() {
    return this._extattrsAll;
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

  // privacy_protocol - computed: false, optional: false, required: true
  private _privacyProtocol?: string; 
  public get privacyProtocol() {
    return this.getStringAttribute('privacy_protocol');
  }
  public set privacyProtocol(value: string) {
    this._privacyProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyProtocolInput() {
    return this._privacyProtocol;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_password: cdktf.stringToTerraform(this._authenticationPassword),
      authentication_protocol: cdktf.stringToTerraform(this._authenticationProtocol),
      comment: cdktf.stringToTerraform(this._comment),
      disable: cdktf.booleanToTerraform(this._disable),
      extattrs: cdktf.hashMapper(cdktf.stringToTerraform)(this._extattrs),
      name: cdktf.stringToTerraform(this._name),
      privacy_password: cdktf.stringToTerraform(this._privacyPassword),
      privacy_protocol: cdktf.stringToTerraform(this._privacyProtocol),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_password: {
        value: cdktf.stringToHclTerraform(this._authenticationPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_protocol: {
        value: cdktf.stringToHclTerraform(this._authenticationProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      extattrs: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extattrs),
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
      privacy_password: {
        value: cdktf.stringToHclTerraform(this._privacyPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privacy_protocol: {
        value: cdktf.stringToHclTerraform(this._privacyProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
