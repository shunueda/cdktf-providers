// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/router_bgp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiswitchRouterBgpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/router_bgp#id DataFortiswitchRouterBgp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataFortiswitchRouterBgpAdminDistance {
}

export function dataFortiswitchRouterBgpAdminDistanceToTerraform(struct?: DataFortiswitchRouterBgpAdminDistance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiswitchRouterBgpAdminDistanceToHclTerraform(struct?: DataFortiswitchRouterBgpAdminDistance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiswitchRouterBgpAdminDistanceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiswitchRouterBgpAdminDistance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiswitchRouterBgpAdminDistance | undefined) {
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

export class DataFortiswitchRouterBgpAdminDistanceList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiswitchRouterBgpAdminDistanceOutputReference {
    return new DataFortiswitchRouterBgpAdminDistanceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiswitchRouterBgpAdminDistance6 {
}

export function dataFortiswitchRouterBgpAdminDistance6ToTerraform(struct?: DataFortiswitchRouterBgpAdminDistance6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiswitchRouterBgpAdminDistance6ToHclTerraform(struct?: DataFortiswitchRouterBgpAdminDistance6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiswitchRouterBgpAdminDistance6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiswitchRouterBgpAdminDistance6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiswitchRouterBgpAdminDistance6 | undefined) {
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

  // neighbour_prefix6 - computed: true, optional: false, required: false
  public get neighbourPrefix6() {
    return this.getStringAttribute('neighbour_prefix6');
  }

  // route6_list - computed: true, optional: false, required: false
  public get route6List() {
    return this.getStringAttribute('route6_list');
  }
}

export class DataFortiswitchRouterBgpAdminDistance6List extends cdktf.ComplexList {

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
  public get(index: number): DataFortiswitchRouterBgpAdminDistance6OutputReference {
    return new DataFortiswitchRouterBgpAdminDistance6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiswitchRouterBgpAggregateAddress {
}

export function dataFortiswitchRouterBgpAggregateAddressToTerraform(struct?: DataFortiswitchRouterBgpAggregateAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiswitchRouterBgpAggregateAddressToHclTerraform(struct?: DataFortiswitchRouterBgpAggregateAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiswitchRouterBgpAggregateAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiswitchRouterBgpAggregateAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiswitchRouterBgpAggregateAddress | undefined) {
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

export class DataFortiswitchRouterBgpAggregateAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiswitchRouterBgpAggregateAddressOutputReference {
    return new DataFortiswitchRouterBgpAggregateAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiswitchRouterBgpAggregateAddress6 {
}

export function dataFortiswitchRouterBgpAggregateAddress6ToTerraform(struct?: DataFortiswitchRouterBgpAggregateAddress6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiswitchRouterBgpAggregateAddress6ToHclTerraform(struct?: DataFortiswitchRouterBgpAggregateAddress6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiswitchRouterBgpAggregateAddress6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiswitchRouterBgpAggregateAddress6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiswitchRouterBgpAggregateAddress6 | undefined) {
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

  // prefix6 - computed: true, optional: false, required: false
  public get prefix6() {
    return this.getStringAttribute('prefix6');
  }

  // summary_only - computed: true, optional: false, required: false
  public get summaryOnly() {
    return this.getStringAttribute('summary_only');
  }
}

export class DataFortiswitchRouterBgpAggregateAddress6List extends cdktf.ComplexList {

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
  public get(index: number): DataFortiswitchRouterBgpAggregateAddress6OutputReference {
    return new DataFortiswitchRouterBgpAggregateAddress6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiswitchRouterBgpConfederationPeers {
}

export function dataFortiswitchRouterBgpConfederationPeersToTerraform(struct?: DataFortiswitchRouterBgpConfederationPeers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiswitchRouterBgpConfederationPeersToHclTerraform(struct?: DataFortiswitchRouterBgpConfederationPeers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiswitchRouterBgpConfederationPeersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiswitchRouterBgpConfederationPeers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiswitchRouterBgpConfederationPeers | undefined) {
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

export class DataFortiswitchRouterBgpConfederationPeersList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiswitchRouterBgpConfederationPeersOutputReference {
    return new DataFortiswitchRouterBgpConfederationPeersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiswitchRouterBgpNeighbor {
}

export function dataFortiswitchRouterBgpNeighborToTerraform(struct?: DataFortiswitchRouterBgpNeighbor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiswitchRouterBgpNeighborToHclTerraform(struct?: DataFortiswitchRouterBgpNeighbor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiswitchRouterBgpNeighborOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiswitchRouterBgpNeighbor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiswitchRouterBgpNeighbor | undefined) {
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

  // attribute_unchanged_evpn - computed: true, optional: false, required: false
  public get attributeUnchangedEvpn() {
    return this.getStringAttribute('attribute_unchanged_evpn');
  }

  // bfd - computed: true, optional: false, required: false
  public get bfd() {
    return this.getStringAttribute('bfd');
  }

  // bfd_session_mode - computed: true, optional: false, required: false
  public get bfdSessionMode() {
    return this.getStringAttribute('bfd_session_mode');
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

  // capability_extended_nexthop - computed: true, optional: false, required: false
  public get capabilityExtendedNexthop() {
    return this.getStringAttribute('capability_extended_nexthop');
  }

  // capability_orf - computed: true, optional: false, required: false
  public get capabilityOrf() {
    return this.getStringAttribute('capability_orf');
  }

  // capability_orf6 - computed: true, optional: false, required: false
  public get capabilityOrf6() {
    return this.getStringAttribute('capability_orf6');
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

  // distribute_list_out - computed: true, optional: false, required: false
  public get distributeListOut() {
    return this.getStringAttribute('distribute_list_out');
  }

  // distribute_list_out6 - computed: true, optional: false, required: false
  public get distributeListOut6() {
    return this.getStringAttribute('distribute_list_out6');
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

  // ebgp_ttl_security_hops - computed: true, optional: false, required: false
  public get ebgpTtlSecurityHops() {
    return this.getNumberAttribute('ebgp_ttl_security_hops');
  }

  // enforce_first_as - computed: true, optional: false, required: false
  public get enforceFirstAs() {
    return this.getStringAttribute('enforce_first_as');
  }

  // filter_list_in - computed: true, optional: false, required: false
  public get filterListIn() {
    return this.getStringAttribute('filter_list_in');
  }

  // filter_list_in6 - computed: true, optional: false, required: false
  public get filterListIn6() {
    return this.getStringAttribute('filter_list_in6');
  }

  // filter_list_out - computed: true, optional: false, required: false
  public get filterListOut() {
    return this.getStringAttribute('filter_list_out');
  }

  // filter_list_out6 - computed: true, optional: false, required: false
  public get filterListOut6() {
    return this.getStringAttribute('filter_list_out6');
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

  // maximum_prefix - computed: true, optional: false, required: false
  public get maximumPrefix() {
    return this.getNumberAttribute('maximum_prefix');
  }

  // maximum_prefix6 - computed: true, optional: false, required: false
  public get maximumPrefix6() {
    return this.getNumberAttribute('maximum_prefix6');
  }

  // maximum_prefix_threshold - computed: true, optional: false, required: false
  public get maximumPrefixThreshold() {
    return this.getNumberAttribute('maximum_prefix_threshold');
  }

  // maximum_prefix_threshold6 - computed: true, optional: false, required: false
  public get maximumPrefixThreshold6() {
    return this.getNumberAttribute('maximum_prefix_threshold6');
  }

  // maximum_prefix_warning_only - computed: true, optional: false, required: false
  public get maximumPrefixWarningOnly() {
    return this.getStringAttribute('maximum_prefix_warning_only');
  }

  // maximum_prefix_warning_only6 - computed: true, optional: false, required: false
  public get maximumPrefixWarningOnly6() {
    return this.getStringAttribute('maximum_prefix_warning_only6');
  }

  // next_hop_self - computed: true, optional: false, required: false
  public get nextHopSelf() {
    return this.getStringAttribute('next_hop_self');
  }

  // next_hop_self6 - computed: true, optional: false, required: false
  public get nextHopSelf6() {
    return this.getStringAttribute('next_hop_self6');
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

  // prefix_list_out - computed: true, optional: false, required: false
  public get prefixListOut() {
    return this.getStringAttribute('prefix_list_out');
  }

  // prefix_list_out6 - computed: true, optional: false, required: false
  public get prefixListOut6() {
    return this.getStringAttribute('prefix_list_out6');
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

  // route_map_out - computed: true, optional: false, required: false
  public get routeMapOut() {
    return this.getStringAttribute('route_map_out');
  }

  // route_map_out6 - computed: true, optional: false, required: false
  public get routeMapOut6() {
    return this.getStringAttribute('route_map_out6');
  }

  // route_map_out_evpn - computed: true, optional: false, required: false
  public get routeMapOutEvpn() {
    return this.getStringAttribute('route_map_out_evpn');
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

  // route_server_client - computed: true, optional: false, required: false
  public get routeServerClient() {
    return this.getStringAttribute('route_server_client');
  }

  // route_server_client6 - computed: true, optional: false, required: false
  public get routeServerClient6() {
    return this.getStringAttribute('route_server_client6');
  }

  // send_community - computed: true, optional: false, required: false
  public get sendCommunity() {
    return this.getStringAttribute('send_community');
  }

  // send_community6 - computed: true, optional: false, required: false
  public get sendCommunity6() {
    return this.getStringAttribute('send_community6');
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

export class DataFortiswitchRouterBgpNeighborList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiswitchRouterBgpNeighborOutputReference {
    return new DataFortiswitchRouterBgpNeighborOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiswitchRouterBgpNeighborGroupInterface {
}

export function dataFortiswitchRouterBgpNeighborGroupInterfaceToTerraform(struct?: DataFortiswitchRouterBgpNeighborGroupInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiswitchRouterBgpNeighborGroupInterfaceToHclTerraform(struct?: DataFortiswitchRouterBgpNeighborGroupInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiswitchRouterBgpNeighborGroupInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiswitchRouterBgpNeighborGroupInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiswitchRouterBgpNeighborGroupInterface | undefined) {
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
}

export class DataFortiswitchRouterBgpNeighborGroupInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiswitchRouterBgpNeighborGroupInterfaceOutputReference {
    return new DataFortiswitchRouterBgpNeighborGroupInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiswitchRouterBgpNeighborGroup {
}

export function dataFortiswitchRouterBgpNeighborGroupToTerraform(struct?: DataFortiswitchRouterBgpNeighborGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiswitchRouterBgpNeighborGroupToHclTerraform(struct?: DataFortiswitchRouterBgpNeighborGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiswitchRouterBgpNeighborGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiswitchRouterBgpNeighborGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiswitchRouterBgpNeighborGroup | undefined) {
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

  // attribute_unchanged_evpn - computed: true, optional: false, required: false
  public get attributeUnchangedEvpn() {
    return this.getStringAttribute('attribute_unchanged_evpn');
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

  // capability_extended_nexthop - computed: true, optional: false, required: false
  public get capabilityExtendedNexthop() {
    return this.getStringAttribute('capability_extended_nexthop');
  }

  // capability_orf - computed: true, optional: false, required: false
  public get capabilityOrf() {
    return this.getStringAttribute('capability_orf');
  }

  // capability_orf6 - computed: true, optional: false, required: false
  public get capabilityOrf6() {
    return this.getStringAttribute('capability_orf6');
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

  // distribute_list_out - computed: true, optional: false, required: false
  public get distributeListOut() {
    return this.getStringAttribute('distribute_list_out');
  }

  // distribute_list_out6 - computed: true, optional: false, required: false
  public get distributeListOut6() {
    return this.getStringAttribute('distribute_list_out6');
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

  // ebgp_ttl_security_hops - computed: true, optional: false, required: false
  public get ebgpTtlSecurityHops() {
    return this.getNumberAttribute('ebgp_ttl_security_hops');
  }

  // enforce_first_as - computed: true, optional: false, required: false
  public get enforceFirstAs() {
    return this.getStringAttribute('enforce_first_as');
  }

  // filter_list_in - computed: true, optional: false, required: false
  public get filterListIn() {
    return this.getStringAttribute('filter_list_in');
  }

  // filter_list_in6 - computed: true, optional: false, required: false
  public get filterListIn6() {
    return this.getStringAttribute('filter_list_in6');
  }

  // filter_list_out - computed: true, optional: false, required: false
  public get filterListOut() {
    return this.getStringAttribute('filter_list_out');
  }

  // filter_list_out6 - computed: true, optional: false, required: false
  public get filterListOut6() {
    return this.getStringAttribute('filter_list_out6');
  }

  // holdtime_timer - computed: true, optional: false, required: false
  public get holdtimeTimer() {
    return this.getNumberAttribute('holdtime_timer');
  }

  // interface - computed: true, optional: false, required: false
  private _interface = new DataFortiswitchRouterBgpNeighborGroupInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }

  // keep_alive_timer - computed: true, optional: false, required: false
  public get keepAliveTimer() {
    return this.getNumberAttribute('keep_alive_timer');
  }

  // maximum_prefix - computed: true, optional: false, required: false
  public get maximumPrefix() {
    return this.getNumberAttribute('maximum_prefix');
  }

  // maximum_prefix6 - computed: true, optional: false, required: false
  public get maximumPrefix6() {
    return this.getNumberAttribute('maximum_prefix6');
  }

  // maximum_prefix_threshold - computed: true, optional: false, required: false
  public get maximumPrefixThreshold() {
    return this.getNumberAttribute('maximum_prefix_threshold');
  }

  // maximum_prefix_threshold6 - computed: true, optional: false, required: false
  public get maximumPrefixThreshold6() {
    return this.getNumberAttribute('maximum_prefix_threshold6');
  }

  // maximum_prefix_warning_only - computed: true, optional: false, required: false
  public get maximumPrefixWarningOnly() {
    return this.getStringAttribute('maximum_prefix_warning_only');
  }

  // maximum_prefix_warning_only6 - computed: true, optional: false, required: false
  public get maximumPrefixWarningOnly6() {
    return this.getStringAttribute('maximum_prefix_warning_only6');
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

  // prefix_list_out - computed: true, optional: false, required: false
  public get prefixListOut() {
    return this.getStringAttribute('prefix_list_out');
  }

  // prefix_list_out6 - computed: true, optional: false, required: false
  public get prefixListOut6() {
    return this.getStringAttribute('prefix_list_out6');
  }

  // remote_as - computed: true, optional: false, required: false
  public get remoteAs() {
    return this.getStringAttribute('remote_as');
  }

  // remove_private_as - computed: true, optional: false, required: false
  public get removePrivateAs() {
    return this.getStringAttribute('remove_private_as');
  }

  // remove_private_as6 - computed: true, optional: false, required: false
  public get removePrivateAs6() {
    return this.getStringAttribute('remove_private_as6');
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

  // route_map_out - computed: true, optional: false, required: false
  public get routeMapOut() {
    return this.getStringAttribute('route_map_out');
  }

  // route_map_out6 - computed: true, optional: false, required: false
  public get routeMapOut6() {
    return this.getStringAttribute('route_map_out6');
  }

  // route_map_out_evpn - computed: true, optional: false, required: false
  public get routeMapOutEvpn() {
    return this.getStringAttribute('route_map_out_evpn');
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

  // route_server_client - computed: true, optional: false, required: false
  public get routeServerClient() {
    return this.getStringAttribute('route_server_client');
  }

  // route_server_client6 - computed: true, optional: false, required: false
  public get routeServerClient6() {
    return this.getStringAttribute('route_server_client6');
  }

  // send_community - computed: true, optional: false, required: false
  public get sendCommunity() {
    return this.getStringAttribute('send_community');
  }

  // send_community6 - computed: true, optional: false, required: false
  public get sendCommunity6() {
    return this.getStringAttribute('send_community6');
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

export class DataFortiswitchRouterBgpNeighborGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiswitchRouterBgpNeighborGroupOutputReference {
    return new DataFortiswitchRouterBgpNeighborGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiswitchRouterBgpNetwork {
}

export function dataFortiswitchRouterBgpNetworkToTerraform(struct?: DataFortiswitchRouterBgpNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiswitchRouterBgpNetworkToHclTerraform(struct?: DataFortiswitchRouterBgpNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiswitchRouterBgpNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiswitchRouterBgpNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiswitchRouterBgpNetwork | undefined) {
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

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // route_map - computed: true, optional: false, required: false
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
}

export class DataFortiswitchRouterBgpNetworkList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiswitchRouterBgpNetworkOutputReference {
    return new DataFortiswitchRouterBgpNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiswitchRouterBgpNetwork6 {
}

export function dataFortiswitchRouterBgpNetwork6ToTerraform(struct?: DataFortiswitchRouterBgpNetwork6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiswitchRouterBgpNetwork6ToHclTerraform(struct?: DataFortiswitchRouterBgpNetwork6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiswitchRouterBgpNetwork6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiswitchRouterBgpNetwork6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiswitchRouterBgpNetwork6 | undefined) {
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

  // prefix6 - computed: true, optional: false, required: false
  public get prefix6() {
    return this.getStringAttribute('prefix6');
  }

  // route_map - computed: true, optional: false, required: false
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
}

export class DataFortiswitchRouterBgpNetwork6List extends cdktf.ComplexList {

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
  public get(index: number): DataFortiswitchRouterBgpNetwork6OutputReference {
    return new DataFortiswitchRouterBgpNetwork6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiswitchRouterBgpRedistribute {
}

export function dataFortiswitchRouterBgpRedistributeToTerraform(struct?: DataFortiswitchRouterBgpRedistribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiswitchRouterBgpRedistributeToHclTerraform(struct?: DataFortiswitchRouterBgpRedistribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiswitchRouterBgpRedistributeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiswitchRouterBgpRedistribute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiswitchRouterBgpRedistribute | undefined) {
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

export class DataFortiswitchRouterBgpRedistributeList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiswitchRouterBgpRedistributeOutputReference {
    return new DataFortiswitchRouterBgpRedistributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiswitchRouterBgpRedistribute6 {
}

export function dataFortiswitchRouterBgpRedistribute6ToTerraform(struct?: DataFortiswitchRouterBgpRedistribute6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiswitchRouterBgpRedistribute6ToHclTerraform(struct?: DataFortiswitchRouterBgpRedistribute6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiswitchRouterBgpRedistribute6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiswitchRouterBgpRedistribute6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiswitchRouterBgpRedistribute6 | undefined) {
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

export class DataFortiswitchRouterBgpRedistribute6List extends cdktf.ComplexList {

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
  public get(index: number): DataFortiswitchRouterBgpRedistribute6OutputReference {
    return new DataFortiswitchRouterBgpRedistribute6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/router_bgp fortiswitch_router_bgp}
*/
export class DataFortiswitchRouterBgp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_router_bgp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiswitchRouterBgp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiswitchRouterBgp to import
  * @param importFromId The id of the existing DataFortiswitchRouterBgp that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/router_bgp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiswitchRouterBgp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_router_bgp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/router_bgp fortiswitch_router_bgp} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiswitchRouterBgpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataFortiswitchRouterBgpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_router_bgp',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6',
        providerVersionConstraint: '1.1.6'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_distance - computed: true, optional: false, required: false
  private _adminDistance = new DataFortiswitchRouterBgpAdminDistanceList(this, "admin_distance", false);
  public get adminDistance() {
    return this._adminDistance;
  }

  // admin_distance6 - computed: true, optional: false, required: false
  private _adminDistance6 = new DataFortiswitchRouterBgpAdminDistance6List(this, "admin_distance6", false);
  public get adminDistance6() {
    return this._adminDistance6;
  }

  // aggregate_address - computed: true, optional: false, required: false
  private _aggregateAddress = new DataFortiswitchRouterBgpAggregateAddressList(this, "aggregate_address", false);
  public get aggregateAddress() {
    return this._aggregateAddress;
  }

  // aggregate_address6 - computed: true, optional: false, required: false
  private _aggregateAddress6 = new DataFortiswitchRouterBgpAggregateAddress6List(this, "aggregate_address6", false);
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

  // bestpath_as_path_ignore - computed: true, optional: false, required: false
  public get bestpathAsPathIgnore() {
    return this.getStringAttribute('bestpath_as_path_ignore');
  }

  // bestpath_aspath_multipath_relax - computed: true, optional: false, required: false
  public get bestpathAspathMultipathRelax() {
    return this.getStringAttribute('bestpath_aspath_multipath_relax');
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
  private _confederationPeers = new DataFortiswitchRouterBgpConfederationPeersList(this, "confederation_peers", false);
  public get confederationPeers() {
    return this._confederationPeers;
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

  // dampening_suppress - computed: true, optional: false, required: false
  public get dampeningSuppress() {
    return this.getNumberAttribute('dampening_suppress');
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

  // ebgp_requires_policy - computed: true, optional: false, required: false
  public get ebgpRequiresPolicy() {
    return this.getStringAttribute('ebgp_requires_policy');
  }

  // enforce_first_as - computed: true, optional: false, required: false
  public get enforceFirstAs() {
    return this.getStringAttribute('enforce_first_as');
  }

  // fast_external_failover - computed: true, optional: false, required: false
  public get fastExternalFailover() {
    return this.getStringAttribute('fast_external_failover');
  }

  // graceful_stalepath_time - computed: true, optional: false, required: false
  public get gracefulStalepathTime() {
    return this.getNumberAttribute('graceful_stalepath_time');
  }

  // holdtime_timer - computed: true, optional: false, required: false
  public get holdtimeTimer() {
    return this.getNumberAttribute('holdtime_timer');
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

  // keepalive_timer - computed: true, optional: false, required: false
  public get keepaliveTimer() {
    return this.getNumberAttribute('keepalive_timer');
  }

  // log_neighbour_changes - computed: true, optional: false, required: false
  public get logNeighbourChanges() {
    return this.getStringAttribute('log_neighbour_changes');
  }

  // maximum_paths_ebgp - computed: true, optional: false, required: false
  public get maximumPathsEbgp() {
    return this.getNumberAttribute('maximum_paths_ebgp');
  }

  // maximum_paths_ibgp - computed: true, optional: false, required: false
  public get maximumPathsIbgp() {
    return this.getNumberAttribute('maximum_paths_ibgp');
  }

  // neighbor - computed: true, optional: false, required: false
  private _neighbor = new DataFortiswitchRouterBgpNeighborList(this, "neighbor", false);
  public get neighbor() {
    return this._neighbor;
  }

  // neighbor_group - computed: true, optional: false, required: false
  private _neighborGroup = new DataFortiswitchRouterBgpNeighborGroupList(this, "neighbor_group", false);
  public get neighborGroup() {
    return this._neighborGroup;
  }

  // network - computed: true, optional: false, required: false
  private _network = new DataFortiswitchRouterBgpNetworkList(this, "network", false);
  public get network() {
    return this._network;
  }

  // network6 - computed: true, optional: false, required: false
  private _network6 = new DataFortiswitchRouterBgpNetwork6List(this, "network6", false);
  public get network6() {
    return this._network6;
  }

  // redistribute - computed: true, optional: false, required: false
  private _redistribute = new DataFortiswitchRouterBgpRedistributeList(this, "redistribute", false);
  public get redistribute() {
    return this._redistribute;
  }

  // redistribute6 - computed: true, optional: false, required: false
  private _redistribute6 = new DataFortiswitchRouterBgpRedistribute6List(this, "redistribute6", false);
  public get redistribute6() {
    return this._redistribute6;
  }

  // route_reflector_allow_outbound_policy - computed: true, optional: false, required: false
  public get routeReflectorAllowOutboundPolicy() {
    return this.getStringAttribute('route_reflector_allow_outbound_policy');
  }

  // router_id - computed: true, optional: false, required: false
  public get routerId() {
    return this.getStringAttribute('router_id');
  }

  // scan_time - computed: true, optional: false, required: false
  public get scanTime() {
    return this.getNumberAttribute('scan_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
