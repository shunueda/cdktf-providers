import * as cdktf from 'cdktf';
import { DataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeBroadcastOutputReference,
DataScmLogicalRouterListDataVrfOspfAreaInterfaceBfdOutputReference,
DataScmLogicalRouterListDataVrfAdminDistsOutputReference,
DataScmLogicalRouterListDataVrfBgpOutputReference,
DataScmLogicalRouterListDataVrfEcmpOutputReference,
DataScmLogicalRouterListDataVrfMulticastOutputReference } from './structs0'
export interface DataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeP2MpNeighbor {
}

export function dataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeP2MpNeighborToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeP2MpNeighbor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeP2MpNeighborToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeP2MpNeighbor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeP2MpNeighborOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeP2MpNeighbor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeP2MpNeighbor | undefined) {
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

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }
}

export class DataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeP2MpNeighborList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeP2MpNeighborOutputReference {
    return new DataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeP2MpNeighborOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeP2Mp {
}

export function dataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeP2MpToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeP2Mp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeP2MpToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeP2Mp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeP2MpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeP2Mp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeP2Mp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // neighbor - computed: true, optional: false, required: false
  private _neighbor = new DataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeP2MpNeighborList(this, "neighbor", false);
  public get neighbor() {
    return this._neighbor;
  }
}
export interface DataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeP2P {
}

export function dataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeP2PToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeP2P): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeP2PToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeP2P): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeP2POutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeP2P | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeP2P | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkType {
}

export function dataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // broadcast - computed: true, optional: false, required: false
  private _broadcast = new DataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeBroadcastOutputReference(this, "broadcast");
  public get broadcast() {
    return this._broadcast;
  }

  // p2mp - computed: true, optional: false, required: false
  private _p2Mp = new DataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeP2MpOutputReference(this, "p2mp");
  public get p2Mp() {
    return this._p2Mp;
  }

  // p2p - computed: true, optional: false, required: false
  private _p2P = new DataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeP2POutputReference(this, "p2p");
  public get p2P() {
    return this._p2P;
  }
}
export interface DataScmLogicalRouterListDataVrfOspfAreaInterfaceVrTiming {
}

export function dataScmLogicalRouterListDataVrfOspfAreaInterfaceVrTimingToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaInterfaceVrTiming): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfAreaInterfaceVrTimingToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaInterfaceVrTiming): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfAreaInterfaceVrTimingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfAreaInterfaceVrTiming | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfAreaInterfaceVrTiming | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dead_counts - computed: true, optional: false, required: false
  public get deadCounts() {
    return this.getNumberAttribute('dead_counts');
  }

  // gr_delay - computed: true, optional: false, required: false
  public get grDelay() {
    return this.getNumberAttribute('gr_delay');
  }

  // hello_interval - computed: true, optional: false, required: false
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }

  // retransmit_interval - computed: true, optional: false, required: false
  public get retransmitInterval() {
    return this.getNumberAttribute('retransmit_interval');
  }

  // transit_delay - computed: true, optional: false, required: false
  public get transitDelay() {
    return this.getNumberAttribute('transit_delay');
  }
}
export interface DataScmLogicalRouterListDataVrfOspfAreaInterface {
}

export function dataScmLogicalRouterListDataVrfOspfAreaInterfaceToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfAreaInterfaceToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfAreaInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfAreaInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfAreaInterface | undefined) {
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

  // bfd - computed: true, optional: false, required: false
  private _bfd = new DataScmLogicalRouterListDataVrfOspfAreaInterfaceBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // link_type - computed: true, optional: false, required: false
  private _linkType = new DataScmLogicalRouterListDataVrfOspfAreaInterfaceLinkTypeOutputReference(this, "link_type");
  public get linkType() {
    return this._linkType;
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }

  // mtu_ignore - computed: true, optional: false, required: false
  public get mtuIgnore() {
    return this.getBooleanAttribute('mtu_ignore');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // passive - computed: true, optional: false, required: false
  public get passive() {
    return this.getBooleanAttribute('passive');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // timing - computed: true, optional: false, required: false
  public get timing() {
    return this.getStringAttribute('timing');
  }

  // vr_timing - computed: true, optional: false, required: false
  private _vrTiming = new DataScmLogicalRouterListDataVrfOspfAreaInterfaceVrTimingOutputReference(this, "vr_timing");
  public get vrTiming() {
    return this._vrTiming;
  }
}

export class DataScmLogicalRouterListDataVrfOspfAreaInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfOspfAreaInterfaceOutputReference {
    return new DataScmLogicalRouterListDataVrfOspfAreaInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfOspfAreaRange {
}

export function dataScmLogicalRouterListDataVrfOspfAreaRangeToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfAreaRangeToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfAreaRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfAreaRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfAreaRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise - computed: true, optional: false, required: false
  public get advertise() {
    return this.getBooleanAttribute('advertise');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // substitute - computed: true, optional: false, required: false
  public get substitute() {
    return this.getStringAttribute('substitute');
  }
}

export class DataScmLogicalRouterListDataVrfOspfAreaRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfOspfAreaRangeOutputReference {
    return new DataScmLogicalRouterListDataVrfOspfAreaRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfOspfAreaTypeNormalAbr {
}

export function dataScmLogicalRouterListDataVrfOspfAreaTypeNormalAbrToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaTypeNormalAbr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfAreaTypeNormalAbrToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaTypeNormalAbr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfAreaTypeNormalAbrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfAreaTypeNormalAbr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfAreaTypeNormalAbr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // export_list - computed: true, optional: false, required: false
  public get exportList() {
    return this.getStringAttribute('export_list');
  }

  // import_list - computed: true, optional: false, required: false
  public get importList() {
    return this.getStringAttribute('import_list');
  }

  // inbound_filter_list - computed: true, optional: false, required: false
  public get inboundFilterList() {
    return this.getStringAttribute('inbound_filter_list');
  }

  // outbound_filter_list - computed: true, optional: false, required: false
  public get outboundFilterList() {
    return this.getStringAttribute('outbound_filter_list');
  }
}
export interface DataScmLogicalRouterListDataVrfOspfAreaTypeNormal {
}

export function dataScmLogicalRouterListDataVrfOspfAreaTypeNormalToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaTypeNormal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfAreaTypeNormalToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaTypeNormal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfAreaTypeNormalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfAreaTypeNormal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfAreaTypeNormal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // abr - computed: true, optional: false, required: false
  private _abr = new DataScmLogicalRouterListDataVrfOspfAreaTypeNormalAbrOutputReference(this, "abr");
  public get abr() {
    return this._abr;
  }
}
export interface DataScmLogicalRouterListDataVrfOspfAreaTypeNssaAbrNssaExtRange {
}

export function dataScmLogicalRouterListDataVrfOspfAreaTypeNssaAbrNssaExtRangeToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaTypeNssaAbrNssaExtRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfAreaTypeNssaAbrNssaExtRangeToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaTypeNssaAbrNssaExtRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfAreaTypeNssaAbrNssaExtRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfAreaTypeNssaAbrNssaExtRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfAreaTypeNssaAbrNssaExtRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise - computed: true, optional: false, required: false
  public get advertise() {
    return this.getBooleanAttribute('advertise');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // route_tag - computed: true, optional: false, required: false
  public get routeTag() {
    return this.getNumberAttribute('route_tag');
  }
}

export class DataScmLogicalRouterListDataVrfOspfAreaTypeNssaAbrNssaExtRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfOspfAreaTypeNssaAbrNssaExtRangeOutputReference {
    return new DataScmLogicalRouterListDataVrfOspfAreaTypeNssaAbrNssaExtRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfOspfAreaTypeNssaAbr {
}

export function dataScmLogicalRouterListDataVrfOspfAreaTypeNssaAbrToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaTypeNssaAbr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfAreaTypeNssaAbrToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaTypeNssaAbr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfAreaTypeNssaAbrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfAreaTypeNssaAbr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfAreaTypeNssaAbr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // export_list - computed: true, optional: false, required: false
  public get exportList() {
    return this.getStringAttribute('export_list');
  }

  // import_list - computed: true, optional: false, required: false
  public get importList() {
    return this.getStringAttribute('import_list');
  }

  // inbound_filter_list - computed: true, optional: false, required: false
  public get inboundFilterList() {
    return this.getStringAttribute('inbound_filter_list');
  }

  // nssa_ext_range - computed: true, optional: false, required: false
  private _nssaExtRange = new DataScmLogicalRouterListDataVrfOspfAreaTypeNssaAbrNssaExtRangeList(this, "nssa_ext_range", false);
  public get nssaExtRange() {
    return this._nssaExtRange;
  }

  // outbound_filter_list - computed: true, optional: false, required: false
  public get outboundFilterList() {
    return this.getStringAttribute('outbound_filter_list');
  }
}
export interface DataScmLogicalRouterListDataVrfOspfAreaTypeNssaDefaultInformationOriginate {
}

export function dataScmLogicalRouterListDataVrfOspfAreaTypeNssaDefaultInformationOriginateToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaTypeNssaDefaultInformationOriginate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfAreaTypeNssaDefaultInformationOriginateToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaTypeNssaDefaultInformationOriginate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfAreaTypeNssaDefaultInformationOriginateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfAreaTypeNssaDefaultInformationOriginate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfAreaTypeNssaDefaultInformationOriginate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }

  // metric_type - computed: true, optional: false, required: false
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
}
export interface DataScmLogicalRouterListDataVrfOspfAreaTypeNssaDefaultRouteAdvertise {
}

export function dataScmLogicalRouterListDataVrfOspfAreaTypeNssaDefaultRouteAdvertiseToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaTypeNssaDefaultRouteAdvertise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfAreaTypeNssaDefaultRouteAdvertiseToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaTypeNssaDefaultRouteAdvertise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfAreaTypeNssaDefaultRouteAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfAreaTypeNssaDefaultRouteAdvertise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfAreaTypeNssaDefaultRouteAdvertise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataScmLogicalRouterListDataVrfOspfAreaTypeNssaDefaultRouteDisable {
}

export function dataScmLogicalRouterListDataVrfOspfAreaTypeNssaDefaultRouteDisableToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaTypeNssaDefaultRouteDisable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfAreaTypeNssaDefaultRouteDisableToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaTypeNssaDefaultRouteDisable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfAreaTypeNssaDefaultRouteDisableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfAreaTypeNssaDefaultRouteDisable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfAreaTypeNssaDefaultRouteDisable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfOspfAreaTypeNssaDefaultRoute {
}

export function dataScmLogicalRouterListDataVrfOspfAreaTypeNssaDefaultRouteToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaTypeNssaDefaultRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfAreaTypeNssaDefaultRouteToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaTypeNssaDefaultRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfAreaTypeNssaDefaultRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfAreaTypeNssaDefaultRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfAreaTypeNssaDefaultRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise - computed: true, optional: false, required: false
  private _advertise = new DataScmLogicalRouterListDataVrfOspfAreaTypeNssaDefaultRouteAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }

  // disable - computed: true, optional: false, required: false
  private _disable = new DataScmLogicalRouterListDataVrfOspfAreaTypeNssaDefaultRouteDisableOutputReference(this, "disable");
  public get disable() {
    return this._disable;
  }
}
export interface DataScmLogicalRouterListDataVrfOspfAreaTypeNssaNssaExtRangeAdvertise {
}

export function dataScmLogicalRouterListDataVrfOspfAreaTypeNssaNssaExtRangeAdvertiseToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaTypeNssaNssaExtRangeAdvertise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfAreaTypeNssaNssaExtRangeAdvertiseToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaTypeNssaNssaExtRangeAdvertise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfAreaTypeNssaNssaExtRangeAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfAreaTypeNssaNssaExtRangeAdvertise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfAreaTypeNssaNssaExtRangeAdvertise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfOspfAreaTypeNssaNssaExtRangeSuppress {
}

export function dataScmLogicalRouterListDataVrfOspfAreaTypeNssaNssaExtRangeSuppressToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaTypeNssaNssaExtRangeSuppress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfAreaTypeNssaNssaExtRangeSuppressToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaTypeNssaNssaExtRangeSuppress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfAreaTypeNssaNssaExtRangeSuppressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfAreaTypeNssaNssaExtRangeSuppress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfAreaTypeNssaNssaExtRangeSuppress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfOspfAreaTypeNssaNssaExtRange {
}

export function dataScmLogicalRouterListDataVrfOspfAreaTypeNssaNssaExtRangeToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaTypeNssaNssaExtRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfAreaTypeNssaNssaExtRangeToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaTypeNssaNssaExtRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfAreaTypeNssaNssaExtRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfAreaTypeNssaNssaExtRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfAreaTypeNssaNssaExtRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise - computed: true, optional: false, required: false
  private _advertise = new DataScmLogicalRouterListDataVrfOspfAreaTypeNssaNssaExtRangeAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // suppress - computed: true, optional: false, required: false
  private _suppress = new DataScmLogicalRouterListDataVrfOspfAreaTypeNssaNssaExtRangeSuppressOutputReference(this, "suppress");
  public get suppress() {
    return this._suppress;
  }
}

export class DataScmLogicalRouterListDataVrfOspfAreaTypeNssaNssaExtRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfOspfAreaTypeNssaNssaExtRangeOutputReference {
    return new DataScmLogicalRouterListDataVrfOspfAreaTypeNssaNssaExtRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfOspfAreaTypeNssa {
}

export function dataScmLogicalRouterListDataVrfOspfAreaTypeNssaToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaTypeNssa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfAreaTypeNssaToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaTypeNssa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfAreaTypeNssaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfAreaTypeNssa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfAreaTypeNssa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // abr - computed: true, optional: false, required: false
  private _abr = new DataScmLogicalRouterListDataVrfOspfAreaTypeNssaAbrOutputReference(this, "abr");
  public get abr() {
    return this._abr;
  }

  // accept_summary - computed: true, optional: false, required: false
  public get acceptSummary() {
    return this.getBooleanAttribute('accept_summary');
  }

  // default_information_originate - computed: true, optional: false, required: false
  private _defaultInformationOriginate = new DataScmLogicalRouterListDataVrfOspfAreaTypeNssaDefaultInformationOriginateOutputReference(this, "default_information_originate");
  public get defaultInformationOriginate() {
    return this._defaultInformationOriginate;
  }

  // default_route - computed: true, optional: false, required: false
  private _defaultRoute = new DataScmLogicalRouterListDataVrfOspfAreaTypeNssaDefaultRouteOutputReference(this, "default_route");
  public get defaultRoute() {
    return this._defaultRoute;
  }

  // no_summary - computed: true, optional: false, required: false
  public get noSummary() {
    return this.getBooleanAttribute('no_summary');
  }

  // nssa_ext_range - computed: true, optional: false, required: false
  private _nssaExtRange = new DataScmLogicalRouterListDataVrfOspfAreaTypeNssaNssaExtRangeList(this, "nssa_ext_range", false);
  public get nssaExtRange() {
    return this._nssaExtRange;
  }
}
export interface DataScmLogicalRouterListDataVrfOspfAreaTypeStubAbr {
}

export function dataScmLogicalRouterListDataVrfOspfAreaTypeStubAbrToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaTypeStubAbr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfAreaTypeStubAbrToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaTypeStubAbr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfAreaTypeStubAbrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfAreaTypeStubAbr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfAreaTypeStubAbr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // export_list - computed: true, optional: false, required: false
  public get exportList() {
    return this.getStringAttribute('export_list');
  }

  // import_list - computed: true, optional: false, required: false
  public get importList() {
    return this.getStringAttribute('import_list');
  }

  // inbound_filter_list - computed: true, optional: false, required: false
  public get inboundFilterList() {
    return this.getStringAttribute('inbound_filter_list');
  }

  // outbound_filter_list - computed: true, optional: false, required: false
  public get outboundFilterList() {
    return this.getStringAttribute('outbound_filter_list');
  }
}
export interface DataScmLogicalRouterListDataVrfOspfAreaTypeStubDefaultRouteAdvertise {
}

export function dataScmLogicalRouterListDataVrfOspfAreaTypeStubDefaultRouteAdvertiseToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaTypeStubDefaultRouteAdvertise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfAreaTypeStubDefaultRouteAdvertiseToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaTypeStubDefaultRouteAdvertise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfAreaTypeStubDefaultRouteAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfAreaTypeStubDefaultRouteAdvertise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfAreaTypeStubDefaultRouteAdvertise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }
}
export interface DataScmLogicalRouterListDataVrfOspfAreaTypeStubDefaultRouteDisable {
}

export function dataScmLogicalRouterListDataVrfOspfAreaTypeStubDefaultRouteDisableToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaTypeStubDefaultRouteDisable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfAreaTypeStubDefaultRouteDisableToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaTypeStubDefaultRouteDisable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfAreaTypeStubDefaultRouteDisableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfAreaTypeStubDefaultRouteDisable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfAreaTypeStubDefaultRouteDisable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfOspfAreaTypeStubDefaultRoute {
}

export function dataScmLogicalRouterListDataVrfOspfAreaTypeStubDefaultRouteToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaTypeStubDefaultRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfAreaTypeStubDefaultRouteToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaTypeStubDefaultRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfAreaTypeStubDefaultRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfAreaTypeStubDefaultRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfAreaTypeStubDefaultRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise - computed: true, optional: false, required: false
  private _advertise = new DataScmLogicalRouterListDataVrfOspfAreaTypeStubDefaultRouteAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }

  // disable - computed: true, optional: false, required: false
  private _disable = new DataScmLogicalRouterListDataVrfOspfAreaTypeStubDefaultRouteDisableOutputReference(this, "disable");
  public get disable() {
    return this._disable;
  }
}
export interface DataScmLogicalRouterListDataVrfOspfAreaTypeStub {
}

export function dataScmLogicalRouterListDataVrfOspfAreaTypeStubToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaTypeStub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfAreaTypeStubToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaTypeStub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfAreaTypeStubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfAreaTypeStub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfAreaTypeStub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // abr - computed: true, optional: false, required: false
  private _abr = new DataScmLogicalRouterListDataVrfOspfAreaTypeStubAbrOutputReference(this, "abr");
  public get abr() {
    return this._abr;
  }

  // accept_summary - computed: true, optional: false, required: false
  public get acceptSummary() {
    return this.getBooleanAttribute('accept_summary');
  }

  // default_route - computed: true, optional: false, required: false
  private _defaultRoute = new DataScmLogicalRouterListDataVrfOspfAreaTypeStubDefaultRouteOutputReference(this, "default_route");
  public get defaultRoute() {
    return this._defaultRoute;
  }

  // default_route_metric - computed: true, optional: false, required: false
  public get defaultRouteMetric() {
    return this.getNumberAttribute('default_route_metric');
  }

  // no_summary - computed: true, optional: false, required: false
  public get noSummary() {
    return this.getBooleanAttribute('no_summary');
  }
}
export interface DataScmLogicalRouterListDataVrfOspfAreaType {
}

export function dataScmLogicalRouterListDataVrfOspfAreaTypeToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfAreaTypeToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfAreaTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfAreaType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfAreaType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // normal - computed: true, optional: false, required: false
  private _normal = new DataScmLogicalRouterListDataVrfOspfAreaTypeNormalOutputReference(this, "normal");
  public get normal() {
    return this._normal;
  }

  // nssa - computed: true, optional: false, required: false
  private _nssa = new DataScmLogicalRouterListDataVrfOspfAreaTypeNssaOutputReference(this, "nssa");
  public get nssa() {
    return this._nssa;
  }

  // stub - computed: true, optional: false, required: false
  private _stub = new DataScmLogicalRouterListDataVrfOspfAreaTypeStubOutputReference(this, "stub");
  public get stub() {
    return this._stub;
  }
}
export interface DataScmLogicalRouterListDataVrfOspfAreaVirtualLinkBfd {
}

export function dataScmLogicalRouterListDataVrfOspfAreaVirtualLinkBfdToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaVirtualLinkBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfAreaVirtualLinkBfdToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaVirtualLinkBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfAreaVirtualLinkBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfAreaVirtualLinkBfd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfAreaVirtualLinkBfd | undefined) {
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
export interface DataScmLogicalRouterListDataVrfOspfAreaVirtualLinkVrTiming {
}

export function dataScmLogicalRouterListDataVrfOspfAreaVirtualLinkVrTimingToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaVirtualLinkVrTiming): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfAreaVirtualLinkVrTimingToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaVirtualLinkVrTiming): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfAreaVirtualLinkVrTimingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfAreaVirtualLinkVrTiming | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfAreaVirtualLinkVrTiming | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dead_counts - computed: true, optional: false, required: false
  public get deadCounts() {
    return this.getNumberAttribute('dead_counts');
  }

  // hello_interval - computed: true, optional: false, required: false
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }

  // retransmit_interval - computed: true, optional: false, required: false
  public get retransmitInterval() {
    return this.getNumberAttribute('retransmit_interval');
  }

  // transit_delay - computed: true, optional: false, required: false
  public get transitDelay() {
    return this.getNumberAttribute('transit_delay');
  }
}
export interface DataScmLogicalRouterListDataVrfOspfAreaVirtualLink {
}

export function dataScmLogicalRouterListDataVrfOspfAreaVirtualLinkToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaVirtualLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfAreaVirtualLinkToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaVirtualLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfAreaVirtualLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfAreaVirtualLink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfAreaVirtualLink | undefined) {
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

  // bfd - computed: true, optional: false, required: false
  private _bfd = new DataScmLogicalRouterListDataVrfOspfAreaVirtualLinkBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }

  // interface_id - computed: true, optional: false, required: false
  public get interfaceId() {
    return this.getNumberAttribute('interface_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // neighbor_id - computed: true, optional: false, required: false
  public get neighborId() {
    return this.getStringAttribute('neighbor_id');
  }

  // passive - computed: true, optional: false, required: false
  public get passive() {
    return this.getBooleanAttribute('passive');
  }

  // timing - computed: true, optional: false, required: false
  public get timing() {
    return this.getStringAttribute('timing');
  }

  // transit_area_id - computed: true, optional: false, required: false
  public get transitAreaId() {
    return this.getStringAttribute('transit_area_id');
  }

  // vr_timing - computed: true, optional: false, required: false
  private _vrTiming = new DataScmLogicalRouterListDataVrfOspfAreaVirtualLinkVrTimingOutputReference(this, "vr_timing");
  public get vrTiming() {
    return this._vrTiming;
  }
}

export class DataScmLogicalRouterListDataVrfOspfAreaVirtualLinkList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfOspfAreaVirtualLinkOutputReference {
    return new DataScmLogicalRouterListDataVrfOspfAreaVirtualLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfOspfAreaVrRangeAdvertise {
}

export function dataScmLogicalRouterListDataVrfOspfAreaVrRangeAdvertiseToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaVrRangeAdvertise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfAreaVrRangeAdvertiseToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaVrRangeAdvertise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfAreaVrRangeAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfAreaVrRangeAdvertise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfAreaVrRangeAdvertise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfOspfAreaVrRangeSuppress {
}

export function dataScmLogicalRouterListDataVrfOspfAreaVrRangeSuppressToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaVrRangeSuppress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfAreaVrRangeSuppressToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaVrRangeSuppress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfAreaVrRangeSuppressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfAreaVrRangeSuppress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfAreaVrRangeSuppress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfOspfAreaVrRange {
}

export function dataScmLogicalRouterListDataVrfOspfAreaVrRangeToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaVrRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfAreaVrRangeToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAreaVrRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfAreaVrRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfAreaVrRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfAreaVrRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise - computed: true, optional: false, required: false
  private _advertise = new DataScmLogicalRouterListDataVrfOspfAreaVrRangeAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // suppress - computed: true, optional: false, required: false
  private _suppress = new DataScmLogicalRouterListDataVrfOspfAreaVrRangeSuppressOutputReference(this, "suppress");
  public get suppress() {
    return this._suppress;
  }
}

export class DataScmLogicalRouterListDataVrfOspfAreaVrRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfOspfAreaVrRangeOutputReference {
    return new DataScmLogicalRouterListDataVrfOspfAreaVrRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfOspfArea {
}

export function dataScmLogicalRouterListDataVrfOspfAreaToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfArea): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfAreaToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfArea): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfAreaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfArea | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfArea | undefined) {
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

  // interface - computed: true, optional: false, required: false
  private _interface = new DataScmLogicalRouterListDataVrfOspfAreaInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // range - computed: true, optional: false, required: false
  private _range = new DataScmLogicalRouterListDataVrfOspfAreaRangeList(this, "range", false);
  public get range() {
    return this._range;
  }

  // type - computed: true, optional: false, required: false
  private _type = new DataScmLogicalRouterListDataVrfOspfAreaTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }

  // virtual_link - computed: true, optional: false, required: false
  private _virtualLink = new DataScmLogicalRouterListDataVrfOspfAreaVirtualLinkList(this, "virtual_link", false);
  public get virtualLink() {
    return this._virtualLink;
  }

  // vr_range - computed: true, optional: false, required: false
  private _vrRange = new DataScmLogicalRouterListDataVrfOspfAreaVrRangeList(this, "vr_range", false);
  public get vrRange() {
    return this._vrRange;
  }
}

export class DataScmLogicalRouterListDataVrfOspfAreaList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfOspfAreaOutputReference {
    return new DataScmLogicalRouterListDataVrfOspfAreaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfOspfAuthProfileMd5 {
}

export function dataScmLogicalRouterListDataVrfOspfAuthProfileMd5ToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAuthProfileMd5): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfAuthProfileMd5ToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAuthProfileMd5): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfAuthProfileMd5OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfAuthProfileMd5 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfAuthProfileMd5 | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getNumberAttribute('name');
  }

  // preferred - computed: true, optional: false, required: false
  public get preferred() {
    return this.getBooleanAttribute('preferred');
  }
}

export class DataScmLogicalRouterListDataVrfOspfAuthProfileMd5List extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfOspfAuthProfileMd5OutputReference {
    return new DataScmLogicalRouterListDataVrfOspfAuthProfileMd5OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfOspfAuthProfile {
}

export function dataScmLogicalRouterListDataVrfOspfAuthProfileToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAuthProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfAuthProfileToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfAuthProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfAuthProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfAuthProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfAuthProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // md5 - computed: true, optional: false, required: false
  private _md5 = new DataScmLogicalRouterListDataVrfOspfAuthProfileMd5List(this, "md5", false);
  public get md5() {
    return this._md5;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }
}

export class DataScmLogicalRouterListDataVrfOspfAuthProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfOspfAuthProfileOutputReference {
    return new DataScmLogicalRouterListDataVrfOspfAuthProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfOspfExportRules {
}

export function dataScmLogicalRouterListDataVrfOspfExportRulesToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfExportRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfExportRulesToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfExportRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfExportRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfExportRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfExportRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // new_path_type - computed: true, optional: false, required: false
  public get newPathType() {
    return this.getStringAttribute('new_path_type');
  }

  // new_tag - computed: true, optional: false, required: false
  public get newTag() {
    return this.getStringAttribute('new_tag');
  }
}

export class DataScmLogicalRouterListDataVrfOspfExportRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfOspfExportRulesOutputReference {
    return new DataScmLogicalRouterListDataVrfOspfExportRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfOspfFloodPreventionHello {
}

export function dataScmLogicalRouterListDataVrfOspfFloodPreventionHelloToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfFloodPreventionHello): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfFloodPreventionHelloToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfFloodPreventionHello): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfFloodPreventionHelloOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfFloodPreventionHello | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfFloodPreventionHello | undefined) {
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

  // max_packet - computed: true, optional: false, required: false
  public get maxPacket() {
    return this.getNumberAttribute('max_packet');
  }
}
export interface DataScmLogicalRouterListDataVrfOspfFloodPreventionLsa {
}

export function dataScmLogicalRouterListDataVrfOspfFloodPreventionLsaToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfFloodPreventionLsa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfFloodPreventionLsaToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfFloodPreventionLsa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfFloodPreventionLsaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfFloodPreventionLsa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfFloodPreventionLsa | undefined) {
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

  // max_packet - computed: true, optional: false, required: false
  public get maxPacket() {
    return this.getNumberAttribute('max_packet');
  }
}
export interface DataScmLogicalRouterListDataVrfOspfFloodPrevention {
}

export function dataScmLogicalRouterListDataVrfOspfFloodPreventionToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfFloodPrevention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfFloodPreventionToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfFloodPrevention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfFloodPreventionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfFloodPrevention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfFloodPrevention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hello - computed: true, optional: false, required: false
  private _hello = new DataScmLogicalRouterListDataVrfOspfFloodPreventionHelloOutputReference(this, "hello");
  public get hello() {
    return this._hello;
  }

  // lsa - computed: true, optional: false, required: false
  private _lsa = new DataScmLogicalRouterListDataVrfOspfFloodPreventionLsaOutputReference(this, "lsa");
  public get lsa() {
    return this._lsa;
  }
}
export interface DataScmLogicalRouterListDataVrfOspfGlobalBfd {
}

export function dataScmLogicalRouterListDataVrfOspfGlobalBfdToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfGlobalBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfGlobalBfdToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfGlobalBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfGlobalBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfGlobalBfd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfGlobalBfd | undefined) {
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
export interface DataScmLogicalRouterListDataVrfOspfGracefulRestart {
}

export function dataScmLogicalRouterListDataVrfOspfGracefulRestartToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfGracefulRestart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfGracefulRestartToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfGracefulRestart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfGracefulRestartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfGracefulRestart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfGracefulRestart | undefined) {
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

  // grace_period - computed: true, optional: false, required: false
  public get gracePeriod() {
    return this.getNumberAttribute('grace_period');
  }

  // helper_enable - computed: true, optional: false, required: false
  public get helperEnable() {
    return this.getBooleanAttribute('helper_enable');
  }

  // max_neighbor_restart_time - computed: true, optional: false, required: false
  public get maxNeighborRestartTime() {
    return this.getNumberAttribute('max_neighbor_restart_time');
  }

  // strict_lsa_checking - computed: true, optional: false, required: false
  public get strictLsaChecking() {
    return this.getBooleanAttribute('strict_lsa_checking');
  }
}
export interface DataScmLogicalRouterListDataVrfOspfVrTimers {
}

export function dataScmLogicalRouterListDataVrfOspfVrTimersToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfVrTimers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfVrTimersToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfVrTimers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfVrTimersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfVrTimers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfVrTimers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lsa_interval - computed: true, optional: false, required: false
  public get lsaInterval() {
    return this.getNumberAttribute('lsa_interval');
  }

  // spf_calculation_delay - computed: true, optional: false, required: false
  public get spfCalculationDelay() {
    return this.getNumberAttribute('spf_calculation_delay');
  }
}
export interface DataScmLogicalRouterListDataVrfOspf {
}

export function dataScmLogicalRouterListDataVrfOspfToTerraform(struct?: DataScmLogicalRouterListDataVrfOspf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_redist_default_route - computed: true, optional: false, required: false
  public get allowRedistDefaultRoute() {
    return this.getBooleanAttribute('allow_redist_default_route');
  }

  // area - computed: true, optional: false, required: false
  private _area = new DataScmLogicalRouterListDataVrfOspfAreaList(this, "area", false);
  public get area() {
    return this._area;
  }

  // auth_profile - computed: true, optional: false, required: false
  private _authProfile = new DataScmLogicalRouterListDataVrfOspfAuthProfileList(this, "auth_profile", false);
  public get authProfile() {
    return this._authProfile;
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // export_rules - computed: true, optional: false, required: false
  private _exportRules = new DataScmLogicalRouterListDataVrfOspfExportRulesList(this, "export_rules", false);
  public get exportRules() {
    return this._exportRules;
  }

  // flood_prevention - computed: true, optional: false, required: false
  private _floodPrevention = new DataScmLogicalRouterListDataVrfOspfFloodPreventionOutputReference(this, "flood_prevention");
  public get floodPrevention() {
    return this._floodPrevention;
  }

  // global_bfd - computed: true, optional: false, required: false
  private _globalBfd = new DataScmLogicalRouterListDataVrfOspfGlobalBfdOutputReference(this, "global_bfd");
  public get globalBfd() {
    return this._globalBfd;
  }

  // global_if_timer - computed: true, optional: false, required: false
  public get globalIfTimer() {
    return this.getStringAttribute('global_if_timer');
  }

  // graceful_restart - computed: true, optional: false, required: false
  private _gracefulRestart = new DataScmLogicalRouterListDataVrfOspfGracefulRestartOutputReference(this, "graceful_restart");
  public get gracefulRestart() {
    return this._gracefulRestart;
  }

  // redistribution_profile - computed: true, optional: false, required: false
  public get redistributionProfile() {
    return this.getStringAttribute('redistribution_profile');
  }

  // reject_default_route - computed: true, optional: false, required: false
  public get rejectDefaultRoute() {
    return this.getBooleanAttribute('reject_default_route');
  }

  // rfc1583 - computed: true, optional: false, required: false
  public get rfc1583() {
    return this.getBooleanAttribute('rfc1583');
  }

  // router_id - computed: true, optional: false, required: false
  public get routerId() {
    return this.getStringAttribute('router_id');
  }

  // spf_timer - computed: true, optional: false, required: false
  public get spfTimer() {
    return this.getStringAttribute('spf_timer');
  }

  // vr_timers - computed: true, optional: false, required: false
  private _vrTimers = new DataScmLogicalRouterListDataVrfOspfVrTimersOutputReference(this, "vr_timers");
  public get vrTimers() {
    return this._vrTimers;
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceBfd {
}

export function dataScmLogicalRouterListDataVrfOspfv3AreaInterfaceBfdToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AreaInterfaceBfdToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceBfd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceBfd | undefined) {
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
export interface DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeBroadcast {
}

export function dataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeBroadcastToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeBroadcast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeBroadcastToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeBroadcast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeBroadcastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeBroadcast | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeBroadcast | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeP2MpNeighbor {
}

export function dataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeP2MpNeighbor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeP2MpNeighbor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeP2MpNeighbor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeP2MpNeighbor | undefined) {
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

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborOutputReference {
    return new DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeP2Mp {
}

export function dataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeP2MpToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeP2Mp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeP2MpToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeP2Mp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeP2MpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeP2Mp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeP2Mp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // neighbor - computed: true, optional: false, required: false
  private _neighbor = new DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborList(this, "neighbor", false);
  public get neighbor() {
    return this._neighbor;
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeP2P {
}

export function dataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeP2PToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeP2P): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeP2PToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeP2P): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeP2POutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeP2P | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeP2P | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkType {
}

export function dataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // broadcast - computed: true, optional: false, required: false
  private _broadcast = new DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeBroadcastOutputReference(this, "broadcast");
  public get broadcast() {
    return this._broadcast;
  }

  // p2mp - computed: true, optional: false, required: false
  private _p2Mp = new DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeP2MpOutputReference(this, "p2mp");
  public get p2Mp() {
    return this._p2Mp;
  }

  // p2p - computed: true, optional: false, required: false
  private _p2P = new DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeP2POutputReference(this, "p2p");
  public get p2P() {
    return this._p2P;
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceNeighbor {
}

export function dataScmLogicalRouterListDataVrfOspfv3AreaInterfaceNeighborToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceNeighbor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AreaInterfaceNeighborToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceNeighbor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceNeighborOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceNeighbor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceNeighbor | undefined) {
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

export class DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceNeighborList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceNeighborOutputReference {
    return new DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceNeighborOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceVrTiming {
}

export function dataScmLogicalRouterListDataVrfOspfv3AreaInterfaceVrTimingToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceVrTiming): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AreaInterfaceVrTimingToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceVrTiming): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceVrTimingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceVrTiming | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceVrTiming | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dead_counts - computed: true, optional: false, required: false
  public get deadCounts() {
    return this.getNumberAttribute('dead_counts');
  }

  // gr_delay - computed: true, optional: false, required: false
  public get grDelay() {
    return this.getNumberAttribute('gr_delay');
  }

  // hello_interval - computed: true, optional: false, required: false
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }

  // retransmit_interval - computed: true, optional: false, required: false
  public get retransmitInterval() {
    return this.getNumberAttribute('retransmit_interval');
  }

  // transit_delay - computed: true, optional: false, required: false
  public get transitDelay() {
    return this.getNumberAttribute('transit_delay');
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3AreaInterface {
}

export function dataScmLogicalRouterListDataVrfOspfv3AreaInterfaceToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AreaInterfaceToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AreaInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AreaInterface | undefined) {
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

  // bfd - computed: true, optional: false, required: false
  private _bfd = new DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }

  // link_type - computed: true, optional: false, required: false
  private _linkType = new DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceLinkTypeOutputReference(this, "link_type");
  public get linkType() {
    return this._linkType;
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }

  // mtu_ignore - computed: true, optional: false, required: false
  public get mtuIgnore() {
    return this.getBooleanAttribute('mtu_ignore');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // neighbor - computed: true, optional: false, required: false
  private _neighbor = new DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceNeighborList(this, "neighbor", false);
  public get neighbor() {
    return this._neighbor;
  }

  // passive - computed: true, optional: false, required: false
  public get passive() {
    return this.getBooleanAttribute('passive');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // timing - computed: true, optional: false, required: false
  public get timing() {
    return this.getStringAttribute('timing');
  }

  // vr_timing - computed: true, optional: false, required: false
  private _vrTiming = new DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceVrTimingOutputReference(this, "vr_timing");
  public get vrTiming() {
    return this._vrTiming;
  }
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceOutputReference {
    return new DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3AreaRange {
}

export function dataScmLogicalRouterListDataVrfOspfv3AreaRangeToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AreaRangeToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AreaRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AreaRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise - computed: true, optional: false, required: false
  public get advertise() {
    return this.getBooleanAttribute('advertise');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfOspfv3AreaRangeOutputReference {
    return new DataScmLogicalRouterListDataVrfOspfv3AreaRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3AreaTypeNormalAbr {
}

export function dataScmLogicalRouterListDataVrfOspfv3AreaTypeNormalAbrToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaTypeNormalAbr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AreaTypeNormalAbrToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaTypeNormalAbr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaTypeNormalAbrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AreaTypeNormalAbr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AreaTypeNormalAbr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // export_list - computed: true, optional: false, required: false
  public get exportList() {
    return this.getStringAttribute('export_list');
  }

  // import_list - computed: true, optional: false, required: false
  public get importList() {
    return this.getStringAttribute('import_list');
  }

  // inbound_filter_list - computed: true, optional: false, required: false
  public get inboundFilterList() {
    return this.getStringAttribute('inbound_filter_list');
  }

  // outbound_filter_list - computed: true, optional: false, required: false
  public get outboundFilterList() {
    return this.getStringAttribute('outbound_filter_list');
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3AreaTypeNormal {
}

export function dataScmLogicalRouterListDataVrfOspfv3AreaTypeNormalToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaTypeNormal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AreaTypeNormalToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaTypeNormal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaTypeNormalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AreaTypeNormal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AreaTypeNormal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // abr - computed: true, optional: false, required: false
  private _abr = new DataScmLogicalRouterListDataVrfOspfv3AreaTypeNormalAbrOutputReference(this, "abr");
  public get abr() {
    return this._abr;
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaAbrNssaExtRangeAdvertise {
}

export function dataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaAbrNssaExtRangeAdvertiseToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaAbrNssaExtRangeAdvertise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaAbrNssaExtRangeAdvertiseToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaAbrNssaExtRangeAdvertise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaAbrNssaExtRangeAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaAbrNssaExtRangeAdvertise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaAbrNssaExtRangeAdvertise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaAbrNssaExtRangeSuppress {
}

export function dataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaAbrNssaExtRangeSuppressToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaAbrNssaExtRangeSuppress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaAbrNssaExtRangeSuppressToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaAbrNssaExtRangeSuppress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaAbrNssaExtRangeSuppressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaAbrNssaExtRangeSuppress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaAbrNssaExtRangeSuppress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaAbrNssaExtRange {
}

export function dataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaAbrNssaExtRangeToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaAbrNssaExtRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaAbrNssaExtRangeToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaAbrNssaExtRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaAbrNssaExtRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaAbrNssaExtRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaAbrNssaExtRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise - computed: true, optional: false, required: false
  private _advertise = new DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaAbrNssaExtRangeAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // route_tag - computed: true, optional: false, required: false
  public get routeTag() {
    return this.getNumberAttribute('route_tag');
  }

  // suppress - computed: true, optional: false, required: false
  private _suppress = new DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaAbrNssaExtRangeSuppressOutputReference(this, "suppress");
  public get suppress() {
    return this._suppress;
  }
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaAbrNssaExtRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaAbrNssaExtRangeOutputReference {
    return new DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaAbrNssaExtRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaAbr {
}

export function dataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaAbrToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaAbr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaAbrToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaAbr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaAbrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaAbr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaAbr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // export_list - computed: true, optional: false, required: false
  public get exportList() {
    return this.getStringAttribute('export_list');
  }

  // import_list - computed: true, optional: false, required: false
  public get importList() {
    return this.getStringAttribute('import_list');
  }

  // inbound_filter_list - computed: true, optional: false, required: false
  public get inboundFilterList() {
    return this.getStringAttribute('inbound_filter_list');
  }

  // nssa_ext_range - computed: true, optional: false, required: false
  private _nssaExtRange = new DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaAbrNssaExtRangeList(this, "nssa_ext_range", false);
  public get nssaExtRange() {
    return this._nssaExtRange;
  }

  // outbound_filter_list - computed: true, optional: false, required: false
  public get outboundFilterList() {
    return this.getStringAttribute('outbound_filter_list');
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaDefaultInformationOriginate {
}

export function dataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaDefaultInformationOriginateToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaDefaultInformationOriginate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaDefaultInformationOriginateToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaDefaultInformationOriginate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaDefaultInformationOriginateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaDefaultInformationOriginate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaDefaultInformationOriginate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }

  // metric_type - computed: true, optional: false, required: false
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaDefaultRouteAdvertise {
}

export function dataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaDefaultRouteAdvertiseToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaDefaultRouteAdvertise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaDefaultRouteAdvertiseToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaDefaultRouteAdvertise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaDefaultRouteAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaDefaultRouteAdvertise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaDefaultRouteAdvertise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaDefaultRouteDisable {
}

export function dataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaDefaultRouteDisableToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaDefaultRouteDisable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaDefaultRouteDisableToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaDefaultRouteDisable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaDefaultRouteDisableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaDefaultRouteDisable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaDefaultRouteDisable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaDefaultRoute {
}

export function dataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaDefaultRouteToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaDefaultRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaDefaultRouteToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaDefaultRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaDefaultRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaDefaultRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaDefaultRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise - computed: true, optional: false, required: false
  private _advertise = new DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaDefaultRouteAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }

  // disable - computed: true, optional: false, required: false
  private _disable = new DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaDefaultRouteDisableOutputReference(this, "disable");
  public get disable() {
    return this._disable;
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaNssaExtRangeAdvertise {
}

export function dataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaNssaExtRangeAdvertiseToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaNssaExtRangeAdvertise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaNssaExtRangeAdvertiseToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaNssaExtRangeAdvertise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaNssaExtRangeAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaNssaExtRangeAdvertise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaNssaExtRangeAdvertise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaNssaExtRangeSuppress {
}

export function dataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaNssaExtRangeSuppressToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaNssaExtRangeSuppress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaNssaExtRangeSuppressToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaNssaExtRangeSuppress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaNssaExtRangeSuppressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaNssaExtRangeSuppress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaNssaExtRangeSuppress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaNssaExtRange {
}

export function dataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaNssaExtRangeToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaNssaExtRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaNssaExtRangeToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaNssaExtRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaNssaExtRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaNssaExtRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaNssaExtRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise - computed: true, optional: false, required: false
  private _advertise = new DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaNssaExtRangeAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // route_tag - computed: true, optional: false, required: false
  public get routeTag() {
    return this.getNumberAttribute('route_tag');
  }

  // suppress - computed: true, optional: false, required: false
  private _suppress = new DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaNssaExtRangeSuppressOutputReference(this, "suppress");
  public get suppress() {
    return this._suppress;
  }
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaNssaExtRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaNssaExtRangeOutputReference {
    return new DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaNssaExtRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssa {
}

export function dataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // abr - computed: true, optional: false, required: false
  private _abr = new DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaAbrOutputReference(this, "abr");
  public get abr() {
    return this._abr;
  }

  // accept_summary - computed: true, optional: false, required: false
  public get acceptSummary() {
    return this.getBooleanAttribute('accept_summary');
  }

  // default_information_originate - computed: true, optional: false, required: false
  private _defaultInformationOriginate = new DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaDefaultInformationOriginateOutputReference(this, "default_information_originate");
  public get defaultInformationOriginate() {
    return this._defaultInformationOriginate;
  }

  // default_route - computed: true, optional: false, required: false
  private _defaultRoute = new DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaDefaultRouteOutputReference(this, "default_route");
  public get defaultRoute() {
    return this._defaultRoute;
  }

  // no_summary - computed: true, optional: false, required: false
  public get noSummary() {
    return this.getBooleanAttribute('no_summary');
  }

  // nssa_ext_range - computed: true, optional: false, required: false
  private _nssaExtRange = new DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaNssaExtRangeList(this, "nssa_ext_range", false);
  public get nssaExtRange() {
    return this._nssaExtRange;
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3AreaTypeStubAbr {
}

export function dataScmLogicalRouterListDataVrfOspfv3AreaTypeStubAbrToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaTypeStubAbr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AreaTypeStubAbrToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaTypeStubAbr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaTypeStubAbrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AreaTypeStubAbr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AreaTypeStubAbr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // export_list - computed: true, optional: false, required: false
  public get exportList() {
    return this.getStringAttribute('export_list');
  }

  // import_list - computed: true, optional: false, required: false
  public get importList() {
    return this.getStringAttribute('import_list');
  }

  // inbound_filter_list - computed: true, optional: false, required: false
  public get inboundFilterList() {
    return this.getStringAttribute('inbound_filter_list');
  }

  // outbound_filter_list - computed: true, optional: false, required: false
  public get outboundFilterList() {
    return this.getStringAttribute('outbound_filter_list');
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3AreaTypeStubDefaultRouteAdvertise {
}

export function dataScmLogicalRouterListDataVrfOspfv3AreaTypeStubDefaultRouteAdvertiseToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaTypeStubDefaultRouteAdvertise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AreaTypeStubDefaultRouteAdvertiseToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaTypeStubDefaultRouteAdvertise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaTypeStubDefaultRouteAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AreaTypeStubDefaultRouteAdvertise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AreaTypeStubDefaultRouteAdvertise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3AreaTypeStubDefaultRouteDisable {
}

export function dataScmLogicalRouterListDataVrfOspfv3AreaTypeStubDefaultRouteDisableToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaTypeStubDefaultRouteDisable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AreaTypeStubDefaultRouteDisableToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaTypeStubDefaultRouteDisable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaTypeStubDefaultRouteDisableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AreaTypeStubDefaultRouteDisable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AreaTypeStubDefaultRouteDisable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3AreaTypeStubDefaultRoute {
}

export function dataScmLogicalRouterListDataVrfOspfv3AreaTypeStubDefaultRouteToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaTypeStubDefaultRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AreaTypeStubDefaultRouteToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaTypeStubDefaultRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaTypeStubDefaultRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AreaTypeStubDefaultRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AreaTypeStubDefaultRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise - computed: true, optional: false, required: false
  private _advertise = new DataScmLogicalRouterListDataVrfOspfv3AreaTypeStubDefaultRouteAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }

  // disable - computed: true, optional: false, required: false
  private _disable = new DataScmLogicalRouterListDataVrfOspfv3AreaTypeStubDefaultRouteDisableOutputReference(this, "disable");
  public get disable() {
    return this._disable;
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3AreaTypeStub {
}

export function dataScmLogicalRouterListDataVrfOspfv3AreaTypeStubToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaTypeStub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AreaTypeStubToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaTypeStub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaTypeStubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AreaTypeStub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AreaTypeStub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // abr - computed: true, optional: false, required: false
  private _abr = new DataScmLogicalRouterListDataVrfOspfv3AreaTypeStubAbrOutputReference(this, "abr");
  public get abr() {
    return this._abr;
  }

  // accept_summary - computed: true, optional: false, required: false
  public get acceptSummary() {
    return this.getBooleanAttribute('accept_summary');
  }

  // default_route - computed: true, optional: false, required: false
  private _defaultRoute = new DataScmLogicalRouterListDataVrfOspfv3AreaTypeStubDefaultRouteOutputReference(this, "default_route");
  public get defaultRoute() {
    return this._defaultRoute;
  }

  // default_route_metric - computed: true, optional: false, required: false
  public get defaultRouteMetric() {
    return this.getNumberAttribute('default_route_metric');
  }

  // no_summary - computed: true, optional: false, required: false
  public get noSummary() {
    return this.getBooleanAttribute('no_summary');
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3AreaType {
}

export function dataScmLogicalRouterListDataVrfOspfv3AreaTypeToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AreaTypeToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AreaType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AreaType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // normal - computed: true, optional: false, required: false
  private _normal = new DataScmLogicalRouterListDataVrfOspfv3AreaTypeNormalOutputReference(this, "normal");
  public get normal() {
    return this._normal;
  }

  // nssa - computed: true, optional: false, required: false
  private _nssa = new DataScmLogicalRouterListDataVrfOspfv3AreaTypeNssaOutputReference(this, "nssa");
  public get nssa() {
    return this._nssa;
  }

  // stub - computed: true, optional: false, required: false
  private _stub = new DataScmLogicalRouterListDataVrfOspfv3AreaTypeStubOutputReference(this, "stub");
  public get stub() {
    return this._stub;
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3AreaVirtualLinkBfd {
}

export function dataScmLogicalRouterListDataVrfOspfv3AreaVirtualLinkBfdToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaVirtualLinkBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AreaVirtualLinkBfdToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaVirtualLinkBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaVirtualLinkBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AreaVirtualLinkBfd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AreaVirtualLinkBfd | undefined) {
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
export interface DataScmLogicalRouterListDataVrfOspfv3AreaVirtualLinkVrTiming {
}

export function dataScmLogicalRouterListDataVrfOspfv3AreaVirtualLinkVrTimingToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaVirtualLinkVrTiming): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AreaVirtualLinkVrTimingToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaVirtualLinkVrTiming): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaVirtualLinkVrTimingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AreaVirtualLinkVrTiming | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AreaVirtualLinkVrTiming | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dead_counts - computed: true, optional: false, required: false
  public get deadCounts() {
    return this.getNumberAttribute('dead_counts');
  }

  // hello_interval - computed: true, optional: false, required: false
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }

  // retransmit_interval - computed: true, optional: false, required: false
  public get retransmitInterval() {
    return this.getNumberAttribute('retransmit_interval');
  }

  // transit_delay - computed: true, optional: false, required: false
  public get transitDelay() {
    return this.getNumberAttribute('transit_delay');
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3AreaVirtualLink {
}

export function dataScmLogicalRouterListDataVrfOspfv3AreaVirtualLinkToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaVirtualLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AreaVirtualLinkToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaVirtualLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaVirtualLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AreaVirtualLink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AreaVirtualLink | undefined) {
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

  // bfd - computed: true, optional: false, required: false
  private _bfd = new DataScmLogicalRouterListDataVrfOspfv3AreaVirtualLinkBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }

  // interface_id - computed: true, optional: false, required: false
  public get interfaceId() {
    return this.getNumberAttribute('interface_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // neighbor_id - computed: true, optional: false, required: false
  public get neighborId() {
    return this.getStringAttribute('neighbor_id');
  }

  // passive - computed: true, optional: false, required: false
  public get passive() {
    return this.getBooleanAttribute('passive');
  }

  // timing - computed: true, optional: false, required: false
  public get timing() {
    return this.getStringAttribute('timing');
  }

  // transit_area_id - computed: true, optional: false, required: false
  public get transitAreaId() {
    return this.getStringAttribute('transit_area_id');
  }

  // vr_timing - computed: true, optional: false, required: false
  private _vrTiming = new DataScmLogicalRouterListDataVrfOspfv3AreaVirtualLinkVrTimingOutputReference(this, "vr_timing");
  public get vrTiming() {
    return this._vrTiming;
  }
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaVirtualLinkList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfOspfv3AreaVirtualLinkOutputReference {
    return new DataScmLogicalRouterListDataVrfOspfv3AreaVirtualLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3AreaVrRangeAdvertise {
}

export function dataScmLogicalRouterListDataVrfOspfv3AreaVrRangeAdvertiseToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaVrRangeAdvertise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AreaVrRangeAdvertiseToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaVrRangeAdvertise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaVrRangeAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AreaVrRangeAdvertise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AreaVrRangeAdvertise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3AreaVrRangeSuppress {
}

export function dataScmLogicalRouterListDataVrfOspfv3AreaVrRangeSuppressToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaVrRangeSuppress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AreaVrRangeSuppressToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaVrRangeSuppress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaVrRangeSuppressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AreaVrRangeSuppress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AreaVrRangeSuppress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3AreaVrRange {
}

export function dataScmLogicalRouterListDataVrfOspfv3AreaVrRangeToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaVrRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AreaVrRangeToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AreaVrRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaVrRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AreaVrRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AreaVrRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise - computed: true, optional: false, required: false
  private _advertise = new DataScmLogicalRouterListDataVrfOspfv3AreaVrRangeAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // suppress - computed: true, optional: false, required: false
  private _suppress = new DataScmLogicalRouterListDataVrfOspfv3AreaVrRangeSuppressOutputReference(this, "suppress");
  public get suppress() {
    return this._suppress;
  }
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaVrRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfOspfv3AreaVrRangeOutputReference {
    return new DataScmLogicalRouterListDataVrfOspfv3AreaVrRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3Area {
}

export function dataScmLogicalRouterListDataVrfOspfv3AreaToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3Area): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AreaToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3Area): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3Area | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3Area | undefined) {
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

  // interface - computed: true, optional: false, required: false
  private _interface = new DataScmLogicalRouterListDataVrfOspfv3AreaInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // range - computed: true, optional: false, required: false
  private _range = new DataScmLogicalRouterListDataVrfOspfv3AreaRangeList(this, "range", false);
  public get range() {
    return this._range;
  }

  // type - computed: true, optional: false, required: false
  private _type = new DataScmLogicalRouterListDataVrfOspfv3AreaTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }

  // virtual_link - computed: true, optional: false, required: false
  private _virtualLink = new DataScmLogicalRouterListDataVrfOspfv3AreaVirtualLinkList(this, "virtual_link", false);
  public get virtualLink() {
    return this._virtualLink;
  }

  // vr_range - computed: true, optional: false, required: false
  private _vrRange = new DataScmLogicalRouterListDataVrfOspfv3AreaVrRangeList(this, "vr_range", false);
  public get vrRange() {
    return this._vrRange;
  }
}

export class DataScmLogicalRouterListDataVrfOspfv3AreaList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfOspfv3AreaOutputReference {
    return new DataScmLogicalRouterListDataVrfOspfv3AreaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3AuthProfileAhMd5 {
}

export function dataScmLogicalRouterListDataVrfOspfv3AuthProfileAhMd5ToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AuthProfileAhMd5): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AuthProfileAhMd5ToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AuthProfileAhMd5): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AuthProfileAhMd5OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AuthProfileAhMd5 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AuthProfileAhMd5 | undefined) {
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
}
export interface DataScmLogicalRouterListDataVrfOspfv3AuthProfileAhSha1 {
}

export function dataScmLogicalRouterListDataVrfOspfv3AuthProfileAhSha1ToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AuthProfileAhSha1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AuthProfileAhSha1ToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AuthProfileAhSha1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AuthProfileAhSha1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AuthProfileAhSha1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AuthProfileAhSha1 | undefined) {
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
}
export interface DataScmLogicalRouterListDataVrfOspfv3AuthProfileAhSha256 {
}

export function dataScmLogicalRouterListDataVrfOspfv3AuthProfileAhSha256ToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AuthProfileAhSha256): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AuthProfileAhSha256ToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AuthProfileAhSha256): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AuthProfileAhSha256OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AuthProfileAhSha256 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AuthProfileAhSha256 | undefined) {
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
}
export interface DataScmLogicalRouterListDataVrfOspfv3AuthProfileAhSha384 {
}

export function dataScmLogicalRouterListDataVrfOspfv3AuthProfileAhSha384ToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AuthProfileAhSha384): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AuthProfileAhSha384ToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AuthProfileAhSha384): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AuthProfileAhSha384OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AuthProfileAhSha384 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AuthProfileAhSha384 | undefined) {
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
}
export interface DataScmLogicalRouterListDataVrfOspfv3AuthProfileAhSha512 {
}

export function dataScmLogicalRouterListDataVrfOspfv3AuthProfileAhSha512ToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AuthProfileAhSha512): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AuthProfileAhSha512ToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AuthProfileAhSha512): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AuthProfileAhSha512OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AuthProfileAhSha512 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AuthProfileAhSha512 | undefined) {
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
}
export interface DataScmLogicalRouterListDataVrfOspfv3AuthProfileAh {
}

export function dataScmLogicalRouterListDataVrfOspfv3AuthProfileAhToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AuthProfileAh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AuthProfileAhToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AuthProfileAh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AuthProfileAhOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AuthProfileAh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AuthProfileAh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // md5 - computed: true, optional: false, required: false
  private _md5 = new DataScmLogicalRouterListDataVrfOspfv3AuthProfileAhMd5OutputReference(this, "md5");
  public get md5() {
    return this._md5;
  }

  // sha1 - computed: true, optional: false, required: false
  private _sha1 = new DataScmLogicalRouterListDataVrfOspfv3AuthProfileAhSha1OutputReference(this, "sha1");
  public get sha1() {
    return this._sha1;
  }

  // sha256 - computed: true, optional: false, required: false
  private _sha256 = new DataScmLogicalRouterListDataVrfOspfv3AuthProfileAhSha256OutputReference(this, "sha256");
  public get sha256() {
    return this._sha256;
  }

  // sha384 - computed: true, optional: false, required: false
  private _sha384 = new DataScmLogicalRouterListDataVrfOspfv3AuthProfileAhSha384OutputReference(this, "sha384");
  public get sha384() {
    return this._sha384;
  }

  // sha512 - computed: true, optional: false, required: false
  private _sha512 = new DataScmLogicalRouterListDataVrfOspfv3AuthProfileAhSha512OutputReference(this, "sha512");
  public get sha512() {
    return this._sha512;
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationMd5 {
}

export function dataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationMd5ToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationMd5): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationMd5ToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationMd5): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationMd5OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationMd5 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationMd5 | undefined) {
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
}
export interface DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationNone {
}

export function dataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationNoneToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationNoneToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationNone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationNone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationSha1 {
}

export function dataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationSha1ToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationSha1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationSha1ToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationSha1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationSha1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationSha1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationSha1 | undefined) {
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
}
export interface DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationSha256 {
}

export function dataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationSha256ToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationSha256): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationSha256ToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationSha256): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationSha256OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationSha256 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationSha256 | undefined) {
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
}
export interface DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationSha384 {
}

export function dataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationSha384ToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationSha384): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationSha384ToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationSha384): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationSha384OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationSha384 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationSha384 | undefined) {
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
}
export interface DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationSha512 {
}

export function dataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationSha512ToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationSha512): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationSha512ToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationSha512): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationSha512OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationSha512 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationSha512 | undefined) {
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
}
export interface DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthentication {
}

export function dataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // md5 - computed: true, optional: false, required: false
  private _md5 = new DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationMd5OutputReference(this, "md5");
  public get md5() {
    return this._md5;
  }

  // none - computed: true, optional: false, required: false
  private _none = new DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }

  // sha1 - computed: true, optional: false, required: false
  private _sha1 = new DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationSha1OutputReference(this, "sha1");
  public get sha1() {
    return this._sha1;
  }

  // sha256 - computed: true, optional: false, required: false
  private _sha256 = new DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationSha256OutputReference(this, "sha256");
  public get sha256() {
    return this._sha256;
  }

  // sha384 - computed: true, optional: false, required: false
  private _sha384 = new DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationSha384OutputReference(this, "sha384");
  public get sha384() {
    return this._sha384;
  }

  // sha512 - computed: true, optional: false, required: false
  private _sha512 = new DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationSha512OutputReference(this, "sha512");
  public get sha512() {
    return this._sha512;
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspEncryption {
}

export function dataScmLogicalRouterListDataVrfOspfv3AuthProfileEspEncryptionToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AuthProfileEspEncryptionToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3AuthProfileEsp {
}

export function dataScmLogicalRouterListDataVrfOspfv3AuthProfileEspToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AuthProfileEsp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AuthProfileEspToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AuthProfileEsp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AuthProfileEsp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AuthProfileEsp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication - computed: true, optional: false, required: false
  private _authentication = new DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }

  // encryption - computed: true, optional: false, required: false
  private _encryption = new DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3AuthProfile {
}

export function dataScmLogicalRouterListDataVrfOspfv3AuthProfileToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AuthProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3AuthProfileToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3AuthProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3AuthProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3AuthProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3AuthProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ah - computed: true, optional: false, required: false
  private _ah = new DataScmLogicalRouterListDataVrfOspfv3AuthProfileAhOutputReference(this, "ah");
  public get ah() {
    return this._ah;
  }

  // esp - computed: true, optional: false, required: false
  private _esp = new DataScmLogicalRouterListDataVrfOspfv3AuthProfileEspOutputReference(this, "esp");
  public get esp() {
    return this._esp;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // spi - computed: true, optional: false, required: false
  public get spi() {
    return this.getStringAttribute('spi');
  }
}

export class DataScmLogicalRouterListDataVrfOspfv3AuthProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfOspfv3AuthProfileOutputReference {
    return new DataScmLogicalRouterListDataVrfOspfv3AuthProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3ExportRules {
}

export function dataScmLogicalRouterListDataVrfOspfv3ExportRulesToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3ExportRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3ExportRulesToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3ExportRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3ExportRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3ExportRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3ExportRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // new_path_type - computed: true, optional: false, required: false
  public get newPathType() {
    return this.getStringAttribute('new_path_type');
  }

  // new_tag - computed: true, optional: false, required: false
  public get newTag() {
    return this.getStringAttribute('new_tag');
  }
}

export class DataScmLogicalRouterListDataVrfOspfv3ExportRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfOspfv3ExportRulesOutputReference {
    return new DataScmLogicalRouterListDataVrfOspfv3ExportRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3GlobalBfd {
}

export function dataScmLogicalRouterListDataVrfOspfv3GlobalBfdToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3GlobalBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3GlobalBfdToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3GlobalBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3GlobalBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3GlobalBfd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3GlobalBfd | undefined) {
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
export interface DataScmLogicalRouterListDataVrfOspfv3GracefulRestart {
}

export function dataScmLogicalRouterListDataVrfOspfv3GracefulRestartToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3GracefulRestart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3GracefulRestartToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3GracefulRestart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3GracefulRestartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3GracefulRestart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3GracefulRestart | undefined) {
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

  // grace_period - computed: true, optional: false, required: false
  public get gracePeriod() {
    return this.getNumberAttribute('grace_period');
  }

  // helper_enable - computed: true, optional: false, required: false
  public get helperEnable() {
    return this.getBooleanAttribute('helper_enable');
  }

  // max_neighbor_restart_time - computed: true, optional: false, required: false
  public get maxNeighborRestartTime() {
    return this.getNumberAttribute('max_neighbor_restart_time');
  }

  // strict_lsa_checking - computed: true, optional: false, required: false
  public get strictLsaChecking() {
    return this.getBooleanAttribute('strict_lsa_checking');
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3VrTimers {
}

export function dataScmLogicalRouterListDataVrfOspfv3VrTimersToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3VrTimers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3VrTimersToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3VrTimers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3VrTimersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3VrTimers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3VrTimers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lsa_interval - computed: true, optional: false, required: false
  public get lsaInterval() {
    return this.getNumberAttribute('lsa_interval');
  }

  // spf_calculation_delay - computed: true, optional: false, required: false
  public get spfCalculationDelay() {
    return this.getNumberAttribute('spf_calculation_delay');
  }
}
export interface DataScmLogicalRouterListDataVrfOspfv3 {
}

export function dataScmLogicalRouterListDataVrfOspfv3ToTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfOspfv3ToHclTerraform(struct?: DataScmLogicalRouterListDataVrfOspfv3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOspfv3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfOspfv3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfOspfv3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_redist_default_route - computed: true, optional: false, required: false
  public get allowRedistDefaultRoute() {
    return this.getBooleanAttribute('allow_redist_default_route');
  }

  // area - computed: true, optional: false, required: false
  private _area = new DataScmLogicalRouterListDataVrfOspfv3AreaList(this, "area", false);
  public get area() {
    return this._area;
  }

  // auth_profile - computed: true, optional: false, required: false
  private _authProfile = new DataScmLogicalRouterListDataVrfOspfv3AuthProfileList(this, "auth_profile", false);
  public get authProfile() {
    return this._authProfile;
  }

  // disable_transit_traffic - computed: true, optional: false, required: false
  public get disableTransitTraffic() {
    return this.getBooleanAttribute('disable_transit_traffic');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // export_rules - computed: true, optional: false, required: false
  private _exportRules = new DataScmLogicalRouterListDataVrfOspfv3ExportRulesList(this, "export_rules", false);
  public get exportRules() {
    return this._exportRules;
  }

  // global_bfd - computed: true, optional: false, required: false
  private _globalBfd = new DataScmLogicalRouterListDataVrfOspfv3GlobalBfdOutputReference(this, "global_bfd");
  public get globalBfd() {
    return this._globalBfd;
  }

  // global_if_timer - computed: true, optional: false, required: false
  public get globalIfTimer() {
    return this.getStringAttribute('global_if_timer');
  }

  // graceful_restart - computed: true, optional: false, required: false
  private _gracefulRestart = new DataScmLogicalRouterListDataVrfOspfv3GracefulRestartOutputReference(this, "graceful_restart");
  public get gracefulRestart() {
    return this._gracefulRestart;
  }

  // redistribution_profile - computed: true, optional: false, required: false
  public get redistributionProfile() {
    return this.getStringAttribute('redistribution_profile');
  }

  // reject_default_route - computed: true, optional: false, required: false
  public get rejectDefaultRoute() {
    return this.getBooleanAttribute('reject_default_route');
  }

  // router_id - computed: true, optional: false, required: false
  public get routerId() {
    return this.getStringAttribute('router_id');
  }

  // spf_timer - computed: true, optional: false, required: false
  public get spfTimer() {
    return this.getStringAttribute('spf_timer');
  }

  // vr_timers - computed: true, optional: false, required: false
  private _vrTimers = new DataScmLogicalRouterListDataVrfOspfv3VrTimersOutputReference(this, "vr_timers");
  public get vrTimers() {
    return this._vrTimers;
  }
}
export interface DataScmLogicalRouterListDataVrfRibFilterIpv4Bgp {
}

export function dataScmLogicalRouterListDataVrfRibFilterIpv4BgpToTerraform(struct?: DataScmLogicalRouterListDataVrfRibFilterIpv4Bgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRibFilterIpv4BgpToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRibFilterIpv4Bgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRibFilterIpv4BgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfRibFilterIpv4Bgp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRibFilterIpv4Bgp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // route_map - computed: true, optional: false, required: false
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
}
export interface DataScmLogicalRouterListDataVrfRibFilterIpv4Ospf {
}

export function dataScmLogicalRouterListDataVrfRibFilterIpv4OspfToTerraform(struct?: DataScmLogicalRouterListDataVrfRibFilterIpv4Ospf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRibFilterIpv4OspfToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRibFilterIpv4Ospf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRibFilterIpv4OspfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfRibFilterIpv4Ospf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRibFilterIpv4Ospf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // route_map - computed: true, optional: false, required: false
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
}
export interface DataScmLogicalRouterListDataVrfRibFilterIpv4Rip {
}

export function dataScmLogicalRouterListDataVrfRibFilterIpv4RipToTerraform(struct?: DataScmLogicalRouterListDataVrfRibFilterIpv4Rip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRibFilterIpv4RipToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRibFilterIpv4Rip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRibFilterIpv4RipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfRibFilterIpv4Rip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRibFilterIpv4Rip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // route_map - computed: true, optional: false, required: false
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
}
export interface DataScmLogicalRouterListDataVrfRibFilterIpv4Static {
}

export function dataScmLogicalRouterListDataVrfRibFilterIpv4StaticToTerraform(struct?: DataScmLogicalRouterListDataVrfRibFilterIpv4Static): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRibFilterIpv4StaticToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRibFilterIpv4Static): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRibFilterIpv4StaticOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfRibFilterIpv4Static | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRibFilterIpv4Static | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // route_map - computed: true, optional: false, required: false
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
}
export interface DataScmLogicalRouterListDataVrfRibFilterIpv4 {
}

export function dataScmLogicalRouterListDataVrfRibFilterIpv4ToTerraform(struct?: DataScmLogicalRouterListDataVrfRibFilterIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRibFilterIpv4ToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRibFilterIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRibFilterIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfRibFilterIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRibFilterIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bgp - computed: true, optional: false, required: false
  private _bgp = new DataScmLogicalRouterListDataVrfRibFilterIpv4BgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }

  // ospf - computed: true, optional: false, required: false
  private _ospf = new DataScmLogicalRouterListDataVrfRibFilterIpv4OspfOutputReference(this, "ospf");
  public get ospf() {
    return this._ospf;
  }

  // rip - computed: true, optional: false, required: false
  private _rip = new DataScmLogicalRouterListDataVrfRibFilterIpv4RipOutputReference(this, "rip");
  public get rip() {
    return this._rip;
  }

  // static - computed: true, optional: false, required: false
  private _static = new DataScmLogicalRouterListDataVrfRibFilterIpv4StaticOutputReference(this, "static");
  public get static() {
    return this._static;
  }
}
export interface DataScmLogicalRouterListDataVrfRibFilterIpv6Bgp {
}

export function dataScmLogicalRouterListDataVrfRibFilterIpv6BgpToTerraform(struct?: DataScmLogicalRouterListDataVrfRibFilterIpv6Bgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRibFilterIpv6BgpToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRibFilterIpv6Bgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRibFilterIpv6BgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfRibFilterIpv6Bgp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRibFilterIpv6Bgp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // route_map - computed: true, optional: false, required: false
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
}
export interface DataScmLogicalRouterListDataVrfRibFilterIpv6Ospfv3 {
}

export function dataScmLogicalRouterListDataVrfRibFilterIpv6Ospfv3ToTerraform(struct?: DataScmLogicalRouterListDataVrfRibFilterIpv6Ospfv3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRibFilterIpv6Ospfv3ToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRibFilterIpv6Ospfv3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRibFilterIpv6Ospfv3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfRibFilterIpv6Ospfv3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRibFilterIpv6Ospfv3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // route_map - computed: true, optional: false, required: false
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
}
export interface DataScmLogicalRouterListDataVrfRibFilterIpv6Static {
}

export function dataScmLogicalRouterListDataVrfRibFilterIpv6StaticToTerraform(struct?: DataScmLogicalRouterListDataVrfRibFilterIpv6Static): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRibFilterIpv6StaticToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRibFilterIpv6Static): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRibFilterIpv6StaticOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfRibFilterIpv6Static | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRibFilterIpv6Static | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // route_map - computed: true, optional: false, required: false
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
}
export interface DataScmLogicalRouterListDataVrfRibFilterIpv6 {
}

export function dataScmLogicalRouterListDataVrfRibFilterIpv6ToTerraform(struct?: DataScmLogicalRouterListDataVrfRibFilterIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRibFilterIpv6ToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRibFilterIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRibFilterIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfRibFilterIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRibFilterIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bgp - computed: true, optional: false, required: false
  private _bgp = new DataScmLogicalRouterListDataVrfRibFilterIpv6BgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }

  // ospfv3 - computed: true, optional: false, required: false
  private _ospfv3 = new DataScmLogicalRouterListDataVrfRibFilterIpv6Ospfv3OutputReference(this, "ospfv3");
  public get ospfv3() {
    return this._ospfv3;
  }

  // static - computed: true, optional: false, required: false
  private _static = new DataScmLogicalRouterListDataVrfRibFilterIpv6StaticOutputReference(this, "static");
  public get static() {
    return this._static;
  }
}
export interface DataScmLogicalRouterListDataVrfRibFilter {
}

export function dataScmLogicalRouterListDataVrfRibFilterToTerraform(struct?: DataScmLogicalRouterListDataVrfRibFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRibFilterToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRibFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRibFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfRibFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRibFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataScmLogicalRouterListDataVrfRibFilterIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataScmLogicalRouterListDataVrfRibFilterIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
}
export interface DataScmLogicalRouterListDataVrfRipGlobalBfd {
}

export function dataScmLogicalRouterListDataVrfRipGlobalBfdToTerraform(struct?: DataScmLogicalRouterListDataVrfRipGlobalBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRipGlobalBfdToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRipGlobalBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRipGlobalBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfRipGlobalBfd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRipGlobalBfd | undefined) {
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
export interface DataScmLogicalRouterListDataVrfRipGlobalInboundDistributeListStruct {
}

export function dataScmLogicalRouterListDataVrfRipGlobalInboundDistributeListStructToTerraform(struct?: DataScmLogicalRouterListDataVrfRipGlobalInboundDistributeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRipGlobalInboundDistributeListStructToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRipGlobalInboundDistributeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRipGlobalInboundDistributeListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfRipGlobalInboundDistributeListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRipGlobalInboundDistributeListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_list - computed: true, optional: false, required: false
  public get accessList() {
    return this.getStringAttribute('access_list');
  }
}
export interface DataScmLogicalRouterListDataVrfRipGlobalOutboundDistributeListStruct {
}

export function dataScmLogicalRouterListDataVrfRipGlobalOutboundDistributeListStructToTerraform(struct?: DataScmLogicalRouterListDataVrfRipGlobalOutboundDistributeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRipGlobalOutboundDistributeListStructToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRipGlobalOutboundDistributeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRipGlobalOutboundDistributeListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfRipGlobalOutboundDistributeListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRipGlobalOutboundDistributeListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_list - computed: true, optional: false, required: false
  public get accessList() {
    return this.getStringAttribute('access_list');
  }
}
export interface DataScmLogicalRouterListDataVrfRipInterfaceBfd {
}

export function dataScmLogicalRouterListDataVrfRipInterfaceBfdToTerraform(struct?: DataScmLogicalRouterListDataVrfRipInterfaceBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRipInterfaceBfdToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRipInterfaceBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRipInterfaceBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfRipInterfaceBfd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRipInterfaceBfd | undefined) {
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
export interface DataScmLogicalRouterListDataVrfRipInterfaceInterfaceInboundDistributeListStruct {
}

export function dataScmLogicalRouterListDataVrfRipInterfaceInterfaceInboundDistributeListStructToTerraform(struct?: DataScmLogicalRouterListDataVrfRipInterfaceInterfaceInboundDistributeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRipInterfaceInterfaceInboundDistributeListStructToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRipInterfaceInterfaceInboundDistributeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRipInterfaceInterfaceInboundDistributeListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfRipInterfaceInterfaceInboundDistributeListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRipInterfaceInterfaceInboundDistributeListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_list - computed: true, optional: false, required: false
  public get accessList() {
    return this.getStringAttribute('access_list');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }
}
export interface DataScmLogicalRouterListDataVrfRipInterfaceInterfaceOutboundDistributeListStruct {
}

export function dataScmLogicalRouterListDataVrfRipInterfaceInterfaceOutboundDistributeListStructToTerraform(struct?: DataScmLogicalRouterListDataVrfRipInterfaceInterfaceOutboundDistributeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRipInterfaceInterfaceOutboundDistributeListStructToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRipInterfaceInterfaceOutboundDistributeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRipInterfaceInterfaceOutboundDistributeListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfRipInterfaceInterfaceOutboundDistributeListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRipInterfaceInterfaceOutboundDistributeListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_list - computed: true, optional: false, required: false
  public get accessList() {
    return this.getStringAttribute('access_list');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }
}
export interface DataScmLogicalRouterListDataVrfRipInterface {
}

export function dataScmLogicalRouterListDataVrfRipInterfaceToTerraform(struct?: DataScmLogicalRouterListDataVrfRipInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRipInterfaceToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRipInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRipInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfRipInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRipInterface | undefined) {
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

  // bfd - computed: true, optional: false, required: false
  private _bfd = new DataScmLogicalRouterListDataVrfRipInterfaceBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // interface_inbound_distribute_list - computed: true, optional: false, required: false
  private _interfaceInboundDistributeList = new DataScmLogicalRouterListDataVrfRipInterfaceInterfaceInboundDistributeListStructOutputReference(this, "interface_inbound_distribute_list");
  public get interfaceInboundDistributeList() {
    return this._interfaceInboundDistributeList;
  }

  // interface_outbound_distribute_list - computed: true, optional: false, required: false
  private _interfaceOutboundDistributeList = new DataScmLogicalRouterListDataVrfRipInterfaceInterfaceOutboundDistributeListStructOutputReference(this, "interface_outbound_distribute_list");
  public get interfaceOutboundDistributeList() {
    return this._interfaceOutboundDistributeList;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // split_horizon - computed: true, optional: false, required: false
  public get splitHorizon() {
    return this.getStringAttribute('split_horizon');
  }
}

export class DataScmLogicalRouterListDataVrfRipInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfRipInterfaceOutputReference {
    return new DataScmLogicalRouterListDataVrfRipInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfRip {
}

export function dataScmLogicalRouterListDataVrfRipToTerraform(struct?: DataScmLogicalRouterListDataVrfRip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRipToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfRip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_profile - computed: true, optional: false, required: false
  public get authProfile() {
    return this.getStringAttribute('auth_profile');
  }

  // default_information_originate - computed: true, optional: false, required: false
  public get defaultInformationOriginate() {
    return this.getBooleanAttribute('default_information_originate');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // global_bfd - computed: true, optional: false, required: false
  private _globalBfd = new DataScmLogicalRouterListDataVrfRipGlobalBfdOutputReference(this, "global_bfd");
  public get globalBfd() {
    return this._globalBfd;
  }

  // global_inbound_distribute_list - computed: true, optional: false, required: false
  private _globalInboundDistributeList = new DataScmLogicalRouterListDataVrfRipGlobalInboundDistributeListStructOutputReference(this, "global_inbound_distribute_list");
  public get globalInboundDistributeList() {
    return this._globalInboundDistributeList;
  }

  // global_outbound_distribute_list - computed: true, optional: false, required: false
  private _globalOutboundDistributeList = new DataScmLogicalRouterListDataVrfRipGlobalOutboundDistributeListStructOutputReference(this, "global_outbound_distribute_list");
  public get globalOutboundDistributeList() {
    return this._globalOutboundDistributeList;
  }

  // global_timer - computed: true, optional: false, required: false
  public get globalTimer() {
    return this.getStringAttribute('global_timer');
  }

  // interface - computed: true, optional: false, required: false
  private _interface = new DataScmLogicalRouterListDataVrfRipInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }

  // redistribution_profile - computed: true, optional: false, required: false
  public get redistributionProfile() {
    return this.getStringAttribute('redistribution_profile');
  }
}
export interface DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteBfd {
}

export function dataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteBfdToTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteBfdToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteBfd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteBfd | undefined) {
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
export interface DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteNexthopDiscard {
}

export function dataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteNexthopDiscardToTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteNexthopDiscard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteNexthopDiscardToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteNexthopDiscard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteNexthopDiscardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteNexthopDiscard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteNexthopDiscard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteNexthopReceive {
}

export function dataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteNexthopReceiveToTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteNexthopReceive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteNexthopReceiveToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteNexthopReceive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteNexthopReceiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteNexthopReceive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteNexthopReceive | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteNexthop {
}

export function dataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteNexthopToTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteNexthopToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteNexthopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteNexthop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteNexthop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // discard - computed: true, optional: false, required: false
  private _discard = new DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteNexthopDiscardOutputReference(this, "discard");
  public get discard() {
    return this._discard;
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // next_lr - computed: true, optional: false, required: false
  public get nextLr() {
    return this.getStringAttribute('next_lr');
  }

  // next_vr - computed: true, optional: false, required: false
  public get nextVr() {
    return this.getStringAttribute('next_vr');
  }

  // receive - computed: true, optional: false, required: false
  private _receive = new DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteNexthopReceiveOutputReference(this, "receive");
  public get receive() {
    return this._receive;
  }

  // tunnel - computed: true, optional: false, required: false
  public get tunnel() {
    return this.getStringAttribute('tunnel');
  }
}
export interface DataScmLogicalRouterListDataVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinations {
}

export function dataScmLogicalRouterListDataVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsToTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return this.getStringAttribute('destination');
  }

  // destination_fqdn - computed: true, optional: false, required: false
  public get destinationFqdn() {
    return this.getStringAttribute('destination_fqdn');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }
}

export class DataScmLogicalRouterListDataVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsOutputReference {
    return new DataScmLogicalRouterListDataVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfRoutingTableIpStaticRoutePathMonitor {
}

export function dataScmLogicalRouterListDataVrfRoutingTableIpStaticRoutePathMonitorToTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpStaticRoutePathMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRoutingTableIpStaticRoutePathMonitorToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpStaticRoutePathMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRoutingTableIpStaticRoutePathMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfRoutingTableIpStaticRoutePathMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRoutingTableIpStaticRoutePathMonitor | undefined) {
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

  // failure_condition - computed: true, optional: false, required: false
  public get failureCondition() {
    return this.getStringAttribute('failure_condition');
  }

  // hold_time - computed: true, optional: false, required: false
  public get holdTime() {
    return this.getNumberAttribute('hold_time');
  }

  // monitor_destinations - computed: true, optional: false, required: false
  private _monitorDestinations = new DataScmLogicalRouterListDataVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsList(this, "monitor_destinations", false);
  public get monitorDestinations() {
    return this._monitorDestinations;
  }
}
export interface DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTableBoth {
}

export function dataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTableBothToTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTableBoth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTableBothToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTableBoth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTableBothOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTableBoth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTableBoth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTableMulticast {
}

export function dataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTableMulticastToTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTableMulticast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTableMulticastToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTableMulticast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTableMulticastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTableMulticast | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTableMulticast | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTableNoInstall {
}

export function dataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTableNoInstallToTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTableNoInstall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTableNoInstallToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTableNoInstall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTableNoInstallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTableNoInstall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTableNoInstall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTableUnicast {
}

export function dataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTableUnicastToTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTableUnicast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTableUnicastToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTableUnicast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTableUnicastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTableUnicast | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTableUnicast | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTable {
}

export function dataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTableToTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTableToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // both - computed: true, optional: false, required: false
  private _both = new DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTableBothOutputReference(this, "both");
  public get both() {
    return this._both;
  }

  // multicast - computed: true, optional: false, required: false
  private _multicast = new DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTableMulticastOutputReference(this, "multicast");
  public get multicast() {
    return this._multicast;
  }

  // no_install - computed: true, optional: false, required: false
  private _noInstall = new DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTableNoInstallOutputReference(this, "no_install");
  public get noInstall() {
    return this._noInstall;
  }

  // unicast - computed: true, optional: false, required: false
  private _unicast = new DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTableUnicastOutputReference(this, "unicast");
  public get unicast() {
    return this._unicast;
  }
}
export interface DataScmLogicalRouterListDataVrfRoutingTableIpStaticRoute {
}

export function dataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteToTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpStaticRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpStaticRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfRoutingTableIpStaticRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRoutingTableIpStaticRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_dist - computed: true, optional: false, required: false
  public get adminDist() {
    return this.getNumberAttribute('admin_dist');
  }

  // bfd - computed: true, optional: false, required: false
  private _bfd = new DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return this.getStringAttribute('destination');
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nexthop - computed: true, optional: false, required: false
  private _nexthop = new DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteNexthopOutputReference(this, "nexthop");
  public get nexthop() {
    return this._nexthop;
  }

  // path_monitor - computed: true, optional: false, required: false
  private _pathMonitor = new DataScmLogicalRouterListDataVrfRoutingTableIpStaticRoutePathMonitorOutputReference(this, "path_monitor");
  public get pathMonitor() {
    return this._pathMonitor;
  }

  // route_table - computed: true, optional: false, required: false
  private _routeTable = new DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteRouteTableOutputReference(this, "route_table");
  public get routeTable() {
    return this._routeTable;
  }
}

export class DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteOutputReference {
    return new DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfRoutingTableIp {
}

export function dataScmLogicalRouterListDataVrfRoutingTableIpToTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRoutingTableIpToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRoutingTableIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfRoutingTableIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRoutingTableIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // static_route - computed: true, optional: false, required: false
  private _staticRoute = new DataScmLogicalRouterListDataVrfRoutingTableIpStaticRouteList(this, "static_route", false);
  public get staticRoute() {
    return this._staticRoute;
  }
}
export interface DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteBfd {
}

export function dataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteBfdToTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteBfdToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteBfd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteBfd | undefined) {
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
export interface DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteNexthopDiscard {
}

export function dataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteNexthopDiscardToTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteNexthopDiscard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteNexthopDiscardToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteNexthopDiscard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteNexthopDiscardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteNexthopDiscard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteNexthopDiscard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteNexthopReceive {
}

export function dataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteNexthopReceiveToTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteNexthopReceive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteNexthopReceiveToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteNexthopReceive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteNexthopReceiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteNexthopReceive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteNexthopReceive | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteNexthop {
}

export function dataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteNexthopToTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteNexthopToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteNexthopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteNexthop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteNexthop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // discard - computed: true, optional: false, required: false
  private _discard = new DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteNexthopDiscardOutputReference(this, "discard");
  public get discard() {
    return this._discard;
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // next_lr - computed: true, optional: false, required: false
  public get nextLr() {
    return this.getStringAttribute('next_lr');
  }

  // next_vr - computed: true, optional: false, required: false
  public get nextVr() {
    return this.getStringAttribute('next_vr');
  }

  // receive - computed: true, optional: false, required: false
  private _receive = new DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteNexthopReceiveOutputReference(this, "receive");
  public get receive() {
    return this._receive;
  }

  // tunnel - computed: true, optional: false, required: false
  public get tunnel() {
    return this.getStringAttribute('tunnel');
  }
}
export interface DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteOptionPassive {
}

export function dataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteOptionPassiveToTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteOptionPassive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteOptionPassiveToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteOptionPassive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteOptionPassiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteOptionPassive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteOptionPassive | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteOption {
}

export function dataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteOptionToTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteOptionToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // passive - computed: true, optional: false, required: false
  private _passive = new DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteOptionPassiveOutputReference(this, "passive");
  public get passive() {
    return this._passive;
  }
}
export interface DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinations {
}

export function dataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsToTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return this.getStringAttribute('destination');
  }

  // destination_fqdn - computed: true, optional: false, required: false
  public get destinationFqdn() {
    return this.getStringAttribute('destination_fqdn');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }
}

export class DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsOutputReference {
    return new DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRoutePathMonitor {
}

export function dataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRoutePathMonitorToTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRoutePathMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRoutePathMonitorToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRoutePathMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRoutePathMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRoutePathMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRoutePathMonitor | undefined) {
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

  // failure_condition - computed: true, optional: false, required: false
  public get failureCondition() {
    return this.getStringAttribute('failure_condition');
  }

  // hold_time - computed: true, optional: false, required: false
  public get holdTime() {
    return this.getNumberAttribute('hold_time');
  }

  // monitor_destinations - computed: true, optional: false, required: false
  private _monitorDestinations = new DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsList(this, "monitor_destinations", false);
  public get monitorDestinations() {
    return this._monitorDestinations;
  }
}
export interface DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTableBoth {
}

export function dataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTableBothToTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTableBoth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTableBothToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTableBoth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTableBothOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTableBoth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTableBoth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTableMulticast {
}

export function dataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTableMulticastToTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTableMulticast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTableMulticastToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTableMulticast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTableMulticastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTableMulticast | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTableMulticast | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTableNoInstall {
}

export function dataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTableNoInstallToTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTableNoInstall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTableNoInstallToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTableNoInstall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTableNoInstallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTableNoInstall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTableNoInstall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTableUnicast {
}

export function dataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTableUnicastToTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTableUnicast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTableUnicastToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTableUnicast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTableUnicastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTableUnicast | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTableUnicast | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTable {
}

export function dataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTableToTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTableToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // both - computed: true, optional: false, required: false
  private _both = new DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTableBothOutputReference(this, "both");
  public get both() {
    return this._both;
  }

  // multicast - computed: true, optional: false, required: false
  private _multicast = new DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTableMulticastOutputReference(this, "multicast");
  public get multicast() {
    return this._multicast;
  }

  // no_install - computed: true, optional: false, required: false
  private _noInstall = new DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTableNoInstallOutputReference(this, "no_install");
  public get noInstall() {
    return this._noInstall;
  }

  // unicast - computed: true, optional: false, required: false
  private _unicast = new DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTableUnicastOutputReference(this, "unicast");
  public get unicast() {
    return this._unicast;
  }
}
export interface DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRoute {
}

export function dataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteToTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_dist - computed: true, optional: false, required: false
  public get adminDist() {
    return this.getNumberAttribute('admin_dist');
  }

  // bfd - computed: true, optional: false, required: false
  private _bfd = new DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return this.getStringAttribute('destination');
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nexthop - computed: true, optional: false, required: false
  private _nexthop = new DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteNexthopOutputReference(this, "nexthop");
  public get nexthop() {
    return this._nexthop;
  }

  // option - computed: true, optional: false, required: false
  private _option = new DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteOptionOutputReference(this, "option");
  public get option() {
    return this._option;
  }

  // path_monitor - computed: true, optional: false, required: false
  private _pathMonitor = new DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRoutePathMonitorOutputReference(this, "path_monitor");
  public get pathMonitor() {
    return this._pathMonitor;
  }

  // route_table - computed: true, optional: false, required: false
  private _routeTable = new DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteRouteTableOutputReference(this, "route_table");
  public get routeTable() {
    return this._routeTable;
  }
}

export class DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteOutputReference {
    return new DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListDataVrfRoutingTableIpv6 {
}

export function dataScmLogicalRouterListDataVrfRoutingTableIpv6ToTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRoutingTableIpv6ToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTableIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRoutingTableIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfRoutingTableIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRoutingTableIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // static_route - computed: true, optional: false, required: false
  private _staticRoute = new DataScmLogicalRouterListDataVrfRoutingTableIpv6StaticRouteList(this, "static_route", false);
  public get staticRoute() {
    return this._staticRoute;
  }
}
export interface DataScmLogicalRouterListDataVrfRoutingTable {
}

export function dataScmLogicalRouterListDataVrfRoutingTableToTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfRoutingTableToHclTerraform(struct?: DataScmLogicalRouterListDataVrfRoutingTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfRoutingTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfRoutingTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfRoutingTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  private _ip = new DataScmLogicalRouterListDataVrfRoutingTableIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataScmLogicalRouterListDataVrfRoutingTableIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
}
export interface DataScmLogicalRouterListDataVrfVrAdminDists {
}

export function dataScmLogicalRouterListDataVrfVrAdminDistsToTerraform(struct?: DataScmLogicalRouterListDataVrfVrAdminDists): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfVrAdminDistsToHclTerraform(struct?: DataScmLogicalRouterListDataVrfVrAdminDists): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfVrAdminDistsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterListDataVrfVrAdminDists | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrfVrAdminDists | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ebgp - computed: true, optional: false, required: false
  public get ebgp() {
    return this.getNumberAttribute('ebgp');
  }

  // ibgp - computed: true, optional: false, required: false
  public get ibgp() {
    return this.getNumberAttribute('ibgp');
  }

  // ospf_ext - computed: true, optional: false, required: false
  public get ospfExt() {
    return this.getNumberAttribute('ospf_ext');
  }

  // ospf_int - computed: true, optional: false, required: false
  public get ospfInt() {
    return this.getNumberAttribute('ospf_int');
  }

  // ospfv3_ext - computed: true, optional: false, required: false
  public get ospfv3Ext() {
    return this.getNumberAttribute('ospfv3_ext');
  }

  // ospfv3_int - computed: true, optional: false, required: false
  public get ospfv3Int() {
    return this.getNumberAttribute('ospfv3_int');
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
export interface DataScmLogicalRouterListDataVrf {
}

export function dataScmLogicalRouterListDataVrfToTerraform(struct?: DataScmLogicalRouterListDataVrf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterListDataVrfToHclTerraform(struct?: DataScmLogicalRouterListDataVrf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterListDataVrfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListDataVrf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListDataVrf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_dists - computed: true, optional: false, required: false
  private _adminDists = new DataScmLogicalRouterListDataVrfAdminDistsOutputReference(this, "admin_dists");
  public get adminDists() {
    return this._adminDists;
  }

  // bgp - computed: true, optional: false, required: false
  private _bgp = new DataScmLogicalRouterListDataVrfBgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }

  // ecmp - computed: true, optional: false, required: false
  private _ecmp = new DataScmLogicalRouterListDataVrfEcmpOutputReference(this, "ecmp");
  public get ecmp() {
    return this._ecmp;
  }

  // global_vrid - computed: true, optional: false, required: false
  public get globalVrid() {
    return this.getNumberAttribute('global_vrid');
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getListAttribute('interface');
  }

  // multicast - computed: true, optional: false, required: false
  private _multicast = new DataScmLogicalRouterListDataVrfMulticastOutputReference(this, "multicast");
  public get multicast() {
    return this._multicast;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ospf - computed: true, optional: false, required: false
  private _ospf = new DataScmLogicalRouterListDataVrfOspfOutputReference(this, "ospf");
  public get ospf() {
    return this._ospf;
  }

  // ospfv3 - computed: true, optional: false, required: false
  private _ospfv3 = new DataScmLogicalRouterListDataVrfOspfv3OutputReference(this, "ospfv3");
  public get ospfv3() {
    return this._ospfv3;
  }

  // rib_filter - computed: true, optional: false, required: false
  private _ribFilter = new DataScmLogicalRouterListDataVrfRibFilterOutputReference(this, "rib_filter");
  public get ribFilter() {
    return this._ribFilter;
  }

  // rip - computed: true, optional: false, required: false
  private _rip = new DataScmLogicalRouterListDataVrfRipOutputReference(this, "rip");
  public get rip() {
    return this._rip;
  }

  // routing_table - computed: true, optional: false, required: false
  private _routingTable = new DataScmLogicalRouterListDataVrfRoutingTableOutputReference(this, "routing_table");
  public get routingTable() {
    return this._routingTable;
  }

  // sdwan_type - computed: true, optional: false, required: false
  public get sdwanType() {
    return this.getStringAttribute('sdwan_type');
  }

  // vr_admin_dists - computed: true, optional: false, required: false
  private _vrAdminDists = new DataScmLogicalRouterListDataVrfVrAdminDistsOutputReference(this, "vr_admin_dists");
  public get vrAdminDists() {
    return this._vrAdminDists;
  }

  // zone_name - computed: true, optional: false, required: false
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
}

export class DataScmLogicalRouterListDataVrfList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterListDataVrfOutputReference {
    return new DataScmLogicalRouterListDataVrfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterListData {
  /**
  * UUID of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/logical_router_list#id DataScmLogicalRouterList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/logical_router_list#name DataScmLogicalRouterList#name}
  */
  readonly name?: string;
}

export function dataScmLogicalRouterListDataToTerraform(struct?: DataScmLogicalRouterListData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataScmLogicalRouterListDataToHclTerraform(struct?: DataScmLogicalRouterListData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataScmLogicalRouterListDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterListData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterListData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
  }

  // id - computed: true, optional: false, required: true
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

  // routing_stack - computed: true, optional: false, required: false
  public get routingStack() {
    return this.getStringAttribute('routing_stack');
  }

  // snippet - computed: true, optional: false, required: false
  public get snippet() {
    return this.getStringAttribute('snippet');
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // vrf - computed: true, optional: false, required: false
  private _vrf = new DataScmLogicalRouterListDataVrfList(this, "vrf", false);
  public get vrf() {
    return this._vrf;
  }
}

export class DataScmLogicalRouterListDataList extends cdktf.ComplexList {
  public internalValue? : DataScmLogicalRouterListData[] | cdktf.IResolvable

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
  public get(index: number): DataScmLogicalRouterListDataOutputReference {
    return new DataScmLogicalRouterListDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
