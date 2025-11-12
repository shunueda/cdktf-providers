// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_global
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiosSystemGlobalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_global#id DataFortiosSystemGlobal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_global#vdomparam DataFortiosSystemGlobal#vdomparam}
  */
  readonly vdomparam?: string;
}
export interface DataFortiosSystemGlobalInternetServiceDownloadListStruct {
}

export function dataFortiosSystemGlobalInternetServiceDownloadListStructToTerraform(struct?: DataFortiosSystemGlobalInternetServiceDownloadListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemGlobalInternetServiceDownloadListStructToHclTerraform(struct?: DataFortiosSystemGlobalInternetServiceDownloadListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemGlobalInternetServiceDownloadListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiosSystemGlobalInternetServiceDownloadListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemGlobalInternetServiceDownloadListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }
}

export class DataFortiosSystemGlobalInternetServiceDownloadListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemGlobalInternetServiceDownloadListStructOutputReference {
    return new DataFortiosSystemGlobalInternetServiceDownloadListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_global fortios_system_global}
*/
export class DataFortiosSystemGlobal extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_global";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiosSystemGlobal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiosSystemGlobal to import
  * @param importFromId The id of the existing DataFortiosSystemGlobal that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_global#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiosSystemGlobal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_global", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_global fortios_system_global} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiosSystemGlobalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataFortiosSystemGlobalConfig = {}) {
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
    this._id = config.id;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_concurrent - computed: true, optional: false, required: false
  public get adminConcurrent() {
    return this.getStringAttribute('admin_concurrent');
  }

  // admin_console_timeout - computed: true, optional: false, required: false
  public get adminConsoleTimeout() {
    return this.getNumberAttribute('admin_console_timeout');
  }

  // admin_forticloud_sso_default_profile - computed: true, optional: false, required: false
  public get adminForticloudSsoDefaultProfile() {
    return this.getStringAttribute('admin_forticloud_sso_default_profile');
  }

  // admin_forticloud_sso_login - computed: true, optional: false, required: false
  public get adminForticloudSsoLogin() {
    return this.getStringAttribute('admin_forticloud_sso_login');
  }

  // admin_host - computed: true, optional: false, required: false
  public get adminHost() {
    return this.getStringAttribute('admin_host');
  }

  // admin_hsts_max_age - computed: true, optional: false, required: false
  public get adminHstsMaxAge() {
    return this.getNumberAttribute('admin_hsts_max_age');
  }

  // admin_https_pki_required - computed: true, optional: false, required: false
  public get adminHttpsPkiRequired() {
    return this.getStringAttribute('admin_https_pki_required');
  }

  // admin_https_redirect - computed: true, optional: false, required: false
  public get adminHttpsRedirect() {
    return this.getStringAttribute('admin_https_redirect');
  }

  // admin_https_ssl_banned_ciphers - computed: true, optional: false, required: false
  public get adminHttpsSslBannedCiphers() {
    return this.getStringAttribute('admin_https_ssl_banned_ciphers');
  }

  // admin_https_ssl_ciphersuites - computed: true, optional: false, required: false
  public get adminHttpsSslCiphersuites() {
    return this.getStringAttribute('admin_https_ssl_ciphersuites');
  }

  // admin_https_ssl_versions - computed: true, optional: false, required: false
  public get adminHttpsSslVersions() {
    return this.getStringAttribute('admin_https_ssl_versions');
  }

  // admin_lockout_duration - computed: true, optional: false, required: false
  public get adminLockoutDuration() {
    return this.getNumberAttribute('admin_lockout_duration');
  }

  // admin_lockout_threshold - computed: true, optional: false, required: false
  public get adminLockoutThreshold() {
    return this.getNumberAttribute('admin_lockout_threshold');
  }

  // admin_login_max - computed: true, optional: false, required: false
  public get adminLoginMax() {
    return this.getNumberAttribute('admin_login_max');
  }

  // admin_maintainer - computed: true, optional: false, required: false
  public get adminMaintainer() {
    return this.getStringAttribute('admin_maintainer');
  }

  // admin_port - computed: true, optional: false, required: false
  public get adminPort() {
    return this.getNumberAttribute('admin_port');
  }

  // admin_restrict_local - computed: true, optional: false, required: false
  public get adminRestrictLocal() {
    return this.getStringAttribute('admin_restrict_local');
  }

  // admin_scp - computed: true, optional: false, required: false
  public get adminScp() {
    return this.getStringAttribute('admin_scp');
  }

  // admin_server_cert - computed: true, optional: false, required: false
  public get adminServerCert() {
    return this.getStringAttribute('admin_server_cert');
  }

  // admin_sport - computed: true, optional: false, required: false
  public get adminSport() {
    return this.getNumberAttribute('admin_sport');
  }

  // admin_ssh_grace_time - computed: true, optional: false, required: false
  public get adminSshGraceTime() {
    return this.getNumberAttribute('admin_ssh_grace_time');
  }

  // admin_ssh_password - computed: true, optional: false, required: false
  public get adminSshPassword() {
    return this.getStringAttribute('admin_ssh_password');
  }

  // admin_ssh_port - computed: true, optional: false, required: false
  public get adminSshPort() {
    return this.getNumberAttribute('admin_ssh_port');
  }

  // admin_ssh_v1 - computed: true, optional: false, required: false
  public get adminSshV1() {
    return this.getStringAttribute('admin_ssh_v1');
  }

  // admin_telnet - computed: true, optional: false, required: false
  public get adminTelnet() {
    return this.getStringAttribute('admin_telnet');
  }

  // admin_telnet_port - computed: true, optional: false, required: false
  public get adminTelnetPort() {
    return this.getNumberAttribute('admin_telnet_port');
  }

  // admintimeout - computed: true, optional: false, required: false
  public get admintimeout() {
    return this.getNumberAttribute('admintimeout');
  }

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // allow_traffic_redirect - computed: true, optional: false, required: false
  public get allowTrafficRedirect() {
    return this.getStringAttribute('allow_traffic_redirect');
  }

  // anti_replay - computed: true, optional: false, required: false
  public get antiReplay() {
    return this.getStringAttribute('anti_replay');
  }

  // application_bandwidth_tracking - computed: true, optional: false, required: false
  public get applicationBandwidthTracking() {
    return this.getStringAttribute('application_bandwidth_tracking');
  }

  // arp_max_entry - computed: true, optional: false, required: false
  public get arpMaxEntry() {
    return this.getNumberAttribute('arp_max_entry');
  }

  // asymroute - computed: true, optional: false, required: false
  public get asymroute() {
    return this.getStringAttribute('asymroute');
  }

  // auth_cert - computed: true, optional: false, required: false
  public get authCert() {
    return this.getStringAttribute('auth_cert');
  }

  // auth_http_port - computed: true, optional: false, required: false
  public get authHttpPort() {
    return this.getNumberAttribute('auth_http_port');
  }

  // auth_https_port - computed: true, optional: false, required: false
  public get authHttpsPort() {
    return this.getNumberAttribute('auth_https_port');
  }

  // auth_ike_saml_port - computed: true, optional: false, required: false
  public get authIkeSamlPort() {
    return this.getNumberAttribute('auth_ike_saml_port');
  }

  // auth_keepalive - computed: true, optional: false, required: false
  public get authKeepalive() {
    return this.getStringAttribute('auth_keepalive');
  }

  // auth_session_auto_backup - computed: true, optional: false, required: false
  public get authSessionAutoBackup() {
    return this.getStringAttribute('auth_session_auto_backup');
  }

  // auth_session_auto_backup_interval - computed: true, optional: false, required: false
  public get authSessionAutoBackupInterval() {
    return this.getStringAttribute('auth_session_auto_backup_interval');
  }

  // auth_session_limit - computed: true, optional: false, required: false
  public get authSessionLimit() {
    return this.getStringAttribute('auth_session_limit');
  }

  // auto_auth_extension_device - computed: true, optional: false, required: false
  public get autoAuthExtensionDevice() {
    return this.getStringAttribute('auto_auth_extension_device');
  }

  // autorun_log_fsck - computed: true, optional: false, required: false
  public get autorunLogFsck() {
    return this.getStringAttribute('autorun_log_fsck');
  }

  // av_affinity - computed: true, optional: false, required: false
  public get avAffinity() {
    return this.getStringAttribute('av_affinity');
  }

  // av_failopen - computed: true, optional: false, required: false
  public get avFailopen() {
    return this.getStringAttribute('av_failopen');
  }

  // av_failopen_session - computed: true, optional: false, required: false
  public get avFailopenSession() {
    return this.getStringAttribute('av_failopen_session');
  }

  // batch_cmdb - computed: true, optional: false, required: false
  public get batchCmdb() {
    return this.getStringAttribute('batch_cmdb');
  }

  // bfd_affinity - computed: true, optional: false, required: false
  public get bfdAffinity() {
    return this.getStringAttribute('bfd_affinity');
  }

  // block_session_timer - computed: true, optional: false, required: false
  public get blockSessionTimer() {
    return this.getNumberAttribute('block_session_timer');
  }

  // br_fdb_max_entry - computed: true, optional: false, required: false
  public get brFdbMaxEntry() {
    return this.getNumberAttribute('br_fdb_max_entry');
  }

  // cert_chain_max - computed: true, optional: false, required: false
  public get certChainMax() {
    return this.getNumberAttribute('cert_chain_max');
  }

  // cfg_revert_timeout - computed: true, optional: false, required: false
  public get cfgRevertTimeout() {
    return this.getNumberAttribute('cfg_revert_timeout');
  }

  // cfg_save - computed: true, optional: false, required: false
  public get cfgSave() {
    return this.getStringAttribute('cfg_save');
  }

  // check_protocol_header - computed: true, optional: false, required: false
  public get checkProtocolHeader() {
    return this.getStringAttribute('check_protocol_header');
  }

  // check_reset_range - computed: true, optional: false, required: false
  public get checkResetRange() {
    return this.getStringAttribute('check_reset_range');
  }

  // cli_audit_log - computed: true, optional: false, required: false
  public get cliAuditLog() {
    return this.getStringAttribute('cli_audit_log');
  }

  // cloud_communication - computed: true, optional: false, required: false
  public get cloudCommunication() {
    return this.getStringAttribute('cloud_communication');
  }

  // clt_cert_req - computed: true, optional: false, required: false
  public get cltCertReq() {
    return this.getStringAttribute('clt_cert_req');
  }

  // cmdbsvr_affinity - computed: true, optional: false, required: false
  public get cmdbsvrAffinity() {
    return this.getStringAttribute('cmdbsvr_affinity');
  }

  // compliance_check - computed: true, optional: false, required: false
  public get complianceCheck() {
    return this.getStringAttribute('compliance_check');
  }

  // compliance_check_time - computed: true, optional: false, required: false
  public get complianceCheckTime() {
    return this.getStringAttribute('compliance_check_time');
  }

  // cpu_use_threshold - computed: true, optional: false, required: false
  public get cpuUseThreshold() {
    return this.getNumberAttribute('cpu_use_threshold');
  }

  // csr_ca_attribute - computed: true, optional: false, required: false
  public get csrCaAttribute() {
    return this.getStringAttribute('csr_ca_attribute');
  }

  // daily_restart - computed: true, optional: false, required: false
  public get dailyRestart() {
    return this.getStringAttribute('daily_restart');
  }

  // default_service_source_port - computed: true, optional: false, required: false
  public get defaultServiceSourcePort() {
    return this.getStringAttribute('default_service_source_port');
  }

  // delay_tcp_npu_session - computed: true, optional: false, required: false
  public get delayTcpNpuSession() {
    return this.getStringAttribute('delay_tcp_npu_session');
  }

  // device_identification_active_scan_delay - computed: true, optional: false, required: false
  public get deviceIdentificationActiveScanDelay() {
    return this.getNumberAttribute('device_identification_active_scan_delay');
  }

  // device_idle_timeout - computed: true, optional: false, required: false
  public get deviceIdleTimeout() {
    return this.getNumberAttribute('device_idle_timeout');
  }

  // dh_params - computed: true, optional: false, required: false
  public get dhParams() {
    return this.getStringAttribute('dh_params');
  }

  // dhcp_lease_backup_interval - computed: true, optional: false, required: false
  public get dhcpLeaseBackupInterval() {
    return this.getNumberAttribute('dhcp_lease_backup_interval');
  }

  // dnsproxy_worker_count - computed: true, optional: false, required: false
  public get dnsproxyWorkerCount() {
    return this.getNumberAttribute('dnsproxy_worker_count');
  }

  // dst - computed: true, optional: false, required: false
  public get dst() {
    return this.getStringAttribute('dst');
  }

  // early_tcp_npu_session - computed: true, optional: false, required: false
  public get earlyTcpNpuSession() {
    return this.getStringAttribute('early_tcp_npu_session');
  }

  // edit_vdom_prompt - computed: true, optional: false, required: false
  public get editVdomPrompt() {
    return this.getStringAttribute('edit_vdom_prompt');
  }

  // endpoint_control_fds_access - computed: true, optional: false, required: false
  public get endpointControlFdsAccess() {
    return this.getStringAttribute('endpoint_control_fds_access');
  }

  // endpoint_control_portal_port - computed: true, optional: false, required: false
  public get endpointControlPortalPort() {
    return this.getNumberAttribute('endpoint_control_portal_port');
  }

  // extender_controller_reserved_network - computed: true, optional: false, required: false
  public get extenderControllerReservedNetwork() {
    return this.getStringAttribute('extender_controller_reserved_network');
  }

  // failtime - computed: true, optional: false, required: false
  public get failtime() {
    return this.getNumberAttribute('failtime');
  }

  // faz_disk_buffer_size - computed: true, optional: false, required: false
  public get fazDiskBufferSize() {
    return this.getNumberAttribute('faz_disk_buffer_size');
  }

  // fds_statistics - computed: true, optional: false, required: false
  public get fdsStatistics() {
    return this.getStringAttribute('fds_statistics');
  }

  // fds_statistics_period - computed: true, optional: false, required: false
  public get fdsStatisticsPeriod() {
    return this.getNumberAttribute('fds_statistics_period');
  }

  // fec_port - computed: true, optional: false, required: false
  public get fecPort() {
    return this.getNumberAttribute('fec_port');
  }

  // fgd_alert_subscription - computed: true, optional: false, required: false
  public get fgdAlertSubscription() {
    return this.getStringAttribute('fgd_alert_subscription');
  }

  // forticonverter_config_upload - computed: true, optional: false, required: false
  public get forticonverterConfigUpload() {
    return this.getStringAttribute('forticonverter_config_upload');
  }

  // forticonverter_integration - computed: true, optional: false, required: false
  public get forticonverterIntegration() {
    return this.getStringAttribute('forticonverter_integration');
  }

  // fortiextender - computed: true, optional: false, required: false
  public get fortiextender() {
    return this.getStringAttribute('fortiextender');
  }

  // fortiextender_data_port - computed: true, optional: false, required: false
  public get fortiextenderDataPort() {
    return this.getNumberAttribute('fortiextender_data_port');
  }

  // fortiextender_discovery_lockdown - computed: true, optional: false, required: false
  public get fortiextenderDiscoveryLockdown() {
    return this.getStringAttribute('fortiextender_discovery_lockdown');
  }

  // fortiextender_provision_on_authorization - computed: true, optional: false, required: false
  public get fortiextenderProvisionOnAuthorization() {
    return this.getStringAttribute('fortiextender_provision_on_authorization');
  }

  // fortiextender_vlan_mode - computed: true, optional: false, required: false
  public get fortiextenderVlanMode() {
    return this.getStringAttribute('fortiextender_vlan_mode');
  }

  // fortigslb_integration - computed: true, optional: false, required: false
  public get fortigslbIntegration() {
    return this.getStringAttribute('fortigslb_integration');
  }

  // fortiipam_integration - computed: true, optional: false, required: false
  public get fortiipamIntegration() {
    return this.getStringAttribute('fortiipam_integration');
  }

  // fortiservice_port - computed: true, optional: false, required: false
  public get fortiservicePort() {
    return this.getNumberAttribute('fortiservice_port');
  }

  // fortitoken_cloud - computed: true, optional: false, required: false
  public get fortitokenCloud() {
    return this.getStringAttribute('fortitoken_cloud');
  }

  // fortitoken_cloud_push_status - computed: true, optional: false, required: false
  public get fortitokenCloudPushStatus() {
    return this.getStringAttribute('fortitoken_cloud_push_status');
  }

  // fortitoken_cloud_region - computed: true, optional: false, required: false
  public get fortitokenCloudRegion() {
    return this.getStringAttribute('fortitoken_cloud_region');
  }

  // fortitoken_cloud_sync_interval - computed: true, optional: false, required: false
  public get fortitokenCloudSyncInterval() {
    return this.getNumberAttribute('fortitoken_cloud_sync_interval');
  }

  // gui_allow_default_hostname - computed: true, optional: false, required: false
  public get guiAllowDefaultHostname() {
    return this.getStringAttribute('gui_allow_default_hostname');
  }

  // gui_allow_incompatible_fabric_fgt - computed: true, optional: false, required: false
  public get guiAllowIncompatibleFabricFgt() {
    return this.getStringAttribute('gui_allow_incompatible_fabric_fgt');
  }

  // gui_app_detection_sdwan - computed: true, optional: false, required: false
  public get guiAppDetectionSdwan() {
    return this.getStringAttribute('gui_app_detection_sdwan');
  }

  // gui_auto_upgrade_setup_warning - computed: true, optional: false, required: false
  public get guiAutoUpgradeSetupWarning() {
    return this.getStringAttribute('gui_auto_upgrade_setup_warning');
  }

  // gui_cdn_domain_override - computed: true, optional: false, required: false
  public get guiCdnDomainOverride() {
    return this.getStringAttribute('gui_cdn_domain_override');
  }

  // gui_cdn_usage - computed: true, optional: false, required: false
  public get guiCdnUsage() {
    return this.getStringAttribute('gui_cdn_usage');
  }

  // gui_certificates - computed: true, optional: false, required: false
  public get guiCertificates() {
    return this.getStringAttribute('gui_certificates');
  }

  // gui_custom_language - computed: true, optional: false, required: false
  public get guiCustomLanguage() {
    return this.getStringAttribute('gui_custom_language');
  }

  // gui_date_format - computed: true, optional: false, required: false
  public get guiDateFormat() {
    return this.getStringAttribute('gui_date_format');
  }

  // gui_date_time_source - computed: true, optional: false, required: false
  public get guiDateTimeSource() {
    return this.getStringAttribute('gui_date_time_source');
  }

  // gui_device_latitude - computed: true, optional: false, required: false
  public get guiDeviceLatitude() {
    return this.getStringAttribute('gui_device_latitude');
  }

  // gui_device_longitude - computed: true, optional: false, required: false
  public get guiDeviceLongitude() {
    return this.getStringAttribute('gui_device_longitude');
  }

  // gui_display_hostname - computed: true, optional: false, required: false
  public get guiDisplayHostname() {
    return this.getStringAttribute('gui_display_hostname');
  }

  // gui_firmware_upgrade_setup_warning - computed: true, optional: false, required: false
  public get guiFirmwareUpgradeSetupWarning() {
    return this.getStringAttribute('gui_firmware_upgrade_setup_warning');
  }

  // gui_firmware_upgrade_warning - computed: true, optional: false, required: false
  public get guiFirmwareUpgradeWarning() {
    return this.getStringAttribute('gui_firmware_upgrade_warning');
  }

  // gui_forticare_registration_setup_warning - computed: true, optional: false, required: false
  public get guiForticareRegistrationSetupWarning() {
    return this.getStringAttribute('gui_forticare_registration_setup_warning');
  }

  // gui_fortigate_cloud_sandbox - computed: true, optional: false, required: false
  public get guiFortigateCloudSandbox() {
    return this.getStringAttribute('gui_fortigate_cloud_sandbox');
  }

  // gui_fortiguard_resource_fetch - computed: true, optional: false, required: false
  public get guiFortiguardResourceFetch() {
    return this.getStringAttribute('gui_fortiguard_resource_fetch');
  }

  // gui_fortisandbox_cloud - computed: true, optional: false, required: false
  public get guiFortisandboxCloud() {
    return this.getStringAttribute('gui_fortisandbox_cloud');
  }

  // gui_ipv6 - computed: true, optional: false, required: false
  public get guiIpv6() {
    return this.getStringAttribute('gui_ipv6');
  }

  // gui_lines_per_page - computed: true, optional: false, required: false
  public get guiLinesPerPage() {
    return this.getNumberAttribute('gui_lines_per_page');
  }

  // gui_local_out - computed: true, optional: false, required: false
  public get guiLocalOut() {
    return this.getStringAttribute('gui_local_out');
  }

  // gui_replacement_message_groups - computed: true, optional: false, required: false
  public get guiReplacementMessageGroups() {
    return this.getStringAttribute('gui_replacement_message_groups');
  }

  // gui_rest_api_cache - computed: true, optional: false, required: false
  public get guiRestApiCache() {
    return this.getStringAttribute('gui_rest_api_cache');
  }

  // gui_theme - computed: true, optional: false, required: false
  public get guiTheme() {
    return this.getStringAttribute('gui_theme');
  }

  // gui_wireless_opensecurity - computed: true, optional: false, required: false
  public get guiWirelessOpensecurity() {
    return this.getStringAttribute('gui_wireless_opensecurity');
  }

  // gui_workflow_management - computed: true, optional: false, required: false
  public get guiWorkflowManagement() {
    return this.getStringAttribute('gui_workflow_management');
  }

  // ha_affinity - computed: true, optional: false, required: false
  public get haAffinity() {
    return this.getStringAttribute('ha_affinity');
  }

  // honor_df - computed: true, optional: false, required: false
  public get honorDf() {
    return this.getStringAttribute('honor_df');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // httpd_max_worker_count - computed: true, optional: false, required: false
  public get httpdMaxWorkerCount() {
    return this.getNumberAttribute('httpd_max_worker_count');
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

  // igmp_state_limit - computed: true, optional: false, required: false
  public get igmpStateLimit() {
    return this.getNumberAttribute('igmp_state_limit');
  }

  // ike_embryonic_limit - computed: true, optional: false, required: false
  public get ikeEmbryonicLimit() {
    return this.getNumberAttribute('ike_embryonic_limit');
  }

  // interface_subnet_usage - computed: true, optional: false, required: false
  public get interfaceSubnetUsage() {
    return this.getStringAttribute('interface_subnet_usage');
  }

  // internet_service_database - computed: true, optional: false, required: false
  public get internetServiceDatabase() {
    return this.getStringAttribute('internet_service_database');
  }

  // internet_service_download_list - computed: true, optional: false, required: false
  private _internetServiceDownloadList = new DataFortiosSystemGlobalInternetServiceDownloadListStructList(this, "internet_service_download_list", false);
  public get internetServiceDownloadList() {
    return this._internetServiceDownloadList;
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // ip_conflict_detection - computed: true, optional: false, required: false
  public get ipConflictDetection() {
    return this.getStringAttribute('ip_conflict_detection');
  }

  // ip_fragment_mem_thresholds - computed: true, optional: false, required: false
  public get ipFragmentMemThresholds() {
    return this.getNumberAttribute('ip_fragment_mem_thresholds');
  }

  // ip_fragment_timeout - computed: true, optional: false, required: false
  public get ipFragmentTimeout() {
    return this.getNumberAttribute('ip_fragment_timeout');
  }

  // ip_src_port_range - computed: true, optional: false, required: false
  public get ipSrcPortRange() {
    return this.getStringAttribute('ip_src_port_range');
  }

  // ips_affinity - computed: true, optional: false, required: false
  public get ipsAffinity() {
    return this.getStringAttribute('ips_affinity');
  }

  // ipsec_asic_offload - computed: true, optional: false, required: false
  public get ipsecAsicOffload() {
    return this.getStringAttribute('ipsec_asic_offload');
  }

  // ipsec_ha_seqjump_rate - computed: true, optional: false, required: false
  public get ipsecHaSeqjumpRate() {
    return this.getNumberAttribute('ipsec_ha_seqjump_rate');
  }

  // ipsec_hmac_offload - computed: true, optional: false, required: false
  public get ipsecHmacOffload() {
    return this.getStringAttribute('ipsec_hmac_offload');
  }

  // ipsec_qat_offload - computed: true, optional: false, required: false
  public get ipsecQatOffload() {
    return this.getStringAttribute('ipsec_qat_offload');
  }

  // ipsec_round_robin - computed: true, optional: false, required: false
  public get ipsecRoundRobin() {
    return this.getStringAttribute('ipsec_round_robin');
  }

  // ipsec_soft_dec_async - computed: true, optional: false, required: false
  public get ipsecSoftDecAsync() {
    return this.getStringAttribute('ipsec_soft_dec_async');
  }

  // ipv6_accept_dad - computed: true, optional: false, required: false
  public get ipv6AcceptDad() {
    return this.getNumberAttribute('ipv6_accept_dad');
  }

  // ipv6_allow_anycast_probe - computed: true, optional: false, required: false
  public get ipv6AllowAnycastProbe() {
    return this.getStringAttribute('ipv6_allow_anycast_probe');
  }

  // ipv6_allow_local_in_silent_drop - computed: true, optional: false, required: false
  public get ipv6AllowLocalInSilentDrop() {
    return this.getStringAttribute('ipv6_allow_local_in_silent_drop');
  }

  // ipv6_allow_local_in_slient_drop - computed: true, optional: false, required: false
  public get ipv6AllowLocalInSlientDrop() {
    return this.getStringAttribute('ipv6_allow_local_in_slient_drop');
  }

  // ipv6_allow_multicast_probe - computed: true, optional: false, required: false
  public get ipv6AllowMulticastProbe() {
    return this.getStringAttribute('ipv6_allow_multicast_probe');
  }

  // ipv6_allow_traffic_redirect - computed: true, optional: false, required: false
  public get ipv6AllowTrafficRedirect() {
    return this.getStringAttribute('ipv6_allow_traffic_redirect');
  }

  // ipv6_fragment_timeout - computed: true, optional: false, required: false
  public get ipv6FragmentTimeout() {
    return this.getNumberAttribute('ipv6_fragment_timeout');
  }

  // ipv6_snat_route_change - computed: true, optional: false, required: false
  public get ipv6SnatRouteChange() {
    return this.getStringAttribute('ipv6_snat_route_change');
  }

  // irq_time_accounting - computed: true, optional: false, required: false
  public get irqTimeAccounting() {
    return this.getStringAttribute('irq_time_accounting');
  }

  // language - computed: true, optional: false, required: false
  public get language() {
    return this.getStringAttribute('language');
  }

  // ldapconntimeout - computed: true, optional: false, required: false
  public get ldapconntimeout() {
    return this.getNumberAttribute('ldapconntimeout');
  }

  // lldp_reception - computed: true, optional: false, required: false
  public get lldpReception() {
    return this.getStringAttribute('lldp_reception');
  }

  // lldp_transmission - computed: true, optional: false, required: false
  public get lldpTransmission() {
    return this.getStringAttribute('lldp_transmission');
  }

  // log_single_cpu_high - computed: true, optional: false, required: false
  public get logSingleCpuHigh() {
    return this.getStringAttribute('log_single_cpu_high');
  }

  // log_ssl_connection - computed: true, optional: false, required: false
  public get logSslConnection() {
    return this.getStringAttribute('log_ssl_connection');
  }

  // log_uuid_address - computed: true, optional: false, required: false
  public get logUuidAddress() {
    return this.getStringAttribute('log_uuid_address');
  }

  // log_uuid_policy - computed: true, optional: false, required: false
  public get logUuidPolicy() {
    return this.getStringAttribute('log_uuid_policy');
  }

  // login_timestamp - computed: true, optional: false, required: false
  public get loginTimestamp() {
    return this.getStringAttribute('login_timestamp');
  }

  // long_vdom_name - computed: true, optional: false, required: false
  public get longVdomName() {
    return this.getStringAttribute('long_vdom_name');
  }

  // management_ip - computed: true, optional: false, required: false
  public get managementIp() {
    return this.getStringAttribute('management_ip');
  }

  // management_port - computed: true, optional: false, required: false
  public get managementPort() {
    return this.getNumberAttribute('management_port');
  }

  // management_port_use_admin_sport - computed: true, optional: false, required: false
  public get managementPortUseAdminSport() {
    return this.getStringAttribute('management_port_use_admin_sport');
  }

  // management_vdom - computed: true, optional: false, required: false
  public get managementVdom() {
    return this.getStringAttribute('management_vdom');
  }

  // max_dlpstat_memory - computed: true, optional: false, required: false
  public get maxDlpstatMemory() {
    return this.getNumberAttribute('max_dlpstat_memory');
  }

  // max_route_cache_size - computed: true, optional: false, required: false
  public get maxRouteCacheSize() {
    return this.getNumberAttribute('max_route_cache_size');
  }

  // mc_ttl_notchange - computed: true, optional: false, required: false
  public get mcTtlNotchange() {
    return this.getStringAttribute('mc_ttl_notchange');
  }

  // memory_use_threshold_extreme - computed: true, optional: false, required: false
  public get memoryUseThresholdExtreme() {
    return this.getNumberAttribute('memory_use_threshold_extreme');
  }

  // memory_use_threshold_green - computed: true, optional: false, required: false
  public get memoryUseThresholdGreen() {
    return this.getNumberAttribute('memory_use_threshold_green');
  }

  // memory_use_threshold_red - computed: true, optional: false, required: false
  public get memoryUseThresholdRed() {
    return this.getNumberAttribute('memory_use_threshold_red');
  }

  // miglog_affinity - computed: true, optional: false, required: false
  public get miglogAffinity() {
    return this.getStringAttribute('miglog_affinity');
  }

  // miglogd_children - computed: true, optional: false, required: false
  public get miglogdChildren() {
    return this.getNumberAttribute('miglogd_children');
  }

  // multi_factor_authentication - computed: true, optional: false, required: false
  public get multiFactorAuthentication() {
    return this.getStringAttribute('multi_factor_authentication');
  }

  // multicast_forward - computed: true, optional: false, required: false
  public get multicastForward() {
    return this.getStringAttribute('multicast_forward');
  }

  // ndp_max_entry - computed: true, optional: false, required: false
  public get ndpMaxEntry() {
    return this.getNumberAttribute('ndp_max_entry');
  }

  // npu_neighbor_update - computed: true, optional: false, required: false
  public get npuNeighborUpdate() {
    return this.getStringAttribute('npu_neighbor_update');
  }

  // per_user_bal - computed: true, optional: false, required: false
  public get perUserBal() {
    return this.getStringAttribute('per_user_bal');
  }

  // per_user_bwl - computed: true, optional: false, required: false
  public get perUserBwl() {
    return this.getStringAttribute('per_user_bwl');
  }

  // pmtu_discovery - computed: true, optional: false, required: false
  public get pmtuDiscovery() {
    return this.getStringAttribute('pmtu_discovery');
  }

  // policy_auth_concurrent - computed: true, optional: false, required: false
  public get policyAuthConcurrent() {
    return this.getNumberAttribute('policy_auth_concurrent');
  }

  // post_login_banner - computed: true, optional: false, required: false
  public get postLoginBanner() {
    return this.getStringAttribute('post_login_banner');
  }

  // pre_login_banner - computed: true, optional: false, required: false
  public get preLoginBanner() {
    return this.getStringAttribute('pre_login_banner');
  }

  // private_data_encryption - computed: true, optional: false, required: false
  public get privateDataEncryption() {
    return this.getStringAttribute('private_data_encryption');
  }

  // proxy_auth_lifetime - computed: true, optional: false, required: false
  public get proxyAuthLifetime() {
    return this.getStringAttribute('proxy_auth_lifetime');
  }

  // proxy_auth_lifetime_timeout - computed: true, optional: false, required: false
  public get proxyAuthLifetimeTimeout() {
    return this.getNumberAttribute('proxy_auth_lifetime_timeout');
  }

  // proxy_auth_timeout - computed: true, optional: false, required: false
  public get proxyAuthTimeout() {
    return this.getNumberAttribute('proxy_auth_timeout');
  }

  // proxy_cert_use_mgmt_vdom - computed: true, optional: false, required: false
  public get proxyCertUseMgmtVdom() {
    return this.getStringAttribute('proxy_cert_use_mgmt_vdom');
  }

  // proxy_cipher_hardware_acceleration - computed: true, optional: false, required: false
  public get proxyCipherHardwareAcceleration() {
    return this.getStringAttribute('proxy_cipher_hardware_acceleration');
  }

  // proxy_hardware_acceleration - computed: true, optional: false, required: false
  public get proxyHardwareAcceleration() {
    return this.getStringAttribute('proxy_hardware_acceleration');
  }

  // proxy_keep_alive_mode - computed: true, optional: false, required: false
  public get proxyKeepAliveMode() {
    return this.getStringAttribute('proxy_keep_alive_mode');
  }

  // proxy_kxp_hardware_acceleration - computed: true, optional: false, required: false
  public get proxyKxpHardwareAcceleration() {
    return this.getStringAttribute('proxy_kxp_hardware_acceleration');
  }

  // proxy_re_authentication_mode - computed: true, optional: false, required: false
  public get proxyReAuthenticationMode() {
    return this.getStringAttribute('proxy_re_authentication_mode');
  }

  // proxy_re_authentication_time - computed: true, optional: false, required: false
  public get proxyReAuthenticationTime() {
    return this.getNumberAttribute('proxy_re_authentication_time');
  }

  // proxy_resource_mode - computed: true, optional: false, required: false
  public get proxyResourceMode() {
    return this.getStringAttribute('proxy_resource_mode');
  }

  // proxy_worker_count - computed: true, optional: false, required: false
  public get proxyWorkerCount() {
    return this.getNumberAttribute('proxy_worker_count');
  }

  // purdue_level - computed: true, optional: false, required: false
  public get purdueLevel() {
    return this.getStringAttribute('purdue_level');
  }

  // quic_ack_thresold - computed: true, optional: false, required: false
  public get quicAckThresold() {
    return this.getNumberAttribute('quic_ack_thresold');
  }

  // quic_congestion_control_algo - computed: true, optional: false, required: false
  public get quicCongestionControlAlgo() {
    return this.getStringAttribute('quic_congestion_control_algo');
  }

  // quic_max_datagram_size - computed: true, optional: false, required: false
  public get quicMaxDatagramSize() {
    return this.getNumberAttribute('quic_max_datagram_size');
  }

  // quic_pmtud - computed: true, optional: false, required: false
  public get quicPmtud() {
    return this.getStringAttribute('quic_pmtud');
  }

  // quic_tls_handshake_timeout - computed: true, optional: false, required: false
  public get quicTlsHandshakeTimeout() {
    return this.getNumberAttribute('quic_tls_handshake_timeout');
  }

  // quic_udp_payload_size_shaping_per_cid - computed: true, optional: false, required: false
  public get quicUdpPayloadSizeShapingPerCid() {
    return this.getStringAttribute('quic_udp_payload_size_shaping_per_cid');
  }

  // radius_port - computed: true, optional: false, required: false
  public get radiusPort() {
    return this.getNumberAttribute('radius_port');
  }

  // reboot_upon_config_restore - computed: true, optional: false, required: false
  public get rebootUponConfigRestore() {
    return this.getStringAttribute('reboot_upon_config_restore');
  }

  // refresh - computed: true, optional: false, required: false
  public get refresh() {
    return this.getNumberAttribute('refresh');
  }

  // remoteauthtimeout - computed: true, optional: false, required: false
  public get remoteauthtimeout() {
    return this.getNumberAttribute('remoteauthtimeout');
  }

  // reset_sessionless_tcp - computed: true, optional: false, required: false
  public get resetSessionlessTcp() {
    return this.getStringAttribute('reset_sessionless_tcp');
  }

  // rest_api_key_url_query - computed: true, optional: false, required: false
  public get restApiKeyUrlQuery() {
    return this.getStringAttribute('rest_api_key_url_query');
  }

  // restart_time - computed: true, optional: false, required: false
  public get restartTime() {
    return this.getStringAttribute('restart_time');
  }

  // revision_backup_on_logout - computed: true, optional: false, required: false
  public get revisionBackupOnLogout() {
    return this.getStringAttribute('revision_backup_on_logout');
  }

  // revision_image_auto_backup - computed: true, optional: false, required: false
  public get revisionImageAutoBackup() {
    return this.getStringAttribute('revision_image_auto_backup');
  }

  // router_affinity - computed: true, optional: false, required: false
  public get routerAffinity() {
    return this.getStringAttribute('router_affinity');
  }

  // scanunit_count - computed: true, optional: false, required: false
  public get scanunitCount() {
    return this.getNumberAttribute('scanunit_count');
  }

  // scim_http_port - computed: true, optional: false, required: false
  public get scimHttpPort() {
    return this.getNumberAttribute('scim_http_port');
  }

  // scim_https_port - computed: true, optional: false, required: false
  public get scimHttpsPort() {
    return this.getNumberAttribute('scim_https_port');
  }

  // scim_server_cert - computed: true, optional: false, required: false
  public get scimServerCert() {
    return this.getStringAttribute('scim_server_cert');
  }

  // security_rating_result_submission - computed: true, optional: false, required: false
  public get securityRatingResultSubmission() {
    return this.getStringAttribute('security_rating_result_submission');
  }

  // security_rating_run_on_schedule - computed: true, optional: false, required: false
  public get securityRatingRunOnSchedule() {
    return this.getStringAttribute('security_rating_run_on_schedule');
  }

  // send_pmtu_icmp - computed: true, optional: false, required: false
  public get sendPmtuIcmp() {
    return this.getStringAttribute('send_pmtu_icmp');
  }

  // sflowd_max_children_num - computed: true, optional: false, required: false
  public get sflowdMaxChildrenNum() {
    return this.getNumberAttribute('sflowd_max_children_num');
  }

  // snat_route_change - computed: true, optional: false, required: false
  public get snatRouteChange() {
    return this.getStringAttribute('snat_route_change');
  }

  // special_file_23_support - computed: true, optional: false, required: false
  public get specialFile23Support() {
    return this.getStringAttribute('special_file_23_support');
  }

  // speedtest_server - computed: true, optional: false, required: false
  public get speedtestServer() {
    return this.getStringAttribute('speedtest_server');
  }

  // speedtestd_ctrl_port - computed: true, optional: false, required: false
  public get speedtestdCtrlPort() {
    return this.getNumberAttribute('speedtestd_ctrl_port');
  }

  // speedtestd_server_port - computed: true, optional: false, required: false
  public get speedtestdServerPort() {
    return this.getNumberAttribute('speedtestd_server_port');
  }

  // split_port - computed: true, optional: false, required: false
  public get splitPort() {
    return this.getStringAttribute('split_port');
  }

  // ssd_trim_date - computed: true, optional: false, required: false
  public get ssdTrimDate() {
    return this.getNumberAttribute('ssd_trim_date');
  }

  // ssd_trim_freq - computed: true, optional: false, required: false
  public get ssdTrimFreq() {
    return this.getStringAttribute('ssd_trim_freq');
  }

  // ssd_trim_hour - computed: true, optional: false, required: false
  public get ssdTrimHour() {
    return this.getNumberAttribute('ssd_trim_hour');
  }

  // ssd_trim_min - computed: true, optional: false, required: false
  public get ssdTrimMin() {
    return this.getNumberAttribute('ssd_trim_min');
  }

  // ssd_trim_weekday - computed: true, optional: false, required: false
  public get ssdTrimWeekday() {
    return this.getStringAttribute('ssd_trim_weekday');
  }

  // ssh_cbc_cipher - computed: true, optional: false, required: false
  public get sshCbcCipher() {
    return this.getStringAttribute('ssh_cbc_cipher');
  }

  // ssh_enc_algo - computed: true, optional: false, required: false
  public get sshEncAlgo() {
    return this.getStringAttribute('ssh_enc_algo');
  }

  // ssh_hmac_md5 - computed: true, optional: false, required: false
  public get sshHmacMd5() {
    return this.getStringAttribute('ssh_hmac_md5');
  }

  // ssh_hostkey - computed: true, optional: false, required: false
  public get sshHostkey() {
    return this.getStringAttribute('ssh_hostkey');
  }

  // ssh_hostkey_algo - computed: true, optional: false, required: false
  public get sshHostkeyAlgo() {
    return this.getStringAttribute('ssh_hostkey_algo');
  }

  // ssh_hostkey_override - computed: true, optional: false, required: false
  public get sshHostkeyOverride() {
    return this.getStringAttribute('ssh_hostkey_override');
  }

  // ssh_hostkey_password - computed: true, optional: false, required: false
  public get sshHostkeyPassword() {
    return this.getStringAttribute('ssh_hostkey_password');
  }

  // ssh_kex_algo - computed: true, optional: false, required: false
  public get sshKexAlgo() {
    return this.getStringAttribute('ssh_kex_algo');
  }

  // ssh_kex_sha1 - computed: true, optional: false, required: false
  public get sshKexSha1() {
    return this.getStringAttribute('ssh_kex_sha1');
  }

  // ssh_mac_algo - computed: true, optional: false, required: false
  public get sshMacAlgo() {
    return this.getStringAttribute('ssh_mac_algo');
  }

  // ssh_mac_weak - computed: true, optional: false, required: false
  public get sshMacWeak() {
    return this.getStringAttribute('ssh_mac_weak');
  }

  // ssl_min_proto_version - computed: true, optional: false, required: false
  public get sslMinProtoVersion() {
    return this.getStringAttribute('ssl_min_proto_version');
  }

  // ssl_static_key_ciphers - computed: true, optional: false, required: false
  public get sslStaticKeyCiphers() {
    return this.getStringAttribute('ssl_static_key_ciphers');
  }

  // sslvpn_affinity - computed: true, optional: false, required: false
  public get sslvpnAffinity() {
    return this.getStringAttribute('sslvpn_affinity');
  }

  // sslvpn_cipher_hardware_acceleration - computed: true, optional: false, required: false
  public get sslvpnCipherHardwareAcceleration() {
    return this.getStringAttribute('sslvpn_cipher_hardware_acceleration');
  }

  // sslvpn_ems_sn_check - computed: true, optional: false, required: false
  public get sslvpnEmsSnCheck() {
    return this.getStringAttribute('sslvpn_ems_sn_check');
  }

  // sslvpn_kxp_hardware_acceleration - computed: true, optional: false, required: false
  public get sslvpnKxpHardwareAcceleration() {
    return this.getStringAttribute('sslvpn_kxp_hardware_acceleration');
  }

  // sslvpn_max_worker_count - computed: true, optional: false, required: false
  public get sslvpnMaxWorkerCount() {
    return this.getNumberAttribute('sslvpn_max_worker_count');
  }

  // sslvpn_plugin_version_check - computed: true, optional: false, required: false
  public get sslvpnPluginVersionCheck() {
    return this.getStringAttribute('sslvpn_plugin_version_check');
  }

  // sslvpn_web_mode - computed: true, optional: false, required: false
  public get sslvpnWebMode() {
    return this.getStringAttribute('sslvpn_web_mode');
  }

  // strict_dirty_session_check - computed: true, optional: false, required: false
  public get strictDirtySessionCheck() {
    return this.getStringAttribute('strict_dirty_session_check');
  }

  // strong_crypto - computed: true, optional: false, required: false
  public get strongCrypto() {
    return this.getStringAttribute('strong_crypto');
  }

  // switch_controller - computed: true, optional: false, required: false
  public get switchController() {
    return this.getStringAttribute('switch_controller');
  }

  // switch_controller_reserved_network - computed: true, optional: false, required: false
  public get switchControllerReservedNetwork() {
    return this.getStringAttribute('switch_controller_reserved_network');
  }

  // sys_perf_log_interval - computed: true, optional: false, required: false
  public get sysPerfLogInterval() {
    return this.getNumberAttribute('sys_perf_log_interval');
  }

  // syslog_affinity - computed: true, optional: false, required: false
  public get syslogAffinity() {
    return this.getStringAttribute('syslog_affinity');
  }

  // tcp_halfclose_timer - computed: true, optional: false, required: false
  public get tcpHalfcloseTimer() {
    return this.getNumberAttribute('tcp_halfclose_timer');
  }

  // tcp_halfopen_timer - computed: true, optional: false, required: false
  public get tcpHalfopenTimer() {
    return this.getNumberAttribute('tcp_halfopen_timer');
  }

  // tcp_option - computed: true, optional: false, required: false
  public get tcpOption() {
    return this.getStringAttribute('tcp_option');
  }

  // tcp_rst_timer - computed: true, optional: false, required: false
  public get tcpRstTimer() {
    return this.getNumberAttribute('tcp_rst_timer');
  }

  // tcp_timewait_timer - computed: true, optional: false, required: false
  public get tcpTimewaitTimer() {
    return this.getNumberAttribute('tcp_timewait_timer');
  }

  // tftp - computed: true, optional: false, required: false
  public get tftp() {
    return this.getStringAttribute('tftp');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }

  // tls_session_cache - computed: true, optional: false, required: false
  public get tlsSessionCache() {
    return this.getStringAttribute('tls_session_cache');
  }

  // tp_mc_skip_policy - computed: true, optional: false, required: false
  public get tpMcSkipPolicy() {
    return this.getStringAttribute('tp_mc_skip_policy');
  }

  // traffic_priority - computed: true, optional: false, required: false
  public get trafficPriority() {
    return this.getStringAttribute('traffic_priority');
  }

  // traffic_priority_level - computed: true, optional: false, required: false
  public get trafficPriorityLevel() {
    return this.getStringAttribute('traffic_priority_level');
  }

  // two_factor_email_expiry - computed: true, optional: false, required: false
  public get twoFactorEmailExpiry() {
    return this.getNumberAttribute('two_factor_email_expiry');
  }

  // two_factor_fac_expiry - computed: true, optional: false, required: false
  public get twoFactorFacExpiry() {
    return this.getNumberAttribute('two_factor_fac_expiry');
  }

  // two_factor_ftk_expiry - computed: true, optional: false, required: false
  public get twoFactorFtkExpiry() {
    return this.getNumberAttribute('two_factor_ftk_expiry');
  }

  // two_factor_ftm_expiry - computed: true, optional: false, required: false
  public get twoFactorFtmExpiry() {
    return this.getNumberAttribute('two_factor_ftm_expiry');
  }

  // two_factor_sms_expiry - computed: true, optional: false, required: false
  public get twoFactorSmsExpiry() {
    return this.getNumberAttribute('two_factor_sms_expiry');
  }

  // udp_idle_timer - computed: true, optional: false, required: false
  public get udpIdleTimer() {
    return this.getNumberAttribute('udp_idle_timer');
  }

  // upgrade_report - computed: true, optional: false, required: false
  public get upgradeReport() {
    return this.getStringAttribute('upgrade_report');
  }

  // url_filter_affinity - computed: true, optional: false, required: false
  public get urlFilterAffinity() {
    return this.getStringAttribute('url_filter_affinity');
  }

  // url_filter_count - computed: true, optional: false, required: false
  public get urlFilterCount() {
    return this.getNumberAttribute('url_filter_count');
  }

  // user_device_store_max_device_mem - computed: true, optional: false, required: false
  public get userDeviceStoreMaxDeviceMem() {
    return this.getNumberAttribute('user_device_store_max_device_mem');
  }

  // user_device_store_max_devices - computed: true, optional: false, required: false
  public get userDeviceStoreMaxDevices() {
    return this.getNumberAttribute('user_device_store_max_devices');
  }

  // user_device_store_max_unified_mem - computed: true, optional: false, required: false
  public get userDeviceStoreMaxUnifiedMem() {
    return this.getNumberAttribute('user_device_store_max_unified_mem');
  }

  // user_device_store_max_users - computed: true, optional: false, required: false
  public get userDeviceStoreMaxUsers() {
    return this.getNumberAttribute('user_device_store_max_users');
  }

  // user_history_password_threshold - computed: true, optional: false, required: false
  public get userHistoryPasswordThreshold() {
    return this.getNumberAttribute('user_history_password_threshold');
  }

  // user_server_cert - computed: true, optional: false, required: false
  public get userServerCert() {
    return this.getStringAttribute('user_server_cert');
  }

  // vdom_admin - computed: true, optional: false, required: false
  public get vdomAdmin() {
    return this.getStringAttribute('vdom_admin');
  }

  // vdom_mode - computed: true, optional: false, required: false
  public get vdomMode() {
    return this.getStringAttribute('vdom_mode');
  }

  // vdomparam - computed: false, optional: true, required: false
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

  // vip_arp_range - computed: true, optional: false, required: false
  public get vipArpRange() {
    return this.getStringAttribute('vip_arp_range');
  }

  // virtual_server_count - computed: true, optional: false, required: false
  public get virtualServerCount() {
    return this.getNumberAttribute('virtual_server_count');
  }

  // virtual_server_hardware_acceleration - computed: true, optional: false, required: false
  public get virtualServerHardwareAcceleration() {
    return this.getStringAttribute('virtual_server_hardware_acceleration');
  }

  // virtual_switch_vlan - computed: true, optional: false, required: false
  public get virtualSwitchVlan() {
    return this.getStringAttribute('virtual_switch_vlan');
  }

  // vpn_ems_sn_check - computed: true, optional: false, required: false
  public get vpnEmsSnCheck() {
    return this.getStringAttribute('vpn_ems_sn_check');
  }

  // wad_affinity - computed: true, optional: false, required: false
  public get wadAffinity() {
    return this.getStringAttribute('wad_affinity');
  }

  // wad_csvc_cs_count - computed: true, optional: false, required: false
  public get wadCsvcCsCount() {
    return this.getNumberAttribute('wad_csvc_cs_count');
  }

  // wad_csvc_db_count - computed: true, optional: false, required: false
  public get wadCsvcDbCount() {
    return this.getNumberAttribute('wad_csvc_db_count');
  }

  // wad_memory_change_granularity - computed: true, optional: false, required: false
  public get wadMemoryChangeGranularity() {
    return this.getNumberAttribute('wad_memory_change_granularity');
  }

  // wad_p2s_max_body_size - computed: true, optional: false, required: false
  public get wadP2SMaxBodySize() {
    return this.getNumberAttribute('wad_p2s_max_body_size');
  }

  // wad_restart_end_time - computed: true, optional: false, required: false
  public get wadRestartEndTime() {
    return this.getStringAttribute('wad_restart_end_time');
  }

  // wad_restart_mode - computed: true, optional: false, required: false
  public get wadRestartMode() {
    return this.getStringAttribute('wad_restart_mode');
  }

  // wad_restart_start_time - computed: true, optional: false, required: false
  public get wadRestartStartTime() {
    return this.getStringAttribute('wad_restart_start_time');
  }

  // wad_source_affinity - computed: true, optional: false, required: false
  public get wadSourceAffinity() {
    return this.getStringAttribute('wad_source_affinity');
  }

  // wad_worker_count - computed: true, optional: false, required: false
  public get wadWorkerCount() {
    return this.getNumberAttribute('wad_worker_count');
  }

  // wifi_ca_certificate - computed: true, optional: false, required: false
  public get wifiCaCertificate() {
    return this.getStringAttribute('wifi_ca_certificate');
  }

  // wifi_certificate - computed: true, optional: false, required: false
  public get wifiCertificate() {
    return this.getStringAttribute('wifi_certificate');
  }

  // wimax_4g_usb - computed: true, optional: false, required: false
  public get wimax4GUsb() {
    return this.getStringAttribute('wimax_4g_usb');
  }

  // wireless_controller - computed: true, optional: false, required: false
  public get wirelessController() {
    return this.getStringAttribute('wireless_controller');
  }

  // wireless_controller_port - computed: true, optional: false, required: false
  public get wirelessControllerPort() {
    return this.getNumberAttribute('wireless_controller_port');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
