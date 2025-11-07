// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/service_catalog_provisioned_products
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudServiceCatalogProvisionedProductsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/service_catalog_provisioned_products#access_level_filter DataAlicloudServiceCatalogProvisionedProducts#access_level_filter}
  */
  readonly accessLevelFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/service_catalog_provisioned_products#enable_details DataAlicloudServiceCatalogProvisionedProducts#enable_details}
  */
  readonly enableDetails?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/service_catalog_provisioned_products#id DataAlicloudServiceCatalogProvisionedProducts#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/service_catalog_provisioned_products#ids DataAlicloudServiceCatalogProvisionedProducts#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/service_catalog_provisioned_products#name_regex DataAlicloudServiceCatalogProvisionedProducts#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/service_catalog_provisioned_products#output_file DataAlicloudServiceCatalogProvisionedProducts#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/service_catalog_provisioned_products#page_number DataAlicloudServiceCatalogProvisionedProducts#page_number}
  */
  readonly pageNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/service_catalog_provisioned_products#page_size DataAlicloudServiceCatalogProvisionedProducts#page_size}
  */
  readonly pageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/service_catalog_provisioned_products#sort_by DataAlicloudServiceCatalogProvisionedProducts#sort_by}
  */
  readonly sortBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/service_catalog_provisioned_products#sort_order DataAlicloudServiceCatalogProvisionedProducts#sort_order}
  */
  readonly sortOrder?: string;
}
export interface DataAlicloudServiceCatalogProvisionedProductsProductsOutputs {
}

export function dataAlicloudServiceCatalogProvisionedProductsProductsOutputsToTerraform(struct?: DataAlicloudServiceCatalogProvisionedProductsProductsOutputs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudServiceCatalogProvisionedProductsProductsOutputsToHclTerraform(struct?: DataAlicloudServiceCatalogProvisionedProductsProductsOutputs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudServiceCatalogProvisionedProductsProductsOutputsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAlicloudServiceCatalogProvisionedProductsProductsOutputs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudServiceCatalogProvisionedProductsProductsOutputs | undefined) {
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

  // output_key - computed: true, optional: false, required: false
  public get outputKey() {
    return this.getStringAttribute('output_key');
  }

  // output_value - computed: true, optional: false, required: false
  public get outputValue() {
    return this.getStringAttribute('output_value');
  }
}

export class DataAlicloudServiceCatalogProvisionedProductsProductsOutputsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAlicloudServiceCatalogProvisionedProductsProductsOutputsOutputReference {
    return new DataAlicloudServiceCatalogProvisionedProductsProductsOutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudServiceCatalogProvisionedProductsProductsParameters {
}

export function dataAlicloudServiceCatalogProvisionedProductsProductsParametersToTerraform(struct?: DataAlicloudServiceCatalogProvisionedProductsProductsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudServiceCatalogProvisionedProductsProductsParametersToHclTerraform(struct?: DataAlicloudServiceCatalogProvisionedProductsProductsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudServiceCatalogProvisionedProductsProductsParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAlicloudServiceCatalogProvisionedProductsProductsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudServiceCatalogProvisionedProductsProductsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameter_key - computed: true, optional: false, required: false
  public get parameterKey() {
    return this.getStringAttribute('parameter_key');
  }

  // parameter_value - computed: true, optional: false, required: false
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
}

export class DataAlicloudServiceCatalogProvisionedProductsProductsParametersList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAlicloudServiceCatalogProvisionedProductsProductsParametersOutputReference {
    return new DataAlicloudServiceCatalogProvisionedProductsProductsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudServiceCatalogProvisionedProductsProducts {
}

export function dataAlicloudServiceCatalogProvisionedProductsProductsToTerraform(struct?: DataAlicloudServiceCatalogProvisionedProductsProducts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudServiceCatalogProvisionedProductsProductsToHclTerraform(struct?: DataAlicloudServiceCatalogProvisionedProductsProducts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudServiceCatalogProvisionedProductsProductsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAlicloudServiceCatalogProvisionedProductsProducts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudServiceCatalogProvisionedProductsProducts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_provisioning_task_id - computed: true, optional: false, required: false
  public get lastProvisioningTaskId() {
    return this.getStringAttribute('last_provisioning_task_id');
  }

  // last_successful_provisioning_task_id - computed: true, optional: false, required: false
  public get lastSuccessfulProvisioningTaskId() {
    return this.getStringAttribute('last_successful_provisioning_task_id');
  }

  // last_task_id - computed: true, optional: false, required: false
  public get lastTaskId() {
    return this.getStringAttribute('last_task_id');
  }

  // outputs - computed: true, optional: false, required: false
  private _outputs = new DataAlicloudServiceCatalogProvisionedProductsProductsOutputsList(this, "outputs", false);
  public get outputs() {
    return this._outputs;
  }

  // owner_principal_id - computed: true, optional: false, required: false
  public get ownerPrincipalId() {
    return this.getStringAttribute('owner_principal_id');
  }

  // owner_principal_type - computed: true, optional: false, required: false
  public get ownerPrincipalType() {
    return this.getStringAttribute('owner_principal_type');
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new DataAlicloudServiceCatalogProvisionedProductsProductsParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }

  // portfolio_id - computed: true, optional: false, required: false
  public get portfolioId() {
    return this.getStringAttribute('portfolio_id');
  }

  // product_id - computed: true, optional: false, required: false
  public get productId() {
    return this.getStringAttribute('product_id');
  }

  // product_name - computed: true, optional: false, required: false
  public get productName() {
    return this.getStringAttribute('product_name');
  }

  // product_version_id - computed: true, optional: false, required: false
  public get productVersionId() {
    return this.getStringAttribute('product_version_id');
  }

  // product_version_name - computed: true, optional: false, required: false
  public get productVersionName() {
    return this.getStringAttribute('product_version_name');
  }

  // provisioned_product_arn - computed: true, optional: false, required: false
  public get provisionedProductArn() {
    return this.getStringAttribute('provisioned_product_arn');
  }

  // provisioned_product_id - computed: true, optional: false, required: false
  public get provisionedProductId() {
    return this.getStringAttribute('provisioned_product_id');
  }

  // provisioned_product_name - computed: true, optional: false, required: false
  public get provisionedProductName() {
    return this.getStringAttribute('provisioned_product_name');
  }

  // provisioned_product_type - computed: true, optional: false, required: false
  public get provisionedProductType() {
    return this.getStringAttribute('provisioned_product_type');
  }

  // stack_id - computed: true, optional: false, required: false
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }

  // stack_region_id - computed: true, optional: false, required: false
  public get stackRegionId() {
    return this.getStringAttribute('stack_region_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }
}

export class DataAlicloudServiceCatalogProvisionedProductsProductsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAlicloudServiceCatalogProvisionedProductsProductsOutputReference {
    return new DataAlicloudServiceCatalogProvisionedProductsProductsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudServiceCatalogProvisionedProductsProvisionedProductsOutputs {
}

export function dataAlicloudServiceCatalogProvisionedProductsProvisionedProductsOutputsToTerraform(struct?: DataAlicloudServiceCatalogProvisionedProductsProvisionedProductsOutputs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudServiceCatalogProvisionedProductsProvisionedProductsOutputsToHclTerraform(struct?: DataAlicloudServiceCatalogProvisionedProductsProvisionedProductsOutputs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudServiceCatalogProvisionedProductsProvisionedProductsOutputsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAlicloudServiceCatalogProvisionedProductsProvisionedProductsOutputs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudServiceCatalogProvisionedProductsProvisionedProductsOutputs | undefined) {
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

  // output_key - computed: true, optional: false, required: false
  public get outputKey() {
    return this.getStringAttribute('output_key');
  }

  // output_value - computed: true, optional: false, required: false
  public get outputValue() {
    return this.getStringAttribute('output_value');
  }
}

export class DataAlicloudServiceCatalogProvisionedProductsProvisionedProductsOutputsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAlicloudServiceCatalogProvisionedProductsProvisionedProductsOutputsOutputReference {
    return new DataAlicloudServiceCatalogProvisionedProductsProvisionedProductsOutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudServiceCatalogProvisionedProductsProvisionedProductsParameters {
}

export function dataAlicloudServiceCatalogProvisionedProductsProvisionedProductsParametersToTerraform(struct?: DataAlicloudServiceCatalogProvisionedProductsProvisionedProductsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudServiceCatalogProvisionedProductsProvisionedProductsParametersToHclTerraform(struct?: DataAlicloudServiceCatalogProvisionedProductsProvisionedProductsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudServiceCatalogProvisionedProductsProvisionedProductsParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAlicloudServiceCatalogProvisionedProductsProvisionedProductsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudServiceCatalogProvisionedProductsProvisionedProductsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameter_key - computed: true, optional: false, required: false
  public get parameterKey() {
    return this.getStringAttribute('parameter_key');
  }

  // parameter_value - computed: true, optional: false, required: false
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
}

export class DataAlicloudServiceCatalogProvisionedProductsProvisionedProductsParametersList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAlicloudServiceCatalogProvisionedProductsProvisionedProductsParametersOutputReference {
    return new DataAlicloudServiceCatalogProvisionedProductsProvisionedProductsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudServiceCatalogProvisionedProductsProvisionedProducts {
}

export function dataAlicloudServiceCatalogProvisionedProductsProvisionedProductsToTerraform(struct?: DataAlicloudServiceCatalogProvisionedProductsProvisionedProducts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudServiceCatalogProvisionedProductsProvisionedProductsToHclTerraform(struct?: DataAlicloudServiceCatalogProvisionedProductsProvisionedProducts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudServiceCatalogProvisionedProductsProvisionedProductsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAlicloudServiceCatalogProvisionedProductsProvisionedProducts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudServiceCatalogProvisionedProductsProvisionedProducts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_provisioning_task_id - computed: true, optional: false, required: false
  public get lastProvisioningTaskId() {
    return this.getStringAttribute('last_provisioning_task_id');
  }

  // last_successful_provisioning_task_id - computed: true, optional: false, required: false
  public get lastSuccessfulProvisioningTaskId() {
    return this.getStringAttribute('last_successful_provisioning_task_id');
  }

  // last_task_id - computed: true, optional: false, required: false
  public get lastTaskId() {
    return this.getStringAttribute('last_task_id');
  }

  // outputs - computed: true, optional: false, required: false
  private _outputs = new DataAlicloudServiceCatalogProvisionedProductsProvisionedProductsOutputsList(this, "outputs", false);
  public get outputs() {
    return this._outputs;
  }

  // owner_principal_id - computed: true, optional: false, required: false
  public get ownerPrincipalId() {
    return this.getStringAttribute('owner_principal_id');
  }

  // owner_principal_type - computed: true, optional: false, required: false
  public get ownerPrincipalType() {
    return this.getStringAttribute('owner_principal_type');
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new DataAlicloudServiceCatalogProvisionedProductsProvisionedProductsParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }

  // portfolio_id - computed: true, optional: false, required: false
  public get portfolioId() {
    return this.getStringAttribute('portfolio_id');
  }

  // product_id - computed: true, optional: false, required: false
  public get productId() {
    return this.getStringAttribute('product_id');
  }

  // product_name - computed: true, optional: false, required: false
  public get productName() {
    return this.getStringAttribute('product_name');
  }

  // product_version_id - computed: true, optional: false, required: false
  public get productVersionId() {
    return this.getStringAttribute('product_version_id');
  }

  // product_version_name - computed: true, optional: false, required: false
  public get productVersionName() {
    return this.getStringAttribute('product_version_name');
  }

  // provisioned_product_arn - computed: true, optional: false, required: false
  public get provisionedProductArn() {
    return this.getStringAttribute('provisioned_product_arn');
  }

  // provisioned_product_id - computed: true, optional: false, required: false
  public get provisionedProductId() {
    return this.getStringAttribute('provisioned_product_id');
  }

  // provisioned_product_name - computed: true, optional: false, required: false
  public get provisionedProductName() {
    return this.getStringAttribute('provisioned_product_name');
  }

  // provisioned_product_type - computed: true, optional: false, required: false
  public get provisionedProductType() {
    return this.getStringAttribute('provisioned_product_type');
  }

  // stack_id - computed: true, optional: false, required: false
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }

  // stack_region_id - computed: true, optional: false, required: false
  public get stackRegionId() {
    return this.getStringAttribute('stack_region_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }
}

export class DataAlicloudServiceCatalogProvisionedProductsProvisionedProductsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAlicloudServiceCatalogProvisionedProductsProvisionedProductsOutputReference {
    return new DataAlicloudServiceCatalogProvisionedProductsProvisionedProductsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/service_catalog_provisioned_products alicloud_service_catalog_provisioned_products}
*/
export class DataAlicloudServiceCatalogProvisionedProducts extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_service_catalog_provisioned_products";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudServiceCatalogProvisionedProducts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudServiceCatalogProvisionedProducts to import
  * @param importFromId The id of the existing DataAlicloudServiceCatalogProvisionedProducts that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/service_catalog_provisioned_products#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudServiceCatalogProvisionedProducts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_service_catalog_provisioned_products", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/service_catalog_provisioned_products alicloud_service_catalog_provisioned_products} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudServiceCatalogProvisionedProductsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudServiceCatalogProvisionedProductsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_service_catalog_provisioned_products',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessLevelFilter = config.accessLevelFilter;
    this._enableDetails = config.enableDetails;
    this._id = config.id;
    this._ids = config.ids;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
    this._pageNumber = config.pageNumber;
    this._pageSize = config.pageSize;
    this._sortBy = config.sortBy;
    this._sortOrder = config.sortOrder;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_level_filter - computed: false, optional: true, required: false
  private _accessLevelFilter?: string; 
  public get accessLevelFilter() {
    return this.getStringAttribute('access_level_filter');
  }
  public set accessLevelFilter(value: string) {
    this._accessLevelFilter = value;
  }
  public resetAccessLevelFilter() {
    this._accessLevelFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelFilterInput() {
    return this._accessLevelFilter;
  }

  // enable_details - computed: false, optional: true, required: false
  private _enableDetails?: boolean | cdktf.IResolvable; 
  public get enableDetails() {
    return this.getBooleanAttribute('enable_details');
  }
  public set enableDetails(value: boolean | cdktf.IResolvable) {
    this._enableDetails = value;
  }
  public resetEnableDetails() {
    this._enableDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDetailsInput() {
    return this._enableDetails;
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

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
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

  // products - computed: true, optional: false, required: false
  private _products = new DataAlicloudServiceCatalogProvisionedProductsProductsList(this, "products", false);
  public get products() {
    return this._products;
  }

  // provisioned_products - computed: true, optional: false, required: false
  private _provisionedProducts = new DataAlicloudServiceCatalogProvisionedProductsProvisionedProductsList(this, "provisioned_products", false);
  public get provisionedProducts() {
    return this._provisionedProducts;
  }

  // sort_by - computed: false, optional: true, required: false
  private _sortBy?: string; 
  public get sortBy() {
    return this.getStringAttribute('sort_by');
  }
  public set sortBy(value: string) {
    this._sortBy = value;
  }
  public resetSortBy() {
    this._sortBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortByInput() {
    return this._sortBy;
  }

  // sort_order - computed: false, optional: true, required: false
  private _sortOrder?: string; 
  public get sortOrder() {
    return this.getStringAttribute('sort_order');
  }
  public set sortOrder(value: string) {
    this._sortOrder = value;
  }
  public resetSortOrder() {
    this._sortOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortOrderInput() {
    return this._sortOrder;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_level_filter: cdktf.stringToTerraform(this._accessLevelFilter),
      enable_details: cdktf.booleanToTerraform(this._enableDetails),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
      page_number: cdktf.numberToTerraform(this._pageNumber),
      page_size: cdktf.numberToTerraform(this._pageSize),
      sort_by: cdktf.stringToTerraform(this._sortBy),
      sort_order: cdktf.stringToTerraform(this._sortOrder),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_level_filter: {
        value: cdktf.stringToHclTerraform(this._accessLevelFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_details: {
        value: cdktf.booleanToHclTerraform(this._enableDetails),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
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
      sort_by: {
        value: cdktf.stringToHclTerraform(this._sortBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_order: {
        value: cdktf.stringToHclTerraform(this._sortOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
