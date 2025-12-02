// https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#allow_recreate ComputeInstance#allow_recreate}
  */
  readonly allowRecreate?: boolean | cdktf.IResolvable;
  /**
  * If `true`, allows Terraform to stop the instance in order to update its properties. If you try to update a property that requires stopping the instance without setting this field, the update will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#allow_stopping_for_update ComputeInstance#allow_stopping_for_update}
  */
  readonly allowStoppingForUpdate?: boolean | cdktf.IResolvable;
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#description ComputeInstance#description}
  */
  readonly description?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#folder_id ComputeInstance#folder_id}
  */
  readonly folderId?: string;
  /**
  * ID of the GPU cluster to attach this instance to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#gpu_cluster_id ComputeInstance#gpu_cluster_id}
  */
  readonly gpuClusterId?: string;
  /**
  * Host name for the instance. This field is used to generate the instance `fqdn` value. The host name must be unique within the network and region. If not specified, the host name will be equal to `id` of the instance and `fqdn` will be `<id>.auto.internal`. Otherwise FQDN will be `<hostname>.<region_id>.internal`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#hostname ComputeInstance#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#id ComputeInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#labels ComputeInstance#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Time between notification via metadata service and maintenance. E.g., `60s`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#maintenance_grace_period ComputeInstance#maintenance_grace_period}
  */
  readonly maintenanceGracePeriod?: string;
  /**
  * Behavior on maintenance events. Can be: `unspecified`, `migrate`, `restart`. The default is `unspecified`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#maintenance_policy ComputeInstance#maintenance_policy}
  */
  readonly maintenancePolicy?: string;
  /**
  * Metadata key/value pairs to make available from within the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#metadata ComputeInstance#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#name ComputeInstance#name}
  */
  readonly name?: string;
  /**
  * Type of network acceleration. Can be `standard` or `software_accelerated`. The default is `standard`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#network_acceleration_type ComputeInstance#network_acceleration_type}
  */
  readonly networkAccelerationType?: string;
  /**
  * The type of virtual machine to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#platform_id ComputeInstance#platform_id}
  */
  readonly platformId?: string;
  /**
  * [Service account](https://yandex.cloud/docs/iam/concepts/users/service-accounts) which linked to the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#service_account_id ComputeInstance#service_account_id}
  */
  readonly serviceAccountId?: string;
  /**
  * The [availability zone](https://yandex.cloud/docs/overview/concepts/geo-scope) where resource is located. If it is not provided, the default provider zone will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#zone ComputeInstance#zone}
  */
  readonly zone?: string;
  /**
  * boot_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#boot_disk ComputeInstance#boot_disk}
  */
  readonly bootDisk: ComputeInstanceBootDisk;
  /**
  * filesystem block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#filesystem ComputeInstance#filesystem}
  */
  readonly filesystem?: ComputeInstanceFilesystem[] | cdktf.IResolvable;
  /**
  * local_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#local_disk ComputeInstance#local_disk}
  */
  readonly localDisk?: ComputeInstanceLocalDisk[] | cdktf.IResolvable;
  /**
  * metadata_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#metadata_options ComputeInstance#metadata_options}
  */
  readonly metadataOptions?: ComputeInstanceMetadataOptions;
  /**
  * network_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#network_interface ComputeInstance#network_interface}
  */
  readonly networkInterface: ComputeInstanceNetworkInterface[] | cdktf.IResolvable;
  /**
  * placement_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#placement_policy ComputeInstance#placement_policy}
  */
  readonly placementPolicy?: ComputeInstancePlacementPolicy;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#resources ComputeInstance#resources}
  */
  readonly resources: ComputeInstanceResources;
  /**
  * scheduling_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#scheduling_policy ComputeInstance#scheduling_policy}
  */
  readonly schedulingPolicy?: ComputeInstanceSchedulingPolicy;
  /**
  * secondary_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#secondary_disk ComputeInstance#secondary_disk}
  */
  readonly secondaryDisk?: ComputeInstanceSecondaryDisk[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#timeouts ComputeInstance#timeouts}
  */
  readonly timeouts?: ComputeInstanceTimeouts;
}
export interface ComputeInstanceHardwareGenerationGeneration2Features {
}

export function computeInstanceHardwareGenerationGeneration2FeaturesToTerraform(struct?: ComputeInstanceHardwareGenerationGeneration2Features): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function computeInstanceHardwareGenerationGeneration2FeaturesToHclTerraform(struct?: ComputeInstanceHardwareGenerationGeneration2Features): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeInstanceHardwareGenerationGeneration2FeaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceHardwareGenerationGeneration2Features | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceHardwareGenerationGeneration2Features | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class ComputeInstanceHardwareGenerationGeneration2FeaturesList extends cdktf.ComplexList {

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
  public get(index: number): ComputeInstanceHardwareGenerationGeneration2FeaturesOutputReference {
    return new ComputeInstanceHardwareGenerationGeneration2FeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceHardwareGenerationLegacyFeatures {
}

export function computeInstanceHardwareGenerationLegacyFeaturesToTerraform(struct?: ComputeInstanceHardwareGenerationLegacyFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function computeInstanceHardwareGenerationLegacyFeaturesToHclTerraform(struct?: ComputeInstanceHardwareGenerationLegacyFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeInstanceHardwareGenerationLegacyFeaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceHardwareGenerationLegacyFeatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceHardwareGenerationLegacyFeatures | undefined) {
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

export class ComputeInstanceHardwareGenerationLegacyFeaturesList extends cdktf.ComplexList {

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
  public get(index: number): ComputeInstanceHardwareGenerationLegacyFeaturesOutputReference {
    return new ComputeInstanceHardwareGenerationLegacyFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceHardwareGeneration {
}

export function computeInstanceHardwareGenerationToTerraform(struct?: ComputeInstanceHardwareGeneration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function computeInstanceHardwareGenerationToHclTerraform(struct?: ComputeInstanceHardwareGeneration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeInstanceHardwareGenerationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceHardwareGeneration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceHardwareGeneration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // generation2_features - computed: true, optional: false, required: false
  private _generation2Features = new ComputeInstanceHardwareGenerationGeneration2FeaturesList(this, "generation2_features", false);
  public get generation2Features() {
    return this._generation2Features;
  }

  // legacy_features - computed: true, optional: false, required: false
  private _legacyFeatures = new ComputeInstanceHardwareGenerationLegacyFeaturesList(this, "legacy_features", false);
  public get legacyFeatures() {
    return this._legacyFeatures;
  }
}

export class ComputeInstanceHardwareGenerationList extends cdktf.ComplexList {

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
  public get(index: number): ComputeInstanceHardwareGenerationOutputReference {
    return new ComputeInstanceHardwareGenerationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceBootDiskInitializeParams {
  /**
  * Block size of the disk, specified in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#block_size ComputeInstance#block_size}
  */
  readonly blockSize?: number;
  /**
  * Description of the boot disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#description ComputeInstance#description}
  */
  readonly description?: string;
  /**
  * A disk image to initialize this disk from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#image_id ComputeInstance#image_id}
  */
  readonly imageId?: string;
  /**
  * ID of KMS symmetric key used to encrypt disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#kms_key_id ComputeInstance#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Name of the boot disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#name ComputeInstance#name}
  */
  readonly name?: string;
  /**
  * Size of the disk in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#size ComputeInstance#size}
  */
  readonly size?: number;
  /**
  * A snapshot to initialize this disk from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#snapshot_id ComputeInstance#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Disk type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#type ComputeInstance#type}
  */
  readonly type?: string;
}

export function computeInstanceBootDiskInitializeParamsToTerraform(struct?: ComputeInstanceBootDiskInitializeParamsOutputReference | ComputeInstanceBootDiskInitializeParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_size: cdktf.numberToTerraform(struct!.blockSize),
    description: cdktf.stringToTerraform(struct!.description),
    image_id: cdktf.stringToTerraform(struct!.imageId),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    name: cdktf.stringToTerraform(struct!.name),
    size: cdktf.numberToTerraform(struct!.size),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function computeInstanceBootDiskInitializeParamsToHclTerraform(struct?: ComputeInstanceBootDiskInitializeParamsOutputReference | ComputeInstanceBootDiskInitializeParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_size: {
      value: cdktf.numberToHclTerraform(struct!.blockSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_id: {
      value: cdktf.stringToHclTerraform(struct!.imageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snapshot_id: {
      value: cdktf.stringToHclTerraform(struct!.snapshotId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceBootDiskInitializeParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstanceBootDiskInitializeParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockSize = this._blockSize;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._imageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageId = this._imageId;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._snapshotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotId = this._snapshotId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceBootDiskInitializeParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockSize = undefined;
      this._description = undefined;
      this._imageId = undefined;
      this._kmsKeyId = undefined;
      this._name = undefined;
      this._size = undefined;
      this._snapshotId = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockSize = value.blockSize;
      this._description = value.description;
      this._imageId = value.imageId;
      this._kmsKeyId = value.kmsKeyId;
      this._name = value.name;
      this._size = value.size;
      this._snapshotId = value.snapshotId;
      this._type = value.type;
    }
  }

  // block_size - computed: true, optional: true, required: false
  private _blockSize?: number; 
  public get blockSize() {
    return this.getNumberAttribute('block_size');
  }
  public set blockSize(value: number) {
    this._blockSize = value;
  }
  public resetBlockSize() {
    this._blockSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockSizeInput() {
    return this._blockSize;
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

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
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

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // snapshot_id - computed: true, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ComputeInstanceBootDisk {
  /**
  * Defines whether the disk will be auto-deleted when the instance is deleted. The default value is `True`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#auto_delete ComputeInstance#auto_delete}
  */
  readonly autoDelete?: boolean | cdktf.IResolvable;
  /**
  * Name that can be used to access an attached disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#device_name ComputeInstance#device_name}
  */
  readonly deviceName?: string;
  /**
  * The ID of the existing disk (such as those managed by `yandex_compute_disk`) to attach as a boot disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#disk_id ComputeInstance#disk_id}
  */
  readonly diskId?: string;
  /**
  * Type of access to the disk resource. By default, a disk is attached in `READ_WRITE` mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#mode ComputeInstance#mode}
  */
  readonly mode?: string;
  /**
  * initialize_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#initialize_params ComputeInstance#initialize_params}
  */
  readonly initializeParams?: ComputeInstanceBootDiskInitializeParams;
}

export function computeInstanceBootDiskToTerraform(struct?: ComputeInstanceBootDiskOutputReference | ComputeInstanceBootDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_delete: cdktf.booleanToTerraform(struct!.autoDelete),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    disk_id: cdktf.stringToTerraform(struct!.diskId),
    mode: cdktf.stringToTerraform(struct!.mode),
    initialize_params: computeInstanceBootDiskInitializeParamsToTerraform(struct!.initializeParams),
  }
}


export function computeInstanceBootDiskToHclTerraform(struct?: ComputeInstanceBootDiskOutputReference | ComputeInstanceBootDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_delete: {
      value: cdktf.booleanToHclTerraform(struct!.autoDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    device_name: {
      value: cdktf.stringToHclTerraform(struct!.deviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_id: {
      value: cdktf.stringToHclTerraform(struct!.diskId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initialize_params: {
      value: computeInstanceBootDiskInitializeParamsToHclTerraform(struct!.initializeParams),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeInstanceBootDiskInitializeParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceBootDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstanceBootDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDelete = this._autoDelete;
    }
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._diskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskId = this._diskId;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._initializeParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initializeParams = this._initializeParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceBootDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoDelete = undefined;
      this._deviceName = undefined;
      this._diskId = undefined;
      this._mode = undefined;
      this._initializeParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoDelete = value.autoDelete;
      this._deviceName = value.deviceName;
      this._diskId = value.diskId;
      this._mode = value.mode;
      this._initializeParams.internalValue = value.initializeParams;
    }
  }

  // auto_delete - computed: false, optional: true, required: false
  private _autoDelete?: boolean | cdktf.IResolvable; 
  public get autoDelete() {
    return this.getBooleanAttribute('auto_delete');
  }
  public set autoDelete(value: boolean | cdktf.IResolvable) {
    this._autoDelete = value;
  }
  public resetAutoDelete() {
    this._autoDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeleteInput() {
    return this._autoDelete;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
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

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // initialize_params - computed: false, optional: true, required: false
  private _initializeParams = new ComputeInstanceBootDiskInitializeParamsOutputReference(this, "initialize_params");
  public get initializeParams() {
    return this._initializeParams;
  }
  public putInitializeParams(value: ComputeInstanceBootDiskInitializeParams) {
    this._initializeParams.internalValue = value;
  }
  public resetInitializeParams() {
    this._initializeParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initializeParamsInput() {
    return this._initializeParams.internalValue;
  }
}
export interface ComputeInstanceFilesystem {
  /**
  * Name of the device representing the filesystem on the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#device_name ComputeInstance#device_name}
  */
  readonly deviceName?: string;
  /**
  * ID of the filesystem that should be attached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#filesystem_id ComputeInstance#filesystem_id}
  */
  readonly filesystemId: string;
  /**
  * Mode of access to the filesystem that should be attached. By default, filesystem is attached in `READ_WRITE` mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#mode ComputeInstance#mode}
  */
  readonly mode?: string;
}

export function computeInstanceFilesystemToTerraform(struct?: ComputeInstanceFilesystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    filesystem_id: cdktf.stringToTerraform(struct!.filesystemId),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function computeInstanceFilesystemToHclTerraform(struct?: ComputeInstanceFilesystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_name: {
      value: cdktf.stringToHclTerraform(struct!.deviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filesystem_id: {
      value: cdktf.stringToHclTerraform(struct!.filesystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceFilesystemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceFilesystem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._filesystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.filesystemId = this._filesystemId;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceFilesystem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceName = undefined;
      this._filesystemId = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceName = value.deviceName;
      this._filesystemId = value.filesystemId;
      this._mode = value.mode;
    }
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // filesystem_id - computed: false, optional: false, required: true
  private _filesystemId?: string; 
  public get filesystemId() {
    return this.getStringAttribute('filesystem_id');
  }
  public set filesystemId(value: string) {
    this._filesystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemIdInput() {
    return this._filesystemId;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}

export class ComputeInstanceFilesystemList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceFilesystem[] | cdktf.IResolvable

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
  public get(index: number): ComputeInstanceFilesystemOutputReference {
    return new ComputeInstanceFilesystemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceLocalDisk {
  /**
  * Size of the disk, specified in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#size_bytes ComputeInstance#size_bytes}
  */
  readonly sizeBytes: number;
}

export function computeInstanceLocalDiskToTerraform(struct?: ComputeInstanceLocalDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size_bytes: cdktf.numberToTerraform(struct!.sizeBytes),
  }
}


export function computeInstanceLocalDiskToHclTerraform(struct?: ComputeInstanceLocalDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    size_bytes: {
      value: cdktf.numberToHclTerraform(struct!.sizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceLocalDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceLocalDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeBytes = this._sizeBytes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceLocalDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sizeBytes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sizeBytes = value.sizeBytes;
    }
  }

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // size_bytes - computed: false, optional: false, required: true
  private _sizeBytes?: number; 
  public get sizeBytes() {
    return this.getNumberAttribute('size_bytes');
  }
  public set sizeBytes(value: number) {
    this._sizeBytes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeBytesInput() {
    return this._sizeBytes;
  }
}

export class ComputeInstanceLocalDiskList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceLocalDisk[] | cdktf.IResolvable

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
  public get(index: number): ComputeInstanceLocalDiskOutputReference {
    return new ComputeInstanceLocalDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceMetadataOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#aws_v1_http_endpoint ComputeInstance#aws_v1_http_endpoint}
  */
  readonly awsV1HttpEndpoint?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#aws_v1_http_token ComputeInstance#aws_v1_http_token}
  */
  readonly awsV1HttpToken?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#gce_http_endpoint ComputeInstance#gce_http_endpoint}
  */
  readonly gceHttpEndpoint?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#gce_http_token ComputeInstance#gce_http_token}
  */
  readonly gceHttpToken?: number;
}

export function computeInstanceMetadataOptionsToTerraform(struct?: ComputeInstanceMetadataOptionsOutputReference | ComputeInstanceMetadataOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_v1_http_endpoint: cdktf.numberToTerraform(struct!.awsV1HttpEndpoint),
    aws_v1_http_token: cdktf.numberToTerraform(struct!.awsV1HttpToken),
    gce_http_endpoint: cdktf.numberToTerraform(struct!.gceHttpEndpoint),
    gce_http_token: cdktf.numberToTerraform(struct!.gceHttpToken),
  }
}


export function computeInstanceMetadataOptionsToHclTerraform(struct?: ComputeInstanceMetadataOptionsOutputReference | ComputeInstanceMetadataOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_v1_http_endpoint: {
      value: cdktf.numberToHclTerraform(struct!.awsV1HttpEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aws_v1_http_token: {
      value: cdktf.numberToHclTerraform(struct!.awsV1HttpToken),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gce_http_endpoint: {
      value: cdktf.numberToHclTerraform(struct!.gceHttpEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gce_http_token: {
      value: cdktf.numberToHclTerraform(struct!.gceHttpToken),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceMetadataOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstanceMetadataOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsV1HttpEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsV1HttpEndpoint = this._awsV1HttpEndpoint;
    }
    if (this._awsV1HttpToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsV1HttpToken = this._awsV1HttpToken;
    }
    if (this._gceHttpEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.gceHttpEndpoint = this._gceHttpEndpoint;
    }
    if (this._gceHttpToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.gceHttpToken = this._gceHttpToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceMetadataOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsV1HttpEndpoint = undefined;
      this._awsV1HttpToken = undefined;
      this._gceHttpEndpoint = undefined;
      this._gceHttpToken = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsV1HttpEndpoint = value.awsV1HttpEndpoint;
      this._awsV1HttpToken = value.awsV1HttpToken;
      this._gceHttpEndpoint = value.gceHttpEndpoint;
      this._gceHttpToken = value.gceHttpToken;
    }
  }

  // aws_v1_http_endpoint - computed: true, optional: true, required: false
  private _awsV1HttpEndpoint?: number; 
  public get awsV1HttpEndpoint() {
    return this.getNumberAttribute('aws_v1_http_endpoint');
  }
  public set awsV1HttpEndpoint(value: number) {
    this._awsV1HttpEndpoint = value;
  }
  public resetAwsV1HttpEndpoint() {
    this._awsV1HttpEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsV1HttpEndpointInput() {
    return this._awsV1HttpEndpoint;
  }

  // aws_v1_http_token - computed: true, optional: true, required: false
  private _awsV1HttpToken?: number; 
  public get awsV1HttpToken() {
    return this.getNumberAttribute('aws_v1_http_token');
  }
  public set awsV1HttpToken(value: number) {
    this._awsV1HttpToken = value;
  }
  public resetAwsV1HttpToken() {
    this._awsV1HttpToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsV1HttpTokenInput() {
    return this._awsV1HttpToken;
  }

  // gce_http_endpoint - computed: true, optional: true, required: false
  private _gceHttpEndpoint?: number; 
  public get gceHttpEndpoint() {
    return this.getNumberAttribute('gce_http_endpoint');
  }
  public set gceHttpEndpoint(value: number) {
    this._gceHttpEndpoint = value;
  }
  public resetGceHttpEndpoint() {
    this._gceHttpEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gceHttpEndpointInput() {
    return this._gceHttpEndpoint;
  }

  // gce_http_token - computed: true, optional: true, required: false
  private _gceHttpToken?: number; 
  public get gceHttpToken() {
    return this.getNumberAttribute('gce_http_token');
  }
  public set gceHttpToken(value: number) {
    this._gceHttpToken = value;
  }
  public resetGceHttpToken() {
    this._gceHttpToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gceHttpTokenInput() {
    return this._gceHttpToken;
  }
}
export interface ComputeInstanceNetworkInterfaceDnsRecord {
  /**
  * DNS zone ID (if not set, private zone used).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#dns_zone_id ComputeInstance#dns_zone_id}
  */
  readonly dnsZoneId?: string;
  /**
  * DNS record FQDN (must have a dot at the end).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#fqdn ComputeInstance#fqdn}
  */
  readonly fqdn: string;
  /**
  * When set to `true`, also create a PTR DNS record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#ptr ComputeInstance#ptr}
  */
  readonly ptr?: boolean | cdktf.IResolvable;
  /**
  * DNS record TTL in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#ttl ComputeInstance#ttl}
  */
  readonly ttl?: number;
}

export function computeInstanceNetworkInterfaceDnsRecordToTerraform(struct?: ComputeInstanceNetworkInterfaceDnsRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_zone_id: cdktf.stringToTerraform(struct!.dnsZoneId),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ptr: cdktf.booleanToTerraform(struct!.ptr),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function computeInstanceNetworkInterfaceDnsRecordToHclTerraform(struct?: ComputeInstanceNetworkInterfaceDnsRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_zone_id: {
      value: cdktf.stringToHclTerraform(struct!.dnsZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ptr: {
      value: cdktf.booleanToHclTerraform(struct!.ptr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceNetworkInterfaceDnsRecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceNetworkInterfaceDnsRecord | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsZoneId = this._dnsZoneId;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._ptr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ptr = this._ptr;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceNetworkInterfaceDnsRecord | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsZoneId = undefined;
      this._fqdn = undefined;
      this._ptr = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsZoneId = value.dnsZoneId;
      this._fqdn = value.fqdn;
      this._ptr = value.ptr;
      this._ttl = value.ttl;
    }
  }

  // dns_zone_id - computed: false, optional: true, required: false
  private _dnsZoneId?: string; 
  public get dnsZoneId() {
    return this.getStringAttribute('dns_zone_id');
  }
  public set dnsZoneId(value: string) {
    this._dnsZoneId = value;
  }
  public resetDnsZoneId() {
    this._dnsZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsZoneIdInput() {
    return this._dnsZoneId;
  }

  // fqdn - computed: false, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // ptr - computed: false, optional: true, required: false
  private _ptr?: boolean | cdktf.IResolvable; 
  public get ptr() {
    return this.getBooleanAttribute('ptr');
  }
  public set ptr(value: boolean | cdktf.IResolvable) {
    this._ptr = value;
  }
  public resetPtr() {
    this._ptr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptrInput() {
    return this._ptr;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}

export class ComputeInstanceNetworkInterfaceDnsRecordList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceNetworkInterfaceDnsRecord[] | cdktf.IResolvable

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
  public get(index: number): ComputeInstanceNetworkInterfaceDnsRecordOutputReference {
    return new ComputeInstanceNetworkInterfaceDnsRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceNetworkInterfaceIpv6DnsRecord {
  /**
  * DNS zone ID (if not set, private zone used).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#dns_zone_id ComputeInstance#dns_zone_id}
  */
  readonly dnsZoneId?: string;
  /**
  * DNS record FQDN (must have a dot at the end).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#fqdn ComputeInstance#fqdn}
  */
  readonly fqdn: string;
  /**
  * When set to `true`, also create a PTR DNS record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#ptr ComputeInstance#ptr}
  */
  readonly ptr?: boolean | cdktf.IResolvable;
  /**
  * DNS record TTL in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#ttl ComputeInstance#ttl}
  */
  readonly ttl?: number;
}

export function computeInstanceNetworkInterfaceIpv6DnsRecordToTerraform(struct?: ComputeInstanceNetworkInterfaceIpv6DnsRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_zone_id: cdktf.stringToTerraform(struct!.dnsZoneId),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ptr: cdktf.booleanToTerraform(struct!.ptr),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function computeInstanceNetworkInterfaceIpv6DnsRecordToHclTerraform(struct?: ComputeInstanceNetworkInterfaceIpv6DnsRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_zone_id: {
      value: cdktf.stringToHclTerraform(struct!.dnsZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ptr: {
      value: cdktf.booleanToHclTerraform(struct!.ptr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceNetworkInterfaceIpv6DnsRecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceNetworkInterfaceIpv6DnsRecord | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsZoneId = this._dnsZoneId;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._ptr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ptr = this._ptr;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceNetworkInterfaceIpv6DnsRecord | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsZoneId = undefined;
      this._fqdn = undefined;
      this._ptr = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsZoneId = value.dnsZoneId;
      this._fqdn = value.fqdn;
      this._ptr = value.ptr;
      this._ttl = value.ttl;
    }
  }

  // dns_zone_id - computed: false, optional: true, required: false
  private _dnsZoneId?: string; 
  public get dnsZoneId() {
    return this.getStringAttribute('dns_zone_id');
  }
  public set dnsZoneId(value: string) {
    this._dnsZoneId = value;
  }
  public resetDnsZoneId() {
    this._dnsZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsZoneIdInput() {
    return this._dnsZoneId;
  }

  // fqdn - computed: false, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // ptr - computed: false, optional: true, required: false
  private _ptr?: boolean | cdktf.IResolvable; 
  public get ptr() {
    return this.getBooleanAttribute('ptr');
  }
  public set ptr(value: boolean | cdktf.IResolvable) {
    this._ptr = value;
  }
  public resetPtr() {
    this._ptr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptrInput() {
    return this._ptr;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}

export class ComputeInstanceNetworkInterfaceIpv6DnsRecordList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceNetworkInterfaceIpv6DnsRecord[] | cdktf.IResolvable

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
  public get(index: number): ComputeInstanceNetworkInterfaceIpv6DnsRecordOutputReference {
    return new ComputeInstanceNetworkInterfaceIpv6DnsRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceNetworkInterfaceNatDnsRecord {
  /**
  * DNS zone ID (if not set, private zone used).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#dns_zone_id ComputeInstance#dns_zone_id}
  */
  readonly dnsZoneId?: string;
  /**
  * DNS record FQDN (must have a dot at the end).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#fqdn ComputeInstance#fqdn}
  */
  readonly fqdn: string;
  /**
  * When set to `true`, also create a PTR DNS record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#ptr ComputeInstance#ptr}
  */
  readonly ptr?: boolean | cdktf.IResolvable;
  /**
  * DNS record TTL in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#ttl ComputeInstance#ttl}
  */
  readonly ttl?: number;
}

export function computeInstanceNetworkInterfaceNatDnsRecordToTerraform(struct?: ComputeInstanceNetworkInterfaceNatDnsRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_zone_id: cdktf.stringToTerraform(struct!.dnsZoneId),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ptr: cdktf.booleanToTerraform(struct!.ptr),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function computeInstanceNetworkInterfaceNatDnsRecordToHclTerraform(struct?: ComputeInstanceNetworkInterfaceNatDnsRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_zone_id: {
      value: cdktf.stringToHclTerraform(struct!.dnsZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ptr: {
      value: cdktf.booleanToHclTerraform(struct!.ptr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceNetworkInterfaceNatDnsRecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceNetworkInterfaceNatDnsRecord | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsZoneId = this._dnsZoneId;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._ptr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ptr = this._ptr;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceNetworkInterfaceNatDnsRecord | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsZoneId = undefined;
      this._fqdn = undefined;
      this._ptr = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsZoneId = value.dnsZoneId;
      this._fqdn = value.fqdn;
      this._ptr = value.ptr;
      this._ttl = value.ttl;
    }
  }

  // dns_zone_id - computed: false, optional: true, required: false
  private _dnsZoneId?: string; 
  public get dnsZoneId() {
    return this.getStringAttribute('dns_zone_id');
  }
  public set dnsZoneId(value: string) {
    this._dnsZoneId = value;
  }
  public resetDnsZoneId() {
    this._dnsZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsZoneIdInput() {
    return this._dnsZoneId;
  }

  // fqdn - computed: false, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // ptr - computed: false, optional: true, required: false
  private _ptr?: boolean | cdktf.IResolvable; 
  public get ptr() {
    return this.getBooleanAttribute('ptr');
  }
  public set ptr(value: boolean | cdktf.IResolvable) {
    this._ptr = value;
  }
  public resetPtr() {
    this._ptr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptrInput() {
    return this._ptr;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}

export class ComputeInstanceNetworkInterfaceNatDnsRecordList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceNetworkInterfaceNatDnsRecord[] | cdktf.IResolvable

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
  public get(index: number): ComputeInstanceNetworkInterfaceNatDnsRecordOutputReference {
    return new ComputeInstanceNetworkInterfaceNatDnsRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceNetworkInterface {
  /**
  * Index of network interface, will be calculated automatically for instance create or update operations if not specified. Required for attach/detach operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#index ComputeInstance#index}
  */
  readonly index?: number;
  /**
  * The private IP address to assign to the instance. If empty, the address will be automatically assigned from the specified subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#ip_address ComputeInstance#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Allocate an IPv4 address for the interface. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#ipv4 ComputeInstance#ipv4}
  */
  readonly ipv4?: boolean | cdktf.IResolvable;
  /**
  * If `true`, allocate an IPv6 address for the interface. The address will be automatically assigned from the specified subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#ipv6 ComputeInstance#ipv6}
  */
  readonly ipv6?: boolean | cdktf.IResolvable;
  /**
  * The private IPv6 address to assign to the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#ipv6_address ComputeInstance#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Provide a public address, for instance, to access the internet over NAT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#nat ComputeInstance#nat}
  */
  readonly nat?: boolean | cdktf.IResolvable;
  /**
  * Provide a public address, for instance, to access the internet over NAT. Address should be already reserved in web UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#nat_ip_address ComputeInstance#nat_ip_address}
  */
  readonly natIpAddress?: string;
  /**
  * Security Group (SG) IDs for network interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#security_group_ids ComputeInstance#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * ID of the subnet to attach this interface to. The subnet must exist in the same zone where this instance will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#subnet_id ComputeInstance#subnet_id}
  */
  readonly subnetId: string;
  /**
  * dns_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#dns_record ComputeInstance#dns_record}
  */
  readonly dnsRecord?: ComputeInstanceNetworkInterfaceDnsRecord[] | cdktf.IResolvable;
  /**
  * ipv6_dns_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#ipv6_dns_record ComputeInstance#ipv6_dns_record}
  */
  readonly ipv6DnsRecord?: ComputeInstanceNetworkInterfaceIpv6DnsRecord[] | cdktf.IResolvable;
  /**
  * nat_dns_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#nat_dns_record ComputeInstance#nat_dns_record}
  */
  readonly natDnsRecord?: ComputeInstanceNetworkInterfaceNatDnsRecord[] | cdktf.IResolvable;
}

export function computeInstanceNetworkInterfaceToTerraform(struct?: ComputeInstanceNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.numberToTerraform(struct!.index),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ipv4: cdktf.booleanToTerraform(struct!.ipv4),
    ipv6: cdktf.booleanToTerraform(struct!.ipv6),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    nat: cdktf.booleanToTerraform(struct!.nat),
    nat_ip_address: cdktf.stringToTerraform(struct!.natIpAddress),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    dns_record: cdktf.listMapper(computeInstanceNetworkInterfaceDnsRecordToTerraform, true)(struct!.dnsRecord),
    ipv6_dns_record: cdktf.listMapper(computeInstanceNetworkInterfaceIpv6DnsRecordToTerraform, true)(struct!.ipv6DnsRecord),
    nat_dns_record: cdktf.listMapper(computeInstanceNetworkInterfaceNatDnsRecordToTerraform, true)(struct!.natDnsRecord),
  }
}


export function computeInstanceNetworkInterfaceToHclTerraform(struct?: ComputeInstanceNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4: {
      value: cdktf.booleanToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv6: {
      value: cdktf.booleanToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat: {
      value: cdktf.booleanToHclTerraform(struct!.nat),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nat_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.natIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_record: {
      value: cdktf.listMapperHcl(computeInstanceNetworkInterfaceDnsRecordToHclTerraform, true)(struct!.dnsRecord),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeInstanceNetworkInterfaceDnsRecordList",
    },
    ipv6_dns_record: {
      value: cdktf.listMapperHcl(computeInstanceNetworkInterfaceIpv6DnsRecordToHclTerraform, true)(struct!.ipv6DnsRecord),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeInstanceNetworkInterfaceIpv6DnsRecordList",
    },
    nat_dns_record: {
      value: cdktf.listMapperHcl(computeInstanceNetworkInterfaceNatDnsRecordToHclTerraform, true)(struct!.natDnsRecord),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeInstanceNetworkInterfaceNatDnsRecordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceNetworkInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceNetworkInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._nat !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat = this._nat;
    }
    if (this._natIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.natIpAddress = this._natIpAddress;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._dnsRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecord = this._dnsRecord?.internalValue;
    }
    if (this._ipv6DnsRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6DnsRecord = this._ipv6DnsRecord?.internalValue;
    }
    if (this._natDnsRecord?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.natDnsRecord = this._natDnsRecord?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceNetworkInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._index = undefined;
      this._ipAddress = undefined;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
      this._ipv6Address = undefined;
      this._nat = undefined;
      this._natIpAddress = undefined;
      this._securityGroupIds = undefined;
      this._subnetId = undefined;
      this._dnsRecord.internalValue = undefined;
      this._ipv6DnsRecord.internalValue = undefined;
      this._natDnsRecord.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._index = value.index;
      this._ipAddress = value.ipAddress;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
      this._ipv6Address = value.ipv6Address;
      this._nat = value.nat;
      this._natIpAddress = value.natIpAddress;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetId = value.subnetId;
      this._dnsRecord.internalValue = value.dnsRecord;
      this._ipv6DnsRecord.internalValue = value.ipv6DnsRecord;
      this._natDnsRecord.internalValue = value.natDnsRecord;
    }
  }

  // index - computed: true, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4?: boolean | cdktf.IResolvable; 
  public get ipv4() {
    return this.getBooleanAttribute('ipv4');
  }
  public set ipv4(value: boolean | cdktf.IResolvable) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: true, required: false
  private _ipv6?: boolean | cdktf.IResolvable; 
  public get ipv6() {
    return this.getBooleanAttribute('ipv6');
  }
  public set ipv6(value: boolean | cdktf.IResolvable) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // ipv6_address - computed: true, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // nat - computed: false, optional: true, required: false
  private _nat?: boolean | cdktf.IResolvable; 
  public get nat() {
    return this.getBooleanAttribute('nat');
  }
  public set nat(value: boolean | cdktf.IResolvable) {
    this._nat = value;
  }
  public resetNat() {
    this._nat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natInput() {
    return this._nat;
  }

  // nat_ip_address - computed: true, optional: true, required: false
  private _natIpAddress?: string; 
  public get natIpAddress() {
    return this.getStringAttribute('nat_ip_address');
  }
  public set natIpAddress(value: string) {
    this._natIpAddress = value;
  }
  public resetNatIpAddress() {
    this._natIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpAddressInput() {
    return this._natIpAddress;
  }

  // nat_ip_version - computed: true, optional: false, required: false
  public get natIpVersion() {
    return this.getStringAttribute('nat_ip_version');
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // dns_record - computed: false, optional: true, required: false
  private _dnsRecord = new ComputeInstanceNetworkInterfaceDnsRecordList(this, "dns_record", false);
  public get dnsRecord() {
    return this._dnsRecord;
  }
  public putDnsRecord(value: ComputeInstanceNetworkInterfaceDnsRecord[] | cdktf.IResolvable) {
    this._dnsRecord.internalValue = value;
  }
  public resetDnsRecord() {
    this._dnsRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecordInput() {
    return this._dnsRecord.internalValue;
  }

  // ipv6_dns_record - computed: false, optional: true, required: false
  private _ipv6DnsRecord = new ComputeInstanceNetworkInterfaceIpv6DnsRecordList(this, "ipv6_dns_record", false);
  public get ipv6DnsRecord() {
    return this._ipv6DnsRecord;
  }
  public putIpv6DnsRecord(value: ComputeInstanceNetworkInterfaceIpv6DnsRecord[] | cdktf.IResolvable) {
    this._ipv6DnsRecord.internalValue = value;
  }
  public resetIpv6DnsRecord() {
    this._ipv6DnsRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DnsRecordInput() {
    return this._ipv6DnsRecord.internalValue;
  }

  // nat_dns_record - computed: false, optional: true, required: false
  private _natDnsRecord = new ComputeInstanceNetworkInterfaceNatDnsRecordList(this, "nat_dns_record", false);
  public get natDnsRecord() {
    return this._natDnsRecord;
  }
  public putNatDnsRecord(value: ComputeInstanceNetworkInterfaceNatDnsRecord[] | cdktf.IResolvable) {
    this._natDnsRecord.internalValue = value;
  }
  public resetNatDnsRecord() {
    this._natDnsRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natDnsRecordInput() {
    return this._natDnsRecord.internalValue;
  }
}

export class ComputeInstanceNetworkInterfaceList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceNetworkInterface[] | cdktf.IResolvable

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
  public get(index: number): ComputeInstanceNetworkInterfaceOutputReference {
    return new ComputeInstanceNetworkInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstancePlacementPolicyHostAffinityRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#key ComputeInstance#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#op ComputeInstance#op}
  */
  readonly op?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#values ComputeInstance#values}
  */
  readonly values?: string[];
}

export function computeInstancePlacementPolicyHostAffinityRulesToTerraform(struct?: ComputeInstancePlacementPolicyHostAffinityRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    op: cdktf.stringToTerraform(struct!.op),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function computeInstancePlacementPolicyHostAffinityRulesToHclTerraform(struct?: ComputeInstancePlacementPolicyHostAffinityRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstancePlacementPolicyHostAffinityRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstancePlacementPolicyHostAffinityRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstancePlacementPolicyHostAffinityRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._op = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._op = value.op;
      this._values = value.values;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // op - computed: true, optional: true, required: false
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  public resetOp() {
    this._op = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ComputeInstancePlacementPolicyHostAffinityRulesList extends cdktf.ComplexList {
  public internalValue? : ComputeInstancePlacementPolicyHostAffinityRules[] | cdktf.IResolvable

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
  public get(index: number): ComputeInstancePlacementPolicyHostAffinityRulesOutputReference {
    return new ComputeInstancePlacementPolicyHostAffinityRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstancePlacementPolicy {
  /**
  * List of host affinity rules.
  * 
  * ~> Due to terraform limitations, simply deleting the `placement_policy` fields does not work. To reset the values of these fields, you need to set them empty:
  * 
  * placement_policy {
  *     placement_group_id = ""
  *     host_affinity_rules = []
  * }
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#host_affinity_rules ComputeInstance#host_affinity_rules}
  */
  readonly hostAffinityRules?: ComputeInstancePlacementPolicyHostAffinityRules[] | cdktf.IResolvable;
  /**
  * Specifies the id of the Placement Group to assign to the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#placement_group_id ComputeInstance#placement_group_id}
  */
  readonly placementGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#placement_group_partition ComputeInstance#placement_group_partition}
  */
  readonly placementGroupPartition?: number;
}

export function computeInstancePlacementPolicyToTerraform(struct?: ComputeInstancePlacementPolicyOutputReference | ComputeInstancePlacementPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_affinity_rules: cdktf.listMapper(computeInstancePlacementPolicyHostAffinityRulesToTerraform, false)(struct!.hostAffinityRules),
    placement_group_id: cdktf.stringToTerraform(struct!.placementGroupId),
    placement_group_partition: cdktf.numberToTerraform(struct!.placementGroupPartition),
  }
}


export function computeInstancePlacementPolicyToHclTerraform(struct?: ComputeInstancePlacementPolicyOutputReference | ComputeInstancePlacementPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_affinity_rules: {
      value: cdktf.listMapperHcl(computeInstancePlacementPolicyHostAffinityRulesToHclTerraform, false)(struct!.hostAffinityRules),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeInstancePlacementPolicyHostAffinityRulesList",
    },
    placement_group_id: {
      value: cdktf.stringToHclTerraform(struct!.placementGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    placement_group_partition: {
      value: cdktf.numberToHclTerraform(struct!.placementGroupPartition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstancePlacementPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstancePlacementPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostAffinityRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostAffinityRules = this._hostAffinityRules?.internalValue;
    }
    if (this._placementGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementGroupId = this._placementGroupId;
    }
    if (this._placementGroupPartition !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementGroupPartition = this._placementGroupPartition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstancePlacementPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostAffinityRules.internalValue = undefined;
      this._placementGroupId = undefined;
      this._placementGroupPartition = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostAffinityRules.internalValue = value.hostAffinityRules;
      this._placementGroupId = value.placementGroupId;
      this._placementGroupPartition = value.placementGroupPartition;
    }
  }

  // host_affinity_rules - computed: true, optional: true, required: false
  private _hostAffinityRules = new ComputeInstancePlacementPolicyHostAffinityRulesList(this, "host_affinity_rules", false);
  public get hostAffinityRules() {
    return this._hostAffinityRules;
  }
  public putHostAffinityRules(value: ComputeInstancePlacementPolicyHostAffinityRules[] | cdktf.IResolvable) {
    this._hostAffinityRules.internalValue = value;
  }
  public resetHostAffinityRules() {
    this._hostAffinityRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAffinityRulesInput() {
    return this._hostAffinityRules.internalValue;
  }

  // placement_group_id - computed: false, optional: true, required: false
  private _placementGroupId?: string; 
  public get placementGroupId() {
    return this.getStringAttribute('placement_group_id');
  }
  public set placementGroupId(value: string) {
    this._placementGroupId = value;
  }
  public resetPlacementGroupId() {
    this._placementGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementGroupIdInput() {
    return this._placementGroupId;
  }

  // placement_group_partition - computed: false, optional: true, required: false
  private _placementGroupPartition?: number; 
  public get placementGroupPartition() {
    return this.getNumberAttribute('placement_group_partition');
  }
  public set placementGroupPartition(value: number) {
    this._placementGroupPartition = value;
  }
  public resetPlacementGroupPartition() {
    this._placementGroupPartition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementGroupPartitionInput() {
    return this._placementGroupPartition;
  }
}
export interface ComputeInstanceResources {
  /**
  * If provided, specifies baseline performance for a core as a percent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#core_fraction ComputeInstance#core_fraction}
  */
  readonly coreFraction?: number;
  /**
  * CPU cores for the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#cores ComputeInstance#cores}
  */
  readonly cores: number;
  /**
  * If provided, specifies the number of GPU devices for the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#gpus ComputeInstance#gpus}
  */
  readonly gpus?: number;
  /**
  * Memory size in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#memory ComputeInstance#memory}
  */
  readonly memory: number;
}

export function computeInstanceResourcesToTerraform(struct?: ComputeInstanceResourcesOutputReference | ComputeInstanceResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    core_fraction: cdktf.numberToTerraform(struct!.coreFraction),
    cores: cdktf.numberToTerraform(struct!.cores),
    gpus: cdktf.numberToTerraform(struct!.gpus),
    memory: cdktf.numberToTerraform(struct!.memory),
  }
}


export function computeInstanceResourcesToHclTerraform(struct?: ComputeInstanceResourcesOutputReference | ComputeInstanceResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    core_fraction: {
      value: cdktf.numberToHclTerraform(struct!.coreFraction),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cores: {
      value: cdktf.numberToHclTerraform(struct!.cores),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gpus: {
      value: cdktf.numberToHclTerraform(struct!.gpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory: {
      value: cdktf.numberToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstanceResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coreFraction !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreFraction = this._coreFraction;
    }
    if (this._cores !== undefined) {
      hasAnyValues = true;
      internalValueResult.cores = this._cores;
    }
    if (this._gpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpus = this._gpus;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._coreFraction = undefined;
      this._cores = undefined;
      this._gpus = undefined;
      this._memory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._coreFraction = value.coreFraction;
      this._cores = value.cores;
      this._gpus = value.gpus;
      this._memory = value.memory;
    }
  }

  // core_fraction - computed: false, optional: true, required: false
  private _coreFraction?: number; 
  public get coreFraction() {
    return this.getNumberAttribute('core_fraction');
  }
  public set coreFraction(value: number) {
    this._coreFraction = value;
  }
  public resetCoreFraction() {
    this._coreFraction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreFractionInput() {
    return this._coreFraction;
  }

  // cores - computed: false, optional: false, required: true
  private _cores?: number; 
  public get cores() {
    return this.getNumberAttribute('cores');
  }
  public set cores(value: number) {
    this._cores = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coresInput() {
    return this._cores;
  }

  // gpus - computed: false, optional: true, required: false
  private _gpus?: number; 
  public get gpus() {
    return this.getNumberAttribute('gpus');
  }
  public set gpus(value: number) {
    this._gpus = value;
  }
  public resetGpus() {
    this._gpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpusInput() {
    return this._gpus;
  }

  // memory - computed: false, optional: false, required: true
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface ComputeInstanceSchedulingPolicy {
  /**
  * Specifies if the instance is preemptible. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#preemptible ComputeInstance#preemptible}
  */
  readonly preemptible?: boolean | cdktf.IResolvable;
}

export function computeInstanceSchedulingPolicyToTerraform(struct?: ComputeInstanceSchedulingPolicyOutputReference | ComputeInstanceSchedulingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preemptible: cdktf.booleanToTerraform(struct!.preemptible),
  }
}


export function computeInstanceSchedulingPolicyToHclTerraform(struct?: ComputeInstanceSchedulingPolicyOutputReference | ComputeInstanceSchedulingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preemptible: {
      value: cdktf.booleanToHclTerraform(struct!.preemptible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceSchedulingPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstanceSchedulingPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preemptible !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptible = this._preemptible;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceSchedulingPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preemptible = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preemptible = value.preemptible;
    }
  }

  // preemptible - computed: false, optional: true, required: false
  private _preemptible?: boolean | cdktf.IResolvable; 
  public get preemptible() {
    return this.getBooleanAttribute('preemptible');
  }
  public set preemptible(value: boolean | cdktf.IResolvable) {
    this._preemptible = value;
  }
  public resetPreemptible() {
    this._preemptible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptibleInput() {
    return this._preemptible;
  }
}
export interface ComputeInstanceSecondaryDisk {
  /**
  * Whether the disk is auto-deleted when the instance is deleted. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#auto_delete ComputeInstance#auto_delete}
  */
  readonly autoDelete?: boolean | cdktf.IResolvable;
  /**
  * Name that can be used to access an attached disk under `/dev/disk/by-id/`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#device_name ComputeInstance#device_name}
  */
  readonly deviceName?: string;
  /**
  * ID of the disk that is attached to the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#disk_id ComputeInstance#disk_id}
  */
  readonly diskId: string;
  /**
  * Type of access to the disk resource. By default, a disk is attached in `READ_WRITE` mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#mode ComputeInstance#mode}
  */
  readonly mode?: string;
}

export function computeInstanceSecondaryDiskToTerraform(struct?: ComputeInstanceSecondaryDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_delete: cdktf.booleanToTerraform(struct!.autoDelete),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    disk_id: cdktf.stringToTerraform(struct!.diskId),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function computeInstanceSecondaryDiskToHclTerraform(struct?: ComputeInstanceSecondaryDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_delete: {
      value: cdktf.booleanToHclTerraform(struct!.autoDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    device_name: {
      value: cdktf.stringToHclTerraform(struct!.deviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_id: {
      value: cdktf.stringToHclTerraform(struct!.diskId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceSecondaryDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceSecondaryDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDelete = this._autoDelete;
    }
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._diskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskId = this._diskId;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceSecondaryDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoDelete = undefined;
      this._deviceName = undefined;
      this._diskId = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoDelete = value.autoDelete;
      this._deviceName = value.deviceName;
      this._diskId = value.diskId;
      this._mode = value.mode;
    }
  }

  // auto_delete - computed: false, optional: true, required: false
  private _autoDelete?: boolean | cdktf.IResolvable; 
  public get autoDelete() {
    return this.getBooleanAttribute('auto_delete');
  }
  public set autoDelete(value: boolean | cdktf.IResolvable) {
    this._autoDelete = value;
  }
  public resetAutoDelete() {
    this._autoDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeleteInput() {
    return this._autoDelete;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // disk_id - computed: false, optional: false, required: true
  private _diskId?: string; 
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }
  public set diskId(value: string) {
    this._diskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}

export class ComputeInstanceSecondaryDiskList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceSecondaryDisk[] | cdktf.IResolvable

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
  public get(index: number): ComputeInstanceSecondaryDiskOutputReference {
    return new ComputeInstanceSecondaryDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#create ComputeInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#delete ComputeInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#update ComputeInstance#update}
  */
  readonly update?: string;
}

export function computeInstanceTimeoutsToTerraform(struct?: ComputeInstanceTimeouts | cdktf.IResolvable): any {
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


export function computeInstanceTimeoutsToHclTerraform(struct?: ComputeInstanceTimeouts | cdktf.IResolvable): any {
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

export class ComputeInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance yandex_compute_instance}
*/
export class ComputeInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_compute_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeInstance to import
  * @param importFromId The id of the existing ComputeInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_compute_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/compute_instance yandex_compute_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_compute_instance',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.173.0',
        providerVersionConstraint: '0.173.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowRecreate = config.allowRecreate;
    this._allowStoppingForUpdate = config.allowStoppingForUpdate;
    this._description = config.description;
    this._folderId = config.folderId;
    this._gpuClusterId = config.gpuClusterId;
    this._hostname = config.hostname;
    this._id = config.id;
    this._labels = config.labels;
    this._maintenanceGracePeriod = config.maintenanceGracePeriod;
    this._maintenancePolicy = config.maintenancePolicy;
    this._metadata = config.metadata;
    this._name = config.name;
    this._networkAccelerationType = config.networkAccelerationType;
    this._platformId = config.platformId;
    this._serviceAccountId = config.serviceAccountId;
    this._zone = config.zone;
    this._bootDisk.internalValue = config.bootDisk;
    this._filesystem.internalValue = config.filesystem;
    this._localDisk.internalValue = config.localDisk;
    this._metadataOptions.internalValue = config.metadataOptions;
    this._networkInterface.internalValue = config.networkInterface;
    this._placementPolicy.internalValue = config.placementPolicy;
    this._resources.internalValue = config.resources;
    this._schedulingPolicy.internalValue = config.schedulingPolicy;
    this._secondaryDisk.internalValue = config.secondaryDisk;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_recreate - computed: false, optional: true, required: false
  private _allowRecreate?: boolean | cdktf.IResolvable; 
  public get allowRecreate() {
    return this.getBooleanAttribute('allow_recreate');
  }
  public set allowRecreate(value: boolean | cdktf.IResolvable) {
    this._allowRecreate = value;
  }
  public resetAllowRecreate() {
    this._allowRecreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRecreateInput() {
    return this._allowRecreate;
  }

  // allow_stopping_for_update - computed: false, optional: true, required: false
  private _allowStoppingForUpdate?: boolean | cdktf.IResolvable; 
  public get allowStoppingForUpdate() {
    return this.getBooleanAttribute('allow_stopping_for_update');
  }
  public set allowStoppingForUpdate(value: boolean | cdktf.IResolvable) {
    this._allowStoppingForUpdate = value;
  }
  public resetAllowStoppingForUpdate() {
    this._allowStoppingForUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowStoppingForUpdateInput() {
    return this._allowStoppingForUpdate;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // gpu_cluster_id - computed: true, optional: true, required: false
  private _gpuClusterId?: string; 
  public get gpuClusterId() {
    return this.getStringAttribute('gpu_cluster_id');
  }
  public set gpuClusterId(value: string) {
    this._gpuClusterId = value;
  }
  public resetGpuClusterId() {
    this._gpuClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuClusterIdInput() {
    return this._gpuClusterId;
  }

  // hardware_generation - computed: true, optional: false, required: false
  private _hardwareGeneration = new ComputeInstanceHardwareGenerationList(this, "hardware_generation", false);
  public get hardwareGeneration() {
    return this._hardwareGeneration;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // maintenance_grace_period - computed: true, optional: true, required: false
  private _maintenanceGracePeriod?: string; 
  public get maintenanceGracePeriod() {
    return this.getStringAttribute('maintenance_grace_period');
  }
  public set maintenanceGracePeriod(value: string) {
    this._maintenanceGracePeriod = value;
  }
  public resetMaintenanceGracePeriod() {
    this._maintenanceGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceGracePeriodInput() {
    return this._maintenanceGracePeriod;
  }

  // maintenance_policy - computed: true, optional: true, required: false
  private _maintenancePolicy?: string; 
  public get maintenancePolicy() {
    return this.getStringAttribute('maintenance_policy');
  }
  public set maintenancePolicy(value: string) {
    this._maintenancePolicy = value;
  }
  public resetMaintenancePolicy() {
    this._maintenancePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenancePolicyInput() {
    return this._maintenancePolicy;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // name - computed: false, optional: true, required: false
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

  // network_acceleration_type - computed: false, optional: true, required: false
  private _networkAccelerationType?: string; 
  public get networkAccelerationType() {
    return this.getStringAttribute('network_acceleration_type');
  }
  public set networkAccelerationType(value: string) {
    this._networkAccelerationType = value;
  }
  public resetNetworkAccelerationType() {
    this._networkAccelerationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAccelerationTypeInput() {
    return this._networkAccelerationType;
  }

  // platform_id - computed: false, optional: true, required: false
  private _platformId?: string; 
  public get platformId() {
    return this.getStringAttribute('platform_id');
  }
  public set platformId(value: string) {
    this._platformId = value;
  }
  public resetPlatformId() {
    this._platformId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformIdInput() {
    return this._platformId;
  }

  // service_account_id - computed: false, optional: true, required: false
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  public resetServiceAccountId() {
    this._serviceAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // boot_disk - computed: false, optional: false, required: true
  private _bootDisk = new ComputeInstanceBootDiskOutputReference(this, "boot_disk");
  public get bootDisk() {
    return this._bootDisk;
  }
  public putBootDisk(value: ComputeInstanceBootDisk) {
    this._bootDisk.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskInput() {
    return this._bootDisk.internalValue;
  }

  // filesystem - computed: false, optional: true, required: false
  private _filesystem = new ComputeInstanceFilesystemList(this, "filesystem", true);
  public get filesystem() {
    return this._filesystem;
  }
  public putFilesystem(value: ComputeInstanceFilesystem[] | cdktf.IResolvable) {
    this._filesystem.internalValue = value;
  }
  public resetFilesystem() {
    this._filesystem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemInput() {
    return this._filesystem.internalValue;
  }

  // local_disk - computed: false, optional: true, required: false
  private _localDisk = new ComputeInstanceLocalDiskList(this, "local_disk", false);
  public get localDisk() {
    return this._localDisk;
  }
  public putLocalDisk(value: ComputeInstanceLocalDisk[] | cdktf.IResolvable) {
    this._localDisk.internalValue = value;
  }
  public resetLocalDisk() {
    this._localDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDiskInput() {
    return this._localDisk.internalValue;
  }

  // metadata_options - computed: false, optional: true, required: false
  private _metadataOptions = new ComputeInstanceMetadataOptionsOutputReference(this, "metadata_options");
  public get metadataOptions() {
    return this._metadataOptions;
  }
  public putMetadataOptions(value: ComputeInstanceMetadataOptions) {
    this._metadataOptions.internalValue = value;
  }
  public resetMetadataOptions() {
    this._metadataOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataOptionsInput() {
    return this._metadataOptions.internalValue;
  }

  // network_interface - computed: false, optional: false, required: true
  private _networkInterface = new ComputeInstanceNetworkInterfaceList(this, "network_interface", false);
  public get networkInterface() {
    return this._networkInterface;
  }
  public putNetworkInterface(value: ComputeInstanceNetworkInterface[] | cdktf.IResolvable) {
    this._networkInterface.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface.internalValue;
  }

  // placement_policy - computed: false, optional: true, required: false
  private _placementPolicy = new ComputeInstancePlacementPolicyOutputReference(this, "placement_policy");
  public get placementPolicy() {
    return this._placementPolicy;
  }
  public putPlacementPolicy(value: ComputeInstancePlacementPolicy) {
    this._placementPolicy.internalValue = value;
  }
  public resetPlacementPolicy() {
    this._placementPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementPolicyInput() {
    return this._placementPolicy.internalValue;
  }

  // resources - computed: false, optional: false, required: true
  private _resources = new ComputeInstanceResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: ComputeInstanceResources) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // scheduling_policy - computed: false, optional: true, required: false
  private _schedulingPolicy = new ComputeInstanceSchedulingPolicyOutputReference(this, "scheduling_policy");
  public get schedulingPolicy() {
    return this._schedulingPolicy;
  }
  public putSchedulingPolicy(value: ComputeInstanceSchedulingPolicy) {
    this._schedulingPolicy.internalValue = value;
  }
  public resetSchedulingPolicy() {
    this._schedulingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingPolicyInput() {
    return this._schedulingPolicy.internalValue;
  }

  // secondary_disk - computed: false, optional: true, required: false
  private _secondaryDisk = new ComputeInstanceSecondaryDiskList(this, "secondary_disk", true);
  public get secondaryDisk() {
    return this._secondaryDisk;
  }
  public putSecondaryDisk(value: ComputeInstanceSecondaryDisk[] | cdktf.IResolvable) {
    this._secondaryDisk.internalValue = value;
  }
  public resetSecondaryDisk() {
    this._secondaryDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryDiskInput() {
    return this._secondaryDisk.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeInstanceTimeouts) {
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
      allow_recreate: cdktf.booleanToTerraform(this._allowRecreate),
      allow_stopping_for_update: cdktf.booleanToTerraform(this._allowStoppingForUpdate),
      description: cdktf.stringToTerraform(this._description),
      folder_id: cdktf.stringToTerraform(this._folderId),
      gpu_cluster_id: cdktf.stringToTerraform(this._gpuClusterId),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      maintenance_grace_period: cdktf.stringToTerraform(this._maintenanceGracePeriod),
      maintenance_policy: cdktf.stringToTerraform(this._maintenancePolicy),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      network_acceleration_type: cdktf.stringToTerraform(this._networkAccelerationType),
      platform_id: cdktf.stringToTerraform(this._platformId),
      service_account_id: cdktf.stringToTerraform(this._serviceAccountId),
      zone: cdktf.stringToTerraform(this._zone),
      boot_disk: computeInstanceBootDiskToTerraform(this._bootDisk.internalValue),
      filesystem: cdktf.listMapper(computeInstanceFilesystemToTerraform, true)(this._filesystem.internalValue),
      local_disk: cdktf.listMapper(computeInstanceLocalDiskToTerraform, true)(this._localDisk.internalValue),
      metadata_options: computeInstanceMetadataOptionsToTerraform(this._metadataOptions.internalValue),
      network_interface: cdktf.listMapper(computeInstanceNetworkInterfaceToTerraform, true)(this._networkInterface.internalValue),
      placement_policy: computeInstancePlacementPolicyToTerraform(this._placementPolicy.internalValue),
      resources: computeInstanceResourcesToTerraform(this._resources.internalValue),
      scheduling_policy: computeInstanceSchedulingPolicyToTerraform(this._schedulingPolicy.internalValue),
      secondary_disk: cdktf.listMapper(computeInstanceSecondaryDiskToTerraform, true)(this._secondaryDisk.internalValue),
      timeouts: computeInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_recreate: {
        value: cdktf.booleanToHclTerraform(this._allowRecreate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_stopping_for_update: {
        value: cdktf.booleanToHclTerraform(this._allowStoppingForUpdate),
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
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gpu_cluster_id: {
        value: cdktf.stringToHclTerraform(this._gpuClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      maintenance_grace_period: {
        value: cdktf.stringToHclTerraform(this._maintenanceGracePeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_policy: {
        value: cdktf.stringToHclTerraform(this._maintenancePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_acceleration_type: {
        value: cdktf.stringToHclTerraform(this._networkAccelerationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform_id: {
        value: cdktf.stringToHclTerraform(this._platformId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_id: {
        value: cdktf.stringToHclTerraform(this._serviceAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      boot_disk: {
        value: computeInstanceBootDiskToHclTerraform(this._bootDisk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeInstanceBootDiskList",
      },
      filesystem: {
        value: cdktf.listMapperHcl(computeInstanceFilesystemToHclTerraform, true)(this._filesystem.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ComputeInstanceFilesystemList",
      },
      local_disk: {
        value: cdktf.listMapperHcl(computeInstanceLocalDiskToHclTerraform, true)(this._localDisk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeInstanceLocalDiskList",
      },
      metadata_options: {
        value: computeInstanceMetadataOptionsToHclTerraform(this._metadataOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeInstanceMetadataOptionsList",
      },
      network_interface: {
        value: cdktf.listMapperHcl(computeInstanceNetworkInterfaceToHclTerraform, true)(this._networkInterface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeInstanceNetworkInterfaceList",
      },
      placement_policy: {
        value: computeInstancePlacementPolicyToHclTerraform(this._placementPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeInstancePlacementPolicyList",
      },
      resources: {
        value: computeInstanceResourcesToHclTerraform(this._resources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeInstanceResourcesList",
      },
      scheduling_policy: {
        value: computeInstanceSchedulingPolicyToHclTerraform(this._schedulingPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeInstanceSchedulingPolicyList",
      },
      secondary_disk: {
        value: cdktf.listMapperHcl(computeInstanceSecondaryDiskToHclTerraform, true)(this._secondaryDisk.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ComputeInstanceSecondaryDiskList",
      },
      timeouts: {
        value: computeInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
