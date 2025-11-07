// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/network_security_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNutanixNetworkSecurityRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/network_security_rule#id DataNutanixNetworkSecurityRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/network_security_rule#network_security_rule_id DataNutanixNetworkSecurityRule#network_security_rule_id}
  */
  readonly networkSecurityRuleId: string;
  /**
  * categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/network_security_rule#categories DataNutanixNetworkSecurityRule#categories}
  */
  readonly categories?: DataNutanixNetworkSecurityRuleCategories[] | cdktf.IResolvable;
}
export interface DataNutanixNetworkSecurityRuleAdRuleInboundAllowListAddressGroupInclusionListStruct {
}

export function dataNutanixNetworkSecurityRuleAdRuleInboundAllowListAddressGroupInclusionListStructToTerraform(struct?: DataNutanixNetworkSecurityRuleAdRuleInboundAllowListAddressGroupInclusionListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleAdRuleInboundAllowListAddressGroupInclusionListStructToHclTerraform(struct?: DataNutanixNetworkSecurityRuleAdRuleInboundAllowListAddressGroupInclusionListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleAdRuleInboundAllowListAddressGroupInclusionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleAdRuleInboundAllowListAddressGroupInclusionListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleAdRuleInboundAllowListAddressGroupInclusionListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataNutanixNetworkSecurityRuleAdRuleInboundAllowListAddressGroupInclusionListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleAdRuleInboundAllowListAddressGroupInclusionListStructOutputReference {
    return new DataNutanixNetworkSecurityRuleAdRuleInboundAllowListAddressGroupInclusionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleAdRuleInboundAllowListFilterParams {
}

export function dataNutanixNetworkSecurityRuleAdRuleInboundAllowListFilterParamsToTerraform(struct?: DataNutanixNetworkSecurityRuleAdRuleInboundAllowListFilterParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleAdRuleInboundAllowListFilterParamsToHclTerraform(struct?: DataNutanixNetworkSecurityRuleAdRuleInboundAllowListFilterParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleAdRuleInboundAllowListFilterParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleAdRuleInboundAllowListFilterParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleAdRuleInboundAllowListFilterParams | undefined) {
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

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataNutanixNetworkSecurityRuleAdRuleInboundAllowListFilterParamsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleAdRuleInboundAllowListFilterParamsOutputReference {
    return new DataNutanixNetworkSecurityRuleAdRuleInboundAllowListFilterParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleAdRuleInboundAllowListIcmpTypeCodeListStruct {
}

export function dataNutanixNetworkSecurityRuleAdRuleInboundAllowListIcmpTypeCodeListStructToTerraform(struct?: DataNutanixNetworkSecurityRuleAdRuleInboundAllowListIcmpTypeCodeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleAdRuleInboundAllowListIcmpTypeCodeListStructToHclTerraform(struct?: DataNutanixNetworkSecurityRuleAdRuleInboundAllowListIcmpTypeCodeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleAdRuleInboundAllowListIcmpTypeCodeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleAdRuleInboundAllowListIcmpTypeCodeListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleAdRuleInboundAllowListIcmpTypeCodeListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataNutanixNetworkSecurityRuleAdRuleInboundAllowListIcmpTypeCodeListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleAdRuleInboundAllowListIcmpTypeCodeListStructOutputReference {
    return new DataNutanixNetworkSecurityRuleAdRuleInboundAllowListIcmpTypeCodeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleAdRuleInboundAllowListServiceGroupListStruct {
}

export function dataNutanixNetworkSecurityRuleAdRuleInboundAllowListServiceGroupListStructToTerraform(struct?: DataNutanixNetworkSecurityRuleAdRuleInboundAllowListServiceGroupListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleAdRuleInboundAllowListServiceGroupListStructToHclTerraform(struct?: DataNutanixNetworkSecurityRuleAdRuleInboundAllowListServiceGroupListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleAdRuleInboundAllowListServiceGroupListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleAdRuleInboundAllowListServiceGroupListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleAdRuleInboundAllowListServiceGroupListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataNutanixNetworkSecurityRuleAdRuleInboundAllowListServiceGroupListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleAdRuleInboundAllowListServiceGroupListStructOutputReference {
    return new DataNutanixNetworkSecurityRuleAdRuleInboundAllowListServiceGroupListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleAdRuleInboundAllowListTcpPortRangeListStruct {
}

export function dataNutanixNetworkSecurityRuleAdRuleInboundAllowListTcpPortRangeListStructToTerraform(struct?: DataNutanixNetworkSecurityRuleAdRuleInboundAllowListTcpPortRangeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleAdRuleInboundAllowListTcpPortRangeListStructToHclTerraform(struct?: DataNutanixNetworkSecurityRuleAdRuleInboundAllowListTcpPortRangeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleAdRuleInboundAllowListTcpPortRangeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleAdRuleInboundAllowListTcpPortRangeListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleAdRuleInboundAllowListTcpPortRangeListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_port - computed: true, optional: false, required: false
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }

  // start_port - computed: true, optional: false, required: false
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
}

export class DataNutanixNetworkSecurityRuleAdRuleInboundAllowListTcpPortRangeListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleAdRuleInboundAllowListTcpPortRangeListStructOutputReference {
    return new DataNutanixNetworkSecurityRuleAdRuleInboundAllowListTcpPortRangeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleAdRuleInboundAllowListUdpPortRangeListStruct {
}

export function dataNutanixNetworkSecurityRuleAdRuleInboundAllowListUdpPortRangeListStructToTerraform(struct?: DataNutanixNetworkSecurityRuleAdRuleInboundAllowListUdpPortRangeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleAdRuleInboundAllowListUdpPortRangeListStructToHclTerraform(struct?: DataNutanixNetworkSecurityRuleAdRuleInboundAllowListUdpPortRangeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleAdRuleInboundAllowListUdpPortRangeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleAdRuleInboundAllowListUdpPortRangeListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleAdRuleInboundAllowListUdpPortRangeListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_port - computed: true, optional: false, required: false
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }

  // start_port - computed: true, optional: false, required: false
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
}

export class DataNutanixNetworkSecurityRuleAdRuleInboundAllowListUdpPortRangeListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleAdRuleInboundAllowListUdpPortRangeListStructOutputReference {
    return new DataNutanixNetworkSecurityRuleAdRuleInboundAllowListUdpPortRangeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleAdRuleInboundAllowListStruct {
}

export function dataNutanixNetworkSecurityRuleAdRuleInboundAllowListStructToTerraform(struct?: DataNutanixNetworkSecurityRuleAdRuleInboundAllowListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleAdRuleInboundAllowListStructToHclTerraform(struct?: DataNutanixNetworkSecurityRuleAdRuleInboundAllowListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleAdRuleInboundAllowListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleAdRuleInboundAllowListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleAdRuleInboundAllowListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_group_inclusion_list - computed: true, optional: false, required: false
  private _addressGroupInclusionList = new DataNutanixNetworkSecurityRuleAdRuleInboundAllowListAddressGroupInclusionListStructList(this, "address_group_inclusion_list", false);
  public get addressGroupInclusionList() {
    return this._addressGroupInclusionList;
  }

  // expiration_time - computed: true, optional: false, required: false
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }

  // filter_kind_list - computed: true, optional: false, required: false
  public get filterKindList() {
    return this.getListAttribute('filter_kind_list');
  }

  // filter_params - computed: true, optional: false, required: false
  private _filterParams = new DataNutanixNetworkSecurityRuleAdRuleInboundAllowListFilterParamsList(this, "filter_params", true);
  public get filterParams() {
    return this._filterParams;
  }

  // filter_type - computed: true, optional: false, required: false
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }

  // icmp_type_code_list - computed: true, optional: false, required: false
  private _icmpTypeCodeList = new DataNutanixNetworkSecurityRuleAdRuleInboundAllowListIcmpTypeCodeListStructList(this, "icmp_type_code_list", false);
  public get icmpTypeCodeList() {
    return this._icmpTypeCodeList;
  }

  // ip_subnet - computed: true, optional: false, required: false
  public get ipSubnet() {
    return this.getStringAttribute('ip_subnet');
  }

  // ip_subnet_prefix_length - computed: true, optional: false, required: false
  public get ipSubnetPrefixLength() {
    return this.getStringAttribute('ip_subnet_prefix_length');
  }

  // network_function_chain_reference - computed: true, optional: false, required: false
  private _networkFunctionChainReference = new cdktf.StringMap(this, "network_function_chain_reference");
  public get networkFunctionChainReference() {
    return this._networkFunctionChainReference;
  }

  // peer_specification_type - computed: true, optional: false, required: false
  public get peerSpecificationType() {
    return this.getStringAttribute('peer_specification_type');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // service_group_list - computed: true, optional: false, required: false
  private _serviceGroupList = new DataNutanixNetworkSecurityRuleAdRuleInboundAllowListServiceGroupListStructList(this, "service_group_list", false);
  public get serviceGroupList() {
    return this._serviceGroupList;
  }

  // tcp_port_range_list - computed: true, optional: false, required: false
  private _tcpPortRangeList = new DataNutanixNetworkSecurityRuleAdRuleInboundAllowListTcpPortRangeListStructList(this, "tcp_port_range_list", false);
  public get tcpPortRangeList() {
    return this._tcpPortRangeList;
  }

  // udp_port_range_list - computed: true, optional: false, required: false
  private _udpPortRangeList = new DataNutanixNetworkSecurityRuleAdRuleInboundAllowListUdpPortRangeListStructList(this, "udp_port_range_list", false);
  public get udpPortRangeList() {
    return this._udpPortRangeList;
  }
}

export class DataNutanixNetworkSecurityRuleAdRuleInboundAllowListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleAdRuleInboundAllowListStructOutputReference {
    return new DataNutanixNetworkSecurityRuleAdRuleInboundAllowListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListAddressGroupInclusionListStruct {
}

export function dataNutanixNetworkSecurityRuleAdRuleOutboundAllowListAddressGroupInclusionListStructToTerraform(struct?: DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListAddressGroupInclusionListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleAdRuleOutboundAllowListAddressGroupInclusionListStructToHclTerraform(struct?: DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListAddressGroupInclusionListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListAddressGroupInclusionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListAddressGroupInclusionListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListAddressGroupInclusionListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListAddressGroupInclusionListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListAddressGroupInclusionListStructOutputReference {
    return new DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListAddressGroupInclusionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListFilterParams {
}

export function dataNutanixNetworkSecurityRuleAdRuleOutboundAllowListFilterParamsToTerraform(struct?: DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListFilterParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleAdRuleOutboundAllowListFilterParamsToHclTerraform(struct?: DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListFilterParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListFilterParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListFilterParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListFilterParams | undefined) {
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

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListFilterParamsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListFilterParamsOutputReference {
    return new DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListFilterParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListIcmpTypeCodeListStruct {
}

export function dataNutanixNetworkSecurityRuleAdRuleOutboundAllowListIcmpTypeCodeListStructToTerraform(struct?: DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListIcmpTypeCodeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleAdRuleOutboundAllowListIcmpTypeCodeListStructToHclTerraform(struct?: DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListIcmpTypeCodeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListIcmpTypeCodeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListIcmpTypeCodeListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListIcmpTypeCodeListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListIcmpTypeCodeListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListIcmpTypeCodeListStructOutputReference {
    return new DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListIcmpTypeCodeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListServiceGroupListStruct {
}

export function dataNutanixNetworkSecurityRuleAdRuleOutboundAllowListServiceGroupListStructToTerraform(struct?: DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListServiceGroupListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleAdRuleOutboundAllowListServiceGroupListStructToHclTerraform(struct?: DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListServiceGroupListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListServiceGroupListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListServiceGroupListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListServiceGroupListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListServiceGroupListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListServiceGroupListStructOutputReference {
    return new DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListServiceGroupListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListTcpPortRangeListStruct {
}

export function dataNutanixNetworkSecurityRuleAdRuleOutboundAllowListTcpPortRangeListStructToTerraform(struct?: DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListTcpPortRangeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleAdRuleOutboundAllowListTcpPortRangeListStructToHclTerraform(struct?: DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListTcpPortRangeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListTcpPortRangeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListTcpPortRangeListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListTcpPortRangeListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_port - computed: true, optional: false, required: false
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }

  // start_port - computed: true, optional: false, required: false
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
}

export class DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListTcpPortRangeListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListTcpPortRangeListStructOutputReference {
    return new DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListTcpPortRangeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListUdpPortRangeListStruct {
}

export function dataNutanixNetworkSecurityRuleAdRuleOutboundAllowListUdpPortRangeListStructToTerraform(struct?: DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListUdpPortRangeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleAdRuleOutboundAllowListUdpPortRangeListStructToHclTerraform(struct?: DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListUdpPortRangeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListUdpPortRangeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListUdpPortRangeListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListUdpPortRangeListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_port - computed: true, optional: false, required: false
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }

  // start_port - computed: true, optional: false, required: false
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
}

export class DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListUdpPortRangeListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListUdpPortRangeListStructOutputReference {
    return new DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListUdpPortRangeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListStruct {
}

export function dataNutanixNetworkSecurityRuleAdRuleOutboundAllowListStructToTerraform(struct?: DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleAdRuleOutboundAllowListStructToHclTerraform(struct?: DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_group_inclusion_list - computed: true, optional: false, required: false
  private _addressGroupInclusionList = new DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListAddressGroupInclusionListStructList(this, "address_group_inclusion_list", false);
  public get addressGroupInclusionList() {
    return this._addressGroupInclusionList;
  }

  // expiration_time - computed: true, optional: false, required: false
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }

  // filter_kind_list - computed: true, optional: false, required: false
  public get filterKindList() {
    return this.getListAttribute('filter_kind_list');
  }

  // filter_params - computed: true, optional: false, required: false
  private _filterParams = new DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListFilterParamsList(this, "filter_params", true);
  public get filterParams() {
    return this._filterParams;
  }

  // filter_type - computed: true, optional: false, required: false
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }

  // icmp_type_code_list - computed: true, optional: false, required: false
  private _icmpTypeCodeList = new DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListIcmpTypeCodeListStructList(this, "icmp_type_code_list", false);
  public get icmpTypeCodeList() {
    return this._icmpTypeCodeList;
  }

  // ip_subnet - computed: true, optional: false, required: false
  public get ipSubnet() {
    return this.getStringAttribute('ip_subnet');
  }

  // ip_subnet_prefix_length - computed: true, optional: false, required: false
  public get ipSubnetPrefixLength() {
    return this.getStringAttribute('ip_subnet_prefix_length');
  }

  // network_function_chain_reference - computed: true, optional: false, required: false
  private _networkFunctionChainReference = new cdktf.StringMap(this, "network_function_chain_reference");
  public get networkFunctionChainReference() {
    return this._networkFunctionChainReference;
  }

  // peer_specification_type - computed: true, optional: false, required: false
  public get peerSpecificationType() {
    return this.getStringAttribute('peer_specification_type');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // service_group_list - computed: true, optional: false, required: false
  private _serviceGroupList = new DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListServiceGroupListStructList(this, "service_group_list", false);
  public get serviceGroupList() {
    return this._serviceGroupList;
  }

  // tcp_port_range_list - computed: true, optional: false, required: false
  private _tcpPortRangeList = new DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListTcpPortRangeListStructList(this, "tcp_port_range_list", false);
  public get tcpPortRangeList() {
    return this._tcpPortRangeList;
  }

  // udp_port_range_list - computed: true, optional: false, required: false
  private _udpPortRangeList = new DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListUdpPortRangeListStructList(this, "udp_port_range_list", false);
  public get udpPortRangeList() {
    return this._udpPortRangeList;
  }
}

export class DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListStructOutputReference {
    return new DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleAdRuleTargetGroupFilterParams {
}

export function dataNutanixNetworkSecurityRuleAdRuleTargetGroupFilterParamsToTerraform(struct?: DataNutanixNetworkSecurityRuleAdRuleTargetGroupFilterParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleAdRuleTargetGroupFilterParamsToHclTerraform(struct?: DataNutanixNetworkSecurityRuleAdRuleTargetGroupFilterParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleAdRuleTargetGroupFilterParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleAdRuleTargetGroupFilterParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleAdRuleTargetGroupFilterParams | undefined) {
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

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataNutanixNetworkSecurityRuleAdRuleTargetGroupFilterParamsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleAdRuleTargetGroupFilterParamsOutputReference {
    return new DataNutanixNetworkSecurityRuleAdRuleTargetGroupFilterParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleAppRuleInboundAllowListAddressGroupInclusionListStruct {
}

export function dataNutanixNetworkSecurityRuleAppRuleInboundAllowListAddressGroupInclusionListStructToTerraform(struct?: DataNutanixNetworkSecurityRuleAppRuleInboundAllowListAddressGroupInclusionListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleAppRuleInboundAllowListAddressGroupInclusionListStructToHclTerraform(struct?: DataNutanixNetworkSecurityRuleAppRuleInboundAllowListAddressGroupInclusionListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleAppRuleInboundAllowListAddressGroupInclusionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleAppRuleInboundAllowListAddressGroupInclusionListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleAppRuleInboundAllowListAddressGroupInclusionListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataNutanixNetworkSecurityRuleAppRuleInboundAllowListAddressGroupInclusionListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleAppRuleInboundAllowListAddressGroupInclusionListStructOutputReference {
    return new DataNutanixNetworkSecurityRuleAppRuleInboundAllowListAddressGroupInclusionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleAppRuleInboundAllowListFilterParams {
}

export function dataNutanixNetworkSecurityRuleAppRuleInboundAllowListFilterParamsToTerraform(struct?: DataNutanixNetworkSecurityRuleAppRuleInboundAllowListFilterParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleAppRuleInboundAllowListFilterParamsToHclTerraform(struct?: DataNutanixNetworkSecurityRuleAppRuleInboundAllowListFilterParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleAppRuleInboundAllowListFilterParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleAppRuleInboundAllowListFilterParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleAppRuleInboundAllowListFilterParams | undefined) {
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

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataNutanixNetworkSecurityRuleAppRuleInboundAllowListFilterParamsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleAppRuleInboundAllowListFilterParamsOutputReference {
    return new DataNutanixNetworkSecurityRuleAppRuleInboundAllowListFilterParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleAppRuleInboundAllowListIcmpTypeCodeListStruct {
}

export function dataNutanixNetworkSecurityRuleAppRuleInboundAllowListIcmpTypeCodeListStructToTerraform(struct?: DataNutanixNetworkSecurityRuleAppRuleInboundAllowListIcmpTypeCodeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleAppRuleInboundAllowListIcmpTypeCodeListStructToHclTerraform(struct?: DataNutanixNetworkSecurityRuleAppRuleInboundAllowListIcmpTypeCodeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleAppRuleInboundAllowListIcmpTypeCodeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleAppRuleInboundAllowListIcmpTypeCodeListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleAppRuleInboundAllowListIcmpTypeCodeListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataNutanixNetworkSecurityRuleAppRuleInboundAllowListIcmpTypeCodeListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleAppRuleInboundAllowListIcmpTypeCodeListStructOutputReference {
    return new DataNutanixNetworkSecurityRuleAppRuleInboundAllowListIcmpTypeCodeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleAppRuleInboundAllowListServiceGroupListStruct {
}

export function dataNutanixNetworkSecurityRuleAppRuleInboundAllowListServiceGroupListStructToTerraform(struct?: DataNutanixNetworkSecurityRuleAppRuleInboundAllowListServiceGroupListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleAppRuleInboundAllowListServiceGroupListStructToHclTerraform(struct?: DataNutanixNetworkSecurityRuleAppRuleInboundAllowListServiceGroupListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleAppRuleInboundAllowListServiceGroupListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleAppRuleInboundAllowListServiceGroupListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleAppRuleInboundAllowListServiceGroupListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataNutanixNetworkSecurityRuleAppRuleInboundAllowListServiceGroupListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleAppRuleInboundAllowListServiceGroupListStructOutputReference {
    return new DataNutanixNetworkSecurityRuleAppRuleInboundAllowListServiceGroupListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleAppRuleInboundAllowListTcpPortRangeListStruct {
}

export function dataNutanixNetworkSecurityRuleAppRuleInboundAllowListTcpPortRangeListStructToTerraform(struct?: DataNutanixNetworkSecurityRuleAppRuleInboundAllowListTcpPortRangeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleAppRuleInboundAllowListTcpPortRangeListStructToHclTerraform(struct?: DataNutanixNetworkSecurityRuleAppRuleInboundAllowListTcpPortRangeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleAppRuleInboundAllowListTcpPortRangeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleAppRuleInboundAllowListTcpPortRangeListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleAppRuleInboundAllowListTcpPortRangeListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_port - computed: true, optional: false, required: false
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }

  // start_port - computed: true, optional: false, required: false
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
}

export class DataNutanixNetworkSecurityRuleAppRuleInboundAllowListTcpPortRangeListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleAppRuleInboundAllowListTcpPortRangeListStructOutputReference {
    return new DataNutanixNetworkSecurityRuleAppRuleInboundAllowListTcpPortRangeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleAppRuleInboundAllowListUdpPortRangeListStruct {
}

export function dataNutanixNetworkSecurityRuleAppRuleInboundAllowListUdpPortRangeListStructToTerraform(struct?: DataNutanixNetworkSecurityRuleAppRuleInboundAllowListUdpPortRangeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleAppRuleInboundAllowListUdpPortRangeListStructToHclTerraform(struct?: DataNutanixNetworkSecurityRuleAppRuleInboundAllowListUdpPortRangeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleAppRuleInboundAllowListUdpPortRangeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleAppRuleInboundAllowListUdpPortRangeListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleAppRuleInboundAllowListUdpPortRangeListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_port - computed: true, optional: false, required: false
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }

  // start_port - computed: true, optional: false, required: false
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
}

export class DataNutanixNetworkSecurityRuleAppRuleInboundAllowListUdpPortRangeListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleAppRuleInboundAllowListUdpPortRangeListStructOutputReference {
    return new DataNutanixNetworkSecurityRuleAppRuleInboundAllowListUdpPortRangeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleAppRuleInboundAllowListStruct {
}

export function dataNutanixNetworkSecurityRuleAppRuleInboundAllowListStructToTerraform(struct?: DataNutanixNetworkSecurityRuleAppRuleInboundAllowListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleAppRuleInboundAllowListStructToHclTerraform(struct?: DataNutanixNetworkSecurityRuleAppRuleInboundAllowListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleAppRuleInboundAllowListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleAppRuleInboundAllowListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleAppRuleInboundAllowListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_group_inclusion_list - computed: true, optional: false, required: false
  private _addressGroupInclusionList = new DataNutanixNetworkSecurityRuleAppRuleInboundAllowListAddressGroupInclusionListStructList(this, "address_group_inclusion_list", false);
  public get addressGroupInclusionList() {
    return this._addressGroupInclusionList;
  }

  // expiration_time - computed: true, optional: false, required: false
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }

  // filter_kind_list - computed: true, optional: false, required: false
  public get filterKindList() {
    return this.getListAttribute('filter_kind_list');
  }

  // filter_params - computed: true, optional: false, required: false
  private _filterParams = new DataNutanixNetworkSecurityRuleAppRuleInboundAllowListFilterParamsList(this, "filter_params", true);
  public get filterParams() {
    return this._filterParams;
  }

  // filter_type - computed: true, optional: false, required: false
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }

  // icmp_type_code_list - computed: true, optional: false, required: false
  private _icmpTypeCodeList = new DataNutanixNetworkSecurityRuleAppRuleInboundAllowListIcmpTypeCodeListStructList(this, "icmp_type_code_list", false);
  public get icmpTypeCodeList() {
    return this._icmpTypeCodeList;
  }

  // ip_subnet - computed: true, optional: false, required: false
  public get ipSubnet() {
    return this.getStringAttribute('ip_subnet');
  }

  // ip_subnet_prefix_length - computed: true, optional: false, required: false
  public get ipSubnetPrefixLength() {
    return this.getStringAttribute('ip_subnet_prefix_length');
  }

  // network_function_chain_reference - computed: true, optional: false, required: false
  private _networkFunctionChainReference = new cdktf.StringMap(this, "network_function_chain_reference");
  public get networkFunctionChainReference() {
    return this._networkFunctionChainReference;
  }

  // peer_specification_type - computed: true, optional: false, required: false
  public get peerSpecificationType() {
    return this.getStringAttribute('peer_specification_type');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // service_group_list - computed: true, optional: false, required: false
  private _serviceGroupList = new DataNutanixNetworkSecurityRuleAppRuleInboundAllowListServiceGroupListStructList(this, "service_group_list", false);
  public get serviceGroupList() {
    return this._serviceGroupList;
  }

  // tcp_port_range_list - computed: true, optional: false, required: false
  private _tcpPortRangeList = new DataNutanixNetworkSecurityRuleAppRuleInboundAllowListTcpPortRangeListStructList(this, "tcp_port_range_list", false);
  public get tcpPortRangeList() {
    return this._tcpPortRangeList;
  }

  // udp_port_range_list - computed: true, optional: false, required: false
  private _udpPortRangeList = new DataNutanixNetworkSecurityRuleAppRuleInboundAllowListUdpPortRangeListStructList(this, "udp_port_range_list", false);
  public get udpPortRangeList() {
    return this._udpPortRangeList;
  }
}

export class DataNutanixNetworkSecurityRuleAppRuleInboundAllowListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleAppRuleInboundAllowListStructOutputReference {
    return new DataNutanixNetworkSecurityRuleAppRuleInboundAllowListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListFilterParams {
}

export function dataNutanixNetworkSecurityRuleAppRuleOutboundAllowListFilterParamsToTerraform(struct?: DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListFilterParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleAppRuleOutboundAllowListFilterParamsToHclTerraform(struct?: DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListFilterParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListFilterParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListFilterParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListFilterParams | undefined) {
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

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListFilterParamsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListFilterParamsOutputReference {
    return new DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListFilterParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListIcmpTypeCodeListStruct {
}

export function dataNutanixNetworkSecurityRuleAppRuleOutboundAllowListIcmpTypeCodeListStructToTerraform(struct?: DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListIcmpTypeCodeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleAppRuleOutboundAllowListIcmpTypeCodeListStructToHclTerraform(struct?: DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListIcmpTypeCodeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListIcmpTypeCodeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListIcmpTypeCodeListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListIcmpTypeCodeListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListIcmpTypeCodeListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListIcmpTypeCodeListStructOutputReference {
    return new DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListIcmpTypeCodeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListTcpPortRangeListStruct {
}

export function dataNutanixNetworkSecurityRuleAppRuleOutboundAllowListTcpPortRangeListStructToTerraform(struct?: DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListTcpPortRangeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleAppRuleOutboundAllowListTcpPortRangeListStructToHclTerraform(struct?: DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListTcpPortRangeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListTcpPortRangeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListTcpPortRangeListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListTcpPortRangeListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_port - computed: true, optional: false, required: false
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }

  // start_port - computed: true, optional: false, required: false
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
}

export class DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListTcpPortRangeListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListTcpPortRangeListStructOutputReference {
    return new DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListTcpPortRangeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListUdpPortRangeListStruct {
}

export function dataNutanixNetworkSecurityRuleAppRuleOutboundAllowListUdpPortRangeListStructToTerraform(struct?: DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListUdpPortRangeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleAppRuleOutboundAllowListUdpPortRangeListStructToHclTerraform(struct?: DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListUdpPortRangeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListUdpPortRangeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListUdpPortRangeListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListUdpPortRangeListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_port - computed: true, optional: false, required: false
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }

  // start_port - computed: true, optional: false, required: false
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
}

export class DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListUdpPortRangeListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListUdpPortRangeListStructOutputReference {
    return new DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListUdpPortRangeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListStruct {
}

export function dataNutanixNetworkSecurityRuleAppRuleOutboundAllowListStructToTerraform(struct?: DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleAppRuleOutboundAllowListStructToHclTerraform(struct?: DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expiration_time - computed: true, optional: false, required: false
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }

  // filter_kind_list - computed: true, optional: false, required: false
  public get filterKindList() {
    return this.getListAttribute('filter_kind_list');
  }

  // filter_params - computed: true, optional: false, required: false
  private _filterParams = new DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListFilterParamsList(this, "filter_params", true);
  public get filterParams() {
    return this._filterParams;
  }

  // filter_type - computed: true, optional: false, required: false
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }

  // icmp_type_code_list - computed: true, optional: false, required: false
  private _icmpTypeCodeList = new DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListIcmpTypeCodeListStructList(this, "icmp_type_code_list", false);
  public get icmpTypeCodeList() {
    return this._icmpTypeCodeList;
  }

  // ip_subnet - computed: true, optional: false, required: false
  public get ipSubnet() {
    return this.getStringAttribute('ip_subnet');
  }

  // ip_subnet_prefix_length - computed: true, optional: false, required: false
  public get ipSubnetPrefixLength() {
    return this.getStringAttribute('ip_subnet_prefix_length');
  }

  // network_function_chain_reference - computed: true, optional: false, required: false
  private _networkFunctionChainReference = new cdktf.StringMap(this, "network_function_chain_reference");
  public get networkFunctionChainReference() {
    return this._networkFunctionChainReference;
  }

  // peer_specification_type - computed: true, optional: false, required: false
  public get peerSpecificationType() {
    return this.getStringAttribute('peer_specification_type');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // tcp_port_range_list - computed: true, optional: false, required: false
  private _tcpPortRangeList = new DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListTcpPortRangeListStructList(this, "tcp_port_range_list", false);
  public get tcpPortRangeList() {
    return this._tcpPortRangeList;
  }

  // udp_port_range_list - computed: true, optional: false, required: false
  private _udpPortRangeList = new DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListUdpPortRangeListStructList(this, "udp_port_range_list", false);
  public get udpPortRangeList() {
    return this._udpPortRangeList;
  }
}

export class DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListStructOutputReference {
    return new DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleAppRuleTargetGroupFilterParams {
}

export function dataNutanixNetworkSecurityRuleAppRuleTargetGroupFilterParamsToTerraform(struct?: DataNutanixNetworkSecurityRuleAppRuleTargetGroupFilterParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleAppRuleTargetGroupFilterParamsToHclTerraform(struct?: DataNutanixNetworkSecurityRuleAppRuleTargetGroupFilterParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleAppRuleTargetGroupFilterParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleAppRuleTargetGroupFilterParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleAppRuleTargetGroupFilterParams | undefined) {
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

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataNutanixNetworkSecurityRuleAppRuleTargetGroupFilterParamsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleAppRuleTargetGroupFilterParamsOutputReference {
    return new DataNutanixNetworkSecurityRuleAppRuleTargetGroupFilterParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleIsolationRuleFirstEntityFilterParams {
}

export function dataNutanixNetworkSecurityRuleIsolationRuleFirstEntityFilterParamsToTerraform(struct?: DataNutanixNetworkSecurityRuleIsolationRuleFirstEntityFilterParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleIsolationRuleFirstEntityFilterParamsToHclTerraform(struct?: DataNutanixNetworkSecurityRuleIsolationRuleFirstEntityFilterParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleIsolationRuleFirstEntityFilterParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleIsolationRuleFirstEntityFilterParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleIsolationRuleFirstEntityFilterParams | undefined) {
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

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataNutanixNetworkSecurityRuleIsolationRuleFirstEntityFilterParamsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleIsolationRuleFirstEntityFilterParamsOutputReference {
    return new DataNutanixNetworkSecurityRuleIsolationRuleFirstEntityFilterParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleIsolationRuleSecondEntityFilterParams {
}

export function dataNutanixNetworkSecurityRuleIsolationRuleSecondEntityFilterParamsToTerraform(struct?: DataNutanixNetworkSecurityRuleIsolationRuleSecondEntityFilterParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleIsolationRuleSecondEntityFilterParamsToHclTerraform(struct?: DataNutanixNetworkSecurityRuleIsolationRuleSecondEntityFilterParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleIsolationRuleSecondEntityFilterParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleIsolationRuleSecondEntityFilterParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleIsolationRuleSecondEntityFilterParams | undefined) {
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

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataNutanixNetworkSecurityRuleIsolationRuleSecondEntityFilterParamsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleIsolationRuleSecondEntityFilterParamsOutputReference {
    return new DataNutanixNetworkSecurityRuleIsolationRuleSecondEntityFilterParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListFilterParams {
}

export function dataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListFilterParamsToTerraform(struct?: DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListFilterParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListFilterParamsToHclTerraform(struct?: DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListFilterParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListFilterParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListFilterParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListFilterParams | undefined) {
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

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListFilterParamsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListFilterParamsOutputReference {
    return new DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListFilterParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListIcmpTypeCodeListStruct {
}

export function dataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListIcmpTypeCodeListStructToTerraform(struct?: DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListIcmpTypeCodeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListIcmpTypeCodeListStructToHclTerraform(struct?: DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListIcmpTypeCodeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListIcmpTypeCodeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListIcmpTypeCodeListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListIcmpTypeCodeListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListIcmpTypeCodeListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListIcmpTypeCodeListStructOutputReference {
    return new DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListIcmpTypeCodeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListTcpPortRangeListStruct {
}

export function dataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListTcpPortRangeListStructToTerraform(struct?: DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListTcpPortRangeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListTcpPortRangeListStructToHclTerraform(struct?: DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListTcpPortRangeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListTcpPortRangeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListTcpPortRangeListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListTcpPortRangeListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_port - computed: true, optional: false, required: false
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }

  // start_port - computed: true, optional: false, required: false
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
}

export class DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListTcpPortRangeListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListTcpPortRangeListStructOutputReference {
    return new DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListTcpPortRangeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListUdpPortRangeListStruct {
}

export function dataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListUdpPortRangeListStructToTerraform(struct?: DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListUdpPortRangeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListUdpPortRangeListStructToHclTerraform(struct?: DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListUdpPortRangeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListUdpPortRangeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListUdpPortRangeListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListUdpPortRangeListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_port - computed: true, optional: false, required: false
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }

  // start_port - computed: true, optional: false, required: false
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
}

export class DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListUdpPortRangeListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListUdpPortRangeListStructOutputReference {
    return new DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListUdpPortRangeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListStruct {
}

export function dataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListStructToTerraform(struct?: DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListStructToHclTerraform(struct?: DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expiration_time - computed: true, optional: false, required: false
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }

  // filter_kind_list - computed: true, optional: false, required: false
  public get filterKindList() {
    return this.getListAttribute('filter_kind_list');
  }

  // filter_params - computed: true, optional: false, required: false
  private _filterParams = new DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListFilterParamsList(this, "filter_params", true);
  public get filterParams() {
    return this._filterParams;
  }

  // filter_type - computed: true, optional: false, required: false
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }

  // icmp_type_code_list - computed: true, optional: false, required: false
  private _icmpTypeCodeList = new DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListIcmpTypeCodeListStructList(this, "icmp_type_code_list", false);
  public get icmpTypeCodeList() {
    return this._icmpTypeCodeList;
  }

  // ip_subnet - computed: true, optional: false, required: false
  public get ipSubnet() {
    return this.getStringAttribute('ip_subnet');
  }

  // ip_subnet_prefix_length - computed: true, optional: false, required: false
  public get ipSubnetPrefixLength() {
    return this.getStringAttribute('ip_subnet_prefix_length');
  }

  // network_function_chain_reference - computed: true, optional: false, required: false
  private _networkFunctionChainReference = new cdktf.StringMap(this, "network_function_chain_reference");
  public get networkFunctionChainReference() {
    return this._networkFunctionChainReference;
  }

  // peer_specification_type - computed: true, optional: false, required: false
  public get peerSpecificationType() {
    return this.getStringAttribute('peer_specification_type');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // tcp_port_range_list - computed: true, optional: false, required: false
  private _tcpPortRangeList = new DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListTcpPortRangeListStructList(this, "tcp_port_range_list", false);
  public get tcpPortRangeList() {
    return this._tcpPortRangeList;
  }

  // udp_port_range_list - computed: true, optional: false, required: false
  private _udpPortRangeList = new DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListUdpPortRangeListStructList(this, "udp_port_range_list", false);
  public get udpPortRangeList() {
    return this._udpPortRangeList;
  }
}

export class DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListStructOutputReference {
    return new DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListAddressGroupInclusionListStruct {
}

export function dataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListAddressGroupInclusionListStructToTerraform(struct?: DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListAddressGroupInclusionListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListAddressGroupInclusionListStructToHclTerraform(struct?: DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListAddressGroupInclusionListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListAddressGroupInclusionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListAddressGroupInclusionListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListAddressGroupInclusionListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListAddressGroupInclusionListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListAddressGroupInclusionListStructOutputReference {
    return new DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListAddressGroupInclusionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListFilterParams {
}

export function dataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListFilterParamsToTerraform(struct?: DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListFilterParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListFilterParamsToHclTerraform(struct?: DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListFilterParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListFilterParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListFilterParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListFilterParams | undefined) {
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

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListFilterParamsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListFilterParamsOutputReference {
    return new DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListFilterParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListIcmpTypeCodeListStruct {
}

export function dataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListIcmpTypeCodeListStructToTerraform(struct?: DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListIcmpTypeCodeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListIcmpTypeCodeListStructToHclTerraform(struct?: DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListIcmpTypeCodeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListIcmpTypeCodeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListIcmpTypeCodeListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListIcmpTypeCodeListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListIcmpTypeCodeListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListIcmpTypeCodeListStructOutputReference {
    return new DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListIcmpTypeCodeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListServiceGroupListStruct {
}

export function dataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListServiceGroupListStructToTerraform(struct?: DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListServiceGroupListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListServiceGroupListStructToHclTerraform(struct?: DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListServiceGroupListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListServiceGroupListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListServiceGroupListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListServiceGroupListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListServiceGroupListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListServiceGroupListStructOutputReference {
    return new DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListServiceGroupListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListTcpPortRangeListStruct {
}

export function dataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListTcpPortRangeListStructToTerraform(struct?: DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListTcpPortRangeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListTcpPortRangeListStructToHclTerraform(struct?: DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListTcpPortRangeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListTcpPortRangeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListTcpPortRangeListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListTcpPortRangeListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_port - computed: true, optional: false, required: false
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }

  // start_port - computed: true, optional: false, required: false
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
}

export class DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListTcpPortRangeListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListTcpPortRangeListStructOutputReference {
    return new DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListTcpPortRangeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListUdpPortRangeListStruct {
}

export function dataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListUdpPortRangeListStructToTerraform(struct?: DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListUdpPortRangeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListUdpPortRangeListStructToHclTerraform(struct?: DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListUdpPortRangeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListUdpPortRangeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListUdpPortRangeListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListUdpPortRangeListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_port - computed: true, optional: false, required: false
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }

  // start_port - computed: true, optional: false, required: false
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
}

export class DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListUdpPortRangeListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListUdpPortRangeListStructOutputReference {
    return new DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListUdpPortRangeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListStruct {
}

export function dataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListStructToTerraform(struct?: DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListStructToHclTerraform(struct?: DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_group_inclusion_list - computed: true, optional: false, required: false
  private _addressGroupInclusionList = new DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListAddressGroupInclusionListStructList(this, "address_group_inclusion_list", false);
  public get addressGroupInclusionList() {
    return this._addressGroupInclusionList;
  }

  // expiration_time - computed: true, optional: false, required: false
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }

  // filter_kind_list - computed: true, optional: false, required: false
  public get filterKindList() {
    return this.getListAttribute('filter_kind_list');
  }

  // filter_params - computed: true, optional: false, required: false
  private _filterParams = new DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListFilterParamsList(this, "filter_params", true);
  public get filterParams() {
    return this._filterParams;
  }

  // filter_type - computed: true, optional: false, required: false
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }

  // icmp_type_code_list - computed: true, optional: false, required: false
  private _icmpTypeCodeList = new DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListIcmpTypeCodeListStructList(this, "icmp_type_code_list", false);
  public get icmpTypeCodeList() {
    return this._icmpTypeCodeList;
  }

  // ip_subnet - computed: true, optional: false, required: false
  public get ipSubnet() {
    return this.getStringAttribute('ip_subnet');
  }

  // ip_subnet_prefix_length - computed: true, optional: false, required: false
  public get ipSubnetPrefixLength() {
    return this.getStringAttribute('ip_subnet_prefix_length');
  }

  // network_function_chain_reference - computed: true, optional: false, required: false
  private _networkFunctionChainReference = new cdktf.StringMap(this, "network_function_chain_reference");
  public get networkFunctionChainReference() {
    return this._networkFunctionChainReference;
  }

  // peer_specification_type - computed: true, optional: false, required: false
  public get peerSpecificationType() {
    return this.getStringAttribute('peer_specification_type');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // service_group_list - computed: true, optional: false, required: false
  private _serviceGroupList = new DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListServiceGroupListStructList(this, "service_group_list", false);
  public get serviceGroupList() {
    return this._serviceGroupList;
  }

  // tcp_port_range_list - computed: true, optional: false, required: false
  private _tcpPortRangeList = new DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListTcpPortRangeListStructList(this, "tcp_port_range_list", false);
  public get tcpPortRangeList() {
    return this._tcpPortRangeList;
  }

  // udp_port_range_list - computed: true, optional: false, required: false
  private _udpPortRangeList = new DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListUdpPortRangeListStructList(this, "udp_port_range_list", false);
  public get udpPortRangeList() {
    return this._udpPortRangeList;
  }
}

export class DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListStructOutputReference {
    return new DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleQuarantineRuleTargetGroupFilterParams {
}

export function dataNutanixNetworkSecurityRuleQuarantineRuleTargetGroupFilterParamsToTerraform(struct?: DataNutanixNetworkSecurityRuleQuarantineRuleTargetGroupFilterParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixNetworkSecurityRuleQuarantineRuleTargetGroupFilterParamsToHclTerraform(struct?: DataNutanixNetworkSecurityRuleQuarantineRuleTargetGroupFilterParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixNetworkSecurityRuleQuarantineRuleTargetGroupFilterParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixNetworkSecurityRuleQuarantineRuleTargetGroupFilterParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleQuarantineRuleTargetGroupFilterParams | undefined) {
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

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataNutanixNetworkSecurityRuleQuarantineRuleTargetGroupFilterParamsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixNetworkSecurityRuleQuarantineRuleTargetGroupFilterParamsOutputReference {
    return new DataNutanixNetworkSecurityRuleQuarantineRuleTargetGroupFilterParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixNetworkSecurityRuleCategories {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/network_security_rule#name DataNutanixNetworkSecurityRule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/network_security_rule#value DataNutanixNetworkSecurityRule#value}
  */
  readonly value?: string;
}

export function dataNutanixNetworkSecurityRuleCategoriesToTerraform(struct?: DataNutanixNetworkSecurityRuleCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataNutanixNetworkSecurityRuleCategoriesToHclTerraform(struct?: DataNutanixNetworkSecurityRuleCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNutanixNetworkSecurityRuleCategoriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataNutanixNetworkSecurityRuleCategories | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixNetworkSecurityRuleCategories | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataNutanixNetworkSecurityRuleCategoriesList extends cdktf.ComplexList {
  public internalValue? : DataNutanixNetworkSecurityRuleCategories[] | cdktf.IResolvable

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
  public get(index: number): DataNutanixNetworkSecurityRuleCategoriesOutputReference {
    return new DataNutanixNetworkSecurityRuleCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/network_security_rule nutanix_network_security_rule}
*/
export class DataNutanixNetworkSecurityRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_network_security_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNutanixNetworkSecurityRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNutanixNetworkSecurityRule to import
  * @param importFromId The id of the existing DataNutanixNetworkSecurityRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/network_security_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNutanixNetworkSecurityRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_network_security_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/network_security_rule nutanix_network_security_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNutanixNetworkSecurityRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataNutanixNetworkSecurityRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'nutanix_network_security_rule',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3'
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
    this._networkSecurityRuleId = config.networkSecurityRuleId;
    this._categories.internalValue = config.categories;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ad_rule_action - computed: true, optional: false, required: false
  public get adRuleAction() {
    return this.getStringAttribute('ad_rule_action');
  }

  // ad_rule_inbound_allow_list - computed: true, optional: false, required: false
  private _adRuleInboundAllowList = new DataNutanixNetworkSecurityRuleAdRuleInboundAllowListStructList(this, "ad_rule_inbound_allow_list", false);
  public get adRuleInboundAllowList() {
    return this._adRuleInboundAllowList;
  }

  // ad_rule_outbound_allow_list - computed: true, optional: false, required: false
  private _adRuleOutboundAllowList = new DataNutanixNetworkSecurityRuleAdRuleOutboundAllowListStructList(this, "ad_rule_outbound_allow_list", false);
  public get adRuleOutboundAllowList() {
    return this._adRuleOutboundAllowList;
  }

  // ad_rule_target_group_default_internal_policy - computed: true, optional: false, required: false
  public get adRuleTargetGroupDefaultInternalPolicy() {
    return this.getStringAttribute('ad_rule_target_group_default_internal_policy');
  }

  // ad_rule_target_group_filter_kind_list - computed: true, optional: false, required: false
  public get adRuleTargetGroupFilterKindList() {
    return this.getListAttribute('ad_rule_target_group_filter_kind_list');
  }

  // ad_rule_target_group_filter_params - computed: true, optional: false, required: false
  private _adRuleTargetGroupFilterParams = new DataNutanixNetworkSecurityRuleAdRuleTargetGroupFilterParamsList(this, "ad_rule_target_group_filter_params", true);
  public get adRuleTargetGroupFilterParams() {
    return this._adRuleTargetGroupFilterParams;
  }

  // ad_rule_target_group_filter_type - computed: true, optional: false, required: false
  public get adRuleTargetGroupFilterType() {
    return this.getStringAttribute('ad_rule_target_group_filter_type');
  }

  // ad_rule_target_group_peer_specification_type - computed: true, optional: false, required: false
  public get adRuleTargetGroupPeerSpecificationType() {
    return this.getStringAttribute('ad_rule_target_group_peer_specification_type');
  }

  // allow_ipv6_traffic - computed: true, optional: false, required: false
  public get allowIpv6Traffic() {
    return this.getBooleanAttribute('allow_ipv6_traffic');
  }

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // app_rule_action - computed: true, optional: false, required: false
  public get appRuleAction() {
    return this.getStringAttribute('app_rule_action');
  }

  // app_rule_inbound_allow_list - computed: true, optional: false, required: false
  private _appRuleInboundAllowList = new DataNutanixNetworkSecurityRuleAppRuleInboundAllowListStructList(this, "app_rule_inbound_allow_list", false);
  public get appRuleInboundAllowList() {
    return this._appRuleInboundAllowList;
  }

  // app_rule_outbound_allow_list - computed: true, optional: false, required: false
  private _appRuleOutboundAllowList = new DataNutanixNetworkSecurityRuleAppRuleOutboundAllowListStructList(this, "app_rule_outbound_allow_list", false);
  public get appRuleOutboundAllowList() {
    return this._appRuleOutboundAllowList;
  }

  // app_rule_target_group_default_internal_policy - computed: true, optional: false, required: false
  public get appRuleTargetGroupDefaultInternalPolicy() {
    return this.getStringAttribute('app_rule_target_group_default_internal_policy');
  }

  // app_rule_target_group_filter_kind_list - computed: true, optional: false, required: false
  public get appRuleTargetGroupFilterKindList() {
    return this.getListAttribute('app_rule_target_group_filter_kind_list');
  }

  // app_rule_target_group_filter_params - computed: true, optional: false, required: false
  private _appRuleTargetGroupFilterParams = new DataNutanixNetworkSecurityRuleAppRuleTargetGroupFilterParamsList(this, "app_rule_target_group_filter_params", true);
  public get appRuleTargetGroupFilterParams() {
    return this._appRuleTargetGroupFilterParams;
  }

  // app_rule_target_group_filter_type - computed: true, optional: false, required: false
  public get appRuleTargetGroupFilterType() {
    return this.getStringAttribute('app_rule_target_group_filter_type');
  }

  // app_rule_target_group_peer_specification_type - computed: true, optional: false, required: false
  public get appRuleTargetGroupPeerSpecificationType() {
    return this.getStringAttribute('app_rule_target_group_peer_specification_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // is_policy_hitlog_enabled - computed: true, optional: false, required: false
  public get isPolicyHitlogEnabled() {
    return this.getBooleanAttribute('is_policy_hitlog_enabled');
  }

  // isolation_rule_action - computed: true, optional: false, required: false
  public get isolationRuleAction() {
    return this.getStringAttribute('isolation_rule_action');
  }

  // isolation_rule_first_entity_filter_kind_list - computed: true, optional: false, required: false
  public get isolationRuleFirstEntityFilterKindList() {
    return this.getListAttribute('isolation_rule_first_entity_filter_kind_list');
  }

  // isolation_rule_first_entity_filter_params - computed: true, optional: false, required: false
  private _isolationRuleFirstEntityFilterParams = new DataNutanixNetworkSecurityRuleIsolationRuleFirstEntityFilterParamsList(this, "isolation_rule_first_entity_filter_params", true);
  public get isolationRuleFirstEntityFilterParams() {
    return this._isolationRuleFirstEntityFilterParams;
  }

  // isolation_rule_first_entity_filter_type - computed: true, optional: false, required: false
  public get isolationRuleFirstEntityFilterType() {
    return this.getStringAttribute('isolation_rule_first_entity_filter_type');
  }

  // isolation_rule_second_entity_filter_kind_list - computed: true, optional: false, required: false
  public get isolationRuleSecondEntityFilterKindList() {
    return this.getListAttribute('isolation_rule_second_entity_filter_kind_list');
  }

  // isolation_rule_second_entity_filter_params - computed: true, optional: false, required: false
  private _isolationRuleSecondEntityFilterParams = new DataNutanixNetworkSecurityRuleIsolationRuleSecondEntityFilterParamsList(this, "isolation_rule_second_entity_filter_params", true);
  public get isolationRuleSecondEntityFilterParams() {
    return this._isolationRuleSecondEntityFilterParams;
  }

  // isolation_rule_second_entity_filter_type - computed: true, optional: false, required: false
  public get isolationRuleSecondEntityFilterType() {
    return this.getStringAttribute('isolation_rule_second_entity_filter_type');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_security_rule_id - computed: false, optional: false, required: true
  private _networkSecurityRuleId?: string; 
  public get networkSecurityRuleId() {
    return this.getStringAttribute('network_security_rule_id');
  }
  public set networkSecurityRuleId(value: string) {
    this._networkSecurityRuleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSecurityRuleIdInput() {
    return this._networkSecurityRuleId;
  }

  // owner_reference - computed: true, optional: false, required: false
  private _ownerReference = new cdktf.StringMap(this, "owner_reference");
  public get ownerReference() {
    return this._ownerReference;
  }

  // project_reference - computed: true, optional: false, required: false
  private _projectReference = new cdktf.StringMap(this, "project_reference");
  public get projectReference() {
    return this._projectReference;
  }

  // quarantine_rule_action - computed: true, optional: false, required: false
  public get quarantineRuleAction() {
    return this.getStringAttribute('quarantine_rule_action');
  }

  // quarantine_rule_inbound_allow_list - computed: true, optional: false, required: false
  private _quarantineRuleInboundAllowList = new DataNutanixNetworkSecurityRuleQuarantineRuleInboundAllowListStructList(this, "quarantine_rule_inbound_allow_list", false);
  public get quarantineRuleInboundAllowList() {
    return this._quarantineRuleInboundAllowList;
  }

  // quarantine_rule_outbound_allow_list - computed: true, optional: false, required: false
  private _quarantineRuleOutboundAllowList = new DataNutanixNetworkSecurityRuleQuarantineRuleOutboundAllowListStructList(this, "quarantine_rule_outbound_allow_list", false);
  public get quarantineRuleOutboundAllowList() {
    return this._quarantineRuleOutboundAllowList;
  }

  // quarantine_rule_target_group_default_internal_policy - computed: true, optional: false, required: false
  public get quarantineRuleTargetGroupDefaultInternalPolicy() {
    return this.getStringAttribute('quarantine_rule_target_group_default_internal_policy');
  }

  // quarantine_rule_target_group_filter_kind_list - computed: true, optional: false, required: false
  public get quarantineRuleTargetGroupFilterKindList() {
    return this.getListAttribute('quarantine_rule_target_group_filter_kind_list');
  }

  // quarantine_rule_target_group_filter_params - computed: true, optional: false, required: false
  private _quarantineRuleTargetGroupFilterParams = new DataNutanixNetworkSecurityRuleQuarantineRuleTargetGroupFilterParamsList(this, "quarantine_rule_target_group_filter_params", false);
  public get quarantineRuleTargetGroupFilterParams() {
    return this._quarantineRuleTargetGroupFilterParams;
  }

  // quarantine_rule_target_group_filter_type - computed: true, optional: false, required: false
  public get quarantineRuleTargetGroupFilterType() {
    return this.getStringAttribute('quarantine_rule_target_group_filter_type');
  }

  // quarantine_rule_target_group_peer_specification_type - computed: true, optional: false, required: false
  public get quarantineRuleTargetGroupPeerSpecificationType() {
    return this.getStringAttribute('quarantine_rule_target_group_peer_specification_type');
  }

  // categories - computed: false, optional: true, required: false
  private _categories = new DataNutanixNetworkSecurityRuleCategoriesList(this, "categories", true);
  public get categories() {
    return this._categories;
  }
  public putCategories(value: DataNutanixNetworkSecurityRuleCategories[] | cdktf.IResolvable) {
    this._categories.internalValue = value;
  }
  public resetCategories() {
    this._categories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      network_security_rule_id: cdktf.stringToTerraform(this._networkSecurityRuleId),
      categories: cdktf.listMapper(dataNutanixNetworkSecurityRuleCategoriesToTerraform, true)(this._categories.internalValue),
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
      network_security_rule_id: {
        value: cdktf.stringToHclTerraform(this._networkSecurityRuleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      categories: {
        value: cdktf.listMapperHcl(dataNutanixNetworkSecurityRuleCategoriesToHclTerraform, true)(this._categories.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataNutanixNetworkSecurityRuleCategoriesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
