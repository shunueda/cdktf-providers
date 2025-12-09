// https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/data-sources/advanced_clusters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasAdvancedClustersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.
  * 
  * **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/data-sources/advanced_clusters#project_id DataMongodbatlasAdvancedClusters#project_id}
  */
  readonly projectId: string;
  /**
  * Controls how hardware specification fields are returned in the response. When set to true, the non-effective specs (`electable_specs`, `read_only_specs`, `analytics_specs`) fields return the hardware specifications that the client provided. When set to false (default), the non-effective specs fields show the **current** hardware specifications. Cluster auto-scaling is the primary cause for differences between initial and current hardware specifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/data-sources/advanced_clusters#use_effective_fields DataMongodbatlasAdvancedClusters#use_effective_fields}
  */
  readonly useEffectiveFields?: boolean | cdktf.IResolvable;
}
export interface DataMongodbatlasAdvancedClustersResultsAdvancedConfiguration {
}

export function dataMongodbatlasAdvancedClustersResultsAdvancedConfigurationToTerraform(struct?: DataMongodbatlasAdvancedClustersResultsAdvancedConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasAdvancedClustersResultsAdvancedConfigurationToHclTerraform(struct?: DataMongodbatlasAdvancedClustersResultsAdvancedConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMongodbatlasAdvancedClustersResultsAdvancedConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasAdvancedClustersResultsAdvancedConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // change_stream_options_pre_and_post_images_expire_after_seconds - computed: true, optional: false, required: false
  public get changeStreamOptionsPreAndPostImagesExpireAfterSeconds() {
    return this.getNumberAttribute('change_stream_options_pre_and_post_images_expire_after_seconds');
  }

  // custom_openssl_cipher_config_tls12 - computed: true, optional: false, required: false
  public get customOpensslCipherConfigTls12() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_openssl_cipher_config_tls12'));
  }

  // custom_openssl_cipher_config_tls13 - computed: true, optional: false, required: false
  public get customOpensslCipherConfigTls13() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_openssl_cipher_config_tls13'));
  }

  // default_max_time_ms - computed: true, optional: false, required: false
  public get defaultMaxTimeMs() {
    return this.getNumberAttribute('default_max_time_ms');
  }

  // default_write_concern - computed: true, optional: false, required: false
  public get defaultWriteConcern() {
    return this.getStringAttribute('default_write_concern');
  }

  // javascript_enabled - computed: true, optional: false, required: false
  public get javascriptEnabled() {
    return this.getBooleanAttribute('javascript_enabled');
  }

  // minimum_enabled_tls_protocol - computed: true, optional: false, required: false
  public get minimumEnabledTlsProtocol() {
    return this.getStringAttribute('minimum_enabled_tls_protocol');
  }

  // no_table_scan - computed: true, optional: false, required: false
  public get noTableScan() {
    return this.getBooleanAttribute('no_table_scan');
  }

  // oplog_min_retention_hours - computed: true, optional: false, required: false
  public get oplogMinRetentionHours() {
    return this.getNumberAttribute('oplog_min_retention_hours');
  }

  // oplog_size_mb - computed: true, optional: false, required: false
  public get oplogSizeMb() {
    return this.getNumberAttribute('oplog_size_mb');
  }

  // sample_refresh_interval_bi_connector - computed: true, optional: false, required: false
  public get sampleRefreshIntervalBiConnector() {
    return this.getNumberAttribute('sample_refresh_interval_bi_connector');
  }

  // sample_size_bi_connector - computed: true, optional: false, required: false
  public get sampleSizeBiConnector() {
    return this.getNumberAttribute('sample_size_bi_connector');
  }

  // tls_cipher_config_mode - computed: true, optional: false, required: false
  public get tlsCipherConfigMode() {
    return this.getStringAttribute('tls_cipher_config_mode');
  }

  // transaction_lifetime_limit_seconds - computed: true, optional: false, required: false
  public get transactionLifetimeLimitSeconds() {
    return this.getNumberAttribute('transaction_lifetime_limit_seconds');
  }
}
export interface DataMongodbatlasAdvancedClustersResultsBiConnectorConfig {
}

export function dataMongodbatlasAdvancedClustersResultsBiConnectorConfigToTerraform(struct?: DataMongodbatlasAdvancedClustersResultsBiConnectorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasAdvancedClustersResultsBiConnectorConfigToHclTerraform(struct?: DataMongodbatlasAdvancedClustersResultsBiConnectorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMongodbatlasAdvancedClustersResultsBiConnectorConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasAdvancedClustersResultsBiConnectorConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // read_preference - computed: true, optional: false, required: false
  public get readPreference() {
    return this.getStringAttribute('read_preference');
  }
}
export interface DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpoints {
}

export function dataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsToTerraform(struct?: DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsToHclTerraform(struct?: DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoint_id - computed: true, optional: false, required: false
  public get endpointId() {
    return this.getStringAttribute('endpoint_id');
  }

  // provider_name - computed: true, optional: false, required: false
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference {
    return new DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpoint {
}

export function dataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointToTerraform(struct?: DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointToHclTerraform(struct?: DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_string - computed: true, optional: false, required: false
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }

  // srv_connection_string - computed: true, optional: false, required: false
  public get srvConnectionString() {
    return this.getStringAttribute('srv_connection_string');
  }

  // srv_shard_optimized_connection_string - computed: true, optional: false, required: false
  public get srvShardOptimizedConnectionString() {
    return this.getStringAttribute('srv_shard_optimized_connection_string');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference {
    return new DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasAdvancedClustersResultsConnectionStrings {
}

export function dataMongodbatlasAdvancedClustersResultsConnectionStringsToTerraform(struct?: DataMongodbatlasAdvancedClustersResultsConnectionStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasAdvancedClustersResultsConnectionStringsToHclTerraform(struct?: DataMongodbatlasAdvancedClustersResultsConnectionStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMongodbatlasAdvancedClustersResultsConnectionStrings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasAdvancedClustersResultsConnectionStrings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // private - computed: true, optional: false, required: false
  public get private() {
    return this.getStringAttribute('private');
  }

  // private_endpoint - computed: true, optional: false, required: false
  private _privateEndpoint = new DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList(this, "private_endpoint", false);
  public get privateEndpoint() {
    return this._privateEndpoint;
  }

  // private_srv - computed: true, optional: false, required: false
  public get privateSrv() {
    return this.getStringAttribute('private_srv');
  }

  // standard - computed: true, optional: false, required: false
  public get standard() {
    return this.getStringAttribute('standard');
  }

  // standard_srv - computed: true, optional: false, required: false
  public get standardSrv() {
    return this.getStringAttribute('standard_srv');
  }
}
export interface DataMongodbatlasAdvancedClustersResultsPinnedFcv {
}

export function dataMongodbatlasAdvancedClustersResultsPinnedFcvToTerraform(struct?: DataMongodbatlasAdvancedClustersResultsPinnedFcv): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasAdvancedClustersResultsPinnedFcvToHclTerraform(struct?: DataMongodbatlasAdvancedClustersResultsPinnedFcv): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMongodbatlasAdvancedClustersResultsPinnedFcv | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasAdvancedClustersResultsPinnedFcv | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expiration_date - computed: true, optional: false, required: false
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScaling {
}

export function dataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingToTerraform(struct?: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingToHclTerraform(struct?: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compute_enabled - computed: true, optional: false, required: false
  public get computeEnabled() {
    return this.getBooleanAttribute('compute_enabled');
  }

  // compute_max_instance_size - computed: true, optional: false, required: false
  public get computeMaxInstanceSize() {
    return this.getStringAttribute('compute_max_instance_size');
  }

  // compute_min_instance_size - computed: true, optional: false, required: false
  public get computeMinInstanceSize() {
    return this.getStringAttribute('compute_min_instance_size');
  }

  // compute_scale_down_enabled - computed: true, optional: false, required: false
  public get computeScaleDownEnabled() {
    return this.getBooleanAttribute('compute_scale_down_enabled');
  }

  // disk_gb_enabled - computed: true, optional: false, required: false
  public get diskGbEnabled() {
    return this.getBooleanAttribute('disk_gb_enabled');
  }
}
export interface DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecs {
}

export function dataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsToTerraform(struct?: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsToHclTerraform(struct?: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_iops - computed: true, optional: false, required: false
  public get diskIops() {
    return this.getNumberAttribute('disk_iops');
  }

  // disk_size_gb - computed: true, optional: false, required: false
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }

  // ebs_volume_type - computed: true, optional: false, required: false
  public get ebsVolumeType() {
    return this.getStringAttribute('ebs_volume_type');
  }

  // instance_size - computed: true, optional: false, required: false
  public get instanceSize() {
    return this.getStringAttribute('instance_size');
  }

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
}
export interface DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScaling {
}

export function dataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingToTerraform(struct?: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingToHclTerraform(struct?: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compute_enabled - computed: true, optional: false, required: false
  public get computeEnabled() {
    return this.getBooleanAttribute('compute_enabled');
  }

  // compute_max_instance_size - computed: true, optional: false, required: false
  public get computeMaxInstanceSize() {
    return this.getStringAttribute('compute_max_instance_size');
  }

  // compute_min_instance_size - computed: true, optional: false, required: false
  public get computeMinInstanceSize() {
    return this.getStringAttribute('compute_min_instance_size');
  }

  // compute_scale_down_enabled - computed: true, optional: false, required: false
  public get computeScaleDownEnabled() {
    return this.getBooleanAttribute('compute_scale_down_enabled');
  }

  // disk_gb_enabled - computed: true, optional: false, required: false
  public get diskGbEnabled() {
    return this.getBooleanAttribute('disk_gb_enabled');
  }
}
export interface DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsEffectiveAnalyticsSpecs {
}

export function dataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsEffectiveAnalyticsSpecsToTerraform(struct?: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsEffectiveAnalyticsSpecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsEffectiveAnalyticsSpecsToHclTerraform(struct?: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsEffectiveAnalyticsSpecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsEffectiveAnalyticsSpecsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsEffectiveAnalyticsSpecs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsEffectiveAnalyticsSpecs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_iops - computed: true, optional: false, required: false
  public get diskIops() {
    return this.getNumberAttribute('disk_iops');
  }

  // disk_size_gb - computed: true, optional: false, required: false
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }

  // ebs_volume_type - computed: true, optional: false, required: false
  public get ebsVolumeType() {
    return this.getStringAttribute('ebs_volume_type');
  }

  // instance_size - computed: true, optional: false, required: false
  public get instanceSize() {
    return this.getStringAttribute('instance_size');
  }

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
}
export interface DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsEffectiveElectableSpecs {
}

export function dataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsEffectiveElectableSpecsToTerraform(struct?: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsEffectiveElectableSpecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsEffectiveElectableSpecsToHclTerraform(struct?: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsEffectiveElectableSpecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsEffectiveElectableSpecsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsEffectiveElectableSpecs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsEffectiveElectableSpecs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_iops - computed: true, optional: false, required: false
  public get diskIops() {
    return this.getNumberAttribute('disk_iops');
  }

  // disk_size_gb - computed: true, optional: false, required: false
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }

  // ebs_volume_type - computed: true, optional: false, required: false
  public get ebsVolumeType() {
    return this.getStringAttribute('ebs_volume_type');
  }

  // instance_size - computed: true, optional: false, required: false
  public get instanceSize() {
    return this.getStringAttribute('instance_size');
  }

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
}
export interface DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsEffectiveReadOnlySpecs {
}

export function dataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsEffectiveReadOnlySpecsToTerraform(struct?: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsEffectiveReadOnlySpecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsEffectiveReadOnlySpecsToHclTerraform(struct?: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsEffectiveReadOnlySpecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsEffectiveReadOnlySpecsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsEffectiveReadOnlySpecs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsEffectiveReadOnlySpecs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_iops - computed: true, optional: false, required: false
  public get diskIops() {
    return this.getNumberAttribute('disk_iops');
  }

  // disk_size_gb - computed: true, optional: false, required: false
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }

  // ebs_volume_type - computed: true, optional: false, required: false
  public get ebsVolumeType() {
    return this.getStringAttribute('ebs_volume_type');
  }

  // instance_size - computed: true, optional: false, required: false
  public get instanceSize() {
    return this.getStringAttribute('instance_size');
  }

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
}
export interface DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecs {
}

export function dataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsToTerraform(struct?: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsToHclTerraform(struct?: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_iops - computed: true, optional: false, required: false
  public get diskIops() {
    return this.getNumberAttribute('disk_iops');
  }

  // disk_size_gb - computed: true, optional: false, required: false
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }

  // ebs_volume_type - computed: true, optional: false, required: false
  public get ebsVolumeType() {
    return this.getStringAttribute('ebs_volume_type');
  }

  // instance_size - computed: true, optional: false, required: false
  public get instanceSize() {
    return this.getStringAttribute('instance_size');
  }

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
}
export interface DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecs {
}

export function dataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsToTerraform(struct?: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsToHclTerraform(struct?: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_iops - computed: true, optional: false, required: false
  public get diskIops() {
    return this.getNumberAttribute('disk_iops');
  }

  // disk_size_gb - computed: true, optional: false, required: false
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }

  // ebs_volume_type - computed: true, optional: false, required: false
  public get ebsVolumeType() {
    return this.getStringAttribute('ebs_volume_type');
  }

  // instance_size - computed: true, optional: false, required: false
  public get instanceSize() {
    return this.getStringAttribute('instance_size');
  }

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
}
export interface DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigs {
}

export function dataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsToTerraform(struct?: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsToHclTerraform(struct?: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // analytics_auto_scaling - computed: true, optional: false, required: false
  private _analyticsAutoScaling = new DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference(this, "analytics_auto_scaling");
  public get analyticsAutoScaling() {
    return this._analyticsAutoScaling;
  }

  // analytics_specs - computed: true, optional: false, required: false
  private _analyticsSpecs = new DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference(this, "analytics_specs");
  public get analyticsSpecs() {
    return this._analyticsSpecs;
  }

  // auto_scaling - computed: true, optional: false, required: false
  private _autoScaling = new DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference(this, "auto_scaling");
  public get autoScaling() {
    return this._autoScaling;
  }

  // backing_provider_name - computed: true, optional: false, required: false
  public get backingProviderName() {
    return this.getStringAttribute('backing_provider_name');
  }

  // effective_analytics_specs - computed: true, optional: false, required: false
  private _effectiveAnalyticsSpecs = new DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsEffectiveAnalyticsSpecsOutputReference(this, "effective_analytics_specs");
  public get effectiveAnalyticsSpecs() {
    return this._effectiveAnalyticsSpecs;
  }

  // effective_electable_specs - computed: true, optional: false, required: false
  private _effectiveElectableSpecs = new DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsEffectiveElectableSpecsOutputReference(this, "effective_electable_specs");
  public get effectiveElectableSpecs() {
    return this._effectiveElectableSpecs;
  }

  // effective_read_only_specs - computed: true, optional: false, required: false
  private _effectiveReadOnlySpecs = new DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsEffectiveReadOnlySpecsOutputReference(this, "effective_read_only_specs");
  public get effectiveReadOnlySpecs() {
    return this._effectiveReadOnlySpecs;
  }

  // electable_specs - computed: true, optional: false, required: false
  private _electableSpecs = new DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference(this, "electable_specs");
  public get electableSpecs() {
    return this._electableSpecs;
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // provider_name - computed: true, optional: false, required: false
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }

  // read_only_specs - computed: true, optional: false, required: false
  private _readOnlySpecs = new DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference(this, "read_only_specs");
  public get readOnlySpecs() {
    return this._readOnlySpecs;
  }

  // region_name - computed: true, optional: false, required: false
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
}

export class DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference {
    return new DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasAdvancedClustersResultsReplicationSpecs {
}

export function dataMongodbatlasAdvancedClustersResultsReplicationSpecsToTerraform(struct?: DataMongodbatlasAdvancedClustersResultsReplicationSpecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasAdvancedClustersResultsReplicationSpecsToHclTerraform(struct?: DataMongodbatlasAdvancedClustersResultsReplicationSpecs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasAdvancedClustersResultsReplicationSpecs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasAdvancedClustersResultsReplicationSpecs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_id - computed: true, optional: false, required: false
  private _containerId = new cdktf.StringMap(this, "container_id");
  public get containerId() {
    return this._containerId;
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // region_configs - computed: true, optional: false, required: false
  private _regionConfigs = new DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList(this, "region_configs", false);
  public get regionConfigs() {
    return this._regionConfigs;
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }

  // zone_name - computed: true, optional: false, required: false
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
}

export class DataMongodbatlasAdvancedClustersResultsReplicationSpecsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference {
    return new DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasAdvancedClustersResults {
  /**
  * Controls how hardware specification fields are returned in the response. When set to true, the non-effective specs (`electable_specs`, `read_only_specs`, `analytics_specs`) fields return the hardware specifications that the client provided. When set to false (default), the non-effective specs fields show the **current** hardware specifications. Cluster auto-scaling is the primary cause for differences between initial and current hardware specifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/data-sources/advanced_clusters#use_effective_fields DataMongodbatlasAdvancedClusters#use_effective_fields}
  */
  readonly useEffectiveFields?: boolean | cdktf.IResolvable;
}

export function dataMongodbatlasAdvancedClustersResultsToTerraform(struct?: DataMongodbatlasAdvancedClustersResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_effective_fields: cdktf.booleanToTerraform(struct!.useEffectiveFields),
  }
}


export function dataMongodbatlasAdvancedClustersResultsToHclTerraform(struct?: DataMongodbatlasAdvancedClustersResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    use_effective_fields: {
      value: cdktf.booleanToHclTerraform(struct!.useEffectiveFields),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataMongodbatlasAdvancedClustersResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasAdvancedClustersResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._useEffectiveFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.useEffectiveFields = this._useEffectiveFields;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasAdvancedClustersResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._useEffectiveFields = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._useEffectiveFields = value.useEffectiveFields;
    }
  }

  // advanced_configuration - computed: true, optional: false, required: false
  private _advancedConfiguration = new DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference(this, "advanced_configuration");
  public get advancedConfiguration() {
    return this._advancedConfiguration;
  }

  // backup_enabled - computed: true, optional: false, required: false
  public get backupEnabled() {
    return this.getBooleanAttribute('backup_enabled');
  }

  // bi_connector_config - computed: true, optional: false, required: false
  private _biConnectorConfig = new DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference(this, "bi_connector_config");
  public get biConnectorConfig() {
    return this._biConnectorConfig;
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // cluster_type - computed: true, optional: false, required: false
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }

  // config_server_management_mode - computed: true, optional: false, required: false
  public get configServerManagementMode() {
    return this.getStringAttribute('config_server_management_mode');
  }

  // config_server_type - computed: true, optional: false, required: false
  public get configServerType() {
    return this.getStringAttribute('config_server_type');
  }

  // connection_strings - computed: true, optional: false, required: false
  private _connectionStrings = new DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference(this, "connection_strings");
  public get connectionStrings() {
    return this._connectionStrings;
  }

  // create_date - computed: true, optional: false, required: false
  public get createDate() {
    return this.getStringAttribute('create_date');
  }

  // encryption_at_rest_provider - computed: true, optional: false, required: false
  public get encryptionAtRestProvider() {
    return this.getStringAttribute('encryption_at_rest_provider');
  }

  // global_cluster_self_managed_sharding - computed: true, optional: false, required: false
  public get globalClusterSelfManagedSharding() {
    return this.getBooleanAttribute('global_cluster_self_managed_sharding');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // mongo_db_major_version - computed: true, optional: false, required: false
  public get mongoDbMajorVersion() {
    return this.getStringAttribute('mongo_db_major_version');
  }

  // mongo_db_version - computed: true, optional: false, required: false
  public get mongoDbVersion() {
    return this.getStringAttribute('mongo_db_version');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // paused - computed: true, optional: false, required: false
  public get paused() {
    return this.getBooleanAttribute('paused');
  }

  // pinned_fcv - computed: true, optional: false, required: false
  private _pinnedFcv = new DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference(this, "pinned_fcv");
  public get pinnedFcv() {
    return this._pinnedFcv;
  }

  // pit_enabled - computed: true, optional: false, required: false
  public get pitEnabled() {
    return this.getBooleanAttribute('pit_enabled');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // redact_client_log_data - computed: true, optional: false, required: false
  public get redactClientLogData() {
    return this.getBooleanAttribute('redact_client_log_data');
  }

  // replica_set_scaling_strategy - computed: true, optional: false, required: false
  public get replicaSetScalingStrategy() {
    return this.getStringAttribute('replica_set_scaling_strategy');
  }

  // replication_specs - computed: true, optional: false, required: false
  private _replicationSpecs = new DataMongodbatlasAdvancedClustersResultsReplicationSpecsList(this, "replication_specs", false);
  public get replicationSpecs() {
    return this._replicationSpecs;
  }

  // root_cert_type - computed: true, optional: false, required: false
  public get rootCertType() {
    return this.getStringAttribute('root_cert_type');
  }

  // state_name - computed: true, optional: false, required: false
  public get stateName() {
    return this.getStringAttribute('state_name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // termination_protection_enabled - computed: true, optional: false, required: false
  public get terminationProtectionEnabled() {
    return this.getBooleanAttribute('termination_protection_enabled');
  }

  // use_effective_fields - computed: true, optional: true, required: false
  private _useEffectiveFields?: boolean | cdktf.IResolvable; 
  public get useEffectiveFields() {
    return this.getBooleanAttribute('use_effective_fields');
  }
  public set useEffectiveFields(value: boolean | cdktf.IResolvable) {
    this._useEffectiveFields = value;
  }
  public resetUseEffectiveFields() {
    this._useEffectiveFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEffectiveFieldsInput() {
    return this._useEffectiveFields;
  }

  // version_release_system - computed: true, optional: false, required: false
  public get versionReleaseSystem() {
    return this.getStringAttribute('version_release_system');
  }
}

export class DataMongodbatlasAdvancedClustersResultsList extends cdktf.ComplexList {
  public internalValue? : DataMongodbatlasAdvancedClustersResults[] | cdktf.IResolvable

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
  public get(index: number): DataMongodbatlasAdvancedClustersResultsOutputReference {
    return new DataMongodbatlasAdvancedClustersResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/data-sources/advanced_clusters mongodbatlas_advanced_clusters}
*/
export class DataMongodbatlasAdvancedClusters extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_advanced_clusters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMongodbatlasAdvancedClusters resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMongodbatlasAdvancedClusters to import
  * @param importFromId The id of the existing DataMongodbatlasAdvancedClusters that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/data-sources/advanced_clusters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMongodbatlasAdvancedClusters to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_advanced_clusters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/data-sources/advanced_clusters mongodbatlas_advanced_clusters} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMongodbatlasAdvancedClustersConfig
  */
  public constructor(scope: Construct, id: string, config: DataMongodbatlasAdvancedClustersConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_advanced_clusters',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '2.3.0',
        providerVersionConstraint: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._projectId = config.projectId;
    this._useEffectiveFields = config.useEffectiveFields;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // results - computed: true, optional: false, required: false
  private _results = new DataMongodbatlasAdvancedClustersResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // use_effective_fields - computed: false, optional: true, required: false
  private _useEffectiveFields?: boolean | cdktf.IResolvable; 
  public get useEffectiveFields() {
    return this.getBooleanAttribute('use_effective_fields');
  }
  public set useEffectiveFields(value: boolean | cdktf.IResolvable) {
    this._useEffectiveFields = value;
  }
  public resetUseEffectiveFields() {
    this._useEffectiveFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEffectiveFieldsInput() {
    return this._useEffectiveFields;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project_id: cdktf.stringToTerraform(this._projectId),
      use_effective_fields: cdktf.booleanToTerraform(this._useEffectiveFields),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_effective_fields: {
        value: cdktf.booleanToHclTerraform(this._useEffectiveFields),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
