// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_bgp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiosRouterBgpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_bgp#id DataFortiosRouterBgp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_bgp#vdomparam DataFortiosRouterBgp#vdomparam}
  */
  readonly vdomparam?: string;
}
export interface DataFortiosRouterBgpAdminDistance {
}

export function dataFortiosRouterBgpAdminDistanceToTerraform(struct?: DataFortiosRouterBgpAdminDistance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterBgpAdminDistanceToHclTerraform(struct?: DataFortiosRouterBgpAdminDistance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterBgpAdminDistanceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterBgpAdminDistance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterBgpAdminDistance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // distance - computed: true, optional: false, required: false
  public get distance() {
    return this.getNumberAttribute('distance');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // neighbour_prefix - computed: true, optional: false, required: false
  public get neighbourPrefix() {
    return this.getStringAttribute('neighbour_prefix');
  }

  // route_list - computed: true, optional: false, required: false
  public get routeList() {
    return this.getStringAttribute('route_list');
  }
}

export class DataFortiosRouterBgpAdminDistanceList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterBgpAdminDistanceOutputReference {
    return new DataFortiosRouterBgpAdminDistanceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterBgpAggregateAddress {
}

export function dataFortiosRouterBgpAggregateAddressToTerraform(struct?: DataFortiosRouterBgpAggregateAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterBgpAggregateAddressToHclTerraform(struct?: DataFortiosRouterBgpAggregateAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterBgpAggregateAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterBgpAggregateAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterBgpAggregateAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // as_set - computed: true, optional: false, required: false
  public get asSet() {
    return this.getStringAttribute('as_set');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // summary_only - computed: true, optional: false, required: false
  public get summaryOnly() {
    return this.getStringAttribute('summary_only');
  }
}

export class DataFortiosRouterBgpAggregateAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterBgpAggregateAddressOutputReference {
    return new DataFortiosRouterBgpAggregateAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterBgpAggregateAddress6 {
}

export function dataFortiosRouterBgpAggregateAddress6ToTerraform(struct?: DataFortiosRouterBgpAggregateAddress6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterBgpAggregateAddress6ToHclTerraform(struct?: DataFortiosRouterBgpAggregateAddress6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterBgpAggregateAddress6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterBgpAggregateAddress6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterBgpAggregateAddress6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // as_set - computed: true, optional: false, required: false
  public get asSet() {
    return this.getStringAttribute('as_set');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // prefix6 - computed: true, optional: false, required: false
  public get prefix6() {
    return this.getStringAttribute('prefix6');
  }

  // summary_only - computed: true, optional: false, required: false
  public get summaryOnly() {
    return this.getStringAttribute('summary_only');
  }
}

export class DataFortiosRouterBgpAggregateAddress6List extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterBgpAggregateAddress6OutputReference {
    return new DataFortiosRouterBgpAggregateAddress6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterBgpConfederationPeers {
}

export function dataFortiosRouterBgpConfederationPeersToTerraform(struct?: DataFortiosRouterBgpConfederationPeers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterBgpConfederationPeersToHclTerraform(struct?: DataFortiosRouterBgpConfederationPeers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterBgpConfederationPeersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterBgpConfederationPeers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterBgpConfederationPeers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // peer - computed: true, optional: false, required: false
  public get peer() {
    return this.getStringAttribute('peer');
  }
}

export class DataFortiosRouterBgpConfederationPeersList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterBgpConfederationPeersOutputReference {
    return new DataFortiosRouterBgpConfederationPeersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterBgpNeighborConditionalAdvertise {
}

export function dataFortiosRouterBgpNeighborConditionalAdvertiseToTerraform(struct?: DataFortiosRouterBgpNeighborConditionalAdvertise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterBgpNeighborConditionalAdvertiseToHclTerraform(struct?: DataFortiosRouterBgpNeighborConditionalAdvertise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterBgpNeighborConditionalAdvertiseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterBgpNeighborConditionalAdvertise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterBgpNeighborConditionalAdvertise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise_routemap - computed: true, optional: false, required: false
  public get advertiseRoutemap() {
    return this.getStringAttribute('advertise_routemap');
  }

  // condition_routemap - computed: true, optional: false, required: false
  public get conditionRoutemap() {
    return this.getStringAttribute('condition_routemap');
  }

  // condition_type - computed: true, optional: false, required: false
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }
}

export class DataFortiosRouterBgpNeighborConditionalAdvertiseList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterBgpNeighborConditionalAdvertiseOutputReference {
    return new DataFortiosRouterBgpNeighborConditionalAdvertiseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterBgpNeighborConditionalAdvertise6 {
}

export function dataFortiosRouterBgpNeighborConditionalAdvertise6ToTerraform(struct?: DataFortiosRouterBgpNeighborConditionalAdvertise6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterBgpNeighborConditionalAdvertise6ToHclTerraform(struct?: DataFortiosRouterBgpNeighborConditionalAdvertise6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterBgpNeighborConditionalAdvertise6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterBgpNeighborConditionalAdvertise6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterBgpNeighborConditionalAdvertise6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise_routemap - computed: true, optional: false, required: false
  public get advertiseRoutemap() {
    return this.getStringAttribute('advertise_routemap');
  }

  // condition_routemap - computed: true, optional: false, required: false
  public get conditionRoutemap() {
    return this.getStringAttribute('condition_routemap');
  }

  // condition_type - computed: true, optional: false, required: false
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }
}

export class DataFortiosRouterBgpNeighborConditionalAdvertise6List extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterBgpNeighborConditionalAdvertise6OutputReference {
    return new DataFortiosRouterBgpNeighborConditionalAdvertise6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterBgpNeighbor {
}

export function dataFortiosRouterBgpNeighborToTerraform(struct?: DataFortiosRouterBgpNeighbor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterBgpNeighborToHclTerraform(struct?: DataFortiosRouterBgpNeighbor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterBgpNeighborOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterBgpNeighbor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterBgpNeighbor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // activate - computed: true, optional: false, required: false
  public get activate() {
    return this.getStringAttribute('activate');
  }

  // activate6 - computed: true, optional: false, required: false
  public get activate6() {
    return this.getStringAttribute('activate6');
  }

  // activate_evpn - computed: true, optional: false, required: false
  public get activateEvpn() {
    return this.getStringAttribute('activate_evpn');
  }

  // activate_vpnv4 - computed: true, optional: false, required: false
  public get activateVpnv4() {
    return this.getStringAttribute('activate_vpnv4');
  }

  // activate_vpnv6 - computed: true, optional: false, required: false
  public get activateVpnv6() {
    return this.getStringAttribute('activate_vpnv6');
  }

  // additional_path - computed: true, optional: false, required: false
  public get additionalPath() {
    return this.getStringAttribute('additional_path');
  }

  // additional_path6 - computed: true, optional: false, required: false
  public get additionalPath6() {
    return this.getStringAttribute('additional_path6');
  }

  // additional_path_vpnv4 - computed: true, optional: false, required: false
  public get additionalPathVpnv4() {
    return this.getStringAttribute('additional_path_vpnv4');
  }

  // additional_path_vpnv6 - computed: true, optional: false, required: false
  public get additionalPathVpnv6() {
    return this.getStringAttribute('additional_path_vpnv6');
  }

  // adv_additional_path - computed: true, optional: false, required: false
  public get advAdditionalPath() {
    return this.getNumberAttribute('adv_additional_path');
  }

  // adv_additional_path6 - computed: true, optional: false, required: false
  public get advAdditionalPath6() {
    return this.getNumberAttribute('adv_additional_path6');
  }

  // adv_additional_path_vpnv4 - computed: true, optional: false, required: false
  public get advAdditionalPathVpnv4() {
    return this.getNumberAttribute('adv_additional_path_vpnv4');
  }

  // adv_additional_path_vpnv6 - computed: true, optional: false, required: false
  public get advAdditionalPathVpnv6() {
    return this.getNumberAttribute('adv_additional_path_vpnv6');
  }

  // advertisement_interval - computed: true, optional: false, required: false
  public get advertisementInterval() {
    return this.getNumberAttribute('advertisement_interval');
  }

  // allowas_in - computed: true, optional: false, required: false
  public get allowasIn() {
    return this.getNumberAttribute('allowas_in');
  }

  // allowas_in6 - computed: true, optional: false, required: false
  public get allowasIn6() {
    return this.getNumberAttribute('allowas_in6');
  }

  // allowas_in_enable - computed: true, optional: false, required: false
  public get allowasInEnable() {
    return this.getStringAttribute('allowas_in_enable');
  }

  // allowas_in_enable6 - computed: true, optional: false, required: false
  public get allowasInEnable6() {
    return this.getStringAttribute('allowas_in_enable6');
  }

  // allowas_in_enable_evpn - computed: true, optional: false, required: false
  public get allowasInEnableEvpn() {
    return this.getStringAttribute('allowas_in_enable_evpn');
  }

  // allowas_in_enable_vpnv4 - computed: true, optional: false, required: false
  public get allowasInEnableVpnv4() {
    return this.getStringAttribute('allowas_in_enable_vpnv4');
  }

  // allowas_in_enable_vpnv6 - computed: true, optional: false, required: false
  public get allowasInEnableVpnv6() {
    return this.getStringAttribute('allowas_in_enable_vpnv6');
  }

  // allowas_in_evpn - computed: true, optional: false, required: false
  public get allowasInEvpn() {
    return this.getNumberAttribute('allowas_in_evpn');
  }

  // allowas_in_vpnv4 - computed: true, optional: false, required: false
  public get allowasInVpnv4() {
    return this.getNumberAttribute('allowas_in_vpnv4');
  }

  // allowas_in_vpnv6 - computed: true, optional: false, required: false
  public get allowasInVpnv6() {
    return this.getNumberAttribute('allowas_in_vpnv6');
  }

  // as_override - computed: true, optional: false, required: false
  public get asOverride() {
    return this.getStringAttribute('as_override');
  }

  // as_override6 - computed: true, optional: false, required: false
  public get asOverride6() {
    return this.getStringAttribute('as_override6');
  }

  // attribute_unchanged - computed: true, optional: false, required: false
  public get attributeUnchanged() {
    return this.getStringAttribute('attribute_unchanged');
  }

  // attribute_unchanged6 - computed: true, optional: false, required: false
  public get attributeUnchanged6() {
    return this.getStringAttribute('attribute_unchanged6');
  }

  // attribute_unchanged_vpnv4 - computed: true, optional: false, required: false
  public get attributeUnchangedVpnv4() {
    return this.getStringAttribute('attribute_unchanged_vpnv4');
  }

  // attribute_unchanged_vpnv6 - computed: true, optional: false, required: false
  public get attributeUnchangedVpnv6() {
    return this.getStringAttribute('attribute_unchanged_vpnv6');
  }

  // auth_options - computed: true, optional: false, required: false
  public get authOptions() {
    return this.getStringAttribute('auth_options');
  }

  // bfd - computed: true, optional: false, required: false
  public get bfd() {
    return this.getStringAttribute('bfd');
  }

  // capability_default_originate - computed: true, optional: false, required: false
  public get capabilityDefaultOriginate() {
    return this.getStringAttribute('capability_default_originate');
  }

  // capability_default_originate6 - computed: true, optional: false, required: false
  public get capabilityDefaultOriginate6() {
    return this.getStringAttribute('capability_default_originate6');
  }

  // capability_dynamic - computed: true, optional: false, required: false
  public get capabilityDynamic() {
    return this.getStringAttribute('capability_dynamic');
  }

  // capability_graceful_restart - computed: true, optional: false, required: false
  public get capabilityGracefulRestart() {
    return this.getStringAttribute('capability_graceful_restart');
  }

  // capability_graceful_restart6 - computed: true, optional: false, required: false
  public get capabilityGracefulRestart6() {
    return this.getStringAttribute('capability_graceful_restart6');
  }

  // capability_graceful_restart_evpn - computed: true, optional: false, required: false
  public get capabilityGracefulRestartEvpn() {
    return this.getStringAttribute('capability_graceful_restart_evpn');
  }

  // capability_graceful_restart_vpnv4 - computed: true, optional: false, required: false
  public get capabilityGracefulRestartVpnv4() {
    return this.getStringAttribute('capability_graceful_restart_vpnv4');
  }

  // capability_graceful_restart_vpnv6 - computed: true, optional: false, required: false
  public get capabilityGracefulRestartVpnv6() {
    return this.getStringAttribute('capability_graceful_restart_vpnv6');
  }

  // capability_orf - computed: true, optional: false, required: false
  public get capabilityOrf() {
    return this.getStringAttribute('capability_orf');
  }

  // capability_orf6 - computed: true, optional: false, required: false
  public get capabilityOrf6() {
    return this.getStringAttribute('capability_orf6');
  }

  // capability_route_refresh - computed: true, optional: false, required: false
  public get capabilityRouteRefresh() {
    return this.getStringAttribute('capability_route_refresh');
  }

  // conditional_advertise - computed: true, optional: false, required: false
  private _conditionalAdvertise = new DataFortiosRouterBgpNeighborConditionalAdvertiseList(this, "conditional_advertise", false);
  public get conditionalAdvertise() {
    return this._conditionalAdvertise;
  }

  // conditional_advertise6 - computed: true, optional: false, required: false
  private _conditionalAdvertise6 = new DataFortiosRouterBgpNeighborConditionalAdvertise6List(this, "conditional_advertise6", false);
  public get conditionalAdvertise6() {
    return this._conditionalAdvertise6;
  }

  // connect_timer - computed: true, optional: false, required: false
  public get connectTimer() {
    return this.getNumberAttribute('connect_timer');
  }

  // default_originate_routemap - computed: true, optional: false, required: false
  public get defaultOriginateRoutemap() {
    return this.getStringAttribute('default_originate_routemap');
  }

  // default_originate_routemap6 - computed: true, optional: false, required: false
  public get defaultOriginateRoutemap6() {
    return this.getStringAttribute('default_originate_routemap6');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // distribute_list_in - computed: true, optional: false, required: false
  public get distributeListIn() {
    return this.getStringAttribute('distribute_list_in');
  }

  // distribute_list_in6 - computed: true, optional: false, required: false
  public get distributeListIn6() {
    return this.getStringAttribute('distribute_list_in6');
  }

  // distribute_list_in_vpnv4 - computed: true, optional: false, required: false
  public get distributeListInVpnv4() {
    return this.getStringAttribute('distribute_list_in_vpnv4');
  }

  // distribute_list_in_vpnv6 - computed: true, optional: false, required: false
  public get distributeListInVpnv6() {
    return this.getStringAttribute('distribute_list_in_vpnv6');
  }

  // distribute_list_out - computed: true, optional: false, required: false
  public get distributeListOut() {
    return this.getStringAttribute('distribute_list_out');
  }

  // distribute_list_out6 - computed: true, optional: false, required: false
  public get distributeListOut6() {
    return this.getStringAttribute('distribute_list_out6');
  }

  // distribute_list_out_vpnv4 - computed: true, optional: false, required: false
  public get distributeListOutVpnv4() {
    return this.getStringAttribute('distribute_list_out_vpnv4');
  }

  // distribute_list_out_vpnv6 - computed: true, optional: false, required: false
  public get distributeListOutVpnv6() {
    return this.getStringAttribute('distribute_list_out_vpnv6');
  }

  // dont_capability_negotiate - computed: true, optional: false, required: false
  public get dontCapabilityNegotiate() {
    return this.getStringAttribute('dont_capability_negotiate');
  }

  // ebgp_enforce_multihop - computed: true, optional: false, required: false
  public get ebgpEnforceMultihop() {
    return this.getStringAttribute('ebgp_enforce_multihop');
  }

  // ebgp_multihop_ttl - computed: true, optional: false, required: false
  public get ebgpMultihopTtl() {
    return this.getNumberAttribute('ebgp_multihop_ttl');
  }

  // filter_list_in - computed: true, optional: false, required: false
  public get filterListIn() {
    return this.getStringAttribute('filter_list_in');
  }

  // filter_list_in6 - computed: true, optional: false, required: false
  public get filterListIn6() {
    return this.getStringAttribute('filter_list_in6');
  }

  // filter_list_in_vpnv4 - computed: true, optional: false, required: false
  public get filterListInVpnv4() {
    return this.getStringAttribute('filter_list_in_vpnv4');
  }

  // filter_list_in_vpnv6 - computed: true, optional: false, required: false
  public get filterListInVpnv6() {
    return this.getStringAttribute('filter_list_in_vpnv6');
  }

  // filter_list_out - computed: true, optional: false, required: false
  public get filterListOut() {
    return this.getStringAttribute('filter_list_out');
  }

  // filter_list_out6 - computed: true, optional: false, required: false
  public get filterListOut6() {
    return this.getStringAttribute('filter_list_out6');
  }

  // filter_list_out_vpnv4 - computed: true, optional: false, required: false
  public get filterListOutVpnv4() {
    return this.getStringAttribute('filter_list_out_vpnv4');
  }

  // filter_list_out_vpnv6 - computed: true, optional: false, required: false
  public get filterListOutVpnv6() {
    return this.getStringAttribute('filter_list_out_vpnv6');
  }

  // holdtime_timer - computed: true, optional: false, required: false
  public get holdtimeTimer() {
    return this.getNumberAttribute('holdtime_timer');
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // keep_alive_timer - computed: true, optional: false, required: false
  public get keepAliveTimer() {
    return this.getNumberAttribute('keep_alive_timer');
  }

  // link_down_failover - computed: true, optional: false, required: false
  public get linkDownFailover() {
    return this.getStringAttribute('link_down_failover');
  }

  // local_as - computed: true, optional: false, required: false
  public get localAs() {
    return this.getNumberAttribute('local_as');
  }

  // local_as_no_prepend - computed: true, optional: false, required: false
  public get localAsNoPrepend() {
    return this.getStringAttribute('local_as_no_prepend');
  }

  // local_as_replace_as - computed: true, optional: false, required: false
  public get localAsReplaceAs() {
    return this.getStringAttribute('local_as_replace_as');
  }

  // maximum_prefix - computed: true, optional: false, required: false
  public get maximumPrefix() {
    return this.getNumberAttribute('maximum_prefix');
  }

  // maximum_prefix6 - computed: true, optional: false, required: false
  public get maximumPrefix6() {
    return this.getNumberAttribute('maximum_prefix6');
  }

  // maximum_prefix_evpn - computed: true, optional: false, required: false
  public get maximumPrefixEvpn() {
    return this.getNumberAttribute('maximum_prefix_evpn');
  }

  // maximum_prefix_threshold - computed: true, optional: false, required: false
  public get maximumPrefixThreshold() {
    return this.getNumberAttribute('maximum_prefix_threshold');
  }

  // maximum_prefix_threshold6 - computed: true, optional: false, required: false
  public get maximumPrefixThreshold6() {
    return this.getNumberAttribute('maximum_prefix_threshold6');
  }

  // maximum_prefix_threshold_evpn - computed: true, optional: false, required: false
  public get maximumPrefixThresholdEvpn() {
    return this.getNumberAttribute('maximum_prefix_threshold_evpn');
  }

  // maximum_prefix_threshold_vpnv4 - computed: true, optional: false, required: false
  public get maximumPrefixThresholdVpnv4() {
    return this.getNumberAttribute('maximum_prefix_threshold_vpnv4');
  }

  // maximum_prefix_threshold_vpnv6 - computed: true, optional: false, required: false
  public get maximumPrefixThresholdVpnv6() {
    return this.getNumberAttribute('maximum_prefix_threshold_vpnv6');
  }

  // maximum_prefix_vpnv4 - computed: true, optional: false, required: false
  public get maximumPrefixVpnv4() {
    return this.getNumberAttribute('maximum_prefix_vpnv4');
  }

  // maximum_prefix_vpnv6 - computed: true, optional: false, required: false
  public get maximumPrefixVpnv6() {
    return this.getNumberAttribute('maximum_prefix_vpnv6');
  }

  // maximum_prefix_warning_only - computed: true, optional: false, required: false
  public get maximumPrefixWarningOnly() {
    return this.getStringAttribute('maximum_prefix_warning_only');
  }

  // maximum_prefix_warning_only6 - computed: true, optional: false, required: false
  public get maximumPrefixWarningOnly6() {
    return this.getStringAttribute('maximum_prefix_warning_only6');
  }

  // maximum_prefix_warning_only_evpn - computed: true, optional: false, required: false
  public get maximumPrefixWarningOnlyEvpn() {
    return this.getStringAttribute('maximum_prefix_warning_only_evpn');
  }

  // maximum_prefix_warning_only_vpnv4 - computed: true, optional: false, required: false
  public get maximumPrefixWarningOnlyVpnv4() {
    return this.getStringAttribute('maximum_prefix_warning_only_vpnv4');
  }

  // maximum_prefix_warning_only_vpnv6 - computed: true, optional: false, required: false
  public get maximumPrefixWarningOnlyVpnv6() {
    return this.getStringAttribute('maximum_prefix_warning_only_vpnv6');
  }

  // next_hop_self - computed: true, optional: false, required: false
  public get nextHopSelf() {
    return this.getStringAttribute('next_hop_self');
  }

  // next_hop_self6 - computed: true, optional: false, required: false
  public get nextHopSelf6() {
    return this.getStringAttribute('next_hop_self6');
  }

  // next_hop_self_rr - computed: true, optional: false, required: false
  public get nextHopSelfRr() {
    return this.getStringAttribute('next_hop_self_rr');
  }

  // next_hop_self_rr6 - computed: true, optional: false, required: false
  public get nextHopSelfRr6() {
    return this.getStringAttribute('next_hop_self_rr6');
  }

  // next_hop_self_vpnv4 - computed: true, optional: false, required: false
  public get nextHopSelfVpnv4() {
    return this.getStringAttribute('next_hop_self_vpnv4');
  }

  // next_hop_self_vpnv6 - computed: true, optional: false, required: false
  public get nextHopSelfVpnv6() {
    return this.getStringAttribute('next_hop_self_vpnv6');
  }

  // override_capability - computed: true, optional: false, required: false
  public get overrideCapability() {
    return this.getStringAttribute('override_capability');
  }

  // passive - computed: true, optional: false, required: false
  public get passive() {
    return this.getStringAttribute('passive');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // prefix_list_in - computed: true, optional: false, required: false
  public get prefixListIn() {
    return this.getStringAttribute('prefix_list_in');
  }

  // prefix_list_in6 - computed: true, optional: false, required: false
  public get prefixListIn6() {
    return this.getStringAttribute('prefix_list_in6');
  }

  // prefix_list_in_vpnv4 - computed: true, optional: false, required: false
  public get prefixListInVpnv4() {
    return this.getStringAttribute('prefix_list_in_vpnv4');
  }

  // prefix_list_in_vpnv6 - computed: true, optional: false, required: false
  public get prefixListInVpnv6() {
    return this.getStringAttribute('prefix_list_in_vpnv6');
  }

  // prefix_list_out - computed: true, optional: false, required: false
  public get prefixListOut() {
    return this.getStringAttribute('prefix_list_out');
  }

  // prefix_list_out6 - computed: true, optional: false, required: false
  public get prefixListOut6() {
    return this.getStringAttribute('prefix_list_out6');
  }

  // prefix_list_out_vpnv4 - computed: true, optional: false, required: false
  public get prefixListOutVpnv4() {
    return this.getStringAttribute('prefix_list_out_vpnv4');
  }

  // prefix_list_out_vpnv6 - computed: true, optional: false, required: false
  public get prefixListOutVpnv6() {
    return this.getStringAttribute('prefix_list_out_vpnv6');
  }

  // remote_as - computed: true, optional: false, required: false
  public get remoteAs() {
    return this.getNumberAttribute('remote_as');
  }

  // remove_private_as - computed: true, optional: false, required: false
  public get removePrivateAs() {
    return this.getStringAttribute('remove_private_as');
  }

  // remove_private_as6 - computed: true, optional: false, required: false
  public get removePrivateAs6() {
    return this.getStringAttribute('remove_private_as6');
  }

  // remove_private_as_evpn - computed: true, optional: false, required: false
  public get removePrivateAsEvpn() {
    return this.getStringAttribute('remove_private_as_evpn');
  }

  // remove_private_as_vpnv4 - computed: true, optional: false, required: false
  public get removePrivateAsVpnv4() {
    return this.getStringAttribute('remove_private_as_vpnv4');
  }

  // remove_private_as_vpnv6 - computed: true, optional: false, required: false
  public get removePrivateAsVpnv6() {
    return this.getStringAttribute('remove_private_as_vpnv6');
  }

  // restart_time - computed: true, optional: false, required: false
  public get restartTime() {
    return this.getNumberAttribute('restart_time');
  }

  // retain_stale_time - computed: true, optional: false, required: false
  public get retainStaleTime() {
    return this.getNumberAttribute('retain_stale_time');
  }

  // route_map_in - computed: true, optional: false, required: false
  public get routeMapIn() {
    return this.getStringAttribute('route_map_in');
  }

  // route_map_in6 - computed: true, optional: false, required: false
  public get routeMapIn6() {
    return this.getStringAttribute('route_map_in6');
  }

  // route_map_in_evpn - computed: true, optional: false, required: false
  public get routeMapInEvpn() {
    return this.getStringAttribute('route_map_in_evpn');
  }

  // route_map_in_vpnv4 - computed: true, optional: false, required: false
  public get routeMapInVpnv4() {
    return this.getStringAttribute('route_map_in_vpnv4');
  }

  // route_map_in_vpnv6 - computed: true, optional: false, required: false
  public get routeMapInVpnv6() {
    return this.getStringAttribute('route_map_in_vpnv6');
  }

  // route_map_out - computed: true, optional: false, required: false
  public get routeMapOut() {
    return this.getStringAttribute('route_map_out');
  }

  // route_map_out6 - computed: true, optional: false, required: false
  public get routeMapOut6() {
    return this.getStringAttribute('route_map_out6');
  }

  // route_map_out6_preferable - computed: true, optional: false, required: false
  public get routeMapOut6Preferable() {
    return this.getStringAttribute('route_map_out6_preferable');
  }

  // route_map_out_evpn - computed: true, optional: false, required: false
  public get routeMapOutEvpn() {
    return this.getStringAttribute('route_map_out_evpn');
  }

  // route_map_out_preferable - computed: true, optional: false, required: false
  public get routeMapOutPreferable() {
    return this.getStringAttribute('route_map_out_preferable');
  }

  // route_map_out_vpnv4 - computed: true, optional: false, required: false
  public get routeMapOutVpnv4() {
    return this.getStringAttribute('route_map_out_vpnv4');
  }

  // route_map_out_vpnv4_preferable - computed: true, optional: false, required: false
  public get routeMapOutVpnv4Preferable() {
    return this.getStringAttribute('route_map_out_vpnv4_preferable');
  }

  // route_map_out_vpnv6 - computed: true, optional: false, required: false
  public get routeMapOutVpnv6() {
    return this.getStringAttribute('route_map_out_vpnv6');
  }

  // route_map_out_vpnv6_preferable - computed: true, optional: false, required: false
  public get routeMapOutVpnv6Preferable() {
    return this.getStringAttribute('route_map_out_vpnv6_preferable');
  }

  // route_reflector_client - computed: true, optional: false, required: false
  public get routeReflectorClient() {
    return this.getStringAttribute('route_reflector_client');
  }

  // route_reflector_client6 - computed: true, optional: false, required: false
  public get routeReflectorClient6() {
    return this.getStringAttribute('route_reflector_client6');
  }

  // route_reflector_client_evpn - computed: true, optional: false, required: false
  public get routeReflectorClientEvpn() {
    return this.getStringAttribute('route_reflector_client_evpn');
  }

  // route_reflector_client_vpnv4 - computed: true, optional: false, required: false
  public get routeReflectorClientVpnv4() {
    return this.getStringAttribute('route_reflector_client_vpnv4');
  }

  // route_reflector_client_vpnv6 - computed: true, optional: false, required: false
  public get routeReflectorClientVpnv6() {
    return this.getStringAttribute('route_reflector_client_vpnv6');
  }

  // route_server_client - computed: true, optional: false, required: false
  public get routeServerClient() {
    return this.getStringAttribute('route_server_client');
  }

  // route_server_client6 - computed: true, optional: false, required: false
  public get routeServerClient6() {
    return this.getStringAttribute('route_server_client6');
  }

  // route_server_client_evpn - computed: true, optional: false, required: false
  public get routeServerClientEvpn() {
    return this.getStringAttribute('route_server_client_evpn');
  }

  // route_server_client_vpnv4 - computed: true, optional: false, required: false
  public get routeServerClientVpnv4() {
    return this.getStringAttribute('route_server_client_vpnv4');
  }

  // route_server_client_vpnv6 - computed: true, optional: false, required: false
  public get routeServerClientVpnv6() {
    return this.getStringAttribute('route_server_client_vpnv6');
  }

  // rr_attr_allow_change - computed: true, optional: false, required: false
  public get rrAttrAllowChange() {
    return this.getStringAttribute('rr_attr_allow_change');
  }

  // rr_attr_allow_change6 - computed: true, optional: false, required: false
  public get rrAttrAllowChange6() {
    return this.getStringAttribute('rr_attr_allow_change6');
  }

  // rr_attr_allow_change_evpn - computed: true, optional: false, required: false
  public get rrAttrAllowChangeEvpn() {
    return this.getStringAttribute('rr_attr_allow_change_evpn');
  }

  // rr_attr_allow_change_vpnv4 - computed: true, optional: false, required: false
  public get rrAttrAllowChangeVpnv4() {
    return this.getStringAttribute('rr_attr_allow_change_vpnv4');
  }

  // rr_attr_allow_change_vpnv6 - computed: true, optional: false, required: false
  public get rrAttrAllowChangeVpnv6() {
    return this.getStringAttribute('rr_attr_allow_change_vpnv6');
  }

  // send_community - computed: true, optional: false, required: false
  public get sendCommunity() {
    return this.getStringAttribute('send_community');
  }

  // send_community6 - computed: true, optional: false, required: false
  public get sendCommunity6() {
    return this.getStringAttribute('send_community6');
  }

  // send_community_evpn - computed: true, optional: false, required: false
  public get sendCommunityEvpn() {
    return this.getStringAttribute('send_community_evpn');
  }

  // send_community_vpnv4 - computed: true, optional: false, required: false
  public get sendCommunityVpnv4() {
    return this.getStringAttribute('send_community_vpnv4');
  }

  // send_community_vpnv6 - computed: true, optional: false, required: false
  public get sendCommunityVpnv6() {
    return this.getStringAttribute('send_community_vpnv6');
  }

  // shutdown - computed: true, optional: false, required: false
  public get shutdown() {
    return this.getStringAttribute('shutdown');
  }

  // soft_reconfiguration - computed: true, optional: false, required: false
  public get softReconfiguration() {
    return this.getStringAttribute('soft_reconfiguration');
  }

  // soft_reconfiguration6 - computed: true, optional: false, required: false
  public get softReconfiguration6() {
    return this.getStringAttribute('soft_reconfiguration6');
  }

  // soft_reconfiguration_evpn - computed: true, optional: false, required: false
  public get softReconfigurationEvpn() {
    return this.getStringAttribute('soft_reconfiguration_evpn');
  }

  // soft_reconfiguration_vpnv4 - computed: true, optional: false, required: false
  public get softReconfigurationVpnv4() {
    return this.getStringAttribute('soft_reconfiguration_vpnv4');
  }

  // soft_reconfiguration_vpnv6 - computed: true, optional: false, required: false
  public get softReconfigurationVpnv6() {
    return this.getStringAttribute('soft_reconfiguration_vpnv6');
  }

  // stale_route - computed: true, optional: false, required: false
  public get staleRoute() {
    return this.getStringAttribute('stale_route');
  }

  // strict_capability_match - computed: true, optional: false, required: false
  public get strictCapabilityMatch() {
    return this.getStringAttribute('strict_capability_match');
  }

  // unsuppress_map - computed: true, optional: false, required: false
  public get unsuppressMap() {
    return this.getStringAttribute('unsuppress_map');
  }

  // unsuppress_map6 - computed: true, optional: false, required: false
  public get unsuppressMap6() {
    return this.getStringAttribute('unsuppress_map6');
  }

  // update_source - computed: true, optional: false, required: false
  public get updateSource() {
    return this.getStringAttribute('update_source');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class DataFortiosRouterBgpNeighborList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterBgpNeighborOutputReference {
    return new DataFortiosRouterBgpNeighborOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterBgpNeighborGroup {
}

export function dataFortiosRouterBgpNeighborGroupToTerraform(struct?: DataFortiosRouterBgpNeighborGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterBgpNeighborGroupToHclTerraform(struct?: DataFortiosRouterBgpNeighborGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterBgpNeighborGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterBgpNeighborGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterBgpNeighborGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // activate - computed: true, optional: false, required: false
  public get activate() {
    return this.getStringAttribute('activate');
  }

  // activate6 - computed: true, optional: false, required: false
  public get activate6() {
    return this.getStringAttribute('activate6');
  }

  // activate_evpn - computed: true, optional: false, required: false
  public get activateEvpn() {
    return this.getStringAttribute('activate_evpn');
  }

  // activate_vpnv4 - computed: true, optional: false, required: false
  public get activateVpnv4() {
    return this.getStringAttribute('activate_vpnv4');
  }

  // activate_vpnv6 - computed: true, optional: false, required: false
  public get activateVpnv6() {
    return this.getStringAttribute('activate_vpnv6');
  }

  // additional_path - computed: true, optional: false, required: false
  public get additionalPath() {
    return this.getStringAttribute('additional_path');
  }

  // additional_path6 - computed: true, optional: false, required: false
  public get additionalPath6() {
    return this.getStringAttribute('additional_path6');
  }

  // additional_path_vpnv4 - computed: true, optional: false, required: false
  public get additionalPathVpnv4() {
    return this.getStringAttribute('additional_path_vpnv4');
  }

  // additional_path_vpnv6 - computed: true, optional: false, required: false
  public get additionalPathVpnv6() {
    return this.getStringAttribute('additional_path_vpnv6');
  }

  // adv_additional_path - computed: true, optional: false, required: false
  public get advAdditionalPath() {
    return this.getNumberAttribute('adv_additional_path');
  }

  // adv_additional_path6 - computed: true, optional: false, required: false
  public get advAdditionalPath6() {
    return this.getNumberAttribute('adv_additional_path6');
  }

  // adv_additional_path_vpnv4 - computed: true, optional: false, required: false
  public get advAdditionalPathVpnv4() {
    return this.getNumberAttribute('adv_additional_path_vpnv4');
  }

  // adv_additional_path_vpnv6 - computed: true, optional: false, required: false
  public get advAdditionalPathVpnv6() {
    return this.getNumberAttribute('adv_additional_path_vpnv6');
  }

  // advertisement_interval - computed: true, optional: false, required: false
  public get advertisementInterval() {
    return this.getNumberAttribute('advertisement_interval');
  }

  // allowas_in - computed: true, optional: false, required: false
  public get allowasIn() {
    return this.getNumberAttribute('allowas_in');
  }

  // allowas_in6 - computed: true, optional: false, required: false
  public get allowasIn6() {
    return this.getNumberAttribute('allowas_in6');
  }

  // allowas_in_enable - computed: true, optional: false, required: false
  public get allowasInEnable() {
    return this.getStringAttribute('allowas_in_enable');
  }

  // allowas_in_enable6 - computed: true, optional: false, required: false
  public get allowasInEnable6() {
    return this.getStringAttribute('allowas_in_enable6');
  }

  // allowas_in_enable_evpn - computed: true, optional: false, required: false
  public get allowasInEnableEvpn() {
    return this.getStringAttribute('allowas_in_enable_evpn');
  }

  // allowas_in_enable_vpnv4 - computed: true, optional: false, required: false
  public get allowasInEnableVpnv4() {
    return this.getStringAttribute('allowas_in_enable_vpnv4');
  }

  // allowas_in_enable_vpnv6 - computed: true, optional: false, required: false
  public get allowasInEnableVpnv6() {
    return this.getStringAttribute('allowas_in_enable_vpnv6');
  }

  // allowas_in_evpn - computed: true, optional: false, required: false
  public get allowasInEvpn() {
    return this.getNumberAttribute('allowas_in_evpn');
  }

  // allowas_in_vpnv4 - computed: true, optional: false, required: false
  public get allowasInVpnv4() {
    return this.getNumberAttribute('allowas_in_vpnv4');
  }

  // allowas_in_vpnv6 - computed: true, optional: false, required: false
  public get allowasInVpnv6() {
    return this.getNumberAttribute('allowas_in_vpnv6');
  }

  // as_override - computed: true, optional: false, required: false
  public get asOverride() {
    return this.getStringAttribute('as_override');
  }

  // as_override6 - computed: true, optional: false, required: false
  public get asOverride6() {
    return this.getStringAttribute('as_override6');
  }

  // attribute_unchanged - computed: true, optional: false, required: false
  public get attributeUnchanged() {
    return this.getStringAttribute('attribute_unchanged');
  }

  // attribute_unchanged6 - computed: true, optional: false, required: false
  public get attributeUnchanged6() {
    return this.getStringAttribute('attribute_unchanged6');
  }

  // attribute_unchanged_vpnv4 - computed: true, optional: false, required: false
  public get attributeUnchangedVpnv4() {
    return this.getStringAttribute('attribute_unchanged_vpnv4');
  }

  // attribute_unchanged_vpnv6 - computed: true, optional: false, required: false
  public get attributeUnchangedVpnv6() {
    return this.getStringAttribute('attribute_unchanged_vpnv6');
  }

  // auth_options - computed: true, optional: false, required: false
  public get authOptions() {
    return this.getStringAttribute('auth_options');
  }

  // bfd - computed: true, optional: false, required: false
  public get bfd() {
    return this.getStringAttribute('bfd');
  }

  // capability_default_originate - computed: true, optional: false, required: false
  public get capabilityDefaultOriginate() {
    return this.getStringAttribute('capability_default_originate');
  }

  // capability_default_originate6 - computed: true, optional: false, required: false
  public get capabilityDefaultOriginate6() {
    return this.getStringAttribute('capability_default_originate6');
  }

  // capability_dynamic - computed: true, optional: false, required: false
  public get capabilityDynamic() {
    return this.getStringAttribute('capability_dynamic');
  }

  // capability_graceful_restart - computed: true, optional: false, required: false
  public get capabilityGracefulRestart() {
    return this.getStringAttribute('capability_graceful_restart');
  }

  // capability_graceful_restart6 - computed: true, optional: false, required: false
  public get capabilityGracefulRestart6() {
    return this.getStringAttribute('capability_graceful_restart6');
  }

  // capability_graceful_restart_evpn - computed: true, optional: false, required: false
  public get capabilityGracefulRestartEvpn() {
    return this.getStringAttribute('capability_graceful_restart_evpn');
  }

  // capability_graceful_restart_vpnv4 - computed: true, optional: false, required: false
  public get capabilityGracefulRestartVpnv4() {
    return this.getStringAttribute('capability_graceful_restart_vpnv4');
  }

  // capability_graceful_restart_vpnv6 - computed: true, optional: false, required: false
  public get capabilityGracefulRestartVpnv6() {
    return this.getStringAttribute('capability_graceful_restart_vpnv6');
  }

  // capability_orf - computed: true, optional: false, required: false
  public get capabilityOrf() {
    return this.getStringAttribute('capability_orf');
  }

  // capability_orf6 - computed: true, optional: false, required: false
  public get capabilityOrf6() {
    return this.getStringAttribute('capability_orf6');
  }

  // capability_route_refresh - computed: true, optional: false, required: false
  public get capabilityRouteRefresh() {
    return this.getStringAttribute('capability_route_refresh');
  }

  // connect_timer - computed: true, optional: false, required: false
  public get connectTimer() {
    return this.getNumberAttribute('connect_timer');
  }

  // default_originate_routemap - computed: true, optional: false, required: false
  public get defaultOriginateRoutemap() {
    return this.getStringAttribute('default_originate_routemap');
  }

  // default_originate_routemap6 - computed: true, optional: false, required: false
  public get defaultOriginateRoutemap6() {
    return this.getStringAttribute('default_originate_routemap6');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // distribute_list_in - computed: true, optional: false, required: false
  public get distributeListIn() {
    return this.getStringAttribute('distribute_list_in');
  }

  // distribute_list_in6 - computed: true, optional: false, required: false
  public get distributeListIn6() {
    return this.getStringAttribute('distribute_list_in6');
  }

  // distribute_list_in_vpnv4 - computed: true, optional: false, required: false
  public get distributeListInVpnv4() {
    return this.getStringAttribute('distribute_list_in_vpnv4');
  }

  // distribute_list_in_vpnv6 - computed: true, optional: false, required: false
  public get distributeListInVpnv6() {
    return this.getStringAttribute('distribute_list_in_vpnv6');
  }

  // distribute_list_out - computed: true, optional: false, required: false
  public get distributeListOut() {
    return this.getStringAttribute('distribute_list_out');
  }

  // distribute_list_out6 - computed: true, optional: false, required: false
  public get distributeListOut6() {
    return this.getStringAttribute('distribute_list_out6');
  }

  // distribute_list_out_vpnv4 - computed: true, optional: false, required: false
  public get distributeListOutVpnv4() {
    return this.getStringAttribute('distribute_list_out_vpnv4');
  }

  // distribute_list_out_vpnv6 - computed: true, optional: false, required: false
  public get distributeListOutVpnv6() {
    return this.getStringAttribute('distribute_list_out_vpnv6');
  }

  // dont_capability_negotiate - computed: true, optional: false, required: false
  public get dontCapabilityNegotiate() {
    return this.getStringAttribute('dont_capability_negotiate');
  }

  // ebgp_enforce_multihop - computed: true, optional: false, required: false
  public get ebgpEnforceMultihop() {
    return this.getStringAttribute('ebgp_enforce_multihop');
  }

  // ebgp_multihop_ttl - computed: true, optional: false, required: false
  public get ebgpMultihopTtl() {
    return this.getNumberAttribute('ebgp_multihop_ttl');
  }

  // filter_list_in - computed: true, optional: false, required: false
  public get filterListIn() {
    return this.getStringAttribute('filter_list_in');
  }

  // filter_list_in6 - computed: true, optional: false, required: false
  public get filterListIn6() {
    return this.getStringAttribute('filter_list_in6');
  }

  // filter_list_in_vpnv4 - computed: true, optional: false, required: false
  public get filterListInVpnv4() {
    return this.getStringAttribute('filter_list_in_vpnv4');
  }

  // filter_list_in_vpnv6 - computed: true, optional: false, required: false
  public get filterListInVpnv6() {
    return this.getStringAttribute('filter_list_in_vpnv6');
  }

  // filter_list_out - computed: true, optional: false, required: false
  public get filterListOut() {
    return this.getStringAttribute('filter_list_out');
  }

  // filter_list_out6 - computed: true, optional: false, required: false
  public get filterListOut6() {
    return this.getStringAttribute('filter_list_out6');
  }

  // filter_list_out_vpnv4 - computed: true, optional: false, required: false
  public get filterListOutVpnv4() {
    return this.getStringAttribute('filter_list_out_vpnv4');
  }

  // filter_list_out_vpnv6 - computed: true, optional: false, required: false
  public get filterListOutVpnv6() {
    return this.getStringAttribute('filter_list_out_vpnv6');
  }

  // holdtime_timer - computed: true, optional: false, required: false
  public get holdtimeTimer() {
    return this.getNumberAttribute('holdtime_timer');
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // keep_alive_timer - computed: true, optional: false, required: false
  public get keepAliveTimer() {
    return this.getNumberAttribute('keep_alive_timer');
  }

  // link_down_failover - computed: true, optional: false, required: false
  public get linkDownFailover() {
    return this.getStringAttribute('link_down_failover');
  }

  // local_as - computed: true, optional: false, required: false
  public get localAs() {
    return this.getNumberAttribute('local_as');
  }

  // local_as_no_prepend - computed: true, optional: false, required: false
  public get localAsNoPrepend() {
    return this.getStringAttribute('local_as_no_prepend');
  }

  // local_as_replace_as - computed: true, optional: false, required: false
  public get localAsReplaceAs() {
    return this.getStringAttribute('local_as_replace_as');
  }

  // maximum_prefix - computed: true, optional: false, required: false
  public get maximumPrefix() {
    return this.getNumberAttribute('maximum_prefix');
  }

  // maximum_prefix6 - computed: true, optional: false, required: false
  public get maximumPrefix6() {
    return this.getNumberAttribute('maximum_prefix6');
  }

  // maximum_prefix_evpn - computed: true, optional: false, required: false
  public get maximumPrefixEvpn() {
    return this.getNumberAttribute('maximum_prefix_evpn');
  }

  // maximum_prefix_threshold - computed: true, optional: false, required: false
  public get maximumPrefixThreshold() {
    return this.getNumberAttribute('maximum_prefix_threshold');
  }

  // maximum_prefix_threshold6 - computed: true, optional: false, required: false
  public get maximumPrefixThreshold6() {
    return this.getNumberAttribute('maximum_prefix_threshold6');
  }

  // maximum_prefix_threshold_evpn - computed: true, optional: false, required: false
  public get maximumPrefixThresholdEvpn() {
    return this.getNumberAttribute('maximum_prefix_threshold_evpn');
  }

  // maximum_prefix_threshold_vpnv4 - computed: true, optional: false, required: false
  public get maximumPrefixThresholdVpnv4() {
    return this.getNumberAttribute('maximum_prefix_threshold_vpnv4');
  }

  // maximum_prefix_threshold_vpnv6 - computed: true, optional: false, required: false
  public get maximumPrefixThresholdVpnv6() {
    return this.getNumberAttribute('maximum_prefix_threshold_vpnv6');
  }

  // maximum_prefix_vpnv4 - computed: true, optional: false, required: false
  public get maximumPrefixVpnv4() {
    return this.getNumberAttribute('maximum_prefix_vpnv4');
  }

  // maximum_prefix_vpnv6 - computed: true, optional: false, required: false
  public get maximumPrefixVpnv6() {
    return this.getNumberAttribute('maximum_prefix_vpnv6');
  }

  // maximum_prefix_warning_only - computed: true, optional: false, required: false
  public get maximumPrefixWarningOnly() {
    return this.getStringAttribute('maximum_prefix_warning_only');
  }

  // maximum_prefix_warning_only6 - computed: true, optional: false, required: false
  public get maximumPrefixWarningOnly6() {
    return this.getStringAttribute('maximum_prefix_warning_only6');
  }

  // maximum_prefix_warning_only_evpn - computed: true, optional: false, required: false
  public get maximumPrefixWarningOnlyEvpn() {
    return this.getStringAttribute('maximum_prefix_warning_only_evpn');
  }

  // maximum_prefix_warning_only_vpnv4 - computed: true, optional: false, required: false
  public get maximumPrefixWarningOnlyVpnv4() {
    return this.getStringAttribute('maximum_prefix_warning_only_vpnv4');
  }

  // maximum_prefix_warning_only_vpnv6 - computed: true, optional: false, required: false
  public get maximumPrefixWarningOnlyVpnv6() {
    return this.getStringAttribute('maximum_prefix_warning_only_vpnv6');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // next_hop_self - computed: true, optional: false, required: false
  public get nextHopSelf() {
    return this.getStringAttribute('next_hop_self');
  }

  // next_hop_self6 - computed: true, optional: false, required: false
  public get nextHopSelf6() {
    return this.getStringAttribute('next_hop_self6');
  }

  // next_hop_self_rr - computed: true, optional: false, required: false
  public get nextHopSelfRr() {
    return this.getStringAttribute('next_hop_self_rr');
  }

  // next_hop_self_rr6 - computed: true, optional: false, required: false
  public get nextHopSelfRr6() {
    return this.getStringAttribute('next_hop_self_rr6');
  }

  // next_hop_self_vpnv4 - computed: true, optional: false, required: false
  public get nextHopSelfVpnv4() {
    return this.getStringAttribute('next_hop_self_vpnv4');
  }

  // next_hop_self_vpnv6 - computed: true, optional: false, required: false
  public get nextHopSelfVpnv6() {
    return this.getStringAttribute('next_hop_self_vpnv6');
  }

  // override_capability - computed: true, optional: false, required: false
  public get overrideCapability() {
    return this.getStringAttribute('override_capability');
  }

  // passive - computed: true, optional: false, required: false
  public get passive() {
    return this.getStringAttribute('passive');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // prefix_list_in - computed: true, optional: false, required: false
  public get prefixListIn() {
    return this.getStringAttribute('prefix_list_in');
  }

  // prefix_list_in6 - computed: true, optional: false, required: false
  public get prefixListIn6() {
    return this.getStringAttribute('prefix_list_in6');
  }

  // prefix_list_in_vpnv4 - computed: true, optional: false, required: false
  public get prefixListInVpnv4() {
    return this.getStringAttribute('prefix_list_in_vpnv4');
  }

  // prefix_list_in_vpnv6 - computed: true, optional: false, required: false
  public get prefixListInVpnv6() {
    return this.getStringAttribute('prefix_list_in_vpnv6');
  }

  // prefix_list_out - computed: true, optional: false, required: false
  public get prefixListOut() {
    return this.getStringAttribute('prefix_list_out');
  }

  // prefix_list_out6 - computed: true, optional: false, required: false
  public get prefixListOut6() {
    return this.getStringAttribute('prefix_list_out6');
  }

  // prefix_list_out_vpnv4 - computed: true, optional: false, required: false
  public get prefixListOutVpnv4() {
    return this.getStringAttribute('prefix_list_out_vpnv4');
  }

  // prefix_list_out_vpnv6 - computed: true, optional: false, required: false
  public get prefixListOutVpnv6() {
    return this.getStringAttribute('prefix_list_out_vpnv6');
  }

  // remote_as - computed: true, optional: false, required: false
  public get remoteAs() {
    return this.getNumberAttribute('remote_as');
  }

  // remote_as_filter - computed: true, optional: false, required: false
  public get remoteAsFilter() {
    return this.getStringAttribute('remote_as_filter');
  }

  // remove_private_as - computed: true, optional: false, required: false
  public get removePrivateAs() {
    return this.getStringAttribute('remove_private_as');
  }

  // remove_private_as6 - computed: true, optional: false, required: false
  public get removePrivateAs6() {
    return this.getStringAttribute('remove_private_as6');
  }

  // remove_private_as_evpn - computed: true, optional: false, required: false
  public get removePrivateAsEvpn() {
    return this.getStringAttribute('remove_private_as_evpn');
  }

  // remove_private_as_vpnv4 - computed: true, optional: false, required: false
  public get removePrivateAsVpnv4() {
    return this.getStringAttribute('remove_private_as_vpnv4');
  }

  // remove_private_as_vpnv6 - computed: true, optional: false, required: false
  public get removePrivateAsVpnv6() {
    return this.getStringAttribute('remove_private_as_vpnv6');
  }

  // restart_time - computed: true, optional: false, required: false
  public get restartTime() {
    return this.getNumberAttribute('restart_time');
  }

  // retain_stale_time - computed: true, optional: false, required: false
  public get retainStaleTime() {
    return this.getNumberAttribute('retain_stale_time');
  }

  // route_map_in - computed: true, optional: false, required: false
  public get routeMapIn() {
    return this.getStringAttribute('route_map_in');
  }

  // route_map_in6 - computed: true, optional: false, required: false
  public get routeMapIn6() {
    return this.getStringAttribute('route_map_in6');
  }

  // route_map_in_evpn - computed: true, optional: false, required: false
  public get routeMapInEvpn() {
    return this.getStringAttribute('route_map_in_evpn');
  }

  // route_map_in_vpnv4 - computed: true, optional: false, required: false
  public get routeMapInVpnv4() {
    return this.getStringAttribute('route_map_in_vpnv4');
  }

  // route_map_in_vpnv6 - computed: true, optional: false, required: false
  public get routeMapInVpnv6() {
    return this.getStringAttribute('route_map_in_vpnv6');
  }

  // route_map_out - computed: true, optional: false, required: false
  public get routeMapOut() {
    return this.getStringAttribute('route_map_out');
  }

  // route_map_out6 - computed: true, optional: false, required: false
  public get routeMapOut6() {
    return this.getStringAttribute('route_map_out6');
  }

  // route_map_out6_preferable - computed: true, optional: false, required: false
  public get routeMapOut6Preferable() {
    return this.getStringAttribute('route_map_out6_preferable');
  }

  // route_map_out_evpn - computed: true, optional: false, required: false
  public get routeMapOutEvpn() {
    return this.getStringAttribute('route_map_out_evpn');
  }

  // route_map_out_preferable - computed: true, optional: false, required: false
  public get routeMapOutPreferable() {
    return this.getStringAttribute('route_map_out_preferable');
  }

  // route_map_out_vpnv4 - computed: true, optional: false, required: false
  public get routeMapOutVpnv4() {
    return this.getStringAttribute('route_map_out_vpnv4');
  }

  // route_map_out_vpnv4_preferable - computed: true, optional: false, required: false
  public get routeMapOutVpnv4Preferable() {
    return this.getStringAttribute('route_map_out_vpnv4_preferable');
  }

  // route_map_out_vpnv6 - computed: true, optional: false, required: false
  public get routeMapOutVpnv6() {
    return this.getStringAttribute('route_map_out_vpnv6');
  }

  // route_map_out_vpnv6_preferable - computed: true, optional: false, required: false
  public get routeMapOutVpnv6Preferable() {
    return this.getStringAttribute('route_map_out_vpnv6_preferable');
  }

  // route_reflector_client - computed: true, optional: false, required: false
  public get routeReflectorClient() {
    return this.getStringAttribute('route_reflector_client');
  }

  // route_reflector_client6 - computed: true, optional: false, required: false
  public get routeReflectorClient6() {
    return this.getStringAttribute('route_reflector_client6');
  }

  // route_reflector_client_evpn - computed: true, optional: false, required: false
  public get routeReflectorClientEvpn() {
    return this.getStringAttribute('route_reflector_client_evpn');
  }

  // route_reflector_client_vpnv4 - computed: true, optional: false, required: false
  public get routeReflectorClientVpnv4() {
    return this.getStringAttribute('route_reflector_client_vpnv4');
  }

  // route_reflector_client_vpnv6 - computed: true, optional: false, required: false
  public get routeReflectorClientVpnv6() {
    return this.getStringAttribute('route_reflector_client_vpnv6');
  }

  // route_server_client - computed: true, optional: false, required: false
  public get routeServerClient() {
    return this.getStringAttribute('route_server_client');
  }

  // route_server_client6 - computed: true, optional: false, required: false
  public get routeServerClient6() {
    return this.getStringAttribute('route_server_client6');
  }

  // route_server_client_evpn - computed: true, optional: false, required: false
  public get routeServerClientEvpn() {
    return this.getStringAttribute('route_server_client_evpn');
  }

  // route_server_client_vpnv4 - computed: true, optional: false, required: false
  public get routeServerClientVpnv4() {
    return this.getStringAttribute('route_server_client_vpnv4');
  }

  // route_server_client_vpnv6 - computed: true, optional: false, required: false
  public get routeServerClientVpnv6() {
    return this.getStringAttribute('route_server_client_vpnv6');
  }

  // rr_attr_allow_change - computed: true, optional: false, required: false
  public get rrAttrAllowChange() {
    return this.getStringAttribute('rr_attr_allow_change');
  }

  // rr_attr_allow_change6 - computed: true, optional: false, required: false
  public get rrAttrAllowChange6() {
    return this.getStringAttribute('rr_attr_allow_change6');
  }

  // rr_attr_allow_change_evpn - computed: true, optional: false, required: false
  public get rrAttrAllowChangeEvpn() {
    return this.getStringAttribute('rr_attr_allow_change_evpn');
  }

  // rr_attr_allow_change_vpnv4 - computed: true, optional: false, required: false
  public get rrAttrAllowChangeVpnv4() {
    return this.getStringAttribute('rr_attr_allow_change_vpnv4');
  }

  // rr_attr_allow_change_vpnv6 - computed: true, optional: false, required: false
  public get rrAttrAllowChangeVpnv6() {
    return this.getStringAttribute('rr_attr_allow_change_vpnv6');
  }

  // send_community - computed: true, optional: false, required: false
  public get sendCommunity() {
    return this.getStringAttribute('send_community');
  }

  // send_community6 - computed: true, optional: false, required: false
  public get sendCommunity6() {
    return this.getStringAttribute('send_community6');
  }

  // send_community_evpn - computed: true, optional: false, required: false
  public get sendCommunityEvpn() {
    return this.getStringAttribute('send_community_evpn');
  }

  // send_community_vpnv4 - computed: true, optional: false, required: false
  public get sendCommunityVpnv4() {
    return this.getStringAttribute('send_community_vpnv4');
  }

  // send_community_vpnv6 - computed: true, optional: false, required: false
  public get sendCommunityVpnv6() {
    return this.getStringAttribute('send_community_vpnv6');
  }

  // shutdown - computed: true, optional: false, required: false
  public get shutdown() {
    return this.getStringAttribute('shutdown');
  }

  // soft_reconfiguration - computed: true, optional: false, required: false
  public get softReconfiguration() {
    return this.getStringAttribute('soft_reconfiguration');
  }

  // soft_reconfiguration6 - computed: true, optional: false, required: false
  public get softReconfiguration6() {
    return this.getStringAttribute('soft_reconfiguration6');
  }

  // soft_reconfiguration_evpn - computed: true, optional: false, required: false
  public get softReconfigurationEvpn() {
    return this.getStringAttribute('soft_reconfiguration_evpn');
  }

  // soft_reconfiguration_vpnv4 - computed: true, optional: false, required: false
  public get softReconfigurationVpnv4() {
    return this.getStringAttribute('soft_reconfiguration_vpnv4');
  }

  // soft_reconfiguration_vpnv6 - computed: true, optional: false, required: false
  public get softReconfigurationVpnv6() {
    return this.getStringAttribute('soft_reconfiguration_vpnv6');
  }

  // stale_route - computed: true, optional: false, required: false
  public get staleRoute() {
    return this.getStringAttribute('stale_route');
  }

  // strict_capability_match - computed: true, optional: false, required: false
  public get strictCapabilityMatch() {
    return this.getStringAttribute('strict_capability_match');
  }

  // unsuppress_map - computed: true, optional: false, required: false
  public get unsuppressMap() {
    return this.getStringAttribute('unsuppress_map');
  }

  // unsuppress_map6 - computed: true, optional: false, required: false
  public get unsuppressMap6() {
    return this.getStringAttribute('unsuppress_map6');
  }

  // update_source - computed: true, optional: false, required: false
  public get updateSource() {
    return this.getStringAttribute('update_source');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class DataFortiosRouterBgpNeighborGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterBgpNeighborGroupOutputReference {
    return new DataFortiosRouterBgpNeighborGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterBgpNeighborRange {
}

export function dataFortiosRouterBgpNeighborRangeToTerraform(struct?: DataFortiosRouterBgpNeighborRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterBgpNeighborRangeToHclTerraform(struct?: DataFortiosRouterBgpNeighborRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterBgpNeighborRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterBgpNeighborRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterBgpNeighborRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // max_neighbor_num - computed: true, optional: false, required: false
  public get maxNeighborNum() {
    return this.getNumberAttribute('max_neighbor_num');
  }

  // neighbor_group - computed: true, optional: false, required: false
  public get neighborGroup() {
    return this.getStringAttribute('neighbor_group');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}

export class DataFortiosRouterBgpNeighborRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterBgpNeighborRangeOutputReference {
    return new DataFortiosRouterBgpNeighborRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterBgpNeighborRange6 {
}

export function dataFortiosRouterBgpNeighborRange6ToTerraform(struct?: DataFortiosRouterBgpNeighborRange6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterBgpNeighborRange6ToHclTerraform(struct?: DataFortiosRouterBgpNeighborRange6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterBgpNeighborRange6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterBgpNeighborRange6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterBgpNeighborRange6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // max_neighbor_num - computed: true, optional: false, required: false
  public get maxNeighborNum() {
    return this.getNumberAttribute('max_neighbor_num');
  }

  // neighbor_group - computed: true, optional: false, required: false
  public get neighborGroup() {
    return this.getStringAttribute('neighbor_group');
  }

  // prefix6 - computed: true, optional: false, required: false
  public get prefix6() {
    return this.getStringAttribute('prefix6');
  }
}

export class DataFortiosRouterBgpNeighborRange6List extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterBgpNeighborRange6OutputReference {
    return new DataFortiosRouterBgpNeighborRange6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterBgpNetwork {
}

export function dataFortiosRouterBgpNetworkToTerraform(struct?: DataFortiosRouterBgpNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterBgpNetworkToHclTerraform(struct?: DataFortiosRouterBgpNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterBgpNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterBgpNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterBgpNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backdoor - computed: true, optional: false, required: false
  public get backdoor() {
    return this.getStringAttribute('backdoor');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // network_import_check - computed: true, optional: false, required: false
  public get networkImportCheck() {
    return this.getStringAttribute('network_import_check');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // prefix_name - computed: true, optional: false, required: false
  public get prefixName() {
    return this.getStringAttribute('prefix_name');
  }

  // route_map - computed: true, optional: false, required: false
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
}

export class DataFortiosRouterBgpNetworkList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterBgpNetworkOutputReference {
    return new DataFortiosRouterBgpNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterBgpNetwork6 {
}

export function dataFortiosRouterBgpNetwork6ToTerraform(struct?: DataFortiosRouterBgpNetwork6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterBgpNetwork6ToHclTerraform(struct?: DataFortiosRouterBgpNetwork6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterBgpNetwork6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterBgpNetwork6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterBgpNetwork6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backdoor - computed: true, optional: false, required: false
  public get backdoor() {
    return this.getStringAttribute('backdoor');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // network_import_check - computed: true, optional: false, required: false
  public get networkImportCheck() {
    return this.getStringAttribute('network_import_check');
  }

  // prefix6 - computed: true, optional: false, required: false
  public get prefix6() {
    return this.getStringAttribute('prefix6');
  }

  // route_map - computed: true, optional: false, required: false
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
}

export class DataFortiosRouterBgpNetwork6List extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterBgpNetwork6OutputReference {
    return new DataFortiosRouterBgpNetwork6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterBgpRedistribute {
}

export function dataFortiosRouterBgpRedistributeToTerraform(struct?: DataFortiosRouterBgpRedistribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterBgpRedistributeToHclTerraform(struct?: DataFortiosRouterBgpRedistribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterBgpRedistributeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterBgpRedistribute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterBgpRedistribute | undefined) {
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

  // route_map - computed: true, optional: false, required: false
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataFortiosRouterBgpRedistributeList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterBgpRedistributeOutputReference {
    return new DataFortiosRouterBgpRedistributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterBgpRedistribute6 {
}

export function dataFortiosRouterBgpRedistribute6ToTerraform(struct?: DataFortiosRouterBgpRedistribute6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterBgpRedistribute6ToHclTerraform(struct?: DataFortiosRouterBgpRedistribute6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterBgpRedistribute6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterBgpRedistribute6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterBgpRedistribute6 | undefined) {
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

  // route_map - computed: true, optional: false, required: false
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataFortiosRouterBgpRedistribute6List extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterBgpRedistribute6OutputReference {
    return new DataFortiosRouterBgpRedistribute6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterBgpVrfExportRt {
}

export function dataFortiosRouterBgpVrfExportRtToTerraform(struct?: DataFortiosRouterBgpVrfExportRt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterBgpVrfExportRtToHclTerraform(struct?: DataFortiosRouterBgpVrfExportRt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterBgpVrfExportRtOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterBgpVrfExportRt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterBgpVrfExportRt | undefined) {
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
}

export class DataFortiosRouterBgpVrfExportRtList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterBgpVrfExportRtOutputReference {
    return new DataFortiosRouterBgpVrfExportRtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterBgpVrfImportRt {
}

export function dataFortiosRouterBgpVrfImportRtToTerraform(struct?: DataFortiosRouterBgpVrfImportRt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterBgpVrfImportRtToHclTerraform(struct?: DataFortiosRouterBgpVrfImportRt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterBgpVrfImportRtOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterBgpVrfImportRt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterBgpVrfImportRt | undefined) {
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
}

export class DataFortiosRouterBgpVrfImportRtList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterBgpVrfImportRtOutputReference {
    return new DataFortiosRouterBgpVrfImportRtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterBgpVrfLeakTarget {
}

export function dataFortiosRouterBgpVrfLeakTargetToTerraform(struct?: DataFortiosRouterBgpVrfLeakTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterBgpVrfLeakTargetToHclTerraform(struct?: DataFortiosRouterBgpVrfLeakTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterBgpVrfLeakTargetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterBgpVrfLeakTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterBgpVrfLeakTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // route_map - computed: true, optional: false, required: false
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }

  // vrf - computed: true, optional: false, required: false
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
}

export class DataFortiosRouterBgpVrfLeakTargetList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterBgpVrfLeakTargetOutputReference {
    return new DataFortiosRouterBgpVrfLeakTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterBgpVrf {
}

export function dataFortiosRouterBgpVrfToTerraform(struct?: DataFortiosRouterBgpVrf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterBgpVrfToHclTerraform(struct?: DataFortiosRouterBgpVrf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterBgpVrfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterBgpVrf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterBgpVrf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // export_rt - computed: true, optional: false, required: false
  private _exportRt = new DataFortiosRouterBgpVrfExportRtList(this, "export_rt", false);
  public get exportRt() {
    return this._exportRt;
  }

  // import_route_map - computed: true, optional: false, required: false
  public get importRouteMap() {
    return this.getStringAttribute('import_route_map');
  }

  // import_rt - computed: true, optional: false, required: false
  private _importRt = new DataFortiosRouterBgpVrfImportRtList(this, "import_rt", false);
  public get importRt() {
    return this._importRt;
  }

  // leak_target - computed: true, optional: false, required: false
  private _leakTarget = new DataFortiosRouterBgpVrfLeakTargetList(this, "leak_target", false);
  public get leakTarget() {
    return this._leakTarget;
  }

  // rd - computed: true, optional: false, required: false
  public get rd() {
    return this.getStringAttribute('rd');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // vrf - computed: true, optional: false, required: false
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
}

export class DataFortiosRouterBgpVrfList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterBgpVrfOutputReference {
    return new DataFortiosRouterBgpVrfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterBgpVrf6ExportRt {
}

export function dataFortiosRouterBgpVrf6ExportRtToTerraform(struct?: DataFortiosRouterBgpVrf6ExportRt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterBgpVrf6ExportRtToHclTerraform(struct?: DataFortiosRouterBgpVrf6ExportRt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterBgpVrf6ExportRtOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterBgpVrf6ExportRt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterBgpVrf6ExportRt | undefined) {
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
}

export class DataFortiosRouterBgpVrf6ExportRtList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterBgpVrf6ExportRtOutputReference {
    return new DataFortiosRouterBgpVrf6ExportRtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterBgpVrf6ImportRt {
}

export function dataFortiosRouterBgpVrf6ImportRtToTerraform(struct?: DataFortiosRouterBgpVrf6ImportRt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterBgpVrf6ImportRtToHclTerraform(struct?: DataFortiosRouterBgpVrf6ImportRt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterBgpVrf6ImportRtOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterBgpVrf6ImportRt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterBgpVrf6ImportRt | undefined) {
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
}

export class DataFortiosRouterBgpVrf6ImportRtList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterBgpVrf6ImportRtOutputReference {
    return new DataFortiosRouterBgpVrf6ImportRtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterBgpVrf6LeakTarget {
}

export function dataFortiosRouterBgpVrf6LeakTargetToTerraform(struct?: DataFortiosRouterBgpVrf6LeakTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterBgpVrf6LeakTargetToHclTerraform(struct?: DataFortiosRouterBgpVrf6LeakTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterBgpVrf6LeakTargetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterBgpVrf6LeakTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterBgpVrf6LeakTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // route_map - computed: true, optional: false, required: false
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }

  // vrf - computed: true, optional: false, required: false
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
}

export class DataFortiosRouterBgpVrf6LeakTargetList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterBgpVrf6LeakTargetOutputReference {
    return new DataFortiosRouterBgpVrf6LeakTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterBgpVrf6 {
}

export function dataFortiosRouterBgpVrf6ToTerraform(struct?: DataFortiosRouterBgpVrf6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterBgpVrf6ToHclTerraform(struct?: DataFortiosRouterBgpVrf6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterBgpVrf6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterBgpVrf6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterBgpVrf6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // export_rt - computed: true, optional: false, required: false
  private _exportRt = new DataFortiosRouterBgpVrf6ExportRtList(this, "export_rt", false);
  public get exportRt() {
    return this._exportRt;
  }

  // import_route_map - computed: true, optional: false, required: false
  public get importRouteMap() {
    return this.getStringAttribute('import_route_map');
  }

  // import_rt - computed: true, optional: false, required: false
  private _importRt = new DataFortiosRouterBgpVrf6ImportRtList(this, "import_rt", false);
  public get importRt() {
    return this._importRt;
  }

  // leak_target - computed: true, optional: false, required: false
  private _leakTarget = new DataFortiosRouterBgpVrf6LeakTargetList(this, "leak_target", false);
  public get leakTarget() {
    return this._leakTarget;
  }

  // rd - computed: true, optional: false, required: false
  public get rd() {
    return this.getStringAttribute('rd');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // vrf - computed: true, optional: false, required: false
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
}

export class DataFortiosRouterBgpVrf6List extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterBgpVrf6OutputReference {
    return new DataFortiosRouterBgpVrf6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterBgpVrfLeakTargetA {
}

export function dataFortiosRouterBgpVrfLeakTargetAToTerraform(struct?: DataFortiosRouterBgpVrfLeakTargetA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterBgpVrfLeakTargetAToHclTerraform(struct?: DataFortiosRouterBgpVrfLeakTargetA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterBgpVrfLeakTargetAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterBgpVrfLeakTargetA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterBgpVrfLeakTargetA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // route_map - computed: true, optional: false, required: false
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }

  // vrf - computed: true, optional: false, required: false
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
}

export class DataFortiosRouterBgpVrfLeakTargetAList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterBgpVrfLeakTargetAOutputReference {
    return new DataFortiosRouterBgpVrfLeakTargetAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterBgpVrfLeak {
}

export function dataFortiosRouterBgpVrfLeakToTerraform(struct?: DataFortiosRouterBgpVrfLeak): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterBgpVrfLeakToHclTerraform(struct?: DataFortiosRouterBgpVrfLeak): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterBgpVrfLeakOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterBgpVrfLeak | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterBgpVrfLeak | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // target - computed: true, optional: false, required: false
  private _target = new DataFortiosRouterBgpVrfLeakTargetAList(this, "target", false);
  public get target() {
    return this._target;
  }

  // vrf - computed: true, optional: false, required: false
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
}

export class DataFortiosRouterBgpVrfLeakList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterBgpVrfLeakOutputReference {
    return new DataFortiosRouterBgpVrfLeakOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterBgpVrfLeak6Target {
}

export function dataFortiosRouterBgpVrfLeak6TargetToTerraform(struct?: DataFortiosRouterBgpVrfLeak6Target): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterBgpVrfLeak6TargetToHclTerraform(struct?: DataFortiosRouterBgpVrfLeak6Target): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterBgpVrfLeak6TargetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterBgpVrfLeak6Target | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterBgpVrfLeak6Target | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // route_map - computed: true, optional: false, required: false
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }

  // vrf - computed: true, optional: false, required: false
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
}

export class DataFortiosRouterBgpVrfLeak6TargetList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterBgpVrfLeak6TargetOutputReference {
    return new DataFortiosRouterBgpVrfLeak6TargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterBgpVrfLeak6 {
}

export function dataFortiosRouterBgpVrfLeak6ToTerraform(struct?: DataFortiosRouterBgpVrfLeak6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterBgpVrfLeak6ToHclTerraform(struct?: DataFortiosRouterBgpVrfLeak6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterBgpVrfLeak6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterBgpVrfLeak6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterBgpVrfLeak6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // target - computed: true, optional: false, required: false
  private _target = new DataFortiosRouterBgpVrfLeak6TargetList(this, "target", false);
  public get target() {
    return this._target;
  }

  // vrf - computed: true, optional: false, required: false
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
}

export class DataFortiosRouterBgpVrfLeak6List extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterBgpVrfLeak6OutputReference {
    return new DataFortiosRouterBgpVrfLeak6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_bgp fortios_router_bgp}
*/
export class DataFortiosRouterBgp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_router_bgp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiosRouterBgp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiosRouterBgp to import
  * @param importFromId The id of the existing DataFortiosRouterBgp that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_bgp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiosRouterBgp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_router_bgp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_bgp fortios_router_bgp} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiosRouterBgpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataFortiosRouterBgpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_router_bgp',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
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
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_path - computed: true, optional: false, required: false
  public get additionalPath() {
    return this.getStringAttribute('additional_path');
  }

  // additional_path6 - computed: true, optional: false, required: false
  public get additionalPath6() {
    return this.getStringAttribute('additional_path6');
  }

  // additional_path_select - computed: true, optional: false, required: false
  public get additionalPathSelect() {
    return this.getNumberAttribute('additional_path_select');
  }

  // additional_path_select6 - computed: true, optional: false, required: false
  public get additionalPathSelect6() {
    return this.getNumberAttribute('additional_path_select6');
  }

  // additional_path_select_vpnv4 - computed: true, optional: false, required: false
  public get additionalPathSelectVpnv4() {
    return this.getNumberAttribute('additional_path_select_vpnv4');
  }

  // additional_path_select_vpnv6 - computed: true, optional: false, required: false
  public get additionalPathSelectVpnv6() {
    return this.getNumberAttribute('additional_path_select_vpnv6');
  }

  // additional_path_vpnv4 - computed: true, optional: false, required: false
  public get additionalPathVpnv4() {
    return this.getStringAttribute('additional_path_vpnv4');
  }

  // additional_path_vpnv6 - computed: true, optional: false, required: false
  public get additionalPathVpnv6() {
    return this.getStringAttribute('additional_path_vpnv6');
  }

  // admin_distance - computed: true, optional: false, required: false
  private _adminDistance = new DataFortiosRouterBgpAdminDistanceList(this, "admin_distance", false);
  public get adminDistance() {
    return this._adminDistance;
  }

  // aggregate_address - computed: true, optional: false, required: false
  private _aggregateAddress = new DataFortiosRouterBgpAggregateAddressList(this, "aggregate_address", false);
  public get aggregateAddress() {
    return this._aggregateAddress;
  }

  // aggregate_address6 - computed: true, optional: false, required: false
  private _aggregateAddress6 = new DataFortiosRouterBgpAggregateAddress6List(this, "aggregate_address6", false);
  public get aggregateAddress6() {
    return this._aggregateAddress6;
  }

  // always_compare_med - computed: true, optional: false, required: false
  public get alwaysCompareMed() {
    return this.getStringAttribute('always_compare_med');
  }

  // as - computed: true, optional: false, required: false
  public get as() {
    return this.getNumberAttribute('as');
  }

  // as_string - computed: true, optional: false, required: false
  public get asString() {
    return this.getStringAttribute('as_string');
  }

  // bestpath_as_path_ignore - computed: true, optional: false, required: false
  public get bestpathAsPathIgnore() {
    return this.getStringAttribute('bestpath_as_path_ignore');
  }

  // bestpath_cmp_confed_aspath - computed: true, optional: false, required: false
  public get bestpathCmpConfedAspath() {
    return this.getStringAttribute('bestpath_cmp_confed_aspath');
  }

  // bestpath_cmp_routerid - computed: true, optional: false, required: false
  public get bestpathCmpRouterid() {
    return this.getStringAttribute('bestpath_cmp_routerid');
  }

  // bestpath_med_confed - computed: true, optional: false, required: false
  public get bestpathMedConfed() {
    return this.getStringAttribute('bestpath_med_confed');
  }

  // bestpath_med_missing_as_worst - computed: true, optional: false, required: false
  public get bestpathMedMissingAsWorst() {
    return this.getStringAttribute('bestpath_med_missing_as_worst');
  }

  // client_to_client_reflection - computed: true, optional: false, required: false
  public get clientToClientReflection() {
    return this.getStringAttribute('client_to_client_reflection');
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // confederation_identifier - computed: true, optional: false, required: false
  public get confederationIdentifier() {
    return this.getNumberAttribute('confederation_identifier');
  }

  // confederation_peers - computed: true, optional: false, required: false
  private _confederationPeers = new DataFortiosRouterBgpConfederationPeersList(this, "confederation_peers", false);
  public get confederationPeers() {
    return this._confederationPeers;
  }

  // cross_family_conditional_adv - computed: true, optional: false, required: false
  public get crossFamilyConditionalAdv() {
    return this.getStringAttribute('cross_family_conditional_adv');
  }

  // dampening - computed: true, optional: false, required: false
  public get dampening() {
    return this.getStringAttribute('dampening');
  }

  // dampening_max_suppress_time - computed: true, optional: false, required: false
  public get dampeningMaxSuppressTime() {
    return this.getNumberAttribute('dampening_max_suppress_time');
  }

  // dampening_reachability_half_life - computed: true, optional: false, required: false
  public get dampeningReachabilityHalfLife() {
    return this.getNumberAttribute('dampening_reachability_half_life');
  }

  // dampening_reuse - computed: true, optional: false, required: false
  public get dampeningReuse() {
    return this.getNumberAttribute('dampening_reuse');
  }

  // dampening_route_map - computed: true, optional: false, required: false
  public get dampeningRouteMap() {
    return this.getStringAttribute('dampening_route_map');
  }

  // dampening_suppress - computed: true, optional: false, required: false
  public get dampeningSuppress() {
    return this.getNumberAttribute('dampening_suppress');
  }

  // dampening_unreachability_half_life - computed: true, optional: false, required: false
  public get dampeningUnreachabilityHalfLife() {
    return this.getNumberAttribute('dampening_unreachability_half_life');
  }

  // default_local_preference - computed: true, optional: false, required: false
  public get defaultLocalPreference() {
    return this.getNumberAttribute('default_local_preference');
  }

  // deterministic_med - computed: true, optional: false, required: false
  public get deterministicMed() {
    return this.getStringAttribute('deterministic_med');
  }

  // distance_external - computed: true, optional: false, required: false
  public get distanceExternal() {
    return this.getNumberAttribute('distance_external');
  }

  // distance_internal - computed: true, optional: false, required: false
  public get distanceInternal() {
    return this.getNumberAttribute('distance_internal');
  }

  // distance_local - computed: true, optional: false, required: false
  public get distanceLocal() {
    return this.getNumberAttribute('distance_local');
  }

  // ebgp_multipath - computed: true, optional: false, required: false
  public get ebgpMultipath() {
    return this.getStringAttribute('ebgp_multipath');
  }

  // enforce_first_as - computed: true, optional: false, required: false
  public get enforceFirstAs() {
    return this.getStringAttribute('enforce_first_as');
  }

  // fast_external_failover - computed: true, optional: false, required: false
  public get fastExternalFailover() {
    return this.getStringAttribute('fast_external_failover');
  }

  // graceful_end_on_timer - computed: true, optional: false, required: false
  public get gracefulEndOnTimer() {
    return this.getStringAttribute('graceful_end_on_timer');
  }

  // graceful_restart - computed: true, optional: false, required: false
  public get gracefulRestart() {
    return this.getStringAttribute('graceful_restart');
  }

  // graceful_restart_time - computed: true, optional: false, required: false
  public get gracefulRestartTime() {
    return this.getNumberAttribute('graceful_restart_time');
  }

  // graceful_stalepath_time - computed: true, optional: false, required: false
  public get gracefulStalepathTime() {
    return this.getNumberAttribute('graceful_stalepath_time');
  }

  // graceful_update_delay - computed: true, optional: false, required: false
  public get gracefulUpdateDelay() {
    return this.getNumberAttribute('graceful_update_delay');
  }

  // holdtime_timer - computed: true, optional: false, required: false
  public get holdtimeTimer() {
    return this.getNumberAttribute('holdtime_timer');
  }

  // ibgp_multipath - computed: true, optional: false, required: false
  public get ibgpMultipath() {
    return this.getStringAttribute('ibgp_multipath');
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

  // ignore_optional_capability - computed: true, optional: false, required: false
  public get ignoreOptionalCapability() {
    return this.getStringAttribute('ignore_optional_capability');
  }

  // keepalive_timer - computed: true, optional: false, required: false
  public get keepaliveTimer() {
    return this.getNumberAttribute('keepalive_timer');
  }

  // log_neighbour_changes - computed: true, optional: false, required: false
  public get logNeighbourChanges() {
    return this.getStringAttribute('log_neighbour_changes');
  }

  // multipath_recursive_distance - computed: true, optional: false, required: false
  public get multipathRecursiveDistance() {
    return this.getStringAttribute('multipath_recursive_distance');
  }

  // neighbor - computed: true, optional: false, required: false
  private _neighbor = new DataFortiosRouterBgpNeighborList(this, "neighbor", false);
  public get neighbor() {
    return this._neighbor;
  }

  // neighbor_group - computed: true, optional: false, required: false
  private _neighborGroup = new DataFortiosRouterBgpNeighborGroupList(this, "neighbor_group", false);
  public get neighborGroup() {
    return this._neighborGroup;
  }

  // neighbor_range - computed: true, optional: false, required: false
  private _neighborRange = new DataFortiosRouterBgpNeighborRangeList(this, "neighbor_range", false);
  public get neighborRange() {
    return this._neighborRange;
  }

  // neighbor_range6 - computed: true, optional: false, required: false
  private _neighborRange6 = new DataFortiosRouterBgpNeighborRange6List(this, "neighbor_range6", false);
  public get neighborRange6() {
    return this._neighborRange6;
  }

  // network - computed: true, optional: false, required: false
  private _network = new DataFortiosRouterBgpNetworkList(this, "network", false);
  public get network() {
    return this._network;
  }

  // network6 - computed: true, optional: false, required: false
  private _network6 = new DataFortiosRouterBgpNetwork6List(this, "network6", false);
  public get network6() {
    return this._network6;
  }

  // network_import_check - computed: true, optional: false, required: false
  public get networkImportCheck() {
    return this.getStringAttribute('network_import_check');
  }

  // recursive_inherit_priority - computed: true, optional: false, required: false
  public get recursiveInheritPriority() {
    return this.getStringAttribute('recursive_inherit_priority');
  }

  // recursive_next_hop - computed: true, optional: false, required: false
  public get recursiveNextHop() {
    return this.getStringAttribute('recursive_next_hop');
  }

  // redistribute - computed: true, optional: false, required: false
  private _redistribute = new DataFortiosRouterBgpRedistributeList(this, "redistribute", false);
  public get redistribute() {
    return this._redistribute;
  }

  // redistribute6 - computed: true, optional: false, required: false
  private _redistribute6 = new DataFortiosRouterBgpRedistribute6List(this, "redistribute6", false);
  public get redistribute6() {
    return this._redistribute6;
  }

  // router_id - computed: true, optional: false, required: false
  public get routerId() {
    return this.getStringAttribute('router_id');
  }

  // scan_time - computed: true, optional: false, required: false
  public get scanTime() {
    return this.getNumberAttribute('scan_time');
  }

  // synchronization - computed: true, optional: false, required: false
  public get synchronization() {
    return this.getStringAttribute('synchronization');
  }

  // tag_resolve_mode - computed: true, optional: false, required: false
  public get tagResolveMode() {
    return this.getStringAttribute('tag_resolve_mode');
  }

  // vdomparam - computed: false, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // vrf - computed: true, optional: false, required: false
  private _vrf = new DataFortiosRouterBgpVrfList(this, "vrf", false);
  public get vrf() {
    return this._vrf;
  }

  // vrf6 - computed: true, optional: false, required: false
  private _vrf6 = new DataFortiosRouterBgpVrf6List(this, "vrf6", false);
  public get vrf6() {
    return this._vrf6;
  }

  // vrf_leak - computed: true, optional: false, required: false
  private _vrfLeak = new DataFortiosRouterBgpVrfLeakList(this, "vrf_leak", false);
  public get vrfLeak() {
    return this._vrfLeak;
  }

  // vrf_leak6 - computed: true, optional: false, required: false
  private _vrfLeak6 = new DataFortiosRouterBgpVrfLeak6List(this, "vrf_leak6", false);
  public get vrfLeak6() {
    return this._vrfLeak6;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
