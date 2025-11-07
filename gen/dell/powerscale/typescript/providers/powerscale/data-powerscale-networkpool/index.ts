// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/networkpool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerscaleNetworkpoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/networkpool#filter DataPowerscaleNetworkpool#filter}
  */
  readonly filter?: DataPowerscaleNetworkpoolFilter;
}
export interface DataPowerscaleNetworkpoolNetworkPoolsDetailsIfaces {
}

export function dataPowerscaleNetworkpoolNetworkPoolsDetailsIfacesToTerraform(struct?: DataPowerscaleNetworkpoolNetworkPoolsDetailsIfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleNetworkpoolNetworkPoolsDetailsIfacesToHclTerraform(struct?: DataPowerscaleNetworkpoolNetworkPoolsDetailsIfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleNetworkpoolNetworkPoolsDetailsIfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleNetworkpoolNetworkPoolsDetailsIfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNetworkpoolNetworkPoolsDetailsIfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // iface - computed: true, optional: false, required: false
  public get iface() {
    return this.getStringAttribute('iface');
  }

  // lnn - computed: true, optional: false, required: false
  public get lnn() {
    return this.getNumberAttribute('lnn');
  }
}

export class DataPowerscaleNetworkpoolNetworkPoolsDetailsIfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerscaleNetworkpoolNetworkPoolsDetailsIfacesOutputReference {
    return new DataPowerscaleNetworkpoolNetworkPoolsDetailsIfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleNetworkpoolNetworkPoolsDetailsRanges {
}

export function dataPowerscaleNetworkpoolNetworkPoolsDetailsRangesToTerraform(struct?: DataPowerscaleNetworkpoolNetworkPoolsDetailsRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleNetworkpoolNetworkPoolsDetailsRangesToHclTerraform(struct?: DataPowerscaleNetworkpoolNetworkPoolsDetailsRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleNetworkpoolNetworkPoolsDetailsRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleNetworkpoolNetworkPoolsDetailsRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNetworkpoolNetworkPoolsDetailsRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // high - computed: true, optional: false, required: false
  public get high() {
    return this.getStringAttribute('high');
  }

  // low - computed: true, optional: false, required: false
  public get low() {
    return this.getStringAttribute('low');
  }
}

export class DataPowerscaleNetworkpoolNetworkPoolsDetailsRangesList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerscaleNetworkpoolNetworkPoolsDetailsRangesOutputReference {
    return new DataPowerscaleNetworkpoolNetworkPoolsDetailsRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleNetworkpoolNetworkPoolsDetailsStaticRoutes {
}

export function dataPowerscaleNetworkpoolNetworkPoolsDetailsStaticRoutesToTerraform(struct?: DataPowerscaleNetworkpoolNetworkPoolsDetailsStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleNetworkpoolNetworkPoolsDetailsStaticRoutesToHclTerraform(struct?: DataPowerscaleNetworkpoolNetworkPoolsDetailsStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleNetworkpoolNetworkPoolsDetailsStaticRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleNetworkpoolNetworkPoolsDetailsStaticRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNetworkpoolNetworkPoolsDetailsStaticRoutes | undefined) {
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

  // prefixlen - computed: true, optional: false, required: false
  public get prefixlen() {
    return this.getNumberAttribute('prefixlen');
  }

  // subnet - computed: true, optional: false, required: false
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
}

export class DataPowerscaleNetworkpoolNetworkPoolsDetailsStaticRoutesList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerscaleNetworkpoolNetworkPoolsDetailsStaticRoutesOutputReference {
    return new DataPowerscaleNetworkpoolNetworkPoolsDetailsStaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleNetworkpoolNetworkPoolsDetails {
}

export function dataPowerscaleNetworkpoolNetworkPoolsDetailsToTerraform(struct?: DataPowerscaleNetworkpoolNetworkPoolsDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleNetworkpoolNetworkPoolsDetailsToHclTerraform(struct?: DataPowerscaleNetworkpoolNetworkPoolsDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleNetworkpoolNetworkPoolsDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleNetworkpoolNetworkPoolsDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNetworkpoolNetworkPoolsDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_zone - computed: true, optional: false, required: false
  public get accessZone() {
    return this.getStringAttribute('access_zone');
  }

  // addr_family - computed: true, optional: false, required: false
  public get addrFamily() {
    return this.getStringAttribute('addr_family');
  }

  // aggregation_mode - computed: true, optional: false, required: false
  public get aggregationMode() {
    return this.getStringAttribute('aggregation_mode');
  }

  // alloc_method - computed: true, optional: false, required: false
  public get allocMethod() {
    return this.getStringAttribute('alloc_method');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // groupnet - computed: true, optional: false, required: false
  public get groupnet() {
    return this.getStringAttribute('groupnet');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ifaces - computed: true, optional: false, required: false
  private _ifaces = new DataPowerscaleNetworkpoolNetworkPoolsDetailsIfacesList(this, "ifaces", false);
  public get ifaces() {
    return this._ifaces;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nfsv3_rroce_only - computed: true, optional: false, required: false
  public get nfsv3RroceOnly() {
    return this.getBooleanAttribute('nfsv3_rroce_only');
  }

  // ranges - computed: true, optional: false, required: false
  private _ranges = new DataPowerscaleNetworkpoolNetworkPoolsDetailsRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }

  // rebalance_policy - computed: true, optional: false, required: false
  public get rebalancePolicy() {
    return this.getStringAttribute('rebalance_policy');
  }

  // rules - computed: true, optional: false, required: false
  public get rules() {
    return this.getListAttribute('rules');
  }

  // sc_auto_unsuspend_delay - computed: true, optional: false, required: false
  public get scAutoUnsuspendDelay() {
    return this.getNumberAttribute('sc_auto_unsuspend_delay');
  }

  // sc_connect_policy - computed: true, optional: false, required: false
  public get scConnectPolicy() {
    return this.getStringAttribute('sc_connect_policy');
  }

  // sc_dns_zone - computed: true, optional: false, required: false
  public get scDnsZone() {
    return this.getStringAttribute('sc_dns_zone');
  }

  // sc_dns_zone_aliases - computed: true, optional: false, required: false
  public get scDnsZoneAliases() {
    return this.getListAttribute('sc_dns_zone_aliases');
  }

  // sc_failover_policy - computed: true, optional: false, required: false
  public get scFailoverPolicy() {
    return this.getStringAttribute('sc_failover_policy');
  }

  // sc_subnet - computed: true, optional: false, required: false
  public get scSubnet() {
    return this.getStringAttribute('sc_subnet');
  }

  // sc_suspended_nodes - computed: true, optional: false, required: false
  public get scSuspendedNodes() {
    return this.getNumberListAttribute('sc_suspended_nodes');
  }

  // sc_ttl - computed: true, optional: false, required: false
  public get scTtl() {
    return this.getNumberAttribute('sc_ttl');
  }

  // static_routes - computed: true, optional: false, required: false
  private _staticRoutes = new DataPowerscaleNetworkpoolNetworkPoolsDetailsStaticRoutesList(this, "static_routes", false);
  public get staticRoutes() {
    return this._staticRoutes;
  }

  // subnet - computed: true, optional: false, required: false
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
}

export class DataPowerscaleNetworkpoolNetworkPoolsDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerscaleNetworkpoolNetworkPoolsDetailsOutputReference {
    return new DataPowerscaleNetworkpoolNetworkPoolsDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleNetworkpoolFilter {
  /**
  * If specified, only pools with this zone name will be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/networkpool#access_zone DataPowerscaleNetworkpool#access_zone}
  */
  readonly accessZone?: string;
  /**
  * If specified, only pools with this allocation type will be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/networkpool#alloc_method DataPowerscaleNetworkpool#alloc_method}
  */
  readonly allocMethod?: string;
  /**
  * If specified, only pools for this groupnet will be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/networkpool#groupnet DataPowerscaleNetworkpool#groupnet}
  */
  readonly groupnet?: string;
  /**
  * Filter network pools by names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/networkpool#names DataPowerscaleNetworkpool#names}
  */
  readonly names?: string[];
  /**
  * If specified, only pools for this subnet will be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/networkpool#subnet DataPowerscaleNetworkpool#subnet}
  */
  readonly subnet?: string;
}

export function dataPowerscaleNetworkpoolFilterToTerraform(struct?: DataPowerscaleNetworkpoolFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_zone: cdktf.stringToTerraform(struct!.accessZone),
    alloc_method: cdktf.stringToTerraform(struct!.allocMethod),
    groupnet: cdktf.stringToTerraform(struct!.groupnet),
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
    subnet: cdktf.stringToTerraform(struct!.subnet),
  }
}


export function dataPowerscaleNetworkpoolFilterToHclTerraform(struct?: DataPowerscaleNetworkpoolFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_zone: {
      value: cdktf.stringToHclTerraform(struct!.accessZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alloc_method: {
      value: cdktf.stringToHclTerraform(struct!.allocMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    groupnet: {
      value: cdktf.stringToHclTerraform(struct!.groupnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerscaleNetworkpoolFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleNetworkpoolFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessZone = this._accessZone;
    }
    if (this._allocMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocMethod = this._allocMethod;
    }
    if (this._groupnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupnet = this._groupnet;
    }
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNetworkpoolFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessZone = undefined;
      this._allocMethod = undefined;
      this._groupnet = undefined;
      this._names = undefined;
      this._subnet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessZone = value.accessZone;
      this._allocMethod = value.allocMethod;
      this._groupnet = value.groupnet;
      this._names = value.names;
      this._subnet = value.subnet;
    }
  }

  // access_zone - computed: false, optional: true, required: false
  private _accessZone?: string; 
  public get accessZone() {
    return this.getStringAttribute('access_zone');
  }
  public set accessZone(value: string) {
    this._accessZone = value;
  }
  public resetAccessZone() {
    this._accessZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessZoneInput() {
    return this._accessZone;
  }

  // alloc_method - computed: false, optional: true, required: false
  private _allocMethod?: string; 
  public get allocMethod() {
    return this.getStringAttribute('alloc_method');
  }
  public set allocMethod(value: string) {
    this._allocMethod = value;
  }
  public resetAllocMethod() {
    this._allocMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocMethodInput() {
    return this._allocMethod;
  }

  // groupnet - computed: false, optional: true, required: false
  private _groupnet?: string; 
  public get groupnet() {
    return this.getStringAttribute('groupnet');
  }
  public set groupnet(value: string) {
    this._groupnet = value;
  }
  public resetGroupnet() {
    this._groupnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupnetInput() {
    return this._groupnet;
  }

  // names - computed: false, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return cdktf.Fn.tolist(this.getListAttribute('names'));
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/networkpool powerscale_networkpool}
*/
export class DataPowerscaleNetworkpool extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_networkpool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerscaleNetworkpool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerscaleNetworkpool to import
  * @param importFromId The id of the existing DataPowerscaleNetworkpool that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/networkpool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerscaleNetworkpool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_networkpool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/networkpool powerscale_networkpool} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerscaleNetworkpoolConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerscaleNetworkpoolConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerscale_networkpool',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_pools_details - computed: true, optional: false, required: false
  private _networkPoolsDetails = new DataPowerscaleNetworkpoolNetworkPoolsDetailsList(this, "network_pools_details", false);
  public get networkPoolsDetails() {
    return this._networkPoolsDetails;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataPowerscaleNetworkpoolFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPowerscaleNetworkpoolFilter) {
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
      filter: dataPowerscaleNetworkpoolFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataPowerscaleNetworkpoolFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerscaleNetworkpoolFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
