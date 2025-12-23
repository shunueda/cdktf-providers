// https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/seproperties
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAviSepropertiesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/seproperties#id DataAviSeproperties#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/seproperties#uuid DataAviSeproperties#uuid}
  */
  readonly uuid?: string;
}
export interface DataAviSepropertiesConfigpbAttributes {
}

export function dataAviSepropertiesConfigpbAttributesToTerraform(struct?: DataAviSepropertiesConfigpbAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSepropertiesConfigpbAttributesToHclTerraform(struct?: DataAviSepropertiesConfigpbAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSepropertiesConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSepropertiesConfigpbAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSepropertiesConfigpbAttributes | undefined) {
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

export class DataAviSepropertiesConfigpbAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSepropertiesConfigpbAttributesOutputReference {
    return new DataAviSepropertiesConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSepropertiesSeAgentPropertiesSeagentStatecacheProperties {
}

export function dataAviSepropertiesSeAgentPropertiesSeagentStatecachePropertiesToTerraform(struct?: DataAviSepropertiesSeAgentPropertiesSeagentStatecacheProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSepropertiesSeAgentPropertiesSeagentStatecachePropertiesToHclTerraform(struct?: DataAviSepropertiesSeAgentPropertiesSeagentStatecacheProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSepropertiesSeAgentPropertiesSeagentStatecachePropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSepropertiesSeAgentPropertiesSeagentStatecacheProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSepropertiesSeAgentPropertiesSeagentStatecacheProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sc_batch_buffer_flush_limit - computed: true, optional: false, required: false
  public get scBatchBufferFlushLimit() {
    return this.getStringAttribute('sc_batch_buffer_flush_limit');
  }

  // sc_cfg_q_batch_dequeue_limit - computed: true, optional: false, required: false
  public get scCfgQBatchDequeueLimit() {
    return this.getStringAttribute('sc_cfg_q_batch_dequeue_limit');
  }

  // sc_cfg_q_max_size - computed: true, optional: false, required: false
  public get scCfgQMaxSize() {
    return this.getStringAttribute('sc_cfg_q_max_size');
  }

  // sc_dns_q_batch_dequeue_limit - computed: true, optional: false, required: false
  public get scDnsQBatchDequeueLimit() {
    return this.getStringAttribute('sc_dns_q_batch_dequeue_limit');
  }

  // sc_dns_q_max_size - computed: true, optional: false, required: false
  public get scDnsQMaxSize() {
    return this.getStringAttribute('sc_dns_q_max_size');
  }

  // sc_shard_cleanup_max_time - computed: true, optional: false, required: false
  public get scShardCleanupMaxTime() {
    return this.getStringAttribute('sc_shard_cleanup_max_time');
  }

  // sc_state_ring_batch_dequeue_limit - computed: true, optional: false, required: false
  public get scStateRingBatchDequeueLimit() {
    return this.getStringAttribute('sc_state_ring_batch_dequeue_limit');
  }

  // sc_states_flush_interval - computed: true, optional: false, required: false
  public get scStatesFlushInterval() {
    return this.getStringAttribute('sc_states_flush_interval');
  }

  // sc_stream_check_interval - computed: true, optional: false, required: false
  public get scStreamCheckInterval() {
    return this.getStringAttribute('sc_stream_check_interval');
  }

  // sc_thread_q_batch_dequeue_limit - computed: true, optional: false, required: false
  public get scThreadQBatchDequeueLimit() {
    return this.getStringAttribute('sc_thread_q_batch_dequeue_limit');
  }

  // sc_thread_q_max_size - computed: true, optional: false, required: false
  public get scThreadQMaxSize() {
    return this.getStringAttribute('sc_thread_q_max_size');
  }

  // sc_thread_sleep_interval - computed: true, optional: false, required: false
  public get scThreadSleepInterval() {
    return this.getStringAttribute('sc_thread_sleep_interval');
  }
}

export class DataAviSepropertiesSeAgentPropertiesSeagentStatecachePropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSepropertiesSeAgentPropertiesSeagentStatecachePropertiesOutputReference {
    return new DataAviSepropertiesSeAgentPropertiesSeagentStatecachePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSepropertiesSeAgentProperties {
}

export function dataAviSepropertiesSeAgentPropertiesToTerraform(struct?: DataAviSepropertiesSeAgentProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSepropertiesSeAgentPropertiesToHclTerraform(struct?: DataAviSepropertiesSeAgentProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSepropertiesSeAgentPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSepropertiesSeAgentProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSepropertiesSeAgentProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // controller_echo_miss_aggressive_limit - computed: true, optional: false, required: false
  public get controllerEchoMissAggressiveLimit() {
    return this.getStringAttribute('controller_echo_miss_aggressive_limit');
  }

  // controller_echo_miss_limit - computed: true, optional: false, required: false
  public get controllerEchoMissLimit() {
    return this.getStringAttribute('controller_echo_miss_limit');
  }

  // controller_echo_rpc_aggressive_timeout - computed: true, optional: false, required: false
  public get controllerEchoRpcAggressiveTimeout() {
    return this.getStringAttribute('controller_echo_rpc_aggressive_timeout');
  }

  // controller_echo_rpc_timeout - computed: true, optional: false, required: false
  public get controllerEchoRpcTimeout() {
    return this.getStringAttribute('controller_echo_rpc_timeout');
  }

  // controller_heartbeat_miss_limit - computed: true, optional: false, required: false
  public get controllerHeartbeatMissLimit() {
    return this.getStringAttribute('controller_heartbeat_miss_limit');
  }

  // controller_heartbeat_timeout_sec - computed: true, optional: false, required: false
  public get controllerHeartbeatTimeoutSec() {
    return this.getStringAttribute('controller_heartbeat_timeout_sec');
  }

  // controller_registration_timeout_sec - computed: true, optional: false, required: false
  public get controllerRegistrationTimeoutSec() {
    return this.getStringAttribute('controller_registration_timeout_sec');
  }

  // controller_rpc_timeout - computed: true, optional: false, required: false
  public get controllerRpcTimeout() {
    return this.getStringAttribute('controller_rpc_timeout');
  }

  // cpustats_interval - computed: true, optional: false, required: false
  public get cpustatsInterval() {
    return this.getStringAttribute('cpustats_interval');
  }

  // ctrl_reg_pending_max_wait_time - computed: true, optional: false, required: false
  public get ctrlRegPendingMaxWaitTime() {
    return this.getStringAttribute('ctrl_reg_pending_max_wait_time');
  }

  // debug_mode - computed: true, optional: false, required: false
  public get debugMode() {
    return this.getStringAttribute('debug_mode');
  }

  // dp_aggressive_deq_interval_msec - computed: true, optional: false, required: false
  public get dpAggressiveDeqIntervalMsec() {
    return this.getStringAttribute('dp_aggressive_deq_interval_msec');
  }

  // dp_aggressive_enq_interval_msec - computed: true, optional: false, required: false
  public get dpAggressiveEnqIntervalMsec() {
    return this.getStringAttribute('dp_aggressive_enq_interval_msec');
  }

  // dp_batch_size - computed: true, optional: false, required: false
  public get dpBatchSize() {
    return this.getStringAttribute('dp_batch_size');
  }

  // dp_deq_interval_msec - computed: true, optional: false, required: false
  public get dpDeqIntervalMsec() {
    return this.getStringAttribute('dp_deq_interval_msec');
  }

  // dp_enq_interval_msec - computed: true, optional: false, required: false
  public get dpEnqIntervalMsec() {
    return this.getStringAttribute('dp_enq_interval_msec');
  }

  // dp_max_wait_rsp_time_sec - computed: true, optional: false, required: false
  public get dpMaxWaitRspTimeSec() {
    return this.getStringAttribute('dp_max_wait_rsp_time_sec');
  }

  // dp_reg_pending_max_wait_time - computed: true, optional: false, required: false
  public get dpRegPendingMaxWaitTime() {
    return this.getStringAttribute('dp_reg_pending_max_wait_time');
  }

  // headless_timeout_sec - computed: true, optional: false, required: false
  public get headlessTimeoutSec() {
    return this.getStringAttribute('headless_timeout_sec');
  }

  // ignore_docker_mac_change - computed: true, optional: false, required: false
  public get ignoreDockerMacChange() {
    return this.getStringAttribute('ignore_docker_mac_change');
  }

  // ns_helper_deq_interval_msec - computed: true, optional: false, required: false
  public get nsHelperDeqIntervalMsec() {
    return this.getStringAttribute('ns_helper_deq_interval_msec');
  }

  // sdb_flush_interval - computed: true, optional: false, required: false
  public get sdbFlushInterval() {
    return this.getStringAttribute('sdb_flush_interval');
  }

  // sdb_pipeline_size - computed: true, optional: false, required: false
  public get sdbPipelineSize() {
    return this.getStringAttribute('sdb_pipeline_size');
  }

  // sdb_scan_count - computed: true, optional: false, required: false
  public get sdbScanCount() {
    return this.getStringAttribute('sdb_scan_count');
  }

  // se_grp_change_disruptive - computed: true, optional: false, required: false
  public get seGrpChangeDisruptive() {
    return this.getStringAttribute('se_grp_change_disruptive');
  }

  // seagent_statecache_properties - computed: true, optional: false, required: false
  private _seagentStatecacheProperties = new DataAviSepropertiesSeAgentPropertiesSeagentStatecachePropertiesList(this, "seagent_statecache_properties", true);
  public get seagentStatecacheProperties() {
    return this._seagentStatecacheProperties;
  }

  // send_se_ready_timeout - computed: true, optional: false, required: false
  public get sendSeReadyTimeout() {
    return this.getStringAttribute('send_se_ready_timeout');
  }

  // states_flush_interval - computed: true, optional: false, required: false
  public get statesFlushInterval() {
    return this.getStringAttribute('states_flush_interval');
  }

  // vnic_dhcp_ip_check_interval - computed: true, optional: false, required: false
  public get vnicDhcpIpCheckInterval() {
    return this.getStringAttribute('vnic_dhcp_ip_check_interval');
  }

  // vnic_dhcp_ip_max_retries - computed: true, optional: false, required: false
  public get vnicDhcpIpMaxRetries() {
    return this.getStringAttribute('vnic_dhcp_ip_max_retries');
  }

  // vnic_ip_delete_interval - computed: true, optional: false, required: false
  public get vnicIpDeleteInterval() {
    return this.getStringAttribute('vnic_ip_delete_interval');
  }

  // vnic_probe_interval - computed: true, optional: false, required: false
  public get vnicProbeInterval() {
    return this.getStringAttribute('vnic_probe_interval');
  }

  // vnic_rpc_retry_interval - computed: true, optional: false, required: false
  public get vnicRpcRetryInterval() {
    return this.getStringAttribute('vnic_rpc_retry_interval');
  }

  // vnicdb_cmd_history_size - computed: true, optional: false, required: false
  public get vnicdbCmdHistorySize() {
    return this.getStringAttribute('vnicdb_cmd_history_size');
  }
}

export class DataAviSepropertiesSeAgentPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSepropertiesSeAgentPropertiesOutputReference {
    return new DataAviSepropertiesSeAgentPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSepropertiesSeBootupPropertiesSeDpCompression {
}

export function dataAviSepropertiesSeBootupPropertiesSeDpCompressionToTerraform(struct?: DataAviSepropertiesSeBootupPropertiesSeDpCompression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSepropertiesSeBootupPropertiesSeDpCompressionToHclTerraform(struct?: DataAviSepropertiesSeBootupPropertiesSeDpCompression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSepropertiesSeBootupPropertiesSeDpCompressionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSepropertiesSeBootupPropertiesSeDpCompression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSepropertiesSeBootupPropertiesSeDpCompression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buf_num - computed: true, optional: false, required: false
  public get bufNum() {
    return this.getStringAttribute('buf_num');
  }

  // buf_size - computed: true, optional: false, required: false
  public get bufSize() {
    return this.getStringAttribute('buf_size');
  }

  // hash_size - computed: true, optional: false, required: false
  public get hashSize() {
    return this.getStringAttribute('hash_size');
  }

  // level_aggressive - computed: true, optional: false, required: false
  public get levelAggressive() {
    return this.getStringAttribute('level_aggressive');
  }

  // level_normal - computed: true, optional: false, required: false
  public get levelNormal() {
    return this.getStringAttribute('level_normal');
  }

  // window_size - computed: true, optional: false, required: false
  public get windowSize() {
    return this.getStringAttribute('window_size');
  }
}

export class DataAviSepropertiesSeBootupPropertiesSeDpCompressionList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSepropertiesSeBootupPropertiesSeDpCompressionOutputReference {
    return new DataAviSepropertiesSeBootupPropertiesSeDpCompressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSepropertiesSeBootupProperties {
}

export function dataAviSepropertiesSeBootupPropertiesToTerraform(struct?: DataAviSepropertiesSeBootupProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSepropertiesSeBootupPropertiesToHclTerraform(struct?: DataAviSepropertiesSeBootupProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSepropertiesSeBootupPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSepropertiesSeBootupProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSepropertiesSeBootupProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // docker_backend_portend - computed: true, optional: false, required: false
  public get dockerBackendPortend() {
    return this.getStringAttribute('docker_backend_portend');
  }

  // docker_backend_portstart - computed: true, optional: false, required: false
  public get dockerBackendPortstart() {
    return this.getStringAttribute('docker_backend_portstart');
  }

  // fair_queueing_enabled - computed: true, optional: false, required: false
  public get fairQueueingEnabled() {
    return this.getStringAttribute('fair_queueing_enabled');
  }

  // geo_db_granularity - computed: true, optional: false, required: false
  public get geoDbGranularity() {
    return this.getStringAttribute('geo_db_granularity');
  }

  // l7_conns_per_core - computed: true, optional: false, required: false
  public get l7ConnsPerCore() {
    return this.getStringAttribute('l7_conns_per_core');
  }

  // l7_resvd_listen_conns_per_core - computed: true, optional: false, required: false
  public get l7ResvdListenConnsPerCore() {
    return this.getStringAttribute('l7_resvd_listen_conns_per_core');
  }

  // log_agent_debug_enabled - computed: true, optional: false, required: false
  public get logAgentDebugEnabled() {
    return this.getStringAttribute('log_agent_debug_enabled');
  }

  // log_agent_trace_enabled - computed: true, optional: false, required: false
  public get logAgentTraceEnabled() {
    return this.getStringAttribute('log_agent_trace_enabled');
  }

  // se_dp_compression - computed: true, optional: false, required: false
  private _seDpCompression = new DataAviSepropertiesSeBootupPropertiesSeDpCompressionList(this, "se_dp_compression", true);
  public get seDpCompression() {
    return this._seDpCompression;
  }

  // se_emulated_cores - computed: true, optional: false, required: false
  public get seEmulatedCores() {
    return this.getStringAttribute('se_emulated_cores');
  }

  // se_ip_encap_ipc - computed: true, optional: false, required: false
  public get seIpEncapIpc() {
    return this.getStringAttribute('se_ip_encap_ipc');
  }

  // se_l3_encap_ipc - computed: true, optional: false, required: false
  public get seL3EncapIpc() {
    return this.getStringAttribute('se_l3_encap_ipc');
  }

  // se_log_buffer_app_blocking_dequeue - computed: true, optional: false, required: false
  public get seLogBufferAppBlockingDequeue() {
    return this.getStringAttribute('se_log_buffer_app_blocking_dequeue');
  }

  // se_log_buffer_applog_size - computed: true, optional: false, required: false
  public get seLogBufferApplogSize() {
    return this.getStringAttribute('se_log_buffer_applog_size');
  }

  // se_log_buffer_chunk_count - computed: true, optional: false, required: false
  public get seLogBufferChunkCount() {
    return this.getStringAttribute('se_log_buffer_chunk_count');
  }

  // se_log_buffer_conn_blocking_dequeue - computed: true, optional: false, required: false
  public get seLogBufferConnBlockingDequeue() {
    return this.getStringAttribute('se_log_buffer_conn_blocking_dequeue');
  }

  // se_log_buffer_connlog_size - computed: true, optional: false, required: false
  public get seLogBufferConnlogSize() {
    return this.getStringAttribute('se_log_buffer_connlog_size');
  }

  // se_log_buffer_events_blocking_dequeue - computed: true, optional: false, required: false
  public get seLogBufferEventsBlockingDequeue() {
    return this.getStringAttribute('se_log_buffer_events_blocking_dequeue');
  }

  // se_log_buffer_events_size - computed: true, optional: false, required: false
  public get seLogBufferEventsSize() {
    return this.getStringAttribute('se_log_buffer_events_size');
  }

  // ssl_sess_cache_per_vs - computed: true, optional: false, required: false
  public get sslSessCachePerVs() {
    return this.getStringAttribute('ssl_sess_cache_per_vs');
  }

  // tcp_syncache_hashsize - computed: true, optional: false, required: false
  public get tcpSyncacheHashsize() {
    return this.getStringAttribute('tcp_syncache_hashsize');
  }
}

export class DataAviSepropertiesSeBootupPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSepropertiesSeBootupPropertiesOutputReference {
    return new DataAviSepropertiesSeBootupPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSepropertiesSeRuntimePropertiesAppHeaders {
}

export function dataAviSepropertiesSeRuntimePropertiesAppHeadersToTerraform(struct?: DataAviSepropertiesSeRuntimePropertiesAppHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSepropertiesSeRuntimePropertiesAppHeadersToHclTerraform(struct?: DataAviSepropertiesSeRuntimePropertiesAppHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSepropertiesSeRuntimePropertiesAppHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSepropertiesSeRuntimePropertiesAppHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSepropertiesSeRuntimePropertiesAppHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hdr_match_case - computed: true, optional: false, required: false
  public get hdrMatchCase() {
    return this.getStringAttribute('hdr_match_case');
  }

  // hdr_name - computed: true, optional: false, required: false
  public get hdrName() {
    return this.getStringAttribute('hdr_name');
  }

  // hdr_string_op - computed: true, optional: false, required: false
  public get hdrStringOp() {
    return this.getStringAttribute('hdr_string_op');
  }
}

export class DataAviSepropertiesSeRuntimePropertiesAppHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSepropertiesSeRuntimePropertiesAppHeadersOutputReference {
    return new DataAviSepropertiesSeRuntimePropertiesAppHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSepropertiesSeRuntimePropertiesDosProfileThreshInfo {
}

export function dataAviSepropertiesSeRuntimePropertiesDosProfileThreshInfoToTerraform(struct?: DataAviSepropertiesSeRuntimePropertiesDosProfileThreshInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSepropertiesSeRuntimePropertiesDosProfileThreshInfoToHclTerraform(struct?: DataAviSepropertiesSeRuntimePropertiesDosProfileThreshInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSepropertiesSeRuntimePropertiesDosProfileThreshInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSepropertiesSeRuntimePropertiesDosProfileThreshInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSepropertiesSeRuntimePropertiesDosProfileThreshInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attack - computed: true, optional: false, required: false
  public get attack() {
    return this.getStringAttribute('attack');
  }

  // max_value - computed: true, optional: false, required: false
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }

  // min_value - computed: true, optional: false, required: false
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
}

export class DataAviSepropertiesSeRuntimePropertiesDosProfileThreshInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSepropertiesSeRuntimePropertiesDosProfileThreshInfoOutputReference {
    return new DataAviSepropertiesSeRuntimePropertiesDosProfileThreshInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSepropertiesSeRuntimePropertiesDosProfile {
}

export function dataAviSepropertiesSeRuntimePropertiesDosProfileToTerraform(struct?: DataAviSepropertiesSeRuntimePropertiesDosProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSepropertiesSeRuntimePropertiesDosProfileToHclTerraform(struct?: DataAviSepropertiesSeRuntimePropertiesDosProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSepropertiesSeRuntimePropertiesDosProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSepropertiesSeRuntimePropertiesDosProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSepropertiesSeRuntimePropertiesDosProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // thresh_info - computed: true, optional: false, required: false
  private _threshInfo = new DataAviSepropertiesSeRuntimePropertiesDosProfileThreshInfoList(this, "thresh_info", false);
  public get threshInfo() {
    return this._threshInfo;
  }

  // thresh_period - computed: true, optional: false, required: false
  public get threshPeriod() {
    return this.getStringAttribute('thresh_period');
  }
}

export class DataAviSepropertiesSeRuntimePropertiesDosProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSepropertiesSeRuntimePropertiesDosProfileOutputReference {
    return new DataAviSepropertiesSeRuntimePropertiesDosProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSepropertiesSeRuntimePropertiesSeDpCompression {
}

export function dataAviSepropertiesSeRuntimePropertiesSeDpCompressionToTerraform(struct?: DataAviSepropertiesSeRuntimePropertiesSeDpCompression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSepropertiesSeRuntimePropertiesSeDpCompressionToHclTerraform(struct?: DataAviSepropertiesSeRuntimePropertiesSeDpCompression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSepropertiesSeRuntimePropertiesSeDpCompressionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSepropertiesSeRuntimePropertiesSeDpCompression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSepropertiesSeRuntimePropertiesSeDpCompression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_low_rtt - computed: true, optional: false, required: false
  public get maxLowRtt() {
    return this.getStringAttribute('max_low_rtt');
  }

  // min_high_rtt - computed: true, optional: false, required: false
  public get minHighRtt() {
    return this.getStringAttribute('min_high_rtt');
  }

  // min_length - computed: true, optional: false, required: false
  public get minLength() {
    return this.getStringAttribute('min_length');
  }

  // mobile_str - computed: true, optional: false, required: false
  public get mobileStr() {
    return this.getListAttribute('mobile_str');
  }
}

export class DataAviSepropertiesSeRuntimePropertiesSeDpCompressionList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSepropertiesSeRuntimePropertiesSeDpCompressionOutputReference {
    return new DataAviSepropertiesSeRuntimePropertiesSeDpCompressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSepropertiesSeRuntimePropertiesSeRateLimiters {
}

export function dataAviSepropertiesSeRuntimePropertiesSeRateLimitersToTerraform(struct?: DataAviSepropertiesSeRuntimePropertiesSeRateLimiters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSepropertiesSeRuntimePropertiesSeRateLimitersToHclTerraform(struct?: DataAviSepropertiesSeRuntimePropertiesSeRateLimiters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSepropertiesSeRuntimePropertiesSeRateLimitersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSepropertiesSeRuntimePropertiesSeRateLimiters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSepropertiesSeRuntimePropertiesSeRateLimiters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arp_rl - computed: true, optional: false, required: false
  public get arpRl() {
    return this.getStringAttribute('arp_rl');
  }

  // default_rl - computed: true, optional: false, required: false
  public get defaultRl() {
    return this.getStringAttribute('default_rl');
  }

  // flow_probe_rl - computed: true, optional: false, required: false
  public get flowProbeRl() {
    return this.getStringAttribute('flow_probe_rl');
  }

  // icmp_rl - computed: true, optional: false, required: false
  public get icmpRl() {
    return this.getStringAttribute('icmp_rl');
  }

  // icmp_rsp_rl - computed: true, optional: false, required: false
  public get icmpRspRl() {
    return this.getStringAttribute('icmp_rsp_rl');
  }

  // nd_rl - computed: true, optional: false, required: false
  public get ndRl() {
    return this.getStringAttribute('nd_rl');
  }

  // rst_rl - computed: true, optional: false, required: false
  public get rstRl() {
    return this.getStringAttribute('rst_rl');
  }
}

export class DataAviSepropertiesSeRuntimePropertiesSeRateLimitersList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSepropertiesSeRuntimePropertiesSeRateLimitersOutputReference {
    return new DataAviSepropertiesSeRuntimePropertiesSeRateLimitersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSepropertiesSeRuntimePropertiesServiceIpSubnetsIpAddr {
}

export function dataAviSepropertiesSeRuntimePropertiesServiceIpSubnetsIpAddrToTerraform(struct?: DataAviSepropertiesSeRuntimePropertiesServiceIpSubnetsIpAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSepropertiesSeRuntimePropertiesServiceIpSubnetsIpAddrToHclTerraform(struct?: DataAviSepropertiesSeRuntimePropertiesServiceIpSubnetsIpAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSepropertiesSeRuntimePropertiesServiceIpSubnetsIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSepropertiesSeRuntimePropertiesServiceIpSubnetsIpAddr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSepropertiesSeRuntimePropertiesServiceIpSubnetsIpAddr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addr - computed: true, optional: false, required: false
  public get addr() {
    return this.getStringAttribute('addr');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviSepropertiesSeRuntimePropertiesServiceIpSubnetsIpAddrList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSepropertiesSeRuntimePropertiesServiceIpSubnetsIpAddrOutputReference {
    return new DataAviSepropertiesSeRuntimePropertiesServiceIpSubnetsIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSepropertiesSeRuntimePropertiesServiceIpSubnets {
}

export function dataAviSepropertiesSeRuntimePropertiesServiceIpSubnetsToTerraform(struct?: DataAviSepropertiesSeRuntimePropertiesServiceIpSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSepropertiesSeRuntimePropertiesServiceIpSubnetsToHclTerraform(struct?: DataAviSepropertiesSeRuntimePropertiesServiceIpSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSepropertiesSeRuntimePropertiesServiceIpSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSepropertiesSeRuntimePropertiesServiceIpSubnets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSepropertiesSeRuntimePropertiesServiceIpSubnets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_addr - computed: true, optional: false, required: false
  private _ipAddr = new DataAviSepropertiesSeRuntimePropertiesServiceIpSubnetsIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }

  // mask - computed: true, optional: false, required: false
  public get mask() {
    return this.getStringAttribute('mask');
  }
}

export class DataAviSepropertiesSeRuntimePropertiesServiceIpSubnetsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSepropertiesSeRuntimePropertiesServiceIpSubnetsOutputReference {
    return new DataAviSepropertiesSeRuntimePropertiesServiceIpSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSepropertiesSeRuntimePropertiesServicePortRanges {
}

export function dataAviSepropertiesSeRuntimePropertiesServicePortRangesToTerraform(struct?: DataAviSepropertiesSeRuntimePropertiesServicePortRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSepropertiesSeRuntimePropertiesServicePortRangesToHclTerraform(struct?: DataAviSepropertiesSeRuntimePropertiesServicePortRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSepropertiesSeRuntimePropertiesServicePortRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSepropertiesSeRuntimePropertiesServicePortRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSepropertiesSeRuntimePropertiesServicePortRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }
}

export class DataAviSepropertiesSeRuntimePropertiesServicePortRangesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSepropertiesSeRuntimePropertiesServicePortRangesOutputReference {
    return new DataAviSepropertiesSeRuntimePropertiesServicePortRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSepropertiesSeRuntimeProperties {
}

export function dataAviSepropertiesSeRuntimePropertiesToTerraform(struct?: DataAviSepropertiesSeRuntimeProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSepropertiesSeRuntimePropertiesToHclTerraform(struct?: DataAviSepropertiesSeRuntimeProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSepropertiesSeRuntimePropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSepropertiesSeRuntimeProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSepropertiesSeRuntimeProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_ssh_enabled - computed: true, optional: false, required: false
  public get adminSshEnabled() {
    return this.getStringAttribute('admin_ssh_enabled');
  }

  // app_headers - computed: true, optional: false, required: false
  private _appHeaders = new DataAviSepropertiesSeRuntimePropertiesAppHeadersList(this, "app_headers", false);
  public get appHeaders() {
    return this._appHeaders;
  }

  // baremetal_dispatcher_handles_flows - computed: true, optional: false, required: false
  public get baremetalDispatcherHandlesFlows() {
    return this.getStringAttribute('baremetal_dispatcher_handles_flows');
  }

  // connections_lossy_log_rate_limiter_threshold - computed: true, optional: false, required: false
  public get connectionsLossyLogRateLimiterThreshold() {
    return this.getStringAttribute('connections_lossy_log_rate_limiter_threshold');
  }

  // connections_udfnf_log_rate_limiter_threshold - computed: true, optional: false, required: false
  public get connectionsUdfnfLogRateLimiterThreshold() {
    return this.getStringAttribute('connections_udfnf_log_rate_limiter_threshold');
  }

  // disable_flow_probes - computed: true, optional: false, required: false
  public get disableFlowProbes() {
    return this.getStringAttribute('disable_flow_probes');
  }

  // dos_profile - computed: true, optional: false, required: false
  private _dosProfile = new DataAviSepropertiesSeRuntimePropertiesDosProfileList(this, "dos_profile", true);
  public get dosProfile() {
    return this._dosProfile;
  }

  // downstream_send_timeout - computed: true, optional: false, required: false
  public get downstreamSendTimeout() {
    return this.getStringAttribute('downstream_send_timeout');
  }

  // dp_aggressive_hb_frequency - computed: true, optional: false, required: false
  public get dpAggressiveHbFrequency() {
    return this.getStringAttribute('dp_aggressive_hb_frequency');
  }

  // dp_aggressive_hb_timeout_count - computed: true, optional: false, required: false
  public get dpAggressiveHbTimeoutCount() {
    return this.getStringAttribute('dp_aggressive_hb_timeout_count');
  }

  // dp_hb_frequency - computed: true, optional: false, required: false
  public get dpHbFrequency() {
    return this.getStringAttribute('dp_hb_frequency');
  }

  // dp_hb_timeout_count - computed: true, optional: false, required: false
  public get dpHbTimeoutCount() {
    return this.getStringAttribute('dp_hb_timeout_count');
  }

  // dupip_frequency - computed: true, optional: false, required: false
  public get dupipFrequency() {
    return this.getStringAttribute('dupip_frequency');
  }

  // dupip_timeout_count - computed: true, optional: false, required: false
  public get dupipTimeoutCount() {
    return this.getStringAttribute('dupip_timeout_count');
  }

  // enable_hsm_log - computed: true, optional: false, required: false
  public get enableHsmLog() {
    return this.getStringAttribute('enable_hsm_log');
  }

  // feproxy_vips_enable_proxy_arp - computed: true, optional: false, required: false
  public get feproxyVipsEnableProxyArp() {
    return this.getStringAttribute('feproxy_vips_enable_proxy_arp');
  }

  // flow_table_batch_push_frequency - computed: true, optional: false, required: false
  public get flowTableBatchPushFrequency() {
    return this.getStringAttribute('flow_table_batch_push_frequency');
  }

  // global_mtu - computed: true, optional: false, required: false
  public get globalMtu() {
    return this.getStringAttribute('global_mtu');
  }

  // http_rum_console_log - computed: true, optional: false, required: false
  public get httpRumConsoleLog() {
    return this.getStringAttribute('http_rum_console_log');
  }

  // http_rum_min_content_length - computed: true, optional: false, required: false
  public get httpRumMinContentLength() {
    return this.getStringAttribute('http_rum_min_content_length');
  }

  // lbaction_num_requests_to_dispatch - computed: true, optional: false, required: false
  public get lbactionNumRequestsToDispatch() {
    return this.getStringAttribute('lbaction_num_requests_to_dispatch');
  }

  // lbaction_rq_per_request_max_retries - computed: true, optional: false, required: false
  public get lbactionRqPerRequestMaxRetries() {
    return this.getStringAttribute('lbaction_rq_per_request_max_retries');
  }

  // log_agent_compress_logs - computed: true, optional: false, required: false
  public get logAgentCompressLogs() {
    return this.getStringAttribute('log_agent_compress_logs');
  }

  // log_agent_file_sz_appl - computed: true, optional: false, required: false
  public get logAgentFileSzAppl() {
    return this.getStringAttribute('log_agent_file_sz_appl');
  }

  // log_agent_file_sz_conn - computed: true, optional: false, required: false
  public get logAgentFileSzConn() {
    return this.getStringAttribute('log_agent_file_sz_conn');
  }

  // log_agent_file_sz_debug - computed: true, optional: false, required: false
  public get logAgentFileSzDebug() {
    return this.getStringAttribute('log_agent_file_sz_debug');
  }

  // log_agent_file_sz_event - computed: true, optional: false, required: false
  public get logAgentFileSzEvent() {
    return this.getStringAttribute('log_agent_file_sz_event');
  }

  // log_agent_log_storage_min_sz - computed: true, optional: false, required: false
  public get logAgentLogStorageMinSz() {
    return this.getStringAttribute('log_agent_log_storage_min_sz');
  }

  // log_agent_max_concurrent_rsync - computed: true, optional: false, required: false
  public get logAgentMaxConcurrentRsync() {
    return this.getStringAttribute('log_agent_max_concurrent_rsync');
  }

  // log_agent_max_storage_excess_percent - computed: true, optional: false, required: false
  public get logAgentMaxStorageExcessPercent() {
    return this.getStringAttribute('log_agent_max_storage_excess_percent');
  }

  // log_agent_max_storage_ignore_percent - computed: true, optional: false, required: false
  public get logAgentMaxStorageIgnorePercent() {
    return this.getStringAttribute('log_agent_max_storage_ignore_percent');
  }

  // log_agent_min_storage_per_vs - computed: true, optional: false, required: false
  public get logAgentMinStoragePerVs() {
    return this.getStringAttribute('log_agent_min_storage_per_vs');
  }

  // log_agent_sleep_interval - computed: true, optional: false, required: false
  public get logAgentSleepInterval() {
    return this.getStringAttribute('log_agent_sleep_interval');
  }

  // log_agent_unknown_vs_timer - computed: true, optional: false, required: false
  public get logAgentUnknownVsTimer() {
    return this.getStringAttribute('log_agent_unknown_vs_timer');
  }

  // log_message_max_file_list_size - computed: true, optional: false, required: false
  public get logMessageMaxFileListSize() {
    return this.getStringAttribute('log_message_max_file_list_size');
  }

  // ngx_free_connection_stack - computed: true, optional: false, required: false
  public get ngxFreeConnectionStack() {
    return this.getStringAttribute('ngx_free_connection_stack');
  }

  // persistence_mem_max - computed: true, optional: false, required: false
  public get persistenceMemMax() {
    return this.getStringAttribute('persistence_mem_max');
  }

  // scaleout_udp_per_pkt - computed: true, optional: false, required: false
  public get scaleoutUdpPerPkt() {
    return this.getStringAttribute('scaleout_udp_per_pkt');
  }

  // se_auth_ldap_bind_timeout - computed: true, optional: false, required: false
  public get seAuthLdapBindTimeout() {
    return this.getStringAttribute('se_auth_ldap_bind_timeout');
  }

  // se_auth_ldap_cache_size - computed: true, optional: false, required: false
  public get seAuthLdapCacheSize() {
    return this.getStringAttribute('se_auth_ldap_cache_size');
  }

  // se_auth_ldap_connect_timeout - computed: true, optional: false, required: false
  public get seAuthLdapConnectTimeout() {
    return this.getStringAttribute('se_auth_ldap_connect_timeout');
  }

  // se_auth_ldap_conns_per_server - computed: true, optional: false, required: false
  public get seAuthLdapConnsPerServer() {
    return this.getStringAttribute('se_auth_ldap_conns_per_server');
  }

  // se_auth_ldap_reconnect_timeout - computed: true, optional: false, required: false
  public get seAuthLdapReconnectTimeout() {
    return this.getStringAttribute('se_auth_ldap_reconnect_timeout');
  }

  // se_auth_ldap_request_timeout - computed: true, optional: false, required: false
  public get seAuthLdapRequestTimeout() {
    return this.getStringAttribute('se_auth_ldap_request_timeout');
  }

  // se_auth_ldap_servers_failover_only - computed: true, optional: false, required: false
  public get seAuthLdapServersFailoverOnly() {
    return this.getStringAttribute('se_auth_ldap_servers_failover_only');
  }

  // se_dp_compression - computed: true, optional: false, required: false
  private _seDpCompression = new DataAviSepropertiesSeRuntimePropertiesSeDpCompressionList(this, "se_dp_compression", true);
  public get seDpCompression() {
    return this._seDpCompression;
  }

  // se_dp_hm_drops - computed: true, optional: false, required: false
  public get seDpHmDrops() {
    return this.getStringAttribute('se_dp_hm_drops');
  }

  // se_dp_if_state_poll_interval - computed: true, optional: false, required: false
  public get seDpIfStatePollInterval() {
    return this.getStringAttribute('se_dp_if_state_poll_interval');
  }

  // se_dp_log_nf_enqueue_percent - computed: true, optional: false, required: false
  public get seDpLogNfEnqueuePercent() {
    return this.getStringAttribute('se_dp_log_nf_enqueue_percent');
  }

  // se_dp_log_udf_enqueue_percent - computed: true, optional: false, required: false
  public get seDpLogUdfEnqueuePercent() {
    return this.getStringAttribute('se_dp_log_udf_enqueue_percent');
  }

  // se_dump_core_on_assert - computed: true, optional: false, required: false
  public get seDumpCoreOnAssert() {
    return this.getStringAttribute('se_dump_core_on_assert');
  }

  // se_handle_interface_routes - computed: true, optional: false, required: false
  public get seHandleInterfaceRoutes() {
    return this.getStringAttribute('se_handle_interface_routes');
  }

  // se_hb_persist_fudge_bits - computed: true, optional: false, required: false
  public get seHbPersistFudgeBits() {
    return this.getStringAttribute('se_hb_persist_fudge_bits');
  }

  // se_mac_error_threshold_to_disable_promiscious - computed: true, optional: false, required: false
  public get seMacErrorThresholdToDisablePromiscious() {
    return this.getStringAttribute('se_mac_error_threshold_to_disable_promiscious');
  }

  // se_memory_poison - computed: true, optional: false, required: false
  public get seMemoryPoison() {
    return this.getStringAttribute('se_memory_poison');
  }

  // se_metrics_interval - computed: true, optional: false, required: false
  public get seMetricsInterval() {
    return this.getStringAttribute('se_metrics_interval');
  }

  // se_metrics_rt_enabled - computed: true, optional: false, required: false
  public get seMetricsRtEnabled() {
    return this.getStringAttribute('se_metrics_rt_enabled');
  }

  // se_metrics_rt_interval - computed: true, optional: false, required: false
  public get seMetricsRtInterval() {
    return this.getStringAttribute('se_metrics_rt_interval');
  }

  // se_packet_buffer_max - computed: true, optional: false, required: false
  public get sePacketBufferMax() {
    return this.getStringAttribute('se_packet_buffer_max');
  }

  // se_random_tcp_drops - computed: true, optional: false, required: false
  public get seRandomTcpDrops() {
    return this.getStringAttribute('se_random_tcp_drops');
  }

  // se_rate_limiters - computed: true, optional: false, required: false
  private _seRateLimiters = new DataAviSepropertiesSeRuntimePropertiesSeRateLimitersList(this, "se_rate_limiters", true);
  public get seRateLimiters() {
    return this._seRateLimiters;
  }

  // service_ip_subnets - computed: true, optional: false, required: false
  private _serviceIpSubnets = new DataAviSepropertiesSeRuntimePropertiesServiceIpSubnetsList(this, "service_ip_subnets", false);
  public get serviceIpSubnets() {
    return this._serviceIpSubnets;
  }

  // service_port_ranges - computed: true, optional: false, required: false
  private _servicePortRanges = new DataAviSepropertiesSeRuntimePropertiesServicePortRangesList(this, "service_port_ranges", false);
  public get servicePortRanges() {
    return this._servicePortRanges;
  }

  // services_accessible_all_interfaces - computed: true, optional: false, required: false
  public get servicesAccessibleAllInterfaces() {
    return this.getStringAttribute('services_accessible_all_interfaces');
  }

  // tcp_syncache_max_retransmit_default - computed: true, optional: false, required: false
  public get tcpSyncacheMaxRetransmitDefault() {
    return this.getStringAttribute('tcp_syncache_max_retransmit_default');
  }

  // upstream_connect_timeout - computed: true, optional: false, required: false
  public get upstreamConnectTimeout() {
    return this.getStringAttribute('upstream_connect_timeout');
  }

  // upstream_connpool_cache_thresh - computed: true, optional: false, required: false
  public get upstreamConnpoolCacheThresh() {
    return this.getStringAttribute('upstream_connpool_cache_thresh');
  }

  // upstream_connpool_conn_idle_thresh_tmo - computed: true, optional: false, required: false
  public get upstreamConnpoolConnIdleThreshTmo() {
    return this.getStringAttribute('upstream_connpool_conn_idle_thresh_tmo');
  }

  // upstream_connpool_core_max_cache - computed: true, optional: false, required: false
  public get upstreamConnpoolCoreMaxCache() {
    return this.getStringAttribute('upstream_connpool_core_max_cache');
  }

  // upstream_connpool_enable - computed: true, optional: false, required: false
  public get upstreamConnpoolEnable() {
    return this.getStringAttribute('upstream_connpool_enable');
  }

  // upstream_keepalive - computed: true, optional: false, required: false
  public get upstreamKeepalive() {
    return this.getStringAttribute('upstream_keepalive');
  }

  // upstream_read_timeout - computed: true, optional: false, required: false
  public get upstreamReadTimeout() {
    return this.getStringAttribute('upstream_read_timeout');
  }

  // upstream_send_timeout - computed: true, optional: false, required: false
  public get upstreamSendTimeout() {
    return this.getStringAttribute('upstream_send_timeout');
  }

  // user_defined_metric_age - computed: true, optional: false, required: false
  public get userDefinedMetricAge() {
    return this.getStringAttribute('user_defined_metric_age');
  }
}

export class DataAviSepropertiesSeRuntimePropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSepropertiesSeRuntimePropertiesOutputReference {
    return new DataAviSepropertiesSeRuntimePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/seproperties avi_seproperties}
*/
export class DataAviSeproperties extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_seproperties";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAviSeproperties resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAviSeproperties to import
  * @param importFromId The id of the existing DataAviSeproperties that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/seproperties#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAviSeproperties to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_seproperties", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/seproperties avi_seproperties} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAviSepropertiesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAviSepropertiesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_seproperties',
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

  // configpb_attributes - computed: true, optional: false, required: false
  private _configpbAttributes = new DataAviSepropertiesConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
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

  // se_agent_properties - computed: true, optional: false, required: false
  private _seAgentProperties = new DataAviSepropertiesSeAgentPropertiesList(this, "se_agent_properties", true);
  public get seAgentProperties() {
    return this._seAgentProperties;
  }

  // se_bootup_properties - computed: true, optional: false, required: false
  private _seBootupProperties = new DataAviSepropertiesSeBootupPropertiesList(this, "se_bootup_properties", true);
  public get seBootupProperties() {
    return this._seBootupProperties;
  }

  // se_runtime_properties - computed: true, optional: false, required: false
  private _seRuntimeProperties = new DataAviSepropertiesSeRuntimePropertiesList(this, "se_runtime_properties", true);
  public get seRuntimeProperties() {
    return this._seRuntimeProperties;
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
