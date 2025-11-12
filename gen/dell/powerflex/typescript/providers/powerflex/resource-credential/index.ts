// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/resource_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * Resource Credential domain, used by types OSUser, ElementManager and vCenterCredential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/resource_credential#domain ResourceCredential#domain}
  */
  readonly domain?: string;
  /**
  * Resource Credential key_pair_name, can be used by types Node, Switch, OSAdminCrednetial and OSUserCredential. Is Required if ssh_private_key is set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/resource_credential#key_pair_name ResourceCredential#key_pair_name}
  */
  readonly keyPairName?: string;
  /**
  * Resource Credential name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/resource_credential#name ResourceCredential#name}
  */
  readonly name: string;
  /**
  * Resource Credential os_password, used by types PowerflexGateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/resource_credential#os_password ResourceCredential#os_password}
  */
  readonly osPassword?: string;
  /**
  * Resource Credential os_username, used by types PowerflexGateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/resource_credential#os_username ResourceCredential#os_username}
  */
  readonly osUsername?: string;
  /**
  * Resource Credential password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/resource_credential#password ResourceCredential#password}
  */
  readonly password: string;
  /**
  * Resource Credential snmp_v2_community_string, used by types Node, Switch and ElementManager. If unset it will default to public
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/resource_credential#snmp_v2_community_string ResourceCredential#snmp_v2_community_string}
  */
  readonly snmpV2CommunityString?: string;
  /**
  * Resource Credential snmp_v3_des_authentication_password, used by types Node when snmp_v3_security_level is set to Maximal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/resource_credential#snmp_v3_des_authentication_password ResourceCredential#snmp_v3_des_authentication_password}
  */
  readonly snmpV3DesAuthenticationPassword?: string;
  /**
  * Resource Credential snmp_v3_md5_authentication_password, used by types Node when snmp_v3_security_level is set to Moderate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/resource_credential#snmp_v3_md5_authentication_password ResourceCredential#snmp_v3_md5_authentication_password}
  */
  readonly snmpV3Md5AuthenticationPassword?: string;
  /**
  * Resource Credential snmp_v3_security_level, used by types Node. Minimal requires only snmp_v3_security_name, Moderate requires snmp_v3_security_name and snmp_v3_md5_authentication_password, Maximal requires snmp_v3_security_name, snmp_v3_md5_authentication_password and snmp_v3_des_authentication_password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/resource_credential#snmp_v3_security_level ResourceCredential#snmp_v3_security_level}
  */
  readonly snmpV3SecurityLevel?: string;
  /**
  * Resource Credential snmp_v3_security_name, used by types Node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/resource_credential#snmp_v3_security_name ResourceCredential#snmp_v3_security_name}
  */
  readonly snmpV3SecurityName?: string;
  /**
  * Resource Credential ssh_private_key, can be used by types Node, Switch, OSAdminCrednetial and OSUserCredential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/resource_credential#ssh_private_key ResourceCredential#ssh_private_key}
  */
  readonly sshPrivateKey?: string;
  /**
  * Resource Credential type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/resource_credential#type ResourceCredential#type}
  */
  readonly type: string;
  /**
  * Resource Credential username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/resource_credential#username ResourceCredential#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/resource_credential powerflex_resource_credential}
*/
export class ResourceCredential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_resource_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResourceCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourceCredential to import
  * @param importFromId The id of the existing ResourceCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/resource_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourceCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_resource_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/resource_credential powerflex_resource_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'powerflex_resource_credential',
      terraformGeneratorMetadata: {
        providerName: 'powerflex',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
    this._keyPairName = config.keyPairName;
    this._name = config.name;
    this._osPassword = config.osPassword;
    this._osUsername = config.osUsername;
    this._password = config.password;
    this._snmpV2CommunityString = config.snmpV2CommunityString;
    this._snmpV3DesAuthenticationPassword = config.snmpV3DesAuthenticationPassword;
    this._snmpV3Md5AuthenticationPassword = config.snmpV3Md5AuthenticationPassword;
    this._snmpV3SecurityLevel = config.snmpV3SecurityLevel;
    this._snmpV3SecurityName = config.snmpV3SecurityName;
    this._sshPrivateKey = config.sshPrivateKey;
    this._type = config.type;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_pair_name - computed: false, optional: true, required: false
  private _keyPairName?: string; 
  public get keyPairName() {
    return this.getStringAttribute('key_pair_name');
  }
  public set keyPairName(value: string) {
    this._keyPairName = value;
  }
  public resetKeyPairName() {
    this._keyPairName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPairNameInput() {
    return this._keyPairName;
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

  // os_password - computed: false, optional: true, required: false
  private _osPassword?: string; 
  public get osPassword() {
    return this.getStringAttribute('os_password');
  }
  public set osPassword(value: string) {
    this._osPassword = value;
  }
  public resetOsPassword() {
    this._osPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osPasswordInput() {
    return this._osPassword;
  }

  // os_username - computed: false, optional: true, required: false
  private _osUsername?: string; 
  public get osUsername() {
    return this.getStringAttribute('os_username');
  }
  public set osUsername(value: string) {
    this._osUsername = value;
  }
  public resetOsUsername() {
    this._osUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osUsernameInput() {
    return this._osUsername;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // snmp_v2_community_string - computed: false, optional: true, required: false
  private _snmpV2CommunityString?: string; 
  public get snmpV2CommunityString() {
    return this.getStringAttribute('snmp_v2_community_string');
  }
  public set snmpV2CommunityString(value: string) {
    this._snmpV2CommunityString = value;
  }
  public resetSnmpV2CommunityString() {
    this._snmpV2CommunityString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpV2CommunityStringInput() {
    return this._snmpV2CommunityString;
  }

  // snmp_v3_des_authentication_password - computed: false, optional: true, required: false
  private _snmpV3DesAuthenticationPassword?: string; 
  public get snmpV3DesAuthenticationPassword() {
    return this.getStringAttribute('snmp_v3_des_authentication_password');
  }
  public set snmpV3DesAuthenticationPassword(value: string) {
    this._snmpV3DesAuthenticationPassword = value;
  }
  public resetSnmpV3DesAuthenticationPassword() {
    this._snmpV3DesAuthenticationPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpV3DesAuthenticationPasswordInput() {
    return this._snmpV3DesAuthenticationPassword;
  }

  // snmp_v3_md5_authentication_password - computed: false, optional: true, required: false
  private _snmpV3Md5AuthenticationPassword?: string; 
  public get snmpV3Md5AuthenticationPassword() {
    return this.getStringAttribute('snmp_v3_md5_authentication_password');
  }
  public set snmpV3Md5AuthenticationPassword(value: string) {
    this._snmpV3Md5AuthenticationPassword = value;
  }
  public resetSnmpV3Md5AuthenticationPassword() {
    this._snmpV3Md5AuthenticationPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpV3Md5AuthenticationPasswordInput() {
    return this._snmpV3Md5AuthenticationPassword;
  }

  // snmp_v3_security_level - computed: false, optional: true, required: false
  private _snmpV3SecurityLevel?: string; 
  public get snmpV3SecurityLevel() {
    return this.getStringAttribute('snmp_v3_security_level');
  }
  public set snmpV3SecurityLevel(value: string) {
    this._snmpV3SecurityLevel = value;
  }
  public resetSnmpV3SecurityLevel() {
    this._snmpV3SecurityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpV3SecurityLevelInput() {
    return this._snmpV3SecurityLevel;
  }

  // snmp_v3_security_name - computed: false, optional: true, required: false
  private _snmpV3SecurityName?: string; 
  public get snmpV3SecurityName() {
    return this.getStringAttribute('snmp_v3_security_name');
  }
  public set snmpV3SecurityName(value: string) {
    this._snmpV3SecurityName = value;
  }
  public resetSnmpV3SecurityName() {
    this._snmpV3SecurityName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpV3SecurityNameInput() {
    return this._snmpV3SecurityName;
  }

  // ssh_private_key - computed: false, optional: true, required: false
  private _sshPrivateKey?: string; 
  public get sshPrivateKey() {
    return this.getStringAttribute('ssh_private_key');
  }
  public set sshPrivateKey(value: string) {
    this._sshPrivateKey = value;
  }
  public resetSshPrivateKey() {
    this._sshPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPrivateKeyInput() {
    return this._sshPrivateKey;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_date - computed: true, optional: false, required: false
  public get updatedDate() {
    return this.getStringAttribute('updated_date');
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
      domain: cdktf.stringToTerraform(this._domain),
      key_pair_name: cdktf.stringToTerraform(this._keyPairName),
      name: cdktf.stringToTerraform(this._name),
      os_password: cdktf.stringToTerraform(this._osPassword),
      os_username: cdktf.stringToTerraform(this._osUsername),
      password: cdktf.stringToTerraform(this._password),
      snmp_v2_community_string: cdktf.stringToTerraform(this._snmpV2CommunityString),
      snmp_v3_des_authentication_password: cdktf.stringToTerraform(this._snmpV3DesAuthenticationPassword),
      snmp_v3_md5_authentication_password: cdktf.stringToTerraform(this._snmpV3Md5AuthenticationPassword),
      snmp_v3_security_level: cdktf.stringToTerraform(this._snmpV3SecurityLevel),
      snmp_v3_security_name: cdktf.stringToTerraform(this._snmpV3SecurityName),
      ssh_private_key: cdktf.stringToTerraform(this._sshPrivateKey),
      type: cdktf.stringToTerraform(this._type),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_pair_name: {
        value: cdktf.stringToHclTerraform(this._keyPairName),
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
      os_password: {
        value: cdktf.stringToHclTerraform(this._osPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_username: {
        value: cdktf.stringToHclTerraform(this._osUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp_v2_community_string: {
        value: cdktf.stringToHclTerraform(this._snmpV2CommunityString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp_v3_des_authentication_password: {
        value: cdktf.stringToHclTerraform(this._snmpV3DesAuthenticationPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp_v3_md5_authentication_password: {
        value: cdktf.stringToHclTerraform(this._snmpV3Md5AuthenticationPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp_v3_security_level: {
        value: cdktf.stringToHclTerraform(this._snmpV3SecurityLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp_v3_security_name: {
        value: cdktf.stringToHclTerraform(this._snmpV3SecurityName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_private_key: {
        value: cdktf.stringToHclTerraform(this._sshPrivateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
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
