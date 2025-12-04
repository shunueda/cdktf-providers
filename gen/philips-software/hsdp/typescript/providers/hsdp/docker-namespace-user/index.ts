// https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/docker_namespace_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DockerNamespaceUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/docker_namespace_user#can_delete DockerNamespaceUser#can_delete}
  */
  readonly canDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/docker_namespace_user#can_pull DockerNamespaceUser#can_pull}
  */
  readonly canPull?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/docker_namespace_user#can_push DockerNamespaceUser#can_push}
  */
  readonly canPush?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/docker_namespace_user#id DockerNamespaceUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/docker_namespace_user#is_admin DockerNamespaceUser#is_admin}
  */
  readonly isAdmin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/docker_namespace_user#namespace_id DockerNamespaceUser#namespace_id}
  */
  readonly namespaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/docker_namespace_user#username DockerNamespaceUser#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/docker_namespace_user hsdp_docker_namespace_user}
*/
export class DockerNamespaceUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hsdp_docker_namespace_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DockerNamespaceUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DockerNamespaceUser to import
  * @param importFromId The id of the existing DockerNamespaceUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/docker_namespace_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DockerNamespaceUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hsdp_docker_namespace_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/docker_namespace_user hsdp_docker_namespace_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DockerNamespaceUserConfig
  */
  public constructor(scope: Construct, id: string, config: DockerNamespaceUserConfig) {
    super(scope, id, {
      terraformResourceType: 'hsdp_docker_namespace_user',
      terraformGeneratorMetadata: {
        providerName: 'hsdp',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._canDelete = config.canDelete;
    this._canPull = config.canPull;
    this._canPush = config.canPush;
    this._id = config.id;
    this._isAdmin = config.isAdmin;
    this._namespaceId = config.namespaceId;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // can_delete - computed: false, optional: true, required: false
  private _canDelete?: boolean | cdktf.IResolvable; 
  public get canDelete() {
    return this.getBooleanAttribute('can_delete');
  }
  public set canDelete(value: boolean | cdktf.IResolvable) {
    this._canDelete = value;
  }
  public resetCanDelete() {
    this._canDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canDeleteInput() {
    return this._canDelete;
  }

  // can_pull - computed: false, optional: true, required: false
  private _canPull?: boolean | cdktf.IResolvable; 
  public get canPull() {
    return this.getBooleanAttribute('can_pull');
  }
  public set canPull(value: boolean | cdktf.IResolvable) {
    this._canPull = value;
  }
  public resetCanPull() {
    this._canPull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canPullInput() {
    return this._canPull;
  }

  // can_push - computed: false, optional: true, required: false
  private _canPush?: boolean | cdktf.IResolvable; 
  public get canPush() {
    return this.getBooleanAttribute('can_push');
  }
  public set canPush(value: boolean | cdktf.IResolvable) {
    this._canPush = value;
  }
  public resetCanPush() {
    this._canPush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canPushInput() {
    return this._canPush;
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

  // is_admin - computed: false, optional: true, required: false
  private _isAdmin?: boolean | cdktf.IResolvable; 
  public get isAdmin() {
    return this.getBooleanAttribute('is_admin');
  }
  public set isAdmin(value: boolean | cdktf.IResolvable) {
    this._isAdmin = value;
  }
  public resetIsAdmin() {
    this._isAdmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAdminInput() {
    return this._isAdmin;
  }

  // namespace_id - computed: false, optional: false, required: true
  private _namespaceId?: string; 
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }
  public set namespaceId(value: string) {
    this._namespaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceIdInput() {
    return this._namespaceId;
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
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
      can_delete: cdktf.booleanToTerraform(this._canDelete),
      can_pull: cdktf.booleanToTerraform(this._canPull),
      can_push: cdktf.booleanToTerraform(this._canPush),
      id: cdktf.stringToTerraform(this._id),
      is_admin: cdktf.booleanToTerraform(this._isAdmin),
      namespace_id: cdktf.stringToTerraform(this._namespaceId),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      can_delete: {
        value: cdktf.booleanToHclTerraform(this._canDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_pull: {
        value: cdktf.booleanToHclTerraform(this._canPull),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_push: {
        value: cdktf.booleanToHclTerraform(this._canPush),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_admin: {
        value: cdktf.booleanToHclTerraform(this._isAdmin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      namespace_id: {
        value: cdktf.stringToHclTerraform(this._namespaceId),
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
