// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_global
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemGlobalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_global#admin_idle_timeout SystemGlobal#admin_idle_timeout}
  */
  readonly adminIdleTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_global#config_sync_enable SystemGlobal#config_sync_enable}
  */
  readonly configSyncEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_global#config_sync_port SystemGlobal#config_sync_port}
  */
  readonly configSyncPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_global#default_intermediate_ca_group SystemGlobal#default_intermediate_ca_group}
  */
  readonly defaultIntermediateCaGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_global#gui_device_latitude SystemGlobal#gui_device_latitude}
  */
  readonly guiDeviceLatitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_global#gui_device_longtitude SystemGlobal#gui_device_longtitude}
  */
  readonly guiDeviceLongtitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_global#gui_log SystemGlobal#gui_log}
  */
  readonly guiLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_global#gui_router SystemGlobal#gui_router}
  */
  readonly guiRouter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_global#gui_system SystemGlobal#gui_system}
  */
  readonly guiSystem?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_global#hostname SystemGlobal#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_global#http_port SystemGlobal#http_port}
  */
  readonly httpPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_global#https_port SystemGlobal#https_port}
  */
  readonly httpsPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_global#https_redirect SystemGlobal#https_redirect}
  */
  readonly httpsRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_global#https_server_cert SystemGlobal#https_server_cert}
  */
  readonly httpsServerCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_global#id SystemGlobal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_global#ip_primary SystemGlobal#ip_primary}
  */
  readonly ipPrimary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_global#ip_second SystemGlobal#ip_second}
  */
  readonly ipSecond?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_global#pre_login_banner SystemGlobal#pre_login_banner}
  */
  readonly preLoginBanner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_global#ssh_port SystemGlobal#ssh_port}
  */
  readonly sshPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_global#sys_global_language SystemGlobal#sys_global_language}
  */
  readonly sysGlobalLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_global#telnet_port SystemGlobal#telnet_port}
  */
  readonly telnetPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_global#use_default_hostname SystemGlobal#use_default_hostname}
  */
  readonly useDefaultHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_global#vdom_admin SystemGlobal#vdom_admin}
  */
  readonly vdomAdmin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_global#vdom_mode SystemGlobal#vdom_mode}
  */
  readonly vdomMode?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_global fortiadc_system_global}
*/
export class SystemGlobal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_system_global";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemGlobal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemGlobal to import
  * @param importFromId The id of the existing SystemGlobal that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_global#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemGlobal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_system_global", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_global fortiadc_system_global} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemGlobalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemGlobalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_system_global',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminIdleTimeout = config.adminIdleTimeout;
    this._configSyncEnable = config.configSyncEnable;
    this._configSyncPort = config.configSyncPort;
    this._defaultIntermediateCaGroup = config.defaultIntermediateCaGroup;
    this._guiDeviceLatitude = config.guiDeviceLatitude;
    this._guiDeviceLongtitude = config.guiDeviceLongtitude;
    this._guiLog = config.guiLog;
    this._guiRouter = config.guiRouter;
    this._guiSystem = config.guiSystem;
    this._hostname = config.hostname;
    this._httpPort = config.httpPort;
    this._httpsPort = config.httpsPort;
    this._httpsRedirect = config.httpsRedirect;
    this._httpsServerCert = config.httpsServerCert;
    this._id = config.id;
    this._ipPrimary = config.ipPrimary;
    this._ipSecond = config.ipSecond;
    this._preLoginBanner = config.preLoginBanner;
    this._sshPort = config.sshPort;
    this._sysGlobalLanguage = config.sysGlobalLanguage;
    this._telnetPort = config.telnetPort;
    this._useDefaultHostname = config.useDefaultHostname;
    this._vdomAdmin = config.vdomAdmin;
    this._vdomMode = config.vdomMode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_idle_timeout - computed: true, optional: true, required: false
  private _adminIdleTimeout?: string; 
  public get adminIdleTimeout() {
    return this.getStringAttribute('admin_idle_timeout');
  }
  public set adminIdleTimeout(value: string) {
    this._adminIdleTimeout = value;
  }
  public resetAdminIdleTimeout() {
    this._adminIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminIdleTimeoutInput() {
    return this._adminIdleTimeout;
  }

  // config_sync_enable - computed: true, optional: true, required: false
  private _configSyncEnable?: string; 
  public get configSyncEnable() {
    return this.getStringAttribute('config_sync_enable');
  }
  public set configSyncEnable(value: string) {
    this._configSyncEnable = value;
  }
  public resetConfigSyncEnable() {
    this._configSyncEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configSyncEnableInput() {
    return this._configSyncEnable;
  }

  // config_sync_port - computed: true, optional: true, required: false
  private _configSyncPort?: string; 
  public get configSyncPort() {
    return this.getStringAttribute('config_sync_port');
  }
  public set configSyncPort(value: string) {
    this._configSyncPort = value;
  }
  public resetConfigSyncPort() {
    this._configSyncPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configSyncPortInput() {
    return this._configSyncPort;
  }

  // default_intermediate_ca_group - computed: true, optional: true, required: false
  private _defaultIntermediateCaGroup?: string; 
  public get defaultIntermediateCaGroup() {
    return this.getStringAttribute('default_intermediate_ca_group');
  }
  public set defaultIntermediateCaGroup(value: string) {
    this._defaultIntermediateCaGroup = value;
  }
  public resetDefaultIntermediateCaGroup() {
    this._defaultIntermediateCaGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultIntermediateCaGroupInput() {
    return this._defaultIntermediateCaGroup;
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

  // gui_device_longtitude - computed: true, optional: true, required: false
  private _guiDeviceLongtitude?: string; 
  public get guiDeviceLongtitude() {
    return this.getStringAttribute('gui_device_longtitude');
  }
  public set guiDeviceLongtitude(value: string) {
    this._guiDeviceLongtitude = value;
  }
  public resetGuiDeviceLongtitude() {
    this._guiDeviceLongtitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiDeviceLongtitudeInput() {
    return this._guiDeviceLongtitude;
  }

  // gui_log - computed: true, optional: true, required: false
  private _guiLog?: string; 
  public get guiLog() {
    return this.getStringAttribute('gui_log');
  }
  public set guiLog(value: string) {
    this._guiLog = value;
  }
  public resetGuiLog() {
    this._guiLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiLogInput() {
    return this._guiLog;
  }

  // gui_router - computed: true, optional: true, required: false
  private _guiRouter?: string; 
  public get guiRouter() {
    return this.getStringAttribute('gui_router');
  }
  public set guiRouter(value: string) {
    this._guiRouter = value;
  }
  public resetGuiRouter() {
    this._guiRouter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiRouterInput() {
    return this._guiRouter;
  }

  // gui_system - computed: true, optional: true, required: false
  private _guiSystem?: string; 
  public get guiSystem() {
    return this.getStringAttribute('gui_system');
  }
  public set guiSystem(value: string) {
    this._guiSystem = value;
  }
  public resetGuiSystem() {
    this._guiSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiSystemInput() {
    return this._guiSystem;
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

  // http_port - computed: true, optional: true, required: false
  private _httpPort?: string; 
  public get httpPort() {
    return this.getStringAttribute('http_port');
  }
  public set httpPort(value: string) {
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
  private _httpsPort?: string; 
  public get httpsPort() {
    return this.getStringAttribute('https_port');
  }
  public set httpsPort(value: string) {
    this._httpsPort = value;
  }
  public resetHttpsPort() {
    this._httpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPortInput() {
    return this._httpsPort;
  }

  // https_redirect - computed: true, optional: true, required: false
  private _httpsRedirect?: string; 
  public get httpsRedirect() {
    return this.getStringAttribute('https_redirect');
  }
  public set httpsRedirect(value: string) {
    this._httpsRedirect = value;
  }
  public resetHttpsRedirect() {
    this._httpsRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsRedirectInput() {
    return this._httpsRedirect;
  }

  // https_server_cert - computed: true, optional: true, required: false
  private _httpsServerCert?: string; 
  public get httpsServerCert() {
    return this.getStringAttribute('https_server_cert');
  }
  public set httpsServerCert(value: string) {
    this._httpsServerCert = value;
  }
  public resetHttpsServerCert() {
    this._httpsServerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsServerCertInput() {
    return this._httpsServerCert;
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

  // ip_primary - computed: true, optional: true, required: false
  private _ipPrimary?: string; 
  public get ipPrimary() {
    return this.getStringAttribute('ip_primary');
  }
  public set ipPrimary(value: string) {
    this._ipPrimary = value;
  }
  public resetIpPrimary() {
    this._ipPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrimaryInput() {
    return this._ipPrimary;
  }

  // ip_second - computed: true, optional: true, required: false
  private _ipSecond?: string; 
  public get ipSecond() {
    return this.getStringAttribute('ip_second');
  }
  public set ipSecond(value: string) {
    this._ipSecond = value;
  }
  public resetIpSecond() {
    this._ipSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSecondInput() {
    return this._ipSecond;
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

  // ssh_port - computed: true, optional: true, required: false
  private _sshPort?: string; 
  public get sshPort() {
    return this.getStringAttribute('ssh_port');
  }
  public set sshPort(value: string) {
    this._sshPort = value;
  }
  public resetSshPort() {
    this._sshPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPortInput() {
    return this._sshPort;
  }

  // sys_global_language - computed: true, optional: true, required: false
  private _sysGlobalLanguage?: string; 
  public get sysGlobalLanguage() {
    return this.getStringAttribute('sys_global_language');
  }
  public set sysGlobalLanguage(value: string) {
    this._sysGlobalLanguage = value;
  }
  public resetSysGlobalLanguage() {
    this._sysGlobalLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysGlobalLanguageInput() {
    return this._sysGlobalLanguage;
  }

  // telnet_port - computed: true, optional: true, required: false
  private _telnetPort?: string; 
  public get telnetPort() {
    return this.getStringAttribute('telnet_port');
  }
  public set telnetPort(value: string) {
    this._telnetPort = value;
  }
  public resetTelnetPort() {
    this._telnetPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telnetPortInput() {
    return this._telnetPort;
  }

  // use_default_hostname - computed: true, optional: true, required: false
  private _useDefaultHostname?: string; 
  public get useDefaultHostname() {
    return this.getStringAttribute('use_default_hostname');
  }
  public set useDefaultHostname(value: string) {
    this._useDefaultHostname = value;
  }
  public resetUseDefaultHostname() {
    this._useDefaultHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultHostnameInput() {
    return this._useDefaultHostname;
  }

  // vdom_admin - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_idle_timeout: cdktf.stringToTerraform(this._adminIdleTimeout),
      config_sync_enable: cdktf.stringToTerraform(this._configSyncEnable),
      config_sync_port: cdktf.stringToTerraform(this._configSyncPort),
      default_intermediate_ca_group: cdktf.stringToTerraform(this._defaultIntermediateCaGroup),
      gui_device_latitude: cdktf.stringToTerraform(this._guiDeviceLatitude),
      gui_device_longtitude: cdktf.stringToTerraform(this._guiDeviceLongtitude),
      gui_log: cdktf.stringToTerraform(this._guiLog),
      gui_router: cdktf.stringToTerraform(this._guiRouter),
      gui_system: cdktf.stringToTerraform(this._guiSystem),
      hostname: cdktf.stringToTerraform(this._hostname),
      http_port: cdktf.stringToTerraform(this._httpPort),
      https_port: cdktf.stringToTerraform(this._httpsPort),
      https_redirect: cdktf.stringToTerraform(this._httpsRedirect),
      https_server_cert: cdktf.stringToTerraform(this._httpsServerCert),
      id: cdktf.stringToTerraform(this._id),
      ip_primary: cdktf.stringToTerraform(this._ipPrimary),
      ip_second: cdktf.stringToTerraform(this._ipSecond),
      pre_login_banner: cdktf.stringToTerraform(this._preLoginBanner),
      ssh_port: cdktf.stringToTerraform(this._sshPort),
      sys_global_language: cdktf.stringToTerraform(this._sysGlobalLanguage),
      telnet_port: cdktf.stringToTerraform(this._telnetPort),
      use_default_hostname: cdktf.stringToTerraform(this._useDefaultHostname),
      vdom_admin: cdktf.stringToTerraform(this._vdomAdmin),
      vdom_mode: cdktf.stringToTerraform(this._vdomMode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_idle_timeout: {
        value: cdktf.stringToHclTerraform(this._adminIdleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_sync_enable: {
        value: cdktf.stringToHclTerraform(this._configSyncEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_sync_port: {
        value: cdktf.stringToHclTerraform(this._configSyncPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_intermediate_ca_group: {
        value: cdktf.stringToHclTerraform(this._defaultIntermediateCaGroup),
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
      gui_device_longtitude: {
        value: cdktf.stringToHclTerraform(this._guiDeviceLongtitude),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_log: {
        value: cdktf.stringToHclTerraform(this._guiLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_router: {
        value: cdktf.stringToHclTerraform(this._guiRouter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_system: {
        value: cdktf.stringToHclTerraform(this._guiSystem),
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
      http_port: {
        value: cdktf.stringToHclTerraform(this._httpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_port: {
        value: cdktf.stringToHclTerraform(this._httpsPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_redirect: {
        value: cdktf.stringToHclTerraform(this._httpsRedirect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_server_cert: {
        value: cdktf.stringToHclTerraform(this._httpsServerCert),
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
      ip_primary: {
        value: cdktf.stringToHclTerraform(this._ipPrimary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_second: {
        value: cdktf.stringToHclTerraform(this._ipSecond),
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
      ssh_port: {
        value: cdktf.stringToHclTerraform(this._sshPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sys_global_language: {
        value: cdktf.stringToHclTerraform(this._sysGlobalLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      telnet_port: {
        value: cdktf.stringToHclTerraform(this._telnetPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_default_hostname: {
        value: cdktf.stringToHclTerraform(this._useDefaultHostname),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
