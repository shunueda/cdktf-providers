// https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/data-sources/dtc_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInfobloxDtcPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/data-sources/dtc_pool#filters DataInfobloxDtcPool#filters}
  */
  readonly filters: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/data-sources/dtc_pool#id DataInfobloxDtcPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataInfobloxDtcPoolResultsConsolidatedMonitors {
}

export function dataInfobloxDtcPoolResultsConsolidatedMonitorsToTerraform(struct?: DataInfobloxDtcPoolResultsConsolidatedMonitors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataInfobloxDtcPoolResultsConsolidatedMonitorsToHclTerraform(struct?: DataInfobloxDtcPoolResultsConsolidatedMonitors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataInfobloxDtcPoolResultsConsolidatedMonitorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInfobloxDtcPoolResultsConsolidatedMonitors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInfobloxDtcPoolResultsConsolidatedMonitors | undefined) {
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

  // full_health_communication - computed: true, optional: false, required: false
  public get fullHealthCommunication() {
    return this.getBooleanAttribute('full_health_communication');
  }

  // members - computed: true, optional: false, required: false
  public get members() {
    return this.getListAttribute('members');
  }

  // monitor_name - computed: true, optional: false, required: false
  public get monitorName() {
    return this.getStringAttribute('monitor_name');
  }

  // monitor_type - computed: true, optional: false, required: false
  public get monitorType() {
    return this.getStringAttribute('monitor_type');
  }
}

export class DataInfobloxDtcPoolResultsConsolidatedMonitorsList extends cdktf.ComplexList {

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
  public get(index: number): DataInfobloxDtcPoolResultsConsolidatedMonitorsOutputReference {
    return new DataInfobloxDtcPoolResultsConsolidatedMonitorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInfobloxDtcPoolResultsMonitors {
}

export function dataInfobloxDtcPoolResultsMonitorsToTerraform(struct?: DataInfobloxDtcPoolResultsMonitors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataInfobloxDtcPoolResultsMonitorsToHclTerraform(struct?: DataInfobloxDtcPoolResultsMonitors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataInfobloxDtcPoolResultsMonitorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInfobloxDtcPoolResultsMonitors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInfobloxDtcPoolResultsMonitors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // monitor_name - computed: true, optional: false, required: false
  public get monitorName() {
    return this.getStringAttribute('monitor_name');
  }

  // monitor_type - computed: true, optional: false, required: false
  public get monitorType() {
    return this.getStringAttribute('monitor_type');
  }
}

export class DataInfobloxDtcPoolResultsMonitorsList extends cdktf.ComplexList {

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
  public get(index: number): DataInfobloxDtcPoolResultsMonitorsOutputReference {
    return new DataInfobloxDtcPoolResultsMonitorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInfobloxDtcPoolResultsServers {
}

export function dataInfobloxDtcPoolResultsServersToTerraform(struct?: DataInfobloxDtcPoolResultsServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataInfobloxDtcPoolResultsServersToHclTerraform(struct?: DataInfobloxDtcPoolResultsServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataInfobloxDtcPoolResultsServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInfobloxDtcPoolResultsServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInfobloxDtcPoolResultsServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ratio - computed: true, optional: false, required: false
  public get ratio() {
    return this.getNumberAttribute('ratio');
  }

  // server - computed: true, optional: false, required: false
  public get server() {
    return this.getStringAttribute('server');
  }
}

export class DataInfobloxDtcPoolResultsServersList extends cdktf.ComplexList {

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
  public get(index: number): DataInfobloxDtcPoolResultsServersOutputReference {
    return new DataInfobloxDtcPoolResultsServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInfobloxDtcPoolResults {
}

export function dataInfobloxDtcPoolResultsToTerraform(struct?: DataInfobloxDtcPoolResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataInfobloxDtcPoolResultsToHclTerraform(struct?: DataInfobloxDtcPoolResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataInfobloxDtcPoolResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInfobloxDtcPoolResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInfobloxDtcPoolResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_consolidated_monitors - computed: true, optional: false, required: false
  public get autoConsolidatedMonitors() {
    return this.getBooleanAttribute('auto_consolidated_monitors');
  }

  // availability - computed: true, optional: false, required: false
  public get availability() {
    return this.getStringAttribute('availability');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // consolidated_monitors - computed: true, optional: false, required: false
  private _consolidatedMonitors = new DataInfobloxDtcPoolResultsConsolidatedMonitorsList(this, "consolidated_monitors", false);
  public get consolidatedMonitors() {
    return this._consolidatedMonitors;
  }

  // disable - computed: true, optional: false, required: false
  public get disable() {
    return this.getBooleanAttribute('disable');
  }

  // ext_attrs - computed: true, optional: false, required: false
  public get extAttrs() {
    return this.getStringAttribute('ext_attrs');
  }

  // health - computed: true, optional: false, required: false
  private _health = new cdktf.StringMap(this, "health");
  public get health() {
    return this._health;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lb_alternate_method - computed: true, optional: false, required: false
  public get lbAlternateMethod() {
    return this.getStringAttribute('lb_alternate_method');
  }

  // lb_alternate_topology - computed: true, optional: false, required: false
  public get lbAlternateTopology() {
    return this.getStringAttribute('lb_alternate_topology');
  }

  // lb_dynamic_ratio_alternate - computed: true, optional: false, required: false
  public get lbDynamicRatioAlternate() {
    return this.getStringAttribute('lb_dynamic_ratio_alternate');
  }

  // lb_dynamic_ratio_preferred - computed: true, optional: false, required: false
  public get lbDynamicRatioPreferred() {
    return this.getStringAttribute('lb_dynamic_ratio_preferred');
  }

  // lb_preferred_method - computed: true, optional: false, required: false
  public get lbPreferredMethod() {
    return this.getStringAttribute('lb_preferred_method');
  }

  // lb_preferred_topology - computed: true, optional: false, required: false
  public get lbPreferredTopology() {
    return this.getStringAttribute('lb_preferred_topology');
  }

  // monitors - computed: true, optional: false, required: false
  private _monitors = new DataInfobloxDtcPoolResultsMonitorsList(this, "monitors", false);
  public get monitors() {
    return this._monitors;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // quorum - computed: true, optional: false, required: false
  public get quorum() {
    return this.getNumberAttribute('quorum');
  }

  // servers - computed: true, optional: false, required: false
  private _servers = new DataInfobloxDtcPoolResultsServersList(this, "servers", false);
  public get servers() {
    return this._servers;
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
}

export class DataInfobloxDtcPoolResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataInfobloxDtcPoolResultsOutputReference {
    return new DataInfobloxDtcPoolResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/data-sources/dtc_pool infoblox_dtc_pool}
*/
export class DataInfobloxDtcPool extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infoblox_dtc_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInfobloxDtcPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInfobloxDtcPool to import
  * @param importFromId The id of the existing DataInfobloxDtcPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/data-sources/dtc_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInfobloxDtcPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infoblox_dtc_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/data-sources/dtc_pool infoblox_dtc_pool} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInfobloxDtcPoolConfig
  */
  public constructor(scope: Construct, id: string, config: DataInfobloxDtcPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'infoblox_dtc_pool',
      terraformGeneratorMetadata: {
        providerName: 'infoblox',
        providerVersion: '2.11.0',
        providerVersionConstraint: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filters = config.filters;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filters - computed: false, optional: false, required: true
  private _filters?: { [key: string]: string }; 
  public get filters() {
    return this.getStringMapAttribute('filters');
  }
  public set filters(value: { [key: string]: string }) {
    this._filters = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
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

  // results - computed: true, optional: false, required: false
  private _results = new DataInfobloxDtcPoolResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._filters),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._filters),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
