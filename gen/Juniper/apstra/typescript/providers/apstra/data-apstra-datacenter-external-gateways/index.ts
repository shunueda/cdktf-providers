// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_external_gateways
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApstraDatacenterExternalGatewaysConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apstra Blueprint to search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_external_gateways#blueprint_id DataApstraDatacenterExternalGateways#blueprint_id}
  */
  readonly blueprintId: string;
  /**
  * List of filters used to select only desired External Gateways. To match a filter, all specified attributes must match (each attribute within a filter is AND-ed together). The returned IDs represent the gateways matched by all of the filters together (filters are OR-ed together).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_external_gateways#filters DataApstraDatacenterExternalGateways#filters}
  */
  readonly filters?: DataApstraDatacenterExternalGatewaysFilters[] | cdktf.IResolvable;
}
export interface DataApstraDatacenterExternalGatewaysFilters {
  /**
  * External Gateway AS Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_external_gateways#asn DataApstraDatacenterExternalGateways#asn}
  */
  readonly asn?: number;
  /**
  * EVPN route types. Valid values are: ["all", "type5_only"]. Default: "all"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_external_gateways#evpn_route_types DataApstraDatacenterExternalGateways#evpn_route_types}
  */
  readonly evpnRouteTypes?: string;
  /**
  * BGP hold time (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_external_gateways#hold_time DataApstraDatacenterExternalGateways#hold_time}
  */
  readonly holdTime?: number;
  /**
  * Apstra Object ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_external_gateways#id DataApstraDatacenterExternalGateways#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * External Gateway IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_external_gateways#ip_address DataApstraDatacenterExternalGateways#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * BGP keepalive time (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_external_gateways#keepalive_time DataApstraDatacenterExternalGateways#keepalive_time}
  */
  readonly keepaliveTime?: number;
  /**
  * Set of IDs of switch nodes which will be configured to peer with the External Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_external_gateways#local_gateway_nodes DataApstraDatacenterExternalGateways#local_gateway_nodes}
  */
  readonly localGatewayNodes?: string[];
  /**
  * External Gateway name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_external_gateways#name DataApstraDatacenterExternalGateways#name}
  */
  readonly name?: string;
  /**
  * BGP TCP authentication password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_external_gateways#password DataApstraDatacenterExternalGateways#password}
  */
  readonly password?: string;
  /**
  * BGP Time To Live. Omit to use device defaults.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_external_gateways#ttl DataApstraDatacenterExternalGateways#ttl}
  */
  readonly ttl?: number;
}

export function dataApstraDatacenterExternalGatewaysFiltersToTerraform(struct?: DataApstraDatacenterExternalGatewaysFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn: cdktf.numberToTerraform(struct!.asn),
    evpn_route_types: cdktf.stringToTerraform(struct!.evpnRouteTypes),
    hold_time: cdktf.numberToTerraform(struct!.holdTime),
    id: cdktf.stringToTerraform(struct!.id),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    keepalive_time: cdktf.numberToTerraform(struct!.keepaliveTime),
    local_gateway_nodes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.localGatewayNodes),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function dataApstraDatacenterExternalGatewaysFiltersToHclTerraform(struct?: DataApstraDatacenterExternalGatewaysFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn: {
      value: cdktf.numberToHclTerraform(struct!.asn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    evpn_route_types: {
      value: cdktf.stringToHclTerraform(struct!.evpnRouteTypes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hold_time: {
      value: cdktf.numberToHclTerraform(struct!.holdTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keepalive_time: {
      value: cdktf.numberToHclTerraform(struct!.keepaliveTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_gateway_nodes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.localGatewayNodes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataApstraDatacenterExternalGatewaysFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraDatacenterExternalGatewaysFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn = this._asn;
    }
    if (this._evpnRouteTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.evpnRouteTypes = this._evpnRouteTypes;
    }
    if (this._holdTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdTime = this._holdTime;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._keepaliveTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepaliveTime = this._keepaliveTime;
    }
    if (this._localGatewayNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.localGatewayNodes = this._localGatewayNodes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraDatacenterExternalGatewaysFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asn = undefined;
      this._evpnRouteTypes = undefined;
      this._holdTime = undefined;
      this._id = undefined;
      this._ipAddress = undefined;
      this._keepaliveTime = undefined;
      this._localGatewayNodes = undefined;
      this._name = undefined;
      this._password = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asn = value.asn;
      this._evpnRouteTypes = value.evpnRouteTypes;
      this._holdTime = value.holdTime;
      this._id = value.id;
      this._ipAddress = value.ipAddress;
      this._keepaliveTime = value.keepaliveTime;
      this._localGatewayNodes = value.localGatewayNodes;
      this._name = value.name;
      this._password = value.password;
      this._ttl = value.ttl;
    }
  }

  // asn - computed: false, optional: true, required: false
  private _asn?: number; 
  public get asn() {
    return this.getNumberAttribute('asn');
  }
  public set asn(value: number) {
    this._asn = value;
  }
  public resetAsn() {
    this._asn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // blueprint_id - computed: true, optional: false, required: false
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
  }

  // evpn_route_types - computed: false, optional: true, required: false
  private _evpnRouteTypes?: string; 
  public get evpnRouteTypes() {
    return this.getStringAttribute('evpn_route_types');
  }
  public set evpnRouteTypes(value: string) {
    this._evpnRouteTypes = value;
  }
  public resetEvpnRouteTypes() {
    this._evpnRouteTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evpnRouteTypesInput() {
    return this._evpnRouteTypes;
  }

  // hold_time - computed: false, optional: true, required: false
  private _holdTime?: number; 
  public get holdTime() {
    return this.getNumberAttribute('hold_time');
  }
  public set holdTime(value: number) {
    this._holdTime = value;
  }
  public resetHoldTime() {
    this._holdTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdTimeInput() {
    return this._holdTime;
  }

  // id - computed: false, optional: true, required: false
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

  // ip_address - computed: false, optional: true, required: false
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

  // keepalive_time - computed: false, optional: true, required: false
  private _keepaliveTime?: number; 
  public get keepaliveTime() {
    return this.getNumberAttribute('keepalive_time');
  }
  public set keepaliveTime(value: number) {
    this._keepaliveTime = value;
  }
  public resetKeepaliveTime() {
    this._keepaliveTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveTimeInput() {
    return this._keepaliveTime;
  }

  // local_gateway_nodes - computed: false, optional: true, required: false
  private _localGatewayNodes?: string[]; 
  public get localGatewayNodes() {
    return cdktf.Fn.tolist(this.getListAttribute('local_gateway_nodes'));
  }
  public set localGatewayNodes(value: string[]) {
    this._localGatewayNodes = value;
  }
  public resetLocalGatewayNodes() {
    this._localGatewayNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localGatewayNodesInput() {
    return this._localGatewayNodes;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

export class DataApstraDatacenterExternalGatewaysFiltersList extends cdktf.ComplexList {
  public internalValue? : DataApstraDatacenterExternalGatewaysFilters[] | cdktf.IResolvable

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
  public get(index: number): DataApstraDatacenterExternalGatewaysFiltersOutputReference {
    return new DataApstraDatacenterExternalGatewaysFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_external_gateways apstra_datacenter_external_gateways}
*/
export class DataApstraDatacenterExternalGateways extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_external_gateways";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApstraDatacenterExternalGateways resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApstraDatacenterExternalGateways to import
  * @param importFromId The id of the existing DataApstraDatacenterExternalGateways that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_external_gateways#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApstraDatacenterExternalGateways to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_external_gateways", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_external_gateways apstra_datacenter_external_gateways} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApstraDatacenterExternalGatewaysConfig
  */
  public constructor(scope: Construct, id: string, config: DataApstraDatacenterExternalGatewaysConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_external_gateways',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blueprintId = config.blueprintId;
    this._filters.internalValue = config.filters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blueprint_id - computed: false, optional: false, required: true
  private _blueprintId?: string; 
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
  }
  public set blueprintId(value: string) {
    this._blueprintId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdInput() {
    return this._blueprintId;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new DataApstraDatacenterExternalGatewaysFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataApstraDatacenterExternalGatewaysFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return cdktf.Fn.tolist(this.getListAttribute('ids'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
      filters: cdktf.listMapper(dataApstraDatacenterExternalGatewaysFiltersToTerraform, false)(this._filters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blueprint_id: {
        value: cdktf.stringToHclTerraform(this._blueprintId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filters: {
        value: cdktf.listMapperHcl(dataApstraDatacenterExternalGatewaysFiltersToHclTerraform, false)(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataApstraDatacenterExternalGatewaysFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
