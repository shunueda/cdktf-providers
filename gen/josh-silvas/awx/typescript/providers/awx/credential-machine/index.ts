// https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/credential_machine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CredentialMachineConfig extends cdktf.TerraformMetaArguments {
  /**
  * The become method for the credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/credential_machine#become_method CredentialMachine#become_method}
  */
  readonly becomeMethod?: string;
  /**
  * The become password for the credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/credential_machine#become_password CredentialMachine#become_password}
  */
  readonly becomePassword?: string;
  /**
  * The become username for the credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/credential_machine#become_username CredentialMachine#become_username}
  */
  readonly becomeUsername?: string;
  /**
  * The description of the credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/credential_machine#description CredentialMachine#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/credential_machine#id CredentialMachine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/credential_machine#name CredentialMachine#name}
  */
  readonly name: string;
  /**
  * The organization ID that the credential belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/credential_machine#organization_id CredentialMachine#organization_id}
  */
  readonly organizationId: number;
  /**
  * The password for the credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/credential_machine#password CredentialMachine#password}
  */
  readonly password?: string;
  /**
  * The SSH key data for the credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/credential_machine#ssh_key_data CredentialMachine#ssh_key_data}
  */
  readonly sshKeyData?: string;
  /**
  * The SSH key unlock for the credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/credential_machine#ssh_key_unlock CredentialMachine#ssh_key_unlock}
  */
  readonly sshKeyUnlock?: string;
  /**
  * The SSH public key data for the credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/credential_machine#ssh_public_key_data CredentialMachine#ssh_public_key_data}
  */
  readonly sshPublicKeyData?: string;
  /**
  * The username for the credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/credential_machine#username CredentialMachine#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/credential_machine awx_credential_machine}
*/
export class CredentialMachine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awx_credential_machine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CredentialMachine resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CredentialMachine to import
  * @param importFromId The id of the existing CredentialMachine that should be imported. Refer to the {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/credential_machine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CredentialMachine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "awx_credential_machine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/credential_machine awx_credential_machine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CredentialMachineConfig
  */
  public constructor(scope: Construct, id: string, config: CredentialMachineConfig) {
    super(scope, id, {
      terraformResourceType: 'awx_credential_machine',
      terraformGeneratorMetadata: {
        providerName: 'awx',
        providerVersion: '1.7.5',
        providerVersionConstraint: '1.7.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._becomeMethod = config.becomeMethod;
    this._becomePassword = config.becomePassword;
    this._becomeUsername = config.becomeUsername;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._organizationId = config.organizationId;
    this._password = config.password;
    this._sshKeyData = config.sshKeyData;
    this._sshKeyUnlock = config.sshKeyUnlock;
    this._sshPublicKeyData = config.sshPublicKeyData;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // become_method - computed: false, optional: true, required: false
  private _becomeMethod?: string; 
  public get becomeMethod() {
    return this.getStringAttribute('become_method');
  }
  public set becomeMethod(value: string) {
    this._becomeMethod = value;
  }
  public resetBecomeMethod() {
    this._becomeMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get becomeMethodInput() {
    return this._becomeMethod;
  }

  // become_password - computed: false, optional: true, required: false
  private _becomePassword?: string; 
  public get becomePassword() {
    return this.getStringAttribute('become_password');
  }
  public set becomePassword(value: string) {
    this._becomePassword = value;
  }
  public resetBecomePassword() {
    this._becomePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get becomePasswordInput() {
    return this._becomePassword;
  }

  // become_username - computed: false, optional: true, required: false
  private _becomeUsername?: string; 
  public get becomeUsername() {
    return this.getStringAttribute('become_username');
  }
  public set becomeUsername(value: string) {
    this._becomeUsername = value;
  }
  public resetBecomeUsername() {
    this._becomeUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get becomeUsernameInput() {
    return this._becomeUsername;
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

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: number; 
  public get organizationId() {
    return this.getNumberAttribute('organization_id');
  }
  public set organizationId(value: number) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // ssh_key_data - computed: false, optional: true, required: false
  private _sshKeyData?: string; 
  public get sshKeyData() {
    return this.getStringAttribute('ssh_key_data');
  }
  public set sshKeyData(value: string) {
    this._sshKeyData = value;
  }
  public resetSshKeyData() {
    this._sshKeyData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyDataInput() {
    return this._sshKeyData;
  }

  // ssh_key_unlock - computed: false, optional: true, required: false
  private _sshKeyUnlock?: string; 
  public get sshKeyUnlock() {
    return this.getStringAttribute('ssh_key_unlock');
  }
  public set sshKeyUnlock(value: string) {
    this._sshKeyUnlock = value;
  }
  public resetSshKeyUnlock() {
    this._sshKeyUnlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyUnlockInput() {
    return this._sshKeyUnlock;
  }

  // ssh_public_key_data - computed: false, optional: true, required: false
  private _sshPublicKeyData?: string; 
  public get sshPublicKeyData() {
    return this.getStringAttribute('ssh_public_key_data');
  }
  public set sshPublicKeyData(value: string) {
    this._sshPublicKeyData = value;
  }
  public resetSshPublicKeyData() {
    this._sshPublicKeyData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeyDataInput() {
    return this._sshPublicKeyData;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
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
      become_method: cdktf.stringToTerraform(this._becomeMethod),
      become_password: cdktf.stringToTerraform(this._becomePassword),
      become_username: cdktf.stringToTerraform(this._becomeUsername),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      organization_id: cdktf.numberToTerraform(this._organizationId),
      password: cdktf.stringToTerraform(this._password),
      ssh_key_data: cdktf.stringToTerraform(this._sshKeyData),
      ssh_key_unlock: cdktf.stringToTerraform(this._sshKeyUnlock),
      ssh_public_key_data: cdktf.stringToTerraform(this._sshPublicKeyData),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      become_method: {
        value: cdktf.stringToHclTerraform(this._becomeMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      become_password: {
        value: cdktf.stringToHclTerraform(this._becomePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      become_username: {
        value: cdktf.stringToHclTerraform(this._becomeUsername),
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
      organization_id: {
        value: cdktf.numberToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_key_data: {
        value: cdktf.stringToHclTerraform(this._sshKeyData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_key_unlock: {
        value: cdktf.stringToHclTerraform(this._sshKeyUnlock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_public_key_data: {
        value: cdktf.stringToHclTerraform(this._sshPublicKeyData),
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
