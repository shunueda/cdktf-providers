// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/cms_hybrid_monitor_sls_tasks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudCmsHybridMonitorSlsTasksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/cms_hybrid_monitor_sls_tasks#id DataAlicloudCmsHybridMonitorSlsTasks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/cms_hybrid_monitor_sls_tasks#ids DataAlicloudCmsHybridMonitorSlsTasks#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/cms_hybrid_monitor_sls_tasks#keyword DataAlicloudCmsHybridMonitorSlsTasks#keyword}
  */
  readonly keyword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/cms_hybrid_monitor_sls_tasks#namespace DataAlicloudCmsHybridMonitorSlsTasks#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/cms_hybrid_monitor_sls_tasks#output_file DataAlicloudCmsHybridMonitorSlsTasks#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/cms_hybrid_monitor_sls_tasks#page_number DataAlicloudCmsHybridMonitorSlsTasks#page_number}
  */
  readonly pageNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/cms_hybrid_monitor_sls_tasks#page_size DataAlicloudCmsHybridMonitorSlsTasks#page_size}
  */
  readonly pageSize?: number;
}
export interface DataAlicloudCmsHybridMonitorSlsTasksTasksAttachLabels {
}

export function dataAlicloudCmsHybridMonitorSlsTasksTasksAttachLabelsToTerraform(struct?: DataAlicloudCmsHybridMonitorSlsTasksTasksAttachLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCmsHybridMonitorSlsTasksTasksAttachLabelsToHclTerraform(struct?: DataAlicloudCmsHybridMonitorSlsTasksTasksAttachLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCmsHybridMonitorSlsTasksTasksAttachLabelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAlicloudCmsHybridMonitorSlsTasksTasksAttachLabels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCmsHybridMonitorSlsTasksTasksAttachLabels | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAlicloudCmsHybridMonitorSlsTasksTasksAttachLabelsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAlicloudCmsHybridMonitorSlsTasksTasksAttachLabelsOutputReference {
    return new DataAlicloudCmsHybridMonitorSlsTasksTasksAttachLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudCmsHybridMonitorSlsTasksTasksMatchExpress {
}

export function dataAlicloudCmsHybridMonitorSlsTasksTasksMatchExpressToTerraform(struct?: DataAlicloudCmsHybridMonitorSlsTasksTasksMatchExpress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCmsHybridMonitorSlsTasksTasksMatchExpressToHclTerraform(struct?: DataAlicloudCmsHybridMonitorSlsTasksTasksMatchExpress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCmsHybridMonitorSlsTasksTasksMatchExpressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAlicloudCmsHybridMonitorSlsTasksTasksMatchExpress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCmsHybridMonitorSlsTasksTasksMatchExpress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // function - computed: true, optional: false, required: false
  public get function() {
    return this.getStringAttribute('function');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAlicloudCmsHybridMonitorSlsTasksTasksMatchExpressList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAlicloudCmsHybridMonitorSlsTasksTasksMatchExpressOutputReference {
    return new DataAlicloudCmsHybridMonitorSlsTasksTasksMatchExpressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigExpress {
}

export function dataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigExpressToTerraform(struct?: DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigExpress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigExpressToHclTerraform(struct?: DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigExpress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigExpressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigExpress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigExpress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // express - computed: true, optional: false, required: false
  public get express() {
    return this.getStringAttribute('express');
  }
}

export class DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigExpressList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigExpressOutputReference {
    return new DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigExpressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigFilterFilters {
}

export function dataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigFilterFiltersToTerraform(struct?: DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigFilterFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigFilterFiltersToHclTerraform(struct?: DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigFilterFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigFilterFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigFilterFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigFilterFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // sls_key_name - computed: true, optional: false, required: false
  public get slsKeyName() {
    return this.getStringAttribute('sls_key_name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigFilterFiltersList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigFilterFiltersOutputReference {
    return new DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigFilterFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigFilter {
}

export function dataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigFilterToTerraform(struct?: DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigFilterToHclTerraform(struct?: DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigFilterFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }

  // relation - computed: true, optional: false, required: false
  public get relation() {
    return this.getStringAttribute('relation');
  }
}

export class DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigFilterList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigFilterOutputReference {
    return new DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigGroupBy {
}

export function dataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigGroupByToTerraform(struct?: DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigGroupBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigGroupByToHclTerraform(struct?: DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigGroupBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigGroupByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigGroupBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigGroupBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // sls_key_name - computed: true, optional: false, required: false
  public get slsKeyName() {
    return this.getStringAttribute('sls_key_name');
  }
}

export class DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigGroupByList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigGroupByOutputReference {
    return new DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigStatistics {
}

export function dataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigStatisticsToTerraform(struct?: DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigStatisticsToHclTerraform(struct?: DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigStatisticsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // function - computed: true, optional: false, required: false
  public get function() {
    return this.getStringAttribute('function');
  }

  // parameter_one - computed: true, optional: false, required: false
  public get parameterOne() {
    return this.getStringAttribute('parameter_one');
  }

  // parameter_two - computed: true, optional: false, required: false
  public get parameterTwo() {
    return this.getStringAttribute('parameter_two');
  }

  // sls_key_name - computed: true, optional: false, required: false
  public get slsKeyName() {
    return this.getStringAttribute('sls_key_name');
  }
}

export class DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigStatisticsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigStatisticsOutputReference {
    return new DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfig {
}

export function dataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigToTerraform(struct?: DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigToHclTerraform(struct?: DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // express - computed: true, optional: false, required: false
  private _express = new DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigExpressList(this, "express", false);
  public get express() {
    return this._express;
  }

  // filter - computed: true, optional: false, required: false
  private _filter = new DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }

  // group_by - computed: true, optional: false, required: false
  private _groupBy = new DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }

  // statistics - computed: true, optional: false, required: false
  private _statistics = new DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigStatisticsList(this, "statistics", false);
  public get statistics() {
    return this._statistics;
  }
}

export class DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigOutputReference {
    return new DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudCmsHybridMonitorSlsTasksTasks {
}

export function dataAlicloudCmsHybridMonitorSlsTasksTasksToTerraform(struct?: DataAlicloudCmsHybridMonitorSlsTasksTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCmsHybridMonitorSlsTasksTasksToHclTerraform(struct?: DataAlicloudCmsHybridMonitorSlsTasksTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCmsHybridMonitorSlsTasksTasksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAlicloudCmsHybridMonitorSlsTasksTasks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCmsHybridMonitorSlsTasksTasks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attach_labels - computed: true, optional: false, required: false
  private _attachLabels = new DataAlicloudCmsHybridMonitorSlsTasksTasksAttachLabelsList(this, "attach_labels", false);
  public get attachLabels() {
    return this._attachLabels;
  }

  // collect_interval - computed: true, optional: false, required: false
  public get collectInterval() {
    return this.getNumberAttribute('collect_interval');
  }

  // collect_target_endpoint - computed: true, optional: false, required: false
  public get collectTargetEndpoint() {
    return this.getStringAttribute('collect_target_endpoint');
  }

  // collect_target_path - computed: true, optional: false, required: false
  public get collectTargetPath() {
    return this.getStringAttribute('collect_target_path');
  }

  // collect_target_type - computed: true, optional: false, required: false
  public get collectTargetType() {
    return this.getStringAttribute('collect_target_type');
  }

  // collect_timout - computed: true, optional: false, required: false
  public get collectTimout() {
    return this.getNumberAttribute('collect_timout');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // extra_info - computed: true, optional: false, required: false
  public get extraInfo() {
    return this.getStringAttribute('extra_info');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // hybrid_monitor_sls_task_id - computed: true, optional: false, required: false
  public get hybridMonitorSlsTaskId() {
    return this.getStringAttribute('hybrid_monitor_sls_task_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // log_file_path - computed: true, optional: false, required: false
  public get logFilePath() {
    return this.getStringAttribute('log_file_path');
  }

  // log_process - computed: true, optional: false, required: false
  public get logProcess() {
    return this.getStringAttribute('log_process');
  }

  // log_sample - computed: true, optional: false, required: false
  public get logSample() {
    return this.getStringAttribute('log_sample');
  }

  // log_split - computed: true, optional: false, required: false
  public get logSplit() {
    return this.getStringAttribute('log_split');
  }

  // match_express - computed: true, optional: false, required: false
  private _matchExpress = new DataAlicloudCmsHybridMonitorSlsTasksTasksMatchExpressList(this, "match_express", false);
  public get matchExpress() {
    return this._matchExpress;
  }

  // match_express_relation - computed: true, optional: false, required: false
  public get matchExpressRelation() {
    return this.getStringAttribute('match_express_relation');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // sls_process - computed: true, optional: false, required: false
  public get slsProcess() {
    return this.getStringAttribute('sls_process');
  }

  // sls_process_config - computed: true, optional: false, required: false
  private _slsProcessConfig = new DataAlicloudCmsHybridMonitorSlsTasksTasksSlsProcessConfigList(this, "sls_process_config", false);
  public get slsProcessConfig() {
    return this._slsProcessConfig;
  }

  // task_name - computed: true, optional: false, required: false
  public get taskName() {
    return this.getStringAttribute('task_name');
  }

  // task_type - computed: true, optional: false, required: false
  public get taskType() {
    return this.getStringAttribute('task_type');
  }

  // upload_region - computed: true, optional: false, required: false
  public get uploadRegion() {
    return this.getStringAttribute('upload_region');
  }

  // yarm_config - computed: true, optional: false, required: false
  public get yarmConfig() {
    return this.getStringAttribute('yarm_config');
  }
}

export class DataAlicloudCmsHybridMonitorSlsTasksTasksList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAlicloudCmsHybridMonitorSlsTasksTasksOutputReference {
    return new DataAlicloudCmsHybridMonitorSlsTasksTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/cms_hybrid_monitor_sls_tasks alicloud_cms_hybrid_monitor_sls_tasks}
*/
export class DataAlicloudCmsHybridMonitorSlsTasks extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cms_hybrid_monitor_sls_tasks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudCmsHybridMonitorSlsTasks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudCmsHybridMonitorSlsTasks to import
  * @param importFromId The id of the existing DataAlicloudCmsHybridMonitorSlsTasks that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/cms_hybrid_monitor_sls_tasks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudCmsHybridMonitorSlsTasks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cms_hybrid_monitor_sls_tasks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/cms_hybrid_monitor_sls_tasks alicloud_cms_hybrid_monitor_sls_tasks} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudCmsHybridMonitorSlsTasksConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudCmsHybridMonitorSlsTasksConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cms_hybrid_monitor_sls_tasks',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
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
    this._ids = config.ids;
    this._keyword = config.keyword;
    this._namespace = config.namespace;
    this._outputFile = config.outputFile;
    this._pageNumber = config.pageNumber;
    this._pageSize = config.pageSize;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // keyword - computed: false, optional: true, required: false
  private _keyword?: string; 
  public get keyword() {
    return this.getStringAttribute('keyword');
  }
  public set keyword(value: string) {
    this._keyword = value;
  }
  public resetKeyword() {
    this._keyword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordInput() {
    return this._keyword;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // page_number - computed: false, optional: true, required: false
  private _pageNumber?: number; 
  public get pageNumber() {
    return this.getNumberAttribute('page_number');
  }
  public set pageNumber(value: number) {
    this._pageNumber = value;
  }
  public resetPageNumber() {
    this._pageNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageNumberInput() {
    return this._pageNumber;
  }

  // page_size - computed: false, optional: true, required: false
  private _pageSize?: number; 
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }
  public set pageSize(value: number) {
    this._pageSize = value;
  }
  public resetPageSize() {
    this._pageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeInput() {
    return this._pageSize;
  }

  // tasks - computed: true, optional: false, required: false
  private _tasks = new DataAlicloudCmsHybridMonitorSlsTasksTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      keyword: cdktf.stringToTerraform(this._keyword),
      namespace: cdktf.stringToTerraform(this._namespace),
      output_file: cdktf.stringToTerraform(this._outputFile),
      page_number: cdktf.numberToTerraform(this._pageNumber),
      page_size: cdktf.numberToTerraform(this._pageSize),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      keyword: {
        value: cdktf.stringToHclTerraform(this._keyword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page_number: {
        value: cdktf.numberToHclTerraform(this._pageNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      page_size: {
        value: cdktf.numberToHclTerraform(this._pageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
