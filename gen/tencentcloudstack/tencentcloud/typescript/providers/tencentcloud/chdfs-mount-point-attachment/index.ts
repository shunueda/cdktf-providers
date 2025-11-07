// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/chdfs_mount_point_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ChdfsMountPointAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * associate access group id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/chdfs_mount_point_attachment#access_group_ids ChdfsMountPointAttachment#access_group_ids}
  */
  readonly accessGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/chdfs_mount_point_attachment#id ChdfsMountPointAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * associate mount point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/chdfs_mount_point_attachment#mount_point_id ChdfsMountPointAttachment#mount_point_id}
  */
  readonly mountPointId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/chdfs_mount_point_attachment tencentcloud_chdfs_mount_point_attachment}
*/
export class ChdfsMountPointAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_chdfs_mount_point_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ChdfsMountPointAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChdfsMountPointAttachment to import
  * @param importFromId The id of the existing ChdfsMountPointAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/chdfs_mount_point_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChdfsMountPointAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_chdfs_mount_point_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/chdfs_mount_point_attachment tencentcloud_chdfs_mount_point_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChdfsMountPointAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: ChdfsMountPointAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_chdfs_mount_point_attachment',
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
    this._accessGroupIds = config.accessGroupIds;
    this._id = config.id;
    this._mountPointId = config.mountPointId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_group_ids - computed: false, optional: false, required: true
  private _accessGroupIds?: string[]; 
  public get accessGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('access_group_ids'));
  }
  public set accessGroupIds(value: string[]) {
    this._accessGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGroupIdsInput() {
    return this._accessGroupIds;
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

  // mount_point_id - computed: false, optional: false, required: true
  private _mountPointId?: string; 
  public get mountPointId() {
    return this.getStringAttribute('mount_point_id');
  }
  public set mountPointId(value: string) {
    this._mountPointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPointIdInput() {
    return this._mountPointId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._accessGroupIds),
      id: cdktf.stringToTerraform(this._id),
      mount_point_id: cdktf.stringToTerraform(this._mountPointId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._accessGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mount_point_id: {
        value: cdktf.stringToHclTerraform(this._mountPointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
