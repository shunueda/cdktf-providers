// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_gtp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FwGtpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Periodic Logging Frequency(In Minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_gtp#apn_log_periodicity FwGtp#apn_log_periodicity}
  */
  readonly apnLogPeriodicity?: number;
  /**
  * Class List (Class List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_gtp#apn_prefix_list FwGtp#apn_prefix_list}
  */
  readonly apnPrefixList?: string;
  /**
  * echo message timeout (minutes) (echo-timeout (default 120))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_gtp#echo_timeout FwGtp#echo_timeout}
  */
  readonly echoTimeout?: number;
  /**
  * 'enable': Enable GTP Inspection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_gtp#gtp_value FwGtp#gtp_value}
  */
  readonly gtpValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_gtp#id FwGtp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'monitor': Enable inline view-only mode; 'skip-state-checks': Enable skip stateful checks mode;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_gtp#insertion_mode FwGtp#insertion_mode}
  */
  readonly insertionMode?: string;
  /**
  * Periodic Logging Frequency(In Minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_gtp#ne_v4_log_periodicity FwGtp#ne_v4_log_periodicity}
  */
  readonly neV4LogPeriodicity?: number;
  /**
  * Periodic Logging Frequency(In Minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_gtp#ne_v6_log_periodicity FwGtp#ne_v6_log_periodicity}
  */
  readonly neV6LogPeriodicity?: number;
  /**
  * Class List (Class List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_gtp#network_element_list_v4 FwGtp#network_element_list_v4}
  */
  readonly networkElementListV4?: string;
  /**
  * Class List (Class List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_gtp#network_element_list_v6 FwGtp#network_element_list_v6}
  */
  readonly networkElementListV6?: string;
  /**
  * 'enable-log': Enable Log for Path Management;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_gtp#path_mgmt_logging FwGtp#path_mgmt_logging}
  */
  readonly pathMgmtLogging?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_gtp#uuid FwGtp#uuid}
  */
  readonly uuid?: string;
  /**
  * apn_prefix block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_gtp#apn_prefix FwGtp#apn_prefix}
  */
  readonly apnPrefix?: FwGtpApnPrefix;
  /**
  * network_element block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_gtp#network_element FwGtp#network_element}
  */
  readonly networkElement?: FwGtpNetworkElement;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_gtp#sampling_enable FwGtp#sampling_enable}
  */
  readonly samplingEnable?: FwGtpSamplingEnable[] | cdktf.IResolvable;
}
export interface FwGtpApnPrefix {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_gtp#uuid FwGtp#uuid}
  */
  readonly uuid?: string;
}

export function fwGtpApnPrefixToTerraform(struct?: FwGtpApnPrefixOutputReference | FwGtpApnPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function fwGtpApnPrefixToHclTerraform(struct?: FwGtpApnPrefixOutputReference | FwGtpApnPrefix): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwGtpApnPrefixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FwGtpApnPrefix | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwGtpApnPrefix | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
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
}
export interface FwGtpNetworkElement {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_gtp#uuid FwGtp#uuid}
  */
  readonly uuid?: string;
}

export function fwGtpNetworkElementToTerraform(struct?: FwGtpNetworkElementOutputReference | FwGtpNetworkElement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function fwGtpNetworkElementToHclTerraform(struct?: FwGtpNetworkElementOutputReference | FwGtpNetworkElement): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwGtpNetworkElementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FwGtpNetworkElement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwGtpNetworkElement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
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
}
export interface FwGtpSamplingEnable {
  /**
  * 'all': all; 'out-of-session-memory': Out of Tunnel Memory; 'no-fwd-route': No Forward Route; 'no-rev-route': No Reverse Route; 'gtp-smp-created': GTP SMP Created; 'gtp-smp-marked-deleted': GTP SMP Marked Deleted; 'gtp-smp-deleted': GTP SMP Deleted; 'smp-creation-failed': GTP-U SMP Helper Session Creation Failed; 'gtp-smp-path-created': GTP SMP PATH Created; 'gtp-smp-path-freed': GTP SMP PATH MEM freed; 'gtp-smp-path-allocated': GTP SMP PATH MEM allocated; 'gtp-smp-path-creation-failed': GTP SMP PATH creation Failed; 'gtp-smp-path-check-failed': GTP SMP PATH check Failed; 'gtp-smp-check-failed': GTP SMP check Failed; 'gtp-smp-session-count-check-failed': GTP-U session count is not in range of 0-11 in GTP-C SMP; 'gtp-c-ref-count-smp-exceeded': GTP-C session count on C-smp exceeded 2; 'gtp-u-smp-in-rml-with-sess': GTP-U smp is marked RML with U-session; 'gtp-u-pkt-fwd-conn-create': GTP-U pkt fwded while creating conn with gtp toggling; 'gtp-c-pkt-fwd-conn-create': GTP-C pkt fwded while creating conn with gtp toggling; 'gtp-echo-pkt-fwd-conn-create': GTP-ECHO pkt fwded while creating conn with gtp toggling; 'gtp-tunnel-rate-limit-entry-create-success': GTP Tunnel Level Rate Limit Entry Create Success; 'gtp-tunnel-rate-limit-entry-create-failure': GTP Tunnel Level Rate Limit Entry Create Failure; 'gtp-tunnel-rate-limit-entry-deleted': GTP Tunnel Level Rate Limit Entry Deleted; 'gtp-rate-limit-smp-created': GTP Rate Limit SMP Created; 'gtp-rate-limit-smp-freed': GTP Rate Limit SMP Freed; 'gtp-rate-limit-smp-create-failure': GTP Rate Limit SMP Create Failure; 'gtp-rate-limit-t3-ctr-create-failure': GTP Rate Limit Dynamic Counters Create Failure; 'gtp-rate-limit-entry-create-failure': GTP Rate Limit Entry Create Failure; 'gtp-echo-conn-created': GTP Echo Request Conn Created; 'gtp-echo-conn-deleted': GTP Echo Request conn Deleted; 'gtp-node-restart-echo': GTP Node Restoration due to Recovery IE in Echo; 'gtp-c-echo-path-failure': GTP-C Path Failure due to Echo; 'drop-vld-gtp-echo-out-of-state-': GTP Echo Out of State Drop; 'drop-vld-gtp-echo-ie-len-exceed-msg-len': GTP Echo IE Length Exceeds Message Length; 'gtp-create-session-request-retransmit': GTP-C Retransmitted Create Session Request; 'gtp-add-bearer-request-retransmit': GTP-C Retransmitted Add Bearer Request; 'gtp-delete-session-request-retransmit': GTP-C Retransmitted Delete Session Request; 'gtp-handover-request-retransmit': GTP Handover Request Retransmit; 'gtp-del-bearer-request-retransmit': GTP-C Retransmitted Delete Bearer Request; 'gtp-add-bearer-response-retransmit': GTP-C Retransmitted Add Bearer Response; 'gtp-create-session-request-retx-drop': GTP-C Retransmitted Create Session Request dropped; 'gtp-u-out-of-state-drop': GTP-U Out of state Drop; 'gtp-c-handover-request-out-of-state-drop': GTP-C Handover Request Out of state Drop; 'gtp-v1-c-nsapi-not-found-in-delete-req': GTPv1-C NSAPI Not Found in GTP Request; 'gtp-v2-c-bearer-not-found-in-delete-req': GTPv2-C Bearer Not Found in GTP Request; 'gtp-v2-c-bearer-not-found-in-delete-resp': GTPv2-C Bearer Not Found in GTP Response; 'gtp-multiple-handover-request': GTP Multiple Handover Request; 'gtp-rr-message-drop': GTP Message Dropped in RR Mode; 'gtp-rr-echo-message-dcmsg': GTP Echo Message Sent to home CPU in RR Mode; 'gtp-rr-c-message-dcmsg': GTP-C Message Sent to home CPU in RR Mode; 'drop-gtp-frag-or-jumbo-pkt': GTP Fragmented or JUMBO packet Drop; 'response-with-reject-cause-forwarded': GTP-C Response with Reject Cause Forwarded; 'gtp-c-message-forwarded-without-conn': GTP-C Message Forwarded without Conn; 'gtp-v0-c-ver-not-supp': GTPv0-C Version not supported indication; 'gtp-v1-c-ver-not-supp': GTPv1-C Version not supported indication; 'gtp-v2-c-ver-not-supp': GTPv2-C Version not supported indication; 'gtp-v1-extn-hdt-notif': GTPV1 Supported Extension header notification; 'gtp-u-error-ind': GTP-U Error Indication; 'gtp-c-handover-in-progress-with-conn': GTP-C mesg matching conn with HO In Progress; 'gtp-ho-in-progress-handover-request': GTP-C ho mesg matching conn with HO In Progress; 'gtp-correct-conn-ho-in-progress-handover-request': GTP-C ho mesg matching correct conn(reuse teid) with HO In Progress; 'gtp-wrong-conn-ho-in-progress-handover-request': GTP-C ho mesg matching wrong conn(new teid) with HO In Progress; 'gtp-ho-in-progress-handover-response': GTP-C ho response matching a conn with HO In Progress; 'gtp-ho-in-progress-c-mesg': GTP-C other than ho mesg matching conn with HO In Progress; 'gtp-unset-ho-flag-reuse-teid': GTP-C SGW reuse teid with ho and unset ho flag; 'gtp-refresh-c-conn-reuse-teid': GTP-C SGW reuse teid with ho and refresh old conn; 'gtp-rematch-smp-matching-conn': GTP-C rematch smp with packet matching conn; 'gtp-wrong-conn-handover-request': GTP-C ho mesg matching wrong conn(new teid) with no HO flag; 'gtp-refresh-conn-set-ho-flag-latest': GTP-C SGW refresh old conn and set ho flag on latest smp; 'gtp-c-process-pkt-drop': GTP-C process pkt drop; 'gtp-c-fwd-pkt-drop': GTP-C fwd pkt drop; 'gtp-c-rev-pkt-drop': GTP-C rev pkt drop; 'gtp-c-fwd-v1-other': GTP-C fwd v1 other messages; 'gtp-c-fwd-v2-other': GTP-C fwd v2 other messages; 'gtp-c-rev-v1-other': GTP-C rev v1 other messages; 'gtp-c-rev-v2-other': GTP-C rev v2 other messages; 'gtp-c-going-thru-fw-lookup': GTP-C mesg going thru fw lookup can be resp or l5 mesg not matching smp; 'gtp-c-conn-create-pkt-drop': GTP-C conn creation drop; 'gtp-c-pkt-fwd-conn-create-no-fteid': GTP-C pkt fwded while creating conn when no FTEID; 'gtp-inter-pu-mstr-to-bld-dcmsg-fail': GTP inter-PU dcmsg failed from Master to Blade; 'gtp-inter-pu-mstr-to-bld-dcmsg-sent': GTP inter-PU Master to Blade dcmsg sent; 'gtp-inter-pu-mstr-to-bld-dcmsg-recv': GTP inter-PU dcmsg received on blade; 'gtp-inter-pu-mstr-to-bld-query-sent': GTP inter-PU query sent from Master to Blade; 'gtp-inter-pu-mstr-to-bld-query-recv': GTP inter-PU GTP-C query received on Blade; 'gtp-inter-pu-mstr-to-bld-query-resp-sent': GTP inter-PU GTP-C query response sent from Master to Blade; 'gtp-inter-pu-bld-to-mstr-dcmsg-fail': GTP inter-PU dcmsg failed from Blade to Master; 'gtp-inter-pu-bld-to-mstr-dcmsg-sent': GTP inter-PU Blade to Master dcmsg sent; 'gtp-inter-pu-bld-to-mstr-dcmsg-recv': GTP inter-PU dcmsg received on Master; 'gtp-inter-pu-bld-to-mstr-query-sent': GTP inter-PU query sent from Blade to Master; 'gtp-inter-pu-bld-to-mstr-query-recv': GTP inter-PU GTP-C query received on Master; 'gtp-inter-pu-bld-to-mstr-query-resp-sent': GTP inter-PU GTP-C query response sent from Blade to Master; 'gtp-mstr-to-bld-query-resp-fail': GTP inter-PU dcmsg of query response failed from Master to Blade; 'gtp-bld-to-mstr-query-resp-fail': GTP inter-PU dcmsg of query response failed from Blade to Master; 'gtp-c-smp-refer-stale-idx': GTP-C SMP referring stale C-conn idx; 'gtp-smp-dec-sess-count-check-failed': GTP-U session count is 0 in GTP-C SMP; 'gtp-c-freed-conn-check': GTP-C freed conn accessed; 'gtp-c-conn-not-in-rml-when-freed': GTP-C conn not in rml when tuple is freed; 'gtp-v0-c-uplink-ingress-packets': GTPv0-C Uplink Ingress Packets; 'gtp-v0-c-uplink-egress-packets': GTPv0-C Uplink Egress Packets; 'gtp-v0-c-downlink-ingress-packets': GTPv0-C Downlink Ingress Packets; 'gtp-v0-c-downlink-egress-packets': GTPv0-C Downlink Egress Packets; 'gtp-v0-c-uplink-ingress-bytes': GTPv0-C Uplink Ingress Bytes; 'gtp-v0-c-uplink-egress-bytes': GTPv0-C Uplink Egress Bytes; 'gtp-v0-c-downlink-ingress-bytes': GTPv0-C Downlink Ingress Bytes; 'gtp-v0-c-downlink-egress-bytes': GTPv0-C Downlink Egress Bytes; 'gtp-v1-c-uplink-ingress-packets': GTPv1-C Uplink Ingress Packets; 'gtp-v1-c-uplink-egress-packets': GTPv1-C Uplink Egress Packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_gtp#counters1 FwGtp#counters1}
  */
  readonly counters1?: string;
  /**
  * 'gtp-v1-c-downlink-ingress-packets': GTPv1-C Downlink Ingress Packets; 'gtp-v1-c-downlink-egress-packets': GTPv1-C Downlink Egress Packets; 'gtp-v1-c-uplink-ingress-bytes': GTPv1-C Uplink Ingress Bytes; 'gtp-v1-c-uplink-egress-bytes': GTPv1-C Uplink Egress Bytes; 'gtp-v1-c-downlink-ingress-bytes': GTPv1-C Downlink Ingress Bytes; 'gtp-v1-c-downlink-egress-bytes': GTPv1-C Downlink Egress Bytes; 'gtp-v2-c-uplink-ingress-packets': GTPv2-C Uplink Ingress Packets; 'gtp-v2-c-uplink-egress-packets': GTPv2-C Uplink Egress Packets; 'gtp-v2-c-downlink-ingress-packets': GTPv2-C Downlink Ingress Packets; 'gtp-v2-c-downlink-egress-packets': GTPv2-C Downlink Egress Packets; 'gtp-v2-c-uplink-ingress-bytes': GTPv2-C Uplink Ingress Bytes; 'gtp-v2-c-uplink-egress-bytes': GTPv2-C Uplink Egress Bytes; 'gtp-v2-c-downlink-ingress-bytes': GTPv2-C Downlink Ingress Bytes; 'gtp-v2-c-downlink-egress-bytes': GTPv2-C Downlink Egress Bytes; 'gtp-u-uplink-ingress-packets': GTP-U Uplink Ingress Packets; 'gtp-u-uplink-egress-packets': GTP-U Uplink Egress Packets; 'gtp-u-downlink-ingress-packets': GTP-U Downlink Ingress Packets; 'gtp-u-downlink-egress-packets': GTP-U Downlink Egress Packets; 'gtp-u-uplink-ingress-bytes': GTP-U Uplink Ingress Bytes; 'gtp-u-uplink-egress-bytes': GTP-U Uplink Egress Bytes; 'gtp-u-downlink-ingress-bytes': GTP-U Downlink Ingress Bytes; 'gtp-u-downlink-egress-bytes': GTP-U Downlink Egress Bytes; 'gtp-v0-c-create-synced': GTPv0-C Tunnel Create Synced; 'gtp-v1-c-create-synced': GTPv1-C Tunnel Create Synced; 'gtp-v2-c-create-synced': GTPv2-C Tunnel Create Synced; 'gtp-v0-c-delete-synced': GTPv0-C Tunnel Delete Synced; 'gtp-v1-c-delete-synced': GTPv1-C Tunnel Delete Synced; 'gtp-v2-c-delete-synced': GTPv2-C Tunnel Delete Synced; 'gtp-v0-c-create-sync-rx': GTPv0-C Tunnel Create Sync Received on Standby; 'gtp-v1-c-create-sync-rx': GTPv1-C Tunnel Create Sync Received on Standby; 'gtp-v2-c-create-sync-rx': GTPv2-C Tunnel Create Sync Received on Standby; 'gtp-v0-c-delete-sync-rx': GTPv0-C Tunnel Delete Sync Received on Standby; 'gtp-v1-c-delete-sync-rx': GTPv1-C Tunnel Delete Sync Received on Standby; 'gtp-v2-c-delete-sync-rx': GTPv2-C Tunnel Delete Sync Received on Standby; 'gtp-handover-synced': GTP Handover Synced; 'gtp-handover-sync-rx': GTP Handover Sync Received on Standby; 'gtp-smp-add-bearer-synced': GTP SMP Add Bearer Synced; 'gtp-smp-del-bearer-synced': GTP SMP Del Bearer Synced; 'gtp-smp-additional-bearer-synced': GTP SMP Additional Bearer Synced; 'gtp-smp-add-bearer-sync-rx': GTP SMP Add Bearer Sync Received on Standby; 'gtp-smp-del-bearer-sync-rx': GTP SMP Del Bearer Sync Received on Standby; 'gtp-smp-additional-bearer-sync-rx': GTP SMP Additional Bearer Sync Received on Standby; 'gtp-add-bearer-sync-not-rx-on-standby': GTP Add Bearer Sync Not Received on Standby; 'gtp-add-bearer-sync-with-periodic-update-on-standby': GTP Bearer Added on Standby with Periodic Sync; 'gtp-delete-bearer-sync-with-periodic-update-on-standby': GTP Bearer Deleted on Standy with Periodic Sync; 'gtp-v0-c-echo-create-synced': GTPv0-C Echo Create Synced; 'gtp-v1-c-echo-create-synced': GTPv1-C Echo Create Synced; 'gtp-v2-c-echo-create-synced': GTPv2-C Echo Create Synced; 'gtp-v0-c-echo-create-sync-rx': GTPv0-C-Echo Create Sync Received on Standby; 'gtp-v1-c-echo-create-sync-rx': GTPv1-C-Echo Create Sync Received on Standby; 'gtp-v2-c-echo-create-sync-rx': GTPv2-C-Echo Create Sync Received on Standby; 'gtp-v0-c-echo-del-synced': GTPv0-C Echo Delete Synced; 'gtp-v1-c-echo-del-synced': GTPv1-C Echo Delete Synced; 'gtp-v2-c-echo-del-synced': GTPv2-C Echo Delete Synced; 'gtp-v0-c-echo-del-sync-rx': GTPv0-C-Echo Delete Sync Received on Standby; 'gtp-v1-c-echo-del-sync-rx': GTPv1-C-Echo Delete Sync Received on Standby; 'gtp-v2-c-echo-del-sync-rx': GTPv2-C-Echo Delete Sync Received on Standby; 'drop-gtp-conn-creation-standby': GTP Conn creation on Standby Drop; 'gtp-u-synced-before-control': GTP-U Tunnel synced before corresponding GTP-C; 'gtp-c-l5-synced-before-l3': GTP-C L5 conn synced before corresponding L3 GTP-C conn; 'gtp-smp-path-del-synced': GTP SMP path delete Synced; 'gtp-smp-path-del-sync-rx': GTP SMP path delete Sync Received on Standby; 'gtp-not-enabled-on-standby': GTP Not Enabled on Standby; 'gtp-ip-version-v4-v6': GTP IP versions of V4&V6 in FTEID; 'drop-gtp-ip-version-mismatch-fteid': GTP IP version mismatch for req & response FTEIDs; 'drop-gtp-ip-version-mismatch-ho-fteid': GTP IP version mismatch in Handover SGW FTEID; 'gtp-u-message-length-mismatch': GTP-U Message Length Mismatch Across Layers; 'gtp-path-message-length-mismatch': GTP-Path Message Length Mismatch Across Layers; 'drop-gtp-missing-cond-ie-bearer-ctx': Missing conditional IE in bearer context Drop; 'drop-gtp-bearer-not-found-in-resp': GTP Bearer not found in response; 'gtp-stateless-forward': GTP Stateless Forward; 'gtp-l3-conn-deleted': GTP L3 conn deleted; 'gtp-l5-conn-created': GTP L5 conn created; 'gtp-monitor-forward': GTP messages forwarded via monitor mode; 'gtp-u_inner-ip-not-present': GTP-U inner IP not present; 'gtp-ext_hdr-incorrect-length': GTP Extension header incorrect length;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_gtp#counters2 FwGtp#counters2}
  */
  readonly counters2?: string;
}

export function fwGtpSamplingEnableToTerraform(struct?: FwGtpSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
    counters2: cdktf.stringToTerraform(struct!.counters2),
  }
}


export function fwGtpSamplingEnableToHclTerraform(struct?: FwGtpSamplingEnable | cdktf.IResolvable): any {
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

export class FwGtpSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwGtpSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FwGtpSamplingEnable | cdktf.IResolvable | undefined) {
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

export class FwGtpSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : FwGtpSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): FwGtpSamplingEnableOutputReference {
    return new FwGtpSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_gtp thunder_fw_gtp}
*/
export class FwGtp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_gtp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FwGtp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FwGtp to import
  * @param importFromId The id of the existing FwGtp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_gtp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FwGtp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_gtp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_gtp thunder_fw_gtp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FwGtpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FwGtpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_gtp',
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
    this._apnLogPeriodicity = config.apnLogPeriodicity;
    this._apnPrefixList = config.apnPrefixList;
    this._echoTimeout = config.echoTimeout;
    this._gtpValue = config.gtpValue;
    this._id = config.id;
    this._insertionMode = config.insertionMode;
    this._neV4LogPeriodicity = config.neV4LogPeriodicity;
    this._neV6LogPeriodicity = config.neV6LogPeriodicity;
    this._networkElementListV4 = config.networkElementListV4;
    this._networkElementListV6 = config.networkElementListV6;
    this._pathMgmtLogging = config.pathMgmtLogging;
    this._uuid = config.uuid;
    this._apnPrefix.internalValue = config.apnPrefix;
    this._networkElement.internalValue = config.networkElement;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apn_log_periodicity - computed: false, optional: true, required: false
  private _apnLogPeriodicity?: number; 
  public get apnLogPeriodicity() {
    return this.getNumberAttribute('apn_log_periodicity');
  }
  public set apnLogPeriodicity(value: number) {
    this._apnLogPeriodicity = value;
  }
  public resetApnLogPeriodicity() {
    this._apnLogPeriodicity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apnLogPeriodicityInput() {
    return this._apnLogPeriodicity;
  }

  // apn_prefix_list - computed: false, optional: true, required: false
  private _apnPrefixList?: string; 
  public get apnPrefixList() {
    return this.getStringAttribute('apn_prefix_list');
  }
  public set apnPrefixList(value: string) {
    this._apnPrefixList = value;
  }
  public resetApnPrefixList() {
    this._apnPrefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apnPrefixListInput() {
    return this._apnPrefixList;
  }

  // echo_timeout - computed: false, optional: true, required: false
  private _echoTimeout?: number; 
  public get echoTimeout() {
    return this.getNumberAttribute('echo_timeout');
  }
  public set echoTimeout(value: number) {
    this._echoTimeout = value;
  }
  public resetEchoTimeout() {
    this._echoTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get echoTimeoutInput() {
    return this._echoTimeout;
  }

  // gtp_value - computed: false, optional: true, required: false
  private _gtpValue?: string; 
  public get gtpValue() {
    return this.getStringAttribute('gtp_value');
  }
  public set gtpValue(value: string) {
    this._gtpValue = value;
  }
  public resetGtpValue() {
    this._gtpValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpValueInput() {
    return this._gtpValue;
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

  // insertion_mode - computed: false, optional: true, required: false
  private _insertionMode?: string; 
  public get insertionMode() {
    return this.getStringAttribute('insertion_mode');
  }
  public set insertionMode(value: string) {
    this._insertionMode = value;
  }
  public resetInsertionMode() {
    this._insertionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertionModeInput() {
    return this._insertionMode;
  }

  // ne_v4_log_periodicity - computed: false, optional: true, required: false
  private _neV4LogPeriodicity?: number; 
  public get neV4LogPeriodicity() {
    return this.getNumberAttribute('ne_v4_log_periodicity');
  }
  public set neV4LogPeriodicity(value: number) {
    this._neV4LogPeriodicity = value;
  }
  public resetNeV4LogPeriodicity() {
    this._neV4LogPeriodicity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neV4LogPeriodicityInput() {
    return this._neV4LogPeriodicity;
  }

  // ne_v6_log_periodicity - computed: false, optional: true, required: false
  private _neV6LogPeriodicity?: number; 
  public get neV6LogPeriodicity() {
    return this.getNumberAttribute('ne_v6_log_periodicity');
  }
  public set neV6LogPeriodicity(value: number) {
    this._neV6LogPeriodicity = value;
  }
  public resetNeV6LogPeriodicity() {
    this._neV6LogPeriodicity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neV6LogPeriodicityInput() {
    return this._neV6LogPeriodicity;
  }

  // network_element_list_v4 - computed: false, optional: true, required: false
  private _networkElementListV4?: string; 
  public get networkElementListV4() {
    return this.getStringAttribute('network_element_list_v4');
  }
  public set networkElementListV4(value: string) {
    this._networkElementListV4 = value;
  }
  public resetNetworkElementListV4() {
    this._networkElementListV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkElementListV4Input() {
    return this._networkElementListV4;
  }

  // network_element_list_v6 - computed: false, optional: true, required: false
  private _networkElementListV6?: string; 
  public get networkElementListV6() {
    return this.getStringAttribute('network_element_list_v6');
  }
  public set networkElementListV6(value: string) {
    this._networkElementListV6 = value;
  }
  public resetNetworkElementListV6() {
    this._networkElementListV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkElementListV6Input() {
    return this._networkElementListV6;
  }

  // path_mgmt_logging - computed: false, optional: true, required: false
  private _pathMgmtLogging?: string; 
  public get pathMgmtLogging() {
    return this.getStringAttribute('path_mgmt_logging');
  }
  public set pathMgmtLogging(value: string) {
    this._pathMgmtLogging = value;
  }
  public resetPathMgmtLogging() {
    this._pathMgmtLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathMgmtLoggingInput() {
    return this._pathMgmtLogging;
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

  // apn_prefix - computed: false, optional: true, required: false
  private _apnPrefix = new FwGtpApnPrefixOutputReference(this, "apn_prefix");
  public get apnPrefix() {
    return this._apnPrefix;
  }
  public putApnPrefix(value: FwGtpApnPrefix) {
    this._apnPrefix.internalValue = value;
  }
  public resetApnPrefix() {
    this._apnPrefix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apnPrefixInput() {
    return this._apnPrefix.internalValue;
  }

  // network_element - computed: false, optional: true, required: false
  private _networkElement = new FwGtpNetworkElementOutputReference(this, "network_element");
  public get networkElement() {
    return this._networkElement;
  }
  public putNetworkElement(value: FwGtpNetworkElement) {
    this._networkElement.internalValue = value;
  }
  public resetNetworkElement() {
    this._networkElement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkElementInput() {
    return this._networkElement.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new FwGtpSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: FwGtpSamplingEnable[] | cdktf.IResolvable) {
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
      apn_log_periodicity: cdktf.numberToTerraform(this._apnLogPeriodicity),
      apn_prefix_list: cdktf.stringToTerraform(this._apnPrefixList),
      echo_timeout: cdktf.numberToTerraform(this._echoTimeout),
      gtp_value: cdktf.stringToTerraform(this._gtpValue),
      id: cdktf.stringToTerraform(this._id),
      insertion_mode: cdktf.stringToTerraform(this._insertionMode),
      ne_v4_log_periodicity: cdktf.numberToTerraform(this._neV4LogPeriodicity),
      ne_v6_log_periodicity: cdktf.numberToTerraform(this._neV6LogPeriodicity),
      network_element_list_v4: cdktf.stringToTerraform(this._networkElementListV4),
      network_element_list_v6: cdktf.stringToTerraform(this._networkElementListV6),
      path_mgmt_logging: cdktf.stringToTerraform(this._pathMgmtLogging),
      uuid: cdktf.stringToTerraform(this._uuid),
      apn_prefix: fwGtpApnPrefixToTerraform(this._apnPrefix.internalValue),
      network_element: fwGtpNetworkElementToTerraform(this._networkElement.internalValue),
      sampling_enable: cdktf.listMapper(fwGtpSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apn_log_periodicity: {
        value: cdktf.numberToHclTerraform(this._apnLogPeriodicity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      apn_prefix_list: {
        value: cdktf.stringToHclTerraform(this._apnPrefixList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      echo_timeout: {
        value: cdktf.numberToHclTerraform(this._echoTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_value: {
        value: cdktf.stringToHclTerraform(this._gtpValue),
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
      insertion_mode: {
        value: cdktf.stringToHclTerraform(this._insertionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ne_v4_log_periodicity: {
        value: cdktf.numberToHclTerraform(this._neV4LogPeriodicity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ne_v6_log_periodicity: {
        value: cdktf.numberToHclTerraform(this._neV6LogPeriodicity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      network_element_list_v4: {
        value: cdktf.stringToHclTerraform(this._networkElementListV4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_element_list_v6: {
        value: cdktf.stringToHclTerraform(this._networkElementListV6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path_mgmt_logging: {
        value: cdktf.stringToHclTerraform(this._pathMgmtLogging),
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
      apn_prefix: {
        value: fwGtpApnPrefixToHclTerraform(this._apnPrefix.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwGtpApnPrefixList",
      },
      network_element: {
        value: fwGtpNetworkElementToHclTerraform(this._networkElement.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwGtpNetworkElementList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(fwGtpSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwGtpSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
