// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/credentials_snmpv3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CredentialsSnmpv3Config extends cdktf.TerraformMetaArguments {
  /**
  * Authentication password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/credentials_snmpv3#auth_password CredentialsSnmpv3#auth_password}
  */
  readonly authPassword?: string;
  /**
  * Authentication type
  *   - Choices: `SHA`, `MD5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/credentials_snmpv3#auth_type CredentialsSnmpv3#auth_type}
  */
  readonly authType?: string;
  /**
  * The description of the SNMPv3 credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/credentials_snmpv3#description CredentialsSnmpv3#description}
  */
  readonly description: string;
  /**
  * Privacy password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/credentials_snmpv3#privacy_password CredentialsSnmpv3#privacy_password}
  */
  readonly privacyPassword?: string;
  /**
  * Privacy type
  *   - Choices: `AES128`, `AES192`, `AES256`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/credentials_snmpv3#privacy_type CredentialsSnmpv3#privacy_type}
  */
  readonly privacyType?: string;
  /**
  * SNMP mode
  *   - Choices: `AUTHPRIV`, `AUTHNOPRIV`, `NOAUTHNOPRIV`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/credentials_snmpv3#snmp_mode CredentialsSnmpv3#snmp_mode}
  */
  readonly snmpMode: string;
  /**
  * Username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/credentials_snmpv3#username CredentialsSnmpv3#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/credentials_snmpv3 catalystcenter_credentials_snmpv3}
*/
export class CredentialsSnmpv3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_credentials_snmpv3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CredentialsSnmpv3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CredentialsSnmpv3 to import
  * @param importFromId The id of the existing CredentialsSnmpv3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/credentials_snmpv3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CredentialsSnmpv3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_credentials_snmpv3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/credentials_snmpv3 catalystcenter_credentials_snmpv3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CredentialsSnmpv3Config
  */
  public constructor(scope: Construct, id: string, config: CredentialsSnmpv3Config) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_credentials_snmpv3',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.3',
        providerVersionConstraint: '0.4.3'
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
    this._authType = config.authType;
    this._description = config.description;
    this._privacyPassword = config.privacyPassword;
    this._privacyType = config.privacyType;
    this._snmpMode = config.snmpMode;
    this._username = config.username;
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

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // privacy_type - computed: false, optional: true, required: false
  private _privacyType?: string; 
  public get privacyType() {
    return this.getStringAttribute('privacy_type');
  }
  public set privacyType(value: string) {
    this._privacyType = value;
  }
  public resetPrivacyType() {
    this._privacyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyTypeInput() {
    return this._privacyType;
  }

  // snmp_mode - computed: false, optional: false, required: true
  private _snmpMode?: string; 
  public get snmpMode() {
    return this.getStringAttribute('snmp_mode');
  }
  public set snmpMode(value: string) {
    this._snmpMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpModeInput() {
    return this._snmpMode;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_password: cdktf.stringToTerraform(this._authPassword),
      auth_type: cdktf.stringToTerraform(this._authType),
      description: cdktf.stringToTerraform(this._description),
      privacy_password: cdktf.stringToTerraform(this._privacyPassword),
      privacy_type: cdktf.stringToTerraform(this._privacyType),
      snmp_mode: cdktf.stringToTerraform(this._snmpMode),
      username: cdktf.stringToTerraform(this._username),
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
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      privacy_type: {
        value: cdktf.stringToHclTerraform(this._privacyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp_mode: {
        value: cdktf.stringToHclTerraform(this._snmpMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
