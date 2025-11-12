// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortisaseEndpointsDetailsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#alias DataFortisaseEndpointsDetails#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#av_enabled DataFortisaseEndpointsDetails#av_enabled}
  */
  readonly avEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#av_events_count DataFortisaseEndpointsDetails#av_events_count}
  */
  readonly avEventsCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#av_hidden DataFortisaseEndpointsDetails#av_hidden}
  */
  readonly avHidden?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#av_installed DataFortisaseEndpointsDetails#av_installed}
  */
  readonly avInstalled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#av_last_cancelled_scan_date DataFortisaseEndpointsDetails#av_last_cancelled_scan_date}
  */
  readonly avLastCancelledScanDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#av_last_cancelled_scan_type DataFortisaseEndpointsDetails#av_last_cancelled_scan_type}
  */
  readonly avLastCancelledScanType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#av_last_full_scan_date DataFortisaseEndpointsDetails#av_last_full_scan_date}
  */
  readonly avLastFullScanDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#av_last_scan_date DataFortisaseEndpointsDetails#av_last_scan_date}
  */
  readonly avLastScanDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#av_last_scan_type DataFortisaseEndpointsDetails#av_last_scan_type}
  */
  readonly avLastScanType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#av_next_scan_hour DataFortisaseEndpointsDetails#av_next_scan_hour}
  */
  readonly avNextScanHour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#av_next_scan_min DataFortisaseEndpointsDetails#av_next_scan_min}
  */
  readonly avNextScanMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#av_next_scan_on DataFortisaseEndpointsDetails#av_next_scan_on}
  */
  readonly avNextScanOn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#av_next_scan_type DataFortisaseEndpointsDetails#av_next_scan_type}
  */
  readonly avNextScanType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#av_next_sch_type DataFortisaseEndpointsDetails#av_next_sch_type}
  */
  readonly avNextSchType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#av_scan_scheduled DataFortisaseEndpointsDetails#av_scan_scheduled}
  */
  readonly avScanScheduled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#caps DataFortisaseEndpointsDetails#caps}
  */
  readonly caps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#comparable_fct_version DataFortisaseEndpointsDetails#comparable_fct_version}
  */
  readonly comparableFctVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#conn_details DataFortisaseEndpointsDetails#conn_details}
  */
  readonly connDetails?: DataFortisaseEndpointsDetailsConnDetails[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#deployment_state DataFortisaseEndpointsDetails#deployment_state}
  */
  readonly deploymentState?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#deployment_state_data DataFortisaseEndpointsDetails#deployment_state_data}
  */
  readonly deploymentStateData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#deployment_state_time DataFortisaseEndpointsDetails#deployment_state_time}
  */
  readonly deploymentStateTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#deregister DataFortisaseEndpointsDetails#deregister}
  */
  readonly deregister?: number;
  /**
  * The device ID of the endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#device_id DataFortisaseEndpointsDetails#device_id}
  */
  readonly deviceId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#distinguished_name DataFortisaseEndpointsDetails#distinguished_name}
  */
  readonly distinguishedName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#domain_id DataFortisaseEndpointsDetails#domain_id}
  */
  readonly domainId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#fct_sn DataFortisaseEndpointsDetails#fct_sn}
  */
  readonly fctSn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#fct_version DataFortisaseEndpointsDetails#fct_version}
  */
  readonly fctVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#fgt_sn DataFortisaseEndpointsDetails#fgt_sn}
  */
  readonly fgtSn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#forensics DataFortisaseEndpointsDetails#forensics}
  */
  readonly forensics?: DataFortisaseEndpointsDetailsForensics;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#forensics_enabled DataFortisaseEndpointsDetails#forensics_enabled}
  */
  readonly forensicsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#forticlient_id DataFortisaseEndpointsDetails#forticlient_id}
  */
  readonly forticlientId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#fw_enabled DataFortisaseEndpointsDetails#fw_enabled}
  */
  readonly fwEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#fw_events_count DataFortisaseEndpointsDetails#fw_events_count}
  */
  readonly fwEventsCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#fw_hidden DataFortisaseEndpointsDetails#fw_hidden}
  */
  readonly fwHidden?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#fw_installed DataFortisaseEndpointsDetails#fw_installed}
  */
  readonly fwInstalled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#group_id DataFortisaseEndpointsDetails#group_id}
  */
  readonly groupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#group_name DataFortisaseEndpointsDetails#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#group_tag DataFortisaseEndpointsDetails#group_tag}
  */
  readonly groupTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#hardware_details DataFortisaseEndpointsDetails#hardware_details}
  */
  readonly hardwareDetails?: DataFortisaseEndpointsDetailsHardwareDetails;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#host DataFortisaseEndpointsDetails#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#installation_state DataFortisaseEndpointsDetails#installation_state}
  */
  readonly installationState?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#installer_name DataFortisaseEndpointsDetails#installer_name}
  */
  readonly installerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#ip_addr DataFortisaseEndpointsDetails#ip_addr}
  */
  readonly ipAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#ip_list_name DataFortisaseEndpointsDetails#ip_list_name}
  */
  readonly ipListName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#is_av_scanning DataFortisaseEndpointsDetails#is_av_scanning}
  */
  readonly isAvScanning?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#is_ems_online DataFortisaseEndpointsDetails#is_ems_online}
  */
  readonly isEmsOnline?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#is_ems_onnet DataFortisaseEndpointsDetails#is_ems_onnet}
  */
  readonly isEmsOnnet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#is_ems_registered DataFortisaseEndpointsDetails#is_ems_registered}
  */
  readonly isEmsRegistered?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#is_excluded DataFortisaseEndpointsDetails#is_excluded}
  */
  readonly isExcluded?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#is_installed DataFortisaseEndpointsDetails#is_installed}
  */
  readonly isInstalled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#is_managed DataFortisaseEndpointsDetails#is_managed}
  */
  readonly isManaged?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#is_migrating DataFortisaseEndpointsDetails#is_migrating}
  */
  readonly isMigrating?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#is_quarantined DataFortisaseEndpointsDetails#is_quarantined}
  */
  readonly isQuarantined?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#is_vuln_scanning DataFortisaseEndpointsDetails#is_vuln_scanning}
  */
  readonly isVulnScanning?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#last_seen DataFortisaseEndpointsDetails#last_seen}
  */
  readonly lastSeen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#last_vuln_scan DataFortisaseEndpointsDetails#last_vuln_scan}
  */
  readonly lastVulnScan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#mac_addr DataFortisaseEndpointsDetails#mac_addr}
  */
  readonly macAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#name DataFortisaseEndpointsDetails#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#orig_group_id DataFortisaseEndpointsDetails#orig_group_id}
  */
  readonly origGroupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#orig_group_name DataFortisaseEndpointsDetails#orig_group_name}
  */
  readonly origGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#os_service_pack DataFortisaseEndpointsDetails#os_service_pack}
  */
  readonly osServicePack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#os_version DataFortisaseEndpointsDetails#os_version}
  */
  readonly osVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#profile_name DataFortisaseEndpointsDetails#profile_name}
  */
  readonly profileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#quarantine_access_code DataFortisaseEndpointsDetails#quarantine_access_code}
  */
  readonly quarantineAccessCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#quarantine_message DataFortisaseEndpointsDetails#quarantine_message}
  */
  readonly quarantineMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#rs_enabled DataFortisaseEndpointsDetails#rs_enabled}
  */
  readonly rsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#rs_hidden DataFortisaseEndpointsDetails#rs_hidden}
  */
  readonly rsHidden?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#rs_installed DataFortisaseEndpointsDetails#rs_installed}
  */
  readonly rsInstalled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#run_cmd DataFortisaseEndpointsDetails#run_cmd}
  */
  readonly runCmd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#sb_enabled DataFortisaseEndpointsDetails#sb_enabled}
  */
  readonly sbEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#sb_events_count DataFortisaseEndpointsDetails#sb_events_count}
  */
  readonly sbEventsCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#sb_hidden DataFortisaseEndpointsDetails#sb_hidden}
  */
  readonly sbHidden?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#sb_installed DataFortisaseEndpointsDetails#sb_installed}
  */
  readonly sbInstalled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#scheduled_install_time DataFortisaseEndpointsDetails#scheduled_install_time}
  */
  readonly scheduledInstallTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#service DataFortisaseEndpointsDetails#service}
  */
  readonly service?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#ssoma_enabled DataFortisaseEndpointsDetails#ssoma_enabled}
  */
  readonly ssomaEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#ssoma_hidden DataFortisaseEndpointsDetails#ssoma_hidden}
  */
  readonly ssomaHidden?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#ssoma_installed DataFortisaseEndpointsDetails#ssoma_installed}
  */
  readonly ssomaInstalled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#sys_events_count DataFortisaseEndpointsDetails#sys_events_count}
  */
  readonly sysEventsCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#tags DataFortisaseEndpointsDetails#tags}
  */
  readonly tags?: DataFortisaseEndpointsDetailsTags[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#uid DataFortisaseEndpointsDetails#uid}
  */
  readonly uid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#user_domain DataFortisaseEndpointsDetails#user_domain}
  */
  readonly userDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#vpn_enabled DataFortisaseEndpointsDetails#vpn_enabled}
  */
  readonly vpnEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#vpn_hidden DataFortisaseEndpointsDetails#vpn_hidden}
  */
  readonly vpnHidden?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#vpn_installed DataFortisaseEndpointsDetails#vpn_installed}
  */
  readonly vpnInstalled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#vuln_enabled DataFortisaseEndpointsDetails#vuln_enabled}
  */
  readonly vulnEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#vuln_events_count DataFortisaseEndpointsDetails#vuln_events_count}
  */
  readonly vulnEventsCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#vuln_events_max_severity DataFortisaseEndpointsDetails#vuln_events_max_severity}
  */
  readonly vulnEventsMaxSeverity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#vuln_hidden DataFortisaseEndpointsDetails#vuln_hidden}
  */
  readonly vulnHidden?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#vuln_installed DataFortisaseEndpointsDetails#vuln_installed}
  */
  readonly vulnInstalled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#vuln_next_scan_on DataFortisaseEndpointsDetails#vuln_next_scan_on}
  */
  readonly vulnNextScanOn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#vuln_next_sch_type DataFortisaseEndpointsDetails#vuln_next_sch_type}
  */
  readonly vulnNextSchType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#vuln_next_scheduled DataFortisaseEndpointsDetails#vuln_next_scheduled}
  */
  readonly vulnNextScheduled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#vuln_next_start_hour DataFortisaseEndpointsDetails#vuln_next_start_hour}
  */
  readonly vulnNextStartHour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#vuln_next_start_min DataFortisaseEndpointsDetails#vuln_next_start_min}
  */
  readonly vulnNextStartMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#vuln_scan_status DataFortisaseEndpointsDetails#vuln_scan_status}
  */
  readonly vulnScanStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#wf_enabled DataFortisaseEndpointsDetails#wf_enabled}
  */
  readonly wfEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#wf_events_count DataFortisaseEndpointsDetails#wf_events_count}
  */
  readonly wfEventsCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#wf_hidden DataFortisaseEndpointsDetails#wf_hidden}
  */
  readonly wfHidden?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#wf_installed DataFortisaseEndpointsDetails#wf_installed}
  */
  readonly wfInstalled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#ztna_enabled DataFortisaseEndpointsDetails#ztna_enabled}
  */
  readonly ztnaEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#ztna_serial DataFortisaseEndpointsDetails#ztna_serial}
  */
  readonly ztnaSerial?: string;
}
export interface DataFortisaseEndpointsDetailsConnDetailsConnections {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#gateway DataFortisaseEndpointsDetails#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#gateway_mac DataFortisaseEndpointsDetails#gateway_mac}
  */
  readonly gatewayMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#ip_address DataFortisaseEndpointsDetails#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#mac DataFortisaseEndpointsDetails#mac}
  */
  readonly mac?: string;
}

export function dataFortisaseEndpointsDetailsConnDetailsConnectionsToTerraform(struct?: DataFortisaseEndpointsDetailsConnDetailsConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway: cdktf.stringToTerraform(struct!.gateway),
    gateway_mac: cdktf.stringToTerraform(struct!.gatewayMac),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    mac: cdktf.stringToTerraform(struct!.mac),
  }
}


export function dataFortisaseEndpointsDetailsConnDetailsConnectionsToHclTerraform(struct?: DataFortisaseEndpointsDetailsConnDetailsConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_mac: {
      value: cdktf.stringToHclTerraform(struct!.gatewayMac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseEndpointsDetailsConnDetailsConnectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseEndpointsDetailsConnDetailsConnections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._gatewayMac !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayMac = this._gatewayMac;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseEndpointsDetailsConnDetailsConnections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gateway = undefined;
      this._gatewayMac = undefined;
      this._ipAddress = undefined;
      this._mac = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gateway = value.gateway;
      this._gatewayMac = value.gatewayMac;
      this._ipAddress = value.ipAddress;
      this._mac = value.mac;
    }
  }

  // gateway - computed: true, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // gateway_mac - computed: true, optional: true, required: false
  private _gatewayMac?: string; 
  public get gatewayMac() {
    return this.getStringAttribute('gateway_mac');
  }
  public set gatewayMac(value: string) {
    this._gatewayMac = value;
  }
  public resetGatewayMac() {
    this._gatewayMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayMacInput() {
    return this._gatewayMac;
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // mac - computed: true, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }
}
export interface DataFortisaseEndpointsDetailsConnDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#active DataFortisaseEndpointsDetails#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#collapsed DataFortisaseEndpointsDetails#collapsed}
  */
  readonly collapsed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#connected_icon DataFortisaseEndpointsDetails#connected_icon}
  */
  readonly connectedIcon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#connected_icon_color DataFortisaseEndpointsDetails#connected_icon_color}
  */
  readonly connectedIconColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#connections DataFortisaseEndpointsDetails#connections}
  */
  readonly connections?: DataFortisaseEndpointsDetailsConnDetailsConnections;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#icon DataFortisaseEndpointsDetails#icon}
  */
  readonly icon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#intf_name DataFortisaseEndpointsDetails#intf_name}
  */
  readonly intfName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#ssid DataFortisaseEndpointsDetails#ssid}
  */
  readonly ssid?: string;
}

export function dataFortisaseEndpointsDetailsConnDetailsToTerraform(struct?: DataFortisaseEndpointsDetailsConnDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    collapsed: cdktf.booleanToTerraform(struct!.collapsed),
    connected_icon: cdktf.stringToTerraform(struct!.connectedIcon),
    connected_icon_color: cdktf.stringToTerraform(struct!.connectedIconColor),
    connections: dataFortisaseEndpointsDetailsConnDetailsConnectionsToTerraform(struct!.connections),
    icon: cdktf.stringToTerraform(struct!.icon),
    intf_name: cdktf.stringToTerraform(struct!.intfName),
    ssid: cdktf.stringToTerraform(struct!.ssid),
  }
}


export function dataFortisaseEndpointsDetailsConnDetailsToHclTerraform(struct?: DataFortisaseEndpointsDetailsConnDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    collapsed: {
      value: cdktf.booleanToHclTerraform(struct!.collapsed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    connected_icon: {
      value: cdktf.stringToHclTerraform(struct!.connectedIcon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connected_icon_color: {
      value: cdktf.stringToHclTerraform(struct!.connectedIconColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connections: {
      value: dataFortisaseEndpointsDetailsConnDetailsConnectionsToHclTerraform(struct!.connections),
      isBlock: true,
      type: "struct",
      storageClassType: "DataFortisaseEndpointsDetailsConnDetailsConnections",
    },
    icon: {
      value: cdktf.stringToHclTerraform(struct!.icon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    intf_name: {
      value: cdktf.stringToHclTerraform(struct!.intfName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssid: {
      value: cdktf.stringToHclTerraform(struct!.ssid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseEndpointsDetailsConnDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortisaseEndpointsDetailsConnDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._collapsed !== undefined) {
      hasAnyValues = true;
      internalValueResult.collapsed = this._collapsed;
    }
    if (this._connectedIcon !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectedIcon = this._connectedIcon;
    }
    if (this._connectedIconColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectedIconColor = this._connectedIconColor;
    }
    if (this._connections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connections = this._connections?.internalValue;
    }
    if (this._icon !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon;
    }
    if (this._intfName !== undefined) {
      hasAnyValues = true;
      internalValueResult.intfName = this._intfName;
    }
    if (this._ssid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssid = this._ssid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseEndpointsDetailsConnDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active = undefined;
      this._collapsed = undefined;
      this._connectedIcon = undefined;
      this._connectedIconColor = undefined;
      this._connections.internalValue = undefined;
      this._icon = undefined;
      this._intfName = undefined;
      this._ssid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._active = value.active;
      this._collapsed = value.collapsed;
      this._connectedIcon = value.connectedIcon;
      this._connectedIconColor = value.connectedIconColor;
      this._connections.internalValue = value.connections;
      this._icon = value.icon;
      this._intfName = value.intfName;
      this._ssid = value.ssid;
    }
  }

  // active - computed: true, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // collapsed - computed: true, optional: true, required: false
  private _collapsed?: boolean | cdktf.IResolvable; 
  public get collapsed() {
    return this.getBooleanAttribute('collapsed');
  }
  public set collapsed(value: boolean | cdktf.IResolvable) {
    this._collapsed = value;
  }
  public resetCollapsed() {
    this._collapsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collapsedInput() {
    return this._collapsed;
  }

  // connected_icon - computed: true, optional: true, required: false
  private _connectedIcon?: string; 
  public get connectedIcon() {
    return this.getStringAttribute('connected_icon');
  }
  public set connectedIcon(value: string) {
    this._connectedIcon = value;
  }
  public resetConnectedIcon() {
    this._connectedIcon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectedIconInput() {
    return this._connectedIcon;
  }

  // connected_icon_color - computed: true, optional: true, required: false
  private _connectedIconColor?: string; 
  public get connectedIconColor() {
    return this.getStringAttribute('connected_icon_color');
  }
  public set connectedIconColor(value: string) {
    this._connectedIconColor = value;
  }
  public resetConnectedIconColor() {
    this._connectedIconColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectedIconColorInput() {
    return this._connectedIconColor;
  }

  // connections - computed: true, optional: true, required: false
  private _connections = new DataFortisaseEndpointsDetailsConnDetailsConnectionsOutputReference(this, "connections");
  public get connections() {
    return this._connections;
  }
  public putConnections(value: DataFortisaseEndpointsDetailsConnDetailsConnections) {
    this._connections.internalValue = value;
  }
  public resetConnections() {
    this._connections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionsInput() {
    return this._connections.internalValue;
  }

  // icon - computed: true, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // intf_name - computed: true, optional: true, required: false
  private _intfName?: string; 
  public get intfName() {
    return this.getStringAttribute('intf_name');
  }
  public set intfName(value: string) {
    this._intfName = value;
  }
  public resetIntfName() {
    this._intfName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intfNameInput() {
    return this._intfName;
  }

  // ssid - computed: true, optional: true, required: false
  private _ssid?: string; 
  public get ssid() {
    return this.getStringAttribute('ssid');
  }
  public set ssid(value: string) {
    this._ssid = value;
  }
  public resetSsid() {
    this._ssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidInput() {
    return this._ssid;
  }
}

export class DataFortisaseEndpointsDetailsConnDetailsList extends cdktf.ComplexList {
  public internalValue? : DataFortisaseEndpointsDetailsConnDetails[] | cdktf.IResolvable

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
  public get(index: number): DataFortisaseEndpointsDetailsConnDetailsOutputReference {
    return new DataFortisaseEndpointsDetailsConnDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortisaseEndpointsDetailsForensics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#completion_time DataFortisaseEndpointsDetails#completion_time}
  */
  readonly completionTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#fsr_task_id DataFortisaseEndpointsDetails#fsr_task_id}
  */
  readonly fsrTaskId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#guid DataFortisaseEndpointsDetails#guid}
  */
  readonly guid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#report_url DataFortisaseEndpointsDetails#report_url}
  */
  readonly reportUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#status DataFortisaseEndpointsDetails#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#update_time DataFortisaseEndpointsDetails#update_time}
  */
  readonly updateTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#verdict DataFortisaseEndpointsDetails#verdict}
  */
  readonly verdict?: string;
}

export function dataFortisaseEndpointsDetailsForensicsToTerraform(struct?: DataFortisaseEndpointsDetailsForensics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    completion_time: cdktf.stringToTerraform(struct!.completionTime),
    fsr_task_id: cdktf.numberToTerraform(struct!.fsrTaskId),
    guid: cdktf.stringToTerraform(struct!.guid),
    report_url: cdktf.stringToTerraform(struct!.reportUrl),
    status: cdktf.stringToTerraform(struct!.status),
    update_time: cdktf.stringToTerraform(struct!.updateTime),
    verdict: cdktf.stringToTerraform(struct!.verdict),
  }
}


export function dataFortisaseEndpointsDetailsForensicsToHclTerraform(struct?: DataFortisaseEndpointsDetailsForensics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    completion_time: {
      value: cdktf.stringToHclTerraform(struct!.completionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fsr_task_id: {
      value: cdktf.numberToHclTerraform(struct!.fsrTaskId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    guid: {
      value: cdktf.stringToHclTerraform(struct!.guid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    report_url: {
      value: cdktf.stringToHclTerraform(struct!.reportUrl),
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
    update_time: {
      value: cdktf.stringToHclTerraform(struct!.updateTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verdict: {
      value: cdktf.stringToHclTerraform(struct!.verdict),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseEndpointsDetailsForensicsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseEndpointsDetailsForensics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._completionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.completionTime = this._completionTime;
    }
    if (this._fsrTaskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsrTaskId = this._fsrTaskId;
    }
    if (this._guid !== undefined) {
      hasAnyValues = true;
      internalValueResult.guid = this._guid;
    }
    if (this._reportUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportUrl = this._reportUrl;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._updateTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateTime = this._updateTime;
    }
    if (this._verdict !== undefined) {
      hasAnyValues = true;
      internalValueResult.verdict = this._verdict;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseEndpointsDetailsForensics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._completionTime = undefined;
      this._fsrTaskId = undefined;
      this._guid = undefined;
      this._reportUrl = undefined;
      this._status = undefined;
      this._updateTime = undefined;
      this._verdict = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._completionTime = value.completionTime;
      this._fsrTaskId = value.fsrTaskId;
      this._guid = value.guid;
      this._reportUrl = value.reportUrl;
      this._status = value.status;
      this._updateTime = value.updateTime;
      this._verdict = value.verdict;
    }
  }

  // completion_time - computed: true, optional: true, required: false
  private _completionTime?: string; 
  public get completionTime() {
    return this.getStringAttribute('completion_time');
  }
  public set completionTime(value: string) {
    this._completionTime = value;
  }
  public resetCompletionTime() {
    this._completionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get completionTimeInput() {
    return this._completionTime;
  }

  // fsr_task_id - computed: true, optional: true, required: false
  private _fsrTaskId?: number; 
  public get fsrTaskId() {
    return this.getNumberAttribute('fsr_task_id');
  }
  public set fsrTaskId(value: number) {
    this._fsrTaskId = value;
  }
  public resetFsrTaskId() {
    this._fsrTaskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsrTaskIdInput() {
    return this._fsrTaskId;
  }

  // guid - computed: true, optional: true, required: false
  private _guid?: string; 
  public get guid() {
    return this.getStringAttribute('guid');
  }
  public set guid(value: string) {
    this._guid = value;
  }
  public resetGuid() {
    this._guid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guidInput() {
    return this._guid;
  }

  // report_url - computed: true, optional: true, required: false
  private _reportUrl?: string; 
  public get reportUrl() {
    return this.getStringAttribute('report_url');
  }
  public set reportUrl(value: string) {
    this._reportUrl = value;
  }
  public resetReportUrl() {
    this._reportUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportUrlInput() {
    return this._reportUrl;
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

  // update_time - computed: true, optional: true, required: false
  private _updateTime?: string; 
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
  public set updateTime(value: string) {
    this._updateTime = value;
  }
  public resetUpdateTime() {
    this._updateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateTimeInput() {
    return this._updateTime;
  }

  // verdict - computed: true, optional: true, required: false
  private _verdict?: string; 
  public get verdict() {
    return this.getStringAttribute('verdict');
  }
  public set verdict(value: string) {
    this._verdict = value;
  }
  public resetVerdict() {
    this._verdict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verdictInput() {
    return this._verdict;
  }
}
export interface DataFortisaseEndpointsDetailsHardwareDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#cpu DataFortisaseEndpointsDetails#cpu}
  */
  readonly cpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#hdd DataFortisaseEndpointsDetails#hdd}
  */
  readonly hdd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#model DataFortisaseEndpointsDetails#model}
  */
  readonly model?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#ram DataFortisaseEndpointsDetails#ram}
  */
  readonly ram?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#s_n DataFortisaseEndpointsDetails#s_n}
  */
  readonly sN?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#vendor DataFortisaseEndpointsDetails#vendor}
  */
  readonly vendor?: string;
}

export function dataFortisaseEndpointsDetailsHardwareDetailsToTerraform(struct?: DataFortisaseEndpointsDetailsHardwareDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    hdd: cdktf.stringToTerraform(struct!.hdd),
    model: cdktf.stringToTerraform(struct!.model),
    ram: cdktf.stringToTerraform(struct!.ram),
    s_n: cdktf.stringToTerraform(struct!.sN),
    vendor: cdktf.stringToTerraform(struct!.vendor),
  }
}


export function dataFortisaseEndpointsDetailsHardwareDetailsToHclTerraform(struct?: DataFortisaseEndpointsDetailsHardwareDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hdd: {
      value: cdktf.stringToHclTerraform(struct!.hdd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ram: {
      value: cdktf.stringToHclTerraform(struct!.ram),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s_n: {
      value: cdktf.stringToHclTerraform(struct!.sN),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendor: {
      value: cdktf.stringToHclTerraform(struct!.vendor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseEndpointsDetailsHardwareDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseEndpointsDetailsHardwareDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._hdd !== undefined) {
      hasAnyValues = true;
      internalValueResult.hdd = this._hdd;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._ram !== undefined) {
      hasAnyValues = true;
      internalValueResult.ram = this._ram;
    }
    if (this._sN !== undefined) {
      hasAnyValues = true;
      internalValueResult.sN = this._sN;
    }
    if (this._vendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendor = this._vendor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseEndpointsDetailsHardwareDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu = undefined;
      this._hdd = undefined;
      this._model = undefined;
      this._ram = undefined;
      this._sN = undefined;
      this._vendor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu = value.cpu;
      this._hdd = value.hdd;
      this._model = value.model;
      this._ram = value.ram;
      this._sN = value.sN;
      this._vendor = value.vendor;
    }
  }

  // cpu - computed: true, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // hdd - computed: true, optional: true, required: false
  private _hdd?: string; 
  public get hdd() {
    return this.getStringAttribute('hdd');
  }
  public set hdd(value: string) {
    this._hdd = value;
  }
  public resetHdd() {
    this._hdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hddInput() {
    return this._hdd;
  }

  // model - computed: true, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // ram - computed: true, optional: true, required: false
  private _ram?: string; 
  public get ram() {
    return this.getStringAttribute('ram');
  }
  public set ram(value: string) {
    this._ram = value;
  }
  public resetRam() {
    this._ram = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ramInput() {
    return this._ram;
  }

  // s_n - computed: true, optional: true, required: false
  private _sN?: string; 
  public get sN() {
    return this.getStringAttribute('s_n');
  }
  public set sN(value: string) {
    this._sN = value;
  }
  public resetSN() {
    this._sN = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sNInput() {
    return this._sN;
  }

  // vendor - computed: true, optional: true, required: false
  private _vendor?: string; 
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }
}
export interface DataFortisaseEndpointsDetailsTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#id DataFortisaseEndpointsDetails#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#name DataFortisaseEndpointsDetails#name}
  */
  readonly name?: string;
}

export function dataFortisaseEndpointsDetailsTagsToTerraform(struct?: DataFortisaseEndpointsDetailsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataFortisaseEndpointsDetailsTagsToHclTerraform(struct?: DataFortisaseEndpointsDetailsTags | cdktf.IResolvable): any {
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

export class DataFortisaseEndpointsDetailsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortisaseEndpointsDetailsTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseEndpointsDetailsTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: true, optional: true, required: false
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
}

export class DataFortisaseEndpointsDetailsTagsList extends cdktf.ComplexList {
  public internalValue? : DataFortisaseEndpointsDetailsTags[] | cdktf.IResolvable

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
  public get(index: number): DataFortisaseEndpointsDetailsTagsOutputReference {
    return new DataFortisaseEndpointsDetailsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details fortisase_endpoints_details}
*/
export class DataFortisaseEndpointsDetails extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_endpoints_details";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortisaseEndpointsDetails resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortisaseEndpointsDetails to import
  * @param importFromId The id of the existing DataFortisaseEndpointsDetails that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortisaseEndpointsDetails to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_endpoints_details", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_details fortisase_endpoints_details} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortisaseEndpointsDetailsConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortisaseEndpointsDetailsConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_endpoints_details',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alias = config.alias;
    this._avEnabled = config.avEnabled;
    this._avEventsCount = config.avEventsCount;
    this._avHidden = config.avHidden;
    this._avInstalled = config.avInstalled;
    this._avLastCancelledScanDate = config.avLastCancelledScanDate;
    this._avLastCancelledScanType = config.avLastCancelledScanType;
    this._avLastFullScanDate = config.avLastFullScanDate;
    this._avLastScanDate = config.avLastScanDate;
    this._avLastScanType = config.avLastScanType;
    this._avNextScanHour = config.avNextScanHour;
    this._avNextScanMin = config.avNextScanMin;
    this._avNextScanOn = config.avNextScanOn;
    this._avNextScanType = config.avNextScanType;
    this._avNextSchType = config.avNextSchType;
    this._avScanScheduled = config.avScanScheduled;
    this._caps = config.caps;
    this._comparableFctVersion = config.comparableFctVersion;
    this._connDetails.internalValue = config.connDetails;
    this._deploymentState = config.deploymentState;
    this._deploymentStateData = config.deploymentStateData;
    this._deploymentStateTime = config.deploymentStateTime;
    this._deregister = config.deregister;
    this._deviceId = config.deviceId;
    this._distinguishedName = config.distinguishedName;
    this._domainId = config.domainId;
    this._fctSn = config.fctSn;
    this._fctVersion = config.fctVersion;
    this._fgtSn = config.fgtSn;
    this._forensics.internalValue = config.forensics;
    this._forensicsEnabled = config.forensicsEnabled;
    this._forticlientId = config.forticlientId;
    this._fwEnabled = config.fwEnabled;
    this._fwEventsCount = config.fwEventsCount;
    this._fwHidden = config.fwHidden;
    this._fwInstalled = config.fwInstalled;
    this._groupId = config.groupId;
    this._groupName = config.groupName;
    this._groupTag = config.groupTag;
    this._hardwareDetails.internalValue = config.hardwareDetails;
    this._host = config.host;
    this._installationState = config.installationState;
    this._installerName = config.installerName;
    this._ipAddr = config.ipAddr;
    this._ipListName = config.ipListName;
    this._isAvScanning = config.isAvScanning;
    this._isEmsOnline = config.isEmsOnline;
    this._isEmsOnnet = config.isEmsOnnet;
    this._isEmsRegistered = config.isEmsRegistered;
    this._isExcluded = config.isExcluded;
    this._isInstalled = config.isInstalled;
    this._isManaged = config.isManaged;
    this._isMigrating = config.isMigrating;
    this._isQuarantined = config.isQuarantined;
    this._isVulnScanning = config.isVulnScanning;
    this._lastSeen = config.lastSeen;
    this._lastVulnScan = config.lastVulnScan;
    this._macAddr = config.macAddr;
    this._name = config.name;
    this._origGroupId = config.origGroupId;
    this._origGroupName = config.origGroupName;
    this._osServicePack = config.osServicePack;
    this._osVersion = config.osVersion;
    this._profileName = config.profileName;
    this._quarantineAccessCode = config.quarantineAccessCode;
    this._quarantineMessage = config.quarantineMessage;
    this._rsEnabled = config.rsEnabled;
    this._rsHidden = config.rsHidden;
    this._rsInstalled = config.rsInstalled;
    this._runCmd = config.runCmd;
    this._sbEnabled = config.sbEnabled;
    this._sbEventsCount = config.sbEventsCount;
    this._sbHidden = config.sbHidden;
    this._sbInstalled = config.sbInstalled;
    this._scheduledInstallTime = config.scheduledInstallTime;
    this._service = config.service;
    this._ssomaEnabled = config.ssomaEnabled;
    this._ssomaHidden = config.ssomaHidden;
    this._ssomaInstalled = config.ssomaInstalled;
    this._sysEventsCount = config.sysEventsCount;
    this._tags.internalValue = config.tags;
    this._uid = config.uid;
    this._userDomain = config.userDomain;
    this._vpnEnabled = config.vpnEnabled;
    this._vpnHidden = config.vpnHidden;
    this._vpnInstalled = config.vpnInstalled;
    this._vulnEnabled = config.vulnEnabled;
    this._vulnEventsCount = config.vulnEventsCount;
    this._vulnEventsMaxSeverity = config.vulnEventsMaxSeverity;
    this._vulnHidden = config.vulnHidden;
    this._vulnInstalled = config.vulnInstalled;
    this._vulnNextScanOn = config.vulnNextScanOn;
    this._vulnNextSchType = config.vulnNextSchType;
    this._vulnNextScheduled = config.vulnNextScheduled;
    this._vulnNextStartHour = config.vulnNextStartHour;
    this._vulnNextStartMin = config.vulnNextStartMin;
    this._vulnScanStatus = config.vulnScanStatus;
    this._wfEnabled = config.wfEnabled;
    this._wfEventsCount = config.wfEventsCount;
    this._wfHidden = config.wfHidden;
    this._wfInstalled = config.wfInstalled;
    this._ztnaEnabled = config.ztnaEnabled;
    this._ztnaSerial = config.ztnaSerial;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // av_enabled - computed: true, optional: true, required: false
  private _avEnabled?: boolean | cdktf.IResolvable; 
  public get avEnabled() {
    return this.getBooleanAttribute('av_enabled');
  }
  public set avEnabled(value: boolean | cdktf.IResolvable) {
    this._avEnabled = value;
  }
  public resetAvEnabled() {
    this._avEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avEnabledInput() {
    return this._avEnabled;
  }

  // av_events_count - computed: true, optional: true, required: false
  private _avEventsCount?: number; 
  public get avEventsCount() {
    return this.getNumberAttribute('av_events_count');
  }
  public set avEventsCount(value: number) {
    this._avEventsCount = value;
  }
  public resetAvEventsCount() {
    this._avEventsCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avEventsCountInput() {
    return this._avEventsCount;
  }

  // av_hidden - computed: true, optional: true, required: false
  private _avHidden?: boolean | cdktf.IResolvable; 
  public get avHidden() {
    return this.getBooleanAttribute('av_hidden');
  }
  public set avHidden(value: boolean | cdktf.IResolvable) {
    this._avHidden = value;
  }
  public resetAvHidden() {
    this._avHidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avHiddenInput() {
    return this._avHidden;
  }

  // av_installed - computed: true, optional: true, required: false
  private _avInstalled?: boolean | cdktf.IResolvable; 
  public get avInstalled() {
    return this.getBooleanAttribute('av_installed');
  }
  public set avInstalled(value: boolean | cdktf.IResolvable) {
    this._avInstalled = value;
  }
  public resetAvInstalled() {
    this._avInstalled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avInstalledInput() {
    return this._avInstalled;
  }

  // av_last_cancelled_scan_date - computed: true, optional: true, required: false
  private _avLastCancelledScanDate?: string; 
  public get avLastCancelledScanDate() {
    return this.getStringAttribute('av_last_cancelled_scan_date');
  }
  public set avLastCancelledScanDate(value: string) {
    this._avLastCancelledScanDate = value;
  }
  public resetAvLastCancelledScanDate() {
    this._avLastCancelledScanDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avLastCancelledScanDateInput() {
    return this._avLastCancelledScanDate;
  }

  // av_last_cancelled_scan_type - computed: true, optional: true, required: false
  private _avLastCancelledScanType?: number; 
  public get avLastCancelledScanType() {
    return this.getNumberAttribute('av_last_cancelled_scan_type');
  }
  public set avLastCancelledScanType(value: number) {
    this._avLastCancelledScanType = value;
  }
  public resetAvLastCancelledScanType() {
    this._avLastCancelledScanType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avLastCancelledScanTypeInput() {
    return this._avLastCancelledScanType;
  }

  // av_last_full_scan_date - computed: true, optional: true, required: false
  private _avLastFullScanDate?: string; 
  public get avLastFullScanDate() {
    return this.getStringAttribute('av_last_full_scan_date');
  }
  public set avLastFullScanDate(value: string) {
    this._avLastFullScanDate = value;
  }
  public resetAvLastFullScanDate() {
    this._avLastFullScanDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avLastFullScanDateInput() {
    return this._avLastFullScanDate;
  }

  // av_last_scan_date - computed: true, optional: true, required: false
  private _avLastScanDate?: string; 
  public get avLastScanDate() {
    return this.getStringAttribute('av_last_scan_date');
  }
  public set avLastScanDate(value: string) {
    this._avLastScanDate = value;
  }
  public resetAvLastScanDate() {
    this._avLastScanDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avLastScanDateInput() {
    return this._avLastScanDate;
  }

  // av_last_scan_type - computed: true, optional: true, required: false
  private _avLastScanType?: number; 
  public get avLastScanType() {
    return this.getNumberAttribute('av_last_scan_type');
  }
  public set avLastScanType(value: number) {
    this._avLastScanType = value;
  }
  public resetAvLastScanType() {
    this._avLastScanType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avLastScanTypeInput() {
    return this._avLastScanType;
  }

  // av_next_scan_hour - computed: true, optional: true, required: false
  private _avNextScanHour?: number; 
  public get avNextScanHour() {
    return this.getNumberAttribute('av_next_scan_hour');
  }
  public set avNextScanHour(value: number) {
    this._avNextScanHour = value;
  }
  public resetAvNextScanHour() {
    this._avNextScanHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avNextScanHourInput() {
    return this._avNextScanHour;
  }

  // av_next_scan_min - computed: true, optional: true, required: false
  private _avNextScanMin?: number; 
  public get avNextScanMin() {
    return this.getNumberAttribute('av_next_scan_min');
  }
  public set avNextScanMin(value: number) {
    this._avNextScanMin = value;
  }
  public resetAvNextScanMin() {
    this._avNextScanMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avNextScanMinInput() {
    return this._avNextScanMin;
  }

  // av_next_scan_on - computed: true, optional: true, required: false
  private _avNextScanOn?: number; 
  public get avNextScanOn() {
    return this.getNumberAttribute('av_next_scan_on');
  }
  public set avNextScanOn(value: number) {
    this._avNextScanOn = value;
  }
  public resetAvNextScanOn() {
    this._avNextScanOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avNextScanOnInput() {
    return this._avNextScanOn;
  }

  // av_next_scan_type - computed: true, optional: true, required: false
  private _avNextScanType?: number; 
  public get avNextScanType() {
    return this.getNumberAttribute('av_next_scan_type');
  }
  public set avNextScanType(value: number) {
    this._avNextScanType = value;
  }
  public resetAvNextScanType() {
    this._avNextScanType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avNextScanTypeInput() {
    return this._avNextScanType;
  }

  // av_next_sch_type - computed: true, optional: true, required: false
  private _avNextSchType?: number; 
  public get avNextSchType() {
    return this.getNumberAttribute('av_next_sch_type');
  }
  public set avNextSchType(value: number) {
    this._avNextSchType = value;
  }
  public resetAvNextSchType() {
    this._avNextSchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avNextSchTypeInput() {
    return this._avNextSchType;
  }

  // av_scan_scheduled - computed: true, optional: true, required: false
  private _avScanScheduled?: boolean | cdktf.IResolvable; 
  public get avScanScheduled() {
    return this.getBooleanAttribute('av_scan_scheduled');
  }
  public set avScanScheduled(value: boolean | cdktf.IResolvable) {
    this._avScanScheduled = value;
  }
  public resetAvScanScheduled() {
    this._avScanScheduled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avScanScheduledInput() {
    return this._avScanScheduled;
  }

  // caps - computed: true, optional: true, required: false
  private _caps?: number; 
  public get caps() {
    return this.getNumberAttribute('caps');
  }
  public set caps(value: number) {
    this._caps = value;
  }
  public resetCaps() {
    this._caps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capsInput() {
    return this._caps;
  }

  // comparable_fct_version - computed: true, optional: true, required: false
  private _comparableFctVersion?: number; 
  public get comparableFctVersion() {
    return this.getNumberAttribute('comparable_fct_version');
  }
  public set comparableFctVersion(value: number) {
    this._comparableFctVersion = value;
  }
  public resetComparableFctVersion() {
    this._comparableFctVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparableFctVersionInput() {
    return this._comparableFctVersion;
  }

  // conn_details - computed: true, optional: true, required: false
  private _connDetails = new DataFortisaseEndpointsDetailsConnDetailsList(this, "conn_details", false);
  public get connDetails() {
    return this._connDetails;
  }
  public putConnDetails(value: DataFortisaseEndpointsDetailsConnDetails[] | cdktf.IResolvable) {
    this._connDetails.internalValue = value;
  }
  public resetConnDetails() {
    this._connDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connDetailsInput() {
    return this._connDetails.internalValue;
  }

  // deployment_state - computed: true, optional: true, required: false
  private _deploymentState?: number; 
  public get deploymentState() {
    return this.getNumberAttribute('deployment_state');
  }
  public set deploymentState(value: number) {
    this._deploymentState = value;
  }
  public resetDeploymentState() {
    this._deploymentState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentStateInput() {
    return this._deploymentState;
  }

  // deployment_state_data - computed: true, optional: true, required: false
  private _deploymentStateData?: string; 
  public get deploymentStateData() {
    return this.getStringAttribute('deployment_state_data');
  }
  public set deploymentStateData(value: string) {
    this._deploymentStateData = value;
  }
  public resetDeploymentStateData() {
    this._deploymentStateData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentStateDataInput() {
    return this._deploymentStateData;
  }

  // deployment_state_time - computed: true, optional: true, required: false
  private _deploymentStateTime?: string; 
  public get deploymentStateTime() {
    return this.getStringAttribute('deployment_state_time');
  }
  public set deploymentStateTime(value: string) {
    this._deploymentStateTime = value;
  }
  public resetDeploymentStateTime() {
    this._deploymentStateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentStateTimeInput() {
    return this._deploymentStateTime;
  }

  // deregister - computed: true, optional: true, required: false
  private _deregister?: number; 
  public get deregister() {
    return this.getNumberAttribute('deregister');
  }
  public set deregister(value: number) {
    this._deregister = value;
  }
  public resetDeregister() {
    this._deregister = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deregisterInput() {
    return this._deregister;
  }

  // device_id - computed: false, optional: false, required: true
  private _deviceId?: number; 
  public get deviceId() {
    return this.getNumberAttribute('device_id');
  }
  public set deviceId(value: number) {
    this._deviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // distinguished_name - computed: true, optional: true, required: false
  private _distinguishedName?: string; 
  public get distinguishedName() {
    return this.getStringAttribute('distinguished_name');
  }
  public set distinguishedName(value: string) {
    this._distinguishedName = value;
  }
  public resetDistinguishedName() {
    this._distinguishedName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distinguishedNameInput() {
    return this._distinguishedName;
  }

  // domain_id - computed: true, optional: true, required: false
  private _domainId?: number; 
  public get domainId() {
    return this.getNumberAttribute('domain_id');
  }
  public set domainId(value: number) {
    this._domainId = value;
  }
  public resetDomainId() {
    this._domainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // fct_sn - computed: true, optional: true, required: false
  private _fctSn?: string; 
  public get fctSn() {
    return this.getStringAttribute('fct_sn');
  }
  public set fctSn(value: string) {
    this._fctSn = value;
  }
  public resetFctSn() {
    this._fctSn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fctSnInput() {
    return this._fctSn;
  }

  // fct_version - computed: true, optional: true, required: false
  private _fctVersion?: string; 
  public get fctVersion() {
    return this.getStringAttribute('fct_version');
  }
  public set fctVersion(value: string) {
    this._fctVersion = value;
  }
  public resetFctVersion() {
    this._fctVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fctVersionInput() {
    return this._fctVersion;
  }

  // fgt_sn - computed: true, optional: true, required: false
  private _fgtSn?: string; 
  public get fgtSn() {
    return this.getStringAttribute('fgt_sn');
  }
  public set fgtSn(value: string) {
    this._fgtSn = value;
  }
  public resetFgtSn() {
    this._fgtSn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgtSnInput() {
    return this._fgtSn;
  }

  // forensics - computed: true, optional: true, required: false
  private _forensics = new DataFortisaseEndpointsDetailsForensicsOutputReference(this, "forensics");
  public get forensics() {
    return this._forensics;
  }
  public putForensics(value: DataFortisaseEndpointsDetailsForensics) {
    this._forensics.internalValue = value;
  }
  public resetForensics() {
    this._forensics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forensicsInput() {
    return this._forensics.internalValue;
  }

  // forensics_enabled - computed: true, optional: true, required: false
  private _forensicsEnabled?: boolean | cdktf.IResolvable; 
  public get forensicsEnabled() {
    return this.getBooleanAttribute('forensics_enabled');
  }
  public set forensicsEnabled(value: boolean | cdktf.IResolvable) {
    this._forensicsEnabled = value;
  }
  public resetForensicsEnabled() {
    this._forensicsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forensicsEnabledInput() {
    return this._forensicsEnabled;
  }

  // forticlient_id - computed: true, optional: true, required: false
  private _forticlientId?: number; 
  public get forticlientId() {
    return this.getNumberAttribute('forticlient_id');
  }
  public set forticlientId(value: number) {
    this._forticlientId = value;
  }
  public resetForticlientId() {
    this._forticlientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientIdInput() {
    return this._forticlientId;
  }

  // fw_enabled - computed: true, optional: true, required: false
  private _fwEnabled?: boolean | cdktf.IResolvable; 
  public get fwEnabled() {
    return this.getBooleanAttribute('fw_enabled');
  }
  public set fwEnabled(value: boolean | cdktf.IResolvable) {
    this._fwEnabled = value;
  }
  public resetFwEnabled() {
    this._fwEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwEnabledInput() {
    return this._fwEnabled;
  }

  // fw_events_count - computed: true, optional: true, required: false
  private _fwEventsCount?: number; 
  public get fwEventsCount() {
    return this.getNumberAttribute('fw_events_count');
  }
  public set fwEventsCount(value: number) {
    this._fwEventsCount = value;
  }
  public resetFwEventsCount() {
    this._fwEventsCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwEventsCountInput() {
    return this._fwEventsCount;
  }

  // fw_hidden - computed: true, optional: true, required: false
  private _fwHidden?: boolean | cdktf.IResolvable; 
  public get fwHidden() {
    return this.getBooleanAttribute('fw_hidden');
  }
  public set fwHidden(value: boolean | cdktf.IResolvable) {
    this._fwHidden = value;
  }
  public resetFwHidden() {
    this._fwHidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwHiddenInput() {
    return this._fwHidden;
  }

  // fw_installed - computed: true, optional: true, required: false
  private _fwInstalled?: boolean | cdktf.IResolvable; 
  public get fwInstalled() {
    return this.getBooleanAttribute('fw_installed');
  }
  public set fwInstalled(value: boolean | cdktf.IResolvable) {
    this._fwInstalled = value;
  }
  public resetFwInstalled() {
    this._fwInstalled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwInstalledInput() {
    return this._fwInstalled;
  }

  // group_id - computed: true, optional: true, required: false
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // group_name - computed: true, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // group_tag - computed: true, optional: true, required: false
  private _groupTag?: string; 
  public get groupTag() {
    return this.getStringAttribute('group_tag');
  }
  public set groupTag(value: string) {
    this._groupTag = value;
  }
  public resetGroupTag() {
    this._groupTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupTagInput() {
    return this._groupTag;
  }

  // hardware_details - computed: true, optional: true, required: false
  private _hardwareDetails = new DataFortisaseEndpointsDetailsHardwareDetailsOutputReference(this, "hardware_details");
  public get hardwareDetails() {
    return this._hardwareDetails;
  }
  public putHardwareDetails(value: DataFortisaseEndpointsDetailsHardwareDetails) {
    this._hardwareDetails.internalValue = value;
  }
  public resetHardwareDetails() {
    this._hardwareDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareDetailsInput() {
    return this._hardwareDetails.internalValue;
  }

  // host - computed: true, optional: true, required: false
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

  // installation_state - computed: true, optional: true, required: false
  private _installationState?: number; 
  public get installationState() {
    return this.getNumberAttribute('installation_state');
  }
  public set installationState(value: number) {
    this._installationState = value;
  }
  public resetInstallationState() {
    this._installationState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installationStateInput() {
    return this._installationState;
  }

  // installer_name - computed: true, optional: true, required: false
  private _installerName?: string; 
  public get installerName() {
    return this.getStringAttribute('installer_name');
  }
  public set installerName(value: string) {
    this._installerName = value;
  }
  public resetInstallerName() {
    this._installerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installerNameInput() {
    return this._installerName;
  }

  // ip_addr - computed: true, optional: true, required: false
  private _ipAddr?: string; 
  public get ipAddr() {
    return this.getStringAttribute('ip_addr');
  }
  public set ipAddr(value: string) {
    this._ipAddr = value;
  }
  public resetIpAddr() {
    this._ipAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr;
  }

  // ip_list_name - computed: true, optional: true, required: false
  private _ipListName?: string; 
  public get ipListName() {
    return this.getStringAttribute('ip_list_name');
  }
  public set ipListName(value: string) {
    this._ipListName = value;
  }
  public resetIpListName() {
    this._ipListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListNameInput() {
    return this._ipListName;
  }

  // is_av_scanning - computed: true, optional: true, required: false
  private _isAvScanning?: boolean | cdktf.IResolvable; 
  public get isAvScanning() {
    return this.getBooleanAttribute('is_av_scanning');
  }
  public set isAvScanning(value: boolean | cdktf.IResolvable) {
    this._isAvScanning = value;
  }
  public resetIsAvScanning() {
    this._isAvScanning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAvScanningInput() {
    return this._isAvScanning;
  }

  // is_ems_online - computed: true, optional: true, required: false
  private _isEmsOnline?: boolean | cdktf.IResolvable; 
  public get isEmsOnline() {
    return this.getBooleanAttribute('is_ems_online');
  }
  public set isEmsOnline(value: boolean | cdktf.IResolvable) {
    this._isEmsOnline = value;
  }
  public resetIsEmsOnline() {
    this._isEmsOnline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEmsOnlineInput() {
    return this._isEmsOnline;
  }

  // is_ems_onnet - computed: true, optional: true, required: false
  private _isEmsOnnet?: boolean | cdktf.IResolvable; 
  public get isEmsOnnet() {
    return this.getBooleanAttribute('is_ems_onnet');
  }
  public set isEmsOnnet(value: boolean | cdktf.IResolvable) {
    this._isEmsOnnet = value;
  }
  public resetIsEmsOnnet() {
    this._isEmsOnnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEmsOnnetInput() {
    return this._isEmsOnnet;
  }

  // is_ems_registered - computed: true, optional: true, required: false
  private _isEmsRegistered?: boolean | cdktf.IResolvable; 
  public get isEmsRegistered() {
    return this.getBooleanAttribute('is_ems_registered');
  }
  public set isEmsRegistered(value: boolean | cdktf.IResolvable) {
    this._isEmsRegistered = value;
  }
  public resetIsEmsRegistered() {
    this._isEmsRegistered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEmsRegisteredInput() {
    return this._isEmsRegistered;
  }

  // is_excluded - computed: true, optional: true, required: false
  private _isExcluded?: boolean | cdktf.IResolvable; 
  public get isExcluded() {
    return this.getBooleanAttribute('is_excluded');
  }
  public set isExcluded(value: boolean | cdktf.IResolvable) {
    this._isExcluded = value;
  }
  public resetIsExcluded() {
    this._isExcluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isExcludedInput() {
    return this._isExcluded;
  }

  // is_installed - computed: true, optional: true, required: false
  private _isInstalled?: boolean | cdktf.IResolvable; 
  public get isInstalled() {
    return this.getBooleanAttribute('is_installed');
  }
  public set isInstalled(value: boolean | cdktf.IResolvable) {
    this._isInstalled = value;
  }
  public resetIsInstalled() {
    this._isInstalled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInstalledInput() {
    return this._isInstalled;
  }

  // is_managed - computed: true, optional: true, required: false
  private _isManaged?: boolean | cdktf.IResolvable; 
  public get isManaged() {
    return this.getBooleanAttribute('is_managed');
  }
  public set isManaged(value: boolean | cdktf.IResolvable) {
    this._isManaged = value;
  }
  public resetIsManaged() {
    this._isManaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isManagedInput() {
    return this._isManaged;
  }

  // is_migrating - computed: true, optional: true, required: false
  private _isMigrating?: boolean | cdktf.IResolvable; 
  public get isMigrating() {
    return this.getBooleanAttribute('is_migrating');
  }
  public set isMigrating(value: boolean | cdktf.IResolvable) {
    this._isMigrating = value;
  }
  public resetIsMigrating() {
    this._isMigrating = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMigratingInput() {
    return this._isMigrating;
  }

  // is_quarantined - computed: true, optional: true, required: false
  private _isQuarantined?: boolean | cdktf.IResolvable; 
  public get isQuarantined() {
    return this.getBooleanAttribute('is_quarantined');
  }
  public set isQuarantined(value: boolean | cdktf.IResolvable) {
    this._isQuarantined = value;
  }
  public resetIsQuarantined() {
    this._isQuarantined = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isQuarantinedInput() {
    return this._isQuarantined;
  }

  // is_vuln_scanning - computed: true, optional: true, required: false
  private _isVulnScanning?: boolean | cdktf.IResolvable; 
  public get isVulnScanning() {
    return this.getBooleanAttribute('is_vuln_scanning');
  }
  public set isVulnScanning(value: boolean | cdktf.IResolvable) {
    this._isVulnScanning = value;
  }
  public resetIsVulnScanning() {
    this._isVulnScanning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isVulnScanningInput() {
    return this._isVulnScanning;
  }

  // last_seen - computed: true, optional: true, required: false
  private _lastSeen?: number; 
  public get lastSeen() {
    return this.getNumberAttribute('last_seen');
  }
  public set lastSeen(value: number) {
    this._lastSeen = value;
  }
  public resetLastSeen() {
    this._lastSeen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastSeenInput() {
    return this._lastSeen;
  }

  // last_vuln_scan - computed: true, optional: true, required: false
  private _lastVulnScan?: number; 
  public get lastVulnScan() {
    return this.getNumberAttribute('last_vuln_scan');
  }
  public set lastVulnScan(value: number) {
    this._lastVulnScan = value;
  }
  public resetLastVulnScan() {
    this._lastVulnScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastVulnScanInput() {
    return this._lastVulnScan;
  }

  // mac_addr - computed: true, optional: true, required: false
  private _macAddr?: string; 
  public get macAddr() {
    return this.getStringAttribute('mac_addr');
  }
  public set macAddr(value: string) {
    this._macAddr = value;
  }
  public resetMacAddr() {
    this._macAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddrInput() {
    return this._macAddr;
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

  // orig_group_id - computed: true, optional: true, required: false
  private _origGroupId?: number; 
  public get origGroupId() {
    return this.getNumberAttribute('orig_group_id');
  }
  public set origGroupId(value: number) {
    this._origGroupId = value;
  }
  public resetOrigGroupId() {
    this._origGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get origGroupIdInput() {
    return this._origGroupId;
  }

  // orig_group_name - computed: true, optional: true, required: false
  private _origGroupName?: string; 
  public get origGroupName() {
    return this.getStringAttribute('orig_group_name');
  }
  public set origGroupName(value: string) {
    this._origGroupName = value;
  }
  public resetOrigGroupName() {
    this._origGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get origGroupNameInput() {
    return this._origGroupName;
  }

  // os_service_pack - computed: true, optional: true, required: false
  private _osServicePack?: string; 
  public get osServicePack() {
    return this.getStringAttribute('os_service_pack');
  }
  public set osServicePack(value: string) {
    this._osServicePack = value;
  }
  public resetOsServicePack() {
    this._osServicePack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osServicePackInput() {
    return this._osServicePack;
  }

  // os_version - computed: true, optional: true, required: false
  private _osVersion?: string; 
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }
  public set osVersion(value: string) {
    this._osVersion = value;
  }
  public resetOsVersion() {
    this._osVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osVersionInput() {
    return this._osVersion;
  }

  // profile_name - computed: true, optional: true, required: false
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  public resetProfileName() {
    this._profileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
  }

  // quarantine_access_code - computed: true, optional: true, required: false
  private _quarantineAccessCode?: string; 
  public get quarantineAccessCode() {
    return this.getStringAttribute('quarantine_access_code');
  }
  public set quarantineAccessCode(value: string) {
    this._quarantineAccessCode = value;
  }
  public resetQuarantineAccessCode() {
    this._quarantineAccessCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineAccessCodeInput() {
    return this._quarantineAccessCode;
  }

  // quarantine_message - computed: true, optional: true, required: false
  private _quarantineMessage?: string; 
  public get quarantineMessage() {
    return this.getStringAttribute('quarantine_message');
  }
  public set quarantineMessage(value: string) {
    this._quarantineMessage = value;
  }
  public resetQuarantineMessage() {
    this._quarantineMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineMessageInput() {
    return this._quarantineMessage;
  }

  // rs_enabled - computed: true, optional: true, required: false
  private _rsEnabled?: boolean | cdktf.IResolvable; 
  public get rsEnabled() {
    return this.getBooleanAttribute('rs_enabled');
  }
  public set rsEnabled(value: boolean | cdktf.IResolvable) {
    this._rsEnabled = value;
  }
  public resetRsEnabled() {
    this._rsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsEnabledInput() {
    return this._rsEnabled;
  }

  // rs_hidden - computed: true, optional: true, required: false
  private _rsHidden?: boolean | cdktf.IResolvable; 
  public get rsHidden() {
    return this.getBooleanAttribute('rs_hidden');
  }
  public set rsHidden(value: boolean | cdktf.IResolvable) {
    this._rsHidden = value;
  }
  public resetRsHidden() {
    this._rsHidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsHiddenInput() {
    return this._rsHidden;
  }

  // rs_installed - computed: true, optional: true, required: false
  private _rsInstalled?: boolean | cdktf.IResolvable; 
  public get rsInstalled() {
    return this.getBooleanAttribute('rs_installed');
  }
  public set rsInstalled(value: boolean | cdktf.IResolvable) {
    this._rsInstalled = value;
  }
  public resetRsInstalled() {
    this._rsInstalled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsInstalledInput() {
    return this._rsInstalled;
  }

  // run_cmd - computed: true, optional: true, required: false
  private _runCmd?: number; 
  public get runCmd() {
    return this.getNumberAttribute('run_cmd');
  }
  public set runCmd(value: number) {
    this._runCmd = value;
  }
  public resetRunCmd() {
    this._runCmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runCmdInput() {
    return this._runCmd;
  }

  // sb_enabled - computed: true, optional: true, required: false
  private _sbEnabled?: boolean | cdktf.IResolvable; 
  public get sbEnabled() {
    return this.getBooleanAttribute('sb_enabled');
  }
  public set sbEnabled(value: boolean | cdktf.IResolvable) {
    this._sbEnabled = value;
  }
  public resetSbEnabled() {
    this._sbEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sbEnabledInput() {
    return this._sbEnabled;
  }

  // sb_events_count - computed: true, optional: true, required: false
  private _sbEventsCount?: number; 
  public get sbEventsCount() {
    return this.getNumberAttribute('sb_events_count');
  }
  public set sbEventsCount(value: number) {
    this._sbEventsCount = value;
  }
  public resetSbEventsCount() {
    this._sbEventsCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sbEventsCountInput() {
    return this._sbEventsCount;
  }

  // sb_hidden - computed: true, optional: true, required: false
  private _sbHidden?: boolean | cdktf.IResolvable; 
  public get sbHidden() {
    return this.getBooleanAttribute('sb_hidden');
  }
  public set sbHidden(value: boolean | cdktf.IResolvable) {
    this._sbHidden = value;
  }
  public resetSbHidden() {
    this._sbHidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sbHiddenInput() {
    return this._sbHidden;
  }

  // sb_installed - computed: true, optional: true, required: false
  private _sbInstalled?: boolean | cdktf.IResolvable; 
  public get sbInstalled() {
    return this.getBooleanAttribute('sb_installed');
  }
  public set sbInstalled(value: boolean | cdktf.IResolvable) {
    this._sbInstalled = value;
  }
  public resetSbInstalled() {
    this._sbInstalled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sbInstalledInput() {
    return this._sbInstalled;
  }

  // scheduled_install_time - computed: true, optional: true, required: false
  private _scheduledInstallTime?: string; 
  public get scheduledInstallTime() {
    return this.getStringAttribute('scheduled_install_time');
  }
  public set scheduledInstallTime(value: string) {
    this._scheduledInstallTime = value;
  }
  public resetScheduledInstallTime() {
    this._scheduledInstallTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledInstallTimeInput() {
    return this._scheduledInstallTime;
  }

  // service - computed: true, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // ssoma_enabled - computed: true, optional: true, required: false
  private _ssomaEnabled?: boolean | cdktf.IResolvable; 
  public get ssomaEnabled() {
    return this.getBooleanAttribute('ssoma_enabled');
  }
  public set ssomaEnabled(value: boolean | cdktf.IResolvable) {
    this._ssomaEnabled = value;
  }
  public resetSsomaEnabled() {
    this._ssomaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssomaEnabledInput() {
    return this._ssomaEnabled;
  }

  // ssoma_hidden - computed: true, optional: true, required: false
  private _ssomaHidden?: boolean | cdktf.IResolvable; 
  public get ssomaHidden() {
    return this.getBooleanAttribute('ssoma_hidden');
  }
  public set ssomaHidden(value: boolean | cdktf.IResolvable) {
    this._ssomaHidden = value;
  }
  public resetSsomaHidden() {
    this._ssomaHidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssomaHiddenInput() {
    return this._ssomaHidden;
  }

  // ssoma_installed - computed: true, optional: true, required: false
  private _ssomaInstalled?: boolean | cdktf.IResolvable; 
  public get ssomaInstalled() {
    return this.getBooleanAttribute('ssoma_installed');
  }
  public set ssomaInstalled(value: boolean | cdktf.IResolvable) {
    this._ssomaInstalled = value;
  }
  public resetSsomaInstalled() {
    this._ssomaInstalled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssomaInstalledInput() {
    return this._ssomaInstalled;
  }

  // sys_events_count - computed: true, optional: true, required: false
  private _sysEventsCount?: number; 
  public get sysEventsCount() {
    return this.getNumberAttribute('sys_events_count');
  }
  public set sysEventsCount(value: number) {
    this._sysEventsCount = value;
  }
  public resetSysEventsCount() {
    this._sysEventsCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysEventsCountInput() {
    return this._sysEventsCount;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new DataFortisaseEndpointsDetailsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataFortisaseEndpointsDetailsTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // uid - computed: true, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // user_domain - computed: true, optional: true, required: false
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

  // vpn_enabled - computed: true, optional: true, required: false
  private _vpnEnabled?: boolean | cdktf.IResolvable; 
  public get vpnEnabled() {
    return this.getBooleanAttribute('vpn_enabled');
  }
  public set vpnEnabled(value: boolean | cdktf.IResolvable) {
    this._vpnEnabled = value;
  }
  public resetVpnEnabled() {
    this._vpnEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnEnabledInput() {
    return this._vpnEnabled;
  }

  // vpn_hidden - computed: true, optional: true, required: false
  private _vpnHidden?: boolean | cdktf.IResolvable; 
  public get vpnHidden() {
    return this.getBooleanAttribute('vpn_hidden');
  }
  public set vpnHidden(value: boolean | cdktf.IResolvable) {
    this._vpnHidden = value;
  }
  public resetVpnHidden() {
    this._vpnHidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnHiddenInput() {
    return this._vpnHidden;
  }

  // vpn_installed - computed: true, optional: true, required: false
  private _vpnInstalled?: boolean | cdktf.IResolvable; 
  public get vpnInstalled() {
    return this.getBooleanAttribute('vpn_installed');
  }
  public set vpnInstalled(value: boolean | cdktf.IResolvable) {
    this._vpnInstalled = value;
  }
  public resetVpnInstalled() {
    this._vpnInstalled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnInstalledInput() {
    return this._vpnInstalled;
  }

  // vuln_enabled - computed: true, optional: true, required: false
  private _vulnEnabled?: boolean | cdktf.IResolvable; 
  public get vulnEnabled() {
    return this.getBooleanAttribute('vuln_enabled');
  }
  public set vulnEnabled(value: boolean | cdktf.IResolvable) {
    this._vulnEnabled = value;
  }
  public resetVulnEnabled() {
    this._vulnEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnEnabledInput() {
    return this._vulnEnabled;
  }

  // vuln_events_count - computed: true, optional: true, required: false
  private _vulnEventsCount?: number; 
  public get vulnEventsCount() {
    return this.getNumberAttribute('vuln_events_count');
  }
  public set vulnEventsCount(value: number) {
    this._vulnEventsCount = value;
  }
  public resetVulnEventsCount() {
    this._vulnEventsCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnEventsCountInput() {
    return this._vulnEventsCount;
  }

  // vuln_events_max_severity - computed: true, optional: true, required: false
  private _vulnEventsMaxSeverity?: number; 
  public get vulnEventsMaxSeverity() {
    return this.getNumberAttribute('vuln_events_max_severity');
  }
  public set vulnEventsMaxSeverity(value: number) {
    this._vulnEventsMaxSeverity = value;
  }
  public resetVulnEventsMaxSeverity() {
    this._vulnEventsMaxSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnEventsMaxSeverityInput() {
    return this._vulnEventsMaxSeverity;
  }

  // vuln_hidden - computed: true, optional: true, required: false
  private _vulnHidden?: boolean | cdktf.IResolvable; 
  public get vulnHidden() {
    return this.getBooleanAttribute('vuln_hidden');
  }
  public set vulnHidden(value: boolean | cdktf.IResolvable) {
    this._vulnHidden = value;
  }
  public resetVulnHidden() {
    this._vulnHidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnHiddenInput() {
    return this._vulnHidden;
  }

  // vuln_installed - computed: true, optional: true, required: false
  private _vulnInstalled?: boolean | cdktf.IResolvable; 
  public get vulnInstalled() {
    return this.getBooleanAttribute('vuln_installed');
  }
  public set vulnInstalled(value: boolean | cdktf.IResolvable) {
    this._vulnInstalled = value;
  }
  public resetVulnInstalled() {
    this._vulnInstalled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnInstalledInput() {
    return this._vulnInstalled;
  }

  // vuln_next_scan_on - computed: true, optional: true, required: false
  private _vulnNextScanOn?: number; 
  public get vulnNextScanOn() {
    return this.getNumberAttribute('vuln_next_scan_on');
  }
  public set vulnNextScanOn(value: number) {
    this._vulnNextScanOn = value;
  }
  public resetVulnNextScanOn() {
    this._vulnNextScanOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnNextScanOnInput() {
    return this._vulnNextScanOn;
  }

  // vuln_next_sch_type - computed: true, optional: true, required: false
  private _vulnNextSchType?: number; 
  public get vulnNextSchType() {
    return this.getNumberAttribute('vuln_next_sch_type');
  }
  public set vulnNextSchType(value: number) {
    this._vulnNextSchType = value;
  }
  public resetVulnNextSchType() {
    this._vulnNextSchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnNextSchTypeInput() {
    return this._vulnNextSchType;
  }

  // vuln_next_scheduled - computed: true, optional: true, required: false
  private _vulnNextScheduled?: boolean | cdktf.IResolvable; 
  public get vulnNextScheduled() {
    return this.getBooleanAttribute('vuln_next_scheduled');
  }
  public set vulnNextScheduled(value: boolean | cdktf.IResolvable) {
    this._vulnNextScheduled = value;
  }
  public resetVulnNextScheduled() {
    this._vulnNextScheduled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnNextScheduledInput() {
    return this._vulnNextScheduled;
  }

  // vuln_next_start_hour - computed: true, optional: true, required: false
  private _vulnNextStartHour?: number; 
  public get vulnNextStartHour() {
    return this.getNumberAttribute('vuln_next_start_hour');
  }
  public set vulnNextStartHour(value: number) {
    this._vulnNextStartHour = value;
  }
  public resetVulnNextStartHour() {
    this._vulnNextStartHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnNextStartHourInput() {
    return this._vulnNextStartHour;
  }

  // vuln_next_start_min - computed: true, optional: true, required: false
  private _vulnNextStartMin?: number; 
  public get vulnNextStartMin() {
    return this.getNumberAttribute('vuln_next_start_min');
  }
  public set vulnNextStartMin(value: number) {
    this._vulnNextStartMin = value;
  }
  public resetVulnNextStartMin() {
    this._vulnNextStartMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnNextStartMinInput() {
    return this._vulnNextStartMin;
  }

  // vuln_scan_status - computed: true, optional: true, required: false
  private _vulnScanStatus?: string; 
  public get vulnScanStatus() {
    return this.getStringAttribute('vuln_scan_status');
  }
  public set vulnScanStatus(value: string) {
    this._vulnScanStatus = value;
  }
  public resetVulnScanStatus() {
    this._vulnScanStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnScanStatusInput() {
    return this._vulnScanStatus;
  }

  // wf_enabled - computed: true, optional: true, required: false
  private _wfEnabled?: boolean | cdktf.IResolvable; 
  public get wfEnabled() {
    return this.getBooleanAttribute('wf_enabled');
  }
  public set wfEnabled(value: boolean | cdktf.IResolvable) {
    this._wfEnabled = value;
  }
  public resetWfEnabled() {
    this._wfEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wfEnabledInput() {
    return this._wfEnabled;
  }

  // wf_events_count - computed: true, optional: true, required: false
  private _wfEventsCount?: number; 
  public get wfEventsCount() {
    return this.getNumberAttribute('wf_events_count');
  }
  public set wfEventsCount(value: number) {
    this._wfEventsCount = value;
  }
  public resetWfEventsCount() {
    this._wfEventsCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wfEventsCountInput() {
    return this._wfEventsCount;
  }

  // wf_hidden - computed: true, optional: true, required: false
  private _wfHidden?: boolean | cdktf.IResolvable; 
  public get wfHidden() {
    return this.getBooleanAttribute('wf_hidden');
  }
  public set wfHidden(value: boolean | cdktf.IResolvable) {
    this._wfHidden = value;
  }
  public resetWfHidden() {
    this._wfHidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wfHiddenInput() {
    return this._wfHidden;
  }

  // wf_installed - computed: true, optional: true, required: false
  private _wfInstalled?: boolean | cdktf.IResolvable; 
  public get wfInstalled() {
    return this.getBooleanAttribute('wf_installed');
  }
  public set wfInstalled(value: boolean | cdktf.IResolvable) {
    this._wfInstalled = value;
  }
  public resetWfInstalled() {
    this._wfInstalled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wfInstalledInput() {
    return this._wfInstalled;
  }

  // ztna_enabled - computed: true, optional: true, required: false
  private _ztnaEnabled?: boolean | cdktf.IResolvable; 
  public get ztnaEnabled() {
    return this.getBooleanAttribute('ztna_enabled');
  }
  public set ztnaEnabled(value: boolean | cdktf.IResolvable) {
    this._ztnaEnabled = value;
  }
  public resetZtnaEnabled() {
    this._ztnaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ztnaEnabledInput() {
    return this._ztnaEnabled;
  }

  // ztna_serial - computed: true, optional: true, required: false
  private _ztnaSerial?: string; 
  public get ztnaSerial() {
    return this.getStringAttribute('ztna_serial');
  }
  public set ztnaSerial(value: string) {
    this._ztnaSerial = value;
  }
  public resetZtnaSerial() {
    this._ztnaSerial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ztnaSerialInput() {
    return this._ztnaSerial;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      av_enabled: cdktf.booleanToTerraform(this._avEnabled),
      av_events_count: cdktf.numberToTerraform(this._avEventsCount),
      av_hidden: cdktf.booleanToTerraform(this._avHidden),
      av_installed: cdktf.booleanToTerraform(this._avInstalled),
      av_last_cancelled_scan_date: cdktf.stringToTerraform(this._avLastCancelledScanDate),
      av_last_cancelled_scan_type: cdktf.numberToTerraform(this._avLastCancelledScanType),
      av_last_full_scan_date: cdktf.stringToTerraform(this._avLastFullScanDate),
      av_last_scan_date: cdktf.stringToTerraform(this._avLastScanDate),
      av_last_scan_type: cdktf.numberToTerraform(this._avLastScanType),
      av_next_scan_hour: cdktf.numberToTerraform(this._avNextScanHour),
      av_next_scan_min: cdktf.numberToTerraform(this._avNextScanMin),
      av_next_scan_on: cdktf.numberToTerraform(this._avNextScanOn),
      av_next_scan_type: cdktf.numberToTerraform(this._avNextScanType),
      av_next_sch_type: cdktf.numberToTerraform(this._avNextSchType),
      av_scan_scheduled: cdktf.booleanToTerraform(this._avScanScheduled),
      caps: cdktf.numberToTerraform(this._caps),
      comparable_fct_version: cdktf.numberToTerraform(this._comparableFctVersion),
      conn_details: cdktf.listMapper(dataFortisaseEndpointsDetailsConnDetailsToTerraform, false)(this._connDetails.internalValue),
      deployment_state: cdktf.numberToTerraform(this._deploymentState),
      deployment_state_data: cdktf.stringToTerraform(this._deploymentStateData),
      deployment_state_time: cdktf.stringToTerraform(this._deploymentStateTime),
      deregister: cdktf.numberToTerraform(this._deregister),
      device_id: cdktf.numberToTerraform(this._deviceId),
      distinguished_name: cdktf.stringToTerraform(this._distinguishedName),
      domain_id: cdktf.numberToTerraform(this._domainId),
      fct_sn: cdktf.stringToTerraform(this._fctSn),
      fct_version: cdktf.stringToTerraform(this._fctVersion),
      fgt_sn: cdktf.stringToTerraform(this._fgtSn),
      forensics: dataFortisaseEndpointsDetailsForensicsToTerraform(this._forensics.internalValue),
      forensics_enabled: cdktf.booleanToTerraform(this._forensicsEnabled),
      forticlient_id: cdktf.numberToTerraform(this._forticlientId),
      fw_enabled: cdktf.booleanToTerraform(this._fwEnabled),
      fw_events_count: cdktf.numberToTerraform(this._fwEventsCount),
      fw_hidden: cdktf.booleanToTerraform(this._fwHidden),
      fw_installed: cdktf.booleanToTerraform(this._fwInstalled),
      group_id: cdktf.numberToTerraform(this._groupId),
      group_name: cdktf.stringToTerraform(this._groupName),
      group_tag: cdktf.stringToTerraform(this._groupTag),
      hardware_details: dataFortisaseEndpointsDetailsHardwareDetailsToTerraform(this._hardwareDetails.internalValue),
      host: cdktf.stringToTerraform(this._host),
      installation_state: cdktf.numberToTerraform(this._installationState),
      installer_name: cdktf.stringToTerraform(this._installerName),
      ip_addr: cdktf.stringToTerraform(this._ipAddr),
      ip_list_name: cdktf.stringToTerraform(this._ipListName),
      is_av_scanning: cdktf.booleanToTerraform(this._isAvScanning),
      is_ems_online: cdktf.booleanToTerraform(this._isEmsOnline),
      is_ems_onnet: cdktf.booleanToTerraform(this._isEmsOnnet),
      is_ems_registered: cdktf.booleanToTerraform(this._isEmsRegistered),
      is_excluded: cdktf.booleanToTerraform(this._isExcluded),
      is_installed: cdktf.booleanToTerraform(this._isInstalled),
      is_managed: cdktf.booleanToTerraform(this._isManaged),
      is_migrating: cdktf.booleanToTerraform(this._isMigrating),
      is_quarantined: cdktf.booleanToTerraform(this._isQuarantined),
      is_vuln_scanning: cdktf.booleanToTerraform(this._isVulnScanning),
      last_seen: cdktf.numberToTerraform(this._lastSeen),
      last_vuln_scan: cdktf.numberToTerraform(this._lastVulnScan),
      mac_addr: cdktf.stringToTerraform(this._macAddr),
      name: cdktf.stringToTerraform(this._name),
      orig_group_id: cdktf.numberToTerraform(this._origGroupId),
      orig_group_name: cdktf.stringToTerraform(this._origGroupName),
      os_service_pack: cdktf.stringToTerraform(this._osServicePack),
      os_version: cdktf.stringToTerraform(this._osVersion),
      profile_name: cdktf.stringToTerraform(this._profileName),
      quarantine_access_code: cdktf.stringToTerraform(this._quarantineAccessCode),
      quarantine_message: cdktf.stringToTerraform(this._quarantineMessage),
      rs_enabled: cdktf.booleanToTerraform(this._rsEnabled),
      rs_hidden: cdktf.booleanToTerraform(this._rsHidden),
      rs_installed: cdktf.booleanToTerraform(this._rsInstalled),
      run_cmd: cdktf.numberToTerraform(this._runCmd),
      sb_enabled: cdktf.booleanToTerraform(this._sbEnabled),
      sb_events_count: cdktf.numberToTerraform(this._sbEventsCount),
      sb_hidden: cdktf.booleanToTerraform(this._sbHidden),
      sb_installed: cdktf.booleanToTerraform(this._sbInstalled),
      scheduled_install_time: cdktf.stringToTerraform(this._scheduledInstallTime),
      service: cdktf.stringToTerraform(this._service),
      ssoma_enabled: cdktf.booleanToTerraform(this._ssomaEnabled),
      ssoma_hidden: cdktf.booleanToTerraform(this._ssomaHidden),
      ssoma_installed: cdktf.booleanToTerraform(this._ssomaInstalled),
      sys_events_count: cdktf.numberToTerraform(this._sysEventsCount),
      tags: cdktf.listMapper(dataFortisaseEndpointsDetailsTagsToTerraform, false)(this._tags.internalValue),
      uid: cdktf.stringToTerraform(this._uid),
      user_domain: cdktf.stringToTerraform(this._userDomain),
      vpn_enabled: cdktf.booleanToTerraform(this._vpnEnabled),
      vpn_hidden: cdktf.booleanToTerraform(this._vpnHidden),
      vpn_installed: cdktf.booleanToTerraform(this._vpnInstalled),
      vuln_enabled: cdktf.booleanToTerraform(this._vulnEnabled),
      vuln_events_count: cdktf.numberToTerraform(this._vulnEventsCount),
      vuln_events_max_severity: cdktf.numberToTerraform(this._vulnEventsMaxSeverity),
      vuln_hidden: cdktf.booleanToTerraform(this._vulnHidden),
      vuln_installed: cdktf.booleanToTerraform(this._vulnInstalled),
      vuln_next_scan_on: cdktf.numberToTerraform(this._vulnNextScanOn),
      vuln_next_sch_type: cdktf.numberToTerraform(this._vulnNextSchType),
      vuln_next_scheduled: cdktf.booleanToTerraform(this._vulnNextScheduled),
      vuln_next_start_hour: cdktf.numberToTerraform(this._vulnNextStartHour),
      vuln_next_start_min: cdktf.numberToTerraform(this._vulnNextStartMin),
      vuln_scan_status: cdktf.stringToTerraform(this._vulnScanStatus),
      wf_enabled: cdktf.booleanToTerraform(this._wfEnabled),
      wf_events_count: cdktf.numberToTerraform(this._wfEventsCount),
      wf_hidden: cdktf.booleanToTerraform(this._wfHidden),
      wf_installed: cdktf.booleanToTerraform(this._wfInstalled),
      ztna_enabled: cdktf.booleanToTerraform(this._ztnaEnabled),
      ztna_serial: cdktf.stringToTerraform(this._ztnaSerial),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      av_enabled: {
        value: cdktf.booleanToHclTerraform(this._avEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      av_events_count: {
        value: cdktf.numberToHclTerraform(this._avEventsCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      av_hidden: {
        value: cdktf.booleanToHclTerraform(this._avHidden),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      av_installed: {
        value: cdktf.booleanToHclTerraform(this._avInstalled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      av_last_cancelled_scan_date: {
        value: cdktf.stringToHclTerraform(this._avLastCancelledScanDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      av_last_cancelled_scan_type: {
        value: cdktf.numberToHclTerraform(this._avLastCancelledScanType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      av_last_full_scan_date: {
        value: cdktf.stringToHclTerraform(this._avLastFullScanDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      av_last_scan_date: {
        value: cdktf.stringToHclTerraform(this._avLastScanDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      av_last_scan_type: {
        value: cdktf.numberToHclTerraform(this._avLastScanType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      av_next_scan_hour: {
        value: cdktf.numberToHclTerraform(this._avNextScanHour),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      av_next_scan_min: {
        value: cdktf.numberToHclTerraform(this._avNextScanMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      av_next_scan_on: {
        value: cdktf.numberToHclTerraform(this._avNextScanOn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      av_next_scan_type: {
        value: cdktf.numberToHclTerraform(this._avNextScanType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      av_next_sch_type: {
        value: cdktf.numberToHclTerraform(this._avNextSchType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      av_scan_scheduled: {
        value: cdktf.booleanToHclTerraform(this._avScanScheduled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      caps: {
        value: cdktf.numberToHclTerraform(this._caps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      comparable_fct_version: {
        value: cdktf.numberToHclTerraform(this._comparableFctVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_details: {
        value: cdktf.listMapperHcl(dataFortisaseEndpointsDetailsConnDetailsToHclTerraform, false)(this._connDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFortisaseEndpointsDetailsConnDetailsList",
      },
      deployment_state: {
        value: cdktf.numberToHclTerraform(this._deploymentState),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      deployment_state_data: {
        value: cdktf.stringToHclTerraform(this._deploymentStateData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_state_time: {
        value: cdktf.stringToHclTerraform(this._deploymentStateTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deregister: {
        value: cdktf.numberToHclTerraform(this._deregister),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device_id: {
        value: cdktf.numberToHclTerraform(this._deviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      distinguished_name: {
        value: cdktf.stringToHclTerraform(this._distinguishedName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_id: {
        value: cdktf.numberToHclTerraform(this._domainId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fct_sn: {
        value: cdktf.stringToHclTerraform(this._fctSn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fct_version: {
        value: cdktf.stringToHclTerraform(this._fctVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fgt_sn: {
        value: cdktf.stringToHclTerraform(this._fgtSn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forensics: {
        value: dataFortisaseEndpointsDetailsForensicsToHclTerraform(this._forensics.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataFortisaseEndpointsDetailsForensics",
      },
      forensics_enabled: {
        value: cdktf.booleanToHclTerraform(this._forensicsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      forticlient_id: {
        value: cdktf.numberToHclTerraform(this._forticlientId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fw_enabled: {
        value: cdktf.booleanToHclTerraform(this._fwEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fw_events_count: {
        value: cdktf.numberToHclTerraform(this._fwEventsCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fw_hidden: {
        value: cdktf.booleanToHclTerraform(this._fwHidden),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fw_installed: {
        value: cdktf.booleanToHclTerraform(this._fwInstalled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_id: {
        value: cdktf.numberToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_tag: {
        value: cdktf.stringToHclTerraform(this._groupTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hardware_details: {
        value: dataFortisaseEndpointsDetailsHardwareDetailsToHclTerraform(this._hardwareDetails.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataFortisaseEndpointsDetailsHardwareDetails",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      installation_state: {
        value: cdktf.numberToHclTerraform(this._installationState),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      installer_name: {
        value: cdktf.stringToHclTerraform(this._installerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_addr: {
        value: cdktf.stringToHclTerraform(this._ipAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_list_name: {
        value: cdktf.stringToHclTerraform(this._ipListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_av_scanning: {
        value: cdktf.booleanToHclTerraform(this._isAvScanning),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_ems_online: {
        value: cdktf.booleanToHclTerraform(this._isEmsOnline),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_ems_onnet: {
        value: cdktf.booleanToHclTerraform(this._isEmsOnnet),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_ems_registered: {
        value: cdktf.booleanToHclTerraform(this._isEmsRegistered),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_excluded: {
        value: cdktf.booleanToHclTerraform(this._isExcluded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_installed: {
        value: cdktf.booleanToHclTerraform(this._isInstalled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_managed: {
        value: cdktf.booleanToHclTerraform(this._isManaged),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_migrating: {
        value: cdktf.booleanToHclTerraform(this._isMigrating),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_quarantined: {
        value: cdktf.booleanToHclTerraform(this._isQuarantined),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_vuln_scanning: {
        value: cdktf.booleanToHclTerraform(this._isVulnScanning),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      last_seen: {
        value: cdktf.numberToHclTerraform(this._lastSeen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      last_vuln_scan: {
        value: cdktf.numberToHclTerraform(this._lastVulnScan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mac_addr: {
        value: cdktf.stringToHclTerraform(this._macAddr),
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
      orig_group_id: {
        value: cdktf.numberToHclTerraform(this._origGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      orig_group_name: {
        value: cdktf.stringToHclTerraform(this._origGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_service_pack: {
        value: cdktf.stringToHclTerraform(this._osServicePack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_version: {
        value: cdktf.stringToHclTerraform(this._osVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_name: {
        value: cdktf.stringToHclTerraform(this._profileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quarantine_access_code: {
        value: cdktf.stringToHclTerraform(this._quarantineAccessCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quarantine_message: {
        value: cdktf.stringToHclTerraform(this._quarantineMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rs_enabled: {
        value: cdktf.booleanToHclTerraform(this._rsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rs_hidden: {
        value: cdktf.booleanToHclTerraform(this._rsHidden),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rs_installed: {
        value: cdktf.booleanToHclTerraform(this._rsInstalled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      run_cmd: {
        value: cdktf.numberToHclTerraform(this._runCmd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sb_enabled: {
        value: cdktf.booleanToHclTerraform(this._sbEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sb_events_count: {
        value: cdktf.numberToHclTerraform(this._sbEventsCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sb_hidden: {
        value: cdktf.booleanToHclTerraform(this._sbHidden),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sb_installed: {
        value: cdktf.booleanToHclTerraform(this._sbInstalled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scheduled_install_time: {
        value: cdktf.stringToHclTerraform(this._scheduledInstallTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssoma_enabled: {
        value: cdktf.booleanToHclTerraform(this._ssomaEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssoma_hidden: {
        value: cdktf.booleanToHclTerraform(this._ssomaHidden),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssoma_installed: {
        value: cdktf.booleanToHclTerraform(this._ssomaInstalled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sys_events_count: {
        value: cdktf.numberToHclTerraform(this._sysEventsCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(dataFortisaseEndpointsDetailsTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFortisaseEndpointsDetailsTagsList",
      },
      uid: {
        value: cdktf.stringToHclTerraform(this._uid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_domain: {
        value: cdktf.stringToHclTerraform(this._userDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_enabled: {
        value: cdktf.booleanToHclTerraform(this._vpnEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vpn_hidden: {
        value: cdktf.booleanToHclTerraform(this._vpnHidden),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vpn_installed: {
        value: cdktf.booleanToHclTerraform(this._vpnInstalled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vuln_enabled: {
        value: cdktf.booleanToHclTerraform(this._vulnEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vuln_events_count: {
        value: cdktf.numberToHclTerraform(this._vulnEventsCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vuln_events_max_severity: {
        value: cdktf.numberToHclTerraform(this._vulnEventsMaxSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vuln_hidden: {
        value: cdktf.booleanToHclTerraform(this._vulnHidden),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vuln_installed: {
        value: cdktf.booleanToHclTerraform(this._vulnInstalled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vuln_next_scan_on: {
        value: cdktf.numberToHclTerraform(this._vulnNextScanOn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vuln_next_sch_type: {
        value: cdktf.numberToHclTerraform(this._vulnNextSchType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vuln_next_scheduled: {
        value: cdktf.booleanToHclTerraform(this._vulnNextScheduled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vuln_next_start_hour: {
        value: cdktf.numberToHclTerraform(this._vulnNextStartHour),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vuln_next_start_min: {
        value: cdktf.numberToHclTerraform(this._vulnNextStartMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vuln_scan_status: {
        value: cdktf.stringToHclTerraform(this._vulnScanStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wf_enabled: {
        value: cdktf.booleanToHclTerraform(this._wfEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wf_events_count: {
        value: cdktf.numberToHclTerraform(this._wfEventsCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wf_hidden: {
        value: cdktf.booleanToHclTerraform(this._wfHidden),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wf_installed: {
        value: cdktf.booleanToHclTerraform(this._wfInstalled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ztna_enabled: {
        value: cdktf.booleanToHclTerraform(this._ztnaEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ztna_serial: {
        value: cdktf.stringToHclTerraform(this._ztnaSerial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
