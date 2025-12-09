// https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/data-sources/reseller_networks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEdgecenterResellerNetworksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/data-sources/reseller_networks#id DataEdgecenterResellerNetworks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Filter by metadata keys. Must be a valid JSON string. "metadata_k=["value", "sense"]"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/data-sources/reseller_networks#metadata_k DataEdgecenterResellerNetworks#metadata_k}
  */
  readonly metadataK?: string[];
  /**
  * Filtration query opts, for example, {key = "value", key_1 = "value_1"}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/data-sources/reseller_networks#metadata_kv DataEdgecenterResellerNetworks#metadata_kv}
  */
  readonly metadataKv?: { [key: string]: string };
  /**
  * Filter networks by the type of the network (vlan or vxlan).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/data-sources/reseller_networks#network_type DataEdgecenterResellerNetworks#network_type}
  */
  readonly networkType?: string;
  /**
  * Order networks by transmitted fields and directions (name.asc).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/data-sources/reseller_networks#order_by DataEdgecenterResellerNetworks#order_by}
  */
  readonly orderBy?: string;
  /**
  * Can be used to only show networks with the shared state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/data-sources/reseller_networks#shared DataEdgecenterResellerNetworks#shared}
  */
  readonly shared?: boolean | cdktf.IResolvable;
}
export interface DataEdgecenterResellerNetworksNetworksMetadata {
}

export function dataEdgecenterResellerNetworksNetworksMetadataToTerraform(struct?: DataEdgecenterResellerNetworksNetworksMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEdgecenterResellerNetworksNetworksMetadataToHclTerraform(struct?: DataEdgecenterResellerNetworksNetworksMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEdgecenterResellerNetworksNetworksMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEdgecenterResellerNetworksNetworksMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEdgecenterResellerNetworksNetworksMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataEdgecenterResellerNetworksNetworksMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataEdgecenterResellerNetworksNetworksMetadataOutputReference {
    return new DataEdgecenterResellerNetworksNetworksMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEdgecenterResellerNetworksNetworksSubnetsHostRoutes {
}

export function dataEdgecenterResellerNetworksNetworksSubnetsHostRoutesToTerraform(struct?: DataEdgecenterResellerNetworksNetworksSubnetsHostRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEdgecenterResellerNetworksNetworksSubnetsHostRoutesToHclTerraform(struct?: DataEdgecenterResellerNetworksNetworksSubnetsHostRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEdgecenterResellerNetworksNetworksSubnetsHostRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEdgecenterResellerNetworksNetworksSubnetsHostRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEdgecenterResellerNetworksNetworksSubnetsHostRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return this.getStringAttribute('destination');
  }

  // nexthop - computed: true, optional: false, required: false
  public get nexthop() {
    return this.getStringAttribute('nexthop');
  }
}

export class DataEdgecenterResellerNetworksNetworksSubnetsHostRoutesList extends cdktf.ComplexList {

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
  public get(index: number): DataEdgecenterResellerNetworksNetworksSubnetsHostRoutesOutputReference {
    return new DataEdgecenterResellerNetworksNetworksSubnetsHostRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEdgecenterResellerNetworksNetworksSubnets {
}

export function dataEdgecenterResellerNetworksNetworksSubnetsToTerraform(struct?: DataEdgecenterResellerNetworksNetworksSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEdgecenterResellerNetworksNetworksSubnetsToHclTerraform(struct?: DataEdgecenterResellerNetworksNetworksSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEdgecenterResellerNetworksNetworksSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEdgecenterResellerNetworksNetworksSubnets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEdgecenterResellerNetworksNetworksSubnets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available_ips - computed: true, optional: false, required: false
  public get availableIps() {
    return this.getNumberAttribute('available_ips');
  }

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }

  // dns_nameservers - computed: true, optional: false, required: false
  public get dnsNameservers() {
    return this.getListAttribute('dns_nameservers');
  }

  // enable_dhcp - computed: true, optional: false, required: false
  public get enableDhcp() {
    return this.getBooleanAttribute('enable_dhcp');
  }

  // gateway_ip - computed: true, optional: false, required: false
  public get gatewayIp() {
    return this.getStringAttribute('gateway_ip');
  }

  // has_router - computed: true, optional: false, required: false
  public get hasRouter() {
    return this.getBooleanAttribute('has_router');
  }

  // host_routes - computed: true, optional: false, required: false
  private _hostRoutes = new DataEdgecenterResellerNetworksNetworksSubnetsHostRoutesList(this, "host_routes", false);
  public get hostRoutes() {
    return this._hostRoutes;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // total_ips - computed: true, optional: false, required: false
  public get totalIps() {
    return this.getNumberAttribute('total_ips');
  }
}

export class DataEdgecenterResellerNetworksNetworksSubnetsList extends cdktf.ComplexList {

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
  public get(index: number): DataEdgecenterResellerNetworksNetworksSubnetsOutputReference {
    return new DataEdgecenterResellerNetworksNetworksSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEdgecenterResellerNetworksNetworks {
}

export function dataEdgecenterResellerNetworksNetworksToTerraform(struct?: DataEdgecenterResellerNetworksNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEdgecenterResellerNetworksNetworksToHclTerraform(struct?: DataEdgecenterResellerNetworksNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEdgecenterResellerNetworksNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEdgecenterResellerNetworksNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEdgecenterResellerNetworksNetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getNumberAttribute('client_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // creator_task_id - computed: true, optional: false, required: false
  public get creatorTaskId() {
    return this.getStringAttribute('creator_task_id');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // external - computed: true, optional: false, required: false
  public get external() {
    return this.getBooleanAttribute('external');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataEdgecenterResellerNetworksNetworksMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }

  // region_name - computed: true, optional: false, required: false
  public get regionName() {
    return this.getStringAttribute('region_name');
  }

  // segmentation_id - computed: true, optional: false, required: false
  public get segmentationId() {
    return this.getNumberAttribute('segmentation_id');
  }

  // shared - computed: true, optional: false, required: false
  public get shared() {
    return this.getBooleanAttribute('shared');
  }

  // subnets - computed: true, optional: false, required: false
  private _subnets = new DataEdgecenterResellerNetworksNetworksSubnetsList(this, "subnets", false);
  public get subnets() {
    return this._subnets;
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class DataEdgecenterResellerNetworksNetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataEdgecenterResellerNetworksNetworksOutputReference {
    return new DataEdgecenterResellerNetworksNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/data-sources/reseller_networks edgecenter_reseller_networks}
*/
export class DataEdgecenterResellerNetworks extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "edgecenter_reseller_networks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEdgecenterResellerNetworks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEdgecenterResellerNetworks to import
  * @param importFromId The id of the existing DataEdgecenterResellerNetworks that should be imported. Refer to the {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/data-sources/reseller_networks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEdgecenterResellerNetworks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "edgecenter_reseller_networks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/data-sources/reseller_networks edgecenter_reseller_networks} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEdgecenterResellerNetworksConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataEdgecenterResellerNetworksConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'edgecenter_reseller_networks',
      terraformGeneratorMetadata: {
        providerName: 'edgecenter',
        providerVersion: '0.10.6',
        providerVersionConstraint: '0.10.6'
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
    this._metadataK = config.metadataK;
    this._metadataKv = config.metadataKv;
    this._networkType = config.networkType;
    this._orderBy = config.orderBy;
    this._shared = config.shared;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // metadata_k - computed: false, optional: true, required: false
  private _metadataK?: string[]; 
  public get metadataK() {
    return cdktf.Fn.tolist(this.getListAttribute('metadata_k'));
  }
  public set metadataK(value: string[]) {
    this._metadataK = value;
  }
  public resetMetadataK() {
    this._metadataK = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataKInput() {
    return this._metadataK;
  }

  // metadata_kv - computed: false, optional: true, required: false
  private _metadataKv?: { [key: string]: string }; 
  public get metadataKv() {
    return this.getStringMapAttribute('metadata_kv');
  }
  public set metadataKv(value: { [key: string]: string }) {
    this._metadataKv = value;
  }
  public resetMetadataKv() {
    this._metadataKv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataKvInput() {
    return this._metadataKv;
  }

  // network_type - computed: false, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // networks - computed: true, optional: false, required: false
  private _networks = new DataEdgecenterResellerNetworksNetworksList(this, "networks", false);
  public get networks() {
    return this._networks;
  }

  // order_by - computed: false, optional: true, required: false
  private _orderBy?: string; 
  public get orderBy() {
    return this.getStringAttribute('order_by');
  }
  public set orderBy(value: string) {
    this._orderBy = value;
  }
  public resetOrderBy() {
    this._orderBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByInput() {
    return this._orderBy;
  }

  // shared - computed: false, optional: true, required: false
  private _shared?: boolean | cdktf.IResolvable; 
  public get shared() {
    return this.getBooleanAttribute('shared');
  }
  public set shared(value: boolean | cdktf.IResolvable) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      metadata_k: cdktf.listMapper(cdktf.stringToTerraform, false)(this._metadataK),
      metadata_kv: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadataKv),
      network_type: cdktf.stringToTerraform(this._networkType),
      order_by: cdktf.stringToTerraform(this._orderBy),
      shared: cdktf.booleanToTerraform(this._shared),
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
      metadata_k: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._metadataK),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      metadata_kv: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadataKv),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      network_type: {
        value: cdktf.stringToHclTerraform(this._networkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order_by: {
        value: cdktf.stringToHclTerraform(this._orderBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared: {
        value: cdktf.booleanToHclTerraform(this._shared),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
