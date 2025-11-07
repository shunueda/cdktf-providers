// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_8021_xsettings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Switchcontroller8021XsettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_8021_xsettings#id Switchcontroller8021Xsettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_8021_xsettings#link_down_auth Switchcontroller8021Xsettings#link_down_auth}
  */
  readonly linkDownAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_8021_xsettings#mab_reauth Switchcontroller8021Xsettings#mab_reauth}
  */
  readonly mabReauth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_8021_xsettings#mac_called_station_delimiter Switchcontroller8021Xsettings#mac_called_station_delimiter}
  */
  readonly macCalledStationDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_8021_xsettings#mac_calling_station_delimiter Switchcontroller8021Xsettings#mac_calling_station_delimiter}
  */
  readonly macCallingStationDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_8021_xsettings#mac_case Switchcontroller8021Xsettings#mac_case}
  */
  readonly macCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_8021_xsettings#mac_password_delimiter Switchcontroller8021Xsettings#mac_password_delimiter}
  */
  readonly macPasswordDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_8021_xsettings#mac_username_delimiter Switchcontroller8021Xsettings#mac_username_delimiter}
  */
  readonly macUsernameDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_8021_xsettings#max_reauth_attempt Switchcontroller8021Xsettings#max_reauth_attempt}
  */
  readonly maxReauthAttempt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_8021_xsettings#reauth_period Switchcontroller8021Xsettings#reauth_period}
  */
  readonly reauthPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_8021_xsettings#tx_period Switchcontroller8021Xsettings#tx_period}
  */
  readonly txPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_8021_xsettings#vdomparam Switchcontroller8021Xsettings#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_8021_xsettings fortios_switchcontroller_8021Xsettings}
*/
export class Switchcontroller8021Xsettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_switchcontroller_8021Xsettings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Switchcontroller8021Xsettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Switchcontroller8021Xsettings to import
  * @param importFromId The id of the existing Switchcontroller8021Xsettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_8021_xsettings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Switchcontroller8021Xsettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_switchcontroller_8021Xsettings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_8021_xsettings fortios_switchcontroller_8021Xsettings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Switchcontroller8021XsettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Switchcontroller8021XsettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_switchcontroller_8021Xsettings',
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
    this._id = config.id;
    this._linkDownAuth = config.linkDownAuth;
    this._mabReauth = config.mabReauth;
    this._macCalledStationDelimiter = config.macCalledStationDelimiter;
    this._macCallingStationDelimiter = config.macCallingStationDelimiter;
    this._macCase = config.macCase;
    this._macPasswordDelimiter = config.macPasswordDelimiter;
    this._macUsernameDelimiter = config.macUsernameDelimiter;
    this._maxReauthAttempt = config.maxReauthAttempt;
    this._reauthPeriod = config.reauthPeriod;
    this._txPeriod = config.txPeriod;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // link_down_auth - computed: true, optional: true, required: false
  private _linkDownAuth?: string; 
  public get linkDownAuth() {
    return this.getStringAttribute('link_down_auth');
  }
  public set linkDownAuth(value: string) {
    this._linkDownAuth = value;
  }
  public resetLinkDownAuth() {
    this._linkDownAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkDownAuthInput() {
    return this._linkDownAuth;
  }

  // mab_reauth - computed: true, optional: true, required: false
  private _mabReauth?: string; 
  public get mabReauth() {
    return this.getStringAttribute('mab_reauth');
  }
  public set mabReauth(value: string) {
    this._mabReauth = value;
  }
  public resetMabReauth() {
    this._mabReauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mabReauthInput() {
    return this._mabReauth;
  }

  // mac_called_station_delimiter - computed: true, optional: true, required: false
  private _macCalledStationDelimiter?: string; 
  public get macCalledStationDelimiter() {
    return this.getStringAttribute('mac_called_station_delimiter');
  }
  public set macCalledStationDelimiter(value: string) {
    this._macCalledStationDelimiter = value;
  }
  public resetMacCalledStationDelimiter() {
    this._macCalledStationDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macCalledStationDelimiterInput() {
    return this._macCalledStationDelimiter;
  }

  // mac_calling_station_delimiter - computed: true, optional: true, required: false
  private _macCallingStationDelimiter?: string; 
  public get macCallingStationDelimiter() {
    return this.getStringAttribute('mac_calling_station_delimiter');
  }
  public set macCallingStationDelimiter(value: string) {
    this._macCallingStationDelimiter = value;
  }
  public resetMacCallingStationDelimiter() {
    this._macCallingStationDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macCallingStationDelimiterInput() {
    return this._macCallingStationDelimiter;
  }

  // mac_case - computed: true, optional: true, required: false
  private _macCase?: string; 
  public get macCase() {
    return this.getStringAttribute('mac_case');
  }
  public set macCase(value: string) {
    this._macCase = value;
  }
  public resetMacCase() {
    this._macCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macCaseInput() {
    return this._macCase;
  }

  // mac_password_delimiter - computed: true, optional: true, required: false
  private _macPasswordDelimiter?: string; 
  public get macPasswordDelimiter() {
    return this.getStringAttribute('mac_password_delimiter');
  }
  public set macPasswordDelimiter(value: string) {
    this._macPasswordDelimiter = value;
  }
  public resetMacPasswordDelimiter() {
    this._macPasswordDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macPasswordDelimiterInput() {
    return this._macPasswordDelimiter;
  }

  // mac_username_delimiter - computed: true, optional: true, required: false
  private _macUsernameDelimiter?: string; 
  public get macUsernameDelimiter() {
    return this.getStringAttribute('mac_username_delimiter');
  }
  public set macUsernameDelimiter(value: string) {
    this._macUsernameDelimiter = value;
  }
  public resetMacUsernameDelimiter() {
    this._macUsernameDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macUsernameDelimiterInput() {
    return this._macUsernameDelimiter;
  }

  // max_reauth_attempt - computed: true, optional: true, required: false
  private _maxReauthAttempt?: number; 
  public get maxReauthAttempt() {
    return this.getNumberAttribute('max_reauth_attempt');
  }
  public set maxReauthAttempt(value: number) {
    this._maxReauthAttempt = value;
  }
  public resetMaxReauthAttempt() {
    this._maxReauthAttempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReauthAttemptInput() {
    return this._maxReauthAttempt;
  }

  // reauth_period - computed: true, optional: true, required: false
  private _reauthPeriod?: number; 
  public get reauthPeriod() {
    return this.getNumberAttribute('reauth_period');
  }
  public set reauthPeriod(value: number) {
    this._reauthPeriod = value;
  }
  public resetReauthPeriod() {
    this._reauthPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reauthPeriodInput() {
    return this._reauthPeriod;
  }

  // tx_period - computed: true, optional: true, required: false
  private _txPeriod?: number; 
  public get txPeriod() {
    return this.getNumberAttribute('tx_period');
  }
  public set txPeriod(value: number) {
    this._txPeriod = value;
  }
  public resetTxPeriod() {
    this._txPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txPeriodInput() {
    return this._txPeriod;
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
      id: cdktf.stringToTerraform(this._id),
      link_down_auth: cdktf.stringToTerraform(this._linkDownAuth),
      mab_reauth: cdktf.stringToTerraform(this._mabReauth),
      mac_called_station_delimiter: cdktf.stringToTerraform(this._macCalledStationDelimiter),
      mac_calling_station_delimiter: cdktf.stringToTerraform(this._macCallingStationDelimiter),
      mac_case: cdktf.stringToTerraform(this._macCase),
      mac_password_delimiter: cdktf.stringToTerraform(this._macPasswordDelimiter),
      mac_username_delimiter: cdktf.stringToTerraform(this._macUsernameDelimiter),
      max_reauth_attempt: cdktf.numberToTerraform(this._maxReauthAttempt),
      reauth_period: cdktf.numberToTerraform(this._reauthPeriod),
      tx_period: cdktf.numberToTerraform(this._txPeriod),
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
      link_down_auth: {
        value: cdktf.stringToHclTerraform(this._linkDownAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mab_reauth: {
        value: cdktf.stringToHclTerraform(this._mabReauth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_called_station_delimiter: {
        value: cdktf.stringToHclTerraform(this._macCalledStationDelimiter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_calling_station_delimiter: {
        value: cdktf.stringToHclTerraform(this._macCallingStationDelimiter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_case: {
        value: cdktf.stringToHclTerraform(this._macCase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_password_delimiter: {
        value: cdktf.stringToHclTerraform(this._macPasswordDelimiter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_username_delimiter: {
        value: cdktf.stringToHclTerraform(this._macUsernameDelimiter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_reauth_attempt: {
        value: cdktf.numberToHclTerraform(this._maxReauthAttempt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reauth_period: {
        value: cdktf.numberToHclTerraform(this._reauthPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tx_period: {
        value: cdktf.numberToHclTerraform(this._txPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
