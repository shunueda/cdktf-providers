// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_bundle
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcdBundleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_bundle#bundle_name EcdBundle#bundle_name}
  */
  readonly bundleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_bundle#description EcdBundle#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_bundle#desktop_type EcdBundle#desktop_type}
  */
  readonly desktopType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_bundle#id EcdBundle#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_bundle#image_id EcdBundle#image_id}
  */
  readonly imageId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_bundle#language EcdBundle#language}
  */
  readonly language?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_bundle#root_disk_performance_level EcdBundle#root_disk_performance_level}
  */
  readonly rootDiskPerformanceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_bundle#root_disk_size_gib EcdBundle#root_disk_size_gib}
  */
  readonly rootDiskSizeGib: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_bundle#user_disk_performance_level EcdBundle#user_disk_performance_level}
  */
  readonly userDiskPerformanceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_bundle#user_disk_size_gib EcdBundle#user_disk_size_gib}
  */
  readonly userDiskSizeGib: number[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_bundle#timeouts EcdBundle#timeouts}
  */
  readonly timeouts?: EcdBundleTimeouts;
}
export interface EcdBundleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_bundle#create EcdBundle#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_bundle#delete EcdBundle#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_bundle#update EcdBundle#update}
  */
  readonly update?: string;
}

export function ecdBundleTimeoutsToTerraform(struct?: EcdBundleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function ecdBundleTimeoutsToHclTerraform(struct?: EcdBundleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcdBundleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcdBundleTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcdBundleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_bundle alicloud_ecd_bundle}
*/
export class EcdBundle extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ecd_bundle";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EcdBundle resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcdBundle to import
  * @param importFromId The id of the existing EcdBundle that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_bundle#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcdBundle to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ecd_bundle", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecd_bundle alicloud_ecd_bundle} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcdBundleConfig
  */
  public constructor(scope: Construct, id: string, config: EcdBundleConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ecd_bundle',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bundleName = config.bundleName;
    this._description = config.description;
    this._desktopType = config.desktopType;
    this._id = config.id;
    this._imageId = config.imageId;
    this._language = config.language;
    this._rootDiskPerformanceLevel = config.rootDiskPerformanceLevel;
    this._rootDiskSizeGib = config.rootDiskSizeGib;
    this._userDiskPerformanceLevel = config.userDiskPerformanceLevel;
    this._userDiskSizeGib = config.userDiskSizeGib;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bundle_name - computed: false, optional: true, required: false
  private _bundleName?: string; 
  public get bundleName() {
    return this.getStringAttribute('bundle_name');
  }
  public set bundleName(value: string) {
    this._bundleName = value;
  }
  public resetBundleName() {
    this._bundleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleNameInput() {
    return this._bundleName;
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

  // desktop_type - computed: false, optional: false, required: true
  private _desktopType?: string; 
  public get desktopType() {
    return this.getStringAttribute('desktop_type');
  }
  public set desktopType(value: string) {
    this._desktopType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get desktopTypeInput() {
    return this._desktopType;
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

  // language - computed: false, optional: true, required: false
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }

  // root_disk_performance_level - computed: true, optional: true, required: false
  private _rootDiskPerformanceLevel?: string; 
  public get rootDiskPerformanceLevel() {
    return this.getStringAttribute('root_disk_performance_level');
  }
  public set rootDiskPerformanceLevel(value: string) {
    this._rootDiskPerformanceLevel = value;
  }
  public resetRootDiskPerformanceLevel() {
    this._rootDiskPerformanceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDiskPerformanceLevelInput() {
    return this._rootDiskPerformanceLevel;
  }

  // root_disk_size_gib - computed: false, optional: false, required: true
  private _rootDiskSizeGib?: number; 
  public get rootDiskSizeGib() {
    return this.getNumberAttribute('root_disk_size_gib');
  }
  public set rootDiskSizeGib(value: number) {
    this._rootDiskSizeGib = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDiskSizeGibInput() {
    return this._rootDiskSizeGib;
  }

  // user_disk_performance_level - computed: true, optional: true, required: false
  private _userDiskPerformanceLevel?: string; 
  public get userDiskPerformanceLevel() {
    return this.getStringAttribute('user_disk_performance_level');
  }
  public set userDiskPerformanceLevel(value: string) {
    this._userDiskPerformanceLevel = value;
  }
  public resetUserDiskPerformanceLevel() {
    this._userDiskPerformanceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDiskPerformanceLevelInput() {
    return this._userDiskPerformanceLevel;
  }

  // user_disk_size_gib - computed: false, optional: false, required: true
  private _userDiskSizeGib?: number[]; 
  public get userDiskSizeGib() {
    return this.getNumberListAttribute('user_disk_size_gib');
  }
  public set userDiskSizeGib(value: number[]) {
    this._userDiskSizeGib = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userDiskSizeGibInput() {
    return this._userDiskSizeGib;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EcdBundleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EcdBundleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bundle_name: cdktf.stringToTerraform(this._bundleName),
      description: cdktf.stringToTerraform(this._description),
      desktop_type: cdktf.stringToTerraform(this._desktopType),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      language: cdktf.stringToTerraform(this._language),
      root_disk_performance_level: cdktf.stringToTerraform(this._rootDiskPerformanceLevel),
      root_disk_size_gib: cdktf.numberToTerraform(this._rootDiskSizeGib),
      user_disk_performance_level: cdktf.stringToTerraform(this._userDiskPerformanceLevel),
      user_disk_size_gib: cdktf.listMapper(cdktf.numberToTerraform, false)(this._userDiskSizeGib),
      timeouts: ecdBundleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bundle_name: {
        value: cdktf.stringToHclTerraform(this._bundleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      desktop_type: {
        value: cdktf.stringToHclTerraform(this._desktopType),
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
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      language: {
        value: cdktf.stringToHclTerraform(this._language),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      root_disk_performance_level: {
        value: cdktf.stringToHclTerraform(this._rootDiskPerformanceLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      root_disk_size_gib: {
        value: cdktf.numberToHclTerraform(this._rootDiskSizeGib),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_disk_performance_level: {
        value: cdktf.stringToHclTerraform(this._userDiskPerformanceLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_disk_size_gib: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._userDiskSizeGib),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      timeouts: {
        value: ecdBundleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EcdBundleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
