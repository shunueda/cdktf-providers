// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloud disk ID list, When creating a whole machine image based on an instance, specify the data disk ID contained in the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/image#data_disk_ids Image#data_disk_ids}
  */
  readonly dataDiskIds?: string[];
  /**
  * Set whether to force shutdown during mirroring. The default value is `false`, when set to true, it means that the mirror will be made after shutdown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/image#force_poweroff Image#force_poweroff}
  */
  readonly forcePoweroff?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/image#id Image#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Image Description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/image#image_description Image#image_description}
  */
  readonly imageDescription?: string;
  /**
  * Set image family. Example value: `business-daily-update`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/image#image_family Image#image_family}
  */
  readonly imageFamily?: string;
  /**
  * Image name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/image#image_name Image#image_name}
  */
  readonly imageName: string;
  /**
  * Cloud server instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/image#instance_id Image#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Cloud disk snapshot ID list; creating a mirror based on a snapshot must include a system disk snapshot. It cannot be passed in simultaneously with InstanceId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/image#snapshot_ids Image#snapshot_ids}
  */
  readonly snapshotIds?: string[];
  /**
  * Sysprep function under Windows. When creating a Windows image, you can select true or false to enable or disable the Syspre function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/image#sysprep Image#sysprep}
  */
  readonly sysprep?: boolean | cdktf.IResolvable;
  /**
  * Tags of the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/image#tags Image#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/image tencentcloud_image}
*/
export class Image extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Image resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Image to import
  * @param importFromId The id of the existing Image that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Image to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/image tencentcloud_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImageConfig
  */
  public constructor(scope: Construct, id: string, config: ImageConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_image',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataDiskIds = config.dataDiskIds;
    this._forcePoweroff = config.forcePoweroff;
    this._id = config.id;
    this._imageDescription = config.imageDescription;
    this._imageFamily = config.imageFamily;
    this._imageName = config.imageName;
    this._instanceId = config.instanceId;
    this._snapshotIds = config.snapshotIds;
    this._sysprep = config.sysprep;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_disk_ids - computed: true, optional: true, required: false
  private _dataDiskIds?: string[]; 
  public get dataDiskIds() {
    return cdktf.Fn.tolist(this.getListAttribute('data_disk_ids'));
  }
  public set dataDiskIds(value: string[]) {
    this._dataDiskIds = value;
  }
  public resetDataDiskIds() {
    this._dataDiskIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskIdsInput() {
    return this._dataDiskIds;
  }

  // force_poweroff - computed: false, optional: true, required: false
  private _forcePoweroff?: boolean | cdktf.IResolvable; 
  public get forcePoweroff() {
    return this.getBooleanAttribute('force_poweroff');
  }
  public set forcePoweroff(value: boolean | cdktf.IResolvable) {
    this._forcePoweroff = value;
  }
  public resetForcePoweroff() {
    this._forcePoweroff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcePoweroffInput() {
    return this._forcePoweroff;
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

  // image_description - computed: false, optional: true, required: false
  private _imageDescription?: string; 
  public get imageDescription() {
    return this.getStringAttribute('image_description');
  }
  public set imageDescription(value: string) {
    this._imageDescription = value;
  }
  public resetImageDescription() {
    this._imageDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageDescriptionInput() {
    return this._imageDescription;
  }

  // image_family - computed: false, optional: true, required: false
  private _imageFamily?: string; 
  public get imageFamily() {
    return this.getStringAttribute('image_family');
  }
  public set imageFamily(value: string) {
    this._imageFamily = value;
  }
  public resetImageFamily() {
    this._imageFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageFamilyInput() {
    return this._imageFamily;
  }

  // image_name - computed: false, optional: false, required: true
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // snapshot_ids - computed: false, optional: true, required: false
  private _snapshotIds?: string[]; 
  public get snapshotIds() {
    return cdktf.Fn.tolist(this.getListAttribute('snapshot_ids'));
  }
  public set snapshotIds(value: string[]) {
    this._snapshotIds = value;
  }
  public resetSnapshotIds() {
    this._snapshotIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdsInput() {
    return this._snapshotIds;
  }

  // sysprep - computed: false, optional: true, required: false
  private _sysprep?: boolean | cdktf.IResolvable; 
  public get sysprep() {
    return this.getBooleanAttribute('sysprep');
  }
  public set sysprep(value: boolean | cdktf.IResolvable) {
    this._sysprep = value;
  }
  public resetSysprep() {
    this._sysprep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysprepInput() {
    return this._sysprep;
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
      data_disk_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dataDiskIds),
      force_poweroff: cdktf.booleanToTerraform(this._forcePoweroff),
      id: cdktf.stringToTerraform(this._id),
      image_description: cdktf.stringToTerraform(this._imageDescription),
      image_family: cdktf.stringToTerraform(this._imageFamily),
      image_name: cdktf.stringToTerraform(this._imageName),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      snapshot_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._snapshotIds),
      sysprep: cdktf.booleanToTerraform(this._sysprep),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_disk_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dataDiskIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      force_poweroff: {
        value: cdktf.booleanToHclTerraform(this._forcePoweroff),
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
      image_description: {
        value: cdktf.stringToHclTerraform(this._imageDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_family: {
        value: cdktf.stringToHclTerraform(this._imageFamily),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_name: {
        value: cdktf.stringToHclTerraform(this._imageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._snapshotIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sysprep: {
        value: cdktf.booleanToHclTerraform(this._sysprep),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
