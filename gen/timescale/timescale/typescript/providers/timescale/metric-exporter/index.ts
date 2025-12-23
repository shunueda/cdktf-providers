// https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/metric_exporter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetricExporterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configuration for AWS CloudWatch exporter. Configure authentication using either `role_arn` or `access_key` with `secret_key`. Cannot be used with `datadog` or `prometheus`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/metric_exporter#cloudwatch MetricExporter#cloudwatch}
  */
  readonly cloudwatch?: MetricExporterCloudwatch;
  /**
  * Configuration for Datadog exporter. Cannot be used with `prometheus` or `cloudwatch`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/metric_exporter#datadog MetricExporter#datadog}
  */
  readonly datadog?: MetricExporterDatadog;
  /**
  * Metric exporter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/metric_exporter#name MetricExporter#name}
  */
  readonly name: string;
  /**
  * Configuration for Prometheus exporter. Cannot be used with `datadog` or `cloudwatch`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/metric_exporter#prometheus MetricExporter#prometheus}
  */
  readonly prometheus?: MetricExporterPrometheus;
  /**
  * Region where the exporter will be deployed. Only services running in the same region can be attached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/metric_exporter#region MetricExporter#region}
  */
  readonly region: string;
}
export interface MetricExporterCloudwatch {
  /**
  * AWS access key ID. If provided, `secret_key` must also be set, and `role_arn` must not be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/metric_exporter#access_key MetricExporter#access_key}
  */
  readonly accessKey?: string;
  /**
  * Name of the CloudWatch Log Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/metric_exporter#log_group_name MetricExporter#log_group_name}
  */
  readonly logGroupName: string;
  /**
  * Name of the CloudWatch Log Stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/metric_exporter#log_stream_name MetricExporter#log_stream_name}
  */
  readonly logStreamName: string;
  /**
  * CloudWatch Metric Namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/metric_exporter#namespace MetricExporter#namespace}
  */
  readonly namespace: string;
  /**
  * AWS region for CloudWatch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/metric_exporter#region MetricExporter#region}
  */
  readonly region: string;
  /**
  * ARN of the IAM role to assume for CloudWatch access. If provided, `access_key` and `secret_key` must not be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/metric_exporter#role_arn MetricExporter#role_arn}
  */
  readonly roleArn?: string;
  /**
  * AWS secret access key. If provided, `access_key` must also be set, and `role_arn` must not be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/metric_exporter#secret_key MetricExporter#secret_key}
  */
  readonly secretKey?: string;
}

export function metricExporterCloudwatchToTerraform(struct?: MetricExporterCloudwatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    region: cdktf.stringToTerraform(struct!.region),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
  }
}


export function metricExporterCloudwatchToHclTerraform(struct?: MetricExporterCloudwatch | cdktf.IResolvable): any {
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
    log_stream_name: {
      value: cdktf.stringToHclTerraform(struct!.logStreamName),
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
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
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

export class MetricExporterCloudwatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MetricExporterCloudwatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricExporterCloudwatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKey = undefined;
      this._logGroupName = undefined;
      this._logStreamName = undefined;
      this._namespace = undefined;
      this._region = undefined;
      this._roleArn = undefined;
      this._secretKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKey = value.accessKey;
      this._logGroupName = value.logGroupName;
      this._logStreamName = value.logStreamName;
      this._namespace = value.namespace;
      this._region = value.region;
      this._roleArn = value.roleArn;
      this._secretKey = value.secretKey;
    }
  }

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // log_group_name - computed: false, optional: false, required: true
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name - computed: false, optional: false, required: true
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
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

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }
}
export interface MetricExporterDatadog {
  /**
  * Datadog API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/metric_exporter#api_key MetricExporter#api_key}
  */
  readonly apiKey: string;
  /**
  * Datadog site (e.g., 'datadoghq.com', 'datadoghq.eu').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/metric_exporter#site MetricExporter#site}
  */
  readonly site: string;
}

export function metricExporterDatadogToTerraform(struct?: MetricExporterDatadog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    site: cdktf.stringToTerraform(struct!.site),
  }
}


export function metricExporterDatadogToHclTerraform(struct?: MetricExporterDatadog | cdktf.IResolvable): any {
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
    site: {
      value: cdktf.stringToHclTerraform(struct!.site),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricExporterDatadogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MetricExporterDatadog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._site !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricExporterDatadog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._site = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._site = value.site;
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

  // site - computed: false, optional: false, required: true
  private _site?: string; 
  public get site() {
    return this.getStringAttribute('site');
  }
  public set site(value: string) {
    this._site = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site;
  }
}
export interface MetricExporterPrometheus {
  /**
  * Password for Prometheus basic authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/metric_exporter#password MetricExporter#password}
  */
  readonly password: string;
  /**
  * Username for Prometheus basic authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/metric_exporter#username MetricExporter#username}
  */
  readonly username: string;
}

export function metricExporterPrometheusToTerraform(struct?: MetricExporterPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function metricExporterPrometheusToHclTerraform(struct?: MetricExporterPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
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

export class MetricExporterPrometheusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MetricExporterPrometheus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricExporterPrometheus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
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

/**
* Represents a {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/metric_exporter timescale_metric_exporter}
*/
export class MetricExporter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "timescale_metric_exporter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MetricExporter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MetricExporter to import
  * @param importFromId The id of the existing MetricExporter that should be imported. Refer to the {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/metric_exporter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MetricExporter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "timescale_metric_exporter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/timescale/timescale/2.7.0/docs/resources/metric_exporter timescale_metric_exporter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetricExporterConfig
  */
  public constructor(scope: Construct, id: string, config: MetricExporterConfig) {
    super(scope, id, {
      terraformResourceType: 'timescale_metric_exporter',
      terraformGeneratorMetadata: {
        providerName: 'timescale',
        providerVersion: '2.7.0',
        providerVersionConstraint: '2.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudwatch.internalValue = config.cloudwatch;
    this._datadog.internalValue = config.datadog;
    this._name = config.name;
    this._prometheus.internalValue = config.prometheus;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloudwatch - computed: false, optional: true, required: false
  private _cloudwatch = new MetricExporterCloudwatchOutputReference(this, "cloudwatch");
  public get cloudwatch() {
    return this._cloudwatch;
  }
  public putCloudwatch(value: MetricExporterCloudwatch) {
    this._cloudwatch.internalValue = value;
  }
  public resetCloudwatch() {
    this._cloudwatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchInput() {
    return this._cloudwatch.internalValue;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // datadog - computed: false, optional: true, required: false
  private _datadog = new MetricExporterDatadogOutputReference(this, "datadog");
  public get datadog() {
    return this._datadog;
  }
  public putDatadog(value: MetricExporterDatadog) {
    this._datadog.internalValue = value;
  }
  public resetDatadog() {
    this._datadog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogInput() {
    return this._datadog.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // prometheus - computed: false, optional: true, required: false
  private _prometheus = new MetricExporterPrometheusOutputReference(this, "prometheus");
  public get prometheus() {
    return this._prometheus;
  }
  public putPrometheus(value: MetricExporterPrometheus) {
    this._prometheus.internalValue = value;
  }
  public resetPrometheus() {
    this._prometheus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusInput() {
    return this._prometheus.internalValue;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloudwatch: metricExporterCloudwatchToTerraform(this._cloudwatch.internalValue),
      datadog: metricExporterDatadogToTerraform(this._datadog.internalValue),
      name: cdktf.stringToTerraform(this._name),
      prometheus: metricExporterPrometheusToTerraform(this._prometheus.internalValue),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloudwatch: {
        value: metricExporterCloudwatchToHclTerraform(this._cloudwatch.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MetricExporterCloudwatch",
      },
      datadog: {
        value: metricExporterDatadogToHclTerraform(this._datadog.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MetricExporterDatadog",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prometheus: {
        value: metricExporterPrometheusToHclTerraform(this._prometheus.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MetricExporterPrometheus",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
