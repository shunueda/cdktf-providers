// https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/service_integration_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAivenServiceIntegrationEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the service integration endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/service_integration_endpoint#endpoint_name DataAivenServiceIntegrationEndpoint#endpoint_name}
  */
  readonly endpointName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/service_integration_endpoint#id DataAivenServiceIntegrationEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Project the service integration endpoint is in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/service_integration_endpoint#project DataAivenServiceIntegrationEndpoint#project}
  */
  readonly project: string;
}
export interface DataAivenServiceIntegrationEndpointAutoscalerUserConfigAutoscaling {
}

export function dataAivenServiceIntegrationEndpointAutoscalerUserConfigAutoscalingToTerraform(struct?: DataAivenServiceIntegrationEndpointAutoscalerUserConfigAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationEndpointAutoscalerUserConfigAutoscalingToHclTerraform(struct?: DataAivenServiceIntegrationEndpointAutoscalerUserConfigAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationEndpointAutoscalerUserConfigAutoscalingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationEndpointAutoscalerUserConfigAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationEndpointAutoscalerUserConfigAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cap_gb - computed: true, optional: false, required: false
  public get capGb() {
    return this.getNumberAttribute('cap_gb');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAivenServiceIntegrationEndpointAutoscalerUserConfigAutoscalingList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationEndpointAutoscalerUserConfigAutoscalingOutputReference {
    return new DataAivenServiceIntegrationEndpointAutoscalerUserConfigAutoscalingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationEndpointAutoscalerUserConfig {
}

export function dataAivenServiceIntegrationEndpointAutoscalerUserConfigToTerraform(struct?: DataAivenServiceIntegrationEndpointAutoscalerUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationEndpointAutoscalerUserConfigToHclTerraform(struct?: DataAivenServiceIntegrationEndpointAutoscalerUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationEndpointAutoscalerUserConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationEndpointAutoscalerUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationEndpointAutoscalerUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autoscaling - computed: true, optional: false, required: false
  private _autoscaling = new DataAivenServiceIntegrationEndpointAutoscalerUserConfigAutoscalingList(this, "autoscaling", false);
  public get autoscaling() {
    return this._autoscaling;
  }
}

export class DataAivenServiceIntegrationEndpointAutoscalerUserConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationEndpointAutoscalerUserConfigOutputReference {
    return new DataAivenServiceIntegrationEndpointAutoscalerUserConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationEndpointDatadogUserConfigDatadogTags {
}

export function dataAivenServiceIntegrationEndpointDatadogUserConfigDatadogTagsToTerraform(struct?: DataAivenServiceIntegrationEndpointDatadogUserConfigDatadogTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationEndpointDatadogUserConfigDatadogTagsToHclTerraform(struct?: DataAivenServiceIntegrationEndpointDatadogUserConfigDatadogTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationEndpointDatadogUserConfigDatadogTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationEndpointDatadogUserConfigDatadogTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationEndpointDatadogUserConfigDatadogTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getStringAttribute('tag');
  }
}

export class DataAivenServiceIntegrationEndpointDatadogUserConfigDatadogTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationEndpointDatadogUserConfigDatadogTagsOutputReference {
    return new DataAivenServiceIntegrationEndpointDatadogUserConfigDatadogTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationEndpointDatadogUserConfig {
}

export function dataAivenServiceIntegrationEndpointDatadogUserConfigToTerraform(struct?: DataAivenServiceIntegrationEndpointDatadogUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationEndpointDatadogUserConfigToHclTerraform(struct?: DataAivenServiceIntegrationEndpointDatadogUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationEndpointDatadogUserConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationEndpointDatadogUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationEndpointDatadogUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // datadog_api_key - computed: true, optional: false, required: false
  public get datadogApiKey() {
    return this.getStringAttribute('datadog_api_key');
  }

  // datadog_tags - computed: true, optional: false, required: false
  private _datadogTags = new DataAivenServiceIntegrationEndpointDatadogUserConfigDatadogTagsList(this, "datadog_tags", false);
  public get datadogTags() {
    return this._datadogTags;
  }

  // disable_consumer_stats - computed: true, optional: false, required: false
  public get disableConsumerStats() {
    return this.getBooleanAttribute('disable_consumer_stats');
  }

  // extra_tags_prefix - computed: true, optional: false, required: false
  public get extraTagsPrefix() {
    return this.getStringAttribute('extra_tags_prefix');
  }

  // kafka_consumer_check_instances - computed: true, optional: false, required: false
  public get kafkaConsumerCheckInstances() {
    return this.getNumberAttribute('kafka_consumer_check_instances');
  }

  // kafka_consumer_stats_timeout - computed: true, optional: false, required: false
  public get kafkaConsumerStatsTimeout() {
    return this.getNumberAttribute('kafka_consumer_stats_timeout');
  }

  // max_partition_contexts - computed: true, optional: false, required: false
  public get maxPartitionContexts() {
    return this.getNumberAttribute('max_partition_contexts');
  }

  // site - computed: true, optional: false, required: false
  public get site() {
    return this.getStringAttribute('site');
  }
}

export class DataAivenServiceIntegrationEndpointDatadogUserConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationEndpointDatadogUserConfigOutputReference {
    return new DataAivenServiceIntegrationEndpointDatadogUserConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationEndpointExternalAwsCloudwatchLogsUserConfig {
}

export function dataAivenServiceIntegrationEndpointExternalAwsCloudwatchLogsUserConfigToTerraform(struct?: DataAivenServiceIntegrationEndpointExternalAwsCloudwatchLogsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationEndpointExternalAwsCloudwatchLogsUserConfigToHclTerraform(struct?: DataAivenServiceIntegrationEndpointExternalAwsCloudwatchLogsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationEndpointExternalAwsCloudwatchLogsUserConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationEndpointExternalAwsCloudwatchLogsUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationEndpointExternalAwsCloudwatchLogsUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_key - computed: true, optional: false, required: false
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // secret_key - computed: true, optional: false, required: false
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
}

export class DataAivenServiceIntegrationEndpointExternalAwsCloudwatchLogsUserConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationEndpointExternalAwsCloudwatchLogsUserConfigOutputReference {
    return new DataAivenServiceIntegrationEndpointExternalAwsCloudwatchLogsUserConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationEndpointExternalAwsCloudwatchMetricsUserConfig {
}

export function dataAivenServiceIntegrationEndpointExternalAwsCloudwatchMetricsUserConfigToTerraform(struct?: DataAivenServiceIntegrationEndpointExternalAwsCloudwatchMetricsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationEndpointExternalAwsCloudwatchMetricsUserConfigToHclTerraform(struct?: DataAivenServiceIntegrationEndpointExternalAwsCloudwatchMetricsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationEndpointExternalAwsCloudwatchMetricsUserConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationEndpointExternalAwsCloudwatchMetricsUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationEndpointExternalAwsCloudwatchMetricsUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_key - computed: true, optional: false, required: false
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // secret_key - computed: true, optional: false, required: false
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
}

export class DataAivenServiceIntegrationEndpointExternalAwsCloudwatchMetricsUserConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationEndpointExternalAwsCloudwatchMetricsUserConfigOutputReference {
    return new DataAivenServiceIntegrationEndpointExternalAwsCloudwatchMetricsUserConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationEndpointExternalAwsS3UserConfig {
}

export function dataAivenServiceIntegrationEndpointExternalAwsS3UserConfigToTerraform(struct?: DataAivenServiceIntegrationEndpointExternalAwsS3UserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationEndpointExternalAwsS3UserConfigToHclTerraform(struct?: DataAivenServiceIntegrationEndpointExternalAwsS3UserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationEndpointExternalAwsS3UserConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationEndpointExternalAwsS3UserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationEndpointExternalAwsS3UserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_key_id - computed: true, optional: false, required: false
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }

  // secret_access_key - computed: true, optional: false, required: false
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataAivenServiceIntegrationEndpointExternalAwsS3UserConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationEndpointExternalAwsS3UserConfigOutputReference {
    return new DataAivenServiceIntegrationEndpointExternalAwsS3UserConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationEndpointExternalAzureBlobStorageUserConfig {
}

export function dataAivenServiceIntegrationEndpointExternalAzureBlobStorageUserConfigToTerraform(struct?: DataAivenServiceIntegrationEndpointExternalAzureBlobStorageUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationEndpointExternalAzureBlobStorageUserConfigToHclTerraform(struct?: DataAivenServiceIntegrationEndpointExternalAzureBlobStorageUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationEndpointExternalAzureBlobStorageUserConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationEndpointExternalAzureBlobStorageUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationEndpointExternalAzureBlobStorageUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // blob_path - computed: true, optional: false, required: false
  public get blobPath() {
    return this.getStringAttribute('blob_path');
  }

  // connection_string - computed: true, optional: false, required: false
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // container - computed: true, optional: false, required: false
  public get container() {
    return this.getStringAttribute('container');
  }
}

export class DataAivenServiceIntegrationEndpointExternalAzureBlobStorageUserConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationEndpointExternalAzureBlobStorageUserConfigOutputReference {
    return new DataAivenServiceIntegrationEndpointExternalAzureBlobStorageUserConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationEndpointExternalClickhouseUserConfig {
}

export function dataAivenServiceIntegrationEndpointExternalClickhouseUserConfigToTerraform(struct?: DataAivenServiceIntegrationEndpointExternalClickhouseUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationEndpointExternalClickhouseUserConfigToHclTerraform(struct?: DataAivenServiceIntegrationEndpointExternalClickhouseUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationEndpointExternalClickhouseUserConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationEndpointExternalClickhouseUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationEndpointExternalClickhouseUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataAivenServiceIntegrationEndpointExternalClickhouseUserConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationEndpointExternalClickhouseUserConfigOutputReference {
    return new DataAivenServiceIntegrationEndpointExternalClickhouseUserConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationEndpointExternalElasticsearchLogsUserConfig {
}

export function dataAivenServiceIntegrationEndpointExternalElasticsearchLogsUserConfigToTerraform(struct?: DataAivenServiceIntegrationEndpointExternalElasticsearchLogsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationEndpointExternalElasticsearchLogsUserConfigToHclTerraform(struct?: DataAivenServiceIntegrationEndpointExternalElasticsearchLogsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationEndpointExternalElasticsearchLogsUserConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationEndpointExternalElasticsearchLogsUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationEndpointExternalElasticsearchLogsUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca - computed: true, optional: false, required: false
  public get ca() {
    return this.getStringAttribute('ca');
  }

  // index_days_max - computed: true, optional: false, required: false
  public get indexDaysMax() {
    return this.getNumberAttribute('index_days_max');
  }

  // index_prefix - computed: true, optional: false, required: false
  public get indexPrefix() {
    return this.getStringAttribute('index_prefix');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataAivenServiceIntegrationEndpointExternalElasticsearchLogsUserConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationEndpointExternalElasticsearchLogsUserConfigOutputReference {
    return new DataAivenServiceIntegrationEndpointExternalElasticsearchLogsUserConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationEndpointExternalGoogleCloudBigquery {
}

export function dataAivenServiceIntegrationEndpointExternalGoogleCloudBigqueryToTerraform(struct?: DataAivenServiceIntegrationEndpointExternalGoogleCloudBigquery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationEndpointExternalGoogleCloudBigqueryToHclTerraform(struct?: DataAivenServiceIntegrationEndpointExternalGoogleCloudBigquery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationEndpointExternalGoogleCloudBigqueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationEndpointExternalGoogleCloudBigquery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationEndpointExternalGoogleCloudBigquery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // service_account_credentials - computed: true, optional: false, required: false
  public get serviceAccountCredentials() {
    return this.getStringAttribute('service_account_credentials');
  }
}

export class DataAivenServiceIntegrationEndpointExternalGoogleCloudBigqueryList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationEndpointExternalGoogleCloudBigqueryOutputReference {
    return new DataAivenServiceIntegrationEndpointExternalGoogleCloudBigqueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationEndpointExternalGoogleCloudLoggingUserConfig {
}

export function dataAivenServiceIntegrationEndpointExternalGoogleCloudLoggingUserConfigToTerraform(struct?: DataAivenServiceIntegrationEndpointExternalGoogleCloudLoggingUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationEndpointExternalGoogleCloudLoggingUserConfigToHclTerraform(struct?: DataAivenServiceIntegrationEndpointExternalGoogleCloudLoggingUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationEndpointExternalGoogleCloudLoggingUserConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationEndpointExternalGoogleCloudLoggingUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationEndpointExternalGoogleCloudLoggingUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_id - computed: true, optional: false, required: false
  public get logId() {
    return this.getStringAttribute('log_id');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // service_account_credentials - computed: true, optional: false, required: false
  public get serviceAccountCredentials() {
    return this.getStringAttribute('service_account_credentials');
  }
}

export class DataAivenServiceIntegrationEndpointExternalGoogleCloudLoggingUserConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationEndpointExternalGoogleCloudLoggingUserConfigOutputReference {
    return new DataAivenServiceIntegrationEndpointExternalGoogleCloudLoggingUserConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationEndpointExternalKafkaUserConfig {
}

export function dataAivenServiceIntegrationEndpointExternalKafkaUserConfigToTerraform(struct?: DataAivenServiceIntegrationEndpointExternalKafkaUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationEndpointExternalKafkaUserConfigToHclTerraform(struct?: DataAivenServiceIntegrationEndpointExternalKafkaUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationEndpointExternalKafkaUserConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationEndpointExternalKafkaUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationEndpointExternalKafkaUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bootstrap_servers - computed: true, optional: false, required: false
  public get bootstrapServers() {
    return this.getStringAttribute('bootstrap_servers');
  }

  // sasl_mechanism - computed: true, optional: false, required: false
  public get saslMechanism() {
    return this.getStringAttribute('sasl_mechanism');
  }

  // sasl_plain_password - computed: true, optional: false, required: false
  public get saslPlainPassword() {
    return this.getStringAttribute('sasl_plain_password');
  }

  // sasl_plain_username - computed: true, optional: false, required: false
  public get saslPlainUsername() {
    return this.getStringAttribute('sasl_plain_username');
  }

  // security_protocol - computed: true, optional: false, required: false
  public get securityProtocol() {
    return this.getStringAttribute('security_protocol');
  }

  // ssl_ca_cert - computed: true, optional: false, required: false
  public get sslCaCert() {
    return this.getStringAttribute('ssl_ca_cert');
  }

  // ssl_client_cert - computed: true, optional: false, required: false
  public get sslClientCert() {
    return this.getStringAttribute('ssl_client_cert');
  }

  // ssl_client_key - computed: true, optional: false, required: false
  public get sslClientKey() {
    return this.getStringAttribute('ssl_client_key');
  }

  // ssl_endpoint_identification_algorithm - computed: true, optional: false, required: false
  public get sslEndpointIdentificationAlgorithm() {
    return this.getStringAttribute('ssl_endpoint_identification_algorithm');
  }
}

export class DataAivenServiceIntegrationEndpointExternalKafkaUserConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationEndpointExternalKafkaUserConfigOutputReference {
    return new DataAivenServiceIntegrationEndpointExternalKafkaUserConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationEndpointExternalMysqlUserConfig {
}

export function dataAivenServiceIntegrationEndpointExternalMysqlUserConfigToTerraform(struct?: DataAivenServiceIntegrationEndpointExternalMysqlUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationEndpointExternalMysqlUserConfigToHclTerraform(struct?: DataAivenServiceIntegrationEndpointExternalMysqlUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationEndpointExternalMysqlUserConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationEndpointExternalMysqlUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationEndpointExternalMysqlUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // ssl_mode - computed: true, optional: false, required: false
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }

  // ssl_root_cert - computed: true, optional: false, required: false
  public get sslRootCert() {
    return this.getStringAttribute('ssl_root_cert');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataAivenServiceIntegrationEndpointExternalMysqlUserConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationEndpointExternalMysqlUserConfigOutputReference {
    return new DataAivenServiceIntegrationEndpointExternalMysqlUserConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationEndpointExternalOpensearchLogsUserConfig {
}

export function dataAivenServiceIntegrationEndpointExternalOpensearchLogsUserConfigToTerraform(struct?: DataAivenServiceIntegrationEndpointExternalOpensearchLogsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationEndpointExternalOpensearchLogsUserConfigToHclTerraform(struct?: DataAivenServiceIntegrationEndpointExternalOpensearchLogsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationEndpointExternalOpensearchLogsUserConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationEndpointExternalOpensearchLogsUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationEndpointExternalOpensearchLogsUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca - computed: true, optional: false, required: false
  public get ca() {
    return this.getStringAttribute('ca');
  }

  // index_days_max - computed: true, optional: false, required: false
  public get indexDaysMax() {
    return this.getNumberAttribute('index_days_max');
  }

  // index_prefix - computed: true, optional: false, required: false
  public get indexPrefix() {
    return this.getStringAttribute('index_prefix');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataAivenServiceIntegrationEndpointExternalOpensearchLogsUserConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationEndpointExternalOpensearchLogsUserConfigOutputReference {
    return new DataAivenServiceIntegrationEndpointExternalOpensearchLogsUserConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationEndpointExternalPostgresql {
}

export function dataAivenServiceIntegrationEndpointExternalPostgresqlToTerraform(struct?: DataAivenServiceIntegrationEndpointExternalPostgresql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationEndpointExternalPostgresqlToHclTerraform(struct?: DataAivenServiceIntegrationEndpointExternalPostgresql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationEndpointExternalPostgresqlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationEndpointExternalPostgresql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationEndpointExternalPostgresql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_database - computed: true, optional: false, required: false
  public get defaultDatabase() {
    return this.getStringAttribute('default_database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // ssl_client_certificate - computed: true, optional: false, required: false
  public get sslClientCertificate() {
    return this.getStringAttribute('ssl_client_certificate');
  }

  // ssl_client_key - computed: true, optional: false, required: false
  public get sslClientKey() {
    return this.getStringAttribute('ssl_client_key');
  }

  // ssl_mode - computed: true, optional: false, required: false
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }

  // ssl_root_cert - computed: true, optional: false, required: false
  public get sslRootCert() {
    return this.getStringAttribute('ssl_root_cert');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataAivenServiceIntegrationEndpointExternalPostgresqlList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationEndpointExternalPostgresqlOutputReference {
    return new DataAivenServiceIntegrationEndpointExternalPostgresqlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationEndpointExternalPrometheusUserConfig {
}

export function dataAivenServiceIntegrationEndpointExternalPrometheusUserConfigToTerraform(struct?: DataAivenServiceIntegrationEndpointExternalPrometheusUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationEndpointExternalPrometheusUserConfigToHclTerraform(struct?: DataAivenServiceIntegrationEndpointExternalPrometheusUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationEndpointExternalPrometheusUserConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationEndpointExternalPrometheusUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationEndpointExternalPrometheusUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // basic_auth_password - computed: true, optional: false, required: false
  public get basicAuthPassword() {
    return this.getStringAttribute('basic_auth_password');
  }

  // basic_auth_username - computed: true, optional: false, required: false
  public get basicAuthUsername() {
    return this.getStringAttribute('basic_auth_username');
  }

  // service_uri - computed: true, optional: false, required: false
  public get serviceUri() {
    return this.getStringAttribute('service_uri');
  }
}

export class DataAivenServiceIntegrationEndpointExternalPrometheusUserConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationEndpointExternalPrometheusUserConfigOutputReference {
    return new DataAivenServiceIntegrationEndpointExternalPrometheusUserConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationEndpointExternalSchemaRegistryUserConfig {
}

export function dataAivenServiceIntegrationEndpointExternalSchemaRegistryUserConfigToTerraform(struct?: DataAivenServiceIntegrationEndpointExternalSchemaRegistryUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationEndpointExternalSchemaRegistryUserConfigToHclTerraform(struct?: DataAivenServiceIntegrationEndpointExternalSchemaRegistryUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationEndpointExternalSchemaRegistryUserConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationEndpointExternalSchemaRegistryUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationEndpointExternalSchemaRegistryUserConfig | undefined) {
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

  // basic_auth_password - computed: true, optional: false, required: false
  public get basicAuthPassword() {
    return this.getStringAttribute('basic_auth_password');
  }

  // basic_auth_username - computed: true, optional: false, required: false
  public get basicAuthUsername() {
    return this.getStringAttribute('basic_auth_username');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataAivenServiceIntegrationEndpointExternalSchemaRegistryUserConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationEndpointExternalSchemaRegistryUserConfigOutputReference {
    return new DataAivenServiceIntegrationEndpointExternalSchemaRegistryUserConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationEndpointJolokiaUserConfig {
}

export function dataAivenServiceIntegrationEndpointJolokiaUserConfigToTerraform(struct?: DataAivenServiceIntegrationEndpointJolokiaUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationEndpointJolokiaUserConfigToHclTerraform(struct?: DataAivenServiceIntegrationEndpointJolokiaUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationEndpointJolokiaUserConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationEndpointJolokiaUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationEndpointJolokiaUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // basic_auth_password - computed: true, optional: false, required: false
  public get basicAuthPassword() {
    return this.getStringAttribute('basic_auth_password');
  }

  // basic_auth_username - computed: true, optional: false, required: false
  public get basicAuthUsername() {
    return this.getStringAttribute('basic_auth_username');
  }
}

export class DataAivenServiceIntegrationEndpointJolokiaUserConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationEndpointJolokiaUserConfigOutputReference {
    return new DataAivenServiceIntegrationEndpointJolokiaUserConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationEndpointPrometheusUserConfig {
}

export function dataAivenServiceIntegrationEndpointPrometheusUserConfigToTerraform(struct?: DataAivenServiceIntegrationEndpointPrometheusUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationEndpointPrometheusUserConfigToHclTerraform(struct?: DataAivenServiceIntegrationEndpointPrometheusUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationEndpointPrometheusUserConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationEndpointPrometheusUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationEndpointPrometheusUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // basic_auth_password - computed: true, optional: false, required: false
  public get basicAuthPassword() {
    return this.getStringAttribute('basic_auth_password');
  }

  // basic_auth_username - computed: true, optional: false, required: false
  public get basicAuthUsername() {
    return this.getStringAttribute('basic_auth_username');
  }
}

export class DataAivenServiceIntegrationEndpointPrometheusUserConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationEndpointPrometheusUserConfigOutputReference {
    return new DataAivenServiceIntegrationEndpointPrometheusUserConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationEndpointRsyslogUserConfig {
}

export function dataAivenServiceIntegrationEndpointRsyslogUserConfigToTerraform(struct?: DataAivenServiceIntegrationEndpointRsyslogUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationEndpointRsyslogUserConfigToHclTerraform(struct?: DataAivenServiceIntegrationEndpointRsyslogUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationEndpointRsyslogUserConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationEndpointRsyslogUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationEndpointRsyslogUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca - computed: true, optional: false, required: false
  public get ca() {
    return this.getStringAttribute('ca');
  }

  // cert - computed: true, optional: false, required: false
  public get cert() {
    return this.getStringAttribute('cert');
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // logline - computed: true, optional: false, required: false
  public get logline() {
    return this.getStringAttribute('logline');
  }

  // max_message_size - computed: true, optional: false, required: false
  public get maxMessageSize() {
    return this.getNumberAttribute('max_message_size');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // sd - computed: true, optional: false, required: false
  public get sd() {
    return this.getStringAttribute('sd');
  }

  // server - computed: true, optional: false, required: false
  public get server() {
    return this.getStringAttribute('server');
  }

  // tls - computed: true, optional: false, required: false
  public get tls() {
    return this.getBooleanAttribute('tls');
  }
}

export class DataAivenServiceIntegrationEndpointRsyslogUserConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationEndpointRsyslogUserConfigOutputReference {
    return new DataAivenServiceIntegrationEndpointRsyslogUserConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/service_integration_endpoint aiven_service_integration_endpoint}
*/
export class DataAivenServiceIntegrationEndpoint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_service_integration_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAivenServiceIntegrationEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAivenServiceIntegrationEndpoint to import
  * @param importFromId The id of the existing DataAivenServiceIntegrationEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/service_integration_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAivenServiceIntegrationEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_service_integration_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/service_integration_endpoint aiven_service_integration_endpoint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAivenServiceIntegrationEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: DataAivenServiceIntegrationEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'aiven_service_integration_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'aiven',
        providerVersion: '4.48.0',
        providerVersionConstraint: '4.48.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._endpointName = config.endpointName;
    this._id = config.id;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autoscaler_user_config - computed: true, optional: false, required: false
  private _autoscalerUserConfig = new DataAivenServiceIntegrationEndpointAutoscalerUserConfigList(this, "autoscaler_user_config", false);
  public get autoscalerUserConfig() {
    return this._autoscalerUserConfig;
  }

  // datadog_user_config - computed: true, optional: false, required: false
  private _datadogUserConfig = new DataAivenServiceIntegrationEndpointDatadogUserConfigList(this, "datadog_user_config", false);
  public get datadogUserConfig() {
    return this._datadogUserConfig;
  }

  // endpoint_config - computed: true, optional: false, required: false
  private _endpointConfig = new cdktf.StringMap(this, "endpoint_config");
  public get endpointConfig() {
    return this._endpointConfig;
  }

  // endpoint_name - computed: false, optional: false, required: true
  private _endpointName?: string; 
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }
  public set endpointName(value: string) {
    this._endpointName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointNameInput() {
    return this._endpointName;
  }

  // endpoint_type - computed: true, optional: false, required: false
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }

  // external_aws_cloudwatch_logs_user_config - computed: true, optional: false, required: false
  private _externalAwsCloudwatchLogsUserConfig = new DataAivenServiceIntegrationEndpointExternalAwsCloudwatchLogsUserConfigList(this, "external_aws_cloudwatch_logs_user_config", false);
  public get externalAwsCloudwatchLogsUserConfig() {
    return this._externalAwsCloudwatchLogsUserConfig;
  }

  // external_aws_cloudwatch_metrics_user_config - computed: true, optional: false, required: false
  private _externalAwsCloudwatchMetricsUserConfig = new DataAivenServiceIntegrationEndpointExternalAwsCloudwatchMetricsUserConfigList(this, "external_aws_cloudwatch_metrics_user_config", false);
  public get externalAwsCloudwatchMetricsUserConfig() {
    return this._externalAwsCloudwatchMetricsUserConfig;
  }

  // external_aws_s3_user_config - computed: true, optional: false, required: false
  private _externalAwsS3UserConfig = new DataAivenServiceIntegrationEndpointExternalAwsS3UserConfigList(this, "external_aws_s3_user_config", false);
  public get externalAwsS3UserConfig() {
    return this._externalAwsS3UserConfig;
  }

  // external_azure_blob_storage_user_config - computed: true, optional: false, required: false
  private _externalAzureBlobStorageUserConfig = new DataAivenServiceIntegrationEndpointExternalAzureBlobStorageUserConfigList(this, "external_azure_blob_storage_user_config", false);
  public get externalAzureBlobStorageUserConfig() {
    return this._externalAzureBlobStorageUserConfig;
  }

  // external_clickhouse_user_config - computed: true, optional: false, required: false
  private _externalClickhouseUserConfig = new DataAivenServiceIntegrationEndpointExternalClickhouseUserConfigList(this, "external_clickhouse_user_config", false);
  public get externalClickhouseUserConfig() {
    return this._externalClickhouseUserConfig;
  }

  // external_elasticsearch_logs_user_config - computed: true, optional: false, required: false
  private _externalElasticsearchLogsUserConfig = new DataAivenServiceIntegrationEndpointExternalElasticsearchLogsUserConfigList(this, "external_elasticsearch_logs_user_config", false);
  public get externalElasticsearchLogsUserConfig() {
    return this._externalElasticsearchLogsUserConfig;
  }

  // external_google_cloud_bigquery - computed: true, optional: false, required: false
  private _externalGoogleCloudBigquery = new DataAivenServiceIntegrationEndpointExternalGoogleCloudBigqueryList(this, "external_google_cloud_bigquery", false);
  public get externalGoogleCloudBigquery() {
    return this._externalGoogleCloudBigquery;
  }

  // external_google_cloud_logging_user_config - computed: true, optional: false, required: false
  private _externalGoogleCloudLoggingUserConfig = new DataAivenServiceIntegrationEndpointExternalGoogleCloudLoggingUserConfigList(this, "external_google_cloud_logging_user_config", false);
  public get externalGoogleCloudLoggingUserConfig() {
    return this._externalGoogleCloudLoggingUserConfig;
  }

  // external_kafka_user_config - computed: true, optional: false, required: false
  private _externalKafkaUserConfig = new DataAivenServiceIntegrationEndpointExternalKafkaUserConfigList(this, "external_kafka_user_config", false);
  public get externalKafkaUserConfig() {
    return this._externalKafkaUserConfig;
  }

  // external_mysql_user_config - computed: true, optional: false, required: false
  private _externalMysqlUserConfig = new DataAivenServiceIntegrationEndpointExternalMysqlUserConfigList(this, "external_mysql_user_config", false);
  public get externalMysqlUserConfig() {
    return this._externalMysqlUserConfig;
  }

  // external_opensearch_logs_user_config - computed: true, optional: false, required: false
  private _externalOpensearchLogsUserConfig = new DataAivenServiceIntegrationEndpointExternalOpensearchLogsUserConfigList(this, "external_opensearch_logs_user_config", false);
  public get externalOpensearchLogsUserConfig() {
    return this._externalOpensearchLogsUserConfig;
  }

  // external_postgresql - computed: true, optional: false, required: false
  private _externalPostgresql = new DataAivenServiceIntegrationEndpointExternalPostgresqlList(this, "external_postgresql", false);
  public get externalPostgresql() {
    return this._externalPostgresql;
  }

  // external_prometheus_user_config - computed: true, optional: false, required: false
  private _externalPrometheusUserConfig = new DataAivenServiceIntegrationEndpointExternalPrometheusUserConfigList(this, "external_prometheus_user_config", false);
  public get externalPrometheusUserConfig() {
    return this._externalPrometheusUserConfig;
  }

  // external_schema_registry_user_config - computed: true, optional: false, required: false
  private _externalSchemaRegistryUserConfig = new DataAivenServiceIntegrationEndpointExternalSchemaRegistryUserConfigList(this, "external_schema_registry_user_config", false);
  public get externalSchemaRegistryUserConfig() {
    return this._externalSchemaRegistryUserConfig;
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

  // jolokia_user_config - computed: true, optional: false, required: false
  private _jolokiaUserConfig = new DataAivenServiceIntegrationEndpointJolokiaUserConfigList(this, "jolokia_user_config", false);
  public get jolokiaUserConfig() {
    return this._jolokiaUserConfig;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // prometheus_user_config - computed: true, optional: false, required: false
  private _prometheusUserConfig = new DataAivenServiceIntegrationEndpointPrometheusUserConfigList(this, "prometheus_user_config", false);
  public get prometheusUserConfig() {
    return this._prometheusUserConfig;
  }

  // rsyslog_user_config - computed: true, optional: false, required: false
  private _rsyslogUserConfig = new DataAivenServiceIntegrationEndpointRsyslogUserConfigList(this, "rsyslog_user_config", false);
  public get rsyslogUserConfig() {
    return this._rsyslogUserConfig;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint_name: cdktf.stringToTerraform(this._endpointName),
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endpoint_name: {
        value: cdktf.stringToHclTerraform(this._endpointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
