// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cfs_auto_snapshot_policy_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CfsAutoSnapshotPolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the snapshot to be unbound.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cfs_auto_snapshot_policy_attachment#auto_snapshot_policy_id CfsAutoSnapshotPolicyAttachment#auto_snapshot_policy_id}
  */
  readonly autoSnapshotPolicyId: string;
  /**
  * List of IDs of the file systems to be unbound, separated by comma.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cfs_auto_snapshot_policy_attachment#file_system_ids CfsAutoSnapshotPolicyAttachment#file_system_ids}
  */
  readonly fileSystemIds: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cfs_auto_snapshot_policy_attachment#id CfsAutoSnapshotPolicyAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cfs_auto_snapshot_policy_attachment tencentcloud_cfs_auto_snapshot_policy_attachment}
*/
export class CfsAutoSnapshotPolicyAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cfs_auto_snapshot_policy_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CfsAutoSnapshotPolicyAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CfsAutoSnapshotPolicyAttachment to import
  * @param importFromId The id of the existing CfsAutoSnapshotPolicyAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cfs_auto_snapshot_policy_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CfsAutoSnapshotPolicyAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cfs_auto_snapshot_policy_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cfs_auto_snapshot_policy_attachment tencentcloud_cfs_auto_snapshot_policy_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CfsAutoSnapshotPolicyAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: CfsAutoSnapshotPolicyAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cfs_auto_snapshot_policy_attachment',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoSnapshotPolicyId = config.autoSnapshotPolicyId;
    this._fileSystemIds = config.fileSystemIds;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_snapshot_policy_id - computed: false, optional: false, required: true
  private _autoSnapshotPolicyId?: string; 
  public get autoSnapshotPolicyId() {
    return this.getStringAttribute('auto_snapshot_policy_id');
  }
  public set autoSnapshotPolicyId(value: string) {
    this._autoSnapshotPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSnapshotPolicyIdInput() {
    return this._autoSnapshotPolicyId;
  }

  // file_system_ids - computed: false, optional: false, required: true
  private _fileSystemIds?: string; 
  public get fileSystemIds() {
    return this.getStringAttribute('file_system_ids');
  }
  public set fileSystemIds(value: string) {
    this._fileSystemIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdsInput() {
    return this._fileSystemIds;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_snapshot_policy_id: cdktf.stringToTerraform(this._autoSnapshotPolicyId),
      file_system_ids: cdktf.stringToTerraform(this._fileSystemIds),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_snapshot_policy_id: {
        value: cdktf.stringToHclTerraform(this._autoSnapshotPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_system_ids: {
        value: cdktf.stringToHclTerraform(this._fileSystemIds),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
