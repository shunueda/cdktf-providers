// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSdwanHealthcheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#addr_mode SystemSdwanHealthcheck#addr_mode}
  */
  readonly addrMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#class_id SystemSdwanHealthcheck#class_id}
  */
  readonly classId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#detect_mode SystemSdwanHealthcheck#detect_mode}
  */
  readonly detectMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#device_name SystemSdwanHealthcheck#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#device_vdom SystemSdwanHealthcheck#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#diffservcode SystemSdwanHealthcheck#diffservcode}
  */
  readonly diffservcode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#dns_match_ip SystemSdwanHealthcheck#dns_match_ip}
  */
  readonly dnsMatchIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#dns_request_domain SystemSdwanHealthcheck#dns_request_domain}
  */
  readonly dnsRequestDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#dynamic_sort_subtable SystemSdwanHealthcheck#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#embed_measured_health SystemSdwanHealthcheck#embed_measured_health}
  */
  readonly embedMeasuredHealth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#failtime SystemSdwanHealthcheck#failtime}
  */
  readonly failtime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#fortiguard SystemSdwanHealthcheck#fortiguard}
  */
  readonly fortiguard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#fortiguard_name SystemSdwanHealthcheck#fortiguard_name}
  */
  readonly fortiguardName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#ftp_file SystemSdwanHealthcheck#ftp_file}
  */
  readonly ftpFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#ftp_mode SystemSdwanHealthcheck#ftp_mode}
  */
  readonly ftpMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#ha_priority SystemSdwanHealthcheck#ha_priority}
  */
  readonly haPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#http_agent SystemSdwanHealthcheck#http_agent}
  */
  readonly httpAgent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#http_get SystemSdwanHealthcheck#http_get}
  */
  readonly httpGet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#http_match SystemSdwanHealthcheck#http_match}
  */
  readonly httpMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#id SystemSdwanHealthcheck#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#interval SystemSdwanHealthcheck#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#members SystemSdwanHealthcheck#members}
  */
  readonly members?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#mos_codec SystemSdwanHealthcheck#mos_codec}
  */
  readonly mosCodec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#name SystemSdwanHealthcheck#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#packet_size SystemSdwanHealthcheck#packet_size}
  */
  readonly packetSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#password SystemSdwanHealthcheck#password}
  */
  readonly password?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#port SystemSdwanHealthcheck#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#probe_count SystemSdwanHealthcheck#probe_count}
  */
  readonly probeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#probe_packets SystemSdwanHealthcheck#probe_packets}
  */
  readonly probePackets?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#probe_timeout SystemSdwanHealthcheck#probe_timeout}
  */
  readonly probeTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#protocol SystemSdwanHealthcheck#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#quality_measured_method SystemSdwanHealthcheck#quality_measured_method}
  */
  readonly qualityMeasuredMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#recoverytime SystemSdwanHealthcheck#recoverytime}
  */
  readonly recoverytime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#security_mode SystemSdwanHealthcheck#security_mode}
  */
  readonly securityMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#server SystemSdwanHealthcheck#server}
  */
  readonly server?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#sla_fail_log_period SystemSdwanHealthcheck#sla_fail_log_period}
  */
  readonly slaFailLogPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#sla_id_redistribute SystemSdwanHealthcheck#sla_id_redistribute}
  */
  readonly slaIdRedistribute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#sla_pass_log_period SystemSdwanHealthcheck#sla_pass_log_period}
  */
  readonly slaPassLogPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#source SystemSdwanHealthcheck#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#source6 SystemSdwanHealthcheck#source6}
  */
  readonly source6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#system_dns SystemSdwanHealthcheck#system_dns}
  */
  readonly systemDns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#threshold_alert_jitter SystemSdwanHealthcheck#threshold_alert_jitter}
  */
  readonly thresholdAlertJitter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#threshold_alert_latency SystemSdwanHealthcheck#threshold_alert_latency}
  */
  readonly thresholdAlertLatency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#threshold_alert_packetloss SystemSdwanHealthcheck#threshold_alert_packetloss}
  */
  readonly thresholdAlertPacketloss?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#threshold_warning_jitter SystemSdwanHealthcheck#threshold_warning_jitter}
  */
  readonly thresholdWarningJitter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#threshold_warning_latency SystemSdwanHealthcheck#threshold_warning_latency}
  */
  readonly thresholdWarningLatency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#threshold_warning_packetloss SystemSdwanHealthcheck#threshold_warning_packetloss}
  */
  readonly thresholdWarningPacketloss?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#update_cascade_interface SystemSdwanHealthcheck#update_cascade_interface}
  */
  readonly updateCascadeInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#update_static_route SystemSdwanHealthcheck#update_static_route}
  */
  readonly updateStaticRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#user SystemSdwanHealthcheck#user}
  */
  readonly user?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#vrf SystemSdwanHealthcheck#vrf}
  */
  readonly vrf?: number;
  /**
  * sla block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#sla SystemSdwanHealthcheck#sla}
  */
  readonly sla?: SystemSdwanHealthcheckSla[] | cdktf.IResolvable;
}
export interface SystemSdwanHealthcheckSla {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#id SystemSdwanHealthcheck#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#jitter_threshold SystemSdwanHealthcheck#jitter_threshold}
  */
  readonly jitterThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#latency_threshold SystemSdwanHealthcheck#latency_threshold}
  */
  readonly latencyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#link_cost_factor SystemSdwanHealthcheck#link_cost_factor}
  */
  readonly linkCostFactor?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#mos_threshold SystemSdwanHealthcheck#mos_threshold}
  */
  readonly mosThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#packetloss_threshold SystemSdwanHealthcheck#packetloss_threshold}
  */
  readonly packetlossThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#priority_in_sla SystemSdwanHealthcheck#priority_in_sla}
  */
  readonly priorityInSla?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#priority_out_sla SystemSdwanHealthcheck#priority_out_sla}
  */
  readonly priorityOutSla?: number;
}

export function systemSdwanHealthcheckSlaToTerraform(struct?: SystemSdwanHealthcheckSla | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    jitter_threshold: cdktf.numberToTerraform(struct!.jitterThreshold),
    latency_threshold: cdktf.numberToTerraform(struct!.latencyThreshold),
    link_cost_factor: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.linkCostFactor),
    mos_threshold: cdktf.stringToTerraform(struct!.mosThreshold),
    packetloss_threshold: cdktf.numberToTerraform(struct!.packetlossThreshold),
    priority_in_sla: cdktf.numberToTerraform(struct!.priorityInSla),
    priority_out_sla: cdktf.numberToTerraform(struct!.priorityOutSla),
  }
}


export function systemSdwanHealthcheckSlaToHclTerraform(struct?: SystemSdwanHealthcheckSla | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jitter_threshold: {
      value: cdktf.numberToHclTerraform(struct!.jitterThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    latency_threshold: {
      value: cdktf.numberToHclTerraform(struct!.latencyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    link_cost_factor: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.linkCostFactor),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    mos_threshold: {
      value: cdktf.stringToHclTerraform(struct!.mosThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    packetloss_threshold: {
      value: cdktf.numberToHclTerraform(struct!.packetlossThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority_in_sla: {
      value: cdktf.numberToHclTerraform(struct!.priorityInSla),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority_out_sla: {
      value: cdktf.numberToHclTerraform(struct!.priorityOutSla),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSdwanHealthcheckSlaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemSdwanHealthcheckSla | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._jitterThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.jitterThreshold = this._jitterThreshold;
    }
    if (this._latencyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.latencyThreshold = this._latencyThreshold;
    }
    if (this._linkCostFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkCostFactor = this._linkCostFactor;
    }
    if (this._mosThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.mosThreshold = this._mosThreshold;
    }
    if (this._packetlossThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetlossThreshold = this._packetlossThreshold;
    }
    if (this._priorityInSla !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityInSla = this._priorityInSla;
    }
    if (this._priorityOutSla !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityOutSla = this._priorityOutSla;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSdwanHealthcheckSla | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._jitterThreshold = undefined;
      this._latencyThreshold = undefined;
      this._linkCostFactor = undefined;
      this._mosThreshold = undefined;
      this._packetlossThreshold = undefined;
      this._priorityInSla = undefined;
      this._priorityOutSla = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._jitterThreshold = value.jitterThreshold;
      this._latencyThreshold = value.latencyThreshold;
      this._linkCostFactor = value.linkCostFactor;
      this._mosThreshold = value.mosThreshold;
      this._packetlossThreshold = value.packetlossThreshold;
      this._priorityInSla = value.priorityInSla;
      this._priorityOutSla = value.priorityOutSla;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // jitter_threshold - computed: true, optional: true, required: false
  private _jitterThreshold?: number; 
  public get jitterThreshold() {
    return this.getNumberAttribute('jitter_threshold');
  }
  public set jitterThreshold(value: number) {
    this._jitterThreshold = value;
  }
  public resetJitterThreshold() {
    this._jitterThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitterThresholdInput() {
    return this._jitterThreshold;
  }

  // latency_threshold - computed: true, optional: true, required: false
  private _latencyThreshold?: number; 
  public get latencyThreshold() {
    return this.getNumberAttribute('latency_threshold');
  }
  public set latencyThreshold(value: number) {
    this._latencyThreshold = value;
  }
  public resetLatencyThreshold() {
    this._latencyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyThresholdInput() {
    return this._latencyThreshold;
  }

  // link_cost_factor - computed: true, optional: true, required: false
  private _linkCostFactor?: string[]; 
  public get linkCostFactor() {
    return cdktf.Fn.tolist(this.getListAttribute('link_cost_factor'));
  }
  public set linkCostFactor(value: string[]) {
    this._linkCostFactor = value;
  }
  public resetLinkCostFactor() {
    this._linkCostFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkCostFactorInput() {
    return this._linkCostFactor;
  }

  // mos_threshold - computed: true, optional: true, required: false
  private _mosThreshold?: string; 
  public get mosThreshold() {
    return this.getStringAttribute('mos_threshold');
  }
  public set mosThreshold(value: string) {
    this._mosThreshold = value;
  }
  public resetMosThreshold() {
    this._mosThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mosThresholdInput() {
    return this._mosThreshold;
  }

  // packetloss_threshold - computed: false, optional: true, required: false
  private _packetlossThreshold?: number; 
  public get packetlossThreshold() {
    return this.getNumberAttribute('packetloss_threshold');
  }
  public set packetlossThreshold(value: number) {
    this._packetlossThreshold = value;
  }
  public resetPacketlossThreshold() {
    this._packetlossThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetlossThresholdInput() {
    return this._packetlossThreshold;
  }

  // priority_in_sla - computed: false, optional: true, required: false
  private _priorityInSla?: number; 
  public get priorityInSla() {
    return this.getNumberAttribute('priority_in_sla');
  }
  public set priorityInSla(value: number) {
    this._priorityInSla = value;
  }
  public resetPriorityInSla() {
    this._priorityInSla = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInSlaInput() {
    return this._priorityInSla;
  }

  // priority_out_sla - computed: false, optional: true, required: false
  private _priorityOutSla?: number; 
  public get priorityOutSla() {
    return this.getNumberAttribute('priority_out_sla');
  }
  public set priorityOutSla(value: number) {
    this._priorityOutSla = value;
  }
  public resetPriorityOutSla() {
    this._priorityOutSla = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityOutSlaInput() {
    return this._priorityOutSla;
  }
}

export class SystemSdwanHealthcheckSlaList extends cdktf.ComplexList {
  public internalValue? : SystemSdwanHealthcheckSla[] | cdktf.IResolvable

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
  public get(index: number): SystemSdwanHealthcheckSlaOutputReference {
    return new SystemSdwanHealthcheckSlaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck fmgdevice_system_sdwan_healthcheck}
*/
export class SystemSdwanHealthcheck extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_sdwan_healthcheck";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSdwanHealthcheck resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSdwanHealthcheck to import
  * @param importFromId The id of the existing SystemSdwanHealthcheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSdwanHealthcheck to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_sdwan_healthcheck", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan_healthcheck fmgdevice_system_sdwan_healthcheck} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSdwanHealthcheckConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemSdwanHealthcheckConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_sdwan_healthcheck',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addrMode = config.addrMode;
    this._classId = config.classId;
    this._detectMode = config.detectMode;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._diffservcode = config.diffservcode;
    this._dnsMatchIp = config.dnsMatchIp;
    this._dnsRequestDomain = config.dnsRequestDomain;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._embedMeasuredHealth = config.embedMeasuredHealth;
    this._failtime = config.failtime;
    this._fortiguard = config.fortiguard;
    this._fortiguardName = config.fortiguardName;
    this._ftpFile = config.ftpFile;
    this._ftpMode = config.ftpMode;
    this._haPriority = config.haPriority;
    this._httpAgent = config.httpAgent;
    this._httpGet = config.httpGet;
    this._httpMatch = config.httpMatch;
    this._id = config.id;
    this._interval = config.interval;
    this._members = config.members;
    this._mosCodec = config.mosCodec;
    this._name = config.name;
    this._packetSize = config.packetSize;
    this._password = config.password;
    this._port = config.port;
    this._probeCount = config.probeCount;
    this._probePackets = config.probePackets;
    this._probeTimeout = config.probeTimeout;
    this._protocol = config.protocol;
    this._qualityMeasuredMethod = config.qualityMeasuredMethod;
    this._recoverytime = config.recoverytime;
    this._securityMode = config.securityMode;
    this._server = config.server;
    this._slaFailLogPeriod = config.slaFailLogPeriod;
    this._slaIdRedistribute = config.slaIdRedistribute;
    this._slaPassLogPeriod = config.slaPassLogPeriod;
    this._source = config.source;
    this._source6 = config.source6;
    this._systemDns = config.systemDns;
    this._thresholdAlertJitter = config.thresholdAlertJitter;
    this._thresholdAlertLatency = config.thresholdAlertLatency;
    this._thresholdAlertPacketloss = config.thresholdAlertPacketloss;
    this._thresholdWarningJitter = config.thresholdWarningJitter;
    this._thresholdWarningLatency = config.thresholdWarningLatency;
    this._thresholdWarningPacketloss = config.thresholdWarningPacketloss;
    this._updateCascadeInterface = config.updateCascadeInterface;
    this._updateStaticRoute = config.updateStaticRoute;
    this._user = config.user;
    this._vrf = config.vrf;
    this._sla.internalValue = config.sla;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addr_mode - computed: true, optional: true, required: false
  private _addrMode?: string; 
  public get addrMode() {
    return this.getStringAttribute('addr_mode');
  }
  public set addrMode(value: string) {
    this._addrMode = value;
  }
  public resetAddrMode() {
    this._addrMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrModeInput() {
    return this._addrMode;
  }

  // class_id - computed: true, optional: true, required: false
  private _classId?: string[]; 
  public get classId() {
    return cdktf.Fn.tolist(this.getListAttribute('class_id'));
  }
  public set classId(value: string[]) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // detect_mode - computed: true, optional: true, required: false
  private _detectMode?: string; 
  public get detectMode() {
    return this.getStringAttribute('detect_mode');
  }
  public set detectMode(value: string) {
    this._detectMode = value;
  }
  public resetDetectMode() {
    this._detectMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectModeInput() {
    return this._detectMode;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // diffservcode - computed: true, optional: true, required: false
  private _diffservcode?: string; 
  public get diffservcode() {
    return this.getStringAttribute('diffservcode');
  }
  public set diffservcode(value: string) {
    this._diffservcode = value;
  }
  public resetDiffservcode() {
    this._diffservcode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffservcodeInput() {
    return this._diffservcode;
  }

  // dns_match_ip - computed: true, optional: true, required: false
  private _dnsMatchIp?: string; 
  public get dnsMatchIp() {
    return this.getStringAttribute('dns_match_ip');
  }
  public set dnsMatchIp(value: string) {
    this._dnsMatchIp = value;
  }
  public resetDnsMatchIp() {
    this._dnsMatchIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsMatchIpInput() {
    return this._dnsMatchIp;
  }

  // dns_request_domain - computed: true, optional: true, required: false
  private _dnsRequestDomain?: string; 
  public get dnsRequestDomain() {
    return this.getStringAttribute('dns_request_domain');
  }
  public set dnsRequestDomain(value: string) {
    this._dnsRequestDomain = value;
  }
  public resetDnsRequestDomain() {
    this._dnsRequestDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRequestDomainInput() {
    return this._dnsRequestDomain;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // embed_measured_health - computed: true, optional: true, required: false
  private _embedMeasuredHealth?: string; 
  public get embedMeasuredHealth() {
    return this.getStringAttribute('embed_measured_health');
  }
  public set embedMeasuredHealth(value: string) {
    this._embedMeasuredHealth = value;
  }
  public resetEmbedMeasuredHealth() {
    this._embedMeasuredHealth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embedMeasuredHealthInput() {
    return this._embedMeasuredHealth;
  }

  // failtime - computed: true, optional: true, required: false
  private _failtime?: number; 
  public get failtime() {
    return this.getNumberAttribute('failtime');
  }
  public set failtime(value: number) {
    this._failtime = value;
  }
  public resetFailtime() {
    this._failtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failtimeInput() {
    return this._failtime;
  }

  // fortiguard - computed: true, optional: true, required: false
  private _fortiguard?: string; 
  public get fortiguard() {
    return this.getStringAttribute('fortiguard');
  }
  public set fortiguard(value: string) {
    this._fortiguard = value;
  }
  public resetFortiguard() {
    this._fortiguard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiguardInput() {
    return this._fortiguard;
  }

  // fortiguard_name - computed: true, optional: true, required: false
  private _fortiguardName?: string[]; 
  public get fortiguardName() {
    return cdktf.Fn.tolist(this.getListAttribute('fortiguard_name'));
  }
  public set fortiguardName(value: string[]) {
    this._fortiguardName = value;
  }
  public resetFortiguardName() {
    this._fortiguardName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiguardNameInput() {
    return this._fortiguardName;
  }

  // ftp_file - computed: false, optional: true, required: false
  private _ftpFile?: string; 
  public get ftpFile() {
    return this.getStringAttribute('ftp_file');
  }
  public set ftpFile(value: string) {
    this._ftpFile = value;
  }
  public resetFtpFile() {
    this._ftpFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpFileInput() {
    return this._ftpFile;
  }

  // ftp_mode - computed: true, optional: true, required: false
  private _ftpMode?: string; 
  public get ftpMode() {
    return this.getStringAttribute('ftp_mode');
  }
  public set ftpMode(value: string) {
    this._ftpMode = value;
  }
  public resetFtpMode() {
    this._ftpMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpModeInput() {
    return this._ftpMode;
  }

  // ha_priority - computed: true, optional: true, required: false
  private _haPriority?: number; 
  public get haPriority() {
    return this.getNumberAttribute('ha_priority');
  }
  public set haPriority(value: number) {
    this._haPriority = value;
  }
  public resetHaPriority() {
    this._haPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haPriorityInput() {
    return this._haPriority;
  }

  // http_agent - computed: true, optional: true, required: false
  private _httpAgent?: string; 
  public get httpAgent() {
    return this.getStringAttribute('http_agent');
  }
  public set httpAgent(value: string) {
    this._httpAgent = value;
  }
  public resetHttpAgent() {
    this._httpAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpAgentInput() {
    return this._httpAgent;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet?: string; 
  public get httpGet() {
    return this.getStringAttribute('http_get');
  }
  public set httpGet(value: string) {
    this._httpGet = value;
  }
  public resetHttpGet() {
    this._httpGet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet;
  }

  // http_match - computed: false, optional: true, required: false
  private _httpMatch?: string; 
  public get httpMatch() {
    return this.getStringAttribute('http_match');
  }
  public set httpMatch(value: string) {
    this._httpMatch = value;
  }
  public resetHttpMatch() {
    this._httpMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMatchInput() {
    return this._httpMatch;
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

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // members - computed: true, optional: true, required: false
  private _members?: string[]; 
  public get members() {
    return cdktf.Fn.tolist(this.getListAttribute('members'));
  }
  public set members(value: string[]) {
    this._members = value;
  }
  public resetMembers() {
    this._members = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members;
  }

  // mos_codec - computed: true, optional: true, required: false
  private _mosCodec?: string; 
  public get mosCodec() {
    return this.getStringAttribute('mos_codec');
  }
  public set mosCodec(value: string) {
    this._mosCodec = value;
  }
  public resetMosCodec() {
    this._mosCodec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mosCodecInput() {
    return this._mosCodec;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // packet_size - computed: false, optional: true, required: false
  private _packetSize?: number; 
  public get packetSize() {
    return this.getNumberAttribute('packet_size');
  }
  public set packetSize(value: number) {
    this._packetSize = value;
  }
  public resetPacketSize() {
    this._packetSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetSizeInput() {
    return this._packetSize;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string[]; 
  public get password() {
    return cdktf.Fn.tolist(this.getListAttribute('password'));
  }
  public set password(value: string[]) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // probe_count - computed: true, optional: true, required: false
  private _probeCount?: number; 
  public get probeCount() {
    return this.getNumberAttribute('probe_count');
  }
  public set probeCount(value: number) {
    this._probeCount = value;
  }
  public resetProbeCount() {
    this._probeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeCountInput() {
    return this._probeCount;
  }

  // probe_packets - computed: true, optional: true, required: false
  private _probePackets?: string; 
  public get probePackets() {
    return this.getStringAttribute('probe_packets');
  }
  public set probePackets(value: string) {
    this._probePackets = value;
  }
  public resetProbePackets() {
    this._probePackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probePacketsInput() {
    return this._probePackets;
  }

  // probe_timeout - computed: true, optional: true, required: false
  private _probeTimeout?: number; 
  public get probeTimeout() {
    return this.getNumberAttribute('probe_timeout');
  }
  public set probeTimeout(value: number) {
    this._probeTimeout = value;
  }
  public resetProbeTimeout() {
    this._probeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeTimeoutInput() {
    return this._probeTimeout;
  }

  // protocol - computed: true, optional: true, required: false
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

  // quality_measured_method - computed: true, optional: true, required: false
  private _qualityMeasuredMethod?: string; 
  public get qualityMeasuredMethod() {
    return this.getStringAttribute('quality_measured_method');
  }
  public set qualityMeasuredMethod(value: string) {
    this._qualityMeasuredMethod = value;
  }
  public resetQualityMeasuredMethod() {
    this._qualityMeasuredMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualityMeasuredMethodInput() {
    return this._qualityMeasuredMethod;
  }

  // recoverytime - computed: true, optional: true, required: false
  private _recoverytime?: number; 
  public get recoverytime() {
    return this.getNumberAttribute('recoverytime');
  }
  public set recoverytime(value: number) {
    this._recoverytime = value;
  }
  public resetRecoverytime() {
    this._recoverytime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoverytimeInput() {
    return this._recoverytime;
  }

  // security_mode - computed: false, optional: true, required: false
  private _securityMode?: string; 
  public get securityMode() {
    return this.getStringAttribute('security_mode');
  }
  public set securityMode(value: string) {
    this._securityMode = value;
  }
  public resetSecurityMode() {
    this._securityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityModeInput() {
    return this._securityMode;
  }

  // server - computed: true, optional: true, required: false
  private _server?: string[]; 
  public get server() {
    return cdktf.Fn.tolist(this.getListAttribute('server'));
  }
  public set server(value: string[]) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // sla_fail_log_period - computed: false, optional: true, required: false
  private _slaFailLogPeriod?: number; 
  public get slaFailLogPeriod() {
    return this.getNumberAttribute('sla_fail_log_period');
  }
  public set slaFailLogPeriod(value: number) {
    this._slaFailLogPeriod = value;
  }
  public resetSlaFailLogPeriod() {
    this._slaFailLogPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaFailLogPeriodInput() {
    return this._slaFailLogPeriod;
  }

  // sla_id_redistribute - computed: false, optional: true, required: false
  private _slaIdRedistribute?: number; 
  public get slaIdRedistribute() {
    return this.getNumberAttribute('sla_id_redistribute');
  }
  public set slaIdRedistribute(value: number) {
    this._slaIdRedistribute = value;
  }
  public resetSlaIdRedistribute() {
    this._slaIdRedistribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaIdRedistributeInput() {
    return this._slaIdRedistribute;
  }

  // sla_pass_log_period - computed: false, optional: true, required: false
  private _slaPassLogPeriod?: number; 
  public get slaPassLogPeriod() {
    return this.getNumberAttribute('sla_pass_log_period');
  }
  public set slaPassLogPeriod(value: number) {
    this._slaPassLogPeriod = value;
  }
  public resetSlaPassLogPeriod() {
    this._slaPassLogPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaPassLogPeriodInput() {
    return this._slaPassLogPeriod;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source6 - computed: false, optional: true, required: false
  private _source6?: string; 
  public get source6() {
    return this.getStringAttribute('source6');
  }
  public set source6(value: string) {
    this._source6 = value;
  }
  public resetSource6() {
    this._source6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get source6Input() {
    return this._source6;
  }

  // system_dns - computed: true, optional: true, required: false
  private _systemDns?: string; 
  public get systemDns() {
    return this.getStringAttribute('system_dns');
  }
  public set systemDns(value: string) {
    this._systemDns = value;
  }
  public resetSystemDns() {
    this._systemDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDnsInput() {
    return this._systemDns;
  }

  // threshold_alert_jitter - computed: false, optional: true, required: false
  private _thresholdAlertJitter?: number; 
  public get thresholdAlertJitter() {
    return this.getNumberAttribute('threshold_alert_jitter');
  }
  public set thresholdAlertJitter(value: number) {
    this._thresholdAlertJitter = value;
  }
  public resetThresholdAlertJitter() {
    this._thresholdAlertJitter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdAlertJitterInput() {
    return this._thresholdAlertJitter;
  }

  // threshold_alert_latency - computed: false, optional: true, required: false
  private _thresholdAlertLatency?: number; 
  public get thresholdAlertLatency() {
    return this.getNumberAttribute('threshold_alert_latency');
  }
  public set thresholdAlertLatency(value: number) {
    this._thresholdAlertLatency = value;
  }
  public resetThresholdAlertLatency() {
    this._thresholdAlertLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdAlertLatencyInput() {
    return this._thresholdAlertLatency;
  }

  // threshold_alert_packetloss - computed: false, optional: true, required: false
  private _thresholdAlertPacketloss?: number; 
  public get thresholdAlertPacketloss() {
    return this.getNumberAttribute('threshold_alert_packetloss');
  }
  public set thresholdAlertPacketloss(value: number) {
    this._thresholdAlertPacketloss = value;
  }
  public resetThresholdAlertPacketloss() {
    this._thresholdAlertPacketloss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdAlertPacketlossInput() {
    return this._thresholdAlertPacketloss;
  }

  // threshold_warning_jitter - computed: false, optional: true, required: false
  private _thresholdWarningJitter?: number; 
  public get thresholdWarningJitter() {
    return this.getNumberAttribute('threshold_warning_jitter');
  }
  public set thresholdWarningJitter(value: number) {
    this._thresholdWarningJitter = value;
  }
  public resetThresholdWarningJitter() {
    this._thresholdWarningJitter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdWarningJitterInput() {
    return this._thresholdWarningJitter;
  }

  // threshold_warning_latency - computed: false, optional: true, required: false
  private _thresholdWarningLatency?: number; 
  public get thresholdWarningLatency() {
    return this.getNumberAttribute('threshold_warning_latency');
  }
  public set thresholdWarningLatency(value: number) {
    this._thresholdWarningLatency = value;
  }
  public resetThresholdWarningLatency() {
    this._thresholdWarningLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdWarningLatencyInput() {
    return this._thresholdWarningLatency;
  }

  // threshold_warning_packetloss - computed: false, optional: true, required: false
  private _thresholdWarningPacketloss?: number; 
  public get thresholdWarningPacketloss() {
    return this.getNumberAttribute('threshold_warning_packetloss');
  }
  public set thresholdWarningPacketloss(value: number) {
    this._thresholdWarningPacketloss = value;
  }
  public resetThresholdWarningPacketloss() {
    this._thresholdWarningPacketloss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdWarningPacketlossInput() {
    return this._thresholdWarningPacketloss;
  }

  // update_cascade_interface - computed: true, optional: true, required: false
  private _updateCascadeInterface?: string; 
  public get updateCascadeInterface() {
    return this.getStringAttribute('update_cascade_interface');
  }
  public set updateCascadeInterface(value: string) {
    this._updateCascadeInterface = value;
  }
  public resetUpdateCascadeInterface() {
    this._updateCascadeInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateCascadeInterfaceInput() {
    return this._updateCascadeInterface;
  }

  // update_static_route - computed: true, optional: true, required: false
  private _updateStaticRoute?: string; 
  public get updateStaticRoute() {
    return this.getStringAttribute('update_static_route');
  }
  public set updateStaticRoute(value: string) {
    this._updateStaticRoute = value;
  }
  public resetUpdateStaticRoute() {
    this._updateStaticRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateStaticRouteInput() {
    return this._updateStaticRoute;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // vrf - computed: false, optional: true, required: false
  private _vrf?: number; 
  public get vrf() {
    return this.getNumberAttribute('vrf');
  }
  public set vrf(value: number) {
    this._vrf = value;
  }
  public resetVrf() {
    this._vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }

  // sla - computed: false, optional: true, required: false
  private _sla = new SystemSdwanHealthcheckSlaList(this, "sla", false);
  public get sla() {
    return this._sla;
  }
  public putSla(value: SystemSdwanHealthcheckSla[] | cdktf.IResolvable) {
    this._sla.internalValue = value;
  }
  public resetSla() {
    this._sla.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaInput() {
    return this._sla.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addr_mode: cdktf.stringToTerraform(this._addrMode),
      class_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._classId),
      detect_mode: cdktf.stringToTerraform(this._detectMode),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      diffservcode: cdktf.stringToTerraform(this._diffservcode),
      dns_match_ip: cdktf.stringToTerraform(this._dnsMatchIp),
      dns_request_domain: cdktf.stringToTerraform(this._dnsRequestDomain),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      embed_measured_health: cdktf.stringToTerraform(this._embedMeasuredHealth),
      failtime: cdktf.numberToTerraform(this._failtime),
      fortiguard: cdktf.stringToTerraform(this._fortiguard),
      fortiguard_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fortiguardName),
      ftp_file: cdktf.stringToTerraform(this._ftpFile),
      ftp_mode: cdktf.stringToTerraform(this._ftpMode),
      ha_priority: cdktf.numberToTerraform(this._haPriority),
      http_agent: cdktf.stringToTerraform(this._httpAgent),
      http_get: cdktf.stringToTerraform(this._httpGet),
      http_match: cdktf.stringToTerraform(this._httpMatch),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      members: cdktf.listMapper(cdktf.stringToTerraform, false)(this._members),
      mos_codec: cdktf.stringToTerraform(this._mosCodec),
      name: cdktf.stringToTerraform(this._name),
      packet_size: cdktf.numberToTerraform(this._packetSize),
      password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._password),
      port: cdktf.numberToTerraform(this._port),
      probe_count: cdktf.numberToTerraform(this._probeCount),
      probe_packets: cdktf.stringToTerraform(this._probePackets),
      probe_timeout: cdktf.numberToTerraform(this._probeTimeout),
      protocol: cdktf.stringToTerraform(this._protocol),
      quality_measured_method: cdktf.stringToTerraform(this._qualityMeasuredMethod),
      recoverytime: cdktf.numberToTerraform(this._recoverytime),
      security_mode: cdktf.stringToTerraform(this._securityMode),
      server: cdktf.listMapper(cdktf.stringToTerraform, false)(this._server),
      sla_fail_log_period: cdktf.numberToTerraform(this._slaFailLogPeriod),
      sla_id_redistribute: cdktf.numberToTerraform(this._slaIdRedistribute),
      sla_pass_log_period: cdktf.numberToTerraform(this._slaPassLogPeriod),
      source: cdktf.stringToTerraform(this._source),
      source6: cdktf.stringToTerraform(this._source6),
      system_dns: cdktf.stringToTerraform(this._systemDns),
      threshold_alert_jitter: cdktf.numberToTerraform(this._thresholdAlertJitter),
      threshold_alert_latency: cdktf.numberToTerraform(this._thresholdAlertLatency),
      threshold_alert_packetloss: cdktf.numberToTerraform(this._thresholdAlertPacketloss),
      threshold_warning_jitter: cdktf.numberToTerraform(this._thresholdWarningJitter),
      threshold_warning_latency: cdktf.numberToTerraform(this._thresholdWarningLatency),
      threshold_warning_packetloss: cdktf.numberToTerraform(this._thresholdWarningPacketloss),
      update_cascade_interface: cdktf.stringToTerraform(this._updateCascadeInterface),
      update_static_route: cdktf.stringToTerraform(this._updateStaticRoute),
      user: cdktf.stringToTerraform(this._user),
      vrf: cdktf.numberToTerraform(this._vrf),
      sla: cdktf.listMapper(systemSdwanHealthcheckSlaToTerraform, true)(this._sla.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addr_mode: {
        value: cdktf.stringToHclTerraform(this._addrMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      class_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._classId),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      detect_mode: {
        value: cdktf.stringToHclTerraform(this._detectMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      diffservcode: {
        value: cdktf.stringToHclTerraform(this._diffservcode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_match_ip: {
        value: cdktf.stringToHclTerraform(this._dnsMatchIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_request_domain: {
        value: cdktf.stringToHclTerraform(this._dnsRequestDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      embed_measured_health: {
        value: cdktf.stringToHclTerraform(this._embedMeasuredHealth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failtime: {
        value: cdktf.numberToHclTerraform(this._failtime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fortiguard: {
        value: cdktf.stringToHclTerraform(this._fortiguard),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortiguard_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fortiguardName),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ftp_file: {
        value: cdktf.stringToHclTerraform(this._ftpFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ftp_mode: {
        value: cdktf.stringToHclTerraform(this._ftpMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_priority: {
        value: cdktf.numberToHclTerraform(this._haPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_agent: {
        value: cdktf.stringToHclTerraform(this._httpAgent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_get: {
        value: cdktf.stringToHclTerraform(this._httpGet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_match: {
        value: cdktf.stringToHclTerraform(this._httpMatch),
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
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      members: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._members),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      mos_codec: {
        value: cdktf.stringToHclTerraform(this._mosCodec),
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
      packet_size: {
        value: cdktf.numberToHclTerraform(this._packetSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._password),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      probe_count: {
        value: cdktf.numberToHclTerraform(this._probeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      probe_packets: {
        value: cdktf.stringToHclTerraform(this._probePackets),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      probe_timeout: {
        value: cdktf.numberToHclTerraform(this._probeTimeout),
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
      quality_measured_method: {
        value: cdktf.stringToHclTerraform(this._qualityMeasuredMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recoverytime: {
        value: cdktf.numberToHclTerraform(this._recoverytime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_mode: {
        value: cdktf.stringToHclTerraform(this._securityMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._server),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sla_fail_log_period: {
        value: cdktf.numberToHclTerraform(this._slaFailLogPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sla_id_redistribute: {
        value: cdktf.numberToHclTerraform(this._slaIdRedistribute),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sla_pass_log_period: {
        value: cdktf.numberToHclTerraform(this._slaPassLogPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source6: {
        value: cdktf.stringToHclTerraform(this._source6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_dns: {
        value: cdktf.stringToHclTerraform(this._systemDns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threshold_alert_jitter: {
        value: cdktf.numberToHclTerraform(this._thresholdAlertJitter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      threshold_alert_latency: {
        value: cdktf.numberToHclTerraform(this._thresholdAlertLatency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      threshold_alert_packetloss: {
        value: cdktf.numberToHclTerraform(this._thresholdAlertPacketloss),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      threshold_warning_jitter: {
        value: cdktf.numberToHclTerraform(this._thresholdWarningJitter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      threshold_warning_latency: {
        value: cdktf.numberToHclTerraform(this._thresholdWarningLatency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      threshold_warning_packetloss: {
        value: cdktf.numberToHclTerraform(this._thresholdWarningPacketloss),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      update_cascade_interface: {
        value: cdktf.stringToHclTerraform(this._updateCascadeInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_static_route: {
        value: cdktf.stringToHclTerraform(this._updateStaticRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf: {
        value: cdktf.numberToHclTerraform(this._vrf),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sla: {
        value: cdktf.listMapperHcl(systemSdwanHealthcheckSlaToHclTerraform, true)(this._sla.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemSdwanHealthcheckSlaList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
