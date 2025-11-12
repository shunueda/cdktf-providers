// https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DtcPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Flag for enabling auto managing DTC Consolidated Monitors in DTC Pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_pool#auto_consolidated_monitors DtcPool#auto_consolidated_monitors}
  */
  readonly autoConsolidatedMonitors?: boolean | cdktf.IResolvable;
  /**
  * A resource in the pool is available if ANY, at least QUORUM, or ALL monitors for the pool say that it is up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_pool#availability DtcPool#availability}
  */
  readonly availability?: string;
  /**
  * The comment for the DTC Pool; maximum 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_pool#comment DtcPool#comment}
  */
  readonly comment?: string;
  /**
  * List of monitors and associated members statuses of which are shared across members and consolidated in server availability determination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_pool#consolidated_monitors DtcPool#consolidated_monitors}
  */
  readonly consolidatedMonitors?: DtcPoolConsolidatedMonitors[] | cdktf.IResolvable;
  /**
  * Determines whether the DTC Pool is disabled or not. When this is set to False, the fixed address is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_pool#disable DtcPool#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Extensible attributes associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_pool#extattrs DtcPool#extattrs}
  */
  readonly extattrs?: { [key: string]: string };
  /**
  * The alternate load balancing method. Use this to select a method type from the pool if the preferred method does not return any results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_pool#lb_alternate_method DtcPool#lb_alternate_method}
  */
  readonly lbAlternateMethod?: string;
  /**
  * The alternate topology for load balancing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_pool#lb_alternate_topology DtcPool#lb_alternate_topology}
  */
  readonly lbAlternateTopology?: string;
  /**
  * The DTC Pool settings for dynamic ratio when its selected as alternate method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_pool#lb_dynamic_ratio_alternate DtcPool#lb_dynamic_ratio_alternate}
  */
  readonly lbDynamicRatioAlternate?: DtcPoolLbDynamicRatioAlternate;
  /**
  * The DTC Pool settings for dynamic ratio when its selected as preferred method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_pool#lb_dynamic_ratio_preferred DtcPool#lb_dynamic_ratio_preferred}
  */
  readonly lbDynamicRatioPreferred?: DtcPoolLbDynamicRatioPreferred;
  /**
  * The preferred load balancing method. Use this to select a method type from the pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_pool#lb_preferred_method DtcPool#lb_preferred_method}
  */
  readonly lbPreferredMethod: string;
  /**
  * The preferred topology for load balancing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_pool#lb_preferred_topology DtcPool#lb_preferred_topology}
  */
  readonly lbPreferredTopology?: string;
  /**
  * The monitors related to pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_pool#monitors DtcPool#monitors}
  */
  readonly monitors?: string[];
  /**
  * The DTC Pool display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_pool#name DtcPool#name}
  */
  readonly name: string;
  /**
  * For availability mode QUORUM, at least this many monitors must report the resource as up for it to be available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_pool#quorum DtcPool#quorum}
  */
  readonly quorum?: number;
  /**
  * The servers related to the pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_pool#servers DtcPool#servers}
  */
  readonly servers?: DtcPoolServers[] | cdktf.IResolvable;
  /**
  * The Time To Live (TTL) value for the DTC Pool. A 32-bit unsigned integer that represents the duration, in seconds, for which the record is valid (cached). Zero indicates that the record should not be cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_pool#ttl DtcPool#ttl}
  */
  readonly ttl?: number;
  /**
  * Flag to indicate whether the TTL value should be used for the DTC Pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_pool#use_ttl DtcPool#use_ttl}
  */
  readonly useTtl?: boolean | cdktf.IResolvable;
}
export interface DtcPoolConsolidatedMonitors {
  /**
  * Servers assigned to a pool with monitor defined are healthy if ANY or ALL members report healthy status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_pool#availability DtcPool#availability}
  */
  readonly availability?: string;
  /**
  * Flag for switching health performing and sharing behavior to perform health checks on each DTC grid member that serves related LBDN(s) and send them across all DTC grid members from both selected and non-selected lists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_pool#full_health_communication DtcPool#full_health_communication}
  */
  readonly fullHealthCommunication?: boolean | cdktf.IResolvable;
  /**
  * Members whose monitor statuses are shared across other members in a pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_pool#members DtcPool#members}
  */
  readonly members?: string[];
  /**
  * Monitor whose statuses are shared across other members in a pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_pool#monitor DtcPool#monitor}
  */
  readonly monitor?: string;
}

export function dtcPoolConsolidatedMonitorsToTerraform(struct?: DtcPoolConsolidatedMonitors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktf.stringToTerraform(struct!.availability),
    full_health_communication: cdktf.booleanToTerraform(struct!.fullHealthCommunication),
    members: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.members),
    monitor: cdktf.stringToTerraform(struct!.monitor),
  }
}


export function dtcPoolConsolidatedMonitorsToHclTerraform(struct?: DtcPoolConsolidatedMonitors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability: {
      value: cdktf.stringToHclTerraform(struct!.availability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    full_health_communication: {
      value: cdktf.booleanToHclTerraform(struct!.fullHealthCommunication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    members: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.members),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    monitor: {
      value: cdktf.stringToHclTerraform(struct!.monitor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DtcPoolConsolidatedMonitorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DtcPoolConsolidatedMonitors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availability !== undefined) {
      hasAnyValues = true;
      internalValueResult.availability = this._availability;
    }
    if (this._fullHealthCommunication !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullHealthCommunication = this._fullHealthCommunication;
    }
    if (this._members !== undefined) {
      hasAnyValues = true;
      internalValueResult.members = this._members;
    }
    if (this._monitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitor = this._monitor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DtcPoolConsolidatedMonitors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availability = undefined;
      this._fullHealthCommunication = undefined;
      this._members = undefined;
      this._monitor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availability = value.availability;
      this._fullHealthCommunication = value.fullHealthCommunication;
      this._members = value.members;
      this._monitor = value.monitor;
    }
  }

  // availability - computed: true, optional: true, required: false
  private _availability?: string; 
  public get availability() {
    return this.getStringAttribute('availability');
  }
  public set availability(value: string) {
    this._availability = value;
  }
  public resetAvailability() {
    this._availability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityInput() {
    return this._availability;
  }

  // full_health_communication - computed: true, optional: true, required: false
  private _fullHealthCommunication?: boolean | cdktf.IResolvable; 
  public get fullHealthCommunication() {
    return this.getBooleanAttribute('full_health_communication');
  }
  public set fullHealthCommunication(value: boolean | cdktf.IResolvable) {
    this._fullHealthCommunication = value;
  }
  public resetFullHealthCommunication() {
    this._fullHealthCommunication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullHealthCommunicationInput() {
    return this._fullHealthCommunication;
  }

  // members - computed: true, optional: true, required: false
  private _members?: string[]; 
  public get members() {
    return this.getListAttribute('members');
  }
  public set members(value: string[]) {
    this._members = value;
  }
  public resetMembers() {
    this._members = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members;
  }

  // monitor - computed: true, optional: true, required: false
  private _monitor?: string; 
  public get monitor() {
    return this.getStringAttribute('monitor');
  }
  public set monitor(value: string) {
    this._monitor = value;
  }
  public resetMonitor() {
    this._monitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor;
  }
}

export class DtcPoolConsolidatedMonitorsList extends cdktf.ComplexList {
  public internalValue? : DtcPoolConsolidatedMonitors[] | cdktf.IResolvable

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
  public get(index: number): DtcPoolConsolidatedMonitorsOutputReference {
    return new DtcPoolConsolidatedMonitorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DtcPoolHealth {
}

export function dtcPoolHealthToTerraform(struct?: DtcPoolHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dtcPoolHealthToHclTerraform(struct?: DtcPoolHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DtcPoolHealthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DtcPoolHealth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DtcPoolHealth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability - computed: true, optional: false, required: false
  public get availability() {
    return this.getStringAttribute('availability');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled_state - computed: true, optional: false, required: false
  public get enabledState() {
    return this.getStringAttribute('enabled_state');
  }
}
export interface DtcPoolLbDynamicRatioAlternate {
  /**
  * Determines whether the inverted values of the DTC SNMP monitor metric will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_pool#invert_monitor_metric DtcPool#invert_monitor_metric}
  */
  readonly invertMonitorMetric?: boolean | cdktf.IResolvable;
  /**
  * The method of the DTC dynamic ratio load balancing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_pool#method DtcPool#method}
  */
  readonly method?: string;
  /**
  * The DTC monitor output of which will be used for dynamic ratio load balancing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_pool#monitor DtcPool#monitor}
  */
  readonly monitor?: string;
  /**
  * The metric of the DTC SNMP monitor that will be used for dynamic weighing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_pool#monitor_metric DtcPool#monitor_metric}
  */
  readonly monitorMetric?: string;
  /**
  * The DTC monitor weight. 'PRIORITY' means that all clients will be forwarded to the least loaded server. 'RATIO' means that distribution will be calculated based on dynamic weights.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_pool#monitor_weighing DtcPool#monitor_weighing}
  */
  readonly monitorWeighing?: string;
}

export function dtcPoolLbDynamicRatioAlternateToTerraform(struct?: DtcPoolLbDynamicRatioAlternate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_monitor_metric: cdktf.booleanToTerraform(struct!.invertMonitorMetric),
    method: cdktf.stringToTerraform(struct!.method),
    monitor: cdktf.stringToTerraform(struct!.monitor),
    monitor_metric: cdktf.stringToTerraform(struct!.monitorMetric),
    monitor_weighing: cdktf.stringToTerraform(struct!.monitorWeighing),
  }
}


export function dtcPoolLbDynamicRatioAlternateToHclTerraform(struct?: DtcPoolLbDynamicRatioAlternate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert_monitor_metric: {
      value: cdktf.booleanToHclTerraform(struct!.invertMonitorMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitor: {
      value: cdktf.stringToHclTerraform(struct!.monitor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitor_metric: {
      value: cdktf.stringToHclTerraform(struct!.monitorMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitor_weighing: {
      value: cdktf.stringToHclTerraform(struct!.monitorWeighing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DtcPoolLbDynamicRatioAlternateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DtcPoolLbDynamicRatioAlternate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMonitorMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMonitorMetric = this._invertMonitorMetric;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._monitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitor = this._monitor;
    }
    if (this._monitorMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorMetric = this._monitorMetric;
    }
    if (this._monitorWeighing !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorWeighing = this._monitorWeighing;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DtcPoolLbDynamicRatioAlternate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invertMonitorMetric = undefined;
      this._method = undefined;
      this._monitor = undefined;
      this._monitorMetric = undefined;
      this._monitorWeighing = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invertMonitorMetric = value.invertMonitorMetric;
      this._method = value.method;
      this._monitor = value.monitor;
      this._monitorMetric = value.monitorMetric;
      this._monitorWeighing = value.monitorWeighing;
    }
  }

  // invert_monitor_metric - computed: true, optional: true, required: false
  private _invertMonitorMetric?: boolean | cdktf.IResolvable; 
  public get invertMonitorMetric() {
    return this.getBooleanAttribute('invert_monitor_metric');
  }
  public set invertMonitorMetric(value: boolean | cdktf.IResolvable) {
    this._invertMonitorMetric = value;
  }
  public resetInvertMonitorMetric() {
    this._invertMonitorMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMonitorMetricInput() {
    return this._invertMonitorMetric;
  }

  // method - computed: true, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // monitor - computed: true, optional: true, required: false
  private _monitor?: string; 
  public get monitor() {
    return this.getStringAttribute('monitor');
  }
  public set monitor(value: string) {
    this._monitor = value;
  }
  public resetMonitor() {
    this._monitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor;
  }

  // monitor_metric - computed: true, optional: true, required: false
  private _monitorMetric?: string; 
  public get monitorMetric() {
    return this.getStringAttribute('monitor_metric');
  }
  public set monitorMetric(value: string) {
    this._monitorMetric = value;
  }
  public resetMonitorMetric() {
    this._monitorMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorMetricInput() {
    return this._monitorMetric;
  }

  // monitor_weighing - computed: true, optional: true, required: false
  private _monitorWeighing?: string; 
  public get monitorWeighing() {
    return this.getStringAttribute('monitor_weighing');
  }
  public set monitorWeighing(value: string) {
    this._monitorWeighing = value;
  }
  public resetMonitorWeighing() {
    this._monitorWeighing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorWeighingInput() {
    return this._monitorWeighing;
  }
}
export interface DtcPoolLbDynamicRatioPreferred {
  /**
  * Determines whether the inverted values of the DTC SNMP monitor metric will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_pool#invert_monitor_metric DtcPool#invert_monitor_metric}
  */
  readonly invertMonitorMetric?: boolean | cdktf.IResolvable;
  /**
  * The method of the DTC dynamic ratio load balancing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_pool#method DtcPool#method}
  */
  readonly method?: string;
  /**
  * The DTC monitor output of which will be used for dynamic ratio load balancing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_pool#monitor DtcPool#monitor}
  */
  readonly monitor?: string;
  /**
  * The metric of the DTC SNMP monitor that will be used for dynamic weighing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_pool#monitor_metric DtcPool#monitor_metric}
  */
  readonly monitorMetric?: string;
  /**
  * The DTC monitor weight. 'PRIORITY' means that all clients will be forwarded to the least loaded server. 'RATIO' means that distribution will be calculated based on dynamic weights.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_pool#monitor_weighing DtcPool#monitor_weighing}
  */
  readonly monitorWeighing?: string;
}

export function dtcPoolLbDynamicRatioPreferredToTerraform(struct?: DtcPoolLbDynamicRatioPreferred | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_monitor_metric: cdktf.booleanToTerraform(struct!.invertMonitorMetric),
    method: cdktf.stringToTerraform(struct!.method),
    monitor: cdktf.stringToTerraform(struct!.monitor),
    monitor_metric: cdktf.stringToTerraform(struct!.monitorMetric),
    monitor_weighing: cdktf.stringToTerraform(struct!.monitorWeighing),
  }
}


export function dtcPoolLbDynamicRatioPreferredToHclTerraform(struct?: DtcPoolLbDynamicRatioPreferred | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert_monitor_metric: {
      value: cdktf.booleanToHclTerraform(struct!.invertMonitorMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitor: {
      value: cdktf.stringToHclTerraform(struct!.monitor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitor_metric: {
      value: cdktf.stringToHclTerraform(struct!.monitorMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitor_weighing: {
      value: cdktf.stringToHclTerraform(struct!.monitorWeighing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DtcPoolLbDynamicRatioPreferredOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DtcPoolLbDynamicRatioPreferred | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMonitorMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMonitorMetric = this._invertMonitorMetric;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._monitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitor = this._monitor;
    }
    if (this._monitorMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorMetric = this._monitorMetric;
    }
    if (this._monitorWeighing !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorWeighing = this._monitorWeighing;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DtcPoolLbDynamicRatioPreferred | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invertMonitorMetric = undefined;
      this._method = undefined;
      this._monitor = undefined;
      this._monitorMetric = undefined;
      this._monitorWeighing = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invertMonitorMetric = value.invertMonitorMetric;
      this._method = value.method;
      this._monitor = value.monitor;
      this._monitorMetric = value.monitorMetric;
      this._monitorWeighing = value.monitorWeighing;
    }
  }

  // invert_monitor_metric - computed: true, optional: true, required: false
  private _invertMonitorMetric?: boolean | cdktf.IResolvable; 
  public get invertMonitorMetric() {
    return this.getBooleanAttribute('invert_monitor_metric');
  }
  public set invertMonitorMetric(value: boolean | cdktf.IResolvable) {
    this._invertMonitorMetric = value;
  }
  public resetInvertMonitorMetric() {
    this._invertMonitorMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMonitorMetricInput() {
    return this._invertMonitorMetric;
  }

  // method - computed: true, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // monitor - computed: true, optional: true, required: false
  private _monitor?: string; 
  public get monitor() {
    return this.getStringAttribute('monitor');
  }
  public set monitor(value: string) {
    this._monitor = value;
  }
  public resetMonitor() {
    this._monitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor;
  }

  // monitor_metric - computed: true, optional: true, required: false
  private _monitorMetric?: string; 
  public get monitorMetric() {
    return this.getStringAttribute('monitor_metric');
  }
  public set monitorMetric(value: string) {
    this._monitorMetric = value;
  }
  public resetMonitorMetric() {
    this._monitorMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorMetricInput() {
    return this._monitorMetric;
  }

  // monitor_weighing - computed: true, optional: true, required: false
  private _monitorWeighing?: string; 
  public get monitorWeighing() {
    return this.getStringAttribute('monitor_weighing');
  }
  public set monitorWeighing(value: string) {
    this._monitorWeighing = value;
  }
  public resetMonitorWeighing() {
    this._monitorWeighing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorWeighingInput() {
    return this._monitorWeighing;
  }
}
export interface DtcPoolServers {
  /**
  * The weight of server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_pool#ratio DtcPool#ratio}
  */
  readonly ratio?: number;
  /**
  * The server to link with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_pool#server DtcPool#server}
  */
  readonly server: string;
}

export function dtcPoolServersToTerraform(struct?: DtcPoolServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ratio: cdktf.numberToTerraform(struct!.ratio),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function dtcPoolServersToHclTerraform(struct?: DtcPoolServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ratio: {
      value: cdktf.numberToHclTerraform(struct!.ratio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DtcPoolServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DtcPoolServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ratio !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratio = this._ratio;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DtcPoolServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ratio = undefined;
      this._server = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ratio = value.ratio;
      this._server = value.server;
    }
  }

  // ratio - computed: false, optional: true, required: false
  private _ratio?: number; 
  public get ratio() {
    return this.getNumberAttribute('ratio');
  }
  public set ratio(value: number) {
    this._ratio = value;
  }
  public resetRatio() {
    this._ratio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratioInput() {
    return this._ratio;
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}

export class DtcPoolServersList extends cdktf.ComplexList {
  public internalValue? : DtcPoolServers[] | cdktf.IResolvable

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
  public get(index: number): DtcPoolServersOutputReference {
    return new DtcPoolServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_pool nios_dtc_pool}
*/
export class DtcPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_dtc_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DtcPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DtcPool to import
  * @param importFromId The id of the existing DtcPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DtcPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_dtc_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dtc_pool nios_dtc_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DtcPoolConfig
  */
  public constructor(scope: Construct, id: string, config: DtcPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'nios_dtc_pool',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoConsolidatedMonitors = config.autoConsolidatedMonitors;
    this._availability = config.availability;
    this._comment = config.comment;
    this._consolidatedMonitors.internalValue = config.consolidatedMonitors;
    this._disable = config.disable;
    this._extattrs = config.extattrs;
    this._lbAlternateMethod = config.lbAlternateMethod;
    this._lbAlternateTopology = config.lbAlternateTopology;
    this._lbDynamicRatioAlternate.internalValue = config.lbDynamicRatioAlternate;
    this._lbDynamicRatioPreferred.internalValue = config.lbDynamicRatioPreferred;
    this._lbPreferredMethod = config.lbPreferredMethod;
    this._lbPreferredTopology = config.lbPreferredTopology;
    this._monitors = config.monitors;
    this._name = config.name;
    this._quorum = config.quorum;
    this._servers.internalValue = config.servers;
    this._ttl = config.ttl;
    this._useTtl = config.useTtl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_consolidated_monitors - computed: true, optional: true, required: false
  private _autoConsolidatedMonitors?: boolean | cdktf.IResolvable; 
  public get autoConsolidatedMonitors() {
    return this.getBooleanAttribute('auto_consolidated_monitors');
  }
  public set autoConsolidatedMonitors(value: boolean | cdktf.IResolvable) {
    this._autoConsolidatedMonitors = value;
  }
  public resetAutoConsolidatedMonitors() {
    this._autoConsolidatedMonitors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoConsolidatedMonitorsInput() {
    return this._autoConsolidatedMonitors;
  }

  // availability - computed: true, optional: true, required: false
  private _availability?: string; 
  public get availability() {
    return this.getStringAttribute('availability');
  }
  public set availability(value: string) {
    this._availability = value;
  }
  public resetAvailability() {
    this._availability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityInput() {
    return this._availability;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // consolidated_monitors - computed: true, optional: true, required: false
  private _consolidatedMonitors = new DtcPoolConsolidatedMonitorsList(this, "consolidated_monitors", false);
  public get consolidatedMonitors() {
    return this._consolidatedMonitors;
  }
  public putConsolidatedMonitors(value: DtcPoolConsolidatedMonitors[] | cdktf.IResolvable) {
    this._consolidatedMonitors.internalValue = value;
  }
  public resetConsolidatedMonitors() {
    this._consolidatedMonitors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consolidatedMonitorsInput() {
    return this._consolidatedMonitors.internalValue;
  }

  // disable - computed: true, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // extattrs - computed: true, optional: true, required: false
  private _extattrs?: { [key: string]: string }; 
  public get extattrs() {
    return this.getStringMapAttribute('extattrs');
  }
  public set extattrs(value: { [key: string]: string }) {
    this._extattrs = value;
  }
  public resetExtattrs() {
    this._extattrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extattrsInput() {
    return this._extattrs;
  }

  // extattrs_all - computed: true, optional: false, required: false
  private _extattrsAll = new cdktf.StringMap(this, "extattrs_all");
  public get extattrsAll() {
    return this._extattrsAll;
  }

  // health - computed: true, optional: false, required: false
  private _health = new DtcPoolHealthOutputReference(this, "health");
  public get health() {
    return this._health;
  }

  // lb_alternate_method - computed: true, optional: true, required: false
  private _lbAlternateMethod?: string; 
  public get lbAlternateMethod() {
    return this.getStringAttribute('lb_alternate_method');
  }
  public set lbAlternateMethod(value: string) {
    this._lbAlternateMethod = value;
  }
  public resetLbAlternateMethod() {
    this._lbAlternateMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbAlternateMethodInput() {
    return this._lbAlternateMethod;
  }

  // lb_alternate_topology - computed: true, optional: true, required: false
  private _lbAlternateTopology?: string; 
  public get lbAlternateTopology() {
    return this.getStringAttribute('lb_alternate_topology');
  }
  public set lbAlternateTopology(value: string) {
    this._lbAlternateTopology = value;
  }
  public resetLbAlternateTopology() {
    this._lbAlternateTopology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbAlternateTopologyInput() {
    return this._lbAlternateTopology;
  }

  // lb_dynamic_ratio_alternate - computed: true, optional: true, required: false
  private _lbDynamicRatioAlternate = new DtcPoolLbDynamicRatioAlternateOutputReference(this, "lb_dynamic_ratio_alternate");
  public get lbDynamicRatioAlternate() {
    return this._lbDynamicRatioAlternate;
  }
  public putLbDynamicRatioAlternate(value: DtcPoolLbDynamicRatioAlternate) {
    this._lbDynamicRatioAlternate.internalValue = value;
  }
  public resetLbDynamicRatioAlternate() {
    this._lbDynamicRatioAlternate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbDynamicRatioAlternateInput() {
    return this._lbDynamicRatioAlternate.internalValue;
  }

  // lb_dynamic_ratio_preferred - computed: true, optional: true, required: false
  private _lbDynamicRatioPreferred = new DtcPoolLbDynamicRatioPreferredOutputReference(this, "lb_dynamic_ratio_preferred");
  public get lbDynamicRatioPreferred() {
    return this._lbDynamicRatioPreferred;
  }
  public putLbDynamicRatioPreferred(value: DtcPoolLbDynamicRatioPreferred) {
    this._lbDynamicRatioPreferred.internalValue = value;
  }
  public resetLbDynamicRatioPreferred() {
    this._lbDynamicRatioPreferred.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbDynamicRatioPreferredInput() {
    return this._lbDynamicRatioPreferred.internalValue;
  }

  // lb_preferred_method - computed: false, optional: false, required: true
  private _lbPreferredMethod?: string; 
  public get lbPreferredMethod() {
    return this.getStringAttribute('lb_preferred_method');
  }
  public set lbPreferredMethod(value: string) {
    this._lbPreferredMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lbPreferredMethodInput() {
    return this._lbPreferredMethod;
  }

  // lb_preferred_topology - computed: true, optional: true, required: false
  private _lbPreferredTopology?: string; 
  public get lbPreferredTopology() {
    return this.getStringAttribute('lb_preferred_topology');
  }
  public set lbPreferredTopology(value: string) {
    this._lbPreferredTopology = value;
  }
  public resetLbPreferredTopology() {
    this._lbPreferredTopology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbPreferredTopologyInput() {
    return this._lbPreferredTopology;
  }

  // monitors - computed: false, optional: true, required: false
  private _monitors?: string[]; 
  public get monitors() {
    return this.getListAttribute('monitors');
  }
  public set monitors(value: string[]) {
    this._monitors = value;
  }
  public resetMonitors() {
    this._monitors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorsInput() {
    return this._monitors;
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

  // quorum - computed: false, optional: true, required: false
  private _quorum?: number; 
  public get quorum() {
    return this.getNumberAttribute('quorum');
  }
  public set quorum(value: number) {
    this._quorum = value;
  }
  public resetQuorum() {
    this._quorum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quorumInput() {
    return this._quorum;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // servers - computed: false, optional: true, required: false
  private _servers = new DtcPoolServersList(this, "servers", false);
  public get servers() {
    return this._servers;
  }
  public putServers(value: DtcPoolServers[] | cdktf.IResolvable) {
    this._servers.internalValue = value;
  }
  public resetServers() {
    this._servers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers.internalValue;
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

  // use_ttl - computed: true, optional: true, required: false
  private _useTtl?: boolean | cdktf.IResolvable; 
  public get useTtl() {
    return this.getBooleanAttribute('use_ttl');
  }
  public set useTtl(value: boolean | cdktf.IResolvable) {
    this._useTtl = value;
  }
  public resetUseTtl() {
    this._useTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTtlInput() {
    return this._useTtl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_consolidated_monitors: cdktf.booleanToTerraform(this._autoConsolidatedMonitors),
      availability: cdktf.stringToTerraform(this._availability),
      comment: cdktf.stringToTerraform(this._comment),
      consolidated_monitors: cdktf.listMapper(dtcPoolConsolidatedMonitorsToTerraform, false)(this._consolidatedMonitors.internalValue),
      disable: cdktf.booleanToTerraform(this._disable),
      extattrs: cdktf.hashMapper(cdktf.stringToTerraform)(this._extattrs),
      lb_alternate_method: cdktf.stringToTerraform(this._lbAlternateMethod),
      lb_alternate_topology: cdktf.stringToTerraform(this._lbAlternateTopology),
      lb_dynamic_ratio_alternate: dtcPoolLbDynamicRatioAlternateToTerraform(this._lbDynamicRatioAlternate.internalValue),
      lb_dynamic_ratio_preferred: dtcPoolLbDynamicRatioPreferredToTerraform(this._lbDynamicRatioPreferred.internalValue),
      lb_preferred_method: cdktf.stringToTerraform(this._lbPreferredMethod),
      lb_preferred_topology: cdktf.stringToTerraform(this._lbPreferredTopology),
      monitors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._monitors),
      name: cdktf.stringToTerraform(this._name),
      quorum: cdktf.numberToTerraform(this._quorum),
      servers: cdktf.listMapper(dtcPoolServersToTerraform, false)(this._servers.internalValue),
      ttl: cdktf.numberToTerraform(this._ttl),
      use_ttl: cdktf.booleanToTerraform(this._useTtl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_consolidated_monitors: {
        value: cdktf.booleanToHclTerraform(this._autoConsolidatedMonitors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      availability: {
        value: cdktf.stringToHclTerraform(this._availability),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consolidated_monitors: {
        value: cdktf.listMapperHcl(dtcPoolConsolidatedMonitorsToHclTerraform, false)(this._consolidatedMonitors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DtcPoolConsolidatedMonitorsList",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      extattrs: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extattrs),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      lb_alternate_method: {
        value: cdktf.stringToHclTerraform(this._lbAlternateMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lb_alternate_topology: {
        value: cdktf.stringToHclTerraform(this._lbAlternateTopology),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lb_dynamic_ratio_alternate: {
        value: dtcPoolLbDynamicRatioAlternateToHclTerraform(this._lbDynamicRatioAlternate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DtcPoolLbDynamicRatioAlternate",
      },
      lb_dynamic_ratio_preferred: {
        value: dtcPoolLbDynamicRatioPreferredToHclTerraform(this._lbDynamicRatioPreferred.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DtcPoolLbDynamicRatioPreferred",
      },
      lb_preferred_method: {
        value: cdktf.stringToHclTerraform(this._lbPreferredMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lb_preferred_topology: {
        value: cdktf.stringToHclTerraform(this._lbPreferredTopology),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._monitors),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quorum: {
        value: cdktf.numberToHclTerraform(this._quorum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      servers: {
        value: cdktf.listMapperHcl(dtcPoolServersToHclTerraform, false)(this._servers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DtcPoolServersList",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_ttl: {
        value: cdktf.booleanToHclTerraform(this._useTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
