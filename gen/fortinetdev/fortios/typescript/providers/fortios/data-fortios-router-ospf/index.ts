// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_ospf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiosRouterOspfConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_ospf#id DataFortiosRouterOspf#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_ospf#vdomparam DataFortiosRouterOspf#vdomparam}
  */
  readonly vdomparam?: string;
}
export interface DataFortiosRouterOspfAreaFilterListStruct {
}

export function dataFortiosRouterOspfAreaFilterListStructToTerraform(struct?: DataFortiosRouterOspfAreaFilterListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterOspfAreaFilterListStructToHclTerraform(struct?: DataFortiosRouterOspfAreaFilterListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterOspfAreaFilterListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterOspfAreaFilterListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterOspfAreaFilterListStruct | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // list - computed: true, optional: false, required: false
  public get list() {
    return this.getStringAttribute('list');
  }
}

export class DataFortiosRouterOspfAreaFilterListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterOspfAreaFilterListStructOutputReference {
    return new DataFortiosRouterOspfAreaFilterListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterOspfAreaRange {
}

export function dataFortiosRouterOspfAreaRangeToTerraform(struct?: DataFortiosRouterOspfAreaRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterOspfAreaRangeToHclTerraform(struct?: DataFortiosRouterOspfAreaRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterOspfAreaRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterOspfAreaRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterOspfAreaRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise - computed: true, optional: false, required: false
  public get advertise() {
    return this.getStringAttribute('advertise');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // substitute - computed: true, optional: false, required: false
  public get substitute() {
    return this.getStringAttribute('substitute');
  }

  // substitute_status - computed: true, optional: false, required: false
  public get substituteStatus() {
    return this.getStringAttribute('substitute_status');
  }
}

export class DataFortiosRouterOspfAreaRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterOspfAreaRangeOutputReference {
    return new DataFortiosRouterOspfAreaRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterOspfAreaVirtualLinkMd5Keys {
}

export function dataFortiosRouterOspfAreaVirtualLinkMd5KeysToTerraform(struct?: DataFortiosRouterOspfAreaVirtualLinkMd5Keys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterOspfAreaVirtualLinkMd5KeysToHclTerraform(struct?: DataFortiosRouterOspfAreaVirtualLinkMd5Keys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterOspfAreaVirtualLinkMd5KeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterOspfAreaVirtualLinkMd5Keys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterOspfAreaVirtualLinkMd5Keys | undefined) {
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

  // key_string - computed: true, optional: false, required: false
  public get keyString() {
    return this.getStringAttribute('key_string');
  }
}

export class DataFortiosRouterOspfAreaVirtualLinkMd5KeysList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterOspfAreaVirtualLinkMd5KeysOutputReference {
    return new DataFortiosRouterOspfAreaVirtualLinkMd5KeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterOspfAreaVirtualLink {
}

export function dataFortiosRouterOspfAreaVirtualLinkToTerraform(struct?: DataFortiosRouterOspfAreaVirtualLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterOspfAreaVirtualLinkToHclTerraform(struct?: DataFortiosRouterOspfAreaVirtualLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterOspfAreaVirtualLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterOspfAreaVirtualLink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterOspfAreaVirtualLink | undefined) {
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

  // authentication_key - computed: true, optional: false, required: false
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }

  // dead_interval - computed: true, optional: false, required: false
  public get deadInterval() {
    return this.getNumberAttribute('dead_interval');
  }

  // hello_interval - computed: true, optional: false, required: false
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }

  // keychain - computed: true, optional: false, required: false
  public get keychain() {
    return this.getStringAttribute('keychain');
  }

  // md5_key - computed: true, optional: false, required: false
  public get md5Key() {
    return this.getStringAttribute('md5_key');
  }

  // md5_keychain - computed: true, optional: false, required: false
  public get md5Keychain() {
    return this.getStringAttribute('md5_keychain');
  }

  // md5_keys - computed: true, optional: false, required: false
  private _md5Keys = new DataFortiosRouterOspfAreaVirtualLinkMd5KeysList(this, "md5_keys", false);
  public get md5Keys() {
    return this._md5Keys;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // peer - computed: true, optional: false, required: false
  public get peer() {
    return this.getStringAttribute('peer');
  }

  // retransmit_interval - computed: true, optional: false, required: false
  public get retransmitInterval() {
    return this.getNumberAttribute('retransmit_interval');
  }

  // transmit_delay - computed: true, optional: false, required: false
  public get transmitDelay() {
    return this.getNumberAttribute('transmit_delay');
  }
}

export class DataFortiosRouterOspfAreaVirtualLinkList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterOspfAreaVirtualLinkOutputReference {
    return new DataFortiosRouterOspfAreaVirtualLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterOspfArea {
}

export function dataFortiosRouterOspfAreaToTerraform(struct?: DataFortiosRouterOspfArea): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterOspfAreaToHclTerraform(struct?: DataFortiosRouterOspfArea): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterOspfAreaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterOspfArea | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterOspfArea | undefined) {
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

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // default_cost - computed: true, optional: false, required: false
  public get defaultCost() {
    return this.getNumberAttribute('default_cost');
  }

  // filter_list - computed: true, optional: false, required: false
  private _filterList = new DataFortiosRouterOspfAreaFilterListStructList(this, "filter_list", false);
  public get filterList() {
    return this._filterList;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // nssa_default_information_originate - computed: true, optional: false, required: false
  public get nssaDefaultInformationOriginate() {
    return this.getStringAttribute('nssa_default_information_originate');
  }

  // nssa_default_information_originate_metric - computed: true, optional: false, required: false
  public get nssaDefaultInformationOriginateMetric() {
    return this.getNumberAttribute('nssa_default_information_originate_metric');
  }

  // nssa_default_information_originate_metric_type - computed: true, optional: false, required: false
  public get nssaDefaultInformationOriginateMetricType() {
    return this.getStringAttribute('nssa_default_information_originate_metric_type');
  }

  // nssa_redistribution - computed: true, optional: false, required: false
  public get nssaRedistribution() {
    return this.getStringAttribute('nssa_redistribution');
  }

  // nssa_translator_role - computed: true, optional: false, required: false
  public get nssaTranslatorRole() {
    return this.getStringAttribute('nssa_translator_role');
  }

  // range - computed: true, optional: false, required: false
  private _range = new DataFortiosRouterOspfAreaRangeList(this, "range", false);
  public get range() {
    return this._range;
  }

  // shortcut - computed: true, optional: false, required: false
  public get shortcut() {
    return this.getStringAttribute('shortcut');
  }

  // stub_type - computed: true, optional: false, required: false
  public get stubType() {
    return this.getStringAttribute('stub_type');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // virtual_link - computed: true, optional: false, required: false
  private _virtualLink = new DataFortiosRouterOspfAreaVirtualLinkList(this, "virtual_link", false);
  public get virtualLink() {
    return this._virtualLink;
  }
}

export class DataFortiosRouterOspfAreaList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterOspfAreaOutputReference {
    return new DataFortiosRouterOspfAreaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterOspfDistributeListStruct {
}

export function dataFortiosRouterOspfDistributeListStructToTerraform(struct?: DataFortiosRouterOspfDistributeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterOspfDistributeListStructToHclTerraform(struct?: DataFortiosRouterOspfDistributeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterOspfDistributeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterOspfDistributeListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterOspfDistributeListStruct | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class DataFortiosRouterOspfDistributeListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterOspfDistributeListStructOutputReference {
    return new DataFortiosRouterOspfDistributeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterOspfNeighbor {
}

export function dataFortiosRouterOspfNeighborToTerraform(struct?: DataFortiosRouterOspfNeighbor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterOspfNeighborToHclTerraform(struct?: DataFortiosRouterOspfNeighbor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterOspfNeighborOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterOspfNeighbor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterOspfNeighbor | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // poll_interval - computed: true, optional: false, required: false
  public get pollInterval() {
    return this.getNumberAttribute('poll_interval');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }
}

export class DataFortiosRouterOspfNeighborList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterOspfNeighborOutputReference {
    return new DataFortiosRouterOspfNeighborOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterOspfNetwork {
}

export function dataFortiosRouterOspfNetworkToTerraform(struct?: DataFortiosRouterOspfNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterOspfNetworkToHclTerraform(struct?: DataFortiosRouterOspfNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterOspfNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterOspfNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterOspfNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // area - computed: true, optional: false, required: false
  public get area() {
    return this.getStringAttribute('area');
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}

export class DataFortiosRouterOspfNetworkList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterOspfNetworkOutputReference {
    return new DataFortiosRouterOspfNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterOspfOspfInterfaceMd5Keys {
}

export function dataFortiosRouterOspfOspfInterfaceMd5KeysToTerraform(struct?: DataFortiosRouterOspfOspfInterfaceMd5Keys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterOspfOspfInterfaceMd5KeysToHclTerraform(struct?: DataFortiosRouterOspfOspfInterfaceMd5Keys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterOspfOspfInterfaceMd5KeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterOspfOspfInterfaceMd5Keys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterOspfOspfInterfaceMd5Keys | undefined) {
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

  // key_string - computed: true, optional: false, required: false
  public get keyString() {
    return this.getStringAttribute('key_string');
  }
}

export class DataFortiosRouterOspfOspfInterfaceMd5KeysList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterOspfOspfInterfaceMd5KeysOutputReference {
    return new DataFortiosRouterOspfOspfInterfaceMd5KeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterOspfOspfInterface {
}

export function dataFortiosRouterOspfOspfInterfaceToTerraform(struct?: DataFortiosRouterOspfOspfInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterOspfOspfInterfaceToHclTerraform(struct?: DataFortiosRouterOspfOspfInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterOspfOspfInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterOspfOspfInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterOspfOspfInterface | undefined) {
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

  // authentication_key - computed: true, optional: false, required: false
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }

  // bfd - computed: true, optional: false, required: false
  public get bfd() {
    return this.getStringAttribute('bfd');
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // cost - computed: true, optional: false, required: false
  public get cost() {
    return this.getNumberAttribute('cost');
  }

  // database_filter_out - computed: true, optional: false, required: false
  public get databaseFilterOut() {
    return this.getStringAttribute('database_filter_out');
  }

  // dead_interval - computed: true, optional: false, required: false
  public get deadInterval() {
    return this.getNumberAttribute('dead_interval');
  }

  // hello_interval - computed: true, optional: false, required: false
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }

  // hello_multiplier - computed: true, optional: false, required: false
  public get helloMultiplier() {
    return this.getNumberAttribute('hello_multiplier');
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // keychain - computed: true, optional: false, required: false
  public get keychain() {
    return this.getStringAttribute('keychain');
  }

  // linkdown_fast_failover - computed: true, optional: false, required: false
  public get linkdownFastFailover() {
    return this.getStringAttribute('linkdown_fast_failover');
  }

  // md5_key - computed: true, optional: false, required: false
  public get md5Key() {
    return this.getStringAttribute('md5_key');
  }

  // md5_keychain - computed: true, optional: false, required: false
  public get md5Keychain() {
    return this.getStringAttribute('md5_keychain');
  }

  // md5_keys - computed: true, optional: false, required: false
  private _md5Keys = new DataFortiosRouterOspfOspfInterfaceMd5KeysList(this, "md5_keys", false);
  public get md5Keys() {
    return this._md5Keys;
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // mtu_ignore - computed: true, optional: false, required: false
  public get mtuIgnore() {
    return this.getStringAttribute('mtu_ignore');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // resync_timeout - computed: true, optional: false, required: false
  public get resyncTimeout() {
    return this.getNumberAttribute('resync_timeout');
  }

  // retransmit_interval - computed: true, optional: false, required: false
  public get retransmitInterval() {
    return this.getNumberAttribute('retransmit_interval');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // transmit_delay - computed: true, optional: false, required: false
  public get transmitDelay() {
    return this.getNumberAttribute('transmit_delay');
  }
}

export class DataFortiosRouterOspfOspfInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterOspfOspfInterfaceOutputReference {
    return new DataFortiosRouterOspfOspfInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterOspfPassiveInterface {
}

export function dataFortiosRouterOspfPassiveInterfaceToTerraform(struct?: DataFortiosRouterOspfPassiveInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterOspfPassiveInterfaceToHclTerraform(struct?: DataFortiosRouterOspfPassiveInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterOspfPassiveInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterOspfPassiveInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterOspfPassiveInterface | undefined) {
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

export class DataFortiosRouterOspfPassiveInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterOspfPassiveInterfaceOutputReference {
    return new DataFortiosRouterOspfPassiveInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterOspfRedistribute {
}

export function dataFortiosRouterOspfRedistributeToTerraform(struct?: DataFortiosRouterOspfRedistribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterOspfRedistributeToHclTerraform(struct?: DataFortiosRouterOspfRedistribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterOspfRedistributeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterOspfRedistribute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterOspfRedistribute | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // routemap - computed: true, optional: false, required: false
  public get routemap() {
    return this.getStringAttribute('routemap');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getNumberAttribute('tag');
  }
}

export class DataFortiosRouterOspfRedistributeList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterOspfRedistributeOutputReference {
    return new DataFortiosRouterOspfRedistributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterOspfSummaryAddress {
}

export function dataFortiosRouterOspfSummaryAddressToTerraform(struct?: DataFortiosRouterOspfSummaryAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterOspfSummaryAddressToHclTerraform(struct?: DataFortiosRouterOspfSummaryAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterOspfSummaryAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterOspfSummaryAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterOspfSummaryAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise - computed: true, optional: false, required: false
  public get advertise() {
    return this.getStringAttribute('advertise');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getNumberAttribute('tag');
  }
}

export class DataFortiosRouterOspfSummaryAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterOspfSummaryAddressOutputReference {
    return new DataFortiosRouterOspfSummaryAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_ospf fortios_router_ospf}
*/
export class DataFortiosRouterOspf extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_router_ospf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiosRouterOspf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiosRouterOspf to import
  * @param importFromId The id of the existing DataFortiosRouterOspf that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_ospf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiosRouterOspf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_router_ospf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_ospf fortios_router_ospf} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiosRouterOspfConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataFortiosRouterOspfConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_router_ospf',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
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

  // abr_type - computed: true, optional: false, required: false
  public get abrType() {
    return this.getStringAttribute('abr_type');
  }

  // area - computed: true, optional: false, required: false
  private _area = new DataFortiosRouterOspfAreaList(this, "area", false);
  public get area() {
    return this._area;
  }

  // auto_cost_ref_bandwidth - computed: true, optional: false, required: false
  public get autoCostRefBandwidth() {
    return this.getNumberAttribute('auto_cost_ref_bandwidth');
  }

  // bfd - computed: true, optional: false, required: false
  public get bfd() {
    return this.getStringAttribute('bfd');
  }

  // database_overflow - computed: true, optional: false, required: false
  public get databaseOverflow() {
    return this.getStringAttribute('database_overflow');
  }

  // database_overflow_max_lsas - computed: true, optional: false, required: false
  public get databaseOverflowMaxLsas() {
    return this.getNumberAttribute('database_overflow_max_lsas');
  }

  // database_overflow_time_to_recover - computed: true, optional: false, required: false
  public get databaseOverflowTimeToRecover() {
    return this.getNumberAttribute('database_overflow_time_to_recover');
  }

  // default_information_metric - computed: true, optional: false, required: false
  public get defaultInformationMetric() {
    return this.getNumberAttribute('default_information_metric');
  }

  // default_information_metric_type - computed: true, optional: false, required: false
  public get defaultInformationMetricType() {
    return this.getStringAttribute('default_information_metric_type');
  }

  // default_information_originate - computed: true, optional: false, required: false
  public get defaultInformationOriginate() {
    return this.getStringAttribute('default_information_originate');
  }

  // default_information_route_map - computed: true, optional: false, required: false
  public get defaultInformationRouteMap() {
    return this.getStringAttribute('default_information_route_map');
  }

  // default_metric - computed: true, optional: false, required: false
  public get defaultMetric() {
    return this.getNumberAttribute('default_metric');
  }

  // distance - computed: true, optional: false, required: false
  public get distance() {
    return this.getNumberAttribute('distance');
  }

  // distance_external - computed: true, optional: false, required: false
  public get distanceExternal() {
    return this.getNumberAttribute('distance_external');
  }

  // distance_inter_area - computed: true, optional: false, required: false
  public get distanceInterArea() {
    return this.getNumberAttribute('distance_inter_area');
  }

  // distance_intra_area - computed: true, optional: false, required: false
  public get distanceIntraArea() {
    return this.getNumberAttribute('distance_intra_area');
  }

  // distribute_list - computed: true, optional: false, required: false
  private _distributeList = new DataFortiosRouterOspfDistributeListStructList(this, "distribute_list", false);
  public get distributeList() {
    return this._distributeList;
  }

  // distribute_list_in - computed: true, optional: false, required: false
  public get distributeListIn() {
    return this.getStringAttribute('distribute_list_in');
  }

  // distribute_route_map_in - computed: true, optional: false, required: false
  public get distributeRouteMapIn() {
    return this.getStringAttribute('distribute_route_map_in');
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

  // log_neighbour_changes - computed: true, optional: false, required: false
  public get logNeighbourChanges() {
    return this.getStringAttribute('log_neighbour_changes');
  }

  // lsa_refresh_interval - computed: true, optional: false, required: false
  public get lsaRefreshInterval() {
    return this.getNumberAttribute('lsa_refresh_interval');
  }

  // neighbor - computed: true, optional: false, required: false
  private _neighbor = new DataFortiosRouterOspfNeighborList(this, "neighbor", false);
  public get neighbor() {
    return this._neighbor;
  }

  // network - computed: true, optional: false, required: false
  private _network = new DataFortiosRouterOspfNetworkList(this, "network", false);
  public get network() {
    return this._network;
  }

  // ospf_interface - computed: true, optional: false, required: false
  private _ospfInterface = new DataFortiosRouterOspfOspfInterfaceList(this, "ospf_interface", false);
  public get ospfInterface() {
    return this._ospfInterface;
  }

  // passive_interface - computed: true, optional: false, required: false
  private _passiveInterface = new DataFortiosRouterOspfPassiveInterfaceList(this, "passive_interface", false);
  public get passiveInterface() {
    return this._passiveInterface;
  }

  // redistribute - computed: true, optional: false, required: false
  private _redistribute = new DataFortiosRouterOspfRedistributeList(this, "redistribute", false);
  public get redistribute() {
    return this._redistribute;
  }

  // restart_mode - computed: true, optional: false, required: false
  public get restartMode() {
    return this.getStringAttribute('restart_mode');
  }

  // restart_on_topology_change - computed: true, optional: false, required: false
  public get restartOnTopologyChange() {
    return this.getStringAttribute('restart_on_topology_change');
  }

  // restart_period - computed: true, optional: false, required: false
  public get restartPeriod() {
    return this.getNumberAttribute('restart_period');
  }

  // rfc1583_compatible - computed: true, optional: false, required: false
  public get rfc1583Compatible() {
    return this.getStringAttribute('rfc1583_compatible');
  }

  // router_id - computed: true, optional: false, required: false
  public get routerId() {
    return this.getStringAttribute('router_id');
  }

  // spf_timers - computed: true, optional: false, required: false
  public get spfTimers() {
    return this.getStringAttribute('spf_timers');
  }

  // summary_address - computed: true, optional: false, required: false
  private _summaryAddress = new DataFortiosRouterOspfSummaryAddressList(this, "summary_address", false);
  public get summaryAddress() {
    return this._summaryAddress;
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
