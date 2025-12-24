// https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_user_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualEnvironmentUserTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Comment for the token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_user_token#comment VirtualEnvironmentUserToken#comment}
  */
  readonly comment?: string;
  /**
  * Expiration date for the token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_user_token#expiration_date VirtualEnvironmentUserToken#expiration_date}
  */
  readonly expirationDate?: string;
  /**
  * Restrict API token privileges with separate ACLs (default), or give full privileges of corresponding user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_user_token#privileges_separation VirtualEnvironmentUserToken#privileges_separation}
  */
  readonly privilegesSeparation?: boolean | cdktf.IResolvable;
  /**
  * User-specific token identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_user_token#token_name VirtualEnvironmentUserToken#token_name}
  */
  readonly tokenName: string;
  /**
  * User identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_user_token#user_id VirtualEnvironmentUserToken#user_id}
  */
  readonly userId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_user_token proxmox_virtual_environment_user_token}
*/
export class VirtualEnvironmentUserToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_user_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualEnvironmentUserToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualEnvironmentUserToken to import
  * @param importFromId The id of the existing VirtualEnvironmentUserToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_user_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualEnvironmentUserToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_user_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_user_token proxmox_virtual_environment_user_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualEnvironmentUserTokenConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualEnvironmentUserTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_user_token',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.90.0',
        providerVersionConstraint: '0.90.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._expirationDate = config.expirationDate;
    this._privilegesSeparation = config.privilegesSeparation;
    this._tokenName = config.tokenName;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: false, optional: true, required: false
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

  // expiration_date - computed: false, optional: true, required: false
  private _expirationDate?: string; 
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
  }
  public set expirationDate(value: string) {
    this._expirationDate = value;
  }
  public resetExpirationDate() {
    this._expirationDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationDateInput() {
    return this._expirationDate;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // privileges_separation - computed: true, optional: true, required: false
  private _privilegesSeparation?: boolean | cdktf.IResolvable; 
  public get privilegesSeparation() {
    return this.getBooleanAttribute('privileges_separation');
  }
  public set privilegesSeparation(value: boolean | cdktf.IResolvable) {
    this._privilegesSeparation = value;
  }
  public resetPrivilegesSeparation() {
    this._privilegesSeparation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegesSeparationInput() {
    return this._privilegesSeparation;
  }

  // token_name - computed: false, optional: false, required: true
  private _tokenName?: string; 
  public get tokenName() {
    return this.getStringAttribute('token_name');
  }
  public set tokenName(value: string) {
    this._tokenName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenNameInput() {
    return this._tokenName;
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      expiration_date: cdktf.stringToTerraform(this._expirationDate),
      privileges_separation: cdktf.booleanToTerraform(this._privilegesSeparation),
      token_name: cdktf.stringToTerraform(this._tokenName),
      user_id: cdktf.stringToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiration_date: {
        value: cdktf.stringToHclTerraform(this._expirationDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privileges_separation: {
        value: cdktf.booleanToHclTerraform(this._privilegesSeparation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      token_name: {
        value: cdktf.stringToHclTerraform(this._tokenName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
