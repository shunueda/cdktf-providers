// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cfs_user_quota
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CfsUserQuotaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Capacity Limit(GB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cfs_user_quota#capacity_hard_limit CfsUserQuota#capacity_hard_limit}
  */
  readonly capacityHardLimit?: number;
  /**
  * File limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cfs_user_quota#file_hard_limit CfsUserQuota#file_hard_limit}
  */
  readonly fileHardLimit?: number;
  /**
  * File system ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cfs_user_quota#file_system_id CfsUserQuota#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cfs_user_quota#id CfsUserQuota#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Info of UID/GID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cfs_user_quota#user_id CfsUserQuota#user_id}
  */
  readonly userId: string;
  /**
  * Quota type. Valid value: `Uid`, `Gid`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cfs_user_quota#user_type CfsUserQuota#user_type}
  */
  readonly userType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cfs_user_quota tencentcloud_cfs_user_quota}
*/
export class CfsUserQuota extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cfs_user_quota";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CfsUserQuota resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CfsUserQuota to import
  * @param importFromId The id of the existing CfsUserQuota that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cfs_user_quota#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CfsUserQuota to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cfs_user_quota", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cfs_user_quota tencentcloud_cfs_user_quota} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CfsUserQuotaConfig
  */
  public constructor(scope: Construct, id: string, config: CfsUserQuotaConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cfs_user_quota',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._capacityHardLimit = config.capacityHardLimit;
    this._fileHardLimit = config.fileHardLimit;
    this._fileSystemId = config.fileSystemId;
    this._id = config.id;
    this._userId = config.userId;
    this._userType = config.userType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capacity_hard_limit - computed: false, optional: true, required: false
  private _capacityHardLimit?: number; 
  public get capacityHardLimit() {
    return this.getNumberAttribute('capacity_hard_limit');
  }
  public set capacityHardLimit(value: number) {
    this._capacityHardLimit = value;
  }
  public resetCapacityHardLimit() {
    this._capacityHardLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityHardLimitInput() {
    return this._capacityHardLimit;
  }

  // file_hard_limit - computed: false, optional: true, required: false
  private _fileHardLimit?: number; 
  public get fileHardLimit() {
    return this.getNumberAttribute('file_hard_limit');
  }
  public set fileHardLimit(value: number) {
    this._fileHardLimit = value;
  }
  public resetFileHardLimit() {
    this._fileHardLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileHardLimitInput() {
    return this._fileHardLimit;
  }

  // file_system_id - computed: false, optional: false, required: true
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
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

  // user_type - computed: false, optional: false, required: true
  private _userType?: string; 
  public get userType() {
    return this.getStringAttribute('user_type');
  }
  public set userType(value: string) {
    this._userType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userTypeInput() {
    return this._userType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capacity_hard_limit: cdktf.numberToTerraform(this._capacityHardLimit),
      file_hard_limit: cdktf.numberToTerraform(this._fileHardLimit),
      file_system_id: cdktf.stringToTerraform(this._fileSystemId),
      id: cdktf.stringToTerraform(this._id),
      user_id: cdktf.stringToTerraform(this._userId),
      user_type: cdktf.stringToTerraform(this._userType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capacity_hard_limit: {
        value: cdktf.numberToHclTerraform(this._capacityHardLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      file_hard_limit: {
        value: cdktf.numberToHclTerraform(this._fileHardLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      file_system_id: {
        value: cdktf.stringToHclTerraform(this._fileSystemId),
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
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_type: {
        value: cdktf.stringToHclTerraform(this._userType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
