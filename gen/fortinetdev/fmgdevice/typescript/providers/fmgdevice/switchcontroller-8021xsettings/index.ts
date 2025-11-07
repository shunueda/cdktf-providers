// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_8021xsettings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Switchcontroller8021XsettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_8021xsettings#device_name Switchcontroller8021Xsettings#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_8021xsettings#device_vdom Switchcontroller8021Xsettings#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_8021xsettings#id Switchcontroller8021Xsettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_8021xsettings#link_down_auth Switchcontroller8021Xsettings#link_down_auth}
  */
  readonly linkDownAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_8021xsettings#mab_reauth Switchcontroller8021Xsettings#mab_reauth}
  */
  readonly mabReauth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_8021xsettings#mac_called_station_delimiter Switchcontroller8021Xsettings#mac_called_station_delimiter}
  */
  readonly macCalledStationDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_8021xsettings#mac_calling_station_delimiter Switchcontroller8021Xsettings#mac_calling_station_delimiter}
  */
  readonly macCallingStationDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_8021xsettings#mac_case Switchcontroller8021Xsettings#mac_case}
  */
  readonly macCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_8021xsettings#mac_password_delimiter Switchcontroller8021Xsettings#mac_password_delimiter}
  */
  readonly macPasswordDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_8021xsettings#mac_username_delimiter Switchcontroller8021Xsettings#mac_username_delimiter}
  */
  readonly macUsernameDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_8021xsettings#max_reauth_attempt Switchcontroller8021Xsettings#max_reauth_attempt}
  */
  readonly maxReauthAttempt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_8021xsettings#reauth_period Switchcontroller8021Xsettings#reauth_period}
  */
  readonly reauthPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_8021xsettings#tx_period Switchcontroller8021Xsettings#tx_period}
  */
  readonly txPeriod?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_8021xsettings fmgdevice_switchcontroller_8021xsettings}
*/
export class Switchcontroller8021Xsettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_switchcontroller_8021xsettings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Switchcontroller8021Xsettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Switchcontroller8021Xsettings to import
  * @param importFromId The id of the existing Switchcontroller8021Xsettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_8021xsettings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Switchcontroller8021Xsettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_switchcontroller_8021xsettings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_8021xsettings fmgdevice_switchcontroller_8021xsettings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Switchcontroller8021XsettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Switchcontroller8021XsettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_switchcontroller_8021xsettings',
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
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
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
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
