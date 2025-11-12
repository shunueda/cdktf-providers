// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExtendercontrollerExtender1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#authorized ExtendercontrollerExtender1#authorized}
  */
  readonly authorized: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#description ExtendercontrollerExtender1#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#ext_name ExtendercontrollerExtender1#ext_name}
  */
  readonly extName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#fosid ExtendercontrollerExtender1#fosid}
  */
  readonly fosid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#get_all_tables ExtendercontrollerExtender1#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#id ExtendercontrollerExtender1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#login_password ExtendercontrollerExtender1#login_password}
  */
  readonly loginPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#name ExtendercontrollerExtender1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#vdom ExtendercontrollerExtender1#vdom}
  */
  readonly vdom?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#vdomparam ExtendercontrollerExtender1#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * controller_report block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#controller_report ExtendercontrollerExtender1#controller_report}
  */
  readonly controllerReport?: ExtendercontrollerExtender1ControllerReport;
  /**
  * modem1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#modem1 ExtendercontrollerExtender1#modem1}
  */
  readonly modem1?: ExtendercontrollerExtender1Modem1;
  /**
  * modem2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#modem2 ExtendercontrollerExtender1#modem2}
  */
  readonly modem2?: ExtendercontrollerExtender1Modem2;
}
export interface ExtendercontrollerExtender1ControllerReport {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#interval ExtendercontrollerExtender1#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#signal_threshold ExtendercontrollerExtender1#signal_threshold}
  */
  readonly signalThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#status ExtendercontrollerExtender1#status}
  */
  readonly status?: string;
}

export function extendercontrollerExtender1ControllerReportToTerraform(struct?: ExtendercontrollerExtender1ControllerReportOutputReference | ExtendercontrollerExtender1ControllerReport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    signal_threshold: cdktf.numberToTerraform(struct!.signalThreshold),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function extendercontrollerExtender1ControllerReportToHclTerraform(struct?: ExtendercontrollerExtender1ControllerReportOutputReference | ExtendercontrollerExtender1ControllerReport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    signal_threshold: {
      value: cdktf.numberToHclTerraform(struct!.signalThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExtendercontrollerExtender1ControllerReportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExtendercontrollerExtender1ControllerReport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._signalThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.signalThreshold = this._signalThreshold;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExtendercontrollerExtender1ControllerReport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._signalThreshold = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._signalThreshold = value.signalThreshold;
      this._status = value.status;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // signal_threshold - computed: false, optional: true, required: false
  private _signalThreshold?: number; 
  public get signalThreshold() {
    return this.getNumberAttribute('signal_threshold');
  }
  public set signalThreshold(value: number) {
    this._signalThreshold = value;
  }
  public resetSignalThreshold() {
    this._signalThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signalThresholdInput() {
    return this._signalThreshold;
  }

  // status - computed: false, optional: true, required: false
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
}
export interface ExtendercontrollerExtender1Modem1AutoSwitch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#dataplan ExtendercontrollerExtender1#dataplan}
  */
  readonly dataplan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#disconnect ExtendercontrollerExtender1#disconnect}
  */
  readonly disconnect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#disconnect_period ExtendercontrollerExtender1#disconnect_period}
  */
  readonly disconnectPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#disconnect_threshold ExtendercontrollerExtender1#disconnect_threshold}
  */
  readonly disconnectThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#signal ExtendercontrollerExtender1#signal}
  */
  readonly signal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#switch_back ExtendercontrollerExtender1#switch_back}
  */
  readonly switchBack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#switch_back_time ExtendercontrollerExtender1#switch_back_time}
  */
  readonly switchBackTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#switch_back_timer ExtendercontrollerExtender1#switch_back_timer}
  */
  readonly switchBackTimer?: number;
}

export function extendercontrollerExtender1Modem1AutoSwitchToTerraform(struct?: ExtendercontrollerExtender1Modem1AutoSwitchOutputReference | ExtendercontrollerExtender1Modem1AutoSwitch): any {
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
    switch_back: cdktf.stringToTerraform(struct!.switchBack),
    switch_back_time: cdktf.stringToTerraform(struct!.switchBackTime),
    switch_back_timer: cdktf.numberToTerraform(struct!.switchBackTimer),
  }
}


export function extendercontrollerExtender1Modem1AutoSwitchToHclTerraform(struct?: ExtendercontrollerExtender1Modem1AutoSwitchOutputReference | ExtendercontrollerExtender1Modem1AutoSwitch): any {
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
      value: cdktf.stringToHclTerraform(struct!.switchBack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class ExtendercontrollerExtender1Modem1AutoSwitchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExtendercontrollerExtender1Modem1AutoSwitch | undefined {
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

  public set internalValue(value: ExtendercontrollerExtender1Modem1AutoSwitch | undefined) {
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

  // dataplan - computed: false, optional: true, required: false
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

  // disconnect - computed: false, optional: true, required: false
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

  // disconnect_period - computed: false, optional: true, required: false
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

  // disconnect_threshold - computed: false, optional: true, required: false
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

  // signal - computed: false, optional: true, required: false
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

  // switch_back - computed: false, optional: true, required: false
  private _switchBack?: string; 
  public get switchBack() {
    return this.getStringAttribute('switch_back');
  }
  public set switchBack(value: string) {
    this._switchBack = value;
  }
  public resetSwitchBack() {
    this._switchBack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchBackInput() {
    return this._switchBack;
  }

  // switch_back_time - computed: false, optional: true, required: false
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

  // switch_back_timer - computed: false, optional: true, required: false
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
export interface ExtendercontrollerExtender1Modem1 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#conn_status ExtendercontrollerExtender1#conn_status}
  */
  readonly connStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#default_sim ExtendercontrollerExtender1#default_sim}
  */
  readonly defaultSim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#gps ExtendercontrollerExtender1#gps}
  */
  readonly gps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#ifname ExtendercontrollerExtender1#ifname}
  */
  readonly ifname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#preferred_carrier ExtendercontrollerExtender1#preferred_carrier}
  */
  readonly preferredCarrier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#redundant_intf ExtendercontrollerExtender1#redundant_intf}
  */
  readonly redundantIntf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#redundant_mode ExtendercontrollerExtender1#redundant_mode}
  */
  readonly redundantMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#sim1_pin ExtendercontrollerExtender1#sim1_pin}
  */
  readonly sim1Pin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#sim1_pin_code ExtendercontrollerExtender1#sim1_pin_code}
  */
  readonly sim1PinCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#sim2_pin ExtendercontrollerExtender1#sim2_pin}
  */
  readonly sim2Pin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#sim2_pin_code ExtendercontrollerExtender1#sim2_pin_code}
  */
  readonly sim2PinCode?: string;
  /**
  * auto_switch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#auto_switch ExtendercontrollerExtender1#auto_switch}
  */
  readonly autoSwitch?: ExtendercontrollerExtender1Modem1AutoSwitch;
}

export function extendercontrollerExtender1Modem1ToTerraform(struct?: ExtendercontrollerExtender1Modem1OutputReference | ExtendercontrollerExtender1Modem1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conn_status: cdktf.numberToTerraform(struct!.connStatus),
    default_sim: cdktf.stringToTerraform(struct!.defaultSim),
    gps: cdktf.stringToTerraform(struct!.gps),
    ifname: cdktf.stringToTerraform(struct!.ifname),
    preferred_carrier: cdktf.stringToTerraform(struct!.preferredCarrier),
    redundant_intf: cdktf.stringToTerraform(struct!.redundantIntf),
    redundant_mode: cdktf.stringToTerraform(struct!.redundantMode),
    sim1_pin: cdktf.stringToTerraform(struct!.sim1Pin),
    sim1_pin_code: cdktf.stringToTerraform(struct!.sim1PinCode),
    sim2_pin: cdktf.stringToTerraform(struct!.sim2Pin),
    sim2_pin_code: cdktf.stringToTerraform(struct!.sim2PinCode),
    auto_switch: extendercontrollerExtender1Modem1AutoSwitchToTerraform(struct!.autoSwitch),
  }
}


export function extendercontrollerExtender1Modem1ToHclTerraform(struct?: ExtendercontrollerExtender1Modem1OutputReference | ExtendercontrollerExtender1Modem1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conn_status: {
      value: cdktf.numberToHclTerraform(struct!.connStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_sim: {
      value: cdktf.stringToHclTerraform(struct!.defaultSim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gps: {
      value: cdktf.stringToHclTerraform(struct!.gps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ifname: {
      value: cdktf.stringToHclTerraform(struct!.ifname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferred_carrier: {
      value: cdktf.stringToHclTerraform(struct!.preferredCarrier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redundant_intf: {
      value: cdktf.stringToHclTerraform(struct!.redundantIntf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redundant_mode: {
      value: cdktf.stringToHclTerraform(struct!.redundantMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sim1_pin: {
      value: cdktf.stringToHclTerraform(struct!.sim1Pin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sim1_pin_code: {
      value: cdktf.stringToHclTerraform(struct!.sim1PinCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sim2_pin: {
      value: cdktf.stringToHclTerraform(struct!.sim2Pin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sim2_pin_code: {
      value: cdktf.stringToHclTerraform(struct!.sim2PinCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_switch: {
      value: extendercontrollerExtender1Modem1AutoSwitchToHclTerraform(struct!.autoSwitch),
      isBlock: true,
      type: "list",
      storageClassType: "ExtendercontrollerExtender1Modem1AutoSwitchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExtendercontrollerExtender1Modem1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExtendercontrollerExtender1Modem1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.connStatus = this._connStatus;
    }
    if (this._defaultSim !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSim = this._defaultSim;
    }
    if (this._gps !== undefined) {
      hasAnyValues = true;
      internalValueResult.gps = this._gps;
    }
    if (this._ifname !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifname = this._ifname;
    }
    if (this._preferredCarrier !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredCarrier = this._preferredCarrier;
    }
    if (this._redundantIntf !== undefined) {
      hasAnyValues = true;
      internalValueResult.redundantIntf = this._redundantIntf;
    }
    if (this._redundantMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.redundantMode = this._redundantMode;
    }
    if (this._sim1Pin !== undefined) {
      hasAnyValues = true;
      internalValueResult.sim1Pin = this._sim1Pin;
    }
    if (this._sim1PinCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sim1PinCode = this._sim1PinCode;
    }
    if (this._sim2Pin !== undefined) {
      hasAnyValues = true;
      internalValueResult.sim2Pin = this._sim2Pin;
    }
    if (this._sim2PinCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sim2PinCode = this._sim2PinCode;
    }
    if (this._autoSwitch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoSwitch = this._autoSwitch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExtendercontrollerExtender1Modem1 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connStatus = undefined;
      this._defaultSim = undefined;
      this._gps = undefined;
      this._ifname = undefined;
      this._preferredCarrier = undefined;
      this._redundantIntf = undefined;
      this._redundantMode = undefined;
      this._sim1Pin = undefined;
      this._sim1PinCode = undefined;
      this._sim2Pin = undefined;
      this._sim2PinCode = undefined;
      this._autoSwitch.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connStatus = value.connStatus;
      this._defaultSim = value.defaultSim;
      this._gps = value.gps;
      this._ifname = value.ifname;
      this._preferredCarrier = value.preferredCarrier;
      this._redundantIntf = value.redundantIntf;
      this._redundantMode = value.redundantMode;
      this._sim1Pin = value.sim1Pin;
      this._sim1PinCode = value.sim1PinCode;
      this._sim2Pin = value.sim2Pin;
      this._sim2PinCode = value.sim2PinCode;
      this._autoSwitch.internalValue = value.autoSwitch;
    }
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

  // default_sim - computed: false, optional: true, required: false
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

  // gps - computed: false, optional: true, required: false
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

  // ifname - computed: false, optional: true, required: false
  private _ifname?: string; 
  public get ifname() {
    return this.getStringAttribute('ifname');
  }
  public set ifname(value: string) {
    this._ifname = value;
  }
  public resetIfname() {
    this._ifname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifnameInput() {
    return this._ifname;
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

  // redundant_mode - computed: false, optional: true, required: false
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

  // sim1_pin - computed: false, optional: true, required: false
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

  // sim1_pin_code - computed: false, optional: true, required: false
  private _sim1PinCode?: string; 
  public get sim1PinCode() {
    return this.getStringAttribute('sim1_pin_code');
  }
  public set sim1PinCode(value: string) {
    this._sim1PinCode = value;
  }
  public resetSim1PinCode() {
    this._sim1PinCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sim1PinCodeInput() {
    return this._sim1PinCode;
  }

  // sim2_pin - computed: false, optional: true, required: false
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

  // sim2_pin_code - computed: false, optional: true, required: false
  private _sim2PinCode?: string; 
  public get sim2PinCode() {
    return this.getStringAttribute('sim2_pin_code');
  }
  public set sim2PinCode(value: string) {
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
  private _autoSwitch = new ExtendercontrollerExtender1Modem1AutoSwitchOutputReference(this, "auto_switch");
  public get autoSwitch() {
    return this._autoSwitch;
  }
  public putAutoSwitch(value: ExtendercontrollerExtender1Modem1AutoSwitch) {
    this._autoSwitch.internalValue = value;
  }
  public resetAutoSwitch() {
    this._autoSwitch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSwitchInput() {
    return this._autoSwitch.internalValue;
  }
}
export interface ExtendercontrollerExtender1Modem2AutoSwitch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#dataplan ExtendercontrollerExtender1#dataplan}
  */
  readonly dataplan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#disconnect ExtendercontrollerExtender1#disconnect}
  */
  readonly disconnect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#disconnect_period ExtendercontrollerExtender1#disconnect_period}
  */
  readonly disconnectPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#disconnect_threshold ExtendercontrollerExtender1#disconnect_threshold}
  */
  readonly disconnectThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#signal ExtendercontrollerExtender1#signal}
  */
  readonly signal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#switch_back ExtendercontrollerExtender1#switch_back}
  */
  readonly switchBack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#switch_back_time ExtendercontrollerExtender1#switch_back_time}
  */
  readonly switchBackTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#switch_back_timer ExtendercontrollerExtender1#switch_back_timer}
  */
  readonly switchBackTimer?: number;
}

export function extendercontrollerExtender1Modem2AutoSwitchToTerraform(struct?: ExtendercontrollerExtender1Modem2AutoSwitchOutputReference | ExtendercontrollerExtender1Modem2AutoSwitch): any {
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
    switch_back: cdktf.stringToTerraform(struct!.switchBack),
    switch_back_time: cdktf.stringToTerraform(struct!.switchBackTime),
    switch_back_timer: cdktf.numberToTerraform(struct!.switchBackTimer),
  }
}


export function extendercontrollerExtender1Modem2AutoSwitchToHclTerraform(struct?: ExtendercontrollerExtender1Modem2AutoSwitchOutputReference | ExtendercontrollerExtender1Modem2AutoSwitch): any {
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
      value: cdktf.stringToHclTerraform(struct!.switchBack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class ExtendercontrollerExtender1Modem2AutoSwitchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExtendercontrollerExtender1Modem2AutoSwitch | undefined {
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

  public set internalValue(value: ExtendercontrollerExtender1Modem2AutoSwitch | undefined) {
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

  // dataplan - computed: false, optional: true, required: false
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

  // disconnect - computed: false, optional: true, required: false
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

  // disconnect_period - computed: false, optional: true, required: false
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

  // disconnect_threshold - computed: false, optional: true, required: false
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

  // signal - computed: false, optional: true, required: false
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

  // switch_back - computed: false, optional: true, required: false
  private _switchBack?: string; 
  public get switchBack() {
    return this.getStringAttribute('switch_back');
  }
  public set switchBack(value: string) {
    this._switchBack = value;
  }
  public resetSwitchBack() {
    this._switchBack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchBackInput() {
    return this._switchBack;
  }

  // switch_back_time - computed: false, optional: true, required: false
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

  // switch_back_timer - computed: false, optional: true, required: false
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
export interface ExtendercontrollerExtender1Modem2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#conn_status ExtendercontrollerExtender1#conn_status}
  */
  readonly connStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#default_sim ExtendercontrollerExtender1#default_sim}
  */
  readonly defaultSim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#gps ExtendercontrollerExtender1#gps}
  */
  readonly gps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#ifname ExtendercontrollerExtender1#ifname}
  */
  readonly ifname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#preferred_carrier ExtendercontrollerExtender1#preferred_carrier}
  */
  readonly preferredCarrier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#redundant_intf ExtendercontrollerExtender1#redundant_intf}
  */
  readonly redundantIntf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#redundant_mode ExtendercontrollerExtender1#redundant_mode}
  */
  readonly redundantMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#sim1_pin ExtendercontrollerExtender1#sim1_pin}
  */
  readonly sim1Pin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#sim1_pin_code ExtendercontrollerExtender1#sim1_pin_code}
  */
  readonly sim1PinCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#sim2_pin ExtendercontrollerExtender1#sim2_pin}
  */
  readonly sim2Pin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#sim2_pin_code ExtendercontrollerExtender1#sim2_pin_code}
  */
  readonly sim2PinCode?: string;
  /**
  * auto_switch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#auto_switch ExtendercontrollerExtender1#auto_switch}
  */
  readonly autoSwitch?: ExtendercontrollerExtender1Modem2AutoSwitch;
}

export function extendercontrollerExtender1Modem2ToTerraform(struct?: ExtendercontrollerExtender1Modem2OutputReference | ExtendercontrollerExtender1Modem2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conn_status: cdktf.numberToTerraform(struct!.connStatus),
    default_sim: cdktf.stringToTerraform(struct!.defaultSim),
    gps: cdktf.stringToTerraform(struct!.gps),
    ifname: cdktf.stringToTerraform(struct!.ifname),
    preferred_carrier: cdktf.stringToTerraform(struct!.preferredCarrier),
    redundant_intf: cdktf.stringToTerraform(struct!.redundantIntf),
    redundant_mode: cdktf.stringToTerraform(struct!.redundantMode),
    sim1_pin: cdktf.stringToTerraform(struct!.sim1Pin),
    sim1_pin_code: cdktf.stringToTerraform(struct!.sim1PinCode),
    sim2_pin: cdktf.stringToTerraform(struct!.sim2Pin),
    sim2_pin_code: cdktf.stringToTerraform(struct!.sim2PinCode),
    auto_switch: extendercontrollerExtender1Modem2AutoSwitchToTerraform(struct!.autoSwitch),
  }
}


export function extendercontrollerExtender1Modem2ToHclTerraform(struct?: ExtendercontrollerExtender1Modem2OutputReference | ExtendercontrollerExtender1Modem2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conn_status: {
      value: cdktf.numberToHclTerraform(struct!.connStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_sim: {
      value: cdktf.stringToHclTerraform(struct!.defaultSim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gps: {
      value: cdktf.stringToHclTerraform(struct!.gps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ifname: {
      value: cdktf.stringToHclTerraform(struct!.ifname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferred_carrier: {
      value: cdktf.stringToHclTerraform(struct!.preferredCarrier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redundant_intf: {
      value: cdktf.stringToHclTerraform(struct!.redundantIntf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redundant_mode: {
      value: cdktf.stringToHclTerraform(struct!.redundantMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sim1_pin: {
      value: cdktf.stringToHclTerraform(struct!.sim1Pin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sim1_pin_code: {
      value: cdktf.stringToHclTerraform(struct!.sim1PinCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sim2_pin: {
      value: cdktf.stringToHclTerraform(struct!.sim2Pin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sim2_pin_code: {
      value: cdktf.stringToHclTerraform(struct!.sim2PinCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_switch: {
      value: extendercontrollerExtender1Modem2AutoSwitchToHclTerraform(struct!.autoSwitch),
      isBlock: true,
      type: "list",
      storageClassType: "ExtendercontrollerExtender1Modem2AutoSwitchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExtendercontrollerExtender1Modem2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExtendercontrollerExtender1Modem2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.connStatus = this._connStatus;
    }
    if (this._defaultSim !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSim = this._defaultSim;
    }
    if (this._gps !== undefined) {
      hasAnyValues = true;
      internalValueResult.gps = this._gps;
    }
    if (this._ifname !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifname = this._ifname;
    }
    if (this._preferredCarrier !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredCarrier = this._preferredCarrier;
    }
    if (this._redundantIntf !== undefined) {
      hasAnyValues = true;
      internalValueResult.redundantIntf = this._redundantIntf;
    }
    if (this._redundantMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.redundantMode = this._redundantMode;
    }
    if (this._sim1Pin !== undefined) {
      hasAnyValues = true;
      internalValueResult.sim1Pin = this._sim1Pin;
    }
    if (this._sim1PinCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sim1PinCode = this._sim1PinCode;
    }
    if (this._sim2Pin !== undefined) {
      hasAnyValues = true;
      internalValueResult.sim2Pin = this._sim2Pin;
    }
    if (this._sim2PinCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sim2PinCode = this._sim2PinCode;
    }
    if (this._autoSwitch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoSwitch = this._autoSwitch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExtendercontrollerExtender1Modem2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connStatus = undefined;
      this._defaultSim = undefined;
      this._gps = undefined;
      this._ifname = undefined;
      this._preferredCarrier = undefined;
      this._redundantIntf = undefined;
      this._redundantMode = undefined;
      this._sim1Pin = undefined;
      this._sim1PinCode = undefined;
      this._sim2Pin = undefined;
      this._sim2PinCode = undefined;
      this._autoSwitch.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connStatus = value.connStatus;
      this._defaultSim = value.defaultSim;
      this._gps = value.gps;
      this._ifname = value.ifname;
      this._preferredCarrier = value.preferredCarrier;
      this._redundantIntf = value.redundantIntf;
      this._redundantMode = value.redundantMode;
      this._sim1Pin = value.sim1Pin;
      this._sim1PinCode = value.sim1PinCode;
      this._sim2Pin = value.sim2Pin;
      this._sim2PinCode = value.sim2PinCode;
      this._autoSwitch.internalValue = value.autoSwitch;
    }
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

  // default_sim - computed: false, optional: true, required: false
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

  // gps - computed: false, optional: true, required: false
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

  // ifname - computed: false, optional: true, required: false
  private _ifname?: string; 
  public get ifname() {
    return this.getStringAttribute('ifname');
  }
  public set ifname(value: string) {
    this._ifname = value;
  }
  public resetIfname() {
    this._ifname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifnameInput() {
    return this._ifname;
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

  // redundant_mode - computed: false, optional: true, required: false
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

  // sim1_pin - computed: false, optional: true, required: false
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

  // sim1_pin_code - computed: false, optional: true, required: false
  private _sim1PinCode?: string; 
  public get sim1PinCode() {
    return this.getStringAttribute('sim1_pin_code');
  }
  public set sim1PinCode(value: string) {
    this._sim1PinCode = value;
  }
  public resetSim1PinCode() {
    this._sim1PinCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sim1PinCodeInput() {
    return this._sim1PinCode;
  }

  // sim2_pin - computed: false, optional: true, required: false
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

  // sim2_pin_code - computed: false, optional: true, required: false
  private _sim2PinCode?: string; 
  public get sim2PinCode() {
    return this.getStringAttribute('sim2_pin_code');
  }
  public set sim2PinCode(value: string) {
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
  private _autoSwitch = new ExtendercontrollerExtender1Modem2AutoSwitchOutputReference(this, "auto_switch");
  public get autoSwitch() {
    return this._autoSwitch;
  }
  public putAutoSwitch(value: ExtendercontrollerExtender1Modem2AutoSwitch) {
    this._autoSwitch.internalValue = value;
  }
  public resetAutoSwitch() {
    this._autoSwitch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSwitchInput() {
    return this._autoSwitch.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1 fortios_extendercontroller_extender1}
*/
export class ExtendercontrollerExtender1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_extendercontroller_extender1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExtendercontrollerExtender1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExtendercontrollerExtender1 to import
  * @param importFromId The id of the existing ExtendercontrollerExtender1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExtendercontrollerExtender1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_extendercontroller_extender1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extender1 fortios_extendercontroller_extender1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExtendercontrollerExtender1Config
  */
  public constructor(scope: Construct, id: string, config: ExtendercontrollerExtender1Config) {
    super(scope, id, {
      terraformResourceType: 'fortios_extendercontroller_extender1',
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
    this._authorized = config.authorized;
    this._description = config.description;
    this._extName = config.extName;
    this._fosid = config.fosid;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._loginPassword = config.loginPassword;
    this._name = config.name;
    this._vdom = config.vdom;
    this._vdomparam = config.vdomparam;
    this._controllerReport.internalValue = config.controllerReport;
    this._modem1.internalValue = config.modem1;
    this._modem2.internalValue = config.modem2;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorized - computed: false, optional: false, required: true
  private _authorized?: string; 
  public get authorized() {
    return this.getStringAttribute('authorized');
  }
  public set authorized(value: string) {
    this._authorized = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedInput() {
    return this._authorized;
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

  // ext_name - computed: false, optional: true, required: false
  private _extName?: string; 
  public get extName() {
    return this.getStringAttribute('ext_name');
  }
  public set extName(value: string) {
    this._extName = value;
  }
  public resetExtName() {
    this._extName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extNameInput() {
    return this._extName;
  }

  // fosid - computed: true, optional: true, required: false
  private _fosid?: string; 
  public get fosid() {
    return this.getStringAttribute('fosid');
  }
  public set fosid(value: string) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // login_password - computed: false, optional: true, required: false
  private _loginPassword?: string; 
  public get loginPassword() {
    return this.getStringAttribute('login_password');
  }
  public set loginPassword(value: string) {
    this._loginPassword = value;
  }
  public resetLoginPassword() {
    this._loginPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginPasswordInput() {
    return this._loginPassword;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom?: number; 
  public get vdom() {
    return this.getNumberAttribute('vdom');
  }
  public set vdom(value: number) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
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

  // controller_report - computed: false, optional: true, required: false
  private _controllerReport = new ExtendercontrollerExtender1ControllerReportOutputReference(this, "controller_report");
  public get controllerReport() {
    return this._controllerReport;
  }
  public putControllerReport(value: ExtendercontrollerExtender1ControllerReport) {
    this._controllerReport.internalValue = value;
  }
  public resetControllerReport() {
    this._controllerReport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerReportInput() {
    return this._controllerReport.internalValue;
  }

  // modem1 - computed: false, optional: true, required: false
  private _modem1 = new ExtendercontrollerExtender1Modem1OutputReference(this, "modem1");
  public get modem1() {
    return this._modem1;
  }
  public putModem1(value: ExtendercontrollerExtender1Modem1) {
    this._modem1.internalValue = value;
  }
  public resetModem1() {
    this._modem1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modem1Input() {
    return this._modem1.internalValue;
  }

  // modem2 - computed: false, optional: true, required: false
  private _modem2 = new ExtendercontrollerExtender1Modem2OutputReference(this, "modem2");
  public get modem2() {
    return this._modem2;
  }
  public putModem2(value: ExtendercontrollerExtender1Modem2) {
    this._modem2.internalValue = value;
  }
  public resetModem2() {
    this._modem2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modem2Input() {
    return this._modem2.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorized: cdktf.stringToTerraform(this._authorized),
      description: cdktf.stringToTerraform(this._description),
      ext_name: cdktf.stringToTerraform(this._extName),
      fosid: cdktf.stringToTerraform(this._fosid),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      login_password: cdktf.stringToTerraform(this._loginPassword),
      name: cdktf.stringToTerraform(this._name),
      vdom: cdktf.numberToTerraform(this._vdom),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      controller_report: extendercontrollerExtender1ControllerReportToTerraform(this._controllerReport.internalValue),
      modem1: extendercontrollerExtender1Modem1ToTerraform(this._modem1.internalValue),
      modem2: extendercontrollerExtender1Modem2ToTerraform(this._modem2.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorized: {
        value: cdktf.stringToHclTerraform(this._authorized),
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
      ext_name: {
        value: cdktf.stringToHclTerraform(this._extName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.stringToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      login_password: {
        value: cdktf.stringToHclTerraform(this._loginPassword),
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
      vdom: {
        value: cdktf.numberToHclTerraform(this._vdom),
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
      controller_report: {
        value: extendercontrollerExtender1ControllerReportToHclTerraform(this._controllerReport.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExtendercontrollerExtender1ControllerReportList",
      },
      modem1: {
        value: extendercontrollerExtender1Modem1ToHclTerraform(this._modem1.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExtendercontrollerExtender1Modem1List",
      },
      modem2: {
        value: extendercontrollerExtender1Modem2ToHclTerraform(this._modem2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExtendercontrollerExtender1Modem2List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
