// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallSnifferConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#application_list FirewallSniffer#application_list}
  */
  readonly applicationList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#application_list_status FirewallSniffer#application_list_status}
  */
  readonly applicationListStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#av_profile FirewallSniffer#av_profile}
  */
  readonly avProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#av_profile_status FirewallSniffer#av_profile_status}
  */
  readonly avProfileStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#casb_profile FirewallSniffer#casb_profile}
  */
  readonly casbProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#casb_profile_status FirewallSniffer#casb_profile_status}
  */
  readonly casbProfileStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#dlp_profile FirewallSniffer#dlp_profile}
  */
  readonly dlpProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#dlp_profile_status FirewallSniffer#dlp_profile_status}
  */
  readonly dlpProfileStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#dlp_sensor FirewallSniffer#dlp_sensor}
  */
  readonly dlpSensor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#dlp_sensor_status FirewallSniffer#dlp_sensor_status}
  */
  readonly dlpSensorStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#dsri FirewallSniffer#dsri}
  */
  readonly dsri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#dynamic_sort_subtable FirewallSniffer#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#emailfilter_profile FirewallSniffer#emailfilter_profile}
  */
  readonly emailfilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#emailfilter_profile_status FirewallSniffer#emailfilter_profile_status}
  */
  readonly emailfilterProfileStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#file_filter_profile FirewallSniffer#file_filter_profile}
  */
  readonly fileFilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#file_filter_profile_status FirewallSniffer#file_filter_profile_status}
  */
  readonly fileFilterProfileStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#fosid FirewallSniffer#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#get_all_tables FirewallSniffer#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#host FirewallSniffer#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#id FirewallSniffer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#interface FirewallSniffer#interface}
  */
  readonly interface: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#ip_threatfeed_status FirewallSniffer#ip_threatfeed_status}
  */
  readonly ipThreatfeedStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#ips_dos_status FirewallSniffer#ips_dos_status}
  */
  readonly ipsDosStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#ips_sensor FirewallSniffer#ips_sensor}
  */
  readonly ipsSensor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#ips_sensor_status FirewallSniffer#ips_sensor_status}
  */
  readonly ipsSensorStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#ipv6 FirewallSniffer#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#logtraffic FirewallSniffer#logtraffic}
  */
  readonly logtraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#max_packet_count FirewallSniffer#max_packet_count}
  */
  readonly maxPacketCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#non_ip FirewallSniffer#non_ip}
  */
  readonly nonIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#port FirewallSniffer#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#protocol FirewallSniffer#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#scan_botnet_connections FirewallSniffer#scan_botnet_connections}
  */
  readonly scanBotnetConnections?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#spamfilter_profile FirewallSniffer#spamfilter_profile}
  */
  readonly spamfilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#spamfilter_profile_status FirewallSniffer#spamfilter_profile_status}
  */
  readonly spamfilterProfileStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#status FirewallSniffer#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#uuid FirewallSniffer#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#vdomparam FirewallSniffer#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#vlan FirewallSniffer#vlan}
  */
  readonly vlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#webfilter_profile FirewallSniffer#webfilter_profile}
  */
  readonly webfilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#webfilter_profile_status FirewallSniffer#webfilter_profile_status}
  */
  readonly webfilterProfileStatus?: string;
  /**
  * anomaly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#anomaly FirewallSniffer#anomaly}
  */
  readonly anomaly?: FirewallSnifferAnomaly[] | cdktf.IResolvable;
  /**
  * ip_threatfeed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#ip_threatfeed FirewallSniffer#ip_threatfeed}
  */
  readonly ipThreatfeed?: FirewallSnifferIpThreatfeed[] | cdktf.IResolvable;
}
export interface FirewallSnifferAnomaly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#action FirewallSniffer#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#log FirewallSniffer#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#name FirewallSniffer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#quarantine FirewallSniffer#quarantine}
  */
  readonly quarantine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#quarantine_expiry FirewallSniffer#quarantine_expiry}
  */
  readonly quarantineExpiry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#quarantine_log FirewallSniffer#quarantine_log}
  */
  readonly quarantineLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#status FirewallSniffer#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#threshold FirewallSniffer#threshold}
  */
  readonly threshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#thresholddefault FirewallSniffer#thresholddefault}
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
      this._threshold = value.threshold;
      this._thresholddefault = value.thresholddefault;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // log - computed: true, optional: true, required: false
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

  // quarantine - computed: true, optional: true, required: false
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

  // quarantine_expiry - computed: true, optional: true, required: false
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

  // quarantine_log - computed: true, optional: true, required: false
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
export interface FirewallSnifferIpThreatfeed {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#name FirewallSniffer#name}
  */
  readonly name?: string;
}

export function firewallSnifferIpThreatfeedToTerraform(struct?: FirewallSnifferIpThreatfeed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallSnifferIpThreatfeedToHclTerraform(struct?: FirewallSnifferIpThreatfeed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallSnifferIpThreatfeedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallSnifferIpThreatfeed | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallSnifferIpThreatfeed | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class FirewallSnifferIpThreatfeedList extends cdktf.ComplexList {
  public internalValue? : FirewallSnifferIpThreatfeed[] | cdktf.IResolvable

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
  public get(index: number): FirewallSnifferIpThreatfeedOutputReference {
    return new FirewallSnifferIpThreatfeedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer fortios_firewall_sniffer}
*/
export class FirewallSniffer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_firewall_sniffer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallSniffer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallSniffer to import
  * @param importFromId The id of the existing FirewallSniffer that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallSniffer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_firewall_sniffer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_sniffer fortios_firewall_sniffer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallSnifferConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallSnifferConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_firewall_sniffer',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
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
    this._casbProfile = config.casbProfile;
    this._casbProfileStatus = config.casbProfileStatus;
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
    this._getAllTables = config.fetchAllTables;
    this._host = config.host;
    this._id = config.id;
    this._interface = config.interface;
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
    this._scanBotnetConnections = config.scanBotnetConnections;
    this._spamfilterProfile = config.spamfilterProfile;
    this._spamfilterProfileStatus = config.spamfilterProfileStatus;
    this._status = config.status;
    this._uuid = config.uuid;
    this._vdomparam = config.vdomparam;
    this._vlan = config.vlan;
    this._webfilterProfile = config.webfilterProfile;
    this._webfilterProfileStatus = config.webfilterProfileStatus;
    this._anomaly.internalValue = config.anomaly;
    this._ipThreatfeed.internalValue = config.ipThreatfeed;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_list - computed: false, optional: true, required: false
  private _applicationList?: string; 
  public get applicationList() {
    return this.getStringAttribute('application_list');
  }
  public set applicationList(value: string) {
    this._applicationList = value;
  }
  public resetApplicationList() {
    this._applicationList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationListInput() {
    return this._applicationList;
  }

  // application_list_status - computed: true, optional: true, required: false
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

  // av_profile - computed: false, optional: true, required: false
  private _avProfile?: string; 
  public get avProfile() {
    return this.getStringAttribute('av_profile');
  }
  public set avProfile(value: string) {
    this._avProfile = value;
  }
  public resetAvProfile() {
    this._avProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avProfileInput() {
    return this._avProfile;
  }

  // av_profile_status - computed: true, optional: true, required: false
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

  // casb_profile - computed: false, optional: true, required: false
  private _casbProfile?: string; 
  public get casbProfile() {
    return this.getStringAttribute('casb_profile');
  }
  public set casbProfile(value: string) {
    this._casbProfile = value;
  }
  public resetCasbProfile() {
    this._casbProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get casbProfileInput() {
    return this._casbProfile;
  }

  // casb_profile_status - computed: true, optional: true, required: false
  private _casbProfileStatus?: string; 
  public get casbProfileStatus() {
    return this.getStringAttribute('casb_profile_status');
  }
  public set casbProfileStatus(value: string) {
    this._casbProfileStatus = value;
  }
  public resetCasbProfileStatus() {
    this._casbProfileStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get casbProfileStatusInput() {
    return this._casbProfileStatus;
  }

  // dlp_profile - computed: false, optional: true, required: false
  private _dlpProfile?: string; 
  public get dlpProfile() {
    return this.getStringAttribute('dlp_profile');
  }
  public set dlpProfile(value: string) {
    this._dlpProfile = value;
  }
  public resetDlpProfile() {
    this._dlpProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpProfileInput() {
    return this._dlpProfile;
  }

  // dlp_profile_status - computed: true, optional: true, required: false
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

  // dlp_sensor - computed: false, optional: true, required: false
  private _dlpSensor?: string; 
  public get dlpSensor() {
    return this.getStringAttribute('dlp_sensor');
  }
  public set dlpSensor(value: string) {
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

  // emailfilter_profile - computed: false, optional: true, required: false
  private _emailfilterProfile?: string; 
  public get emailfilterProfile() {
    return this.getStringAttribute('emailfilter_profile');
  }
  public set emailfilterProfile(value: string) {
    this._emailfilterProfile = value;
  }
  public resetEmailfilterProfile() {
    this._emailfilterProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailfilterProfileInput() {
    return this._emailfilterProfile;
  }

  // emailfilter_profile_status - computed: true, optional: true, required: false
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

  // file_filter_profile - computed: false, optional: true, required: false
  private _fileFilterProfile?: string; 
  public get fileFilterProfile() {
    return this.getStringAttribute('file_filter_profile');
  }
  public set fileFilterProfile(value: string) {
    this._fileFilterProfile = value;
  }
  public resetFileFilterProfile() {
    this._fileFilterProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFilterProfileInput() {
    return this._fileFilterProfile;
  }

  // file_filter_profile_status - computed: true, optional: true, required: false
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

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // interface - computed: false, optional: false, required: true
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // ip_threatfeed_status - computed: true, optional: true, required: false
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

  // ips_dos_status - computed: true, optional: true, required: false
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

  // ips_sensor - computed: false, optional: true, required: false
  private _ipsSensor?: string; 
  public get ipsSensor() {
    return this.getStringAttribute('ips_sensor');
  }
  public set ipsSensor(value: string) {
    this._ipsSensor = value;
  }
  public resetIpsSensor() {
    this._ipsSensor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsSensorInput() {
    return this._ipsSensor;
  }

  // ips_sensor_status - computed: true, optional: true, required: false
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

  // scan_botnet_connections - computed: false, optional: true, required: false
  private _scanBotnetConnections?: string; 
  public get scanBotnetConnections() {
    return this.getStringAttribute('scan_botnet_connections');
  }
  public set scanBotnetConnections(value: string) {
    this._scanBotnetConnections = value;
  }
  public resetScanBotnetConnections() {
    this._scanBotnetConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanBotnetConnectionsInput() {
    return this._scanBotnetConnections;
  }

  // spamfilter_profile - computed: false, optional: true, required: false
  private _spamfilterProfile?: string; 
  public get spamfilterProfile() {
    return this.getStringAttribute('spamfilter_profile');
  }
  public set spamfilterProfile(value: string) {
    this._spamfilterProfile = value;
  }
  public resetSpamfilterProfile() {
    this._spamfilterProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spamfilterProfileInput() {
    return this._spamfilterProfile;
  }

  // spamfilter_profile_status - computed: false, optional: true, required: false
  private _spamfilterProfileStatus?: string; 
  public get spamfilterProfileStatus() {
    return this.getStringAttribute('spamfilter_profile_status');
  }
  public set spamfilterProfileStatus(value: string) {
    this._spamfilterProfileStatus = value;
  }
  public resetSpamfilterProfileStatus() {
    this._spamfilterProfileStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spamfilterProfileStatusInput() {
    return this._spamfilterProfileStatus;
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

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
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

  // webfilter_profile - computed: false, optional: true, required: false
  private _webfilterProfile?: string; 
  public get webfilterProfile() {
    return this.getStringAttribute('webfilter_profile');
  }
  public set webfilterProfile(value: string) {
    this._webfilterProfile = value;
  }
  public resetWebfilterProfile() {
    this._webfilterProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webfilterProfileInput() {
    return this._webfilterProfile;
  }

  // webfilter_profile_status - computed: true, optional: true, required: false
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

  // ip_threatfeed - computed: false, optional: true, required: false
  private _ipThreatfeed = new FirewallSnifferIpThreatfeedList(this, "ip_threatfeed", true);
  public get ipThreatfeed() {
    return this._ipThreatfeed;
  }
  public putIpThreatfeed(value: FirewallSnifferIpThreatfeed[] | cdktf.IResolvable) {
    this._ipThreatfeed.internalValue = value;
  }
  public resetIpThreatfeed() {
    this._ipThreatfeed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatfeedInput() {
    return this._ipThreatfeed.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_list: cdktf.stringToTerraform(this._applicationList),
      application_list_status: cdktf.stringToTerraform(this._applicationListStatus),
      av_profile: cdktf.stringToTerraform(this._avProfile),
      av_profile_status: cdktf.stringToTerraform(this._avProfileStatus),
      casb_profile: cdktf.stringToTerraform(this._casbProfile),
      casb_profile_status: cdktf.stringToTerraform(this._casbProfileStatus),
      dlp_profile: cdktf.stringToTerraform(this._dlpProfile),
      dlp_profile_status: cdktf.stringToTerraform(this._dlpProfileStatus),
      dlp_sensor: cdktf.stringToTerraform(this._dlpSensor),
      dlp_sensor_status: cdktf.stringToTerraform(this._dlpSensorStatus),
      dsri: cdktf.stringToTerraform(this._dsri),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      emailfilter_profile: cdktf.stringToTerraform(this._emailfilterProfile),
      emailfilter_profile_status: cdktf.stringToTerraform(this._emailfilterProfileStatus),
      file_filter_profile: cdktf.stringToTerraform(this._fileFilterProfile),
      file_filter_profile_status: cdktf.stringToTerraform(this._fileFilterProfileStatus),
      fosid: cdktf.numberToTerraform(this._fosid),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      ip_threatfeed_status: cdktf.stringToTerraform(this._ipThreatfeedStatus),
      ips_dos_status: cdktf.stringToTerraform(this._ipsDosStatus),
      ips_sensor: cdktf.stringToTerraform(this._ipsSensor),
      ips_sensor_status: cdktf.stringToTerraform(this._ipsSensorStatus),
      ipv6: cdktf.stringToTerraform(this._ipv6),
      logtraffic: cdktf.stringToTerraform(this._logtraffic),
      max_packet_count: cdktf.numberToTerraform(this._maxPacketCount),
      non_ip: cdktf.stringToTerraform(this._nonIp),
      port: cdktf.stringToTerraform(this._port),
      protocol: cdktf.stringToTerraform(this._protocol),
      scan_botnet_connections: cdktf.stringToTerraform(this._scanBotnetConnections),
      spamfilter_profile: cdktf.stringToTerraform(this._spamfilterProfile),
      spamfilter_profile_status: cdktf.stringToTerraform(this._spamfilterProfileStatus),
      status: cdktf.stringToTerraform(this._status),
      uuid: cdktf.stringToTerraform(this._uuid),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      vlan: cdktf.stringToTerraform(this._vlan),
      webfilter_profile: cdktf.stringToTerraform(this._webfilterProfile),
      webfilter_profile_status: cdktf.stringToTerraform(this._webfilterProfileStatus),
      anomaly: cdktf.listMapper(firewallSnifferAnomalyToTerraform, true)(this._anomaly.internalValue),
      ip_threatfeed: cdktf.listMapper(firewallSnifferIpThreatfeedToTerraform, true)(this._ipThreatfeed.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_list: {
        value: cdktf.stringToHclTerraform(this._applicationList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_list_status: {
        value: cdktf.stringToHclTerraform(this._applicationListStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      av_profile: {
        value: cdktf.stringToHclTerraform(this._avProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      av_profile_status: {
        value: cdktf.stringToHclTerraform(this._avProfileStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      casb_profile: {
        value: cdktf.stringToHclTerraform(this._casbProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      casb_profile_status: {
        value: cdktf.stringToHclTerraform(this._casbProfileStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dlp_profile: {
        value: cdktf.stringToHclTerraform(this._dlpProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dlp_profile_status: {
        value: cdktf.stringToHclTerraform(this._dlpProfileStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dlp_sensor: {
        value: cdktf.stringToHclTerraform(this._dlpSensor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
        value: cdktf.stringToHclTerraform(this._emailfilterProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      emailfilter_profile_status: {
        value: cdktf.stringToHclTerraform(this._emailfilterProfileStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_filter_profile: {
        value: cdktf.stringToHclTerraform(this._fileFilterProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
        value: cdktf.stringToHclTerraform(this._ipsSensor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      scan_botnet_connections: {
        value: cdktf.stringToHclTerraform(this._scanBotnetConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spamfilter_profile: {
        value: cdktf.stringToHclTerraform(this._spamfilterProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spamfilter_profile_status: {
        value: cdktf.stringToHclTerraform(this._spamfilterProfileStatus),
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
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
        value: cdktf.stringToHclTerraform(this._webfilterProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      ip_threatfeed: {
        value: cdktf.listMapperHcl(firewallSnifferIpThreatfeedToHclTerraform, true)(this._ipThreatfeed.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallSnifferIpThreatfeedList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
