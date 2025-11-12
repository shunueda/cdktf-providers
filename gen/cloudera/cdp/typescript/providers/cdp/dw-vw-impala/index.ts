// https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DwVwImpalaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Autoscaling configuration options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala#autoscaling DwVwImpala#autoscaling}
  */
  readonly autoscaling?: DwVwImpalaAutoscaling;
  /**
  * The availability zone for the Impala Virtual Warehouse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala#availability_zone DwVwImpala#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Impala-specific configuration options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala#aws_options DwVwImpala#aws_options}
  */
  readonly awsOptions?: DwVwImpalaAwsOptions;
  /**
  * The id of the CDW Cluster which the Impala Virtual Warehouse is attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala#cluster_id DwVwImpala#cluster_id}
  */
  readonly clusterId: string;
  /**
  * The id of the Database Catalog which the Impala Virtual Warehouse is attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala#database_catalog_id DwVwImpala#database_catalog_id}
  */
  readonly databaseCatalogId: string;
  /**
  * Enable sso for Impala VWH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala#enable_sso DwVwImpala#enable_sso}
  */
  readonly enableSso?: boolean | cdktf.IResolvable;
  /**
  * Flag to enable unified analytics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala#enable_unified_analytics DwVwImpala#enable_unified_analytics}
  */
  readonly enableUnifiedAnalytics?: boolean | cdktf.IResolvable;
  /**
  * High availability settings for Impala.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala#ha_settings DwVwImpala#ha_settings}
  */
  readonly haSettings?: DwVwImpalaHaSettings;
  /**
  * Image version of the impala.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala#image_version DwVwImpala#image_version}
  */
  readonly imageVersion?: string;
  /**
  * The instance type for the Impala Virtual Warehouse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala#instance_type DwVwImpala#instance_type}
  */
  readonly instanceType?: string;
  /**
  * The name of the Impala Virtual Warehouse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala#name DwVwImpala#name}
  */
  readonly name: string;
  /**
  * Node count of Impala.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala#node_count DwVwImpala#node_count}
  */
  readonly nodeCount?: number;
  /**
  * Platform JWT authentication flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala#platform_jwt_auth DwVwImpala#platform_jwt_auth}
  */
  readonly platformJwtAuth?: boolean | cdktf.IResolvable;
  /**
  * Polling related configuration options that could specify various values that will be used during CDP resource creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala#polling_options DwVwImpala#polling_options}
  */
  readonly pollingOptions?: DwVwImpalaPollingOptions;
  /**
  * Query isolation options for Impala.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala#query_isolation_options DwVwImpala#query_isolation_options}
  */
  readonly queryIsolationOptions?: DwVwImpalaQueryIsolationOptions;
  /**
  * Enable or disable Impala query logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala#query_log DwVwImpala#query_log}
  */
  readonly queryLog?: boolean | cdktf.IResolvable;
  /**
  * Tags associated with the Impala Virtual Warehouse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala#tags DwVwImpala#tags}
  */
  readonly tags?: DwVwImpalaTags[] | cdktf.IResolvable;
  /**
  * T-shirt size of Impala.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala#tshirt_size DwVwImpala#tshirt_size}
  */
  readonly tshirtSize?: string;
}
export interface DwVwImpalaAutoscaling {
  /**
  * Threshold for auto-suspend in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala#auto_suspend_timeout_seconds DwVwImpala#auto_suspend_timeout_seconds}
  */
  readonly autoSuspendTimeoutSeconds?: number;
  /**
  * Disable auto-suspend for the Virtual Warehouse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala#disable_auto_suspend DwVwImpala#disable_auto_suspend}
  */
  readonly disableAutoSuspend?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of available compute groups. Default: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala#max_clusters DwVwImpala#max_clusters}
  */
  readonly maxClusters?: number;
  /**
  * Minimum number of available compute groups. Default: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala#min_clusters DwVwImpala#min_clusters}
  */
  readonly minClusters?: number;
  /**
  * Scale-down threshold in seconds for Impala.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala#scale_down_delay_seconds DwVwImpala#scale_down_delay_seconds}
  */
  readonly scaleDownDelaySeconds?: number;
  /**
  * Scale-up threshold in seconds for Impala.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala#scale_up_delay_seconds DwVwImpala#scale_up_delay_seconds}
  */
  readonly scaleUpDelaySeconds?: number;
}

export function dwVwImpalaAutoscalingToTerraform(struct?: DwVwImpalaAutoscaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_suspend_timeout_seconds: cdktf.numberToTerraform(struct!.autoSuspendTimeoutSeconds),
    disable_auto_suspend: cdktf.booleanToTerraform(struct!.disableAutoSuspend),
    max_clusters: cdktf.numberToTerraform(struct!.maxClusters),
    min_clusters: cdktf.numberToTerraform(struct!.minClusters),
    scale_down_delay_seconds: cdktf.numberToTerraform(struct!.scaleDownDelaySeconds),
    scale_up_delay_seconds: cdktf.numberToTerraform(struct!.scaleUpDelaySeconds),
  }
}


export function dwVwImpalaAutoscalingToHclTerraform(struct?: DwVwImpalaAutoscaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_suspend_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.autoSuspendTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable_auto_suspend: {
      value: cdktf.booleanToHclTerraform(struct!.disableAutoSuspend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_clusters: {
      value: cdktf.numberToHclTerraform(struct!.maxClusters),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_clusters: {
      value: cdktf.numberToHclTerraform(struct!.minClusters),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_down_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.scaleDownDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_up_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.scaleUpDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DwVwImpalaAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DwVwImpalaAutoscaling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoSuspendTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoSuspendTimeoutSeconds = this._autoSuspendTimeoutSeconds;
    }
    if (this._disableAutoSuspend !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAutoSuspend = this._disableAutoSuspend;
    }
    if (this._maxClusters !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxClusters = this._maxClusters;
    }
    if (this._minClusters !== undefined) {
      hasAnyValues = true;
      internalValueResult.minClusters = this._minClusters;
    }
    if (this._scaleDownDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleDownDelaySeconds = this._scaleDownDelaySeconds;
    }
    if (this._scaleUpDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleUpDelaySeconds = this._scaleUpDelaySeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DwVwImpalaAutoscaling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoSuspendTimeoutSeconds = undefined;
      this._disableAutoSuspend = undefined;
      this._maxClusters = undefined;
      this._minClusters = undefined;
      this._scaleDownDelaySeconds = undefined;
      this._scaleUpDelaySeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoSuspendTimeoutSeconds = value.autoSuspendTimeoutSeconds;
      this._disableAutoSuspend = value.disableAutoSuspend;
      this._maxClusters = value.maxClusters;
      this._minClusters = value.minClusters;
      this._scaleDownDelaySeconds = value.scaleDownDelaySeconds;
      this._scaleUpDelaySeconds = value.scaleUpDelaySeconds;
    }
  }

  // auto_suspend_timeout_seconds - computed: true, optional: true, required: false
  private _autoSuspendTimeoutSeconds?: number; 
  public get autoSuspendTimeoutSeconds() {
    return this.getNumberAttribute('auto_suspend_timeout_seconds');
  }
  public set autoSuspendTimeoutSeconds(value: number) {
    this._autoSuspendTimeoutSeconds = value;
  }
  public resetAutoSuspendTimeoutSeconds() {
    this._autoSuspendTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSuspendTimeoutSecondsInput() {
    return this._autoSuspendTimeoutSeconds;
  }

  // disable_auto_suspend - computed: true, optional: true, required: false
  private _disableAutoSuspend?: boolean | cdktf.IResolvable; 
  public get disableAutoSuspend() {
    return this.getBooleanAttribute('disable_auto_suspend');
  }
  public set disableAutoSuspend(value: boolean | cdktf.IResolvable) {
    this._disableAutoSuspend = value;
  }
  public resetDisableAutoSuspend() {
    this._disableAutoSuspend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAutoSuspendInput() {
    return this._disableAutoSuspend;
  }

  // max_clusters - computed: true, optional: true, required: false
  private _maxClusters?: number; 
  public get maxClusters() {
    return this.getNumberAttribute('max_clusters');
  }
  public set maxClusters(value: number) {
    this._maxClusters = value;
  }
  public resetMaxClusters() {
    this._maxClusters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxClustersInput() {
    return this._maxClusters;
  }

  // min_clusters - computed: true, optional: true, required: false
  private _minClusters?: number; 
  public get minClusters() {
    return this.getNumberAttribute('min_clusters');
  }
  public set minClusters(value: number) {
    this._minClusters = value;
  }
  public resetMinClusters() {
    this._minClusters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minClustersInput() {
    return this._minClusters;
  }

  // scale_down_delay_seconds - computed: true, optional: true, required: false
  private _scaleDownDelaySeconds?: number; 
  public get scaleDownDelaySeconds() {
    return this.getNumberAttribute('scale_down_delay_seconds');
  }
  public set scaleDownDelaySeconds(value: number) {
    this._scaleDownDelaySeconds = value;
  }
  public resetScaleDownDelaySeconds() {
    this._scaleDownDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownDelaySecondsInput() {
    return this._scaleDownDelaySeconds;
  }

  // scale_up_delay_seconds - computed: true, optional: true, required: false
  private _scaleUpDelaySeconds?: number; 
  public get scaleUpDelaySeconds() {
    return this.getNumberAttribute('scale_up_delay_seconds');
  }
  public set scaleUpDelaySeconds(value: number) {
    this._scaleUpDelaySeconds = value;
  }
  public resetScaleUpDelaySeconds() {
    this._scaleUpDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleUpDelaySecondsInput() {
    return this._scaleUpDelaySeconds;
  }
}
export interface DwVwImpalaAwsOptions {
  /**
  * Defines the limit for scratch space in GiB needed by Impala for spilling queries. Valid values depend on the platform (AWS or Azure). If set, 'spillToS3Uri' cannot be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala#scratch_space_limit DwVwImpala#scratch_space_limit}
  */
  readonly scratchSpaceLimit?: number;
  /**
  * Set S3 URI in 's3://bucket/path' format to enable spilling to S3. If set, 'scratchSpaceLimit' cannot be set. Not supported on Azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala#spill_to_s3_uri DwVwImpala#spill_to_s3_uri}
  */
  readonly spillToS3Uri?: string;
}

export function dwVwImpalaAwsOptionsToTerraform(struct?: DwVwImpalaAwsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scratch_space_limit: cdktf.numberToTerraform(struct!.scratchSpaceLimit),
    spill_to_s3_uri: cdktf.stringToTerraform(struct!.spillToS3Uri),
  }
}


export function dwVwImpalaAwsOptionsToHclTerraform(struct?: DwVwImpalaAwsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scratch_space_limit: {
      value: cdktf.numberToHclTerraform(struct!.scratchSpaceLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spill_to_s3_uri: {
      value: cdktf.stringToHclTerraform(struct!.spillToS3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DwVwImpalaAwsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DwVwImpalaAwsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scratchSpaceLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.scratchSpaceLimit = this._scratchSpaceLimit;
    }
    if (this._spillToS3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.spillToS3Uri = this._spillToS3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DwVwImpalaAwsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scratchSpaceLimit = undefined;
      this._spillToS3Uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scratchSpaceLimit = value.scratchSpaceLimit;
      this._spillToS3Uri = value.spillToS3Uri;
    }
  }

  // scratch_space_limit - computed: true, optional: true, required: false
  private _scratchSpaceLimit?: number; 
  public get scratchSpaceLimit() {
    return this.getNumberAttribute('scratch_space_limit');
  }
  public set scratchSpaceLimit(value: number) {
    this._scratchSpaceLimit = value;
  }
  public resetScratchSpaceLimit() {
    this._scratchSpaceLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scratchSpaceLimitInput() {
    return this._scratchSpaceLimit;
  }

  // spill_to_s3_uri - computed: true, optional: true, required: false
  private _spillToS3Uri?: string; 
  public get spillToS3Uri() {
    return this.getStringAttribute('spill_to_s3_uri');
  }
  public set spillToS3Uri(value: string) {
    this._spillToS3Uri = value;
  }
  public resetSpillToS3Uri() {
    this._spillToS3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spillToS3UriInput() {
    return this._spillToS3Uri;
  }
}
export interface DwVwImpalaHaSettings {
  /**
  * Enables high availability for Impala catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala#enable_catalog_high_availability DwVwImpala#enable_catalog_high_availability}
  */
  readonly enableCatalogHighAvailability?: boolean | cdktf.IResolvable;
  /**
  * Enables the shutdown of the coordinator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala#enable_shutdown_of_coordinator DwVwImpala#enable_shutdown_of_coordinator}
  */
  readonly enableShutdownOfCoordinator?: boolean | cdktf.IResolvable;
  /**
  * Enables high availability for Impala Statestore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala#enable_statestore_high_availability DwVwImpala#enable_statestore_high_availability}
  */
  readonly enableStatestoreHighAvailability?: boolean | cdktf.IResolvable;
  /**
  * High Availability mode: DISABLED, ACTIVE_PASSIVE, or ACTIVE_ACTIVE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala#high_availability_mode DwVwImpala#high_availability_mode}
  */
  readonly highAvailabilityMode?: string;
  /**
  * Number of active coordinators.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala#num_of_active_coordinators DwVwImpala#num_of_active_coordinators}
  */
  readonly numOfActiveCoordinators?: number;
  /**
  * Delay in seconds before shutting down the coordinator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala#shutdown_of_coordinator_delay_secs DwVwImpala#shutdown_of_coordinator_delay_secs}
  */
  readonly shutdownOfCoordinatorDelaySecs?: number;
}

export function dwVwImpalaHaSettingsToTerraform(struct?: DwVwImpalaHaSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_catalog_high_availability: cdktf.booleanToTerraform(struct!.enableCatalogHighAvailability),
    enable_shutdown_of_coordinator: cdktf.booleanToTerraform(struct!.enableShutdownOfCoordinator),
    enable_statestore_high_availability: cdktf.booleanToTerraform(struct!.enableStatestoreHighAvailability),
    high_availability_mode: cdktf.stringToTerraform(struct!.highAvailabilityMode),
    num_of_active_coordinators: cdktf.numberToTerraform(struct!.numOfActiveCoordinators),
    shutdown_of_coordinator_delay_secs: cdktf.numberToTerraform(struct!.shutdownOfCoordinatorDelaySecs),
  }
}


export function dwVwImpalaHaSettingsToHclTerraform(struct?: DwVwImpalaHaSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_catalog_high_availability: {
      value: cdktf.booleanToHclTerraform(struct!.enableCatalogHighAvailability),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_shutdown_of_coordinator: {
      value: cdktf.booleanToHclTerraform(struct!.enableShutdownOfCoordinator),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_statestore_high_availability: {
      value: cdktf.booleanToHclTerraform(struct!.enableStatestoreHighAvailability),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    high_availability_mode: {
      value: cdktf.stringToHclTerraform(struct!.highAvailabilityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_of_active_coordinators: {
      value: cdktf.numberToHclTerraform(struct!.numOfActiveCoordinators),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shutdown_of_coordinator_delay_secs: {
      value: cdktf.numberToHclTerraform(struct!.shutdownOfCoordinatorDelaySecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DwVwImpalaHaSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DwVwImpalaHaSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableCatalogHighAvailability !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCatalogHighAvailability = this._enableCatalogHighAvailability;
    }
    if (this._enableShutdownOfCoordinator !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableShutdownOfCoordinator = this._enableShutdownOfCoordinator;
    }
    if (this._enableStatestoreHighAvailability !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableStatestoreHighAvailability = this._enableStatestoreHighAvailability;
    }
    if (this._highAvailabilityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.highAvailabilityMode = this._highAvailabilityMode;
    }
    if (this._numOfActiveCoordinators !== undefined) {
      hasAnyValues = true;
      internalValueResult.numOfActiveCoordinators = this._numOfActiveCoordinators;
    }
    if (this._shutdownOfCoordinatorDelaySecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdownOfCoordinatorDelaySecs = this._shutdownOfCoordinatorDelaySecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DwVwImpalaHaSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableCatalogHighAvailability = undefined;
      this._enableShutdownOfCoordinator = undefined;
      this._enableStatestoreHighAvailability = undefined;
      this._highAvailabilityMode = undefined;
      this._numOfActiveCoordinators = undefined;
      this._shutdownOfCoordinatorDelaySecs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableCatalogHighAvailability = value.enableCatalogHighAvailability;
      this._enableShutdownOfCoordinator = value.enableShutdownOfCoordinator;
      this._enableStatestoreHighAvailability = value.enableStatestoreHighAvailability;
      this._highAvailabilityMode = value.highAvailabilityMode;
      this._numOfActiveCoordinators = value.numOfActiveCoordinators;
      this._shutdownOfCoordinatorDelaySecs = value.shutdownOfCoordinatorDelaySecs;
    }
  }

  // enable_catalog_high_availability - computed: true, optional: true, required: false
  private _enableCatalogHighAvailability?: boolean | cdktf.IResolvable; 
  public get enableCatalogHighAvailability() {
    return this.getBooleanAttribute('enable_catalog_high_availability');
  }
  public set enableCatalogHighAvailability(value: boolean | cdktf.IResolvable) {
    this._enableCatalogHighAvailability = value;
  }
  public resetEnableCatalogHighAvailability() {
    this._enableCatalogHighAvailability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCatalogHighAvailabilityInput() {
    return this._enableCatalogHighAvailability;
  }

  // enable_shutdown_of_coordinator - computed: true, optional: true, required: false
  private _enableShutdownOfCoordinator?: boolean | cdktf.IResolvable; 
  public get enableShutdownOfCoordinator() {
    return this.getBooleanAttribute('enable_shutdown_of_coordinator');
  }
  public set enableShutdownOfCoordinator(value: boolean | cdktf.IResolvable) {
    this._enableShutdownOfCoordinator = value;
  }
  public resetEnableShutdownOfCoordinator() {
    this._enableShutdownOfCoordinator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableShutdownOfCoordinatorInput() {
    return this._enableShutdownOfCoordinator;
  }

  // enable_statestore_high_availability - computed: true, optional: true, required: false
  private _enableStatestoreHighAvailability?: boolean | cdktf.IResolvable; 
  public get enableStatestoreHighAvailability() {
    return this.getBooleanAttribute('enable_statestore_high_availability');
  }
  public set enableStatestoreHighAvailability(value: boolean | cdktf.IResolvable) {
    this._enableStatestoreHighAvailability = value;
  }
  public resetEnableStatestoreHighAvailability() {
    this._enableStatestoreHighAvailability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStatestoreHighAvailabilityInput() {
    return this._enableStatestoreHighAvailability;
  }

  // high_availability_mode - computed: true, optional: true, required: false
  private _highAvailabilityMode?: string; 
  public get highAvailabilityMode() {
    return this.getStringAttribute('high_availability_mode');
  }
  public set highAvailabilityMode(value: string) {
    this._highAvailabilityMode = value;
  }
  public resetHighAvailabilityMode() {
    this._highAvailabilityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highAvailabilityModeInput() {
    return this._highAvailabilityMode;
  }

  // num_of_active_coordinators - computed: true, optional: true, required: false
  private _numOfActiveCoordinators?: number; 
  public get numOfActiveCoordinators() {
    return this.getNumberAttribute('num_of_active_coordinators');
  }
  public set numOfActiveCoordinators(value: number) {
    this._numOfActiveCoordinators = value;
  }
  public resetNumOfActiveCoordinators() {
    this._numOfActiveCoordinators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfActiveCoordinatorsInput() {
    return this._numOfActiveCoordinators;
  }

  // shutdown_of_coordinator_delay_secs - computed: true, optional: true, required: false
  private _shutdownOfCoordinatorDelaySecs?: number; 
  public get shutdownOfCoordinatorDelaySecs() {
    return this.getNumberAttribute('shutdown_of_coordinator_delay_secs');
  }
  public set shutdownOfCoordinatorDelaySecs(value: number) {
    this._shutdownOfCoordinatorDelaySecs = value;
  }
  public resetShutdownOfCoordinatorDelaySecs() {
    this._shutdownOfCoordinatorDelaySecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownOfCoordinatorDelaySecsInput() {
    return this._shutdownOfCoordinatorDelaySecs;
  }
}
export interface DwVwImpalaPollingOptions {
  /**
  * Boolean value that specifies if Terraform should wait for resource creation/deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala#async DwVwImpala#async}
  */
  readonly async?: boolean | cdktf.IResolvable;
  /**
  * Threshold value that specifies how many times should a single call failure happen before giving up the polling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala#call_failure_threshold DwVwImpala#call_failure_threshold}
  */
  readonly callFailureThreshold?: number;
  /**
  * Timeout value in minutes that specifies for how long should the polling go for resource creation/deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala#polling_timeout DwVwImpala#polling_timeout}
  */
  readonly pollingTimeout?: number;
}

export function dwVwImpalaPollingOptionsToTerraform(struct?: DwVwImpalaPollingOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    async: cdktf.booleanToTerraform(struct!.async),
    call_failure_threshold: cdktf.numberToTerraform(struct!.callFailureThreshold),
    polling_timeout: cdktf.numberToTerraform(struct!.pollingTimeout),
  }
}


export function dwVwImpalaPollingOptionsToHclTerraform(struct?: DwVwImpalaPollingOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    async: {
      value: cdktf.booleanToHclTerraform(struct!.async),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    call_failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.callFailureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    polling_timeout: {
      value: cdktf.numberToHclTerraform(struct!.pollingTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DwVwImpalaPollingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DwVwImpalaPollingOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._async !== undefined) {
      hasAnyValues = true;
      internalValueResult.async = this._async;
    }
    if (this._callFailureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.callFailureThreshold = this._callFailureThreshold;
    }
    if (this._pollingTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollingTimeout = this._pollingTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DwVwImpalaPollingOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._async = undefined;
      this._callFailureThreshold = undefined;
      this._pollingTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._async = value.async;
      this._callFailureThreshold = value.callFailureThreshold;
      this._pollingTimeout = value.pollingTimeout;
    }
  }

  // async - computed: true, optional: true, required: false
  private _async?: boolean | cdktf.IResolvable; 
  public get async() {
    return this.getBooleanAttribute('async');
  }
  public set async(value: boolean | cdktf.IResolvable) {
    this._async = value;
  }
  public resetAsync() {
    this._async = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncInput() {
    return this._async;
  }

  // call_failure_threshold - computed: true, optional: true, required: false
  private _callFailureThreshold?: number; 
  public get callFailureThreshold() {
    return this.getNumberAttribute('call_failure_threshold');
  }
  public set callFailureThreshold(value: number) {
    this._callFailureThreshold = value;
  }
  public resetCallFailureThreshold() {
    this._callFailureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callFailureThresholdInput() {
    return this._callFailureThreshold;
  }

  // polling_timeout - computed: true, optional: true, required: false
  private _pollingTimeout?: number; 
  public get pollingTimeout() {
    return this.getNumberAttribute('polling_timeout');
  }
  public set pollingTimeout(value: number) {
    this._pollingTimeout = value;
  }
  public resetPollingTimeout() {
    this._pollingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingTimeoutInput() {
    return this._pollingTimeout;
  }
}
export interface DwVwImpalaQueryIsolationOptions {
  /**
  * Maximum number of nodes per query for isolation. Default: 0 disables isolation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala#max_nodes_per_query DwVwImpala#max_nodes_per_query}
  */
  readonly maxNodesPerQuery?: number;
  /**
  * Maximum number of queries for isolation. Default: 0 disables isolation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala#max_queries DwVwImpala#max_queries}
  */
  readonly maxQueries?: number;
}

export function dwVwImpalaQueryIsolationOptionsToTerraform(struct?: DwVwImpalaQueryIsolationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_nodes_per_query: cdktf.numberToTerraform(struct!.maxNodesPerQuery),
    max_queries: cdktf.numberToTerraform(struct!.maxQueries),
  }
}


export function dwVwImpalaQueryIsolationOptionsToHclTerraform(struct?: DwVwImpalaQueryIsolationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_nodes_per_query: {
      value: cdktf.numberToHclTerraform(struct!.maxNodesPerQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_queries: {
      value: cdktf.numberToHclTerraform(struct!.maxQueries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DwVwImpalaQueryIsolationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DwVwImpalaQueryIsolationOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxNodesPerQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNodesPerQuery = this._maxNodesPerQuery;
    }
    if (this._maxQueries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxQueries = this._maxQueries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DwVwImpalaQueryIsolationOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxNodesPerQuery = undefined;
      this._maxQueries = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxNodesPerQuery = value.maxNodesPerQuery;
      this._maxQueries = value.maxQueries;
    }
  }

  // max_nodes_per_query - computed: true, optional: true, required: false
  private _maxNodesPerQuery?: number; 
  public get maxNodesPerQuery() {
    return this.getNumberAttribute('max_nodes_per_query');
  }
  public set maxNodesPerQuery(value: number) {
    this._maxNodesPerQuery = value;
  }
  public resetMaxNodesPerQuery() {
    this._maxNodesPerQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodesPerQueryInput() {
    return this._maxNodesPerQuery;
  }

  // max_queries - computed: true, optional: true, required: false
  private _maxQueries?: number; 
  public get maxQueries() {
    return this.getNumberAttribute('max_queries');
  }
  public set maxQueries(value: number) {
    this._maxQueries = value;
  }
  public resetMaxQueries() {
    this._maxQueries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxQueriesInput() {
    return this._maxQueries;
  }
}
export interface DwVwImpalaTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala#key DwVwImpala#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala#value DwVwImpala#value}
  */
  readonly value: string;
}

export function dwVwImpalaTagsToTerraform(struct?: DwVwImpalaTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dwVwImpalaTagsToHclTerraform(struct?: DwVwImpalaTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DwVwImpalaTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DwVwImpalaTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DwVwImpalaTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DwVwImpalaTagsList extends cdktf.ComplexList {
  public internalValue? : DwVwImpalaTags[] | cdktf.IResolvable

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
  public get(index: number): DwVwImpalaTagsOutputReference {
    return new DwVwImpalaTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala cdp_dw_vw_impala}
*/
export class DwVwImpala extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cdp_dw_vw_impala";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DwVwImpala resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DwVwImpala to import
  * @param importFromId The id of the existing DwVwImpala that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DwVwImpala to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cdp_dw_vw_impala", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/dw_vw_impala cdp_dw_vw_impala} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DwVwImpalaConfig
  */
  public constructor(scope: Construct, id: string, config: DwVwImpalaConfig) {
    super(scope, id, {
      terraformResourceType: 'cdp_dw_vw_impala',
      terraformGeneratorMetadata: {
        providerName: 'cdp',
        providerVersion: '0.10.8',
        providerVersionConstraint: '0.10.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoscaling.internalValue = config.autoscaling;
    this._availabilityZone = config.availabilityZone;
    this._awsOptions.internalValue = config.awsOptions;
    this._clusterId = config.clusterId;
    this._databaseCatalogId = config.databaseCatalogId;
    this._enableSso = config.enableSso;
    this._enableUnifiedAnalytics = config.enableUnifiedAnalytics;
    this._haSettings.internalValue = config.haSettings;
    this._imageVersion = config.imageVersion;
    this._instanceType = config.instanceType;
    this._name = config.name;
    this._nodeCount = config.nodeCount;
    this._platformJwtAuth = config.platformJwtAuth;
    this._pollingOptions.internalValue = config.pollingOptions;
    this._queryIsolationOptions.internalValue = config.queryIsolationOptions;
    this._queryLog = config.queryLog;
    this._tags.internalValue = config.tags;
    this._tshirtSize = config.tshirtSize;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autoscaling - computed: true, optional: true, required: false
  private _autoscaling = new DwVwImpalaAutoscalingOutputReference(this, "autoscaling");
  public get autoscaling() {
    return this._autoscaling;
  }
  public putAutoscaling(value: DwVwImpalaAutoscaling) {
    this._autoscaling.internalValue = value;
  }
  public resetAutoscaling() {
    this._autoscaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingInput() {
    return this._autoscaling.internalValue;
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // aws_options - computed: true, optional: true, required: false
  private _awsOptions = new DwVwImpalaAwsOptionsOutputReference(this, "aws_options");
  public get awsOptions() {
    return this._awsOptions;
  }
  public putAwsOptions(value: DwVwImpalaAwsOptions) {
    this._awsOptions.internalValue = value;
  }
  public resetAwsOptions() {
    this._awsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsOptionsInput() {
    return this._awsOptions.internalValue;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // database_catalog_id - computed: false, optional: false, required: true
  private _databaseCatalogId?: string; 
  public get databaseCatalogId() {
    return this.getStringAttribute('database_catalog_id');
  }
  public set databaseCatalogId(value: string) {
    this._databaseCatalogId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseCatalogIdInput() {
    return this._databaseCatalogId;
  }

  // enable_sso - computed: true, optional: true, required: false
  private _enableSso?: boolean | cdktf.IResolvable; 
  public get enableSso() {
    return this.getBooleanAttribute('enable_sso');
  }
  public set enableSso(value: boolean | cdktf.IResolvable) {
    this._enableSso = value;
  }
  public resetEnableSso() {
    this._enableSso = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSsoInput() {
    return this._enableSso;
  }

  // enable_unified_analytics - computed: true, optional: true, required: false
  private _enableUnifiedAnalytics?: boolean | cdktf.IResolvable; 
  public get enableUnifiedAnalytics() {
    return this.getBooleanAttribute('enable_unified_analytics');
  }
  public set enableUnifiedAnalytics(value: boolean | cdktf.IResolvable) {
    this._enableUnifiedAnalytics = value;
  }
  public resetEnableUnifiedAnalytics() {
    this._enableUnifiedAnalytics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUnifiedAnalyticsInput() {
    return this._enableUnifiedAnalytics;
  }

  // ha_settings - computed: true, optional: true, required: false
  private _haSettings = new DwVwImpalaHaSettingsOutputReference(this, "ha_settings");
  public get haSettings() {
    return this._haSettings;
  }
  public putHaSettings(value: DwVwImpalaHaSettings) {
    this._haSettings.internalValue = value;
  }
  public resetHaSettings() {
    this._haSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haSettingsInput() {
    return this._haSettings.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_version - computed: true, optional: true, required: false
  private _imageVersion?: string; 
  public get imageVersion() {
    return this.getStringAttribute('image_version');
  }
  public set imageVersion(value: string) {
    this._imageVersion = value;
  }
  public resetImageVersion() {
    this._imageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionInput() {
    return this._imageVersion;
  }

  // instance_type - computed: true, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
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

  // node_count - computed: true, optional: true, required: false
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // platform_jwt_auth - computed: false, optional: true, required: false
  private _platformJwtAuth?: boolean | cdktf.IResolvable; 
  public get platformJwtAuth() {
    return this.getBooleanAttribute('platform_jwt_auth');
  }
  public set platformJwtAuth(value: boolean | cdktf.IResolvable) {
    this._platformJwtAuth = value;
  }
  public resetPlatformJwtAuth() {
    this._platformJwtAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformJwtAuthInput() {
    return this._platformJwtAuth;
  }

  // polling_options - computed: false, optional: true, required: false
  private _pollingOptions = new DwVwImpalaPollingOptionsOutputReference(this, "polling_options");
  public get pollingOptions() {
    return this._pollingOptions;
  }
  public putPollingOptions(value: DwVwImpalaPollingOptions) {
    this._pollingOptions.internalValue = value;
  }
  public resetPollingOptions() {
    this._pollingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingOptionsInput() {
    return this._pollingOptions.internalValue;
  }

  // query_isolation_options - computed: true, optional: true, required: false
  private _queryIsolationOptions = new DwVwImpalaQueryIsolationOptionsOutputReference(this, "query_isolation_options");
  public get queryIsolationOptions() {
    return this._queryIsolationOptions;
  }
  public putQueryIsolationOptions(value: DwVwImpalaQueryIsolationOptions) {
    this._queryIsolationOptions.internalValue = value;
  }
  public resetQueryIsolationOptions() {
    this._queryIsolationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryIsolationOptionsInput() {
    return this._queryIsolationOptions.internalValue;
  }

  // query_log - computed: true, optional: true, required: false
  private _queryLog?: boolean | cdktf.IResolvable; 
  public get queryLog() {
    return this.getBooleanAttribute('query_log');
  }
  public set queryLog(value: boolean | cdktf.IResolvable) {
    this._queryLog = value;
  }
  public resetQueryLog() {
    this._queryLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryLogInput() {
    return this._queryLog;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DwVwImpalaTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DwVwImpalaTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // tshirt_size - computed: false, optional: true, required: false
  private _tshirtSize?: string; 
  public get tshirtSize() {
    return this.getStringAttribute('tshirt_size');
  }
  public set tshirtSize(value: string) {
    this._tshirtSize = value;
  }
  public resetTshirtSize() {
    this._tshirtSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tshirtSizeInput() {
    return this._tshirtSize;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      autoscaling: dwVwImpalaAutoscalingToTerraform(this._autoscaling.internalValue),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      aws_options: dwVwImpalaAwsOptionsToTerraform(this._awsOptions.internalValue),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      database_catalog_id: cdktf.stringToTerraform(this._databaseCatalogId),
      enable_sso: cdktf.booleanToTerraform(this._enableSso),
      enable_unified_analytics: cdktf.booleanToTerraform(this._enableUnifiedAnalytics),
      ha_settings: dwVwImpalaHaSettingsToTerraform(this._haSettings.internalValue),
      image_version: cdktf.stringToTerraform(this._imageVersion),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      name: cdktf.stringToTerraform(this._name),
      node_count: cdktf.numberToTerraform(this._nodeCount),
      platform_jwt_auth: cdktf.booleanToTerraform(this._platformJwtAuth),
      polling_options: dwVwImpalaPollingOptionsToTerraform(this._pollingOptions.internalValue),
      query_isolation_options: dwVwImpalaQueryIsolationOptionsToTerraform(this._queryIsolationOptions.internalValue),
      query_log: cdktf.booleanToTerraform(this._queryLog),
      tags: cdktf.listMapper(dwVwImpalaTagsToTerraform, false)(this._tags.internalValue),
      tshirt_size: cdktf.stringToTerraform(this._tshirtSize),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      autoscaling: {
        value: dwVwImpalaAutoscalingToHclTerraform(this._autoscaling.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DwVwImpalaAutoscaling",
      },
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_options: {
        value: dwVwImpalaAwsOptionsToHclTerraform(this._awsOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DwVwImpalaAwsOptions",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_catalog_id: {
        value: cdktf.stringToHclTerraform(this._databaseCatalogId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_sso: {
        value: cdktf.booleanToHclTerraform(this._enableSso),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_unified_analytics: {
        value: cdktf.booleanToHclTerraform(this._enableUnifiedAnalytics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ha_settings: {
        value: dwVwImpalaHaSettingsToHclTerraform(this._haSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DwVwImpalaHaSettings",
      },
      image_version: {
        value: cdktf.stringToHclTerraform(this._imageVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
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
      node_count: {
        value: cdktf.numberToHclTerraform(this._nodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      platform_jwt_auth: {
        value: cdktf.booleanToHclTerraform(this._platformJwtAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      polling_options: {
        value: dwVwImpalaPollingOptionsToHclTerraform(this._pollingOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DwVwImpalaPollingOptions",
      },
      query_isolation_options: {
        value: dwVwImpalaQueryIsolationOptionsToHclTerraform(this._queryIsolationOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DwVwImpalaQueryIsolationOptions",
      },
      query_log: {
        value: cdktf.booleanToHclTerraform(this._queryLog),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(dwVwImpalaTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DwVwImpalaTagsList",
      },
      tshirt_size: {
        value: cdktf.stringToHclTerraform(this._tshirtSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
