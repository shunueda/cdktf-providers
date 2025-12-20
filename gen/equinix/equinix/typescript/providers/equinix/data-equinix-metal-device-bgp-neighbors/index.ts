// https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/data-sources/metal_device_bgp_neighbors
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEquinixMetalDeviceBgpNeighborsConfig extends cdktf.TerraformMetaArguments {
  /**
  * UUID of BGP-enabled device whose neighbors to list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/data-sources/metal_device_bgp_neighbors#device_id DataEquinixMetalDeviceBgpNeighbors#device_id}
  */
  readonly deviceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/data-sources/metal_device_bgp_neighbors#id DataEquinixMetalDeviceBgpNeighbors#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataEquinixMetalDeviceBgpNeighborsBgpNeighborsRoutesIn {
}

export function dataEquinixMetalDeviceBgpNeighborsBgpNeighborsRoutesInToTerraform(struct?: DataEquinixMetalDeviceBgpNeighborsBgpNeighborsRoutesIn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixMetalDeviceBgpNeighborsBgpNeighborsRoutesInToHclTerraform(struct?: DataEquinixMetalDeviceBgpNeighborsBgpNeighborsRoutesIn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixMetalDeviceBgpNeighborsBgpNeighborsRoutesInOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixMetalDeviceBgpNeighborsBgpNeighborsRoutesIn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixMetalDeviceBgpNeighborsBgpNeighborsRoutesIn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exact - computed: true, optional: false, required: false
  public get exact() {
    return this.getBooleanAttribute('exact');
  }

  // route - computed: true, optional: false, required: false
  public get route() {
    return this.getStringAttribute('route');
  }
}

export class DataEquinixMetalDeviceBgpNeighborsBgpNeighborsRoutesInList extends cdktf.ComplexList {

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
  public get(index: number): DataEquinixMetalDeviceBgpNeighborsBgpNeighborsRoutesInOutputReference {
    return new DataEquinixMetalDeviceBgpNeighborsBgpNeighborsRoutesInOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEquinixMetalDeviceBgpNeighborsBgpNeighborsRoutesOut {
}

export function dataEquinixMetalDeviceBgpNeighborsBgpNeighborsRoutesOutToTerraform(struct?: DataEquinixMetalDeviceBgpNeighborsBgpNeighborsRoutesOut): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixMetalDeviceBgpNeighborsBgpNeighborsRoutesOutToHclTerraform(struct?: DataEquinixMetalDeviceBgpNeighborsBgpNeighborsRoutesOut): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixMetalDeviceBgpNeighborsBgpNeighborsRoutesOutOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixMetalDeviceBgpNeighborsBgpNeighborsRoutesOut | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixMetalDeviceBgpNeighborsBgpNeighborsRoutesOut | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exact - computed: true, optional: false, required: false
  public get exact() {
    return this.getBooleanAttribute('exact');
  }

  // route - computed: true, optional: false, required: false
  public get route() {
    return this.getStringAttribute('route');
  }
}

export class DataEquinixMetalDeviceBgpNeighborsBgpNeighborsRoutesOutList extends cdktf.ComplexList {

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
  public get(index: number): DataEquinixMetalDeviceBgpNeighborsBgpNeighborsRoutesOutOutputReference {
    return new DataEquinixMetalDeviceBgpNeighborsBgpNeighborsRoutesOutOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEquinixMetalDeviceBgpNeighborsBgpNeighbors {
}

export function dataEquinixMetalDeviceBgpNeighborsBgpNeighborsToTerraform(struct?: DataEquinixMetalDeviceBgpNeighborsBgpNeighbors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixMetalDeviceBgpNeighborsBgpNeighborsToHclTerraform(struct?: DataEquinixMetalDeviceBgpNeighborsBgpNeighbors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixMetalDeviceBgpNeighborsBgpNeighborsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixMetalDeviceBgpNeighborsBgpNeighbors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixMetalDeviceBgpNeighborsBgpNeighbors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_family - computed: true, optional: false, required: false
  public get addressFamily() {
    return this.getNumberAttribute('address_family');
  }

  // customer_as - computed: true, optional: false, required: false
  public get customerAs() {
    return this.getNumberAttribute('customer_as');
  }

  // customer_ip - computed: true, optional: false, required: false
  public get customerIp() {
    return this.getStringAttribute('customer_ip');
  }

  // md5_enabled - computed: true, optional: false, required: false
  public get md5Enabled() {
    return this.getBooleanAttribute('md5_enabled');
  }

  // md5_password - computed: true, optional: false, required: false
  public get md5Password() {
    return this.getStringAttribute('md5_password');
  }

  // multihop - computed: true, optional: false, required: false
  public get multihop() {
    return this.getBooleanAttribute('multihop');
  }

  // peer_as - computed: true, optional: false, required: false
  public get peerAs() {
    return this.getNumberAttribute('peer_as');
  }

  // peer_ips - computed: true, optional: false, required: false
  public get peerIps() {
    return this.getListAttribute('peer_ips');
  }

  // routes_in - computed: true, optional: false, required: false
  private _routesIn = new DataEquinixMetalDeviceBgpNeighborsBgpNeighborsRoutesInList(this, "routes_in", false);
  public get routesIn() {
    return this._routesIn;
  }

  // routes_out - computed: true, optional: false, required: false
  private _routesOut = new DataEquinixMetalDeviceBgpNeighborsBgpNeighborsRoutesOutList(this, "routes_out", false);
  public get routesOut() {
    return this._routesOut;
  }
}

export class DataEquinixMetalDeviceBgpNeighborsBgpNeighborsList extends cdktf.ComplexList {

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
  public get(index: number): DataEquinixMetalDeviceBgpNeighborsBgpNeighborsOutputReference {
    return new DataEquinixMetalDeviceBgpNeighborsBgpNeighborsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/data-sources/metal_device_bgp_neighbors equinix_metal_device_bgp_neighbors}
*/
export class DataEquinixMetalDeviceBgpNeighbors extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_metal_device_bgp_neighbors";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEquinixMetalDeviceBgpNeighbors resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEquinixMetalDeviceBgpNeighbors to import
  * @param importFromId The id of the existing DataEquinixMetalDeviceBgpNeighbors that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/data-sources/metal_device_bgp_neighbors#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEquinixMetalDeviceBgpNeighbors to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_metal_device_bgp_neighbors", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/data-sources/metal_device_bgp_neighbors equinix_metal_device_bgp_neighbors} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEquinixMetalDeviceBgpNeighborsConfig
  */
  public constructor(scope: Construct, id: string, config: DataEquinixMetalDeviceBgpNeighborsConfig) {
    super(scope, id, {
      terraformResourceType: 'equinix_metal_device_bgp_neighbors',
      terraformGeneratorMetadata: {
        providerName: 'equinix',
        providerVersion: '4.12.0',
        providerVersionConstraint: '4.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceId = config.deviceId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bgp_neighbors - computed: true, optional: false, required: false
  private _bgpNeighbors = new DataEquinixMetalDeviceBgpNeighborsBgpNeighborsList(this, "bgp_neighbors", false);
  public get bgpNeighbors() {
    return this._bgpNeighbors;
  }

  // device_id - computed: false, optional: false, required: true
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_id: cdktf.stringToTerraform(this._deviceId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_id: {
        value: cdktf.stringToHclTerraform(this._deviceId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
