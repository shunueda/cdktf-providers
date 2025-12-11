// https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/aws_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * AWS cold poll rate (in seconds). Between `60` and `1200`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/aws_integration#cold_poll_rate AwsIntegration#cold_poll_rate}
  */
  readonly coldPollRate?: number;
  /**
  * Indicates that Splunk Observability should only sync recommended statistics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/aws_integration#collect_only_recommended_stats AwsIntegration#collect_only_recommended_stats}
  */
  readonly collectOnlyRecommendedStats?: boolean | cdktf.IResolvable;
  /**
  * List of custom AWS CloudWatch namespaces to monitor. Custom namespaces contain custom metrics that you define in AWS; Splunk Observability imports the metrics so you can monitor them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/aws_integration#custom_cloudwatch_namespaces AwsIntegration#custom_cloudwatch_namespaces}
  */
  readonly customCloudwatchNamespaces?: string[];
  /**
  * Flag that controls how Splunk Observability imports usage metrics from AWS to use with AWS Cost Optimizer. If `true`, Splunk Observability imports the metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/aws_integration#enable_aws_usage AwsIntegration#enable_aws_usage}
  */
  readonly enableAwsUsage?: boolean | cdktf.IResolvable;
  /**
  * Controls how Splunk Observability checks for large amounts of data for this AWS integration. If true, Splunk Observability monitors the amount of data coming in from the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/aws_integration#enable_check_large_volume AwsIntegration#enable_check_large_volume}
  */
  readonly enableCheckLargeVolume?: boolean | cdktf.IResolvable;
  /**
  * Enables AWS logs synchronization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/aws_integration#enable_logs_sync AwsIntegration#enable_logs_sync}
  */
  readonly enableLogsSync?: boolean | cdktf.IResolvable;
  /**
  * Whether the integration is enabled or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/aws_integration#enabled AwsIntegration#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Used with `signalfx_aws_external_integration`. Use this property to specify the external id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/aws_integration#external_id AwsIntegration#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/aws_integration#id AwsIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Flag that controls how Splunk Observability imports Cloud Watch metrics. If true, Splunk Observability imports Cloud Watch metrics from AWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/aws_integration#import_cloud_watch AwsIntegration#import_cloud_watch}
  */
  readonly importCloudWatch?: boolean | cdktf.IResolvable;
  /**
  * The ID of this integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/aws_integration#integration_id AwsIntegration#integration_id}
  */
  readonly integrationId: string;
  /**
  * Used with `signalfx_aws_token_integration`. Use this property to specify the token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/aws_integration#key AwsIntegration#key}
  */
  readonly key?: string;
  /**
  * If set to true, Splunk Observability Cloud accepts data from Metric Streams managed from the AWS console. The AWS account sending the Metric Streams and the AWS account in the Splunk Observability Cloud integration have to match.Requires `use_metric_streams_sync` set to true to work.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/aws_integration#metric_streams_managed_externally AwsIntegration#metric_streams_managed_externally}
  */
  readonly metricStreamsManagedExternally?: boolean | cdktf.IResolvable;
  /**
  * A named token to use for ingest
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/aws_integration#named_token AwsIntegration#named_token}
  */
  readonly namedToken?: string;
  /**
  * AWS poll rate (in seconds). Between `60` and `600`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/aws_integration#poll_rate AwsIntegration#poll_rate}
  */
  readonly pollRate?: number;
  /**
  * List of AWS regions that Splunk Observability should monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/aws_integration#regions AwsIntegration#regions}
  */
  readonly regions: string[];
  /**
  * Used with `signalfx_aws_external_integration`. Use this property to specify the AIM role ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/aws_integration#role_arn AwsIntegration#role_arn}
  */
  readonly roleArn?: string;
  /**
  * List of AWS services that you want Splunk Observability to monitor. Each element is a string designating an AWS service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/aws_integration#services AwsIntegration#services}
  */
  readonly services?: string[];
  /**
  * Indicates that Splunk Observability should sync metrics and metadata from custom AWS namespaces only (see the `custom_namespace_sync_rule` field for details). Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/aws_integration#sync_custom_namespaces_only AwsIntegration#sync_custom_namespaces_only}
  */
  readonly syncCustomNamespacesOnly?: boolean | cdktf.IResolvable;
  /**
  * Used with `signalfx_aws_token_integration`. Use this property to specify the token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/aws_integration#token AwsIntegration#token}
  */
  readonly token?: string;
  /**
  * Enables the use of Cloudwatch Metric Streams for metrics synchronization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/aws_integration#use_metric_streams_sync AwsIntegration#use_metric_streams_sync}
  */
  readonly useMetricStreamsSync?: boolean | cdktf.IResolvable;
  /**
  * custom_namespace_sync_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/aws_integration#custom_namespace_sync_rule AwsIntegration#custom_namespace_sync_rule}
  */
  readonly customNamespaceSyncRule?: AwsIntegrationCustomNamespaceSyncRule[] | cdktf.IResolvable;
  /**
  * metric_stats_to_sync block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/aws_integration#metric_stats_to_sync AwsIntegration#metric_stats_to_sync}
  */
  readonly metricStatsToSync?: AwsIntegrationMetricStatsToSync[] | cdktf.IResolvable;
  /**
  * namespace_sync_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/aws_integration#namespace_sync_rule AwsIntegration#namespace_sync_rule}
  */
  readonly namespaceSyncRule?: AwsIntegrationNamespaceSyncRule[] | cdktf.IResolvable;
}
export interface AwsIntegrationCustomNamespaceSyncRule {
  /**
  * Controls the Splunk Observability default behavior for processing data from an AWS namespace. Splunk Observability ignores this property unless you specify the `filter_action` and `filter_source` properties. If you do specify them, use this property to control how Splunk Observability treats data that doesn't match the filter. The available actions are one of "Include" or "Exclude".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/aws_integration#default_action AwsIntegration#default_action}
  */
  readonly defaultAction?: string;
  /**
  * Controls how Splunk Observability processes data from a custom AWS namespace. The available actions are one of "Include" or "Exclude".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/aws_integration#filter_action AwsIntegration#filter_action}
  */
  readonly filterAction?: string;
  /**
  * Expression that selects the data that Splunk Observability should sync for the custom namespace associated with this sync rule. The expression uses the syntax defined for the SignalFlow `filter()` function; it can be any valid SignalFlow filter expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/aws_integration#filter_source AwsIntegration#filter_source}
  */
  readonly filterSource?: string;
  /**
  * An AWS custom namespace having custom AWS metrics that you want to sync with Splunk Observability. See the AWS documentation on publishing metrics for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/aws_integration#namespace AwsIntegration#namespace}
  */
  readonly namespace: string;
}

export function awsIntegrationCustomNamespaceSyncRuleToTerraform(struct?: AwsIntegrationCustomNamespaceSyncRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_action: cdktf.stringToTerraform(struct!.defaultAction),
    filter_action: cdktf.stringToTerraform(struct!.filterAction),
    filter_source: cdktf.stringToTerraform(struct!.filterSource),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function awsIntegrationCustomNamespaceSyncRuleToHclTerraform(struct?: AwsIntegrationCustomNamespaceSyncRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_action: {
      value: cdktf.stringToHclTerraform(struct!.defaultAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_action: {
      value: cdktf.stringToHclTerraform(struct!.filterAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_source: {
      value: cdktf.stringToHclTerraform(struct!.filterSource),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsIntegrationCustomNamespaceSyncRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsIntegrationCustomNamespaceSyncRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAction = this._defaultAction;
    }
    if (this._filterAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterAction = this._filterAction;
    }
    if (this._filterSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterSource = this._filterSource;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsIntegrationCustomNamespaceSyncRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultAction = undefined;
      this._filterAction = undefined;
      this._filterSource = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultAction = value.defaultAction;
      this._filterAction = value.filterAction;
      this._filterSource = value.filterSource;
      this._namespace = value.namespace;
    }
  }

  // default_action - computed: false, optional: true, required: false
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  public resetDefaultAction() {
    this._defaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
  }

  // filter_action - computed: false, optional: true, required: false
  private _filterAction?: string; 
  public get filterAction() {
    return this.getStringAttribute('filter_action');
  }
  public set filterAction(value: string) {
    this._filterAction = value;
  }
  public resetFilterAction() {
    this._filterAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterActionInput() {
    return this._filterAction;
  }

  // filter_source - computed: false, optional: true, required: false
  private _filterSource?: string; 
  public get filterSource() {
    return this.getStringAttribute('filter_source');
  }
  public set filterSource(value: string) {
    this._filterSource = value;
  }
  public resetFilterSource() {
    this._filterSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSourceInput() {
    return this._filterSource;
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
}

export class AwsIntegrationCustomNamespaceSyncRuleList extends cdktf.ComplexList {
  public internalValue? : AwsIntegrationCustomNamespaceSyncRule[] | cdktf.IResolvable

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
  public get(index: number): AwsIntegrationCustomNamespaceSyncRuleOutputReference {
    return new AwsIntegrationCustomNamespaceSyncRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsIntegrationMetricStatsToSync {
  /**
  * AWS metric that you want to pick statistics for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/aws_integration#metric AwsIntegration#metric}
  */
  readonly metric: string;
  /**
  * An AWS namespace having AWS metric that you want to pick statistics for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/aws_integration#namespace AwsIntegration#namespace}
  */
  readonly namespace: string;
  /**
  * AWS statistics you want to collect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/aws_integration#stats AwsIntegration#stats}
  */
  readonly stats: string[];
}

export function awsIntegrationMetricStatsToSyncToTerraform(struct?: AwsIntegrationMetricStatsToSync | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.stringToTerraform(struct!.metric),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    stats: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stats),
  }
}


export function awsIntegrationMetricStatsToSyncToHclTerraform(struct?: AwsIntegrationMetricStatsToSync | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: cdktf.stringToHclTerraform(struct!.metric),
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
    stats: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stats),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsIntegrationMetricStatsToSyncOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsIntegrationMetricStatsToSync | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._stats !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsIntegrationMetricStatsToSync | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric = undefined;
      this._namespace = undefined;
      this._stats = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric = value.metric;
      this._namespace = value.namespace;
      this._stats = value.stats;
    }
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

  // stats - computed: false, optional: false, required: true
  private _stats?: string[]; 
  public get stats() {
    return cdktf.Fn.tolist(this.getListAttribute('stats'));
  }
  public set stats(value: string[]) {
    this._stats = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats;
  }
}

export class AwsIntegrationMetricStatsToSyncList extends cdktf.ComplexList {
  public internalValue? : AwsIntegrationMetricStatsToSync[] | cdktf.IResolvable

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
  public get(index: number): AwsIntegrationMetricStatsToSyncOutputReference {
    return new AwsIntegrationMetricStatsToSyncOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsIntegrationNamespaceSyncRule {
  /**
  * Controls the Splunk Observability default behavior for processing data from an AWS namespace. Splunk Observability ignores this property unless you specify the `filter_action` and `filter_source` properties. If you do specify them, use this property to control how Splunk Observability treats data that doesn't match the filter. The available actions are one of "Include" or "Exclude".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/aws_integration#default_action AwsIntegration#default_action}
  */
  readonly defaultAction?: string;
  /**
  * Controls how Splunk Observability processes data from a custom AWS namespace. The available actions are one of "Include" or "Exclude".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/aws_integration#filter_action AwsIntegration#filter_action}
  */
  readonly filterAction?: string;
  /**
  * Expression that selects the data that Splunk Observability should sync for the custom namespace associated with this sync rule. The expression uses the syntax defined for the SignalFlow `filter()` function; it can be any valid SignalFlow filter expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/aws_integration#filter_source AwsIntegration#filter_source}
  */
  readonly filterSource?: string;
  /**
  * An AWS namespace having custom AWS metrics that you want to sync with Splunk Observability. See the AWS documentation on publishing metrics for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/aws_integration#namespace AwsIntegration#namespace}
  */
  readonly namespace: string;
}

export function awsIntegrationNamespaceSyncRuleToTerraform(struct?: AwsIntegrationNamespaceSyncRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_action: cdktf.stringToTerraform(struct!.defaultAction),
    filter_action: cdktf.stringToTerraform(struct!.filterAction),
    filter_source: cdktf.stringToTerraform(struct!.filterSource),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function awsIntegrationNamespaceSyncRuleToHclTerraform(struct?: AwsIntegrationNamespaceSyncRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_action: {
      value: cdktf.stringToHclTerraform(struct!.defaultAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_action: {
      value: cdktf.stringToHclTerraform(struct!.filterAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_source: {
      value: cdktf.stringToHclTerraform(struct!.filterSource),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsIntegrationNamespaceSyncRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsIntegrationNamespaceSyncRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAction = this._defaultAction;
    }
    if (this._filterAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterAction = this._filterAction;
    }
    if (this._filterSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterSource = this._filterSource;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsIntegrationNamespaceSyncRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultAction = undefined;
      this._filterAction = undefined;
      this._filterSource = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultAction = value.defaultAction;
      this._filterAction = value.filterAction;
      this._filterSource = value.filterSource;
      this._namespace = value.namespace;
    }
  }

  // default_action - computed: false, optional: true, required: false
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  public resetDefaultAction() {
    this._defaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
  }

  // filter_action - computed: false, optional: true, required: false
  private _filterAction?: string; 
  public get filterAction() {
    return this.getStringAttribute('filter_action');
  }
  public set filterAction(value: string) {
    this._filterAction = value;
  }
  public resetFilterAction() {
    this._filterAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterActionInput() {
    return this._filterAction;
  }

  // filter_source - computed: false, optional: true, required: false
  private _filterSource?: string; 
  public get filterSource() {
    return this.getStringAttribute('filter_source');
  }
  public set filterSource(value: string) {
    this._filterSource = value;
  }
  public resetFilterSource() {
    this._filterSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSourceInput() {
    return this._filterSource;
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
}

export class AwsIntegrationNamespaceSyncRuleList extends cdktf.ComplexList {
  public internalValue? : AwsIntegrationNamespaceSyncRule[] | cdktf.IResolvable

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
  public get(index: number): AwsIntegrationNamespaceSyncRuleOutputReference {
    return new AwsIntegrationNamespaceSyncRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/aws_integration signalfx_aws_integration}
*/
export class AwsIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "signalfx_aws_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsIntegration to import
  * @param importFromId The id of the existing AwsIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/aws_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "signalfx_aws_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/aws_integration signalfx_aws_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: AwsIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'signalfx_aws_integration',
      terraformGeneratorMetadata: {
        providerName: 'signalfx',
        providerVersion: '9.23.1',
        providerVersionConstraint: '9.23.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._coldPollRate = config.coldPollRate;
    this._collectOnlyRecommendedStats = config.collectOnlyRecommendedStats;
    this._customCloudwatchNamespaces = config.customCloudwatchNamespaces;
    this._enableAwsUsage = config.enableAwsUsage;
    this._enableCheckLargeVolume = config.enableCheckLargeVolume;
    this._enableLogsSync = config.enableLogsSync;
    this._enabled = config.enabled;
    this._externalId = config.externalId;
    this._id = config.id;
    this._importCloudWatch = config.importCloudWatch;
    this._integrationId = config.integrationId;
    this._key = config.key;
    this._metricStreamsManagedExternally = config.metricStreamsManagedExternally;
    this._namedToken = config.namedToken;
    this._pollRate = config.pollRate;
    this._regions = config.regions;
    this._roleArn = config.roleArn;
    this._services = config.services;
    this._syncCustomNamespacesOnly = config.syncCustomNamespacesOnly;
    this._token = config.token;
    this._useMetricStreamsSync = config.useMetricStreamsSync;
    this._customNamespaceSyncRule.internalValue = config.customNamespaceSyncRule;
    this._metricStatsToSync.internalValue = config.metricStatsToSync;
    this._namespaceSyncRule.internalValue = config.namespaceSyncRule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_method - computed: true, optional: false, required: false
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }

  // cold_poll_rate - computed: false, optional: true, required: false
  private _coldPollRate?: number; 
  public get coldPollRate() {
    return this.getNumberAttribute('cold_poll_rate');
  }
  public set coldPollRate(value: number) {
    this._coldPollRate = value;
  }
  public resetColdPollRate() {
    this._coldPollRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coldPollRateInput() {
    return this._coldPollRate;
  }

  // collect_only_recommended_stats - computed: false, optional: true, required: false
  private _collectOnlyRecommendedStats?: boolean | cdktf.IResolvable; 
  public get collectOnlyRecommendedStats() {
    return this.getBooleanAttribute('collect_only_recommended_stats');
  }
  public set collectOnlyRecommendedStats(value: boolean | cdktf.IResolvable) {
    this._collectOnlyRecommendedStats = value;
  }
  public resetCollectOnlyRecommendedStats() {
    this._collectOnlyRecommendedStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectOnlyRecommendedStatsInput() {
    return this._collectOnlyRecommendedStats;
  }

  // custom_cloudwatch_namespaces - computed: false, optional: true, required: false
  private _customCloudwatchNamespaces?: string[]; 
  public get customCloudwatchNamespaces() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_cloudwatch_namespaces'));
  }
  public set customCloudwatchNamespaces(value: string[]) {
    this._customCloudwatchNamespaces = value;
  }
  public resetCustomCloudwatchNamespaces() {
    this._customCloudwatchNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCloudwatchNamespacesInput() {
    return this._customCloudwatchNamespaces;
  }

  // enable_aws_usage - computed: false, optional: true, required: false
  private _enableAwsUsage?: boolean | cdktf.IResolvable; 
  public get enableAwsUsage() {
    return this.getBooleanAttribute('enable_aws_usage');
  }
  public set enableAwsUsage(value: boolean | cdktf.IResolvable) {
    this._enableAwsUsage = value;
  }
  public resetEnableAwsUsage() {
    this._enableAwsUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAwsUsageInput() {
    return this._enableAwsUsage;
  }

  // enable_check_large_volume - computed: false, optional: true, required: false
  private _enableCheckLargeVolume?: boolean | cdktf.IResolvable; 
  public get enableCheckLargeVolume() {
    return this.getBooleanAttribute('enable_check_large_volume');
  }
  public set enableCheckLargeVolume(value: boolean | cdktf.IResolvable) {
    this._enableCheckLargeVolume = value;
  }
  public resetEnableCheckLargeVolume() {
    this._enableCheckLargeVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCheckLargeVolumeInput() {
    return this._enableCheckLargeVolume;
  }

  // enable_logs_sync - computed: true, optional: true, required: false
  private _enableLogsSync?: boolean | cdktf.IResolvable; 
  public get enableLogsSync() {
    return this.getBooleanAttribute('enable_logs_sync');
  }
  public set enableLogsSync(value: boolean | cdktf.IResolvable) {
    this._enableLogsSync = value;
  }
  public resetEnableLogsSync() {
    this._enableLogsSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLogsSyncInput() {
    return this._enableLogsSync;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
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

  // import_cloud_watch - computed: false, optional: true, required: false
  private _importCloudWatch?: boolean | cdktf.IResolvable; 
  public get importCloudWatch() {
    return this.getBooleanAttribute('import_cloud_watch');
  }
  public set importCloudWatch(value: boolean | cdktf.IResolvable) {
    this._importCloudWatch = value;
  }
  public resetImportCloudWatch() {
    this._importCloudWatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importCloudWatchInput() {
    return this._importCloudWatch;
  }

  // integration_id - computed: false, optional: false, required: true
  private _integrationId?: string; 
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }
  public set integrationId(value: string) {
    this._integrationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
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

  // metric_streams_managed_externally - computed: false, optional: true, required: false
  private _metricStreamsManagedExternally?: boolean | cdktf.IResolvable; 
  public get metricStreamsManagedExternally() {
    return this.getBooleanAttribute('metric_streams_managed_externally');
  }
  public set metricStreamsManagedExternally(value: boolean | cdktf.IResolvable) {
    this._metricStreamsManagedExternally = value;
  }
  public resetMetricStreamsManagedExternally() {
    this._metricStreamsManagedExternally = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricStreamsManagedExternallyInput() {
    return this._metricStreamsManagedExternally;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // named_token - computed: false, optional: true, required: false
  private _namedToken?: string; 
  public get namedToken() {
    return this.getStringAttribute('named_token');
  }
  public set namedToken(value: string) {
    this._namedToken = value;
  }
  public resetNamedToken() {
    this._namedToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedTokenInput() {
    return this._namedToken;
  }

  // poll_rate - computed: false, optional: true, required: false
  private _pollRate?: number; 
  public get pollRate() {
    return this.getNumberAttribute('poll_rate');
  }
  public set pollRate(value: number) {
    this._pollRate = value;
  }
  public resetPollRate() {
    this._pollRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollRateInput() {
    return this._pollRate;
  }

  // regions - computed: false, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
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

  // services - computed: false, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return cdktf.Fn.tolist(this.getListAttribute('services'));
  }
  public set services(value: string[]) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }

  // sync_custom_namespaces_only - computed: false, optional: true, required: false
  private _syncCustomNamespacesOnly?: boolean | cdktf.IResolvable; 
  public get syncCustomNamespacesOnly() {
    return this.getBooleanAttribute('sync_custom_namespaces_only');
  }
  public set syncCustomNamespacesOnly(value: boolean | cdktf.IResolvable) {
    this._syncCustomNamespacesOnly = value;
  }
  public resetSyncCustomNamespacesOnly() {
    this._syncCustomNamespacesOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncCustomNamespacesOnlyInput() {
    return this._syncCustomNamespacesOnly;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // use_metric_streams_sync - computed: true, optional: true, required: false
  private _useMetricStreamsSync?: boolean | cdktf.IResolvable; 
  public get useMetricStreamsSync() {
    return this.getBooleanAttribute('use_metric_streams_sync');
  }
  public set useMetricStreamsSync(value: boolean | cdktf.IResolvable) {
    this._useMetricStreamsSync = value;
  }
  public resetUseMetricStreamsSync() {
    this._useMetricStreamsSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMetricStreamsSyncInput() {
    return this._useMetricStreamsSync;
  }

  // custom_namespace_sync_rule - computed: false, optional: true, required: false
  private _customNamespaceSyncRule = new AwsIntegrationCustomNamespaceSyncRuleList(this, "custom_namespace_sync_rule", true);
  public get customNamespaceSyncRule() {
    return this._customNamespaceSyncRule;
  }
  public putCustomNamespaceSyncRule(value: AwsIntegrationCustomNamespaceSyncRule[] | cdktf.IResolvable) {
    this._customNamespaceSyncRule.internalValue = value;
  }
  public resetCustomNamespaceSyncRule() {
    this._customNamespaceSyncRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNamespaceSyncRuleInput() {
    return this._customNamespaceSyncRule.internalValue;
  }

  // metric_stats_to_sync - computed: false, optional: true, required: false
  private _metricStatsToSync = new AwsIntegrationMetricStatsToSyncList(this, "metric_stats_to_sync", true);
  public get metricStatsToSync() {
    return this._metricStatsToSync;
  }
  public putMetricStatsToSync(value: AwsIntegrationMetricStatsToSync[] | cdktf.IResolvable) {
    this._metricStatsToSync.internalValue = value;
  }
  public resetMetricStatsToSync() {
    this._metricStatsToSync.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricStatsToSyncInput() {
    return this._metricStatsToSync.internalValue;
  }

  // namespace_sync_rule - computed: false, optional: true, required: false
  private _namespaceSyncRule = new AwsIntegrationNamespaceSyncRuleList(this, "namespace_sync_rule", true);
  public get namespaceSyncRule() {
    return this._namespaceSyncRule;
  }
  public putNamespaceSyncRule(value: AwsIntegrationNamespaceSyncRule[] | cdktf.IResolvable) {
    this._namespaceSyncRule.internalValue = value;
  }
  public resetNamespaceSyncRule() {
    this._namespaceSyncRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSyncRuleInput() {
    return this._namespaceSyncRule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cold_poll_rate: cdktf.numberToTerraform(this._coldPollRate),
      collect_only_recommended_stats: cdktf.booleanToTerraform(this._collectOnlyRecommendedStats),
      custom_cloudwatch_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customCloudwatchNamespaces),
      enable_aws_usage: cdktf.booleanToTerraform(this._enableAwsUsage),
      enable_check_large_volume: cdktf.booleanToTerraform(this._enableCheckLargeVolume),
      enable_logs_sync: cdktf.booleanToTerraform(this._enableLogsSync),
      enabled: cdktf.booleanToTerraform(this._enabled),
      external_id: cdktf.stringToTerraform(this._externalId),
      id: cdktf.stringToTerraform(this._id),
      import_cloud_watch: cdktf.booleanToTerraform(this._importCloudWatch),
      integration_id: cdktf.stringToTerraform(this._integrationId),
      key: cdktf.stringToTerraform(this._key),
      metric_streams_managed_externally: cdktf.booleanToTerraform(this._metricStreamsManagedExternally),
      named_token: cdktf.stringToTerraform(this._namedToken),
      poll_rate: cdktf.numberToTerraform(this._pollRate),
      regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._regions),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      services: cdktf.listMapper(cdktf.stringToTerraform, false)(this._services),
      sync_custom_namespaces_only: cdktf.booleanToTerraform(this._syncCustomNamespacesOnly),
      token: cdktf.stringToTerraform(this._token),
      use_metric_streams_sync: cdktf.booleanToTerraform(this._useMetricStreamsSync),
      custom_namespace_sync_rule: cdktf.listMapper(awsIntegrationCustomNamespaceSyncRuleToTerraform, true)(this._customNamespaceSyncRule.internalValue),
      metric_stats_to_sync: cdktf.listMapper(awsIntegrationMetricStatsToSyncToTerraform, true)(this._metricStatsToSync.internalValue),
      namespace_sync_rule: cdktf.listMapper(awsIntegrationNamespaceSyncRuleToTerraform, true)(this._namespaceSyncRule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cold_poll_rate: {
        value: cdktf.numberToHclTerraform(this._coldPollRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      collect_only_recommended_stats: {
        value: cdktf.booleanToHclTerraform(this._collectOnlyRecommendedStats),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_cloudwatch_namespaces: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customCloudwatchNamespaces),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enable_aws_usage: {
        value: cdktf.booleanToHclTerraform(this._enableAwsUsage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_check_large_volume: {
        value: cdktf.booleanToHclTerraform(this._enableCheckLargeVolume),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_logs_sync: {
        value: cdktf.booleanToHclTerraform(this._enableLogsSync),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_id: {
        value: cdktf.stringToHclTerraform(this._externalId),
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
      import_cloud_watch: {
        value: cdktf.booleanToHclTerraform(this._importCloudWatch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      integration_id: {
        value: cdktf.stringToHclTerraform(this._integrationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric_streams_managed_externally: {
        value: cdktf.booleanToHclTerraform(this._metricStreamsManagedExternally),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      named_token: {
        value: cdktf.stringToHclTerraform(this._namedToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      poll_rate: {
        value: cdktf.numberToHclTerraform(this._pollRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      regions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._regions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      services: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._services),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sync_custom_namespaces_only: {
        value: cdktf.booleanToHclTerraform(this._syncCustomNamespacesOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_metric_streams_sync: {
        value: cdktf.booleanToHclTerraform(this._useMetricStreamsSync),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_namespace_sync_rule: {
        value: cdktf.listMapperHcl(awsIntegrationCustomNamespaceSyncRuleToHclTerraform, true)(this._customNamespaceSyncRule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsIntegrationCustomNamespaceSyncRuleList",
      },
      metric_stats_to_sync: {
        value: cdktf.listMapperHcl(awsIntegrationMetricStatsToSyncToHclTerraform, true)(this._metricStatsToSync.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsIntegrationMetricStatsToSyncList",
      },
      namespace_sync_rule: {
        value: cdktf.listMapperHcl(awsIntegrationNamespaceSyncRuleToHclTerraform, true)(this._namespaceSyncRule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsIntegrationNamespaceSyncRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
