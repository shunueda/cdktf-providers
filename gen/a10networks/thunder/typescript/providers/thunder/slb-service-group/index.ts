// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbServiceGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Send log info on back up server events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#backup_server_event_log SlbServiceGroup#backup_server_event_log}
  */
  readonly backupServerEventLog?: number;
  /**
  * Dynamically enable stateless method by conn-rate (Rate to trigger stateless method(conn/sec))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#conn_rate SlbServiceGroup#conn_rate}
  */
  readonly connRate?: number;
  /**
  * Period that trigger condition consistently happens(seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#conn_rate_duration SlbServiceGroup#conn_rate_duration}
  */
  readonly connRateDuration?: number;
  /**
  * Define the grace period during transition (Define the grace period during transition(seconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#conn_rate_grace_period SlbServiceGroup#conn_rate_grace_period}
  */
  readonly connRateGracePeriod?: number;
  /**
  * Send log if transition happens
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#conn_rate_log SlbServiceGroup#conn_rate_log}
  */
  readonly connRateLog?: number;
  /**
  * Period that revert condition consistently happens(seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#conn_rate_revert_duration SlbServiceGroup#conn_rate_revert_duration}
  */
  readonly connRateRevertDuration?: number;
  /**
  * Rate to revert to statelful method (conn/sec)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#conn_revert_rate SlbServiceGroup#conn_revert_rate}
  */
  readonly connRevertRate?: number;
  /**
  * Enable extended statistics on service group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#extended_stats SlbServiceGroup#extended_stats}
  */
  readonly extendedStats?: number;
  /**
  * Health Check (Monitor Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#health_check SlbServiceGroup#health_check}
  */
  readonly healthCheck?: string;
  /**
  * Disable health check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#health_check_disable SlbServiceGroup#health_check_disable}
  */
  readonly healthCheckDisable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#id SlbServiceGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Period that revert condition consistently happens(seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#l4_session_revert_duration SlbServiceGroup#l4_session_revert_duration}
  */
  readonly l4SessionRevertDuration?: number;
  /**
  * Dynamically enable stateless method by session usage (Usage to trigger stateless method)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#l4_session_usage SlbServiceGroup#l4_session_usage}
  */
  readonly l4SessionUsage?: number;
  /**
  * Period that trigger condition consistently happens(seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#l4_session_usage_duration SlbServiceGroup#l4_session_usage_duration}
  */
  readonly l4SessionUsageDuration?: number;
  /**
  * Define the grace period during transition (Define the grace period during transition(seconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#l4_session_usage_grace_period SlbServiceGroup#l4_session_usage_grace_period}
  */
  readonly l4SessionUsageGracePeriod?: number;
  /**
  * Send log if transition happens
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#l4_session_usage_log SlbServiceGroup#l4_session_usage_log}
  */
  readonly l4SessionUsageLog?: number;
  /**
  * Usage to revert to statelful method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#l4_session_usage_revert_rate SlbServiceGroup#l4_session_usage_revert_rate}
  */
  readonly l4SessionUsageRevertRate?: number;
  /**
  * 'dst-ip-hash': Load-balancing based on only Dst IP and Port hash; 'dst-ip-only-hash': Load-balancing based on only Dst IP hash; 'fastest-response': Fastest response time on service port level; 'least-request': Least request on service port level; 'src-ip-hash': Load-balancing based on only Src IP and Port hash; 'src-ip-only-hash': Load-balancing based on only Src IP hash; 'weighted-rr': Weighted round robin on server level; 'service-weighted-rr': Weighted round robin on service port level; 'round-robin': Round robin on server level; 'round-robin-strict': Strict mode round robin on server level; 'odd-even-hash': odd/even hash based of client src-ip;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#lb_method SlbServiceGroup#lb_method}
  */
  readonly lbMethod?: string;
  /**
  * 'least-connection': Least connection on server level; 'service-least-connection': Least connection on service port level; 'weighted-least-connection': Weighted least connection on server level; 'service-weighted-least-connection': Weighted least connection on service port level;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#lc_method SlbServiceGroup#lc_method}
  */
  readonly lcMethod?: string;
  /**
  * 'link-cost-load-balance': Link cost load balance;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#lclb_method SlbServiceGroup#lclb_method}
  */
  readonly lclbMethod?: string;
  /**
  * Link Probe template (Link Probe template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#link_probe_template SlbServiceGroup#link_probe_template}
  */
  readonly linkProbeTemplate?: string;
  /**
  * 'next-hop-link': Server selection w/ link probe template on service port level;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#llb_method SlbServiceGroup#llb_method}
  */
  readonly llbMethod?: string;
  /**
  * 'service-least-request-pseudo-round-robin': Least request on service port level and select the oldest node for sub-select;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#lrprr_method SlbServiceGroup#lrprr_method}
  */
  readonly lrprrMethod?: string;
  /**
  * Minimum Active Member Per Priority (Minimum Active Member before Action)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#min_active_member SlbServiceGroup#min_active_member}
  */
  readonly minActiveMember?: number;
  /**
  * 'dynamic-priority': dynamic change member priority to met the min-active-member requirement; 'skip-pri-set': Skip Current Priority Set If Min not met;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#min_active_member_action SlbServiceGroup#min_active_member_action}
  */
  readonly minActiveMemberAction?: string;
  /**
  * SLB Service Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#name SlbServiceGroup#name}
  */
  readonly name: string;
  /**
  * 'global': Use Global Configuration; 'enable': Enable persist-scoring; 'disable': Disable persist-scoring;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#persist_scoring SlbServiceGroup#persist_scoring}
  */
  readonly persistScoring?: string;
  /**
  * Priority affinity. Persist to the same priority if possible.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#priority_affinity SlbServiceGroup#priority_affinity}
  */
  readonly priorityAffinity?: number;
  /**
  * 'tcp': TCP LB service; 'udp': UDP LB service;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#protocol SlbServiceGroup#protocol}
  */
  readonly protocol?: string;
  /**
  * PRR, select the oldest node for sub-select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#pseudo_round_robin SlbServiceGroup#pseudo_round_robin}
  */
  readonly pseudoRoundRobin?: number;
  /**
  * Reporting frequency (in minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#report_delay SlbServiceGroup#report_delay}
  */
  readonly reportDelay?: number;
  /**
  * Send reset to client if server selection fails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#reset_on_server_selection_fail SlbServiceGroup#reset_on_server_selection_fail}
  */
  readonly resetOnServerSelectionFail?: number;
  /**
  * Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#reset_priority_affinity SlbServiceGroup#reset_priority_affinity}
  */
  readonly resetPriorityAffinity?: number;
  /**
  * Report top 10 fastest/slowest servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#rpt_ext_server SlbServiceGroup#rpt_ext_server}
  */
  readonly rptExtServer?: number;
  /**
  * sample server response time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#sample_rsp_time SlbServiceGroup#sample_rsp_time}
  */
  readonly sampleRspTime?: number;
  /**
  * Reference a policy template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#shared_partition_policy_template SlbServiceGroup#shared_partition_policy_template}
  */
  readonly sharedPartitionPolicyTemplate?: number;
  /**
  * Reference a health-check from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#shared_partition_svcgrp_health_check SlbServiceGroup#shared_partition_svcgrp_health_check}
  */
  readonly sharedPartitionSvcgrpHealthCheck?: number;
  /**
  * Enable auto stateless method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#stateless_auto_switch SlbServiceGroup#stateless_auto_switch}
  */
  readonly statelessAutoSwitch?: number;
  /**
  * 'stateless-dst-ip-hash': Stateless load-balancing based on Dst IP and Dst port hash; 'stateless-per-pkt-round-robin': Stateless load-balancing using per-packet round-robin; 'stateless-src-dst-ip-hash': Stateless load-balancing based on IP and port hash for both Src and Dst; 'stateless-src-dst-ip-only-hash': Stateless load-balancing based on only IP hash for both Src and Dst; 'stateless-src-ip-hash': Stateless load-balancing based on Src IP and Src port hash; 'stateless-src-ip-only-hash': Stateless load-balancing based on only Src IP hash; 'stateless-per-pkt-weighted-rr': Stateless load-balancing using per-packet weighted round robin on server level; 'stateless-per-pkt-service-weighted-rr': Stateless load-balancing using per-packet weighted round robin on service port level;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#stateless_lb_method SlbServiceGroup#stateless_lb_method}
  */
  readonly statelessLbMethod?: string;
  /**
  * 'stateless-dst-ip-hash': Stateless load-balancing based on Dst IP and Dst port hash; 'stateless-per-pkt-round-robin': Stateless load-balancing using per-packet round-robin; 'stateless-src-dst-ip-hash': Stateless load-balancing based on IP and port hash for both Src and Dst; 'stateless-src-dst-ip-only-hash': Stateless load-balancing based on only IP hash for both Src and Dst; 'stateless-src-ip-hash': Stateless load-balancing based on Src IP and Src port hash; 'stateless-src-ip-only-hash': Stateless load-balancing based on only Src IP hash; 'stateless-per-pkt-weighted-rr': Stateless load-balancing using per-packet weighted round robin on server level; 'stateless-per-pkt-service-weighted-rr': Stateless load-balancing using per-packet weighted round robin on service port level;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#stateless_lb_method2 SlbServiceGroup#stateless_lb_method2}
  */
  readonly statelessLbMethod2?: string;
  /**
  * 'stats-data-enable': Enable statistical data collection for service group; 'stats-data-disable': Disable statistical data collection for service group;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#stats_data_action SlbServiceGroup#stats_data_action}
  */
  readonly statsDataAction?: string;
  /**
  * strict selection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#strict_select SlbServiceGroup#strict_select}
  */
  readonly strictSelect?: number;
  /**
  * Health Check (Monitor Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#svcgrp_health_check_shared SlbServiceGroup#svcgrp_health_check_shared}
  */
  readonly svcgrpHealthCheckShared?: string;
  /**
  * Policy template (Policy template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#template_policy SlbServiceGroup#template_policy}
  */
  readonly templatePolicy?: string;
  /**
  * Policy template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#template_policy_shared SlbServiceGroup#template_policy_shared}
  */
  readonly templatePolicyShared?: string;
  /**
  * Port template (Port template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#template_port SlbServiceGroup#template_port}
  */
  readonly templatePort?: string;
  /**
  * Report top 10 fastest servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#top_fastest SlbServiceGroup#top_fastest}
  */
  readonly topFastest?: number;
  /**
  * Report top 10 slowest servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#top_slowest SlbServiceGroup#top_slowest}
  */
  readonly topSlowest?: number;
  /**
  * Mirror Bi-directional Packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#traffic_replication_mirror SlbServiceGroup#traffic_replication_mirror}
  */
  readonly trafficReplicationMirror?: number;
  /**
  * Replace Destination MAC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#traffic_replication_mirror_da_repl SlbServiceGroup#traffic_replication_mirror_da_repl}
  */
  readonly trafficReplicationMirrorDaRepl?: number;
  /**
  * Replaces IP with server-IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#traffic_replication_mirror_ip_repl SlbServiceGroup#traffic_replication_mirror_ip_repl}
  */
  readonly trafficReplicationMirrorIpRepl?: number;
  /**
  * Replace Source MAC and Destination MAC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#traffic_replication_mirror_sa_da_repl SlbServiceGroup#traffic_replication_mirror_sa_da_repl}
  */
  readonly trafficReplicationMirrorSaDaRepl?: number;
  /**
  * Replace Source MAC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#traffic_replication_mirror_sa_repl SlbServiceGroup#traffic_replication_mirror_sa_repl}
  */
  readonly trafficReplicationMirrorSaRepl?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#user_tag SlbServiceGroup#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#uuid SlbServiceGroup#uuid}
  */
  readonly uuid?: string;
  /**
  * member_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#member_list SlbServiceGroup#member_list}
  */
  readonly memberList?: SlbServiceGroupMemberListStruct[] | cdktf.IResolvable;
  /**
  * priorities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#priorities SlbServiceGroup#priorities}
  */
  readonly priorities?: SlbServiceGroupPriorities[] | cdktf.IResolvable;
  /**
  * reset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#reset SlbServiceGroup#reset}
  */
  readonly reset?: SlbServiceGroupReset;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#sampling_enable SlbServiceGroup#sampling_enable}
  */
  readonly samplingEnable?: SlbServiceGroupSamplingEnable[] | cdktf.IResolvable;
}
export interface SlbServiceGroupMemberListSamplingEnable {
  /**
  * 'all': all; 'total_fwd_bytes': Bytes processed in forward direction; 'total_fwd_pkts': Packets processed in forward direction; 'total_rev_bytes': Bytes processed in reverse direction; 'total_rev_pkts': Packets processed in reverse direction; 'total_conn': Total established connections; 'total_rev_pkts_inspected': Total reverse packets inspected; 'total_rev_pkts_inspected_status_code_2xx': Total reverse packets inspected status code 2xx; 'total_rev_pkts_inspected_status_code_non_5xx': Total reverse packets inspected status code non 5xx; 'curr_req': Current requests; 'total_req': Total requests; 'total_req_succ': Total requests successful; 'peak_conn': Peak connections; 'response_time': Response time; 'fastest_rsp_time': Fastest response time; 'slowest_rsp_time': Slowest response time; 'curr_ssl_conn': Current SSL connections; 'total_ssl_conn': Total SSL connections; 'curr_conn_overflow': Current connection counter overflow count; 'state_flaps': State flaps count;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#counters1 SlbServiceGroup#counters1}
  */
  readonly counters1?: string;
}

export function slbServiceGroupMemberListSamplingEnableToTerraform(struct?: SlbServiceGroupMemberListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function slbServiceGroupMemberListSamplingEnableToHclTerraform(struct?: SlbServiceGroupMemberListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbServiceGroupMemberListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbServiceGroupMemberListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbServiceGroupMemberListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class SlbServiceGroupMemberListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SlbServiceGroupMemberListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SlbServiceGroupMemberListSamplingEnableOutputReference {
    return new SlbServiceGroupMemberListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbServiceGroupMemberListStruct {
  /**
  * Server hostname - Not applicable if real server is already defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#fqdn_name SlbServiceGroup#fqdn_name}
  */
  readonly fqdnName?: string;
  /**
  * IP Address - Not applicable if real server is already defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#host SlbServiceGroup#host}
  */
  readonly host?: string;
  /**
  * Priority of Port in the Group (Priority of Port in the Group, default is 1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#member_priority SlbServiceGroup#member_priority}
  */
  readonly memberPriority?: number;
  /**
  * 'enable': Enable member service port; 'disable': Disable member service port; 'disable-with-health-check': disable member service port, but health check work;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#member_state SlbServiceGroup#member_state}
  */
  readonly memberState?: string;
  /**
  * Disable statistical data collection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#member_stats_data_disable SlbServiceGroup#member_stats_data_disable}
  */
  readonly memberStatsDataDisable?: number;
  /**
  * Real server port template (Real server port template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#member_template SlbServiceGroup#member_template}
  */
  readonly memberTemplate?: string;
  /**
  * Member name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#name SlbServiceGroup#name}
  */
  readonly name: string;
  /**
  * Port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#port SlbServiceGroup#port}
  */
  readonly port: number;
  /**
  * 'resolve-to-ipv4': Use A Query only to resolve FQDN; 'resolve-to-ipv6': Use AAAA Query only to resolve FQDN; 'resolve-to-ipv4-and-ipv6': Use A as well as AAAA Query to resolve FQDN;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#resolve_as SlbServiceGroup#resolve_as}
  */
  readonly resolveAs?: string;
  /**
  * IPV6 Address - Not applicable if real server is already defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#server_ipv6_addr SlbServiceGroup#server_ipv6_addr}
  */
  readonly serverIpv6Addr?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#user_tag SlbServiceGroup#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#uuid SlbServiceGroup#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#sampling_enable SlbServiceGroup#sampling_enable}
  */
  readonly samplingEnable?: SlbServiceGroupMemberListSamplingEnable[] | cdktf.IResolvable;
}

export function slbServiceGroupMemberListStructToTerraform(struct?: SlbServiceGroupMemberListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn_name: cdktf.stringToTerraform(struct!.fqdnName),
    host: cdktf.stringToTerraform(struct!.host),
    member_priority: cdktf.numberToTerraform(struct!.memberPriority),
    member_state: cdktf.stringToTerraform(struct!.memberState),
    member_stats_data_disable: cdktf.numberToTerraform(struct!.memberStatsDataDisable),
    member_template: cdktf.stringToTerraform(struct!.memberTemplate),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    resolve_as: cdktf.stringToTerraform(struct!.resolveAs),
    server_ipv6_addr: cdktf.stringToTerraform(struct!.serverIpv6Addr),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(slbServiceGroupMemberListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function slbServiceGroupMemberListStructToHclTerraform(struct?: SlbServiceGroupMemberListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn_name: {
      value: cdktf.stringToHclTerraform(struct!.fqdnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member_priority: {
      value: cdktf.numberToHclTerraform(struct!.memberPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    member_state: {
      value: cdktf.stringToHclTerraform(struct!.memberState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member_stats_data_disable: {
      value: cdktf.numberToHclTerraform(struct!.memberStatsDataDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    member_template: {
      value: cdktf.stringToHclTerraform(struct!.memberTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resolve_as: {
      value: cdktf.stringToHclTerraform(struct!.resolveAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.serverIpv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(slbServiceGroupMemberListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SlbServiceGroupMemberListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbServiceGroupMemberListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbServiceGroupMemberListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnName = this._fqdnName;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._memberPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberPriority = this._memberPriority;
    }
    if (this._memberState !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberState = this._memberState;
    }
    if (this._memberStatsDataDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberStatsDataDisable = this._memberStatsDataDisable;
    }
    if (this._memberTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberTemplate = this._memberTemplate;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._resolveAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolveAs = this._resolveAs;
    }
    if (this._serverIpv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverIpv6Addr = this._serverIpv6Addr;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbServiceGroupMemberListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdnName = undefined;
      this._host = undefined;
      this._memberPriority = undefined;
      this._memberState = undefined;
      this._memberStatsDataDisable = undefined;
      this._memberTemplate = undefined;
      this._name = undefined;
      this._port = undefined;
      this._resolveAs = undefined;
      this._serverIpv6Addr = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdnName = value.fqdnName;
      this._host = value.host;
      this._memberPriority = value.memberPriority;
      this._memberState = value.memberState;
      this._memberStatsDataDisable = value.memberStatsDataDisable;
      this._memberTemplate = value.memberTemplate;
      this._name = value.name;
      this._port = value.port;
      this._resolveAs = value.resolveAs;
      this._serverIpv6Addr = value.serverIpv6Addr;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // fqdn_name - computed: false, optional: true, required: false
  private _fqdnName?: string; 
  public get fqdnName() {
    return this.getStringAttribute('fqdn_name');
  }
  public set fqdnName(value: string) {
    this._fqdnName = value;
  }
  public resetFqdnName() {
    this._fqdnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnNameInput() {
    return this._fqdnName;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // member_priority - computed: false, optional: true, required: false
  private _memberPriority?: number; 
  public get memberPriority() {
    return this.getNumberAttribute('member_priority');
  }
  public set memberPriority(value: number) {
    this._memberPriority = value;
  }
  public resetMemberPriority() {
    this._memberPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberPriorityInput() {
    return this._memberPriority;
  }

  // member_state - computed: false, optional: true, required: false
  private _memberState?: string; 
  public get memberState() {
    return this.getStringAttribute('member_state');
  }
  public set memberState(value: string) {
    this._memberState = value;
  }
  public resetMemberState() {
    this._memberState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberStateInput() {
    return this._memberState;
  }

  // member_stats_data_disable - computed: false, optional: true, required: false
  private _memberStatsDataDisable?: number; 
  public get memberStatsDataDisable() {
    return this.getNumberAttribute('member_stats_data_disable');
  }
  public set memberStatsDataDisable(value: number) {
    this._memberStatsDataDisable = value;
  }
  public resetMemberStatsDataDisable() {
    this._memberStatsDataDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberStatsDataDisableInput() {
    return this._memberStatsDataDisable;
  }

  // member_template - computed: false, optional: true, required: false
  private _memberTemplate?: string; 
  public get memberTemplate() {
    return this.getStringAttribute('member_template');
  }
  public set memberTemplate(value: string) {
    this._memberTemplate = value;
  }
  public resetMemberTemplate() {
    this._memberTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberTemplateInput() {
    return this._memberTemplate;
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // resolve_as - computed: false, optional: true, required: false
  private _resolveAs?: string; 
  public get resolveAs() {
    return this.getStringAttribute('resolve_as');
  }
  public set resolveAs(value: string) {
    this._resolveAs = value;
  }
  public resetResolveAs() {
    this._resolveAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveAsInput() {
    return this._resolveAs;
  }

  // server_ipv6_addr - computed: false, optional: true, required: false
  private _serverIpv6Addr?: string; 
  public get serverIpv6Addr() {
    return this.getStringAttribute('server_ipv6_addr');
  }
  public set serverIpv6Addr(value: string) {
    this._serverIpv6Addr = value;
  }
  public resetServerIpv6Addr() {
    this._serverIpv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIpv6AddrInput() {
    return this._serverIpv6Addr;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SlbServiceGroupMemberListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbServiceGroupMemberListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class SlbServiceGroupMemberListStructList extends cdktf.ComplexList {
  public internalValue? : SlbServiceGroupMemberListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbServiceGroupMemberListStructOutputReference {
    return new SlbServiceGroupMemberListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbServiceGroupPriorities {
  /**
  * Priority option. Define different action for each priority node. (Priority in the Group)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#priority SlbServiceGroup#priority}
  */
  readonly priority?: number;
  /**
  * 'drop': Drop request when all priority nodes fail; 'drop-if-exceed-limit': Drop request when connection over limit; 'proceed': Proceed to next priority when all priority nodes fail(default); 'reset': Send client reset when all priority nodes fail; 'reset-if-exceed-limit': Send client reset when connection over limit;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#priority_action SlbServiceGroup#priority_action}
  */
  readonly priorityAction?: string;
}

export function slbServiceGroupPrioritiesToTerraform(struct?: SlbServiceGroupPriorities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    priority_action: cdktf.stringToTerraform(struct!.priorityAction),
  }
}


export function slbServiceGroupPrioritiesToHclTerraform(struct?: SlbServiceGroupPriorities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority_action: {
      value: cdktf.stringToHclTerraform(struct!.priorityAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbServiceGroupPrioritiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbServiceGroupPriorities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._priorityAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityAction = this._priorityAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbServiceGroupPriorities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._priority = undefined;
      this._priorityAction = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._priority = value.priority;
      this._priorityAction = value.priorityAction;
    }
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // priority_action - computed: false, optional: true, required: false
  private _priorityAction?: string; 
  public get priorityAction() {
    return this.getStringAttribute('priority_action');
  }
  public set priorityAction(value: string) {
    this._priorityAction = value;
  }
  public resetPriorityAction() {
    this._priorityAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityActionInput() {
    return this._priorityAction;
  }
}

export class SlbServiceGroupPrioritiesList extends cdktf.ComplexList {
  public internalValue? : SlbServiceGroupPriorities[] | cdktf.IResolvable

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
  public get(index: number): SlbServiceGroupPrioritiesOutputReference {
    return new SlbServiceGroupPrioritiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbServiceGroupReset {
  /**
  * Reset auto stateless state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#auto_switch SlbServiceGroup#auto_switch}
  */
  readonly autoSwitch?: number;
}

export function slbServiceGroupResetToTerraform(struct?: SlbServiceGroupResetOutputReference | SlbServiceGroupReset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_switch: cdktf.numberToTerraform(struct!.autoSwitch),
  }
}


export function slbServiceGroupResetToHclTerraform(struct?: SlbServiceGroupResetOutputReference | SlbServiceGroupReset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_switch: {
      value: cdktf.numberToHclTerraform(struct!.autoSwitch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbServiceGroupResetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbServiceGroupReset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoSwitch !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoSwitch = this._autoSwitch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbServiceGroupReset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoSwitch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoSwitch = value.autoSwitch;
    }
  }

  // auto_switch - computed: false, optional: true, required: false
  private _autoSwitch?: number; 
  public get autoSwitch() {
    return this.getNumberAttribute('auto_switch');
  }
  public set autoSwitch(value: number) {
    this._autoSwitch = value;
  }
  public resetAutoSwitch() {
    this._autoSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSwitchInput() {
    return this._autoSwitch;
  }
}
export interface SlbServiceGroupSamplingEnable {
  /**
  * 'all': all; 'server_selection_fail_drop': Drops due to Service selection failure; 'server_selection_fail_reset': Resets sent out for Service selection failure; 'service_peak_conn': Peak connection count for the Service Group; 'service_healthy_host': Service Group healthy host count; 'service_unhealthy_host': Service Group unhealthy host count; 'service_req_count': Service Group request count; 'service_resp_count': Service Group response count; 'service_resp_2xx': Service Group response 2xx count; 'service_resp_3xx': Service Group response 3xx count; 'service_resp_4xx': Service Group response 4xx count; 'service_resp_5xx': Service Group response 5xx count; 'service_curr_conn_overflow': Current connection counter overflow count;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#counters1 SlbServiceGroup#counters1}
  */
  readonly counters1?: string;
}

export function slbServiceGroupSamplingEnableToTerraform(struct?: SlbServiceGroupSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function slbServiceGroupSamplingEnableToHclTerraform(struct?: SlbServiceGroupSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbServiceGroupSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbServiceGroupSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbServiceGroupSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class SlbServiceGroupSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SlbServiceGroupSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SlbServiceGroupSamplingEnableOutputReference {
    return new SlbServiceGroupSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group thunder_slb_service_group}
*/
export class SlbServiceGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_service_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbServiceGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbServiceGroup to import
  * @param importFromId The id of the existing SlbServiceGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbServiceGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_service_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_service_group thunder_slb_service_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbServiceGroupConfig
  */
  public constructor(scope: Construct, id: string, config: SlbServiceGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_service_group',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupServerEventLog = config.backupServerEventLog;
    this._connRate = config.connRate;
    this._connRateDuration = config.connRateDuration;
    this._connRateGracePeriod = config.connRateGracePeriod;
    this._connRateLog = config.connRateLog;
    this._connRateRevertDuration = config.connRateRevertDuration;
    this._connRevertRate = config.connRevertRate;
    this._extendedStats = config.extendedStats;
    this._healthCheck = config.healthCheck;
    this._healthCheckDisable = config.healthCheckDisable;
    this._id = config.id;
    this._l4SessionRevertDuration = config.l4SessionRevertDuration;
    this._l4SessionUsage = config.l4SessionUsage;
    this._l4SessionUsageDuration = config.l4SessionUsageDuration;
    this._l4SessionUsageGracePeriod = config.l4SessionUsageGracePeriod;
    this._l4SessionUsageLog = config.l4SessionUsageLog;
    this._l4SessionUsageRevertRate = config.l4SessionUsageRevertRate;
    this._lbMethod = config.lbMethod;
    this._lcMethod = config.lcMethod;
    this._lclbMethod = config.lclbMethod;
    this._linkProbeTemplate = config.linkProbeTemplate;
    this._llbMethod = config.llbMethod;
    this._lrprrMethod = config.lrprrMethod;
    this._minActiveMember = config.minActiveMember;
    this._minActiveMemberAction = config.minActiveMemberAction;
    this._name = config.name;
    this._persistScoring = config.persistScoring;
    this._priorityAffinity = config.priorityAffinity;
    this._protocol = config.protocol;
    this._pseudoRoundRobin = config.pseudoRoundRobin;
    this._reportDelay = config.reportDelay;
    this._resetOnServerSelectionFail = config.resetOnServerSelectionFail;
    this._resetPriorityAffinity = config.resetPriorityAffinity;
    this._rptExtServer = config.rptExtServer;
    this._sampleRspTime = config.sampleRspTime;
    this._sharedPartitionPolicyTemplate = config.sharedPartitionPolicyTemplate;
    this._sharedPartitionSvcgrpHealthCheck = config.sharedPartitionSvcgrpHealthCheck;
    this._statelessAutoSwitch = config.statelessAutoSwitch;
    this._statelessLbMethod = config.statelessLbMethod;
    this._statelessLbMethod2 = config.statelessLbMethod2;
    this._statsDataAction = config.statsDataAction;
    this._strictSelect = config.strictSelect;
    this._svcgrpHealthCheckShared = config.svcgrpHealthCheckShared;
    this._templatePolicy = config.templatePolicy;
    this._templatePolicyShared = config.templatePolicyShared;
    this._templatePort = config.templatePort;
    this._topFastest = config.topFastest;
    this._topSlowest = config.topSlowest;
    this._trafficReplicationMirror = config.trafficReplicationMirror;
    this._trafficReplicationMirrorDaRepl = config.trafficReplicationMirrorDaRepl;
    this._trafficReplicationMirrorIpRepl = config.trafficReplicationMirrorIpRepl;
    this._trafficReplicationMirrorSaDaRepl = config.trafficReplicationMirrorSaDaRepl;
    this._trafficReplicationMirrorSaRepl = config.trafficReplicationMirrorSaRepl;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._memberList.internalValue = config.memberList;
    this._priorities.internalValue = config.priorities;
    this._reset.internalValue = config.reset;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_server_event_log - computed: false, optional: true, required: false
  private _backupServerEventLog?: number; 
  public get backupServerEventLog() {
    return this.getNumberAttribute('backup_server_event_log');
  }
  public set backupServerEventLog(value: number) {
    this._backupServerEventLog = value;
  }
  public resetBackupServerEventLog() {
    this._backupServerEventLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupServerEventLogInput() {
    return this._backupServerEventLog;
  }

  // conn_rate - computed: false, optional: true, required: false
  private _connRate?: number; 
  public get connRate() {
    return this.getNumberAttribute('conn_rate');
  }
  public set connRate(value: number) {
    this._connRate = value;
  }
  public resetConnRate() {
    this._connRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRateInput() {
    return this._connRate;
  }

  // conn_rate_duration - computed: false, optional: true, required: false
  private _connRateDuration?: number; 
  public get connRateDuration() {
    return this.getNumberAttribute('conn_rate_duration');
  }
  public set connRateDuration(value: number) {
    this._connRateDuration = value;
  }
  public resetConnRateDuration() {
    this._connRateDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRateDurationInput() {
    return this._connRateDuration;
  }

  // conn_rate_grace_period - computed: false, optional: true, required: false
  private _connRateGracePeriod?: number; 
  public get connRateGracePeriod() {
    return this.getNumberAttribute('conn_rate_grace_period');
  }
  public set connRateGracePeriod(value: number) {
    this._connRateGracePeriod = value;
  }
  public resetConnRateGracePeriod() {
    this._connRateGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRateGracePeriodInput() {
    return this._connRateGracePeriod;
  }

  // conn_rate_log - computed: false, optional: true, required: false
  private _connRateLog?: number; 
  public get connRateLog() {
    return this.getNumberAttribute('conn_rate_log');
  }
  public set connRateLog(value: number) {
    this._connRateLog = value;
  }
  public resetConnRateLog() {
    this._connRateLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRateLogInput() {
    return this._connRateLog;
  }

  // conn_rate_revert_duration - computed: false, optional: true, required: false
  private _connRateRevertDuration?: number; 
  public get connRateRevertDuration() {
    return this.getNumberAttribute('conn_rate_revert_duration');
  }
  public set connRateRevertDuration(value: number) {
    this._connRateRevertDuration = value;
  }
  public resetConnRateRevertDuration() {
    this._connRateRevertDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRateRevertDurationInput() {
    return this._connRateRevertDuration;
  }

  // conn_revert_rate - computed: false, optional: true, required: false
  private _connRevertRate?: number; 
  public get connRevertRate() {
    return this.getNumberAttribute('conn_revert_rate');
  }
  public set connRevertRate(value: number) {
    this._connRevertRate = value;
  }
  public resetConnRevertRate() {
    this._connRevertRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRevertRateInput() {
    return this._connRevertRate;
  }

  // extended_stats - computed: false, optional: true, required: false
  private _extendedStats?: number; 
  public get extendedStats() {
    return this.getNumberAttribute('extended_stats');
  }
  public set extendedStats(value: number) {
    this._extendedStats = value;
  }
  public resetExtendedStats() {
    this._extendedStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedStatsInput() {
    return this._extendedStats;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck?: string; 
  public get healthCheck() {
    return this.getStringAttribute('health_check');
  }
  public set healthCheck(value: string) {
    this._healthCheck = value;
  }
  public resetHealthCheck() {
    this._healthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
  }

  // health_check_disable - computed: false, optional: true, required: false
  private _healthCheckDisable?: number; 
  public get healthCheckDisable() {
    return this.getNumberAttribute('health_check_disable');
  }
  public set healthCheckDisable(value: number) {
    this._healthCheckDisable = value;
  }
  public resetHealthCheckDisable() {
    this._healthCheckDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckDisableInput() {
    return this._healthCheckDisable;
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

  // l4_session_revert_duration - computed: false, optional: true, required: false
  private _l4SessionRevertDuration?: number; 
  public get l4SessionRevertDuration() {
    return this.getNumberAttribute('l4_session_revert_duration');
  }
  public set l4SessionRevertDuration(value: number) {
    this._l4SessionRevertDuration = value;
  }
  public resetL4SessionRevertDuration() {
    this._l4SessionRevertDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4SessionRevertDurationInput() {
    return this._l4SessionRevertDuration;
  }

  // l4_session_usage - computed: false, optional: true, required: false
  private _l4SessionUsage?: number; 
  public get l4SessionUsage() {
    return this.getNumberAttribute('l4_session_usage');
  }
  public set l4SessionUsage(value: number) {
    this._l4SessionUsage = value;
  }
  public resetL4SessionUsage() {
    this._l4SessionUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4SessionUsageInput() {
    return this._l4SessionUsage;
  }

  // l4_session_usage_duration - computed: false, optional: true, required: false
  private _l4SessionUsageDuration?: number; 
  public get l4SessionUsageDuration() {
    return this.getNumberAttribute('l4_session_usage_duration');
  }
  public set l4SessionUsageDuration(value: number) {
    this._l4SessionUsageDuration = value;
  }
  public resetL4SessionUsageDuration() {
    this._l4SessionUsageDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4SessionUsageDurationInput() {
    return this._l4SessionUsageDuration;
  }

  // l4_session_usage_grace_period - computed: false, optional: true, required: false
  private _l4SessionUsageGracePeriod?: number; 
  public get l4SessionUsageGracePeriod() {
    return this.getNumberAttribute('l4_session_usage_grace_period');
  }
  public set l4SessionUsageGracePeriod(value: number) {
    this._l4SessionUsageGracePeriod = value;
  }
  public resetL4SessionUsageGracePeriod() {
    this._l4SessionUsageGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4SessionUsageGracePeriodInput() {
    return this._l4SessionUsageGracePeriod;
  }

  // l4_session_usage_log - computed: false, optional: true, required: false
  private _l4SessionUsageLog?: number; 
  public get l4SessionUsageLog() {
    return this.getNumberAttribute('l4_session_usage_log');
  }
  public set l4SessionUsageLog(value: number) {
    this._l4SessionUsageLog = value;
  }
  public resetL4SessionUsageLog() {
    this._l4SessionUsageLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4SessionUsageLogInput() {
    return this._l4SessionUsageLog;
  }

  // l4_session_usage_revert_rate - computed: false, optional: true, required: false
  private _l4SessionUsageRevertRate?: number; 
  public get l4SessionUsageRevertRate() {
    return this.getNumberAttribute('l4_session_usage_revert_rate');
  }
  public set l4SessionUsageRevertRate(value: number) {
    this._l4SessionUsageRevertRate = value;
  }
  public resetL4SessionUsageRevertRate() {
    this._l4SessionUsageRevertRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4SessionUsageRevertRateInput() {
    return this._l4SessionUsageRevertRate;
  }

  // lb_method - computed: false, optional: true, required: false
  private _lbMethod?: string; 
  public get lbMethod() {
    return this.getStringAttribute('lb_method');
  }
  public set lbMethod(value: string) {
    this._lbMethod = value;
  }
  public resetLbMethod() {
    this._lbMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbMethodInput() {
    return this._lbMethod;
  }

  // lc_method - computed: false, optional: true, required: false
  private _lcMethod?: string; 
  public get lcMethod() {
    return this.getStringAttribute('lc_method');
  }
  public set lcMethod(value: string) {
    this._lcMethod = value;
  }
  public resetLcMethod() {
    this._lcMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lcMethodInput() {
    return this._lcMethod;
  }

  // lclb_method - computed: false, optional: true, required: false
  private _lclbMethod?: string; 
  public get lclbMethod() {
    return this.getStringAttribute('lclb_method');
  }
  public set lclbMethod(value: string) {
    this._lclbMethod = value;
  }
  public resetLclbMethod() {
    this._lclbMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lclbMethodInput() {
    return this._lclbMethod;
  }

  // link_probe_template - computed: false, optional: true, required: false
  private _linkProbeTemplate?: string; 
  public get linkProbeTemplate() {
    return this.getStringAttribute('link_probe_template');
  }
  public set linkProbeTemplate(value: string) {
    this._linkProbeTemplate = value;
  }
  public resetLinkProbeTemplate() {
    this._linkProbeTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkProbeTemplateInput() {
    return this._linkProbeTemplate;
  }

  // llb_method - computed: false, optional: true, required: false
  private _llbMethod?: string; 
  public get llbMethod() {
    return this.getStringAttribute('llb_method');
  }
  public set llbMethod(value: string) {
    this._llbMethod = value;
  }
  public resetLlbMethod() {
    this._llbMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get llbMethodInput() {
    return this._llbMethod;
  }

  // lrprr_method - computed: false, optional: true, required: false
  private _lrprrMethod?: string; 
  public get lrprrMethod() {
    return this.getStringAttribute('lrprr_method');
  }
  public set lrprrMethod(value: string) {
    this._lrprrMethod = value;
  }
  public resetLrprrMethod() {
    this._lrprrMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lrprrMethodInput() {
    return this._lrprrMethod;
  }

  // min_active_member - computed: false, optional: true, required: false
  private _minActiveMember?: number; 
  public get minActiveMember() {
    return this.getNumberAttribute('min_active_member');
  }
  public set minActiveMember(value: number) {
    this._minActiveMember = value;
  }
  public resetMinActiveMember() {
    this._minActiveMember = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minActiveMemberInput() {
    return this._minActiveMember;
  }

  // min_active_member_action - computed: false, optional: true, required: false
  private _minActiveMemberAction?: string; 
  public get minActiveMemberAction() {
    return this.getStringAttribute('min_active_member_action');
  }
  public set minActiveMemberAction(value: string) {
    this._minActiveMemberAction = value;
  }
  public resetMinActiveMemberAction() {
    this._minActiveMemberAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minActiveMemberActionInput() {
    return this._minActiveMemberAction;
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

  // persist_scoring - computed: false, optional: true, required: false
  private _persistScoring?: string; 
  public get persistScoring() {
    return this.getStringAttribute('persist_scoring');
  }
  public set persistScoring(value: string) {
    this._persistScoring = value;
  }
  public resetPersistScoring() {
    this._persistScoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistScoringInput() {
    return this._persistScoring;
  }

  // priority_affinity - computed: false, optional: true, required: false
  private _priorityAffinity?: number; 
  public get priorityAffinity() {
    return this.getNumberAttribute('priority_affinity');
  }
  public set priorityAffinity(value: number) {
    this._priorityAffinity = value;
  }
  public resetTfPriorityAffinity() {
    this._priorityAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityAffinityInput() {
    return this._priorityAffinity;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // pseudo_round_robin - computed: false, optional: true, required: false
  private _pseudoRoundRobin?: number; 
  public get pseudoRoundRobin() {
    return this.getNumberAttribute('pseudo_round_robin');
  }
  public set pseudoRoundRobin(value: number) {
    this._pseudoRoundRobin = value;
  }
  public resetPseudoRoundRobin() {
    this._pseudoRoundRobin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pseudoRoundRobinInput() {
    return this._pseudoRoundRobin;
  }

  // report_delay - computed: false, optional: true, required: false
  private _reportDelay?: number; 
  public get reportDelay() {
    return this.getNumberAttribute('report_delay');
  }
  public set reportDelay(value: number) {
    this._reportDelay = value;
  }
  public resetReportDelay() {
    this._reportDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportDelayInput() {
    return this._reportDelay;
  }

  // reset_on_server_selection_fail - computed: false, optional: true, required: false
  private _resetOnServerSelectionFail?: number; 
  public get resetOnServerSelectionFail() {
    return this.getNumberAttribute('reset_on_server_selection_fail');
  }
  public set resetOnServerSelectionFail(value: number) {
    this._resetOnServerSelectionFail = value;
  }
  public resetResetOnServerSelectionFail() {
    this._resetOnServerSelectionFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetOnServerSelectionFailInput() {
    return this._resetOnServerSelectionFail;
  }

  // reset_priority_affinity - computed: false, optional: true, required: false
  private _resetPriorityAffinity?: number; 
  public get resetPriorityAffinity() {
    return this.getNumberAttribute('reset_priority_affinity');
  }
  public set resetPriorityAffinity(value: number) {
    this._resetPriorityAffinity = value;
  }
  public resetResetPriorityAffinity() {
    this._resetPriorityAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetPriorityAffinityInput() {
    return this._resetPriorityAffinity;
  }

  // rpt_ext_server - computed: false, optional: true, required: false
  private _rptExtServer?: number; 
  public get rptExtServer() {
    return this.getNumberAttribute('rpt_ext_server');
  }
  public set rptExtServer(value: number) {
    this._rptExtServer = value;
  }
  public resetRptExtServer() {
    this._rptExtServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rptExtServerInput() {
    return this._rptExtServer;
  }

  // sample_rsp_time - computed: false, optional: true, required: false
  private _sampleRspTime?: number; 
  public get sampleRspTime() {
    return this.getNumberAttribute('sample_rsp_time');
  }
  public set sampleRspTime(value: number) {
    this._sampleRspTime = value;
  }
  public resetSampleRspTime() {
    this._sampleRspTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleRspTimeInput() {
    return this._sampleRspTime;
  }

  // shared_partition_policy_template - computed: false, optional: true, required: false
  private _sharedPartitionPolicyTemplate?: number; 
  public get sharedPartitionPolicyTemplate() {
    return this.getNumberAttribute('shared_partition_policy_template');
  }
  public set sharedPartitionPolicyTemplate(value: number) {
    this._sharedPartitionPolicyTemplate = value;
  }
  public resetSharedPartitionPolicyTemplate() {
    this._sharedPartitionPolicyTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionPolicyTemplateInput() {
    return this._sharedPartitionPolicyTemplate;
  }

  // shared_partition_svcgrp_health_check - computed: false, optional: true, required: false
  private _sharedPartitionSvcgrpHealthCheck?: number; 
  public get sharedPartitionSvcgrpHealthCheck() {
    return this.getNumberAttribute('shared_partition_svcgrp_health_check');
  }
  public set sharedPartitionSvcgrpHealthCheck(value: number) {
    this._sharedPartitionSvcgrpHealthCheck = value;
  }
  public resetSharedPartitionSvcgrpHealthCheck() {
    this._sharedPartitionSvcgrpHealthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionSvcgrpHealthCheckInput() {
    return this._sharedPartitionSvcgrpHealthCheck;
  }

  // stateless_auto_switch - computed: false, optional: true, required: false
  private _statelessAutoSwitch?: number; 
  public get statelessAutoSwitch() {
    return this.getNumberAttribute('stateless_auto_switch');
  }
  public set statelessAutoSwitch(value: number) {
    this._statelessAutoSwitch = value;
  }
  public resetStatelessAutoSwitch() {
    this._statelessAutoSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessAutoSwitchInput() {
    return this._statelessAutoSwitch;
  }

  // stateless_lb_method - computed: false, optional: true, required: false
  private _statelessLbMethod?: string; 
  public get statelessLbMethod() {
    return this.getStringAttribute('stateless_lb_method');
  }
  public set statelessLbMethod(value: string) {
    this._statelessLbMethod = value;
  }
  public resetStatelessLbMethod() {
    this._statelessLbMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessLbMethodInput() {
    return this._statelessLbMethod;
  }

  // stateless_lb_method2 - computed: false, optional: true, required: false
  private _statelessLbMethod2?: string; 
  public get statelessLbMethod2() {
    return this.getStringAttribute('stateless_lb_method2');
  }
  public set statelessLbMethod2(value: string) {
    this._statelessLbMethod2 = value;
  }
  public resetStatelessLbMethod2() {
    this._statelessLbMethod2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessLbMethod2Input() {
    return this._statelessLbMethod2;
  }

  // stats_data_action - computed: false, optional: true, required: false
  private _statsDataAction?: string; 
  public get statsDataAction() {
    return this.getStringAttribute('stats_data_action');
  }
  public set statsDataAction(value: string) {
    this._statsDataAction = value;
  }
  public resetStatsDataAction() {
    this._statsDataAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsDataActionInput() {
    return this._statsDataAction;
  }

  // strict_select - computed: false, optional: true, required: false
  private _strictSelect?: number; 
  public get strictSelect() {
    return this.getNumberAttribute('strict_select');
  }
  public set strictSelect(value: number) {
    this._strictSelect = value;
  }
  public resetStrictSelect() {
    this._strictSelect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictSelectInput() {
    return this._strictSelect;
  }

  // svcgrp_health_check_shared - computed: false, optional: true, required: false
  private _svcgrpHealthCheckShared?: string; 
  public get svcgrpHealthCheckShared() {
    return this.getStringAttribute('svcgrp_health_check_shared');
  }
  public set svcgrpHealthCheckShared(value: string) {
    this._svcgrpHealthCheckShared = value;
  }
  public resetSvcgrpHealthCheckShared() {
    this._svcgrpHealthCheckShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svcgrpHealthCheckSharedInput() {
    return this._svcgrpHealthCheckShared;
  }

  // template_policy - computed: false, optional: true, required: false
  private _templatePolicy?: string; 
  public get templatePolicy() {
    return this.getStringAttribute('template_policy');
  }
  public set templatePolicy(value: string) {
    this._templatePolicy = value;
  }
  public resetTemplatePolicy() {
    this._templatePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatePolicyInput() {
    return this._templatePolicy;
  }

  // template_policy_shared - computed: false, optional: true, required: false
  private _templatePolicyShared?: string; 
  public get templatePolicyShared() {
    return this.getStringAttribute('template_policy_shared');
  }
  public set templatePolicyShared(value: string) {
    this._templatePolicyShared = value;
  }
  public resetTemplatePolicyShared() {
    this._templatePolicyShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatePolicySharedInput() {
    return this._templatePolicyShared;
  }

  // template_port - computed: false, optional: true, required: false
  private _templatePort?: string; 
  public get templatePort() {
    return this.getStringAttribute('template_port');
  }
  public set templatePort(value: string) {
    this._templatePort = value;
  }
  public resetTemplatePort() {
    this._templatePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatePortInput() {
    return this._templatePort;
  }

  // top_fastest - computed: false, optional: true, required: false
  private _topFastest?: number; 
  public get topFastest() {
    return this.getNumberAttribute('top_fastest');
  }
  public set topFastest(value: number) {
    this._topFastest = value;
  }
  public resetTopFastest() {
    this._topFastest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topFastestInput() {
    return this._topFastest;
  }

  // top_slowest - computed: false, optional: true, required: false
  private _topSlowest?: number; 
  public get topSlowest() {
    return this.getNumberAttribute('top_slowest');
  }
  public set topSlowest(value: number) {
    this._topSlowest = value;
  }
  public resetTopSlowest() {
    this._topSlowest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topSlowestInput() {
    return this._topSlowest;
  }

  // traffic_replication_mirror - computed: false, optional: true, required: false
  private _trafficReplicationMirror?: number; 
  public get trafficReplicationMirror() {
    return this.getNumberAttribute('traffic_replication_mirror');
  }
  public set trafficReplicationMirror(value: number) {
    this._trafficReplicationMirror = value;
  }
  public resetTrafficReplicationMirror() {
    this._trafficReplicationMirror = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficReplicationMirrorInput() {
    return this._trafficReplicationMirror;
  }

  // traffic_replication_mirror_da_repl - computed: false, optional: true, required: false
  private _trafficReplicationMirrorDaRepl?: number; 
  public get trafficReplicationMirrorDaRepl() {
    return this.getNumberAttribute('traffic_replication_mirror_da_repl');
  }
  public set trafficReplicationMirrorDaRepl(value: number) {
    this._trafficReplicationMirrorDaRepl = value;
  }
  public resetTrafficReplicationMirrorDaRepl() {
    this._trafficReplicationMirrorDaRepl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficReplicationMirrorDaReplInput() {
    return this._trafficReplicationMirrorDaRepl;
  }

  // traffic_replication_mirror_ip_repl - computed: false, optional: true, required: false
  private _trafficReplicationMirrorIpRepl?: number; 
  public get trafficReplicationMirrorIpRepl() {
    return this.getNumberAttribute('traffic_replication_mirror_ip_repl');
  }
  public set trafficReplicationMirrorIpRepl(value: number) {
    this._trafficReplicationMirrorIpRepl = value;
  }
  public resetTrafficReplicationMirrorIpRepl() {
    this._trafficReplicationMirrorIpRepl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficReplicationMirrorIpReplInput() {
    return this._trafficReplicationMirrorIpRepl;
  }

  // traffic_replication_mirror_sa_da_repl - computed: false, optional: true, required: false
  private _trafficReplicationMirrorSaDaRepl?: number; 
  public get trafficReplicationMirrorSaDaRepl() {
    return this.getNumberAttribute('traffic_replication_mirror_sa_da_repl');
  }
  public set trafficReplicationMirrorSaDaRepl(value: number) {
    this._trafficReplicationMirrorSaDaRepl = value;
  }
  public resetTrafficReplicationMirrorSaDaRepl() {
    this._trafficReplicationMirrorSaDaRepl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficReplicationMirrorSaDaReplInput() {
    return this._trafficReplicationMirrorSaDaRepl;
  }

  // traffic_replication_mirror_sa_repl - computed: false, optional: true, required: false
  private _trafficReplicationMirrorSaRepl?: number; 
  public get trafficReplicationMirrorSaRepl() {
    return this.getNumberAttribute('traffic_replication_mirror_sa_repl');
  }
  public set trafficReplicationMirrorSaRepl(value: number) {
    this._trafficReplicationMirrorSaRepl = value;
  }
  public resetTrafficReplicationMirrorSaRepl() {
    this._trafficReplicationMirrorSaRepl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficReplicationMirrorSaReplInput() {
    return this._trafficReplicationMirrorSaRepl;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // member_list - computed: false, optional: true, required: false
  private _memberList = new SlbServiceGroupMemberListStructList(this, "member_list", false);
  public get memberList() {
    return this._memberList;
  }
  public putMemberList(value: SlbServiceGroupMemberListStruct[] | cdktf.IResolvable) {
    this._memberList.internalValue = value;
  }
  public resetMemberList() {
    this._memberList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberListInput() {
    return this._memberList.internalValue;
  }

  // priorities - computed: false, optional: true, required: false
  private _priorities = new SlbServiceGroupPrioritiesList(this, "priorities", false);
  public get priorities() {
    return this._priorities;
  }
  public putPriorities(value: SlbServiceGroupPriorities[] | cdktf.IResolvable) {
    this._priorities.internalValue = value;
  }
  public resetPriorities() {
    this._priorities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prioritiesInput() {
    return this._priorities.internalValue;
  }

  // reset - computed: false, optional: true, required: false
  private _reset = new SlbServiceGroupResetOutputReference(this, "reset");
  public get reset() {
    return this._reset;
  }
  public putReset(value: SlbServiceGroupReset) {
    this._reset.internalValue = value;
  }
  public resetReset() {
    this._reset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetInput() {
    return this._reset.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SlbServiceGroupSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbServiceGroupSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_server_event_log: cdktf.numberToTerraform(this._backupServerEventLog),
      conn_rate: cdktf.numberToTerraform(this._connRate),
      conn_rate_duration: cdktf.numberToTerraform(this._connRateDuration),
      conn_rate_grace_period: cdktf.numberToTerraform(this._connRateGracePeriod),
      conn_rate_log: cdktf.numberToTerraform(this._connRateLog),
      conn_rate_revert_duration: cdktf.numberToTerraform(this._connRateRevertDuration),
      conn_revert_rate: cdktf.numberToTerraform(this._connRevertRate),
      extended_stats: cdktf.numberToTerraform(this._extendedStats),
      health_check: cdktf.stringToTerraform(this._healthCheck),
      health_check_disable: cdktf.numberToTerraform(this._healthCheckDisable),
      id: cdktf.stringToTerraform(this._id),
      l4_session_revert_duration: cdktf.numberToTerraform(this._l4SessionRevertDuration),
      l4_session_usage: cdktf.numberToTerraform(this._l4SessionUsage),
      l4_session_usage_duration: cdktf.numberToTerraform(this._l4SessionUsageDuration),
      l4_session_usage_grace_period: cdktf.numberToTerraform(this._l4SessionUsageGracePeriod),
      l4_session_usage_log: cdktf.numberToTerraform(this._l4SessionUsageLog),
      l4_session_usage_revert_rate: cdktf.numberToTerraform(this._l4SessionUsageRevertRate),
      lb_method: cdktf.stringToTerraform(this._lbMethod),
      lc_method: cdktf.stringToTerraform(this._lcMethod),
      lclb_method: cdktf.stringToTerraform(this._lclbMethod),
      link_probe_template: cdktf.stringToTerraform(this._linkProbeTemplate),
      llb_method: cdktf.stringToTerraform(this._llbMethod),
      lrprr_method: cdktf.stringToTerraform(this._lrprrMethod),
      min_active_member: cdktf.numberToTerraform(this._minActiveMember),
      min_active_member_action: cdktf.stringToTerraform(this._minActiveMemberAction),
      name: cdktf.stringToTerraform(this._name),
      persist_scoring: cdktf.stringToTerraform(this._persistScoring),
      priority_affinity: cdktf.numberToTerraform(this._priorityAffinity),
      protocol: cdktf.stringToTerraform(this._protocol),
      pseudo_round_robin: cdktf.numberToTerraform(this._pseudoRoundRobin),
      report_delay: cdktf.numberToTerraform(this._reportDelay),
      reset_on_server_selection_fail: cdktf.numberToTerraform(this._resetOnServerSelectionFail),
      reset_priority_affinity: cdktf.numberToTerraform(this._resetPriorityAffinity),
      rpt_ext_server: cdktf.numberToTerraform(this._rptExtServer),
      sample_rsp_time: cdktf.numberToTerraform(this._sampleRspTime),
      shared_partition_policy_template: cdktf.numberToTerraform(this._sharedPartitionPolicyTemplate),
      shared_partition_svcgrp_health_check: cdktf.numberToTerraform(this._sharedPartitionSvcgrpHealthCheck),
      stateless_auto_switch: cdktf.numberToTerraform(this._statelessAutoSwitch),
      stateless_lb_method: cdktf.stringToTerraform(this._statelessLbMethod),
      stateless_lb_method2: cdktf.stringToTerraform(this._statelessLbMethod2),
      stats_data_action: cdktf.stringToTerraform(this._statsDataAction),
      strict_select: cdktf.numberToTerraform(this._strictSelect),
      svcgrp_health_check_shared: cdktf.stringToTerraform(this._svcgrpHealthCheckShared),
      template_policy: cdktf.stringToTerraform(this._templatePolicy),
      template_policy_shared: cdktf.stringToTerraform(this._templatePolicyShared),
      template_port: cdktf.stringToTerraform(this._templatePort),
      top_fastest: cdktf.numberToTerraform(this._topFastest),
      top_slowest: cdktf.numberToTerraform(this._topSlowest),
      traffic_replication_mirror: cdktf.numberToTerraform(this._trafficReplicationMirror),
      traffic_replication_mirror_da_repl: cdktf.numberToTerraform(this._trafficReplicationMirrorDaRepl),
      traffic_replication_mirror_ip_repl: cdktf.numberToTerraform(this._trafficReplicationMirrorIpRepl),
      traffic_replication_mirror_sa_da_repl: cdktf.numberToTerraform(this._trafficReplicationMirrorSaDaRepl),
      traffic_replication_mirror_sa_repl: cdktf.numberToTerraform(this._trafficReplicationMirrorSaRepl),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      member_list: cdktf.listMapper(slbServiceGroupMemberListStructToTerraform, true)(this._memberList.internalValue),
      priorities: cdktf.listMapper(slbServiceGroupPrioritiesToTerraform, true)(this._priorities.internalValue),
      reset: slbServiceGroupResetToTerraform(this._reset.internalValue),
      sampling_enable: cdktf.listMapper(slbServiceGroupSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_server_event_log: {
        value: cdktf.numberToHclTerraform(this._backupServerEventLog),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_rate: {
        value: cdktf.numberToHclTerraform(this._connRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_rate_duration: {
        value: cdktf.numberToHclTerraform(this._connRateDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_rate_grace_period: {
        value: cdktf.numberToHclTerraform(this._connRateGracePeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_rate_log: {
        value: cdktf.numberToHclTerraform(this._connRateLog),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_rate_revert_duration: {
        value: cdktf.numberToHclTerraform(this._connRateRevertDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_revert_rate: {
        value: cdktf.numberToHclTerraform(this._connRevertRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      extended_stats: {
        value: cdktf.numberToHclTerraform(this._extendedStats),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check: {
        value: cdktf.stringToHclTerraform(this._healthCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_disable: {
        value: cdktf.numberToHclTerraform(this._healthCheckDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l4_session_revert_duration: {
        value: cdktf.numberToHclTerraform(this._l4SessionRevertDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l4_session_usage: {
        value: cdktf.numberToHclTerraform(this._l4SessionUsage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l4_session_usage_duration: {
        value: cdktf.numberToHclTerraform(this._l4SessionUsageDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l4_session_usage_grace_period: {
        value: cdktf.numberToHclTerraform(this._l4SessionUsageGracePeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l4_session_usage_log: {
        value: cdktf.numberToHclTerraform(this._l4SessionUsageLog),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l4_session_usage_revert_rate: {
        value: cdktf.numberToHclTerraform(this._l4SessionUsageRevertRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lb_method: {
        value: cdktf.stringToHclTerraform(this._lbMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lc_method: {
        value: cdktf.stringToHclTerraform(this._lcMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lclb_method: {
        value: cdktf.stringToHclTerraform(this._lclbMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_probe_template: {
        value: cdktf.stringToHclTerraform(this._linkProbeTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      llb_method: {
        value: cdktf.stringToHclTerraform(this._llbMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lrprr_method: {
        value: cdktf.stringToHclTerraform(this._lrprrMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_active_member: {
        value: cdktf.numberToHclTerraform(this._minActiveMember),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_active_member_action: {
        value: cdktf.stringToHclTerraform(this._minActiveMemberAction),
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
      persist_scoring: {
        value: cdktf.stringToHclTerraform(this._persistScoring),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority_affinity: {
        value: cdktf.numberToHclTerraform(this._priorityAffinity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pseudo_round_robin: {
        value: cdktf.numberToHclTerraform(this._pseudoRoundRobin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      report_delay: {
        value: cdktf.numberToHclTerraform(this._reportDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reset_on_server_selection_fail: {
        value: cdktf.numberToHclTerraform(this._resetOnServerSelectionFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reset_priority_affinity: {
        value: cdktf.numberToHclTerraform(this._resetPriorityAffinity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rpt_ext_server: {
        value: cdktf.numberToHclTerraform(this._rptExtServer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sample_rsp_time: {
        value: cdktf.numberToHclTerraform(this._sampleRspTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_partition_policy_template: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionPolicyTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_partition_svcgrp_health_check: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionSvcgrpHealthCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stateless_auto_switch: {
        value: cdktf.numberToHclTerraform(this._statelessAutoSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stateless_lb_method: {
        value: cdktf.stringToHclTerraform(this._statelessLbMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stateless_lb_method2: {
        value: cdktf.stringToHclTerraform(this._statelessLbMethod2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats_data_action: {
        value: cdktf.stringToHclTerraform(this._statsDataAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strict_select: {
        value: cdktf.numberToHclTerraform(this._strictSelect),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      svcgrp_health_check_shared: {
        value: cdktf.stringToHclTerraform(this._svcgrpHealthCheckShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_policy: {
        value: cdktf.stringToHclTerraform(this._templatePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_policy_shared: {
        value: cdktf.stringToHclTerraform(this._templatePolicyShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_port: {
        value: cdktf.stringToHclTerraform(this._templatePort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      top_fastest: {
        value: cdktf.numberToHclTerraform(this._topFastest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      top_slowest: {
        value: cdktf.numberToHclTerraform(this._topSlowest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      traffic_replication_mirror: {
        value: cdktf.numberToHclTerraform(this._trafficReplicationMirror),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      traffic_replication_mirror_da_repl: {
        value: cdktf.numberToHclTerraform(this._trafficReplicationMirrorDaRepl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      traffic_replication_mirror_ip_repl: {
        value: cdktf.numberToHclTerraform(this._trafficReplicationMirrorIpRepl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      traffic_replication_mirror_sa_da_repl: {
        value: cdktf.numberToHclTerraform(this._trafficReplicationMirrorSaDaRepl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      traffic_replication_mirror_sa_repl: {
        value: cdktf.numberToHclTerraform(this._trafficReplicationMirrorSaRepl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
      member_list: {
        value: cdktf.listMapperHcl(slbServiceGroupMemberListStructToHclTerraform, true)(this._memberList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbServiceGroupMemberListStructList",
      },
      priorities: {
        value: cdktf.listMapperHcl(slbServiceGroupPrioritiesToHclTerraform, true)(this._priorities.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbServiceGroupPrioritiesList",
      },
      reset: {
        value: slbServiceGroupResetToHclTerraform(this._reset.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbServiceGroupResetList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(slbServiceGroupSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbServiceGroupSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
