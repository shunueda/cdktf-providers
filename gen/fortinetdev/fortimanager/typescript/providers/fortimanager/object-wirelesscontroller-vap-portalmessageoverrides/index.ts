// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_vap_portalmessageoverrides
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectWirelesscontrollerVapPortalmessageoverridesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_vap_portalmessageoverrides#adom ObjectWirelesscontrollerVapPortalmessageoverrides#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_vap_portalmessageoverrides#auth_disclaimer_page ObjectWirelesscontrollerVapPortalmessageoverrides#auth_disclaimer_page}
  */
  readonly authDisclaimerPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_vap_portalmessageoverrides#auth_login_failed_page ObjectWirelesscontrollerVapPortalmessageoverrides#auth_login_failed_page}
  */
  readonly authLoginFailedPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_vap_portalmessageoverrides#auth_login_page ObjectWirelesscontrollerVapPortalmessageoverrides#auth_login_page}
  */
  readonly authLoginPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_vap_portalmessageoverrides#auth_reject_page ObjectWirelesscontrollerVapPortalmessageoverrides#auth_reject_page}
  */
  readonly authRejectPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_vap_portalmessageoverrides#id ObjectWirelesscontrollerVapPortalmessageoverrides#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_vap_portalmessageoverrides#scopetype ObjectWirelesscontrollerVapPortalmessageoverrides#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_vap_portalmessageoverrides#vap ObjectWirelesscontrollerVapPortalmessageoverrides#vap}
  */
  readonly vap: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_vap_portalmessageoverrides fortimanager_object_wirelesscontroller_vap_portalmessageoverrides}
*/
export class ObjectWirelesscontrollerVapPortalmessageoverrides extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_wirelesscontroller_vap_portalmessageoverrides";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectWirelesscontrollerVapPortalmessageoverrides resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectWirelesscontrollerVapPortalmessageoverrides to import
  * @param importFromId The id of the existing ObjectWirelesscontrollerVapPortalmessageoverrides that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_vap_portalmessageoverrides#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectWirelesscontrollerVapPortalmessageoverrides to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_wirelesscontroller_vap_portalmessageoverrides", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_vap_portalmessageoverrides fortimanager_object_wirelesscontroller_vap_portalmessageoverrides} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectWirelesscontrollerVapPortalmessageoverridesConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectWirelesscontrollerVapPortalmessageoverridesConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_wirelesscontroller_vap_portalmessageoverrides',
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
    this._adom = config.adom;
    this._authDisclaimerPage = config.authDisclaimerPage;
    this._authLoginFailedPage = config.authLoginFailedPage;
    this._authLoginPage = config.authLoginPage;
    this._authRejectPage = config.authRejectPage;
    this._id = config.id;
    this._scopetype = config.scopetype;
    this._vap = config.vap;
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
      adom: cdktf.stringToTerraform(this._adom),
      auth_disclaimer_page: cdktf.stringToTerraform(this._authDisclaimerPage),
      auth_login_failed_page: cdktf.stringToTerraform(this._authLoginFailedPage),
      auth_login_page: cdktf.stringToTerraform(this._authLoginPage),
      auth_reject_page: cdktf.stringToTerraform(this._authRejectPage),
      id: cdktf.stringToTerraform(this._id),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      vap: cdktf.stringToTerraform(this._vap),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
