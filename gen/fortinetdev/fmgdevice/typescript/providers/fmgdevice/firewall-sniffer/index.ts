// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallSnifferConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#application_list FirewallSniffer#application_list}
  */
  readonly applicationList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#application_list_status FirewallSniffer#application_list_status}
  */
  readonly applicationListStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#av_profile FirewallSniffer#av_profile}
  */
  readonly avProfile?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#av_profile_status FirewallSniffer#av_profile_status}
  */
  readonly avProfileStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#device_name FirewallSniffer#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#device_vdom FirewallSniffer#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#dlp_profile FirewallSniffer#dlp_profile}
  */
  readonly dlpProfile?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#dlp_profile_status FirewallSniffer#dlp_profile_status}
  */
  readonly dlpProfileStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#dlp_sensor FirewallSniffer#dlp_sensor}
  */
  readonly dlpSensor?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#dlp_sensor_status FirewallSniffer#dlp_sensor_status}
  */
  readonly dlpSensorStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#dsri FirewallSniffer#dsri}
  */
  readonly dsri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#dynamic_sort_subtable FirewallSniffer#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#emailfilter_profile FirewallSniffer#emailfilter_profile}
  */
  readonly emailfilterProfile?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#emailfilter_profile_status FirewallSniffer#emailfilter_profile_status}
  */
  readonly emailfilterProfileStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#file_filter_profile FirewallSniffer#file_filter_profile}
  */
  readonly fileFilterProfile?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#file_filter_profile_status FirewallSniffer#file_filter_profile_status}
  */
  readonly fileFilterProfileStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#fosid FirewallSniffer#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#host FirewallSniffer#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#id FirewallSniffer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#interface FirewallSniffer#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#ip_threatfeed FirewallSniffer#ip_threatfeed}
  */
  readonly ipThreatfeed?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#ip_threatfeed_status FirewallSniffer#ip_threatfeed_status}
  */
  readonly ipThreatfeedStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#ips_dos_status FirewallSniffer#ips_dos_status}
  */
  readonly ipsDosStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#ips_sensor FirewallSniffer#ips_sensor}
  */
  readonly ipsSensor?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#ips_sensor_status FirewallSniffer#ips_sensor_status}
  */
  readonly ipsSensorStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#ipv6 FirewallSniffer#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#logtraffic FirewallSniffer#logtraffic}
  */
  readonly logtraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#max_packet_count FirewallSniffer#max_packet_count}
  */
  readonly maxPacketCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#non_ip FirewallSniffer#non_ip}
  */
  readonly nonIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#port FirewallSniffer#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#protocol FirewallSniffer#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#status FirewallSniffer#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#uuid FirewallSniffer#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#vlan FirewallSniffer#vlan}
  */
  readonly vlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#webfilter_profile FirewallSniffer#webfilter_profile}
  */
  readonly webfilterProfile?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#webfilter_profile_status FirewallSniffer#webfilter_profile_status}
  */
  readonly webfilterProfileStatus?: string;
  /**
  * anomaly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#anomaly FirewallSniffer#anomaly}
  */
  readonly anomaly?: FirewallSnifferAnomaly[] | cdktf.IResolvable;
}
export interface FirewallSnifferAnomaly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#action FirewallSniffer#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#log FirewallSniffer#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#name FirewallSniffer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#quarantine FirewallSniffer#quarantine}
  */
  readonly quarantine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#quarantine_expiry FirewallSniffer#quarantine_expiry}
  */
  readonly quarantineExpiry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#quarantine_log FirewallSniffer#quarantine_log}
  */
  readonly quarantineLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#status FirewallSniffer#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#synproxy_tcp_mss FirewallSniffer#synproxy_tcp_mss}
  */
  readonly synproxyTcpMss?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#synproxy_tcp_sack FirewallSniffer#synproxy_tcp_sack}
  */
  readonly synproxyTcpSack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#synproxy_tcp_timestamp FirewallSniffer#synproxy_tcp_timestamp}
  */
  readonly synproxyTcpTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#synproxy_tcp_window FirewallSniffer#synproxy_tcp_window}
  */
  readonly synproxyTcpWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#synproxy_tcp_windowscale FirewallSniffer#synproxy_tcp_windowscale}
  */
  readonly synproxyTcpWindowscale?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#synproxy_tos FirewallSniffer#synproxy_tos}
  */
  readonly synproxyTos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#synproxy_ttl FirewallSniffer#synproxy_ttl}
  */
  readonly synproxyTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#threshold FirewallSniffer#threshold}
  */
  readonly threshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#thresholddefault FirewallSniffer#thresholddefault}
  */
  readonly thresholddefault?: number;
}

export function firewallSnifferAnomalyToTerraform(struct?: FirewallSnifferAnomaly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    log: cdktf.stringToTerraform(struct!.log),
    name: cdktf.stringToTerraform(struct!.name),
    quarantine: cdktf.stringToTerraform(struct!.quarantine),
    quarantine_expiry: cdktf.stringToTerraform(struct!.quarantineExpiry),
    quarantine_log: cdktf.stringToTerraform(struct!.quarantineLog),
    status: cdktf.stringToTerraform(struct!.status),
    synproxy_tcp_mss: cdktf.stringToTerraform(struct!.synproxyTcpMss),
    synproxy_tcp_sack: cdktf.stringToTerraform(struct!.synproxyTcpSack),
    synproxy_tcp_timestamp: cdktf.stringToTerraform(struct!.synproxyTcpTimestamp),
    synproxy_tcp_window: cdktf.stringToTerraform(struct!.synproxyTcpWindow),
    synproxy_tcp_windowscale: cdktf.stringToTerraform(struct!.synproxyTcpWindowscale),
    synproxy_tos: cdktf.stringToTerraform(struct!.synproxyTos),
    synproxy_ttl: cdktf.stringToTerraform(struct!.synproxyTtl),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    thresholddefault: cdktf.numberToTerraform(struct!.thresholddefault),
  }
}


export function firewallSnifferAnomalyToHclTerraform(struct?: FirewallSnifferAnomaly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
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
    quarantine: {
      value: cdktf.stringToHclTerraform(struct!.quarantine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quarantine_expiry: {
      value: cdktf.stringToHclTerraform(struct!.quarantineExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quarantine_log: {
      value: cdktf.stringToHclTerraform(struct!.quarantineLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synproxy_tcp_mss: {
      value: cdktf.stringToHclTerraform(struct!.synproxyTcpMss),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synproxy_tcp_sack: {
      value: cdktf.stringToHclTerraform(struct!.synproxyTcpSack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synproxy_tcp_timestamp: {
      value: cdktf.stringToHclTerraform(struct!.synproxyTcpTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synproxy_tcp_window: {
      value: cdktf.stringToHclTerraform(struct!.synproxyTcpWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synproxy_tcp_windowscale: {
      value: cdktf.stringToHclTerraform(struct!.synproxyTcpWindowscale),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synproxy_tos: {
      value: cdktf.stringToHclTerraform(struct!.synproxyTos),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synproxy_ttl: {
      value: cdktf.stringToHclTerraform(struct!.synproxyTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    thresholddefault: {
      value: cdktf.numberToHclTerraform(struct!.thresholddefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallSnifferAnomalyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallSnifferAnomaly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._quarantine !== undefined) {
      hasAnyValues = true;
      internalValueResult.quarantine = this._quarantine;
    }
    if (this._quarantineExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.quarantineExpiry = this._quarantineExpiry;
    }
    if (this._quarantineLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.quarantineLog = this._quarantineLog;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._synproxyTcpMss !== undefined) {
      hasAnyValues = true;
      internalValueResult.synproxyTcpMss = this._synproxyTcpMss;
    }
    if (this._synproxyTcpSack !== undefined) {
      hasAnyValues = true;
      internalValueResult.synproxyTcpSack = this._synproxyTcpSack;
    }
    if (this._synproxyTcpTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.synproxyTcpTimestamp = this._synproxyTcpTimestamp;
    }
    if (this._synproxyTcpWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.synproxyTcpWindow = this._synproxyTcpWindow;
    }
    if (this._synproxyTcpWindowscale !== undefined) {
      hasAnyValues = true;
      internalValueResult.synproxyTcpWindowscale = this._synproxyTcpWindowscale;
    }
    if (this._synproxyTos !== undefined) {
      hasAnyValues = true;
      internalValueResult.synproxyTos = this._synproxyTos;
    }
    if (this._synproxyTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.synproxyTtl = this._synproxyTtl;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._thresholddefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholddefault = this._thresholddefault;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallSnifferAnomaly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._log = undefined;
      this._name = undefined;
      this._quarantine = undefined;
      this._quarantineExpiry = undefined;
      this._quarantineLog = undefined;
      this._status = undefined;
      this._synproxyTcpMss = undefined;
      this._synproxyTcpSack = undefined;
      this._synproxyTcpTimestamp = undefined;
      this._synproxyTcpWindow = undefined;
      this._synproxyTcpWindowscale = undefined;
      this._synproxyTos = undefined;
      this._synproxyTtl = undefined;
      this._threshold = undefined;
      this._thresholddefault = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._log = value.log;
      this._name = value.name;
      this._quarantine = value.quarantine;
      this._quarantineExpiry = value.quarantineExpiry;
      this._quarantineLog = value.quarantineLog;
      this._status = value.status;
      this._synproxyTcpMss = value.synproxyTcpMss;
      this._synproxyTcpSack = value.synproxyTcpSack;
      this._synproxyTcpTimestamp = value.synproxyTcpTimestamp;
      this._synproxyTcpWindow = value.synproxyTcpWindow;
      this._synproxyTcpWindowscale = value.synproxyTcpWindowscale;
      this._synproxyTos = value.synproxyTos;
      this._synproxyTtl = value.synproxyTtl;
      this._threshold = value.threshold;
      this._thresholddefault = value.thresholddefault;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // log - computed: false, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
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

  // quarantine - computed: false, optional: true, required: false
  private _quarantine?: string; 
  public get quarantine() {
    return this.getStringAttribute('quarantine');
  }
  public set quarantine(value: string) {
    this._quarantine = value;
  }
  public resetQuarantine() {
    this._quarantine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineInput() {
    return this._quarantine;
  }

  // quarantine_expiry - computed: false, optional: true, required: false
  private _quarantineExpiry?: string; 
  public get quarantineExpiry() {
    return this.getStringAttribute('quarantine_expiry');
  }
  public set quarantineExpiry(value: string) {
    this._quarantineExpiry = value;
  }
  public resetQuarantineExpiry() {
    this._quarantineExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineExpiryInput() {
    return this._quarantineExpiry;
  }

  // quarantine_log - computed: false, optional: true, required: false
  private _quarantineLog?: string; 
  public get quarantineLog() {
    return this.getStringAttribute('quarantine_log');
  }
  public set quarantineLog(value: string) {
    this._quarantineLog = value;
  }
  public resetQuarantineLog() {
    this._quarantineLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineLogInput() {
    return this._quarantineLog;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // synproxy_tcp_mss - computed: false, optional: true, required: false
  private _synproxyTcpMss?: string; 
  public get synproxyTcpMss() {
    return this.getStringAttribute('synproxy_tcp_mss');
  }
  public set synproxyTcpMss(value: string) {
    this._synproxyTcpMss = value;
  }
  public resetSynproxyTcpMss() {
    this._synproxyTcpMss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synproxyTcpMssInput() {
    return this._synproxyTcpMss;
  }

  // synproxy_tcp_sack - computed: false, optional: true, required: false
  private _synproxyTcpSack?: string; 
  public get synproxyTcpSack() {
    return this.getStringAttribute('synproxy_tcp_sack');
  }
  public set synproxyTcpSack(value: string) {
    this._synproxyTcpSack = value;
  }
  public resetSynproxyTcpSack() {
    this._synproxyTcpSack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synproxyTcpSackInput() {
    return this._synproxyTcpSack;
  }

  // synproxy_tcp_timestamp - computed: false, optional: true, required: false
  private _synproxyTcpTimestamp?: string; 
  public get synproxyTcpTimestamp() {
    return this.getStringAttribute('synproxy_tcp_timestamp');
  }
  public set synproxyTcpTimestamp(value: string) {
    this._synproxyTcpTimestamp = value;
  }
  public resetSynproxyTcpTimestamp() {
    this._synproxyTcpTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synproxyTcpTimestampInput() {
    return this._synproxyTcpTimestamp;
  }

  // synproxy_tcp_window - computed: false, optional: true, required: false
  private _synproxyTcpWindow?: string; 
  public get synproxyTcpWindow() {
    return this.getStringAttribute('synproxy_tcp_window');
  }
  public set synproxyTcpWindow(value: string) {
    this._synproxyTcpWindow = value;
  }
  public resetSynproxyTcpWindow() {
    this._synproxyTcpWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synproxyTcpWindowInput() {
    return this._synproxyTcpWindow;
  }

  // synproxy_tcp_windowscale - computed: false, optional: true, required: false
  private _synproxyTcpWindowscale?: string; 
  public get synproxyTcpWindowscale() {
    return this.getStringAttribute('synproxy_tcp_windowscale');
  }
  public set synproxyTcpWindowscale(value: string) {
    this._synproxyTcpWindowscale = value;
  }
  public resetSynproxyTcpWindowscale() {
    this._synproxyTcpWindowscale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synproxyTcpWindowscaleInput() {
    return this._synproxyTcpWindowscale;
  }

  // synproxy_tos - computed: false, optional: true, required: false
  private _synproxyTos?: string; 
  public get synproxyTos() {
    return this.getStringAttribute('synproxy_tos');
  }
  public set synproxyTos(value: string) {
    this._synproxyTos = value;
  }
  public resetSynproxyTos() {
    this._synproxyTos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synproxyTosInput() {
    return this._synproxyTos;
  }

  // synproxy_ttl - computed: false, optional: true, required: false
  private _synproxyTtl?: string; 
  public get synproxyTtl() {
    return this.getStringAttribute('synproxy_ttl');
  }
  public set synproxyTtl(value: string) {
    this._synproxyTtl = value;
  }
  public resetSynproxyTtl() {
    this._synproxyTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synproxyTtlInput() {
    return this._synproxyTtl;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // thresholddefault - computed: false, optional: true, required: false
  private _thresholddefault?: number; 
  public get thresholddefault() {
    return this.getNumberAttribute('thresholddefault');
  }
  public set thresholddefault(value: number) {
    this._thresholddefault = value;
  }
  public resetThresholddefault() {
    this._thresholddefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholddefaultInput() {
    return this._thresholddefault;
  }
}

export class FirewallSnifferAnomalyList extends cdktf.ComplexList {
  public internalValue? : FirewallSnifferAnomaly[] | cdktf.IResolvable

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
  public get(index: number): FirewallSnifferAnomalyOutputReference {
    return new FirewallSnifferAnomalyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer fmgdevice_firewall_sniffer}
*/
export class FirewallSniffer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_firewall_sniffer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallSniffer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallSniffer to import
  * @param importFromId The id of the existing FirewallSniffer that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallSniffer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_firewall_sniffer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_sniffer fmgdevice_firewall_sniffer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallSnifferConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FirewallSnifferConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_firewall_sniffer',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationList = config.applicationList;
    this._applicationListStatus = config.applicationListStatus;
    this._avProfile = config.avProfile;
    this._avProfileStatus = config.avProfileStatus;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._dlpProfile = config.dlpProfile;
    this._dlpProfileStatus = config.dlpProfileStatus;
    this._dlpSensor = config.dlpSensor;
    this._dlpSensorStatus = config.dlpSensorStatus;
    this._dsri = config.dsri;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._emailfilterProfile = config.emailfilterProfile;
    this._emailfilterProfileStatus = config.emailfilterProfileStatus;
    this._fileFilterProfile = config.fileFilterProfile;
    this._fileFilterProfileStatus = config.fileFilterProfileStatus;
    this._fosid = config.fosid;
    this._host = config.host;
    this._id = config.id;
    this._interface = config.interface;
    this._ipThreatfeed = config.ipThreatfeed;
    this._ipThreatfeedStatus = config.ipThreatfeedStatus;
    this._ipsDosStatus = config.ipsDosStatus;
    this._ipsSensor = config.ipsSensor;
    this._ipsSensorStatus = config.ipsSensorStatus;
    this._ipv6 = config.ipv6;
    this._logtraffic = config.logtraffic;
    this._maxPacketCount = config.maxPacketCount;
    this._nonIp = config.nonIp;
    this._port = config.port;
    this._protocol = config.protocol;
    this._status = config.status;
    this._uuid = config.uuid;
    this._vlan = config.vlan;
    this._webfilterProfile = config.webfilterProfile;
    this._webfilterProfileStatus = config.webfilterProfileStatus;
    this._anomaly.internalValue = config.anomaly;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_list - computed: true, optional: true, required: false
  private _applicationList?: string[]; 
  public get applicationList() {
    return cdktf.Fn.tolist(this.getListAttribute('application_list'));
  }
  public set applicationList(value: string[]) {
    this._applicationList = value;
  }
  public resetApplicationList() {
    this._applicationList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationListInput() {
    return this._applicationList;
  }

  // application_list_status - computed: false, optional: true, required: false
  private _applicationListStatus?: string; 
  public get applicationListStatus() {
    return this.getStringAttribute('application_list_status');
  }
  public set applicationListStatus(value: string) {
    this._applicationListStatus = value;
  }
  public resetApplicationListStatus() {
    this._applicationListStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationListStatusInput() {
    return this._applicationListStatus;
  }

  // av_profile - computed: true, optional: true, required: false
  private _avProfile?: string[]; 
  public get avProfile() {
    return cdktf.Fn.tolist(this.getListAttribute('av_profile'));
  }
  public set avProfile(value: string[]) {
    this._avProfile = value;
  }
  public resetAvProfile() {
    this._avProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avProfileInput() {
    return this._avProfile;
  }

  // av_profile_status - computed: false, optional: true, required: false
  private _avProfileStatus?: string; 
  public get avProfileStatus() {
    return this.getStringAttribute('av_profile_status');
  }
  public set avProfileStatus(value: string) {
    this._avProfileStatus = value;
  }
  public resetAvProfileStatus() {
    this._avProfileStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avProfileStatusInput() {
    return this._avProfileStatus;
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

  // dlp_profile - computed: true, optional: true, required: false
  private _dlpProfile?: string[]; 
  public get dlpProfile() {
    return cdktf.Fn.tolist(this.getListAttribute('dlp_profile'));
  }
  public set dlpProfile(value: string[]) {
    this._dlpProfile = value;
  }
  public resetDlpProfile() {
    this._dlpProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpProfileInput() {
    return this._dlpProfile;
  }

  // dlp_profile_status - computed: false, optional: true, required: false
  private _dlpProfileStatus?: string; 
  public get dlpProfileStatus() {
    return this.getStringAttribute('dlp_profile_status');
  }
  public set dlpProfileStatus(value: string) {
    this._dlpProfileStatus = value;
  }
  public resetDlpProfileStatus() {
    this._dlpProfileStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpProfileStatusInput() {
    return this._dlpProfileStatus;
  }

  // dlp_sensor - computed: true, optional: true, required: false
  private _dlpSensor?: string[]; 
  public get dlpSensor() {
    return cdktf.Fn.tolist(this.getListAttribute('dlp_sensor'));
  }
  public set dlpSensor(value: string[]) {
    this._dlpSensor = value;
  }
  public resetDlpSensor() {
    this._dlpSensor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpSensorInput() {
    return this._dlpSensor;
  }

  // dlp_sensor_status - computed: true, optional: true, required: false
  private _dlpSensorStatus?: string; 
  public get dlpSensorStatus() {
    return this.getStringAttribute('dlp_sensor_status');
  }
  public set dlpSensorStatus(value: string) {
    this._dlpSensorStatus = value;
  }
  public resetDlpSensorStatus() {
    this._dlpSensorStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpSensorStatusInput() {
    return this._dlpSensorStatus;
  }

  // dsri - computed: true, optional: true, required: false
  private _dsri?: string; 
  public get dsri() {
    return this.getStringAttribute('dsri');
  }
  public set dsri(value: string) {
    this._dsri = value;
  }
  public resetDsri() {
    this._dsri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsriInput() {
    return this._dsri;
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

  // emailfilter_profile - computed: true, optional: true, required: false
  private _emailfilterProfile?: string[]; 
  public get emailfilterProfile() {
    return cdktf.Fn.tolist(this.getListAttribute('emailfilter_profile'));
  }
  public set emailfilterProfile(value: string[]) {
    this._emailfilterProfile = value;
  }
  public resetEmailfilterProfile() {
    this._emailfilterProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailfilterProfileInput() {
    return this._emailfilterProfile;
  }

  // emailfilter_profile_status - computed: false, optional: true, required: false
  private _emailfilterProfileStatus?: string; 
  public get emailfilterProfileStatus() {
    return this.getStringAttribute('emailfilter_profile_status');
  }
  public set emailfilterProfileStatus(value: string) {
    this._emailfilterProfileStatus = value;
  }
  public resetEmailfilterProfileStatus() {
    this._emailfilterProfileStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailfilterProfileStatusInput() {
    return this._emailfilterProfileStatus;
  }

  // file_filter_profile - computed: true, optional: true, required: false
  private _fileFilterProfile?: string[]; 
  public get fileFilterProfile() {
    return cdktf.Fn.tolist(this.getListAttribute('file_filter_profile'));
  }
  public set fileFilterProfile(value: string[]) {
    this._fileFilterProfile = value;
  }
  public resetFileFilterProfile() {
    this._fileFilterProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFilterProfileInput() {
    return this._fileFilterProfile;
  }

  // file_filter_profile_status - computed: false, optional: true, required: false
  private _fileFilterProfileStatus?: string; 
  public get fileFilterProfileStatus() {
    return this.getStringAttribute('file_filter_profile_status');
  }
  public set fileFilterProfileStatus(value: string) {
    this._fileFilterProfileStatus = value;
  }
  public resetFileFilterProfileStatus() {
    this._fileFilterProfileStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFilterProfileStatusInput() {
    return this._fileFilterProfileStatus;
  }

  // fosid - computed: true, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // interface - computed: true, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // ip_threatfeed - computed: true, optional: true, required: false
  private _ipThreatfeed?: string[]; 
  public get ipThreatfeed() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_threatfeed'));
  }
  public set ipThreatfeed(value: string[]) {
    this._ipThreatfeed = value;
  }
  public resetIpThreatfeed() {
    this._ipThreatfeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatfeedInput() {
    return this._ipThreatfeed;
  }

  // ip_threatfeed_status - computed: false, optional: true, required: false
  private _ipThreatfeedStatus?: string; 
  public get ipThreatfeedStatus() {
    return this.getStringAttribute('ip_threatfeed_status');
  }
  public set ipThreatfeedStatus(value: string) {
    this._ipThreatfeedStatus = value;
  }
  public resetIpThreatfeedStatus() {
    this._ipThreatfeedStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatfeedStatusInput() {
    return this._ipThreatfeedStatus;
  }

  // ips_dos_status - computed: false, optional: true, required: false
  private _ipsDosStatus?: string; 
  public get ipsDosStatus() {
    return this.getStringAttribute('ips_dos_status');
  }
  public set ipsDosStatus(value: string) {
    this._ipsDosStatus = value;
  }
  public resetIpsDosStatus() {
    this._ipsDosStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsDosStatusInput() {
    return this._ipsDosStatus;
  }

  // ips_sensor - computed: true, optional: true, required: false
  private _ipsSensor?: string[]; 
  public get ipsSensor() {
    return cdktf.Fn.tolist(this.getListAttribute('ips_sensor'));
  }
  public set ipsSensor(value: string[]) {
    this._ipsSensor = value;
  }
  public resetIpsSensor() {
    this._ipsSensor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsSensorInput() {
    return this._ipsSensor;
  }

  // ips_sensor_status - computed: false, optional: true, required: false
  private _ipsSensorStatus?: string; 
  public get ipsSensorStatus() {
    return this.getStringAttribute('ips_sensor_status');
  }
  public set ipsSensorStatus(value: string) {
    this._ipsSensorStatus = value;
  }
  public resetIpsSensorStatus() {
    this._ipsSensorStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsSensorStatusInput() {
    return this._ipsSensorStatus;
  }

  // ipv6 - computed: true, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // logtraffic - computed: true, optional: true, required: false
  private _logtraffic?: string; 
  public get logtraffic() {
    return this.getStringAttribute('logtraffic');
  }
  public set logtraffic(value: string) {
    this._logtraffic = value;
  }
  public resetLogtraffic() {
    this._logtraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logtrafficInput() {
    return this._logtraffic;
  }

  // max_packet_count - computed: true, optional: true, required: false
  private _maxPacketCount?: number; 
  public get maxPacketCount() {
    return this.getNumberAttribute('max_packet_count');
  }
  public set maxPacketCount(value: number) {
    this._maxPacketCount = value;
  }
  public resetMaxPacketCount() {
    this._maxPacketCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPacketCountInput() {
    return this._maxPacketCount;
  }

  // non_ip - computed: true, optional: true, required: false
  private _nonIp?: string; 
  public get nonIp() {
    return this.getStringAttribute('non_ip');
  }
  public set nonIp(value: string) {
    this._nonIp = value;
  }
  public resetNonIp() {
    this._nonIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonIpInput() {
    return this._nonIp;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // vlan - computed: false, optional: true, required: false
  private _vlan?: string; 
  public get vlan() {
    return this.getStringAttribute('vlan');
  }
  public set vlan(value: string) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // webfilter_profile - computed: true, optional: true, required: false
  private _webfilterProfile?: string[]; 
  public get webfilterProfile() {
    return cdktf.Fn.tolist(this.getListAttribute('webfilter_profile'));
  }
  public set webfilterProfile(value: string[]) {
    this._webfilterProfile = value;
  }
  public resetWebfilterProfile() {
    this._webfilterProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webfilterProfileInput() {
    return this._webfilterProfile;
  }

  // webfilter_profile_status - computed: false, optional: true, required: false
  private _webfilterProfileStatus?: string; 
  public get webfilterProfileStatus() {
    return this.getStringAttribute('webfilter_profile_status');
  }
  public set webfilterProfileStatus(value: string) {
    this._webfilterProfileStatus = value;
  }
  public resetWebfilterProfileStatus() {
    this._webfilterProfileStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webfilterProfileStatusInput() {
    return this._webfilterProfileStatus;
  }

  // anomaly - computed: false, optional: true, required: false
  private _anomaly = new FirewallSnifferAnomalyList(this, "anomaly", false);
  public get anomaly() {
    return this._anomaly;
  }
  public putAnomaly(value: FirewallSnifferAnomaly[] | cdktf.IResolvable) {
    this._anomaly.internalValue = value;
  }
  public resetAnomaly() {
    this._anomaly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anomalyInput() {
    return this._anomaly.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._applicationList),
      application_list_status: cdktf.stringToTerraform(this._applicationListStatus),
      av_profile: cdktf.listMapper(cdktf.stringToTerraform, false)(this._avProfile),
      av_profile_status: cdktf.stringToTerraform(this._avProfileStatus),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      dlp_profile: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dlpProfile),
      dlp_profile_status: cdktf.stringToTerraform(this._dlpProfileStatus),
      dlp_sensor: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dlpSensor),
      dlp_sensor_status: cdktf.stringToTerraform(this._dlpSensorStatus),
      dsri: cdktf.stringToTerraform(this._dsri),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      emailfilter_profile: cdktf.listMapper(cdktf.stringToTerraform, false)(this._emailfilterProfile),
      emailfilter_profile_status: cdktf.stringToTerraform(this._emailfilterProfileStatus),
      file_filter_profile: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fileFilterProfile),
      file_filter_profile_status: cdktf.stringToTerraform(this._fileFilterProfileStatus),
      fosid: cdktf.numberToTerraform(this._fosid),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interface),
      ip_threatfeed: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipThreatfeed),
      ip_threatfeed_status: cdktf.stringToTerraform(this._ipThreatfeedStatus),
      ips_dos_status: cdktf.stringToTerraform(this._ipsDosStatus),
      ips_sensor: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipsSensor),
      ips_sensor_status: cdktf.stringToTerraform(this._ipsSensorStatus),
      ipv6: cdktf.stringToTerraform(this._ipv6),
      logtraffic: cdktf.stringToTerraform(this._logtraffic),
      max_packet_count: cdktf.numberToTerraform(this._maxPacketCount),
      non_ip: cdktf.stringToTerraform(this._nonIp),
      port: cdktf.stringToTerraform(this._port),
      protocol: cdktf.stringToTerraform(this._protocol),
      status: cdktf.stringToTerraform(this._status),
      uuid: cdktf.stringToTerraform(this._uuid),
      vlan: cdktf.stringToTerraform(this._vlan),
      webfilter_profile: cdktf.listMapper(cdktf.stringToTerraform, false)(this._webfilterProfile),
      webfilter_profile_status: cdktf.stringToTerraform(this._webfilterProfileStatus),
      anomaly: cdktf.listMapper(firewallSnifferAnomalyToTerraform, true)(this._anomaly.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._applicationList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      application_list_status: {
        value: cdktf.stringToHclTerraform(this._applicationListStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      av_profile: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._avProfile),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      av_profile_status: {
        value: cdktf.stringToHclTerraform(this._avProfileStatus),
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
      dlp_profile: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dlpProfile),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dlp_profile_status: {
        value: cdktf.stringToHclTerraform(this._dlpProfileStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dlp_sensor: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dlpSensor),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dlp_sensor_status: {
        value: cdktf.stringToHclTerraform(this._dlpSensorStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dsri: {
        value: cdktf.stringToHclTerraform(this._dsri),
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
      emailfilter_profile: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._emailfilterProfile),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      emailfilter_profile_status: {
        value: cdktf.stringToHclTerraform(this._emailfilterProfileStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_filter_profile: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fileFilterProfile),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      file_filter_profile_status: {
        value: cdktf.stringToHclTerraform(this._fileFilterProfileStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ip_threatfeed: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipThreatfeed),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ip_threatfeed_status: {
        value: cdktf.stringToHclTerraform(this._ipThreatfeedStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ips_dos_status: {
        value: cdktf.stringToHclTerraform(this._ipsDosStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ips_sensor: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipsSensor),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ips_sensor_status: {
        value: cdktf.stringToHclTerraform(this._ipsSensorStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6: {
        value: cdktf.stringToHclTerraform(this._ipv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logtraffic: {
        value: cdktf.stringToHclTerraform(this._logtraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_packet_count: {
        value: cdktf.numberToHclTerraform(this._maxPacketCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      non_ip: {
        value: cdktf.stringToHclTerraform(this._nonIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
      vlan: {
        value: cdktf.stringToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webfilter_profile: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._webfilterProfile),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      webfilter_profile_status: {
        value: cdktf.stringToHclTerraform(this._webfilterProfileStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      anomaly: {
        value: cdktf.listMapperHcl(firewallSnifferAnomalyToHclTerraform, true)(this._anomaly.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallSnifferAnomalyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
