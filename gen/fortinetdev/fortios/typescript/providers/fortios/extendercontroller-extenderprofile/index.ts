// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExtendercontrollerExtenderprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#allowaccess ExtendercontrollerExtenderprofile#allowaccess}
  */
  readonly allowaccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#bandwidth_limit ExtendercontrollerExtenderprofile#bandwidth_limit}
  */
  readonly bandwidthLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#enforce_bandwidth ExtendercontrollerExtenderprofile#enforce_bandwidth}
  */
  readonly enforceBandwidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#extension ExtendercontrollerExtenderprofile#extension}
  */
  readonly extension?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#fosid ExtendercontrollerExtenderprofile#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#get_all_tables ExtendercontrollerExtenderprofile#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#id ExtendercontrollerExtenderprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#login_password ExtendercontrollerExtenderprofile#login_password}
  */
  readonly loginPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#login_password_change ExtendercontrollerExtenderprofile#login_password_change}
  */
  readonly loginPasswordChange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#model ExtendercontrollerExtenderprofile#model}
  */
  readonly model?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#name ExtendercontrollerExtenderprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#vdomparam ExtendercontrollerExtenderprofile#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * cellular block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#cellular ExtendercontrollerExtenderprofile#cellular}
  */
  readonly cellular?: ExtendercontrollerExtenderprofileCellular;
  /**
  * lan_extension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#lan_extension ExtendercontrollerExtenderprofile#lan_extension}
  */
  readonly lanExtension?: ExtendercontrollerExtenderprofileLanExtension;
}
export interface ExtendercontrollerExtenderprofileCellularControllerReport {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#interval ExtendercontrollerExtenderprofile#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#signal_threshold ExtendercontrollerExtenderprofile#signal_threshold}
  */
  readonly signalThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#status ExtendercontrollerExtenderprofile#status}
  */
  readonly status?: string;
}

export function extendercontrollerExtenderprofileCellularControllerReportToTerraform(struct?: ExtendercontrollerExtenderprofileCellularControllerReportOutputReference | ExtendercontrollerExtenderprofileCellularControllerReport): any {
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


export function extendercontrollerExtenderprofileCellularControllerReportToHclTerraform(struct?: ExtendercontrollerExtenderprofileCellularControllerReportOutputReference | ExtendercontrollerExtenderprofileCellularControllerReport): any {
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

export class ExtendercontrollerExtenderprofileCellularControllerReportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExtendercontrollerExtenderprofileCellularControllerReport | undefined {
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

  public set internalValue(value: ExtendercontrollerExtenderprofileCellularControllerReport | undefined) {
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
export interface ExtendercontrollerExtenderprofileCellularDataplan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#name ExtendercontrollerExtenderprofile#name}
  */
  readonly name?: string;
}

export function extendercontrollerExtenderprofileCellularDataplanToTerraform(struct?: ExtendercontrollerExtenderprofileCellularDataplan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function extendercontrollerExtenderprofileCellularDataplanToHclTerraform(struct?: ExtendercontrollerExtenderprofileCellularDataplan | cdktf.IResolvable): any {
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

export class ExtendercontrollerExtenderprofileCellularDataplanOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExtendercontrollerExtenderprofileCellularDataplan | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ExtendercontrollerExtenderprofileCellularDataplan | cdktf.IResolvable | undefined) {
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

export class ExtendercontrollerExtenderprofileCellularDataplanList extends cdktf.ComplexList {
  public internalValue? : ExtendercontrollerExtenderprofileCellularDataplan[] | cdktf.IResolvable

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
  public get(index: number): ExtendercontrollerExtenderprofileCellularDataplanOutputReference {
    return new ExtendercontrollerExtenderprofileCellularDataplanOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExtendercontrollerExtenderprofileCellularModem1AutoSwitch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#dataplan ExtendercontrollerExtenderprofile#dataplan}
  */
  readonly dataplan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#disconnect ExtendercontrollerExtenderprofile#disconnect}
  */
  readonly disconnect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#disconnect_period ExtendercontrollerExtenderprofile#disconnect_period}
  */
  readonly disconnectPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#disconnect_threshold ExtendercontrollerExtenderprofile#disconnect_threshold}
  */
  readonly disconnectThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#signal ExtendercontrollerExtenderprofile#signal}
  */
  readonly signal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#switch_back ExtendercontrollerExtenderprofile#switch_back}
  */
  readonly switchBack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#switch_back_time ExtendercontrollerExtenderprofile#switch_back_time}
  */
  readonly switchBackTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#switch_back_timer ExtendercontrollerExtenderprofile#switch_back_timer}
  */
  readonly switchBackTimer?: number;
}

export function extendercontrollerExtenderprofileCellularModem1AutoSwitchToTerraform(struct?: ExtendercontrollerExtenderprofileCellularModem1AutoSwitchOutputReference | ExtendercontrollerExtenderprofileCellularModem1AutoSwitch): any {
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


export function extendercontrollerExtenderprofileCellularModem1AutoSwitchToHclTerraform(struct?: ExtendercontrollerExtenderprofileCellularModem1AutoSwitchOutputReference | ExtendercontrollerExtenderprofileCellularModem1AutoSwitch): any {
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

export class ExtendercontrollerExtenderprofileCellularModem1AutoSwitchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExtendercontrollerExtenderprofileCellularModem1AutoSwitch | undefined {
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

  public set internalValue(value: ExtendercontrollerExtenderprofileCellularModem1AutoSwitch | undefined) {
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
export interface ExtendercontrollerExtenderprofileCellularModem1 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#conn_status ExtendercontrollerExtenderprofile#conn_status}
  */
  readonly connStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#default_sim ExtendercontrollerExtenderprofile#default_sim}
  */
  readonly defaultSim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#gps ExtendercontrollerExtenderprofile#gps}
  */
  readonly gps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#preferred_carrier ExtendercontrollerExtenderprofile#preferred_carrier}
  */
  readonly preferredCarrier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#redundant_intf ExtendercontrollerExtenderprofile#redundant_intf}
  */
  readonly redundantIntf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#redundant_mode ExtendercontrollerExtenderprofile#redundant_mode}
  */
  readonly redundantMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#sim1_pin ExtendercontrollerExtenderprofile#sim1_pin}
  */
  readonly sim1Pin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#sim1_pin_code ExtendercontrollerExtenderprofile#sim1_pin_code}
  */
  readonly sim1PinCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#sim2_pin ExtendercontrollerExtenderprofile#sim2_pin}
  */
  readonly sim2Pin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#sim2_pin_code ExtendercontrollerExtenderprofile#sim2_pin_code}
  */
  readonly sim2PinCode?: string;
  /**
  * auto_switch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#auto_switch ExtendercontrollerExtenderprofile#auto_switch}
  */
  readonly autoSwitch?: ExtendercontrollerExtenderprofileCellularModem1AutoSwitch;
}

export function extendercontrollerExtenderprofileCellularModem1ToTerraform(struct?: ExtendercontrollerExtenderprofileCellularModem1OutputReference | ExtendercontrollerExtenderprofileCellularModem1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conn_status: cdktf.numberToTerraform(struct!.connStatus),
    default_sim: cdktf.stringToTerraform(struct!.defaultSim),
    gps: cdktf.stringToTerraform(struct!.gps),
    preferred_carrier: cdktf.stringToTerraform(struct!.preferredCarrier),
    redundant_intf: cdktf.stringToTerraform(struct!.redundantIntf),
    redundant_mode: cdktf.stringToTerraform(struct!.redundantMode),
    sim1_pin: cdktf.stringToTerraform(struct!.sim1Pin),
    sim1_pin_code: cdktf.stringToTerraform(struct!.sim1PinCode),
    sim2_pin: cdktf.stringToTerraform(struct!.sim2Pin),
    sim2_pin_code: cdktf.stringToTerraform(struct!.sim2PinCode),
    auto_switch: extendercontrollerExtenderprofileCellularModem1AutoSwitchToTerraform(struct!.autoSwitch),
  }
}


export function extendercontrollerExtenderprofileCellularModem1ToHclTerraform(struct?: ExtendercontrollerExtenderprofileCellularModem1OutputReference | ExtendercontrollerExtenderprofileCellularModem1): any {
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
      value: extendercontrollerExtenderprofileCellularModem1AutoSwitchToHclTerraform(struct!.autoSwitch),
      isBlock: true,
      type: "list",
      storageClassType: "ExtendercontrollerExtenderprofileCellularModem1AutoSwitchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExtendercontrollerExtenderprofileCellularModem1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExtendercontrollerExtenderprofileCellularModem1 | undefined {
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

  public set internalValue(value: ExtendercontrollerExtenderprofileCellularModem1 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connStatus = undefined;
      this._defaultSim = undefined;
      this._gps = undefined;
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
  private _autoSwitch = new ExtendercontrollerExtenderprofileCellularModem1AutoSwitchOutputReference(this, "auto_switch");
  public get autoSwitch() {
    return this._autoSwitch;
  }
  public putAutoSwitch(value: ExtendercontrollerExtenderprofileCellularModem1AutoSwitch) {
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
export interface ExtendercontrollerExtenderprofileCellularModem2AutoSwitch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#dataplan ExtendercontrollerExtenderprofile#dataplan}
  */
  readonly dataplan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#disconnect ExtendercontrollerExtenderprofile#disconnect}
  */
  readonly disconnect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#disconnect_period ExtendercontrollerExtenderprofile#disconnect_period}
  */
  readonly disconnectPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#disconnect_threshold ExtendercontrollerExtenderprofile#disconnect_threshold}
  */
  readonly disconnectThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#signal ExtendercontrollerExtenderprofile#signal}
  */
  readonly signal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#switch_back ExtendercontrollerExtenderprofile#switch_back}
  */
  readonly switchBack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#switch_back_time ExtendercontrollerExtenderprofile#switch_back_time}
  */
  readonly switchBackTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#switch_back_timer ExtendercontrollerExtenderprofile#switch_back_timer}
  */
  readonly switchBackTimer?: number;
}

export function extendercontrollerExtenderprofileCellularModem2AutoSwitchToTerraform(struct?: ExtendercontrollerExtenderprofileCellularModem2AutoSwitchOutputReference | ExtendercontrollerExtenderprofileCellularModem2AutoSwitch): any {
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


export function extendercontrollerExtenderprofileCellularModem2AutoSwitchToHclTerraform(struct?: ExtendercontrollerExtenderprofileCellularModem2AutoSwitchOutputReference | ExtendercontrollerExtenderprofileCellularModem2AutoSwitch): any {
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

export class ExtendercontrollerExtenderprofileCellularModem2AutoSwitchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExtendercontrollerExtenderprofileCellularModem2AutoSwitch | undefined {
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

  public set internalValue(value: ExtendercontrollerExtenderprofileCellularModem2AutoSwitch | undefined) {
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
export interface ExtendercontrollerExtenderprofileCellularModem2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#conn_status ExtendercontrollerExtenderprofile#conn_status}
  */
  readonly connStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#default_sim ExtendercontrollerExtenderprofile#default_sim}
  */
  readonly defaultSim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#gps ExtendercontrollerExtenderprofile#gps}
  */
  readonly gps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#preferred_carrier ExtendercontrollerExtenderprofile#preferred_carrier}
  */
  readonly preferredCarrier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#redundant_intf ExtendercontrollerExtenderprofile#redundant_intf}
  */
  readonly redundantIntf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#redundant_mode ExtendercontrollerExtenderprofile#redundant_mode}
  */
  readonly redundantMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#sim1_pin ExtendercontrollerExtenderprofile#sim1_pin}
  */
  readonly sim1Pin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#sim1_pin_code ExtendercontrollerExtenderprofile#sim1_pin_code}
  */
  readonly sim1PinCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#sim2_pin ExtendercontrollerExtenderprofile#sim2_pin}
  */
  readonly sim2Pin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#sim2_pin_code ExtendercontrollerExtenderprofile#sim2_pin_code}
  */
  readonly sim2PinCode?: string;
  /**
  * auto_switch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#auto_switch ExtendercontrollerExtenderprofile#auto_switch}
  */
  readonly autoSwitch?: ExtendercontrollerExtenderprofileCellularModem2AutoSwitch;
}

export function extendercontrollerExtenderprofileCellularModem2ToTerraform(struct?: ExtendercontrollerExtenderprofileCellularModem2OutputReference | ExtendercontrollerExtenderprofileCellularModem2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conn_status: cdktf.numberToTerraform(struct!.connStatus),
    default_sim: cdktf.stringToTerraform(struct!.defaultSim),
    gps: cdktf.stringToTerraform(struct!.gps),
    preferred_carrier: cdktf.stringToTerraform(struct!.preferredCarrier),
    redundant_intf: cdktf.stringToTerraform(struct!.redundantIntf),
    redundant_mode: cdktf.stringToTerraform(struct!.redundantMode),
    sim1_pin: cdktf.stringToTerraform(struct!.sim1Pin),
    sim1_pin_code: cdktf.stringToTerraform(struct!.sim1PinCode),
    sim2_pin: cdktf.stringToTerraform(struct!.sim2Pin),
    sim2_pin_code: cdktf.stringToTerraform(struct!.sim2PinCode),
    auto_switch: extendercontrollerExtenderprofileCellularModem2AutoSwitchToTerraform(struct!.autoSwitch),
  }
}


export function extendercontrollerExtenderprofileCellularModem2ToHclTerraform(struct?: ExtendercontrollerExtenderprofileCellularModem2OutputReference | ExtendercontrollerExtenderprofileCellularModem2): any {
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
      value: extendercontrollerExtenderprofileCellularModem2AutoSwitchToHclTerraform(struct!.autoSwitch),
      isBlock: true,
      type: "list",
      storageClassType: "ExtendercontrollerExtenderprofileCellularModem2AutoSwitchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExtendercontrollerExtenderprofileCellularModem2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExtendercontrollerExtenderprofileCellularModem2 | undefined {
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

  public set internalValue(value: ExtendercontrollerExtenderprofileCellularModem2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connStatus = undefined;
      this._defaultSim = undefined;
      this._gps = undefined;
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
  private _autoSwitch = new ExtendercontrollerExtenderprofileCellularModem2AutoSwitchOutputReference(this, "auto_switch");
  public get autoSwitch() {
    return this._autoSwitch;
  }
  public putAutoSwitch(value: ExtendercontrollerExtenderprofileCellularModem2AutoSwitch) {
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
export interface ExtendercontrollerExtenderprofileCellularSmsNotificationAlert {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#data_exhausted ExtendercontrollerExtenderprofile#data_exhausted}
  */
  readonly dataExhausted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#fgt_backup_mode_switch ExtendercontrollerExtenderprofile#fgt_backup_mode_switch}
  */
  readonly fgtBackupModeSwitch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#low_signal_strength ExtendercontrollerExtenderprofile#low_signal_strength}
  */
  readonly lowSignalStrength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#mode_switch ExtendercontrollerExtenderprofile#mode_switch}
  */
  readonly modeSwitch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#os_image_fallback ExtendercontrollerExtenderprofile#os_image_fallback}
  */
  readonly osImageFallback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#session_disconnect ExtendercontrollerExtenderprofile#session_disconnect}
  */
  readonly sessionDisconnect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#system_reboot ExtendercontrollerExtenderprofile#system_reboot}
  */
  readonly systemReboot?: string;
}

export function extendercontrollerExtenderprofileCellularSmsNotificationAlertToTerraform(struct?: ExtendercontrollerExtenderprofileCellularSmsNotificationAlertOutputReference | ExtendercontrollerExtenderprofileCellularSmsNotificationAlert): any {
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


export function extendercontrollerExtenderprofileCellularSmsNotificationAlertToHclTerraform(struct?: ExtendercontrollerExtenderprofileCellularSmsNotificationAlertOutputReference | ExtendercontrollerExtenderprofileCellularSmsNotificationAlert): any {
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

export class ExtendercontrollerExtenderprofileCellularSmsNotificationAlertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExtendercontrollerExtenderprofileCellularSmsNotificationAlert | undefined {
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

  public set internalValue(value: ExtendercontrollerExtenderprofileCellularSmsNotificationAlert | undefined) {
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
export interface ExtendercontrollerExtenderprofileCellularSmsNotificationReceiver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#alert ExtendercontrollerExtenderprofile#alert}
  */
  readonly alert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#name ExtendercontrollerExtenderprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#phone_number ExtendercontrollerExtenderprofile#phone_number}
  */
  readonly phoneNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#status ExtendercontrollerExtenderprofile#status}
  */
  readonly status?: string;
}

export function extendercontrollerExtenderprofileCellularSmsNotificationReceiverToTerraform(struct?: ExtendercontrollerExtenderprofileCellularSmsNotificationReceiver | cdktf.IResolvable): any {
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


export function extendercontrollerExtenderprofileCellularSmsNotificationReceiverToHclTerraform(struct?: ExtendercontrollerExtenderprofileCellularSmsNotificationReceiver | cdktf.IResolvable): any {
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

export class ExtendercontrollerExtenderprofileCellularSmsNotificationReceiverOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExtendercontrollerExtenderprofileCellularSmsNotificationReceiver | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ExtendercontrollerExtenderprofileCellularSmsNotificationReceiver | cdktf.IResolvable | undefined) {
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

export class ExtendercontrollerExtenderprofileCellularSmsNotificationReceiverList extends cdktf.ComplexList {
  public internalValue? : ExtendercontrollerExtenderprofileCellularSmsNotificationReceiver[] | cdktf.IResolvable

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
  public get(index: number): ExtendercontrollerExtenderprofileCellularSmsNotificationReceiverOutputReference {
    return new ExtendercontrollerExtenderprofileCellularSmsNotificationReceiverOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExtendercontrollerExtenderprofileCellularSmsNotification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#status ExtendercontrollerExtenderprofile#status}
  */
  readonly status?: string;
  /**
  * alert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#alert ExtendercontrollerExtenderprofile#alert}
  */
  readonly alert?: ExtendercontrollerExtenderprofileCellularSmsNotificationAlert;
  /**
  * receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#receiver ExtendercontrollerExtenderprofile#receiver}
  */
  readonly receiver?: ExtendercontrollerExtenderprofileCellularSmsNotificationReceiver[] | cdktf.IResolvable;
}

export function extendercontrollerExtenderprofileCellularSmsNotificationToTerraform(struct?: ExtendercontrollerExtenderprofileCellularSmsNotificationOutputReference | ExtendercontrollerExtenderprofileCellularSmsNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
    alert: extendercontrollerExtenderprofileCellularSmsNotificationAlertToTerraform(struct!.alert),
    receiver: cdktf.listMapper(extendercontrollerExtenderprofileCellularSmsNotificationReceiverToTerraform, true)(struct!.receiver),
  }
}


export function extendercontrollerExtenderprofileCellularSmsNotificationToHclTerraform(struct?: ExtendercontrollerExtenderprofileCellularSmsNotificationOutputReference | ExtendercontrollerExtenderprofileCellularSmsNotification): any {
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
      value: extendercontrollerExtenderprofileCellularSmsNotificationAlertToHclTerraform(struct!.alert),
      isBlock: true,
      type: "list",
      storageClassType: "ExtendercontrollerExtenderprofileCellularSmsNotificationAlertList",
    },
    receiver: {
      value: cdktf.listMapperHcl(extendercontrollerExtenderprofileCellularSmsNotificationReceiverToHclTerraform, true)(struct!.receiver),
      isBlock: true,
      type: "list",
      storageClassType: "ExtendercontrollerExtenderprofileCellularSmsNotificationReceiverList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExtendercontrollerExtenderprofileCellularSmsNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExtendercontrollerExtenderprofileCellularSmsNotification | undefined {
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

  public set internalValue(value: ExtendercontrollerExtenderprofileCellularSmsNotification | undefined) {
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
  private _alert = new ExtendercontrollerExtenderprofileCellularSmsNotificationAlertOutputReference(this, "alert");
  public get alert() {
    return this._alert;
  }
  public putAlert(value: ExtendercontrollerExtenderprofileCellularSmsNotificationAlert) {
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
  private _receiver = new ExtendercontrollerExtenderprofileCellularSmsNotificationReceiverList(this, "receiver", false);
  public get receiver() {
    return this._receiver;
  }
  public putReceiver(value: ExtendercontrollerExtenderprofileCellularSmsNotificationReceiver[] | cdktf.IResolvable) {
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
export interface ExtendercontrollerExtenderprofileCellular {
  /**
  * controller_report block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#controller_report ExtendercontrollerExtenderprofile#controller_report}
  */
  readonly controllerReport?: ExtendercontrollerExtenderprofileCellularControllerReport;
  /**
  * dataplan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#dataplan ExtendercontrollerExtenderprofile#dataplan}
  */
  readonly dataplan?: ExtendercontrollerExtenderprofileCellularDataplan[] | cdktf.IResolvable;
  /**
  * modem1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#modem1 ExtendercontrollerExtenderprofile#modem1}
  */
  readonly modem1?: ExtendercontrollerExtenderprofileCellularModem1;
  /**
  * modem2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#modem2 ExtendercontrollerExtenderprofile#modem2}
  */
  readonly modem2?: ExtendercontrollerExtenderprofileCellularModem2;
  /**
  * sms_notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#sms_notification ExtendercontrollerExtenderprofile#sms_notification}
  */
  readonly smsNotification?: ExtendercontrollerExtenderprofileCellularSmsNotification;
}

export function extendercontrollerExtenderprofileCellularToTerraform(struct?: ExtendercontrollerExtenderprofileCellularOutputReference | ExtendercontrollerExtenderprofileCellular): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    controller_report: extendercontrollerExtenderprofileCellularControllerReportToTerraform(struct!.controllerReport),
    dataplan: cdktf.listMapper(extendercontrollerExtenderprofileCellularDataplanToTerraform, true)(struct!.dataplan),
    modem1: extendercontrollerExtenderprofileCellularModem1ToTerraform(struct!.modem1),
    modem2: extendercontrollerExtenderprofileCellularModem2ToTerraform(struct!.modem2),
    sms_notification: extendercontrollerExtenderprofileCellularSmsNotificationToTerraform(struct!.smsNotification),
  }
}


export function extendercontrollerExtenderprofileCellularToHclTerraform(struct?: ExtendercontrollerExtenderprofileCellularOutputReference | ExtendercontrollerExtenderprofileCellular): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    controller_report: {
      value: extendercontrollerExtenderprofileCellularControllerReportToHclTerraform(struct!.controllerReport),
      isBlock: true,
      type: "list",
      storageClassType: "ExtendercontrollerExtenderprofileCellularControllerReportList",
    },
    dataplan: {
      value: cdktf.listMapperHcl(extendercontrollerExtenderprofileCellularDataplanToHclTerraform, true)(struct!.dataplan),
      isBlock: true,
      type: "set",
      storageClassType: "ExtendercontrollerExtenderprofileCellularDataplanList",
    },
    modem1: {
      value: extendercontrollerExtenderprofileCellularModem1ToHclTerraform(struct!.modem1),
      isBlock: true,
      type: "list",
      storageClassType: "ExtendercontrollerExtenderprofileCellularModem1List",
    },
    modem2: {
      value: extendercontrollerExtenderprofileCellularModem2ToHclTerraform(struct!.modem2),
      isBlock: true,
      type: "list",
      storageClassType: "ExtendercontrollerExtenderprofileCellularModem2List",
    },
    sms_notification: {
      value: extendercontrollerExtenderprofileCellularSmsNotificationToHclTerraform(struct!.smsNotification),
      isBlock: true,
      type: "list",
      storageClassType: "ExtendercontrollerExtenderprofileCellularSmsNotificationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExtendercontrollerExtenderprofileCellularOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExtendercontrollerExtenderprofileCellular | undefined {
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

  public set internalValue(value: ExtendercontrollerExtenderprofileCellular | undefined) {
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
  private _controllerReport = new ExtendercontrollerExtenderprofileCellularControllerReportOutputReference(this, "controller_report");
  public get controllerReport() {
    return this._controllerReport;
  }
  public putControllerReport(value: ExtendercontrollerExtenderprofileCellularControllerReport) {
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
  private _dataplan = new ExtendercontrollerExtenderprofileCellularDataplanList(this, "dataplan", true);
  public get dataplan() {
    return this._dataplan;
  }
  public putDataplan(value: ExtendercontrollerExtenderprofileCellularDataplan[] | cdktf.IResolvable) {
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
  private _modem1 = new ExtendercontrollerExtenderprofileCellularModem1OutputReference(this, "modem1");
  public get modem1() {
    return this._modem1;
  }
  public putModem1(value: ExtendercontrollerExtenderprofileCellularModem1) {
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
  private _modem2 = new ExtendercontrollerExtenderprofileCellularModem2OutputReference(this, "modem2");
  public get modem2() {
    return this._modem2;
  }
  public putModem2(value: ExtendercontrollerExtenderprofileCellularModem2) {
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
  private _smsNotification = new ExtendercontrollerExtenderprofileCellularSmsNotificationOutputReference(this, "sms_notification");
  public get smsNotification() {
    return this._smsNotification;
  }
  public putSmsNotification(value: ExtendercontrollerExtenderprofileCellularSmsNotification) {
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
export interface ExtendercontrollerExtenderprofileLanExtensionBackhaul {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#name ExtendercontrollerExtenderprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#port ExtendercontrollerExtenderprofile#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#role ExtendercontrollerExtenderprofile#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#weight ExtendercontrollerExtenderprofile#weight}
  */
  readonly weight?: number;
}

export function extendercontrollerExtenderprofileLanExtensionBackhaulToTerraform(struct?: ExtendercontrollerExtenderprofileLanExtensionBackhaul | cdktf.IResolvable): any {
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


export function extendercontrollerExtenderprofileLanExtensionBackhaulToHclTerraform(struct?: ExtendercontrollerExtenderprofileLanExtensionBackhaul | cdktf.IResolvable): any {
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

export class ExtendercontrollerExtenderprofileLanExtensionBackhaulOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExtendercontrollerExtenderprofileLanExtensionBackhaul | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ExtendercontrollerExtenderprofileLanExtensionBackhaul | cdktf.IResolvable | undefined) {
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

export class ExtendercontrollerExtenderprofileLanExtensionBackhaulList extends cdktf.ComplexList {
  public internalValue? : ExtendercontrollerExtenderprofileLanExtensionBackhaul[] | cdktf.IResolvable

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
  public get(index: number): ExtendercontrollerExtenderprofileLanExtensionBackhaulOutputReference {
    return new ExtendercontrollerExtenderprofileLanExtensionBackhaulOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExtendercontrollerExtenderprofileLanExtension {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#backhaul_interface ExtendercontrollerExtenderprofile#backhaul_interface}
  */
  readonly backhaulInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#backhaul_ip ExtendercontrollerExtenderprofile#backhaul_ip}
  */
  readonly backhaulIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#ipsec_tunnel ExtendercontrollerExtenderprofile#ipsec_tunnel}
  */
  readonly ipsecTunnel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#link_loadbalance ExtendercontrollerExtenderprofile#link_loadbalance}
  */
  readonly linkLoadbalance?: string;
  /**
  * backhaul block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#backhaul ExtendercontrollerExtenderprofile#backhaul}
  */
  readonly backhaul?: ExtendercontrollerExtenderprofileLanExtensionBackhaul[] | cdktf.IResolvable;
}

export function extendercontrollerExtenderprofileLanExtensionToTerraform(struct?: ExtendercontrollerExtenderprofileLanExtensionOutputReference | ExtendercontrollerExtenderprofileLanExtension): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backhaul_interface: cdktf.stringToTerraform(struct!.backhaulInterface),
    backhaul_ip: cdktf.stringToTerraform(struct!.backhaulIp),
    ipsec_tunnel: cdktf.stringToTerraform(struct!.ipsecTunnel),
    link_loadbalance: cdktf.stringToTerraform(struct!.linkLoadbalance),
    backhaul: cdktf.listMapper(extendercontrollerExtenderprofileLanExtensionBackhaulToTerraform, true)(struct!.backhaul),
  }
}


export function extendercontrollerExtenderprofileLanExtensionToHclTerraform(struct?: ExtendercontrollerExtenderprofileLanExtensionOutputReference | ExtendercontrollerExtenderprofileLanExtension): any {
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
      value: cdktf.listMapperHcl(extendercontrollerExtenderprofileLanExtensionBackhaulToHclTerraform, true)(struct!.backhaul),
      isBlock: true,
      type: "list",
      storageClassType: "ExtendercontrollerExtenderprofileLanExtensionBackhaulList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExtendercontrollerExtenderprofileLanExtensionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExtendercontrollerExtenderprofileLanExtension | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExtendercontrollerExtenderprofileLanExtension | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backhaulInterface = undefined;
      this._backhaulIp = undefined;
      this._ipsecTunnel = undefined;
      this._linkLoadbalance = undefined;
      this._backhaul.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backhaulInterface = value.backhaulInterface;
      this._backhaulIp = value.backhaulIp;
      this._ipsecTunnel = value.ipsecTunnel;
      this._linkLoadbalance = value.linkLoadbalance;
      this._backhaul.internalValue = value.backhaul;
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
  private _backhaul = new ExtendercontrollerExtenderprofileLanExtensionBackhaulList(this, "backhaul", false);
  public get backhaul() {
    return this._backhaul;
  }
  public putBackhaul(value: ExtendercontrollerExtenderprofileLanExtensionBackhaul[] | cdktf.IResolvable) {
    this._backhaul.internalValue = value;
  }
  public resetBackhaul() {
    this._backhaul.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backhaulInput() {
    return this._backhaul.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile fortios_extendercontroller_extenderprofile}
*/
export class ExtendercontrollerExtenderprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_extendercontroller_extenderprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExtendercontrollerExtenderprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExtendercontrollerExtenderprofile to import
  * @param importFromId The id of the existing ExtendercontrollerExtenderprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExtendercontrollerExtenderprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_extendercontroller_extenderprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_extenderprofile fortios_extendercontroller_extenderprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExtendercontrollerExtenderprofileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ExtendercontrollerExtenderprofileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_extendercontroller_extenderprofile',
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
  private _cellular = new ExtendercontrollerExtenderprofileCellularOutputReference(this, "cellular");
  public get cellular() {
    return this._cellular;
  }
  public putCellular(value: ExtendercontrollerExtenderprofileCellular) {
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
  private _lanExtension = new ExtendercontrollerExtenderprofileLanExtensionOutputReference(this, "lan_extension");
  public get lanExtension() {
    return this._lanExtension;
  }
  public putLanExtension(value: ExtendercontrollerExtenderprofileLanExtension) {
    this._lanExtension.internalValue = value;
  }
  public resetLanExtension() {
    this._lanExtension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lanExtensionInput() {
    return this._lanExtension.internalValue;
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
      cellular: extendercontrollerExtenderprofileCellularToTerraform(this._cellular.internalValue),
      lan_extension: extendercontrollerExtenderprofileLanExtensionToTerraform(this._lanExtension.internalValue),
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
        value: extendercontrollerExtenderprofileCellularToHclTerraform(this._cellular.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExtendercontrollerExtenderprofileCellularList",
      },
      lan_extension: {
        value: extendercontrollerExtenderprofileLanExtensionToHclTerraform(this._lanExtension.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExtendercontrollerExtenderprofileLanExtensionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
