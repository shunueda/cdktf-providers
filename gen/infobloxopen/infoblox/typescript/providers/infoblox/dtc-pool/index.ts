// https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DtcPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Flag for enabling auto managing DTC Consolidated Monitors in DTC Pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_pool#auto_consolidated_monitors DtcPool#auto_consolidated_monitors}
  */
  readonly autoConsolidatedMonitors?: boolean | cdktf.IResolvable;
  /**
  * A resource in the pool is available if ANY, at least QUORUM, or ALL monitors for the pool say that it is up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_pool#availability DtcPool#availability}
  */
  readonly availability?: string;
  /**
  * Description of the Dtc pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_pool#comment DtcPool#comment}
  */
  readonly comment?: string;
  /**
  * Determines if the zone is disabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_pool#disable DtcPool#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Extensible attributes of the  Dtc Pool to be added/updated, as a map in JSON format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_pool#ext_attrs DtcPool#ext_attrs}
  */
  readonly extAttrs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_pool#id DtcPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The alternate load balancing method. Use this to select a method type from the pool if the preferred method does not return any results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_pool#lb_alternate_method DtcPool#lb_alternate_method}
  */
  readonly lbAlternateMethod?: string;
  /**
  * The alternate topology for load balancing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_pool#lb_alternate_topology DtcPool#lb_alternate_topology}
  */
  readonly lbAlternateTopology?: string;
  /**
  * The DTC Pool settings for dynamic ratio when it’s selected as alternate method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_pool#lb_dynamic_ratio_alternate DtcPool#lb_dynamic_ratio_alternate}
  */
  readonly lbDynamicRatioAlternate?: string;
  /**
  * The DTC Pool settings for dynamic ratio when it’s selected as preferred method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_pool#lb_dynamic_ratio_preferred DtcPool#lb_dynamic_ratio_preferred}
  */
  readonly lbDynamicRatioPreferred?: string;
  /**
  * Load Balancing Preferred Method of the DTC pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_pool#lb_preferred_method DtcPool#lb_preferred_method}
  */
  readonly lbPreferredMethod: string;
  /**
  * The preferred topology for load balancing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_pool#lb_preferred_topology DtcPool#lb_preferred_topology}
  */
  readonly lbPreferredTopology?: string;
  /**
  * Name of the DTC pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_pool#name DtcPool#name}
  */
  readonly name: string;
  /**
  * For availability mode QUORUM, at least this many monitors must report the resource as up for it to be available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_pool#quorum DtcPool#quorum}
  */
  readonly quorum?: number;
  /**
  * TTL value for the Dtc Pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_pool#ttl DtcPool#ttl}
  */
  readonly ttl?: number;
  /**
  * consolidated_monitors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_pool#consolidated_monitors DtcPool#consolidated_monitors}
  */
  readonly consolidatedMonitors?: DtcPoolConsolidatedMonitors[] | cdktf.IResolvable;
  /**
  * monitors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_pool#monitors DtcPool#monitors}
  */
  readonly monitors?: DtcPoolMonitors[] | cdktf.IResolvable;
  /**
  * servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_pool#servers DtcPool#servers}
  */
  readonly servers?: DtcPoolServers[] | cdktf.IResolvable;
}
export interface DtcPoolConsolidatedMonitors {
  /**
  * Servers assigned to a pool with monitor defined are healthy if ANY or ALL members report healthy status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_pool#availability DtcPool#availability}
  */
  readonly availability?: string;
  /**
  * Flag for switching health performing and sharing behavior to perform health checks on each DTC grid member that serves related LBDN(s) and send them across all DTC grid members from both selected and non-selected lists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_pool#full_health_communication DtcPool#full_health_communication}
  */
  readonly fullHealthCommunication?: boolean | cdktf.IResolvable;
  /**
  * Members whose monitor statuses are shared across other members in a pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_pool#members DtcPool#members}
  */
  readonly members: string[];
  /**
  * The name of the monitor 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_pool#monitor_name DtcPool#monitor_name}
  */
  readonly monitorName: string;
  /**
  * The type of the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_pool#monitor_type DtcPool#monitor_type}
  */
  readonly monitorType: string;
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
    monitor_name: cdktf.stringToTerraform(struct!.monitorName),
    monitor_type: cdktf.stringToTerraform(struct!.monitorType),
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
    monitor_name: {
      value: cdktf.stringToHclTerraform(struct!.monitorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitor_type: {
      value: cdktf.stringToHclTerraform(struct!.monitorType),
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
    if (this._monitorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorName = this._monitorName;
    }
    if (this._monitorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorType = this._monitorType;
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
      this._monitorName = undefined;
      this._monitorType = undefined;
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
      this._monitorName = value.monitorName;
      this._monitorType = value.monitorType;
    }
  }

  // availability - computed: false, optional: true, required: false
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

  // full_health_communication - computed: false, optional: true, required: false
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

  // members - computed: false, optional: false, required: true
  private _members?: string[]; 
  public get members() {
    return this.getListAttribute('members');
  }
  public set members(value: string[]) {
    this._members = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members;
  }

  // monitor_name - computed: false, optional: false, required: true
  private _monitorName?: string; 
  public get monitorName() {
    return this.getStringAttribute('monitor_name');
  }
  public set monitorName(value: string) {
    this._monitorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorNameInput() {
    return this._monitorName;
  }

  // monitor_type - computed: false, optional: false, required: true
  private _monitorType?: string; 
  public get monitorType() {
    return this.getStringAttribute('monitor_type');
  }
  public set monitorType(value: string) {
    this._monitorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorTypeInput() {
    return this._monitorType;
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
export interface DtcPoolMonitors {
  /**
  * The name of the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_pool#monitor_name DtcPool#monitor_name}
  */
  readonly monitorName: string;
  /**
  * The type of the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_pool#monitor_type DtcPool#monitor_type}
  */
  readonly monitorType: string;
}

export function dtcPoolMonitorsToTerraform(struct?: DtcPoolMonitors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitor_name: cdktf.stringToTerraform(struct!.monitorName),
    monitor_type: cdktf.stringToTerraform(struct!.monitorType),
  }
}


export function dtcPoolMonitorsToHclTerraform(struct?: DtcPoolMonitors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    monitor_name: {
      value: cdktf.stringToHclTerraform(struct!.monitorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitor_type: {
      value: cdktf.stringToHclTerraform(struct!.monitorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DtcPoolMonitorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DtcPoolMonitors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monitorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorName = this._monitorName;
    }
    if (this._monitorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorType = this._monitorType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DtcPoolMonitors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._monitorName = undefined;
      this._monitorType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._monitorName = value.monitorName;
      this._monitorType = value.monitorType;
    }
  }

  // monitor_name - computed: false, optional: false, required: true
  private _monitorName?: string; 
  public get monitorName() {
    return this.getStringAttribute('monitor_name');
  }
  public set monitorName(value: string) {
    this._monitorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorNameInput() {
    return this._monitorName;
  }

  // monitor_type - computed: false, optional: false, required: true
  private _monitorType?: string; 
  public get monitorType() {
    return this.getStringAttribute('monitor_type');
  }
  public set monitorType(value: string) {
    this._monitorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorTypeInput() {
    return this._monitorType;
  }
}

export class DtcPoolMonitorsList extends cdktf.ComplexList {
  public internalValue? : DtcPoolMonitors[] | cdktf.IResolvable

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
  public get(index: number): DtcPoolMonitorsOutputReference {
    return new DtcPoolMonitorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DtcPoolServers {
  /**
  * The weight of server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_pool#ratio DtcPool#ratio}
  */
  readonly ratio: number;
  /**
  * The name of the server for the pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_pool#server DtcPool#server}
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

  // ratio - computed: false, optional: false, required: true
  private _ratio?: number; 
  public get ratio() {
    return this.getNumberAttribute('ratio');
  }
  public set ratio(value: number) {
    this._ratio = value;
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
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_pool infoblox_dtc_pool}
*/
export class DtcPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infoblox_dtc_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DtcPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DtcPool to import
  * @param importFromId The id of the existing DtcPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DtcPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infoblox_dtc_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/dtc_pool infoblox_dtc_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DtcPoolConfig
  */
  public constructor(scope: Construct, id: string, config: DtcPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'infoblox_dtc_pool',
      terraformGeneratorMetadata: {
        providerName: 'infoblox',
        providerVersion: '2.11.0'
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
    this._disable = config.disable;
    this._extAttrs = config.extAttrs;
    this._id = config.id;
    this._lbAlternateMethod = config.lbAlternateMethod;
    this._lbAlternateTopology = config.lbAlternateTopology;
    this._lbDynamicRatioAlternate = config.lbDynamicRatioAlternate;
    this._lbDynamicRatioPreferred = config.lbDynamicRatioPreferred;
    this._lbPreferredMethod = config.lbPreferredMethod;
    this._lbPreferredTopology = config.lbPreferredTopology;
    this._name = config.name;
    this._quorum = config.quorum;
    this._ttl = config.ttl;
    this._consolidatedMonitors.internalValue = config.consolidatedMonitors;
    this._monitors.internalValue = config.monitors;
    this._servers.internalValue = config.servers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_consolidated_monitors - computed: false, optional: true, required: false
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

  // availability - computed: false, optional: true, required: false
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

  // comment - computed: false, optional: true, required: false
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

  // disable - computed: false, optional: true, required: false
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

  // ext_attrs - computed: false, optional: true, required: false
  private _extAttrs?: string; 
  public get extAttrs() {
    return this.getStringAttribute('ext_attrs');
  }
  public set extAttrs(value: string) {
    this._extAttrs = value;
  }
  public resetExtAttrs() {
    this._extAttrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extAttrsInput() {
    return this._extAttrs;
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

  // internal_id - computed: true, optional: false, required: false
  public get internalId() {
    return this.getStringAttribute('internal_id');
  }

  // lb_alternate_method - computed: false, optional: true, required: false
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

  // lb_alternate_topology - computed: false, optional: true, required: false
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

  // lb_dynamic_ratio_alternate - computed: false, optional: true, required: false
  private _lbDynamicRatioAlternate?: string; 
  public get lbDynamicRatioAlternate() {
    return this.getStringAttribute('lb_dynamic_ratio_alternate');
  }
  public set lbDynamicRatioAlternate(value: string) {
    this._lbDynamicRatioAlternate = value;
  }
  public resetLbDynamicRatioAlternate() {
    this._lbDynamicRatioAlternate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbDynamicRatioAlternateInput() {
    return this._lbDynamicRatioAlternate;
  }

  // lb_dynamic_ratio_preferred - computed: false, optional: true, required: false
  private _lbDynamicRatioPreferred?: string; 
  public get lbDynamicRatioPreferred() {
    return this.getStringAttribute('lb_dynamic_ratio_preferred');
  }
  public set lbDynamicRatioPreferred(value: string) {
    this._lbDynamicRatioPreferred = value;
  }
  public resetLbDynamicRatioPreferred() {
    this._lbDynamicRatioPreferred = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbDynamicRatioPreferredInput() {
    return this._lbDynamicRatioPreferred;
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

  // lb_preferred_topology - computed: false, optional: true, required: false
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

  // consolidated_monitors - computed: false, optional: true, required: false
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

  // monitors - computed: false, optional: true, required: false
  private _monitors = new DtcPoolMonitorsList(this, "monitors", false);
  public get monitors() {
    return this._monitors;
  }
  public putMonitors(value: DtcPoolMonitors[] | cdktf.IResolvable) {
    this._monitors.internalValue = value;
  }
  public resetMonitors() {
    this._monitors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorsInput() {
    return this._monitors.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_consolidated_monitors: cdktf.booleanToTerraform(this._autoConsolidatedMonitors),
      availability: cdktf.stringToTerraform(this._availability),
      comment: cdktf.stringToTerraform(this._comment),
      disable: cdktf.booleanToTerraform(this._disable),
      ext_attrs: cdktf.stringToTerraform(this._extAttrs),
      id: cdktf.stringToTerraform(this._id),
      lb_alternate_method: cdktf.stringToTerraform(this._lbAlternateMethod),
      lb_alternate_topology: cdktf.stringToTerraform(this._lbAlternateTopology),
      lb_dynamic_ratio_alternate: cdktf.stringToTerraform(this._lbDynamicRatioAlternate),
      lb_dynamic_ratio_preferred: cdktf.stringToTerraform(this._lbDynamicRatioPreferred),
      lb_preferred_method: cdktf.stringToTerraform(this._lbPreferredMethod),
      lb_preferred_topology: cdktf.stringToTerraform(this._lbPreferredTopology),
      name: cdktf.stringToTerraform(this._name),
      quorum: cdktf.numberToTerraform(this._quorum),
      ttl: cdktf.numberToTerraform(this._ttl),
      consolidated_monitors: cdktf.listMapper(dtcPoolConsolidatedMonitorsToTerraform, true)(this._consolidatedMonitors.internalValue),
      monitors: cdktf.listMapper(dtcPoolMonitorsToTerraform, true)(this._monitors.internalValue),
      servers: cdktf.listMapper(dtcPoolServersToTerraform, true)(this._servers.internalValue),
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
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ext_attrs: {
        value: cdktf.stringToHclTerraform(this._extAttrs),
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
        value: cdktf.stringToHclTerraform(this._lbDynamicRatioAlternate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lb_dynamic_ratio_preferred: {
        value: cdktf.stringToHclTerraform(this._lbDynamicRatioPreferred),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      consolidated_monitors: {
        value: cdktf.listMapperHcl(dtcPoolConsolidatedMonitorsToHclTerraform, true)(this._consolidatedMonitors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DtcPoolConsolidatedMonitorsList",
      },
      monitors: {
        value: cdktf.listMapperHcl(dtcPoolMonitorsToHclTerraform, true)(this._monitors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DtcPoolMonitorsList",
      },
      servers: {
        value: cdktf.listMapperHcl(dtcPoolServersToHclTerraform, true)(this._servers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DtcPoolServersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
