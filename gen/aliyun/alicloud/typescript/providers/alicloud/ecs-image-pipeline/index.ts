// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_image_pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcsImagePipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_image_pipeline#add_account EcsImagePipeline#add_account}
  */
  readonly addAccount?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_image_pipeline#base_image EcsImagePipeline#base_image}
  */
  readonly baseImage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_image_pipeline#base_image_type EcsImagePipeline#base_image_type}
  */
  readonly baseImageType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_image_pipeline#build_content EcsImagePipeline#build_content}
  */
  readonly buildContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_image_pipeline#delete_instance_on_failure EcsImagePipeline#delete_instance_on_failure}
  */
  readonly deleteInstanceOnFailure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_image_pipeline#description EcsImagePipeline#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_image_pipeline#id EcsImagePipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_image_pipeline#image_name EcsImagePipeline#image_name}
  */
  readonly imageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_image_pipeline#instance_type EcsImagePipeline#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_image_pipeline#internet_max_bandwidth_out EcsImagePipeline#internet_max_bandwidth_out}
  */
  readonly internetMaxBandwidthOut?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_image_pipeline#name EcsImagePipeline#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_image_pipeline#resource_group_id EcsImagePipeline#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_image_pipeline#system_disk_size EcsImagePipeline#system_disk_size}
  */
  readonly systemDiskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_image_pipeline#tags EcsImagePipeline#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_image_pipeline#to_region_id EcsImagePipeline#to_region_id}
  */
  readonly toRegionId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_image_pipeline#vswitch_id EcsImagePipeline#vswitch_id}
  */
  readonly vswitchId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_image_pipeline alicloud_ecs_image_pipeline}
*/
export class EcsImagePipeline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ecs_image_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EcsImagePipeline resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcsImagePipeline to import
  * @param importFromId The id of the existing EcsImagePipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_image_pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcsImagePipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ecs_image_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_image_pipeline alicloud_ecs_image_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcsImagePipelineConfig
  */
  public constructor(scope: Construct, id: string, config: EcsImagePipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ecs_image_pipeline',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addAccount = config.addAccount;
    this._baseImage = config.baseImage;
    this._baseImageType = config.baseImageType;
    this._buildContent = config.buildContent;
    this._deleteInstanceOnFailure = config.deleteInstanceOnFailure;
    this._description = config.description;
    this._id = config.id;
    this._imageName = config.imageName;
    this._instanceType = config.instanceType;
    this._internetMaxBandwidthOut = config.internetMaxBandwidthOut;
    this._name = config.name;
    this._resourceGroupId = config.resourceGroupId;
    this._systemDiskSize = config.systemDiskSize;
    this._tags = config.tags;
    this._toRegionId = config.toRegionId;
    this._vswitchId = config.vswitchId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_account - computed: false, optional: true, required: false
  private _addAccount?: string[]; 
  public get addAccount() {
    return cdktf.Fn.tolist(this.getListAttribute('add_account'));
  }
  public set addAccount(value: string[]) {
    this._addAccount = value;
  }
  public resetAddAccount() {
    this._addAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addAccountInput() {
    return this._addAccount;
  }

  // base_image - computed: false, optional: false, required: true
  private _baseImage?: string; 
  public get baseImage() {
    return this.getStringAttribute('base_image');
  }
  public set baseImage(value: string) {
    this._baseImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseImageInput() {
    return this._baseImage;
  }

  // base_image_type - computed: false, optional: false, required: true
  private _baseImageType?: string; 
  public get baseImageType() {
    return this.getStringAttribute('base_image_type');
  }
  public set baseImageType(value: string) {
    this._baseImageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseImageTypeInput() {
    return this._baseImageType;
  }

  // build_content - computed: false, optional: true, required: false
  private _buildContent?: string; 
  public get buildContent() {
    return this.getStringAttribute('build_content');
  }
  public set buildContent(value: string) {
    this._buildContent = value;
  }
  public resetBuildContent() {
    this._buildContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildContentInput() {
    return this._buildContent;
  }

  // delete_instance_on_failure - computed: true, optional: true, required: false
  private _deleteInstanceOnFailure?: boolean | cdktf.IResolvable; 
  public get deleteInstanceOnFailure() {
    return this.getBooleanAttribute('delete_instance_on_failure');
  }
  public set deleteInstanceOnFailure(value: boolean | cdktf.IResolvable) {
    this._deleteInstanceOnFailure = value;
  }
  public resetDeleteInstanceOnFailure() {
    this._deleteInstanceOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInstanceOnFailureInput() {
    return this._deleteInstanceOnFailure;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // internet_max_bandwidth_out - computed: true, optional: true, required: false
  private _internetMaxBandwidthOut?: number; 
  public get internetMaxBandwidthOut() {
    return this.getNumberAttribute('internet_max_bandwidth_out');
  }
  public set internetMaxBandwidthOut(value: number) {
    this._internetMaxBandwidthOut = value;
  }
  public resetInternetMaxBandwidthOut() {
    this._internetMaxBandwidthOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetMaxBandwidthOutInput() {
    return this._internetMaxBandwidthOut;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // system_disk_size - computed: true, optional: true, required: false
  private _systemDiskSize?: number; 
  public get systemDiskSize() {
    return this.getNumberAttribute('system_disk_size');
  }
  public set systemDiskSize(value: number) {
    this._systemDiskSize = value;
  }
  public resetSystemDiskSize() {
    this._systemDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskSizeInput() {
    return this._systemDiskSize;
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

  // to_region_id - computed: false, optional: true, required: false
  private _toRegionId?: string[]; 
  public get toRegionId() {
    return cdktf.Fn.tolist(this.getListAttribute('to_region_id'));
  }
  public set toRegionId(value: string[]) {
    this._toRegionId = value;
  }
  public resetToRegionId() {
    this._toRegionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toRegionIdInput() {
    return this._toRegionId;
  }

  // vswitch_id - computed: false, optional: true, required: false
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  public resetVswitchId() {
    this._vswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_account: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addAccount),
      base_image: cdktf.stringToTerraform(this._baseImage),
      base_image_type: cdktf.stringToTerraform(this._baseImageType),
      build_content: cdktf.stringToTerraform(this._buildContent),
      delete_instance_on_failure: cdktf.booleanToTerraform(this._deleteInstanceOnFailure),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      image_name: cdktf.stringToTerraform(this._imageName),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      internet_max_bandwidth_out: cdktf.numberToTerraform(this._internetMaxBandwidthOut),
      name: cdktf.stringToTerraform(this._name),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      system_disk_size: cdktf.numberToTerraform(this._systemDiskSize),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      to_region_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._toRegionId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_account: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addAccount),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      base_image: {
        value: cdktf.stringToHclTerraform(this._baseImage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_image_type: {
        value: cdktf.stringToHclTerraform(this._baseImageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      build_content: {
        value: cdktf.stringToHclTerraform(this._buildContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_instance_on_failure: {
        value: cdktf.booleanToHclTerraform(this._deleteInstanceOnFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      image_name: {
        value: cdktf.stringToHclTerraform(this._imageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_max_bandwidth_out: {
        value: cdktf.numberToHclTerraform(this._internetMaxBandwidthOut),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_disk_size: {
        value: cdktf.numberToHclTerraform(this._systemDiskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      to_region_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._toRegionId),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
