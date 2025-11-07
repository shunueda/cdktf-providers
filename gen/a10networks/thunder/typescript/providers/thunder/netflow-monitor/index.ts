// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetflowMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure the interval to export global counters (Number of seconds: default is 60)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#counter_polling_interval NetflowMonitor#counter_polling_interval}
  */
  readonly counterPollingInterval?: number;
  /**
  * Disable this netflow monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#disable NetflowMonitor#disable}
  */
  readonly disable?: number;
  /**
  * Configure timeout value to export flow records periodically for long-live session ( Number of minutes: default is 10, 0 means only send flow record when session is deleted)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#flow_timeout NetflowMonitor#flow_timeout}
  */
  readonly flowTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#id NetflowMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of netflow monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#name NetflowMonitor#name}
  */
  readonly name: string;
  /**
  * Name of the packet capture template to be bind with this object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#packet_capture_template NetflowMonitor#packet_capture_template}
  */
  readonly packetCaptureTemplate?: string;
  /**
  * 'v9': Netflow version 9; 'v10': Netflow version 10 (IPFIX);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#protocol NetflowMonitor#protocol}
  */
  readonly protocol?: string;
  /**
  * 'global': Netflow monitor is activated globally (Default); 'firewall-rule': Netflow monitor is only activated when referenced by a firewall rule;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#scope NetflowMonitor#scope}
  */
  readonly scope?: string;
  /**
  * Use management interface's IP address for source ip of netflow packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#source_ip_use_mgmt NetflowMonitor#source_ip_use_mgmt}
  */
  readonly sourceIpUseMgmt?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#user_tag NetflowMonitor#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#uuid NetflowMonitor#uuid}
  */
  readonly uuid?: string;
  /**
  * custom_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#custom_record NetflowMonitor#custom_record}
  */
  readonly customRecord?: NetflowMonitorCustomRecord;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#destination NetflowMonitor#destination}
  */
  readonly destination?: NetflowMonitorDestination;
  /**
  * disable_log_by_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#disable_log_by_destination NetflowMonitor#disable_log_by_destination}
  */
  readonly disableLogByDestination?: NetflowMonitorDisableLogByDestination;
  /**
  * record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#record NetflowMonitor#record}
  */
  readonly record?: NetflowMonitorRecord;
  /**
  * resend_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#resend_template NetflowMonitor#resend_template}
  */
  readonly resendTemplate?: NetflowMonitorResendTemplate;
  /**
  * sample block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#sample NetflowMonitor#sample}
  */
  readonly sample?: NetflowMonitorSample;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#sampling_enable NetflowMonitor#sampling_enable}
  */
  readonly samplingEnable?: NetflowMonitorSamplingEnable[] | cdktf.IResolvable;
  /**
  * source_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#source_address NetflowMonitor#source_address}
  */
  readonly sourceAddress?: NetflowMonitorSourceAddress;
}
export interface NetflowMonitorCustomRecordCustomCfg {
  /**
  * 'sesn-event-nat44-creation': Export NAT44 session creation events; 'sesn-event-nat44-deletion': Export NAT44 session deletion events; 'sesn-event-nat64-creation': Export NAT64 session creation events; 'sesn-event-nat64-deletion': Export NAT64 session deletion events; 'sesn-event-dslite-creation': Export Dslite session creation events; 'sesn-event-dslite-deletion': Export Dslite session deletion events; 'sesn-event-fw4-creation': Export FW4 session creation events; 'sesn-event-fw4-deletion': Export FW4 session deletion events; 'sesn-event-fw6-creation': Export FW6 session creation events; 'sesn-event-fw6-deletion': Export FW6 session deletion events; 'deny-reset-event-fw4': Export FW4 Deny Reset events; 'deny-reset-event-fw6': Export FW6 Deny Reset events; 'port-mapping-nat44-creation': Export NAT44 Port Mapping Creation Event; 'port-mapping-nat44-deletion': Export NAT44 Port Mapping Deletion Event; 'port-mapping-nat64-creation': Export NAT64 Port Mapping Creation Event; 'port-mapping-nat64-deletion': Export NAT64 Port Mapping Deletion Event; 'port-mapping-dslite-creation': Export Dslite Port Mapping Creation Event; 'port-mapping-dslite-deletion': Export Dslite Port Mapping Deletion Event; 'port-batch-nat44-creation': Export NAT44 Port Batch Creation Event; 'port-batch-nat44-deletion': Export NAT44 Port Batch Deletion Event; 'port-batch-nat64-creation': Export NAT64 Port Batch Creation Event; 'port-batch-nat64-deletion': Export NAT64 Port Batch Deletion Event; 'port-batch-dslite-creation': Export Dslite Port Batch Creation Event; 'port-batch-dslite-deletion': Export Dslite Port Batch Deletion Event; 'port-batch-v2-nat44-creation': Export NAT44 Port Batch v2 Creation Event; 'port-batch-v2-nat44-deletion': Export NAT44 Port Batch v2 Deletion Event; 'port-batch-v2-nat64-creation': Export NAT64 Port Batch v2 Creation Event; 'port-batch-v2-nat64-deletion': Export NAT64 Port Batch v2 Deletion Event; 'port-batch-v2-dslite-creation': Export Dslite Port Batch v2 Creation Event; 'port-batch-v2-dslite-deletion': Export Dslite Port Batch v2 Deletion Event; 'gtp-c-tunnel-event': Export GTP Control Tunnel Creation or Deletion Events; 'gtp-u-tunnel-event': Export GTP User Tunnel Creation or Deletion Events; 'gtp-deny-event': Export GTP Deny events on GTP C/U Tunnels; 'gtp-info-event': Export GTP Info events on GTP C/U Tunnels; 'fw-ddos-entry-creation': Export FW iDDoS Entry Created Record; 'fw-ddos-entry-deletion': Export FW iDDoS Entry Deleted Record; 'fw-session-limit-exceeded': Export FW Session Limit Exceeded Record; 'cgn-ddos-l3-entry-creation': Export CGN iDDoS L3 Entry Creation; 'cgn-ddos-l3-entry-deletion': Export CGN iDDoS L3 Entry Deletion; 'cgn-ddos-l4-entry-creation': Export CGN iDDoS L4 Entry Creation; 'cgn-ddos-l4-entry-deletion': Export CGN iDDoS L4 Entry Deletion; 'gtp-rate-limit-periodic': Export GTP Rate Limit Periodic;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#event NetflowMonitor#event}
  */
  readonly event?: string;
  /**
  * Custom IPFIX Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#ipfix_template NetflowMonitor#ipfix_template}
  */
  readonly ipfixTemplate?: string;
}

export function netflowMonitorCustomRecordCustomCfgToTerraform(struct?: NetflowMonitorCustomRecordCustomCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event: cdktf.stringToTerraform(struct!.event),
    ipfix_template: cdktf.stringToTerraform(struct!.ipfixTemplate),
  }
}


export function netflowMonitorCustomRecordCustomCfgToHclTerraform(struct?: NetflowMonitorCustomRecordCustomCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event: {
      value: cdktf.stringToHclTerraform(struct!.event),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipfix_template: {
      value: cdktf.stringToHclTerraform(struct!.ipfixTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetflowMonitorCustomRecordCustomCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetflowMonitorCustomRecordCustomCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._event !== undefined) {
      hasAnyValues = true;
      internalValueResult.event = this._event;
    }
    if (this._ipfixTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipfixTemplate = this._ipfixTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetflowMonitorCustomRecordCustomCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._event = undefined;
      this._ipfixTemplate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._event = value.event;
      this._ipfixTemplate = value.ipfixTemplate;
    }
  }

  // event - computed: false, optional: true, required: false
  private _event?: string; 
  public get event() {
    return this.getStringAttribute('event');
  }
  public set event(value: string) {
    this._event = value;
  }
  public resetEvent() {
    this._event = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event;
  }

  // ipfix_template - computed: false, optional: true, required: false
  private _ipfixTemplate?: string; 
  public get ipfixTemplate() {
    return this.getStringAttribute('ipfix_template');
  }
  public set ipfixTemplate(value: string) {
    this._ipfixTemplate = value;
  }
  public resetIpfixTemplate() {
    this._ipfixTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipfixTemplateInput() {
    return this._ipfixTemplate;
  }
}

export class NetflowMonitorCustomRecordCustomCfgList extends cdktf.ComplexList {
  public internalValue? : NetflowMonitorCustomRecordCustomCfg[] | cdktf.IResolvable

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
  public get(index: number): NetflowMonitorCustomRecordCustomCfgOutputReference {
    return new NetflowMonitorCustomRecordCustomCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetflowMonitorCustomRecord {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#uuid NetflowMonitor#uuid}
  */
  readonly uuid?: string;
  /**
  * custom_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#custom_cfg NetflowMonitor#custom_cfg}
  */
  readonly customCfg?: NetflowMonitorCustomRecordCustomCfg[] | cdktf.IResolvable;
}

export function netflowMonitorCustomRecordToTerraform(struct?: NetflowMonitorCustomRecordOutputReference | NetflowMonitorCustomRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    custom_cfg: cdktf.listMapper(netflowMonitorCustomRecordCustomCfgToTerraform, true)(struct!.customCfg),
  }
}


export function netflowMonitorCustomRecordToHclTerraform(struct?: NetflowMonitorCustomRecordOutputReference | NetflowMonitorCustomRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_cfg: {
      value: cdktf.listMapperHcl(netflowMonitorCustomRecordCustomCfgToHclTerraform, true)(struct!.customCfg),
      isBlock: true,
      type: "list",
      storageClassType: "NetflowMonitorCustomRecordCustomCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetflowMonitorCustomRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetflowMonitorCustomRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._customCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customCfg = this._customCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetflowMonitorCustomRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._customCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._customCfg.internalValue = value.customCfg;
    }
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

  // custom_cfg - computed: false, optional: true, required: false
  private _customCfg = new NetflowMonitorCustomRecordCustomCfgList(this, "custom_cfg", false);
  public get customCfg() {
    return this._customCfg;
  }
  public putCustomCfg(value: NetflowMonitorCustomRecordCustomCfg[] | cdktf.IResolvable) {
    this._customCfg.internalValue = value;
  }
  public resetCustomCfg() {
    this._customCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCfgInput() {
    return this._customCfg.internalValue;
  }
}
export interface NetflowMonitorDestinationIpCfg {
  /**
  * IP address of netflow collector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#ip NetflowMonitor#ip}
  */
  readonly ip?: string;
  /**
  * Port number, default is 9996
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#port4 NetflowMonitor#port4}
  */
  readonly port4?: number;
}

export function netflowMonitorDestinationIpCfgToTerraform(struct?: NetflowMonitorDestinationIpCfgOutputReference | NetflowMonitorDestinationIpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    port4: cdktf.numberToTerraform(struct!.port4),
  }
}


export function netflowMonitorDestinationIpCfgToHclTerraform(struct?: NetflowMonitorDestinationIpCfgOutputReference | NetflowMonitorDestinationIpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port4: {
      value: cdktf.numberToHclTerraform(struct!.port4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetflowMonitorDestinationIpCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetflowMonitorDestinationIpCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._port4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.port4 = this._port4;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetflowMonitorDestinationIpCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._port4 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._port4 = value.port4;
    }
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // port4 - computed: false, optional: true, required: false
  private _port4?: number; 
  public get port4() {
    return this.getNumberAttribute('port4');
  }
  public set port4(value: number) {
    this._port4 = value;
  }
  public resetPort4() {
    this._port4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port4Input() {
    return this._port4;
  }
}
export interface NetflowMonitorDestinationIpv6Cfg {
  /**
  * IPv6 address of netflow collector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#ipv6 NetflowMonitor#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Port number, default is 9996
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#port6 NetflowMonitor#port6}
  */
  readonly port6?: number;
}

export function netflowMonitorDestinationIpv6CfgToTerraform(struct?: NetflowMonitorDestinationIpv6CfgOutputReference | NetflowMonitorDestinationIpv6Cfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    port6: cdktf.numberToTerraform(struct!.port6),
  }
}


export function netflowMonitorDestinationIpv6CfgToHclTerraform(struct?: NetflowMonitorDestinationIpv6CfgOutputReference | NetflowMonitorDestinationIpv6Cfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port6: {
      value: cdktf.numberToHclTerraform(struct!.port6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetflowMonitorDestinationIpv6CfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetflowMonitorDestinationIpv6Cfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._port6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.port6 = this._port6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetflowMonitorDestinationIpv6Cfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv6 = undefined;
      this._port6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv6 = value.ipv6;
      this._port6 = value.port6;
    }
  }

  // ipv6 - computed: false, optional: true, required: false
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

  // port6 - computed: false, optional: true, required: false
  private _port6?: number; 
  public get port6() {
    return this.getNumberAttribute('port6');
  }
  public set port6(value: number) {
    this._port6 = value;
  }
  public resetPort6() {
    this._port6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port6Input() {
    return this._port6;
  }
}
export interface NetflowMonitorDestination {
  /**
  * Service-group for load balancing between multiple collector servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#service_group NetflowMonitor#service_group}
  */
  readonly serviceGroup?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#uuid NetflowMonitor#uuid}
  */
  readonly uuid?: string;
  /**
  * ip_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#ip_cfg NetflowMonitor#ip_cfg}
  */
  readonly ipCfg?: NetflowMonitorDestinationIpCfg;
  /**
  * ipv6_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#ipv6_cfg NetflowMonitor#ipv6_cfg}
  */
  readonly ipv6Cfg?: NetflowMonitorDestinationIpv6Cfg;
}

export function netflowMonitorDestinationToTerraform(struct?: NetflowMonitorDestinationOutputReference | NetflowMonitorDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_group: cdktf.stringToTerraform(struct!.serviceGroup),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    ip_cfg: netflowMonitorDestinationIpCfgToTerraform(struct!.ipCfg),
    ipv6_cfg: netflowMonitorDestinationIpv6CfgToTerraform(struct!.ipv6Cfg),
  }
}


export function netflowMonitorDestinationToHclTerraform(struct?: NetflowMonitorDestinationOutputReference | NetflowMonitorDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_group: {
      value: cdktf.stringToHclTerraform(struct!.serviceGroup),
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
    ip_cfg: {
      value: netflowMonitorDestinationIpCfgToHclTerraform(struct!.ipCfg),
      isBlock: true,
      type: "list",
      storageClassType: "NetflowMonitorDestinationIpCfgList",
    },
    ipv6_cfg: {
      value: netflowMonitorDestinationIpv6CfgToHclTerraform(struct!.ipv6Cfg),
      isBlock: true,
      type: "list",
      storageClassType: "NetflowMonitorDestinationIpv6CfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetflowMonitorDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetflowMonitorDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceGroup = this._serviceGroup;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._ipCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipCfg = this._ipCfg?.internalValue;
    }
    if (this._ipv6Cfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Cfg = this._ipv6Cfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetflowMonitorDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceGroup = undefined;
      this._uuid = undefined;
      this._ipCfg.internalValue = undefined;
      this._ipv6Cfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceGroup = value.serviceGroup;
      this._uuid = value.uuid;
      this._ipCfg.internalValue = value.ipCfg;
      this._ipv6Cfg.internalValue = value.ipv6Cfg;
    }
  }

  // service_group - computed: false, optional: true, required: false
  private _serviceGroup?: string; 
  public get serviceGroup() {
    return this.getStringAttribute('service_group');
  }
  public set serviceGroup(value: string) {
    this._serviceGroup = value;
  }
  public resetServiceGroup() {
    this._serviceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupInput() {
    return this._serviceGroup;
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

  // ip_cfg - computed: false, optional: true, required: false
  private _ipCfg = new NetflowMonitorDestinationIpCfgOutputReference(this, "ip_cfg");
  public get ipCfg() {
    return this._ipCfg;
  }
  public putIpCfg(value: NetflowMonitorDestinationIpCfg) {
    this._ipCfg.internalValue = value;
  }
  public resetIpCfg() {
    this._ipCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipCfgInput() {
    return this._ipCfg.internalValue;
  }

  // ipv6_cfg - computed: false, optional: true, required: false
  private _ipv6Cfg = new NetflowMonitorDestinationIpv6CfgOutputReference(this, "ipv6_cfg");
  public get ipv6Cfg() {
    return this._ipv6Cfg;
  }
  public putIpv6Cfg(value: NetflowMonitorDestinationIpv6Cfg) {
    this._ipv6Cfg.internalValue = value;
  }
  public resetIpv6Cfg() {
    this._ipv6Cfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CfgInput() {
    return this._ipv6Cfg.internalValue;
  }
}
export interface NetflowMonitorDisableLogByDestinationIp6ListTcpListStruct {
  /**
  * Port Range End
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#tcp_port_end NetflowMonitor#tcp_port_end}
  */
  readonly tcpPortEnd?: number;
  /**
  * Destination Port (Single Destination Port or Port Range Start)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#tcp_port_start NetflowMonitor#tcp_port_start}
  */
  readonly tcpPortStart?: number;
}

export function netflowMonitorDisableLogByDestinationIp6ListTcpListStructToTerraform(struct?: NetflowMonitorDisableLogByDestinationIp6ListTcpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tcp_port_end: cdktf.numberToTerraform(struct!.tcpPortEnd),
    tcp_port_start: cdktf.numberToTerraform(struct!.tcpPortStart),
  }
}


export function netflowMonitorDisableLogByDestinationIp6ListTcpListStructToHclTerraform(struct?: NetflowMonitorDisableLogByDestinationIp6ListTcpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tcp_port_end: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_port_start: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetflowMonitorDisableLogByDestinationIp6ListTcpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetflowMonitorDisableLogByDestinationIp6ListTcpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tcpPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortEnd = this._tcpPortEnd;
    }
    if (this._tcpPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortStart = this._tcpPortStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetflowMonitorDisableLogByDestinationIp6ListTcpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tcpPortEnd = undefined;
      this._tcpPortStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tcpPortEnd = value.tcpPortEnd;
      this._tcpPortStart = value.tcpPortStart;
    }
  }

  // tcp_port_end - computed: false, optional: true, required: false
  private _tcpPortEnd?: number; 
  public get tcpPortEnd() {
    return this.getNumberAttribute('tcp_port_end');
  }
  public set tcpPortEnd(value: number) {
    this._tcpPortEnd = value;
  }
  public resetTcpPortEnd() {
    this._tcpPortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortEndInput() {
    return this._tcpPortEnd;
  }

  // tcp_port_start - computed: false, optional: true, required: false
  private _tcpPortStart?: number; 
  public get tcpPortStart() {
    return this.getNumberAttribute('tcp_port_start');
  }
  public set tcpPortStart(value: number) {
    this._tcpPortStart = value;
  }
  public resetTcpPortStart() {
    this._tcpPortStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortStartInput() {
    return this._tcpPortStart;
  }
}

export class NetflowMonitorDisableLogByDestinationIp6ListTcpListStructList extends cdktf.ComplexList {
  public internalValue? : NetflowMonitorDisableLogByDestinationIp6ListTcpListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetflowMonitorDisableLogByDestinationIp6ListTcpListStructOutputReference {
    return new NetflowMonitorDisableLogByDestinationIp6ListTcpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetflowMonitorDisableLogByDestinationIp6ListUdpListStruct {
  /**
  * Port Range End
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#udp_port_end NetflowMonitor#udp_port_end}
  */
  readonly udpPortEnd?: number;
  /**
  * Destination Port (Single Destination Port or Port Range Start)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#udp_port_start NetflowMonitor#udp_port_start}
  */
  readonly udpPortStart?: number;
}

export function netflowMonitorDisableLogByDestinationIp6ListUdpListStructToTerraform(struct?: NetflowMonitorDisableLogByDestinationIp6ListUdpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    udp_port_end: cdktf.numberToTerraform(struct!.udpPortEnd),
    udp_port_start: cdktf.numberToTerraform(struct!.udpPortStart),
  }
}


export function netflowMonitorDisableLogByDestinationIp6ListUdpListStructToHclTerraform(struct?: NetflowMonitorDisableLogByDestinationIp6ListUdpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    udp_port_end: {
      value: cdktf.numberToHclTerraform(struct!.udpPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_port_start: {
      value: cdktf.numberToHclTerraform(struct!.udpPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetflowMonitorDisableLogByDestinationIp6ListUdpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetflowMonitorDisableLogByDestinationIp6ListUdpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._udpPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortEnd = this._udpPortEnd;
    }
    if (this._udpPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortStart = this._udpPortStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetflowMonitorDisableLogByDestinationIp6ListUdpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._udpPortEnd = undefined;
      this._udpPortStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._udpPortEnd = value.udpPortEnd;
      this._udpPortStart = value.udpPortStart;
    }
  }

  // udp_port_end - computed: false, optional: true, required: false
  private _udpPortEnd?: number; 
  public get udpPortEnd() {
    return this.getNumberAttribute('udp_port_end');
  }
  public set udpPortEnd(value: number) {
    this._udpPortEnd = value;
  }
  public resetUdpPortEnd() {
    this._udpPortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortEndInput() {
    return this._udpPortEnd;
  }

  // udp_port_start - computed: false, optional: true, required: false
  private _udpPortStart?: number; 
  public get udpPortStart() {
    return this.getNumberAttribute('udp_port_start');
  }
  public set udpPortStart(value: number) {
    this._udpPortStart = value;
  }
  public resetUdpPortStart() {
    this._udpPortStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortStartInput() {
    return this._udpPortStart;
  }
}

export class NetflowMonitorDisableLogByDestinationIp6ListUdpListStructList extends cdktf.ComplexList {
  public internalValue? : NetflowMonitorDisableLogByDestinationIp6ListUdpListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetflowMonitorDisableLogByDestinationIp6ListUdpListStructOutputReference {
    return new NetflowMonitorDisableLogByDestinationIp6ListUdpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetflowMonitorDisableLogByDestinationIp6ListStruct {
  /**
  * Disable logging for icmp traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#icmp NetflowMonitor#icmp}
  */
  readonly icmp?: number;
  /**
  * Configure an IPv6 subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#ipv6_addr NetflowMonitor#ipv6_addr}
  */
  readonly ipv6Addr: string;
  /**
  * Disable logging for other L4 protocols
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#others NetflowMonitor#others}
  */
  readonly others?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#user_tag NetflowMonitor#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#uuid NetflowMonitor#uuid}
  */
  readonly uuid?: string;
  /**
  * tcp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#tcp_list NetflowMonitor#tcp_list}
  */
  readonly tcpList?: NetflowMonitorDisableLogByDestinationIp6ListTcpListStruct[] | cdktf.IResolvable;
  /**
  * udp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#udp_list NetflowMonitor#udp_list}
  */
  readonly udpList?: NetflowMonitorDisableLogByDestinationIp6ListUdpListStruct[] | cdktf.IResolvable;
}

export function netflowMonitorDisableLogByDestinationIp6ListStructToTerraform(struct?: NetflowMonitorDisableLogByDestinationIp6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp: cdktf.numberToTerraform(struct!.icmp),
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    others: cdktf.numberToTerraform(struct!.others),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    tcp_list: cdktf.listMapper(netflowMonitorDisableLogByDestinationIp6ListTcpListStructToTerraform, true)(struct!.tcpList),
    udp_list: cdktf.listMapper(netflowMonitorDisableLogByDestinationIp6ListUdpListStructToTerraform, true)(struct!.udpList),
  }
}


export function netflowMonitorDisableLogByDestinationIp6ListStructToHclTerraform(struct?: NetflowMonitorDisableLogByDestinationIp6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp: {
      value: cdktf.numberToHclTerraform(struct!.icmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    others: {
      value: cdktf.numberToHclTerraform(struct!.others),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    tcp_list: {
      value: cdktf.listMapperHcl(netflowMonitorDisableLogByDestinationIp6ListTcpListStructToHclTerraform, true)(struct!.tcpList),
      isBlock: true,
      type: "list",
      storageClassType: "NetflowMonitorDisableLogByDestinationIp6ListTcpListStructList",
    },
    udp_list: {
      value: cdktf.listMapperHcl(netflowMonitorDisableLogByDestinationIp6ListUdpListStructToHclTerraform, true)(struct!.udpList),
      isBlock: true,
      type: "list",
      storageClassType: "NetflowMonitorDisableLogByDestinationIp6ListUdpListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetflowMonitorDisableLogByDestinationIp6ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetflowMonitorDisableLogByDestinationIp6ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmp = this._icmp;
    }
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    if (this._others !== undefined) {
      hasAnyValues = true;
      internalValueResult.others = this._others;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._tcpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpList = this._tcpList?.internalValue;
    }
    if (this._udpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpList = this._udpList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetflowMonitorDisableLogByDestinationIp6ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icmp = undefined;
      this._ipv6Addr = undefined;
      this._others = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._tcpList.internalValue = undefined;
      this._udpList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icmp = value.icmp;
      this._ipv6Addr = value.ipv6Addr;
      this._others = value.others;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._tcpList.internalValue = value.tcpList;
      this._udpList.internalValue = value.udpList;
    }
  }

  // icmp - computed: false, optional: true, required: false
  private _icmp?: number; 
  public get icmp() {
    return this.getNumberAttribute('icmp');
  }
  public set icmp(value: number) {
    this._icmp = value;
  }
  public resetIcmp() {
    this._icmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpInput() {
    return this._icmp;
  }

  // ipv6_addr - computed: false, optional: false, required: true
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6_addr');
  }
  public set ipv6Addr(value: string) {
    this._ipv6Addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrInput() {
    return this._ipv6Addr;
  }

  // others - computed: false, optional: true, required: false
  private _others?: number; 
  public get others() {
    return this.getNumberAttribute('others');
  }
  public set others(value: number) {
    this._others = value;
  }
  public resetOthers() {
    this._others = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get othersInput() {
    return this._others;
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

  // tcp_list - computed: false, optional: true, required: false
  private _tcpList = new NetflowMonitorDisableLogByDestinationIp6ListTcpListStructList(this, "tcp_list", false);
  public get tcpList() {
    return this._tcpList;
  }
  public putTcpList(value: NetflowMonitorDisableLogByDestinationIp6ListTcpListStruct[] | cdktf.IResolvable) {
    this._tcpList.internalValue = value;
  }
  public resetTcpList() {
    this._tcpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpListInput() {
    return this._tcpList.internalValue;
  }

  // udp_list - computed: false, optional: true, required: false
  private _udpList = new NetflowMonitorDisableLogByDestinationIp6ListUdpListStructList(this, "udp_list", false);
  public get udpList() {
    return this._udpList;
  }
  public putUdpList(value: NetflowMonitorDisableLogByDestinationIp6ListUdpListStruct[] | cdktf.IResolvable) {
    this._udpList.internalValue = value;
  }
  public resetUdpList() {
    this._udpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpListInput() {
    return this._udpList.internalValue;
  }
}

export class NetflowMonitorDisableLogByDestinationIp6ListStructList extends cdktf.ComplexList {
  public internalValue? : NetflowMonitorDisableLogByDestinationIp6ListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetflowMonitorDisableLogByDestinationIp6ListStructOutputReference {
    return new NetflowMonitorDisableLogByDestinationIp6ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetflowMonitorDisableLogByDestinationIpListTcpListStruct {
  /**
  * Port Range End
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#tcp_port_end NetflowMonitor#tcp_port_end}
  */
  readonly tcpPortEnd?: number;
  /**
  * Destination Port (Single Destination Port or Port Range Start)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#tcp_port_start NetflowMonitor#tcp_port_start}
  */
  readonly tcpPortStart?: number;
}

export function netflowMonitorDisableLogByDestinationIpListTcpListStructToTerraform(struct?: NetflowMonitorDisableLogByDestinationIpListTcpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tcp_port_end: cdktf.numberToTerraform(struct!.tcpPortEnd),
    tcp_port_start: cdktf.numberToTerraform(struct!.tcpPortStart),
  }
}


export function netflowMonitorDisableLogByDestinationIpListTcpListStructToHclTerraform(struct?: NetflowMonitorDisableLogByDestinationIpListTcpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tcp_port_end: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_port_start: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetflowMonitorDisableLogByDestinationIpListTcpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetflowMonitorDisableLogByDestinationIpListTcpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tcpPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortEnd = this._tcpPortEnd;
    }
    if (this._tcpPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortStart = this._tcpPortStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetflowMonitorDisableLogByDestinationIpListTcpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tcpPortEnd = undefined;
      this._tcpPortStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tcpPortEnd = value.tcpPortEnd;
      this._tcpPortStart = value.tcpPortStart;
    }
  }

  // tcp_port_end - computed: false, optional: true, required: false
  private _tcpPortEnd?: number; 
  public get tcpPortEnd() {
    return this.getNumberAttribute('tcp_port_end');
  }
  public set tcpPortEnd(value: number) {
    this._tcpPortEnd = value;
  }
  public resetTcpPortEnd() {
    this._tcpPortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortEndInput() {
    return this._tcpPortEnd;
  }

  // tcp_port_start - computed: false, optional: true, required: false
  private _tcpPortStart?: number; 
  public get tcpPortStart() {
    return this.getNumberAttribute('tcp_port_start');
  }
  public set tcpPortStart(value: number) {
    this._tcpPortStart = value;
  }
  public resetTcpPortStart() {
    this._tcpPortStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortStartInput() {
    return this._tcpPortStart;
  }
}

export class NetflowMonitorDisableLogByDestinationIpListTcpListStructList extends cdktf.ComplexList {
  public internalValue? : NetflowMonitorDisableLogByDestinationIpListTcpListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetflowMonitorDisableLogByDestinationIpListTcpListStructOutputReference {
    return new NetflowMonitorDisableLogByDestinationIpListTcpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetflowMonitorDisableLogByDestinationIpListUdpListStruct {
  /**
  * Port Range End
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#udp_port_end NetflowMonitor#udp_port_end}
  */
  readonly udpPortEnd?: number;
  /**
  * Destination Port (Single Destination Port or Port Range Start)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#udp_port_start NetflowMonitor#udp_port_start}
  */
  readonly udpPortStart?: number;
}

export function netflowMonitorDisableLogByDestinationIpListUdpListStructToTerraform(struct?: NetflowMonitorDisableLogByDestinationIpListUdpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    udp_port_end: cdktf.numberToTerraform(struct!.udpPortEnd),
    udp_port_start: cdktf.numberToTerraform(struct!.udpPortStart),
  }
}


export function netflowMonitorDisableLogByDestinationIpListUdpListStructToHclTerraform(struct?: NetflowMonitorDisableLogByDestinationIpListUdpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    udp_port_end: {
      value: cdktf.numberToHclTerraform(struct!.udpPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_port_start: {
      value: cdktf.numberToHclTerraform(struct!.udpPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetflowMonitorDisableLogByDestinationIpListUdpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetflowMonitorDisableLogByDestinationIpListUdpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._udpPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortEnd = this._udpPortEnd;
    }
    if (this._udpPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortStart = this._udpPortStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetflowMonitorDisableLogByDestinationIpListUdpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._udpPortEnd = undefined;
      this._udpPortStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._udpPortEnd = value.udpPortEnd;
      this._udpPortStart = value.udpPortStart;
    }
  }

  // udp_port_end - computed: false, optional: true, required: false
  private _udpPortEnd?: number; 
  public get udpPortEnd() {
    return this.getNumberAttribute('udp_port_end');
  }
  public set udpPortEnd(value: number) {
    this._udpPortEnd = value;
  }
  public resetUdpPortEnd() {
    this._udpPortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortEndInput() {
    return this._udpPortEnd;
  }

  // udp_port_start - computed: false, optional: true, required: false
  private _udpPortStart?: number; 
  public get udpPortStart() {
    return this.getNumberAttribute('udp_port_start');
  }
  public set udpPortStart(value: number) {
    this._udpPortStart = value;
  }
  public resetUdpPortStart() {
    this._udpPortStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortStartInput() {
    return this._udpPortStart;
  }
}

export class NetflowMonitorDisableLogByDestinationIpListUdpListStructList extends cdktf.ComplexList {
  public internalValue? : NetflowMonitorDisableLogByDestinationIpListUdpListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetflowMonitorDisableLogByDestinationIpListUdpListStructOutputReference {
    return new NetflowMonitorDisableLogByDestinationIpListUdpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetflowMonitorDisableLogByDestinationIpListStruct {
  /**
  * Disable logging for icmp traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#icmp NetflowMonitor#icmp}
  */
  readonly icmp?: number;
  /**
  * Configure an IP subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#ipv4_addr NetflowMonitor#ipv4_addr}
  */
  readonly ipv4Addr: string;
  /**
  * Disable logging for other L4 protocols
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#others NetflowMonitor#others}
  */
  readonly others?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#user_tag NetflowMonitor#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#uuid NetflowMonitor#uuid}
  */
  readonly uuid?: string;
  /**
  * tcp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#tcp_list NetflowMonitor#tcp_list}
  */
  readonly tcpList?: NetflowMonitorDisableLogByDestinationIpListTcpListStruct[] | cdktf.IResolvable;
  /**
  * udp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#udp_list NetflowMonitor#udp_list}
  */
  readonly udpList?: NetflowMonitorDisableLogByDestinationIpListUdpListStruct[] | cdktf.IResolvable;
}

export function netflowMonitorDisableLogByDestinationIpListStructToTerraform(struct?: NetflowMonitorDisableLogByDestinationIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp: cdktf.numberToTerraform(struct!.icmp),
    ipv4_addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    others: cdktf.numberToTerraform(struct!.others),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    tcp_list: cdktf.listMapper(netflowMonitorDisableLogByDestinationIpListTcpListStructToTerraform, true)(struct!.tcpList),
    udp_list: cdktf.listMapper(netflowMonitorDisableLogByDestinationIpListUdpListStructToTerraform, true)(struct!.udpList),
  }
}


export function netflowMonitorDisableLogByDestinationIpListStructToHclTerraform(struct?: NetflowMonitorDisableLogByDestinationIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp: {
      value: cdktf.numberToHclTerraform(struct!.icmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    others: {
      value: cdktf.numberToHclTerraform(struct!.others),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    tcp_list: {
      value: cdktf.listMapperHcl(netflowMonitorDisableLogByDestinationIpListTcpListStructToHclTerraform, true)(struct!.tcpList),
      isBlock: true,
      type: "list",
      storageClassType: "NetflowMonitorDisableLogByDestinationIpListTcpListStructList",
    },
    udp_list: {
      value: cdktf.listMapperHcl(netflowMonitorDisableLogByDestinationIpListUdpListStructToHclTerraform, true)(struct!.udpList),
      isBlock: true,
      type: "list",
      storageClassType: "NetflowMonitorDisableLogByDestinationIpListUdpListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetflowMonitorDisableLogByDestinationIpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetflowMonitorDisableLogByDestinationIpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmp = this._icmp;
    }
    if (this._ipv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addr = this._ipv4Addr;
    }
    if (this._others !== undefined) {
      hasAnyValues = true;
      internalValueResult.others = this._others;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._tcpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpList = this._tcpList?.internalValue;
    }
    if (this._udpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpList = this._udpList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetflowMonitorDisableLogByDestinationIpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icmp = undefined;
      this._ipv4Addr = undefined;
      this._others = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._tcpList.internalValue = undefined;
      this._udpList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icmp = value.icmp;
      this._ipv4Addr = value.ipv4Addr;
      this._others = value.others;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._tcpList.internalValue = value.tcpList;
      this._udpList.internalValue = value.udpList;
    }
  }

  // icmp - computed: false, optional: true, required: false
  private _icmp?: number; 
  public get icmp() {
    return this.getNumberAttribute('icmp');
  }
  public set icmp(value: number) {
    this._icmp = value;
  }
  public resetIcmp() {
    this._icmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpInput() {
    return this._icmp;
  }

  // ipv4_addr - computed: false, optional: false, required: true
  private _ipv4Addr?: string; 
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4_addr');
  }
  public set ipv4Addr(value: string) {
    this._ipv4Addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrInput() {
    return this._ipv4Addr;
  }

  // others - computed: false, optional: true, required: false
  private _others?: number; 
  public get others() {
    return this.getNumberAttribute('others');
  }
  public set others(value: number) {
    this._others = value;
  }
  public resetOthers() {
    this._others = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get othersInput() {
    return this._others;
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

  // tcp_list - computed: false, optional: true, required: false
  private _tcpList = new NetflowMonitorDisableLogByDestinationIpListTcpListStructList(this, "tcp_list", false);
  public get tcpList() {
    return this._tcpList;
  }
  public putTcpList(value: NetflowMonitorDisableLogByDestinationIpListTcpListStruct[] | cdktf.IResolvable) {
    this._tcpList.internalValue = value;
  }
  public resetTcpList() {
    this._tcpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpListInput() {
    return this._tcpList.internalValue;
  }

  // udp_list - computed: false, optional: true, required: false
  private _udpList = new NetflowMonitorDisableLogByDestinationIpListUdpListStructList(this, "udp_list", false);
  public get udpList() {
    return this._udpList;
  }
  public putUdpList(value: NetflowMonitorDisableLogByDestinationIpListUdpListStruct[] | cdktf.IResolvable) {
    this._udpList.internalValue = value;
  }
  public resetUdpList() {
    this._udpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpListInput() {
    return this._udpList.internalValue;
  }
}

export class NetflowMonitorDisableLogByDestinationIpListStructList extends cdktf.ComplexList {
  public internalValue? : NetflowMonitorDisableLogByDestinationIpListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetflowMonitorDisableLogByDestinationIpListStructOutputReference {
    return new NetflowMonitorDisableLogByDestinationIpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetflowMonitorDisableLogByDestinationTcpListStruct {
  /**
  * Port Range End
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#tcp_port_end NetflowMonitor#tcp_port_end}
  */
  readonly tcpPortEnd?: number;
  /**
  * Destination Port (Single Destination Port or Port Range Start)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#tcp_port_start NetflowMonitor#tcp_port_start}
  */
  readonly tcpPortStart?: number;
}

export function netflowMonitorDisableLogByDestinationTcpListStructToTerraform(struct?: NetflowMonitorDisableLogByDestinationTcpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tcp_port_end: cdktf.numberToTerraform(struct!.tcpPortEnd),
    tcp_port_start: cdktf.numberToTerraform(struct!.tcpPortStart),
  }
}


export function netflowMonitorDisableLogByDestinationTcpListStructToHclTerraform(struct?: NetflowMonitorDisableLogByDestinationTcpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tcp_port_end: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_port_start: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetflowMonitorDisableLogByDestinationTcpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetflowMonitorDisableLogByDestinationTcpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tcpPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortEnd = this._tcpPortEnd;
    }
    if (this._tcpPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortStart = this._tcpPortStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetflowMonitorDisableLogByDestinationTcpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tcpPortEnd = undefined;
      this._tcpPortStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tcpPortEnd = value.tcpPortEnd;
      this._tcpPortStart = value.tcpPortStart;
    }
  }

  // tcp_port_end - computed: false, optional: true, required: false
  private _tcpPortEnd?: number; 
  public get tcpPortEnd() {
    return this.getNumberAttribute('tcp_port_end');
  }
  public set tcpPortEnd(value: number) {
    this._tcpPortEnd = value;
  }
  public resetTcpPortEnd() {
    this._tcpPortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortEndInput() {
    return this._tcpPortEnd;
  }

  // tcp_port_start - computed: false, optional: true, required: false
  private _tcpPortStart?: number; 
  public get tcpPortStart() {
    return this.getNumberAttribute('tcp_port_start');
  }
  public set tcpPortStart(value: number) {
    this._tcpPortStart = value;
  }
  public resetTcpPortStart() {
    this._tcpPortStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortStartInput() {
    return this._tcpPortStart;
  }
}

export class NetflowMonitorDisableLogByDestinationTcpListStructList extends cdktf.ComplexList {
  public internalValue? : NetflowMonitorDisableLogByDestinationTcpListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetflowMonitorDisableLogByDestinationTcpListStructOutputReference {
    return new NetflowMonitorDisableLogByDestinationTcpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetflowMonitorDisableLogByDestinationUdpListStruct {
  /**
  * Port Range End
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#udp_port_end NetflowMonitor#udp_port_end}
  */
  readonly udpPortEnd?: number;
  /**
  * Destination Port (Single Destination Port or Port Range Start)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#udp_port_start NetflowMonitor#udp_port_start}
  */
  readonly udpPortStart?: number;
}

export function netflowMonitorDisableLogByDestinationUdpListStructToTerraform(struct?: NetflowMonitorDisableLogByDestinationUdpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    udp_port_end: cdktf.numberToTerraform(struct!.udpPortEnd),
    udp_port_start: cdktf.numberToTerraform(struct!.udpPortStart),
  }
}


export function netflowMonitorDisableLogByDestinationUdpListStructToHclTerraform(struct?: NetflowMonitorDisableLogByDestinationUdpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    udp_port_end: {
      value: cdktf.numberToHclTerraform(struct!.udpPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_port_start: {
      value: cdktf.numberToHclTerraform(struct!.udpPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetflowMonitorDisableLogByDestinationUdpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetflowMonitorDisableLogByDestinationUdpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._udpPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortEnd = this._udpPortEnd;
    }
    if (this._udpPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortStart = this._udpPortStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetflowMonitorDisableLogByDestinationUdpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._udpPortEnd = undefined;
      this._udpPortStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._udpPortEnd = value.udpPortEnd;
      this._udpPortStart = value.udpPortStart;
    }
  }

  // udp_port_end - computed: false, optional: true, required: false
  private _udpPortEnd?: number; 
  public get udpPortEnd() {
    return this.getNumberAttribute('udp_port_end');
  }
  public set udpPortEnd(value: number) {
    this._udpPortEnd = value;
  }
  public resetUdpPortEnd() {
    this._udpPortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortEndInput() {
    return this._udpPortEnd;
  }

  // udp_port_start - computed: false, optional: true, required: false
  private _udpPortStart?: number; 
  public get udpPortStart() {
    return this.getNumberAttribute('udp_port_start');
  }
  public set udpPortStart(value: number) {
    this._udpPortStart = value;
  }
  public resetUdpPortStart() {
    this._udpPortStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortStartInput() {
    return this._udpPortStart;
  }
}

export class NetflowMonitorDisableLogByDestinationUdpListStructList extends cdktf.ComplexList {
  public internalValue? : NetflowMonitorDisableLogByDestinationUdpListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetflowMonitorDisableLogByDestinationUdpListStructOutputReference {
    return new NetflowMonitorDisableLogByDestinationUdpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetflowMonitorDisableLogByDestination {
  /**
  * Disable logging for icmp traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#icmp NetflowMonitor#icmp}
  */
  readonly icmp?: number;
  /**
  * Disable logging for other L4 protocols
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#others NetflowMonitor#others}
  */
  readonly others?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#uuid NetflowMonitor#uuid}
  */
  readonly uuid?: string;
  /**
  * ip6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#ip6_list NetflowMonitor#ip6_list}
  */
  readonly ip6List?: NetflowMonitorDisableLogByDestinationIp6ListStruct[] | cdktf.IResolvable;
  /**
  * ip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#ip_list NetflowMonitor#ip_list}
  */
  readonly ipList?: NetflowMonitorDisableLogByDestinationIpListStruct[] | cdktf.IResolvable;
  /**
  * tcp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#tcp_list NetflowMonitor#tcp_list}
  */
  readonly tcpList?: NetflowMonitorDisableLogByDestinationTcpListStruct[] | cdktf.IResolvable;
  /**
  * udp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#udp_list NetflowMonitor#udp_list}
  */
  readonly udpList?: NetflowMonitorDisableLogByDestinationUdpListStruct[] | cdktf.IResolvable;
}

export function netflowMonitorDisableLogByDestinationToTerraform(struct?: NetflowMonitorDisableLogByDestinationOutputReference | NetflowMonitorDisableLogByDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp: cdktf.numberToTerraform(struct!.icmp),
    others: cdktf.numberToTerraform(struct!.others),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    ip6_list: cdktf.listMapper(netflowMonitorDisableLogByDestinationIp6ListStructToTerraform, true)(struct!.ip6List),
    ip_list: cdktf.listMapper(netflowMonitorDisableLogByDestinationIpListStructToTerraform, true)(struct!.ipList),
    tcp_list: cdktf.listMapper(netflowMonitorDisableLogByDestinationTcpListStructToTerraform, true)(struct!.tcpList),
    udp_list: cdktf.listMapper(netflowMonitorDisableLogByDestinationUdpListStructToTerraform, true)(struct!.udpList),
  }
}


export function netflowMonitorDisableLogByDestinationToHclTerraform(struct?: NetflowMonitorDisableLogByDestinationOutputReference | NetflowMonitorDisableLogByDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp: {
      value: cdktf.numberToHclTerraform(struct!.icmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    others: {
      value: cdktf.numberToHclTerraform(struct!.others),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_list: {
      value: cdktf.listMapperHcl(netflowMonitorDisableLogByDestinationIp6ListStructToHclTerraform, true)(struct!.ip6List),
      isBlock: true,
      type: "list",
      storageClassType: "NetflowMonitorDisableLogByDestinationIp6ListStructList",
    },
    ip_list: {
      value: cdktf.listMapperHcl(netflowMonitorDisableLogByDestinationIpListStructToHclTerraform, true)(struct!.ipList),
      isBlock: true,
      type: "list",
      storageClassType: "NetflowMonitorDisableLogByDestinationIpListStructList",
    },
    tcp_list: {
      value: cdktf.listMapperHcl(netflowMonitorDisableLogByDestinationTcpListStructToHclTerraform, true)(struct!.tcpList),
      isBlock: true,
      type: "list",
      storageClassType: "NetflowMonitorDisableLogByDestinationTcpListStructList",
    },
    udp_list: {
      value: cdktf.listMapperHcl(netflowMonitorDisableLogByDestinationUdpListStructToHclTerraform, true)(struct!.udpList),
      isBlock: true,
      type: "list",
      storageClassType: "NetflowMonitorDisableLogByDestinationUdpListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetflowMonitorDisableLogByDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetflowMonitorDisableLogByDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmp = this._icmp;
    }
    if (this._others !== undefined) {
      hasAnyValues = true;
      internalValueResult.others = this._others;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._ip6List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6List = this._ip6List?.internalValue;
    }
    if (this._ipList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipList = this._ipList?.internalValue;
    }
    if (this._tcpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpList = this._tcpList?.internalValue;
    }
    if (this._udpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpList = this._udpList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetflowMonitorDisableLogByDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._icmp = undefined;
      this._others = undefined;
      this._uuid = undefined;
      this._ip6List.internalValue = undefined;
      this._ipList.internalValue = undefined;
      this._tcpList.internalValue = undefined;
      this._udpList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._icmp = value.icmp;
      this._others = value.others;
      this._uuid = value.uuid;
      this._ip6List.internalValue = value.ip6List;
      this._ipList.internalValue = value.ipList;
      this._tcpList.internalValue = value.tcpList;
      this._udpList.internalValue = value.udpList;
    }
  }

  // icmp - computed: false, optional: true, required: false
  private _icmp?: number; 
  public get icmp() {
    return this.getNumberAttribute('icmp');
  }
  public set icmp(value: number) {
    this._icmp = value;
  }
  public resetIcmp() {
    this._icmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpInput() {
    return this._icmp;
  }

  // others - computed: false, optional: true, required: false
  private _others?: number; 
  public get others() {
    return this.getNumberAttribute('others');
  }
  public set others(value: number) {
    this._others = value;
  }
  public resetOthers() {
    this._others = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get othersInput() {
    return this._others;
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

  // ip6_list - computed: false, optional: true, required: false
  private _ip6List = new NetflowMonitorDisableLogByDestinationIp6ListStructList(this, "ip6_list", false);
  public get ip6List() {
    return this._ip6List;
  }
  public putIp6List(value: NetflowMonitorDisableLogByDestinationIp6ListStruct[] | cdktf.IResolvable) {
    this._ip6List.internalValue = value;
  }
  public resetIp6List() {
    this._ip6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6ListInput() {
    return this._ip6List.internalValue;
  }

  // ip_list - computed: false, optional: true, required: false
  private _ipList = new NetflowMonitorDisableLogByDestinationIpListStructList(this, "ip_list", false);
  public get ipList() {
    return this._ipList;
  }
  public putIpList(value: NetflowMonitorDisableLogByDestinationIpListStruct[] | cdktf.IResolvable) {
    this._ipList.internalValue = value;
  }
  public resetIpList() {
    this._ipList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListInput() {
    return this._ipList.internalValue;
  }

  // tcp_list - computed: false, optional: true, required: false
  private _tcpList = new NetflowMonitorDisableLogByDestinationTcpListStructList(this, "tcp_list", false);
  public get tcpList() {
    return this._tcpList;
  }
  public putTcpList(value: NetflowMonitorDisableLogByDestinationTcpListStruct[] | cdktf.IResolvable) {
    this._tcpList.internalValue = value;
  }
  public resetTcpList() {
    this._tcpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpListInput() {
    return this._tcpList.internalValue;
  }

  // udp_list - computed: false, optional: true, required: false
  private _udpList = new NetflowMonitorDisableLogByDestinationUdpListStructList(this, "udp_list", false);
  public get udpList() {
    return this._udpList;
  }
  public putUdpList(value: NetflowMonitorDisableLogByDestinationUdpListStruct[] | cdktf.IResolvable) {
    this._udpList.internalValue = value;
  }
  public resetUdpList() {
    this._udpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpListInput() {
    return this._udpList.internalValue;
  }
}
export interface NetflowMonitorRecord {
  /**
  * General DDOS statistics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#ddos_general_stat NetflowMonitor#ddos_general_stat}
  */
  readonly ddosGeneralStat?: number;
  /**
  * HTTP DDOS statistics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#ddos_http_stat NetflowMonitor#ddos_http_stat}
  */
  readonly ddosHttpStat?: number;
  /**
  * DS-Lite Flow Record Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#dslite NetflowMonitor#dslite}
  */
  readonly dslite?: number;
  /**
  * NAT44 Flow Record Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#nat44 NetflowMonitor#nat44}
  */
  readonly nat44?: number;
  /**
  * NAT64 Flow Record Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#nat64 NetflowMonitor#nat64}
  */
  readonly nat64?: number;
  /**
  * NetFlow V5 Flow Record Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#netflow_v5 NetflowMonitor#netflow_v5}
  */
  readonly netflowV5?: number;
  /**
  * Extended NetFlow V5 Flow Record Template, supports ipv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#netflow_v5_ext NetflowMonitor#netflow_v5_ext}
  */
  readonly netflowV5Ext?: number;
  /**
  * 'both': Export both creation and deletion events; 'creation': Export only creation events; 'deletion': Export only deletion events;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#port_batch_dslite NetflowMonitor#port_batch_dslite}
  */
  readonly portBatchDslite?: string;
  /**
  * 'both': Export both creation and deletion events; 'creation': Export only creation events; 'deletion': Export only deletion events;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#port_batch_nat44 NetflowMonitor#port_batch_nat44}
  */
  readonly portBatchNat44?: string;
  /**
  * 'both': Export both creation and deletion events; 'creation': Export only creation events; 'deletion': Export only deletion events;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#port_batch_nat64 NetflowMonitor#port_batch_nat64}
  */
  readonly portBatchNat64?: string;
  /**
  * 'both': Export both creation and deletion events; 'creation': Export only creation events; 'deletion': Export only deletion events;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#port_batch_v2_dslite NetflowMonitor#port_batch_v2_dslite}
  */
  readonly portBatchV2Dslite?: string;
  /**
  * 'both': Export both creation and deletion events; 'creation': Export only creation events; 'deletion': Export only deletion events;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#port_batch_v2_nat44 NetflowMonitor#port_batch_v2_nat44}
  */
  readonly portBatchV2Nat44?: string;
  /**
  * 'both': Export both creation and deletion events; 'creation': Export only creation events; 'deletion': Export only deletion events;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#port_batch_v2_nat64 NetflowMonitor#port_batch_v2_nat64}
  */
  readonly portBatchV2Nat64?: string;
  /**
  * 'both': Export both creation and deletion events; 'creation': Export only creation events; 'deletion': Export only deletion events;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#port_mapping_dslite NetflowMonitor#port_mapping_dslite}
  */
  readonly portMappingDslite?: string;
  /**
  * 'both': Export both creation and deletion events; 'creation': Export only creation events; 'deletion': Export only deletion events;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#port_mapping_nat44 NetflowMonitor#port_mapping_nat44}
  */
  readonly portMappingNat44?: string;
  /**
  * 'both': Export both creation and deletion events; 'creation': Export only creation events; 'deletion': Export only deletion events;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#port_mapping_nat64 NetflowMonitor#port_mapping_nat64}
  */
  readonly portMappingNat64?: string;
  /**
  * 'both': Export both creation and deletion events; 'creation': Export only creation events; 'deletion': Export only deletion events;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#sesn_event_dslite NetflowMonitor#sesn_event_dslite}
  */
  readonly sesnEventDslite?: string;
  /**
  * 'both': Export both creation and deletion events; 'creation': Export only creation events; 'deletion': Export only deletion events;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#sesn_event_fw4 NetflowMonitor#sesn_event_fw4}
  */
  readonly sesnEventFw4?: string;
  /**
  * 'both': Export both creation and deletion events; 'creation': Export only creation events; 'deletion': Export only deletion events;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#sesn_event_fw6 NetflowMonitor#sesn_event_fw6}
  */
  readonly sesnEventFw6?: string;
  /**
  * 'both': Export both creation and deletion events; 'creation': Export only creation events; 'deletion': Export only deletion events;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#sesn_event_nat44 NetflowMonitor#sesn_event_nat44}
  */
  readonly sesnEventNat44?: string;
  /**
  * 'both': Export both creation and deletion events; 'creation': Export only creation events; 'deletion': Export only deletion events;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#sesn_event_nat64 NetflowMonitor#sesn_event_nat64}
  */
  readonly sesnEventNat64?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#uuid NetflowMonitor#uuid}
  */
  readonly uuid?: string;
}

export function netflowMonitorRecordToTerraform(struct?: NetflowMonitorRecordOutputReference | NetflowMonitorRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ddos_general_stat: cdktf.numberToTerraform(struct!.ddosGeneralStat),
    ddos_http_stat: cdktf.numberToTerraform(struct!.ddosHttpStat),
    dslite: cdktf.numberToTerraform(struct!.dslite),
    nat44: cdktf.numberToTerraform(struct!.nat44),
    nat64: cdktf.numberToTerraform(struct!.nat64),
    netflow_v5: cdktf.numberToTerraform(struct!.netflowV5),
    netflow_v5_ext: cdktf.numberToTerraform(struct!.netflowV5Ext),
    port_batch_dslite: cdktf.stringToTerraform(struct!.portBatchDslite),
    port_batch_nat44: cdktf.stringToTerraform(struct!.portBatchNat44),
    port_batch_nat64: cdktf.stringToTerraform(struct!.portBatchNat64),
    port_batch_v2_dslite: cdktf.stringToTerraform(struct!.portBatchV2Dslite),
    port_batch_v2_nat44: cdktf.stringToTerraform(struct!.portBatchV2Nat44),
    port_batch_v2_nat64: cdktf.stringToTerraform(struct!.portBatchV2Nat64),
    port_mapping_dslite: cdktf.stringToTerraform(struct!.portMappingDslite),
    port_mapping_nat44: cdktf.stringToTerraform(struct!.portMappingNat44),
    port_mapping_nat64: cdktf.stringToTerraform(struct!.portMappingNat64),
    sesn_event_dslite: cdktf.stringToTerraform(struct!.sesnEventDslite),
    sesn_event_fw4: cdktf.stringToTerraform(struct!.sesnEventFw4),
    sesn_event_fw6: cdktf.stringToTerraform(struct!.sesnEventFw6),
    sesn_event_nat44: cdktf.stringToTerraform(struct!.sesnEventNat44),
    sesn_event_nat64: cdktf.stringToTerraform(struct!.sesnEventNat64),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function netflowMonitorRecordToHclTerraform(struct?: NetflowMonitorRecordOutputReference | NetflowMonitorRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ddos_general_stat: {
      value: cdktf.numberToHclTerraform(struct!.ddosGeneralStat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddos_http_stat: {
      value: cdktf.numberToHclTerraform(struct!.ddosHttpStat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dslite: {
      value: cdktf.numberToHclTerraform(struct!.dslite),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat44: {
      value: cdktf.numberToHclTerraform(struct!.nat44),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat64: {
      value: cdktf.numberToHclTerraform(struct!.nat64),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    netflow_v5: {
      value: cdktf.numberToHclTerraform(struct!.netflowV5),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    netflow_v5_ext: {
      value: cdktf.numberToHclTerraform(struct!.netflowV5Ext),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_batch_dslite: {
      value: cdktf.stringToHclTerraform(struct!.portBatchDslite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_batch_nat44: {
      value: cdktf.stringToHclTerraform(struct!.portBatchNat44),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_batch_nat64: {
      value: cdktf.stringToHclTerraform(struct!.portBatchNat64),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_batch_v2_dslite: {
      value: cdktf.stringToHclTerraform(struct!.portBatchV2Dslite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_batch_v2_nat44: {
      value: cdktf.stringToHclTerraform(struct!.portBatchV2Nat44),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_batch_v2_nat64: {
      value: cdktf.stringToHclTerraform(struct!.portBatchV2Nat64),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_mapping_dslite: {
      value: cdktf.stringToHclTerraform(struct!.portMappingDslite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_mapping_nat44: {
      value: cdktf.stringToHclTerraform(struct!.portMappingNat44),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_mapping_nat64: {
      value: cdktf.stringToHclTerraform(struct!.portMappingNat64),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sesn_event_dslite: {
      value: cdktf.stringToHclTerraform(struct!.sesnEventDslite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sesn_event_fw4: {
      value: cdktf.stringToHclTerraform(struct!.sesnEventFw4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sesn_event_fw6: {
      value: cdktf.stringToHclTerraform(struct!.sesnEventFw6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sesn_event_nat44: {
      value: cdktf.stringToHclTerraform(struct!.sesnEventNat44),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sesn_event_nat64: {
      value: cdktf.stringToHclTerraform(struct!.sesnEventNat64),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetflowMonitorRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetflowMonitorRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ddosGeneralStat !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosGeneralStat = this._ddosGeneralStat;
    }
    if (this._ddosHttpStat !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosHttpStat = this._ddosHttpStat;
    }
    if (this._dslite !== undefined) {
      hasAnyValues = true;
      internalValueResult.dslite = this._dslite;
    }
    if (this._nat44 !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat44 = this._nat44;
    }
    if (this._nat64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat64 = this._nat64;
    }
    if (this._netflowV5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowV5 = this._netflowV5;
    }
    if (this._netflowV5Ext !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowV5Ext = this._netflowV5Ext;
    }
    if (this._portBatchDslite !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBatchDslite = this._portBatchDslite;
    }
    if (this._portBatchNat44 !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBatchNat44 = this._portBatchNat44;
    }
    if (this._portBatchNat64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBatchNat64 = this._portBatchNat64;
    }
    if (this._portBatchV2Dslite !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBatchV2Dslite = this._portBatchV2Dslite;
    }
    if (this._portBatchV2Nat44 !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBatchV2Nat44 = this._portBatchV2Nat44;
    }
    if (this._portBatchV2Nat64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBatchV2Nat64 = this._portBatchV2Nat64;
    }
    if (this._portMappingDslite !== undefined) {
      hasAnyValues = true;
      internalValueResult.portMappingDslite = this._portMappingDslite;
    }
    if (this._portMappingNat44 !== undefined) {
      hasAnyValues = true;
      internalValueResult.portMappingNat44 = this._portMappingNat44;
    }
    if (this._portMappingNat64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.portMappingNat64 = this._portMappingNat64;
    }
    if (this._sesnEventDslite !== undefined) {
      hasAnyValues = true;
      internalValueResult.sesnEventDslite = this._sesnEventDslite;
    }
    if (this._sesnEventFw4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sesnEventFw4 = this._sesnEventFw4;
    }
    if (this._sesnEventFw6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sesnEventFw6 = this._sesnEventFw6;
    }
    if (this._sesnEventNat44 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sesnEventNat44 = this._sesnEventNat44;
    }
    if (this._sesnEventNat64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sesnEventNat64 = this._sesnEventNat64;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetflowMonitorRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ddosGeneralStat = undefined;
      this._ddosHttpStat = undefined;
      this._dslite = undefined;
      this._nat44 = undefined;
      this._nat64 = undefined;
      this._netflowV5 = undefined;
      this._netflowV5Ext = undefined;
      this._portBatchDslite = undefined;
      this._portBatchNat44 = undefined;
      this._portBatchNat64 = undefined;
      this._portBatchV2Dslite = undefined;
      this._portBatchV2Nat44 = undefined;
      this._portBatchV2Nat64 = undefined;
      this._portMappingDslite = undefined;
      this._portMappingNat44 = undefined;
      this._portMappingNat64 = undefined;
      this._sesnEventDslite = undefined;
      this._sesnEventFw4 = undefined;
      this._sesnEventFw6 = undefined;
      this._sesnEventNat44 = undefined;
      this._sesnEventNat64 = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ddosGeneralStat = value.ddosGeneralStat;
      this._ddosHttpStat = value.ddosHttpStat;
      this._dslite = value.dslite;
      this._nat44 = value.nat44;
      this._nat64 = value.nat64;
      this._netflowV5 = value.netflowV5;
      this._netflowV5Ext = value.netflowV5Ext;
      this._portBatchDslite = value.portBatchDslite;
      this._portBatchNat44 = value.portBatchNat44;
      this._portBatchNat64 = value.portBatchNat64;
      this._portBatchV2Dslite = value.portBatchV2Dslite;
      this._portBatchV2Nat44 = value.portBatchV2Nat44;
      this._portBatchV2Nat64 = value.portBatchV2Nat64;
      this._portMappingDslite = value.portMappingDslite;
      this._portMappingNat44 = value.portMappingNat44;
      this._portMappingNat64 = value.portMappingNat64;
      this._sesnEventDslite = value.sesnEventDslite;
      this._sesnEventFw4 = value.sesnEventFw4;
      this._sesnEventFw6 = value.sesnEventFw6;
      this._sesnEventNat44 = value.sesnEventNat44;
      this._sesnEventNat64 = value.sesnEventNat64;
      this._uuid = value.uuid;
    }
  }

  // ddos_general_stat - computed: false, optional: true, required: false
  private _ddosGeneralStat?: number; 
  public get ddosGeneralStat() {
    return this.getNumberAttribute('ddos_general_stat');
  }
  public set ddosGeneralStat(value: number) {
    this._ddosGeneralStat = value;
  }
  public resetDdosGeneralStat() {
    this._ddosGeneralStat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosGeneralStatInput() {
    return this._ddosGeneralStat;
  }

  // ddos_http_stat - computed: false, optional: true, required: false
  private _ddosHttpStat?: number; 
  public get ddosHttpStat() {
    return this.getNumberAttribute('ddos_http_stat');
  }
  public set ddosHttpStat(value: number) {
    this._ddosHttpStat = value;
  }
  public resetDdosHttpStat() {
    this._ddosHttpStat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosHttpStatInput() {
    return this._ddosHttpStat;
  }

  // dslite - computed: false, optional: true, required: false
  private _dslite?: number; 
  public get dslite() {
    return this.getNumberAttribute('dslite');
  }
  public set dslite(value: number) {
    this._dslite = value;
  }
  public resetDslite() {
    this._dslite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsliteInput() {
    return this._dslite;
  }

  // nat44 - computed: false, optional: true, required: false
  private _nat44?: number; 
  public get nat44() {
    return this.getNumberAttribute('nat44');
  }
  public set nat44(value: number) {
    this._nat44 = value;
  }
  public resetNat44() {
    this._nat44 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat44Input() {
    return this._nat44;
  }

  // nat64 - computed: false, optional: true, required: false
  private _nat64?: number; 
  public get nat64() {
    return this.getNumberAttribute('nat64');
  }
  public set nat64(value: number) {
    this._nat64 = value;
  }
  public resetNat64() {
    this._nat64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64Input() {
    return this._nat64;
  }

  // netflow_v5 - computed: false, optional: true, required: false
  private _netflowV5?: number; 
  public get netflowV5() {
    return this.getNumberAttribute('netflow_v5');
  }
  public set netflowV5(value: number) {
    this._netflowV5 = value;
  }
  public resetNetflowV5() {
    this._netflowV5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowV5Input() {
    return this._netflowV5;
  }

  // netflow_v5_ext - computed: false, optional: true, required: false
  private _netflowV5Ext?: number; 
  public get netflowV5Ext() {
    return this.getNumberAttribute('netflow_v5_ext');
  }
  public set netflowV5Ext(value: number) {
    this._netflowV5Ext = value;
  }
  public resetNetflowV5Ext() {
    this._netflowV5Ext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowV5ExtInput() {
    return this._netflowV5Ext;
  }

  // port_batch_dslite - computed: false, optional: true, required: false
  private _portBatchDslite?: string; 
  public get portBatchDslite() {
    return this.getStringAttribute('port_batch_dslite');
  }
  public set portBatchDslite(value: string) {
    this._portBatchDslite = value;
  }
  public resetPortBatchDslite() {
    this._portBatchDslite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBatchDsliteInput() {
    return this._portBatchDslite;
  }

  // port_batch_nat44 - computed: false, optional: true, required: false
  private _portBatchNat44?: string; 
  public get portBatchNat44() {
    return this.getStringAttribute('port_batch_nat44');
  }
  public set portBatchNat44(value: string) {
    this._portBatchNat44 = value;
  }
  public resetPortBatchNat44() {
    this._portBatchNat44 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBatchNat44Input() {
    return this._portBatchNat44;
  }

  // port_batch_nat64 - computed: false, optional: true, required: false
  private _portBatchNat64?: string; 
  public get portBatchNat64() {
    return this.getStringAttribute('port_batch_nat64');
  }
  public set portBatchNat64(value: string) {
    this._portBatchNat64 = value;
  }
  public resetPortBatchNat64() {
    this._portBatchNat64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBatchNat64Input() {
    return this._portBatchNat64;
  }

  // port_batch_v2_dslite - computed: false, optional: true, required: false
  private _portBatchV2Dslite?: string; 
  public get portBatchV2Dslite() {
    return this.getStringAttribute('port_batch_v2_dslite');
  }
  public set portBatchV2Dslite(value: string) {
    this._portBatchV2Dslite = value;
  }
  public resetPortBatchV2Dslite() {
    this._portBatchV2Dslite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBatchV2DsliteInput() {
    return this._portBatchV2Dslite;
  }

  // port_batch_v2_nat44 - computed: false, optional: true, required: false
  private _portBatchV2Nat44?: string; 
  public get portBatchV2Nat44() {
    return this.getStringAttribute('port_batch_v2_nat44');
  }
  public set portBatchV2Nat44(value: string) {
    this._portBatchV2Nat44 = value;
  }
  public resetPortBatchV2Nat44() {
    this._portBatchV2Nat44 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBatchV2Nat44Input() {
    return this._portBatchV2Nat44;
  }

  // port_batch_v2_nat64 - computed: false, optional: true, required: false
  private _portBatchV2Nat64?: string; 
  public get portBatchV2Nat64() {
    return this.getStringAttribute('port_batch_v2_nat64');
  }
  public set portBatchV2Nat64(value: string) {
    this._portBatchV2Nat64 = value;
  }
  public resetPortBatchV2Nat64() {
    this._portBatchV2Nat64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBatchV2Nat64Input() {
    return this._portBatchV2Nat64;
  }

  // port_mapping_dslite - computed: false, optional: true, required: false
  private _portMappingDslite?: string; 
  public get portMappingDslite() {
    return this.getStringAttribute('port_mapping_dslite');
  }
  public set portMappingDslite(value: string) {
    this._portMappingDslite = value;
  }
  public resetPortMappingDslite() {
    this._portMappingDslite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portMappingDsliteInput() {
    return this._portMappingDslite;
  }

  // port_mapping_nat44 - computed: false, optional: true, required: false
  private _portMappingNat44?: string; 
  public get portMappingNat44() {
    return this.getStringAttribute('port_mapping_nat44');
  }
  public set portMappingNat44(value: string) {
    this._portMappingNat44 = value;
  }
  public resetPortMappingNat44() {
    this._portMappingNat44 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portMappingNat44Input() {
    return this._portMappingNat44;
  }

  // port_mapping_nat64 - computed: false, optional: true, required: false
  private _portMappingNat64?: string; 
  public get portMappingNat64() {
    return this.getStringAttribute('port_mapping_nat64');
  }
  public set portMappingNat64(value: string) {
    this._portMappingNat64 = value;
  }
  public resetPortMappingNat64() {
    this._portMappingNat64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portMappingNat64Input() {
    return this._portMappingNat64;
  }

  // sesn_event_dslite - computed: false, optional: true, required: false
  private _sesnEventDslite?: string; 
  public get sesnEventDslite() {
    return this.getStringAttribute('sesn_event_dslite');
  }
  public set sesnEventDslite(value: string) {
    this._sesnEventDslite = value;
  }
  public resetSesnEventDslite() {
    this._sesnEventDslite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sesnEventDsliteInput() {
    return this._sesnEventDslite;
  }

  // sesn_event_fw4 - computed: false, optional: true, required: false
  private _sesnEventFw4?: string; 
  public get sesnEventFw4() {
    return this.getStringAttribute('sesn_event_fw4');
  }
  public set sesnEventFw4(value: string) {
    this._sesnEventFw4 = value;
  }
  public resetSesnEventFw4() {
    this._sesnEventFw4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sesnEventFw4Input() {
    return this._sesnEventFw4;
  }

  // sesn_event_fw6 - computed: false, optional: true, required: false
  private _sesnEventFw6?: string; 
  public get sesnEventFw6() {
    return this.getStringAttribute('sesn_event_fw6');
  }
  public set sesnEventFw6(value: string) {
    this._sesnEventFw6 = value;
  }
  public resetSesnEventFw6() {
    this._sesnEventFw6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sesnEventFw6Input() {
    return this._sesnEventFw6;
  }

  // sesn_event_nat44 - computed: false, optional: true, required: false
  private _sesnEventNat44?: string; 
  public get sesnEventNat44() {
    return this.getStringAttribute('sesn_event_nat44');
  }
  public set sesnEventNat44(value: string) {
    this._sesnEventNat44 = value;
  }
  public resetSesnEventNat44() {
    this._sesnEventNat44 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sesnEventNat44Input() {
    return this._sesnEventNat44;
  }

  // sesn_event_nat64 - computed: false, optional: true, required: false
  private _sesnEventNat64?: string; 
  public get sesnEventNat64() {
    return this.getStringAttribute('sesn_event_nat64');
  }
  public set sesnEventNat64(value: string) {
    this._sesnEventNat64 = value;
  }
  public resetSesnEventNat64() {
    this._sesnEventNat64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sesnEventNat64Input() {
    return this._sesnEventNat64;
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
}
export interface NetflowMonitorResendTemplate {
  /**
  * To resend template once for each number of records (Number of records: default is 1000, 0 means disable template resend based on record-count)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#records NetflowMonitor#records}
  */
  readonly records?: number;
  /**
  * To set time interval to resend template (number of seconds: default is 1800, 0 means disable template resend based on timeout)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#timeout NetflowMonitor#timeout}
  */
  readonly timeout?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#uuid NetflowMonitor#uuid}
  */
  readonly uuid?: string;
}

export function netflowMonitorResendTemplateToTerraform(struct?: NetflowMonitorResendTemplateOutputReference | NetflowMonitorResendTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    records: cdktf.numberToTerraform(struct!.records),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function netflowMonitorResendTemplateToHclTerraform(struct?: NetflowMonitorResendTemplateOutputReference | NetflowMonitorResendTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    records: {
      value: cdktf.numberToHclTerraform(struct!.records),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetflowMonitorResendTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetflowMonitorResendTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._records !== undefined) {
      hasAnyValues = true;
      internalValueResult.records = this._records;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetflowMonitorResendTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._records = undefined;
      this._timeout = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._records = value.records;
      this._timeout = value.timeout;
      this._uuid = value.uuid;
    }
  }

  // records - computed: false, optional: true, required: false
  private _records?: number; 
  public get records() {
    return this.getNumberAttribute('records');
  }
  public set records(value: number) {
    this._records = value;
  }
  public resetRecords() {
    this._records = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordsInput() {
    return this._records;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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
}
export interface NetflowMonitorSampleEthernetListStruct {
  /**
  * Ethernet interface number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#ifindex NetflowMonitor#ifindex}
  */
  readonly ifindex: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#uuid NetflowMonitor#uuid}
  */
  readonly uuid?: string;
}

export function netflowMonitorSampleEthernetListStructToTerraform(struct?: NetflowMonitorSampleEthernetListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ifindex: cdktf.numberToTerraform(struct!.ifindex),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function netflowMonitorSampleEthernetListStructToHclTerraform(struct?: NetflowMonitorSampleEthernetListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ifindex: {
      value: cdktf.numberToHclTerraform(struct!.ifindex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetflowMonitorSampleEthernetListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetflowMonitorSampleEthernetListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ifindex !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifindex = this._ifindex;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetflowMonitorSampleEthernetListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ifindex = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ifindex = value.ifindex;
      this._uuid = value.uuid;
    }
  }

  // ifindex - computed: false, optional: false, required: true
  private _ifindex?: number; 
  public get ifindex() {
    return this.getNumberAttribute('ifindex');
  }
  public set ifindex(value: number) {
    this._ifindex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ifindexInput() {
    return this._ifindex;
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
}

export class NetflowMonitorSampleEthernetListStructList extends cdktf.ComplexList {
  public internalValue? : NetflowMonitorSampleEthernetListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetflowMonitorSampleEthernetListStructOutputReference {
    return new NetflowMonitorSampleEthernetListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetflowMonitorSampleNatPoolListStruct {
  /**
  * Name of nat pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#pool_name NetflowMonitor#pool_name}
  */
  readonly poolName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#uuid NetflowMonitor#uuid}
  */
  readonly uuid?: string;
}

export function netflowMonitorSampleNatPoolListStructToTerraform(struct?: NetflowMonitorSampleNatPoolListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pool_name: cdktf.stringToTerraform(struct!.poolName),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function netflowMonitorSampleNatPoolListStructToHclTerraform(struct?: NetflowMonitorSampleNatPoolListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pool_name: {
      value: cdktf.stringToHclTerraform(struct!.poolName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetflowMonitorSampleNatPoolListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetflowMonitorSampleNatPoolListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._poolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolName = this._poolName;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetflowMonitorSampleNatPoolListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._poolName = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._poolName = value.poolName;
      this._uuid = value.uuid;
    }
  }

  // pool_name - computed: false, optional: false, required: true
  private _poolName?: string; 
  public get poolName() {
    return this.getStringAttribute('pool_name');
  }
  public set poolName(value: string) {
    this._poolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolNameInput() {
    return this._poolName;
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
}

export class NetflowMonitorSampleNatPoolListStructList extends cdktf.ComplexList {
  public internalValue? : NetflowMonitorSampleNatPoolListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetflowMonitorSampleNatPoolListStructOutputReference {
    return new NetflowMonitorSampleNatPoolListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetflowMonitorSampleVeListStruct {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#uuid NetflowMonitor#uuid}
  */
  readonly uuid?: string;
  /**
  * VE interface number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#ve_num NetflowMonitor#ve_num}
  */
  readonly veNum: number;
}

export function netflowMonitorSampleVeListStructToTerraform(struct?: NetflowMonitorSampleVeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    ve_num: cdktf.numberToTerraform(struct!.veNum),
  }
}


export function netflowMonitorSampleVeListStructToHclTerraform(struct?: NetflowMonitorSampleVeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ve_num: {
      value: cdktf.numberToHclTerraform(struct!.veNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetflowMonitorSampleVeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetflowMonitorSampleVeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._veNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.veNum = this._veNum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetflowMonitorSampleVeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._uuid = undefined;
      this._veNum = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._uuid = value.uuid;
      this._veNum = value.veNum;
    }
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

  // ve_num - computed: false, optional: false, required: true
  private _veNum?: number; 
  public get veNum() {
    return this.getNumberAttribute('ve_num');
  }
  public set veNum(value: number) {
    this._veNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get veNumInput() {
    return this._veNum;
  }
}

export class NetflowMonitorSampleVeListStructList extends cdktf.ComplexList {
  public internalValue? : NetflowMonitorSampleVeListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetflowMonitorSampleVeListStructOutputReference {
    return new NetflowMonitorSampleVeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetflowMonitorSample {
  /**
  * ethernet_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#ethernet_list NetflowMonitor#ethernet_list}
  */
  readonly ethernetList?: NetflowMonitorSampleEthernetListStruct[] | cdktf.IResolvable;
  /**
  * nat_pool_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#nat_pool_list NetflowMonitor#nat_pool_list}
  */
  readonly natPoolList?: NetflowMonitorSampleNatPoolListStruct[] | cdktf.IResolvable;
  /**
  * ve_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#ve_list NetflowMonitor#ve_list}
  */
  readonly veList?: NetflowMonitorSampleVeListStruct[] | cdktf.IResolvable;
}

export function netflowMonitorSampleToTerraform(struct?: NetflowMonitorSampleOutputReference | NetflowMonitorSample): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet_list: cdktf.listMapper(netflowMonitorSampleEthernetListStructToTerraform, true)(struct!.ethernetList),
    nat_pool_list: cdktf.listMapper(netflowMonitorSampleNatPoolListStructToTerraform, true)(struct!.natPoolList),
    ve_list: cdktf.listMapper(netflowMonitorSampleVeListStructToTerraform, true)(struct!.veList),
  }
}


export function netflowMonitorSampleToHclTerraform(struct?: NetflowMonitorSampleOutputReference | NetflowMonitorSample): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ethernet_list: {
      value: cdktf.listMapperHcl(netflowMonitorSampleEthernetListStructToHclTerraform, true)(struct!.ethernetList),
      isBlock: true,
      type: "list",
      storageClassType: "NetflowMonitorSampleEthernetListStructList",
    },
    nat_pool_list: {
      value: cdktf.listMapperHcl(netflowMonitorSampleNatPoolListStructToHclTerraform, true)(struct!.natPoolList),
      isBlock: true,
      type: "list",
      storageClassType: "NetflowMonitorSampleNatPoolListStructList",
    },
    ve_list: {
      value: cdktf.listMapperHcl(netflowMonitorSampleVeListStructToHclTerraform, true)(struct!.veList),
      isBlock: true,
      type: "list",
      storageClassType: "NetflowMonitorSampleVeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetflowMonitorSampleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetflowMonitorSample | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethernetList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernetList = this._ethernetList?.internalValue;
    }
    if (this._natPoolList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPoolList = this._natPoolList?.internalValue;
    }
    if (this._veList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.veList = this._veList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetflowMonitorSample | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ethernetList.internalValue = undefined;
      this._natPoolList.internalValue = undefined;
      this._veList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ethernetList.internalValue = value.ethernetList;
      this._natPoolList.internalValue = value.natPoolList;
      this._veList.internalValue = value.veList;
    }
  }

  // ethernet_list - computed: false, optional: true, required: false
  private _ethernetList = new NetflowMonitorSampleEthernetListStructList(this, "ethernet_list", false);
  public get ethernetList() {
    return this._ethernetList;
  }
  public putEthernetList(value: NetflowMonitorSampleEthernetListStruct[] | cdktf.IResolvable) {
    this._ethernetList.internalValue = value;
  }
  public resetEthernetList() {
    this._ethernetList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetListInput() {
    return this._ethernetList.internalValue;
  }

  // nat_pool_list - computed: false, optional: true, required: false
  private _natPoolList = new NetflowMonitorSampleNatPoolListStructList(this, "nat_pool_list", false);
  public get natPoolList() {
    return this._natPoolList;
  }
  public putNatPoolList(value: NetflowMonitorSampleNatPoolListStruct[] | cdktf.IResolvable) {
    this._natPoolList.internalValue = value;
  }
  public resetNatPoolList() {
    this._natPoolList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolListInput() {
    return this._natPoolList.internalValue;
  }

  // ve_list - computed: false, optional: true, required: false
  private _veList = new NetflowMonitorSampleVeListStructList(this, "ve_list", false);
  public get veList() {
    return this._veList;
  }
  public putVeList(value: NetflowMonitorSampleVeListStruct[] | cdktf.IResolvable) {
    this._veList.internalValue = value;
  }
  public resetVeList() {
    this._veList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veListInput() {
    return this._veList.internalValue;
  }
}
export interface NetflowMonitorSamplingEnable {
  /**
  * 'all': all; 'packets-sent': Sent Packets Count; 'bytes-sent': Sent Bytes Count; 'nat44-records-sent': NAT44 Flow Records Sent; 'nat44-records-sent-failure': NAT44 Flow Records Failed; 'nat64-records-sent': NAT64 Flow Records Sent; 'nat64-records-sent-failure': NAT64 Flow Records Failed; 'dslite-records-sent': Dslite Flow Records Sent; 'dslite-records-sent-failure': Dslite Flow Records Failed; 'session-event-nat44-records-sent': Nat44 Session Event Records Sent; 'session-event-nat44-records-sent-failure': Nat44 Session Event Records Failed; 'session-event-nat64-records-sent': Nat64 Session Event Records Sent; 'session-event-nat64-records-sent-failure': Nat64 Session Event Records Falied; 'session-event-dslite-records-sent': Dslite Session Event Records Sent; 'session-event-dslite-records-sent-failure': Dslite Session Event Records Failed; 'session-event-fw4-records-sent': FW4 Session Event Records Sent; 'session-event-fw4-records-sent-failure': FW4 Session Event Records Failed; 'session-event-fw6-records-sent': FW6 Session Event Records Sent; 'session-event-fw6-records-sent-failure': FW6 Session Event Records Failed; 'port-mapping-nat44-records-sent': Port Mapping Nat44 Event Records Sent; 'port-mapping-nat44-records-sent-failure': Port Mapping Nat44 Event Records Failed; 'port-mapping-nat64-records-sent': Port Mapping Nat64 Event Records Sent; 'port-mapping-nat64-records-sent-failure': Port Mapping Nat64 Event Records Failed; 'port-mapping-dslite-records-sent': Port Mapping Dslite Event Records Sent; 'port-mapping-dslite-records-sent-failure': Port Mapping Dslite Event Records failed; 'netflow-v5-records-sent': Netflow v5 Records Sent; 'netflow-v5-records-sent-failure': Netflow v5 Records Failed; 'netflow-v5-ext-records-sent': Netflow v5 Ext Records Sent; 'netflow-v5-ext-records-sent-failure': Netflow v5 Ext Records Failed; 'port-batching-nat44-records-sent': Port Batching Nat44 Records Sent; 'port-batching-nat44-records-sent-failure': Port Batching Nat44 Records Failed; 'port-batching-nat64-records-sent': Port Batching Nat64 Records Sent; 'port-batching-nat64-records-sent-failure': Port Batching Nat64 Records Failed; 'port-batching-dslite-records-sent': Port Batching Dslite Records Sent; 'port-batching-dslite-records-sent-failure': Port Batching Dslite Records Failed; 'port-batching-v2-nat44-records-sent': Port Batching V2 Nat44 Records Sent; 'port-batching-v2-nat44-records-sent-failure': Port Batching V2 Nat44 Records Failed; 'port-batching-v2-nat64-records-sent': Port Batching V2 Nat64 Records Sent; 'port-batching-v2-nat64-records-sent-failure': Port Batching V2 Nat64 Records Failed; 'port-batching-v2-dslite-records-sent': Port Batching V2 Dslite Records Sent; 'port-batching-v2-dslite-records-sent-failure': Port Batching V2 Dslite Records Falied; 'custom-session-event-nat44-creation-records-sent': Custom Nat44 Session Creation Records Sent; 'custom-session-event-nat44-creation-records-sent-failure': Custom Nat44 Session Creation Records Failed; 'custom-session-event-nat64-creation-records-sent': Custom Nat64 Session Creation Records Sent; 'custom-session-event-nat64-creation-records-sent-failure': Custom Nat64 Session Creation Records Failed; 'custom-session-event-dslite-creation-records-sent': Custom Dslite Session Creation Records Sent; 'custom-session-event-dslite-creation-records-sent-failure': Custom Dslite Session Creation Records Failed; 'custom-session-event-nat44-deletion-records-sent': Custom Nat44 Session Deletion Records Sent; 'custom-session-event-nat44-deletion-records-sent-failure': Custom Nat44 Session Deletion Records Failed; 'custom-session-event-nat64-deletion-records-sent': Custom Nat64 Session Deletion Records Sent; 'custom-session-event-nat64-deletion-records-sent-failure': Custom Nat64 Session Deletion Records Failed; 'custom-session-event-dslite-deletion-records-sent': Custom Dslite Session Deletion Records Sent; 'custom-session-event-dslite-deletion-records-sent-failure': Custom Dslite Session Deletion Records Failed; 'custom-session-event-fw4-creation-records-sent': Custom FW4 Session Creation Records Sent; 'custom-session-event-fw4-creation-records-sent-failure': Custom FW4 Session Creation Records Failed; 'custom-session-event-fw6-creation-records-sent': Custom FW6 Session Creation Records Sent; 'custom-session-event-fw6-creation-records-sent-failure': Custom FW6 Session Creation Records Failed; 'custom-session-event-fw4-deletion-records-sent': Custom FW4 Session Deletion Records Sent; 'custom-session-event-fw4-deletion-records-sent-failure': Custom FW4 Session Deletion Records Failed; 'custom-session-event-fw6-deletion-records-sent': Custom FW6 Session Deletion Records Sent; 'custom-session-event-fw6-deletion-records-sent-failure': Custom FW6 Session Deletion Records Failed; 'custom-deny-reset-event-fw4-records-sent': Custom FW4 Deny/Reset Event Records Sent; 'custom-deny-reset-event-fw4-records-sent-failure': Custom FW4 Deny/Reset Event Records Failed; 'custom-deny-reset-event-fw6-records-sent': Custom FW6 Deny/Reset Event Records Sent; 'custom-deny-reset-event-fw6-records-sent-failure': Custom FW6 Deny/Reset Event Records Failed; 'custom-port-mapping-nat44-creation-records-sent': Custom Nat44 Port Map Creation Records Sent; 'custom-port-mapping-nat44-creation-records-sent-failure': Custom Nat44 Port Map Creation Records Failed; 'custom-port-mapping-nat64-creation-records-sent': Custom Nat64 Port Map Creation Records Sent; 'custom-port-mapping-nat64-creation-records-sent-failure': Custom Nat64 Port Map Creation Records Failed; 'custom-port-mapping-dslite-creation-records-sent': Custom Dslite Port Map Creation Records Sent; 'custom-port-mapping-dslite-creation-records-sent-failure': Custom Dslite Port Map Creation Records Failed; 'custom-port-mapping-nat44-deletion-records-sent': Custom Nat44 Port Map Deletion Records Sent; 'custom-port-mapping-nat44-deletion-records-sent-failure': Custom Nat44 Port Map Deletion Records Failed; 'custom-port-mapping-nat64-deletion-records-sent': Custom Nat64 Port Map Deletion Records Sent; 'custom-port-mapping-nat64-deletion-records-sent-failure': Custom Nat64 Port Map Deletion Records Failed; 'custom-port-mapping-dslite-deletion-records-sent': Custom Dslite Port Map Deletion Records Sent; 'custom-port-mapping-dslite-deletion-records-sent-failure': Custom Dslite Port Map Deletion Records Failed; 'custom-port-batching-nat44-creation-records-sent': Custom Nat44 Port Batch Creation Records Sent; 'custom-port-batching-nat44-creation-records-sent-failure': Custom Nat44 Port Batch Creation Records Failed; 'custom-port-batching-nat64-creation-records-sent': Custom Nat64 Port Batch Creation Records Sent; 'custom-port-batching-nat64-creation-records-sent-failure': Custom Nat64 Port Batch Creation Records Failed; 'custom-port-batching-dslite-creation-records-sent': Custom Dslite Port Batch Creation Records Sent; 'custom-port-batching-dslite-creation-records-sent-failure': Custom Dslite Port Batch Creation Records Failed; 'custom-port-batching-nat44-deletion-records-sent': Custom Nat44 Port Batch Deletion Records Sent; 'custom-port-batching-nat44-deletion-records-sent-failure': Custom Nat44 Port Batch Deletion Records Failed; 'custom-port-batching-nat64-deletion-records-sent': Custom Nat64 Port Batch Deletion Records Sent; 'custom-port-batching-nat64-deletion-records-sent-failure': Custom Nat64 Port Batch Deletion Records Failed; 'custom-port-batching-dslite-deletion-records-sent': Custom Dslite Port Batch Deletion Records Sent; 'custom-port-batching-dslite-deletion-records-sent-failure': Custom Dslite Port Batch Deletion Records Failed; 'custom-port-batching-v2-nat44-creation-records-sent': Custom Nat44 Port Batch V2 Creation Records Sent;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#counters1 NetflowMonitor#counters1}
  */
  readonly counters1?: string;
  /**
  * 'custom-port-batching-v2-nat44-creation-records-sent-failure': Custom Nat44 Port Batch V2 Creation Records Failed; 'custom-port-batching-v2-nat64-creation-records-sent': Custom Nat64 Port Batch V2 Creation Records Sent; 'custom-port-batching-v2-nat64-creation-records-sent-failure': Custom Nat64 Port Batch V2 Creation Records Failed; 'custom-port-batching-v2-dslite-creation-records-sent': Custom Dslite Port Batch V2 Creation Records Sent; 'custom-port-batching-v2-dslite-creation-records-sent-failure': Custom Dslite Port Batch V2 Creation Records Failed; 'custom-port-batching-v2-nat44-deletion-records-sent': Custom Nat44 Port Batch V2 Deletion Records Sent; 'custom-port-batching-v2-nat44-deletion-records-sent-failure': Custom Nat44 Port Batch V2 Deletion Records Failed; 'custom-port-batching-v2-nat64-deletion-records-sent': Custom Nat64 Port Batch V2 Deletion Records Sent; 'custom-port-batching-v2-nat64-deletion-records-sent-failure': Custom Nat64 Port Batch V2 Deletion Records Failed; 'custom-port-batching-v2-dslite-deletion-records-sent': Custom Dslite Port Batch V2 Deletion Records Sent; 'custom-port-batching-v2-dslite-deletion-records-sent-failure': Custom Dslite Port Batch V2 Deletion Records Failed; 'reduced-logs-by-destination': Reduced Logs by Destination Protocol and Port; 'custom-gtp-c-tunnel-event-records-sent': Custom GTP C Tunnel Records Sent; 'custom-gtp-c-tunnel-event-records-sent-failure': Custom GTP C Tunnel Records Sent Failure; 'custom-gtp-u-tunnel-event-records-sent': Custom GTP U Tunnel Records Sent; 'custom-gtp-u-tunnel-event-records-sent-failure': Custom GTP U Tunnel Records Sent Failure; 'custom-gtp-deny-event-records-sent': Custom GTP Deny Records Sent; 'custom-gtp-deny-event-records-sent-failure': Custom GTP Deny Records Sent Failure; 'custom-gtp-info-event-records-sent': Custom GTP Info Records Sent; 'custom-gtp-info-event-records-sent-failure': Custom GTP Info Records Sent Failure; 'custom-fw-iddos-entry-created-records-sent': Custom FW iDDoS Entry Created Records Sent; 'custom-fw-iddos-entry-created-records-sent-failure': Custom FW iDDoS Entry Created Records Sent Failure; 'custom-fw-iddos-entry-deleted-records-sent': Custom FW iDDoS Entry Deleted Records Sent; 'custom-fw-iddos-entry-deleted-records-sent-failure': Custom FW iDDoS Entry Deleted Records Sent Failure; 'custom-fw-sesn-limit-exceeded-records-sent': Custom FW Session Limit Exceeded Records Sent; 'custom-fw-sesn-limit-exceeded-records-sent-failure': Custom FW Session Limit Exceeded Records Sent Failure; 'custom-nat-iddos-l3-entry-created-records-sent': Custom NAT iDDoS L3 Entry Created Records Sent; 'custom-nat-iddos-l3-entry-created-records-sent-failure': Custom NAT iDDoS L3 Entry Created Records Sent Failure; 'custom-nat-iddos-l3-entry-deleted-records-sent': Custom NAT iDDoS L3 Entry Deleted Records Sent; 'custom-nat-iddos-l3-entry-deleted-records-sent-failure': Custom NAT iDDoS L3 Entry Deleted Records Sent Failure; 'custom-nat-iddos-l4-entry-created-records-sent': Custom NAT iDDoS L4 Entry Created Records Sent; 'custom-nat-iddos-l4-entry-created-records-sent-failure': Custom NAT iDDoS L4 Entry Created Records Sent Failure; 'custom-nat-iddos-l4-entry-deleted-records-sent': Custom NAT iDDoS L4 Entry Deleted Records Sent; 'custom-nat-iddos-l4-entry-deleted-records-sent-failure': Custom NAT iDDoS L4 Entry Deleted Records Sent Failure; 'custom-gtp-rate-limit-periodic-records-sent': Custom GTP Rate Limit Periodic Records Sent; 'custom-gtp-rate-limit-periodic-records-sent-failure': Custom GTP Rate Limit Periodic Records Sent Failure; 'ddos-general-stat-records-sent': ddos-general-stat-records-sent; 'ddos-general-stat-records-sent-failure': ddos-general-stat-records-sent-failure; 'ddos-http-stat-records-sent': ddos-http-stat-records-sent; 'ddos-http-stat-records-sent-failure': ddos-http-stat-records-sent-failure;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#counters2 NetflowMonitor#counters2}
  */
  readonly counters2?: string;
}

export function netflowMonitorSamplingEnableToTerraform(struct?: NetflowMonitorSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
    counters2: cdktf.stringToTerraform(struct!.counters2),
  }
}


export function netflowMonitorSamplingEnableToHclTerraform(struct?: NetflowMonitorSamplingEnable | cdktf.IResolvable): any {
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
    counters2: {
      value: cdktf.stringToHclTerraform(struct!.counters2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetflowMonitorSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetflowMonitorSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    if (this._counters2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters2 = this._counters2;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetflowMonitorSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
      this._counters2 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
      this._counters2 = value.counters2;
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

  // counters2 - computed: false, optional: true, required: false
  private _counters2?: string; 
  public get counters2() {
    return this.getStringAttribute('counters2');
  }
  public set counters2(value: string) {
    this._counters2 = value;
  }
  public resetCounters2() {
    this._counters2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters2Input() {
    return this._counters2;
  }
}

export class NetflowMonitorSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : NetflowMonitorSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): NetflowMonitorSamplingEnableOutputReference {
    return new NetflowMonitorSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetflowMonitorSourceAddress {
  /**
  * Specify source IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#ip NetflowMonitor#ip}
  */
  readonly ip?: string;
  /**
  * Specify source IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#ipv6 NetflowMonitor#ipv6}
  */
  readonly ipv6?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#uuid NetflowMonitor#uuid}
  */
  readonly uuid?: string;
}

export function netflowMonitorSourceAddressToTerraform(struct?: NetflowMonitorSourceAddressOutputReference | NetflowMonitorSourceAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function netflowMonitorSourceAddressToHclTerraform(struct?: NetflowMonitorSourceAddressOutputReference | NetflowMonitorSourceAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetflowMonitorSourceAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetflowMonitorSourceAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetflowMonitorSourceAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._ipv6 = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._ipv6 = value.ipv6;
      this._uuid = value.uuid;
    }
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ipv6 - computed: false, optional: true, required: false
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor thunder_netflow_monitor}
*/
export class NetflowMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_netflow_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetflowMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetflowMonitor to import
  * @param importFromId The id of the existing NetflowMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetflowMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_netflow_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor thunder_netflow_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetflowMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: NetflowMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_netflow_monitor',
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
    this._counterPollingInterval = config.counterPollingInterval;
    this._disable = config.disable;
    this._flowTimeout = config.flowTimeout;
    this._id = config.id;
    this._name = config.name;
    this._packetCaptureTemplate = config.packetCaptureTemplate;
    this._protocol = config.protocol;
    this._scope = config.scope;
    this._sourceIpUseMgmt = config.sourceIpUseMgmt;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._customRecord.internalValue = config.customRecord;
    this._destination.internalValue = config.destination;
    this._disableLogByDestination.internalValue = config.disableLogByDestination;
    this._record.internalValue = config.record;
    this._resendTemplate.internalValue = config.resendTemplate;
    this._sample.internalValue = config.sample;
    this._samplingEnable.internalValue = config.samplingEnable;
    this._sourceAddress.internalValue = config.sourceAddress;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // counter_polling_interval - computed: false, optional: true, required: false
  private _counterPollingInterval?: number; 
  public get counterPollingInterval() {
    return this.getNumberAttribute('counter_polling_interval');
  }
  public set counterPollingInterval(value: number) {
    this._counterPollingInterval = value;
  }
  public resetCounterPollingInterval() {
    this._counterPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counterPollingIntervalInput() {
    return this._counterPollingInterval;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // flow_timeout - computed: false, optional: true, required: false
  private _flowTimeout?: number; 
  public get flowTimeout() {
    return this.getNumberAttribute('flow_timeout');
  }
  public set flowTimeout(value: number) {
    this._flowTimeout = value;
  }
  public resetFlowTimeout() {
    this._flowTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowTimeoutInput() {
    return this._flowTimeout;
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

  // packet_capture_template - computed: false, optional: true, required: false
  private _packetCaptureTemplate?: string; 
  public get packetCaptureTemplate() {
    return this.getStringAttribute('packet_capture_template');
  }
  public set packetCaptureTemplate(value: string) {
    this._packetCaptureTemplate = value;
  }
  public resetPacketCaptureTemplate() {
    this._packetCaptureTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCaptureTemplateInput() {
    return this._packetCaptureTemplate;
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

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // source_ip_use_mgmt - computed: false, optional: true, required: false
  private _sourceIpUseMgmt?: number; 
  public get sourceIpUseMgmt() {
    return this.getNumberAttribute('source_ip_use_mgmt');
  }
  public set sourceIpUseMgmt(value: number) {
    this._sourceIpUseMgmt = value;
  }
  public resetSourceIpUseMgmt() {
    this._sourceIpUseMgmt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpUseMgmtInput() {
    return this._sourceIpUseMgmt;
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

  // custom_record - computed: false, optional: true, required: false
  private _customRecord = new NetflowMonitorCustomRecordOutputReference(this, "custom_record");
  public get customRecord() {
    return this._customRecord;
  }
  public putCustomRecord(value: NetflowMonitorCustomRecord) {
    this._customRecord.internalValue = value;
  }
  public resetCustomRecord() {
    this._customRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRecordInput() {
    return this._customRecord.internalValue;
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new NetflowMonitorDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: NetflowMonitorDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // disable_log_by_destination - computed: false, optional: true, required: false
  private _disableLogByDestination = new NetflowMonitorDisableLogByDestinationOutputReference(this, "disable_log_by_destination");
  public get disableLogByDestination() {
    return this._disableLogByDestination;
  }
  public putDisableLogByDestination(value: NetflowMonitorDisableLogByDestination) {
    this._disableLogByDestination.internalValue = value;
  }
  public resetDisableLogByDestination() {
    this._disableLogByDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableLogByDestinationInput() {
    return this._disableLogByDestination.internalValue;
  }

  // record - computed: false, optional: true, required: false
  private _record = new NetflowMonitorRecordOutputReference(this, "record");
  public get record() {
    return this._record;
  }
  public putRecord(value: NetflowMonitorRecord) {
    this._record.internalValue = value;
  }
  public resetRecord() {
    this._record.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordInput() {
    return this._record.internalValue;
  }

  // resend_template - computed: false, optional: true, required: false
  private _resendTemplate = new NetflowMonitorResendTemplateOutputReference(this, "resend_template");
  public get resendTemplate() {
    return this._resendTemplate;
  }
  public putResendTemplate(value: NetflowMonitorResendTemplate) {
    this._resendTemplate.internalValue = value;
  }
  public resetResendTemplate() {
    this._resendTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resendTemplateInput() {
    return this._resendTemplate.internalValue;
  }

  // sample - computed: false, optional: true, required: false
  private _sample = new NetflowMonitorSampleOutputReference(this, "sample");
  public get sample() {
    return this._sample;
  }
  public putSample(value: NetflowMonitorSample) {
    this._sample.internalValue = value;
  }
  public resetSample() {
    this._sample.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleInput() {
    return this._sample.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new NetflowMonitorSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: NetflowMonitorSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress = new NetflowMonitorSourceAddressOutputReference(this, "source_address");
  public get sourceAddress() {
    return this._sourceAddress;
  }
  public putSourceAddress(value: NetflowMonitorSourceAddress) {
    this._sourceAddress.internalValue = value;
  }
  public resetSourceAddress() {
    this._sourceAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      counter_polling_interval: cdktf.numberToTerraform(this._counterPollingInterval),
      disable: cdktf.numberToTerraform(this._disable),
      flow_timeout: cdktf.numberToTerraform(this._flowTimeout),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      packet_capture_template: cdktf.stringToTerraform(this._packetCaptureTemplate),
      protocol: cdktf.stringToTerraform(this._protocol),
      scope: cdktf.stringToTerraform(this._scope),
      source_ip_use_mgmt: cdktf.numberToTerraform(this._sourceIpUseMgmt),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      custom_record: netflowMonitorCustomRecordToTerraform(this._customRecord.internalValue),
      destination: netflowMonitorDestinationToTerraform(this._destination.internalValue),
      disable_log_by_destination: netflowMonitorDisableLogByDestinationToTerraform(this._disableLogByDestination.internalValue),
      record: netflowMonitorRecordToTerraform(this._record.internalValue),
      resend_template: netflowMonitorResendTemplateToTerraform(this._resendTemplate.internalValue),
      sample: netflowMonitorSampleToTerraform(this._sample.internalValue),
      sampling_enable: cdktf.listMapper(netflowMonitorSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
      source_address: netflowMonitorSourceAddressToTerraform(this._sourceAddress.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      counter_polling_interval: {
        value: cdktf.numberToHclTerraform(this._counterPollingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable: {
        value: cdktf.numberToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      flow_timeout: {
        value: cdktf.numberToHclTerraform(this._flowTimeout),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packet_capture_template: {
        value: cdktf.stringToHclTerraform(this._packetCaptureTemplate),
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
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip_use_mgmt: {
        value: cdktf.numberToHclTerraform(this._sourceIpUseMgmt),
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
      custom_record: {
        value: netflowMonitorCustomRecordToHclTerraform(this._customRecord.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetflowMonitorCustomRecordList",
      },
      destination: {
        value: netflowMonitorDestinationToHclTerraform(this._destination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetflowMonitorDestinationList",
      },
      disable_log_by_destination: {
        value: netflowMonitorDisableLogByDestinationToHclTerraform(this._disableLogByDestination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetflowMonitorDisableLogByDestinationList",
      },
      record: {
        value: netflowMonitorRecordToHclTerraform(this._record.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetflowMonitorRecordList",
      },
      resend_template: {
        value: netflowMonitorResendTemplateToHclTerraform(this._resendTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetflowMonitorResendTemplateList",
      },
      sample: {
        value: netflowMonitorSampleToHclTerraform(this._sample.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetflowMonitorSampleList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(netflowMonitorSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetflowMonitorSamplingEnableList",
      },
      source_address: {
        value: netflowMonitorSourceAddressToHclTerraform(this._sourceAddress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetflowMonitorSourceAddressList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
