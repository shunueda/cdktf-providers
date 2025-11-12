// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemGlobalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#admin_concurrent SystemGlobal#admin_concurrent}
  */
  readonly adminConcurrent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#admin_console_timeout SystemGlobal#admin_console_timeout}
  */
  readonly adminConsoleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#admin_forticloud_sso_default_profile SystemGlobal#admin_forticloud_sso_default_profile}
  */
  readonly adminForticloudSsoDefaultProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#admin_forticloud_sso_login SystemGlobal#admin_forticloud_sso_login}
  */
  readonly adminForticloudSsoLogin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#admin_host SystemGlobal#admin_host}
  */
  readonly adminHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#admin_hsts_max_age SystemGlobal#admin_hsts_max_age}
  */
  readonly adminHstsMaxAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#admin_https_pki_required SystemGlobal#admin_https_pki_required}
  */
  readonly adminHttpsPkiRequired?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#admin_https_redirect SystemGlobal#admin_https_redirect}
  */
  readonly adminHttpsRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#admin_https_ssl_banned_ciphers SystemGlobal#admin_https_ssl_banned_ciphers}
  */
  readonly adminHttpsSslBannedCiphers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#admin_https_ssl_ciphersuites SystemGlobal#admin_https_ssl_ciphersuites}
  */
  readonly adminHttpsSslCiphersuites?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#admin_https_ssl_versions SystemGlobal#admin_https_ssl_versions}
  */
  readonly adminHttpsSslVersions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#admin_lockout_duration SystemGlobal#admin_lockout_duration}
  */
  readonly adminLockoutDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#admin_lockout_threshold SystemGlobal#admin_lockout_threshold}
  */
  readonly adminLockoutThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#admin_login_max SystemGlobal#admin_login_max}
  */
  readonly adminLoginMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#admin_maintainer SystemGlobal#admin_maintainer}
  */
  readonly adminMaintainer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#admin_port SystemGlobal#admin_port}
  */
  readonly adminPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#admin_restrict_local SystemGlobal#admin_restrict_local}
  */
  readonly adminRestrictLocal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#admin_scp SystemGlobal#admin_scp}
  */
  readonly adminScp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#admin_server_cert SystemGlobal#admin_server_cert}
  */
  readonly adminServerCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#admin_sport SystemGlobal#admin_sport}
  */
  readonly adminSport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#admin_ssh_grace_time SystemGlobal#admin_ssh_grace_time}
  */
  readonly adminSshGraceTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#admin_ssh_password SystemGlobal#admin_ssh_password}
  */
  readonly adminSshPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#admin_ssh_port SystemGlobal#admin_ssh_port}
  */
  readonly adminSshPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#admin_ssh_v1 SystemGlobal#admin_ssh_v1}
  */
  readonly adminSshV1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#admin_telnet SystemGlobal#admin_telnet}
  */
  readonly adminTelnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#admin_telnet_port SystemGlobal#admin_telnet_port}
  */
  readonly adminTelnetPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#admintimeout SystemGlobal#admintimeout}
  */
  readonly admintimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#alias SystemGlobal#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#allow_traffic_redirect SystemGlobal#allow_traffic_redirect}
  */
  readonly allowTrafficRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#anti_replay SystemGlobal#anti_replay}
  */
  readonly antiReplay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#application_bandwidth_tracking SystemGlobal#application_bandwidth_tracking}
  */
  readonly applicationBandwidthTracking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#arp_max_entry SystemGlobal#arp_max_entry}
  */
  readonly arpMaxEntry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#asymroute SystemGlobal#asymroute}
  */
  readonly asymroute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#auth_cert SystemGlobal#auth_cert}
  */
  readonly authCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#auth_http_port SystemGlobal#auth_http_port}
  */
  readonly authHttpPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#auth_https_port SystemGlobal#auth_https_port}
  */
  readonly authHttpsPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#auth_ike_saml_port SystemGlobal#auth_ike_saml_port}
  */
  readonly authIkeSamlPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#auth_keepalive SystemGlobal#auth_keepalive}
  */
  readonly authKeepalive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#auth_session_auto_backup SystemGlobal#auth_session_auto_backup}
  */
  readonly authSessionAutoBackup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#auth_session_auto_backup_interval SystemGlobal#auth_session_auto_backup_interval}
  */
  readonly authSessionAutoBackupInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#auth_session_limit SystemGlobal#auth_session_limit}
  */
  readonly authSessionLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#auto_auth_extension_device SystemGlobal#auto_auth_extension_device}
  */
  readonly autoAuthExtensionDevice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#autorun_log_fsck SystemGlobal#autorun_log_fsck}
  */
  readonly autorunLogFsck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#av_affinity SystemGlobal#av_affinity}
  */
  readonly avAffinity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#av_failopen SystemGlobal#av_failopen}
  */
  readonly avFailopen?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#av_failopen_session SystemGlobal#av_failopen_session}
  */
  readonly avFailopenSession?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#batch_cmdb SystemGlobal#batch_cmdb}
  */
  readonly batchCmdb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#bfd_affinity SystemGlobal#bfd_affinity}
  */
  readonly bfdAffinity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#block_session_timer SystemGlobal#block_session_timer}
  */
  readonly blockSessionTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#br_fdb_max_entry SystemGlobal#br_fdb_max_entry}
  */
  readonly brFdbMaxEntry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#cert_chain_max SystemGlobal#cert_chain_max}
  */
  readonly certChainMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#cfg_revert_timeout SystemGlobal#cfg_revert_timeout}
  */
  readonly cfgRevertTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#cfg_save SystemGlobal#cfg_save}
  */
  readonly cfgSave?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#check_protocol_header SystemGlobal#check_protocol_header}
  */
  readonly checkProtocolHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#check_reset_range SystemGlobal#check_reset_range}
  */
  readonly checkResetRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#cli_audit_log SystemGlobal#cli_audit_log}
  */
  readonly cliAuditLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#cloud_communication SystemGlobal#cloud_communication}
  */
  readonly cloudCommunication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#clt_cert_req SystemGlobal#clt_cert_req}
  */
  readonly cltCertReq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#cmdbsvr_affinity SystemGlobal#cmdbsvr_affinity}
  */
  readonly cmdbsvrAffinity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#compliance_check SystemGlobal#compliance_check}
  */
  readonly complianceCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#compliance_check_time SystemGlobal#compliance_check_time}
  */
  readonly complianceCheckTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#cpu_use_threshold SystemGlobal#cpu_use_threshold}
  */
  readonly cpuUseThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#csr_ca_attribute SystemGlobal#csr_ca_attribute}
  */
  readonly csrCaAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#daily_restart SystemGlobal#daily_restart}
  */
  readonly dailyRestart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#default_service_source_port SystemGlobal#default_service_source_port}
  */
  readonly defaultServiceSourcePort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#delay_tcp_npu_session SystemGlobal#delay_tcp_npu_session}
  */
  readonly delayTcpNpuSession?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#device_identification_active_scan_delay SystemGlobal#device_identification_active_scan_delay}
  */
  readonly deviceIdentificationActiveScanDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#device_idle_timeout SystemGlobal#device_idle_timeout}
  */
  readonly deviceIdleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#dh_params SystemGlobal#dh_params}
  */
  readonly dhParams?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#dhcp_lease_backup_interval SystemGlobal#dhcp_lease_backup_interval}
  */
  readonly dhcpLeaseBackupInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#dnsproxy_worker_count SystemGlobal#dnsproxy_worker_count}
  */
  readonly dnsproxyWorkerCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#dst SystemGlobal#dst}
  */
  readonly dst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#dynamic_sort_subtable SystemGlobal#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#early_tcp_npu_session SystemGlobal#early_tcp_npu_session}
  */
  readonly earlyTcpNpuSession?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#edit_vdom_prompt SystemGlobal#edit_vdom_prompt}
  */
  readonly editVdomPrompt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#endpoint_control_fds_access SystemGlobal#endpoint_control_fds_access}
  */
  readonly endpointControlFdsAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#endpoint_control_portal_port SystemGlobal#endpoint_control_portal_port}
  */
  readonly endpointControlPortalPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#extender_controller_reserved_network SystemGlobal#extender_controller_reserved_network}
  */
  readonly extenderControllerReservedNetwork?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#failtime SystemGlobal#failtime}
  */
  readonly failtime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#faz_disk_buffer_size SystemGlobal#faz_disk_buffer_size}
  */
  readonly fazDiskBufferSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#fds_statistics SystemGlobal#fds_statistics}
  */
  readonly fdsStatistics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#fds_statistics_period SystemGlobal#fds_statistics_period}
  */
  readonly fdsStatisticsPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#fec_port SystemGlobal#fec_port}
  */
  readonly fecPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#fgd_alert_subscription SystemGlobal#fgd_alert_subscription}
  */
  readonly fgdAlertSubscription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#forticonverter_config_upload SystemGlobal#forticonverter_config_upload}
  */
  readonly forticonverterConfigUpload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#forticonverter_integration SystemGlobal#forticonverter_integration}
  */
  readonly forticonverterIntegration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#fortiextender SystemGlobal#fortiextender}
  */
  readonly fortiextender?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#fortiextender_data_port SystemGlobal#fortiextender_data_port}
  */
  readonly fortiextenderDataPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#fortiextender_discovery_lockdown SystemGlobal#fortiextender_discovery_lockdown}
  */
  readonly fortiextenderDiscoveryLockdown?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#fortiextender_provision_on_authorization SystemGlobal#fortiextender_provision_on_authorization}
  */
  readonly fortiextenderProvisionOnAuthorization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#fortiextender_vlan_mode SystemGlobal#fortiextender_vlan_mode}
  */
  readonly fortiextenderVlanMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#fortigslb_integration SystemGlobal#fortigslb_integration}
  */
  readonly fortigslbIntegration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#fortiipam_integration SystemGlobal#fortiipam_integration}
  */
  readonly fortiipamIntegration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#fortiservice_port SystemGlobal#fortiservice_port}
  */
  readonly fortiservicePort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#fortitoken_cloud SystemGlobal#fortitoken_cloud}
  */
  readonly fortitokenCloud?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#fortitoken_cloud_push_status SystemGlobal#fortitoken_cloud_push_status}
  */
  readonly fortitokenCloudPushStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#fortitoken_cloud_region SystemGlobal#fortitoken_cloud_region}
  */
  readonly fortitokenCloudRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#fortitoken_cloud_sync_interval SystemGlobal#fortitoken_cloud_sync_interval}
  */
  readonly fortitokenCloudSyncInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#get_all_tables SystemGlobal#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#gui_allow_default_hostname SystemGlobal#gui_allow_default_hostname}
  */
  readonly guiAllowDefaultHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#gui_allow_incompatible_fabric_fgt SystemGlobal#gui_allow_incompatible_fabric_fgt}
  */
  readonly guiAllowIncompatibleFabricFgt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#gui_app_detection_sdwan SystemGlobal#gui_app_detection_sdwan}
  */
  readonly guiAppDetectionSdwan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#gui_auto_upgrade_setup_warning SystemGlobal#gui_auto_upgrade_setup_warning}
  */
  readonly guiAutoUpgradeSetupWarning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#gui_cdn_domain_override SystemGlobal#gui_cdn_domain_override}
  */
  readonly guiCdnDomainOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#gui_cdn_usage SystemGlobal#gui_cdn_usage}
  */
  readonly guiCdnUsage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#gui_certificates SystemGlobal#gui_certificates}
  */
  readonly guiCertificates?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#gui_custom_language SystemGlobal#gui_custom_language}
  */
  readonly guiCustomLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#gui_date_format SystemGlobal#gui_date_format}
  */
  readonly guiDateFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#gui_date_time_source SystemGlobal#gui_date_time_source}
  */
  readonly guiDateTimeSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#gui_device_latitude SystemGlobal#gui_device_latitude}
  */
  readonly guiDeviceLatitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#gui_device_longitude SystemGlobal#gui_device_longitude}
  */
  readonly guiDeviceLongitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#gui_display_hostname SystemGlobal#gui_display_hostname}
  */
  readonly guiDisplayHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#gui_firmware_upgrade_setup_warning SystemGlobal#gui_firmware_upgrade_setup_warning}
  */
  readonly guiFirmwareUpgradeSetupWarning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#gui_firmware_upgrade_warning SystemGlobal#gui_firmware_upgrade_warning}
  */
  readonly guiFirmwareUpgradeWarning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#gui_forticare_registration_setup_warning SystemGlobal#gui_forticare_registration_setup_warning}
  */
  readonly guiForticareRegistrationSetupWarning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#gui_fortigate_cloud_sandbox SystemGlobal#gui_fortigate_cloud_sandbox}
  */
  readonly guiFortigateCloudSandbox?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#gui_fortiguard_resource_fetch SystemGlobal#gui_fortiguard_resource_fetch}
  */
  readonly guiFortiguardResourceFetch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#gui_fortisandbox_cloud SystemGlobal#gui_fortisandbox_cloud}
  */
  readonly guiFortisandboxCloud?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#gui_ipv6 SystemGlobal#gui_ipv6}
  */
  readonly guiIpv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#gui_lines_per_page SystemGlobal#gui_lines_per_page}
  */
  readonly guiLinesPerPage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#gui_local_out SystemGlobal#gui_local_out}
  */
  readonly guiLocalOut?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#gui_replacement_message_groups SystemGlobal#gui_replacement_message_groups}
  */
  readonly guiReplacementMessageGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#gui_rest_api_cache SystemGlobal#gui_rest_api_cache}
  */
  readonly guiRestApiCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#gui_theme SystemGlobal#gui_theme}
  */
  readonly guiTheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#gui_wireless_opensecurity SystemGlobal#gui_wireless_opensecurity}
  */
  readonly guiWirelessOpensecurity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#gui_workflow_management SystemGlobal#gui_workflow_management}
  */
  readonly guiWorkflowManagement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#ha_affinity SystemGlobal#ha_affinity}
  */
  readonly haAffinity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#honor_df SystemGlobal#honor_df}
  */
  readonly honorDf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#hostname SystemGlobal#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#httpd_max_worker_count SystemGlobal#httpd_max_worker_count}
  */
  readonly httpdMaxWorkerCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#id SystemGlobal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#igmp_state_limit SystemGlobal#igmp_state_limit}
  */
  readonly igmpStateLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#ike_embryonic_limit SystemGlobal#ike_embryonic_limit}
  */
  readonly ikeEmbryonicLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#interface_subnet_usage SystemGlobal#interface_subnet_usage}
  */
  readonly interfaceSubnetUsage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#internet_service_database SystemGlobal#internet_service_database}
  */
  readonly internetServiceDatabase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#interval SystemGlobal#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#ip_conflict_detection SystemGlobal#ip_conflict_detection}
  */
  readonly ipConflictDetection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#ip_fragment_mem_thresholds SystemGlobal#ip_fragment_mem_thresholds}
  */
  readonly ipFragmentMemThresholds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#ip_fragment_timeout SystemGlobal#ip_fragment_timeout}
  */
  readonly ipFragmentTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#ip_src_port_range SystemGlobal#ip_src_port_range}
  */
  readonly ipSrcPortRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#ips_affinity SystemGlobal#ips_affinity}
  */
  readonly ipsAffinity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#ipsec_asic_offload SystemGlobal#ipsec_asic_offload}
  */
  readonly ipsecAsicOffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#ipsec_ha_seqjump_rate SystemGlobal#ipsec_ha_seqjump_rate}
  */
  readonly ipsecHaSeqjumpRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#ipsec_hmac_offload SystemGlobal#ipsec_hmac_offload}
  */
  readonly ipsecHmacOffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#ipsec_qat_offload SystemGlobal#ipsec_qat_offload}
  */
  readonly ipsecQatOffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#ipsec_round_robin SystemGlobal#ipsec_round_robin}
  */
  readonly ipsecRoundRobin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#ipsec_soft_dec_async SystemGlobal#ipsec_soft_dec_async}
  */
  readonly ipsecSoftDecAsync?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#ipv6_accept_dad SystemGlobal#ipv6_accept_dad}
  */
  readonly ipv6AcceptDad?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#ipv6_allow_anycast_probe SystemGlobal#ipv6_allow_anycast_probe}
  */
  readonly ipv6AllowAnycastProbe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#ipv6_allow_local_in_silent_drop SystemGlobal#ipv6_allow_local_in_silent_drop}
  */
  readonly ipv6AllowLocalInSilentDrop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#ipv6_allow_local_in_slient_drop SystemGlobal#ipv6_allow_local_in_slient_drop}
  */
  readonly ipv6AllowLocalInSlientDrop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#ipv6_allow_multicast_probe SystemGlobal#ipv6_allow_multicast_probe}
  */
  readonly ipv6AllowMulticastProbe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#ipv6_allow_traffic_redirect SystemGlobal#ipv6_allow_traffic_redirect}
  */
  readonly ipv6AllowTrafficRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#ipv6_fragment_timeout SystemGlobal#ipv6_fragment_timeout}
  */
  readonly ipv6FragmentTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#ipv6_snat_route_change SystemGlobal#ipv6_snat_route_change}
  */
  readonly ipv6SnatRouteChange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#irq_time_accounting SystemGlobal#irq_time_accounting}
  */
  readonly irqTimeAccounting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#language SystemGlobal#language}
  */
  readonly language?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#ldapconntimeout SystemGlobal#ldapconntimeout}
  */
  readonly ldapconntimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#lldp_reception SystemGlobal#lldp_reception}
  */
  readonly lldpReception?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#lldp_transmission SystemGlobal#lldp_transmission}
  */
  readonly lldpTransmission?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#log_single_cpu_high SystemGlobal#log_single_cpu_high}
  */
  readonly logSingleCpuHigh?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#log_ssl_connection SystemGlobal#log_ssl_connection}
  */
  readonly logSslConnection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#log_uuid_address SystemGlobal#log_uuid_address}
  */
  readonly logUuidAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#log_uuid_policy SystemGlobal#log_uuid_policy}
  */
  readonly logUuidPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#login_timestamp SystemGlobal#login_timestamp}
  */
  readonly loginTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#long_vdom_name SystemGlobal#long_vdom_name}
  */
  readonly longVdomName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#management_ip SystemGlobal#management_ip}
  */
  readonly managementIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#management_port SystemGlobal#management_port}
  */
  readonly managementPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#management_port_use_admin_sport SystemGlobal#management_port_use_admin_sport}
  */
  readonly managementPortUseAdminSport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#management_vdom SystemGlobal#management_vdom}
  */
  readonly managementVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#max_dlpstat_memory SystemGlobal#max_dlpstat_memory}
  */
  readonly maxDlpstatMemory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#max_route_cache_size SystemGlobal#max_route_cache_size}
  */
  readonly maxRouteCacheSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#mc_ttl_notchange SystemGlobal#mc_ttl_notchange}
  */
  readonly mcTtlNotchange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#memory_use_threshold_extreme SystemGlobal#memory_use_threshold_extreme}
  */
  readonly memoryUseThresholdExtreme?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#memory_use_threshold_green SystemGlobal#memory_use_threshold_green}
  */
  readonly memoryUseThresholdGreen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#memory_use_threshold_red SystemGlobal#memory_use_threshold_red}
  */
  readonly memoryUseThresholdRed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#miglog_affinity SystemGlobal#miglog_affinity}
  */
  readonly miglogAffinity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#miglogd_children SystemGlobal#miglogd_children}
  */
  readonly miglogdChildren?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#multi_factor_authentication SystemGlobal#multi_factor_authentication}
  */
  readonly multiFactorAuthentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#multicast_forward SystemGlobal#multicast_forward}
  */
  readonly multicastForward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#ndp_max_entry SystemGlobal#ndp_max_entry}
  */
  readonly ndpMaxEntry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#npu_neighbor_update SystemGlobal#npu_neighbor_update}
  */
  readonly npuNeighborUpdate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#per_user_bal SystemGlobal#per_user_bal}
  */
  readonly perUserBal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#per_user_bwl SystemGlobal#per_user_bwl}
  */
  readonly perUserBwl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#pmtu_discovery SystemGlobal#pmtu_discovery}
  */
  readonly pmtuDiscovery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#policy_auth_concurrent SystemGlobal#policy_auth_concurrent}
  */
  readonly policyAuthConcurrent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#post_login_banner SystemGlobal#post_login_banner}
  */
  readonly postLoginBanner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#pre_login_banner SystemGlobal#pre_login_banner}
  */
  readonly preLoginBanner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#private_data_encryption SystemGlobal#private_data_encryption}
  */
  readonly privateDataEncryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#proxy_auth_lifetime SystemGlobal#proxy_auth_lifetime}
  */
  readonly proxyAuthLifetime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#proxy_auth_lifetime_timeout SystemGlobal#proxy_auth_lifetime_timeout}
  */
  readonly proxyAuthLifetimeTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#proxy_auth_timeout SystemGlobal#proxy_auth_timeout}
  */
  readonly proxyAuthTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#proxy_cert_use_mgmt_vdom SystemGlobal#proxy_cert_use_mgmt_vdom}
  */
  readonly proxyCertUseMgmtVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#proxy_cipher_hardware_acceleration SystemGlobal#proxy_cipher_hardware_acceleration}
  */
  readonly proxyCipherHardwareAcceleration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#proxy_hardware_acceleration SystemGlobal#proxy_hardware_acceleration}
  */
  readonly proxyHardwareAcceleration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#proxy_keep_alive_mode SystemGlobal#proxy_keep_alive_mode}
  */
  readonly proxyKeepAliveMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#proxy_kxp_hardware_acceleration SystemGlobal#proxy_kxp_hardware_acceleration}
  */
  readonly proxyKxpHardwareAcceleration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#proxy_re_authentication_mode SystemGlobal#proxy_re_authentication_mode}
  */
  readonly proxyReAuthenticationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#proxy_re_authentication_time SystemGlobal#proxy_re_authentication_time}
  */
  readonly proxyReAuthenticationTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#proxy_resource_mode SystemGlobal#proxy_resource_mode}
  */
  readonly proxyResourceMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#proxy_worker_count SystemGlobal#proxy_worker_count}
  */
  readonly proxyWorkerCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#purdue_level SystemGlobal#purdue_level}
  */
  readonly purdueLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#quic_ack_thresold SystemGlobal#quic_ack_thresold}
  */
  readonly quicAckThresold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#quic_congestion_control_algo SystemGlobal#quic_congestion_control_algo}
  */
  readonly quicCongestionControlAlgo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#quic_max_datagram_size SystemGlobal#quic_max_datagram_size}
  */
  readonly quicMaxDatagramSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#quic_pmtud SystemGlobal#quic_pmtud}
  */
  readonly quicPmtud?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#quic_tls_handshake_timeout SystemGlobal#quic_tls_handshake_timeout}
  */
  readonly quicTlsHandshakeTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#quic_udp_payload_size_shaping_per_cid SystemGlobal#quic_udp_payload_size_shaping_per_cid}
  */
  readonly quicUdpPayloadSizeShapingPerCid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#radius_port SystemGlobal#radius_port}
  */
  readonly radiusPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#reboot_upon_config_restore SystemGlobal#reboot_upon_config_restore}
  */
  readonly rebootUponConfigRestore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#refresh SystemGlobal#refresh}
  */
  readonly refresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#remoteauthtimeout SystemGlobal#remoteauthtimeout}
  */
  readonly remoteauthtimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#reset_sessionless_tcp SystemGlobal#reset_sessionless_tcp}
  */
  readonly resetSessionlessTcp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#rest_api_key_url_query SystemGlobal#rest_api_key_url_query}
  */
  readonly restApiKeyUrlQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#restart_time SystemGlobal#restart_time}
  */
  readonly restartTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#revision_backup_on_logout SystemGlobal#revision_backup_on_logout}
  */
  readonly revisionBackupOnLogout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#revision_image_auto_backup SystemGlobal#revision_image_auto_backup}
  */
  readonly revisionImageAutoBackup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#router_affinity SystemGlobal#router_affinity}
  */
  readonly routerAffinity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#scanunit_count SystemGlobal#scanunit_count}
  */
  readonly scanunitCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#scim_http_port SystemGlobal#scim_http_port}
  */
  readonly scimHttpPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#scim_https_port SystemGlobal#scim_https_port}
  */
  readonly scimHttpsPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#scim_server_cert SystemGlobal#scim_server_cert}
  */
  readonly scimServerCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#security_rating_result_submission SystemGlobal#security_rating_result_submission}
  */
  readonly securityRatingResultSubmission?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#security_rating_run_on_schedule SystemGlobal#security_rating_run_on_schedule}
  */
  readonly securityRatingRunOnSchedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#send_pmtu_icmp SystemGlobal#send_pmtu_icmp}
  */
  readonly sendPmtuIcmp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#sflowd_max_children_num SystemGlobal#sflowd_max_children_num}
  */
  readonly sflowdMaxChildrenNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#snat_route_change SystemGlobal#snat_route_change}
  */
  readonly snatRouteChange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#special_file_23_support SystemGlobal#special_file_23_support}
  */
  readonly specialFile23Support?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#speedtest_server SystemGlobal#speedtest_server}
  */
  readonly speedtestServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#speedtestd_ctrl_port SystemGlobal#speedtestd_ctrl_port}
  */
  readonly speedtestdCtrlPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#speedtestd_server_port SystemGlobal#speedtestd_server_port}
  */
  readonly speedtestdServerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#split_port SystemGlobal#split_port}
  */
  readonly splitPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#ssd_trim_date SystemGlobal#ssd_trim_date}
  */
  readonly ssdTrimDate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#ssd_trim_freq SystemGlobal#ssd_trim_freq}
  */
  readonly ssdTrimFreq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#ssd_trim_hour SystemGlobal#ssd_trim_hour}
  */
  readonly ssdTrimHour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#ssd_trim_min SystemGlobal#ssd_trim_min}
  */
  readonly ssdTrimMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#ssd_trim_weekday SystemGlobal#ssd_trim_weekday}
  */
  readonly ssdTrimWeekday?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#ssh_cbc_cipher SystemGlobal#ssh_cbc_cipher}
  */
  readonly sshCbcCipher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#ssh_enc_algo SystemGlobal#ssh_enc_algo}
  */
  readonly sshEncAlgo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#ssh_hmac_md5 SystemGlobal#ssh_hmac_md5}
  */
  readonly sshHmacMd5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#ssh_hostkey SystemGlobal#ssh_hostkey}
  */
  readonly sshHostkey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#ssh_hostkey_algo SystemGlobal#ssh_hostkey_algo}
  */
  readonly sshHostkeyAlgo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#ssh_hostkey_override SystemGlobal#ssh_hostkey_override}
  */
  readonly sshHostkeyOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#ssh_hostkey_password SystemGlobal#ssh_hostkey_password}
  */
  readonly sshHostkeyPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#ssh_kex_algo SystemGlobal#ssh_kex_algo}
  */
  readonly sshKexAlgo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#ssh_kex_sha1 SystemGlobal#ssh_kex_sha1}
  */
  readonly sshKexSha1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#ssh_mac_algo SystemGlobal#ssh_mac_algo}
  */
  readonly sshMacAlgo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#ssh_mac_weak SystemGlobal#ssh_mac_weak}
  */
  readonly sshMacWeak?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#ssl_min_proto_version SystemGlobal#ssl_min_proto_version}
  */
  readonly sslMinProtoVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#ssl_static_key_ciphers SystemGlobal#ssl_static_key_ciphers}
  */
  readonly sslStaticKeyCiphers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#sslvpn_affinity SystemGlobal#sslvpn_affinity}
  */
  readonly sslvpnAffinity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#sslvpn_cipher_hardware_acceleration SystemGlobal#sslvpn_cipher_hardware_acceleration}
  */
  readonly sslvpnCipherHardwareAcceleration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#sslvpn_ems_sn_check SystemGlobal#sslvpn_ems_sn_check}
  */
  readonly sslvpnEmsSnCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#sslvpn_kxp_hardware_acceleration SystemGlobal#sslvpn_kxp_hardware_acceleration}
  */
  readonly sslvpnKxpHardwareAcceleration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#sslvpn_max_worker_count SystemGlobal#sslvpn_max_worker_count}
  */
  readonly sslvpnMaxWorkerCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#sslvpn_plugin_version_check SystemGlobal#sslvpn_plugin_version_check}
  */
  readonly sslvpnPluginVersionCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#sslvpn_web_mode SystemGlobal#sslvpn_web_mode}
  */
  readonly sslvpnWebMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#strict_dirty_session_check SystemGlobal#strict_dirty_session_check}
  */
  readonly strictDirtySessionCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#strong_crypto SystemGlobal#strong_crypto}
  */
  readonly strongCrypto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#switch_controller SystemGlobal#switch_controller}
  */
  readonly switchController?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#switch_controller_reserved_network SystemGlobal#switch_controller_reserved_network}
  */
  readonly switchControllerReservedNetwork?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#sys_perf_log_interval SystemGlobal#sys_perf_log_interval}
  */
  readonly sysPerfLogInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#syslog_affinity SystemGlobal#syslog_affinity}
  */
  readonly syslogAffinity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#tcp_halfclose_timer SystemGlobal#tcp_halfclose_timer}
  */
  readonly tcpHalfcloseTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#tcp_halfopen_timer SystemGlobal#tcp_halfopen_timer}
  */
  readonly tcpHalfopenTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#tcp_option SystemGlobal#tcp_option}
  */
  readonly tcpOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#tcp_rst_timer SystemGlobal#tcp_rst_timer}
  */
  readonly tcpRstTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#tcp_timewait_timer SystemGlobal#tcp_timewait_timer}
  */
  readonly tcpTimewaitTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#tftp SystemGlobal#tftp}
  */
  readonly tftp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#timezone SystemGlobal#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#tls_session_cache SystemGlobal#tls_session_cache}
  */
  readonly tlsSessionCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#tp_mc_skip_policy SystemGlobal#tp_mc_skip_policy}
  */
  readonly tpMcSkipPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#traffic_priority SystemGlobal#traffic_priority}
  */
  readonly trafficPriority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#traffic_priority_level SystemGlobal#traffic_priority_level}
  */
  readonly trafficPriorityLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#two_factor_email_expiry SystemGlobal#two_factor_email_expiry}
  */
  readonly twoFactorEmailExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#two_factor_fac_expiry SystemGlobal#two_factor_fac_expiry}
  */
  readonly twoFactorFacExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#two_factor_ftk_expiry SystemGlobal#two_factor_ftk_expiry}
  */
  readonly twoFactorFtkExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#two_factor_ftm_expiry SystemGlobal#two_factor_ftm_expiry}
  */
  readonly twoFactorFtmExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#two_factor_sms_expiry SystemGlobal#two_factor_sms_expiry}
  */
  readonly twoFactorSmsExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#udp_idle_timer SystemGlobal#udp_idle_timer}
  */
  readonly udpIdleTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#upgrade_report SystemGlobal#upgrade_report}
  */
  readonly upgradeReport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#url_filter_affinity SystemGlobal#url_filter_affinity}
  */
  readonly urlFilterAffinity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#url_filter_count SystemGlobal#url_filter_count}
  */
  readonly urlFilterCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#user_device_store_max_device_mem SystemGlobal#user_device_store_max_device_mem}
  */
  readonly userDeviceStoreMaxDeviceMem?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#user_device_store_max_devices SystemGlobal#user_device_store_max_devices}
  */
  readonly userDeviceStoreMaxDevices?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#user_device_store_max_unified_mem SystemGlobal#user_device_store_max_unified_mem}
  */
  readonly userDeviceStoreMaxUnifiedMem?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#user_device_store_max_users SystemGlobal#user_device_store_max_users}
  */
  readonly userDeviceStoreMaxUsers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#user_history_password_threshold SystemGlobal#user_history_password_threshold}
  */
  readonly userHistoryPasswordThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#user_server_cert SystemGlobal#user_server_cert}
  */
  readonly userServerCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#vdom_admin SystemGlobal#vdom_admin}
  */
  readonly vdomAdmin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#vdom_mode SystemGlobal#vdom_mode}
  */
  readonly vdomMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#vdomparam SystemGlobal#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#vip_arp_range SystemGlobal#vip_arp_range}
  */
  readonly vipArpRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#virtual_server_count SystemGlobal#virtual_server_count}
  */
  readonly virtualServerCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#virtual_server_hardware_acceleration SystemGlobal#virtual_server_hardware_acceleration}
  */
  readonly virtualServerHardwareAcceleration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#virtual_switch_vlan SystemGlobal#virtual_switch_vlan}
  */
  readonly virtualSwitchVlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#vpn_ems_sn_check SystemGlobal#vpn_ems_sn_check}
  */
  readonly vpnEmsSnCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#wad_affinity SystemGlobal#wad_affinity}
  */
  readonly wadAffinity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#wad_csvc_cs_count SystemGlobal#wad_csvc_cs_count}
  */
  readonly wadCsvcCsCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#wad_csvc_db_count SystemGlobal#wad_csvc_db_count}
  */
  readonly wadCsvcDbCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#wad_memory_change_granularity SystemGlobal#wad_memory_change_granularity}
  */
  readonly wadMemoryChangeGranularity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#wad_p2s_max_body_size SystemGlobal#wad_p2s_max_body_size}
  */
  readonly wadP2SMaxBodySize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#wad_restart_end_time SystemGlobal#wad_restart_end_time}
  */
  readonly wadRestartEndTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#wad_restart_mode SystemGlobal#wad_restart_mode}
  */
  readonly wadRestartMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#wad_restart_start_time SystemGlobal#wad_restart_start_time}
  */
  readonly wadRestartStartTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#wad_source_affinity SystemGlobal#wad_source_affinity}
  */
  readonly wadSourceAffinity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#wad_worker_count SystemGlobal#wad_worker_count}
  */
  readonly wadWorkerCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#wifi_ca_certificate SystemGlobal#wifi_ca_certificate}
  */
  readonly wifiCaCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#wifi_certificate SystemGlobal#wifi_certificate}
  */
  readonly wifiCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#wimax_4g_usb SystemGlobal#wimax_4g_usb}
  */
  readonly wimax4GUsb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#wireless_controller SystemGlobal#wireless_controller}
  */
  readonly wirelessController?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#wireless_controller_port SystemGlobal#wireless_controller_port}
  */
  readonly wirelessControllerPort?: number;
  /**
  * internet_service_download_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#internet_service_download_list SystemGlobal#internet_service_download_list}
  */
  readonly internetServiceDownloadList?: SystemGlobalInternetServiceDownloadListStruct[] | cdktf.IResolvable;
}
export interface SystemGlobalInternetServiceDownloadListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#id SystemGlobal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function systemGlobalInternetServiceDownloadListStructToTerraform(struct?: SystemGlobalInternetServiceDownloadListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function systemGlobalInternetServiceDownloadListStructToHclTerraform(struct?: SystemGlobalInternetServiceDownloadListStruct | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemGlobalInternetServiceDownloadListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemGlobalInternetServiceDownloadListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemGlobalInternetServiceDownloadListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
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
}

export class SystemGlobalInternetServiceDownloadListStructList extends cdktf.ComplexList {
  public internalValue? : SystemGlobalInternetServiceDownloadListStruct[] | cdktf.IResolvable

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
  public get(index: number): SystemGlobalInternetServiceDownloadListStructOutputReference {
    return new SystemGlobalInternetServiceDownloadListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global fortios_system_global}
*/
export class SystemGlobal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_global";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemGlobal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemGlobal to import
  * @param importFromId The id of the existing SystemGlobal that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemGlobal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_global", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_global fortios_system_global} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemGlobalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemGlobalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_global',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminConcurrent = config.adminConcurrent;
    this._adminConsoleTimeout = config.adminConsoleTimeout;
    this._adminForticloudSsoDefaultProfile = config.adminForticloudSsoDefaultProfile;
    this._adminForticloudSsoLogin = config.adminForticloudSsoLogin;
    this._adminHost = config.adminHost;
    this._adminHstsMaxAge = config.adminHstsMaxAge;
    this._adminHttpsPkiRequired = config.adminHttpsPkiRequired;
    this._adminHttpsRedirect = config.adminHttpsRedirect;
    this._adminHttpsSslBannedCiphers = config.adminHttpsSslBannedCiphers;
    this._adminHttpsSslCiphersuites = config.adminHttpsSslCiphersuites;
    this._adminHttpsSslVersions = config.adminHttpsSslVersions;
    this._adminLockoutDuration = config.adminLockoutDuration;
    this._adminLockoutThreshold = config.adminLockoutThreshold;
    this._adminLoginMax = config.adminLoginMax;
    this._adminMaintainer = config.adminMaintainer;
    this._adminPort = config.adminPort;
    this._adminRestrictLocal = config.adminRestrictLocal;
    this._adminScp = config.adminScp;
    this._adminServerCert = config.adminServerCert;
    this._adminSport = config.adminSport;
    this._adminSshGraceTime = config.adminSshGraceTime;
    this._adminSshPassword = config.adminSshPassword;
    this._adminSshPort = config.adminSshPort;
    this._adminSshV1 = config.adminSshV1;
    this._adminTelnet = config.adminTelnet;
    this._adminTelnetPort = config.adminTelnetPort;
    this._admintimeout = config.admintimeout;
    this._alias = config.alias;
    this._allowTrafficRedirect = config.allowTrafficRedirect;
    this._antiReplay = config.antiReplay;
    this._applicationBandwidthTracking = config.applicationBandwidthTracking;
    this._arpMaxEntry = config.arpMaxEntry;
    this._asymroute = config.asymroute;
    this._authCert = config.authCert;
    this._authHttpPort = config.authHttpPort;
    this._authHttpsPort = config.authHttpsPort;
    this._authIkeSamlPort = config.authIkeSamlPort;
    this._authKeepalive = config.authKeepalive;
    this._authSessionAutoBackup = config.authSessionAutoBackup;
    this._authSessionAutoBackupInterval = config.authSessionAutoBackupInterval;
    this._authSessionLimit = config.authSessionLimit;
    this._autoAuthExtensionDevice = config.autoAuthExtensionDevice;
    this._autorunLogFsck = config.autorunLogFsck;
    this._avAffinity = config.avAffinity;
    this._avFailopen = config.avFailopen;
    this._avFailopenSession = config.avFailopenSession;
    this._batchCmdb = config.batchCmdb;
    this._bfdAffinity = config.bfdAffinity;
    this._blockSessionTimer = config.blockSessionTimer;
    this._brFdbMaxEntry = config.brFdbMaxEntry;
    this._certChainMax = config.certChainMax;
    this._cfgRevertTimeout = config.cfgRevertTimeout;
    this._cfgSave = config.cfgSave;
    this._checkProtocolHeader = config.checkProtocolHeader;
    this._checkResetRange = config.checkResetRange;
    this._cliAuditLog = config.cliAuditLog;
    this._cloudCommunication = config.cloudCommunication;
    this._cltCertReq = config.cltCertReq;
    this._cmdbsvrAffinity = config.cmdbsvrAffinity;
    this._complianceCheck = config.complianceCheck;
    this._complianceCheckTime = config.complianceCheckTime;
    this._cpuUseThreshold = config.cpuUseThreshold;
    this._csrCaAttribute = config.csrCaAttribute;
    this._dailyRestart = config.dailyRestart;
    this._defaultServiceSourcePort = config.defaultServiceSourcePort;
    this._delayTcpNpuSession = config.delayTcpNpuSession;
    this._deviceIdentificationActiveScanDelay = config.deviceIdentificationActiveScanDelay;
    this._deviceIdleTimeout = config.deviceIdleTimeout;
    this._dhParams = config.dhParams;
    this._dhcpLeaseBackupInterval = config.dhcpLeaseBackupInterval;
    this._dnsproxyWorkerCount = config.dnsproxyWorkerCount;
    this._dst = config.dst;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._earlyTcpNpuSession = config.earlyTcpNpuSession;
    this._editVdomPrompt = config.editVdomPrompt;
    this._endpointControlFdsAccess = config.endpointControlFdsAccess;
    this._endpointControlPortalPort = config.endpointControlPortalPort;
    this._extenderControllerReservedNetwork = config.extenderControllerReservedNetwork;
    this._failtime = config.failtime;
    this._fazDiskBufferSize = config.fazDiskBufferSize;
    this._fdsStatistics = config.fdsStatistics;
    this._fdsStatisticsPeriod = config.fdsStatisticsPeriod;
    this._fecPort = config.fecPort;
    this._fgdAlertSubscription = config.fgdAlertSubscription;
    this._forticonverterConfigUpload = config.forticonverterConfigUpload;
    this._forticonverterIntegration = config.forticonverterIntegration;
    this._fortiextender = config.fortiextender;
    this._fortiextenderDataPort = config.fortiextenderDataPort;
    this._fortiextenderDiscoveryLockdown = config.fortiextenderDiscoveryLockdown;
    this._fortiextenderProvisionOnAuthorization = config.fortiextenderProvisionOnAuthorization;
    this._fortiextenderVlanMode = config.fortiextenderVlanMode;
    this._fortigslbIntegration = config.fortigslbIntegration;
    this._fortiipamIntegration = config.fortiipamIntegration;
    this._fortiservicePort = config.fortiservicePort;
    this._fortitokenCloud = config.fortitokenCloud;
    this._fortitokenCloudPushStatus = config.fortitokenCloudPushStatus;
    this._fortitokenCloudRegion = config.fortitokenCloudRegion;
    this._fortitokenCloudSyncInterval = config.fortitokenCloudSyncInterval;
    this._getAllTables = config.fetchAllTables;
    this._guiAllowDefaultHostname = config.guiAllowDefaultHostname;
    this._guiAllowIncompatibleFabricFgt = config.guiAllowIncompatibleFabricFgt;
    this._guiAppDetectionSdwan = config.guiAppDetectionSdwan;
    this._guiAutoUpgradeSetupWarning = config.guiAutoUpgradeSetupWarning;
    this._guiCdnDomainOverride = config.guiCdnDomainOverride;
    this._guiCdnUsage = config.guiCdnUsage;
    this._guiCertificates = config.guiCertificates;
    this._guiCustomLanguage = config.guiCustomLanguage;
    this._guiDateFormat = config.guiDateFormat;
    this._guiDateTimeSource = config.guiDateTimeSource;
    this._guiDeviceLatitude = config.guiDeviceLatitude;
    this._guiDeviceLongitude = config.guiDeviceLongitude;
    this._guiDisplayHostname = config.guiDisplayHostname;
    this._guiFirmwareUpgradeSetupWarning = config.guiFirmwareUpgradeSetupWarning;
    this._guiFirmwareUpgradeWarning = config.guiFirmwareUpgradeWarning;
    this._guiForticareRegistrationSetupWarning = config.guiForticareRegistrationSetupWarning;
    this._guiFortigateCloudSandbox = config.guiFortigateCloudSandbox;
    this._guiFortiguardResourceFetch = config.guiFortiguardResourceFetch;
    this._guiFortisandboxCloud = config.guiFortisandboxCloud;
    this._guiIpv6 = config.guiIpv6;
    this._guiLinesPerPage = config.guiLinesPerPage;
    this._guiLocalOut = config.guiLocalOut;
    this._guiReplacementMessageGroups = config.guiReplacementMessageGroups;
    this._guiRestApiCache = config.guiRestApiCache;
    this._guiTheme = config.guiTheme;
    this._guiWirelessOpensecurity = config.guiWirelessOpensecurity;
    this._guiWorkflowManagement = config.guiWorkflowManagement;
    this._haAffinity = config.haAffinity;
    this._honorDf = config.honorDf;
    this._hostname = config.hostname;
    this._httpdMaxWorkerCount = config.httpdMaxWorkerCount;
    this._id = config.id;
    this._igmpStateLimit = config.igmpStateLimit;
    this._ikeEmbryonicLimit = config.ikeEmbryonicLimit;
    this._interfaceSubnetUsage = config.interfaceSubnetUsage;
    this._internetServiceDatabase = config.internetServiceDatabase;
    this._interval = config.interval;
    this._ipConflictDetection = config.ipConflictDetection;
    this._ipFragmentMemThresholds = config.ipFragmentMemThresholds;
    this._ipFragmentTimeout = config.ipFragmentTimeout;
    this._ipSrcPortRange = config.ipSrcPortRange;
    this._ipsAffinity = config.ipsAffinity;
    this._ipsecAsicOffload = config.ipsecAsicOffload;
    this._ipsecHaSeqjumpRate = config.ipsecHaSeqjumpRate;
    this._ipsecHmacOffload = config.ipsecHmacOffload;
    this._ipsecQatOffload = config.ipsecQatOffload;
    this._ipsecRoundRobin = config.ipsecRoundRobin;
    this._ipsecSoftDecAsync = config.ipsecSoftDecAsync;
    this._ipv6AcceptDad = config.ipv6AcceptDad;
    this._ipv6AllowAnycastProbe = config.ipv6AllowAnycastProbe;
    this._ipv6AllowLocalInSilentDrop = config.ipv6AllowLocalInSilentDrop;
    this._ipv6AllowLocalInSlientDrop = config.ipv6AllowLocalInSlientDrop;
    this._ipv6AllowMulticastProbe = config.ipv6AllowMulticastProbe;
    this._ipv6AllowTrafficRedirect = config.ipv6AllowTrafficRedirect;
    this._ipv6FragmentTimeout = config.ipv6FragmentTimeout;
    this._ipv6SnatRouteChange = config.ipv6SnatRouteChange;
    this._irqTimeAccounting = config.irqTimeAccounting;
    this._language = config.language;
    this._ldapconntimeout = config.ldapconntimeout;
    this._lldpReception = config.lldpReception;
    this._lldpTransmission = config.lldpTransmission;
    this._logSingleCpuHigh = config.logSingleCpuHigh;
    this._logSslConnection = config.logSslConnection;
    this._logUuidAddress = config.logUuidAddress;
    this._logUuidPolicy = config.logUuidPolicy;
    this._loginTimestamp = config.loginTimestamp;
    this._longVdomName = config.longVdomName;
    this._managementIp = config.managementIp;
    this._managementPort = config.managementPort;
    this._managementPortUseAdminSport = config.managementPortUseAdminSport;
    this._managementVdom = config.managementVdom;
    this._maxDlpstatMemory = config.maxDlpstatMemory;
    this._maxRouteCacheSize = config.maxRouteCacheSize;
    this._mcTtlNotchange = config.mcTtlNotchange;
    this._memoryUseThresholdExtreme = config.memoryUseThresholdExtreme;
    this._memoryUseThresholdGreen = config.memoryUseThresholdGreen;
    this._memoryUseThresholdRed = config.memoryUseThresholdRed;
    this._miglogAffinity = config.miglogAffinity;
    this._miglogdChildren = config.miglogdChildren;
    this._multiFactorAuthentication = config.multiFactorAuthentication;
    this._multicastForward = config.multicastForward;
    this._ndpMaxEntry = config.ndpMaxEntry;
    this._npuNeighborUpdate = config.npuNeighborUpdate;
    this._perUserBal = config.perUserBal;
    this._perUserBwl = config.perUserBwl;
    this._pmtuDiscovery = config.pmtuDiscovery;
    this._policyAuthConcurrent = config.policyAuthConcurrent;
    this._postLoginBanner = config.postLoginBanner;
    this._preLoginBanner = config.preLoginBanner;
    this._privateDataEncryption = config.privateDataEncryption;
    this._proxyAuthLifetime = config.proxyAuthLifetime;
    this._proxyAuthLifetimeTimeout = config.proxyAuthLifetimeTimeout;
    this._proxyAuthTimeout = config.proxyAuthTimeout;
    this._proxyCertUseMgmtVdom = config.proxyCertUseMgmtVdom;
    this._proxyCipherHardwareAcceleration = config.proxyCipherHardwareAcceleration;
    this._proxyHardwareAcceleration = config.proxyHardwareAcceleration;
    this._proxyKeepAliveMode = config.proxyKeepAliveMode;
    this._proxyKxpHardwareAcceleration = config.proxyKxpHardwareAcceleration;
    this._proxyReAuthenticationMode = config.proxyReAuthenticationMode;
    this._proxyReAuthenticationTime = config.proxyReAuthenticationTime;
    this._proxyResourceMode = config.proxyResourceMode;
    this._proxyWorkerCount = config.proxyWorkerCount;
    this._purdueLevel = config.purdueLevel;
    this._quicAckThresold = config.quicAckThresold;
    this._quicCongestionControlAlgo = config.quicCongestionControlAlgo;
    this._quicMaxDatagramSize = config.quicMaxDatagramSize;
    this._quicPmtud = config.quicPmtud;
    this._quicTlsHandshakeTimeout = config.quicTlsHandshakeTimeout;
    this._quicUdpPayloadSizeShapingPerCid = config.quicUdpPayloadSizeShapingPerCid;
    this._radiusPort = config.radiusPort;
    this._rebootUponConfigRestore = config.rebootUponConfigRestore;
    this._refresh = config.refresh;
    this._remoteauthtimeout = config.remoteauthtimeout;
    this._resetSessionlessTcp = config.resetSessionlessTcp;
    this._restApiKeyUrlQuery = config.restApiKeyUrlQuery;
    this._restartTime = config.restartTime;
    this._revisionBackupOnLogout = config.revisionBackupOnLogout;
    this._revisionImageAutoBackup = config.revisionImageAutoBackup;
    this._routerAffinity = config.routerAffinity;
    this._scanunitCount = config.scanunitCount;
    this._scimHttpPort = config.scimHttpPort;
    this._scimHttpsPort = config.scimHttpsPort;
    this._scimServerCert = config.scimServerCert;
    this._securityRatingResultSubmission = config.securityRatingResultSubmission;
    this._securityRatingRunOnSchedule = config.securityRatingRunOnSchedule;
    this._sendPmtuIcmp = config.sendPmtuIcmp;
    this._sflowdMaxChildrenNum = config.sflowdMaxChildrenNum;
    this._snatRouteChange = config.snatRouteChange;
    this._specialFile23Support = config.specialFile23Support;
    this._speedtestServer = config.speedtestServer;
    this._speedtestdCtrlPort = config.speedtestdCtrlPort;
    this._speedtestdServerPort = config.speedtestdServerPort;
    this._splitPort = config.splitPort;
    this._ssdTrimDate = config.ssdTrimDate;
    this._ssdTrimFreq = config.ssdTrimFreq;
    this._ssdTrimHour = config.ssdTrimHour;
    this._ssdTrimMin = config.ssdTrimMin;
    this._ssdTrimWeekday = config.ssdTrimWeekday;
    this._sshCbcCipher = config.sshCbcCipher;
    this._sshEncAlgo = config.sshEncAlgo;
    this._sshHmacMd5 = config.sshHmacMd5;
    this._sshHostkey = config.sshHostkey;
    this._sshHostkeyAlgo = config.sshHostkeyAlgo;
    this._sshHostkeyOverride = config.sshHostkeyOverride;
    this._sshHostkeyPassword = config.sshHostkeyPassword;
    this._sshKexAlgo = config.sshKexAlgo;
    this._sshKexSha1 = config.sshKexSha1;
    this._sshMacAlgo = config.sshMacAlgo;
    this._sshMacWeak = config.sshMacWeak;
    this._sslMinProtoVersion = config.sslMinProtoVersion;
    this._sslStaticKeyCiphers = config.sslStaticKeyCiphers;
    this._sslvpnAffinity = config.sslvpnAffinity;
    this._sslvpnCipherHardwareAcceleration = config.sslvpnCipherHardwareAcceleration;
    this._sslvpnEmsSnCheck = config.sslvpnEmsSnCheck;
    this._sslvpnKxpHardwareAcceleration = config.sslvpnKxpHardwareAcceleration;
    this._sslvpnMaxWorkerCount = config.sslvpnMaxWorkerCount;
    this._sslvpnPluginVersionCheck = config.sslvpnPluginVersionCheck;
    this._sslvpnWebMode = config.sslvpnWebMode;
    this._strictDirtySessionCheck = config.strictDirtySessionCheck;
    this._strongCrypto = config.strongCrypto;
    this._switchController = config.switchController;
    this._switchControllerReservedNetwork = config.switchControllerReservedNetwork;
    this._sysPerfLogInterval = config.sysPerfLogInterval;
    this._syslogAffinity = config.syslogAffinity;
    this._tcpHalfcloseTimer = config.tcpHalfcloseTimer;
    this._tcpHalfopenTimer = config.tcpHalfopenTimer;
    this._tcpOption = config.tcpOption;
    this._tcpRstTimer = config.tcpRstTimer;
    this._tcpTimewaitTimer = config.tcpTimewaitTimer;
    this._tftp = config.tftp;
    this._timezone = config.timezone;
    this._tlsSessionCache = config.tlsSessionCache;
    this._tpMcSkipPolicy = config.tpMcSkipPolicy;
    this._trafficPriority = config.trafficPriority;
    this._trafficPriorityLevel = config.trafficPriorityLevel;
    this._twoFactorEmailExpiry = config.twoFactorEmailExpiry;
    this._twoFactorFacExpiry = config.twoFactorFacExpiry;
    this._twoFactorFtkExpiry = config.twoFactorFtkExpiry;
    this._twoFactorFtmExpiry = config.twoFactorFtmExpiry;
    this._twoFactorSmsExpiry = config.twoFactorSmsExpiry;
    this._udpIdleTimer = config.udpIdleTimer;
    this._upgradeReport = config.upgradeReport;
    this._urlFilterAffinity = config.urlFilterAffinity;
    this._urlFilterCount = config.urlFilterCount;
    this._userDeviceStoreMaxDeviceMem = config.userDeviceStoreMaxDeviceMem;
    this._userDeviceStoreMaxDevices = config.userDeviceStoreMaxDevices;
    this._userDeviceStoreMaxUnifiedMem = config.userDeviceStoreMaxUnifiedMem;
    this._userDeviceStoreMaxUsers = config.userDeviceStoreMaxUsers;
    this._userHistoryPasswordThreshold = config.userHistoryPasswordThreshold;
    this._userServerCert = config.userServerCert;
    this._vdomAdmin = config.vdomAdmin;
    this._vdomMode = config.vdomMode;
    this._vdomparam = config.vdomparam;
    this._vipArpRange = config.vipArpRange;
    this._virtualServerCount = config.virtualServerCount;
    this._virtualServerHardwareAcceleration = config.virtualServerHardwareAcceleration;
    this._virtualSwitchVlan = config.virtualSwitchVlan;
    this._vpnEmsSnCheck = config.vpnEmsSnCheck;
    this._wadAffinity = config.wadAffinity;
    this._wadCsvcCsCount = config.wadCsvcCsCount;
    this._wadCsvcDbCount = config.wadCsvcDbCount;
    this._wadMemoryChangeGranularity = config.wadMemoryChangeGranularity;
    this._wadP2SMaxBodySize = config.wadP2SMaxBodySize;
    this._wadRestartEndTime = config.wadRestartEndTime;
    this._wadRestartMode = config.wadRestartMode;
    this._wadRestartStartTime = config.wadRestartStartTime;
    this._wadSourceAffinity = config.wadSourceAffinity;
    this._wadWorkerCount = config.wadWorkerCount;
    this._wifiCaCertificate = config.wifiCaCertificate;
    this._wifiCertificate = config.wifiCertificate;
    this._wimax4GUsb = config.wimax4GUsb;
    this._wirelessController = config.wirelessController;
    this._wirelessControllerPort = config.wirelessControllerPort;
    this._internetServiceDownloadList.internalValue = config.internetServiceDownloadList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_concurrent - computed: true, optional: true, required: false
  private _adminConcurrent?: string; 
  public get adminConcurrent() {
    return this.getStringAttribute('admin_concurrent');
  }
  public set adminConcurrent(value: string) {
    this._adminConcurrent = value;
  }
  public resetAdminConcurrent() {
    this._adminConcurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminConcurrentInput() {
    return this._adminConcurrent;
  }

  // admin_console_timeout - computed: false, optional: true, required: false
  private _adminConsoleTimeout?: number; 
  public get adminConsoleTimeout() {
    return this.getNumberAttribute('admin_console_timeout');
  }
  public set adminConsoleTimeout(value: number) {
    this._adminConsoleTimeout = value;
  }
  public resetAdminConsoleTimeout() {
    this._adminConsoleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminConsoleTimeoutInput() {
    return this._adminConsoleTimeout;
  }

  // admin_forticloud_sso_default_profile - computed: false, optional: true, required: false
  private _adminForticloudSsoDefaultProfile?: string; 
  public get adminForticloudSsoDefaultProfile() {
    return this.getStringAttribute('admin_forticloud_sso_default_profile');
  }
  public set adminForticloudSsoDefaultProfile(value: string) {
    this._adminForticloudSsoDefaultProfile = value;
  }
  public resetAdminForticloudSsoDefaultProfile() {
    this._adminForticloudSsoDefaultProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminForticloudSsoDefaultProfileInput() {
    return this._adminForticloudSsoDefaultProfile;
  }

  // admin_forticloud_sso_login - computed: true, optional: true, required: false
  private _adminForticloudSsoLogin?: string; 
  public get adminForticloudSsoLogin() {
    return this.getStringAttribute('admin_forticloud_sso_login');
  }
  public set adminForticloudSsoLogin(value: string) {
    this._adminForticloudSsoLogin = value;
  }
  public resetAdminForticloudSsoLogin() {
    this._adminForticloudSsoLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminForticloudSsoLoginInput() {
    return this._adminForticloudSsoLogin;
  }

  // admin_host - computed: false, optional: true, required: false
  private _adminHost?: string; 
  public get adminHost() {
    return this.getStringAttribute('admin_host');
  }
  public set adminHost(value: string) {
    this._adminHost = value;
  }
  public resetAdminHost() {
    this._adminHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminHostInput() {
    return this._adminHost;
  }

  // admin_hsts_max_age - computed: true, optional: true, required: false
  private _adminHstsMaxAge?: number; 
  public get adminHstsMaxAge() {
    return this.getNumberAttribute('admin_hsts_max_age');
  }
  public set adminHstsMaxAge(value: number) {
    this._adminHstsMaxAge = value;
  }
  public resetAdminHstsMaxAge() {
    this._adminHstsMaxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminHstsMaxAgeInput() {
    return this._adminHstsMaxAge;
  }

  // admin_https_pki_required - computed: true, optional: true, required: false
  private _adminHttpsPkiRequired?: string; 
  public get adminHttpsPkiRequired() {
    return this.getStringAttribute('admin_https_pki_required');
  }
  public set adminHttpsPkiRequired(value: string) {
    this._adminHttpsPkiRequired = value;
  }
  public resetAdminHttpsPkiRequired() {
    this._adminHttpsPkiRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminHttpsPkiRequiredInput() {
    return this._adminHttpsPkiRequired;
  }

  // admin_https_redirect - computed: true, optional: true, required: false
  private _adminHttpsRedirect?: string; 
  public get adminHttpsRedirect() {
    return this.getStringAttribute('admin_https_redirect');
  }
  public set adminHttpsRedirect(value: string) {
    this._adminHttpsRedirect = value;
  }
  public resetAdminHttpsRedirect() {
    this._adminHttpsRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminHttpsRedirectInput() {
    return this._adminHttpsRedirect;
  }

  // admin_https_ssl_banned_ciphers - computed: false, optional: true, required: false
  private _adminHttpsSslBannedCiphers?: string; 
  public get adminHttpsSslBannedCiphers() {
    return this.getStringAttribute('admin_https_ssl_banned_ciphers');
  }
  public set adminHttpsSslBannedCiphers(value: string) {
    this._adminHttpsSslBannedCiphers = value;
  }
  public resetAdminHttpsSslBannedCiphers() {
    this._adminHttpsSslBannedCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminHttpsSslBannedCiphersInput() {
    return this._adminHttpsSslBannedCiphers;
  }

  // admin_https_ssl_ciphersuites - computed: true, optional: true, required: false
  private _adminHttpsSslCiphersuites?: string; 
  public get adminHttpsSslCiphersuites() {
    return this.getStringAttribute('admin_https_ssl_ciphersuites');
  }
  public set adminHttpsSslCiphersuites(value: string) {
    this._adminHttpsSslCiphersuites = value;
  }
  public resetAdminHttpsSslCiphersuites() {
    this._adminHttpsSslCiphersuites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminHttpsSslCiphersuitesInput() {
    return this._adminHttpsSslCiphersuites;
  }

  // admin_https_ssl_versions - computed: true, optional: true, required: false
  private _adminHttpsSslVersions?: string; 
  public get adminHttpsSslVersions() {
    return this.getStringAttribute('admin_https_ssl_versions');
  }
  public set adminHttpsSslVersions(value: string) {
    this._adminHttpsSslVersions = value;
  }
  public resetAdminHttpsSslVersions() {
    this._adminHttpsSslVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminHttpsSslVersionsInput() {
    return this._adminHttpsSslVersions;
  }

  // admin_lockout_duration - computed: true, optional: true, required: false
  private _adminLockoutDuration?: number; 
  public get adminLockoutDuration() {
    return this.getNumberAttribute('admin_lockout_duration');
  }
  public set adminLockoutDuration(value: number) {
    this._adminLockoutDuration = value;
  }
  public resetAdminLockoutDuration() {
    this._adminLockoutDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminLockoutDurationInput() {
    return this._adminLockoutDuration;
  }

  // admin_lockout_threshold - computed: true, optional: true, required: false
  private _adminLockoutThreshold?: number; 
  public get adminLockoutThreshold() {
    return this.getNumberAttribute('admin_lockout_threshold');
  }
  public set adminLockoutThreshold(value: number) {
    this._adminLockoutThreshold = value;
  }
  public resetAdminLockoutThreshold() {
    this._adminLockoutThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminLockoutThresholdInput() {
    return this._adminLockoutThreshold;
  }

  // admin_login_max - computed: true, optional: true, required: false
  private _adminLoginMax?: number; 
  public get adminLoginMax() {
    return this.getNumberAttribute('admin_login_max');
  }
  public set adminLoginMax(value: number) {
    this._adminLoginMax = value;
  }
  public resetAdminLoginMax() {
    this._adminLoginMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminLoginMaxInput() {
    return this._adminLoginMax;
  }

  // admin_maintainer - computed: true, optional: true, required: false
  private _adminMaintainer?: string; 
  public get adminMaintainer() {
    return this.getStringAttribute('admin_maintainer');
  }
  public set adminMaintainer(value: string) {
    this._adminMaintainer = value;
  }
  public resetAdminMaintainer() {
    this._adminMaintainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminMaintainerInput() {
    return this._adminMaintainer;
  }

  // admin_port - computed: true, optional: true, required: false
  private _adminPort?: number; 
  public get adminPort() {
    return this.getNumberAttribute('admin_port');
  }
  public set adminPort(value: number) {
    this._adminPort = value;
  }
  public resetAdminPort() {
    this._adminPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPortInput() {
    return this._adminPort;
  }

  // admin_restrict_local - computed: true, optional: true, required: false
  private _adminRestrictLocal?: string; 
  public get adminRestrictLocal() {
    return this.getStringAttribute('admin_restrict_local');
  }
  public set adminRestrictLocal(value: string) {
    this._adminRestrictLocal = value;
  }
  public resetAdminRestrictLocal() {
    this._adminRestrictLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminRestrictLocalInput() {
    return this._adminRestrictLocal;
  }

  // admin_scp - computed: true, optional: true, required: false
  private _adminScp?: string; 
  public get adminScp() {
    return this.getStringAttribute('admin_scp');
  }
  public set adminScp(value: string) {
    this._adminScp = value;
  }
  public resetAdminScp() {
    this._adminScp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminScpInput() {
    return this._adminScp;
  }

  // admin_server_cert - computed: true, optional: true, required: false
  private _adminServerCert?: string; 
  public get adminServerCert() {
    return this.getStringAttribute('admin_server_cert');
  }
  public set adminServerCert(value: string) {
    this._adminServerCert = value;
  }
  public resetAdminServerCert() {
    this._adminServerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminServerCertInput() {
    return this._adminServerCert;
  }

  // admin_sport - computed: true, optional: true, required: false
  private _adminSport?: number; 
  public get adminSport() {
    return this.getNumberAttribute('admin_sport');
  }
  public set adminSport(value: number) {
    this._adminSport = value;
  }
  public resetAdminSport() {
    this._adminSport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminSportInput() {
    return this._adminSport;
  }

  // admin_ssh_grace_time - computed: true, optional: true, required: false
  private _adminSshGraceTime?: number; 
  public get adminSshGraceTime() {
    return this.getNumberAttribute('admin_ssh_grace_time');
  }
  public set adminSshGraceTime(value: number) {
    this._adminSshGraceTime = value;
  }
  public resetAdminSshGraceTime() {
    this._adminSshGraceTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminSshGraceTimeInput() {
    return this._adminSshGraceTime;
  }

  // admin_ssh_password - computed: true, optional: true, required: false
  private _adminSshPassword?: string; 
  public get adminSshPassword() {
    return this.getStringAttribute('admin_ssh_password');
  }
  public set adminSshPassword(value: string) {
    this._adminSshPassword = value;
  }
  public resetAdminSshPassword() {
    this._adminSshPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminSshPasswordInput() {
    return this._adminSshPassword;
  }

  // admin_ssh_port - computed: true, optional: true, required: false
  private _adminSshPort?: number; 
  public get adminSshPort() {
    return this.getNumberAttribute('admin_ssh_port');
  }
  public set adminSshPort(value: number) {
    this._adminSshPort = value;
  }
  public resetAdminSshPort() {
    this._adminSshPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminSshPortInput() {
    return this._adminSshPort;
  }

  // admin_ssh_v1 - computed: true, optional: true, required: false
  private _adminSshV1?: string; 
  public get adminSshV1() {
    return this.getStringAttribute('admin_ssh_v1');
  }
  public set adminSshV1(value: string) {
    this._adminSshV1 = value;
  }
  public resetAdminSshV1() {
    this._adminSshV1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminSshV1Input() {
    return this._adminSshV1;
  }

  // admin_telnet - computed: true, optional: true, required: false
  private _adminTelnet?: string; 
  public get adminTelnet() {
    return this.getStringAttribute('admin_telnet');
  }
  public set adminTelnet(value: string) {
    this._adminTelnet = value;
  }
  public resetAdminTelnet() {
    this._adminTelnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminTelnetInput() {
    return this._adminTelnet;
  }

  // admin_telnet_port - computed: true, optional: true, required: false
  private _adminTelnetPort?: number; 
  public get adminTelnetPort() {
    return this.getNumberAttribute('admin_telnet_port');
  }
  public set adminTelnetPort(value: number) {
    this._adminTelnetPort = value;
  }
  public resetAdminTelnetPort() {
    this._adminTelnetPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminTelnetPortInput() {
    return this._adminTelnetPort;
  }

  // admintimeout - computed: true, optional: true, required: false
  private _admintimeout?: number; 
  public get admintimeout() {
    return this.getNumberAttribute('admintimeout');
  }
  public set admintimeout(value: number) {
    this._admintimeout = value;
  }
  public resetAdmintimeout() {
    this._admintimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get admintimeoutInput() {
    return this._admintimeout;
  }

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

  // allow_traffic_redirect - computed: true, optional: true, required: false
  private _allowTrafficRedirect?: string; 
  public get allowTrafficRedirect() {
    return this.getStringAttribute('allow_traffic_redirect');
  }
  public set allowTrafficRedirect(value: string) {
    this._allowTrafficRedirect = value;
  }
  public resetAllowTrafficRedirect() {
    this._allowTrafficRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowTrafficRedirectInput() {
    return this._allowTrafficRedirect;
  }

  // anti_replay - computed: true, optional: true, required: false
  private _antiReplay?: string; 
  public get antiReplay() {
    return this.getStringAttribute('anti_replay');
  }
  public set antiReplay(value: string) {
    this._antiReplay = value;
  }
  public resetAntiReplay() {
    this._antiReplay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiReplayInput() {
    return this._antiReplay;
  }

  // application_bandwidth_tracking - computed: true, optional: true, required: false
  private _applicationBandwidthTracking?: string; 
  public get applicationBandwidthTracking() {
    return this.getStringAttribute('application_bandwidth_tracking');
  }
  public set applicationBandwidthTracking(value: string) {
    this._applicationBandwidthTracking = value;
  }
  public resetApplicationBandwidthTracking() {
    this._applicationBandwidthTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationBandwidthTrackingInput() {
    return this._applicationBandwidthTracking;
  }

  // arp_max_entry - computed: true, optional: true, required: false
  private _arpMaxEntry?: number; 
  public get arpMaxEntry() {
    return this.getNumberAttribute('arp_max_entry');
  }
  public set arpMaxEntry(value: number) {
    this._arpMaxEntry = value;
  }
  public resetArpMaxEntry() {
    this._arpMaxEntry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpMaxEntryInput() {
    return this._arpMaxEntry;
  }

  // asymroute - computed: false, optional: true, required: false
  private _asymroute?: string; 
  public get asymroute() {
    return this.getStringAttribute('asymroute');
  }
  public set asymroute(value: string) {
    this._asymroute = value;
  }
  public resetAsymroute() {
    this._asymroute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asymrouteInput() {
    return this._asymroute;
  }

  // auth_cert - computed: true, optional: true, required: false
  private _authCert?: string; 
  public get authCert() {
    return this.getStringAttribute('auth_cert');
  }
  public set authCert(value: string) {
    this._authCert = value;
  }
  public resetAuthCert() {
    this._authCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCertInput() {
    return this._authCert;
  }

  // auth_http_port - computed: true, optional: true, required: false
  private _authHttpPort?: number; 
  public get authHttpPort() {
    return this.getNumberAttribute('auth_http_port');
  }
  public set authHttpPort(value: number) {
    this._authHttpPort = value;
  }
  public resetAuthHttpPort() {
    this._authHttpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authHttpPortInput() {
    return this._authHttpPort;
  }

  // auth_https_port - computed: true, optional: true, required: false
  private _authHttpsPort?: number; 
  public get authHttpsPort() {
    return this.getNumberAttribute('auth_https_port');
  }
  public set authHttpsPort(value: number) {
    this._authHttpsPort = value;
  }
  public resetAuthHttpsPort() {
    this._authHttpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authHttpsPortInput() {
    return this._authHttpsPort;
  }

  // auth_ike_saml_port - computed: true, optional: true, required: false
  private _authIkeSamlPort?: number; 
  public get authIkeSamlPort() {
    return this.getNumberAttribute('auth_ike_saml_port');
  }
  public set authIkeSamlPort(value: number) {
    this._authIkeSamlPort = value;
  }
  public resetAuthIkeSamlPort() {
    this._authIkeSamlPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authIkeSamlPortInput() {
    return this._authIkeSamlPort;
  }

  // auth_keepalive - computed: true, optional: true, required: false
  private _authKeepalive?: string; 
  public get authKeepalive() {
    return this.getStringAttribute('auth_keepalive');
  }
  public set authKeepalive(value: string) {
    this._authKeepalive = value;
  }
  public resetAuthKeepalive() {
    this._authKeepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeepaliveInput() {
    return this._authKeepalive;
  }

  // auth_session_auto_backup - computed: true, optional: true, required: false
  private _authSessionAutoBackup?: string; 
  public get authSessionAutoBackup() {
    return this.getStringAttribute('auth_session_auto_backup');
  }
  public set authSessionAutoBackup(value: string) {
    this._authSessionAutoBackup = value;
  }
  public resetAuthSessionAutoBackup() {
    this._authSessionAutoBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSessionAutoBackupInput() {
    return this._authSessionAutoBackup;
  }

  // auth_session_auto_backup_interval - computed: true, optional: true, required: false
  private _authSessionAutoBackupInterval?: string; 
  public get authSessionAutoBackupInterval() {
    return this.getStringAttribute('auth_session_auto_backup_interval');
  }
  public set authSessionAutoBackupInterval(value: string) {
    this._authSessionAutoBackupInterval = value;
  }
  public resetAuthSessionAutoBackupInterval() {
    this._authSessionAutoBackupInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSessionAutoBackupIntervalInput() {
    return this._authSessionAutoBackupInterval;
  }

  // auth_session_limit - computed: true, optional: true, required: false
  private _authSessionLimit?: string; 
  public get authSessionLimit() {
    return this.getStringAttribute('auth_session_limit');
  }
  public set authSessionLimit(value: string) {
    this._authSessionLimit = value;
  }
  public resetAuthSessionLimit() {
    this._authSessionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSessionLimitInput() {
    return this._authSessionLimit;
  }

  // auto_auth_extension_device - computed: true, optional: true, required: false
  private _autoAuthExtensionDevice?: string; 
  public get autoAuthExtensionDevice() {
    return this.getStringAttribute('auto_auth_extension_device');
  }
  public set autoAuthExtensionDevice(value: string) {
    this._autoAuthExtensionDevice = value;
  }
  public resetAutoAuthExtensionDevice() {
    this._autoAuthExtensionDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAuthExtensionDeviceInput() {
    return this._autoAuthExtensionDevice;
  }

  // autorun_log_fsck - computed: true, optional: true, required: false
  private _autorunLogFsck?: string; 
  public get autorunLogFsck() {
    return this.getStringAttribute('autorun_log_fsck');
  }
  public set autorunLogFsck(value: string) {
    this._autorunLogFsck = value;
  }
  public resetAutorunLogFsck() {
    this._autorunLogFsck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autorunLogFsckInput() {
    return this._autorunLogFsck;
  }

  // av_affinity - computed: true, optional: true, required: false
  private _avAffinity?: string; 
  public get avAffinity() {
    return this.getStringAttribute('av_affinity');
  }
  public set avAffinity(value: string) {
    this._avAffinity = value;
  }
  public resetAvAffinity() {
    this._avAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avAffinityInput() {
    return this._avAffinity;
  }

  // av_failopen - computed: true, optional: true, required: false
  private _avFailopen?: string; 
  public get avFailopen() {
    return this.getStringAttribute('av_failopen');
  }
  public set avFailopen(value: string) {
    this._avFailopen = value;
  }
  public resetAvFailopen() {
    this._avFailopen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avFailopenInput() {
    return this._avFailopen;
  }

  // av_failopen_session - computed: true, optional: true, required: false
  private _avFailopenSession?: string; 
  public get avFailopenSession() {
    return this.getStringAttribute('av_failopen_session');
  }
  public set avFailopenSession(value: string) {
    this._avFailopenSession = value;
  }
  public resetAvFailopenSession() {
    this._avFailopenSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avFailopenSessionInput() {
    return this._avFailopenSession;
  }

  // batch_cmdb - computed: true, optional: true, required: false
  private _batchCmdb?: string; 
  public get batchCmdb() {
    return this.getStringAttribute('batch_cmdb');
  }
  public set batchCmdb(value: string) {
    this._batchCmdb = value;
  }
  public resetBatchCmdb() {
    this._batchCmdb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchCmdbInput() {
    return this._batchCmdb;
  }

  // bfd_affinity - computed: true, optional: true, required: false
  private _bfdAffinity?: string; 
  public get bfdAffinity() {
    return this.getStringAttribute('bfd_affinity');
  }
  public set bfdAffinity(value: string) {
    this._bfdAffinity = value;
  }
  public resetBfdAffinity() {
    this._bfdAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdAffinityInput() {
    return this._bfdAffinity;
  }

  // block_session_timer - computed: true, optional: true, required: false
  private _blockSessionTimer?: number; 
  public get blockSessionTimer() {
    return this.getNumberAttribute('block_session_timer');
  }
  public set blockSessionTimer(value: number) {
    this._blockSessionTimer = value;
  }
  public resetBlockSessionTimer() {
    this._blockSessionTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockSessionTimerInput() {
    return this._blockSessionTimer;
  }

  // br_fdb_max_entry - computed: true, optional: true, required: false
  private _brFdbMaxEntry?: number; 
  public get brFdbMaxEntry() {
    return this.getNumberAttribute('br_fdb_max_entry');
  }
  public set brFdbMaxEntry(value: number) {
    this._brFdbMaxEntry = value;
  }
  public resetBrFdbMaxEntry() {
    this._brFdbMaxEntry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brFdbMaxEntryInput() {
    return this._brFdbMaxEntry;
  }

  // cert_chain_max - computed: true, optional: true, required: false
  private _certChainMax?: number; 
  public get certChainMax() {
    return this.getNumberAttribute('cert_chain_max');
  }
  public set certChainMax(value: number) {
    this._certChainMax = value;
  }
  public resetCertChainMax() {
    this._certChainMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certChainMaxInput() {
    return this._certChainMax;
  }

  // cfg_revert_timeout - computed: true, optional: true, required: false
  private _cfgRevertTimeout?: number; 
  public get cfgRevertTimeout() {
    return this.getNumberAttribute('cfg_revert_timeout');
  }
  public set cfgRevertTimeout(value: number) {
    this._cfgRevertTimeout = value;
  }
  public resetCfgRevertTimeout() {
    this._cfgRevertTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfgRevertTimeoutInput() {
    return this._cfgRevertTimeout;
  }

  // cfg_save - computed: true, optional: true, required: false
  private _cfgSave?: string; 
  public get cfgSave() {
    return this.getStringAttribute('cfg_save');
  }
  public set cfgSave(value: string) {
    this._cfgSave = value;
  }
  public resetCfgSave() {
    this._cfgSave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfgSaveInput() {
    return this._cfgSave;
  }

  // check_protocol_header - computed: true, optional: true, required: false
  private _checkProtocolHeader?: string; 
  public get checkProtocolHeader() {
    return this.getStringAttribute('check_protocol_header');
  }
  public set checkProtocolHeader(value: string) {
    this._checkProtocolHeader = value;
  }
  public resetCheckProtocolHeader() {
    this._checkProtocolHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkProtocolHeaderInput() {
    return this._checkProtocolHeader;
  }

  // check_reset_range - computed: true, optional: true, required: false
  private _checkResetRange?: string; 
  public get checkResetRange() {
    return this.getStringAttribute('check_reset_range');
  }
  public set checkResetRange(value: string) {
    this._checkResetRange = value;
  }
  public resetCheckResetRange() {
    this._checkResetRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkResetRangeInput() {
    return this._checkResetRange;
  }

  // cli_audit_log - computed: true, optional: true, required: false
  private _cliAuditLog?: string; 
  public get cliAuditLog() {
    return this.getStringAttribute('cli_audit_log');
  }
  public set cliAuditLog(value: string) {
    this._cliAuditLog = value;
  }
  public resetCliAuditLog() {
    this._cliAuditLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliAuditLogInput() {
    return this._cliAuditLog;
  }

  // cloud_communication - computed: true, optional: true, required: false
  private _cloudCommunication?: string; 
  public get cloudCommunication() {
    return this.getStringAttribute('cloud_communication');
  }
  public set cloudCommunication(value: string) {
    this._cloudCommunication = value;
  }
  public resetCloudCommunication() {
    this._cloudCommunication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudCommunicationInput() {
    return this._cloudCommunication;
  }

  // clt_cert_req - computed: true, optional: true, required: false
  private _cltCertReq?: string; 
  public get cltCertReq() {
    return this.getStringAttribute('clt_cert_req');
  }
  public set cltCertReq(value: string) {
    this._cltCertReq = value;
  }
  public resetCltCertReq() {
    this._cltCertReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cltCertReqInput() {
    return this._cltCertReq;
  }

  // cmdbsvr_affinity - computed: true, optional: true, required: false
  private _cmdbsvrAffinity?: string; 
  public get cmdbsvrAffinity() {
    return this.getStringAttribute('cmdbsvr_affinity');
  }
  public set cmdbsvrAffinity(value: string) {
    this._cmdbsvrAffinity = value;
  }
  public resetCmdbsvrAffinity() {
    this._cmdbsvrAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdbsvrAffinityInput() {
    return this._cmdbsvrAffinity;
  }

  // compliance_check - computed: false, optional: true, required: false
  private _complianceCheck?: string; 
  public get complianceCheck() {
    return this.getStringAttribute('compliance_check');
  }
  public set complianceCheck(value: string) {
    this._complianceCheck = value;
  }
  public resetComplianceCheck() {
    this._complianceCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceCheckInput() {
    return this._complianceCheck;
  }

  // compliance_check_time - computed: false, optional: true, required: false
  private _complianceCheckTime?: string; 
  public get complianceCheckTime() {
    return this.getStringAttribute('compliance_check_time');
  }
  public set complianceCheckTime(value: string) {
    this._complianceCheckTime = value;
  }
  public resetComplianceCheckTime() {
    this._complianceCheckTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceCheckTimeInput() {
    return this._complianceCheckTime;
  }

  // cpu_use_threshold - computed: true, optional: true, required: false
  private _cpuUseThreshold?: number; 
  public get cpuUseThreshold() {
    return this.getNumberAttribute('cpu_use_threshold');
  }
  public set cpuUseThreshold(value: number) {
    this._cpuUseThreshold = value;
  }
  public resetCpuUseThreshold() {
    this._cpuUseThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuUseThresholdInput() {
    return this._cpuUseThreshold;
  }

  // csr_ca_attribute - computed: true, optional: true, required: false
  private _csrCaAttribute?: string; 
  public get csrCaAttribute() {
    return this.getStringAttribute('csr_ca_attribute');
  }
  public set csrCaAttribute(value: string) {
    this._csrCaAttribute = value;
  }
  public resetCsrCaAttribute() {
    this._csrCaAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrCaAttributeInput() {
    return this._csrCaAttribute;
  }

  // daily_restart - computed: true, optional: true, required: false
  private _dailyRestart?: string; 
  public get dailyRestart() {
    return this.getStringAttribute('daily_restart');
  }
  public set dailyRestart(value: string) {
    this._dailyRestart = value;
  }
  public resetDailyRestart() {
    this._dailyRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyRestartInput() {
    return this._dailyRestart;
  }

  // default_service_source_port - computed: true, optional: true, required: false
  private _defaultServiceSourcePort?: string; 
  public get defaultServiceSourcePort() {
    return this.getStringAttribute('default_service_source_port');
  }
  public set defaultServiceSourcePort(value: string) {
    this._defaultServiceSourcePort = value;
  }
  public resetDefaultServiceSourcePort() {
    this._defaultServiceSourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultServiceSourcePortInput() {
    return this._defaultServiceSourcePort;
  }

  // delay_tcp_npu_session - computed: true, optional: true, required: false
  private _delayTcpNpuSession?: string; 
  public get delayTcpNpuSession() {
    return this.getStringAttribute('delay_tcp_npu_session');
  }
  public set delayTcpNpuSession(value: string) {
    this._delayTcpNpuSession = value;
  }
  public resetDelayTcpNpuSession() {
    this._delayTcpNpuSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayTcpNpuSessionInput() {
    return this._delayTcpNpuSession;
  }

  // device_identification_active_scan_delay - computed: false, optional: true, required: false
  private _deviceIdentificationActiveScanDelay?: number; 
  public get deviceIdentificationActiveScanDelay() {
    return this.getNumberAttribute('device_identification_active_scan_delay');
  }
  public set deviceIdentificationActiveScanDelay(value: number) {
    this._deviceIdentificationActiveScanDelay = value;
  }
  public resetDeviceIdentificationActiveScanDelay() {
    this._deviceIdentificationActiveScanDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdentificationActiveScanDelayInput() {
    return this._deviceIdentificationActiveScanDelay;
  }

  // device_idle_timeout - computed: true, optional: true, required: false
  private _deviceIdleTimeout?: number; 
  public get deviceIdleTimeout() {
    return this.getNumberAttribute('device_idle_timeout');
  }
  public set deviceIdleTimeout(value: number) {
    this._deviceIdleTimeout = value;
  }
  public resetDeviceIdleTimeout() {
    this._deviceIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdleTimeoutInput() {
    return this._deviceIdleTimeout;
  }

  // dh_params - computed: true, optional: true, required: false
  private _dhParams?: string; 
  public get dhParams() {
    return this.getStringAttribute('dh_params');
  }
  public set dhParams(value: string) {
    this._dhParams = value;
  }
  public resetDhParams() {
    this._dhParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhParamsInput() {
    return this._dhParams;
  }

  // dhcp_lease_backup_interval - computed: true, optional: true, required: false
  private _dhcpLeaseBackupInterval?: number; 
  public get dhcpLeaseBackupInterval() {
    return this.getNumberAttribute('dhcp_lease_backup_interval');
  }
  public set dhcpLeaseBackupInterval(value: number) {
    this._dhcpLeaseBackupInterval = value;
  }
  public resetDhcpLeaseBackupInterval() {
    this._dhcpLeaseBackupInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpLeaseBackupIntervalInput() {
    return this._dhcpLeaseBackupInterval;
  }

  // dnsproxy_worker_count - computed: true, optional: true, required: false
  private _dnsproxyWorkerCount?: number; 
  public get dnsproxyWorkerCount() {
    return this.getNumberAttribute('dnsproxy_worker_count');
  }
  public set dnsproxyWorkerCount(value: number) {
    this._dnsproxyWorkerCount = value;
  }
  public resetDnsproxyWorkerCount() {
    this._dnsproxyWorkerCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsproxyWorkerCountInput() {
    return this._dnsproxyWorkerCount;
  }

  // dst - computed: true, optional: true, required: false
  private _dst?: string; 
  public get dst() {
    return this.getStringAttribute('dst');
  }
  public set dst(value: string) {
    this._dst = value;
  }
  public resetDst() {
    this._dst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstInput() {
    return this._dst;
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

  // early_tcp_npu_session - computed: true, optional: true, required: false
  private _earlyTcpNpuSession?: string; 
  public get earlyTcpNpuSession() {
    return this.getStringAttribute('early_tcp_npu_session');
  }
  public set earlyTcpNpuSession(value: string) {
    this._earlyTcpNpuSession = value;
  }
  public resetEarlyTcpNpuSession() {
    this._earlyTcpNpuSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get earlyTcpNpuSessionInput() {
    return this._earlyTcpNpuSession;
  }

  // edit_vdom_prompt - computed: true, optional: true, required: false
  private _editVdomPrompt?: string; 
  public get editVdomPrompt() {
    return this.getStringAttribute('edit_vdom_prompt');
  }
  public set editVdomPrompt(value: string) {
    this._editVdomPrompt = value;
  }
  public resetEditVdomPrompt() {
    this._editVdomPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editVdomPromptInput() {
    return this._editVdomPrompt;
  }

  // endpoint_control_fds_access - computed: false, optional: true, required: false
  private _endpointControlFdsAccess?: string; 
  public get endpointControlFdsAccess() {
    return this.getStringAttribute('endpoint_control_fds_access');
  }
  public set endpointControlFdsAccess(value: string) {
    this._endpointControlFdsAccess = value;
  }
  public resetEndpointControlFdsAccess() {
    this._endpointControlFdsAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointControlFdsAccessInput() {
    return this._endpointControlFdsAccess;
  }

  // endpoint_control_portal_port - computed: false, optional: true, required: false
  private _endpointControlPortalPort?: number; 
  public get endpointControlPortalPort() {
    return this.getNumberAttribute('endpoint_control_portal_port');
  }
  public set endpointControlPortalPort(value: number) {
    this._endpointControlPortalPort = value;
  }
  public resetEndpointControlPortalPort() {
    this._endpointControlPortalPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointControlPortalPortInput() {
    return this._endpointControlPortalPort;
  }

  // extender_controller_reserved_network - computed: true, optional: true, required: false
  private _extenderControllerReservedNetwork?: string; 
  public get extenderControllerReservedNetwork() {
    return this.getStringAttribute('extender_controller_reserved_network');
  }
  public set extenderControllerReservedNetwork(value: string) {
    this._extenderControllerReservedNetwork = value;
  }
  public resetExtenderControllerReservedNetwork() {
    this._extenderControllerReservedNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extenderControllerReservedNetworkInput() {
    return this._extenderControllerReservedNetwork;
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

  // faz_disk_buffer_size - computed: false, optional: true, required: false
  private _fazDiskBufferSize?: number; 
  public get fazDiskBufferSize() {
    return this.getNumberAttribute('faz_disk_buffer_size');
  }
  public set fazDiskBufferSize(value: number) {
    this._fazDiskBufferSize = value;
  }
  public resetFazDiskBufferSize() {
    this._fazDiskBufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fazDiskBufferSizeInput() {
    return this._fazDiskBufferSize;
  }

  // fds_statistics - computed: true, optional: true, required: false
  private _fdsStatistics?: string; 
  public get fdsStatistics() {
    return this.getStringAttribute('fds_statistics');
  }
  public set fdsStatistics(value: string) {
    this._fdsStatistics = value;
  }
  public resetFdsStatistics() {
    this._fdsStatistics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fdsStatisticsInput() {
    return this._fdsStatistics;
  }

  // fds_statistics_period - computed: true, optional: true, required: false
  private _fdsStatisticsPeriod?: number; 
  public get fdsStatisticsPeriod() {
    return this.getNumberAttribute('fds_statistics_period');
  }
  public set fdsStatisticsPeriod(value: number) {
    this._fdsStatisticsPeriod = value;
  }
  public resetFdsStatisticsPeriod() {
    this._fdsStatisticsPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fdsStatisticsPeriodInput() {
    return this._fdsStatisticsPeriod;
  }

  // fec_port - computed: true, optional: true, required: false
  private _fecPort?: number; 
  public get fecPort() {
    return this.getNumberAttribute('fec_port');
  }
  public set fecPort(value: number) {
    this._fecPort = value;
  }
  public resetFecPort() {
    this._fecPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fecPortInput() {
    return this._fecPort;
  }

  // fgd_alert_subscription - computed: false, optional: true, required: false
  private _fgdAlertSubscription?: string; 
  public get fgdAlertSubscription() {
    return this.getStringAttribute('fgd_alert_subscription');
  }
  public set fgdAlertSubscription(value: string) {
    this._fgdAlertSubscription = value;
  }
  public resetFgdAlertSubscription() {
    this._fgdAlertSubscription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgdAlertSubscriptionInput() {
    return this._fgdAlertSubscription;
  }

  // forticonverter_config_upload - computed: true, optional: true, required: false
  private _forticonverterConfigUpload?: string; 
  public get forticonverterConfigUpload() {
    return this.getStringAttribute('forticonverter_config_upload');
  }
  public set forticonverterConfigUpload(value: string) {
    this._forticonverterConfigUpload = value;
  }
  public resetForticonverterConfigUpload() {
    this._forticonverterConfigUpload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticonverterConfigUploadInput() {
    return this._forticonverterConfigUpload;
  }

  // forticonverter_integration - computed: true, optional: true, required: false
  private _forticonverterIntegration?: string; 
  public get forticonverterIntegration() {
    return this.getStringAttribute('forticonverter_integration');
  }
  public set forticonverterIntegration(value: string) {
    this._forticonverterIntegration = value;
  }
  public resetForticonverterIntegration() {
    this._forticonverterIntegration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticonverterIntegrationInput() {
    return this._forticonverterIntegration;
  }

  // fortiextender - computed: true, optional: true, required: false
  private _fortiextender?: string; 
  public get fortiextender() {
    return this.getStringAttribute('fortiextender');
  }
  public set fortiextender(value: string) {
    this._fortiextender = value;
  }
  public resetFortiextender() {
    this._fortiextender = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiextenderInput() {
    return this._fortiextender;
  }

  // fortiextender_data_port - computed: true, optional: true, required: false
  private _fortiextenderDataPort?: number; 
  public get fortiextenderDataPort() {
    return this.getNumberAttribute('fortiextender_data_port');
  }
  public set fortiextenderDataPort(value: number) {
    this._fortiextenderDataPort = value;
  }
  public resetFortiextenderDataPort() {
    this._fortiextenderDataPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiextenderDataPortInput() {
    return this._fortiextenderDataPort;
  }

  // fortiextender_discovery_lockdown - computed: true, optional: true, required: false
  private _fortiextenderDiscoveryLockdown?: string; 
  public get fortiextenderDiscoveryLockdown() {
    return this.getStringAttribute('fortiextender_discovery_lockdown');
  }
  public set fortiextenderDiscoveryLockdown(value: string) {
    this._fortiextenderDiscoveryLockdown = value;
  }
  public resetFortiextenderDiscoveryLockdown() {
    this._fortiextenderDiscoveryLockdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiextenderDiscoveryLockdownInput() {
    return this._fortiextenderDiscoveryLockdown;
  }

  // fortiextender_provision_on_authorization - computed: true, optional: true, required: false
  private _fortiextenderProvisionOnAuthorization?: string; 
  public get fortiextenderProvisionOnAuthorization() {
    return this.getStringAttribute('fortiextender_provision_on_authorization');
  }
  public set fortiextenderProvisionOnAuthorization(value: string) {
    this._fortiextenderProvisionOnAuthorization = value;
  }
  public resetFortiextenderProvisionOnAuthorization() {
    this._fortiextenderProvisionOnAuthorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiextenderProvisionOnAuthorizationInput() {
    return this._fortiextenderProvisionOnAuthorization;
  }

  // fortiextender_vlan_mode - computed: true, optional: true, required: false
  private _fortiextenderVlanMode?: string; 
  public get fortiextenderVlanMode() {
    return this.getStringAttribute('fortiextender_vlan_mode');
  }
  public set fortiextenderVlanMode(value: string) {
    this._fortiextenderVlanMode = value;
  }
  public resetFortiextenderVlanMode() {
    this._fortiextenderVlanMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiextenderVlanModeInput() {
    return this._fortiextenderVlanMode;
  }

  // fortigslb_integration - computed: true, optional: true, required: false
  private _fortigslbIntegration?: string; 
  public get fortigslbIntegration() {
    return this.getStringAttribute('fortigslb_integration');
  }
  public set fortigslbIntegration(value: string) {
    this._fortigslbIntegration = value;
  }
  public resetFortigslbIntegration() {
    this._fortigslbIntegration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortigslbIntegrationInput() {
    return this._fortigslbIntegration;
  }

  // fortiipam_integration - computed: true, optional: true, required: false
  private _fortiipamIntegration?: string; 
  public get fortiipamIntegration() {
    return this.getStringAttribute('fortiipam_integration');
  }
  public set fortiipamIntegration(value: string) {
    this._fortiipamIntegration = value;
  }
  public resetFortiipamIntegration() {
    this._fortiipamIntegration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiipamIntegrationInput() {
    return this._fortiipamIntegration;
  }

  // fortiservice_port - computed: true, optional: true, required: false
  private _fortiservicePort?: number; 
  public get fortiservicePort() {
    return this.getNumberAttribute('fortiservice_port');
  }
  public set fortiservicePort(value: number) {
    this._fortiservicePort = value;
  }
  public resetFortiservicePort() {
    this._fortiservicePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiservicePortInput() {
    return this._fortiservicePort;
  }

  // fortitoken_cloud - computed: true, optional: true, required: false
  private _fortitokenCloud?: string; 
  public get fortitokenCloud() {
    return this.getStringAttribute('fortitoken_cloud');
  }
  public set fortitokenCloud(value: string) {
    this._fortitokenCloud = value;
  }
  public resetFortitokenCloud() {
    this._fortitokenCloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortitokenCloudInput() {
    return this._fortitokenCloud;
  }

  // fortitoken_cloud_push_status - computed: true, optional: true, required: false
  private _fortitokenCloudPushStatus?: string; 
  public get fortitokenCloudPushStatus() {
    return this.getStringAttribute('fortitoken_cloud_push_status');
  }
  public set fortitokenCloudPushStatus(value: string) {
    this._fortitokenCloudPushStatus = value;
  }
  public resetFortitokenCloudPushStatus() {
    this._fortitokenCloudPushStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortitokenCloudPushStatusInput() {
    return this._fortitokenCloudPushStatus;
  }

  // fortitoken_cloud_region - computed: false, optional: true, required: false
  private _fortitokenCloudRegion?: string; 
  public get fortitokenCloudRegion() {
    return this.getStringAttribute('fortitoken_cloud_region');
  }
  public set fortitokenCloudRegion(value: string) {
    this._fortitokenCloudRegion = value;
  }
  public resetFortitokenCloudRegion() {
    this._fortitokenCloudRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortitokenCloudRegionInput() {
    return this._fortitokenCloudRegion;
  }

  // fortitoken_cloud_sync_interval - computed: true, optional: true, required: false
  private _fortitokenCloudSyncInterval?: number; 
  public get fortitokenCloudSyncInterval() {
    return this.getNumberAttribute('fortitoken_cloud_sync_interval');
  }
  public set fortitokenCloudSyncInterval(value: number) {
    this._fortitokenCloudSyncInterval = value;
  }
  public resetFortitokenCloudSyncInterval() {
    this._fortitokenCloudSyncInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortitokenCloudSyncIntervalInput() {
    return this._fortitokenCloudSyncInterval;
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

  // gui_allow_default_hostname - computed: true, optional: true, required: false
  private _guiAllowDefaultHostname?: string; 
  public get guiAllowDefaultHostname() {
    return this.getStringAttribute('gui_allow_default_hostname');
  }
  public set guiAllowDefaultHostname(value: string) {
    this._guiAllowDefaultHostname = value;
  }
  public resetGuiAllowDefaultHostname() {
    this._guiAllowDefaultHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiAllowDefaultHostnameInput() {
    return this._guiAllowDefaultHostname;
  }

  // gui_allow_incompatible_fabric_fgt - computed: true, optional: true, required: false
  private _guiAllowIncompatibleFabricFgt?: string; 
  public get guiAllowIncompatibleFabricFgt() {
    return this.getStringAttribute('gui_allow_incompatible_fabric_fgt');
  }
  public set guiAllowIncompatibleFabricFgt(value: string) {
    this._guiAllowIncompatibleFabricFgt = value;
  }
  public resetGuiAllowIncompatibleFabricFgt() {
    this._guiAllowIncompatibleFabricFgt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiAllowIncompatibleFabricFgtInput() {
    return this._guiAllowIncompatibleFabricFgt;
  }

  // gui_app_detection_sdwan - computed: true, optional: true, required: false
  private _guiAppDetectionSdwan?: string; 
  public get guiAppDetectionSdwan() {
    return this.getStringAttribute('gui_app_detection_sdwan');
  }
  public set guiAppDetectionSdwan(value: string) {
    this._guiAppDetectionSdwan = value;
  }
  public resetGuiAppDetectionSdwan() {
    this._guiAppDetectionSdwan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiAppDetectionSdwanInput() {
    return this._guiAppDetectionSdwan;
  }

  // gui_auto_upgrade_setup_warning - computed: true, optional: true, required: false
  private _guiAutoUpgradeSetupWarning?: string; 
  public get guiAutoUpgradeSetupWarning() {
    return this.getStringAttribute('gui_auto_upgrade_setup_warning');
  }
  public set guiAutoUpgradeSetupWarning(value: string) {
    this._guiAutoUpgradeSetupWarning = value;
  }
  public resetGuiAutoUpgradeSetupWarning() {
    this._guiAutoUpgradeSetupWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiAutoUpgradeSetupWarningInput() {
    return this._guiAutoUpgradeSetupWarning;
  }

  // gui_cdn_domain_override - computed: false, optional: true, required: false
  private _guiCdnDomainOverride?: string; 
  public get guiCdnDomainOverride() {
    return this.getStringAttribute('gui_cdn_domain_override');
  }
  public set guiCdnDomainOverride(value: string) {
    this._guiCdnDomainOverride = value;
  }
  public resetGuiCdnDomainOverride() {
    this._guiCdnDomainOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiCdnDomainOverrideInput() {
    return this._guiCdnDomainOverride;
  }

  // gui_cdn_usage - computed: true, optional: true, required: false
  private _guiCdnUsage?: string; 
  public get guiCdnUsage() {
    return this.getStringAttribute('gui_cdn_usage');
  }
  public set guiCdnUsage(value: string) {
    this._guiCdnUsage = value;
  }
  public resetGuiCdnUsage() {
    this._guiCdnUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiCdnUsageInput() {
    return this._guiCdnUsage;
  }

  // gui_certificates - computed: true, optional: true, required: false
  private _guiCertificates?: string; 
  public get guiCertificates() {
    return this.getStringAttribute('gui_certificates');
  }
  public set guiCertificates(value: string) {
    this._guiCertificates = value;
  }
  public resetGuiCertificates() {
    this._guiCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiCertificatesInput() {
    return this._guiCertificates;
  }

  // gui_custom_language - computed: true, optional: true, required: false
  private _guiCustomLanguage?: string; 
  public get guiCustomLanguage() {
    return this.getStringAttribute('gui_custom_language');
  }
  public set guiCustomLanguage(value: string) {
    this._guiCustomLanguage = value;
  }
  public resetGuiCustomLanguage() {
    this._guiCustomLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiCustomLanguageInput() {
    return this._guiCustomLanguage;
  }

  // gui_date_format - computed: true, optional: true, required: false
  private _guiDateFormat?: string; 
  public get guiDateFormat() {
    return this.getStringAttribute('gui_date_format');
  }
  public set guiDateFormat(value: string) {
    this._guiDateFormat = value;
  }
  public resetGuiDateFormat() {
    this._guiDateFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiDateFormatInput() {
    return this._guiDateFormat;
  }

  // gui_date_time_source - computed: true, optional: true, required: false
  private _guiDateTimeSource?: string; 
  public get guiDateTimeSource() {
    return this.getStringAttribute('gui_date_time_source');
  }
  public set guiDateTimeSource(value: string) {
    this._guiDateTimeSource = value;
  }
  public resetGuiDateTimeSource() {
    this._guiDateTimeSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiDateTimeSourceInput() {
    return this._guiDateTimeSource;
  }

  // gui_device_latitude - computed: true, optional: true, required: false
  private _guiDeviceLatitude?: string; 
  public get guiDeviceLatitude() {
    return this.getStringAttribute('gui_device_latitude');
  }
  public set guiDeviceLatitude(value: string) {
    this._guiDeviceLatitude = value;
  }
  public resetGuiDeviceLatitude() {
    this._guiDeviceLatitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiDeviceLatitudeInput() {
    return this._guiDeviceLatitude;
  }

  // gui_device_longitude - computed: true, optional: true, required: false
  private _guiDeviceLongitude?: string; 
  public get guiDeviceLongitude() {
    return this.getStringAttribute('gui_device_longitude');
  }
  public set guiDeviceLongitude(value: string) {
    this._guiDeviceLongitude = value;
  }
  public resetGuiDeviceLongitude() {
    this._guiDeviceLongitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiDeviceLongitudeInput() {
    return this._guiDeviceLongitude;
  }

  // gui_display_hostname - computed: true, optional: true, required: false
  private _guiDisplayHostname?: string; 
  public get guiDisplayHostname() {
    return this.getStringAttribute('gui_display_hostname');
  }
  public set guiDisplayHostname(value: string) {
    this._guiDisplayHostname = value;
  }
  public resetGuiDisplayHostname() {
    this._guiDisplayHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiDisplayHostnameInput() {
    return this._guiDisplayHostname;
  }

  // gui_firmware_upgrade_setup_warning - computed: false, optional: true, required: false
  private _guiFirmwareUpgradeSetupWarning?: string; 
  public get guiFirmwareUpgradeSetupWarning() {
    return this.getStringAttribute('gui_firmware_upgrade_setup_warning');
  }
  public set guiFirmwareUpgradeSetupWarning(value: string) {
    this._guiFirmwareUpgradeSetupWarning = value;
  }
  public resetGuiFirmwareUpgradeSetupWarning() {
    this._guiFirmwareUpgradeSetupWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiFirmwareUpgradeSetupWarningInput() {
    return this._guiFirmwareUpgradeSetupWarning;
  }

  // gui_firmware_upgrade_warning - computed: true, optional: true, required: false
  private _guiFirmwareUpgradeWarning?: string; 
  public get guiFirmwareUpgradeWarning() {
    return this.getStringAttribute('gui_firmware_upgrade_warning');
  }
  public set guiFirmwareUpgradeWarning(value: string) {
    this._guiFirmwareUpgradeWarning = value;
  }
  public resetGuiFirmwareUpgradeWarning() {
    this._guiFirmwareUpgradeWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiFirmwareUpgradeWarningInput() {
    return this._guiFirmwareUpgradeWarning;
  }

  // gui_forticare_registration_setup_warning - computed: true, optional: true, required: false
  private _guiForticareRegistrationSetupWarning?: string; 
  public get guiForticareRegistrationSetupWarning() {
    return this.getStringAttribute('gui_forticare_registration_setup_warning');
  }
  public set guiForticareRegistrationSetupWarning(value: string) {
    this._guiForticareRegistrationSetupWarning = value;
  }
  public resetGuiForticareRegistrationSetupWarning() {
    this._guiForticareRegistrationSetupWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiForticareRegistrationSetupWarningInput() {
    return this._guiForticareRegistrationSetupWarning;
  }

  // gui_fortigate_cloud_sandbox - computed: true, optional: true, required: false
  private _guiFortigateCloudSandbox?: string; 
  public get guiFortigateCloudSandbox() {
    return this.getStringAttribute('gui_fortigate_cloud_sandbox');
  }
  public set guiFortigateCloudSandbox(value: string) {
    this._guiFortigateCloudSandbox = value;
  }
  public resetGuiFortigateCloudSandbox() {
    this._guiFortigateCloudSandbox = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiFortigateCloudSandboxInput() {
    return this._guiFortigateCloudSandbox;
  }

  // gui_fortiguard_resource_fetch - computed: true, optional: true, required: false
  private _guiFortiguardResourceFetch?: string; 
  public get guiFortiguardResourceFetch() {
    return this.getStringAttribute('gui_fortiguard_resource_fetch');
  }
  public set guiFortiguardResourceFetch(value: string) {
    this._guiFortiguardResourceFetch = value;
  }
  public resetGuiFortiguardResourceFetch() {
    this._guiFortiguardResourceFetch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiFortiguardResourceFetchInput() {
    return this._guiFortiguardResourceFetch;
  }

  // gui_fortisandbox_cloud - computed: true, optional: true, required: false
  private _guiFortisandboxCloud?: string; 
  public get guiFortisandboxCloud() {
    return this.getStringAttribute('gui_fortisandbox_cloud');
  }
  public set guiFortisandboxCloud(value: string) {
    this._guiFortisandboxCloud = value;
  }
  public resetGuiFortisandboxCloud() {
    this._guiFortisandboxCloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiFortisandboxCloudInput() {
    return this._guiFortisandboxCloud;
  }

  // gui_ipv6 - computed: true, optional: true, required: false
  private _guiIpv6?: string; 
  public get guiIpv6() {
    return this.getStringAttribute('gui_ipv6');
  }
  public set guiIpv6(value: string) {
    this._guiIpv6 = value;
  }
  public resetGuiIpv6() {
    this._guiIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiIpv6Input() {
    return this._guiIpv6;
  }

  // gui_lines_per_page - computed: false, optional: true, required: false
  private _guiLinesPerPage?: number; 
  public get guiLinesPerPage() {
    return this.getNumberAttribute('gui_lines_per_page');
  }
  public set guiLinesPerPage(value: number) {
    this._guiLinesPerPage = value;
  }
  public resetGuiLinesPerPage() {
    this._guiLinesPerPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiLinesPerPageInput() {
    return this._guiLinesPerPage;
  }

  // gui_local_out - computed: true, optional: true, required: false
  private _guiLocalOut?: string; 
  public get guiLocalOut() {
    return this.getStringAttribute('gui_local_out');
  }
  public set guiLocalOut(value: string) {
    this._guiLocalOut = value;
  }
  public resetGuiLocalOut() {
    this._guiLocalOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiLocalOutInput() {
    return this._guiLocalOut;
  }

  // gui_replacement_message_groups - computed: true, optional: true, required: false
  private _guiReplacementMessageGroups?: string; 
  public get guiReplacementMessageGroups() {
    return this.getStringAttribute('gui_replacement_message_groups');
  }
  public set guiReplacementMessageGroups(value: string) {
    this._guiReplacementMessageGroups = value;
  }
  public resetGuiReplacementMessageGroups() {
    this._guiReplacementMessageGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiReplacementMessageGroupsInput() {
    return this._guiReplacementMessageGroups;
  }

  // gui_rest_api_cache - computed: true, optional: true, required: false
  private _guiRestApiCache?: string; 
  public get guiRestApiCache() {
    return this.getStringAttribute('gui_rest_api_cache');
  }
  public set guiRestApiCache(value: string) {
    this._guiRestApiCache = value;
  }
  public resetGuiRestApiCache() {
    this._guiRestApiCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiRestApiCacheInput() {
    return this._guiRestApiCache;
  }

  // gui_theme - computed: true, optional: true, required: false
  private _guiTheme?: string; 
  public get guiTheme() {
    return this.getStringAttribute('gui_theme');
  }
  public set guiTheme(value: string) {
    this._guiTheme = value;
  }
  public resetGuiTheme() {
    this._guiTheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiThemeInput() {
    return this._guiTheme;
  }

  // gui_wireless_opensecurity - computed: true, optional: true, required: false
  private _guiWirelessOpensecurity?: string; 
  public get guiWirelessOpensecurity() {
    return this.getStringAttribute('gui_wireless_opensecurity');
  }
  public set guiWirelessOpensecurity(value: string) {
    this._guiWirelessOpensecurity = value;
  }
  public resetGuiWirelessOpensecurity() {
    this._guiWirelessOpensecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiWirelessOpensecurityInput() {
    return this._guiWirelessOpensecurity;
  }

  // gui_workflow_management - computed: true, optional: true, required: false
  private _guiWorkflowManagement?: string; 
  public get guiWorkflowManagement() {
    return this.getStringAttribute('gui_workflow_management');
  }
  public set guiWorkflowManagement(value: string) {
    this._guiWorkflowManagement = value;
  }
  public resetGuiWorkflowManagement() {
    this._guiWorkflowManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiWorkflowManagementInput() {
    return this._guiWorkflowManagement;
  }

  // ha_affinity - computed: true, optional: true, required: false
  private _haAffinity?: string; 
  public get haAffinity() {
    return this.getStringAttribute('ha_affinity');
  }
  public set haAffinity(value: string) {
    this._haAffinity = value;
  }
  public resetHaAffinity() {
    this._haAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haAffinityInput() {
    return this._haAffinity;
  }

  // honor_df - computed: true, optional: true, required: false
  private _honorDf?: string; 
  public get honorDf() {
    return this.getStringAttribute('honor_df');
  }
  public set honorDf(value: string) {
    this._honorDf = value;
  }
  public resetHonorDf() {
    this._honorDf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get honorDfInput() {
    return this._honorDf;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // httpd_max_worker_count - computed: false, optional: true, required: false
  private _httpdMaxWorkerCount?: number; 
  public get httpdMaxWorkerCount() {
    return this.getNumberAttribute('httpd_max_worker_count');
  }
  public set httpdMaxWorkerCount(value: number) {
    this._httpdMaxWorkerCount = value;
  }
  public resetHttpdMaxWorkerCount() {
    this._httpdMaxWorkerCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpdMaxWorkerCountInput() {
    return this._httpdMaxWorkerCount;
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

  // igmp_state_limit - computed: true, optional: true, required: false
  private _igmpStateLimit?: number; 
  public get igmpStateLimit() {
    return this.getNumberAttribute('igmp_state_limit');
  }
  public set igmpStateLimit(value: number) {
    this._igmpStateLimit = value;
  }
  public resetIgmpStateLimit() {
    this._igmpStateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpStateLimitInput() {
    return this._igmpStateLimit;
  }

  // ike_embryonic_limit - computed: false, optional: true, required: false
  private _ikeEmbryonicLimit?: number; 
  public get ikeEmbryonicLimit() {
    return this.getNumberAttribute('ike_embryonic_limit');
  }
  public set ikeEmbryonicLimit(value: number) {
    this._ikeEmbryonicLimit = value;
  }
  public resetIkeEmbryonicLimit() {
    this._ikeEmbryonicLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeEmbryonicLimitInput() {
    return this._ikeEmbryonicLimit;
  }

  // interface_subnet_usage - computed: true, optional: true, required: false
  private _interfaceSubnetUsage?: string; 
  public get interfaceSubnetUsage() {
    return this.getStringAttribute('interface_subnet_usage');
  }
  public set interfaceSubnetUsage(value: string) {
    this._interfaceSubnetUsage = value;
  }
  public resetInterfaceSubnetUsage() {
    this._interfaceSubnetUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceSubnetUsageInput() {
    return this._interfaceSubnetUsage;
  }

  // internet_service_database - computed: true, optional: true, required: false
  private _internetServiceDatabase?: string; 
  public get internetServiceDatabase() {
    return this.getStringAttribute('internet_service_database');
  }
  public set internetServiceDatabase(value: string) {
    this._internetServiceDatabase = value;
  }
  public resetInternetServiceDatabase() {
    this._internetServiceDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceDatabaseInput() {
    return this._internetServiceDatabase;
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

  // ip_conflict_detection - computed: true, optional: true, required: false
  private _ipConflictDetection?: string; 
  public get ipConflictDetection() {
    return this.getStringAttribute('ip_conflict_detection');
  }
  public set ipConflictDetection(value: string) {
    this._ipConflictDetection = value;
  }
  public resetIpConflictDetection() {
    this._ipConflictDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConflictDetectionInput() {
    return this._ipConflictDetection;
  }

  // ip_fragment_mem_thresholds - computed: true, optional: true, required: false
  private _ipFragmentMemThresholds?: number; 
  public get ipFragmentMemThresholds() {
    return this.getNumberAttribute('ip_fragment_mem_thresholds');
  }
  public set ipFragmentMemThresholds(value: number) {
    this._ipFragmentMemThresholds = value;
  }
  public resetIpFragmentMemThresholds() {
    this._ipFragmentMemThresholds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFragmentMemThresholdsInput() {
    return this._ipFragmentMemThresholds;
  }

  // ip_fragment_timeout - computed: true, optional: true, required: false
  private _ipFragmentTimeout?: number; 
  public get ipFragmentTimeout() {
    return this.getNumberAttribute('ip_fragment_timeout');
  }
  public set ipFragmentTimeout(value: number) {
    this._ipFragmentTimeout = value;
  }
  public resetIpFragmentTimeout() {
    this._ipFragmentTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFragmentTimeoutInput() {
    return this._ipFragmentTimeout;
  }

  // ip_src_port_range - computed: true, optional: true, required: false
  private _ipSrcPortRange?: string; 
  public get ipSrcPortRange() {
    return this.getStringAttribute('ip_src_port_range');
  }
  public set ipSrcPortRange(value: string) {
    this._ipSrcPortRange = value;
  }
  public resetIpSrcPortRange() {
    this._ipSrcPortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSrcPortRangeInput() {
    return this._ipSrcPortRange;
  }

  // ips_affinity - computed: true, optional: true, required: false
  private _ipsAffinity?: string; 
  public get ipsAffinity() {
    return this.getStringAttribute('ips_affinity');
  }
  public set ipsAffinity(value: string) {
    this._ipsAffinity = value;
  }
  public resetIpsAffinity() {
    this._ipsAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsAffinityInput() {
    return this._ipsAffinity;
  }

  // ipsec_asic_offload - computed: true, optional: true, required: false
  private _ipsecAsicOffload?: string; 
  public get ipsecAsicOffload() {
    return this.getStringAttribute('ipsec_asic_offload');
  }
  public set ipsecAsicOffload(value: string) {
    this._ipsecAsicOffload = value;
  }
  public resetIpsecAsicOffload() {
    this._ipsecAsicOffload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecAsicOffloadInput() {
    return this._ipsecAsicOffload;
  }

  // ipsec_ha_seqjump_rate - computed: true, optional: true, required: false
  private _ipsecHaSeqjumpRate?: number; 
  public get ipsecHaSeqjumpRate() {
    return this.getNumberAttribute('ipsec_ha_seqjump_rate');
  }
  public set ipsecHaSeqjumpRate(value: number) {
    this._ipsecHaSeqjumpRate = value;
  }
  public resetIpsecHaSeqjumpRate() {
    this._ipsecHaSeqjumpRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecHaSeqjumpRateInput() {
    return this._ipsecHaSeqjumpRate;
  }

  // ipsec_hmac_offload - computed: true, optional: true, required: false
  private _ipsecHmacOffload?: string; 
  public get ipsecHmacOffload() {
    return this.getStringAttribute('ipsec_hmac_offload');
  }
  public set ipsecHmacOffload(value: string) {
    this._ipsecHmacOffload = value;
  }
  public resetIpsecHmacOffload() {
    this._ipsecHmacOffload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecHmacOffloadInput() {
    return this._ipsecHmacOffload;
  }

  // ipsec_qat_offload - computed: true, optional: true, required: false
  private _ipsecQatOffload?: string; 
  public get ipsecQatOffload() {
    return this.getStringAttribute('ipsec_qat_offload');
  }
  public set ipsecQatOffload(value: string) {
    this._ipsecQatOffload = value;
  }
  public resetIpsecQatOffload() {
    this._ipsecQatOffload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecQatOffloadInput() {
    return this._ipsecQatOffload;
  }

  // ipsec_round_robin - computed: true, optional: true, required: false
  private _ipsecRoundRobin?: string; 
  public get ipsecRoundRobin() {
    return this.getStringAttribute('ipsec_round_robin');
  }
  public set ipsecRoundRobin(value: string) {
    this._ipsecRoundRobin = value;
  }
  public resetIpsecRoundRobin() {
    this._ipsecRoundRobin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecRoundRobinInput() {
    return this._ipsecRoundRobin;
  }

  // ipsec_soft_dec_async - computed: true, optional: true, required: false
  private _ipsecSoftDecAsync?: string; 
  public get ipsecSoftDecAsync() {
    return this.getStringAttribute('ipsec_soft_dec_async');
  }
  public set ipsecSoftDecAsync(value: string) {
    this._ipsecSoftDecAsync = value;
  }
  public resetIpsecSoftDecAsync() {
    this._ipsecSoftDecAsync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecSoftDecAsyncInput() {
    return this._ipsecSoftDecAsync;
  }

  // ipv6_accept_dad - computed: true, optional: true, required: false
  private _ipv6AcceptDad?: number; 
  public get ipv6AcceptDad() {
    return this.getNumberAttribute('ipv6_accept_dad');
  }
  public set ipv6AcceptDad(value: number) {
    this._ipv6AcceptDad = value;
  }
  public resetIpv6AcceptDad() {
    this._ipv6AcceptDad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AcceptDadInput() {
    return this._ipv6AcceptDad;
  }

  // ipv6_allow_anycast_probe - computed: true, optional: true, required: false
  private _ipv6AllowAnycastProbe?: string; 
  public get ipv6AllowAnycastProbe() {
    return this.getStringAttribute('ipv6_allow_anycast_probe');
  }
  public set ipv6AllowAnycastProbe(value: string) {
    this._ipv6AllowAnycastProbe = value;
  }
  public resetIpv6AllowAnycastProbe() {
    this._ipv6AllowAnycastProbe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AllowAnycastProbeInput() {
    return this._ipv6AllowAnycastProbe;
  }

  // ipv6_allow_local_in_silent_drop - computed: true, optional: true, required: false
  private _ipv6AllowLocalInSilentDrop?: string; 
  public get ipv6AllowLocalInSilentDrop() {
    return this.getStringAttribute('ipv6_allow_local_in_silent_drop');
  }
  public set ipv6AllowLocalInSilentDrop(value: string) {
    this._ipv6AllowLocalInSilentDrop = value;
  }
  public resetIpv6AllowLocalInSilentDrop() {
    this._ipv6AllowLocalInSilentDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AllowLocalInSilentDropInput() {
    return this._ipv6AllowLocalInSilentDrop;
  }

  // ipv6_allow_local_in_slient_drop - computed: true, optional: true, required: false
  private _ipv6AllowLocalInSlientDrop?: string; 
  public get ipv6AllowLocalInSlientDrop() {
    return this.getStringAttribute('ipv6_allow_local_in_slient_drop');
  }
  public set ipv6AllowLocalInSlientDrop(value: string) {
    this._ipv6AllowLocalInSlientDrop = value;
  }
  public resetIpv6AllowLocalInSlientDrop() {
    this._ipv6AllowLocalInSlientDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AllowLocalInSlientDropInput() {
    return this._ipv6AllowLocalInSlientDrop;
  }

  // ipv6_allow_multicast_probe - computed: true, optional: true, required: false
  private _ipv6AllowMulticastProbe?: string; 
  public get ipv6AllowMulticastProbe() {
    return this.getStringAttribute('ipv6_allow_multicast_probe');
  }
  public set ipv6AllowMulticastProbe(value: string) {
    this._ipv6AllowMulticastProbe = value;
  }
  public resetIpv6AllowMulticastProbe() {
    this._ipv6AllowMulticastProbe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AllowMulticastProbeInput() {
    return this._ipv6AllowMulticastProbe;
  }

  // ipv6_allow_traffic_redirect - computed: true, optional: true, required: false
  private _ipv6AllowTrafficRedirect?: string; 
  public get ipv6AllowTrafficRedirect() {
    return this.getStringAttribute('ipv6_allow_traffic_redirect');
  }
  public set ipv6AllowTrafficRedirect(value: string) {
    this._ipv6AllowTrafficRedirect = value;
  }
  public resetIpv6AllowTrafficRedirect() {
    this._ipv6AllowTrafficRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AllowTrafficRedirectInput() {
    return this._ipv6AllowTrafficRedirect;
  }

  // ipv6_fragment_timeout - computed: true, optional: true, required: false
  private _ipv6FragmentTimeout?: number; 
  public get ipv6FragmentTimeout() {
    return this.getNumberAttribute('ipv6_fragment_timeout');
  }
  public set ipv6FragmentTimeout(value: number) {
    this._ipv6FragmentTimeout = value;
  }
  public resetIpv6FragmentTimeout() {
    this._ipv6FragmentTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FragmentTimeoutInput() {
    return this._ipv6FragmentTimeout;
  }

  // ipv6_snat_route_change - computed: true, optional: true, required: false
  private _ipv6SnatRouteChange?: string; 
  public get ipv6SnatRouteChange() {
    return this.getStringAttribute('ipv6_snat_route_change');
  }
  public set ipv6SnatRouteChange(value: string) {
    this._ipv6SnatRouteChange = value;
  }
  public resetIpv6SnatRouteChange() {
    this._ipv6SnatRouteChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SnatRouteChangeInput() {
    return this._ipv6SnatRouteChange;
  }

  // irq_time_accounting - computed: true, optional: true, required: false
  private _irqTimeAccounting?: string; 
  public get irqTimeAccounting() {
    return this.getStringAttribute('irq_time_accounting');
  }
  public set irqTimeAccounting(value: string) {
    this._irqTimeAccounting = value;
  }
  public resetIrqTimeAccounting() {
    this._irqTimeAccounting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get irqTimeAccountingInput() {
    return this._irqTimeAccounting;
  }

  // language - computed: true, optional: true, required: false
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }

  // ldapconntimeout - computed: true, optional: true, required: false
  private _ldapconntimeout?: number; 
  public get ldapconntimeout() {
    return this.getNumberAttribute('ldapconntimeout');
  }
  public set ldapconntimeout(value: number) {
    this._ldapconntimeout = value;
  }
  public resetLdapconntimeout() {
    this._ldapconntimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapconntimeoutInput() {
    return this._ldapconntimeout;
  }

  // lldp_reception - computed: true, optional: true, required: false
  private _lldpReception?: string; 
  public get lldpReception() {
    return this.getStringAttribute('lldp_reception');
  }
  public set lldpReception(value: string) {
    this._lldpReception = value;
  }
  public resetLldpReception() {
    this._lldpReception = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpReceptionInput() {
    return this._lldpReception;
  }

  // lldp_transmission - computed: true, optional: true, required: false
  private _lldpTransmission?: string; 
  public get lldpTransmission() {
    return this.getStringAttribute('lldp_transmission');
  }
  public set lldpTransmission(value: string) {
    this._lldpTransmission = value;
  }
  public resetLldpTransmission() {
    this._lldpTransmission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpTransmissionInput() {
    return this._lldpTransmission;
  }

  // log_single_cpu_high - computed: true, optional: true, required: false
  private _logSingleCpuHigh?: string; 
  public get logSingleCpuHigh() {
    return this.getStringAttribute('log_single_cpu_high');
  }
  public set logSingleCpuHigh(value: string) {
    this._logSingleCpuHigh = value;
  }
  public resetLogSingleCpuHigh() {
    this._logSingleCpuHigh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSingleCpuHighInput() {
    return this._logSingleCpuHigh;
  }

  // log_ssl_connection - computed: true, optional: true, required: false
  private _logSslConnection?: string; 
  public get logSslConnection() {
    return this.getStringAttribute('log_ssl_connection');
  }
  public set logSslConnection(value: string) {
    this._logSslConnection = value;
  }
  public resetLogSslConnection() {
    this._logSslConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSslConnectionInput() {
    return this._logSslConnection;
  }

  // log_uuid_address - computed: true, optional: true, required: false
  private _logUuidAddress?: string; 
  public get logUuidAddress() {
    return this.getStringAttribute('log_uuid_address');
  }
  public set logUuidAddress(value: string) {
    this._logUuidAddress = value;
  }
  public resetLogUuidAddress() {
    this._logUuidAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logUuidAddressInput() {
    return this._logUuidAddress;
  }

  // log_uuid_policy - computed: false, optional: true, required: false
  private _logUuidPolicy?: string; 
  public get logUuidPolicy() {
    return this.getStringAttribute('log_uuid_policy');
  }
  public set logUuidPolicy(value: string) {
    this._logUuidPolicy = value;
  }
  public resetLogUuidPolicy() {
    this._logUuidPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logUuidPolicyInput() {
    return this._logUuidPolicy;
  }

  // login_timestamp - computed: true, optional: true, required: false
  private _loginTimestamp?: string; 
  public get loginTimestamp() {
    return this.getStringAttribute('login_timestamp');
  }
  public set loginTimestamp(value: string) {
    this._loginTimestamp = value;
  }
  public resetLoginTimestamp() {
    this._loginTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginTimestampInput() {
    return this._loginTimestamp;
  }

  // long_vdom_name - computed: true, optional: true, required: false
  private _longVdomName?: string; 
  public get longVdomName() {
    return this.getStringAttribute('long_vdom_name');
  }
  public set longVdomName(value: string) {
    this._longVdomName = value;
  }
  public resetLongVdomName() {
    this._longVdomName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longVdomNameInput() {
    return this._longVdomName;
  }

  // management_ip - computed: false, optional: true, required: false
  private _managementIp?: string; 
  public get managementIp() {
    return this.getStringAttribute('management_ip');
  }
  public set managementIp(value: string) {
    this._managementIp = value;
  }
  public resetManagementIp() {
    this._managementIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementIpInput() {
    return this._managementIp;
  }

  // management_port - computed: true, optional: true, required: false
  private _managementPort?: number; 
  public get managementPort() {
    return this.getNumberAttribute('management_port');
  }
  public set managementPort(value: number) {
    this._managementPort = value;
  }
  public resetManagementPort() {
    this._managementPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementPortInput() {
    return this._managementPort;
  }

  // management_port_use_admin_sport - computed: true, optional: true, required: false
  private _managementPortUseAdminSport?: string; 
  public get managementPortUseAdminSport() {
    return this.getStringAttribute('management_port_use_admin_sport');
  }
  public set managementPortUseAdminSport(value: string) {
    this._managementPortUseAdminSport = value;
  }
  public resetManagementPortUseAdminSport() {
    this._managementPortUseAdminSport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementPortUseAdminSportInput() {
    return this._managementPortUseAdminSport;
  }

  // management_vdom - computed: true, optional: true, required: false
  private _managementVdom?: string; 
  public get managementVdom() {
    return this.getStringAttribute('management_vdom');
  }
  public set managementVdom(value: string) {
    this._managementVdom = value;
  }
  public resetManagementVdom() {
    this._managementVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementVdomInput() {
    return this._managementVdom;
  }

  // max_dlpstat_memory - computed: false, optional: true, required: false
  private _maxDlpstatMemory?: number; 
  public get maxDlpstatMemory() {
    return this.getNumberAttribute('max_dlpstat_memory');
  }
  public set maxDlpstatMemory(value: number) {
    this._maxDlpstatMemory = value;
  }
  public resetMaxDlpstatMemory() {
    this._maxDlpstatMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDlpstatMemoryInput() {
    return this._maxDlpstatMemory;
  }

  // max_route_cache_size - computed: false, optional: true, required: false
  private _maxRouteCacheSize?: number; 
  public get maxRouteCacheSize() {
    return this.getNumberAttribute('max_route_cache_size');
  }
  public set maxRouteCacheSize(value: number) {
    this._maxRouteCacheSize = value;
  }
  public resetMaxRouteCacheSize() {
    this._maxRouteCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRouteCacheSizeInput() {
    return this._maxRouteCacheSize;
  }

  // mc_ttl_notchange - computed: false, optional: true, required: false
  private _mcTtlNotchange?: string; 
  public get mcTtlNotchange() {
    return this.getStringAttribute('mc_ttl_notchange');
  }
  public set mcTtlNotchange(value: string) {
    this._mcTtlNotchange = value;
  }
  public resetMcTtlNotchange() {
    this._mcTtlNotchange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcTtlNotchangeInput() {
    return this._mcTtlNotchange;
  }

  // memory_use_threshold_extreme - computed: true, optional: true, required: false
  private _memoryUseThresholdExtreme?: number; 
  public get memoryUseThresholdExtreme() {
    return this.getNumberAttribute('memory_use_threshold_extreme');
  }
  public set memoryUseThresholdExtreme(value: number) {
    this._memoryUseThresholdExtreme = value;
  }
  public resetMemoryUseThresholdExtreme() {
    this._memoryUseThresholdExtreme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryUseThresholdExtremeInput() {
    return this._memoryUseThresholdExtreme;
  }

  // memory_use_threshold_green - computed: true, optional: true, required: false
  private _memoryUseThresholdGreen?: number; 
  public get memoryUseThresholdGreen() {
    return this.getNumberAttribute('memory_use_threshold_green');
  }
  public set memoryUseThresholdGreen(value: number) {
    this._memoryUseThresholdGreen = value;
  }
  public resetMemoryUseThresholdGreen() {
    this._memoryUseThresholdGreen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryUseThresholdGreenInput() {
    return this._memoryUseThresholdGreen;
  }

  // memory_use_threshold_red - computed: true, optional: true, required: false
  private _memoryUseThresholdRed?: number; 
  public get memoryUseThresholdRed() {
    return this.getNumberAttribute('memory_use_threshold_red');
  }
  public set memoryUseThresholdRed(value: number) {
    this._memoryUseThresholdRed = value;
  }
  public resetMemoryUseThresholdRed() {
    this._memoryUseThresholdRed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryUseThresholdRedInput() {
    return this._memoryUseThresholdRed;
  }

  // miglog_affinity - computed: true, optional: true, required: false
  private _miglogAffinity?: string; 
  public get miglogAffinity() {
    return this.getStringAttribute('miglog_affinity');
  }
  public set miglogAffinity(value: string) {
    this._miglogAffinity = value;
  }
  public resetMiglogAffinity() {
    this._miglogAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get miglogAffinityInput() {
    return this._miglogAffinity;
  }

  // miglogd_children - computed: false, optional: true, required: false
  private _miglogdChildren?: number; 
  public get miglogdChildren() {
    return this.getNumberAttribute('miglogd_children');
  }
  public set miglogdChildren(value: number) {
    this._miglogdChildren = value;
  }
  public resetMiglogdChildren() {
    this._miglogdChildren = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get miglogdChildrenInput() {
    return this._miglogdChildren;
  }

  // multi_factor_authentication - computed: true, optional: true, required: false
  private _multiFactorAuthentication?: string; 
  public get multiFactorAuthentication() {
    return this.getStringAttribute('multi_factor_authentication');
  }
  public set multiFactorAuthentication(value: string) {
    this._multiFactorAuthentication = value;
  }
  public resetMultiFactorAuthentication() {
    this._multiFactorAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiFactorAuthenticationInput() {
    return this._multiFactorAuthentication;
  }

  // multicast_forward - computed: false, optional: true, required: false
  private _multicastForward?: string; 
  public get multicastForward() {
    return this.getStringAttribute('multicast_forward');
  }
  public set multicastForward(value: string) {
    this._multicastForward = value;
  }
  public resetMulticastForward() {
    this._multicastForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastForwardInput() {
    return this._multicastForward;
  }

  // ndp_max_entry - computed: false, optional: true, required: false
  private _ndpMaxEntry?: number; 
  public get ndpMaxEntry() {
    return this.getNumberAttribute('ndp_max_entry');
  }
  public set ndpMaxEntry(value: number) {
    this._ndpMaxEntry = value;
  }
  public resetNdpMaxEntry() {
    this._ndpMaxEntry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndpMaxEntryInput() {
    return this._ndpMaxEntry;
  }

  // npu_neighbor_update - computed: true, optional: true, required: false
  private _npuNeighborUpdate?: string; 
  public get npuNeighborUpdate() {
    return this.getStringAttribute('npu_neighbor_update');
  }
  public set npuNeighborUpdate(value: string) {
    this._npuNeighborUpdate = value;
  }
  public resetNpuNeighborUpdate() {
    this._npuNeighborUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get npuNeighborUpdateInput() {
    return this._npuNeighborUpdate;
  }

  // per_user_bal - computed: true, optional: true, required: false
  private _perUserBal?: string; 
  public get perUserBal() {
    return this.getStringAttribute('per_user_bal');
  }
  public set perUserBal(value: string) {
    this._perUserBal = value;
  }
  public resetPerUserBal() {
    this._perUserBal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perUserBalInput() {
    return this._perUserBal;
  }

  // per_user_bwl - computed: true, optional: true, required: false
  private _perUserBwl?: string; 
  public get perUserBwl() {
    return this.getStringAttribute('per_user_bwl');
  }
  public set perUserBwl(value: string) {
    this._perUserBwl = value;
  }
  public resetPerUserBwl() {
    this._perUserBwl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perUserBwlInput() {
    return this._perUserBwl;
  }

  // pmtu_discovery - computed: true, optional: true, required: false
  private _pmtuDiscovery?: string; 
  public get pmtuDiscovery() {
    return this.getStringAttribute('pmtu_discovery');
  }
  public set pmtuDiscovery(value: string) {
    this._pmtuDiscovery = value;
  }
  public resetPmtuDiscovery() {
    this._pmtuDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmtuDiscoveryInput() {
    return this._pmtuDiscovery;
  }

  // policy_auth_concurrent - computed: false, optional: true, required: false
  private _policyAuthConcurrent?: number; 
  public get policyAuthConcurrent() {
    return this.getNumberAttribute('policy_auth_concurrent');
  }
  public set policyAuthConcurrent(value: number) {
    this._policyAuthConcurrent = value;
  }
  public resetPolicyAuthConcurrent() {
    this._policyAuthConcurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyAuthConcurrentInput() {
    return this._policyAuthConcurrent;
  }

  // post_login_banner - computed: true, optional: true, required: false
  private _postLoginBanner?: string; 
  public get postLoginBanner() {
    return this.getStringAttribute('post_login_banner');
  }
  public set postLoginBanner(value: string) {
    this._postLoginBanner = value;
  }
  public resetPostLoginBanner() {
    this._postLoginBanner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postLoginBannerInput() {
    return this._postLoginBanner;
  }

  // pre_login_banner - computed: true, optional: true, required: false
  private _preLoginBanner?: string; 
  public get preLoginBanner() {
    return this.getStringAttribute('pre_login_banner');
  }
  public set preLoginBanner(value: string) {
    this._preLoginBanner = value;
  }
  public resetPreLoginBanner() {
    this._preLoginBanner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preLoginBannerInput() {
    return this._preLoginBanner;
  }

  // private_data_encryption - computed: true, optional: true, required: false
  private _privateDataEncryption?: string; 
  public get privateDataEncryption() {
    return this.getStringAttribute('private_data_encryption');
  }
  public set privateDataEncryption(value: string) {
    this._privateDataEncryption = value;
  }
  public resetPrivateDataEncryption() {
    this._privateDataEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateDataEncryptionInput() {
    return this._privateDataEncryption;
  }

  // proxy_auth_lifetime - computed: true, optional: true, required: false
  private _proxyAuthLifetime?: string; 
  public get proxyAuthLifetime() {
    return this.getStringAttribute('proxy_auth_lifetime');
  }
  public set proxyAuthLifetime(value: string) {
    this._proxyAuthLifetime = value;
  }
  public resetProxyAuthLifetime() {
    this._proxyAuthLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAuthLifetimeInput() {
    return this._proxyAuthLifetime;
  }

  // proxy_auth_lifetime_timeout - computed: true, optional: true, required: false
  private _proxyAuthLifetimeTimeout?: number; 
  public get proxyAuthLifetimeTimeout() {
    return this.getNumberAttribute('proxy_auth_lifetime_timeout');
  }
  public set proxyAuthLifetimeTimeout(value: number) {
    this._proxyAuthLifetimeTimeout = value;
  }
  public resetProxyAuthLifetimeTimeout() {
    this._proxyAuthLifetimeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAuthLifetimeTimeoutInput() {
    return this._proxyAuthLifetimeTimeout;
  }

  // proxy_auth_timeout - computed: true, optional: true, required: false
  private _proxyAuthTimeout?: number; 
  public get proxyAuthTimeout() {
    return this.getNumberAttribute('proxy_auth_timeout');
  }
  public set proxyAuthTimeout(value: number) {
    this._proxyAuthTimeout = value;
  }
  public resetProxyAuthTimeout() {
    this._proxyAuthTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAuthTimeoutInput() {
    return this._proxyAuthTimeout;
  }

  // proxy_cert_use_mgmt_vdom - computed: true, optional: true, required: false
  private _proxyCertUseMgmtVdom?: string; 
  public get proxyCertUseMgmtVdom() {
    return this.getStringAttribute('proxy_cert_use_mgmt_vdom');
  }
  public set proxyCertUseMgmtVdom(value: string) {
    this._proxyCertUseMgmtVdom = value;
  }
  public resetProxyCertUseMgmtVdom() {
    this._proxyCertUseMgmtVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyCertUseMgmtVdomInput() {
    return this._proxyCertUseMgmtVdom;
  }

  // proxy_cipher_hardware_acceleration - computed: false, optional: true, required: false
  private _proxyCipherHardwareAcceleration?: string; 
  public get proxyCipherHardwareAcceleration() {
    return this.getStringAttribute('proxy_cipher_hardware_acceleration');
  }
  public set proxyCipherHardwareAcceleration(value: string) {
    this._proxyCipherHardwareAcceleration = value;
  }
  public resetProxyCipherHardwareAcceleration() {
    this._proxyCipherHardwareAcceleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyCipherHardwareAccelerationInput() {
    return this._proxyCipherHardwareAcceleration;
  }

  // proxy_hardware_acceleration - computed: true, optional: true, required: false
  private _proxyHardwareAcceleration?: string; 
  public get proxyHardwareAcceleration() {
    return this.getStringAttribute('proxy_hardware_acceleration');
  }
  public set proxyHardwareAcceleration(value: string) {
    this._proxyHardwareAcceleration = value;
  }
  public resetProxyHardwareAcceleration() {
    this._proxyHardwareAcceleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyHardwareAccelerationInput() {
    return this._proxyHardwareAcceleration;
  }

  // proxy_keep_alive_mode - computed: true, optional: true, required: false
  private _proxyKeepAliveMode?: string; 
  public get proxyKeepAliveMode() {
    return this.getStringAttribute('proxy_keep_alive_mode');
  }
  public set proxyKeepAliveMode(value: string) {
    this._proxyKeepAliveMode = value;
  }
  public resetProxyKeepAliveMode() {
    this._proxyKeepAliveMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyKeepAliveModeInput() {
    return this._proxyKeepAliveMode;
  }

  // proxy_kxp_hardware_acceleration - computed: false, optional: true, required: false
  private _proxyKxpHardwareAcceleration?: string; 
  public get proxyKxpHardwareAcceleration() {
    return this.getStringAttribute('proxy_kxp_hardware_acceleration');
  }
  public set proxyKxpHardwareAcceleration(value: string) {
    this._proxyKxpHardwareAcceleration = value;
  }
  public resetProxyKxpHardwareAcceleration() {
    this._proxyKxpHardwareAcceleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyKxpHardwareAccelerationInput() {
    return this._proxyKxpHardwareAcceleration;
  }

  // proxy_re_authentication_mode - computed: true, optional: true, required: false
  private _proxyReAuthenticationMode?: string; 
  public get proxyReAuthenticationMode() {
    return this.getStringAttribute('proxy_re_authentication_mode');
  }
  public set proxyReAuthenticationMode(value: string) {
    this._proxyReAuthenticationMode = value;
  }
  public resetProxyReAuthenticationMode() {
    this._proxyReAuthenticationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyReAuthenticationModeInput() {
    return this._proxyReAuthenticationMode;
  }

  // proxy_re_authentication_time - computed: true, optional: true, required: false
  private _proxyReAuthenticationTime?: number; 
  public get proxyReAuthenticationTime() {
    return this.getNumberAttribute('proxy_re_authentication_time');
  }
  public set proxyReAuthenticationTime(value: number) {
    this._proxyReAuthenticationTime = value;
  }
  public resetProxyReAuthenticationTime() {
    this._proxyReAuthenticationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyReAuthenticationTimeInput() {
    return this._proxyReAuthenticationTime;
  }

  // proxy_resource_mode - computed: true, optional: true, required: false
  private _proxyResourceMode?: string; 
  public get proxyResourceMode() {
    return this.getStringAttribute('proxy_resource_mode');
  }
  public set proxyResourceMode(value: string) {
    this._proxyResourceMode = value;
  }
  public resetProxyResourceMode() {
    this._proxyResourceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyResourceModeInput() {
    return this._proxyResourceMode;
  }

  // proxy_worker_count - computed: false, optional: true, required: false
  private _proxyWorkerCount?: number; 
  public get proxyWorkerCount() {
    return this.getNumberAttribute('proxy_worker_count');
  }
  public set proxyWorkerCount(value: number) {
    this._proxyWorkerCount = value;
  }
  public resetProxyWorkerCount() {
    this._proxyWorkerCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyWorkerCountInput() {
    return this._proxyWorkerCount;
  }

  // purdue_level - computed: true, optional: true, required: false
  private _purdueLevel?: string; 
  public get purdueLevel() {
    return this.getStringAttribute('purdue_level');
  }
  public set purdueLevel(value: string) {
    this._purdueLevel = value;
  }
  public resetPurdueLevel() {
    this._purdueLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purdueLevelInput() {
    return this._purdueLevel;
  }

  // quic_ack_thresold - computed: true, optional: true, required: false
  private _quicAckThresold?: number; 
  public get quicAckThresold() {
    return this.getNumberAttribute('quic_ack_thresold');
  }
  public set quicAckThresold(value: number) {
    this._quicAckThresold = value;
  }
  public resetQuicAckThresold() {
    this._quicAckThresold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicAckThresoldInput() {
    return this._quicAckThresold;
  }

  // quic_congestion_control_algo - computed: true, optional: true, required: false
  private _quicCongestionControlAlgo?: string; 
  public get quicCongestionControlAlgo() {
    return this.getStringAttribute('quic_congestion_control_algo');
  }
  public set quicCongestionControlAlgo(value: string) {
    this._quicCongestionControlAlgo = value;
  }
  public resetQuicCongestionControlAlgo() {
    this._quicCongestionControlAlgo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicCongestionControlAlgoInput() {
    return this._quicCongestionControlAlgo;
  }

  // quic_max_datagram_size - computed: true, optional: true, required: false
  private _quicMaxDatagramSize?: number; 
  public get quicMaxDatagramSize() {
    return this.getNumberAttribute('quic_max_datagram_size');
  }
  public set quicMaxDatagramSize(value: number) {
    this._quicMaxDatagramSize = value;
  }
  public resetQuicMaxDatagramSize() {
    this._quicMaxDatagramSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicMaxDatagramSizeInput() {
    return this._quicMaxDatagramSize;
  }

  // quic_pmtud - computed: true, optional: true, required: false
  private _quicPmtud?: string; 
  public get quicPmtud() {
    return this.getStringAttribute('quic_pmtud');
  }
  public set quicPmtud(value: string) {
    this._quicPmtud = value;
  }
  public resetQuicPmtud() {
    this._quicPmtud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicPmtudInput() {
    return this._quicPmtud;
  }

  // quic_tls_handshake_timeout - computed: true, optional: true, required: false
  private _quicTlsHandshakeTimeout?: number; 
  public get quicTlsHandshakeTimeout() {
    return this.getNumberAttribute('quic_tls_handshake_timeout');
  }
  public set quicTlsHandshakeTimeout(value: number) {
    this._quicTlsHandshakeTimeout = value;
  }
  public resetQuicTlsHandshakeTimeout() {
    this._quicTlsHandshakeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicTlsHandshakeTimeoutInput() {
    return this._quicTlsHandshakeTimeout;
  }

  // quic_udp_payload_size_shaping_per_cid - computed: true, optional: true, required: false
  private _quicUdpPayloadSizeShapingPerCid?: string; 
  public get quicUdpPayloadSizeShapingPerCid() {
    return this.getStringAttribute('quic_udp_payload_size_shaping_per_cid');
  }
  public set quicUdpPayloadSizeShapingPerCid(value: string) {
    this._quicUdpPayloadSizeShapingPerCid = value;
  }
  public resetQuicUdpPayloadSizeShapingPerCid() {
    this._quicUdpPayloadSizeShapingPerCid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicUdpPayloadSizeShapingPerCidInput() {
    return this._quicUdpPayloadSizeShapingPerCid;
  }

  // radius_port - computed: true, optional: true, required: false
  private _radiusPort?: number; 
  public get radiusPort() {
    return this.getNumberAttribute('radius_port');
  }
  public set radiusPort(value: number) {
    this._radiusPort = value;
  }
  public resetRadiusPort() {
    this._radiusPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusPortInput() {
    return this._radiusPort;
  }

  // reboot_upon_config_restore - computed: true, optional: true, required: false
  private _rebootUponConfigRestore?: string; 
  public get rebootUponConfigRestore() {
    return this.getStringAttribute('reboot_upon_config_restore');
  }
  public set rebootUponConfigRestore(value: string) {
    this._rebootUponConfigRestore = value;
  }
  public resetRebootUponConfigRestore() {
    this._rebootUponConfigRestore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootUponConfigRestoreInput() {
    return this._rebootUponConfigRestore;
  }

  // refresh - computed: false, optional: true, required: false
  private _refresh?: number; 
  public get refresh() {
    return this.getNumberAttribute('refresh');
  }
  public set refresh(value: number) {
    this._refresh = value;
  }
  public resetRefresh() {
    this._refresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshInput() {
    return this._refresh;
  }

  // remoteauthtimeout - computed: true, optional: true, required: false
  private _remoteauthtimeout?: number; 
  public get remoteauthtimeout() {
    return this.getNumberAttribute('remoteauthtimeout');
  }
  public set remoteauthtimeout(value: number) {
    this._remoteauthtimeout = value;
  }
  public resetRemoteauthtimeout() {
    this._remoteauthtimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteauthtimeoutInput() {
    return this._remoteauthtimeout;
  }

  // reset_sessionless_tcp - computed: true, optional: true, required: false
  private _resetSessionlessTcp?: string; 
  public get resetSessionlessTcp() {
    return this.getStringAttribute('reset_sessionless_tcp');
  }
  public set resetSessionlessTcp(value: string) {
    this._resetSessionlessTcp = value;
  }
  public resetResetSessionlessTcp() {
    this._resetSessionlessTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetSessionlessTcpInput() {
    return this._resetSessionlessTcp;
  }

  // rest_api_key_url_query - computed: true, optional: true, required: false
  private _restApiKeyUrlQuery?: string; 
  public get restApiKeyUrlQuery() {
    return this.getStringAttribute('rest_api_key_url_query');
  }
  public set restApiKeyUrlQuery(value: string) {
    this._restApiKeyUrlQuery = value;
  }
  public resetRestApiKeyUrlQuery() {
    this._restApiKeyUrlQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restApiKeyUrlQueryInput() {
    return this._restApiKeyUrlQuery;
  }

  // restart_time - computed: true, optional: true, required: false
  private _restartTime?: string; 
  public get restartTime() {
    return this.getStringAttribute('restart_time');
  }
  public set restartTime(value: string) {
    this._restartTime = value;
  }
  public resetRestartTime() {
    this._restartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartTimeInput() {
    return this._restartTime;
  }

  // revision_backup_on_logout - computed: true, optional: true, required: false
  private _revisionBackupOnLogout?: string; 
  public get revisionBackupOnLogout() {
    return this.getStringAttribute('revision_backup_on_logout');
  }
  public set revisionBackupOnLogout(value: string) {
    this._revisionBackupOnLogout = value;
  }
  public resetRevisionBackupOnLogout() {
    this._revisionBackupOnLogout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionBackupOnLogoutInput() {
    return this._revisionBackupOnLogout;
  }

  // revision_image_auto_backup - computed: true, optional: true, required: false
  private _revisionImageAutoBackup?: string; 
  public get revisionImageAutoBackup() {
    return this.getStringAttribute('revision_image_auto_backup');
  }
  public set revisionImageAutoBackup(value: string) {
    this._revisionImageAutoBackup = value;
  }
  public resetRevisionImageAutoBackup() {
    this._revisionImageAutoBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionImageAutoBackupInput() {
    return this._revisionImageAutoBackup;
  }

  // router_affinity - computed: true, optional: true, required: false
  private _routerAffinity?: string; 
  public get routerAffinity() {
    return this.getStringAttribute('router_affinity');
  }
  public set routerAffinity(value: string) {
    this._routerAffinity = value;
  }
  public resetRouterAffinity() {
    this._routerAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerAffinityInput() {
    return this._routerAffinity;
  }

  // scanunit_count - computed: false, optional: true, required: false
  private _scanunitCount?: number; 
  public get scanunitCount() {
    return this.getNumberAttribute('scanunit_count');
  }
  public set scanunitCount(value: number) {
    this._scanunitCount = value;
  }
  public resetScanunitCount() {
    this._scanunitCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanunitCountInput() {
    return this._scanunitCount;
  }

  // scim_http_port - computed: true, optional: true, required: false
  private _scimHttpPort?: number; 
  public get scimHttpPort() {
    return this.getNumberAttribute('scim_http_port');
  }
  public set scimHttpPort(value: number) {
    this._scimHttpPort = value;
  }
  public resetScimHttpPort() {
    this._scimHttpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scimHttpPortInput() {
    return this._scimHttpPort;
  }

  // scim_https_port - computed: true, optional: true, required: false
  private _scimHttpsPort?: number; 
  public get scimHttpsPort() {
    return this.getNumberAttribute('scim_https_port');
  }
  public set scimHttpsPort(value: number) {
    this._scimHttpsPort = value;
  }
  public resetScimHttpsPort() {
    this._scimHttpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scimHttpsPortInput() {
    return this._scimHttpsPort;
  }

  // scim_server_cert - computed: true, optional: true, required: false
  private _scimServerCert?: string; 
  public get scimServerCert() {
    return this.getStringAttribute('scim_server_cert');
  }
  public set scimServerCert(value: string) {
    this._scimServerCert = value;
  }
  public resetScimServerCert() {
    this._scimServerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scimServerCertInput() {
    return this._scimServerCert;
  }

  // security_rating_result_submission - computed: true, optional: true, required: false
  private _securityRatingResultSubmission?: string; 
  public get securityRatingResultSubmission() {
    return this.getStringAttribute('security_rating_result_submission');
  }
  public set securityRatingResultSubmission(value: string) {
    this._securityRatingResultSubmission = value;
  }
  public resetSecurityRatingResultSubmission() {
    this._securityRatingResultSubmission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityRatingResultSubmissionInput() {
    return this._securityRatingResultSubmission;
  }

  // security_rating_run_on_schedule - computed: true, optional: true, required: false
  private _securityRatingRunOnSchedule?: string; 
  public get securityRatingRunOnSchedule() {
    return this.getStringAttribute('security_rating_run_on_schedule');
  }
  public set securityRatingRunOnSchedule(value: string) {
    this._securityRatingRunOnSchedule = value;
  }
  public resetSecurityRatingRunOnSchedule() {
    this._securityRatingRunOnSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityRatingRunOnScheduleInput() {
    return this._securityRatingRunOnSchedule;
  }

  // send_pmtu_icmp - computed: true, optional: true, required: false
  private _sendPmtuIcmp?: string; 
  public get sendPmtuIcmp() {
    return this.getStringAttribute('send_pmtu_icmp');
  }
  public set sendPmtuIcmp(value: string) {
    this._sendPmtuIcmp = value;
  }
  public resetSendPmtuIcmp() {
    this._sendPmtuIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendPmtuIcmpInput() {
    return this._sendPmtuIcmp;
  }

  // sflowd_max_children_num - computed: true, optional: true, required: false
  private _sflowdMaxChildrenNum?: number; 
  public get sflowdMaxChildrenNum() {
    return this.getNumberAttribute('sflowd_max_children_num');
  }
  public set sflowdMaxChildrenNum(value: number) {
    this._sflowdMaxChildrenNum = value;
  }
  public resetSflowdMaxChildrenNum() {
    this._sflowdMaxChildrenNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowdMaxChildrenNumInput() {
    return this._sflowdMaxChildrenNum;
  }

  // snat_route_change - computed: true, optional: true, required: false
  private _snatRouteChange?: string; 
  public get snatRouteChange() {
    return this.getStringAttribute('snat_route_change');
  }
  public set snatRouteChange(value: string) {
    this._snatRouteChange = value;
  }
  public resetSnatRouteChange() {
    this._snatRouteChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatRouteChangeInput() {
    return this._snatRouteChange;
  }

  // special_file_23_support - computed: true, optional: true, required: false
  private _specialFile23Support?: string; 
  public get specialFile23Support() {
    return this.getStringAttribute('special_file_23_support');
  }
  public set specialFile23Support(value: string) {
    this._specialFile23Support = value;
  }
  public resetSpecialFile23Support() {
    this._specialFile23Support = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specialFile23SupportInput() {
    return this._specialFile23Support;
  }

  // speedtest_server - computed: true, optional: true, required: false
  private _speedtestServer?: string; 
  public get speedtestServer() {
    return this.getStringAttribute('speedtest_server');
  }
  public set speedtestServer(value: string) {
    this._speedtestServer = value;
  }
  public resetSpeedtestServer() {
    this._speedtestServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedtestServerInput() {
    return this._speedtestServer;
  }

  // speedtestd_ctrl_port - computed: true, optional: true, required: false
  private _speedtestdCtrlPort?: number; 
  public get speedtestdCtrlPort() {
    return this.getNumberAttribute('speedtestd_ctrl_port');
  }
  public set speedtestdCtrlPort(value: number) {
    this._speedtestdCtrlPort = value;
  }
  public resetSpeedtestdCtrlPort() {
    this._speedtestdCtrlPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedtestdCtrlPortInput() {
    return this._speedtestdCtrlPort;
  }

  // speedtestd_server_port - computed: true, optional: true, required: false
  private _speedtestdServerPort?: number; 
  public get speedtestdServerPort() {
    return this.getNumberAttribute('speedtestd_server_port');
  }
  public set speedtestdServerPort(value: number) {
    this._speedtestdServerPort = value;
  }
  public resetSpeedtestdServerPort() {
    this._speedtestdServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedtestdServerPortInput() {
    return this._speedtestdServerPort;
  }

  // split_port - computed: false, optional: true, required: false
  private _splitPort?: string; 
  public get splitPort() {
    return this.getStringAttribute('split_port');
  }
  public set splitPort(value: string) {
    this._splitPort = value;
  }
  public resetSplitPort() {
    this._splitPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitPortInput() {
    return this._splitPort;
  }

  // ssd_trim_date - computed: true, optional: true, required: false
  private _ssdTrimDate?: number; 
  public get ssdTrimDate() {
    return this.getNumberAttribute('ssd_trim_date');
  }
  public set ssdTrimDate(value: number) {
    this._ssdTrimDate = value;
  }
  public resetSsdTrimDate() {
    this._ssdTrimDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssdTrimDateInput() {
    return this._ssdTrimDate;
  }

  // ssd_trim_freq - computed: true, optional: true, required: false
  private _ssdTrimFreq?: string; 
  public get ssdTrimFreq() {
    return this.getStringAttribute('ssd_trim_freq');
  }
  public set ssdTrimFreq(value: string) {
    this._ssdTrimFreq = value;
  }
  public resetSsdTrimFreq() {
    this._ssdTrimFreq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssdTrimFreqInput() {
    return this._ssdTrimFreq;
  }

  // ssd_trim_hour - computed: true, optional: true, required: false
  private _ssdTrimHour?: number; 
  public get ssdTrimHour() {
    return this.getNumberAttribute('ssd_trim_hour');
  }
  public set ssdTrimHour(value: number) {
    this._ssdTrimHour = value;
  }
  public resetSsdTrimHour() {
    this._ssdTrimHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssdTrimHourInput() {
    return this._ssdTrimHour;
  }

  // ssd_trim_min - computed: true, optional: true, required: false
  private _ssdTrimMin?: number; 
  public get ssdTrimMin() {
    return this.getNumberAttribute('ssd_trim_min');
  }
  public set ssdTrimMin(value: number) {
    this._ssdTrimMin = value;
  }
  public resetSsdTrimMin() {
    this._ssdTrimMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssdTrimMinInput() {
    return this._ssdTrimMin;
  }

  // ssd_trim_weekday - computed: true, optional: true, required: false
  private _ssdTrimWeekday?: string; 
  public get ssdTrimWeekday() {
    return this.getStringAttribute('ssd_trim_weekday');
  }
  public set ssdTrimWeekday(value: string) {
    this._ssdTrimWeekday = value;
  }
  public resetSsdTrimWeekday() {
    this._ssdTrimWeekday = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssdTrimWeekdayInput() {
    return this._ssdTrimWeekday;
  }

  // ssh_cbc_cipher - computed: true, optional: true, required: false
  private _sshCbcCipher?: string; 
  public get sshCbcCipher() {
    return this.getStringAttribute('ssh_cbc_cipher');
  }
  public set sshCbcCipher(value: string) {
    this._sshCbcCipher = value;
  }
  public resetSshCbcCipher() {
    this._sshCbcCipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshCbcCipherInput() {
    return this._sshCbcCipher;
  }

  // ssh_enc_algo - computed: true, optional: true, required: false
  private _sshEncAlgo?: string; 
  public get sshEncAlgo() {
    return this.getStringAttribute('ssh_enc_algo');
  }
  public set sshEncAlgo(value: string) {
    this._sshEncAlgo = value;
  }
  public resetSshEncAlgo() {
    this._sshEncAlgo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshEncAlgoInput() {
    return this._sshEncAlgo;
  }

  // ssh_hmac_md5 - computed: true, optional: true, required: false
  private _sshHmacMd5?: string; 
  public get sshHmacMd5() {
    return this.getStringAttribute('ssh_hmac_md5');
  }
  public set sshHmacMd5(value: string) {
    this._sshHmacMd5 = value;
  }
  public resetSshHmacMd5() {
    this._sshHmacMd5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshHmacMd5Input() {
    return this._sshHmacMd5;
  }

  // ssh_hostkey - computed: false, optional: true, required: false
  private _sshHostkey?: string; 
  public get sshHostkey() {
    return this.getStringAttribute('ssh_hostkey');
  }
  public set sshHostkey(value: string) {
    this._sshHostkey = value;
  }
  public resetSshHostkey() {
    this._sshHostkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshHostkeyInput() {
    return this._sshHostkey;
  }

  // ssh_hostkey_algo - computed: true, optional: true, required: false
  private _sshHostkeyAlgo?: string; 
  public get sshHostkeyAlgo() {
    return this.getStringAttribute('ssh_hostkey_algo');
  }
  public set sshHostkeyAlgo(value: string) {
    this._sshHostkeyAlgo = value;
  }
  public resetSshHostkeyAlgo() {
    this._sshHostkeyAlgo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshHostkeyAlgoInput() {
    return this._sshHostkeyAlgo;
  }

  // ssh_hostkey_override - computed: true, optional: true, required: false
  private _sshHostkeyOverride?: string; 
  public get sshHostkeyOverride() {
    return this.getStringAttribute('ssh_hostkey_override');
  }
  public set sshHostkeyOverride(value: string) {
    this._sshHostkeyOverride = value;
  }
  public resetSshHostkeyOverride() {
    this._sshHostkeyOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshHostkeyOverrideInput() {
    return this._sshHostkeyOverride;
  }

  // ssh_hostkey_password - computed: false, optional: true, required: false
  private _sshHostkeyPassword?: string; 
  public get sshHostkeyPassword() {
    return this.getStringAttribute('ssh_hostkey_password');
  }
  public set sshHostkeyPassword(value: string) {
    this._sshHostkeyPassword = value;
  }
  public resetSshHostkeyPassword() {
    this._sshHostkeyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshHostkeyPasswordInput() {
    return this._sshHostkeyPassword;
  }

  // ssh_kex_algo - computed: true, optional: true, required: false
  private _sshKexAlgo?: string; 
  public get sshKexAlgo() {
    return this.getStringAttribute('ssh_kex_algo');
  }
  public set sshKexAlgo(value: string) {
    this._sshKexAlgo = value;
  }
  public resetSshKexAlgo() {
    this._sshKexAlgo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKexAlgoInput() {
    return this._sshKexAlgo;
  }

  // ssh_kex_sha1 - computed: true, optional: true, required: false
  private _sshKexSha1?: string; 
  public get sshKexSha1() {
    return this.getStringAttribute('ssh_kex_sha1');
  }
  public set sshKexSha1(value: string) {
    this._sshKexSha1 = value;
  }
  public resetSshKexSha1() {
    this._sshKexSha1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKexSha1Input() {
    return this._sshKexSha1;
  }

  // ssh_mac_algo - computed: true, optional: true, required: false
  private _sshMacAlgo?: string; 
  public get sshMacAlgo() {
    return this.getStringAttribute('ssh_mac_algo');
  }
  public set sshMacAlgo(value: string) {
    this._sshMacAlgo = value;
  }
  public resetSshMacAlgo() {
    this._sshMacAlgo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshMacAlgoInput() {
    return this._sshMacAlgo;
  }

  // ssh_mac_weak - computed: true, optional: true, required: false
  private _sshMacWeak?: string; 
  public get sshMacWeak() {
    return this.getStringAttribute('ssh_mac_weak');
  }
  public set sshMacWeak(value: string) {
    this._sshMacWeak = value;
  }
  public resetSshMacWeak() {
    this._sshMacWeak = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshMacWeakInput() {
    return this._sshMacWeak;
  }

  // ssl_min_proto_version - computed: true, optional: true, required: false
  private _sslMinProtoVersion?: string; 
  public get sslMinProtoVersion() {
    return this.getStringAttribute('ssl_min_proto_version');
  }
  public set sslMinProtoVersion(value: string) {
    this._sslMinProtoVersion = value;
  }
  public resetSslMinProtoVersion() {
    this._sslMinProtoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslMinProtoVersionInput() {
    return this._sslMinProtoVersion;
  }

  // ssl_static_key_ciphers - computed: true, optional: true, required: false
  private _sslStaticKeyCiphers?: string; 
  public get sslStaticKeyCiphers() {
    return this.getStringAttribute('ssl_static_key_ciphers');
  }
  public set sslStaticKeyCiphers(value: string) {
    this._sslStaticKeyCiphers = value;
  }
  public resetSslStaticKeyCiphers() {
    this._sslStaticKeyCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslStaticKeyCiphersInput() {
    return this._sslStaticKeyCiphers;
  }

  // sslvpn_affinity - computed: true, optional: true, required: false
  private _sslvpnAffinity?: string; 
  public get sslvpnAffinity() {
    return this.getStringAttribute('sslvpn_affinity');
  }
  public set sslvpnAffinity(value: string) {
    this._sslvpnAffinity = value;
  }
  public resetSslvpnAffinity() {
    this._sslvpnAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnAffinityInput() {
    return this._sslvpnAffinity;
  }

  // sslvpn_cipher_hardware_acceleration - computed: true, optional: true, required: false
  private _sslvpnCipherHardwareAcceleration?: string; 
  public get sslvpnCipherHardwareAcceleration() {
    return this.getStringAttribute('sslvpn_cipher_hardware_acceleration');
  }
  public set sslvpnCipherHardwareAcceleration(value: string) {
    this._sslvpnCipherHardwareAcceleration = value;
  }
  public resetSslvpnCipherHardwareAcceleration() {
    this._sslvpnCipherHardwareAcceleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnCipherHardwareAccelerationInput() {
    return this._sslvpnCipherHardwareAcceleration;
  }

  // sslvpn_ems_sn_check - computed: true, optional: true, required: false
  private _sslvpnEmsSnCheck?: string; 
  public get sslvpnEmsSnCheck() {
    return this.getStringAttribute('sslvpn_ems_sn_check');
  }
  public set sslvpnEmsSnCheck(value: string) {
    this._sslvpnEmsSnCheck = value;
  }
  public resetSslvpnEmsSnCheck() {
    this._sslvpnEmsSnCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnEmsSnCheckInput() {
    return this._sslvpnEmsSnCheck;
  }

  // sslvpn_kxp_hardware_acceleration - computed: true, optional: true, required: false
  private _sslvpnKxpHardwareAcceleration?: string; 
  public get sslvpnKxpHardwareAcceleration() {
    return this.getStringAttribute('sslvpn_kxp_hardware_acceleration');
  }
  public set sslvpnKxpHardwareAcceleration(value: string) {
    this._sslvpnKxpHardwareAcceleration = value;
  }
  public resetSslvpnKxpHardwareAcceleration() {
    this._sslvpnKxpHardwareAcceleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnKxpHardwareAccelerationInput() {
    return this._sslvpnKxpHardwareAcceleration;
  }

  // sslvpn_max_worker_count - computed: false, optional: true, required: false
  private _sslvpnMaxWorkerCount?: number; 
  public get sslvpnMaxWorkerCount() {
    return this.getNumberAttribute('sslvpn_max_worker_count');
  }
  public set sslvpnMaxWorkerCount(value: number) {
    this._sslvpnMaxWorkerCount = value;
  }
  public resetSslvpnMaxWorkerCount() {
    this._sslvpnMaxWorkerCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnMaxWorkerCountInput() {
    return this._sslvpnMaxWorkerCount;
  }

  // sslvpn_plugin_version_check - computed: true, optional: true, required: false
  private _sslvpnPluginVersionCheck?: string; 
  public get sslvpnPluginVersionCheck() {
    return this.getStringAttribute('sslvpn_plugin_version_check');
  }
  public set sslvpnPluginVersionCheck(value: string) {
    this._sslvpnPluginVersionCheck = value;
  }
  public resetSslvpnPluginVersionCheck() {
    this._sslvpnPluginVersionCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnPluginVersionCheckInput() {
    return this._sslvpnPluginVersionCheck;
  }

  // sslvpn_web_mode - computed: true, optional: true, required: false
  private _sslvpnWebMode?: string; 
  public get sslvpnWebMode() {
    return this.getStringAttribute('sslvpn_web_mode');
  }
  public set sslvpnWebMode(value: string) {
    this._sslvpnWebMode = value;
  }
  public resetSslvpnWebMode() {
    this._sslvpnWebMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnWebModeInput() {
    return this._sslvpnWebMode;
  }

  // strict_dirty_session_check - computed: true, optional: true, required: false
  private _strictDirtySessionCheck?: string; 
  public get strictDirtySessionCheck() {
    return this.getStringAttribute('strict_dirty_session_check');
  }
  public set strictDirtySessionCheck(value: string) {
    this._strictDirtySessionCheck = value;
  }
  public resetStrictDirtySessionCheck() {
    this._strictDirtySessionCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictDirtySessionCheckInput() {
    return this._strictDirtySessionCheck;
  }

  // strong_crypto - computed: true, optional: true, required: false
  private _strongCrypto?: string; 
  public get strongCrypto() {
    return this.getStringAttribute('strong_crypto');
  }
  public set strongCrypto(value: string) {
    this._strongCrypto = value;
  }
  public resetStrongCrypto() {
    this._strongCrypto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strongCryptoInput() {
    return this._strongCrypto;
  }

  // switch_controller - computed: true, optional: true, required: false
  private _switchController?: string; 
  public get switchController() {
    return this.getStringAttribute('switch_controller');
  }
  public set switchController(value: string) {
    this._switchController = value;
  }
  public resetSwitchController() {
    this._switchController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerInput() {
    return this._switchController;
  }

  // switch_controller_reserved_network - computed: true, optional: true, required: false
  private _switchControllerReservedNetwork?: string; 
  public get switchControllerReservedNetwork() {
    return this.getStringAttribute('switch_controller_reserved_network');
  }
  public set switchControllerReservedNetwork(value: string) {
    this._switchControllerReservedNetwork = value;
  }
  public resetSwitchControllerReservedNetwork() {
    this._switchControllerReservedNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerReservedNetworkInput() {
    return this._switchControllerReservedNetwork;
  }

  // sys_perf_log_interval - computed: true, optional: true, required: false
  private _sysPerfLogInterval?: number; 
  public get sysPerfLogInterval() {
    return this.getNumberAttribute('sys_perf_log_interval');
  }
  public set sysPerfLogInterval(value: number) {
    this._sysPerfLogInterval = value;
  }
  public resetSysPerfLogInterval() {
    this._sysPerfLogInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysPerfLogIntervalInput() {
    return this._sysPerfLogInterval;
  }

  // syslog_affinity - computed: true, optional: true, required: false
  private _syslogAffinity?: string; 
  public get syslogAffinity() {
    return this.getStringAttribute('syslog_affinity');
  }
  public set syslogAffinity(value: string) {
    this._syslogAffinity = value;
  }
  public resetSyslogAffinity() {
    this._syslogAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogAffinityInput() {
    return this._syslogAffinity;
  }

  // tcp_halfclose_timer - computed: true, optional: true, required: false
  private _tcpHalfcloseTimer?: number; 
  public get tcpHalfcloseTimer() {
    return this.getNumberAttribute('tcp_halfclose_timer');
  }
  public set tcpHalfcloseTimer(value: number) {
    this._tcpHalfcloseTimer = value;
  }
  public resetTcpHalfcloseTimer() {
    this._tcpHalfcloseTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpHalfcloseTimerInput() {
    return this._tcpHalfcloseTimer;
  }

  // tcp_halfopen_timer - computed: true, optional: true, required: false
  private _tcpHalfopenTimer?: number; 
  public get tcpHalfopenTimer() {
    return this.getNumberAttribute('tcp_halfopen_timer');
  }
  public set tcpHalfopenTimer(value: number) {
    this._tcpHalfopenTimer = value;
  }
  public resetTcpHalfopenTimer() {
    this._tcpHalfopenTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpHalfopenTimerInput() {
    return this._tcpHalfopenTimer;
  }

  // tcp_option - computed: true, optional: true, required: false
  private _tcpOption?: string; 
  public get tcpOption() {
    return this.getStringAttribute('tcp_option');
  }
  public set tcpOption(value: string) {
    this._tcpOption = value;
  }
  public resetTcpOption() {
    this._tcpOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpOptionInput() {
    return this._tcpOption;
  }

  // tcp_rst_timer - computed: true, optional: true, required: false
  private _tcpRstTimer?: number; 
  public get tcpRstTimer() {
    return this.getNumberAttribute('tcp_rst_timer');
  }
  public set tcpRstTimer(value: number) {
    this._tcpRstTimer = value;
  }
  public resetTcpRstTimer() {
    this._tcpRstTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRstTimerInput() {
    return this._tcpRstTimer;
  }

  // tcp_timewait_timer - computed: true, optional: true, required: false
  private _tcpTimewaitTimer?: number; 
  public get tcpTimewaitTimer() {
    return this.getNumberAttribute('tcp_timewait_timer');
  }
  public set tcpTimewaitTimer(value: number) {
    this._tcpTimewaitTimer = value;
  }
  public resetTcpTimewaitTimer() {
    this._tcpTimewaitTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpTimewaitTimerInput() {
    return this._tcpTimewaitTimer;
  }

  // tftp - computed: true, optional: true, required: false
  private _tftp?: string; 
  public get tftp() {
    return this.getStringAttribute('tftp');
  }
  public set tftp(value: string) {
    this._tftp = value;
  }
  public resetTftp() {
    this._tftp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tftpInput() {
    return this._tftp;
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // tls_session_cache - computed: true, optional: true, required: false
  private _tlsSessionCache?: string; 
  public get tlsSessionCache() {
    return this.getStringAttribute('tls_session_cache');
  }
  public set tlsSessionCache(value: string) {
    this._tlsSessionCache = value;
  }
  public resetTlsSessionCache() {
    this._tlsSessionCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSessionCacheInput() {
    return this._tlsSessionCache;
  }

  // tp_mc_skip_policy - computed: false, optional: true, required: false
  private _tpMcSkipPolicy?: string; 
  public get tpMcSkipPolicy() {
    return this.getStringAttribute('tp_mc_skip_policy');
  }
  public set tpMcSkipPolicy(value: string) {
    this._tpMcSkipPolicy = value;
  }
  public resetTpMcSkipPolicy() {
    this._tpMcSkipPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpMcSkipPolicyInput() {
    return this._tpMcSkipPolicy;
  }

  // traffic_priority - computed: true, optional: true, required: false
  private _trafficPriority?: string; 
  public get trafficPriority() {
    return this.getStringAttribute('traffic_priority');
  }
  public set trafficPriority(value: string) {
    this._trafficPriority = value;
  }
  public resetTrafficPriority() {
    this._trafficPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficPriorityInput() {
    return this._trafficPriority;
  }

  // traffic_priority_level - computed: true, optional: true, required: false
  private _trafficPriorityLevel?: string; 
  public get trafficPriorityLevel() {
    return this.getStringAttribute('traffic_priority_level');
  }
  public set trafficPriorityLevel(value: string) {
    this._trafficPriorityLevel = value;
  }
  public resetTrafficPriorityLevel() {
    this._trafficPriorityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficPriorityLevelInput() {
    return this._trafficPriorityLevel;
  }

  // two_factor_email_expiry - computed: true, optional: true, required: false
  private _twoFactorEmailExpiry?: number; 
  public get twoFactorEmailExpiry() {
    return this.getNumberAttribute('two_factor_email_expiry');
  }
  public set twoFactorEmailExpiry(value: number) {
    this._twoFactorEmailExpiry = value;
  }
  public resetTwoFactorEmailExpiry() {
    this._twoFactorEmailExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFactorEmailExpiryInput() {
    return this._twoFactorEmailExpiry;
  }

  // two_factor_fac_expiry - computed: true, optional: true, required: false
  private _twoFactorFacExpiry?: number; 
  public get twoFactorFacExpiry() {
    return this.getNumberAttribute('two_factor_fac_expiry');
  }
  public set twoFactorFacExpiry(value: number) {
    this._twoFactorFacExpiry = value;
  }
  public resetTwoFactorFacExpiry() {
    this._twoFactorFacExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFactorFacExpiryInput() {
    return this._twoFactorFacExpiry;
  }

  // two_factor_ftk_expiry - computed: true, optional: true, required: false
  private _twoFactorFtkExpiry?: number; 
  public get twoFactorFtkExpiry() {
    return this.getNumberAttribute('two_factor_ftk_expiry');
  }
  public set twoFactorFtkExpiry(value: number) {
    this._twoFactorFtkExpiry = value;
  }
  public resetTwoFactorFtkExpiry() {
    this._twoFactorFtkExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFactorFtkExpiryInput() {
    return this._twoFactorFtkExpiry;
  }

  // two_factor_ftm_expiry - computed: true, optional: true, required: false
  private _twoFactorFtmExpiry?: number; 
  public get twoFactorFtmExpiry() {
    return this.getNumberAttribute('two_factor_ftm_expiry');
  }
  public set twoFactorFtmExpiry(value: number) {
    this._twoFactorFtmExpiry = value;
  }
  public resetTwoFactorFtmExpiry() {
    this._twoFactorFtmExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFactorFtmExpiryInput() {
    return this._twoFactorFtmExpiry;
  }

  // two_factor_sms_expiry - computed: true, optional: true, required: false
  private _twoFactorSmsExpiry?: number; 
  public get twoFactorSmsExpiry() {
    return this.getNumberAttribute('two_factor_sms_expiry');
  }
  public set twoFactorSmsExpiry(value: number) {
    this._twoFactorSmsExpiry = value;
  }
  public resetTwoFactorSmsExpiry() {
    this._twoFactorSmsExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFactorSmsExpiryInput() {
    return this._twoFactorSmsExpiry;
  }

  // udp_idle_timer - computed: true, optional: true, required: false
  private _udpIdleTimer?: number; 
  public get udpIdleTimer() {
    return this.getNumberAttribute('udp_idle_timer');
  }
  public set udpIdleTimer(value: number) {
    this._udpIdleTimer = value;
  }
  public resetUdpIdleTimer() {
    this._udpIdleTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpIdleTimerInput() {
    return this._udpIdleTimer;
  }

  // upgrade_report - computed: true, optional: true, required: false
  private _upgradeReport?: string; 
  public get upgradeReport() {
    return this.getStringAttribute('upgrade_report');
  }
  public set upgradeReport(value: string) {
    this._upgradeReport = value;
  }
  public resetUpgradeReport() {
    this._upgradeReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeReportInput() {
    return this._upgradeReport;
  }

  // url_filter_affinity - computed: true, optional: true, required: false
  private _urlFilterAffinity?: string; 
  public get urlFilterAffinity() {
    return this.getStringAttribute('url_filter_affinity');
  }
  public set urlFilterAffinity(value: string) {
    this._urlFilterAffinity = value;
  }
  public resetUrlFilterAffinity() {
    this._urlFilterAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlFilterAffinityInput() {
    return this._urlFilterAffinity;
  }

  // url_filter_count - computed: true, optional: true, required: false
  private _urlFilterCount?: number; 
  public get urlFilterCount() {
    return this.getNumberAttribute('url_filter_count');
  }
  public set urlFilterCount(value: number) {
    this._urlFilterCount = value;
  }
  public resetUrlFilterCount() {
    this._urlFilterCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlFilterCountInput() {
    return this._urlFilterCount;
  }

  // user_device_store_max_device_mem - computed: true, optional: true, required: false
  private _userDeviceStoreMaxDeviceMem?: number; 
  public get userDeviceStoreMaxDeviceMem() {
    return this.getNumberAttribute('user_device_store_max_device_mem');
  }
  public set userDeviceStoreMaxDeviceMem(value: number) {
    this._userDeviceStoreMaxDeviceMem = value;
  }
  public resetUserDeviceStoreMaxDeviceMem() {
    this._userDeviceStoreMaxDeviceMem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDeviceStoreMaxDeviceMemInput() {
    return this._userDeviceStoreMaxDeviceMem;
  }

  // user_device_store_max_devices - computed: true, optional: true, required: false
  private _userDeviceStoreMaxDevices?: number; 
  public get userDeviceStoreMaxDevices() {
    return this.getNumberAttribute('user_device_store_max_devices');
  }
  public set userDeviceStoreMaxDevices(value: number) {
    this._userDeviceStoreMaxDevices = value;
  }
  public resetUserDeviceStoreMaxDevices() {
    this._userDeviceStoreMaxDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDeviceStoreMaxDevicesInput() {
    return this._userDeviceStoreMaxDevices;
  }

  // user_device_store_max_unified_mem - computed: true, optional: true, required: false
  private _userDeviceStoreMaxUnifiedMem?: number; 
  public get userDeviceStoreMaxUnifiedMem() {
    return this.getNumberAttribute('user_device_store_max_unified_mem');
  }
  public set userDeviceStoreMaxUnifiedMem(value: number) {
    this._userDeviceStoreMaxUnifiedMem = value;
  }
  public resetUserDeviceStoreMaxUnifiedMem() {
    this._userDeviceStoreMaxUnifiedMem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDeviceStoreMaxUnifiedMemInput() {
    return this._userDeviceStoreMaxUnifiedMem;
  }

  // user_device_store_max_users - computed: true, optional: true, required: false
  private _userDeviceStoreMaxUsers?: number; 
  public get userDeviceStoreMaxUsers() {
    return this.getNumberAttribute('user_device_store_max_users');
  }
  public set userDeviceStoreMaxUsers(value: number) {
    this._userDeviceStoreMaxUsers = value;
  }
  public resetUserDeviceStoreMaxUsers() {
    this._userDeviceStoreMaxUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDeviceStoreMaxUsersInput() {
    return this._userDeviceStoreMaxUsers;
  }

  // user_history_password_threshold - computed: true, optional: true, required: false
  private _userHistoryPasswordThreshold?: number; 
  public get userHistoryPasswordThreshold() {
    return this.getNumberAttribute('user_history_password_threshold');
  }
  public set userHistoryPasswordThreshold(value: number) {
    this._userHistoryPasswordThreshold = value;
  }
  public resetUserHistoryPasswordThreshold() {
    this._userHistoryPasswordThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userHistoryPasswordThresholdInput() {
    return this._userHistoryPasswordThreshold;
  }

  // user_server_cert - computed: true, optional: true, required: false
  private _userServerCert?: string; 
  public get userServerCert() {
    return this.getStringAttribute('user_server_cert');
  }
  public set userServerCert(value: string) {
    this._userServerCert = value;
  }
  public resetUserServerCert() {
    this._userServerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userServerCertInput() {
    return this._userServerCert;
  }

  // vdom_admin - computed: false, optional: true, required: false
  private _vdomAdmin?: string; 
  public get vdomAdmin() {
    return this.getStringAttribute('vdom_admin');
  }
  public set vdomAdmin(value: string) {
    this._vdomAdmin = value;
  }
  public resetVdomAdmin() {
    this._vdomAdmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomAdminInput() {
    return this._vdomAdmin;
  }

  // vdom_mode - computed: true, optional: true, required: false
  private _vdomMode?: string; 
  public get vdomMode() {
    return this.getStringAttribute('vdom_mode');
  }
  public set vdomMode(value: string) {
    this._vdomMode = value;
  }
  public resetVdomMode() {
    this._vdomMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomModeInput() {
    return this._vdomMode;
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

  // vip_arp_range - computed: true, optional: true, required: false
  private _vipArpRange?: string; 
  public get vipArpRange() {
    return this.getStringAttribute('vip_arp_range');
  }
  public set vipArpRange(value: string) {
    this._vipArpRange = value;
  }
  public resetVipArpRange() {
    this._vipArpRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipArpRangeInput() {
    return this._vipArpRange;
  }

  // virtual_server_count - computed: false, optional: true, required: false
  private _virtualServerCount?: number; 
  public get virtualServerCount() {
    return this.getNumberAttribute('virtual_server_count');
  }
  public set virtualServerCount(value: number) {
    this._virtualServerCount = value;
  }
  public resetVirtualServerCount() {
    this._virtualServerCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerCountInput() {
    return this._virtualServerCount;
  }

  // virtual_server_hardware_acceleration - computed: false, optional: true, required: false
  private _virtualServerHardwareAcceleration?: string; 
  public get virtualServerHardwareAcceleration() {
    return this.getStringAttribute('virtual_server_hardware_acceleration');
  }
  public set virtualServerHardwareAcceleration(value: string) {
    this._virtualServerHardwareAcceleration = value;
  }
  public resetVirtualServerHardwareAcceleration() {
    this._virtualServerHardwareAcceleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerHardwareAccelerationInput() {
    return this._virtualServerHardwareAcceleration;
  }

  // virtual_switch_vlan - computed: true, optional: true, required: false
  private _virtualSwitchVlan?: string; 
  public get virtualSwitchVlan() {
    return this.getStringAttribute('virtual_switch_vlan');
  }
  public set virtualSwitchVlan(value: string) {
    this._virtualSwitchVlan = value;
  }
  public resetVirtualSwitchVlan() {
    this._virtualSwitchVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSwitchVlanInput() {
    return this._virtualSwitchVlan;
  }

  // vpn_ems_sn_check - computed: true, optional: true, required: false
  private _vpnEmsSnCheck?: string; 
  public get vpnEmsSnCheck() {
    return this.getStringAttribute('vpn_ems_sn_check');
  }
  public set vpnEmsSnCheck(value: string) {
    this._vpnEmsSnCheck = value;
  }
  public resetVpnEmsSnCheck() {
    this._vpnEmsSnCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnEmsSnCheckInput() {
    return this._vpnEmsSnCheck;
  }

  // wad_affinity - computed: true, optional: true, required: false
  private _wadAffinity?: string; 
  public get wadAffinity() {
    return this.getStringAttribute('wad_affinity');
  }
  public set wadAffinity(value: string) {
    this._wadAffinity = value;
  }
  public resetWadAffinity() {
    this._wadAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wadAffinityInput() {
    return this._wadAffinity;
  }

  // wad_csvc_cs_count - computed: true, optional: true, required: false
  private _wadCsvcCsCount?: number; 
  public get wadCsvcCsCount() {
    return this.getNumberAttribute('wad_csvc_cs_count');
  }
  public set wadCsvcCsCount(value: number) {
    this._wadCsvcCsCount = value;
  }
  public resetWadCsvcCsCount() {
    this._wadCsvcCsCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wadCsvcCsCountInput() {
    return this._wadCsvcCsCount;
  }

  // wad_csvc_db_count - computed: false, optional: true, required: false
  private _wadCsvcDbCount?: number; 
  public get wadCsvcDbCount() {
    return this.getNumberAttribute('wad_csvc_db_count');
  }
  public set wadCsvcDbCount(value: number) {
    this._wadCsvcDbCount = value;
  }
  public resetWadCsvcDbCount() {
    this._wadCsvcDbCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wadCsvcDbCountInput() {
    return this._wadCsvcDbCount;
  }

  // wad_memory_change_granularity - computed: true, optional: true, required: false
  private _wadMemoryChangeGranularity?: number; 
  public get wadMemoryChangeGranularity() {
    return this.getNumberAttribute('wad_memory_change_granularity');
  }
  public set wadMemoryChangeGranularity(value: number) {
    this._wadMemoryChangeGranularity = value;
  }
  public resetWadMemoryChangeGranularity() {
    this._wadMemoryChangeGranularity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wadMemoryChangeGranularityInput() {
    return this._wadMemoryChangeGranularity;
  }

  // wad_p2s_max_body_size - computed: true, optional: true, required: false
  private _wadP2SMaxBodySize?: number; 
  public get wadP2SMaxBodySize() {
    return this.getNumberAttribute('wad_p2s_max_body_size');
  }
  public set wadP2SMaxBodySize(value: number) {
    this._wadP2SMaxBodySize = value;
  }
  public resetWadP2SMaxBodySize() {
    this._wadP2SMaxBodySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wadP2SMaxBodySizeInput() {
    return this._wadP2SMaxBodySize;
  }

  // wad_restart_end_time - computed: true, optional: true, required: false
  private _wadRestartEndTime?: string; 
  public get wadRestartEndTime() {
    return this.getStringAttribute('wad_restart_end_time');
  }
  public set wadRestartEndTime(value: string) {
    this._wadRestartEndTime = value;
  }
  public resetWadRestartEndTime() {
    this._wadRestartEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wadRestartEndTimeInput() {
    return this._wadRestartEndTime;
  }

  // wad_restart_mode - computed: true, optional: true, required: false
  private _wadRestartMode?: string; 
  public get wadRestartMode() {
    return this.getStringAttribute('wad_restart_mode');
  }
  public set wadRestartMode(value: string) {
    this._wadRestartMode = value;
  }
  public resetWadRestartMode() {
    this._wadRestartMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wadRestartModeInput() {
    return this._wadRestartMode;
  }

  // wad_restart_start_time - computed: true, optional: true, required: false
  private _wadRestartStartTime?: string; 
  public get wadRestartStartTime() {
    return this.getStringAttribute('wad_restart_start_time');
  }
  public set wadRestartStartTime(value: string) {
    this._wadRestartStartTime = value;
  }
  public resetWadRestartStartTime() {
    this._wadRestartStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wadRestartStartTimeInput() {
    return this._wadRestartStartTime;
  }

  // wad_source_affinity - computed: true, optional: true, required: false
  private _wadSourceAffinity?: string; 
  public get wadSourceAffinity() {
    return this.getStringAttribute('wad_source_affinity');
  }
  public set wadSourceAffinity(value: string) {
    this._wadSourceAffinity = value;
  }
  public resetWadSourceAffinity() {
    this._wadSourceAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wadSourceAffinityInput() {
    return this._wadSourceAffinity;
  }

  // wad_worker_count - computed: false, optional: true, required: false
  private _wadWorkerCount?: number; 
  public get wadWorkerCount() {
    return this.getNumberAttribute('wad_worker_count');
  }
  public set wadWorkerCount(value: number) {
    this._wadWorkerCount = value;
  }
  public resetWadWorkerCount() {
    this._wadWorkerCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wadWorkerCountInput() {
    return this._wadWorkerCount;
  }

  // wifi_ca_certificate - computed: true, optional: true, required: false
  private _wifiCaCertificate?: string; 
  public get wifiCaCertificate() {
    return this.getStringAttribute('wifi_ca_certificate');
  }
  public set wifiCaCertificate(value: string) {
    this._wifiCaCertificate = value;
  }
  public resetWifiCaCertificate() {
    this._wifiCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiCaCertificateInput() {
    return this._wifiCaCertificate;
  }

  // wifi_certificate - computed: true, optional: true, required: false
  private _wifiCertificate?: string; 
  public get wifiCertificate() {
    return this.getStringAttribute('wifi_certificate');
  }
  public set wifiCertificate(value: string) {
    this._wifiCertificate = value;
  }
  public resetWifiCertificate() {
    this._wifiCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiCertificateInput() {
    return this._wifiCertificate;
  }

  // wimax_4g_usb - computed: true, optional: true, required: false
  private _wimax4GUsb?: string; 
  public get wimax4GUsb() {
    return this.getStringAttribute('wimax_4g_usb');
  }
  public set wimax4GUsb(value: string) {
    this._wimax4GUsb = value;
  }
  public resetWimax4GUsb() {
    this._wimax4GUsb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wimax4GUsbInput() {
    return this._wimax4GUsb;
  }

  // wireless_controller - computed: true, optional: true, required: false
  private _wirelessController?: string; 
  public get wirelessController() {
    return this.getStringAttribute('wireless_controller');
  }
  public set wirelessController(value: string) {
    this._wirelessController = value;
  }
  public resetWirelessController() {
    this._wirelessController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wirelessControllerInput() {
    return this._wirelessController;
  }

  // wireless_controller_port - computed: true, optional: true, required: false
  private _wirelessControllerPort?: number; 
  public get wirelessControllerPort() {
    return this.getNumberAttribute('wireless_controller_port');
  }
  public set wirelessControllerPort(value: number) {
    this._wirelessControllerPort = value;
  }
  public resetWirelessControllerPort() {
    this._wirelessControllerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wirelessControllerPortInput() {
    return this._wirelessControllerPort;
  }

  // internet_service_download_list - computed: false, optional: true, required: false
  private _internetServiceDownloadList = new SystemGlobalInternetServiceDownloadListStructList(this, "internet_service_download_list", true);
  public get internetServiceDownloadList() {
    return this._internetServiceDownloadList;
  }
  public putInternetServiceDownloadList(value: SystemGlobalInternetServiceDownloadListStruct[] | cdktf.IResolvable) {
    this._internetServiceDownloadList.internalValue = value;
  }
  public resetInternetServiceDownloadList() {
    this._internetServiceDownloadList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceDownloadListInput() {
    return this._internetServiceDownloadList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_concurrent: cdktf.stringToTerraform(this._adminConcurrent),
      admin_console_timeout: cdktf.numberToTerraform(this._adminConsoleTimeout),
      admin_forticloud_sso_default_profile: cdktf.stringToTerraform(this._adminForticloudSsoDefaultProfile),
      admin_forticloud_sso_login: cdktf.stringToTerraform(this._adminForticloudSsoLogin),
      admin_host: cdktf.stringToTerraform(this._adminHost),
      admin_hsts_max_age: cdktf.numberToTerraform(this._adminHstsMaxAge),
      admin_https_pki_required: cdktf.stringToTerraform(this._adminHttpsPkiRequired),
      admin_https_redirect: cdktf.stringToTerraform(this._adminHttpsRedirect),
      admin_https_ssl_banned_ciphers: cdktf.stringToTerraform(this._adminHttpsSslBannedCiphers),
      admin_https_ssl_ciphersuites: cdktf.stringToTerraform(this._adminHttpsSslCiphersuites),
      admin_https_ssl_versions: cdktf.stringToTerraform(this._adminHttpsSslVersions),
      admin_lockout_duration: cdktf.numberToTerraform(this._adminLockoutDuration),
      admin_lockout_threshold: cdktf.numberToTerraform(this._adminLockoutThreshold),
      admin_login_max: cdktf.numberToTerraform(this._adminLoginMax),
      admin_maintainer: cdktf.stringToTerraform(this._adminMaintainer),
      admin_port: cdktf.numberToTerraform(this._adminPort),
      admin_restrict_local: cdktf.stringToTerraform(this._adminRestrictLocal),
      admin_scp: cdktf.stringToTerraform(this._adminScp),
      admin_server_cert: cdktf.stringToTerraform(this._adminServerCert),
      admin_sport: cdktf.numberToTerraform(this._adminSport),
      admin_ssh_grace_time: cdktf.numberToTerraform(this._adminSshGraceTime),
      admin_ssh_password: cdktf.stringToTerraform(this._adminSshPassword),
      admin_ssh_port: cdktf.numberToTerraform(this._adminSshPort),
      admin_ssh_v1: cdktf.stringToTerraform(this._adminSshV1),
      admin_telnet: cdktf.stringToTerraform(this._adminTelnet),
      admin_telnet_port: cdktf.numberToTerraform(this._adminTelnetPort),
      admintimeout: cdktf.numberToTerraform(this._admintimeout),
      alias: cdktf.stringToTerraform(this._alias),
      allow_traffic_redirect: cdktf.stringToTerraform(this._allowTrafficRedirect),
      anti_replay: cdktf.stringToTerraform(this._antiReplay),
      application_bandwidth_tracking: cdktf.stringToTerraform(this._applicationBandwidthTracking),
      arp_max_entry: cdktf.numberToTerraform(this._arpMaxEntry),
      asymroute: cdktf.stringToTerraform(this._asymroute),
      auth_cert: cdktf.stringToTerraform(this._authCert),
      auth_http_port: cdktf.numberToTerraform(this._authHttpPort),
      auth_https_port: cdktf.numberToTerraform(this._authHttpsPort),
      auth_ike_saml_port: cdktf.numberToTerraform(this._authIkeSamlPort),
      auth_keepalive: cdktf.stringToTerraform(this._authKeepalive),
      auth_session_auto_backup: cdktf.stringToTerraform(this._authSessionAutoBackup),
      auth_session_auto_backup_interval: cdktf.stringToTerraform(this._authSessionAutoBackupInterval),
      auth_session_limit: cdktf.stringToTerraform(this._authSessionLimit),
      auto_auth_extension_device: cdktf.stringToTerraform(this._autoAuthExtensionDevice),
      autorun_log_fsck: cdktf.stringToTerraform(this._autorunLogFsck),
      av_affinity: cdktf.stringToTerraform(this._avAffinity),
      av_failopen: cdktf.stringToTerraform(this._avFailopen),
      av_failopen_session: cdktf.stringToTerraform(this._avFailopenSession),
      batch_cmdb: cdktf.stringToTerraform(this._batchCmdb),
      bfd_affinity: cdktf.stringToTerraform(this._bfdAffinity),
      block_session_timer: cdktf.numberToTerraform(this._blockSessionTimer),
      br_fdb_max_entry: cdktf.numberToTerraform(this._brFdbMaxEntry),
      cert_chain_max: cdktf.numberToTerraform(this._certChainMax),
      cfg_revert_timeout: cdktf.numberToTerraform(this._cfgRevertTimeout),
      cfg_save: cdktf.stringToTerraform(this._cfgSave),
      check_protocol_header: cdktf.stringToTerraform(this._checkProtocolHeader),
      check_reset_range: cdktf.stringToTerraform(this._checkResetRange),
      cli_audit_log: cdktf.stringToTerraform(this._cliAuditLog),
      cloud_communication: cdktf.stringToTerraform(this._cloudCommunication),
      clt_cert_req: cdktf.stringToTerraform(this._cltCertReq),
      cmdbsvr_affinity: cdktf.stringToTerraform(this._cmdbsvrAffinity),
      compliance_check: cdktf.stringToTerraform(this._complianceCheck),
      compliance_check_time: cdktf.stringToTerraform(this._complianceCheckTime),
      cpu_use_threshold: cdktf.numberToTerraform(this._cpuUseThreshold),
      csr_ca_attribute: cdktf.stringToTerraform(this._csrCaAttribute),
      daily_restart: cdktf.stringToTerraform(this._dailyRestart),
      default_service_source_port: cdktf.stringToTerraform(this._defaultServiceSourcePort),
      delay_tcp_npu_session: cdktf.stringToTerraform(this._delayTcpNpuSession),
      device_identification_active_scan_delay: cdktf.numberToTerraform(this._deviceIdentificationActiveScanDelay),
      device_idle_timeout: cdktf.numberToTerraform(this._deviceIdleTimeout),
      dh_params: cdktf.stringToTerraform(this._dhParams),
      dhcp_lease_backup_interval: cdktf.numberToTerraform(this._dhcpLeaseBackupInterval),
      dnsproxy_worker_count: cdktf.numberToTerraform(this._dnsproxyWorkerCount),
      dst: cdktf.stringToTerraform(this._dst),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      early_tcp_npu_session: cdktf.stringToTerraform(this._earlyTcpNpuSession),
      edit_vdom_prompt: cdktf.stringToTerraform(this._editVdomPrompt),
      endpoint_control_fds_access: cdktf.stringToTerraform(this._endpointControlFdsAccess),
      endpoint_control_portal_port: cdktf.numberToTerraform(this._endpointControlPortalPort),
      extender_controller_reserved_network: cdktf.stringToTerraform(this._extenderControllerReservedNetwork),
      failtime: cdktf.numberToTerraform(this._failtime),
      faz_disk_buffer_size: cdktf.numberToTerraform(this._fazDiskBufferSize),
      fds_statistics: cdktf.stringToTerraform(this._fdsStatistics),
      fds_statistics_period: cdktf.numberToTerraform(this._fdsStatisticsPeriod),
      fec_port: cdktf.numberToTerraform(this._fecPort),
      fgd_alert_subscription: cdktf.stringToTerraform(this._fgdAlertSubscription),
      forticonverter_config_upload: cdktf.stringToTerraform(this._forticonverterConfigUpload),
      forticonverter_integration: cdktf.stringToTerraform(this._forticonverterIntegration),
      fortiextender: cdktf.stringToTerraform(this._fortiextender),
      fortiextender_data_port: cdktf.numberToTerraform(this._fortiextenderDataPort),
      fortiextender_discovery_lockdown: cdktf.stringToTerraform(this._fortiextenderDiscoveryLockdown),
      fortiextender_provision_on_authorization: cdktf.stringToTerraform(this._fortiextenderProvisionOnAuthorization),
      fortiextender_vlan_mode: cdktf.stringToTerraform(this._fortiextenderVlanMode),
      fortigslb_integration: cdktf.stringToTerraform(this._fortigslbIntegration),
      fortiipam_integration: cdktf.stringToTerraform(this._fortiipamIntegration),
      fortiservice_port: cdktf.numberToTerraform(this._fortiservicePort),
      fortitoken_cloud: cdktf.stringToTerraform(this._fortitokenCloud),
      fortitoken_cloud_push_status: cdktf.stringToTerraform(this._fortitokenCloudPushStatus),
      fortitoken_cloud_region: cdktf.stringToTerraform(this._fortitokenCloudRegion),
      fortitoken_cloud_sync_interval: cdktf.numberToTerraform(this._fortitokenCloudSyncInterval),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      gui_allow_default_hostname: cdktf.stringToTerraform(this._guiAllowDefaultHostname),
      gui_allow_incompatible_fabric_fgt: cdktf.stringToTerraform(this._guiAllowIncompatibleFabricFgt),
      gui_app_detection_sdwan: cdktf.stringToTerraform(this._guiAppDetectionSdwan),
      gui_auto_upgrade_setup_warning: cdktf.stringToTerraform(this._guiAutoUpgradeSetupWarning),
      gui_cdn_domain_override: cdktf.stringToTerraform(this._guiCdnDomainOverride),
      gui_cdn_usage: cdktf.stringToTerraform(this._guiCdnUsage),
      gui_certificates: cdktf.stringToTerraform(this._guiCertificates),
      gui_custom_language: cdktf.stringToTerraform(this._guiCustomLanguage),
      gui_date_format: cdktf.stringToTerraform(this._guiDateFormat),
      gui_date_time_source: cdktf.stringToTerraform(this._guiDateTimeSource),
      gui_device_latitude: cdktf.stringToTerraform(this._guiDeviceLatitude),
      gui_device_longitude: cdktf.stringToTerraform(this._guiDeviceLongitude),
      gui_display_hostname: cdktf.stringToTerraform(this._guiDisplayHostname),
      gui_firmware_upgrade_setup_warning: cdktf.stringToTerraform(this._guiFirmwareUpgradeSetupWarning),
      gui_firmware_upgrade_warning: cdktf.stringToTerraform(this._guiFirmwareUpgradeWarning),
      gui_forticare_registration_setup_warning: cdktf.stringToTerraform(this._guiForticareRegistrationSetupWarning),
      gui_fortigate_cloud_sandbox: cdktf.stringToTerraform(this._guiFortigateCloudSandbox),
      gui_fortiguard_resource_fetch: cdktf.stringToTerraform(this._guiFortiguardResourceFetch),
      gui_fortisandbox_cloud: cdktf.stringToTerraform(this._guiFortisandboxCloud),
      gui_ipv6: cdktf.stringToTerraform(this._guiIpv6),
      gui_lines_per_page: cdktf.numberToTerraform(this._guiLinesPerPage),
      gui_local_out: cdktf.stringToTerraform(this._guiLocalOut),
      gui_replacement_message_groups: cdktf.stringToTerraform(this._guiReplacementMessageGroups),
      gui_rest_api_cache: cdktf.stringToTerraform(this._guiRestApiCache),
      gui_theme: cdktf.stringToTerraform(this._guiTheme),
      gui_wireless_opensecurity: cdktf.stringToTerraform(this._guiWirelessOpensecurity),
      gui_workflow_management: cdktf.stringToTerraform(this._guiWorkflowManagement),
      ha_affinity: cdktf.stringToTerraform(this._haAffinity),
      honor_df: cdktf.stringToTerraform(this._honorDf),
      hostname: cdktf.stringToTerraform(this._hostname),
      httpd_max_worker_count: cdktf.numberToTerraform(this._httpdMaxWorkerCount),
      id: cdktf.stringToTerraform(this._id),
      igmp_state_limit: cdktf.numberToTerraform(this._igmpStateLimit),
      ike_embryonic_limit: cdktf.numberToTerraform(this._ikeEmbryonicLimit),
      interface_subnet_usage: cdktf.stringToTerraform(this._interfaceSubnetUsage),
      internet_service_database: cdktf.stringToTerraform(this._internetServiceDatabase),
      interval: cdktf.numberToTerraform(this._interval),
      ip_conflict_detection: cdktf.stringToTerraform(this._ipConflictDetection),
      ip_fragment_mem_thresholds: cdktf.numberToTerraform(this._ipFragmentMemThresholds),
      ip_fragment_timeout: cdktf.numberToTerraform(this._ipFragmentTimeout),
      ip_src_port_range: cdktf.stringToTerraform(this._ipSrcPortRange),
      ips_affinity: cdktf.stringToTerraform(this._ipsAffinity),
      ipsec_asic_offload: cdktf.stringToTerraform(this._ipsecAsicOffload),
      ipsec_ha_seqjump_rate: cdktf.numberToTerraform(this._ipsecHaSeqjumpRate),
      ipsec_hmac_offload: cdktf.stringToTerraform(this._ipsecHmacOffload),
      ipsec_qat_offload: cdktf.stringToTerraform(this._ipsecQatOffload),
      ipsec_round_robin: cdktf.stringToTerraform(this._ipsecRoundRobin),
      ipsec_soft_dec_async: cdktf.stringToTerraform(this._ipsecSoftDecAsync),
      ipv6_accept_dad: cdktf.numberToTerraform(this._ipv6AcceptDad),
      ipv6_allow_anycast_probe: cdktf.stringToTerraform(this._ipv6AllowAnycastProbe),
      ipv6_allow_local_in_silent_drop: cdktf.stringToTerraform(this._ipv6AllowLocalInSilentDrop),
      ipv6_allow_local_in_slient_drop: cdktf.stringToTerraform(this._ipv6AllowLocalInSlientDrop),
      ipv6_allow_multicast_probe: cdktf.stringToTerraform(this._ipv6AllowMulticastProbe),
      ipv6_allow_traffic_redirect: cdktf.stringToTerraform(this._ipv6AllowTrafficRedirect),
      ipv6_fragment_timeout: cdktf.numberToTerraform(this._ipv6FragmentTimeout),
      ipv6_snat_route_change: cdktf.stringToTerraform(this._ipv6SnatRouteChange),
      irq_time_accounting: cdktf.stringToTerraform(this._irqTimeAccounting),
      language: cdktf.stringToTerraform(this._language),
      ldapconntimeout: cdktf.numberToTerraform(this._ldapconntimeout),
      lldp_reception: cdktf.stringToTerraform(this._lldpReception),
      lldp_transmission: cdktf.stringToTerraform(this._lldpTransmission),
      log_single_cpu_high: cdktf.stringToTerraform(this._logSingleCpuHigh),
      log_ssl_connection: cdktf.stringToTerraform(this._logSslConnection),
      log_uuid_address: cdktf.stringToTerraform(this._logUuidAddress),
      log_uuid_policy: cdktf.stringToTerraform(this._logUuidPolicy),
      login_timestamp: cdktf.stringToTerraform(this._loginTimestamp),
      long_vdom_name: cdktf.stringToTerraform(this._longVdomName),
      management_ip: cdktf.stringToTerraform(this._managementIp),
      management_port: cdktf.numberToTerraform(this._managementPort),
      management_port_use_admin_sport: cdktf.stringToTerraform(this._managementPortUseAdminSport),
      management_vdom: cdktf.stringToTerraform(this._managementVdom),
      max_dlpstat_memory: cdktf.numberToTerraform(this._maxDlpstatMemory),
      max_route_cache_size: cdktf.numberToTerraform(this._maxRouteCacheSize),
      mc_ttl_notchange: cdktf.stringToTerraform(this._mcTtlNotchange),
      memory_use_threshold_extreme: cdktf.numberToTerraform(this._memoryUseThresholdExtreme),
      memory_use_threshold_green: cdktf.numberToTerraform(this._memoryUseThresholdGreen),
      memory_use_threshold_red: cdktf.numberToTerraform(this._memoryUseThresholdRed),
      miglog_affinity: cdktf.stringToTerraform(this._miglogAffinity),
      miglogd_children: cdktf.numberToTerraform(this._miglogdChildren),
      multi_factor_authentication: cdktf.stringToTerraform(this._multiFactorAuthentication),
      multicast_forward: cdktf.stringToTerraform(this._multicastForward),
      ndp_max_entry: cdktf.numberToTerraform(this._ndpMaxEntry),
      npu_neighbor_update: cdktf.stringToTerraform(this._npuNeighborUpdate),
      per_user_bal: cdktf.stringToTerraform(this._perUserBal),
      per_user_bwl: cdktf.stringToTerraform(this._perUserBwl),
      pmtu_discovery: cdktf.stringToTerraform(this._pmtuDiscovery),
      policy_auth_concurrent: cdktf.numberToTerraform(this._policyAuthConcurrent),
      post_login_banner: cdktf.stringToTerraform(this._postLoginBanner),
      pre_login_banner: cdktf.stringToTerraform(this._preLoginBanner),
      private_data_encryption: cdktf.stringToTerraform(this._privateDataEncryption),
      proxy_auth_lifetime: cdktf.stringToTerraform(this._proxyAuthLifetime),
      proxy_auth_lifetime_timeout: cdktf.numberToTerraform(this._proxyAuthLifetimeTimeout),
      proxy_auth_timeout: cdktf.numberToTerraform(this._proxyAuthTimeout),
      proxy_cert_use_mgmt_vdom: cdktf.stringToTerraform(this._proxyCertUseMgmtVdom),
      proxy_cipher_hardware_acceleration: cdktf.stringToTerraform(this._proxyCipherHardwareAcceleration),
      proxy_hardware_acceleration: cdktf.stringToTerraform(this._proxyHardwareAcceleration),
      proxy_keep_alive_mode: cdktf.stringToTerraform(this._proxyKeepAliveMode),
      proxy_kxp_hardware_acceleration: cdktf.stringToTerraform(this._proxyKxpHardwareAcceleration),
      proxy_re_authentication_mode: cdktf.stringToTerraform(this._proxyReAuthenticationMode),
      proxy_re_authentication_time: cdktf.numberToTerraform(this._proxyReAuthenticationTime),
      proxy_resource_mode: cdktf.stringToTerraform(this._proxyResourceMode),
      proxy_worker_count: cdktf.numberToTerraform(this._proxyWorkerCount),
      purdue_level: cdktf.stringToTerraform(this._purdueLevel),
      quic_ack_thresold: cdktf.numberToTerraform(this._quicAckThresold),
      quic_congestion_control_algo: cdktf.stringToTerraform(this._quicCongestionControlAlgo),
      quic_max_datagram_size: cdktf.numberToTerraform(this._quicMaxDatagramSize),
      quic_pmtud: cdktf.stringToTerraform(this._quicPmtud),
      quic_tls_handshake_timeout: cdktf.numberToTerraform(this._quicTlsHandshakeTimeout),
      quic_udp_payload_size_shaping_per_cid: cdktf.stringToTerraform(this._quicUdpPayloadSizeShapingPerCid),
      radius_port: cdktf.numberToTerraform(this._radiusPort),
      reboot_upon_config_restore: cdktf.stringToTerraform(this._rebootUponConfigRestore),
      refresh: cdktf.numberToTerraform(this._refresh),
      remoteauthtimeout: cdktf.numberToTerraform(this._remoteauthtimeout),
      reset_sessionless_tcp: cdktf.stringToTerraform(this._resetSessionlessTcp),
      rest_api_key_url_query: cdktf.stringToTerraform(this._restApiKeyUrlQuery),
      restart_time: cdktf.stringToTerraform(this._restartTime),
      revision_backup_on_logout: cdktf.stringToTerraform(this._revisionBackupOnLogout),
      revision_image_auto_backup: cdktf.stringToTerraform(this._revisionImageAutoBackup),
      router_affinity: cdktf.stringToTerraform(this._routerAffinity),
      scanunit_count: cdktf.numberToTerraform(this._scanunitCount),
      scim_http_port: cdktf.numberToTerraform(this._scimHttpPort),
      scim_https_port: cdktf.numberToTerraform(this._scimHttpsPort),
      scim_server_cert: cdktf.stringToTerraform(this._scimServerCert),
      security_rating_result_submission: cdktf.stringToTerraform(this._securityRatingResultSubmission),
      security_rating_run_on_schedule: cdktf.stringToTerraform(this._securityRatingRunOnSchedule),
      send_pmtu_icmp: cdktf.stringToTerraform(this._sendPmtuIcmp),
      sflowd_max_children_num: cdktf.numberToTerraform(this._sflowdMaxChildrenNum),
      snat_route_change: cdktf.stringToTerraform(this._snatRouteChange),
      special_file_23_support: cdktf.stringToTerraform(this._specialFile23Support),
      speedtest_server: cdktf.stringToTerraform(this._speedtestServer),
      speedtestd_ctrl_port: cdktf.numberToTerraform(this._speedtestdCtrlPort),
      speedtestd_server_port: cdktf.numberToTerraform(this._speedtestdServerPort),
      split_port: cdktf.stringToTerraform(this._splitPort),
      ssd_trim_date: cdktf.numberToTerraform(this._ssdTrimDate),
      ssd_trim_freq: cdktf.stringToTerraform(this._ssdTrimFreq),
      ssd_trim_hour: cdktf.numberToTerraform(this._ssdTrimHour),
      ssd_trim_min: cdktf.numberToTerraform(this._ssdTrimMin),
      ssd_trim_weekday: cdktf.stringToTerraform(this._ssdTrimWeekday),
      ssh_cbc_cipher: cdktf.stringToTerraform(this._sshCbcCipher),
      ssh_enc_algo: cdktf.stringToTerraform(this._sshEncAlgo),
      ssh_hmac_md5: cdktf.stringToTerraform(this._sshHmacMd5),
      ssh_hostkey: cdktf.stringToTerraform(this._sshHostkey),
      ssh_hostkey_algo: cdktf.stringToTerraform(this._sshHostkeyAlgo),
      ssh_hostkey_override: cdktf.stringToTerraform(this._sshHostkeyOverride),
      ssh_hostkey_password: cdktf.stringToTerraform(this._sshHostkeyPassword),
      ssh_kex_algo: cdktf.stringToTerraform(this._sshKexAlgo),
      ssh_kex_sha1: cdktf.stringToTerraform(this._sshKexSha1),
      ssh_mac_algo: cdktf.stringToTerraform(this._sshMacAlgo),
      ssh_mac_weak: cdktf.stringToTerraform(this._sshMacWeak),
      ssl_min_proto_version: cdktf.stringToTerraform(this._sslMinProtoVersion),
      ssl_static_key_ciphers: cdktf.stringToTerraform(this._sslStaticKeyCiphers),
      sslvpn_affinity: cdktf.stringToTerraform(this._sslvpnAffinity),
      sslvpn_cipher_hardware_acceleration: cdktf.stringToTerraform(this._sslvpnCipherHardwareAcceleration),
      sslvpn_ems_sn_check: cdktf.stringToTerraform(this._sslvpnEmsSnCheck),
      sslvpn_kxp_hardware_acceleration: cdktf.stringToTerraform(this._sslvpnKxpHardwareAcceleration),
      sslvpn_max_worker_count: cdktf.numberToTerraform(this._sslvpnMaxWorkerCount),
      sslvpn_plugin_version_check: cdktf.stringToTerraform(this._sslvpnPluginVersionCheck),
      sslvpn_web_mode: cdktf.stringToTerraform(this._sslvpnWebMode),
      strict_dirty_session_check: cdktf.stringToTerraform(this._strictDirtySessionCheck),
      strong_crypto: cdktf.stringToTerraform(this._strongCrypto),
      switch_controller: cdktf.stringToTerraform(this._switchController),
      switch_controller_reserved_network: cdktf.stringToTerraform(this._switchControllerReservedNetwork),
      sys_perf_log_interval: cdktf.numberToTerraform(this._sysPerfLogInterval),
      syslog_affinity: cdktf.stringToTerraform(this._syslogAffinity),
      tcp_halfclose_timer: cdktf.numberToTerraform(this._tcpHalfcloseTimer),
      tcp_halfopen_timer: cdktf.numberToTerraform(this._tcpHalfopenTimer),
      tcp_option: cdktf.stringToTerraform(this._tcpOption),
      tcp_rst_timer: cdktf.numberToTerraform(this._tcpRstTimer),
      tcp_timewait_timer: cdktf.numberToTerraform(this._tcpTimewaitTimer),
      tftp: cdktf.stringToTerraform(this._tftp),
      timezone: cdktf.stringToTerraform(this._timezone),
      tls_session_cache: cdktf.stringToTerraform(this._tlsSessionCache),
      tp_mc_skip_policy: cdktf.stringToTerraform(this._tpMcSkipPolicy),
      traffic_priority: cdktf.stringToTerraform(this._trafficPriority),
      traffic_priority_level: cdktf.stringToTerraform(this._trafficPriorityLevel),
      two_factor_email_expiry: cdktf.numberToTerraform(this._twoFactorEmailExpiry),
      two_factor_fac_expiry: cdktf.numberToTerraform(this._twoFactorFacExpiry),
      two_factor_ftk_expiry: cdktf.numberToTerraform(this._twoFactorFtkExpiry),
      two_factor_ftm_expiry: cdktf.numberToTerraform(this._twoFactorFtmExpiry),
      two_factor_sms_expiry: cdktf.numberToTerraform(this._twoFactorSmsExpiry),
      udp_idle_timer: cdktf.numberToTerraform(this._udpIdleTimer),
      upgrade_report: cdktf.stringToTerraform(this._upgradeReport),
      url_filter_affinity: cdktf.stringToTerraform(this._urlFilterAffinity),
      url_filter_count: cdktf.numberToTerraform(this._urlFilterCount),
      user_device_store_max_device_mem: cdktf.numberToTerraform(this._userDeviceStoreMaxDeviceMem),
      user_device_store_max_devices: cdktf.numberToTerraform(this._userDeviceStoreMaxDevices),
      user_device_store_max_unified_mem: cdktf.numberToTerraform(this._userDeviceStoreMaxUnifiedMem),
      user_device_store_max_users: cdktf.numberToTerraform(this._userDeviceStoreMaxUsers),
      user_history_password_threshold: cdktf.numberToTerraform(this._userHistoryPasswordThreshold),
      user_server_cert: cdktf.stringToTerraform(this._userServerCert),
      vdom_admin: cdktf.stringToTerraform(this._vdomAdmin),
      vdom_mode: cdktf.stringToTerraform(this._vdomMode),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      vip_arp_range: cdktf.stringToTerraform(this._vipArpRange),
      virtual_server_count: cdktf.numberToTerraform(this._virtualServerCount),
      virtual_server_hardware_acceleration: cdktf.stringToTerraform(this._virtualServerHardwareAcceleration),
      virtual_switch_vlan: cdktf.stringToTerraform(this._virtualSwitchVlan),
      vpn_ems_sn_check: cdktf.stringToTerraform(this._vpnEmsSnCheck),
      wad_affinity: cdktf.stringToTerraform(this._wadAffinity),
      wad_csvc_cs_count: cdktf.numberToTerraform(this._wadCsvcCsCount),
      wad_csvc_db_count: cdktf.numberToTerraform(this._wadCsvcDbCount),
      wad_memory_change_granularity: cdktf.numberToTerraform(this._wadMemoryChangeGranularity),
      wad_p2s_max_body_size: cdktf.numberToTerraform(this._wadP2SMaxBodySize),
      wad_restart_end_time: cdktf.stringToTerraform(this._wadRestartEndTime),
      wad_restart_mode: cdktf.stringToTerraform(this._wadRestartMode),
      wad_restart_start_time: cdktf.stringToTerraform(this._wadRestartStartTime),
      wad_source_affinity: cdktf.stringToTerraform(this._wadSourceAffinity),
      wad_worker_count: cdktf.numberToTerraform(this._wadWorkerCount),
      wifi_ca_certificate: cdktf.stringToTerraform(this._wifiCaCertificate),
      wifi_certificate: cdktf.stringToTerraform(this._wifiCertificate),
      wimax_4g_usb: cdktf.stringToTerraform(this._wimax4GUsb),
      wireless_controller: cdktf.stringToTerraform(this._wirelessController),
      wireless_controller_port: cdktf.numberToTerraform(this._wirelessControllerPort),
      internet_service_download_list: cdktf.listMapper(systemGlobalInternetServiceDownloadListStructToTerraform, true)(this._internetServiceDownloadList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_concurrent: {
        value: cdktf.stringToHclTerraform(this._adminConcurrent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_console_timeout: {
        value: cdktf.numberToHclTerraform(this._adminConsoleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      admin_forticloud_sso_default_profile: {
        value: cdktf.stringToHclTerraform(this._adminForticloudSsoDefaultProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_forticloud_sso_login: {
        value: cdktf.stringToHclTerraform(this._adminForticloudSsoLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_host: {
        value: cdktf.stringToHclTerraform(this._adminHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_hsts_max_age: {
        value: cdktf.numberToHclTerraform(this._adminHstsMaxAge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      admin_https_pki_required: {
        value: cdktf.stringToHclTerraform(this._adminHttpsPkiRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_https_redirect: {
        value: cdktf.stringToHclTerraform(this._adminHttpsRedirect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_https_ssl_banned_ciphers: {
        value: cdktf.stringToHclTerraform(this._adminHttpsSslBannedCiphers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_https_ssl_ciphersuites: {
        value: cdktf.stringToHclTerraform(this._adminHttpsSslCiphersuites),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_https_ssl_versions: {
        value: cdktf.stringToHclTerraform(this._adminHttpsSslVersions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_lockout_duration: {
        value: cdktf.numberToHclTerraform(this._adminLockoutDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      admin_lockout_threshold: {
        value: cdktf.numberToHclTerraform(this._adminLockoutThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      admin_login_max: {
        value: cdktf.numberToHclTerraform(this._adminLoginMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      admin_maintainer: {
        value: cdktf.stringToHclTerraform(this._adminMaintainer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_port: {
        value: cdktf.numberToHclTerraform(this._adminPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      admin_restrict_local: {
        value: cdktf.stringToHclTerraform(this._adminRestrictLocal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_scp: {
        value: cdktf.stringToHclTerraform(this._adminScp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_server_cert: {
        value: cdktf.stringToHclTerraform(this._adminServerCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_sport: {
        value: cdktf.numberToHclTerraform(this._adminSport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      admin_ssh_grace_time: {
        value: cdktf.numberToHclTerraform(this._adminSshGraceTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      admin_ssh_password: {
        value: cdktf.stringToHclTerraform(this._adminSshPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_ssh_port: {
        value: cdktf.numberToHclTerraform(this._adminSshPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      admin_ssh_v1: {
        value: cdktf.stringToHclTerraform(this._adminSshV1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_telnet: {
        value: cdktf.stringToHclTerraform(this._adminTelnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_telnet_port: {
        value: cdktf.numberToHclTerraform(this._adminTelnetPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      admintimeout: {
        value: cdktf.numberToHclTerraform(this._admintimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_traffic_redirect: {
        value: cdktf.stringToHclTerraform(this._allowTrafficRedirect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      anti_replay: {
        value: cdktf.stringToHclTerraform(this._antiReplay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_bandwidth_tracking: {
        value: cdktf.stringToHclTerraform(this._applicationBandwidthTracking),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arp_max_entry: {
        value: cdktf.numberToHclTerraform(this._arpMaxEntry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      asymroute: {
        value: cdktf.stringToHclTerraform(this._asymroute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_cert: {
        value: cdktf.stringToHclTerraform(this._authCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_http_port: {
        value: cdktf.numberToHclTerraform(this._authHttpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auth_https_port: {
        value: cdktf.numberToHclTerraform(this._authHttpsPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auth_ike_saml_port: {
        value: cdktf.numberToHclTerraform(this._authIkeSamlPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auth_keepalive: {
        value: cdktf.stringToHclTerraform(this._authKeepalive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_session_auto_backup: {
        value: cdktf.stringToHclTerraform(this._authSessionAutoBackup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_session_auto_backup_interval: {
        value: cdktf.stringToHclTerraform(this._authSessionAutoBackupInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_session_limit: {
        value: cdktf.stringToHclTerraform(this._authSessionLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_auth_extension_device: {
        value: cdktf.stringToHclTerraform(this._autoAuthExtensionDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autorun_log_fsck: {
        value: cdktf.stringToHclTerraform(this._autorunLogFsck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      av_affinity: {
        value: cdktf.stringToHclTerraform(this._avAffinity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      av_failopen: {
        value: cdktf.stringToHclTerraform(this._avFailopen),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      av_failopen_session: {
        value: cdktf.stringToHclTerraform(this._avFailopenSession),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      batch_cmdb: {
        value: cdktf.stringToHclTerraform(this._batchCmdb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bfd_affinity: {
        value: cdktf.stringToHclTerraform(this._bfdAffinity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_session_timer: {
        value: cdktf.numberToHclTerraform(this._blockSessionTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      br_fdb_max_entry: {
        value: cdktf.numberToHclTerraform(this._brFdbMaxEntry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cert_chain_max: {
        value: cdktf.numberToHclTerraform(this._certChainMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cfg_revert_timeout: {
        value: cdktf.numberToHclTerraform(this._cfgRevertTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cfg_save: {
        value: cdktf.stringToHclTerraform(this._cfgSave),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      check_protocol_header: {
        value: cdktf.stringToHclTerraform(this._checkProtocolHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      check_reset_range: {
        value: cdktf.stringToHclTerraform(this._checkResetRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cli_audit_log: {
        value: cdktf.stringToHclTerraform(this._cliAuditLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_communication: {
        value: cdktf.stringToHclTerraform(this._cloudCommunication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clt_cert_req: {
        value: cdktf.stringToHclTerraform(this._cltCertReq),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cmdbsvr_affinity: {
        value: cdktf.stringToHclTerraform(this._cmdbsvrAffinity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compliance_check: {
        value: cdktf.stringToHclTerraform(this._complianceCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compliance_check_time: {
        value: cdktf.stringToHclTerraform(this._complianceCheckTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_use_threshold: {
        value: cdktf.numberToHclTerraform(this._cpuUseThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      csr_ca_attribute: {
        value: cdktf.stringToHclTerraform(this._csrCaAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      daily_restart: {
        value: cdktf.stringToHclTerraform(this._dailyRestart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_service_source_port: {
        value: cdktf.stringToHclTerraform(this._defaultServiceSourcePort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delay_tcp_npu_session: {
        value: cdktf.stringToHclTerraform(this._delayTcpNpuSession),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_identification_active_scan_delay: {
        value: cdktf.numberToHclTerraform(this._deviceIdentificationActiveScanDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device_idle_timeout: {
        value: cdktf.numberToHclTerraform(this._deviceIdleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dh_params: {
        value: cdktf.stringToHclTerraform(this._dhParams),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_lease_backup_interval: {
        value: cdktf.numberToHclTerraform(this._dhcpLeaseBackupInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dnsproxy_worker_count: {
        value: cdktf.numberToHclTerraform(this._dnsproxyWorkerCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dst: {
        value: cdktf.stringToHclTerraform(this._dst),
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
      early_tcp_npu_session: {
        value: cdktf.stringToHclTerraform(this._earlyTcpNpuSession),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edit_vdom_prompt: {
        value: cdktf.stringToHclTerraform(this._editVdomPrompt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_control_fds_access: {
        value: cdktf.stringToHclTerraform(this._endpointControlFdsAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_control_portal_port: {
        value: cdktf.numberToHclTerraform(this._endpointControlPortalPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      extender_controller_reserved_network: {
        value: cdktf.stringToHclTerraform(this._extenderControllerReservedNetwork),
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
      faz_disk_buffer_size: {
        value: cdktf.numberToHclTerraform(this._fazDiskBufferSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fds_statistics: {
        value: cdktf.stringToHclTerraform(this._fdsStatistics),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fds_statistics_period: {
        value: cdktf.numberToHclTerraform(this._fdsStatisticsPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fec_port: {
        value: cdktf.numberToHclTerraform(this._fecPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fgd_alert_subscription: {
        value: cdktf.stringToHclTerraform(this._fgdAlertSubscription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forticonverter_config_upload: {
        value: cdktf.stringToHclTerraform(this._forticonverterConfigUpload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forticonverter_integration: {
        value: cdktf.stringToHclTerraform(this._forticonverterIntegration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortiextender: {
        value: cdktf.stringToHclTerraform(this._fortiextender),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortiextender_data_port: {
        value: cdktf.numberToHclTerraform(this._fortiextenderDataPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fortiextender_discovery_lockdown: {
        value: cdktf.stringToHclTerraform(this._fortiextenderDiscoveryLockdown),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortiextender_provision_on_authorization: {
        value: cdktf.stringToHclTerraform(this._fortiextenderProvisionOnAuthorization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortiextender_vlan_mode: {
        value: cdktf.stringToHclTerraform(this._fortiextenderVlanMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortigslb_integration: {
        value: cdktf.stringToHclTerraform(this._fortigslbIntegration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortiipam_integration: {
        value: cdktf.stringToHclTerraform(this._fortiipamIntegration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortiservice_port: {
        value: cdktf.numberToHclTerraform(this._fortiservicePort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fortitoken_cloud: {
        value: cdktf.stringToHclTerraform(this._fortitokenCloud),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortitoken_cloud_push_status: {
        value: cdktf.stringToHclTerraform(this._fortitokenCloudPushStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortitoken_cloud_region: {
        value: cdktf.stringToHclTerraform(this._fortitokenCloudRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortitoken_cloud_sync_interval: {
        value: cdktf.numberToHclTerraform(this._fortitokenCloudSyncInterval),
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
      gui_allow_default_hostname: {
        value: cdktf.stringToHclTerraform(this._guiAllowDefaultHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_allow_incompatible_fabric_fgt: {
        value: cdktf.stringToHclTerraform(this._guiAllowIncompatibleFabricFgt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_app_detection_sdwan: {
        value: cdktf.stringToHclTerraform(this._guiAppDetectionSdwan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_auto_upgrade_setup_warning: {
        value: cdktf.stringToHclTerraform(this._guiAutoUpgradeSetupWarning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_cdn_domain_override: {
        value: cdktf.stringToHclTerraform(this._guiCdnDomainOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_cdn_usage: {
        value: cdktf.stringToHclTerraform(this._guiCdnUsage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_certificates: {
        value: cdktf.stringToHclTerraform(this._guiCertificates),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_custom_language: {
        value: cdktf.stringToHclTerraform(this._guiCustomLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_date_format: {
        value: cdktf.stringToHclTerraform(this._guiDateFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_date_time_source: {
        value: cdktf.stringToHclTerraform(this._guiDateTimeSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_device_latitude: {
        value: cdktf.stringToHclTerraform(this._guiDeviceLatitude),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_device_longitude: {
        value: cdktf.stringToHclTerraform(this._guiDeviceLongitude),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_display_hostname: {
        value: cdktf.stringToHclTerraform(this._guiDisplayHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_firmware_upgrade_setup_warning: {
        value: cdktf.stringToHclTerraform(this._guiFirmwareUpgradeSetupWarning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_firmware_upgrade_warning: {
        value: cdktf.stringToHclTerraform(this._guiFirmwareUpgradeWarning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_forticare_registration_setup_warning: {
        value: cdktf.stringToHclTerraform(this._guiForticareRegistrationSetupWarning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_fortigate_cloud_sandbox: {
        value: cdktf.stringToHclTerraform(this._guiFortigateCloudSandbox),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_fortiguard_resource_fetch: {
        value: cdktf.stringToHclTerraform(this._guiFortiguardResourceFetch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_fortisandbox_cloud: {
        value: cdktf.stringToHclTerraform(this._guiFortisandboxCloud),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_ipv6: {
        value: cdktf.stringToHclTerraform(this._guiIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_lines_per_page: {
        value: cdktf.numberToHclTerraform(this._guiLinesPerPage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gui_local_out: {
        value: cdktf.stringToHclTerraform(this._guiLocalOut),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_replacement_message_groups: {
        value: cdktf.stringToHclTerraform(this._guiReplacementMessageGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_rest_api_cache: {
        value: cdktf.stringToHclTerraform(this._guiRestApiCache),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_theme: {
        value: cdktf.stringToHclTerraform(this._guiTheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_wireless_opensecurity: {
        value: cdktf.stringToHclTerraform(this._guiWirelessOpensecurity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_workflow_management: {
        value: cdktf.stringToHclTerraform(this._guiWorkflowManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_affinity: {
        value: cdktf.stringToHclTerraform(this._haAffinity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      honor_df: {
        value: cdktf.stringToHclTerraform(this._honorDf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      httpd_max_worker_count: {
        value: cdktf.numberToHclTerraform(this._httpdMaxWorkerCount),
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
      igmp_state_limit: {
        value: cdktf.numberToHclTerraform(this._igmpStateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ike_embryonic_limit: {
        value: cdktf.numberToHclTerraform(this._ikeEmbryonicLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      interface_subnet_usage: {
        value: cdktf.stringToHclTerraform(this._interfaceSubnetUsage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service_database: {
        value: cdktf.stringToHclTerraform(this._internetServiceDatabase),
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
      ip_conflict_detection: {
        value: cdktf.stringToHclTerraform(this._ipConflictDetection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_fragment_mem_thresholds: {
        value: cdktf.numberToHclTerraform(this._ipFragmentMemThresholds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_fragment_timeout: {
        value: cdktf.numberToHclTerraform(this._ipFragmentTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_src_port_range: {
        value: cdktf.stringToHclTerraform(this._ipSrcPortRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ips_affinity: {
        value: cdktf.stringToHclTerraform(this._ipsAffinity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_asic_offload: {
        value: cdktf.stringToHclTerraform(this._ipsecAsicOffload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_ha_seqjump_rate: {
        value: cdktf.numberToHclTerraform(this._ipsecHaSeqjumpRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipsec_hmac_offload: {
        value: cdktf.stringToHclTerraform(this._ipsecHmacOffload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_qat_offload: {
        value: cdktf.stringToHclTerraform(this._ipsecQatOffload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_round_robin: {
        value: cdktf.stringToHclTerraform(this._ipsecRoundRobin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_soft_dec_async: {
        value: cdktf.stringToHclTerraform(this._ipsecSoftDecAsync),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_accept_dad: {
        value: cdktf.numberToHclTerraform(this._ipv6AcceptDad),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_allow_anycast_probe: {
        value: cdktf.stringToHclTerraform(this._ipv6AllowAnycastProbe),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_allow_local_in_silent_drop: {
        value: cdktf.stringToHclTerraform(this._ipv6AllowLocalInSilentDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_allow_local_in_slient_drop: {
        value: cdktf.stringToHclTerraform(this._ipv6AllowLocalInSlientDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_allow_multicast_probe: {
        value: cdktf.stringToHclTerraform(this._ipv6AllowMulticastProbe),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_allow_traffic_redirect: {
        value: cdktf.stringToHclTerraform(this._ipv6AllowTrafficRedirect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_fragment_timeout: {
        value: cdktf.numberToHclTerraform(this._ipv6FragmentTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_snat_route_change: {
        value: cdktf.stringToHclTerraform(this._ipv6SnatRouteChange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      irq_time_accounting: {
        value: cdktf.stringToHclTerraform(this._irqTimeAccounting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      language: {
        value: cdktf.stringToHclTerraform(this._language),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldapconntimeout: {
        value: cdktf.numberToHclTerraform(this._ldapconntimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lldp_reception: {
        value: cdktf.stringToHclTerraform(this._lldpReception),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lldp_transmission: {
        value: cdktf.stringToHclTerraform(this._lldpTransmission),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_single_cpu_high: {
        value: cdktf.stringToHclTerraform(this._logSingleCpuHigh),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_ssl_connection: {
        value: cdktf.stringToHclTerraform(this._logSslConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_uuid_address: {
        value: cdktf.stringToHclTerraform(this._logUuidAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_uuid_policy: {
        value: cdktf.stringToHclTerraform(this._logUuidPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_timestamp: {
        value: cdktf.stringToHclTerraform(this._loginTimestamp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      long_vdom_name: {
        value: cdktf.stringToHclTerraform(this._longVdomName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      management_ip: {
        value: cdktf.stringToHclTerraform(this._managementIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      management_port: {
        value: cdktf.numberToHclTerraform(this._managementPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      management_port_use_admin_sport: {
        value: cdktf.stringToHclTerraform(this._managementPortUseAdminSport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      management_vdom: {
        value: cdktf.stringToHclTerraform(this._managementVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_dlpstat_memory: {
        value: cdktf.numberToHclTerraform(this._maxDlpstatMemory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_route_cache_size: {
        value: cdktf.numberToHclTerraform(this._maxRouteCacheSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mc_ttl_notchange: {
        value: cdktf.stringToHclTerraform(this._mcTtlNotchange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_use_threshold_extreme: {
        value: cdktf.numberToHclTerraform(this._memoryUseThresholdExtreme),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory_use_threshold_green: {
        value: cdktf.numberToHclTerraform(this._memoryUseThresholdGreen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory_use_threshold_red: {
        value: cdktf.numberToHclTerraform(this._memoryUseThresholdRed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      miglog_affinity: {
        value: cdktf.stringToHclTerraform(this._miglogAffinity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      miglogd_children: {
        value: cdktf.numberToHclTerraform(this._miglogdChildren),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multi_factor_authentication: {
        value: cdktf.stringToHclTerraform(this._multiFactorAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multicast_forward: {
        value: cdktf.stringToHclTerraform(this._multicastForward),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ndp_max_entry: {
        value: cdktf.numberToHclTerraform(this._ndpMaxEntry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      npu_neighbor_update: {
        value: cdktf.stringToHclTerraform(this._npuNeighborUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      per_user_bal: {
        value: cdktf.stringToHclTerraform(this._perUserBal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      per_user_bwl: {
        value: cdktf.stringToHclTerraform(this._perUserBwl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pmtu_discovery: {
        value: cdktf.stringToHclTerraform(this._pmtuDiscovery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_auth_concurrent: {
        value: cdktf.numberToHclTerraform(this._policyAuthConcurrent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      post_login_banner: {
        value: cdktf.stringToHclTerraform(this._postLoginBanner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_login_banner: {
        value: cdktf.stringToHclTerraform(this._preLoginBanner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_data_encryption: {
        value: cdktf.stringToHclTerraform(this._privateDataEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_auth_lifetime: {
        value: cdktf.stringToHclTerraform(this._proxyAuthLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_auth_lifetime_timeout: {
        value: cdktf.numberToHclTerraform(this._proxyAuthLifetimeTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proxy_auth_timeout: {
        value: cdktf.numberToHclTerraform(this._proxyAuthTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proxy_cert_use_mgmt_vdom: {
        value: cdktf.stringToHclTerraform(this._proxyCertUseMgmtVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_cipher_hardware_acceleration: {
        value: cdktf.stringToHclTerraform(this._proxyCipherHardwareAcceleration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_hardware_acceleration: {
        value: cdktf.stringToHclTerraform(this._proxyHardwareAcceleration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_keep_alive_mode: {
        value: cdktf.stringToHclTerraform(this._proxyKeepAliveMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_kxp_hardware_acceleration: {
        value: cdktf.stringToHclTerraform(this._proxyKxpHardwareAcceleration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_re_authentication_mode: {
        value: cdktf.stringToHclTerraform(this._proxyReAuthenticationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_re_authentication_time: {
        value: cdktf.numberToHclTerraform(this._proxyReAuthenticationTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proxy_resource_mode: {
        value: cdktf.stringToHclTerraform(this._proxyResourceMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_worker_count: {
        value: cdktf.numberToHclTerraform(this._proxyWorkerCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      purdue_level: {
        value: cdktf.stringToHclTerraform(this._purdueLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quic_ack_thresold: {
        value: cdktf.numberToHclTerraform(this._quicAckThresold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      quic_congestion_control_algo: {
        value: cdktf.stringToHclTerraform(this._quicCongestionControlAlgo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quic_max_datagram_size: {
        value: cdktf.numberToHclTerraform(this._quicMaxDatagramSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      quic_pmtud: {
        value: cdktf.stringToHclTerraform(this._quicPmtud),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quic_tls_handshake_timeout: {
        value: cdktf.numberToHclTerraform(this._quicTlsHandshakeTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      quic_udp_payload_size_shaping_per_cid: {
        value: cdktf.stringToHclTerraform(this._quicUdpPayloadSizeShapingPerCid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_port: {
        value: cdktf.numberToHclTerraform(this._radiusPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reboot_upon_config_restore: {
        value: cdktf.stringToHclTerraform(this._rebootUponConfigRestore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh: {
        value: cdktf.numberToHclTerraform(this._refresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remoteauthtimeout: {
        value: cdktf.numberToHclTerraform(this._remoteauthtimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reset_sessionless_tcp: {
        value: cdktf.stringToHclTerraform(this._resetSessionlessTcp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rest_api_key_url_query: {
        value: cdktf.stringToHclTerraform(this._restApiKeyUrlQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restart_time: {
        value: cdktf.stringToHclTerraform(this._restartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revision_backup_on_logout: {
        value: cdktf.stringToHclTerraform(this._revisionBackupOnLogout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revision_image_auto_backup: {
        value: cdktf.stringToHclTerraform(this._revisionImageAutoBackup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      router_affinity: {
        value: cdktf.stringToHclTerraform(this._routerAffinity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scanunit_count: {
        value: cdktf.numberToHclTerraform(this._scanunitCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scim_http_port: {
        value: cdktf.numberToHclTerraform(this._scimHttpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scim_https_port: {
        value: cdktf.numberToHclTerraform(this._scimHttpsPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scim_server_cert: {
        value: cdktf.stringToHclTerraform(this._scimServerCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_rating_result_submission: {
        value: cdktf.stringToHclTerraform(this._securityRatingResultSubmission),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_rating_run_on_schedule: {
        value: cdktf.stringToHclTerraform(this._securityRatingRunOnSchedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_pmtu_icmp: {
        value: cdktf.stringToHclTerraform(this._sendPmtuIcmp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sflowd_max_children_num: {
        value: cdktf.numberToHclTerraform(this._sflowdMaxChildrenNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snat_route_change: {
        value: cdktf.stringToHclTerraform(this._snatRouteChange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      special_file_23_support: {
        value: cdktf.stringToHclTerraform(this._specialFile23Support),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      speedtest_server: {
        value: cdktf.stringToHclTerraform(this._speedtestServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      speedtestd_ctrl_port: {
        value: cdktf.numberToHclTerraform(this._speedtestdCtrlPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      speedtestd_server_port: {
        value: cdktf.numberToHclTerraform(this._speedtestdServerPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      split_port: {
        value: cdktf.stringToHclTerraform(this._splitPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssd_trim_date: {
        value: cdktf.numberToHclTerraform(this._ssdTrimDate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssd_trim_freq: {
        value: cdktf.stringToHclTerraform(this._ssdTrimFreq),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssd_trim_hour: {
        value: cdktf.numberToHclTerraform(this._ssdTrimHour),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssd_trim_min: {
        value: cdktf.numberToHclTerraform(this._ssdTrimMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssd_trim_weekday: {
        value: cdktf.stringToHclTerraform(this._ssdTrimWeekday),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_cbc_cipher: {
        value: cdktf.stringToHclTerraform(this._sshCbcCipher),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_enc_algo: {
        value: cdktf.stringToHclTerraform(this._sshEncAlgo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_hmac_md5: {
        value: cdktf.stringToHclTerraform(this._sshHmacMd5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_hostkey: {
        value: cdktf.stringToHclTerraform(this._sshHostkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_hostkey_algo: {
        value: cdktf.stringToHclTerraform(this._sshHostkeyAlgo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_hostkey_override: {
        value: cdktf.stringToHclTerraform(this._sshHostkeyOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_hostkey_password: {
        value: cdktf.stringToHclTerraform(this._sshHostkeyPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_kex_algo: {
        value: cdktf.stringToHclTerraform(this._sshKexAlgo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_kex_sha1: {
        value: cdktf.stringToHclTerraform(this._sshKexSha1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_mac_algo: {
        value: cdktf.stringToHclTerraform(this._sshMacAlgo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_mac_weak: {
        value: cdktf.stringToHclTerraform(this._sshMacWeak),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_min_proto_version: {
        value: cdktf.stringToHclTerraform(this._sslMinProtoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_static_key_ciphers: {
        value: cdktf.stringToHclTerraform(this._sslStaticKeyCiphers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sslvpn_affinity: {
        value: cdktf.stringToHclTerraform(this._sslvpnAffinity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sslvpn_cipher_hardware_acceleration: {
        value: cdktf.stringToHclTerraform(this._sslvpnCipherHardwareAcceleration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sslvpn_ems_sn_check: {
        value: cdktf.stringToHclTerraform(this._sslvpnEmsSnCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sslvpn_kxp_hardware_acceleration: {
        value: cdktf.stringToHclTerraform(this._sslvpnKxpHardwareAcceleration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sslvpn_max_worker_count: {
        value: cdktf.numberToHclTerraform(this._sslvpnMaxWorkerCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sslvpn_plugin_version_check: {
        value: cdktf.stringToHclTerraform(this._sslvpnPluginVersionCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sslvpn_web_mode: {
        value: cdktf.stringToHclTerraform(this._sslvpnWebMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strict_dirty_session_check: {
        value: cdktf.stringToHclTerraform(this._strictDirtySessionCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strong_crypto: {
        value: cdktf.stringToHclTerraform(this._strongCrypto),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_controller: {
        value: cdktf.stringToHclTerraform(this._switchController),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_controller_reserved_network: {
        value: cdktf.stringToHclTerraform(this._switchControllerReservedNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sys_perf_log_interval: {
        value: cdktf.numberToHclTerraform(this._sysPerfLogInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      syslog_affinity: {
        value: cdktf.stringToHclTerraform(this._syslogAffinity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_halfclose_timer: {
        value: cdktf.numberToHclTerraform(this._tcpHalfcloseTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_halfopen_timer: {
        value: cdktf.numberToHclTerraform(this._tcpHalfopenTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_option: {
        value: cdktf.stringToHclTerraform(this._tcpOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_rst_timer: {
        value: cdktf.numberToHclTerraform(this._tcpRstTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_timewait_timer: {
        value: cdktf.numberToHclTerraform(this._tcpTimewaitTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tftp: {
        value: cdktf.stringToHclTerraform(this._tftp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_session_cache: {
        value: cdktf.stringToHclTerraform(this._tlsSessionCache),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tp_mc_skip_policy: {
        value: cdktf.stringToHclTerraform(this._tpMcSkipPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_priority: {
        value: cdktf.stringToHclTerraform(this._trafficPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_priority_level: {
        value: cdktf.stringToHclTerraform(this._trafficPriorityLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      two_factor_email_expiry: {
        value: cdktf.numberToHclTerraform(this._twoFactorEmailExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      two_factor_fac_expiry: {
        value: cdktf.numberToHclTerraform(this._twoFactorFacExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      two_factor_ftk_expiry: {
        value: cdktf.numberToHclTerraform(this._twoFactorFtkExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      two_factor_ftm_expiry: {
        value: cdktf.numberToHclTerraform(this._twoFactorFtmExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      two_factor_sms_expiry: {
        value: cdktf.numberToHclTerraform(this._twoFactorSmsExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      udp_idle_timer: {
        value: cdktf.numberToHclTerraform(this._udpIdleTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      upgrade_report: {
        value: cdktf.stringToHclTerraform(this._upgradeReport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_filter_affinity: {
        value: cdktf.stringToHclTerraform(this._urlFilterAffinity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_filter_count: {
        value: cdktf.numberToHclTerraform(this._urlFilterCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_device_store_max_device_mem: {
        value: cdktf.numberToHclTerraform(this._userDeviceStoreMaxDeviceMem),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_device_store_max_devices: {
        value: cdktf.numberToHclTerraform(this._userDeviceStoreMaxDevices),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_device_store_max_unified_mem: {
        value: cdktf.numberToHclTerraform(this._userDeviceStoreMaxUnifiedMem),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_device_store_max_users: {
        value: cdktf.numberToHclTerraform(this._userDeviceStoreMaxUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_history_password_threshold: {
        value: cdktf.numberToHclTerraform(this._userHistoryPasswordThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_server_cert: {
        value: cdktf.stringToHclTerraform(this._userServerCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom_admin: {
        value: cdktf.stringToHclTerraform(this._vdomAdmin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom_mode: {
        value: cdktf.stringToHclTerraform(this._vdomMode),
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
      vip_arp_range: {
        value: cdktf.stringToHclTerraform(this._vipArpRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_server_count: {
        value: cdktf.numberToHclTerraform(this._virtualServerCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      virtual_server_hardware_acceleration: {
        value: cdktf.stringToHclTerraform(this._virtualServerHardwareAcceleration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_switch_vlan: {
        value: cdktf.stringToHclTerraform(this._virtualSwitchVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_ems_sn_check: {
        value: cdktf.stringToHclTerraform(this._vpnEmsSnCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wad_affinity: {
        value: cdktf.stringToHclTerraform(this._wadAffinity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wad_csvc_cs_count: {
        value: cdktf.numberToHclTerraform(this._wadCsvcCsCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wad_csvc_db_count: {
        value: cdktf.numberToHclTerraform(this._wadCsvcDbCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wad_memory_change_granularity: {
        value: cdktf.numberToHclTerraform(this._wadMemoryChangeGranularity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wad_p2s_max_body_size: {
        value: cdktf.numberToHclTerraform(this._wadP2SMaxBodySize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wad_restart_end_time: {
        value: cdktf.stringToHclTerraform(this._wadRestartEndTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wad_restart_mode: {
        value: cdktf.stringToHclTerraform(this._wadRestartMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wad_restart_start_time: {
        value: cdktf.stringToHclTerraform(this._wadRestartStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wad_source_affinity: {
        value: cdktf.stringToHclTerraform(this._wadSourceAffinity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wad_worker_count: {
        value: cdktf.numberToHclTerraform(this._wadWorkerCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wifi_ca_certificate: {
        value: cdktf.stringToHclTerraform(this._wifiCaCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wifi_certificate: {
        value: cdktf.stringToHclTerraform(this._wifiCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wimax_4g_usb: {
        value: cdktf.stringToHclTerraform(this._wimax4GUsb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wireless_controller: {
        value: cdktf.stringToHclTerraform(this._wirelessController),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wireless_controller_port: {
        value: cdktf.numberToHclTerraform(this._wirelessControllerPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      internet_service_download_list: {
        value: cdktf.listMapperHcl(systemGlobalInternetServiceDownloadListStructToHclTerraform, true)(this._internetServiceDownloadList.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemGlobalInternetServiceDownloadListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
