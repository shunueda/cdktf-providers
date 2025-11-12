// https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.2/docs/resources/grant_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GrantRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * If true, the grantee will be able to grant `role_name` to other `users` or `roles`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.2/docs/resources/grant_role#admin_option GrantRole#admin_option}
  */
  readonly adminOption?: boolean | cdktf.IResolvable;
  /**
  * Name of the cluster to create the resource into. If omitted, resource will be created on the replica hit by the query.
  * This field must be left null when using a ClickHouse Cloud cluster.
  * When using a self hosted ClickHouse instance, this field should only be set when there is more than one replica and you are not using 'replicated' storage for user_directory.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.2/docs/resources/grant_role#cluster_name GrantRole#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Name of the `role` to grant `role_name` to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.2/docs/resources/grant_role#grantee_role_name GrantRole#grantee_role_name}
  */
  readonly granteeRoleName?: string;
  /**
  * Name of the `user` to grant `role_name` to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.2/docs/resources/grant_role#grantee_user_name GrantRole#grantee_user_name}
  */
  readonly granteeUserName?: string;
  /**
  * Name of the role to be granted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.2/docs/resources/grant_role#role_name GrantRole#role_name}
  */
  readonly roleName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.2/docs/resources/grant_role clickhousedbops_grant_role}
*/
export class GrantRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clickhousedbops_grant_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GrantRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GrantRole to import
  * @param importFromId The id of the existing GrantRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.2/docs/resources/grant_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GrantRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clickhousedbops_grant_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.2/docs/resources/grant_role clickhousedbops_grant_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GrantRoleConfig
  */
  public constructor(scope: Construct, id: string, config: GrantRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'clickhousedbops_grant_role',
      terraformGeneratorMetadata: {
        providerName: 'clickhousedbops',
        providerVersion: '1.3.2',
        providerVersionConstraint: '1.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminOption = config.adminOption;
    this._clusterName = config.clusterName;
    this._granteeRoleName = config.granteeRoleName;
    this._granteeUserName = config.granteeUserName;
    this._roleName = config.roleName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_option - computed: true, optional: true, required: false
  private _adminOption?: boolean | cdktf.IResolvable; 
  public get adminOption() {
    return this.getBooleanAttribute('admin_option');
  }
  public set adminOption(value: boolean | cdktf.IResolvable) {
    this._adminOption = value;
  }
  public resetAdminOption() {
    this._adminOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminOptionInput() {
    return this._adminOption;
  }

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // grantee_role_name - computed: false, optional: true, required: false
  private _granteeRoleName?: string; 
  public get granteeRoleName() {
    return this.getStringAttribute('grantee_role_name');
  }
  public set granteeRoleName(value: string) {
    this._granteeRoleName = value;
  }
  public resetGranteeRoleName() {
    this._granteeRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get granteeRoleNameInput() {
    return this._granteeRoleName;
  }

  // grantee_user_name - computed: false, optional: true, required: false
  private _granteeUserName?: string; 
  public get granteeUserName() {
    return this.getStringAttribute('grantee_user_name');
  }
  public set granteeUserName(value: string) {
    this._granteeUserName = value;
  }
  public resetGranteeUserName() {
    this._granteeUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get granteeUserNameInput() {
    return this._granteeUserName;
  }

  // role_name - computed: false, optional: false, required: true
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_option: cdktf.booleanToTerraform(this._adminOption),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      grantee_role_name: cdktf.stringToTerraform(this._granteeRoleName),
      grantee_user_name: cdktf.stringToTerraform(this._granteeUserName),
      role_name: cdktf.stringToTerraform(this._roleName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_option: {
        value: cdktf.booleanToHclTerraform(this._adminOption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grantee_role_name: {
        value: cdktf.stringToHclTerraform(this._granteeRoleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grantee_user_name: {
        value: cdktf.stringToHclTerraform(this._granteeUserName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_name: {
        value: cdktf.stringToHclTerraform(this._roleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
