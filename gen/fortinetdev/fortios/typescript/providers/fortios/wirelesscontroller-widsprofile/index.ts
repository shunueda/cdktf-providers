// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelesscontrollerWidsprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#adhoc_network WirelesscontrollerWidsprofile#adhoc_network}
  */
  readonly adhocNetwork?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#adhoc_valid_ssid WirelesscontrollerWidsprofile#adhoc_valid_ssid}
  */
  readonly adhocValidSsid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#air_jack WirelesscontrollerWidsprofile#air_jack}
  */
  readonly airJack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#ap_auto_suppress WirelesscontrollerWidsprofile#ap_auto_suppress}
  */
  readonly apAutoSuppress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#ap_bgscan_disable_day WirelesscontrollerWidsprofile#ap_bgscan_disable_day}
  */
  readonly apBgscanDisableDay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#ap_bgscan_disable_end WirelesscontrollerWidsprofile#ap_bgscan_disable_end}
  */
  readonly apBgscanDisableEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#ap_bgscan_disable_start WirelesscontrollerWidsprofile#ap_bgscan_disable_start}
  */
  readonly apBgscanDisableStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#ap_bgscan_duration WirelesscontrollerWidsprofile#ap_bgscan_duration}
  */
  readonly apBgscanDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#ap_bgscan_idle WirelesscontrollerWidsprofile#ap_bgscan_idle}
  */
  readonly apBgscanIdle?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#ap_bgscan_intv WirelesscontrollerWidsprofile#ap_bgscan_intv}
  */
  readonly apBgscanIntv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#ap_bgscan_period WirelesscontrollerWidsprofile#ap_bgscan_period}
  */
  readonly apBgscanPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#ap_bgscan_report_intv WirelesscontrollerWidsprofile#ap_bgscan_report_intv}
  */
  readonly apBgscanReportIntv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#ap_fgscan_report_intv WirelesscontrollerWidsprofile#ap_fgscan_report_intv}
  */
  readonly apFgscanReportIntv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#ap_impersonation WirelesscontrollerWidsprofile#ap_impersonation}
  */
  readonly apImpersonation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#ap_scan WirelesscontrollerWidsprofile#ap_scan}
  */
  readonly apScan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#ap_scan_passive WirelesscontrollerWidsprofile#ap_scan_passive}
  */
  readonly apScanPassive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#ap_scan_threshold WirelesscontrollerWidsprofile#ap_scan_threshold}
  */
  readonly apScanThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#ap_spoofing WirelesscontrollerWidsprofile#ap_spoofing}
  */
  readonly apSpoofing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#asleap_attack WirelesscontrollerWidsprofile#asleap_attack}
  */
  readonly asleapAttack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#assoc_flood_thresh WirelesscontrollerWidsprofile#assoc_flood_thresh}
  */
  readonly assocFloodThresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#assoc_flood_time WirelesscontrollerWidsprofile#assoc_flood_time}
  */
  readonly assocFloodTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#assoc_frame_flood WirelesscontrollerWidsprofile#assoc_frame_flood}
  */
  readonly assocFrameFlood?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#auth_flood_thresh WirelesscontrollerWidsprofile#auth_flood_thresh}
  */
  readonly authFloodThresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#auth_flood_time WirelesscontrollerWidsprofile#auth_flood_time}
  */
  readonly authFloodTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#auth_frame_flood WirelesscontrollerWidsprofile#auth_frame_flood}
  */
  readonly authFrameFlood?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#bcn_flood WirelesscontrollerWidsprofile#bcn_flood}
  */
  readonly bcnFlood?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#bcn_flood_thresh WirelesscontrollerWidsprofile#bcn_flood_thresh}
  */
  readonly bcnFloodThresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#bcn_flood_time WirelesscontrollerWidsprofile#bcn_flood_time}
  */
  readonly bcnFloodTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#beacon_wrong_channel WirelesscontrollerWidsprofile#beacon_wrong_channel}
  */
  readonly beaconWrongChannel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#block_ack_flood WirelesscontrollerWidsprofile#block_ack_flood}
  */
  readonly blockAckFlood?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#block_ack_flood_thresh WirelesscontrollerWidsprofile#block_ack_flood_thresh}
  */
  readonly blockAckFloodThresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#block_ack_flood_time WirelesscontrollerWidsprofile#block_ack_flood_time}
  */
  readonly blockAckFloodTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#chan_based_mitm WirelesscontrollerWidsprofile#chan_based_mitm}
  */
  readonly chanBasedMitm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#client_flood WirelesscontrollerWidsprofile#client_flood}
  */
  readonly clientFlood?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#client_flood_thresh WirelesscontrollerWidsprofile#client_flood_thresh}
  */
  readonly clientFloodThresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#client_flood_time WirelesscontrollerWidsprofile#client_flood_time}
  */
  readonly clientFloodTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#comment WirelesscontrollerWidsprofile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#cts_flood WirelesscontrollerWidsprofile#cts_flood}
  */
  readonly ctsFlood?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#cts_flood_thresh WirelesscontrollerWidsprofile#cts_flood_thresh}
  */
  readonly ctsFloodThresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#cts_flood_time WirelesscontrollerWidsprofile#cts_flood_time}
  */
  readonly ctsFloodTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#deauth_broadcast WirelesscontrollerWidsprofile#deauth_broadcast}
  */
  readonly deauthBroadcast?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#deauth_unknown_src_thresh WirelesscontrollerWidsprofile#deauth_unknown_src_thresh}
  */
  readonly deauthUnknownSrcThresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#disassoc_broadcast WirelesscontrollerWidsprofile#disassoc_broadcast}
  */
  readonly disassocBroadcast?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#disconnect_station WirelesscontrollerWidsprofile#disconnect_station}
  */
  readonly disconnectStation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#dynamic_sort_subtable WirelesscontrollerWidsprofile#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#eapol_fail_flood WirelesscontrollerWidsprofile#eapol_fail_flood}
  */
  readonly eapolFailFlood?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#eapol_fail_intv WirelesscontrollerWidsprofile#eapol_fail_intv}
  */
  readonly eapolFailIntv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#eapol_fail_thresh WirelesscontrollerWidsprofile#eapol_fail_thresh}
  */
  readonly eapolFailThresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#eapol_key_overflow WirelesscontrollerWidsprofile#eapol_key_overflow}
  */
  readonly eapolKeyOverflow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#eapol_logoff_flood WirelesscontrollerWidsprofile#eapol_logoff_flood}
  */
  readonly eapolLogoffFlood?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#eapol_logoff_intv WirelesscontrollerWidsprofile#eapol_logoff_intv}
  */
  readonly eapolLogoffIntv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#eapol_logoff_thresh WirelesscontrollerWidsprofile#eapol_logoff_thresh}
  */
  readonly eapolLogoffThresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#eapol_pre_fail_flood WirelesscontrollerWidsprofile#eapol_pre_fail_flood}
  */
  readonly eapolPreFailFlood?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#eapol_pre_fail_intv WirelesscontrollerWidsprofile#eapol_pre_fail_intv}
  */
  readonly eapolPreFailIntv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#eapol_pre_fail_thresh WirelesscontrollerWidsprofile#eapol_pre_fail_thresh}
  */
  readonly eapolPreFailThresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#eapol_pre_succ_flood WirelesscontrollerWidsprofile#eapol_pre_succ_flood}
  */
  readonly eapolPreSuccFlood?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#eapol_pre_succ_intv WirelesscontrollerWidsprofile#eapol_pre_succ_intv}
  */
  readonly eapolPreSuccIntv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#eapol_pre_succ_thresh WirelesscontrollerWidsprofile#eapol_pre_succ_thresh}
  */
  readonly eapolPreSuccThresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#eapol_start_flood WirelesscontrollerWidsprofile#eapol_start_flood}
  */
  readonly eapolStartFlood?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#eapol_start_intv WirelesscontrollerWidsprofile#eapol_start_intv}
  */
  readonly eapolStartIntv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#eapol_start_thresh WirelesscontrollerWidsprofile#eapol_start_thresh}
  */
  readonly eapolStartThresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#eapol_succ_flood WirelesscontrollerWidsprofile#eapol_succ_flood}
  */
  readonly eapolSuccFlood?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#eapol_succ_intv WirelesscontrollerWidsprofile#eapol_succ_intv}
  */
  readonly eapolSuccIntv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#eapol_succ_thresh WirelesscontrollerWidsprofile#eapol_succ_thresh}
  */
  readonly eapolSuccThresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#fata_jack WirelesscontrollerWidsprofile#fata_jack}
  */
  readonly fataJack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#fuzzed_beacon WirelesscontrollerWidsprofile#fuzzed_beacon}
  */
  readonly fuzzedBeacon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#fuzzed_probe_request WirelesscontrollerWidsprofile#fuzzed_probe_request}
  */
  readonly fuzzedProbeRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#fuzzed_probe_response WirelesscontrollerWidsprofile#fuzzed_probe_response}
  */
  readonly fuzzedProbeResponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#get_all_tables WirelesscontrollerWidsprofile#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#hotspotter_attack WirelesscontrollerWidsprofile#hotspotter_attack}
  */
  readonly hotspotterAttack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#ht_40mhz_intolerance WirelesscontrollerWidsprofile#ht_40mhz_intolerance}
  */
  readonly ht40MhzIntolerance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#ht_greenfield WirelesscontrollerWidsprofile#ht_greenfield}
  */
  readonly htGreenfield?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#id WirelesscontrollerWidsprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#invalid_addr_combination WirelesscontrollerWidsprofile#invalid_addr_combination}
  */
  readonly invalidAddrCombination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#invalid_mac_oui WirelesscontrollerWidsprofile#invalid_mac_oui}
  */
  readonly invalidMacOui?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#long_duration_attack WirelesscontrollerWidsprofile#long_duration_attack}
  */
  readonly longDurationAttack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#long_duration_thresh WirelesscontrollerWidsprofile#long_duration_thresh}
  */
  readonly longDurationThresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#malformed_association WirelesscontrollerWidsprofile#malformed_association}
  */
  readonly malformedAssociation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#malformed_auth WirelesscontrollerWidsprofile#malformed_auth}
  */
  readonly malformedAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#malformed_ht_ie WirelesscontrollerWidsprofile#malformed_ht_ie}
  */
  readonly malformedHtIe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#name WirelesscontrollerWidsprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#netstumbler WirelesscontrollerWidsprofile#netstumbler}
  */
  readonly netstumbler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#netstumbler_thresh WirelesscontrollerWidsprofile#netstumbler_thresh}
  */
  readonly netstumblerThresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#netstumbler_time WirelesscontrollerWidsprofile#netstumbler_time}
  */
  readonly netstumblerTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#null_ssid_probe_resp WirelesscontrollerWidsprofile#null_ssid_probe_resp}
  */
  readonly nullSsidProbeResp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#omerta_attack WirelesscontrollerWidsprofile#omerta_attack}
  */
  readonly omertaAttack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#overflow_ie WirelesscontrollerWidsprofile#overflow_ie}
  */
  readonly overflowIe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#probe_flood WirelesscontrollerWidsprofile#probe_flood}
  */
  readonly probeFlood?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#probe_flood_thresh WirelesscontrollerWidsprofile#probe_flood_thresh}
  */
  readonly probeFloodThresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#probe_flood_time WirelesscontrollerWidsprofile#probe_flood_time}
  */
  readonly probeFloodTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#pspoll_flood WirelesscontrollerWidsprofile#pspoll_flood}
  */
  readonly pspollFlood?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#pspoll_flood_thresh WirelesscontrollerWidsprofile#pspoll_flood_thresh}
  */
  readonly pspollFloodThresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#pspoll_flood_time WirelesscontrollerWidsprofile#pspoll_flood_time}
  */
  readonly pspollFloodTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#pwsave_dos_attack WirelesscontrollerWidsprofile#pwsave_dos_attack}
  */
  readonly pwsaveDosAttack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#reassoc_flood WirelesscontrollerWidsprofile#reassoc_flood}
  */
  readonly reassocFlood?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#reassoc_flood_thresh WirelesscontrollerWidsprofile#reassoc_flood_thresh}
  */
  readonly reassocFloodThresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#reassoc_flood_time WirelesscontrollerWidsprofile#reassoc_flood_time}
  */
  readonly reassocFloodTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#risky_encryption WirelesscontrollerWidsprofile#risky_encryption}
  */
  readonly riskyEncryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#rts_flood WirelesscontrollerWidsprofile#rts_flood}
  */
  readonly rtsFlood?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#rts_flood_thresh WirelesscontrollerWidsprofile#rts_flood_thresh}
  */
  readonly rtsFloodThresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#rts_flood_time WirelesscontrollerWidsprofile#rts_flood_time}
  */
  readonly rtsFloodTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#sensor_mode WirelesscontrollerWidsprofile#sensor_mode}
  */
  readonly sensorMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#spoofed_deauth WirelesscontrollerWidsprofile#spoofed_deauth}
  */
  readonly spoofedDeauth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#unencrypted_valid WirelesscontrollerWidsprofile#unencrypted_valid}
  */
  readonly unencryptedValid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#valid_client_misassociation WirelesscontrollerWidsprofile#valid_client_misassociation}
  */
  readonly validClientMisassociation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#valid_ssid_misuse WirelesscontrollerWidsprofile#valid_ssid_misuse}
  */
  readonly validSsidMisuse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#vdomparam WirelesscontrollerWidsprofile#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#weak_wep_iv WirelesscontrollerWidsprofile#weak_wep_iv}
  */
  readonly weakWepIv?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#wellenreiter WirelesscontrollerWidsprofile#wellenreiter}
  */
  readonly wellenreiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#wellenreiter_thresh WirelesscontrollerWidsprofile#wellenreiter_thresh}
  */
  readonly wellenreiterThresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#wellenreiter_time WirelesscontrollerWidsprofile#wellenreiter_time}
  */
  readonly wellenreiterTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#windows_bridge WirelesscontrollerWidsprofile#windows_bridge}
  */
  readonly windowsBridge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#wireless_bridge WirelesscontrollerWidsprofile#wireless_bridge}
  */
  readonly wirelessBridge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#wpa_ft_attack WirelesscontrollerWidsprofile#wpa_ft_attack}
  */
  readonly wpaFtAttack?: string;
  /**
  * ap_bgscan_disable_schedules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#ap_bgscan_disable_schedules WirelesscontrollerWidsprofile#ap_bgscan_disable_schedules}
  */
  readonly apBgscanDisableSchedules?: WirelesscontrollerWidsprofileApBgscanDisableSchedules[] | cdktf.IResolvable;
  /**
  * ap_scan_channel_list_2g_5g block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#ap_scan_channel_list_2g_5g WirelesscontrollerWidsprofile#ap_scan_channel_list_2g_5g}
  */
  readonly apScanChannelList2G5G?: WirelesscontrollerWidsprofileApScanChannelList2G5G[] | cdktf.IResolvable;
  /**
  * ap_scan_channel_list_6g block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#ap_scan_channel_list_6g WirelesscontrollerWidsprofile#ap_scan_channel_list_6g}
  */
  readonly apScanChannelList6G?: WirelesscontrollerWidsprofileApScanChannelList6G[] | cdktf.IResolvable;
}
export interface WirelesscontrollerWidsprofileApBgscanDisableSchedules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#name WirelesscontrollerWidsprofile#name}
  */
  readonly name?: string;
}

export function wirelesscontrollerWidsprofileApBgscanDisableSchedulesToTerraform(struct?: WirelesscontrollerWidsprofileApBgscanDisableSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function wirelesscontrollerWidsprofileApBgscanDisableSchedulesToHclTerraform(struct?: WirelesscontrollerWidsprofileApBgscanDisableSchedules | cdktf.IResolvable): any {
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

export class WirelesscontrollerWidsprofileApBgscanDisableSchedulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelesscontrollerWidsprofileApBgscanDisableSchedules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WirelesscontrollerWidsprofileApBgscanDisableSchedules | cdktf.IResolvable | undefined) {
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

export class WirelesscontrollerWidsprofileApBgscanDisableSchedulesList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerWidsprofileApBgscanDisableSchedules[] | cdktf.IResolvable

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
  public get(index: number): WirelesscontrollerWidsprofileApBgscanDisableSchedulesOutputReference {
    return new WirelesscontrollerWidsprofileApBgscanDisableSchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelesscontrollerWidsprofileApScanChannelList2G5G {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#chan WirelesscontrollerWidsprofile#chan}
  */
  readonly chan?: string;
}

export function wirelesscontrollerWidsprofileApScanChannelList2G5GToTerraform(struct?: WirelesscontrollerWidsprofileApScanChannelList2G5G | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chan: cdktf.stringToTerraform(struct!.chan),
  }
}


export function wirelesscontrollerWidsprofileApScanChannelList2G5GToHclTerraform(struct?: WirelesscontrollerWidsprofileApScanChannelList2G5G | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chan: {
      value: cdktf.stringToHclTerraform(struct!.chan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerWidsprofileApScanChannelList2G5GOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelesscontrollerWidsprofileApScanChannelList2G5G | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chan !== undefined) {
      hasAnyValues = true;
      internalValueResult.chan = this._chan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerWidsprofileApScanChannelList2G5G | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chan = value.chan;
    }
  }

  // chan - computed: false, optional: true, required: false
  private _chan?: string; 
  public get chan() {
    return this.getStringAttribute('chan');
  }
  public set chan(value: string) {
    this._chan = value;
  }
  public resetChan() {
    this._chan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chanInput() {
    return this._chan;
  }
}

export class WirelesscontrollerWidsprofileApScanChannelList2G5GList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerWidsprofileApScanChannelList2G5G[] | cdktf.IResolvable

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
  public get(index: number): WirelesscontrollerWidsprofileApScanChannelList2G5GOutputReference {
    return new WirelesscontrollerWidsprofileApScanChannelList2G5GOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelesscontrollerWidsprofileApScanChannelList6G {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#chan WirelesscontrollerWidsprofile#chan}
  */
  readonly chan?: string;
}

export function wirelesscontrollerWidsprofileApScanChannelList6GToTerraform(struct?: WirelesscontrollerWidsprofileApScanChannelList6G | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chan: cdktf.stringToTerraform(struct!.chan),
  }
}


export function wirelesscontrollerWidsprofileApScanChannelList6GToHclTerraform(struct?: WirelesscontrollerWidsprofileApScanChannelList6G | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chan: {
      value: cdktf.stringToHclTerraform(struct!.chan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerWidsprofileApScanChannelList6GOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelesscontrollerWidsprofileApScanChannelList6G | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chan !== undefined) {
      hasAnyValues = true;
      internalValueResult.chan = this._chan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerWidsprofileApScanChannelList6G | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chan = value.chan;
    }
  }

  // chan - computed: false, optional: true, required: false
  private _chan?: string; 
  public get chan() {
    return this.getStringAttribute('chan');
  }
  public set chan(value: string) {
    this._chan = value;
  }
  public resetChan() {
    this._chan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chanInput() {
    return this._chan;
  }
}

export class WirelesscontrollerWidsprofileApScanChannelList6GList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerWidsprofileApScanChannelList6G[] | cdktf.IResolvable

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
  public get(index: number): WirelesscontrollerWidsprofileApScanChannelList6GOutputReference {
    return new WirelesscontrollerWidsprofileApScanChannelList6GOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile fortios_wirelesscontroller_widsprofile}
*/
export class WirelesscontrollerWidsprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_wirelesscontroller_widsprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelesscontrollerWidsprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelesscontrollerWidsprofile to import
  * @param importFromId The id of the existing WirelesscontrollerWidsprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelesscontrollerWidsprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_wirelesscontroller_widsprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_widsprofile fortios_wirelesscontroller_widsprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelesscontrollerWidsprofileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WirelesscontrollerWidsprofileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_wirelesscontroller_widsprofile',
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
    this._adhocNetwork = config.adhocNetwork;
    this._adhocValidSsid = config.adhocValidSsid;
    this._airJack = config.airJack;
    this._apAutoSuppress = config.apAutoSuppress;
    this._apBgscanDisableDay = config.apBgscanDisableDay;
    this._apBgscanDisableEnd = config.apBgscanDisableEnd;
    this._apBgscanDisableStart = config.apBgscanDisableStart;
    this._apBgscanDuration = config.apBgscanDuration;
    this._apBgscanIdle = config.apBgscanIdle;
    this._apBgscanIntv = config.apBgscanIntv;
    this._apBgscanPeriod = config.apBgscanPeriod;
    this._apBgscanReportIntv = config.apBgscanReportIntv;
    this._apFgscanReportIntv = config.apFgscanReportIntv;
    this._apImpersonation = config.apImpersonation;
    this._apScan = config.apScan;
    this._apScanPassive = config.apScanPassive;
    this._apScanThreshold = config.apScanThreshold;
    this._apSpoofing = config.apSpoofing;
    this._asleapAttack = config.asleapAttack;
    this._assocFloodThresh = config.assocFloodThresh;
    this._assocFloodTime = config.assocFloodTime;
    this._assocFrameFlood = config.assocFrameFlood;
    this._authFloodThresh = config.authFloodThresh;
    this._authFloodTime = config.authFloodTime;
    this._authFrameFlood = config.authFrameFlood;
    this._bcnFlood = config.bcnFlood;
    this._bcnFloodThresh = config.bcnFloodThresh;
    this._bcnFloodTime = config.bcnFloodTime;
    this._beaconWrongChannel = config.beaconWrongChannel;
    this._blockAckFlood = config.blockAckFlood;
    this._blockAckFloodThresh = config.blockAckFloodThresh;
    this._blockAckFloodTime = config.blockAckFloodTime;
    this._chanBasedMitm = config.chanBasedMitm;
    this._clientFlood = config.clientFlood;
    this._clientFloodThresh = config.clientFloodThresh;
    this._clientFloodTime = config.clientFloodTime;
    this._comment = config.comment;
    this._ctsFlood = config.ctsFlood;
    this._ctsFloodThresh = config.ctsFloodThresh;
    this._ctsFloodTime = config.ctsFloodTime;
    this._deauthBroadcast = config.deauthBroadcast;
    this._deauthUnknownSrcThresh = config.deauthUnknownSrcThresh;
    this._disassocBroadcast = config.disassocBroadcast;
    this._disconnectStation = config.disconnectStation;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._eapolFailFlood = config.eapolFailFlood;
    this._eapolFailIntv = config.eapolFailIntv;
    this._eapolFailThresh = config.eapolFailThresh;
    this._eapolKeyOverflow = config.eapolKeyOverflow;
    this._eapolLogoffFlood = config.eapolLogoffFlood;
    this._eapolLogoffIntv = config.eapolLogoffIntv;
    this._eapolLogoffThresh = config.eapolLogoffThresh;
    this._eapolPreFailFlood = config.eapolPreFailFlood;
    this._eapolPreFailIntv = config.eapolPreFailIntv;
    this._eapolPreFailThresh = config.eapolPreFailThresh;
    this._eapolPreSuccFlood = config.eapolPreSuccFlood;
    this._eapolPreSuccIntv = config.eapolPreSuccIntv;
    this._eapolPreSuccThresh = config.eapolPreSuccThresh;
    this._eapolStartFlood = config.eapolStartFlood;
    this._eapolStartIntv = config.eapolStartIntv;
    this._eapolStartThresh = config.eapolStartThresh;
    this._eapolSuccFlood = config.eapolSuccFlood;
    this._eapolSuccIntv = config.eapolSuccIntv;
    this._eapolSuccThresh = config.eapolSuccThresh;
    this._fataJack = config.fataJack;
    this._fuzzedBeacon = config.fuzzedBeacon;
    this._fuzzedProbeRequest = config.fuzzedProbeRequest;
    this._fuzzedProbeResponse = config.fuzzedProbeResponse;
    this._getAllTables = config.fetchAllTables;
    this._hotspotterAttack = config.hotspotterAttack;
    this._ht40MhzIntolerance = config.ht40MhzIntolerance;
    this._htGreenfield = config.htGreenfield;
    this._id = config.id;
    this._invalidAddrCombination = config.invalidAddrCombination;
    this._invalidMacOui = config.invalidMacOui;
    this._longDurationAttack = config.longDurationAttack;
    this._longDurationThresh = config.longDurationThresh;
    this._malformedAssociation = config.malformedAssociation;
    this._malformedAuth = config.malformedAuth;
    this._malformedHtIe = config.malformedHtIe;
    this._name = config.name;
    this._netstumbler = config.netstumbler;
    this._netstumblerThresh = config.netstumblerThresh;
    this._netstumblerTime = config.netstumblerTime;
    this._nullSsidProbeResp = config.nullSsidProbeResp;
    this._omertaAttack = config.omertaAttack;
    this._overflowIe = config.overflowIe;
    this._probeFlood = config.probeFlood;
    this._probeFloodThresh = config.probeFloodThresh;
    this._probeFloodTime = config.probeFloodTime;
    this._pspollFlood = config.pspollFlood;
    this._pspollFloodThresh = config.pspollFloodThresh;
    this._pspollFloodTime = config.pspollFloodTime;
    this._pwsaveDosAttack = config.pwsaveDosAttack;
    this._reassocFlood = config.reassocFlood;
    this._reassocFloodThresh = config.reassocFloodThresh;
    this._reassocFloodTime = config.reassocFloodTime;
    this._riskyEncryption = config.riskyEncryption;
    this._rtsFlood = config.rtsFlood;
    this._rtsFloodThresh = config.rtsFloodThresh;
    this._rtsFloodTime = config.rtsFloodTime;
    this._sensorMode = config.sensorMode;
    this._spoofedDeauth = config.spoofedDeauth;
    this._unencryptedValid = config.unencryptedValid;
    this._validClientMisassociation = config.validClientMisassociation;
    this._validSsidMisuse = config.validSsidMisuse;
    this._vdomparam = config.vdomparam;
    this._weakWepIv = config.weakWepIv;
    this._wellenreiter = config.wellenreiter;
    this._wellenreiterThresh = config.wellenreiterThresh;
    this._wellenreiterTime = config.wellenreiterTime;
    this._windowsBridge = config.windowsBridge;
    this._wirelessBridge = config.wirelessBridge;
    this._wpaFtAttack = config.wpaFtAttack;
    this._apBgscanDisableSchedules.internalValue = config.apBgscanDisableSchedules;
    this._apScanChannelList2G5G.internalValue = config.apScanChannelList2G5G;
    this._apScanChannelList6G.internalValue = config.apScanChannelList6G;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adhoc_network - computed: true, optional: true, required: false
  private _adhocNetwork?: string; 
  public get adhocNetwork() {
    return this.getStringAttribute('adhoc_network');
  }
  public set adhocNetwork(value: string) {
    this._adhocNetwork = value;
  }
  public resetAdhocNetwork() {
    this._adhocNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adhocNetworkInput() {
    return this._adhocNetwork;
  }

  // adhoc_valid_ssid - computed: true, optional: true, required: false
  private _adhocValidSsid?: string; 
  public get adhocValidSsid() {
    return this.getStringAttribute('adhoc_valid_ssid');
  }
  public set adhocValidSsid(value: string) {
    this._adhocValidSsid = value;
  }
  public resetAdhocValidSsid() {
    this._adhocValidSsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adhocValidSsidInput() {
    return this._adhocValidSsid;
  }

  // air_jack - computed: true, optional: true, required: false
  private _airJack?: string; 
  public get airJack() {
    return this.getStringAttribute('air_jack');
  }
  public set airJack(value: string) {
    this._airJack = value;
  }
  public resetAirJack() {
    this._airJack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get airJackInput() {
    return this._airJack;
  }

  // ap_auto_suppress - computed: true, optional: true, required: false
  private _apAutoSuppress?: string; 
  public get apAutoSuppress() {
    return this.getStringAttribute('ap_auto_suppress');
  }
  public set apAutoSuppress(value: string) {
    this._apAutoSuppress = value;
  }
  public resetApAutoSuppress() {
    this._apAutoSuppress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apAutoSuppressInput() {
    return this._apAutoSuppress;
  }

  // ap_bgscan_disable_day - computed: false, optional: true, required: false
  private _apBgscanDisableDay?: string; 
  public get apBgscanDisableDay() {
    return this.getStringAttribute('ap_bgscan_disable_day');
  }
  public set apBgscanDisableDay(value: string) {
    this._apBgscanDisableDay = value;
  }
  public resetApBgscanDisableDay() {
    this._apBgscanDisableDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apBgscanDisableDayInput() {
    return this._apBgscanDisableDay;
  }

  // ap_bgscan_disable_end - computed: false, optional: true, required: false
  private _apBgscanDisableEnd?: string; 
  public get apBgscanDisableEnd() {
    return this.getStringAttribute('ap_bgscan_disable_end');
  }
  public set apBgscanDisableEnd(value: string) {
    this._apBgscanDisableEnd = value;
  }
  public resetApBgscanDisableEnd() {
    this._apBgscanDisableEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apBgscanDisableEndInput() {
    return this._apBgscanDisableEnd;
  }

  // ap_bgscan_disable_start - computed: false, optional: true, required: false
  private _apBgscanDisableStart?: string; 
  public get apBgscanDisableStart() {
    return this.getStringAttribute('ap_bgscan_disable_start');
  }
  public set apBgscanDisableStart(value: string) {
    this._apBgscanDisableStart = value;
  }
  public resetApBgscanDisableStart() {
    this._apBgscanDisableStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apBgscanDisableStartInput() {
    return this._apBgscanDisableStart;
  }

  // ap_bgscan_duration - computed: true, optional: true, required: false
  private _apBgscanDuration?: number; 
  public get apBgscanDuration() {
    return this.getNumberAttribute('ap_bgscan_duration');
  }
  public set apBgscanDuration(value: number) {
    this._apBgscanDuration = value;
  }
  public resetApBgscanDuration() {
    this._apBgscanDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apBgscanDurationInput() {
    return this._apBgscanDuration;
  }

  // ap_bgscan_idle - computed: true, optional: true, required: false
  private _apBgscanIdle?: number; 
  public get apBgscanIdle() {
    return this.getNumberAttribute('ap_bgscan_idle');
  }
  public set apBgscanIdle(value: number) {
    this._apBgscanIdle = value;
  }
  public resetApBgscanIdle() {
    this._apBgscanIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apBgscanIdleInput() {
    return this._apBgscanIdle;
  }

  // ap_bgscan_intv - computed: true, optional: true, required: false
  private _apBgscanIntv?: number; 
  public get apBgscanIntv() {
    return this.getNumberAttribute('ap_bgscan_intv');
  }
  public set apBgscanIntv(value: number) {
    this._apBgscanIntv = value;
  }
  public resetApBgscanIntv() {
    this._apBgscanIntv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apBgscanIntvInput() {
    return this._apBgscanIntv;
  }

  // ap_bgscan_period - computed: true, optional: true, required: false
  private _apBgscanPeriod?: number; 
  public get apBgscanPeriod() {
    return this.getNumberAttribute('ap_bgscan_period');
  }
  public set apBgscanPeriod(value: number) {
    this._apBgscanPeriod = value;
  }
  public resetApBgscanPeriod() {
    this._apBgscanPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apBgscanPeriodInput() {
    return this._apBgscanPeriod;
  }

  // ap_bgscan_report_intv - computed: true, optional: true, required: false
  private _apBgscanReportIntv?: number; 
  public get apBgscanReportIntv() {
    return this.getNumberAttribute('ap_bgscan_report_intv');
  }
  public set apBgscanReportIntv(value: number) {
    this._apBgscanReportIntv = value;
  }
  public resetApBgscanReportIntv() {
    this._apBgscanReportIntv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apBgscanReportIntvInput() {
    return this._apBgscanReportIntv;
  }

  // ap_fgscan_report_intv - computed: true, optional: true, required: false
  private _apFgscanReportIntv?: number; 
  public get apFgscanReportIntv() {
    return this.getNumberAttribute('ap_fgscan_report_intv');
  }
  public set apFgscanReportIntv(value: number) {
    this._apFgscanReportIntv = value;
  }
  public resetApFgscanReportIntv() {
    this._apFgscanReportIntv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apFgscanReportIntvInput() {
    return this._apFgscanReportIntv;
  }

  // ap_impersonation - computed: true, optional: true, required: false
  private _apImpersonation?: string; 
  public get apImpersonation() {
    return this.getStringAttribute('ap_impersonation');
  }
  public set apImpersonation(value: string) {
    this._apImpersonation = value;
  }
  public resetApImpersonation() {
    this._apImpersonation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apImpersonationInput() {
    return this._apImpersonation;
  }

  // ap_scan - computed: true, optional: true, required: false
  private _apScan?: string; 
  public get apScan() {
    return this.getStringAttribute('ap_scan');
  }
  public set apScan(value: string) {
    this._apScan = value;
  }
  public resetApScan() {
    this._apScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apScanInput() {
    return this._apScan;
  }

  // ap_scan_passive - computed: true, optional: true, required: false
  private _apScanPassive?: string; 
  public get apScanPassive() {
    return this.getStringAttribute('ap_scan_passive');
  }
  public set apScanPassive(value: string) {
    this._apScanPassive = value;
  }
  public resetApScanPassive() {
    this._apScanPassive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apScanPassiveInput() {
    return this._apScanPassive;
  }

  // ap_scan_threshold - computed: true, optional: true, required: false
  private _apScanThreshold?: string; 
  public get apScanThreshold() {
    return this.getStringAttribute('ap_scan_threshold');
  }
  public set apScanThreshold(value: string) {
    this._apScanThreshold = value;
  }
  public resetApScanThreshold() {
    this._apScanThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apScanThresholdInput() {
    return this._apScanThreshold;
  }

  // ap_spoofing - computed: true, optional: true, required: false
  private _apSpoofing?: string; 
  public get apSpoofing() {
    return this.getStringAttribute('ap_spoofing');
  }
  public set apSpoofing(value: string) {
    this._apSpoofing = value;
  }
  public resetApSpoofing() {
    this._apSpoofing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSpoofingInput() {
    return this._apSpoofing;
  }

  // asleap_attack - computed: true, optional: true, required: false
  private _asleapAttack?: string; 
  public get asleapAttack() {
    return this.getStringAttribute('asleap_attack');
  }
  public set asleapAttack(value: string) {
    this._asleapAttack = value;
  }
  public resetAsleapAttack() {
    this._asleapAttack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asleapAttackInput() {
    return this._asleapAttack;
  }

  // assoc_flood_thresh - computed: true, optional: true, required: false
  private _assocFloodThresh?: number; 
  public get assocFloodThresh() {
    return this.getNumberAttribute('assoc_flood_thresh');
  }
  public set assocFloodThresh(value: number) {
    this._assocFloodThresh = value;
  }
  public resetAssocFloodThresh() {
    this._assocFloodThresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assocFloodThreshInput() {
    return this._assocFloodThresh;
  }

  // assoc_flood_time - computed: true, optional: true, required: false
  private _assocFloodTime?: number; 
  public get assocFloodTime() {
    return this.getNumberAttribute('assoc_flood_time');
  }
  public set assocFloodTime(value: number) {
    this._assocFloodTime = value;
  }
  public resetAssocFloodTime() {
    this._assocFloodTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assocFloodTimeInput() {
    return this._assocFloodTime;
  }

  // assoc_frame_flood - computed: true, optional: true, required: false
  private _assocFrameFlood?: string; 
  public get assocFrameFlood() {
    return this.getStringAttribute('assoc_frame_flood');
  }
  public set assocFrameFlood(value: string) {
    this._assocFrameFlood = value;
  }
  public resetAssocFrameFlood() {
    this._assocFrameFlood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assocFrameFloodInput() {
    return this._assocFrameFlood;
  }

  // auth_flood_thresh - computed: true, optional: true, required: false
  private _authFloodThresh?: number; 
  public get authFloodThresh() {
    return this.getNumberAttribute('auth_flood_thresh');
  }
  public set authFloodThresh(value: number) {
    this._authFloodThresh = value;
  }
  public resetAuthFloodThresh() {
    this._authFloodThresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authFloodThreshInput() {
    return this._authFloodThresh;
  }

  // auth_flood_time - computed: true, optional: true, required: false
  private _authFloodTime?: number; 
  public get authFloodTime() {
    return this.getNumberAttribute('auth_flood_time');
  }
  public set authFloodTime(value: number) {
    this._authFloodTime = value;
  }
  public resetAuthFloodTime() {
    this._authFloodTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authFloodTimeInput() {
    return this._authFloodTime;
  }

  // auth_frame_flood - computed: true, optional: true, required: false
  private _authFrameFlood?: string; 
  public get authFrameFlood() {
    return this.getStringAttribute('auth_frame_flood');
  }
  public set authFrameFlood(value: string) {
    this._authFrameFlood = value;
  }
  public resetAuthFrameFlood() {
    this._authFrameFlood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authFrameFloodInput() {
    return this._authFrameFlood;
  }

  // bcn_flood - computed: true, optional: true, required: false
  private _bcnFlood?: string; 
  public get bcnFlood() {
    return this.getStringAttribute('bcn_flood');
  }
  public set bcnFlood(value: string) {
    this._bcnFlood = value;
  }
  public resetBcnFlood() {
    this._bcnFlood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bcnFloodInput() {
    return this._bcnFlood;
  }

  // bcn_flood_thresh - computed: true, optional: true, required: false
  private _bcnFloodThresh?: number; 
  public get bcnFloodThresh() {
    return this.getNumberAttribute('bcn_flood_thresh');
  }
  public set bcnFloodThresh(value: number) {
    this._bcnFloodThresh = value;
  }
  public resetBcnFloodThresh() {
    this._bcnFloodThresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bcnFloodThreshInput() {
    return this._bcnFloodThresh;
  }

  // bcn_flood_time - computed: true, optional: true, required: false
  private _bcnFloodTime?: number; 
  public get bcnFloodTime() {
    return this.getNumberAttribute('bcn_flood_time');
  }
  public set bcnFloodTime(value: number) {
    this._bcnFloodTime = value;
  }
  public resetBcnFloodTime() {
    this._bcnFloodTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bcnFloodTimeInput() {
    return this._bcnFloodTime;
  }

  // beacon_wrong_channel - computed: true, optional: true, required: false
  private _beaconWrongChannel?: string; 
  public get beaconWrongChannel() {
    return this.getStringAttribute('beacon_wrong_channel');
  }
  public set beaconWrongChannel(value: string) {
    this._beaconWrongChannel = value;
  }
  public resetBeaconWrongChannel() {
    this._beaconWrongChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beaconWrongChannelInput() {
    return this._beaconWrongChannel;
  }

  // block_ack_flood - computed: true, optional: true, required: false
  private _blockAckFlood?: string; 
  public get blockAckFlood() {
    return this.getStringAttribute('block_ack_flood');
  }
  public set blockAckFlood(value: string) {
    this._blockAckFlood = value;
  }
  public resetBlockAckFlood() {
    this._blockAckFlood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockAckFloodInput() {
    return this._blockAckFlood;
  }

  // block_ack_flood_thresh - computed: true, optional: true, required: false
  private _blockAckFloodThresh?: number; 
  public get blockAckFloodThresh() {
    return this.getNumberAttribute('block_ack_flood_thresh');
  }
  public set blockAckFloodThresh(value: number) {
    this._blockAckFloodThresh = value;
  }
  public resetBlockAckFloodThresh() {
    this._blockAckFloodThresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockAckFloodThreshInput() {
    return this._blockAckFloodThresh;
  }

  // block_ack_flood_time - computed: true, optional: true, required: false
  private _blockAckFloodTime?: number; 
  public get blockAckFloodTime() {
    return this.getNumberAttribute('block_ack_flood_time');
  }
  public set blockAckFloodTime(value: number) {
    this._blockAckFloodTime = value;
  }
  public resetBlockAckFloodTime() {
    this._blockAckFloodTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockAckFloodTimeInput() {
    return this._blockAckFloodTime;
  }

  // chan_based_mitm - computed: true, optional: true, required: false
  private _chanBasedMitm?: string; 
  public get chanBasedMitm() {
    return this.getStringAttribute('chan_based_mitm');
  }
  public set chanBasedMitm(value: string) {
    this._chanBasedMitm = value;
  }
  public resetChanBasedMitm() {
    this._chanBasedMitm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chanBasedMitmInput() {
    return this._chanBasedMitm;
  }

  // client_flood - computed: true, optional: true, required: false
  private _clientFlood?: string; 
  public get clientFlood() {
    return this.getStringAttribute('client_flood');
  }
  public set clientFlood(value: string) {
    this._clientFlood = value;
  }
  public resetClientFlood() {
    this._clientFlood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientFloodInput() {
    return this._clientFlood;
  }

  // client_flood_thresh - computed: true, optional: true, required: false
  private _clientFloodThresh?: number; 
  public get clientFloodThresh() {
    return this.getNumberAttribute('client_flood_thresh');
  }
  public set clientFloodThresh(value: number) {
    this._clientFloodThresh = value;
  }
  public resetClientFloodThresh() {
    this._clientFloodThresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientFloodThreshInput() {
    return this._clientFloodThresh;
  }

  // client_flood_time - computed: true, optional: true, required: false
  private _clientFloodTime?: number; 
  public get clientFloodTime() {
    return this.getNumberAttribute('client_flood_time');
  }
  public set clientFloodTime(value: number) {
    this._clientFloodTime = value;
  }
  public resetClientFloodTime() {
    this._clientFloodTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientFloodTimeInput() {
    return this._clientFloodTime;
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

  // cts_flood - computed: true, optional: true, required: false
  private _ctsFlood?: string; 
  public get ctsFlood() {
    return this.getStringAttribute('cts_flood');
  }
  public set ctsFlood(value: string) {
    this._ctsFlood = value;
  }
  public resetCtsFlood() {
    this._ctsFlood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctsFloodInput() {
    return this._ctsFlood;
  }

  // cts_flood_thresh - computed: true, optional: true, required: false
  private _ctsFloodThresh?: number; 
  public get ctsFloodThresh() {
    return this.getNumberAttribute('cts_flood_thresh');
  }
  public set ctsFloodThresh(value: number) {
    this._ctsFloodThresh = value;
  }
  public resetCtsFloodThresh() {
    this._ctsFloodThresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctsFloodThreshInput() {
    return this._ctsFloodThresh;
  }

  // cts_flood_time - computed: true, optional: true, required: false
  private _ctsFloodTime?: number; 
  public get ctsFloodTime() {
    return this.getNumberAttribute('cts_flood_time');
  }
  public set ctsFloodTime(value: number) {
    this._ctsFloodTime = value;
  }
  public resetCtsFloodTime() {
    this._ctsFloodTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctsFloodTimeInput() {
    return this._ctsFloodTime;
  }

  // deauth_broadcast - computed: true, optional: true, required: false
  private _deauthBroadcast?: string; 
  public get deauthBroadcast() {
    return this.getStringAttribute('deauth_broadcast');
  }
  public set deauthBroadcast(value: string) {
    this._deauthBroadcast = value;
  }
  public resetDeauthBroadcast() {
    this._deauthBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deauthBroadcastInput() {
    return this._deauthBroadcast;
  }

  // deauth_unknown_src_thresh - computed: true, optional: true, required: false
  private _deauthUnknownSrcThresh?: number; 
  public get deauthUnknownSrcThresh() {
    return this.getNumberAttribute('deauth_unknown_src_thresh');
  }
  public set deauthUnknownSrcThresh(value: number) {
    this._deauthUnknownSrcThresh = value;
  }
  public resetDeauthUnknownSrcThresh() {
    this._deauthUnknownSrcThresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deauthUnknownSrcThreshInput() {
    return this._deauthUnknownSrcThresh;
  }

  // disassoc_broadcast - computed: true, optional: true, required: false
  private _disassocBroadcast?: string; 
  public get disassocBroadcast() {
    return this.getStringAttribute('disassoc_broadcast');
  }
  public set disassocBroadcast(value: string) {
    this._disassocBroadcast = value;
  }
  public resetDisassocBroadcast() {
    this._disassocBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disassocBroadcastInput() {
    return this._disassocBroadcast;
  }

  // disconnect_station - computed: true, optional: true, required: false
  private _disconnectStation?: string; 
  public get disconnectStation() {
    return this.getStringAttribute('disconnect_station');
  }
  public set disconnectStation(value: string) {
    this._disconnectStation = value;
  }
  public resetDisconnectStation() {
    this._disconnectStation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disconnectStationInput() {
    return this._disconnectStation;
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

  // eapol_fail_flood - computed: true, optional: true, required: false
  private _eapolFailFlood?: string; 
  public get eapolFailFlood() {
    return this.getStringAttribute('eapol_fail_flood');
  }
  public set eapolFailFlood(value: string) {
    this._eapolFailFlood = value;
  }
  public resetEapolFailFlood() {
    this._eapolFailFlood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapolFailFloodInput() {
    return this._eapolFailFlood;
  }

  // eapol_fail_intv - computed: true, optional: true, required: false
  private _eapolFailIntv?: number; 
  public get eapolFailIntv() {
    return this.getNumberAttribute('eapol_fail_intv');
  }
  public set eapolFailIntv(value: number) {
    this._eapolFailIntv = value;
  }
  public resetEapolFailIntv() {
    this._eapolFailIntv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapolFailIntvInput() {
    return this._eapolFailIntv;
  }

  // eapol_fail_thresh - computed: true, optional: true, required: false
  private _eapolFailThresh?: number; 
  public get eapolFailThresh() {
    return this.getNumberAttribute('eapol_fail_thresh');
  }
  public set eapolFailThresh(value: number) {
    this._eapolFailThresh = value;
  }
  public resetEapolFailThresh() {
    this._eapolFailThresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapolFailThreshInput() {
    return this._eapolFailThresh;
  }

  // eapol_key_overflow - computed: true, optional: true, required: false
  private _eapolKeyOverflow?: string; 
  public get eapolKeyOverflow() {
    return this.getStringAttribute('eapol_key_overflow');
  }
  public set eapolKeyOverflow(value: string) {
    this._eapolKeyOverflow = value;
  }
  public resetEapolKeyOverflow() {
    this._eapolKeyOverflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapolKeyOverflowInput() {
    return this._eapolKeyOverflow;
  }

  // eapol_logoff_flood - computed: true, optional: true, required: false
  private _eapolLogoffFlood?: string; 
  public get eapolLogoffFlood() {
    return this.getStringAttribute('eapol_logoff_flood');
  }
  public set eapolLogoffFlood(value: string) {
    this._eapolLogoffFlood = value;
  }
  public resetEapolLogoffFlood() {
    this._eapolLogoffFlood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapolLogoffFloodInput() {
    return this._eapolLogoffFlood;
  }

  // eapol_logoff_intv - computed: true, optional: true, required: false
  private _eapolLogoffIntv?: number; 
  public get eapolLogoffIntv() {
    return this.getNumberAttribute('eapol_logoff_intv');
  }
  public set eapolLogoffIntv(value: number) {
    this._eapolLogoffIntv = value;
  }
  public resetEapolLogoffIntv() {
    this._eapolLogoffIntv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapolLogoffIntvInput() {
    return this._eapolLogoffIntv;
  }

  // eapol_logoff_thresh - computed: true, optional: true, required: false
  private _eapolLogoffThresh?: number; 
  public get eapolLogoffThresh() {
    return this.getNumberAttribute('eapol_logoff_thresh');
  }
  public set eapolLogoffThresh(value: number) {
    this._eapolLogoffThresh = value;
  }
  public resetEapolLogoffThresh() {
    this._eapolLogoffThresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapolLogoffThreshInput() {
    return this._eapolLogoffThresh;
  }

  // eapol_pre_fail_flood - computed: true, optional: true, required: false
  private _eapolPreFailFlood?: string; 
  public get eapolPreFailFlood() {
    return this.getStringAttribute('eapol_pre_fail_flood');
  }
  public set eapolPreFailFlood(value: string) {
    this._eapolPreFailFlood = value;
  }
  public resetEapolPreFailFlood() {
    this._eapolPreFailFlood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapolPreFailFloodInput() {
    return this._eapolPreFailFlood;
  }

  // eapol_pre_fail_intv - computed: true, optional: true, required: false
  private _eapolPreFailIntv?: number; 
  public get eapolPreFailIntv() {
    return this.getNumberAttribute('eapol_pre_fail_intv');
  }
  public set eapolPreFailIntv(value: number) {
    this._eapolPreFailIntv = value;
  }
  public resetEapolPreFailIntv() {
    this._eapolPreFailIntv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapolPreFailIntvInput() {
    return this._eapolPreFailIntv;
  }

  // eapol_pre_fail_thresh - computed: true, optional: true, required: false
  private _eapolPreFailThresh?: number; 
  public get eapolPreFailThresh() {
    return this.getNumberAttribute('eapol_pre_fail_thresh');
  }
  public set eapolPreFailThresh(value: number) {
    this._eapolPreFailThresh = value;
  }
  public resetEapolPreFailThresh() {
    this._eapolPreFailThresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapolPreFailThreshInput() {
    return this._eapolPreFailThresh;
  }

  // eapol_pre_succ_flood - computed: true, optional: true, required: false
  private _eapolPreSuccFlood?: string; 
  public get eapolPreSuccFlood() {
    return this.getStringAttribute('eapol_pre_succ_flood');
  }
  public set eapolPreSuccFlood(value: string) {
    this._eapolPreSuccFlood = value;
  }
  public resetEapolPreSuccFlood() {
    this._eapolPreSuccFlood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapolPreSuccFloodInput() {
    return this._eapolPreSuccFlood;
  }

  // eapol_pre_succ_intv - computed: true, optional: true, required: false
  private _eapolPreSuccIntv?: number; 
  public get eapolPreSuccIntv() {
    return this.getNumberAttribute('eapol_pre_succ_intv');
  }
  public set eapolPreSuccIntv(value: number) {
    this._eapolPreSuccIntv = value;
  }
  public resetEapolPreSuccIntv() {
    this._eapolPreSuccIntv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapolPreSuccIntvInput() {
    return this._eapolPreSuccIntv;
  }

  // eapol_pre_succ_thresh - computed: true, optional: true, required: false
  private _eapolPreSuccThresh?: number; 
  public get eapolPreSuccThresh() {
    return this.getNumberAttribute('eapol_pre_succ_thresh');
  }
  public set eapolPreSuccThresh(value: number) {
    this._eapolPreSuccThresh = value;
  }
  public resetEapolPreSuccThresh() {
    this._eapolPreSuccThresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapolPreSuccThreshInput() {
    return this._eapolPreSuccThresh;
  }

  // eapol_start_flood - computed: true, optional: true, required: false
  private _eapolStartFlood?: string; 
  public get eapolStartFlood() {
    return this.getStringAttribute('eapol_start_flood');
  }
  public set eapolStartFlood(value: string) {
    this._eapolStartFlood = value;
  }
  public resetEapolStartFlood() {
    this._eapolStartFlood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapolStartFloodInput() {
    return this._eapolStartFlood;
  }

  // eapol_start_intv - computed: true, optional: true, required: false
  private _eapolStartIntv?: number; 
  public get eapolStartIntv() {
    return this.getNumberAttribute('eapol_start_intv');
  }
  public set eapolStartIntv(value: number) {
    this._eapolStartIntv = value;
  }
  public resetEapolStartIntv() {
    this._eapolStartIntv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapolStartIntvInput() {
    return this._eapolStartIntv;
  }

  // eapol_start_thresh - computed: true, optional: true, required: false
  private _eapolStartThresh?: number; 
  public get eapolStartThresh() {
    return this.getNumberAttribute('eapol_start_thresh');
  }
  public set eapolStartThresh(value: number) {
    this._eapolStartThresh = value;
  }
  public resetEapolStartThresh() {
    this._eapolStartThresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapolStartThreshInput() {
    return this._eapolStartThresh;
  }

  // eapol_succ_flood - computed: true, optional: true, required: false
  private _eapolSuccFlood?: string; 
  public get eapolSuccFlood() {
    return this.getStringAttribute('eapol_succ_flood');
  }
  public set eapolSuccFlood(value: string) {
    this._eapolSuccFlood = value;
  }
  public resetEapolSuccFlood() {
    this._eapolSuccFlood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapolSuccFloodInput() {
    return this._eapolSuccFlood;
  }

  // eapol_succ_intv - computed: true, optional: true, required: false
  private _eapolSuccIntv?: number; 
  public get eapolSuccIntv() {
    return this.getNumberAttribute('eapol_succ_intv');
  }
  public set eapolSuccIntv(value: number) {
    this._eapolSuccIntv = value;
  }
  public resetEapolSuccIntv() {
    this._eapolSuccIntv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapolSuccIntvInput() {
    return this._eapolSuccIntv;
  }

  // eapol_succ_thresh - computed: true, optional: true, required: false
  private _eapolSuccThresh?: number; 
  public get eapolSuccThresh() {
    return this.getNumberAttribute('eapol_succ_thresh');
  }
  public set eapolSuccThresh(value: number) {
    this._eapolSuccThresh = value;
  }
  public resetEapolSuccThresh() {
    this._eapolSuccThresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapolSuccThreshInput() {
    return this._eapolSuccThresh;
  }

  // fata_jack - computed: true, optional: true, required: false
  private _fataJack?: string; 
  public get fataJack() {
    return this.getStringAttribute('fata_jack');
  }
  public set fataJack(value: string) {
    this._fataJack = value;
  }
  public resetFataJack() {
    this._fataJack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fataJackInput() {
    return this._fataJack;
  }

  // fuzzed_beacon - computed: true, optional: true, required: false
  private _fuzzedBeacon?: string; 
  public get fuzzedBeacon() {
    return this.getStringAttribute('fuzzed_beacon');
  }
  public set fuzzedBeacon(value: string) {
    this._fuzzedBeacon = value;
  }
  public resetFuzzedBeacon() {
    this._fuzzedBeacon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fuzzedBeaconInput() {
    return this._fuzzedBeacon;
  }

  // fuzzed_probe_request - computed: true, optional: true, required: false
  private _fuzzedProbeRequest?: string; 
  public get fuzzedProbeRequest() {
    return this.getStringAttribute('fuzzed_probe_request');
  }
  public set fuzzedProbeRequest(value: string) {
    this._fuzzedProbeRequest = value;
  }
  public resetFuzzedProbeRequest() {
    this._fuzzedProbeRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fuzzedProbeRequestInput() {
    return this._fuzzedProbeRequest;
  }

  // fuzzed_probe_response - computed: true, optional: true, required: false
  private _fuzzedProbeResponse?: string; 
  public get fuzzedProbeResponse() {
    return this.getStringAttribute('fuzzed_probe_response');
  }
  public set fuzzedProbeResponse(value: string) {
    this._fuzzedProbeResponse = value;
  }
  public resetFuzzedProbeResponse() {
    this._fuzzedProbeResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fuzzedProbeResponseInput() {
    return this._fuzzedProbeResponse;
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

  // hotspotter_attack - computed: true, optional: true, required: false
  private _hotspotterAttack?: string; 
  public get hotspotterAttack() {
    return this.getStringAttribute('hotspotter_attack');
  }
  public set hotspotterAttack(value: string) {
    this._hotspotterAttack = value;
  }
  public resetHotspotterAttack() {
    this._hotspotterAttack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hotspotterAttackInput() {
    return this._hotspotterAttack;
  }

  // ht_40mhz_intolerance - computed: true, optional: true, required: false
  private _ht40MhzIntolerance?: string; 
  public get ht40MhzIntolerance() {
    return this.getStringAttribute('ht_40mhz_intolerance');
  }
  public set ht40MhzIntolerance(value: string) {
    this._ht40MhzIntolerance = value;
  }
  public resetHt40MhzIntolerance() {
    this._ht40MhzIntolerance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ht40MhzIntoleranceInput() {
    return this._ht40MhzIntolerance;
  }

  // ht_greenfield - computed: true, optional: true, required: false
  private _htGreenfield?: string; 
  public get htGreenfield() {
    return this.getStringAttribute('ht_greenfield');
  }
  public set htGreenfield(value: string) {
    this._htGreenfield = value;
  }
  public resetHtGreenfield() {
    this._htGreenfield = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htGreenfieldInput() {
    return this._htGreenfield;
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

  // invalid_addr_combination - computed: true, optional: true, required: false
  private _invalidAddrCombination?: string; 
  public get invalidAddrCombination() {
    return this.getStringAttribute('invalid_addr_combination');
  }
  public set invalidAddrCombination(value: string) {
    this._invalidAddrCombination = value;
  }
  public resetInvalidAddrCombination() {
    this._invalidAddrCombination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidAddrCombinationInput() {
    return this._invalidAddrCombination;
  }

  // invalid_mac_oui - computed: true, optional: true, required: false
  private _invalidMacOui?: string; 
  public get invalidMacOui() {
    return this.getStringAttribute('invalid_mac_oui');
  }
  public set invalidMacOui(value: string) {
    this._invalidMacOui = value;
  }
  public resetInvalidMacOui() {
    this._invalidMacOui = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidMacOuiInput() {
    return this._invalidMacOui;
  }

  // long_duration_attack - computed: true, optional: true, required: false
  private _longDurationAttack?: string; 
  public get longDurationAttack() {
    return this.getStringAttribute('long_duration_attack');
  }
  public set longDurationAttack(value: string) {
    this._longDurationAttack = value;
  }
  public resetLongDurationAttack() {
    this._longDurationAttack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longDurationAttackInput() {
    return this._longDurationAttack;
  }

  // long_duration_thresh - computed: true, optional: true, required: false
  private _longDurationThresh?: number; 
  public get longDurationThresh() {
    return this.getNumberAttribute('long_duration_thresh');
  }
  public set longDurationThresh(value: number) {
    this._longDurationThresh = value;
  }
  public resetLongDurationThresh() {
    this._longDurationThresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longDurationThreshInput() {
    return this._longDurationThresh;
  }

  // malformed_association - computed: true, optional: true, required: false
  private _malformedAssociation?: string; 
  public get malformedAssociation() {
    return this.getStringAttribute('malformed_association');
  }
  public set malformedAssociation(value: string) {
    this._malformedAssociation = value;
  }
  public resetMalformedAssociation() {
    this._malformedAssociation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedAssociationInput() {
    return this._malformedAssociation;
  }

  // malformed_auth - computed: true, optional: true, required: false
  private _malformedAuth?: string; 
  public get malformedAuth() {
    return this.getStringAttribute('malformed_auth');
  }
  public set malformedAuth(value: string) {
    this._malformedAuth = value;
  }
  public resetMalformedAuth() {
    this._malformedAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedAuthInput() {
    return this._malformedAuth;
  }

  // malformed_ht_ie - computed: true, optional: true, required: false
  private _malformedHtIe?: string; 
  public get malformedHtIe() {
    return this.getStringAttribute('malformed_ht_ie');
  }
  public set malformedHtIe(value: string) {
    this._malformedHtIe = value;
  }
  public resetMalformedHtIe() {
    this._malformedHtIe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHtIeInput() {
    return this._malformedHtIe;
  }

  // name - computed: true, optional: true, required: false
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

  // netstumbler - computed: true, optional: true, required: false
  private _netstumbler?: string; 
  public get netstumbler() {
    return this.getStringAttribute('netstumbler');
  }
  public set netstumbler(value: string) {
    this._netstumbler = value;
  }
  public resetNetstumbler() {
    this._netstumbler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netstumblerInput() {
    return this._netstumbler;
  }

  // netstumbler_thresh - computed: true, optional: true, required: false
  private _netstumblerThresh?: number; 
  public get netstumblerThresh() {
    return this.getNumberAttribute('netstumbler_thresh');
  }
  public set netstumblerThresh(value: number) {
    this._netstumblerThresh = value;
  }
  public resetNetstumblerThresh() {
    this._netstumblerThresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netstumblerThreshInput() {
    return this._netstumblerThresh;
  }

  // netstumbler_time - computed: true, optional: true, required: false
  private _netstumblerTime?: number; 
  public get netstumblerTime() {
    return this.getNumberAttribute('netstumbler_time');
  }
  public set netstumblerTime(value: number) {
    this._netstumblerTime = value;
  }
  public resetNetstumblerTime() {
    this._netstumblerTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netstumblerTimeInput() {
    return this._netstumblerTime;
  }

  // null_ssid_probe_resp - computed: true, optional: true, required: false
  private _nullSsidProbeResp?: string; 
  public get nullSsidProbeResp() {
    return this.getStringAttribute('null_ssid_probe_resp');
  }
  public set nullSsidProbeResp(value: string) {
    this._nullSsidProbeResp = value;
  }
  public resetNullSsidProbeResp() {
    this._nullSsidProbeResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullSsidProbeRespInput() {
    return this._nullSsidProbeResp;
  }

  // omerta_attack - computed: true, optional: true, required: false
  private _omertaAttack?: string; 
  public get omertaAttack() {
    return this.getStringAttribute('omerta_attack');
  }
  public set omertaAttack(value: string) {
    this._omertaAttack = value;
  }
  public resetOmertaAttack() {
    this._omertaAttack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get omertaAttackInput() {
    return this._omertaAttack;
  }

  // overflow_ie - computed: true, optional: true, required: false
  private _overflowIe?: string; 
  public get overflowIe() {
    return this.getStringAttribute('overflow_ie');
  }
  public set overflowIe(value: string) {
    this._overflowIe = value;
  }
  public resetOverflowIe() {
    this._overflowIe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overflowIeInput() {
    return this._overflowIe;
  }

  // probe_flood - computed: true, optional: true, required: false
  private _probeFlood?: string; 
  public get probeFlood() {
    return this.getStringAttribute('probe_flood');
  }
  public set probeFlood(value: string) {
    this._probeFlood = value;
  }
  public resetProbeFlood() {
    this._probeFlood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeFloodInput() {
    return this._probeFlood;
  }

  // probe_flood_thresh - computed: true, optional: true, required: false
  private _probeFloodThresh?: number; 
  public get probeFloodThresh() {
    return this.getNumberAttribute('probe_flood_thresh');
  }
  public set probeFloodThresh(value: number) {
    this._probeFloodThresh = value;
  }
  public resetProbeFloodThresh() {
    this._probeFloodThresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeFloodThreshInput() {
    return this._probeFloodThresh;
  }

  // probe_flood_time - computed: true, optional: true, required: false
  private _probeFloodTime?: number; 
  public get probeFloodTime() {
    return this.getNumberAttribute('probe_flood_time');
  }
  public set probeFloodTime(value: number) {
    this._probeFloodTime = value;
  }
  public resetProbeFloodTime() {
    this._probeFloodTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeFloodTimeInput() {
    return this._probeFloodTime;
  }

  // pspoll_flood - computed: true, optional: true, required: false
  private _pspollFlood?: string; 
  public get pspollFlood() {
    return this.getStringAttribute('pspoll_flood');
  }
  public set pspollFlood(value: string) {
    this._pspollFlood = value;
  }
  public resetPspollFlood() {
    this._pspollFlood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pspollFloodInput() {
    return this._pspollFlood;
  }

  // pspoll_flood_thresh - computed: true, optional: true, required: false
  private _pspollFloodThresh?: number; 
  public get pspollFloodThresh() {
    return this.getNumberAttribute('pspoll_flood_thresh');
  }
  public set pspollFloodThresh(value: number) {
    this._pspollFloodThresh = value;
  }
  public resetPspollFloodThresh() {
    this._pspollFloodThresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pspollFloodThreshInput() {
    return this._pspollFloodThresh;
  }

  // pspoll_flood_time - computed: true, optional: true, required: false
  private _pspollFloodTime?: number; 
  public get pspollFloodTime() {
    return this.getNumberAttribute('pspoll_flood_time');
  }
  public set pspollFloodTime(value: number) {
    this._pspollFloodTime = value;
  }
  public resetPspollFloodTime() {
    this._pspollFloodTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pspollFloodTimeInput() {
    return this._pspollFloodTime;
  }

  // pwsave_dos_attack - computed: true, optional: true, required: false
  private _pwsaveDosAttack?: string; 
  public get pwsaveDosAttack() {
    return this.getStringAttribute('pwsave_dos_attack');
  }
  public set pwsaveDosAttack(value: string) {
    this._pwsaveDosAttack = value;
  }
  public resetPwsaveDosAttack() {
    this._pwsaveDosAttack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pwsaveDosAttackInput() {
    return this._pwsaveDosAttack;
  }

  // reassoc_flood - computed: true, optional: true, required: false
  private _reassocFlood?: string; 
  public get reassocFlood() {
    return this.getStringAttribute('reassoc_flood');
  }
  public set reassocFlood(value: string) {
    this._reassocFlood = value;
  }
  public resetReassocFlood() {
    this._reassocFlood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reassocFloodInput() {
    return this._reassocFlood;
  }

  // reassoc_flood_thresh - computed: true, optional: true, required: false
  private _reassocFloodThresh?: number; 
  public get reassocFloodThresh() {
    return this.getNumberAttribute('reassoc_flood_thresh');
  }
  public set reassocFloodThresh(value: number) {
    this._reassocFloodThresh = value;
  }
  public resetReassocFloodThresh() {
    this._reassocFloodThresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reassocFloodThreshInput() {
    return this._reassocFloodThresh;
  }

  // reassoc_flood_time - computed: true, optional: true, required: false
  private _reassocFloodTime?: number; 
  public get reassocFloodTime() {
    return this.getNumberAttribute('reassoc_flood_time');
  }
  public set reassocFloodTime(value: number) {
    this._reassocFloodTime = value;
  }
  public resetReassocFloodTime() {
    this._reassocFloodTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reassocFloodTimeInput() {
    return this._reassocFloodTime;
  }

  // risky_encryption - computed: true, optional: true, required: false
  private _riskyEncryption?: string; 
  public get riskyEncryption() {
    return this.getStringAttribute('risky_encryption');
  }
  public set riskyEncryption(value: string) {
    this._riskyEncryption = value;
  }
  public resetRiskyEncryption() {
    this._riskyEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskyEncryptionInput() {
    return this._riskyEncryption;
  }

  // rts_flood - computed: true, optional: true, required: false
  private _rtsFlood?: string; 
  public get rtsFlood() {
    return this.getStringAttribute('rts_flood');
  }
  public set rtsFlood(value: string) {
    this._rtsFlood = value;
  }
  public resetRtsFlood() {
    this._rtsFlood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtsFloodInput() {
    return this._rtsFlood;
  }

  // rts_flood_thresh - computed: true, optional: true, required: false
  private _rtsFloodThresh?: number; 
  public get rtsFloodThresh() {
    return this.getNumberAttribute('rts_flood_thresh');
  }
  public set rtsFloodThresh(value: number) {
    this._rtsFloodThresh = value;
  }
  public resetRtsFloodThresh() {
    this._rtsFloodThresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtsFloodThreshInput() {
    return this._rtsFloodThresh;
  }

  // rts_flood_time - computed: true, optional: true, required: false
  private _rtsFloodTime?: number; 
  public get rtsFloodTime() {
    return this.getNumberAttribute('rts_flood_time');
  }
  public set rtsFloodTime(value: number) {
    this._rtsFloodTime = value;
  }
  public resetRtsFloodTime() {
    this._rtsFloodTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtsFloodTimeInput() {
    return this._rtsFloodTime;
  }

  // sensor_mode - computed: true, optional: true, required: false
  private _sensorMode?: string; 
  public get sensorMode() {
    return this.getStringAttribute('sensor_mode');
  }
  public set sensorMode(value: string) {
    this._sensorMode = value;
  }
  public resetSensorMode() {
    this._sensorMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensorModeInput() {
    return this._sensorMode;
  }

  // spoofed_deauth - computed: true, optional: true, required: false
  private _spoofedDeauth?: string; 
  public get spoofedDeauth() {
    return this.getStringAttribute('spoofed_deauth');
  }
  public set spoofedDeauth(value: string) {
    this._spoofedDeauth = value;
  }
  public resetSpoofedDeauth() {
    this._spoofedDeauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spoofedDeauthInput() {
    return this._spoofedDeauth;
  }

  // unencrypted_valid - computed: true, optional: true, required: false
  private _unencryptedValid?: string; 
  public get unencryptedValid() {
    return this.getStringAttribute('unencrypted_valid');
  }
  public set unencryptedValid(value: string) {
    this._unencryptedValid = value;
  }
  public resetUnencryptedValid() {
    this._unencryptedValid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unencryptedValidInput() {
    return this._unencryptedValid;
  }

  // valid_client_misassociation - computed: true, optional: true, required: false
  private _validClientMisassociation?: string; 
  public get validClientMisassociation() {
    return this.getStringAttribute('valid_client_misassociation');
  }
  public set validClientMisassociation(value: string) {
    this._validClientMisassociation = value;
  }
  public resetValidClientMisassociation() {
    this._validClientMisassociation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validClientMisassociationInput() {
    return this._validClientMisassociation;
  }

  // valid_ssid_misuse - computed: true, optional: true, required: false
  private _validSsidMisuse?: string; 
  public get validSsidMisuse() {
    return this.getStringAttribute('valid_ssid_misuse');
  }
  public set validSsidMisuse(value: string) {
    this._validSsidMisuse = value;
  }
  public resetValidSsidMisuse() {
    this._validSsidMisuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validSsidMisuseInput() {
    return this._validSsidMisuse;
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

  // weak_wep_iv - computed: true, optional: true, required: false
  private _weakWepIv?: string; 
  public get weakWepIv() {
    return this.getStringAttribute('weak_wep_iv');
  }
  public set weakWepIv(value: string) {
    this._weakWepIv = value;
  }
  public resetWeakWepIv() {
    this._weakWepIv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weakWepIvInput() {
    return this._weakWepIv;
  }

  // wellenreiter - computed: true, optional: true, required: false
  private _wellenreiter?: string; 
  public get wellenreiter() {
    return this.getStringAttribute('wellenreiter');
  }
  public set wellenreiter(value: string) {
    this._wellenreiter = value;
  }
  public resetWellenreiter() {
    this._wellenreiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wellenreiterInput() {
    return this._wellenreiter;
  }

  // wellenreiter_thresh - computed: true, optional: true, required: false
  private _wellenreiterThresh?: number; 
  public get wellenreiterThresh() {
    return this.getNumberAttribute('wellenreiter_thresh');
  }
  public set wellenreiterThresh(value: number) {
    this._wellenreiterThresh = value;
  }
  public resetWellenreiterThresh() {
    this._wellenreiterThresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wellenreiterThreshInput() {
    return this._wellenreiterThresh;
  }

  // wellenreiter_time - computed: true, optional: true, required: false
  private _wellenreiterTime?: number; 
  public get wellenreiterTime() {
    return this.getNumberAttribute('wellenreiter_time');
  }
  public set wellenreiterTime(value: number) {
    this._wellenreiterTime = value;
  }
  public resetWellenreiterTime() {
    this._wellenreiterTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wellenreiterTimeInput() {
    return this._wellenreiterTime;
  }

  // windows_bridge - computed: true, optional: true, required: false
  private _windowsBridge?: string; 
  public get windowsBridge() {
    return this.getStringAttribute('windows_bridge');
  }
  public set windowsBridge(value: string) {
    this._windowsBridge = value;
  }
  public resetWindowsBridge() {
    this._windowsBridge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsBridgeInput() {
    return this._windowsBridge;
  }

  // wireless_bridge - computed: true, optional: true, required: false
  private _wirelessBridge?: string; 
  public get wirelessBridge() {
    return this.getStringAttribute('wireless_bridge');
  }
  public set wirelessBridge(value: string) {
    this._wirelessBridge = value;
  }
  public resetWirelessBridge() {
    this._wirelessBridge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wirelessBridgeInput() {
    return this._wirelessBridge;
  }

  // wpa_ft_attack - computed: true, optional: true, required: false
  private _wpaFtAttack?: string; 
  public get wpaFtAttack() {
    return this.getStringAttribute('wpa_ft_attack');
  }
  public set wpaFtAttack(value: string) {
    this._wpaFtAttack = value;
  }
  public resetWpaFtAttack() {
    this._wpaFtAttack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wpaFtAttackInput() {
    return this._wpaFtAttack;
  }

  // ap_bgscan_disable_schedules - computed: false, optional: true, required: false
  private _apBgscanDisableSchedules = new WirelesscontrollerWidsprofileApBgscanDisableSchedulesList(this, "ap_bgscan_disable_schedules", true);
  public get apBgscanDisableSchedules() {
    return this._apBgscanDisableSchedules;
  }
  public putApBgscanDisableSchedules(value: WirelesscontrollerWidsprofileApBgscanDisableSchedules[] | cdktf.IResolvable) {
    this._apBgscanDisableSchedules.internalValue = value;
  }
  public resetApBgscanDisableSchedules() {
    this._apBgscanDisableSchedules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apBgscanDisableSchedulesInput() {
    return this._apBgscanDisableSchedules.internalValue;
  }

  // ap_scan_channel_list_2g_5g - computed: false, optional: true, required: false
  private _apScanChannelList2G5G = new WirelesscontrollerWidsprofileApScanChannelList2G5GList(this, "ap_scan_channel_list_2g_5g", true);
  public get apScanChannelList2G5G() {
    return this._apScanChannelList2G5G;
  }
  public putApScanChannelList2G5G(value: WirelesscontrollerWidsprofileApScanChannelList2G5G[] | cdktf.IResolvable) {
    this._apScanChannelList2G5G.internalValue = value;
  }
  public resetApScanChannelList2G5G() {
    this._apScanChannelList2G5G.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apScanChannelList2G5GInput() {
    return this._apScanChannelList2G5G.internalValue;
  }

  // ap_scan_channel_list_6g - computed: false, optional: true, required: false
  private _apScanChannelList6G = new WirelesscontrollerWidsprofileApScanChannelList6GList(this, "ap_scan_channel_list_6g", true);
  public get apScanChannelList6G() {
    return this._apScanChannelList6G;
  }
  public putApScanChannelList6G(value: WirelesscontrollerWidsprofileApScanChannelList6G[] | cdktf.IResolvable) {
    this._apScanChannelList6G.internalValue = value;
  }
  public resetApScanChannelList6G() {
    this._apScanChannelList6G.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apScanChannelList6GInput() {
    return this._apScanChannelList6G.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adhoc_network: cdktf.stringToTerraform(this._adhocNetwork),
      adhoc_valid_ssid: cdktf.stringToTerraform(this._adhocValidSsid),
      air_jack: cdktf.stringToTerraform(this._airJack),
      ap_auto_suppress: cdktf.stringToTerraform(this._apAutoSuppress),
      ap_bgscan_disable_day: cdktf.stringToTerraform(this._apBgscanDisableDay),
      ap_bgscan_disable_end: cdktf.stringToTerraform(this._apBgscanDisableEnd),
      ap_bgscan_disable_start: cdktf.stringToTerraform(this._apBgscanDisableStart),
      ap_bgscan_duration: cdktf.numberToTerraform(this._apBgscanDuration),
      ap_bgscan_idle: cdktf.numberToTerraform(this._apBgscanIdle),
      ap_bgscan_intv: cdktf.numberToTerraform(this._apBgscanIntv),
      ap_bgscan_period: cdktf.numberToTerraform(this._apBgscanPeriod),
      ap_bgscan_report_intv: cdktf.numberToTerraform(this._apBgscanReportIntv),
      ap_fgscan_report_intv: cdktf.numberToTerraform(this._apFgscanReportIntv),
      ap_impersonation: cdktf.stringToTerraform(this._apImpersonation),
      ap_scan: cdktf.stringToTerraform(this._apScan),
      ap_scan_passive: cdktf.stringToTerraform(this._apScanPassive),
      ap_scan_threshold: cdktf.stringToTerraform(this._apScanThreshold),
      ap_spoofing: cdktf.stringToTerraform(this._apSpoofing),
      asleap_attack: cdktf.stringToTerraform(this._asleapAttack),
      assoc_flood_thresh: cdktf.numberToTerraform(this._assocFloodThresh),
      assoc_flood_time: cdktf.numberToTerraform(this._assocFloodTime),
      assoc_frame_flood: cdktf.stringToTerraform(this._assocFrameFlood),
      auth_flood_thresh: cdktf.numberToTerraform(this._authFloodThresh),
      auth_flood_time: cdktf.numberToTerraform(this._authFloodTime),
      auth_frame_flood: cdktf.stringToTerraform(this._authFrameFlood),
      bcn_flood: cdktf.stringToTerraform(this._bcnFlood),
      bcn_flood_thresh: cdktf.numberToTerraform(this._bcnFloodThresh),
      bcn_flood_time: cdktf.numberToTerraform(this._bcnFloodTime),
      beacon_wrong_channel: cdktf.stringToTerraform(this._beaconWrongChannel),
      block_ack_flood: cdktf.stringToTerraform(this._blockAckFlood),
      block_ack_flood_thresh: cdktf.numberToTerraform(this._blockAckFloodThresh),
      block_ack_flood_time: cdktf.numberToTerraform(this._blockAckFloodTime),
      chan_based_mitm: cdktf.stringToTerraform(this._chanBasedMitm),
      client_flood: cdktf.stringToTerraform(this._clientFlood),
      client_flood_thresh: cdktf.numberToTerraform(this._clientFloodThresh),
      client_flood_time: cdktf.numberToTerraform(this._clientFloodTime),
      comment: cdktf.stringToTerraform(this._comment),
      cts_flood: cdktf.stringToTerraform(this._ctsFlood),
      cts_flood_thresh: cdktf.numberToTerraform(this._ctsFloodThresh),
      cts_flood_time: cdktf.numberToTerraform(this._ctsFloodTime),
      deauth_broadcast: cdktf.stringToTerraform(this._deauthBroadcast),
      deauth_unknown_src_thresh: cdktf.numberToTerraform(this._deauthUnknownSrcThresh),
      disassoc_broadcast: cdktf.stringToTerraform(this._disassocBroadcast),
      disconnect_station: cdktf.stringToTerraform(this._disconnectStation),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      eapol_fail_flood: cdktf.stringToTerraform(this._eapolFailFlood),
      eapol_fail_intv: cdktf.numberToTerraform(this._eapolFailIntv),
      eapol_fail_thresh: cdktf.numberToTerraform(this._eapolFailThresh),
      eapol_key_overflow: cdktf.stringToTerraform(this._eapolKeyOverflow),
      eapol_logoff_flood: cdktf.stringToTerraform(this._eapolLogoffFlood),
      eapol_logoff_intv: cdktf.numberToTerraform(this._eapolLogoffIntv),
      eapol_logoff_thresh: cdktf.numberToTerraform(this._eapolLogoffThresh),
      eapol_pre_fail_flood: cdktf.stringToTerraform(this._eapolPreFailFlood),
      eapol_pre_fail_intv: cdktf.numberToTerraform(this._eapolPreFailIntv),
      eapol_pre_fail_thresh: cdktf.numberToTerraform(this._eapolPreFailThresh),
      eapol_pre_succ_flood: cdktf.stringToTerraform(this._eapolPreSuccFlood),
      eapol_pre_succ_intv: cdktf.numberToTerraform(this._eapolPreSuccIntv),
      eapol_pre_succ_thresh: cdktf.numberToTerraform(this._eapolPreSuccThresh),
      eapol_start_flood: cdktf.stringToTerraform(this._eapolStartFlood),
      eapol_start_intv: cdktf.numberToTerraform(this._eapolStartIntv),
      eapol_start_thresh: cdktf.numberToTerraform(this._eapolStartThresh),
      eapol_succ_flood: cdktf.stringToTerraform(this._eapolSuccFlood),
      eapol_succ_intv: cdktf.numberToTerraform(this._eapolSuccIntv),
      eapol_succ_thresh: cdktf.numberToTerraform(this._eapolSuccThresh),
      fata_jack: cdktf.stringToTerraform(this._fataJack),
      fuzzed_beacon: cdktf.stringToTerraform(this._fuzzedBeacon),
      fuzzed_probe_request: cdktf.stringToTerraform(this._fuzzedProbeRequest),
      fuzzed_probe_response: cdktf.stringToTerraform(this._fuzzedProbeResponse),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      hotspotter_attack: cdktf.stringToTerraform(this._hotspotterAttack),
      ht_40mhz_intolerance: cdktf.stringToTerraform(this._ht40MhzIntolerance),
      ht_greenfield: cdktf.stringToTerraform(this._htGreenfield),
      id: cdktf.stringToTerraform(this._id),
      invalid_addr_combination: cdktf.stringToTerraform(this._invalidAddrCombination),
      invalid_mac_oui: cdktf.stringToTerraform(this._invalidMacOui),
      long_duration_attack: cdktf.stringToTerraform(this._longDurationAttack),
      long_duration_thresh: cdktf.numberToTerraform(this._longDurationThresh),
      malformed_association: cdktf.stringToTerraform(this._malformedAssociation),
      malformed_auth: cdktf.stringToTerraform(this._malformedAuth),
      malformed_ht_ie: cdktf.stringToTerraform(this._malformedHtIe),
      name: cdktf.stringToTerraform(this._name),
      netstumbler: cdktf.stringToTerraform(this._netstumbler),
      netstumbler_thresh: cdktf.numberToTerraform(this._netstumblerThresh),
      netstumbler_time: cdktf.numberToTerraform(this._netstumblerTime),
      null_ssid_probe_resp: cdktf.stringToTerraform(this._nullSsidProbeResp),
      omerta_attack: cdktf.stringToTerraform(this._omertaAttack),
      overflow_ie: cdktf.stringToTerraform(this._overflowIe),
      probe_flood: cdktf.stringToTerraform(this._probeFlood),
      probe_flood_thresh: cdktf.numberToTerraform(this._probeFloodThresh),
      probe_flood_time: cdktf.numberToTerraform(this._probeFloodTime),
      pspoll_flood: cdktf.stringToTerraform(this._pspollFlood),
      pspoll_flood_thresh: cdktf.numberToTerraform(this._pspollFloodThresh),
      pspoll_flood_time: cdktf.numberToTerraform(this._pspollFloodTime),
      pwsave_dos_attack: cdktf.stringToTerraform(this._pwsaveDosAttack),
      reassoc_flood: cdktf.stringToTerraform(this._reassocFlood),
      reassoc_flood_thresh: cdktf.numberToTerraform(this._reassocFloodThresh),
      reassoc_flood_time: cdktf.numberToTerraform(this._reassocFloodTime),
      risky_encryption: cdktf.stringToTerraform(this._riskyEncryption),
      rts_flood: cdktf.stringToTerraform(this._rtsFlood),
      rts_flood_thresh: cdktf.numberToTerraform(this._rtsFloodThresh),
      rts_flood_time: cdktf.numberToTerraform(this._rtsFloodTime),
      sensor_mode: cdktf.stringToTerraform(this._sensorMode),
      spoofed_deauth: cdktf.stringToTerraform(this._spoofedDeauth),
      unencrypted_valid: cdktf.stringToTerraform(this._unencryptedValid),
      valid_client_misassociation: cdktf.stringToTerraform(this._validClientMisassociation),
      valid_ssid_misuse: cdktf.stringToTerraform(this._validSsidMisuse),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      weak_wep_iv: cdktf.stringToTerraform(this._weakWepIv),
      wellenreiter: cdktf.stringToTerraform(this._wellenreiter),
      wellenreiter_thresh: cdktf.numberToTerraform(this._wellenreiterThresh),
      wellenreiter_time: cdktf.numberToTerraform(this._wellenreiterTime),
      windows_bridge: cdktf.stringToTerraform(this._windowsBridge),
      wireless_bridge: cdktf.stringToTerraform(this._wirelessBridge),
      wpa_ft_attack: cdktf.stringToTerraform(this._wpaFtAttack),
      ap_bgscan_disable_schedules: cdktf.listMapper(wirelesscontrollerWidsprofileApBgscanDisableSchedulesToTerraform, true)(this._apBgscanDisableSchedules.internalValue),
      ap_scan_channel_list_2g_5g: cdktf.listMapper(wirelesscontrollerWidsprofileApScanChannelList2G5GToTerraform, true)(this._apScanChannelList2G5G.internalValue),
      ap_scan_channel_list_6g: cdktf.listMapper(wirelesscontrollerWidsprofileApScanChannelList6GToTerraform, true)(this._apScanChannelList6G.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adhoc_network: {
        value: cdktf.stringToHclTerraform(this._adhocNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adhoc_valid_ssid: {
        value: cdktf.stringToHclTerraform(this._adhocValidSsid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      air_jack: {
        value: cdktf.stringToHclTerraform(this._airJack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ap_auto_suppress: {
        value: cdktf.stringToHclTerraform(this._apAutoSuppress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ap_bgscan_disable_day: {
        value: cdktf.stringToHclTerraform(this._apBgscanDisableDay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ap_bgscan_disable_end: {
        value: cdktf.stringToHclTerraform(this._apBgscanDisableEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ap_bgscan_disable_start: {
        value: cdktf.stringToHclTerraform(this._apBgscanDisableStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ap_bgscan_duration: {
        value: cdktf.numberToHclTerraform(this._apBgscanDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ap_bgscan_idle: {
        value: cdktf.numberToHclTerraform(this._apBgscanIdle),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ap_bgscan_intv: {
        value: cdktf.numberToHclTerraform(this._apBgscanIntv),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ap_bgscan_period: {
        value: cdktf.numberToHclTerraform(this._apBgscanPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ap_bgscan_report_intv: {
        value: cdktf.numberToHclTerraform(this._apBgscanReportIntv),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ap_fgscan_report_intv: {
        value: cdktf.numberToHclTerraform(this._apFgscanReportIntv),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ap_impersonation: {
        value: cdktf.stringToHclTerraform(this._apImpersonation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ap_scan: {
        value: cdktf.stringToHclTerraform(this._apScan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ap_scan_passive: {
        value: cdktf.stringToHclTerraform(this._apScanPassive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ap_scan_threshold: {
        value: cdktf.stringToHclTerraform(this._apScanThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ap_spoofing: {
        value: cdktf.stringToHclTerraform(this._apSpoofing),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asleap_attack: {
        value: cdktf.stringToHclTerraform(this._asleapAttack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assoc_flood_thresh: {
        value: cdktf.numberToHclTerraform(this._assocFloodThresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      assoc_flood_time: {
        value: cdktf.numberToHclTerraform(this._assocFloodTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      assoc_frame_flood: {
        value: cdktf.stringToHclTerraform(this._assocFrameFlood),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_flood_thresh: {
        value: cdktf.numberToHclTerraform(this._authFloodThresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auth_flood_time: {
        value: cdktf.numberToHclTerraform(this._authFloodTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auth_frame_flood: {
        value: cdktf.stringToHclTerraform(this._authFrameFlood),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bcn_flood: {
        value: cdktf.stringToHclTerraform(this._bcnFlood),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bcn_flood_thresh: {
        value: cdktf.numberToHclTerraform(this._bcnFloodThresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bcn_flood_time: {
        value: cdktf.numberToHclTerraform(this._bcnFloodTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      beacon_wrong_channel: {
        value: cdktf.stringToHclTerraform(this._beaconWrongChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_ack_flood: {
        value: cdktf.stringToHclTerraform(this._blockAckFlood),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_ack_flood_thresh: {
        value: cdktf.numberToHclTerraform(this._blockAckFloodThresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      block_ack_flood_time: {
        value: cdktf.numberToHclTerraform(this._blockAckFloodTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      chan_based_mitm: {
        value: cdktf.stringToHclTerraform(this._chanBasedMitm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_flood: {
        value: cdktf.stringToHclTerraform(this._clientFlood),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_flood_thresh: {
        value: cdktf.numberToHclTerraform(this._clientFloodThresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_flood_time: {
        value: cdktf.numberToHclTerraform(this._clientFloodTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cts_flood: {
        value: cdktf.stringToHclTerraform(this._ctsFlood),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cts_flood_thresh: {
        value: cdktf.numberToHclTerraform(this._ctsFloodThresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cts_flood_time: {
        value: cdktf.numberToHclTerraform(this._ctsFloodTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      deauth_broadcast: {
        value: cdktf.stringToHclTerraform(this._deauthBroadcast),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deauth_unknown_src_thresh: {
        value: cdktf.numberToHclTerraform(this._deauthUnknownSrcThresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disassoc_broadcast: {
        value: cdktf.stringToHclTerraform(this._disassocBroadcast),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disconnect_station: {
        value: cdktf.stringToHclTerraform(this._disconnectStation),
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
      eapol_fail_flood: {
        value: cdktf.stringToHclTerraform(this._eapolFailFlood),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eapol_fail_intv: {
        value: cdktf.numberToHclTerraform(this._eapolFailIntv),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eapol_fail_thresh: {
        value: cdktf.numberToHclTerraform(this._eapolFailThresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eapol_key_overflow: {
        value: cdktf.stringToHclTerraform(this._eapolKeyOverflow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eapol_logoff_flood: {
        value: cdktf.stringToHclTerraform(this._eapolLogoffFlood),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eapol_logoff_intv: {
        value: cdktf.numberToHclTerraform(this._eapolLogoffIntv),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eapol_logoff_thresh: {
        value: cdktf.numberToHclTerraform(this._eapolLogoffThresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eapol_pre_fail_flood: {
        value: cdktf.stringToHclTerraform(this._eapolPreFailFlood),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eapol_pre_fail_intv: {
        value: cdktf.numberToHclTerraform(this._eapolPreFailIntv),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eapol_pre_fail_thresh: {
        value: cdktf.numberToHclTerraform(this._eapolPreFailThresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eapol_pre_succ_flood: {
        value: cdktf.stringToHclTerraform(this._eapolPreSuccFlood),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eapol_pre_succ_intv: {
        value: cdktf.numberToHclTerraform(this._eapolPreSuccIntv),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eapol_pre_succ_thresh: {
        value: cdktf.numberToHclTerraform(this._eapolPreSuccThresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eapol_start_flood: {
        value: cdktf.stringToHclTerraform(this._eapolStartFlood),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eapol_start_intv: {
        value: cdktf.numberToHclTerraform(this._eapolStartIntv),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eapol_start_thresh: {
        value: cdktf.numberToHclTerraform(this._eapolStartThresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eapol_succ_flood: {
        value: cdktf.stringToHclTerraform(this._eapolSuccFlood),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eapol_succ_intv: {
        value: cdktf.numberToHclTerraform(this._eapolSuccIntv),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eapol_succ_thresh: {
        value: cdktf.numberToHclTerraform(this._eapolSuccThresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fata_jack: {
        value: cdktf.stringToHclTerraform(this._fataJack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fuzzed_beacon: {
        value: cdktf.stringToHclTerraform(this._fuzzedBeacon),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fuzzed_probe_request: {
        value: cdktf.stringToHclTerraform(this._fuzzedProbeRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fuzzed_probe_response: {
        value: cdktf.stringToHclTerraform(this._fuzzedProbeResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hotspotter_attack: {
        value: cdktf.stringToHclTerraform(this._hotspotterAttack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ht_40mhz_intolerance: {
        value: cdktf.stringToHclTerraform(this._ht40MhzIntolerance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ht_greenfield: {
        value: cdktf.stringToHclTerraform(this._htGreenfield),
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
      invalid_addr_combination: {
        value: cdktf.stringToHclTerraform(this._invalidAddrCombination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      invalid_mac_oui: {
        value: cdktf.stringToHclTerraform(this._invalidMacOui),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      long_duration_attack: {
        value: cdktf.stringToHclTerraform(this._longDurationAttack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      long_duration_thresh: {
        value: cdktf.numberToHclTerraform(this._longDurationThresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      malformed_association: {
        value: cdktf.stringToHclTerraform(this._malformedAssociation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed_auth: {
        value: cdktf.stringToHclTerraform(this._malformedAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed_ht_ie: {
        value: cdktf.stringToHclTerraform(this._malformedHtIe),
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
      netstumbler: {
        value: cdktf.stringToHclTerraform(this._netstumbler),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netstumbler_thresh: {
        value: cdktf.numberToHclTerraform(this._netstumblerThresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      netstumbler_time: {
        value: cdktf.numberToHclTerraform(this._netstumblerTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      null_ssid_probe_resp: {
        value: cdktf.stringToHclTerraform(this._nullSsidProbeResp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      omerta_attack: {
        value: cdktf.stringToHclTerraform(this._omertaAttack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overflow_ie: {
        value: cdktf.stringToHclTerraform(this._overflowIe),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      probe_flood: {
        value: cdktf.stringToHclTerraform(this._probeFlood),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      probe_flood_thresh: {
        value: cdktf.numberToHclTerraform(this._probeFloodThresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      probe_flood_time: {
        value: cdktf.numberToHclTerraform(this._probeFloodTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pspoll_flood: {
        value: cdktf.stringToHclTerraform(this._pspollFlood),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pspoll_flood_thresh: {
        value: cdktf.numberToHclTerraform(this._pspollFloodThresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pspoll_flood_time: {
        value: cdktf.numberToHclTerraform(this._pspollFloodTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pwsave_dos_attack: {
        value: cdktf.stringToHclTerraform(this._pwsaveDosAttack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reassoc_flood: {
        value: cdktf.stringToHclTerraform(this._reassocFlood),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reassoc_flood_thresh: {
        value: cdktf.numberToHclTerraform(this._reassocFloodThresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reassoc_flood_time: {
        value: cdktf.numberToHclTerraform(this._reassocFloodTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      risky_encryption: {
        value: cdktf.stringToHclTerraform(this._riskyEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rts_flood: {
        value: cdktf.stringToHclTerraform(this._rtsFlood),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rts_flood_thresh: {
        value: cdktf.numberToHclTerraform(this._rtsFloodThresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rts_flood_time: {
        value: cdktf.numberToHclTerraform(this._rtsFloodTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sensor_mode: {
        value: cdktf.stringToHclTerraform(this._sensorMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spoofed_deauth: {
        value: cdktf.stringToHclTerraform(this._spoofedDeauth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unencrypted_valid: {
        value: cdktf.stringToHclTerraform(this._unencryptedValid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      valid_client_misassociation: {
        value: cdktf.stringToHclTerraform(this._validClientMisassociation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      valid_ssid_misuse: {
        value: cdktf.stringToHclTerraform(this._validSsidMisuse),
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
      weak_wep_iv: {
        value: cdktf.stringToHclTerraform(this._weakWepIv),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wellenreiter: {
        value: cdktf.stringToHclTerraform(this._wellenreiter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wellenreiter_thresh: {
        value: cdktf.numberToHclTerraform(this._wellenreiterThresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wellenreiter_time: {
        value: cdktf.numberToHclTerraform(this._wellenreiterTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      windows_bridge: {
        value: cdktf.stringToHclTerraform(this._windowsBridge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wireless_bridge: {
        value: cdktf.stringToHclTerraform(this._wirelessBridge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wpa_ft_attack: {
        value: cdktf.stringToHclTerraform(this._wpaFtAttack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ap_bgscan_disable_schedules: {
        value: cdktf.listMapperHcl(wirelesscontrollerWidsprofileApBgscanDisableSchedulesToHclTerraform, true)(this._apBgscanDisableSchedules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WirelesscontrollerWidsprofileApBgscanDisableSchedulesList",
      },
      ap_scan_channel_list_2g_5g: {
        value: cdktf.listMapperHcl(wirelesscontrollerWidsprofileApScanChannelList2G5GToHclTerraform, true)(this._apScanChannelList2G5G.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WirelesscontrollerWidsprofileApScanChannelList2G5GList",
      },
      ap_scan_channel_list_6g: {
        value: cdktf.listMapperHcl(wirelesscontrollerWidsprofileApScanChannelList6GToHclTerraform, true)(this._apScanChannelList6G.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WirelesscontrollerWidsprofileApScanChannelList6GList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
