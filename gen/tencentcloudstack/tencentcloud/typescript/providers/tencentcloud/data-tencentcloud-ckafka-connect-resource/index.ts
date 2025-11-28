// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/ckafka_connect_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudCkafkaConnectResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/ckafka_connect_resource#id DataTencentcloudCkafkaConnectResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Return the number, the default is 20, the maximum is 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/ckafka_connect_resource#limit DataTencentcloudCkafkaConnectResource#limit}
  */
  readonly limit?: number;
  /**
  * Page offset, default is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/ckafka_connect_resource#offset DataTencentcloudCkafkaConnectResource#offset}
  */
  readonly offset?: number;
  /**
  * Keyword query of the connection source, query the connection in the connection management list in the local region according to the region (only support the connection source containing the region input).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/ckafka_connect_resource#resource_region DataTencentcloudCkafkaConnectResource#resource_region}
  */
  readonly resourceRegion?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/ckafka_connect_resource#result_output_file DataTencentcloudCkafkaConnectResource#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Keyword for search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/ckafka_connect_resource#search_word DataTencentcloudCkafkaConnectResource#search_word}
  */
  readonly searchWord?: string;
  /**
  * connection source type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/ckafka_connect_resource#type DataTencentcloudCkafkaConnectResource#type}
  */
  readonly type?: string;
}
export interface DataTencentcloudCkafkaConnectResourceResultConnectResourceListClickhouseConnectParam {
}

export function dataTencentcloudCkafkaConnectResourceResultConnectResourceListClickhouseConnectParamToTerraform(struct?: DataTencentcloudCkafkaConnectResourceResultConnectResourceListClickhouseConnectParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaConnectResourceResultConnectResourceListClickhouseConnectParamToHclTerraform(struct?: DataTencentcloudCkafkaConnectResourceResultConnectResourceListClickhouseConnectParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaConnectResourceResultConnectResourceListClickhouseConnectParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaConnectResourceResultConnectResourceListClickhouseConnectParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaConnectResourceResultConnectResourceListClickhouseConnectParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_update - computed: true, optional: false, required: false
  public get isUpdate() {
    return this.getBooleanAttribute('is_update');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // self_built - computed: true, optional: false, required: false
  public get selfBuilt() {
    return this.getBooleanAttribute('self_built');
  }

  // service_vip - computed: true, optional: false, required: false
  public get serviceVip() {
    return this.getStringAttribute('service_vip');
  }

  // uniq_vpc_id - computed: true, optional: false, required: false
  public get uniqVpcId() {
    return this.getStringAttribute('uniq_vpc_id');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }
}

export class DataTencentcloudCkafkaConnectResourceResultConnectResourceListClickhouseConnectParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaConnectResourceResultConnectResourceListClickhouseConnectParamOutputReference {
    return new DataTencentcloudCkafkaConnectResourceResultConnectResourceListClickhouseConnectParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaConnectResourceResultConnectResourceListCtsdbConnectParam {
}

export function dataTencentcloudCkafkaConnectResourceResultConnectResourceListCtsdbConnectParamToTerraform(struct?: DataTencentcloudCkafkaConnectResourceResultConnectResourceListCtsdbConnectParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaConnectResourceResultConnectResourceListCtsdbConnectParamToHclTerraform(struct?: DataTencentcloudCkafkaConnectResourceResultConnectResourceListCtsdbConnectParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaConnectResourceResultConnectResourceListCtsdbConnectParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaConnectResourceResultConnectResourceListCtsdbConnectParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaConnectResourceResultConnectResourceListCtsdbConnectParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // service_vip - computed: true, optional: false, required: false
  public get serviceVip() {
    return this.getStringAttribute('service_vip');
  }

  // uniq_vpc_id - computed: true, optional: false, required: false
  public get uniqVpcId() {
    return this.getStringAttribute('uniq_vpc_id');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }
}

export class DataTencentcloudCkafkaConnectResourceResultConnectResourceListCtsdbConnectParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaConnectResourceResultConnectResourceListCtsdbConnectParamOutputReference {
    return new DataTencentcloudCkafkaConnectResourceResultConnectResourceListCtsdbConnectParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaConnectResourceResultConnectResourceListDorisConnectParam {
}

export function dataTencentcloudCkafkaConnectResourceResultConnectResourceListDorisConnectParamToTerraform(struct?: DataTencentcloudCkafkaConnectResourceResultConnectResourceListDorisConnectParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaConnectResourceResultConnectResourceListDorisConnectParamToHclTerraform(struct?: DataTencentcloudCkafkaConnectResourceResultConnectResourceListDorisConnectParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaConnectResourceResultConnectResourceListDorisConnectParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaConnectResourceResultConnectResourceListDorisConnectParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaConnectResourceResultConnectResourceListDorisConnectParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // be_port - computed: true, optional: false, required: false
  public get bePort() {
    return this.getNumberAttribute('be_port');
  }

  // is_update - computed: true, optional: false, required: false
  public get isUpdate() {
    return this.getBooleanAttribute('is_update');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // self_built - computed: true, optional: false, required: false
  public get selfBuilt() {
    return this.getBooleanAttribute('self_built');
  }

  // service_vip - computed: true, optional: false, required: false
  public get serviceVip() {
    return this.getStringAttribute('service_vip');
  }

  // uniq_vpc_id - computed: true, optional: false, required: false
  public get uniqVpcId() {
    return this.getStringAttribute('uniq_vpc_id');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }
}

export class DataTencentcloudCkafkaConnectResourceResultConnectResourceListDorisConnectParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaConnectResourceResultConnectResourceListDorisConnectParamOutputReference {
    return new DataTencentcloudCkafkaConnectResourceResultConnectResourceListDorisConnectParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaConnectResourceResultConnectResourceListDtsConnectParam {
}

export function dataTencentcloudCkafkaConnectResourceResultConnectResourceListDtsConnectParamToTerraform(struct?: DataTencentcloudCkafkaConnectResourceResultConnectResourceListDtsConnectParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaConnectResourceResultConnectResourceListDtsConnectParamToHclTerraform(struct?: DataTencentcloudCkafkaConnectResourceResultConnectResourceListDtsConnectParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaConnectResourceResultConnectResourceListDtsConnectParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaConnectResourceResultConnectResourceListDtsConnectParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaConnectResourceResultConnectResourceListDtsConnectParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // is_update - computed: true, optional: false, required: false
  public get isUpdate() {
    return this.getBooleanAttribute('is_update');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // topic - computed: true, optional: false, required: false
  public get topic() {
    return this.getStringAttribute('topic');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }
}

export class DataTencentcloudCkafkaConnectResourceResultConnectResourceListDtsConnectParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaConnectResourceResultConnectResourceListDtsConnectParamOutputReference {
    return new DataTencentcloudCkafkaConnectResourceResultConnectResourceListDtsConnectParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaConnectResourceResultConnectResourceListEsConnectParam {
}

export function dataTencentcloudCkafkaConnectResourceResultConnectResourceListEsConnectParamToTerraform(struct?: DataTencentcloudCkafkaConnectResourceResultConnectResourceListEsConnectParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaConnectResourceResultConnectResourceListEsConnectParamToHclTerraform(struct?: DataTencentcloudCkafkaConnectResourceResultConnectResourceListEsConnectParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaConnectResourceResultConnectResourceListEsConnectParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaConnectResourceResultConnectResourceListEsConnectParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaConnectResourceResultConnectResourceListEsConnectParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_update - computed: true, optional: false, required: false
  public get isUpdate() {
    return this.getBooleanAttribute('is_update');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // self_built - computed: true, optional: false, required: false
  public get selfBuilt() {
    return this.getBooleanAttribute('self_built');
  }

  // service_vip - computed: true, optional: false, required: false
  public get serviceVip() {
    return this.getStringAttribute('service_vip');
  }

  // uniq_vpc_id - computed: true, optional: false, required: false
  public get uniqVpcId() {
    return this.getStringAttribute('uniq_vpc_id');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }
}

export class DataTencentcloudCkafkaConnectResourceResultConnectResourceListEsConnectParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaConnectResourceResultConnectResourceListEsConnectParamOutputReference {
    return new DataTencentcloudCkafkaConnectResourceResultConnectResourceListEsConnectParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaConnectResourceResultConnectResourceListKafkaConnectParam {
}

export function dataTencentcloudCkafkaConnectResourceResultConnectResourceListKafkaConnectParamToTerraform(struct?: DataTencentcloudCkafkaConnectResourceResultConnectResourceListKafkaConnectParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaConnectResourceResultConnectResourceListKafkaConnectParamToHclTerraform(struct?: DataTencentcloudCkafkaConnectResourceResultConnectResourceListKafkaConnectParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaConnectResourceResultConnectResourceListKafkaConnectParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaConnectResourceResultConnectResourceListKafkaConnectParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaConnectResourceResultConnectResourceListKafkaConnectParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // broker_address - computed: true, optional: false, required: false
  public get brokerAddress() {
    return this.getStringAttribute('broker_address');
  }

  // is_update - computed: true, optional: false, required: false
  public get isUpdate() {
    return this.getBooleanAttribute('is_update');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // self_built - computed: true, optional: false, required: false
  public get selfBuilt() {
    return this.getBooleanAttribute('self_built');
  }
}

export class DataTencentcloudCkafkaConnectResourceResultConnectResourceListKafkaConnectParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaConnectResourceResultConnectResourceListKafkaConnectParamOutputReference {
    return new DataTencentcloudCkafkaConnectResourceResultConnectResourceListKafkaConnectParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaConnectResourceResultConnectResourceListMariaDbConnectParam {
}

export function dataTencentcloudCkafkaConnectResourceResultConnectResourceListMariaDbConnectParamToTerraform(struct?: DataTencentcloudCkafkaConnectResourceResultConnectResourceListMariaDbConnectParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaConnectResourceResultConnectResourceListMariaDbConnectParamToHclTerraform(struct?: DataTencentcloudCkafkaConnectResourceResultConnectResourceListMariaDbConnectParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaConnectResourceResultConnectResourceListMariaDbConnectParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaConnectResourceResultConnectResourceListMariaDbConnectParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaConnectResourceResultConnectResourceListMariaDbConnectParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_update - computed: true, optional: false, required: false
  public get isUpdate() {
    return this.getBooleanAttribute('is_update');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // service_vip - computed: true, optional: false, required: false
  public get serviceVip() {
    return this.getStringAttribute('service_vip');
  }

  // uniq_vpc_id - computed: true, optional: false, required: false
  public get uniqVpcId() {
    return this.getStringAttribute('uniq_vpc_id');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }
}

export class DataTencentcloudCkafkaConnectResourceResultConnectResourceListMariaDbConnectParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaConnectResourceResultConnectResourceListMariaDbConnectParamOutputReference {
    return new DataTencentcloudCkafkaConnectResourceResultConnectResourceListMariaDbConnectParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaConnectResourceResultConnectResourceListMongoDbConnectParam {
}

export function dataTencentcloudCkafkaConnectResourceResultConnectResourceListMongoDbConnectParamToTerraform(struct?: DataTencentcloudCkafkaConnectResourceResultConnectResourceListMongoDbConnectParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaConnectResourceResultConnectResourceListMongoDbConnectParamToHclTerraform(struct?: DataTencentcloudCkafkaConnectResourceResultConnectResourceListMongoDbConnectParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaConnectResourceResultConnectResourceListMongoDbConnectParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaConnectResourceResultConnectResourceListMongoDbConnectParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaConnectResourceResultConnectResourceListMongoDbConnectParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_update - computed: true, optional: false, required: false
  public get isUpdate() {
    return this.getBooleanAttribute('is_update');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // self_built - computed: true, optional: false, required: false
  public get selfBuilt() {
    return this.getBooleanAttribute('self_built');
  }

  // service_vip - computed: true, optional: false, required: false
  public get serviceVip() {
    return this.getStringAttribute('service_vip');
  }

  // uniq_vpc_id - computed: true, optional: false, required: false
  public get uniqVpcId() {
    return this.getStringAttribute('uniq_vpc_id');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }
}

export class DataTencentcloudCkafkaConnectResourceResultConnectResourceListMongoDbConnectParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaConnectResourceResultConnectResourceListMongoDbConnectParamOutputReference {
    return new DataTencentcloudCkafkaConnectResourceResultConnectResourceListMongoDbConnectParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaConnectResourceResultConnectResourceListMysqlConnectParam {
}

export function dataTencentcloudCkafkaConnectResourceResultConnectResourceListMysqlConnectParamToTerraform(struct?: DataTencentcloudCkafkaConnectResourceResultConnectResourceListMysqlConnectParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaConnectResourceResultConnectResourceListMysqlConnectParamToHclTerraform(struct?: DataTencentcloudCkafkaConnectResourceResultConnectResourceListMysqlConnectParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaConnectResourceResultConnectResourceListMysqlConnectParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaConnectResourceResultConnectResourceListMysqlConnectParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaConnectResourceResultConnectResourceListMysqlConnectParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // is_update - computed: true, optional: false, required: false
  public get isUpdate() {
    return this.getBooleanAttribute('is_update');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // self_built - computed: true, optional: false, required: false
  public get selfBuilt() {
    return this.getBooleanAttribute('self_built');
  }

  // service_vip - computed: true, optional: false, required: false
  public get serviceVip() {
    return this.getStringAttribute('service_vip');
  }

  // uniq_vpc_id - computed: true, optional: false, required: false
  public get uniqVpcId() {
    return this.getStringAttribute('uniq_vpc_id');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }
}

export class DataTencentcloudCkafkaConnectResourceResultConnectResourceListMysqlConnectParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaConnectResourceResultConnectResourceListMysqlConnectParamOutputReference {
    return new DataTencentcloudCkafkaConnectResourceResultConnectResourceListMysqlConnectParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaConnectResourceResultConnectResourceListPostgreSqlConnectParam {
}

export function dataTencentcloudCkafkaConnectResourceResultConnectResourceListPostgreSqlConnectParamToTerraform(struct?: DataTencentcloudCkafkaConnectResourceResultConnectResourceListPostgreSqlConnectParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaConnectResourceResultConnectResourceListPostgreSqlConnectParamToHclTerraform(struct?: DataTencentcloudCkafkaConnectResourceResultConnectResourceListPostgreSqlConnectParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaConnectResourceResultConnectResourceListPostgreSqlConnectParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaConnectResourceResultConnectResourceListPostgreSqlConnectParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaConnectResourceResultConnectResourceListPostgreSqlConnectParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // is_update - computed: true, optional: false, required: false
  public get isUpdate() {
    return this.getBooleanAttribute('is_update');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // self_built - computed: true, optional: false, required: false
  public get selfBuilt() {
    return this.getBooleanAttribute('self_built');
  }

  // service_vip - computed: true, optional: false, required: false
  public get serviceVip() {
    return this.getStringAttribute('service_vip');
  }

  // uniq_vpc_id - computed: true, optional: false, required: false
  public get uniqVpcId() {
    return this.getStringAttribute('uniq_vpc_id');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }
}

export class DataTencentcloudCkafkaConnectResourceResultConnectResourceListPostgreSqlConnectParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaConnectResourceResultConnectResourceListPostgreSqlConnectParamOutputReference {
    return new DataTencentcloudCkafkaConnectResourceResultConnectResourceListPostgreSqlConnectParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaConnectResourceResultConnectResourceListSqlServerConnectParam {
}

export function dataTencentcloudCkafkaConnectResourceResultConnectResourceListSqlServerConnectParamToTerraform(struct?: DataTencentcloudCkafkaConnectResourceResultConnectResourceListSqlServerConnectParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaConnectResourceResultConnectResourceListSqlServerConnectParamToHclTerraform(struct?: DataTencentcloudCkafkaConnectResourceResultConnectResourceListSqlServerConnectParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaConnectResourceResultConnectResourceListSqlServerConnectParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaConnectResourceResultConnectResourceListSqlServerConnectParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaConnectResourceResultConnectResourceListSqlServerConnectParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_update - computed: true, optional: false, required: false
  public get isUpdate() {
    return this.getBooleanAttribute('is_update');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // service_vip - computed: true, optional: false, required: false
  public get serviceVip() {
    return this.getStringAttribute('service_vip');
  }

  // uniq_vpc_id - computed: true, optional: false, required: false
  public get uniqVpcId() {
    return this.getStringAttribute('uniq_vpc_id');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }
}

export class DataTencentcloudCkafkaConnectResourceResultConnectResourceListSqlServerConnectParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaConnectResourceResultConnectResourceListSqlServerConnectParamOutputReference {
    return new DataTencentcloudCkafkaConnectResourceResultConnectResourceListSqlServerConnectParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaConnectResourceResultConnectResourceListStruct {
}

export function dataTencentcloudCkafkaConnectResourceResultConnectResourceListStructToTerraform(struct?: DataTencentcloudCkafkaConnectResourceResultConnectResourceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaConnectResourceResultConnectResourceListStructToHclTerraform(struct?: DataTencentcloudCkafkaConnectResourceResultConnectResourceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaConnectResourceResultConnectResourceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaConnectResourceResultConnectResourceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaConnectResourceResultConnectResourceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clickhouse_connect_param - computed: true, optional: false, required: false
  private _clickhouseConnectParam = new DataTencentcloudCkafkaConnectResourceResultConnectResourceListClickhouseConnectParamList(this, "clickhouse_connect_param", false);
  public get clickhouseConnectParam() {
    return this._clickhouseConnectParam;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // ctsdb_connect_param - computed: true, optional: false, required: false
  private _ctsdbConnectParam = new DataTencentcloudCkafkaConnectResourceResultConnectResourceListCtsdbConnectParamList(this, "ctsdb_connect_param", false);
  public get ctsdbConnectParam() {
    return this._ctsdbConnectParam;
  }

  // current_step - computed: true, optional: false, required: false
  public get currentStep() {
    return this.getStringAttribute('current_step');
  }

  // datahub_task_count - computed: true, optional: false, required: false
  public get datahubTaskCount() {
    return this.getNumberAttribute('datahub_task_count');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // doris_connect_param - computed: true, optional: false, required: false
  private _dorisConnectParam = new DataTencentcloudCkafkaConnectResourceResultConnectResourceListDorisConnectParamList(this, "doris_connect_param", false);
  public get dorisConnectParam() {
    return this._dorisConnectParam;
  }

  // dts_connect_param - computed: true, optional: false, required: false
  private _dtsConnectParam = new DataTencentcloudCkafkaConnectResourceResultConnectResourceListDtsConnectParamList(this, "dts_connect_param", false);
  public get dtsConnectParam() {
    return this._dtsConnectParam;
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }

  // es_connect_param - computed: true, optional: false, required: false
  private _esConnectParam = new DataTencentcloudCkafkaConnectResourceResultConnectResourceListEsConnectParamList(this, "es_connect_param", false);
  public get esConnectParam() {
    return this._esConnectParam;
  }

  // kafka_connect_param - computed: true, optional: false, required: false
  private _kafkaConnectParam = new DataTencentcloudCkafkaConnectResourceResultConnectResourceListKafkaConnectParamList(this, "kafka_connect_param", false);
  public get kafkaConnectParam() {
    return this._kafkaConnectParam;
  }

  // maria_db_connect_param - computed: true, optional: false, required: false
  private _mariaDbConnectParam = new DataTencentcloudCkafkaConnectResourceResultConnectResourceListMariaDbConnectParamList(this, "maria_db_connect_param", false);
  public get mariaDbConnectParam() {
    return this._mariaDbConnectParam;
  }

  // mongo_db_connect_param - computed: true, optional: false, required: false
  private _mongoDbConnectParam = new DataTencentcloudCkafkaConnectResourceResultConnectResourceListMongoDbConnectParamList(this, "mongo_db_connect_param", false);
  public get mongoDbConnectParam() {
    return this._mongoDbConnectParam;
  }

  // mysql_connect_param - computed: true, optional: false, required: false
  private _mysqlConnectParam = new DataTencentcloudCkafkaConnectResourceResultConnectResourceListMysqlConnectParamList(this, "mysql_connect_param", false);
  public get mysqlConnectParam() {
    return this._mysqlConnectParam;
  }

  // postgre_sql_connect_param - computed: true, optional: false, required: false
  private _postgreSqlConnectParam = new DataTencentcloudCkafkaConnectResourceResultConnectResourceListPostgreSqlConnectParamList(this, "postgre_sql_connect_param", false);
  public get postgreSqlConnectParam() {
    return this._postgreSqlConnectParam;
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // sql_server_connect_param - computed: true, optional: false, required: false
  private _sqlServerConnectParam = new DataTencentcloudCkafkaConnectResourceResultConnectResourceListSqlServerConnectParamList(this, "sql_server_connect_param", false);
  public get sqlServerConnectParam() {
    return this._sqlServerConnectParam;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // step_list - computed: true, optional: false, required: false
  public get stepList() {
    return cdktf.Fn.tolist(this.getListAttribute('step_list'));
  }

  // task_progress - computed: true, optional: false, required: false
  public get taskProgress() {
    return this.getNumberAttribute('task_progress');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataTencentcloudCkafkaConnectResourceResultConnectResourceListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaConnectResourceResultConnectResourceListStructOutputReference {
    return new DataTencentcloudCkafkaConnectResourceResultConnectResourceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCkafkaConnectResourceResult {
}

export function dataTencentcloudCkafkaConnectResourceResultToTerraform(struct?: DataTencentcloudCkafkaConnectResourceResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCkafkaConnectResourceResultToHclTerraform(struct?: DataTencentcloudCkafkaConnectResourceResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCkafkaConnectResourceResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCkafkaConnectResourceResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCkafkaConnectResourceResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connect_resource_list - computed: true, optional: false, required: false
  private _connectResourceList = new DataTencentcloudCkafkaConnectResourceResultConnectResourceListStructList(this, "connect_resource_list", false);
  public get connectResourceList() {
    return this._connectResourceList;
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }
}

export class DataTencentcloudCkafkaConnectResourceResultList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCkafkaConnectResourceResultOutputReference {
    return new DataTencentcloudCkafkaConnectResourceResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/ckafka_connect_resource tencentcloud_ckafka_connect_resource}
*/
export class DataTencentcloudCkafkaConnectResource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ckafka_connect_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudCkafkaConnectResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudCkafkaConnectResource to import
  * @param importFromId The id of the existing DataTencentcloudCkafkaConnectResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/ckafka_connect_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudCkafkaConnectResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ckafka_connect_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/data-sources/ckafka_connect_resource tencentcloud_ckafka_connect_resource} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudCkafkaConnectResourceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudCkafkaConnectResourceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ckafka_connect_resource',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.39',
        providerVersionConstraint: '1.82.39'
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
    this._limit = config.limit;
    this._offset = config.offset;
    this._resourceRegion = config.resourceRegion;
    this._resultOutputFile = config.resultOutputFile;
    this._searchWord = config.searchWord;
    this._type = config.type;
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

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // resource_region - computed: false, optional: true, required: false
  private _resourceRegion?: string; 
  public get resourceRegion() {
    return this.getStringAttribute('resource_region');
  }
  public set resourceRegion(value: string) {
    this._resourceRegion = value;
  }
  public resetResourceRegion() {
    this._resourceRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRegionInput() {
    return this._resourceRegion;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataTencentcloudCkafkaConnectResourceResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // search_word - computed: false, optional: true, required: false
  private _searchWord?: string; 
  public get searchWord() {
    return this.getStringAttribute('search_word');
  }
  public set searchWord(value: string) {
    this._searchWord = value;
  }
  public resetSearchWord() {
    this._searchWord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchWordInput() {
    return this._searchWord;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      limit: cdktf.numberToTerraform(this._limit),
      offset: cdktf.numberToTerraform(this._offset),
      resource_region: cdktf.stringToTerraform(this._resourceRegion),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      search_word: cdktf.stringToTerraform(this._searchWord),
      type: cdktf.stringToTerraform(this._type),
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
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_region: {
        value: cdktf.stringToHclTerraform(this._resourceRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_word: {
        value: cdktf.stringToHclTerraform(this._searchWord),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
