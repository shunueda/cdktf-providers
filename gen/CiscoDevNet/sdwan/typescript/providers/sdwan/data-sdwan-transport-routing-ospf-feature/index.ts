// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_routing_ospf_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanTransportRoutingOspfFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_routing_ospf_feature#feature_profile_id DataSdwanTransportRoutingOspfFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The id of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_routing_ospf_feature#id DataSdwanTransportRoutingOspfFeature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataSdwanTransportRoutingOspfFeatureAreasInterfaces {
}

export function dataSdwanTransportRoutingOspfFeatureAreasInterfacesToTerraform(struct?: DataSdwanTransportRoutingOspfFeatureAreasInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanTransportRoutingOspfFeatureAreasInterfacesToHclTerraform(struct?: DataSdwanTransportRoutingOspfFeatureAreasInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanTransportRoutingOspfFeatureAreasInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanTransportRoutingOspfFeatureAreasInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanTransportRoutingOspfFeatureAreasInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_type - computed: true, optional: false, required: false
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }

  // authentication_type_variable - computed: true, optional: false, required: false
  public get authenticationTypeVariable() {
    return this.getStringAttribute('authentication_type_variable');
  }

  // cost - computed: true, optional: false, required: false
  public get cost() {
    return this.getNumberAttribute('cost');
  }

  // cost_variable - computed: true, optional: false, required: false
  public get costVariable() {
    return this.getStringAttribute('cost_variable');
  }

  // dead_interval - computed: true, optional: false, required: false
  public get deadInterval() {
    return this.getNumberAttribute('dead_interval');
  }

  // dead_interval_variable - computed: true, optional: false, required: false
  public get deadIntervalVariable() {
    return this.getStringAttribute('dead_interval_variable');
  }

  // designated_router_priority - computed: true, optional: false, required: false
  public get designatedRouterPriority() {
    return this.getNumberAttribute('designated_router_priority');
  }

  // designated_router_priority_variable - computed: true, optional: false, required: false
  public get designatedRouterPriorityVariable() {
    return this.getStringAttribute('designated_router_priority_variable');
  }

  // hello_interval - computed: true, optional: false, required: false
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }

  // hello_interval_variable - computed: true, optional: false, required: false
  public get helloIntervalVariable() {
    return this.getStringAttribute('hello_interval_variable');
  }

  // lsa_retransmit_interval - computed: true, optional: false, required: false
  public get lsaRetransmitInterval() {
    return this.getNumberAttribute('lsa_retransmit_interval');
  }

  // lsa_retransmit_interval_variable - computed: true, optional: false, required: false
  public get lsaRetransmitIntervalVariable() {
    return this.getStringAttribute('lsa_retransmit_interval_variable');
  }

  // message_digest_key - computed: true, optional: false, required: false
  public get messageDigestKey() {
    return this.getStringAttribute('message_digest_key');
  }

  // message_digest_key_id - computed: true, optional: false, required: false
  public get messageDigestKeyId() {
    return this.getNumberAttribute('message_digest_key_id');
  }

  // message_digest_key_id_variable - computed: true, optional: false, required: false
  public get messageDigestKeyIdVariable() {
    return this.getStringAttribute('message_digest_key_id_variable');
  }

  // message_digest_key_variable - computed: true, optional: false, required: false
  public get messageDigestKeyVariable() {
    return this.getStringAttribute('message_digest_key_variable');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_variable - computed: true, optional: false, required: false
  public get nameVariable() {
    return this.getStringAttribute('name_variable');
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // network_type_variable - computed: true, optional: false, required: false
  public get networkTypeVariable() {
    return this.getStringAttribute('network_type_variable');
  }

  // passive_interface - computed: true, optional: false, required: false
  public get passiveInterface() {
    return this.getBooleanAttribute('passive_interface');
  }

  // passive_interface_variable - computed: true, optional: false, required: false
  public get passiveInterfaceVariable() {
    return this.getStringAttribute('passive_interface_variable');
  }
}

export class DataSdwanTransportRoutingOspfFeatureAreasInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanTransportRoutingOspfFeatureAreasInterfacesOutputReference {
    return new DataSdwanTransportRoutingOspfFeatureAreasInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanTransportRoutingOspfFeatureAreasRanges {
}

export function dataSdwanTransportRoutingOspfFeatureAreasRangesToTerraform(struct?: DataSdwanTransportRoutingOspfFeatureAreasRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanTransportRoutingOspfFeatureAreasRangesToHclTerraform(struct?: DataSdwanTransportRoutingOspfFeatureAreasRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanTransportRoutingOspfFeatureAreasRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanTransportRoutingOspfFeatureAreasRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanTransportRoutingOspfFeatureAreasRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cost - computed: true, optional: false, required: false
  public get cost() {
    return this.getNumberAttribute('cost');
  }

  // cost_variable - computed: true, optional: false, required: false
  public get costVariable() {
    return this.getStringAttribute('cost_variable');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ip_address_variable - computed: true, optional: false, required: false
  public get ipAddressVariable() {
    return this.getStringAttribute('ip_address_variable');
  }

  // no_advertise - computed: true, optional: false, required: false
  public get noAdvertise() {
    return this.getBooleanAttribute('no_advertise');
  }

  // no_advertise_variable - computed: true, optional: false, required: false
  public get noAdvertiseVariable() {
    return this.getStringAttribute('no_advertise_variable');
  }

  // subnet_mask - computed: true, optional: false, required: false
  public get subnetMask() {
    return this.getStringAttribute('subnet_mask');
  }

  // subnet_mask_variable - computed: true, optional: false, required: false
  public get subnetMaskVariable() {
    return this.getStringAttribute('subnet_mask_variable');
  }
}

export class DataSdwanTransportRoutingOspfFeatureAreasRangesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanTransportRoutingOspfFeatureAreasRangesOutputReference {
    return new DataSdwanTransportRoutingOspfFeatureAreasRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanTransportRoutingOspfFeatureAreas {
}

export function dataSdwanTransportRoutingOspfFeatureAreasToTerraform(struct?: DataSdwanTransportRoutingOspfFeatureAreas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanTransportRoutingOspfFeatureAreasToHclTerraform(struct?: DataSdwanTransportRoutingOspfFeatureAreas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanTransportRoutingOspfFeatureAreasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanTransportRoutingOspfFeatureAreas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanTransportRoutingOspfFeatureAreas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // area_number - computed: true, optional: false, required: false
  public get areaNumber() {
    return this.getNumberAttribute('area_number');
  }

  // area_number_variable - computed: true, optional: false, required: false
  public get areaNumberVariable() {
    return this.getStringAttribute('area_number_variable');
  }

  // area_type - computed: true, optional: false, required: false
  public get areaType() {
    return this.getStringAttribute('area_type');
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new DataSdwanTransportRoutingOspfFeatureAreasInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // no_summary - computed: true, optional: false, required: false
  public get noSummary() {
    return this.getBooleanAttribute('no_summary');
  }

  // no_summary_variable - computed: true, optional: false, required: false
  public get noSummaryVariable() {
    return this.getStringAttribute('no_summary_variable');
  }

  // ranges - computed: true, optional: false, required: false
  private _ranges = new DataSdwanTransportRoutingOspfFeatureAreasRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
}

export class DataSdwanTransportRoutingOspfFeatureAreasList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanTransportRoutingOspfFeatureAreasOutputReference {
    return new DataSdwanTransportRoutingOspfFeatureAreasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanTransportRoutingOspfFeatureRedistributes {
}

export function dataSdwanTransportRoutingOspfFeatureRedistributesToTerraform(struct?: DataSdwanTransportRoutingOspfFeatureRedistributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanTransportRoutingOspfFeatureRedistributesToHclTerraform(struct?: DataSdwanTransportRoutingOspfFeatureRedistributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanTransportRoutingOspfFeatureRedistributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanTransportRoutingOspfFeatureRedistributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanTransportRoutingOspfFeatureRedistributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // nat_dia - computed: true, optional: false, required: false
  public get natDia() {
    return this.getBooleanAttribute('nat_dia');
  }

  // nat_dia_variable - computed: true, optional: false, required: false
  public get natDiaVariable() {
    return this.getStringAttribute('nat_dia_variable');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // protocol_variable - computed: true, optional: false, required: false
  public get protocolVariable() {
    return this.getStringAttribute('protocol_variable');
  }

  // route_policy_id - computed: true, optional: false, required: false
  public get routePolicyId() {
    return this.getStringAttribute('route_policy_id');
  }
}

export class DataSdwanTransportRoutingOspfFeatureRedistributesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanTransportRoutingOspfFeatureRedistributesOutputReference {
    return new DataSdwanTransportRoutingOspfFeatureRedistributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanTransportRoutingOspfFeatureRouterLsas {
}

export function dataSdwanTransportRoutingOspfFeatureRouterLsasToTerraform(struct?: DataSdwanTransportRoutingOspfFeatureRouterLsas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanTransportRoutingOspfFeatureRouterLsasToHclTerraform(struct?: DataSdwanTransportRoutingOspfFeatureRouterLsas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanTransportRoutingOspfFeatureRouterLsasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanTransportRoutingOspfFeatureRouterLsas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanTransportRoutingOspfFeatureRouterLsas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getNumberAttribute('time');
  }

  // time_variable - computed: true, optional: false, required: false
  public get timeVariable() {
    return this.getStringAttribute('time_variable');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataSdwanTransportRoutingOspfFeatureRouterLsasList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanTransportRoutingOspfFeatureRouterLsasOutputReference {
    return new DataSdwanTransportRoutingOspfFeatureRouterLsasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_routing_ospf_feature sdwan_transport_routing_ospf_feature}
*/
export class DataSdwanTransportRoutingOspfFeature extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_transport_routing_ospf_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanTransportRoutingOspfFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanTransportRoutingOspfFeature to import
  * @param importFromId The id of the existing DataSdwanTransportRoutingOspfFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_routing_ospf_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanTransportRoutingOspfFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_transport_routing_ospf_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_routing_ospf_feature sdwan_transport_routing_ospf_feature} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanTransportRoutingOspfFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanTransportRoutingOspfFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_transport_routing_ospf_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._featureProfileId = config.featureProfileId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // areas - computed: true, optional: false, required: false
  private _areas = new DataSdwanTransportRoutingOspfFeatureAreasList(this, "areas", false);
  public get areas() {
    return this._areas;
  }

  // default_information_originate - computed: true, optional: false, required: false
  public get defaultInformationOriginate() {
    return this.getBooleanAttribute('default_information_originate');
  }

  // default_information_originate_always - computed: true, optional: false, required: false
  public get defaultInformationOriginateAlways() {
    return this.getBooleanAttribute('default_information_originate_always');
  }

  // default_information_originate_always_variable - computed: true, optional: false, required: false
  public get defaultInformationOriginateAlwaysVariable() {
    return this.getStringAttribute('default_information_originate_always_variable');
  }

  // default_information_originate_metric - computed: true, optional: false, required: false
  public get defaultInformationOriginateMetric() {
    return this.getNumberAttribute('default_information_originate_metric');
  }

  // default_information_originate_metric_type - computed: true, optional: false, required: false
  public get defaultInformationOriginateMetricType() {
    return this.getStringAttribute('default_information_originate_metric_type');
  }

  // default_information_originate_metric_type_variable - computed: true, optional: false, required: false
  public get defaultInformationOriginateMetricTypeVariable() {
    return this.getStringAttribute('default_information_originate_metric_type_variable');
  }

  // default_information_originate_metric_variable - computed: true, optional: false, required: false
  public get defaultInformationOriginateMetricVariable() {
    return this.getStringAttribute('default_information_originate_metric_variable');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // distance_external - computed: true, optional: false, required: false
  public get distanceExternal() {
    return this.getNumberAttribute('distance_external');
  }

  // distance_external_variable - computed: true, optional: false, required: false
  public get distanceExternalVariable() {
    return this.getStringAttribute('distance_external_variable');
  }

  // distance_inter_area - computed: true, optional: false, required: false
  public get distanceInterArea() {
    return this.getNumberAttribute('distance_inter_area');
  }

  // distance_inter_area_variable - computed: true, optional: false, required: false
  public get distanceInterAreaVariable() {
    return this.getStringAttribute('distance_inter_area_variable');
  }

  // distance_intra_area - computed: true, optional: false, required: false
  public get distanceIntraArea() {
    return this.getNumberAttribute('distance_intra_area');
  }

  // distance_intra_area_variable - computed: true, optional: false, required: false
  public get distanceIntraAreaVariable() {
    return this.getStringAttribute('distance_intra_area_variable');
  }

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // redistributes - computed: true, optional: false, required: false
  private _redistributes = new DataSdwanTransportRoutingOspfFeatureRedistributesList(this, "redistributes", false);
  public get redistributes() {
    return this._redistributes;
  }

  // reference_bandwidth - computed: true, optional: false, required: false
  public get referenceBandwidth() {
    return this.getNumberAttribute('reference_bandwidth');
  }

  // reference_bandwidth_variable - computed: true, optional: false, required: false
  public get referenceBandwidthVariable() {
    return this.getStringAttribute('reference_bandwidth_variable');
  }

  // rfc_1583_compatible - computed: true, optional: false, required: false
  public get rfc1583Compatible() {
    return this.getBooleanAttribute('rfc_1583_compatible');
  }

  // rfc_1583_compatible_variable - computed: true, optional: false, required: false
  public get rfc1583CompatibleVariable() {
    return this.getStringAttribute('rfc_1583_compatible_variable');
  }

  // route_policy_id - computed: true, optional: false, required: false
  public get routePolicyId() {
    return this.getStringAttribute('route_policy_id');
  }

  // router_id - computed: true, optional: false, required: false
  public get routerId() {
    return this.getStringAttribute('router_id');
  }

  // router_id_variable - computed: true, optional: false, required: false
  public get routerIdVariable() {
    return this.getStringAttribute('router_id_variable');
  }

  // router_lsas - computed: true, optional: false, required: false
  private _routerLsas = new DataSdwanTransportRoutingOspfFeatureRouterLsasList(this, "router_lsas", false);
  public get routerLsas() {
    return this._routerLsas;
  }

  // spf_calculation_delay - computed: true, optional: false, required: false
  public get spfCalculationDelay() {
    return this.getNumberAttribute('spf_calculation_delay');
  }

  // spf_calculation_delay_variable - computed: true, optional: false, required: false
  public get spfCalculationDelayVariable() {
    return this.getStringAttribute('spf_calculation_delay_variable');
  }

  // spf_initial_hold_time - computed: true, optional: false, required: false
  public get spfInitialHoldTime() {
    return this.getNumberAttribute('spf_initial_hold_time');
  }

  // spf_initial_hold_time_variable - computed: true, optional: false, required: false
  public get spfInitialHoldTimeVariable() {
    return this.getStringAttribute('spf_initial_hold_time_variable');
  }

  // spf_maximum_hold_time - computed: true, optional: false, required: false
  public get spfMaximumHoldTime() {
    return this.getNumberAttribute('spf_maximum_hold_time');
  }

  // spf_maximum_hold_time_variable - computed: true, optional: false, required: false
  public get spfMaximumHoldTimeVariable() {
    return this.getStringAttribute('spf_maximum_hold_time_variable');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
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
