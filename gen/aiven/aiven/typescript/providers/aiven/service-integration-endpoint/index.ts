// https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceIntegrationEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the service integration endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#endpoint_name ServiceIntegrationEndpoint#endpoint_name}
  */
  readonly endpointName: string;
  /**
  * The type of service integration endpoint. The possible values are `autoscaler`, `datadog`, `external_aws_cloudwatch_logs`, `external_aws_cloudwatch_metrics`, `external_aws_s3`, `external_azure_blob_storage`, `external_clickhouse`, `external_elasticsearch_logs`, `external_google_cloud_bigquery`, `external_google_cloud_logging`, `external_kafka`, `external_mysql`, `external_opensearch_logs`, `external_postgresql`, `external_prometheus`, `external_redis`, `external_schema_registry`, `external_sumologic_logs`, `jolokia`, `prometheus` and `rsyslog`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#endpoint_type ServiceIntegrationEndpoint#endpoint_type}
  */
  readonly endpointType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#id ServiceIntegrationEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Project the service integration endpoint is in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#project ServiceIntegrationEndpoint#project}
  */
  readonly project: string;
  /**
  * autoscaler_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#autoscaler_user_config ServiceIntegrationEndpoint#autoscaler_user_config}
  */
  readonly autoscalerUserConfig?: ServiceIntegrationEndpointAutoscalerUserConfig;
  /**
  * datadog_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#datadog_user_config ServiceIntegrationEndpoint#datadog_user_config}
  */
  readonly datadogUserConfig?: ServiceIntegrationEndpointDatadogUserConfig;
  /**
  * external_aws_cloudwatch_logs_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#external_aws_cloudwatch_logs_user_config ServiceIntegrationEndpoint#external_aws_cloudwatch_logs_user_config}
  */
  readonly externalAwsCloudwatchLogsUserConfig?: ServiceIntegrationEndpointExternalAwsCloudwatchLogsUserConfig;
  /**
  * external_aws_cloudwatch_metrics_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#external_aws_cloudwatch_metrics_user_config ServiceIntegrationEndpoint#external_aws_cloudwatch_metrics_user_config}
  */
  readonly externalAwsCloudwatchMetricsUserConfig?: ServiceIntegrationEndpointExternalAwsCloudwatchMetricsUserConfig;
  /**
  * external_aws_s3_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#external_aws_s3_user_config ServiceIntegrationEndpoint#external_aws_s3_user_config}
  */
  readonly externalAwsS3UserConfig?: ServiceIntegrationEndpointExternalAwsS3UserConfig;
  /**
  * external_azure_blob_storage_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#external_azure_blob_storage_user_config ServiceIntegrationEndpoint#external_azure_blob_storage_user_config}
  */
  readonly externalAzureBlobStorageUserConfig?: ServiceIntegrationEndpointExternalAzureBlobStorageUserConfig;
  /**
  * external_clickhouse_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#external_clickhouse_user_config ServiceIntegrationEndpoint#external_clickhouse_user_config}
  */
  readonly externalClickhouseUserConfig?: ServiceIntegrationEndpointExternalClickhouseUserConfig;
  /**
  * external_elasticsearch_logs_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#external_elasticsearch_logs_user_config ServiceIntegrationEndpoint#external_elasticsearch_logs_user_config}
  */
  readonly externalElasticsearchLogsUserConfig?: ServiceIntegrationEndpointExternalElasticsearchLogsUserConfig;
  /**
  * external_google_cloud_bigquery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#external_google_cloud_bigquery ServiceIntegrationEndpoint#external_google_cloud_bigquery}
  */
  readonly externalGoogleCloudBigquery?: ServiceIntegrationEndpointExternalGoogleCloudBigquery;
  /**
  * external_google_cloud_logging_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#external_google_cloud_logging_user_config ServiceIntegrationEndpoint#external_google_cloud_logging_user_config}
  */
  readonly externalGoogleCloudLoggingUserConfig?: ServiceIntegrationEndpointExternalGoogleCloudLoggingUserConfig;
  /**
  * external_kafka_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#external_kafka_user_config ServiceIntegrationEndpoint#external_kafka_user_config}
  */
  readonly externalKafkaUserConfig?: ServiceIntegrationEndpointExternalKafkaUserConfig;
  /**
  * external_mysql_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#external_mysql_user_config ServiceIntegrationEndpoint#external_mysql_user_config}
  */
  readonly externalMysqlUserConfig?: ServiceIntegrationEndpointExternalMysqlUserConfig;
  /**
  * external_opensearch_logs_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#external_opensearch_logs_user_config ServiceIntegrationEndpoint#external_opensearch_logs_user_config}
  */
  readonly externalOpensearchLogsUserConfig?: ServiceIntegrationEndpointExternalOpensearchLogsUserConfig;
  /**
  * external_postgresql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#external_postgresql ServiceIntegrationEndpoint#external_postgresql}
  */
  readonly externalPostgresql?: ServiceIntegrationEndpointExternalPostgresql;
  /**
  * external_prometheus_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#external_prometheus_user_config ServiceIntegrationEndpoint#external_prometheus_user_config}
  */
  readonly externalPrometheusUserConfig?: ServiceIntegrationEndpointExternalPrometheusUserConfig;
  /**
  * external_schema_registry_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#external_schema_registry_user_config ServiceIntegrationEndpoint#external_schema_registry_user_config}
  */
  readonly externalSchemaRegistryUserConfig?: ServiceIntegrationEndpointExternalSchemaRegistryUserConfig;
  /**
  * jolokia_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#jolokia_user_config ServiceIntegrationEndpoint#jolokia_user_config}
  */
  readonly jolokiaUserConfig?: ServiceIntegrationEndpointJolokiaUserConfig;
  /**
  * prometheus_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#prometheus_user_config ServiceIntegrationEndpoint#prometheus_user_config}
  */
  readonly prometheusUserConfig?: ServiceIntegrationEndpointPrometheusUserConfig;
  /**
  * rsyslog_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#rsyslog_user_config ServiceIntegrationEndpoint#rsyslog_user_config}
  */
  readonly rsyslogUserConfig?: ServiceIntegrationEndpointRsyslogUserConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#timeouts ServiceIntegrationEndpoint#timeouts}
  */
  readonly timeouts?: ServiceIntegrationEndpointTimeouts;
}
export interface ServiceIntegrationEndpointAutoscalerUserConfigAutoscaling {
  /**
  * The maximum total disk size (in gb) to allow autoscaler to scale up to. Example: `300`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#cap_gb ServiceIntegrationEndpoint#cap_gb}
  */
  readonly capGb: number;
  /**
  * Enum: `autoscale_disk`. Type of autoscale event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#type ServiceIntegrationEndpoint#type}
  */
  readonly type: string;
}

export function serviceIntegrationEndpointAutoscalerUserConfigAutoscalingToTerraform(struct?: ServiceIntegrationEndpointAutoscalerUserConfigAutoscaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cap_gb: cdktf.numberToTerraform(struct!.capGb),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function serviceIntegrationEndpointAutoscalerUserConfigAutoscalingToHclTerraform(struct?: ServiceIntegrationEndpointAutoscalerUserConfigAutoscaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cap_gb: {
      value: cdktf.numberToHclTerraform(struct!.capGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationEndpointAutoscalerUserConfigAutoscalingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceIntegrationEndpointAutoscalerUserConfigAutoscaling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.capGb = this._capGb;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationEndpointAutoscalerUserConfigAutoscaling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capGb = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capGb = value.capGb;
      this._type = value.type;
    }
  }

  // cap_gb - computed: false, optional: false, required: true
  private _capGb?: number; 
  public get capGb() {
    return this.getNumberAttribute('cap_gb');
  }
  public set capGb(value: number) {
    this._capGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capGbInput() {
    return this._capGb;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ServiceIntegrationEndpointAutoscalerUserConfigAutoscalingList extends cdktf.ComplexList {
  public internalValue? : ServiceIntegrationEndpointAutoscalerUserConfigAutoscaling[] | cdktf.IResolvable

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
  public get(index: number): ServiceIntegrationEndpointAutoscalerUserConfigAutoscalingOutputReference {
    return new ServiceIntegrationEndpointAutoscalerUserConfigAutoscalingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceIntegrationEndpointAutoscalerUserConfig {
  /**
  * autoscaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#autoscaling ServiceIntegrationEndpoint#autoscaling}
  */
  readonly autoscaling: ServiceIntegrationEndpointAutoscalerUserConfigAutoscaling[] | cdktf.IResolvable;
}

export function serviceIntegrationEndpointAutoscalerUserConfigToTerraform(struct?: ServiceIntegrationEndpointAutoscalerUserConfigOutputReference | ServiceIntegrationEndpointAutoscalerUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscaling: cdktf.listMapper(serviceIntegrationEndpointAutoscalerUserConfigAutoscalingToTerraform, true)(struct!.autoscaling),
  }
}


export function serviceIntegrationEndpointAutoscalerUserConfigToHclTerraform(struct?: ServiceIntegrationEndpointAutoscalerUserConfigOutputReference | ServiceIntegrationEndpointAutoscalerUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoscaling: {
      value: cdktf.listMapperHcl(serviceIntegrationEndpointAutoscalerUserConfigAutoscalingToHclTerraform, true)(struct!.autoscaling),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceIntegrationEndpointAutoscalerUserConfigAutoscalingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationEndpointAutoscalerUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationEndpointAutoscalerUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaling = this._autoscaling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationEndpointAutoscalerUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoscaling.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoscaling.internalValue = value.autoscaling;
    }
  }

  // autoscaling - computed: false, optional: false, required: true
  private _autoscaling = new ServiceIntegrationEndpointAutoscalerUserConfigAutoscalingList(this, "autoscaling", false);
  public get autoscaling() {
    return this._autoscaling;
  }
  public putAutoscaling(value: ServiceIntegrationEndpointAutoscalerUserConfigAutoscaling[] | cdktf.IResolvable) {
    this._autoscaling.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingInput() {
    return this._autoscaling.internalValue;
  }
}
export interface ServiceIntegrationEndpointDatadogUserConfigDatadogTags {
  /**
  * Optional tag explanation. Example: `Used to tag primary replica metrics`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#comment ServiceIntegrationEndpoint#comment}
  */
  readonly comment?: string;
  /**
  * Tag format and usage are described here: https://docs.datadoghq.com/getting_started/tagging. Tags with prefix `aiven-` are reserved for Aiven. Example: `replica:primary`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#tag ServiceIntegrationEndpoint#tag}
  */
  readonly tag: string;
}

export function serviceIntegrationEndpointDatadogUserConfigDatadogTagsToTerraform(struct?: ServiceIntegrationEndpointDatadogUserConfigDatadogTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function serviceIntegrationEndpointDatadogUserConfigDatadogTagsToHclTerraform(struct?: ServiceIntegrationEndpointDatadogUserConfigDatadogTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationEndpointDatadogUserConfigDatadogTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceIntegrationEndpointDatadogUserConfigDatadogTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationEndpointDatadogUserConfigDatadogTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._tag = value.tag;
    }
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // tag - computed: false, optional: false, required: true
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class ServiceIntegrationEndpointDatadogUserConfigDatadogTagsList extends cdktf.ComplexList {
  public internalValue? : ServiceIntegrationEndpointDatadogUserConfigDatadogTags[] | cdktf.IResolvable

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
  public get(index: number): ServiceIntegrationEndpointDatadogUserConfigDatadogTagsOutputReference {
    return new ServiceIntegrationEndpointDatadogUserConfigDatadogTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceIntegrationEndpointDatadogUserConfig {
  /**
  * Datadog API key. Example: `848f30907c15c55d601fe45487cce9b6`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#datadog_api_key ServiceIntegrationEndpoint#datadog_api_key}
  */
  readonly datadogApiKey: string;
  /**
  * Disable consumer group metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#disable_consumer_stats ServiceIntegrationEndpoint#disable_consumer_stats}
  */
  readonly disableConsumerStats?: boolean | cdktf.IResolvable;
  /**
  * Extra tags prefix. Defaults to aiven.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#extra_tags_prefix ServiceIntegrationEndpoint#extra_tags_prefix}
  */
  readonly extraTagsPrefix?: string;
  /**
  * Number of separate instances to fetch kafka consumer statistics with. Example: `8`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#kafka_consumer_check_instances ServiceIntegrationEndpoint#kafka_consumer_check_instances}
  */
  readonly kafkaConsumerCheckInstances?: number;
  /**
  * Number of seconds that datadog will wait to get consumer statistics from brokers. Example: `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#kafka_consumer_stats_timeout ServiceIntegrationEndpoint#kafka_consumer_stats_timeout}
  */
  readonly kafkaConsumerStatsTimeout?: number;
  /**
  * Maximum number of partition contexts to send. Example: `32000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#max_partition_contexts ServiceIntegrationEndpoint#max_partition_contexts}
  */
  readonly maxPartitionContexts?: number;
  /**
  * Enum: `ap1.datadoghq.com`, `datadoghq.com`, `datadoghq.eu`, `ddog-gov.com`, `us3.datadoghq.com`, `us5.datadoghq.com`. Datadog intake site. Defaults to datadoghq.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#site ServiceIntegrationEndpoint#site}
  */
  readonly site?: string;
  /**
  * datadog_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#datadog_tags ServiceIntegrationEndpoint#datadog_tags}
  */
  readonly datadogTags?: ServiceIntegrationEndpointDatadogUserConfigDatadogTags[] | cdktf.IResolvable;
}

export function serviceIntegrationEndpointDatadogUserConfigToTerraform(struct?: ServiceIntegrationEndpointDatadogUserConfigOutputReference | ServiceIntegrationEndpointDatadogUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datadog_api_key: cdktf.stringToTerraform(struct!.datadogApiKey),
    disable_consumer_stats: cdktf.booleanToTerraform(struct!.disableConsumerStats),
    extra_tags_prefix: cdktf.stringToTerraform(struct!.extraTagsPrefix),
    kafka_consumer_check_instances: cdktf.numberToTerraform(struct!.kafkaConsumerCheckInstances),
    kafka_consumer_stats_timeout: cdktf.numberToTerraform(struct!.kafkaConsumerStatsTimeout),
    max_partition_contexts: cdktf.numberToTerraform(struct!.maxPartitionContexts),
    site: cdktf.stringToTerraform(struct!.site),
    datadog_tags: cdktf.listMapper(serviceIntegrationEndpointDatadogUserConfigDatadogTagsToTerraform, true)(struct!.datadogTags),
  }
}


export function serviceIntegrationEndpointDatadogUserConfigToHclTerraform(struct?: ServiceIntegrationEndpointDatadogUserConfigOutputReference | ServiceIntegrationEndpointDatadogUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datadog_api_key: {
      value: cdktf.stringToHclTerraform(struct!.datadogApiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_consumer_stats: {
      value: cdktf.booleanToHclTerraform(struct!.disableConsumerStats),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extra_tags_prefix: {
      value: cdktf.stringToHclTerraform(struct!.extraTagsPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kafka_consumer_check_instances: {
      value: cdktf.numberToHclTerraform(struct!.kafkaConsumerCheckInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kafka_consumer_stats_timeout: {
      value: cdktf.numberToHclTerraform(struct!.kafkaConsumerStatsTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_partition_contexts: {
      value: cdktf.numberToHclTerraform(struct!.maxPartitionContexts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    site: {
      value: cdktf.stringToHclTerraform(struct!.site),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datadog_tags: {
      value: cdktf.listMapperHcl(serviceIntegrationEndpointDatadogUserConfigDatadogTagsToHclTerraform, true)(struct!.datadogTags),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceIntegrationEndpointDatadogUserConfigDatadogTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationEndpointDatadogUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationEndpointDatadogUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datadogApiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadogApiKey = this._datadogApiKey;
    }
    if (this._disableConsumerStats !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableConsumerStats = this._disableConsumerStats;
    }
    if (this._extraTagsPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraTagsPrefix = this._extraTagsPrefix;
    }
    if (this._kafkaConsumerCheckInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaConsumerCheckInstances = this._kafkaConsumerCheckInstances;
    }
    if (this._kafkaConsumerStatsTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaConsumerStatsTimeout = this._kafkaConsumerStatsTimeout;
    }
    if (this._maxPartitionContexts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPartitionContexts = this._maxPartitionContexts;
    }
    if (this._site !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site;
    }
    if (this._datadogTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadogTags = this._datadogTags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationEndpointDatadogUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datadogApiKey = undefined;
      this._disableConsumerStats = undefined;
      this._extraTagsPrefix = undefined;
      this._kafkaConsumerCheckInstances = undefined;
      this._kafkaConsumerStatsTimeout = undefined;
      this._maxPartitionContexts = undefined;
      this._site = undefined;
      this._datadogTags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datadogApiKey = value.datadogApiKey;
      this._disableConsumerStats = value.disableConsumerStats;
      this._extraTagsPrefix = value.extraTagsPrefix;
      this._kafkaConsumerCheckInstances = value.kafkaConsumerCheckInstances;
      this._kafkaConsumerStatsTimeout = value.kafkaConsumerStatsTimeout;
      this._maxPartitionContexts = value.maxPartitionContexts;
      this._site = value.site;
      this._datadogTags.internalValue = value.datadogTags;
    }
  }

  // datadog_api_key - computed: false, optional: false, required: true
  private _datadogApiKey?: string; 
  public get datadogApiKey() {
    return this.getStringAttribute('datadog_api_key');
  }
  public set datadogApiKey(value: string) {
    this._datadogApiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogApiKeyInput() {
    return this._datadogApiKey;
  }

  // disable_consumer_stats - computed: false, optional: true, required: false
  private _disableConsumerStats?: boolean | cdktf.IResolvable; 
  public get disableConsumerStats() {
    return this.getBooleanAttribute('disable_consumer_stats');
  }
  public set disableConsumerStats(value: boolean | cdktf.IResolvable) {
    this._disableConsumerStats = value;
  }
  public resetDisableConsumerStats() {
    this._disableConsumerStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableConsumerStatsInput() {
    return this._disableConsumerStats;
  }

  // extra_tags_prefix - computed: false, optional: true, required: false
  private _extraTagsPrefix?: string; 
  public get extraTagsPrefix() {
    return this.getStringAttribute('extra_tags_prefix');
  }
  public set extraTagsPrefix(value: string) {
    this._extraTagsPrefix = value;
  }
  public resetExtraTagsPrefix() {
    this._extraTagsPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraTagsPrefixInput() {
    return this._extraTagsPrefix;
  }

  // kafka_consumer_check_instances - computed: false, optional: true, required: false
  private _kafkaConsumerCheckInstances?: number; 
  public get kafkaConsumerCheckInstances() {
    return this.getNumberAttribute('kafka_consumer_check_instances');
  }
  public set kafkaConsumerCheckInstances(value: number) {
    this._kafkaConsumerCheckInstances = value;
  }
  public resetKafkaConsumerCheckInstances() {
    this._kafkaConsumerCheckInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConsumerCheckInstancesInput() {
    return this._kafkaConsumerCheckInstances;
  }

  // kafka_consumer_stats_timeout - computed: false, optional: true, required: false
  private _kafkaConsumerStatsTimeout?: number; 
  public get kafkaConsumerStatsTimeout() {
    return this.getNumberAttribute('kafka_consumer_stats_timeout');
  }
  public set kafkaConsumerStatsTimeout(value: number) {
    this._kafkaConsumerStatsTimeout = value;
  }
  public resetKafkaConsumerStatsTimeout() {
    this._kafkaConsumerStatsTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConsumerStatsTimeoutInput() {
    return this._kafkaConsumerStatsTimeout;
  }

  // max_partition_contexts - computed: false, optional: true, required: false
  private _maxPartitionContexts?: number; 
  public get maxPartitionContexts() {
    return this.getNumberAttribute('max_partition_contexts');
  }
  public set maxPartitionContexts(value: number) {
    this._maxPartitionContexts = value;
  }
  public resetMaxPartitionContexts() {
    this._maxPartitionContexts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPartitionContextsInput() {
    return this._maxPartitionContexts;
  }

  // site - computed: false, optional: true, required: false
  private _site?: string; 
  public get site() {
    return this.getStringAttribute('site');
  }
  public set site(value: string) {
    this._site = value;
  }
  public resetSite() {
    this._site = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site;
  }

  // datadog_tags - computed: false, optional: true, required: false
  private _datadogTags = new ServiceIntegrationEndpointDatadogUserConfigDatadogTagsList(this, "datadog_tags", false);
  public get datadogTags() {
    return this._datadogTags;
  }
  public putDatadogTags(value: ServiceIntegrationEndpointDatadogUserConfigDatadogTags[] | cdktf.IResolvable) {
    this._datadogTags.internalValue = value;
  }
  public resetDatadogTags() {
    this._datadogTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogTagsInput() {
    return this._datadogTags.internalValue;
  }
}
export interface ServiceIntegrationEndpointExternalAwsCloudwatchLogsUserConfig {
  /**
  * AWS access key. Required permissions are logs:CreateLogGroup, logs:CreateLogStream, logs:PutLogEvents and logs:DescribeLogStreams. Example: `AAAAAAAAAAAAAAAAAAAA`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#access_key ServiceIntegrationEndpoint#access_key}
  */
  readonly accessKey: string;
  /**
  * AWS CloudWatch log group name. Example: `my-log-group`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#log_group_name ServiceIntegrationEndpoint#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * AWS region. Example: `us-east-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#region ServiceIntegrationEndpoint#region}
  */
  readonly region: string;
  /**
  * AWS secret key. Example: `AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#secret_key ServiceIntegrationEndpoint#secret_key}
  */
  readonly secretKey: string;
}

export function serviceIntegrationEndpointExternalAwsCloudwatchLogsUserConfigToTerraform(struct?: ServiceIntegrationEndpointExternalAwsCloudwatchLogsUserConfigOutputReference | ServiceIntegrationEndpointExternalAwsCloudwatchLogsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    region: cdktf.stringToTerraform(struct!.region),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
  }
}


export function serviceIntegrationEndpointExternalAwsCloudwatchLogsUserConfigToHclTerraform(struct?: ServiceIntegrationEndpointExternalAwsCloudwatchLogsUserConfigOutputReference | ServiceIntegrationEndpointExternalAwsCloudwatchLogsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_group_name: {
      value: cdktf.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationEndpointExternalAwsCloudwatchLogsUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationEndpointExternalAwsCloudwatchLogsUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationEndpointExternalAwsCloudwatchLogsUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._logGroupName = undefined;
      this._region = undefined;
      this._secretKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._logGroupName = value.logGroupName;
      this._region = value.region;
      this._secretKey = value.secretKey;
    }
  }

  // access_key - computed: false, optional: false, required: true
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_key - computed: false, optional: false, required: true
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }
}
export interface ServiceIntegrationEndpointExternalAwsCloudwatchMetricsUserConfig {
  /**
  * AWS access key. Required permissions are cloudwatch:PutMetricData. Example: `AAAAAAAAAAAAAAAAAAAA`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#access_key ServiceIntegrationEndpoint#access_key}
  */
  readonly accessKey: string;
  /**
  * AWS CloudWatch Metrics Namespace. Example: `my-metrics-namespace`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#namespace ServiceIntegrationEndpoint#namespace}
  */
  readonly namespace: string;
  /**
  * AWS region. Example: `us-east-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#region ServiceIntegrationEndpoint#region}
  */
  readonly region: string;
  /**
  * AWS secret key. Example: `AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#secret_key ServiceIntegrationEndpoint#secret_key}
  */
  readonly secretKey: string;
}

export function serviceIntegrationEndpointExternalAwsCloudwatchMetricsUserConfigToTerraform(struct?: ServiceIntegrationEndpointExternalAwsCloudwatchMetricsUserConfigOutputReference | ServiceIntegrationEndpointExternalAwsCloudwatchMetricsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    region: cdktf.stringToTerraform(struct!.region),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
  }
}


export function serviceIntegrationEndpointExternalAwsCloudwatchMetricsUserConfigToHclTerraform(struct?: ServiceIntegrationEndpointExternalAwsCloudwatchMetricsUserConfigOutputReference | ServiceIntegrationEndpointExternalAwsCloudwatchMetricsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationEndpointExternalAwsCloudwatchMetricsUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationEndpointExternalAwsCloudwatchMetricsUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationEndpointExternalAwsCloudwatchMetricsUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._namespace = undefined;
      this._region = undefined;
      this._secretKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._namespace = value.namespace;
      this._region = value.region;
      this._secretKey = value.secretKey;
    }
  }

  // access_key - computed: false, optional: false, required: true
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_key - computed: false, optional: false, required: true
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }
}
export interface ServiceIntegrationEndpointExternalAwsS3UserConfig {
  /**
  * Access Key Id. Example: `AAAAAAAAAAAAAAAAAAA`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#access_key_id ServiceIntegrationEndpoint#access_key_id}
  */
  readonly accessKeyId: string;
  /**
  * Secret Access Key. Example: `AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#secret_access_key ServiceIntegrationEndpoint#secret_access_key}
  */
  readonly secretAccessKey: string;
  /**
  * S3-compatible bucket URL. Example: `https://mybucket.s3-myregion.amazonaws.com/mydataset/`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#url ServiceIntegrationEndpoint#url}
  */
  readonly url: string;
}

export function serviceIntegrationEndpointExternalAwsS3UserConfigToTerraform(struct?: ServiceIntegrationEndpointExternalAwsS3UserConfigOutputReference | ServiceIntegrationEndpointExternalAwsS3UserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function serviceIntegrationEndpointExternalAwsS3UserConfigToHclTerraform(struct?: ServiceIntegrationEndpointExternalAwsS3UserConfigOutputReference | ServiceIntegrationEndpointExternalAwsS3UserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationEndpointExternalAwsS3UserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationEndpointExternalAwsS3UserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationEndpointExternalAwsS3UserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._secretAccessKey = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._secretAccessKey = value.secretAccessKey;
      this._url = value.url;
    }
  }

  // access_key_id - computed: false, optional: false, required: true
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // secret_access_key - computed: false, optional: false, required: true
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface ServiceIntegrationEndpointExternalAzureBlobStorageUserConfig {
  /**
  * Blob path. Example: `path/to/blob/file.csv`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#blob_path ServiceIntegrationEndpoint#blob_path}
  */
  readonly blobPath?: string;
  /**
  * Azure Blob Storage connection string. Example: `AccountName=IDENT;AccountKey=SECRET`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#connection_string ServiceIntegrationEndpoint#connection_string}
  */
  readonly connectionString: string;
  /**
  * Container. Example: `container-dev`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#container ServiceIntegrationEndpoint#container}
  */
  readonly container: string;
}

export function serviceIntegrationEndpointExternalAzureBlobStorageUserConfigToTerraform(struct?: ServiceIntegrationEndpointExternalAzureBlobStorageUserConfigOutputReference | ServiceIntegrationEndpointExternalAzureBlobStorageUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blob_path: cdktf.stringToTerraform(struct!.blobPath),
    connection_string: cdktf.stringToTerraform(struct!.connectionString),
    container: cdktf.stringToTerraform(struct!.container),
  }
}


export function serviceIntegrationEndpointExternalAzureBlobStorageUserConfigToHclTerraform(struct?: ServiceIntegrationEndpointExternalAzureBlobStorageUserConfigOutputReference | ServiceIntegrationEndpointExternalAzureBlobStorageUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blob_path: {
      value: cdktf.stringToHclTerraform(struct!.blobPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_string: {
      value: cdktf.stringToHclTerraform(struct!.connectionString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationEndpointExternalAzureBlobStorageUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationEndpointExternalAzureBlobStorageUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blobPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.blobPath = this._blobPath;
    }
    if (this._connectionString !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionString = this._connectionString;
    }
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationEndpointExternalAzureBlobStorageUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blobPath = undefined;
      this._connectionString = undefined;
      this._container = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blobPath = value.blobPath;
      this._connectionString = value.connectionString;
      this._container = value.container;
    }
  }

  // blob_path - computed: false, optional: true, required: false
  private _blobPath?: string; 
  public get blobPath() {
    return this.getStringAttribute('blob_path');
  }
  public set blobPath(value: string) {
    this._blobPath = value;
  }
  public resetBlobPath() {
    this._blobPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blobPathInput() {
    return this._blobPath;
  }

  // connection_string - computed: false, optional: false, required: true
  private _connectionString?: string; 
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }
  public set connectionString(value: string) {
    this._connectionString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString;
  }

  // container - computed: false, optional: false, required: true
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }
}
export interface ServiceIntegrationEndpointExternalClickhouseUserConfig {
  /**
  * Hostname or IP address of the server. Example: `my.server.com`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#host ServiceIntegrationEndpoint#host}
  */
  readonly host: string;
  /**
  * Password. Example: `jjKk45Nnd`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#password ServiceIntegrationEndpoint#password}
  */
  readonly password: string;
  /**
  * Secure TCP server port. Example: `9440`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#port ServiceIntegrationEndpoint#port}
  */
  readonly port: number;
  /**
  * User name. Example: `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#username ServiceIntegrationEndpoint#username}
  */
  readonly username: string;
}

export function serviceIntegrationEndpointExternalClickhouseUserConfigToTerraform(struct?: ServiceIntegrationEndpointExternalClickhouseUserConfigOutputReference | ServiceIntegrationEndpointExternalClickhouseUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function serviceIntegrationEndpointExternalClickhouseUserConfigToHclTerraform(struct?: ServiceIntegrationEndpointExternalClickhouseUserConfigOutputReference | ServiceIntegrationEndpointExternalClickhouseUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationEndpointExternalClickhouseUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationEndpointExternalClickhouseUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationEndpointExternalClickhouseUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._password = undefined;
      this._port = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._password = value.password;
      this._port = value.port;
      this._username = value.username;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface ServiceIntegrationEndpointExternalElasticsearchLogsUserConfig {
  /**
  * PEM encoded CA certificate. Example: `-----BEGIN CERTIFICATE-----
  * ...
  * -----END CERTIFICATE-----
  * `.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#ca ServiceIntegrationEndpoint#ca}
  */
  readonly ca?: string;
  /**
  * Maximum number of days of logs to keep. Default: `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#index_days_max ServiceIntegrationEndpoint#index_days_max}
  */
  readonly indexDaysMax?: number;
  /**
  * Elasticsearch index prefix. Default: `logs`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#index_prefix ServiceIntegrationEndpoint#index_prefix}
  */
  readonly indexPrefix: string;
  /**
  * Elasticsearch request timeout limit. Default: `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#timeout ServiceIntegrationEndpoint#timeout}
  */
  readonly timeout?: number;
  /**
  * Elasticsearch connection URL. Example: `https://user:passwd@logs.example.com/`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#url ServiceIntegrationEndpoint#url}
  */
  readonly url: string;
}

export function serviceIntegrationEndpointExternalElasticsearchLogsUserConfigToTerraform(struct?: ServiceIntegrationEndpointExternalElasticsearchLogsUserConfigOutputReference | ServiceIntegrationEndpointExternalElasticsearchLogsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca: cdktf.stringToTerraform(struct!.ca),
    index_days_max: cdktf.numberToTerraform(struct!.indexDaysMax),
    index_prefix: cdktf.stringToTerraform(struct!.indexPrefix),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function serviceIntegrationEndpointExternalElasticsearchLogsUserConfigToHclTerraform(struct?: ServiceIntegrationEndpointExternalElasticsearchLogsUserConfigOutputReference | ServiceIntegrationEndpointExternalElasticsearchLogsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca: {
      value: cdktf.stringToHclTerraform(struct!.ca),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_days_max: {
      value: cdktf.numberToHclTerraform(struct!.indexDaysMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    index_prefix: {
      value: cdktf.stringToHclTerraform(struct!.indexPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationEndpointExternalElasticsearchLogsUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationEndpointExternalElasticsearchLogsUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ca !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca;
    }
    if (this._indexDaysMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexDaysMax = this._indexDaysMax;
    }
    if (this._indexPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexPrefix = this._indexPrefix;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationEndpointExternalElasticsearchLogsUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ca = undefined;
      this._indexDaysMax = undefined;
      this._indexPrefix = undefined;
      this._timeout = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ca = value.ca;
      this._indexDaysMax = value.indexDaysMax;
      this._indexPrefix = value.indexPrefix;
      this._timeout = value.timeout;
      this._url = value.url;
    }
  }

  // ca - computed: false, optional: true, required: false
  private _ca?: string; 
  public get ca() {
    return this.getStringAttribute('ca');
  }
  public set ca(value: string) {
    this._ca = value;
  }
  public resetCa() {
    this._ca = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca;
  }

  // index_days_max - computed: false, optional: true, required: false
  private _indexDaysMax?: number; 
  public get indexDaysMax() {
    return this.getNumberAttribute('index_days_max');
  }
  public set indexDaysMax(value: number) {
    this._indexDaysMax = value;
  }
  public resetIndexDaysMax() {
    this._indexDaysMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexDaysMaxInput() {
    return this._indexDaysMax;
  }

  // index_prefix - computed: false, optional: false, required: true
  private _indexPrefix?: string; 
  public get indexPrefix() {
    return this.getStringAttribute('index_prefix');
  }
  public set indexPrefix(value: string) {
    this._indexPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexPrefixInput() {
    return this._indexPrefix;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface ServiceIntegrationEndpointExternalGoogleCloudBigquery {
  /**
  * GCP project id. Example: `snappy-photon-12345`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#project_id ServiceIntegrationEndpoint#project_id}
  */
  readonly projectId: string;
  /**
  * This is a JSON object with the fields documented in https://cloud.google.com/iam/docs/creating-managing-service-account-keys. Example: `{"type": "service_account", ...`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#service_account_credentials ServiceIntegrationEndpoint#service_account_credentials}
  */
  readonly serviceAccountCredentials: string;
}

export function serviceIntegrationEndpointExternalGoogleCloudBigqueryToTerraform(struct?: ServiceIntegrationEndpointExternalGoogleCloudBigqueryOutputReference | ServiceIntegrationEndpointExternalGoogleCloudBigquery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
    service_account_credentials: cdktf.stringToTerraform(struct!.serviceAccountCredentials),
  }
}


export function serviceIntegrationEndpointExternalGoogleCloudBigqueryToHclTerraform(struct?: ServiceIntegrationEndpointExternalGoogleCloudBigqueryOutputReference | ServiceIntegrationEndpointExternalGoogleCloudBigquery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_credentials: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationEndpointExternalGoogleCloudBigqueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationEndpointExternalGoogleCloudBigquery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._serviceAccountCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountCredentials = this._serviceAccountCredentials;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationEndpointExternalGoogleCloudBigquery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._projectId = undefined;
      this._serviceAccountCredentials = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._projectId = value.projectId;
      this._serviceAccountCredentials = value.serviceAccountCredentials;
    }
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // service_account_credentials - computed: false, optional: false, required: true
  private _serviceAccountCredentials?: string; 
  public get serviceAccountCredentials() {
    return this.getStringAttribute('service_account_credentials');
  }
  public set serviceAccountCredentials(value: string) {
    this._serviceAccountCredentials = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountCredentialsInput() {
    return this._serviceAccountCredentials;
  }
}
export interface ServiceIntegrationEndpointExternalGoogleCloudLoggingUserConfig {
  /**
  * Google Cloud Logging log id. Example: `syslog`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#log_id ServiceIntegrationEndpoint#log_id}
  */
  readonly logId: string;
  /**
  * GCP project id. Example: `snappy-photon-12345`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#project_id ServiceIntegrationEndpoint#project_id}
  */
  readonly projectId: string;
  /**
  * This is a JSON object with the fields documented in https://cloud.google.com/iam/docs/creating-managing-service-account-keys. Example: `{"type": "service_account", ...`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#service_account_credentials ServiceIntegrationEndpoint#service_account_credentials}
  */
  readonly serviceAccountCredentials: string;
}

export function serviceIntegrationEndpointExternalGoogleCloudLoggingUserConfigToTerraform(struct?: ServiceIntegrationEndpointExternalGoogleCloudLoggingUserConfigOutputReference | ServiceIntegrationEndpointExternalGoogleCloudLoggingUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_id: cdktf.stringToTerraform(struct!.logId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    service_account_credentials: cdktf.stringToTerraform(struct!.serviceAccountCredentials),
  }
}


export function serviceIntegrationEndpointExternalGoogleCloudLoggingUserConfigToHclTerraform(struct?: ServiceIntegrationEndpointExternalGoogleCloudLoggingUserConfigOutputReference | ServiceIntegrationEndpointExternalGoogleCloudLoggingUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_id: {
      value: cdktf.stringToHclTerraform(struct!.logId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_credentials: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationEndpointExternalGoogleCloudLoggingUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationEndpointExternalGoogleCloudLoggingUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logId = this._logId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._serviceAccountCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountCredentials = this._serviceAccountCredentials;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationEndpointExternalGoogleCloudLoggingUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logId = undefined;
      this._projectId = undefined;
      this._serviceAccountCredentials = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logId = value.logId;
      this._projectId = value.projectId;
      this._serviceAccountCredentials = value.serviceAccountCredentials;
    }
  }

  // log_id - computed: false, optional: false, required: true
  private _logId?: string; 
  public get logId() {
    return this.getStringAttribute('log_id');
  }
  public set logId(value: string) {
    this._logId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logIdInput() {
    return this._logId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // service_account_credentials - computed: false, optional: false, required: true
  private _serviceAccountCredentials?: string; 
  public get serviceAccountCredentials() {
    return this.getStringAttribute('service_account_credentials');
  }
  public set serviceAccountCredentials(value: string) {
    this._serviceAccountCredentials = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountCredentialsInput() {
    return this._serviceAccountCredentials;
  }
}
export interface ServiceIntegrationEndpointExternalKafkaUserConfig {
  /**
  * Bootstrap servers. Example: `10.0.0.1:9092,10.0.0.2:9092`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#bootstrap_servers ServiceIntegrationEndpoint#bootstrap_servers}
  */
  readonly bootstrapServers: string;
  /**
  * Enum: `PLAIN`, `SCRAM-SHA-256`, `SCRAM-SHA-512`. SASL mechanism used for connections to the Kafka server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#sasl_mechanism ServiceIntegrationEndpoint#sasl_mechanism}
  */
  readonly saslMechanism?: string;
  /**
  * Password for SASL PLAIN mechanism in the Kafka server. Example: `admin`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#sasl_plain_password ServiceIntegrationEndpoint#sasl_plain_password}
  */
  readonly saslPlainPassword?: string;
  /**
  * Username for SASL PLAIN mechanism in the Kafka server. Example: `admin`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#sasl_plain_username ServiceIntegrationEndpoint#sasl_plain_username}
  */
  readonly saslPlainUsername?: string;
  /**
  * Enum: `PLAINTEXT`, `SASL_PLAINTEXT`, `SASL_SSL`, `SSL`. Security protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#security_protocol ServiceIntegrationEndpoint#security_protocol}
  */
  readonly securityProtocol: string;
  /**
  * PEM-encoded CA certificate. Example: `-----BEGIN CERTIFICATE-----
  * ...
  * -----END CERTIFICATE-----
  * `.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#ssl_ca_cert ServiceIntegrationEndpoint#ssl_ca_cert}
  */
  readonly sslCaCert?: string;
  /**
  * PEM-encoded client certificate. Example: `-----BEGIN CERTIFICATE-----
  * ...
  * -----END CERTIFICATE-----
  * `.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#ssl_client_cert ServiceIntegrationEndpoint#ssl_client_cert}
  */
  readonly sslClientCert?: string;
  /**
  * PEM-encoded client key. Example: `-----BEGIN PRIVATE KEY-----
  * ...
  * -----END PRIVATE KEY-----
  * `.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#ssl_client_key ServiceIntegrationEndpoint#ssl_client_key}
  */
  readonly sslClientKey?: string;
  /**
  * Enum: `https`. The endpoint identification algorithm to validate server hostname using server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#ssl_endpoint_identification_algorithm ServiceIntegrationEndpoint#ssl_endpoint_identification_algorithm}
  */
  readonly sslEndpointIdentificationAlgorithm?: string;
}

export function serviceIntegrationEndpointExternalKafkaUserConfigToTerraform(struct?: ServiceIntegrationEndpointExternalKafkaUserConfigOutputReference | ServiceIntegrationEndpointExternalKafkaUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bootstrap_servers: cdktf.stringToTerraform(struct!.bootstrapServers),
    sasl_mechanism: cdktf.stringToTerraform(struct!.saslMechanism),
    sasl_plain_password: cdktf.stringToTerraform(struct!.saslPlainPassword),
    sasl_plain_username: cdktf.stringToTerraform(struct!.saslPlainUsername),
    security_protocol: cdktf.stringToTerraform(struct!.securityProtocol),
    ssl_ca_cert: cdktf.stringToTerraform(struct!.sslCaCert),
    ssl_client_cert: cdktf.stringToTerraform(struct!.sslClientCert),
    ssl_client_key: cdktf.stringToTerraform(struct!.sslClientKey),
    ssl_endpoint_identification_algorithm: cdktf.stringToTerraform(struct!.sslEndpointIdentificationAlgorithm),
  }
}


export function serviceIntegrationEndpointExternalKafkaUserConfigToHclTerraform(struct?: ServiceIntegrationEndpointExternalKafkaUserConfigOutputReference | ServiceIntegrationEndpointExternalKafkaUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bootstrap_servers: {
      value: cdktf.stringToHclTerraform(struct!.bootstrapServers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sasl_mechanism: {
      value: cdktf.stringToHclTerraform(struct!.saslMechanism),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sasl_plain_password: {
      value: cdktf.stringToHclTerraform(struct!.saslPlainPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sasl_plain_username: {
      value: cdktf.stringToHclTerraform(struct!.saslPlainUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_protocol: {
      value: cdktf.stringToHclTerraform(struct!.securityProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.sslCaCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_client_cert: {
      value: cdktf.stringToHclTerraform(struct!.sslClientCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_client_key: {
      value: cdktf.stringToHclTerraform(struct!.sslClientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_endpoint_identification_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.sslEndpointIdentificationAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationEndpointExternalKafkaUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationEndpointExternalKafkaUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootstrapServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrapServers = this._bootstrapServers;
    }
    if (this._saslMechanism !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslMechanism = this._saslMechanism;
    }
    if (this._saslPlainPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslPlainPassword = this._saslPlainPassword;
    }
    if (this._saslPlainUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslPlainUsername = this._saslPlainUsername;
    }
    if (this._securityProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityProtocol = this._securityProtocol;
    }
    if (this._sslCaCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCaCert = this._sslCaCert;
    }
    if (this._sslClientCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslClientCert = this._sslClientCert;
    }
    if (this._sslClientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslClientKey = this._sslClientKey;
    }
    if (this._sslEndpointIdentificationAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslEndpointIdentificationAlgorithm = this._sslEndpointIdentificationAlgorithm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationEndpointExternalKafkaUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootstrapServers = undefined;
      this._saslMechanism = undefined;
      this._saslPlainPassword = undefined;
      this._saslPlainUsername = undefined;
      this._securityProtocol = undefined;
      this._sslCaCert = undefined;
      this._sslClientCert = undefined;
      this._sslClientKey = undefined;
      this._sslEndpointIdentificationAlgorithm = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootstrapServers = value.bootstrapServers;
      this._saslMechanism = value.saslMechanism;
      this._saslPlainPassword = value.saslPlainPassword;
      this._saslPlainUsername = value.saslPlainUsername;
      this._securityProtocol = value.securityProtocol;
      this._sslCaCert = value.sslCaCert;
      this._sslClientCert = value.sslClientCert;
      this._sslClientKey = value.sslClientKey;
      this._sslEndpointIdentificationAlgorithm = value.sslEndpointIdentificationAlgorithm;
    }
  }

  // bootstrap_servers - computed: false, optional: false, required: true
  private _bootstrapServers?: string; 
  public get bootstrapServers() {
    return this.getStringAttribute('bootstrap_servers');
  }
  public set bootstrapServers(value: string) {
    this._bootstrapServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapServersInput() {
    return this._bootstrapServers;
  }

  // sasl_mechanism - computed: false, optional: true, required: false
  private _saslMechanism?: string; 
  public get saslMechanism() {
    return this.getStringAttribute('sasl_mechanism');
  }
  public set saslMechanism(value: string) {
    this._saslMechanism = value;
  }
  public resetSaslMechanism() {
    this._saslMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslMechanismInput() {
    return this._saslMechanism;
  }

  // sasl_plain_password - computed: false, optional: true, required: false
  private _saslPlainPassword?: string; 
  public get saslPlainPassword() {
    return this.getStringAttribute('sasl_plain_password');
  }
  public set saslPlainPassword(value: string) {
    this._saslPlainPassword = value;
  }
  public resetSaslPlainPassword() {
    this._saslPlainPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslPlainPasswordInput() {
    return this._saslPlainPassword;
  }

  // sasl_plain_username - computed: false, optional: true, required: false
  private _saslPlainUsername?: string; 
  public get saslPlainUsername() {
    return this.getStringAttribute('sasl_plain_username');
  }
  public set saslPlainUsername(value: string) {
    this._saslPlainUsername = value;
  }
  public resetSaslPlainUsername() {
    this._saslPlainUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslPlainUsernameInput() {
    return this._saslPlainUsername;
  }

  // security_protocol - computed: false, optional: false, required: true
  private _securityProtocol?: string; 
  public get securityProtocol() {
    return this.getStringAttribute('security_protocol');
  }
  public set securityProtocol(value: string) {
    this._securityProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProtocolInput() {
    return this._securityProtocol;
  }

  // ssl_ca_cert - computed: false, optional: true, required: false
  private _sslCaCert?: string; 
  public get sslCaCert() {
    return this.getStringAttribute('ssl_ca_cert');
  }
  public set sslCaCert(value: string) {
    this._sslCaCert = value;
  }
  public resetSslCaCert() {
    this._sslCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCaCertInput() {
    return this._sslCaCert;
  }

  // ssl_client_cert - computed: false, optional: true, required: false
  private _sslClientCert?: string; 
  public get sslClientCert() {
    return this.getStringAttribute('ssl_client_cert');
  }
  public set sslClientCert(value: string) {
    this._sslClientCert = value;
  }
  public resetSslClientCert() {
    this._sslClientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslClientCertInput() {
    return this._sslClientCert;
  }

  // ssl_client_key - computed: false, optional: true, required: false
  private _sslClientKey?: string; 
  public get sslClientKey() {
    return this.getStringAttribute('ssl_client_key');
  }
  public set sslClientKey(value: string) {
    this._sslClientKey = value;
  }
  public resetSslClientKey() {
    this._sslClientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslClientKeyInput() {
    return this._sslClientKey;
  }

  // ssl_endpoint_identification_algorithm - computed: false, optional: true, required: false
  private _sslEndpointIdentificationAlgorithm?: string; 
  public get sslEndpointIdentificationAlgorithm() {
    return this.getStringAttribute('ssl_endpoint_identification_algorithm');
  }
  public set sslEndpointIdentificationAlgorithm(value: string) {
    this._sslEndpointIdentificationAlgorithm = value;
  }
  public resetSslEndpointIdentificationAlgorithm() {
    this._sslEndpointIdentificationAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEndpointIdentificationAlgorithmInput() {
    return this._sslEndpointIdentificationAlgorithm;
  }
}
export interface ServiceIntegrationEndpointExternalMysqlUserConfig {
  /**
  * Hostname or IP address of the server. Example: `my.server.com`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#host ServiceIntegrationEndpoint#host}
  */
  readonly host: string;
  /**
  * Password. Example: `jjKk45Nnd`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#password ServiceIntegrationEndpoint#password}
  */
  readonly password: string;
  /**
  * Port number of the server. Example: `5432`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#port ServiceIntegrationEndpoint#port}
  */
  readonly port: number;
  /**
  * Enum: `verify-full`. SSL Mode. Default: `verify-full`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#ssl_mode ServiceIntegrationEndpoint#ssl_mode}
  */
  readonly sslMode?: string;
  /**
  * SSL Root Cert. Example: `-----BEGIN CERTIFICATE-----
  * ...
  * -----END CERTIFICATE-----
  * `.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#ssl_root_cert ServiceIntegrationEndpoint#ssl_root_cert}
  */
  readonly sslRootCert?: string;
  /**
  * User name. Example: `myname`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#username ServiceIntegrationEndpoint#username}
  */
  readonly username: string;
}

export function serviceIntegrationEndpointExternalMysqlUserConfigToTerraform(struct?: ServiceIntegrationEndpointExternalMysqlUserConfigOutputReference | ServiceIntegrationEndpointExternalMysqlUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    ssl_mode: cdktf.stringToTerraform(struct!.sslMode),
    ssl_root_cert: cdktf.stringToTerraform(struct!.sslRootCert),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function serviceIntegrationEndpointExternalMysqlUserConfigToHclTerraform(struct?: ServiceIntegrationEndpointExternalMysqlUserConfigOutputReference | ServiceIntegrationEndpointExternalMysqlUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_mode: {
      value: cdktf.stringToHclTerraform(struct!.sslMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_root_cert: {
      value: cdktf.stringToHclTerraform(struct!.sslRootCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationEndpointExternalMysqlUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationEndpointExternalMysqlUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._sslMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslMode = this._sslMode;
    }
    if (this._sslRootCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslRootCert = this._sslRootCert;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationEndpointExternalMysqlUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._password = undefined;
      this._port = undefined;
      this._sslMode = undefined;
      this._sslRootCert = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._password = value.password;
      this._port = value.port;
      this._sslMode = value.sslMode;
      this._sslRootCert = value.sslRootCert;
      this._username = value.username;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // ssl_mode - computed: false, optional: true, required: false
  private _sslMode?: string; 
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }
  public set sslMode(value: string) {
    this._sslMode = value;
  }
  public resetSslMode() {
    this._sslMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslModeInput() {
    return this._sslMode;
  }

  // ssl_root_cert - computed: false, optional: true, required: false
  private _sslRootCert?: string; 
  public get sslRootCert() {
    return this.getStringAttribute('ssl_root_cert');
  }
  public set sslRootCert(value: string) {
    this._sslRootCert = value;
  }
  public resetSslRootCert() {
    this._sslRootCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslRootCertInput() {
    return this._sslRootCert;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface ServiceIntegrationEndpointExternalOpensearchLogsUserConfig {
  /**
  * PEM encoded CA certificate. Example: `-----BEGIN CERTIFICATE-----
  * ...
  * -----END CERTIFICATE-----
  * `.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#ca ServiceIntegrationEndpoint#ca}
  */
  readonly ca?: string;
  /**
  * Maximum number of days of logs to keep. Default: `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#index_days_max ServiceIntegrationEndpoint#index_days_max}
  */
  readonly indexDaysMax?: number;
  /**
  * OpenSearch index prefix. Default: `logs`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#index_prefix ServiceIntegrationEndpoint#index_prefix}
  */
  readonly indexPrefix: string;
  /**
  * OpenSearch request timeout limit. Default: `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#timeout ServiceIntegrationEndpoint#timeout}
  */
  readonly timeout?: number;
  /**
  * OpenSearch connection URL. Example: `https://user:passwd@logs.example.com/`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#url ServiceIntegrationEndpoint#url}
  */
  readonly url: string;
}

export function serviceIntegrationEndpointExternalOpensearchLogsUserConfigToTerraform(struct?: ServiceIntegrationEndpointExternalOpensearchLogsUserConfigOutputReference | ServiceIntegrationEndpointExternalOpensearchLogsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca: cdktf.stringToTerraform(struct!.ca),
    index_days_max: cdktf.numberToTerraform(struct!.indexDaysMax),
    index_prefix: cdktf.stringToTerraform(struct!.indexPrefix),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function serviceIntegrationEndpointExternalOpensearchLogsUserConfigToHclTerraform(struct?: ServiceIntegrationEndpointExternalOpensearchLogsUserConfigOutputReference | ServiceIntegrationEndpointExternalOpensearchLogsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca: {
      value: cdktf.stringToHclTerraform(struct!.ca),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_days_max: {
      value: cdktf.numberToHclTerraform(struct!.indexDaysMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    index_prefix: {
      value: cdktf.stringToHclTerraform(struct!.indexPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationEndpointExternalOpensearchLogsUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationEndpointExternalOpensearchLogsUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ca !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca;
    }
    if (this._indexDaysMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexDaysMax = this._indexDaysMax;
    }
    if (this._indexPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexPrefix = this._indexPrefix;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationEndpointExternalOpensearchLogsUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ca = undefined;
      this._indexDaysMax = undefined;
      this._indexPrefix = undefined;
      this._timeout = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ca = value.ca;
      this._indexDaysMax = value.indexDaysMax;
      this._indexPrefix = value.indexPrefix;
      this._timeout = value.timeout;
      this._url = value.url;
    }
  }

  // ca - computed: false, optional: true, required: false
  private _ca?: string; 
  public get ca() {
    return this.getStringAttribute('ca');
  }
  public set ca(value: string) {
    this._ca = value;
  }
  public resetCa() {
    this._ca = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca;
  }

  // index_days_max - computed: false, optional: true, required: false
  private _indexDaysMax?: number; 
  public get indexDaysMax() {
    return this.getNumberAttribute('index_days_max');
  }
  public set indexDaysMax(value: number) {
    this._indexDaysMax = value;
  }
  public resetIndexDaysMax() {
    this._indexDaysMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexDaysMaxInput() {
    return this._indexDaysMax;
  }

  // index_prefix - computed: false, optional: false, required: true
  private _indexPrefix?: string; 
  public get indexPrefix() {
    return this.getStringAttribute('index_prefix');
  }
  public set indexPrefix(value: string) {
    this._indexPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexPrefixInput() {
    return this._indexPrefix;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface ServiceIntegrationEndpointExternalPostgresql {
  /**
  * Default database. Example: `testdb`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#default_database ServiceIntegrationEndpoint#default_database}
  */
  readonly defaultDatabase?: string;
  /**
  * Hostname or IP address of the server. Example: `my.server.com`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#host ServiceIntegrationEndpoint#host}
  */
  readonly host: string;
  /**
  * Password. Example: `jjKk45Nnd`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#password ServiceIntegrationEndpoint#password}
  */
  readonly password?: string;
  /**
  * Port number of the server. Example: `5432`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#port ServiceIntegrationEndpoint#port}
  */
  readonly port: number;
  /**
  * Client certificate. Example: `-----BEGIN CERTIFICATE-----
  * ...
  * -----END CERTIFICATE-----
  * `.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#ssl_client_certificate ServiceIntegrationEndpoint#ssl_client_certificate}
  */
  readonly sslClientCertificate?: string;
  /**
  * Client key. Example: `-----BEGIN PRIVATE KEY-----
  * ...
  * -----END PRIVATE KEY-----`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#ssl_client_key ServiceIntegrationEndpoint#ssl_client_key}
  */
  readonly sslClientKey?: string;
  /**
  * Enum: `allow`, `disable`, `prefer`, `require`, `verify-ca`, `verify-full`. SSL mode to use for the connection. Please note that Aiven requires TLS for all connections to external PostgreSQL services. Default: `verify-full`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#ssl_mode ServiceIntegrationEndpoint#ssl_mode}
  */
  readonly sslMode?: string;
  /**
  * SSL Root Cert. Example: `-----BEGIN CERTIFICATE-----
  * ...
  * -----END CERTIFICATE-----
  * `.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#ssl_root_cert ServiceIntegrationEndpoint#ssl_root_cert}
  */
  readonly sslRootCert?: string;
  /**
  * User name. Example: `myname`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#username ServiceIntegrationEndpoint#username}
  */
  readonly username: string;
}

export function serviceIntegrationEndpointExternalPostgresqlToTerraform(struct?: ServiceIntegrationEndpointExternalPostgresqlOutputReference | ServiceIntegrationEndpointExternalPostgresql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_database: cdktf.stringToTerraform(struct!.defaultDatabase),
    host: cdktf.stringToTerraform(struct!.host),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    ssl_client_certificate: cdktf.stringToTerraform(struct!.sslClientCertificate),
    ssl_client_key: cdktf.stringToTerraform(struct!.sslClientKey),
    ssl_mode: cdktf.stringToTerraform(struct!.sslMode),
    ssl_root_cert: cdktf.stringToTerraform(struct!.sslRootCert),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function serviceIntegrationEndpointExternalPostgresqlToHclTerraform(struct?: ServiceIntegrationEndpointExternalPostgresqlOutputReference | ServiceIntegrationEndpointExternalPostgresql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_database: {
      value: cdktf.stringToHclTerraform(struct!.defaultDatabase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.sslClientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_client_key: {
      value: cdktf.stringToHclTerraform(struct!.sslClientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_mode: {
      value: cdktf.stringToHclTerraform(struct!.sslMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_root_cert: {
      value: cdktf.stringToHclTerraform(struct!.sslRootCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationEndpointExternalPostgresqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationEndpointExternalPostgresql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultDatabase !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultDatabase = this._defaultDatabase;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._sslClientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslClientCertificate = this._sslClientCertificate;
    }
    if (this._sslClientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslClientKey = this._sslClientKey;
    }
    if (this._sslMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslMode = this._sslMode;
    }
    if (this._sslRootCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslRootCert = this._sslRootCert;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationEndpointExternalPostgresql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultDatabase = undefined;
      this._host = undefined;
      this._password = undefined;
      this._port = undefined;
      this._sslClientCertificate = undefined;
      this._sslClientKey = undefined;
      this._sslMode = undefined;
      this._sslRootCert = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultDatabase = value.defaultDatabase;
      this._host = value.host;
      this._password = value.password;
      this._port = value.port;
      this._sslClientCertificate = value.sslClientCertificate;
      this._sslClientKey = value.sslClientKey;
      this._sslMode = value.sslMode;
      this._sslRootCert = value.sslRootCert;
      this._username = value.username;
    }
  }

  // default_database - computed: false, optional: true, required: false
  private _defaultDatabase?: string; 
  public get defaultDatabase() {
    return this.getStringAttribute('default_database');
  }
  public set defaultDatabase(value: string) {
    this._defaultDatabase = value;
  }
  public resetDefaultDatabase() {
    this._defaultDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDatabaseInput() {
    return this._defaultDatabase;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // ssl_client_certificate - computed: false, optional: true, required: false
  private _sslClientCertificate?: string; 
  public get sslClientCertificate() {
    return this.getStringAttribute('ssl_client_certificate');
  }
  public set sslClientCertificate(value: string) {
    this._sslClientCertificate = value;
  }
  public resetSslClientCertificate() {
    this._sslClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslClientCertificateInput() {
    return this._sslClientCertificate;
  }

  // ssl_client_key - computed: false, optional: true, required: false
  private _sslClientKey?: string; 
  public get sslClientKey() {
    return this.getStringAttribute('ssl_client_key');
  }
  public set sslClientKey(value: string) {
    this._sslClientKey = value;
  }
  public resetSslClientKey() {
    this._sslClientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslClientKeyInput() {
    return this._sslClientKey;
  }

  // ssl_mode - computed: false, optional: true, required: false
  private _sslMode?: string; 
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }
  public set sslMode(value: string) {
    this._sslMode = value;
  }
  public resetSslMode() {
    this._sslMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslModeInput() {
    return this._sslMode;
  }

  // ssl_root_cert - computed: false, optional: true, required: false
  private _sslRootCert?: string; 
  public get sslRootCert() {
    return this.getStringAttribute('ssl_root_cert');
  }
  public set sslRootCert(value: string) {
    this._sslRootCert = value;
  }
  public resetSslRootCert() {
    this._sslRootCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslRootCertInput() {
    return this._sslRootCert;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface ServiceIntegrationEndpointExternalPrometheusUserConfig {
  /**
  * Prometheus basic authentication password. Example: `fhyFNBjj3R`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#basic_auth_password ServiceIntegrationEndpoint#basic_auth_password}
  */
  readonly basicAuthPassword?: string;
  /**
  * Prometheus basic authentication username. Example: `prom4851`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#basic_auth_username ServiceIntegrationEndpoint#basic_auth_username}
  */
  readonly basicAuthUsername?: string;
  /**
  * Prometheus enabled write endpoint. Example: `https://write.example.com/`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#service_uri ServiceIntegrationEndpoint#service_uri}
  */
  readonly serviceUri?: string;
}

export function serviceIntegrationEndpointExternalPrometheusUserConfigToTerraform(struct?: ServiceIntegrationEndpointExternalPrometheusUserConfigOutputReference | ServiceIntegrationEndpointExternalPrometheusUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic_auth_password: cdktf.stringToTerraform(struct!.basicAuthPassword),
    basic_auth_username: cdktf.stringToTerraform(struct!.basicAuthUsername),
    service_uri: cdktf.stringToTerraform(struct!.serviceUri),
  }
}


export function serviceIntegrationEndpointExternalPrometheusUserConfigToHclTerraform(struct?: ServiceIntegrationEndpointExternalPrometheusUserConfigOutputReference | ServiceIntegrationEndpointExternalPrometheusUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic_auth_password: {
      value: cdktf.stringToHclTerraform(struct!.basicAuthPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    basic_auth_username: {
      value: cdktf.stringToHclTerraform(struct!.basicAuthUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_uri: {
      value: cdktf.stringToHclTerraform(struct!.serviceUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationEndpointExternalPrometheusUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationEndpointExternalPrometheusUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicAuthPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuthPassword = this._basicAuthPassword;
    }
    if (this._basicAuthUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuthUsername = this._basicAuthUsername;
    }
    if (this._serviceUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceUri = this._serviceUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationEndpointExternalPrometheusUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._basicAuthPassword = undefined;
      this._basicAuthUsername = undefined;
      this._serviceUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._basicAuthPassword = value.basicAuthPassword;
      this._basicAuthUsername = value.basicAuthUsername;
      this._serviceUri = value.serviceUri;
    }
  }

  // basic_auth_password - computed: false, optional: true, required: false
  private _basicAuthPassword?: string; 
  public get basicAuthPassword() {
    return this.getStringAttribute('basic_auth_password');
  }
  public set basicAuthPassword(value: string) {
    this._basicAuthPassword = value;
  }
  public resetBasicAuthPassword() {
    this._basicAuthPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthPasswordInput() {
    return this._basicAuthPassword;
  }

  // basic_auth_username - computed: false, optional: true, required: false
  private _basicAuthUsername?: string; 
  public get basicAuthUsername() {
    return this.getStringAttribute('basic_auth_username');
  }
  public set basicAuthUsername(value: string) {
    this._basicAuthUsername = value;
  }
  public resetBasicAuthUsername() {
    this._basicAuthUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthUsernameInput() {
    return this._basicAuthUsername;
  }

  // service_uri - computed: false, optional: true, required: false
  private _serviceUri?: string; 
  public get serviceUri() {
    return this.getStringAttribute('service_uri');
  }
  public set serviceUri(value: string) {
    this._serviceUri = value;
  }
  public resetServiceUri() {
    this._serviceUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceUriInput() {
    return this._serviceUri;
  }
}
export interface ServiceIntegrationEndpointExternalSchemaRegistryUserConfig {
  /**
  * Enum: `basic`, `none`. Authentication method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#authentication ServiceIntegrationEndpoint#authentication}
  */
  readonly authentication: string;
  /**
  * Basic authentication password. Example: `Zm9vYg==`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#basic_auth_password ServiceIntegrationEndpoint#basic_auth_password}
  */
  readonly basicAuthPassword?: string;
  /**
  * Basic authentication user name. Example: `avnadmin`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#basic_auth_username ServiceIntegrationEndpoint#basic_auth_username}
  */
  readonly basicAuthUsername?: string;
  /**
  * Schema Registry URL. Example: `https://schema-registry.kafka.company.com:28419`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#url ServiceIntegrationEndpoint#url}
  */
  readonly url: string;
}

export function serviceIntegrationEndpointExternalSchemaRegistryUserConfigToTerraform(struct?: ServiceIntegrationEndpointExternalSchemaRegistryUserConfigOutputReference | ServiceIntegrationEndpointExternalSchemaRegistryUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    basic_auth_password: cdktf.stringToTerraform(struct!.basicAuthPassword),
    basic_auth_username: cdktf.stringToTerraform(struct!.basicAuthUsername),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function serviceIntegrationEndpointExternalSchemaRegistryUserConfigToHclTerraform(struct?: ServiceIntegrationEndpointExternalSchemaRegistryUserConfigOutputReference | ServiceIntegrationEndpointExternalSchemaRegistryUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.stringToHclTerraform(struct!.authentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    basic_auth_password: {
      value: cdktf.stringToHclTerraform(struct!.basicAuthPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    basic_auth_username: {
      value: cdktf.stringToHclTerraform(struct!.basicAuthUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationEndpointExternalSchemaRegistryUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationEndpointExternalSchemaRegistryUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._basicAuthPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuthPassword = this._basicAuthPassword;
    }
    if (this._basicAuthUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuthUsername = this._basicAuthUsername;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationEndpointExternalSchemaRegistryUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authentication = undefined;
      this._basicAuthPassword = undefined;
      this._basicAuthUsername = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authentication = value.authentication;
      this._basicAuthPassword = value.basicAuthPassword;
      this._basicAuthUsername = value.basicAuthUsername;
      this._url = value.url;
    }
  }

  // authentication - computed: false, optional: false, required: true
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // basic_auth_password - computed: false, optional: true, required: false
  private _basicAuthPassword?: string; 
  public get basicAuthPassword() {
    return this.getStringAttribute('basic_auth_password');
  }
  public set basicAuthPassword(value: string) {
    this._basicAuthPassword = value;
  }
  public resetBasicAuthPassword() {
    this._basicAuthPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthPasswordInput() {
    return this._basicAuthPassword;
  }

  // basic_auth_username - computed: false, optional: true, required: false
  private _basicAuthUsername?: string; 
  public get basicAuthUsername() {
    return this.getStringAttribute('basic_auth_username');
  }
  public set basicAuthUsername(value: string) {
    this._basicAuthUsername = value;
  }
  public resetBasicAuthUsername() {
    this._basicAuthUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthUsernameInput() {
    return this._basicAuthUsername;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface ServiceIntegrationEndpointJolokiaUserConfig {
  /**
  * Jolokia basic authentication password. Example: `yhfBNFii4C`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#basic_auth_password ServiceIntegrationEndpoint#basic_auth_password}
  */
  readonly basicAuthPassword?: string;
  /**
  * Jolokia basic authentication username. Example: `jol48k51`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#basic_auth_username ServiceIntegrationEndpoint#basic_auth_username}
  */
  readonly basicAuthUsername?: string;
}

export function serviceIntegrationEndpointJolokiaUserConfigToTerraform(struct?: ServiceIntegrationEndpointJolokiaUserConfigOutputReference | ServiceIntegrationEndpointJolokiaUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic_auth_password: cdktf.stringToTerraform(struct!.basicAuthPassword),
    basic_auth_username: cdktf.stringToTerraform(struct!.basicAuthUsername),
  }
}


export function serviceIntegrationEndpointJolokiaUserConfigToHclTerraform(struct?: ServiceIntegrationEndpointJolokiaUserConfigOutputReference | ServiceIntegrationEndpointJolokiaUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic_auth_password: {
      value: cdktf.stringToHclTerraform(struct!.basicAuthPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    basic_auth_username: {
      value: cdktf.stringToHclTerraform(struct!.basicAuthUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationEndpointJolokiaUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationEndpointJolokiaUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicAuthPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuthPassword = this._basicAuthPassword;
    }
    if (this._basicAuthUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuthUsername = this._basicAuthUsername;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationEndpointJolokiaUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._basicAuthPassword = undefined;
      this._basicAuthUsername = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._basicAuthPassword = value.basicAuthPassword;
      this._basicAuthUsername = value.basicAuthUsername;
    }
  }

  // basic_auth_password - computed: false, optional: true, required: false
  private _basicAuthPassword?: string; 
  public get basicAuthPassword() {
    return this.getStringAttribute('basic_auth_password');
  }
  public set basicAuthPassword(value: string) {
    this._basicAuthPassword = value;
  }
  public resetBasicAuthPassword() {
    this._basicAuthPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthPasswordInput() {
    return this._basicAuthPassword;
  }

  // basic_auth_username - computed: false, optional: true, required: false
  private _basicAuthUsername?: string; 
  public get basicAuthUsername() {
    return this.getStringAttribute('basic_auth_username');
  }
  public set basicAuthUsername(value: string) {
    this._basicAuthUsername = value;
  }
  public resetBasicAuthUsername() {
    this._basicAuthUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthUsernameInput() {
    return this._basicAuthUsername;
  }
}
export interface ServiceIntegrationEndpointPrometheusUserConfig {
  /**
  * Prometheus basic authentication password. Example: `fhyFNBjj3R`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#basic_auth_password ServiceIntegrationEndpoint#basic_auth_password}
  */
  readonly basicAuthPassword?: string;
  /**
  * Prometheus basic authentication username. Example: `prom4851`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#basic_auth_username ServiceIntegrationEndpoint#basic_auth_username}
  */
  readonly basicAuthUsername?: string;
}

export function serviceIntegrationEndpointPrometheusUserConfigToTerraform(struct?: ServiceIntegrationEndpointPrometheusUserConfigOutputReference | ServiceIntegrationEndpointPrometheusUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic_auth_password: cdktf.stringToTerraform(struct!.basicAuthPassword),
    basic_auth_username: cdktf.stringToTerraform(struct!.basicAuthUsername),
  }
}


export function serviceIntegrationEndpointPrometheusUserConfigToHclTerraform(struct?: ServiceIntegrationEndpointPrometheusUserConfigOutputReference | ServiceIntegrationEndpointPrometheusUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic_auth_password: {
      value: cdktf.stringToHclTerraform(struct!.basicAuthPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    basic_auth_username: {
      value: cdktf.stringToHclTerraform(struct!.basicAuthUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationEndpointPrometheusUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationEndpointPrometheusUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicAuthPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuthPassword = this._basicAuthPassword;
    }
    if (this._basicAuthUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuthUsername = this._basicAuthUsername;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationEndpointPrometheusUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._basicAuthPassword = undefined;
      this._basicAuthUsername = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._basicAuthPassword = value.basicAuthPassword;
      this._basicAuthUsername = value.basicAuthUsername;
    }
  }

  // basic_auth_password - computed: false, optional: true, required: false
  private _basicAuthPassword?: string; 
  public get basicAuthPassword() {
    return this.getStringAttribute('basic_auth_password');
  }
  public set basicAuthPassword(value: string) {
    this._basicAuthPassword = value;
  }
  public resetBasicAuthPassword() {
    this._basicAuthPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthPasswordInput() {
    return this._basicAuthPassword;
  }

  // basic_auth_username - computed: false, optional: true, required: false
  private _basicAuthUsername?: string; 
  public get basicAuthUsername() {
    return this.getStringAttribute('basic_auth_username');
  }
  public set basicAuthUsername(value: string) {
    this._basicAuthUsername = value;
  }
  public resetBasicAuthUsername() {
    this._basicAuthUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthUsernameInput() {
    return this._basicAuthUsername;
  }
}
export interface ServiceIntegrationEndpointRsyslogUserConfig {
  /**
  * PEM encoded CA certificate. Example: `-----BEGIN CERTIFICATE-----
  * ...
  * -----END CERTIFICATE-----
  * `.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#ca ServiceIntegrationEndpoint#ca}
  */
  readonly ca?: string;
  /**
  * PEM encoded client certificate. Example: `-----BEGIN CERTIFICATE-----
  * ...
  * -----END CERTIFICATE-----
  * `.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#cert ServiceIntegrationEndpoint#cert}
  */
  readonly cert?: string;
  /**
  * Enum: `custom`, `rfc3164`, `rfc5424`. Message format. Default: `rfc5424`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#format ServiceIntegrationEndpoint#format}
  */
  readonly format: string;
  /**
  * PEM encoded client key. Example: `-----BEGIN PRIVATE KEY-----
  * ...
  * -----END PRIVATE KEY-----
  * `.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#key ServiceIntegrationEndpoint#key}
  */
  readonly key?: string;
  /**
  * Custom syslog message format. Example: `<%pri%>%timestamp:::date-rfc3339% %HOSTNAME% %app-name% %msg%`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#logline ServiceIntegrationEndpoint#logline}
  */
  readonly logline?: string;
  /**
  * Rsyslog max message size. Default: `8192`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#max_message_size ServiceIntegrationEndpoint#max_message_size}
  */
  readonly maxMessageSize?: number;
  /**
  * Rsyslog server port. Default: `514`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#port ServiceIntegrationEndpoint#port}
  */
  readonly port: number;
  /**
  * Structured data block for log message. Example: `TOKEN tag="LiteralValue"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#sd ServiceIntegrationEndpoint#sd}
  */
  readonly sd?: string;
  /**
  * Rsyslog server IP address or hostname. Example: `logs.example.com`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#server ServiceIntegrationEndpoint#server}
  */
  readonly server: string;
  /**
  * Require TLS. Default: `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#tls ServiceIntegrationEndpoint#tls}
  */
  readonly tls: boolean | cdktf.IResolvable;
}

export function serviceIntegrationEndpointRsyslogUserConfigToTerraform(struct?: ServiceIntegrationEndpointRsyslogUserConfigOutputReference | ServiceIntegrationEndpointRsyslogUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca: cdktf.stringToTerraform(struct!.ca),
    cert: cdktf.stringToTerraform(struct!.cert),
    format: cdktf.stringToTerraform(struct!.format),
    key: cdktf.stringToTerraform(struct!.key),
    logline: cdktf.stringToTerraform(struct!.logline),
    max_message_size: cdktf.numberToTerraform(struct!.maxMessageSize),
    port: cdktf.numberToTerraform(struct!.port),
    sd: cdktf.stringToTerraform(struct!.sd),
    server: cdktf.stringToTerraform(struct!.server),
    tls: cdktf.booleanToTerraform(struct!.tls),
  }
}


export function serviceIntegrationEndpointRsyslogUserConfigToHclTerraform(struct?: ServiceIntegrationEndpointRsyslogUserConfigOutputReference | ServiceIntegrationEndpointRsyslogUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca: {
      value: cdktf.stringToHclTerraform(struct!.ca),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert: {
      value: cdktf.stringToHclTerraform(struct!.cert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logline: {
      value: cdktf.stringToHclTerraform(struct!.logline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_message_size: {
      value: cdktf.numberToHclTerraform(struct!.maxMessageSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sd: {
      value: cdktf.stringToHclTerraform(struct!.sd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: cdktf.booleanToHclTerraform(struct!.tls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationEndpointRsyslogUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationEndpointRsyslogUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ca !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca;
    }
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._logline !== undefined) {
      hasAnyValues = true;
      internalValueResult.logline = this._logline;
    }
    if (this._maxMessageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMessageSize = this._maxMessageSize;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._sd !== undefined) {
      hasAnyValues = true;
      internalValueResult.sd = this._sd;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._tls !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationEndpointRsyslogUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ca = undefined;
      this._cert = undefined;
      this._format = undefined;
      this._key = undefined;
      this._logline = undefined;
      this._maxMessageSize = undefined;
      this._port = undefined;
      this._sd = undefined;
      this._server = undefined;
      this._tls = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ca = value.ca;
      this._cert = value.cert;
      this._format = value.format;
      this._key = value.key;
      this._logline = value.logline;
      this._maxMessageSize = value.maxMessageSize;
      this._port = value.port;
      this._sd = value.sd;
      this._server = value.server;
      this._tls = value.tls;
    }
  }

  // ca - computed: false, optional: true, required: false
  private _ca?: string; 
  public get ca() {
    return this.getStringAttribute('ca');
  }
  public set ca(value: string) {
    this._ca = value;
  }
  public resetCa() {
    this._ca = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca;
  }

  // cert - computed: false, optional: true, required: false
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // logline - computed: false, optional: true, required: false
  private _logline?: string; 
  public get logline() {
    return this.getStringAttribute('logline');
  }
  public set logline(value: string) {
    this._logline = value;
  }
  public resetLogline() {
    this._logline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loglineInput() {
    return this._logline;
  }

  // max_message_size - computed: false, optional: true, required: false
  private _maxMessageSize?: number; 
  public get maxMessageSize() {
    return this.getNumberAttribute('max_message_size');
  }
  public set maxMessageSize(value: number) {
    this._maxMessageSize = value;
  }
  public resetMaxMessageSize() {
    this._maxMessageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMessageSizeInput() {
    return this._maxMessageSize;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // sd - computed: false, optional: true, required: false
  private _sd?: string; 
  public get sd() {
    return this.getStringAttribute('sd');
  }
  public set sd(value: string) {
    this._sd = value;
  }
  public resetSd() {
    this._sd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdInput() {
    return this._sd;
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // tls - computed: false, optional: false, required: true
  private _tls?: boolean | cdktf.IResolvable; 
  public get tls() {
    return this.getBooleanAttribute('tls');
  }
  public set tls(value: boolean | cdktf.IResolvable) {
    this._tls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
  }
}
export interface ServiceIntegrationEndpointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#create ServiceIntegrationEndpoint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#default ServiceIntegrationEndpoint#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#delete ServiceIntegrationEndpoint#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#read ServiceIntegrationEndpoint#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#update ServiceIntegrationEndpoint#update}
  */
  readonly update?: string;
}

export function serviceIntegrationEndpointTimeoutsToTerraform(struct?: ServiceIntegrationEndpointTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function serviceIntegrationEndpointTimeoutsToHclTerraform(struct?: ServiceIntegrationEndpointTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceIntegrationEndpointTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationEndpointTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._default = value.default;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint aiven_service_integration_endpoint}
*/
export class ServiceIntegrationEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_service_integration_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceIntegrationEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceIntegrationEndpoint to import
  * @param importFromId The id of the existing ServiceIntegrationEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceIntegrationEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_service_integration_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/service_integration_endpoint aiven_service_integration_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceIntegrationEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceIntegrationEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'aiven_service_integration_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'aiven',
        providerVersion: '4.46.1'
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
    this._endpointType = config.endpointType;
    this._id = config.id;
    this._project = config.project;
    this._autoscalerUserConfig.internalValue = config.autoscalerUserConfig;
    this._datadogUserConfig.internalValue = config.datadogUserConfig;
    this._externalAwsCloudwatchLogsUserConfig.internalValue = config.externalAwsCloudwatchLogsUserConfig;
    this._externalAwsCloudwatchMetricsUserConfig.internalValue = config.externalAwsCloudwatchMetricsUserConfig;
    this._externalAwsS3UserConfig.internalValue = config.externalAwsS3UserConfig;
    this._externalAzureBlobStorageUserConfig.internalValue = config.externalAzureBlobStorageUserConfig;
    this._externalClickhouseUserConfig.internalValue = config.externalClickhouseUserConfig;
    this._externalElasticsearchLogsUserConfig.internalValue = config.externalElasticsearchLogsUserConfig;
    this._externalGoogleCloudBigquery.internalValue = config.externalGoogleCloudBigquery;
    this._externalGoogleCloudLoggingUserConfig.internalValue = config.externalGoogleCloudLoggingUserConfig;
    this._externalKafkaUserConfig.internalValue = config.externalKafkaUserConfig;
    this._externalMysqlUserConfig.internalValue = config.externalMysqlUserConfig;
    this._externalOpensearchLogsUserConfig.internalValue = config.externalOpensearchLogsUserConfig;
    this._externalPostgresql.internalValue = config.externalPostgresql;
    this._externalPrometheusUserConfig.internalValue = config.externalPrometheusUserConfig;
    this._externalSchemaRegistryUserConfig.internalValue = config.externalSchemaRegistryUserConfig;
    this._jolokiaUserConfig.internalValue = config.jolokiaUserConfig;
    this._prometheusUserConfig.internalValue = config.prometheusUserConfig;
    this._rsyslogUserConfig.internalValue = config.rsyslogUserConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // endpoint_type - computed: false, optional: false, required: true
  private _endpointType?: string; 
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }
  public set endpointType(value: string) {
    this._endpointType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointTypeInput() {
    return this._endpointType;
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

  // autoscaler_user_config - computed: false, optional: true, required: false
  private _autoscalerUserConfig = new ServiceIntegrationEndpointAutoscalerUserConfigOutputReference(this, "autoscaler_user_config");
  public get autoscalerUserConfig() {
    return this._autoscalerUserConfig;
  }
  public putAutoscalerUserConfig(value: ServiceIntegrationEndpointAutoscalerUserConfig) {
    this._autoscalerUserConfig.internalValue = value;
  }
  public resetAutoscalerUserConfig() {
    this._autoscalerUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalerUserConfigInput() {
    return this._autoscalerUserConfig.internalValue;
  }

  // datadog_user_config - computed: false, optional: true, required: false
  private _datadogUserConfig = new ServiceIntegrationEndpointDatadogUserConfigOutputReference(this, "datadog_user_config");
  public get datadogUserConfig() {
    return this._datadogUserConfig;
  }
  public putDatadogUserConfig(value: ServiceIntegrationEndpointDatadogUserConfig) {
    this._datadogUserConfig.internalValue = value;
  }
  public resetDatadogUserConfig() {
    this._datadogUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogUserConfigInput() {
    return this._datadogUserConfig.internalValue;
  }

  // external_aws_cloudwatch_logs_user_config - computed: false, optional: true, required: false
  private _externalAwsCloudwatchLogsUserConfig = new ServiceIntegrationEndpointExternalAwsCloudwatchLogsUserConfigOutputReference(this, "external_aws_cloudwatch_logs_user_config");
  public get externalAwsCloudwatchLogsUserConfig() {
    return this._externalAwsCloudwatchLogsUserConfig;
  }
  public putExternalAwsCloudwatchLogsUserConfig(value: ServiceIntegrationEndpointExternalAwsCloudwatchLogsUserConfig) {
    this._externalAwsCloudwatchLogsUserConfig.internalValue = value;
  }
  public resetExternalAwsCloudwatchLogsUserConfig() {
    this._externalAwsCloudwatchLogsUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAwsCloudwatchLogsUserConfigInput() {
    return this._externalAwsCloudwatchLogsUserConfig.internalValue;
  }

  // external_aws_cloudwatch_metrics_user_config - computed: false, optional: true, required: false
  private _externalAwsCloudwatchMetricsUserConfig = new ServiceIntegrationEndpointExternalAwsCloudwatchMetricsUserConfigOutputReference(this, "external_aws_cloudwatch_metrics_user_config");
  public get externalAwsCloudwatchMetricsUserConfig() {
    return this._externalAwsCloudwatchMetricsUserConfig;
  }
  public putExternalAwsCloudwatchMetricsUserConfig(value: ServiceIntegrationEndpointExternalAwsCloudwatchMetricsUserConfig) {
    this._externalAwsCloudwatchMetricsUserConfig.internalValue = value;
  }
  public resetExternalAwsCloudwatchMetricsUserConfig() {
    this._externalAwsCloudwatchMetricsUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAwsCloudwatchMetricsUserConfigInput() {
    return this._externalAwsCloudwatchMetricsUserConfig.internalValue;
  }

  // external_aws_s3_user_config - computed: false, optional: true, required: false
  private _externalAwsS3UserConfig = new ServiceIntegrationEndpointExternalAwsS3UserConfigOutputReference(this, "external_aws_s3_user_config");
  public get externalAwsS3UserConfig() {
    return this._externalAwsS3UserConfig;
  }
  public putExternalAwsS3UserConfig(value: ServiceIntegrationEndpointExternalAwsS3UserConfig) {
    this._externalAwsS3UserConfig.internalValue = value;
  }
  public resetExternalAwsS3UserConfig() {
    this._externalAwsS3UserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAwsS3UserConfigInput() {
    return this._externalAwsS3UserConfig.internalValue;
  }

  // external_azure_blob_storage_user_config - computed: false, optional: true, required: false
  private _externalAzureBlobStorageUserConfig = new ServiceIntegrationEndpointExternalAzureBlobStorageUserConfigOutputReference(this, "external_azure_blob_storage_user_config");
  public get externalAzureBlobStorageUserConfig() {
    return this._externalAzureBlobStorageUserConfig;
  }
  public putExternalAzureBlobStorageUserConfig(value: ServiceIntegrationEndpointExternalAzureBlobStorageUserConfig) {
    this._externalAzureBlobStorageUserConfig.internalValue = value;
  }
  public resetExternalAzureBlobStorageUserConfig() {
    this._externalAzureBlobStorageUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAzureBlobStorageUserConfigInput() {
    return this._externalAzureBlobStorageUserConfig.internalValue;
  }

  // external_clickhouse_user_config - computed: false, optional: true, required: false
  private _externalClickhouseUserConfig = new ServiceIntegrationEndpointExternalClickhouseUserConfigOutputReference(this, "external_clickhouse_user_config");
  public get externalClickhouseUserConfig() {
    return this._externalClickhouseUserConfig;
  }
  public putExternalClickhouseUserConfig(value: ServiceIntegrationEndpointExternalClickhouseUserConfig) {
    this._externalClickhouseUserConfig.internalValue = value;
  }
  public resetExternalClickhouseUserConfig() {
    this._externalClickhouseUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalClickhouseUserConfigInput() {
    return this._externalClickhouseUserConfig.internalValue;
  }

  // external_elasticsearch_logs_user_config - computed: false, optional: true, required: false
  private _externalElasticsearchLogsUserConfig = new ServiceIntegrationEndpointExternalElasticsearchLogsUserConfigOutputReference(this, "external_elasticsearch_logs_user_config");
  public get externalElasticsearchLogsUserConfig() {
    return this._externalElasticsearchLogsUserConfig;
  }
  public putExternalElasticsearchLogsUserConfig(value: ServiceIntegrationEndpointExternalElasticsearchLogsUserConfig) {
    this._externalElasticsearchLogsUserConfig.internalValue = value;
  }
  public resetExternalElasticsearchLogsUserConfig() {
    this._externalElasticsearchLogsUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalElasticsearchLogsUserConfigInput() {
    return this._externalElasticsearchLogsUserConfig.internalValue;
  }

  // external_google_cloud_bigquery - computed: false, optional: true, required: false
  private _externalGoogleCloudBigquery = new ServiceIntegrationEndpointExternalGoogleCloudBigqueryOutputReference(this, "external_google_cloud_bigquery");
  public get externalGoogleCloudBigquery() {
    return this._externalGoogleCloudBigquery;
  }
  public putExternalGoogleCloudBigquery(value: ServiceIntegrationEndpointExternalGoogleCloudBigquery) {
    this._externalGoogleCloudBigquery.internalValue = value;
  }
  public resetExternalGoogleCloudBigquery() {
    this._externalGoogleCloudBigquery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalGoogleCloudBigqueryInput() {
    return this._externalGoogleCloudBigquery.internalValue;
  }

  // external_google_cloud_logging_user_config - computed: false, optional: true, required: false
  private _externalGoogleCloudLoggingUserConfig = new ServiceIntegrationEndpointExternalGoogleCloudLoggingUserConfigOutputReference(this, "external_google_cloud_logging_user_config");
  public get externalGoogleCloudLoggingUserConfig() {
    return this._externalGoogleCloudLoggingUserConfig;
  }
  public putExternalGoogleCloudLoggingUserConfig(value: ServiceIntegrationEndpointExternalGoogleCloudLoggingUserConfig) {
    this._externalGoogleCloudLoggingUserConfig.internalValue = value;
  }
  public resetExternalGoogleCloudLoggingUserConfig() {
    this._externalGoogleCloudLoggingUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalGoogleCloudLoggingUserConfigInput() {
    return this._externalGoogleCloudLoggingUserConfig.internalValue;
  }

  // external_kafka_user_config - computed: false, optional: true, required: false
  private _externalKafkaUserConfig = new ServiceIntegrationEndpointExternalKafkaUserConfigOutputReference(this, "external_kafka_user_config");
  public get externalKafkaUserConfig() {
    return this._externalKafkaUserConfig;
  }
  public putExternalKafkaUserConfig(value: ServiceIntegrationEndpointExternalKafkaUserConfig) {
    this._externalKafkaUserConfig.internalValue = value;
  }
  public resetExternalKafkaUserConfig() {
    this._externalKafkaUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalKafkaUserConfigInput() {
    return this._externalKafkaUserConfig.internalValue;
  }

  // external_mysql_user_config - computed: false, optional: true, required: false
  private _externalMysqlUserConfig = new ServiceIntegrationEndpointExternalMysqlUserConfigOutputReference(this, "external_mysql_user_config");
  public get externalMysqlUserConfig() {
    return this._externalMysqlUserConfig;
  }
  public putExternalMysqlUserConfig(value: ServiceIntegrationEndpointExternalMysqlUserConfig) {
    this._externalMysqlUserConfig.internalValue = value;
  }
  public resetExternalMysqlUserConfig() {
    this._externalMysqlUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalMysqlUserConfigInput() {
    return this._externalMysqlUserConfig.internalValue;
  }

  // external_opensearch_logs_user_config - computed: false, optional: true, required: false
  private _externalOpensearchLogsUserConfig = new ServiceIntegrationEndpointExternalOpensearchLogsUserConfigOutputReference(this, "external_opensearch_logs_user_config");
  public get externalOpensearchLogsUserConfig() {
    return this._externalOpensearchLogsUserConfig;
  }
  public putExternalOpensearchLogsUserConfig(value: ServiceIntegrationEndpointExternalOpensearchLogsUserConfig) {
    this._externalOpensearchLogsUserConfig.internalValue = value;
  }
  public resetExternalOpensearchLogsUserConfig() {
    this._externalOpensearchLogsUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalOpensearchLogsUserConfigInput() {
    return this._externalOpensearchLogsUserConfig.internalValue;
  }

  // external_postgresql - computed: false, optional: true, required: false
  private _externalPostgresql = new ServiceIntegrationEndpointExternalPostgresqlOutputReference(this, "external_postgresql");
  public get externalPostgresql() {
    return this._externalPostgresql;
  }
  public putExternalPostgresql(value: ServiceIntegrationEndpointExternalPostgresql) {
    this._externalPostgresql.internalValue = value;
  }
  public resetExternalPostgresql() {
    this._externalPostgresql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalPostgresqlInput() {
    return this._externalPostgresql.internalValue;
  }

  // external_prometheus_user_config - computed: false, optional: true, required: false
  private _externalPrometheusUserConfig = new ServiceIntegrationEndpointExternalPrometheusUserConfigOutputReference(this, "external_prometheus_user_config");
  public get externalPrometheusUserConfig() {
    return this._externalPrometheusUserConfig;
  }
  public putExternalPrometheusUserConfig(value: ServiceIntegrationEndpointExternalPrometheusUserConfig) {
    this._externalPrometheusUserConfig.internalValue = value;
  }
  public resetExternalPrometheusUserConfig() {
    this._externalPrometheusUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalPrometheusUserConfigInput() {
    return this._externalPrometheusUserConfig.internalValue;
  }

  // external_schema_registry_user_config - computed: false, optional: true, required: false
  private _externalSchemaRegistryUserConfig = new ServiceIntegrationEndpointExternalSchemaRegistryUserConfigOutputReference(this, "external_schema_registry_user_config");
  public get externalSchemaRegistryUserConfig() {
    return this._externalSchemaRegistryUserConfig;
  }
  public putExternalSchemaRegistryUserConfig(value: ServiceIntegrationEndpointExternalSchemaRegistryUserConfig) {
    this._externalSchemaRegistryUserConfig.internalValue = value;
  }
  public resetExternalSchemaRegistryUserConfig() {
    this._externalSchemaRegistryUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSchemaRegistryUserConfigInput() {
    return this._externalSchemaRegistryUserConfig.internalValue;
  }

  // jolokia_user_config - computed: false, optional: true, required: false
  private _jolokiaUserConfig = new ServiceIntegrationEndpointJolokiaUserConfigOutputReference(this, "jolokia_user_config");
  public get jolokiaUserConfig() {
    return this._jolokiaUserConfig;
  }
  public putJolokiaUserConfig(value: ServiceIntegrationEndpointJolokiaUserConfig) {
    this._jolokiaUserConfig.internalValue = value;
  }
  public resetJolokiaUserConfig() {
    this._jolokiaUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jolokiaUserConfigInput() {
    return this._jolokiaUserConfig.internalValue;
  }

  // prometheus_user_config - computed: false, optional: true, required: false
  private _prometheusUserConfig = new ServiceIntegrationEndpointPrometheusUserConfigOutputReference(this, "prometheus_user_config");
  public get prometheusUserConfig() {
    return this._prometheusUserConfig;
  }
  public putPrometheusUserConfig(value: ServiceIntegrationEndpointPrometheusUserConfig) {
    this._prometheusUserConfig.internalValue = value;
  }
  public resetPrometheusUserConfig() {
    this._prometheusUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusUserConfigInput() {
    return this._prometheusUserConfig.internalValue;
  }

  // rsyslog_user_config - computed: false, optional: true, required: false
  private _rsyslogUserConfig = new ServiceIntegrationEndpointRsyslogUserConfigOutputReference(this, "rsyslog_user_config");
  public get rsyslogUserConfig() {
    return this._rsyslogUserConfig;
  }
  public putRsyslogUserConfig(value: ServiceIntegrationEndpointRsyslogUserConfig) {
    this._rsyslogUserConfig.internalValue = value;
  }
  public resetRsyslogUserConfig() {
    this._rsyslogUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsyslogUserConfigInput() {
    return this._rsyslogUserConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServiceIntegrationEndpointTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServiceIntegrationEndpointTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint_name: cdktf.stringToTerraform(this._endpointName),
      endpoint_type: cdktf.stringToTerraform(this._endpointType),
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      autoscaler_user_config: serviceIntegrationEndpointAutoscalerUserConfigToTerraform(this._autoscalerUserConfig.internalValue),
      datadog_user_config: serviceIntegrationEndpointDatadogUserConfigToTerraform(this._datadogUserConfig.internalValue),
      external_aws_cloudwatch_logs_user_config: serviceIntegrationEndpointExternalAwsCloudwatchLogsUserConfigToTerraform(this._externalAwsCloudwatchLogsUserConfig.internalValue),
      external_aws_cloudwatch_metrics_user_config: serviceIntegrationEndpointExternalAwsCloudwatchMetricsUserConfigToTerraform(this._externalAwsCloudwatchMetricsUserConfig.internalValue),
      external_aws_s3_user_config: serviceIntegrationEndpointExternalAwsS3UserConfigToTerraform(this._externalAwsS3UserConfig.internalValue),
      external_azure_blob_storage_user_config: serviceIntegrationEndpointExternalAzureBlobStorageUserConfigToTerraform(this._externalAzureBlobStorageUserConfig.internalValue),
      external_clickhouse_user_config: serviceIntegrationEndpointExternalClickhouseUserConfigToTerraform(this._externalClickhouseUserConfig.internalValue),
      external_elasticsearch_logs_user_config: serviceIntegrationEndpointExternalElasticsearchLogsUserConfigToTerraform(this._externalElasticsearchLogsUserConfig.internalValue),
      external_google_cloud_bigquery: serviceIntegrationEndpointExternalGoogleCloudBigqueryToTerraform(this._externalGoogleCloudBigquery.internalValue),
      external_google_cloud_logging_user_config: serviceIntegrationEndpointExternalGoogleCloudLoggingUserConfigToTerraform(this._externalGoogleCloudLoggingUserConfig.internalValue),
      external_kafka_user_config: serviceIntegrationEndpointExternalKafkaUserConfigToTerraform(this._externalKafkaUserConfig.internalValue),
      external_mysql_user_config: serviceIntegrationEndpointExternalMysqlUserConfigToTerraform(this._externalMysqlUserConfig.internalValue),
      external_opensearch_logs_user_config: serviceIntegrationEndpointExternalOpensearchLogsUserConfigToTerraform(this._externalOpensearchLogsUserConfig.internalValue),
      external_postgresql: serviceIntegrationEndpointExternalPostgresqlToTerraform(this._externalPostgresql.internalValue),
      external_prometheus_user_config: serviceIntegrationEndpointExternalPrometheusUserConfigToTerraform(this._externalPrometheusUserConfig.internalValue),
      external_schema_registry_user_config: serviceIntegrationEndpointExternalSchemaRegistryUserConfigToTerraform(this._externalSchemaRegistryUserConfig.internalValue),
      jolokia_user_config: serviceIntegrationEndpointJolokiaUserConfigToTerraform(this._jolokiaUserConfig.internalValue),
      prometheus_user_config: serviceIntegrationEndpointPrometheusUserConfigToTerraform(this._prometheusUserConfig.internalValue),
      rsyslog_user_config: serviceIntegrationEndpointRsyslogUserConfigToTerraform(this._rsyslogUserConfig.internalValue),
      timeouts: serviceIntegrationEndpointTimeoutsToTerraform(this._timeouts.internalValue),
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
      endpoint_type: {
        value: cdktf.stringToHclTerraform(this._endpointType),
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
      autoscaler_user_config: {
        value: serviceIntegrationEndpointAutoscalerUserConfigToHclTerraform(this._autoscalerUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceIntegrationEndpointAutoscalerUserConfigList",
      },
      datadog_user_config: {
        value: serviceIntegrationEndpointDatadogUserConfigToHclTerraform(this._datadogUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceIntegrationEndpointDatadogUserConfigList",
      },
      external_aws_cloudwatch_logs_user_config: {
        value: serviceIntegrationEndpointExternalAwsCloudwatchLogsUserConfigToHclTerraform(this._externalAwsCloudwatchLogsUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceIntegrationEndpointExternalAwsCloudwatchLogsUserConfigList",
      },
      external_aws_cloudwatch_metrics_user_config: {
        value: serviceIntegrationEndpointExternalAwsCloudwatchMetricsUserConfigToHclTerraform(this._externalAwsCloudwatchMetricsUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceIntegrationEndpointExternalAwsCloudwatchMetricsUserConfigList",
      },
      external_aws_s3_user_config: {
        value: serviceIntegrationEndpointExternalAwsS3UserConfigToHclTerraform(this._externalAwsS3UserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceIntegrationEndpointExternalAwsS3UserConfigList",
      },
      external_azure_blob_storage_user_config: {
        value: serviceIntegrationEndpointExternalAzureBlobStorageUserConfigToHclTerraform(this._externalAzureBlobStorageUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceIntegrationEndpointExternalAzureBlobStorageUserConfigList",
      },
      external_clickhouse_user_config: {
        value: serviceIntegrationEndpointExternalClickhouseUserConfigToHclTerraform(this._externalClickhouseUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceIntegrationEndpointExternalClickhouseUserConfigList",
      },
      external_elasticsearch_logs_user_config: {
        value: serviceIntegrationEndpointExternalElasticsearchLogsUserConfigToHclTerraform(this._externalElasticsearchLogsUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceIntegrationEndpointExternalElasticsearchLogsUserConfigList",
      },
      external_google_cloud_bigquery: {
        value: serviceIntegrationEndpointExternalGoogleCloudBigqueryToHclTerraform(this._externalGoogleCloudBigquery.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceIntegrationEndpointExternalGoogleCloudBigqueryList",
      },
      external_google_cloud_logging_user_config: {
        value: serviceIntegrationEndpointExternalGoogleCloudLoggingUserConfigToHclTerraform(this._externalGoogleCloudLoggingUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceIntegrationEndpointExternalGoogleCloudLoggingUserConfigList",
      },
      external_kafka_user_config: {
        value: serviceIntegrationEndpointExternalKafkaUserConfigToHclTerraform(this._externalKafkaUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceIntegrationEndpointExternalKafkaUserConfigList",
      },
      external_mysql_user_config: {
        value: serviceIntegrationEndpointExternalMysqlUserConfigToHclTerraform(this._externalMysqlUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceIntegrationEndpointExternalMysqlUserConfigList",
      },
      external_opensearch_logs_user_config: {
        value: serviceIntegrationEndpointExternalOpensearchLogsUserConfigToHclTerraform(this._externalOpensearchLogsUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceIntegrationEndpointExternalOpensearchLogsUserConfigList",
      },
      external_postgresql: {
        value: serviceIntegrationEndpointExternalPostgresqlToHclTerraform(this._externalPostgresql.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceIntegrationEndpointExternalPostgresqlList",
      },
      external_prometheus_user_config: {
        value: serviceIntegrationEndpointExternalPrometheusUserConfigToHclTerraform(this._externalPrometheusUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceIntegrationEndpointExternalPrometheusUserConfigList",
      },
      external_schema_registry_user_config: {
        value: serviceIntegrationEndpointExternalSchemaRegistryUserConfigToHclTerraform(this._externalSchemaRegistryUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceIntegrationEndpointExternalSchemaRegistryUserConfigList",
      },
      jolokia_user_config: {
        value: serviceIntegrationEndpointJolokiaUserConfigToHclTerraform(this._jolokiaUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceIntegrationEndpointJolokiaUserConfigList",
      },
      prometheus_user_config: {
        value: serviceIntegrationEndpointPrometheusUserConfigToHclTerraform(this._prometheusUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceIntegrationEndpointPrometheusUserConfigList",
      },
      rsyslog_user_config: {
        value: serviceIntegrationEndpointRsyslogUserConfigToHclTerraform(this._rsyslogUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceIntegrationEndpointRsyslogUserConfigList",
      },
      timeouts: {
        value: serviceIntegrationEndpointTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServiceIntegrationEndpointTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
