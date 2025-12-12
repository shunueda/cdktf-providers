// https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.40.0/docs/resources/integration_metric_prometheus
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationMetricPrometheusConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.40.0/docs/resources/integration_metric_prometheus#id IntegrationMetricPrometheus#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.40.0/docs/resources/integration_metric_prometheus#instance_id IntegrationMetricPrometheus#instance_id}
  */
  readonly instanceId: number;
  /**
  * List of metrics to include. If not specified, default metrics are used. See https://www.cloudamqp.com/docs/monitoring_metrics_splunk_v2.html#metrics-filtering for more information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.40.0/docs/resources/integration_metric_prometheus#metrics_filter IntegrationMetricPrometheus#metrics_filter}
  */
  readonly metricsFilter?: string[];
  /**
  * azure_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.40.0/docs/resources/integration_metric_prometheus#azure_monitor IntegrationMetricPrometheus#azure_monitor}
  */
  readonly azureMonitor?: IntegrationMetricPrometheusAzureMonitor;
  /**
  * cloudwatch_v3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.40.0/docs/resources/integration_metric_prometheus#cloudwatch_v3 IntegrationMetricPrometheus#cloudwatch_v3}
  */
  readonly cloudwatchV3?: IntegrationMetricPrometheusCloudwatchV3;
  /**
  * datadog_v3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.40.0/docs/resources/integration_metric_prometheus#datadog_v3 IntegrationMetricPrometheus#datadog_v3}
  */
  readonly datadogV3?: IntegrationMetricPrometheusDatadogV3;
  /**
  * dynatrace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.40.0/docs/resources/integration_metric_prometheus#dynatrace IntegrationMetricPrometheus#dynatrace}
  */
  readonly dynatrace?: IntegrationMetricPrometheusDynatrace;
  /**
  * newrelic_v3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.40.0/docs/resources/integration_metric_prometheus#newrelic_v3 IntegrationMetricPrometheus#newrelic_v3}
  */
  readonly newrelicV3?: IntegrationMetricPrometheusNewrelicV3;
  /**
  * splunk_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.40.0/docs/resources/integration_metric_prometheus#splunk_v2 IntegrationMetricPrometheus#splunk_v2}
  */
  readonly splunkV2?: IntegrationMetricPrometheusSplunkV2;
  /**
  * stackdriver_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.40.0/docs/resources/integration_metric_prometheus#stackdriver_v2 IntegrationMetricPrometheus#stackdriver_v2}
  */
  readonly stackdriverV2?: IntegrationMetricPrometheusStackdriverV2;
}
export interface IntegrationMetricPrometheusAzureMonitor {
  /**
  * Azure Application Insights Connection String
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.40.0/docs/resources/integration_metric_prometheus#connection_string IntegrationMetricPrometheus#connection_string}
  */
  readonly connectionString: string;
}

export function integrationMetricPrometheusAzureMonitorToTerraform(struct?: IntegrationMetricPrometheusAzureMonitorOutputReference | IntegrationMetricPrometheusAzureMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_string: cdktf.stringToTerraform(struct!.connectionString),
  }
}


export function integrationMetricPrometheusAzureMonitorToHclTerraform(struct?: IntegrationMetricPrometheusAzureMonitorOutputReference | IntegrationMetricPrometheusAzureMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_string: {
      value: cdktf.stringToHclTerraform(struct!.connectionString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationMetricPrometheusAzureMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationMetricPrometheusAzureMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionString !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionString = this._connectionString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationMetricPrometheusAzureMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionString = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionString = value.connectionString;
    }
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
}
export interface IntegrationMetricPrometheusCloudwatchV3 {
  /**
  * External identifier that matches the role you created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.40.0/docs/resources/integration_metric_prometheus#iam_external_id IntegrationMetricPrometheus#iam_external_id}
  */
  readonly iamExternalId: string;
  /**
  * AWS IAM role ARN with PutMetricData permission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.40.0/docs/resources/integration_metric_prometheus#iam_role IntegrationMetricPrometheus#iam_role}
  */
  readonly iamRole: string;
  /**
  * AWS region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.40.0/docs/resources/integration_metric_prometheus#region IntegrationMetricPrometheus#region}
  */
  readonly region: string;
  /**
  * tags. E.g. env=prod,service=web
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.40.0/docs/resources/integration_metric_prometheus#tags IntegrationMetricPrometheus#tags}
  */
  readonly tags?: string;
}

export function integrationMetricPrometheusCloudwatchV3ToTerraform(struct?: IntegrationMetricPrometheusCloudwatchV3OutputReference | IntegrationMetricPrometheusCloudwatchV3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iam_external_id: cdktf.stringToTerraform(struct!.iamExternalId),
    iam_role: cdktf.stringToTerraform(struct!.iamRole),
    region: cdktf.stringToTerraform(struct!.region),
    tags: cdktf.stringToTerraform(struct!.tags),
  }
}


export function integrationMetricPrometheusCloudwatchV3ToHclTerraform(struct?: IntegrationMetricPrometheusCloudwatchV3OutputReference | IntegrationMetricPrometheusCloudwatchV3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iam_external_id: {
      value: cdktf.stringToHclTerraform(struct!.iamExternalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iam_role: {
      value: cdktf.stringToHclTerraform(struct!.iamRole),
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
    tags: {
      value: cdktf.stringToHclTerraform(struct!.tags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationMetricPrometheusCloudwatchV3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationMetricPrometheusCloudwatchV3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iamExternalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamExternalId = this._iamExternalId;
    }
    if (this._iamRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamRole = this._iamRole;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationMetricPrometheusCloudwatchV3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._iamExternalId = undefined;
      this._iamRole = undefined;
      this._region = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._iamExternalId = value.iamExternalId;
      this._iamRole = value.iamRole;
      this._region = value.region;
      this._tags = value.tags;
    }
  }

  // iam_external_id - computed: false, optional: false, required: true
  private _iamExternalId?: string; 
  public get iamExternalId() {
    return this.getStringAttribute('iam_external_id');
  }
  public set iamExternalId(value: string) {
    this._iamExternalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamExternalIdInput() {
    return this._iamExternalId;
  }

  // iam_role - computed: false, optional: false, required: true
  private _iamRole?: string; 
  public get iamRole() {
    return this.getStringAttribute('iam_role');
  }
  public set iamRole(value: string) {
    this._iamRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleInput() {
    return this._iamRole;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface IntegrationMetricPrometheusDatadogV3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.40.0/docs/resources/integration_metric_prometheus#api_key IntegrationMetricPrometheus#api_key}
  */
  readonly apiKey: string;
  /**
  * Enable metric name transformation to match Datadog's RabbitMQ dashboard format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.40.0/docs/resources/integration_metric_prometheus#rabbitmq_dashboard_metrics_format IntegrationMetricPrometheus#rabbitmq_dashboard_metrics_format}
  */
  readonly rabbitmqDashboardMetricsFormat?: boolean | cdktf.IResolvable;
  /**
  * Datadog region; us1, us3, us5, or eu1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.40.0/docs/resources/integration_metric_prometheus#region IntegrationMetricPrometheus#region}
  */
  readonly region: string;
  /**
  * tags. E.g. env=prod,service=web
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.40.0/docs/resources/integration_metric_prometheus#tags IntegrationMetricPrometheus#tags}
  */
  readonly tags?: string;
}

export function integrationMetricPrometheusDatadogV3ToTerraform(struct?: IntegrationMetricPrometheusDatadogV3OutputReference | IntegrationMetricPrometheusDatadogV3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    rabbitmq_dashboard_metrics_format: cdktf.booleanToTerraform(struct!.rabbitmqDashboardMetricsFormat),
    region: cdktf.stringToTerraform(struct!.region),
    tags: cdktf.stringToTerraform(struct!.tags),
  }
}


export function integrationMetricPrometheusDatadogV3ToHclTerraform(struct?: IntegrationMetricPrometheusDatadogV3OutputReference | IntegrationMetricPrometheusDatadogV3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rabbitmq_dashboard_metrics_format: {
      value: cdktf.booleanToHclTerraform(struct!.rabbitmqDashboardMetricsFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.stringToHclTerraform(struct!.tags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationMetricPrometheusDatadogV3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationMetricPrometheusDatadogV3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._rabbitmqDashboardMetricsFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.rabbitmqDashboardMetricsFormat = this._rabbitmqDashboardMetricsFormat;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationMetricPrometheusDatadogV3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKey = undefined;
      this._rabbitmqDashboardMetricsFormat = undefined;
      this._region = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKey = value.apiKey;
      this._rabbitmqDashboardMetricsFormat = value.rabbitmqDashboardMetricsFormat;
      this._region = value.region;
      this._tags = value.tags;
    }
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // rabbitmq_dashboard_metrics_format - computed: false, optional: true, required: false
  private _rabbitmqDashboardMetricsFormat?: boolean | cdktf.IResolvable; 
  public get rabbitmqDashboardMetricsFormat() {
    return this.getBooleanAttribute('rabbitmq_dashboard_metrics_format');
  }
  public set rabbitmqDashboardMetricsFormat(value: boolean | cdktf.IResolvable) {
    this._rabbitmqDashboardMetricsFormat = value;
  }
  public resetRabbitmqDashboardMetricsFormat() {
    this._rabbitmqDashboardMetricsFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rabbitmqDashboardMetricsFormatInput() {
    return this._rabbitmqDashboardMetricsFormat;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface IntegrationMetricPrometheusDynatrace {
  /**
  * Dynatrace access token with 'Ingest metrics' permission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.40.0/docs/resources/integration_metric_prometheus#access_token IntegrationMetricPrometheus#access_token}
  */
  readonly accessToken: string;
  /**
  * Dynatrace environment ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.40.0/docs/resources/integration_metric_prometheus#environment_id IntegrationMetricPrometheus#environment_id}
  */
  readonly environmentId: string;
  /**
  * tags. E.g. env=prod,service=web
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.40.0/docs/resources/integration_metric_prometheus#tags IntegrationMetricPrometheus#tags}
  */
  readonly tags?: string;
}

export function integrationMetricPrometheusDynatraceToTerraform(struct?: IntegrationMetricPrometheusDynatraceOutputReference | IntegrationMetricPrometheusDynatrace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    environment_id: cdktf.stringToTerraform(struct!.environmentId),
    tags: cdktf.stringToTerraform(struct!.tags),
  }
}


export function integrationMetricPrometheusDynatraceToHclTerraform(struct?: IntegrationMetricPrometheusDynatraceOutputReference | IntegrationMetricPrometheusDynatrace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token: {
      value: cdktf.stringToHclTerraform(struct!.accessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_id: {
      value: cdktf.stringToHclTerraform(struct!.environmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.stringToHclTerraform(struct!.tags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationMetricPrometheusDynatraceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationMetricPrometheusDynatrace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._environmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentId = this._environmentId;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationMetricPrometheusDynatrace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessToken = undefined;
      this._environmentId = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessToken = value.accessToken;
      this._environmentId = value.environmentId;
      this._tags = value.tags;
    }
  }

  // access_token - computed: false, optional: false, required: true
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface IntegrationMetricPrometheusNewrelicV3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.40.0/docs/resources/integration_metric_prometheus#api_key IntegrationMetricPrometheus#api_key}
  */
  readonly apiKey: string;
  /**
  * New Relic region; eu or us
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.40.0/docs/resources/integration_metric_prometheus#region IntegrationMetricPrometheus#region}
  */
  readonly region: string;
  /**
  * tags. E.g. env=prod,service=web
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.40.0/docs/resources/integration_metric_prometheus#tags IntegrationMetricPrometheus#tags}
  */
  readonly tags?: string;
}

export function integrationMetricPrometheusNewrelicV3ToTerraform(struct?: IntegrationMetricPrometheusNewrelicV3OutputReference | IntegrationMetricPrometheusNewrelicV3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    region: cdktf.stringToTerraform(struct!.region),
    tags: cdktf.stringToTerraform(struct!.tags),
  }
}


export function integrationMetricPrometheusNewrelicV3ToHclTerraform(struct?: IntegrationMetricPrometheusNewrelicV3OutputReference | IntegrationMetricPrometheusNewrelicV3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
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
    tags: {
      value: cdktf.stringToHclTerraform(struct!.tags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationMetricPrometheusNewrelicV3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationMetricPrometheusNewrelicV3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationMetricPrometheusNewrelicV3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKey = undefined;
      this._region = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKey = value.apiKey;
      this._region = value.region;
      this._tags = value.tags;
    }
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface IntegrationMetricPrometheusSplunkV2 {
  /**
  * Splunk HEC endpoint. E.g. https://your-instance-id.splunkcloud.com:8088/services/collector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.40.0/docs/resources/integration_metric_prometheus#endpoint IntegrationMetricPrometheus#endpoint}
  */
  readonly endpoint: string;
  /**
  * tags. E.g. env=prod,service=web
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.40.0/docs/resources/integration_metric_prometheus#tags IntegrationMetricPrometheus#tags}
  */
  readonly tags?: string;
  /**
  * Splunk HEC token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.40.0/docs/resources/integration_metric_prometheus#token IntegrationMetricPrometheus#token}
  */
  readonly token: string;
}

export function integrationMetricPrometheusSplunkV2ToTerraform(struct?: IntegrationMetricPrometheusSplunkV2OutputReference | IntegrationMetricPrometheusSplunkV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    tags: cdktf.stringToTerraform(struct!.tags),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function integrationMetricPrometheusSplunkV2ToHclTerraform(struct?: IntegrationMetricPrometheusSplunkV2OutputReference | IntegrationMetricPrometheusSplunkV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.stringToHclTerraform(struct!.tags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationMetricPrometheusSplunkV2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationMetricPrometheusSplunkV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationMetricPrometheusSplunkV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoint = undefined;
      this._tags = undefined;
      this._token = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoint = value.endpoint;
      this._tags = value.tags;
      this._token = value.token;
    }
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface IntegrationMetricPrometheusStackdriverV2 {
  /**
  * Base64-encoded Google service account key JSON file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.40.0/docs/resources/integration_metric_prometheus#credentials_file IntegrationMetricPrometheus#credentials_file}
  */
  readonly credentialsFile: string;
  /**
  * tags. E.g. env=prod,service=web
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.40.0/docs/resources/integration_metric_prometheus#tags IntegrationMetricPrometheus#tags}
  */
  readonly tags?: string;
}

export function integrationMetricPrometheusStackdriverV2ToTerraform(struct?: IntegrationMetricPrometheusStackdriverV2OutputReference | IntegrationMetricPrometheusStackdriverV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials_file: cdktf.stringToTerraform(struct!.credentialsFile),
    tags: cdktf.stringToTerraform(struct!.tags),
  }
}


export function integrationMetricPrometheusStackdriverV2ToHclTerraform(struct?: IntegrationMetricPrometheusStackdriverV2OutputReference | IntegrationMetricPrometheusStackdriverV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials_file: {
      value: cdktf.stringToHclTerraform(struct!.credentialsFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.stringToHclTerraform(struct!.tags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationMetricPrometheusStackdriverV2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationMetricPrometheusStackdriverV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialsFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsFile = this._credentialsFile;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationMetricPrometheusStackdriverV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._credentialsFile = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._credentialsFile = value.credentialsFile;
      this._tags = value.tags;
    }
  }

  // client_email - computed: true, optional: false, required: false
  public get clientEmail() {
    return this.getStringAttribute('client_email');
  }

  // credentials_file - computed: false, optional: false, required: true
  private _credentialsFile?: string; 
  public get credentialsFile() {
    return this.getStringAttribute('credentials_file');
  }
  public set credentialsFile(value: string) {
    this._credentialsFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsFileInput() {
    return this._credentialsFile;
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // private_key_id - computed: true, optional: false, required: false
  public get privateKeyId() {
    return this.getStringAttribute('private_key_id');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.40.0/docs/resources/integration_metric_prometheus cloudamqp_integration_metric_prometheus}
*/
export class IntegrationMetricPrometheus extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudamqp_integration_metric_prometheus";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationMetricPrometheus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationMetricPrometheus to import
  * @param importFromId The id of the existing IntegrationMetricPrometheus that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.40.0/docs/resources/integration_metric_prometheus#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationMetricPrometheus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudamqp_integration_metric_prometheus", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.40.0/docs/resources/integration_metric_prometheus cloudamqp_integration_metric_prometheus} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationMetricPrometheusConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationMetricPrometheusConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudamqp_integration_metric_prometheus',
      terraformGeneratorMetadata: {
        providerName: 'cloudamqp',
        providerVersion: '1.40.0',
        providerVersionConstraint: '1.40.0'
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
    this._instanceId = config.instanceId;
    this._metricsFilter = config.metricsFilter;
    this._azureMonitor.internalValue = config.azureMonitor;
    this._cloudwatchV3.internalValue = config.cloudwatchV3;
    this._datadogV3.internalValue = config.datadogV3;
    this._dynatrace.internalValue = config.dynatrace;
    this._newrelicV3.internalValue = config.newrelicV3;
    this._splunkV2.internalValue = config.splunkV2;
    this._stackdriverV2.internalValue = config.stackdriverV2;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // metrics_filter - computed: true, optional: true, required: false
  private _metricsFilter?: string[]; 
  public get metricsFilter() {
    return this.getListAttribute('metrics_filter');
  }
  public set metricsFilter(value: string[]) {
    this._metricsFilter = value;
  }
  public resetMetricsFilter() {
    this._metricsFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsFilterInput() {
    return this._metricsFilter;
  }

  // azure_monitor - computed: false, optional: true, required: false
  private _azureMonitor = new IntegrationMetricPrometheusAzureMonitorOutputReference(this, "azure_monitor");
  public get azureMonitor() {
    return this._azureMonitor;
  }
  public putAzureMonitor(value: IntegrationMetricPrometheusAzureMonitor) {
    this._azureMonitor.internalValue = value;
  }
  public resetAzureMonitor() {
    this._azureMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureMonitorInput() {
    return this._azureMonitor.internalValue;
  }

  // cloudwatch_v3 - computed: false, optional: true, required: false
  private _cloudwatchV3 = new IntegrationMetricPrometheusCloudwatchV3OutputReference(this, "cloudwatch_v3");
  public get cloudwatchV3() {
    return this._cloudwatchV3;
  }
  public putCloudwatchV3(value: IntegrationMetricPrometheusCloudwatchV3) {
    this._cloudwatchV3.internalValue = value;
  }
  public resetCloudwatchV3() {
    this._cloudwatchV3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchV3Input() {
    return this._cloudwatchV3.internalValue;
  }

  // datadog_v3 - computed: false, optional: true, required: false
  private _datadogV3 = new IntegrationMetricPrometheusDatadogV3OutputReference(this, "datadog_v3");
  public get datadogV3() {
    return this._datadogV3;
  }
  public putDatadogV3(value: IntegrationMetricPrometheusDatadogV3) {
    this._datadogV3.internalValue = value;
  }
  public resetDatadogV3() {
    this._datadogV3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogV3Input() {
    return this._datadogV3.internalValue;
  }

  // dynatrace - computed: false, optional: true, required: false
  private _dynatrace = new IntegrationMetricPrometheusDynatraceOutputReference(this, "dynatrace");
  public get dynatrace() {
    return this._dynatrace;
  }
  public putDynatrace(value: IntegrationMetricPrometheusDynatrace) {
    this._dynatrace.internalValue = value;
  }
  public resetDynatrace() {
    this._dynatrace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceInput() {
    return this._dynatrace.internalValue;
  }

  // newrelic_v3 - computed: false, optional: true, required: false
  private _newrelicV3 = new IntegrationMetricPrometheusNewrelicV3OutputReference(this, "newrelic_v3");
  public get newrelicV3() {
    return this._newrelicV3;
  }
  public putNewrelicV3(value: IntegrationMetricPrometheusNewrelicV3) {
    this._newrelicV3.internalValue = value;
  }
  public resetNewrelicV3() {
    this._newrelicV3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newrelicV3Input() {
    return this._newrelicV3.internalValue;
  }

  // splunk_v2 - computed: false, optional: true, required: false
  private _splunkV2 = new IntegrationMetricPrometheusSplunkV2OutputReference(this, "splunk_v2");
  public get splunkV2() {
    return this._splunkV2;
  }
  public putSplunkV2(value: IntegrationMetricPrometheusSplunkV2) {
    this._splunkV2.internalValue = value;
  }
  public resetSplunkV2() {
    this._splunkV2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkV2Input() {
    return this._splunkV2.internalValue;
  }

  // stackdriver_v2 - computed: false, optional: true, required: false
  private _stackdriverV2 = new IntegrationMetricPrometheusStackdriverV2OutputReference(this, "stackdriver_v2");
  public get stackdriverV2() {
    return this._stackdriverV2;
  }
  public putStackdriverV2(value: IntegrationMetricPrometheusStackdriverV2) {
    this._stackdriverV2.internalValue = value;
  }
  public resetStackdriverV2() {
    this._stackdriverV2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackdriverV2Input() {
    return this._stackdriverV2.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.numberToTerraform(this._instanceId),
      metrics_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._metricsFilter),
      azure_monitor: integrationMetricPrometheusAzureMonitorToTerraform(this._azureMonitor.internalValue),
      cloudwatch_v3: integrationMetricPrometheusCloudwatchV3ToTerraform(this._cloudwatchV3.internalValue),
      datadog_v3: integrationMetricPrometheusDatadogV3ToTerraform(this._datadogV3.internalValue),
      dynatrace: integrationMetricPrometheusDynatraceToTerraform(this._dynatrace.internalValue),
      newrelic_v3: integrationMetricPrometheusNewrelicV3ToTerraform(this._newrelicV3.internalValue),
      splunk_v2: integrationMetricPrometheusSplunkV2ToTerraform(this._splunkV2.internalValue),
      stackdriver_v2: integrationMetricPrometheusStackdriverV2ToTerraform(this._stackdriverV2.internalValue),
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
      instance_id: {
        value: cdktf.numberToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metrics_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._metricsFilter),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      azure_monitor: {
        value: integrationMetricPrometheusAzureMonitorToHclTerraform(this._azureMonitor.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IntegrationMetricPrometheusAzureMonitorList",
      },
      cloudwatch_v3: {
        value: integrationMetricPrometheusCloudwatchV3ToHclTerraform(this._cloudwatchV3.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IntegrationMetricPrometheusCloudwatchV3List",
      },
      datadog_v3: {
        value: integrationMetricPrometheusDatadogV3ToHclTerraform(this._datadogV3.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IntegrationMetricPrometheusDatadogV3List",
      },
      dynatrace: {
        value: integrationMetricPrometheusDynatraceToHclTerraform(this._dynatrace.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IntegrationMetricPrometheusDynatraceList",
      },
      newrelic_v3: {
        value: integrationMetricPrometheusNewrelicV3ToHclTerraform(this._newrelicV3.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IntegrationMetricPrometheusNewrelicV3List",
      },
      splunk_v2: {
        value: integrationMetricPrometheusSplunkV2ToHclTerraform(this._splunkV2.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IntegrationMetricPrometheusSplunkV2List",
      },
      stackdriver_v2: {
        value: integrationMetricPrometheusStackdriverV2ToHclTerraform(this._stackdriverV2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IntegrationMetricPrometheusStackdriverV2List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
