import * as cdktf from 'cdktf';
import { DataKopsClusterKubeDnsAffinityList,
DataKopsClusterKubeDnsNodeLocalDnsList,
DataKopsClusterKubeDnsStubDomainsList,
DataKopsClusterKubeDnsTolerationsList } from './structs0'
export interface DataKopsClusterKubeDns {
}

export function dataKopsClusterKubeDnsToTerraform(struct?: DataKopsClusterKubeDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterKubeDnsToHclTerraform(struct?: DataKopsClusterKubeDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterKubeDnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterKubeDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterKubeDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // affinity - computed: true, optional: false, required: false
  private _affinity = new DataKopsClusterKubeDnsAffinityList(this, "affinity", false);
  public get affinity() {
    return this._affinity;
  }

  // cache_max_concurrent - computed: true, optional: false, required: false
  public get cacheMaxConcurrent() {
    return this.getNumberAttribute('cache_max_concurrent');
  }

  // cache_max_size - computed: true, optional: false, required: false
  public get cacheMaxSize() {
    return this.getNumberAttribute('cache_max_size');
  }

  // core_dns_image - computed: true, optional: false, required: false
  public get coreDnsImage() {
    return this.getStringAttribute('core_dns_image');
  }

  // cpa_image - computed: true, optional: false, required: false
  public get cpaImage() {
    return this.getStringAttribute('cpa_image');
  }

  // cpu_request - computed: true, optional: false, required: false
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // external_core_file - computed: true, optional: false, required: false
  public get externalCoreFile() {
    return this.getStringAttribute('external_core_file');
  }

  // memory_limit - computed: true, optional: false, required: false
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }

  // memory_request - computed: true, optional: false, required: false
  public get memoryRequest() {
    return this.getStringAttribute('memory_request');
  }

  // node_local_dns - computed: true, optional: false, required: false
  private _nodeLocalDns = new DataKopsClusterKubeDnsNodeLocalDnsList(this, "node_local_dns", false);
  public get nodeLocalDns() {
    return this._nodeLocalDns;
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }

  // server_ip - computed: true, optional: false, required: false
  public get serverIp() {
    return this.getStringAttribute('server_ip');
  }

  // stub_domains - computed: true, optional: false, required: false
  private _stubDomains = new DataKopsClusterKubeDnsStubDomainsList(this, "stub_domains", false);
  public get stubDomains() {
    return this._stubDomains;
  }

  // tolerations - computed: true, optional: false, required: false
  private _tolerations = new DataKopsClusterKubeDnsTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }

  // upstream_nameservers - computed: true, optional: false, required: false
  public get upstreamNameservers() {
    return this.getListAttribute('upstream_nameservers');
  }
}

export class DataKopsClusterKubeDnsList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterKubeDnsOutputReference {
    return new DataKopsClusterKubeDnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterKubeProxy {
}

export function dataKopsClusterKubeProxyToTerraform(struct?: DataKopsClusterKubeProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterKubeProxyToHclTerraform(struct?: DataKopsClusterKubeProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterKubeProxyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterKubeProxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterKubeProxy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bind_address - computed: true, optional: false, required: false
  public get bindAddress() {
    return this.getStringAttribute('bind_address');
  }

  // cluster_cidr - computed: true, optional: false, required: false
  public get clusterCidr() {
    return this.getStringAttribute('cluster_cidr');
  }

  // conntrack_max_per_core - computed: true, optional: false, required: false
  public get conntrackMaxPerCore() {
    return this.getNumberAttribute('conntrack_max_per_core');
  }

  // conntrack_min - computed: true, optional: false, required: false
  public get conntrackMin() {
    return this.getNumberAttribute('conntrack_min');
  }

  // cpu_limit - computed: true, optional: false, required: false
  public get cpuLimit() {
    return this.getStringAttribute('cpu_limit');
  }

  // cpu_request - computed: true, optional: false, required: false
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // feature_gates - computed: true, optional: false, required: false
  private _featureGates = new cdktf.StringMap(this, "feature_gates");
  public get featureGates() {
    return this._featureGates;
  }

  // hostname_override - computed: true, optional: false, required: false
  public get hostnameOverride() {
    return this.getStringAttribute('hostname_override');
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // ip_vs_exclude_cidrs - computed: true, optional: false, required: false
  public get ipVsExcludeCidrs() {
    return this.getListAttribute('ip_vs_exclude_cidrs');
  }

  // ip_vs_min_sync_period - computed: true, optional: false, required: false
  public get ipVsMinSyncPeriod() {
    return this.getStringAttribute('ip_vs_min_sync_period');
  }

  // ip_vs_scheduler - computed: true, optional: false, required: false
  public get ipVsScheduler() {
    return this.getStringAttribute('ip_vs_scheduler');
  }

  // ip_vs_sync_period - computed: true, optional: false, required: false
  public get ipVsSyncPeriod() {
    return this.getStringAttribute('ip_vs_sync_period');
  }

  // log_level - computed: true, optional: false, required: false
  public get logLevel() {
    return this.getNumberAttribute('log_level');
  }

  // master - computed: true, optional: false, required: false
  public get master() {
    return this.getStringAttribute('master');
  }

  // memory_limit - computed: true, optional: false, required: false
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }

  // memory_request - computed: true, optional: false, required: false
  public get memoryRequest() {
    return this.getStringAttribute('memory_request');
  }

  // metrics_bind_address - computed: true, optional: false, required: false
  public get metricsBindAddress() {
    return this.getStringAttribute('metrics_bind_address');
  }

  // proxy_mode - computed: true, optional: false, required: false
  public get proxyMode() {
    return this.getStringAttribute('proxy_mode');
  }
}

export class DataKopsClusterKubeProxyList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterKubeProxyOutputReference {
    return new DataKopsClusterKubeProxyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterKubeSchedulerLeaderElection {
}

export function dataKopsClusterKubeSchedulerLeaderElectionToTerraform(struct?: DataKopsClusterKubeSchedulerLeaderElection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterKubeSchedulerLeaderElectionToHclTerraform(struct?: DataKopsClusterKubeSchedulerLeaderElection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterKubeSchedulerLeaderElectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterKubeSchedulerLeaderElection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterKubeSchedulerLeaderElection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // leader_elect - computed: true, optional: false, required: false
  public get leaderElect() {
    return this.getBooleanAttribute('leader_elect');
  }

  // leader_elect_lease_duration - computed: true, optional: false, required: false
  public get leaderElectLeaseDuration() {
    return this.getStringAttribute('leader_elect_lease_duration');
  }

  // leader_elect_renew_deadline_duration - computed: true, optional: false, required: false
  public get leaderElectRenewDeadlineDuration() {
    return this.getStringAttribute('leader_elect_renew_deadline_duration');
  }

  // leader_elect_resource_lock - computed: true, optional: false, required: false
  public get leaderElectResourceLock() {
    return this.getStringAttribute('leader_elect_resource_lock');
  }

  // leader_elect_resource_name - computed: true, optional: false, required: false
  public get leaderElectResourceName() {
    return this.getStringAttribute('leader_elect_resource_name');
  }

  // leader_elect_resource_namespace - computed: true, optional: false, required: false
  public get leaderElectResourceNamespace() {
    return this.getStringAttribute('leader_elect_resource_namespace');
  }

  // leader_elect_retry_period - computed: true, optional: false, required: false
  public get leaderElectRetryPeriod() {
    return this.getStringAttribute('leader_elect_retry_period');
  }
}

export class DataKopsClusterKubeSchedulerLeaderElectionList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterKubeSchedulerLeaderElectionOutputReference {
    return new DataKopsClusterKubeSchedulerLeaderElectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterKubeScheduler {
}

export function dataKopsClusterKubeSchedulerToTerraform(struct?: DataKopsClusterKubeScheduler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterKubeSchedulerToHclTerraform(struct?: DataKopsClusterKubeScheduler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterKubeSchedulerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterKubeScheduler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterKubeScheduler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_kubeconfig - computed: true, optional: false, required: false
  public get authenticationKubeconfig() {
    return this.getStringAttribute('authentication_kubeconfig');
  }

  // authorization_always_allow_paths - computed: true, optional: false, required: false
  public get authorizationAlwaysAllowPaths() {
    return this.getListAttribute('authorization_always_allow_paths');
  }

  // authorization_kubeconfig - computed: true, optional: false, required: false
  public get authorizationKubeconfig() {
    return this.getStringAttribute('authorization_kubeconfig');
  }

  // burst - computed: true, optional: false, required: false
  public get burst() {
    return this.getNumberAttribute('burst');
  }

  // enable_profiling - computed: true, optional: false, required: false
  public get enableProfiling() {
    return this.getBooleanAttribute('enable_profiling');
  }

  // feature_gates - computed: true, optional: false, required: false
  private _featureGates = new cdktf.StringMap(this, "feature_gates");
  public get featureGates() {
    return this._featureGates;
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // leader_election - computed: true, optional: false, required: false
  private _leaderElection = new DataKopsClusterKubeSchedulerLeaderElectionList(this, "leader_election", false);
  public get leaderElection() {
    return this._leaderElection;
  }

  // log_format - computed: true, optional: false, required: false
  public get logFormat() {
    return this.getStringAttribute('log_format');
  }

  // log_level - computed: true, optional: false, required: false
  public get logLevel() {
    return this.getNumberAttribute('log_level');
  }

  // master - computed: true, optional: false, required: false
  public get master() {
    return this.getStringAttribute('master');
  }

  // max_persistent_volumes - computed: true, optional: false, required: false
  public get maxPersistentVolumes() {
    return this.getNumberAttribute('max_persistent_volumes');
  }

  // qps - computed: true, optional: false, required: false
  public get qps() {
    return this.getStringAttribute('qps');
  }

  // tls_cert_file - computed: true, optional: false, required: false
  public get tlsCertFile() {
    return this.getStringAttribute('tls_cert_file');
  }

  // tls_private_key_file - computed: true, optional: false, required: false
  public get tlsPrivateKeyFile() {
    return this.getStringAttribute('tls_private_key_file');
  }

  // use_policy_config_map - computed: true, optional: false, required: false
  public get usePolicyConfigMap() {
    return this.getBooleanAttribute('use_policy_config_map');
  }
}

export class DataKopsClusterKubeSchedulerList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterKubeSchedulerOutputReference {
    return new DataKopsClusterKubeSchedulerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterKubeletAnonymousAuth {
}

export function dataKopsClusterKubeletAnonymousAuthToTerraform(struct?: DataKopsClusterKubeletAnonymousAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterKubeletAnonymousAuthToHclTerraform(struct?: DataKopsClusterKubeletAnonymousAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterKubeletAnonymousAuthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterKubeletAnonymousAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterKubeletAnonymousAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}

export class DataKopsClusterKubeletAnonymousAuthList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterKubeletAnonymousAuthOutputReference {
    return new DataKopsClusterKubeletAnonymousAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterKubeletCpuCfsQuota {
}

export function dataKopsClusterKubeletCpuCfsQuotaToTerraform(struct?: DataKopsClusterKubeletCpuCfsQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterKubeletCpuCfsQuotaToHclTerraform(struct?: DataKopsClusterKubeletCpuCfsQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterKubeletCpuCfsQuotaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterKubeletCpuCfsQuota | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterKubeletCpuCfsQuota | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}

export class DataKopsClusterKubeletCpuCfsQuotaList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterKubeletCpuCfsQuotaOutputReference {
    return new DataKopsClusterKubeletCpuCfsQuotaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterKubelet {
}

export function dataKopsClusterKubeletToTerraform(struct?: DataKopsClusterKubelet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterKubeletToHclTerraform(struct?: DataKopsClusterKubelet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterKubeletOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterKubelet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterKubelet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_privileged - computed: true, optional: false, required: false
  public get allowPrivileged() {
    return this.getBooleanAttribute('allow_privileged');
  }

  // allowed_unsafe_sysctls - computed: true, optional: false, required: false
  public get allowedUnsafeSysctls() {
    return this.getListAttribute('allowed_unsafe_sysctls');
  }

  // anonymous_auth - computed: true, optional: false, required: false
  private _anonymousAuth = new DataKopsClusterKubeletAnonymousAuthList(this, "anonymous_auth", false);
  public get anonymousAuth() {
    return this._anonymousAuth;
  }

  // api_servers - computed: true, optional: false, required: false
  public get apiServers() {
    return this.getStringAttribute('api_servers');
  }

  // authentication_token_webhook - computed: true, optional: false, required: false
  public get authenticationTokenWebhook() {
    return this.getBooleanAttribute('authentication_token_webhook');
  }

  // authentication_token_webhook_cache_ttl - computed: true, optional: false, required: false
  public get authenticationTokenWebhookCacheTtl() {
    return this.getStringAttribute('authentication_token_webhook_cache_ttl');
  }

  // authorization_mode - computed: true, optional: false, required: false
  public get authorizationMode() {
    return this.getStringAttribute('authorization_mode');
  }

  // babysit_daemons - computed: true, optional: false, required: false
  public get babysitDaemons() {
    return this.getBooleanAttribute('babysit_daemons');
  }

  // bootstrap_kubeconfig - computed: true, optional: false, required: false
  public get bootstrapKubeconfig() {
    return this.getStringAttribute('bootstrap_kubeconfig');
  }

  // cgroup_driver - computed: true, optional: false, required: false
  public get cgroupDriver() {
    return this.getStringAttribute('cgroup_driver');
  }

  // cgroup_root - computed: true, optional: false, required: false
  public get cgroupRoot() {
    return this.getStringAttribute('cgroup_root');
  }

  // client_ca_file - computed: true, optional: false, required: false
  public get clientCaFile() {
    return this.getStringAttribute('client_ca_file');
  }

  // cloud_provider - computed: true, optional: false, required: false
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }

  // cluster_dns - computed: true, optional: false, required: false
  public get clusterDns() {
    return this.getStringAttribute('cluster_dns');
  }

  // cluster_domain - computed: true, optional: false, required: false
  public get clusterDomain() {
    return this.getStringAttribute('cluster_domain');
  }

  // configure_cbr0 - computed: true, optional: false, required: false
  public get configureCbr0() {
    return this.getBooleanAttribute('configure_cbr0');
  }

  // container_log_max_files - computed: true, optional: false, required: false
  public get containerLogMaxFiles() {
    return this.getNumberAttribute('container_log_max_files');
  }

  // container_log_max_size - computed: true, optional: false, required: false
  public get containerLogMaxSize() {
    return this.getStringAttribute('container_log_max_size');
  }

  // cpu_cfs_quota - computed: true, optional: false, required: false
  private _cpuCfsQuota = new DataKopsClusterKubeletCpuCfsQuotaList(this, "cpu_cfs_quota", false);
  public get cpuCfsQuota() {
    return this._cpuCfsQuota;
  }

  // cpu_cfs_quota_period - computed: true, optional: false, required: false
  public get cpuCfsQuotaPeriod() {
    return this.getStringAttribute('cpu_cfs_quota_period');
  }

  // cpu_manager_policy - computed: true, optional: false, required: false
  public get cpuManagerPolicy() {
    return this.getStringAttribute('cpu_manager_policy');
  }

  // docker_disable_shared_pid - computed: true, optional: false, required: false
  public get dockerDisableSharedPid() {
    return this.getBooleanAttribute('docker_disable_shared_pid');
  }

  // enable_cadvisor_json_endpoints - computed: true, optional: false, required: false
  public get enableCadvisorJsonEndpoints() {
    return this.getBooleanAttribute('enable_cadvisor_json_endpoints');
  }

  // enable_custom_metrics - computed: true, optional: false, required: false
  public get enableCustomMetrics() {
    return this.getBooleanAttribute('enable_custom_metrics');
  }

  // enable_debugging_handlers - computed: true, optional: false, required: false
  public get enableDebuggingHandlers() {
    return this.getBooleanAttribute('enable_debugging_handlers');
  }

  // enforce_node_allocatable - computed: true, optional: false, required: false
  public get enforceNodeAllocatable() {
    return this.getStringAttribute('enforce_node_allocatable');
  }

  // event_burst - computed: true, optional: false, required: false
  public get eventBurst() {
    return this.getNumberAttribute('event_burst');
  }

  // event_qps - computed: true, optional: false, required: false
  public get eventQps() {
    return this.getNumberAttribute('event_qps');
  }

  // eviction_hard - computed: true, optional: false, required: false
  public get evictionHard() {
    return this.getStringAttribute('eviction_hard');
  }

  // eviction_max_pod_grace_period - computed: true, optional: false, required: false
  public get evictionMaxPodGracePeriod() {
    return this.getNumberAttribute('eviction_max_pod_grace_period');
  }

  // eviction_minimum_reclaim - computed: true, optional: false, required: false
  public get evictionMinimumReclaim() {
    return this.getStringAttribute('eviction_minimum_reclaim');
  }

  // eviction_pressure_transition_period - computed: true, optional: false, required: false
  public get evictionPressureTransitionPeriod() {
    return this.getStringAttribute('eviction_pressure_transition_period');
  }

  // eviction_soft - computed: true, optional: false, required: false
  public get evictionSoft() {
    return this.getStringAttribute('eviction_soft');
  }

  // eviction_soft_grace_period - computed: true, optional: false, required: false
  public get evictionSoftGracePeriod() {
    return this.getStringAttribute('eviction_soft_grace_period');
  }

  // experimental_allowed_unsafe_sysctls - computed: true, optional: false, required: false
  public get experimentalAllowedUnsafeSysctls() {
    return this.getListAttribute('experimental_allowed_unsafe_sysctls');
  }

  // fail_swap_on - computed: true, optional: false, required: false
  public get failSwapOn() {
    return this.getBooleanAttribute('fail_swap_on');
  }

  // feature_gates - computed: true, optional: false, required: false
  private _featureGates = new cdktf.StringMap(this, "feature_gates");
  public get featureGates() {
    return this._featureGates;
  }

  // hairpin_mode - computed: true, optional: false, required: false
  public get hairpinMode() {
    return this.getStringAttribute('hairpin_mode');
  }

  // hostname_override - computed: true, optional: false, required: false
  public get hostnameOverride() {
    return this.getStringAttribute('hostname_override');
  }

  // housekeeping_interval - computed: true, optional: false, required: false
  public get housekeepingInterval() {
    return this.getStringAttribute('housekeeping_interval');
  }

  // image_gc_high_threshold_percent - computed: true, optional: false, required: false
  public get imageGcHighThresholdPercent() {
    return this.getNumberAttribute('image_gc_high_threshold_percent');
  }

  // image_gc_low_threshold_percent - computed: true, optional: false, required: false
  public get imageGcLowThresholdPercent() {
    return this.getNumberAttribute('image_gc_low_threshold_percent');
  }

  // image_pull_progress_deadline - computed: true, optional: false, required: false
  public get imagePullProgressDeadline() {
    return this.getStringAttribute('image_pull_progress_deadline');
  }

  // kernel_memcg_notification - computed: true, optional: false, required: false
  public get kernelMemcgNotification() {
    return this.getBooleanAttribute('kernel_memcg_notification');
  }

  // kube_reserved - computed: true, optional: false, required: false
  private _kubeReserved = new cdktf.StringMap(this, "kube_reserved");
  public get kubeReserved() {
    return this._kubeReserved;
  }

  // kube_reserved_cgroup - computed: true, optional: false, required: false
  public get kubeReservedCgroup() {
    return this.getStringAttribute('kube_reserved_cgroup');
  }

  // kubeconfig_path - computed: true, optional: false, required: false
  public get kubeconfigPath() {
    return this.getStringAttribute('kubeconfig_path');
  }

  // kubelet_cgroups - computed: true, optional: false, required: false
  public get kubeletCgroups() {
    return this.getStringAttribute('kubelet_cgroups');
  }

  // log_format - computed: true, optional: false, required: false
  public get logFormat() {
    return this.getStringAttribute('log_format');
  }

  // log_level - computed: true, optional: false, required: false
  public get logLevel() {
    return this.getNumberAttribute('log_level');
  }

  // max_pods - computed: true, optional: false, required: false
  public get maxPods() {
    return this.getNumberAttribute('max_pods');
  }

  // network_plugin_mtu - computed: true, optional: false, required: false
  public get networkPluginMtu() {
    return this.getNumberAttribute('network_plugin_mtu');
  }

  // network_plugin_name - computed: true, optional: false, required: false
  public get networkPluginName() {
    return this.getStringAttribute('network_plugin_name');
  }

  // node_labels - computed: true, optional: false, required: false
  private _nodeLabels = new cdktf.StringMap(this, "node_labels");
  public get nodeLabels() {
    return this._nodeLabels;
  }

  // node_status_update_frequency - computed: true, optional: false, required: false
  public get nodeStatusUpdateFrequency() {
    return this.getStringAttribute('node_status_update_frequency');
  }

  // non_masquerade_cidr - computed: true, optional: false, required: false
  public get nonMasqueradeCidr() {
    return this.getStringAttribute('non_masquerade_cidr');
  }

  // nvidia_gp_us - computed: true, optional: false, required: false
  public get nvidiaGpUs() {
    return this.getNumberAttribute('nvidia_gp_us');
  }

  // pod_cidr - computed: true, optional: false, required: false
  public get podCidr() {
    return this.getStringAttribute('pod_cidr');
  }

  // pod_infra_container_image - computed: true, optional: false, required: false
  public get podInfraContainerImage() {
    return this.getStringAttribute('pod_infra_container_image');
  }

  // pod_manifest_path - computed: true, optional: false, required: false
  public get podManifestPath() {
    return this.getStringAttribute('pod_manifest_path');
  }

  // pod_pids_limit - computed: true, optional: false, required: false
  public get podPidsLimit() {
    return this.getNumberAttribute('pod_pids_limit');
  }

  // protect_kernel_defaults - computed: true, optional: false, required: false
  public get protectKernelDefaults() {
    return this.getBooleanAttribute('protect_kernel_defaults');
  }

  // read_only_port - computed: true, optional: false, required: false
  public get readOnlyPort() {
    return this.getNumberAttribute('read_only_port');
  }

  // reconcile_cidr - computed: true, optional: false, required: false
  public get reconcileCidr() {
    return this.getBooleanAttribute('reconcile_cidr');
  }

  // register_node - computed: true, optional: false, required: false
  public get registerNode() {
    return this.getBooleanAttribute('register_node');
  }

  // register_schedulable - computed: true, optional: false, required: false
  public get registerSchedulable() {
    return this.getBooleanAttribute('register_schedulable');
  }

  // registry_burst - computed: true, optional: false, required: false
  public get registryBurst() {
    return this.getNumberAttribute('registry_burst');
  }

  // registry_pull_qps - computed: true, optional: false, required: false
  public get registryPullQps() {
    return this.getNumberAttribute('registry_pull_qps');
  }

  // require_kubeconfig - computed: true, optional: false, required: false
  public get requireKubeconfig() {
    return this.getBooleanAttribute('require_kubeconfig');
  }

  // resolver_config - computed: true, optional: false, required: false
  public get resolverConfig() {
    return this.getStringAttribute('resolver_config');
  }

  // root_dir - computed: true, optional: false, required: false
  public get rootDir() {
    return this.getStringAttribute('root_dir');
  }

  // rotate_certificates - computed: true, optional: false, required: false
  public get rotateCertificates() {
    return this.getBooleanAttribute('rotate_certificates');
  }

  // runtime_cgroups - computed: true, optional: false, required: false
  public get runtimeCgroups() {
    return this.getStringAttribute('runtime_cgroups');
  }

  // runtime_request_timeout - computed: true, optional: false, required: false
  public get runtimeRequestTimeout() {
    return this.getStringAttribute('runtime_request_timeout');
  }

  // seccomp_profile_root - computed: true, optional: false, required: false
  public get seccompProfileRoot() {
    return this.getStringAttribute('seccomp_profile_root');
  }

  // serialize_image_pulls - computed: true, optional: false, required: false
  public get serializeImagePulls() {
    return this.getBooleanAttribute('serialize_image_pulls');
  }

  // shutdown_grace_period - computed: true, optional: false, required: false
  public get shutdownGracePeriod() {
    return this.getStringAttribute('shutdown_grace_period');
  }

  // shutdown_grace_period_critical_pods - computed: true, optional: false, required: false
  public get shutdownGracePeriodCriticalPods() {
    return this.getStringAttribute('shutdown_grace_period_critical_pods');
  }

  // streaming_connection_idle_timeout - computed: true, optional: false, required: false
  public get streamingConnectionIdleTimeout() {
    return this.getStringAttribute('streaming_connection_idle_timeout');
  }

  // system_cgroups - computed: true, optional: false, required: false
  public get systemCgroups() {
    return this.getStringAttribute('system_cgroups');
  }

  // system_reserved - computed: true, optional: false, required: false
  private _systemReserved = new cdktf.StringMap(this, "system_reserved");
  public get systemReserved() {
    return this._systemReserved;
  }

  // system_reserved_cgroup - computed: true, optional: false, required: false
  public get systemReservedCgroup() {
    return this.getStringAttribute('system_reserved_cgroup');
  }

  // taints - computed: true, optional: false, required: false
  public get taints() {
    return this.getListAttribute('taints');
  }

  // tls_cert_file - computed: true, optional: false, required: false
  public get tlsCertFile() {
    return this.getStringAttribute('tls_cert_file');
  }

  // tls_cipher_suites - computed: true, optional: false, required: false
  public get tlsCipherSuites() {
    return this.getListAttribute('tls_cipher_suites');
  }

  // tls_min_version - computed: true, optional: false, required: false
  public get tlsMinVersion() {
    return this.getStringAttribute('tls_min_version');
  }

  // tls_private_key_file - computed: true, optional: false, required: false
  public get tlsPrivateKeyFile() {
    return this.getStringAttribute('tls_private_key_file');
  }

  // topology_manager_policy - computed: true, optional: false, required: false
  public get topologyManagerPolicy() {
    return this.getStringAttribute('topology_manager_policy');
  }

  // volume_plugin_directory - computed: true, optional: false, required: false
  public get volumePluginDirectory() {
    return this.getStringAttribute('volume_plugin_directory');
  }

  // volume_stats_agg_period - computed: true, optional: false, required: false
  public get volumeStatsAggPeriod() {
    return this.getStringAttribute('volume_stats_agg_period');
  }
}

export class DataKopsClusterKubeletList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterKubeletOutputReference {
    return new DataKopsClusterKubeletOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterMasterKubeletAnonymousAuth {
}

export function dataKopsClusterMasterKubeletAnonymousAuthToTerraform(struct?: DataKopsClusterMasterKubeletAnonymousAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterMasterKubeletAnonymousAuthToHclTerraform(struct?: DataKopsClusterMasterKubeletAnonymousAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterMasterKubeletAnonymousAuthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterMasterKubeletAnonymousAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterMasterKubeletAnonymousAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}

export class DataKopsClusterMasterKubeletAnonymousAuthList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterMasterKubeletAnonymousAuthOutputReference {
    return new DataKopsClusterMasterKubeletAnonymousAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterMasterKubeletCpuCfsQuota {
}

export function dataKopsClusterMasterKubeletCpuCfsQuotaToTerraform(struct?: DataKopsClusterMasterKubeletCpuCfsQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterMasterKubeletCpuCfsQuotaToHclTerraform(struct?: DataKopsClusterMasterKubeletCpuCfsQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterMasterKubeletCpuCfsQuotaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterMasterKubeletCpuCfsQuota | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterMasterKubeletCpuCfsQuota | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}

export class DataKopsClusterMasterKubeletCpuCfsQuotaList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterMasterKubeletCpuCfsQuotaOutputReference {
    return new DataKopsClusterMasterKubeletCpuCfsQuotaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterMasterKubelet {
}

export function dataKopsClusterMasterKubeletToTerraform(struct?: DataKopsClusterMasterKubelet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterMasterKubeletToHclTerraform(struct?: DataKopsClusterMasterKubelet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterMasterKubeletOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterMasterKubelet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterMasterKubelet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_privileged - computed: true, optional: false, required: false
  public get allowPrivileged() {
    return this.getBooleanAttribute('allow_privileged');
  }

  // allowed_unsafe_sysctls - computed: true, optional: false, required: false
  public get allowedUnsafeSysctls() {
    return this.getListAttribute('allowed_unsafe_sysctls');
  }

  // anonymous_auth - computed: true, optional: false, required: false
  private _anonymousAuth = new DataKopsClusterMasterKubeletAnonymousAuthList(this, "anonymous_auth", false);
  public get anonymousAuth() {
    return this._anonymousAuth;
  }

  // api_servers - computed: true, optional: false, required: false
  public get apiServers() {
    return this.getStringAttribute('api_servers');
  }

  // authentication_token_webhook - computed: true, optional: false, required: false
  public get authenticationTokenWebhook() {
    return this.getBooleanAttribute('authentication_token_webhook');
  }

  // authentication_token_webhook_cache_ttl - computed: true, optional: false, required: false
  public get authenticationTokenWebhookCacheTtl() {
    return this.getStringAttribute('authentication_token_webhook_cache_ttl');
  }

  // authorization_mode - computed: true, optional: false, required: false
  public get authorizationMode() {
    return this.getStringAttribute('authorization_mode');
  }

  // babysit_daemons - computed: true, optional: false, required: false
  public get babysitDaemons() {
    return this.getBooleanAttribute('babysit_daemons');
  }

  // bootstrap_kubeconfig - computed: true, optional: false, required: false
  public get bootstrapKubeconfig() {
    return this.getStringAttribute('bootstrap_kubeconfig');
  }

  // cgroup_driver - computed: true, optional: false, required: false
  public get cgroupDriver() {
    return this.getStringAttribute('cgroup_driver');
  }

  // cgroup_root - computed: true, optional: false, required: false
  public get cgroupRoot() {
    return this.getStringAttribute('cgroup_root');
  }

  // client_ca_file - computed: true, optional: false, required: false
  public get clientCaFile() {
    return this.getStringAttribute('client_ca_file');
  }

  // cloud_provider - computed: true, optional: false, required: false
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }

  // cluster_dns - computed: true, optional: false, required: false
  public get clusterDns() {
    return this.getStringAttribute('cluster_dns');
  }

  // cluster_domain - computed: true, optional: false, required: false
  public get clusterDomain() {
    return this.getStringAttribute('cluster_domain');
  }

  // configure_cbr0 - computed: true, optional: false, required: false
  public get configureCbr0() {
    return this.getBooleanAttribute('configure_cbr0');
  }

  // container_log_max_files - computed: true, optional: false, required: false
  public get containerLogMaxFiles() {
    return this.getNumberAttribute('container_log_max_files');
  }

  // container_log_max_size - computed: true, optional: false, required: false
  public get containerLogMaxSize() {
    return this.getStringAttribute('container_log_max_size');
  }

  // cpu_cfs_quota - computed: true, optional: false, required: false
  private _cpuCfsQuota = new DataKopsClusterMasterKubeletCpuCfsQuotaList(this, "cpu_cfs_quota", false);
  public get cpuCfsQuota() {
    return this._cpuCfsQuota;
  }

  // cpu_cfs_quota_period - computed: true, optional: false, required: false
  public get cpuCfsQuotaPeriod() {
    return this.getStringAttribute('cpu_cfs_quota_period');
  }

  // cpu_manager_policy - computed: true, optional: false, required: false
  public get cpuManagerPolicy() {
    return this.getStringAttribute('cpu_manager_policy');
  }

  // docker_disable_shared_pid - computed: true, optional: false, required: false
  public get dockerDisableSharedPid() {
    return this.getBooleanAttribute('docker_disable_shared_pid');
  }

  // enable_cadvisor_json_endpoints - computed: true, optional: false, required: false
  public get enableCadvisorJsonEndpoints() {
    return this.getBooleanAttribute('enable_cadvisor_json_endpoints');
  }

  // enable_custom_metrics - computed: true, optional: false, required: false
  public get enableCustomMetrics() {
    return this.getBooleanAttribute('enable_custom_metrics');
  }

  // enable_debugging_handlers - computed: true, optional: false, required: false
  public get enableDebuggingHandlers() {
    return this.getBooleanAttribute('enable_debugging_handlers');
  }

  // enforce_node_allocatable - computed: true, optional: false, required: false
  public get enforceNodeAllocatable() {
    return this.getStringAttribute('enforce_node_allocatable');
  }

  // event_burst - computed: true, optional: false, required: false
  public get eventBurst() {
    return this.getNumberAttribute('event_burst');
  }

  // event_qps - computed: true, optional: false, required: false
  public get eventQps() {
    return this.getNumberAttribute('event_qps');
  }

  // eviction_hard - computed: true, optional: false, required: false
  public get evictionHard() {
    return this.getStringAttribute('eviction_hard');
  }

  // eviction_max_pod_grace_period - computed: true, optional: false, required: false
  public get evictionMaxPodGracePeriod() {
    return this.getNumberAttribute('eviction_max_pod_grace_period');
  }

  // eviction_minimum_reclaim - computed: true, optional: false, required: false
  public get evictionMinimumReclaim() {
    return this.getStringAttribute('eviction_minimum_reclaim');
  }

  // eviction_pressure_transition_period - computed: true, optional: false, required: false
  public get evictionPressureTransitionPeriod() {
    return this.getStringAttribute('eviction_pressure_transition_period');
  }

  // eviction_soft - computed: true, optional: false, required: false
  public get evictionSoft() {
    return this.getStringAttribute('eviction_soft');
  }

  // eviction_soft_grace_period - computed: true, optional: false, required: false
  public get evictionSoftGracePeriod() {
    return this.getStringAttribute('eviction_soft_grace_period');
  }

  // experimental_allowed_unsafe_sysctls - computed: true, optional: false, required: false
  public get experimentalAllowedUnsafeSysctls() {
    return this.getListAttribute('experimental_allowed_unsafe_sysctls');
  }

  // fail_swap_on - computed: true, optional: false, required: false
  public get failSwapOn() {
    return this.getBooleanAttribute('fail_swap_on');
  }

  // feature_gates - computed: true, optional: false, required: false
  private _featureGates = new cdktf.StringMap(this, "feature_gates");
  public get featureGates() {
    return this._featureGates;
  }

  // hairpin_mode - computed: true, optional: false, required: false
  public get hairpinMode() {
    return this.getStringAttribute('hairpin_mode');
  }

  // hostname_override - computed: true, optional: false, required: false
  public get hostnameOverride() {
    return this.getStringAttribute('hostname_override');
  }

  // housekeeping_interval - computed: true, optional: false, required: false
  public get housekeepingInterval() {
    return this.getStringAttribute('housekeeping_interval');
  }

  // image_gc_high_threshold_percent - computed: true, optional: false, required: false
  public get imageGcHighThresholdPercent() {
    return this.getNumberAttribute('image_gc_high_threshold_percent');
  }

  // image_gc_low_threshold_percent - computed: true, optional: false, required: false
  public get imageGcLowThresholdPercent() {
    return this.getNumberAttribute('image_gc_low_threshold_percent');
  }

  // image_pull_progress_deadline - computed: true, optional: false, required: false
  public get imagePullProgressDeadline() {
    return this.getStringAttribute('image_pull_progress_deadline');
  }

  // kernel_memcg_notification - computed: true, optional: false, required: false
  public get kernelMemcgNotification() {
    return this.getBooleanAttribute('kernel_memcg_notification');
  }

  // kube_reserved - computed: true, optional: false, required: false
  private _kubeReserved = new cdktf.StringMap(this, "kube_reserved");
  public get kubeReserved() {
    return this._kubeReserved;
  }

  // kube_reserved_cgroup - computed: true, optional: false, required: false
  public get kubeReservedCgroup() {
    return this.getStringAttribute('kube_reserved_cgroup');
  }

  // kubeconfig_path - computed: true, optional: false, required: false
  public get kubeconfigPath() {
    return this.getStringAttribute('kubeconfig_path');
  }

  // kubelet_cgroups - computed: true, optional: false, required: false
  public get kubeletCgroups() {
    return this.getStringAttribute('kubelet_cgroups');
  }

  // log_format - computed: true, optional: false, required: false
  public get logFormat() {
    return this.getStringAttribute('log_format');
  }

  // log_level - computed: true, optional: false, required: false
  public get logLevel() {
    return this.getNumberAttribute('log_level');
  }

  // max_pods - computed: true, optional: false, required: false
  public get maxPods() {
    return this.getNumberAttribute('max_pods');
  }

  // network_plugin_mtu - computed: true, optional: false, required: false
  public get networkPluginMtu() {
    return this.getNumberAttribute('network_plugin_mtu');
  }

  // network_plugin_name - computed: true, optional: false, required: false
  public get networkPluginName() {
    return this.getStringAttribute('network_plugin_name');
  }

  // node_labels - computed: true, optional: false, required: false
  private _nodeLabels = new cdktf.StringMap(this, "node_labels");
  public get nodeLabels() {
    return this._nodeLabels;
  }

  // node_status_update_frequency - computed: true, optional: false, required: false
  public get nodeStatusUpdateFrequency() {
    return this.getStringAttribute('node_status_update_frequency');
  }

  // non_masquerade_cidr - computed: true, optional: false, required: false
  public get nonMasqueradeCidr() {
    return this.getStringAttribute('non_masquerade_cidr');
  }

  // nvidia_gp_us - computed: true, optional: false, required: false
  public get nvidiaGpUs() {
    return this.getNumberAttribute('nvidia_gp_us');
  }

  // pod_cidr - computed: true, optional: false, required: false
  public get podCidr() {
    return this.getStringAttribute('pod_cidr');
  }

  // pod_infra_container_image - computed: true, optional: false, required: false
  public get podInfraContainerImage() {
    return this.getStringAttribute('pod_infra_container_image');
  }

  // pod_manifest_path - computed: true, optional: false, required: false
  public get podManifestPath() {
    return this.getStringAttribute('pod_manifest_path');
  }

  // pod_pids_limit - computed: true, optional: false, required: false
  public get podPidsLimit() {
    return this.getNumberAttribute('pod_pids_limit');
  }

  // protect_kernel_defaults - computed: true, optional: false, required: false
  public get protectKernelDefaults() {
    return this.getBooleanAttribute('protect_kernel_defaults');
  }

  // read_only_port - computed: true, optional: false, required: false
  public get readOnlyPort() {
    return this.getNumberAttribute('read_only_port');
  }

  // reconcile_cidr - computed: true, optional: false, required: false
  public get reconcileCidr() {
    return this.getBooleanAttribute('reconcile_cidr');
  }

  // register_node - computed: true, optional: false, required: false
  public get registerNode() {
    return this.getBooleanAttribute('register_node');
  }

  // register_schedulable - computed: true, optional: false, required: false
  public get registerSchedulable() {
    return this.getBooleanAttribute('register_schedulable');
  }

  // registry_burst - computed: true, optional: false, required: false
  public get registryBurst() {
    return this.getNumberAttribute('registry_burst');
  }

  // registry_pull_qps - computed: true, optional: false, required: false
  public get registryPullQps() {
    return this.getNumberAttribute('registry_pull_qps');
  }

  // require_kubeconfig - computed: true, optional: false, required: false
  public get requireKubeconfig() {
    return this.getBooleanAttribute('require_kubeconfig');
  }

  // resolver_config - computed: true, optional: false, required: false
  public get resolverConfig() {
    return this.getStringAttribute('resolver_config');
  }

  // root_dir - computed: true, optional: false, required: false
  public get rootDir() {
    return this.getStringAttribute('root_dir');
  }

  // rotate_certificates - computed: true, optional: false, required: false
  public get rotateCertificates() {
    return this.getBooleanAttribute('rotate_certificates');
  }

  // runtime_cgroups - computed: true, optional: false, required: false
  public get runtimeCgroups() {
    return this.getStringAttribute('runtime_cgroups');
  }

  // runtime_request_timeout - computed: true, optional: false, required: false
  public get runtimeRequestTimeout() {
    return this.getStringAttribute('runtime_request_timeout');
  }

  // seccomp_profile_root - computed: true, optional: false, required: false
  public get seccompProfileRoot() {
    return this.getStringAttribute('seccomp_profile_root');
  }

  // serialize_image_pulls - computed: true, optional: false, required: false
  public get serializeImagePulls() {
    return this.getBooleanAttribute('serialize_image_pulls');
  }

  // shutdown_grace_period - computed: true, optional: false, required: false
  public get shutdownGracePeriod() {
    return this.getStringAttribute('shutdown_grace_period');
  }

  // shutdown_grace_period_critical_pods - computed: true, optional: false, required: false
  public get shutdownGracePeriodCriticalPods() {
    return this.getStringAttribute('shutdown_grace_period_critical_pods');
  }

  // streaming_connection_idle_timeout - computed: true, optional: false, required: false
  public get streamingConnectionIdleTimeout() {
    return this.getStringAttribute('streaming_connection_idle_timeout');
  }

  // system_cgroups - computed: true, optional: false, required: false
  public get systemCgroups() {
    return this.getStringAttribute('system_cgroups');
  }

  // system_reserved - computed: true, optional: false, required: false
  private _systemReserved = new cdktf.StringMap(this, "system_reserved");
  public get systemReserved() {
    return this._systemReserved;
  }

  // system_reserved_cgroup - computed: true, optional: false, required: false
  public get systemReservedCgroup() {
    return this.getStringAttribute('system_reserved_cgroup');
  }

  // taints - computed: true, optional: false, required: false
  public get taints() {
    return this.getListAttribute('taints');
  }

  // tls_cert_file - computed: true, optional: false, required: false
  public get tlsCertFile() {
    return this.getStringAttribute('tls_cert_file');
  }

  // tls_cipher_suites - computed: true, optional: false, required: false
  public get tlsCipherSuites() {
    return this.getListAttribute('tls_cipher_suites');
  }

  // tls_min_version - computed: true, optional: false, required: false
  public get tlsMinVersion() {
    return this.getStringAttribute('tls_min_version');
  }

  // tls_private_key_file - computed: true, optional: false, required: false
  public get tlsPrivateKeyFile() {
    return this.getStringAttribute('tls_private_key_file');
  }

  // topology_manager_policy - computed: true, optional: false, required: false
  public get topologyManagerPolicy() {
    return this.getStringAttribute('topology_manager_policy');
  }

  // volume_plugin_directory - computed: true, optional: false, required: false
  public get volumePluginDirectory() {
    return this.getStringAttribute('volume_plugin_directory');
  }

  // volume_stats_agg_period - computed: true, optional: false, required: false
  public get volumeStatsAggPeriod() {
    return this.getStringAttribute('volume_stats_agg_period');
  }
}

export class DataKopsClusterMasterKubeletList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterMasterKubeletOutputReference {
    return new DataKopsClusterMasterKubeletOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterMetricsServer {
}

export function dataKopsClusterMetricsServerToTerraform(struct?: DataKopsClusterMetricsServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterMetricsServerToHclTerraform(struct?: DataKopsClusterMetricsServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterMetricsServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterMetricsServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterMetricsServer | undefined) {
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

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // insecure - computed: true, optional: false, required: false
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
}

export class DataKopsClusterMetricsServerList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterMetricsServerOutputReference {
    return new DataKopsClusterMetricsServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterNetworkingAmazonVpcEnv {
}

export function dataKopsClusterNetworkingAmazonVpcEnvToTerraform(struct?: DataKopsClusterNetworkingAmazonVpcEnv): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterNetworkingAmazonVpcEnvToHclTerraform(struct?: DataKopsClusterNetworkingAmazonVpcEnv): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterNetworkingAmazonVpcEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterNetworkingAmazonVpcEnv | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterNetworkingAmazonVpcEnv | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataKopsClusterNetworkingAmazonVpcEnvList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterNetworkingAmazonVpcEnvOutputReference {
    return new DataKopsClusterNetworkingAmazonVpcEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterNetworkingAmazonVpc {
}

export function dataKopsClusterNetworkingAmazonVpcToTerraform(struct?: DataKopsClusterNetworkingAmazonVpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterNetworkingAmazonVpcToHclTerraform(struct?: DataKopsClusterNetworkingAmazonVpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterNetworkingAmazonVpcOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterNetworkingAmazonVpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterNetworkingAmazonVpc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // env - computed: true, optional: false, required: false
  private _env = new DataKopsClusterNetworkingAmazonVpcEnvList(this, "env", false);
  public get env() {
    return this._env;
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // init_image - computed: true, optional: false, required: false
  public get initImage() {
    return this.getStringAttribute('init_image');
  }
}

export class DataKopsClusterNetworkingAmazonVpcList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterNetworkingAmazonVpcOutputReference {
    return new DataKopsClusterNetworkingAmazonVpcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterNetworkingCalico {
}

export function dataKopsClusterNetworkingCalicoToTerraform(struct?: DataKopsClusterNetworkingCalico): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterNetworkingCalicoToHclTerraform(struct?: DataKopsClusterNetworkingCalico): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterNetworkingCalicoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterNetworkingCalico | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterNetworkingCalico | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_ip_forwarding - computed: true, optional: false, required: false
  public get allowIpForwarding() {
    return this.getBooleanAttribute('allow_ip_forwarding');
  }

  // aws_src_dst_check - computed: true, optional: false, required: false
  public get awsSrcDstCheck() {
    return this.getStringAttribute('aws_src_dst_check');
  }

  // bpf_enabled - computed: true, optional: false, required: false
  public get bpfEnabled() {
    return this.getBooleanAttribute('bpf_enabled');
  }

  // bpf_external_service_mode - computed: true, optional: false, required: false
  public get bpfExternalServiceMode() {
    return this.getStringAttribute('bpf_external_service_mode');
  }

  // bpf_kube_proxy_iptables_cleanup_enabled - computed: true, optional: false, required: false
  public get bpfKubeProxyIptablesCleanupEnabled() {
    return this.getBooleanAttribute('bpf_kube_proxy_iptables_cleanup_enabled');
  }

  // bpf_log_level - computed: true, optional: false, required: false
  public get bpfLogLevel() {
    return this.getStringAttribute('bpf_log_level');
  }

  // chain_insert_mode - computed: true, optional: false, required: false
  public get chainInsertMode() {
    return this.getStringAttribute('chain_insert_mode');
  }

  // cpu_request - computed: true, optional: false, required: false
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }

  // cross_subnet - computed: true, optional: false, required: false
  public get crossSubnet() {
    return this.getBooleanAttribute('cross_subnet');
  }

  // encapsulation_mode - computed: true, optional: false, required: false
  public get encapsulationMode() {
    return this.getStringAttribute('encapsulation_mode');
  }

  // ip_ip_mode - computed: true, optional: false, required: false
  public get ipIpMode() {
    return this.getStringAttribute('ip_ip_mode');
  }

  // iptables_backend - computed: true, optional: false, required: false
  public get iptablesBackend() {
    return this.getStringAttribute('iptables_backend');
  }

  // ipv4_auto_detection_method - computed: true, optional: false, required: false
  public get ipv4AutoDetectionMethod() {
    return this.getStringAttribute('ipv4_auto_detection_method');
  }

  // ipv6_auto_detection_method - computed: true, optional: false, required: false
  public get ipv6AutoDetectionMethod() {
    return this.getStringAttribute('ipv6_auto_detection_method');
  }

  // log_severity_screen - computed: true, optional: false, required: false
  public get logSeverityScreen() {
    return this.getStringAttribute('log_severity_screen');
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // prometheus_go_metrics_enabled - computed: true, optional: false, required: false
  public get prometheusGoMetricsEnabled() {
    return this.getBooleanAttribute('prometheus_go_metrics_enabled');
  }

  // prometheus_metrics_enabled - computed: true, optional: false, required: false
  public get prometheusMetricsEnabled() {
    return this.getBooleanAttribute('prometheus_metrics_enabled');
  }

  // prometheus_metrics_port - computed: true, optional: false, required: false
  public get prometheusMetricsPort() {
    return this.getNumberAttribute('prometheus_metrics_port');
  }

  // prometheus_process_metrics_enabled - computed: true, optional: false, required: false
  public get prometheusProcessMetricsEnabled() {
    return this.getBooleanAttribute('prometheus_process_metrics_enabled');
  }

  // registry - computed: true, optional: false, required: false
  public get registry() {
    return this.getStringAttribute('registry');
  }

  // typha_prometheus_metrics_enabled - computed: true, optional: false, required: false
  public get typhaPrometheusMetricsEnabled() {
    return this.getBooleanAttribute('typha_prometheus_metrics_enabled');
  }

  // typha_prometheus_metrics_port - computed: true, optional: false, required: false
  public get typhaPrometheusMetricsPort() {
    return this.getNumberAttribute('typha_prometheus_metrics_port');
  }

  // typha_replicas - computed: true, optional: false, required: false
  public get typhaReplicas() {
    return this.getNumberAttribute('typha_replicas');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // vxlan_mode - computed: true, optional: false, required: false
  public get vxlanMode() {
    return this.getStringAttribute('vxlan_mode');
  }

  // wireguard_enabled - computed: true, optional: false, required: false
  public get wireguardEnabled() {
    return this.getBooleanAttribute('wireguard_enabled');
  }
}

export class DataKopsClusterNetworkingCalicoList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterNetworkingCalicoOutputReference {
    return new DataKopsClusterNetworkingCalicoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterNetworkingCanal {
}

export function dataKopsClusterNetworkingCanalToTerraform(struct?: DataKopsClusterNetworkingCanal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterNetworkingCanalToHclTerraform(struct?: DataKopsClusterNetworkingCanal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterNetworkingCanalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterNetworkingCanal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterNetworkingCanal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // chain_insert_mode - computed: true, optional: false, required: false
  public get chainInsertMode() {
    return this.getStringAttribute('chain_insert_mode');
  }

  // cpu_request - computed: true, optional: false, required: false
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }

  // default_endpoint_to_host_action - computed: true, optional: false, required: false
  public get defaultEndpointToHostAction() {
    return this.getStringAttribute('default_endpoint_to_host_action');
  }

  // flanneld_iptables_forward_rules - computed: true, optional: false, required: false
  public get flanneldIptablesForwardRules() {
    return this.getBooleanAttribute('flanneld_iptables_forward_rules');
  }

  // iptables_backend - computed: true, optional: false, required: false
  public get iptablesBackend() {
    return this.getStringAttribute('iptables_backend');
  }

  // log_severity_sys - computed: true, optional: false, required: false
  public get logSeveritySys() {
    return this.getStringAttribute('log_severity_sys');
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // prometheus_go_metrics_enabled - computed: true, optional: false, required: false
  public get prometheusGoMetricsEnabled() {
    return this.getBooleanAttribute('prometheus_go_metrics_enabled');
  }

  // prometheus_metrics_enabled - computed: true, optional: false, required: false
  public get prometheusMetricsEnabled() {
    return this.getBooleanAttribute('prometheus_metrics_enabled');
  }

  // prometheus_metrics_port - computed: true, optional: false, required: false
  public get prometheusMetricsPort() {
    return this.getNumberAttribute('prometheus_metrics_port');
  }

  // prometheus_process_metrics_enabled - computed: true, optional: false, required: false
  public get prometheusProcessMetricsEnabled() {
    return this.getBooleanAttribute('prometheus_process_metrics_enabled');
  }

  // typha_prometheus_metrics_enabled - computed: true, optional: false, required: false
  public get typhaPrometheusMetricsEnabled() {
    return this.getBooleanAttribute('typha_prometheus_metrics_enabled');
  }

  // typha_prometheus_metrics_port - computed: true, optional: false, required: false
  public get typhaPrometheusMetricsPort() {
    return this.getNumberAttribute('typha_prometheus_metrics_port');
  }

  // typha_replicas - computed: true, optional: false, required: false
  public get typhaReplicas() {
    return this.getNumberAttribute('typha_replicas');
  }
}

export class DataKopsClusterNetworkingCanalList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterNetworkingCanalOutputReference {
    return new DataKopsClusterNetworkingCanalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterNetworkingCiliumHubble {
}

export function dataKopsClusterNetworkingCiliumHubbleToTerraform(struct?: DataKopsClusterNetworkingCiliumHubble): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterNetworkingCiliumHubbleToHclTerraform(struct?: DataKopsClusterNetworkingCiliumHubble): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterNetworkingCiliumHubbleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterNetworkingCiliumHubble | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterNetworkingCiliumHubble | undefined) {
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

  // metrics - computed: true, optional: false, required: false
  public get metrics() {
    return this.getListAttribute('metrics');
  }
}

export class DataKopsClusterNetworkingCiliumHubbleList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterNetworkingCiliumHubbleOutputReference {
    return new DataKopsClusterNetworkingCiliumHubbleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterNetworkingCilium {
}

export function dataKopsClusterNetworkingCiliumToTerraform(struct?: DataKopsClusterNetworkingCilium): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterNetworkingCiliumToHclTerraform(struct?: DataKopsClusterNetworkingCilium): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterNetworkingCiliumOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterNetworkingCilium | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterNetworkingCilium | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_pod_annotations - computed: true, optional: false, required: false
  private _agentPodAnnotations = new cdktf.StringMap(this, "agent_pod_annotations");
  public get agentPodAnnotations() {
    return this._agentPodAnnotations;
  }

  // agent_prometheus_port - computed: true, optional: false, required: false
  public get agentPrometheusPort() {
    return this.getNumberAttribute('agent_prometheus_port');
  }

  // auto_direct_node_routes - computed: true, optional: false, required: false
  public get autoDirectNodeRoutes() {
    return this.getBooleanAttribute('auto_direct_node_routes');
  }

  // bpf_neigh_global_max - computed: true, optional: false, required: false
  public get bpfNeighGlobalMax() {
    return this.getNumberAttribute('bpf_neigh_global_max');
  }

  // bpf_policy_map_max - computed: true, optional: false, required: false
  public get bpfPolicyMapMax() {
    return this.getNumberAttribute('bpf_policy_map_max');
  }

  // bpfct_global_any_max - computed: true, optional: false, required: false
  public get bpfctGlobalAnyMax() {
    return this.getNumberAttribute('bpfct_global_any_max');
  }

  // bpfct_global_tcp_max - computed: true, optional: false, required: false
  public get bpfctGlobalTcpMax() {
    return this.getNumberAttribute('bpfct_global_tcp_max');
  }

  // bpflb_algorithm - computed: true, optional: false, required: false
  public get bpflbAlgorithm() {
    return this.getStringAttribute('bpflb_algorithm');
  }

  // bpflb_maglev_table_size - computed: true, optional: false, required: false
  public get bpflbMaglevTableSize() {
    return this.getStringAttribute('bpflb_maglev_table_size');
  }

  // bpflb_map_max - computed: true, optional: false, required: false
  public get bpflbMapMax() {
    return this.getNumberAttribute('bpflb_map_max');
  }

  // bpflb_sock_host_ns_only - computed: true, optional: false, required: false
  public get bpflbSockHostNsOnly() {
    return this.getBooleanAttribute('bpflb_sock_host_ns_only');
  }

  // bpfnat_global_max - computed: true, optional: false, required: false
  public get bpfnatGlobalMax() {
    return this.getNumberAttribute('bpfnat_global_max');
  }

  // chaining_mode - computed: true, optional: false, required: false
  public get chainingMode() {
    return this.getStringAttribute('chaining_mode');
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // cpu_request - computed: true, optional: false, required: false
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }

  // debug - computed: true, optional: false, required: false
  public get debug() {
    return this.getBooleanAttribute('debug');
  }

  // disable_cnp_status_updates - computed: true, optional: false, required: false
  public get disableCnpStatusUpdates() {
    return this.getBooleanAttribute('disable_cnp_status_updates');
  }

  // disable_endpoint_crd - computed: true, optional: false, required: false
  public get disableEndpointCrd() {
    return this.getBooleanAttribute('disable_endpoint_crd');
  }

  // enable_bpf_masquerade - computed: true, optional: false, required: false
  public get enableBpfMasquerade() {
    return this.getBooleanAttribute('enable_bpf_masquerade');
  }

  // enable_encryption - computed: true, optional: false, required: false
  public get enableEncryption() {
    return this.getBooleanAttribute('enable_encryption');
  }

  // enable_endpoint_health_checking - computed: true, optional: false, required: false
  public get enableEndpointHealthChecking() {
    return this.getBooleanAttribute('enable_endpoint_health_checking');
  }

  // enable_host_reachable_services - computed: true, optional: false, required: false
  public get enableHostReachableServices() {
    return this.getBooleanAttribute('enable_host_reachable_services');
  }

  // enable_l7_proxy - computed: true, optional: false, required: false
  public get enableL7Proxy() {
    return this.getBooleanAttribute('enable_l7_proxy');
  }

  // enable_node_port - computed: true, optional: false, required: false
  public get enableNodePort() {
    return this.getBooleanAttribute('enable_node_port');
  }

  // enable_policy - computed: true, optional: false, required: false
  public get enablePolicy() {
    return this.getStringAttribute('enable_policy');
  }

  // enable_prometheus_metrics - computed: true, optional: false, required: false
  public get enablePrometheusMetrics() {
    return this.getBooleanAttribute('enable_prometheus_metrics');
  }

  // enable_remote_node_identity - computed: true, optional: false, required: false
  public get enableRemoteNodeIdentity() {
    return this.getBooleanAttribute('enable_remote_node_identity');
  }

  // enable_service_topology - computed: true, optional: false, required: false
  public get enableServiceTopology() {
    return this.getBooleanAttribute('enable_service_topology');
  }

  // encryption_type - computed: true, optional: false, required: false
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }

  // etcd_managed - computed: true, optional: false, required: false
  public get etcdManaged() {
    return this.getBooleanAttribute('etcd_managed');
  }

  // hubble - computed: true, optional: false, required: false
  private _hubble = new DataKopsClusterNetworkingCiliumHubbleList(this, "hubble", false);
  public get hubble() {
    return this._hubble;
  }

  // identity_allocation_mode - computed: true, optional: false, required: false
  public get identityAllocationMode() {
    return this.getStringAttribute('identity_allocation_mode');
  }

  // identity_change_grace_period - computed: true, optional: false, required: false
  public get identityChangeGracePeriod() {
    return this.getStringAttribute('identity_change_grace_period');
  }

  // install_iptables_rules - computed: true, optional: false, required: false
  public get installIptablesRules() {
    return this.getBooleanAttribute('install_iptables_rules');
  }

  // ipam - computed: true, optional: false, required: false
  public get ipam() {
    return this.getStringAttribute('ipam');
  }

  // masquerade - computed: true, optional: false, required: false
  public get masquerade() {
    return this.getBooleanAttribute('masquerade');
  }

  // memory_request - computed: true, optional: false, required: false
  public get memoryRequest() {
    return this.getStringAttribute('memory_request');
  }

  // metrics - computed: true, optional: false, required: false
  public get metrics() {
    return this.getListAttribute('metrics');
  }

  // monitor_aggregation - computed: true, optional: false, required: false
  public get monitorAggregation() {
    return this.getStringAttribute('monitor_aggregation');
  }

  // preallocate_bpf_maps - computed: true, optional: false, required: false
  public get preallocateBpfMaps() {
    return this.getBooleanAttribute('preallocate_bpf_maps');
  }

  // sidecar_istio_proxy_image - computed: true, optional: false, required: false
  public get sidecarIstioProxyImage() {
    return this.getStringAttribute('sidecar_istio_proxy_image');
  }

  // to_fqdns_dns_reject_response_code - computed: true, optional: false, required: false
  public get toFqdnsDnsRejectResponseCode() {
    return this.getStringAttribute('to_fqdns_dns_reject_response_code');
  }

  // to_fqdns_enable_poller - computed: true, optional: false, required: false
  public get toFqdnsEnablePoller() {
    return this.getBooleanAttribute('to_fqdns_enable_poller');
  }

  // tunnel - computed: true, optional: false, required: false
  public get tunnel() {
    return this.getStringAttribute('tunnel');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataKopsClusterNetworkingCiliumList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterNetworkingCiliumOutputReference {
    return new DataKopsClusterNetworkingCiliumOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterNetworkingClassic {
}

export function dataKopsClusterNetworkingClassicToTerraform(struct?: DataKopsClusterNetworkingClassic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterNetworkingClassicToHclTerraform(struct?: DataKopsClusterNetworkingClassic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterNetworkingClassicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterNetworkingClassic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterNetworkingClassic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class DataKopsClusterNetworkingClassicList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterNetworkingClassicOutputReference {
    return new DataKopsClusterNetworkingClassicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterNetworkingCni {
}

export function dataKopsClusterNetworkingCniToTerraform(struct?: DataKopsClusterNetworkingCni): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterNetworkingCniToHclTerraform(struct?: DataKopsClusterNetworkingCni): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterNetworkingCniOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterNetworkingCni | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterNetworkingCni | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // uses_secondary_ip - computed: true, optional: false, required: false
  public get usesSecondaryIp() {
    return this.getBooleanAttribute('uses_secondary_ip');
  }
}

export class DataKopsClusterNetworkingCniList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterNetworkingCniOutputReference {
    return new DataKopsClusterNetworkingCniOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterNetworkingExternal {
}

export function dataKopsClusterNetworkingExternalToTerraform(struct?: DataKopsClusterNetworkingExternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterNetworkingExternalToHclTerraform(struct?: DataKopsClusterNetworkingExternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterNetworkingExternalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterNetworkingExternal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterNetworkingExternal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class DataKopsClusterNetworkingExternalList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterNetworkingExternalOutputReference {
    return new DataKopsClusterNetworkingExternalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterNetworkingFlannel {
}

export function dataKopsClusterNetworkingFlannelToTerraform(struct?: DataKopsClusterNetworkingFlannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterNetworkingFlannelToHclTerraform(struct?: DataKopsClusterNetworkingFlannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterNetworkingFlannelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterNetworkingFlannel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterNetworkingFlannel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backend - computed: true, optional: false, required: false
  public get backend() {
    return this.getStringAttribute('backend');
  }

  // iptables_resync_seconds - computed: true, optional: false, required: false
  public get iptablesResyncSeconds() {
    return this.getNumberAttribute('iptables_resync_seconds');
  }
}

export class DataKopsClusterNetworkingFlannelList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterNetworkingFlannelOutputReference {
    return new DataKopsClusterNetworkingFlannelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterNetworkingGce {
}

export function dataKopsClusterNetworkingGceToTerraform(struct?: DataKopsClusterNetworkingGce): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterNetworkingGceToHclTerraform(struct?: DataKopsClusterNetworkingGce): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterNetworkingGceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterNetworkingGce | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterNetworkingGce | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class DataKopsClusterNetworkingGceList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterNetworkingGceOutputReference {
    return new DataKopsClusterNetworkingGceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterNetworkingKopeio {
}

export function dataKopsClusterNetworkingKopeioToTerraform(struct?: DataKopsClusterNetworkingKopeio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterNetworkingKopeioToHclTerraform(struct?: DataKopsClusterNetworkingKopeio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterNetworkingKopeioOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterNetworkingKopeio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterNetworkingKopeio | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class DataKopsClusterNetworkingKopeioList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterNetworkingKopeioOutputReference {
    return new DataKopsClusterNetworkingKopeioOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterNetworkingKubenet {
}

export function dataKopsClusterNetworkingKubenetToTerraform(struct?: DataKopsClusterNetworkingKubenet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterNetworkingKubenetToHclTerraform(struct?: DataKopsClusterNetworkingKubenet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterNetworkingKubenetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterNetworkingKubenet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterNetworkingKubenet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class DataKopsClusterNetworkingKubenetList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterNetworkingKubenetOutputReference {
    return new DataKopsClusterNetworkingKubenetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterNetworkingKuberouter {
}

export function dataKopsClusterNetworkingKuberouterToTerraform(struct?: DataKopsClusterNetworkingKuberouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterNetworkingKuberouterToHclTerraform(struct?: DataKopsClusterNetworkingKuberouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterNetworkingKuberouterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterNetworkingKuberouter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterNetworkingKuberouter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class DataKopsClusterNetworkingKuberouterList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterNetworkingKuberouterOutputReference {
    return new DataKopsClusterNetworkingKuberouterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterNetworkingLyftVpc {
}

export function dataKopsClusterNetworkingLyftVpcToTerraform(struct?: DataKopsClusterNetworkingLyftVpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterNetworkingLyftVpcToHclTerraform(struct?: DataKopsClusterNetworkingLyftVpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterNetworkingLyftVpcOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterNetworkingLyftVpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterNetworkingLyftVpc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // subnet_tags - computed: true, optional: false, required: false
  private _subnetTags = new cdktf.StringMap(this, "subnet_tags");
  public get subnetTags() {
    return this._subnetTags;
  }
}

export class DataKopsClusterNetworkingLyftVpcList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterNetworkingLyftVpcOutputReference {
    return new DataKopsClusterNetworkingLyftVpcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterNetworkingRomana {
}

export function dataKopsClusterNetworkingRomanaToTerraform(struct?: DataKopsClusterNetworkingRomana): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterNetworkingRomanaToHclTerraform(struct?: DataKopsClusterNetworkingRomana): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterNetworkingRomanaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterNetworkingRomana | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterNetworkingRomana | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // daemon_service_ip - computed: true, optional: false, required: false
  public get daemonServiceIp() {
    return this.getStringAttribute('daemon_service_ip');
  }

  // etcd_service_ip - computed: true, optional: false, required: false
  public get etcdServiceIp() {
    return this.getStringAttribute('etcd_service_ip');
  }
}

export class DataKopsClusterNetworkingRomanaList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterNetworkingRomanaOutputReference {
    return new DataKopsClusterNetworkingRomanaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterNetworkingWeave {
}

export function dataKopsClusterNetworkingWeaveToTerraform(struct?: DataKopsClusterNetworkingWeave): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterNetworkingWeaveToHclTerraform(struct?: DataKopsClusterNetworkingWeave): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterNetworkingWeaveOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterNetworkingWeave | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterNetworkingWeave | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conn_limit - computed: true, optional: false, required: false
  public get connLimit() {
    return this.getNumberAttribute('conn_limit');
  }

  // cpu_limit - computed: true, optional: false, required: false
  public get cpuLimit() {
    return this.getStringAttribute('cpu_limit');
  }

  // cpu_request - computed: true, optional: false, required: false
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }

  // memory_limit - computed: true, optional: false, required: false
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }

  // memory_request - computed: true, optional: false, required: false
  public get memoryRequest() {
    return this.getStringAttribute('memory_request');
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // net_extra_args - computed: true, optional: false, required: false
  public get netExtraArgs() {
    return this.getStringAttribute('net_extra_args');
  }

  // no_masq_local - computed: true, optional: false, required: false
  public get noMasqLocal() {
    return this.getNumberAttribute('no_masq_local');
  }

  // npc_cpu_limit - computed: true, optional: false, required: false
  public get npcCpuLimit() {
    return this.getStringAttribute('npc_cpu_limit');
  }

  // npc_cpu_request - computed: true, optional: false, required: false
  public get npcCpuRequest() {
    return this.getStringAttribute('npc_cpu_request');
  }

  // npc_extra_args - computed: true, optional: false, required: false
  public get npcExtraArgs() {
    return this.getStringAttribute('npc_extra_args');
  }

  // npc_memory_limit - computed: true, optional: false, required: false
  public get npcMemoryLimit() {
    return this.getStringAttribute('npc_memory_limit');
  }

  // npc_memory_request - computed: true, optional: false, required: false
  public get npcMemoryRequest() {
    return this.getStringAttribute('npc_memory_request');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataKopsClusterNetworkingWeaveList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterNetworkingWeaveOutputReference {
    return new DataKopsClusterNetworkingWeaveOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterNetworking {
}

export function dataKopsClusterNetworkingToTerraform(struct?: DataKopsClusterNetworking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterNetworkingToHclTerraform(struct?: DataKopsClusterNetworking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterNetworkingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterNetworking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterNetworking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // amazon_vpc - computed: true, optional: false, required: false
  private _amazonVpc = new DataKopsClusterNetworkingAmazonVpcList(this, "amazon_vpc", false);
  public get amazonVpc() {
    return this._amazonVpc;
  }

  // calico - computed: true, optional: false, required: false
  private _calico = new DataKopsClusterNetworkingCalicoList(this, "calico", false);
  public get calico() {
    return this._calico;
  }

  // canal - computed: true, optional: false, required: false
  private _canal = new DataKopsClusterNetworkingCanalList(this, "canal", false);
  public get canal() {
    return this._canal;
  }

  // cilium - computed: true, optional: false, required: false
  private _cilium = new DataKopsClusterNetworkingCiliumList(this, "cilium", false);
  public get cilium() {
    return this._cilium;
  }

  // classic - computed: true, optional: false, required: false
  private _classic = new DataKopsClusterNetworkingClassicList(this, "classic", false);
  public get classic() {
    return this._classic;
  }

  // cni - computed: true, optional: false, required: false
  private _cni = new DataKopsClusterNetworkingCniList(this, "cni", false);
  public get cni() {
    return this._cni;
  }

  // external - computed: true, optional: false, required: false
  private _external = new DataKopsClusterNetworkingExternalList(this, "external", false);
  public get external() {
    return this._external;
  }

  // flannel - computed: true, optional: false, required: false
  private _flannel = new DataKopsClusterNetworkingFlannelList(this, "flannel", false);
  public get flannel() {
    return this._flannel;
  }

  // gce - computed: true, optional: false, required: false
  private _gce = new DataKopsClusterNetworkingGceList(this, "gce", false);
  public get gce() {
    return this._gce;
  }

  // kopeio - computed: true, optional: false, required: false
  private _kopeio = new DataKopsClusterNetworkingKopeioList(this, "kopeio", false);
  public get kopeio() {
    return this._kopeio;
  }

  // kubenet - computed: true, optional: false, required: false
  private _kubenet = new DataKopsClusterNetworkingKubenetList(this, "kubenet", false);
  public get kubenet() {
    return this._kubenet;
  }

  // kuberouter - computed: true, optional: false, required: false
  private _kuberouter = new DataKopsClusterNetworkingKuberouterList(this, "kuberouter", false);
  public get kuberouter() {
    return this._kuberouter;
  }

  // lyft_vpc - computed: true, optional: false, required: false
  private _lyftVpc = new DataKopsClusterNetworkingLyftVpcList(this, "lyft_vpc", false);
  public get lyftVpc() {
    return this._lyftVpc;
  }

  // romana - computed: true, optional: false, required: false
  private _romana = new DataKopsClusterNetworkingRomanaList(this, "romana", false);
  public get romana() {
    return this._romana;
  }

  // weave - computed: true, optional: false, required: false
  private _weave = new DataKopsClusterNetworkingWeaveList(this, "weave", false);
  public get weave() {
    return this._weave;
  }
}

export class DataKopsClusterNetworkingList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterNetworkingOutputReference {
    return new DataKopsClusterNetworkingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterNodeAuthorizationNodeAuthorizer {
}

export function dataKopsClusterNodeAuthorizationNodeAuthorizerToTerraform(struct?: DataKopsClusterNodeAuthorizationNodeAuthorizer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterNodeAuthorizationNodeAuthorizerToHclTerraform(struct?: DataKopsClusterNodeAuthorizationNodeAuthorizer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterNodeAuthorizationNodeAuthorizerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterNodeAuthorizationNodeAuthorizer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterNodeAuthorizationNodeAuthorizer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorizer - computed: true, optional: false, required: false
  public get authorizer() {
    return this.getStringAttribute('authorizer');
  }

  // features - computed: true, optional: false, required: false
  public get features() {
    return this.getListAttribute('features');
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getStringAttribute('interval');
  }

  // node_url - computed: true, optional: false, required: false
  public get nodeUrl() {
    return this.getStringAttribute('node_url');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getStringAttribute('timeout');
  }

  // token_ttl - computed: true, optional: false, required: false
  public get tokenTtl() {
    return this.getStringAttribute('token_ttl');
  }
}

export class DataKopsClusterNodeAuthorizationNodeAuthorizerList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterNodeAuthorizationNodeAuthorizerOutputReference {
    return new DataKopsClusterNodeAuthorizationNodeAuthorizerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterNodeAuthorization {
}

export function dataKopsClusterNodeAuthorizationToTerraform(struct?: DataKopsClusterNodeAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterNodeAuthorizationToHclTerraform(struct?: DataKopsClusterNodeAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterNodeAuthorizationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterNodeAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterNodeAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // node_authorizer - computed: true, optional: false, required: false
  private _nodeAuthorizer = new DataKopsClusterNodeAuthorizationNodeAuthorizerList(this, "node_authorizer", false);
  public get nodeAuthorizer() {
    return this._nodeAuthorizer;
  }
}

export class DataKopsClusterNodeAuthorizationList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterNodeAuthorizationOutputReference {
    return new DataKopsClusterNodeAuthorizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterNodeProblemDetector {
}

export function dataKopsClusterNodeProblemDetectorToTerraform(struct?: DataKopsClusterNodeProblemDetector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterNodeProblemDetectorToHclTerraform(struct?: DataKopsClusterNodeProblemDetector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterNodeProblemDetectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterNodeProblemDetector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterNodeProblemDetector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_limit - computed: true, optional: false, required: false
  public get cpuLimit() {
    return this.getStringAttribute('cpu_limit');
  }

  // cpu_request - computed: true, optional: false, required: false
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // memory_limit - computed: true, optional: false, required: false
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }

  // memory_request - computed: true, optional: false, required: false
  public get memoryRequest() {
    return this.getStringAttribute('memory_request');
  }
}

export class DataKopsClusterNodeProblemDetectorList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterNodeProblemDetectorOutputReference {
    return new DataKopsClusterNodeProblemDetectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterNodeTerminationHandler {
}

export function dataKopsClusterNodeTerminationHandlerToTerraform(struct?: DataKopsClusterNodeTerminationHandler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterNodeTerminationHandlerToHclTerraform(struct?: DataKopsClusterNodeTerminationHandler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterNodeTerminationHandlerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterNodeTerminationHandler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterNodeTerminationHandler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_request - computed: true, optional: false, required: false
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }

  // enable_prometheus_metrics - computed: true, optional: false, required: false
  public get enablePrometheusMetrics() {
    return this.getBooleanAttribute('enable_prometheus_metrics');
  }

  // enable_rebalance_draining - computed: true, optional: false, required: false
  public get enableRebalanceDraining() {
    return this.getBooleanAttribute('enable_rebalance_draining');
  }

  // enable_rebalance_monitoring - computed: true, optional: false, required: false
  public get enableRebalanceMonitoring() {
    return this.getBooleanAttribute('enable_rebalance_monitoring');
  }

  // enable_scheduled_event_draining - computed: true, optional: false, required: false
  public get enableScheduledEventDraining() {
    return this.getBooleanAttribute('enable_scheduled_event_draining');
  }

  // enable_spot_interruption_draining - computed: true, optional: false, required: false
  public get enableSpotInterruptionDraining() {
    return this.getBooleanAttribute('enable_spot_interruption_draining');
  }

  // enable_sqs_termination_draining - computed: true, optional: false, required: false
  public get enableSqsTerminationDraining() {
    return this.getBooleanAttribute('enable_sqs_termination_draining');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // exclude_from_load_balancers - computed: true, optional: false, required: false
  public get excludeFromLoadBalancers() {
    return this.getBooleanAttribute('exclude_from_load_balancers');
  }

  // managed_asg_tag - computed: true, optional: false, required: false
  public get managedAsgTag() {
    return this.getStringAttribute('managed_asg_tag');
  }

  // memory_request - computed: true, optional: false, required: false
  public get memoryRequest() {
    return this.getStringAttribute('memory_request');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataKopsClusterNodeTerminationHandlerList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterNodeTerminationHandlerOutputReference {
    return new DataKopsClusterNodeTerminationHandlerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterNtp {
}

export function dataKopsClusterNtpToTerraform(struct?: DataKopsClusterNtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterNtpToHclTerraform(struct?: DataKopsClusterNtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterNtpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterNtp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterNtp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // managed - computed: true, optional: false, required: false
  public get managed() {
    return this.getBooleanAttribute('managed');
  }
}

export class DataKopsClusterNtpList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterNtpOutputReference {
    return new DataKopsClusterNtpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterPodIdentityWebhook {
}

export function dataKopsClusterPodIdentityWebhookToTerraform(struct?: DataKopsClusterPodIdentityWebhook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterPodIdentityWebhookToHclTerraform(struct?: DataKopsClusterPodIdentityWebhook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterPodIdentityWebhookOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterPodIdentityWebhook | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterPodIdentityWebhook | undefined) {
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

  // replicas - computed: true, optional: false, required: false
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
}

export class DataKopsClusterPodIdentityWebhookList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterPodIdentityWebhookOutputReference {
    return new DataKopsClusterPodIdentityWebhookOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterRollingUpdate {
}

export function dataKopsClusterRollingUpdateToTerraform(struct?: DataKopsClusterRollingUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterRollingUpdateToHclTerraform(struct?: DataKopsClusterRollingUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterRollingUpdateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterRollingUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterRollingUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // drain_and_terminate - computed: true, optional: false, required: false
  public get drainAndTerminate() {
    return this.getBooleanAttribute('drain_and_terminate');
  }

  // max_surge - computed: true, optional: false, required: false
  public get maxSurge() {
    return this.getStringAttribute('max_surge');
  }

  // max_unavailable - computed: true, optional: false, required: false
  public get maxUnavailable() {
    return this.getStringAttribute('max_unavailable');
  }
}

export class DataKopsClusterRollingUpdateList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterRollingUpdateOutputReference {
    return new DataKopsClusterRollingUpdateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterSecrets {
}

export function dataKopsClusterSecretsToTerraform(struct?: DataKopsClusterSecrets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterSecretsToHclTerraform(struct?: DataKopsClusterSecrets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterSecrets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterSecrets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_ca_cert - computed: true, optional: false, required: false
  public get clusterCaCert() {
    return this.getStringAttribute('cluster_ca_cert');
  }

  // cluster_ca_key - computed: true, optional: false, required: false
  public get clusterCaKey() {
    return this.getStringAttribute('cluster_ca_key');
  }

  // docker_config - computed: true, optional: false, required: false
  public get dockerConfig() {
    return this.getStringAttribute('docker_config');
  }
}

export class DataKopsClusterSecretsList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterSecretsOutputReference {
    return new DataKopsClusterSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterServiceAccountIssuerDiscovery {
}

export function dataKopsClusterServiceAccountIssuerDiscoveryToTerraform(struct?: DataKopsClusterServiceAccountIssuerDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterServiceAccountIssuerDiscoveryToHclTerraform(struct?: DataKopsClusterServiceAccountIssuerDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterServiceAccountIssuerDiscoveryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterServiceAccountIssuerDiscovery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterServiceAccountIssuerDiscovery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_audiences - computed: true, optional: false, required: false
  public get additionalAudiences() {
    return this.getListAttribute('additional_audiences');
  }

  // discovery_store - computed: true, optional: false, required: false
  public get discoveryStore() {
    return this.getStringAttribute('discovery_store');
  }

  // enable_aws_oidc_provider - computed: true, optional: false, required: false
  public get enableAwsOidcProvider() {
    return this.getBooleanAttribute('enable_aws_oidc_provider');
  }
}

export class DataKopsClusterServiceAccountIssuerDiscoveryList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterServiceAccountIssuerDiscoveryOutputReference {
    return new DataKopsClusterServiceAccountIssuerDiscoveryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterSnapshotController {
}

export function dataKopsClusterSnapshotControllerToTerraform(struct?: DataKopsClusterSnapshotController): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterSnapshotControllerToHclTerraform(struct?: DataKopsClusterSnapshotController): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterSnapshotControllerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterSnapshotController | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterSnapshotController | undefined) {
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

  // install_default_class - computed: true, optional: false, required: false
  public get installDefaultClass() {
    return this.getBooleanAttribute('install_default_class');
  }
}

export class DataKopsClusterSnapshotControllerList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterSnapshotControllerOutputReference {
    return new DataKopsClusterSnapshotControllerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterSubnetAdditionalRoutes {
}

export function dataKopsClusterSubnetAdditionalRoutesToTerraform(struct?: DataKopsClusterSubnetAdditionalRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterSubnetAdditionalRoutesToHclTerraform(struct?: DataKopsClusterSubnetAdditionalRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterSubnetAdditionalRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterSubnetAdditionalRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterSubnetAdditionalRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }
}

export class DataKopsClusterSubnetAdditionalRoutesList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterSubnetAdditionalRoutesOutputReference {
    return new DataKopsClusterSubnetAdditionalRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterSubnet {
}

export function dataKopsClusterSubnetToTerraform(struct?: DataKopsClusterSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterSubnetToHclTerraform(struct?: DataKopsClusterSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_routes - computed: true, optional: false, required: false
  private _additionalRoutes = new DataKopsClusterSubnetAdditionalRoutesList(this, "additional_routes", false);
  public get additionalRoutes() {
    return this._additionalRoutes;
  }

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }

  // egress - computed: true, optional: false, required: false
  public get egress() {
    return this.getStringAttribute('egress');
  }

  // ipv6_cidr - computed: true, optional: false, required: false
  public get ipv6Cidr() {
    return this.getStringAttribute('ipv6_cidr');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // provider_id - computed: true, optional: false, required: false
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataKopsClusterSubnetList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterSubnetOutputReference {
    return new DataKopsClusterSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterTopologyBastionLoadBalancer {
}

export function dataKopsClusterTopologyBastionLoadBalancerToTerraform(struct?: DataKopsClusterTopologyBastionLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterTopologyBastionLoadBalancerToHclTerraform(struct?: DataKopsClusterTopologyBastionLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterTopologyBastionLoadBalancerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterTopologyBastionLoadBalancer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterTopologyBastionLoadBalancer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_security_groups - computed: true, optional: false, required: false
  public get additionalSecurityGroups() {
    return this.getListAttribute('additional_security_groups');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataKopsClusterTopologyBastionLoadBalancerList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterTopologyBastionLoadBalancerOutputReference {
    return new DataKopsClusterTopologyBastionLoadBalancerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterTopologyBastion {
}

export function dataKopsClusterTopologyBastionToTerraform(struct?: DataKopsClusterTopologyBastion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterTopologyBastionToHclTerraform(struct?: DataKopsClusterTopologyBastion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterTopologyBastionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterTopologyBastion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterTopologyBastion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bastion_public_name - computed: true, optional: false, required: false
  public get bastionPublicName() {
    return this.getStringAttribute('bastion_public_name');
  }

  // idle_timeout_seconds - computed: true, optional: false, required: false
  public get idleTimeoutSeconds() {
    return this.getNumberAttribute('idle_timeout_seconds');
  }

  // load_balancer - computed: true, optional: false, required: false
  private _loadBalancer = new DataKopsClusterTopologyBastionLoadBalancerList(this, "load_balancer", false);
  public get loadBalancer() {
    return this._loadBalancer;
  }
}

export class DataKopsClusterTopologyBastionList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterTopologyBastionOutputReference {
    return new DataKopsClusterTopologyBastionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterTopologyDns {
}

export function dataKopsClusterTopologyDnsToTerraform(struct?: DataKopsClusterTopologyDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterTopologyDnsToHclTerraform(struct?: DataKopsClusterTopologyDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterTopologyDnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterTopologyDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterTopologyDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataKopsClusterTopologyDnsList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterTopologyDnsOutputReference {
    return new DataKopsClusterTopologyDnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterTopology {
}

export function dataKopsClusterTopologyToTerraform(struct?: DataKopsClusterTopology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterTopologyToHclTerraform(struct?: DataKopsClusterTopology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterTopologyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterTopology | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterTopology | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bastion - computed: true, optional: false, required: false
  private _bastion = new DataKopsClusterTopologyBastionList(this, "bastion", false);
  public get bastion() {
    return this._bastion;
  }

  // dns - computed: true, optional: false, required: false
  private _dns = new DataKopsClusterTopologyDnsList(this, "dns", false);
  public get dns() {
    return this._dns;
  }

  // masters - computed: true, optional: false, required: false
  public get masters() {
    return this.getStringAttribute('masters');
  }

  // nodes - computed: true, optional: false, required: false
  public get nodes() {
    return this.getStringAttribute('nodes');
  }
}

export class DataKopsClusterTopologyList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterTopologyOutputReference {
    return new DataKopsClusterTopologyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterWarmPool {
}

export function dataKopsClusterWarmPoolToTerraform(struct?: DataKopsClusterWarmPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterWarmPoolToHclTerraform(struct?: DataKopsClusterWarmPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterWarmPoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterWarmPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterWarmPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_lifecycle_hook - computed: true, optional: false, required: false
  public get enableLifecycleHook() {
    return this.getBooleanAttribute('enable_lifecycle_hook');
  }

  // max_size - computed: true, optional: false, required: false
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }

  // min_size - computed: true, optional: false, required: false
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
}

export class DataKopsClusterWarmPoolList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsClusterWarmPoolOutputReference {
    return new DataKopsClusterWarmPoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterExternalPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/data-sources/cluster#key DataKopsCluster#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/data-sources/cluster#value DataKopsCluster#value}
  */
  readonly value: string[];
}

export function dataKopsClusterExternalPoliciesToTerraform(struct?: DataKopsClusterExternalPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function dataKopsClusterExternalPoliciesToHclTerraform(struct?: DataKopsClusterExternalPolicies | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKopsClusterExternalPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsClusterExternalPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataKopsClusterExternalPolicies | cdktf.IResolvable | undefined) {
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
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataKopsClusterExternalPoliciesList extends cdktf.ComplexList {
  public internalValue? : DataKopsClusterExternalPolicies[] | cdktf.IResolvable

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
  public get(index: number): DataKopsClusterExternalPoliciesOutputReference {
    return new DataKopsClusterExternalPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsClusterTagSubnets {
}

export function dataKopsClusterTagSubnetsToTerraform(struct?: DataKopsClusterTagSubnetsOutputReference | DataKopsClusterTagSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsClusterTagSubnetsToHclTerraform(struct?: DataKopsClusterTagSubnetsOutputReference | DataKopsClusterTagSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsClusterTagSubnetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataKopsClusterTagSubnets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsClusterTagSubnets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
