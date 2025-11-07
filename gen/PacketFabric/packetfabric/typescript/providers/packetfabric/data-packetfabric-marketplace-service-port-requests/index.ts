// https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/marketplace_service_port_requests
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPacketfabricMarketplaceServicePortRequestsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/marketplace_service_port_requests#id DataPacketfabricMarketplaceServicePortRequests#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The VC request type. (sent/received)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/marketplace_service_port_requests#type DataPacketfabricMarketplaceServicePortRequests#type}
  */
  readonly type: string;
}
export interface DataPacketfabricMarketplaceServicePortRequestsVcRequestsBandwidth {
}

export function dataPacketfabricMarketplaceServicePortRequestsVcRequestsBandwidthToTerraform(struct?: DataPacketfabricMarketplaceServicePortRequestsVcRequestsBandwidth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPacketfabricMarketplaceServicePortRequestsVcRequestsBandwidthToHclTerraform(struct?: DataPacketfabricMarketplaceServicePortRequestsVcRequestsBandwidth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPacketfabricMarketplaceServicePortRequestsVcRequestsBandwidthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPacketfabricMarketplaceServicePortRequestsVcRequestsBandwidth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPacketfabricMarketplaceServicePortRequestsVcRequestsBandwidth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_uuid - computed: true, optional: false, required: false
  public get accountUuid() {
    return this.getStringAttribute('account_uuid');
  }

  // longhaul_type - computed: true, optional: false, required: false
  public get longhaulType() {
    return this.getStringAttribute('longhaul_type');
  }

  // speed - computed: true, optional: false, required: false
  public get speed() {
    return this.getStringAttribute('speed');
  }

  // subscription_term - computed: true, optional: false, required: false
  public get subscriptionTerm() {
    return this.getNumberAttribute('subscription_term');
  }
}

export class DataPacketfabricMarketplaceServicePortRequestsVcRequestsBandwidthList extends cdktf.ComplexList {

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
  public get(index: number): DataPacketfabricMarketplaceServicePortRequestsVcRequestsBandwidthOutputReference {
    return new DataPacketfabricMarketplaceServicePortRequestsVcRequestsBandwidthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPacketfabricMarketplaceServicePortRequestsVcRequestsFromCustomer {
}

export function dataPacketfabricMarketplaceServicePortRequestsVcRequestsFromCustomerToTerraform(struct?: DataPacketfabricMarketplaceServicePortRequestsVcRequestsFromCustomer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPacketfabricMarketplaceServicePortRequestsVcRequestsFromCustomerToHclTerraform(struct?: DataPacketfabricMarketplaceServicePortRequestsVcRequestsFromCustomer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPacketfabricMarketplaceServicePortRequestsVcRequestsFromCustomerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPacketfabricMarketplaceServicePortRequestsVcRequestsFromCustomer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPacketfabricMarketplaceServicePortRequestsVcRequestsFromCustomer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // contact_email - computed: true, optional: false, required: false
  public get contactEmail() {
    return this.getStringAttribute('contact_email');
  }

  // contact_first_name - computed: true, optional: false, required: false
  public get contactFirstName() {
    return this.getStringAttribute('contact_first_name');
  }

  // contact_last_name - computed: true, optional: false, required: false
  public get contactLastName() {
    return this.getStringAttribute('contact_last_name');
  }

  // contact_phone - computed: true, optional: false, required: false
  public get contactPhone() {
    return this.getStringAttribute('contact_phone');
  }

  // customer_uuid - computed: true, optional: false, required: false
  public get customerUuid() {
    return this.getStringAttribute('customer_uuid');
  }

  // market - computed: true, optional: false, required: false
  public get market() {
    return this.getStringAttribute('market');
  }

  // market_description - computed: true, optional: false, required: false
  public get marketDescription() {
    return this.getStringAttribute('market_description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataPacketfabricMarketplaceServicePortRequestsVcRequestsFromCustomerList extends cdktf.ComplexList {

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
  public get(index: number): DataPacketfabricMarketplaceServicePortRequestsVcRequestsFromCustomerOutputReference {
    return new DataPacketfabricMarketplaceServicePortRequestsVcRequestsFromCustomerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPacketfabricMarketplaceServicePortRequestsVcRequestsToCustomer {
}

export function dataPacketfabricMarketplaceServicePortRequestsVcRequestsToCustomerToTerraform(struct?: DataPacketfabricMarketplaceServicePortRequestsVcRequestsToCustomer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPacketfabricMarketplaceServicePortRequestsVcRequestsToCustomerToHclTerraform(struct?: DataPacketfabricMarketplaceServicePortRequestsVcRequestsToCustomer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPacketfabricMarketplaceServicePortRequestsVcRequestsToCustomerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPacketfabricMarketplaceServicePortRequestsVcRequestsToCustomer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPacketfabricMarketplaceServicePortRequestsVcRequestsToCustomer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // customer_uuid - computed: true, optional: false, required: false
  public get customerUuid() {
    return this.getStringAttribute('customer_uuid');
  }

  // market - computed: true, optional: false, required: false
  public get market() {
    return this.getStringAttribute('market');
  }

  // market_description - computed: true, optional: false, required: false
  public get marketDescription() {
    return this.getStringAttribute('market_description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataPacketfabricMarketplaceServicePortRequestsVcRequestsToCustomerList extends cdktf.ComplexList {

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
  public get(index: number): DataPacketfabricMarketplaceServicePortRequestsVcRequestsToCustomerOutputReference {
    return new DataPacketfabricMarketplaceServicePortRequestsVcRequestsToCustomerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPacketfabricMarketplaceServicePortRequestsVcRequests {
}

export function dataPacketfabricMarketplaceServicePortRequestsVcRequestsToTerraform(struct?: DataPacketfabricMarketplaceServicePortRequestsVcRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPacketfabricMarketplaceServicePortRequestsVcRequestsToHclTerraform(struct?: DataPacketfabricMarketplaceServicePortRequestsVcRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPacketfabricMarketplaceServicePortRequestsVcRequestsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPacketfabricMarketplaceServicePortRequestsVcRequests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPacketfabricMarketplaceServicePortRequestsVcRequests | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_untagged_z - computed: true, optional: false, required: false
  public get allowUntaggedZ() {
    return this.getBooleanAttribute('allow_untagged_z');
  }

  // bandwidth - computed: true, optional: false, required: false
  private _bandwidth = new DataPacketfabricMarketplaceServicePortRequestsVcRequestsBandwidthList(this, "bandwidth", true);
  public get bandwidth() {
    return this._bandwidth;
  }

  // flex_bandwidth_id - computed: true, optional: false, required: false
  public get flexBandwidthId() {
    return this.getStringAttribute('flex_bandwidth_id');
  }

  // from_customer - computed: true, optional: false, required: false
  private _fromCustomer = new DataPacketfabricMarketplaceServicePortRequestsVcRequestsFromCustomerList(this, "from_customer", true);
  public get fromCustomer() {
    return this._fromCustomer;
  }

  // rate_limit_in - computed: true, optional: false, required: false
  public get rateLimitIn() {
    return this.getNumberAttribute('rate_limit_in');
  }

  // rate_limit_out - computed: true, optional: false, required: false
  public get rateLimitOut() {
    return this.getNumberAttribute('rate_limit_out');
  }

  // request_type - computed: true, optional: false, required: false
  public get requestType() {
    return this.getStringAttribute('request_type');
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // to_customer - computed: true, optional: false, required: false
  private _toCustomer = new DataPacketfabricMarketplaceServicePortRequestsVcRequestsToCustomerList(this, "to_customer", true);
  public get toCustomer() {
    return this._toCustomer;
  }

  // vc_circuit_id - computed: true, optional: false, required: false
  public get vcCircuitId() {
    return this.getStringAttribute('vc_circuit_id');
  }

  // vc_request_uuid - computed: true, optional: false, required: false
  public get vcRequestUuid() {
    return this.getStringAttribute('vc_request_uuid');
  }
}

export class DataPacketfabricMarketplaceServicePortRequestsVcRequestsList extends cdktf.ComplexList {

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
  public get(index: number): DataPacketfabricMarketplaceServicePortRequestsVcRequestsOutputReference {
    return new DataPacketfabricMarketplaceServicePortRequestsVcRequestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/marketplace_service_port_requests packetfabric_marketplace_service_port_requests}
*/
export class DataPacketfabricMarketplaceServicePortRequests extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "packetfabric_marketplace_service_port_requests";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPacketfabricMarketplaceServicePortRequests resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPacketfabricMarketplaceServicePortRequests to import
  * @param importFromId The id of the existing DataPacketfabricMarketplaceServicePortRequests that should be imported. Refer to the {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/marketplace_service_port_requests#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPacketfabricMarketplaceServicePortRequests to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "packetfabric_marketplace_service_port_requests", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/marketplace_service_port_requests packetfabric_marketplace_service_port_requests} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPacketfabricMarketplaceServicePortRequestsConfig
  */
  public constructor(scope: Construct, id: string, config: DataPacketfabricMarketplaceServicePortRequestsConfig) {
    super(scope, id, {
      terraformResourceType: 'packetfabric_marketplace_service_port_requests',
      terraformGeneratorMetadata: {
        providerName: 'packetfabric',
        providerVersion: '1.9.3'
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
    this._type = config.type;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vc_requests - computed: true, optional: false, required: false
  private _vcRequests = new DataPacketfabricMarketplaceServicePortRequestsVcRequestsList(this, "vc_requests", false);
  public get vcRequests() {
    return this._vcRequests;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      type: cdktf.stringToTerraform(this._type),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
