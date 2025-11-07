// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_sim_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectExtendercontrollerSimProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_sim_profile#adom ObjectExtendercontrollerSimProfile#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_sim_profile#conn_status ObjectExtendercontrollerSimProfile#conn_status}
  */
  readonly connStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_sim_profile#default_sim ObjectExtendercontrollerSimProfile#default_sim}
  */
  readonly defaultSim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_sim_profile#description ObjectExtendercontrollerSimProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_sim_profile#gps ObjectExtendercontrollerSimProfile#gps}
  */
  readonly gps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_sim_profile#id ObjectExtendercontrollerSimProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_sim_profile#modem_id ObjectExtendercontrollerSimProfile#modem_id}
  */
  readonly modemId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_sim_profile#name ObjectExtendercontrollerSimProfile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_sim_profile#preferred_carrier ObjectExtendercontrollerSimProfile#preferred_carrier}
  */
  readonly preferredCarrier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_sim_profile#redundant_intf ObjectExtendercontrollerSimProfile#redundant_intf}
  */
  readonly redundantIntf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_sim_profile#redundant_mode ObjectExtendercontrollerSimProfile#redundant_mode}
  */
  readonly redundantMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_sim_profile#scopetype ObjectExtendercontrollerSimProfile#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_sim_profile#sim1_pin ObjectExtendercontrollerSimProfile#sim1_pin}
  */
  readonly sim1Pin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_sim_profile#sim1_pin_code ObjectExtendercontrollerSimProfile#sim1_pin_code}
  */
  readonly sim1PinCode?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_sim_profile#sim2_pin ObjectExtendercontrollerSimProfile#sim2_pin}
  */
  readonly sim2Pin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_sim_profile#sim2_pin_code ObjectExtendercontrollerSimProfile#sim2_pin_code}
  */
  readonly sim2PinCode?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_sim_profile#status ObjectExtendercontrollerSimProfile#status}
  */
  readonly status?: string;
  /**
  * auto_switch_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_sim_profile#auto_switch_profile ObjectExtendercontrollerSimProfile#auto_switch_profile}
  */
  readonly autoSwitchProfile?: ObjectExtendercontrollerSimProfileAutoSwitchProfile;
}
export interface ObjectExtendercontrollerSimProfileAutoSwitchProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_sim_profile#dataplan ObjectExtendercontrollerSimProfile#dataplan}
  */
  readonly dataplan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_sim_profile#disconnect ObjectExtendercontrollerSimProfile#disconnect}
  */
  readonly disconnect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_sim_profile#disconnect_period ObjectExtendercontrollerSimProfile#disconnect_period}
  */
  readonly disconnectPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_sim_profile#disconnect_threshold ObjectExtendercontrollerSimProfile#disconnect_threshold}
  */
  readonly disconnectThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_sim_profile#signal ObjectExtendercontrollerSimProfile#signal}
  */
  readonly signal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_sim_profile#status ObjectExtendercontrollerSimProfile#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_sim_profile#switch_back ObjectExtendercontrollerSimProfile#switch_back}
  */
  readonly switchBack?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_sim_profile#switch_back_time ObjectExtendercontrollerSimProfile#switch_back_time}
  */
  readonly switchBackTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_sim_profile#switch_back_timer ObjectExtendercontrollerSimProfile#switch_back_timer}
  */
  readonly switchBackTimer?: number;
}

export function objectExtendercontrollerSimProfileAutoSwitchProfileToTerraform(struct?: ObjectExtendercontrollerSimProfileAutoSwitchProfileOutputReference | ObjectExtendercontrollerSimProfileAutoSwitchProfile): any {
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
    status: cdktf.stringToTerraform(struct!.status),
    switch_back: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.switchBack),
    switch_back_time: cdktf.stringToTerraform(struct!.switchBackTime),
    switch_back_timer: cdktf.numberToTerraform(struct!.switchBackTimer),
  }
}


export function objectExtendercontrollerSimProfileAutoSwitchProfileToHclTerraform(struct?: ObjectExtendercontrollerSimProfileAutoSwitchProfileOutputReference | ObjectExtendercontrollerSimProfileAutoSwitchProfile): any {
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
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
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

export class ObjectExtendercontrollerSimProfileAutoSwitchProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectExtendercontrollerSimProfileAutoSwitchProfile | undefined {
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
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
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

  public set internalValue(value: ObjectExtendercontrollerSimProfileAutoSwitchProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataplan = undefined;
      this._disconnect = undefined;
      this._disconnectPeriod = undefined;
      this._disconnectThreshold = undefined;
      this._signal = undefined;
      this._status = undefined;
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
      this._status = value.status;
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

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_sim_profile fortimanager_object_extendercontroller_sim_profile}
*/
export class ObjectExtendercontrollerSimProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_extendercontroller_sim_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectExtendercontrollerSimProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectExtendercontrollerSimProfile to import
  * @param importFromId The id of the existing ObjectExtendercontrollerSimProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_sim_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectExtendercontrollerSimProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_extendercontroller_sim_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_sim_profile fortimanager_object_extendercontroller_sim_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectExtendercontrollerSimProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectExtendercontrollerSimProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_extendercontroller_sim_profile',
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
    this._description = config.description;
    this._gps = config.gps;
    this._id = config.id;
    this._modemId = config.modemId;
    this._name = config.name;
    this._preferredCarrier = config.preferredCarrier;
    this._redundantIntf = config.redundantIntf;
    this._redundantMode = config.redundantMode;
    this._scopetype = config.scopetype;
    this._sim1Pin = config.sim1Pin;
    this._sim1PinCode = config.sim1PinCode;
    this._sim2Pin = config.sim2Pin;
    this._sim2PinCode = config.sim2PinCode;
    this._status = config.status;
    this._autoSwitchProfile.internalValue = config.autoSwitchProfile;
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

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // modem_id - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
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

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // auto_switch_profile - computed: false, optional: true, required: false
  private _autoSwitchProfile = new ObjectExtendercontrollerSimProfileAutoSwitchProfileOutputReference(this, "auto_switch_profile");
  public get autoSwitchProfile() {
    return this._autoSwitchProfile;
  }
  public putAutoSwitchProfile(value: ObjectExtendercontrollerSimProfileAutoSwitchProfile) {
    this._autoSwitchProfile.internalValue = value;
  }
  public resetAutoSwitchProfile() {
    this._autoSwitchProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSwitchProfileInput() {
    return this._autoSwitchProfile.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      conn_status: cdktf.numberToTerraform(this._connStatus),
      default_sim: cdktf.stringToTerraform(this._defaultSim),
      description: cdktf.stringToTerraform(this._description),
      gps: cdktf.stringToTerraform(this._gps),
      id: cdktf.stringToTerraform(this._id),
      modem_id: cdktf.numberToTerraform(this._modemId),
      name: cdktf.stringToTerraform(this._name),
      preferred_carrier: cdktf.stringToTerraform(this._preferredCarrier),
      redundant_intf: cdktf.stringToTerraform(this._redundantIntf),
      redundant_mode: cdktf.stringToTerraform(this._redundantMode),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      sim1_pin: cdktf.stringToTerraform(this._sim1Pin),
      sim1_pin_code: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sim1PinCode),
      sim2_pin: cdktf.stringToTerraform(this._sim2Pin),
      sim2_pin_code: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sim2PinCode),
      status: cdktf.stringToTerraform(this._status),
      auto_switch_profile: objectExtendercontrollerSimProfileAutoSwitchProfileToTerraform(this._autoSwitchProfile.internalValue),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_switch_profile: {
        value: objectExtendercontrollerSimProfileAutoSwitchProfileToHclTerraform(this._autoSwitchProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectExtendercontrollerSimProfileAutoSwitchProfileList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
