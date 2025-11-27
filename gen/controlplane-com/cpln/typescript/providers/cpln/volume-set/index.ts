// https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/volume_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VolumeSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the volume set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/volume_set#description VolumeSet#description}
  */
  readonly description?: string;
  /**
  * Each volume set has a single, immutable file system. Valid types: `xfs` or `ext4`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/volume_set#file_system_type VolumeSet#file_system_type}
  */
  readonly fileSystemType?: string;
  /**
  * Name of the associated GVC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/volume_set#gvc VolumeSet#gvc}
  */
  readonly gvc: string;
  /**
  * The initial volume size in this set, specified in GB. The minimum size for the performance class `general-purpose-ssd` is `10 GB`, while `high-throughput-ssd` requires at least `200 GB`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/volume_set#initial_capacity VolumeSet#initial_capacity}
  */
  readonly initialCapacity: number;
  /**
  * Name of the volume set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/volume_set#name VolumeSet#name}
  */
  readonly name: string;
  /**
  * Each volume set has a single, immutable, performance class. Valid classes: `general-purpose-ssd` or `high-throughput-ssd`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/volume_set#performance_class VolumeSet#performance_class}
  */
  readonly performanceClass: string;
  /**
  * For self-hosted locations only. The storage class used for volumes in this set will be {performanceClass}-{fileSystemType}-{storageClassSuffix} if it exists, otherwise it will be {performanceClass}-{fileSystemType}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/volume_set#storage_class_suffix VolumeSet#storage_class_suffix}
  */
  readonly storageClassSuffix?: string;
  /**
  * Key-value map of resource tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/volume_set#tags VolumeSet#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * autoscaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/volume_set#autoscaling VolumeSet#autoscaling}
  */
  readonly autoscaling?: VolumeSetAutoscaling[] | cdktf.IResolvable;
  /**
  * custom_encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/volume_set#custom_encryption VolumeSet#custom_encryption}
  */
  readonly customEncryption?: VolumeSetCustomEncryption[] | cdktf.IResolvable;
  /**
  * mount_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/volume_set#mount_options VolumeSet#mount_options}
  */
  readonly mountOptions?: VolumeSetMountOptions[] | cdktf.IResolvable;
  /**
  * snapshots block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/volume_set#snapshots VolumeSet#snapshots}
  */
  readonly snapshots?: VolumeSetSnapshots[] | cdktf.IResolvable;
}
export interface VolumeSetStatus {
}

export function volumeSetStatusToTerraform(struct?: VolumeSetStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function volumeSetStatusToHclTerraform(struct?: VolumeSetStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VolumeSetStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VolumeSetStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeSetStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // binding_id - computed: true, optional: false, required: false
  public get bindingId() {
    return this.getStringAttribute('binding_id');
  }

  // locations - computed: true, optional: false, required: false
  public get locations() {
    return cdktf.Fn.tolist(this.getListAttribute('locations'));
  }

  // parent_id - computed: true, optional: false, required: false
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }

  // used_by_workload - computed: true, optional: false, required: false
  public get usedByWorkload() {
    return this.getStringAttribute('used_by_workload');
  }

  // workload_links - computed: true, optional: false, required: false
  public get workloadLinks() {
    return cdktf.Fn.tolist(this.getListAttribute('workload_links'));
  }
}

export class VolumeSetStatusList extends cdktf.ComplexList {

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
  public get(index: number): VolumeSetStatusOutputReference {
    return new VolumeSetStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VolumeSetAutoscaling {
  /**
  * The maximum size in GB for a volume in this set. A volume cannot grow to be bigger than this value. Minimum value: `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/volume_set#max_capacity VolumeSet#max_capacity}
  */
  readonly maxCapacity?: number;
  /**
  * The guaranteed free space on the volume as a percentage of the volume's total size. Control Plane will try to maintain at least that many percent free by scaling up the total size. Minimum percentage: `1`. Maximum Percentage: `100`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/volume_set#min_free_percentage VolumeSet#min_free_percentage}
  */
  readonly minFreePercentage?: number;
  /**
  * When scaling is necessary, then `new_capacity = current_capacity * storageScalingFactor`. Minimum value: `1.1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/volume_set#scaling_factor VolumeSet#scaling_factor}
  */
  readonly scalingFactor?: number;
}

export function volumeSetAutoscalingToTerraform(struct?: VolumeSetAutoscaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_capacity: cdktf.numberToTerraform(struct!.maxCapacity),
    min_free_percentage: cdktf.numberToTerraform(struct!.minFreePercentage),
    scaling_factor: cdktf.numberToTerraform(struct!.scalingFactor),
  }
}


export function volumeSetAutoscalingToHclTerraform(struct?: VolumeSetAutoscaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_capacity: {
      value: cdktf.numberToHclTerraform(struct!.maxCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_free_percentage: {
      value: cdktf.numberToHclTerraform(struct!.minFreePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scaling_factor: {
      value: cdktf.numberToHclTerraform(struct!.scalingFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeSetAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VolumeSetAutoscaling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCapacity = this._maxCapacity;
    }
    if (this._minFreePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.minFreePercentage = this._minFreePercentage;
    }
    if (this._scalingFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingFactor = this._scalingFactor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeSetAutoscaling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxCapacity = undefined;
      this._minFreePercentage = undefined;
      this._scalingFactor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxCapacity = value.maxCapacity;
      this._minFreePercentage = value.minFreePercentage;
      this._scalingFactor = value.scalingFactor;
    }
  }

  // max_capacity - computed: false, optional: true, required: false
  private _maxCapacity?: number; 
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }
  public set maxCapacity(value: number) {
    this._maxCapacity = value;
  }
  public resetMaxCapacity() {
    this._maxCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityInput() {
    return this._maxCapacity;
  }

  // min_free_percentage - computed: false, optional: true, required: false
  private _minFreePercentage?: number; 
  public get minFreePercentage() {
    return this.getNumberAttribute('min_free_percentage');
  }
  public set minFreePercentage(value: number) {
    this._minFreePercentage = value;
  }
  public resetMinFreePercentage() {
    this._minFreePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minFreePercentageInput() {
    return this._minFreePercentage;
  }

  // scaling_factor - computed: false, optional: true, required: false
  private _scalingFactor?: number; 
  public get scalingFactor() {
    return this.getNumberAttribute('scaling_factor');
  }
  public set scalingFactor(value: number) {
    this._scalingFactor = value;
  }
  public resetScalingFactor() {
    this._scalingFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingFactorInput() {
    return this._scalingFactor;
  }
}

export class VolumeSetAutoscalingList extends cdktf.ComplexList {
  public internalValue? : VolumeSetAutoscaling[] | cdktf.IResolvable

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
  public get(index: number): VolumeSetAutoscalingOutputReference {
    return new VolumeSetAutoscalingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VolumeSetCustomEncryptionRegions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/volume_set#key_id VolumeSet#key_id}
  */
  readonly keyId: string;
}

export function volumeSetCustomEncryptionRegionsToTerraform(struct?: VolumeSetCustomEncryptionRegions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_id: cdktf.stringToTerraform(struct!.keyId),
  }
}


export function volumeSetCustomEncryptionRegionsToHclTerraform(struct?: VolumeSetCustomEncryptionRegions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeSetCustomEncryptionRegionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): VolumeSetCustomEncryptionRegions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeSetCustomEncryptionRegions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyId = value.keyId;
    }
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }
}

export class VolumeSetCustomEncryptionRegionsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: VolumeSetCustomEncryptionRegions } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): VolumeSetCustomEncryptionRegionsOutputReference {
    return new VolumeSetCustomEncryptionRegionsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface VolumeSetCustomEncryption {
  /**
  * Map of region identifiers to encryption key configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/volume_set#regions VolumeSet#regions}
  */
  readonly regions: { [key: string]: VolumeSetCustomEncryptionRegions } | cdktf.IResolvable;
}

export function volumeSetCustomEncryptionToTerraform(struct?: VolumeSetCustomEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    regions: cdktf.hashMapper(volumeSetCustomEncryptionRegionsToTerraform)(struct!.regions),
  }
}


export function volumeSetCustomEncryptionToHclTerraform(struct?: VolumeSetCustomEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    regions: {
      value: cdktf.hashMapperHcl(volumeSetCustomEncryptionRegionsToHclTerraform)(struct!.regions),
      isBlock: true,
      type: "map",
      storageClassType: "VolumeSetCustomEncryptionRegionsMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeSetCustomEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VolumeSetCustomEncryption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeSetCustomEncryption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regions.internalValue = value.regions;
    }
  }

  // regions - computed: false, optional: false, required: true
  private _regions = new VolumeSetCustomEncryptionRegionsMap(this, "regions");
  public get regions() {
    return this._regions;
  }
  public putRegions(value: { [key: string]: VolumeSetCustomEncryptionRegions } | cdktf.IResolvable) {
    this._regions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions.internalValue;
  }
}

export class VolumeSetCustomEncryptionList extends cdktf.ComplexList {
  public internalValue? : VolumeSetCustomEncryption[] | cdktf.IResolvable

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
  public get(index: number): VolumeSetCustomEncryptionOutputReference {
    return new VolumeSetCustomEncryptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VolumeSetMountOptionsResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/volume_set#max_cpu VolumeSet#max_cpu}
  */
  readonly maxCpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/volume_set#max_memory VolumeSet#max_memory}
  */
  readonly maxMemory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/volume_set#min_cpu VolumeSet#min_cpu}
  */
  readonly minCpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/volume_set#min_memory VolumeSet#min_memory}
  */
  readonly minMemory?: string;
}

export function volumeSetMountOptionsResourcesToTerraform(struct?: VolumeSetMountOptionsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_cpu: cdktf.stringToTerraform(struct!.maxCpu),
    max_memory: cdktf.stringToTerraform(struct!.maxMemory),
    min_cpu: cdktf.stringToTerraform(struct!.minCpu),
    min_memory: cdktf.stringToTerraform(struct!.minMemory),
  }
}


export function volumeSetMountOptionsResourcesToHclTerraform(struct?: VolumeSetMountOptionsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_cpu: {
      value: cdktf.stringToHclTerraform(struct!.maxCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_memory: {
      value: cdktf.stringToHclTerraform(struct!.maxMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_cpu: {
      value: cdktf.stringToHclTerraform(struct!.minCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_memory: {
      value: cdktf.stringToHclTerraform(struct!.minMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeSetMountOptionsResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VolumeSetMountOptionsResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCpu = this._maxCpu;
    }
    if (this._maxMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMemory = this._maxMemory;
    }
    if (this._minCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpu = this._minCpu;
    }
    if (this._minMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.minMemory = this._minMemory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeSetMountOptionsResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxCpu = undefined;
      this._maxMemory = undefined;
      this._minCpu = undefined;
      this._minMemory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxCpu = value.maxCpu;
      this._maxMemory = value.maxMemory;
      this._minCpu = value.minCpu;
      this._minMemory = value.minMemory;
    }
  }

  // max_cpu - computed: true, optional: true, required: false
  private _maxCpu?: string; 
  public get maxCpu() {
    return this.getStringAttribute('max_cpu');
  }
  public set maxCpu(value: string) {
    this._maxCpu = value;
  }
  public resetMaxCpu() {
    this._maxCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCpuInput() {
    return this._maxCpu;
  }

  // max_memory - computed: true, optional: true, required: false
  private _maxMemory?: string; 
  public get maxMemory() {
    return this.getStringAttribute('max_memory');
  }
  public set maxMemory(value: string) {
    this._maxMemory = value;
  }
  public resetMaxMemory() {
    this._maxMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemoryInput() {
    return this._maxMemory;
  }

  // min_cpu - computed: true, optional: true, required: false
  private _minCpu?: string; 
  public get minCpu() {
    return this.getStringAttribute('min_cpu');
  }
  public set minCpu(value: string) {
    this._minCpu = value;
  }
  public resetMinCpu() {
    this._minCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuInput() {
    return this._minCpu;
  }

  // min_memory - computed: true, optional: true, required: false
  private _minMemory?: string; 
  public get minMemory() {
    return this.getStringAttribute('min_memory');
  }
  public set minMemory(value: string) {
    this._minMemory = value;
  }
  public resetMinMemory() {
    this._minMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minMemoryInput() {
    return this._minMemory;
  }
}

export class VolumeSetMountOptionsResourcesList extends cdktf.ComplexList {
  public internalValue? : VolumeSetMountOptionsResources[] | cdktf.IResolvable

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
  public get(index: number): VolumeSetMountOptionsResourcesOutputReference {
    return new VolumeSetMountOptionsResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VolumeSetMountOptions {
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/volume_set#resources VolumeSet#resources}
  */
  readonly resources?: VolumeSetMountOptionsResources[] | cdktf.IResolvable;
}

export function volumeSetMountOptionsToTerraform(struct?: VolumeSetMountOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: cdktf.listMapper(volumeSetMountOptionsResourcesToTerraform, true)(struct!.resources),
  }
}


export function volumeSetMountOptionsToHclTerraform(struct?: VolumeSetMountOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resources: {
      value: cdktf.listMapperHcl(volumeSetMountOptionsResourcesToHclTerraform, true)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "VolumeSetMountOptionsResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeSetMountOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VolumeSetMountOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeSetMountOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resources.internalValue = value.resources;
    }
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new VolumeSetMountOptionsResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: VolumeSetMountOptionsResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

export class VolumeSetMountOptionsList extends cdktf.ComplexList {
  public internalValue? : VolumeSetMountOptions[] | cdktf.IResolvable

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
  public get(index: number): VolumeSetMountOptionsOutputReference {
    return new VolumeSetMountOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VolumeSetSnapshots {
  /**
  * If true, a volume snapshot will be created immediately before deletion of any volume in this set. Default: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/volume_set#create_final_snapshot VolumeSet#create_final_snapshot}
  */
  readonly createFinalSnapshot?: boolean | cdktf.IResolvable;
  /**
  * The default retention period for volume snapshots. This string should contain a floating point number followed by either d, h, or m. For example, "10d" would retain snapshots for 10 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/volume_set#retention_duration VolumeSet#retention_duration}
  */
  readonly retentionDuration?: string;
  /**
  * A standard cron schedule expression used to determine when a snapshot will be taken. (i.e., `0 * * * *` Every hour). Note: snapshots cannot be scheduled more often than once per hour.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/volume_set#schedule VolumeSet#schedule}
  */
  readonly schedule?: string;
}

export function volumeSetSnapshotsToTerraform(struct?: VolumeSetSnapshots | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_final_snapshot: cdktf.booleanToTerraform(struct!.createFinalSnapshot),
    retention_duration: cdktf.stringToTerraform(struct!.retentionDuration),
    schedule: cdktf.stringToTerraform(struct!.schedule),
  }
}


export function volumeSetSnapshotsToHclTerraform(struct?: VolumeSetSnapshots | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_final_snapshot: {
      value: cdktf.booleanToHclTerraform(struct!.createFinalSnapshot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retention_duration: {
      value: cdktf.stringToHclTerraform(struct!.retentionDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeSetSnapshotsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VolumeSetSnapshots | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createFinalSnapshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.createFinalSnapshot = this._createFinalSnapshot;
    }
    if (this._retentionDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDuration = this._retentionDuration;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeSetSnapshots | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createFinalSnapshot = undefined;
      this._retentionDuration = undefined;
      this._schedule = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createFinalSnapshot = value.createFinalSnapshot;
      this._retentionDuration = value.retentionDuration;
      this._schedule = value.schedule;
    }
  }

  // create_final_snapshot - computed: true, optional: true, required: false
  private _createFinalSnapshot?: boolean | cdktf.IResolvable; 
  public get createFinalSnapshot() {
    return this.getBooleanAttribute('create_final_snapshot');
  }
  public set createFinalSnapshot(value: boolean | cdktf.IResolvable) {
    this._createFinalSnapshot = value;
  }
  public resetCreateFinalSnapshot() {
    this._createFinalSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createFinalSnapshotInput() {
    return this._createFinalSnapshot;
  }

  // retention_duration - computed: false, optional: true, required: false
  private _retentionDuration?: string; 
  public get retentionDuration() {
    return this.getStringAttribute('retention_duration');
  }
  public set retentionDuration(value: string) {
    this._retentionDuration = value;
  }
  public resetRetentionDuration() {
    this._retentionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDurationInput() {
    return this._retentionDuration;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }
}

export class VolumeSetSnapshotsList extends cdktf.ComplexList {
  public internalValue? : VolumeSetSnapshots[] | cdktf.IResolvable

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
  public get(index: number): VolumeSetSnapshotsOutputReference {
    return new VolumeSetSnapshotsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/volume_set cpln_volume_set}
*/
export class VolumeSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cpln_volume_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VolumeSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VolumeSet to import
  * @param importFromId The id of the existing VolumeSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/volume_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VolumeSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cpln_volume_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/resources/volume_set cpln_volume_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VolumeSetConfig
  */
  public constructor(scope: Construct, id: string, config: VolumeSetConfig) {
    super(scope, id, {
      terraformResourceType: 'cpln_volume_set',
      terraformGeneratorMetadata: {
        providerName: 'cpln',
        providerVersion: '1.2.17',
        providerVersionConstraint: '1.2.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._fileSystemType = config.fileSystemType;
    this._gvc = config.gvc;
    this._initialCapacity = config.initialCapacity;
    this._name = config.name;
    this._performanceClass = config.performanceClass;
    this._storageClassSuffix = config.storageClassSuffix;
    this._tags = config.tags;
    this._autoscaling.internalValue = config.autoscaling;
    this._customEncryption.internalValue = config.customEncryption;
    this._mountOptions.internalValue = config.mountOptions;
    this._snapshots.internalValue = config.snapshots;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpln_id - computed: true, optional: false, required: false
  public get cplnId() {
    return this.getStringAttribute('cpln_id');
  }

  // description - computed: true, optional: true, required: false
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

  // file_system_type - computed: true, optional: true, required: false
  private _fileSystemType?: string; 
  public get fileSystemType() {
    return this.getStringAttribute('file_system_type');
  }
  public set fileSystemType(value: string) {
    this._fileSystemType = value;
  }
  public resetFileSystemType() {
    this._fileSystemType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemTypeInput() {
    return this._fileSystemType;
  }

  // gvc - computed: false, optional: false, required: true
  private _gvc?: string; 
  public get gvc() {
    return this.getStringAttribute('gvc');
  }
  public set gvc(value: string) {
    this._gvc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gvcInput() {
    return this._gvc;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // initial_capacity - computed: false, optional: false, required: true
  private _initialCapacity?: number; 
  public get initialCapacity() {
    return this.getNumberAttribute('initial_capacity');
  }
  public set initialCapacity(value: number) {
    this._initialCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get initialCapacityInput() {
    return this._initialCapacity;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // performance_class - computed: false, optional: false, required: true
  private _performanceClass?: string; 
  public get performanceClass() {
    return this.getStringAttribute('performance_class');
  }
  public set performanceClass(value: string) {
    this._performanceClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceClassInput() {
    return this._performanceClass;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // status - computed: true, optional: false, required: false
  private _status = new VolumeSetStatusList(this, "status", false);
  public get status() {
    return this._status;
  }

  // storage_class_suffix - computed: false, optional: true, required: false
  private _storageClassSuffix?: string; 
  public get storageClassSuffix() {
    return this.getStringAttribute('storage_class_suffix');
  }
  public set storageClassSuffix(value: string) {
    this._storageClassSuffix = value;
  }
  public resetStorageClassSuffix() {
    this._storageClassSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassSuffixInput() {
    return this._storageClassSuffix;
  }

  // tags - computed: true, optional: true, required: false
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

  // volumeset_link - computed: true, optional: false, required: false
  public get volumesetLink() {
    return this.getStringAttribute('volumeset_link');
  }

  // autoscaling - computed: false, optional: true, required: false
  private _autoscaling = new VolumeSetAutoscalingList(this, "autoscaling", false);
  public get autoscaling() {
    return this._autoscaling;
  }
  public putAutoscaling(value: VolumeSetAutoscaling[] | cdktf.IResolvable) {
    this._autoscaling.internalValue = value;
  }
  public resetAutoscaling() {
    this._autoscaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingInput() {
    return this._autoscaling.internalValue;
  }

  // custom_encryption - computed: false, optional: true, required: false
  private _customEncryption = new VolumeSetCustomEncryptionList(this, "custom_encryption", false);
  public get customEncryption() {
    return this._customEncryption;
  }
  public putCustomEncryption(value: VolumeSetCustomEncryption[] | cdktf.IResolvable) {
    this._customEncryption.internalValue = value;
  }
  public resetCustomEncryption() {
    this._customEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEncryptionInput() {
    return this._customEncryption.internalValue;
  }

  // mount_options - computed: false, optional: true, required: false
  private _mountOptions = new VolumeSetMountOptionsList(this, "mount_options", false);
  public get mountOptions() {
    return this._mountOptions;
  }
  public putMountOptions(value: VolumeSetMountOptions[] | cdktf.IResolvable) {
    this._mountOptions.internalValue = value;
  }
  public resetMountOptions() {
    this._mountOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions.internalValue;
  }

  // snapshots - computed: false, optional: true, required: false
  private _snapshots = new VolumeSetSnapshotsList(this, "snapshots", false);
  public get snapshots() {
    return this._snapshots;
  }
  public putSnapshots(value: VolumeSetSnapshots[] | cdktf.IResolvable) {
    this._snapshots.internalValue = value;
  }
  public resetSnapshots() {
    this._snapshots.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotsInput() {
    return this._snapshots.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      file_system_type: cdktf.stringToTerraform(this._fileSystemType),
      gvc: cdktf.stringToTerraform(this._gvc),
      initial_capacity: cdktf.numberToTerraform(this._initialCapacity),
      name: cdktf.stringToTerraform(this._name),
      performance_class: cdktf.stringToTerraform(this._performanceClass),
      storage_class_suffix: cdktf.stringToTerraform(this._storageClassSuffix),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      autoscaling: cdktf.listMapper(volumeSetAutoscalingToTerraform, true)(this._autoscaling.internalValue),
      custom_encryption: cdktf.listMapper(volumeSetCustomEncryptionToTerraform, true)(this._customEncryption.internalValue),
      mount_options: cdktf.listMapper(volumeSetMountOptionsToTerraform, true)(this._mountOptions.internalValue),
      snapshots: cdktf.listMapper(volumeSetSnapshotsToTerraform, true)(this._snapshots.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_system_type: {
        value: cdktf.stringToHclTerraform(this._fileSystemType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gvc: {
        value: cdktf.stringToHclTerraform(this._gvc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      initial_capacity: {
        value: cdktf.numberToHclTerraform(this._initialCapacity),
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
      performance_class: {
        value: cdktf.stringToHclTerraform(this._performanceClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_class_suffix: {
        value: cdktf.stringToHclTerraform(this._storageClassSuffix),
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
      autoscaling: {
        value: cdktf.listMapperHcl(volumeSetAutoscalingToHclTerraform, true)(this._autoscaling.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VolumeSetAutoscalingList",
      },
      custom_encryption: {
        value: cdktf.listMapperHcl(volumeSetCustomEncryptionToHclTerraform, true)(this._customEncryption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VolumeSetCustomEncryptionList",
      },
      mount_options: {
        value: cdktf.listMapperHcl(volumeSetMountOptionsToHclTerraform, true)(this._mountOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VolumeSetMountOptionsList",
      },
      snapshots: {
        value: cdktf.listMapperHcl(volumeSetSnapshotsToHclTerraform, true)(this._snapshots.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VolumeSetSnapshotsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
