// https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/compute_disk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexComputeDiskConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of a specific disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/compute_disk#disk_id DataYandexComputeDisk#disk_id}
  */
  readonly diskId?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/compute_disk#folder_id DataYandexComputeDisk#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/compute_disk#id DataYandexComputeDisk#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/compute_disk#name DataYandexComputeDisk#name}
  */
  readonly name?: string;
  /**
  * disk_placement_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/compute_disk#disk_placement_policy DataYandexComputeDisk#disk_placement_policy}
  */
  readonly diskPlacementPolicy?: DataYandexComputeDiskDiskPlacementPolicy;
}
export interface DataYandexComputeDiskHardwareGenerationGeneration2Features {
}

export function dataYandexComputeDiskHardwareGenerationGeneration2FeaturesToTerraform(struct?: DataYandexComputeDiskHardwareGenerationGeneration2Features): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexComputeDiskHardwareGenerationGeneration2FeaturesToHclTerraform(struct?: DataYandexComputeDiskHardwareGenerationGeneration2Features): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexComputeDiskHardwareGenerationGeneration2FeaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexComputeDiskHardwareGenerationGeneration2Features | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeDiskHardwareGenerationGeneration2Features | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class DataYandexComputeDiskHardwareGenerationGeneration2FeaturesList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexComputeDiskHardwareGenerationGeneration2FeaturesOutputReference {
    return new DataYandexComputeDiskHardwareGenerationGeneration2FeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeDiskHardwareGenerationLegacyFeatures {
}

export function dataYandexComputeDiskHardwareGenerationLegacyFeaturesToTerraform(struct?: DataYandexComputeDiskHardwareGenerationLegacyFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexComputeDiskHardwareGenerationLegacyFeaturesToHclTerraform(struct?: DataYandexComputeDiskHardwareGenerationLegacyFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexComputeDiskHardwareGenerationLegacyFeaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexComputeDiskHardwareGenerationLegacyFeatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeDiskHardwareGenerationLegacyFeatures | undefined) {
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

export class DataYandexComputeDiskHardwareGenerationLegacyFeaturesList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexComputeDiskHardwareGenerationLegacyFeaturesOutputReference {
    return new DataYandexComputeDiskHardwareGenerationLegacyFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeDiskHardwareGeneration {
}

export function dataYandexComputeDiskHardwareGenerationToTerraform(struct?: DataYandexComputeDiskHardwareGeneration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexComputeDiskHardwareGenerationToHclTerraform(struct?: DataYandexComputeDiskHardwareGeneration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexComputeDiskHardwareGenerationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexComputeDiskHardwareGeneration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeDiskHardwareGeneration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // generation2_features - computed: true, optional: false, required: false
  private _generation2Features = new DataYandexComputeDiskHardwareGenerationGeneration2FeaturesList(this, "generation2_features", false);
  public get generation2Features() {
    return this._generation2Features;
  }

  // legacy_features - computed: true, optional: false, required: false
  private _legacyFeatures = new DataYandexComputeDiskHardwareGenerationLegacyFeaturesList(this, "legacy_features", false);
  public get legacyFeatures() {
    return this._legacyFeatures;
  }
}

export class DataYandexComputeDiskHardwareGenerationList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexComputeDiskHardwareGenerationOutputReference {
    return new DataYandexComputeDiskHardwareGenerationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexComputeDiskDiskPlacementPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/compute_disk#disk_placement_group_id DataYandexComputeDisk#disk_placement_group_id}
  */
  readonly diskPlacementGroupId: string;
}

export function dataYandexComputeDiskDiskPlacementPolicyToTerraform(struct?: DataYandexComputeDiskDiskPlacementPolicyOutputReference | DataYandexComputeDiskDiskPlacementPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_placement_group_id: cdktf.stringToTerraform(struct!.diskPlacementGroupId),
  }
}


export function dataYandexComputeDiskDiskPlacementPolicyToHclTerraform(struct?: DataYandexComputeDiskDiskPlacementPolicyOutputReference | DataYandexComputeDiskDiskPlacementPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_placement_group_id: {
      value: cdktf.stringToHclTerraform(struct!.diskPlacementGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexComputeDiskDiskPlacementPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexComputeDiskDiskPlacementPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskPlacementGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskPlacementGroupId = this._diskPlacementGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexComputeDiskDiskPlacementPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskPlacementGroupId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskPlacementGroupId = value.diskPlacementGroupId;
    }
  }

  // disk_placement_group_id - computed: false, optional: false, required: true
  private _diskPlacementGroupId?: string; 
  public get diskPlacementGroupId() {
    return this.getStringAttribute('disk_placement_group_id');
  }
  public set diskPlacementGroupId(value: string) {
    this._diskPlacementGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskPlacementGroupIdInput() {
    return this._diskPlacementGroupId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/compute_disk yandex_compute_disk}
*/
export class DataYandexComputeDisk extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_compute_disk";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataYandexComputeDisk resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataYandexComputeDisk to import
  * @param importFromId The id of the existing DataYandexComputeDisk that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/compute_disk#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataYandexComputeDisk to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_compute_disk", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/compute_disk yandex_compute_disk} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexComputeDiskConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexComputeDiskConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_compute_disk',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.172.0',
        providerVersionConstraint: '0.172.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._diskId = config.diskId;
    this._folderId = config.folderId;
    this._id = config.id;
    this._name = config.name;
    this._diskPlacementPolicy.internalValue = config.diskPlacementPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block_size - computed: true, optional: false, required: false
  public get blockSize() {
    return this.getNumberAttribute('block_size');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disk_id - computed: true, optional: true, required: false
  private _diskId?: string; 
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }
  public set diskId(value: string) {
    this._diskId = value;
  }
  public resetDiskId() {
    this._diskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId;
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
  private _hardwareGeneration = new DataYandexComputeDiskHardwareGenerationList(this, "hardware_generation", false);
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

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // instance_ids - computed: true, optional: false, required: false
  public get instanceIds() {
    return this.getListAttribute('instance_ids');
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

  // product_ids - computed: true, optional: false, required: false
  public get productIds() {
    return this.getListAttribute('product_ids');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // snapshot_id - computed: true, optional: false, required: false
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }

  // disk_placement_policy - computed: false, optional: true, required: false
  private _diskPlacementPolicy = new DataYandexComputeDiskDiskPlacementPolicyOutputReference(this, "disk_placement_policy");
  public get diskPlacementPolicy() {
    return this._diskPlacementPolicy;
  }
  public putDiskPlacementPolicy(value: DataYandexComputeDiskDiskPlacementPolicy) {
    this._diskPlacementPolicy.internalValue = value;
  }
  public resetDiskPlacementPolicy() {
    this._diskPlacementPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskPlacementPolicyInput() {
    return this._diskPlacementPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disk_id: cdktf.stringToTerraform(this._diskId),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      disk_placement_policy: dataYandexComputeDiskDiskPlacementPolicyToTerraform(this._diskPlacementPolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disk_id: {
        value: cdktf.stringToHclTerraform(this._diskId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_placement_policy: {
        value: dataYandexComputeDiskDiskPlacementPolicyToHclTerraform(this._diskPlacementPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataYandexComputeDiskDiskPlacementPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
