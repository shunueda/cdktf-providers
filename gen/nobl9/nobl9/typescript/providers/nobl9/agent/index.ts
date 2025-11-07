// https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AgentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The type of the Agent. Check [Supported Agent types | Nobl9 Documentation](https://docs.nobl9.com/Sources/)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#agent_type Agent#agent_type}
  */
  readonly agentType: string;
  /**
  * Optional description of the resource. Here, you can add details about who is responsible for the integration (team/owner) or the purpose of creating it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#description Agent#description}
  */
  readonly description?: string;
  /**
  * User-friendly display name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#display_name Agent#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#id Agent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique name of the resource, must conform to the naming convention from [DNS RFC1123](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#name Agent#name}
  */
  readonly name: string;
  /**
  * Name of the Nobl9 project the resource sits in, must conform to the naming convention from [DNS RFC1123](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#project Agent#project}
  */
  readonly project: string;
  /**
  * Release channel of the created data source [stable/beta]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#release_channel Agent#release_channel}
  */
  readonly releaseChannel?: string;
  /**
  * This value indicated whether the field was a source of metrics and/or services. 'source_of' is deprecated and not used anywhere; however, it's kept for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#source_of Agent#source_of}
  */
  readonly sourceOf?: string[];
  /**
  * amazon_prometheus_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#amazon_prometheus_config Agent#amazon_prometheus_config}
  */
  readonly amazonPrometheusConfig?: AgentAmazonPrometheusConfig;
  /**
  * appdynamics_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#appdynamics_config Agent#appdynamics_config}
  */
  readonly appdynamicsConfig?: AgentAppdynamicsConfig;
  /**
  * azure_monitor_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#azure_monitor_config Agent#azure_monitor_config}
  */
  readonly azureMonitorConfig?: AgentAzureMonitorConfig;
  /**
  * bigquery_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#bigquery_config Agent#bigquery_config}
  */
  readonly bigqueryConfig?: AgentBigqueryConfig;
  /**
  * cloudwatch_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#cloudwatch_config Agent#cloudwatch_config}
  */
  readonly cloudwatchConfig?: AgentCloudwatchConfig;
  /**
  * datadog_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#datadog_config Agent#datadog_config}
  */
  readonly datadogConfig?: AgentDatadogConfig;
  /**
  * dynatrace_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#dynatrace_config Agent#dynatrace_config}
  */
  readonly dynatraceConfig?: AgentDynatraceConfig;
  /**
  * elasticsearch_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#elasticsearch_config Agent#elasticsearch_config}
  */
  readonly elasticsearchConfig?: AgentElasticsearchConfig;
  /**
  * gcm_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#gcm_config Agent#gcm_config}
  */
  readonly gcmConfig?: AgentGcmConfig;
  /**
  * grafana_loki_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#grafana_loki_config Agent#grafana_loki_config}
  */
  readonly grafanaLokiConfig?: AgentGrafanaLokiConfig;
  /**
  * graphite_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#graphite_config Agent#graphite_config}
  */
  readonly graphiteConfig?: AgentGraphiteConfig;
  /**
  * historical_data_retrieval block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#historical_data_retrieval Agent#historical_data_retrieval}
  */
  readonly historicalDataRetrieval?: AgentHistoricalDataRetrieval;
  /**
  * honeycomb_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#honeycomb_config Agent#honeycomb_config}
  */
  readonly honeycombConfig?: AgentHoneycombConfig;
  /**
  * influxdb_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#influxdb_config Agent#influxdb_config}
  */
  readonly influxdbConfig?: AgentInfluxdbConfig;
  /**
  * instana_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#instana_config Agent#instana_config}
  */
  readonly instanaConfig?: AgentInstanaConfig;
  /**
  * lightstep_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#lightstep_config Agent#lightstep_config}
  */
  readonly lightstepConfig?: AgentLightstepConfig;
  /**
  * logic_monitor_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#logic_monitor_config Agent#logic_monitor_config}
  */
  readonly logicMonitorConfig?: AgentLogicMonitorConfig;
  /**
  * newrelic_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#newrelic_config Agent#newrelic_config}
  */
  readonly newrelicConfig?: AgentNewrelicConfig;
  /**
  * opentsdb_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#opentsdb_config Agent#opentsdb_config}
  */
  readonly opentsdbConfig?: AgentOpentsdbConfig;
  /**
  * pingdom_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#pingdom_config Agent#pingdom_config}
  */
  readonly pingdomConfig?: AgentPingdomConfig;
  /**
  * prometheus_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#prometheus_config Agent#prometheus_config}
  */
  readonly prometheusConfig?: AgentPrometheusConfig;
  /**
  * query_delay block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#query_delay Agent#query_delay}
  */
  readonly queryDelay?: AgentQueryDelay;
  /**
  * redshift_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#redshift_config Agent#redshift_config}
  */
  readonly redshiftConfig?: AgentRedshiftConfig;
  /**
  * splunk_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#splunk_config Agent#splunk_config}
  */
  readonly splunkConfig?: AgentSplunkConfig;
  /**
  * splunk_observability_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#splunk_observability_config Agent#splunk_observability_config}
  */
  readonly splunkObservabilityConfig?: AgentSplunkObservabilityConfig;
  /**
  * sumologic_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#sumologic_config Agent#sumologic_config}
  */
  readonly sumologicConfig?: AgentSumologicConfig;
  /**
  * thousandeyes_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#thousandeyes_config Agent#thousandeyes_config}
  */
  readonly thousandeyesConfig?: AgentThousandeyesConfig;
}
export interface AgentAmazonPrometheusConfig {
  /**
  * AWS region e.g., eu-central-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#region Agent#region}
  */
  readonly region: string;
  /**
  * Base URL to Amazon Prometheus server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#url Agent#url}
  */
  readonly url: string;
}

export function agentAmazonPrometheusConfigToTerraform(struct?: AgentAmazonPrometheusConfigOutputReference | AgentAmazonPrometheusConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: cdktf.stringToTerraform(struct!.region),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function agentAmazonPrometheusConfigToHclTerraform(struct?: AgentAmazonPrometheusConfigOutputReference | AgentAmazonPrometheusConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
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

export class AgentAmazonPrometheusConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgentAmazonPrometheusConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentAmazonPrometheusConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._region = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._region = value.region;
      this._url = value.url;
    }
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
export interface AgentAppdynamicsConfig {
  /**
  * Base URL to the AppDynamics Controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#url Agent#url}
  */
  readonly url: string;
}

export function agentAppdynamicsConfigToTerraform(struct?: AgentAppdynamicsConfigOutputReference | AgentAppdynamicsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function agentAppdynamicsConfigToHclTerraform(struct?: AgentAppdynamicsConfigOutputReference | AgentAppdynamicsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class AgentAppdynamicsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgentAppdynamicsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentAppdynamicsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
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
export interface AgentAzureMonitorConfig {
  /**
  * Azure Tenant Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#tenant_id Agent#tenant_id}
  */
  readonly tenantId: string;
}

export function agentAzureMonitorConfigToTerraform(struct?: AgentAzureMonitorConfigOutputReference | AgentAzureMonitorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function agentAzureMonitorConfigToHclTerraform(struct?: AgentAzureMonitorConfigOutputReference | AgentAzureMonitorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgentAzureMonitorConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgentAzureMonitorConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentAzureMonitorConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tenantId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tenantId = value.tenantId;
    }
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface AgentBigqueryConfig {
}

export function agentBigqueryConfigToTerraform(struct?: AgentBigqueryConfigOutputReference | AgentBigqueryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function agentBigqueryConfigToHclTerraform(struct?: AgentBigqueryConfigOutputReference | AgentBigqueryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AgentBigqueryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgentBigqueryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentBigqueryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface AgentCloudwatchConfig {
}

export function agentCloudwatchConfigToTerraform(struct?: AgentCloudwatchConfigOutputReference | AgentCloudwatchConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function agentCloudwatchConfigToHclTerraform(struct?: AgentCloudwatchConfigOutputReference | AgentCloudwatchConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AgentCloudwatchConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgentCloudwatchConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentCloudwatchConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface AgentDatadogConfig {
  /**
  * Datadog SaaS instance that corresponds to one of Datadog's available locations (see [Datadog docs](https://docs.datadoghq.com/getting_started/site/#access-the-datadog-site)for an up to date list):
  *   - `datadoghq.com` (formerly referred to as `com`)
  *   - `us3.datadoghq.com`
  *   - `us5.datadoghq.com`
  *   - `datadoghq.eu` (formerly referred to as `eu`)
  *   - `ddog-gov.com`
  *   - `ap1.datadoghq.com`
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#site Agent#site}
  */
  readonly site: string;
}

export function agentDatadogConfigToTerraform(struct?: AgentDatadogConfigOutputReference | AgentDatadogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site: cdktf.stringToTerraform(struct!.site),
  }
}


export function agentDatadogConfigToHclTerraform(struct?: AgentDatadogConfigOutputReference | AgentDatadogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class AgentDatadogConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgentDatadogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._site !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentDatadogConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._site = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._site = value.site;
    }
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
export interface AgentDynatraceConfig {
  /**
  * Dynatrace API URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#url Agent#url}
  */
  readonly url: string;
}

export function agentDynatraceConfigToTerraform(struct?: AgentDynatraceConfigOutputReference | AgentDynatraceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function agentDynatraceConfigToHclTerraform(struct?: AgentDynatraceConfigOutputReference | AgentDynatraceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class AgentDynatraceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgentDynatraceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentDynatraceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
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
export interface AgentElasticsearchConfig {
  /**
  * API URL endpoint to the Elasticsearch's instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#url Agent#url}
  */
  readonly url: string;
}

export function agentElasticsearchConfigToTerraform(struct?: AgentElasticsearchConfigOutputReference | AgentElasticsearchConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function agentElasticsearchConfigToHclTerraform(struct?: AgentElasticsearchConfigOutputReference | AgentElasticsearchConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class AgentElasticsearchConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgentElasticsearchConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentElasticsearchConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
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
export interface AgentGcmConfig {
}

export function agentGcmConfigToTerraform(struct?: AgentGcmConfigOutputReference | AgentGcmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function agentGcmConfigToHclTerraform(struct?: AgentGcmConfigOutputReference | AgentGcmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AgentGcmConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgentGcmConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentGcmConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface AgentGrafanaLokiConfig {
  /**
  * API URL endpoint to the Grafana Loki instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#url Agent#url}
  */
  readonly url: string;
}

export function agentGrafanaLokiConfigToTerraform(struct?: AgentGrafanaLokiConfigOutputReference | AgentGrafanaLokiConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function agentGrafanaLokiConfigToHclTerraform(struct?: AgentGrafanaLokiConfigOutputReference | AgentGrafanaLokiConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class AgentGrafanaLokiConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgentGrafanaLokiConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentGrafanaLokiConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
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
export interface AgentGraphiteConfig {
  /**
  * API URL endpoint to the Graphite's instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#url Agent#url}
  */
  readonly url: string;
}

export function agentGraphiteConfigToTerraform(struct?: AgentGraphiteConfigOutputReference | AgentGraphiteConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function agentGraphiteConfigToHclTerraform(struct?: AgentGraphiteConfigOutputReference | AgentGraphiteConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class AgentGraphiteConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgentGraphiteConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentGraphiteConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
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
export interface AgentHistoricalDataRetrievalDefaultDuration {
  /**
  * Must be one of Minute, Hour, or Day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#unit Agent#unit}
  */
  readonly unit: string;
  /**
  * Must be an integer greater than or equal to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#value Agent#value}
  */
  readonly value: number;
}

export function agentHistoricalDataRetrievalDefaultDurationToTerraform(struct?: AgentHistoricalDataRetrievalDefaultDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function agentHistoricalDataRetrievalDefaultDurationToHclTerraform(struct?: AgentHistoricalDataRetrievalDefaultDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgentHistoricalDataRetrievalDefaultDurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AgentHistoricalDataRetrievalDefaultDuration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentHistoricalDataRetrievalDefaultDuration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AgentHistoricalDataRetrievalDefaultDurationList extends cdktf.ComplexList {
  public internalValue? : AgentHistoricalDataRetrievalDefaultDuration[] | cdktf.IResolvable

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
  public get(index: number): AgentHistoricalDataRetrievalDefaultDurationOutputReference {
    return new AgentHistoricalDataRetrievalDefaultDurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AgentHistoricalDataRetrievalMaxDuration {
  /**
  * Must be one of Minute, Hour, or Day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#unit Agent#unit}
  */
  readonly unit: string;
  /**
  * Must be an integer greater than or equal to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#value Agent#value}
  */
  readonly value: number;
}

export function agentHistoricalDataRetrievalMaxDurationToTerraform(struct?: AgentHistoricalDataRetrievalMaxDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function agentHistoricalDataRetrievalMaxDurationToHclTerraform(struct?: AgentHistoricalDataRetrievalMaxDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgentHistoricalDataRetrievalMaxDurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AgentHistoricalDataRetrievalMaxDuration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentHistoricalDataRetrievalMaxDuration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AgentHistoricalDataRetrievalMaxDurationList extends cdktf.ComplexList {
  public internalValue? : AgentHistoricalDataRetrievalMaxDuration[] | cdktf.IResolvable

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
  public get(index: number): AgentHistoricalDataRetrievalMaxDurationOutputReference {
    return new AgentHistoricalDataRetrievalMaxDurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AgentHistoricalDataRetrieval {
  /**
  * default_duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#default_duration Agent#default_duration}
  */
  readonly defaultDuration: AgentHistoricalDataRetrievalDefaultDuration[] | cdktf.IResolvable;
  /**
  * max_duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#max_duration Agent#max_duration}
  */
  readonly maxDuration: AgentHistoricalDataRetrievalMaxDuration[] | cdktf.IResolvable;
}

export function agentHistoricalDataRetrievalToTerraform(struct?: AgentHistoricalDataRetrievalOutputReference | AgentHistoricalDataRetrieval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_duration: cdktf.listMapper(agentHistoricalDataRetrievalDefaultDurationToTerraform, true)(struct!.defaultDuration),
    max_duration: cdktf.listMapper(agentHistoricalDataRetrievalMaxDurationToTerraform, true)(struct!.maxDuration),
  }
}


export function agentHistoricalDataRetrievalToHclTerraform(struct?: AgentHistoricalDataRetrievalOutputReference | AgentHistoricalDataRetrieval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_duration: {
      value: cdktf.listMapperHcl(agentHistoricalDataRetrievalDefaultDurationToHclTerraform, true)(struct!.defaultDuration),
      isBlock: true,
      type: "list",
      storageClassType: "AgentHistoricalDataRetrievalDefaultDurationList",
    },
    max_duration: {
      value: cdktf.listMapperHcl(agentHistoricalDataRetrievalMaxDurationToHclTerraform, true)(struct!.maxDuration),
      isBlock: true,
      type: "list",
      storageClassType: "AgentHistoricalDataRetrievalMaxDurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgentHistoricalDataRetrievalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgentHistoricalDataRetrieval | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultDuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultDuration = this._defaultDuration?.internalValue;
    }
    if (this._maxDuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDuration = this._maxDuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentHistoricalDataRetrieval | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultDuration.internalValue = undefined;
      this._maxDuration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultDuration.internalValue = value.defaultDuration;
      this._maxDuration.internalValue = value.maxDuration;
    }
  }

  // default_duration - computed: false, optional: false, required: true
  private _defaultDuration = new AgentHistoricalDataRetrievalDefaultDurationList(this, "default_duration", false);
  public get defaultDuration() {
    return this._defaultDuration;
  }
  public putDefaultDuration(value: AgentHistoricalDataRetrievalDefaultDuration[] | cdktf.IResolvable) {
    this._defaultDuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDurationInput() {
    return this._defaultDuration.internalValue;
  }

  // max_duration - computed: false, optional: false, required: true
  private _maxDuration = new AgentHistoricalDataRetrievalMaxDurationList(this, "max_duration", false);
  public get maxDuration() {
    return this._maxDuration;
  }
  public putMaxDuration(value: AgentHistoricalDataRetrievalMaxDuration[] | cdktf.IResolvable) {
    this._maxDuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDurationInput() {
    return this._maxDuration.internalValue;
  }
}
export interface AgentHoneycombConfig {
}

export function agentHoneycombConfigToTerraform(struct?: AgentHoneycombConfigOutputReference | AgentHoneycombConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function agentHoneycombConfigToHclTerraform(struct?: AgentHoneycombConfigOutputReference | AgentHoneycombConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AgentHoneycombConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgentHoneycombConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentHoneycombConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface AgentInfluxdbConfig {
  /**
  * API URL endpoint to the InfluxDB's instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#url Agent#url}
  */
  readonly url: string;
}

export function agentInfluxdbConfigToTerraform(struct?: AgentInfluxdbConfigOutputReference | AgentInfluxdbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function agentInfluxdbConfigToHclTerraform(struct?: AgentInfluxdbConfigOutputReference | AgentInfluxdbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class AgentInfluxdbConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgentInfluxdbConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentInfluxdbConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
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
export interface AgentInstanaConfig {
  /**
  * API URL endpoint to the InfluxDB's instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#url Agent#url}
  */
  readonly url: string;
}

export function agentInstanaConfigToTerraform(struct?: AgentInstanaConfigOutputReference | AgentInstanaConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function agentInstanaConfigToHclTerraform(struct?: AgentInstanaConfigOutputReference | AgentInstanaConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class AgentInstanaConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgentInstanaConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentInstanaConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
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
export interface AgentLightstepConfig {
  /**
  * Organization name registered in Lightstep.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#organization Agent#organization}
  */
  readonly organization: string;
  /**
  * Name of the Lightstep project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#project Agent#project}
  */
  readonly project: string;
  /**
  * Lightstep API URL. Nobl9 will use https://api.lightstep.com if empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#url Agent#url}
  */
  readonly url?: string;
}

export function agentLightstepConfigToTerraform(struct?: AgentLightstepConfigOutputReference | AgentLightstepConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    organization: cdktf.stringToTerraform(struct!.organization),
    project: cdktf.stringToTerraform(struct!.project),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function agentLightstepConfigToHclTerraform(struct?: AgentLightstepConfigOutputReference | AgentLightstepConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    organization: {
      value: cdktf.stringToHclTerraform(struct!.organization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
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

export class AgentLightstepConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgentLightstepConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentLightstepConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._organization = undefined;
      this._project = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._organization = value.organization;
      this._project = value.project;
      this._url = value.url;
    }
  }

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
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

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface AgentLogicMonitorConfig {
  /**
  * LogicMonitor Account name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#account Agent#account}
  */
  readonly account: string;
}

export function agentLogicMonitorConfigToTerraform(struct?: AgentLogicMonitorConfigOutputReference | AgentLogicMonitorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: cdktf.stringToTerraform(struct!.account),
  }
}


export function agentLogicMonitorConfigToHclTerraform(struct?: AgentLogicMonitorConfigOutputReference | AgentLogicMonitorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account: {
      value: cdktf.stringToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgentLogicMonitorConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgentLogicMonitorConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentLogicMonitorConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._account = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._account = value.account;
    }
  }

  // account - computed: false, optional: false, required: true
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }
}
export interface AgentNewrelicConfig {
  /**
  * ID number assigned to the New Relic user account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#account_id Agent#account_id}
  */
  readonly accountId: string;
}

export function agentNewrelicConfigToTerraform(struct?: AgentNewrelicConfigOutputReference | AgentNewrelicConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
  }
}


export function agentNewrelicConfigToHclTerraform(struct?: AgentNewrelicConfigOutputReference | AgentNewrelicConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgentNewrelicConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgentNewrelicConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentNewrelicConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountId = value.accountId;
    }
  }

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }
}
export interface AgentOpentsdbConfig {
  /**
  * OpenTSDB cluster URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#url Agent#url}
  */
  readonly url: string;
}

export function agentOpentsdbConfigToTerraform(struct?: AgentOpentsdbConfigOutputReference | AgentOpentsdbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function agentOpentsdbConfigToHclTerraform(struct?: AgentOpentsdbConfigOutputReference | AgentOpentsdbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class AgentOpentsdbConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgentOpentsdbConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentOpentsdbConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
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
export interface AgentPingdomConfig {
}

export function agentPingdomConfigToTerraform(struct?: AgentPingdomConfigOutputReference | AgentPingdomConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function agentPingdomConfigToHclTerraform(struct?: AgentPingdomConfigOutputReference | AgentPingdomConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AgentPingdomConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgentPingdomConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentPingdomConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface AgentPrometheusConfig {
  /**
  * Base URL to Prometheus server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#url Agent#url}
  */
  readonly url: string;
}

export function agentPrometheusConfigToTerraform(struct?: AgentPrometheusConfigOutputReference | AgentPrometheusConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function agentPrometheusConfigToHclTerraform(struct?: AgentPrometheusConfigOutputReference | AgentPrometheusConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class AgentPrometheusConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgentPrometheusConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentPrometheusConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
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
export interface AgentQueryDelay {
  /**
  * Must be one of Minute or Second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#unit Agent#unit}
  */
  readonly unit: string;
  /**
  * Must be an integer greater than or equal to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#value Agent#value}
  */
  readonly value: number;
}

export function agentQueryDelayToTerraform(struct?: AgentQueryDelayOutputReference | AgentQueryDelay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function agentQueryDelayToHclTerraform(struct?: AgentQueryDelayOutputReference | AgentQueryDelay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgentQueryDelayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgentQueryDelay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentQueryDelay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface AgentRedshiftConfig {
}

export function agentRedshiftConfigToTerraform(struct?: AgentRedshiftConfigOutputReference | AgentRedshiftConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function agentRedshiftConfigToHclTerraform(struct?: AgentRedshiftConfigOutputReference | AgentRedshiftConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AgentRedshiftConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgentRedshiftConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentRedshiftConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface AgentSplunkConfig {
  /**
  * Base API URL to the Splunk Search app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#url Agent#url}
  */
  readonly url: string;
}

export function agentSplunkConfigToTerraform(struct?: AgentSplunkConfigOutputReference | AgentSplunkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function agentSplunkConfigToHclTerraform(struct?: AgentSplunkConfigOutputReference | AgentSplunkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class AgentSplunkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgentSplunkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentSplunkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
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
export interface AgentSplunkObservabilityConfig {
  /**
  * SplunkObservability Realm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#realm Agent#realm}
  */
  readonly realm: string;
}

export function agentSplunkObservabilityConfigToTerraform(struct?: AgentSplunkObservabilityConfigOutputReference | AgentSplunkObservabilityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    realm: cdktf.stringToTerraform(struct!.realm),
  }
}


export function agentSplunkObservabilityConfigToHclTerraform(struct?: AgentSplunkObservabilityConfigOutputReference | AgentSplunkObservabilityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    realm: {
      value: cdktf.stringToHclTerraform(struct!.realm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgentSplunkObservabilityConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgentSplunkObservabilityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._realm !== undefined) {
      hasAnyValues = true;
      internalValueResult.realm = this._realm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentSplunkObservabilityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._realm = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._realm = value.realm;
    }
  }

  // realm - computed: false, optional: false, required: true
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }
}
export interface AgentSumologicConfig {
  /**
  * Sumo Logic API URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#url Agent#url}
  */
  readonly url: string;
}

export function agentSumologicConfigToTerraform(struct?: AgentSumologicConfigOutputReference | AgentSumologicConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function agentSumologicConfigToHclTerraform(struct?: AgentSumologicConfigOutputReference | AgentSumologicConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class AgentSumologicConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgentSumologicConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentSumologicConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
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
export interface AgentThousandeyesConfig {
}

export function agentThousandeyesConfigToTerraform(struct?: AgentThousandeyesConfigOutputReference | AgentThousandeyesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function agentThousandeyesConfigToHclTerraform(struct?: AgentThousandeyesConfigOutputReference | AgentThousandeyesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AgentThousandeyesConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgentThousandeyesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgentThousandeyesConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent nobl9_agent}
*/
export class Agent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nobl9_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Agent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Agent to import
  * @param importFromId The id of the existing Agent that should be imported. Refer to the {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Agent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nobl9_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/agent nobl9_agent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AgentConfig
  */
  public constructor(scope: Construct, id: string, config: AgentConfig) {
    super(scope, id, {
      terraformResourceType: 'nobl9_agent',
      terraformGeneratorMetadata: {
        providerName: 'nobl9',
        providerVersion: '0.44.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agentType = config.agentType;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._releaseChannel = config.releaseChannel;
    this._sourceOf = config.sourceOf;
    this._amazonPrometheusConfig.internalValue = config.amazonPrometheusConfig;
    this._appdynamicsConfig.internalValue = config.appdynamicsConfig;
    this._azureMonitorConfig.internalValue = config.azureMonitorConfig;
    this._bigqueryConfig.internalValue = config.bigqueryConfig;
    this._cloudwatchConfig.internalValue = config.cloudwatchConfig;
    this._datadogConfig.internalValue = config.datadogConfig;
    this._dynatraceConfig.internalValue = config.dynatraceConfig;
    this._elasticsearchConfig.internalValue = config.elasticsearchConfig;
    this._gcmConfig.internalValue = config.gcmConfig;
    this._grafanaLokiConfig.internalValue = config.grafanaLokiConfig;
    this._graphiteConfig.internalValue = config.graphiteConfig;
    this._historicalDataRetrieval.internalValue = config.historicalDataRetrieval;
    this._honeycombConfig.internalValue = config.honeycombConfig;
    this._influxdbConfig.internalValue = config.influxdbConfig;
    this._instanaConfig.internalValue = config.instanaConfig;
    this._lightstepConfig.internalValue = config.lightstepConfig;
    this._logicMonitorConfig.internalValue = config.logicMonitorConfig;
    this._newrelicConfig.internalValue = config.newrelicConfig;
    this._opentsdbConfig.internalValue = config.opentsdbConfig;
    this._pingdomConfig.internalValue = config.pingdomConfig;
    this._prometheusConfig.internalValue = config.prometheusConfig;
    this._queryDelay.internalValue = config.queryDelay;
    this._redshiftConfig.internalValue = config.redshiftConfig;
    this._splunkConfig.internalValue = config.splunkConfig;
    this._splunkObservabilityConfig.internalValue = config.splunkObservabilityConfig;
    this._sumologicConfig.internalValue = config.sumologicConfig;
    this._thousandeyesConfig.internalValue = config.thousandeyesConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_type - computed: false, optional: false, required: true
  private _agentType?: string; 
  public get agentType() {
    return this.getStringAttribute('agent_type');
  }
  public set agentType(value: string) {
    this._agentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentTypeInput() {
    return this._agentType;
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // release_channel - computed: true, optional: true, required: false
  private _releaseChannel?: string; 
  public get releaseChannel() {
    return this.getStringAttribute('release_channel');
  }
  public set releaseChannel(value: string) {
    this._releaseChannel = value;
  }
  public resetReleaseChannel() {
    this._releaseChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseChannelInput() {
    return this._releaseChannel;
  }

  // source_of - computed: false, optional: true, required: false
  private _sourceOf?: string[]; 
  public get sourceOf() {
    return this.getListAttribute('source_of');
  }
  public set sourceOf(value: string[]) {
    this._sourceOf = value;
  }
  public resetSourceOf() {
    this._sourceOf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceOfInput() {
    return this._sourceOf;
  }

  // status - computed: true, optional: false, required: false
  private _status = new cdktf.StringMap(this, "status");
  public get status() {
    return this._status;
  }

  // amazon_prometheus_config - computed: false, optional: true, required: false
  private _amazonPrometheusConfig = new AgentAmazonPrometheusConfigOutputReference(this, "amazon_prometheus_config");
  public get amazonPrometheusConfig() {
    return this._amazonPrometheusConfig;
  }
  public putAmazonPrometheusConfig(value: AgentAmazonPrometheusConfig) {
    this._amazonPrometheusConfig.internalValue = value;
  }
  public resetAmazonPrometheusConfig() {
    this._amazonPrometheusConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonPrometheusConfigInput() {
    return this._amazonPrometheusConfig.internalValue;
  }

  // appdynamics_config - computed: false, optional: true, required: false
  private _appdynamicsConfig = new AgentAppdynamicsConfigOutputReference(this, "appdynamics_config");
  public get appdynamicsConfig() {
    return this._appdynamicsConfig;
  }
  public putAppdynamicsConfig(value: AgentAppdynamicsConfig) {
    this._appdynamicsConfig.internalValue = value;
  }
  public resetAppdynamicsConfig() {
    this._appdynamicsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appdynamicsConfigInput() {
    return this._appdynamicsConfig.internalValue;
  }

  // azure_monitor_config - computed: false, optional: true, required: false
  private _azureMonitorConfig = new AgentAzureMonitorConfigOutputReference(this, "azure_monitor_config");
  public get azureMonitorConfig() {
    return this._azureMonitorConfig;
  }
  public putAzureMonitorConfig(value: AgentAzureMonitorConfig) {
    this._azureMonitorConfig.internalValue = value;
  }
  public resetAzureMonitorConfig() {
    this._azureMonitorConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureMonitorConfigInput() {
    return this._azureMonitorConfig.internalValue;
  }

  // bigquery_config - computed: false, optional: true, required: false
  private _bigqueryConfig = new AgentBigqueryConfigOutputReference(this, "bigquery_config");
  public get bigqueryConfig() {
    return this._bigqueryConfig;
  }
  public putBigqueryConfig(value: AgentBigqueryConfig) {
    this._bigqueryConfig.internalValue = value;
  }
  public resetBigqueryConfig() {
    this._bigqueryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryConfigInput() {
    return this._bigqueryConfig.internalValue;
  }

  // cloudwatch_config - computed: false, optional: true, required: false
  private _cloudwatchConfig = new AgentCloudwatchConfigOutputReference(this, "cloudwatch_config");
  public get cloudwatchConfig() {
    return this._cloudwatchConfig;
  }
  public putCloudwatchConfig(value: AgentCloudwatchConfig) {
    this._cloudwatchConfig.internalValue = value;
  }
  public resetCloudwatchConfig() {
    this._cloudwatchConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchConfigInput() {
    return this._cloudwatchConfig.internalValue;
  }

  // datadog_config - computed: false, optional: true, required: false
  private _datadogConfig = new AgentDatadogConfigOutputReference(this, "datadog_config");
  public get datadogConfig() {
    return this._datadogConfig;
  }
  public putDatadogConfig(value: AgentDatadogConfig) {
    this._datadogConfig.internalValue = value;
  }
  public resetDatadogConfig() {
    this._datadogConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogConfigInput() {
    return this._datadogConfig.internalValue;
  }

  // dynatrace_config - computed: false, optional: true, required: false
  private _dynatraceConfig = new AgentDynatraceConfigOutputReference(this, "dynatrace_config");
  public get dynatraceConfig() {
    return this._dynatraceConfig;
  }
  public putDynatraceConfig(value: AgentDynatraceConfig) {
    this._dynatraceConfig.internalValue = value;
  }
  public resetDynatraceConfig() {
    this._dynatraceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceConfigInput() {
    return this._dynatraceConfig.internalValue;
  }

  // elasticsearch_config - computed: false, optional: true, required: false
  private _elasticsearchConfig = new AgentElasticsearchConfigOutputReference(this, "elasticsearch_config");
  public get elasticsearchConfig() {
    return this._elasticsearchConfig;
  }
  public putElasticsearchConfig(value: AgentElasticsearchConfig) {
    this._elasticsearchConfig.internalValue = value;
  }
  public resetElasticsearchConfig() {
    this._elasticsearchConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchConfigInput() {
    return this._elasticsearchConfig.internalValue;
  }

  // gcm_config - computed: false, optional: true, required: false
  private _gcmConfig = new AgentGcmConfigOutputReference(this, "gcm_config");
  public get gcmConfig() {
    return this._gcmConfig;
  }
  public putGcmConfig(value: AgentGcmConfig) {
    this._gcmConfig.internalValue = value;
  }
  public resetGcmConfig() {
    this._gcmConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcmConfigInput() {
    return this._gcmConfig.internalValue;
  }

  // grafana_loki_config - computed: false, optional: true, required: false
  private _grafanaLokiConfig = new AgentGrafanaLokiConfigOutputReference(this, "grafana_loki_config");
  public get grafanaLokiConfig() {
    return this._grafanaLokiConfig;
  }
  public putGrafanaLokiConfig(value: AgentGrafanaLokiConfig) {
    this._grafanaLokiConfig.internalValue = value;
  }
  public resetGrafanaLokiConfig() {
    this._grafanaLokiConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaLokiConfigInput() {
    return this._grafanaLokiConfig.internalValue;
  }

  // graphite_config - computed: false, optional: true, required: false
  private _graphiteConfig = new AgentGraphiteConfigOutputReference(this, "graphite_config");
  public get graphiteConfig() {
    return this._graphiteConfig;
  }
  public putGraphiteConfig(value: AgentGraphiteConfig) {
    this._graphiteConfig.internalValue = value;
  }
  public resetGraphiteConfig() {
    this._graphiteConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphiteConfigInput() {
    return this._graphiteConfig.internalValue;
  }

  // historical_data_retrieval - computed: false, optional: true, required: false
  private _historicalDataRetrieval = new AgentHistoricalDataRetrievalOutputReference(this, "historical_data_retrieval");
  public get historicalDataRetrieval() {
    return this._historicalDataRetrieval;
  }
  public putHistoricalDataRetrieval(value: AgentHistoricalDataRetrieval) {
    this._historicalDataRetrieval.internalValue = value;
  }
  public resetHistoricalDataRetrieval() {
    this._historicalDataRetrieval.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historicalDataRetrievalInput() {
    return this._historicalDataRetrieval.internalValue;
  }

  // honeycomb_config - computed: false, optional: true, required: false
  private _honeycombConfig = new AgentHoneycombConfigOutputReference(this, "honeycomb_config");
  public get honeycombConfig() {
    return this._honeycombConfig;
  }
  public putHoneycombConfig(value: AgentHoneycombConfig) {
    this._honeycombConfig.internalValue = value;
  }
  public resetHoneycombConfig() {
    this._honeycombConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get honeycombConfigInput() {
    return this._honeycombConfig.internalValue;
  }

  // influxdb_config - computed: false, optional: true, required: false
  private _influxdbConfig = new AgentInfluxdbConfigOutputReference(this, "influxdb_config");
  public get influxdbConfig() {
    return this._influxdbConfig;
  }
  public putInfluxdbConfig(value: AgentInfluxdbConfig) {
    this._influxdbConfig.internalValue = value;
  }
  public resetInfluxdbConfig() {
    this._influxdbConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get influxdbConfigInput() {
    return this._influxdbConfig.internalValue;
  }

  // instana_config - computed: false, optional: true, required: false
  private _instanaConfig = new AgentInstanaConfigOutputReference(this, "instana_config");
  public get instanaConfig() {
    return this._instanaConfig;
  }
  public putInstanaConfig(value: AgentInstanaConfig) {
    this._instanaConfig.internalValue = value;
  }
  public resetInstanaConfig() {
    this._instanaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanaConfigInput() {
    return this._instanaConfig.internalValue;
  }

  // lightstep_config - computed: false, optional: true, required: false
  private _lightstepConfig = new AgentLightstepConfigOutputReference(this, "lightstep_config");
  public get lightstepConfig() {
    return this._lightstepConfig;
  }
  public putLightstepConfig(value: AgentLightstepConfig) {
    this._lightstepConfig.internalValue = value;
  }
  public resetLightstepConfig() {
    this._lightstepConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightstepConfigInput() {
    return this._lightstepConfig.internalValue;
  }

  // logic_monitor_config - computed: false, optional: true, required: false
  private _logicMonitorConfig = new AgentLogicMonitorConfigOutputReference(this, "logic_monitor_config");
  public get logicMonitorConfig() {
    return this._logicMonitorConfig;
  }
  public putLogicMonitorConfig(value: AgentLogicMonitorConfig) {
    this._logicMonitorConfig.internalValue = value;
  }
  public resetLogicMonitorConfig() {
    this._logicMonitorConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicMonitorConfigInput() {
    return this._logicMonitorConfig.internalValue;
  }

  // newrelic_config - computed: false, optional: true, required: false
  private _newrelicConfig = new AgentNewrelicConfigOutputReference(this, "newrelic_config");
  public get newrelicConfig() {
    return this._newrelicConfig;
  }
  public putNewrelicConfig(value: AgentNewrelicConfig) {
    this._newrelicConfig.internalValue = value;
  }
  public resetNewrelicConfig() {
    this._newrelicConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newrelicConfigInput() {
    return this._newrelicConfig.internalValue;
  }

  // opentsdb_config - computed: false, optional: true, required: false
  private _opentsdbConfig = new AgentOpentsdbConfigOutputReference(this, "opentsdb_config");
  public get opentsdbConfig() {
    return this._opentsdbConfig;
  }
  public putOpentsdbConfig(value: AgentOpentsdbConfig) {
    this._opentsdbConfig.internalValue = value;
  }
  public resetOpentsdbConfig() {
    this._opentsdbConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opentsdbConfigInput() {
    return this._opentsdbConfig.internalValue;
  }

  // pingdom_config - computed: false, optional: true, required: false
  private _pingdomConfig = new AgentPingdomConfigOutputReference(this, "pingdom_config");
  public get pingdomConfig() {
    return this._pingdomConfig;
  }
  public putPingdomConfig(value: AgentPingdomConfig) {
    this._pingdomConfig.internalValue = value;
  }
  public resetPingdomConfig() {
    this._pingdomConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingdomConfigInput() {
    return this._pingdomConfig.internalValue;
  }

  // prometheus_config - computed: false, optional: true, required: false
  private _prometheusConfig = new AgentPrometheusConfigOutputReference(this, "prometheus_config");
  public get prometheusConfig() {
    return this._prometheusConfig;
  }
  public putPrometheusConfig(value: AgentPrometheusConfig) {
    this._prometheusConfig.internalValue = value;
  }
  public resetPrometheusConfig() {
    this._prometheusConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusConfigInput() {
    return this._prometheusConfig.internalValue;
  }

  // query_delay - computed: false, optional: true, required: false
  private _queryDelay = new AgentQueryDelayOutputReference(this, "query_delay");
  public get queryDelay() {
    return this._queryDelay;
  }
  public putQueryDelay(value: AgentQueryDelay) {
    this._queryDelay.internalValue = value;
  }
  public resetQueryDelay() {
    this._queryDelay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryDelayInput() {
    return this._queryDelay.internalValue;
  }

  // redshift_config - computed: false, optional: true, required: false
  private _redshiftConfig = new AgentRedshiftConfigOutputReference(this, "redshift_config");
  public get redshiftConfig() {
    return this._redshiftConfig;
  }
  public putRedshiftConfig(value: AgentRedshiftConfig) {
    this._redshiftConfig.internalValue = value;
  }
  public resetRedshiftConfig() {
    this._redshiftConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftConfigInput() {
    return this._redshiftConfig.internalValue;
  }

  // splunk_config - computed: false, optional: true, required: false
  private _splunkConfig = new AgentSplunkConfigOutputReference(this, "splunk_config");
  public get splunkConfig() {
    return this._splunkConfig;
  }
  public putSplunkConfig(value: AgentSplunkConfig) {
    this._splunkConfig.internalValue = value;
  }
  public resetSplunkConfig() {
    this._splunkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkConfigInput() {
    return this._splunkConfig.internalValue;
  }

  // splunk_observability_config - computed: false, optional: true, required: false
  private _splunkObservabilityConfig = new AgentSplunkObservabilityConfigOutputReference(this, "splunk_observability_config");
  public get splunkObservabilityConfig() {
    return this._splunkObservabilityConfig;
  }
  public putSplunkObservabilityConfig(value: AgentSplunkObservabilityConfig) {
    this._splunkObservabilityConfig.internalValue = value;
  }
  public resetSplunkObservabilityConfig() {
    this._splunkObservabilityConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkObservabilityConfigInput() {
    return this._splunkObservabilityConfig.internalValue;
  }

  // sumologic_config - computed: false, optional: true, required: false
  private _sumologicConfig = new AgentSumologicConfigOutputReference(this, "sumologic_config");
  public get sumologicConfig() {
    return this._sumologicConfig;
  }
  public putSumologicConfig(value: AgentSumologicConfig) {
    this._sumologicConfig.internalValue = value;
  }
  public resetSumologicConfig() {
    this._sumologicConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sumologicConfigInput() {
    return this._sumologicConfig.internalValue;
  }

  // thousandeyes_config - computed: false, optional: true, required: false
  private _thousandeyesConfig = new AgentThousandeyesConfigOutputReference(this, "thousandeyes_config");
  public get thousandeyesConfig() {
    return this._thousandeyesConfig;
  }
  public putThousandeyesConfig(value: AgentThousandeyesConfig) {
    this._thousandeyesConfig.internalValue = value;
  }
  public resetThousandeyesConfig() {
    this._thousandeyesConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thousandeyesConfigInput() {
    return this._thousandeyesConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_type: cdktf.stringToTerraform(this._agentType),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      release_channel: cdktf.stringToTerraform(this._releaseChannel),
      source_of: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceOf),
      amazon_prometheus_config: agentAmazonPrometheusConfigToTerraform(this._amazonPrometheusConfig.internalValue),
      appdynamics_config: agentAppdynamicsConfigToTerraform(this._appdynamicsConfig.internalValue),
      azure_monitor_config: agentAzureMonitorConfigToTerraform(this._azureMonitorConfig.internalValue),
      bigquery_config: agentBigqueryConfigToTerraform(this._bigqueryConfig.internalValue),
      cloudwatch_config: agentCloudwatchConfigToTerraform(this._cloudwatchConfig.internalValue),
      datadog_config: agentDatadogConfigToTerraform(this._datadogConfig.internalValue),
      dynatrace_config: agentDynatraceConfigToTerraform(this._dynatraceConfig.internalValue),
      elasticsearch_config: agentElasticsearchConfigToTerraform(this._elasticsearchConfig.internalValue),
      gcm_config: agentGcmConfigToTerraform(this._gcmConfig.internalValue),
      grafana_loki_config: agentGrafanaLokiConfigToTerraform(this._grafanaLokiConfig.internalValue),
      graphite_config: agentGraphiteConfigToTerraform(this._graphiteConfig.internalValue),
      historical_data_retrieval: agentHistoricalDataRetrievalToTerraform(this._historicalDataRetrieval.internalValue),
      honeycomb_config: agentHoneycombConfigToTerraform(this._honeycombConfig.internalValue),
      influxdb_config: agentInfluxdbConfigToTerraform(this._influxdbConfig.internalValue),
      instana_config: agentInstanaConfigToTerraform(this._instanaConfig.internalValue),
      lightstep_config: agentLightstepConfigToTerraform(this._lightstepConfig.internalValue),
      logic_monitor_config: agentLogicMonitorConfigToTerraform(this._logicMonitorConfig.internalValue),
      newrelic_config: agentNewrelicConfigToTerraform(this._newrelicConfig.internalValue),
      opentsdb_config: agentOpentsdbConfigToTerraform(this._opentsdbConfig.internalValue),
      pingdom_config: agentPingdomConfigToTerraform(this._pingdomConfig.internalValue),
      prometheus_config: agentPrometheusConfigToTerraform(this._prometheusConfig.internalValue),
      query_delay: agentQueryDelayToTerraform(this._queryDelay.internalValue),
      redshift_config: agentRedshiftConfigToTerraform(this._redshiftConfig.internalValue),
      splunk_config: agentSplunkConfigToTerraform(this._splunkConfig.internalValue),
      splunk_observability_config: agentSplunkObservabilityConfigToTerraform(this._splunkObservabilityConfig.internalValue),
      sumologic_config: agentSumologicConfigToTerraform(this._sumologicConfig.internalValue),
      thousandeyes_config: agentThousandeyesConfigToTerraform(this._thousandeyesConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_type: {
        value: cdktf.stringToHclTerraform(this._agentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      release_channel: {
        value: cdktf.stringToHclTerraform(this._releaseChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_of: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceOf),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      amazon_prometheus_config: {
        value: agentAmazonPrometheusConfigToHclTerraform(this._amazonPrometheusConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AgentAmazonPrometheusConfigList",
      },
      appdynamics_config: {
        value: agentAppdynamicsConfigToHclTerraform(this._appdynamicsConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AgentAppdynamicsConfigList",
      },
      azure_monitor_config: {
        value: agentAzureMonitorConfigToHclTerraform(this._azureMonitorConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AgentAzureMonitorConfigList",
      },
      bigquery_config: {
        value: agentBigqueryConfigToHclTerraform(this._bigqueryConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AgentBigqueryConfigList",
      },
      cloudwatch_config: {
        value: agentCloudwatchConfigToHclTerraform(this._cloudwatchConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AgentCloudwatchConfigList",
      },
      datadog_config: {
        value: agentDatadogConfigToHclTerraform(this._datadogConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AgentDatadogConfigList",
      },
      dynatrace_config: {
        value: agentDynatraceConfigToHclTerraform(this._dynatraceConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AgentDynatraceConfigList",
      },
      elasticsearch_config: {
        value: agentElasticsearchConfigToHclTerraform(this._elasticsearchConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AgentElasticsearchConfigList",
      },
      gcm_config: {
        value: agentGcmConfigToHclTerraform(this._gcmConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AgentGcmConfigList",
      },
      grafana_loki_config: {
        value: agentGrafanaLokiConfigToHclTerraform(this._grafanaLokiConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AgentGrafanaLokiConfigList",
      },
      graphite_config: {
        value: agentGraphiteConfigToHclTerraform(this._graphiteConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AgentGraphiteConfigList",
      },
      historical_data_retrieval: {
        value: agentHistoricalDataRetrievalToHclTerraform(this._historicalDataRetrieval.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AgentHistoricalDataRetrievalList",
      },
      honeycomb_config: {
        value: agentHoneycombConfigToHclTerraform(this._honeycombConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AgentHoneycombConfigList",
      },
      influxdb_config: {
        value: agentInfluxdbConfigToHclTerraform(this._influxdbConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AgentInfluxdbConfigList",
      },
      instana_config: {
        value: agentInstanaConfigToHclTerraform(this._instanaConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AgentInstanaConfigList",
      },
      lightstep_config: {
        value: agentLightstepConfigToHclTerraform(this._lightstepConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AgentLightstepConfigList",
      },
      logic_monitor_config: {
        value: agentLogicMonitorConfigToHclTerraform(this._logicMonitorConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AgentLogicMonitorConfigList",
      },
      newrelic_config: {
        value: agentNewrelicConfigToHclTerraform(this._newrelicConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AgentNewrelicConfigList",
      },
      opentsdb_config: {
        value: agentOpentsdbConfigToHclTerraform(this._opentsdbConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AgentOpentsdbConfigList",
      },
      pingdom_config: {
        value: agentPingdomConfigToHclTerraform(this._pingdomConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AgentPingdomConfigList",
      },
      prometheus_config: {
        value: agentPrometheusConfigToHclTerraform(this._prometheusConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AgentPrometheusConfigList",
      },
      query_delay: {
        value: agentQueryDelayToHclTerraform(this._queryDelay.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AgentQueryDelayList",
      },
      redshift_config: {
        value: agentRedshiftConfigToHclTerraform(this._redshiftConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AgentRedshiftConfigList",
      },
      splunk_config: {
        value: agentSplunkConfigToHclTerraform(this._splunkConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AgentSplunkConfigList",
      },
      splunk_observability_config: {
        value: agentSplunkObservabilityConfigToHclTerraform(this._splunkObservabilityConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AgentSplunkObservabilityConfigList",
      },
      sumologic_config: {
        value: agentSumologicConfigToHclTerraform(this._sumologicConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AgentSumologicConfigList",
      },
      thousandeyes_config: {
        value: agentThousandeyesConfigToHclTerraform(this._thousandeyesConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AgentThousandeyesConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
