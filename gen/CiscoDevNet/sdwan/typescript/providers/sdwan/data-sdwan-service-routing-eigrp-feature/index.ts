// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_routing_eigrp_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanServiceRoutingEigrpFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_routing_eigrp_feature#feature_profile_id DataSdwanServiceRoutingEigrpFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The id of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_routing_eigrp_feature#id DataSdwanServiceRoutingEigrpFeature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataSdwanServiceRoutingEigrpFeatureInterfacesSummaryAddresses {
}

export function dataSdwanServiceRoutingEigrpFeatureInterfacesSummaryAddressesToTerraform(struct?: DataSdwanServiceRoutingEigrpFeatureInterfacesSummaryAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceRoutingEigrpFeatureInterfacesSummaryAddressesToHclTerraform(struct?: DataSdwanServiceRoutingEigrpFeatureInterfacesSummaryAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceRoutingEigrpFeatureInterfacesSummaryAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceRoutingEigrpFeatureInterfacesSummaryAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceRoutingEigrpFeatureInterfacesSummaryAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // address_variable - computed: true, optional: false, required: false
  public get addressVariable() {
    return this.getStringAttribute('address_variable');
  }

  // mask - computed: true, optional: false, required: false
  public get mask() {
    return this.getStringAttribute('mask');
  }

  // mask_variable - computed: true, optional: false, required: false
  public get maskVariable() {
    return this.getStringAttribute('mask_variable');
  }
}

export class DataSdwanServiceRoutingEigrpFeatureInterfacesSummaryAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceRoutingEigrpFeatureInterfacesSummaryAddressesOutputReference {
    return new DataSdwanServiceRoutingEigrpFeatureInterfacesSummaryAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceRoutingEigrpFeatureInterfaces {
}

export function dataSdwanServiceRoutingEigrpFeatureInterfacesToTerraform(struct?: DataSdwanServiceRoutingEigrpFeatureInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceRoutingEigrpFeatureInterfacesToHclTerraform(struct?: DataSdwanServiceRoutingEigrpFeatureInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceRoutingEigrpFeatureInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceRoutingEigrpFeatureInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceRoutingEigrpFeatureInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_variable - computed: true, optional: false, required: false
  public get nameVariable() {
    return this.getStringAttribute('name_variable');
  }

  // shutdown - computed: true, optional: false, required: false
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }

  // shutdown_variable - computed: true, optional: false, required: false
  public get shutdownVariable() {
    return this.getStringAttribute('shutdown_variable');
  }

  // summary_addresses - computed: true, optional: false, required: false
  private _summaryAddresses = new DataSdwanServiceRoutingEigrpFeatureInterfacesSummaryAddressesList(this, "summary_addresses", false);
  public get summaryAddresses() {
    return this._summaryAddresses;
  }
}

export class DataSdwanServiceRoutingEigrpFeatureInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceRoutingEigrpFeatureInterfacesOutputReference {
    return new DataSdwanServiceRoutingEigrpFeatureInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceRoutingEigrpFeatureMd5Keys {
}

export function dataSdwanServiceRoutingEigrpFeatureMd5KeysToTerraform(struct?: DataSdwanServiceRoutingEigrpFeatureMd5Keys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceRoutingEigrpFeatureMd5KeysToHclTerraform(struct?: DataSdwanServiceRoutingEigrpFeatureMd5Keys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceRoutingEigrpFeatureMd5KeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceRoutingEigrpFeatureMd5Keys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceRoutingEigrpFeatureMd5Keys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getNumberAttribute('key_id');
  }

  // key_id_variable - computed: true, optional: false, required: false
  public get keyIdVariable() {
    return this.getStringAttribute('key_id_variable');
  }

  // key_string - computed: true, optional: false, required: false
  public get keyString() {
    return this.getStringAttribute('key_string');
  }

  // key_string_variable - computed: true, optional: false, required: false
  public get keyStringVariable() {
    return this.getStringAttribute('key_string_variable');
  }
}

export class DataSdwanServiceRoutingEigrpFeatureMd5KeysList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceRoutingEigrpFeatureMd5KeysOutputReference {
    return new DataSdwanServiceRoutingEigrpFeatureMd5KeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceRoutingEigrpFeatureNetworks {
}

export function dataSdwanServiceRoutingEigrpFeatureNetworksToTerraform(struct?: DataSdwanServiceRoutingEigrpFeatureNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceRoutingEigrpFeatureNetworksToHclTerraform(struct?: DataSdwanServiceRoutingEigrpFeatureNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceRoutingEigrpFeatureNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceRoutingEigrpFeatureNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceRoutingEigrpFeatureNetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ip_address_variable - computed: true, optional: false, required: false
  public get ipAddressVariable() {
    return this.getStringAttribute('ip_address_variable');
  }

  // mask - computed: true, optional: false, required: false
  public get mask() {
    return this.getStringAttribute('mask');
  }

  // mask_variable - computed: true, optional: false, required: false
  public get maskVariable() {
    return this.getStringAttribute('mask_variable');
  }
}

export class DataSdwanServiceRoutingEigrpFeatureNetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceRoutingEigrpFeatureNetworksOutputReference {
    return new DataSdwanServiceRoutingEigrpFeatureNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceRoutingEigrpFeatureRedistributes {
}

export function dataSdwanServiceRoutingEigrpFeatureRedistributesToTerraform(struct?: DataSdwanServiceRoutingEigrpFeatureRedistributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceRoutingEigrpFeatureRedistributesToHclTerraform(struct?: DataSdwanServiceRoutingEigrpFeatureRedistributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceRoutingEigrpFeatureRedistributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceRoutingEigrpFeatureRedistributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceRoutingEigrpFeatureRedistributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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

export class DataSdwanServiceRoutingEigrpFeatureRedistributesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceRoutingEigrpFeatureRedistributesOutputReference {
    return new DataSdwanServiceRoutingEigrpFeatureRedistributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_routing_eigrp_feature sdwan_service_routing_eigrp_feature}
*/
export class DataSdwanServiceRoutingEigrpFeature extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_service_routing_eigrp_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanServiceRoutingEigrpFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanServiceRoutingEigrpFeature to import
  * @param importFromId The id of the existing DataSdwanServiceRoutingEigrpFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_routing_eigrp_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanServiceRoutingEigrpFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_service_routing_eigrp_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_routing_eigrp_feature sdwan_service_routing_eigrp_feature} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanServiceRoutingEigrpFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanServiceRoutingEigrpFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_service_routing_eigrp_feature',
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

  // authentication_type - computed: true, optional: false, required: false
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }

  // authentication_type_variable - computed: true, optional: false, required: false
  public get authenticationTypeVariable() {
    return this.getStringAttribute('authentication_type_variable');
  }

  // autonomous_system_id - computed: true, optional: false, required: false
  public get autonomousSystemId() {
    return this.getNumberAttribute('autonomous_system_id');
  }

  // autonomous_system_id_variable - computed: true, optional: false, required: false
  public get autonomousSystemIdVariable() {
    return this.getStringAttribute('autonomous_system_id_variable');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // filter - computed: true, optional: false, required: false
  public get filter() {
    return this.getBooleanAttribute('filter');
  }

  // filter_variable - computed: true, optional: false, required: false
  public get filterVariable() {
    return this.getStringAttribute('filter_variable');
  }

  // hello_interval - computed: true, optional: false, required: false
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }

  // hello_interval_variable - computed: true, optional: false, required: false
  public get helloIntervalVariable() {
    return this.getStringAttribute('hello_interval_variable');
  }

  // hmac_authentication_key - computed: true, optional: false, required: false
  public get hmacAuthenticationKey() {
    return this.getStringAttribute('hmac_authentication_key');
  }

  // hmac_authentication_key_variable - computed: true, optional: false, required: false
  public get hmacAuthenticationKeyVariable() {
    return this.getStringAttribute('hmac_authentication_key_variable');
  }

  // hold_time - computed: true, optional: false, required: false
  public get holdTime() {
    return this.getNumberAttribute('hold_time');
  }

  // hold_time_variable - computed: true, optional: false, required: false
  public get holdTimeVariable() {
    return this.getStringAttribute('hold_time_variable');
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

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new DataSdwanServiceRoutingEigrpFeatureInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // md5_keys - computed: true, optional: false, required: false
  private _md5Keys = new DataSdwanServiceRoutingEigrpFeatureMd5KeysList(this, "md5_keys", false);
  public get md5Keys() {
    return this._md5Keys;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // networks - computed: true, optional: false, required: false
  private _networks = new DataSdwanServiceRoutingEigrpFeatureNetworksList(this, "networks", false);
  public get networks() {
    return this._networks;
  }

  // redistributes - computed: true, optional: false, required: false
  private _redistributes = new DataSdwanServiceRoutingEigrpFeatureRedistributesList(this, "redistributes", false);
  public get redistributes() {
    return this._redistributes;
  }

  // route_policy_id - computed: true, optional: false, required: false
  public get routePolicyId() {
    return this.getStringAttribute('route_policy_id');
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
