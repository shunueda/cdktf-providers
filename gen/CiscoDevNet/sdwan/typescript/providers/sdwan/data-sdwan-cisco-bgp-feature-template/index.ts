// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_bgp_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanCiscoBgpFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_bgp_feature_template#id DataSdwanCiscoBgpFeatureTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_bgp_feature_template#name DataSdwanCiscoBgpFeatureTemplate#name}
  */
  readonly name?: string;
}
export interface DataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv4AggregateAddresses {
}

export function dataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv4AggregateAddressesToTerraform(struct?: DataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv4AggregateAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv4AggregateAddressesToHclTerraform(struct?: DataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv4AggregateAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv4AggregateAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv4AggregateAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv4AggregateAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // as_set_path - computed: true, optional: false, required: false
  public get asSetPath() {
    return this.getBooleanAttribute('as_set_path');
  }

  // as_set_path_variable - computed: true, optional: false, required: false
  public get asSetPathVariable() {
    return this.getStringAttribute('as_set_path_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // prefix_variable - computed: true, optional: false, required: false
  public get prefixVariable() {
    return this.getStringAttribute('prefix_variable');
  }

  // summary_only - computed: true, optional: false, required: false
  public get summaryOnly() {
    return this.getBooleanAttribute('summary_only');
  }

  // summary_only_variable - computed: true, optional: false, required: false
  public get summaryOnlyVariable() {
    return this.getStringAttribute('summary_only_variable');
  }
}

export class DataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv4AggregateAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv4AggregateAddressesOutputReference {
    return new DataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv4AggregateAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv4Networks {
}

export function dataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv4NetworksToTerraform(struct?: DataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv4Networks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv4NetworksToHclTerraform(struct?: DataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv4Networks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv4NetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv4Networks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv4Networks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
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

export class DataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv4NetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv4NetworksOutputReference {
    return new DataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv4NetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv6AggregateAddresses {
}

export function dataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv6AggregateAddressesToTerraform(struct?: DataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv6AggregateAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv6AggregateAddressesToHclTerraform(struct?: DataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv6AggregateAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv6AggregateAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv6AggregateAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv6AggregateAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // as_set_path - computed: true, optional: false, required: false
  public get asSetPath() {
    return this.getBooleanAttribute('as_set_path');
  }

  // as_set_path_variable - computed: true, optional: false, required: false
  public get asSetPathVariable() {
    return this.getStringAttribute('as_set_path_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // prefix_variable - computed: true, optional: false, required: false
  public get prefixVariable() {
    return this.getStringAttribute('prefix_variable');
  }

  // summary_only - computed: true, optional: false, required: false
  public get summaryOnly() {
    return this.getBooleanAttribute('summary_only');
  }

  // summary_only_variable - computed: true, optional: false, required: false
  public get summaryOnlyVariable() {
    return this.getStringAttribute('summary_only_variable');
  }
}

export class DataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv6AggregateAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv6AggregateAddressesOutputReference {
    return new DataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv6AggregateAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv6Networks {
}

export function dataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv6NetworksToTerraform(struct?: DataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv6Networks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv6NetworksToHclTerraform(struct?: DataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv6Networks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv6NetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv6Networks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv6Networks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
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

export class DataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv6NetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv6NetworksOutputReference {
    return new DataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv6NetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoBgpFeatureTemplateAddressFamiliesRedistributeRoutes {
}

export function dataSdwanCiscoBgpFeatureTemplateAddressFamiliesRedistributeRoutesToTerraform(struct?: DataSdwanCiscoBgpFeatureTemplateAddressFamiliesRedistributeRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoBgpFeatureTemplateAddressFamiliesRedistributeRoutesToHclTerraform(struct?: DataSdwanCiscoBgpFeatureTemplateAddressFamiliesRedistributeRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoBgpFeatureTemplateAddressFamiliesRedistributeRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoBgpFeatureTemplateAddressFamiliesRedistributeRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoBgpFeatureTemplateAddressFamiliesRedistributeRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // protocol_variable - computed: true, optional: false, required: false
  public get protocolVariable() {
    return this.getStringAttribute('protocol_variable');
  }

  // route_policy - computed: true, optional: false, required: false
  public get routePolicy() {
    return this.getStringAttribute('route_policy');
  }

  // route_policy_variable - computed: true, optional: false, required: false
  public get routePolicyVariable() {
    return this.getStringAttribute('route_policy_variable');
  }
}

export class DataSdwanCiscoBgpFeatureTemplateAddressFamiliesRedistributeRoutesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoBgpFeatureTemplateAddressFamiliesRedistributeRoutesOutputReference {
    return new DataSdwanCiscoBgpFeatureTemplateAddressFamiliesRedistributeRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoBgpFeatureTemplateAddressFamilies {
}

export function dataSdwanCiscoBgpFeatureTemplateAddressFamiliesToTerraform(struct?: DataSdwanCiscoBgpFeatureTemplateAddressFamilies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoBgpFeatureTemplateAddressFamiliesToHclTerraform(struct?: DataSdwanCiscoBgpFeatureTemplateAddressFamilies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoBgpFeatureTemplateAddressFamiliesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoBgpFeatureTemplateAddressFamilies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoBgpFeatureTemplateAddressFamilies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_information_originate - computed: true, optional: false, required: false
  public get defaultInformationOriginate() {
    return this.getBooleanAttribute('default_information_originate');
  }

  // default_information_originate_variable - computed: true, optional: false, required: false
  public get defaultInformationOriginateVariable() {
    return this.getStringAttribute('default_information_originate_variable');
  }

  // family_type - computed: true, optional: false, required: false
  public get familyType() {
    return this.getStringAttribute('family_type');
  }

  // ipv4_aggregate_addresses - computed: true, optional: false, required: false
  private _ipv4AggregateAddresses = new DataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv4AggregateAddressesList(this, "ipv4_aggregate_addresses", false);
  public get ipv4AggregateAddresses() {
    return this._ipv4AggregateAddresses;
  }

  // ipv4_networks - computed: true, optional: false, required: false
  private _ipv4Networks = new DataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv4NetworksList(this, "ipv4_networks", false);
  public get ipv4Networks() {
    return this._ipv4Networks;
  }

  // ipv6_aggregate_addresses - computed: true, optional: false, required: false
  private _ipv6AggregateAddresses = new DataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv6AggregateAddressesList(this, "ipv6_aggregate_addresses", false);
  public get ipv6AggregateAddresses() {
    return this._ipv6AggregateAddresses;
  }

  // ipv6_networks - computed: true, optional: false, required: false
  private _ipv6Networks = new DataSdwanCiscoBgpFeatureTemplateAddressFamiliesIpv6NetworksList(this, "ipv6_networks", false);
  public get ipv6Networks() {
    return this._ipv6Networks;
  }

  // maximum_paths - computed: true, optional: false, required: false
  public get maximumPaths() {
    return this.getNumberAttribute('maximum_paths');
  }

  // maximum_paths_variable - computed: true, optional: false, required: false
  public get maximumPathsVariable() {
    return this.getStringAttribute('maximum_paths_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // redistribute_routes - computed: true, optional: false, required: false
  private _redistributeRoutes = new DataSdwanCiscoBgpFeatureTemplateAddressFamiliesRedistributeRoutesList(this, "redistribute_routes", false);
  public get redistributeRoutes() {
    return this._redistributeRoutes;
  }

  // table_map_filter - computed: true, optional: false, required: false
  public get tableMapFilter() {
    return this.getBooleanAttribute('table_map_filter');
  }

  // table_map_filter_variable - computed: true, optional: false, required: false
  public get tableMapFilterVariable() {
    return this.getStringAttribute('table_map_filter_variable');
  }

  // table_map_policy - computed: true, optional: false, required: false
  public get tableMapPolicy() {
    return this.getStringAttribute('table_map_policy');
  }

  // table_map_policy_variable - computed: true, optional: false, required: false
  public get tableMapPolicyVariable() {
    return this.getStringAttribute('table_map_policy_variable');
  }
}

export class DataSdwanCiscoBgpFeatureTemplateAddressFamiliesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoBgpFeatureTemplateAddressFamiliesOutputReference {
    return new DataSdwanCiscoBgpFeatureTemplateAddressFamiliesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesRoutePolicies {
}

export function dataSdwanCiscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesRoutePoliciesToTerraform(struct?: DataSdwanCiscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesRoutePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesRoutePoliciesToHclTerraform(struct?: DataSdwanCiscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesRoutePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesRoutePoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesRoutePolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesRoutePolicies | undefined) {
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

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // policy_name_variable - computed: true, optional: false, required: false
  public get policyNameVariable() {
    return this.getStringAttribute('policy_name_variable');
  }
}

export class DataSdwanCiscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesRoutePoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesRoutePoliciesOutputReference {
    return new DataSdwanCiscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesRoutePoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoBgpFeatureTemplateIpv4NeighborsAddressFamilies {
}

export function dataSdwanCiscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesToTerraform(struct?: DataSdwanCiscoBgpFeatureTemplateIpv4NeighborsAddressFamilies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesToHclTerraform(struct?: DataSdwanCiscoBgpFeatureTemplateIpv4NeighborsAddressFamilies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoBgpFeatureTemplateIpv4NeighborsAddressFamilies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoBgpFeatureTemplateIpv4NeighborsAddressFamilies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // family_type - computed: true, optional: false, required: false
  public get familyType() {
    return this.getStringAttribute('family_type');
  }

  // maximum_prefixes - computed: true, optional: false, required: false
  public get maximumPrefixes() {
    return this.getNumberAttribute('maximum_prefixes');
  }

  // maximum_prefixes_restart - computed: true, optional: false, required: false
  public get maximumPrefixesRestart() {
    return this.getNumberAttribute('maximum_prefixes_restart');
  }

  // maximum_prefixes_restart_variable - computed: true, optional: false, required: false
  public get maximumPrefixesRestartVariable() {
    return this.getStringAttribute('maximum_prefixes_restart_variable');
  }

  // maximum_prefixes_threshold - computed: true, optional: false, required: false
  public get maximumPrefixesThreshold() {
    return this.getNumberAttribute('maximum_prefixes_threshold');
  }

  // maximum_prefixes_threshold_variable - computed: true, optional: false, required: false
  public get maximumPrefixesThresholdVariable() {
    return this.getStringAttribute('maximum_prefixes_threshold_variable');
  }

  // maximum_prefixes_variable - computed: true, optional: false, required: false
  public get maximumPrefixesVariable() {
    return this.getStringAttribute('maximum_prefixes_variable');
  }

  // maximum_prefixes_warning_only - computed: true, optional: false, required: false
  public get maximumPrefixesWarningOnly() {
    return this.getBooleanAttribute('maximum_prefixes_warning_only');
  }

  // maximum_prefixes_warning_only_variable - computed: true, optional: false, required: false
  public get maximumPrefixesWarningOnlyVariable() {
    return this.getStringAttribute('maximum_prefixes_warning_only_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // route_policies - computed: true, optional: false, required: false
  private _routePolicies = new DataSdwanCiscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesRoutePoliciesList(this, "route_policies", false);
  public get routePolicies() {
    return this._routePolicies;
  }
}

export class DataSdwanCiscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesOutputReference {
    return new DataSdwanCiscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoBgpFeatureTemplateIpv4Neighbors {
}

export function dataSdwanCiscoBgpFeatureTemplateIpv4NeighborsToTerraform(struct?: DataSdwanCiscoBgpFeatureTemplateIpv4Neighbors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoBgpFeatureTemplateIpv4NeighborsToHclTerraform(struct?: DataSdwanCiscoBgpFeatureTemplateIpv4Neighbors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoBgpFeatureTemplateIpv4NeighborsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoBgpFeatureTemplateIpv4Neighbors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoBgpFeatureTemplateIpv4Neighbors | undefined) {
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

  // address_families - computed: true, optional: false, required: false
  private _addressFamilies = new DataSdwanCiscoBgpFeatureTemplateIpv4NeighborsAddressFamiliesList(this, "address_families", false);
  public get addressFamilies() {
    return this._addressFamilies;
  }

  // address_variable - computed: true, optional: false, required: false
  public get addressVariable() {
    return this.getStringAttribute('address_variable');
  }

  // allow_as_in - computed: true, optional: false, required: false
  public get allowAsIn() {
    return this.getNumberAttribute('allow_as_in');
  }

  // allow_as_in_variable - computed: true, optional: false, required: false
  public get allowAsInVariable() {
    return this.getStringAttribute('allow_as_in_variable');
  }

  // as_override - computed: true, optional: false, required: false
  public get asOverride() {
    return this.getBooleanAttribute('as_override');
  }

  // as_override_variable - computed: true, optional: false, required: false
  public get asOverrideVariable() {
    return this.getStringAttribute('as_override_variable');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // description_variable - computed: true, optional: false, required: false
  public get descriptionVariable() {
    return this.getStringAttribute('description_variable');
  }

  // ebgp_multihop - computed: true, optional: false, required: false
  public get ebgpMultihop() {
    return this.getNumberAttribute('ebgp_multihop');
  }

  // ebgp_multihop_variable - computed: true, optional: false, required: false
  public get ebgpMultihopVariable() {
    return this.getStringAttribute('ebgp_multihop_variable');
  }

  // holdtime - computed: true, optional: false, required: false
  public get holdtime() {
    return this.getNumberAttribute('holdtime');
  }

  // holdtime_variable - computed: true, optional: false, required: false
  public get holdtimeVariable() {
    return this.getStringAttribute('holdtime_variable');
  }

  // keepalive - computed: true, optional: false, required: false
  public get keepalive() {
    return this.getNumberAttribute('keepalive');
  }

  // keepalive_variable - computed: true, optional: false, required: false
  public get keepaliveVariable() {
    return this.getStringAttribute('keepalive_variable');
  }

  // next_hop_self - computed: true, optional: false, required: false
  public get nextHopSelf() {
    return this.getBooleanAttribute('next_hop_self');
  }

  // next_hop_self_variable - computed: true, optional: false, required: false
  public get nextHopSelfVariable() {
    return this.getStringAttribute('next_hop_self_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // password_variable - computed: true, optional: false, required: false
  public get passwordVariable() {
    return this.getStringAttribute('password_variable');
  }

  // remote_as - computed: true, optional: false, required: false
  public get remoteAs() {
    return this.getStringAttribute('remote_as');
  }

  // remote_as_variable - computed: true, optional: false, required: false
  public get remoteAsVariable() {
    return this.getStringAttribute('remote_as_variable');
  }

  // send_community - computed: true, optional: false, required: false
  public get sendCommunity() {
    return this.getBooleanAttribute('send_community');
  }

  // send_community_variable - computed: true, optional: false, required: false
  public get sendCommunityVariable() {
    return this.getStringAttribute('send_community_variable');
  }

  // send_ext_community - computed: true, optional: false, required: false
  public get sendExtCommunity() {
    return this.getBooleanAttribute('send_ext_community');
  }

  // send_ext_community_variable - computed: true, optional: false, required: false
  public get sendExtCommunityVariable() {
    return this.getStringAttribute('send_ext_community_variable');
  }

  // send_label - computed: true, optional: false, required: false
  public get sendLabel() {
    return this.getBooleanAttribute('send_label');
  }

  // send_label_explicit - computed: true, optional: false, required: false
  public get sendLabelExplicit() {
    return this.getBooleanAttribute('send_label_explicit');
  }

  // send_label_explicit_variable - computed: true, optional: false, required: false
  public get sendLabelExplicitVariable() {
    return this.getStringAttribute('send_label_explicit_variable');
  }

  // send_label_variable - computed: true, optional: false, required: false
  public get sendLabelVariable() {
    return this.getStringAttribute('send_label_variable');
  }

  // shutdown - computed: true, optional: false, required: false
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }

  // shutdown_variable - computed: true, optional: false, required: false
  public get shutdownVariable() {
    return this.getStringAttribute('shutdown_variable');
  }

  // source_interface - computed: true, optional: false, required: false
  public get sourceInterface() {
    return this.getStringAttribute('source_interface');
  }

  // source_interface_variable - computed: true, optional: false, required: false
  public get sourceInterfaceVariable() {
    return this.getStringAttribute('source_interface_variable');
  }
}

export class DataSdwanCiscoBgpFeatureTemplateIpv4NeighborsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoBgpFeatureTemplateIpv4NeighborsOutputReference {
    return new DataSdwanCiscoBgpFeatureTemplateIpv4NeighborsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoBgpFeatureTemplateIpv4RouteTargetsExport {
}

export function dataSdwanCiscoBgpFeatureTemplateIpv4RouteTargetsExportToTerraform(struct?: DataSdwanCiscoBgpFeatureTemplateIpv4RouteTargetsExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoBgpFeatureTemplateIpv4RouteTargetsExportToHclTerraform(struct?: DataSdwanCiscoBgpFeatureTemplateIpv4RouteTargetsExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoBgpFeatureTemplateIpv4RouteTargetsExportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoBgpFeatureTemplateIpv4RouteTargetsExport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoBgpFeatureTemplateIpv4RouteTargetsExport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // asn_ip - computed: true, optional: false, required: false
  public get asnIp() {
    return this.getStringAttribute('asn_ip');
  }

  // asn_ip_variable - computed: true, optional: false, required: false
  public get asnIpVariable() {
    return this.getStringAttribute('asn_ip_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}

export class DataSdwanCiscoBgpFeatureTemplateIpv4RouteTargetsExportList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoBgpFeatureTemplateIpv4RouteTargetsExportOutputReference {
    return new DataSdwanCiscoBgpFeatureTemplateIpv4RouteTargetsExportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoBgpFeatureTemplateIpv4RouteTargetsImport {
}

export function dataSdwanCiscoBgpFeatureTemplateIpv4RouteTargetsImportToTerraform(struct?: DataSdwanCiscoBgpFeatureTemplateIpv4RouteTargetsImport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoBgpFeatureTemplateIpv4RouteTargetsImportToHclTerraform(struct?: DataSdwanCiscoBgpFeatureTemplateIpv4RouteTargetsImport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoBgpFeatureTemplateIpv4RouteTargetsImportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoBgpFeatureTemplateIpv4RouteTargetsImport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoBgpFeatureTemplateIpv4RouteTargetsImport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // asn_ip - computed: true, optional: false, required: false
  public get asnIp() {
    return this.getStringAttribute('asn_ip');
  }

  // asn_ip_variable - computed: true, optional: false, required: false
  public get asnIpVariable() {
    return this.getStringAttribute('asn_ip_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}

export class DataSdwanCiscoBgpFeatureTemplateIpv4RouteTargetsImportList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoBgpFeatureTemplateIpv4RouteTargetsImportOutputReference {
    return new DataSdwanCiscoBgpFeatureTemplateIpv4RouteTargetsImportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoBgpFeatureTemplateIpv4RouteTargets {
}

export function dataSdwanCiscoBgpFeatureTemplateIpv4RouteTargetsToTerraform(struct?: DataSdwanCiscoBgpFeatureTemplateIpv4RouteTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoBgpFeatureTemplateIpv4RouteTargetsToHclTerraform(struct?: DataSdwanCiscoBgpFeatureTemplateIpv4RouteTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoBgpFeatureTemplateIpv4RouteTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoBgpFeatureTemplateIpv4RouteTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoBgpFeatureTemplateIpv4RouteTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // export - computed: true, optional: false, required: false
  private _export = new DataSdwanCiscoBgpFeatureTemplateIpv4RouteTargetsExportList(this, "export", false);
  public get export() {
    return this._export;
  }

  // import - computed: true, optional: false, required: false
  private _import = new DataSdwanCiscoBgpFeatureTemplateIpv4RouteTargetsImportList(this, "import", false);
  public get import() {
    return this._import;
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // vpn_id - computed: true, optional: false, required: false
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }

  // vpn_id_variable - computed: true, optional: false, required: false
  public get vpnIdVariable() {
    return this.getStringAttribute('vpn_id_variable');
  }
}

export class DataSdwanCiscoBgpFeatureTemplateIpv4RouteTargetsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoBgpFeatureTemplateIpv4RouteTargetsOutputReference {
    return new DataSdwanCiscoBgpFeatureTemplateIpv4RouteTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesRoutePolicies {
}

export function dataSdwanCiscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesRoutePoliciesToTerraform(struct?: DataSdwanCiscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesRoutePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesRoutePoliciesToHclTerraform(struct?: DataSdwanCiscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesRoutePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesRoutePoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesRoutePolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesRoutePolicies | undefined) {
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

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // policy_name_variable - computed: true, optional: false, required: false
  public get policyNameVariable() {
    return this.getStringAttribute('policy_name_variable');
  }
}

export class DataSdwanCiscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesRoutePoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesRoutePoliciesOutputReference {
    return new DataSdwanCiscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesRoutePoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoBgpFeatureTemplateIpv6NeighborsAddressFamilies {
}

export function dataSdwanCiscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesToTerraform(struct?: DataSdwanCiscoBgpFeatureTemplateIpv6NeighborsAddressFamilies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesToHclTerraform(struct?: DataSdwanCiscoBgpFeatureTemplateIpv6NeighborsAddressFamilies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoBgpFeatureTemplateIpv6NeighborsAddressFamilies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoBgpFeatureTemplateIpv6NeighborsAddressFamilies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // family_type - computed: true, optional: false, required: false
  public get familyType() {
    return this.getStringAttribute('family_type');
  }

  // maximum_prefixes - computed: true, optional: false, required: false
  public get maximumPrefixes() {
    return this.getNumberAttribute('maximum_prefixes');
  }

  // maximum_prefixes_restart - computed: true, optional: false, required: false
  public get maximumPrefixesRestart() {
    return this.getNumberAttribute('maximum_prefixes_restart');
  }

  // maximum_prefixes_restart_variable - computed: true, optional: false, required: false
  public get maximumPrefixesRestartVariable() {
    return this.getStringAttribute('maximum_prefixes_restart_variable');
  }

  // maximum_prefixes_threshold - computed: true, optional: false, required: false
  public get maximumPrefixesThreshold() {
    return this.getNumberAttribute('maximum_prefixes_threshold');
  }

  // maximum_prefixes_threshold_variable - computed: true, optional: false, required: false
  public get maximumPrefixesThresholdVariable() {
    return this.getStringAttribute('maximum_prefixes_threshold_variable');
  }

  // maximum_prefixes_variable - computed: true, optional: false, required: false
  public get maximumPrefixesVariable() {
    return this.getStringAttribute('maximum_prefixes_variable');
  }

  // maximum_prefixes_warning_only - computed: true, optional: false, required: false
  public get maximumPrefixesWarningOnly() {
    return this.getBooleanAttribute('maximum_prefixes_warning_only');
  }

  // maximum_prefixes_warning_only_variable - computed: true, optional: false, required: false
  public get maximumPrefixesWarningOnlyVariable() {
    return this.getStringAttribute('maximum_prefixes_warning_only_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // route_policies - computed: true, optional: false, required: false
  private _routePolicies = new DataSdwanCiscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesRoutePoliciesList(this, "route_policies", false);
  public get routePolicies() {
    return this._routePolicies;
  }
}

export class DataSdwanCiscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesOutputReference {
    return new DataSdwanCiscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoBgpFeatureTemplateIpv6Neighbors {
}

export function dataSdwanCiscoBgpFeatureTemplateIpv6NeighborsToTerraform(struct?: DataSdwanCiscoBgpFeatureTemplateIpv6Neighbors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoBgpFeatureTemplateIpv6NeighborsToHclTerraform(struct?: DataSdwanCiscoBgpFeatureTemplateIpv6Neighbors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoBgpFeatureTemplateIpv6NeighborsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoBgpFeatureTemplateIpv6Neighbors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoBgpFeatureTemplateIpv6Neighbors | undefined) {
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

  // address_families - computed: true, optional: false, required: false
  private _addressFamilies = new DataSdwanCiscoBgpFeatureTemplateIpv6NeighborsAddressFamiliesList(this, "address_families", false);
  public get addressFamilies() {
    return this._addressFamilies;
  }

  // address_variable - computed: true, optional: false, required: false
  public get addressVariable() {
    return this.getStringAttribute('address_variable');
  }

  // allow_as_in - computed: true, optional: false, required: false
  public get allowAsIn() {
    return this.getNumberAttribute('allow_as_in');
  }

  // allow_as_in_variable - computed: true, optional: false, required: false
  public get allowAsInVariable() {
    return this.getStringAttribute('allow_as_in_variable');
  }

  // as_override - computed: true, optional: false, required: false
  public get asOverride() {
    return this.getBooleanAttribute('as_override');
  }

  // as_override_variable - computed: true, optional: false, required: false
  public get asOverrideVariable() {
    return this.getStringAttribute('as_override_variable');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // description_variable - computed: true, optional: false, required: false
  public get descriptionVariable() {
    return this.getStringAttribute('description_variable');
  }

  // ebgp_multihop - computed: true, optional: false, required: false
  public get ebgpMultihop() {
    return this.getNumberAttribute('ebgp_multihop');
  }

  // ebgp_multihop_variable - computed: true, optional: false, required: false
  public get ebgpMultihopVariable() {
    return this.getStringAttribute('ebgp_multihop_variable');
  }

  // holdtime - computed: true, optional: false, required: false
  public get holdtime() {
    return this.getNumberAttribute('holdtime');
  }

  // holdtime_variable - computed: true, optional: false, required: false
  public get holdtimeVariable() {
    return this.getStringAttribute('holdtime_variable');
  }

  // keepalive - computed: true, optional: false, required: false
  public get keepalive() {
    return this.getNumberAttribute('keepalive');
  }

  // keepalive_variable - computed: true, optional: false, required: false
  public get keepaliveVariable() {
    return this.getStringAttribute('keepalive_variable');
  }

  // next_hop_self - computed: true, optional: false, required: false
  public get nextHopSelf() {
    return this.getBooleanAttribute('next_hop_self');
  }

  // next_hop_self_variable - computed: true, optional: false, required: false
  public get nextHopSelfVariable() {
    return this.getStringAttribute('next_hop_self_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // password_variable - computed: true, optional: false, required: false
  public get passwordVariable() {
    return this.getStringAttribute('password_variable');
  }

  // remote_as - computed: true, optional: false, required: false
  public get remoteAs() {
    return this.getStringAttribute('remote_as');
  }

  // remote_as_variable - computed: true, optional: false, required: false
  public get remoteAsVariable() {
    return this.getStringAttribute('remote_as_variable');
  }

  // send_community - computed: true, optional: false, required: false
  public get sendCommunity() {
    return this.getBooleanAttribute('send_community');
  }

  // send_community_variable - computed: true, optional: false, required: false
  public get sendCommunityVariable() {
    return this.getStringAttribute('send_community_variable');
  }

  // send_ext_community - computed: true, optional: false, required: false
  public get sendExtCommunity() {
    return this.getBooleanAttribute('send_ext_community');
  }

  // send_ext_community_variable - computed: true, optional: false, required: false
  public get sendExtCommunityVariable() {
    return this.getStringAttribute('send_ext_community_variable');
  }

  // send_label - computed: true, optional: false, required: false
  public get sendLabel() {
    return this.getBooleanAttribute('send_label');
  }

  // send_label_explicit - computed: true, optional: false, required: false
  public get sendLabelExplicit() {
    return this.getBooleanAttribute('send_label_explicit');
  }

  // send_label_explicit_variable - computed: true, optional: false, required: false
  public get sendLabelExplicitVariable() {
    return this.getStringAttribute('send_label_explicit_variable');
  }

  // send_label_variable - computed: true, optional: false, required: false
  public get sendLabelVariable() {
    return this.getStringAttribute('send_label_variable');
  }

  // shutdown - computed: true, optional: false, required: false
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }

  // shutdown_variable - computed: true, optional: false, required: false
  public get shutdownVariable() {
    return this.getStringAttribute('shutdown_variable');
  }

  // source_interface - computed: true, optional: false, required: false
  public get sourceInterface() {
    return this.getStringAttribute('source_interface');
  }

  // source_interface_variable - computed: true, optional: false, required: false
  public get sourceInterfaceVariable() {
    return this.getStringAttribute('source_interface_variable');
  }
}

export class DataSdwanCiscoBgpFeatureTemplateIpv6NeighborsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoBgpFeatureTemplateIpv6NeighborsOutputReference {
    return new DataSdwanCiscoBgpFeatureTemplateIpv6NeighborsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoBgpFeatureTemplateIpv6RouteTargetsExport {
}

export function dataSdwanCiscoBgpFeatureTemplateIpv6RouteTargetsExportToTerraform(struct?: DataSdwanCiscoBgpFeatureTemplateIpv6RouteTargetsExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoBgpFeatureTemplateIpv6RouteTargetsExportToHclTerraform(struct?: DataSdwanCiscoBgpFeatureTemplateIpv6RouteTargetsExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoBgpFeatureTemplateIpv6RouteTargetsExportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoBgpFeatureTemplateIpv6RouteTargetsExport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoBgpFeatureTemplateIpv6RouteTargetsExport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // asn_ip - computed: true, optional: false, required: false
  public get asnIp() {
    return this.getStringAttribute('asn_ip');
  }

  // asn_ip_variable - computed: true, optional: false, required: false
  public get asnIpVariable() {
    return this.getStringAttribute('asn_ip_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}

export class DataSdwanCiscoBgpFeatureTemplateIpv6RouteTargetsExportList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoBgpFeatureTemplateIpv6RouteTargetsExportOutputReference {
    return new DataSdwanCiscoBgpFeatureTemplateIpv6RouteTargetsExportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoBgpFeatureTemplateIpv6RouteTargetsImport {
}

export function dataSdwanCiscoBgpFeatureTemplateIpv6RouteTargetsImportToTerraform(struct?: DataSdwanCiscoBgpFeatureTemplateIpv6RouteTargetsImport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoBgpFeatureTemplateIpv6RouteTargetsImportToHclTerraform(struct?: DataSdwanCiscoBgpFeatureTemplateIpv6RouteTargetsImport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoBgpFeatureTemplateIpv6RouteTargetsImportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoBgpFeatureTemplateIpv6RouteTargetsImport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoBgpFeatureTemplateIpv6RouteTargetsImport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // asn_ip - computed: true, optional: false, required: false
  public get asnIp() {
    return this.getStringAttribute('asn_ip');
  }

  // asn_ip_variable - computed: true, optional: false, required: false
  public get asnIpVariable() {
    return this.getStringAttribute('asn_ip_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}

export class DataSdwanCiscoBgpFeatureTemplateIpv6RouteTargetsImportList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoBgpFeatureTemplateIpv6RouteTargetsImportOutputReference {
    return new DataSdwanCiscoBgpFeatureTemplateIpv6RouteTargetsImportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoBgpFeatureTemplateIpv6RouteTargets {
}

export function dataSdwanCiscoBgpFeatureTemplateIpv6RouteTargetsToTerraform(struct?: DataSdwanCiscoBgpFeatureTemplateIpv6RouteTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoBgpFeatureTemplateIpv6RouteTargetsToHclTerraform(struct?: DataSdwanCiscoBgpFeatureTemplateIpv6RouteTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoBgpFeatureTemplateIpv6RouteTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoBgpFeatureTemplateIpv6RouteTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoBgpFeatureTemplateIpv6RouteTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // export - computed: true, optional: false, required: false
  private _export = new DataSdwanCiscoBgpFeatureTemplateIpv6RouteTargetsExportList(this, "export", false);
  public get export() {
    return this._export;
  }

  // import - computed: true, optional: false, required: false
  private _import = new DataSdwanCiscoBgpFeatureTemplateIpv6RouteTargetsImportList(this, "import", false);
  public get import() {
    return this._import;
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // vpn_id - computed: true, optional: false, required: false
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }

  // vpn_id_variable - computed: true, optional: false, required: false
  public get vpnIdVariable() {
    return this.getStringAttribute('vpn_id_variable');
  }
}

export class DataSdwanCiscoBgpFeatureTemplateIpv6RouteTargetsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoBgpFeatureTemplateIpv6RouteTargetsOutputReference {
    return new DataSdwanCiscoBgpFeatureTemplateIpv6RouteTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoBgpFeatureTemplateMplsInterfaces {
}

export function dataSdwanCiscoBgpFeatureTemplateMplsInterfacesToTerraform(struct?: DataSdwanCiscoBgpFeatureTemplateMplsInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoBgpFeatureTemplateMplsInterfacesToHclTerraform(struct?: DataSdwanCiscoBgpFeatureTemplateMplsInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoBgpFeatureTemplateMplsInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoBgpFeatureTemplateMplsInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoBgpFeatureTemplateMplsInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }

  // interface_name_variable - computed: true, optional: false, required: false
  public get interfaceNameVariable() {
    return this.getStringAttribute('interface_name_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}

export class DataSdwanCiscoBgpFeatureTemplateMplsInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoBgpFeatureTemplateMplsInterfacesOutputReference {
    return new DataSdwanCiscoBgpFeatureTemplateMplsInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_bgp_feature_template sdwan_cisco_bgp_feature_template}
*/
export class DataSdwanCiscoBgpFeatureTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cisco_bgp_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanCiscoBgpFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanCiscoBgpFeatureTemplate to import
  * @param importFromId The id of the existing DataSdwanCiscoBgpFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_bgp_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanCiscoBgpFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cisco_bgp_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_bgp_feature_template sdwan_cisco_bgp_feature_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanCiscoBgpFeatureTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSdwanCiscoBgpFeatureTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cisco_bgp_feature_template',
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
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_families - computed: true, optional: false, required: false
  private _addressFamilies = new DataSdwanCiscoBgpFeatureTemplateAddressFamiliesList(this, "address_families", false);
  public get addressFamilies() {
    return this._addressFamilies;
  }

  // always_compare_med - computed: true, optional: false, required: false
  public get alwaysCompareMed() {
    return this.getBooleanAttribute('always_compare_med');
  }

  // always_compare_med_variable - computed: true, optional: false, required: false
  public get alwaysCompareMedVariable() {
    return this.getStringAttribute('always_compare_med_variable');
  }

  // as_number - computed: true, optional: false, required: false
  public get asNumber() {
    return this.getStringAttribute('as_number');
  }

  // as_number_variable - computed: true, optional: false, required: false
  public get asNumberVariable() {
    return this.getStringAttribute('as_number_variable');
  }

  // compare_router_id - computed: true, optional: false, required: false
  public get compareRouterId() {
    return this.getBooleanAttribute('compare_router_id');
  }

  // compare_router_id_variable - computed: true, optional: false, required: false
  public get compareRouterIdVariable() {
    return this.getStringAttribute('compare_router_id_variable');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // deterministic_med - computed: true, optional: false, required: false
  public get deterministicMed() {
    return this.getBooleanAttribute('deterministic_med');
  }

  // deterministic_med_variable - computed: true, optional: false, required: false
  public get deterministicMedVariable() {
    return this.getStringAttribute('deterministic_med_variable');
  }

  // device_types - computed: true, optional: false, required: false
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
  }

  // distance_external - computed: true, optional: false, required: false
  public get distanceExternal() {
    return this.getNumberAttribute('distance_external');
  }

  // distance_external_variable - computed: true, optional: false, required: false
  public get distanceExternalVariable() {
    return this.getStringAttribute('distance_external_variable');
  }

  // distance_internal - computed: true, optional: false, required: false
  public get distanceInternal() {
    return this.getNumberAttribute('distance_internal');
  }

  // distance_internal_variable - computed: true, optional: false, required: false
  public get distanceInternalVariable() {
    return this.getStringAttribute('distance_internal_variable');
  }

  // distance_local - computed: true, optional: false, required: false
  public get distanceLocal() {
    return this.getNumberAttribute('distance_local');
  }

  // distance_local_variable - computed: true, optional: false, required: false
  public get distanceLocalVariable() {
    return this.getStringAttribute('distance_local_variable');
  }

  // holdtime - computed: true, optional: false, required: false
  public get holdtime() {
    return this.getNumberAttribute('holdtime');
  }

  // holdtime_variable - computed: true, optional: false, required: false
  public get holdtimeVariable() {
    return this.getStringAttribute('holdtime_variable');
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

  // ipv4_neighbors - computed: true, optional: false, required: false
  private _ipv4Neighbors = new DataSdwanCiscoBgpFeatureTemplateIpv4NeighborsList(this, "ipv4_neighbors", false);
  public get ipv4Neighbors() {
    return this._ipv4Neighbors;
  }

  // ipv4_route_targets - computed: true, optional: false, required: false
  private _ipv4RouteTargets = new DataSdwanCiscoBgpFeatureTemplateIpv4RouteTargetsList(this, "ipv4_route_targets", false);
  public get ipv4RouteTargets() {
    return this._ipv4RouteTargets;
  }

  // ipv6_neighbors - computed: true, optional: false, required: false
  private _ipv6Neighbors = new DataSdwanCiscoBgpFeatureTemplateIpv6NeighborsList(this, "ipv6_neighbors", false);
  public get ipv6Neighbors() {
    return this._ipv6Neighbors;
  }

  // ipv6_route_targets - computed: true, optional: false, required: false
  private _ipv6RouteTargets = new DataSdwanCiscoBgpFeatureTemplateIpv6RouteTargetsList(this, "ipv6_route_targets", false);
  public get ipv6RouteTargets() {
    return this._ipv6RouteTargets;
  }

  // keepalive - computed: true, optional: false, required: false
  public get keepalive() {
    return this.getNumberAttribute('keepalive');
  }

  // keepalive_variable - computed: true, optional: false, required: false
  public get keepaliveVariable() {
    return this.getStringAttribute('keepalive_variable');
  }

  // missing_med_worst - computed: true, optional: false, required: false
  public get missingMedWorst() {
    return this.getBooleanAttribute('missing_med_worst');
  }

  // missing_med_worst_variable - computed: true, optional: false, required: false
  public get missingMedWorstVariable() {
    return this.getStringAttribute('missing_med_worst_variable');
  }

  // mpls_interfaces - computed: true, optional: false, required: false
  private _mplsInterfaces = new DataSdwanCiscoBgpFeatureTemplateMplsInterfacesList(this, "mpls_interfaces", false);
  public get mplsInterfaces() {
    return this._mplsInterfaces;
  }

  // multipath_relax - computed: true, optional: false, required: false
  public get multipathRelax() {
    return this.getBooleanAttribute('multipath_relax');
  }

  // multipath_relax_variable - computed: true, optional: false, required: false
  public get multipathRelaxVariable() {
    return this.getStringAttribute('multipath_relax_variable');
  }

  // name - computed: true, optional: true, required: false
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

  // propagate_aspath - computed: true, optional: false, required: false
  public get propagateAspath() {
    return this.getBooleanAttribute('propagate_aspath');
  }

  // propagate_aspath_variable - computed: true, optional: false, required: false
  public get propagateAspathVariable() {
    return this.getStringAttribute('propagate_aspath_variable');
  }

  // propagate_community - computed: true, optional: false, required: false
  public get propagateCommunity() {
    return this.getBooleanAttribute('propagate_community');
  }

  // propagate_community_variable - computed: true, optional: false, required: false
  public get propagateCommunityVariable() {
    return this.getStringAttribute('propagate_community_variable');
  }

  // router_id - computed: true, optional: false, required: false
  public get routerId() {
    return this.getStringAttribute('router_id');
  }

  // router_id_variable - computed: true, optional: false, required: false
  public get routerIdVariable() {
    return this.getStringAttribute('router_id_variable');
  }

  // shutdown - computed: true, optional: false, required: false
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }

  // shutdown_variable - computed: true, optional: false, required: false
  public get shutdownVariable() {
    return this.getStringAttribute('shutdown_variable');
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
