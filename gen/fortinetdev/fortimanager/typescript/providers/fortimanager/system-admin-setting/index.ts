// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemAdminSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#access_banner SystemAdminSetting#access_banner}
  */
  readonly accessBanner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#admin_https_redirect SystemAdminSetting#admin_https_redirect}
  */
  readonly adminHttpsRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#admin_login_max SystemAdminSetting#admin_login_max}
  */
  readonly adminLoginMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#admin_server_cert SystemAdminSetting#admin_server_cert}
  */
  readonly adminServerCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#allow_register SystemAdminSetting#allow_register}
  */
  readonly allowRegister?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#auth_addr SystemAdminSetting#auth_addr}
  */
  readonly authAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#auth_port SystemAdminSetting#auth_port}
  */
  readonly authPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#auto_update SystemAdminSetting#auto_update}
  */
  readonly autoUpdate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#banner_message SystemAdminSetting#banner_message}
  */
  readonly bannerMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#central_ftgd_local_cat_id SystemAdminSetting#central_ftgd_local_cat_id}
  */
  readonly centralFtgdLocalCatId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#chassis_mgmt SystemAdminSetting#chassis_mgmt}
  */
  readonly chassisMgmt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#chassis_update_interval SystemAdminSetting#chassis_update_interval}
  */
  readonly chassisUpdateInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#device_sync_status SystemAdminSetting#device_sync_status}
  */
  readonly deviceSyncStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#fgt_gui_proxy SystemAdminSetting#fgt_gui_proxy}
  */
  readonly fgtGuiProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#fgt_gui_proxy_port SystemAdminSetting#fgt_gui_proxy_port}
  */
  readonly fgtGuiProxyPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#firmware_upgrade_check SystemAdminSetting#firmware_upgrade_check}
  */
  readonly firmwareUpgradeCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#fsw_ignore_platform_check SystemAdminSetting#fsw_ignore_platform_check}
  */
  readonly fswIgnorePlatformCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#gui_theme SystemAdminSetting#gui_theme}
  */
  readonly guiTheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#http_port SystemAdminSetting#http_port}
  */
  readonly httpPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#https_port SystemAdminSetting#https_port}
  */
  readonly httpsPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#id SystemAdminSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#idle_timeout SystemAdminSetting#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#idle_timeout_api SystemAdminSetting#idle_timeout_api}
  */
  readonly idleTimeoutApi?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#idle_timeout_gui SystemAdminSetting#idle_timeout_gui}
  */
  readonly idleTimeoutGui?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#idle_timeout_sso SystemAdminSetting#idle_timeout_sso}
  */
  readonly idleTimeoutSso?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#install_ifpolicy_only SystemAdminSetting#install_ifpolicy_only}
  */
  readonly installIfpolicyOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#mgmt_addr SystemAdminSetting#mgmt_addr}
  */
  readonly mgmtAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#mgmt_fqdn SystemAdminSetting#mgmt_fqdn}
  */
  readonly mgmtFqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#objects_force_deletion SystemAdminSetting#objects_force_deletion}
  */
  readonly objectsForceDeletion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#offline_mode SystemAdminSetting#offline_mode}
  */
  readonly offlineMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#preferred_fgfm_intf SystemAdminSetting#preferred_fgfm_intf}
  */
  readonly preferredFgfmIntf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#register_passwd SystemAdminSetting#register_passwd}
  */
  readonly registerPasswd?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#rtm_max_monitor_by_days SystemAdminSetting#rtm_max_monitor_by_days}
  */
  readonly rtmMaxMonitorByDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#rtm_temp_file_limit SystemAdminSetting#rtm_temp_file_limit}
  */
  readonly rtmTempFileLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#sdwan_monitor_history SystemAdminSetting#sdwan_monitor_history}
  */
  readonly sdwanMonitorHistory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#sdwan_skip_unmapped_input_device SystemAdminSetting#sdwan_skip_unmapped_input_device}
  */
  readonly sdwanSkipUnmappedInputDevice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#shell_access SystemAdminSetting#shell_access}
  */
  readonly shellAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#shell_password SystemAdminSetting#shell_password}
  */
  readonly shellPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#show_add_multiple SystemAdminSetting#show_add_multiple}
  */
  readonly showAddMultiple?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#show_adom_devman SystemAdminSetting#show_adom_devman}
  */
  readonly showAdomDevman?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#show_automatic_script SystemAdminSetting#show_automatic_script}
  */
  readonly showAutomaticScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#show_checkbox_in_table SystemAdminSetting#show_checkbox_in_table}
  */
  readonly showCheckboxInTable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#show_device_import_export SystemAdminSetting#show_device_import_export}
  */
  readonly showDeviceImportExport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#show_fct_manager SystemAdminSetting#show_fct_manager}
  */
  readonly showFctManager?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#show_grouping_script SystemAdminSetting#show_grouping_script}
  */
  readonly showGroupingScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#show_hostname SystemAdminSetting#show_hostname}
  */
  readonly showHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#show_schedule_script SystemAdminSetting#show_schedule_script}
  */
  readonly showScheduleScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#show_tcl_script SystemAdminSetting#show_tcl_script}
  */
  readonly showTclScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#traffic_shaping_history SystemAdminSetting#traffic_shaping_history}
  */
  readonly trafficShapingHistory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#unreg_dev_opt SystemAdminSetting#unreg_dev_opt}
  */
  readonly unregDevOpt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#webadmin_language SystemAdminSetting#webadmin_language}
  */
  readonly webadminLanguage?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting fortimanager_system_admin_setting}
*/
export class SystemAdminSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_system_admin_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemAdminSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemAdminSetting to import
  * @param importFromId The id of the existing SystemAdminSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemAdminSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_system_admin_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_setting fortimanager_system_admin_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemAdminSettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemAdminSettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_system_admin_setting',
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
    this._accessBanner = config.accessBanner;
    this._adminHttpsRedirect = config.adminHttpsRedirect;
    this._adminLoginMax = config.adminLoginMax;
    this._adminServerCert = config.adminServerCert;
    this._allowRegister = config.allowRegister;
    this._authAddr = config.authAddr;
    this._authPort = config.authPort;
    this._autoUpdate = config.autoUpdate;
    this._bannerMessage = config.bannerMessage;
    this._centralFtgdLocalCatId = config.centralFtgdLocalCatId;
    this._chassisMgmt = config.chassisMgmt;
    this._chassisUpdateInterval = config.chassisUpdateInterval;
    this._deviceSyncStatus = config.deviceSyncStatus;
    this._fgtGuiProxy = config.fgtGuiProxy;
    this._fgtGuiProxyPort = config.fgtGuiProxyPort;
    this._firmwareUpgradeCheck = config.firmwareUpgradeCheck;
    this._fswIgnorePlatformCheck = config.fswIgnorePlatformCheck;
    this._guiTheme = config.guiTheme;
    this._httpPort = config.httpPort;
    this._httpsPort = config.httpsPort;
    this._id = config.id;
    this._idleTimeout = config.idleTimeout;
    this._idleTimeoutApi = config.idleTimeoutApi;
    this._idleTimeoutGui = config.idleTimeoutGui;
    this._idleTimeoutSso = config.idleTimeoutSso;
    this._installIfpolicyOnly = config.installIfpolicyOnly;
    this._mgmtAddr = config.mgmtAddr;
    this._mgmtFqdn = config.mgmtFqdn;
    this._objectsForceDeletion = config.objectsForceDeletion;
    this._offlineMode = config.offlineMode;
    this._preferredFgfmIntf = config.preferredFgfmIntf;
    this._registerPasswd = config.registerPasswd;
    this._rtmMaxMonitorByDays = config.rtmMaxMonitorByDays;
    this._rtmTempFileLimit = config.rtmTempFileLimit;
    this._sdwanMonitorHistory = config.sdwanMonitorHistory;
    this._sdwanSkipUnmappedInputDevice = config.sdwanSkipUnmappedInputDevice;
    this._shellAccess = config.shellAccess;
    this._shellPassword = config.shellPassword;
    this._showAddMultiple = config.showAddMultiple;
    this._showAdomDevman = config.showAdomDevman;
    this._showAutomaticScript = config.showAutomaticScript;
    this._showCheckboxInTable = config.showCheckboxInTable;
    this._showDeviceImportExport = config.showDeviceImportExport;
    this._showFctManager = config.showFctManager;
    this._showGroupingScript = config.showGroupingScript;
    this._showHostname = config.showHostname;
    this._showScheduleScript = config.showScheduleScript;
    this._showTclScript = config.showTclScript;
    this._trafficShapingHistory = config.trafficShapingHistory;
    this._unregDevOpt = config.unregDevOpt;
    this._webadminLanguage = config.webadminLanguage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_banner - computed: true, optional: true, required: false
  private _accessBanner?: string; 
  public get accessBanner() {
    return this.getStringAttribute('access_banner');
  }
  public set accessBanner(value: string) {
    this._accessBanner = value;
  }
  public resetAccessBanner() {
    this._accessBanner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessBannerInput() {
    return this._accessBanner;
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

  // allow_register - computed: true, optional: true, required: false
  private _allowRegister?: string; 
  public get allowRegister() {
    return this.getStringAttribute('allow_register');
  }
  public set allowRegister(value: string) {
    this._allowRegister = value;
  }
  public resetAllowRegister() {
    this._allowRegister = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRegisterInput() {
    return this._allowRegister;
  }

  // auth_addr - computed: false, optional: true, required: false
  private _authAddr?: string; 
  public get authAddr() {
    return this.getStringAttribute('auth_addr');
  }
  public set authAddr(value: string) {
    this._authAddr = value;
  }
  public resetAuthAddr() {
    this._authAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authAddrInput() {
    return this._authAddr;
  }

  // auth_port - computed: true, optional: true, required: false
  private _authPort?: number; 
  public get authPort() {
    return this.getNumberAttribute('auth_port');
  }
  public set authPort(value: number) {
    this._authPort = value;
  }
  public resetAuthPort() {
    this._authPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPortInput() {
    return this._authPort;
  }

  // auto_update - computed: true, optional: true, required: false
  private _autoUpdate?: string; 
  public get autoUpdate() {
    return this.getStringAttribute('auto_update');
  }
  public set autoUpdate(value: string) {
    this._autoUpdate = value;
  }
  public resetAutoUpdate() {
    this._autoUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpdateInput() {
    return this._autoUpdate;
  }

  // banner_message - computed: false, optional: true, required: false
  private _bannerMessage?: string; 
  public get bannerMessage() {
    return this.getStringAttribute('banner_message');
  }
  public set bannerMessage(value: string) {
    this._bannerMessage = value;
  }
  public resetBannerMessage() {
    this._bannerMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bannerMessageInput() {
    return this._bannerMessage;
  }

  // central_ftgd_local_cat_id - computed: true, optional: true, required: false
  private _centralFtgdLocalCatId?: string; 
  public get centralFtgdLocalCatId() {
    return this.getStringAttribute('central_ftgd_local_cat_id');
  }
  public set centralFtgdLocalCatId(value: string) {
    this._centralFtgdLocalCatId = value;
  }
  public resetCentralFtgdLocalCatId() {
    this._centralFtgdLocalCatId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get centralFtgdLocalCatIdInput() {
    return this._centralFtgdLocalCatId;
  }

  // chassis_mgmt - computed: true, optional: true, required: false
  private _chassisMgmt?: string; 
  public get chassisMgmt() {
    return this.getStringAttribute('chassis_mgmt');
  }
  public set chassisMgmt(value: string) {
    this._chassisMgmt = value;
  }
  public resetChassisMgmt() {
    this._chassisMgmt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chassisMgmtInput() {
    return this._chassisMgmt;
  }

  // chassis_update_interval - computed: true, optional: true, required: false
  private _chassisUpdateInterval?: number; 
  public get chassisUpdateInterval() {
    return this.getNumberAttribute('chassis_update_interval');
  }
  public set chassisUpdateInterval(value: number) {
    this._chassisUpdateInterval = value;
  }
  public resetChassisUpdateInterval() {
    this._chassisUpdateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chassisUpdateIntervalInput() {
    return this._chassisUpdateInterval;
  }

  // device_sync_status - computed: true, optional: true, required: false
  private _deviceSyncStatus?: string; 
  public get deviceSyncStatus() {
    return this.getStringAttribute('device_sync_status');
  }
  public set deviceSyncStatus(value: string) {
    this._deviceSyncStatus = value;
  }
  public resetDeviceSyncStatus() {
    this._deviceSyncStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceSyncStatusInput() {
    return this._deviceSyncStatus;
  }

  // fgt_gui_proxy - computed: true, optional: true, required: false
  private _fgtGuiProxy?: string; 
  public get fgtGuiProxy() {
    return this.getStringAttribute('fgt_gui_proxy');
  }
  public set fgtGuiProxy(value: string) {
    this._fgtGuiProxy = value;
  }
  public resetFgtGuiProxy() {
    this._fgtGuiProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgtGuiProxyInput() {
    return this._fgtGuiProxy;
  }

  // fgt_gui_proxy_port - computed: true, optional: true, required: false
  private _fgtGuiProxyPort?: number; 
  public get fgtGuiProxyPort() {
    return this.getNumberAttribute('fgt_gui_proxy_port');
  }
  public set fgtGuiProxyPort(value: number) {
    this._fgtGuiProxyPort = value;
  }
  public resetFgtGuiProxyPort() {
    this._fgtGuiProxyPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgtGuiProxyPortInput() {
    return this._fgtGuiProxyPort;
  }

  // firmware_upgrade_check - computed: true, optional: true, required: false
  private _firmwareUpgradeCheck?: string; 
  public get firmwareUpgradeCheck() {
    return this.getStringAttribute('firmware_upgrade_check');
  }
  public set firmwareUpgradeCheck(value: string) {
    this._firmwareUpgradeCheck = value;
  }
  public resetFirmwareUpgradeCheck() {
    this._firmwareUpgradeCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firmwareUpgradeCheckInput() {
    return this._firmwareUpgradeCheck;
  }

  // fsw_ignore_platform_check - computed: true, optional: true, required: false
  private _fswIgnorePlatformCheck?: string; 
  public get fswIgnorePlatformCheck() {
    return this.getStringAttribute('fsw_ignore_platform_check');
  }
  public set fswIgnorePlatformCheck(value: string) {
    this._fswIgnorePlatformCheck = value;
  }
  public resetFswIgnorePlatformCheck() {
    this._fswIgnorePlatformCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fswIgnorePlatformCheckInput() {
    return this._fswIgnorePlatformCheck;
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

  // http_port - computed: true, optional: true, required: false
  private _httpPort?: number; 
  public get httpPort() {
    return this.getNumberAttribute('http_port');
  }
  public set httpPort(value: number) {
    this._httpPort = value;
  }
  public resetHttpPort() {
    this._httpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPortInput() {
    return this._httpPort;
  }

  // https_port - computed: true, optional: true, required: false
  private _httpsPort?: number; 
  public get httpsPort() {
    return this.getNumberAttribute('https_port');
  }
  public set httpsPort(value: number) {
    this._httpsPort = value;
  }
  public resetHttpsPort() {
    this._httpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPortInput() {
    return this._httpsPort;
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

  // idle_timeout - computed: true, optional: true, required: false
  private _idleTimeout?: number; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // idle_timeout_api - computed: true, optional: true, required: false
  private _idleTimeoutApi?: number; 
  public get idleTimeoutApi() {
    return this.getNumberAttribute('idle_timeout_api');
  }
  public set idleTimeoutApi(value: number) {
    this._idleTimeoutApi = value;
  }
  public resetIdleTimeoutApi() {
    this._idleTimeoutApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutApiInput() {
    return this._idleTimeoutApi;
  }

  // idle_timeout_gui - computed: true, optional: true, required: false
  private _idleTimeoutGui?: number; 
  public get idleTimeoutGui() {
    return this.getNumberAttribute('idle_timeout_gui');
  }
  public set idleTimeoutGui(value: number) {
    this._idleTimeoutGui = value;
  }
  public resetIdleTimeoutGui() {
    this._idleTimeoutGui = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutGuiInput() {
    return this._idleTimeoutGui;
  }

  // idle_timeout_sso - computed: true, optional: true, required: false
  private _idleTimeoutSso?: number; 
  public get idleTimeoutSso() {
    return this.getNumberAttribute('idle_timeout_sso');
  }
  public set idleTimeoutSso(value: number) {
    this._idleTimeoutSso = value;
  }
  public resetIdleTimeoutSso() {
    this._idleTimeoutSso = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutSsoInput() {
    return this._idleTimeoutSso;
  }

  // install_ifpolicy_only - computed: true, optional: true, required: false
  private _installIfpolicyOnly?: string; 
  public get installIfpolicyOnly() {
    return this.getStringAttribute('install_ifpolicy_only');
  }
  public set installIfpolicyOnly(value: string) {
    this._installIfpolicyOnly = value;
  }
  public resetInstallIfpolicyOnly() {
    this._installIfpolicyOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installIfpolicyOnlyInput() {
    return this._installIfpolicyOnly;
  }

  // mgmt_addr - computed: false, optional: true, required: false
  private _mgmtAddr?: string; 
  public get mgmtAddr() {
    return this.getStringAttribute('mgmt_addr');
  }
  public set mgmtAddr(value: string) {
    this._mgmtAddr = value;
  }
  public resetMgmtAddr() {
    this._mgmtAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtAddrInput() {
    return this._mgmtAddr;
  }

  // mgmt_fqdn - computed: false, optional: true, required: false
  private _mgmtFqdn?: string; 
  public get mgmtFqdn() {
    return this.getStringAttribute('mgmt_fqdn');
  }
  public set mgmtFqdn(value: string) {
    this._mgmtFqdn = value;
  }
  public resetMgmtFqdn() {
    this._mgmtFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtFqdnInput() {
    return this._mgmtFqdn;
  }

  // objects_force_deletion - computed: true, optional: true, required: false
  private _objectsForceDeletion?: string; 
  public get objectsForceDeletion() {
    return this.getStringAttribute('objects_force_deletion');
  }
  public set objectsForceDeletion(value: string) {
    this._objectsForceDeletion = value;
  }
  public resetObjectsForceDeletion() {
    this._objectsForceDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectsForceDeletionInput() {
    return this._objectsForceDeletion;
  }

  // offline_mode - computed: true, optional: true, required: false
  private _offlineMode?: string; 
  public get offlineMode() {
    return this.getStringAttribute('offline_mode');
  }
  public set offlineMode(value: string) {
    this._offlineMode = value;
  }
  public resetOfflineMode() {
    this._offlineMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offlineModeInput() {
    return this._offlineMode;
  }

  // preferred_fgfm_intf - computed: false, optional: true, required: false
  private _preferredFgfmIntf?: string; 
  public get preferredFgfmIntf() {
    return this.getStringAttribute('preferred_fgfm_intf');
  }
  public set preferredFgfmIntf(value: string) {
    this._preferredFgfmIntf = value;
  }
  public resetPreferredFgfmIntf() {
    this._preferredFgfmIntf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredFgfmIntfInput() {
    return this._preferredFgfmIntf;
  }

  // register_passwd - computed: true, optional: true, required: false
  private _registerPasswd?: string[]; 
  public get registerPasswd() {
    return cdktf.Fn.tolist(this.getListAttribute('register_passwd'));
  }
  public set registerPasswd(value: string[]) {
    this._registerPasswd = value;
  }
  public resetRegisterPasswd() {
    this._registerPasswd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registerPasswdInput() {
    return this._registerPasswd;
  }

  // rtm_max_monitor_by_days - computed: true, optional: true, required: false
  private _rtmMaxMonitorByDays?: number; 
  public get rtmMaxMonitorByDays() {
    return this.getNumberAttribute('rtm_max_monitor_by_days');
  }
  public set rtmMaxMonitorByDays(value: number) {
    this._rtmMaxMonitorByDays = value;
  }
  public resetRtmMaxMonitorByDays() {
    this._rtmMaxMonitorByDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtmMaxMonitorByDaysInput() {
    return this._rtmMaxMonitorByDays;
  }

  // rtm_temp_file_limit - computed: true, optional: true, required: false
  private _rtmTempFileLimit?: number; 
  public get rtmTempFileLimit() {
    return this.getNumberAttribute('rtm_temp_file_limit');
  }
  public set rtmTempFileLimit(value: number) {
    this._rtmTempFileLimit = value;
  }
  public resetRtmTempFileLimit() {
    this._rtmTempFileLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtmTempFileLimitInput() {
    return this._rtmTempFileLimit;
  }

  // sdwan_monitor_history - computed: true, optional: true, required: false
  private _sdwanMonitorHistory?: string; 
  public get sdwanMonitorHistory() {
    return this.getStringAttribute('sdwan_monitor_history');
  }
  public set sdwanMonitorHistory(value: string) {
    this._sdwanMonitorHistory = value;
  }
  public resetSdwanMonitorHistory() {
    this._sdwanMonitorHistory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanMonitorHistoryInput() {
    return this._sdwanMonitorHistory;
  }

  // sdwan_skip_unmapped_input_device - computed: true, optional: true, required: false
  private _sdwanSkipUnmappedInputDevice?: string; 
  public get sdwanSkipUnmappedInputDevice() {
    return this.getStringAttribute('sdwan_skip_unmapped_input_device');
  }
  public set sdwanSkipUnmappedInputDevice(value: string) {
    this._sdwanSkipUnmappedInputDevice = value;
  }
  public resetSdwanSkipUnmappedInputDevice() {
    this._sdwanSkipUnmappedInputDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanSkipUnmappedInputDeviceInput() {
    return this._sdwanSkipUnmappedInputDevice;
  }

  // shell_access - computed: true, optional: true, required: false
  private _shellAccess?: string; 
  public get shellAccess() {
    return this.getStringAttribute('shell_access');
  }
  public set shellAccess(value: string) {
    this._shellAccess = value;
  }
  public resetShellAccess() {
    this._shellAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shellAccessInput() {
    return this._shellAccess;
  }

  // shell_password - computed: true, optional: true, required: false
  private _shellPassword?: string[]; 
  public get shellPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('shell_password'));
  }
  public set shellPassword(value: string[]) {
    this._shellPassword = value;
  }
  public resetShellPassword() {
    this._shellPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shellPasswordInput() {
    return this._shellPassword;
  }

  // show_add_multiple - computed: true, optional: true, required: false
  private _showAddMultiple?: string; 
  public get showAddMultiple() {
    return this.getStringAttribute('show_add_multiple');
  }
  public set showAddMultiple(value: string) {
    this._showAddMultiple = value;
  }
  public resetShowAddMultiple() {
    this._showAddMultiple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showAddMultipleInput() {
    return this._showAddMultiple;
  }

  // show_adom_devman - computed: true, optional: true, required: false
  private _showAdomDevman?: string; 
  public get showAdomDevman() {
    return this.getStringAttribute('show_adom_devman');
  }
  public set showAdomDevman(value: string) {
    this._showAdomDevman = value;
  }
  public resetShowAdomDevman() {
    this._showAdomDevman = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showAdomDevmanInput() {
    return this._showAdomDevman;
  }

  // show_automatic_script - computed: true, optional: true, required: false
  private _showAutomaticScript?: string; 
  public get showAutomaticScript() {
    return this.getStringAttribute('show_automatic_script');
  }
  public set showAutomaticScript(value: string) {
    this._showAutomaticScript = value;
  }
  public resetShowAutomaticScript() {
    this._showAutomaticScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showAutomaticScriptInput() {
    return this._showAutomaticScript;
  }

  // show_checkbox_in_table - computed: true, optional: true, required: false
  private _showCheckboxInTable?: string; 
  public get showCheckboxInTable() {
    return this.getStringAttribute('show_checkbox_in_table');
  }
  public set showCheckboxInTable(value: string) {
    this._showCheckboxInTable = value;
  }
  public resetShowCheckboxInTable() {
    this._showCheckboxInTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showCheckboxInTableInput() {
    return this._showCheckboxInTable;
  }

  // show_device_import_export - computed: true, optional: true, required: false
  private _showDeviceImportExport?: string; 
  public get showDeviceImportExport() {
    return this.getStringAttribute('show_device_import_export');
  }
  public set showDeviceImportExport(value: string) {
    this._showDeviceImportExport = value;
  }
  public resetShowDeviceImportExport() {
    this._showDeviceImportExport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDeviceImportExportInput() {
    return this._showDeviceImportExport;
  }

  // show_fct_manager - computed: true, optional: true, required: false
  private _showFctManager?: string; 
  public get showFctManager() {
    return this.getStringAttribute('show_fct_manager');
  }
  public set showFctManager(value: string) {
    this._showFctManager = value;
  }
  public resetShowFctManager() {
    this._showFctManager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showFctManagerInput() {
    return this._showFctManager;
  }

  // show_grouping_script - computed: true, optional: true, required: false
  private _showGroupingScript?: string; 
  public get showGroupingScript() {
    return this.getStringAttribute('show_grouping_script');
  }
  public set showGroupingScript(value: string) {
    this._showGroupingScript = value;
  }
  public resetShowGroupingScript() {
    this._showGroupingScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showGroupingScriptInput() {
    return this._showGroupingScript;
  }

  // show_hostname - computed: true, optional: true, required: false
  private _showHostname?: string; 
  public get showHostname() {
    return this.getStringAttribute('show_hostname');
  }
  public set showHostname(value: string) {
    this._showHostname = value;
  }
  public resetShowHostname() {
    this._showHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showHostnameInput() {
    return this._showHostname;
  }

  // show_schedule_script - computed: true, optional: true, required: false
  private _showScheduleScript?: string; 
  public get showScheduleScript() {
    return this.getStringAttribute('show_schedule_script');
  }
  public set showScheduleScript(value: string) {
    this._showScheduleScript = value;
  }
  public resetShowScheduleScript() {
    this._showScheduleScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showScheduleScriptInput() {
    return this._showScheduleScript;
  }

  // show_tcl_script - computed: true, optional: true, required: false
  private _showTclScript?: string; 
  public get showTclScript() {
    return this.getStringAttribute('show_tcl_script');
  }
  public set showTclScript(value: string) {
    this._showTclScript = value;
  }
  public resetShowTclScript() {
    this._showTclScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showTclScriptInput() {
    return this._showTclScript;
  }

  // traffic_shaping_history - computed: true, optional: true, required: false
  private _trafficShapingHistory?: string; 
  public get trafficShapingHistory() {
    return this.getStringAttribute('traffic_shaping_history');
  }
  public set trafficShapingHistory(value: string) {
    this._trafficShapingHistory = value;
  }
  public resetTrafficShapingHistory() {
    this._trafficShapingHistory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficShapingHistoryInput() {
    return this._trafficShapingHistory;
  }

  // unreg_dev_opt - computed: true, optional: true, required: false
  private _unregDevOpt?: string; 
  public get unregDevOpt() {
    return this.getStringAttribute('unreg_dev_opt');
  }
  public set unregDevOpt(value: string) {
    this._unregDevOpt = value;
  }
  public resetUnregDevOpt() {
    this._unregDevOpt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unregDevOptInput() {
    return this._unregDevOpt;
  }

  // webadmin_language - computed: true, optional: true, required: false
  private _webadminLanguage?: string; 
  public get webadminLanguage() {
    return this.getStringAttribute('webadmin_language');
  }
  public set webadminLanguage(value: string) {
    this._webadminLanguage = value;
  }
  public resetWebadminLanguage() {
    this._webadminLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webadminLanguageInput() {
    return this._webadminLanguage;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_banner: cdktf.stringToTerraform(this._accessBanner),
      admin_https_redirect: cdktf.stringToTerraform(this._adminHttpsRedirect),
      admin_login_max: cdktf.numberToTerraform(this._adminLoginMax),
      admin_server_cert: cdktf.stringToTerraform(this._adminServerCert),
      allow_register: cdktf.stringToTerraform(this._allowRegister),
      auth_addr: cdktf.stringToTerraform(this._authAddr),
      auth_port: cdktf.numberToTerraform(this._authPort),
      auto_update: cdktf.stringToTerraform(this._autoUpdate),
      banner_message: cdktf.stringToTerraform(this._bannerMessage),
      central_ftgd_local_cat_id: cdktf.stringToTerraform(this._centralFtgdLocalCatId),
      chassis_mgmt: cdktf.stringToTerraform(this._chassisMgmt),
      chassis_update_interval: cdktf.numberToTerraform(this._chassisUpdateInterval),
      device_sync_status: cdktf.stringToTerraform(this._deviceSyncStatus),
      fgt_gui_proxy: cdktf.stringToTerraform(this._fgtGuiProxy),
      fgt_gui_proxy_port: cdktf.numberToTerraform(this._fgtGuiProxyPort),
      firmware_upgrade_check: cdktf.stringToTerraform(this._firmwareUpgradeCheck),
      fsw_ignore_platform_check: cdktf.stringToTerraform(this._fswIgnorePlatformCheck),
      gui_theme: cdktf.stringToTerraform(this._guiTheme),
      http_port: cdktf.numberToTerraform(this._httpPort),
      https_port: cdktf.numberToTerraform(this._httpsPort),
      id: cdktf.stringToTerraform(this._id),
      idle_timeout: cdktf.numberToTerraform(this._idleTimeout),
      idle_timeout_api: cdktf.numberToTerraform(this._idleTimeoutApi),
      idle_timeout_gui: cdktf.numberToTerraform(this._idleTimeoutGui),
      idle_timeout_sso: cdktf.numberToTerraform(this._idleTimeoutSso),
      install_ifpolicy_only: cdktf.stringToTerraform(this._installIfpolicyOnly),
      mgmt_addr: cdktf.stringToTerraform(this._mgmtAddr),
      mgmt_fqdn: cdktf.stringToTerraform(this._mgmtFqdn),
      objects_force_deletion: cdktf.stringToTerraform(this._objectsForceDeletion),
      offline_mode: cdktf.stringToTerraform(this._offlineMode),
      preferred_fgfm_intf: cdktf.stringToTerraform(this._preferredFgfmIntf),
      register_passwd: cdktf.listMapper(cdktf.stringToTerraform, false)(this._registerPasswd),
      rtm_max_monitor_by_days: cdktf.numberToTerraform(this._rtmMaxMonitorByDays),
      rtm_temp_file_limit: cdktf.numberToTerraform(this._rtmTempFileLimit),
      sdwan_monitor_history: cdktf.stringToTerraform(this._sdwanMonitorHistory),
      sdwan_skip_unmapped_input_device: cdktf.stringToTerraform(this._sdwanSkipUnmappedInputDevice),
      shell_access: cdktf.stringToTerraform(this._shellAccess),
      shell_password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._shellPassword),
      show_add_multiple: cdktf.stringToTerraform(this._showAddMultiple),
      show_adom_devman: cdktf.stringToTerraform(this._showAdomDevman),
      show_automatic_script: cdktf.stringToTerraform(this._showAutomaticScript),
      show_checkbox_in_table: cdktf.stringToTerraform(this._showCheckboxInTable),
      show_device_import_export: cdktf.stringToTerraform(this._showDeviceImportExport),
      show_fct_manager: cdktf.stringToTerraform(this._showFctManager),
      show_grouping_script: cdktf.stringToTerraform(this._showGroupingScript),
      show_hostname: cdktf.stringToTerraform(this._showHostname),
      show_schedule_script: cdktf.stringToTerraform(this._showScheduleScript),
      show_tcl_script: cdktf.stringToTerraform(this._showTclScript),
      traffic_shaping_history: cdktf.stringToTerraform(this._trafficShapingHistory),
      unreg_dev_opt: cdktf.stringToTerraform(this._unregDevOpt),
      webadmin_language: cdktf.stringToTerraform(this._webadminLanguage),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_banner: {
        value: cdktf.stringToHclTerraform(this._accessBanner),
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
      admin_login_max: {
        value: cdktf.numberToHclTerraform(this._adminLoginMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      admin_server_cert: {
        value: cdktf.stringToHclTerraform(this._adminServerCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_register: {
        value: cdktf.stringToHclTerraform(this._allowRegister),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_addr: {
        value: cdktf.stringToHclTerraform(this._authAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_port: {
        value: cdktf.numberToHclTerraform(this._authPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_update: {
        value: cdktf.stringToHclTerraform(this._autoUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      banner_message: {
        value: cdktf.stringToHclTerraform(this._bannerMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      central_ftgd_local_cat_id: {
        value: cdktf.stringToHclTerraform(this._centralFtgdLocalCatId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chassis_mgmt: {
        value: cdktf.stringToHclTerraform(this._chassisMgmt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chassis_update_interval: {
        value: cdktf.numberToHclTerraform(this._chassisUpdateInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device_sync_status: {
        value: cdktf.stringToHclTerraform(this._deviceSyncStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fgt_gui_proxy: {
        value: cdktf.stringToHclTerraform(this._fgtGuiProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fgt_gui_proxy_port: {
        value: cdktf.numberToHclTerraform(this._fgtGuiProxyPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      firmware_upgrade_check: {
        value: cdktf.stringToHclTerraform(this._firmwareUpgradeCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fsw_ignore_platform_check: {
        value: cdktf.stringToHclTerraform(this._fswIgnorePlatformCheck),
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
      http_port: {
        value: cdktf.numberToHclTerraform(this._httpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      https_port: {
        value: cdktf.numberToHclTerraform(this._httpsPort),
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
      idle_timeout: {
        value: cdktf.numberToHclTerraform(this._idleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      idle_timeout_api: {
        value: cdktf.numberToHclTerraform(this._idleTimeoutApi),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      idle_timeout_gui: {
        value: cdktf.numberToHclTerraform(this._idleTimeoutGui),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      idle_timeout_sso: {
        value: cdktf.numberToHclTerraform(this._idleTimeoutSso),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      install_ifpolicy_only: {
        value: cdktf.stringToHclTerraform(this._installIfpolicyOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mgmt_addr: {
        value: cdktf.stringToHclTerraform(this._mgmtAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mgmt_fqdn: {
        value: cdktf.stringToHclTerraform(this._mgmtFqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      objects_force_deletion: {
        value: cdktf.stringToHclTerraform(this._objectsForceDeletion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      offline_mode: {
        value: cdktf.stringToHclTerraform(this._offlineMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_fgfm_intf: {
        value: cdktf.stringToHclTerraform(this._preferredFgfmIntf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      register_passwd: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._registerPasswd),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rtm_max_monitor_by_days: {
        value: cdktf.numberToHclTerraform(this._rtmMaxMonitorByDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rtm_temp_file_limit: {
        value: cdktf.numberToHclTerraform(this._rtmTempFileLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sdwan_monitor_history: {
        value: cdktf.stringToHclTerraform(this._sdwanMonitorHistory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdwan_skip_unmapped_input_device: {
        value: cdktf.stringToHclTerraform(this._sdwanSkipUnmappedInputDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shell_access: {
        value: cdktf.stringToHclTerraform(this._shellAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shell_password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._shellPassword),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      show_add_multiple: {
        value: cdktf.stringToHclTerraform(this._showAddMultiple),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_adom_devman: {
        value: cdktf.stringToHclTerraform(this._showAdomDevman),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_automatic_script: {
        value: cdktf.stringToHclTerraform(this._showAutomaticScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_checkbox_in_table: {
        value: cdktf.stringToHclTerraform(this._showCheckboxInTable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_device_import_export: {
        value: cdktf.stringToHclTerraform(this._showDeviceImportExport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_fct_manager: {
        value: cdktf.stringToHclTerraform(this._showFctManager),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_grouping_script: {
        value: cdktf.stringToHclTerraform(this._showGroupingScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_hostname: {
        value: cdktf.stringToHclTerraform(this._showHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_schedule_script: {
        value: cdktf.stringToHclTerraform(this._showScheduleScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_tcl_script: {
        value: cdktf.stringToHclTerraform(this._showTclScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_shaping_history: {
        value: cdktf.stringToHclTerraform(this._trafficShapingHistory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unreg_dev_opt: {
        value: cdktf.stringToHclTerraform(this._unregDevOpt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webadmin_language: {
        value: cdktf.stringToHclTerraform(this._webadminLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
