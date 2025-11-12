// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/username
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UsernameConfig extends cdktf.TerraformMetaArguments {
  /**
  * description string with max 128 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/username#description Username#description}
  */
  readonly description?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/username#device Username#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/username#name Username#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/username#password Username#password}
  */
  readonly password?: string;
  /**
  * 
  *   - Choices: `0`, `6`, `7`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/username#password_encryption Username#password_encryption}
  */
  readonly passwordEncryption?: string;
  /**
  * Set user privilege level
  *   - Range: `0`-`15`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/username#privilege Username#privilege}
  */
  readonly privilege?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/username#secret Username#secret}
  */
  readonly secret?: string;
  /**
  * 
  *   - Choices: `0`, `5`, `8`, `9`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/username#secret_encryption Username#secret_encryption}
  */
  readonly secretEncryption?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/username iosxe_username}
*/
export class Username extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_username";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Username resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Username to import
  * @param importFromId The id of the existing Username that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/username#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Username to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_username", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/username iosxe_username} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UsernameConfig
  */
  public constructor(scope: Construct, id: string, config: UsernameConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_username',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.10.0',
        providerVersionConstraint: '0.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._device = config.device;
    this._name = config.name;
    this._password = config.password;
    this._passwordEncryption = config.passwordEncryption;
    this._privilege = config.privilege;
    this._secret = config.secret;
    this._secretEncryption = config.secretEncryption;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
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

  // password_encryption - computed: false, optional: true, required: false
  private _passwordEncryption?: string; 
  public get passwordEncryption() {
    return this.getStringAttribute('password_encryption');
  }
  public set passwordEncryption(value: string) {
    this._passwordEncryption = value;
  }
  public resetPasswordEncryption() {
    this._passwordEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordEncryptionInput() {
    return this._passwordEncryption;
  }

  // privilege - computed: false, optional: true, required: false
  private _privilege?: number; 
  public get privilege() {
    return this.getNumberAttribute('privilege');
  }
  public set privilege(value: number) {
    this._privilege = value;
  }
  public resetPrivilege() {
    this._privilege = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegeInput() {
    return this._privilege;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // secret_encryption - computed: false, optional: true, required: false
  private _secretEncryption?: string; 
  public get secretEncryption() {
    return this.getStringAttribute('secret_encryption');
  }
  public set secretEncryption(value: string) {
    this._secretEncryption = value;
  }
  public resetSecretEncryption() {
    this._secretEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncryptionInput() {
    return this._secretEncryption;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      device: cdktf.stringToTerraform(this._device),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      password_encryption: cdktf.stringToTerraform(this._passwordEncryption),
      privilege: cdktf.numberToTerraform(this._privilege),
      secret: cdktf.stringToTerraform(this._secret),
      secret_encryption: cdktf.stringToTerraform(this._secretEncryption),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_encryption: {
        value: cdktf.stringToHclTerraform(this._passwordEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privilege: {
        value: cdktf.numberToHclTerraform(this._privilege),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secret: {
        value: cdktf.stringToHclTerraform(this._secret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_encryption: {
        value: cdktf.stringToHclTerraform(this._secretEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
