// https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_disk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeDiskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_disk#allow_recreate ComputeDisk#allow_recreate}
  */
  readonly allowRecreate?: boolean | cdktf.IResolvable;
  /**
  * Block size of the disk, specified in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_disk#block_size ComputeDisk#block_size}
  */
  readonly blockSize?: number;
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_disk#description ComputeDisk#description}
  */
  readonly description?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_disk#folder_id ComputeDisk#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_disk#id ComputeDisk#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source image to use for disk creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_disk#image_id ComputeDisk#image_id}
  */
  readonly imageId?: string;
  /**
  * ID of KMS symmetric key used to encrypt disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_disk#kms_key_id ComputeDisk#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_disk#labels ComputeDisk#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_disk#name ComputeDisk#name}
  */
  readonly name?: string;
  /**
  * Size of the persistent disk, specified in GB. You can specify this field when creating a persistent disk using the `image_id` or `snapshot_id` parameter, or specify it alone to create an empty persistent disk. If you specify this field along with `image_id` or `snapshot_id`, the size value must not be less than the size of the source image or the size of the snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_disk#size ComputeDisk#size}
  */
  readonly size?: number;
  /**
  * The source snapshot to use for disk creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_disk#snapshot_id ComputeDisk#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Type of disk to create. Provide this when creating a disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_disk#type ComputeDisk#type}
  */
  readonly type?: string;
  /**
  * The [availability zone](https://yandex.cloud/docs/overview/concepts/geo-scope) where resource is located. If it is not provided, the default provider zone will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_disk#zone ComputeDisk#zone}
  */
  readonly zone?: string;
  /**
  * disk_placement_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_disk#disk_placement_policy ComputeDisk#disk_placement_policy}
  */
  readonly diskPlacementPolicy?: ComputeDiskDiskPlacementPolicy;
  /**
  * hardware_generation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_disk#hardware_generation ComputeDisk#hardware_generation}
  */
  readonly hardwareGeneration?: ComputeDiskHardwareGeneration;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_disk#timeouts ComputeDisk#timeouts}
  */
  readonly timeouts?: ComputeDiskTimeouts;
}
export interface ComputeDiskDiskPlacementPolicy {
  /**
  * Specifies Disk Placement Group id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_disk#disk_placement_group_id ComputeDisk#disk_placement_group_id}
  */
  readonly diskPlacementGroupId: string;
}

export function computeDiskDiskPlacementPolicyToTerraform(struct?: ComputeDiskDiskPlacementPolicyOutputReference | ComputeDiskDiskPlacementPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_placement_group_id: cdktf.stringToTerraform(struct!.diskPlacementGroupId),
  }
}


export function computeDiskDiskPlacementPolicyToHclTerraform(struct?: ComputeDiskDiskPlacementPolicyOutputReference | ComputeDiskDiskPlacementPolicy): any {
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

export class ComputeDiskDiskPlacementPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeDiskDiskPlacementPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskPlacementGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskPlacementGroupId = this._diskPlacementGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeDiskDiskPlacementPolicy | undefined) {
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
export interface ComputeDiskHardwareGenerationGeneration2Features {
}

export function computeDiskHardwareGenerationGeneration2FeaturesToTerraform(struct?: ComputeDiskHardwareGenerationGeneration2FeaturesOutputReference | ComputeDiskHardwareGenerationGeneration2Features): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function computeDiskHardwareGenerationGeneration2FeaturesToHclTerraform(struct?: ComputeDiskHardwareGenerationGeneration2FeaturesOutputReference | ComputeDiskHardwareGenerationGeneration2Features): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeDiskHardwareGenerationGeneration2FeaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeDiskHardwareGenerationGeneration2Features | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeDiskHardwareGenerationGeneration2Features | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ComputeDiskHardwareGenerationLegacyFeatures {
  /**
  * A variant of PCI topology, one of `PCI_TOPOLOGY_V1` or `PCI_TOPOLOGY_V2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_disk#pci_topology ComputeDisk#pci_topology}
  */
  readonly pciTopology?: string;
}

export function computeDiskHardwareGenerationLegacyFeaturesToTerraform(struct?: ComputeDiskHardwareGenerationLegacyFeaturesOutputReference | ComputeDiskHardwareGenerationLegacyFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pci_topology: cdktf.stringToTerraform(struct!.pciTopology),
  }
}


export function computeDiskHardwareGenerationLegacyFeaturesToHclTerraform(struct?: ComputeDiskHardwareGenerationLegacyFeaturesOutputReference | ComputeDiskHardwareGenerationLegacyFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pci_topology: {
      value: cdktf.stringToHclTerraform(struct!.pciTopology),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeDiskHardwareGenerationLegacyFeaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeDiskHardwareGenerationLegacyFeatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pciTopology !== undefined) {
      hasAnyValues = true;
      internalValueResult.pciTopology = this._pciTopology;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeDiskHardwareGenerationLegacyFeatures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pciTopology = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pciTopology = value.pciTopology;
    }
  }

  // pci_topology - computed: true, optional: true, required: false
  private _pciTopology?: string; 
  public get pciTopology() {
    return this.getStringAttribute('pci_topology');
  }
  public set pciTopology(value: string) {
    this._pciTopology = value;
  }
  public resetPciTopology() {
    this._pciTopology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pciTopologyInput() {
    return this._pciTopology;
  }
}
export interface ComputeDiskHardwareGeneration {
  /**
  * generation2_features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_disk#generation2_features ComputeDisk#generation2_features}
  */
  readonly generation2Features?: ComputeDiskHardwareGenerationGeneration2Features;
  /**
  * legacy_features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_disk#legacy_features ComputeDisk#legacy_features}
  */
  readonly legacyFeatures?: ComputeDiskHardwareGenerationLegacyFeatures;
}

export function computeDiskHardwareGenerationToTerraform(struct?: ComputeDiskHardwareGenerationOutputReference | ComputeDiskHardwareGeneration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generation2_features: computeDiskHardwareGenerationGeneration2FeaturesToTerraform(struct!.generation2Features),
    legacy_features: computeDiskHardwareGenerationLegacyFeaturesToTerraform(struct!.legacyFeatures),
  }
}


export function computeDiskHardwareGenerationToHclTerraform(struct?: ComputeDiskHardwareGenerationOutputReference | ComputeDiskHardwareGeneration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generation2_features: {
      value: computeDiskHardwareGenerationGeneration2FeaturesToHclTerraform(struct!.generation2Features),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeDiskHardwareGenerationGeneration2FeaturesList",
    },
    legacy_features: {
      value: computeDiskHardwareGenerationLegacyFeaturesToHclTerraform(struct!.legacyFeatures),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeDiskHardwareGenerationLegacyFeaturesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeDiskHardwareGenerationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeDiskHardwareGeneration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generation2Features?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generation2Features = this._generation2Features?.internalValue;
    }
    if (this._legacyFeatures?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.legacyFeatures = this._legacyFeatures?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeDiskHardwareGeneration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._generation2Features.internalValue = undefined;
      this._legacyFeatures.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._generation2Features.internalValue = value.generation2Features;
      this._legacyFeatures.internalValue = value.legacyFeatures;
    }
  }

  // generation2_features - computed: false, optional: true, required: false
  private _generation2Features = new ComputeDiskHardwareGenerationGeneration2FeaturesOutputReference(this, "generation2_features");
  public get generation2Features() {
    return this._generation2Features;
  }
  public putGeneration2Features(value: ComputeDiskHardwareGenerationGeneration2Features) {
    this._generation2Features.internalValue = value;
  }
  public resetGeneration2Features() {
    this._generation2Features.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generation2FeaturesInput() {
    return this._generation2Features.internalValue;
  }

  // legacy_features - computed: false, optional: true, required: false
  private _legacyFeatures = new ComputeDiskHardwareGenerationLegacyFeaturesOutputReference(this, "legacy_features");
  public get legacyFeatures() {
    return this._legacyFeatures;
  }
  public putLegacyFeatures(value: ComputeDiskHardwareGenerationLegacyFeatures) {
    this._legacyFeatures.internalValue = value;
  }
  public resetLegacyFeatures() {
    this._legacyFeatures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legacyFeaturesInput() {
    return this._legacyFeatures.internalValue;
  }
}
export interface ComputeDiskTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_disk#create ComputeDisk#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_disk#delete ComputeDisk#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_disk#update ComputeDisk#update}
  */
  readonly update?: string;
}

export function computeDiskTimeoutsToTerraform(struct?: ComputeDiskTimeouts | cdktf.IResolvable): any {
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


export function computeDiskTimeoutsToHclTerraform(struct?: ComputeDiskTimeouts | cdktf.IResolvable): any {
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

export class ComputeDiskTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeDiskTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeDiskTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_disk yandex_compute_disk}
*/
export class ComputeDisk extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_compute_disk";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeDisk resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeDisk to import
  * @param importFromId The id of the existing ComputeDisk that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_disk#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeDisk to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_compute_disk", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_disk yandex_compute_disk} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeDiskConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ComputeDiskConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_compute_disk',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.175.0',
        providerVersionConstraint: '0.175.0'
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
    this._blockSize = config.blockSize;
    this._description = config.description;
    this._folderId = config.folderId;
    this._id = config.id;
    this._imageId = config.imageId;
    this._kmsKeyId = config.kmsKeyId;
    this._labels = config.labels;
    this._name = config.name;
    this._size = config.size;
    this._snapshotId = config.snapshotId;
    this._type = config.type;
    this._zone = config.zone;
    this._diskPlacementPolicy.internalValue = config.diskPlacementPolicy;
    this._hardwareGeneration.internalValue = config.hardwareGeneration;
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

  // block_size - computed: false, optional: true, required: false
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

  // image_id - computed: false, optional: true, required: false
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

  // product_ids - computed: true, optional: false, required: false
  public get productIds() {
    return this.getListAttribute('product_ids');
  }

  // size - computed: false, optional: true, required: false
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

  // snapshot_id - computed: false, optional: true, required: false
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // disk_placement_policy - computed: false, optional: true, required: false
  private _diskPlacementPolicy = new ComputeDiskDiskPlacementPolicyOutputReference(this, "disk_placement_policy");
  public get diskPlacementPolicy() {
    return this._diskPlacementPolicy;
  }
  public putDiskPlacementPolicy(value: ComputeDiskDiskPlacementPolicy) {
    this._diskPlacementPolicy.internalValue = value;
  }
  public resetDiskPlacementPolicy() {
    this._diskPlacementPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskPlacementPolicyInput() {
    return this._diskPlacementPolicy.internalValue;
  }

  // hardware_generation - computed: false, optional: true, required: false
  private _hardwareGeneration = new ComputeDiskHardwareGenerationOutputReference(this, "hardware_generation");
  public get hardwareGeneration() {
    return this._hardwareGeneration;
  }
  public putHardwareGeneration(value: ComputeDiskHardwareGeneration) {
    this._hardwareGeneration.internalValue = value;
  }
  public resetHardwareGeneration() {
    this._hardwareGeneration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareGenerationInput() {
    return this._hardwareGeneration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeDiskTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeDiskTimeouts) {
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
      block_size: cdktf.numberToTerraform(this._blockSize),
      description: cdktf.stringToTerraform(this._description),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      size: cdktf.numberToTerraform(this._size),
      snapshot_id: cdktf.stringToTerraform(this._snapshotId),
      type: cdktf.stringToTerraform(this._type),
      zone: cdktf.stringToTerraform(this._zone),
      disk_placement_policy: computeDiskDiskPlacementPolicyToTerraform(this._diskPlacementPolicy.internalValue),
      hardware_generation: computeDiskHardwareGenerationToTerraform(this._hardwareGeneration.internalValue),
      timeouts: computeDiskTimeoutsToTerraform(this._timeouts.internalValue),
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
      block_size: {
        value: cdktf.numberToHclTerraform(this._blockSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snapshot_id: {
        value: cdktf.stringToHclTerraform(this._snapshotId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
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
      disk_placement_policy: {
        value: computeDiskDiskPlacementPolicyToHclTerraform(this._diskPlacementPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeDiskDiskPlacementPolicyList",
      },
      hardware_generation: {
        value: computeDiskHardwareGenerationToHclTerraform(this._hardwareGeneration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeDiskHardwareGenerationList",
      },
      timeouts: {
        value: computeDiskTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeDiskTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
