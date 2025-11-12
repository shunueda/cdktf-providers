// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFirewallMmsprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#adom ObjectFirewallMmsprofile#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#avnotificationtable ObjectFirewallMmsprofile#avnotificationtable}
  */
  readonly avnotificationtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#bwordtable ObjectFirewallMmsprofile#bwordtable}
  */
  readonly bwordtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#carrier_endpoint_prefix ObjectFirewallMmsprofile#carrier_endpoint_prefix}
  */
  readonly carrierEndpointPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#carrier_endpoint_prefix_range_max ObjectFirewallMmsprofile#carrier_endpoint_prefix_range_max}
  */
  readonly carrierEndpointPrefixRangeMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#carrier_endpoint_prefix_range_min ObjectFirewallMmsprofile#carrier_endpoint_prefix_range_min}
  */
  readonly carrierEndpointPrefixRangeMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#carrier_endpoint_prefix_string ObjectFirewallMmsprofile#carrier_endpoint_prefix_string}
  */
  readonly carrierEndpointPrefixString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#carrierendpointbwltable ObjectFirewallMmsprofile#carrierendpointbwltable}
  */
  readonly carrierendpointbwltable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#comment ObjectFirewallMmsprofile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#dynamic_sort_subtable ObjectFirewallMmsprofile#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#extended_utm_log ObjectFirewallMmsprofile#extended_utm_log}
  */
  readonly extendedUtmLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#id ObjectFirewallMmsprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#mm1 ObjectFirewallMmsprofile#mm1}
  */
  readonly mm1?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#mm1_addr_hdr ObjectFirewallMmsprofile#mm1_addr_hdr}
  */
  readonly mm1AddrHdr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#mm1_addr_source ObjectFirewallMmsprofile#mm1_addr_source}
  */
  readonly mm1AddrSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#mm1_convert_hex ObjectFirewallMmsprofile#mm1_convert_hex}
  */
  readonly mm1ConvertHex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#mm1_outbreak_prevention ObjectFirewallMmsprofile#mm1_outbreak_prevention}
  */
  readonly mm1OutbreakPrevention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#mm1_retr_dupe ObjectFirewallMmsprofile#mm1_retr_dupe}
  */
  readonly mm1RetrDupe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#mm1_retrieve_scan ObjectFirewallMmsprofile#mm1_retrieve_scan}
  */
  readonly mm1RetrieveScan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#mm1comfortamount ObjectFirewallMmsprofile#mm1comfortamount}
  */
  readonly mm1Comfortamount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#mm1comfortinterval ObjectFirewallMmsprofile#mm1comfortinterval}
  */
  readonly mm1Comfortinterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#mm1oversizelimit ObjectFirewallMmsprofile#mm1oversizelimit}
  */
  readonly mm1Oversizelimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#mm3 ObjectFirewallMmsprofile#mm3}
  */
  readonly mm3?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#mm3_outbreak_prevention ObjectFirewallMmsprofile#mm3_outbreak_prevention}
  */
  readonly mm3OutbreakPrevention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#mm3oversizelimit ObjectFirewallMmsprofile#mm3oversizelimit}
  */
  readonly mm3Oversizelimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#mm4 ObjectFirewallMmsprofile#mm4}
  */
  readonly mm4?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#mm4_outbreak_prevention ObjectFirewallMmsprofile#mm4_outbreak_prevention}
  */
  readonly mm4OutbreakPrevention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#mm4oversizelimit ObjectFirewallMmsprofile#mm4oversizelimit}
  */
  readonly mm4Oversizelimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#mm7 ObjectFirewallMmsprofile#mm7}
  */
  readonly mm7?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#mm7_addr_hdr ObjectFirewallMmsprofile#mm7_addr_hdr}
  */
  readonly mm7AddrHdr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#mm7_addr_source ObjectFirewallMmsprofile#mm7_addr_source}
  */
  readonly mm7AddrSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#mm7_convert_hex ObjectFirewallMmsprofile#mm7_convert_hex}
  */
  readonly mm7ConvertHex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#mm7_outbreak_prevention ObjectFirewallMmsprofile#mm7_outbreak_prevention}
  */
  readonly mm7OutbreakPrevention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#mm7comfortamount ObjectFirewallMmsprofile#mm7comfortamount}
  */
  readonly mm7Comfortamount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#mm7comfortinterval ObjectFirewallMmsprofile#mm7comfortinterval}
  */
  readonly mm7Comfortinterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#mm7oversizelimit ObjectFirewallMmsprofile#mm7oversizelimit}
  */
  readonly mm7Oversizelimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#mms_antispam_mass_log ObjectFirewallMmsprofile#mms_antispam_mass_log}
  */
  readonly mmsAntispamMassLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#mms_av_block_log ObjectFirewallMmsprofile#mms_av_block_log}
  */
  readonly mmsAvBlockLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#mms_av_oversize_log ObjectFirewallMmsprofile#mms_av_oversize_log}
  */
  readonly mmsAvOversizeLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#mms_av_virus_log ObjectFirewallMmsprofile#mms_av_virus_log}
  */
  readonly mmsAvVirusLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#mms_carrier_endpoint_filter_log ObjectFirewallMmsprofile#mms_carrier_endpoint_filter_log}
  */
  readonly mmsCarrierEndpointFilterLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#mms_checksum_log ObjectFirewallMmsprofile#mms_checksum_log}
  */
  readonly mmsChecksumLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#mms_checksum_table ObjectFirewallMmsprofile#mms_checksum_table}
  */
  readonly mmsChecksumTable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#mms_notification_log ObjectFirewallMmsprofile#mms_notification_log}
  */
  readonly mmsNotificationLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#mms_web_content_log ObjectFirewallMmsprofile#mms_web_content_log}
  */
  readonly mmsWebContentLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#mmsbwordthreshold ObjectFirewallMmsprofile#mmsbwordthreshold}
  */
  readonly mmsbwordthreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#name ObjectFirewallMmsprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#remove_blocked_const_length ObjectFirewallMmsprofile#remove_blocked_const_length}
  */
  readonly removeBlockedConstLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#replacemsg_group ObjectFirewallMmsprofile#replacemsg_group}
  */
  readonly replacemsgGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#scopetype ObjectFirewallMmsprofile#scopetype}
  */
  readonly scopetype?: string;
  /**
  * dupe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#dupe ObjectFirewallMmsprofile#dupe}
  */
  readonly dupe?: ObjectFirewallMmsprofileDupe;
  /**
  * flood block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#flood ObjectFirewallMmsprofile#flood}
  */
  readonly flood?: ObjectFirewallMmsprofileFlood;
  /**
  * notif_msisdn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#notif_msisdn ObjectFirewallMmsprofile#notif_msisdn}
  */
  readonly notifMsisdn?: ObjectFirewallMmsprofileNotifMsisdn[] | cdktf.IResolvable;
  /**
  * notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#notification ObjectFirewallMmsprofile#notification}
  */
  readonly notification?: ObjectFirewallMmsprofileNotification;
  /**
  * outbreak_prevention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#outbreak_prevention ObjectFirewallMmsprofile#outbreak_prevention}
  */
  readonly outbreakPrevention?: ObjectFirewallMmsprofileOutbreakPrevention;
}
export interface ObjectFirewallMmsprofileDupe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#action1 ObjectFirewallMmsprofile#action1}
  */
  readonly action1?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#action2 ObjectFirewallMmsprofile#action2}
  */
  readonly action2?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#action3 ObjectFirewallMmsprofile#action3}
  */
  readonly action3?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#block_time1 ObjectFirewallMmsprofile#block_time1}
  */
  readonly blockTime1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#block_time2 ObjectFirewallMmsprofile#block_time2}
  */
  readonly blockTime2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#block_time3 ObjectFirewallMmsprofile#block_time3}
  */
  readonly blockTime3?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#limit1 ObjectFirewallMmsprofile#limit1}
  */
  readonly limit1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#limit2 ObjectFirewallMmsprofile#limit2}
  */
  readonly limit2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#limit3 ObjectFirewallMmsprofile#limit3}
  */
  readonly limit3?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#protocol ObjectFirewallMmsprofile#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#status1 ObjectFirewallMmsprofile#status1}
  */
  readonly status1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#status2 ObjectFirewallMmsprofile#status2}
  */
  readonly status2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#status3 ObjectFirewallMmsprofile#status3}
  */
  readonly status3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#window1 ObjectFirewallMmsprofile#window1}
  */
  readonly window1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#window2 ObjectFirewallMmsprofile#window2}
  */
  readonly window2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#window3 ObjectFirewallMmsprofile#window3}
  */
  readonly window3?: number;
}

export function objectFirewallMmsprofileDupeToTerraform(struct?: ObjectFirewallMmsprofileDupeOutputReference | ObjectFirewallMmsprofileDupe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action1: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.action1),
    action2: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.action2),
    action3: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.action3),
    block_time1: cdktf.numberToTerraform(struct!.blockTime1),
    block_time2: cdktf.numberToTerraform(struct!.blockTime2),
    block_time3: cdktf.numberToTerraform(struct!.blockTime3),
    limit1: cdktf.numberToTerraform(struct!.limit1),
    limit2: cdktf.numberToTerraform(struct!.limit2),
    limit3: cdktf.numberToTerraform(struct!.limit3),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    status1: cdktf.stringToTerraform(struct!.status1),
    status2: cdktf.stringToTerraform(struct!.status2),
    status3: cdktf.stringToTerraform(struct!.status3),
    window1: cdktf.numberToTerraform(struct!.window1),
    window2: cdktf.numberToTerraform(struct!.window2),
    window3: cdktf.numberToTerraform(struct!.window3),
  }
}


export function objectFirewallMmsprofileDupeToHclTerraform(struct?: ObjectFirewallMmsprofileDupeOutputReference | ObjectFirewallMmsprofileDupe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action1: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.action1),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    action2: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.action2),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    action3: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.action3),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    block_time1: {
      value: cdktf.numberToHclTerraform(struct!.blockTime1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    block_time2: {
      value: cdktf.numberToHclTerraform(struct!.blockTime2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    block_time3: {
      value: cdktf.numberToHclTerraform(struct!.blockTime3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit1: {
      value: cdktf.numberToHclTerraform(struct!.limit1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit2: {
      value: cdktf.numberToHclTerraform(struct!.limit2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit3: {
      value: cdktf.numberToHclTerraform(struct!.limit3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status1: {
      value: cdktf.stringToHclTerraform(struct!.status1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status2: {
      value: cdktf.stringToHclTerraform(struct!.status2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status3: {
      value: cdktf.stringToHclTerraform(struct!.status3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    window1: {
      value: cdktf.numberToHclTerraform(struct!.window1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window2: {
      value: cdktf.numberToHclTerraform(struct!.window2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window3: {
      value: cdktf.numberToHclTerraform(struct!.window3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallMmsprofileDupeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectFirewallMmsprofileDupe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.action1 = this._action1;
    }
    if (this._action2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.action2 = this._action2;
    }
    if (this._action3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.action3 = this._action3;
    }
    if (this._blockTime1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockTime1 = this._blockTime1;
    }
    if (this._blockTime2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockTime2 = this._blockTime2;
    }
    if (this._blockTime3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockTime3 = this._blockTime3;
    }
    if (this._limit1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit1 = this._limit1;
    }
    if (this._limit2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit2 = this._limit2;
    }
    if (this._limit3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit3 = this._limit3;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._status1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status1 = this._status1;
    }
    if (this._status2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status2 = this._status2;
    }
    if (this._status3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status3 = this._status3;
    }
    if (this._window1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.window1 = this._window1;
    }
    if (this._window2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.window2 = this._window2;
    }
    if (this._window3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.window3 = this._window3;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallMmsprofileDupe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action1 = undefined;
      this._action2 = undefined;
      this._action3 = undefined;
      this._blockTime1 = undefined;
      this._blockTime2 = undefined;
      this._blockTime3 = undefined;
      this._limit1 = undefined;
      this._limit2 = undefined;
      this._limit3 = undefined;
      this._protocol = undefined;
      this._status1 = undefined;
      this._status2 = undefined;
      this._status3 = undefined;
      this._window1 = undefined;
      this._window2 = undefined;
      this._window3 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action1 = value.action1;
      this._action2 = value.action2;
      this._action3 = value.action3;
      this._blockTime1 = value.blockTime1;
      this._blockTime2 = value.blockTime2;
      this._blockTime3 = value.blockTime3;
      this._limit1 = value.limit1;
      this._limit2 = value.limit2;
      this._limit3 = value.limit3;
      this._protocol = value.protocol;
      this._status1 = value.status1;
      this._status2 = value.status2;
      this._status3 = value.status3;
      this._window1 = value.window1;
      this._window2 = value.window2;
      this._window3 = value.window3;
    }
  }

  // action1 - computed: true, optional: true, required: false
  private _action1?: string[]; 
  public get action1() {
    return cdktf.Fn.tolist(this.getListAttribute('action1'));
  }
  public set action1(value: string[]) {
    this._action1 = value;
  }
  public resetAction1() {
    this._action1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get action1Input() {
    return this._action1;
  }

  // action2 - computed: true, optional: true, required: false
  private _action2?: string[]; 
  public get action2() {
    return cdktf.Fn.tolist(this.getListAttribute('action2'));
  }
  public set action2(value: string[]) {
    this._action2 = value;
  }
  public resetAction2() {
    this._action2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get action2Input() {
    return this._action2;
  }

  // action3 - computed: true, optional: true, required: false
  private _action3?: string[]; 
  public get action3() {
    return cdktf.Fn.tolist(this.getListAttribute('action3'));
  }
  public set action3(value: string[]) {
    this._action3 = value;
  }
  public resetAction3() {
    this._action3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get action3Input() {
    return this._action3;
  }

  // block_time1 - computed: false, optional: true, required: false
  private _blockTime1?: number; 
  public get blockTime1() {
    return this.getNumberAttribute('block_time1');
  }
  public set blockTime1(value: number) {
    this._blockTime1 = value;
  }
  public resetBlockTime1() {
    this._blockTime1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockTime1Input() {
    return this._blockTime1;
  }

  // block_time2 - computed: false, optional: true, required: false
  private _blockTime2?: number; 
  public get blockTime2() {
    return this.getNumberAttribute('block_time2');
  }
  public set blockTime2(value: number) {
    this._blockTime2 = value;
  }
  public resetBlockTime2() {
    this._blockTime2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockTime2Input() {
    return this._blockTime2;
  }

  // block_time3 - computed: false, optional: true, required: false
  private _blockTime3?: number; 
  public get blockTime3() {
    return this.getNumberAttribute('block_time3');
  }
  public set blockTime3(value: number) {
    this._blockTime3 = value;
  }
  public resetBlockTime3() {
    this._blockTime3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockTime3Input() {
    return this._blockTime3;
  }

  // limit1 - computed: false, optional: true, required: false
  private _limit1?: number; 
  public get limit1() {
    return this.getNumberAttribute('limit1');
  }
  public set limit1(value: number) {
    this._limit1 = value;
  }
  public resetLimit1() {
    this._limit1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limit1Input() {
    return this._limit1;
  }

  // limit2 - computed: false, optional: true, required: false
  private _limit2?: number; 
  public get limit2() {
    return this.getNumberAttribute('limit2');
  }
  public set limit2(value: number) {
    this._limit2 = value;
  }
  public resetLimit2() {
    this._limit2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limit2Input() {
    return this._limit2;
  }

  // limit3 - computed: false, optional: true, required: false
  private _limit3?: number; 
  public get limit3() {
    return this.getNumberAttribute('limit3');
  }
  public set limit3(value: number) {
    this._limit3 = value;
  }
  public resetLimit3() {
    this._limit3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limit3Input() {
    return this._limit3;
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

  // status1 - computed: false, optional: true, required: false
  private _status1?: string; 
  public get status1() {
    return this.getStringAttribute('status1');
  }
  public set status1(value: string) {
    this._status1 = value;
  }
  public resetStatus1() {
    this._status1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status1Input() {
    return this._status1;
  }

  // status2 - computed: false, optional: true, required: false
  private _status2?: string; 
  public get status2() {
    return this.getStringAttribute('status2');
  }
  public set status2(value: string) {
    this._status2 = value;
  }
  public resetStatus2() {
    this._status2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status2Input() {
    return this._status2;
  }

  // status3 - computed: false, optional: true, required: false
  private _status3?: string; 
  public get status3() {
    return this.getStringAttribute('status3');
  }
  public set status3(value: string) {
    this._status3 = value;
  }
  public resetStatus3() {
    this._status3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status3Input() {
    return this._status3;
  }

  // window1 - computed: false, optional: true, required: false
  private _window1?: number; 
  public get window1() {
    return this.getNumberAttribute('window1');
  }
  public set window1(value: number) {
    this._window1 = value;
  }
  public resetWindow1() {
    this._window1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get window1Input() {
    return this._window1;
  }

  // window2 - computed: false, optional: true, required: false
  private _window2?: number; 
  public get window2() {
    return this.getNumberAttribute('window2');
  }
  public set window2(value: number) {
    this._window2 = value;
  }
  public resetWindow2() {
    this._window2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get window2Input() {
    return this._window2;
  }

  // window3 - computed: false, optional: true, required: false
  private _window3?: number; 
  public get window3() {
    return this.getNumberAttribute('window3');
  }
  public set window3(value: number) {
    this._window3 = value;
  }
  public resetWindow3() {
    this._window3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get window3Input() {
    return this._window3;
  }
}
export interface ObjectFirewallMmsprofileFlood {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#action1 ObjectFirewallMmsprofile#action1}
  */
  readonly action1?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#action2 ObjectFirewallMmsprofile#action2}
  */
  readonly action2?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#action3 ObjectFirewallMmsprofile#action3}
  */
  readonly action3?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#block_time1 ObjectFirewallMmsprofile#block_time1}
  */
  readonly blockTime1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#block_time2 ObjectFirewallMmsprofile#block_time2}
  */
  readonly blockTime2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#block_time3 ObjectFirewallMmsprofile#block_time3}
  */
  readonly blockTime3?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#limit1 ObjectFirewallMmsprofile#limit1}
  */
  readonly limit1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#limit2 ObjectFirewallMmsprofile#limit2}
  */
  readonly limit2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#limit3 ObjectFirewallMmsprofile#limit3}
  */
  readonly limit3?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#protocol ObjectFirewallMmsprofile#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#status1 ObjectFirewallMmsprofile#status1}
  */
  readonly status1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#status2 ObjectFirewallMmsprofile#status2}
  */
  readonly status2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#status3 ObjectFirewallMmsprofile#status3}
  */
  readonly status3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#window1 ObjectFirewallMmsprofile#window1}
  */
  readonly window1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#window2 ObjectFirewallMmsprofile#window2}
  */
  readonly window2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#window3 ObjectFirewallMmsprofile#window3}
  */
  readonly window3?: number;
}

export function objectFirewallMmsprofileFloodToTerraform(struct?: ObjectFirewallMmsprofileFloodOutputReference | ObjectFirewallMmsprofileFlood): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action1: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.action1),
    action2: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.action2),
    action3: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.action3),
    block_time1: cdktf.numberToTerraform(struct!.blockTime1),
    block_time2: cdktf.numberToTerraform(struct!.blockTime2),
    block_time3: cdktf.numberToTerraform(struct!.blockTime3),
    limit1: cdktf.numberToTerraform(struct!.limit1),
    limit2: cdktf.numberToTerraform(struct!.limit2),
    limit3: cdktf.numberToTerraform(struct!.limit3),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    status1: cdktf.stringToTerraform(struct!.status1),
    status2: cdktf.stringToTerraform(struct!.status2),
    status3: cdktf.stringToTerraform(struct!.status3),
    window1: cdktf.numberToTerraform(struct!.window1),
    window2: cdktf.numberToTerraform(struct!.window2),
    window3: cdktf.numberToTerraform(struct!.window3),
  }
}


export function objectFirewallMmsprofileFloodToHclTerraform(struct?: ObjectFirewallMmsprofileFloodOutputReference | ObjectFirewallMmsprofileFlood): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action1: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.action1),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    action2: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.action2),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    action3: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.action3),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    block_time1: {
      value: cdktf.numberToHclTerraform(struct!.blockTime1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    block_time2: {
      value: cdktf.numberToHclTerraform(struct!.blockTime2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    block_time3: {
      value: cdktf.numberToHclTerraform(struct!.blockTime3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit1: {
      value: cdktf.numberToHclTerraform(struct!.limit1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit2: {
      value: cdktf.numberToHclTerraform(struct!.limit2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit3: {
      value: cdktf.numberToHclTerraform(struct!.limit3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status1: {
      value: cdktf.stringToHclTerraform(struct!.status1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status2: {
      value: cdktf.stringToHclTerraform(struct!.status2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status3: {
      value: cdktf.stringToHclTerraform(struct!.status3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    window1: {
      value: cdktf.numberToHclTerraform(struct!.window1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window2: {
      value: cdktf.numberToHclTerraform(struct!.window2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window3: {
      value: cdktf.numberToHclTerraform(struct!.window3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallMmsprofileFloodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectFirewallMmsprofileFlood | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.action1 = this._action1;
    }
    if (this._action2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.action2 = this._action2;
    }
    if (this._action3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.action3 = this._action3;
    }
    if (this._blockTime1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockTime1 = this._blockTime1;
    }
    if (this._blockTime2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockTime2 = this._blockTime2;
    }
    if (this._blockTime3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockTime3 = this._blockTime3;
    }
    if (this._limit1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit1 = this._limit1;
    }
    if (this._limit2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit2 = this._limit2;
    }
    if (this._limit3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit3 = this._limit3;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._status1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status1 = this._status1;
    }
    if (this._status2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status2 = this._status2;
    }
    if (this._status3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status3 = this._status3;
    }
    if (this._window1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.window1 = this._window1;
    }
    if (this._window2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.window2 = this._window2;
    }
    if (this._window3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.window3 = this._window3;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallMmsprofileFlood | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action1 = undefined;
      this._action2 = undefined;
      this._action3 = undefined;
      this._blockTime1 = undefined;
      this._blockTime2 = undefined;
      this._blockTime3 = undefined;
      this._limit1 = undefined;
      this._limit2 = undefined;
      this._limit3 = undefined;
      this._protocol = undefined;
      this._status1 = undefined;
      this._status2 = undefined;
      this._status3 = undefined;
      this._window1 = undefined;
      this._window2 = undefined;
      this._window3 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action1 = value.action1;
      this._action2 = value.action2;
      this._action3 = value.action3;
      this._blockTime1 = value.blockTime1;
      this._blockTime2 = value.blockTime2;
      this._blockTime3 = value.blockTime3;
      this._limit1 = value.limit1;
      this._limit2 = value.limit2;
      this._limit3 = value.limit3;
      this._protocol = value.protocol;
      this._status1 = value.status1;
      this._status2 = value.status2;
      this._status3 = value.status3;
      this._window1 = value.window1;
      this._window2 = value.window2;
      this._window3 = value.window3;
    }
  }

  // action1 - computed: true, optional: true, required: false
  private _action1?: string[]; 
  public get action1() {
    return cdktf.Fn.tolist(this.getListAttribute('action1'));
  }
  public set action1(value: string[]) {
    this._action1 = value;
  }
  public resetAction1() {
    this._action1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get action1Input() {
    return this._action1;
  }

  // action2 - computed: true, optional: true, required: false
  private _action2?: string[]; 
  public get action2() {
    return cdktf.Fn.tolist(this.getListAttribute('action2'));
  }
  public set action2(value: string[]) {
    this._action2 = value;
  }
  public resetAction2() {
    this._action2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get action2Input() {
    return this._action2;
  }

  // action3 - computed: true, optional: true, required: false
  private _action3?: string[]; 
  public get action3() {
    return cdktf.Fn.tolist(this.getListAttribute('action3'));
  }
  public set action3(value: string[]) {
    this._action3 = value;
  }
  public resetAction3() {
    this._action3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get action3Input() {
    return this._action3;
  }

  // block_time1 - computed: false, optional: true, required: false
  private _blockTime1?: number; 
  public get blockTime1() {
    return this.getNumberAttribute('block_time1');
  }
  public set blockTime1(value: number) {
    this._blockTime1 = value;
  }
  public resetBlockTime1() {
    this._blockTime1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockTime1Input() {
    return this._blockTime1;
  }

  // block_time2 - computed: false, optional: true, required: false
  private _blockTime2?: number; 
  public get blockTime2() {
    return this.getNumberAttribute('block_time2');
  }
  public set blockTime2(value: number) {
    this._blockTime2 = value;
  }
  public resetBlockTime2() {
    this._blockTime2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockTime2Input() {
    return this._blockTime2;
  }

  // block_time3 - computed: false, optional: true, required: false
  private _blockTime3?: number; 
  public get blockTime3() {
    return this.getNumberAttribute('block_time3');
  }
  public set blockTime3(value: number) {
    this._blockTime3 = value;
  }
  public resetBlockTime3() {
    this._blockTime3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockTime3Input() {
    return this._blockTime3;
  }

  // limit1 - computed: false, optional: true, required: false
  private _limit1?: number; 
  public get limit1() {
    return this.getNumberAttribute('limit1');
  }
  public set limit1(value: number) {
    this._limit1 = value;
  }
  public resetLimit1() {
    this._limit1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limit1Input() {
    return this._limit1;
  }

  // limit2 - computed: false, optional: true, required: false
  private _limit2?: number; 
  public get limit2() {
    return this.getNumberAttribute('limit2');
  }
  public set limit2(value: number) {
    this._limit2 = value;
  }
  public resetLimit2() {
    this._limit2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limit2Input() {
    return this._limit2;
  }

  // limit3 - computed: false, optional: true, required: false
  private _limit3?: number; 
  public get limit3() {
    return this.getNumberAttribute('limit3');
  }
  public set limit3(value: number) {
    this._limit3 = value;
  }
  public resetLimit3() {
    this._limit3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limit3Input() {
    return this._limit3;
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

  // status1 - computed: false, optional: true, required: false
  private _status1?: string; 
  public get status1() {
    return this.getStringAttribute('status1');
  }
  public set status1(value: string) {
    this._status1 = value;
  }
  public resetStatus1() {
    this._status1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status1Input() {
    return this._status1;
  }

  // status2 - computed: false, optional: true, required: false
  private _status2?: string; 
  public get status2() {
    return this.getStringAttribute('status2');
  }
  public set status2(value: string) {
    this._status2 = value;
  }
  public resetStatus2() {
    this._status2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status2Input() {
    return this._status2;
  }

  // status3 - computed: false, optional: true, required: false
  private _status3?: string; 
  public get status3() {
    return this.getStringAttribute('status3');
  }
  public set status3(value: string) {
    this._status3 = value;
  }
  public resetStatus3() {
    this._status3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status3Input() {
    return this._status3;
  }

  // window1 - computed: false, optional: true, required: false
  private _window1?: number; 
  public get window1() {
    return this.getNumberAttribute('window1');
  }
  public set window1(value: number) {
    this._window1 = value;
  }
  public resetWindow1() {
    this._window1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get window1Input() {
    return this._window1;
  }

  // window2 - computed: false, optional: true, required: false
  private _window2?: number; 
  public get window2() {
    return this.getNumberAttribute('window2');
  }
  public set window2(value: number) {
    this._window2 = value;
  }
  public resetWindow2() {
    this._window2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get window2Input() {
    return this._window2;
  }

  // window3 - computed: false, optional: true, required: false
  private _window3?: number; 
  public get window3() {
    return this.getNumberAttribute('window3');
  }
  public set window3(value: number) {
    this._window3 = value;
  }
  public resetWindow3() {
    this._window3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get window3Input() {
    return this._window3;
  }
}
export interface ObjectFirewallMmsprofileNotifMsisdn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#msisdn ObjectFirewallMmsprofile#msisdn}
  */
  readonly msisdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#threshold ObjectFirewallMmsprofile#threshold}
  */
  readonly threshold?: string[];
}

export function objectFirewallMmsprofileNotifMsisdnToTerraform(struct?: ObjectFirewallMmsprofileNotifMsisdn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    msisdn: cdktf.stringToTerraform(struct!.msisdn),
    threshold: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.threshold),
  }
}


export function objectFirewallMmsprofileNotifMsisdnToHclTerraform(struct?: ObjectFirewallMmsprofileNotifMsisdn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    msisdn: {
      value: cdktf.stringToHclTerraform(struct!.msisdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.threshold),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallMmsprofileNotifMsisdnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallMmsprofileNotifMsisdn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._msisdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.msisdn = this._msisdn;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallMmsprofileNotifMsisdn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._msisdn = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._msisdn = value.msisdn;
      this._threshold = value.threshold;
    }
  }

  // msisdn - computed: false, optional: true, required: false
  private _msisdn?: string; 
  public get msisdn() {
    return this.getStringAttribute('msisdn');
  }
  public set msisdn(value: string) {
    this._msisdn = value;
  }
  public resetMsisdn() {
    this._msisdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msisdnInput() {
    return this._msisdn;
  }

  // threshold - computed: true, optional: true, required: false
  private _threshold?: string[]; 
  public get threshold() {
    return cdktf.Fn.tolist(this.getListAttribute('threshold'));
  }
  public set threshold(value: string[]) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}

export class ObjectFirewallMmsprofileNotifMsisdnList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallMmsprofileNotifMsisdn[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallMmsprofileNotifMsisdnOutputReference {
    return new ObjectFirewallMmsprofileNotifMsisdnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFirewallMmsprofileNotification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#alert_int ObjectFirewallMmsprofile#alert_int}
  */
  readonly alertInt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#alert_int_mode ObjectFirewallMmsprofile#alert_int_mode}
  */
  readonly alertIntMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#alert_src_msisdn ObjectFirewallMmsprofile#alert_src_msisdn}
  */
  readonly alertSrcMsisdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#alert_status ObjectFirewallMmsprofile#alert_status}
  */
  readonly alertStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#bword_int ObjectFirewallMmsprofile#bword_int}
  */
  readonly bwordInt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#bword_int_mode ObjectFirewallMmsprofile#bword_int_mode}
  */
  readonly bwordIntMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#bword_status ObjectFirewallMmsprofile#bword_status}
  */
  readonly bwordStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#carrier_endpoint_bwl_int ObjectFirewallMmsprofile#carrier_endpoint_bwl_int}
  */
  readonly carrierEndpointBwlInt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#carrier_endpoint_bwl_int_mode ObjectFirewallMmsprofile#carrier_endpoint_bwl_int_mode}
  */
  readonly carrierEndpointBwlIntMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#carrier_endpoint_bwl_status ObjectFirewallMmsprofile#carrier_endpoint_bwl_status}
  */
  readonly carrierEndpointBwlStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#days_allowed ObjectFirewallMmsprofile#days_allowed}
  */
  readonly daysAllowed?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#detect_server ObjectFirewallMmsprofile#detect_server}
  */
  readonly detectServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#dupe_int ObjectFirewallMmsprofile#dupe_int}
  */
  readonly dupeInt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#dupe_int_mode ObjectFirewallMmsprofile#dupe_int_mode}
  */
  readonly dupeIntMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#dupe_status ObjectFirewallMmsprofile#dupe_status}
  */
  readonly dupeStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#file_block_int ObjectFirewallMmsprofile#file_block_int}
  */
  readonly fileBlockInt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#file_block_int_mode ObjectFirewallMmsprofile#file_block_int_mode}
  */
  readonly fileBlockIntMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#file_block_status ObjectFirewallMmsprofile#file_block_status}
  */
  readonly fileBlockStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#flood_int ObjectFirewallMmsprofile#flood_int}
  */
  readonly floodInt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#flood_int_mode ObjectFirewallMmsprofile#flood_int_mode}
  */
  readonly floodIntMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#flood_status ObjectFirewallMmsprofile#flood_status}
  */
  readonly floodStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#from_in_header ObjectFirewallMmsprofile#from_in_header}
  */
  readonly fromInHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#mms_checksum_int ObjectFirewallMmsprofile#mms_checksum_int}
  */
  readonly mmsChecksumInt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#mms_checksum_int_mode ObjectFirewallMmsprofile#mms_checksum_int_mode}
  */
  readonly mmsChecksumIntMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#mms_checksum_status ObjectFirewallMmsprofile#mms_checksum_status}
  */
  readonly mmsChecksumStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#mmsc_hostname ObjectFirewallMmsprofile#mmsc_hostname}
  */
  readonly mmscHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#mmsc_password ObjectFirewallMmsprofile#mmsc_password}
  */
  readonly mmscPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#mmsc_port ObjectFirewallMmsprofile#mmsc_port}
  */
  readonly mmscPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#mmsc_url ObjectFirewallMmsprofile#mmsc_url}
  */
  readonly mmscUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#mmsc_username ObjectFirewallMmsprofile#mmsc_username}
  */
  readonly mmscUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#msg_protocol ObjectFirewallMmsprofile#msg_protocol}
  */
  readonly msgProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#msg_type ObjectFirewallMmsprofile#msg_type}
  */
  readonly msgType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#protocol ObjectFirewallMmsprofile#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#rate_limit ObjectFirewallMmsprofile#rate_limit}
  */
  readonly rateLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#tod_window_duration ObjectFirewallMmsprofile#tod_window_duration}
  */
  readonly todWindowDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#tod_window_end ObjectFirewallMmsprofile#tod_window_end}
  */
  readonly todWindowEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#tod_window_start ObjectFirewallMmsprofile#tod_window_start}
  */
  readonly todWindowStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#user_domain ObjectFirewallMmsprofile#user_domain}
  */
  readonly userDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#vas_id ObjectFirewallMmsprofile#vas_id}
  */
  readonly vasId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#vasp_id ObjectFirewallMmsprofile#vasp_id}
  */
  readonly vaspId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#virus_int ObjectFirewallMmsprofile#virus_int}
  */
  readonly virusInt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#virus_int_mode ObjectFirewallMmsprofile#virus_int_mode}
  */
  readonly virusIntMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#virus_status ObjectFirewallMmsprofile#virus_status}
  */
  readonly virusStatus?: string;
}

export function objectFirewallMmsprofileNotificationToTerraform(struct?: ObjectFirewallMmsprofileNotificationOutputReference | ObjectFirewallMmsprofileNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_int: cdktf.numberToTerraform(struct!.alertInt),
    alert_int_mode: cdktf.stringToTerraform(struct!.alertIntMode),
    alert_src_msisdn: cdktf.stringToTerraform(struct!.alertSrcMsisdn),
    alert_status: cdktf.stringToTerraform(struct!.alertStatus),
    bword_int: cdktf.numberToTerraform(struct!.bwordInt),
    bword_int_mode: cdktf.stringToTerraform(struct!.bwordIntMode),
    bword_status: cdktf.stringToTerraform(struct!.bwordStatus),
    carrier_endpoint_bwl_int: cdktf.numberToTerraform(struct!.carrierEndpointBwlInt),
    carrier_endpoint_bwl_int_mode: cdktf.stringToTerraform(struct!.carrierEndpointBwlIntMode),
    carrier_endpoint_bwl_status: cdktf.stringToTerraform(struct!.carrierEndpointBwlStatus),
    days_allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.daysAllowed),
    detect_server: cdktf.stringToTerraform(struct!.detectServer),
    dupe_int: cdktf.numberToTerraform(struct!.dupeInt),
    dupe_int_mode: cdktf.stringToTerraform(struct!.dupeIntMode),
    dupe_status: cdktf.stringToTerraform(struct!.dupeStatus),
    file_block_int: cdktf.numberToTerraform(struct!.fileBlockInt),
    file_block_int_mode: cdktf.stringToTerraform(struct!.fileBlockIntMode),
    file_block_status: cdktf.stringToTerraform(struct!.fileBlockStatus),
    flood_int: cdktf.numberToTerraform(struct!.floodInt),
    flood_int_mode: cdktf.stringToTerraform(struct!.floodIntMode),
    flood_status: cdktf.stringToTerraform(struct!.floodStatus),
    from_in_header: cdktf.stringToTerraform(struct!.fromInHeader),
    mms_checksum_int: cdktf.numberToTerraform(struct!.mmsChecksumInt),
    mms_checksum_int_mode: cdktf.stringToTerraform(struct!.mmsChecksumIntMode),
    mms_checksum_status: cdktf.stringToTerraform(struct!.mmsChecksumStatus),
    mmsc_hostname: cdktf.stringToTerraform(struct!.mmscHostname),
    mmsc_password: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mmscPassword),
    mmsc_port: cdktf.numberToTerraform(struct!.mmscPort),
    mmsc_url: cdktf.stringToTerraform(struct!.mmscUrl),
    mmsc_username: cdktf.stringToTerraform(struct!.mmscUsername),
    msg_protocol: cdktf.stringToTerraform(struct!.msgProtocol),
    msg_type: cdktf.stringToTerraform(struct!.msgType),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    rate_limit: cdktf.numberToTerraform(struct!.rateLimit),
    tod_window_duration: cdktf.stringToTerraform(struct!.todWindowDuration),
    tod_window_end: cdktf.stringToTerraform(struct!.todWindowEnd),
    tod_window_start: cdktf.stringToTerraform(struct!.todWindowStart),
    user_domain: cdktf.stringToTerraform(struct!.userDomain),
    vas_id: cdktf.stringToTerraform(struct!.vasId),
    vasp_id: cdktf.stringToTerraform(struct!.vaspId),
    virus_int: cdktf.numberToTerraform(struct!.virusInt),
    virus_int_mode: cdktf.stringToTerraform(struct!.virusIntMode),
    virus_status: cdktf.stringToTerraform(struct!.virusStatus),
  }
}


export function objectFirewallMmsprofileNotificationToHclTerraform(struct?: ObjectFirewallMmsprofileNotificationOutputReference | ObjectFirewallMmsprofileNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_int: {
      value: cdktf.numberToHclTerraform(struct!.alertInt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alert_int_mode: {
      value: cdktf.stringToHclTerraform(struct!.alertIntMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alert_src_msisdn: {
      value: cdktf.stringToHclTerraform(struct!.alertSrcMsisdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alert_status: {
      value: cdktf.stringToHclTerraform(struct!.alertStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bword_int: {
      value: cdktf.numberToHclTerraform(struct!.bwordInt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bword_int_mode: {
      value: cdktf.stringToHclTerraform(struct!.bwordIntMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bword_status: {
      value: cdktf.stringToHclTerraform(struct!.bwordStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    carrier_endpoint_bwl_int: {
      value: cdktf.numberToHclTerraform(struct!.carrierEndpointBwlInt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    carrier_endpoint_bwl_int_mode: {
      value: cdktf.stringToHclTerraform(struct!.carrierEndpointBwlIntMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    carrier_endpoint_bwl_status: {
      value: cdktf.stringToHclTerraform(struct!.carrierEndpointBwlStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    days_allowed: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.daysAllowed),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    detect_server: {
      value: cdktf.stringToHclTerraform(struct!.detectServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dupe_int: {
      value: cdktf.numberToHclTerraform(struct!.dupeInt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dupe_int_mode: {
      value: cdktf.stringToHclTerraform(struct!.dupeIntMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dupe_status: {
      value: cdktf.stringToHclTerraform(struct!.dupeStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_block_int: {
      value: cdktf.numberToHclTerraform(struct!.fileBlockInt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    file_block_int_mode: {
      value: cdktf.stringToHclTerraform(struct!.fileBlockIntMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_block_status: {
      value: cdktf.stringToHclTerraform(struct!.fileBlockStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flood_int: {
      value: cdktf.numberToHclTerraform(struct!.floodInt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    flood_int_mode: {
      value: cdktf.stringToHclTerraform(struct!.floodIntMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flood_status: {
      value: cdktf.stringToHclTerraform(struct!.floodStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from_in_header: {
      value: cdktf.stringToHclTerraform(struct!.fromInHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mms_checksum_int: {
      value: cdktf.numberToHclTerraform(struct!.mmsChecksumInt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mms_checksum_int_mode: {
      value: cdktf.stringToHclTerraform(struct!.mmsChecksumIntMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mms_checksum_status: {
      value: cdktf.stringToHclTerraform(struct!.mmsChecksumStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mmsc_hostname: {
      value: cdktf.stringToHclTerraform(struct!.mmscHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mmsc_password: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mmscPassword),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    mmsc_port: {
      value: cdktf.numberToHclTerraform(struct!.mmscPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mmsc_url: {
      value: cdktf.stringToHclTerraform(struct!.mmscUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mmsc_username: {
      value: cdktf.stringToHclTerraform(struct!.mmscUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    msg_protocol: {
      value: cdktf.stringToHclTerraform(struct!.msgProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    msg_type: {
      value: cdktf.stringToHclTerraform(struct!.msgType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.rateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tod_window_duration: {
      value: cdktf.stringToHclTerraform(struct!.todWindowDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tod_window_end: {
      value: cdktf.stringToHclTerraform(struct!.todWindowEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tod_window_start: {
      value: cdktf.stringToHclTerraform(struct!.todWindowStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_domain: {
      value: cdktf.stringToHclTerraform(struct!.userDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vas_id: {
      value: cdktf.stringToHclTerraform(struct!.vasId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vasp_id: {
      value: cdktf.stringToHclTerraform(struct!.vaspId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virus_int: {
      value: cdktf.numberToHclTerraform(struct!.virusInt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virus_int_mode: {
      value: cdktf.stringToHclTerraform(struct!.virusIntMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virus_status: {
      value: cdktf.stringToHclTerraform(struct!.virusStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallMmsprofileNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectFirewallMmsprofileNotification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertInt !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertInt = this._alertInt;
    }
    if (this._alertIntMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertIntMode = this._alertIntMode;
    }
    if (this._alertSrcMsisdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertSrcMsisdn = this._alertSrcMsisdn;
    }
    if (this._alertStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertStatus = this._alertStatus;
    }
    if (this._bwordInt !== undefined) {
      hasAnyValues = true;
      internalValueResult.bwordInt = this._bwordInt;
    }
    if (this._bwordIntMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.bwordIntMode = this._bwordIntMode;
    }
    if (this._bwordStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.bwordStatus = this._bwordStatus;
    }
    if (this._carrierEndpointBwlInt !== undefined) {
      hasAnyValues = true;
      internalValueResult.carrierEndpointBwlInt = this._carrierEndpointBwlInt;
    }
    if (this._carrierEndpointBwlIntMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.carrierEndpointBwlIntMode = this._carrierEndpointBwlIntMode;
    }
    if (this._carrierEndpointBwlStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.carrierEndpointBwlStatus = this._carrierEndpointBwlStatus;
    }
    if (this._daysAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysAllowed = this._daysAllowed;
    }
    if (this._detectServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectServer = this._detectServer;
    }
    if (this._dupeInt !== undefined) {
      hasAnyValues = true;
      internalValueResult.dupeInt = this._dupeInt;
    }
    if (this._dupeIntMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.dupeIntMode = this._dupeIntMode;
    }
    if (this._dupeStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.dupeStatus = this._dupeStatus;
    }
    if (this._fileBlockInt !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileBlockInt = this._fileBlockInt;
    }
    if (this._fileBlockIntMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileBlockIntMode = this._fileBlockIntMode;
    }
    if (this._fileBlockStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileBlockStatus = this._fileBlockStatus;
    }
    if (this._floodInt !== undefined) {
      hasAnyValues = true;
      internalValueResult.floodInt = this._floodInt;
    }
    if (this._floodIntMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.floodIntMode = this._floodIntMode;
    }
    if (this._floodStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.floodStatus = this._floodStatus;
    }
    if (this._fromInHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromInHeader = this._fromInHeader;
    }
    if (this._mmsChecksumInt !== undefined) {
      hasAnyValues = true;
      internalValueResult.mmsChecksumInt = this._mmsChecksumInt;
    }
    if (this._mmsChecksumIntMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mmsChecksumIntMode = this._mmsChecksumIntMode;
    }
    if (this._mmsChecksumStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.mmsChecksumStatus = this._mmsChecksumStatus;
    }
    if (this._mmscHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.mmscHostname = this._mmscHostname;
    }
    if (this._mmscPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.mmscPassword = this._mmscPassword;
    }
    if (this._mmscPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.mmscPort = this._mmscPort;
    }
    if (this._mmscUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.mmscUrl = this._mmscUrl;
    }
    if (this._mmscUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.mmscUsername = this._mmscUsername;
    }
    if (this._msgProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProtocol = this._msgProtocol;
    }
    if (this._msgType !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgType = this._msgType;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._rateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit;
    }
    if (this._todWindowDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.todWindowDuration = this._todWindowDuration;
    }
    if (this._todWindowEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.todWindowEnd = this._todWindowEnd;
    }
    if (this._todWindowStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.todWindowStart = this._todWindowStart;
    }
    if (this._userDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDomain = this._userDomain;
    }
    if (this._vasId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vasId = this._vasId;
    }
    if (this._vaspId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaspId = this._vaspId;
    }
    if (this._virusInt !== undefined) {
      hasAnyValues = true;
      internalValueResult.virusInt = this._virusInt;
    }
    if (this._virusIntMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.virusIntMode = this._virusIntMode;
    }
    if (this._virusStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.virusStatus = this._virusStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallMmsprofileNotification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertInt = undefined;
      this._alertIntMode = undefined;
      this._alertSrcMsisdn = undefined;
      this._alertStatus = undefined;
      this._bwordInt = undefined;
      this._bwordIntMode = undefined;
      this._bwordStatus = undefined;
      this._carrierEndpointBwlInt = undefined;
      this._carrierEndpointBwlIntMode = undefined;
      this._carrierEndpointBwlStatus = undefined;
      this._daysAllowed = undefined;
      this._detectServer = undefined;
      this._dupeInt = undefined;
      this._dupeIntMode = undefined;
      this._dupeStatus = undefined;
      this._fileBlockInt = undefined;
      this._fileBlockIntMode = undefined;
      this._fileBlockStatus = undefined;
      this._floodInt = undefined;
      this._floodIntMode = undefined;
      this._floodStatus = undefined;
      this._fromInHeader = undefined;
      this._mmsChecksumInt = undefined;
      this._mmsChecksumIntMode = undefined;
      this._mmsChecksumStatus = undefined;
      this._mmscHostname = undefined;
      this._mmscPassword = undefined;
      this._mmscPort = undefined;
      this._mmscUrl = undefined;
      this._mmscUsername = undefined;
      this._msgProtocol = undefined;
      this._msgType = undefined;
      this._protocol = undefined;
      this._rateLimit = undefined;
      this._todWindowDuration = undefined;
      this._todWindowEnd = undefined;
      this._todWindowStart = undefined;
      this._userDomain = undefined;
      this._vasId = undefined;
      this._vaspId = undefined;
      this._virusInt = undefined;
      this._virusIntMode = undefined;
      this._virusStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertInt = value.alertInt;
      this._alertIntMode = value.alertIntMode;
      this._alertSrcMsisdn = value.alertSrcMsisdn;
      this._alertStatus = value.alertStatus;
      this._bwordInt = value.bwordInt;
      this._bwordIntMode = value.bwordIntMode;
      this._bwordStatus = value.bwordStatus;
      this._carrierEndpointBwlInt = value.carrierEndpointBwlInt;
      this._carrierEndpointBwlIntMode = value.carrierEndpointBwlIntMode;
      this._carrierEndpointBwlStatus = value.carrierEndpointBwlStatus;
      this._daysAllowed = value.daysAllowed;
      this._detectServer = value.detectServer;
      this._dupeInt = value.dupeInt;
      this._dupeIntMode = value.dupeIntMode;
      this._dupeStatus = value.dupeStatus;
      this._fileBlockInt = value.fileBlockInt;
      this._fileBlockIntMode = value.fileBlockIntMode;
      this._fileBlockStatus = value.fileBlockStatus;
      this._floodInt = value.floodInt;
      this._floodIntMode = value.floodIntMode;
      this._floodStatus = value.floodStatus;
      this._fromInHeader = value.fromInHeader;
      this._mmsChecksumInt = value.mmsChecksumInt;
      this._mmsChecksumIntMode = value.mmsChecksumIntMode;
      this._mmsChecksumStatus = value.mmsChecksumStatus;
      this._mmscHostname = value.mmscHostname;
      this._mmscPassword = value.mmscPassword;
      this._mmscPort = value.mmscPort;
      this._mmscUrl = value.mmscUrl;
      this._mmscUsername = value.mmscUsername;
      this._msgProtocol = value.msgProtocol;
      this._msgType = value.msgType;
      this._protocol = value.protocol;
      this._rateLimit = value.rateLimit;
      this._todWindowDuration = value.todWindowDuration;
      this._todWindowEnd = value.todWindowEnd;
      this._todWindowStart = value.todWindowStart;
      this._userDomain = value.userDomain;
      this._vasId = value.vasId;
      this._vaspId = value.vaspId;
      this._virusInt = value.virusInt;
      this._virusIntMode = value.virusIntMode;
      this._virusStatus = value.virusStatus;
    }
  }

  // alert_int - computed: false, optional: true, required: false
  private _alertInt?: number; 
  public get alertInt() {
    return this.getNumberAttribute('alert_int');
  }
  public set alertInt(value: number) {
    this._alertInt = value;
  }
  public resetAlertInt() {
    this._alertInt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertIntInput() {
    return this._alertInt;
  }

  // alert_int_mode - computed: false, optional: true, required: false
  private _alertIntMode?: string; 
  public get alertIntMode() {
    return this.getStringAttribute('alert_int_mode');
  }
  public set alertIntMode(value: string) {
    this._alertIntMode = value;
  }
  public resetAlertIntMode() {
    this._alertIntMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertIntModeInput() {
    return this._alertIntMode;
  }

  // alert_src_msisdn - computed: false, optional: true, required: false
  private _alertSrcMsisdn?: string; 
  public get alertSrcMsisdn() {
    return this.getStringAttribute('alert_src_msisdn');
  }
  public set alertSrcMsisdn(value: string) {
    this._alertSrcMsisdn = value;
  }
  public resetAlertSrcMsisdn() {
    this._alertSrcMsisdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertSrcMsisdnInput() {
    return this._alertSrcMsisdn;
  }

  // alert_status - computed: false, optional: true, required: false
  private _alertStatus?: string; 
  public get alertStatus() {
    return this.getStringAttribute('alert_status');
  }
  public set alertStatus(value: string) {
    this._alertStatus = value;
  }
  public resetAlertStatus() {
    this._alertStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertStatusInput() {
    return this._alertStatus;
  }

  // bword_int - computed: false, optional: true, required: false
  private _bwordInt?: number; 
  public get bwordInt() {
    return this.getNumberAttribute('bword_int');
  }
  public set bwordInt(value: number) {
    this._bwordInt = value;
  }
  public resetBwordInt() {
    this._bwordInt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwordIntInput() {
    return this._bwordInt;
  }

  // bword_int_mode - computed: false, optional: true, required: false
  private _bwordIntMode?: string; 
  public get bwordIntMode() {
    return this.getStringAttribute('bword_int_mode');
  }
  public set bwordIntMode(value: string) {
    this._bwordIntMode = value;
  }
  public resetBwordIntMode() {
    this._bwordIntMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwordIntModeInput() {
    return this._bwordIntMode;
  }

  // bword_status - computed: false, optional: true, required: false
  private _bwordStatus?: string; 
  public get bwordStatus() {
    return this.getStringAttribute('bword_status');
  }
  public set bwordStatus(value: string) {
    this._bwordStatus = value;
  }
  public resetBwordStatus() {
    this._bwordStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwordStatusInput() {
    return this._bwordStatus;
  }

  // carrier_endpoint_bwl_int - computed: false, optional: true, required: false
  private _carrierEndpointBwlInt?: number; 
  public get carrierEndpointBwlInt() {
    return this.getNumberAttribute('carrier_endpoint_bwl_int');
  }
  public set carrierEndpointBwlInt(value: number) {
    this._carrierEndpointBwlInt = value;
  }
  public resetCarrierEndpointBwlInt() {
    this._carrierEndpointBwlInt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get carrierEndpointBwlIntInput() {
    return this._carrierEndpointBwlInt;
  }

  // carrier_endpoint_bwl_int_mode - computed: false, optional: true, required: false
  private _carrierEndpointBwlIntMode?: string; 
  public get carrierEndpointBwlIntMode() {
    return this.getStringAttribute('carrier_endpoint_bwl_int_mode');
  }
  public set carrierEndpointBwlIntMode(value: string) {
    this._carrierEndpointBwlIntMode = value;
  }
  public resetCarrierEndpointBwlIntMode() {
    this._carrierEndpointBwlIntMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get carrierEndpointBwlIntModeInput() {
    return this._carrierEndpointBwlIntMode;
  }

  // carrier_endpoint_bwl_status - computed: false, optional: true, required: false
  private _carrierEndpointBwlStatus?: string; 
  public get carrierEndpointBwlStatus() {
    return this.getStringAttribute('carrier_endpoint_bwl_status');
  }
  public set carrierEndpointBwlStatus(value: string) {
    this._carrierEndpointBwlStatus = value;
  }
  public resetCarrierEndpointBwlStatus() {
    this._carrierEndpointBwlStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get carrierEndpointBwlStatusInput() {
    return this._carrierEndpointBwlStatus;
  }

  // days_allowed - computed: true, optional: true, required: false
  private _daysAllowed?: string[]; 
  public get daysAllowed() {
    return cdktf.Fn.tolist(this.getListAttribute('days_allowed'));
  }
  public set daysAllowed(value: string[]) {
    this._daysAllowed = value;
  }
  public resetDaysAllowed() {
    this._daysAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysAllowedInput() {
    return this._daysAllowed;
  }

  // detect_server - computed: false, optional: true, required: false
  private _detectServer?: string; 
  public get detectServer() {
    return this.getStringAttribute('detect_server');
  }
  public set detectServer(value: string) {
    this._detectServer = value;
  }
  public resetDetectServer() {
    this._detectServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectServerInput() {
    return this._detectServer;
  }

  // dupe_int - computed: false, optional: true, required: false
  private _dupeInt?: number; 
  public get dupeInt() {
    return this.getNumberAttribute('dupe_int');
  }
  public set dupeInt(value: number) {
    this._dupeInt = value;
  }
  public resetDupeInt() {
    this._dupeInt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dupeIntInput() {
    return this._dupeInt;
  }

  // dupe_int_mode - computed: false, optional: true, required: false
  private _dupeIntMode?: string; 
  public get dupeIntMode() {
    return this.getStringAttribute('dupe_int_mode');
  }
  public set dupeIntMode(value: string) {
    this._dupeIntMode = value;
  }
  public resetDupeIntMode() {
    this._dupeIntMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dupeIntModeInput() {
    return this._dupeIntMode;
  }

  // dupe_status - computed: false, optional: true, required: false
  private _dupeStatus?: string; 
  public get dupeStatus() {
    return this.getStringAttribute('dupe_status');
  }
  public set dupeStatus(value: string) {
    this._dupeStatus = value;
  }
  public resetDupeStatus() {
    this._dupeStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dupeStatusInput() {
    return this._dupeStatus;
  }

  // file_block_int - computed: false, optional: true, required: false
  private _fileBlockInt?: number; 
  public get fileBlockInt() {
    return this.getNumberAttribute('file_block_int');
  }
  public set fileBlockInt(value: number) {
    this._fileBlockInt = value;
  }
  public resetFileBlockInt() {
    this._fileBlockInt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileBlockIntInput() {
    return this._fileBlockInt;
  }

  // file_block_int_mode - computed: false, optional: true, required: false
  private _fileBlockIntMode?: string; 
  public get fileBlockIntMode() {
    return this.getStringAttribute('file_block_int_mode');
  }
  public set fileBlockIntMode(value: string) {
    this._fileBlockIntMode = value;
  }
  public resetFileBlockIntMode() {
    this._fileBlockIntMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileBlockIntModeInput() {
    return this._fileBlockIntMode;
  }

  // file_block_status - computed: false, optional: true, required: false
  private _fileBlockStatus?: string; 
  public get fileBlockStatus() {
    return this.getStringAttribute('file_block_status');
  }
  public set fileBlockStatus(value: string) {
    this._fileBlockStatus = value;
  }
  public resetFileBlockStatus() {
    this._fileBlockStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileBlockStatusInput() {
    return this._fileBlockStatus;
  }

  // flood_int - computed: false, optional: true, required: false
  private _floodInt?: number; 
  public get floodInt() {
    return this.getNumberAttribute('flood_int');
  }
  public set floodInt(value: number) {
    this._floodInt = value;
  }
  public resetFloodInt() {
    this._floodInt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floodIntInput() {
    return this._floodInt;
  }

  // flood_int_mode - computed: false, optional: true, required: false
  private _floodIntMode?: string; 
  public get floodIntMode() {
    return this.getStringAttribute('flood_int_mode');
  }
  public set floodIntMode(value: string) {
    this._floodIntMode = value;
  }
  public resetFloodIntMode() {
    this._floodIntMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floodIntModeInput() {
    return this._floodIntMode;
  }

  // flood_status - computed: false, optional: true, required: false
  private _floodStatus?: string; 
  public get floodStatus() {
    return this.getStringAttribute('flood_status');
  }
  public set floodStatus(value: string) {
    this._floodStatus = value;
  }
  public resetFloodStatus() {
    this._floodStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floodStatusInput() {
    return this._floodStatus;
  }

  // from_in_header - computed: false, optional: true, required: false
  private _fromInHeader?: string; 
  public get fromInHeader() {
    return this.getStringAttribute('from_in_header');
  }
  public set fromInHeader(value: string) {
    this._fromInHeader = value;
  }
  public resetFromInHeader() {
    this._fromInHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInHeaderInput() {
    return this._fromInHeader;
  }

  // mms_checksum_int - computed: false, optional: true, required: false
  private _mmsChecksumInt?: number; 
  public get mmsChecksumInt() {
    return this.getNumberAttribute('mms_checksum_int');
  }
  public set mmsChecksumInt(value: number) {
    this._mmsChecksumInt = value;
  }
  public resetMmsChecksumInt() {
    this._mmsChecksumInt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mmsChecksumIntInput() {
    return this._mmsChecksumInt;
  }

  // mms_checksum_int_mode - computed: false, optional: true, required: false
  private _mmsChecksumIntMode?: string; 
  public get mmsChecksumIntMode() {
    return this.getStringAttribute('mms_checksum_int_mode');
  }
  public set mmsChecksumIntMode(value: string) {
    this._mmsChecksumIntMode = value;
  }
  public resetMmsChecksumIntMode() {
    this._mmsChecksumIntMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mmsChecksumIntModeInput() {
    return this._mmsChecksumIntMode;
  }

  // mms_checksum_status - computed: false, optional: true, required: false
  private _mmsChecksumStatus?: string; 
  public get mmsChecksumStatus() {
    return this.getStringAttribute('mms_checksum_status');
  }
  public set mmsChecksumStatus(value: string) {
    this._mmsChecksumStatus = value;
  }
  public resetMmsChecksumStatus() {
    this._mmsChecksumStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mmsChecksumStatusInput() {
    return this._mmsChecksumStatus;
  }

  // mmsc_hostname - computed: false, optional: true, required: false
  private _mmscHostname?: string; 
  public get mmscHostname() {
    return this.getStringAttribute('mmsc_hostname');
  }
  public set mmscHostname(value: string) {
    this._mmscHostname = value;
  }
  public resetMmscHostname() {
    this._mmscHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mmscHostnameInput() {
    return this._mmscHostname;
  }

  // mmsc_password - computed: true, optional: true, required: false
  private _mmscPassword?: string[]; 
  public get mmscPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('mmsc_password'));
  }
  public set mmscPassword(value: string[]) {
    this._mmscPassword = value;
  }
  public resetMmscPassword() {
    this._mmscPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mmscPasswordInput() {
    return this._mmscPassword;
  }

  // mmsc_port - computed: false, optional: true, required: false
  private _mmscPort?: number; 
  public get mmscPort() {
    return this.getNumberAttribute('mmsc_port');
  }
  public set mmscPort(value: number) {
    this._mmscPort = value;
  }
  public resetMmscPort() {
    this._mmscPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mmscPortInput() {
    return this._mmscPort;
  }

  // mmsc_url - computed: false, optional: true, required: false
  private _mmscUrl?: string; 
  public get mmscUrl() {
    return this.getStringAttribute('mmsc_url');
  }
  public set mmscUrl(value: string) {
    this._mmscUrl = value;
  }
  public resetMmscUrl() {
    this._mmscUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mmscUrlInput() {
    return this._mmscUrl;
  }

  // mmsc_username - computed: false, optional: true, required: false
  private _mmscUsername?: string; 
  public get mmscUsername() {
    return this.getStringAttribute('mmsc_username');
  }
  public set mmscUsername(value: string) {
    this._mmscUsername = value;
  }
  public resetMmscUsername() {
    this._mmscUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mmscUsernameInput() {
    return this._mmscUsername;
  }

  // msg_protocol - computed: false, optional: true, required: false
  private _msgProtocol?: string; 
  public get msgProtocol() {
    return this.getStringAttribute('msg_protocol');
  }
  public set msgProtocol(value: string) {
    this._msgProtocol = value;
  }
  public resetMsgProtocol() {
    this._msgProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProtocolInput() {
    return this._msgProtocol;
  }

  // msg_type - computed: false, optional: true, required: false
  private _msgType?: string; 
  public get msgType() {
    return this.getStringAttribute('msg_type');
  }
  public set msgType(value: string) {
    this._msgType = value;
  }
  public resetMsgType() {
    this._msgType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgTypeInput() {
    return this._msgType;
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

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit?: number; 
  public get rateLimit() {
    return this.getNumberAttribute('rate_limit');
  }
  public set rateLimit(value: number) {
    this._rateLimit = value;
  }
  public resetRateLimit() {
    this._rateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit;
  }

  // tod_window_duration - computed: false, optional: true, required: false
  private _todWindowDuration?: string; 
  public get todWindowDuration() {
    return this.getStringAttribute('tod_window_duration');
  }
  public set todWindowDuration(value: string) {
    this._todWindowDuration = value;
  }
  public resetTodWindowDuration() {
    this._todWindowDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get todWindowDurationInput() {
    return this._todWindowDuration;
  }

  // tod_window_end - computed: false, optional: true, required: false
  private _todWindowEnd?: string; 
  public get todWindowEnd() {
    return this.getStringAttribute('tod_window_end');
  }
  public set todWindowEnd(value: string) {
    this._todWindowEnd = value;
  }
  public resetTodWindowEnd() {
    this._todWindowEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get todWindowEndInput() {
    return this._todWindowEnd;
  }

  // tod_window_start - computed: false, optional: true, required: false
  private _todWindowStart?: string; 
  public get todWindowStart() {
    return this.getStringAttribute('tod_window_start');
  }
  public set todWindowStart(value: string) {
    this._todWindowStart = value;
  }
  public resetTodWindowStart() {
    this._todWindowStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get todWindowStartInput() {
    return this._todWindowStart;
  }

  // user_domain - computed: false, optional: true, required: false
  private _userDomain?: string; 
  public get userDomain() {
    return this.getStringAttribute('user_domain');
  }
  public set userDomain(value: string) {
    this._userDomain = value;
  }
  public resetUserDomain() {
    this._userDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDomainInput() {
    return this._userDomain;
  }

  // vas_id - computed: false, optional: true, required: false
  private _vasId?: string; 
  public get vasId() {
    return this.getStringAttribute('vas_id');
  }
  public set vasId(value: string) {
    this._vasId = value;
  }
  public resetVasId() {
    this._vasId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vasIdInput() {
    return this._vasId;
  }

  // vasp_id - computed: false, optional: true, required: false
  private _vaspId?: string; 
  public get vaspId() {
    return this.getStringAttribute('vasp_id');
  }
  public set vaspId(value: string) {
    this._vaspId = value;
  }
  public resetVaspId() {
    this._vaspId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaspIdInput() {
    return this._vaspId;
  }

  // virus_int - computed: false, optional: true, required: false
  private _virusInt?: number; 
  public get virusInt() {
    return this.getNumberAttribute('virus_int');
  }
  public set virusInt(value: number) {
    this._virusInt = value;
  }
  public resetVirusInt() {
    this._virusInt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virusIntInput() {
    return this._virusInt;
  }

  // virus_int_mode - computed: false, optional: true, required: false
  private _virusIntMode?: string; 
  public get virusIntMode() {
    return this.getStringAttribute('virus_int_mode');
  }
  public set virusIntMode(value: string) {
    this._virusIntMode = value;
  }
  public resetVirusIntMode() {
    this._virusIntMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virusIntModeInput() {
    return this._virusIntMode;
  }

  // virus_status - computed: false, optional: true, required: false
  private _virusStatus?: string; 
  public get virusStatus() {
    return this.getStringAttribute('virus_status');
  }
  public set virusStatus(value: string) {
    this._virusStatus = value;
  }
  public resetVirusStatus() {
    this._virusStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virusStatusInput() {
    return this._virusStatus;
  }
}
export interface ObjectFirewallMmsprofileOutbreakPrevention {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#external_blocklist ObjectFirewallMmsprofile#external_blocklist}
  */
  readonly externalBlocklist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#ftgd_service ObjectFirewallMmsprofile#ftgd_service}
  */
  readonly ftgdService?: string;
}

export function objectFirewallMmsprofileOutbreakPreventionToTerraform(struct?: ObjectFirewallMmsprofileOutbreakPreventionOutputReference | ObjectFirewallMmsprofileOutbreakPrevention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_blocklist: cdktf.stringToTerraform(struct!.externalBlocklist),
    ftgd_service: cdktf.stringToTerraform(struct!.ftgdService),
  }
}


export function objectFirewallMmsprofileOutbreakPreventionToHclTerraform(struct?: ObjectFirewallMmsprofileOutbreakPreventionOutputReference | ObjectFirewallMmsprofileOutbreakPrevention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_blocklist: {
      value: cdktf.stringToHclTerraform(struct!.externalBlocklist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ftgd_service: {
      value: cdktf.stringToHclTerraform(struct!.ftgdService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallMmsprofileOutbreakPreventionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectFirewallMmsprofileOutbreakPrevention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalBlocklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalBlocklist = this._externalBlocklist;
    }
    if (this._ftgdService !== undefined) {
      hasAnyValues = true;
      internalValueResult.ftgdService = this._ftgdService;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallMmsprofileOutbreakPrevention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._externalBlocklist = undefined;
      this._ftgdService = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._externalBlocklist = value.externalBlocklist;
      this._ftgdService = value.ftgdService;
    }
  }

  // external_blocklist - computed: false, optional: true, required: false
  private _externalBlocklist?: string; 
  public get externalBlocklist() {
    return this.getStringAttribute('external_blocklist');
  }
  public set externalBlocklist(value: string) {
    this._externalBlocklist = value;
  }
  public resetExternalBlocklist() {
    this._externalBlocklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalBlocklistInput() {
    return this._externalBlocklist;
  }

  // ftgd_service - computed: false, optional: true, required: false
  private _ftgdService?: string; 
  public get ftgdService() {
    return this.getStringAttribute('ftgd_service');
  }
  public set ftgdService(value: string) {
    this._ftgdService = value;
  }
  public resetFtgdService() {
    this._ftgdService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftgdServiceInput() {
    return this._ftgdService;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile fortimanager_object_firewall_mmsprofile}
*/
export class ObjectFirewallMmsprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_firewall_mmsprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFirewallMmsprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFirewallMmsprofile to import
  * @param importFromId The id of the existing ObjectFirewallMmsprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFirewallMmsprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_firewall_mmsprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_mmsprofile fortimanager_object_firewall_mmsprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFirewallMmsprofileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectFirewallMmsprofileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_firewall_mmsprofile',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._avnotificationtable = config.avnotificationtable;
    this._bwordtable = config.bwordtable;
    this._carrierEndpointPrefix = config.carrierEndpointPrefix;
    this._carrierEndpointPrefixRangeMax = config.carrierEndpointPrefixRangeMax;
    this._carrierEndpointPrefixRangeMin = config.carrierEndpointPrefixRangeMin;
    this._carrierEndpointPrefixString = config.carrierEndpointPrefixString;
    this._carrierendpointbwltable = config.carrierendpointbwltable;
    this._comment = config.comment;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._extendedUtmLog = config.extendedUtmLog;
    this._id = config.id;
    this._mm1 = config.mm1;
    this._mm1AddrHdr = config.mm1AddrHdr;
    this._mm1AddrSource = config.mm1AddrSource;
    this._mm1ConvertHex = config.mm1ConvertHex;
    this._mm1OutbreakPrevention = config.mm1OutbreakPrevention;
    this._mm1RetrDupe = config.mm1RetrDupe;
    this._mm1RetrieveScan = config.mm1RetrieveScan;
    this._mm1Comfortamount = config.mm1Comfortamount;
    this._mm1Comfortinterval = config.mm1Comfortinterval;
    this._mm1Oversizelimit = config.mm1Oversizelimit;
    this._mm3 = config.mm3;
    this._mm3OutbreakPrevention = config.mm3OutbreakPrevention;
    this._mm3Oversizelimit = config.mm3Oversizelimit;
    this._mm4 = config.mm4;
    this._mm4OutbreakPrevention = config.mm4OutbreakPrevention;
    this._mm4Oversizelimit = config.mm4Oversizelimit;
    this._mm7 = config.mm7;
    this._mm7AddrHdr = config.mm7AddrHdr;
    this._mm7AddrSource = config.mm7AddrSource;
    this._mm7ConvertHex = config.mm7ConvertHex;
    this._mm7OutbreakPrevention = config.mm7OutbreakPrevention;
    this._mm7Comfortamount = config.mm7Comfortamount;
    this._mm7Comfortinterval = config.mm7Comfortinterval;
    this._mm7Oversizelimit = config.mm7Oversizelimit;
    this._mmsAntispamMassLog = config.mmsAntispamMassLog;
    this._mmsAvBlockLog = config.mmsAvBlockLog;
    this._mmsAvOversizeLog = config.mmsAvOversizeLog;
    this._mmsAvVirusLog = config.mmsAvVirusLog;
    this._mmsCarrierEndpointFilterLog = config.mmsCarrierEndpointFilterLog;
    this._mmsChecksumLog = config.mmsChecksumLog;
    this._mmsChecksumTable = config.mmsChecksumTable;
    this._mmsNotificationLog = config.mmsNotificationLog;
    this._mmsWebContentLog = config.mmsWebContentLog;
    this._mmsbwordthreshold = config.mmsbwordthreshold;
    this._name = config.name;
    this._removeBlockedConstLength = config.removeBlockedConstLength;
    this._replacemsgGroup = config.replacemsgGroup;
    this._scopetype = config.scopetype;
    this._dupe.internalValue = config.dupe;
    this._flood.internalValue = config.flood;
    this._notifMsisdn.internalValue = config.notifMsisdn;
    this._notification.internalValue = config.notification;
    this._outbreakPrevention.internalValue = config.outbreakPrevention;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // avnotificationtable - computed: false, optional: true, required: false
  private _avnotificationtable?: string; 
  public get avnotificationtable() {
    return this.getStringAttribute('avnotificationtable');
  }
  public set avnotificationtable(value: string) {
    this._avnotificationtable = value;
  }
  public resetAvnotificationtable() {
    this._avnotificationtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avnotificationtableInput() {
    return this._avnotificationtable;
  }

  // bwordtable - computed: false, optional: true, required: false
  private _bwordtable?: string; 
  public get bwordtable() {
    return this.getStringAttribute('bwordtable');
  }
  public set bwordtable(value: string) {
    this._bwordtable = value;
  }
  public resetBwordtable() {
    this._bwordtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwordtableInput() {
    return this._bwordtable;
  }

  // carrier_endpoint_prefix - computed: false, optional: true, required: false
  private _carrierEndpointPrefix?: string; 
  public get carrierEndpointPrefix() {
    return this.getStringAttribute('carrier_endpoint_prefix');
  }
  public set carrierEndpointPrefix(value: string) {
    this._carrierEndpointPrefix = value;
  }
  public resetCarrierEndpointPrefix() {
    this._carrierEndpointPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get carrierEndpointPrefixInput() {
    return this._carrierEndpointPrefix;
  }

  // carrier_endpoint_prefix_range_max - computed: false, optional: true, required: false
  private _carrierEndpointPrefixRangeMax?: number; 
  public get carrierEndpointPrefixRangeMax() {
    return this.getNumberAttribute('carrier_endpoint_prefix_range_max');
  }
  public set carrierEndpointPrefixRangeMax(value: number) {
    this._carrierEndpointPrefixRangeMax = value;
  }
  public resetCarrierEndpointPrefixRangeMax() {
    this._carrierEndpointPrefixRangeMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get carrierEndpointPrefixRangeMaxInput() {
    return this._carrierEndpointPrefixRangeMax;
  }

  // carrier_endpoint_prefix_range_min - computed: false, optional: true, required: false
  private _carrierEndpointPrefixRangeMin?: number; 
  public get carrierEndpointPrefixRangeMin() {
    return this.getNumberAttribute('carrier_endpoint_prefix_range_min');
  }
  public set carrierEndpointPrefixRangeMin(value: number) {
    this._carrierEndpointPrefixRangeMin = value;
  }
  public resetCarrierEndpointPrefixRangeMin() {
    this._carrierEndpointPrefixRangeMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get carrierEndpointPrefixRangeMinInput() {
    return this._carrierEndpointPrefixRangeMin;
  }

  // carrier_endpoint_prefix_string - computed: false, optional: true, required: false
  private _carrierEndpointPrefixString?: string; 
  public get carrierEndpointPrefixString() {
    return this.getStringAttribute('carrier_endpoint_prefix_string');
  }
  public set carrierEndpointPrefixString(value: string) {
    this._carrierEndpointPrefixString = value;
  }
  public resetCarrierEndpointPrefixString() {
    this._carrierEndpointPrefixString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get carrierEndpointPrefixStringInput() {
    return this._carrierEndpointPrefixString;
  }

  // carrierendpointbwltable - computed: false, optional: true, required: false
  private _carrierendpointbwltable?: string; 
  public get carrierendpointbwltable() {
    return this.getStringAttribute('carrierendpointbwltable');
  }
  public set carrierendpointbwltable(value: string) {
    this._carrierendpointbwltable = value;
  }
  public resetCarrierendpointbwltable() {
    this._carrierendpointbwltable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get carrierendpointbwltableInput() {
    return this._carrierendpointbwltable;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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

  // extended_utm_log - computed: false, optional: true, required: false
  private _extendedUtmLog?: string; 
  public get extendedUtmLog() {
    return this.getStringAttribute('extended_utm_log');
  }
  public set extendedUtmLog(value: string) {
    this._extendedUtmLog = value;
  }
  public resetExtendedUtmLog() {
    this._extendedUtmLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedUtmLogInput() {
    return this._extendedUtmLog;
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

  // mm1 - computed: true, optional: true, required: false
  private _mm1?: string[]; 
  public get mm1() {
    return cdktf.Fn.tolist(this.getListAttribute('mm1'));
  }
  public set mm1(value: string[]) {
    this._mm1 = value;
  }
  public resetMm1() {
    this._mm1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mm1Input() {
    return this._mm1;
  }

  // mm1_addr_hdr - computed: false, optional: true, required: false
  private _mm1AddrHdr?: string; 
  public get mm1AddrHdr() {
    return this.getStringAttribute('mm1_addr_hdr');
  }
  public set mm1AddrHdr(value: string) {
    this._mm1AddrHdr = value;
  }
  public resetMm1AddrHdr() {
    this._mm1AddrHdr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mm1AddrHdrInput() {
    return this._mm1AddrHdr;
  }

  // mm1_addr_source - computed: false, optional: true, required: false
  private _mm1AddrSource?: string; 
  public get mm1AddrSource() {
    return this.getStringAttribute('mm1_addr_source');
  }
  public set mm1AddrSource(value: string) {
    this._mm1AddrSource = value;
  }
  public resetMm1AddrSource() {
    this._mm1AddrSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mm1AddrSourceInput() {
    return this._mm1AddrSource;
  }

  // mm1_convert_hex - computed: false, optional: true, required: false
  private _mm1ConvertHex?: string; 
  public get mm1ConvertHex() {
    return this.getStringAttribute('mm1_convert_hex');
  }
  public set mm1ConvertHex(value: string) {
    this._mm1ConvertHex = value;
  }
  public resetMm1ConvertHex() {
    this._mm1ConvertHex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mm1ConvertHexInput() {
    return this._mm1ConvertHex;
  }

  // mm1_outbreak_prevention - computed: false, optional: true, required: false
  private _mm1OutbreakPrevention?: string; 
  public get mm1OutbreakPrevention() {
    return this.getStringAttribute('mm1_outbreak_prevention');
  }
  public set mm1OutbreakPrevention(value: string) {
    this._mm1OutbreakPrevention = value;
  }
  public resetMm1OutbreakPrevention() {
    this._mm1OutbreakPrevention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mm1OutbreakPreventionInput() {
    return this._mm1OutbreakPrevention;
  }

  // mm1_retr_dupe - computed: false, optional: true, required: false
  private _mm1RetrDupe?: string; 
  public get mm1RetrDupe() {
    return this.getStringAttribute('mm1_retr_dupe');
  }
  public set mm1RetrDupe(value: string) {
    this._mm1RetrDupe = value;
  }
  public resetMm1RetrDupe() {
    this._mm1RetrDupe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mm1RetrDupeInput() {
    return this._mm1RetrDupe;
  }

  // mm1_retrieve_scan - computed: false, optional: true, required: false
  private _mm1RetrieveScan?: string; 
  public get mm1RetrieveScan() {
    return this.getStringAttribute('mm1_retrieve_scan');
  }
  public set mm1RetrieveScan(value: string) {
    this._mm1RetrieveScan = value;
  }
  public resetMm1RetrieveScan() {
    this._mm1RetrieveScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mm1RetrieveScanInput() {
    return this._mm1RetrieveScan;
  }

  // mm1comfortamount - computed: false, optional: true, required: false
  private _mm1Comfortamount?: number; 
  public get mm1Comfortamount() {
    return this.getNumberAttribute('mm1comfortamount');
  }
  public set mm1Comfortamount(value: number) {
    this._mm1Comfortamount = value;
  }
  public resetMm1Comfortamount() {
    this._mm1Comfortamount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mm1ComfortamountInput() {
    return this._mm1Comfortamount;
  }

  // mm1comfortinterval - computed: false, optional: true, required: false
  private _mm1Comfortinterval?: number; 
  public get mm1Comfortinterval() {
    return this.getNumberAttribute('mm1comfortinterval');
  }
  public set mm1Comfortinterval(value: number) {
    this._mm1Comfortinterval = value;
  }
  public resetMm1Comfortinterval() {
    this._mm1Comfortinterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mm1ComfortintervalInput() {
    return this._mm1Comfortinterval;
  }

  // mm1oversizelimit - computed: false, optional: true, required: false
  private _mm1Oversizelimit?: number; 
  public get mm1Oversizelimit() {
    return this.getNumberAttribute('mm1oversizelimit');
  }
  public set mm1Oversizelimit(value: number) {
    this._mm1Oversizelimit = value;
  }
  public resetMm1Oversizelimit() {
    this._mm1Oversizelimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mm1OversizelimitInput() {
    return this._mm1Oversizelimit;
  }

  // mm3 - computed: true, optional: true, required: false
  private _mm3?: string[]; 
  public get mm3() {
    return cdktf.Fn.tolist(this.getListAttribute('mm3'));
  }
  public set mm3(value: string[]) {
    this._mm3 = value;
  }
  public resetMm3() {
    this._mm3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mm3Input() {
    return this._mm3;
  }

  // mm3_outbreak_prevention - computed: false, optional: true, required: false
  private _mm3OutbreakPrevention?: string; 
  public get mm3OutbreakPrevention() {
    return this.getStringAttribute('mm3_outbreak_prevention');
  }
  public set mm3OutbreakPrevention(value: string) {
    this._mm3OutbreakPrevention = value;
  }
  public resetMm3OutbreakPrevention() {
    this._mm3OutbreakPrevention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mm3OutbreakPreventionInput() {
    return this._mm3OutbreakPrevention;
  }

  // mm3oversizelimit - computed: false, optional: true, required: false
  private _mm3Oversizelimit?: number; 
  public get mm3Oversizelimit() {
    return this.getNumberAttribute('mm3oversizelimit');
  }
  public set mm3Oversizelimit(value: number) {
    this._mm3Oversizelimit = value;
  }
  public resetMm3Oversizelimit() {
    this._mm3Oversizelimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mm3OversizelimitInput() {
    return this._mm3Oversizelimit;
  }

  // mm4 - computed: true, optional: true, required: false
  private _mm4?: string[]; 
  public get mm4() {
    return cdktf.Fn.tolist(this.getListAttribute('mm4'));
  }
  public set mm4(value: string[]) {
    this._mm4 = value;
  }
  public resetMm4() {
    this._mm4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mm4Input() {
    return this._mm4;
  }

  // mm4_outbreak_prevention - computed: false, optional: true, required: false
  private _mm4OutbreakPrevention?: string; 
  public get mm4OutbreakPrevention() {
    return this.getStringAttribute('mm4_outbreak_prevention');
  }
  public set mm4OutbreakPrevention(value: string) {
    this._mm4OutbreakPrevention = value;
  }
  public resetMm4OutbreakPrevention() {
    this._mm4OutbreakPrevention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mm4OutbreakPreventionInput() {
    return this._mm4OutbreakPrevention;
  }

  // mm4oversizelimit - computed: false, optional: true, required: false
  private _mm4Oversizelimit?: number; 
  public get mm4Oversizelimit() {
    return this.getNumberAttribute('mm4oversizelimit');
  }
  public set mm4Oversizelimit(value: number) {
    this._mm4Oversizelimit = value;
  }
  public resetMm4Oversizelimit() {
    this._mm4Oversizelimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mm4OversizelimitInput() {
    return this._mm4Oversizelimit;
  }

  // mm7 - computed: true, optional: true, required: false
  private _mm7?: string[]; 
  public get mm7() {
    return cdktf.Fn.tolist(this.getListAttribute('mm7'));
  }
  public set mm7(value: string[]) {
    this._mm7 = value;
  }
  public resetMm7() {
    this._mm7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mm7Input() {
    return this._mm7;
  }

  // mm7_addr_hdr - computed: false, optional: true, required: false
  private _mm7AddrHdr?: string; 
  public get mm7AddrHdr() {
    return this.getStringAttribute('mm7_addr_hdr');
  }
  public set mm7AddrHdr(value: string) {
    this._mm7AddrHdr = value;
  }
  public resetMm7AddrHdr() {
    this._mm7AddrHdr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mm7AddrHdrInput() {
    return this._mm7AddrHdr;
  }

  // mm7_addr_source - computed: false, optional: true, required: false
  private _mm7AddrSource?: string; 
  public get mm7AddrSource() {
    return this.getStringAttribute('mm7_addr_source');
  }
  public set mm7AddrSource(value: string) {
    this._mm7AddrSource = value;
  }
  public resetMm7AddrSource() {
    this._mm7AddrSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mm7AddrSourceInput() {
    return this._mm7AddrSource;
  }

  // mm7_convert_hex - computed: false, optional: true, required: false
  private _mm7ConvertHex?: string; 
  public get mm7ConvertHex() {
    return this.getStringAttribute('mm7_convert_hex');
  }
  public set mm7ConvertHex(value: string) {
    this._mm7ConvertHex = value;
  }
  public resetMm7ConvertHex() {
    this._mm7ConvertHex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mm7ConvertHexInput() {
    return this._mm7ConvertHex;
  }

  // mm7_outbreak_prevention - computed: false, optional: true, required: false
  private _mm7OutbreakPrevention?: string; 
  public get mm7OutbreakPrevention() {
    return this.getStringAttribute('mm7_outbreak_prevention');
  }
  public set mm7OutbreakPrevention(value: string) {
    this._mm7OutbreakPrevention = value;
  }
  public resetMm7OutbreakPrevention() {
    this._mm7OutbreakPrevention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mm7OutbreakPreventionInput() {
    return this._mm7OutbreakPrevention;
  }

  // mm7comfortamount - computed: false, optional: true, required: false
  private _mm7Comfortamount?: number; 
  public get mm7Comfortamount() {
    return this.getNumberAttribute('mm7comfortamount');
  }
  public set mm7Comfortamount(value: number) {
    this._mm7Comfortamount = value;
  }
  public resetMm7Comfortamount() {
    this._mm7Comfortamount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mm7ComfortamountInput() {
    return this._mm7Comfortamount;
  }

  // mm7comfortinterval - computed: false, optional: true, required: false
  private _mm7Comfortinterval?: number; 
  public get mm7Comfortinterval() {
    return this.getNumberAttribute('mm7comfortinterval');
  }
  public set mm7Comfortinterval(value: number) {
    this._mm7Comfortinterval = value;
  }
  public resetMm7Comfortinterval() {
    this._mm7Comfortinterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mm7ComfortintervalInput() {
    return this._mm7Comfortinterval;
  }

  // mm7oversizelimit - computed: false, optional: true, required: false
  private _mm7Oversizelimit?: number; 
  public get mm7Oversizelimit() {
    return this.getNumberAttribute('mm7oversizelimit');
  }
  public set mm7Oversizelimit(value: number) {
    this._mm7Oversizelimit = value;
  }
  public resetMm7Oversizelimit() {
    this._mm7Oversizelimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mm7OversizelimitInput() {
    return this._mm7Oversizelimit;
  }

  // mms_antispam_mass_log - computed: false, optional: true, required: false
  private _mmsAntispamMassLog?: string; 
  public get mmsAntispamMassLog() {
    return this.getStringAttribute('mms_antispam_mass_log');
  }
  public set mmsAntispamMassLog(value: string) {
    this._mmsAntispamMassLog = value;
  }
  public resetMmsAntispamMassLog() {
    this._mmsAntispamMassLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mmsAntispamMassLogInput() {
    return this._mmsAntispamMassLog;
  }

  // mms_av_block_log - computed: false, optional: true, required: false
  private _mmsAvBlockLog?: string; 
  public get mmsAvBlockLog() {
    return this.getStringAttribute('mms_av_block_log');
  }
  public set mmsAvBlockLog(value: string) {
    this._mmsAvBlockLog = value;
  }
  public resetMmsAvBlockLog() {
    this._mmsAvBlockLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mmsAvBlockLogInput() {
    return this._mmsAvBlockLog;
  }

  // mms_av_oversize_log - computed: false, optional: true, required: false
  private _mmsAvOversizeLog?: string; 
  public get mmsAvOversizeLog() {
    return this.getStringAttribute('mms_av_oversize_log');
  }
  public set mmsAvOversizeLog(value: string) {
    this._mmsAvOversizeLog = value;
  }
  public resetMmsAvOversizeLog() {
    this._mmsAvOversizeLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mmsAvOversizeLogInput() {
    return this._mmsAvOversizeLog;
  }

  // mms_av_virus_log - computed: false, optional: true, required: false
  private _mmsAvVirusLog?: string; 
  public get mmsAvVirusLog() {
    return this.getStringAttribute('mms_av_virus_log');
  }
  public set mmsAvVirusLog(value: string) {
    this._mmsAvVirusLog = value;
  }
  public resetMmsAvVirusLog() {
    this._mmsAvVirusLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mmsAvVirusLogInput() {
    return this._mmsAvVirusLog;
  }

  // mms_carrier_endpoint_filter_log - computed: false, optional: true, required: false
  private _mmsCarrierEndpointFilterLog?: string; 
  public get mmsCarrierEndpointFilterLog() {
    return this.getStringAttribute('mms_carrier_endpoint_filter_log');
  }
  public set mmsCarrierEndpointFilterLog(value: string) {
    this._mmsCarrierEndpointFilterLog = value;
  }
  public resetMmsCarrierEndpointFilterLog() {
    this._mmsCarrierEndpointFilterLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mmsCarrierEndpointFilterLogInput() {
    return this._mmsCarrierEndpointFilterLog;
  }

  // mms_checksum_log - computed: false, optional: true, required: false
  private _mmsChecksumLog?: string; 
  public get mmsChecksumLog() {
    return this.getStringAttribute('mms_checksum_log');
  }
  public set mmsChecksumLog(value: string) {
    this._mmsChecksumLog = value;
  }
  public resetMmsChecksumLog() {
    this._mmsChecksumLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mmsChecksumLogInput() {
    return this._mmsChecksumLog;
  }

  // mms_checksum_table - computed: false, optional: true, required: false
  private _mmsChecksumTable?: string; 
  public get mmsChecksumTable() {
    return this.getStringAttribute('mms_checksum_table');
  }
  public set mmsChecksumTable(value: string) {
    this._mmsChecksumTable = value;
  }
  public resetMmsChecksumTable() {
    this._mmsChecksumTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mmsChecksumTableInput() {
    return this._mmsChecksumTable;
  }

  // mms_notification_log - computed: false, optional: true, required: false
  private _mmsNotificationLog?: string; 
  public get mmsNotificationLog() {
    return this.getStringAttribute('mms_notification_log');
  }
  public set mmsNotificationLog(value: string) {
    this._mmsNotificationLog = value;
  }
  public resetMmsNotificationLog() {
    this._mmsNotificationLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mmsNotificationLogInput() {
    return this._mmsNotificationLog;
  }

  // mms_web_content_log - computed: false, optional: true, required: false
  private _mmsWebContentLog?: string; 
  public get mmsWebContentLog() {
    return this.getStringAttribute('mms_web_content_log');
  }
  public set mmsWebContentLog(value: string) {
    this._mmsWebContentLog = value;
  }
  public resetMmsWebContentLog() {
    this._mmsWebContentLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mmsWebContentLogInput() {
    return this._mmsWebContentLog;
  }

  // mmsbwordthreshold - computed: false, optional: true, required: false
  private _mmsbwordthreshold?: number; 
  public get mmsbwordthreshold() {
    return this.getNumberAttribute('mmsbwordthreshold');
  }
  public set mmsbwordthreshold(value: number) {
    this._mmsbwordthreshold = value;
  }
  public resetMmsbwordthreshold() {
    this._mmsbwordthreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mmsbwordthresholdInput() {
    return this._mmsbwordthreshold;
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

  // remove_blocked_const_length - computed: false, optional: true, required: false
  private _removeBlockedConstLength?: string; 
  public get removeBlockedConstLength() {
    return this.getStringAttribute('remove_blocked_const_length');
  }
  public set removeBlockedConstLength(value: string) {
    this._removeBlockedConstLength = value;
  }
  public resetRemoveBlockedConstLength() {
    this._removeBlockedConstLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeBlockedConstLengthInput() {
    return this._removeBlockedConstLength;
  }

  // replacemsg_group - computed: false, optional: true, required: false
  private _replacemsgGroup?: string; 
  public get replacemsgGroup() {
    return this.getStringAttribute('replacemsg_group');
  }
  public set replacemsgGroup(value: string) {
    this._replacemsgGroup = value;
  }
  public resetReplacemsgGroup() {
    this._replacemsgGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacemsgGroupInput() {
    return this._replacemsgGroup;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // dupe - computed: false, optional: true, required: false
  private _dupe = new ObjectFirewallMmsprofileDupeOutputReference(this, "dupe");
  public get dupe() {
    return this._dupe;
  }
  public putDupe(value: ObjectFirewallMmsprofileDupe) {
    this._dupe.internalValue = value;
  }
  public resetDupe() {
    this._dupe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dupeInput() {
    return this._dupe.internalValue;
  }

  // flood - computed: false, optional: true, required: false
  private _flood = new ObjectFirewallMmsprofileFloodOutputReference(this, "flood");
  public get flood() {
    return this._flood;
  }
  public putFlood(value: ObjectFirewallMmsprofileFlood) {
    this._flood.internalValue = value;
  }
  public resetFlood() {
    this._flood.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floodInput() {
    return this._flood.internalValue;
  }

  // notif_msisdn - computed: false, optional: true, required: false
  private _notifMsisdn = new ObjectFirewallMmsprofileNotifMsisdnList(this, "notif_msisdn", false);
  public get notifMsisdn() {
    return this._notifMsisdn;
  }
  public putNotifMsisdn(value: ObjectFirewallMmsprofileNotifMsisdn[] | cdktf.IResolvable) {
    this._notifMsisdn.internalValue = value;
  }
  public resetNotifMsisdn() {
    this._notifMsisdn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifMsisdnInput() {
    return this._notifMsisdn.internalValue;
  }

  // notification - computed: false, optional: true, required: false
  private _notification = new ObjectFirewallMmsprofileNotificationOutputReference(this, "notification");
  public get notification() {
    return this._notification;
  }
  public putNotification(value: ObjectFirewallMmsprofileNotification) {
    this._notification.internalValue = value;
  }
  public resetNotification() {
    this._notification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification.internalValue;
  }

  // outbreak_prevention - computed: false, optional: true, required: false
  private _outbreakPrevention = new ObjectFirewallMmsprofileOutbreakPreventionOutputReference(this, "outbreak_prevention");
  public get outbreakPrevention() {
    return this._outbreakPrevention;
  }
  public putOutbreakPrevention(value: ObjectFirewallMmsprofileOutbreakPrevention) {
    this._outbreakPrevention.internalValue = value;
  }
  public resetOutbreakPrevention() {
    this._outbreakPrevention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outbreakPreventionInput() {
    return this._outbreakPrevention.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      avnotificationtable: cdktf.stringToTerraform(this._avnotificationtable),
      bwordtable: cdktf.stringToTerraform(this._bwordtable),
      carrier_endpoint_prefix: cdktf.stringToTerraform(this._carrierEndpointPrefix),
      carrier_endpoint_prefix_range_max: cdktf.numberToTerraform(this._carrierEndpointPrefixRangeMax),
      carrier_endpoint_prefix_range_min: cdktf.numberToTerraform(this._carrierEndpointPrefixRangeMin),
      carrier_endpoint_prefix_string: cdktf.stringToTerraform(this._carrierEndpointPrefixString),
      carrierendpointbwltable: cdktf.stringToTerraform(this._carrierendpointbwltable),
      comment: cdktf.stringToTerraform(this._comment),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      extended_utm_log: cdktf.stringToTerraform(this._extendedUtmLog),
      id: cdktf.stringToTerraform(this._id),
      mm1: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mm1),
      mm1_addr_hdr: cdktf.stringToTerraform(this._mm1AddrHdr),
      mm1_addr_source: cdktf.stringToTerraform(this._mm1AddrSource),
      mm1_convert_hex: cdktf.stringToTerraform(this._mm1ConvertHex),
      mm1_outbreak_prevention: cdktf.stringToTerraform(this._mm1OutbreakPrevention),
      mm1_retr_dupe: cdktf.stringToTerraform(this._mm1RetrDupe),
      mm1_retrieve_scan: cdktf.stringToTerraform(this._mm1RetrieveScan),
      mm1comfortamount: cdktf.numberToTerraform(this._mm1Comfortamount),
      mm1comfortinterval: cdktf.numberToTerraform(this._mm1Comfortinterval),
      mm1oversizelimit: cdktf.numberToTerraform(this._mm1Oversizelimit),
      mm3: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mm3),
      mm3_outbreak_prevention: cdktf.stringToTerraform(this._mm3OutbreakPrevention),
      mm3oversizelimit: cdktf.numberToTerraform(this._mm3Oversizelimit),
      mm4: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mm4),
      mm4_outbreak_prevention: cdktf.stringToTerraform(this._mm4OutbreakPrevention),
      mm4oversizelimit: cdktf.numberToTerraform(this._mm4Oversizelimit),
      mm7: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mm7),
      mm7_addr_hdr: cdktf.stringToTerraform(this._mm7AddrHdr),
      mm7_addr_source: cdktf.stringToTerraform(this._mm7AddrSource),
      mm7_convert_hex: cdktf.stringToTerraform(this._mm7ConvertHex),
      mm7_outbreak_prevention: cdktf.stringToTerraform(this._mm7OutbreakPrevention),
      mm7comfortamount: cdktf.numberToTerraform(this._mm7Comfortamount),
      mm7comfortinterval: cdktf.numberToTerraform(this._mm7Comfortinterval),
      mm7oversizelimit: cdktf.numberToTerraform(this._mm7Oversizelimit),
      mms_antispam_mass_log: cdktf.stringToTerraform(this._mmsAntispamMassLog),
      mms_av_block_log: cdktf.stringToTerraform(this._mmsAvBlockLog),
      mms_av_oversize_log: cdktf.stringToTerraform(this._mmsAvOversizeLog),
      mms_av_virus_log: cdktf.stringToTerraform(this._mmsAvVirusLog),
      mms_carrier_endpoint_filter_log: cdktf.stringToTerraform(this._mmsCarrierEndpointFilterLog),
      mms_checksum_log: cdktf.stringToTerraform(this._mmsChecksumLog),
      mms_checksum_table: cdktf.stringToTerraform(this._mmsChecksumTable),
      mms_notification_log: cdktf.stringToTerraform(this._mmsNotificationLog),
      mms_web_content_log: cdktf.stringToTerraform(this._mmsWebContentLog),
      mmsbwordthreshold: cdktf.numberToTerraform(this._mmsbwordthreshold),
      name: cdktf.stringToTerraform(this._name),
      remove_blocked_const_length: cdktf.stringToTerraform(this._removeBlockedConstLength),
      replacemsg_group: cdktf.stringToTerraform(this._replacemsgGroup),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      dupe: objectFirewallMmsprofileDupeToTerraform(this._dupe.internalValue),
      flood: objectFirewallMmsprofileFloodToTerraform(this._flood.internalValue),
      notif_msisdn: cdktf.listMapper(objectFirewallMmsprofileNotifMsisdnToTerraform, true)(this._notifMsisdn.internalValue),
      notification: objectFirewallMmsprofileNotificationToTerraform(this._notification.internalValue),
      outbreak_prevention: objectFirewallMmsprofileOutbreakPreventionToTerraform(this._outbreakPrevention.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      avnotificationtable: {
        value: cdktf.stringToHclTerraform(this._avnotificationtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bwordtable: {
        value: cdktf.stringToHclTerraform(this._bwordtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      carrier_endpoint_prefix: {
        value: cdktf.stringToHclTerraform(this._carrierEndpointPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      carrier_endpoint_prefix_range_max: {
        value: cdktf.numberToHclTerraform(this._carrierEndpointPrefixRangeMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      carrier_endpoint_prefix_range_min: {
        value: cdktf.numberToHclTerraform(this._carrierEndpointPrefixRangeMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      carrier_endpoint_prefix_string: {
        value: cdktf.stringToHclTerraform(this._carrierEndpointPrefixString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      carrierendpointbwltable: {
        value: cdktf.stringToHclTerraform(this._carrierendpointbwltable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
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
      extended_utm_log: {
        value: cdktf.stringToHclTerraform(this._extendedUtmLog),
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
      mm1: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mm1),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      mm1_addr_hdr: {
        value: cdktf.stringToHclTerraform(this._mm1AddrHdr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mm1_addr_source: {
        value: cdktf.stringToHclTerraform(this._mm1AddrSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mm1_convert_hex: {
        value: cdktf.stringToHclTerraform(this._mm1ConvertHex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mm1_outbreak_prevention: {
        value: cdktf.stringToHclTerraform(this._mm1OutbreakPrevention),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mm1_retr_dupe: {
        value: cdktf.stringToHclTerraform(this._mm1RetrDupe),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mm1_retrieve_scan: {
        value: cdktf.stringToHclTerraform(this._mm1RetrieveScan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mm1comfortamount: {
        value: cdktf.numberToHclTerraform(this._mm1Comfortamount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mm1comfortinterval: {
        value: cdktf.numberToHclTerraform(this._mm1Comfortinterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mm1oversizelimit: {
        value: cdktf.numberToHclTerraform(this._mm1Oversizelimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mm3: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mm3),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      mm3_outbreak_prevention: {
        value: cdktf.stringToHclTerraform(this._mm3OutbreakPrevention),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mm3oversizelimit: {
        value: cdktf.numberToHclTerraform(this._mm3Oversizelimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mm4: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mm4),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      mm4_outbreak_prevention: {
        value: cdktf.stringToHclTerraform(this._mm4OutbreakPrevention),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mm4oversizelimit: {
        value: cdktf.numberToHclTerraform(this._mm4Oversizelimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mm7: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mm7),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      mm7_addr_hdr: {
        value: cdktf.stringToHclTerraform(this._mm7AddrHdr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mm7_addr_source: {
        value: cdktf.stringToHclTerraform(this._mm7AddrSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mm7_convert_hex: {
        value: cdktf.stringToHclTerraform(this._mm7ConvertHex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mm7_outbreak_prevention: {
        value: cdktf.stringToHclTerraform(this._mm7OutbreakPrevention),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mm7comfortamount: {
        value: cdktf.numberToHclTerraform(this._mm7Comfortamount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mm7comfortinterval: {
        value: cdktf.numberToHclTerraform(this._mm7Comfortinterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mm7oversizelimit: {
        value: cdktf.numberToHclTerraform(this._mm7Oversizelimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mms_antispam_mass_log: {
        value: cdktf.stringToHclTerraform(this._mmsAntispamMassLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mms_av_block_log: {
        value: cdktf.stringToHclTerraform(this._mmsAvBlockLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mms_av_oversize_log: {
        value: cdktf.stringToHclTerraform(this._mmsAvOversizeLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mms_av_virus_log: {
        value: cdktf.stringToHclTerraform(this._mmsAvVirusLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mms_carrier_endpoint_filter_log: {
        value: cdktf.stringToHclTerraform(this._mmsCarrierEndpointFilterLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mms_checksum_log: {
        value: cdktf.stringToHclTerraform(this._mmsChecksumLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mms_checksum_table: {
        value: cdktf.stringToHclTerraform(this._mmsChecksumTable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mms_notification_log: {
        value: cdktf.stringToHclTerraform(this._mmsNotificationLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mms_web_content_log: {
        value: cdktf.stringToHclTerraform(this._mmsWebContentLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mmsbwordthreshold: {
        value: cdktf.numberToHclTerraform(this._mmsbwordthreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remove_blocked_const_length: {
        value: cdktf.stringToHclTerraform(this._removeBlockedConstLength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replacemsg_group: {
        value: cdktf.stringToHclTerraform(this._replacemsgGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dupe: {
        value: objectFirewallMmsprofileDupeToHclTerraform(this._dupe.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallMmsprofileDupeList",
      },
      flood: {
        value: objectFirewallMmsprofileFloodToHclTerraform(this._flood.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallMmsprofileFloodList",
      },
      notif_msisdn: {
        value: cdktf.listMapperHcl(objectFirewallMmsprofileNotifMsisdnToHclTerraform, true)(this._notifMsisdn.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallMmsprofileNotifMsisdnList",
      },
      notification: {
        value: objectFirewallMmsprofileNotificationToHclTerraform(this._notification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallMmsprofileNotificationList",
      },
      outbreak_prevention: {
        value: objectFirewallMmsprofileOutbreakPreventionToHclTerraform(this._outbreakPrevention.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallMmsprofileOutbreakPreventionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
