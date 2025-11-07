// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_eventfilter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogEventfilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_eventfilter#cifs LogEventfilter#cifs}
  */
  readonly cifs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_eventfilter#compliance_check LogEventfilter#compliance_check}
  */
  readonly complianceCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_eventfilter#connector LogEventfilter#connector}
  */
  readonly connector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_eventfilter#endpoint LogEventfilter#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_eventfilter#event LogEventfilter#event}
  */
  readonly event?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_eventfilter#fortiextender LogEventfilter#fortiextender}
  */
  readonly fortiextender?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_eventfilter#ha LogEventfilter#ha}
  */
  readonly ha?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_eventfilter#id LogEventfilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_eventfilter#rest_api LogEventfilter#rest_api}
  */
  readonly restApi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_eventfilter#router LogEventfilter#router}
  */
  readonly router?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_eventfilter#sdwan LogEventfilter#sdwan}
  */
  readonly sdwan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_eventfilter#security_rating LogEventfilter#security_rating}
  */
  readonly securityRating?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_eventfilter#switch_controller LogEventfilter#switch_controller}
  */
  readonly switchController?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_eventfilter#system LogEventfilter#system}
  */
  readonly systemAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_eventfilter#user LogEventfilter#user}
  */
  readonly user?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_eventfilter#vdomparam LogEventfilter#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_eventfilter#vpn LogEventfilter#vpn}
  */
  readonly vpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_eventfilter#wan_opt LogEventfilter#wan_opt}
  */
  readonly wanOpt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_eventfilter#webproxy LogEventfilter#webproxy}
  */
  readonly webproxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_eventfilter#wireless_activity LogEventfilter#wireless_activity}
  */
  readonly wirelessActivity?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_eventfilter fortios_log_eventfilter}
*/
export class LogEventfilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_log_eventfilter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogEventfilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogEventfilter to import
  * @param importFromId The id of the existing LogEventfilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_eventfilter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogEventfilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_log_eventfilter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_eventfilter fortios_log_eventfilter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogEventfilterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LogEventfilterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_log_eventfilter',
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
    this._cifs = config.cifs;
    this._complianceCheck = config.complianceCheck;
    this._connector = config.connector;
    this._endpoint = config.endpoint;
    this._event = config.event;
    this._fortiextender = config.fortiextender;
    this._ha = config.ha;
    this._id = config.id;
    this._restApi = config.restApi;
    this._router = config.router;
    this._sdwan = config.sdwan;
    this._securityRating = config.securityRating;
    this._switchController = config.switchController;
    this._system = config.systemAttribute;
    this._user = config.user;
    this._vdomparam = config.vdomparam;
    this._vpn = config.vpn;
    this._wanOpt = config.wanOpt;
    this._webproxy = config.webproxy;
    this._wirelessActivity = config.wirelessActivity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cifs - computed: true, optional: true, required: false
  private _cifs?: string; 
  public get cifs() {
    return this.getStringAttribute('cifs');
  }
  public set cifs(value: string) {
    this._cifs = value;
  }
  public resetCifs() {
    this._cifs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cifsInput() {
    return this._cifs;
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

  // connector - computed: true, optional: true, required: false
  private _connector?: string; 
  public get connector() {
    return this.getStringAttribute('connector');
  }
  public set connector(value: string) {
    this._connector = value;
  }
  public resetConnector() {
    this._connector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorInput() {
    return this._connector;
  }

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // event - computed: true, optional: true, required: false
  private _event?: string; 
  public get event() {
    return this.getStringAttribute('event');
  }
  public set event(value: string) {
    this._event = value;
  }
  public resetEvent() {
    this._event = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event;
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

  // ha - computed: true, optional: true, required: false
  private _ha?: string; 
  public get ha() {
    return this.getStringAttribute('ha');
  }
  public set ha(value: string) {
    this._ha = value;
  }
  public resetHa() {
    this._ha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haInput() {
    return this._ha;
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

  // rest_api - computed: true, optional: true, required: false
  private _restApi?: string; 
  public get restApi() {
    return this.getStringAttribute('rest_api');
  }
  public set restApi(value: string) {
    this._restApi = value;
  }
  public resetRestApi() {
    this._restApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restApiInput() {
    return this._restApi;
  }

  // router - computed: true, optional: true, required: false
  private _router?: string; 
  public get router() {
    return this.getStringAttribute('router');
  }
  public set router(value: string) {
    this._router = value;
  }
  public resetRouter() {
    this._router = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router;
  }

  // sdwan - computed: true, optional: true, required: false
  private _sdwan?: string; 
  public get sdwan() {
    return this.getStringAttribute('sdwan');
  }
  public set sdwan(value: string) {
    this._sdwan = value;
  }
  public resetSdwan() {
    this._sdwan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanInput() {
    return this._sdwan;
  }

  // security_rating - computed: true, optional: true, required: false
  private _securityRating?: string; 
  public get securityRating() {
    return this.getStringAttribute('security_rating');
  }
  public set securityRating(value: string) {
    this._securityRating = value;
  }
  public resetSecurityRating() {
    this._securityRating = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityRatingInput() {
    return this._securityRating;
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

  // system - computed: true, optional: true, required: false
  private _system?: string; 
  public get systemAttribute() {
    return this.getStringAttribute('system');
  }
  public set systemAttribute(value: string) {
    this._system = value;
  }
  public resetSystemAttribute() {
    this._system = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAttributeInput() {
    return this._system;
  }

  // user - computed: true, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
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

  // vpn - computed: true, optional: true, required: false
  private _vpn?: string; 
  public get vpn() {
    return this.getStringAttribute('vpn');
  }
  public set vpn(value: string) {
    this._vpn = value;
  }
  public resetVpn() {
    this._vpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnInput() {
    return this._vpn;
  }

  // wan_opt - computed: true, optional: true, required: false
  private _wanOpt?: string; 
  public get wanOpt() {
    return this.getStringAttribute('wan_opt');
  }
  public set wanOpt(value: string) {
    this._wanOpt = value;
  }
  public resetWanOpt() {
    this._wanOpt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanOptInput() {
    return this._wanOpt;
  }

  // webproxy - computed: true, optional: true, required: false
  private _webproxy?: string; 
  public get webproxy() {
    return this.getStringAttribute('webproxy');
  }
  public set webproxy(value: string) {
    this._webproxy = value;
  }
  public resetWebproxy() {
    this._webproxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webproxyInput() {
    return this._webproxy;
  }

  // wireless_activity - computed: true, optional: true, required: false
  private _wirelessActivity?: string; 
  public get wirelessActivity() {
    return this.getStringAttribute('wireless_activity');
  }
  public set wirelessActivity(value: string) {
    this._wirelessActivity = value;
  }
  public resetWirelessActivity() {
    this._wirelessActivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wirelessActivityInput() {
    return this._wirelessActivity;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cifs: cdktf.stringToTerraform(this._cifs),
      compliance_check: cdktf.stringToTerraform(this._complianceCheck),
      connector: cdktf.stringToTerraform(this._connector),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      event: cdktf.stringToTerraform(this._event),
      fortiextender: cdktf.stringToTerraform(this._fortiextender),
      ha: cdktf.stringToTerraform(this._ha),
      id: cdktf.stringToTerraform(this._id),
      rest_api: cdktf.stringToTerraform(this._restApi),
      router: cdktf.stringToTerraform(this._router),
      sdwan: cdktf.stringToTerraform(this._sdwan),
      security_rating: cdktf.stringToTerraform(this._securityRating),
      switch_controller: cdktf.stringToTerraform(this._switchController),
      system: cdktf.stringToTerraform(this._system),
      user: cdktf.stringToTerraform(this._user),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      vpn: cdktf.stringToTerraform(this._vpn),
      wan_opt: cdktf.stringToTerraform(this._wanOpt),
      webproxy: cdktf.stringToTerraform(this._webproxy),
      wireless_activity: cdktf.stringToTerraform(this._wirelessActivity),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cifs: {
        value: cdktf.stringToHclTerraform(this._cifs),
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
      connector: {
        value: cdktf.stringToHclTerraform(this._connector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event: {
        value: cdktf.stringToHclTerraform(this._event),
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
      ha: {
        value: cdktf.stringToHclTerraform(this._ha),
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
      rest_api: {
        value: cdktf.stringToHclTerraform(this._restApi),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      router: {
        value: cdktf.stringToHclTerraform(this._router),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdwan: {
        value: cdktf.stringToHclTerraform(this._sdwan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_rating: {
        value: cdktf.stringToHclTerraform(this._securityRating),
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
      system: {
        value: cdktf.stringToHclTerraform(this._system),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
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
      vpn: {
        value: cdktf.stringToHclTerraform(this._vpn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wan_opt: {
        value: cdktf.stringToHclTerraform(this._wanOpt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webproxy: {
        value: cdktf.stringToHclTerraform(this._webproxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wireless_activity: {
        value: cdktf.stringToHclTerraform(this._wirelessActivity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
