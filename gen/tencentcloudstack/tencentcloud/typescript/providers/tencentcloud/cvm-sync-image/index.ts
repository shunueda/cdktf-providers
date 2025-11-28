// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cvm_sync_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CvmSyncImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of destination regions for synchronization. Limits: It must be a valid region. For a custom image, the destination region cannot be the source region. For a shared image, the destination region must be the source region, which indicates to create a copy of the image as a custom image in the same region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cvm_sync_image#destination_regions CvmSyncImage#destination_regions}
  */
  readonly destinationRegions: string[];
  /**
  * Checks whether image synchronization can be initiated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cvm_sync_image#dry_run CvmSyncImage#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cvm_sync_image#id CvmSyncImage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Image ID. The specified image must meet the following requirement: the images must be in the `NORMAL` state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cvm_sync_image#image_id CvmSyncImage#image_id}
  */
  readonly imageId: string;
  /**
  * Destination image name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cvm_sync_image#image_name CvmSyncImage#image_name}
  */
  readonly imageName?: string;
  /**
  * Whether to return the ID of image created in the destination region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cvm_sync_image#image_set_required CvmSyncImage#image_set_required}
  */
  readonly imageSetRequired?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cvm_sync_image tencentcloud_cvm_sync_image}
*/
export class CvmSyncImage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cvm_sync_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CvmSyncImage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CvmSyncImage to import
  * @param importFromId The id of the existing CvmSyncImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cvm_sync_image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CvmSyncImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cvm_sync_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cvm_sync_image tencentcloud_cvm_sync_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CvmSyncImageConfig
  */
  public constructor(scope: Construct, id: string, config: CvmSyncImageConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cvm_sync_image',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.39',
        providerVersionConstraint: '1.82.39'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._destinationRegions = config.destinationRegions;
    this._dryRun = config.dryRun;
    this._id = config.id;
    this._imageId = config.imageId;
    this._imageName = config.imageName;
    this._imageSetRequired = config.imageSetRequired;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination_regions - computed: false, optional: false, required: true
  private _destinationRegions?: string[]; 
  public get destinationRegions() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_regions'));
  }
  public set destinationRegions(value: string[]) {
    this._destinationRegions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationRegionsInput() {
    return this._destinationRegions;
  }

  // dry_run - computed: false, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
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

  // image_id - computed: false, optional: false, required: true
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // image_name - computed: false, optional: true, required: false
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  public resetImageName() {
    this._imageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // image_set_required - computed: false, optional: true, required: false
  private _imageSetRequired?: boolean | cdktf.IResolvable; 
  public get imageSetRequired() {
    return this.getBooleanAttribute('image_set_required');
  }
  public set imageSetRequired(value: boolean | cdktf.IResolvable) {
    this._imageSetRequired = value;
  }
  public resetImageSetRequired() {
    this._imageSetRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageSetRequiredInput() {
    return this._imageSetRequired;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destinationRegions),
      dry_run: cdktf.booleanToTerraform(this._dryRun),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      image_name: cdktf.stringToTerraform(this._imageName),
      image_set_required: cdktf.booleanToTerraform(this._imageSetRequired),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destination_regions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._destinationRegions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dry_run: {
        value: cdktf.booleanToHclTerraform(this._dryRun),
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
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
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
      image_set_required: {
        value: cdktf.booleanToHclTerraform(this._imageSetRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
