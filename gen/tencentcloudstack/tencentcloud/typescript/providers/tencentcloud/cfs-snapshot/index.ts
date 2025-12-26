// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cfs_snapshot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CfsSnapshotConfig extends cdktf.TerraformMetaArguments {
  /**
  * Id of file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cfs_snapshot#file_system_id CfsSnapshot#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cfs_snapshot#id CfsSnapshot#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cfs_snapshot#snapshot_name CfsSnapshot#snapshot_name}
  */
  readonly snapshotName?: string;
  /**
  * Tag description list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cfs_snapshot#tags CfsSnapshot#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cfs_snapshot tencentcloud_cfs_snapshot}
*/
export class CfsSnapshot extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cfs_snapshot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CfsSnapshot resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CfsSnapshot to import
  * @param importFromId The id of the existing CfsSnapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cfs_snapshot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CfsSnapshot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cfs_snapshot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cfs_snapshot tencentcloud_cfs_snapshot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CfsSnapshotConfig
  */
  public constructor(scope: Construct, id: string, config: CfsSnapshotConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cfs_snapshot',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fileSystemId = config.fileSystemId;
    this._id = config.id;
    this._snapshotName = config.snapshotName;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // snapshot_name - computed: false, optional: true, required: false
  private _snapshotName?: string; 
  public get snapshotName() {
    return this.getStringAttribute('snapshot_name');
  }
  public set snapshotName(value: string) {
    this._snapshotName = value;
  }
  public resetSnapshotName() {
    this._snapshotName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotNameInput() {
    return this._snapshotName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      file_system_id: cdktf.stringToTerraform(this._fileSystemId),
      id: cdktf.stringToTerraform(this._id),
      snapshot_name: cdktf.stringToTerraform(this._snapshotName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      snapshot_name: {
        value: cdktf.stringToHclTerraform(this._snapshotName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
