// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_dedicated_vm_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CoreDedicatedVmHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_dedicated_vm_host#availability_domain CoreDedicatedVmHost#availability_domain}
  */
  readonly availabilityDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_dedicated_vm_host#capacity_config CoreDedicatedVmHost#capacity_config}
  */
  readonly capacityConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_dedicated_vm_host#compartment_id CoreDedicatedVmHost#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_dedicated_vm_host#dedicated_vm_host_shape CoreDedicatedVmHost#dedicated_vm_host_shape}
  */
  readonly dedicatedVmHostShape: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_dedicated_vm_host#defined_tags CoreDedicatedVmHost#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_dedicated_vm_host#display_name CoreDedicatedVmHost#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_dedicated_vm_host#fault_domain CoreDedicatedVmHost#fault_domain}
  */
  readonly faultDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_dedicated_vm_host#freeform_tags CoreDedicatedVmHost#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_dedicated_vm_host#id CoreDedicatedVmHost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_dedicated_vm_host#is_memory_encryption_enabled CoreDedicatedVmHost#is_memory_encryption_enabled}
  */
  readonly isMemoryEncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * placement_constraint_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_dedicated_vm_host#placement_constraint_details CoreDedicatedVmHost#placement_constraint_details}
  */
  readonly placementConstraintDetails?: CoreDedicatedVmHostPlacementConstraintDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_dedicated_vm_host#timeouts CoreDedicatedVmHost#timeouts}
  */
  readonly timeouts?: CoreDedicatedVmHostTimeouts;
}
export interface CoreDedicatedVmHostCapacityBins {
}

export function coreDedicatedVmHostCapacityBinsToTerraform(struct?: CoreDedicatedVmHostCapacityBins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function coreDedicatedVmHostCapacityBinsToHclTerraform(struct?: CoreDedicatedVmHostCapacityBins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CoreDedicatedVmHostCapacityBinsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreDedicatedVmHostCapacityBins | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreDedicatedVmHostCapacityBins | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity_index - computed: true, optional: false, required: false
  public get capacityIndex() {
    return this.getNumberAttribute('capacity_index');
  }

  // remaining_memory_in_gbs - computed: true, optional: false, required: false
  public get remainingMemoryInGbs() {
    return this.getNumberAttribute('remaining_memory_in_gbs');
  }

  // remaining_ocpus - computed: true, optional: false, required: false
  public get remainingOcpus() {
    return this.getNumberAttribute('remaining_ocpus');
  }

  // supported_shapes - computed: true, optional: false, required: false
  public get supportedShapes() {
    return this.getListAttribute('supported_shapes');
  }

  // total_memory_in_gbs - computed: true, optional: false, required: false
  public get totalMemoryInGbs() {
    return this.getNumberAttribute('total_memory_in_gbs');
  }

  // total_ocpus - computed: true, optional: false, required: false
  public get totalOcpus() {
    return this.getNumberAttribute('total_ocpus');
  }
}

export class CoreDedicatedVmHostCapacityBinsList extends cdktf.ComplexList {

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
  public get(index: number): CoreDedicatedVmHostCapacityBinsOutputReference {
    return new CoreDedicatedVmHostCapacityBinsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreDedicatedVmHostPlacementConstraintDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_dedicated_vm_host#compute_bare_metal_host_id CoreDedicatedVmHost#compute_bare_metal_host_id}
  */
  readonly computeBareMetalHostId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_dedicated_vm_host#type CoreDedicatedVmHost#type}
  */
  readonly type: string;
}

export function coreDedicatedVmHostPlacementConstraintDetailsToTerraform(struct?: CoreDedicatedVmHostPlacementConstraintDetailsOutputReference | CoreDedicatedVmHostPlacementConstraintDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compute_bare_metal_host_id: cdktf.stringToTerraform(struct!.computeBareMetalHostId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function coreDedicatedVmHostPlacementConstraintDetailsToHclTerraform(struct?: CoreDedicatedVmHostPlacementConstraintDetailsOutputReference | CoreDedicatedVmHostPlacementConstraintDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compute_bare_metal_host_id: {
      value: cdktf.stringToHclTerraform(struct!.computeBareMetalHostId),
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

export class CoreDedicatedVmHostPlacementConstraintDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreDedicatedVmHostPlacementConstraintDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._computeBareMetalHostId !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeBareMetalHostId = this._computeBareMetalHostId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreDedicatedVmHostPlacementConstraintDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._computeBareMetalHostId = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._computeBareMetalHostId = value.computeBareMetalHostId;
      this._type = value.type;
    }
  }

  // compute_bare_metal_host_id - computed: true, optional: true, required: false
  private _computeBareMetalHostId?: string; 
  public get computeBareMetalHostId() {
    return this.getStringAttribute('compute_bare_metal_host_id');
  }
  public set computeBareMetalHostId(value: string) {
    this._computeBareMetalHostId = value;
  }
  public resetComputeBareMetalHostId() {
    this._computeBareMetalHostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeBareMetalHostIdInput() {
    return this._computeBareMetalHostId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface CoreDedicatedVmHostTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_dedicated_vm_host#create CoreDedicatedVmHost#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_dedicated_vm_host#delete CoreDedicatedVmHost#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_dedicated_vm_host#update CoreDedicatedVmHost#update}
  */
  readonly update?: string;
}

export function coreDedicatedVmHostTimeoutsToTerraform(struct?: CoreDedicatedVmHostTimeouts | cdktf.IResolvable): any {
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


export function coreDedicatedVmHostTimeoutsToHclTerraform(struct?: CoreDedicatedVmHostTimeouts | cdktf.IResolvable): any {
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

export class CoreDedicatedVmHostTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CoreDedicatedVmHostTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CoreDedicatedVmHostTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_dedicated_vm_host oci_core_dedicated_vm_host}
*/
export class CoreDedicatedVmHost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_dedicated_vm_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CoreDedicatedVmHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CoreDedicatedVmHost to import
  * @param importFromId The id of the existing CoreDedicatedVmHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_dedicated_vm_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CoreDedicatedVmHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_dedicated_vm_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_dedicated_vm_host oci_core_dedicated_vm_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CoreDedicatedVmHostConfig
  */
  public constructor(scope: Construct, id: string, config: CoreDedicatedVmHostConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_dedicated_vm_host',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityDomain = config.availabilityDomain;
    this._capacityConfig = config.capacityConfig;
    this._compartmentId = config.compartmentId;
    this._dedicatedVmHostShape = config.dedicatedVmHostShape;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._faultDomain = config.faultDomain;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isMemoryEncryptionEnabled = config.isMemoryEncryptionEnabled;
    this._placementConstraintDetails.internalValue = config.placementConstraintDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: false, optional: false, required: true
  private _availabilityDomain?: string; 
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainInput() {
    return this._availabilityDomain;
  }

  // capacity_bins - computed: true, optional: false, required: false
  private _capacityBins = new CoreDedicatedVmHostCapacityBinsList(this, "capacity_bins", false);
  public get capacityBins() {
    return this._capacityBins;
  }

  // capacity_config - computed: true, optional: true, required: false
  private _capacityConfig?: string; 
  public get capacityConfig() {
    return this.getStringAttribute('capacity_config');
  }
  public set capacityConfig(value: string) {
    this._capacityConfig = value;
  }
  public resetCapacityConfig() {
    this._capacityConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityConfigInput() {
    return this._capacityConfig;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // compute_bare_metal_host_id - computed: true, optional: false, required: false
  public get computeBareMetalHostId() {
    return this.getStringAttribute('compute_bare_metal_host_id');
  }

  // dedicated_vm_host_shape - computed: false, optional: false, required: true
  private _dedicatedVmHostShape?: string; 
  public get dedicatedVmHostShape() {
    return this.getStringAttribute('dedicated_vm_host_shape');
  }
  public set dedicatedVmHostShape(value: string) {
    this._dedicatedVmHostShape = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedVmHostShapeInput() {
    return this._dedicatedVmHostShape;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // fault_domain - computed: true, optional: true, required: false
  private _faultDomain?: string; 
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }
  public set faultDomain(value: string) {
    this._faultDomain = value;
  }
  public resetFaultDomain() {
    this._faultDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultDomainInput() {
    return this._faultDomain;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // is_memory_encryption_enabled - computed: true, optional: true, required: false
  private _isMemoryEncryptionEnabled?: boolean | cdktf.IResolvable; 
  public get isMemoryEncryptionEnabled() {
    return this.getBooleanAttribute('is_memory_encryption_enabled');
  }
  public set isMemoryEncryptionEnabled(value: boolean | cdktf.IResolvable) {
    this._isMemoryEncryptionEnabled = value;
  }
  public resetIsMemoryEncryptionEnabled() {
    this._isMemoryEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMemoryEncryptionEnabledInput() {
    return this._isMemoryEncryptionEnabled;
  }

  // remaining_memory_in_gbs - computed: true, optional: false, required: false
  public get remainingMemoryInGbs() {
    return this.getNumberAttribute('remaining_memory_in_gbs');
  }

  // remaining_ocpus - computed: true, optional: false, required: false
  public get remainingOcpus() {
    return this.getNumberAttribute('remaining_ocpus');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // total_memory_in_gbs - computed: true, optional: false, required: false
  public get totalMemoryInGbs() {
    return this.getNumberAttribute('total_memory_in_gbs');
  }

  // total_ocpus - computed: true, optional: false, required: false
  public get totalOcpus() {
    return this.getNumberAttribute('total_ocpus');
  }

  // placement_constraint_details - computed: false, optional: true, required: false
  private _placementConstraintDetails = new CoreDedicatedVmHostPlacementConstraintDetailsOutputReference(this, "placement_constraint_details");
  public get placementConstraintDetails() {
    return this._placementConstraintDetails;
  }
  public putPlacementConstraintDetails(value: CoreDedicatedVmHostPlacementConstraintDetails) {
    this._placementConstraintDetails.internalValue = value;
  }
  public resetPlacementConstraintDetails() {
    this._placementConstraintDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementConstraintDetailsInput() {
    return this._placementConstraintDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CoreDedicatedVmHostTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CoreDedicatedVmHostTimeouts) {
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
      availability_domain: cdktf.stringToTerraform(this._availabilityDomain),
      capacity_config: cdktf.stringToTerraform(this._capacityConfig),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      dedicated_vm_host_shape: cdktf.stringToTerraform(this._dedicatedVmHostShape),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      fault_domain: cdktf.stringToTerraform(this._faultDomain),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_memory_encryption_enabled: cdktf.booleanToTerraform(this._isMemoryEncryptionEnabled),
      placement_constraint_details: coreDedicatedVmHostPlacementConstraintDetailsToTerraform(this._placementConstraintDetails.internalValue),
      timeouts: coreDedicatedVmHostTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_domain: {
        value: cdktf.stringToHclTerraform(this._availabilityDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capacity_config: {
        value: cdktf.stringToHclTerraform(this._capacityConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dedicated_vm_host_shape: {
        value: cdktf.stringToHclTerraform(this._dedicatedVmHostShape),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fault_domain: {
        value: cdktf.stringToHclTerraform(this._faultDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_memory_encryption_enabled: {
        value: cdktf.booleanToHclTerraform(this._isMemoryEncryptionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      placement_constraint_details: {
        value: coreDedicatedVmHostPlacementConstraintDetailsToHclTerraform(this._placementConstraintDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CoreDedicatedVmHostPlacementConstraintDetailsList",
      },
      timeouts: {
        value: coreDedicatedVmHostTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CoreDedicatedVmHostTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
