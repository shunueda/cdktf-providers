// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_snmp_traps
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SysSnmpTrapsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Encrypted password 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_snmp_traps#auth_passwordencrypted SysSnmpTraps#auth_passwordencrypted}
  */
  readonly authPasswordencrypted?: string;
  /**
  * Specifies the protocol used to authenticate the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_snmp_traps#auth_protocol SysSnmpTraps#auth_protocol}
  */
  readonly authProtocol?: string;
  /**
  * Specifies the community string used for this trap. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_snmp_traps#community SysSnmpTraps#community}
  */
  readonly community?: string;
  /**
  * User defined description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_snmp_traps#description SysSnmpTraps#description}
  */
  readonly description?: string;
  /**
  * Specifies the authoritative security engine for SNMPv3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_snmp_traps#engine_id SysSnmpTraps#engine_id}
  */
  readonly engineId?: string;
  /**
  * The host the trap will be sent to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_snmp_traps#host SysSnmpTraps#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_snmp_traps#id SysSnmpTraps#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_snmp_traps#name SysSnmpTraps#name}
  */
  readonly name?: string;
  /**
  * The port that the trap will be sent to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_snmp_traps#port SysSnmpTraps#port}
  */
  readonly port?: number;
  /**
  * Specifies the clear text password used to encrypt traffic. This field will not be displayed. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_snmp_traps#privacy_password SysSnmpTraps#privacy_password}
  */
  readonly privacyPassword?: string;
  /**
  * Specifies the encrypted password used to encrypt traffic. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_snmp_traps#privacy_password_encrypted SysSnmpTraps#privacy_password_encrypted}
  */
  readonly privacyPasswordEncrypted?: string;
  /**
  * Specifies the protocol used to encrypt traffic. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_snmp_traps#privacy_protocol SysSnmpTraps#privacy_protocol}
  */
  readonly privacyProtocol?: string;
  /**
  * Specifies whether or not traffic is encrypted and whether or not authentication is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_snmp_traps#security_level SysSnmpTraps#security_level}
  */
  readonly securityLevel?: string;
  /**
  * Security name used in conjunction with SNMPv3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_snmp_traps#security_name SysSnmpTraps#security_name}
  */
  readonly securityName?: string;
  /**
  * SNMP version used for sending the trap. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_snmp_traps#version SysSnmpTraps#version}
  */
  readonly version?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_snmp_traps bigip_sys_snmp_traps}
*/
export class SysSnmpTraps extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_sys_snmp_traps";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SysSnmpTraps resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SysSnmpTraps to import
  * @param importFromId The id of the existing SysSnmpTraps that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_snmp_traps#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SysSnmpTraps to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_sys_snmp_traps", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_snmp_traps bigip_sys_snmp_traps} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SysSnmpTrapsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SysSnmpTrapsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'bigip_sys_snmp_traps',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1',
        providerVersionConstraint: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authPasswordencrypted = config.authPasswordencrypted;
    this._authProtocol = config.authProtocol;
    this._community = config.community;
    this._description = config.description;
    this._engineId = config.engineId;
    this._host = config.host;
    this._id = config.id;
    this._name = config.name;
    this._port = config.port;
    this._privacyPassword = config.privacyPassword;
    this._privacyPasswordEncrypted = config.privacyPasswordEncrypted;
    this._privacyProtocol = config.privacyProtocol;
    this._securityLevel = config.securityLevel;
    this._securityName = config.securityName;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_passwordencrypted - computed: false, optional: true, required: false
  private _authPasswordencrypted?: string; 
  public get authPasswordencrypted() {
    return this.getStringAttribute('auth_passwordencrypted');
  }
  public set authPasswordencrypted(value: string) {
    this._authPasswordencrypted = value;
  }
  public resetAuthPasswordencrypted() {
    this._authPasswordencrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPasswordencryptedInput() {
    return this._authPasswordencrypted;
  }

  // auth_protocol - computed: false, optional: true, required: false
  private _authProtocol?: string; 
  public get authProtocol() {
    return this.getStringAttribute('auth_protocol');
  }
  public set authProtocol(value: string) {
    this._authProtocol = value;
  }
  public resetAuthProtocol() {
    this._authProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authProtocolInput() {
    return this._authProtocol;
  }

  // community - computed: false, optional: true, required: false
  private _community?: string; 
  public get community() {
    return this.getStringAttribute('community');
  }
  public set community(value: string) {
    this._community = value;
  }
  public resetCommunity() {
    this._community = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityInput() {
    return this._community;
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

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // privacy_password_encrypted - computed: false, optional: true, required: false
  private _privacyPasswordEncrypted?: string; 
  public get privacyPasswordEncrypted() {
    return this.getStringAttribute('privacy_password_encrypted');
  }
  public set privacyPasswordEncrypted(value: string) {
    this._privacyPasswordEncrypted = value;
  }
  public resetPrivacyPasswordEncrypted() {
    this._privacyPasswordEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyPasswordEncryptedInput() {
    return this._privacyPasswordEncrypted;
  }

  // privacy_protocol - computed: false, optional: true, required: false
  private _privacyProtocol?: string; 
  public get privacyProtocol() {
    return this.getStringAttribute('privacy_protocol');
  }
  public set privacyProtocol(value: string) {
    this._privacyProtocol = value;
  }
  public resetPrivacyProtocol() {
    this._privacyProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyProtocolInput() {
    return this._privacyProtocol;
  }

  // security_level - computed: true, optional: true, required: false
  private _securityLevel?: string; 
  public get securityLevel() {
    return this.getStringAttribute('security_level');
  }
  public set securityLevel(value: string) {
    this._securityLevel = value;
  }
  public resetSecurityLevel() {
    this._securityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityLevelInput() {
    return this._securityLevel;
  }

  // security_name - computed: false, optional: true, required: false
  private _securityName?: string; 
  public get securityName() {
    return this.getStringAttribute('security_name');
  }
  public set securityName(value: string) {
    this._securityName = value;
  }
  public resetSecurityName() {
    this._securityName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityNameInput() {
    return this._securityName;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_passwordencrypted: cdktf.stringToTerraform(this._authPasswordencrypted),
      auth_protocol: cdktf.stringToTerraform(this._authProtocol),
      community: cdktf.stringToTerraform(this._community),
      description: cdktf.stringToTerraform(this._description),
      engine_id: cdktf.stringToTerraform(this._engineId),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      privacy_password: cdktf.stringToTerraform(this._privacyPassword),
      privacy_password_encrypted: cdktf.stringToTerraform(this._privacyPasswordEncrypted),
      privacy_protocol: cdktf.stringToTerraform(this._privacyProtocol),
      security_level: cdktf.stringToTerraform(this._securityLevel),
      security_name: cdktf.stringToTerraform(this._securityName),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_passwordencrypted: {
        value: cdktf.stringToHclTerraform(this._authPasswordencrypted),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_protocol: {
        value: cdktf.stringToHclTerraform(this._authProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      community: {
        value: cdktf.stringToHclTerraform(this._community),
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
      engine_id: {
        value: cdktf.stringToHclTerraform(this._engineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      privacy_password: {
        value: cdktf.stringToHclTerraform(this._privacyPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privacy_password_encrypted: {
        value: cdktf.stringToHclTerraform(this._privacyPasswordEncrypted),
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
      security_level: {
        value: cdktf.stringToHclTerraform(this._securityLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_name: {
        value: cdktf.stringToHclTerraform(this._securityName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
