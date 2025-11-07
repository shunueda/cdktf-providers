// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/segment_routing_te
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrSegmentRoutingTeConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/segment_routing_te#device DataIosxrSegmentRoutingTe#device}
  */
  readonly device?: string;
}
export interface DataIosxrSegmentRoutingTeOnDemandColors {
}

export function dataIosxrSegmentRoutingTeOnDemandColorsToTerraform(struct?: DataIosxrSegmentRoutingTeOnDemandColors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrSegmentRoutingTeOnDemandColorsToHclTerraform(struct?: DataIosxrSegmentRoutingTeOnDemandColors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrSegmentRoutingTeOnDemandColorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrSegmentRoutingTeOnDemandColors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrSegmentRoutingTeOnDemandColors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getNumberAttribute('color');
  }

  // constraint_segments_protection_type - computed: true, optional: false, required: false
  public get constraintSegmentsProtectionType() {
    return this.getStringAttribute('constraint_segments_protection_type');
  }

  // constraint_segments_sid_algorithm - computed: true, optional: false, required: false
  public get constraintSegmentsSidAlgorithm() {
    return this.getNumberAttribute('constraint_segments_sid_algorithm');
  }

  // dynamic_anycast_sid_inclusion - computed: true, optional: false, required: false
  public get dynamicAnycastSidInclusion() {
    return this.getBooleanAttribute('dynamic_anycast_sid_inclusion');
  }

  // dynamic_metric_type - computed: true, optional: false, required: false
  public get dynamicMetricType() {
    return this.getStringAttribute('dynamic_metric_type');
  }

  // effective_metric_enable - computed: true, optional: false, required: false
  public get effectiveMetricEnable() {
    return this.getBooleanAttribute('effective_metric_enable');
  }

  // effective_metric_type - computed: true, optional: false, required: false
  public get effectiveMetricType() {
    return this.getStringAttribute('effective_metric_type');
  }

  // effective_metric_value - computed: true, optional: false, required: false
  public get effectiveMetricValue() {
    return this.getNumberAttribute('effective_metric_value');
  }

  // source_address - computed: true, optional: false, required: false
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }

  // source_address_type - computed: true, optional: false, required: false
  public get sourceAddressType() {
    return this.getStringAttribute('source_address_type');
  }

  // srv6_enable - computed: true, optional: false, required: false
  public get srv6Enable() {
    return this.getBooleanAttribute('srv6_enable');
  }

  // srv6_locator_behavior - computed: true, optional: false, required: false
  public get srv6LocatorBehavior() {
    return this.getStringAttribute('srv6_locator_behavior');
  }

  // srv6_locator_binding_sid_type - computed: true, optional: false, required: false
  public get srv6LocatorBindingSidType() {
    return this.getStringAttribute('srv6_locator_binding_sid_type');
  }

  // srv6_locator_name - computed: true, optional: false, required: false
  public get srv6LocatorName() {
    return this.getStringAttribute('srv6_locator_name');
  }
}

export class DataIosxrSegmentRoutingTeOnDemandColorsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrSegmentRoutingTeOnDemandColorsOutputReference {
    return new DataIosxrSegmentRoutingTeOnDemandColorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrSegmentRoutingTePcePeers {
}

export function dataIosxrSegmentRoutingTePcePeersToTerraform(struct?: DataIosxrSegmentRoutingTePcePeers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrSegmentRoutingTePcePeersToHclTerraform(struct?: DataIosxrSegmentRoutingTePcePeers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrSegmentRoutingTePcePeersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrSegmentRoutingTePcePeers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrSegmentRoutingTePcePeers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pce_address - computed: true, optional: false, required: false
  public get pceAddress() {
    return this.getStringAttribute('pce_address');
  }

  // precedence - computed: true, optional: false, required: false
  public get precedence() {
    return this.getNumberAttribute('precedence');
  }
}

export class DataIosxrSegmentRoutingTePcePeersList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrSegmentRoutingTePcePeersOutputReference {
    return new DataIosxrSegmentRoutingTePcePeersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrSegmentRoutingTePolicies {
}

export function dataIosxrSegmentRoutingTePoliciesToTerraform(struct?: DataIosxrSegmentRoutingTePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrSegmentRoutingTePoliciesToHclTerraform(struct?: DataIosxrSegmentRoutingTePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrSegmentRoutingTePoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrSegmentRoutingTePolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrSegmentRoutingTePolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy_color_endpoint_address - computed: true, optional: false, required: false
  public get policyColorEndpointAddress() {
    return this.getStringAttribute('policy_color_endpoint_address');
  }

  // policy_color_endpoint_color - computed: true, optional: false, required: false
  public get policyColorEndpointColor() {
    return this.getNumberAttribute('policy_color_endpoint_color');
  }

  // policy_color_endpoint_type - computed: true, optional: false, required: false
  public get policyColorEndpointType() {
    return this.getStringAttribute('policy_color_endpoint_type');
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // source_address - computed: true, optional: false, required: false
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }

  // source_address_type - computed: true, optional: false, required: false
  public get sourceAddressType() {
    return this.getStringAttribute('source_address_type');
  }

  // srv6_enable - computed: true, optional: false, required: false
  public get srv6Enable() {
    return this.getBooleanAttribute('srv6_enable');
  }

  // srv6_locator_behavior - computed: true, optional: false, required: false
  public get srv6LocatorBehavior() {
    return this.getStringAttribute('srv6_locator_behavior');
  }

  // srv6_locator_binding_sid_type - computed: true, optional: false, required: false
  public get srv6LocatorBindingSidType() {
    return this.getStringAttribute('srv6_locator_binding_sid_type');
  }

  // srv6_locator_name - computed: true, optional: false, required: false
  public get srv6LocatorName() {
    return this.getStringAttribute('srv6_locator_name');
  }
}

export class DataIosxrSegmentRoutingTePoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrSegmentRoutingTePoliciesOutputReference {
    return new DataIosxrSegmentRoutingTePoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/segment_routing_te iosxr_segment_routing_te}
*/
export class DataIosxrSegmentRoutingTe extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_segment_routing_te";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrSegmentRoutingTe resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrSegmentRoutingTe to import
  * @param importFromId The id of the existing DataIosxrSegmentRoutingTe that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/segment_routing_te#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrSegmentRoutingTe to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_segment_routing_te", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/segment_routing_te iosxr_segment_routing_te} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrSegmentRoutingTeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIosxrSegmentRoutingTeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxr_segment_routing_te',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logging_pcep_peer_status - computed: true, optional: false, required: false
  public get loggingPcepPeerStatus() {
    return this.getBooleanAttribute('logging_pcep_peer_status');
  }

  // logging_policy_status - computed: true, optional: false, required: false
  public get loggingPolicyStatus() {
    return this.getBooleanAttribute('logging_policy_status');
  }

  // on_demand_colors - computed: true, optional: false, required: false
  private _onDemandColors = new DataIosxrSegmentRoutingTeOnDemandColorsList(this, "on_demand_colors", false);
  public get onDemandColors() {
    return this._onDemandColors;
  }

  // pcc_dead_timer - computed: true, optional: false, required: false
  public get pccDeadTimer() {
    return this.getNumberAttribute('pcc_dead_timer');
  }

  // pcc_delegation_timeout - computed: true, optional: false, required: false
  public get pccDelegationTimeout() {
    return this.getNumberAttribute('pcc_delegation_timeout');
  }

  // pcc_initiated_orphan - computed: true, optional: false, required: false
  public get pccInitiatedOrphan() {
    return this.getNumberAttribute('pcc_initiated_orphan');
  }

  // pcc_initiated_state - computed: true, optional: false, required: false
  public get pccInitiatedState() {
    return this.getNumberAttribute('pcc_initiated_state');
  }

  // pcc_report_all - computed: true, optional: false, required: false
  public get pccReportAll() {
    return this.getBooleanAttribute('pcc_report_all');
  }

  // pcc_source_address - computed: true, optional: false, required: false
  public get pccSourceAddress() {
    return this.getStringAttribute('pcc_source_address');
  }

  // pce_peers - computed: true, optional: false, required: false
  private _pcePeers = new DataIosxrSegmentRoutingTePcePeersList(this, "pce_peers", false);
  public get pcePeers() {
    return this._pcePeers;
  }

  // policies - computed: true, optional: false, required: false
  private _policies = new DataIosxrSegmentRoutingTePoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
