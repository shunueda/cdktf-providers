// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/core_compute_capacity_reservation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CoreComputeCapacityReservationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/core_compute_capacity_reservation#availability_domain CoreComputeCapacityReservation#availability_domain}
  */
  readonly availabilityDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/core_compute_capacity_reservation#compartment_id CoreComputeCapacityReservation#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/core_compute_capacity_reservation#defined_tags CoreComputeCapacityReservation#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/core_compute_capacity_reservation#display_name CoreComputeCapacityReservation#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/core_compute_capacity_reservation#freeform_tags CoreComputeCapacityReservation#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/core_compute_capacity_reservation#id CoreComputeCapacityReservation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/core_compute_capacity_reservation#is_default_reservation CoreComputeCapacityReservation#is_default_reservation}
  */
  readonly isDefaultReservation?: boolean | cdktf.IResolvable;
  /**
  * instance_reservation_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/core_compute_capacity_reservation#instance_reservation_configs CoreComputeCapacityReservation#instance_reservation_configs}
  */
  readonly instanceReservationConfigs: CoreComputeCapacityReservationInstanceReservationConfigs[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/core_compute_capacity_reservation#timeouts CoreComputeCapacityReservation#timeouts}
  */
  readonly timeouts?: CoreComputeCapacityReservationTimeouts;
}
export interface CoreComputeCapacityReservationInstanceReservationConfigsClusterConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/core_compute_capacity_reservation#hpc_island_id CoreComputeCapacityReservation#hpc_island_id}
  */
  readonly hpcIslandId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/core_compute_capacity_reservation#network_block_ids CoreComputeCapacityReservation#network_block_ids}
  */
  readonly networkBlockIds?: string[];
}

export function coreComputeCapacityReservationInstanceReservationConfigsClusterConfigToTerraform(struct?: CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference | CoreComputeCapacityReservationInstanceReservationConfigsClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hpc_island_id: cdktf.stringToTerraform(struct!.hpcIslandId),
    network_block_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networkBlockIds),
  }
}


export function coreComputeCapacityReservationInstanceReservationConfigsClusterConfigToHclTerraform(struct?: CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference | CoreComputeCapacityReservationInstanceReservationConfigsClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hpc_island_id: {
      value: cdktf.stringToHclTerraform(struct!.hpcIslandId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_block_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networkBlockIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreComputeCapacityReservationInstanceReservationConfigsClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hpcIslandId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpcIslandId = this._hpcIslandId;
    }
    if (this._networkBlockIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkBlockIds = this._networkBlockIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreComputeCapacityReservationInstanceReservationConfigsClusterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hpcIslandId = undefined;
      this._networkBlockIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hpcIslandId = value.hpcIslandId;
      this._networkBlockIds = value.networkBlockIds;
    }
  }

  // hpc_island_id - computed: false, optional: false, required: true
  private _hpcIslandId?: string; 
  public get hpcIslandId() {
    return this.getStringAttribute('hpc_island_id');
  }
  public set hpcIslandId(value: string) {
    this._hpcIslandId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hpcIslandIdInput() {
    return this._hpcIslandId;
  }

  // network_block_ids - computed: true, optional: true, required: false
  private _networkBlockIds?: string[]; 
  public get networkBlockIds() {
    return this.getListAttribute('network_block_ids');
  }
  public set networkBlockIds(value: string[]) {
    this._networkBlockIds = value;
  }
  public resetNetworkBlockIds() {
    this._networkBlockIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkBlockIdsInput() {
    return this._networkBlockIds;
  }
}
export interface CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/core_compute_capacity_reservation#memory_in_gbs CoreComputeCapacityReservation#memory_in_gbs}
  */
  readonly memoryInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/core_compute_capacity_reservation#ocpus CoreComputeCapacityReservation#ocpus}
  */
  readonly ocpus?: number;
}

export function coreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigToTerraform(struct?: CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference | CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory_in_gbs: cdktf.numberToTerraform(struct!.memoryInGbs),
    ocpus: cdktf.numberToTerraform(struct!.ocpus),
  }
}


export function coreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigToHclTerraform(struct?: CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference | CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    memory_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.memoryInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocpus: {
      value: cdktf.numberToHclTerraform(struct!.ocpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memoryInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInGbs = this._memoryInGbs;
    }
    if (this._ocpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocpus = this._ocpus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._memoryInGbs = undefined;
      this._ocpus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._memoryInGbs = value.memoryInGbs;
      this._ocpus = value.ocpus;
    }
  }

  // memory_in_gbs - computed: true, optional: true, required: false
  private _memoryInGbs?: number; 
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }
  public set memoryInGbs(value: number) {
    this._memoryInGbs = value;
  }
  public resetMemoryInGbs() {
    this._memoryInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInGbsInput() {
    return this._memoryInGbs;
  }

  // ocpus - computed: true, optional: true, required: false
  private _ocpus?: number; 
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
  public set ocpus(value: number) {
    this._ocpus = value;
  }
  public resetOcpus() {
    this._ocpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpusInput() {
    return this._ocpus;
  }
}
export interface CoreComputeCapacityReservationInstanceReservationConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/core_compute_capacity_reservation#cluster_placement_group_id CoreComputeCapacityReservation#cluster_placement_group_id}
  */
  readonly clusterPlacementGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/core_compute_capacity_reservation#fault_domain CoreComputeCapacityReservation#fault_domain}
  */
  readonly faultDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/core_compute_capacity_reservation#instance_shape CoreComputeCapacityReservation#instance_shape}
  */
  readonly instanceShape: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/core_compute_capacity_reservation#reserved_count CoreComputeCapacityReservation#reserved_count}
  */
  readonly reservedCount: string;
  /**
  * cluster_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/core_compute_capacity_reservation#cluster_config CoreComputeCapacityReservation#cluster_config}
  */
  readonly clusterConfig?: CoreComputeCapacityReservationInstanceReservationConfigsClusterConfig;
  /**
  * instance_shape_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/core_compute_capacity_reservation#instance_shape_config CoreComputeCapacityReservation#instance_shape_config}
  */
  readonly instanceShapeConfig?: CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig;
}

export function coreComputeCapacityReservationInstanceReservationConfigsToTerraform(struct?: CoreComputeCapacityReservationInstanceReservationConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_placement_group_id: cdktf.stringToTerraform(struct!.clusterPlacementGroupId),
    fault_domain: cdktf.stringToTerraform(struct!.faultDomain),
    instance_shape: cdktf.stringToTerraform(struct!.instanceShape),
    reserved_count: cdktf.stringToTerraform(struct!.reservedCount),
    cluster_config: coreComputeCapacityReservationInstanceReservationConfigsClusterConfigToTerraform(struct!.clusterConfig),
    instance_shape_config: coreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigToTerraform(struct!.instanceShapeConfig),
  }
}


export function coreComputeCapacityReservationInstanceReservationConfigsToHclTerraform(struct?: CoreComputeCapacityReservationInstanceReservationConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_placement_group_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterPlacementGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fault_domain: {
      value: cdktf.stringToHclTerraform(struct!.faultDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_shape: {
      value: cdktf.stringToHclTerraform(struct!.instanceShape),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reserved_count: {
      value: cdktf.stringToHclTerraform(struct!.reservedCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_config: {
      value: coreComputeCapacityReservationInstanceReservationConfigsClusterConfigToHclTerraform(struct!.clusterConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigList",
    },
    instance_shape_config: {
      value: coreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigToHclTerraform(struct!.instanceShapeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreComputeCapacityReservationInstanceReservationConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreComputeCapacityReservationInstanceReservationConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterPlacementGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterPlacementGroupId = this._clusterPlacementGroupId;
    }
    if (this._faultDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.faultDomain = this._faultDomain;
    }
    if (this._instanceShape !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceShape = this._instanceShape;
    }
    if (this._reservedCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedCount = this._reservedCount;
    }
    if (this._clusterConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterConfig = this._clusterConfig?.internalValue;
    }
    if (this._instanceShapeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceShapeConfig = this._instanceShapeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreComputeCapacityReservationInstanceReservationConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterPlacementGroupId = undefined;
      this._faultDomain = undefined;
      this._instanceShape = undefined;
      this._reservedCount = undefined;
      this._clusterConfig.internalValue = undefined;
      this._instanceShapeConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterPlacementGroupId = value.clusterPlacementGroupId;
      this._faultDomain = value.faultDomain;
      this._instanceShape = value.instanceShape;
      this._reservedCount = value.reservedCount;
      this._clusterConfig.internalValue = value.clusterConfig;
      this._instanceShapeConfig.internalValue = value.instanceShapeConfig;
    }
  }

  // cluster_placement_group_id - computed: false, optional: true, required: false
  private _clusterPlacementGroupId?: string; 
  public get clusterPlacementGroupId() {
    return this.getStringAttribute('cluster_placement_group_id');
  }
  public set clusterPlacementGroupId(value: string) {
    this._clusterPlacementGroupId = value;
  }
  public resetClusterPlacementGroupId() {
    this._clusterPlacementGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterPlacementGroupIdInput() {
    return this._clusterPlacementGroupId;
  }

  // fault_domain - computed: false, optional: true, required: false
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

  // instance_shape - computed: false, optional: false, required: true
  private _instanceShape?: string; 
  public get instanceShape() {
    return this.getStringAttribute('instance_shape');
  }
  public set instanceShape(value: string) {
    this._instanceShape = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceShapeInput() {
    return this._instanceShape;
  }

  // reserved_count - computed: false, optional: false, required: true
  private _reservedCount?: string; 
  public get reservedCount() {
    return this.getStringAttribute('reserved_count');
  }
  public set reservedCount(value: string) {
    this._reservedCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedCountInput() {
    return this._reservedCount;
  }

  // used_count - computed: true, optional: false, required: false
  public get usedCount() {
    return this.getStringAttribute('used_count');
  }

  // cluster_config - computed: false, optional: true, required: false
  private _clusterConfig = new CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference(this, "cluster_config");
  public get clusterConfig() {
    return this._clusterConfig;
  }
  public putClusterConfig(value: CoreComputeCapacityReservationInstanceReservationConfigsClusterConfig) {
    this._clusterConfig.internalValue = value;
  }
  public resetClusterConfig() {
    this._clusterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterConfigInput() {
    return this._clusterConfig.internalValue;
  }

  // instance_shape_config - computed: false, optional: true, required: false
  private _instanceShapeConfig = new CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference(this, "instance_shape_config");
  public get instanceShapeConfig() {
    return this._instanceShapeConfig;
  }
  public putInstanceShapeConfig(value: CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig) {
    this._instanceShapeConfig.internalValue = value;
  }
  public resetInstanceShapeConfig() {
    this._instanceShapeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceShapeConfigInput() {
    return this._instanceShapeConfig.internalValue;
  }
}

export class CoreComputeCapacityReservationInstanceReservationConfigsList extends cdktf.ComplexList {
  public internalValue? : CoreComputeCapacityReservationInstanceReservationConfigs[] | cdktf.IResolvable

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
  public get(index: number): CoreComputeCapacityReservationInstanceReservationConfigsOutputReference {
    return new CoreComputeCapacityReservationInstanceReservationConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreComputeCapacityReservationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/core_compute_capacity_reservation#create CoreComputeCapacityReservation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/core_compute_capacity_reservation#delete CoreComputeCapacityReservation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/core_compute_capacity_reservation#update CoreComputeCapacityReservation#update}
  */
  readonly update?: string;
}

export function coreComputeCapacityReservationTimeoutsToTerraform(struct?: CoreComputeCapacityReservationTimeouts | cdktf.IResolvable): any {
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


export function coreComputeCapacityReservationTimeoutsToHclTerraform(struct?: CoreComputeCapacityReservationTimeouts | cdktf.IResolvable): any {
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

export class CoreComputeCapacityReservationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CoreComputeCapacityReservationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CoreComputeCapacityReservationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/core_compute_capacity_reservation oci_core_compute_capacity_reservation}
*/
export class CoreComputeCapacityReservation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_compute_capacity_reservation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CoreComputeCapacityReservation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CoreComputeCapacityReservation to import
  * @param importFromId The id of the existing CoreComputeCapacityReservation that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/core_compute_capacity_reservation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CoreComputeCapacityReservation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_compute_capacity_reservation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/core_compute_capacity_reservation oci_core_compute_capacity_reservation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CoreComputeCapacityReservationConfig
  */
  public constructor(scope: Construct, id: string, config: CoreComputeCapacityReservationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_compute_capacity_reservation',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
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
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isDefaultReservation = config.isDefaultReservation;
    this._instanceReservationConfigs.internalValue = config.instanceReservationConfigs;
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

  // is_default_reservation - computed: true, optional: true, required: false
  private _isDefaultReservation?: boolean | cdktf.IResolvable; 
  public get isDefaultReservation() {
    return this.getBooleanAttribute('is_default_reservation');
  }
  public set isDefaultReservation(value: boolean | cdktf.IResolvable) {
    this._isDefaultReservation = value;
  }
  public resetIsDefaultReservation() {
    this._isDefaultReservation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultReservationInput() {
    return this._isDefaultReservation;
  }

  // reserved_instance_count - computed: true, optional: false, required: false
  public get reservedInstanceCount() {
    return this.getStringAttribute('reserved_instance_count');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // used_instance_count - computed: true, optional: false, required: false
  public get usedInstanceCount() {
    return this.getStringAttribute('used_instance_count');
  }

  // instance_reservation_configs - computed: false, optional: false, required: true
  private _instanceReservationConfigs = new CoreComputeCapacityReservationInstanceReservationConfigsList(this, "instance_reservation_configs", true);
  public get instanceReservationConfigs() {
    return this._instanceReservationConfigs;
  }
  public putInstanceReservationConfigs(value: CoreComputeCapacityReservationInstanceReservationConfigs[] | cdktf.IResolvable) {
    this._instanceReservationConfigs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceReservationConfigsInput() {
    return this._instanceReservationConfigs.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CoreComputeCapacityReservationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CoreComputeCapacityReservationTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_default_reservation: cdktf.booleanToTerraform(this._isDefaultReservation),
      instance_reservation_configs: cdktf.listMapper(coreComputeCapacityReservationInstanceReservationConfigsToTerraform, true)(this._instanceReservationConfigs.internalValue),
      timeouts: coreComputeCapacityReservationTimeoutsToTerraform(this._timeouts.internalValue),
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
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
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
      is_default_reservation: {
        value: cdktf.booleanToHclTerraform(this._isDefaultReservation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      instance_reservation_configs: {
        value: cdktf.listMapperHcl(coreComputeCapacityReservationInstanceReservationConfigsToHclTerraform, true)(this._instanceReservationConfigs.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CoreComputeCapacityReservationInstanceReservationConfigsList",
      },
      timeouts: {
        value: coreComputeCapacityReservationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CoreComputeCapacityReservationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
