// https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Destination endpoint for the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#destination_endpoint_id ServiceIntegration#destination_endpoint_id}
  */
  readonly destinationEndpointId?: string;
  /**
  * Destination service for the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#destination_service_name ServiceIntegration#destination_service_name}
  */
  readonly destinationServiceName?: string;
  /**
  * Destination service project name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#destination_service_project ServiceIntegration#destination_service_project}
  */
  readonly destinationServiceProject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#id ServiceIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of the service integration. The possible values are `alertmanager`, `autoscaler`, `caching`, `cassandra_cross_service_cluster`, `clickhouse_credentials`, `clickhouse_kafka`, `clickhouse_postgresql`, `dashboard`, `datadog`, `datasource`, `disaster_recovery`, `external_aws_cloudwatch_logs`, `external_aws_cloudwatch_metrics`, `external_elasticsearch_logs`, `external_google_cloud_logging`, `external_opensearch_logs`, `flink`, `flink_external_bigquery`, `flink_external_kafka`, `flink_external_postgresql`, `internal_connectivity`, `jolokia`, `kafka_connect`, `kafka_connect_postgresql`, `kafka_logs`, `kafka_mirrormaker`, `logs`, `m3aggregator`, `m3coordinator`, `metrics`, `opensearch_cross_cluster_replication`, `opensearch_cross_cluster_search`, `prometheus`, `read_replica`, `rsyslog`, `schema_registry_proxy`, `stresstester`, `thanos_distributed_query`, `thanos_migrate`, `thanoscompactor`, `thanosquery`, `thanosruler`, `thanosstore`, `vector` and `vmalert`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#integration_type ServiceIntegration#integration_type}
  */
  readonly integrationType: string;
  /**
  * Project the integration belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#project ServiceIntegration#project}
  */
  readonly project: string;
  /**
  * Source endpoint for the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#source_endpoint_id ServiceIntegration#source_endpoint_id}
  */
  readonly sourceEndpointId?: string;
  /**
  * Source service for the integration (if any)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#source_service_name ServiceIntegration#source_service_name}
  */
  readonly sourceServiceName?: string;
  /**
  * Source service project name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#source_service_project ServiceIntegration#source_service_project}
  */
  readonly sourceServiceProject?: string;
  /**
  * clickhouse_credentials_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#clickhouse_credentials_user_config ServiceIntegration#clickhouse_credentials_user_config}
  */
  readonly clickhouseCredentialsUserConfig?: ServiceIntegrationClickhouseCredentialsUserConfig;
  /**
  * clickhouse_kafka_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#clickhouse_kafka_user_config ServiceIntegration#clickhouse_kafka_user_config}
  */
  readonly clickhouseKafkaUserConfig?: ServiceIntegrationClickhouseKafkaUserConfig;
  /**
  * clickhouse_postgresql_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#clickhouse_postgresql_user_config ServiceIntegration#clickhouse_postgresql_user_config}
  */
  readonly clickhousePostgresqlUserConfig?: ServiceIntegrationClickhousePostgresqlUserConfig;
  /**
  * datadog_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#datadog_user_config ServiceIntegration#datadog_user_config}
  */
  readonly datadogUserConfig?: ServiceIntegrationDatadogUserConfig;
  /**
  * external_aws_cloudwatch_logs_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#external_aws_cloudwatch_logs_user_config ServiceIntegration#external_aws_cloudwatch_logs_user_config}
  */
  readonly externalAwsCloudwatchLogsUserConfig?: ServiceIntegrationExternalAwsCloudwatchLogsUserConfig;
  /**
  * external_aws_cloudwatch_metrics_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#external_aws_cloudwatch_metrics_user_config ServiceIntegration#external_aws_cloudwatch_metrics_user_config}
  */
  readonly externalAwsCloudwatchMetricsUserConfig?: ServiceIntegrationExternalAwsCloudwatchMetricsUserConfig;
  /**
  * external_elasticsearch_logs_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#external_elasticsearch_logs_user_config ServiceIntegration#external_elasticsearch_logs_user_config}
  */
  readonly externalElasticsearchLogsUserConfig?: ServiceIntegrationExternalElasticsearchLogsUserConfig;
  /**
  * external_opensearch_logs_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#external_opensearch_logs_user_config ServiceIntegration#external_opensearch_logs_user_config}
  */
  readonly externalOpensearchLogsUserConfig?: ServiceIntegrationExternalOpensearchLogsUserConfig;
  /**
  * flink_external_postgresql_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#flink_external_postgresql_user_config ServiceIntegration#flink_external_postgresql_user_config}
  */
  readonly flinkExternalPostgresqlUserConfig?: ServiceIntegrationFlinkExternalPostgresqlUserConfig;
  /**
  * kafka_connect_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#kafka_connect_user_config ServiceIntegration#kafka_connect_user_config}
  */
  readonly kafkaConnectUserConfig?: ServiceIntegrationKafkaConnectUserConfig;
  /**
  * kafka_logs_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#kafka_logs_user_config ServiceIntegration#kafka_logs_user_config}
  */
  readonly kafkaLogsUserConfig?: ServiceIntegrationKafkaLogsUserConfig;
  /**
  * kafka_mirrormaker_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#kafka_mirrormaker_user_config ServiceIntegration#kafka_mirrormaker_user_config}
  */
  readonly kafkaMirrormakerUserConfig?: ServiceIntegrationKafkaMirrormakerUserConfig;
  /**
  * logs_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#logs_user_config ServiceIntegration#logs_user_config}
  */
  readonly logsUserConfig?: ServiceIntegrationLogsUserConfig;
  /**
  * metrics_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#metrics_user_config ServiceIntegration#metrics_user_config}
  */
  readonly metricsUserConfig?: ServiceIntegrationMetricsUserConfig;
  /**
  * prometheus_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#prometheus_user_config ServiceIntegration#prometheus_user_config}
  */
  readonly prometheusUserConfig?: ServiceIntegrationPrometheusUserConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#timeouts ServiceIntegration#timeouts}
  */
  readonly timeouts?: ServiceIntegrationTimeouts;
}
export interface ServiceIntegrationClickhouseCredentialsUserConfigGrants {
  /**
  * User or role to assign the grant to. Example: `alice`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#user ServiceIntegration#user}
  */
  readonly user: string;
}

export function serviceIntegrationClickhouseCredentialsUserConfigGrantsToTerraform(struct?: ServiceIntegrationClickhouseCredentialsUserConfigGrants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function serviceIntegrationClickhouseCredentialsUserConfigGrantsToHclTerraform(struct?: ServiceIntegrationClickhouseCredentialsUserConfigGrants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationClickhouseCredentialsUserConfigGrantsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceIntegrationClickhouseCredentialsUserConfigGrants | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationClickhouseCredentialsUserConfigGrants | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._user = value.user;
    }
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

export class ServiceIntegrationClickhouseCredentialsUserConfigGrantsList extends cdktf.ComplexList {
  public internalValue? : ServiceIntegrationClickhouseCredentialsUserConfigGrants[] | cdktf.IResolvable

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
  public get(index: number): ServiceIntegrationClickhouseCredentialsUserConfigGrantsOutputReference {
    return new ServiceIntegrationClickhouseCredentialsUserConfigGrantsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceIntegrationClickhouseCredentialsUserConfig {
  /**
  * grants block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#grants ServiceIntegration#grants}
  */
  readonly grants?: ServiceIntegrationClickhouseCredentialsUserConfigGrants[] | cdktf.IResolvable;
}

export function serviceIntegrationClickhouseCredentialsUserConfigToTerraform(struct?: ServiceIntegrationClickhouseCredentialsUserConfigOutputReference | ServiceIntegrationClickhouseCredentialsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grants: cdktf.listMapper(serviceIntegrationClickhouseCredentialsUserConfigGrantsToTerraform, true)(struct!.grants),
  }
}


export function serviceIntegrationClickhouseCredentialsUserConfigToHclTerraform(struct?: ServiceIntegrationClickhouseCredentialsUserConfigOutputReference | ServiceIntegrationClickhouseCredentialsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grants: {
      value: cdktf.listMapperHcl(serviceIntegrationClickhouseCredentialsUserConfigGrantsToHclTerraform, true)(struct!.grants),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceIntegrationClickhouseCredentialsUserConfigGrantsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationClickhouseCredentialsUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationClickhouseCredentialsUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grants?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grants = this._grants?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationClickhouseCredentialsUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._grants.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._grants.internalValue = value.grants;
    }
  }

  // grants - computed: false, optional: true, required: false
  private _grants = new ServiceIntegrationClickhouseCredentialsUserConfigGrantsList(this, "grants", false);
  public get grants() {
    return this._grants;
  }
  public putGrants(value: ServiceIntegrationClickhouseCredentialsUserConfigGrants[] | cdktf.IResolvable) {
    this._grants.internalValue = value;
  }
  public resetGrants() {
    this._grants.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantsInput() {
    return this._grants.internalValue;
  }
}
export interface ServiceIntegrationClickhouseKafkaUserConfigTablesColumns {
  /**
  * The name of the column in the ClickHouse table. This should match the field names in your Kafka message format. Example: `key`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#name ServiceIntegration#name}
  */
  readonly name: string;
  /**
  * The ClickHouse data type for this column. Must be a valid ClickHouse data type that can handle the data format. Example: `UInt64`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#type ServiceIntegration#type}
  */
  readonly type: string;
}

export function serviceIntegrationClickhouseKafkaUserConfigTablesColumnsToTerraform(struct?: ServiceIntegrationClickhouseKafkaUserConfigTablesColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function serviceIntegrationClickhouseKafkaUserConfigTablesColumnsToHclTerraform(struct?: ServiceIntegrationClickhouseKafkaUserConfigTablesColumns | cdktf.IResolvable): any {
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

export class ServiceIntegrationClickhouseKafkaUserConfigTablesColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceIntegrationClickhouseKafkaUserConfigTablesColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationClickhouseKafkaUserConfigTablesColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

export class ServiceIntegrationClickhouseKafkaUserConfigTablesColumnsList extends cdktf.ComplexList {
  public internalValue? : ServiceIntegrationClickhouseKafkaUserConfigTablesColumns[] | cdktf.IResolvable

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
  public get(index: number): ServiceIntegrationClickhouseKafkaUserConfigTablesColumnsOutputReference {
    return new ServiceIntegrationClickhouseKafkaUserConfigTablesColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceIntegrationClickhouseKafkaUserConfigTablesTopics {
  /**
  * The name of the Kafka topic to read messages from or write messages to. The topic must exist in the Kafka cluster. Example: `topic_name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#name ServiceIntegration#name}
  */
  readonly name: string;
}

export function serviceIntegrationClickhouseKafkaUserConfigTablesTopicsToTerraform(struct?: ServiceIntegrationClickhouseKafkaUserConfigTablesTopics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function serviceIntegrationClickhouseKafkaUserConfigTablesTopicsToHclTerraform(struct?: ServiceIntegrationClickhouseKafkaUserConfigTablesTopics | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationClickhouseKafkaUserConfigTablesTopicsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceIntegrationClickhouseKafkaUserConfigTablesTopics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationClickhouseKafkaUserConfigTablesTopics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class ServiceIntegrationClickhouseKafkaUserConfigTablesTopicsList extends cdktf.ComplexList {
  public internalValue? : ServiceIntegrationClickhouseKafkaUserConfigTablesTopics[] | cdktf.IResolvable

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
  public get(index: number): ServiceIntegrationClickhouseKafkaUserConfigTablesTopicsOutputReference {
    return new ServiceIntegrationClickhouseKafkaUserConfigTablesTopicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceIntegrationClickhouseKafkaUserConfigTables {
  /**
  * Enum: `beginning`, `earliest`, `end`, `largest`, `latest`, `smallest`. Determines where to start reading from Kafka when no offset is stored or the stored offset is out of range. `earliest` starts from the beginning, `latest` starts from the end. Default: `earliest`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#auto_offset_reset ServiceIntegration#auto_offset_reset}
  */
  readonly autoOffsetReset?: string;
  /**
  * Enum: `Avro`, `AvroConfluent`, `CSV`, `JSONAsString`, `JSONCompactEachRow`, `JSONCompactStringsEachRow`, `JSONEachRow`, `JSONStringsEachRow`, `MsgPack`, `Parquet`, `RawBLOB`, `TSKV`, `TSV`, `TabSeparated`. The format of the messages in the Kafka topics. Determines how ClickHouse parses and serializes the data (e.g., JSON, CSV, Avro). Default: `JSONEachRow`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#data_format ServiceIntegration#data_format}
  */
  readonly dataFormat: string;
  /**
  * Enum: `basic`, `best_effort`, `best_effort_us`. Specifies how ClickHouse should parse DateTime values from text-based input formats. `basic` uses simple parsing, `best_effort` attempts more flexible parsing. Default: `basic`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#date_time_input_format ServiceIntegration#date_time_input_format}
  */
  readonly dateTimeInputFormat?: string;
  /**
  * The Kafka consumer group name. Multiple consumers with the same group name will share the workload and maintain offset positions. Default: `clickhouse`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#group_name ServiceIntegration#group_name}
  */
  readonly groupName: string;
  /**
  * Enum: `default`, `stream`. Defines how ClickHouse should handle errors when processing Kafka messages. `default` stops on errors, `stream` continues processing and logs errors. Default: `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#handle_error_mode ServiceIntegration#handle_error_mode}
  */
  readonly handleErrorMode?: string;
  /**
  * Maximum number of rows to collect before flushing data between Kafka and ClickHouse. Default: `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#max_block_size ServiceIntegration#max_block_size}
  */
  readonly maxBlockSize?: number;
  /**
  * Maximum number of rows that can be processed from a single Kafka message for row-based formats. Useful for controlling memory usage. Default: `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#max_rows_per_message ServiceIntegration#max_rows_per_message}
  */
  readonly maxRowsPerMessage?: number;
  /**
  * The name of the ClickHouse table to be created. This table can consume data from and write data to the specified Kafka topics. Example: `events`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#name ServiceIntegration#name}
  */
  readonly name: string;
  /**
  * Number of Kafka consumers to run per table per replica. Increasing this can improve throughput but may increase resource usage. Default: `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#num_consumers ServiceIntegration#num_consumers}
  */
  readonly numConsumers?: number;
  /**
  * Maximum number of messages to fetch in a single Kafka poll operation for reading. Default: `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#poll_max_batch_size ServiceIntegration#poll_max_batch_size}
  */
  readonly pollMaxBatchSize?: number;
  /**
  * Timeout in milliseconds for a single poll from Kafka. Takes the value of the stream_flush_interval_ms server setting by default (500ms). Default: `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#poll_max_timeout_ms ServiceIntegration#poll_max_timeout_ms}
  */
  readonly pollMaxTimeoutMs?: number;
  /**
  * The maximum number of messages in a batch sent to Kafka. If the number of messages exceeds this value, the batch is sent. Default: `10000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#producer_batch_num_messages ServiceIntegration#producer_batch_num_messages}
  */
  readonly producerBatchNumMessages?: number;
  /**
  * The maximum size in bytes of a batch of messages sent to Kafka. If the batch size is exceeded, the batch is sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#producer_batch_size ServiceIntegration#producer_batch_size}
  */
  readonly producerBatchSize?: number;
  /**
  * Enum: `gzip`, `lz4`, `none`, `snappy`, `zstd`. The compression codec to use when sending a batch of messages to Kafka. Default: `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#producer_compression_codec ServiceIntegration#producer_compression_codec}
  */
  readonly producerCompressionCodec?: string;
  /**
  * The compression level to use when sending a batch of messages to Kafka. Usable range is algorithm-dependent: [0-9] for gzip; [0-12] for lz4; only 0 for snappy; -1 = codec-dependent default compression level. Default: `-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#producer_compression_level ServiceIntegration#producer_compression_level}
  */
  readonly producerCompressionLevel?: number;
  /**
  * The time in milliseconds to wait for additional messages before sending a batch. If the time is exceeded, the batch is sent. Default: `5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#producer_linger_ms ServiceIntegration#producer_linger_ms}
  */
  readonly producerLingerMs?: number;
  /**
  * The maximum size of the buffer in kilobytes before sending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#producer_queue_buffering_max_kbytes ServiceIntegration#producer_queue_buffering_max_kbytes}
  */
  readonly producerQueueBufferingMaxKbytes?: number;
  /**
  * The maximum number of messages to buffer before sending. Default: `100000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#producer_queue_buffering_max_messages ServiceIntegration#producer_queue_buffering_max_messages}
  */
  readonly producerQueueBufferingMaxMessages?: number;
  /**
  * The number of acknowledgements the leader broker must receive from ISR brokers before responding to the request: 0=Broker does not send any response/ack to client, -1 will block until message is committed by all in sync replicas (ISRs). Default: `-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#producer_request_required_acks ServiceIntegration#producer_request_required_acks}
  */
  readonly producerRequestRequiredAcks?: number;
  /**
  * Number of broken messages to skip before stopping processing when reading from Kafka. Useful for handling corrupted data without failing the entire integration. Default: `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#skip_broken_messages ServiceIntegration#skip_broken_messages}
  */
  readonly skipBrokenMessages?: number;
  /**
  * When enabled, each consumer runs in its own thread, providing better isolation and potentially better performance for high-throughput scenarios. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#thread_per_consumer ServiceIntegration#thread_per_consumer}
  */
  readonly threadPerConsumer?: boolean | cdktf.IResolvable;
  /**
  * columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#columns ServiceIntegration#columns}
  */
  readonly columns: ServiceIntegrationClickhouseKafkaUserConfigTablesColumns[] | cdktf.IResolvable;
  /**
  * topics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#topics ServiceIntegration#topics}
  */
  readonly topics: ServiceIntegrationClickhouseKafkaUserConfigTablesTopics[] | cdktf.IResolvable;
}

export function serviceIntegrationClickhouseKafkaUserConfigTablesToTerraform(struct?: ServiceIntegrationClickhouseKafkaUserConfigTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_offset_reset: cdktf.stringToTerraform(struct!.autoOffsetReset),
    data_format: cdktf.stringToTerraform(struct!.dataFormat),
    date_time_input_format: cdktf.stringToTerraform(struct!.dateTimeInputFormat),
    group_name: cdktf.stringToTerraform(struct!.groupName),
    handle_error_mode: cdktf.stringToTerraform(struct!.handleErrorMode),
    max_block_size: cdktf.numberToTerraform(struct!.maxBlockSize),
    max_rows_per_message: cdktf.numberToTerraform(struct!.maxRowsPerMessage),
    name: cdktf.stringToTerraform(struct!.name),
    num_consumers: cdktf.numberToTerraform(struct!.numConsumers),
    poll_max_batch_size: cdktf.numberToTerraform(struct!.pollMaxBatchSize),
    poll_max_timeout_ms: cdktf.numberToTerraform(struct!.pollMaxTimeoutMs),
    producer_batch_num_messages: cdktf.numberToTerraform(struct!.producerBatchNumMessages),
    producer_batch_size: cdktf.numberToTerraform(struct!.producerBatchSize),
    producer_compression_codec: cdktf.stringToTerraform(struct!.producerCompressionCodec),
    producer_compression_level: cdktf.numberToTerraform(struct!.producerCompressionLevel),
    producer_linger_ms: cdktf.numberToTerraform(struct!.producerLingerMs),
    producer_queue_buffering_max_kbytes: cdktf.numberToTerraform(struct!.producerQueueBufferingMaxKbytes),
    producer_queue_buffering_max_messages: cdktf.numberToTerraform(struct!.producerQueueBufferingMaxMessages),
    producer_request_required_acks: cdktf.numberToTerraform(struct!.producerRequestRequiredAcks),
    skip_broken_messages: cdktf.numberToTerraform(struct!.skipBrokenMessages),
    thread_per_consumer: cdktf.booleanToTerraform(struct!.threadPerConsumer),
    columns: cdktf.listMapper(serviceIntegrationClickhouseKafkaUserConfigTablesColumnsToTerraform, true)(struct!.columns),
    topics: cdktf.listMapper(serviceIntegrationClickhouseKafkaUserConfigTablesTopicsToTerraform, true)(struct!.topics),
  }
}


export function serviceIntegrationClickhouseKafkaUserConfigTablesToHclTerraform(struct?: ServiceIntegrationClickhouseKafkaUserConfigTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_offset_reset: {
      value: cdktf.stringToHclTerraform(struct!.autoOffsetReset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_format: {
      value: cdktf.stringToHclTerraform(struct!.dataFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_time_input_format: {
      value: cdktf.stringToHclTerraform(struct!.dateTimeInputFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    handle_error_mode: {
      value: cdktf.stringToHclTerraform(struct!.handleErrorMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_block_size: {
      value: cdktf.numberToHclTerraform(struct!.maxBlockSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_rows_per_message: {
      value: cdktf.numberToHclTerraform(struct!.maxRowsPerMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_consumers: {
      value: cdktf.numberToHclTerraform(struct!.numConsumers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    poll_max_batch_size: {
      value: cdktf.numberToHclTerraform(struct!.pollMaxBatchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    poll_max_timeout_ms: {
      value: cdktf.numberToHclTerraform(struct!.pollMaxTimeoutMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    producer_batch_num_messages: {
      value: cdktf.numberToHclTerraform(struct!.producerBatchNumMessages),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    producer_batch_size: {
      value: cdktf.numberToHclTerraform(struct!.producerBatchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    producer_compression_codec: {
      value: cdktf.stringToHclTerraform(struct!.producerCompressionCodec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    producer_compression_level: {
      value: cdktf.numberToHclTerraform(struct!.producerCompressionLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    producer_linger_ms: {
      value: cdktf.numberToHclTerraform(struct!.producerLingerMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    producer_queue_buffering_max_kbytes: {
      value: cdktf.numberToHclTerraform(struct!.producerQueueBufferingMaxKbytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    producer_queue_buffering_max_messages: {
      value: cdktf.numberToHclTerraform(struct!.producerQueueBufferingMaxMessages),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    producer_request_required_acks: {
      value: cdktf.numberToHclTerraform(struct!.producerRequestRequiredAcks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    skip_broken_messages: {
      value: cdktf.numberToHclTerraform(struct!.skipBrokenMessages),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    thread_per_consumer: {
      value: cdktf.booleanToHclTerraform(struct!.threadPerConsumer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    columns: {
      value: cdktf.listMapperHcl(serviceIntegrationClickhouseKafkaUserConfigTablesColumnsToHclTerraform, true)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceIntegrationClickhouseKafkaUserConfigTablesColumnsList",
    },
    topics: {
      value: cdktf.listMapperHcl(serviceIntegrationClickhouseKafkaUserConfigTablesTopicsToHclTerraform, true)(struct!.topics),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceIntegrationClickhouseKafkaUserConfigTablesTopicsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationClickhouseKafkaUserConfigTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceIntegrationClickhouseKafkaUserConfigTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoOffsetReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoOffsetReset = this._autoOffsetReset;
    }
    if (this._dataFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFormat = this._dataFormat;
    }
    if (this._dateTimeInputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateTimeInputFormat = this._dateTimeInputFormat;
    }
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._handleErrorMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.handleErrorMode = this._handleErrorMode;
    }
    if (this._maxBlockSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBlockSize = this._maxBlockSize;
    }
    if (this._maxRowsPerMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRowsPerMessage = this._maxRowsPerMessage;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._numConsumers !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConsumers = this._numConsumers;
    }
    if (this._pollMaxBatchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollMaxBatchSize = this._pollMaxBatchSize;
    }
    if (this._pollMaxTimeoutMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollMaxTimeoutMs = this._pollMaxTimeoutMs;
    }
    if (this._producerBatchNumMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.producerBatchNumMessages = this._producerBatchNumMessages;
    }
    if (this._producerBatchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.producerBatchSize = this._producerBatchSize;
    }
    if (this._producerCompressionCodec !== undefined) {
      hasAnyValues = true;
      internalValueResult.producerCompressionCodec = this._producerCompressionCodec;
    }
    if (this._producerCompressionLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.producerCompressionLevel = this._producerCompressionLevel;
    }
    if (this._producerLingerMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.producerLingerMs = this._producerLingerMs;
    }
    if (this._producerQueueBufferingMaxKbytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.producerQueueBufferingMaxKbytes = this._producerQueueBufferingMaxKbytes;
    }
    if (this._producerQueueBufferingMaxMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.producerQueueBufferingMaxMessages = this._producerQueueBufferingMaxMessages;
    }
    if (this._producerRequestRequiredAcks !== undefined) {
      hasAnyValues = true;
      internalValueResult.producerRequestRequiredAcks = this._producerRequestRequiredAcks;
    }
    if (this._skipBrokenMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipBrokenMessages = this._skipBrokenMessages;
    }
    if (this._threadPerConsumer !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadPerConsumer = this._threadPerConsumer;
    }
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    if (this._topics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topics = this._topics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationClickhouseKafkaUserConfigTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoOffsetReset = undefined;
      this._dataFormat = undefined;
      this._dateTimeInputFormat = undefined;
      this._groupName = undefined;
      this._handleErrorMode = undefined;
      this._maxBlockSize = undefined;
      this._maxRowsPerMessage = undefined;
      this._name = undefined;
      this._numConsumers = undefined;
      this._pollMaxBatchSize = undefined;
      this._pollMaxTimeoutMs = undefined;
      this._producerBatchNumMessages = undefined;
      this._producerBatchSize = undefined;
      this._producerCompressionCodec = undefined;
      this._producerCompressionLevel = undefined;
      this._producerLingerMs = undefined;
      this._producerQueueBufferingMaxKbytes = undefined;
      this._producerQueueBufferingMaxMessages = undefined;
      this._producerRequestRequiredAcks = undefined;
      this._skipBrokenMessages = undefined;
      this._threadPerConsumer = undefined;
      this._columns.internalValue = undefined;
      this._topics.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoOffsetReset = value.autoOffsetReset;
      this._dataFormat = value.dataFormat;
      this._dateTimeInputFormat = value.dateTimeInputFormat;
      this._groupName = value.groupName;
      this._handleErrorMode = value.handleErrorMode;
      this._maxBlockSize = value.maxBlockSize;
      this._maxRowsPerMessage = value.maxRowsPerMessage;
      this._name = value.name;
      this._numConsumers = value.numConsumers;
      this._pollMaxBatchSize = value.pollMaxBatchSize;
      this._pollMaxTimeoutMs = value.pollMaxTimeoutMs;
      this._producerBatchNumMessages = value.producerBatchNumMessages;
      this._producerBatchSize = value.producerBatchSize;
      this._producerCompressionCodec = value.producerCompressionCodec;
      this._producerCompressionLevel = value.producerCompressionLevel;
      this._producerLingerMs = value.producerLingerMs;
      this._producerQueueBufferingMaxKbytes = value.producerQueueBufferingMaxKbytes;
      this._producerQueueBufferingMaxMessages = value.producerQueueBufferingMaxMessages;
      this._producerRequestRequiredAcks = value.producerRequestRequiredAcks;
      this._skipBrokenMessages = value.skipBrokenMessages;
      this._threadPerConsumer = value.threadPerConsumer;
      this._columns.internalValue = value.columns;
      this._topics.internalValue = value.topics;
    }
  }

  // auto_offset_reset - computed: false, optional: true, required: false
  private _autoOffsetReset?: string; 
  public get autoOffsetReset() {
    return this.getStringAttribute('auto_offset_reset');
  }
  public set autoOffsetReset(value: string) {
    this._autoOffsetReset = value;
  }
  public resetAutoOffsetReset() {
    this._autoOffsetReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoOffsetResetInput() {
    return this._autoOffsetReset;
  }

  // data_format - computed: false, optional: false, required: true
  private _dataFormat?: string; 
  public get dataFormat() {
    return this.getStringAttribute('data_format');
  }
  public set dataFormat(value: string) {
    this._dataFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFormatInput() {
    return this._dataFormat;
  }

  // date_time_input_format - computed: false, optional: true, required: false
  private _dateTimeInputFormat?: string; 
  public get dateTimeInputFormat() {
    return this.getStringAttribute('date_time_input_format');
  }
  public set dateTimeInputFormat(value: string) {
    this._dateTimeInputFormat = value;
  }
  public resetDateTimeInputFormat() {
    this._dateTimeInputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateTimeInputFormatInput() {
    return this._dateTimeInputFormat;
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // handle_error_mode - computed: false, optional: true, required: false
  private _handleErrorMode?: string; 
  public get handleErrorMode() {
    return this.getStringAttribute('handle_error_mode');
  }
  public set handleErrorMode(value: string) {
    this._handleErrorMode = value;
  }
  public resetHandleErrorMode() {
    this._handleErrorMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handleErrorModeInput() {
    return this._handleErrorMode;
  }

  // max_block_size - computed: false, optional: true, required: false
  private _maxBlockSize?: number; 
  public get maxBlockSize() {
    return this.getNumberAttribute('max_block_size');
  }
  public set maxBlockSize(value: number) {
    this._maxBlockSize = value;
  }
  public resetMaxBlockSize() {
    this._maxBlockSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBlockSizeInput() {
    return this._maxBlockSize;
  }

  // max_rows_per_message - computed: false, optional: true, required: false
  private _maxRowsPerMessage?: number; 
  public get maxRowsPerMessage() {
    return this.getNumberAttribute('max_rows_per_message');
  }
  public set maxRowsPerMessage(value: number) {
    this._maxRowsPerMessage = value;
  }
  public resetMaxRowsPerMessage() {
    this._maxRowsPerMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRowsPerMessageInput() {
    return this._maxRowsPerMessage;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // num_consumers - computed: false, optional: true, required: false
  private _numConsumers?: number; 
  public get numConsumers() {
    return this.getNumberAttribute('num_consumers');
  }
  public set numConsumers(value: number) {
    this._numConsumers = value;
  }
  public resetNumConsumers() {
    this._numConsumers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConsumersInput() {
    return this._numConsumers;
  }

  // poll_max_batch_size - computed: false, optional: true, required: false
  private _pollMaxBatchSize?: number; 
  public get pollMaxBatchSize() {
    return this.getNumberAttribute('poll_max_batch_size');
  }
  public set pollMaxBatchSize(value: number) {
    this._pollMaxBatchSize = value;
  }
  public resetPollMaxBatchSize() {
    this._pollMaxBatchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollMaxBatchSizeInput() {
    return this._pollMaxBatchSize;
  }

  // poll_max_timeout_ms - computed: false, optional: true, required: false
  private _pollMaxTimeoutMs?: number; 
  public get pollMaxTimeoutMs() {
    return this.getNumberAttribute('poll_max_timeout_ms');
  }
  public set pollMaxTimeoutMs(value: number) {
    this._pollMaxTimeoutMs = value;
  }
  public resetPollMaxTimeoutMs() {
    this._pollMaxTimeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollMaxTimeoutMsInput() {
    return this._pollMaxTimeoutMs;
  }

  // producer_batch_num_messages - computed: false, optional: true, required: false
  private _producerBatchNumMessages?: number; 
  public get producerBatchNumMessages() {
    return this.getNumberAttribute('producer_batch_num_messages');
  }
  public set producerBatchNumMessages(value: number) {
    this._producerBatchNumMessages = value;
  }
  public resetProducerBatchNumMessages() {
    this._producerBatchNumMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerBatchNumMessagesInput() {
    return this._producerBatchNumMessages;
  }

  // producer_batch_size - computed: false, optional: true, required: false
  private _producerBatchSize?: number; 
  public get producerBatchSize() {
    return this.getNumberAttribute('producer_batch_size');
  }
  public set producerBatchSize(value: number) {
    this._producerBatchSize = value;
  }
  public resetProducerBatchSize() {
    this._producerBatchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerBatchSizeInput() {
    return this._producerBatchSize;
  }

  // producer_compression_codec - computed: false, optional: true, required: false
  private _producerCompressionCodec?: string; 
  public get producerCompressionCodec() {
    return this.getStringAttribute('producer_compression_codec');
  }
  public set producerCompressionCodec(value: string) {
    this._producerCompressionCodec = value;
  }
  public resetProducerCompressionCodec() {
    this._producerCompressionCodec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerCompressionCodecInput() {
    return this._producerCompressionCodec;
  }

  // producer_compression_level - computed: false, optional: true, required: false
  private _producerCompressionLevel?: number; 
  public get producerCompressionLevel() {
    return this.getNumberAttribute('producer_compression_level');
  }
  public set producerCompressionLevel(value: number) {
    this._producerCompressionLevel = value;
  }
  public resetProducerCompressionLevel() {
    this._producerCompressionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerCompressionLevelInput() {
    return this._producerCompressionLevel;
  }

  // producer_linger_ms - computed: false, optional: true, required: false
  private _producerLingerMs?: number; 
  public get producerLingerMs() {
    return this.getNumberAttribute('producer_linger_ms');
  }
  public set producerLingerMs(value: number) {
    this._producerLingerMs = value;
  }
  public resetProducerLingerMs() {
    this._producerLingerMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerLingerMsInput() {
    return this._producerLingerMs;
  }

  // producer_queue_buffering_max_kbytes - computed: false, optional: true, required: false
  private _producerQueueBufferingMaxKbytes?: number; 
  public get producerQueueBufferingMaxKbytes() {
    return this.getNumberAttribute('producer_queue_buffering_max_kbytes');
  }
  public set producerQueueBufferingMaxKbytes(value: number) {
    this._producerQueueBufferingMaxKbytes = value;
  }
  public resetProducerQueueBufferingMaxKbytes() {
    this._producerQueueBufferingMaxKbytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerQueueBufferingMaxKbytesInput() {
    return this._producerQueueBufferingMaxKbytes;
  }

  // producer_queue_buffering_max_messages - computed: false, optional: true, required: false
  private _producerQueueBufferingMaxMessages?: number; 
  public get producerQueueBufferingMaxMessages() {
    return this.getNumberAttribute('producer_queue_buffering_max_messages');
  }
  public set producerQueueBufferingMaxMessages(value: number) {
    this._producerQueueBufferingMaxMessages = value;
  }
  public resetProducerQueueBufferingMaxMessages() {
    this._producerQueueBufferingMaxMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerQueueBufferingMaxMessagesInput() {
    return this._producerQueueBufferingMaxMessages;
  }

  // producer_request_required_acks - computed: false, optional: true, required: false
  private _producerRequestRequiredAcks?: number; 
  public get producerRequestRequiredAcks() {
    return this.getNumberAttribute('producer_request_required_acks');
  }
  public set producerRequestRequiredAcks(value: number) {
    this._producerRequestRequiredAcks = value;
  }
  public resetProducerRequestRequiredAcks() {
    this._producerRequestRequiredAcks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerRequestRequiredAcksInput() {
    return this._producerRequestRequiredAcks;
  }

  // skip_broken_messages - computed: false, optional: true, required: false
  private _skipBrokenMessages?: number; 
  public get skipBrokenMessages() {
    return this.getNumberAttribute('skip_broken_messages');
  }
  public set skipBrokenMessages(value: number) {
    this._skipBrokenMessages = value;
  }
  public resetSkipBrokenMessages() {
    this._skipBrokenMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipBrokenMessagesInput() {
    return this._skipBrokenMessages;
  }

  // thread_per_consumer - computed: false, optional: true, required: false
  private _threadPerConsumer?: boolean | cdktf.IResolvable; 
  public get threadPerConsumer() {
    return this.getBooleanAttribute('thread_per_consumer');
  }
  public set threadPerConsumer(value: boolean | cdktf.IResolvable) {
    this._threadPerConsumer = value;
  }
  public resetThreadPerConsumer() {
    this._threadPerConsumer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPerConsumerInput() {
    return this._threadPerConsumer;
  }

  // columns - computed: false, optional: false, required: true
  private _columns = new ServiceIntegrationClickhouseKafkaUserConfigTablesColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: ServiceIntegrationClickhouseKafkaUserConfigTablesColumns[] | cdktf.IResolvable) {
    this._columns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }

  // topics - computed: false, optional: false, required: true
  private _topics = new ServiceIntegrationClickhouseKafkaUserConfigTablesTopicsList(this, "topics", false);
  public get topics() {
    return this._topics;
  }
  public putTopics(value: ServiceIntegrationClickhouseKafkaUserConfigTablesTopics[] | cdktf.IResolvable) {
    this._topics.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsInput() {
    return this._topics.internalValue;
  }
}

export class ServiceIntegrationClickhouseKafkaUserConfigTablesList extends cdktf.ComplexList {
  public internalValue? : ServiceIntegrationClickhouseKafkaUserConfigTables[] | cdktf.IResolvable

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
  public get(index: number): ServiceIntegrationClickhouseKafkaUserConfigTablesOutputReference {
    return new ServiceIntegrationClickhouseKafkaUserConfigTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceIntegrationClickhouseKafkaUserConfig {
  /**
  * tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#tables ServiceIntegration#tables}
  */
  readonly tables?: ServiceIntegrationClickhouseKafkaUserConfigTables[] | cdktf.IResolvable;
}

export function serviceIntegrationClickhouseKafkaUserConfigToTerraform(struct?: ServiceIntegrationClickhouseKafkaUserConfigOutputReference | ServiceIntegrationClickhouseKafkaUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tables: cdktf.listMapper(serviceIntegrationClickhouseKafkaUserConfigTablesToTerraform, true)(struct!.tables),
  }
}


export function serviceIntegrationClickhouseKafkaUserConfigToHclTerraform(struct?: ServiceIntegrationClickhouseKafkaUserConfigOutputReference | ServiceIntegrationClickhouseKafkaUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tables: {
      value: cdktf.listMapperHcl(serviceIntegrationClickhouseKafkaUserConfigTablesToHclTerraform, true)(struct!.tables),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceIntegrationClickhouseKafkaUserConfigTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationClickhouseKafkaUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationClickhouseKafkaUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tables = this._tables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationClickhouseKafkaUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tables.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tables.internalValue = value.tables;
    }
  }

  // tables - computed: false, optional: true, required: false
  private _tables = new ServiceIntegrationClickhouseKafkaUserConfigTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }
  public putTables(value: ServiceIntegrationClickhouseKafkaUserConfigTables[] | cdktf.IResolvable) {
    this._tables.internalValue = value;
  }
  public resetTables() {
    this._tables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables.internalValue;
  }
}
export interface ServiceIntegrationClickhousePostgresqlUserConfigDatabases {
  /**
  * PostgreSQL database to expose. Default: `defaultdb`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#database ServiceIntegration#database}
  */
  readonly database?: string;
  /**
  * PostgreSQL schema to expose. Default: `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#schema ServiceIntegration#schema}
  */
  readonly schema?: string;
}

export function serviceIntegrationClickhousePostgresqlUserConfigDatabasesToTerraform(struct?: ServiceIntegrationClickhousePostgresqlUserConfigDatabases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    schema: cdktf.stringToTerraform(struct!.schema),
  }
}


export function serviceIntegrationClickhousePostgresqlUserConfigDatabasesToHclTerraform(struct?: ServiceIntegrationClickhousePostgresqlUserConfigDatabases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationClickhousePostgresqlUserConfigDatabasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceIntegrationClickhousePostgresqlUserConfigDatabases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationClickhousePostgresqlUserConfigDatabases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._schema = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._schema = value.schema;
    }
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }
}

export class ServiceIntegrationClickhousePostgresqlUserConfigDatabasesList extends cdktf.ComplexList {
  public internalValue? : ServiceIntegrationClickhousePostgresqlUserConfigDatabases[] | cdktf.IResolvable

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
  public get(index: number): ServiceIntegrationClickhousePostgresqlUserConfigDatabasesOutputReference {
    return new ServiceIntegrationClickhousePostgresqlUserConfigDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceIntegrationClickhousePostgresqlUserConfig {
  /**
  * databases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#databases ServiceIntegration#databases}
  */
  readonly databases?: ServiceIntegrationClickhousePostgresqlUserConfigDatabases[] | cdktf.IResolvable;
}

export function serviceIntegrationClickhousePostgresqlUserConfigToTerraform(struct?: ServiceIntegrationClickhousePostgresqlUserConfigOutputReference | ServiceIntegrationClickhousePostgresqlUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    databases: cdktf.listMapper(serviceIntegrationClickhousePostgresqlUserConfigDatabasesToTerraform, true)(struct!.databases),
  }
}


export function serviceIntegrationClickhousePostgresqlUserConfigToHclTerraform(struct?: ServiceIntegrationClickhousePostgresqlUserConfigOutputReference | ServiceIntegrationClickhousePostgresqlUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    databases: {
      value: cdktf.listMapperHcl(serviceIntegrationClickhousePostgresqlUserConfigDatabasesToHclTerraform, true)(struct!.databases),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceIntegrationClickhousePostgresqlUserConfigDatabasesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationClickhousePostgresqlUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationClickhousePostgresqlUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databases = this._databases?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationClickhousePostgresqlUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databases.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databases.internalValue = value.databases;
    }
  }

  // databases - computed: false, optional: true, required: false
  private _databases = new ServiceIntegrationClickhousePostgresqlUserConfigDatabasesList(this, "databases", false);
  public get databases() {
    return this._databases;
  }
  public putDatabases(value: ServiceIntegrationClickhousePostgresqlUserConfigDatabases[] | cdktf.IResolvable) {
    this._databases.internalValue = value;
  }
  public resetDatabases() {
    this._databases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databasesInput() {
    return this._databases.internalValue;
  }
}
export interface ServiceIntegrationDatadogUserConfigDatadogTags {
  /**
  * Optional tag explanation. Example: `Used to tag primary replica metrics`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#comment ServiceIntegration#comment}
  */
  readonly comment?: string;
  /**
  * Tag format and usage are described here: https://docs.datadoghq.com/getting_started/tagging. Tags with prefix `aiven-` are reserved for Aiven. Example: `replica:primary`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#tag ServiceIntegration#tag}
  */
  readonly tag: string;
}

export function serviceIntegrationDatadogUserConfigDatadogTagsToTerraform(struct?: ServiceIntegrationDatadogUserConfigDatadogTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function serviceIntegrationDatadogUserConfigDatadogTagsToHclTerraform(struct?: ServiceIntegrationDatadogUserConfigDatadogTags | cdktf.IResolvable): any {
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

export class ServiceIntegrationDatadogUserConfigDatadogTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceIntegrationDatadogUserConfigDatadogTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceIntegrationDatadogUserConfigDatadogTags | cdktf.IResolvable | undefined) {
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

export class ServiceIntegrationDatadogUserConfigDatadogTagsList extends cdktf.ComplexList {
  public internalValue? : ServiceIntegrationDatadogUserConfigDatadogTags[] | cdktf.IResolvable

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
  public get(index: number): ServiceIntegrationDatadogUserConfigDatadogTagsOutputReference {
    return new ServiceIntegrationDatadogUserConfigDatadogTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceIntegrationDatadogUserConfigOpensearch {
  /**
  * Enable Datadog Opensearch Cluster Monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#cluster_stats_enabled ServiceIntegration#cluster_stats_enabled}
  */
  readonly clusterStatsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable Datadog Opensearch Index Monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#index_stats_enabled ServiceIntegration#index_stats_enabled}
  */
  readonly indexStatsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable Datadog Opensearch Pending Task Monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#pending_task_stats_enabled ServiceIntegration#pending_task_stats_enabled}
  */
  readonly pendingTaskStatsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable Datadog Opensearch Primary Shard Monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#pshard_stats_enabled ServiceIntegration#pshard_stats_enabled}
  */
  readonly pshardStatsEnabled?: boolean | cdktf.IResolvable;
}

export function serviceIntegrationDatadogUserConfigOpensearchToTerraform(struct?: ServiceIntegrationDatadogUserConfigOpensearchOutputReference | ServiceIntegrationDatadogUserConfigOpensearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_stats_enabled: cdktf.booleanToTerraform(struct!.clusterStatsEnabled),
    index_stats_enabled: cdktf.booleanToTerraform(struct!.indexStatsEnabled),
    pending_task_stats_enabled: cdktf.booleanToTerraform(struct!.pendingTaskStatsEnabled),
    pshard_stats_enabled: cdktf.booleanToTerraform(struct!.pshardStatsEnabled),
  }
}


export function serviceIntegrationDatadogUserConfigOpensearchToHclTerraform(struct?: ServiceIntegrationDatadogUserConfigOpensearchOutputReference | ServiceIntegrationDatadogUserConfigOpensearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_stats_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.clusterStatsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    index_stats_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.indexStatsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pending_task_stats_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.pendingTaskStatsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pshard_stats_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.pshardStatsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationDatadogUserConfigOpensearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationDatadogUserConfigOpensearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterStatsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterStatsEnabled = this._clusterStatsEnabled;
    }
    if (this._indexStatsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexStatsEnabled = this._indexStatsEnabled;
    }
    if (this._pendingTaskStatsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pendingTaskStatsEnabled = this._pendingTaskStatsEnabled;
    }
    if (this._pshardStatsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pshardStatsEnabled = this._pshardStatsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationDatadogUserConfigOpensearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterStatsEnabled = undefined;
      this._indexStatsEnabled = undefined;
      this._pendingTaskStatsEnabled = undefined;
      this._pshardStatsEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterStatsEnabled = value.clusterStatsEnabled;
      this._indexStatsEnabled = value.indexStatsEnabled;
      this._pendingTaskStatsEnabled = value.pendingTaskStatsEnabled;
      this._pshardStatsEnabled = value.pshardStatsEnabled;
    }
  }

  // cluster_stats_enabled - computed: false, optional: true, required: false
  private _clusterStatsEnabled?: boolean | cdktf.IResolvable; 
  public get clusterStatsEnabled() {
    return this.getBooleanAttribute('cluster_stats_enabled');
  }
  public set clusterStatsEnabled(value: boolean | cdktf.IResolvable) {
    this._clusterStatsEnabled = value;
  }
  public resetClusterStatsEnabled() {
    this._clusterStatsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterStatsEnabledInput() {
    return this._clusterStatsEnabled;
  }

  // index_stats_enabled - computed: false, optional: true, required: false
  private _indexStatsEnabled?: boolean | cdktf.IResolvable; 
  public get indexStatsEnabled() {
    return this.getBooleanAttribute('index_stats_enabled');
  }
  public set indexStatsEnabled(value: boolean | cdktf.IResolvable) {
    this._indexStatsEnabled = value;
  }
  public resetIndexStatsEnabled() {
    this._indexStatsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexStatsEnabledInput() {
    return this._indexStatsEnabled;
  }

  // pending_task_stats_enabled - computed: false, optional: true, required: false
  private _pendingTaskStatsEnabled?: boolean | cdktf.IResolvable; 
  public get pendingTaskStatsEnabled() {
    return this.getBooleanAttribute('pending_task_stats_enabled');
  }
  public set pendingTaskStatsEnabled(value: boolean | cdktf.IResolvable) {
    this._pendingTaskStatsEnabled = value;
  }
  public resetPendingTaskStatsEnabled() {
    this._pendingTaskStatsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pendingTaskStatsEnabledInput() {
    return this._pendingTaskStatsEnabled;
  }

  // pshard_stats_enabled - computed: false, optional: true, required: false
  private _pshardStatsEnabled?: boolean | cdktf.IResolvable; 
  public get pshardStatsEnabled() {
    return this.getBooleanAttribute('pshard_stats_enabled');
  }
  public set pshardStatsEnabled(value: boolean | cdktf.IResolvable) {
    this._pshardStatsEnabled = value;
  }
  public resetPshardStatsEnabled() {
    this._pshardStatsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pshardStatsEnabledInput() {
    return this._pshardStatsEnabled;
  }
}
export interface ServiceIntegrationDatadogUserConfigRedis {
  /**
  * Enable command_stats option in the agent's configuration. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#command_stats_enabled ServiceIntegration#command_stats_enabled}
  */
  readonly commandStatsEnabled?: boolean | cdktf.IResolvable;
}

export function serviceIntegrationDatadogUserConfigRedisToTerraform(struct?: ServiceIntegrationDatadogUserConfigRedisOutputReference | ServiceIntegrationDatadogUserConfigRedis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command_stats_enabled: cdktf.booleanToTerraform(struct!.commandStatsEnabled),
  }
}


export function serviceIntegrationDatadogUserConfigRedisToHclTerraform(struct?: ServiceIntegrationDatadogUserConfigRedisOutputReference | ServiceIntegrationDatadogUserConfigRedis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command_stats_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.commandStatsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationDatadogUserConfigRedisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationDatadogUserConfigRedis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commandStatsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.commandStatsEnabled = this._commandStatsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationDatadogUserConfigRedis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commandStatsEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commandStatsEnabled = value.commandStatsEnabled;
    }
  }

  // command_stats_enabled - computed: false, optional: true, required: false
  private _commandStatsEnabled?: boolean | cdktf.IResolvable; 
  public get commandStatsEnabled() {
    return this.getBooleanAttribute('command_stats_enabled');
  }
  public set commandStatsEnabled(value: boolean | cdktf.IResolvable) {
    this._commandStatsEnabled = value;
  }
  public resetCommandStatsEnabled() {
    this._commandStatsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandStatsEnabledInput() {
    return this._commandStatsEnabled;
  }
}
export interface ServiceIntegrationDatadogUserConfig {
  /**
  * Enable Datadog Database Monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#datadog_dbm_enabled ServiceIntegration#datadog_dbm_enabled}
  */
  readonly datadogDbmEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable Datadog PgBouncer Metric Tracking.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#datadog_pgbouncer_enabled ServiceIntegration#datadog_pgbouncer_enabled}
  */
  readonly datadogPgbouncerEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of custom metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#exclude_consumer_groups ServiceIntegration#exclude_consumer_groups}
  */
  readonly excludeConsumerGroups?: string[];
  /**
  * List of topics to exclude.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#exclude_topics ServiceIntegration#exclude_topics}
  */
  readonly excludeTopics?: string[];
  /**
  * List of custom metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#include_consumer_groups ServiceIntegration#include_consumer_groups}
  */
  readonly includeConsumerGroups?: string[];
  /**
  * List of topics to include.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#include_topics ServiceIntegration#include_topics}
  */
  readonly includeTopics?: string[];
  /**
  * List of custom metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#kafka_custom_metrics ServiceIntegration#kafka_custom_metrics}
  */
  readonly kafkaCustomMetrics?: string[];
  /**
  * Maximum number of JMX metrics to send. Example: `2000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#max_jmx_metrics ServiceIntegration#max_jmx_metrics}
  */
  readonly maxJmxMetrics?: number;
  /**
  * List of custom metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#mirrormaker_custom_metrics ServiceIntegration#mirrormaker_custom_metrics}
  */
  readonly mirrormakerCustomMetrics?: string[];
  /**
  * datadog_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#datadog_tags ServiceIntegration#datadog_tags}
  */
  readonly datadogTags?: ServiceIntegrationDatadogUserConfigDatadogTags[] | cdktf.IResolvable;
  /**
  * opensearch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#opensearch ServiceIntegration#opensearch}
  */
  readonly opensearch?: ServiceIntegrationDatadogUserConfigOpensearch;
  /**
  * redis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#redis ServiceIntegration#redis}
  */
  readonly redis?: ServiceIntegrationDatadogUserConfigRedis;
}

export function serviceIntegrationDatadogUserConfigToTerraform(struct?: ServiceIntegrationDatadogUserConfigOutputReference | ServiceIntegrationDatadogUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datadog_dbm_enabled: cdktf.booleanToTerraform(struct!.datadogDbmEnabled),
    datadog_pgbouncer_enabled: cdktf.booleanToTerraform(struct!.datadogPgbouncerEnabled),
    exclude_consumer_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeConsumerGroups),
    exclude_topics: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeTopics),
    include_consumer_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeConsumerGroups),
    include_topics: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeTopics),
    kafka_custom_metrics: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kafkaCustomMetrics),
    max_jmx_metrics: cdktf.numberToTerraform(struct!.maxJmxMetrics),
    mirrormaker_custom_metrics: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mirrormakerCustomMetrics),
    datadog_tags: cdktf.listMapper(serviceIntegrationDatadogUserConfigDatadogTagsToTerraform, true)(struct!.datadogTags),
    opensearch: serviceIntegrationDatadogUserConfigOpensearchToTerraform(struct!.opensearch),
    redis: serviceIntegrationDatadogUserConfigRedisToTerraform(struct!.redis),
  }
}


export function serviceIntegrationDatadogUserConfigToHclTerraform(struct?: ServiceIntegrationDatadogUserConfigOutputReference | ServiceIntegrationDatadogUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datadog_dbm_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.datadogDbmEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    datadog_pgbouncer_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.datadogPgbouncerEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude_consumer_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeConsumerGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exclude_topics: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeTopics),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_consumer_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeConsumerGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_topics: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeTopics),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    kafka_custom_metrics: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kafkaCustomMetrics),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_jmx_metrics: {
      value: cdktf.numberToHclTerraform(struct!.maxJmxMetrics),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mirrormaker_custom_metrics: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mirrormakerCustomMetrics),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    datadog_tags: {
      value: cdktf.listMapperHcl(serviceIntegrationDatadogUserConfigDatadogTagsToHclTerraform, true)(struct!.datadogTags),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceIntegrationDatadogUserConfigDatadogTagsList",
    },
    opensearch: {
      value: serviceIntegrationDatadogUserConfigOpensearchToHclTerraform(struct!.opensearch),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceIntegrationDatadogUserConfigOpensearchList",
    },
    redis: {
      value: serviceIntegrationDatadogUserConfigRedisToHclTerraform(struct!.redis),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceIntegrationDatadogUserConfigRedisList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationDatadogUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationDatadogUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datadogDbmEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadogDbmEnabled = this._datadogDbmEnabled;
    }
    if (this._datadogPgbouncerEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadogPgbouncerEnabled = this._datadogPgbouncerEnabled;
    }
    if (this._excludeConsumerGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeConsumerGroups = this._excludeConsumerGroups;
    }
    if (this._excludeTopics !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeTopics = this._excludeTopics;
    }
    if (this._includeConsumerGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeConsumerGroups = this._includeConsumerGroups;
    }
    if (this._includeTopics !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTopics = this._includeTopics;
    }
    if (this._kafkaCustomMetrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaCustomMetrics = this._kafkaCustomMetrics;
    }
    if (this._maxJmxMetrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxJmxMetrics = this._maxJmxMetrics;
    }
    if (this._mirrormakerCustomMetrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrormakerCustomMetrics = this._mirrormakerCustomMetrics;
    }
    if (this._datadogTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadogTags = this._datadogTags?.internalValue;
    }
    if (this._opensearch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opensearch = this._opensearch?.internalValue;
    }
    if (this._redis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redis = this._redis?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationDatadogUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datadogDbmEnabled = undefined;
      this._datadogPgbouncerEnabled = undefined;
      this._excludeConsumerGroups = undefined;
      this._excludeTopics = undefined;
      this._includeConsumerGroups = undefined;
      this._includeTopics = undefined;
      this._kafkaCustomMetrics = undefined;
      this._maxJmxMetrics = undefined;
      this._mirrormakerCustomMetrics = undefined;
      this._datadogTags.internalValue = undefined;
      this._opensearch.internalValue = undefined;
      this._redis.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datadogDbmEnabled = value.datadogDbmEnabled;
      this._datadogPgbouncerEnabled = value.datadogPgbouncerEnabled;
      this._excludeConsumerGroups = value.excludeConsumerGroups;
      this._excludeTopics = value.excludeTopics;
      this._includeConsumerGroups = value.includeConsumerGroups;
      this._includeTopics = value.includeTopics;
      this._kafkaCustomMetrics = value.kafkaCustomMetrics;
      this._maxJmxMetrics = value.maxJmxMetrics;
      this._mirrormakerCustomMetrics = value.mirrormakerCustomMetrics;
      this._datadogTags.internalValue = value.datadogTags;
      this._opensearch.internalValue = value.opensearch;
      this._redis.internalValue = value.redis;
    }
  }

  // datadog_dbm_enabled - computed: false, optional: true, required: false
  private _datadogDbmEnabled?: boolean | cdktf.IResolvable; 
  public get datadogDbmEnabled() {
    return this.getBooleanAttribute('datadog_dbm_enabled');
  }
  public set datadogDbmEnabled(value: boolean | cdktf.IResolvable) {
    this._datadogDbmEnabled = value;
  }
  public resetDatadogDbmEnabled() {
    this._datadogDbmEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogDbmEnabledInput() {
    return this._datadogDbmEnabled;
  }

  // datadog_pgbouncer_enabled - computed: false, optional: true, required: false
  private _datadogPgbouncerEnabled?: boolean | cdktf.IResolvable; 
  public get datadogPgbouncerEnabled() {
    return this.getBooleanAttribute('datadog_pgbouncer_enabled');
  }
  public set datadogPgbouncerEnabled(value: boolean | cdktf.IResolvable) {
    this._datadogPgbouncerEnabled = value;
  }
  public resetDatadogPgbouncerEnabled() {
    this._datadogPgbouncerEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogPgbouncerEnabledInput() {
    return this._datadogPgbouncerEnabled;
  }

  // exclude_consumer_groups - computed: false, optional: true, required: false
  private _excludeConsumerGroups?: string[]; 
  public get excludeConsumerGroups() {
    return this.getListAttribute('exclude_consumer_groups');
  }
  public set excludeConsumerGroups(value: string[]) {
    this._excludeConsumerGroups = value;
  }
  public resetExcludeConsumerGroups() {
    this._excludeConsumerGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeConsumerGroupsInput() {
    return this._excludeConsumerGroups;
  }

  // exclude_topics - computed: false, optional: true, required: false
  private _excludeTopics?: string[]; 
  public get excludeTopics() {
    return this.getListAttribute('exclude_topics');
  }
  public set excludeTopics(value: string[]) {
    this._excludeTopics = value;
  }
  public resetExcludeTopics() {
    this._excludeTopics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeTopicsInput() {
    return this._excludeTopics;
  }

  // include_consumer_groups - computed: false, optional: true, required: false
  private _includeConsumerGroups?: string[]; 
  public get includeConsumerGroups() {
    return this.getListAttribute('include_consumer_groups');
  }
  public set includeConsumerGroups(value: string[]) {
    this._includeConsumerGroups = value;
  }
  public resetIncludeConsumerGroups() {
    this._includeConsumerGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeConsumerGroupsInput() {
    return this._includeConsumerGroups;
  }

  // include_topics - computed: false, optional: true, required: false
  private _includeTopics?: string[]; 
  public get includeTopics() {
    return this.getListAttribute('include_topics');
  }
  public set includeTopics(value: string[]) {
    this._includeTopics = value;
  }
  public resetIncludeTopics() {
    this._includeTopics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTopicsInput() {
    return this._includeTopics;
  }

  // kafka_custom_metrics - computed: false, optional: true, required: false
  private _kafkaCustomMetrics?: string[]; 
  public get kafkaCustomMetrics() {
    return this.getListAttribute('kafka_custom_metrics');
  }
  public set kafkaCustomMetrics(value: string[]) {
    this._kafkaCustomMetrics = value;
  }
  public resetKafkaCustomMetrics() {
    this._kafkaCustomMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaCustomMetricsInput() {
    return this._kafkaCustomMetrics;
  }

  // max_jmx_metrics - computed: false, optional: true, required: false
  private _maxJmxMetrics?: number; 
  public get maxJmxMetrics() {
    return this.getNumberAttribute('max_jmx_metrics');
  }
  public set maxJmxMetrics(value: number) {
    this._maxJmxMetrics = value;
  }
  public resetMaxJmxMetrics() {
    this._maxJmxMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxJmxMetricsInput() {
    return this._maxJmxMetrics;
  }

  // mirrormaker_custom_metrics - computed: false, optional: true, required: false
  private _mirrormakerCustomMetrics?: string[]; 
  public get mirrormakerCustomMetrics() {
    return this.getListAttribute('mirrormaker_custom_metrics');
  }
  public set mirrormakerCustomMetrics(value: string[]) {
    this._mirrormakerCustomMetrics = value;
  }
  public resetMirrormakerCustomMetrics() {
    this._mirrormakerCustomMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrormakerCustomMetricsInput() {
    return this._mirrormakerCustomMetrics;
  }

  // datadog_tags - computed: false, optional: true, required: false
  private _datadogTags = new ServiceIntegrationDatadogUserConfigDatadogTagsList(this, "datadog_tags", false);
  public get datadogTags() {
    return this._datadogTags;
  }
  public putDatadogTags(value: ServiceIntegrationDatadogUserConfigDatadogTags[] | cdktf.IResolvable) {
    this._datadogTags.internalValue = value;
  }
  public resetDatadogTags() {
    this._datadogTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogTagsInput() {
    return this._datadogTags.internalValue;
  }

  // opensearch - computed: false, optional: true, required: false
  private _opensearch = new ServiceIntegrationDatadogUserConfigOpensearchOutputReference(this, "opensearch");
  public get opensearch() {
    return this._opensearch;
  }
  public putOpensearch(value: ServiceIntegrationDatadogUserConfigOpensearch) {
    this._opensearch.internalValue = value;
  }
  public resetOpensearch() {
    this._opensearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opensearchInput() {
    return this._opensearch.internalValue;
  }

  // redis - computed: false, optional: true, required: false
  private _redis = new ServiceIntegrationDatadogUserConfigRedisOutputReference(this, "redis");
  public get redis() {
    return this._redis;
  }
  public putRedis(value: ServiceIntegrationDatadogUserConfigRedis) {
    this._redis.internalValue = value;
  }
  public resetRedis() {
    this._redis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisInput() {
    return this._redis.internalValue;
  }
}
export interface ServiceIntegrationExternalAwsCloudwatchLogsUserConfig {
  /**
  * The list of logging fields that will be sent to the integration logging service. The MESSAGE and timestamp fields are always sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#selected_log_fields ServiceIntegration#selected_log_fields}
  */
  readonly selectedLogFields?: string[];
}

export function serviceIntegrationExternalAwsCloudwatchLogsUserConfigToTerraform(struct?: ServiceIntegrationExternalAwsCloudwatchLogsUserConfigOutputReference | ServiceIntegrationExternalAwsCloudwatchLogsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selected_log_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.selectedLogFields),
  }
}


export function serviceIntegrationExternalAwsCloudwatchLogsUserConfigToHclTerraform(struct?: ServiceIntegrationExternalAwsCloudwatchLogsUserConfigOutputReference | ServiceIntegrationExternalAwsCloudwatchLogsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selected_log_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.selectedLogFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationExternalAwsCloudwatchLogsUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationExternalAwsCloudwatchLogsUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selectedLogFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedLogFields = this._selectedLogFields;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationExternalAwsCloudwatchLogsUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._selectedLogFields = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._selectedLogFields = value.selectedLogFields;
    }
  }

  // selected_log_fields - computed: false, optional: true, required: false
  private _selectedLogFields?: string[]; 
  public get selectedLogFields() {
    return this.getListAttribute('selected_log_fields');
  }
  public set selectedLogFields(value: string[]) {
    this._selectedLogFields = value;
  }
  public resetSelectedLogFields() {
    this._selectedLogFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedLogFieldsInput() {
    return this._selectedLogFields;
  }
}
export interface ServiceIntegrationExternalAwsCloudwatchMetricsUserConfigDroppedMetrics {
  /**
  * Identifier of a value in the metric. Example: `used`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#field ServiceIntegration#field}
  */
  readonly field: string;
  /**
  * Identifier of the metric. Example: `java.lang:Memory`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#metric ServiceIntegration#metric}
  */
  readonly metric: string;
}

export function serviceIntegrationExternalAwsCloudwatchMetricsUserConfigDroppedMetricsToTerraform(struct?: ServiceIntegrationExternalAwsCloudwatchMetricsUserConfigDroppedMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    metric: cdktf.stringToTerraform(struct!.metric),
  }
}


export function serviceIntegrationExternalAwsCloudwatchMetricsUserConfigDroppedMetricsToHclTerraform(struct?: ServiceIntegrationExternalAwsCloudwatchMetricsUserConfigDroppedMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: cdktf.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationExternalAwsCloudwatchMetricsUserConfigDroppedMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceIntegrationExternalAwsCloudwatchMetricsUserConfigDroppedMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationExternalAwsCloudwatchMetricsUserConfigDroppedMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._metric = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._metric = value.metric;
    }
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // metric - computed: false, optional: false, required: true
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }
}

export class ServiceIntegrationExternalAwsCloudwatchMetricsUserConfigDroppedMetricsList extends cdktf.ComplexList {
  public internalValue? : ServiceIntegrationExternalAwsCloudwatchMetricsUserConfigDroppedMetrics[] | cdktf.IResolvable

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
  public get(index: number): ServiceIntegrationExternalAwsCloudwatchMetricsUserConfigDroppedMetricsOutputReference {
    return new ServiceIntegrationExternalAwsCloudwatchMetricsUserConfigDroppedMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceIntegrationExternalAwsCloudwatchMetricsUserConfigExtraMetrics {
  /**
  * Identifier of a value in the metric. Example: `used`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#field ServiceIntegration#field}
  */
  readonly field: string;
  /**
  * Identifier of the metric. Example: `java.lang:Memory`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#metric ServiceIntegration#metric}
  */
  readonly metric: string;
}

export function serviceIntegrationExternalAwsCloudwatchMetricsUserConfigExtraMetricsToTerraform(struct?: ServiceIntegrationExternalAwsCloudwatchMetricsUserConfigExtraMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    metric: cdktf.stringToTerraform(struct!.metric),
  }
}


export function serviceIntegrationExternalAwsCloudwatchMetricsUserConfigExtraMetricsToHclTerraform(struct?: ServiceIntegrationExternalAwsCloudwatchMetricsUserConfigExtraMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: cdktf.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationExternalAwsCloudwatchMetricsUserConfigExtraMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceIntegrationExternalAwsCloudwatchMetricsUserConfigExtraMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationExternalAwsCloudwatchMetricsUserConfigExtraMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._metric = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._metric = value.metric;
    }
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // metric - computed: false, optional: false, required: true
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }
}

export class ServiceIntegrationExternalAwsCloudwatchMetricsUserConfigExtraMetricsList extends cdktf.ComplexList {
  public internalValue? : ServiceIntegrationExternalAwsCloudwatchMetricsUserConfigExtraMetrics[] | cdktf.IResolvable

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
  public get(index: number): ServiceIntegrationExternalAwsCloudwatchMetricsUserConfigExtraMetricsOutputReference {
    return new ServiceIntegrationExternalAwsCloudwatchMetricsUserConfigExtraMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceIntegrationExternalAwsCloudwatchMetricsUserConfig {
  /**
  * dropped_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#dropped_metrics ServiceIntegration#dropped_metrics}
  */
  readonly droppedMetrics?: ServiceIntegrationExternalAwsCloudwatchMetricsUserConfigDroppedMetrics[] | cdktf.IResolvable;
  /**
  * extra_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#extra_metrics ServiceIntegration#extra_metrics}
  */
  readonly extraMetrics?: ServiceIntegrationExternalAwsCloudwatchMetricsUserConfigExtraMetrics[] | cdktf.IResolvable;
}

export function serviceIntegrationExternalAwsCloudwatchMetricsUserConfigToTerraform(struct?: ServiceIntegrationExternalAwsCloudwatchMetricsUserConfigOutputReference | ServiceIntegrationExternalAwsCloudwatchMetricsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dropped_metrics: cdktf.listMapper(serviceIntegrationExternalAwsCloudwatchMetricsUserConfigDroppedMetricsToTerraform, true)(struct!.droppedMetrics),
    extra_metrics: cdktf.listMapper(serviceIntegrationExternalAwsCloudwatchMetricsUserConfigExtraMetricsToTerraform, true)(struct!.extraMetrics),
  }
}


export function serviceIntegrationExternalAwsCloudwatchMetricsUserConfigToHclTerraform(struct?: ServiceIntegrationExternalAwsCloudwatchMetricsUserConfigOutputReference | ServiceIntegrationExternalAwsCloudwatchMetricsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dropped_metrics: {
      value: cdktf.listMapperHcl(serviceIntegrationExternalAwsCloudwatchMetricsUserConfigDroppedMetricsToHclTerraform, true)(struct!.droppedMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceIntegrationExternalAwsCloudwatchMetricsUserConfigDroppedMetricsList",
    },
    extra_metrics: {
      value: cdktf.listMapperHcl(serviceIntegrationExternalAwsCloudwatchMetricsUserConfigExtraMetricsToHclTerraform, true)(struct!.extraMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceIntegrationExternalAwsCloudwatchMetricsUserConfigExtraMetricsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationExternalAwsCloudwatchMetricsUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationExternalAwsCloudwatchMetricsUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._droppedMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.droppedMetrics = this._droppedMetrics?.internalValue;
    }
    if (this._extraMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraMetrics = this._extraMetrics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationExternalAwsCloudwatchMetricsUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._droppedMetrics.internalValue = undefined;
      this._extraMetrics.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._droppedMetrics.internalValue = value.droppedMetrics;
      this._extraMetrics.internalValue = value.extraMetrics;
    }
  }

  // dropped_metrics - computed: false, optional: true, required: false
  private _droppedMetrics = new ServiceIntegrationExternalAwsCloudwatchMetricsUserConfigDroppedMetricsList(this, "dropped_metrics", false);
  public get droppedMetrics() {
    return this._droppedMetrics;
  }
  public putDroppedMetrics(value: ServiceIntegrationExternalAwsCloudwatchMetricsUserConfigDroppedMetrics[] | cdktf.IResolvable) {
    this._droppedMetrics.internalValue = value;
  }
  public resetDroppedMetrics() {
    this._droppedMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get droppedMetricsInput() {
    return this._droppedMetrics.internalValue;
  }

  // extra_metrics - computed: false, optional: true, required: false
  private _extraMetrics = new ServiceIntegrationExternalAwsCloudwatchMetricsUserConfigExtraMetricsList(this, "extra_metrics", false);
  public get extraMetrics() {
    return this._extraMetrics;
  }
  public putExtraMetrics(value: ServiceIntegrationExternalAwsCloudwatchMetricsUserConfigExtraMetrics[] | cdktf.IResolvable) {
    this._extraMetrics.internalValue = value;
  }
  public resetExtraMetrics() {
    this._extraMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraMetricsInput() {
    return this._extraMetrics.internalValue;
  }
}
export interface ServiceIntegrationExternalElasticsearchLogsUserConfig {
  /**
  * The list of logging fields that will be sent to the integration logging service. The MESSAGE and timestamp fields are always sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#selected_log_fields ServiceIntegration#selected_log_fields}
  */
  readonly selectedLogFields?: string[];
}

export function serviceIntegrationExternalElasticsearchLogsUserConfigToTerraform(struct?: ServiceIntegrationExternalElasticsearchLogsUserConfigOutputReference | ServiceIntegrationExternalElasticsearchLogsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selected_log_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.selectedLogFields),
  }
}


export function serviceIntegrationExternalElasticsearchLogsUserConfigToHclTerraform(struct?: ServiceIntegrationExternalElasticsearchLogsUserConfigOutputReference | ServiceIntegrationExternalElasticsearchLogsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selected_log_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.selectedLogFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationExternalElasticsearchLogsUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationExternalElasticsearchLogsUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selectedLogFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedLogFields = this._selectedLogFields;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationExternalElasticsearchLogsUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._selectedLogFields = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._selectedLogFields = value.selectedLogFields;
    }
  }

  // selected_log_fields - computed: false, optional: true, required: false
  private _selectedLogFields?: string[]; 
  public get selectedLogFields() {
    return this.getListAttribute('selected_log_fields');
  }
  public set selectedLogFields(value: string[]) {
    this._selectedLogFields = value;
  }
  public resetSelectedLogFields() {
    this._selectedLogFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedLogFieldsInput() {
    return this._selectedLogFields;
  }
}
export interface ServiceIntegrationExternalOpensearchLogsUserConfig {
  /**
  * The list of logging fields that will be sent to the integration logging service. The MESSAGE and timestamp fields are always sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#selected_log_fields ServiceIntegration#selected_log_fields}
  */
  readonly selectedLogFields?: string[];
}

export function serviceIntegrationExternalOpensearchLogsUserConfigToTerraform(struct?: ServiceIntegrationExternalOpensearchLogsUserConfigOutputReference | ServiceIntegrationExternalOpensearchLogsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selected_log_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.selectedLogFields),
  }
}


export function serviceIntegrationExternalOpensearchLogsUserConfigToHclTerraform(struct?: ServiceIntegrationExternalOpensearchLogsUserConfigOutputReference | ServiceIntegrationExternalOpensearchLogsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selected_log_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.selectedLogFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationExternalOpensearchLogsUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationExternalOpensearchLogsUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selectedLogFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedLogFields = this._selectedLogFields;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationExternalOpensearchLogsUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._selectedLogFields = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._selectedLogFields = value.selectedLogFields;
    }
  }

  // selected_log_fields - computed: false, optional: true, required: false
  private _selectedLogFields?: string[]; 
  public get selectedLogFields() {
    return this.getListAttribute('selected_log_fields');
  }
  public set selectedLogFields(value: string[]) {
    this._selectedLogFields = value;
  }
  public resetSelectedLogFields() {
    this._selectedLogFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedLogFieldsInput() {
    return this._selectedLogFields;
  }
}
export interface ServiceIntegrationFlinkExternalPostgresqlUserConfig {
  /**
  * Enum: `unspecified`. If stringtype is set to unspecified, parameters will be sent to the server as untyped values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#stringtype ServiceIntegration#stringtype}
  */
  readonly stringtype?: string;
}

export function serviceIntegrationFlinkExternalPostgresqlUserConfigToTerraform(struct?: ServiceIntegrationFlinkExternalPostgresqlUserConfigOutputReference | ServiceIntegrationFlinkExternalPostgresqlUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stringtype: cdktf.stringToTerraform(struct!.stringtype),
  }
}


export function serviceIntegrationFlinkExternalPostgresqlUserConfigToHclTerraform(struct?: ServiceIntegrationFlinkExternalPostgresqlUserConfigOutputReference | ServiceIntegrationFlinkExternalPostgresqlUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stringtype: {
      value: cdktf.stringToHclTerraform(struct!.stringtype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationFlinkExternalPostgresqlUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationFlinkExternalPostgresqlUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stringtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringtype = this._stringtype;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationFlinkExternalPostgresqlUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stringtype = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stringtype = value.stringtype;
    }
  }

  // stringtype - computed: false, optional: true, required: false
  private _stringtype?: string; 
  public get stringtype() {
    return this.getStringAttribute('stringtype');
  }
  public set stringtype(value: string) {
    this._stringtype = value;
  }
  public resetStringtype() {
    this._stringtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringtypeInput() {
    return this._stringtype;
  }
}
export interface ServiceIntegrationKafkaConnectUserConfigKafkaConnect {
  /**
  * The name of the topic where connector and task configuration data are stored.This must be the same for all workers with the same group_id. Example: `__connect_configs`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#config_storage_topic ServiceIntegration#config_storage_topic}
  */
  readonly configStorageTopic?: string;
  /**
  * A unique string that identifies the Connect cluster group this worker belongs to. Example: `connect`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#group_id ServiceIntegration#group_id}
  */
  readonly groupId?: string;
  /**
  * The name of the topic where connector and task configuration offsets are stored.This must be the same for all workers with the same group_id. Example: `__connect_offsets`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#offset_storage_topic ServiceIntegration#offset_storage_topic}
  */
  readonly offsetStorageTopic?: string;
  /**
  * The name of the topic where connector and task configuration status updates are stored.This must be the same for all workers with the same group_id. Example: `__connect_status`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#status_storage_topic ServiceIntegration#status_storage_topic}
  */
  readonly statusStorageTopic?: string;
}

export function serviceIntegrationKafkaConnectUserConfigKafkaConnectToTerraform(struct?: ServiceIntegrationKafkaConnectUserConfigKafkaConnectOutputReference | ServiceIntegrationKafkaConnectUserConfigKafkaConnect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_storage_topic: cdktf.stringToTerraform(struct!.configStorageTopic),
    group_id: cdktf.stringToTerraform(struct!.groupId),
    offset_storage_topic: cdktf.stringToTerraform(struct!.offsetStorageTopic),
    status_storage_topic: cdktf.stringToTerraform(struct!.statusStorageTopic),
  }
}


export function serviceIntegrationKafkaConnectUserConfigKafkaConnectToHclTerraform(struct?: ServiceIntegrationKafkaConnectUserConfigKafkaConnectOutputReference | ServiceIntegrationKafkaConnectUserConfigKafkaConnect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_storage_topic: {
      value: cdktf.stringToHclTerraform(struct!.configStorageTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    offset_storage_topic: {
      value: cdktf.stringToHclTerraform(struct!.offsetStorageTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_storage_topic: {
      value: cdktf.stringToHclTerraform(struct!.statusStorageTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationKafkaConnectUserConfigKafkaConnectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationKafkaConnectUserConfigKafkaConnect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configStorageTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.configStorageTopic = this._configStorageTopic;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._offsetStorageTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.offsetStorageTopic = this._offsetStorageTopic;
    }
    if (this._statusStorageTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusStorageTopic = this._statusStorageTopic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationKafkaConnectUserConfigKafkaConnect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configStorageTopic = undefined;
      this._groupId = undefined;
      this._offsetStorageTopic = undefined;
      this._statusStorageTopic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configStorageTopic = value.configStorageTopic;
      this._groupId = value.groupId;
      this._offsetStorageTopic = value.offsetStorageTopic;
      this._statusStorageTopic = value.statusStorageTopic;
    }
  }

  // config_storage_topic - computed: false, optional: true, required: false
  private _configStorageTopic?: string; 
  public get configStorageTopic() {
    return this.getStringAttribute('config_storage_topic');
  }
  public set configStorageTopic(value: string) {
    this._configStorageTopic = value;
  }
  public resetConfigStorageTopic() {
    this._configStorageTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configStorageTopicInput() {
    return this._configStorageTopic;
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // offset_storage_topic - computed: false, optional: true, required: false
  private _offsetStorageTopic?: string; 
  public get offsetStorageTopic() {
    return this.getStringAttribute('offset_storage_topic');
  }
  public set offsetStorageTopic(value: string) {
    this._offsetStorageTopic = value;
  }
  public resetOffsetStorageTopic() {
    this._offsetStorageTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetStorageTopicInput() {
    return this._offsetStorageTopic;
  }

  // status_storage_topic - computed: false, optional: true, required: false
  private _statusStorageTopic?: string; 
  public get statusStorageTopic() {
    return this.getStringAttribute('status_storage_topic');
  }
  public set statusStorageTopic(value: string) {
    this._statusStorageTopic = value;
  }
  public resetStatusStorageTopic() {
    this._statusStorageTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusStorageTopicInput() {
    return this._statusStorageTopic;
  }
}
export interface ServiceIntegrationKafkaConnectUserConfig {
  /**
  * kafka_connect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#kafka_connect ServiceIntegration#kafka_connect}
  */
  readonly kafkaConnect?: ServiceIntegrationKafkaConnectUserConfigKafkaConnect;
}

export function serviceIntegrationKafkaConnectUserConfigToTerraform(struct?: ServiceIntegrationKafkaConnectUserConfigOutputReference | ServiceIntegrationKafkaConnectUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kafka_connect: serviceIntegrationKafkaConnectUserConfigKafkaConnectToTerraform(struct!.kafkaConnect),
  }
}


export function serviceIntegrationKafkaConnectUserConfigToHclTerraform(struct?: ServiceIntegrationKafkaConnectUserConfigOutputReference | ServiceIntegrationKafkaConnectUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kafka_connect: {
      value: serviceIntegrationKafkaConnectUserConfigKafkaConnectToHclTerraform(struct!.kafkaConnect),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceIntegrationKafkaConnectUserConfigKafkaConnectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationKafkaConnectUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationKafkaConnectUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kafkaConnect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaConnect = this._kafkaConnect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationKafkaConnectUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kafkaConnect.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kafkaConnect.internalValue = value.kafkaConnect;
    }
  }

  // kafka_connect - computed: false, optional: true, required: false
  private _kafkaConnect = new ServiceIntegrationKafkaConnectUserConfigKafkaConnectOutputReference(this, "kafka_connect");
  public get kafkaConnect() {
    return this._kafkaConnect;
  }
  public putKafkaConnect(value: ServiceIntegrationKafkaConnectUserConfigKafkaConnect) {
    this._kafkaConnect.internalValue = value;
  }
  public resetKafkaConnect() {
    this._kafkaConnect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConnectInput() {
    return this._kafkaConnect.internalValue;
  }
}
export interface ServiceIntegrationKafkaLogsUserConfig {
  /**
  * Topic name. Example: `mytopic`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#kafka_topic ServiceIntegration#kafka_topic}
  */
  readonly kafkaTopic: string;
  /**
  * The list of logging fields that will be sent to the integration logging service. The MESSAGE and timestamp fields are always sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#selected_log_fields ServiceIntegration#selected_log_fields}
  */
  readonly selectedLogFields?: string[];
}

export function serviceIntegrationKafkaLogsUserConfigToTerraform(struct?: ServiceIntegrationKafkaLogsUserConfigOutputReference | ServiceIntegrationKafkaLogsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kafka_topic: cdktf.stringToTerraform(struct!.kafkaTopic),
    selected_log_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.selectedLogFields),
  }
}


export function serviceIntegrationKafkaLogsUserConfigToHclTerraform(struct?: ServiceIntegrationKafkaLogsUserConfigOutputReference | ServiceIntegrationKafkaLogsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kafka_topic: {
      value: cdktf.stringToHclTerraform(struct!.kafkaTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selected_log_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.selectedLogFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationKafkaLogsUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationKafkaLogsUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kafkaTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaTopic = this._kafkaTopic;
    }
    if (this._selectedLogFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedLogFields = this._selectedLogFields;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationKafkaLogsUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kafkaTopic = undefined;
      this._selectedLogFields = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kafkaTopic = value.kafkaTopic;
      this._selectedLogFields = value.selectedLogFields;
    }
  }

  // kafka_topic - computed: false, optional: false, required: true
  private _kafkaTopic?: string; 
  public get kafkaTopic() {
    return this.getStringAttribute('kafka_topic');
  }
  public set kafkaTopic(value: string) {
    this._kafkaTopic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaTopicInput() {
    return this._kafkaTopic;
  }

  // selected_log_fields - computed: false, optional: true, required: false
  private _selectedLogFields?: string[]; 
  public get selectedLogFields() {
    return this.getListAttribute('selected_log_fields');
  }
  public set selectedLogFields(value: string[]) {
    this._selectedLogFields = value;
  }
  public resetSelectedLogFields() {
    this._selectedLogFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedLogFieldsInput() {
    return this._selectedLogFields;
  }
}
export interface ServiceIntegrationKafkaMirrormakerUserConfigKafkaMirrormaker {
  /**
  * Enum: `earliest`, `latest`. Set where consumer starts to consume data. Value `earliest`: Start replication from the earliest offset. Value `latest`: Start replication from the latest offset. Default is `earliest`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#consumer_auto_offset_reset ServiceIntegration#consumer_auto_offset_reset}
  */
  readonly consumerAutoOffsetReset?: string;
  /**
  * The minimum amount of data the server should return for a fetch request. Example: `1024`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#consumer_fetch_min_bytes ServiceIntegration#consumer_fetch_min_bytes}
  */
  readonly consumerFetchMinBytes?: number;
  /**
  * Set consumer max.poll.records. The default is 500. Example: `500`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#consumer_max_poll_records ServiceIntegration#consumer_max_poll_records}
  */
  readonly consumerMaxPollRecords?: number;
  /**
  * The batch size in bytes producer will attempt to collect before publishing to broker. Example: `1024`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#producer_batch_size ServiceIntegration#producer_batch_size}
  */
  readonly producerBatchSize?: number;
  /**
  * The amount of bytes producer can use for buffering data before publishing to broker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#producer_buffer_memory ServiceIntegration#producer_buffer_memory}
  */
  readonly producerBufferMemory?: number;
  /**
  * Enum: `gzip`, `lz4`, `none`, `snappy`, `zstd`. Specify the default compression type for producers. This configuration accepts the standard compression codecs (`gzip`, `snappy`, `lz4`, `zstd`). It additionally accepts `none` which is the default and equivalent to no compression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#producer_compression_type ServiceIntegration#producer_compression_type}
  */
  readonly producerCompressionType?: string;
  /**
  * The linger time (ms) for waiting new data to arrive for publishing. Example: `100`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#producer_linger_ms ServiceIntegration#producer_linger_ms}
  */
  readonly producerLingerMs?: number;
  /**
  * The maximum request size in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#producer_max_request_size ServiceIntegration#producer_max_request_size}
  */
  readonly producerMaxRequestSize?: number;
}

export function serviceIntegrationKafkaMirrormakerUserConfigKafkaMirrormakerToTerraform(struct?: ServiceIntegrationKafkaMirrormakerUserConfigKafkaMirrormakerOutputReference | ServiceIntegrationKafkaMirrormakerUserConfigKafkaMirrormaker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consumer_auto_offset_reset: cdktf.stringToTerraform(struct!.consumerAutoOffsetReset),
    consumer_fetch_min_bytes: cdktf.numberToTerraform(struct!.consumerFetchMinBytes),
    consumer_max_poll_records: cdktf.numberToTerraform(struct!.consumerMaxPollRecords),
    producer_batch_size: cdktf.numberToTerraform(struct!.producerBatchSize),
    producer_buffer_memory: cdktf.numberToTerraform(struct!.producerBufferMemory),
    producer_compression_type: cdktf.stringToTerraform(struct!.producerCompressionType),
    producer_linger_ms: cdktf.numberToTerraform(struct!.producerLingerMs),
    producer_max_request_size: cdktf.numberToTerraform(struct!.producerMaxRequestSize),
  }
}


export function serviceIntegrationKafkaMirrormakerUserConfigKafkaMirrormakerToHclTerraform(struct?: ServiceIntegrationKafkaMirrormakerUserConfigKafkaMirrormakerOutputReference | ServiceIntegrationKafkaMirrormakerUserConfigKafkaMirrormaker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consumer_auto_offset_reset: {
      value: cdktf.stringToHclTerraform(struct!.consumerAutoOffsetReset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consumer_fetch_min_bytes: {
      value: cdktf.numberToHclTerraform(struct!.consumerFetchMinBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consumer_max_poll_records: {
      value: cdktf.numberToHclTerraform(struct!.consumerMaxPollRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    producer_batch_size: {
      value: cdktf.numberToHclTerraform(struct!.producerBatchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    producer_buffer_memory: {
      value: cdktf.numberToHclTerraform(struct!.producerBufferMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    producer_compression_type: {
      value: cdktf.stringToHclTerraform(struct!.producerCompressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    producer_linger_ms: {
      value: cdktf.numberToHclTerraform(struct!.producerLingerMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    producer_max_request_size: {
      value: cdktf.numberToHclTerraform(struct!.producerMaxRequestSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationKafkaMirrormakerUserConfigKafkaMirrormakerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationKafkaMirrormakerUserConfigKafkaMirrormaker | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumerAutoOffsetReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerAutoOffsetReset = this._consumerAutoOffsetReset;
    }
    if (this._consumerFetchMinBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerFetchMinBytes = this._consumerFetchMinBytes;
    }
    if (this._consumerMaxPollRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerMaxPollRecords = this._consumerMaxPollRecords;
    }
    if (this._producerBatchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.producerBatchSize = this._producerBatchSize;
    }
    if (this._producerBufferMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.producerBufferMemory = this._producerBufferMemory;
    }
    if (this._producerCompressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.producerCompressionType = this._producerCompressionType;
    }
    if (this._producerLingerMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.producerLingerMs = this._producerLingerMs;
    }
    if (this._producerMaxRequestSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.producerMaxRequestSize = this._producerMaxRequestSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationKafkaMirrormakerUserConfigKafkaMirrormaker | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consumerAutoOffsetReset = undefined;
      this._consumerFetchMinBytes = undefined;
      this._consumerMaxPollRecords = undefined;
      this._producerBatchSize = undefined;
      this._producerBufferMemory = undefined;
      this._producerCompressionType = undefined;
      this._producerLingerMs = undefined;
      this._producerMaxRequestSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consumerAutoOffsetReset = value.consumerAutoOffsetReset;
      this._consumerFetchMinBytes = value.consumerFetchMinBytes;
      this._consumerMaxPollRecords = value.consumerMaxPollRecords;
      this._producerBatchSize = value.producerBatchSize;
      this._producerBufferMemory = value.producerBufferMemory;
      this._producerCompressionType = value.producerCompressionType;
      this._producerLingerMs = value.producerLingerMs;
      this._producerMaxRequestSize = value.producerMaxRequestSize;
    }
  }

  // consumer_auto_offset_reset - computed: false, optional: true, required: false
  private _consumerAutoOffsetReset?: string; 
  public get consumerAutoOffsetReset() {
    return this.getStringAttribute('consumer_auto_offset_reset');
  }
  public set consumerAutoOffsetReset(value: string) {
    this._consumerAutoOffsetReset = value;
  }
  public resetConsumerAutoOffsetReset() {
    this._consumerAutoOffsetReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerAutoOffsetResetInput() {
    return this._consumerAutoOffsetReset;
  }

  // consumer_fetch_min_bytes - computed: false, optional: true, required: false
  private _consumerFetchMinBytes?: number; 
  public get consumerFetchMinBytes() {
    return this.getNumberAttribute('consumer_fetch_min_bytes');
  }
  public set consumerFetchMinBytes(value: number) {
    this._consumerFetchMinBytes = value;
  }
  public resetConsumerFetchMinBytes() {
    this._consumerFetchMinBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerFetchMinBytesInput() {
    return this._consumerFetchMinBytes;
  }

  // consumer_max_poll_records - computed: false, optional: true, required: false
  private _consumerMaxPollRecords?: number; 
  public get consumerMaxPollRecords() {
    return this.getNumberAttribute('consumer_max_poll_records');
  }
  public set consumerMaxPollRecords(value: number) {
    this._consumerMaxPollRecords = value;
  }
  public resetConsumerMaxPollRecords() {
    this._consumerMaxPollRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerMaxPollRecordsInput() {
    return this._consumerMaxPollRecords;
  }

  // producer_batch_size - computed: false, optional: true, required: false
  private _producerBatchSize?: number; 
  public get producerBatchSize() {
    return this.getNumberAttribute('producer_batch_size');
  }
  public set producerBatchSize(value: number) {
    this._producerBatchSize = value;
  }
  public resetProducerBatchSize() {
    this._producerBatchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerBatchSizeInput() {
    return this._producerBatchSize;
  }

  // producer_buffer_memory - computed: false, optional: true, required: false
  private _producerBufferMemory?: number; 
  public get producerBufferMemory() {
    return this.getNumberAttribute('producer_buffer_memory');
  }
  public set producerBufferMemory(value: number) {
    this._producerBufferMemory = value;
  }
  public resetProducerBufferMemory() {
    this._producerBufferMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerBufferMemoryInput() {
    return this._producerBufferMemory;
  }

  // producer_compression_type - computed: false, optional: true, required: false
  private _producerCompressionType?: string; 
  public get producerCompressionType() {
    return this.getStringAttribute('producer_compression_type');
  }
  public set producerCompressionType(value: string) {
    this._producerCompressionType = value;
  }
  public resetProducerCompressionType() {
    this._producerCompressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerCompressionTypeInput() {
    return this._producerCompressionType;
  }

  // producer_linger_ms - computed: false, optional: true, required: false
  private _producerLingerMs?: number; 
  public get producerLingerMs() {
    return this.getNumberAttribute('producer_linger_ms');
  }
  public set producerLingerMs(value: number) {
    this._producerLingerMs = value;
  }
  public resetProducerLingerMs() {
    this._producerLingerMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerLingerMsInput() {
    return this._producerLingerMs;
  }

  // producer_max_request_size - computed: false, optional: true, required: false
  private _producerMaxRequestSize?: number; 
  public get producerMaxRequestSize() {
    return this.getNumberAttribute('producer_max_request_size');
  }
  public set producerMaxRequestSize(value: number) {
    this._producerMaxRequestSize = value;
  }
  public resetProducerMaxRequestSize() {
    this._producerMaxRequestSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerMaxRequestSizeInput() {
    return this._producerMaxRequestSize;
  }
}
export interface ServiceIntegrationKafkaMirrormakerUserConfig {
  /**
  * The alias under which the Kafka cluster is known to MirrorMaker. Can contain the following symbols: ASCII alphanumerics, `.`, `_`, and `-`. Example: `kafka-abc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#cluster_alias ServiceIntegration#cluster_alias}
  */
  readonly clusterAlias?: string;
  /**
  * kafka_mirrormaker block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#kafka_mirrormaker ServiceIntegration#kafka_mirrormaker}
  */
  readonly kafkaMirrormaker?: ServiceIntegrationKafkaMirrormakerUserConfigKafkaMirrormaker;
}

export function serviceIntegrationKafkaMirrormakerUserConfigToTerraform(struct?: ServiceIntegrationKafkaMirrormakerUserConfigOutputReference | ServiceIntegrationKafkaMirrormakerUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_alias: cdktf.stringToTerraform(struct!.clusterAlias),
    kafka_mirrormaker: serviceIntegrationKafkaMirrormakerUserConfigKafkaMirrormakerToTerraform(struct!.kafkaMirrormaker),
  }
}


export function serviceIntegrationKafkaMirrormakerUserConfigToHclTerraform(struct?: ServiceIntegrationKafkaMirrormakerUserConfigOutputReference | ServiceIntegrationKafkaMirrormakerUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_alias: {
      value: cdktf.stringToHclTerraform(struct!.clusterAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kafka_mirrormaker: {
      value: serviceIntegrationKafkaMirrormakerUserConfigKafkaMirrormakerToHclTerraform(struct!.kafkaMirrormaker),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceIntegrationKafkaMirrormakerUserConfigKafkaMirrormakerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationKafkaMirrormakerUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationKafkaMirrormakerUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterAlias = this._clusterAlias;
    }
    if (this._kafkaMirrormaker?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaMirrormaker = this._kafkaMirrormaker?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationKafkaMirrormakerUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterAlias = undefined;
      this._kafkaMirrormaker.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterAlias = value.clusterAlias;
      this._kafkaMirrormaker.internalValue = value.kafkaMirrormaker;
    }
  }

  // cluster_alias - computed: false, optional: true, required: false
  private _clusterAlias?: string; 
  public get clusterAlias() {
    return this.getStringAttribute('cluster_alias');
  }
  public set clusterAlias(value: string) {
    this._clusterAlias = value;
  }
  public resetClusterAlias() {
    this._clusterAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAliasInput() {
    return this._clusterAlias;
  }

  // kafka_mirrormaker - computed: false, optional: true, required: false
  private _kafkaMirrormaker = new ServiceIntegrationKafkaMirrormakerUserConfigKafkaMirrormakerOutputReference(this, "kafka_mirrormaker");
  public get kafkaMirrormaker() {
    return this._kafkaMirrormaker;
  }
  public putKafkaMirrormaker(value: ServiceIntegrationKafkaMirrormakerUserConfigKafkaMirrormaker) {
    this._kafkaMirrormaker.internalValue = value;
  }
  public resetKafkaMirrormaker() {
    this._kafkaMirrormaker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaMirrormakerInput() {
    return this._kafkaMirrormaker.internalValue;
  }
}
export interface ServiceIntegrationLogsUserConfig {
  /**
  * Elasticsearch index retention limit. Default: `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#elasticsearch_index_days_max ServiceIntegration#elasticsearch_index_days_max}
  */
  readonly elasticsearchIndexDaysMax?: number;
  /**
  * Elasticsearch index prefix. Default: `logs`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#elasticsearch_index_prefix ServiceIntegration#elasticsearch_index_prefix}
  */
  readonly elasticsearchIndexPrefix?: string;
  /**
  * The list of logging fields that will be sent to the integration logging service. The MESSAGE and timestamp fields are always sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#selected_log_fields ServiceIntegration#selected_log_fields}
  */
  readonly selectedLogFields?: string[];
}

export function serviceIntegrationLogsUserConfigToTerraform(struct?: ServiceIntegrationLogsUserConfigOutputReference | ServiceIntegrationLogsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    elasticsearch_index_days_max: cdktf.numberToTerraform(struct!.elasticsearchIndexDaysMax),
    elasticsearch_index_prefix: cdktf.stringToTerraform(struct!.elasticsearchIndexPrefix),
    selected_log_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.selectedLogFields),
  }
}


export function serviceIntegrationLogsUserConfigToHclTerraform(struct?: ServiceIntegrationLogsUserConfigOutputReference | ServiceIntegrationLogsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    elasticsearch_index_days_max: {
      value: cdktf.numberToHclTerraform(struct!.elasticsearchIndexDaysMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elasticsearch_index_prefix: {
      value: cdktf.stringToHclTerraform(struct!.elasticsearchIndexPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selected_log_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.selectedLogFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationLogsUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationLogsUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elasticsearchIndexDaysMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticsearchIndexDaysMax = this._elasticsearchIndexDaysMax;
    }
    if (this._elasticsearchIndexPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticsearchIndexPrefix = this._elasticsearchIndexPrefix;
    }
    if (this._selectedLogFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedLogFields = this._selectedLogFields;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationLogsUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._elasticsearchIndexDaysMax = undefined;
      this._elasticsearchIndexPrefix = undefined;
      this._selectedLogFields = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._elasticsearchIndexDaysMax = value.elasticsearchIndexDaysMax;
      this._elasticsearchIndexPrefix = value.elasticsearchIndexPrefix;
      this._selectedLogFields = value.selectedLogFields;
    }
  }

  // elasticsearch_index_days_max - computed: false, optional: true, required: false
  private _elasticsearchIndexDaysMax?: number; 
  public get elasticsearchIndexDaysMax() {
    return this.getNumberAttribute('elasticsearch_index_days_max');
  }
  public set elasticsearchIndexDaysMax(value: number) {
    this._elasticsearchIndexDaysMax = value;
  }
  public resetElasticsearchIndexDaysMax() {
    this._elasticsearchIndexDaysMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchIndexDaysMaxInput() {
    return this._elasticsearchIndexDaysMax;
  }

  // elasticsearch_index_prefix - computed: false, optional: true, required: false
  private _elasticsearchIndexPrefix?: string; 
  public get elasticsearchIndexPrefix() {
    return this.getStringAttribute('elasticsearch_index_prefix');
  }
  public set elasticsearchIndexPrefix(value: string) {
    this._elasticsearchIndexPrefix = value;
  }
  public resetElasticsearchIndexPrefix() {
    this._elasticsearchIndexPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchIndexPrefixInput() {
    return this._elasticsearchIndexPrefix;
  }

  // selected_log_fields - computed: false, optional: true, required: false
  private _selectedLogFields?: string[]; 
  public get selectedLogFields() {
    return this.getListAttribute('selected_log_fields');
  }
  public set selectedLogFields(value: string[]) {
    this._selectedLogFields = value;
  }
  public resetSelectedLogFields() {
    this._selectedLogFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedLogFieldsInput() {
    return this._selectedLogFields;
  }
}
export interface ServiceIntegrationMetricsUserConfigSourceMysqlTelegraf {
  /**
  * Gather metrics from PERFORMANCE_SCHEMA.EVENT_WAITS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#gather_event_waits ServiceIntegration#gather_event_waits}
  */
  readonly gatherEventWaits?: boolean | cdktf.IResolvable;
  /**
  * Gather metrics from PERFORMANCE_SCHEMA.FILE_SUMMARY_BY_EVENT_NAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#gather_file_events_stats ServiceIntegration#gather_file_events_stats}
  */
  readonly gatherFileEventsStats?: boolean | cdktf.IResolvable;
  /**
  * Gather metrics from PERFORMANCE_SCHEMA.TABLE_IO_WAITS_SUMMARY_BY_INDEX_USAGE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#gather_index_io_waits ServiceIntegration#gather_index_io_waits}
  */
  readonly gatherIndexIoWaits?: boolean | cdktf.IResolvable;
  /**
  * Gather auto_increment columns and max values from information schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#gather_info_schema_auto_inc ServiceIntegration#gather_info_schema_auto_inc}
  */
  readonly gatherInfoSchemaAutoInc?: boolean | cdktf.IResolvable;
  /**
  * Gather metrics from INFORMATION_SCHEMA.INNODB_METRICS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#gather_innodb_metrics ServiceIntegration#gather_innodb_metrics}
  */
  readonly gatherInnodbMetrics?: boolean | cdktf.IResolvable;
  /**
  * Gather metrics from PERFORMANCE_SCHEMA.EVENTS_STATEMENTS_SUMMARY_BY_DIGEST.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#gather_perf_events_statements ServiceIntegration#gather_perf_events_statements}
  */
  readonly gatherPerfEventsStatements?: boolean | cdktf.IResolvable;
  /**
  * Gather thread state counts from INFORMATION_SCHEMA.PROCESSLIST.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#gather_process_list ServiceIntegration#gather_process_list}
  */
  readonly gatherProcessList?: boolean | cdktf.IResolvable;
  /**
  * Gather metrics from SHOW SLAVE STATUS command output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#gather_slave_status ServiceIntegration#gather_slave_status}
  */
  readonly gatherSlaveStatus?: boolean | cdktf.IResolvable;
  /**
  * Gather metrics from PERFORMANCE_SCHEMA.TABLE_IO_WAITS_SUMMARY_BY_TABLE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#gather_table_io_waits ServiceIntegration#gather_table_io_waits}
  */
  readonly gatherTableIoWaits?: boolean | cdktf.IResolvable;
  /**
  * Gather metrics from PERFORMANCE_SCHEMA.TABLE_LOCK_WAITS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#gather_table_lock_waits ServiceIntegration#gather_table_lock_waits}
  */
  readonly gatherTableLockWaits?: boolean | cdktf.IResolvable;
  /**
  * Gather metrics from INFORMATION_SCHEMA.TABLES.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#gather_table_schema ServiceIntegration#gather_table_schema}
  */
  readonly gatherTableSchema?: boolean | cdktf.IResolvable;
  /**
  * Truncates digest text from perf_events_statements into this many characters. Example: `120`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#perf_events_statements_digest_text_limit ServiceIntegration#perf_events_statements_digest_text_limit}
  */
  readonly perfEventsStatementsDigestTextLimit?: number;
  /**
  * Limits metrics from perf_events_statements. Example: `250`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#perf_events_statements_limit ServiceIntegration#perf_events_statements_limit}
  */
  readonly perfEventsStatementsLimit?: number;
  /**
  * Only include perf_events_statements whose last seen is less than this many seconds. Example: `86400`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#perf_events_statements_time_limit ServiceIntegration#perf_events_statements_time_limit}
  */
  readonly perfEventsStatementsTimeLimit?: number;
}

export function serviceIntegrationMetricsUserConfigSourceMysqlTelegrafToTerraform(struct?: ServiceIntegrationMetricsUserConfigSourceMysqlTelegrafOutputReference | ServiceIntegrationMetricsUserConfigSourceMysqlTelegraf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gather_event_waits: cdktf.booleanToTerraform(struct!.gatherEventWaits),
    gather_file_events_stats: cdktf.booleanToTerraform(struct!.gatherFileEventsStats),
    gather_index_io_waits: cdktf.booleanToTerraform(struct!.gatherIndexIoWaits),
    gather_info_schema_auto_inc: cdktf.booleanToTerraform(struct!.gatherInfoSchemaAutoInc),
    gather_innodb_metrics: cdktf.booleanToTerraform(struct!.gatherInnodbMetrics),
    gather_perf_events_statements: cdktf.booleanToTerraform(struct!.gatherPerfEventsStatements),
    gather_process_list: cdktf.booleanToTerraform(struct!.gatherProcessList),
    gather_slave_status: cdktf.booleanToTerraform(struct!.gatherSlaveStatus),
    gather_table_io_waits: cdktf.booleanToTerraform(struct!.gatherTableIoWaits),
    gather_table_lock_waits: cdktf.booleanToTerraform(struct!.gatherTableLockWaits),
    gather_table_schema: cdktf.booleanToTerraform(struct!.gatherTableSchema),
    perf_events_statements_digest_text_limit: cdktf.numberToTerraform(struct!.perfEventsStatementsDigestTextLimit),
    perf_events_statements_limit: cdktf.numberToTerraform(struct!.perfEventsStatementsLimit),
    perf_events_statements_time_limit: cdktf.numberToTerraform(struct!.perfEventsStatementsTimeLimit),
  }
}


export function serviceIntegrationMetricsUserConfigSourceMysqlTelegrafToHclTerraform(struct?: ServiceIntegrationMetricsUserConfigSourceMysqlTelegrafOutputReference | ServiceIntegrationMetricsUserConfigSourceMysqlTelegraf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gather_event_waits: {
      value: cdktf.booleanToHclTerraform(struct!.gatherEventWaits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gather_file_events_stats: {
      value: cdktf.booleanToHclTerraform(struct!.gatherFileEventsStats),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gather_index_io_waits: {
      value: cdktf.booleanToHclTerraform(struct!.gatherIndexIoWaits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gather_info_schema_auto_inc: {
      value: cdktf.booleanToHclTerraform(struct!.gatherInfoSchemaAutoInc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gather_innodb_metrics: {
      value: cdktf.booleanToHclTerraform(struct!.gatherInnodbMetrics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gather_perf_events_statements: {
      value: cdktf.booleanToHclTerraform(struct!.gatherPerfEventsStatements),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gather_process_list: {
      value: cdktf.booleanToHclTerraform(struct!.gatherProcessList),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gather_slave_status: {
      value: cdktf.booleanToHclTerraform(struct!.gatherSlaveStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gather_table_io_waits: {
      value: cdktf.booleanToHclTerraform(struct!.gatherTableIoWaits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gather_table_lock_waits: {
      value: cdktf.booleanToHclTerraform(struct!.gatherTableLockWaits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gather_table_schema: {
      value: cdktf.booleanToHclTerraform(struct!.gatherTableSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    perf_events_statements_digest_text_limit: {
      value: cdktf.numberToHclTerraform(struct!.perfEventsStatementsDigestTextLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    perf_events_statements_limit: {
      value: cdktf.numberToHclTerraform(struct!.perfEventsStatementsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    perf_events_statements_time_limit: {
      value: cdktf.numberToHclTerraform(struct!.perfEventsStatementsTimeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationMetricsUserConfigSourceMysqlTelegrafOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationMetricsUserConfigSourceMysqlTelegraf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gatherEventWaits !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatherEventWaits = this._gatherEventWaits;
    }
    if (this._gatherFileEventsStats !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatherFileEventsStats = this._gatherFileEventsStats;
    }
    if (this._gatherIndexIoWaits !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatherIndexIoWaits = this._gatherIndexIoWaits;
    }
    if (this._gatherInfoSchemaAutoInc !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatherInfoSchemaAutoInc = this._gatherInfoSchemaAutoInc;
    }
    if (this._gatherInnodbMetrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatherInnodbMetrics = this._gatherInnodbMetrics;
    }
    if (this._gatherPerfEventsStatements !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatherPerfEventsStatements = this._gatherPerfEventsStatements;
    }
    if (this._gatherProcessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatherProcessList = this._gatherProcessList;
    }
    if (this._gatherSlaveStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatherSlaveStatus = this._gatherSlaveStatus;
    }
    if (this._gatherTableIoWaits !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatherTableIoWaits = this._gatherTableIoWaits;
    }
    if (this._gatherTableLockWaits !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatherTableLockWaits = this._gatherTableLockWaits;
    }
    if (this._gatherTableSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatherTableSchema = this._gatherTableSchema;
    }
    if (this._perfEventsStatementsDigestTextLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.perfEventsStatementsDigestTextLimit = this._perfEventsStatementsDigestTextLimit;
    }
    if (this._perfEventsStatementsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.perfEventsStatementsLimit = this._perfEventsStatementsLimit;
    }
    if (this._perfEventsStatementsTimeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.perfEventsStatementsTimeLimit = this._perfEventsStatementsTimeLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationMetricsUserConfigSourceMysqlTelegraf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gatherEventWaits = undefined;
      this._gatherFileEventsStats = undefined;
      this._gatherIndexIoWaits = undefined;
      this._gatherInfoSchemaAutoInc = undefined;
      this._gatherInnodbMetrics = undefined;
      this._gatherPerfEventsStatements = undefined;
      this._gatherProcessList = undefined;
      this._gatherSlaveStatus = undefined;
      this._gatherTableIoWaits = undefined;
      this._gatherTableLockWaits = undefined;
      this._gatherTableSchema = undefined;
      this._perfEventsStatementsDigestTextLimit = undefined;
      this._perfEventsStatementsLimit = undefined;
      this._perfEventsStatementsTimeLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gatherEventWaits = value.gatherEventWaits;
      this._gatherFileEventsStats = value.gatherFileEventsStats;
      this._gatherIndexIoWaits = value.gatherIndexIoWaits;
      this._gatherInfoSchemaAutoInc = value.gatherInfoSchemaAutoInc;
      this._gatherInnodbMetrics = value.gatherInnodbMetrics;
      this._gatherPerfEventsStatements = value.gatherPerfEventsStatements;
      this._gatherProcessList = value.gatherProcessList;
      this._gatherSlaveStatus = value.gatherSlaveStatus;
      this._gatherTableIoWaits = value.gatherTableIoWaits;
      this._gatherTableLockWaits = value.gatherTableLockWaits;
      this._gatherTableSchema = value.gatherTableSchema;
      this._perfEventsStatementsDigestTextLimit = value.perfEventsStatementsDigestTextLimit;
      this._perfEventsStatementsLimit = value.perfEventsStatementsLimit;
      this._perfEventsStatementsTimeLimit = value.perfEventsStatementsTimeLimit;
    }
  }

  // gather_event_waits - computed: false, optional: true, required: false
  private _gatherEventWaits?: boolean | cdktf.IResolvable; 
  public get gatherEventWaits() {
    return this.getBooleanAttribute('gather_event_waits');
  }
  public set gatherEventWaits(value: boolean | cdktf.IResolvable) {
    this._gatherEventWaits = value;
  }
  public resetGatherEventWaits() {
    this._gatherEventWaits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatherEventWaitsInput() {
    return this._gatherEventWaits;
  }

  // gather_file_events_stats - computed: false, optional: true, required: false
  private _gatherFileEventsStats?: boolean | cdktf.IResolvable; 
  public get gatherFileEventsStats() {
    return this.getBooleanAttribute('gather_file_events_stats');
  }
  public set gatherFileEventsStats(value: boolean | cdktf.IResolvable) {
    this._gatherFileEventsStats = value;
  }
  public resetGatherFileEventsStats() {
    this._gatherFileEventsStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatherFileEventsStatsInput() {
    return this._gatherFileEventsStats;
  }

  // gather_index_io_waits - computed: false, optional: true, required: false
  private _gatherIndexIoWaits?: boolean | cdktf.IResolvable; 
  public get gatherIndexIoWaits() {
    return this.getBooleanAttribute('gather_index_io_waits');
  }
  public set gatherIndexIoWaits(value: boolean | cdktf.IResolvable) {
    this._gatherIndexIoWaits = value;
  }
  public resetGatherIndexIoWaits() {
    this._gatherIndexIoWaits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatherIndexIoWaitsInput() {
    return this._gatherIndexIoWaits;
  }

  // gather_info_schema_auto_inc - computed: false, optional: true, required: false
  private _gatherInfoSchemaAutoInc?: boolean | cdktf.IResolvable; 
  public get gatherInfoSchemaAutoInc() {
    return this.getBooleanAttribute('gather_info_schema_auto_inc');
  }
  public set gatherInfoSchemaAutoInc(value: boolean | cdktf.IResolvable) {
    this._gatherInfoSchemaAutoInc = value;
  }
  public resetGatherInfoSchemaAutoInc() {
    this._gatherInfoSchemaAutoInc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatherInfoSchemaAutoIncInput() {
    return this._gatherInfoSchemaAutoInc;
  }

  // gather_innodb_metrics - computed: false, optional: true, required: false
  private _gatherInnodbMetrics?: boolean | cdktf.IResolvable; 
  public get gatherInnodbMetrics() {
    return this.getBooleanAttribute('gather_innodb_metrics');
  }
  public set gatherInnodbMetrics(value: boolean | cdktf.IResolvable) {
    this._gatherInnodbMetrics = value;
  }
  public resetGatherInnodbMetrics() {
    this._gatherInnodbMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatherInnodbMetricsInput() {
    return this._gatherInnodbMetrics;
  }

  // gather_perf_events_statements - computed: false, optional: true, required: false
  private _gatherPerfEventsStatements?: boolean | cdktf.IResolvable; 
  public get gatherPerfEventsStatements() {
    return this.getBooleanAttribute('gather_perf_events_statements');
  }
  public set gatherPerfEventsStatements(value: boolean | cdktf.IResolvable) {
    this._gatherPerfEventsStatements = value;
  }
  public resetGatherPerfEventsStatements() {
    this._gatherPerfEventsStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatherPerfEventsStatementsInput() {
    return this._gatherPerfEventsStatements;
  }

  // gather_process_list - computed: false, optional: true, required: false
  private _gatherProcessList?: boolean | cdktf.IResolvable; 
  public get gatherProcessList() {
    return this.getBooleanAttribute('gather_process_list');
  }
  public set gatherProcessList(value: boolean | cdktf.IResolvable) {
    this._gatherProcessList = value;
  }
  public resetGatherProcessList() {
    this._gatherProcessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatherProcessListInput() {
    return this._gatherProcessList;
  }

  // gather_slave_status - computed: false, optional: true, required: false
  private _gatherSlaveStatus?: boolean | cdktf.IResolvable; 
  public get gatherSlaveStatus() {
    return this.getBooleanAttribute('gather_slave_status');
  }
  public set gatherSlaveStatus(value: boolean | cdktf.IResolvable) {
    this._gatherSlaveStatus = value;
  }
  public resetGatherSlaveStatus() {
    this._gatherSlaveStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatherSlaveStatusInput() {
    return this._gatherSlaveStatus;
  }

  // gather_table_io_waits - computed: false, optional: true, required: false
  private _gatherTableIoWaits?: boolean | cdktf.IResolvable; 
  public get gatherTableIoWaits() {
    return this.getBooleanAttribute('gather_table_io_waits');
  }
  public set gatherTableIoWaits(value: boolean | cdktf.IResolvable) {
    this._gatherTableIoWaits = value;
  }
  public resetGatherTableIoWaits() {
    this._gatherTableIoWaits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatherTableIoWaitsInput() {
    return this._gatherTableIoWaits;
  }

  // gather_table_lock_waits - computed: false, optional: true, required: false
  private _gatherTableLockWaits?: boolean | cdktf.IResolvable; 
  public get gatherTableLockWaits() {
    return this.getBooleanAttribute('gather_table_lock_waits');
  }
  public set gatherTableLockWaits(value: boolean | cdktf.IResolvable) {
    this._gatherTableLockWaits = value;
  }
  public resetGatherTableLockWaits() {
    this._gatherTableLockWaits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatherTableLockWaitsInput() {
    return this._gatherTableLockWaits;
  }

  // gather_table_schema - computed: false, optional: true, required: false
  private _gatherTableSchema?: boolean | cdktf.IResolvable; 
  public get gatherTableSchema() {
    return this.getBooleanAttribute('gather_table_schema');
  }
  public set gatherTableSchema(value: boolean | cdktf.IResolvable) {
    this._gatherTableSchema = value;
  }
  public resetGatherTableSchema() {
    this._gatherTableSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatherTableSchemaInput() {
    return this._gatherTableSchema;
  }

  // perf_events_statements_digest_text_limit - computed: false, optional: true, required: false
  private _perfEventsStatementsDigestTextLimit?: number; 
  public get perfEventsStatementsDigestTextLimit() {
    return this.getNumberAttribute('perf_events_statements_digest_text_limit');
  }
  public set perfEventsStatementsDigestTextLimit(value: number) {
    this._perfEventsStatementsDigestTextLimit = value;
  }
  public resetPerfEventsStatementsDigestTextLimit() {
    this._perfEventsStatementsDigestTextLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfEventsStatementsDigestTextLimitInput() {
    return this._perfEventsStatementsDigestTextLimit;
  }

  // perf_events_statements_limit - computed: false, optional: true, required: false
  private _perfEventsStatementsLimit?: number; 
  public get perfEventsStatementsLimit() {
    return this.getNumberAttribute('perf_events_statements_limit');
  }
  public set perfEventsStatementsLimit(value: number) {
    this._perfEventsStatementsLimit = value;
  }
  public resetPerfEventsStatementsLimit() {
    this._perfEventsStatementsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfEventsStatementsLimitInput() {
    return this._perfEventsStatementsLimit;
  }

  // perf_events_statements_time_limit - computed: false, optional: true, required: false
  private _perfEventsStatementsTimeLimit?: number; 
  public get perfEventsStatementsTimeLimit() {
    return this.getNumberAttribute('perf_events_statements_time_limit');
  }
  public set perfEventsStatementsTimeLimit(value: number) {
    this._perfEventsStatementsTimeLimit = value;
  }
  public resetPerfEventsStatementsTimeLimit() {
    this._perfEventsStatementsTimeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfEventsStatementsTimeLimitInput() {
    return this._perfEventsStatementsTimeLimit;
  }
}
export interface ServiceIntegrationMetricsUserConfigSourceMysql {
  /**
  * telegraf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#telegraf ServiceIntegration#telegraf}
  */
  readonly telegraf?: ServiceIntegrationMetricsUserConfigSourceMysqlTelegraf;
}

export function serviceIntegrationMetricsUserConfigSourceMysqlToTerraform(struct?: ServiceIntegrationMetricsUserConfigSourceMysqlOutputReference | ServiceIntegrationMetricsUserConfigSourceMysql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    telegraf: serviceIntegrationMetricsUserConfigSourceMysqlTelegrafToTerraform(struct!.telegraf),
  }
}


export function serviceIntegrationMetricsUserConfigSourceMysqlToHclTerraform(struct?: ServiceIntegrationMetricsUserConfigSourceMysqlOutputReference | ServiceIntegrationMetricsUserConfigSourceMysql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    telegraf: {
      value: serviceIntegrationMetricsUserConfigSourceMysqlTelegrafToHclTerraform(struct!.telegraf),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceIntegrationMetricsUserConfigSourceMysqlTelegrafList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationMetricsUserConfigSourceMysqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationMetricsUserConfigSourceMysql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._telegraf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.telegraf = this._telegraf?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationMetricsUserConfigSourceMysql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._telegraf.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._telegraf.internalValue = value.telegraf;
    }
  }

  // telegraf - computed: false, optional: true, required: false
  private _telegraf = new ServiceIntegrationMetricsUserConfigSourceMysqlTelegrafOutputReference(this, "telegraf");
  public get telegraf() {
    return this._telegraf;
  }
  public putTelegraf(value: ServiceIntegrationMetricsUserConfigSourceMysqlTelegraf) {
    this._telegraf.internalValue = value;
  }
  public resetTelegraf() {
    this._telegraf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telegrafInput() {
    return this._telegraf.internalValue;
  }
}
export interface ServiceIntegrationMetricsUserConfig {
  /**
  * Name of the database where to store metric datapoints. Only affects PostgreSQL destinations. Defaults to `metrics`. Note that this must be the same for all metrics integrations that write data to the same PostgreSQL service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#database ServiceIntegration#database}
  */
  readonly database?: string;
  /**
  * Number of days to keep old metrics. Only affects PostgreSQL destinations. Set to 0 for no automatic cleanup. Defaults to 30 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#retention_days ServiceIntegration#retention_days}
  */
  readonly retentionDays?: number;
  /**
  * Name of a user that can be used to read metrics. This will be used for Grafana integration (if enabled) to prevent Grafana users from making undesired changes. Only affects PostgreSQL destinations. Defaults to `metrics_reader`. Note that this must be the same for all metrics integrations that write data to the same PostgreSQL service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#ro_username ServiceIntegration#ro_username}
  */
  readonly roUsername?: string;
  /**
  * Name of the user used to write metrics. Only affects PostgreSQL destinations. Defaults to `metrics_writer`. Note that this must be the same for all metrics integrations that write data to the same PostgreSQL service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#username ServiceIntegration#username}
  */
  readonly username?: string;
  /**
  * source_mysql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#source_mysql ServiceIntegration#source_mysql}
  */
  readonly sourceMysql?: ServiceIntegrationMetricsUserConfigSourceMysql;
}

export function serviceIntegrationMetricsUserConfigToTerraform(struct?: ServiceIntegrationMetricsUserConfigOutputReference | ServiceIntegrationMetricsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    retention_days: cdktf.numberToTerraform(struct!.retentionDays),
    ro_username: cdktf.stringToTerraform(struct!.roUsername),
    username: cdktf.stringToTerraform(struct!.username),
    source_mysql: serviceIntegrationMetricsUserConfigSourceMysqlToTerraform(struct!.sourceMysql),
  }
}


export function serviceIntegrationMetricsUserConfigToHclTerraform(struct?: ServiceIntegrationMetricsUserConfigOutputReference | ServiceIntegrationMetricsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention_days: {
      value: cdktf.numberToHclTerraform(struct!.retentionDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ro_username: {
      value: cdktf.stringToHclTerraform(struct!.roUsername),
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
    source_mysql: {
      value: serviceIntegrationMetricsUserConfigSourceMysqlToHclTerraform(struct!.sourceMysql),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceIntegrationMetricsUserConfigSourceMysqlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationMetricsUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationMetricsUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._retentionDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDays = this._retentionDays;
    }
    if (this._roUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.roUsername = this._roUsername;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._sourceMysql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceMysql = this._sourceMysql?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationMetricsUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._retentionDays = undefined;
      this._roUsername = undefined;
      this._username = undefined;
      this._sourceMysql.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._retentionDays = value.retentionDays;
      this._roUsername = value.roUsername;
      this._username = value.username;
      this._sourceMysql.internalValue = value.sourceMysql;
    }
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // retention_days - computed: false, optional: true, required: false
  private _retentionDays?: number; 
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number) {
    this._retentionDays = value;
  }
  public resetRetentionDays() {
    this._retentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays;
  }

  // ro_username - computed: false, optional: true, required: false
  private _roUsername?: string; 
  public get roUsername() {
    return this.getStringAttribute('ro_username');
  }
  public set roUsername(value: string) {
    this._roUsername = value;
  }
  public resetRoUsername() {
    this._roUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roUsernameInput() {
    return this._roUsername;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // source_mysql - computed: false, optional: true, required: false
  private _sourceMysql = new ServiceIntegrationMetricsUserConfigSourceMysqlOutputReference(this, "source_mysql");
  public get sourceMysql() {
    return this._sourceMysql;
  }
  public putSourceMysql(value: ServiceIntegrationMetricsUserConfigSourceMysql) {
    this._sourceMysql.internalValue = value;
  }
  public resetSourceMysql() {
    this._sourceMysql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceMysqlInput() {
    return this._sourceMysql.internalValue;
  }
}
export interface ServiceIntegrationPrometheusUserConfigSourceMysqlTelegraf {
  /**
  * Gather metrics from PERFORMANCE_SCHEMA.EVENT_WAITS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#gather_event_waits ServiceIntegration#gather_event_waits}
  */
  readonly gatherEventWaits?: boolean | cdktf.IResolvable;
  /**
  * Gather metrics from PERFORMANCE_SCHEMA.FILE_SUMMARY_BY_EVENT_NAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#gather_file_events_stats ServiceIntegration#gather_file_events_stats}
  */
  readonly gatherFileEventsStats?: boolean | cdktf.IResolvable;
  /**
  * Gather metrics from PERFORMANCE_SCHEMA.TABLE_IO_WAITS_SUMMARY_BY_INDEX_USAGE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#gather_index_io_waits ServiceIntegration#gather_index_io_waits}
  */
  readonly gatherIndexIoWaits?: boolean | cdktf.IResolvable;
  /**
  * Gather auto_increment columns and max values from information schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#gather_info_schema_auto_inc ServiceIntegration#gather_info_schema_auto_inc}
  */
  readonly gatherInfoSchemaAutoInc?: boolean | cdktf.IResolvable;
  /**
  * Gather metrics from INFORMATION_SCHEMA.INNODB_METRICS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#gather_innodb_metrics ServiceIntegration#gather_innodb_metrics}
  */
  readonly gatherInnodbMetrics?: boolean | cdktf.IResolvable;
  /**
  * Gather metrics from PERFORMANCE_SCHEMA.EVENTS_STATEMENTS_SUMMARY_BY_DIGEST.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#gather_perf_events_statements ServiceIntegration#gather_perf_events_statements}
  */
  readonly gatherPerfEventsStatements?: boolean | cdktf.IResolvable;
  /**
  * Gather thread state counts from INFORMATION_SCHEMA.PROCESSLIST.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#gather_process_list ServiceIntegration#gather_process_list}
  */
  readonly gatherProcessList?: boolean | cdktf.IResolvable;
  /**
  * Gather metrics from SHOW SLAVE STATUS command output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#gather_slave_status ServiceIntegration#gather_slave_status}
  */
  readonly gatherSlaveStatus?: boolean | cdktf.IResolvable;
  /**
  * Gather metrics from PERFORMANCE_SCHEMA.TABLE_IO_WAITS_SUMMARY_BY_TABLE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#gather_table_io_waits ServiceIntegration#gather_table_io_waits}
  */
  readonly gatherTableIoWaits?: boolean | cdktf.IResolvable;
  /**
  * Gather metrics from PERFORMANCE_SCHEMA.TABLE_LOCK_WAITS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#gather_table_lock_waits ServiceIntegration#gather_table_lock_waits}
  */
  readonly gatherTableLockWaits?: boolean | cdktf.IResolvable;
  /**
  * Gather metrics from INFORMATION_SCHEMA.TABLES.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#gather_table_schema ServiceIntegration#gather_table_schema}
  */
  readonly gatherTableSchema?: boolean | cdktf.IResolvable;
  /**
  * Truncates digest text from perf_events_statements into this many characters. Example: `120`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#perf_events_statements_digest_text_limit ServiceIntegration#perf_events_statements_digest_text_limit}
  */
  readonly perfEventsStatementsDigestTextLimit?: number;
  /**
  * Limits metrics from perf_events_statements. Example: `250`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#perf_events_statements_limit ServiceIntegration#perf_events_statements_limit}
  */
  readonly perfEventsStatementsLimit?: number;
  /**
  * Only include perf_events_statements whose last seen is less than this many seconds. Example: `86400`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#perf_events_statements_time_limit ServiceIntegration#perf_events_statements_time_limit}
  */
  readonly perfEventsStatementsTimeLimit?: number;
}

export function serviceIntegrationPrometheusUserConfigSourceMysqlTelegrafToTerraform(struct?: ServiceIntegrationPrometheusUserConfigSourceMysqlTelegrafOutputReference | ServiceIntegrationPrometheusUserConfigSourceMysqlTelegraf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gather_event_waits: cdktf.booleanToTerraform(struct!.gatherEventWaits),
    gather_file_events_stats: cdktf.booleanToTerraform(struct!.gatherFileEventsStats),
    gather_index_io_waits: cdktf.booleanToTerraform(struct!.gatherIndexIoWaits),
    gather_info_schema_auto_inc: cdktf.booleanToTerraform(struct!.gatherInfoSchemaAutoInc),
    gather_innodb_metrics: cdktf.booleanToTerraform(struct!.gatherInnodbMetrics),
    gather_perf_events_statements: cdktf.booleanToTerraform(struct!.gatherPerfEventsStatements),
    gather_process_list: cdktf.booleanToTerraform(struct!.gatherProcessList),
    gather_slave_status: cdktf.booleanToTerraform(struct!.gatherSlaveStatus),
    gather_table_io_waits: cdktf.booleanToTerraform(struct!.gatherTableIoWaits),
    gather_table_lock_waits: cdktf.booleanToTerraform(struct!.gatherTableLockWaits),
    gather_table_schema: cdktf.booleanToTerraform(struct!.gatherTableSchema),
    perf_events_statements_digest_text_limit: cdktf.numberToTerraform(struct!.perfEventsStatementsDigestTextLimit),
    perf_events_statements_limit: cdktf.numberToTerraform(struct!.perfEventsStatementsLimit),
    perf_events_statements_time_limit: cdktf.numberToTerraform(struct!.perfEventsStatementsTimeLimit),
  }
}


export function serviceIntegrationPrometheusUserConfigSourceMysqlTelegrafToHclTerraform(struct?: ServiceIntegrationPrometheusUserConfigSourceMysqlTelegrafOutputReference | ServiceIntegrationPrometheusUserConfigSourceMysqlTelegraf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gather_event_waits: {
      value: cdktf.booleanToHclTerraform(struct!.gatherEventWaits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gather_file_events_stats: {
      value: cdktf.booleanToHclTerraform(struct!.gatherFileEventsStats),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gather_index_io_waits: {
      value: cdktf.booleanToHclTerraform(struct!.gatherIndexIoWaits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gather_info_schema_auto_inc: {
      value: cdktf.booleanToHclTerraform(struct!.gatherInfoSchemaAutoInc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gather_innodb_metrics: {
      value: cdktf.booleanToHclTerraform(struct!.gatherInnodbMetrics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gather_perf_events_statements: {
      value: cdktf.booleanToHclTerraform(struct!.gatherPerfEventsStatements),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gather_process_list: {
      value: cdktf.booleanToHclTerraform(struct!.gatherProcessList),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gather_slave_status: {
      value: cdktf.booleanToHclTerraform(struct!.gatherSlaveStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gather_table_io_waits: {
      value: cdktf.booleanToHclTerraform(struct!.gatherTableIoWaits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gather_table_lock_waits: {
      value: cdktf.booleanToHclTerraform(struct!.gatherTableLockWaits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gather_table_schema: {
      value: cdktf.booleanToHclTerraform(struct!.gatherTableSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    perf_events_statements_digest_text_limit: {
      value: cdktf.numberToHclTerraform(struct!.perfEventsStatementsDigestTextLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    perf_events_statements_limit: {
      value: cdktf.numberToHclTerraform(struct!.perfEventsStatementsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    perf_events_statements_time_limit: {
      value: cdktf.numberToHclTerraform(struct!.perfEventsStatementsTimeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationPrometheusUserConfigSourceMysqlTelegrafOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationPrometheusUserConfigSourceMysqlTelegraf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gatherEventWaits !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatherEventWaits = this._gatherEventWaits;
    }
    if (this._gatherFileEventsStats !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatherFileEventsStats = this._gatherFileEventsStats;
    }
    if (this._gatherIndexIoWaits !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatherIndexIoWaits = this._gatherIndexIoWaits;
    }
    if (this._gatherInfoSchemaAutoInc !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatherInfoSchemaAutoInc = this._gatherInfoSchemaAutoInc;
    }
    if (this._gatherInnodbMetrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatherInnodbMetrics = this._gatherInnodbMetrics;
    }
    if (this._gatherPerfEventsStatements !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatherPerfEventsStatements = this._gatherPerfEventsStatements;
    }
    if (this._gatherProcessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatherProcessList = this._gatherProcessList;
    }
    if (this._gatherSlaveStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatherSlaveStatus = this._gatherSlaveStatus;
    }
    if (this._gatherTableIoWaits !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatherTableIoWaits = this._gatherTableIoWaits;
    }
    if (this._gatherTableLockWaits !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatherTableLockWaits = this._gatherTableLockWaits;
    }
    if (this._gatherTableSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatherTableSchema = this._gatherTableSchema;
    }
    if (this._perfEventsStatementsDigestTextLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.perfEventsStatementsDigestTextLimit = this._perfEventsStatementsDigestTextLimit;
    }
    if (this._perfEventsStatementsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.perfEventsStatementsLimit = this._perfEventsStatementsLimit;
    }
    if (this._perfEventsStatementsTimeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.perfEventsStatementsTimeLimit = this._perfEventsStatementsTimeLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationPrometheusUserConfigSourceMysqlTelegraf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gatherEventWaits = undefined;
      this._gatherFileEventsStats = undefined;
      this._gatherIndexIoWaits = undefined;
      this._gatherInfoSchemaAutoInc = undefined;
      this._gatherInnodbMetrics = undefined;
      this._gatherPerfEventsStatements = undefined;
      this._gatherProcessList = undefined;
      this._gatherSlaveStatus = undefined;
      this._gatherTableIoWaits = undefined;
      this._gatherTableLockWaits = undefined;
      this._gatherTableSchema = undefined;
      this._perfEventsStatementsDigestTextLimit = undefined;
      this._perfEventsStatementsLimit = undefined;
      this._perfEventsStatementsTimeLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gatherEventWaits = value.gatherEventWaits;
      this._gatherFileEventsStats = value.gatherFileEventsStats;
      this._gatherIndexIoWaits = value.gatherIndexIoWaits;
      this._gatherInfoSchemaAutoInc = value.gatherInfoSchemaAutoInc;
      this._gatherInnodbMetrics = value.gatherInnodbMetrics;
      this._gatherPerfEventsStatements = value.gatherPerfEventsStatements;
      this._gatherProcessList = value.gatherProcessList;
      this._gatherSlaveStatus = value.gatherSlaveStatus;
      this._gatherTableIoWaits = value.gatherTableIoWaits;
      this._gatherTableLockWaits = value.gatherTableLockWaits;
      this._gatherTableSchema = value.gatherTableSchema;
      this._perfEventsStatementsDigestTextLimit = value.perfEventsStatementsDigestTextLimit;
      this._perfEventsStatementsLimit = value.perfEventsStatementsLimit;
      this._perfEventsStatementsTimeLimit = value.perfEventsStatementsTimeLimit;
    }
  }

  // gather_event_waits - computed: false, optional: true, required: false
  private _gatherEventWaits?: boolean | cdktf.IResolvable; 
  public get gatherEventWaits() {
    return this.getBooleanAttribute('gather_event_waits');
  }
  public set gatherEventWaits(value: boolean | cdktf.IResolvable) {
    this._gatherEventWaits = value;
  }
  public resetGatherEventWaits() {
    this._gatherEventWaits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatherEventWaitsInput() {
    return this._gatherEventWaits;
  }

  // gather_file_events_stats - computed: false, optional: true, required: false
  private _gatherFileEventsStats?: boolean | cdktf.IResolvable; 
  public get gatherFileEventsStats() {
    return this.getBooleanAttribute('gather_file_events_stats');
  }
  public set gatherFileEventsStats(value: boolean | cdktf.IResolvable) {
    this._gatherFileEventsStats = value;
  }
  public resetGatherFileEventsStats() {
    this._gatherFileEventsStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatherFileEventsStatsInput() {
    return this._gatherFileEventsStats;
  }

  // gather_index_io_waits - computed: false, optional: true, required: false
  private _gatherIndexIoWaits?: boolean | cdktf.IResolvable; 
  public get gatherIndexIoWaits() {
    return this.getBooleanAttribute('gather_index_io_waits');
  }
  public set gatherIndexIoWaits(value: boolean | cdktf.IResolvable) {
    this._gatherIndexIoWaits = value;
  }
  public resetGatherIndexIoWaits() {
    this._gatherIndexIoWaits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatherIndexIoWaitsInput() {
    return this._gatherIndexIoWaits;
  }

  // gather_info_schema_auto_inc - computed: false, optional: true, required: false
  private _gatherInfoSchemaAutoInc?: boolean | cdktf.IResolvable; 
  public get gatherInfoSchemaAutoInc() {
    return this.getBooleanAttribute('gather_info_schema_auto_inc');
  }
  public set gatherInfoSchemaAutoInc(value: boolean | cdktf.IResolvable) {
    this._gatherInfoSchemaAutoInc = value;
  }
  public resetGatherInfoSchemaAutoInc() {
    this._gatherInfoSchemaAutoInc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatherInfoSchemaAutoIncInput() {
    return this._gatherInfoSchemaAutoInc;
  }

  // gather_innodb_metrics - computed: false, optional: true, required: false
  private _gatherInnodbMetrics?: boolean | cdktf.IResolvable; 
  public get gatherInnodbMetrics() {
    return this.getBooleanAttribute('gather_innodb_metrics');
  }
  public set gatherInnodbMetrics(value: boolean | cdktf.IResolvable) {
    this._gatherInnodbMetrics = value;
  }
  public resetGatherInnodbMetrics() {
    this._gatherInnodbMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatherInnodbMetricsInput() {
    return this._gatherInnodbMetrics;
  }

  // gather_perf_events_statements - computed: false, optional: true, required: false
  private _gatherPerfEventsStatements?: boolean | cdktf.IResolvable; 
  public get gatherPerfEventsStatements() {
    return this.getBooleanAttribute('gather_perf_events_statements');
  }
  public set gatherPerfEventsStatements(value: boolean | cdktf.IResolvable) {
    this._gatherPerfEventsStatements = value;
  }
  public resetGatherPerfEventsStatements() {
    this._gatherPerfEventsStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatherPerfEventsStatementsInput() {
    return this._gatherPerfEventsStatements;
  }

  // gather_process_list - computed: false, optional: true, required: false
  private _gatherProcessList?: boolean | cdktf.IResolvable; 
  public get gatherProcessList() {
    return this.getBooleanAttribute('gather_process_list');
  }
  public set gatherProcessList(value: boolean | cdktf.IResolvable) {
    this._gatherProcessList = value;
  }
  public resetGatherProcessList() {
    this._gatherProcessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatherProcessListInput() {
    return this._gatherProcessList;
  }

  // gather_slave_status - computed: false, optional: true, required: false
  private _gatherSlaveStatus?: boolean | cdktf.IResolvable; 
  public get gatherSlaveStatus() {
    return this.getBooleanAttribute('gather_slave_status');
  }
  public set gatherSlaveStatus(value: boolean | cdktf.IResolvable) {
    this._gatherSlaveStatus = value;
  }
  public resetGatherSlaveStatus() {
    this._gatherSlaveStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatherSlaveStatusInput() {
    return this._gatherSlaveStatus;
  }

  // gather_table_io_waits - computed: false, optional: true, required: false
  private _gatherTableIoWaits?: boolean | cdktf.IResolvable; 
  public get gatherTableIoWaits() {
    return this.getBooleanAttribute('gather_table_io_waits');
  }
  public set gatherTableIoWaits(value: boolean | cdktf.IResolvable) {
    this._gatherTableIoWaits = value;
  }
  public resetGatherTableIoWaits() {
    this._gatherTableIoWaits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatherTableIoWaitsInput() {
    return this._gatherTableIoWaits;
  }

  // gather_table_lock_waits - computed: false, optional: true, required: false
  private _gatherTableLockWaits?: boolean | cdktf.IResolvable; 
  public get gatherTableLockWaits() {
    return this.getBooleanAttribute('gather_table_lock_waits');
  }
  public set gatherTableLockWaits(value: boolean | cdktf.IResolvable) {
    this._gatherTableLockWaits = value;
  }
  public resetGatherTableLockWaits() {
    this._gatherTableLockWaits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatherTableLockWaitsInput() {
    return this._gatherTableLockWaits;
  }

  // gather_table_schema - computed: false, optional: true, required: false
  private _gatherTableSchema?: boolean | cdktf.IResolvable; 
  public get gatherTableSchema() {
    return this.getBooleanAttribute('gather_table_schema');
  }
  public set gatherTableSchema(value: boolean | cdktf.IResolvable) {
    this._gatherTableSchema = value;
  }
  public resetGatherTableSchema() {
    this._gatherTableSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatherTableSchemaInput() {
    return this._gatherTableSchema;
  }

  // perf_events_statements_digest_text_limit - computed: false, optional: true, required: false
  private _perfEventsStatementsDigestTextLimit?: number; 
  public get perfEventsStatementsDigestTextLimit() {
    return this.getNumberAttribute('perf_events_statements_digest_text_limit');
  }
  public set perfEventsStatementsDigestTextLimit(value: number) {
    this._perfEventsStatementsDigestTextLimit = value;
  }
  public resetPerfEventsStatementsDigestTextLimit() {
    this._perfEventsStatementsDigestTextLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfEventsStatementsDigestTextLimitInput() {
    return this._perfEventsStatementsDigestTextLimit;
  }

  // perf_events_statements_limit - computed: false, optional: true, required: false
  private _perfEventsStatementsLimit?: number; 
  public get perfEventsStatementsLimit() {
    return this.getNumberAttribute('perf_events_statements_limit');
  }
  public set perfEventsStatementsLimit(value: number) {
    this._perfEventsStatementsLimit = value;
  }
  public resetPerfEventsStatementsLimit() {
    this._perfEventsStatementsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfEventsStatementsLimitInput() {
    return this._perfEventsStatementsLimit;
  }

  // perf_events_statements_time_limit - computed: false, optional: true, required: false
  private _perfEventsStatementsTimeLimit?: number; 
  public get perfEventsStatementsTimeLimit() {
    return this.getNumberAttribute('perf_events_statements_time_limit');
  }
  public set perfEventsStatementsTimeLimit(value: number) {
    this._perfEventsStatementsTimeLimit = value;
  }
  public resetPerfEventsStatementsTimeLimit() {
    this._perfEventsStatementsTimeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfEventsStatementsTimeLimitInput() {
    return this._perfEventsStatementsTimeLimit;
  }
}
export interface ServiceIntegrationPrometheusUserConfigSourceMysql {
  /**
  * telegraf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#telegraf ServiceIntegration#telegraf}
  */
  readonly telegraf?: ServiceIntegrationPrometheusUserConfigSourceMysqlTelegraf;
}

export function serviceIntegrationPrometheusUserConfigSourceMysqlToTerraform(struct?: ServiceIntegrationPrometheusUserConfigSourceMysqlOutputReference | ServiceIntegrationPrometheusUserConfigSourceMysql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    telegraf: serviceIntegrationPrometheusUserConfigSourceMysqlTelegrafToTerraform(struct!.telegraf),
  }
}


export function serviceIntegrationPrometheusUserConfigSourceMysqlToHclTerraform(struct?: ServiceIntegrationPrometheusUserConfigSourceMysqlOutputReference | ServiceIntegrationPrometheusUserConfigSourceMysql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    telegraf: {
      value: serviceIntegrationPrometheusUserConfigSourceMysqlTelegrafToHclTerraform(struct!.telegraf),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceIntegrationPrometheusUserConfigSourceMysqlTelegrafList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationPrometheusUserConfigSourceMysqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationPrometheusUserConfigSourceMysql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._telegraf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.telegraf = this._telegraf?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationPrometheusUserConfigSourceMysql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._telegraf.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._telegraf.internalValue = value.telegraf;
    }
  }

  // telegraf - computed: false, optional: true, required: false
  private _telegraf = new ServiceIntegrationPrometheusUserConfigSourceMysqlTelegrafOutputReference(this, "telegraf");
  public get telegraf() {
    return this._telegraf;
  }
  public putTelegraf(value: ServiceIntegrationPrometheusUserConfigSourceMysqlTelegraf) {
    this._telegraf.internalValue = value;
  }
  public resetTelegraf() {
    this._telegraf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telegrafInput() {
    return this._telegraf.internalValue;
  }
}
export interface ServiceIntegrationPrometheusUserConfig {
  /**
  * source_mysql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#source_mysql ServiceIntegration#source_mysql}
  */
  readonly sourceMysql?: ServiceIntegrationPrometheusUserConfigSourceMysql;
}

export function serviceIntegrationPrometheusUserConfigToTerraform(struct?: ServiceIntegrationPrometheusUserConfigOutputReference | ServiceIntegrationPrometheusUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_mysql: serviceIntegrationPrometheusUserConfigSourceMysqlToTerraform(struct!.sourceMysql),
  }
}


export function serviceIntegrationPrometheusUserConfigToHclTerraform(struct?: ServiceIntegrationPrometheusUserConfigOutputReference | ServiceIntegrationPrometheusUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_mysql: {
      value: serviceIntegrationPrometheusUserConfigSourceMysqlToHclTerraform(struct!.sourceMysql),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceIntegrationPrometheusUserConfigSourceMysqlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceIntegrationPrometheusUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceIntegrationPrometheusUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceMysql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceMysql = this._sourceMysql?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceIntegrationPrometheusUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceMysql.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceMysql.internalValue = value.sourceMysql;
    }
  }

  // source_mysql - computed: false, optional: true, required: false
  private _sourceMysql = new ServiceIntegrationPrometheusUserConfigSourceMysqlOutputReference(this, "source_mysql");
  public get sourceMysql() {
    return this._sourceMysql;
  }
  public putSourceMysql(value: ServiceIntegrationPrometheusUserConfigSourceMysql) {
    this._sourceMysql.internalValue = value;
  }
  public resetSourceMysql() {
    this._sourceMysql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceMysqlInput() {
    return this._sourceMysql.internalValue;
  }
}
export interface ServiceIntegrationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#create ServiceIntegration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#default ServiceIntegration#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#delete ServiceIntegration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#read ServiceIntegration#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#update ServiceIntegration#update}
  */
  readonly update?: string;
}

export function serviceIntegrationTimeoutsToTerraform(struct?: ServiceIntegrationTimeouts | cdktf.IResolvable): any {
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


export function serviceIntegrationTimeoutsToHclTerraform(struct?: ServiceIntegrationTimeouts | cdktf.IResolvable): any {
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

export class ServiceIntegrationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceIntegrationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceIntegrationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration aiven_service_integration}
*/
export class ServiceIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_service_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceIntegration to import
  * @param importFromId The id of the existing ServiceIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_service_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/service_integration aiven_service_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'aiven_service_integration',
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
    this._destinationEndpointId = config.destinationEndpointId;
    this._destinationServiceName = config.destinationServiceName;
    this._destinationServiceProject = config.destinationServiceProject;
    this._id = config.id;
    this._integrationType = config.integrationType;
    this._project = config.project;
    this._sourceEndpointId = config.sourceEndpointId;
    this._sourceServiceName = config.sourceServiceName;
    this._sourceServiceProject = config.sourceServiceProject;
    this._clickhouseCredentialsUserConfig.internalValue = config.clickhouseCredentialsUserConfig;
    this._clickhouseKafkaUserConfig.internalValue = config.clickhouseKafkaUserConfig;
    this._clickhousePostgresqlUserConfig.internalValue = config.clickhousePostgresqlUserConfig;
    this._datadogUserConfig.internalValue = config.datadogUserConfig;
    this._externalAwsCloudwatchLogsUserConfig.internalValue = config.externalAwsCloudwatchLogsUserConfig;
    this._externalAwsCloudwatchMetricsUserConfig.internalValue = config.externalAwsCloudwatchMetricsUserConfig;
    this._externalElasticsearchLogsUserConfig.internalValue = config.externalElasticsearchLogsUserConfig;
    this._externalOpensearchLogsUserConfig.internalValue = config.externalOpensearchLogsUserConfig;
    this._flinkExternalPostgresqlUserConfig.internalValue = config.flinkExternalPostgresqlUserConfig;
    this._kafkaConnectUserConfig.internalValue = config.kafkaConnectUserConfig;
    this._kafkaLogsUserConfig.internalValue = config.kafkaLogsUserConfig;
    this._kafkaMirrormakerUserConfig.internalValue = config.kafkaMirrormakerUserConfig;
    this._logsUserConfig.internalValue = config.logsUserConfig;
    this._metricsUserConfig.internalValue = config.metricsUserConfig;
    this._prometheusUserConfig.internalValue = config.prometheusUserConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination_endpoint_id - computed: false, optional: true, required: false
  private _destinationEndpointId?: string; 
  public get destinationEndpointId() {
    return this.getStringAttribute('destination_endpoint_id');
  }
  public set destinationEndpointId(value: string) {
    this._destinationEndpointId = value;
  }
  public resetDestinationEndpointId() {
    this._destinationEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationEndpointIdInput() {
    return this._destinationEndpointId;
  }

  // destination_service_name - computed: false, optional: true, required: false
  private _destinationServiceName?: string; 
  public get destinationServiceName() {
    return this.getStringAttribute('destination_service_name');
  }
  public set destinationServiceName(value: string) {
    this._destinationServiceName = value;
  }
  public resetDestinationServiceName() {
    this._destinationServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationServiceNameInput() {
    return this._destinationServiceName;
  }

  // destination_service_project - computed: true, optional: true, required: false
  private _destinationServiceProject?: string; 
  public get destinationServiceProject() {
    return this.getStringAttribute('destination_service_project');
  }
  public set destinationServiceProject(value: string) {
    this._destinationServiceProject = value;
  }
  public resetDestinationServiceProject() {
    this._destinationServiceProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationServiceProjectInput() {
    return this._destinationServiceProject;
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

  // integration_id - computed: true, optional: false, required: false
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }

  // integration_type - computed: false, optional: false, required: true
  private _integrationType?: string; 
  public get integrationType() {
    return this.getStringAttribute('integration_type');
  }
  public set integrationType(value: string) {
    this._integrationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationTypeInput() {
    return this._integrationType;
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

  // source_endpoint_id - computed: false, optional: true, required: false
  private _sourceEndpointId?: string; 
  public get sourceEndpointId() {
    return this.getStringAttribute('source_endpoint_id');
  }
  public set sourceEndpointId(value: string) {
    this._sourceEndpointId = value;
  }
  public resetSourceEndpointId() {
    this._sourceEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointIdInput() {
    return this._sourceEndpointId;
  }

  // source_service_name - computed: true, optional: true, required: false
  private _sourceServiceName?: string; 
  public get sourceServiceName() {
    return this.getStringAttribute('source_service_name');
  }
  public set sourceServiceName(value: string) {
    this._sourceServiceName = value;
  }
  public resetSourceServiceName() {
    this._sourceServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceServiceNameInput() {
    return this._sourceServiceName;
  }

  // source_service_project - computed: true, optional: true, required: false
  private _sourceServiceProject?: string; 
  public get sourceServiceProject() {
    return this.getStringAttribute('source_service_project');
  }
  public set sourceServiceProject(value: string) {
    this._sourceServiceProject = value;
  }
  public resetSourceServiceProject() {
    this._sourceServiceProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceServiceProjectInput() {
    return this._sourceServiceProject;
  }

  // clickhouse_credentials_user_config - computed: false, optional: true, required: false
  private _clickhouseCredentialsUserConfig = new ServiceIntegrationClickhouseCredentialsUserConfigOutputReference(this, "clickhouse_credentials_user_config");
  public get clickhouseCredentialsUserConfig() {
    return this._clickhouseCredentialsUserConfig;
  }
  public putClickhouseCredentialsUserConfig(value: ServiceIntegrationClickhouseCredentialsUserConfig) {
    this._clickhouseCredentialsUserConfig.internalValue = value;
  }
  public resetClickhouseCredentialsUserConfig() {
    this._clickhouseCredentialsUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickhouseCredentialsUserConfigInput() {
    return this._clickhouseCredentialsUserConfig.internalValue;
  }

  // clickhouse_kafka_user_config - computed: false, optional: true, required: false
  private _clickhouseKafkaUserConfig = new ServiceIntegrationClickhouseKafkaUserConfigOutputReference(this, "clickhouse_kafka_user_config");
  public get clickhouseKafkaUserConfig() {
    return this._clickhouseKafkaUserConfig;
  }
  public putClickhouseKafkaUserConfig(value: ServiceIntegrationClickhouseKafkaUserConfig) {
    this._clickhouseKafkaUserConfig.internalValue = value;
  }
  public resetClickhouseKafkaUserConfig() {
    this._clickhouseKafkaUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickhouseKafkaUserConfigInput() {
    return this._clickhouseKafkaUserConfig.internalValue;
  }

  // clickhouse_postgresql_user_config - computed: false, optional: true, required: false
  private _clickhousePostgresqlUserConfig = new ServiceIntegrationClickhousePostgresqlUserConfigOutputReference(this, "clickhouse_postgresql_user_config");
  public get clickhousePostgresqlUserConfig() {
    return this._clickhousePostgresqlUserConfig;
  }
  public putClickhousePostgresqlUserConfig(value: ServiceIntegrationClickhousePostgresqlUserConfig) {
    this._clickhousePostgresqlUserConfig.internalValue = value;
  }
  public resetClickhousePostgresqlUserConfig() {
    this._clickhousePostgresqlUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickhousePostgresqlUserConfigInput() {
    return this._clickhousePostgresqlUserConfig.internalValue;
  }

  // datadog_user_config - computed: false, optional: true, required: false
  private _datadogUserConfig = new ServiceIntegrationDatadogUserConfigOutputReference(this, "datadog_user_config");
  public get datadogUserConfig() {
    return this._datadogUserConfig;
  }
  public putDatadogUserConfig(value: ServiceIntegrationDatadogUserConfig) {
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
  private _externalAwsCloudwatchLogsUserConfig = new ServiceIntegrationExternalAwsCloudwatchLogsUserConfigOutputReference(this, "external_aws_cloudwatch_logs_user_config");
  public get externalAwsCloudwatchLogsUserConfig() {
    return this._externalAwsCloudwatchLogsUserConfig;
  }
  public putExternalAwsCloudwatchLogsUserConfig(value: ServiceIntegrationExternalAwsCloudwatchLogsUserConfig) {
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
  private _externalAwsCloudwatchMetricsUserConfig = new ServiceIntegrationExternalAwsCloudwatchMetricsUserConfigOutputReference(this, "external_aws_cloudwatch_metrics_user_config");
  public get externalAwsCloudwatchMetricsUserConfig() {
    return this._externalAwsCloudwatchMetricsUserConfig;
  }
  public putExternalAwsCloudwatchMetricsUserConfig(value: ServiceIntegrationExternalAwsCloudwatchMetricsUserConfig) {
    this._externalAwsCloudwatchMetricsUserConfig.internalValue = value;
  }
  public resetExternalAwsCloudwatchMetricsUserConfig() {
    this._externalAwsCloudwatchMetricsUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAwsCloudwatchMetricsUserConfigInput() {
    return this._externalAwsCloudwatchMetricsUserConfig.internalValue;
  }

  // external_elasticsearch_logs_user_config - computed: false, optional: true, required: false
  private _externalElasticsearchLogsUserConfig = new ServiceIntegrationExternalElasticsearchLogsUserConfigOutputReference(this, "external_elasticsearch_logs_user_config");
  public get externalElasticsearchLogsUserConfig() {
    return this._externalElasticsearchLogsUserConfig;
  }
  public putExternalElasticsearchLogsUserConfig(value: ServiceIntegrationExternalElasticsearchLogsUserConfig) {
    this._externalElasticsearchLogsUserConfig.internalValue = value;
  }
  public resetExternalElasticsearchLogsUserConfig() {
    this._externalElasticsearchLogsUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalElasticsearchLogsUserConfigInput() {
    return this._externalElasticsearchLogsUserConfig.internalValue;
  }

  // external_opensearch_logs_user_config - computed: false, optional: true, required: false
  private _externalOpensearchLogsUserConfig = new ServiceIntegrationExternalOpensearchLogsUserConfigOutputReference(this, "external_opensearch_logs_user_config");
  public get externalOpensearchLogsUserConfig() {
    return this._externalOpensearchLogsUserConfig;
  }
  public putExternalOpensearchLogsUserConfig(value: ServiceIntegrationExternalOpensearchLogsUserConfig) {
    this._externalOpensearchLogsUserConfig.internalValue = value;
  }
  public resetExternalOpensearchLogsUserConfig() {
    this._externalOpensearchLogsUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalOpensearchLogsUserConfigInput() {
    return this._externalOpensearchLogsUserConfig.internalValue;
  }

  // flink_external_postgresql_user_config - computed: false, optional: true, required: false
  private _flinkExternalPostgresqlUserConfig = new ServiceIntegrationFlinkExternalPostgresqlUserConfigOutputReference(this, "flink_external_postgresql_user_config");
  public get flinkExternalPostgresqlUserConfig() {
    return this._flinkExternalPostgresqlUserConfig;
  }
  public putFlinkExternalPostgresqlUserConfig(value: ServiceIntegrationFlinkExternalPostgresqlUserConfig) {
    this._flinkExternalPostgresqlUserConfig.internalValue = value;
  }
  public resetFlinkExternalPostgresqlUserConfig() {
    this._flinkExternalPostgresqlUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flinkExternalPostgresqlUserConfigInput() {
    return this._flinkExternalPostgresqlUserConfig.internalValue;
  }

  // kafka_connect_user_config - computed: false, optional: true, required: false
  private _kafkaConnectUserConfig = new ServiceIntegrationKafkaConnectUserConfigOutputReference(this, "kafka_connect_user_config");
  public get kafkaConnectUserConfig() {
    return this._kafkaConnectUserConfig;
  }
  public putKafkaConnectUserConfig(value: ServiceIntegrationKafkaConnectUserConfig) {
    this._kafkaConnectUserConfig.internalValue = value;
  }
  public resetKafkaConnectUserConfig() {
    this._kafkaConnectUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConnectUserConfigInput() {
    return this._kafkaConnectUserConfig.internalValue;
  }

  // kafka_logs_user_config - computed: false, optional: true, required: false
  private _kafkaLogsUserConfig = new ServiceIntegrationKafkaLogsUserConfigOutputReference(this, "kafka_logs_user_config");
  public get kafkaLogsUserConfig() {
    return this._kafkaLogsUserConfig;
  }
  public putKafkaLogsUserConfig(value: ServiceIntegrationKafkaLogsUserConfig) {
    this._kafkaLogsUserConfig.internalValue = value;
  }
  public resetKafkaLogsUserConfig() {
    this._kafkaLogsUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaLogsUserConfigInput() {
    return this._kafkaLogsUserConfig.internalValue;
  }

  // kafka_mirrormaker_user_config - computed: false, optional: true, required: false
  private _kafkaMirrormakerUserConfig = new ServiceIntegrationKafkaMirrormakerUserConfigOutputReference(this, "kafka_mirrormaker_user_config");
  public get kafkaMirrormakerUserConfig() {
    return this._kafkaMirrormakerUserConfig;
  }
  public putKafkaMirrormakerUserConfig(value: ServiceIntegrationKafkaMirrormakerUserConfig) {
    this._kafkaMirrormakerUserConfig.internalValue = value;
  }
  public resetKafkaMirrormakerUserConfig() {
    this._kafkaMirrormakerUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaMirrormakerUserConfigInput() {
    return this._kafkaMirrormakerUserConfig.internalValue;
  }

  // logs_user_config - computed: false, optional: true, required: false
  private _logsUserConfig = new ServiceIntegrationLogsUserConfigOutputReference(this, "logs_user_config");
  public get logsUserConfig() {
    return this._logsUserConfig;
  }
  public putLogsUserConfig(value: ServiceIntegrationLogsUserConfig) {
    this._logsUserConfig.internalValue = value;
  }
  public resetLogsUserConfig() {
    this._logsUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsUserConfigInput() {
    return this._logsUserConfig.internalValue;
  }

  // metrics_user_config - computed: false, optional: true, required: false
  private _metricsUserConfig = new ServiceIntegrationMetricsUserConfigOutputReference(this, "metrics_user_config");
  public get metricsUserConfig() {
    return this._metricsUserConfig;
  }
  public putMetricsUserConfig(value: ServiceIntegrationMetricsUserConfig) {
    this._metricsUserConfig.internalValue = value;
  }
  public resetMetricsUserConfig() {
    this._metricsUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsUserConfigInput() {
    return this._metricsUserConfig.internalValue;
  }

  // prometheus_user_config - computed: false, optional: true, required: false
  private _prometheusUserConfig = new ServiceIntegrationPrometheusUserConfigOutputReference(this, "prometheus_user_config");
  public get prometheusUserConfig() {
    return this._prometheusUserConfig;
  }
  public putPrometheusUserConfig(value: ServiceIntegrationPrometheusUserConfig) {
    this._prometheusUserConfig.internalValue = value;
  }
  public resetPrometheusUserConfig() {
    this._prometheusUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusUserConfigInput() {
    return this._prometheusUserConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServiceIntegrationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServiceIntegrationTimeouts) {
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
      destination_endpoint_id: cdktf.stringToTerraform(this._destinationEndpointId),
      destination_service_name: cdktf.stringToTerraform(this._destinationServiceName),
      destination_service_project: cdktf.stringToTerraform(this._destinationServiceProject),
      id: cdktf.stringToTerraform(this._id),
      integration_type: cdktf.stringToTerraform(this._integrationType),
      project: cdktf.stringToTerraform(this._project),
      source_endpoint_id: cdktf.stringToTerraform(this._sourceEndpointId),
      source_service_name: cdktf.stringToTerraform(this._sourceServiceName),
      source_service_project: cdktf.stringToTerraform(this._sourceServiceProject),
      clickhouse_credentials_user_config: serviceIntegrationClickhouseCredentialsUserConfigToTerraform(this._clickhouseCredentialsUserConfig.internalValue),
      clickhouse_kafka_user_config: serviceIntegrationClickhouseKafkaUserConfigToTerraform(this._clickhouseKafkaUserConfig.internalValue),
      clickhouse_postgresql_user_config: serviceIntegrationClickhousePostgresqlUserConfigToTerraform(this._clickhousePostgresqlUserConfig.internalValue),
      datadog_user_config: serviceIntegrationDatadogUserConfigToTerraform(this._datadogUserConfig.internalValue),
      external_aws_cloudwatch_logs_user_config: serviceIntegrationExternalAwsCloudwatchLogsUserConfigToTerraform(this._externalAwsCloudwatchLogsUserConfig.internalValue),
      external_aws_cloudwatch_metrics_user_config: serviceIntegrationExternalAwsCloudwatchMetricsUserConfigToTerraform(this._externalAwsCloudwatchMetricsUserConfig.internalValue),
      external_elasticsearch_logs_user_config: serviceIntegrationExternalElasticsearchLogsUserConfigToTerraform(this._externalElasticsearchLogsUserConfig.internalValue),
      external_opensearch_logs_user_config: serviceIntegrationExternalOpensearchLogsUserConfigToTerraform(this._externalOpensearchLogsUserConfig.internalValue),
      flink_external_postgresql_user_config: serviceIntegrationFlinkExternalPostgresqlUserConfigToTerraform(this._flinkExternalPostgresqlUserConfig.internalValue),
      kafka_connect_user_config: serviceIntegrationKafkaConnectUserConfigToTerraform(this._kafkaConnectUserConfig.internalValue),
      kafka_logs_user_config: serviceIntegrationKafkaLogsUserConfigToTerraform(this._kafkaLogsUserConfig.internalValue),
      kafka_mirrormaker_user_config: serviceIntegrationKafkaMirrormakerUserConfigToTerraform(this._kafkaMirrormakerUserConfig.internalValue),
      logs_user_config: serviceIntegrationLogsUserConfigToTerraform(this._logsUserConfig.internalValue),
      metrics_user_config: serviceIntegrationMetricsUserConfigToTerraform(this._metricsUserConfig.internalValue),
      prometheus_user_config: serviceIntegrationPrometheusUserConfigToTerraform(this._prometheusUserConfig.internalValue),
      timeouts: serviceIntegrationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destination_endpoint_id: {
        value: cdktf.stringToHclTerraform(this._destinationEndpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_service_name: {
        value: cdktf.stringToHclTerraform(this._destinationServiceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_service_project: {
        value: cdktf.stringToHclTerraform(this._destinationServiceProject),
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
      integration_type: {
        value: cdktf.stringToHclTerraform(this._integrationType),
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
      source_endpoint_id: {
        value: cdktf.stringToHclTerraform(this._sourceEndpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_service_name: {
        value: cdktf.stringToHclTerraform(this._sourceServiceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_service_project: {
        value: cdktf.stringToHclTerraform(this._sourceServiceProject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clickhouse_credentials_user_config: {
        value: serviceIntegrationClickhouseCredentialsUserConfigToHclTerraform(this._clickhouseCredentialsUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceIntegrationClickhouseCredentialsUserConfigList",
      },
      clickhouse_kafka_user_config: {
        value: serviceIntegrationClickhouseKafkaUserConfigToHclTerraform(this._clickhouseKafkaUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceIntegrationClickhouseKafkaUserConfigList",
      },
      clickhouse_postgresql_user_config: {
        value: serviceIntegrationClickhousePostgresqlUserConfigToHclTerraform(this._clickhousePostgresqlUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceIntegrationClickhousePostgresqlUserConfigList",
      },
      datadog_user_config: {
        value: serviceIntegrationDatadogUserConfigToHclTerraform(this._datadogUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceIntegrationDatadogUserConfigList",
      },
      external_aws_cloudwatch_logs_user_config: {
        value: serviceIntegrationExternalAwsCloudwatchLogsUserConfigToHclTerraform(this._externalAwsCloudwatchLogsUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceIntegrationExternalAwsCloudwatchLogsUserConfigList",
      },
      external_aws_cloudwatch_metrics_user_config: {
        value: serviceIntegrationExternalAwsCloudwatchMetricsUserConfigToHclTerraform(this._externalAwsCloudwatchMetricsUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceIntegrationExternalAwsCloudwatchMetricsUserConfigList",
      },
      external_elasticsearch_logs_user_config: {
        value: serviceIntegrationExternalElasticsearchLogsUserConfigToHclTerraform(this._externalElasticsearchLogsUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceIntegrationExternalElasticsearchLogsUserConfigList",
      },
      external_opensearch_logs_user_config: {
        value: serviceIntegrationExternalOpensearchLogsUserConfigToHclTerraform(this._externalOpensearchLogsUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceIntegrationExternalOpensearchLogsUserConfigList",
      },
      flink_external_postgresql_user_config: {
        value: serviceIntegrationFlinkExternalPostgresqlUserConfigToHclTerraform(this._flinkExternalPostgresqlUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceIntegrationFlinkExternalPostgresqlUserConfigList",
      },
      kafka_connect_user_config: {
        value: serviceIntegrationKafkaConnectUserConfigToHclTerraform(this._kafkaConnectUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceIntegrationKafkaConnectUserConfigList",
      },
      kafka_logs_user_config: {
        value: serviceIntegrationKafkaLogsUserConfigToHclTerraform(this._kafkaLogsUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceIntegrationKafkaLogsUserConfigList",
      },
      kafka_mirrormaker_user_config: {
        value: serviceIntegrationKafkaMirrormakerUserConfigToHclTerraform(this._kafkaMirrormakerUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceIntegrationKafkaMirrormakerUserConfigList",
      },
      logs_user_config: {
        value: serviceIntegrationLogsUserConfigToHclTerraform(this._logsUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceIntegrationLogsUserConfigList",
      },
      metrics_user_config: {
        value: serviceIntegrationMetricsUserConfigToHclTerraform(this._metricsUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceIntegrationMetricsUserConfigList",
      },
      prometheus_user_config: {
        value: serviceIntegrationPrometheusUserConfigToHclTerraform(this._prometheusUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceIntegrationPrometheusUserConfigList",
      },
      timeouts: {
        value: serviceIntegrationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServiceIntegrationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
