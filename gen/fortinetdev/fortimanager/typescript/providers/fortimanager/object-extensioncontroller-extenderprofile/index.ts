// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectExtensioncontrollerExtenderprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#_is_factory_setting ObjectExtensioncontrollerExtenderprofile#_is_factory_setting}
  */
  readonly isFactorySetting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#adom ObjectExtensioncontrollerExtenderprofile#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#allowaccess ObjectExtensioncontrollerExtenderprofile#allowaccess}
  */
  readonly allowaccess?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#bandwidth_limit ObjectExtensioncontrollerExtenderprofile#bandwidth_limit}
  */
  readonly bandwidthLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#enforce_bandwidth ObjectExtensioncontrollerExtenderprofile#enforce_bandwidth}
  */
  readonly enforceBandwidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#extension ObjectExtensioncontrollerExtenderprofile#extension}
  */
  readonly extension?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#fosid ObjectExtensioncontrollerExtenderprofile#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#id ObjectExtensioncontrollerExtenderprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#login_password ObjectExtensioncontrollerExtenderprofile#login_password}
  */
  readonly loginPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#login_password_change ObjectExtensioncontrollerExtenderprofile#login_password_change}
  */
  readonly loginPasswordChange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#model ObjectExtensioncontrollerExtenderprofile#model}
  */
  readonly model?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#name ObjectExtensioncontrollerExtenderprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#scopetype ObjectExtensioncontrollerExtenderprofile#scopetype}
  */
  readonly scopetype?: string;
  /**
  * cellular block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#cellular ObjectExtensioncontrollerExtenderprofile#cellular}
  */
  readonly cellular?: ObjectExtensioncontrollerExtenderprofileCellular;
  /**
  * lan_extension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#lan_extension ObjectExtensioncontrollerExtenderprofile#lan_extension}
  */
  readonly lanExtension?: ObjectExtensioncontrollerExtenderprofileLanExtension;
  /**
  * wifi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#wifi ObjectExtensioncontrollerExtenderprofile#wifi}
  */
  readonly wifi?: ObjectExtensioncontrollerExtenderprofileWifi;
}
export interface ObjectExtensioncontrollerExtenderprofileCellularControllerReport {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#interval ObjectExtensioncontrollerExtenderprofile#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#signal_threshold ObjectExtensioncontrollerExtenderprofile#signal_threshold}
  */
  readonly signalThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#status ObjectExtensioncontrollerExtenderprofile#status}
  */
  readonly status?: string;
}

export function objectExtensioncontrollerExtenderprofileCellularControllerReportToTerraform(struct?: ObjectExtensioncontrollerExtenderprofileCellularControllerReportOutputReference | ObjectExtensioncontrollerExtenderprofileCellularControllerReport): any {
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


export function objectExtensioncontrollerExtenderprofileCellularControllerReportToHclTerraform(struct?: ObjectExtensioncontrollerExtenderprofileCellularControllerReportOutputReference | ObjectExtensioncontrollerExtenderprofileCellularControllerReport): any {
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

export class ObjectExtensioncontrollerExtenderprofileCellularControllerReportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectExtensioncontrollerExtenderprofileCellularControllerReport | undefined {
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

  public set internalValue(value: ObjectExtensioncontrollerExtenderprofileCellularControllerReport | undefined) {
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
export interface ObjectExtensioncontrollerExtenderprofileCellularModem1AutoSwitch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#dataplan ObjectExtensioncontrollerExtenderprofile#dataplan}
  */
  readonly dataplan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#disconnect ObjectExtensioncontrollerExtenderprofile#disconnect}
  */
  readonly disconnect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#disconnect_period ObjectExtensioncontrollerExtenderprofile#disconnect_period}
  */
  readonly disconnectPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#disconnect_threshold ObjectExtensioncontrollerExtenderprofile#disconnect_threshold}
  */
  readonly disconnectThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#signal ObjectExtensioncontrollerExtenderprofile#signal}
  */
  readonly signal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#switch_back ObjectExtensioncontrollerExtenderprofile#switch_back}
  */
  readonly switchBack?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#switch_back_time ObjectExtensioncontrollerExtenderprofile#switch_back_time}
  */
  readonly switchBackTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#switch_back_timer ObjectExtensioncontrollerExtenderprofile#switch_back_timer}
  */
  readonly switchBackTimer?: number;
}

export function objectExtensioncontrollerExtenderprofileCellularModem1AutoSwitchToTerraform(struct?: ObjectExtensioncontrollerExtenderprofileCellularModem1AutoSwitchOutputReference | ObjectExtensioncontrollerExtenderprofileCellularModem1AutoSwitch): any {
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


export function objectExtensioncontrollerExtenderprofileCellularModem1AutoSwitchToHclTerraform(struct?: ObjectExtensioncontrollerExtenderprofileCellularModem1AutoSwitchOutputReference | ObjectExtensioncontrollerExtenderprofileCellularModem1AutoSwitch): any {
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

export class ObjectExtensioncontrollerExtenderprofileCellularModem1AutoSwitchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectExtensioncontrollerExtenderprofileCellularModem1AutoSwitch | undefined {
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

  public set internalValue(value: ObjectExtensioncontrollerExtenderprofileCellularModem1AutoSwitch | undefined) {
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
export interface ObjectExtensioncontrollerExtenderprofileCellularModem1 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#conn_status ObjectExtensioncontrollerExtenderprofile#conn_status}
  */
  readonly connStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#default_sim ObjectExtensioncontrollerExtenderprofile#default_sim}
  */
  readonly defaultSim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#gps ObjectExtensioncontrollerExtenderprofile#gps}
  */
  readonly gps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#modem_id ObjectExtensioncontrollerExtenderprofile#modem_id}
  */
  readonly modemId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#multiple_pdn ObjectExtensioncontrollerExtenderprofile#multiple_pdn}
  */
  readonly multiplePdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#pdn1_dataplan ObjectExtensioncontrollerExtenderprofile#pdn1_dataplan}
  */
  readonly pdn1Dataplan?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#pdn2_dataplan ObjectExtensioncontrollerExtenderprofile#pdn2_dataplan}
  */
  readonly pdn2Dataplan?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#pdn3_dataplan ObjectExtensioncontrollerExtenderprofile#pdn3_dataplan}
  */
  readonly pdn3Dataplan?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#pdn4_dataplan ObjectExtensioncontrollerExtenderprofile#pdn4_dataplan}
  */
  readonly pdn4Dataplan?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#preferred_carrier ObjectExtensioncontrollerExtenderprofile#preferred_carrier}
  */
  readonly preferredCarrier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#redundant_intf ObjectExtensioncontrollerExtenderprofile#redundant_intf}
  */
  readonly redundantIntf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#redundant_mode ObjectExtensioncontrollerExtenderprofile#redundant_mode}
  */
  readonly redundantMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#sim1_pin ObjectExtensioncontrollerExtenderprofile#sim1_pin}
  */
  readonly sim1Pin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#sim1_pin_code ObjectExtensioncontrollerExtenderprofile#sim1_pin_code}
  */
  readonly sim1PinCode?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#sim2_pin ObjectExtensioncontrollerExtenderprofile#sim2_pin}
  */
  readonly sim2Pin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#sim2_pin_code ObjectExtensioncontrollerExtenderprofile#sim2_pin_code}
  */
  readonly sim2PinCode?: string[];
  /**
  * auto_switch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#auto_switch ObjectExtensioncontrollerExtenderprofile#auto_switch}
  */
  readonly autoSwitch?: ObjectExtensioncontrollerExtenderprofileCellularModem1AutoSwitch;
}

export function objectExtensioncontrollerExtenderprofileCellularModem1ToTerraform(struct?: ObjectExtensioncontrollerExtenderprofileCellularModem1OutputReference | ObjectExtensioncontrollerExtenderprofileCellularModem1): any {
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
    auto_switch: objectExtensioncontrollerExtenderprofileCellularModem1AutoSwitchToTerraform(struct!.autoSwitch),
  }
}


export function objectExtensioncontrollerExtenderprofileCellularModem1ToHclTerraform(struct?: ObjectExtensioncontrollerExtenderprofileCellularModem1OutputReference | ObjectExtensioncontrollerExtenderprofileCellularModem1): any {
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
      value: objectExtensioncontrollerExtenderprofileCellularModem1AutoSwitchToHclTerraform(struct!.autoSwitch),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectExtensioncontrollerExtenderprofileCellularModem1AutoSwitchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectExtensioncontrollerExtenderprofileCellularModem1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectExtensioncontrollerExtenderprofileCellularModem1 | undefined {
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

  public set internalValue(value: ObjectExtensioncontrollerExtenderprofileCellularModem1 | undefined) {
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
  private _autoSwitch = new ObjectExtensioncontrollerExtenderprofileCellularModem1AutoSwitchOutputReference(this, "auto_switch");
  public get autoSwitch() {
    return this._autoSwitch;
  }
  public putAutoSwitch(value: ObjectExtensioncontrollerExtenderprofileCellularModem1AutoSwitch) {
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
export interface ObjectExtensioncontrollerExtenderprofileCellularModem2AutoSwitch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#dataplan ObjectExtensioncontrollerExtenderprofile#dataplan}
  */
  readonly dataplan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#disconnect ObjectExtensioncontrollerExtenderprofile#disconnect}
  */
  readonly disconnect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#disconnect_period ObjectExtensioncontrollerExtenderprofile#disconnect_period}
  */
  readonly disconnectPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#disconnect_threshold ObjectExtensioncontrollerExtenderprofile#disconnect_threshold}
  */
  readonly disconnectThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#signal ObjectExtensioncontrollerExtenderprofile#signal}
  */
  readonly signal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#switch_back ObjectExtensioncontrollerExtenderprofile#switch_back}
  */
  readonly switchBack?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#switch_back_time ObjectExtensioncontrollerExtenderprofile#switch_back_time}
  */
  readonly switchBackTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#switch_back_timer ObjectExtensioncontrollerExtenderprofile#switch_back_timer}
  */
  readonly switchBackTimer?: number;
}

export function objectExtensioncontrollerExtenderprofileCellularModem2AutoSwitchToTerraform(struct?: ObjectExtensioncontrollerExtenderprofileCellularModem2AutoSwitchOutputReference | ObjectExtensioncontrollerExtenderprofileCellularModem2AutoSwitch): any {
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


export function objectExtensioncontrollerExtenderprofileCellularModem2AutoSwitchToHclTerraform(struct?: ObjectExtensioncontrollerExtenderprofileCellularModem2AutoSwitchOutputReference | ObjectExtensioncontrollerExtenderprofileCellularModem2AutoSwitch): any {
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

export class ObjectExtensioncontrollerExtenderprofileCellularModem2AutoSwitchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectExtensioncontrollerExtenderprofileCellularModem2AutoSwitch | undefined {
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

  public set internalValue(value: ObjectExtensioncontrollerExtenderprofileCellularModem2AutoSwitch | undefined) {
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
export interface ObjectExtensioncontrollerExtenderprofileCellularModem2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#conn_status ObjectExtensioncontrollerExtenderprofile#conn_status}
  */
  readonly connStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#default_sim ObjectExtensioncontrollerExtenderprofile#default_sim}
  */
  readonly defaultSim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#gps ObjectExtensioncontrollerExtenderprofile#gps}
  */
  readonly gps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#modem_id ObjectExtensioncontrollerExtenderprofile#modem_id}
  */
  readonly modemId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#multiple_pdn ObjectExtensioncontrollerExtenderprofile#multiple_pdn}
  */
  readonly multiplePdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#pdn1_dataplan ObjectExtensioncontrollerExtenderprofile#pdn1_dataplan}
  */
  readonly pdn1Dataplan?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#pdn2_dataplan ObjectExtensioncontrollerExtenderprofile#pdn2_dataplan}
  */
  readonly pdn2Dataplan?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#pdn3_dataplan ObjectExtensioncontrollerExtenderprofile#pdn3_dataplan}
  */
  readonly pdn3Dataplan?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#pdn4_dataplan ObjectExtensioncontrollerExtenderprofile#pdn4_dataplan}
  */
  readonly pdn4Dataplan?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#preferred_carrier ObjectExtensioncontrollerExtenderprofile#preferred_carrier}
  */
  readonly preferredCarrier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#redundant_intf ObjectExtensioncontrollerExtenderprofile#redundant_intf}
  */
  readonly redundantIntf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#redundant_mode ObjectExtensioncontrollerExtenderprofile#redundant_mode}
  */
  readonly redundantMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#sim1_pin ObjectExtensioncontrollerExtenderprofile#sim1_pin}
  */
  readonly sim1Pin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#sim1_pin_code ObjectExtensioncontrollerExtenderprofile#sim1_pin_code}
  */
  readonly sim1PinCode?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#sim2_pin ObjectExtensioncontrollerExtenderprofile#sim2_pin}
  */
  readonly sim2Pin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#sim2_pin_code ObjectExtensioncontrollerExtenderprofile#sim2_pin_code}
  */
  readonly sim2PinCode?: string[];
  /**
  * auto_switch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#auto_switch ObjectExtensioncontrollerExtenderprofile#auto_switch}
  */
  readonly autoSwitch?: ObjectExtensioncontrollerExtenderprofileCellularModem2AutoSwitch;
}

export function objectExtensioncontrollerExtenderprofileCellularModem2ToTerraform(struct?: ObjectExtensioncontrollerExtenderprofileCellularModem2OutputReference | ObjectExtensioncontrollerExtenderprofileCellularModem2): any {
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
    auto_switch: objectExtensioncontrollerExtenderprofileCellularModem2AutoSwitchToTerraform(struct!.autoSwitch),
  }
}


export function objectExtensioncontrollerExtenderprofileCellularModem2ToHclTerraform(struct?: ObjectExtensioncontrollerExtenderprofileCellularModem2OutputReference | ObjectExtensioncontrollerExtenderprofileCellularModem2): any {
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
      value: objectExtensioncontrollerExtenderprofileCellularModem2AutoSwitchToHclTerraform(struct!.autoSwitch),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectExtensioncontrollerExtenderprofileCellularModem2AutoSwitchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectExtensioncontrollerExtenderprofileCellularModem2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectExtensioncontrollerExtenderprofileCellularModem2 | undefined {
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

  public set internalValue(value: ObjectExtensioncontrollerExtenderprofileCellularModem2 | undefined) {
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
  private _autoSwitch = new ObjectExtensioncontrollerExtenderprofileCellularModem2AutoSwitchOutputReference(this, "auto_switch");
  public get autoSwitch() {
    return this._autoSwitch;
  }
  public putAutoSwitch(value: ObjectExtensioncontrollerExtenderprofileCellularModem2AutoSwitch) {
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
export interface ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationAlert {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#data_exhausted ObjectExtensioncontrollerExtenderprofile#data_exhausted}
  */
  readonly dataExhausted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#fgt_backup_mode_switch ObjectExtensioncontrollerExtenderprofile#fgt_backup_mode_switch}
  */
  readonly fgtBackupModeSwitch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#low_signal_strength ObjectExtensioncontrollerExtenderprofile#low_signal_strength}
  */
  readonly lowSignalStrength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#mode_switch ObjectExtensioncontrollerExtenderprofile#mode_switch}
  */
  readonly modeSwitch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#os_image_fallback ObjectExtensioncontrollerExtenderprofile#os_image_fallback}
  */
  readonly osImageFallback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#session_disconnect ObjectExtensioncontrollerExtenderprofile#session_disconnect}
  */
  readonly sessionDisconnect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#system_reboot ObjectExtensioncontrollerExtenderprofile#system_reboot}
  */
  readonly systemReboot?: string;
}

export function objectExtensioncontrollerExtenderprofileCellularSmsNotificationAlertToTerraform(struct?: ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationAlertOutputReference | ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationAlert): any {
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


export function objectExtensioncontrollerExtenderprofileCellularSmsNotificationAlertToHclTerraform(struct?: ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationAlertOutputReference | ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationAlert): any {
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

export class ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationAlertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationAlert | undefined {
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

  public set internalValue(value: ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationAlert | undefined) {
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
export interface ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationReceiver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#alert ObjectExtensioncontrollerExtenderprofile#alert}
  */
  readonly alert?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#name ObjectExtensioncontrollerExtenderprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#phone_number ObjectExtensioncontrollerExtenderprofile#phone_number}
  */
  readonly phoneNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#status ObjectExtensioncontrollerExtenderprofile#status}
  */
  readonly status?: string;
}

export function objectExtensioncontrollerExtenderprofileCellularSmsNotificationReceiverToTerraform(struct?: ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationReceiver | cdktf.IResolvable): any {
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


export function objectExtensioncontrollerExtenderprofileCellularSmsNotificationReceiverToHclTerraform(struct?: ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationReceiver | cdktf.IResolvable): any {
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

export class ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationReceiverOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationReceiver | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationReceiver | cdktf.IResolvable | undefined) {
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

export class ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationReceiverList extends cdktf.ComplexList {
  public internalValue? : ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationReceiver[] | cdktf.IResolvable

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
  public get(index: number): ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationReceiverOutputReference {
    return new ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationReceiverOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectExtensioncontrollerExtenderprofileCellularSmsNotification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#status ObjectExtensioncontrollerExtenderprofile#status}
  */
  readonly status?: string;
  /**
  * alert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#alert ObjectExtensioncontrollerExtenderprofile#alert}
  */
  readonly alert?: ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationAlert;
  /**
  * receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#receiver ObjectExtensioncontrollerExtenderprofile#receiver}
  */
  readonly receiver?: ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationReceiver[] | cdktf.IResolvable;
}

export function objectExtensioncontrollerExtenderprofileCellularSmsNotificationToTerraform(struct?: ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationOutputReference | ObjectExtensioncontrollerExtenderprofileCellularSmsNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
    alert: objectExtensioncontrollerExtenderprofileCellularSmsNotificationAlertToTerraform(struct!.alert),
    receiver: cdktf.listMapper(objectExtensioncontrollerExtenderprofileCellularSmsNotificationReceiverToTerraform, true)(struct!.receiver),
  }
}


export function objectExtensioncontrollerExtenderprofileCellularSmsNotificationToHclTerraform(struct?: ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationOutputReference | ObjectExtensioncontrollerExtenderprofileCellularSmsNotification): any {
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
      value: objectExtensioncontrollerExtenderprofileCellularSmsNotificationAlertToHclTerraform(struct!.alert),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationAlertList",
    },
    receiver: {
      value: cdktf.listMapperHcl(objectExtensioncontrollerExtenderprofileCellularSmsNotificationReceiverToHclTerraform, true)(struct!.receiver),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationReceiverList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectExtensioncontrollerExtenderprofileCellularSmsNotification | undefined {
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

  public set internalValue(value: ObjectExtensioncontrollerExtenderprofileCellularSmsNotification | undefined) {
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
  private _alert = new ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationAlertOutputReference(this, "alert");
  public get alert() {
    return this._alert;
  }
  public putAlert(value: ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationAlert) {
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
  private _receiver = new ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationReceiverList(this, "receiver", false);
  public get receiver() {
    return this._receiver;
  }
  public putReceiver(value: ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationReceiver[] | cdktf.IResolvable) {
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
export interface ObjectExtensioncontrollerExtenderprofileCellular {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#dataplan ObjectExtensioncontrollerExtenderprofile#dataplan}
  */
  readonly dataplan?: string[];
  /**
  * controller_report block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#controller_report ObjectExtensioncontrollerExtenderprofile#controller_report}
  */
  readonly controllerReport?: ObjectExtensioncontrollerExtenderprofileCellularControllerReport;
  /**
  * modem1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#modem1 ObjectExtensioncontrollerExtenderprofile#modem1}
  */
  readonly modem1?: ObjectExtensioncontrollerExtenderprofileCellularModem1;
  /**
  * modem2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#modem2 ObjectExtensioncontrollerExtenderprofile#modem2}
  */
  readonly modem2?: ObjectExtensioncontrollerExtenderprofileCellularModem2;
  /**
  * sms_notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#sms_notification ObjectExtensioncontrollerExtenderprofile#sms_notification}
  */
  readonly smsNotification?: ObjectExtensioncontrollerExtenderprofileCellularSmsNotification;
}

export function objectExtensioncontrollerExtenderprofileCellularToTerraform(struct?: ObjectExtensioncontrollerExtenderprofileCellularOutputReference | ObjectExtensioncontrollerExtenderprofileCellular): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataplan: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dataplan),
    controller_report: objectExtensioncontrollerExtenderprofileCellularControllerReportToTerraform(struct!.controllerReport),
    modem1: objectExtensioncontrollerExtenderprofileCellularModem1ToTerraform(struct!.modem1),
    modem2: objectExtensioncontrollerExtenderprofileCellularModem2ToTerraform(struct!.modem2),
    sms_notification: objectExtensioncontrollerExtenderprofileCellularSmsNotificationToTerraform(struct!.smsNotification),
  }
}


export function objectExtensioncontrollerExtenderprofileCellularToHclTerraform(struct?: ObjectExtensioncontrollerExtenderprofileCellularOutputReference | ObjectExtensioncontrollerExtenderprofileCellular): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataplan: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dataplan),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    controller_report: {
      value: objectExtensioncontrollerExtenderprofileCellularControllerReportToHclTerraform(struct!.controllerReport),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectExtensioncontrollerExtenderprofileCellularControllerReportList",
    },
    modem1: {
      value: objectExtensioncontrollerExtenderprofileCellularModem1ToHclTerraform(struct!.modem1),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectExtensioncontrollerExtenderprofileCellularModem1List",
    },
    modem2: {
      value: objectExtensioncontrollerExtenderprofileCellularModem2ToHclTerraform(struct!.modem2),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectExtensioncontrollerExtenderprofileCellularModem2List",
    },
    sms_notification: {
      value: objectExtensioncontrollerExtenderprofileCellularSmsNotificationToHclTerraform(struct!.smsNotification),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectExtensioncontrollerExtenderprofileCellularOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectExtensioncontrollerExtenderprofileCellular | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataplan !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataplan = this._dataplan;
    }
    if (this._controllerReport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerReport = this._controllerReport?.internalValue;
    }
    if (this._modem1?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modem1 = this._modem1?.internalValue;
    }
    if (this._modem2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modem2 = this._modem2?.internalValue;
    }
    if (this._smsNotification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsNotification = this._smsNotification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectExtensioncontrollerExtenderprofileCellular | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataplan = undefined;
      this._controllerReport.internalValue = undefined;
      this._modem1.internalValue = undefined;
      this._modem2.internalValue = undefined;
      this._smsNotification.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataplan = value.dataplan;
      this._controllerReport.internalValue = value.controllerReport;
      this._modem1.internalValue = value.modem1;
      this._modem2.internalValue = value.modem2;
      this._smsNotification.internalValue = value.smsNotification;
    }
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

  // controller_report - computed: false, optional: true, required: false
  private _controllerReport = new ObjectExtensioncontrollerExtenderprofileCellularControllerReportOutputReference(this, "controller_report");
  public get controllerReport() {
    return this._controllerReport;
  }
  public putControllerReport(value: ObjectExtensioncontrollerExtenderprofileCellularControllerReport) {
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
  private _modem1 = new ObjectExtensioncontrollerExtenderprofileCellularModem1OutputReference(this, "modem1");
  public get modem1() {
    return this._modem1;
  }
  public putModem1(value: ObjectExtensioncontrollerExtenderprofileCellularModem1) {
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
  private _modem2 = new ObjectExtensioncontrollerExtenderprofileCellularModem2OutputReference(this, "modem2");
  public get modem2() {
    return this._modem2;
  }
  public putModem2(value: ObjectExtensioncontrollerExtenderprofileCellularModem2) {
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
  private _smsNotification = new ObjectExtensioncontrollerExtenderprofileCellularSmsNotificationOutputReference(this, "sms_notification");
  public get smsNotification() {
    return this._smsNotification;
  }
  public putSmsNotification(value: ObjectExtensioncontrollerExtenderprofileCellularSmsNotification) {
    this._smsNotification.internalValue = value;
  }
  public resetSmsNotification() {
    this._smsNotification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsNotificationInput() {
    return this._smsNotification.internalValue;
  }
}
export interface ObjectExtensioncontrollerExtenderprofileLanExtensionBackhaul {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#name ObjectExtensioncontrollerExtenderprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#port ObjectExtensioncontrollerExtenderprofile#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#role ObjectExtensioncontrollerExtenderprofile#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#weight ObjectExtensioncontrollerExtenderprofile#weight}
  */
  readonly weight?: number;
}

export function objectExtensioncontrollerExtenderprofileLanExtensionBackhaulToTerraform(struct?: ObjectExtensioncontrollerExtenderprofileLanExtensionBackhaul | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.stringToTerraform(struct!.port),
    role: cdktf.stringToTerraform(struct!.role),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function objectExtensioncontrollerExtenderprofileLanExtensionBackhaulToHclTerraform(struct?: ObjectExtensioncontrollerExtenderprofileLanExtensionBackhaul | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectExtensioncontrollerExtenderprofileLanExtensionBackhaulOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectExtensioncontrollerExtenderprofileLanExtensionBackhaul | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectExtensioncontrollerExtenderprofileLanExtensionBackhaul | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._port = undefined;
      this._role = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._port = value.port;
      this._role = value.role;
      this._weight = value.weight;
    }
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

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class ObjectExtensioncontrollerExtenderprofileLanExtensionBackhaulList extends cdktf.ComplexList {
  public internalValue? : ObjectExtensioncontrollerExtenderprofileLanExtensionBackhaul[] | cdktf.IResolvable

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
  public get(index: number): ObjectExtensioncontrollerExtenderprofileLanExtensionBackhaulOutputReference {
    return new ObjectExtensioncontrollerExtenderprofileLanExtensionBackhaulOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectExtensioncontrollerExtenderprofileLanExtensionDownlinks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#name ObjectExtensioncontrollerExtenderprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#port ObjectExtensioncontrollerExtenderprofile#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#pvid ObjectExtensioncontrollerExtenderprofile#pvid}
  */
  readonly pvid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#type ObjectExtensioncontrollerExtenderprofile#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#vap ObjectExtensioncontrollerExtenderprofile#vap}
  */
  readonly vap?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#vids ObjectExtensioncontrollerExtenderprofile#vids}
  */
  readonly vids?: number[];
}

export function objectExtensioncontrollerExtenderprofileLanExtensionDownlinksToTerraform(struct?: ObjectExtensioncontrollerExtenderprofileLanExtensionDownlinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.stringToTerraform(struct!.port),
    pvid: cdktf.numberToTerraform(struct!.pvid),
    type: cdktf.stringToTerraform(struct!.type),
    vap: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vap),
    vids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.vids),
  }
}


export function objectExtensioncontrollerExtenderprofileLanExtensionDownlinksToHclTerraform(struct?: ObjectExtensioncontrollerExtenderprofileLanExtensionDownlinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pvid: {
      value: cdktf.numberToHclTerraform(struct!.pvid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vap: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vap),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.vids),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectExtensioncontrollerExtenderprofileLanExtensionDownlinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectExtensioncontrollerExtenderprofileLanExtensionDownlinks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._pvid !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvid = this._pvid;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vap !== undefined) {
      hasAnyValues = true;
      internalValueResult.vap = this._vap;
    }
    if (this._vids !== undefined) {
      hasAnyValues = true;
      internalValueResult.vids = this._vids;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectExtensioncontrollerExtenderprofileLanExtensionDownlinks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._port = undefined;
      this._pvid = undefined;
      this._type = undefined;
      this._vap = undefined;
      this._vids = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._port = value.port;
      this._pvid = value.pvid;
      this._type = value.type;
      this._vap = value.vap;
      this._vids = value.vids;
    }
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

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // pvid - computed: true, optional: true, required: false
  private _pvid?: number; 
  public get pvid() {
    return this.getNumberAttribute('pvid');
  }
  public set pvid(value: number) {
    this._pvid = value;
  }
  public resetPvid() {
    this._pvid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvidInput() {
    return this._pvid;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vap - computed: true, optional: true, required: false
  private _vap?: string[]; 
  public get vap() {
    return cdktf.Fn.tolist(this.getListAttribute('vap'));
  }
  public set vap(value: string[]) {
    this._vap = value;
  }
  public resetVap() {
    this._vap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vapInput() {
    return this._vap;
  }

  // vids - computed: true, optional: true, required: false
  private _vids?: number[]; 
  public get vids() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('vids')));
  }
  public set vids(value: number[]) {
    this._vids = value;
  }
  public resetVids() {
    this._vids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vidsInput() {
    return this._vids;
  }
}

export class ObjectExtensioncontrollerExtenderprofileLanExtensionDownlinksList extends cdktf.ComplexList {
  public internalValue? : ObjectExtensioncontrollerExtenderprofileLanExtensionDownlinks[] | cdktf.IResolvable

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
  public get(index: number): ObjectExtensioncontrollerExtenderprofileLanExtensionDownlinksOutputReference {
    return new ObjectExtensioncontrollerExtenderprofileLanExtensionDownlinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectExtensioncontrollerExtenderprofileLanExtensionTrafficSplitServices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#address ObjectExtensioncontrollerExtenderprofile#address}
  */
  readonly address?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#name ObjectExtensioncontrollerExtenderprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#service ObjectExtensioncontrollerExtenderprofile#service}
  */
  readonly service?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#vsdb ObjectExtensioncontrollerExtenderprofile#vsdb}
  */
  readonly vsdb?: string;
}

export function objectExtensioncontrollerExtenderprofileLanExtensionTrafficSplitServicesToTerraform(struct?: ObjectExtensioncontrollerExtenderprofileLanExtensionTrafficSplitServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.address),
    name: cdktf.stringToTerraform(struct!.name),
    service: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.service),
    vsdb: cdktf.stringToTerraform(struct!.vsdb),
  }
}


export function objectExtensioncontrollerExtenderprofileLanExtensionTrafficSplitServicesToHclTerraform(struct?: ObjectExtensioncontrollerExtenderprofileLanExtensionTrafficSplitServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.address),
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
    service: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.service),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vsdb: {
      value: cdktf.stringToHclTerraform(struct!.vsdb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectExtensioncontrollerExtenderprofileLanExtensionTrafficSplitServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectExtensioncontrollerExtenderprofileLanExtensionTrafficSplitServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._vsdb !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsdb = this._vsdb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectExtensioncontrollerExtenderprofileLanExtensionTrafficSplitServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._name = undefined;
      this._service = undefined;
      this._vsdb = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._name = value.name;
      this._service = value.service;
      this._vsdb = value.vsdb;
    }
  }

  // address - computed: true, optional: true, required: false
  private _address?: string[]; 
  public get address() {
    return cdktf.Fn.tolist(this.getListAttribute('address'));
  }
  public set address(value: string[]) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
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

  // service - computed: true, optional: true, required: false
  private _service?: string[]; 
  public get service() {
    return cdktf.Fn.tolist(this.getListAttribute('service'));
  }
  public set service(value: string[]) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // vsdb - computed: true, optional: true, required: false
  private _vsdb?: string; 
  public get vsdb() {
    return this.getStringAttribute('vsdb');
  }
  public set vsdb(value: string) {
    this._vsdb = value;
  }
  public resetVsdb() {
    this._vsdb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsdbInput() {
    return this._vsdb;
  }
}

export class ObjectExtensioncontrollerExtenderprofileLanExtensionTrafficSplitServicesList extends cdktf.ComplexList {
  public internalValue? : ObjectExtensioncontrollerExtenderprofileLanExtensionTrafficSplitServices[] | cdktf.IResolvable

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
  public get(index: number): ObjectExtensioncontrollerExtenderprofileLanExtensionTrafficSplitServicesOutputReference {
    return new ObjectExtensioncontrollerExtenderprofileLanExtensionTrafficSplitServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectExtensioncontrollerExtenderprofileLanExtension {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#backhaul_interface ObjectExtensioncontrollerExtenderprofile#backhaul_interface}
  */
  readonly backhaulInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#backhaul_ip ObjectExtensioncontrollerExtenderprofile#backhaul_ip}
  */
  readonly backhaulIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#ipsec_tunnel ObjectExtensioncontrollerExtenderprofile#ipsec_tunnel}
  */
  readonly ipsecTunnel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#link_loadbalance ObjectExtensioncontrollerExtenderprofile#link_loadbalance}
  */
  readonly linkLoadbalance?: string;
  /**
  * backhaul block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#backhaul ObjectExtensioncontrollerExtenderprofile#backhaul}
  */
  readonly backhaul?: ObjectExtensioncontrollerExtenderprofileLanExtensionBackhaul[] | cdktf.IResolvable;
  /**
  * downlinks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#downlinks ObjectExtensioncontrollerExtenderprofile#downlinks}
  */
  readonly downlinks?: ObjectExtensioncontrollerExtenderprofileLanExtensionDownlinks[] | cdktf.IResolvable;
  /**
  * traffic_split_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#traffic_split_services ObjectExtensioncontrollerExtenderprofile#traffic_split_services}
  */
  readonly trafficSplitServices?: ObjectExtensioncontrollerExtenderprofileLanExtensionTrafficSplitServices[] | cdktf.IResolvable;
}

export function objectExtensioncontrollerExtenderprofileLanExtensionToTerraform(struct?: ObjectExtensioncontrollerExtenderprofileLanExtensionOutputReference | ObjectExtensioncontrollerExtenderprofileLanExtension): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backhaul_interface: cdktf.stringToTerraform(struct!.backhaulInterface),
    backhaul_ip: cdktf.stringToTerraform(struct!.backhaulIp),
    ipsec_tunnel: cdktf.stringToTerraform(struct!.ipsecTunnel),
    link_loadbalance: cdktf.stringToTerraform(struct!.linkLoadbalance),
    backhaul: cdktf.listMapper(objectExtensioncontrollerExtenderprofileLanExtensionBackhaulToTerraform, true)(struct!.backhaul),
    downlinks: cdktf.listMapper(objectExtensioncontrollerExtenderprofileLanExtensionDownlinksToTerraform, true)(struct!.downlinks),
    traffic_split_services: cdktf.listMapper(objectExtensioncontrollerExtenderprofileLanExtensionTrafficSplitServicesToTerraform, true)(struct!.trafficSplitServices),
  }
}


export function objectExtensioncontrollerExtenderprofileLanExtensionToHclTerraform(struct?: ObjectExtensioncontrollerExtenderprofileLanExtensionOutputReference | ObjectExtensioncontrollerExtenderprofileLanExtension): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backhaul_interface: {
      value: cdktf.stringToHclTerraform(struct!.backhaulInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backhaul_ip: {
      value: cdktf.stringToHclTerraform(struct!.backhaulIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_tunnel: {
      value: cdktf.stringToHclTerraform(struct!.ipsecTunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link_loadbalance: {
      value: cdktf.stringToHclTerraform(struct!.linkLoadbalance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backhaul: {
      value: cdktf.listMapperHcl(objectExtensioncontrollerExtenderprofileLanExtensionBackhaulToHclTerraform, true)(struct!.backhaul),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectExtensioncontrollerExtenderprofileLanExtensionBackhaulList",
    },
    downlinks: {
      value: cdktf.listMapperHcl(objectExtensioncontrollerExtenderprofileLanExtensionDownlinksToHclTerraform, true)(struct!.downlinks),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectExtensioncontrollerExtenderprofileLanExtensionDownlinksList",
    },
    traffic_split_services: {
      value: cdktf.listMapperHcl(objectExtensioncontrollerExtenderprofileLanExtensionTrafficSplitServicesToHclTerraform, true)(struct!.trafficSplitServices),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectExtensioncontrollerExtenderprofileLanExtensionTrafficSplitServicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectExtensioncontrollerExtenderprofileLanExtensionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectExtensioncontrollerExtenderprofileLanExtension | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backhaulInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.backhaulInterface = this._backhaulInterface;
    }
    if (this._backhaulIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.backhaulIp = this._backhaulIp;
    }
    if (this._ipsecTunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecTunnel = this._ipsecTunnel;
    }
    if (this._linkLoadbalance !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkLoadbalance = this._linkLoadbalance;
    }
    if (this._backhaul?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backhaul = this._backhaul?.internalValue;
    }
    if (this._downlinks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.downlinks = this._downlinks?.internalValue;
    }
    if (this._trafficSplitServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficSplitServices = this._trafficSplitServices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectExtensioncontrollerExtenderprofileLanExtension | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backhaulInterface = undefined;
      this._backhaulIp = undefined;
      this._ipsecTunnel = undefined;
      this._linkLoadbalance = undefined;
      this._backhaul.internalValue = undefined;
      this._downlinks.internalValue = undefined;
      this._trafficSplitServices.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backhaulInterface = value.backhaulInterface;
      this._backhaulIp = value.backhaulIp;
      this._ipsecTunnel = value.ipsecTunnel;
      this._linkLoadbalance = value.linkLoadbalance;
      this._backhaul.internalValue = value.backhaul;
      this._downlinks.internalValue = value.downlinks;
      this._trafficSplitServices.internalValue = value.trafficSplitServices;
    }
  }

  // backhaul_interface - computed: false, optional: true, required: false
  private _backhaulInterface?: string; 
  public get backhaulInterface() {
    return this.getStringAttribute('backhaul_interface');
  }
  public set backhaulInterface(value: string) {
    this._backhaulInterface = value;
  }
  public resetBackhaulInterface() {
    this._backhaulInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backhaulInterfaceInput() {
    return this._backhaulInterface;
  }

  // backhaul_ip - computed: false, optional: true, required: false
  private _backhaulIp?: string; 
  public get backhaulIp() {
    return this.getStringAttribute('backhaul_ip');
  }
  public set backhaulIp(value: string) {
    this._backhaulIp = value;
  }
  public resetBackhaulIp() {
    this._backhaulIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backhaulIpInput() {
    return this._backhaulIp;
  }

  // ipsec_tunnel - computed: false, optional: true, required: false
  private _ipsecTunnel?: string; 
  public get ipsecTunnel() {
    return this.getStringAttribute('ipsec_tunnel');
  }
  public set ipsecTunnel(value: string) {
    this._ipsecTunnel = value;
  }
  public resetIpsecTunnel() {
    this._ipsecTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecTunnelInput() {
    return this._ipsecTunnel;
  }

  // link_loadbalance - computed: true, optional: true, required: false
  private _linkLoadbalance?: string; 
  public get linkLoadbalance() {
    return this.getStringAttribute('link_loadbalance');
  }
  public set linkLoadbalance(value: string) {
    this._linkLoadbalance = value;
  }
  public resetLinkLoadbalance() {
    this._linkLoadbalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkLoadbalanceInput() {
    return this._linkLoadbalance;
  }

  // backhaul - computed: false, optional: true, required: false
  private _backhaul = new ObjectExtensioncontrollerExtenderprofileLanExtensionBackhaulList(this, "backhaul", false);
  public get backhaul() {
    return this._backhaul;
  }
  public putBackhaul(value: ObjectExtensioncontrollerExtenderprofileLanExtensionBackhaul[] | cdktf.IResolvable) {
    this._backhaul.internalValue = value;
  }
  public resetBackhaul() {
    this._backhaul.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backhaulInput() {
    return this._backhaul.internalValue;
  }

  // downlinks - computed: false, optional: true, required: false
  private _downlinks = new ObjectExtensioncontrollerExtenderprofileLanExtensionDownlinksList(this, "downlinks", false);
  public get downlinks() {
    return this._downlinks;
  }
  public putDownlinks(value: ObjectExtensioncontrollerExtenderprofileLanExtensionDownlinks[] | cdktf.IResolvable) {
    this._downlinks.internalValue = value;
  }
  public resetDownlinks() {
    this._downlinks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downlinksInput() {
    return this._downlinks.internalValue;
  }

  // traffic_split_services - computed: false, optional: true, required: false
  private _trafficSplitServices = new ObjectExtensioncontrollerExtenderprofileLanExtensionTrafficSplitServicesList(this, "traffic_split_services", false);
  public get trafficSplitServices() {
    return this._trafficSplitServices;
  }
  public putTrafficSplitServices(value: ObjectExtensioncontrollerExtenderprofileLanExtensionTrafficSplitServices[] | cdktf.IResolvable) {
    this._trafficSplitServices.internalValue = value;
  }
  public resetTrafficSplitServices() {
    this._trafficSplitServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficSplitServicesInput() {
    return this._trafficSplitServices.internalValue;
  }
}
export interface ObjectExtensioncontrollerExtenderprofileWifiRadio1 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#band ObjectExtensioncontrollerExtenderprofile#band}
  */
  readonly band?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#bandwidth ObjectExtensioncontrollerExtenderprofile#bandwidth}
  */
  readonly bandwidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#beacon_interval ObjectExtensioncontrollerExtenderprofile#beacon_interval}
  */
  readonly beaconInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#bss_color ObjectExtensioncontrollerExtenderprofile#bss_color}
  */
  readonly bssColor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#bss_color_mode ObjectExtensioncontrollerExtenderprofile#bss_color_mode}
  */
  readonly bssColorMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#channel ObjectExtensioncontrollerExtenderprofile#channel}
  */
  readonly channel?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#extension_channel ObjectExtensioncontrollerExtenderprofile#extension_channel}
  */
  readonly extensionChannel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#guard_interval ObjectExtensioncontrollerExtenderprofile#guard_interval}
  */
  readonly guardInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#lan_ext_vap ObjectExtensioncontrollerExtenderprofile#lan_ext_vap}
  */
  readonly lanExtVap?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#local_vaps ObjectExtensioncontrollerExtenderprofile#local_vaps}
  */
  readonly localVaps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#max_clients ObjectExtensioncontrollerExtenderprofile#max_clients}
  */
  readonly maxClients?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#mode ObjectExtensioncontrollerExtenderprofile#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#n80211d ObjectExtensioncontrollerExtenderprofile#n80211d}
  */
  readonly n80211D?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#operating_standard ObjectExtensioncontrollerExtenderprofile#operating_standard}
  */
  readonly operatingStandard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#power_level ObjectExtensioncontrollerExtenderprofile#power_level}
  */
  readonly powerLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#radio_id ObjectExtensioncontrollerExtenderprofile#radio_id}
  */
  readonly radioId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#status ObjectExtensioncontrollerExtenderprofile#status}
  */
  readonly status?: string;
}

export function objectExtensioncontrollerExtenderprofileWifiRadio1ToTerraform(struct?: ObjectExtensioncontrollerExtenderprofileWifiRadio1OutputReference | ObjectExtensioncontrollerExtenderprofileWifiRadio1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    band: cdktf.stringToTerraform(struct!.band),
    bandwidth: cdktf.stringToTerraform(struct!.bandwidth),
    beacon_interval: cdktf.numberToTerraform(struct!.beaconInterval),
    bss_color: cdktf.numberToTerraform(struct!.bssColor),
    bss_color_mode: cdktf.stringToTerraform(struct!.bssColorMode),
    channel: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channel),
    extension_channel: cdktf.stringToTerraform(struct!.extensionChannel),
    guard_interval: cdktf.stringToTerraform(struct!.guardInterval),
    lan_ext_vap: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lanExtVap),
    local_vaps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.localVaps),
    max_clients: cdktf.numberToTerraform(struct!.maxClients),
    mode: cdktf.stringToTerraform(struct!.mode),
    n80211d: cdktf.stringToTerraform(struct!.n80211D),
    operating_standard: cdktf.stringToTerraform(struct!.operatingStandard),
    power_level: cdktf.numberToTerraform(struct!.powerLevel),
    radio_id: cdktf.numberToTerraform(struct!.radioId),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function objectExtensioncontrollerExtenderprofileWifiRadio1ToHclTerraform(struct?: ObjectExtensioncontrollerExtenderprofileWifiRadio1OutputReference | ObjectExtensioncontrollerExtenderprofileWifiRadio1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    band: {
      value: cdktf.stringToHclTerraform(struct!.band),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth: {
      value: cdktf.stringToHclTerraform(struct!.bandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    beacon_interval: {
      value: cdktf.numberToHclTerraform(struct!.beaconInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bss_color: {
      value: cdktf.numberToHclTerraform(struct!.bssColor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bss_color_mode: {
      value: cdktf.stringToHclTerraform(struct!.bssColorMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channel),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    extension_channel: {
      value: cdktf.stringToHclTerraform(struct!.extensionChannel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guard_interval: {
      value: cdktf.stringToHclTerraform(struct!.guardInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lan_ext_vap: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.lanExtVap),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    local_vaps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.localVaps),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    max_clients: {
      value: cdktf.numberToHclTerraform(struct!.maxClients),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    n80211d: {
      value: cdktf.stringToHclTerraform(struct!.n80211D),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operating_standard: {
      value: cdktf.stringToHclTerraform(struct!.operatingStandard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    power_level: {
      value: cdktf.numberToHclTerraform(struct!.powerLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radio_id: {
      value: cdktf.numberToHclTerraform(struct!.radioId),
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

export class ObjectExtensioncontrollerExtenderprofileWifiRadio1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectExtensioncontrollerExtenderprofileWifiRadio1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._band !== undefined) {
      hasAnyValues = true;
      internalValueResult.band = this._band;
    }
    if (this._bandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidth = this._bandwidth;
    }
    if (this._beaconInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.beaconInterval = this._beaconInterval;
    }
    if (this._bssColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.bssColor = this._bssColor;
    }
    if (this._bssColorMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.bssColorMode = this._bssColorMode;
    }
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._extensionChannel !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionChannel = this._extensionChannel;
    }
    if (this._guardInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.guardInterval = this._guardInterval;
    }
    if (this._lanExtVap !== undefined) {
      hasAnyValues = true;
      internalValueResult.lanExtVap = this._lanExtVap;
    }
    if (this._localVaps !== undefined) {
      hasAnyValues = true;
      internalValueResult.localVaps = this._localVaps;
    }
    if (this._maxClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxClients = this._maxClients;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._n80211D !== undefined) {
      hasAnyValues = true;
      internalValueResult.n80211D = this._n80211D;
    }
    if (this._operatingStandard !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatingStandard = this._operatingStandard;
    }
    if (this._powerLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerLevel = this._powerLevel;
    }
    if (this._radioId !== undefined) {
      hasAnyValues = true;
      internalValueResult.radioId = this._radioId;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectExtensioncontrollerExtenderprofileWifiRadio1 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._band = undefined;
      this._bandwidth = undefined;
      this._beaconInterval = undefined;
      this._bssColor = undefined;
      this._bssColorMode = undefined;
      this._channel = undefined;
      this._extensionChannel = undefined;
      this._guardInterval = undefined;
      this._lanExtVap = undefined;
      this._localVaps = undefined;
      this._maxClients = undefined;
      this._mode = undefined;
      this._n80211D = undefined;
      this._operatingStandard = undefined;
      this._powerLevel = undefined;
      this._radioId = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._band = value.band;
      this._bandwidth = value.bandwidth;
      this._beaconInterval = value.beaconInterval;
      this._bssColor = value.bssColor;
      this._bssColorMode = value.bssColorMode;
      this._channel = value.channel;
      this._extensionChannel = value.extensionChannel;
      this._guardInterval = value.guardInterval;
      this._lanExtVap = value.lanExtVap;
      this._localVaps = value.localVaps;
      this._maxClients = value.maxClients;
      this._mode = value.mode;
      this._n80211D = value.n80211D;
      this._operatingStandard = value.operatingStandard;
      this._powerLevel = value.powerLevel;
      this._radioId = value.radioId;
      this._status = value.status;
    }
  }

  // band - computed: true, optional: true, required: false
  private _band?: string; 
  public get band() {
    return this.getStringAttribute('band');
  }
  public set band(value: string) {
    this._band = value;
  }
  public resetBand() {
    this._band = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandInput() {
    return this._band;
  }

  // bandwidth - computed: true, optional: true, required: false
  private _bandwidth?: string; 
  public get bandwidth() {
    return this.getStringAttribute('bandwidth');
  }
  public set bandwidth(value: string) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // beacon_interval - computed: true, optional: true, required: false
  private _beaconInterval?: number; 
  public get beaconInterval() {
    return this.getNumberAttribute('beacon_interval');
  }
  public set beaconInterval(value: number) {
    this._beaconInterval = value;
  }
  public resetBeaconInterval() {
    this._beaconInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beaconIntervalInput() {
    return this._beaconInterval;
  }

  // bss_color - computed: false, optional: true, required: false
  private _bssColor?: number; 
  public get bssColor() {
    return this.getNumberAttribute('bss_color');
  }
  public set bssColor(value: number) {
    this._bssColor = value;
  }
  public resetBssColor() {
    this._bssColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bssColorInput() {
    return this._bssColor;
  }

  // bss_color_mode - computed: true, optional: true, required: false
  private _bssColorMode?: string; 
  public get bssColorMode() {
    return this.getStringAttribute('bss_color_mode');
  }
  public set bssColorMode(value: string) {
    this._bssColorMode = value;
  }
  public resetBssColorMode() {
    this._bssColorMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bssColorModeInput() {
    return this._bssColorMode;
  }

  // channel - computed: true, optional: true, required: false
  private _channel?: string[]; 
  public get channel() {
    return cdktf.Fn.tolist(this.getListAttribute('channel'));
  }
  public set channel(value: string[]) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // extension_channel - computed: true, optional: true, required: false
  private _extensionChannel?: string; 
  public get extensionChannel() {
    return this.getStringAttribute('extension_channel');
  }
  public set extensionChannel(value: string) {
    this._extensionChannel = value;
  }
  public resetExtensionChannel() {
    this._extensionChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionChannelInput() {
    return this._extensionChannel;
  }

  // guard_interval - computed: true, optional: true, required: false
  private _guardInterval?: string; 
  public get guardInterval() {
    return this.getStringAttribute('guard_interval');
  }
  public set guardInterval(value: string) {
    this._guardInterval = value;
  }
  public resetGuardInterval() {
    this._guardInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guardIntervalInput() {
    return this._guardInterval;
  }

  // lan_ext_vap - computed: true, optional: true, required: false
  private _lanExtVap?: string[]; 
  public get lanExtVap() {
    return cdktf.Fn.tolist(this.getListAttribute('lan_ext_vap'));
  }
  public set lanExtVap(value: string[]) {
    this._lanExtVap = value;
  }
  public resetLanExtVap() {
    this._lanExtVap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lanExtVapInput() {
    return this._lanExtVap;
  }

  // local_vaps - computed: true, optional: true, required: false
  private _localVaps?: string[]; 
  public get localVaps() {
    return cdktf.Fn.tolist(this.getListAttribute('local_vaps'));
  }
  public set localVaps(value: string[]) {
    this._localVaps = value;
  }
  public resetLocalVaps() {
    this._localVaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localVapsInput() {
    return this._localVaps;
  }

  // max_clients - computed: false, optional: true, required: false
  private _maxClients?: number; 
  public get maxClients() {
    return this.getNumberAttribute('max_clients');
  }
  public set maxClients(value: number) {
    this._maxClients = value;
  }
  public resetMaxClients() {
    this._maxClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxClientsInput() {
    return this._maxClients;
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

  // n80211d - computed: true, optional: true, required: false
  private _n80211D?: string; 
  public get n80211D() {
    return this.getStringAttribute('n80211d');
  }
  public set n80211D(value: string) {
    this._n80211D = value;
  }
  public resetN80211D() {
    this._n80211D = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get n80211DInput() {
    return this._n80211D;
  }

  // operating_standard - computed: true, optional: true, required: false
  private _operatingStandard?: string; 
  public get operatingStandard() {
    return this.getStringAttribute('operating_standard');
  }
  public set operatingStandard(value: string) {
    this._operatingStandard = value;
  }
  public resetOperatingStandard() {
    this._operatingStandard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingStandardInput() {
    return this._operatingStandard;
  }

  // power_level - computed: true, optional: true, required: false
  private _powerLevel?: number; 
  public get powerLevel() {
    return this.getNumberAttribute('power_level');
  }
  public set powerLevel(value: number) {
    this._powerLevel = value;
  }
  public resetPowerLevel() {
    this._powerLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerLevelInput() {
    return this._powerLevel;
  }

  // radio_id - computed: false, optional: true, required: false
  private _radioId?: number; 
  public get radioId() {
    return this.getNumberAttribute('radio_id');
  }
  public set radioId(value: number) {
    this._radioId = value;
  }
  public resetRadioId() {
    this._radioId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioIdInput() {
    return this._radioId;
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
export interface ObjectExtensioncontrollerExtenderprofileWifiRadio2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#band ObjectExtensioncontrollerExtenderprofile#band}
  */
  readonly band?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#bandwidth ObjectExtensioncontrollerExtenderprofile#bandwidth}
  */
  readonly bandwidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#beacon_interval ObjectExtensioncontrollerExtenderprofile#beacon_interval}
  */
  readonly beaconInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#bss_color ObjectExtensioncontrollerExtenderprofile#bss_color}
  */
  readonly bssColor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#bss_color_mode ObjectExtensioncontrollerExtenderprofile#bss_color_mode}
  */
  readonly bssColorMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#channel ObjectExtensioncontrollerExtenderprofile#channel}
  */
  readonly channel?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#extension_channel ObjectExtensioncontrollerExtenderprofile#extension_channel}
  */
  readonly extensionChannel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#guard_interval ObjectExtensioncontrollerExtenderprofile#guard_interval}
  */
  readonly guardInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#lan_ext_vap ObjectExtensioncontrollerExtenderprofile#lan_ext_vap}
  */
  readonly lanExtVap?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#local_vaps ObjectExtensioncontrollerExtenderprofile#local_vaps}
  */
  readonly localVaps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#max_clients ObjectExtensioncontrollerExtenderprofile#max_clients}
  */
  readonly maxClients?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#mode ObjectExtensioncontrollerExtenderprofile#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#n80211d ObjectExtensioncontrollerExtenderprofile#n80211d}
  */
  readonly n80211D?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#operating_standard ObjectExtensioncontrollerExtenderprofile#operating_standard}
  */
  readonly operatingStandard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#power_level ObjectExtensioncontrollerExtenderprofile#power_level}
  */
  readonly powerLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#radio_id ObjectExtensioncontrollerExtenderprofile#radio_id}
  */
  readonly radioId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#status ObjectExtensioncontrollerExtenderprofile#status}
  */
  readonly status?: string;
}

export function objectExtensioncontrollerExtenderprofileWifiRadio2ToTerraform(struct?: ObjectExtensioncontrollerExtenderprofileWifiRadio2OutputReference | ObjectExtensioncontrollerExtenderprofileWifiRadio2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    band: cdktf.stringToTerraform(struct!.band),
    bandwidth: cdktf.stringToTerraform(struct!.bandwidth),
    beacon_interval: cdktf.numberToTerraform(struct!.beaconInterval),
    bss_color: cdktf.numberToTerraform(struct!.bssColor),
    bss_color_mode: cdktf.stringToTerraform(struct!.bssColorMode),
    channel: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channel),
    extension_channel: cdktf.stringToTerraform(struct!.extensionChannel),
    guard_interval: cdktf.stringToTerraform(struct!.guardInterval),
    lan_ext_vap: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lanExtVap),
    local_vaps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.localVaps),
    max_clients: cdktf.numberToTerraform(struct!.maxClients),
    mode: cdktf.stringToTerraform(struct!.mode),
    n80211d: cdktf.stringToTerraform(struct!.n80211D),
    operating_standard: cdktf.stringToTerraform(struct!.operatingStandard),
    power_level: cdktf.numberToTerraform(struct!.powerLevel),
    radio_id: cdktf.numberToTerraform(struct!.radioId),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function objectExtensioncontrollerExtenderprofileWifiRadio2ToHclTerraform(struct?: ObjectExtensioncontrollerExtenderprofileWifiRadio2OutputReference | ObjectExtensioncontrollerExtenderprofileWifiRadio2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    band: {
      value: cdktf.stringToHclTerraform(struct!.band),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth: {
      value: cdktf.stringToHclTerraform(struct!.bandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    beacon_interval: {
      value: cdktf.numberToHclTerraform(struct!.beaconInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bss_color: {
      value: cdktf.numberToHclTerraform(struct!.bssColor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bss_color_mode: {
      value: cdktf.stringToHclTerraform(struct!.bssColorMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channel),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    extension_channel: {
      value: cdktf.stringToHclTerraform(struct!.extensionChannel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guard_interval: {
      value: cdktf.stringToHclTerraform(struct!.guardInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lan_ext_vap: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.lanExtVap),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    local_vaps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.localVaps),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    max_clients: {
      value: cdktf.numberToHclTerraform(struct!.maxClients),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    n80211d: {
      value: cdktf.stringToHclTerraform(struct!.n80211D),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operating_standard: {
      value: cdktf.stringToHclTerraform(struct!.operatingStandard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    power_level: {
      value: cdktf.numberToHclTerraform(struct!.powerLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radio_id: {
      value: cdktf.numberToHclTerraform(struct!.radioId),
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

export class ObjectExtensioncontrollerExtenderprofileWifiRadio2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectExtensioncontrollerExtenderprofileWifiRadio2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._band !== undefined) {
      hasAnyValues = true;
      internalValueResult.band = this._band;
    }
    if (this._bandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidth = this._bandwidth;
    }
    if (this._beaconInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.beaconInterval = this._beaconInterval;
    }
    if (this._bssColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.bssColor = this._bssColor;
    }
    if (this._bssColorMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.bssColorMode = this._bssColorMode;
    }
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._extensionChannel !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionChannel = this._extensionChannel;
    }
    if (this._guardInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.guardInterval = this._guardInterval;
    }
    if (this._lanExtVap !== undefined) {
      hasAnyValues = true;
      internalValueResult.lanExtVap = this._lanExtVap;
    }
    if (this._localVaps !== undefined) {
      hasAnyValues = true;
      internalValueResult.localVaps = this._localVaps;
    }
    if (this._maxClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxClients = this._maxClients;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._n80211D !== undefined) {
      hasAnyValues = true;
      internalValueResult.n80211D = this._n80211D;
    }
    if (this._operatingStandard !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatingStandard = this._operatingStandard;
    }
    if (this._powerLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerLevel = this._powerLevel;
    }
    if (this._radioId !== undefined) {
      hasAnyValues = true;
      internalValueResult.radioId = this._radioId;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectExtensioncontrollerExtenderprofileWifiRadio2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._band = undefined;
      this._bandwidth = undefined;
      this._beaconInterval = undefined;
      this._bssColor = undefined;
      this._bssColorMode = undefined;
      this._channel = undefined;
      this._extensionChannel = undefined;
      this._guardInterval = undefined;
      this._lanExtVap = undefined;
      this._localVaps = undefined;
      this._maxClients = undefined;
      this._mode = undefined;
      this._n80211D = undefined;
      this._operatingStandard = undefined;
      this._powerLevel = undefined;
      this._radioId = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._band = value.band;
      this._bandwidth = value.bandwidth;
      this._beaconInterval = value.beaconInterval;
      this._bssColor = value.bssColor;
      this._bssColorMode = value.bssColorMode;
      this._channel = value.channel;
      this._extensionChannel = value.extensionChannel;
      this._guardInterval = value.guardInterval;
      this._lanExtVap = value.lanExtVap;
      this._localVaps = value.localVaps;
      this._maxClients = value.maxClients;
      this._mode = value.mode;
      this._n80211D = value.n80211D;
      this._operatingStandard = value.operatingStandard;
      this._powerLevel = value.powerLevel;
      this._radioId = value.radioId;
      this._status = value.status;
    }
  }

  // band - computed: true, optional: true, required: false
  private _band?: string; 
  public get band() {
    return this.getStringAttribute('band');
  }
  public set band(value: string) {
    this._band = value;
  }
  public resetBand() {
    this._band = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandInput() {
    return this._band;
  }

  // bandwidth - computed: true, optional: true, required: false
  private _bandwidth?: string; 
  public get bandwidth() {
    return this.getStringAttribute('bandwidth');
  }
  public set bandwidth(value: string) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // beacon_interval - computed: true, optional: true, required: false
  private _beaconInterval?: number; 
  public get beaconInterval() {
    return this.getNumberAttribute('beacon_interval');
  }
  public set beaconInterval(value: number) {
    this._beaconInterval = value;
  }
  public resetBeaconInterval() {
    this._beaconInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beaconIntervalInput() {
    return this._beaconInterval;
  }

  // bss_color - computed: false, optional: true, required: false
  private _bssColor?: number; 
  public get bssColor() {
    return this.getNumberAttribute('bss_color');
  }
  public set bssColor(value: number) {
    this._bssColor = value;
  }
  public resetBssColor() {
    this._bssColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bssColorInput() {
    return this._bssColor;
  }

  // bss_color_mode - computed: true, optional: true, required: false
  private _bssColorMode?: string; 
  public get bssColorMode() {
    return this.getStringAttribute('bss_color_mode');
  }
  public set bssColorMode(value: string) {
    this._bssColorMode = value;
  }
  public resetBssColorMode() {
    this._bssColorMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bssColorModeInput() {
    return this._bssColorMode;
  }

  // channel - computed: true, optional: true, required: false
  private _channel?: string[]; 
  public get channel() {
    return cdktf.Fn.tolist(this.getListAttribute('channel'));
  }
  public set channel(value: string[]) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // extension_channel - computed: true, optional: true, required: false
  private _extensionChannel?: string; 
  public get extensionChannel() {
    return this.getStringAttribute('extension_channel');
  }
  public set extensionChannel(value: string) {
    this._extensionChannel = value;
  }
  public resetExtensionChannel() {
    this._extensionChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionChannelInput() {
    return this._extensionChannel;
  }

  // guard_interval - computed: true, optional: true, required: false
  private _guardInterval?: string; 
  public get guardInterval() {
    return this.getStringAttribute('guard_interval');
  }
  public set guardInterval(value: string) {
    this._guardInterval = value;
  }
  public resetGuardInterval() {
    this._guardInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guardIntervalInput() {
    return this._guardInterval;
  }

  // lan_ext_vap - computed: true, optional: true, required: false
  private _lanExtVap?: string[]; 
  public get lanExtVap() {
    return cdktf.Fn.tolist(this.getListAttribute('lan_ext_vap'));
  }
  public set lanExtVap(value: string[]) {
    this._lanExtVap = value;
  }
  public resetLanExtVap() {
    this._lanExtVap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lanExtVapInput() {
    return this._lanExtVap;
  }

  // local_vaps - computed: true, optional: true, required: false
  private _localVaps?: string[]; 
  public get localVaps() {
    return cdktf.Fn.tolist(this.getListAttribute('local_vaps'));
  }
  public set localVaps(value: string[]) {
    this._localVaps = value;
  }
  public resetLocalVaps() {
    this._localVaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localVapsInput() {
    return this._localVaps;
  }

  // max_clients - computed: false, optional: true, required: false
  private _maxClients?: number; 
  public get maxClients() {
    return this.getNumberAttribute('max_clients');
  }
  public set maxClients(value: number) {
    this._maxClients = value;
  }
  public resetMaxClients() {
    this._maxClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxClientsInput() {
    return this._maxClients;
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

  // n80211d - computed: true, optional: true, required: false
  private _n80211D?: string; 
  public get n80211D() {
    return this.getStringAttribute('n80211d');
  }
  public set n80211D(value: string) {
    this._n80211D = value;
  }
  public resetN80211D() {
    this._n80211D = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get n80211DInput() {
    return this._n80211D;
  }

  // operating_standard - computed: true, optional: true, required: false
  private _operatingStandard?: string; 
  public get operatingStandard() {
    return this.getStringAttribute('operating_standard');
  }
  public set operatingStandard(value: string) {
    this._operatingStandard = value;
  }
  public resetOperatingStandard() {
    this._operatingStandard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingStandardInput() {
    return this._operatingStandard;
  }

  // power_level - computed: true, optional: true, required: false
  private _powerLevel?: number; 
  public get powerLevel() {
    return this.getNumberAttribute('power_level');
  }
  public set powerLevel(value: number) {
    this._powerLevel = value;
  }
  public resetPowerLevel() {
    this._powerLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerLevelInput() {
    return this._powerLevel;
  }

  // radio_id - computed: true, optional: true, required: false
  private _radioId?: number; 
  public get radioId() {
    return this.getNumberAttribute('radio_id');
  }
  public set radioId(value: number) {
    this._radioId = value;
  }
  public resetRadioId() {
    this._radioId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioIdInput() {
    return this._radioId;
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
export interface ObjectExtensioncontrollerExtenderprofileWifi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#country ObjectExtensioncontrollerExtenderprofile#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#dfs ObjectExtensioncontrollerExtenderprofile#dfs}
  */
  readonly dfs?: string;
  /**
  * radio_1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#radio_1 ObjectExtensioncontrollerExtenderprofile#radio_1}
  */
  readonly radio1?: ObjectExtensioncontrollerExtenderprofileWifiRadio1;
  /**
  * radio_2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#radio_2 ObjectExtensioncontrollerExtenderprofile#radio_2}
  */
  readonly radio2?: ObjectExtensioncontrollerExtenderprofileWifiRadio2;
}

export function objectExtensioncontrollerExtenderprofileWifiToTerraform(struct?: ObjectExtensioncontrollerExtenderprofileWifiOutputReference | ObjectExtensioncontrollerExtenderprofileWifi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    country: cdktf.stringToTerraform(struct!.country),
    dfs: cdktf.stringToTerraform(struct!.dfs),
    radio_1: objectExtensioncontrollerExtenderprofileWifiRadio1ToTerraform(struct!.radio1),
    radio_2: objectExtensioncontrollerExtenderprofileWifiRadio2ToTerraform(struct!.radio2),
  }
}


export function objectExtensioncontrollerExtenderprofileWifiToHclTerraform(struct?: ObjectExtensioncontrollerExtenderprofileWifiOutputReference | ObjectExtensioncontrollerExtenderprofileWifi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dfs: {
      value: cdktf.stringToHclTerraform(struct!.dfs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    radio_1: {
      value: objectExtensioncontrollerExtenderprofileWifiRadio1ToHclTerraform(struct!.radio1),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectExtensioncontrollerExtenderprofileWifiRadio1List",
    },
    radio_2: {
      value: objectExtensioncontrollerExtenderprofileWifiRadio2ToHclTerraform(struct!.radio2),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectExtensioncontrollerExtenderprofileWifiRadio2List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectExtensioncontrollerExtenderprofileWifiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectExtensioncontrollerExtenderprofileWifi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._dfs !== undefined) {
      hasAnyValues = true;
      internalValueResult.dfs = this._dfs;
    }
    if (this._radio1?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.radio1 = this._radio1?.internalValue;
    }
    if (this._radio2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.radio2 = this._radio2?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectExtensioncontrollerExtenderprofileWifi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._country = undefined;
      this._dfs = undefined;
      this._radio1.internalValue = undefined;
      this._radio2.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._country = value.country;
      this._dfs = value.dfs;
      this._radio1.internalValue = value.radio1;
      this._radio2.internalValue = value.radio2;
    }
  }

  // country - computed: true, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // dfs - computed: false, optional: true, required: false
  private _dfs?: string; 
  public get dfs() {
    return this.getStringAttribute('dfs');
  }
  public set dfs(value: string) {
    this._dfs = value;
  }
  public resetDfs() {
    this._dfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dfsInput() {
    return this._dfs;
  }

  // radio_1 - computed: false, optional: true, required: false
  private _radio1 = new ObjectExtensioncontrollerExtenderprofileWifiRadio1OutputReference(this, "radio_1");
  public get radio1() {
    return this._radio1;
  }
  public putRadio1(value: ObjectExtensioncontrollerExtenderprofileWifiRadio1) {
    this._radio1.internalValue = value;
  }
  public resetRadio1() {
    this._radio1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radio1Input() {
    return this._radio1.internalValue;
  }

  // radio_2 - computed: false, optional: true, required: false
  private _radio2 = new ObjectExtensioncontrollerExtenderprofileWifiRadio2OutputReference(this, "radio_2");
  public get radio2() {
    return this._radio2;
  }
  public putRadio2(value: ObjectExtensioncontrollerExtenderprofileWifiRadio2) {
    this._radio2.internalValue = value;
  }
  public resetRadio2() {
    this._radio2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radio2Input() {
    return this._radio2.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile fortimanager_object_extensioncontroller_extenderprofile}
*/
export class ObjectExtensioncontrollerExtenderprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_extensioncontroller_extenderprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectExtensioncontrollerExtenderprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectExtensioncontrollerExtenderprofile to import
  * @param importFromId The id of the existing ObjectExtensioncontrollerExtenderprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectExtensioncontrollerExtenderprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_extensioncontroller_extenderprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extensioncontroller_extenderprofile fortimanager_object_extensioncontroller_extenderprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectExtensioncontrollerExtenderprofileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectExtensioncontrollerExtenderprofileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_extensioncontroller_extenderprofile',
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
    this._isFactorySetting = config.isFactorySetting;
    this._adom = config.adom;
    this._allowaccess = config.allowaccess;
    this._bandwidthLimit = config.bandwidthLimit;
    this._enforceBandwidth = config.enforceBandwidth;
    this._extension = config.extension;
    this._fosid = config.fosid;
    this._id = config.id;
    this._loginPassword = config.loginPassword;
    this._loginPasswordChange = config.loginPasswordChange;
    this._model = config.model;
    this._name = config.name;
    this._scopetype = config.scopetype;
    this._cellular.internalValue = config.cellular;
    this._lanExtension.internalValue = config.lanExtension;
    this._wifi.internalValue = config.wifi;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // _is_factory_setting - computed: true, optional: true, required: false
  private _isFactorySetting?: string; 
  public get isFactorySetting() {
    return this.getStringAttribute('_is_factory_setting');
  }
  public set isFactorySetting(value: string) {
    this._isFactorySetting = value;
  }
  public resetIsFactorySetting() {
    this._isFactorySetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFactorySettingInput() {
    return this._isFactorySetting;
  }

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

  // allowaccess - computed: true, optional: true, required: false
  private _allowaccess?: string[]; 
  public get allowaccess() {
    return cdktf.Fn.tolist(this.getListAttribute('allowaccess'));
  }
  public set allowaccess(value: string[]) {
    this._allowaccess = value;
  }
  public resetAllowaccess() {
    this._allowaccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowaccessInput() {
    return this._allowaccess;
  }

  // bandwidth_limit - computed: true, optional: true, required: false
  private _bandwidthLimit?: number; 
  public get bandwidthLimit() {
    return this.getNumberAttribute('bandwidth_limit');
  }
  public set bandwidthLimit(value: number) {
    this._bandwidthLimit = value;
  }
  public resetBandwidthLimit() {
    this._bandwidthLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthLimitInput() {
    return this._bandwidthLimit;
  }

  // enforce_bandwidth - computed: true, optional: true, required: false
  private _enforceBandwidth?: string; 
  public get enforceBandwidth() {
    return this.getStringAttribute('enforce_bandwidth');
  }
  public set enforceBandwidth(value: string) {
    this._enforceBandwidth = value;
  }
  public resetEnforceBandwidth() {
    this._enforceBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceBandwidthInput() {
    return this._enforceBandwidth;
  }

  // extension - computed: false, optional: true, required: false
  private _extension?: string; 
  public get extension() {
    return this.getStringAttribute('extension');
  }
  public set extension(value: string) {
    this._extension = value;
  }
  public resetExtension() {
    this._extension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionInput() {
    return this._extension;
  }

  // fosid - computed: true, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // login_password - computed: true, optional: true, required: false
  private _loginPassword?: string[]; 
  public get loginPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('login_password'));
  }
  public set loginPassword(value: string[]) {
    this._loginPassword = value;
  }
  public resetLoginPassword() {
    this._loginPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginPasswordInput() {
    return this._loginPassword;
  }

  // login_password_change - computed: true, optional: true, required: false
  private _loginPasswordChange?: string; 
  public get loginPasswordChange() {
    return this.getStringAttribute('login_password_change');
  }
  public set loginPasswordChange(value: string) {
    this._loginPasswordChange = value;
  }
  public resetLoginPasswordChange() {
    this._loginPasswordChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginPasswordChangeInput() {
    return this._loginPasswordChange;
  }

  // model - computed: true, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
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

  // cellular - computed: false, optional: true, required: false
  private _cellular = new ObjectExtensioncontrollerExtenderprofileCellularOutputReference(this, "cellular");
  public get cellular() {
    return this._cellular;
  }
  public putCellular(value: ObjectExtensioncontrollerExtenderprofileCellular) {
    this._cellular.internalValue = value;
  }
  public resetCellular() {
    this._cellular.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cellularInput() {
    return this._cellular.internalValue;
  }

  // lan_extension - computed: false, optional: true, required: false
  private _lanExtension = new ObjectExtensioncontrollerExtenderprofileLanExtensionOutputReference(this, "lan_extension");
  public get lanExtension() {
    return this._lanExtension;
  }
  public putLanExtension(value: ObjectExtensioncontrollerExtenderprofileLanExtension) {
    this._lanExtension.internalValue = value;
  }
  public resetLanExtension() {
    this._lanExtension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lanExtensionInput() {
    return this._lanExtension.internalValue;
  }

  // wifi - computed: false, optional: true, required: false
  private _wifi = new ObjectExtensioncontrollerExtenderprofileWifiOutputReference(this, "wifi");
  public get wifi() {
    return this._wifi;
  }
  public putWifi(value: ObjectExtensioncontrollerExtenderprofileWifi) {
    this._wifi.internalValue = value;
  }
  public resetWifi() {
    this._wifi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiInput() {
    return this._wifi.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      _is_factory_setting: cdktf.stringToTerraform(this._isFactorySetting),
      adom: cdktf.stringToTerraform(this._adom),
      allowaccess: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowaccess),
      bandwidth_limit: cdktf.numberToTerraform(this._bandwidthLimit),
      enforce_bandwidth: cdktf.stringToTerraform(this._enforceBandwidth),
      extension: cdktf.stringToTerraform(this._extension),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      login_password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._loginPassword),
      login_password_change: cdktf.stringToTerraform(this._loginPasswordChange),
      model: cdktf.stringToTerraform(this._model),
      name: cdktf.stringToTerraform(this._name),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      cellular: objectExtensioncontrollerExtenderprofileCellularToTerraform(this._cellular.internalValue),
      lan_extension: objectExtensioncontrollerExtenderprofileLanExtensionToTerraform(this._lanExtension.internalValue),
      wifi: objectExtensioncontrollerExtenderprofileWifiToTerraform(this._wifi.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      _is_factory_setting: {
        value: cdktf.stringToHclTerraform(this._isFactorySetting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowaccess: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowaccess),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bandwidth_limit: {
        value: cdktf.numberToHclTerraform(this._bandwidthLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enforce_bandwidth: {
        value: cdktf.stringToHclTerraform(this._enforceBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extension: {
        value: cdktf.stringToHclTerraform(this._extension),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._loginPassword),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      login_password_change: {
        value: cdktf.stringToHclTerraform(this._loginPasswordChange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model: {
        value: cdktf.stringToHclTerraform(this._model),
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
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cellular: {
        value: objectExtensioncontrollerExtenderprofileCellularToHclTerraform(this._cellular.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectExtensioncontrollerExtenderprofileCellularList",
      },
      lan_extension: {
        value: objectExtensioncontrollerExtenderprofileLanExtensionToHclTerraform(this._lanExtension.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectExtensioncontrollerExtenderprofileLanExtensionList",
      },
      wifi: {
        value: objectExtensioncontrollerExtenderprofileWifiToHclTerraform(this._wifi.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectExtensioncontrollerExtenderprofileWifiList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
