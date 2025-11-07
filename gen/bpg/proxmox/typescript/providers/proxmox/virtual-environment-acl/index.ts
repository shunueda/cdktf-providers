// https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_acl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualEnvironmentAclConfig extends cdktf.TerraformMetaArguments {
  /**
  * The group the ACL should apply to (mutually exclusive with `token_id` and `user_id`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_acl#group_id VirtualEnvironmentAcl#group_id}
  */
  readonly groupId?: string;
  /**
  * Access control path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_acl#path VirtualEnvironmentAcl#path}
  */
  readonly path: string;
  /**
  * Allow to propagate (inherit) permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_acl#propagate VirtualEnvironmentAcl#propagate}
  */
  readonly propagate?: boolean | cdktf.IResolvable;
  /**
  * The role to apply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_acl#role_id VirtualEnvironmentAcl#role_id}
  */
  readonly roleId: string;
  /**
  * The token the ACL should apply to (mutually exclusive with `group_id` and `user_id`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_acl#token_id VirtualEnvironmentAcl#token_id}
  */
  readonly tokenId?: string;
  /**
  * The user the ACL should apply to (mutually exclusive with `group_id` and `token_id`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_acl#user_id VirtualEnvironmentAcl#user_id}
  */
  readonly userId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_acl proxmox_virtual_environment_acl}
*/
export class VirtualEnvironmentAcl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_acl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualEnvironmentAcl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualEnvironmentAcl to import
  * @param importFromId The id of the existing VirtualEnvironmentAcl that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_acl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualEnvironmentAcl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_acl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_acl proxmox_virtual_environment_acl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualEnvironmentAclConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualEnvironmentAclConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_acl',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.86.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupId = config.groupId;
    this._path = config.path;
    this._propagate = config.propagate;
    this._roleId = config.roleId;
    this._tokenId = config.tokenId;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // propagate - computed: true, optional: true, required: false
  private _propagate?: boolean | cdktf.IResolvable; 
  public get propagate() {
    return this.getBooleanAttribute('propagate');
  }
  public set propagate(value: boolean | cdktf.IResolvable) {
    this._propagate = value;
  }
  public resetPropagate() {
    this._propagate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateInput() {
    return this._propagate;
  }

  // role_id - computed: false, optional: false, required: true
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }

  // token_id - computed: false, optional: true, required: false
  private _tokenId?: string; 
  public get tokenId() {
    return this.getStringAttribute('token_id');
  }
  public set tokenId(value: string) {
    this._tokenId = value;
  }
  public resetTokenId() {
    this._tokenId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenIdInput() {
    return this._tokenId;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_id: cdktf.stringToTerraform(this._groupId),
      path: cdktf.stringToTerraform(this._path),
      propagate: cdktf.booleanToTerraform(this._propagate),
      role_id: cdktf.stringToTerraform(this._roleId),
      token_id: cdktf.stringToTerraform(this._tokenId),
      user_id: cdktf.stringToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      propagate: {
        value: cdktf.booleanToHclTerraform(this._propagate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      role_id: {
        value: cdktf.stringToHclTerraform(this._roleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_id: {
        value: cdktf.stringToHclTerraform(this._tokenId),
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
