// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_system_global
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystempSystemGlobalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_system_global#admin_https_redirect SystempSystemGlobal#admin_https_redirect}
  */
  readonly adminHttpsRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_system_global#admin_port SystempSystemGlobal#admin_port}
  */
  readonly adminPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_system_global#admin_scp SystempSystemGlobal#admin_scp}
  */
  readonly adminScp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_system_global#admin_sport SystempSystemGlobal#admin_sport}
  */
  readonly adminSport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_system_global#admin_ssh_port SystempSystemGlobal#admin_ssh_port}
  */
  readonly adminSshPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_system_global#admin_ssh_v1 SystempSystemGlobal#admin_ssh_v1}
  */
  readonly adminSshV1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_system_global#admin_telnet_port SystempSystemGlobal#admin_telnet_port}
  */
  readonly adminTelnetPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_system_global#admintimeout SystempSystemGlobal#admintimeout}
  */
  readonly admintimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_system_global#adom SystempSystemGlobal#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_system_global#devprof SystempSystemGlobal#devprof}
  */
  readonly devprof: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_system_global#gui_device_latitude SystempSystemGlobal#gui_device_latitude}
  */
  readonly guiDeviceLatitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_system_global#gui_device_longitude SystempSystemGlobal#gui_device_longitude}
  */
  readonly guiDeviceLongitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_system_global#gui_ipv6 SystempSystemGlobal#gui_ipv6}
  */
  readonly guiIpv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_system_global#gui_lines_per_page SystempSystemGlobal#gui_lines_per_page}
  */
  readonly guiLinesPerPage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_system_global#gui_theme SystempSystemGlobal#gui_theme}
  */
  readonly guiTheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_system_global#hostname SystempSystemGlobal#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_system_global#id SystempSystemGlobal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_system_global#language SystempSystemGlobal#language}
  */
  readonly language?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_system_global#scopetype SystempSystemGlobal#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_system_global#switch_controller SystempSystemGlobal#switch_controller}
  */
  readonly switchController?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_system_global#timezone SystempSystemGlobal#timezone}
  */
  readonly timezone?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_system_global fortimanager_systemp_system_global}
*/
export class SystempSystemGlobal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_systemp_system_global";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystempSystemGlobal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystempSystemGlobal to import
  * @param importFromId The id of the existing SystempSystemGlobal that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_system_global#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystempSystemGlobal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_systemp_system_global", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/systemp_system_global fortimanager_systemp_system_global} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystempSystemGlobalConfig
  */
  public constructor(scope: Construct, id: string, config: SystempSystemGlobalConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_systemp_system_global',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminHttpsRedirect = config.adminHttpsRedirect;
    this._adminPort = config.adminPort;
    this._adminScp = config.adminScp;
    this._adminSport = config.adminSport;
    this._adminSshPort = config.adminSshPort;
    this._adminSshV1 = config.adminSshV1;
    this._adminTelnetPort = config.adminTelnetPort;
    this._admintimeout = config.admintimeout;
    this._adom = config.adom;
    this._devprof = config.devprof;
    this._guiDeviceLatitude = config.guiDeviceLatitude;
    this._guiDeviceLongitude = config.guiDeviceLongitude;
    this._guiIpv6 = config.guiIpv6;
    this._guiLinesPerPage = config.guiLinesPerPage;
    this._guiTheme = config.guiTheme;
    this._hostname = config.hostname;
    this._id = config.id;
    this._language = config.language;
    this._scopetype = config.scopetype;
    this._switchController = config.switchController;
    this._timezone = config.timezone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // devprof - computed: false, optional: false, required: true
  private _devprof?: string; 
  public get devprof() {
    return this.getStringAttribute('devprof');
  }
  public set devprof(value: string) {
    this._devprof = value;
  }
  // Temporarily expose input value. Use with caution.
  public get devprofInput() {
    return this._devprof;
  }

  // gui_device_latitude - computed: false, optional: true, required: false
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

  // gui_device_longitude - computed: false, optional: true, required: false
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

  // gui_lines_per_page - computed: true, optional: true, required: false
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

  // hostname - computed: false, optional: true, required: false
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

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string[]; 
  public get timezone() {
    return cdktf.Fn.tolist(this.getListAttribute('timezone'));
  }
  public set timezone(value: string[]) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_https_redirect: cdktf.stringToTerraform(this._adminHttpsRedirect),
      admin_port: cdktf.numberToTerraform(this._adminPort),
      admin_scp: cdktf.stringToTerraform(this._adminScp),
      admin_sport: cdktf.numberToTerraform(this._adminSport),
      admin_ssh_port: cdktf.numberToTerraform(this._adminSshPort),
      admin_ssh_v1: cdktf.stringToTerraform(this._adminSshV1),
      admin_telnet_port: cdktf.numberToTerraform(this._adminTelnetPort),
      admintimeout: cdktf.numberToTerraform(this._admintimeout),
      adom: cdktf.stringToTerraform(this._adom),
      devprof: cdktf.stringToTerraform(this._devprof),
      gui_device_latitude: cdktf.stringToTerraform(this._guiDeviceLatitude),
      gui_device_longitude: cdktf.stringToTerraform(this._guiDeviceLongitude),
      gui_ipv6: cdktf.stringToTerraform(this._guiIpv6),
      gui_lines_per_page: cdktf.numberToTerraform(this._guiLinesPerPage),
      gui_theme: cdktf.stringToTerraform(this._guiTheme),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      language: cdktf.stringToTerraform(this._language),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      switch_controller: cdktf.stringToTerraform(this._switchController),
      timezone: cdktf.listMapper(cdktf.stringToTerraform, false)(this._timezone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_https_redirect: {
        value: cdktf.stringToHclTerraform(this._adminHttpsRedirect),
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
      admin_scp: {
        value: cdktf.stringToHclTerraform(this._adminScp),
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
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      devprof: {
        value: cdktf.stringToHclTerraform(this._devprof),
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
      gui_theme: {
        value: cdktf.stringToHclTerraform(this._guiTheme),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
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
      timezone: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._timezone),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
