// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_dns_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderGslbDnsStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_dns_stats#id DataThunderGslbDnsStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_dns_stats#stats DataThunderGslbDnsStats#stats}
  */
  readonly stats?: DataThunderGslbDnsStatsStats;
}
export interface DataThunderGslbDnsStatsStats {
  /**
  * Number of queries with incorrect class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_dns_stats#bad_class_query DataThunderGslbDnsStats#bad_class_query}
  */
  readonly badClassQuery?: number;
  /**
  * Number of replies with incorrect class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_dns_stats#bad_class_response DataThunderGslbDnsStats#bad_class_response}
  */
  readonly badClassResponse?: number;
  /**
  * Number of queries with incorrect format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_dns_stats#bad_format_query DataThunderGslbDnsStats#bad_format_query}
  */
  readonly badFormatQuery?: number;
  /**
  * Number of replies with incorrect format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_dns_stats#bad_format_response DataThunderGslbDnsStats#bad_format_response}
  */
  readonly badFormatResponse?: number;
  /**
  * Number of queries with incorrect header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_dns_stats#bad_header_query DataThunderGslbDnsStats#bad_header_query}
  */
  readonly badHeaderQuery?: number;
  /**
  * Number of replies with incorrect header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_dns_stats#bad_header_response DataThunderGslbDnsStats#bad_header_response}
  */
  readonly badHeaderResponse?: number;
  /**
  * Number of queries with incorrect data length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_dns_stats#bad_packet_query DataThunderGslbDnsStats#bad_packet_query}
  */
  readonly badPacketQuery?: number;
  /**
  * Number of replies with incorrect data length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_dns_stats#bad_packet_response DataThunderGslbDnsStats#bad_packet_response}
  */
  readonly badPacketResponse?: number;
  /**
  * Number of queries with unknown service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_dns_stats#bad_service_query DataThunderGslbDnsStats#bad_service_query}
  */
  readonly badServiceQuery?: number;
  /**
  * Number of replies with unknown service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_dns_stats#bad_service_response DataThunderGslbDnsStats#bad_service_response}
  */
  readonly badServiceResponse?: number;
  /**
  * Number of queries with incorrect type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_dns_stats#bad_type_query DataThunderGslbDnsStats#bad_type_query}
  */
  readonly badTypeQuery?: number;
  /**
  * Number of replies with incorrect type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_dns_stats#bad_type_response DataThunderGslbDnsStats#bad_type_response}
  */
  readonly badTypeResponse?: number;
  /**
  * Metric Active RDT Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_dns_stats#metric_active_rdt DataThunderGslbDnsStats#metric_active_rdt}
  */
  readonly metricActiveRdt?: number;
  /**
  * Metric Active Server Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_dns_stats#metric_active_server DataThunderGslbDnsStats#metric_active_server}
  */
  readonly metricActiveServer?: number;
  /**
  * Metric Active Weight Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_dns_stats#metric_active_weight DataThunderGslbDnsStats#metric_active_weight}
  */
  readonly metricActiveWeight?: number;
  /**
  * Metric Admin IP Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_dns_stats#metric_admin_ip DataThunderGslbDnsStats#metric_admin_ip}
  */
  readonly metricAdminIp?: number;
  /**
  * Metric Admin Preference Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_dns_stats#metric_admin_preference DataThunderGslbDnsStats#metric_admin_preference}
  */
  readonly metricAdminPreference?: number;
  /**
  * Metric Bandwidth Cost Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_dns_stats#metric_bandwidth_cost DataThunderGslbDnsStats#metric_bandwidth_cost}
  */
  readonly metricBandwidthCost?: number;
  /**
  * Metric Bandwidth Quality Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_dns_stats#metric_bandwidth_quality DataThunderGslbDnsStats#metric_bandwidth_quality}
  */
  readonly metricBandwidthQuality?: number;
  /**
  * Metric Capacity Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_dns_stats#metric_capacity DataThunderGslbDnsStats#metric_capacity}
  */
  readonly metricCapacity?: number;
  /**
  * Metric Connection Load Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_dns_stats#metric_connection_load DataThunderGslbDnsStats#metric_connection_load}
  */
  readonly metricConnectionLoad?: number;
  /**
  * Metric Easy RDT Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_dns_stats#metric_easy_rdt DataThunderGslbDnsStats#metric_easy_rdt}
  */
  readonly metricEasyRdt?: number;
  /**
  * Metric Geographic Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_dns_stats#metric_geographic DataThunderGslbDnsStats#metric_geographic}
  */
  readonly metricGeographic?: number;
  /**
  * Metric Health Check Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_dns_stats#metric_health_check DataThunderGslbDnsStats#metric_health_check}
  */
  readonly metricHealthCheck?: number;
  /**
  * Metric Least Reponse Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_dns_stats#metric_least_reponse DataThunderGslbDnsStats#metric_least_reponse}
  */
  readonly metricLeastReponse?: number;
  /**
  * Metric Number of Sessions Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_dns_stats#metric_number_of_sessions DataThunderGslbDnsStats#metric_number_of_sessions}
  */
  readonly metricNumberOfSessions?: number;
  /**
  * Metric Round Robin Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_dns_stats#metric_round_robin DataThunderGslbDnsStats#metric_round_robin}
  */
  readonly metricRoundRobin?: number;
  /**
  * Metric User Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_dns_stats#metric_user DataThunderGslbDnsStats#metric_user}
  */
  readonly metricUser?: number;
  /**
  * Metric Weighted IP Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_dns_stats#metric_weighted_ip DataThunderGslbDnsStats#metric_weighted_ip}
  */
  readonly metricWeightedIp?: number;
  /**
  * Metric Weighted Site Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_dns_stats#metric_weighted_site DataThunderGslbDnsStats#metric_weighted_site}
  */
  readonly metricWeightedSite?: number;
  /**
  * Number of replies with unknown server IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_dns_stats#no_answer DataThunderGslbDnsStats#no_answer}
  */
  readonly noAnswer?: number;
  /**
  * Total number of DNS queries received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_dns_stats#total_query DataThunderGslbDnsStats#total_query}
  */
  readonly totalQuery?: number;
  /**
  * Total number of DNS replies sent to clients
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_dns_stats#total_response DataThunderGslbDnsStats#total_response}
  */
  readonly totalResponse?: number;
}

export function dataThunderGslbDnsStatsStatsToTerraform(struct?: DataThunderGslbDnsStatsStatsOutputReference | DataThunderGslbDnsStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bad_class_query: cdktf.numberToTerraform(struct!.badClassQuery),
    bad_class_response: cdktf.numberToTerraform(struct!.badClassResponse),
    bad_format_query: cdktf.numberToTerraform(struct!.badFormatQuery),
    bad_format_response: cdktf.numberToTerraform(struct!.badFormatResponse),
    bad_header_query: cdktf.numberToTerraform(struct!.badHeaderQuery),
    bad_header_response: cdktf.numberToTerraform(struct!.badHeaderResponse),
    bad_packet_query: cdktf.numberToTerraform(struct!.badPacketQuery),
    bad_packet_response: cdktf.numberToTerraform(struct!.badPacketResponse),
    bad_service_query: cdktf.numberToTerraform(struct!.badServiceQuery),
    bad_service_response: cdktf.numberToTerraform(struct!.badServiceResponse),
    bad_type_query: cdktf.numberToTerraform(struct!.badTypeQuery),
    bad_type_response: cdktf.numberToTerraform(struct!.badTypeResponse),
    metric_active_rdt: cdktf.numberToTerraform(struct!.metricActiveRdt),
    metric_active_server: cdktf.numberToTerraform(struct!.metricActiveServer),
    metric_active_weight: cdktf.numberToTerraform(struct!.metricActiveWeight),
    metric_admin_ip: cdktf.numberToTerraform(struct!.metricAdminIp),
    metric_admin_preference: cdktf.numberToTerraform(struct!.metricAdminPreference),
    metric_bandwidth_cost: cdktf.numberToTerraform(struct!.metricBandwidthCost),
    metric_bandwidth_quality: cdktf.numberToTerraform(struct!.metricBandwidthQuality),
    metric_capacity: cdktf.numberToTerraform(struct!.metricCapacity),
    metric_connection_load: cdktf.numberToTerraform(struct!.metricConnectionLoad),
    metric_easy_rdt: cdktf.numberToTerraform(struct!.metricEasyRdt),
    metric_geographic: cdktf.numberToTerraform(struct!.metricGeographic),
    metric_health_check: cdktf.numberToTerraform(struct!.metricHealthCheck),
    metric_least_reponse: cdktf.numberToTerraform(struct!.metricLeastReponse),
    metric_number_of_sessions: cdktf.numberToTerraform(struct!.metricNumberOfSessions),
    metric_round_robin: cdktf.numberToTerraform(struct!.metricRoundRobin),
    metric_user: cdktf.numberToTerraform(struct!.metricUser),
    metric_weighted_ip: cdktf.numberToTerraform(struct!.metricWeightedIp),
    metric_weighted_site: cdktf.numberToTerraform(struct!.metricWeightedSite),
    no_answer: cdktf.numberToTerraform(struct!.noAnswer),
    total_query: cdktf.numberToTerraform(struct!.totalQuery),
    total_response: cdktf.numberToTerraform(struct!.totalResponse),
  }
}


export function dataThunderGslbDnsStatsStatsToHclTerraform(struct?: DataThunderGslbDnsStatsStatsOutputReference | DataThunderGslbDnsStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bad_class_query: {
      value: cdktf.numberToHclTerraform(struct!.badClassQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_class_response: {
      value: cdktf.numberToHclTerraform(struct!.badClassResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_format_query: {
      value: cdktf.numberToHclTerraform(struct!.badFormatQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_format_response: {
      value: cdktf.numberToHclTerraform(struct!.badFormatResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_header_query: {
      value: cdktf.numberToHclTerraform(struct!.badHeaderQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_header_response: {
      value: cdktf.numberToHclTerraform(struct!.badHeaderResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_packet_query: {
      value: cdktf.numberToHclTerraform(struct!.badPacketQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_packet_response: {
      value: cdktf.numberToHclTerraform(struct!.badPacketResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_service_query: {
      value: cdktf.numberToHclTerraform(struct!.badServiceQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_service_response: {
      value: cdktf.numberToHclTerraform(struct!.badServiceResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_type_query: {
      value: cdktf.numberToHclTerraform(struct!.badTypeQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_type_response: {
      value: cdktf.numberToHclTerraform(struct!.badTypeResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_active_rdt: {
      value: cdktf.numberToHclTerraform(struct!.metricActiveRdt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_active_server: {
      value: cdktf.numberToHclTerraform(struct!.metricActiveServer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_active_weight: {
      value: cdktf.numberToHclTerraform(struct!.metricActiveWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_admin_ip: {
      value: cdktf.numberToHclTerraform(struct!.metricAdminIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_admin_preference: {
      value: cdktf.numberToHclTerraform(struct!.metricAdminPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_bandwidth_cost: {
      value: cdktf.numberToHclTerraform(struct!.metricBandwidthCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_bandwidth_quality: {
      value: cdktf.numberToHclTerraform(struct!.metricBandwidthQuality),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_capacity: {
      value: cdktf.numberToHclTerraform(struct!.metricCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_connection_load: {
      value: cdktf.numberToHclTerraform(struct!.metricConnectionLoad),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_easy_rdt: {
      value: cdktf.numberToHclTerraform(struct!.metricEasyRdt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_geographic: {
      value: cdktf.numberToHclTerraform(struct!.metricGeographic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_health_check: {
      value: cdktf.numberToHclTerraform(struct!.metricHealthCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_least_reponse: {
      value: cdktf.numberToHclTerraform(struct!.metricLeastReponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_number_of_sessions: {
      value: cdktf.numberToHclTerraform(struct!.metricNumberOfSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_round_robin: {
      value: cdktf.numberToHclTerraform(struct!.metricRoundRobin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_user: {
      value: cdktf.numberToHclTerraform(struct!.metricUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_weighted_ip: {
      value: cdktf.numberToHclTerraform(struct!.metricWeightedIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_weighted_site: {
      value: cdktf.numberToHclTerraform(struct!.metricWeightedSite),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_answer: {
      value: cdktf.numberToHclTerraform(struct!.noAnswer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_query: {
      value: cdktf.numberToHclTerraform(struct!.totalQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_response: {
      value: cdktf.numberToHclTerraform(struct!.totalResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbDnsStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbDnsStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._badClassQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.badClassQuery = this._badClassQuery;
    }
    if (this._badClassResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.badClassResponse = this._badClassResponse;
    }
    if (this._badFormatQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.badFormatQuery = this._badFormatQuery;
    }
    if (this._badFormatResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.badFormatResponse = this._badFormatResponse;
    }
    if (this._badHeaderQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.badHeaderQuery = this._badHeaderQuery;
    }
    if (this._badHeaderResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.badHeaderResponse = this._badHeaderResponse;
    }
    if (this._badPacketQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.badPacketQuery = this._badPacketQuery;
    }
    if (this._badPacketResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.badPacketResponse = this._badPacketResponse;
    }
    if (this._badServiceQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.badServiceQuery = this._badServiceQuery;
    }
    if (this._badServiceResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.badServiceResponse = this._badServiceResponse;
    }
    if (this._badTypeQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.badTypeQuery = this._badTypeQuery;
    }
    if (this._badTypeResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.badTypeResponse = this._badTypeResponse;
    }
    if (this._metricActiveRdt !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricActiveRdt = this._metricActiveRdt;
    }
    if (this._metricActiveServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricActiveServer = this._metricActiveServer;
    }
    if (this._metricActiveWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricActiveWeight = this._metricActiveWeight;
    }
    if (this._metricAdminIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricAdminIp = this._metricAdminIp;
    }
    if (this._metricAdminPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricAdminPreference = this._metricAdminPreference;
    }
    if (this._metricBandwidthCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricBandwidthCost = this._metricBandwidthCost;
    }
    if (this._metricBandwidthQuality !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricBandwidthQuality = this._metricBandwidthQuality;
    }
    if (this._metricCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricCapacity = this._metricCapacity;
    }
    if (this._metricConnectionLoad !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricConnectionLoad = this._metricConnectionLoad;
    }
    if (this._metricEasyRdt !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricEasyRdt = this._metricEasyRdt;
    }
    if (this._metricGeographic !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricGeographic = this._metricGeographic;
    }
    if (this._metricHealthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricHealthCheck = this._metricHealthCheck;
    }
    if (this._metricLeastReponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricLeastReponse = this._metricLeastReponse;
    }
    if (this._metricNumberOfSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricNumberOfSessions = this._metricNumberOfSessions;
    }
    if (this._metricRoundRobin !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricRoundRobin = this._metricRoundRobin;
    }
    if (this._metricUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricUser = this._metricUser;
    }
    if (this._metricWeightedIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricWeightedIp = this._metricWeightedIp;
    }
    if (this._metricWeightedSite !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricWeightedSite = this._metricWeightedSite;
    }
    if (this._noAnswer !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAnswer = this._noAnswer;
    }
    if (this._totalQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalQuery = this._totalQuery;
    }
    if (this._totalResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalResponse = this._totalResponse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbDnsStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._badClassQuery = undefined;
      this._badClassResponse = undefined;
      this._badFormatQuery = undefined;
      this._badFormatResponse = undefined;
      this._badHeaderQuery = undefined;
      this._badHeaderResponse = undefined;
      this._badPacketQuery = undefined;
      this._badPacketResponse = undefined;
      this._badServiceQuery = undefined;
      this._badServiceResponse = undefined;
      this._badTypeQuery = undefined;
      this._badTypeResponse = undefined;
      this._metricActiveRdt = undefined;
      this._metricActiveServer = undefined;
      this._metricActiveWeight = undefined;
      this._metricAdminIp = undefined;
      this._metricAdminPreference = undefined;
      this._metricBandwidthCost = undefined;
      this._metricBandwidthQuality = undefined;
      this._metricCapacity = undefined;
      this._metricConnectionLoad = undefined;
      this._metricEasyRdt = undefined;
      this._metricGeographic = undefined;
      this._metricHealthCheck = undefined;
      this._metricLeastReponse = undefined;
      this._metricNumberOfSessions = undefined;
      this._metricRoundRobin = undefined;
      this._metricUser = undefined;
      this._metricWeightedIp = undefined;
      this._metricWeightedSite = undefined;
      this._noAnswer = undefined;
      this._totalQuery = undefined;
      this._totalResponse = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._badClassQuery = value.badClassQuery;
      this._badClassResponse = value.badClassResponse;
      this._badFormatQuery = value.badFormatQuery;
      this._badFormatResponse = value.badFormatResponse;
      this._badHeaderQuery = value.badHeaderQuery;
      this._badHeaderResponse = value.badHeaderResponse;
      this._badPacketQuery = value.badPacketQuery;
      this._badPacketResponse = value.badPacketResponse;
      this._badServiceQuery = value.badServiceQuery;
      this._badServiceResponse = value.badServiceResponse;
      this._badTypeQuery = value.badTypeQuery;
      this._badTypeResponse = value.badTypeResponse;
      this._metricActiveRdt = value.metricActiveRdt;
      this._metricActiveServer = value.metricActiveServer;
      this._metricActiveWeight = value.metricActiveWeight;
      this._metricAdminIp = value.metricAdminIp;
      this._metricAdminPreference = value.metricAdminPreference;
      this._metricBandwidthCost = value.metricBandwidthCost;
      this._metricBandwidthQuality = value.metricBandwidthQuality;
      this._metricCapacity = value.metricCapacity;
      this._metricConnectionLoad = value.metricConnectionLoad;
      this._metricEasyRdt = value.metricEasyRdt;
      this._metricGeographic = value.metricGeographic;
      this._metricHealthCheck = value.metricHealthCheck;
      this._metricLeastReponse = value.metricLeastReponse;
      this._metricNumberOfSessions = value.metricNumberOfSessions;
      this._metricRoundRobin = value.metricRoundRobin;
      this._metricUser = value.metricUser;
      this._metricWeightedIp = value.metricWeightedIp;
      this._metricWeightedSite = value.metricWeightedSite;
      this._noAnswer = value.noAnswer;
      this._totalQuery = value.totalQuery;
      this._totalResponse = value.totalResponse;
    }
  }

  // bad_class_query - computed: false, optional: true, required: false
  private _badClassQuery?: number; 
  public get badClassQuery() {
    return this.getNumberAttribute('bad_class_query');
  }
  public set badClassQuery(value: number) {
    this._badClassQuery = value;
  }
  public resetBadClassQuery() {
    this._badClassQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badClassQueryInput() {
    return this._badClassQuery;
  }

  // bad_class_response - computed: false, optional: true, required: false
  private _badClassResponse?: number; 
  public get badClassResponse() {
    return this.getNumberAttribute('bad_class_response');
  }
  public set badClassResponse(value: number) {
    this._badClassResponse = value;
  }
  public resetBadClassResponse() {
    this._badClassResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badClassResponseInput() {
    return this._badClassResponse;
  }

  // bad_format_query - computed: false, optional: true, required: false
  private _badFormatQuery?: number; 
  public get badFormatQuery() {
    return this.getNumberAttribute('bad_format_query');
  }
  public set badFormatQuery(value: number) {
    this._badFormatQuery = value;
  }
  public resetBadFormatQuery() {
    this._badFormatQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badFormatQueryInput() {
    return this._badFormatQuery;
  }

  // bad_format_response - computed: false, optional: true, required: false
  private _badFormatResponse?: number; 
  public get badFormatResponse() {
    return this.getNumberAttribute('bad_format_response');
  }
  public set badFormatResponse(value: number) {
    this._badFormatResponse = value;
  }
  public resetBadFormatResponse() {
    this._badFormatResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badFormatResponseInput() {
    return this._badFormatResponse;
  }

  // bad_header_query - computed: false, optional: true, required: false
  private _badHeaderQuery?: number; 
  public get badHeaderQuery() {
    return this.getNumberAttribute('bad_header_query');
  }
  public set badHeaderQuery(value: number) {
    this._badHeaderQuery = value;
  }
  public resetBadHeaderQuery() {
    this._badHeaderQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badHeaderQueryInput() {
    return this._badHeaderQuery;
  }

  // bad_header_response - computed: false, optional: true, required: false
  private _badHeaderResponse?: number; 
  public get badHeaderResponse() {
    return this.getNumberAttribute('bad_header_response');
  }
  public set badHeaderResponse(value: number) {
    this._badHeaderResponse = value;
  }
  public resetBadHeaderResponse() {
    this._badHeaderResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badHeaderResponseInput() {
    return this._badHeaderResponse;
  }

  // bad_packet_query - computed: false, optional: true, required: false
  private _badPacketQuery?: number; 
  public get badPacketQuery() {
    return this.getNumberAttribute('bad_packet_query');
  }
  public set badPacketQuery(value: number) {
    this._badPacketQuery = value;
  }
  public resetBadPacketQuery() {
    this._badPacketQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badPacketQueryInput() {
    return this._badPacketQuery;
  }

  // bad_packet_response - computed: false, optional: true, required: false
  private _badPacketResponse?: number; 
  public get badPacketResponse() {
    return this.getNumberAttribute('bad_packet_response');
  }
  public set badPacketResponse(value: number) {
    this._badPacketResponse = value;
  }
  public resetBadPacketResponse() {
    this._badPacketResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badPacketResponseInput() {
    return this._badPacketResponse;
  }

  // bad_service_query - computed: false, optional: true, required: false
  private _badServiceQuery?: number; 
  public get badServiceQuery() {
    return this.getNumberAttribute('bad_service_query');
  }
  public set badServiceQuery(value: number) {
    this._badServiceQuery = value;
  }
  public resetBadServiceQuery() {
    this._badServiceQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badServiceQueryInput() {
    return this._badServiceQuery;
  }

  // bad_service_response - computed: false, optional: true, required: false
  private _badServiceResponse?: number; 
  public get badServiceResponse() {
    return this.getNumberAttribute('bad_service_response');
  }
  public set badServiceResponse(value: number) {
    this._badServiceResponse = value;
  }
  public resetBadServiceResponse() {
    this._badServiceResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badServiceResponseInput() {
    return this._badServiceResponse;
  }

  // bad_type_query - computed: false, optional: true, required: false
  private _badTypeQuery?: number; 
  public get badTypeQuery() {
    return this.getNumberAttribute('bad_type_query');
  }
  public set badTypeQuery(value: number) {
    this._badTypeQuery = value;
  }
  public resetBadTypeQuery() {
    this._badTypeQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badTypeQueryInput() {
    return this._badTypeQuery;
  }

  // bad_type_response - computed: false, optional: true, required: false
  private _badTypeResponse?: number; 
  public get badTypeResponse() {
    return this.getNumberAttribute('bad_type_response');
  }
  public set badTypeResponse(value: number) {
    this._badTypeResponse = value;
  }
  public resetBadTypeResponse() {
    this._badTypeResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badTypeResponseInput() {
    return this._badTypeResponse;
  }

  // metric_active_rdt - computed: false, optional: true, required: false
  private _metricActiveRdt?: number; 
  public get metricActiveRdt() {
    return this.getNumberAttribute('metric_active_rdt');
  }
  public set metricActiveRdt(value: number) {
    this._metricActiveRdt = value;
  }
  public resetMetricActiveRdt() {
    this._metricActiveRdt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricActiveRdtInput() {
    return this._metricActiveRdt;
  }

  // metric_active_server - computed: false, optional: true, required: false
  private _metricActiveServer?: number; 
  public get metricActiveServer() {
    return this.getNumberAttribute('metric_active_server');
  }
  public set metricActiveServer(value: number) {
    this._metricActiveServer = value;
  }
  public resetMetricActiveServer() {
    this._metricActiveServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricActiveServerInput() {
    return this._metricActiveServer;
  }

  // metric_active_weight - computed: false, optional: true, required: false
  private _metricActiveWeight?: number; 
  public get metricActiveWeight() {
    return this.getNumberAttribute('metric_active_weight');
  }
  public set metricActiveWeight(value: number) {
    this._metricActiveWeight = value;
  }
  public resetMetricActiveWeight() {
    this._metricActiveWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricActiveWeightInput() {
    return this._metricActiveWeight;
  }

  // metric_admin_ip - computed: false, optional: true, required: false
  private _metricAdminIp?: number; 
  public get metricAdminIp() {
    return this.getNumberAttribute('metric_admin_ip');
  }
  public set metricAdminIp(value: number) {
    this._metricAdminIp = value;
  }
  public resetMetricAdminIp() {
    this._metricAdminIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricAdminIpInput() {
    return this._metricAdminIp;
  }

  // metric_admin_preference - computed: false, optional: true, required: false
  private _metricAdminPreference?: number; 
  public get metricAdminPreference() {
    return this.getNumberAttribute('metric_admin_preference');
  }
  public set metricAdminPreference(value: number) {
    this._metricAdminPreference = value;
  }
  public resetMetricAdminPreference() {
    this._metricAdminPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricAdminPreferenceInput() {
    return this._metricAdminPreference;
  }

  // metric_bandwidth_cost - computed: false, optional: true, required: false
  private _metricBandwidthCost?: number; 
  public get metricBandwidthCost() {
    return this.getNumberAttribute('metric_bandwidth_cost');
  }
  public set metricBandwidthCost(value: number) {
    this._metricBandwidthCost = value;
  }
  public resetMetricBandwidthCost() {
    this._metricBandwidthCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricBandwidthCostInput() {
    return this._metricBandwidthCost;
  }

  // metric_bandwidth_quality - computed: false, optional: true, required: false
  private _metricBandwidthQuality?: number; 
  public get metricBandwidthQuality() {
    return this.getNumberAttribute('metric_bandwidth_quality');
  }
  public set metricBandwidthQuality(value: number) {
    this._metricBandwidthQuality = value;
  }
  public resetMetricBandwidthQuality() {
    this._metricBandwidthQuality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricBandwidthQualityInput() {
    return this._metricBandwidthQuality;
  }

  // metric_capacity - computed: false, optional: true, required: false
  private _metricCapacity?: number; 
  public get metricCapacity() {
    return this.getNumberAttribute('metric_capacity');
  }
  public set metricCapacity(value: number) {
    this._metricCapacity = value;
  }
  public resetMetricCapacity() {
    this._metricCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricCapacityInput() {
    return this._metricCapacity;
  }

  // metric_connection_load - computed: false, optional: true, required: false
  private _metricConnectionLoad?: number; 
  public get metricConnectionLoad() {
    return this.getNumberAttribute('metric_connection_load');
  }
  public set metricConnectionLoad(value: number) {
    this._metricConnectionLoad = value;
  }
  public resetMetricConnectionLoad() {
    this._metricConnectionLoad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricConnectionLoadInput() {
    return this._metricConnectionLoad;
  }

  // metric_easy_rdt - computed: false, optional: true, required: false
  private _metricEasyRdt?: number; 
  public get metricEasyRdt() {
    return this.getNumberAttribute('metric_easy_rdt');
  }
  public set metricEasyRdt(value: number) {
    this._metricEasyRdt = value;
  }
  public resetMetricEasyRdt() {
    this._metricEasyRdt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricEasyRdtInput() {
    return this._metricEasyRdt;
  }

  // metric_geographic - computed: false, optional: true, required: false
  private _metricGeographic?: number; 
  public get metricGeographic() {
    return this.getNumberAttribute('metric_geographic');
  }
  public set metricGeographic(value: number) {
    this._metricGeographic = value;
  }
  public resetMetricGeographic() {
    this._metricGeographic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricGeographicInput() {
    return this._metricGeographic;
  }

  // metric_health_check - computed: false, optional: true, required: false
  private _metricHealthCheck?: number; 
  public get metricHealthCheck() {
    return this.getNumberAttribute('metric_health_check');
  }
  public set metricHealthCheck(value: number) {
    this._metricHealthCheck = value;
  }
  public resetMetricHealthCheck() {
    this._metricHealthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricHealthCheckInput() {
    return this._metricHealthCheck;
  }

  // metric_least_reponse - computed: false, optional: true, required: false
  private _metricLeastReponse?: number; 
  public get metricLeastReponse() {
    return this.getNumberAttribute('metric_least_reponse');
  }
  public set metricLeastReponse(value: number) {
    this._metricLeastReponse = value;
  }
  public resetMetricLeastReponse() {
    this._metricLeastReponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricLeastReponseInput() {
    return this._metricLeastReponse;
  }

  // metric_number_of_sessions - computed: false, optional: true, required: false
  private _metricNumberOfSessions?: number; 
  public get metricNumberOfSessions() {
    return this.getNumberAttribute('metric_number_of_sessions');
  }
  public set metricNumberOfSessions(value: number) {
    this._metricNumberOfSessions = value;
  }
  public resetMetricNumberOfSessions() {
    this._metricNumberOfSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNumberOfSessionsInput() {
    return this._metricNumberOfSessions;
  }

  // metric_round_robin - computed: false, optional: true, required: false
  private _metricRoundRobin?: number; 
  public get metricRoundRobin() {
    return this.getNumberAttribute('metric_round_robin');
  }
  public set metricRoundRobin(value: number) {
    this._metricRoundRobin = value;
  }
  public resetMetricRoundRobin() {
    this._metricRoundRobin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricRoundRobinInput() {
    return this._metricRoundRobin;
  }

  // metric_user - computed: false, optional: true, required: false
  private _metricUser?: number; 
  public get metricUser() {
    return this.getNumberAttribute('metric_user');
  }
  public set metricUser(value: number) {
    this._metricUser = value;
  }
  public resetMetricUser() {
    this._metricUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricUserInput() {
    return this._metricUser;
  }

  // metric_weighted_ip - computed: false, optional: true, required: false
  private _metricWeightedIp?: number; 
  public get metricWeightedIp() {
    return this.getNumberAttribute('metric_weighted_ip');
  }
  public set metricWeightedIp(value: number) {
    this._metricWeightedIp = value;
  }
  public resetMetricWeightedIp() {
    this._metricWeightedIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricWeightedIpInput() {
    return this._metricWeightedIp;
  }

  // metric_weighted_site - computed: false, optional: true, required: false
  private _metricWeightedSite?: number; 
  public get metricWeightedSite() {
    return this.getNumberAttribute('metric_weighted_site');
  }
  public set metricWeightedSite(value: number) {
    this._metricWeightedSite = value;
  }
  public resetMetricWeightedSite() {
    this._metricWeightedSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricWeightedSiteInput() {
    return this._metricWeightedSite;
  }

  // no_answer - computed: false, optional: true, required: false
  private _noAnswer?: number; 
  public get noAnswer() {
    return this.getNumberAttribute('no_answer');
  }
  public set noAnswer(value: number) {
    this._noAnswer = value;
  }
  public resetNoAnswer() {
    this._noAnswer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAnswerInput() {
    return this._noAnswer;
  }

  // total_query - computed: false, optional: true, required: false
  private _totalQuery?: number; 
  public get totalQuery() {
    return this.getNumberAttribute('total_query');
  }
  public set totalQuery(value: number) {
    this._totalQuery = value;
  }
  public resetTotalQuery() {
    this._totalQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalQueryInput() {
    return this._totalQuery;
  }

  // total_response - computed: false, optional: true, required: false
  private _totalResponse?: number; 
  public get totalResponse() {
    return this.getNumberAttribute('total_response');
  }
  public set totalResponse(value: number) {
    this._totalResponse = value;
  }
  public resetTotalResponse() {
    this._totalResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalResponseInput() {
    return this._totalResponse;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_dns_stats thunder_gslb_dns_stats}
*/
export class DataThunderGslbDnsStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_dns_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderGslbDnsStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderGslbDnsStats to import
  * @param importFromId The id of the existing DataThunderGslbDnsStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_dns_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderGslbDnsStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_dns_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_dns_stats thunder_gslb_dns_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderGslbDnsStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderGslbDnsStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_dns_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._stats.internalValue = config.stats;
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderGslbDnsStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderGslbDnsStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      stats: dataThunderGslbDnsStatsStatsToTerraform(this._stats.internalValue),
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
      stats: {
        value: dataThunderGslbDnsStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbDnsStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
