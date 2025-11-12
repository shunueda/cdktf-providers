// https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemAdminSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_setting#access_banner SystemAdminSetting#access_banner}
  */
  readonly accessBanner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_setting#admin_https_redirect SystemAdminSetting#admin_https_redirect}
  */
  readonly adminHttpsRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_setting#admin_login_max SystemAdminSetting#admin_login_max}
  */
  readonly adminLoginMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_setting#admin_server_cert SystemAdminSetting#admin_server_cert}
  */
  readonly adminServerCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_setting#auth_addr SystemAdminSetting#auth_addr}
  */
  readonly authAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_setting#auth_port SystemAdminSetting#auth_port}
  */
  readonly authPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_setting#banner_message SystemAdminSetting#banner_message}
  */
  readonly bannerMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_setting#fgt_gui_proxy SystemAdminSetting#fgt_gui_proxy}
  */
  readonly fgtGuiProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_setting#fgt_gui_proxy_port SystemAdminSetting#fgt_gui_proxy_port}
  */
  readonly fgtGuiProxyPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_setting#firmware_upgrade_check SystemAdminSetting#firmware_upgrade_check}
  */
  readonly firmwareUpgradeCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_setting#fsw_ignore_platform_check SystemAdminSetting#fsw_ignore_platform_check}
  */
  readonly fswIgnorePlatformCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_setting#gui_theme SystemAdminSetting#gui_theme}
  */
  readonly guiTheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_setting#http_port SystemAdminSetting#http_port}
  */
  readonly httpPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_setting#https_port SystemAdminSetting#https_port}
  */
  readonly httpsPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_setting#id SystemAdminSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_setting#idle_timeout SystemAdminSetting#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_setting#idle_timeout_api SystemAdminSetting#idle_timeout_api}
  */
  readonly idleTimeoutApi?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_setting#idle_timeout_gui SystemAdminSetting#idle_timeout_gui}
  */
  readonly idleTimeoutGui?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_setting#idle_timeout_sso SystemAdminSetting#idle_timeout_sso}
  */
  readonly idleTimeoutSso?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_setting#object_threshold_limit SystemAdminSetting#object_threshold_limit}
  */
  readonly objectThresholdLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_setting#object_threshold_limit_value SystemAdminSetting#object_threshold_limit_value}
  */
  readonly objectThresholdLimitValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_setting#objects_force_deletion SystemAdminSetting#objects_force_deletion}
  */
  readonly objectsForceDeletion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_setting#preferred_fgfm_intf SystemAdminSetting#preferred_fgfm_intf}
  */
  readonly preferredFgfmIntf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_setting#shell_access SystemAdminSetting#shell_access}
  */
  readonly shellAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_setting#shell_password SystemAdminSetting#shell_password}
  */
  readonly shellPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_setting#show_add_multiple SystemAdminSetting#show_add_multiple}
  */
  readonly showAddMultiple?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_setting#show_checkbox_in_table SystemAdminSetting#show_checkbox_in_table}
  */
  readonly showCheckboxInTable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_setting#show_device_import_export SystemAdminSetting#show_device_import_export}
  */
  readonly showDeviceImportExport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_setting#show_fct_manager SystemAdminSetting#show_fct_manager}
  */
  readonly showFctManager?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_setting#show_hostname SystemAdminSetting#show_hostname}
  */
  readonly showHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_setting#show_log_forwarding SystemAdminSetting#show_log_forwarding}
  */
  readonly showLogForwarding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_setting#show_sdwan_manager SystemAdminSetting#show_sdwan_manager}
  */
  readonly showSdwanManager?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_setting#unreg_dev_opt SystemAdminSetting#unreg_dev_opt}
  */
  readonly unregDevOpt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_setting#webadmin_language SystemAdminSetting#webadmin_language}
  */
  readonly webadminLanguage?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_setting fortianalyzer_system_admin_setting}
*/
export class SystemAdminSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortianalyzer_system_admin_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemAdminSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemAdminSetting to import
  * @param importFromId The id of the existing SystemAdminSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemAdminSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortianalyzer_system_admin_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_setting fortianalyzer_system_admin_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemAdminSettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemAdminSettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortianalyzer_system_admin_setting',
      terraformGeneratorMetadata: {
        providerName: 'fortianalyzer',
        providerVersion: '1.5.1',
        providerVersionConstraint: '1.5.1'
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
    this._authAddr = config.authAddr;
    this._authPort = config.authPort;
    this._bannerMessage = config.bannerMessage;
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
    this._objectThresholdLimit = config.objectThresholdLimit;
    this._objectThresholdLimitValue = config.objectThresholdLimitValue;
    this._objectsForceDeletion = config.objectsForceDeletion;
    this._preferredFgfmIntf = config.preferredFgfmIntf;
    this._shellAccess = config.shellAccess;
    this._shellPassword = config.shellPassword;
    this._showAddMultiple = config.showAddMultiple;
    this._showCheckboxInTable = config.showCheckboxInTable;
    this._showDeviceImportExport = config.showDeviceImportExport;
    this._showFctManager = config.showFctManager;
    this._showHostname = config.showHostname;
    this._showLogForwarding = config.showLogForwarding;
    this._showSdwanManager = config.showSdwanManager;
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

  // object_threshold_limit - computed: true, optional: true, required: false
  private _objectThresholdLimit?: string; 
  public get objectThresholdLimit() {
    return this.getStringAttribute('object_threshold_limit');
  }
  public set objectThresholdLimit(value: string) {
    this._objectThresholdLimit = value;
  }
  public resetObjectThresholdLimit() {
    this._objectThresholdLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectThresholdLimitInput() {
    return this._objectThresholdLimit;
  }

  // object_threshold_limit_value - computed: true, optional: true, required: false
  private _objectThresholdLimitValue?: number; 
  public get objectThresholdLimitValue() {
    return this.getNumberAttribute('object_threshold_limit_value');
  }
  public set objectThresholdLimitValue(value: number) {
    this._objectThresholdLimitValue = value;
  }
  public resetObjectThresholdLimitValue() {
    this._objectThresholdLimitValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectThresholdLimitValueInput() {
    return this._objectThresholdLimitValue;
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

  // shell_password - computed: false, optional: true, required: false
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

  // show_log_forwarding - computed: true, optional: true, required: false
  private _showLogForwarding?: string; 
  public get showLogForwarding() {
    return this.getStringAttribute('show_log_forwarding');
  }
  public set showLogForwarding(value: string) {
    this._showLogForwarding = value;
  }
  public resetShowLogForwarding() {
    this._showLogForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showLogForwardingInput() {
    return this._showLogForwarding;
  }

  // show_sdwan_manager - computed: true, optional: true, required: false
  private _showSdwanManager?: string; 
  public get showSdwanManager() {
    return this.getStringAttribute('show_sdwan_manager');
  }
  public set showSdwanManager(value: string) {
    this._showSdwanManager = value;
  }
  public resetShowSdwanManager() {
    this._showSdwanManager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showSdwanManagerInput() {
    return this._showSdwanManager;
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
      auth_addr: cdktf.stringToTerraform(this._authAddr),
      auth_port: cdktf.numberToTerraform(this._authPort),
      banner_message: cdktf.stringToTerraform(this._bannerMessage),
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
      object_threshold_limit: cdktf.stringToTerraform(this._objectThresholdLimit),
      object_threshold_limit_value: cdktf.numberToTerraform(this._objectThresholdLimitValue),
      objects_force_deletion: cdktf.stringToTerraform(this._objectsForceDeletion),
      preferred_fgfm_intf: cdktf.stringToTerraform(this._preferredFgfmIntf),
      shell_access: cdktf.stringToTerraform(this._shellAccess),
      shell_password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._shellPassword),
      show_add_multiple: cdktf.stringToTerraform(this._showAddMultiple),
      show_checkbox_in_table: cdktf.stringToTerraform(this._showCheckboxInTable),
      show_device_import_export: cdktf.stringToTerraform(this._showDeviceImportExport),
      show_fct_manager: cdktf.stringToTerraform(this._showFctManager),
      show_hostname: cdktf.stringToTerraform(this._showHostname),
      show_log_forwarding: cdktf.stringToTerraform(this._showLogForwarding),
      show_sdwan_manager: cdktf.stringToTerraform(this._showSdwanManager),
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
      banner_message: {
        value: cdktf.stringToHclTerraform(this._bannerMessage),
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
      object_threshold_limit: {
        value: cdktf.stringToHclTerraform(this._objectThresholdLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_threshold_limit_value: {
        value: cdktf.numberToHclTerraform(this._objectThresholdLimitValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      objects_force_deletion: {
        value: cdktf.stringToHclTerraform(this._objectsForceDeletion),
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
      show_hostname: {
        value: cdktf.stringToHclTerraform(this._showHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_log_forwarding: {
        value: cdktf.stringToHclTerraform(this._showLogForwarding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_sdwan_manager: {
        value: cdktf.stringToHclTerraform(this._showSdwanManager),
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
