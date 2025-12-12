// https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_snapshot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeSnapshotConfig extends cdktf.TerraformMetaArguments {
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_snapshot#description ComputeSnapshot#description}
  */
  readonly description?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_snapshot#folder_id ComputeSnapshot#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_snapshot#id ComputeSnapshot#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_snapshot#labels ComputeSnapshot#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_snapshot#name ComputeSnapshot#name}
  */
  readonly name?: string;
  /**
  * ID of the disk to create a snapshot from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_snapshot#source_disk_id ComputeSnapshot#source_disk_id}
  */
  readonly sourceDiskId: string;
  /**
  * hardware_generation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_snapshot#hardware_generation ComputeSnapshot#hardware_generation}
  */
  readonly hardwareGeneration?: ComputeSnapshotHardwareGeneration;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_snapshot#timeouts ComputeSnapshot#timeouts}
  */
  readonly timeouts?: ComputeSnapshotTimeouts;
}
export interface ComputeSnapshotHardwareGenerationGeneration2Features {
}

export function computeSnapshotHardwareGenerationGeneration2FeaturesToTerraform(struct?: ComputeSnapshotHardwareGenerationGeneration2FeaturesOutputReference | ComputeSnapshotHardwareGenerationGeneration2Features): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function computeSnapshotHardwareGenerationGeneration2FeaturesToHclTerraform(struct?: ComputeSnapshotHardwareGenerationGeneration2FeaturesOutputReference | ComputeSnapshotHardwareGenerationGeneration2Features): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeSnapshotHardwareGenerationGeneration2FeaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeSnapshotHardwareGenerationGeneration2Features | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeSnapshotHardwareGenerationGeneration2Features | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ComputeSnapshotHardwareGenerationLegacyFeatures {
  /**
  * A variant of PCI topology, one of `PCI_TOPOLOGY_V1` or `PCI_TOPOLOGY_V2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_snapshot#pci_topology ComputeSnapshot#pci_topology}
  */
  readonly pciTopology?: string;
}

export function computeSnapshotHardwareGenerationLegacyFeaturesToTerraform(struct?: ComputeSnapshotHardwareGenerationLegacyFeaturesOutputReference | ComputeSnapshotHardwareGenerationLegacyFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pci_topology: cdktf.stringToTerraform(struct!.pciTopology),
  }
}


export function computeSnapshotHardwareGenerationLegacyFeaturesToHclTerraform(struct?: ComputeSnapshotHardwareGenerationLegacyFeaturesOutputReference | ComputeSnapshotHardwareGenerationLegacyFeatures): any {
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

export class ComputeSnapshotHardwareGenerationLegacyFeaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeSnapshotHardwareGenerationLegacyFeatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pciTopology !== undefined) {
      hasAnyValues = true;
      internalValueResult.pciTopology = this._pciTopology;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeSnapshotHardwareGenerationLegacyFeatures | undefined) {
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
export interface ComputeSnapshotHardwareGeneration {
  /**
  * generation2_features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_snapshot#generation2_features ComputeSnapshot#generation2_features}
  */
  readonly generation2Features?: ComputeSnapshotHardwareGenerationGeneration2Features;
  /**
  * legacy_features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_snapshot#legacy_features ComputeSnapshot#legacy_features}
  */
  readonly legacyFeatures?: ComputeSnapshotHardwareGenerationLegacyFeatures;
}

export function computeSnapshotHardwareGenerationToTerraform(struct?: ComputeSnapshotHardwareGenerationOutputReference | ComputeSnapshotHardwareGeneration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generation2_features: computeSnapshotHardwareGenerationGeneration2FeaturesToTerraform(struct!.generation2Features),
    legacy_features: computeSnapshotHardwareGenerationLegacyFeaturesToTerraform(struct!.legacyFeatures),
  }
}


export function computeSnapshotHardwareGenerationToHclTerraform(struct?: ComputeSnapshotHardwareGenerationOutputReference | ComputeSnapshotHardwareGeneration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generation2_features: {
      value: computeSnapshotHardwareGenerationGeneration2FeaturesToHclTerraform(struct!.generation2Features),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeSnapshotHardwareGenerationGeneration2FeaturesList",
    },
    legacy_features: {
      value: computeSnapshotHardwareGenerationLegacyFeaturesToHclTerraform(struct!.legacyFeatures),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeSnapshotHardwareGenerationLegacyFeaturesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeSnapshotHardwareGenerationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeSnapshotHardwareGeneration | undefined {
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

  public set internalValue(value: ComputeSnapshotHardwareGeneration | undefined) {
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
  private _generation2Features = new ComputeSnapshotHardwareGenerationGeneration2FeaturesOutputReference(this, "generation2_features");
  public get generation2Features() {
    return this._generation2Features;
  }
  public putGeneration2Features(value: ComputeSnapshotHardwareGenerationGeneration2Features) {
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
  private _legacyFeatures = new ComputeSnapshotHardwareGenerationLegacyFeaturesOutputReference(this, "legacy_features");
  public get legacyFeatures() {
    return this._legacyFeatures;
  }
  public putLegacyFeatures(value: ComputeSnapshotHardwareGenerationLegacyFeatures) {
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
export interface ComputeSnapshotTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_snapshot#create ComputeSnapshot#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_snapshot#delete ComputeSnapshot#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_snapshot#update ComputeSnapshot#update}
  */
  readonly update?: string;
}

export function computeSnapshotTimeoutsToTerraform(struct?: ComputeSnapshotTimeouts | cdktf.IResolvable): any {
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


export function computeSnapshotTimeoutsToHclTerraform(struct?: ComputeSnapshotTimeouts | cdktf.IResolvable): any {
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

export class ComputeSnapshotTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeSnapshotTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeSnapshotTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_snapshot yandex_compute_snapshot}
*/
export class ComputeSnapshot extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_compute_snapshot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeSnapshot resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeSnapshot to import
  * @param importFromId The id of the existing ComputeSnapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_snapshot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeSnapshot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_compute_snapshot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/compute_snapshot yandex_compute_snapshot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeSnapshotConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeSnapshotConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_compute_snapshot',
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
    this._description = config.description;
    this._folderId = config.folderId;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._sourceDiskId = config.sourceDiskId;
    this._hardwareGeneration.internalValue = config.hardwareGeneration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // disk_size - computed: true, optional: false, required: false
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
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

  // source_disk_id - computed: false, optional: false, required: true
  private _sourceDiskId?: string; 
  public get sourceDiskId() {
    return this.getStringAttribute('source_disk_id');
  }
  public set sourceDiskId(value: string) {
    this._sourceDiskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDiskIdInput() {
    return this._sourceDiskId;
  }

  // storage_size - computed: true, optional: false, required: false
  public get storageSize() {
    return this.getNumberAttribute('storage_size');
  }

  // hardware_generation - computed: false, optional: true, required: false
  private _hardwareGeneration = new ComputeSnapshotHardwareGenerationOutputReference(this, "hardware_generation");
  public get hardwareGeneration() {
    return this._hardwareGeneration;
  }
  public putHardwareGeneration(value: ComputeSnapshotHardwareGeneration) {
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
  private _timeouts = new ComputeSnapshotTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeSnapshotTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      source_disk_id: cdktf.stringToTerraform(this._sourceDiskId),
      hardware_generation: computeSnapshotHardwareGenerationToTerraform(this._hardwareGeneration.internalValue),
      timeouts: computeSnapshotTimeoutsToTerraform(this._timeouts.internalValue),
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
      source_disk_id: {
        value: cdktf.stringToHclTerraform(this._sourceDiskId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hardware_generation: {
        value: computeSnapshotHardwareGenerationToHclTerraform(this._hardwareGeneration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeSnapshotHardwareGenerationList",
      },
      timeouts: {
        value: computeSnapshotTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeSnapshotTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
