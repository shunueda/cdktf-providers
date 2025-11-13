// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cfs_access_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CfsAccessRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of a access group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cfs_access_rule#access_group_id CfsAccessRule#access_group_id}
  */
  readonly accessGroupId: string;
  /**
  * A single IP or a single IP address range such as 10.1.10.11 or 10.10.1.0/24 indicates that all IPs are allowed. Please note that the IP entered should be CVM's private IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cfs_access_rule#auth_client_ip CfsAccessRule#auth_client_ip}
  */
  readonly authClientIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cfs_access_rule#id CfsAccessRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The priority level of rule. Valid value ranges: (1~100). `1` indicates the highest priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cfs_access_rule#priority CfsAccessRule#priority}
  */
  readonly priority: number;
  /**
  * Read and write permissions. Valid values are `RO` and `RW`. and default is `RO`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cfs_access_rule#rw_permission CfsAccessRule#rw_permission}
  */
  readonly rwPermission?: string;
  /**
  * The permissions of accessing users. Valid values are `all_squash`, `no_all_squash`, `root_squash` and `no_root_squash`. and default is `root_squash`. `all_squash` indicates that all access users are mapped as anonymous users or user groups; `no_all_squash` indicates that access users will match local users first and be mapped to anonymous users or user groups after matching failed; `root_squash` indicates that map access root users to anonymous users or user groups; `no_root_squash` indicates that access root users keep root account permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cfs_access_rule#user_permission CfsAccessRule#user_permission}
  */
  readonly userPermission?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cfs_access_rule tencentcloud_cfs_access_rule}
*/
export class CfsAccessRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cfs_access_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CfsAccessRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CfsAccessRule to import
  * @param importFromId The id of the existing CfsAccessRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cfs_access_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CfsAccessRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cfs_access_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cfs_access_rule tencentcloud_cfs_access_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CfsAccessRuleConfig
  */
  public constructor(scope: Construct, id: string, config: CfsAccessRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cfs_access_rule',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.36',
        providerVersionConstraint: '1.82.36'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessGroupId = config.accessGroupId;
    this._authClientIp = config.authClientIp;
    this._id = config.id;
    this._priority = config.priority;
    this._rwPermission = config.rwPermission;
    this._userPermission = config.userPermission;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_group_id - computed: false, optional: false, required: true
  private _accessGroupId?: string; 
  public get accessGroupId() {
    return this.getStringAttribute('access_group_id');
  }
  public set accessGroupId(value: string) {
    this._accessGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGroupIdInput() {
    return this._accessGroupId;
  }

  // auth_client_ip - computed: false, optional: false, required: true
  private _authClientIp?: string; 
  public get authClientIp() {
    return this.getStringAttribute('auth_client_ip');
  }
  public set authClientIp(value: string) {
    this._authClientIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authClientIpInput() {
    return this._authClientIp;
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

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // rw_permission - computed: false, optional: true, required: false
  private _rwPermission?: string; 
  public get rwPermission() {
    return this.getStringAttribute('rw_permission');
  }
  public set rwPermission(value: string) {
    this._rwPermission = value;
  }
  public resetRwPermission() {
    this._rwPermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rwPermissionInput() {
    return this._rwPermission;
  }

  // user_permission - computed: false, optional: true, required: false
  private _userPermission?: string; 
  public get userPermission() {
    return this.getStringAttribute('user_permission');
  }
  public set userPermission(value: string) {
    this._userPermission = value;
  }
  public resetUserPermission() {
    this._userPermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPermissionInput() {
    return this._userPermission;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_group_id: cdktf.stringToTerraform(this._accessGroupId),
      auth_client_ip: cdktf.stringToTerraform(this._authClientIp),
      id: cdktf.stringToTerraform(this._id),
      priority: cdktf.numberToTerraform(this._priority),
      rw_permission: cdktf.stringToTerraform(this._rwPermission),
      user_permission: cdktf.stringToTerraform(this._userPermission),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_group_id: {
        value: cdktf.stringToHclTerraform(this._accessGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_client_ip: {
        value: cdktf.stringToHclTerraform(this._authClientIp),
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
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rw_permission: {
        value: cdktf.stringToHclTerraform(this._rwPermission),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_permission: {
        value: cdktf.stringToHclTerraform(this._userPermission),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
