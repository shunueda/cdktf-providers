import * as cdktf from 'cdktf';
import { DataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeBroadcastOutputReference,
DataScmLogicalRouterVrfOspfAreaInterfaceBfdOutputReference,
DataScmLogicalRouterVrfAdminDistsOutputReference,
DataScmLogicalRouterVrfBgpOutputReference,
DataScmLogicalRouterVrfEcmpOutputReference,
DataScmLogicalRouterVrfMulticastOutputReference } from './structs0'
export interface DataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighbor {
}

export function dataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighborToTerraform(struct?: DataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighbor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighborToHclTerraform(struct?: DataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighbor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighborOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighbor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighbor | undefined) {
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

export class DataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighborList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighborOutputReference {
    return new DataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighborOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeP2Mp {
}

export function dataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpToTerraform(struct?: DataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeP2Mp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpToHclTerraform(struct?: DataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeP2Mp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeP2Mp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeP2Mp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // neighbor - computed: true, optional: false, required: false
  private _neighbor = new DataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighborList(this, "neighbor", false);
  public get neighbor() {
    return this._neighbor;
  }
}
export interface DataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeP2P {
}

export function dataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeP2PToTerraform(struct?: DataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeP2P): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeP2PToHclTerraform(struct?: DataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeP2P): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeP2POutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeP2P | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeP2P | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfOspfAreaInterfaceLinkType {
}

export function dataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeToTerraform(struct?: DataScmLogicalRouterVrfOspfAreaInterfaceLinkType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeToHclTerraform(struct?: DataScmLogicalRouterVrfOspfAreaInterfaceLinkType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfAreaInterfaceLinkType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfAreaInterfaceLinkType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // broadcast - computed: true, optional: false, required: false
  private _broadcast = new DataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeBroadcastOutputReference(this, "broadcast");
  public get broadcast() {
    return this._broadcast;
  }

  // p2mp - computed: true, optional: false, required: false
  private _p2Mp = new DataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpOutputReference(this, "p2mp");
  public get p2Mp() {
    return this._p2Mp;
  }

  // p2p - computed: true, optional: false, required: false
  private _p2P = new DataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeP2POutputReference(this, "p2p");
  public get p2P() {
    return this._p2P;
  }
}
export interface DataScmLogicalRouterVrfOspfAreaInterfaceVrTiming {
}

export function dataScmLogicalRouterVrfOspfAreaInterfaceVrTimingToTerraform(struct?: DataScmLogicalRouterVrfOspfAreaInterfaceVrTiming): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfAreaInterfaceVrTimingToHclTerraform(struct?: DataScmLogicalRouterVrfOspfAreaInterfaceVrTiming): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfAreaInterfaceVrTimingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfAreaInterfaceVrTiming | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfAreaInterfaceVrTiming | undefined) {
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
export interface DataScmLogicalRouterVrfOspfAreaInterface {
}

export function dataScmLogicalRouterVrfOspfAreaInterfaceToTerraform(struct?: DataScmLogicalRouterVrfOspfAreaInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfAreaInterfaceToHclTerraform(struct?: DataScmLogicalRouterVrfOspfAreaInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfAreaInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfOspfAreaInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfAreaInterface | undefined) {
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
  private _bfd = new DataScmLogicalRouterVrfOspfAreaInterfaceBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // link_type - computed: true, optional: false, required: false
  private _linkType = new DataScmLogicalRouterVrfOspfAreaInterfaceLinkTypeOutputReference(this, "link_type");
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
  private _vrTiming = new DataScmLogicalRouterVrfOspfAreaInterfaceVrTimingOutputReference(this, "vr_timing");
  public get vrTiming() {
    return this._vrTiming;
  }
}

export class DataScmLogicalRouterVrfOspfAreaInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfOspfAreaInterfaceOutputReference {
    return new DataScmLogicalRouterVrfOspfAreaInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfOspfAreaRange {
}

export function dataScmLogicalRouterVrfOspfAreaRangeToTerraform(struct?: DataScmLogicalRouterVrfOspfAreaRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfAreaRangeToHclTerraform(struct?: DataScmLogicalRouterVrfOspfAreaRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfAreaRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfOspfAreaRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfAreaRange | undefined) {
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

export class DataScmLogicalRouterVrfOspfAreaRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfOspfAreaRangeOutputReference {
    return new DataScmLogicalRouterVrfOspfAreaRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfOspfAreaTypeNormalAbr {
}

export function dataScmLogicalRouterVrfOspfAreaTypeNormalAbrToTerraform(struct?: DataScmLogicalRouterVrfOspfAreaTypeNormalAbr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfAreaTypeNormalAbrToHclTerraform(struct?: DataScmLogicalRouterVrfOspfAreaTypeNormalAbr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfAreaTypeNormalAbrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfAreaTypeNormalAbr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfAreaTypeNormalAbr | undefined) {
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
export interface DataScmLogicalRouterVrfOspfAreaTypeNormal {
}

export function dataScmLogicalRouterVrfOspfAreaTypeNormalToTerraform(struct?: DataScmLogicalRouterVrfOspfAreaTypeNormal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfAreaTypeNormalToHclTerraform(struct?: DataScmLogicalRouterVrfOspfAreaTypeNormal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfAreaTypeNormalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfAreaTypeNormal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfAreaTypeNormal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // abr - computed: true, optional: false, required: false
  private _abr = new DataScmLogicalRouterVrfOspfAreaTypeNormalAbrOutputReference(this, "abr");
  public get abr() {
    return this._abr;
  }
}
export interface DataScmLogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRange {
}

export function dataScmLogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRangeToTerraform(struct?: DataScmLogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRangeToHclTerraform(struct?: DataScmLogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRange | undefined) {
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

export class DataScmLogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRangeOutputReference {
    return new DataScmLogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfOspfAreaTypeNssaAbr {
}

export function dataScmLogicalRouterVrfOspfAreaTypeNssaAbrToTerraform(struct?: DataScmLogicalRouterVrfOspfAreaTypeNssaAbr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfAreaTypeNssaAbrToHclTerraform(struct?: DataScmLogicalRouterVrfOspfAreaTypeNssaAbr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfAreaTypeNssaAbrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfAreaTypeNssaAbr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfAreaTypeNssaAbr | undefined) {
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
  private _nssaExtRange = new DataScmLogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRangeList(this, "nssa_ext_range", false);
  public get nssaExtRange() {
    return this._nssaExtRange;
  }

  // outbound_filter_list - computed: true, optional: false, required: false
  public get outboundFilterList() {
    return this.getStringAttribute('outbound_filter_list');
  }
}
export interface DataScmLogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginate {
}

export function dataScmLogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginateToTerraform(struct?: DataScmLogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginateToHclTerraform(struct?: DataScmLogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginate | undefined) {
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
export interface DataScmLogicalRouterVrfOspfAreaTypeNssaDefaultRouteAdvertise {
}

export function dataScmLogicalRouterVrfOspfAreaTypeNssaDefaultRouteAdvertiseToTerraform(struct?: DataScmLogicalRouterVrfOspfAreaTypeNssaDefaultRouteAdvertise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfAreaTypeNssaDefaultRouteAdvertiseToHclTerraform(struct?: DataScmLogicalRouterVrfOspfAreaTypeNssaDefaultRouteAdvertise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfAreaTypeNssaDefaultRouteAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfAreaTypeNssaDefaultRouteAdvertise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfAreaTypeNssaDefaultRouteAdvertise | undefined) {
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
export interface DataScmLogicalRouterVrfOspfAreaTypeNssaDefaultRouteDisable {
}

export function dataScmLogicalRouterVrfOspfAreaTypeNssaDefaultRouteDisableToTerraform(struct?: DataScmLogicalRouterVrfOspfAreaTypeNssaDefaultRouteDisable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfAreaTypeNssaDefaultRouteDisableToHclTerraform(struct?: DataScmLogicalRouterVrfOspfAreaTypeNssaDefaultRouteDisable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfAreaTypeNssaDefaultRouteDisableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfAreaTypeNssaDefaultRouteDisable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfAreaTypeNssaDefaultRouteDisable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfOspfAreaTypeNssaDefaultRoute {
}

export function dataScmLogicalRouterVrfOspfAreaTypeNssaDefaultRouteToTerraform(struct?: DataScmLogicalRouterVrfOspfAreaTypeNssaDefaultRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfAreaTypeNssaDefaultRouteToHclTerraform(struct?: DataScmLogicalRouterVrfOspfAreaTypeNssaDefaultRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfAreaTypeNssaDefaultRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfAreaTypeNssaDefaultRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfAreaTypeNssaDefaultRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise - computed: true, optional: false, required: false
  private _advertise = new DataScmLogicalRouterVrfOspfAreaTypeNssaDefaultRouteAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }

  // disable - computed: true, optional: false, required: false
  private _disable = new DataScmLogicalRouterVrfOspfAreaTypeNssaDefaultRouteDisableOutputReference(this, "disable");
  public get disable() {
    return this._disable;
  }
}
export interface DataScmLogicalRouterVrfOspfAreaTypeNssaNssaExtRangeAdvertise {
}

export function dataScmLogicalRouterVrfOspfAreaTypeNssaNssaExtRangeAdvertiseToTerraform(struct?: DataScmLogicalRouterVrfOspfAreaTypeNssaNssaExtRangeAdvertise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfAreaTypeNssaNssaExtRangeAdvertiseToHclTerraform(struct?: DataScmLogicalRouterVrfOspfAreaTypeNssaNssaExtRangeAdvertise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfAreaTypeNssaNssaExtRangeAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfAreaTypeNssaNssaExtRangeAdvertise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfAreaTypeNssaNssaExtRangeAdvertise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfOspfAreaTypeNssaNssaExtRangeSuppress {
}

export function dataScmLogicalRouterVrfOspfAreaTypeNssaNssaExtRangeSuppressToTerraform(struct?: DataScmLogicalRouterVrfOspfAreaTypeNssaNssaExtRangeSuppress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfAreaTypeNssaNssaExtRangeSuppressToHclTerraform(struct?: DataScmLogicalRouterVrfOspfAreaTypeNssaNssaExtRangeSuppress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfAreaTypeNssaNssaExtRangeSuppressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfAreaTypeNssaNssaExtRangeSuppress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfAreaTypeNssaNssaExtRangeSuppress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfOspfAreaTypeNssaNssaExtRange {
}

export function dataScmLogicalRouterVrfOspfAreaTypeNssaNssaExtRangeToTerraform(struct?: DataScmLogicalRouterVrfOspfAreaTypeNssaNssaExtRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfAreaTypeNssaNssaExtRangeToHclTerraform(struct?: DataScmLogicalRouterVrfOspfAreaTypeNssaNssaExtRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfAreaTypeNssaNssaExtRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfOspfAreaTypeNssaNssaExtRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfAreaTypeNssaNssaExtRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise - computed: true, optional: false, required: false
  private _advertise = new DataScmLogicalRouterVrfOspfAreaTypeNssaNssaExtRangeAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // suppress - computed: true, optional: false, required: false
  private _suppress = new DataScmLogicalRouterVrfOspfAreaTypeNssaNssaExtRangeSuppressOutputReference(this, "suppress");
  public get suppress() {
    return this._suppress;
  }
}

export class DataScmLogicalRouterVrfOspfAreaTypeNssaNssaExtRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfOspfAreaTypeNssaNssaExtRangeOutputReference {
    return new DataScmLogicalRouterVrfOspfAreaTypeNssaNssaExtRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfOspfAreaTypeNssa {
}

export function dataScmLogicalRouterVrfOspfAreaTypeNssaToTerraform(struct?: DataScmLogicalRouterVrfOspfAreaTypeNssa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfAreaTypeNssaToHclTerraform(struct?: DataScmLogicalRouterVrfOspfAreaTypeNssa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfAreaTypeNssaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfAreaTypeNssa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfAreaTypeNssa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // abr - computed: true, optional: false, required: false
  private _abr = new DataScmLogicalRouterVrfOspfAreaTypeNssaAbrOutputReference(this, "abr");
  public get abr() {
    return this._abr;
  }

  // accept_summary - computed: true, optional: false, required: false
  public get acceptSummary() {
    return this.getBooleanAttribute('accept_summary');
  }

  // default_information_originate - computed: true, optional: false, required: false
  private _defaultInformationOriginate = new DataScmLogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginateOutputReference(this, "default_information_originate");
  public get defaultInformationOriginate() {
    return this._defaultInformationOriginate;
  }

  // default_route - computed: true, optional: false, required: false
  private _defaultRoute = new DataScmLogicalRouterVrfOspfAreaTypeNssaDefaultRouteOutputReference(this, "default_route");
  public get defaultRoute() {
    return this._defaultRoute;
  }

  // no_summary - computed: true, optional: false, required: false
  public get noSummary() {
    return this.getBooleanAttribute('no_summary');
  }

  // nssa_ext_range - computed: true, optional: false, required: false
  private _nssaExtRange = new DataScmLogicalRouterVrfOspfAreaTypeNssaNssaExtRangeList(this, "nssa_ext_range", false);
  public get nssaExtRange() {
    return this._nssaExtRange;
  }
}
export interface DataScmLogicalRouterVrfOspfAreaTypeStubAbr {
}

export function dataScmLogicalRouterVrfOspfAreaTypeStubAbrToTerraform(struct?: DataScmLogicalRouterVrfOspfAreaTypeStubAbr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfAreaTypeStubAbrToHclTerraform(struct?: DataScmLogicalRouterVrfOspfAreaTypeStubAbr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfAreaTypeStubAbrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfAreaTypeStubAbr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfAreaTypeStubAbr | undefined) {
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
export interface DataScmLogicalRouterVrfOspfAreaTypeStubDefaultRouteAdvertise {
}

export function dataScmLogicalRouterVrfOspfAreaTypeStubDefaultRouteAdvertiseToTerraform(struct?: DataScmLogicalRouterVrfOspfAreaTypeStubDefaultRouteAdvertise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfAreaTypeStubDefaultRouteAdvertiseToHclTerraform(struct?: DataScmLogicalRouterVrfOspfAreaTypeStubDefaultRouteAdvertise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfAreaTypeStubDefaultRouteAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfAreaTypeStubDefaultRouteAdvertise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfAreaTypeStubDefaultRouteAdvertise | undefined) {
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
export interface DataScmLogicalRouterVrfOspfAreaTypeStubDefaultRouteDisable {
}

export function dataScmLogicalRouterVrfOspfAreaTypeStubDefaultRouteDisableToTerraform(struct?: DataScmLogicalRouterVrfOspfAreaTypeStubDefaultRouteDisable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfAreaTypeStubDefaultRouteDisableToHclTerraform(struct?: DataScmLogicalRouterVrfOspfAreaTypeStubDefaultRouteDisable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfAreaTypeStubDefaultRouteDisableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfAreaTypeStubDefaultRouteDisable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfAreaTypeStubDefaultRouteDisable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfOspfAreaTypeStubDefaultRoute {
}

export function dataScmLogicalRouterVrfOspfAreaTypeStubDefaultRouteToTerraform(struct?: DataScmLogicalRouterVrfOspfAreaTypeStubDefaultRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfAreaTypeStubDefaultRouteToHclTerraform(struct?: DataScmLogicalRouterVrfOspfAreaTypeStubDefaultRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfAreaTypeStubDefaultRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfAreaTypeStubDefaultRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfAreaTypeStubDefaultRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise - computed: true, optional: false, required: false
  private _advertise = new DataScmLogicalRouterVrfOspfAreaTypeStubDefaultRouteAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }

  // disable - computed: true, optional: false, required: false
  private _disable = new DataScmLogicalRouterVrfOspfAreaTypeStubDefaultRouteDisableOutputReference(this, "disable");
  public get disable() {
    return this._disable;
  }
}
export interface DataScmLogicalRouterVrfOspfAreaTypeStub {
}

export function dataScmLogicalRouterVrfOspfAreaTypeStubToTerraform(struct?: DataScmLogicalRouterVrfOspfAreaTypeStub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfAreaTypeStubToHclTerraform(struct?: DataScmLogicalRouterVrfOspfAreaTypeStub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfAreaTypeStubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfAreaTypeStub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfAreaTypeStub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // abr - computed: true, optional: false, required: false
  private _abr = new DataScmLogicalRouterVrfOspfAreaTypeStubAbrOutputReference(this, "abr");
  public get abr() {
    return this._abr;
  }

  // accept_summary - computed: true, optional: false, required: false
  public get acceptSummary() {
    return this.getBooleanAttribute('accept_summary');
  }

  // default_route - computed: true, optional: false, required: false
  private _defaultRoute = new DataScmLogicalRouterVrfOspfAreaTypeStubDefaultRouteOutputReference(this, "default_route");
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
export interface DataScmLogicalRouterVrfOspfAreaType {
}

export function dataScmLogicalRouterVrfOspfAreaTypeToTerraform(struct?: DataScmLogicalRouterVrfOspfAreaType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfAreaTypeToHclTerraform(struct?: DataScmLogicalRouterVrfOspfAreaType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfAreaTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfAreaType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfAreaType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // normal - computed: true, optional: false, required: false
  private _normal = new DataScmLogicalRouterVrfOspfAreaTypeNormalOutputReference(this, "normal");
  public get normal() {
    return this._normal;
  }

  // nssa - computed: true, optional: false, required: false
  private _nssa = new DataScmLogicalRouterVrfOspfAreaTypeNssaOutputReference(this, "nssa");
  public get nssa() {
    return this._nssa;
  }

  // stub - computed: true, optional: false, required: false
  private _stub = new DataScmLogicalRouterVrfOspfAreaTypeStubOutputReference(this, "stub");
  public get stub() {
    return this._stub;
  }
}
export interface DataScmLogicalRouterVrfOspfAreaVirtualLinkBfd {
}

export function dataScmLogicalRouterVrfOspfAreaVirtualLinkBfdToTerraform(struct?: DataScmLogicalRouterVrfOspfAreaVirtualLinkBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfAreaVirtualLinkBfdToHclTerraform(struct?: DataScmLogicalRouterVrfOspfAreaVirtualLinkBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfAreaVirtualLinkBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfAreaVirtualLinkBfd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfAreaVirtualLinkBfd | undefined) {
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
export interface DataScmLogicalRouterVrfOspfAreaVirtualLinkVrTiming {
}

export function dataScmLogicalRouterVrfOspfAreaVirtualLinkVrTimingToTerraform(struct?: DataScmLogicalRouterVrfOspfAreaVirtualLinkVrTiming): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfAreaVirtualLinkVrTimingToHclTerraform(struct?: DataScmLogicalRouterVrfOspfAreaVirtualLinkVrTiming): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfAreaVirtualLinkVrTimingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfAreaVirtualLinkVrTiming | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfAreaVirtualLinkVrTiming | undefined) {
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
export interface DataScmLogicalRouterVrfOspfAreaVirtualLink {
}

export function dataScmLogicalRouterVrfOspfAreaVirtualLinkToTerraform(struct?: DataScmLogicalRouterVrfOspfAreaVirtualLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfAreaVirtualLinkToHclTerraform(struct?: DataScmLogicalRouterVrfOspfAreaVirtualLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfAreaVirtualLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfOspfAreaVirtualLink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfAreaVirtualLink | undefined) {
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
  private _bfd = new DataScmLogicalRouterVrfOspfAreaVirtualLinkBfdOutputReference(this, "bfd");
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
  private _vrTiming = new DataScmLogicalRouterVrfOspfAreaVirtualLinkVrTimingOutputReference(this, "vr_timing");
  public get vrTiming() {
    return this._vrTiming;
  }
}

export class DataScmLogicalRouterVrfOspfAreaVirtualLinkList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfOspfAreaVirtualLinkOutputReference {
    return new DataScmLogicalRouterVrfOspfAreaVirtualLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfOspfAreaVrRangeAdvertise {
}

export function dataScmLogicalRouterVrfOspfAreaVrRangeAdvertiseToTerraform(struct?: DataScmLogicalRouterVrfOspfAreaVrRangeAdvertise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfAreaVrRangeAdvertiseToHclTerraform(struct?: DataScmLogicalRouterVrfOspfAreaVrRangeAdvertise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfAreaVrRangeAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfAreaVrRangeAdvertise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfAreaVrRangeAdvertise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfOspfAreaVrRangeSuppress {
}

export function dataScmLogicalRouterVrfOspfAreaVrRangeSuppressToTerraform(struct?: DataScmLogicalRouterVrfOspfAreaVrRangeSuppress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfAreaVrRangeSuppressToHclTerraform(struct?: DataScmLogicalRouterVrfOspfAreaVrRangeSuppress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfAreaVrRangeSuppressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfAreaVrRangeSuppress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfAreaVrRangeSuppress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfOspfAreaVrRange {
}

export function dataScmLogicalRouterVrfOspfAreaVrRangeToTerraform(struct?: DataScmLogicalRouterVrfOspfAreaVrRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfAreaVrRangeToHclTerraform(struct?: DataScmLogicalRouterVrfOspfAreaVrRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfAreaVrRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfOspfAreaVrRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfAreaVrRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise - computed: true, optional: false, required: false
  private _advertise = new DataScmLogicalRouterVrfOspfAreaVrRangeAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // suppress - computed: true, optional: false, required: false
  private _suppress = new DataScmLogicalRouterVrfOspfAreaVrRangeSuppressOutputReference(this, "suppress");
  public get suppress() {
    return this._suppress;
  }
}

export class DataScmLogicalRouterVrfOspfAreaVrRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfOspfAreaVrRangeOutputReference {
    return new DataScmLogicalRouterVrfOspfAreaVrRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfOspfArea {
}

export function dataScmLogicalRouterVrfOspfAreaToTerraform(struct?: DataScmLogicalRouterVrfOspfArea): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfAreaToHclTerraform(struct?: DataScmLogicalRouterVrfOspfArea): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfAreaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfOspfArea | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfArea | undefined) {
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
  private _interface = new DataScmLogicalRouterVrfOspfAreaInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // range - computed: true, optional: false, required: false
  private _range = new DataScmLogicalRouterVrfOspfAreaRangeList(this, "range", false);
  public get range() {
    return this._range;
  }

  // type - computed: true, optional: false, required: false
  private _type = new DataScmLogicalRouterVrfOspfAreaTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }

  // virtual_link - computed: true, optional: false, required: false
  private _virtualLink = new DataScmLogicalRouterVrfOspfAreaVirtualLinkList(this, "virtual_link", false);
  public get virtualLink() {
    return this._virtualLink;
  }

  // vr_range - computed: true, optional: false, required: false
  private _vrRange = new DataScmLogicalRouterVrfOspfAreaVrRangeList(this, "vr_range", false);
  public get vrRange() {
    return this._vrRange;
  }
}

export class DataScmLogicalRouterVrfOspfAreaList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfOspfAreaOutputReference {
    return new DataScmLogicalRouterVrfOspfAreaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfOspfAuthProfileMd5 {
}

export function dataScmLogicalRouterVrfOspfAuthProfileMd5ToTerraform(struct?: DataScmLogicalRouterVrfOspfAuthProfileMd5): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfAuthProfileMd5ToHclTerraform(struct?: DataScmLogicalRouterVrfOspfAuthProfileMd5): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfAuthProfileMd5OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfOspfAuthProfileMd5 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfAuthProfileMd5 | undefined) {
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

export class DataScmLogicalRouterVrfOspfAuthProfileMd5List extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfOspfAuthProfileMd5OutputReference {
    return new DataScmLogicalRouterVrfOspfAuthProfileMd5OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfOspfAuthProfile {
}

export function dataScmLogicalRouterVrfOspfAuthProfileToTerraform(struct?: DataScmLogicalRouterVrfOspfAuthProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfAuthProfileToHclTerraform(struct?: DataScmLogicalRouterVrfOspfAuthProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfAuthProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfOspfAuthProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfAuthProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // md5 - computed: true, optional: false, required: false
  private _md5 = new DataScmLogicalRouterVrfOspfAuthProfileMd5List(this, "md5", false);
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

export class DataScmLogicalRouterVrfOspfAuthProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfOspfAuthProfileOutputReference {
    return new DataScmLogicalRouterVrfOspfAuthProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfOspfExportRules {
}

export function dataScmLogicalRouterVrfOspfExportRulesToTerraform(struct?: DataScmLogicalRouterVrfOspfExportRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfExportRulesToHclTerraform(struct?: DataScmLogicalRouterVrfOspfExportRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfExportRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfOspfExportRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfExportRules | undefined) {
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

export class DataScmLogicalRouterVrfOspfExportRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfOspfExportRulesOutputReference {
    return new DataScmLogicalRouterVrfOspfExportRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfOspfFloodPreventionHello {
}

export function dataScmLogicalRouterVrfOspfFloodPreventionHelloToTerraform(struct?: DataScmLogicalRouterVrfOspfFloodPreventionHello): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfFloodPreventionHelloToHclTerraform(struct?: DataScmLogicalRouterVrfOspfFloodPreventionHello): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfFloodPreventionHelloOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfFloodPreventionHello | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfFloodPreventionHello | undefined) {
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
export interface DataScmLogicalRouterVrfOspfFloodPreventionLsa {
}

export function dataScmLogicalRouterVrfOspfFloodPreventionLsaToTerraform(struct?: DataScmLogicalRouterVrfOspfFloodPreventionLsa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfFloodPreventionLsaToHclTerraform(struct?: DataScmLogicalRouterVrfOspfFloodPreventionLsa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfFloodPreventionLsaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfFloodPreventionLsa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfFloodPreventionLsa | undefined) {
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
export interface DataScmLogicalRouterVrfOspfFloodPrevention {
}

export function dataScmLogicalRouterVrfOspfFloodPreventionToTerraform(struct?: DataScmLogicalRouterVrfOspfFloodPrevention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfFloodPreventionToHclTerraform(struct?: DataScmLogicalRouterVrfOspfFloodPrevention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfFloodPreventionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfFloodPrevention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfFloodPrevention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hello - computed: true, optional: false, required: false
  private _hello = new DataScmLogicalRouterVrfOspfFloodPreventionHelloOutputReference(this, "hello");
  public get hello() {
    return this._hello;
  }

  // lsa - computed: true, optional: false, required: false
  private _lsa = new DataScmLogicalRouterVrfOspfFloodPreventionLsaOutputReference(this, "lsa");
  public get lsa() {
    return this._lsa;
  }
}
export interface DataScmLogicalRouterVrfOspfGlobalBfd {
}

export function dataScmLogicalRouterVrfOspfGlobalBfdToTerraform(struct?: DataScmLogicalRouterVrfOspfGlobalBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfGlobalBfdToHclTerraform(struct?: DataScmLogicalRouterVrfOspfGlobalBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfGlobalBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfGlobalBfd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfGlobalBfd | undefined) {
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
export interface DataScmLogicalRouterVrfOspfGracefulRestart {
}

export function dataScmLogicalRouterVrfOspfGracefulRestartToTerraform(struct?: DataScmLogicalRouterVrfOspfGracefulRestart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfGracefulRestartToHclTerraform(struct?: DataScmLogicalRouterVrfOspfGracefulRestart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfGracefulRestartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfGracefulRestart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfGracefulRestart | undefined) {
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
export interface DataScmLogicalRouterVrfOspfVrTimers {
}

export function dataScmLogicalRouterVrfOspfVrTimersToTerraform(struct?: DataScmLogicalRouterVrfOspfVrTimers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfVrTimersToHclTerraform(struct?: DataScmLogicalRouterVrfOspfVrTimers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfVrTimersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfVrTimers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfVrTimers | undefined) {
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
export interface DataScmLogicalRouterVrfOspf {
}

export function dataScmLogicalRouterVrfOspfToTerraform(struct?: DataScmLogicalRouterVrfOspf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfToHclTerraform(struct?: DataScmLogicalRouterVrfOspf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspf | undefined) {
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
  private _area = new DataScmLogicalRouterVrfOspfAreaList(this, "area", false);
  public get area() {
    return this._area;
  }

  // auth_profile - computed: true, optional: false, required: false
  private _authProfile = new DataScmLogicalRouterVrfOspfAuthProfileList(this, "auth_profile", false);
  public get authProfile() {
    return this._authProfile;
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // export_rules - computed: true, optional: false, required: false
  private _exportRules = new DataScmLogicalRouterVrfOspfExportRulesList(this, "export_rules", false);
  public get exportRules() {
    return this._exportRules;
  }

  // flood_prevention - computed: true, optional: false, required: false
  private _floodPrevention = new DataScmLogicalRouterVrfOspfFloodPreventionOutputReference(this, "flood_prevention");
  public get floodPrevention() {
    return this._floodPrevention;
  }

  // global_bfd - computed: true, optional: false, required: false
  private _globalBfd = new DataScmLogicalRouterVrfOspfGlobalBfdOutputReference(this, "global_bfd");
  public get globalBfd() {
    return this._globalBfd;
  }

  // global_if_timer - computed: true, optional: false, required: false
  public get globalIfTimer() {
    return this.getStringAttribute('global_if_timer');
  }

  // graceful_restart - computed: true, optional: false, required: false
  private _gracefulRestart = new DataScmLogicalRouterVrfOspfGracefulRestartOutputReference(this, "graceful_restart");
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
  private _vrTimers = new DataScmLogicalRouterVrfOspfVrTimersOutputReference(this, "vr_timers");
  public get vrTimers() {
    return this._vrTimers;
  }
}
export interface DataScmLogicalRouterVrfOspfv3AreaInterfaceBfd {
}

export function dataScmLogicalRouterVrfOspfv3AreaInterfaceBfdToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaInterfaceBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AreaInterfaceBfdToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaInterfaceBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AreaInterfaceBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AreaInterfaceBfd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AreaInterfaceBfd | undefined) {
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
export interface DataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcast {
}

export function dataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcastToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcastToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcast | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcast | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighbor {
}

export function dataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighbor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighbor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighbor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighbor | undefined) {
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

export class DataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborOutputReference {
    return new DataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2Mp {
}

export function dataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2Mp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2Mp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2Mp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2Mp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // neighbor - computed: true, optional: false, required: false
  private _neighbor = new DataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborList(this, "neighbor", false);
  public get neighbor() {
    return this._neighbor;
  }
}
export interface DataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2P {
}

export function dataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2PToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2P): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2PToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2P): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2POutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2P | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2P | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfOspfv3AreaInterfaceLinkType {
}

export function dataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaInterfaceLinkType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaInterfaceLinkType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AreaInterfaceLinkType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AreaInterfaceLinkType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // broadcast - computed: true, optional: false, required: false
  private _broadcast = new DataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcastOutputReference(this, "broadcast");
  public get broadcast() {
    return this._broadcast;
  }

  // p2mp - computed: true, optional: false, required: false
  private _p2Mp = new DataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpOutputReference(this, "p2mp");
  public get p2Mp() {
    return this._p2Mp;
  }

  // p2p - computed: true, optional: false, required: false
  private _p2P = new DataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2POutputReference(this, "p2p");
  public get p2P() {
    return this._p2P;
  }
}
export interface DataScmLogicalRouterVrfOspfv3AreaInterfaceNeighbor {
}

export function dataScmLogicalRouterVrfOspfv3AreaInterfaceNeighborToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaInterfaceNeighbor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AreaInterfaceNeighborToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaInterfaceNeighbor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AreaInterfaceNeighborOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AreaInterfaceNeighbor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AreaInterfaceNeighbor | undefined) {
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

export class DataScmLogicalRouterVrfOspfv3AreaInterfaceNeighborList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfOspfv3AreaInterfaceNeighborOutputReference {
    return new DataScmLogicalRouterVrfOspfv3AreaInterfaceNeighborOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfOspfv3AreaInterfaceVrTiming {
}

export function dataScmLogicalRouterVrfOspfv3AreaInterfaceVrTimingToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaInterfaceVrTiming): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AreaInterfaceVrTimingToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaInterfaceVrTiming): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AreaInterfaceVrTimingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AreaInterfaceVrTiming | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AreaInterfaceVrTiming | undefined) {
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
export interface DataScmLogicalRouterVrfOspfv3AreaInterface {
}

export function dataScmLogicalRouterVrfOspfv3AreaInterfaceToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AreaInterfaceToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AreaInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AreaInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AreaInterface | undefined) {
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
  private _bfd = new DataScmLogicalRouterVrfOspfv3AreaInterfaceBfdOutputReference(this, "bfd");
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
  private _linkType = new DataScmLogicalRouterVrfOspfv3AreaInterfaceLinkTypeOutputReference(this, "link_type");
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
  private _neighbor = new DataScmLogicalRouterVrfOspfv3AreaInterfaceNeighborList(this, "neighbor", false);
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
  private _vrTiming = new DataScmLogicalRouterVrfOspfv3AreaInterfaceVrTimingOutputReference(this, "vr_timing");
  public get vrTiming() {
    return this._vrTiming;
  }
}

export class DataScmLogicalRouterVrfOspfv3AreaInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfOspfv3AreaInterfaceOutputReference {
    return new DataScmLogicalRouterVrfOspfv3AreaInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfOspfv3AreaRange {
}

export function dataScmLogicalRouterVrfOspfv3AreaRangeToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AreaRangeToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AreaRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AreaRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AreaRange | undefined) {
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

export class DataScmLogicalRouterVrfOspfv3AreaRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfOspfv3AreaRangeOutputReference {
    return new DataScmLogicalRouterVrfOspfv3AreaRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfOspfv3AreaTypeNormalAbr {
}

export function dataScmLogicalRouterVrfOspfv3AreaTypeNormalAbrToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaTypeNormalAbr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AreaTypeNormalAbrToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaTypeNormalAbr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AreaTypeNormalAbrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AreaTypeNormalAbr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AreaTypeNormalAbr | undefined) {
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
export interface DataScmLogicalRouterVrfOspfv3AreaTypeNormal {
}

export function dataScmLogicalRouterVrfOspfv3AreaTypeNormalToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaTypeNormal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AreaTypeNormalToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaTypeNormal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AreaTypeNormalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AreaTypeNormal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AreaTypeNormal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // abr - computed: true, optional: false, required: false
  private _abr = new DataScmLogicalRouterVrfOspfv3AreaTypeNormalAbrOutputReference(this, "abr");
  public get abr() {
    return this._abr;
  }
}
export interface DataScmLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeAdvertise {
}

export function dataScmLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeAdvertiseToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeAdvertise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeAdvertiseToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeAdvertise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeAdvertise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeAdvertise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeSuppress {
}

export function dataScmLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeSuppressToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeSuppress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeSuppressToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeSuppress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeSuppressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeSuppress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeSuppress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRange {
}

export function dataScmLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise - computed: true, optional: false, required: false
  private _advertise = new DataScmLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeAdvertiseOutputReference(this, "advertise");
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
  private _suppress = new DataScmLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeSuppressOutputReference(this, "suppress");
  public get suppress() {
    return this._suppress;
  }
}

export class DataScmLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeOutputReference {
    return new DataScmLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfOspfv3AreaTypeNssaAbr {
}

export function dataScmLogicalRouterVrfOspfv3AreaTypeNssaAbrToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaTypeNssaAbr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AreaTypeNssaAbrToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaTypeNssaAbr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AreaTypeNssaAbrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AreaTypeNssaAbr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AreaTypeNssaAbr | undefined) {
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
  private _nssaExtRange = new DataScmLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeList(this, "nssa_ext_range", false);
  public get nssaExtRange() {
    return this._nssaExtRange;
  }

  // outbound_filter_list - computed: true, optional: false, required: false
  public get outboundFilterList() {
    return this.getStringAttribute('outbound_filter_list');
  }
}
export interface DataScmLogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginate {
}

export function dataScmLogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginateToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginateToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginate | undefined) {
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
export interface DataScmLogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteAdvertise {
}

export function dataScmLogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteAdvertiseToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteAdvertise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteAdvertiseToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteAdvertise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteAdvertise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteAdvertise | undefined) {
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
export interface DataScmLogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteDisable {
}

export function dataScmLogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteDisableToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteDisable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteDisableToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteDisable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteDisableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteDisable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteDisable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfOspfv3AreaTypeNssaDefaultRoute {
}

export function dataScmLogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaTypeNssaDefaultRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaTypeNssaDefaultRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AreaTypeNssaDefaultRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AreaTypeNssaDefaultRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise - computed: true, optional: false, required: false
  private _advertise = new DataScmLogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }

  // disable - computed: true, optional: false, required: false
  private _disable = new DataScmLogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteDisableOutputReference(this, "disable");
  public get disable() {
    return this._disable;
  }
}
export interface DataScmLogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeAdvertise {
}

export function dataScmLogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeAdvertiseToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeAdvertise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeAdvertiseToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeAdvertise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeAdvertise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeAdvertise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeSuppress {
}

export function dataScmLogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeSuppressToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeSuppress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeSuppressToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeSuppress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeSuppressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeSuppress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeSuppress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfOspfv3AreaTypeNssaNssaExtRange {
}

export function dataScmLogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaTypeNssaNssaExtRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaTypeNssaNssaExtRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AreaTypeNssaNssaExtRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AreaTypeNssaNssaExtRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise - computed: true, optional: false, required: false
  private _advertise = new DataScmLogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeAdvertiseOutputReference(this, "advertise");
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
  private _suppress = new DataScmLogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeSuppressOutputReference(this, "suppress");
  public get suppress() {
    return this._suppress;
  }
}

export class DataScmLogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeOutputReference {
    return new DataScmLogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfOspfv3AreaTypeNssa {
}

export function dataScmLogicalRouterVrfOspfv3AreaTypeNssaToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaTypeNssa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AreaTypeNssaToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaTypeNssa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AreaTypeNssaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AreaTypeNssa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AreaTypeNssa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // abr - computed: true, optional: false, required: false
  private _abr = new DataScmLogicalRouterVrfOspfv3AreaTypeNssaAbrOutputReference(this, "abr");
  public get abr() {
    return this._abr;
  }

  // accept_summary - computed: true, optional: false, required: false
  public get acceptSummary() {
    return this.getBooleanAttribute('accept_summary');
  }

  // default_information_originate - computed: true, optional: false, required: false
  private _defaultInformationOriginate = new DataScmLogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginateOutputReference(this, "default_information_originate");
  public get defaultInformationOriginate() {
    return this._defaultInformationOriginate;
  }

  // default_route - computed: true, optional: false, required: false
  private _defaultRoute = new DataScmLogicalRouterVrfOspfv3AreaTypeNssaDefaultRouteOutputReference(this, "default_route");
  public get defaultRoute() {
    return this._defaultRoute;
  }

  // no_summary - computed: true, optional: false, required: false
  public get noSummary() {
    return this.getBooleanAttribute('no_summary');
  }

  // nssa_ext_range - computed: true, optional: false, required: false
  private _nssaExtRange = new DataScmLogicalRouterVrfOspfv3AreaTypeNssaNssaExtRangeList(this, "nssa_ext_range", false);
  public get nssaExtRange() {
    return this._nssaExtRange;
  }
}
export interface DataScmLogicalRouterVrfOspfv3AreaTypeStubAbr {
}

export function dataScmLogicalRouterVrfOspfv3AreaTypeStubAbrToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaTypeStubAbr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AreaTypeStubAbrToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaTypeStubAbr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AreaTypeStubAbrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AreaTypeStubAbr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AreaTypeStubAbr | undefined) {
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
export interface DataScmLogicalRouterVrfOspfv3AreaTypeStubDefaultRouteAdvertise {
}

export function dataScmLogicalRouterVrfOspfv3AreaTypeStubDefaultRouteAdvertiseToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaTypeStubDefaultRouteAdvertise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AreaTypeStubDefaultRouteAdvertiseToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaTypeStubDefaultRouteAdvertise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AreaTypeStubDefaultRouteAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AreaTypeStubDefaultRouteAdvertise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AreaTypeStubDefaultRouteAdvertise | undefined) {
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
export interface DataScmLogicalRouterVrfOspfv3AreaTypeStubDefaultRouteDisable {
}

export function dataScmLogicalRouterVrfOspfv3AreaTypeStubDefaultRouteDisableToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaTypeStubDefaultRouteDisable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AreaTypeStubDefaultRouteDisableToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaTypeStubDefaultRouteDisable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AreaTypeStubDefaultRouteDisableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AreaTypeStubDefaultRouteDisable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AreaTypeStubDefaultRouteDisable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfOspfv3AreaTypeStubDefaultRoute {
}

export function dataScmLogicalRouterVrfOspfv3AreaTypeStubDefaultRouteToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaTypeStubDefaultRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AreaTypeStubDefaultRouteToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaTypeStubDefaultRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AreaTypeStubDefaultRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AreaTypeStubDefaultRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AreaTypeStubDefaultRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise - computed: true, optional: false, required: false
  private _advertise = new DataScmLogicalRouterVrfOspfv3AreaTypeStubDefaultRouteAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }

  // disable - computed: true, optional: false, required: false
  private _disable = new DataScmLogicalRouterVrfOspfv3AreaTypeStubDefaultRouteDisableOutputReference(this, "disable");
  public get disable() {
    return this._disable;
  }
}
export interface DataScmLogicalRouterVrfOspfv3AreaTypeStub {
}

export function dataScmLogicalRouterVrfOspfv3AreaTypeStubToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaTypeStub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AreaTypeStubToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaTypeStub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AreaTypeStubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AreaTypeStub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AreaTypeStub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // abr - computed: true, optional: false, required: false
  private _abr = new DataScmLogicalRouterVrfOspfv3AreaTypeStubAbrOutputReference(this, "abr");
  public get abr() {
    return this._abr;
  }

  // accept_summary - computed: true, optional: false, required: false
  public get acceptSummary() {
    return this.getBooleanAttribute('accept_summary');
  }

  // default_route - computed: true, optional: false, required: false
  private _defaultRoute = new DataScmLogicalRouterVrfOspfv3AreaTypeStubDefaultRouteOutputReference(this, "default_route");
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
export interface DataScmLogicalRouterVrfOspfv3AreaType {
}

export function dataScmLogicalRouterVrfOspfv3AreaTypeToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AreaTypeToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AreaTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AreaType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AreaType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // normal - computed: true, optional: false, required: false
  private _normal = new DataScmLogicalRouterVrfOspfv3AreaTypeNormalOutputReference(this, "normal");
  public get normal() {
    return this._normal;
  }

  // nssa - computed: true, optional: false, required: false
  private _nssa = new DataScmLogicalRouterVrfOspfv3AreaTypeNssaOutputReference(this, "nssa");
  public get nssa() {
    return this._nssa;
  }

  // stub - computed: true, optional: false, required: false
  private _stub = new DataScmLogicalRouterVrfOspfv3AreaTypeStubOutputReference(this, "stub");
  public get stub() {
    return this._stub;
  }
}
export interface DataScmLogicalRouterVrfOspfv3AreaVirtualLinkBfd {
}

export function dataScmLogicalRouterVrfOspfv3AreaVirtualLinkBfdToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaVirtualLinkBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AreaVirtualLinkBfdToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaVirtualLinkBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AreaVirtualLinkBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AreaVirtualLinkBfd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AreaVirtualLinkBfd | undefined) {
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
export interface DataScmLogicalRouterVrfOspfv3AreaVirtualLinkVrTiming {
}

export function dataScmLogicalRouterVrfOspfv3AreaVirtualLinkVrTimingToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaVirtualLinkVrTiming): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AreaVirtualLinkVrTimingToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaVirtualLinkVrTiming): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AreaVirtualLinkVrTimingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AreaVirtualLinkVrTiming | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AreaVirtualLinkVrTiming | undefined) {
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
export interface DataScmLogicalRouterVrfOspfv3AreaVirtualLink {
}

export function dataScmLogicalRouterVrfOspfv3AreaVirtualLinkToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaVirtualLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AreaVirtualLinkToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaVirtualLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AreaVirtualLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AreaVirtualLink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AreaVirtualLink | undefined) {
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
  private _bfd = new DataScmLogicalRouterVrfOspfv3AreaVirtualLinkBfdOutputReference(this, "bfd");
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
  private _vrTiming = new DataScmLogicalRouterVrfOspfv3AreaVirtualLinkVrTimingOutputReference(this, "vr_timing");
  public get vrTiming() {
    return this._vrTiming;
  }
}

export class DataScmLogicalRouterVrfOspfv3AreaVirtualLinkList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfOspfv3AreaVirtualLinkOutputReference {
    return new DataScmLogicalRouterVrfOspfv3AreaVirtualLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfOspfv3AreaVrRangeAdvertise {
}

export function dataScmLogicalRouterVrfOspfv3AreaVrRangeAdvertiseToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaVrRangeAdvertise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AreaVrRangeAdvertiseToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaVrRangeAdvertise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AreaVrRangeAdvertiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AreaVrRangeAdvertise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AreaVrRangeAdvertise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfOspfv3AreaVrRangeSuppress {
}

export function dataScmLogicalRouterVrfOspfv3AreaVrRangeSuppressToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaVrRangeSuppress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AreaVrRangeSuppressToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaVrRangeSuppress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AreaVrRangeSuppressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AreaVrRangeSuppress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AreaVrRangeSuppress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfOspfv3AreaVrRange {
}

export function dataScmLogicalRouterVrfOspfv3AreaVrRangeToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaVrRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AreaVrRangeToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AreaVrRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AreaVrRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AreaVrRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AreaVrRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise - computed: true, optional: false, required: false
  private _advertise = new DataScmLogicalRouterVrfOspfv3AreaVrRangeAdvertiseOutputReference(this, "advertise");
  public get advertise() {
    return this._advertise;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // suppress - computed: true, optional: false, required: false
  private _suppress = new DataScmLogicalRouterVrfOspfv3AreaVrRangeSuppressOutputReference(this, "suppress");
  public get suppress() {
    return this._suppress;
  }
}

export class DataScmLogicalRouterVrfOspfv3AreaVrRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfOspfv3AreaVrRangeOutputReference {
    return new DataScmLogicalRouterVrfOspfv3AreaVrRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfOspfv3Area {
}

export function dataScmLogicalRouterVrfOspfv3AreaToTerraform(struct?: DataScmLogicalRouterVrfOspfv3Area): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AreaToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3Area): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AreaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfOspfv3Area | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3Area | undefined) {
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
  private _interface = new DataScmLogicalRouterVrfOspfv3AreaInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // range - computed: true, optional: false, required: false
  private _range = new DataScmLogicalRouterVrfOspfv3AreaRangeList(this, "range", false);
  public get range() {
    return this._range;
  }

  // type - computed: true, optional: false, required: false
  private _type = new DataScmLogicalRouterVrfOspfv3AreaTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }

  // virtual_link - computed: true, optional: false, required: false
  private _virtualLink = new DataScmLogicalRouterVrfOspfv3AreaVirtualLinkList(this, "virtual_link", false);
  public get virtualLink() {
    return this._virtualLink;
  }

  // vr_range - computed: true, optional: false, required: false
  private _vrRange = new DataScmLogicalRouterVrfOspfv3AreaVrRangeList(this, "vr_range", false);
  public get vrRange() {
    return this._vrRange;
  }
}

export class DataScmLogicalRouterVrfOspfv3AreaList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfOspfv3AreaOutputReference {
    return new DataScmLogicalRouterVrfOspfv3AreaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfOspfv3AuthProfileAhMd5 {
}

export function dataScmLogicalRouterVrfOspfv3AuthProfileAhMd5ToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AuthProfileAhMd5): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AuthProfileAhMd5ToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AuthProfileAhMd5): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AuthProfileAhMd5OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AuthProfileAhMd5 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AuthProfileAhMd5 | undefined) {
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
export interface DataScmLogicalRouterVrfOspfv3AuthProfileAhSha1 {
}

export function dataScmLogicalRouterVrfOspfv3AuthProfileAhSha1ToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AuthProfileAhSha1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AuthProfileAhSha1ToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AuthProfileAhSha1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AuthProfileAhSha1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AuthProfileAhSha1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AuthProfileAhSha1 | undefined) {
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
export interface DataScmLogicalRouterVrfOspfv3AuthProfileAhSha256 {
}

export function dataScmLogicalRouterVrfOspfv3AuthProfileAhSha256ToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AuthProfileAhSha256): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AuthProfileAhSha256ToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AuthProfileAhSha256): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AuthProfileAhSha256OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AuthProfileAhSha256 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AuthProfileAhSha256 | undefined) {
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
export interface DataScmLogicalRouterVrfOspfv3AuthProfileAhSha384 {
}

export function dataScmLogicalRouterVrfOspfv3AuthProfileAhSha384ToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AuthProfileAhSha384): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AuthProfileAhSha384ToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AuthProfileAhSha384): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AuthProfileAhSha384OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AuthProfileAhSha384 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AuthProfileAhSha384 | undefined) {
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
export interface DataScmLogicalRouterVrfOspfv3AuthProfileAhSha512 {
}

export function dataScmLogicalRouterVrfOspfv3AuthProfileAhSha512ToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AuthProfileAhSha512): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AuthProfileAhSha512ToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AuthProfileAhSha512): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AuthProfileAhSha512OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AuthProfileAhSha512 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AuthProfileAhSha512 | undefined) {
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
export interface DataScmLogicalRouterVrfOspfv3AuthProfileAh {
}

export function dataScmLogicalRouterVrfOspfv3AuthProfileAhToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AuthProfileAh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AuthProfileAhToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AuthProfileAh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AuthProfileAhOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AuthProfileAh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AuthProfileAh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // md5 - computed: true, optional: false, required: false
  private _md5 = new DataScmLogicalRouterVrfOspfv3AuthProfileAhMd5OutputReference(this, "md5");
  public get md5() {
    return this._md5;
  }

  // sha1 - computed: true, optional: false, required: false
  private _sha1 = new DataScmLogicalRouterVrfOspfv3AuthProfileAhSha1OutputReference(this, "sha1");
  public get sha1() {
    return this._sha1;
  }

  // sha256 - computed: true, optional: false, required: false
  private _sha256 = new DataScmLogicalRouterVrfOspfv3AuthProfileAhSha256OutputReference(this, "sha256");
  public get sha256() {
    return this._sha256;
  }

  // sha384 - computed: true, optional: false, required: false
  private _sha384 = new DataScmLogicalRouterVrfOspfv3AuthProfileAhSha384OutputReference(this, "sha384");
  public get sha384() {
    return this._sha384;
  }

  // sha512 - computed: true, optional: false, required: false
  private _sha512 = new DataScmLogicalRouterVrfOspfv3AuthProfileAhSha512OutputReference(this, "sha512");
  public get sha512() {
    return this._sha512;
  }
}
export interface DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationMd5 {
}

export function dataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationMd5ToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationMd5): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationMd5ToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationMd5): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationMd5OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationMd5 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationMd5 | undefined) {
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
export interface DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationNone {
}

export function dataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationNoneToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationNoneToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationNone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationNone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha1 {
}

export function dataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha1ToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha1ToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha1 | undefined) {
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
export interface DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha256 {
}

export function dataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha256ToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha256): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha256ToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha256): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha256OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha256 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha256 | undefined) {
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
export interface DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha384 {
}

export function dataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha384ToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha384): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha384ToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha384): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha384OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha384 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha384 | undefined) {
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
export interface DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha512 {
}

export function dataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha512ToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha512): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha512ToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha512): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha512OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha512 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha512 | undefined) {
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
export interface DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthentication {
}

export function dataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // md5 - computed: true, optional: false, required: false
  private _md5 = new DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationMd5OutputReference(this, "md5");
  public get md5() {
    return this._md5;
  }

  // none - computed: true, optional: false, required: false
  private _none = new DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }

  // sha1 - computed: true, optional: false, required: false
  private _sha1 = new DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha1OutputReference(this, "sha1");
  public get sha1() {
    return this._sha1;
  }

  // sha256 - computed: true, optional: false, required: false
  private _sha256 = new DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha256OutputReference(this, "sha256");
  public get sha256() {
    return this._sha256;
  }

  // sha384 - computed: true, optional: false, required: false
  private _sha384 = new DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha384OutputReference(this, "sha384");
  public get sha384() {
    return this._sha384;
  }

  // sha512 - computed: true, optional: false, required: false
  private _sha512 = new DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationSha512OutputReference(this, "sha512");
  public get sha512() {
    return this._sha512;
  }
}
export interface DataScmLogicalRouterVrfOspfv3AuthProfileEspEncryption {
}

export function dataScmLogicalRouterVrfOspfv3AuthProfileEspEncryptionToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AuthProfileEspEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AuthProfileEspEncryptionToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AuthProfileEspEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AuthProfileEspEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AuthProfileEspEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AuthProfileEspEncryption | undefined) {
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
export interface DataScmLogicalRouterVrfOspfv3AuthProfileEsp {
}

export function dataScmLogicalRouterVrfOspfv3AuthProfileEspToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AuthProfileEsp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AuthProfileEspToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AuthProfileEsp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AuthProfileEspOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AuthProfileEsp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AuthProfileEsp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication - computed: true, optional: false, required: false
  private _authentication = new DataScmLogicalRouterVrfOspfv3AuthProfileEspAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }

  // encryption - computed: true, optional: false, required: false
  private _encryption = new DataScmLogicalRouterVrfOspfv3AuthProfileEspEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
}
export interface DataScmLogicalRouterVrfOspfv3AuthProfile {
}

export function dataScmLogicalRouterVrfOspfv3AuthProfileToTerraform(struct?: DataScmLogicalRouterVrfOspfv3AuthProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3AuthProfileToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3AuthProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3AuthProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfOspfv3AuthProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3AuthProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ah - computed: true, optional: false, required: false
  private _ah = new DataScmLogicalRouterVrfOspfv3AuthProfileAhOutputReference(this, "ah");
  public get ah() {
    return this._ah;
  }

  // esp - computed: true, optional: false, required: false
  private _esp = new DataScmLogicalRouterVrfOspfv3AuthProfileEspOutputReference(this, "esp");
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

export class DataScmLogicalRouterVrfOspfv3AuthProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfOspfv3AuthProfileOutputReference {
    return new DataScmLogicalRouterVrfOspfv3AuthProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfOspfv3ExportRules {
}

export function dataScmLogicalRouterVrfOspfv3ExportRulesToTerraform(struct?: DataScmLogicalRouterVrfOspfv3ExportRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3ExportRulesToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3ExportRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3ExportRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfOspfv3ExportRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3ExportRules | undefined) {
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

export class DataScmLogicalRouterVrfOspfv3ExportRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfOspfv3ExportRulesOutputReference {
    return new DataScmLogicalRouterVrfOspfv3ExportRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfOspfv3GlobalBfd {
}

export function dataScmLogicalRouterVrfOspfv3GlobalBfdToTerraform(struct?: DataScmLogicalRouterVrfOspfv3GlobalBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3GlobalBfdToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3GlobalBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3GlobalBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3GlobalBfd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3GlobalBfd | undefined) {
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
export interface DataScmLogicalRouterVrfOspfv3GracefulRestart {
}

export function dataScmLogicalRouterVrfOspfv3GracefulRestartToTerraform(struct?: DataScmLogicalRouterVrfOspfv3GracefulRestart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3GracefulRestartToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3GracefulRestart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3GracefulRestartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3GracefulRestart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3GracefulRestart | undefined) {
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
export interface DataScmLogicalRouterVrfOspfv3VrTimers {
}

export function dataScmLogicalRouterVrfOspfv3VrTimersToTerraform(struct?: DataScmLogicalRouterVrfOspfv3VrTimers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3VrTimersToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3VrTimers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3VrTimersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3VrTimers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3VrTimers | undefined) {
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
export interface DataScmLogicalRouterVrfOspfv3 {
}

export function dataScmLogicalRouterVrfOspfv3ToTerraform(struct?: DataScmLogicalRouterVrfOspfv3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfOspfv3ToHclTerraform(struct?: DataScmLogicalRouterVrfOspfv3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOspfv3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfOspfv3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfOspfv3 | undefined) {
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
  private _area = new DataScmLogicalRouterVrfOspfv3AreaList(this, "area", false);
  public get area() {
    return this._area;
  }

  // auth_profile - computed: true, optional: false, required: false
  private _authProfile = new DataScmLogicalRouterVrfOspfv3AuthProfileList(this, "auth_profile", false);
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
  private _exportRules = new DataScmLogicalRouterVrfOspfv3ExportRulesList(this, "export_rules", false);
  public get exportRules() {
    return this._exportRules;
  }

  // global_bfd - computed: true, optional: false, required: false
  private _globalBfd = new DataScmLogicalRouterVrfOspfv3GlobalBfdOutputReference(this, "global_bfd");
  public get globalBfd() {
    return this._globalBfd;
  }

  // global_if_timer - computed: true, optional: false, required: false
  public get globalIfTimer() {
    return this.getStringAttribute('global_if_timer');
  }

  // graceful_restart - computed: true, optional: false, required: false
  private _gracefulRestart = new DataScmLogicalRouterVrfOspfv3GracefulRestartOutputReference(this, "graceful_restart");
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
  private _vrTimers = new DataScmLogicalRouterVrfOspfv3VrTimersOutputReference(this, "vr_timers");
  public get vrTimers() {
    return this._vrTimers;
  }
}
export interface DataScmLogicalRouterVrfRibFilterIpv4Bgp {
}

export function dataScmLogicalRouterVrfRibFilterIpv4BgpToTerraform(struct?: DataScmLogicalRouterVrfRibFilterIpv4Bgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRibFilterIpv4BgpToHclTerraform(struct?: DataScmLogicalRouterVrfRibFilterIpv4Bgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRibFilterIpv4BgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfRibFilterIpv4Bgp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRibFilterIpv4Bgp | undefined) {
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
export interface DataScmLogicalRouterVrfRibFilterIpv4Ospf {
}

export function dataScmLogicalRouterVrfRibFilterIpv4OspfToTerraform(struct?: DataScmLogicalRouterVrfRibFilterIpv4Ospf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRibFilterIpv4OspfToHclTerraform(struct?: DataScmLogicalRouterVrfRibFilterIpv4Ospf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRibFilterIpv4OspfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfRibFilterIpv4Ospf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRibFilterIpv4Ospf | undefined) {
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
export interface DataScmLogicalRouterVrfRibFilterIpv4Rip {
}

export function dataScmLogicalRouterVrfRibFilterIpv4RipToTerraform(struct?: DataScmLogicalRouterVrfRibFilterIpv4Rip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRibFilterIpv4RipToHclTerraform(struct?: DataScmLogicalRouterVrfRibFilterIpv4Rip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRibFilterIpv4RipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfRibFilterIpv4Rip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRibFilterIpv4Rip | undefined) {
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
export interface DataScmLogicalRouterVrfRibFilterIpv4Static {
}

export function dataScmLogicalRouterVrfRibFilterIpv4StaticToTerraform(struct?: DataScmLogicalRouterVrfRibFilterIpv4Static): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRibFilterIpv4StaticToHclTerraform(struct?: DataScmLogicalRouterVrfRibFilterIpv4Static): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRibFilterIpv4StaticOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfRibFilterIpv4Static | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRibFilterIpv4Static | undefined) {
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
export interface DataScmLogicalRouterVrfRibFilterIpv4 {
}

export function dataScmLogicalRouterVrfRibFilterIpv4ToTerraform(struct?: DataScmLogicalRouterVrfRibFilterIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRibFilterIpv4ToHclTerraform(struct?: DataScmLogicalRouterVrfRibFilterIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRibFilterIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfRibFilterIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRibFilterIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bgp - computed: true, optional: false, required: false
  private _bgp = new DataScmLogicalRouterVrfRibFilterIpv4BgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }

  // ospf - computed: true, optional: false, required: false
  private _ospf = new DataScmLogicalRouterVrfRibFilterIpv4OspfOutputReference(this, "ospf");
  public get ospf() {
    return this._ospf;
  }

  // rip - computed: true, optional: false, required: false
  private _rip = new DataScmLogicalRouterVrfRibFilterIpv4RipOutputReference(this, "rip");
  public get rip() {
    return this._rip;
  }

  // static - computed: true, optional: false, required: false
  private _static = new DataScmLogicalRouterVrfRibFilterIpv4StaticOutputReference(this, "static");
  public get static() {
    return this._static;
  }
}
export interface DataScmLogicalRouterVrfRibFilterIpv6Bgp {
}

export function dataScmLogicalRouterVrfRibFilterIpv6BgpToTerraform(struct?: DataScmLogicalRouterVrfRibFilterIpv6Bgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRibFilterIpv6BgpToHclTerraform(struct?: DataScmLogicalRouterVrfRibFilterIpv6Bgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRibFilterIpv6BgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfRibFilterIpv6Bgp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRibFilterIpv6Bgp | undefined) {
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
export interface DataScmLogicalRouterVrfRibFilterIpv6Ospfv3 {
}

export function dataScmLogicalRouterVrfRibFilterIpv6Ospfv3ToTerraform(struct?: DataScmLogicalRouterVrfRibFilterIpv6Ospfv3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRibFilterIpv6Ospfv3ToHclTerraform(struct?: DataScmLogicalRouterVrfRibFilterIpv6Ospfv3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRibFilterIpv6Ospfv3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfRibFilterIpv6Ospfv3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRibFilterIpv6Ospfv3 | undefined) {
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
export interface DataScmLogicalRouterVrfRibFilterIpv6Static {
}

export function dataScmLogicalRouterVrfRibFilterIpv6StaticToTerraform(struct?: DataScmLogicalRouterVrfRibFilterIpv6Static): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRibFilterIpv6StaticToHclTerraform(struct?: DataScmLogicalRouterVrfRibFilterIpv6Static): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRibFilterIpv6StaticOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfRibFilterIpv6Static | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRibFilterIpv6Static | undefined) {
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
export interface DataScmLogicalRouterVrfRibFilterIpv6 {
}

export function dataScmLogicalRouterVrfRibFilterIpv6ToTerraform(struct?: DataScmLogicalRouterVrfRibFilterIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRibFilterIpv6ToHclTerraform(struct?: DataScmLogicalRouterVrfRibFilterIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRibFilterIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfRibFilterIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRibFilterIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bgp - computed: true, optional: false, required: false
  private _bgp = new DataScmLogicalRouterVrfRibFilterIpv6BgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }

  // ospfv3 - computed: true, optional: false, required: false
  private _ospfv3 = new DataScmLogicalRouterVrfRibFilterIpv6Ospfv3OutputReference(this, "ospfv3");
  public get ospfv3() {
    return this._ospfv3;
  }

  // static - computed: true, optional: false, required: false
  private _static = new DataScmLogicalRouterVrfRibFilterIpv6StaticOutputReference(this, "static");
  public get static() {
    return this._static;
  }
}
export interface DataScmLogicalRouterVrfRibFilter {
}

export function dataScmLogicalRouterVrfRibFilterToTerraform(struct?: DataScmLogicalRouterVrfRibFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRibFilterToHclTerraform(struct?: DataScmLogicalRouterVrfRibFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRibFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfRibFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRibFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataScmLogicalRouterVrfRibFilterIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataScmLogicalRouterVrfRibFilterIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
}
export interface DataScmLogicalRouterVrfRipGlobalBfd {
}

export function dataScmLogicalRouterVrfRipGlobalBfdToTerraform(struct?: DataScmLogicalRouterVrfRipGlobalBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRipGlobalBfdToHclTerraform(struct?: DataScmLogicalRouterVrfRipGlobalBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRipGlobalBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfRipGlobalBfd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRipGlobalBfd | undefined) {
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
export interface DataScmLogicalRouterVrfRipGlobalInboundDistributeListStruct {
}

export function dataScmLogicalRouterVrfRipGlobalInboundDistributeListStructToTerraform(struct?: DataScmLogicalRouterVrfRipGlobalInboundDistributeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRipGlobalInboundDistributeListStructToHclTerraform(struct?: DataScmLogicalRouterVrfRipGlobalInboundDistributeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRipGlobalInboundDistributeListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfRipGlobalInboundDistributeListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRipGlobalInboundDistributeListStruct | undefined) {
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
export interface DataScmLogicalRouterVrfRipGlobalOutboundDistributeListStruct {
}

export function dataScmLogicalRouterVrfRipGlobalOutboundDistributeListStructToTerraform(struct?: DataScmLogicalRouterVrfRipGlobalOutboundDistributeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRipGlobalOutboundDistributeListStructToHclTerraform(struct?: DataScmLogicalRouterVrfRipGlobalOutboundDistributeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRipGlobalOutboundDistributeListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfRipGlobalOutboundDistributeListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRipGlobalOutboundDistributeListStruct | undefined) {
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
export interface DataScmLogicalRouterVrfRipInterfaceBfd {
}

export function dataScmLogicalRouterVrfRipInterfaceBfdToTerraform(struct?: DataScmLogicalRouterVrfRipInterfaceBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRipInterfaceBfdToHclTerraform(struct?: DataScmLogicalRouterVrfRipInterfaceBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRipInterfaceBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfRipInterfaceBfd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRipInterfaceBfd | undefined) {
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
export interface DataScmLogicalRouterVrfRipInterfaceInterfaceInboundDistributeListStruct {
}

export function dataScmLogicalRouterVrfRipInterfaceInterfaceInboundDistributeListStructToTerraform(struct?: DataScmLogicalRouterVrfRipInterfaceInterfaceInboundDistributeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRipInterfaceInterfaceInboundDistributeListStructToHclTerraform(struct?: DataScmLogicalRouterVrfRipInterfaceInterfaceInboundDistributeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRipInterfaceInterfaceInboundDistributeListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfRipInterfaceInterfaceInboundDistributeListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRipInterfaceInterfaceInboundDistributeListStruct | undefined) {
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
export interface DataScmLogicalRouterVrfRipInterfaceInterfaceOutboundDistributeListStruct {
}

export function dataScmLogicalRouterVrfRipInterfaceInterfaceOutboundDistributeListStructToTerraform(struct?: DataScmLogicalRouterVrfRipInterfaceInterfaceOutboundDistributeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRipInterfaceInterfaceOutboundDistributeListStructToHclTerraform(struct?: DataScmLogicalRouterVrfRipInterfaceInterfaceOutboundDistributeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRipInterfaceInterfaceOutboundDistributeListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfRipInterfaceInterfaceOutboundDistributeListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRipInterfaceInterfaceOutboundDistributeListStruct | undefined) {
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
export interface DataScmLogicalRouterVrfRipInterface {
}

export function dataScmLogicalRouterVrfRipInterfaceToTerraform(struct?: DataScmLogicalRouterVrfRipInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRipInterfaceToHclTerraform(struct?: DataScmLogicalRouterVrfRipInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRipInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfRipInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRipInterface | undefined) {
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
  private _bfd = new DataScmLogicalRouterVrfRipInterfaceBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // interface_inbound_distribute_list - computed: true, optional: false, required: false
  private _interfaceInboundDistributeList = new DataScmLogicalRouterVrfRipInterfaceInterfaceInboundDistributeListStructOutputReference(this, "interface_inbound_distribute_list");
  public get interfaceInboundDistributeList() {
    return this._interfaceInboundDistributeList;
  }

  // interface_outbound_distribute_list - computed: true, optional: false, required: false
  private _interfaceOutboundDistributeList = new DataScmLogicalRouterVrfRipInterfaceInterfaceOutboundDistributeListStructOutputReference(this, "interface_outbound_distribute_list");
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

export class DataScmLogicalRouterVrfRipInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfRipInterfaceOutputReference {
    return new DataScmLogicalRouterVrfRipInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfRip {
}

export function dataScmLogicalRouterVrfRipToTerraform(struct?: DataScmLogicalRouterVrfRip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRipToHclTerraform(struct?: DataScmLogicalRouterVrfRip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfRip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRip | undefined) {
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
  private _globalBfd = new DataScmLogicalRouterVrfRipGlobalBfdOutputReference(this, "global_bfd");
  public get globalBfd() {
    return this._globalBfd;
  }

  // global_inbound_distribute_list - computed: true, optional: false, required: false
  private _globalInboundDistributeList = new DataScmLogicalRouterVrfRipGlobalInboundDistributeListStructOutputReference(this, "global_inbound_distribute_list");
  public get globalInboundDistributeList() {
    return this._globalInboundDistributeList;
  }

  // global_outbound_distribute_list - computed: true, optional: false, required: false
  private _globalOutboundDistributeList = new DataScmLogicalRouterVrfRipGlobalOutboundDistributeListStructOutputReference(this, "global_outbound_distribute_list");
  public get globalOutboundDistributeList() {
    return this._globalOutboundDistributeList;
  }

  // global_timer - computed: true, optional: false, required: false
  public get globalTimer() {
    return this.getStringAttribute('global_timer');
  }

  // interface - computed: true, optional: false, required: false
  private _interface = new DataScmLogicalRouterVrfRipInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }

  // redistribution_profile - computed: true, optional: false, required: false
  public get redistributionProfile() {
    return this.getStringAttribute('redistribution_profile');
  }
}
export interface DataScmLogicalRouterVrfRoutingTableIpStaticRouteBfd {
}

export function dataScmLogicalRouterVrfRoutingTableIpStaticRouteBfdToTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpStaticRouteBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRoutingTableIpStaticRouteBfdToHclTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpStaticRouteBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRoutingTableIpStaticRouteBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfRoutingTableIpStaticRouteBfd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRoutingTableIpStaticRouteBfd | undefined) {
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
export interface DataScmLogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscard {
}

export function dataScmLogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscardToTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscardToHclTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfRoutingTableIpStaticRouteNexthopReceive {
}

export function dataScmLogicalRouterVrfRoutingTableIpStaticRouteNexthopReceiveToTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpStaticRouteNexthopReceive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRoutingTableIpStaticRouteNexthopReceiveToHclTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpStaticRouteNexthopReceive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRoutingTableIpStaticRouteNexthopReceiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfRoutingTableIpStaticRouteNexthopReceive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRoutingTableIpStaticRouteNexthopReceive | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfRoutingTableIpStaticRouteNexthop {
}

export function dataScmLogicalRouterVrfRoutingTableIpStaticRouteNexthopToTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpStaticRouteNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRoutingTableIpStaticRouteNexthopToHclTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpStaticRouteNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRoutingTableIpStaticRouteNexthopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfRoutingTableIpStaticRouteNexthop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRoutingTableIpStaticRouteNexthop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // discard - computed: true, optional: false, required: false
  private _discard = new DataScmLogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscardOutputReference(this, "discard");
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
  private _receive = new DataScmLogicalRouterVrfRoutingTableIpStaticRouteNexthopReceiveOutputReference(this, "receive");
  public get receive() {
    return this._receive;
  }

  // tunnel - computed: true, optional: false, required: false
  public get tunnel() {
    return this.getStringAttribute('tunnel');
  }
}
export interface DataScmLogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinations {
}

export function dataScmLogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsToTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsToHclTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinations | undefined) {
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

export class DataScmLogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsOutputReference {
    return new DataScmLogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfRoutingTableIpStaticRoutePathMonitor {
}

export function dataScmLogicalRouterVrfRoutingTableIpStaticRoutePathMonitorToTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpStaticRoutePathMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRoutingTableIpStaticRoutePathMonitorToHclTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpStaticRoutePathMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRoutingTableIpStaticRoutePathMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfRoutingTableIpStaticRoutePathMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRoutingTableIpStaticRoutePathMonitor | undefined) {
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
  private _monitorDestinations = new DataScmLogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsList(this, "monitor_destinations", false);
  public get monitorDestinations() {
    return this._monitorDestinations;
  }
}
export interface DataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTableBoth {
}

export function dataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTableBothToTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTableBoth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTableBothToHclTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTableBoth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTableBothOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTableBoth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTableBoth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTableMulticast {
}

export function dataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTableMulticastToTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTableMulticast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTableMulticastToHclTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTableMulticast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTableMulticastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTableMulticast | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTableMulticast | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTableNoInstall {
}

export function dataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTableNoInstallToTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTableNoInstall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTableNoInstallToHclTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTableNoInstall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTableNoInstallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTableNoInstall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTableNoInstall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTableUnicast {
}

export function dataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTableUnicastToTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTableUnicast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTableUnicastToHclTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTableUnicast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTableUnicastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTableUnicast | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTableUnicast | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTable {
}

export function dataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTableToTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTableToHclTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // both - computed: true, optional: false, required: false
  private _both = new DataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTableBothOutputReference(this, "both");
  public get both() {
    return this._both;
  }

  // multicast - computed: true, optional: false, required: false
  private _multicast = new DataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTableMulticastOutputReference(this, "multicast");
  public get multicast() {
    return this._multicast;
  }

  // no_install - computed: true, optional: false, required: false
  private _noInstall = new DataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTableNoInstallOutputReference(this, "no_install");
  public get noInstall() {
    return this._noInstall;
  }

  // unicast - computed: true, optional: false, required: false
  private _unicast = new DataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTableUnicastOutputReference(this, "unicast");
  public get unicast() {
    return this._unicast;
  }
}
export interface DataScmLogicalRouterVrfRoutingTableIpStaticRoute {
}

export function dataScmLogicalRouterVrfRoutingTableIpStaticRouteToTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpStaticRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRoutingTableIpStaticRouteToHclTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpStaticRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRoutingTableIpStaticRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfRoutingTableIpStaticRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRoutingTableIpStaticRoute | undefined) {
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
  private _bfd = new DataScmLogicalRouterVrfRoutingTableIpStaticRouteBfdOutputReference(this, "bfd");
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
  private _nexthop = new DataScmLogicalRouterVrfRoutingTableIpStaticRouteNexthopOutputReference(this, "nexthop");
  public get nexthop() {
    return this._nexthop;
  }

  // path_monitor - computed: true, optional: false, required: false
  private _pathMonitor = new DataScmLogicalRouterVrfRoutingTableIpStaticRoutePathMonitorOutputReference(this, "path_monitor");
  public get pathMonitor() {
    return this._pathMonitor;
  }

  // route_table - computed: true, optional: false, required: false
  private _routeTable = new DataScmLogicalRouterVrfRoutingTableIpStaticRouteRouteTableOutputReference(this, "route_table");
  public get routeTable() {
    return this._routeTable;
  }
}

export class DataScmLogicalRouterVrfRoutingTableIpStaticRouteList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfRoutingTableIpStaticRouteOutputReference {
    return new DataScmLogicalRouterVrfRoutingTableIpStaticRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfRoutingTableIp {
}

export function dataScmLogicalRouterVrfRoutingTableIpToTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRoutingTableIpToHclTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRoutingTableIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfRoutingTableIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRoutingTableIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // static_route - computed: true, optional: false, required: false
  private _staticRoute = new DataScmLogicalRouterVrfRoutingTableIpStaticRouteList(this, "static_route", false);
  public get staticRoute() {
    return this._staticRoute;
  }
}
export interface DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteBfd {
}

export function dataScmLogicalRouterVrfRoutingTableIpv6StaticRouteBfdToTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRoutingTableIpv6StaticRouteBfdToHclTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteBfd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteBfd | undefined) {
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
export interface DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscard {
}

export function dataScmLogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscardToTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscardToHclTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteNexthopReceive {
}

export function dataScmLogicalRouterVrfRoutingTableIpv6StaticRouteNexthopReceiveToTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteNexthopReceive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRoutingTableIpv6StaticRouteNexthopReceiveToHclTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteNexthopReceive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteNexthopReceiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteNexthopReceive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteNexthopReceive | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteNexthop {
}

export function dataScmLogicalRouterVrfRoutingTableIpv6StaticRouteNexthopToTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRoutingTableIpv6StaticRouteNexthopToHclTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteNexthopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteNexthop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteNexthop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // discard - computed: true, optional: false, required: false
  private _discard = new DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscardOutputReference(this, "discard");
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
  private _receive = new DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteNexthopReceiveOutputReference(this, "receive");
  public get receive() {
    return this._receive;
  }

  // tunnel - computed: true, optional: false, required: false
  public get tunnel() {
    return this.getStringAttribute('tunnel');
  }
}
export interface DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteOptionPassive {
}

export function dataScmLogicalRouterVrfRoutingTableIpv6StaticRouteOptionPassiveToTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteOptionPassive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRoutingTableIpv6StaticRouteOptionPassiveToHclTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteOptionPassive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteOptionPassiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteOptionPassive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteOptionPassive | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteOption {
}

export function dataScmLogicalRouterVrfRoutingTableIpv6StaticRouteOptionToTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRoutingTableIpv6StaticRouteOptionToHclTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // passive - computed: true, optional: false, required: false
  private _passive = new DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteOptionPassiveOutputReference(this, "passive");
  public get passive() {
    return this._passive;
  }
}
export interface DataScmLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinations {
}

export function dataScmLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsToTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsToHclTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinations | undefined) {
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

export class DataScmLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsOutputReference {
    return new DataScmLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitor {
}

export function dataScmLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorToTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorToHclTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitor | undefined) {
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
  private _monitorDestinations = new DataScmLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsList(this, "monitor_destinations", false);
  public get monitorDestinations() {
    return this._monitorDestinations;
  }
}
export interface DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableBoth {
}

export function dataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableBothToTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableBoth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableBothToHclTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableBoth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableBothOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableBoth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableBoth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableMulticast {
}

export function dataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableMulticastToTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableMulticast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableMulticastToHclTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableMulticast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableMulticastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableMulticast | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableMulticast | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableNoInstall {
}

export function dataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableNoInstallToTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableNoInstall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableNoInstallToHclTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableNoInstall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableNoInstallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableNoInstall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableNoInstall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableUnicast {
}

export function dataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableUnicastToTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableUnicast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableUnicastToHclTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableUnicast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableUnicastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableUnicast | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableUnicast | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTable {
}

export function dataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableToTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableToHclTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // both - computed: true, optional: false, required: false
  private _both = new DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableBothOutputReference(this, "both");
  public get both() {
    return this._both;
  }

  // multicast - computed: true, optional: false, required: false
  private _multicast = new DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableMulticastOutputReference(this, "multicast");
  public get multicast() {
    return this._multicast;
  }

  // no_install - computed: true, optional: false, required: false
  private _noInstall = new DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableNoInstallOutputReference(this, "no_install");
  public get noInstall() {
    return this._noInstall;
  }

  // unicast - computed: true, optional: false, required: false
  private _unicast = new DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableUnicastOutputReference(this, "unicast");
  public get unicast() {
    return this._unicast;
  }
}
export interface DataScmLogicalRouterVrfRoutingTableIpv6StaticRoute {
}

export function dataScmLogicalRouterVrfRoutingTableIpv6StaticRouteToTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpv6StaticRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRoutingTableIpv6StaticRouteToHclTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpv6StaticRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrfRoutingTableIpv6StaticRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRoutingTableIpv6StaticRoute | undefined) {
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
  private _bfd = new DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteBfdOutputReference(this, "bfd");
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
  private _nexthop = new DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteNexthopOutputReference(this, "nexthop");
  public get nexthop() {
    return this._nexthop;
  }

  // option - computed: true, optional: false, required: false
  private _option = new DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteOptionOutputReference(this, "option");
  public get option() {
    return this._option;
  }

  // path_monitor - computed: true, optional: false, required: false
  private _pathMonitor = new DataScmLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorOutputReference(this, "path_monitor");
  public get pathMonitor() {
    return this._pathMonitor;
  }

  // route_table - computed: true, optional: false, required: false
  private _routeTable = new DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteRouteTableOutputReference(this, "route_table");
  public get routeTable() {
    return this._routeTable;
  }
}

export class DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteOutputReference {
    return new DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmLogicalRouterVrfRoutingTableIpv6 {
}

export function dataScmLogicalRouterVrfRoutingTableIpv6ToTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRoutingTableIpv6ToHclTerraform(struct?: DataScmLogicalRouterVrfRoutingTableIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRoutingTableIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfRoutingTableIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRoutingTableIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // static_route - computed: true, optional: false, required: false
  private _staticRoute = new DataScmLogicalRouterVrfRoutingTableIpv6StaticRouteList(this, "static_route", false);
  public get staticRoute() {
    return this._staticRoute;
  }
}
export interface DataScmLogicalRouterVrfRoutingTable {
}

export function dataScmLogicalRouterVrfRoutingTableToTerraform(struct?: DataScmLogicalRouterVrfRoutingTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfRoutingTableToHclTerraform(struct?: DataScmLogicalRouterVrfRoutingTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfRoutingTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfRoutingTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfRoutingTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  private _ip = new DataScmLogicalRouterVrfRoutingTableIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataScmLogicalRouterVrfRoutingTableIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
}
export interface DataScmLogicalRouterVrfVrAdminDists {
}

export function dataScmLogicalRouterVrfVrAdminDistsToTerraform(struct?: DataScmLogicalRouterVrfVrAdminDists): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfVrAdminDistsToHclTerraform(struct?: DataScmLogicalRouterVrfVrAdminDists): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfVrAdminDistsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmLogicalRouterVrfVrAdminDists | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrfVrAdminDists | undefined) {
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
export interface DataScmLogicalRouterVrf {
}

export function dataScmLogicalRouterVrfToTerraform(struct?: DataScmLogicalRouterVrf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmLogicalRouterVrfToHclTerraform(struct?: DataScmLogicalRouterVrf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmLogicalRouterVrfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmLogicalRouterVrf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmLogicalRouterVrf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_dists - computed: true, optional: false, required: false
  private _adminDists = new DataScmLogicalRouterVrfAdminDistsOutputReference(this, "admin_dists");
  public get adminDists() {
    return this._adminDists;
  }

  // bgp - computed: true, optional: false, required: false
  private _bgp = new DataScmLogicalRouterVrfBgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }

  // ecmp - computed: true, optional: false, required: false
  private _ecmp = new DataScmLogicalRouterVrfEcmpOutputReference(this, "ecmp");
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
  private _multicast = new DataScmLogicalRouterVrfMulticastOutputReference(this, "multicast");
  public get multicast() {
    return this._multicast;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ospf - computed: true, optional: false, required: false
  private _ospf = new DataScmLogicalRouterVrfOspfOutputReference(this, "ospf");
  public get ospf() {
    return this._ospf;
  }

  // ospfv3 - computed: true, optional: false, required: false
  private _ospfv3 = new DataScmLogicalRouterVrfOspfv3OutputReference(this, "ospfv3");
  public get ospfv3() {
    return this._ospfv3;
  }

  // rib_filter - computed: true, optional: false, required: false
  private _ribFilter = new DataScmLogicalRouterVrfRibFilterOutputReference(this, "rib_filter");
  public get ribFilter() {
    return this._ribFilter;
  }

  // rip - computed: true, optional: false, required: false
  private _rip = new DataScmLogicalRouterVrfRipOutputReference(this, "rip");
  public get rip() {
    return this._rip;
  }

  // routing_table - computed: true, optional: false, required: false
  private _routingTable = new DataScmLogicalRouterVrfRoutingTableOutputReference(this, "routing_table");
  public get routingTable() {
    return this._routingTable;
  }

  // sdwan_type - computed: true, optional: false, required: false
  public get sdwanType() {
    return this.getStringAttribute('sdwan_type');
  }

  // vr_admin_dists - computed: true, optional: false, required: false
  private _vrAdminDists = new DataScmLogicalRouterVrfVrAdminDistsOutputReference(this, "vr_admin_dists");
  public get vrAdminDists() {
    return this._vrAdminDists;
  }

  // zone_name - computed: true, optional: false, required: false
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
}

export class DataScmLogicalRouterVrfList extends cdktf.ComplexList {

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
  public get(index: number): DataScmLogicalRouterVrfOutputReference {
    return new DataScmLogicalRouterVrfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
