// https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsServerMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Action to be performed on monitor IT Automation templates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#actions DnsServerMonitor#actions}
  */
  readonly actions?: { [key: string]: string };
  /**
  * Interval at which your DNS server has to be monitored. Default value is 5 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#check_frequency DnsServerMonitor#check_frequency}
  */
  readonly checkFrequency?: string;
  /**
  * Enable this attribute to auto discover and set up monitoring for all the related resources for the domain_name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#deep_discovery DnsServerMonitor#deep_discovery}
  */
  readonly deepDiscovery?: boolean | cdktf.IResolvable;
  /**
  * List of dependent resource IDs. Suppress alert when dependent monitor(s) is down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#dependency_resource_ids DnsServerMonitor#dependency_resource_ids}
  */
  readonly dependencyResourceIds?: string[];
  /**
  * Display Name for the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#display_name DnsServerMonitor#display_name}
  */
  readonly displayName: string;
  /**
  * DNS Name Server to be monitored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#dns_host DnsServerMonitor#dns_host}
  */
  readonly dnsHost: string;
  /**
  * Port for DNS access. Default value: 53.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#dns_port DnsServerMonitor#dns_port}
  */
  readonly dnsPort?: string;
  /**
  * Pass dnssec parameter to enable Site24x7 to validate DNS responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#dnssec DnsServerMonitor#dnssec}
  */
  readonly dnssec?: boolean | cdktf.IResolvable;
  /**
  * Domain name to be resolved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#domain_name DnsServerMonitor#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#id DnsServerMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Location profile to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#location_profile_id DnsServerMonitor#location_profile_id}
  */
  readonly locationProfileId?: string;
  /**
  * Name of the location profile to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#location_profile_name DnsServerMonitor#location_profile_name}
  */
  readonly locationProfileName?: string;
  /**
  * DNS Server Lookup Type Constants. See https://www.site24x7.com/help/api/#dns_lookup_type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#lookup_type DnsServerMonitor#lookup_type}
  */
  readonly lookupType?: number;
  /**
  * List of monitor groups to which the monitor has to be associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#monitor_groups DnsServerMonitor#monitor_groups}
  */
  readonly monitorGroups?: string[];
  /**
  * Notification profile to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#notification_profile_id DnsServerMonitor#notification_profile_id}
  */
  readonly notificationProfileId?: string;
  /**
  * Name of the notification profile to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#notification_profile_name DnsServerMonitor#notification_profile_name}
  */
  readonly notificationProfileName?: string;
  /**
  * if user_group_ids is not choosen,	On-Call Schedule of your choice.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#on_call_schedule_id DnsServerMonitor#on_call_schedule_id}
  */
  readonly onCallScheduleId?: string;
  /**
  * List of tag IDs to be associated to the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#tag_ids DnsServerMonitor#tag_ids}
  */
  readonly tagIds?: string[];
  /**
  * List of tag names to be associated to the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#tag_names DnsServerMonitor#tag_names}
  */
  readonly tagNames?: string[];
  /**
  * List of Third Party Service IDs to be associated to the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#third_party_service_ids DnsServerMonitor#third_party_service_ids}
  */
  readonly thirdPartyServiceIds?: string[];
  /**
  * Threshold profile to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#threshold_profile_id DnsServerMonitor#threshold_profile_id}
  */
  readonly thresholdProfileId?: string;
  /**
  * Timeout for connecting to your DNS server. Default value is 10. Range 1 - 45.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#timeout DnsServerMonitor#timeout}
  */
  readonly timeout?: number;
  /**
  * Monitoring is performed over IPv6 from supported locations. IPv6 locations do not fall back to IPv4 on failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#use_ipv6 DnsServerMonitor#use_ipv6}
  */
  readonly useIpv6?: boolean | cdktf.IResolvable;
  /**
  * List of user groups to be notified when the monitor is down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#user_group_ids DnsServerMonitor#user_group_ids}
  */
  readonly userGroupIds?: string[];
  /**
  * Name of the user groups to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#user_group_names DnsServerMonitor#user_group_names}
  */
  readonly userGroupNames?: string[];
  /**
  * search_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#search_config DnsServerMonitor#search_config}
  */
  readonly searchConfig?: DnsServerMonitorSearchConfig[] | cdktf.IResolvable;
}
export interface DnsServerMonitorSearchConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#addr DnsServerMonitor#addr}
  */
  readonly addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#admin DnsServerMonitor#admin}
  */
  readonly admin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#cert_auth DnsServerMonitor#cert_auth}
  */
  readonly certAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#expt DnsServerMonitor#expt}
  */
  readonly expt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#flg DnsServerMonitor#flg}
  */
  readonly flg?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#halg DnsServerMonitor#halg}
  */
  readonly halg?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#hash DnsServerMonitor#hash}
  */
  readonly hash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#kalg DnsServerMonitor#kalg}
  */
  readonly kalg?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#key DnsServerMonitor#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#kid DnsServerMonitor#kid}
  */
  readonly kid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#lookup_type DnsServerMonitor#lookup_type}
  */
  readonly lookupType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#mttl DnsServerMonitor#mttl}
  */
  readonly mttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#pns DnsServerMonitor#pns}
  */
  readonly pns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#port DnsServerMonitor#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#priority DnsServerMonitor#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#prtcl DnsServerMonitor#prtcl}
  */
  readonly prtcl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#rcvd DnsServerMonitor#rcvd}
  */
  readonly rcvd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#rff DnsServerMonitor#rff}
  */
  readonly rff?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#rtf DnsServerMonitor#rtf}
  */
  readonly rtf?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#serial DnsServerMonitor#serial}
  */
  readonly serial?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#tag DnsServerMonitor#tag}
  */
  readonly tag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#target DnsServerMonitor#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#ttl DnsServerMonitor#ttl}
  */
  readonly ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#ttlo DnsServerMonitor#ttlo}
  */
  readonly ttlo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#wt DnsServerMonitor#wt}
  */
  readonly wt?: number;
}

export function dnsServerMonitorSearchConfigToTerraform(struct?: DnsServerMonitorSearchConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    admin: cdktf.stringToTerraform(struct!.admin),
    cert_auth: cdktf.stringToTerraform(struct!.certAuth),
    expt: cdktf.numberToTerraform(struct!.expt),
    flg: cdktf.numberToTerraform(struct!.flg),
    halg: cdktf.numberToTerraform(struct!.halg),
    hash: cdktf.stringToTerraform(struct!.hash),
    kalg: cdktf.numberToTerraform(struct!.kalg),
    key: cdktf.stringToTerraform(struct!.key),
    kid: cdktf.numberToTerraform(struct!.kid),
    lookup_type: cdktf.stringToTerraform(struct!.lookupType),
    mttl: cdktf.numberToTerraform(struct!.mttl),
    pns: cdktf.stringToTerraform(struct!.pns),
    port: cdktf.numberToTerraform(struct!.port),
    priority: cdktf.numberToTerraform(struct!.priority),
    prtcl: cdktf.numberToTerraform(struct!.prtcl),
    rcvd: cdktf.numberToTerraform(struct!.rcvd),
    rff: cdktf.numberToTerraform(struct!.rff),
    rtf: cdktf.numberToTerraform(struct!.rtf),
    serial: cdktf.numberToTerraform(struct!.serial),
    tag: cdktf.stringToTerraform(struct!.tag),
    target: cdktf.stringToTerraform(struct!.target),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    ttlo: cdktf.numberToTerraform(struct!.ttlo),
    wt: cdktf.numberToTerraform(struct!.wt),
  }
}


export function dnsServerMonitorSearchConfigToHclTerraform(struct?: DnsServerMonitorSearchConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin: {
      value: cdktf.stringToHclTerraform(struct!.admin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_auth: {
      value: cdktf.stringToHclTerraform(struct!.certAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expt: {
      value: cdktf.numberToHclTerraform(struct!.expt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    flg: {
      value: cdktf.numberToHclTerraform(struct!.flg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    halg: {
      value: cdktf.numberToHclTerraform(struct!.halg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hash: {
      value: cdktf.stringToHclTerraform(struct!.hash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kalg: {
      value: cdktf.numberToHclTerraform(struct!.kalg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kid: {
      value: cdktf.numberToHclTerraform(struct!.kid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lookup_type: {
      value: cdktf.stringToHclTerraform(struct!.lookupType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mttl: {
      value: cdktf.numberToHclTerraform(struct!.mttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pns: {
      value: cdktf.stringToHclTerraform(struct!.pns),
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
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prtcl: {
      value: cdktf.numberToHclTerraform(struct!.prtcl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcvd: {
      value: cdktf.numberToHclTerraform(struct!.rcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rff: {
      value: cdktf.numberToHclTerraform(struct!.rff),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rtf: {
      value: cdktf.numberToHclTerraform(struct!.rtf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    serial: {
      value: cdktf.numberToHclTerraform(struct!.serial),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttlo: {
      value: cdktf.numberToHclTerraform(struct!.ttlo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wt: {
      value: cdktf.numberToHclTerraform(struct!.wt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsServerMonitorSearchConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsServerMonitorSearchConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._admin !== undefined) {
      hasAnyValues = true;
      internalValueResult.admin = this._admin;
    }
    if (this._certAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.certAuth = this._certAuth;
    }
    if (this._expt !== undefined) {
      hasAnyValues = true;
      internalValueResult.expt = this._expt;
    }
    if (this._flg !== undefined) {
      hasAnyValues = true;
      internalValueResult.flg = this._flg;
    }
    if (this._halg !== undefined) {
      hasAnyValues = true;
      internalValueResult.halg = this._halg;
    }
    if (this._hash !== undefined) {
      hasAnyValues = true;
      internalValueResult.hash = this._hash;
    }
    if (this._kalg !== undefined) {
      hasAnyValues = true;
      internalValueResult.kalg = this._kalg;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._kid !== undefined) {
      hasAnyValues = true;
      internalValueResult.kid = this._kid;
    }
    if (this._lookupType !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookupType = this._lookupType;
    }
    if (this._mttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.mttl = this._mttl;
    }
    if (this._pns !== undefined) {
      hasAnyValues = true;
      internalValueResult.pns = this._pns;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._prtcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.prtcl = this._prtcl;
    }
    if (this._rcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvd = this._rcvd;
    }
    if (this._rff !== undefined) {
      hasAnyValues = true;
      internalValueResult.rff = this._rff;
    }
    if (this._rtf !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtf = this._rtf;
    }
    if (this._serial !== undefined) {
      hasAnyValues = true;
      internalValueResult.serial = this._serial;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._ttlo !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttlo = this._ttlo;
    }
    if (this._wt !== undefined) {
      hasAnyValues = true;
      internalValueResult.wt = this._wt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsServerMonitorSearchConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._admin = undefined;
      this._certAuth = undefined;
      this._expt = undefined;
      this._flg = undefined;
      this._halg = undefined;
      this._hash = undefined;
      this._kalg = undefined;
      this._key = undefined;
      this._kid = undefined;
      this._lookupType = undefined;
      this._mttl = undefined;
      this._pns = undefined;
      this._port = undefined;
      this._priority = undefined;
      this._prtcl = undefined;
      this._rcvd = undefined;
      this._rff = undefined;
      this._rtf = undefined;
      this._serial = undefined;
      this._tag = undefined;
      this._target = undefined;
      this._ttl = undefined;
      this._ttlo = undefined;
      this._wt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._admin = value.admin;
      this._certAuth = value.certAuth;
      this._expt = value.expt;
      this._flg = value.flg;
      this._halg = value.halg;
      this._hash = value.hash;
      this._kalg = value.kalg;
      this._key = value.key;
      this._kid = value.kid;
      this._lookupType = value.lookupType;
      this._mttl = value.mttl;
      this._pns = value.pns;
      this._port = value.port;
      this._priority = value.priority;
      this._prtcl = value.prtcl;
      this._rcvd = value.rcvd;
      this._rff = value.rff;
      this._rtf = value.rtf;
      this._serial = value.serial;
      this._tag = value.tag;
      this._target = value.target;
      this._ttl = value.ttl;
      this._ttlo = value.ttlo;
      this._wt = value.wt;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // admin - computed: false, optional: true, required: false
  private _admin?: string; 
  public get admin() {
    return this.getStringAttribute('admin');
  }
  public set admin(value: string) {
    this._admin = value;
  }
  public resetAdmin() {
    this._admin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminInput() {
    return this._admin;
  }

  // cert_auth - computed: false, optional: true, required: false
  private _certAuth?: string; 
  public get certAuth() {
    return this.getStringAttribute('cert_auth');
  }
  public set certAuth(value: string) {
    this._certAuth = value;
  }
  public resetCertAuth() {
    this._certAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certAuthInput() {
    return this._certAuth;
  }

  // expt - computed: false, optional: true, required: false
  private _expt?: number; 
  public get expt() {
    return this.getNumberAttribute('expt');
  }
  public set expt(value: number) {
    this._expt = value;
  }
  public resetExpt() {
    this._expt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exptInput() {
    return this._expt;
  }

  // flg - computed: false, optional: true, required: false
  private _flg?: number; 
  public get flg() {
    return this.getNumberAttribute('flg');
  }
  public set flg(value: number) {
    this._flg = value;
  }
  public resetFlg() {
    this._flg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flgInput() {
    return this._flg;
  }

  // halg - computed: false, optional: true, required: false
  private _halg?: number; 
  public get halg() {
    return this.getNumberAttribute('halg');
  }
  public set halg(value: number) {
    this._halg = value;
  }
  public resetHalg() {
    this._halg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get halgInput() {
    return this._halg;
  }

  // hash - computed: false, optional: true, required: false
  private _hash?: string; 
  public get hash() {
    return this.getStringAttribute('hash');
  }
  public set hash(value: string) {
    this._hash = value;
  }
  public resetHash() {
    this._hash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash;
  }

  // kalg - computed: false, optional: true, required: false
  private _kalg?: number; 
  public get kalg() {
    return this.getNumberAttribute('kalg');
  }
  public set kalg(value: number) {
    this._kalg = value;
  }
  public resetKalg() {
    this._kalg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kalgInput() {
    return this._kalg;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // kid - computed: false, optional: true, required: false
  private _kid?: number; 
  public get kid() {
    return this.getNumberAttribute('kid');
  }
  public set kid(value: number) {
    this._kid = value;
  }
  public resetKid() {
    this._kid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kidInput() {
    return this._kid;
  }

  // lookup_type - computed: false, optional: false, required: true
  private _lookupType?: string; 
  public get lookupType() {
    return this.getStringAttribute('lookup_type');
  }
  public set lookupType(value: string) {
    this._lookupType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupTypeInput() {
    return this._lookupType;
  }

  // mttl - computed: false, optional: true, required: false
  private _mttl?: number; 
  public get mttl() {
    return this.getNumberAttribute('mttl');
  }
  public set mttl(value: number) {
    this._mttl = value;
  }
  public resetMttl() {
    this._mttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mttlInput() {
    return this._mttl;
  }

  // pns - computed: false, optional: true, required: false
  private _pns?: string; 
  public get pns() {
    return this.getStringAttribute('pns');
  }
  public set pns(value: string) {
    this._pns = value;
  }
  public resetPns() {
    this._pns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pnsInput() {
    return this._pns;
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

  // prtcl - computed: false, optional: true, required: false
  private _prtcl?: number; 
  public get prtcl() {
    return this.getNumberAttribute('prtcl');
  }
  public set prtcl(value: number) {
    this._prtcl = value;
  }
  public resetPrtcl() {
    this._prtcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prtclInput() {
    return this._prtcl;
  }

  // rcvd - computed: false, optional: true, required: false
  private _rcvd?: number; 
  public get rcvd() {
    return this.getNumberAttribute('rcvd');
  }
  public set rcvd(value: number) {
    this._rcvd = value;
  }
  public resetRcvd() {
    this._rcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvdInput() {
    return this._rcvd;
  }

  // rff - computed: false, optional: true, required: false
  private _rff?: number; 
  public get rff() {
    return this.getNumberAttribute('rff');
  }
  public set rff(value: number) {
    this._rff = value;
  }
  public resetRff() {
    this._rff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rffInput() {
    return this._rff;
  }

  // rtf - computed: false, optional: true, required: false
  private _rtf?: number; 
  public get rtf() {
    return this.getNumberAttribute('rtf');
  }
  public set rtf(value: number) {
    this._rtf = value;
  }
  public resetRtf() {
    this._rtf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtfInput() {
    return this._rtf;
  }

  // serial - computed: false, optional: true, required: false
  private _serial?: number; 
  public get serial() {
    return this.getNumberAttribute('serial');
  }
  public set serial(value: number) {
    this._serial = value;
  }
  public resetSerial() {
    this._serial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // ttlo - computed: false, optional: true, required: false
  private _ttlo?: number; 
  public get ttlo() {
    return this.getNumberAttribute('ttlo');
  }
  public set ttlo(value: number) {
    this._ttlo = value;
  }
  public resetTtlo() {
    this._ttlo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttloInput() {
    return this._ttlo;
  }

  // wt - computed: false, optional: true, required: false
  private _wt?: number; 
  public get wt() {
    return this.getNumberAttribute('wt');
  }
  public set wt(value: number) {
    this._wt = value;
  }
  public resetWt() {
    this._wt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wtInput() {
    return this._wt;
  }
}

export class DnsServerMonitorSearchConfigList extends cdktf.ComplexList {
  public internalValue? : DnsServerMonitorSearchConfig[] | cdktf.IResolvable

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
  public get(index: number): DnsServerMonitorSearchConfigOutputReference {
    return new DnsServerMonitorSearchConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor site24x7_dns_server_monitor}
*/
export class DnsServerMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "site24x7_dns_server_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsServerMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsServerMonitor to import
  * @param importFromId The id of the existing DnsServerMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsServerMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "site24x7_dns_server_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/dns_server_monitor site24x7_dns_server_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsServerMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: DnsServerMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'site24x7_dns_server_monitor',
      terraformGeneratorMetadata: {
        providerName: 'site24x7',
        providerVersion: '2.0.3',
        providerVersionConstraint: '2.0.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actions = config.actions;
    this._checkFrequency = config.checkFrequency;
    this._deepDiscovery = config.deepDiscovery;
    this._dependencyResourceIds = config.dependencyResourceIds;
    this._displayName = config.displayName;
    this._dnsHost = config.dnsHost;
    this._dnsPort = config.dnsPort;
    this._dnssec = config.dnssec;
    this._domainName = config.domainName;
    this._id = config.id;
    this._locationProfileId = config.locationProfileId;
    this._locationProfileName = config.locationProfileName;
    this._lookupType = config.lookupType;
    this._monitorGroups = config.monitorGroups;
    this._notificationProfileId = config.notificationProfileId;
    this._notificationProfileName = config.notificationProfileName;
    this._onCallScheduleId = config.onCallScheduleId;
    this._tagIds = config.tagIds;
    this._tagNames = config.tagNames;
    this._thirdPartyServiceIds = config.thirdPartyServiceIds;
    this._thresholdProfileId = config.thresholdProfileId;
    this._timeout = config.timeout;
    this._useIpv6 = config.useIpv6;
    this._userGroupIds = config.userGroupIds;
    this._userGroupNames = config.userGroupNames;
    this._searchConfig.internalValue = config.searchConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions - computed: false, optional: true, required: false
  private _actions?: { [key: string]: string }; 
  public get actions() {
    return this.getStringMapAttribute('actions');
  }
  public set actions(value: { [key: string]: string }) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // check_frequency - computed: false, optional: true, required: false
  private _checkFrequency?: string; 
  public get checkFrequency() {
    return this.getStringAttribute('check_frequency');
  }
  public set checkFrequency(value: string) {
    this._checkFrequency = value;
  }
  public resetCheckFrequency() {
    this._checkFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkFrequencyInput() {
    return this._checkFrequency;
  }

  // deep_discovery - computed: false, optional: true, required: false
  private _deepDiscovery?: boolean | cdktf.IResolvable; 
  public get deepDiscovery() {
    return this.getBooleanAttribute('deep_discovery');
  }
  public set deepDiscovery(value: boolean | cdktf.IResolvable) {
    this._deepDiscovery = value;
  }
  public resetDeepDiscovery() {
    this._deepDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deepDiscoveryInput() {
    return this._deepDiscovery;
  }

  // dependency_resource_ids - computed: false, optional: true, required: false
  private _dependencyResourceIds?: string[]; 
  public get dependencyResourceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('dependency_resource_ids'));
  }
  public set dependencyResourceIds(value: string[]) {
    this._dependencyResourceIds = value;
  }
  public resetDependencyResourceIds() {
    this._dependencyResourceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyResourceIdsInput() {
    return this._dependencyResourceIds;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // dns_host - computed: false, optional: false, required: true
  private _dnsHost?: string; 
  public get dnsHost() {
    return this.getStringAttribute('dns_host');
  }
  public set dnsHost(value: string) {
    this._dnsHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsHostInput() {
    return this._dnsHost;
  }

  // dns_port - computed: false, optional: true, required: false
  private _dnsPort?: string; 
  public get dnsPort() {
    return this.getStringAttribute('dns_port');
  }
  public set dnsPort(value: string) {
    this._dnsPort = value;
  }
  public resetDnsPort() {
    this._dnsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPortInput() {
    return this._dnsPort;
  }

  // dnssec - computed: false, optional: true, required: false
  private _dnssec?: boolean | cdktf.IResolvable; 
  public get dnssec() {
    return this.getBooleanAttribute('dnssec');
  }
  public set dnssec(value: boolean | cdktf.IResolvable) {
    this._dnssec = value;
  }
  public resetDnssec() {
    this._dnssec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecInput() {
    return this._dnssec;
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
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

  // location_profile_id - computed: true, optional: true, required: false
  private _locationProfileId?: string; 
  public get locationProfileId() {
    return this.getStringAttribute('location_profile_id');
  }
  public set locationProfileId(value: string) {
    this._locationProfileId = value;
  }
  public resetLocationProfileId() {
    this._locationProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationProfileIdInput() {
    return this._locationProfileId;
  }

  // location_profile_name - computed: true, optional: true, required: false
  private _locationProfileName?: string; 
  public get locationProfileName() {
    return this.getStringAttribute('location_profile_name');
  }
  public set locationProfileName(value: string) {
    this._locationProfileName = value;
  }
  public resetLocationProfileName() {
    this._locationProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationProfileNameInput() {
    return this._locationProfileName;
  }

  // lookup_type - computed: false, optional: true, required: false
  private _lookupType?: number; 
  public get lookupType() {
    return this.getNumberAttribute('lookup_type');
  }
  public set lookupType(value: number) {
    this._lookupType = value;
  }
  public resetLookupType() {
    this._lookupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupTypeInput() {
    return this._lookupType;
  }

  // monitor_groups - computed: false, optional: true, required: false
  private _monitorGroups?: string[]; 
  public get monitorGroups() {
    return this.getListAttribute('monitor_groups');
  }
  public set monitorGroups(value: string[]) {
    this._monitorGroups = value;
  }
  public resetMonitorGroups() {
    this._monitorGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorGroupsInput() {
    return this._monitorGroups;
  }

  // notification_profile_id - computed: true, optional: true, required: false
  private _notificationProfileId?: string; 
  public get notificationProfileId() {
    return this.getStringAttribute('notification_profile_id');
  }
  public set notificationProfileId(value: string) {
    this._notificationProfileId = value;
  }
  public resetNotificationProfileId() {
    this._notificationProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationProfileIdInput() {
    return this._notificationProfileId;
  }

  // notification_profile_name - computed: false, optional: true, required: false
  private _notificationProfileName?: string; 
  public get notificationProfileName() {
    return this.getStringAttribute('notification_profile_name');
  }
  public set notificationProfileName(value: string) {
    this._notificationProfileName = value;
  }
  public resetNotificationProfileName() {
    this._notificationProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationProfileNameInput() {
    return this._notificationProfileName;
  }

  // on_call_schedule_id - computed: false, optional: true, required: false
  private _onCallScheduleId?: string; 
  public get onCallScheduleId() {
    return this.getStringAttribute('on_call_schedule_id');
  }
  public set onCallScheduleId(value: string) {
    this._onCallScheduleId = value;
  }
  public resetOnCallScheduleId() {
    this._onCallScheduleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onCallScheduleIdInput() {
    return this._onCallScheduleId;
  }

  // tag_ids - computed: true, optional: true, required: false
  private _tagIds?: string[]; 
  public get tagIds() {
    return cdktf.Fn.tolist(this.getListAttribute('tag_ids'));
  }
  public set tagIds(value: string[]) {
    this._tagIds = value;
  }
  public resetTagIds() {
    this._tagIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagIdsInput() {
    return this._tagIds;
  }

  // tag_names - computed: false, optional: true, required: false
  private _tagNames?: string[]; 
  public get tagNames() {
    return this.getListAttribute('tag_names');
  }
  public set tagNames(value: string[]) {
    this._tagNames = value;
  }
  public resetTagNames() {
    this._tagNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNamesInput() {
    return this._tagNames;
  }

  // third_party_service_ids - computed: false, optional: true, required: false
  private _thirdPartyServiceIds?: string[]; 
  public get thirdPartyServiceIds() {
    return this.getListAttribute('third_party_service_ids');
  }
  public set thirdPartyServiceIds(value: string[]) {
    this._thirdPartyServiceIds = value;
  }
  public resetThirdPartyServiceIds() {
    this._thirdPartyServiceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdPartyServiceIdsInput() {
    return this._thirdPartyServiceIds;
  }

  // threshold_profile_id - computed: true, optional: true, required: false
  private _thresholdProfileId?: string; 
  public get thresholdProfileId() {
    return this.getStringAttribute('threshold_profile_id');
  }
  public set thresholdProfileId(value: string) {
    this._thresholdProfileId = value;
  }
  public resetThresholdProfileId() {
    this._thresholdProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdProfileIdInput() {
    return this._thresholdProfileId;
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

  // use_ipv6 - computed: false, optional: true, required: false
  private _useIpv6?: boolean | cdktf.IResolvable; 
  public get useIpv6() {
    return this.getBooleanAttribute('use_ipv6');
  }
  public set useIpv6(value: boolean | cdktf.IResolvable) {
    this._useIpv6 = value;
  }
  public resetUseIpv6() {
    this._useIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIpv6Input() {
    return this._useIpv6;
  }

  // user_group_ids - computed: true, optional: true, required: false
  private _userGroupIds?: string[]; 
  public get userGroupIds() {
    return this.getListAttribute('user_group_ids');
  }
  public set userGroupIds(value: string[]) {
    this._userGroupIds = value;
  }
  public resetUserGroupIds() {
    this._userGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupIdsInput() {
    return this._userGroupIds;
  }

  // user_group_names - computed: false, optional: true, required: false
  private _userGroupNames?: string[]; 
  public get userGroupNames() {
    return this.getListAttribute('user_group_names');
  }
  public set userGroupNames(value: string[]) {
    this._userGroupNames = value;
  }
  public resetUserGroupNames() {
    this._userGroupNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupNamesInput() {
    return this._userGroupNames;
  }

  // search_config - computed: false, optional: true, required: false
  private _searchConfig = new DnsServerMonitorSearchConfigList(this, "search_config", true);
  public get searchConfig() {
    return this._searchConfig;
  }
  public putSearchConfig(value: DnsServerMonitorSearchConfig[] | cdktf.IResolvable) {
    this._searchConfig.internalValue = value;
  }
  public resetSearchConfig() {
    this._searchConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchConfigInput() {
    return this._searchConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actions: cdktf.hashMapper(cdktf.stringToTerraform)(this._actions),
      check_frequency: cdktf.stringToTerraform(this._checkFrequency),
      deep_discovery: cdktf.booleanToTerraform(this._deepDiscovery),
      dependency_resource_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dependencyResourceIds),
      display_name: cdktf.stringToTerraform(this._displayName),
      dns_host: cdktf.stringToTerraform(this._dnsHost),
      dns_port: cdktf.stringToTerraform(this._dnsPort),
      dnssec: cdktf.booleanToTerraform(this._dnssec),
      domain_name: cdktf.stringToTerraform(this._domainName),
      id: cdktf.stringToTerraform(this._id),
      location_profile_id: cdktf.stringToTerraform(this._locationProfileId),
      location_profile_name: cdktf.stringToTerraform(this._locationProfileName),
      lookup_type: cdktf.numberToTerraform(this._lookupType),
      monitor_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._monitorGroups),
      notification_profile_id: cdktf.stringToTerraform(this._notificationProfileId),
      notification_profile_name: cdktf.stringToTerraform(this._notificationProfileName),
      on_call_schedule_id: cdktf.stringToTerraform(this._onCallScheduleId),
      tag_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagIds),
      tag_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagNames),
      third_party_service_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._thirdPartyServiceIds),
      threshold_profile_id: cdktf.stringToTerraform(this._thresholdProfileId),
      timeout: cdktf.numberToTerraform(this._timeout),
      use_ipv6: cdktf.booleanToTerraform(this._useIpv6),
      user_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userGroupIds),
      user_group_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userGroupNames),
      search_config: cdktf.listMapper(dnsServerMonitorSearchConfigToTerraform, true)(this._searchConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      actions: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._actions),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      check_frequency: {
        value: cdktf.stringToHclTerraform(this._checkFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deep_discovery: {
        value: cdktf.booleanToHclTerraform(this._deepDiscovery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dependency_resource_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dependencyResourceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_host: {
        value: cdktf.stringToHclTerraform(this._dnsHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_port: {
        value: cdktf.stringToHclTerraform(this._dnsPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dnssec: {
        value: cdktf.booleanToHclTerraform(this._dnssec),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
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
      location_profile_id: {
        value: cdktf.stringToHclTerraform(this._locationProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location_profile_name: {
        value: cdktf.stringToHclTerraform(this._locationProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lookup_type: {
        value: cdktf.numberToHclTerraform(this._lookupType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitor_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._monitorGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      notification_profile_id: {
        value: cdktf.stringToHclTerraform(this._notificationProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_profile_name: {
        value: cdktf.stringToHclTerraform(this._notificationProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_call_schedule_id: {
        value: cdktf.stringToHclTerraform(this._onCallScheduleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tagIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tag_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tagNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      third_party_service_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._thirdPartyServiceIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      threshold_profile_id: {
        value: cdktf.stringToHclTerraform(this._thresholdProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_ipv6: {
        value: cdktf.booleanToHclTerraform(this._useIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      user_group_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userGroupNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      search_config: {
        value: cdktf.listMapperHcl(dnsServerMonitorSearchConfigToHclTerraform, true)(this._searchConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DnsServerMonitorSearchConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
