// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_modem2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectExtensioncontrollerExtenderprofileCellularModem2AConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_modem2#adom ObjectExtensioncontrollerExtenderprofileCellularModem2A#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_modem2#conn_status ObjectExtensioncontrollerExtenderprofileCellularModem2A#conn_status}
  */
  readonly connStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_modem2#default_sim ObjectExtensioncontrollerExtenderprofileCellularModem2A#default_sim}
  */
  readonly defaultSim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_modem2#extender_profile ObjectExtensioncontrollerExtenderprofileCellularModem2A#extender_profile}
  */
  readonly extenderProfile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_modem2#gps ObjectExtensioncontrollerExtenderprofileCellularModem2A#gps}
  */
  readonly gps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_modem2#id ObjectExtensioncontrollerExtenderprofileCellularModem2A#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_modem2#modem_id ObjectExtensioncontrollerExtenderprofileCellularModem2A#modem_id}
  */
  readonly modemId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_modem2#multiple_pdn ObjectExtensioncontrollerExtenderprofileCellularModem2A#multiple_pdn}
  */
  readonly multiplePdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_modem2#pdn1_dataplan ObjectExtensioncontrollerExtenderprofileCellularModem2A#pdn1_dataplan}
  */
  readonly pdn1Dataplan?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_modem2#pdn2_dataplan ObjectExtensioncontrollerExtenderprofileCellularModem2A#pdn2_dataplan}
  */
  readonly pdn2Dataplan?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_modem2#pdn3_dataplan ObjectExtensioncontrollerExtenderprofileCellularModem2A#pdn3_dataplan}
  */
  readonly pdn3Dataplan?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_modem2#pdn4_dataplan ObjectExtensioncontrollerExtenderprofileCellularModem2A#pdn4_dataplan}
  */
  readonly pdn4Dataplan?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_modem2#preferred_carrier ObjectExtensioncontrollerExtenderprofileCellularModem2A#preferred_carrier}
  */
  readonly preferredCarrier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_modem2#redundant_intf ObjectExtensioncontrollerExtenderprofileCellularModem2A#redundant_intf}
  */
  readonly redundantIntf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_modem2#redundant_mode ObjectExtensioncontrollerExtenderprofileCellularModem2A#redundant_mode}
  */
  readonly redundantMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_modem2#scopetype ObjectExtensioncontrollerExtenderprofileCellularModem2A#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_modem2#sim1_pin ObjectExtensioncontrollerExtenderprofileCellularModem2A#sim1_pin}
  */
  readonly sim1Pin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_modem2#sim1_pin_code ObjectExtensioncontrollerExtenderprofileCellularModem2A#sim1_pin_code}
  */
  readonly sim1PinCode?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_modem2#sim2_pin ObjectExtensioncontrollerExtenderprofileCellularModem2A#sim2_pin}
  */
  readonly sim2Pin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_modem2#sim2_pin_code ObjectExtensioncontrollerExtenderprofileCellularModem2A#sim2_pin_code}
  */
  readonly sim2PinCode?: string[];
  /**
  * auto_switch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_modem2#auto_switch ObjectExtensioncontrollerExtenderprofileCellularModem2A#auto_switch}
  */
  readonly autoSwitch?: ObjectExtensioncontrollerExtenderprofileCellularModem2AutoSwitchA;
}
export interface ObjectExtensioncontrollerExtenderprofileCellularModem2AutoSwitchA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_modem2#dataplan ObjectExtensioncontrollerExtenderprofileCellularModem2A#dataplan}
  */
  readonly dataplan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_modem2#disconnect ObjectExtensioncontrollerExtenderprofileCellularModem2A#disconnect}
  */
  readonly disconnect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_modem2#disconnect_period ObjectExtensioncontrollerExtenderprofileCellularModem2A#disconnect_period}
  */
  readonly disconnectPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_modem2#disconnect_threshold ObjectExtensioncontrollerExtenderprofileCellularModem2A#disconnect_threshold}
  */
  readonly disconnectThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_modem2#signal ObjectExtensioncontrollerExtenderprofileCellularModem2A#signal}
  */
  readonly signal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_modem2#switch_back ObjectExtensioncontrollerExtenderprofileCellularModem2A#switch_back}
  */
  readonly switchBack?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_modem2#switch_back_time ObjectExtensioncontrollerExtenderprofileCellularModem2A#switch_back_time}
  */
  readonly switchBackTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_modem2#switch_back_timer ObjectExtensioncontrollerExtenderprofileCellularModem2A#switch_back_timer}
  */
  readonly switchBackTimer?: number;
}

export function objectExtensioncontrollerExtenderprofileCellularModem2AutoSwitchAToTerraform(struct?: ObjectExtensioncontrollerExtenderprofileCellularModem2AutoSwitchAOutputReference | ObjectExtensioncontrollerExtenderprofileCellularModem2AutoSwitchA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataplan: cdktf.stringToTerraform(struct!.dataplan),
    disconnect: cdktf.stringToTerraform(struct!.disconnect),
    disconnect_period: cdktf.numberToTerraform(struct!.disconnectPeriod),
    disconnect_threshold: cdktf.numberToTerraform(struct!.disconnectThreshold),
    signal: cdktf.stringToTerraform(struct!.signal),
    switch_back: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.switchBack),
    switch_back_time: cdktf.stringToTerraform(struct!.switchBackTime),
    switch_back_timer: cdktf.numberToTerraform(struct!.switchBackTimer),
  }
}


export function objectExtensioncontrollerExtenderprofileCellularModem2AutoSwitchAToHclTerraform(struct?: ObjectExtensioncontrollerExtenderprofileCellularModem2AutoSwitchAOutputReference | ObjectExtensioncontrollerExtenderprofileCellularModem2AutoSwitchA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataplan: {
      value: cdktf.stringToHclTerraform(struct!.dataplan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disconnect: {
      value: cdktf.stringToHclTerraform(struct!.disconnect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disconnect_period: {
      value: cdktf.numberToHclTerraform(struct!.disconnectPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disconnect_threshold: {
      value: cdktf.numberToHclTerraform(struct!.disconnectThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    signal: {
      value: cdktf.stringToHclTerraform(struct!.signal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_back: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.switchBack),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    switch_back_time: {
      value: cdktf.stringToHclTerraform(struct!.switchBackTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_back_timer: {
      value: cdktf.numberToHclTerraform(struct!.switchBackTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectExtensioncontrollerExtenderprofileCellularModem2AutoSwitchAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectExtensioncontrollerExtenderprofileCellularModem2AutoSwitchA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataplan !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataplan = this._dataplan;
    }
    if (this._disconnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.disconnect = this._disconnect;
    }
    if (this._disconnectPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.disconnectPeriod = this._disconnectPeriod;
    }
    if (this._disconnectThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.disconnectThreshold = this._disconnectThreshold;
    }
    if (this._signal !== undefined) {
      hasAnyValues = true;
      internalValueResult.signal = this._signal;
    }
    if (this._switchBack !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchBack = this._switchBack;
    }
    if (this._switchBackTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchBackTime = this._switchBackTime;
    }
    if (this._switchBackTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchBackTimer = this._switchBackTimer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectExtensioncontrollerExtenderprofileCellularModem2AutoSwitchA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataplan = undefined;
      this._disconnect = undefined;
      this._disconnectPeriod = undefined;
      this._disconnectThreshold = undefined;
      this._signal = undefined;
      this._switchBack = undefined;
      this._switchBackTime = undefined;
      this._switchBackTimer = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataplan = value.dataplan;
      this._disconnect = value.disconnect;
      this._disconnectPeriod = value.disconnectPeriod;
      this._disconnectThreshold = value.disconnectThreshold;
      this._signal = value.signal;
      this._switchBack = value.switchBack;
      this._switchBackTime = value.switchBackTime;
      this._switchBackTimer = value.switchBackTimer;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_modem2 fortimanager_object_extensioncontroller_extenderprofile_cellular_modem2}
*/
export class ObjectExtensioncontrollerExtenderprofileCellularModem2A extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_extensioncontroller_extenderprofile_cellular_modem2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectExtensioncontrollerExtenderprofileCellularModem2A resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectExtensioncontrollerExtenderprofileCellularModem2A to import
  * @param importFromId The id of the existing ObjectExtensioncontrollerExtenderprofileCellularModem2A that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_modem2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectExtensioncontrollerExtenderprofileCellularModem2A to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_extensioncontroller_extenderprofile_cellular_modem2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_modem2 fortimanager_object_extensioncontroller_extenderprofile_cellular_modem2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectExtensioncontrollerExtenderprofileCellularModem2AConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectExtensioncontrollerExtenderprofileCellularModem2AConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_extensioncontroller_extenderprofile_cellular_modem2',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
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
    this._connStatus = config.connStatus;
    this._defaultSim = config.defaultSim;
    this._extenderProfile = config.extenderProfile;
    this._gps = config.gps;
    this._id = config.id;
    this._modemId = config.modemId;
    this._multiplePdn = config.multiplePdn;
    this._pdn1Dataplan = config.pdn1Dataplan;
    this._pdn2Dataplan = config.pdn2Dataplan;
    this._pdn3Dataplan = config.pdn3Dataplan;
    this._pdn4Dataplan = config.pdn4Dataplan;
    this._preferredCarrier = config.preferredCarrier;
    this._redundantIntf = config.redundantIntf;
    this._redundantMode = config.redundantMode;
    this._scopetype = config.scopetype;
    this._sim1Pin = config.sim1Pin;
    this._sim1PinCode = config.sim1PinCode;
    this._sim2Pin = config.sim2Pin;
    this._sim2PinCode = config.sim2PinCode;
    this._autoSwitch.internalValue = config.autoSwitch;
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

  // conn_status - computed: false, optional: true, required: false
  private _connStatus?: number; 
  public get connStatus() {
    return this.getNumberAttribute('conn_status');
  }
  public set connStatus(value: number) {
    this._connStatus = value;
  }
  public resetConnStatus() {
    this._connStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connStatusInput() {
    return this._connStatus;
  }

  // default_sim - computed: true, optional: true, required: false
  private _defaultSim?: string; 
  public get defaultSim() {
    return this.getStringAttribute('default_sim');
  }
  public set defaultSim(value: string) {
    this._defaultSim = value;
  }
  public resetDefaultSim() {
    this._defaultSim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSimInput() {
    return this._defaultSim;
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

  // gps - computed: true, optional: true, required: false
  private _gps?: string; 
  public get gps() {
    return this.getStringAttribute('gps');
  }
  public set gps(value: string) {
    this._gps = value;
  }
  public resetGps() {
    this._gps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpsInput() {
    return this._gps;
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

  // modem_id - computed: true, optional: true, required: false
  private _modemId?: number; 
  public get modemId() {
    return this.getNumberAttribute('modem_id');
  }
  public set modemId(value: number) {
    this._modemId = value;
  }
  public resetModemId() {
    this._modemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modemIdInput() {
    return this._modemId;
  }

  // multiple_pdn - computed: false, optional: true, required: false
  private _multiplePdn?: string; 
  public get multiplePdn() {
    return this.getStringAttribute('multiple_pdn');
  }
  public set multiplePdn(value: string) {
    this._multiplePdn = value;
  }
  public resetMultiplePdn() {
    this._multiplePdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplePdnInput() {
    return this._multiplePdn;
  }

  // pdn1_dataplan - computed: true, optional: true, required: false
  private _pdn1Dataplan?: string[]; 
  public get pdn1Dataplan() {
    return cdktf.Fn.tolist(this.getListAttribute('pdn1_dataplan'));
  }
  public set pdn1Dataplan(value: string[]) {
    this._pdn1Dataplan = value;
  }
  public resetPdn1Dataplan() {
    this._pdn1Dataplan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdn1DataplanInput() {
    return this._pdn1Dataplan;
  }

  // pdn2_dataplan - computed: true, optional: true, required: false
  private _pdn2Dataplan?: string[]; 
  public get pdn2Dataplan() {
    return cdktf.Fn.tolist(this.getListAttribute('pdn2_dataplan'));
  }
  public set pdn2Dataplan(value: string[]) {
    this._pdn2Dataplan = value;
  }
  public resetPdn2Dataplan() {
    this._pdn2Dataplan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdn2DataplanInput() {
    return this._pdn2Dataplan;
  }

  // pdn3_dataplan - computed: true, optional: true, required: false
  private _pdn3Dataplan?: string[]; 
  public get pdn3Dataplan() {
    return cdktf.Fn.tolist(this.getListAttribute('pdn3_dataplan'));
  }
  public set pdn3Dataplan(value: string[]) {
    this._pdn3Dataplan = value;
  }
  public resetPdn3Dataplan() {
    this._pdn3Dataplan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdn3DataplanInput() {
    return this._pdn3Dataplan;
  }

  // pdn4_dataplan - computed: true, optional: true, required: false
  private _pdn4Dataplan?: string[]; 
  public get pdn4Dataplan() {
    return cdktf.Fn.tolist(this.getListAttribute('pdn4_dataplan'));
  }
  public set pdn4Dataplan(value: string[]) {
    this._pdn4Dataplan = value;
  }
  public resetPdn4Dataplan() {
    this._pdn4Dataplan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdn4DataplanInput() {
    return this._pdn4Dataplan;
  }

  // preferred_carrier - computed: false, optional: true, required: false
  private _preferredCarrier?: string; 
  public get preferredCarrier() {
    return this.getStringAttribute('preferred_carrier');
  }
  public set preferredCarrier(value: string) {
    this._preferredCarrier = value;
  }
  public resetPreferredCarrier() {
    this._preferredCarrier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredCarrierInput() {
    return this._preferredCarrier;
  }

  // redundant_intf - computed: false, optional: true, required: false
  private _redundantIntf?: string; 
  public get redundantIntf() {
    return this.getStringAttribute('redundant_intf');
  }
  public set redundantIntf(value: string) {
    this._redundantIntf = value;
  }
  public resetRedundantIntf() {
    this._redundantIntf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redundantIntfInput() {
    return this._redundantIntf;
  }

  // redundant_mode - computed: true, optional: true, required: false
  private _redundantMode?: string; 
  public get redundantMode() {
    return this.getStringAttribute('redundant_mode');
  }
  public set redundantMode(value: string) {
    this._redundantMode = value;
  }
  public resetRedundantMode() {
    this._redundantMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redundantModeInput() {
    return this._redundantMode;
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

  // sim1_pin - computed: true, optional: true, required: false
  private _sim1Pin?: string; 
  public get sim1Pin() {
    return this.getStringAttribute('sim1_pin');
  }
  public set sim1Pin(value: string) {
    this._sim1Pin = value;
  }
  public resetSim1Pin() {
    this._sim1Pin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sim1PinInput() {
    return this._sim1Pin;
  }

  // sim1_pin_code - computed: true, optional: true, required: false
  private _sim1PinCode?: string[]; 
  public get sim1PinCode() {
    return cdktf.Fn.tolist(this.getListAttribute('sim1_pin_code'));
  }
  public set sim1PinCode(value: string[]) {
    this._sim1PinCode = value;
  }
  public resetSim1PinCode() {
    this._sim1PinCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sim1PinCodeInput() {
    return this._sim1PinCode;
  }

  // sim2_pin - computed: true, optional: true, required: false
  private _sim2Pin?: string; 
  public get sim2Pin() {
    return this.getStringAttribute('sim2_pin');
  }
  public set sim2Pin(value: string) {
    this._sim2Pin = value;
  }
  public resetSim2Pin() {
    this._sim2Pin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sim2PinInput() {
    return this._sim2Pin;
  }

  // sim2_pin_code - computed: true, optional: true, required: false
  private _sim2PinCode?: string[]; 
  public get sim2PinCode() {
    return cdktf.Fn.tolist(this.getListAttribute('sim2_pin_code'));
  }
  public set sim2PinCode(value: string[]) {
    this._sim2PinCode = value;
  }
  public resetSim2PinCode() {
    this._sim2PinCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sim2PinCodeInput() {
    return this._sim2PinCode;
  }

  // auto_switch - computed: false, optional: true, required: false
  private _autoSwitch = new ObjectExtensioncontrollerExtenderprofileCellularModem2AutoSwitchAOutputReference(this, "auto_switch");
  public get autoSwitch() {
    return this._autoSwitch;
  }
  public putAutoSwitch(value: ObjectExtensioncontrollerExtenderprofileCellularModem2AutoSwitchA) {
    this._autoSwitch.internalValue = value;
  }
  public resetAutoSwitch() {
    this._autoSwitch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSwitchInput() {
    return this._autoSwitch.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      conn_status: cdktf.numberToTerraform(this._connStatus),
      default_sim: cdktf.stringToTerraform(this._defaultSim),
      extender_profile: cdktf.stringToTerraform(this._extenderProfile),
      gps: cdktf.stringToTerraform(this._gps),
      id: cdktf.stringToTerraform(this._id),
      modem_id: cdktf.numberToTerraform(this._modemId),
      multiple_pdn: cdktf.stringToTerraform(this._multiplePdn),
      pdn1_dataplan: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pdn1Dataplan),
      pdn2_dataplan: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pdn2Dataplan),
      pdn3_dataplan: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pdn3Dataplan),
      pdn4_dataplan: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pdn4Dataplan),
      preferred_carrier: cdktf.stringToTerraform(this._preferredCarrier),
      redundant_intf: cdktf.stringToTerraform(this._redundantIntf),
      redundant_mode: cdktf.stringToTerraform(this._redundantMode),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      sim1_pin: cdktf.stringToTerraform(this._sim1Pin),
      sim1_pin_code: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sim1PinCode),
      sim2_pin: cdktf.stringToTerraform(this._sim2Pin),
      sim2_pin_code: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sim2PinCode),
      auto_switch: objectExtensioncontrollerExtenderprofileCellularModem2AutoSwitchAToTerraform(this._autoSwitch.internalValue),
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
      conn_status: {
        value: cdktf.numberToHclTerraform(this._connStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_sim: {
        value: cdktf.stringToHclTerraform(this._defaultSim),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extender_profile: {
        value: cdktf.stringToHclTerraform(this._extenderProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gps: {
        value: cdktf.stringToHclTerraform(this._gps),
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
      modem_id: {
        value: cdktf.numberToHclTerraform(this._modemId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multiple_pdn: {
        value: cdktf.stringToHclTerraform(this._multiplePdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pdn1_dataplan: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pdn1Dataplan),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      pdn2_dataplan: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pdn2Dataplan),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      pdn3_dataplan: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pdn3Dataplan),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      pdn4_dataplan: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pdn4Dataplan),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      preferred_carrier: {
        value: cdktf.stringToHclTerraform(this._preferredCarrier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redundant_intf: {
        value: cdktf.stringToHclTerraform(this._redundantIntf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redundant_mode: {
        value: cdktf.stringToHclTerraform(this._redundantMode),
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
      sim1_pin: {
        value: cdktf.stringToHclTerraform(this._sim1Pin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sim1_pin_code: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sim1PinCode),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sim2_pin: {
        value: cdktf.stringToHclTerraform(this._sim2Pin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sim2_pin_code: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sim2PinCode),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      auto_switch: {
        value: objectExtensioncontrollerExtenderprofileCellularModem2AutoSwitchAToHclTerraform(this._autoSwitch.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectExtensioncontrollerExtenderprofileCellularModem2AutoSwitchAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
