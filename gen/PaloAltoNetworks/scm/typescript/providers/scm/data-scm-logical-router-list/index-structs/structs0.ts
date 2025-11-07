import * as cdktf from 'cdktf';
export interface DataScmLogicalRouterListDataVrfAdminDists {
}

export function dataScmLogicalRouterListDataVrfAdminDistsToTerraform(struct?: DataScmLogicalRouterListDataVrfAdminDists): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfAdminDistsToHclTerraform(struct?: DataScmLogicalRouterListDataVrfAdminDists): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfAdminDistsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfAdminDists | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfAdminDists | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bgp_external - computed: true, optional: false, required: false
  public get bgpExternal() {
    return this.getNumberAttribute('bgp_external');
  }

  // bgp_internal - computed: true, optional: false, required: false
  public get bgpInternal() {
    return this.getNumberAttribute('bgp_internal');
  }

  // bgp_local - computed: true, optional: false, required: false
  public get bgpLocal() {
    return this.getNumberAttribute('bgp_local');
  }

  // ospf_ext - computed: true, optional: false, required: false
  public get ospfExt() {
    return this.getNumberAttribute('ospf_ext');
  }

  // ospf_inter - computed: true, optional: false, required: false
  public get ospfInter() {
    return this.getNumberAttribute('ospf_inter');
  }

  // ospf_intra - computed: true, optional: false, required: false
  public get ospfIntra() {
    return this.getNumberAttribute('ospf_intra');
  }

  // ospfv3_ext - computed: true, optional: false, required: false
  public get ospfv3Ext() {
    return this.getNumberAttribute('ospfv3_ext');
  }

  // ospfv3_inter - computed: true, optional: false, required: false
  public get ospfv3Inter() {
    return this.getNumberAttribute('ospfv3_inter');
  }

  // ospfv3_intra - computed: true, optional: false, required: false
  public get ospfv3Intra() {
    return this.getNumberAttribute('ospfv3_intra');
  }

  // rip - computed: true, optional: false, required: false
  public get rip() {
    return this.getNumberAttribute('rip');
  }

  // static - computed: true, optional: false, required: false
  public get static() {
    return this.getNumberAttribute('static');
  }

  // static_ipv6 - computed: true, optional: false, required: false
  public get staticIpv6() {
    return this.getNumberAttribute('static_ipv6');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpAdvertiseNetworkIpv4Network {
}

export function dataScmLogicalRouterListDataVrfBgpAdvertiseNetworkIpv4NetworkToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpAdvertiseNetworkIpv4Network): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpAdvertiseNetworkIpv4NetworkToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpAdvertiseNetworkIpv4Network): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpAdvertiseNetworkIpv4NetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpAdvertiseNetworkIpv4Network | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpAdvertiseNetworkIpv4Network | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backdoor - computed: true, optional: false, required: false
  public get backdoor() {
    return this.getBooleanAttribute('backdoor');
  }

  // multicast - computed: true, optional: false, required: false
  public get multicast() {
    return this.getBooleanAttribute('multicast');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // unicast - computed: true, optional: false, required: false
  public get unicast() {
    return this.getBooleanAttribute('unicast');
  }
}

export class DataScmLogicalRouterListDataVrfBgpAdvertiseNetworkIpv4NetworkList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfBgpAdvertiseNetworkIpv4NetworkOutputReference {
    return new DataScmLogicalRouterListDataVrfBgpAdvertiseNetworkIpv4NetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfBgpAdvertiseNetworkIpv4 {
}

export function dataScmLogicalRouterListDataVrfBgpAdvertiseNetworkIpv4ToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpAdvertiseNetworkIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpAdvertiseNetworkIpv4ToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpAdvertiseNetworkIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpAdvertiseNetworkIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpAdvertiseNetworkIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpAdvertiseNetworkIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // network - computed: true, optional: false, required: false
  private _network = new DataScmLogicalRouterListDataVrfBgpAdvertiseNetworkIpv4NetworkList(this, "network", false);
  public get network() {
    return this._network;
  }
}
export interface DataScmLogicalRouterListDataVrfBgpAdvertiseNetworkIpv6Network {
}

export function dataScmLogicalRouterListDataVrfBgpAdvertiseNetworkIpv6NetworkToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpAdvertiseNetworkIpv6Network): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpAdvertiseNetworkIpv6NetworkToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpAdvertiseNetworkIpv6Network): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpAdvertiseNetworkIpv6NetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpAdvertiseNetworkIpv6Network | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpAdvertiseNetworkIpv6Network | undefined) {
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

  // unicast - computed: true, optional: false, required: false
  public get unicast() {
    return this.getBooleanAttribute('unicast');
  }
}

export class DataScmLogicalRouterListDataVrfBgpAdvertiseNetworkIpv6NetworkList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfBgpAdvertiseNetworkIpv6NetworkOutputReference {
    return new DataScmLogicalRouterListDataVrfBgpAdvertiseNetworkIpv6NetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfBgpAdvertiseNetworkIpv6 {
}

export function dataScmLogicalRouterListDataVrfBgpAdvertiseNetworkIpv6ToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpAdvertiseNetworkIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpAdvertiseNetworkIpv6ToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpAdvertiseNetworkIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpAdvertiseNetworkIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpAdvertiseNetworkIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpAdvertiseNetworkIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // network - computed: true, optional: false, required: false
  private _network = new DataScmLogicalRouterListDataVrfBgpAdvertiseNetworkIpv6NetworkList(this, "network", false);
  public get network() {
    return this._network;
  }
}
export interface DataScmLogicalRouterListDataVrfBgpAdvertiseNetwork {
}

export function dataScmLogicalRouterListDataVrfBgpAdvertiseNetworkToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpAdvertiseNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpAdvertiseNetworkToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpAdvertiseNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpAdvertiseNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpAdvertiseNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpAdvertiseNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataScmLogicalRouterListDataVrfBgpAdvertiseNetworkIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataScmLogicalRouterListDataVrfBgpAdvertiseNetworkIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
}
export interface DataScmLogicalRouterListDataVrfBgpAggregate {
}

export function dataScmLogicalRouterListDataVrfBgpAggregateToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpAggregate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpAggregateToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpAggregate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpAggregateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpAggregate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpAggregate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregate_med - computed: true, optional: false, required: false
  public get aggregateMed() {
    return this.getBooleanAttribute('aggregate_med');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpAggregateRoutesTypeIpv4 {
}

export function dataScmLogicalRouterListDataVrfBgpAggregateRoutesTypeIpv4ToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpAggregateRoutesTypeIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpAggregateRoutesTypeIpv4ToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpAggregateRoutesTypeIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpAggregateRoutesTypeIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpAggregateRoutesTypeIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpAggregateRoutesTypeIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_map - computed: true, optional: false, required: false
  public get attributeMap() {
    return this.getStringAttribute('attribute_map');
  }

  // summary_prefix - computed: true, optional: false, required: false
  public get summaryPrefix() {
    return this.getStringAttribute('summary_prefix');
  }

  // suppress_map - computed: true, optional: false, required: false
  public get suppressMap() {
    return this.getStringAttribute('suppress_map');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpAggregateRoutesTypeIpv6 {
}

export function dataScmLogicalRouterListDataVrfBgpAggregateRoutesTypeIpv6ToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpAggregateRoutesTypeIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpAggregateRoutesTypeIpv6ToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpAggregateRoutesTypeIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpAggregateRoutesTypeIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpAggregateRoutesTypeIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpAggregateRoutesTypeIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_map - computed: true, optional: false, required: false
  public get attributeMap() {
    return this.getStringAttribute('attribute_map');
  }

  // summary_prefix - computed: true, optional: false, required: false
  public get summaryPrefix() {
    return this.getStringAttribute('summary_prefix');
  }

  // suppress_map - computed: true, optional: false, required: false
  public get suppressMap() {
    return this.getStringAttribute('suppress_map');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpAggregateRoutesType {
}

export function dataScmLogicalRouterListDataVrfBgpAggregateRoutesTypeToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpAggregateRoutesType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpAggregateRoutesTypeToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpAggregateRoutesType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpAggregateRoutesTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpAggregateRoutesType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpAggregateRoutesType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataScmLogicalRouterListDataVrfBgpAggregateRoutesTypeIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataScmLogicalRouterListDataVrfBgpAggregateRoutesTypeIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
}
export interface DataScmLogicalRouterListDataVrfBgpAggregateRoutes {
}

export function dataScmLogicalRouterListDataVrfBgpAggregateRoutesToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpAggregateRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpAggregateRoutesToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpAggregateRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpAggregateRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpAggregateRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpAggregateRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // as_set - computed: true, optional: false, required: false
  public get asSet() {
    return this.getBooleanAttribute('as_set');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // same_med - computed: true, optional: false, required: false
  public get sameMed() {
    return this.getBooleanAttribute('same_med');
  }

  // summary_only - computed: true, optional: false, required: false
  public get summaryOnly() {
    return this.getBooleanAttribute('summary_only');
  }

  // type - computed: true, optional: false, required: false
  private _type = new DataScmLogicalRouterListDataVrfBgpAggregateRoutesTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
}

export class DataScmLogicalRouterListDataVrfBgpAggregateRoutesList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfBgpAggregateRoutesOutputReference {
    return new DataScmLogicalRouterListDataVrfBgpAggregateRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfBgpGlobalBfd {
}

export function dataScmLogicalRouterListDataVrfBgpGlobalBfdToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpGlobalBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpGlobalBfdToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpGlobalBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpGlobalBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpGlobalBfd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpGlobalBfd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // profile - computed: true, optional: false, required: false
  public get profile() {
    return this.getStringAttribute('profile');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpGracefulRestart {
}

export function dataScmLogicalRouterListDataVrfBgpGracefulRestartToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpGracefulRestart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpGracefulRestartToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpGracefulRestart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpGracefulRestartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpGracefulRestart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpGracefulRestart | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // local_restart_time - computed: true, optional: false, required: false
  public get localRestartTime() {
    return this.getNumberAttribute('local_restart_time');
  }

  // max_peer_restart_time - computed: true, optional: false, required: false
  public get maxPeerRestartTime() {
    return this.getNumberAttribute('max_peer_restart_time');
  }

  // stale_route_time - computed: true, optional: false, required: false
  public get staleRouteTime() {
    return this.getNumberAttribute('stale_route_time');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpMed {
}

export function dataScmLogicalRouterListDataVrfBgpMedToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpMed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpMedToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpMed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpMedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpMed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpMed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // always_compare_med - computed: true, optional: false, required: false
  public get alwaysCompareMed() {
    return this.getBooleanAttribute('always_compare_med');
  }

  // deterministic_med_comparison - computed: true, optional: false, required: false
  public get deterministicMedComparison() {
    return this.getBooleanAttribute('deterministic_med_comparison');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPeerGroupAddressFamily {
}

export function dataScmLogicalRouterListDataVrfBgpPeerGroupAddressFamilyToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupAddressFamily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPeerGroupAddressFamilyToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupAddressFamily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPeerGroupAddressFamilyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPeerGroupAddressFamily | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPeerGroupAddressFamily | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPeerGroupConnectionOptions {
}

export function dataScmLogicalRouterListDataVrfBgpPeerGroupConnectionOptionsToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupConnectionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPeerGroupConnectionOptionsToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupConnectionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPeerGroupConnectionOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPeerGroupConnectionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPeerGroupConnectionOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication - computed: true, optional: false, required: false
  public get authentication() {
    return this.getStringAttribute('authentication');
  }

  // dampening - computed: true, optional: false, required: false
  public get dampening() {
    return this.getStringAttribute('dampening');
  }

  // multihop - computed: true, optional: false, required: false
  public get multihop() {
    return this.getNumberAttribute('multihop');
  }

  // timers - computed: true, optional: false, required: false
  public get timers() {
    return this.getStringAttribute('timers');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPeerGroupFilteringProfile {
}

export function dataScmLogicalRouterListDataVrfBgpPeerGroupFilteringProfileToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupFilteringProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPeerGroupFilteringProfileToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupFilteringProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPeerGroupFilteringProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPeerGroupFilteringProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPeerGroupFilteringProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPeerGroupPeerBfdMultihop {
}

export function dataScmLogicalRouterListDataVrfBgpPeerGroupPeerBfdMultihopToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupPeerBfdMultihop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPeerGroupPeerBfdMultihopToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupPeerBfdMultihop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPeerGroupPeerBfdMultihopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPeerGroupPeerBfdMultihop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPeerGroupPeerBfdMultihop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // min_received_ttl - computed: true, optional: false, required: false
  public get minReceivedTtl() {
    return this.getNumberAttribute('min_received_ttl');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPeerGroupPeerBfd {
}

export function dataScmLogicalRouterListDataVrfBgpPeerGroupPeerBfdToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupPeerBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPeerGroupPeerBfdToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupPeerBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPeerGroupPeerBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPeerGroupPeerBfd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPeerGroupPeerBfd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // multihop - computed: true, optional: false, required: false
  private _multihop = new DataScmLogicalRouterListDataVrfBgpPeerGroupPeerBfdMultihopOutputReference(this, "multihop");
  public get multihop() {
    return this._multihop;
  }

  // profile - computed: true, optional: false, required: false
  public get profile() {
    return this.getStringAttribute('profile');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPeerGroupPeerConnectionOptionsIncomingBgpConnection {
}

export function dataScmLogicalRouterListDataVrfBgpPeerGroupPeerConnectionOptionsIncomingBgpConnectionToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupPeerConnectionOptionsIncomingBgpConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPeerGroupPeerConnectionOptionsIncomingBgpConnectionToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupPeerConnectionOptionsIncomingBgpConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPeerGroupPeerConnectionOptionsIncomingBgpConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPeerGroupPeerConnectionOptionsIncomingBgpConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPeerGroupPeerConnectionOptionsIncomingBgpConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow - computed: true, optional: false, required: false
  public get allow() {
    return this.getBooleanAttribute('allow');
  }

  // remote_port - computed: true, optional: false, required: false
  public get remotePort() {
    return this.getNumberAttribute('remote_port');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPeerGroupPeerConnectionOptionsOutgoingBgpConnection {
}

export function dataScmLogicalRouterListDataVrfBgpPeerGroupPeerConnectionOptionsOutgoingBgpConnectionToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupPeerConnectionOptionsOutgoingBgpConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPeerGroupPeerConnectionOptionsOutgoingBgpConnectionToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupPeerConnectionOptionsOutgoingBgpConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPeerGroupPeerConnectionOptionsOutgoingBgpConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPeerGroupPeerConnectionOptionsOutgoingBgpConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPeerGroupPeerConnectionOptionsOutgoingBgpConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow - computed: true, optional: false, required: false
  public get allow() {
    return this.getBooleanAttribute('allow');
  }

  // local_port - computed: true, optional: false, required: false
  public get localPort() {
    return this.getNumberAttribute('local_port');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPeerGroupPeerConnectionOptions {
}

export function dataScmLogicalRouterListDataVrfBgpPeerGroupPeerConnectionOptionsToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupPeerConnectionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPeerGroupPeerConnectionOptionsToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupPeerConnectionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPeerGroupPeerConnectionOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPeerGroupPeerConnectionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPeerGroupPeerConnectionOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication - computed: true, optional: false, required: false
  public get authentication() {
    return this.getStringAttribute('authentication');
  }

  // dampening - computed: true, optional: false, required: false
  public get dampening() {
    return this.getStringAttribute('dampening');
  }

  // hold_time - computed: true, optional: false, required: false
  public get holdTime() {
    return this.getStringAttribute('hold_time');
  }

  // idle_hold_time - computed: true, optional: false, required: false
  public get idleHoldTime() {
    return this.getNumberAttribute('idle_hold_time');
  }

  // incoming_bgp_connection - computed: true, optional: false, required: false
  private _incomingBgpConnection = new DataScmLogicalRouterListDataVrfBgpPeerGroupPeerConnectionOptionsIncomingBgpConnectionOutputReference(this, "incoming_bgp_connection");
  public get incomingBgpConnection() {
    return this._incomingBgpConnection;
  }

  // keep_alive_interval - computed: true, optional: false, required: false
  public get keepAliveInterval() {
    return this.getStringAttribute('keep_alive_interval');
  }

  // max_prefixes - computed: true, optional: false, required: false
  public get maxPrefixes() {
    return this.getStringAttribute('max_prefixes');
  }

  // min_route_adv_interval - computed: true, optional: false, required: false
  public get minRouteAdvInterval() {
    return this.getNumberAttribute('min_route_adv_interval');
  }

  // multihop - computed: true, optional: false, required: false
  public get multihop() {
    return this.getStringAttribute('multihop');
  }

  // open_delay_time - computed: true, optional: false, required: false
  public get openDelayTime() {
    return this.getNumberAttribute('open_delay_time');
  }

  // outgoing_bgp_connection - computed: true, optional: false, required: false
  private _outgoingBgpConnection = new DataScmLogicalRouterListDataVrfBgpPeerGroupPeerConnectionOptionsOutgoingBgpConnectionOutputReference(this, "outgoing_bgp_connection");
  public get outgoingBgpConnection() {
    return this._outgoingBgpConnection;
  }

  // timers - computed: true, optional: false, required: false
  public get timers() {
    return this.getStringAttribute('timers');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPeerGroupPeerInheritNoAddressFamily {
}

export function dataScmLogicalRouterListDataVrfBgpPeerGroupPeerInheritNoAddressFamilyToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupPeerInheritNoAddressFamily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPeerGroupPeerInheritNoAddressFamilyToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupPeerInheritNoAddressFamily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPeerGroupPeerInheritNoAddressFamilyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPeerGroupPeerInheritNoAddressFamily | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPeerGroupPeerInheritNoAddressFamily | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPeerGroupPeerInheritNoFilteringProfile {
}

export function dataScmLogicalRouterListDataVrfBgpPeerGroupPeerInheritNoFilteringProfileToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupPeerInheritNoFilteringProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPeerGroupPeerInheritNoFilteringProfileToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupPeerInheritNoFilteringProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPeerGroupPeerInheritNoFilteringProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPeerGroupPeerInheritNoFilteringProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPeerGroupPeerInheritNoFilteringProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPeerGroupPeerInheritNo {
}

export function dataScmLogicalRouterListDataVrfBgpPeerGroupPeerInheritNoToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupPeerInheritNo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPeerGroupPeerInheritNoToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupPeerInheritNo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPeerGroupPeerInheritNoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPeerGroupPeerInheritNo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPeerGroupPeerInheritNo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_family - computed: true, optional: false, required: false
  private _addressFamily = new DataScmLogicalRouterListDataVrfBgpPeerGroupPeerInheritNoAddressFamilyOutputReference(this, "address_family");
  public get addressFamily() {
    return this._addressFamily;
  }

  // filtering_profile - computed: true, optional: false, required: false
  private _filteringProfile = new DataScmLogicalRouterListDataVrfBgpPeerGroupPeerInheritNoFilteringProfileOutputReference(this, "filtering_profile");
  public get filteringProfile() {
    return this._filteringProfile;
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPeerGroupPeerInheritYes {
}

export function dataScmLogicalRouterListDataVrfBgpPeerGroupPeerInheritYesToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupPeerInheritYes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPeerGroupPeerInheritYesToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupPeerInheritYes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPeerGroupPeerInheritYesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPeerGroupPeerInheritYes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPeerGroupPeerInheritYes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPeerGroupPeerInherit {
}

export function dataScmLogicalRouterListDataVrfBgpPeerGroupPeerInheritToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupPeerInherit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPeerGroupPeerInheritToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupPeerInherit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPeerGroupPeerInheritOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPeerGroupPeerInherit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPeerGroupPeerInherit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // no - computed: true, optional: false, required: false
  private _no = new DataScmLogicalRouterListDataVrfBgpPeerGroupPeerInheritNoOutputReference(this, "no");
  public get no() {
    return this._no;
  }

  // yes - computed: true, optional: false, required: false
  private _yes = new DataScmLogicalRouterListDataVrfBgpPeerGroupPeerInheritYesOutputReference(this, "yes");
  public get yes() {
    return this._yes;
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPeerGroupPeerLocalAddress {
}

export function dataScmLogicalRouterListDataVrfBgpPeerGroupPeerLocalAddressToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupPeerLocalAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPeerGroupPeerLocalAddressToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupPeerLocalAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPeerGroupPeerLocalAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPeerGroupPeerLocalAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPeerGroupPeerLocalAddress | undefined) {
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

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPeerGroupPeerPeerAddress {
}

export function dataScmLogicalRouterListDataVrfBgpPeerGroupPeerPeerAddressToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupPeerPeerAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPeerGroupPeerPeerAddressToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupPeerPeerAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPeerGroupPeerPeerAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPeerGroupPeerPeerAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPeerGroupPeerPeerAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPeerGroupPeerSubsequentAddressFamilyIdentifier {
}

export function dataScmLogicalRouterListDataVrfBgpPeerGroupPeerSubsequentAddressFamilyIdentifierToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupPeerSubsequentAddressFamilyIdentifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPeerGroupPeerSubsequentAddressFamilyIdentifierToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupPeerSubsequentAddressFamilyIdentifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPeerGroupPeerSubsequentAddressFamilyIdentifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPeerGroupPeerSubsequentAddressFamilyIdentifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPeerGroupPeerSubsequentAddressFamilyIdentifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // multicast - computed: true, optional: false, required: false
  public get multicast() {
    return this.getBooleanAttribute('multicast');
  }

  // unicast - computed: true, optional: false, required: false
  public get unicast() {
    return this.getBooleanAttribute('unicast');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPeerGroupPeer {
}

export function dataScmLogicalRouterListDataVrfBgpPeerGroupPeerToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupPeer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPeerGroupPeerToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupPeer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPeerGroupPeerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPeerGroupPeer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPeerGroupPeer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bfd - computed: true, optional: false, required: false
  private _bfd = new DataScmLogicalRouterListDataVrfBgpPeerGroupPeerBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }

  // connection_options - computed: true, optional: false, required: false
  private _connectionOptions = new DataScmLogicalRouterListDataVrfBgpPeerGroupPeerConnectionOptionsOutputReference(this, "connection_options");
  public get connectionOptions() {
    return this._connectionOptions;
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // enable_mp_bgp - computed: true, optional: false, required: false
  public get enableMpBgp() {
    return this.getBooleanAttribute('enable_mp_bgp');
  }

  // enable_sender_side_loop_detection - computed: true, optional: false, required: false
  public get enableSenderSideLoopDetection() {
    return this.getBooleanAttribute('enable_sender_side_loop_detection');
  }

  // inherit - computed: true, optional: false, required: false
  private _inherit = new DataScmLogicalRouterListDataVrfBgpPeerGroupPeerInheritOutputReference(this, "inherit");
  public get inherit() {
    return this._inherit;
  }

  // local_address - computed: true, optional: false, required: false
  private _localAddress = new DataScmLogicalRouterListDataVrfBgpPeerGroupPeerLocalAddressOutputReference(this, "local_address");
  public get localAddress() {
    return this._localAddress;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // passive - computed: true, optional: false, required: false
  public get passive() {
    return this.getBooleanAttribute('passive');
  }

  // peer_address - computed: true, optional: false, required: false
  private _peerAddress = new DataScmLogicalRouterListDataVrfBgpPeerGroupPeerPeerAddressOutputReference(this, "peer_address");
  public get peerAddress() {
    return this._peerAddress;
  }

  // peer_as - computed: true, optional: false, required: false
  public get peerAs() {
    return this.getStringAttribute('peer_as');
  }

  // peering_type - computed: true, optional: false, required: false
  public get peeringType() {
    return this.getStringAttribute('peering_type');
  }

  // reflector_client - computed: true, optional: false, required: false
  public get reflectorClient() {
    return this.getStringAttribute('reflector_client');
  }

  // subsequent_address_family_identifier - computed: true, optional: false, required: false
  private _subsequentAddressFamilyIdentifier = new DataScmLogicalRouterListDataVrfBgpPeerGroupPeerSubsequentAddressFamilyIdentifierOutputReference(this, "subsequent_address_family_identifier");
  public get subsequentAddressFamilyIdentifier() {
    return this._subsequentAddressFamilyIdentifier;
  }
}

export class DataScmLogicalRouterListDataVrfBgpPeerGroupPeerList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfBgpPeerGroupPeerOutputReference {
    return new DataScmLogicalRouterListDataVrfBgpPeerGroupPeerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPeerGroupTypeEbgp {
}

export function dataScmLogicalRouterListDataVrfBgpPeerGroupTypeEbgpToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupTypeEbgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPeerGroupTypeEbgpToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupTypeEbgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPeerGroupTypeEbgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPeerGroupTypeEbgp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPeerGroupTypeEbgp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // export_nexthop - computed: true, optional: false, required: false
  public get exportNexthop() {
    return this.getStringAttribute('export_nexthop');
  }

  // import_nexthop - computed: true, optional: false, required: false
  public get importNexthop() {
    return this.getStringAttribute('import_nexthop');
  }

  // remove_private_as - computed: true, optional: false, required: false
  public get removePrivateAs() {
    return this.getBooleanAttribute('remove_private_as');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPeerGroupTypeEbgpConfed {
}

export function dataScmLogicalRouterListDataVrfBgpPeerGroupTypeEbgpConfedToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupTypeEbgpConfed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPeerGroupTypeEbgpConfedToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupTypeEbgpConfed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPeerGroupTypeEbgpConfedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPeerGroupTypeEbgpConfed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPeerGroupTypeEbgpConfed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // export_nexthop - computed: true, optional: false, required: false
  public get exportNexthop() {
    return this.getStringAttribute('export_nexthop');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPeerGroupTypeIbgp {
}

export function dataScmLogicalRouterListDataVrfBgpPeerGroupTypeIbgpToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupTypeIbgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPeerGroupTypeIbgpToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupTypeIbgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPeerGroupTypeIbgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPeerGroupTypeIbgp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPeerGroupTypeIbgp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // export_nexthop - computed: true, optional: false, required: false
  public get exportNexthop() {
    return this.getStringAttribute('export_nexthop');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPeerGroupTypeIbgpConfed {
}

export function dataScmLogicalRouterListDataVrfBgpPeerGroupTypeIbgpConfedToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupTypeIbgpConfed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPeerGroupTypeIbgpConfedToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupTypeIbgpConfed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPeerGroupTypeIbgpConfedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPeerGroupTypeIbgpConfed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPeerGroupTypeIbgpConfed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // export_nexthop - computed: true, optional: false, required: false
  public get exportNexthop() {
    return this.getStringAttribute('export_nexthop');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPeerGroupType {
}

export function dataScmLogicalRouterListDataVrfBgpPeerGroupTypeToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPeerGroupTypeToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroupType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPeerGroupTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPeerGroupType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPeerGroupType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ebgp - computed: true, optional: false, required: false
  private _ebgp = new DataScmLogicalRouterListDataVrfBgpPeerGroupTypeEbgpOutputReference(this, "ebgp");
  public get ebgp() {
    return this._ebgp;
  }

  // ebgp_confed - computed: true, optional: false, required: false
  private _ebgpConfed = new DataScmLogicalRouterListDataVrfBgpPeerGroupTypeEbgpConfedOutputReference(this, "ebgp_confed");
  public get ebgpConfed() {
    return this._ebgpConfed;
  }

  // ibgp - computed: true, optional: false, required: false
  private _ibgp = new DataScmLogicalRouterListDataVrfBgpPeerGroupTypeIbgpOutputReference(this, "ibgp");
  public get ibgp() {
    return this._ibgp;
  }

  // ibgp_confed - computed: true, optional: false, required: false
  private _ibgpConfed = new DataScmLogicalRouterListDataVrfBgpPeerGroupTypeIbgpConfedOutputReference(this, "ibgp_confed");
  public get ibgpConfed() {
    return this._ibgpConfed;
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPeerGroup {
}

export function dataScmLogicalRouterListDataVrfBgpPeerGroupToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPeerGroupToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPeerGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPeerGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPeerGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPeerGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_family - computed: true, optional: false, required: false
  private _addressFamily = new DataScmLogicalRouterListDataVrfBgpPeerGroupAddressFamilyOutputReference(this, "address_family");
  public get addressFamily() {
    return this._addressFamily;
  }

  // aggregated_confed_as_path - computed: true, optional: false, required: false
  public get aggregatedConfedAsPath() {
    return this.getBooleanAttribute('aggregated_confed_as_path');
  }

  // connection_options - computed: true, optional: false, required: false
  private _connectionOptions = new DataScmLogicalRouterListDataVrfBgpPeerGroupConnectionOptionsOutputReference(this, "connection_options");
  public get connectionOptions() {
    return this._connectionOptions;
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // filtering_profile - computed: true, optional: false, required: false
  private _filteringProfile = new DataScmLogicalRouterListDataVrfBgpPeerGroupFilteringProfileOutputReference(this, "filtering_profile");
  public get filteringProfile() {
    return this._filteringProfile;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // peer - computed: true, optional: false, required: false
  private _peer = new DataScmLogicalRouterListDataVrfBgpPeerGroupPeerList(this, "peer", false);
  public get peer() {
    return this._peer;
  }

  // soft_reset_with_stored_info - computed: true, optional: false, required: false
  public get softResetWithStoredInfo() {
    return this.getBooleanAttribute('soft_reset_with_stored_info');
  }

  // type - computed: true, optional: false, required: false
  private _type = new DataScmLogicalRouterListDataVrfBgpPeerGroupTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
}

export class DataScmLogicalRouterListDataVrfBgpPeerGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfBgpPeerGroupOutputReference {
    return new DataScmLogicalRouterListDataVrfBgpPeerGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchAddressPrefix {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchAddressPrefixToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchAddressPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchAddressPrefixToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchAddressPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchAddressPrefixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchAddressPrefix | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchAddressPrefix | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchAddressPrefixList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchAddressPrefixOutputReference {
    return new DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchAddressPrefixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchAsPath {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchAsPathToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchAsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchAsPathToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchAsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchAsPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchAsPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchAsPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // regex - computed: true, optional: false, required: false
  public get regex() {
    return this.getStringAttribute('regex');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchCommunity {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchCommunityToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchCommunityToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchCommunity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // regex - computed: true, optional: false, required: false
  public get regex() {
    return this.getStringAttribute('regex');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchExtendedCommunity {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchExtendedCommunityToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchExtendedCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchExtendedCommunityToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchExtendedCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchExtendedCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchExtendedCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchExtendedCommunity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // regex - computed: true, optional: false, required: false
  public get regex() {
    return this.getStringAttribute('regex');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatch {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_prefix - computed: true, optional: false, required: false
  private _addressPrefix = new DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchAddressPrefixList(this, "address_prefix", false);
  public get addressPrefix() {
    return this._addressPrefix;
  }

  // afi - computed: true, optional: false, required: false
  public get afi() {
    return this.getStringAttribute('afi');
  }

  // as_path - computed: true, optional: false, required: false
  private _asPath = new DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchAsPathOutputReference(this, "as_path");
  public get asPath() {
    return this._asPath;
  }

  // community - computed: true, optional: false, required: false
  private _community = new DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchCommunityOutputReference(this, "community");
  public get community() {
    return this._community;
  }

  // extended_community - computed: true, optional: false, required: false
  private _extendedCommunity = new DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchExtendedCommunityOutputReference(this, "extended_community");
  public get extendedCommunity() {
    return this._extendedCommunity;
  }

  // from_peer - computed: true, optional: false, required: false
  public get fromPeer() {
    return this.getListAttribute('from_peer');
  }

  // med - computed: true, optional: false, required: false
  public get med() {
    return this.getNumberAttribute('med');
  }

  // nexthop - computed: true, optional: false, required: false
  public get nexthop() {
    return this.getListAttribute('nexthop');
  }

  // route_table - computed: true, optional: false, required: false
  public get routeTable() {
    return this.getStringAttribute('route_table');
  }

  // safi - computed: true, optional: false, required: false
  public get safi() {
    return this.getStringAttribute('safi');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFilters {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // match - computed: true, optional: false, required: false
  private _match = new DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersOutputReference {
    return new DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathNone {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathNoneToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathNoneToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathNone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathNone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathRemove {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathRemoveToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathRemove): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathRemoveToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathRemove): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathRemoveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathRemove | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathRemove | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPath {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // none - computed: true, optional: false, required: false
  private _none = new DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }

  // prepend - computed: true, optional: false, required: false
  public get prepend() {
    return this.getNumberAttribute('prepend');
  }

  // remove - computed: true, optional: false, required: false
  private _remove = new DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathRemoveOutputReference(this, "remove");
  public get remove() {
    return this._remove;
  }

  // remove_and_prepend - computed: true, optional: false, required: false
  public get removeAndPrepend() {
    return this.getNumberAttribute('remove_and_prepend');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityNone {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityNoneToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityNoneToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityNone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityNone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityRemoveAll {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityRemoveAllToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityRemoveAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityRemoveAllToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityRemoveAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityRemoveAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityRemoveAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityRemoveAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunity {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // append - computed: true, optional: false, required: false
  public get append() {
    return this.getListAttribute('append');
  }

  // none - computed: true, optional: false, required: false
  private _none = new DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }

  // overwrite - computed: true, optional: false, required: false
  public get overwrite() {
    return this.getListAttribute('overwrite');
  }

  // remove_all - computed: true, optional: false, required: false
  private _removeAll = new DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityRemoveAllOutputReference(this, "remove_all");
  public get removeAll() {
    return this._removeAll;
  }

  // remove_regex - computed: true, optional: false, required: false
  public get removeRegex() {
    return this.getStringAttribute('remove_regex');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityNone {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityNoneToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityNoneToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityNone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityNone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityRemoveAll {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityRemoveAllToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityRemoveAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityRemoveAllToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityRemoveAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityRemoveAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityRemoveAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityRemoveAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunity {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // append - computed: true, optional: false, required: false
  public get append() {
    return this.getListAttribute('append');
  }

  // none - computed: true, optional: false, required: false
  private _none = new DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }

  // overwrite - computed: true, optional: false, required: false
  public get overwrite() {
    return this.getListAttribute('overwrite');
  }

  // remove_all - computed: true, optional: false, required: false
  private _removeAll = new DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityRemoveAllOutputReference(this, "remove_all");
  public get removeAll() {
    return this._removeAll;
  }

  // remove_regex - computed: true, optional: false, required: false
  public get removeRegex() {
    return this.getStringAttribute('remove_regex');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributes {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // as_path - computed: true, optional: false, required: false
  private _asPath = new DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathOutputReference(this, "as_path");
  public get asPath() {
    return this._asPath;
  }

  // as_path_limit - computed: true, optional: false, required: false
  public get asPathLimit() {
    return this.getNumberAttribute('as_path_limit');
  }

  // community - computed: true, optional: false, required: false
  private _community = new DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityOutputReference(this, "community");
  public get community() {
    return this._community;
  }

  // extended_community - computed: true, optional: false, required: false
  private _extendedCommunity = new DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityOutputReference(this, "extended_community");
  public get extendedCommunity() {
    return this._extendedCommunity;
  }

  // local_preference - computed: true, optional: false, required: false
  public get localPreference() {
    return this.getNumberAttribute('local_preference');
  }

  // med - computed: true, optional: false, required: false
  public get med() {
    return this.getNumberAttribute('med');
  }

  // nexthop - computed: true, optional: false, required: false
  public get nexthop() {
    return this.getStringAttribute('nexthop');
  }

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return this.getStringAttribute('origin');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchAddressPrefix {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchAddressPrefixToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchAddressPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchAddressPrefixToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchAddressPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchAddressPrefixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchAddressPrefix | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchAddressPrefix | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchAddressPrefixList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchAddressPrefixOutputReference {
    return new DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchAddressPrefixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchAsPath {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchAsPathToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchAsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchAsPathToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchAsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchAsPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchAsPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchAsPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // regex - computed: true, optional: false, required: false
  public get regex() {
    return this.getStringAttribute('regex');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchCommunity {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchCommunityToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchCommunityToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchCommunity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // regex - computed: true, optional: false, required: false
  public get regex() {
    return this.getStringAttribute('regex');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchExtendedCommunity {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchExtendedCommunityToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchExtendedCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchExtendedCommunityToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchExtendedCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchExtendedCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchExtendedCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchExtendedCommunity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // regex - computed: true, optional: false, required: false
  public get regex() {
    return this.getStringAttribute('regex');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatch {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_prefix - computed: true, optional: false, required: false
  private _addressPrefix = new DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchAddressPrefixList(this, "address_prefix", false);
  public get addressPrefix() {
    return this._addressPrefix;
  }

  // afi - computed: true, optional: false, required: false
  public get afi() {
    return this.getStringAttribute('afi');
  }

  // as_path - computed: true, optional: false, required: false
  private _asPath = new DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchAsPathOutputReference(this, "as_path");
  public get asPath() {
    return this._asPath;
  }

  // community - computed: true, optional: false, required: false
  private _community = new DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchCommunityOutputReference(this, "community");
  public get community() {
    return this._community;
  }

  // extended_community - computed: true, optional: false, required: false
  private _extendedCommunity = new DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchExtendedCommunityOutputReference(this, "extended_community");
  public get extendedCommunity() {
    return this._extendedCommunity;
  }

  // from_peer - computed: true, optional: false, required: false
  public get fromPeer() {
    return this.getListAttribute('from_peer');
  }

  // med - computed: true, optional: false, required: false
  public get med() {
    return this.getNumberAttribute('med');
  }

  // nexthop - computed: true, optional: false, required: false
  public get nexthop() {
    return this.getListAttribute('nexthop');
  }

  // route_table - computed: true, optional: false, required: false
  public get routeTable() {
    return this.getStringAttribute('route_table');
  }

  // safi - computed: true, optional: false, required: false
  public get safi() {
    return this.getStringAttribute('safi');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFilters {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // match - computed: true, optional: false, required: false
  private _match = new DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersOutputReference {
    return new DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddress {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise_filters - computed: true, optional: false, required: false
  private _advertiseFilters = new DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAdvertiseFiltersList(this, "advertise_filters", false);
  public get advertiseFilters() {
    return this._advertiseFilters;
  }

  // aggregate_route_attributes - computed: true, optional: false, required: false
  private _aggregateRouteAttributes = new DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressAggregateRouteAttributesOutputReference(this, "aggregate_route_attributes");
  public get aggregateRouteAttributes() {
    return this._aggregateRouteAttributes;
  }

  // as_set - computed: true, optional: false, required: false
  public get asSet() {
    return this.getBooleanAttribute('as_set');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // summary - computed: true, optional: false, required: false
  public get summary() {
    return this.getBooleanAttribute('summary');
  }

  // suppress_filters - computed: true, optional: false, required: false
  private _suppressFilters = new DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressSuppressFiltersList(this, "suppress_filters", false);
  public get suppressFilters() {
    return this._suppressFilters;
  }
}

export class DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressOutputReference {
    return new DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyAggregation {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyAggregationToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyAggregation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  private _address = new DataScmLogicalRouterListDataVrfBgpPolicyAggregationAddressList(this, "address", false);
  public get address() {
    return this._address;
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchAddressPrefix {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchAddressPrefixToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchAddressPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchAddressPrefixToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchAddressPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchAddressPrefixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchAddressPrefix | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchAddressPrefix | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchAddressPrefixList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchAddressPrefixOutputReference {
    return new DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchAddressPrefixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchAsPath {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchAsPathToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchAsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchAsPathToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchAsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchAsPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchAsPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchAsPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // regex - computed: true, optional: false, required: false
  public get regex() {
    return this.getStringAttribute('regex');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchCommunity {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchCommunityToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchCommunityToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchCommunity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // regex - computed: true, optional: false, required: false
  public get regex() {
    return this.getStringAttribute('regex');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchExtendedCommunity {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchExtendedCommunityToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchExtendedCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchExtendedCommunityToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchExtendedCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchExtendedCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchExtendedCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchExtendedCommunity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // regex - computed: true, optional: false, required: false
  public get regex() {
    return this.getStringAttribute('regex');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatch {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_prefix - computed: true, optional: false, required: false
  private _addressPrefix = new DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchAddressPrefixList(this, "address_prefix", false);
  public get addressPrefix() {
    return this._addressPrefix;
  }

  // afi - computed: true, optional: false, required: false
  public get afi() {
    return this.getStringAttribute('afi');
  }

  // as_path - computed: true, optional: false, required: false
  private _asPath = new DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchAsPathOutputReference(this, "as_path");
  public get asPath() {
    return this._asPath;
  }

  // community - computed: true, optional: false, required: false
  private _community = new DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchCommunityOutputReference(this, "community");
  public get community() {
    return this._community;
  }

  // extended_community - computed: true, optional: false, required: false
  private _extendedCommunity = new DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchExtendedCommunityOutputReference(this, "extended_community");
  public get extendedCommunity() {
    return this._extendedCommunity;
  }

  // from_peer - computed: true, optional: false, required: false
  public get fromPeer() {
    return this.getListAttribute('from_peer');
  }

  // med - computed: true, optional: false, required: false
  public get med() {
    return this.getNumberAttribute('med');
  }

  // nexthop - computed: true, optional: false, required: false
  public get nexthop() {
    return this.getListAttribute('nexthop');
  }

  // route_table - computed: true, optional: false, required: false
  public get routeTable() {
    return this.getStringAttribute('route_table');
  }

  // safi - computed: true, optional: false, required: false
  public get safi() {
    return this.getStringAttribute('safi');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFilters {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // match - computed: true, optional: false, required: false
  private _match = new DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersOutputReference {
    return new DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchAddressPrefix {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchAddressPrefixToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchAddressPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchAddressPrefixToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchAddressPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchAddressPrefixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchAddressPrefix | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchAddressPrefix | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchAddressPrefixList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchAddressPrefixOutputReference {
    return new DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchAddressPrefixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchAsPath {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchAsPathToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchAsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchAsPathToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchAsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchAsPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchAsPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchAsPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // regex - computed: true, optional: false, required: false
  public get regex() {
    return this.getStringAttribute('regex');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchCommunity {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchCommunityToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchCommunityToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchCommunity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // regex - computed: true, optional: false, required: false
  public get regex() {
    return this.getStringAttribute('regex');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchExtendedCommunity {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchExtendedCommunityToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchExtendedCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchExtendedCommunityToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchExtendedCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchExtendedCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchExtendedCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchExtendedCommunity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // regex - computed: true, optional: false, required: false
  public get regex() {
    return this.getStringAttribute('regex');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatch {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_prefix - computed: true, optional: false, required: false
  private _addressPrefix = new DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchAddressPrefixList(this, "address_prefix", false);
  public get addressPrefix() {
    return this._addressPrefix;
  }

  // afi - computed: true, optional: false, required: false
  public get afi() {
    return this.getStringAttribute('afi');
  }

  // as_path - computed: true, optional: false, required: false
  private _asPath = new DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchAsPathOutputReference(this, "as_path");
  public get asPath() {
    return this._asPath;
  }

  // community - computed: true, optional: false, required: false
  private _community = new DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchCommunityOutputReference(this, "community");
  public get community() {
    return this._community;
  }

  // extended_community - computed: true, optional: false, required: false
  private _extendedCommunity = new DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchExtendedCommunityOutputReference(this, "extended_community");
  public get extendedCommunity() {
    return this._extendedCommunity;
  }

  // from_peer - computed: true, optional: false, required: false
  public get fromPeer() {
    return this.getListAttribute('from_peer');
  }

  // med - computed: true, optional: false, required: false
  public get med() {
    return this.getNumberAttribute('med');
  }

  // nexthop - computed: true, optional: false, required: false
  public get nexthop() {
    return this.getListAttribute('nexthop');
  }

  // route_table - computed: true, optional: false, required: false
  public get routeTable() {
    return this.getStringAttribute('route_table');
  }

  // safi - computed: true, optional: false, required: false
  public get safi() {
    return this.getStringAttribute('safi');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFilters {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // match - computed: true, optional: false, required: false
  private _match = new DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersOutputReference {
    return new DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicy {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise_filters - computed: true, optional: false, required: false
  private _advertiseFilters = new DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersList(this, "advertise_filters", false);
  public get advertiseFilters() {
    return this._advertiseFilters;
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // non_exist_filters - computed: true, optional: false, required: false
  private _nonExistFilters = new DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersList(this, "non_exist_filters", false);
  public get nonExistFilters() {
    return this._nonExistFilters;
  }

  // used_by - computed: true, optional: false, required: false
  public get usedBy() {
    return this.getListAttribute('used_by');
  }
}

export class DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyOutputReference {
    return new DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisement {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy - computed: true, optional: false, required: false
  private _policy = new DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementPolicyList(this, "policy", false);
  public get policy() {
    return this._policy;
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateAsPathNone {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateAsPathNoneToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateAsPathNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateAsPathNoneToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateAsPathNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateAsPathNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateAsPathNone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateAsPathNone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateAsPathRemove {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateAsPathRemoveToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateAsPathRemove): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateAsPathRemoveToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateAsPathRemove): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateAsPathRemoveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateAsPathRemove | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateAsPathRemove | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateAsPath {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateAsPathToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateAsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateAsPathToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateAsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateAsPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateAsPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateAsPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // none - computed: true, optional: false, required: false
  private _none = new DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateAsPathNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }

  // prepend - computed: true, optional: false, required: false
  public get prepend() {
    return this.getNumberAttribute('prepend');
  }

  // remove - computed: true, optional: false, required: false
  private _remove = new DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateAsPathRemoveOutputReference(this, "remove");
  public get remove() {
    return this._remove;
  }

  // remove_and_prepend - computed: true, optional: false, required: false
  public get removeAndPrepend() {
    return this.getNumberAttribute('remove_and_prepend');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateCommunityNone {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateCommunityNoneToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateCommunityNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateCommunityNoneToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateCommunityNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateCommunityNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateCommunityNone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateCommunityNone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateCommunityRemoveAll {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateCommunityRemoveAllToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateCommunityRemoveAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateCommunityRemoveAllToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateCommunityRemoveAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateCommunityRemoveAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateCommunityRemoveAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateCommunityRemoveAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateCommunity {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateCommunityToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateCommunityToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateCommunity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // append - computed: true, optional: false, required: false
  public get append() {
    return this.getListAttribute('append');
  }

  // none - computed: true, optional: false, required: false
  private _none = new DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateCommunityNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }

  // overwrite - computed: true, optional: false, required: false
  public get overwrite() {
    return this.getListAttribute('overwrite');
  }

  // remove_all - computed: true, optional: false, required: false
  private _removeAll = new DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateCommunityRemoveAllOutputReference(this, "remove_all");
  public get removeAll() {
    return this._removeAll;
  }

  // remove_regex - computed: true, optional: false, required: false
  public get removeRegex() {
    return this.getStringAttribute('remove_regex');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityNone {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityNoneToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityNoneToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityNone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityNone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityRemoveAll {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityRemoveAllToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityRemoveAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityRemoveAllToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityRemoveAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityRemoveAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityRemoveAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityRemoveAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunity {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // append - computed: true, optional: false, required: false
  public get append() {
    return this.getListAttribute('append');
  }

  // none - computed: true, optional: false, required: false
  private _none = new DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }

  // overwrite - computed: true, optional: false, required: false
  public get overwrite() {
    return this.getListAttribute('overwrite');
  }

  // remove_all - computed: true, optional: false, required: false
  private _removeAll = new DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityRemoveAllOutputReference(this, "remove_all");
  public get removeAll() {
    return this._removeAll;
  }

  // remove_regex - computed: true, optional: false, required: false
  public get removeRegex() {
    return this.getStringAttribute('remove_regex');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdate {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // as_path - computed: true, optional: false, required: false
  private _asPath = new DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateAsPathOutputReference(this, "as_path");
  public get asPath() {
    return this._asPath;
  }

  // as_path_limit - computed: true, optional: false, required: false
  public get asPathLimit() {
    return this.getNumberAttribute('as_path_limit');
  }

  // community - computed: true, optional: false, required: false
  private _community = new DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateCommunityOutputReference(this, "community");
  public get community() {
    return this._community;
  }

  // extended_community - computed: true, optional: false, required: false
  private _extendedCommunity = new DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityOutputReference(this, "extended_community");
  public get extendedCommunity() {
    return this._extendedCommunity;
  }

  // local_preference - computed: true, optional: false, required: false
  public get localPreference() {
    return this.getNumberAttribute('local_preference');
  }

  // med - computed: true, optional: false, required: false
  public get med() {
    return this.getNumberAttribute('med');
  }

  // nexthop - computed: true, optional: false, required: false
  public get nexthop() {
    return this.getStringAttribute('nexthop');
  }

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return this.getStringAttribute('origin');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllow {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // update - computed: true, optional: false, required: false
  private _update = new DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowUpdateOutputReference(this, "update");
  public get update() {
    return this._update;
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionDeny {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionDenyToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionDeny): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionDenyToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionDeny): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionDenyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionDeny | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionDeny | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyExportRulesAction {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyExportRulesAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow - computed: true, optional: false, required: false
  private _allow = new DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionAllowOutputReference(this, "allow");
  public get allow() {
    return this._allow;
  }

  // deny - computed: true, optional: false, required: false
  private _deny = new DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionDenyOutputReference(this, "deny");
  public get deny() {
    return this._deny;
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchAddressPrefix {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchAddressPrefixToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchAddressPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchAddressPrefixToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchAddressPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchAddressPrefixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchAddressPrefix | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchAddressPrefix | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchAddressPrefixList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchAddressPrefixOutputReference {
    return new DataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchAddressPrefixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchAsPath {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchAsPathToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchAsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchAsPathToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchAsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchAsPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchAsPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchAsPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // regex - computed: true, optional: false, required: false
  public get regex() {
    return this.getStringAttribute('regex');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchCommunity {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchCommunityToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchCommunityToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchCommunity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // regex - computed: true, optional: false, required: false
  public get regex() {
    return this.getStringAttribute('regex');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchExtendedCommunity {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchExtendedCommunityToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchExtendedCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchExtendedCommunityToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchExtendedCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchExtendedCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchExtendedCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchExtendedCommunity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // regex - computed: true, optional: false, required: false
  public get regex() {
    return this.getStringAttribute('regex');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatch {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_prefix - computed: true, optional: false, required: false
  private _addressPrefix = new DataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchAddressPrefixList(this, "address_prefix", false);
  public get addressPrefix() {
    return this._addressPrefix;
  }

  // afi - computed: true, optional: false, required: false
  public get afi() {
    return this.getStringAttribute('afi');
  }

  // as_path - computed: true, optional: false, required: false
  private _asPath = new DataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchAsPathOutputReference(this, "as_path");
  public get asPath() {
    return this._asPath;
  }

  // community - computed: true, optional: false, required: false
  private _community = new DataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchCommunityOutputReference(this, "community");
  public get community() {
    return this._community;
  }

  // extended_community - computed: true, optional: false, required: false
  private _extendedCommunity = new DataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchExtendedCommunityOutputReference(this, "extended_community");
  public get extendedCommunity() {
    return this._extendedCommunity;
  }

  // from_peer - computed: true, optional: false, required: false
  public get fromPeer() {
    return this.getListAttribute('from_peer');
  }

  // med - computed: true, optional: false, required: false
  public get med() {
    return this.getNumberAttribute('med');
  }

  // nexthop - computed: true, optional: false, required: false
  public get nexthop() {
    return this.getListAttribute('nexthop');
  }

  // route_table - computed: true, optional: false, required: false
  public get routeTable() {
    return this.getStringAttribute('route_table');
  }

  // safi - computed: true, optional: false, required: false
  public get safi() {
    return this.getStringAttribute('safi');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyExportRules {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyExportRulesToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyExportRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyExportRulesToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyExportRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyExportRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyExportRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyExportRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  private _action = new DataScmLogicalRouterListDataVrfBgpPolicyExportRulesActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // match - computed: true, optional: false, required: false
  private _match = new DataScmLogicalRouterListDataVrfBgpPolicyExportRulesMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // used_by - computed: true, optional: false, required: false
  public get usedBy() {
    return this.getListAttribute('used_by');
  }
}

export class DataScmLogicalRouterListDataVrfBgpPolicyExportRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfBgpPolicyExportRulesOutputReference {
    return new DataScmLogicalRouterListDataVrfBgpPolicyExportRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyExport {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyExportToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyExportToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyExportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyExport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyExport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataScmLogicalRouterListDataVrfBgpPolicyExportRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateAsPathNone {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateAsPathNoneToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateAsPathNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateAsPathNoneToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateAsPathNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateAsPathNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateAsPathNone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateAsPathNone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateAsPathRemove {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateAsPathRemoveToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateAsPathRemove): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateAsPathRemoveToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateAsPathRemove): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateAsPathRemoveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateAsPathRemove | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateAsPathRemove | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateAsPath {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateAsPathToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateAsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateAsPathToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateAsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateAsPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateAsPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateAsPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // none - computed: true, optional: false, required: false
  private _none = new DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateAsPathNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }

  // prepend - computed: true, optional: false, required: false
  public get prepend() {
    return this.getNumberAttribute('prepend');
  }

  // remove - computed: true, optional: false, required: false
  private _remove = new DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateAsPathRemoveOutputReference(this, "remove");
  public get remove() {
    return this._remove;
  }

  // remove_and_prepend - computed: true, optional: false, required: false
  public get removeAndPrepend() {
    return this.getNumberAttribute('remove_and_prepend');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateCommunityNone {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateCommunityNoneToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateCommunityNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateCommunityNoneToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateCommunityNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateCommunityNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateCommunityNone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateCommunityNone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateCommunityRemoveAll {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateCommunityRemoveAllToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateCommunityRemoveAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateCommunityRemoveAllToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateCommunityRemoveAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateCommunityRemoveAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateCommunityRemoveAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateCommunityRemoveAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateCommunity {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateCommunityToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateCommunityToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateCommunity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // append - computed: true, optional: false, required: false
  public get append() {
    return this.getListAttribute('append');
  }

  // none - computed: true, optional: false, required: false
  private _none = new DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateCommunityNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }

  // overwrite - computed: true, optional: false, required: false
  public get overwrite() {
    return this.getListAttribute('overwrite');
  }

  // remove_all - computed: true, optional: false, required: false
  private _removeAll = new DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateCommunityRemoveAllOutputReference(this, "remove_all");
  public get removeAll() {
    return this._removeAll;
  }

  // remove_regex - computed: true, optional: false, required: false
  public get removeRegex() {
    return this.getStringAttribute('remove_regex');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityNone {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityNoneToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityNoneToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityNone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityNone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityRemoveAll {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityRemoveAllToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityRemoveAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityRemoveAllToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityRemoveAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityRemoveAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityRemoveAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityRemoveAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunity {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // append - computed: true, optional: false, required: false
  public get append() {
    return this.getListAttribute('append');
  }

  // none - computed: true, optional: false, required: false
  private _none = new DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }

  // overwrite - computed: true, optional: false, required: false
  public get overwrite() {
    return this.getListAttribute('overwrite');
  }

  // remove_all - computed: true, optional: false, required: false
  private _removeAll = new DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityRemoveAllOutputReference(this, "remove_all");
  public get removeAll() {
    return this._removeAll;
  }

  // remove_regex - computed: true, optional: false, required: false
  public get removeRegex() {
    return this.getStringAttribute('remove_regex');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdate {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // as_path - computed: true, optional: false, required: false
  private _asPath = new DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateAsPathOutputReference(this, "as_path");
  public get asPath() {
    return this._asPath;
  }

  // as_path_limit - computed: true, optional: false, required: false
  public get asPathLimit() {
    return this.getNumberAttribute('as_path_limit');
  }

  // community - computed: true, optional: false, required: false
  private _community = new DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateCommunityOutputReference(this, "community");
  public get community() {
    return this._community;
  }

  // extended_community - computed: true, optional: false, required: false
  private _extendedCommunity = new DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityOutputReference(this, "extended_community");
  public get extendedCommunity() {
    return this._extendedCommunity;
  }

  // local_preference - computed: true, optional: false, required: false
  public get localPreference() {
    return this.getNumberAttribute('local_preference');
  }

  // med - computed: true, optional: false, required: false
  public get med() {
    return this.getNumberAttribute('med');
  }

  // nexthop - computed: true, optional: false, required: false
  public get nexthop() {
    return this.getStringAttribute('nexthop');
  }

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return this.getStringAttribute('origin');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllow {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dampening - computed: true, optional: false, required: false
  public get dampening() {
    return this.getStringAttribute('dampening');
  }

  // update - computed: true, optional: false, required: false
  private _update = new DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowUpdateOutputReference(this, "update");
  public get update() {
    return this._update;
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionDeny {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionDenyToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionDeny): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionDenyToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionDeny): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionDenyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionDeny | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionDeny | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyImportRulesAction {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyImportRulesAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow - computed: true, optional: false, required: false
  private _allow = new DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionAllowOutputReference(this, "allow");
  public get allow() {
    return this._allow;
  }

  // deny - computed: true, optional: false, required: false
  private _deny = new DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionDenyOutputReference(this, "deny");
  public get deny() {
    return this._deny;
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchAddressPrefix {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchAddressPrefixToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchAddressPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchAddressPrefixToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchAddressPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchAddressPrefixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchAddressPrefix | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchAddressPrefix | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchAddressPrefixList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchAddressPrefixOutputReference {
    return new DataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchAddressPrefixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchAsPath {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchAsPathToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchAsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchAsPathToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchAsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchAsPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchAsPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchAsPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // regex - computed: true, optional: false, required: false
  public get regex() {
    return this.getStringAttribute('regex');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchCommunity {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchCommunityToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchCommunityToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchCommunity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // regex - computed: true, optional: false, required: false
  public get regex() {
    return this.getStringAttribute('regex');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchExtendedCommunity {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchExtendedCommunityToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchExtendedCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchExtendedCommunityToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchExtendedCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchExtendedCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchExtendedCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchExtendedCommunity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // regex - computed: true, optional: false, required: false
  public get regex() {
    return this.getStringAttribute('regex');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatch {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_prefix - computed: true, optional: false, required: false
  private _addressPrefix = new DataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchAddressPrefixList(this, "address_prefix", false);
  public get addressPrefix() {
    return this._addressPrefix;
  }

  // afi - computed: true, optional: false, required: false
  public get afi() {
    return this.getStringAttribute('afi');
  }

  // as_path - computed: true, optional: false, required: false
  private _asPath = new DataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchAsPathOutputReference(this, "as_path");
  public get asPath() {
    return this._asPath;
  }

  // community - computed: true, optional: false, required: false
  private _community = new DataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchCommunityOutputReference(this, "community");
  public get community() {
    return this._community;
  }

  // extended_community - computed: true, optional: false, required: false
  private _extendedCommunity = new DataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchExtendedCommunityOutputReference(this, "extended_community");
  public get extendedCommunity() {
    return this._extendedCommunity;
  }

  // from_peer - computed: true, optional: false, required: false
  public get fromPeer() {
    return this.getListAttribute('from_peer');
  }

  // med - computed: true, optional: false, required: false
  public get med() {
    return this.getNumberAttribute('med');
  }

  // nexthop - computed: true, optional: false, required: false
  public get nexthop() {
    return this.getListAttribute('nexthop');
  }

  // route_table - computed: true, optional: false, required: false
  public get routeTable() {
    return this.getStringAttribute('route_table');
  }

  // safi - computed: true, optional: false, required: false
  public get safi() {
    return this.getStringAttribute('safi');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyImportRules {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyImportRulesToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyImportRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyImportRulesToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyImportRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyImportRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyImportRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyImportRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  private _action = new DataScmLogicalRouterListDataVrfBgpPolicyImportRulesActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // match - computed: true, optional: false, required: false
  private _match = new DataScmLogicalRouterListDataVrfBgpPolicyImportRulesMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // used_by - computed: true, optional: false, required: false
  public get usedBy() {
    return this.getListAttribute('used_by');
  }
}

export class DataScmLogicalRouterListDataVrfBgpPolicyImportRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfBgpPolicyImportRulesOutputReference {
    return new DataScmLogicalRouterListDataVrfBgpPolicyImportRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicyImport {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyImportToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyImport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyImportToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicyImport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyImportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicyImport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicyImport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataScmLogicalRouterListDataVrfBgpPolicyImportRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}
export interface DataScmLogicalRouterListDataVrfBgpPolicy {
}

export function dataScmLogicalRouterListDataVrfBgpPolicyToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpPolicyToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation - computed: true, optional: false, required: false
  private _aggregation = new DataScmLogicalRouterListDataVrfBgpPolicyAggregationOutputReference(this, "aggregation");
  public get aggregation() {
    return this._aggregation;
  }

  // conditional_advertisement - computed: true, optional: false, required: false
  private _conditionalAdvertisement = new DataScmLogicalRouterListDataVrfBgpPolicyConditionalAdvertisementOutputReference(this, "conditional_advertisement");
  public get conditionalAdvertisement() {
    return this._conditionalAdvertisement;
  }

  // export - computed: true, optional: false, required: false
  private _export = new DataScmLogicalRouterListDataVrfBgpPolicyExportOutputReference(this, "export");
  public get export() {
    return this._export;
  }

  // import - computed: true, optional: false, required: false
  private _import = new DataScmLogicalRouterListDataVrfBgpPolicyImportOutputReference(this, "import");
  public get import() {
    return this._import;
  }
}
export interface DataScmLogicalRouterListDataVrfBgpRedistRules {
}

export function dataScmLogicalRouterListDataVrfBgpRedistRulesToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpRedistRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpRedistRulesToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpRedistRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpRedistRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpRedistRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpRedistRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_family_identifier - computed: true, optional: false, required: false
  public get addressFamilyIdentifier() {
    return this.getStringAttribute('address_family_identifier');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // route_table - computed: true, optional: false, required: false
  public get routeTable() {
    return this.getStringAttribute('route_table');
  }

  // set_as_path_limit - computed: true, optional: false, required: false
  public get setAsPathLimit() {
    return this.getNumberAttribute('set_as_path_limit');
  }

  // set_community - computed: true, optional: false, required: false
  public get setCommunity() {
    return this.getListAttribute('set_community');
  }

  // set_extended_community - computed: true, optional: false, required: false
  public get setExtendedCommunity() {
    return this.getListAttribute('set_extended_community');
  }

  // set_local_preference - computed: true, optional: false, required: false
  public get setLocalPreference() {
    return this.getNumberAttribute('set_local_preference');
  }

  // set_med - computed: true, optional: false, required: false
  public get setMed() {
    return this.getNumberAttribute('set_med');
  }

  // set_origin - computed: true, optional: false, required: false
  public get setOrigin() {
    return this.getStringAttribute('set_origin');
  }
}

export class DataScmLogicalRouterListDataVrfBgpRedistRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfBgpRedistRulesOutputReference {
    return new DataScmLogicalRouterListDataVrfBgpRedistRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfBgpRedistributionProfileIpv4 {
}

export function dataScmLogicalRouterListDataVrfBgpRedistributionProfileIpv4ToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpRedistributionProfileIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpRedistributionProfileIpv4ToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpRedistributionProfileIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpRedistributionProfileIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpRedistributionProfileIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpRedistributionProfileIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // unicast - computed: true, optional: false, required: false
  public get unicast() {
    return this.getStringAttribute('unicast');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpRedistributionProfileIpv6 {
}

export function dataScmLogicalRouterListDataVrfBgpRedistributionProfileIpv6ToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpRedistributionProfileIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpRedistributionProfileIpv6ToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpRedistributionProfileIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpRedistributionProfileIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpRedistributionProfileIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpRedistributionProfileIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // unicast - computed: true, optional: false, required: false
  public get unicast() {
    return this.getStringAttribute('unicast');
  }
}
export interface DataScmLogicalRouterListDataVrfBgpRedistributionProfile {
}

export function dataScmLogicalRouterListDataVrfBgpRedistributionProfileToTerraform(struct?: DataScmLogicalRouterListDataVrfBgpRedistributionProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpRedistributionProfileToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgpRedistributionProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpRedistributionProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgpRedistributionProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgpRedistributionProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataScmLogicalRouterListDataVrfBgpRedistributionProfileIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataScmLogicalRouterListDataVrfBgpRedistributionProfileIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
}
export interface DataScmLogicalRouterListDataVrfBgp {
}

export function dataScmLogicalRouterListDataVrfBgpToTerraform(struct?: DataScmLogicalRouterListDataVrfBgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfBgpToHclTerraform(struct?: DataScmLogicalRouterListDataVrfBgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfBgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfBgp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfBgp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise_network - computed: true, optional: false, required: false
  private _advertiseNetwork = new DataScmLogicalRouterListDataVrfBgpAdvertiseNetworkOutputReference(this, "advertise_network");
  public get advertiseNetwork() {
    return this._advertiseNetwork;
  }

  // aggregate - computed: true, optional: false, required: false
  private _aggregate = new DataScmLogicalRouterListDataVrfBgpAggregateOutputReference(this, "aggregate");
  public get aggregate() {
    return this._aggregate;
  }

  // aggregate_routes - computed: true, optional: false, required: false
  private _aggregateRoutes = new DataScmLogicalRouterListDataVrfBgpAggregateRoutesList(this, "aggregate_routes", false);
  public get aggregateRoutes() {
    return this._aggregateRoutes;
  }

  // allow_redist_default_route - computed: true, optional: false, required: false
  public get allowRedistDefaultRoute() {
    return this.getBooleanAttribute('allow_redist_default_route');
  }

  // always_advertise_network_route - computed: true, optional: false, required: false
  public get alwaysAdvertiseNetworkRoute() {
    return this.getBooleanAttribute('always_advertise_network_route');
  }

  // as_format - computed: true, optional: false, required: false
  public get asFormat() {
    return this.getStringAttribute('as_format');
  }

  // confederation_member_as - computed: true, optional: false, required: false
  public get confederationMemberAs() {
    return this.getStringAttribute('confederation_member_as');
  }

  // default_local_preference - computed: true, optional: false, required: false
  public get defaultLocalPreference() {
    return this.getNumberAttribute('default_local_preference');
  }

  // ecmp_multi_as - computed: true, optional: false, required: false
  public get ecmpMultiAs() {
    return this.getBooleanAttribute('ecmp_multi_as');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // enforce_first_as - computed: true, optional: false, required: false
  public get enforceFirstAs() {
    return this.getBooleanAttribute('enforce_first_as');
  }

  // fast_external_failover - computed: true, optional: false, required: false
  public get fastExternalFailover() {
    return this.getBooleanAttribute('fast_external_failover');
  }

  // global_bfd - computed: true, optional: false, required: false
  private _globalBfd = new DataScmLogicalRouterListDataVrfBgpGlobalBfdOutputReference(this, "global_bfd");
  public get globalBfd() {
    return this._globalBfd;
  }

  // graceful_restart - computed: true, optional: false, required: false
  private _gracefulRestart = new DataScmLogicalRouterListDataVrfBgpGracefulRestartOutputReference(this, "graceful_restart");
  public get gracefulRestart() {
    return this._gracefulRestart;
  }

  // graceful_shutdown - computed: true, optional: false, required: false
  public get gracefulShutdown() {
    return this.getBooleanAttribute('graceful_shutdown');
  }

  // install_route - computed: true, optional: false, required: false
  public get installRoute() {
    return this.getBooleanAttribute('install_route');
  }

  // local_as - computed: true, optional: false, required: false
  public get localAs() {
    return this.getStringAttribute('local_as');
  }

  // med - computed: true, optional: false, required: false
  private _med = new DataScmLogicalRouterListDataVrfBgpMedOutputReference(this, "med");
  public get med() {
    return this._med;
  }

  // peer_group - computed: true, optional: false, required: false
  private _peerGroup = new DataScmLogicalRouterListDataVrfBgpPeerGroupList(this, "peer_group", false);
  public get peerGroup() {
    return this._peerGroup;
  }

  // policy - computed: true, optional: false, required: false
  private _policy = new DataScmLogicalRouterListDataVrfBgpPolicyOutputReference(this, "policy");
  public get policy() {
    return this._policy;
  }

  // redist_rules - computed: true, optional: false, required: false
  private _redistRules = new DataScmLogicalRouterListDataVrfBgpRedistRulesList(this, "redist_rules", false);
  public get redistRules() {
    return this._redistRules;
  }

  // redistribution_profile - computed: true, optional: false, required: false
  private _redistributionProfile = new DataScmLogicalRouterListDataVrfBgpRedistributionProfileOutputReference(this, "redistribution_profile");
  public get redistributionProfile() {
    return this._redistributionProfile;
  }

  // reject_default_route - computed: true, optional: false, required: false
  public get rejectDefaultRoute() {
    return this.getBooleanAttribute('reject_default_route');
  }

  // router_id - computed: true, optional: false, required: false
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
}
export interface DataScmLogicalRouterListDataVrfEcmpAlgorithmBalancedRoundRobin {
}

export function dataScmLogicalRouterListDataVrfEcmpAlgorithmBalancedRoundRobinToTerraform(struct?: DataScmLogicalRouterListDataVrfEcmpAlgorithmBalancedRoundRobin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfEcmpAlgorithmBalancedRoundRobinToHclTerraform(struct?: DataScmLogicalRouterListDataVrfEcmpAlgorithmBalancedRoundRobin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfEcmpAlgorithmBalancedRoundRobinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfEcmpAlgorithmBalancedRoundRobin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfEcmpAlgorithmBalancedRoundRobin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfEcmpAlgorithmIpHash {
}

export function dataScmLogicalRouterListDataVrfEcmpAlgorithmIpHashToTerraform(struct?: DataScmLogicalRouterListDataVrfEcmpAlgorithmIpHash): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfEcmpAlgorithmIpHashToHclTerraform(struct?: DataScmLogicalRouterListDataVrfEcmpAlgorithmIpHash): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfEcmpAlgorithmIpHashOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfEcmpAlgorithmIpHash | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfEcmpAlgorithmIpHash | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hash_seed - computed: true, optional: false, required: false
  public get hashSeed() {
    return this.getNumberAttribute('hash_seed');
  }

  // src_only - computed: true, optional: false, required: false
  public get srcOnly() {
    return this.getBooleanAttribute('src_only');
  }

  // use_port - computed: true, optional: false, required: false
  public get usePort() {
    return this.getBooleanAttribute('use_port');
  }
}
export interface DataScmLogicalRouterListDataVrfEcmpAlgorithmIpModulo {
}

export function dataScmLogicalRouterListDataVrfEcmpAlgorithmIpModuloToTerraform(struct?: DataScmLogicalRouterListDataVrfEcmpAlgorithmIpModulo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfEcmpAlgorithmIpModuloToHclTerraform(struct?: DataScmLogicalRouterListDataVrfEcmpAlgorithmIpModulo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfEcmpAlgorithmIpModuloOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfEcmpAlgorithmIpModulo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfEcmpAlgorithmIpModulo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfEcmpAlgorithmWeightedRoundRobinInterface {
}

export function dataScmLogicalRouterListDataVrfEcmpAlgorithmWeightedRoundRobinInterfaceToTerraform(struct?: DataScmLogicalRouterListDataVrfEcmpAlgorithmWeightedRoundRobinInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfEcmpAlgorithmWeightedRoundRobinInterfaceToHclTerraform(struct?: DataScmLogicalRouterListDataVrfEcmpAlgorithmWeightedRoundRobinInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfEcmpAlgorithmWeightedRoundRobinInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfEcmpAlgorithmWeightedRoundRobinInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfEcmpAlgorithmWeightedRoundRobinInterface | undefined) {
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

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class DataScmLogicalRouterListDataVrfEcmpAlgorithmWeightedRoundRobinInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfEcmpAlgorithmWeightedRoundRobinInterfaceOutputReference {
    return new DataScmLogicalRouterListDataVrfEcmpAlgorithmWeightedRoundRobinInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfEcmpAlgorithmWeightedRoundRobin {
}

export function dataScmLogicalRouterListDataVrfEcmpAlgorithmWeightedRoundRobinToTerraform(struct?: DataScmLogicalRouterListDataVrfEcmpAlgorithmWeightedRoundRobin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfEcmpAlgorithmWeightedRoundRobinToHclTerraform(struct?: DataScmLogicalRouterListDataVrfEcmpAlgorithmWeightedRoundRobin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfEcmpAlgorithmWeightedRoundRobinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfEcmpAlgorithmWeightedRoundRobin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfEcmpAlgorithmWeightedRoundRobin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface - computed: true, optional: false, required: false
  private _interface = new DataScmLogicalRouterListDataVrfEcmpAlgorithmWeightedRoundRobinInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
}
export interface DataScmLogicalRouterListDataVrfEcmpAlgorithm {
}

export function dataScmLogicalRouterListDataVrfEcmpAlgorithmToTerraform(struct?: DataScmLogicalRouterListDataVrfEcmpAlgorithm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfEcmpAlgorithmToHclTerraform(struct?: DataScmLogicalRouterListDataVrfEcmpAlgorithm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfEcmpAlgorithmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfEcmpAlgorithm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfEcmpAlgorithm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // balanced_round_robin - computed: true, optional: false, required: false
  private _balancedRoundRobin = new DataScmLogicalRouterListDataVrfEcmpAlgorithmBalancedRoundRobinOutputReference(this, "balanced_round_robin");
  public get balancedRoundRobin() {
    return this._balancedRoundRobin;
  }

  // ip_hash - computed: true, optional: false, required: false
  private _ipHash = new DataScmLogicalRouterListDataVrfEcmpAlgorithmIpHashOutputReference(this, "ip_hash");
  public get ipHash() {
    return this._ipHash;
  }

  // ip_modulo - computed: true, optional: false, required: false
  private _ipModulo = new DataScmLogicalRouterListDataVrfEcmpAlgorithmIpModuloOutputReference(this, "ip_modulo");
  public get ipModulo() {
    return this._ipModulo;
  }

  // weighted_round_robin - computed: true, optional: false, required: false
  private _weightedRoundRobin = new DataScmLogicalRouterListDataVrfEcmpAlgorithmWeightedRoundRobinOutputReference(this, "weighted_round_robin");
  public get weightedRoundRobin() {
    return this._weightedRoundRobin;
  }
}
export interface DataScmLogicalRouterListDataVrfEcmp {
}

export function dataScmLogicalRouterListDataVrfEcmpToTerraform(struct?: DataScmLogicalRouterListDataVrfEcmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfEcmpToHclTerraform(struct?: DataScmLogicalRouterListDataVrfEcmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfEcmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfEcmp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfEcmp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  private _algorithm = new DataScmLogicalRouterListDataVrfEcmpAlgorithmOutputReference(this, "algorithm");
  public get algorithm() {
    return this._algorithm;
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // max_path - computed: true, optional: false, required: false
  public get maxPath() {
    return this.getNumberAttribute('max_path');
  }

  // strict_source_path - computed: true, optional: false, required: false
  public get strictSourcePath() {
    return this.getBooleanAttribute('strict_source_path');
  }

  // symmetric_return - computed: true, optional: false, required: false
  public get symmetricReturn() {
    return this.getBooleanAttribute('symmetric_return');
  }
}
export interface DataScmLogicalRouterListDataVrfMulticastIgmpDynamicInterface {
}

export function dataScmLogicalRouterListDataVrfMulticastIgmpDynamicInterfaceToTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastIgmpDynamicInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfMulticastIgmpDynamicInterfaceToHclTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastIgmpDynamicInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfMulticastIgmpDynamicInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfMulticastIgmpDynamicInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfMulticastIgmpDynamicInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_filter - computed: true, optional: false, required: false
  public get groupFilter() {
    return this.getStringAttribute('group_filter');
  }

  // max_groups - computed: true, optional: false, required: false
  public get maxGroups() {
    return this.getStringAttribute('max_groups');
  }

  // max_sources - computed: true, optional: false, required: false
  public get maxSources() {
    return this.getStringAttribute('max_sources');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // query_profile - computed: true, optional: false, required: false
  public get queryProfile() {
    return this.getStringAttribute('query_profile');
  }

  // robustness - computed: true, optional: false, required: false
  public get robustness() {
    return this.getStringAttribute('robustness');
  }

  // router_alert_policing - computed: true, optional: false, required: false
  public get routerAlertPolicing() {
    return this.getBooleanAttribute('router_alert_policing');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataScmLogicalRouterListDataVrfMulticastIgmpDynamicInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfMulticastIgmpDynamicInterfaceOutputReference {
    return new DataScmLogicalRouterListDataVrfMulticastIgmpDynamicInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfMulticastIgmpDynamic {
}

export function dataScmLogicalRouterListDataVrfMulticastIgmpDynamicToTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastIgmpDynamic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfMulticastIgmpDynamicToHclTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastIgmpDynamic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfMulticastIgmpDynamicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfMulticastIgmpDynamic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfMulticastIgmpDynamic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface - computed: true, optional: false, required: false
  private _interface = new DataScmLogicalRouterListDataVrfMulticastIgmpDynamicInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
}
export interface DataScmLogicalRouterListDataVrfMulticastIgmpStatic {
}

export function dataScmLogicalRouterListDataVrfMulticastIgmpStaticToTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastIgmpStatic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfMulticastIgmpStaticToHclTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastIgmpStatic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfMulticastIgmpStaticOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfMulticastIgmpStatic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfMulticastIgmpStatic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_address - computed: true, optional: false, required: false
  public get groupAddress() {
    return this.getStringAttribute('group_address');
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // source_address - computed: true, optional: false, required: false
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
}

export class DataScmLogicalRouterListDataVrfMulticastIgmpStaticList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfMulticastIgmpStaticOutputReference {
    return new DataScmLogicalRouterListDataVrfMulticastIgmpStaticOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfMulticastIgmp {
}

export function dataScmLogicalRouterListDataVrfMulticastIgmpToTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastIgmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfMulticastIgmpToHclTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastIgmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfMulticastIgmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfMulticastIgmp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfMulticastIgmp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dynamic - computed: true, optional: false, required: false
  private _dynamic = new DataScmLogicalRouterListDataVrfMulticastIgmpDynamicOutputReference(this, "dynamic");
  public get dynamic() {
    return this._dynamic;
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // static - computed: true, optional: false, required: false
  private _static = new DataScmLogicalRouterListDataVrfMulticastIgmpStaticList(this, "static", false);
  public get static() {
    return this._static;
  }
}
export interface DataScmLogicalRouterListDataVrfMulticastInterfaceGroupGroupPermissionAnySourceMulticast {
}

export function dataScmLogicalRouterListDataVrfMulticastInterfaceGroupGroupPermissionAnySourceMulticastToTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastInterfaceGroupGroupPermissionAnySourceMulticast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfMulticastInterfaceGroupGroupPermissionAnySourceMulticastToHclTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastInterfaceGroupGroupPermissionAnySourceMulticast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfMulticastInterfaceGroupGroupPermissionAnySourceMulticastOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfMulticastInterfaceGroupGroupPermissionAnySourceMulticast | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfMulticastInterfaceGroupGroupPermissionAnySourceMulticast | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_address - computed: true, optional: false, required: false
  public get groupAddress() {
    return this.getStringAttribute('group_address');
  }

  // included - computed: true, optional: false, required: false
  public get included() {
    return this.getBooleanAttribute('included');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataScmLogicalRouterListDataVrfMulticastInterfaceGroupGroupPermissionAnySourceMulticastList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfMulticastInterfaceGroupGroupPermissionAnySourceMulticastOutputReference {
    return new DataScmLogicalRouterListDataVrfMulticastInterfaceGroupGroupPermissionAnySourceMulticastOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfMulticastInterfaceGroupGroupPermissionSourceSpecificMulticast {
}

export function dataScmLogicalRouterListDataVrfMulticastInterfaceGroupGroupPermissionSourceSpecificMulticastToTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastInterfaceGroupGroupPermissionSourceSpecificMulticast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfMulticastInterfaceGroupGroupPermissionSourceSpecificMulticastToHclTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastInterfaceGroupGroupPermissionSourceSpecificMulticast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfMulticastInterfaceGroupGroupPermissionSourceSpecificMulticastOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfMulticastInterfaceGroupGroupPermissionSourceSpecificMulticast | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfMulticastInterfaceGroupGroupPermissionSourceSpecificMulticast | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_address - computed: true, optional: false, required: false
  public get groupAddress() {
    return this.getStringAttribute('group_address');
  }

  // included - computed: true, optional: false, required: false
  public get included() {
    return this.getBooleanAttribute('included');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // source_address - computed: true, optional: false, required: false
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
}

export class DataScmLogicalRouterListDataVrfMulticastInterfaceGroupGroupPermissionSourceSpecificMulticastList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfMulticastInterfaceGroupGroupPermissionSourceSpecificMulticastOutputReference {
    return new DataScmLogicalRouterListDataVrfMulticastInterfaceGroupGroupPermissionSourceSpecificMulticastOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfMulticastInterfaceGroupGroupPermission {
}

export function dataScmLogicalRouterListDataVrfMulticastInterfaceGroupGroupPermissionToTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastInterfaceGroupGroupPermission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfMulticastInterfaceGroupGroupPermissionToHclTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastInterfaceGroupGroupPermission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfMulticastInterfaceGroupGroupPermissionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfMulticastInterfaceGroupGroupPermission | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfMulticastInterfaceGroupGroupPermission | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // any_source_multicast - computed: true, optional: false, required: false
  private _anySourceMulticast = new DataScmLogicalRouterListDataVrfMulticastInterfaceGroupGroupPermissionAnySourceMulticastList(this, "any_source_multicast", false);
  public get anySourceMulticast() {
    return this._anySourceMulticast;
  }

  // source_specific_multicast - computed: true, optional: false, required: false
  private _sourceSpecificMulticast = new DataScmLogicalRouterListDataVrfMulticastInterfaceGroupGroupPermissionSourceSpecificMulticastList(this, "source_specific_multicast", false);
  public get sourceSpecificMulticast() {
    return this._sourceSpecificMulticast;
  }
}
export interface DataScmLogicalRouterListDataVrfMulticastInterfaceGroupIgmp {
}

export function dataScmLogicalRouterListDataVrfMulticastInterfaceGroupIgmpToTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastInterfaceGroupIgmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfMulticastInterfaceGroupIgmpToHclTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastInterfaceGroupIgmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfMulticastInterfaceGroupIgmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfMulticastInterfaceGroupIgmp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfMulticastInterfaceGroupIgmp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // immediate_leave - computed: true, optional: false, required: false
  public get immediateLeave() {
    return this.getBooleanAttribute('immediate_leave');
  }

  // last_member_query_interval - computed: true, optional: false, required: false
  public get lastMemberQueryInterval() {
    return this.getNumberAttribute('last_member_query_interval');
  }

  // max_groups - computed: true, optional: false, required: false
  public get maxGroups() {
    return this.getStringAttribute('max_groups');
  }

  // max_query_response_time - computed: true, optional: false, required: false
  public get maxQueryResponseTime() {
    return this.getNumberAttribute('max_query_response_time');
  }

  // max_sources - computed: true, optional: false, required: false
  public get maxSources() {
    return this.getStringAttribute('max_sources');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // query_interval - computed: true, optional: false, required: false
  public get queryInterval() {
    return this.getNumberAttribute('query_interval');
  }

  // robustness - computed: true, optional: false, required: false
  public get robustness() {
    return this.getStringAttribute('robustness');
  }

  // router_alert_policing - computed: true, optional: false, required: false
  public get routerAlertPolicing() {
    return this.getBooleanAttribute('router_alert_policing');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface DataScmLogicalRouterListDataVrfMulticastInterfaceGroupPimAllowedNeighbors {
}

export function dataScmLogicalRouterListDataVrfMulticastInterfaceGroupPimAllowedNeighborsToTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastInterfaceGroupPimAllowedNeighbors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfMulticastInterfaceGroupPimAllowedNeighborsToHclTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastInterfaceGroupPimAllowedNeighbors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfMulticastInterfaceGroupPimAllowedNeighborsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfMulticastInterfaceGroupPimAllowedNeighbors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfMulticastInterfaceGroupPimAllowedNeighbors | undefined) {
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
}

export class DataScmLogicalRouterListDataVrfMulticastInterfaceGroupPimAllowedNeighborsList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfMulticastInterfaceGroupPimAllowedNeighborsOutputReference {
    return new DataScmLogicalRouterListDataVrfMulticastInterfaceGroupPimAllowedNeighborsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfMulticastInterfaceGroupPim {
}

export function dataScmLogicalRouterListDataVrfMulticastInterfaceGroupPimToTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastInterfaceGroupPim): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfMulticastInterfaceGroupPimToHclTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastInterfaceGroupPim): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfMulticastInterfaceGroupPimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfMulticastInterfaceGroupPim | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfMulticastInterfaceGroupPim | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_neighbors - computed: true, optional: false, required: false
  private _allowedNeighbors = new DataScmLogicalRouterListDataVrfMulticastInterfaceGroupPimAllowedNeighborsList(this, "allowed_neighbors", false);
  public get allowedNeighbors() {
    return this._allowedNeighbors;
  }

  // assert_interval - computed: true, optional: false, required: false
  public get assertInterval() {
    return this.getNumberAttribute('assert_interval');
  }

  // bsr_border - computed: true, optional: false, required: false
  public get bsrBorder() {
    return this.getBooleanAttribute('bsr_border');
  }

  // dr_priority - computed: true, optional: false, required: false
  public get drPriority() {
    return this.getNumberAttribute('dr_priority');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // hello_interval - computed: true, optional: false, required: false
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }

  // join_prune_interval - computed: true, optional: false, required: false
  public get joinPruneInterval() {
    return this.getNumberAttribute('join_prune_interval');
  }
}
export interface DataScmLogicalRouterListDataVrfMulticastInterfaceGroup {
}

export function dataScmLogicalRouterListDataVrfMulticastInterfaceGroupToTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastInterfaceGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfMulticastInterfaceGroupToHclTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastInterfaceGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfMulticastInterfaceGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfMulticastInterfaceGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfMulticastInterfaceGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // group_permission - computed: true, optional: false, required: false
  private _groupPermission = new DataScmLogicalRouterListDataVrfMulticastInterfaceGroupGroupPermissionOutputReference(this, "group_permission");
  public get groupPermission() {
    return this._groupPermission;
  }

  // igmp - computed: true, optional: false, required: false
  private _igmp = new DataScmLogicalRouterListDataVrfMulticastInterfaceGroupIgmpOutputReference(this, "igmp");
  public get igmp() {
    return this._igmp;
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getListAttribute('interface');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pim - computed: true, optional: false, required: false
  private _pim = new DataScmLogicalRouterListDataVrfMulticastInterfaceGroupPimOutputReference(this, "pim");
  public get pim() {
    return this._pim;
  }
}

export class DataScmLogicalRouterListDataVrfMulticastInterfaceGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfMulticastInterfaceGroupOutputReference {
    return new DataScmLogicalRouterListDataVrfMulticastInterfaceGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfMulticastMsdpOriginatorId {
}

export function dataScmLogicalRouterListDataVrfMulticastMsdpOriginatorIdToTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastMsdpOriginatorId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfMulticastMsdpOriginatorIdToHclTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastMsdpOriginatorId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfMulticastMsdpOriginatorIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfMulticastMsdpOriginatorId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfMulticastMsdpOriginatorId | undefined) {
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

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }
}
export interface DataScmLogicalRouterListDataVrfMulticastMsdpPeerLocalAddress {
}

export function dataScmLogicalRouterListDataVrfMulticastMsdpPeerLocalAddressToTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastMsdpPeerLocalAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfMulticastMsdpPeerLocalAddressToHclTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastMsdpPeerLocalAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfMulticastMsdpPeerLocalAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfMulticastMsdpPeerLocalAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfMulticastMsdpPeerLocalAddress | undefined) {
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

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }
}
export interface DataScmLogicalRouterListDataVrfMulticastMsdpPeerPeerAddress {
}

export function dataScmLogicalRouterListDataVrfMulticastMsdpPeerPeerAddressToTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastMsdpPeerPeerAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfMulticastMsdpPeerPeerAddressToHclTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastMsdpPeerPeerAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfMulticastMsdpPeerPeerAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfMulticastMsdpPeerPeerAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfMulticastMsdpPeerPeerAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }
}
export interface DataScmLogicalRouterListDataVrfMulticastMsdpPeer {
}

export function dataScmLogicalRouterListDataVrfMulticastMsdpPeerToTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastMsdpPeer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfMulticastMsdpPeerToHclTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastMsdpPeer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfMulticastMsdpPeerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfMulticastMsdpPeer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfMulticastMsdpPeer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication - computed: true, optional: false, required: false
  public get authentication() {
    return this.getStringAttribute('authentication');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // inbound_sa_filter - computed: true, optional: false, required: false
  public get inboundSaFilter() {
    return this.getStringAttribute('inbound_sa_filter');
  }

  // local_address - computed: true, optional: false, required: false
  private _localAddress = new DataScmLogicalRouterListDataVrfMulticastMsdpPeerLocalAddressOutputReference(this, "local_address");
  public get localAddress() {
    return this._localAddress;
  }

  // max_sa - computed: true, optional: false, required: false
  public get maxSa() {
    return this.getNumberAttribute('max_sa');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // outbound_sa_filter - computed: true, optional: false, required: false
  public get outboundSaFilter() {
    return this.getStringAttribute('outbound_sa_filter');
  }

  // peer_address - computed: true, optional: false, required: false
  private _peerAddress = new DataScmLogicalRouterListDataVrfMulticastMsdpPeerPeerAddressOutputReference(this, "peer_address");
  public get peerAddress() {
    return this._peerAddress;
  }

  // peer_as - computed: true, optional: false, required: false
  public get peerAs() {
    return this.getStringAttribute('peer_as');
  }
}

export class DataScmLogicalRouterListDataVrfMulticastMsdpPeerList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfMulticastMsdpPeerOutputReference {
    return new DataScmLogicalRouterListDataVrfMulticastMsdpPeerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfMulticastMsdp {
}

export function dataScmLogicalRouterListDataVrfMulticastMsdpToTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastMsdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfMulticastMsdpToHclTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastMsdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfMulticastMsdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfMulticastMsdp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfMulticastMsdp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // global_authentication - computed: true, optional: false, required: false
  public get globalAuthentication() {
    return this.getStringAttribute('global_authentication');
  }

  // global_timer - computed: true, optional: false, required: false
  public get globalTimer() {
    return this.getStringAttribute('global_timer');
  }

  // originator_id - computed: true, optional: false, required: false
  private _originatorId = new DataScmLogicalRouterListDataVrfMulticastMsdpOriginatorIdOutputReference(this, "originator_id");
  public get originatorId() {
    return this._originatorId;
  }

  // peer - computed: true, optional: false, required: false
  private _peer = new DataScmLogicalRouterListDataVrfMulticastMsdpPeerList(this, "peer", false);
  public get peer() {
    return this._peer;
  }
}
export interface DataScmLogicalRouterListDataVrfMulticastPimInterface {
}

export function dataScmLogicalRouterListDataVrfMulticastPimInterfaceToTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastPimInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfMulticastPimInterfaceToHclTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastPimInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfMulticastPimInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfMulticastPimInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfMulticastPimInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dr_priority - computed: true, optional: false, required: false
  public get drPriority() {
    return this.getNumberAttribute('dr_priority');
  }

  // if_timer - computed: true, optional: false, required: false
  public get ifTimer() {
    return this.getStringAttribute('if_timer');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // neighbor_filter - computed: true, optional: false, required: false
  public get neighborFilter() {
    return this.getStringAttribute('neighbor_filter');
  }

  // send_bsm - computed: true, optional: false, required: false
  public get sendBsm() {
    return this.getBooleanAttribute('send_bsm');
  }
}

export class DataScmLogicalRouterListDataVrfMulticastPimInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfMulticastPimInterfaceOutputReference {
    return new DataScmLogicalRouterListDataVrfMulticastPimInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfMulticastPimRpExternalRp {
}

export function dataScmLogicalRouterListDataVrfMulticastPimRpExternalRpToTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastPimRpExternalRp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfMulticastPimRpExternalRpToHclTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastPimRpExternalRp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfMulticastPimRpExternalRpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfMulticastPimRpExternalRp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfMulticastPimRpExternalRp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_list - computed: true, optional: false, required: false
  public get groupList() {
    return this.getStringAttribute('group_list');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // override - computed: true, optional: false, required: false
  public get override() {
    return this.getBooleanAttribute('override');
  }
}

export class DataScmLogicalRouterListDataVrfMulticastPimRpExternalRpList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfMulticastPimRpExternalRpOutputReference {
    return new DataScmLogicalRouterListDataVrfMulticastPimRpExternalRpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfMulticastPimRpLocalRpCandidateRp {
}

export function dataScmLogicalRouterListDataVrfMulticastPimRpLocalRpCandidateRpToTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastPimRpLocalRpCandidateRp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfMulticastPimRpLocalRpCandidateRpToHclTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastPimRpLocalRpCandidateRp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfMulticastPimRpLocalRpCandidateRpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfMulticastPimRpLocalRpCandidateRp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfMulticastPimRpLocalRpCandidateRp | undefined) {
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

  // advertisement_interval - computed: true, optional: false, required: false
  public get advertisementInterval() {
    return this.getNumberAttribute('advertisement_interval');
  }

  // group_list - computed: true, optional: false, required: false
  public get groupList() {
    return this.getStringAttribute('group_list');
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }
}
export interface DataScmLogicalRouterListDataVrfMulticastPimRpLocalRpStaticRp {
}

export function dataScmLogicalRouterListDataVrfMulticastPimRpLocalRpStaticRpToTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastPimRpLocalRpStaticRp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfMulticastPimRpLocalRpStaticRpToHclTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastPimRpLocalRpStaticRp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfMulticastPimRpLocalRpStaticRpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfMulticastPimRpLocalRpStaticRp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfMulticastPimRpLocalRpStaticRp | undefined) {
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

  // group_list - computed: true, optional: false, required: false
  public get groupList() {
    return this.getStringAttribute('group_list');
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // override - computed: true, optional: false, required: false
  public get override() {
    return this.getBooleanAttribute('override');
  }
}
export interface DataScmLogicalRouterListDataVrfMulticastPimRpLocalRp {
}

export function dataScmLogicalRouterListDataVrfMulticastPimRpLocalRpToTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastPimRpLocalRp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfMulticastPimRpLocalRpToHclTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastPimRpLocalRp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfMulticastPimRpLocalRpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfMulticastPimRpLocalRp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfMulticastPimRpLocalRp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // candidate_rp - computed: true, optional: false, required: false
  private _candidateRp = new DataScmLogicalRouterListDataVrfMulticastPimRpLocalRpCandidateRpOutputReference(this, "candidate_rp");
  public get candidateRp() {
    return this._candidateRp;
  }

  // static_rp - computed: true, optional: false, required: false
  private _staticRp = new DataScmLogicalRouterListDataVrfMulticastPimRpLocalRpStaticRpOutputReference(this, "static_rp");
  public get staticRp() {
    return this._staticRp;
  }
}
export interface DataScmLogicalRouterListDataVrfMulticastPimRp {
}

export function dataScmLogicalRouterListDataVrfMulticastPimRpToTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastPimRp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfMulticastPimRpToHclTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastPimRp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfMulticastPimRpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfMulticastPimRp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfMulticastPimRp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_rp - computed: true, optional: false, required: false
  private _externalRp = new DataScmLogicalRouterListDataVrfMulticastPimRpExternalRpList(this, "external_rp", false);
  public get externalRp() {
    return this._externalRp;
  }

  // local_rp - computed: true, optional: false, required: false
  private _localRp = new DataScmLogicalRouterListDataVrfMulticastPimRpLocalRpOutputReference(this, "local_rp");
  public get localRp() {
    return this._localRp;
  }
}
export interface DataScmLogicalRouterListDataVrfMulticastPimSptThreshold {
}

export function dataScmLogicalRouterListDataVrfMulticastPimSptThresholdToTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastPimSptThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfMulticastPimSptThresholdToHclTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastPimSptThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfMulticastPimSptThresholdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfMulticastPimSptThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfMulticastPimSptThreshold | undefined) {
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

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
}

export class DataScmLogicalRouterListDataVrfMulticastPimSptThresholdList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfMulticastPimSptThresholdOutputReference {
    return new DataScmLogicalRouterListDataVrfMulticastPimSptThresholdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfMulticastPimSsmAddressSpace {
}

export function dataScmLogicalRouterListDataVrfMulticastPimSsmAddressSpaceToTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastPimSsmAddressSpace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfMulticastPimSsmAddressSpaceToHclTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastPimSsmAddressSpace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfMulticastPimSsmAddressSpaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfMulticastPimSsmAddressSpace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfMulticastPimSsmAddressSpace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_list - computed: true, optional: false, required: false
  public get groupList() {
    return this.getStringAttribute('group_list');
  }
}
export interface DataScmLogicalRouterListDataVrfMulticastPim {
}

export function dataScmLogicalRouterListDataVrfMulticastPimToTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastPim): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfMulticastPimToHclTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastPim): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfMulticastPimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfMulticastPim | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfMulticastPim | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // group_permission - computed: true, optional: false, required: false
  public get groupPermission() {
    return this.getStringAttribute('group_permission');
  }

  // if_timer_global - computed: true, optional: false, required: false
  public get ifTimerGlobal() {
    return this.getStringAttribute('if_timer_global');
  }

  // interface - computed: true, optional: false, required: false
  private _interface = new DataScmLogicalRouterListDataVrfMulticastPimInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }

  // route_ageout_time - computed: true, optional: false, required: false
  public get routeAgeoutTime() {
    return this.getNumberAttribute('route_ageout_time');
  }

  // rp - computed: true, optional: false, required: false
  private _rp = new DataScmLogicalRouterListDataVrfMulticastPimRpOutputReference(this, "rp");
  public get rp() {
    return this._rp;
  }

  // rpf_lookup_mode - computed: true, optional: false, required: false
  public get rpfLookupMode() {
    return this.getStringAttribute('rpf_lookup_mode');
  }

  // spt_threshold - computed: true, optional: false, required: false
  private _sptThreshold = new DataScmLogicalRouterListDataVrfMulticastPimSptThresholdList(this, "spt_threshold", false);
  public get sptThreshold() {
    return this._sptThreshold;
  }

  // ssm_address_space - computed: true, optional: false, required: false
  private _ssmAddressSpace = new DataScmLogicalRouterListDataVrfMulticastPimSsmAddressSpaceOutputReference(this, "ssm_address_space");
  public get ssmAddressSpace() {
    return this._ssmAddressSpace;
  }
}
export interface DataScmLogicalRouterListDataVrfMulticastRpExternalRp {
}

export function dataScmLogicalRouterListDataVrfMulticastRpExternalRpToTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastRpExternalRp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfMulticastRpExternalRpToHclTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastRpExternalRp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfMulticastRpExternalRpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfMulticastRpExternalRp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfMulticastRpExternalRp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_addresses - computed: true, optional: false, required: false
  public get groupAddresses() {
    return this.getListAttribute('group_addresses');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // override - computed: true, optional: false, required: false
  public get override() {
    return this.getBooleanAttribute('override');
  }
}

export class DataScmLogicalRouterListDataVrfMulticastRpExternalRpList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfMulticastRpExternalRpOutputReference {
    return new DataScmLogicalRouterListDataVrfMulticastRpExternalRpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfMulticastRpLocalRpCandidateRp {
}

export function dataScmLogicalRouterListDataVrfMulticastRpLocalRpCandidateRpToTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastRpLocalRpCandidateRp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfMulticastRpLocalRpCandidateRpToHclTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastRpLocalRpCandidateRp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfMulticastRpLocalRpCandidateRpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfMulticastRpLocalRpCandidateRp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfMulticastRpLocalRpCandidateRp | undefined) {
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

  // advertisement_interval - computed: true, optional: false, required: false
  public get advertisementInterval() {
    return this.getNumberAttribute('advertisement_interval');
  }

  // group_addresses - computed: true, optional: false, required: false
  public get groupAddresses() {
    return this.getListAttribute('group_addresses');
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }
}
export interface DataScmLogicalRouterListDataVrfMulticastRpLocalRpStaticRp {
}

export function dataScmLogicalRouterListDataVrfMulticastRpLocalRpStaticRpToTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastRpLocalRpStaticRp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfMulticastRpLocalRpStaticRpToHclTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastRpLocalRpStaticRp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfMulticastRpLocalRpStaticRpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfMulticastRpLocalRpStaticRp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfMulticastRpLocalRpStaticRp | undefined) {
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

  // group_addresses - computed: true, optional: false, required: false
  public get groupAddresses() {
    return this.getListAttribute('group_addresses');
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // override - computed: true, optional: false, required: false
  public get override() {
    return this.getBooleanAttribute('override');
  }
}
export interface DataScmLogicalRouterListDataVrfMulticastRpLocalRp {
}

export function dataScmLogicalRouterListDataVrfMulticastRpLocalRpToTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastRpLocalRp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfMulticastRpLocalRpToHclTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastRpLocalRp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfMulticastRpLocalRpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfMulticastRpLocalRp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfMulticastRpLocalRp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // candidate_rp - computed: true, optional: false, required: false
  private _candidateRp = new DataScmLogicalRouterListDataVrfMulticastRpLocalRpCandidateRpOutputReference(this, "candidate_rp");
  public get candidateRp() {
    return this._candidateRp;
  }

  // static_rp - computed: true, optional: false, required: false
  private _staticRp = new DataScmLogicalRouterListDataVrfMulticastRpLocalRpStaticRpOutputReference(this, "static_rp");
  public get staticRp() {
    return this._staticRp;
  }
}
export interface DataScmLogicalRouterListDataVrfMulticastRp {
}

export function dataScmLogicalRouterListDataVrfMulticastRpToTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastRp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfMulticastRpToHclTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastRp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfMulticastRpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfMulticastRp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfMulticastRp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_rp - computed: true, optional: false, required: false
  private _externalRp = new DataScmLogicalRouterListDataVrfMulticastRpExternalRpList(this, "external_rp", false);
  public get externalRp() {
    return this._externalRp;
  }

  // local_rp - computed: true, optional: false, required: false
  private _localRp = new DataScmLogicalRouterListDataVrfMulticastRpLocalRpOutputReference(this, "local_rp");
  public get localRp() {
    return this._localRp;
  }
}
export interface DataScmLogicalRouterListDataVrfMulticastSptThreshold {
}

export function dataScmLogicalRouterListDataVrfMulticastSptThresholdToTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastSptThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfMulticastSptThresholdToHclTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastSptThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfMulticastSptThresholdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfMulticastSptThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfMulticastSptThreshold | undefined) {
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

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
}

export class DataScmLogicalRouterListDataVrfMulticastSptThresholdList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfMulticastSptThresholdOutputReference {
    return new DataScmLogicalRouterListDataVrfMulticastSptThresholdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfMulticastSsmAddressSpace {
}

export function dataScmLogicalRouterListDataVrfMulticastSsmAddressSpaceToTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastSsmAddressSpace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfMulticastSsmAddressSpaceToHclTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastSsmAddressSpace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfMulticastSsmAddressSpaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfMulticastSsmAddressSpace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfMulticastSsmAddressSpace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_address - computed: true, optional: false, required: false
  public get groupAddress() {
    return this.getStringAttribute('group_address');
  }

  // included - computed: true, optional: false, required: false
  public get included() {
    return this.getBooleanAttribute('included');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataScmLogicalRouterListDataVrfMulticastSsmAddressSpaceList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfMulticastSsmAddressSpaceOutputReference {
    return new DataScmLogicalRouterListDataVrfMulticastSsmAddressSpaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfMulticastStaticRouteNexthop {
}

export function dataScmLogicalRouterListDataVrfMulticastStaticRouteNexthopToTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastStaticRouteNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfMulticastStaticRouteNexthopToHclTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastStaticRouteNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfMulticastStaticRouteNexthopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfMulticastStaticRouteNexthop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfMulticastStaticRouteNexthop | undefined) {
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
}
export interface DataScmLogicalRouterListDataVrfMulticastStaticRoute {
}

export function dataScmLogicalRouterListDataVrfMulticastStaticRouteToTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastStaticRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfMulticastStaticRouteToHclTerraform(struct?: DataScmLogicalRouterListDataVrfMulticastStaticRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfMulticastStaticRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfMulticastStaticRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfMulticastStaticRoute | undefined) {
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

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nexthop - computed: true, optional: false, required: false
  private _nexthop = new DataScmLogicalRouterListDataVrfMulticastStaticRouteNexthopOutputReference(this, "nexthop");
  public get nexthop() {
    return this._nexthop;
  }

  // preference - computed: true, optional: false, required: false
  public get preference() {
    return this.getNumberAttribute('preference');
  }
}

export class DataScmLogicalRouterListDataVrfMulticastStaticRouteList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfMulticastStaticRouteOutputReference {
    return new DataScmLogicalRouterListDataVrfMulticastStaticRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfMulticast {
}

export function dataScmLogicalRouterListDataVrfMulticastToTerraform(struct?: DataScmLogicalRouterListDataVrfMulticast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfMulticastToHclTerraform(struct?: DataScmLogicalRouterListDataVrfMulticast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfMulticastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfMulticast | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfMulticast | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // enable_v6 - computed: true, optional: false, required: false
  public get enableV6() {
    return this.getBooleanAttribute('enable_v6');
  }

  // igmp - computed: true, optional: false, required: false
  private _igmp = new DataScmLogicalRouterListDataVrfMulticastIgmpOutputReference(this, "igmp");
  public get igmp() {
    return this._igmp;
  }

  // interface_group - computed: true, optional: false, required: false
  private _interfaceGroup = new DataScmLogicalRouterListDataVrfMulticastInterfaceGroupList(this, "interface_group", false);
  public get interfaceGroup() {
    return this._interfaceGroup;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // msdp - computed: true, optional: false, required: false
  private _msdp = new DataScmLogicalRouterListDataVrfMulticastMsdpOutputReference(this, "msdp");
  public get msdp() {
    return this._msdp;
  }

  // pim - computed: true, optional: false, required: false
  private _pim = new DataScmLogicalRouterListDataVrfMulticastPimOutputReference(this, "pim");
  public get pim() {
    return this._pim;
  }

  // route_ageout_time - computed: true, optional: false, required: false
  public get routeAgeoutTime() {
    return this.getNumberAttribute('route_ageout_time');
  }

  // rp - computed: true, optional: false, required: false
  private _rp = new DataScmLogicalRouterListDataVrfMulticastRpOutputReference(this, "rp");
  public get rp() {
    return this._rp;
  }

  // spt_threshold - computed: true, optional: false, required: false
  private _sptThreshold = new DataScmLogicalRouterListDataVrfMulticastSptThresholdList(this, "spt_threshold", false);
  public get sptThreshold() {
    return this._sptThreshold;
  }

  // ssm_address_space - computed: true, optional: false, required: false
  private _ssmAddressSpace = new DataScmLogicalRouterListDataVrfMulticastSsmAddressSpaceList(this, "ssm_address_space", false);
  public get ssmAddressSpace() {
    return this._ssmAddressSpace;
  }

  // static_route - computed: true, optional: false, required: false
  private _staticRoute = new DataScmLogicalRouterListDataVrfMulticastStaticRouteList(this, "static_route", false);
  public get staticRoute() {
    return this._staticRoute;
  }
}
export interface DataScmLogicalRouterListDataVrfOspfAreaInterfaceBfd {
}

export function dataScmLogicalRouterListDataVrfOspfAreaInterfaceBfdToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaInterfaceBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfAreaInterfaceBfdToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaInterfaceBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfAreaInterfaceBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfAreaInterfaceBfd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfAreaInterfaceBfd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // profile - computed: true, optional: false, required: false
  public get profile() {
    return this.getStringAttribute('profile');
  }
}
export interface DataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeBroadcast {
}

export function dataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeBroadcastToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeBroadcast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeBroadcastToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeBroadcast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeBroadcastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeBroadcast | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeBroadcast | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
