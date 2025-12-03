// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/chdfs_mount_point
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ChdfsMountPointConfig extends cdktf.TerraformMetaArguments {
  /**
  * file system id you want to mount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/chdfs_mount_point#file_system_id ChdfsMountPoint#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/chdfs_mount_point#id ChdfsMountPoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * mount point name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/chdfs_mount_point#mount_point_name ChdfsMountPoint#mount_point_name}
  */
  readonly mountPointName: string;
  /**
  * mount status 1:open, 2:close.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/chdfs_mount_point#mount_point_status ChdfsMountPoint#mount_point_status}
  */
  readonly mountPointStatus: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/chdfs_mount_point tencentcloud_chdfs_mount_point}
*/
export class ChdfsMountPoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_chdfs_mount_point";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ChdfsMountPoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChdfsMountPoint to import
  * @param importFromId The id of the existing ChdfsMountPoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/chdfs_mount_point#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChdfsMountPoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_chdfs_mount_point", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/chdfs_mount_point tencentcloud_chdfs_mount_point} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChdfsMountPointConfig
  */
  public constructor(scope: Construct, id: string, config: ChdfsMountPointConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_chdfs_mount_point',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
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
    this._mountPointName = config.mountPointName;
    this._mountPointStatus = config.mountPointStatus;
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

  // mount_point_name - computed: false, optional: false, required: true
  private _mountPointName?: string; 
  public get mountPointName() {
    return this.getStringAttribute('mount_point_name');
  }
  public set mountPointName(value: string) {
    this._mountPointName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPointNameInput() {
    return this._mountPointName;
  }

  // mount_point_status - computed: false, optional: false, required: true
  private _mountPointStatus?: number; 
  public get mountPointStatus() {
    return this.getNumberAttribute('mount_point_status');
  }
  public set mountPointStatus(value: number) {
    this._mountPointStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPointStatusInput() {
    return this._mountPointStatus;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      file_system_id: cdktf.stringToTerraform(this._fileSystemId),
      id: cdktf.stringToTerraform(this._id),
      mount_point_name: cdktf.stringToTerraform(this._mountPointName),
      mount_point_status: cdktf.numberToTerraform(this._mountPointStatus),
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
      mount_point_name: {
        value: cdktf.stringToHclTerraform(this._mountPointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mount_point_status: {
        value: cdktf.numberToHclTerraform(this._mountPointStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
