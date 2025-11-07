import * as cdktf from 'cdktf';
export interface DataScmLogicalRouterVrfAdminDists {
}

export function dataScmLogicalRouterVrfAdminDistsToTerraform(struct?: DataScmLogicalRouterVrfAdminDists): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfAdminDistsToHclTerraform(struct?: DataScmLogicalRouterVrfAdminDists): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfAdminDistsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfAdminDists | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfAdminDists | undefined) {
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
export interface DataScmLogicalRouterVrfBgpAdvertiseNetworkIpv4Network {
}

export function dataScmLogicalRouterVrfBgpAdvertiseNetworkIpv4NetworkToTerraform(struct?: DataScmLogicalRouterVrfBgpAdvertiseNetworkIpv4Network): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpAdvertiseNetworkIpv4NetworkToHclTerraform(struct?: DataScmLogicalRouterVrfBgpAdvertiseNetworkIpv4Network): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpAdvertiseNetworkIpv4NetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfBgpAdvertiseNetworkIpv4Network | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpAdvertiseNetworkIpv4Network | undefined) {
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

export class DataScmLogicalRouterVrfBgpAdvertiseNetworkIpv4NetworkList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfBgpAdvertiseNetworkIpv4NetworkOutputReference {
    return new DataScmLogicalRouterVrfBgpAdvertiseNetworkIpv4NetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfBgpAdvertiseNetworkIpv4 {
}

export function dataScmLogicalRouterVrfBgpAdvertiseNetworkIpv4ToTerraform(struct?: DataScmLogicalRouterVrfBgpAdvertiseNetworkIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpAdvertiseNetworkIpv4ToHclTerraform(struct?: DataScmLogicalRouterVrfBgpAdvertiseNetworkIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpAdvertiseNetworkIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpAdvertiseNetworkIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpAdvertiseNetworkIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // network - computed: true, optional: false, required: false
  private _network = new DataScmLogicalRouterVrfBgpAdvertiseNetworkIpv4NetworkList(this, "network", false);
  public get network() {
    return this._network;
  }
}
export interface DataScmLogicalRouterVrfBgpAdvertiseNetworkIpv6Network {
}

export function dataScmLogicalRouterVrfBgpAdvertiseNetworkIpv6NetworkToTerraform(struct?: DataScmLogicalRouterVrfBgpAdvertiseNetworkIpv6Network): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpAdvertiseNetworkIpv6NetworkToHclTerraform(struct?: DataScmLogicalRouterVrfBgpAdvertiseNetworkIpv6Network): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpAdvertiseNetworkIpv6NetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfBgpAdvertiseNetworkIpv6Network | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpAdvertiseNetworkIpv6Network | undefined) {
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

export class DataScmLogicalRouterVrfBgpAdvertiseNetworkIpv6NetworkList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfBgpAdvertiseNetworkIpv6NetworkOutputReference {
    return new DataScmLogicalRouterVrfBgpAdvertiseNetworkIpv6NetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfBgpAdvertiseNetworkIpv6 {
}

export function dataScmLogicalRouterVrfBgpAdvertiseNetworkIpv6ToTerraform(struct?: DataScmLogicalRouterVrfBgpAdvertiseNetworkIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpAdvertiseNetworkIpv6ToHclTerraform(struct?: DataScmLogicalRouterVrfBgpAdvertiseNetworkIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpAdvertiseNetworkIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpAdvertiseNetworkIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpAdvertiseNetworkIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // network - computed: true, optional: false, required: false
  private _network = new DataScmLogicalRouterVrfBgpAdvertiseNetworkIpv6NetworkList(this, "network", false);
  public get network() {
    return this._network;
  }
}
export interface DataScmLogicalRouterVrfBgpAdvertiseNetwork {
}

export function dataScmLogicalRouterVrfBgpAdvertiseNetworkToTerraform(struct?: DataScmLogicalRouterVrfBgpAdvertiseNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpAdvertiseNetworkToHclTerraform(struct?: DataScmLogicalRouterVrfBgpAdvertiseNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpAdvertiseNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpAdvertiseNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpAdvertiseNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataScmLogicalRouterVrfBgpAdvertiseNetworkIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataScmLogicalRouterVrfBgpAdvertiseNetworkIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
}
export interface DataScmLogicalRouterVrfBgpAggregate {
}

export function dataScmLogicalRouterVrfBgpAggregateToTerraform(struct?: DataScmLogicalRouterVrfBgpAggregate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpAggregateToHclTerraform(struct?: DataScmLogicalRouterVrfBgpAggregate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpAggregateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpAggregate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpAggregate | undefined) {
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
export interface DataScmLogicalRouterVrfBgpAggregateRoutesTypeIpv4 {
}

export function dataScmLogicalRouterVrfBgpAggregateRoutesTypeIpv4ToTerraform(struct?: DataScmLogicalRouterVrfBgpAggregateRoutesTypeIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpAggregateRoutesTypeIpv4ToHclTerraform(struct?: DataScmLogicalRouterVrfBgpAggregateRoutesTypeIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpAggregateRoutesTypeIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpAggregateRoutesTypeIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpAggregateRoutesTypeIpv4 | undefined) {
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
export interface DataScmLogicalRouterVrfBgpAggregateRoutesTypeIpv6 {
}

export function dataScmLogicalRouterVrfBgpAggregateRoutesTypeIpv6ToTerraform(struct?: DataScmLogicalRouterVrfBgpAggregateRoutesTypeIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpAggregateRoutesTypeIpv6ToHclTerraform(struct?: DataScmLogicalRouterVrfBgpAggregateRoutesTypeIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpAggregateRoutesTypeIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpAggregateRoutesTypeIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpAggregateRoutesTypeIpv6 | undefined) {
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
export interface DataScmLogicalRouterVrfBgpAggregateRoutesType {
}

export function dataScmLogicalRouterVrfBgpAggregateRoutesTypeToTerraform(struct?: DataScmLogicalRouterVrfBgpAggregateRoutesType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpAggregateRoutesTypeToHclTerraform(struct?: DataScmLogicalRouterVrfBgpAggregateRoutesType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpAggregateRoutesTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpAggregateRoutesType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpAggregateRoutesType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataScmLogicalRouterVrfBgpAggregateRoutesTypeIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataScmLogicalRouterVrfBgpAggregateRoutesTypeIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
}
export interface DataScmLogicalRouterVrfBgpAggregateRoutes {
}

export function dataScmLogicalRouterVrfBgpAggregateRoutesToTerraform(struct?: DataScmLogicalRouterVrfBgpAggregateRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpAggregateRoutesToHclTerraform(struct?: DataScmLogicalRouterVrfBgpAggregateRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpAggregateRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfBgpAggregateRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpAggregateRoutes | undefined) {
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
  private _type = new DataScmLogicalRouterVrfBgpAggregateRoutesTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
}

export class DataScmLogicalRouterVrfBgpAggregateRoutesList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfBgpAggregateRoutesOutputReference {
    return new DataScmLogicalRouterVrfBgpAggregateRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfBgpGlobalBfd {
}

export function dataScmLogicalRouterVrfBgpGlobalBfdToTerraform(struct?: DataScmLogicalRouterVrfBgpGlobalBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpGlobalBfdToHclTerraform(struct?: DataScmLogicalRouterVrfBgpGlobalBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpGlobalBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpGlobalBfd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpGlobalBfd | undefined) {
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
export interface DataScmLogicalRouterVrfBgpGracefulRestart {
}

export function dataScmLogicalRouterVrfBgpGracefulRestartToTerraform(struct?: DataScmLogicalRouterVrfBgpGracefulRestart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpGracefulRestartToHclTerraform(struct?: DataScmLogicalRouterVrfBgpGracefulRestart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpGracefulRestartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpGracefulRestart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpGracefulRestart | undefined) {
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
export interface DataScmLogicalRouterVrfBgpMed {
}

export function dataScmLogicalRouterVrfBgpMedToTerraform(struct?: DataScmLogicalRouterVrfBgpMed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpMedToHclTerraform(struct?: DataScmLogicalRouterVrfBgpMed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpMedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpMed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpMed | undefined) {
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
export interface DataScmLogicalRouterVrfBgpPeerGroupAddressFamily {
}

export function dataScmLogicalRouterVrfBgpPeerGroupAddressFamilyToTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupAddressFamily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPeerGroupAddressFamilyToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupAddressFamily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPeerGroupAddressFamilyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPeerGroupAddressFamily | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPeerGroupAddressFamily | undefined) {
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
export interface DataScmLogicalRouterVrfBgpPeerGroupConnectionOptions {
}

export function dataScmLogicalRouterVrfBgpPeerGroupConnectionOptionsToTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupConnectionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPeerGroupConnectionOptionsToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupConnectionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPeerGroupConnectionOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPeerGroupConnectionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPeerGroupConnectionOptions | undefined) {
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
export interface DataScmLogicalRouterVrfBgpPeerGroupFilteringProfile {
}

export function dataScmLogicalRouterVrfBgpPeerGroupFilteringProfileToTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupFilteringProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPeerGroupFilteringProfileToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupFilteringProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPeerGroupFilteringProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPeerGroupFilteringProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPeerGroupFilteringProfile | undefined) {
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
export interface DataScmLogicalRouterVrfBgpPeerGroupPeerBfdMultihop {
}

export function dataScmLogicalRouterVrfBgpPeerGroupPeerBfdMultihopToTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupPeerBfdMultihop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPeerGroupPeerBfdMultihopToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupPeerBfdMultihop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPeerGroupPeerBfdMultihopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPeerGroupPeerBfdMultihop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPeerGroupPeerBfdMultihop | undefined) {
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
export interface DataScmLogicalRouterVrfBgpPeerGroupPeerBfd {
}

export function dataScmLogicalRouterVrfBgpPeerGroupPeerBfdToTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupPeerBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPeerGroupPeerBfdToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupPeerBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPeerGroupPeerBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPeerGroupPeerBfd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPeerGroupPeerBfd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // multihop - computed: true, optional: false, required: false
  private _multihop = new DataScmLogicalRouterVrfBgpPeerGroupPeerBfdMultihopOutputReference(this, "multihop");
  public get multihop() {
    return this._multihop;
  }

  // profile - computed: true, optional: false, required: false
  public get profile() {
    return this.getStringAttribute('profile');
  }
}
export interface DataScmLogicalRouterVrfBgpPeerGroupPeerConnectionOptionsIncomingBgpConnection {
}

export function dataScmLogicalRouterVrfBgpPeerGroupPeerConnectionOptionsIncomingBgpConnectionToTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupPeerConnectionOptionsIncomingBgpConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPeerGroupPeerConnectionOptionsIncomingBgpConnectionToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupPeerConnectionOptionsIncomingBgpConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPeerGroupPeerConnectionOptionsIncomingBgpConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPeerGroupPeerConnectionOptionsIncomingBgpConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPeerGroupPeerConnectionOptionsIncomingBgpConnection | undefined) {
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
export interface DataScmLogicalRouterVrfBgpPeerGroupPeerConnectionOptionsOutgoingBgpConnection {
}

export function dataScmLogicalRouterVrfBgpPeerGroupPeerConnectionOptionsOutgoingBgpConnectionToTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupPeerConnectionOptionsOutgoingBgpConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPeerGroupPeerConnectionOptionsOutgoingBgpConnectionToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupPeerConnectionOptionsOutgoingBgpConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPeerGroupPeerConnectionOptionsOutgoingBgpConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPeerGroupPeerConnectionOptionsOutgoingBgpConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPeerGroupPeerConnectionOptionsOutgoingBgpConnection | undefined) {
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
export interface DataScmLogicalRouterVrfBgpPeerGroupPeerConnectionOptions {
}

export function dataScmLogicalRouterVrfBgpPeerGroupPeerConnectionOptionsToTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupPeerConnectionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPeerGroupPeerConnectionOptionsToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupPeerConnectionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPeerGroupPeerConnectionOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPeerGroupPeerConnectionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPeerGroupPeerConnectionOptions | undefined) {
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
  private _incomingBgpConnection = new DataScmLogicalRouterVrfBgpPeerGroupPeerConnectionOptionsIncomingBgpConnectionOutputReference(this, "incoming_bgp_connection");
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
  private _outgoingBgpConnection = new DataScmLogicalRouterVrfBgpPeerGroupPeerConnectionOptionsOutgoingBgpConnectionOutputReference(this, "outgoing_bgp_connection");
  public get outgoingBgpConnection() {
    return this._outgoingBgpConnection;
  }

  // timers - computed: true, optional: false, required: false
  public get timers() {
    return this.getStringAttribute('timers');
  }
}
export interface DataScmLogicalRouterVrfBgpPeerGroupPeerInheritNoAddressFamily {
}

export function dataScmLogicalRouterVrfBgpPeerGroupPeerInheritNoAddressFamilyToTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupPeerInheritNoAddressFamily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPeerGroupPeerInheritNoAddressFamilyToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupPeerInheritNoAddressFamily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPeerGroupPeerInheritNoAddressFamilyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPeerGroupPeerInheritNoAddressFamily | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPeerGroupPeerInheritNoAddressFamily | undefined) {
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
export interface DataScmLogicalRouterVrfBgpPeerGroupPeerInheritNoFilteringProfile {
}

export function dataScmLogicalRouterVrfBgpPeerGroupPeerInheritNoFilteringProfileToTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupPeerInheritNoFilteringProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPeerGroupPeerInheritNoFilteringProfileToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupPeerInheritNoFilteringProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPeerGroupPeerInheritNoFilteringProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPeerGroupPeerInheritNoFilteringProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPeerGroupPeerInheritNoFilteringProfile | undefined) {
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
export interface DataScmLogicalRouterVrfBgpPeerGroupPeerInheritNo {
}

export function dataScmLogicalRouterVrfBgpPeerGroupPeerInheritNoToTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupPeerInheritNo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPeerGroupPeerInheritNoToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupPeerInheritNo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPeerGroupPeerInheritNoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPeerGroupPeerInheritNo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPeerGroupPeerInheritNo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_family - computed: true, optional: false, required: false
  private _addressFamily = new DataScmLogicalRouterVrfBgpPeerGroupPeerInheritNoAddressFamilyOutputReference(this, "address_family");
  public get addressFamily() {
    return this._addressFamily;
  }

  // filtering_profile - computed: true, optional: false, required: false
  private _filteringProfile = new DataScmLogicalRouterVrfBgpPeerGroupPeerInheritNoFilteringProfileOutputReference(this, "filtering_profile");
  public get filteringProfile() {
    return this._filteringProfile;
  }
}
export interface DataScmLogicalRouterVrfBgpPeerGroupPeerInheritYes {
}

export function dataScmLogicalRouterVrfBgpPeerGroupPeerInheritYesToTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupPeerInheritYes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPeerGroupPeerInheritYesToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupPeerInheritYes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPeerGroupPeerInheritYesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPeerGroupPeerInheritYes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPeerGroupPeerInheritYes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfBgpPeerGroupPeerInherit {
}

export function dataScmLogicalRouterVrfBgpPeerGroupPeerInheritToTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupPeerInherit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPeerGroupPeerInheritToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupPeerInherit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPeerGroupPeerInheritOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPeerGroupPeerInherit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPeerGroupPeerInherit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // no - computed: true, optional: false, required: false
  private _no = new DataScmLogicalRouterVrfBgpPeerGroupPeerInheritNoOutputReference(this, "no");
  public get no() {
    return this._no;
  }

  // yes - computed: true, optional: false, required: false
  private _yes = new DataScmLogicalRouterVrfBgpPeerGroupPeerInheritYesOutputReference(this, "yes");
  public get yes() {
    return this._yes;
  }
}
export interface DataScmLogicalRouterVrfBgpPeerGroupPeerLocalAddress {
}

export function dataScmLogicalRouterVrfBgpPeerGroupPeerLocalAddressToTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupPeerLocalAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPeerGroupPeerLocalAddressToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupPeerLocalAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPeerGroupPeerLocalAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPeerGroupPeerLocalAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPeerGroupPeerLocalAddress | undefined) {
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
export interface DataScmLogicalRouterVrfBgpPeerGroupPeerPeerAddress {
}

export function dataScmLogicalRouterVrfBgpPeerGroupPeerPeerAddressToTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupPeerPeerAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPeerGroupPeerPeerAddressToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupPeerPeerAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPeerGroupPeerPeerAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPeerGroupPeerPeerAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPeerGroupPeerPeerAddress | undefined) {
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
export interface DataScmLogicalRouterVrfBgpPeerGroupPeerSubsequentAddressFamilyIdentifier {
}

export function dataScmLogicalRouterVrfBgpPeerGroupPeerSubsequentAddressFamilyIdentifierToTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupPeerSubsequentAddressFamilyIdentifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPeerGroupPeerSubsequentAddressFamilyIdentifierToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupPeerSubsequentAddressFamilyIdentifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPeerGroupPeerSubsequentAddressFamilyIdentifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPeerGroupPeerSubsequentAddressFamilyIdentifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPeerGroupPeerSubsequentAddressFamilyIdentifier | undefined) {
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
export interface DataScmLogicalRouterVrfBgpPeerGroupPeer {
}

export function dataScmLogicalRouterVrfBgpPeerGroupPeerToTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupPeer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPeerGroupPeerToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupPeer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPeerGroupPeerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfBgpPeerGroupPeer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPeerGroupPeer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bfd - computed: true, optional: false, required: false
  private _bfd = new DataScmLogicalRouterVrfBgpPeerGroupPeerBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }

  // connection_options - computed: true, optional: false, required: false
  private _connectionOptions = new DataScmLogicalRouterVrfBgpPeerGroupPeerConnectionOptionsOutputReference(this, "connection_options");
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
  private _inherit = new DataScmLogicalRouterVrfBgpPeerGroupPeerInheritOutputReference(this, "inherit");
  public get inherit() {
    return this._inherit;
  }

  // local_address - computed: true, optional: false, required: false
  private _localAddress = new DataScmLogicalRouterVrfBgpPeerGroupPeerLocalAddressOutputReference(this, "local_address");
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
  private _peerAddress = new DataScmLogicalRouterVrfBgpPeerGroupPeerPeerAddressOutputReference(this, "peer_address");
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
  private _subsequentAddressFamilyIdentifier = new DataScmLogicalRouterVrfBgpPeerGroupPeerSubsequentAddressFamilyIdentifierOutputReference(this, "subsequent_address_family_identifier");
  public get subsequentAddressFamilyIdentifier() {
    return this._subsequentAddressFamilyIdentifier;
  }
}

export class DataScmLogicalRouterVrfBgpPeerGroupPeerList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfBgpPeerGroupPeerOutputReference {
    return new DataScmLogicalRouterVrfBgpPeerGroupPeerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfBgpPeerGroupTypeEbgp {
}

export function dataScmLogicalRouterVrfBgpPeerGroupTypeEbgpToTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupTypeEbgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPeerGroupTypeEbgpToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupTypeEbgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPeerGroupTypeEbgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPeerGroupTypeEbgp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPeerGroupTypeEbgp | undefined) {
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
export interface DataScmLogicalRouterVrfBgpPeerGroupTypeEbgpConfed {
}

export function dataScmLogicalRouterVrfBgpPeerGroupTypeEbgpConfedToTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupTypeEbgpConfed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPeerGroupTypeEbgpConfedToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupTypeEbgpConfed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPeerGroupTypeEbgpConfedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPeerGroupTypeEbgpConfed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPeerGroupTypeEbgpConfed | undefined) {
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
export interface DataScmLogicalRouterVrfBgpPeerGroupTypeIbgp {
}

export function dataScmLogicalRouterVrfBgpPeerGroupTypeIbgpToTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupTypeIbgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPeerGroupTypeIbgpToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupTypeIbgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPeerGroupTypeIbgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPeerGroupTypeIbgp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPeerGroupTypeIbgp | undefined) {
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
export interface DataScmLogicalRouterVrfBgpPeerGroupTypeIbgpConfed {
}

export function dataScmLogicalRouterVrfBgpPeerGroupTypeIbgpConfedToTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupTypeIbgpConfed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPeerGroupTypeIbgpConfedToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupTypeIbgpConfed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPeerGroupTypeIbgpConfedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPeerGroupTypeIbgpConfed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPeerGroupTypeIbgpConfed | undefined) {
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
export interface DataScmLogicalRouterVrfBgpPeerGroupType {
}

export function dataScmLogicalRouterVrfBgpPeerGroupTypeToTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPeerGroupTypeToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroupType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPeerGroupTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPeerGroupType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPeerGroupType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ebgp - computed: true, optional: false, required: false
  private _ebgp = new DataScmLogicalRouterVrfBgpPeerGroupTypeEbgpOutputReference(this, "ebgp");
  public get ebgp() {
    return this._ebgp;
  }

  // ebgp_confed - computed: true, optional: false, required: false
  private _ebgpConfed = new DataScmLogicalRouterVrfBgpPeerGroupTypeEbgpConfedOutputReference(this, "ebgp_confed");
  public get ebgpConfed() {
    return this._ebgpConfed;
  }

  // ibgp - computed: true, optional: false, required: false
  private _ibgp = new DataScmLogicalRouterVrfBgpPeerGroupTypeIbgpOutputReference(this, "ibgp");
  public get ibgp() {
    return this._ibgp;
  }

  // ibgp_confed - computed: true, optional: false, required: false
  private _ibgpConfed = new DataScmLogicalRouterVrfBgpPeerGroupTypeIbgpConfedOutputReference(this, "ibgp_confed");
  public get ibgpConfed() {
    return this._ibgpConfed;
  }
}
export interface DataScmLogicalRouterVrfBgpPeerGroup {
}

export function dataScmLogicalRouterVrfBgpPeerGroupToTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPeerGroupToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPeerGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPeerGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfBgpPeerGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPeerGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_family - computed: true, optional: false, required: false
  private _addressFamily = new DataScmLogicalRouterVrfBgpPeerGroupAddressFamilyOutputReference(this, "address_family");
  public get addressFamily() {
    return this._addressFamily;
  }

  // aggregated_confed_as_path - computed: true, optional: false, required: false
  public get aggregatedConfedAsPath() {
    return this.getBooleanAttribute('aggregated_confed_as_path');
  }

  // connection_options - computed: true, optional: false, required: false
  private _connectionOptions = new DataScmLogicalRouterVrfBgpPeerGroupConnectionOptionsOutputReference(this, "connection_options");
  public get connectionOptions() {
    return this._connectionOptions;
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // filtering_profile - computed: true, optional: false, required: false
  private _filteringProfile = new DataScmLogicalRouterVrfBgpPeerGroupFilteringProfileOutputReference(this, "filtering_profile");
  public get filteringProfile() {
    return this._filteringProfile;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // peer - computed: true, optional: false, required: false
  private _peer = new DataScmLogicalRouterVrfBgpPeerGroupPeerList(this, "peer", false);
  public get peer() {
    return this._peer;
  }

  // soft_reset_with_stored_info - computed: true, optional: false, required: false
  public get softResetWithStoredInfo() {
    return this.getBooleanAttribute('soft_reset_with_stored_info');
  }

  // type - computed: true, optional: false, required: false
  private _type = new DataScmLogicalRouterVrfBgpPeerGroupTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
}

export class DataScmLogicalRouterVrfBgpPeerGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfBgpPeerGroupOutputReference {
    return new DataScmLogicalRouterVrfBgpPeerGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchAddressPrefix {
}

export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchAddressPrefixToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchAddressPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchAddressPrefixToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchAddressPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchAddressPrefixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchAddressPrefix | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchAddressPrefix | undefined) {
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

export class DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchAddressPrefixList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchAddressPrefixOutputReference {
    return new DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchAddressPrefixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchAsPath {
}

export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchAsPathToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchAsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchAsPathToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchAsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchAsPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchAsPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchAsPath | undefined) {
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
export interface DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchCommunity {
}

export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchCommunityToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchCommunityToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchCommunity | undefined) {
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
export interface DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchExtendedCommunity {
}

export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchExtendedCommunityToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchExtendedCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchExtendedCommunityToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchExtendedCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchExtendedCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchExtendedCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchExtendedCommunity | undefined) {
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
export interface DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatch {
}

export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_prefix - computed: true, optional: false, required: false
  private _addressPrefix = new DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchAddressPrefixList(this, "address_prefix", false);
  public get addressPrefix() {
    return this._addressPrefix;
  }

  // afi - computed: true, optional: false, required: false
  public get afi() {
    return this.getStringAttribute('afi');
  }

  // as_path - computed: true, optional: false, required: false
  private _asPath = new DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchAsPathOutputReference(this, "as_path");
  public get asPath() {
    return this._asPath;
  }

  // community - computed: true, optional: false, required: false
  private _community = new DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchCommunityOutputReference(this, "community");
  public get community() {
    return this._community;
  }

  // extended_community - computed: true, optional: false, required: false
  private _extendedCommunity = new DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchExtendedCommunityOutputReference(this, "extended_community");
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
export interface DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFilters {
}

export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFilters | undefined) {
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
  private _match = new DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersOutputReference {
    return new DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathNone {
}

export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathNoneToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathNoneToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathNone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathNone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathRemove {
}

export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathRemoveToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathRemove): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathRemoveToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathRemove): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathRemoveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathRemove | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathRemove | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPath {
}

export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // none - computed: true, optional: false, required: false
  private _none = new DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }

  // prepend - computed: true, optional: false, required: false
  public get prepend() {
    return this.getNumberAttribute('prepend');
  }

  // remove - computed: true, optional: false, required: false
  private _remove = new DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathRemoveOutputReference(this, "remove");
  public get remove() {
    return this._remove;
  }

  // remove_and_prepend - computed: true, optional: false, required: false
  public get removeAndPrepend() {
    return this.getNumberAttribute('remove_and_prepend');
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityNone {
}

export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityNoneToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityNoneToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityNone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityNone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityRemoveAll {
}

export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityRemoveAllToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityRemoveAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityRemoveAllToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityRemoveAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityRemoveAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityRemoveAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityRemoveAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunity {
}

export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunity | undefined) {
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
  private _none = new DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }

  // overwrite - computed: true, optional: false, required: false
  public get overwrite() {
    return this.getListAttribute('overwrite');
  }

  // remove_all - computed: true, optional: false, required: false
  private _removeAll = new DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityRemoveAllOutputReference(this, "remove_all");
  public get removeAll() {
    return this._removeAll;
  }

  // remove_regex - computed: true, optional: false, required: false
  public get removeRegex() {
    return this.getStringAttribute('remove_regex');
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityNone {
}

export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityNoneToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityNoneToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityNone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityNone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityRemoveAll {
}

export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityRemoveAllToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityRemoveAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityRemoveAllToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityRemoveAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityRemoveAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityRemoveAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityRemoveAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunity {
}

export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunity | undefined) {
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
  private _none = new DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }

  // overwrite - computed: true, optional: false, required: false
  public get overwrite() {
    return this.getListAttribute('overwrite');
  }

  // remove_all - computed: true, optional: false, required: false
  private _removeAll = new DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityRemoveAllOutputReference(this, "remove_all");
  public get removeAll() {
    return this._removeAll;
  }

  // remove_regex - computed: true, optional: false, required: false
  public get removeRegex() {
    return this.getStringAttribute('remove_regex');
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributes {
}

export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // as_path - computed: true, optional: false, required: false
  private _asPath = new DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesAsPathOutputReference(this, "as_path");
  public get asPath() {
    return this._asPath;
  }

  // as_path_limit - computed: true, optional: false, required: false
  public get asPathLimit() {
    return this.getNumberAttribute('as_path_limit');
  }

  // community - computed: true, optional: false, required: false
  private _community = new DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesCommunityOutputReference(this, "community");
  public get community() {
    return this._community;
  }

  // extended_community - computed: true, optional: false, required: false
  private _extendedCommunity = new DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesExtendedCommunityOutputReference(this, "extended_community");
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
export interface DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchAddressPrefix {
}

export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchAddressPrefixToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchAddressPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchAddressPrefixToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchAddressPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchAddressPrefixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchAddressPrefix | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchAddressPrefix | undefined) {
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

export class DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchAddressPrefixList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchAddressPrefixOutputReference {
    return new DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchAddressPrefixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchAsPath {
}

export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchAsPathToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchAsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchAsPathToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchAsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchAsPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchAsPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchAsPath | undefined) {
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
export interface DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchCommunity {
}

export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchCommunityToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchCommunityToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchCommunity | undefined) {
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
export interface DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchExtendedCommunity {
}

export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchExtendedCommunityToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchExtendedCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchExtendedCommunityToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchExtendedCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchExtendedCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchExtendedCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchExtendedCommunity | undefined) {
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
export interface DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatch {
}

export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_prefix - computed: true, optional: false, required: false
  private _addressPrefix = new DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchAddressPrefixList(this, "address_prefix", false);
  public get addressPrefix() {
    return this._addressPrefix;
  }

  // afi - computed: true, optional: false, required: false
  public get afi() {
    return this.getStringAttribute('afi');
  }

  // as_path - computed: true, optional: false, required: false
  private _asPath = new DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchAsPathOutputReference(this, "as_path");
  public get asPath() {
    return this._asPath;
  }

  // community - computed: true, optional: false, required: false
  private _community = new DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchCommunityOutputReference(this, "community");
  public get community() {
    return this._community;
  }

  // extended_community - computed: true, optional: false, required: false
  private _extendedCommunity = new DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchExtendedCommunityOutputReference(this, "extended_community");
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
export interface DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFilters {
}

export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFilters | undefined) {
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
  private _match = new DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersOutputReference {
    return new DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyAggregationAddress {
}

export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyAggregationAddressToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregationAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyAggregationAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyAggregationAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyAggregationAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise_filters - computed: true, optional: false, required: false
  private _advertiseFilters = new DataScmLogicalRouterVrfBgpPolicyAggregationAddressAdvertiseFiltersList(this, "advertise_filters", false);
  public get advertiseFilters() {
    return this._advertiseFilters;
  }

  // aggregate_route_attributes - computed: true, optional: false, required: false
  private _aggregateRouteAttributes = new DataScmLogicalRouterVrfBgpPolicyAggregationAddressAggregateRouteAttributesOutputReference(this, "aggregate_route_attributes");
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
  private _suppressFilters = new DataScmLogicalRouterVrfBgpPolicyAggregationAddressSuppressFiltersList(this, "suppress_filters", false);
  public get suppressFilters() {
    return this._suppressFilters;
  }
}

export class DataScmLogicalRouterVrfBgpPolicyAggregationAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfBgpPolicyAggregationAddressOutputReference {
    return new DataScmLogicalRouterVrfBgpPolicyAggregationAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyAggregation {
}

export function dataScmLogicalRouterVrfBgpPolicyAggregationToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyAggregationToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyAggregation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  private _address = new DataScmLogicalRouterVrfBgpPolicyAggregationAddressList(this, "address", false);
  public get address() {
    return this._address;
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchAddressPrefix {
}

export function dataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchAddressPrefixToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchAddressPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchAddressPrefixToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchAddressPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchAddressPrefixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchAddressPrefix | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchAddressPrefix | undefined) {
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

export class DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchAddressPrefixList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchAddressPrefixOutputReference {
    return new DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchAddressPrefixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchAsPath {
}

export function dataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchAsPathToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchAsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchAsPathToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchAsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchAsPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchAsPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchAsPath | undefined) {
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
export interface DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchCommunity {
}

export function dataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchCommunityToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchCommunityToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchCommunity | undefined) {
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
export interface DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchExtendedCommunity {
}

export function dataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchExtendedCommunityToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchExtendedCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchExtendedCommunityToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchExtendedCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchExtendedCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchExtendedCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchExtendedCommunity | undefined) {
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
export interface DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatch {
}

export function dataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_prefix - computed: true, optional: false, required: false
  private _addressPrefix = new DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchAddressPrefixList(this, "address_prefix", false);
  public get addressPrefix() {
    return this._addressPrefix;
  }

  // afi - computed: true, optional: false, required: false
  public get afi() {
    return this.getStringAttribute('afi');
  }

  // as_path - computed: true, optional: false, required: false
  private _asPath = new DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchAsPathOutputReference(this, "as_path");
  public get asPath() {
    return this._asPath;
  }

  // community - computed: true, optional: false, required: false
  private _community = new DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchCommunityOutputReference(this, "community");
  public get community() {
    return this._community;
  }

  // extended_community - computed: true, optional: false, required: false
  private _extendedCommunity = new DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchExtendedCommunityOutputReference(this, "extended_community");
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
export interface DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFilters {
}

export function dataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFilters | undefined) {
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
  private _match = new DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersOutputReference {
    return new DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchAddressPrefix {
}

export function dataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchAddressPrefixToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchAddressPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchAddressPrefixToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchAddressPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchAddressPrefixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchAddressPrefix | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchAddressPrefix | undefined) {
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

export class DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchAddressPrefixList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchAddressPrefixOutputReference {
    return new DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchAddressPrefixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchAsPath {
}

export function dataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchAsPathToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchAsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchAsPathToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchAsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchAsPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchAsPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchAsPath | undefined) {
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
export interface DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchCommunity {
}

export function dataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchCommunityToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchCommunityToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchCommunity | undefined) {
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
export interface DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchExtendedCommunity {
}

export function dataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchExtendedCommunityToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchExtendedCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchExtendedCommunityToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchExtendedCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchExtendedCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchExtendedCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchExtendedCommunity | undefined) {
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
export interface DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatch {
}

export function dataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_prefix - computed: true, optional: false, required: false
  private _addressPrefix = new DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchAddressPrefixList(this, "address_prefix", false);
  public get addressPrefix() {
    return this._addressPrefix;
  }

  // afi - computed: true, optional: false, required: false
  public get afi() {
    return this.getStringAttribute('afi');
  }

  // as_path - computed: true, optional: false, required: false
  private _asPath = new DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchAsPathOutputReference(this, "as_path");
  public get asPath() {
    return this._asPath;
  }

  // community - computed: true, optional: false, required: false
  private _community = new DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchCommunityOutputReference(this, "community");
  public get community() {
    return this._community;
  }

  // extended_community - computed: true, optional: false, required: false
  private _extendedCommunity = new DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchExtendedCommunityOutputReference(this, "extended_community");
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
export interface DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFilters {
}

export function dataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFilters | undefined) {
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
  private _match = new DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersOutputReference {
    return new DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicy {
}

export function dataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise_filters - computed: true, optional: false, required: false
  private _advertiseFilters = new DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyAdvertiseFiltersList(this, "advertise_filters", false);
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
  private _nonExistFilters = new DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyNonExistFiltersList(this, "non_exist_filters", false);
  public get nonExistFilters() {
    return this._nonExistFilters;
  }

  // used_by - computed: true, optional: false, required: false
  public get usedBy() {
    return this.getListAttribute('used_by');
  }
}

export class DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyOutputReference {
    return new DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisement {
}

export function dataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy - computed: true, optional: false, required: false
  private _policy = new DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementPolicyList(this, "policy", false);
  public get policy() {
    return this._policy;
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateAsPathNone {
}

export function dataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateAsPathNoneToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateAsPathNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateAsPathNoneToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateAsPathNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateAsPathNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateAsPathNone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateAsPathNone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateAsPathRemove {
}

export function dataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateAsPathRemoveToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateAsPathRemove): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateAsPathRemoveToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateAsPathRemove): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateAsPathRemoveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateAsPathRemove | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateAsPathRemove | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateAsPath {
}

export function dataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateAsPathToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateAsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateAsPathToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateAsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateAsPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateAsPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateAsPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // none - computed: true, optional: false, required: false
  private _none = new DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateAsPathNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }

  // prepend - computed: true, optional: false, required: false
  public get prepend() {
    return this.getNumberAttribute('prepend');
  }

  // remove - computed: true, optional: false, required: false
  private _remove = new DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateAsPathRemoveOutputReference(this, "remove");
  public get remove() {
    return this._remove;
  }

  // remove_and_prepend - computed: true, optional: false, required: false
  public get removeAndPrepend() {
    return this.getNumberAttribute('remove_and_prepend');
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateCommunityNone {
}

export function dataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateCommunityNoneToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateCommunityNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateCommunityNoneToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateCommunityNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateCommunityNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateCommunityNone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateCommunityNone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateCommunityRemoveAll {
}

export function dataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateCommunityRemoveAllToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateCommunityRemoveAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateCommunityRemoveAllToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateCommunityRemoveAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateCommunityRemoveAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateCommunityRemoveAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateCommunityRemoveAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateCommunity {
}

export function dataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateCommunityToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateCommunityToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateCommunity | undefined) {
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
  private _none = new DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateCommunityNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }

  // overwrite - computed: true, optional: false, required: false
  public get overwrite() {
    return this.getListAttribute('overwrite');
  }

  // remove_all - computed: true, optional: false, required: false
  private _removeAll = new DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateCommunityRemoveAllOutputReference(this, "remove_all");
  public get removeAll() {
    return this._removeAll;
  }

  // remove_regex - computed: true, optional: false, required: false
  public get removeRegex() {
    return this.getStringAttribute('remove_regex');
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityNone {
}

export function dataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityNoneToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityNoneToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityNone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityNone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityRemoveAll {
}

export function dataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityRemoveAllToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityRemoveAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityRemoveAllToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityRemoveAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityRemoveAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityRemoveAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityRemoveAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunity {
}

export function dataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunity | undefined) {
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
  private _none = new DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }

  // overwrite - computed: true, optional: false, required: false
  public get overwrite() {
    return this.getListAttribute('overwrite');
  }

  // remove_all - computed: true, optional: false, required: false
  private _removeAll = new DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityRemoveAllOutputReference(this, "remove_all");
  public get removeAll() {
    return this._removeAll;
  }

  // remove_regex - computed: true, optional: false, required: false
  public get removeRegex() {
    return this.getStringAttribute('remove_regex');
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdate {
}

export function dataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // as_path - computed: true, optional: false, required: false
  private _asPath = new DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateAsPathOutputReference(this, "as_path");
  public get asPath() {
    return this._asPath;
  }

  // as_path_limit - computed: true, optional: false, required: false
  public get asPathLimit() {
    return this.getNumberAttribute('as_path_limit');
  }

  // community - computed: true, optional: false, required: false
  private _community = new DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateCommunityOutputReference(this, "community");
  public get community() {
    return this._community;
  }

  // extended_community - computed: true, optional: false, required: false
  private _extendedCommunity = new DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateExtendedCommunityOutputReference(this, "extended_community");
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
export interface DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllow {
}

export function dataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // update - computed: true, optional: false, required: false
  private _update = new DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowUpdateOutputReference(this, "update");
  public get update() {
    return this._update;
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyExportRulesActionDeny {
}

export function dataScmLogicalRouterVrfBgpPolicyExportRulesActionDenyToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyExportRulesActionDeny): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyExportRulesActionDenyToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyExportRulesActionDeny): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyExportRulesActionDenyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyExportRulesActionDeny | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyExportRulesActionDeny | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyExportRulesAction {
}

export function dataScmLogicalRouterVrfBgpPolicyExportRulesActionToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyExportRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyExportRulesActionToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyExportRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyExportRulesActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyExportRulesAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyExportRulesAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow - computed: true, optional: false, required: false
  private _allow = new DataScmLogicalRouterVrfBgpPolicyExportRulesActionAllowOutputReference(this, "allow");
  public get allow() {
    return this._allow;
  }

  // deny - computed: true, optional: false, required: false
  private _deny = new DataScmLogicalRouterVrfBgpPolicyExportRulesActionDenyOutputReference(this, "deny");
  public get deny() {
    return this._deny;
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyExportRulesMatchAddressPrefix {
}

export function dataScmLogicalRouterVrfBgpPolicyExportRulesMatchAddressPrefixToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyExportRulesMatchAddressPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyExportRulesMatchAddressPrefixToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyExportRulesMatchAddressPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyExportRulesMatchAddressPrefixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyExportRulesMatchAddressPrefix | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyExportRulesMatchAddressPrefix | undefined) {
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

export class DataScmLogicalRouterVrfBgpPolicyExportRulesMatchAddressPrefixList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfBgpPolicyExportRulesMatchAddressPrefixOutputReference {
    return new DataScmLogicalRouterVrfBgpPolicyExportRulesMatchAddressPrefixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyExportRulesMatchAsPath {
}

export function dataScmLogicalRouterVrfBgpPolicyExportRulesMatchAsPathToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyExportRulesMatchAsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyExportRulesMatchAsPathToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyExportRulesMatchAsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyExportRulesMatchAsPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyExportRulesMatchAsPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyExportRulesMatchAsPath | undefined) {
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
export interface DataScmLogicalRouterVrfBgpPolicyExportRulesMatchCommunity {
}

export function dataScmLogicalRouterVrfBgpPolicyExportRulesMatchCommunityToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyExportRulesMatchCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyExportRulesMatchCommunityToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyExportRulesMatchCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyExportRulesMatchCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyExportRulesMatchCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyExportRulesMatchCommunity | undefined) {
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
export interface DataScmLogicalRouterVrfBgpPolicyExportRulesMatchExtendedCommunity {
}

export function dataScmLogicalRouterVrfBgpPolicyExportRulesMatchExtendedCommunityToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyExportRulesMatchExtendedCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyExportRulesMatchExtendedCommunityToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyExportRulesMatchExtendedCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyExportRulesMatchExtendedCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyExportRulesMatchExtendedCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyExportRulesMatchExtendedCommunity | undefined) {
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
export interface DataScmLogicalRouterVrfBgpPolicyExportRulesMatch {
}

export function dataScmLogicalRouterVrfBgpPolicyExportRulesMatchToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyExportRulesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyExportRulesMatchToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyExportRulesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyExportRulesMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyExportRulesMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyExportRulesMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_prefix - computed: true, optional: false, required: false
  private _addressPrefix = new DataScmLogicalRouterVrfBgpPolicyExportRulesMatchAddressPrefixList(this, "address_prefix", false);
  public get addressPrefix() {
    return this._addressPrefix;
  }

  // afi - computed: true, optional: false, required: false
  public get afi() {
    return this.getStringAttribute('afi');
  }

  // as_path - computed: true, optional: false, required: false
  private _asPath = new DataScmLogicalRouterVrfBgpPolicyExportRulesMatchAsPathOutputReference(this, "as_path");
  public get asPath() {
    return this._asPath;
  }

  // community - computed: true, optional: false, required: false
  private _community = new DataScmLogicalRouterVrfBgpPolicyExportRulesMatchCommunityOutputReference(this, "community");
  public get community() {
    return this._community;
  }

  // extended_community - computed: true, optional: false, required: false
  private _extendedCommunity = new DataScmLogicalRouterVrfBgpPolicyExportRulesMatchExtendedCommunityOutputReference(this, "extended_community");
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
export interface DataScmLogicalRouterVrfBgpPolicyExportRules {
}

export function dataScmLogicalRouterVrfBgpPolicyExportRulesToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyExportRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyExportRulesToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyExportRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyExportRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyExportRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyExportRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  private _action = new DataScmLogicalRouterVrfBgpPolicyExportRulesActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // match - computed: true, optional: false, required: false
  private _match = new DataScmLogicalRouterVrfBgpPolicyExportRulesMatchOutputReference(this, "match");
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

export class DataScmLogicalRouterVrfBgpPolicyExportRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfBgpPolicyExportRulesOutputReference {
    return new DataScmLogicalRouterVrfBgpPolicyExportRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyExport {
}

export function dataScmLogicalRouterVrfBgpPolicyExportToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyExportToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyExportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyExport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyExport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataScmLogicalRouterVrfBgpPolicyExportRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateAsPathNone {
}

export function dataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateAsPathNoneToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateAsPathNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateAsPathNoneToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateAsPathNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateAsPathNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateAsPathNone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateAsPathNone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateAsPathRemove {
}

export function dataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateAsPathRemoveToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateAsPathRemove): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateAsPathRemoveToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateAsPathRemove): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateAsPathRemoveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateAsPathRemove | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateAsPathRemove | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateAsPath {
}

export function dataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateAsPathToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateAsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateAsPathToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateAsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateAsPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateAsPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateAsPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // none - computed: true, optional: false, required: false
  private _none = new DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateAsPathNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }

  // prepend - computed: true, optional: false, required: false
  public get prepend() {
    return this.getNumberAttribute('prepend');
  }

  // remove - computed: true, optional: false, required: false
  private _remove = new DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateAsPathRemoveOutputReference(this, "remove");
  public get remove() {
    return this._remove;
  }

  // remove_and_prepend - computed: true, optional: false, required: false
  public get removeAndPrepend() {
    return this.getNumberAttribute('remove_and_prepend');
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateCommunityNone {
}

export function dataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateCommunityNoneToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateCommunityNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateCommunityNoneToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateCommunityNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateCommunityNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateCommunityNone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateCommunityNone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateCommunityRemoveAll {
}

export function dataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateCommunityRemoveAllToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateCommunityRemoveAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateCommunityRemoveAllToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateCommunityRemoveAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateCommunityRemoveAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateCommunityRemoveAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateCommunityRemoveAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateCommunity {
}

export function dataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateCommunityToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateCommunityToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateCommunity | undefined) {
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
  private _none = new DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateCommunityNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }

  // overwrite - computed: true, optional: false, required: false
  public get overwrite() {
    return this.getListAttribute('overwrite');
  }

  // remove_all - computed: true, optional: false, required: false
  private _removeAll = new DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateCommunityRemoveAllOutputReference(this, "remove_all");
  public get removeAll() {
    return this._removeAll;
  }

  // remove_regex - computed: true, optional: false, required: false
  public get removeRegex() {
    return this.getStringAttribute('remove_regex');
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityNone {
}

export function dataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityNoneToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityNoneToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityNone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityNone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityRemoveAll {
}

export function dataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityRemoveAllToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityRemoveAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityRemoveAllToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityRemoveAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityRemoveAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityRemoveAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityRemoveAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunity {
}

export function dataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunity | undefined) {
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
  private _none = new DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }

  // overwrite - computed: true, optional: false, required: false
  public get overwrite() {
    return this.getListAttribute('overwrite');
  }

  // remove_all - computed: true, optional: false, required: false
  private _removeAll = new DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityRemoveAllOutputReference(this, "remove_all");
  public get removeAll() {
    return this._removeAll;
  }

  // remove_regex - computed: true, optional: false, required: false
  public get removeRegex() {
    return this.getStringAttribute('remove_regex');
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdate {
}

export function dataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // as_path - computed: true, optional: false, required: false
  private _asPath = new DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateAsPathOutputReference(this, "as_path");
  public get asPath() {
    return this._asPath;
  }

  // as_path_limit - computed: true, optional: false, required: false
  public get asPathLimit() {
    return this.getNumberAttribute('as_path_limit');
  }

  // community - computed: true, optional: false, required: false
  private _community = new DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateCommunityOutputReference(this, "community");
  public get community() {
    return this._community;
  }

  // extended_community - computed: true, optional: false, required: false
  private _extendedCommunity = new DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateExtendedCommunityOutputReference(this, "extended_community");
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
export interface DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllow {
}

export function dataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllow | undefined) {
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
  private _update = new DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowUpdateOutputReference(this, "update");
  public get update() {
    return this._update;
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyImportRulesActionDeny {
}

export function dataScmLogicalRouterVrfBgpPolicyImportRulesActionDenyToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyImportRulesActionDeny): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyImportRulesActionDenyToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyImportRulesActionDeny): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyImportRulesActionDenyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyImportRulesActionDeny | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyImportRulesActionDeny | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyImportRulesAction {
}

export function dataScmLogicalRouterVrfBgpPolicyImportRulesActionToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyImportRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyImportRulesActionToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyImportRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyImportRulesActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyImportRulesAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyImportRulesAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow - computed: true, optional: false, required: false
  private _allow = new DataScmLogicalRouterVrfBgpPolicyImportRulesActionAllowOutputReference(this, "allow");
  public get allow() {
    return this._allow;
  }

  // deny - computed: true, optional: false, required: false
  private _deny = new DataScmLogicalRouterVrfBgpPolicyImportRulesActionDenyOutputReference(this, "deny");
  public get deny() {
    return this._deny;
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyImportRulesMatchAddressPrefix {
}

export function dataScmLogicalRouterVrfBgpPolicyImportRulesMatchAddressPrefixToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyImportRulesMatchAddressPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyImportRulesMatchAddressPrefixToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyImportRulesMatchAddressPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyImportRulesMatchAddressPrefixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyImportRulesMatchAddressPrefix | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyImportRulesMatchAddressPrefix | undefined) {
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

export class DataScmLogicalRouterVrfBgpPolicyImportRulesMatchAddressPrefixList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfBgpPolicyImportRulesMatchAddressPrefixOutputReference {
    return new DataScmLogicalRouterVrfBgpPolicyImportRulesMatchAddressPrefixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyImportRulesMatchAsPath {
}

export function dataScmLogicalRouterVrfBgpPolicyImportRulesMatchAsPathToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyImportRulesMatchAsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyImportRulesMatchAsPathToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyImportRulesMatchAsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyImportRulesMatchAsPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyImportRulesMatchAsPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyImportRulesMatchAsPath | undefined) {
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
export interface DataScmLogicalRouterVrfBgpPolicyImportRulesMatchCommunity {
}

export function dataScmLogicalRouterVrfBgpPolicyImportRulesMatchCommunityToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyImportRulesMatchCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyImportRulesMatchCommunityToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyImportRulesMatchCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyImportRulesMatchCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyImportRulesMatchCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyImportRulesMatchCommunity | undefined) {
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
export interface DataScmLogicalRouterVrfBgpPolicyImportRulesMatchExtendedCommunity {
}

export function dataScmLogicalRouterVrfBgpPolicyImportRulesMatchExtendedCommunityToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyImportRulesMatchExtendedCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyImportRulesMatchExtendedCommunityToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyImportRulesMatchExtendedCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyImportRulesMatchExtendedCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyImportRulesMatchExtendedCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyImportRulesMatchExtendedCommunity | undefined) {
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
export interface DataScmLogicalRouterVrfBgpPolicyImportRulesMatch {
}

export function dataScmLogicalRouterVrfBgpPolicyImportRulesMatchToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyImportRulesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyImportRulesMatchToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyImportRulesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyImportRulesMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyImportRulesMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyImportRulesMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_prefix - computed: true, optional: false, required: false
  private _addressPrefix = new DataScmLogicalRouterVrfBgpPolicyImportRulesMatchAddressPrefixList(this, "address_prefix", false);
  public get addressPrefix() {
    return this._addressPrefix;
  }

  // afi - computed: true, optional: false, required: false
  public get afi() {
    return this.getStringAttribute('afi');
  }

  // as_path - computed: true, optional: false, required: false
  private _asPath = new DataScmLogicalRouterVrfBgpPolicyImportRulesMatchAsPathOutputReference(this, "as_path");
  public get asPath() {
    return this._asPath;
  }

  // community - computed: true, optional: false, required: false
  private _community = new DataScmLogicalRouterVrfBgpPolicyImportRulesMatchCommunityOutputReference(this, "community");
  public get community() {
    return this._community;
  }

  // extended_community - computed: true, optional: false, required: false
  private _extendedCommunity = new DataScmLogicalRouterVrfBgpPolicyImportRulesMatchExtendedCommunityOutputReference(this, "extended_community");
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
export interface DataScmLogicalRouterVrfBgpPolicyImportRules {
}

export function dataScmLogicalRouterVrfBgpPolicyImportRulesToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyImportRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyImportRulesToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyImportRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyImportRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyImportRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyImportRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  private _action = new DataScmLogicalRouterVrfBgpPolicyImportRulesActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // match - computed: true, optional: false, required: false
  private _match = new DataScmLogicalRouterVrfBgpPolicyImportRulesMatchOutputReference(this, "match");
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

export class DataScmLogicalRouterVrfBgpPolicyImportRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfBgpPolicyImportRulesOutputReference {
    return new DataScmLogicalRouterVrfBgpPolicyImportRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfBgpPolicyImport {
}

export function dataScmLogicalRouterVrfBgpPolicyImportToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyImport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyImportToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicyImport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyImportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicyImport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicyImport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataScmLogicalRouterVrfBgpPolicyImportRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}
export interface DataScmLogicalRouterVrfBgpPolicy {
}

export function dataScmLogicalRouterVrfBgpPolicyToTerraform(struct?: DataScmLogicalRouterVrfBgpPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpPolicyToHclTerraform(struct?: DataScmLogicalRouterVrfBgpPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation - computed: true, optional: false, required: false
  private _aggregation = new DataScmLogicalRouterVrfBgpPolicyAggregationOutputReference(this, "aggregation");
  public get aggregation() {
    return this._aggregation;
  }

  // conditional_advertisement - computed: true, optional: false, required: false
  private _conditionalAdvertisement = new DataScmLogicalRouterVrfBgpPolicyConditionalAdvertisementOutputReference(this, "conditional_advertisement");
  public get conditionalAdvertisement() {
    return this._conditionalAdvertisement;
  }

  // export - computed: true, optional: false, required: false
  private _export = new DataScmLogicalRouterVrfBgpPolicyExportOutputReference(this, "export");
  public get export() {
    return this._export;
  }

  // import - computed: true, optional: false, required: false
  private _import = new DataScmLogicalRouterVrfBgpPolicyImportOutputReference(this, "import");
  public get import() {
    return this._import;
  }
}
export interface DataScmLogicalRouterVrfBgpRedistRules {
}

export function dataScmLogicalRouterVrfBgpRedistRulesToTerraform(struct?: DataScmLogicalRouterVrfBgpRedistRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpRedistRulesToHclTerraform(struct?: DataScmLogicalRouterVrfBgpRedistRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpRedistRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfBgpRedistRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpRedistRules | undefined) {
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

export class DataScmLogicalRouterVrfBgpRedistRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfBgpRedistRulesOutputReference {
    return new DataScmLogicalRouterVrfBgpRedistRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfBgpRedistributionProfileIpv4 {
}

export function dataScmLogicalRouterVrfBgpRedistributionProfileIpv4ToTerraform(struct?: DataScmLogicalRouterVrfBgpRedistributionProfileIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpRedistributionProfileIpv4ToHclTerraform(struct?: DataScmLogicalRouterVrfBgpRedistributionProfileIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpRedistributionProfileIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpRedistributionProfileIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpRedistributionProfileIpv4 | undefined) {
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
export interface DataScmLogicalRouterVrfBgpRedistributionProfileIpv6 {
}

export function dataScmLogicalRouterVrfBgpRedistributionProfileIpv6ToTerraform(struct?: DataScmLogicalRouterVrfBgpRedistributionProfileIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpRedistributionProfileIpv6ToHclTerraform(struct?: DataScmLogicalRouterVrfBgpRedistributionProfileIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpRedistributionProfileIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpRedistributionProfileIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpRedistributionProfileIpv6 | undefined) {
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
export interface DataScmLogicalRouterVrfBgpRedistributionProfile {
}

export function dataScmLogicalRouterVrfBgpRedistributionProfileToTerraform(struct?: DataScmLogicalRouterVrfBgpRedistributionProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpRedistributionProfileToHclTerraform(struct?: DataScmLogicalRouterVrfBgpRedistributionProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpRedistributionProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgpRedistributionProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgpRedistributionProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataScmLogicalRouterVrfBgpRedistributionProfileIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataScmLogicalRouterVrfBgpRedistributionProfileIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
}
export interface DataScmLogicalRouterVrfBgp {
}

export function dataScmLogicalRouterVrfBgpToTerraform(struct?: DataScmLogicalRouterVrfBgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfBgpToHclTerraform(struct?: DataScmLogicalRouterVrfBgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfBgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfBgp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfBgp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise_network - computed: true, optional: false, required: false
  private _advertiseNetwork = new DataScmLogicalRouterVrfBgpAdvertiseNetworkOutputReference(this, "advertise_network");
  public get advertiseNetwork() {
    return this._advertiseNetwork;
  }

  // aggregate - computed: true, optional: false, required: false
  private _aggregate = new DataScmLogicalRouterVrfBgpAggregateOutputReference(this, "aggregate");
  public get aggregate() {
    return this._aggregate;
  }

  // aggregate_routes - computed: true, optional: false, required: false
  private _aggregateRoutes = new DataScmLogicalRouterVrfBgpAggregateRoutesList(this, "aggregate_routes", false);
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
  private _globalBfd = new DataScmLogicalRouterVrfBgpGlobalBfdOutputReference(this, "global_bfd");
  public get globalBfd() {
    return this._globalBfd;
  }

  // graceful_restart - computed: true, optional: false, required: false
  private _gracefulRestart = new DataScmLogicalRouterVrfBgpGracefulRestartOutputReference(this, "graceful_restart");
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
  private _med = new DataScmLogicalRouterVrfBgpMedOutputReference(this, "med");
  public get med() {
    return this._med;
  }

  // peer_group - computed: true, optional: false, required: false
  private _peerGroup = new DataScmLogicalRouterVrfBgpPeerGroupList(this, "peer_group", false);
  public get peerGroup() {
    return this._peerGroup;
  }

  // policy - computed: true, optional: false, required: false
  private _policy = new DataScmLogicalRouterVrfBgpPolicyOutputReference(this, "policy");
  public get policy() {
    return this._policy;
  }

  // redist_rules - computed: true, optional: false, required: false
  private _redistRules = new DataScmLogicalRouterVrfBgpRedistRulesList(this, "redist_rules", false);
  public get redistRules() {
    return this._redistRules;
  }

  // redistribution_profile - computed: true, optional: false, required: false
  private _redistributionProfile = new DataScmLogicalRouterVrfBgpRedistributionProfileOutputReference(this, "redistribution_profile");
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
export interface DataScmLogicalRouterVrfEcmpAlgorithmBalancedRoundRobin {
}

export function dataScmLogicalRouterVrfEcmpAlgorithmBalancedRoundRobinToTerraform(struct?: DataScmLogicalRouterVrfEcmpAlgorithmBalancedRoundRobin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfEcmpAlgorithmBalancedRoundRobinToHclTerraform(struct?: DataScmLogicalRouterVrfEcmpAlgorithmBalancedRoundRobin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfEcmpAlgorithmBalancedRoundRobinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfEcmpAlgorithmBalancedRoundRobin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfEcmpAlgorithmBalancedRoundRobin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfEcmpAlgorithmIpHash {
}

export function dataScmLogicalRouterVrfEcmpAlgorithmIpHashToTerraform(struct?: DataScmLogicalRouterVrfEcmpAlgorithmIpHash): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfEcmpAlgorithmIpHashToHclTerraform(struct?: DataScmLogicalRouterVrfEcmpAlgorithmIpHash): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfEcmpAlgorithmIpHashOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfEcmpAlgorithmIpHash | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfEcmpAlgorithmIpHash | undefined) {
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
export interface DataScmLogicalRouterVrfEcmpAlgorithmIpModulo {
}

export function dataScmLogicalRouterVrfEcmpAlgorithmIpModuloToTerraform(struct?: DataScmLogicalRouterVrfEcmpAlgorithmIpModulo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfEcmpAlgorithmIpModuloToHclTerraform(struct?: DataScmLogicalRouterVrfEcmpAlgorithmIpModulo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfEcmpAlgorithmIpModuloOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfEcmpAlgorithmIpModulo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfEcmpAlgorithmIpModulo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterface {
}

export function dataScmLogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterfaceToTerraform(struct?: DataScmLogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterfaceToHclTerraform(struct?: DataScmLogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterface | undefined) {
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

export class DataScmLogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterfaceOutputReference {
    return new DataScmLogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfEcmpAlgorithmWeightedRoundRobin {
}

export function dataScmLogicalRouterVrfEcmpAlgorithmWeightedRoundRobinToTerraform(struct?: DataScmLogicalRouterVrfEcmpAlgorithmWeightedRoundRobin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfEcmpAlgorithmWeightedRoundRobinToHclTerraform(struct?: DataScmLogicalRouterVrfEcmpAlgorithmWeightedRoundRobin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfEcmpAlgorithmWeightedRoundRobinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfEcmpAlgorithmWeightedRoundRobin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfEcmpAlgorithmWeightedRoundRobin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface - computed: true, optional: false, required: false
  private _interface = new DataScmLogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
}
export interface DataScmLogicalRouterVrfEcmpAlgorithm {
}

export function dataScmLogicalRouterVrfEcmpAlgorithmToTerraform(struct?: DataScmLogicalRouterVrfEcmpAlgorithm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfEcmpAlgorithmToHclTerraform(struct?: DataScmLogicalRouterVrfEcmpAlgorithm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfEcmpAlgorithmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfEcmpAlgorithm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfEcmpAlgorithm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // balanced_round_robin - computed: true, optional: false, required: false
  private _balancedRoundRobin = new DataScmLogicalRouterVrfEcmpAlgorithmBalancedRoundRobinOutputReference(this, "balanced_round_robin");
  public get balancedRoundRobin() {
    return this._balancedRoundRobin;
  }

  // ip_hash - computed: true, optional: false, required: false
  private _ipHash = new DataScmLogicalRouterVrfEcmpAlgorithmIpHashOutputReference(this, "ip_hash");
  public get ipHash() {
    return this._ipHash;
  }

  // ip_modulo - computed: true, optional: false, required: false
  private _ipModulo = new DataScmLogicalRouterVrfEcmpAlgorithmIpModuloOutputReference(this, "ip_modulo");
  public get ipModulo() {
    return this._ipModulo;
  }

  // weighted_round_robin - computed: true, optional: false, required: false
  private _weightedRoundRobin = new DataScmLogicalRouterVrfEcmpAlgorithmWeightedRoundRobinOutputReference(this, "weighted_round_robin");
  public get weightedRoundRobin() {
    return this._weightedRoundRobin;
  }
}
export interface DataScmLogicalRouterVrfEcmp {
}

export function dataScmLogicalRouterVrfEcmpToTerraform(struct?: DataScmLogicalRouterVrfEcmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfEcmpToHclTerraform(struct?: DataScmLogicalRouterVrfEcmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfEcmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfEcmp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfEcmp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  private _algorithm = new DataScmLogicalRouterVrfEcmpAlgorithmOutputReference(this, "algorithm");
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
export interface DataScmLogicalRouterVrfMulticastIgmpDynamicInterface {
}

export function dataScmLogicalRouterVrfMulticastIgmpDynamicInterfaceToTerraform(struct?: DataScmLogicalRouterVrfMulticastIgmpDynamicInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfMulticastIgmpDynamicInterfaceToHclTerraform(struct?: DataScmLogicalRouterVrfMulticastIgmpDynamicInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfMulticastIgmpDynamicInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfMulticastIgmpDynamicInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfMulticastIgmpDynamicInterface | undefined) {
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

export class DataScmLogicalRouterVrfMulticastIgmpDynamicInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfMulticastIgmpDynamicInterfaceOutputReference {
    return new DataScmLogicalRouterVrfMulticastIgmpDynamicInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfMulticastIgmpDynamic {
}

export function dataScmLogicalRouterVrfMulticastIgmpDynamicToTerraform(struct?: DataScmLogicalRouterVrfMulticastIgmpDynamic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfMulticastIgmpDynamicToHclTerraform(struct?: DataScmLogicalRouterVrfMulticastIgmpDynamic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfMulticastIgmpDynamicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfMulticastIgmpDynamic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfMulticastIgmpDynamic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface - computed: true, optional: false, required: false
  private _interface = new DataScmLogicalRouterVrfMulticastIgmpDynamicInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
}
export interface DataScmLogicalRouterVrfMulticastIgmpStatic {
}

export function dataScmLogicalRouterVrfMulticastIgmpStaticToTerraform(struct?: DataScmLogicalRouterVrfMulticastIgmpStatic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfMulticastIgmpStaticToHclTerraform(struct?: DataScmLogicalRouterVrfMulticastIgmpStatic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfMulticastIgmpStaticOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfMulticastIgmpStatic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfMulticastIgmpStatic | undefined) {
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

export class DataScmLogicalRouterVrfMulticastIgmpStaticList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfMulticastIgmpStaticOutputReference {
    return new DataScmLogicalRouterVrfMulticastIgmpStaticOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfMulticastIgmp {
}

export function dataScmLogicalRouterVrfMulticastIgmpToTerraform(struct?: DataScmLogicalRouterVrfMulticastIgmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfMulticastIgmpToHclTerraform(struct?: DataScmLogicalRouterVrfMulticastIgmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfMulticastIgmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfMulticastIgmp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfMulticastIgmp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dynamic - computed: true, optional: false, required: false
  private _dynamic = new DataScmLogicalRouterVrfMulticastIgmpDynamicOutputReference(this, "dynamic");
  public get dynamic() {
    return this._dynamic;
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // static - computed: true, optional: false, required: false
  private _static = new DataScmLogicalRouterVrfMulticastIgmpStaticList(this, "static", false);
  public get static() {
    return this._static;
  }
}
export interface DataScmLogicalRouterVrfMulticastInterfaceGroupGroupPermissionAnySourceMulticast {
}

export function dataScmLogicalRouterVrfMulticastInterfaceGroupGroupPermissionAnySourceMulticastToTerraform(struct?: DataScmLogicalRouterVrfMulticastInterfaceGroupGroupPermissionAnySourceMulticast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfMulticastInterfaceGroupGroupPermissionAnySourceMulticastToHclTerraform(struct?: DataScmLogicalRouterVrfMulticastInterfaceGroupGroupPermissionAnySourceMulticast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfMulticastInterfaceGroupGroupPermissionAnySourceMulticastOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfMulticastInterfaceGroupGroupPermissionAnySourceMulticast | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfMulticastInterfaceGroupGroupPermissionAnySourceMulticast | undefined) {
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

export class DataScmLogicalRouterVrfMulticastInterfaceGroupGroupPermissionAnySourceMulticastList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfMulticastInterfaceGroupGroupPermissionAnySourceMulticastOutputReference {
    return new DataScmLogicalRouterVrfMulticastInterfaceGroupGroupPermissionAnySourceMulticastOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfMulticastInterfaceGroupGroupPermissionSourceSpecificMulticast {
}

export function dataScmLogicalRouterVrfMulticastInterfaceGroupGroupPermissionSourceSpecificMulticastToTerraform(struct?: DataScmLogicalRouterVrfMulticastInterfaceGroupGroupPermissionSourceSpecificMulticast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfMulticastInterfaceGroupGroupPermissionSourceSpecificMulticastToHclTerraform(struct?: DataScmLogicalRouterVrfMulticastInterfaceGroupGroupPermissionSourceSpecificMulticast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfMulticastInterfaceGroupGroupPermissionSourceSpecificMulticastOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfMulticastInterfaceGroupGroupPermissionSourceSpecificMulticast | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfMulticastInterfaceGroupGroupPermissionSourceSpecificMulticast | undefined) {
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

export class DataScmLogicalRouterVrfMulticastInterfaceGroupGroupPermissionSourceSpecificMulticastList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfMulticastInterfaceGroupGroupPermissionSourceSpecificMulticastOutputReference {
    return new DataScmLogicalRouterVrfMulticastInterfaceGroupGroupPermissionSourceSpecificMulticastOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfMulticastInterfaceGroupGroupPermission {
}

export function dataScmLogicalRouterVrfMulticastInterfaceGroupGroupPermissionToTerraform(struct?: DataScmLogicalRouterVrfMulticastInterfaceGroupGroupPermission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfMulticastInterfaceGroupGroupPermissionToHclTerraform(struct?: DataScmLogicalRouterVrfMulticastInterfaceGroupGroupPermission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfMulticastInterfaceGroupGroupPermissionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfMulticastInterfaceGroupGroupPermission | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfMulticastInterfaceGroupGroupPermission | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // any_source_multicast - computed: true, optional: false, required: false
  private _anySourceMulticast = new DataScmLogicalRouterVrfMulticastInterfaceGroupGroupPermissionAnySourceMulticastList(this, "any_source_multicast", false);
  public get anySourceMulticast() {
    return this._anySourceMulticast;
  }

  // source_specific_multicast - computed: true, optional: false, required: false
  private _sourceSpecificMulticast = new DataScmLogicalRouterVrfMulticastInterfaceGroupGroupPermissionSourceSpecificMulticastList(this, "source_specific_multicast", false);
  public get sourceSpecificMulticast() {
    return this._sourceSpecificMulticast;
  }
}
export interface DataScmLogicalRouterVrfMulticastInterfaceGroupIgmp {
}

export function dataScmLogicalRouterVrfMulticastInterfaceGroupIgmpToTerraform(struct?: DataScmLogicalRouterVrfMulticastInterfaceGroupIgmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfMulticastInterfaceGroupIgmpToHclTerraform(struct?: DataScmLogicalRouterVrfMulticastInterfaceGroupIgmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfMulticastInterfaceGroupIgmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfMulticastInterfaceGroupIgmp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfMulticastInterfaceGroupIgmp | undefined) {
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
export interface DataScmLogicalRouterVrfMulticastInterfaceGroupPimAllowedNeighbors {
}

export function dataScmLogicalRouterVrfMulticastInterfaceGroupPimAllowedNeighborsToTerraform(struct?: DataScmLogicalRouterVrfMulticastInterfaceGroupPimAllowedNeighbors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfMulticastInterfaceGroupPimAllowedNeighborsToHclTerraform(struct?: DataScmLogicalRouterVrfMulticastInterfaceGroupPimAllowedNeighbors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfMulticastInterfaceGroupPimAllowedNeighborsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfMulticastInterfaceGroupPimAllowedNeighbors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfMulticastInterfaceGroupPimAllowedNeighbors | undefined) {
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

export class DataScmLogicalRouterVrfMulticastInterfaceGroupPimAllowedNeighborsList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfMulticastInterfaceGroupPimAllowedNeighborsOutputReference {
    return new DataScmLogicalRouterVrfMulticastInterfaceGroupPimAllowedNeighborsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfMulticastInterfaceGroupPim {
}

export function dataScmLogicalRouterVrfMulticastInterfaceGroupPimToTerraform(struct?: DataScmLogicalRouterVrfMulticastInterfaceGroupPim): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfMulticastInterfaceGroupPimToHclTerraform(struct?: DataScmLogicalRouterVrfMulticastInterfaceGroupPim): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfMulticastInterfaceGroupPimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfMulticastInterfaceGroupPim | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfMulticastInterfaceGroupPim | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_neighbors - computed: true, optional: false, required: false
  private _allowedNeighbors = new DataScmLogicalRouterVrfMulticastInterfaceGroupPimAllowedNeighborsList(this, "allowed_neighbors", false);
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
export interface DataScmLogicalRouterVrfMulticastInterfaceGroup {
}

export function dataScmLogicalRouterVrfMulticastInterfaceGroupToTerraform(struct?: DataScmLogicalRouterVrfMulticastInterfaceGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfMulticastInterfaceGroupToHclTerraform(struct?: DataScmLogicalRouterVrfMulticastInterfaceGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfMulticastInterfaceGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfMulticastInterfaceGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfMulticastInterfaceGroup | undefined) {
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
  private _groupPermission = new DataScmLogicalRouterVrfMulticastInterfaceGroupGroupPermissionOutputReference(this, "group_permission");
  public get groupPermission() {
    return this._groupPermission;
  }

  // igmp - computed: true, optional: false, required: false
  private _igmp = new DataScmLogicalRouterVrfMulticastInterfaceGroupIgmpOutputReference(this, "igmp");
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
  private _pim = new DataScmLogicalRouterVrfMulticastInterfaceGroupPimOutputReference(this, "pim");
  public get pim() {
    return this._pim;
  }
}

export class DataScmLogicalRouterVrfMulticastInterfaceGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfMulticastInterfaceGroupOutputReference {
    return new DataScmLogicalRouterVrfMulticastInterfaceGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfMulticastMsdpOriginatorId {
}

export function dataScmLogicalRouterVrfMulticastMsdpOriginatorIdToTerraform(struct?: DataScmLogicalRouterVrfMulticastMsdpOriginatorId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfMulticastMsdpOriginatorIdToHclTerraform(struct?: DataScmLogicalRouterVrfMulticastMsdpOriginatorId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfMulticastMsdpOriginatorIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfMulticastMsdpOriginatorId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfMulticastMsdpOriginatorId | undefined) {
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
export interface DataScmLogicalRouterVrfMulticastMsdpPeerLocalAddress {
}

export function dataScmLogicalRouterVrfMulticastMsdpPeerLocalAddressToTerraform(struct?: DataScmLogicalRouterVrfMulticastMsdpPeerLocalAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfMulticastMsdpPeerLocalAddressToHclTerraform(struct?: DataScmLogicalRouterVrfMulticastMsdpPeerLocalAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfMulticastMsdpPeerLocalAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfMulticastMsdpPeerLocalAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfMulticastMsdpPeerLocalAddress | undefined) {
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
export interface DataScmLogicalRouterVrfMulticastMsdpPeerPeerAddress {
}

export function dataScmLogicalRouterVrfMulticastMsdpPeerPeerAddressToTerraform(struct?: DataScmLogicalRouterVrfMulticastMsdpPeerPeerAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfMulticastMsdpPeerPeerAddressToHclTerraform(struct?: DataScmLogicalRouterVrfMulticastMsdpPeerPeerAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfMulticastMsdpPeerPeerAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfMulticastMsdpPeerPeerAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfMulticastMsdpPeerPeerAddress | undefined) {
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
export interface DataScmLogicalRouterVrfMulticastMsdpPeer {
}

export function dataScmLogicalRouterVrfMulticastMsdpPeerToTerraform(struct?: DataScmLogicalRouterVrfMulticastMsdpPeer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfMulticastMsdpPeerToHclTerraform(struct?: DataScmLogicalRouterVrfMulticastMsdpPeer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfMulticastMsdpPeerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfMulticastMsdpPeer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfMulticastMsdpPeer | undefined) {
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
  private _localAddress = new DataScmLogicalRouterVrfMulticastMsdpPeerLocalAddressOutputReference(this, "local_address");
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
  private _peerAddress = new DataScmLogicalRouterVrfMulticastMsdpPeerPeerAddressOutputReference(this, "peer_address");
  public get peerAddress() {
    return this._peerAddress;
  }

  // peer_as - computed: true, optional: false, required: false
  public get peerAs() {
    return this.getStringAttribute('peer_as');
  }
}

export class DataScmLogicalRouterVrfMulticastMsdpPeerList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfMulticastMsdpPeerOutputReference {
    return new DataScmLogicalRouterVrfMulticastMsdpPeerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfMulticastMsdp {
}

export function dataScmLogicalRouterVrfMulticastMsdpToTerraform(struct?: DataScmLogicalRouterVrfMulticastMsdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfMulticastMsdpToHclTerraform(struct?: DataScmLogicalRouterVrfMulticastMsdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfMulticastMsdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfMulticastMsdp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfMulticastMsdp | undefined) {
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
  private _originatorId = new DataScmLogicalRouterVrfMulticastMsdpOriginatorIdOutputReference(this, "originator_id");
  public get originatorId() {
    return this._originatorId;
  }

  // peer - computed: true, optional: false, required: false
  private _peer = new DataScmLogicalRouterVrfMulticastMsdpPeerList(this, "peer", false);
  public get peer() {
    return this._peer;
  }
}
export interface DataScmLogicalRouterVrfMulticastPimInterface {
}

export function dataScmLogicalRouterVrfMulticastPimInterfaceToTerraform(struct?: DataScmLogicalRouterVrfMulticastPimInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfMulticastPimInterfaceToHclTerraform(struct?: DataScmLogicalRouterVrfMulticastPimInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfMulticastPimInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfMulticastPimInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfMulticastPimInterface | undefined) {
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

export class DataScmLogicalRouterVrfMulticastPimInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfMulticastPimInterfaceOutputReference {
    return new DataScmLogicalRouterVrfMulticastPimInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfMulticastPimRpExternalRp {
}

export function dataScmLogicalRouterVrfMulticastPimRpExternalRpToTerraform(struct?: DataScmLogicalRouterVrfMulticastPimRpExternalRp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfMulticastPimRpExternalRpToHclTerraform(struct?: DataScmLogicalRouterVrfMulticastPimRpExternalRp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfMulticastPimRpExternalRpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfMulticastPimRpExternalRp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfMulticastPimRpExternalRp | undefined) {
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

export class DataScmLogicalRouterVrfMulticastPimRpExternalRpList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfMulticastPimRpExternalRpOutputReference {
    return new DataScmLogicalRouterVrfMulticastPimRpExternalRpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfMulticastPimRpLocalRpCandidateRp {
}

export function dataScmLogicalRouterVrfMulticastPimRpLocalRpCandidateRpToTerraform(struct?: DataScmLogicalRouterVrfMulticastPimRpLocalRpCandidateRp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfMulticastPimRpLocalRpCandidateRpToHclTerraform(struct?: DataScmLogicalRouterVrfMulticastPimRpLocalRpCandidateRp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfMulticastPimRpLocalRpCandidateRpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfMulticastPimRpLocalRpCandidateRp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfMulticastPimRpLocalRpCandidateRp | undefined) {
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
export interface DataScmLogicalRouterVrfMulticastPimRpLocalRpStaticRp {
}

export function dataScmLogicalRouterVrfMulticastPimRpLocalRpStaticRpToTerraform(struct?: DataScmLogicalRouterVrfMulticastPimRpLocalRpStaticRp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfMulticastPimRpLocalRpStaticRpToHclTerraform(struct?: DataScmLogicalRouterVrfMulticastPimRpLocalRpStaticRp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfMulticastPimRpLocalRpStaticRpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfMulticastPimRpLocalRpStaticRp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfMulticastPimRpLocalRpStaticRp | undefined) {
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
export interface DataScmLogicalRouterVrfMulticastPimRpLocalRp {
}

export function dataScmLogicalRouterVrfMulticastPimRpLocalRpToTerraform(struct?: DataScmLogicalRouterVrfMulticastPimRpLocalRp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfMulticastPimRpLocalRpToHclTerraform(struct?: DataScmLogicalRouterVrfMulticastPimRpLocalRp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfMulticastPimRpLocalRpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfMulticastPimRpLocalRp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfMulticastPimRpLocalRp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // candidate_rp - computed: true, optional: false, required: false
  private _candidateRp = new DataScmLogicalRouterVrfMulticastPimRpLocalRpCandidateRpOutputReference(this, "candidate_rp");
  public get candidateRp() {
    return this._candidateRp;
  }

  // static_rp - computed: true, optional: false, required: false
  private _staticRp = new DataScmLogicalRouterVrfMulticastPimRpLocalRpStaticRpOutputReference(this, "static_rp");
  public get staticRp() {
    return this._staticRp;
  }
}
export interface DataScmLogicalRouterVrfMulticastPimRp {
}

export function dataScmLogicalRouterVrfMulticastPimRpToTerraform(struct?: DataScmLogicalRouterVrfMulticastPimRp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfMulticastPimRpToHclTerraform(struct?: DataScmLogicalRouterVrfMulticastPimRp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfMulticastPimRpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfMulticastPimRp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfMulticastPimRp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_rp - computed: true, optional: false, required: false
  private _externalRp = new DataScmLogicalRouterVrfMulticastPimRpExternalRpList(this, "external_rp", false);
  public get externalRp() {
    return this._externalRp;
  }

  // local_rp - computed: true, optional: false, required: false
  private _localRp = new DataScmLogicalRouterVrfMulticastPimRpLocalRpOutputReference(this, "local_rp");
  public get localRp() {
    return this._localRp;
  }
}
export interface DataScmLogicalRouterVrfMulticastPimSptThreshold {
}

export function dataScmLogicalRouterVrfMulticastPimSptThresholdToTerraform(struct?: DataScmLogicalRouterVrfMulticastPimSptThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfMulticastPimSptThresholdToHclTerraform(struct?: DataScmLogicalRouterVrfMulticastPimSptThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfMulticastPimSptThresholdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfMulticastPimSptThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfMulticastPimSptThreshold | undefined) {
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

export class DataScmLogicalRouterVrfMulticastPimSptThresholdList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfMulticastPimSptThresholdOutputReference {
    return new DataScmLogicalRouterVrfMulticastPimSptThresholdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfMulticastPimSsmAddressSpace {
}

export function dataScmLogicalRouterVrfMulticastPimSsmAddressSpaceToTerraform(struct?: DataScmLogicalRouterVrfMulticastPimSsmAddressSpace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfMulticastPimSsmAddressSpaceToHclTerraform(struct?: DataScmLogicalRouterVrfMulticastPimSsmAddressSpace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfMulticastPimSsmAddressSpaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfMulticastPimSsmAddressSpace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfMulticastPimSsmAddressSpace | undefined) {
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
export interface DataScmLogicalRouterVrfMulticastPim {
}

export function dataScmLogicalRouterVrfMulticastPimToTerraform(struct?: DataScmLogicalRouterVrfMulticastPim): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfMulticastPimToHclTerraform(struct?: DataScmLogicalRouterVrfMulticastPim): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfMulticastPimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfMulticastPim | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfMulticastPim | undefined) {
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
  private _interface = new DataScmLogicalRouterVrfMulticastPimInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }

  // route_ageout_time - computed: true, optional: false, required: false
  public get routeAgeoutTime() {
    return this.getNumberAttribute('route_ageout_time');
  }

  // rp - computed: true, optional: false, required: false
  private _rp = new DataScmLogicalRouterVrfMulticastPimRpOutputReference(this, "rp");
  public get rp() {
    return this._rp;
  }

  // rpf_lookup_mode - computed: true, optional: false, required: false
  public get rpfLookupMode() {
    return this.getStringAttribute('rpf_lookup_mode');
  }

  // spt_threshold - computed: true, optional: false, required: false
  private _sptThreshold = new DataScmLogicalRouterVrfMulticastPimSptThresholdList(this, "spt_threshold", false);
  public get sptThreshold() {
    return this._sptThreshold;
  }

  // ssm_address_space - computed: true, optional: false, required: false
  private _ssmAddressSpace = new DataScmLogicalRouterVrfMulticastPimSsmAddressSpaceOutputReference(this, "ssm_address_space");
  public get ssmAddressSpace() {
    return this._ssmAddressSpace;
  }
}
export interface DataScmLogicalRouterVrfMulticastRpExternalRp {
}

export function dataScmLogicalRouterVrfMulticastRpExternalRpToTerraform(struct?: DataScmLogicalRouterVrfMulticastRpExternalRp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfMulticastRpExternalRpToHclTerraform(struct?: DataScmLogicalRouterVrfMulticastRpExternalRp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfMulticastRpExternalRpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfMulticastRpExternalRp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfMulticastRpExternalRp | undefined) {
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

export class DataScmLogicalRouterVrfMulticastRpExternalRpList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfMulticastRpExternalRpOutputReference {
    return new DataScmLogicalRouterVrfMulticastRpExternalRpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfMulticastRpLocalRpCandidateRp {
}

export function dataScmLogicalRouterVrfMulticastRpLocalRpCandidateRpToTerraform(struct?: DataScmLogicalRouterVrfMulticastRpLocalRpCandidateRp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfMulticastRpLocalRpCandidateRpToHclTerraform(struct?: DataScmLogicalRouterVrfMulticastRpLocalRpCandidateRp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfMulticastRpLocalRpCandidateRpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfMulticastRpLocalRpCandidateRp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfMulticastRpLocalRpCandidateRp | undefined) {
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
export interface DataScmLogicalRouterVrfMulticastRpLocalRpStaticRp {
}

export function dataScmLogicalRouterVrfMulticastRpLocalRpStaticRpToTerraform(struct?: DataScmLogicalRouterVrfMulticastRpLocalRpStaticRp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfMulticastRpLocalRpStaticRpToHclTerraform(struct?: DataScmLogicalRouterVrfMulticastRpLocalRpStaticRp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfMulticastRpLocalRpStaticRpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfMulticastRpLocalRpStaticRp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfMulticastRpLocalRpStaticRp | undefined) {
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
export interface DataScmLogicalRouterVrfMulticastRpLocalRp {
}

export function dataScmLogicalRouterVrfMulticastRpLocalRpToTerraform(struct?: DataScmLogicalRouterVrfMulticastRpLocalRp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfMulticastRpLocalRpToHclTerraform(struct?: DataScmLogicalRouterVrfMulticastRpLocalRp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfMulticastRpLocalRpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfMulticastRpLocalRp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfMulticastRpLocalRp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // candidate_rp - computed: true, optional: false, required: false
  private _candidateRp = new DataScmLogicalRouterVrfMulticastRpLocalRpCandidateRpOutputReference(this, "candidate_rp");
  public get candidateRp() {
    return this._candidateRp;
  }

  // static_rp - computed: true, optional: false, required: false
  private _staticRp = new DataScmLogicalRouterVrfMulticastRpLocalRpStaticRpOutputReference(this, "static_rp");
  public get staticRp() {
    return this._staticRp;
  }
}
export interface DataScmLogicalRouterVrfMulticastRp {
}

export function dataScmLogicalRouterVrfMulticastRpToTerraform(struct?: DataScmLogicalRouterVrfMulticastRp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfMulticastRpToHclTerraform(struct?: DataScmLogicalRouterVrfMulticastRp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfMulticastRpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfMulticastRp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfMulticastRp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_rp - computed: true, optional: false, required: false
  private _externalRp = new DataScmLogicalRouterVrfMulticastRpExternalRpList(this, "external_rp", false);
  public get externalRp() {
    return this._externalRp;
  }

  // local_rp - computed: true, optional: false, required: false
  private _localRp = new DataScmLogicalRouterVrfMulticastRpLocalRpOutputReference(this, "local_rp");
  public get localRp() {
    return this._localRp;
  }
}
export interface DataScmLogicalRouterVrfMulticastSptThreshold {
}

export function dataScmLogicalRouterVrfMulticastSptThresholdToTerraform(struct?: DataScmLogicalRouterVrfMulticastSptThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfMulticastSptThresholdToHclTerraform(struct?: DataScmLogicalRouterVrfMulticastSptThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfMulticastSptThresholdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfMulticastSptThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfMulticastSptThreshold | undefined) {
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

export class DataScmLogicalRouterVrfMulticastSptThresholdList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfMulticastSptThresholdOutputReference {
    return new DataScmLogicalRouterVrfMulticastSptThresholdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfMulticastSsmAddressSpace {
}

export function dataScmLogicalRouterVrfMulticastSsmAddressSpaceToTerraform(struct?: DataScmLogicalRouterVrfMulticastSsmAddressSpace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfMulticastSsmAddressSpaceToHclTerraform(struct?: DataScmLogicalRouterVrfMulticastSsmAddressSpace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfMulticastSsmAddressSpaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfMulticastSsmAddressSpace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfMulticastSsmAddressSpace | undefined) {
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

export class DataScmLogicalRouterVrfMulticastSsmAddressSpaceList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfMulticastSsmAddressSpaceOutputReference {
    return new DataScmLogicalRouterVrfMulticastSsmAddressSpaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfMulticastStaticRouteNexthop {
}

export function dataScmLogicalRouterVrfMulticastStaticRouteNexthopToTerraform(struct?: DataScmLogicalRouterVrfMulticastStaticRouteNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfMulticastStaticRouteNexthopToHclTerraform(struct?: DataScmLogicalRouterVrfMulticastStaticRouteNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfMulticastStaticRouteNexthopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfMulticastStaticRouteNexthop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfMulticastStaticRouteNexthop | undefined) {
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
export interface DataScmLogicalRouterVrfMulticastStaticRoute {
}

export function dataScmLogicalRouterVrfMulticastStaticRouteToTerraform(struct?: DataScmLogicalRouterVrfMulticastStaticRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfMulticastStaticRouteToHclTerraform(struct?: DataScmLogicalRouterVrfMulticastStaticRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfMulticastStaticRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfMulticastStaticRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfMulticastStaticRoute | undefined) {
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
  private _nexthop = new DataScmLogicalRouterVrfMulticastStaticRouteNexthopOutputReference(this, "nexthop");
  public get nexthop() {
    return this._nexthop;
  }

  // preference - computed: true, optional: false, required: false
  public get preference() {
    return this.getNumberAttribute('preference');
  }
}

export class DataScmLogicalRouterVrfMulticastStaticRouteList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfMulticastStaticRouteOutputReference {
    return new DataScmLogicalRouterVrfMulticastStaticRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfMulticast {
}

export function dataScmLogicalRouterVrfMulticastToTerraform(struct?: DataScmLogicalRouterVrfMulticast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfMulticastToHclTerraform(struct?: DataScmLogicalRouterVrfMulticast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfMulticastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfMulticast | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfMulticast | undefined) {
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
  private _igmp = new DataScmLogicalRouterVrfMulticastIgmpOutputReference(this, "igmp");
  public get igmp() {
    return this._igmp;
  }

  // interface_group - computed: true, optional: false, required: false
  private _interfaceGroup = new DataScmLogicalRouterVrfMulticastInterfaceGroupList(this, "interface_group", false);
  public get interfaceGroup() {
    return this._interfaceGroup;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // msdp - computed: true, optional: false, required: false
  private _msdp = new DataScmLogicalRouterVrfMulticastMsdpOutputReference(this, "msdp");
  public get msdp() {
    return this._msdp;
  }

  // pim - computed: true, optional: false, required: false
  private _pim = new DataScmLogicalRouterVrfMulticastPimOutputReference(this, "pim");
  public get pim() {
    return this._pim;
  }

  // route_ageout_time - computed: true, optional: false, required: false
  public get routeAgeoutTime() {
    return this.getNumberAttribute('route_ageout_time');
  }

  // rp - computed: true, optional: false, required: false
  private _rp = new DataScmLogicalRouterVrfMulticastRpOutputReference(this, "rp");
  public get rp() {
    return this._rp;
  }

  // spt_threshold - computed: true, optional: false, required: false
  private _sptThreshold = new DataScmLogicalRouterVrfMulticastSptThresholdList(this, "spt_threshold", false);
  public get sptThreshold() {
    return this._sptThreshold;
  }

  // ssm_address_space - computed: true, optional: false, required: false
  private _ssmAddressSpace = new DataScmLogicalRouterVrfMulticastSsmAddressSpaceList(this, "ssm_address_space", false);
  public get ssmAddressSpace() {
    return this._ssmAddressSpace;
  }

  // static_route - computed: true, optional: false, required: false
  private _staticRoute = new DataScmLogicalRouterVrfMulticastStaticRouteList(this, "static_route", false);
  public get staticRoute() {
    return this._staticRoute;
  }
}
export interface DataScmLogicalRouterVrfOspfAreaInterfaceBfd {
}

export function dataScmLogicalRouterVrfOspfAreaInterfaceBfdToTerraform(struct?: DataScmLogicalRouterVrfOspfAreaInterfaceBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfAreaInterfaceBfdToHclTerraform(struct?: DataScmLogicalRouterVrfOspfAreaInterfaceBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfAreaInterfaceBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfAreaInterfaceBfd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfAreaInterfaceBfd | undefined) {
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
export interface DataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeBroadcast {
}

export function dataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeBroadcastToTerraform(struct?: DataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeBroadcast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeBroadcastToHclTerraform(struct?: DataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeBroadcast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeBroadcastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeBroadcast | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeBroadcast | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
