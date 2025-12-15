// https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_v3_usm_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpV3UsmUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Encrypted key used for user authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_v3_usm_user#authentication_key SnmpV3UsmUser#authentication_key}
  */
  readonly authenticationKey?: string;
  /**
  * User's authentication password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_v3_usm_user#authentication_password SnmpV3UsmUser#authentication_password}
  */
  readonly authenticationPassword?: string;
  /**
  * Define authentication type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_v3_usm_user#authentication_type SnmpV3UsmUser#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * Remote engine id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_v3_usm_user#engine_id SnmpV3UsmUser#engine_id}
  */
  readonly engineId?: string;
  /**
  * Local or remote engine user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_v3_usm_user#engine_type SnmpV3UsmUser#engine_type}
  */
  readonly engineType?: string;
  /**
  * The name of snmp v3 USM user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_v3_usm_user#name SnmpV3UsmUser#name}
  */
  readonly name: string;
  /**
  * Encrypted key used for user privacy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_v3_usm_user#privacy_key SnmpV3UsmUser#privacy_key}
  */
  readonly privacyKey?: string;
  /**
  * User's privacy password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_v3_usm_user#privacy_password SnmpV3UsmUser#privacy_password}
  */
  readonly privacyPassword?: string;
  /**
  * Define privacy type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_v3_usm_user#privacy_type SnmpV3UsmUser#privacy_type}
  */
  readonly privacyType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_v3_usm_user junos_snmp_v3_usm_user}
*/
export class SnmpV3UsmUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_snmp_v3_usm_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnmpV3UsmUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnmpV3UsmUser to import
  * @param importFromId The id of the existing SnmpV3UsmUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_v3_usm_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnmpV3UsmUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_snmp_v3_usm_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_v3_usm_user junos_snmp_v3_usm_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpV3UsmUserConfig
  */
  public constructor(scope: Construct, id: string, config: SnmpV3UsmUserConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_snmp_v3_usm_user',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.16.0',
        providerVersionConstraint: '2.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationKey = config.authenticationKey;
    this._authenticationPassword = config.authenticationPassword;
    this._authenticationType = config.authenticationType;
    this._engineId = config.engineId;
    this._engineType = config.engineType;
    this._name = config.name;
    this._privacyKey = config.privacyKey;
    this._privacyPassword = config.privacyPassword;
    this._privacyType = config.privacyType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_key - computed: false, optional: true, required: false
  private _authenticationKey?: string; 
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }
  public set authenticationKey(value: string) {
    this._authenticationKey = value;
  }
  public resetAuthenticationKey() {
    this._authenticationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyInput() {
    return this._authenticationKey;
  }

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

  // authentication_type - computed: true, optional: true, required: false
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  public resetAuthenticationType() {
    this._authenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // engine_id - computed: false, optional: true, required: false
  private _engineId?: string; 
  public get engineId() {
    return this.getStringAttribute('engine_id');
  }
  public set engineId(value: string) {
    this._engineId = value;
  }
  public resetEngineId() {
    this._engineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineIdInput() {
    return this._engineId;
  }

  // engine_type - computed: true, optional: true, required: false
  private _engineType?: string; 
  public get engineType() {
    return this.getStringAttribute('engine_type');
  }
  public set engineType(value: string) {
    this._engineType = value;
  }
  public resetEngineType() {
    this._engineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineTypeInput() {
    return this._engineType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // privacy_key - computed: false, optional: true, required: false
  private _privacyKey?: string; 
  public get privacyKey() {
    return this.getStringAttribute('privacy_key');
  }
  public set privacyKey(value: string) {
    this._privacyKey = value;
  }
  public resetPrivacyKey() {
    this._privacyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyKeyInput() {
    return this._privacyKey;
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

  // privacy_type - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_key: cdktf.stringToTerraform(this._authenticationKey),
      authentication_password: cdktf.stringToTerraform(this._authenticationPassword),
      authentication_type: cdktf.stringToTerraform(this._authenticationType),
      engine_id: cdktf.stringToTerraform(this._engineId),
      engine_type: cdktf.stringToTerraform(this._engineType),
      name: cdktf.stringToTerraform(this._name),
      privacy_key: cdktf.stringToTerraform(this._privacyKey),
      privacy_password: cdktf.stringToTerraform(this._privacyPassword),
      privacy_type: cdktf.stringToTerraform(this._privacyType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_key: {
        value: cdktf.stringToHclTerraform(this._authenticationKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_password: {
        value: cdktf.stringToHclTerraform(this._authenticationPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_type: {
        value: cdktf.stringToHclTerraform(this._authenticationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_id: {
        value: cdktf.stringToHclTerraform(this._engineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_type: {
        value: cdktf.stringToHclTerraform(this._engineType),
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
      privacy_key: {
        value: cdktf.stringToHclTerraform(this._privacyKey),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
