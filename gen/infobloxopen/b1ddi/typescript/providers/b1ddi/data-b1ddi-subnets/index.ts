// https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/data-sources/subnets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataB1DdiSubnetsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure a map of filters to be applied on the search result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/data-sources/subnets#filters DataB1DdiSubnets#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/data-sources/subnets#id DataB1DdiSubnets#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Configure a map of tag filters to be applied on the search result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/data-sources/subnets#tfilters DataB1DdiSubnets#tfilters}
  */
  readonly tfilters?: { [key: string]: string };
}
export interface DataB1DdiSubnetsResultsAsmConfig {
}

export function dataB1DdiSubnetsResultsAsmConfigToTerraform(struct?: DataB1DdiSubnetsResultsAsmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiSubnetsResultsAsmConfigToHclTerraform(struct?: DataB1DdiSubnetsResultsAsmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiSubnetsResultsAsmConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB1DdiSubnetsResultsAsmConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiSubnetsResultsAsmConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // asm_threshold - computed: true, optional: false, required: false
  public get asmThreshold() {
    return this.getNumberAttribute('asm_threshold');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // enable_notification - computed: true, optional: false, required: false
  public get enableNotification() {
    return this.getBooleanAttribute('enable_notification');
  }

  // forecast_period - computed: true, optional: false, required: false
  public get forecastPeriod() {
    return this.getNumberAttribute('forecast_period');
  }

  // growth_factor - computed: true, optional: false, required: false
  public get growthFactor() {
    return this.getNumberAttribute('growth_factor');
  }

  // growth_type - computed: true, optional: false, required: false
  public get growthType() {
    return this.getStringAttribute('growth_type');
  }

  // history - computed: true, optional: false, required: false
  public get history() {
    return this.getNumberAttribute('history');
  }

  // min_total - computed: true, optional: false, required: false
  public get minTotal() {
    return this.getNumberAttribute('min_total');
  }

  // min_unused - computed: true, optional: false, required: false
  public get minUnused() {
    return this.getNumberAttribute('min_unused');
  }

  // reenable_date - computed: true, optional: false, required: false
  public get reenableDate() {
    return this.getStringAttribute('reenable_date');
  }
}

export class DataB1DdiSubnetsResultsAsmConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataB1DdiSubnetsResultsAsmConfigOutputReference {
    return new DataB1DdiSubnetsResultsAsmConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiSubnetsResultsDhcpConfigIgnoreListStruct {
}

export function dataB1DdiSubnetsResultsDhcpConfigIgnoreListStructToTerraform(struct?: DataB1DdiSubnetsResultsDhcpConfigIgnoreListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiSubnetsResultsDhcpConfigIgnoreListStructToHclTerraform(struct?: DataB1DdiSubnetsResultsDhcpConfigIgnoreListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiSubnetsResultsDhcpConfigIgnoreListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB1DdiSubnetsResultsDhcpConfigIgnoreListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiSubnetsResultsDhcpConfigIgnoreListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataB1DdiSubnetsResultsDhcpConfigIgnoreListStructList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataB1DdiSubnetsResultsDhcpConfigIgnoreListStructOutputReference {
    return new DataB1DdiSubnetsResultsDhcpConfigIgnoreListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiSubnetsResultsDhcpConfig {
}

export function dataB1DdiSubnetsResultsDhcpConfigToTerraform(struct?: DataB1DdiSubnetsResultsDhcpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiSubnetsResultsDhcpConfigToHclTerraform(struct?: DataB1DdiSubnetsResultsDhcpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiSubnetsResultsDhcpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB1DdiSubnetsResultsDhcpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiSubnetsResultsDhcpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_unknown - computed: true, optional: false, required: false
  public get allowUnknown() {
    return this.getBooleanAttribute('allow_unknown');
  }

  // filters - computed: true, optional: false, required: false
  public get filters() {
    return this.getListAttribute('filters');
  }

  // ignore_list - computed: true, optional: false, required: false
  private _ignoreList = new DataB1DdiSubnetsResultsDhcpConfigIgnoreListStructList(this, "ignore_list", false);
  public get ignoreList() {
    return this._ignoreList;
  }

  // lease_time - computed: true, optional: false, required: false
  public get leaseTime() {
    return this.getNumberAttribute('lease_time');
  }
}

export class DataB1DdiSubnetsResultsDhcpConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataB1DdiSubnetsResultsDhcpConfigOutputReference {
    return new DataB1DdiSubnetsResultsDhcpConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiSubnetsResultsDhcpOptions {
}

export function dataB1DdiSubnetsResultsDhcpOptionsToTerraform(struct?: DataB1DdiSubnetsResultsDhcpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiSubnetsResultsDhcpOptionsToHclTerraform(struct?: DataB1DdiSubnetsResultsDhcpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiSubnetsResultsDhcpOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB1DdiSubnetsResultsDhcpOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiSubnetsResultsDhcpOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // option_code - computed: true, optional: false, required: false
  public get optionCode() {
    return this.getStringAttribute('option_code');
  }

  // option_value - computed: true, optional: false, required: false
  public get optionValue() {
    return this.getStringAttribute('option_value');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataB1DdiSubnetsResultsDhcpOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataB1DdiSubnetsResultsDhcpOptionsOutputReference {
    return new DataB1DdiSubnetsResultsDhcpOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiSubnetsResultsDhcpUtilization {
}

export function dataB1DdiSubnetsResultsDhcpUtilizationToTerraform(struct?: DataB1DdiSubnetsResultsDhcpUtilization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiSubnetsResultsDhcpUtilizationToHclTerraform(struct?: DataB1DdiSubnetsResultsDhcpUtilization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiSubnetsResultsDhcpUtilizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB1DdiSubnetsResultsDhcpUtilization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiSubnetsResultsDhcpUtilization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dhcp_free - computed: true, optional: false, required: false
  public get dhcpFree() {
    return this.getStringAttribute('dhcp_free');
  }

  // dhcp_total - computed: true, optional: false, required: false
  public get dhcpTotal() {
    return this.getStringAttribute('dhcp_total');
  }

  // dhcp_used - computed: true, optional: false, required: false
  public get dhcpUsed() {
    return this.getStringAttribute('dhcp_used');
  }

  // dhcp_utilization - computed: true, optional: false, required: false
  public get dhcpUtilization() {
    return this.getNumberAttribute('dhcp_utilization');
  }
}

export class DataB1DdiSubnetsResultsDhcpUtilizationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataB1DdiSubnetsResultsDhcpUtilizationOutputReference {
    return new DataB1DdiSubnetsResultsDhcpUtilizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiSubnetsResultsInheritanceAssignedHosts {
}

export function dataB1DdiSubnetsResultsInheritanceAssignedHostsToTerraform(struct?: DataB1DdiSubnetsResultsInheritanceAssignedHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiSubnetsResultsInheritanceAssignedHostsToHclTerraform(struct?: DataB1DdiSubnetsResultsInheritanceAssignedHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiSubnetsResultsInheritanceAssignedHostsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB1DdiSubnetsResultsInheritanceAssignedHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiSubnetsResultsInheritanceAssignedHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // ophid - computed: true, optional: false, required: false
  public get ophid() {
    return this.getStringAttribute('ophid');
  }
}

export class DataB1DdiSubnetsResultsInheritanceAssignedHostsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataB1DdiSubnetsResultsInheritanceAssignedHostsOutputReference {
    return new DataB1DdiSubnetsResultsInheritanceAssignedHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmEnableBlockValue {
}

export function dataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmEnableBlockValueToTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmEnableBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmEnableBlockValueToHclTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmEnableBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmEnableBlockValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmEnableBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmEnableBlockValue | undefined) {
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

  // enable_notification - computed: true, optional: false, required: false
  public get enableNotification() {
    return this.getBooleanAttribute('enable_notification');
  }

  // reenable_date - computed: true, optional: false, required: false
  public get reenableDate() {
    return this.getStringAttribute('reenable_date');
  }
}

export class DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmEnableBlockValueList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmEnableBlockValueOutputReference {
    return new DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmEnableBlockValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmEnableBlock {
}

export function dataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmEnableBlockToTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmEnableBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmEnableBlockToHclTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmEnableBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmEnableBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmEnableBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmEnableBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmEnableBlockValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmEnableBlockList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmEnableBlockOutputReference {
    return new DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmEnableBlockOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmGrowthBlockValue {
}

export function dataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmGrowthBlockValueToTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmGrowthBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmGrowthBlockValueToHclTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmGrowthBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmGrowthBlockValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmGrowthBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmGrowthBlockValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // growth_factor - computed: true, optional: false, required: false
  public get growthFactor() {
    return this.getNumberAttribute('growth_factor');
  }

  // growth_type - computed: true, optional: false, required: false
  public get growthType() {
    return this.getStringAttribute('growth_type');
  }
}

export class DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmGrowthBlockValueList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmGrowthBlockValueOutputReference {
    return new DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmGrowthBlockValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmGrowthBlock {
}

export function dataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmGrowthBlockToTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmGrowthBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmGrowthBlockToHclTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmGrowthBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmGrowthBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmGrowthBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmGrowthBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmGrowthBlockValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmGrowthBlockList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmGrowthBlockOutputReference {
    return new DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmGrowthBlockOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmThreshold {
}

export function dataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmThresholdToTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmThresholdToHclTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmThresholdList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmThresholdOutputReference {
    return new DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmThresholdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigForecastPeriod {
}

export function dataB1DdiSubnetsResultsInheritanceSourcesAsmConfigForecastPeriodToTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigForecastPeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiSubnetsResultsInheritanceSourcesAsmConfigForecastPeriodToHclTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigForecastPeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigForecastPeriodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigForecastPeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigForecastPeriod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigForecastPeriodList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigForecastPeriodOutputReference {
    return new DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigForecastPeriodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigHistory {
}

export function dataB1DdiSubnetsResultsInheritanceSourcesAsmConfigHistoryToTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigHistory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiSubnetsResultsInheritanceSourcesAsmConfigHistoryToHclTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigHistory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigHistoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigHistory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigHistory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigHistoryList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigHistoryOutputReference {
    return new DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigHistoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigMinTotal {
}

export function dataB1DdiSubnetsResultsInheritanceSourcesAsmConfigMinTotalToTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigMinTotal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiSubnetsResultsInheritanceSourcesAsmConfigMinTotalToHclTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigMinTotal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigMinTotalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigMinTotal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigMinTotal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigMinTotalList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigMinTotalOutputReference {
    return new DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigMinTotalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigMinUnused {
}

export function dataB1DdiSubnetsResultsInheritanceSourcesAsmConfigMinUnusedToTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigMinUnused): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiSubnetsResultsInheritanceSourcesAsmConfigMinUnusedToHclTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigMinUnused): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigMinUnusedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigMinUnused | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigMinUnused | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigMinUnusedList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigMinUnusedOutputReference {
    return new DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigMinUnusedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiSubnetsResultsInheritanceSourcesAsmConfig {
}

export function dataB1DdiSubnetsResultsInheritanceSourcesAsmConfigToTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesAsmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiSubnetsResultsInheritanceSourcesAsmConfigToHclTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesAsmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB1DdiSubnetsResultsInheritanceSourcesAsmConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiSubnetsResultsInheritanceSourcesAsmConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // asm_enable_block - computed: true, optional: false, required: false
  private _asmEnableBlock = new DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmEnableBlockList(this, "asm_enable_block", false);
  public get asmEnableBlock() {
    return this._asmEnableBlock;
  }

  // asm_growth_block - computed: true, optional: false, required: false
  private _asmGrowthBlock = new DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmGrowthBlockList(this, "asm_growth_block", false);
  public get asmGrowthBlock() {
    return this._asmGrowthBlock;
  }

  // asm_threshold - computed: true, optional: false, required: false
  private _asmThreshold = new DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigAsmThresholdList(this, "asm_threshold", false);
  public get asmThreshold() {
    return this._asmThreshold;
  }

  // forecast_period - computed: true, optional: false, required: false
  private _forecastPeriod = new DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigForecastPeriodList(this, "forecast_period", false);
  public get forecastPeriod() {
    return this._forecastPeriod;
  }

  // history - computed: true, optional: false, required: false
  private _history = new DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigHistoryList(this, "history", false);
  public get history() {
    return this._history;
  }

  // min_total - computed: true, optional: false, required: false
  private _minTotal = new DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigMinTotalList(this, "min_total", false);
  public get minTotal() {
    return this._minTotal;
  }

  // min_unused - computed: true, optional: false, required: false
  private _minUnused = new DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigMinUnusedList(this, "min_unused", false);
  public get minUnused() {
    return this._minUnused;
  }
}

export class DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigOutputReference {
    return new DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiSubnetsResultsInheritanceSourcesDdnsClientUpdate {
}

export function dataB1DdiSubnetsResultsInheritanceSourcesDdnsClientUpdateToTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesDdnsClientUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiSubnetsResultsInheritanceSourcesDdnsClientUpdateToHclTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesDdnsClientUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiSubnetsResultsInheritanceSourcesDdnsClientUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB1DdiSubnetsResultsInheritanceSourcesDdnsClientUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiSubnetsResultsInheritanceSourcesDdnsClientUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataB1DdiSubnetsResultsInheritanceSourcesDdnsClientUpdateList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataB1DdiSubnetsResultsInheritanceSourcesDdnsClientUpdateOutputReference {
    return new DataB1DdiSubnetsResultsInheritanceSourcesDdnsClientUpdateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiSubnetsResultsInheritanceSourcesDdnsEnabled {
}

export function dataB1DdiSubnetsResultsInheritanceSourcesDdnsEnabledToTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesDdnsEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiSubnetsResultsInheritanceSourcesDdnsEnabledToHclTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesDdnsEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiSubnetsResultsInheritanceSourcesDdnsEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB1DdiSubnetsResultsInheritanceSourcesDdnsEnabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiSubnetsResultsInheritanceSourcesDdnsEnabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}

export class DataB1DdiSubnetsResultsInheritanceSourcesDdnsEnabledList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataB1DdiSubnetsResultsInheritanceSourcesDdnsEnabledOutputReference {
    return new DataB1DdiSubnetsResultsInheritanceSourcesDdnsEnabledOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiSubnetsResultsInheritanceSourcesDdnsHostnameBlockValue {
}

export function dataB1DdiSubnetsResultsInheritanceSourcesDdnsHostnameBlockValueToTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesDdnsHostnameBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiSubnetsResultsInheritanceSourcesDdnsHostnameBlockValueToHclTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesDdnsHostnameBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiSubnetsResultsInheritanceSourcesDdnsHostnameBlockValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB1DdiSubnetsResultsInheritanceSourcesDdnsHostnameBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiSubnetsResultsInheritanceSourcesDdnsHostnameBlockValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ddns_generate_name - computed: true, optional: false, required: false
  public get ddnsGenerateName() {
    return this.getBooleanAttribute('ddns_generate_name');
  }

  // ddns_generated_prefix - computed: true, optional: false, required: false
  public get ddnsGeneratedPrefix() {
    return this.getStringAttribute('ddns_generated_prefix');
  }
}

export class DataB1DdiSubnetsResultsInheritanceSourcesDdnsHostnameBlockValueList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataB1DdiSubnetsResultsInheritanceSourcesDdnsHostnameBlockValueOutputReference {
    return new DataB1DdiSubnetsResultsInheritanceSourcesDdnsHostnameBlockValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiSubnetsResultsInheritanceSourcesDdnsHostnameBlock {
}

export function dataB1DdiSubnetsResultsInheritanceSourcesDdnsHostnameBlockToTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesDdnsHostnameBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiSubnetsResultsInheritanceSourcesDdnsHostnameBlockToHclTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesDdnsHostnameBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiSubnetsResultsInheritanceSourcesDdnsHostnameBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB1DdiSubnetsResultsInheritanceSourcesDdnsHostnameBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiSubnetsResultsInheritanceSourcesDdnsHostnameBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataB1DdiSubnetsResultsInheritanceSourcesDdnsHostnameBlockValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class DataB1DdiSubnetsResultsInheritanceSourcesDdnsHostnameBlockList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataB1DdiSubnetsResultsInheritanceSourcesDdnsHostnameBlockOutputReference {
    return new DataB1DdiSubnetsResultsInheritanceSourcesDdnsHostnameBlockOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiSubnetsResultsInheritanceSourcesDdnsUpdateBlockValue {
}

export function dataB1DdiSubnetsResultsInheritanceSourcesDdnsUpdateBlockValueToTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesDdnsUpdateBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiSubnetsResultsInheritanceSourcesDdnsUpdateBlockValueToHclTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesDdnsUpdateBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiSubnetsResultsInheritanceSourcesDdnsUpdateBlockValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB1DdiSubnetsResultsInheritanceSourcesDdnsUpdateBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiSubnetsResultsInheritanceSourcesDdnsUpdateBlockValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ddns_domain - computed: true, optional: false, required: false
  public get ddnsDomain() {
    return this.getStringAttribute('ddns_domain');
  }

  // ddns_send_updates - computed: true, optional: false, required: false
  public get ddnsSendUpdates() {
    return this.getBooleanAttribute('ddns_send_updates');
  }
}

export class DataB1DdiSubnetsResultsInheritanceSourcesDdnsUpdateBlockValueList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataB1DdiSubnetsResultsInheritanceSourcesDdnsUpdateBlockValueOutputReference {
    return new DataB1DdiSubnetsResultsInheritanceSourcesDdnsUpdateBlockValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiSubnetsResultsInheritanceSourcesDdnsUpdateBlock {
}

export function dataB1DdiSubnetsResultsInheritanceSourcesDdnsUpdateBlockToTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesDdnsUpdateBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiSubnetsResultsInheritanceSourcesDdnsUpdateBlockToHclTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesDdnsUpdateBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiSubnetsResultsInheritanceSourcesDdnsUpdateBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB1DdiSubnetsResultsInheritanceSourcesDdnsUpdateBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiSubnetsResultsInheritanceSourcesDdnsUpdateBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataB1DdiSubnetsResultsInheritanceSourcesDdnsUpdateBlockValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class DataB1DdiSubnetsResultsInheritanceSourcesDdnsUpdateBlockList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataB1DdiSubnetsResultsInheritanceSourcesDdnsUpdateBlockOutputReference {
    return new DataB1DdiSubnetsResultsInheritanceSourcesDdnsUpdateBlockOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiSubnetsResultsInheritanceSourcesDdnsUpdateOnRenew {
}

export function dataB1DdiSubnetsResultsInheritanceSourcesDdnsUpdateOnRenewToTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesDdnsUpdateOnRenew): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiSubnetsResultsInheritanceSourcesDdnsUpdateOnRenewToHclTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesDdnsUpdateOnRenew): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiSubnetsResultsInheritanceSourcesDdnsUpdateOnRenewOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB1DdiSubnetsResultsInheritanceSourcesDdnsUpdateOnRenew | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiSubnetsResultsInheritanceSourcesDdnsUpdateOnRenew | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}

export class DataB1DdiSubnetsResultsInheritanceSourcesDdnsUpdateOnRenewList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataB1DdiSubnetsResultsInheritanceSourcesDdnsUpdateOnRenewOutputReference {
    return new DataB1DdiSubnetsResultsInheritanceSourcesDdnsUpdateOnRenewOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiSubnetsResultsInheritanceSourcesDdnsUseConflictResolution {
}

export function dataB1DdiSubnetsResultsInheritanceSourcesDdnsUseConflictResolutionToTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesDdnsUseConflictResolution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiSubnetsResultsInheritanceSourcesDdnsUseConflictResolutionToHclTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesDdnsUseConflictResolution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiSubnetsResultsInheritanceSourcesDdnsUseConflictResolutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB1DdiSubnetsResultsInheritanceSourcesDdnsUseConflictResolution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiSubnetsResultsInheritanceSourcesDdnsUseConflictResolution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}

export class DataB1DdiSubnetsResultsInheritanceSourcesDdnsUseConflictResolutionList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataB1DdiSubnetsResultsInheritanceSourcesDdnsUseConflictResolutionOutputReference {
    return new DataB1DdiSubnetsResultsInheritanceSourcesDdnsUseConflictResolutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigAllowUnknown {
}

export function dataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigAllowUnknownToTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigAllowUnknown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigAllowUnknownToHclTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigAllowUnknown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigAllowUnknownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigAllowUnknown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigAllowUnknown | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}

export class DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigAllowUnknownList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigAllowUnknownOutputReference {
    return new DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigAllowUnknownOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigFilters {
}

export function dataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigFiltersToTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigFiltersToHclTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getListAttribute('value');
  }
}

export class DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigFiltersList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigFiltersOutputReference {
    return new DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigIgnoreListValue {
}

export function dataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigIgnoreListValueToTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigIgnoreListValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigIgnoreListValueToHclTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigIgnoreListValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigIgnoreListValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigIgnoreListValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigIgnoreListValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigIgnoreListValueList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigIgnoreListValueOutputReference {
    return new DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigIgnoreListValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigIgnoreListStruct {
}

export function dataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigIgnoreListStructToTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigIgnoreListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigIgnoreListStructToHclTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigIgnoreListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigIgnoreListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigIgnoreListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigIgnoreListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigIgnoreListValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigIgnoreListStructList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigIgnoreListStructOutputReference {
    return new DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigIgnoreListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigLeaseTime {
}

export function dataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigLeaseTimeToTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigLeaseTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigLeaseTimeToHclTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigLeaseTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigLeaseTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigLeaseTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigLeaseTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigLeaseTimeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigLeaseTimeOutputReference {
    return new DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigLeaseTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfig {
}

export function dataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigToTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigToHclTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_unknown - computed: true, optional: false, required: false
  private _allowUnknown = new DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigAllowUnknownList(this, "allow_unknown", false);
  public get allowUnknown() {
    return this._allowUnknown;
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }

  // ignore_list - computed: true, optional: false, required: false
  private _ignoreList = new DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigIgnoreListStructList(this, "ignore_list", false);
  public get ignoreList() {
    return this._ignoreList;
  }

  // lease_time - computed: true, optional: false, required: false
  private _leaseTime = new DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigLeaseTimeList(this, "lease_time", false);
  public get leaseTime() {
    return this._leaseTime;
  }
}

export class DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigOutputReference {
    return new DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiSubnetsResultsInheritanceSourcesDhcpOptionsValueValue {
}

export function dataB1DdiSubnetsResultsInheritanceSourcesDhcpOptionsValueValueToTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesDhcpOptionsValueValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiSubnetsResultsInheritanceSourcesDhcpOptionsValueValueToHclTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesDhcpOptionsValueValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiSubnetsResultsInheritanceSourcesDhcpOptionsValueValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB1DdiSubnetsResultsInheritanceSourcesDhcpOptionsValueValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiSubnetsResultsInheritanceSourcesDhcpOptionsValueValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // option_code - computed: true, optional: false, required: false
  public get optionCode() {
    return this.getStringAttribute('option_code');
  }

  // option_value - computed: true, optional: false, required: false
  public get optionValue() {
    return this.getStringAttribute('option_value');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataB1DdiSubnetsResultsInheritanceSourcesDhcpOptionsValueValueList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataB1DdiSubnetsResultsInheritanceSourcesDhcpOptionsValueValueOutputReference {
    return new DataB1DdiSubnetsResultsInheritanceSourcesDhcpOptionsValueValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiSubnetsResultsInheritanceSourcesDhcpOptionsValue {
}

export function dataB1DdiSubnetsResultsInheritanceSourcesDhcpOptionsValueToTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesDhcpOptionsValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiSubnetsResultsInheritanceSourcesDhcpOptionsValueToHclTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesDhcpOptionsValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiSubnetsResultsInheritanceSourcesDhcpOptionsValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB1DdiSubnetsResultsInheritanceSourcesDhcpOptionsValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiSubnetsResultsInheritanceSourcesDhcpOptionsValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataB1DdiSubnetsResultsInheritanceSourcesDhcpOptionsValueValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class DataB1DdiSubnetsResultsInheritanceSourcesDhcpOptionsValueList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataB1DdiSubnetsResultsInheritanceSourcesDhcpOptionsValueOutputReference {
    return new DataB1DdiSubnetsResultsInheritanceSourcesDhcpOptionsValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiSubnetsResultsInheritanceSourcesDhcpOptions {
}

export function dataB1DdiSubnetsResultsInheritanceSourcesDhcpOptionsToTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesDhcpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiSubnetsResultsInheritanceSourcesDhcpOptionsToHclTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesDhcpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiSubnetsResultsInheritanceSourcesDhcpOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB1DdiSubnetsResultsInheritanceSourcesDhcpOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiSubnetsResultsInheritanceSourcesDhcpOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataB1DdiSubnetsResultsInheritanceSourcesDhcpOptionsValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class DataB1DdiSubnetsResultsInheritanceSourcesDhcpOptionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataB1DdiSubnetsResultsInheritanceSourcesDhcpOptionsOutputReference {
    return new DataB1DdiSubnetsResultsInheritanceSourcesDhcpOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiSubnetsResultsInheritanceSourcesHeaderOptionFilename {
}

export function dataB1DdiSubnetsResultsInheritanceSourcesHeaderOptionFilenameToTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesHeaderOptionFilename): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiSubnetsResultsInheritanceSourcesHeaderOptionFilenameToHclTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesHeaderOptionFilename): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiSubnetsResultsInheritanceSourcesHeaderOptionFilenameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB1DdiSubnetsResultsInheritanceSourcesHeaderOptionFilename | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiSubnetsResultsInheritanceSourcesHeaderOptionFilename | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataB1DdiSubnetsResultsInheritanceSourcesHeaderOptionFilenameList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataB1DdiSubnetsResultsInheritanceSourcesHeaderOptionFilenameOutputReference {
    return new DataB1DdiSubnetsResultsInheritanceSourcesHeaderOptionFilenameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiSubnetsResultsInheritanceSourcesHeaderOptionServerAddress {
}

export function dataB1DdiSubnetsResultsInheritanceSourcesHeaderOptionServerAddressToTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesHeaderOptionServerAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiSubnetsResultsInheritanceSourcesHeaderOptionServerAddressToHclTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesHeaderOptionServerAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiSubnetsResultsInheritanceSourcesHeaderOptionServerAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB1DdiSubnetsResultsInheritanceSourcesHeaderOptionServerAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiSubnetsResultsInheritanceSourcesHeaderOptionServerAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataB1DdiSubnetsResultsInheritanceSourcesHeaderOptionServerAddressList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataB1DdiSubnetsResultsInheritanceSourcesHeaderOptionServerAddressOutputReference {
    return new DataB1DdiSubnetsResultsInheritanceSourcesHeaderOptionServerAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiSubnetsResultsInheritanceSourcesHeaderOptionServerName {
}

export function dataB1DdiSubnetsResultsInheritanceSourcesHeaderOptionServerNameToTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesHeaderOptionServerName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiSubnetsResultsInheritanceSourcesHeaderOptionServerNameToHclTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesHeaderOptionServerName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiSubnetsResultsInheritanceSourcesHeaderOptionServerNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB1DdiSubnetsResultsInheritanceSourcesHeaderOptionServerName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiSubnetsResultsInheritanceSourcesHeaderOptionServerName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataB1DdiSubnetsResultsInheritanceSourcesHeaderOptionServerNameList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataB1DdiSubnetsResultsInheritanceSourcesHeaderOptionServerNameOutputReference {
    return new DataB1DdiSubnetsResultsInheritanceSourcesHeaderOptionServerNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiSubnetsResultsInheritanceSourcesHostnameRewriteBlockValue {
}

export function dataB1DdiSubnetsResultsInheritanceSourcesHostnameRewriteBlockValueToTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesHostnameRewriteBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiSubnetsResultsInheritanceSourcesHostnameRewriteBlockValueToHclTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesHostnameRewriteBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiSubnetsResultsInheritanceSourcesHostnameRewriteBlockValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB1DdiSubnetsResultsInheritanceSourcesHostnameRewriteBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiSubnetsResultsInheritanceSourcesHostnameRewriteBlockValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hostname_rewrite_char - computed: true, optional: false, required: false
  public get hostnameRewriteChar() {
    return this.getStringAttribute('hostname_rewrite_char');
  }

  // hostname_rewrite_enabled - computed: true, optional: false, required: false
  public get hostnameRewriteEnabled() {
    return this.getBooleanAttribute('hostname_rewrite_enabled');
  }

  // hostname_rewrite_regex - computed: true, optional: false, required: false
  public get hostnameRewriteRegex() {
    return this.getStringAttribute('hostname_rewrite_regex');
  }
}

export class DataB1DdiSubnetsResultsInheritanceSourcesHostnameRewriteBlockValueList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataB1DdiSubnetsResultsInheritanceSourcesHostnameRewriteBlockValueOutputReference {
    return new DataB1DdiSubnetsResultsInheritanceSourcesHostnameRewriteBlockValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiSubnetsResultsInheritanceSourcesHostnameRewriteBlock {
}

export function dataB1DdiSubnetsResultsInheritanceSourcesHostnameRewriteBlockToTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesHostnameRewriteBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiSubnetsResultsInheritanceSourcesHostnameRewriteBlockToHclTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSourcesHostnameRewriteBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiSubnetsResultsInheritanceSourcesHostnameRewriteBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB1DdiSubnetsResultsInheritanceSourcesHostnameRewriteBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiSubnetsResultsInheritanceSourcesHostnameRewriteBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataB1DdiSubnetsResultsInheritanceSourcesHostnameRewriteBlockValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class DataB1DdiSubnetsResultsInheritanceSourcesHostnameRewriteBlockList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataB1DdiSubnetsResultsInheritanceSourcesHostnameRewriteBlockOutputReference {
    return new DataB1DdiSubnetsResultsInheritanceSourcesHostnameRewriteBlockOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiSubnetsResultsInheritanceSources {
}

export function dataB1DdiSubnetsResultsInheritanceSourcesToTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiSubnetsResultsInheritanceSourcesToHclTerraform(struct?: DataB1DdiSubnetsResultsInheritanceSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiSubnetsResultsInheritanceSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB1DdiSubnetsResultsInheritanceSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiSubnetsResultsInheritanceSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // asm_config - computed: true, optional: false, required: false
  private _asmConfig = new DataB1DdiSubnetsResultsInheritanceSourcesAsmConfigList(this, "asm_config", false);
  public get asmConfig() {
    return this._asmConfig;
  }

  // ddns_client_update - computed: true, optional: false, required: false
  private _ddnsClientUpdate = new DataB1DdiSubnetsResultsInheritanceSourcesDdnsClientUpdateList(this, "ddns_client_update", false);
  public get ddnsClientUpdate() {
    return this._ddnsClientUpdate;
  }

  // ddns_enabled - computed: true, optional: false, required: false
  private _ddnsEnabled = new DataB1DdiSubnetsResultsInheritanceSourcesDdnsEnabledList(this, "ddns_enabled", false);
  public get ddnsEnabled() {
    return this._ddnsEnabled;
  }

  // ddns_hostname_block - computed: true, optional: false, required: false
  private _ddnsHostnameBlock = new DataB1DdiSubnetsResultsInheritanceSourcesDdnsHostnameBlockList(this, "ddns_hostname_block", false);
  public get ddnsHostnameBlock() {
    return this._ddnsHostnameBlock;
  }

  // ddns_update_block - computed: true, optional: false, required: false
  private _ddnsUpdateBlock = new DataB1DdiSubnetsResultsInheritanceSourcesDdnsUpdateBlockList(this, "ddns_update_block", false);
  public get ddnsUpdateBlock() {
    return this._ddnsUpdateBlock;
  }

  // ddns_update_on_renew - computed: true, optional: false, required: false
  private _ddnsUpdateOnRenew = new DataB1DdiSubnetsResultsInheritanceSourcesDdnsUpdateOnRenewList(this, "ddns_update_on_renew", false);
  public get ddnsUpdateOnRenew() {
    return this._ddnsUpdateOnRenew;
  }

  // ddns_use_conflict_resolution - computed: true, optional: false, required: false
  private _ddnsUseConflictResolution = new DataB1DdiSubnetsResultsInheritanceSourcesDdnsUseConflictResolutionList(this, "ddns_use_conflict_resolution", false);
  public get ddnsUseConflictResolution() {
    return this._ddnsUseConflictResolution;
  }

  // dhcp_config - computed: true, optional: false, required: false
  private _dhcpConfig = new DataB1DdiSubnetsResultsInheritanceSourcesDhcpConfigList(this, "dhcp_config", false);
  public get dhcpConfig() {
    return this._dhcpConfig;
  }

  // dhcp_options - computed: true, optional: false, required: false
  private _dhcpOptions = new DataB1DdiSubnetsResultsInheritanceSourcesDhcpOptionsList(this, "dhcp_options", false);
  public get dhcpOptions() {
    return this._dhcpOptions;
  }

  // header_option_filename - computed: true, optional: false, required: false
  private _headerOptionFilename = new DataB1DdiSubnetsResultsInheritanceSourcesHeaderOptionFilenameList(this, "header_option_filename", false);
  public get headerOptionFilename() {
    return this._headerOptionFilename;
  }

  // header_option_server_address - computed: true, optional: false, required: false
  private _headerOptionServerAddress = new DataB1DdiSubnetsResultsInheritanceSourcesHeaderOptionServerAddressList(this, "header_option_server_address", false);
  public get headerOptionServerAddress() {
    return this._headerOptionServerAddress;
  }

  // header_option_server_name - computed: true, optional: false, required: false
  private _headerOptionServerName = new DataB1DdiSubnetsResultsInheritanceSourcesHeaderOptionServerNameList(this, "header_option_server_name", false);
  public get headerOptionServerName() {
    return this._headerOptionServerName;
  }

  // hostname_rewrite_block - computed: true, optional: false, required: false
  private _hostnameRewriteBlock = new DataB1DdiSubnetsResultsInheritanceSourcesHostnameRewriteBlockList(this, "hostname_rewrite_block", false);
  public get hostnameRewriteBlock() {
    return this._hostnameRewriteBlock;
  }
}

export class DataB1DdiSubnetsResultsInheritanceSourcesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataB1DdiSubnetsResultsInheritanceSourcesOutputReference {
    return new DataB1DdiSubnetsResultsInheritanceSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiSubnetsResultsThreshold {
}

export function dataB1DdiSubnetsResultsThresholdToTerraform(struct?: DataB1DdiSubnetsResultsThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiSubnetsResultsThresholdToHclTerraform(struct?: DataB1DdiSubnetsResultsThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiSubnetsResultsThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB1DdiSubnetsResultsThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiSubnetsResultsThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // high - computed: true, optional: false, required: false
  public get high() {
    return this.getNumberAttribute('high');
  }

  // low - computed: true, optional: false, required: false
  public get low() {
    return this.getNumberAttribute('low');
  }
}

export class DataB1DdiSubnetsResultsThresholdList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataB1DdiSubnetsResultsThresholdOutputReference {
    return new DataB1DdiSubnetsResultsThresholdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiSubnetsResultsUtilization {
}

export function dataB1DdiSubnetsResultsUtilizationToTerraform(struct?: DataB1DdiSubnetsResultsUtilization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiSubnetsResultsUtilizationToHclTerraform(struct?: DataB1DdiSubnetsResultsUtilization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiSubnetsResultsUtilizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB1DdiSubnetsResultsUtilization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiSubnetsResultsUtilization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // abandon_utilization - computed: true, optional: false, required: false
  public get abandonUtilization() {
    return this.getNumberAttribute('abandon_utilization');
  }

  // abandoned - computed: true, optional: false, required: false
  public get abandoned() {
    return this.getStringAttribute('abandoned');
  }

  // dynamic - computed: true, optional: false, required: false
  public get dynamic() {
    return this.getStringAttribute('dynamic');
  }

  // free - computed: true, optional: false, required: false
  public get free() {
    return this.getStringAttribute('free');
  }

  // static - computed: true, optional: false, required: false
  public get static() {
    return this.getStringAttribute('static');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getStringAttribute('total');
  }

  // used - computed: true, optional: false, required: false
  public get used() {
    return this.getStringAttribute('used');
  }

  // utilization - computed: true, optional: false, required: false
  public get utilization() {
    return this.getNumberAttribute('utilization');
  }
}

export class DataB1DdiSubnetsResultsUtilizationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataB1DdiSubnetsResultsUtilizationOutputReference {
    return new DataB1DdiSubnetsResultsUtilizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiSubnetsResults {
}

export function dataB1DdiSubnetsResultsToTerraform(struct?: DataB1DdiSubnetsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiSubnetsResultsToHclTerraform(struct?: DataB1DdiSubnetsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiSubnetsResultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB1DdiSubnetsResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiSubnetsResults | undefined) {
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

  // asm_config - computed: true, optional: false, required: false
  private _asmConfig = new DataB1DdiSubnetsResultsAsmConfigList(this, "asm_config", false);
  public get asmConfig() {
    return this._asmConfig;
  }

  // asm_scope_flag - computed: true, optional: false, required: false
  public get asmScopeFlag() {
    return this.getNumberAttribute('asm_scope_flag');
  }

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getNumberAttribute('cidr');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // ddns_client_update - computed: true, optional: false, required: false
  public get ddnsClientUpdate() {
    return this.getStringAttribute('ddns_client_update');
  }

  // ddns_domain - computed: true, optional: false, required: false
  public get ddnsDomain() {
    return this.getStringAttribute('ddns_domain');
  }

  // ddns_generate_name - computed: true, optional: false, required: false
  public get ddnsGenerateName() {
    return this.getBooleanAttribute('ddns_generate_name');
  }

  // ddns_generated_prefix - computed: true, optional: false, required: false
  public get ddnsGeneratedPrefix() {
    return this.getStringAttribute('ddns_generated_prefix');
  }

  // ddns_send_updates - computed: true, optional: false, required: false
  public get ddnsSendUpdates() {
    return this.getBooleanAttribute('ddns_send_updates');
  }

  // ddns_update_on_renew - computed: true, optional: false, required: false
  public get ddnsUpdateOnRenew() {
    return this.getBooleanAttribute('ddns_update_on_renew');
  }

  // ddns_use_conflict_resolution - computed: true, optional: false, required: false
  public get ddnsUseConflictResolution() {
    return this.getBooleanAttribute('ddns_use_conflict_resolution');
  }

  // dhcp_config - computed: true, optional: false, required: false
  private _dhcpConfig = new DataB1DdiSubnetsResultsDhcpConfigList(this, "dhcp_config", false);
  public get dhcpConfig() {
    return this._dhcpConfig;
  }

  // dhcp_host - computed: true, optional: false, required: false
  public get dhcpHost() {
    return this.getStringAttribute('dhcp_host');
  }

  // dhcp_options - computed: true, optional: false, required: false
  private _dhcpOptions = new DataB1DdiSubnetsResultsDhcpOptionsList(this, "dhcp_options", false);
  public get dhcpOptions() {
    return this._dhcpOptions;
  }

  // dhcp_utilization - computed: true, optional: false, required: false
  private _dhcpUtilization = new DataB1DdiSubnetsResultsDhcpUtilizationList(this, "dhcp_utilization", false);
  public get dhcpUtilization() {
    return this._dhcpUtilization;
  }

  // header_option_filename - computed: true, optional: false, required: false
  public get headerOptionFilename() {
    return this.getStringAttribute('header_option_filename');
  }

  // header_option_server_address - computed: true, optional: false, required: false
  public get headerOptionServerAddress() {
    return this.getStringAttribute('header_option_server_address');
  }

  // header_option_server_name - computed: true, optional: false, required: false
  public get headerOptionServerName() {
    return this.getStringAttribute('header_option_server_name');
  }

  // hostname_rewrite_char - computed: true, optional: false, required: false
  public get hostnameRewriteChar() {
    return this.getStringAttribute('hostname_rewrite_char');
  }

  // hostname_rewrite_enabled - computed: true, optional: false, required: false
  public get hostnameRewriteEnabled() {
    return this.getBooleanAttribute('hostname_rewrite_enabled');
  }

  // hostname_rewrite_regex - computed: true, optional: false, required: false
  public get hostnameRewriteRegex() {
    return this.getStringAttribute('hostname_rewrite_regex');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inheritance_assigned_hosts - computed: true, optional: false, required: false
  private _inheritanceAssignedHosts = new DataB1DdiSubnetsResultsInheritanceAssignedHostsList(this, "inheritance_assigned_hosts", false);
  public get inheritanceAssignedHosts() {
    return this._inheritanceAssignedHosts;
  }

  // inheritance_parent - computed: true, optional: false, required: false
  public get inheritanceParent() {
    return this.getStringAttribute('inheritance_parent');
  }

  // inheritance_sources - computed: true, optional: false, required: false
  private _inheritanceSources = new DataB1DdiSubnetsResultsInheritanceSourcesList(this, "inheritance_sources", false);
  public get inheritanceSources() {
    return this._inheritanceSources;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent - computed: true, optional: false, required: false
  public get parent() {
    return this.getStringAttribute('parent');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // space - computed: true, optional: false, required: false
  public get space() {
    return this.getStringAttribute('space');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // threshold - computed: true, optional: false, required: false
  private _threshold = new DataB1DdiSubnetsResultsThresholdList(this, "threshold", false);
  public get threshold() {
    return this._threshold;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // utilization - computed: true, optional: false, required: false
  private _utilization = new DataB1DdiSubnetsResultsUtilizationList(this, "utilization", false);
  public get utilization() {
    return this._utilization;
  }
}

export class DataB1DdiSubnetsResultsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataB1DdiSubnetsResultsOutputReference {
    return new DataB1DdiSubnetsResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/data-sources/subnets b1ddi_subnets}
*/
export class DataB1DdiSubnets extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "b1ddi_subnets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataB1DdiSubnets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataB1DdiSubnets to import
  * @param importFromId The id of the existing DataB1DdiSubnets that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/data-sources/subnets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataB1DdiSubnets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "b1ddi_subnets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/data-sources/subnets b1ddi_subnets} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataB1DdiSubnetsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataB1DdiSubnetsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'b1ddi_subnets',
      terraformGeneratorMetadata: {
        providerName: 'b1ddi',
        providerVersion: '0.1.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filters = config.filters;
    this._id = config.id;
    this._tfilters = config.tfilters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filters - computed: false, optional: true, required: false
  private _filters?: { [key: string]: string }; 
  public get filters() {
    return this.getStringMapAttribute('filters');
  }
  public set filters(value: { [key: string]: string }) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
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

  // results - computed: true, optional: false, required: false
  private _results = new DataB1DdiSubnetsResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // tfilters - computed: false, optional: true, required: false
  private _tfilters?: { [key: string]: string }; 
  public get tfilters() {
    return this.getStringMapAttribute('tfilters');
  }
  public set tfilters(value: { [key: string]: string }) {
    this._tfilters = value;
  }
  public resetTfilters() {
    this._tfilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tfiltersInput() {
    return this._tfilters;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._filters),
      id: cdktf.stringToTerraform(this._id),
      tfilters: cdktf.hashMapper(cdktf.stringToTerraform)(this._tfilters),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._filters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tfilters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tfilters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
