// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/edgegateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVcdEdgegatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/edgegateway#id DataVcdEdgegateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * name of the edge gateway. (Optional when 'filter' is used)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/edgegateway#name DataVcdEdgegateway#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/edgegateway#org DataVcdEdgegateway#org}
  */
  readonly org?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/edgegateway#vdc DataVcdEdgegateway#vdc}
  */
  readonly vdc?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/edgegateway#filter DataVcdEdgegateway#filter}
  */
  readonly filter?: DataVcdEdgegatewayFilter;
}
export interface DataVcdEdgegatewayExternalNetworkSubnetSuballocatePool {
}

export function dataVcdEdgegatewayExternalNetworkSubnetSuballocatePoolToTerraform(struct?: DataVcdEdgegatewayExternalNetworkSubnetSuballocatePool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdEdgegatewayExternalNetworkSubnetSuballocatePoolToHclTerraform(struct?: DataVcdEdgegatewayExternalNetworkSubnetSuballocatePool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdEdgegatewayExternalNetworkSubnetSuballocatePoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdEdgegatewayExternalNetworkSubnetSuballocatePool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdEdgegatewayExternalNetworkSubnetSuballocatePool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_address - computed: true, optional: false, required: false
  public get endAddress() {
    return this.getStringAttribute('end_address');
  }

  // start_address - computed: true, optional: false, required: false
  public get startAddress() {
    return this.getStringAttribute('start_address');
  }
}

export class DataVcdEdgegatewayExternalNetworkSubnetSuballocatePoolList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdEdgegatewayExternalNetworkSubnetSuballocatePoolOutputReference {
    return new DataVcdEdgegatewayExternalNetworkSubnetSuballocatePoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdEdgegatewayExternalNetworkSubnet {
}

export function dataVcdEdgegatewayExternalNetworkSubnetToTerraform(struct?: DataVcdEdgegatewayExternalNetworkSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdEdgegatewayExternalNetworkSubnetToHclTerraform(struct?: DataVcdEdgegatewayExternalNetworkSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdEdgegatewayExternalNetworkSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdEdgegatewayExternalNetworkSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdEdgegatewayExternalNetworkSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // netmask - computed: true, optional: false, required: false
  public get netmask() {
    return this.getStringAttribute('netmask');
  }

  // suballocate_pool - computed: true, optional: false, required: false
  private _suballocatePool = new DataVcdEdgegatewayExternalNetworkSubnetSuballocatePoolList(this, "suballocate_pool", true);
  public get suballocatePool() {
    return this._suballocatePool;
  }

  // use_for_default_route - computed: true, optional: false, required: false
  public get useForDefaultRoute() {
    return this.getBooleanAttribute('use_for_default_route');
  }
}

export class DataVcdEdgegatewayExternalNetworkSubnetList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdEdgegatewayExternalNetworkSubnetOutputReference {
    return new DataVcdEdgegatewayExternalNetworkSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdEdgegatewayExternalNetwork {
}

export function dataVcdEdgegatewayExternalNetworkToTerraform(struct?: DataVcdEdgegatewayExternalNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdEdgegatewayExternalNetworkToHclTerraform(struct?: DataVcdEdgegatewayExternalNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdEdgegatewayExternalNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdEdgegatewayExternalNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdEdgegatewayExternalNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_rate_limit - computed: true, optional: false, required: false
  public get enableRateLimit() {
    return this.getBooleanAttribute('enable_rate_limit');
  }

  // incoming_rate_limit - computed: true, optional: false, required: false
  public get incomingRateLimit() {
    return this.getNumberAttribute('incoming_rate_limit');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // outgoing_rate_limit - computed: true, optional: false, required: false
  public get outgoingRateLimit() {
    return this.getNumberAttribute('outgoing_rate_limit');
  }

  // subnet - computed: true, optional: false, required: false
  private _subnet = new DataVcdEdgegatewayExternalNetworkSubnetList(this, "subnet", true);
  public get subnet() {
    return this._subnet;
  }
}

export class DataVcdEdgegatewayExternalNetworkList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdEdgegatewayExternalNetworkOutputReference {
    return new DataVcdEdgegatewayExternalNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdEdgegatewayFilter {
  /**
  * Search by name with a regular expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/edgegateway#name_regex DataVcdEdgegateway#name_regex}
  */
  readonly nameRegex?: string;
}

export function dataVcdEdgegatewayFilterToTerraform(struct?: DataVcdEdgegatewayFilterOutputReference | DataVcdEdgegatewayFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name_regex: cdktf.stringToTerraform(struct!.nameRegex),
  }
}


export function dataVcdEdgegatewayFilterToHclTerraform(struct?: DataVcdEdgegatewayFilterOutputReference | DataVcdEdgegatewayFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name_regex: {
      value: cdktf.stringToHclTerraform(struct!.nameRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataVcdEdgegatewayFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataVcdEdgegatewayFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nameRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameRegex = this._nameRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdEdgegatewayFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nameRegex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nameRegex = value.nameRegex;
    }
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/edgegateway vcd_edgegateway}
*/
export class DataVcdEdgegateway extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_edgegateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVcdEdgegateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVcdEdgegateway to import
  * @param importFromId The id of the existing DataVcdEdgegateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/edgegateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVcdEdgegateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_edgegateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/edgegateway vcd_edgegateway} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVcdEdgegatewayConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVcdEdgegatewayConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vcd_edgegateway',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1',
        providerVersionConstraint: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._org = config.org;
    this._vdc = config.vdc;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration - computed: true, optional: false, required: false
  public get configuration() {
    return this.getStringAttribute('configuration');
  }

  // default_external_network_ip - computed: true, optional: false, required: false
  public get defaultExternalNetworkIp() {
    return this.getStringAttribute('default_external_network_ip');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // distributed_routing - computed: true, optional: false, required: false
  public get distributedRouting() {
    return this.getBooleanAttribute('distributed_routing');
  }

  // external_network - computed: true, optional: false, required: false
  private _externalNetwork = new DataVcdEdgegatewayExternalNetworkList(this, "external_network", true);
  public get externalNetwork() {
    return this._externalNetwork;
  }

  // external_network_ips - computed: true, optional: false, required: false
  public get externalNetworkIps() {
    return this.getListAttribute('external_network_ips');
  }

  // fips_mode_enabled - computed: true, optional: false, required: false
  public get fipsModeEnabled() {
    return this.getBooleanAttribute('fips_mode_enabled');
  }

  // fw_default_rule_action - computed: true, optional: false, required: false
  public get fwDefaultRuleAction() {
    return this.getStringAttribute('fw_default_rule_action');
  }

  // fw_default_rule_logging_enabled - computed: true, optional: false, required: false
  public get fwDefaultRuleLoggingEnabled() {
    return this.getBooleanAttribute('fw_default_rule_logging_enabled');
  }

  // fw_enabled - computed: true, optional: false, required: false
  public get fwEnabled() {
    return this.getBooleanAttribute('fw_enabled');
  }

  // ha_enabled - computed: true, optional: false, required: false
  public get haEnabled() {
    return this.getBooleanAttribute('ha_enabled');
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

  // lb_acceleration_enabled - computed: true, optional: false, required: false
  public get lbAccelerationEnabled() {
    return this.getBooleanAttribute('lb_acceleration_enabled');
  }

  // lb_enabled - computed: true, optional: false, required: false
  public get lbEnabled() {
    return this.getBooleanAttribute('lb_enabled');
  }

  // lb_logging_enabled - computed: true, optional: false, required: false
  public get lbLoggingEnabled() {
    return this.getBooleanAttribute('lb_logging_enabled');
  }

  // lb_loglevel - computed: true, optional: false, required: false
  public get lbLoglevel() {
    return this.getStringAttribute('lb_loglevel');
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

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // use_default_route_for_dns_relay - computed: true, optional: false, required: false
  public get useDefaultRouteForDnsRelay() {
    return this.getBooleanAttribute('use_default_route_for_dns_relay');
  }

  // vdc - computed: false, optional: true, required: false
  private _vdc?: string; 
  public get vdc() {
    return this.getStringAttribute('vdc');
  }
  public set vdc(value: string) {
    this._vdc = value;
  }
  public resetVdc() {
    this._vdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcInput() {
    return this._vdc;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataVcdEdgegatewayFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataVcdEdgegatewayFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      org: cdktf.stringToTerraform(this._org),
      vdc: cdktf.stringToTerraform(this._vdc),
      filter: dataVcdEdgegatewayFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdc: {
        value: cdktf.stringToHclTerraform(this._vdc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: dataVcdEdgegatewayFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataVcdEdgegatewayFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
