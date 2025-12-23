// https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/controllerproperties
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAviControllerpropertiesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/controllerproperties#id DataAviControllerproperties#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/controllerproperties#uuid DataAviControllerproperties#uuid}
  */
  readonly uuid?: string;
}
export interface DataAviControllerpropertiesConfigpbAttributes {
}

export function dataAviControllerpropertiesConfigpbAttributesToTerraform(struct?: DataAviControllerpropertiesConfigpbAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviControllerpropertiesConfigpbAttributesToHclTerraform(struct?: DataAviControllerpropertiesConfigpbAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviControllerpropertiesConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviControllerpropertiesConfigpbAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviControllerpropertiesConfigpbAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataAviControllerpropertiesConfigpbAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviControllerpropertiesConfigpbAttributesOutputReference {
    return new DataAviControllerpropertiesConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviControllerpropertiesFalsePositiveLearningConfig {
}

export function dataAviControllerpropertiesFalsePositiveLearningConfigToTerraform(struct?: DataAviControllerpropertiesFalsePositiveLearningConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviControllerpropertiesFalsePositiveLearningConfigToHclTerraform(struct?: DataAviControllerpropertiesFalsePositiveLearningConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviControllerpropertiesFalsePositiveLearningConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviControllerpropertiesFalsePositiveLearningConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviControllerpropertiesFalsePositiveLearningConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_apps_supported - computed: true, optional: false, required: false
  public get maxAppsSupported() {
    return this.getStringAttribute('max_apps_supported');
  }

  // min_monitor_time - computed: true, optional: false, required: false
  public get minMonitorTime() {
    return this.getStringAttribute('min_monitor_time');
  }

  // min_trans_per_application - computed: true, optional: false, required: false
  public get minTransPerApplication() {
    return this.getStringAttribute('min_trans_per_application');
  }

  // min_trans_per_uri - computed: true, optional: false, required: false
  public get minTransPerUri() {
    return this.getStringAttribute('min_trans_per_uri');
  }
}

export class DataAviControllerpropertiesFalsePositiveLearningConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAviControllerpropertiesFalsePositiveLearningConfigOutputReference {
    return new DataAviControllerpropertiesFalsePositiveLearningConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviControllerpropertiesStatecachePropertiesDelayInjections {
}

export function dataAviControllerpropertiesStatecachePropertiesDelayInjectionsToTerraform(struct?: DataAviControllerpropertiesStatecachePropertiesDelayInjections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviControllerpropertiesStatecachePropertiesDelayInjectionsToHclTerraform(struct?: DataAviControllerpropertiesStatecachePropertiesDelayInjections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviControllerpropertiesStatecachePropertiesDelayInjectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviControllerpropertiesStatecachePropertiesDelayInjections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviControllerpropertiesStatecachePropertiesDelayInjections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delay_create - computed: true, optional: false, required: false
  public get delayCreate() {
    return this.getStringAttribute('delay_create');
  }

  // delay_delete - computed: true, optional: false, required: false
  public get delayDelete() {
    return this.getStringAttribute('delay_delete');
  }

  // delay_update - computed: true, optional: false, required: false
  public get delayUpdate() {
    return this.getStringAttribute('delay_update');
  }

  // fault_type - computed: true, optional: false, required: false
  public get faultType() {
    return this.getStringAttribute('fault_type');
  }

  // obj - computed: true, optional: false, required: false
  public get obj() {
    return this.getStringAttribute('obj');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // se - computed: true, optional: false, required: false
  public get se() {
    return this.getStringAttribute('se');
  }
}

export class DataAviControllerpropertiesStatecachePropertiesDelayInjectionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviControllerpropertiesStatecachePropertiesDelayInjectionsOutputReference {
    return new DataAviControllerpropertiesStatecachePropertiesDelayInjectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviControllerpropertiesStatecacheProperties {
}

export function dataAviControllerpropertiesStatecachePropertiesToTerraform(struct?: DataAviControllerpropertiesStatecacheProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviControllerpropertiesStatecachePropertiesToHclTerraform(struct?: DataAviControllerpropertiesStatecacheProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviControllerpropertiesStatecachePropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviControllerpropertiesStatecacheProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviControllerpropertiesStatecacheProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delay_injections - computed: true, optional: false, required: false
  private _delayInjections = new DataAviControllerpropertiesStatecachePropertiesDelayInjectionsList(this, "delay_injections", false);
  public get delayInjections() {
    return this._delayInjections;
  }
}

export class DataAviControllerpropertiesStatecachePropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviControllerpropertiesStatecachePropertiesOutputReference {
    return new DataAviControllerpropertiesStatecachePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviControllerpropertiesUserAgentCacheConfig {
}

export function dataAviControllerpropertiesUserAgentCacheConfigToTerraform(struct?: DataAviControllerpropertiesUserAgentCacheConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviControllerpropertiesUserAgentCacheConfigToHclTerraform(struct?: DataAviControllerpropertiesUserAgentCacheConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviControllerpropertiesUserAgentCacheConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviControllerpropertiesUserAgentCacheConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviControllerpropertiesUserAgentCacheConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_size - computed: true, optional: false, required: false
  public get batchSize() {
    return this.getStringAttribute('batch_size');
  }

  // controller_cache_size - computed: true, optional: false, required: false
  public get controllerCacheSize() {
    return this.getStringAttribute('controller_cache_size');
  }

  // max_age - computed: true, optional: false, required: false
  public get maxAge() {
    return this.getStringAttribute('max_age');
  }

  // max_last_hit_time - computed: true, optional: false, required: false
  public get maxLastHitTime() {
    return this.getStringAttribute('max_last_hit_time');
  }

  // max_upstream_queries - computed: true, optional: false, required: false
  public get maxUpstreamQueries() {
    return this.getStringAttribute('max_upstream_queries');
  }

  // max_wait_time - computed: true, optional: false, required: false
  public get maxWaitTime() {
    return this.getStringAttribute('max_wait_time');
  }

  // num_entries_upstream_update - computed: true, optional: false, required: false
  public get numEntriesUpstreamUpdate() {
    return this.getStringAttribute('num_entries_upstream_update');
  }

  // percent_reserved_for_bad_bots - computed: true, optional: false, required: false
  public get percentReservedForBadBots() {
    return this.getStringAttribute('percent_reserved_for_bad_bots');
  }

  // percent_reserved_for_browsers - computed: true, optional: false, required: false
  public get percentReservedForBrowsers() {
    return this.getStringAttribute('percent_reserved_for_browsers');
  }

  // percent_reserved_for_good_bots - computed: true, optional: false, required: false
  public get percentReservedForGoodBots() {
    return this.getStringAttribute('percent_reserved_for_good_bots');
  }

  // percent_reserved_for_outstanding - computed: true, optional: false, required: false
  public get percentReservedForOutstanding() {
    return this.getStringAttribute('percent_reserved_for_outstanding');
  }

  // se_cache_size - computed: true, optional: false, required: false
  public get seCacheSize() {
    return this.getStringAttribute('se_cache_size');
  }

  // upstream_update_interval - computed: true, optional: false, required: false
  public get upstreamUpdateInterval() {
    return this.getStringAttribute('upstream_update_interval');
  }
}

export class DataAviControllerpropertiesUserAgentCacheConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAviControllerpropertiesUserAgentCacheConfigOutputReference {
    return new DataAviControllerpropertiesUserAgentCacheConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/controllerproperties avi_controllerproperties}
*/
export class DataAviControllerproperties extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_controllerproperties";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAviControllerproperties resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAviControllerproperties to import
  * @param importFromId The id of the existing DataAviControllerproperties that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/controllerproperties#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAviControllerproperties to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_controllerproperties", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/controllerproperties avi_controllerproperties} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAviControllerpropertiesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAviControllerpropertiesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_controllerproperties',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.2.1',
        providerVersionConstraint: '31.2.1'
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
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_manager_use_evms - computed: true, optional: false, required: false
  public get alertManagerUseEvms() {
    return this.getStringAttribute('alert_manager_use_evms');
  }

  // allow_admin_network_updates - computed: true, optional: false, required: false
  public get allowAdminNetworkUpdates() {
    return this.getStringAttribute('allow_admin_network_updates');
  }

  // allow_ip_forwarding - computed: true, optional: false, required: false
  public get allowIpForwarding() {
    return this.getStringAttribute('allow_ip_forwarding');
  }

  // allow_unauthenticated_apis - computed: true, optional: false, required: false
  public get allowUnauthenticatedApis() {
    return this.getStringAttribute('allow_unauthenticated_apis');
  }

  // allow_unauthenticated_nodes - computed: true, optional: false, required: false
  public get allowUnauthenticatedNodes() {
    return this.getStringAttribute('allow_unauthenticated_nodes');
  }

  // api_idle_timeout - computed: true, optional: false, required: false
  public get apiIdleTimeout() {
    return this.getStringAttribute('api_idle_timeout');
  }

  // api_perf_logging_threshold - computed: true, optional: false, required: false
  public get apiPerfLoggingThreshold() {
    return this.getStringAttribute('api_perf_logging_threshold');
  }

  // appviewx_compat_mode - computed: true, optional: false, required: false
  public get appviewxCompatMode() {
    return this.getStringAttribute('appviewx_compat_mode');
  }

  // archive_retention_framework_period - computed: true, optional: false, required: false
  public get archiveRetentionFrameworkPeriod() {
    return this.getStringAttribute('archive_retention_framework_period');
  }

  // async_cert_chaining_interval - computed: true, optional: false, required: false
  public get asyncCertChainingInterval() {
    return this.getStringAttribute('async_cert_chaining_interval');
  }

  // async_patch_merge_period - computed: true, optional: false, required: false
  public get asyncPatchMergePeriod() {
    return this.getStringAttribute('async_patch_merge_period');
  }

  // async_patch_request_cleanup_duration - computed: true, optional: false, required: false
  public get asyncPatchRequestCleanupDuration() {
    return this.getStringAttribute('async_patch_request_cleanup_duration');
  }

  // attach_ip_retry_interval - computed: true, optional: false, required: false
  public get attachIpRetryInterval() {
    return this.getStringAttribute('attach_ip_retry_interval');
  }

  // attach_ip_retry_limit - computed: true, optional: false, required: false
  public get attachIpRetryLimit() {
    return this.getStringAttribute('attach_ip_retry_limit');
  }

  // bm_use_ansible - computed: true, optional: false, required: false
  public get bmUseAnsible() {
    return this.getStringAttribute('bm_use_ansible');
  }

  // check_vsvip_fqdn_syntax - computed: true, optional: false, required: false
  public get checkVsvipFqdnSyntax() {
    return this.getStringAttribute('check_vsvip_fqdn_syntax');
  }

  // cleanup_expired_authtoken_timeout_period - computed: true, optional: false, required: false
  public get cleanupExpiredAuthtokenTimeoutPeriod() {
    return this.getStringAttribute('cleanup_expired_authtoken_timeout_period');
  }

  // cleanup_sessions_timeout_period - computed: true, optional: false, required: false
  public get cleanupSessionsTimeoutPeriod() {
    return this.getStringAttribute('cleanup_sessions_timeout_period');
  }

  // cloud_discovery_interval - computed: true, optional: false, required: false
  public get cloudDiscoveryInterval() {
    return this.getStringAttribute('cloud_discovery_interval');
  }

  // cloud_reconcile - computed: true, optional: false, required: false
  public get cloudReconcile() {
    return this.getStringAttribute('cloud_reconcile');
  }

  // cloud_reconcile_interval - computed: true, optional: false, required: false
  public get cloudReconcileInterval() {
    return this.getStringAttribute('cloud_reconcile_interval');
  }

  // cluster_ip_gratuitous_arp_period - computed: true, optional: false, required: false
  public get clusterIpGratuitousArpPeriod() {
    return this.getStringAttribute('cluster_ip_gratuitous_arp_period');
  }

  // configpb_attributes - computed: true, optional: false, required: false
  private _configpbAttributes = new DataAviControllerpropertiesConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }

  // consistency_check_timeout_period - computed: true, optional: false, required: false
  public get consistencyCheckTimeoutPeriod() {
    return this.getStringAttribute('consistency_check_timeout_period');
  }

  // controller_resource_info_collection_period - computed: true, optional: false, required: false
  public get controllerResourceInfoCollectionPeriod() {
    return this.getStringAttribute('controller_resource_info_collection_period');
  }

  // crashed_se_reboot - computed: true, optional: false, required: false
  public get crashedSeReboot() {
    return this.getStringAttribute('crashed_se_reboot');
  }

  // dead_se_detection_timer - computed: true, optional: false, required: false
  public get deadSeDetectionTimer() {
    return this.getStringAttribute('dead_se_detection_timer');
  }

  // default_minimum_api_timeout - computed: true, optional: false, required: false
  public get defaultMinimumApiTimeout() {
    return this.getStringAttribute('default_minimum_api_timeout');
  }

  // del_offline_se_after_reboot_delay - computed: true, optional: false, required: false
  public get delOfflineSeAfterRebootDelay() {
    return this.getStringAttribute('del_offline_se_after_reboot_delay');
  }

  // detach_ip_retry_interval - computed: true, optional: false, required: false
  public get detachIpRetryInterval() {
    return this.getStringAttribute('detach_ip_retry_interval');
  }

  // detach_ip_retry_limit - computed: true, optional: false, required: false
  public get detachIpRetryLimit() {
    return this.getStringAttribute('detach_ip_retry_limit');
  }

  // detach_ip_timeout - computed: true, optional: false, required: false
  public get detachIpTimeout() {
    return this.getStringAttribute('detach_ip_timeout');
  }

  // dns_refresh_period - computed: true, optional: false, required: false
  public get dnsRefreshPeriod() {
    return this.getStringAttribute('dns_refresh_period');
  }

  // dummy - computed: true, optional: false, required: false
  public get dummy() {
    return this.getStringAttribute('dummy');
  }

  // edit_system_limits - computed: true, optional: false, required: false
  public get editSystemLimits() {
    return this.getStringAttribute('edit_system_limits');
  }

  // enable_api_sharding - computed: true, optional: false, required: false
  public get enableApiSharding() {
    return this.getStringAttribute('enable_api_sharding');
  }

  // enable_memory_balancer - computed: true, optional: false, required: false
  public get enableMemoryBalancer() {
    return this.getStringAttribute('enable_memory_balancer');
  }

  // enable_nsx_streaming_agent - computed: true, optional: false, required: false
  public get enableNsxStreamingAgent() {
    return this.getStringAttribute('enable_nsx_streaming_agent');
  }

  // enable_per_process_stop - computed: true, optional: false, required: false
  public get enablePerProcessStop() {
    return this.getStringAttribute('enable_per_process_stop');
  }

  // enable_resmgr_log_cache_print - computed: true, optional: false, required: false
  public get enableResmgrLogCachePrint() {
    return this.getStringAttribute('enable_resmgr_log_cache_print');
  }

  // event_manager_file_modified_ts_filter - computed: true, optional: false, required: false
  public get eventManagerFileModifiedTsFilter() {
    return this.getStringAttribute('event_manager_file_modified_ts_filter');
  }

  // event_manager_max_goroutines - computed: true, optional: false, required: false
  public get eventManagerMaxGoroutines() {
    return this.getStringAttribute('event_manager_max_goroutines');
  }

  // event_manager_max_subscribers - computed: true, optional: false, required: false
  public get eventManagerMaxSubscribers() {
    return this.getStringAttribute('event_manager_max_subscribers');
  }

  // event_manager_processing_time_threshold - computed: true, optional: false, required: false
  public get eventManagerProcessingTimeThreshold() {
    return this.getStringAttribute('event_manager_processing_time_threshold');
  }

  // false_positive_learning_config - computed: true, optional: false, required: false
  private _falsePositiveLearningConfig = new DataAviControllerpropertiesFalsePositiveLearningConfigList(this, "false_positive_learning_config", true);
  public get falsePositiveLearningConfig() {
    return this._falsePositiveLearningConfig;
  }

  // fatal_error_lease_time - computed: true, optional: false, required: false
  public get fatalErrorLeaseTime() {
    return this.getStringAttribute('fatal_error_lease_time');
  }

  // federated_datastore_cleanup_duration - computed: true, optional: false, required: false
  public get federatedDatastoreCleanupDuration() {
    return this.getStringAttribute('federated_datastore_cleanup_duration');
  }

  // file_object_cleanup_period - computed: true, optional: false, required: false
  public get fileObjectCleanupPeriod() {
    return this.getStringAttribute('file_object_cleanup_period');
  }

  // fileobject_max_file_versions - computed: true, optional: false, required: false
  public get fileobjectMaxFileVersions() {
    return this.getStringAttribute('fileobject_max_file_versions');
  }

  // gslb_fileobject_max_version_count - computed: true, optional: false, required: false
  public get gslbFileobjectMaxVersionCount() {
    return this.getStringAttribute('gslb_fileobject_max_version_count');
  }

  // gslb_purge_batch_size - computed: true, optional: false, required: false
  public get gslbPurgeBatchSize() {
    return this.getStringAttribute('gslb_purge_batch_size');
  }

  // gslb_purge_sleep_time_ms - computed: true, optional: false, required: false
  public get gslbPurgeSleepTimeMs() {
    return this.getStringAttribute('gslb_purge_sleep_time_ms');
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

  // ignore_vrf_in_networksubnetlist - computed: true, optional: false, required: false
  public get ignoreVrfInNetworksubnetlist() {
    return this.getStringAttribute('ignore_vrf_in_networksubnetlist');
  }

  // log_records_allocated_size - computed: true, optional: false, required: false
  public get logRecordsAllocatedSize() {
    return this.getStringAttribute('log_records_allocated_size');
  }

  // log_records_allocation_percentage_for_events - computed: true, optional: false, required: false
  public get logRecordsAllocationPercentageForEvents() {
    return this.getStringAttribute('log_records_allocation_percentage_for_events');
  }

  // log_records_cleanup_target_percentage - computed: true, optional: false, required: false
  public get logRecordsCleanupTargetPercentage() {
    return this.getStringAttribute('log_records_cleanup_target_percentage');
  }

  // log_records_frequent_cleanup_event_generation_threshold - computed: true, optional: false, required: false
  public get logRecordsFrequentCleanupEventGenerationThreshold() {
    return this.getStringAttribute('log_records_frequent_cleanup_event_generation_threshold');
  }

  // log_records_purge_interval - computed: true, optional: false, required: false
  public get logRecordsPurgeInterval() {
    return this.getStringAttribute('log_records_purge_interval');
  }

  // max_dead_se_in_grp - computed: true, optional: false, required: false
  public get maxDeadSeInGrp() {
    return this.getStringAttribute('max_dead_se_in_grp');
  }

  // max_pcap_per_tenant - computed: true, optional: false, required: false
  public get maxPcapPerTenant() {
    return this.getStringAttribute('max_pcap_per_tenant');
  }

  // max_se_spawn_interval_delay - computed: true, optional: false, required: false
  public get maxSeSpawnIntervalDelay() {
    return this.getStringAttribute('max_se_spawn_interval_delay');
  }

  // max_seq_attach_ip_failures - computed: true, optional: false, required: false
  public get maxSeqAttachIpFailures() {
    return this.getStringAttribute('max_seq_attach_ip_failures');
  }

  // max_seq_vnic_failures - computed: true, optional: false, required: false
  public get maxSeqVnicFailures() {
    return this.getStringAttribute('max_seq_vnic_failures');
  }

  // max_threads_cc_vip_bg_worker - computed: true, optional: false, required: false
  public get maxThreadsCcVipBgWorker() {
    return this.getStringAttribute('max_threads_cc_vip_bg_worker');
  }

  // permission_scoped_shared_admin_networks - computed: true, optional: false, required: false
  public get permissionScopedSharedAdminNetworks() {
    return this.getStringAttribute('permission_scoped_shared_admin_networks');
  }

  // persistence_key_rotate_period - computed: true, optional: false, required: false
  public get persistenceKeyRotatePeriod() {
    return this.getStringAttribute('persistence_key_rotate_period');
  }

  // portal_request_burst_limit - computed: true, optional: false, required: false
  public get portalRequestBurstLimit() {
    return this.getStringAttribute('portal_request_burst_limit');
  }

  // portal_request_rate_limit - computed: true, optional: false, required: false
  public get portalRequestRateLimit() {
    return this.getStringAttribute('portal_request_rate_limit');
  }

  // portal_token - computed: true, optional: false, required: false
  public get portalToken() {
    return this.getStringAttribute('portal_token');
  }

  // postgres_vacuum_period - computed: true, optional: false, required: false
  public get postgresVacuumPeriod() {
    return this.getStringAttribute('postgres_vacuum_period');
  }

  // process_locked_useraccounts_timeout_period - computed: true, optional: false, required: false
  public get processLockedUseraccountsTimeoutPeriod() {
    return this.getStringAttribute('process_locked_useraccounts_timeout_period');
  }

  // process_pki_profile_timeout_period - computed: true, optional: false, required: false
  public get processPkiProfileTimeoutPeriod() {
    return this.getStringAttribute('process_pki_profile_timeout_period');
  }

  // query_host_fail - computed: true, optional: false, required: false
  public get queryHostFail() {
    return this.getStringAttribute('query_host_fail');
  }

  // resmgr_log_caching_period - computed: true, optional: false, required: false
  public get resmgrLogCachingPeriod() {
    return this.getStringAttribute('resmgr_log_caching_period');
  }

  // restrict_cloud_read_access - computed: true, optional: false, required: false
  public get restrictCloudReadAccess() {
    return this.getStringAttribute('restrict_cloud_read_access');
  }

  // safenet_hsm_version - computed: true, optional: false, required: false
  public get safenetHsmVersion() {
    return this.getStringAttribute('safenet_hsm_version');
  }

  // se_create_timeout - computed: true, optional: false, required: false
  public get seCreateTimeout() {
    return this.getStringAttribute('se_create_timeout');
  }

  // se_failover_attempt_interval - computed: true, optional: false, required: false
  public get seFailoverAttemptInterval() {
    return this.getStringAttribute('se_failover_attempt_interval');
  }

  // se_from_marketplace - computed: true, optional: false, required: false
  public get seFromMarketplace() {
    return this.getStringAttribute('se_from_marketplace');
  }

  // se_offline_del - computed: true, optional: false, required: false
  public get seOfflineDel() {
    return this.getStringAttribute('se_offline_del');
  }

  // se_spawn_retry_interval - computed: true, optional: false, required: false
  public get seSpawnRetryInterval() {
    return this.getStringAttribute('se_spawn_retry_interval');
  }

  // se_upgrade_flow_cleanup_timeout - computed: true, optional: false, required: false
  public get seUpgradeFlowCleanupTimeout() {
    return this.getStringAttribute('se_upgrade_flow_cleanup_timeout');
  }

  // se_vnic_cooldown - computed: true, optional: false, required: false
  public get seVnicCooldown() {
    return this.getStringAttribute('se_vnic_cooldown');
  }

  // se_vnic_gc_wait_time - computed: true, optional: false, required: false
  public get seVnicGcWaitTime() {
    return this.getStringAttribute('se_vnic_gc_wait_time');
  }

  // secure_channel_cleanup_timeout - computed: true, optional: false, required: false
  public get secureChannelCleanupTimeout() {
    return this.getStringAttribute('secure_channel_cleanup_timeout');
  }

  // secure_channel_controller_token_timeout - computed: true, optional: false, required: false
  public get secureChannelControllerTokenTimeout() {
    return this.getStringAttribute('secure_channel_controller_token_timeout');
  }

  // secure_channel_se_token_timeout - computed: true, optional: false, required: false
  public get secureChannelSeTokenTimeout() {
    return this.getStringAttribute('secure_channel_se_token_timeout');
  }

  // shared_ssl_certificates - computed: true, optional: false, required: false
  public get sharedSslCertificates() {
    return this.getStringAttribute('shared_ssl_certificates');
  }

  // skip_beego_perf_collection - computed: true, optional: false, required: false
  public get skipBeegoPerfCollection() {
    return this.getStringAttribute('skip_beego_perf_collection');
  }

  // soft_min_mem_per_se_limit - computed: true, optional: false, required: false
  public get softMinMemPerSeLimit() {
    return this.getStringAttribute('soft_min_mem_per_se_limit');
  }

  // ssl_certificate_expiry_warning_days - computed: true, optional: false, required: false
  public get sslCertificateExpiryWarningDays() {
    return this.getNumberListAttribute('ssl_certificate_expiry_warning_days');
  }

  // statecache_properties - computed: true, optional: false, required: false
  private _statecacheProperties = new DataAviControllerpropertiesStatecachePropertiesList(this, "statecache_properties", true);
  public get statecacheProperties() {
    return this._statecacheProperties;
  }

  // telemetry_interval - computed: true, optional: false, required: false
  public get telemetryInterval() {
    return this.getStringAttribute('telemetry_interval');
  }

  // unresponsive_se_reboot - computed: true, optional: false, required: false
  public get unresponsiveSeReboot() {
    return this.getStringAttribute('unresponsive_se_reboot');
  }

  // update_dns_entry_retry_limit - computed: true, optional: false, required: false
  public get updateDnsEntryRetryLimit() {
    return this.getStringAttribute('update_dns_entry_retry_limit');
  }

  // update_dns_entry_timeout - computed: true, optional: false, required: false
  public get updateDnsEntryTimeout() {
    return this.getStringAttribute('update_dns_entry_timeout');
  }

  // upgrade_dns_ttl - computed: true, optional: false, required: false
  public get upgradeDnsTtl() {
    return this.getStringAttribute('upgrade_dns_ttl');
  }

  // upgrade_se_per_vs_scale_ops_txn_time - computed: true, optional: false, required: false
  public get upgradeSePerVsScaleOpsTxnTime() {
    return this.getStringAttribute('upgrade_se_per_vs_scale_ops_txn_time');
  }

  // user_agent_cache_config - computed: true, optional: false, required: false
  private _userAgentCacheConfig = new DataAviControllerpropertiesUserAgentCacheConfigList(this, "user_agent_cache_config", true);
  public get userAgentCacheConfig() {
    return this._userAgentCacheConfig;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // vnic_op_fail_time - computed: true, optional: false, required: false
  public get vnicOpFailTime() {
    return this.getStringAttribute('vnic_op_fail_time');
  }

  // vs_awaiting_se_timeout - computed: true, optional: false, required: false
  public get vsAwaitingSeTimeout() {
    return this.getStringAttribute('vs_awaiting_se_timeout');
  }

  // vs_key_rotate_period - computed: true, optional: false, required: false
  public get vsKeyRotatePeriod() {
    return this.getStringAttribute('vs_key_rotate_period');
  }

  // vs_scaleout_ready_check_interval - computed: true, optional: false, required: false
  public get vsScaleoutReadyCheckInterval() {
    return this.getStringAttribute('vs_scaleout_ready_check_interval');
  }

  // vs_se_attach_ip_fail - computed: true, optional: false, required: false
  public get vsSeAttachIpFail() {
    return this.getStringAttribute('vs_se_attach_ip_fail');
  }

  // vs_se_bootup_fail - computed: true, optional: false, required: false
  public get vsSeBootupFail() {
    return this.getStringAttribute('vs_se_bootup_fail');
  }

  // vs_se_bootup_fail_patch - computed: true, optional: false, required: false
  public get vsSeBootupFailPatch() {
    return this.getStringAttribute('vs_se_bootup_fail_patch');
  }

  // vs_se_create_fail - computed: true, optional: false, required: false
  public get vsSeCreateFail() {
    return this.getStringAttribute('vs_se_create_fail');
  }

  // vs_se_ping_fail - computed: true, optional: false, required: false
  public get vsSePingFail() {
    return this.getStringAttribute('vs_se_ping_fail');
  }

  // vs_se_vnic_fail - computed: true, optional: false, required: false
  public get vsSeVnicFail() {
    return this.getStringAttribute('vs_se_vnic_fail');
  }

  // vs_se_vnic_ip_fail - computed: true, optional: false, required: false
  public get vsSeVnicIpFail() {
    return this.getStringAttribute('vs_se_vnic_ip_fail');
  }

  // vsphere_ha_detection_timeout - computed: true, optional: false, required: false
  public get vsphereHaDetectionTimeout() {
    return this.getStringAttribute('vsphere_ha_detection_timeout');
  }

  // vsphere_ha_recovery_timeout - computed: true, optional: false, required: false
  public get vsphereHaRecoveryTimeout() {
    return this.getStringAttribute('vsphere_ha_recovery_timeout');
  }

  // vsphere_ha_timer_interval - computed: true, optional: false, required: false
  public get vsphereHaTimerInterval() {
    return this.getStringAttribute('vsphere_ha_timer_interval');
  }

  // warmstart_se_reconnect_wait_time - computed: true, optional: false, required: false
  public get warmstartSeReconnectWaitTime() {
    return this.getStringAttribute('warmstart_se_reconnect_wait_time');
  }

  // warmstart_vs_resync_wait_time - computed: true, optional: false, required: false
  public get warmstartVsResyncWaitTime() {
    return this.getStringAttribute('warmstart_vs_resync_wait_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
