// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_vap_portalmessageoverrides
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelesscontrollerVapPortalmessageoverridesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_vap_portalmessageoverrides#auth_disclaimer_page WirelesscontrollerVapPortalmessageoverrides#auth_disclaimer_page}
  */
  readonly authDisclaimerPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_vap_portalmessageoverrides#auth_login_failed_page WirelesscontrollerVapPortalmessageoverrides#auth_login_failed_page}
  */
  readonly authLoginFailedPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_vap_portalmessageoverrides#auth_login_page WirelesscontrollerVapPortalmessageoverrides#auth_login_page}
  */
  readonly authLoginPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_vap_portalmessageoverrides#auth_reject_page WirelesscontrollerVapPortalmessageoverrides#auth_reject_page}
  */
  readonly authRejectPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_vap_portalmessageoverrides#device_name WirelesscontrollerVapPortalmessageoverrides#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_vap_portalmessageoverrides#device_vdom WirelesscontrollerVapPortalmessageoverrides#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_vap_portalmessageoverrides#id WirelesscontrollerVapPortalmessageoverrides#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_vap_portalmessageoverrides#vap WirelesscontrollerVapPortalmessageoverrides#vap}
  */
  readonly vap: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_vap_portalmessageoverrides fmgdevice_wirelesscontroller_vap_portalmessageoverrides}
*/
export class WirelesscontrollerVapPortalmessageoverrides extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_wirelesscontroller_vap_portalmessageoverrides";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelesscontrollerVapPortalmessageoverrides resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelesscontrollerVapPortalmessageoverrides to import
  * @param importFromId The id of the existing WirelesscontrollerVapPortalmessageoverrides that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_vap_portalmessageoverrides#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelesscontrollerVapPortalmessageoverrides to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_wirelesscontroller_vap_portalmessageoverrides", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_vap_portalmessageoverrides fmgdevice_wirelesscontroller_vap_portalmessageoverrides} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelesscontrollerVapPortalmessageoverridesConfig
  */
  public constructor(scope: Construct, id: string, config: WirelesscontrollerVapPortalmessageoverridesConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_wirelesscontroller_vap_portalmessageoverrides',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authDisclaimerPage = config.authDisclaimerPage;
    this._authLoginFailedPage = config.authLoginFailedPage;
    this._authLoginPage = config.authLoginPage;
    this._authRejectPage = config.authRejectPage;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._id = config.id;
    this._vap = config.vap;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_disclaimer_page - computed: false, optional: true, required: false
  private _authDisclaimerPage?: string; 
  public get authDisclaimerPage() {
    return this.getStringAttribute('auth_disclaimer_page');
  }
  public set authDisclaimerPage(value: string) {
    this._authDisclaimerPage = value;
  }
  public resetAuthDisclaimerPage() {
    this._authDisclaimerPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authDisclaimerPageInput() {
    return this._authDisclaimerPage;
  }

  // auth_login_failed_page - computed: false, optional: true, required: false
  private _authLoginFailedPage?: string; 
  public get authLoginFailedPage() {
    return this.getStringAttribute('auth_login_failed_page');
  }
  public set authLoginFailedPage(value: string) {
    this._authLoginFailedPage = value;
  }
  public resetAuthLoginFailedPage() {
    this._authLoginFailedPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authLoginFailedPageInput() {
    return this._authLoginFailedPage;
  }

  // auth_login_page - computed: false, optional: true, required: false
  private _authLoginPage?: string; 
  public get authLoginPage() {
    return this.getStringAttribute('auth_login_page');
  }
  public set authLoginPage(value: string) {
    this._authLoginPage = value;
  }
  public resetAuthLoginPage() {
    this._authLoginPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authLoginPageInput() {
    return this._authLoginPage;
  }

  // auth_reject_page - computed: false, optional: true, required: false
  private _authRejectPage?: string; 
  public get authRejectPage() {
    return this.getStringAttribute('auth_reject_page');
  }
  public set authRejectPage(value: string) {
    this._authRejectPage = value;
  }
  public resetAuthRejectPage() {
    this._authRejectPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authRejectPageInput() {
    return this._authRejectPage;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
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

  // vap - computed: false, optional: false, required: true
  private _vap?: string; 
  public get vap() {
    return this.getStringAttribute('vap');
  }
  public set vap(value: string) {
    this._vap = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vapInput() {
    return this._vap;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_disclaimer_page: cdktf.stringToTerraform(this._authDisclaimerPage),
      auth_login_failed_page: cdktf.stringToTerraform(this._authLoginFailedPage),
      auth_login_page: cdktf.stringToTerraform(this._authLoginPage),
      auth_reject_page: cdktf.stringToTerraform(this._authRejectPage),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      id: cdktf.stringToTerraform(this._id),
      vap: cdktf.stringToTerraform(this._vap),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_disclaimer_page: {
        value: cdktf.stringToHclTerraform(this._authDisclaimerPage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_login_failed_page: {
        value: cdktf.stringToHclTerraform(this._authLoginFailedPage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_login_page: {
        value: cdktf.stringToHclTerraform(this._authLoginPage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_reject_page: {
        value: cdktf.stringToHclTerraform(this._authRejectPage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
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
      vap: {
        value: cdktf.stringToHclTerraform(this._vap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
