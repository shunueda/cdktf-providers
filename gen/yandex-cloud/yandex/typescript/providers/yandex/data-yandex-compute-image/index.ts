// https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/compute_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexComputeImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the image family to which this image belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/compute_image#family DataYandexComputeImage#family}
  */
  readonly family?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/compute_image#folder_id DataYandexComputeImage#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/compute_image#id DataYandexComputeImage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of a specific image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/compute_image#image_id DataYandexComputeImage#image_id}
  */
  readonly imageId?: string;
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/compute_image#name DataYandexComputeImage#name}
  */
  readonly name?: string;
}
export interface DataYandexComputeImageHardwareGenerationGeneration2Features {
}

export function dataYandexComputeImageHardwareGenerationGeneration2FeaturesToTerraform(struct?: DataYandexComputeImageHardwareGenerationGeneration2Features): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexComputeImageHardwareGenerationGeneration2FeaturesToHclTerraform(struct?: DataYandexComputeImageHardwareGenerationGeneration2Features): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexComputeImageHardwareGenerationGeneration2FeaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexComputeImageHardwareGenerationGeneration2Features | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeImageHardwareGenerationGeneration2Features | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class DataYandexComputeImageHardwareGenerationGeneration2FeaturesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataYandexComputeImageHardwareGenerationGeneration2FeaturesOutputReference {
    return new DataYandexComputeImageHardwareGenerationGeneration2FeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeImageHardwareGenerationLegacyFeatures {
}

export function dataYandexComputeImageHardwareGenerationLegacyFeaturesToTerraform(struct?: DataYandexComputeImageHardwareGenerationLegacyFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexComputeImageHardwareGenerationLegacyFeaturesToHclTerraform(struct?: DataYandexComputeImageHardwareGenerationLegacyFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexComputeImageHardwareGenerationLegacyFeaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexComputeImageHardwareGenerationLegacyFeatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeImageHardwareGenerationLegacyFeatures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pci_topology - computed: true, optional: false, required: false
  public get pciTopology() {
    return this.getStringAttribute('pci_topology');
  }
}

export class DataYandexComputeImageHardwareGenerationLegacyFeaturesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataYandexComputeImageHardwareGenerationLegacyFeaturesOutputReference {
    return new DataYandexComputeImageHardwareGenerationLegacyFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeImageHardwareGeneration {
}

export function dataYandexComputeImageHardwareGenerationToTerraform(struct?: DataYandexComputeImageHardwareGeneration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexComputeImageHardwareGenerationToHclTerraform(struct?: DataYandexComputeImageHardwareGeneration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexComputeImageHardwareGenerationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexComputeImageHardwareGeneration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeImageHardwareGeneration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // generation2_features - computed: true, optional: false, required: false
  private _generation2Features = new DataYandexComputeImageHardwareGenerationGeneration2FeaturesList(this, "generation2_features", false);
  public get generation2Features() {
    return this._generation2Features;
  }

  // legacy_features - computed: true, optional: false, required: false
  private _legacyFeatures = new DataYandexComputeImageHardwareGenerationLegacyFeaturesList(this, "legacy_features", false);
  public get legacyFeatures() {
    return this._legacyFeatures;
  }
}

export class DataYandexComputeImageHardwareGenerationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataYandexComputeImageHardwareGenerationOutputReference {
    return new DataYandexComputeImageHardwareGenerationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/compute_image yandex_compute_image}
*/
export class DataYandexComputeImage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_compute_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataYandexComputeImage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataYandexComputeImage to import
  * @param importFromId The id of the existing DataYandexComputeImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/compute_image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataYandexComputeImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_compute_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/compute_image yandex_compute_image} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexComputeImageConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexComputeImageConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_compute_image',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.171.0',
        providerVersionConstraint: '0.171.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._family = config.family;
    this._folderId = config.folderId;
    this._id = config.id;
    this._imageId = config.imageId;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // family - computed: true, optional: true, required: false
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
  }

  // hardware_generation - computed: true, optional: false, required: false
  private _hardwareGeneration = new DataYandexComputeImageHardwareGenerationList(this, "hardware_generation", false);
  public get hardwareGeneration() {
    return this._hardwareGeneration;
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

  // image_id - computed: true, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // min_disk_size - computed: true, optional: false, required: false
  public get minDiskSize() {
    return this.getNumberAttribute('min_disk_size');
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

  // os_type - computed: true, optional: false, required: false
  public get osType() {
    return this.getStringAttribute('os_type');
  }

  // pooled - computed: true, optional: false, required: false
  public get pooled() {
    return this.getBooleanAttribute('pooled');
  }

  // product_ids - computed: true, optional: false, required: false
  public get productIds() {
    return cdktf.Fn.tolist(this.getListAttribute('product_ids'));
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      family: cdktf.stringToTerraform(this._family),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      family: {
        value: cdktf.stringToHclTerraform(this._family),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
