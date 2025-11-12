// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_nacsettings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrollerNacsettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_nacsettings#auto_auth SwitchcontrollerNacsettings#auto_auth}
  */
  readonly autoAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_nacsettings#bounce_nac_port SwitchcontrollerNacsettings#bounce_nac_port}
  */
  readonly bounceNacPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_nacsettings#id SwitchcontrollerNacsettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_nacsettings#inactive_timer SwitchcontrollerNacsettings#inactive_timer}
  */
  readonly inactiveTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_nacsettings#link_down_flush SwitchcontrollerNacsettings#link_down_flush}
  */
  readonly linkDownFlush?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_nacsettings#mode SwitchcontrollerNacsettings#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_nacsettings#name SwitchcontrollerNacsettings#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_nacsettings#onboarding_vlan SwitchcontrollerNacsettings#onboarding_vlan}
  */
  readonly onboardingVlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_nacsettings#vdomparam SwitchcontrollerNacsettings#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_nacsettings fortios_switchcontroller_nacsettings}
*/
export class SwitchcontrollerNacsettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_switchcontroller_nacsettings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrollerNacsettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrollerNacsettings to import
  * @param importFromId The id of the existing SwitchcontrollerNacsettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_nacsettings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrollerNacsettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_switchcontroller_nacsettings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_nacsettings fortios_switchcontroller_nacsettings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrollerNacsettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrollerNacsettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_switchcontroller_nacsettings',
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
    this._autoAuth = config.autoAuth;
    this._bounceNacPort = config.bounceNacPort;
    this._id = config.id;
    this._inactiveTimer = config.inactiveTimer;
    this._linkDownFlush = config.linkDownFlush;
    this._mode = config.mode;
    this._name = config.name;
    this._onboardingVlan = config.onboardingVlan;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_auth - computed: true, optional: true, required: false
  private _autoAuth?: string; 
  public get autoAuth() {
    return this.getStringAttribute('auto_auth');
  }
  public set autoAuth(value: string) {
    this._autoAuth = value;
  }
  public resetAutoAuth() {
    this._autoAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAuthInput() {
    return this._autoAuth;
  }

  // bounce_nac_port - computed: true, optional: true, required: false
  private _bounceNacPort?: string; 
  public get bounceNacPort() {
    return this.getStringAttribute('bounce_nac_port');
  }
  public set bounceNacPort(value: string) {
    this._bounceNacPort = value;
  }
  public resetBounceNacPort() {
    this._bounceNacPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bounceNacPortInput() {
    return this._bounceNacPort;
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

  // inactive_timer - computed: true, optional: true, required: false
  private _inactiveTimer?: number; 
  public get inactiveTimer() {
    return this.getNumberAttribute('inactive_timer');
  }
  public set inactiveTimer(value: number) {
    this._inactiveTimer = value;
  }
  public resetInactiveTimer() {
    this._inactiveTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactiveTimerInput() {
    return this._inactiveTimer;
  }

  // link_down_flush - computed: true, optional: true, required: false
  private _linkDownFlush?: string; 
  public get linkDownFlush() {
    return this.getStringAttribute('link_down_flush');
  }
  public set linkDownFlush(value: string) {
    this._linkDownFlush = value;
  }
  public resetLinkDownFlush() {
    this._linkDownFlush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkDownFlushInput() {
    return this._linkDownFlush;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // onboarding_vlan - computed: false, optional: true, required: false
  private _onboardingVlan?: string; 
  public get onboardingVlan() {
    return this.getStringAttribute('onboarding_vlan');
  }
  public set onboardingVlan(value: string) {
    this._onboardingVlan = value;
  }
  public resetOnboardingVlan() {
    this._onboardingVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onboardingVlanInput() {
    return this._onboardingVlan;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_auth: cdktf.stringToTerraform(this._autoAuth),
      bounce_nac_port: cdktf.stringToTerraform(this._bounceNacPort),
      id: cdktf.stringToTerraform(this._id),
      inactive_timer: cdktf.numberToTerraform(this._inactiveTimer),
      link_down_flush: cdktf.stringToTerraform(this._linkDownFlush),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      onboarding_vlan: cdktf.stringToTerraform(this._onboardingVlan),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_auth: {
        value: cdktf.stringToHclTerraform(this._autoAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bounce_nac_port: {
        value: cdktf.stringToHclTerraform(this._bounceNacPort),
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
      inactive_timer: {
        value: cdktf.numberToHclTerraform(this._inactiveTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      link_down_flush: {
        value: cdktf.stringToHclTerraform(this._linkDownFlush),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      onboarding_vlan: {
        value: cdktf.stringToHclTerraform(this._onboardingVlan),
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
