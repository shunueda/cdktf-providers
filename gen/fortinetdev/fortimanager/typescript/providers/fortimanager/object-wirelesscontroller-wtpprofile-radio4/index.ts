// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectWirelesscontrollerWtpprofileRadio4AConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#adom ObjectWirelesscontrollerWtpprofileRadio4A#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#airtime_fairness ObjectWirelesscontrollerWtpprofileRadio4A#airtime_fairness}
  */
  readonly airtimeFairness?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#amsdu ObjectWirelesscontrollerWtpprofileRadio4A#amsdu}
  */
  readonly amsdu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#ap_handoff ObjectWirelesscontrollerWtpprofileRadio4A#ap_handoff}
  */
  readonly apHandoff?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#ap_sniffer_addr ObjectWirelesscontrollerWtpprofileRadio4A#ap_sniffer_addr}
  */
  readonly apSnifferAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#ap_sniffer_bufsize ObjectWirelesscontrollerWtpprofileRadio4A#ap_sniffer_bufsize}
  */
  readonly apSnifferBufsize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#ap_sniffer_chan ObjectWirelesscontrollerWtpprofileRadio4A#ap_sniffer_chan}
  */
  readonly apSnifferChan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#ap_sniffer_ctl ObjectWirelesscontrollerWtpprofileRadio4A#ap_sniffer_ctl}
  */
  readonly apSnifferCtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#ap_sniffer_data ObjectWirelesscontrollerWtpprofileRadio4A#ap_sniffer_data}
  */
  readonly apSnifferData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#ap_sniffer_mgmt_beacon ObjectWirelesscontrollerWtpprofileRadio4A#ap_sniffer_mgmt_beacon}
  */
  readonly apSnifferMgmtBeacon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#ap_sniffer_mgmt_other ObjectWirelesscontrollerWtpprofileRadio4A#ap_sniffer_mgmt_other}
  */
  readonly apSnifferMgmtOther?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#ap_sniffer_mgmt_probe ObjectWirelesscontrollerWtpprofileRadio4A#ap_sniffer_mgmt_probe}
  */
  readonly apSnifferMgmtProbe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#arrp_profile ObjectWirelesscontrollerWtpprofileRadio4A#arrp_profile}
  */
  readonly arrpProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#auto_power_high ObjectWirelesscontrollerWtpprofileRadio4A#auto_power_high}
  */
  readonly autoPowerHigh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#auto_power_level ObjectWirelesscontrollerWtpprofileRadio4A#auto_power_level}
  */
  readonly autoPowerLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#auto_power_low ObjectWirelesscontrollerWtpprofileRadio4A#auto_power_low}
  */
  readonly autoPowerLow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#auto_power_target ObjectWirelesscontrollerWtpprofileRadio4A#auto_power_target}
  */
  readonly autoPowerTarget?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#band ObjectWirelesscontrollerWtpprofileRadio4A#band}
  */
  readonly band?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#band_5g_type ObjectWirelesscontrollerWtpprofileRadio4A#band_5g_type}
  */
  readonly band5GType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#bandwidth_admission_control ObjectWirelesscontrollerWtpprofileRadio4A#bandwidth_admission_control}
  */
  readonly bandwidthAdmissionControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#bandwidth_capacity ObjectWirelesscontrollerWtpprofileRadio4A#bandwidth_capacity}
  */
  readonly bandwidthCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#beacon_interval ObjectWirelesscontrollerWtpprofileRadio4A#beacon_interval}
  */
  readonly beaconInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#bss_color ObjectWirelesscontrollerWtpprofileRadio4A#bss_color}
  */
  readonly bssColor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#bss_color_mode ObjectWirelesscontrollerWtpprofileRadio4A#bss_color_mode}
  */
  readonly bssColorMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#call_admission_control ObjectWirelesscontrollerWtpprofileRadio4A#call_admission_control}
  */
  readonly callAdmissionControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#call_capacity ObjectWirelesscontrollerWtpprofileRadio4A#call_capacity}
  */
  readonly callCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#channel ObjectWirelesscontrollerWtpprofileRadio4A#channel}
  */
  readonly channel?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#channel_bonding ObjectWirelesscontrollerWtpprofileRadio4A#channel_bonding}
  */
  readonly channelBonding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#channel_utilization ObjectWirelesscontrollerWtpprofileRadio4A#channel_utilization}
  */
  readonly channelUtilization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#coexistence ObjectWirelesscontrollerWtpprofileRadio4A#coexistence}
  */
  readonly coexistence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#darrp ObjectWirelesscontrollerWtpprofileRadio4A#darrp}
  */
  readonly darrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#drma ObjectWirelesscontrollerWtpprofileRadio4A#drma}
  */
  readonly drma?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#drma_sensitivity ObjectWirelesscontrollerWtpprofileRadio4A#drma_sensitivity}
  */
  readonly drmaSensitivity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#dtim ObjectWirelesscontrollerWtpprofileRadio4A#dtim}
  */
  readonly dtim?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#frag_threshold ObjectWirelesscontrollerWtpprofileRadio4A#frag_threshold}
  */
  readonly fragThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#frequency_handoff ObjectWirelesscontrollerWtpprofileRadio4A#frequency_handoff}
  */
  readonly frequencyHandoff?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#id ObjectWirelesscontrollerWtpprofileRadio4A#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#iperf_protocol ObjectWirelesscontrollerWtpprofileRadio4A#iperf_protocol}
  */
  readonly iperfProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#iperf_server_port ObjectWirelesscontrollerWtpprofileRadio4A#iperf_server_port}
  */
  readonly iperfServerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#max_clients ObjectWirelesscontrollerWtpprofileRadio4A#max_clients}
  */
  readonly maxClients?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#max_distance ObjectWirelesscontrollerWtpprofileRadio4A#max_distance}
  */
  readonly maxDistance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#mimo_mode ObjectWirelesscontrollerWtpprofileRadio4A#mimo_mode}
  */
  readonly mimoMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#mode ObjectWirelesscontrollerWtpprofileRadio4A#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#n80211d ObjectWirelesscontrollerWtpprofileRadio4A#n80211d}
  */
  readonly n80211D?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#optional_antenna ObjectWirelesscontrollerWtpprofileRadio4A#optional_antenna}
  */
  readonly optionalAntenna?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#optional_antenna_gain ObjectWirelesscontrollerWtpprofileRadio4A#optional_antenna_gain}
  */
  readonly optionalAntennaGain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#power_level ObjectWirelesscontrollerWtpprofileRadio4A#power_level}
  */
  readonly powerLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#power_mode ObjectWirelesscontrollerWtpprofileRadio4A#power_mode}
  */
  readonly powerMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#power_value ObjectWirelesscontrollerWtpprofileRadio4A#power_value}
  */
  readonly powerValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#powersave_optimize ObjectWirelesscontrollerWtpprofileRadio4A#powersave_optimize}
  */
  readonly powersaveOptimize?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#protection_mode ObjectWirelesscontrollerWtpprofileRadio4A#protection_mode}
  */
  readonly protectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#radio_id ObjectWirelesscontrollerWtpprofileRadio4A#radio_id}
  */
  readonly radioId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#rts_threshold ObjectWirelesscontrollerWtpprofileRadio4A#rts_threshold}
  */
  readonly rtsThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#sam_bssid ObjectWirelesscontrollerWtpprofileRadio4A#sam_bssid}
  */
  readonly samBssid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#sam_ca_certificate ObjectWirelesscontrollerWtpprofileRadio4A#sam_ca_certificate}
  */
  readonly samCaCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#sam_captive_portal ObjectWirelesscontrollerWtpprofileRadio4A#sam_captive_portal}
  */
  readonly samCaptivePortal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#sam_client_certificate ObjectWirelesscontrollerWtpprofileRadio4A#sam_client_certificate}
  */
  readonly samClientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#sam_cwp_failure_string ObjectWirelesscontrollerWtpprofileRadio4A#sam_cwp_failure_string}
  */
  readonly samCwpFailureString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#sam_cwp_match_string ObjectWirelesscontrollerWtpprofileRadio4A#sam_cwp_match_string}
  */
  readonly samCwpMatchString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#sam_cwp_password ObjectWirelesscontrollerWtpprofileRadio4A#sam_cwp_password}
  */
  readonly samCwpPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#sam_cwp_success_string ObjectWirelesscontrollerWtpprofileRadio4A#sam_cwp_success_string}
  */
  readonly samCwpSuccessString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#sam_cwp_test_url ObjectWirelesscontrollerWtpprofileRadio4A#sam_cwp_test_url}
  */
  readonly samCwpTestUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#sam_cwp_username ObjectWirelesscontrollerWtpprofileRadio4A#sam_cwp_username}
  */
  readonly samCwpUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#sam_eap_method ObjectWirelesscontrollerWtpprofileRadio4A#sam_eap_method}
  */
  readonly samEapMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#sam_password ObjectWirelesscontrollerWtpprofileRadio4A#sam_password}
  */
  readonly samPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#sam_private_key ObjectWirelesscontrollerWtpprofileRadio4A#sam_private_key}
  */
  readonly samPrivateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#sam_private_key_password ObjectWirelesscontrollerWtpprofileRadio4A#sam_private_key_password}
  */
  readonly samPrivateKeyPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#sam_report_intv ObjectWirelesscontrollerWtpprofileRadio4A#sam_report_intv}
  */
  readonly samReportIntv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#sam_security_type ObjectWirelesscontrollerWtpprofileRadio4A#sam_security_type}
  */
  readonly samSecurityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#sam_server ObjectWirelesscontrollerWtpprofileRadio4A#sam_server}
  */
  readonly samServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#sam_server_fqdn ObjectWirelesscontrollerWtpprofileRadio4A#sam_server_fqdn}
  */
  readonly samServerFqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#sam_server_ip ObjectWirelesscontrollerWtpprofileRadio4A#sam_server_ip}
  */
  readonly samServerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#sam_server_type ObjectWirelesscontrollerWtpprofileRadio4A#sam_server_type}
  */
  readonly samServerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#sam_ssid ObjectWirelesscontrollerWtpprofileRadio4A#sam_ssid}
  */
  readonly samSsid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#sam_test ObjectWirelesscontrollerWtpprofileRadio4A#sam_test}
  */
  readonly samTest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#sam_username ObjectWirelesscontrollerWtpprofileRadio4A#sam_username}
  */
  readonly samUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#scopetype ObjectWirelesscontrollerWtpprofileRadio4A#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#short_guard_interval ObjectWirelesscontrollerWtpprofileRadio4A#short_guard_interval}
  */
  readonly shortGuardInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#spectrum_analysis ObjectWirelesscontrollerWtpprofileRadio4A#spectrum_analysis}
  */
  readonly spectrumAnalysis?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#transmit_optimize ObjectWirelesscontrollerWtpprofileRadio4A#transmit_optimize}
  */
  readonly transmitOptimize?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#vap1 ObjectWirelesscontrollerWtpprofileRadio4A#vap1}
  */
  readonly vap1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#vap2 ObjectWirelesscontrollerWtpprofileRadio4A#vap2}
  */
  readonly vap2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#vap3 ObjectWirelesscontrollerWtpprofileRadio4A#vap3}
  */
  readonly vap3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#vap4 ObjectWirelesscontrollerWtpprofileRadio4A#vap4}
  */
  readonly vap4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#vap5 ObjectWirelesscontrollerWtpprofileRadio4A#vap5}
  */
  readonly vap5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#vap6 ObjectWirelesscontrollerWtpprofileRadio4A#vap6}
  */
  readonly vap6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#vap7 ObjectWirelesscontrollerWtpprofileRadio4A#vap7}
  */
  readonly vap7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#vap8 ObjectWirelesscontrollerWtpprofileRadio4A#vap8}
  */
  readonly vap8?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#vap_all ObjectWirelesscontrollerWtpprofileRadio4A#vap_all}
  */
  readonly vapAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#vaps ObjectWirelesscontrollerWtpprofileRadio4A#vaps}
  */
  readonly vaps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#wids_profile ObjectWirelesscontrollerWtpprofileRadio4A#wids_profile}
  */
  readonly widsProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#wtp_profile ObjectWirelesscontrollerWtpprofileRadio4A#wtp_profile}
  */
  readonly wtpProfile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#zero_wait_dfs ObjectWirelesscontrollerWtpprofileRadio4A#zero_wait_dfs}
  */
  readonly zeroWaitDfs?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4 fortimanager_object_wirelesscontroller_wtpprofile_radio4}
*/
export class ObjectWirelesscontrollerWtpprofileRadio4A extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_wirelesscontroller_wtpprofile_radio4";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectWirelesscontrollerWtpprofileRadio4A resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectWirelesscontrollerWtpprofileRadio4A to import
  * @param importFromId The id of the existing ObjectWirelesscontrollerWtpprofileRadio4A that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectWirelesscontrollerWtpprofileRadio4A to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_wirelesscontroller_wtpprofile_radio4", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_radio4 fortimanager_object_wirelesscontroller_wtpprofile_radio4} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectWirelesscontrollerWtpprofileRadio4AConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectWirelesscontrollerWtpprofileRadio4AConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_wirelesscontroller_wtpprofile_radio4',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
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
    this._airtimeFairness = config.airtimeFairness;
    this._amsdu = config.amsdu;
    this._apHandoff = config.apHandoff;
    this._apSnifferAddr = config.apSnifferAddr;
    this._apSnifferBufsize = config.apSnifferBufsize;
    this._apSnifferChan = config.apSnifferChan;
    this._apSnifferCtl = config.apSnifferCtl;
    this._apSnifferData = config.apSnifferData;
    this._apSnifferMgmtBeacon = config.apSnifferMgmtBeacon;
    this._apSnifferMgmtOther = config.apSnifferMgmtOther;
    this._apSnifferMgmtProbe = config.apSnifferMgmtProbe;
    this._arrpProfile = config.arrpProfile;
    this._autoPowerHigh = config.autoPowerHigh;
    this._autoPowerLevel = config.autoPowerLevel;
    this._autoPowerLow = config.autoPowerLow;
    this._autoPowerTarget = config.autoPowerTarget;
    this._band = config.band;
    this._band5GType = config.band5GType;
    this._bandwidthAdmissionControl = config.bandwidthAdmissionControl;
    this._bandwidthCapacity = config.bandwidthCapacity;
    this._beaconInterval = config.beaconInterval;
    this._bssColor = config.bssColor;
    this._bssColorMode = config.bssColorMode;
    this._callAdmissionControl = config.callAdmissionControl;
    this._callCapacity = config.callCapacity;
    this._channel = config.channel;
    this._channelBonding = config.channelBonding;
    this._channelUtilization = config.channelUtilization;
    this._coexistence = config.coexistence;
    this._darrp = config.darrp;
    this._drma = config.drma;
    this._drmaSensitivity = config.drmaSensitivity;
    this._dtim = config.dtim;
    this._fragThreshold = config.fragThreshold;
    this._frequencyHandoff = config.frequencyHandoff;
    this._id = config.id;
    this._iperfProtocol = config.iperfProtocol;
    this._iperfServerPort = config.iperfServerPort;
    this._maxClients = config.maxClients;
    this._maxDistance = config.maxDistance;
    this._mimoMode = config.mimoMode;
    this._mode = config.mode;
    this._n80211D = config.n80211D;
    this._optionalAntenna = config.optionalAntenna;
    this._optionalAntennaGain = config.optionalAntennaGain;
    this._powerLevel = config.powerLevel;
    this._powerMode = config.powerMode;
    this._powerValue = config.powerValue;
    this._powersaveOptimize = config.powersaveOptimize;
    this._protectionMode = config.protectionMode;
    this._radioId = config.radioId;
    this._rtsThreshold = config.rtsThreshold;
    this._samBssid = config.samBssid;
    this._samCaCertificate = config.samCaCertificate;
    this._samCaptivePortal = config.samCaptivePortal;
    this._samClientCertificate = config.samClientCertificate;
    this._samCwpFailureString = config.samCwpFailureString;
    this._samCwpMatchString = config.samCwpMatchString;
    this._samCwpPassword = config.samCwpPassword;
    this._samCwpSuccessString = config.samCwpSuccessString;
    this._samCwpTestUrl = config.samCwpTestUrl;
    this._samCwpUsername = config.samCwpUsername;
    this._samEapMethod = config.samEapMethod;
    this._samPassword = config.samPassword;
    this._samPrivateKey = config.samPrivateKey;
    this._samPrivateKeyPassword = config.samPrivateKeyPassword;
    this._samReportIntv = config.samReportIntv;
    this._samSecurityType = config.samSecurityType;
    this._samServer = config.samServer;
    this._samServerFqdn = config.samServerFqdn;
    this._samServerIp = config.samServerIp;
    this._samServerType = config.samServerType;
    this._samSsid = config.samSsid;
    this._samTest = config.samTest;
    this._samUsername = config.samUsername;
    this._scopetype = config.scopetype;
    this._shortGuardInterval = config.shortGuardInterval;
    this._spectrumAnalysis = config.spectrumAnalysis;
    this._transmitOptimize = config.transmitOptimize;
    this._vap1 = config.vap1;
    this._vap2 = config.vap2;
    this._vap3 = config.vap3;
    this._vap4 = config.vap4;
    this._vap5 = config.vap5;
    this._vap6 = config.vap6;
    this._vap7 = config.vap7;
    this._vap8 = config.vap8;
    this._vapAll = config.vapAll;
    this._vaps = config.vaps;
    this._widsProfile = config.widsProfile;
    this._wtpProfile = config.wtpProfile;
    this._zeroWaitDfs = config.zeroWaitDfs;
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

  // airtime_fairness - computed: false, optional: true, required: false
  private _airtimeFairness?: string; 
  public get airtimeFairness() {
    return this.getStringAttribute('airtime_fairness');
  }
  public set airtimeFairness(value: string) {
    this._airtimeFairness = value;
  }
  public resetAirtimeFairness() {
    this._airtimeFairness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get airtimeFairnessInput() {
    return this._airtimeFairness;
  }

  // amsdu - computed: false, optional: true, required: false
  private _amsdu?: string; 
  public get amsdu() {
    return this.getStringAttribute('amsdu');
  }
  public set amsdu(value: string) {
    this._amsdu = value;
  }
  public resetAmsdu() {
    this._amsdu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amsduInput() {
    return this._amsdu;
  }

  // ap_handoff - computed: false, optional: true, required: false
  private _apHandoff?: string; 
  public get apHandoff() {
    return this.getStringAttribute('ap_handoff');
  }
  public set apHandoff(value: string) {
    this._apHandoff = value;
  }
  public resetApHandoff() {
    this._apHandoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apHandoffInput() {
    return this._apHandoff;
  }

  // ap_sniffer_addr - computed: false, optional: true, required: false
  private _apSnifferAddr?: string; 
  public get apSnifferAddr() {
    return this.getStringAttribute('ap_sniffer_addr');
  }
  public set apSnifferAddr(value: string) {
    this._apSnifferAddr = value;
  }
  public resetApSnifferAddr() {
    this._apSnifferAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferAddrInput() {
    return this._apSnifferAddr;
  }

  // ap_sniffer_bufsize - computed: false, optional: true, required: false
  private _apSnifferBufsize?: number; 
  public get apSnifferBufsize() {
    return this.getNumberAttribute('ap_sniffer_bufsize');
  }
  public set apSnifferBufsize(value: number) {
    this._apSnifferBufsize = value;
  }
  public resetApSnifferBufsize() {
    this._apSnifferBufsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferBufsizeInput() {
    return this._apSnifferBufsize;
  }

  // ap_sniffer_chan - computed: false, optional: true, required: false
  private _apSnifferChan?: number; 
  public get apSnifferChan() {
    return this.getNumberAttribute('ap_sniffer_chan');
  }
  public set apSnifferChan(value: number) {
    this._apSnifferChan = value;
  }
  public resetApSnifferChan() {
    this._apSnifferChan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferChanInput() {
    return this._apSnifferChan;
  }

  // ap_sniffer_ctl - computed: false, optional: true, required: false
  private _apSnifferCtl?: string; 
  public get apSnifferCtl() {
    return this.getStringAttribute('ap_sniffer_ctl');
  }
  public set apSnifferCtl(value: string) {
    this._apSnifferCtl = value;
  }
  public resetApSnifferCtl() {
    this._apSnifferCtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferCtlInput() {
    return this._apSnifferCtl;
  }

  // ap_sniffer_data - computed: false, optional: true, required: false
  private _apSnifferData?: string; 
  public get apSnifferData() {
    return this.getStringAttribute('ap_sniffer_data');
  }
  public set apSnifferData(value: string) {
    this._apSnifferData = value;
  }
  public resetApSnifferData() {
    this._apSnifferData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferDataInput() {
    return this._apSnifferData;
  }

  // ap_sniffer_mgmt_beacon - computed: false, optional: true, required: false
  private _apSnifferMgmtBeacon?: string; 
  public get apSnifferMgmtBeacon() {
    return this.getStringAttribute('ap_sniffer_mgmt_beacon');
  }
  public set apSnifferMgmtBeacon(value: string) {
    this._apSnifferMgmtBeacon = value;
  }
  public resetApSnifferMgmtBeacon() {
    this._apSnifferMgmtBeacon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferMgmtBeaconInput() {
    return this._apSnifferMgmtBeacon;
  }

  // ap_sniffer_mgmt_other - computed: false, optional: true, required: false
  private _apSnifferMgmtOther?: string; 
  public get apSnifferMgmtOther() {
    return this.getStringAttribute('ap_sniffer_mgmt_other');
  }
  public set apSnifferMgmtOther(value: string) {
    this._apSnifferMgmtOther = value;
  }
  public resetApSnifferMgmtOther() {
    this._apSnifferMgmtOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferMgmtOtherInput() {
    return this._apSnifferMgmtOther;
  }

  // ap_sniffer_mgmt_probe - computed: false, optional: true, required: false
  private _apSnifferMgmtProbe?: string; 
  public get apSnifferMgmtProbe() {
    return this.getStringAttribute('ap_sniffer_mgmt_probe');
  }
  public set apSnifferMgmtProbe(value: string) {
    this._apSnifferMgmtProbe = value;
  }
  public resetApSnifferMgmtProbe() {
    this._apSnifferMgmtProbe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferMgmtProbeInput() {
    return this._apSnifferMgmtProbe;
  }

  // arrp_profile - computed: false, optional: true, required: false
  private _arrpProfile?: string; 
  public get arrpProfile() {
    return this.getStringAttribute('arrp_profile');
  }
  public set arrpProfile(value: string) {
    this._arrpProfile = value;
  }
  public resetArrpProfile() {
    this._arrpProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrpProfileInput() {
    return this._arrpProfile;
  }

  // auto_power_high - computed: false, optional: true, required: false
  private _autoPowerHigh?: number; 
  public get autoPowerHigh() {
    return this.getNumberAttribute('auto_power_high');
  }
  public set autoPowerHigh(value: number) {
    this._autoPowerHigh = value;
  }
  public resetAutoPowerHigh() {
    this._autoPowerHigh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPowerHighInput() {
    return this._autoPowerHigh;
  }

  // auto_power_level - computed: false, optional: true, required: false
  private _autoPowerLevel?: string; 
  public get autoPowerLevel() {
    return this.getStringAttribute('auto_power_level');
  }
  public set autoPowerLevel(value: string) {
    this._autoPowerLevel = value;
  }
  public resetAutoPowerLevel() {
    this._autoPowerLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPowerLevelInput() {
    return this._autoPowerLevel;
  }

  // auto_power_low - computed: false, optional: true, required: false
  private _autoPowerLow?: number; 
  public get autoPowerLow() {
    return this.getNumberAttribute('auto_power_low');
  }
  public set autoPowerLow(value: number) {
    this._autoPowerLow = value;
  }
  public resetAutoPowerLow() {
    this._autoPowerLow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPowerLowInput() {
    return this._autoPowerLow;
  }

  // auto_power_target - computed: false, optional: true, required: false
  private _autoPowerTarget?: string; 
  public get autoPowerTarget() {
    return this.getStringAttribute('auto_power_target');
  }
  public set autoPowerTarget(value: string) {
    this._autoPowerTarget = value;
  }
  public resetAutoPowerTarget() {
    this._autoPowerTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPowerTargetInput() {
    return this._autoPowerTarget;
  }

  // band - computed: false, optional: true, required: false
  private _band?: string; 
  public get band() {
    return this.getStringAttribute('band');
  }
  public set band(value: string) {
    this._band = value;
  }
  public resetBand() {
    this._band = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandInput() {
    return this._band;
  }

  // band_5g_type - computed: false, optional: true, required: false
  private _band5GType?: string; 
  public get band5GType() {
    return this.getStringAttribute('band_5g_type');
  }
  public set band5GType(value: string) {
    this._band5GType = value;
  }
  public resetBand5GType() {
    this._band5GType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get band5GTypeInput() {
    return this._band5GType;
  }

  // bandwidth_admission_control - computed: false, optional: true, required: false
  private _bandwidthAdmissionControl?: string; 
  public get bandwidthAdmissionControl() {
    return this.getStringAttribute('bandwidth_admission_control');
  }
  public set bandwidthAdmissionControl(value: string) {
    this._bandwidthAdmissionControl = value;
  }
  public resetBandwidthAdmissionControl() {
    this._bandwidthAdmissionControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthAdmissionControlInput() {
    return this._bandwidthAdmissionControl;
  }

  // bandwidth_capacity - computed: false, optional: true, required: false
  private _bandwidthCapacity?: number; 
  public get bandwidthCapacity() {
    return this.getNumberAttribute('bandwidth_capacity');
  }
  public set bandwidthCapacity(value: number) {
    this._bandwidthCapacity = value;
  }
  public resetBandwidthCapacity() {
    this._bandwidthCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthCapacityInput() {
    return this._bandwidthCapacity;
  }

  // beacon_interval - computed: false, optional: true, required: false
  private _beaconInterval?: number; 
  public get beaconInterval() {
    return this.getNumberAttribute('beacon_interval');
  }
  public set beaconInterval(value: number) {
    this._beaconInterval = value;
  }
  public resetBeaconInterval() {
    this._beaconInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beaconIntervalInput() {
    return this._beaconInterval;
  }

  // bss_color - computed: false, optional: true, required: false
  private _bssColor?: number; 
  public get bssColor() {
    return this.getNumberAttribute('bss_color');
  }
  public set bssColor(value: number) {
    this._bssColor = value;
  }
  public resetBssColor() {
    this._bssColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bssColorInput() {
    return this._bssColor;
  }

  // bss_color_mode - computed: false, optional: true, required: false
  private _bssColorMode?: string; 
  public get bssColorMode() {
    return this.getStringAttribute('bss_color_mode');
  }
  public set bssColorMode(value: string) {
    this._bssColorMode = value;
  }
  public resetBssColorMode() {
    this._bssColorMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bssColorModeInput() {
    return this._bssColorMode;
  }

  // call_admission_control - computed: false, optional: true, required: false
  private _callAdmissionControl?: string; 
  public get callAdmissionControl() {
    return this.getStringAttribute('call_admission_control');
  }
  public set callAdmissionControl(value: string) {
    this._callAdmissionControl = value;
  }
  public resetCallAdmissionControl() {
    this._callAdmissionControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callAdmissionControlInput() {
    return this._callAdmissionControl;
  }

  // call_capacity - computed: false, optional: true, required: false
  private _callCapacity?: number; 
  public get callCapacity() {
    return this.getNumberAttribute('call_capacity');
  }
  public set callCapacity(value: number) {
    this._callCapacity = value;
  }
  public resetCallCapacity() {
    this._callCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callCapacityInput() {
    return this._callCapacity;
  }

  // channel - computed: true, optional: true, required: false
  private _channel?: string[]; 
  public get channel() {
    return cdktf.Fn.tolist(this.getListAttribute('channel'));
  }
  public set channel(value: string[]) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // channel_bonding - computed: false, optional: true, required: false
  private _channelBonding?: string; 
  public get channelBonding() {
    return this.getStringAttribute('channel_bonding');
  }
  public set channelBonding(value: string) {
    this._channelBonding = value;
  }
  public resetChannelBonding() {
    this._channelBonding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelBondingInput() {
    return this._channelBonding;
  }

  // channel_utilization - computed: false, optional: true, required: false
  private _channelUtilization?: string; 
  public get channelUtilization() {
    return this.getStringAttribute('channel_utilization');
  }
  public set channelUtilization(value: string) {
    this._channelUtilization = value;
  }
  public resetChannelUtilization() {
    this._channelUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelUtilizationInput() {
    return this._channelUtilization;
  }

  // coexistence - computed: false, optional: true, required: false
  private _coexistence?: string; 
  public get coexistence() {
    return this.getStringAttribute('coexistence');
  }
  public set coexistence(value: string) {
    this._coexistence = value;
  }
  public resetCoexistence() {
    this._coexistence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coexistenceInput() {
    return this._coexistence;
  }

  // darrp - computed: false, optional: true, required: false
  private _darrp?: string; 
  public get darrp() {
    return this.getStringAttribute('darrp');
  }
  public set darrp(value: string) {
    this._darrp = value;
  }
  public resetDarrp() {
    this._darrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darrpInput() {
    return this._darrp;
  }

  // drma - computed: false, optional: true, required: false
  private _drma?: string; 
  public get drma() {
    return this.getStringAttribute('drma');
  }
  public set drma(value: string) {
    this._drma = value;
  }
  public resetDrma() {
    this._drma = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drmaInput() {
    return this._drma;
  }

  // drma_sensitivity - computed: false, optional: true, required: false
  private _drmaSensitivity?: string; 
  public get drmaSensitivity() {
    return this.getStringAttribute('drma_sensitivity');
  }
  public set drmaSensitivity(value: string) {
    this._drmaSensitivity = value;
  }
  public resetDrmaSensitivity() {
    this._drmaSensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drmaSensitivityInput() {
    return this._drmaSensitivity;
  }

  // dtim - computed: false, optional: true, required: false
  private _dtim?: number; 
  public get dtim() {
    return this.getNumberAttribute('dtim');
  }
  public set dtim(value: number) {
    this._dtim = value;
  }
  public resetDtim() {
    this._dtim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtimInput() {
    return this._dtim;
  }

  // frag_threshold - computed: false, optional: true, required: false
  private _fragThreshold?: number; 
  public get fragThreshold() {
    return this.getNumberAttribute('frag_threshold');
  }
  public set fragThreshold(value: number) {
    this._fragThreshold = value;
  }
  public resetFragThreshold() {
    this._fragThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragThresholdInput() {
    return this._fragThreshold;
  }

  // frequency_handoff - computed: false, optional: true, required: false
  private _frequencyHandoff?: string; 
  public get frequencyHandoff() {
    return this.getStringAttribute('frequency_handoff');
  }
  public set frequencyHandoff(value: string) {
    this._frequencyHandoff = value;
  }
  public resetFrequencyHandoff() {
    this._frequencyHandoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyHandoffInput() {
    return this._frequencyHandoff;
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

  // iperf_protocol - computed: false, optional: true, required: false
  private _iperfProtocol?: string; 
  public get iperfProtocol() {
    return this.getStringAttribute('iperf_protocol');
  }
  public set iperfProtocol(value: string) {
    this._iperfProtocol = value;
  }
  public resetIperfProtocol() {
    this._iperfProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iperfProtocolInput() {
    return this._iperfProtocol;
  }

  // iperf_server_port - computed: false, optional: true, required: false
  private _iperfServerPort?: number; 
  public get iperfServerPort() {
    return this.getNumberAttribute('iperf_server_port');
  }
  public set iperfServerPort(value: number) {
    this._iperfServerPort = value;
  }
  public resetIperfServerPort() {
    this._iperfServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iperfServerPortInput() {
    return this._iperfServerPort;
  }

  // max_clients - computed: false, optional: true, required: false
  private _maxClients?: number; 
  public get maxClients() {
    return this.getNumberAttribute('max_clients');
  }
  public set maxClients(value: number) {
    this._maxClients = value;
  }
  public resetMaxClients() {
    this._maxClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxClientsInput() {
    return this._maxClients;
  }

  // max_distance - computed: false, optional: true, required: false
  private _maxDistance?: number; 
  public get maxDistance() {
    return this.getNumberAttribute('max_distance');
  }
  public set maxDistance(value: number) {
    this._maxDistance = value;
  }
  public resetMaxDistance() {
    this._maxDistance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDistanceInput() {
    return this._maxDistance;
  }

  // mimo_mode - computed: false, optional: true, required: false
  private _mimoMode?: string; 
  public get mimoMode() {
    return this.getStringAttribute('mimo_mode');
  }
  public set mimoMode(value: string) {
    this._mimoMode = value;
  }
  public resetMimoMode() {
    this._mimoMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mimoModeInput() {
    return this._mimoMode;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // n80211d - computed: false, optional: true, required: false
  private _n80211D?: string; 
  public get n80211D() {
    return this.getStringAttribute('n80211d');
  }
  public set n80211D(value: string) {
    this._n80211D = value;
  }
  public resetN80211D() {
    this._n80211D = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get n80211DInput() {
    return this._n80211D;
  }

  // optional_antenna - computed: false, optional: true, required: false
  private _optionalAntenna?: string; 
  public get optionalAntenna() {
    return this.getStringAttribute('optional_antenna');
  }
  public set optionalAntenna(value: string) {
    this._optionalAntenna = value;
  }
  public resetOptionalAntenna() {
    this._optionalAntenna = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalAntennaInput() {
    return this._optionalAntenna;
  }

  // optional_antenna_gain - computed: false, optional: true, required: false
  private _optionalAntennaGain?: string; 
  public get optionalAntennaGain() {
    return this.getStringAttribute('optional_antenna_gain');
  }
  public set optionalAntennaGain(value: string) {
    this._optionalAntennaGain = value;
  }
  public resetOptionalAntennaGain() {
    this._optionalAntennaGain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalAntennaGainInput() {
    return this._optionalAntennaGain;
  }

  // power_level - computed: false, optional: true, required: false
  private _powerLevel?: number; 
  public get powerLevel() {
    return this.getNumberAttribute('power_level');
  }
  public set powerLevel(value: number) {
    this._powerLevel = value;
  }
  public resetPowerLevel() {
    this._powerLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerLevelInput() {
    return this._powerLevel;
  }

  // power_mode - computed: false, optional: true, required: false
  private _powerMode?: string; 
  public get powerMode() {
    return this.getStringAttribute('power_mode');
  }
  public set powerMode(value: string) {
    this._powerMode = value;
  }
  public resetPowerMode() {
    this._powerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerModeInput() {
    return this._powerMode;
  }

  // power_value - computed: false, optional: true, required: false
  private _powerValue?: number; 
  public get powerValue() {
    return this.getNumberAttribute('power_value');
  }
  public set powerValue(value: number) {
    this._powerValue = value;
  }
  public resetPowerValue() {
    this._powerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerValueInput() {
    return this._powerValue;
  }

  // powersave_optimize - computed: true, optional: true, required: false
  private _powersaveOptimize?: string[]; 
  public get powersaveOptimize() {
    return cdktf.Fn.tolist(this.getListAttribute('powersave_optimize'));
  }
  public set powersaveOptimize(value: string[]) {
    this._powersaveOptimize = value;
  }
  public resetPowersaveOptimize() {
    this._powersaveOptimize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powersaveOptimizeInput() {
    return this._powersaveOptimize;
  }

  // protection_mode - computed: false, optional: true, required: false
  private _protectionMode?: string; 
  public get protectionMode() {
    return this.getStringAttribute('protection_mode');
  }
  public set protectionMode(value: string) {
    this._protectionMode = value;
  }
  public resetProtectionMode() {
    this._protectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionModeInput() {
    return this._protectionMode;
  }

  // radio_id - computed: false, optional: true, required: false
  private _radioId?: number; 
  public get radioId() {
    return this.getNumberAttribute('radio_id');
  }
  public set radioId(value: number) {
    this._radioId = value;
  }
  public resetRadioId() {
    this._radioId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioIdInput() {
    return this._radioId;
  }

  // rts_threshold - computed: false, optional: true, required: false
  private _rtsThreshold?: number; 
  public get rtsThreshold() {
    return this.getNumberAttribute('rts_threshold');
  }
  public set rtsThreshold(value: number) {
    this._rtsThreshold = value;
  }
  public resetRtsThreshold() {
    this._rtsThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtsThresholdInput() {
    return this._rtsThreshold;
  }

  // sam_bssid - computed: false, optional: true, required: false
  private _samBssid?: string; 
  public get samBssid() {
    return this.getStringAttribute('sam_bssid');
  }
  public set samBssid(value: string) {
    this._samBssid = value;
  }
  public resetSamBssid() {
    this._samBssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samBssidInput() {
    return this._samBssid;
  }

  // sam_ca_certificate - computed: false, optional: true, required: false
  private _samCaCertificate?: string; 
  public get samCaCertificate() {
    return this.getStringAttribute('sam_ca_certificate');
  }
  public set samCaCertificate(value: string) {
    this._samCaCertificate = value;
  }
  public resetSamCaCertificate() {
    this._samCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samCaCertificateInput() {
    return this._samCaCertificate;
  }

  // sam_captive_portal - computed: false, optional: true, required: false
  private _samCaptivePortal?: string; 
  public get samCaptivePortal() {
    return this.getStringAttribute('sam_captive_portal');
  }
  public set samCaptivePortal(value: string) {
    this._samCaptivePortal = value;
  }
  public resetSamCaptivePortal() {
    this._samCaptivePortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samCaptivePortalInput() {
    return this._samCaptivePortal;
  }

  // sam_client_certificate - computed: false, optional: true, required: false
  private _samClientCertificate?: string; 
  public get samClientCertificate() {
    return this.getStringAttribute('sam_client_certificate');
  }
  public set samClientCertificate(value: string) {
    this._samClientCertificate = value;
  }
  public resetSamClientCertificate() {
    this._samClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samClientCertificateInput() {
    return this._samClientCertificate;
  }

  // sam_cwp_failure_string - computed: false, optional: true, required: false
  private _samCwpFailureString?: string; 
  public get samCwpFailureString() {
    return this.getStringAttribute('sam_cwp_failure_string');
  }
  public set samCwpFailureString(value: string) {
    this._samCwpFailureString = value;
  }
  public resetSamCwpFailureString() {
    this._samCwpFailureString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samCwpFailureStringInput() {
    return this._samCwpFailureString;
  }

  // sam_cwp_match_string - computed: false, optional: true, required: false
  private _samCwpMatchString?: string; 
  public get samCwpMatchString() {
    return this.getStringAttribute('sam_cwp_match_string');
  }
  public set samCwpMatchString(value: string) {
    this._samCwpMatchString = value;
  }
  public resetSamCwpMatchString() {
    this._samCwpMatchString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samCwpMatchStringInput() {
    return this._samCwpMatchString;
  }

  // sam_cwp_password - computed: true, optional: true, required: false
  private _samCwpPassword?: string[]; 
  public get samCwpPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('sam_cwp_password'));
  }
  public set samCwpPassword(value: string[]) {
    this._samCwpPassword = value;
  }
  public resetSamCwpPassword() {
    this._samCwpPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samCwpPasswordInput() {
    return this._samCwpPassword;
  }

  // sam_cwp_success_string - computed: false, optional: true, required: false
  private _samCwpSuccessString?: string; 
  public get samCwpSuccessString() {
    return this.getStringAttribute('sam_cwp_success_string');
  }
  public set samCwpSuccessString(value: string) {
    this._samCwpSuccessString = value;
  }
  public resetSamCwpSuccessString() {
    this._samCwpSuccessString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samCwpSuccessStringInput() {
    return this._samCwpSuccessString;
  }

  // sam_cwp_test_url - computed: false, optional: true, required: false
  private _samCwpTestUrl?: string; 
  public get samCwpTestUrl() {
    return this.getStringAttribute('sam_cwp_test_url');
  }
  public set samCwpTestUrl(value: string) {
    this._samCwpTestUrl = value;
  }
  public resetSamCwpTestUrl() {
    this._samCwpTestUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samCwpTestUrlInput() {
    return this._samCwpTestUrl;
  }

  // sam_cwp_username - computed: false, optional: true, required: false
  private _samCwpUsername?: string; 
  public get samCwpUsername() {
    return this.getStringAttribute('sam_cwp_username');
  }
  public set samCwpUsername(value: string) {
    this._samCwpUsername = value;
  }
  public resetSamCwpUsername() {
    this._samCwpUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samCwpUsernameInput() {
    return this._samCwpUsername;
  }

  // sam_eap_method - computed: false, optional: true, required: false
  private _samEapMethod?: string; 
  public get samEapMethod() {
    return this.getStringAttribute('sam_eap_method');
  }
  public set samEapMethod(value: string) {
    this._samEapMethod = value;
  }
  public resetSamEapMethod() {
    this._samEapMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samEapMethodInput() {
    return this._samEapMethod;
  }

  // sam_password - computed: true, optional: true, required: false
  private _samPassword?: string[]; 
  public get samPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('sam_password'));
  }
  public set samPassword(value: string[]) {
    this._samPassword = value;
  }
  public resetSamPassword() {
    this._samPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samPasswordInput() {
    return this._samPassword;
  }

  // sam_private_key - computed: false, optional: true, required: false
  private _samPrivateKey?: string; 
  public get samPrivateKey() {
    return this.getStringAttribute('sam_private_key');
  }
  public set samPrivateKey(value: string) {
    this._samPrivateKey = value;
  }
  public resetSamPrivateKey() {
    this._samPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samPrivateKeyInput() {
    return this._samPrivateKey;
  }

  // sam_private_key_password - computed: true, optional: true, required: false
  private _samPrivateKeyPassword?: string[]; 
  public get samPrivateKeyPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('sam_private_key_password'));
  }
  public set samPrivateKeyPassword(value: string[]) {
    this._samPrivateKeyPassword = value;
  }
  public resetSamPrivateKeyPassword() {
    this._samPrivateKeyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samPrivateKeyPasswordInput() {
    return this._samPrivateKeyPassword;
  }

  // sam_report_intv - computed: false, optional: true, required: false
  private _samReportIntv?: number; 
  public get samReportIntv() {
    return this.getNumberAttribute('sam_report_intv');
  }
  public set samReportIntv(value: number) {
    this._samReportIntv = value;
  }
  public resetSamReportIntv() {
    this._samReportIntv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samReportIntvInput() {
    return this._samReportIntv;
  }

  // sam_security_type - computed: false, optional: true, required: false
  private _samSecurityType?: string; 
  public get samSecurityType() {
    return this.getStringAttribute('sam_security_type');
  }
  public set samSecurityType(value: string) {
    this._samSecurityType = value;
  }
  public resetSamSecurityType() {
    this._samSecurityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samSecurityTypeInput() {
    return this._samSecurityType;
  }

  // sam_server - computed: false, optional: true, required: false
  private _samServer?: string; 
  public get samServer() {
    return this.getStringAttribute('sam_server');
  }
  public set samServer(value: string) {
    this._samServer = value;
  }
  public resetSamServer() {
    this._samServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samServerInput() {
    return this._samServer;
  }

  // sam_server_fqdn - computed: false, optional: true, required: false
  private _samServerFqdn?: string; 
  public get samServerFqdn() {
    return this.getStringAttribute('sam_server_fqdn');
  }
  public set samServerFqdn(value: string) {
    this._samServerFqdn = value;
  }
  public resetSamServerFqdn() {
    this._samServerFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samServerFqdnInput() {
    return this._samServerFqdn;
  }

  // sam_server_ip - computed: false, optional: true, required: false
  private _samServerIp?: string; 
  public get samServerIp() {
    return this.getStringAttribute('sam_server_ip');
  }
  public set samServerIp(value: string) {
    this._samServerIp = value;
  }
  public resetSamServerIp() {
    this._samServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samServerIpInput() {
    return this._samServerIp;
  }

  // sam_server_type - computed: false, optional: true, required: false
  private _samServerType?: string; 
  public get samServerType() {
    return this.getStringAttribute('sam_server_type');
  }
  public set samServerType(value: string) {
    this._samServerType = value;
  }
  public resetSamServerType() {
    this._samServerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samServerTypeInput() {
    return this._samServerType;
  }

  // sam_ssid - computed: false, optional: true, required: false
  private _samSsid?: string; 
  public get samSsid() {
    return this.getStringAttribute('sam_ssid');
  }
  public set samSsid(value: string) {
    this._samSsid = value;
  }
  public resetSamSsid() {
    this._samSsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samSsidInput() {
    return this._samSsid;
  }

  // sam_test - computed: false, optional: true, required: false
  private _samTest?: string; 
  public get samTest() {
    return this.getStringAttribute('sam_test');
  }
  public set samTest(value: string) {
    this._samTest = value;
  }
  public resetSamTest() {
    this._samTest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samTestInput() {
    return this._samTest;
  }

  // sam_username - computed: false, optional: true, required: false
  private _samUsername?: string; 
  public get samUsername() {
    return this.getStringAttribute('sam_username');
  }
  public set samUsername(value: string) {
    this._samUsername = value;
  }
  public resetSamUsername() {
    this._samUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samUsernameInput() {
    return this._samUsername;
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

  // short_guard_interval - computed: false, optional: true, required: false
  private _shortGuardInterval?: string; 
  public get shortGuardInterval() {
    return this.getStringAttribute('short_guard_interval');
  }
  public set shortGuardInterval(value: string) {
    this._shortGuardInterval = value;
  }
  public resetShortGuardInterval() {
    this._shortGuardInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortGuardIntervalInput() {
    return this._shortGuardInterval;
  }

  // spectrum_analysis - computed: false, optional: true, required: false
  private _spectrumAnalysis?: string; 
  public get spectrumAnalysis() {
    return this.getStringAttribute('spectrum_analysis');
  }
  public set spectrumAnalysis(value: string) {
    this._spectrumAnalysis = value;
  }
  public resetSpectrumAnalysis() {
    this._spectrumAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spectrumAnalysisInput() {
    return this._spectrumAnalysis;
  }

  // transmit_optimize - computed: true, optional: true, required: false
  private _transmitOptimize?: string[]; 
  public get transmitOptimize() {
    return cdktf.Fn.tolist(this.getListAttribute('transmit_optimize'));
  }
  public set transmitOptimize(value: string[]) {
    this._transmitOptimize = value;
  }
  public resetTransmitOptimize() {
    this._transmitOptimize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitOptimizeInput() {
    return this._transmitOptimize;
  }

  // vap1 - computed: false, optional: true, required: false
  private _vap1?: string; 
  public get vap1() {
    return this.getStringAttribute('vap1');
  }
  public set vap1(value: string) {
    this._vap1 = value;
  }
  public resetVap1() {
    this._vap1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap1Input() {
    return this._vap1;
  }

  // vap2 - computed: false, optional: true, required: false
  private _vap2?: string; 
  public get vap2() {
    return this.getStringAttribute('vap2');
  }
  public set vap2(value: string) {
    this._vap2 = value;
  }
  public resetVap2() {
    this._vap2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap2Input() {
    return this._vap2;
  }

  // vap3 - computed: false, optional: true, required: false
  private _vap3?: string; 
  public get vap3() {
    return this.getStringAttribute('vap3');
  }
  public set vap3(value: string) {
    this._vap3 = value;
  }
  public resetVap3() {
    this._vap3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap3Input() {
    return this._vap3;
  }

  // vap4 - computed: false, optional: true, required: false
  private _vap4?: string; 
  public get vap4() {
    return this.getStringAttribute('vap4');
  }
  public set vap4(value: string) {
    this._vap4 = value;
  }
  public resetVap4() {
    this._vap4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap4Input() {
    return this._vap4;
  }

  // vap5 - computed: false, optional: true, required: false
  private _vap5?: string; 
  public get vap5() {
    return this.getStringAttribute('vap5');
  }
  public set vap5(value: string) {
    this._vap5 = value;
  }
  public resetVap5() {
    this._vap5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap5Input() {
    return this._vap5;
  }

  // vap6 - computed: false, optional: true, required: false
  private _vap6?: string; 
  public get vap6() {
    return this.getStringAttribute('vap6');
  }
  public set vap6(value: string) {
    this._vap6 = value;
  }
  public resetVap6() {
    this._vap6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap6Input() {
    return this._vap6;
  }

  // vap7 - computed: false, optional: true, required: false
  private _vap7?: string; 
  public get vap7() {
    return this.getStringAttribute('vap7');
  }
  public set vap7(value: string) {
    this._vap7 = value;
  }
  public resetVap7() {
    this._vap7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap7Input() {
    return this._vap7;
  }

  // vap8 - computed: false, optional: true, required: false
  private _vap8?: string; 
  public get vap8() {
    return this.getStringAttribute('vap8');
  }
  public set vap8(value: string) {
    this._vap8 = value;
  }
  public resetVap8() {
    this._vap8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap8Input() {
    return this._vap8;
  }

  // vap_all - computed: false, optional: true, required: false
  private _vapAll?: string; 
  public get vapAll() {
    return this.getStringAttribute('vap_all');
  }
  public set vapAll(value: string) {
    this._vapAll = value;
  }
  public resetVapAll() {
    this._vapAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vapAllInput() {
    return this._vapAll;
  }

  // vaps - computed: false, optional: true, required: false
  private _vaps?: string; 
  public get vaps() {
    return this.getStringAttribute('vaps');
  }
  public set vaps(value: string) {
    this._vaps = value;
  }
  public resetVaps() {
    this._vaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vapsInput() {
    return this._vaps;
  }

  // wids_profile - computed: false, optional: true, required: false
  private _widsProfile?: string; 
  public get widsProfile() {
    return this.getStringAttribute('wids_profile');
  }
  public set widsProfile(value: string) {
    this._widsProfile = value;
  }
  public resetWidsProfile() {
    this._widsProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widsProfileInput() {
    return this._widsProfile;
  }

  // wtp_profile - computed: false, optional: false, required: true
  private _wtpProfile?: string; 
  public get wtpProfile() {
    return this.getStringAttribute('wtp_profile');
  }
  public set wtpProfile(value: string) {
    this._wtpProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wtpProfileInput() {
    return this._wtpProfile;
  }

  // zero_wait_dfs - computed: false, optional: true, required: false
  private _zeroWaitDfs?: string; 
  public get zeroWaitDfs() {
    return this.getStringAttribute('zero_wait_dfs');
  }
  public set zeroWaitDfs(value: string) {
    this._zeroWaitDfs = value;
  }
  public resetZeroWaitDfs() {
    this._zeroWaitDfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroWaitDfsInput() {
    return this._zeroWaitDfs;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      airtime_fairness: cdktf.stringToTerraform(this._airtimeFairness),
      amsdu: cdktf.stringToTerraform(this._amsdu),
      ap_handoff: cdktf.stringToTerraform(this._apHandoff),
      ap_sniffer_addr: cdktf.stringToTerraform(this._apSnifferAddr),
      ap_sniffer_bufsize: cdktf.numberToTerraform(this._apSnifferBufsize),
      ap_sniffer_chan: cdktf.numberToTerraform(this._apSnifferChan),
      ap_sniffer_ctl: cdktf.stringToTerraform(this._apSnifferCtl),
      ap_sniffer_data: cdktf.stringToTerraform(this._apSnifferData),
      ap_sniffer_mgmt_beacon: cdktf.stringToTerraform(this._apSnifferMgmtBeacon),
      ap_sniffer_mgmt_other: cdktf.stringToTerraform(this._apSnifferMgmtOther),
      ap_sniffer_mgmt_probe: cdktf.stringToTerraform(this._apSnifferMgmtProbe),
      arrp_profile: cdktf.stringToTerraform(this._arrpProfile),
      auto_power_high: cdktf.numberToTerraform(this._autoPowerHigh),
      auto_power_level: cdktf.stringToTerraform(this._autoPowerLevel),
      auto_power_low: cdktf.numberToTerraform(this._autoPowerLow),
      auto_power_target: cdktf.stringToTerraform(this._autoPowerTarget),
      band: cdktf.stringToTerraform(this._band),
      band_5g_type: cdktf.stringToTerraform(this._band5GType),
      bandwidth_admission_control: cdktf.stringToTerraform(this._bandwidthAdmissionControl),
      bandwidth_capacity: cdktf.numberToTerraform(this._bandwidthCapacity),
      beacon_interval: cdktf.numberToTerraform(this._beaconInterval),
      bss_color: cdktf.numberToTerraform(this._bssColor),
      bss_color_mode: cdktf.stringToTerraform(this._bssColorMode),
      call_admission_control: cdktf.stringToTerraform(this._callAdmissionControl),
      call_capacity: cdktf.numberToTerraform(this._callCapacity),
      channel: cdktf.listMapper(cdktf.stringToTerraform, false)(this._channel),
      channel_bonding: cdktf.stringToTerraform(this._channelBonding),
      channel_utilization: cdktf.stringToTerraform(this._channelUtilization),
      coexistence: cdktf.stringToTerraform(this._coexistence),
      darrp: cdktf.stringToTerraform(this._darrp),
      drma: cdktf.stringToTerraform(this._drma),
      drma_sensitivity: cdktf.stringToTerraform(this._drmaSensitivity),
      dtim: cdktf.numberToTerraform(this._dtim),
      frag_threshold: cdktf.numberToTerraform(this._fragThreshold),
      frequency_handoff: cdktf.stringToTerraform(this._frequencyHandoff),
      id: cdktf.stringToTerraform(this._id),
      iperf_protocol: cdktf.stringToTerraform(this._iperfProtocol),
      iperf_server_port: cdktf.numberToTerraform(this._iperfServerPort),
      max_clients: cdktf.numberToTerraform(this._maxClients),
      max_distance: cdktf.numberToTerraform(this._maxDistance),
      mimo_mode: cdktf.stringToTerraform(this._mimoMode),
      mode: cdktf.stringToTerraform(this._mode),
      n80211d: cdktf.stringToTerraform(this._n80211D),
      optional_antenna: cdktf.stringToTerraform(this._optionalAntenna),
      optional_antenna_gain: cdktf.stringToTerraform(this._optionalAntennaGain),
      power_level: cdktf.numberToTerraform(this._powerLevel),
      power_mode: cdktf.stringToTerraform(this._powerMode),
      power_value: cdktf.numberToTerraform(this._powerValue),
      powersave_optimize: cdktf.listMapper(cdktf.stringToTerraform, false)(this._powersaveOptimize),
      protection_mode: cdktf.stringToTerraform(this._protectionMode),
      radio_id: cdktf.numberToTerraform(this._radioId),
      rts_threshold: cdktf.numberToTerraform(this._rtsThreshold),
      sam_bssid: cdktf.stringToTerraform(this._samBssid),
      sam_ca_certificate: cdktf.stringToTerraform(this._samCaCertificate),
      sam_captive_portal: cdktf.stringToTerraform(this._samCaptivePortal),
      sam_client_certificate: cdktf.stringToTerraform(this._samClientCertificate),
      sam_cwp_failure_string: cdktf.stringToTerraform(this._samCwpFailureString),
      sam_cwp_match_string: cdktf.stringToTerraform(this._samCwpMatchString),
      sam_cwp_password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._samCwpPassword),
      sam_cwp_success_string: cdktf.stringToTerraform(this._samCwpSuccessString),
      sam_cwp_test_url: cdktf.stringToTerraform(this._samCwpTestUrl),
      sam_cwp_username: cdktf.stringToTerraform(this._samCwpUsername),
      sam_eap_method: cdktf.stringToTerraform(this._samEapMethod),
      sam_password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._samPassword),
      sam_private_key: cdktf.stringToTerraform(this._samPrivateKey),
      sam_private_key_password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._samPrivateKeyPassword),
      sam_report_intv: cdktf.numberToTerraform(this._samReportIntv),
      sam_security_type: cdktf.stringToTerraform(this._samSecurityType),
      sam_server: cdktf.stringToTerraform(this._samServer),
      sam_server_fqdn: cdktf.stringToTerraform(this._samServerFqdn),
      sam_server_ip: cdktf.stringToTerraform(this._samServerIp),
      sam_server_type: cdktf.stringToTerraform(this._samServerType),
      sam_ssid: cdktf.stringToTerraform(this._samSsid),
      sam_test: cdktf.stringToTerraform(this._samTest),
      sam_username: cdktf.stringToTerraform(this._samUsername),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      short_guard_interval: cdktf.stringToTerraform(this._shortGuardInterval),
      spectrum_analysis: cdktf.stringToTerraform(this._spectrumAnalysis),
      transmit_optimize: cdktf.listMapper(cdktf.stringToTerraform, false)(this._transmitOptimize),
      vap1: cdktf.stringToTerraform(this._vap1),
      vap2: cdktf.stringToTerraform(this._vap2),
      vap3: cdktf.stringToTerraform(this._vap3),
      vap4: cdktf.stringToTerraform(this._vap4),
      vap5: cdktf.stringToTerraform(this._vap5),
      vap6: cdktf.stringToTerraform(this._vap6),
      vap7: cdktf.stringToTerraform(this._vap7),
      vap8: cdktf.stringToTerraform(this._vap8),
      vap_all: cdktf.stringToTerraform(this._vapAll),
      vaps: cdktf.stringToTerraform(this._vaps),
      wids_profile: cdktf.stringToTerraform(this._widsProfile),
      wtp_profile: cdktf.stringToTerraform(this._wtpProfile),
      zero_wait_dfs: cdktf.stringToTerraform(this._zeroWaitDfs),
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
      airtime_fairness: {
        value: cdktf.stringToHclTerraform(this._airtimeFairness),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      amsdu: {
        value: cdktf.stringToHclTerraform(this._amsdu),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ap_handoff: {
        value: cdktf.stringToHclTerraform(this._apHandoff),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ap_sniffer_addr: {
        value: cdktf.stringToHclTerraform(this._apSnifferAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ap_sniffer_bufsize: {
        value: cdktf.numberToHclTerraform(this._apSnifferBufsize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ap_sniffer_chan: {
        value: cdktf.numberToHclTerraform(this._apSnifferChan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ap_sniffer_ctl: {
        value: cdktf.stringToHclTerraform(this._apSnifferCtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ap_sniffer_data: {
        value: cdktf.stringToHclTerraform(this._apSnifferData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ap_sniffer_mgmt_beacon: {
        value: cdktf.stringToHclTerraform(this._apSnifferMgmtBeacon),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ap_sniffer_mgmt_other: {
        value: cdktf.stringToHclTerraform(this._apSnifferMgmtOther),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ap_sniffer_mgmt_probe: {
        value: cdktf.stringToHclTerraform(this._apSnifferMgmtProbe),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arrp_profile: {
        value: cdktf.stringToHclTerraform(this._arrpProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_power_high: {
        value: cdktf.numberToHclTerraform(this._autoPowerHigh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_power_level: {
        value: cdktf.stringToHclTerraform(this._autoPowerLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_power_low: {
        value: cdktf.numberToHclTerraform(this._autoPowerLow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_power_target: {
        value: cdktf.stringToHclTerraform(this._autoPowerTarget),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      band: {
        value: cdktf.stringToHclTerraform(this._band),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      band_5g_type: {
        value: cdktf.stringToHclTerraform(this._band5GType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bandwidth_admission_control: {
        value: cdktf.stringToHclTerraform(this._bandwidthAdmissionControl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bandwidth_capacity: {
        value: cdktf.numberToHclTerraform(this._bandwidthCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      beacon_interval: {
        value: cdktf.numberToHclTerraform(this._beaconInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bss_color: {
        value: cdktf.numberToHclTerraform(this._bssColor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bss_color_mode: {
        value: cdktf.stringToHclTerraform(this._bssColorMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      call_admission_control: {
        value: cdktf.stringToHclTerraform(this._callAdmissionControl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      call_capacity: {
        value: cdktf.numberToHclTerraform(this._callCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      channel: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._channel),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      channel_bonding: {
        value: cdktf.stringToHclTerraform(this._channelBonding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      channel_utilization: {
        value: cdktf.stringToHclTerraform(this._channelUtilization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      coexistence: {
        value: cdktf.stringToHclTerraform(this._coexistence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      darrp: {
        value: cdktf.stringToHclTerraform(this._darrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drma: {
        value: cdktf.stringToHclTerraform(this._drma),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drma_sensitivity: {
        value: cdktf.stringToHclTerraform(this._drmaSensitivity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dtim: {
        value: cdktf.numberToHclTerraform(this._dtim),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      frag_threshold: {
        value: cdktf.numberToHclTerraform(this._fragThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      frequency_handoff: {
        value: cdktf.stringToHclTerraform(this._frequencyHandoff),
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
      iperf_protocol: {
        value: cdktf.stringToHclTerraform(this._iperfProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iperf_server_port: {
        value: cdktf.numberToHclTerraform(this._iperfServerPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_clients: {
        value: cdktf.numberToHclTerraform(this._maxClients),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_distance: {
        value: cdktf.numberToHclTerraform(this._maxDistance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mimo_mode: {
        value: cdktf.stringToHclTerraform(this._mimoMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      n80211d: {
        value: cdktf.stringToHclTerraform(this._n80211D),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      optional_antenna: {
        value: cdktf.stringToHclTerraform(this._optionalAntenna),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      optional_antenna_gain: {
        value: cdktf.stringToHclTerraform(this._optionalAntennaGain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      power_level: {
        value: cdktf.numberToHclTerraform(this._powerLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      power_mode: {
        value: cdktf.stringToHclTerraform(this._powerMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      power_value: {
        value: cdktf.numberToHclTerraform(this._powerValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      powersave_optimize: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._powersaveOptimize),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      protection_mode: {
        value: cdktf.stringToHclTerraform(this._protectionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radio_id: {
        value: cdktf.numberToHclTerraform(this._radioId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rts_threshold: {
        value: cdktf.numberToHclTerraform(this._rtsThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sam_bssid: {
        value: cdktf.stringToHclTerraform(this._samBssid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sam_ca_certificate: {
        value: cdktf.stringToHclTerraform(this._samCaCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sam_captive_portal: {
        value: cdktf.stringToHclTerraform(this._samCaptivePortal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sam_client_certificate: {
        value: cdktf.stringToHclTerraform(this._samClientCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sam_cwp_failure_string: {
        value: cdktf.stringToHclTerraform(this._samCwpFailureString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sam_cwp_match_string: {
        value: cdktf.stringToHclTerraform(this._samCwpMatchString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sam_cwp_password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._samCwpPassword),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sam_cwp_success_string: {
        value: cdktf.stringToHclTerraform(this._samCwpSuccessString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sam_cwp_test_url: {
        value: cdktf.stringToHclTerraform(this._samCwpTestUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sam_cwp_username: {
        value: cdktf.stringToHclTerraform(this._samCwpUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sam_eap_method: {
        value: cdktf.stringToHclTerraform(this._samEapMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sam_password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._samPassword),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sam_private_key: {
        value: cdktf.stringToHclTerraform(this._samPrivateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sam_private_key_password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._samPrivateKeyPassword),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sam_report_intv: {
        value: cdktf.numberToHclTerraform(this._samReportIntv),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sam_security_type: {
        value: cdktf.stringToHclTerraform(this._samSecurityType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sam_server: {
        value: cdktf.stringToHclTerraform(this._samServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sam_server_fqdn: {
        value: cdktf.stringToHclTerraform(this._samServerFqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sam_server_ip: {
        value: cdktf.stringToHclTerraform(this._samServerIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sam_server_type: {
        value: cdktf.stringToHclTerraform(this._samServerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sam_ssid: {
        value: cdktf.stringToHclTerraform(this._samSsid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sam_test: {
        value: cdktf.stringToHclTerraform(this._samTest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sam_username: {
        value: cdktf.stringToHclTerraform(this._samUsername),
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
      short_guard_interval: {
        value: cdktf.stringToHclTerraform(this._shortGuardInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spectrum_analysis: {
        value: cdktf.stringToHclTerraform(this._spectrumAnalysis),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transmit_optimize: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._transmitOptimize),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vap1: {
        value: cdktf.stringToHclTerraform(this._vap1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vap2: {
        value: cdktf.stringToHclTerraform(this._vap2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vap3: {
        value: cdktf.stringToHclTerraform(this._vap3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vap4: {
        value: cdktf.stringToHclTerraform(this._vap4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vap5: {
        value: cdktf.stringToHclTerraform(this._vap5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vap6: {
        value: cdktf.stringToHclTerraform(this._vap6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vap7: {
        value: cdktf.stringToHclTerraform(this._vap7),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vap8: {
        value: cdktf.stringToHclTerraform(this._vap8),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vap_all: {
        value: cdktf.stringToHclTerraform(this._vapAll),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vaps: {
        value: cdktf.stringToHclTerraform(this._vaps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wids_profile: {
        value: cdktf.stringToHclTerraform(this._widsProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wtp_profile: {
        value: cdktf.stringToHclTerraform(this._wtpProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zero_wait_dfs: {
        value: cdktf.stringToHclTerraform(this._zeroWaitDfs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
