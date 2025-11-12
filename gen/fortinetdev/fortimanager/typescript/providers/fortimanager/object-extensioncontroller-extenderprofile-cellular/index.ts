// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectExtensioncontrollerExtenderprofileCellularAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#adom ObjectExtensioncontrollerExtenderprofileCellularA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#dataplan ObjectExtensioncontrollerExtenderprofileCellularA#dataplan}
  */
  readonly dataplan?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#extender_profile ObjectExtensioncontrollerExtenderprofileCellularA#extender_profile}
  */
  readonly extenderProfile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#id ObjectExtensioncontrollerExtenderprofileCellularA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#scopetype ObjectExtensioncontrollerExtenderprofileCellularA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * controller_report block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#controller_report ObjectExtensioncontrollerExtenderprofileCellularA#controller_report}
  */
  readonly controllerReport?: ObjectExtensioncontrollerExtenderprofileCellularControllerReportA;
  /**
  * modem1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#modem1 ObjectExtensioncontrollerExtenderprofileCellularA#modem1}
  */
  readonly modem1?: ObjectExtensioncontrollerExtenderprofileCellularModem1A;
  /**
  * modem2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#modem2 ObjectExtensioncontrollerExtenderprofileCellularA#modem2}
  */
  readonly modem2?: ObjectExtensioncontrollerExtenderprofileCellularModem2A;
  /**
  * sms_notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#sms_notification ObjectExtensioncontrollerExtenderprofileCellularA#sms_notification}
  */
  readonly smsNotification?: ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationA;
}
export interface ObjectExtensioncontrollerExtenderprofileCellularControllerReportA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#interval ObjectExtensioncontrollerExtenderprofileCellularA#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#signal_threshold ObjectExtensioncontrollerExtenderprofileCellularA#signal_threshold}
  */
  readonly signalThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#status ObjectExtensioncontrollerExtenderprofileCellularA#status}
  */
  readonly status?: string;
}

export function objectExtensioncontrollerExtenderprofileCellularControllerReportAToTerraform(struct?: ObjectExtensioncontrollerExtenderprofileCellularControllerReportAOutputReference | ObjectExtensioncontrollerExtenderprofileCellularControllerReportA): any {
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


export function objectExtensioncontrollerExtenderprofileCellularControllerReportAToHclTerraform(struct?: ObjectExtensioncontrollerExtenderprofileCellularControllerReportAOutputReference | ObjectExtensioncontrollerExtenderprofileCellularControllerReportA): any {
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

export class ObjectExtensioncontrollerExtenderprofileCellularControllerReportAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectExtensioncontrollerExtenderprofileCellularControllerReportA | undefined {
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

  public set internalValue(value: ObjectExtensioncontrollerExtenderprofileCellularControllerReportA | undefined) {
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

  // interval - computed: true, optional: true, required: false
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

  // signal_threshold - computed: true, optional: true, required: false
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
}
export interface ObjectExtensioncontrollerExtenderprofileCellularModem1AutoSwitchA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#dataplan ObjectExtensioncontrollerExtenderprofileCellularA#dataplan}
  */
  readonly dataplan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#disconnect ObjectExtensioncontrollerExtenderprofileCellularA#disconnect}
  */
  readonly disconnect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#disconnect_period ObjectExtensioncontrollerExtenderprofileCellularA#disconnect_period}
  */
  readonly disconnectPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#disconnect_threshold ObjectExtensioncontrollerExtenderprofileCellularA#disconnect_threshold}
  */
  readonly disconnectThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#signal ObjectExtensioncontrollerExtenderprofileCellularA#signal}
  */
  readonly signal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#switch_back ObjectExtensioncontrollerExtenderprofileCellularA#switch_back}
  */
  readonly switchBack?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#switch_back_time ObjectExtensioncontrollerExtenderprofileCellularA#switch_back_time}
  */
  readonly switchBackTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#switch_back_timer ObjectExtensioncontrollerExtenderprofileCellularA#switch_back_timer}
  */
  readonly switchBackTimer?: number;
}

export function objectExtensioncontrollerExtenderprofileCellularModem1AutoSwitchAToTerraform(struct?: ObjectExtensioncontrollerExtenderprofileCellularModem1AutoSwitchAOutputReference | ObjectExtensioncontrollerExtenderprofileCellularModem1AutoSwitchA): any {
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


export function objectExtensioncontrollerExtenderprofileCellularModem1AutoSwitchAToHclTerraform(struct?: ObjectExtensioncontrollerExtenderprofileCellularModem1AutoSwitchAOutputReference | ObjectExtensioncontrollerExtenderprofileCellularModem1AutoSwitchA): any {
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

export class ObjectExtensioncontrollerExtenderprofileCellularModem1AutoSwitchAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectExtensioncontrollerExtenderprofileCellularModem1AutoSwitchA | undefined {
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

  public set internalValue(value: ObjectExtensioncontrollerExtenderprofileCellularModem1AutoSwitchA | undefined) {
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
export interface ObjectExtensioncontrollerExtenderprofileCellularModem1A {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#conn_status ObjectExtensioncontrollerExtenderprofileCellularA#conn_status}
  */
  readonly connStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#default_sim ObjectExtensioncontrollerExtenderprofileCellularA#default_sim}
  */
  readonly defaultSim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#gps ObjectExtensioncontrollerExtenderprofileCellularA#gps}
  */
  readonly gps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#modem_id ObjectExtensioncontrollerExtenderprofileCellularA#modem_id}
  */
  readonly modemId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#multiple_pdn ObjectExtensioncontrollerExtenderprofileCellularA#multiple_pdn}
  */
  readonly multiplePdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#pdn1_dataplan ObjectExtensioncontrollerExtenderprofileCellularA#pdn1_dataplan}
  */
  readonly pdn1Dataplan?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#pdn2_dataplan ObjectExtensioncontrollerExtenderprofileCellularA#pdn2_dataplan}
  */
  readonly pdn2Dataplan?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#pdn3_dataplan ObjectExtensioncontrollerExtenderprofileCellularA#pdn3_dataplan}
  */
  readonly pdn3Dataplan?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#pdn4_dataplan ObjectExtensioncontrollerExtenderprofileCellularA#pdn4_dataplan}
  */
  readonly pdn4Dataplan?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#preferred_carrier ObjectExtensioncontrollerExtenderprofileCellularA#preferred_carrier}
  */
  readonly preferredCarrier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#redundant_intf ObjectExtensioncontrollerExtenderprofileCellularA#redundant_intf}
  */
  readonly redundantIntf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#redundant_mode ObjectExtensioncontrollerExtenderprofileCellularA#redundant_mode}
  */
  readonly redundantMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#sim1_pin ObjectExtensioncontrollerExtenderprofileCellularA#sim1_pin}
  */
  readonly sim1Pin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#sim1_pin_code ObjectExtensioncontrollerExtenderprofileCellularA#sim1_pin_code}
  */
  readonly sim1PinCode?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#sim2_pin ObjectExtensioncontrollerExtenderprofileCellularA#sim2_pin}
  */
  readonly sim2Pin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#sim2_pin_code ObjectExtensioncontrollerExtenderprofileCellularA#sim2_pin_code}
  */
  readonly sim2PinCode?: string[];
  /**
  * auto_switch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#auto_switch ObjectExtensioncontrollerExtenderprofileCellularA#auto_switch}
  */
  readonly autoSwitch?: ObjectExtensioncontrollerExtenderprofileCellularModem1AutoSwitchA;
}

export function objectExtensioncontrollerExtenderprofileCellularModem1AToTerraform(struct?: ObjectExtensioncontrollerExtenderprofileCellularModem1AOutputReference | ObjectExtensioncontrollerExtenderprofileCellularModem1A): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conn_status: cdktf.numberToTerraform(struct!.connStatus),
    default_sim: cdktf.stringToTerraform(struct!.defaultSim),
    gps: cdktf.stringToTerraform(struct!.gps),
    modem_id: cdktf.numberToTerraform(struct!.modemId),
    multiple_pdn: cdktf.stringToTerraform(struct!.multiplePdn),
    pdn1_dataplan: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pdn1Dataplan),
    pdn2_dataplan: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pdn2Dataplan),
    pdn3_dataplan: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pdn3Dataplan),
    pdn4_dataplan: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pdn4Dataplan),
    preferred_carrier: cdktf.stringToTerraform(struct!.preferredCarrier),
    redundant_intf: cdktf.stringToTerraform(struct!.redundantIntf),
    redundant_mode: cdktf.stringToTerraform(struct!.redundantMode),
    sim1_pin: cdktf.stringToTerraform(struct!.sim1Pin),
    sim1_pin_code: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sim1PinCode),
    sim2_pin: cdktf.stringToTerraform(struct!.sim2Pin),
    sim2_pin_code: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sim2PinCode),
    auto_switch: objectExtensioncontrollerExtenderprofileCellularModem1AutoSwitchAToTerraform(struct!.autoSwitch),
  }
}


export function objectExtensioncontrollerExtenderprofileCellularModem1AToHclTerraform(struct?: ObjectExtensioncontrollerExtenderprofileCellularModem1AOutputReference | ObjectExtensioncontrollerExtenderprofileCellularModem1A): any {
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
    modem_id: {
      value: cdktf.numberToHclTerraform(struct!.modemId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multiple_pdn: {
      value: cdktf.stringToHclTerraform(struct!.multiplePdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pdn1_dataplan: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pdn1Dataplan),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    pdn2_dataplan: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pdn2Dataplan),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    pdn3_dataplan: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pdn3Dataplan),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    pdn4_dataplan: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pdn4Dataplan),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sim1PinCode),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sim2_pin: {
      value: cdktf.stringToHclTerraform(struct!.sim2Pin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sim2_pin_code: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sim2PinCode),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    auto_switch: {
      value: objectExtensioncontrollerExtenderprofileCellularModem1AutoSwitchAToHclTerraform(struct!.autoSwitch),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectExtensioncontrollerExtenderprofileCellularModem1AutoSwitchAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectExtensioncontrollerExtenderprofileCellularModem1AOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectExtensioncontrollerExtenderprofileCellularModem1A | undefined {
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
    if (this._modemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.modemId = this._modemId;
    }
    if (this._multiplePdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiplePdn = this._multiplePdn;
    }
    if (this._pdn1Dataplan !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdn1Dataplan = this._pdn1Dataplan;
    }
    if (this._pdn2Dataplan !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdn2Dataplan = this._pdn2Dataplan;
    }
    if (this._pdn3Dataplan !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdn3Dataplan = this._pdn3Dataplan;
    }
    if (this._pdn4Dataplan !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdn4Dataplan = this._pdn4Dataplan;
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

  public set internalValue(value: ObjectExtensioncontrollerExtenderprofileCellularModem1A | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connStatus = undefined;
      this._defaultSim = undefined;
      this._gps = undefined;
      this._modemId = undefined;
      this._multiplePdn = undefined;
      this._pdn1Dataplan = undefined;
      this._pdn2Dataplan = undefined;
      this._pdn3Dataplan = undefined;
      this._pdn4Dataplan = undefined;
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
      this._modemId = value.modemId;
      this._multiplePdn = value.multiplePdn;
      this._pdn1Dataplan = value.pdn1Dataplan;
      this._pdn2Dataplan = value.pdn2Dataplan;
      this._pdn3Dataplan = value.pdn3Dataplan;
      this._pdn4Dataplan = value.pdn4Dataplan;
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
  private _autoSwitch = new ObjectExtensioncontrollerExtenderprofileCellularModem1AutoSwitchAOutputReference(this, "auto_switch");
  public get autoSwitch() {
    return this._autoSwitch;
  }
  public putAutoSwitch(value: ObjectExtensioncontrollerExtenderprofileCellularModem1AutoSwitchA) {
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
export interface ObjectExtensioncontrollerExtenderprofileCellularModem2AutoSwitchA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#dataplan ObjectExtensioncontrollerExtenderprofileCellularA#dataplan}
  */
  readonly dataplan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#disconnect ObjectExtensioncontrollerExtenderprofileCellularA#disconnect}
  */
  readonly disconnect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#disconnect_period ObjectExtensioncontrollerExtenderprofileCellularA#disconnect_period}
  */
  readonly disconnectPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#disconnect_threshold ObjectExtensioncontrollerExtenderprofileCellularA#disconnect_threshold}
  */
  readonly disconnectThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#signal ObjectExtensioncontrollerExtenderprofileCellularA#signal}
  */
  readonly signal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#switch_back ObjectExtensioncontrollerExtenderprofileCellularA#switch_back}
  */
  readonly switchBack?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#switch_back_time ObjectExtensioncontrollerExtenderprofileCellularA#switch_back_time}
  */
  readonly switchBackTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#switch_back_timer ObjectExtensioncontrollerExtenderprofileCellularA#switch_back_timer}
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
export interface ObjectExtensioncontrollerExtenderprofileCellularModem2A {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#conn_status ObjectExtensioncontrollerExtenderprofileCellularA#conn_status}
  */
  readonly connStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#default_sim ObjectExtensioncontrollerExtenderprofileCellularA#default_sim}
  */
  readonly defaultSim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#gps ObjectExtensioncontrollerExtenderprofileCellularA#gps}
  */
  readonly gps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#modem_id ObjectExtensioncontrollerExtenderprofileCellularA#modem_id}
  */
  readonly modemId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#multiple_pdn ObjectExtensioncontrollerExtenderprofileCellularA#multiple_pdn}
  */
  readonly multiplePdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#pdn1_dataplan ObjectExtensioncontrollerExtenderprofileCellularA#pdn1_dataplan}
  */
  readonly pdn1Dataplan?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#pdn2_dataplan ObjectExtensioncontrollerExtenderprofileCellularA#pdn2_dataplan}
  */
  readonly pdn2Dataplan?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#pdn3_dataplan ObjectExtensioncontrollerExtenderprofileCellularA#pdn3_dataplan}
  */
  readonly pdn3Dataplan?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#pdn4_dataplan ObjectExtensioncontrollerExtenderprofileCellularA#pdn4_dataplan}
  */
  readonly pdn4Dataplan?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#preferred_carrier ObjectExtensioncontrollerExtenderprofileCellularA#preferred_carrier}
  */
  readonly preferredCarrier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#redundant_intf ObjectExtensioncontrollerExtenderprofileCellularA#redundant_intf}
  */
  readonly redundantIntf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#redundant_mode ObjectExtensioncontrollerExtenderprofileCellularA#redundant_mode}
  */
  readonly redundantMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#sim1_pin ObjectExtensioncontrollerExtenderprofileCellularA#sim1_pin}
  */
  readonly sim1Pin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#sim1_pin_code ObjectExtensioncontrollerExtenderprofileCellularA#sim1_pin_code}
  */
  readonly sim1PinCode?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#sim2_pin ObjectExtensioncontrollerExtenderprofileCellularA#sim2_pin}
  */
  readonly sim2Pin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#sim2_pin_code ObjectExtensioncontrollerExtenderprofileCellularA#sim2_pin_code}
  */
  readonly sim2PinCode?: string[];
  /**
  * auto_switch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#auto_switch ObjectExtensioncontrollerExtenderprofileCellularA#auto_switch}
  */
  readonly autoSwitch?: ObjectExtensioncontrollerExtenderprofileCellularModem2AutoSwitchA;
}

export function objectExtensioncontrollerExtenderprofileCellularModem2AToTerraform(struct?: ObjectExtensioncontrollerExtenderprofileCellularModem2AOutputReference | ObjectExtensioncontrollerExtenderprofileCellularModem2A): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conn_status: cdktf.numberToTerraform(struct!.connStatus),
    default_sim: cdktf.stringToTerraform(struct!.defaultSim),
    gps: cdktf.stringToTerraform(struct!.gps),
    modem_id: cdktf.numberToTerraform(struct!.modemId),
    multiple_pdn: cdktf.stringToTerraform(struct!.multiplePdn),
    pdn1_dataplan: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pdn1Dataplan),
    pdn2_dataplan: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pdn2Dataplan),
    pdn3_dataplan: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pdn3Dataplan),
    pdn4_dataplan: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pdn4Dataplan),
    preferred_carrier: cdktf.stringToTerraform(struct!.preferredCarrier),
    redundant_intf: cdktf.stringToTerraform(struct!.redundantIntf),
    redundant_mode: cdktf.stringToTerraform(struct!.redundantMode),
    sim1_pin: cdktf.stringToTerraform(struct!.sim1Pin),
    sim1_pin_code: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sim1PinCode),
    sim2_pin: cdktf.stringToTerraform(struct!.sim2Pin),
    sim2_pin_code: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sim2PinCode),
    auto_switch: objectExtensioncontrollerExtenderprofileCellularModem2AutoSwitchAToTerraform(struct!.autoSwitch),
  }
}


export function objectExtensioncontrollerExtenderprofileCellularModem2AToHclTerraform(struct?: ObjectExtensioncontrollerExtenderprofileCellularModem2AOutputReference | ObjectExtensioncontrollerExtenderprofileCellularModem2A): any {
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
    modem_id: {
      value: cdktf.numberToHclTerraform(struct!.modemId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multiple_pdn: {
      value: cdktf.stringToHclTerraform(struct!.multiplePdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pdn1_dataplan: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pdn1Dataplan),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    pdn2_dataplan: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pdn2Dataplan),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    pdn3_dataplan: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pdn3Dataplan),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    pdn4_dataplan: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pdn4Dataplan),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sim1PinCode),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sim2_pin: {
      value: cdktf.stringToHclTerraform(struct!.sim2Pin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sim2_pin_code: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sim2PinCode),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    auto_switch: {
      value: objectExtensioncontrollerExtenderprofileCellularModem2AutoSwitchAToHclTerraform(struct!.autoSwitch),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectExtensioncontrollerExtenderprofileCellularModem2AutoSwitchAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectExtensioncontrollerExtenderprofileCellularModem2AOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectExtensioncontrollerExtenderprofileCellularModem2A | undefined {
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
    if (this._modemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.modemId = this._modemId;
    }
    if (this._multiplePdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiplePdn = this._multiplePdn;
    }
    if (this._pdn1Dataplan !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdn1Dataplan = this._pdn1Dataplan;
    }
    if (this._pdn2Dataplan !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdn2Dataplan = this._pdn2Dataplan;
    }
    if (this._pdn3Dataplan !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdn3Dataplan = this._pdn3Dataplan;
    }
    if (this._pdn4Dataplan !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdn4Dataplan = this._pdn4Dataplan;
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

  public set internalValue(value: ObjectExtensioncontrollerExtenderprofileCellularModem2A | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connStatus = undefined;
      this._defaultSim = undefined;
      this._gps = undefined;
      this._modemId = undefined;
      this._multiplePdn = undefined;
      this._pdn1Dataplan = undefined;
      this._pdn2Dataplan = undefined;
      this._pdn3Dataplan = undefined;
      this._pdn4Dataplan = undefined;
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
      this._modemId = value.modemId;
      this._multiplePdn = value.multiplePdn;
      this._pdn1Dataplan = value.pdn1Dataplan;
      this._pdn2Dataplan = value.pdn2Dataplan;
      this._pdn3Dataplan = value.pdn3Dataplan;
      this._pdn4Dataplan = value.pdn4Dataplan;
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
}
export interface ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationAlertA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#data_exhausted ObjectExtensioncontrollerExtenderprofileCellularA#data_exhausted}
  */
  readonly dataExhausted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#fgt_backup_mode_switch ObjectExtensioncontrollerExtenderprofileCellularA#fgt_backup_mode_switch}
  */
  readonly fgtBackupModeSwitch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#low_signal_strength ObjectExtensioncontrollerExtenderprofileCellularA#low_signal_strength}
  */
  readonly lowSignalStrength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#mode_switch ObjectExtensioncontrollerExtenderprofileCellularA#mode_switch}
  */
  readonly modeSwitch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#os_image_fallback ObjectExtensioncontrollerExtenderprofileCellularA#os_image_fallback}
  */
  readonly osImageFallback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#session_disconnect ObjectExtensioncontrollerExtenderprofileCellularA#session_disconnect}
  */
  readonly sessionDisconnect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#system_reboot ObjectExtensioncontrollerExtenderprofileCellularA#system_reboot}
  */
  readonly systemReboot?: string;
}

export function objectExtensioncontrollerExtenderprofileCellularSmsNotificationAlertAToTerraform(struct?: ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationAlertAOutputReference | ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationAlertA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_exhausted: cdktf.stringToTerraform(struct!.dataExhausted),
    fgt_backup_mode_switch: cdktf.stringToTerraform(struct!.fgtBackupModeSwitch),
    low_signal_strength: cdktf.stringToTerraform(struct!.lowSignalStrength),
    mode_switch: cdktf.stringToTerraform(struct!.modeSwitch),
    os_image_fallback: cdktf.stringToTerraform(struct!.osImageFallback),
    session_disconnect: cdktf.stringToTerraform(struct!.sessionDisconnect),
    system_reboot: cdktf.stringToTerraform(struct!.systemReboot),
  }
}


export function objectExtensioncontrollerExtenderprofileCellularSmsNotificationAlertAToHclTerraform(struct?: ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationAlertAOutputReference | ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationAlertA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_exhausted: {
      value: cdktf.stringToHclTerraform(struct!.dataExhausted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fgt_backup_mode_switch: {
      value: cdktf.stringToHclTerraform(struct!.fgtBackupModeSwitch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    low_signal_strength: {
      value: cdktf.stringToHclTerraform(struct!.lowSignalStrength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode_switch: {
      value: cdktf.stringToHclTerraform(struct!.modeSwitch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_image_fallback: {
      value: cdktf.stringToHclTerraform(struct!.osImageFallback),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_disconnect: {
      value: cdktf.stringToHclTerraform(struct!.sessionDisconnect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_reboot: {
      value: cdktf.stringToHclTerraform(struct!.systemReboot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationAlertAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationAlertA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataExhausted !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataExhausted = this._dataExhausted;
    }
    if (this._fgtBackupModeSwitch !== undefined) {
      hasAnyValues = true;
      internalValueResult.fgtBackupModeSwitch = this._fgtBackupModeSwitch;
    }
    if (this._lowSignalStrength !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowSignalStrength = this._lowSignalStrength;
    }
    if (this._modeSwitch !== undefined) {
      hasAnyValues = true;
      internalValueResult.modeSwitch = this._modeSwitch;
    }
    if (this._osImageFallback !== undefined) {
      hasAnyValues = true;
      internalValueResult.osImageFallback = this._osImageFallback;
    }
    if (this._sessionDisconnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionDisconnect = this._sessionDisconnect;
    }
    if (this._systemReboot !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemReboot = this._systemReboot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationAlertA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataExhausted = undefined;
      this._fgtBackupModeSwitch = undefined;
      this._lowSignalStrength = undefined;
      this._modeSwitch = undefined;
      this._osImageFallback = undefined;
      this._sessionDisconnect = undefined;
      this._systemReboot = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataExhausted = value.dataExhausted;
      this._fgtBackupModeSwitch = value.fgtBackupModeSwitch;
      this._lowSignalStrength = value.lowSignalStrength;
      this._modeSwitch = value.modeSwitch;
      this._osImageFallback = value.osImageFallback;
      this._sessionDisconnect = value.sessionDisconnect;
      this._systemReboot = value.systemReboot;
    }
  }

  // data_exhausted - computed: true, optional: true, required: false
  private _dataExhausted?: string; 
  public get dataExhausted() {
    return this.getStringAttribute('data_exhausted');
  }
  public set dataExhausted(value: string) {
    this._dataExhausted = value;
  }
  public resetDataExhausted() {
    this._dataExhausted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataExhaustedInput() {
    return this._dataExhausted;
  }

  // fgt_backup_mode_switch - computed: true, optional: true, required: false
  private _fgtBackupModeSwitch?: string; 
  public get fgtBackupModeSwitch() {
    return this.getStringAttribute('fgt_backup_mode_switch');
  }
  public set fgtBackupModeSwitch(value: string) {
    this._fgtBackupModeSwitch = value;
  }
  public resetFgtBackupModeSwitch() {
    this._fgtBackupModeSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgtBackupModeSwitchInput() {
    return this._fgtBackupModeSwitch;
  }

  // low_signal_strength - computed: true, optional: true, required: false
  private _lowSignalStrength?: string; 
  public get lowSignalStrength() {
    return this.getStringAttribute('low_signal_strength');
  }
  public set lowSignalStrength(value: string) {
    this._lowSignalStrength = value;
  }
  public resetLowSignalStrength() {
    this._lowSignalStrength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowSignalStrengthInput() {
    return this._lowSignalStrength;
  }

  // mode_switch - computed: true, optional: true, required: false
  private _modeSwitch?: string; 
  public get modeSwitch() {
    return this.getStringAttribute('mode_switch');
  }
  public set modeSwitch(value: string) {
    this._modeSwitch = value;
  }
  public resetModeSwitch() {
    this._modeSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeSwitchInput() {
    return this._modeSwitch;
  }

  // os_image_fallback - computed: true, optional: true, required: false
  private _osImageFallback?: string; 
  public get osImageFallback() {
    return this.getStringAttribute('os_image_fallback');
  }
  public set osImageFallback(value: string) {
    this._osImageFallback = value;
  }
  public resetOsImageFallback() {
    this._osImageFallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osImageFallbackInput() {
    return this._osImageFallback;
  }

  // session_disconnect - computed: true, optional: true, required: false
  private _sessionDisconnect?: string; 
  public get sessionDisconnect() {
    return this.getStringAttribute('session_disconnect');
  }
  public set sessionDisconnect(value: string) {
    this._sessionDisconnect = value;
  }
  public resetSessionDisconnect() {
    this._sessionDisconnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionDisconnectInput() {
    return this._sessionDisconnect;
  }

  // system_reboot - computed: true, optional: true, required: false
  private _systemReboot?: string; 
  public get systemReboot() {
    return this.getStringAttribute('system_reboot');
  }
  public set systemReboot(value: string) {
    this._systemReboot = value;
  }
  public resetSystemReboot() {
    this._systemReboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemRebootInput() {
    return this._systemReboot;
  }
}
export interface ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationReceiverA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#alert ObjectExtensioncontrollerExtenderprofileCellularA#alert}
  */
  readonly alert?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#name ObjectExtensioncontrollerExtenderprofileCellularA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#phone_number ObjectExtensioncontrollerExtenderprofileCellularA#phone_number}
  */
  readonly phoneNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#status ObjectExtensioncontrollerExtenderprofileCellularA#status}
  */
  readonly status?: string;
}

export function objectExtensioncontrollerExtenderprofileCellularSmsNotificationReceiverAToTerraform(struct?: ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationReceiverA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.alert),
    name: cdktf.stringToTerraform(struct!.name),
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function objectExtensioncontrollerExtenderprofileCellularSmsNotificationReceiverAToHclTerraform(struct?: ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationReceiverA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.alert),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phone_number: {
      value: cdktf.stringToHclTerraform(struct!.phoneNumber),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationReceiverAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationReceiverA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alert !== undefined) {
      hasAnyValues = true;
      internalValueResult.alert = this._alert;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationReceiverA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alert = undefined;
      this._name = undefined;
      this._phoneNumber = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alert = value.alert;
      this._name = value.name;
      this._phoneNumber = value.phoneNumber;
      this._status = value.status;
    }
  }

  // alert - computed: true, optional: true, required: false
  private _alert?: string[]; 
  public get alert() {
    return cdktf.Fn.tolist(this.getListAttribute('alert'));
  }
  public set alert(value: string[]) {
    this._alert = value;
  }
  public resetAlert() {
    this._alert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert;
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

  // phone_number - computed: false, optional: true, required: false
  private _phoneNumber?: string; 
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  public resetPhoneNumber() {
    this._phoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
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
}

export class ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationReceiverAList extends cdktf.ComplexList {
  public internalValue? : ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationReceiverA[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationReceiverAOutputReference {
    return new ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationReceiverAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#status ObjectExtensioncontrollerExtenderprofileCellularA#status}
  */
  readonly status?: string;
  /**
  * alert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#alert ObjectExtensioncontrollerExtenderprofileCellularA#alert}
  */
  readonly alert?: ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationAlertA;
  /**
  * receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#receiver ObjectExtensioncontrollerExtenderprofileCellularA#receiver}
  */
  readonly receiver?: ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationReceiverA[] | cdktf.IResolvable;
}

export function objectExtensioncontrollerExtenderprofileCellularSmsNotificationAToTerraform(struct?: ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationAOutputReference | ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
    alert: objectExtensioncontrollerExtenderprofileCellularSmsNotificationAlertAToTerraform(struct!.alert),
    receiver: cdktf.listMapper(objectExtensioncontrollerExtenderprofileCellularSmsNotificationReceiverAToTerraform, true)(struct!.receiver),
  }
}


export function objectExtensioncontrollerExtenderprofileCellularSmsNotificationAToHclTerraform(struct?: ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationAOutputReference | ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alert: {
      value: objectExtensioncontrollerExtenderprofileCellularSmsNotificationAlertAToHclTerraform(struct!.alert),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationAlertAList",
    },
    receiver: {
      value: cdktf.listMapperHcl(objectExtensioncontrollerExtenderprofileCellularSmsNotificationReceiverAToHclTerraform, true)(struct!.receiver),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationReceiverAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._alert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alert = this._alert?.internalValue;
    }
    if (this._receiver?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiver = this._receiver?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._status = undefined;
      this._alert.internalValue = undefined;
      this._receiver.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._status = value.status;
      this._alert.internalValue = value.alert;
      this._receiver.internalValue = value.receiver;
    }
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

  // alert - computed: false, optional: true, required: false
  private _alert = new ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationAlertAOutputReference(this, "alert");
  public get alert() {
    return this._alert;
  }
  public putAlert(value: ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationAlertA) {
    this._alert.internalValue = value;
  }
  public resetAlert() {
    this._alert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert.internalValue;
  }

  // receiver - computed: false, optional: true, required: false
  private _receiver = new ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationReceiverAList(this, "receiver", false);
  public get receiver() {
    return this._receiver;
  }
  public putReceiver(value: ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationReceiverA[] | cdktf.IResolvable) {
    this._receiver.internalValue = value;
  }
  public resetReceiver() {
    this._receiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverInput() {
    return this._receiver.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular fortimanager_object_extensioncontroller_extenderprofile_cellular}
*/
export class ObjectExtensioncontrollerExtenderprofileCellularA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_extensioncontroller_extenderprofile_cellular";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectExtensioncontrollerExtenderprofileCellularA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectExtensioncontrollerExtenderprofileCellularA to import
  * @param importFromId The id of the existing ObjectExtensioncontrollerExtenderprofileCellularA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectExtensioncontrollerExtenderprofileCellularA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_extensioncontroller_extenderprofile_cellular", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular fortimanager_object_extensioncontroller_extenderprofile_cellular} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectExtensioncontrollerExtenderprofileCellularAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectExtensioncontrollerExtenderprofileCellularAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_extensioncontroller_extenderprofile_cellular',
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
    this._extenderProfile = config.extenderProfile;
    this._id = config.id;
    this._scopetype = config.scopetype;
    this._controllerReport.internalValue = config.controllerReport;
    this._modem1.internalValue = config.modem1;
    this._modem2.internalValue = config.modem2;
    this._smsNotification.internalValue = config.smsNotification;
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
  private _dataplan?: string[]; 
  public get dataplan() {
    return cdktf.Fn.tolist(this.getListAttribute('dataplan'));
  }
  public set dataplan(value: string[]) {
    this._dataplan = value;
  }
  public resetDataplan() {
    this._dataplan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataplanInput() {
    return this._dataplan;
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

  // controller_report - computed: false, optional: true, required: false
  private _controllerReport = new ObjectExtensioncontrollerExtenderprofileCellularControllerReportAOutputReference(this, "controller_report");
  public get controllerReport() {
    return this._controllerReport;
  }
  public putControllerReport(value: ObjectExtensioncontrollerExtenderprofileCellularControllerReportA) {
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
  private _modem1 = new ObjectExtensioncontrollerExtenderprofileCellularModem1AOutputReference(this, "modem1");
  public get modem1() {
    return this._modem1;
  }
  public putModem1(value: ObjectExtensioncontrollerExtenderprofileCellularModem1A) {
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
  private _modem2 = new ObjectExtensioncontrollerExtenderprofileCellularModem2AOutputReference(this, "modem2");
  public get modem2() {
    return this._modem2;
  }
  public putModem2(value: ObjectExtensioncontrollerExtenderprofileCellularModem2A) {
    this._modem2.internalValue = value;
  }
  public resetModem2() {
    this._modem2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modem2Input() {
    return this._modem2.internalValue;
  }

  // sms_notification - computed: false, optional: true, required: false
  private _smsNotification = new ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationAOutputReference(this, "sms_notification");
  public get smsNotification() {
    return this._smsNotification;
  }
  public putSmsNotification(value: ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationA) {
    this._smsNotification.internalValue = value;
  }
  public resetSmsNotification() {
    this._smsNotification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsNotificationInput() {
    return this._smsNotification.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      dataplan: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dataplan),
      extender_profile: cdktf.stringToTerraform(this._extenderProfile),
      id: cdktf.stringToTerraform(this._id),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      controller_report: objectExtensioncontrollerExtenderprofileCellularControllerReportAToTerraform(this._controllerReport.internalValue),
      modem1: objectExtensioncontrollerExtenderprofileCellularModem1AToTerraform(this._modem1.internalValue),
      modem2: objectExtensioncontrollerExtenderprofileCellularModem2AToTerraform(this._modem2.internalValue),
      sms_notification: objectExtensioncontrollerExtenderprofileCellularSmsNotificationAToTerraform(this._smsNotification.internalValue),
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
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dataplan),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      controller_report: {
        value: objectExtensioncontrollerExtenderprofileCellularControllerReportAToHclTerraform(this._controllerReport.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectExtensioncontrollerExtenderprofileCellularControllerReportAList",
      },
      modem1: {
        value: objectExtensioncontrollerExtenderprofileCellularModem1AToHclTerraform(this._modem1.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectExtensioncontrollerExtenderprofileCellularModem1AList",
      },
      modem2: {
        value: objectExtensioncontrollerExtenderprofileCellularModem2AToHclTerraform(this._modem2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectExtensioncontrollerExtenderprofileCellularModem2AList",
      },
      sms_notification: {
        value: objectExtensioncontrollerExtenderprofileCellularSmsNotificationAToHclTerraform(this._smsNotification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
