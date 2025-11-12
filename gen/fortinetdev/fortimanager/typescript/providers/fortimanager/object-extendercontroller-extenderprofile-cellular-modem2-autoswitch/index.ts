// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_extenderprofile_cellular_modem2_autoswitch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectExtendercontrollerExtenderprofileCellularModem2AutoswitchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_extenderprofile_cellular_modem2_autoswitch#adom ObjectExtendercontrollerExtenderprofileCellularModem2Autoswitch#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_extenderprofile_cellular_modem2_autoswitch#dataplan ObjectExtendercontrollerExtenderprofileCellularModem2Autoswitch#dataplan}
  */
  readonly dataplan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_extenderprofile_cellular_modem2_autoswitch#disconnect ObjectExtendercontrollerExtenderprofileCellularModem2Autoswitch#disconnect}
  */
  readonly disconnect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_extenderprofile_cellular_modem2_autoswitch#disconnect_period ObjectExtendercontrollerExtenderprofileCellularModem2Autoswitch#disconnect_period}
  */
  readonly disconnectPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_extenderprofile_cellular_modem2_autoswitch#disconnect_threshold ObjectExtendercontrollerExtenderprofileCellularModem2Autoswitch#disconnect_threshold}
  */
  readonly disconnectThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_extenderprofile_cellular_modem2_autoswitch#extender_profile ObjectExtendercontrollerExtenderprofileCellularModem2Autoswitch#extender_profile}
  */
  readonly extenderProfile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_extenderprofile_cellular_modem2_autoswitch#id ObjectExtendercontrollerExtenderprofileCellularModem2Autoswitch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_extenderprofile_cellular_modem2_autoswitch#scopetype ObjectExtendercontrollerExtenderprofileCellularModem2Autoswitch#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_extenderprofile_cellular_modem2_autoswitch#signal ObjectExtendercontrollerExtenderprofileCellularModem2Autoswitch#signal}
  */
  readonly signal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_extenderprofile_cellular_modem2_autoswitch#switch_back ObjectExtendercontrollerExtenderprofileCellularModem2Autoswitch#switch_back}
  */
  readonly switchBack?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_extenderprofile_cellular_modem2_autoswitch#switch_back_time ObjectExtendercontrollerExtenderprofileCellularModem2Autoswitch#switch_back_time}
  */
  readonly switchBackTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_extenderprofile_cellular_modem2_autoswitch#switch_back_timer ObjectExtendercontrollerExtenderprofileCellularModem2Autoswitch#switch_back_timer}
  */
  readonly switchBackTimer?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_extenderprofile_cellular_modem2_autoswitch fortimanager_object_extendercontroller_extenderprofile_cellular_modem2_autoswitch}
*/
export class ObjectExtendercontrollerExtenderprofileCellularModem2Autoswitch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_extendercontroller_extenderprofile_cellular_modem2_autoswitch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectExtendercontrollerExtenderprofileCellularModem2Autoswitch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectExtendercontrollerExtenderprofileCellularModem2Autoswitch to import
  * @param importFromId The id of the existing ObjectExtendercontrollerExtenderprofileCellularModem2Autoswitch that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_extenderprofile_cellular_modem2_autoswitch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectExtendercontrollerExtenderprofileCellularModem2Autoswitch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_extendercontroller_extenderprofile_cellular_modem2_autoswitch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_extenderprofile_cellular_modem2_autoswitch fortimanager_object_extendercontroller_extenderprofile_cellular_modem2_autoswitch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectExtendercontrollerExtenderprofileCellularModem2AutoswitchConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectExtendercontrollerExtenderprofileCellularModem2AutoswitchConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_extendercontroller_extenderprofile_cellular_modem2_autoswitch',
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
    this._adom = config.adom;
    this._dataplan = config.dataplan;
    this._disconnect = config.disconnect;
    this._disconnectPeriod = config.disconnectPeriod;
    this._disconnectThreshold = config.disconnectThreshold;
    this._extenderProfile = config.extenderProfile;
    this._id = config.id;
    this._scopetype = config.scopetype;
    this._signal = config.signal;
    this._switchBack = config.switchBack;
    this._switchBackTime = config.switchBackTime;
    this._switchBackTimer = config.switchBackTimer;
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

  // dataplan - computed: true, optional: true, required: false
  private _dataplan?: string; 
  public get dataplan() {
    return this.getStringAttribute('dataplan');
  }
  public set dataplan(value: string) {
    this._dataplan = value;
  }
  public resetDataplan() {
    this._dataplan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataplanInput() {
    return this._dataplan;
  }

  // disconnect - computed: true, optional: true, required: false
  private _disconnect?: string; 
  public get disconnect() {
    return this.getStringAttribute('disconnect');
  }
  public set disconnect(value: string) {
    this._disconnect = value;
  }
  public resetDisconnect() {
    this._disconnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disconnectInput() {
    return this._disconnect;
  }

  // disconnect_period - computed: true, optional: true, required: false
  private _disconnectPeriod?: number; 
  public get disconnectPeriod() {
    return this.getNumberAttribute('disconnect_period');
  }
  public set disconnectPeriod(value: number) {
    this._disconnectPeriod = value;
  }
  public resetDisconnectPeriod() {
    this._disconnectPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disconnectPeriodInput() {
    return this._disconnectPeriod;
  }

  // disconnect_threshold - computed: true, optional: true, required: false
  private _disconnectThreshold?: number; 
  public get disconnectThreshold() {
    return this.getNumberAttribute('disconnect_threshold');
  }
  public set disconnectThreshold(value: number) {
    this._disconnectThreshold = value;
  }
  public resetDisconnectThreshold() {
    this._disconnectThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disconnectThresholdInput() {
    return this._disconnectThreshold;
  }

  // extender_profile - computed: false, optional: false, required: true
  private _extenderProfile?: string; 
  public get extenderProfile() {
    return this.getStringAttribute('extender_profile');
  }
  public set extenderProfile(value: string) {
    this._extenderProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extenderProfileInput() {
    return this._extenderProfile;
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

  // signal - computed: true, optional: true, required: false
  private _signal?: string; 
  public get signal() {
    return this.getStringAttribute('signal');
  }
  public set signal(value: string) {
    this._signal = value;
  }
  public resetSignal() {
    this._signal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signalInput() {
    return this._signal;
  }

  // switch_back - computed: true, optional: true, required: false
  private _switchBack?: string[]; 
  public get switchBack() {
    return cdktf.Fn.tolist(this.getListAttribute('switch_back'));
  }
  public set switchBack(value: string[]) {
    this._switchBack = value;
  }
  public resetSwitchBack() {
    this._switchBack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchBackInput() {
    return this._switchBack;
  }

  // switch_back_time - computed: true, optional: true, required: false
  private _switchBackTime?: string; 
  public get switchBackTime() {
    return this.getStringAttribute('switch_back_time');
  }
  public set switchBackTime(value: string) {
    this._switchBackTime = value;
  }
  public resetSwitchBackTime() {
    this._switchBackTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchBackTimeInput() {
    return this._switchBackTime;
  }

  // switch_back_timer - computed: true, optional: true, required: false
  private _switchBackTimer?: number; 
  public get switchBackTimer() {
    return this.getNumberAttribute('switch_back_timer');
  }
  public set switchBackTimer(value: number) {
    this._switchBackTimer = value;
  }
  public resetSwitchBackTimer() {
    this._switchBackTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchBackTimerInput() {
    return this._switchBackTimer;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      dataplan: cdktf.stringToTerraform(this._dataplan),
      disconnect: cdktf.stringToTerraform(this._disconnect),
      disconnect_period: cdktf.numberToTerraform(this._disconnectPeriod),
      disconnect_threshold: cdktf.numberToTerraform(this._disconnectThreshold),
      extender_profile: cdktf.stringToTerraform(this._extenderProfile),
      id: cdktf.stringToTerraform(this._id),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      signal: cdktf.stringToTerraform(this._signal),
      switch_back: cdktf.listMapper(cdktf.stringToTerraform, false)(this._switchBack),
      switch_back_time: cdktf.stringToTerraform(this._switchBackTime),
      switch_back_timer: cdktf.numberToTerraform(this._switchBackTimer),
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
      dataplan: {
        value: cdktf.stringToHclTerraform(this._dataplan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disconnect: {
        value: cdktf.stringToHclTerraform(this._disconnect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disconnect_period: {
        value: cdktf.numberToHclTerraform(this._disconnectPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disconnect_threshold: {
        value: cdktf.numberToHclTerraform(this._disconnectThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      extender_profile: {
        value: cdktf.stringToHclTerraform(this._extenderProfile),
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
      signal: {
        value: cdktf.stringToHclTerraform(this._signal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_back: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._switchBack),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      switch_back_time: {
        value: cdktf.stringToHclTerraform(this._switchBackTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_back_timer: {
        value: cdktf.numberToHclTerraform(this._switchBackTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
