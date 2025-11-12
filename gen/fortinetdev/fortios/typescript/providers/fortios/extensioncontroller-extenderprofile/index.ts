// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExtensioncontrollerExtenderprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#allowaccess ExtensioncontrollerExtenderprofile#allowaccess}
  */
  readonly allowaccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#bandwidth_limit ExtensioncontrollerExtenderprofile#bandwidth_limit}
  */
  readonly bandwidthLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#enforce_bandwidth ExtensioncontrollerExtenderprofile#enforce_bandwidth}
  */
  readonly enforceBandwidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#extension ExtensioncontrollerExtenderprofile#extension}
  */
  readonly extension?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#fosid ExtensioncontrollerExtenderprofile#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#get_all_tables ExtensioncontrollerExtenderprofile#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#id ExtensioncontrollerExtenderprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#login_password ExtensioncontrollerExtenderprofile#login_password}
  */
  readonly loginPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#login_password_change ExtensioncontrollerExtenderprofile#login_password_change}
  */
  readonly loginPasswordChange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#model ExtensioncontrollerExtenderprofile#model}
  */
  readonly model?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#name ExtensioncontrollerExtenderprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#vdomparam ExtensioncontrollerExtenderprofile#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * cellular block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#cellular ExtensioncontrollerExtenderprofile#cellular}
  */
  readonly cellular?: ExtensioncontrollerExtenderprofileCellular;
  /**
  * lan_extension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#lan_extension ExtensioncontrollerExtenderprofile#lan_extension}
  */
  readonly lanExtension?: ExtensioncontrollerExtenderprofileLanExtension;
  /**
  * wifi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#wifi ExtensioncontrollerExtenderprofile#wifi}
  */
  readonly wifi?: ExtensioncontrollerExtenderprofileWifi;
}
export interface ExtensioncontrollerExtenderprofileCellularControllerReport {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#interval ExtensioncontrollerExtenderprofile#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#signal_threshold ExtensioncontrollerExtenderprofile#signal_threshold}
  */
  readonly signalThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#status ExtensioncontrollerExtenderprofile#status}
  */
  readonly status?: string;
}

export function extensioncontrollerExtenderprofileCellularControllerReportToTerraform(struct?: ExtensioncontrollerExtenderprofileCellularControllerReportOutputReference | ExtensioncontrollerExtenderprofileCellularControllerReport): any {
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


export function extensioncontrollerExtenderprofileCellularControllerReportToHclTerraform(struct?: ExtensioncontrollerExtenderprofileCellularControllerReportOutputReference | ExtensioncontrollerExtenderprofileCellularControllerReport): any {
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

export class ExtensioncontrollerExtenderprofileCellularControllerReportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExtensioncontrollerExtenderprofileCellularControllerReport | undefined {
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

  public set internalValue(value: ExtensioncontrollerExtenderprofileCellularControllerReport | undefined) {
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
export interface ExtensioncontrollerExtenderprofileCellularDataplan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#name ExtensioncontrollerExtenderprofile#name}
  */
  readonly name?: string;
}

export function extensioncontrollerExtenderprofileCellularDataplanToTerraform(struct?: ExtensioncontrollerExtenderprofileCellularDataplan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function extensioncontrollerExtenderprofileCellularDataplanToHclTerraform(struct?: ExtensioncontrollerExtenderprofileCellularDataplan | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExtensioncontrollerExtenderprofileCellularDataplanOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExtensioncontrollerExtenderprofileCellularDataplan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExtensioncontrollerExtenderprofileCellularDataplan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class ExtensioncontrollerExtenderprofileCellularDataplanList extends cdktf.ComplexList {
  public internalValue? : ExtensioncontrollerExtenderprofileCellularDataplan[] | cdktf.IResolvable

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
  public get(index: number): ExtensioncontrollerExtenderprofileCellularDataplanOutputReference {
    return new ExtensioncontrollerExtenderprofileCellularDataplanOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExtensioncontrollerExtenderprofileCellularModem1AutoSwitch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#dataplan ExtensioncontrollerExtenderprofile#dataplan}
  */
  readonly dataplan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#disconnect ExtensioncontrollerExtenderprofile#disconnect}
  */
  readonly disconnect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#disconnect_period ExtensioncontrollerExtenderprofile#disconnect_period}
  */
  readonly disconnectPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#disconnect_threshold ExtensioncontrollerExtenderprofile#disconnect_threshold}
  */
  readonly disconnectThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#signal ExtensioncontrollerExtenderprofile#signal}
  */
  readonly signal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#switch_back ExtensioncontrollerExtenderprofile#switch_back}
  */
  readonly switchBack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#switch_back_time ExtensioncontrollerExtenderprofile#switch_back_time}
  */
  readonly switchBackTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#switch_back_timer ExtensioncontrollerExtenderprofile#switch_back_timer}
  */
  readonly switchBackTimer?: number;
}

export function extensioncontrollerExtenderprofileCellularModem1AutoSwitchToTerraform(struct?: ExtensioncontrollerExtenderprofileCellularModem1AutoSwitchOutputReference | ExtensioncontrollerExtenderprofileCellularModem1AutoSwitch): any {
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


export function extensioncontrollerExtenderprofileCellularModem1AutoSwitchToHclTerraform(struct?: ExtensioncontrollerExtenderprofileCellularModem1AutoSwitchOutputReference | ExtensioncontrollerExtenderprofileCellularModem1AutoSwitch): any {
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

export class ExtensioncontrollerExtenderprofileCellularModem1AutoSwitchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExtensioncontrollerExtenderprofileCellularModem1AutoSwitch | undefined {
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

  public set internalValue(value: ExtensioncontrollerExtenderprofileCellularModem1AutoSwitch | undefined) {
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
export interface ExtensioncontrollerExtenderprofileCellularModem1 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#conn_status ExtensioncontrollerExtenderprofile#conn_status}
  */
  readonly connStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#default_sim ExtensioncontrollerExtenderprofile#default_sim}
  */
  readonly defaultSim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#gps ExtensioncontrollerExtenderprofile#gps}
  */
  readonly gps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#multiple_pdn ExtensioncontrollerExtenderprofile#multiple_pdn}
  */
  readonly multiplePdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#pdn1_dataplan ExtensioncontrollerExtenderprofile#pdn1_dataplan}
  */
  readonly pdn1Dataplan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#pdn2_dataplan ExtensioncontrollerExtenderprofile#pdn2_dataplan}
  */
  readonly pdn2Dataplan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#pdn3_dataplan ExtensioncontrollerExtenderprofile#pdn3_dataplan}
  */
  readonly pdn3Dataplan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#pdn4_dataplan ExtensioncontrollerExtenderprofile#pdn4_dataplan}
  */
  readonly pdn4Dataplan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#preferred_carrier ExtensioncontrollerExtenderprofile#preferred_carrier}
  */
  readonly preferredCarrier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#redundant_intf ExtensioncontrollerExtenderprofile#redundant_intf}
  */
  readonly redundantIntf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#redundant_mode ExtensioncontrollerExtenderprofile#redundant_mode}
  */
  readonly redundantMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#sim1_pin ExtensioncontrollerExtenderprofile#sim1_pin}
  */
  readonly sim1Pin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#sim1_pin_code ExtensioncontrollerExtenderprofile#sim1_pin_code}
  */
  readonly sim1PinCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#sim2_pin ExtensioncontrollerExtenderprofile#sim2_pin}
  */
  readonly sim2Pin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#sim2_pin_code ExtensioncontrollerExtenderprofile#sim2_pin_code}
  */
  readonly sim2PinCode?: string;
  /**
  * auto_switch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#auto_switch ExtensioncontrollerExtenderprofile#auto_switch}
  */
  readonly autoSwitch?: ExtensioncontrollerExtenderprofileCellularModem1AutoSwitch;
}

export function extensioncontrollerExtenderprofileCellularModem1ToTerraform(struct?: ExtensioncontrollerExtenderprofileCellularModem1OutputReference | ExtensioncontrollerExtenderprofileCellularModem1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conn_status: cdktf.numberToTerraform(struct!.connStatus),
    default_sim: cdktf.stringToTerraform(struct!.defaultSim),
    gps: cdktf.stringToTerraform(struct!.gps),
    multiple_pdn: cdktf.stringToTerraform(struct!.multiplePdn),
    pdn1_dataplan: cdktf.stringToTerraform(struct!.pdn1Dataplan),
    pdn2_dataplan: cdktf.stringToTerraform(struct!.pdn2Dataplan),
    pdn3_dataplan: cdktf.stringToTerraform(struct!.pdn3Dataplan),
    pdn4_dataplan: cdktf.stringToTerraform(struct!.pdn4Dataplan),
    preferred_carrier: cdktf.stringToTerraform(struct!.preferredCarrier),
    redundant_intf: cdktf.stringToTerraform(struct!.redundantIntf),
    redundant_mode: cdktf.stringToTerraform(struct!.redundantMode),
    sim1_pin: cdktf.stringToTerraform(struct!.sim1Pin),
    sim1_pin_code: cdktf.stringToTerraform(struct!.sim1PinCode),
    sim2_pin: cdktf.stringToTerraform(struct!.sim2Pin),
    sim2_pin_code: cdktf.stringToTerraform(struct!.sim2PinCode),
    auto_switch: extensioncontrollerExtenderprofileCellularModem1AutoSwitchToTerraform(struct!.autoSwitch),
  }
}


export function extensioncontrollerExtenderprofileCellularModem1ToHclTerraform(struct?: ExtensioncontrollerExtenderprofileCellularModem1OutputReference | ExtensioncontrollerExtenderprofileCellularModem1): any {
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
    multiple_pdn: {
      value: cdktf.stringToHclTerraform(struct!.multiplePdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pdn1_dataplan: {
      value: cdktf.stringToHclTerraform(struct!.pdn1Dataplan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pdn2_dataplan: {
      value: cdktf.stringToHclTerraform(struct!.pdn2Dataplan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pdn3_dataplan: {
      value: cdktf.stringToHclTerraform(struct!.pdn3Dataplan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pdn4_dataplan: {
      value: cdktf.stringToHclTerraform(struct!.pdn4Dataplan),
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
      value: extensioncontrollerExtenderprofileCellularModem1AutoSwitchToHclTerraform(struct!.autoSwitch),
      isBlock: true,
      type: "list",
      storageClassType: "ExtensioncontrollerExtenderprofileCellularModem1AutoSwitchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExtensioncontrollerExtenderprofileCellularModem1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExtensioncontrollerExtenderprofileCellularModem1 | undefined {
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

  public set internalValue(value: ExtensioncontrollerExtenderprofileCellularModem1 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connStatus = undefined;
      this._defaultSim = undefined;
      this._gps = undefined;
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

  // multiple_pdn - computed: true, optional: true, required: false
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

  // pdn1_dataplan - computed: false, optional: true, required: false
  private _pdn1Dataplan?: string; 
  public get pdn1Dataplan() {
    return this.getStringAttribute('pdn1_dataplan');
  }
  public set pdn1Dataplan(value: string) {
    this._pdn1Dataplan = value;
  }
  public resetPdn1Dataplan() {
    this._pdn1Dataplan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdn1DataplanInput() {
    return this._pdn1Dataplan;
  }

  // pdn2_dataplan - computed: false, optional: true, required: false
  private _pdn2Dataplan?: string; 
  public get pdn2Dataplan() {
    return this.getStringAttribute('pdn2_dataplan');
  }
  public set pdn2Dataplan(value: string) {
    this._pdn2Dataplan = value;
  }
  public resetPdn2Dataplan() {
    this._pdn2Dataplan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdn2DataplanInput() {
    return this._pdn2Dataplan;
  }

  // pdn3_dataplan - computed: false, optional: true, required: false
  private _pdn3Dataplan?: string; 
  public get pdn3Dataplan() {
    return this.getStringAttribute('pdn3_dataplan');
  }
  public set pdn3Dataplan(value: string) {
    this._pdn3Dataplan = value;
  }
  public resetPdn3Dataplan() {
    this._pdn3Dataplan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdn3DataplanInput() {
    return this._pdn3Dataplan;
  }

  // pdn4_dataplan - computed: false, optional: true, required: false
  private _pdn4Dataplan?: string; 
  public get pdn4Dataplan() {
    return this.getStringAttribute('pdn4_dataplan');
  }
  public set pdn4Dataplan(value: string) {
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
  private _autoSwitch = new ExtensioncontrollerExtenderprofileCellularModem1AutoSwitchOutputReference(this, "auto_switch");
  public get autoSwitch() {
    return this._autoSwitch;
  }
  public putAutoSwitch(value: ExtensioncontrollerExtenderprofileCellularModem1AutoSwitch) {
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
export interface ExtensioncontrollerExtenderprofileCellularModem2AutoSwitch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#dataplan ExtensioncontrollerExtenderprofile#dataplan}
  */
  readonly dataplan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#disconnect ExtensioncontrollerExtenderprofile#disconnect}
  */
  readonly disconnect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#disconnect_period ExtensioncontrollerExtenderprofile#disconnect_period}
  */
  readonly disconnectPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#disconnect_threshold ExtensioncontrollerExtenderprofile#disconnect_threshold}
  */
  readonly disconnectThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#signal ExtensioncontrollerExtenderprofile#signal}
  */
  readonly signal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#switch_back ExtensioncontrollerExtenderprofile#switch_back}
  */
  readonly switchBack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#switch_back_time ExtensioncontrollerExtenderprofile#switch_back_time}
  */
  readonly switchBackTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#switch_back_timer ExtensioncontrollerExtenderprofile#switch_back_timer}
  */
  readonly switchBackTimer?: number;
}

export function extensioncontrollerExtenderprofileCellularModem2AutoSwitchToTerraform(struct?: ExtensioncontrollerExtenderprofileCellularModem2AutoSwitchOutputReference | ExtensioncontrollerExtenderprofileCellularModem2AutoSwitch): any {
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


export function extensioncontrollerExtenderprofileCellularModem2AutoSwitchToHclTerraform(struct?: ExtensioncontrollerExtenderprofileCellularModem2AutoSwitchOutputReference | ExtensioncontrollerExtenderprofileCellularModem2AutoSwitch): any {
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

export class ExtensioncontrollerExtenderprofileCellularModem2AutoSwitchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExtensioncontrollerExtenderprofileCellularModem2AutoSwitch | undefined {
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

  public set internalValue(value: ExtensioncontrollerExtenderprofileCellularModem2AutoSwitch | undefined) {
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
export interface ExtensioncontrollerExtenderprofileCellularModem2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#conn_status ExtensioncontrollerExtenderprofile#conn_status}
  */
  readonly connStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#default_sim ExtensioncontrollerExtenderprofile#default_sim}
  */
  readonly defaultSim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#gps ExtensioncontrollerExtenderprofile#gps}
  */
  readonly gps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#multiple_pdn ExtensioncontrollerExtenderprofile#multiple_pdn}
  */
  readonly multiplePdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#pdn1_dataplan ExtensioncontrollerExtenderprofile#pdn1_dataplan}
  */
  readonly pdn1Dataplan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#pdn2_dataplan ExtensioncontrollerExtenderprofile#pdn2_dataplan}
  */
  readonly pdn2Dataplan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#pdn3_dataplan ExtensioncontrollerExtenderprofile#pdn3_dataplan}
  */
  readonly pdn3Dataplan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#pdn4_dataplan ExtensioncontrollerExtenderprofile#pdn4_dataplan}
  */
  readonly pdn4Dataplan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#preferred_carrier ExtensioncontrollerExtenderprofile#preferred_carrier}
  */
  readonly preferredCarrier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#redundant_intf ExtensioncontrollerExtenderprofile#redundant_intf}
  */
  readonly redundantIntf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#redundant_mode ExtensioncontrollerExtenderprofile#redundant_mode}
  */
  readonly redundantMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#sim1_pin ExtensioncontrollerExtenderprofile#sim1_pin}
  */
  readonly sim1Pin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#sim1_pin_code ExtensioncontrollerExtenderprofile#sim1_pin_code}
  */
  readonly sim1PinCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#sim2_pin ExtensioncontrollerExtenderprofile#sim2_pin}
  */
  readonly sim2Pin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#sim2_pin_code ExtensioncontrollerExtenderprofile#sim2_pin_code}
  */
  readonly sim2PinCode?: string;
  /**
  * auto_switch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#auto_switch ExtensioncontrollerExtenderprofile#auto_switch}
  */
  readonly autoSwitch?: ExtensioncontrollerExtenderprofileCellularModem2AutoSwitch;
}

export function extensioncontrollerExtenderprofileCellularModem2ToTerraform(struct?: ExtensioncontrollerExtenderprofileCellularModem2OutputReference | ExtensioncontrollerExtenderprofileCellularModem2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conn_status: cdktf.numberToTerraform(struct!.connStatus),
    default_sim: cdktf.stringToTerraform(struct!.defaultSim),
    gps: cdktf.stringToTerraform(struct!.gps),
    multiple_pdn: cdktf.stringToTerraform(struct!.multiplePdn),
    pdn1_dataplan: cdktf.stringToTerraform(struct!.pdn1Dataplan),
    pdn2_dataplan: cdktf.stringToTerraform(struct!.pdn2Dataplan),
    pdn3_dataplan: cdktf.stringToTerraform(struct!.pdn3Dataplan),
    pdn4_dataplan: cdktf.stringToTerraform(struct!.pdn4Dataplan),
    preferred_carrier: cdktf.stringToTerraform(struct!.preferredCarrier),
    redundant_intf: cdktf.stringToTerraform(struct!.redundantIntf),
    redundant_mode: cdktf.stringToTerraform(struct!.redundantMode),
    sim1_pin: cdktf.stringToTerraform(struct!.sim1Pin),
    sim1_pin_code: cdktf.stringToTerraform(struct!.sim1PinCode),
    sim2_pin: cdktf.stringToTerraform(struct!.sim2Pin),
    sim2_pin_code: cdktf.stringToTerraform(struct!.sim2PinCode),
    auto_switch: extensioncontrollerExtenderprofileCellularModem2AutoSwitchToTerraform(struct!.autoSwitch),
  }
}


export function extensioncontrollerExtenderprofileCellularModem2ToHclTerraform(struct?: ExtensioncontrollerExtenderprofileCellularModem2OutputReference | ExtensioncontrollerExtenderprofileCellularModem2): any {
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
    multiple_pdn: {
      value: cdktf.stringToHclTerraform(struct!.multiplePdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pdn1_dataplan: {
      value: cdktf.stringToHclTerraform(struct!.pdn1Dataplan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pdn2_dataplan: {
      value: cdktf.stringToHclTerraform(struct!.pdn2Dataplan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pdn3_dataplan: {
      value: cdktf.stringToHclTerraform(struct!.pdn3Dataplan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pdn4_dataplan: {
      value: cdktf.stringToHclTerraform(struct!.pdn4Dataplan),
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
      value: extensioncontrollerExtenderprofileCellularModem2AutoSwitchToHclTerraform(struct!.autoSwitch),
      isBlock: true,
      type: "list",
      storageClassType: "ExtensioncontrollerExtenderprofileCellularModem2AutoSwitchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExtensioncontrollerExtenderprofileCellularModem2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExtensioncontrollerExtenderprofileCellularModem2 | undefined {
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

  public set internalValue(value: ExtensioncontrollerExtenderprofileCellularModem2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connStatus = undefined;
      this._defaultSim = undefined;
      this._gps = undefined;
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

  // multiple_pdn - computed: true, optional: true, required: false
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

  // pdn1_dataplan - computed: false, optional: true, required: false
  private _pdn1Dataplan?: string; 
  public get pdn1Dataplan() {
    return this.getStringAttribute('pdn1_dataplan');
  }
  public set pdn1Dataplan(value: string) {
    this._pdn1Dataplan = value;
  }
  public resetPdn1Dataplan() {
    this._pdn1Dataplan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdn1DataplanInput() {
    return this._pdn1Dataplan;
  }

  // pdn2_dataplan - computed: false, optional: true, required: false
  private _pdn2Dataplan?: string; 
  public get pdn2Dataplan() {
    return this.getStringAttribute('pdn2_dataplan');
  }
  public set pdn2Dataplan(value: string) {
    this._pdn2Dataplan = value;
  }
  public resetPdn2Dataplan() {
    this._pdn2Dataplan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdn2DataplanInput() {
    return this._pdn2Dataplan;
  }

  // pdn3_dataplan - computed: false, optional: true, required: false
  private _pdn3Dataplan?: string; 
  public get pdn3Dataplan() {
    return this.getStringAttribute('pdn3_dataplan');
  }
  public set pdn3Dataplan(value: string) {
    this._pdn3Dataplan = value;
  }
  public resetPdn3Dataplan() {
    this._pdn3Dataplan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdn3DataplanInput() {
    return this._pdn3Dataplan;
  }

  // pdn4_dataplan - computed: false, optional: true, required: false
  private _pdn4Dataplan?: string; 
  public get pdn4Dataplan() {
    return this.getStringAttribute('pdn4_dataplan');
  }
  public set pdn4Dataplan(value: string) {
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
  private _autoSwitch = new ExtensioncontrollerExtenderprofileCellularModem2AutoSwitchOutputReference(this, "auto_switch");
  public get autoSwitch() {
    return this._autoSwitch;
  }
  public putAutoSwitch(value: ExtensioncontrollerExtenderprofileCellularModem2AutoSwitch) {
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
export interface ExtensioncontrollerExtenderprofileCellularSmsNotificationAlert {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#data_exhausted ExtensioncontrollerExtenderprofile#data_exhausted}
  */
  readonly dataExhausted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#fgt_backup_mode_switch ExtensioncontrollerExtenderprofile#fgt_backup_mode_switch}
  */
  readonly fgtBackupModeSwitch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#low_signal_strength ExtensioncontrollerExtenderprofile#low_signal_strength}
  */
  readonly lowSignalStrength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#mode_switch ExtensioncontrollerExtenderprofile#mode_switch}
  */
  readonly modeSwitch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#os_image_fallback ExtensioncontrollerExtenderprofile#os_image_fallback}
  */
  readonly osImageFallback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#session_disconnect ExtensioncontrollerExtenderprofile#session_disconnect}
  */
  readonly sessionDisconnect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#system_reboot ExtensioncontrollerExtenderprofile#system_reboot}
  */
  readonly systemReboot?: string;
}

export function extensioncontrollerExtenderprofileCellularSmsNotificationAlertToTerraform(struct?: ExtensioncontrollerExtenderprofileCellularSmsNotificationAlertOutputReference | ExtensioncontrollerExtenderprofileCellularSmsNotificationAlert): any {
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


export function extensioncontrollerExtenderprofileCellularSmsNotificationAlertToHclTerraform(struct?: ExtensioncontrollerExtenderprofileCellularSmsNotificationAlertOutputReference | ExtensioncontrollerExtenderprofileCellularSmsNotificationAlert): any {
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

export class ExtensioncontrollerExtenderprofileCellularSmsNotificationAlertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExtensioncontrollerExtenderprofileCellularSmsNotificationAlert | undefined {
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

  public set internalValue(value: ExtensioncontrollerExtenderprofileCellularSmsNotificationAlert | undefined) {
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
export interface ExtensioncontrollerExtenderprofileCellularSmsNotificationReceiver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#alert ExtensioncontrollerExtenderprofile#alert}
  */
  readonly alert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#name ExtensioncontrollerExtenderprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#phone_number ExtensioncontrollerExtenderprofile#phone_number}
  */
  readonly phoneNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#status ExtensioncontrollerExtenderprofile#status}
  */
  readonly status?: string;
}

export function extensioncontrollerExtenderprofileCellularSmsNotificationReceiverToTerraform(struct?: ExtensioncontrollerExtenderprofileCellularSmsNotificationReceiver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert: cdktf.stringToTerraform(struct!.alert),
    name: cdktf.stringToTerraform(struct!.name),
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function extensioncontrollerExtenderprofileCellularSmsNotificationReceiverToHclTerraform(struct?: ExtensioncontrollerExtenderprofileCellularSmsNotificationReceiver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert: {
      value: cdktf.stringToHclTerraform(struct!.alert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class ExtensioncontrollerExtenderprofileCellularSmsNotificationReceiverOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExtensioncontrollerExtenderprofileCellularSmsNotificationReceiver | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ExtensioncontrollerExtenderprofileCellularSmsNotificationReceiver | cdktf.IResolvable | undefined) {
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

  // alert - computed: false, optional: true, required: false
  private _alert?: string; 
  public get alert() {
    return this.getStringAttribute('alert');
  }
  public set alert(value: string) {
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

export class ExtensioncontrollerExtenderprofileCellularSmsNotificationReceiverList extends cdktf.ComplexList {
  public internalValue? : ExtensioncontrollerExtenderprofileCellularSmsNotificationReceiver[] | cdktf.IResolvable

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
  public get(index: number): ExtensioncontrollerExtenderprofileCellularSmsNotificationReceiverOutputReference {
    return new ExtensioncontrollerExtenderprofileCellularSmsNotificationReceiverOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExtensioncontrollerExtenderprofileCellularSmsNotification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#status ExtensioncontrollerExtenderprofile#status}
  */
  readonly status?: string;
  /**
  * alert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#alert ExtensioncontrollerExtenderprofile#alert}
  */
  readonly alert?: ExtensioncontrollerExtenderprofileCellularSmsNotificationAlert;
  /**
  * receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#receiver ExtensioncontrollerExtenderprofile#receiver}
  */
  readonly receiver?: ExtensioncontrollerExtenderprofileCellularSmsNotificationReceiver[] | cdktf.IResolvable;
}

export function extensioncontrollerExtenderprofileCellularSmsNotificationToTerraform(struct?: ExtensioncontrollerExtenderprofileCellularSmsNotificationOutputReference | ExtensioncontrollerExtenderprofileCellularSmsNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
    alert: extensioncontrollerExtenderprofileCellularSmsNotificationAlertToTerraform(struct!.alert),
    receiver: cdktf.listMapper(extensioncontrollerExtenderprofileCellularSmsNotificationReceiverToTerraform, true)(struct!.receiver),
  }
}


export function extensioncontrollerExtenderprofileCellularSmsNotificationToHclTerraform(struct?: ExtensioncontrollerExtenderprofileCellularSmsNotificationOutputReference | ExtensioncontrollerExtenderprofileCellularSmsNotification): any {
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
      value: extensioncontrollerExtenderprofileCellularSmsNotificationAlertToHclTerraform(struct!.alert),
      isBlock: true,
      type: "list",
      storageClassType: "ExtensioncontrollerExtenderprofileCellularSmsNotificationAlertList",
    },
    receiver: {
      value: cdktf.listMapperHcl(extensioncontrollerExtenderprofileCellularSmsNotificationReceiverToHclTerraform, true)(struct!.receiver),
      isBlock: true,
      type: "list",
      storageClassType: "ExtensioncontrollerExtenderprofileCellularSmsNotificationReceiverList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExtensioncontrollerExtenderprofileCellularSmsNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExtensioncontrollerExtenderprofileCellularSmsNotification | undefined {
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

  public set internalValue(value: ExtensioncontrollerExtenderprofileCellularSmsNotification | undefined) {
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
  private _alert = new ExtensioncontrollerExtenderprofileCellularSmsNotificationAlertOutputReference(this, "alert");
  public get alert() {
    return this._alert;
  }
  public putAlert(value: ExtensioncontrollerExtenderprofileCellularSmsNotificationAlert) {
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
  private _receiver = new ExtensioncontrollerExtenderprofileCellularSmsNotificationReceiverList(this, "receiver", false);
  public get receiver() {
    return this._receiver;
  }
  public putReceiver(value: ExtensioncontrollerExtenderprofileCellularSmsNotificationReceiver[] | cdktf.IResolvable) {
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
export interface ExtensioncontrollerExtenderprofileCellular {
  /**
  * controller_report block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#controller_report ExtensioncontrollerExtenderprofile#controller_report}
  */
  readonly controllerReport?: ExtensioncontrollerExtenderprofileCellularControllerReport;
  /**
  * dataplan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#dataplan ExtensioncontrollerExtenderprofile#dataplan}
  */
  readonly dataplan?: ExtensioncontrollerExtenderprofileCellularDataplan[] | cdktf.IResolvable;
  /**
  * modem1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#modem1 ExtensioncontrollerExtenderprofile#modem1}
  */
  readonly modem1?: ExtensioncontrollerExtenderprofileCellularModem1;
  /**
  * modem2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#modem2 ExtensioncontrollerExtenderprofile#modem2}
  */
  readonly modem2?: ExtensioncontrollerExtenderprofileCellularModem2;
  /**
  * sms_notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#sms_notification ExtensioncontrollerExtenderprofile#sms_notification}
  */
  readonly smsNotification?: ExtensioncontrollerExtenderprofileCellularSmsNotification;
}

export function extensioncontrollerExtenderprofileCellularToTerraform(struct?: ExtensioncontrollerExtenderprofileCellularOutputReference | ExtensioncontrollerExtenderprofileCellular): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    controller_report: extensioncontrollerExtenderprofileCellularControllerReportToTerraform(struct!.controllerReport),
    dataplan: cdktf.listMapper(extensioncontrollerExtenderprofileCellularDataplanToTerraform, true)(struct!.dataplan),
    modem1: extensioncontrollerExtenderprofileCellularModem1ToTerraform(struct!.modem1),
    modem2: extensioncontrollerExtenderprofileCellularModem2ToTerraform(struct!.modem2),
    sms_notification: extensioncontrollerExtenderprofileCellularSmsNotificationToTerraform(struct!.smsNotification),
  }
}


export function extensioncontrollerExtenderprofileCellularToHclTerraform(struct?: ExtensioncontrollerExtenderprofileCellularOutputReference | ExtensioncontrollerExtenderprofileCellular): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    controller_report: {
      value: extensioncontrollerExtenderprofileCellularControllerReportToHclTerraform(struct!.controllerReport),
      isBlock: true,
      type: "list",
      storageClassType: "ExtensioncontrollerExtenderprofileCellularControllerReportList",
    },
    dataplan: {
      value: cdktf.listMapperHcl(extensioncontrollerExtenderprofileCellularDataplanToHclTerraform, true)(struct!.dataplan),
      isBlock: true,
      type: "set",
      storageClassType: "ExtensioncontrollerExtenderprofileCellularDataplanList",
    },
    modem1: {
      value: extensioncontrollerExtenderprofileCellularModem1ToHclTerraform(struct!.modem1),
      isBlock: true,
      type: "list",
      storageClassType: "ExtensioncontrollerExtenderprofileCellularModem1List",
    },
    modem2: {
      value: extensioncontrollerExtenderprofileCellularModem2ToHclTerraform(struct!.modem2),
      isBlock: true,
      type: "list",
      storageClassType: "ExtensioncontrollerExtenderprofileCellularModem2List",
    },
    sms_notification: {
      value: extensioncontrollerExtenderprofileCellularSmsNotificationToHclTerraform(struct!.smsNotification),
      isBlock: true,
      type: "list",
      storageClassType: "ExtensioncontrollerExtenderprofileCellularSmsNotificationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExtensioncontrollerExtenderprofileCellularOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExtensioncontrollerExtenderprofileCellular | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controllerReport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerReport = this._controllerReport?.internalValue;
    }
    if (this._dataplan?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataplan = this._dataplan?.internalValue;
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

  public set internalValue(value: ExtensioncontrollerExtenderprofileCellular | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._controllerReport.internalValue = undefined;
      this._dataplan.internalValue = undefined;
      this._modem1.internalValue = undefined;
      this._modem2.internalValue = undefined;
      this._smsNotification.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._controllerReport.internalValue = value.controllerReport;
      this._dataplan.internalValue = value.dataplan;
      this._modem1.internalValue = value.modem1;
      this._modem2.internalValue = value.modem2;
      this._smsNotification.internalValue = value.smsNotification;
    }
  }

  // controller_report - computed: false, optional: true, required: false
  private _controllerReport = new ExtensioncontrollerExtenderprofileCellularControllerReportOutputReference(this, "controller_report");
  public get controllerReport() {
    return this._controllerReport;
  }
  public putControllerReport(value: ExtensioncontrollerExtenderprofileCellularControllerReport) {
    this._controllerReport.internalValue = value;
  }
  public resetControllerReport() {
    this._controllerReport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerReportInput() {
    return this._controllerReport.internalValue;
  }

  // dataplan - computed: false, optional: true, required: false
  private _dataplan = new ExtensioncontrollerExtenderprofileCellularDataplanList(this, "dataplan", true);
  public get dataplan() {
    return this._dataplan;
  }
  public putDataplan(value: ExtensioncontrollerExtenderprofileCellularDataplan[] | cdktf.IResolvable) {
    this._dataplan.internalValue = value;
  }
  public resetDataplan() {
    this._dataplan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataplanInput() {
    return this._dataplan.internalValue;
  }

  // modem1 - computed: false, optional: true, required: false
  private _modem1 = new ExtensioncontrollerExtenderprofileCellularModem1OutputReference(this, "modem1");
  public get modem1() {
    return this._modem1;
  }
  public putModem1(value: ExtensioncontrollerExtenderprofileCellularModem1) {
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
  private _modem2 = new ExtensioncontrollerExtenderprofileCellularModem2OutputReference(this, "modem2");
  public get modem2() {
    return this._modem2;
  }
  public putModem2(value: ExtensioncontrollerExtenderprofileCellularModem2) {
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
  private _smsNotification = new ExtensioncontrollerExtenderprofileCellularSmsNotificationOutputReference(this, "sms_notification");
  public get smsNotification() {
    return this._smsNotification;
  }
  public putSmsNotification(value: ExtensioncontrollerExtenderprofileCellularSmsNotification) {
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
export interface ExtensioncontrollerExtenderprofileLanExtensionBackhaul {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#name ExtensioncontrollerExtenderprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#port ExtensioncontrollerExtenderprofile#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#role ExtensioncontrollerExtenderprofile#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#weight ExtensioncontrollerExtenderprofile#weight}
  */
  readonly weight?: number;
}

export function extensioncontrollerExtenderprofileLanExtensionBackhaulToTerraform(struct?: ExtensioncontrollerExtenderprofileLanExtensionBackhaul | cdktf.IResolvable): any {
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


export function extensioncontrollerExtenderprofileLanExtensionBackhaulToHclTerraform(struct?: ExtensioncontrollerExtenderprofileLanExtensionBackhaul | cdktf.IResolvable): any {
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

export class ExtensioncontrollerExtenderprofileLanExtensionBackhaulOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExtensioncontrollerExtenderprofileLanExtensionBackhaul | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ExtensioncontrollerExtenderprofileLanExtensionBackhaul | cdktf.IResolvable | undefined) {
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

export class ExtensioncontrollerExtenderprofileLanExtensionBackhaulList extends cdktf.ComplexList {
  public internalValue? : ExtensioncontrollerExtenderprofileLanExtensionBackhaul[] | cdktf.IResolvable

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
  public get(index: number): ExtensioncontrollerExtenderprofileLanExtensionBackhaulOutputReference {
    return new ExtensioncontrollerExtenderprofileLanExtensionBackhaulOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExtensioncontrollerExtenderprofileLanExtensionDownlinksVids {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#vid ExtensioncontrollerExtenderprofile#vid}
  */
  readonly vid?: number;
}

export function extensioncontrollerExtenderprofileLanExtensionDownlinksVidsToTerraform(struct?: ExtensioncontrollerExtenderprofileLanExtensionDownlinksVids | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vid: cdktf.numberToTerraform(struct!.vid),
  }
}


export function extensioncontrollerExtenderprofileLanExtensionDownlinksVidsToHclTerraform(struct?: ExtensioncontrollerExtenderprofileLanExtensionDownlinksVids | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vid: {
      value: cdktf.numberToHclTerraform(struct!.vid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExtensioncontrollerExtenderprofileLanExtensionDownlinksVidsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExtensioncontrollerExtenderprofileLanExtensionDownlinksVids | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vid = this._vid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExtensioncontrollerExtenderprofileLanExtensionDownlinksVids | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vid = value.vid;
    }
  }

  // vid - computed: false, optional: true, required: false
  private _vid?: number; 
  public get vid() {
    return this.getNumberAttribute('vid');
  }
  public set vid(value: number) {
    this._vid = value;
  }
  public resetVid() {
    this._vid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vidInput() {
    return this._vid;
  }
}

export class ExtensioncontrollerExtenderprofileLanExtensionDownlinksVidsList extends cdktf.ComplexList {
  public internalValue? : ExtensioncontrollerExtenderprofileLanExtensionDownlinksVids[] | cdktf.IResolvable

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
  public get(index: number): ExtensioncontrollerExtenderprofileLanExtensionDownlinksVidsOutputReference {
    return new ExtensioncontrollerExtenderprofileLanExtensionDownlinksVidsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExtensioncontrollerExtenderprofileLanExtensionDownlinks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#name ExtensioncontrollerExtenderprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#port ExtensioncontrollerExtenderprofile#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#pvid ExtensioncontrollerExtenderprofile#pvid}
  */
  readonly pvid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#type ExtensioncontrollerExtenderprofile#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#vap ExtensioncontrollerExtenderprofile#vap}
  */
  readonly vap?: string;
  /**
  * vids block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#vids ExtensioncontrollerExtenderprofile#vids}
  */
  readonly vids?: ExtensioncontrollerExtenderprofileLanExtensionDownlinksVids[] | cdktf.IResolvable;
}

export function extensioncontrollerExtenderprofileLanExtensionDownlinksToTerraform(struct?: ExtensioncontrollerExtenderprofileLanExtensionDownlinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.stringToTerraform(struct!.port),
    pvid: cdktf.numberToTerraform(struct!.pvid),
    type: cdktf.stringToTerraform(struct!.type),
    vap: cdktf.stringToTerraform(struct!.vap),
    vids: cdktf.listMapper(extensioncontrollerExtenderprofileLanExtensionDownlinksVidsToTerraform, true)(struct!.vids),
  }
}


export function extensioncontrollerExtenderprofileLanExtensionDownlinksToHclTerraform(struct?: ExtensioncontrollerExtenderprofileLanExtensionDownlinks | cdktf.IResolvable): any {
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
      value: cdktf.stringToHclTerraform(struct!.vap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vids: {
      value: cdktf.listMapperHcl(extensioncontrollerExtenderprofileLanExtensionDownlinksVidsToHclTerraform, true)(struct!.vids),
      isBlock: true,
      type: "set",
      storageClassType: "ExtensioncontrollerExtenderprofileLanExtensionDownlinksVidsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExtensioncontrollerExtenderprofileLanExtensionDownlinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExtensioncontrollerExtenderprofileLanExtensionDownlinks | cdktf.IResolvable | undefined {
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
    if (this._vids?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vids = this._vids?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExtensioncontrollerExtenderprofileLanExtensionDownlinks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._port = undefined;
      this._pvid = undefined;
      this._type = undefined;
      this._vap = undefined;
      this._vids.internalValue = undefined;
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
      this._vids.internalValue = value.vids;
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

  // vap - computed: false, optional: true, required: false
  private _vap?: string; 
  public get vap() {
    return this.getStringAttribute('vap');
  }
  public set vap(value: string) {
    this._vap = value;
  }
  public resetVap() {
    this._vap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vapInput() {
    return this._vap;
  }

  // vids - computed: false, optional: true, required: false
  private _vids = new ExtensioncontrollerExtenderprofileLanExtensionDownlinksVidsList(this, "vids", true);
  public get vids() {
    return this._vids;
  }
  public putVids(value: ExtensioncontrollerExtenderprofileLanExtensionDownlinksVids[] | cdktf.IResolvable) {
    this._vids.internalValue = value;
  }
  public resetVids() {
    this._vids.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vidsInput() {
    return this._vids.internalValue;
  }
}

export class ExtensioncontrollerExtenderprofileLanExtensionDownlinksList extends cdktf.ComplexList {
  public internalValue? : ExtensioncontrollerExtenderprofileLanExtensionDownlinks[] | cdktf.IResolvable

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
  public get(index: number): ExtensioncontrollerExtenderprofileLanExtensionDownlinksOutputReference {
    return new ExtensioncontrollerExtenderprofileLanExtensionDownlinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExtensioncontrollerExtenderprofileLanExtensionTrafficSplitServices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#address ExtensioncontrollerExtenderprofile#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#name ExtensioncontrollerExtenderprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#service ExtensioncontrollerExtenderprofile#service}
  */
  readonly service?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#vsdb ExtensioncontrollerExtenderprofile#vsdb}
  */
  readonly vsdb?: string;
}

export function extensioncontrollerExtenderprofileLanExtensionTrafficSplitServicesToTerraform(struct?: ExtensioncontrollerExtenderprofileLanExtensionTrafficSplitServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    name: cdktf.stringToTerraform(struct!.name),
    service: cdktf.stringToTerraform(struct!.service),
    vsdb: cdktf.stringToTerraform(struct!.vsdb),
  }
}


export function extensioncontrollerExtenderprofileLanExtensionTrafficSplitServicesToHclTerraform(struct?: ExtensioncontrollerExtenderprofileLanExtensionTrafficSplitServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class ExtensioncontrollerExtenderprofileLanExtensionTrafficSplitServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExtensioncontrollerExtenderprofileLanExtensionTrafficSplitServices | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ExtensioncontrollerExtenderprofileLanExtensionTrafficSplitServices | cdktf.IResolvable | undefined) {
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

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
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
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
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

export class ExtensioncontrollerExtenderprofileLanExtensionTrafficSplitServicesList extends cdktf.ComplexList {
  public internalValue? : ExtensioncontrollerExtenderprofileLanExtensionTrafficSplitServices[] | cdktf.IResolvable

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
  public get(index: number): ExtensioncontrollerExtenderprofileLanExtensionTrafficSplitServicesOutputReference {
    return new ExtensioncontrollerExtenderprofileLanExtensionTrafficSplitServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExtensioncontrollerExtenderprofileLanExtension {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#backhaul_interface ExtensioncontrollerExtenderprofile#backhaul_interface}
  */
  readonly backhaulInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#backhaul_ip ExtensioncontrollerExtenderprofile#backhaul_ip}
  */
  readonly backhaulIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#ipsec_tunnel ExtensioncontrollerExtenderprofile#ipsec_tunnel}
  */
  readonly ipsecTunnel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#link_loadbalance ExtensioncontrollerExtenderprofile#link_loadbalance}
  */
  readonly linkLoadbalance?: string;
  /**
  * backhaul block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#backhaul ExtensioncontrollerExtenderprofile#backhaul}
  */
  readonly backhaul?: ExtensioncontrollerExtenderprofileLanExtensionBackhaul[] | cdktf.IResolvable;
  /**
  * downlinks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#downlinks ExtensioncontrollerExtenderprofile#downlinks}
  */
  readonly downlinks?: ExtensioncontrollerExtenderprofileLanExtensionDownlinks[] | cdktf.IResolvable;
  /**
  * traffic_split_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#traffic_split_services ExtensioncontrollerExtenderprofile#traffic_split_services}
  */
  readonly trafficSplitServices?: ExtensioncontrollerExtenderprofileLanExtensionTrafficSplitServices[] | cdktf.IResolvable;
}

export function extensioncontrollerExtenderprofileLanExtensionToTerraform(struct?: ExtensioncontrollerExtenderprofileLanExtensionOutputReference | ExtensioncontrollerExtenderprofileLanExtension): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backhaul_interface: cdktf.stringToTerraform(struct!.backhaulInterface),
    backhaul_ip: cdktf.stringToTerraform(struct!.backhaulIp),
    ipsec_tunnel: cdktf.stringToTerraform(struct!.ipsecTunnel),
    link_loadbalance: cdktf.stringToTerraform(struct!.linkLoadbalance),
    backhaul: cdktf.listMapper(extensioncontrollerExtenderprofileLanExtensionBackhaulToTerraform, true)(struct!.backhaul),
    downlinks: cdktf.listMapper(extensioncontrollerExtenderprofileLanExtensionDownlinksToTerraform, true)(struct!.downlinks),
    traffic_split_services: cdktf.listMapper(extensioncontrollerExtenderprofileLanExtensionTrafficSplitServicesToTerraform, true)(struct!.trafficSplitServices),
  }
}


export function extensioncontrollerExtenderprofileLanExtensionToHclTerraform(struct?: ExtensioncontrollerExtenderprofileLanExtensionOutputReference | ExtensioncontrollerExtenderprofileLanExtension): any {
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
      value: cdktf.listMapperHcl(extensioncontrollerExtenderprofileLanExtensionBackhaulToHclTerraform, true)(struct!.backhaul),
      isBlock: true,
      type: "list",
      storageClassType: "ExtensioncontrollerExtenderprofileLanExtensionBackhaulList",
    },
    downlinks: {
      value: cdktf.listMapperHcl(extensioncontrollerExtenderprofileLanExtensionDownlinksToHclTerraform, true)(struct!.downlinks),
      isBlock: true,
      type: "list",
      storageClassType: "ExtensioncontrollerExtenderprofileLanExtensionDownlinksList",
    },
    traffic_split_services: {
      value: cdktf.listMapperHcl(extensioncontrollerExtenderprofileLanExtensionTrafficSplitServicesToHclTerraform, true)(struct!.trafficSplitServices),
      isBlock: true,
      type: "list",
      storageClassType: "ExtensioncontrollerExtenderprofileLanExtensionTrafficSplitServicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExtensioncontrollerExtenderprofileLanExtensionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExtensioncontrollerExtenderprofileLanExtension | undefined {
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

  public set internalValue(value: ExtensioncontrollerExtenderprofileLanExtension | undefined) {
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
  private _backhaul = new ExtensioncontrollerExtenderprofileLanExtensionBackhaulList(this, "backhaul", false);
  public get backhaul() {
    return this._backhaul;
  }
  public putBackhaul(value: ExtensioncontrollerExtenderprofileLanExtensionBackhaul[] | cdktf.IResolvable) {
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
  private _downlinks = new ExtensioncontrollerExtenderprofileLanExtensionDownlinksList(this, "downlinks", false);
  public get downlinks() {
    return this._downlinks;
  }
  public putDownlinks(value: ExtensioncontrollerExtenderprofileLanExtensionDownlinks[] | cdktf.IResolvable) {
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
  private _trafficSplitServices = new ExtensioncontrollerExtenderprofileLanExtensionTrafficSplitServicesList(this, "traffic_split_services", false);
  public get trafficSplitServices() {
    return this._trafficSplitServices;
  }
  public putTrafficSplitServices(value: ExtensioncontrollerExtenderprofileLanExtensionTrafficSplitServices[] | cdktf.IResolvable) {
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
export interface ExtensioncontrollerExtenderprofileWifiRadio1LocalVaps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#name ExtensioncontrollerExtenderprofile#name}
  */
  readonly name?: string;
}

export function extensioncontrollerExtenderprofileWifiRadio1LocalVapsToTerraform(struct?: ExtensioncontrollerExtenderprofileWifiRadio1LocalVaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function extensioncontrollerExtenderprofileWifiRadio1LocalVapsToHclTerraform(struct?: ExtensioncontrollerExtenderprofileWifiRadio1LocalVaps | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExtensioncontrollerExtenderprofileWifiRadio1LocalVapsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExtensioncontrollerExtenderprofileWifiRadio1LocalVaps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExtensioncontrollerExtenderprofileWifiRadio1LocalVaps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class ExtensioncontrollerExtenderprofileWifiRadio1LocalVapsList extends cdktf.ComplexList {
  public internalValue? : ExtensioncontrollerExtenderprofileWifiRadio1LocalVaps[] | cdktf.IResolvable

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
  public get(index: number): ExtensioncontrollerExtenderprofileWifiRadio1LocalVapsOutputReference {
    return new ExtensioncontrollerExtenderprofileWifiRadio1LocalVapsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExtensioncontrollerExtenderprofileWifiRadio1 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#band ExtensioncontrollerExtenderprofile#band}
  */
  readonly band?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#bandwidth ExtensioncontrollerExtenderprofile#bandwidth}
  */
  readonly bandwidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#beacon_interval ExtensioncontrollerExtenderprofile#beacon_interval}
  */
  readonly beaconInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#bss_color ExtensioncontrollerExtenderprofile#bss_color}
  */
  readonly bssColor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#bss_color_mode ExtensioncontrollerExtenderprofile#bss_color_mode}
  */
  readonly bssColorMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#channel ExtensioncontrollerExtenderprofile#channel}
  */
  readonly channel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#extension_channel ExtensioncontrollerExtenderprofile#extension_channel}
  */
  readonly extensionChannel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#guard_interval ExtensioncontrollerExtenderprofile#guard_interval}
  */
  readonly guardInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#lan_ext_vap ExtensioncontrollerExtenderprofile#lan_ext_vap}
  */
  readonly lanExtVap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#max_clients ExtensioncontrollerExtenderprofile#max_clients}
  */
  readonly maxClients?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#mode ExtensioncontrollerExtenderprofile#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#n80211d ExtensioncontrollerExtenderprofile#n80211d}
  */
  readonly n80211D?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#operating_standard ExtensioncontrollerExtenderprofile#operating_standard}
  */
  readonly operatingStandard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#power_level ExtensioncontrollerExtenderprofile#power_level}
  */
  readonly powerLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#status ExtensioncontrollerExtenderprofile#status}
  */
  readonly status?: string;
  /**
  * local_vaps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#local_vaps ExtensioncontrollerExtenderprofile#local_vaps}
  */
  readonly localVaps?: ExtensioncontrollerExtenderprofileWifiRadio1LocalVaps[] | cdktf.IResolvable;
}

export function extensioncontrollerExtenderprofileWifiRadio1ToTerraform(struct?: ExtensioncontrollerExtenderprofileWifiRadio1OutputReference | ExtensioncontrollerExtenderprofileWifiRadio1): any {
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
    channel: cdktf.stringToTerraform(struct!.channel),
    extension_channel: cdktf.stringToTerraform(struct!.extensionChannel),
    guard_interval: cdktf.stringToTerraform(struct!.guardInterval),
    lan_ext_vap: cdktf.stringToTerraform(struct!.lanExtVap),
    max_clients: cdktf.numberToTerraform(struct!.maxClients),
    mode: cdktf.stringToTerraform(struct!.mode),
    n80211d: cdktf.stringToTerraform(struct!.n80211D),
    operating_standard: cdktf.stringToTerraform(struct!.operatingStandard),
    power_level: cdktf.numberToTerraform(struct!.powerLevel),
    status: cdktf.stringToTerraform(struct!.status),
    local_vaps: cdktf.listMapper(extensioncontrollerExtenderprofileWifiRadio1LocalVapsToTerraform, true)(struct!.localVaps),
  }
}


export function extensioncontrollerExtenderprofileWifiRadio1ToHclTerraform(struct?: ExtensioncontrollerExtenderprofileWifiRadio1OutputReference | ExtensioncontrollerExtenderprofileWifiRadio1): any {
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
      value: cdktf.stringToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
      value: cdktf.stringToHclTerraform(struct!.lanExtVap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_vaps: {
      value: cdktf.listMapperHcl(extensioncontrollerExtenderprofileWifiRadio1LocalVapsToHclTerraform, true)(struct!.localVaps),
      isBlock: true,
      type: "set",
      storageClassType: "ExtensioncontrollerExtenderprofileWifiRadio1LocalVapsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExtensioncontrollerExtenderprofileWifiRadio1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExtensioncontrollerExtenderprofileWifiRadio1 | undefined {
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
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._localVaps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localVaps = this._localVaps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExtensioncontrollerExtenderprofileWifiRadio1 | undefined) {
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
      this._maxClients = undefined;
      this._mode = undefined;
      this._n80211D = undefined;
      this._operatingStandard = undefined;
      this._powerLevel = undefined;
      this._status = undefined;
      this._localVaps.internalValue = undefined;
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
      this._maxClients = value.maxClients;
      this._mode = value.mode;
      this._n80211D = value.n80211D;
      this._operatingStandard = value.operatingStandard;
      this._powerLevel = value.powerLevel;
      this._status = value.status;
      this._localVaps.internalValue = value.localVaps;
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

  // channel - computed: false, optional: true, required: false
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
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

  // lan_ext_vap - computed: false, optional: true, required: false
  private _lanExtVap?: string; 
  public get lanExtVap() {
    return this.getStringAttribute('lan_ext_vap');
  }
  public set lanExtVap(value: string) {
    this._lanExtVap = value;
  }
  public resetLanExtVap() {
    this._lanExtVap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lanExtVapInput() {
    return this._lanExtVap;
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

  // local_vaps - computed: false, optional: true, required: false
  private _localVaps = new ExtensioncontrollerExtenderprofileWifiRadio1LocalVapsList(this, "local_vaps", true);
  public get localVaps() {
    return this._localVaps;
  }
  public putLocalVaps(value: ExtensioncontrollerExtenderprofileWifiRadio1LocalVaps[] | cdktf.IResolvable) {
    this._localVaps.internalValue = value;
  }
  public resetLocalVaps() {
    this._localVaps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localVapsInput() {
    return this._localVaps.internalValue;
  }
}
export interface ExtensioncontrollerExtenderprofileWifiRadio2LocalVaps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#name ExtensioncontrollerExtenderprofile#name}
  */
  readonly name?: string;
}

export function extensioncontrollerExtenderprofileWifiRadio2LocalVapsToTerraform(struct?: ExtensioncontrollerExtenderprofileWifiRadio2LocalVaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function extensioncontrollerExtenderprofileWifiRadio2LocalVapsToHclTerraform(struct?: ExtensioncontrollerExtenderprofileWifiRadio2LocalVaps | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExtensioncontrollerExtenderprofileWifiRadio2LocalVapsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExtensioncontrollerExtenderprofileWifiRadio2LocalVaps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExtensioncontrollerExtenderprofileWifiRadio2LocalVaps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class ExtensioncontrollerExtenderprofileWifiRadio2LocalVapsList extends cdktf.ComplexList {
  public internalValue? : ExtensioncontrollerExtenderprofileWifiRadio2LocalVaps[] | cdktf.IResolvable

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
  public get(index: number): ExtensioncontrollerExtenderprofileWifiRadio2LocalVapsOutputReference {
    return new ExtensioncontrollerExtenderprofileWifiRadio2LocalVapsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExtensioncontrollerExtenderprofileWifiRadio2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#band ExtensioncontrollerExtenderprofile#band}
  */
  readonly band?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#bandwidth ExtensioncontrollerExtenderprofile#bandwidth}
  */
  readonly bandwidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#beacon_interval ExtensioncontrollerExtenderprofile#beacon_interval}
  */
  readonly beaconInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#bss_color ExtensioncontrollerExtenderprofile#bss_color}
  */
  readonly bssColor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#bss_color_mode ExtensioncontrollerExtenderprofile#bss_color_mode}
  */
  readonly bssColorMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#channel ExtensioncontrollerExtenderprofile#channel}
  */
  readonly channel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#extension_channel ExtensioncontrollerExtenderprofile#extension_channel}
  */
  readonly extensionChannel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#guard_interval ExtensioncontrollerExtenderprofile#guard_interval}
  */
  readonly guardInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#lan_ext_vap ExtensioncontrollerExtenderprofile#lan_ext_vap}
  */
  readonly lanExtVap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#max_clients ExtensioncontrollerExtenderprofile#max_clients}
  */
  readonly maxClients?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#mode ExtensioncontrollerExtenderprofile#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#n80211d ExtensioncontrollerExtenderprofile#n80211d}
  */
  readonly n80211D?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#operating_standard ExtensioncontrollerExtenderprofile#operating_standard}
  */
  readonly operatingStandard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#power_level ExtensioncontrollerExtenderprofile#power_level}
  */
  readonly powerLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#status ExtensioncontrollerExtenderprofile#status}
  */
  readonly status?: string;
  /**
  * local_vaps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#local_vaps ExtensioncontrollerExtenderprofile#local_vaps}
  */
  readonly localVaps?: ExtensioncontrollerExtenderprofileWifiRadio2LocalVaps[] | cdktf.IResolvable;
}

export function extensioncontrollerExtenderprofileWifiRadio2ToTerraform(struct?: ExtensioncontrollerExtenderprofileWifiRadio2OutputReference | ExtensioncontrollerExtenderprofileWifiRadio2): any {
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
    channel: cdktf.stringToTerraform(struct!.channel),
    extension_channel: cdktf.stringToTerraform(struct!.extensionChannel),
    guard_interval: cdktf.stringToTerraform(struct!.guardInterval),
    lan_ext_vap: cdktf.stringToTerraform(struct!.lanExtVap),
    max_clients: cdktf.numberToTerraform(struct!.maxClients),
    mode: cdktf.stringToTerraform(struct!.mode),
    n80211d: cdktf.stringToTerraform(struct!.n80211D),
    operating_standard: cdktf.stringToTerraform(struct!.operatingStandard),
    power_level: cdktf.numberToTerraform(struct!.powerLevel),
    status: cdktf.stringToTerraform(struct!.status),
    local_vaps: cdktf.listMapper(extensioncontrollerExtenderprofileWifiRadio2LocalVapsToTerraform, true)(struct!.localVaps),
  }
}


export function extensioncontrollerExtenderprofileWifiRadio2ToHclTerraform(struct?: ExtensioncontrollerExtenderprofileWifiRadio2OutputReference | ExtensioncontrollerExtenderprofileWifiRadio2): any {
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
      value: cdktf.stringToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
      value: cdktf.stringToHclTerraform(struct!.lanExtVap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_vaps: {
      value: cdktf.listMapperHcl(extensioncontrollerExtenderprofileWifiRadio2LocalVapsToHclTerraform, true)(struct!.localVaps),
      isBlock: true,
      type: "set",
      storageClassType: "ExtensioncontrollerExtenderprofileWifiRadio2LocalVapsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExtensioncontrollerExtenderprofileWifiRadio2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExtensioncontrollerExtenderprofileWifiRadio2 | undefined {
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
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._localVaps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localVaps = this._localVaps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExtensioncontrollerExtenderprofileWifiRadio2 | undefined) {
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
      this._maxClients = undefined;
      this._mode = undefined;
      this._n80211D = undefined;
      this._operatingStandard = undefined;
      this._powerLevel = undefined;
      this._status = undefined;
      this._localVaps.internalValue = undefined;
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
      this._maxClients = value.maxClients;
      this._mode = value.mode;
      this._n80211D = value.n80211D;
      this._operatingStandard = value.operatingStandard;
      this._powerLevel = value.powerLevel;
      this._status = value.status;
      this._localVaps.internalValue = value.localVaps;
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

  // channel - computed: false, optional: true, required: false
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
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

  // lan_ext_vap - computed: false, optional: true, required: false
  private _lanExtVap?: string; 
  public get lanExtVap() {
    return this.getStringAttribute('lan_ext_vap');
  }
  public set lanExtVap(value: string) {
    this._lanExtVap = value;
  }
  public resetLanExtVap() {
    this._lanExtVap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lanExtVapInput() {
    return this._lanExtVap;
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

  // local_vaps - computed: false, optional: true, required: false
  private _localVaps = new ExtensioncontrollerExtenderprofileWifiRadio2LocalVapsList(this, "local_vaps", true);
  public get localVaps() {
    return this._localVaps;
  }
  public putLocalVaps(value: ExtensioncontrollerExtenderprofileWifiRadio2LocalVaps[] | cdktf.IResolvable) {
    this._localVaps.internalValue = value;
  }
  public resetLocalVaps() {
    this._localVaps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localVapsInput() {
    return this._localVaps.internalValue;
  }
}
export interface ExtensioncontrollerExtenderprofileWifi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#country ExtensioncontrollerExtenderprofile#country}
  */
  readonly country?: string;
  /**
  * radio_1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#radio_1 ExtensioncontrollerExtenderprofile#radio_1}
  */
  readonly radio1?: ExtensioncontrollerExtenderprofileWifiRadio1;
  /**
  * radio_2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#radio_2 ExtensioncontrollerExtenderprofile#radio_2}
  */
  readonly radio2?: ExtensioncontrollerExtenderprofileWifiRadio2;
}

export function extensioncontrollerExtenderprofileWifiToTerraform(struct?: ExtensioncontrollerExtenderprofileWifiOutputReference | ExtensioncontrollerExtenderprofileWifi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    country: cdktf.stringToTerraform(struct!.country),
    radio_1: extensioncontrollerExtenderprofileWifiRadio1ToTerraform(struct!.radio1),
    radio_2: extensioncontrollerExtenderprofileWifiRadio2ToTerraform(struct!.radio2),
  }
}


export function extensioncontrollerExtenderprofileWifiToHclTerraform(struct?: ExtensioncontrollerExtenderprofileWifiOutputReference | ExtensioncontrollerExtenderprofileWifi): any {
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
    radio_1: {
      value: extensioncontrollerExtenderprofileWifiRadio1ToHclTerraform(struct!.radio1),
      isBlock: true,
      type: "list",
      storageClassType: "ExtensioncontrollerExtenderprofileWifiRadio1List",
    },
    radio_2: {
      value: extensioncontrollerExtenderprofileWifiRadio2ToHclTerraform(struct!.radio2),
      isBlock: true,
      type: "list",
      storageClassType: "ExtensioncontrollerExtenderprofileWifiRadio2List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExtensioncontrollerExtenderprofileWifiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExtensioncontrollerExtenderprofileWifi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
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

  public set internalValue(value: ExtensioncontrollerExtenderprofileWifi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._country = undefined;
      this._radio1.internalValue = undefined;
      this._radio2.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._country = value.country;
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

  // radio_1 - computed: false, optional: true, required: false
  private _radio1 = new ExtensioncontrollerExtenderprofileWifiRadio1OutputReference(this, "radio_1");
  public get radio1() {
    return this._radio1;
  }
  public putRadio1(value: ExtensioncontrollerExtenderprofileWifiRadio1) {
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
  private _radio2 = new ExtensioncontrollerExtenderprofileWifiRadio2OutputReference(this, "radio_2");
  public get radio2() {
    return this._radio2;
  }
  public putRadio2(value: ExtensioncontrollerExtenderprofileWifiRadio2) {
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
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile fortios_extensioncontroller_extenderprofile}
*/
export class ExtensioncontrollerExtenderprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_extensioncontroller_extenderprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExtensioncontrollerExtenderprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExtensioncontrollerExtenderprofile to import
  * @param importFromId The id of the existing ExtensioncontrollerExtenderprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExtensioncontrollerExtenderprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_extensioncontroller_extenderprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extensioncontroller_extenderprofile fortios_extensioncontroller_extenderprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExtensioncontrollerExtenderprofileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ExtensioncontrollerExtenderprofileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_extensioncontroller_extenderprofile',
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
    this._allowaccess = config.allowaccess;
    this._bandwidthLimit = config.bandwidthLimit;
    this._enforceBandwidth = config.enforceBandwidth;
    this._extension = config.extension;
    this._fosid = config.fosid;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._loginPassword = config.loginPassword;
    this._loginPasswordChange = config.loginPasswordChange;
    this._model = config.model;
    this._name = config.name;
    this._vdomparam = config.vdomparam;
    this._cellular.internalValue = config.cellular;
    this._lanExtension.internalValue = config.lanExtension;
    this._wifi.internalValue = config.wifi;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowaccess - computed: false, optional: true, required: false
  private _allowaccess?: string; 
  public get allowaccess() {
    return this.getStringAttribute('allowaccess');
  }
  public set allowaccess(value: string) {
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

  // extension - computed: true, optional: true, required: false
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

  // cellular - computed: false, optional: true, required: false
  private _cellular = new ExtensioncontrollerExtenderprofileCellularOutputReference(this, "cellular");
  public get cellular() {
    return this._cellular;
  }
  public putCellular(value: ExtensioncontrollerExtenderprofileCellular) {
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
  private _lanExtension = new ExtensioncontrollerExtenderprofileLanExtensionOutputReference(this, "lan_extension");
  public get lanExtension() {
    return this._lanExtension;
  }
  public putLanExtension(value: ExtensioncontrollerExtenderprofileLanExtension) {
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
  private _wifi = new ExtensioncontrollerExtenderprofileWifiOutputReference(this, "wifi");
  public get wifi() {
    return this._wifi;
  }
  public putWifi(value: ExtensioncontrollerExtenderprofileWifi) {
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
      allowaccess: cdktf.stringToTerraform(this._allowaccess),
      bandwidth_limit: cdktf.numberToTerraform(this._bandwidthLimit),
      enforce_bandwidth: cdktf.stringToTerraform(this._enforceBandwidth),
      extension: cdktf.stringToTerraform(this._extension),
      fosid: cdktf.numberToTerraform(this._fosid),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      login_password: cdktf.stringToTerraform(this._loginPassword),
      login_password_change: cdktf.stringToTerraform(this._loginPasswordChange),
      model: cdktf.stringToTerraform(this._model),
      name: cdktf.stringToTerraform(this._name),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      cellular: extensioncontrollerExtenderprofileCellularToTerraform(this._cellular.internalValue),
      lan_extension: extensioncontrollerExtenderprofileLanExtensionToTerraform(this._lanExtension.internalValue),
      wifi: extensioncontrollerExtenderprofileWifiToTerraform(this._wifi.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowaccess: {
        value: cdktf.stringToHclTerraform(this._allowaccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cellular: {
        value: extensioncontrollerExtenderprofileCellularToHclTerraform(this._cellular.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExtensioncontrollerExtenderprofileCellularList",
      },
      lan_extension: {
        value: extensioncontrollerExtenderprofileLanExtensionToHclTerraform(this._lanExtension.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExtensioncontrollerExtenderprofileLanExtensionList",
      },
      wifi: {
        value: extensioncontrollerExtenderprofileWifiToHclTerraform(this._wifi.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExtensioncontrollerExtenderprofileWifiList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
