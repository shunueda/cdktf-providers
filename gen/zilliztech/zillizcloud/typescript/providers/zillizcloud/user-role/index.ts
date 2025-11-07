// https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/user_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The connection address of the target Zilliz Cloud cluster.
  * You can obtain this value from the output of the `zillizcloud_cluster` resource, for example:
  * `zillizcloud_cluster.example.connect_address`
  * 
  * **Example:**
  * `https://in01-295cd02566647b7.aws-us-east-2.vectordb.zillizcloud.com:19534`
  * 
  * > **Note:** The address must include the protocol (e.g., `https://`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/user_role#connect_address UserRole#connect_address}
  */
  readonly connectAddress: string;
  /**
  * A list of roles to assign to the user.
  * 
  * **Example:**  
  * `["db_admin", "read_only"]`
  * 
  * > **Note:** Only valid roles supported by the cluster can be assigned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/user_role#roles UserRole#roles}
  */
  readonly roles: string[];
  /**
  * The username of the database user to whom the roles will be assigned.
  * 
  * **Constraints:**
  * - Must be an existing user in the cluster.
  * - Should follow your organization's naming conventions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/user_role#username UserRole#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/user_role zillizcloud_user_role}
*/
export class UserRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zillizcloud_user_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserRole to import
  * @param importFromId The id of the existing UserRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/user_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zillizcloud_user_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/user_role zillizcloud_user_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserRoleConfig
  */
  public constructor(scope: Construct, id: string, config: UserRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'zillizcloud_user_role',
      terraformGeneratorMetadata: {
        providerName: 'zillizcloud',
        providerVersion: '0.6.23'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectAddress = config.connectAddress;
    this._roles = config.roles;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connect_address - computed: false, optional: false, required: true
  private _connectAddress?: string; 
  public get connectAddress() {
    return this.getStringAttribute('connect_address');
  }
  public set connectAddress(value: string) {
    this._connectAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectAddressInput() {
    return this._connectAddress;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // roles - computed: false, optional: false, required: true
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
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
      connect_address: cdktf.stringToTerraform(this._connectAddress),
      roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roles),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connect_address: {
        value: cdktf.stringToHclTerraform(this._connectAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
