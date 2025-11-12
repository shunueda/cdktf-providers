// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_lan_vpn_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanServiceLanVpnFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_lan_vpn_feature#feature_profile_id DataSdwanServiceLanVpnFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The id of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_lan_vpn_feature#id DataSdwanServiceLanVpnFeature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataSdwanServiceLanVpnFeatureAdvertiseOmpIpv4SPrefixes {
}

export function dataSdwanServiceLanVpnFeatureAdvertiseOmpIpv4SPrefixesToTerraform(struct?: DataSdwanServiceLanVpnFeatureAdvertiseOmpIpv4SPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceLanVpnFeatureAdvertiseOmpIpv4SPrefixesToHclTerraform(struct?: DataSdwanServiceLanVpnFeatureAdvertiseOmpIpv4SPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceLanVpnFeatureAdvertiseOmpIpv4SPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceLanVpnFeatureAdvertiseOmpIpv4SPrefixes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceLanVpnFeatureAdvertiseOmpIpv4SPrefixes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregate_only - computed: true, optional: false, required: false
  public get aggregateOnly() {
    return this.getBooleanAttribute('aggregate_only');
  }

  // network_address - computed: true, optional: false, required: false
  public get networkAddress() {
    return this.getStringAttribute('network_address');
  }

  // network_address_variable - computed: true, optional: false, required: false
  public get networkAddressVariable() {
    return this.getStringAttribute('network_address_variable');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // region_variable - computed: true, optional: false, required: false
  public get regionVariable() {
    return this.getStringAttribute('region_variable');
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

export class DataSdwanServiceLanVpnFeatureAdvertiseOmpIpv4SPrefixesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceLanVpnFeatureAdvertiseOmpIpv4SPrefixesOutputReference {
    return new DataSdwanServiceLanVpnFeatureAdvertiseOmpIpv4SPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceLanVpnFeatureAdvertiseOmpIpv4S {
}

export function dataSdwanServiceLanVpnFeatureAdvertiseOmpIpv4SToTerraform(struct?: DataSdwanServiceLanVpnFeatureAdvertiseOmpIpv4S): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceLanVpnFeatureAdvertiseOmpIpv4SToHclTerraform(struct?: DataSdwanServiceLanVpnFeatureAdvertiseOmpIpv4S): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceLanVpnFeatureAdvertiseOmpIpv4SOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceLanVpnFeatureAdvertiseOmpIpv4S | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceLanVpnFeatureAdvertiseOmpIpv4S | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefixes - computed: true, optional: false, required: false
  private _prefixes = new DataSdwanServiceLanVpnFeatureAdvertiseOmpIpv4SPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
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

export class DataSdwanServiceLanVpnFeatureAdvertiseOmpIpv4SList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceLanVpnFeatureAdvertiseOmpIpv4SOutputReference {
    return new DataSdwanServiceLanVpnFeatureAdvertiseOmpIpv4SOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceLanVpnFeatureAdvertiseOmpIpv6SPrefixes {
}

export function dataSdwanServiceLanVpnFeatureAdvertiseOmpIpv6SPrefixesToTerraform(struct?: DataSdwanServiceLanVpnFeatureAdvertiseOmpIpv6SPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceLanVpnFeatureAdvertiseOmpIpv6SPrefixesToHclTerraform(struct?: DataSdwanServiceLanVpnFeatureAdvertiseOmpIpv6SPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceLanVpnFeatureAdvertiseOmpIpv6SPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceLanVpnFeatureAdvertiseOmpIpv6SPrefixes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceLanVpnFeatureAdvertiseOmpIpv6SPrefixes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregate_only - computed: true, optional: false, required: false
  public get aggregateOnly() {
    return this.getBooleanAttribute('aggregate_only');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // prefix_variable - computed: true, optional: false, required: false
  public get prefixVariable() {
    return this.getStringAttribute('prefix_variable');
  }
}

export class DataSdwanServiceLanVpnFeatureAdvertiseOmpIpv6SPrefixesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceLanVpnFeatureAdvertiseOmpIpv6SPrefixesOutputReference {
    return new DataSdwanServiceLanVpnFeatureAdvertiseOmpIpv6SPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceLanVpnFeatureAdvertiseOmpIpv6S {
}

export function dataSdwanServiceLanVpnFeatureAdvertiseOmpIpv6SToTerraform(struct?: DataSdwanServiceLanVpnFeatureAdvertiseOmpIpv6S): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceLanVpnFeatureAdvertiseOmpIpv6SToHclTerraform(struct?: DataSdwanServiceLanVpnFeatureAdvertiseOmpIpv6S): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceLanVpnFeatureAdvertiseOmpIpv6SOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceLanVpnFeatureAdvertiseOmpIpv6S | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceLanVpnFeatureAdvertiseOmpIpv6S | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefixes - computed: true, optional: false, required: false
  private _prefixes = new DataSdwanServiceLanVpnFeatureAdvertiseOmpIpv6SPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // protocol_sub_type - computed: true, optional: false, required: false
  public get protocolSubType() {
    return this.getStringAttribute('protocol_sub_type');
  }

  // protocol_sub_type_variable - computed: true, optional: false, required: false
  public get protocolSubTypeVariable() {
    return this.getStringAttribute('protocol_sub_type_variable');
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

export class DataSdwanServiceLanVpnFeatureAdvertiseOmpIpv6SList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceLanVpnFeatureAdvertiseOmpIpv6SOutputReference {
    return new DataSdwanServiceLanVpnFeatureAdvertiseOmpIpv6SOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceLanVpnFeatureGreRoutes {
}

export function dataSdwanServiceLanVpnFeatureGreRoutesToTerraform(struct?: DataSdwanServiceLanVpnFeatureGreRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceLanVpnFeatureGreRoutesToHclTerraform(struct?: DataSdwanServiceLanVpnFeatureGreRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceLanVpnFeatureGreRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceLanVpnFeatureGreRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceLanVpnFeatureGreRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }

  // interface_variable - computed: true, optional: false, required: false
  public get interfaceVariable() {
    return this.getStringAttribute('interface_variable');
  }

  // network_address - computed: true, optional: false, required: false
  public get networkAddress() {
    return this.getStringAttribute('network_address');
  }

  // network_address_variable - computed: true, optional: false, required: false
  public get networkAddressVariable() {
    return this.getStringAttribute('network_address_variable');
  }

  // subnet_mask - computed: true, optional: false, required: false
  public get subnetMask() {
    return this.getStringAttribute('subnet_mask');
  }

  // subnet_mask_variable - computed: true, optional: false, required: false
  public get subnetMaskVariable() {
    return this.getStringAttribute('subnet_mask_variable');
  }

  // vpn - computed: true, optional: false, required: false
  public get vpn() {
    return this.getNumberAttribute('vpn');
  }
}

export class DataSdwanServiceLanVpnFeatureGreRoutesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceLanVpnFeatureGreRoutesOutputReference {
    return new DataSdwanServiceLanVpnFeatureGreRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceLanVpnFeatureHostMappings {
}

export function dataSdwanServiceLanVpnFeatureHostMappingsToTerraform(struct?: DataSdwanServiceLanVpnFeatureHostMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceLanVpnFeatureHostMappingsToHclTerraform(struct?: DataSdwanServiceLanVpnFeatureHostMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceLanVpnFeatureHostMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceLanVpnFeatureHostMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceLanVpnFeatureHostMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // host_name_variable - computed: true, optional: false, required: false
  public get hostNameVariable() {
    return this.getStringAttribute('host_name_variable');
  }

  // list_of_ips - computed: true, optional: false, required: false
  public get listOfIps() {
    return cdktf.Fn.tolist(this.getListAttribute('list_of_ips'));
  }

  // list_of_ips_variable - computed: true, optional: false, required: false
  public get listOfIpsVariable() {
    return this.getStringAttribute('list_of_ips_variable');
  }
}

export class DataSdwanServiceLanVpnFeatureHostMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceLanVpnFeatureHostMappingsOutputReference {
    return new DataSdwanServiceLanVpnFeatureHostMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceLanVpnFeatureIpsecRoutes {
}

export function dataSdwanServiceLanVpnFeatureIpsecRoutesToTerraform(struct?: DataSdwanServiceLanVpnFeatureIpsecRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceLanVpnFeatureIpsecRoutesToHclTerraform(struct?: DataSdwanServiceLanVpnFeatureIpsecRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceLanVpnFeatureIpsecRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceLanVpnFeatureIpsecRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceLanVpnFeatureIpsecRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }

  // interface_variable - computed: true, optional: false, required: false
  public get interfaceVariable() {
    return this.getStringAttribute('interface_variable');
  }

  // network_address - computed: true, optional: false, required: false
  public get networkAddress() {
    return this.getStringAttribute('network_address');
  }

  // network_address_variable - computed: true, optional: false, required: false
  public get networkAddressVariable() {
    return this.getStringAttribute('network_address_variable');
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

export class DataSdwanServiceLanVpnFeatureIpsecRoutesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceLanVpnFeatureIpsecRoutesOutputReference {
    return new DataSdwanServiceLanVpnFeatureIpsecRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceLanVpnFeatureIpv4ExportRouteTargets {
}

export function dataSdwanServiceLanVpnFeatureIpv4ExportRouteTargetsToTerraform(struct?: DataSdwanServiceLanVpnFeatureIpv4ExportRouteTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceLanVpnFeatureIpv4ExportRouteTargetsToHclTerraform(struct?: DataSdwanServiceLanVpnFeatureIpv4ExportRouteTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceLanVpnFeatureIpv4ExportRouteTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceLanVpnFeatureIpv4ExportRouteTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceLanVpnFeatureIpv4ExportRouteTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // route_target - computed: true, optional: false, required: false
  public get routeTarget() {
    return this.getStringAttribute('route_target');
  }

  // route_target_variable - computed: true, optional: false, required: false
  public get routeTargetVariable() {
    return this.getStringAttribute('route_target_variable');
  }
}

export class DataSdwanServiceLanVpnFeatureIpv4ExportRouteTargetsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceLanVpnFeatureIpv4ExportRouteTargetsOutputReference {
    return new DataSdwanServiceLanVpnFeatureIpv4ExportRouteTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceLanVpnFeatureIpv4ImportRouteTargets {
}

export function dataSdwanServiceLanVpnFeatureIpv4ImportRouteTargetsToTerraform(struct?: DataSdwanServiceLanVpnFeatureIpv4ImportRouteTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceLanVpnFeatureIpv4ImportRouteTargetsToHclTerraform(struct?: DataSdwanServiceLanVpnFeatureIpv4ImportRouteTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceLanVpnFeatureIpv4ImportRouteTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceLanVpnFeatureIpv4ImportRouteTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceLanVpnFeatureIpv4ImportRouteTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // route_target - computed: true, optional: false, required: false
  public get routeTarget() {
    return this.getStringAttribute('route_target');
  }

  // route_target_variable - computed: true, optional: false, required: false
  public get routeTargetVariable() {
    return this.getStringAttribute('route_target_variable');
  }
}

export class DataSdwanServiceLanVpnFeatureIpv4ImportRouteTargetsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceLanVpnFeatureIpv4ImportRouteTargetsOutputReference {
    return new DataSdwanServiceLanVpnFeatureIpv4ImportRouteTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceLanVpnFeatureIpv4StaticRoutesNextHopWithTrackers {
}

export function dataSdwanServiceLanVpnFeatureIpv4StaticRoutesNextHopWithTrackersToTerraform(struct?: DataSdwanServiceLanVpnFeatureIpv4StaticRoutesNextHopWithTrackers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceLanVpnFeatureIpv4StaticRoutesNextHopWithTrackersToHclTerraform(struct?: DataSdwanServiceLanVpnFeatureIpv4StaticRoutesNextHopWithTrackers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceLanVpnFeatureIpv4StaticRoutesNextHopWithTrackersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceLanVpnFeatureIpv4StaticRoutesNextHopWithTrackers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceLanVpnFeatureIpv4StaticRoutesNextHopWithTrackers | undefined) {
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

  // administrative_distance - computed: true, optional: false, required: false
  public get administrativeDistance() {
    return this.getNumberAttribute('administrative_distance');
  }

  // administrative_distance_variable - computed: true, optional: false, required: false
  public get administrativeDistanceVariable() {
    return this.getStringAttribute('administrative_distance_variable');
  }

  // tracker_id - computed: true, optional: false, required: false
  public get trackerId() {
    return this.getStringAttribute('tracker_id');
  }
}

export class DataSdwanServiceLanVpnFeatureIpv4StaticRoutesNextHopWithTrackersList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceLanVpnFeatureIpv4StaticRoutesNextHopWithTrackersOutputReference {
    return new DataSdwanServiceLanVpnFeatureIpv4StaticRoutesNextHopWithTrackersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceLanVpnFeatureIpv4StaticRoutesNextHops {
}

export function dataSdwanServiceLanVpnFeatureIpv4StaticRoutesNextHopsToTerraform(struct?: DataSdwanServiceLanVpnFeatureIpv4StaticRoutesNextHops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceLanVpnFeatureIpv4StaticRoutesNextHopsToHclTerraform(struct?: DataSdwanServiceLanVpnFeatureIpv4StaticRoutesNextHops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceLanVpnFeatureIpv4StaticRoutesNextHopsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceLanVpnFeatureIpv4StaticRoutesNextHops | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceLanVpnFeatureIpv4StaticRoutesNextHops | undefined) {
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

  // administrative_distance - computed: true, optional: false, required: false
  public get administrativeDistance() {
    return this.getNumberAttribute('administrative_distance');
  }

  // administrative_distance_variable - computed: true, optional: false, required: false
  public get administrativeDistanceVariable() {
    return this.getStringAttribute('administrative_distance_variable');
  }
}

export class DataSdwanServiceLanVpnFeatureIpv4StaticRoutesNextHopsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceLanVpnFeatureIpv4StaticRoutesNextHopsOutputReference {
    return new DataSdwanServiceLanVpnFeatureIpv4StaticRoutesNextHopsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceLanVpnFeatureIpv4StaticRoutes {
}

export function dataSdwanServiceLanVpnFeatureIpv4StaticRoutesToTerraform(struct?: DataSdwanServiceLanVpnFeatureIpv4StaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceLanVpnFeatureIpv4StaticRoutesToHclTerraform(struct?: DataSdwanServiceLanVpnFeatureIpv4StaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceLanVpnFeatureIpv4StaticRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceLanVpnFeatureIpv4StaticRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceLanVpnFeatureIpv4StaticRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dhcp - computed: true, optional: false, required: false
  public get dhcp() {
    return this.getBooleanAttribute('dhcp');
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // network_address - computed: true, optional: false, required: false
  public get networkAddress() {
    return this.getStringAttribute('network_address');
  }

  // network_address_variable - computed: true, optional: false, required: false
  public get networkAddressVariable() {
    return this.getStringAttribute('network_address_variable');
  }

  // next_hop_with_trackers - computed: true, optional: false, required: false
  private _nextHopWithTrackers = new DataSdwanServiceLanVpnFeatureIpv4StaticRoutesNextHopWithTrackersList(this, "next_hop_with_trackers", false);
  public get nextHopWithTrackers() {
    return this._nextHopWithTrackers;
  }

  // next_hops - computed: true, optional: false, required: false
  private _nextHops = new DataSdwanServiceLanVpnFeatureIpv4StaticRoutesNextHopsList(this, "next_hops", false);
  public get nextHops() {
    return this._nextHops;
  }

  // null0 - computed: true, optional: false, required: false
  public get null0() {
    return this.getBooleanAttribute('null0');
  }

  // subnet_mask - computed: true, optional: false, required: false
  public get subnetMask() {
    return this.getStringAttribute('subnet_mask');
  }

  // subnet_mask_variable - computed: true, optional: false, required: false
  public get subnetMaskVariable() {
    return this.getStringAttribute('subnet_mask_variable');
  }

  // vpn - computed: true, optional: false, required: false
  public get vpn() {
    return this.getBooleanAttribute('vpn');
  }
}

export class DataSdwanServiceLanVpnFeatureIpv4StaticRoutesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceLanVpnFeatureIpv4StaticRoutesOutputReference {
    return new DataSdwanServiceLanVpnFeatureIpv4StaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceLanVpnFeatureIpv6ExportRouteTargets {
}

export function dataSdwanServiceLanVpnFeatureIpv6ExportRouteTargetsToTerraform(struct?: DataSdwanServiceLanVpnFeatureIpv6ExportRouteTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceLanVpnFeatureIpv6ExportRouteTargetsToHclTerraform(struct?: DataSdwanServiceLanVpnFeatureIpv6ExportRouteTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceLanVpnFeatureIpv6ExportRouteTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceLanVpnFeatureIpv6ExportRouteTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceLanVpnFeatureIpv6ExportRouteTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // route_target - computed: true, optional: false, required: false
  public get routeTarget() {
    return this.getStringAttribute('route_target');
  }

  // route_target_variable - computed: true, optional: false, required: false
  public get routeTargetVariable() {
    return this.getStringAttribute('route_target_variable');
  }
}

export class DataSdwanServiceLanVpnFeatureIpv6ExportRouteTargetsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceLanVpnFeatureIpv6ExportRouteTargetsOutputReference {
    return new DataSdwanServiceLanVpnFeatureIpv6ExportRouteTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceLanVpnFeatureIpv6ImportRouteTargets {
}

export function dataSdwanServiceLanVpnFeatureIpv6ImportRouteTargetsToTerraform(struct?: DataSdwanServiceLanVpnFeatureIpv6ImportRouteTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceLanVpnFeatureIpv6ImportRouteTargetsToHclTerraform(struct?: DataSdwanServiceLanVpnFeatureIpv6ImportRouteTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceLanVpnFeatureIpv6ImportRouteTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceLanVpnFeatureIpv6ImportRouteTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceLanVpnFeatureIpv6ImportRouteTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // route_target - computed: true, optional: false, required: false
  public get routeTarget() {
    return this.getStringAttribute('route_target');
  }

  // route_target_variable - computed: true, optional: false, required: false
  public get routeTargetVariable() {
    return this.getStringAttribute('route_target_variable');
  }
}

export class DataSdwanServiceLanVpnFeatureIpv6ImportRouteTargetsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceLanVpnFeatureIpv6ImportRouteTargetsOutputReference {
    return new DataSdwanServiceLanVpnFeatureIpv6ImportRouteTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceLanVpnFeatureIpv6StaticRoutesNextHops {
}

export function dataSdwanServiceLanVpnFeatureIpv6StaticRoutesNextHopsToTerraform(struct?: DataSdwanServiceLanVpnFeatureIpv6StaticRoutesNextHops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceLanVpnFeatureIpv6StaticRoutesNextHopsToHclTerraform(struct?: DataSdwanServiceLanVpnFeatureIpv6StaticRoutesNextHops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceLanVpnFeatureIpv6StaticRoutesNextHopsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceLanVpnFeatureIpv6StaticRoutesNextHops | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceLanVpnFeatureIpv6StaticRoutesNextHops | undefined) {
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

  // administrative_distance - computed: true, optional: false, required: false
  public get administrativeDistance() {
    return this.getNumberAttribute('administrative_distance');
  }

  // administrative_distance_variable - computed: true, optional: false, required: false
  public get administrativeDistanceVariable() {
    return this.getStringAttribute('administrative_distance_variable');
  }
}

export class DataSdwanServiceLanVpnFeatureIpv6StaticRoutesNextHopsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceLanVpnFeatureIpv6StaticRoutesNextHopsOutputReference {
    return new DataSdwanServiceLanVpnFeatureIpv6StaticRoutesNextHopsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceLanVpnFeatureIpv6StaticRoutes {
}

export function dataSdwanServiceLanVpnFeatureIpv6StaticRoutesToTerraform(struct?: DataSdwanServiceLanVpnFeatureIpv6StaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceLanVpnFeatureIpv6StaticRoutesToHclTerraform(struct?: DataSdwanServiceLanVpnFeatureIpv6StaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceLanVpnFeatureIpv6StaticRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceLanVpnFeatureIpv6StaticRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceLanVpnFeatureIpv6StaticRoutes | undefined) {
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

  // nat - computed: true, optional: false, required: false
  public get nat() {
    return this.getStringAttribute('nat');
  }

  // nat_variable - computed: true, optional: false, required: false
  public get natVariable() {
    return this.getStringAttribute('nat_variable');
  }

  // next_hops - computed: true, optional: false, required: false
  private _nextHops = new DataSdwanServiceLanVpnFeatureIpv6StaticRoutesNextHopsList(this, "next_hops", false);
  public get nextHops() {
    return this._nextHops;
  }

  // null0 - computed: true, optional: false, required: false
  public get null0() {
    return this.getBooleanAttribute('null0');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // prefix_variable - computed: true, optional: false, required: false
  public get prefixVariable() {
    return this.getStringAttribute('prefix_variable');
  }
}

export class DataSdwanServiceLanVpnFeatureIpv6StaticRoutesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceLanVpnFeatureIpv6StaticRoutesOutputReference {
    return new DataSdwanServiceLanVpnFeatureIpv6StaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceLanVpnFeatureNat64V4Pools {
}

export function dataSdwanServiceLanVpnFeatureNat64V4PoolsToTerraform(struct?: DataSdwanServiceLanVpnFeatureNat64V4Pools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceLanVpnFeatureNat64V4PoolsToHclTerraform(struct?: DataSdwanServiceLanVpnFeatureNat64V4Pools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceLanVpnFeatureNat64V4PoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceLanVpnFeatureNat64V4Pools | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceLanVpnFeatureNat64V4Pools | undefined) {
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

  // overload - computed: true, optional: false, required: false
  public get overload() {
    return this.getBooleanAttribute('overload');
  }

  // overload_variable - computed: true, optional: false, required: false
  public get overloadVariable() {
    return this.getStringAttribute('overload_variable');
  }

  // range_end - computed: true, optional: false, required: false
  public get rangeEnd() {
    return this.getStringAttribute('range_end');
  }

  // range_end_variable - computed: true, optional: false, required: false
  public get rangeEndVariable() {
    return this.getStringAttribute('range_end_variable');
  }

  // range_start - computed: true, optional: false, required: false
  public get rangeStart() {
    return this.getStringAttribute('range_start');
  }

  // range_start_variable - computed: true, optional: false, required: false
  public get rangeStartVariable() {
    return this.getStringAttribute('range_start_variable');
  }
}

export class DataSdwanServiceLanVpnFeatureNat64V4PoolsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceLanVpnFeatureNat64V4PoolsOutputReference {
    return new DataSdwanServiceLanVpnFeatureNat64V4PoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceLanVpnFeatureNatPools {
}

export function dataSdwanServiceLanVpnFeatureNatPoolsToTerraform(struct?: DataSdwanServiceLanVpnFeatureNatPools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceLanVpnFeatureNatPoolsToHclTerraform(struct?: DataSdwanServiceLanVpnFeatureNatPools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceLanVpnFeatureNatPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceLanVpnFeatureNatPools | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceLanVpnFeatureNatPools | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // direction_variable - computed: true, optional: false, required: false
  public get directionVariable() {
    return this.getStringAttribute('direction_variable');
  }

  // nat_pool_name - computed: true, optional: false, required: false
  public get natPoolName() {
    return this.getNumberAttribute('nat_pool_name');
  }

  // nat_pool_name_variable - computed: true, optional: false, required: false
  public get natPoolNameVariable() {
    return this.getStringAttribute('nat_pool_name_variable');
  }

  // overload - computed: true, optional: false, required: false
  public get overload() {
    return this.getBooleanAttribute('overload');
  }

  // overload_variable - computed: true, optional: false, required: false
  public get overloadVariable() {
    return this.getStringAttribute('overload_variable');
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // prefix_length_variable - computed: true, optional: false, required: false
  public get prefixLengthVariable() {
    return this.getStringAttribute('prefix_length_variable');
  }

  // range_end - computed: true, optional: false, required: false
  public get rangeEnd() {
    return this.getStringAttribute('range_end');
  }

  // range_end_variable - computed: true, optional: false, required: false
  public get rangeEndVariable() {
    return this.getStringAttribute('range_end_variable');
  }

  // range_start - computed: true, optional: false, required: false
  public get rangeStart() {
    return this.getStringAttribute('range_start');
  }

  // range_start_variable - computed: true, optional: false, required: false
  public get rangeStartVariable() {
    return this.getStringAttribute('range_start_variable');
  }

  // tracker_object_id - computed: true, optional: false, required: false
  public get trackerObjectId() {
    return this.getStringAttribute('tracker_object_id');
  }
}

export class DataSdwanServiceLanVpnFeatureNatPoolsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceLanVpnFeatureNatPoolsOutputReference {
    return new DataSdwanServiceLanVpnFeatureNatPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceLanVpnFeatureNatPortForwards {
}

export function dataSdwanServiceLanVpnFeatureNatPortForwardsToTerraform(struct?: DataSdwanServiceLanVpnFeatureNatPortForwards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceLanVpnFeatureNatPortForwardsToHclTerraform(struct?: DataSdwanServiceLanVpnFeatureNatPortForwards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceLanVpnFeatureNatPortForwardsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceLanVpnFeatureNatPortForwards | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceLanVpnFeatureNatPortForwards | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // nat_pool_name - computed: true, optional: false, required: false
  public get natPoolName() {
    return this.getNumberAttribute('nat_pool_name');
  }

  // nat_pool_name_variable - computed: true, optional: false, required: false
  public get natPoolNameVariable() {
    return this.getStringAttribute('nat_pool_name_variable');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // protocol_variable - computed: true, optional: false, required: false
  public get protocolVariable() {
    return this.getStringAttribute('protocol_variable');
  }

  // source_ip - computed: true, optional: false, required: false
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }

  // source_ip_variable - computed: true, optional: false, required: false
  public get sourceIpVariable() {
    return this.getStringAttribute('source_ip_variable');
  }

  // source_port - computed: true, optional: false, required: false
  public get sourcePort() {
    return this.getNumberAttribute('source_port');
  }

  // source_port_variable - computed: true, optional: false, required: false
  public get sourcePortVariable() {
    return this.getStringAttribute('source_port_variable');
  }

  // translate_port - computed: true, optional: false, required: false
  public get translatePort() {
    return this.getNumberAttribute('translate_port');
  }

  // translate_port_variable - computed: true, optional: false, required: false
  public get translatePortVariable() {
    return this.getStringAttribute('translate_port_variable');
  }

  // translated_source_ip - computed: true, optional: false, required: false
  public get translatedSourceIp() {
    return this.getStringAttribute('translated_source_ip');
  }

  // translated_source_ip_variable - computed: true, optional: false, required: false
  public get translatedSourceIpVariable() {
    return this.getStringAttribute('translated_source_ip_variable');
  }
}

export class DataSdwanServiceLanVpnFeatureNatPortForwardsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceLanVpnFeatureNatPortForwardsOutputReference {
    return new DataSdwanServiceLanVpnFeatureNatPortForwardsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceLanVpnFeatureRouteLeakFromGlobalVpnsRedistributions {
}

export function dataSdwanServiceLanVpnFeatureRouteLeakFromGlobalVpnsRedistributionsToTerraform(struct?: DataSdwanServiceLanVpnFeatureRouteLeakFromGlobalVpnsRedistributions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceLanVpnFeatureRouteLeakFromGlobalVpnsRedistributionsToHclTerraform(struct?: DataSdwanServiceLanVpnFeatureRouteLeakFromGlobalVpnsRedistributions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceLanVpnFeatureRouteLeakFromGlobalVpnsRedistributionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceLanVpnFeatureRouteLeakFromGlobalVpnsRedistributions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceLanVpnFeatureRouteLeakFromGlobalVpnsRedistributions | undefined) {
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

  // redistribution_policy_id - computed: true, optional: false, required: false
  public get redistributionPolicyId() {
    return this.getStringAttribute('redistribution_policy_id');
  }
}

export class DataSdwanServiceLanVpnFeatureRouteLeakFromGlobalVpnsRedistributionsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceLanVpnFeatureRouteLeakFromGlobalVpnsRedistributionsOutputReference {
    return new DataSdwanServiceLanVpnFeatureRouteLeakFromGlobalVpnsRedistributionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceLanVpnFeatureRouteLeakFromGlobalVpns {
}

export function dataSdwanServiceLanVpnFeatureRouteLeakFromGlobalVpnsToTerraform(struct?: DataSdwanServiceLanVpnFeatureRouteLeakFromGlobalVpns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceLanVpnFeatureRouteLeakFromGlobalVpnsToHclTerraform(struct?: DataSdwanServiceLanVpnFeatureRouteLeakFromGlobalVpns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceLanVpnFeatureRouteLeakFromGlobalVpnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceLanVpnFeatureRouteLeakFromGlobalVpns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceLanVpnFeatureRouteLeakFromGlobalVpns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // redistributions - computed: true, optional: false, required: false
  private _redistributions = new DataSdwanServiceLanVpnFeatureRouteLeakFromGlobalVpnsRedistributionsList(this, "redistributions", false);
  public get redistributions() {
    return this._redistributions;
  }

  // route_policy_id - computed: true, optional: false, required: false
  public get routePolicyId() {
    return this.getStringAttribute('route_policy_id');
  }

  // route_protocol - computed: true, optional: false, required: false
  public get routeProtocol() {
    return this.getStringAttribute('route_protocol');
  }

  // route_protocol_variable - computed: true, optional: false, required: false
  public get routeProtocolVariable() {
    return this.getStringAttribute('route_protocol_variable');
  }
}

export class DataSdwanServiceLanVpnFeatureRouteLeakFromGlobalVpnsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceLanVpnFeatureRouteLeakFromGlobalVpnsOutputReference {
    return new DataSdwanServiceLanVpnFeatureRouteLeakFromGlobalVpnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceLanVpnFeatureRouteLeakFromOtherServicesRedistributions {
}

export function dataSdwanServiceLanVpnFeatureRouteLeakFromOtherServicesRedistributionsToTerraform(struct?: DataSdwanServiceLanVpnFeatureRouteLeakFromOtherServicesRedistributions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceLanVpnFeatureRouteLeakFromOtherServicesRedistributionsToHclTerraform(struct?: DataSdwanServiceLanVpnFeatureRouteLeakFromOtherServicesRedistributions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceLanVpnFeatureRouteLeakFromOtherServicesRedistributionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceLanVpnFeatureRouteLeakFromOtherServicesRedistributions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceLanVpnFeatureRouteLeakFromOtherServicesRedistributions | undefined) {
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

  // redistribution_policy_id - computed: true, optional: false, required: false
  public get redistributionPolicyId() {
    return this.getStringAttribute('redistribution_policy_id');
  }
}

export class DataSdwanServiceLanVpnFeatureRouteLeakFromOtherServicesRedistributionsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceLanVpnFeatureRouteLeakFromOtherServicesRedistributionsOutputReference {
    return new DataSdwanServiceLanVpnFeatureRouteLeakFromOtherServicesRedistributionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceLanVpnFeatureRouteLeakFromOtherServices {
}

export function dataSdwanServiceLanVpnFeatureRouteLeakFromOtherServicesToTerraform(struct?: DataSdwanServiceLanVpnFeatureRouteLeakFromOtherServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceLanVpnFeatureRouteLeakFromOtherServicesToHclTerraform(struct?: DataSdwanServiceLanVpnFeatureRouteLeakFromOtherServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceLanVpnFeatureRouteLeakFromOtherServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceLanVpnFeatureRouteLeakFromOtherServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceLanVpnFeatureRouteLeakFromOtherServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // redistributions - computed: true, optional: false, required: false
  private _redistributions = new DataSdwanServiceLanVpnFeatureRouteLeakFromOtherServicesRedistributionsList(this, "redistributions", false);
  public get redistributions() {
    return this._redistributions;
  }

  // route_policy_id - computed: true, optional: false, required: false
  public get routePolicyId() {
    return this.getStringAttribute('route_policy_id');
  }

  // route_protocol - computed: true, optional: false, required: false
  public get routeProtocol() {
    return this.getStringAttribute('route_protocol');
  }

  // route_protocol_variable - computed: true, optional: false, required: false
  public get routeProtocolVariable() {
    return this.getStringAttribute('route_protocol_variable');
  }

  // source_vpn - computed: true, optional: false, required: false
  public get sourceVpn() {
    return this.getNumberAttribute('source_vpn');
  }

  // source_vpn_variable - computed: true, optional: false, required: false
  public get sourceVpnVariable() {
    return this.getStringAttribute('source_vpn_variable');
  }
}

export class DataSdwanServiceLanVpnFeatureRouteLeakFromOtherServicesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceLanVpnFeatureRouteLeakFromOtherServicesOutputReference {
    return new DataSdwanServiceLanVpnFeatureRouteLeakFromOtherServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceLanVpnFeatureRouteLeakToGlobalVpnsRedistributions {
}

export function dataSdwanServiceLanVpnFeatureRouteLeakToGlobalVpnsRedistributionsToTerraform(struct?: DataSdwanServiceLanVpnFeatureRouteLeakToGlobalVpnsRedistributions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceLanVpnFeatureRouteLeakToGlobalVpnsRedistributionsToHclTerraform(struct?: DataSdwanServiceLanVpnFeatureRouteLeakToGlobalVpnsRedistributions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceLanVpnFeatureRouteLeakToGlobalVpnsRedistributionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceLanVpnFeatureRouteLeakToGlobalVpnsRedistributions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceLanVpnFeatureRouteLeakToGlobalVpnsRedistributions | undefined) {
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

  // redistribution_policy_id - computed: true, optional: false, required: false
  public get redistributionPolicyId() {
    return this.getStringAttribute('redistribution_policy_id');
  }
}

export class DataSdwanServiceLanVpnFeatureRouteLeakToGlobalVpnsRedistributionsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceLanVpnFeatureRouteLeakToGlobalVpnsRedistributionsOutputReference {
    return new DataSdwanServiceLanVpnFeatureRouteLeakToGlobalVpnsRedistributionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceLanVpnFeatureRouteLeakToGlobalVpns {
}

export function dataSdwanServiceLanVpnFeatureRouteLeakToGlobalVpnsToTerraform(struct?: DataSdwanServiceLanVpnFeatureRouteLeakToGlobalVpns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceLanVpnFeatureRouteLeakToGlobalVpnsToHclTerraform(struct?: DataSdwanServiceLanVpnFeatureRouteLeakToGlobalVpns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceLanVpnFeatureRouteLeakToGlobalVpnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceLanVpnFeatureRouteLeakToGlobalVpns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceLanVpnFeatureRouteLeakToGlobalVpns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // redistributions - computed: true, optional: false, required: false
  private _redistributions = new DataSdwanServiceLanVpnFeatureRouteLeakToGlobalVpnsRedistributionsList(this, "redistributions", false);
  public get redistributions() {
    return this._redistributions;
  }

  // route_policy_id - computed: true, optional: false, required: false
  public get routePolicyId() {
    return this.getStringAttribute('route_policy_id');
  }

  // route_protocol - computed: true, optional: false, required: false
  public get routeProtocol() {
    return this.getStringAttribute('route_protocol');
  }

  // route_protocol_variable - computed: true, optional: false, required: false
  public get routeProtocolVariable() {
    return this.getStringAttribute('route_protocol_variable');
  }
}

export class DataSdwanServiceLanVpnFeatureRouteLeakToGlobalVpnsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceLanVpnFeatureRouteLeakToGlobalVpnsOutputReference {
    return new DataSdwanServiceLanVpnFeatureRouteLeakToGlobalVpnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceLanVpnFeatureServiceRoutes {
}

export function dataSdwanServiceLanVpnFeatureServiceRoutesToTerraform(struct?: DataSdwanServiceLanVpnFeatureServiceRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceLanVpnFeatureServiceRoutesToHclTerraform(struct?: DataSdwanServiceLanVpnFeatureServiceRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceLanVpnFeatureServiceRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceLanVpnFeatureServiceRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceLanVpnFeatureServiceRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // network_address - computed: true, optional: false, required: false
  public get networkAddress() {
    return this.getStringAttribute('network_address');
  }

  // network_address_variable - computed: true, optional: false, required: false
  public get networkAddressVariable() {
    return this.getStringAttribute('network_address_variable');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }

  // service_variable - computed: true, optional: false, required: false
  public get serviceVariable() {
    return this.getStringAttribute('service_variable');
  }

  // subnet_mask - computed: true, optional: false, required: false
  public get subnetMask() {
    return this.getStringAttribute('subnet_mask');
  }

  // subnet_mask_variable - computed: true, optional: false, required: false
  public get subnetMaskVariable() {
    return this.getStringAttribute('subnet_mask_variable');
  }

  // vpn - computed: true, optional: false, required: false
  public get vpn() {
    return this.getNumberAttribute('vpn');
  }
}

export class DataSdwanServiceLanVpnFeatureServiceRoutesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceLanVpnFeatureServiceRoutesOutputReference {
    return new DataSdwanServiceLanVpnFeatureServiceRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceLanVpnFeatureServices {
}

export function dataSdwanServiceLanVpnFeatureServicesToTerraform(struct?: DataSdwanServiceLanVpnFeatureServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceLanVpnFeatureServicesToHclTerraform(struct?: DataSdwanServiceLanVpnFeatureServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceLanVpnFeatureServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceLanVpnFeatureServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceLanVpnFeatureServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4_addresses - computed: true, optional: false, required: false
  public get ipv4Addresses() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv4_addresses'));
  }

  // ipv4_addresses_variable - computed: true, optional: false, required: false
  public get ipv4AddressesVariable() {
    return this.getStringAttribute('ipv4_addresses_variable');
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // service_type_variable - computed: true, optional: false, required: false
  public get serviceTypeVariable() {
    return this.getStringAttribute('service_type_variable');
  }

  // tracking - computed: true, optional: false, required: false
  public get tracking() {
    return this.getBooleanAttribute('tracking');
  }

  // tracking_variable - computed: true, optional: false, required: false
  public get trackingVariable() {
    return this.getStringAttribute('tracking_variable');
  }
}

export class DataSdwanServiceLanVpnFeatureServicesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceLanVpnFeatureServicesOutputReference {
    return new DataSdwanServiceLanVpnFeatureServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceLanVpnFeatureStaticNats {
}

export function dataSdwanServiceLanVpnFeatureStaticNatsToTerraform(struct?: DataSdwanServiceLanVpnFeatureStaticNats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceLanVpnFeatureStaticNatsToHclTerraform(struct?: DataSdwanServiceLanVpnFeatureStaticNats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceLanVpnFeatureStaticNatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceLanVpnFeatureStaticNats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceLanVpnFeatureStaticNats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // nat_pool_name - computed: true, optional: false, required: false
  public get natPoolName() {
    return this.getNumberAttribute('nat_pool_name');
  }

  // nat_pool_name_variable - computed: true, optional: false, required: false
  public get natPoolNameVariable() {
    return this.getStringAttribute('nat_pool_name_variable');
  }

  // source_ip - computed: true, optional: false, required: false
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }

  // source_ip_variable - computed: true, optional: false, required: false
  public get sourceIpVariable() {
    return this.getStringAttribute('source_ip_variable');
  }

  // static_nat_direction - computed: true, optional: false, required: false
  public get staticNatDirection() {
    return this.getStringAttribute('static_nat_direction');
  }

  // static_nat_direction_variable - computed: true, optional: false, required: false
  public get staticNatDirectionVariable() {
    return this.getStringAttribute('static_nat_direction_variable');
  }

  // tracker_object_id - computed: true, optional: false, required: false
  public get trackerObjectId() {
    return this.getStringAttribute('tracker_object_id');
  }

  // translated_source_ip - computed: true, optional: false, required: false
  public get translatedSourceIp() {
    return this.getStringAttribute('translated_source_ip');
  }

  // translated_source_ip_variable - computed: true, optional: false, required: false
  public get translatedSourceIpVariable() {
    return this.getStringAttribute('translated_source_ip_variable');
  }
}

export class DataSdwanServiceLanVpnFeatureStaticNatsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceLanVpnFeatureStaticNatsOutputReference {
    return new DataSdwanServiceLanVpnFeatureStaticNatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_lan_vpn_feature sdwan_service_lan_vpn_feature}
*/
export class DataSdwanServiceLanVpnFeature extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_service_lan_vpn_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanServiceLanVpnFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanServiceLanVpnFeature to import
  * @param importFromId The id of the existing DataSdwanServiceLanVpnFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_lan_vpn_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanServiceLanVpnFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_service_lan_vpn_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_lan_vpn_feature sdwan_service_lan_vpn_feature} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanServiceLanVpnFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanServiceLanVpnFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_service_lan_vpn_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
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

  // advertise_omp_ipv4s - computed: true, optional: false, required: false
  private _advertiseOmpIpv4S = new DataSdwanServiceLanVpnFeatureAdvertiseOmpIpv4SList(this, "advertise_omp_ipv4s", false);
  public get advertiseOmpIpv4S() {
    return this._advertiseOmpIpv4S;
  }

  // advertise_omp_ipv6s - computed: true, optional: false, required: false
  private _advertiseOmpIpv6S = new DataSdwanServiceLanVpnFeatureAdvertiseOmpIpv6SList(this, "advertise_omp_ipv6s", false);
  public get advertiseOmpIpv6S() {
    return this._advertiseOmpIpv6S;
  }

  // config_description - computed: true, optional: false, required: false
  public get configDescription() {
    return this.getStringAttribute('config_description');
  }

  // config_description_variable - computed: true, optional: false, required: false
  public get configDescriptionVariable() {
    return this.getStringAttribute('config_description_variable');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enable_sdwan_remote_access - computed: true, optional: false, required: false
  public get enableSdwanRemoteAccess() {
    return this.getBooleanAttribute('enable_sdwan_remote_access');
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

  // gre_routes - computed: true, optional: false, required: false
  private _greRoutes = new DataSdwanServiceLanVpnFeatureGreRoutesList(this, "gre_routes", false);
  public get greRoutes() {
    return this._greRoutes;
  }

  // host_mappings - computed: true, optional: false, required: false
  private _hostMappings = new DataSdwanServiceLanVpnFeatureHostMappingsList(this, "host_mappings", false);
  public get hostMappings() {
    return this._hostMappings;
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

  // ipsec_routes - computed: true, optional: false, required: false
  private _ipsecRoutes = new DataSdwanServiceLanVpnFeatureIpsecRoutesList(this, "ipsec_routes", false);
  public get ipsecRoutes() {
    return this._ipsecRoutes;
  }

  // ipv4_export_route_targets - computed: true, optional: false, required: false
  private _ipv4ExportRouteTargets = new DataSdwanServiceLanVpnFeatureIpv4ExportRouteTargetsList(this, "ipv4_export_route_targets", false);
  public get ipv4ExportRouteTargets() {
    return this._ipv4ExportRouteTargets;
  }

  // ipv4_import_route_targets - computed: true, optional: false, required: false
  private _ipv4ImportRouteTargets = new DataSdwanServiceLanVpnFeatureIpv4ImportRouteTargetsList(this, "ipv4_import_route_targets", false);
  public get ipv4ImportRouteTargets() {
    return this._ipv4ImportRouteTargets;
  }

  // ipv4_static_routes - computed: true, optional: false, required: false
  private _ipv4StaticRoutes = new DataSdwanServiceLanVpnFeatureIpv4StaticRoutesList(this, "ipv4_static_routes", false);
  public get ipv4StaticRoutes() {
    return this._ipv4StaticRoutes;
  }

  // ipv6_export_route_targets - computed: true, optional: false, required: false
  private _ipv6ExportRouteTargets = new DataSdwanServiceLanVpnFeatureIpv6ExportRouteTargetsList(this, "ipv6_export_route_targets", false);
  public get ipv6ExportRouteTargets() {
    return this._ipv6ExportRouteTargets;
  }

  // ipv6_import_route_targets - computed: true, optional: false, required: false
  private _ipv6ImportRouteTargets = new DataSdwanServiceLanVpnFeatureIpv6ImportRouteTargetsList(this, "ipv6_import_route_targets", false);
  public get ipv6ImportRouteTargets() {
    return this._ipv6ImportRouteTargets;
  }

  // ipv6_static_routes - computed: true, optional: false, required: false
  private _ipv6StaticRoutes = new DataSdwanServiceLanVpnFeatureIpv6StaticRoutesList(this, "ipv6_static_routes", false);
  public get ipv6StaticRoutes() {
    return this._ipv6StaticRoutes;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nat_64_v4_pools - computed: true, optional: false, required: false
  private _nat64V4Pools = new DataSdwanServiceLanVpnFeatureNat64V4PoolsList(this, "nat_64_v4_pools", false);
  public get nat64V4Pools() {
    return this._nat64V4Pools;
  }

  // nat_pools - computed: true, optional: false, required: false
  private _natPools = new DataSdwanServiceLanVpnFeatureNatPoolsList(this, "nat_pools", false);
  public get natPools() {
    return this._natPools;
  }

  // nat_port_forwards - computed: true, optional: false, required: false
  private _natPortForwards = new DataSdwanServiceLanVpnFeatureNatPortForwardsList(this, "nat_port_forwards", false);
  public get natPortForwards() {
    return this._natPortForwards;
  }

  // omp_admin_distance_ipv4 - computed: true, optional: false, required: false
  public get ompAdminDistanceIpv4() {
    return this.getNumberAttribute('omp_admin_distance_ipv4');
  }

  // omp_admin_distance_ipv4_variable - computed: true, optional: false, required: false
  public get ompAdminDistanceIpv4Variable() {
    return this.getStringAttribute('omp_admin_distance_ipv4_variable');
  }

  // omp_admin_distance_ipv6 - computed: true, optional: false, required: false
  public get ompAdminDistanceIpv6() {
    return this.getNumberAttribute('omp_admin_distance_ipv6');
  }

  // omp_admin_distance_ipv6_variable - computed: true, optional: false, required: false
  public get ompAdminDistanceIpv6Variable() {
    return this.getStringAttribute('omp_admin_distance_ipv6_variable');
  }

  // primary_dns_address_ipv4 - computed: true, optional: false, required: false
  public get primaryDnsAddressIpv4() {
    return this.getStringAttribute('primary_dns_address_ipv4');
  }

  // primary_dns_address_ipv4_variable - computed: true, optional: false, required: false
  public get primaryDnsAddressIpv4Variable() {
    return this.getStringAttribute('primary_dns_address_ipv4_variable');
  }

  // primary_dns_address_ipv6 - computed: true, optional: false, required: false
  public get primaryDnsAddressIpv6() {
    return this.getStringAttribute('primary_dns_address_ipv6');
  }

  // primary_dns_address_ipv6_variable - computed: true, optional: false, required: false
  public get primaryDnsAddressIpv6Variable() {
    return this.getStringAttribute('primary_dns_address_ipv6_variable');
  }

  // route_leak_from_global_vpns - computed: true, optional: false, required: false
  private _routeLeakFromGlobalVpns = new DataSdwanServiceLanVpnFeatureRouteLeakFromGlobalVpnsList(this, "route_leak_from_global_vpns", false);
  public get routeLeakFromGlobalVpns() {
    return this._routeLeakFromGlobalVpns;
  }

  // route_leak_from_other_services - computed: true, optional: false, required: false
  private _routeLeakFromOtherServices = new DataSdwanServiceLanVpnFeatureRouteLeakFromOtherServicesList(this, "route_leak_from_other_services", false);
  public get routeLeakFromOtherServices() {
    return this._routeLeakFromOtherServices;
  }

  // route_leak_to_global_vpns - computed: true, optional: false, required: false
  private _routeLeakToGlobalVpns = new DataSdwanServiceLanVpnFeatureRouteLeakToGlobalVpnsList(this, "route_leak_to_global_vpns", false);
  public get routeLeakToGlobalVpns() {
    return this._routeLeakToGlobalVpns;
  }

  // secondary_dns_address_ipv4 - computed: true, optional: false, required: false
  public get secondaryDnsAddressIpv4() {
    return this.getStringAttribute('secondary_dns_address_ipv4');
  }

  // secondary_dns_address_ipv4_variable - computed: true, optional: false, required: false
  public get secondaryDnsAddressIpv4Variable() {
    return this.getStringAttribute('secondary_dns_address_ipv4_variable');
  }

  // secondary_dns_address_ipv6 - computed: true, optional: false, required: false
  public get secondaryDnsAddressIpv6() {
    return this.getStringAttribute('secondary_dns_address_ipv6');
  }

  // secondary_dns_address_ipv6_variable - computed: true, optional: false, required: false
  public get secondaryDnsAddressIpv6Variable() {
    return this.getStringAttribute('secondary_dns_address_ipv6_variable');
  }

  // service_routes - computed: true, optional: false, required: false
  private _serviceRoutes = new DataSdwanServiceLanVpnFeatureServiceRoutesList(this, "service_routes", false);
  public get serviceRoutes() {
    return this._serviceRoutes;
  }

  // services - computed: true, optional: false, required: false
  private _services = new DataSdwanServiceLanVpnFeatureServicesList(this, "services", false);
  public get services() {
    return this._services;
  }

  // static_nats - computed: true, optional: false, required: false
  private _staticNats = new DataSdwanServiceLanVpnFeatureStaticNatsList(this, "static_nats", false);
  public get staticNats() {
    return this._staticNats;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // vpn - computed: true, optional: false, required: false
  public get vpn() {
    return this.getNumberAttribute('vpn');
  }

  // vpn_variable - computed: true, optional: false, required: false
  public get vpnVariable() {
    return this.getStringAttribute('vpn_variable');
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
