// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExtendercontrollerExtenderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#_dataplan ExtendercontrollerExtender#_dataplan}
  */
  readonly dataplan?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#_template ExtendercontrollerExtender#_template}
  */
  readonly template?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#aaa_shared_secret ExtendercontrollerExtender#aaa_shared_secret}
  */
  readonly aaaSharedSecret?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#access_point_name ExtendercontrollerExtender#access_point_name}
  */
  readonly accessPointName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#admin ExtendercontrollerExtender#admin}
  */
  readonly admin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#allowaccess ExtendercontrollerExtender#allowaccess}
  */
  readonly allowaccess?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#at_dial_script ExtendercontrollerExtender#at_dial_script}
  */
  readonly atDialScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#authorized ExtendercontrollerExtender#authorized}
  */
  readonly authorized?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#bandwidth_limit ExtendercontrollerExtender#bandwidth_limit}
  */
  readonly bandwidthLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#billing_start_day ExtendercontrollerExtender#billing_start_day}
  */
  readonly billingStartDay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#cdma_aaa_spi ExtendercontrollerExtender#cdma_aaa_spi}
  */
  readonly cdmaAaaSpi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#cdma_ha_spi ExtendercontrollerExtender#cdma_ha_spi}
  */
  readonly cdmaHaSpi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#cdma_nai ExtendercontrollerExtender#cdma_nai}
  */
  readonly cdmaNai?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#conn_status ExtendercontrollerExtender#conn_status}
  */
  readonly connStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#description ExtendercontrollerExtender#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#device_id ExtendercontrollerExtender#device_id}
  */
  readonly deviceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#device_name ExtendercontrollerExtender#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#device_vdom ExtendercontrollerExtender#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#dial_mode ExtendercontrollerExtender#dial_mode}
  */
  readonly dialMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#dial_status ExtendercontrollerExtender#dial_status}
  */
  readonly dialStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#enforce_bandwidth ExtendercontrollerExtender#enforce_bandwidth}
  */
  readonly enforceBandwidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#ext_name ExtendercontrollerExtender#ext_name}
  */
  readonly extName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#extension_type ExtendercontrollerExtender#extension_type}
  */
  readonly extensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#fosid ExtendercontrollerExtender#fosid}
  */
  readonly fosid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#ha_shared_secret ExtendercontrollerExtender#ha_shared_secret}
  */
  readonly haSharedSecret?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#id ExtendercontrollerExtender#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#ifname ExtendercontrollerExtender#ifname}
  */
  readonly ifname?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#initiated_update ExtendercontrollerExtender#initiated_update}
  */
  readonly initiatedUpdate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#login_password ExtendercontrollerExtender#login_password}
  */
  readonly loginPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#login_password_change ExtendercontrollerExtender#login_password_change}
  */
  readonly loginPasswordChange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#mode ExtendercontrollerExtender#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#modem_passwd ExtendercontrollerExtender#modem_passwd}
  */
  readonly modemPasswd?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#modem_type ExtendercontrollerExtender#modem_type}
  */
  readonly modemType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#multi_mode ExtendercontrollerExtender#multi_mode}
  */
  readonly multiMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#name ExtendercontrollerExtender#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#override_allowaccess ExtendercontrollerExtender#override_allowaccess}
  */
  readonly overrideAllowaccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#override_enforce_bandwidth ExtendercontrollerExtender#override_enforce_bandwidth}
  */
  readonly overrideEnforceBandwidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#override_login_password_change ExtendercontrollerExtender#override_login_password_change}
  */
  readonly overrideLoginPasswordChange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#ppp_auth_protocol ExtendercontrollerExtender#ppp_auth_protocol}
  */
  readonly pppAuthProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#ppp_echo_request ExtendercontrollerExtender#ppp_echo_request}
  */
  readonly pppEchoRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#ppp_password ExtendercontrollerExtender#ppp_password}
  */
  readonly pppPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#ppp_username ExtendercontrollerExtender#ppp_username}
  */
  readonly pppUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#primary_ha ExtendercontrollerExtender#primary_ha}
  */
  readonly primaryHa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#profile ExtendercontrollerExtender#profile}
  */
  readonly profile?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#quota_limit_mb ExtendercontrollerExtender#quota_limit_mb}
  */
  readonly quotaLimitMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#redial ExtendercontrollerExtender#redial}
  */
  readonly redial?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#redundant_intf ExtendercontrollerExtender#redundant_intf}
  */
  readonly redundantIntf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#roaming ExtendercontrollerExtender#roaming}
  */
  readonly roaming?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#role ExtendercontrollerExtender#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#secondary_ha ExtendercontrollerExtender#secondary_ha}
  */
  readonly secondaryHa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#sim_pin ExtendercontrollerExtender#sim_pin}
  */
  readonly simPin?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#vdom ExtendercontrollerExtender#vdom}
  */
  readonly vdom?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#wimax_auth_protocol ExtendercontrollerExtender#wimax_auth_protocol}
  */
  readonly wimaxAuthProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#wimax_carrier ExtendercontrollerExtender#wimax_carrier}
  */
  readonly wimaxCarrier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#wimax_realm ExtendercontrollerExtender#wimax_realm}
  */
  readonly wimaxRealm?: string;
  /**
  * controller_report block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#controller_report ExtendercontrollerExtender#controller_report}
  */
  readonly controllerReport?: ExtendercontrollerExtenderControllerReport;
  /**
  * modem1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#modem1 ExtendercontrollerExtender#modem1}
  */
  readonly modem1?: ExtendercontrollerExtenderModem1;
  /**
  * modem2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#modem2 ExtendercontrollerExtender#modem2}
  */
  readonly modem2?: ExtendercontrollerExtenderModem2;
  /**
  * wan_extension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#wan_extension ExtendercontrollerExtender#wan_extension}
  */
  readonly wanExtension?: ExtendercontrollerExtenderWanExtension;
}
export interface ExtendercontrollerExtenderControllerReport {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#interval ExtendercontrollerExtender#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#signal_threshold ExtendercontrollerExtender#signal_threshold}
  */
  readonly signalThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#status ExtendercontrollerExtender#status}
  */
  readonly status?: string;
}

export function extendercontrollerExtenderControllerReportToTerraform(struct?: ExtendercontrollerExtenderControllerReportOutputReference | ExtendercontrollerExtenderControllerReport): any {
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


export function extendercontrollerExtenderControllerReportToHclTerraform(struct?: ExtendercontrollerExtenderControllerReportOutputReference | ExtendercontrollerExtenderControllerReport): any {
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

export class ExtendercontrollerExtenderControllerReportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExtendercontrollerExtenderControllerReport | undefined {
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

  public set internalValue(value: ExtendercontrollerExtenderControllerReport | undefined) {
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
export interface ExtendercontrollerExtenderModem1AutoSwitch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#dataplan ExtendercontrollerExtender#dataplan}
  */
  readonly dataplan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#disconnect ExtendercontrollerExtender#disconnect}
  */
  readonly disconnect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#disconnect_period ExtendercontrollerExtender#disconnect_period}
  */
  readonly disconnectPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#disconnect_threshold ExtendercontrollerExtender#disconnect_threshold}
  */
  readonly disconnectThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#signal ExtendercontrollerExtender#signal}
  */
  readonly signal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#status ExtendercontrollerExtender#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#switch_back ExtendercontrollerExtender#switch_back}
  */
  readonly switchBack?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#switch_back_time ExtendercontrollerExtender#switch_back_time}
  */
  readonly switchBackTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#switch_back_timer ExtendercontrollerExtender#switch_back_timer}
  */
  readonly switchBackTimer?: number;
}

export function extendercontrollerExtenderModem1AutoSwitchToTerraform(struct?: ExtendercontrollerExtenderModem1AutoSwitchOutputReference | ExtendercontrollerExtenderModem1AutoSwitch): any {
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


export function extendercontrollerExtenderModem1AutoSwitchToHclTerraform(struct?: ExtendercontrollerExtenderModem1AutoSwitchOutputReference | ExtendercontrollerExtenderModem1AutoSwitch): any {
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

export class ExtendercontrollerExtenderModem1AutoSwitchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExtendercontrollerExtenderModem1AutoSwitch | undefined {
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

  public set internalValue(value: ExtendercontrollerExtenderModem1AutoSwitch | undefined) {
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
export interface ExtendercontrollerExtenderModem1 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#_sim_profile ExtendercontrollerExtender#_sim_profile}
  */
  readonly simProfile?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#conn_status ExtendercontrollerExtender#conn_status}
  */
  readonly connStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#default_sim ExtendercontrollerExtender#default_sim}
  */
  readonly defaultSim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#gps ExtendercontrollerExtender#gps}
  */
  readonly gps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#ifname ExtendercontrollerExtender#ifname}
  */
  readonly ifname?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#modem_id ExtendercontrollerExtender#modem_id}
  */
  readonly modemId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#preferred_carrier ExtendercontrollerExtender#preferred_carrier}
  */
  readonly preferredCarrier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#redundant_intf ExtendercontrollerExtender#redundant_intf}
  */
  readonly redundantIntf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#redundant_mode ExtendercontrollerExtender#redundant_mode}
  */
  readonly redundantMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#sim1_pin ExtendercontrollerExtender#sim1_pin}
  */
  readonly sim1Pin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#sim1_pin_code ExtendercontrollerExtender#sim1_pin_code}
  */
  readonly sim1PinCode?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#sim2_pin ExtendercontrollerExtender#sim2_pin}
  */
  readonly sim2Pin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#sim2_pin_code ExtendercontrollerExtender#sim2_pin_code}
  */
  readonly sim2PinCode?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#status ExtendercontrollerExtender#status}
  */
  readonly status?: string;
  /**
  * auto_switch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#auto_switch ExtendercontrollerExtender#auto_switch}
  */
  readonly autoSwitch?: ExtendercontrollerExtenderModem1AutoSwitch;
}

export function extendercontrollerExtenderModem1ToTerraform(struct?: ExtendercontrollerExtenderModem1OutputReference | ExtendercontrollerExtenderModem1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    _sim_profile: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.simProfile),
    conn_status: cdktf.numberToTerraform(struct!.connStatus),
    default_sim: cdktf.stringToTerraform(struct!.defaultSim),
    gps: cdktf.stringToTerraform(struct!.gps),
    ifname: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ifname),
    modem_id: cdktf.numberToTerraform(struct!.modemId),
    preferred_carrier: cdktf.stringToTerraform(struct!.preferredCarrier),
    redundant_intf: cdktf.stringToTerraform(struct!.redundantIntf),
    redundant_mode: cdktf.stringToTerraform(struct!.redundantMode),
    sim1_pin: cdktf.stringToTerraform(struct!.sim1Pin),
    sim1_pin_code: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sim1PinCode),
    sim2_pin: cdktf.stringToTerraform(struct!.sim2Pin),
    sim2_pin_code: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sim2PinCode),
    status: cdktf.stringToTerraform(struct!.status),
    auto_switch: extendercontrollerExtenderModem1AutoSwitchToTerraform(struct!.autoSwitch),
  }
}


export function extendercontrollerExtenderModem1ToHclTerraform(struct?: ExtendercontrollerExtenderModem1OutputReference | ExtendercontrollerExtenderModem1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    _sim_profile: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.simProfile),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ifname),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    modem_id: {
      value: cdktf.numberToHclTerraform(struct!.modemId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_switch: {
      value: extendercontrollerExtenderModem1AutoSwitchToHclTerraform(struct!.autoSwitch),
      isBlock: true,
      type: "list",
      storageClassType: "ExtendercontrollerExtenderModem1AutoSwitchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExtendercontrollerExtenderModem1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExtendercontrollerExtenderModem1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._simProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.simProfile = this._simProfile;
    }
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
    if (this._modemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.modemId = this._modemId;
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
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._autoSwitch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoSwitch = this._autoSwitch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExtendercontrollerExtenderModem1 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._simProfile = undefined;
      this._connStatus = undefined;
      this._defaultSim = undefined;
      this._gps = undefined;
      this._ifname = undefined;
      this._modemId = undefined;
      this._preferredCarrier = undefined;
      this._redundantIntf = undefined;
      this._redundantMode = undefined;
      this._sim1Pin = undefined;
      this._sim1PinCode = undefined;
      this._sim2Pin = undefined;
      this._sim2PinCode = undefined;
      this._status = undefined;
      this._autoSwitch.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._simProfile = value.simProfile;
      this._connStatus = value.connStatus;
      this._defaultSim = value.defaultSim;
      this._gps = value.gps;
      this._ifname = value.ifname;
      this._modemId = value.modemId;
      this._preferredCarrier = value.preferredCarrier;
      this._redundantIntf = value.redundantIntf;
      this._redundantMode = value.redundantMode;
      this._sim1Pin = value.sim1Pin;
      this._sim1PinCode = value.sim1PinCode;
      this._sim2Pin = value.sim2Pin;
      this._sim2PinCode = value.sim2PinCode;
      this._status = value.status;
      this._autoSwitch.internalValue = value.autoSwitch;
    }
  }

  // _sim_profile - computed: true, optional: true, required: false
  private _simProfile?: string[]; 
  public get simProfile() {
    return cdktf.Fn.tolist(this.getListAttribute('_sim_profile'));
  }
  public set simProfile(value: string[]) {
    this._simProfile = value;
  }
  public resetSimProfile() {
    this._simProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simProfileInput() {
    return this._simProfile;
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

  // ifname - computed: true, optional: true, required: false
  private _ifname?: string[]; 
  public get ifname() {
    return cdktf.Fn.tolist(this.getListAttribute('ifname'));
  }
  public set ifname(value: string[]) {
    this._ifname = value;
  }
  public resetIfname() {
    this._ifname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifnameInput() {
    return this._ifname;
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

  // auto_switch - computed: false, optional: true, required: false
  private _autoSwitch = new ExtendercontrollerExtenderModem1AutoSwitchOutputReference(this, "auto_switch");
  public get autoSwitch() {
    return this._autoSwitch;
  }
  public putAutoSwitch(value: ExtendercontrollerExtenderModem1AutoSwitch) {
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
export interface ExtendercontrollerExtenderModem2AutoSwitch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#dataplan ExtendercontrollerExtender#dataplan}
  */
  readonly dataplan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#disconnect ExtendercontrollerExtender#disconnect}
  */
  readonly disconnect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#disconnect_period ExtendercontrollerExtender#disconnect_period}
  */
  readonly disconnectPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#disconnect_threshold ExtendercontrollerExtender#disconnect_threshold}
  */
  readonly disconnectThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#signal ExtendercontrollerExtender#signal}
  */
  readonly signal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#status ExtendercontrollerExtender#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#switch_back ExtendercontrollerExtender#switch_back}
  */
  readonly switchBack?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#switch_back_time ExtendercontrollerExtender#switch_back_time}
  */
  readonly switchBackTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#switch_back_timer ExtendercontrollerExtender#switch_back_timer}
  */
  readonly switchBackTimer?: number;
}

export function extendercontrollerExtenderModem2AutoSwitchToTerraform(struct?: ExtendercontrollerExtenderModem2AutoSwitchOutputReference | ExtendercontrollerExtenderModem2AutoSwitch): any {
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


export function extendercontrollerExtenderModem2AutoSwitchToHclTerraform(struct?: ExtendercontrollerExtenderModem2AutoSwitchOutputReference | ExtendercontrollerExtenderModem2AutoSwitch): any {
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

export class ExtendercontrollerExtenderModem2AutoSwitchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExtendercontrollerExtenderModem2AutoSwitch | undefined {
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

  public set internalValue(value: ExtendercontrollerExtenderModem2AutoSwitch | undefined) {
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
export interface ExtendercontrollerExtenderModem2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#_sim_profile ExtendercontrollerExtender#_sim_profile}
  */
  readonly simProfile?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#conn_status ExtendercontrollerExtender#conn_status}
  */
  readonly connStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#default_sim ExtendercontrollerExtender#default_sim}
  */
  readonly defaultSim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#gps ExtendercontrollerExtender#gps}
  */
  readonly gps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#ifname ExtendercontrollerExtender#ifname}
  */
  readonly ifname?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#modem_id ExtendercontrollerExtender#modem_id}
  */
  readonly modemId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#preferred_carrier ExtendercontrollerExtender#preferred_carrier}
  */
  readonly preferredCarrier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#redundant_intf ExtendercontrollerExtender#redundant_intf}
  */
  readonly redundantIntf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#redundant_mode ExtendercontrollerExtender#redundant_mode}
  */
  readonly redundantMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#sim1_pin ExtendercontrollerExtender#sim1_pin}
  */
  readonly sim1Pin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#sim1_pin_code ExtendercontrollerExtender#sim1_pin_code}
  */
  readonly sim1PinCode?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#sim2_pin ExtendercontrollerExtender#sim2_pin}
  */
  readonly sim2Pin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#sim2_pin_code ExtendercontrollerExtender#sim2_pin_code}
  */
  readonly sim2PinCode?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#status ExtendercontrollerExtender#status}
  */
  readonly status?: string;
  /**
  * auto_switch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#auto_switch ExtendercontrollerExtender#auto_switch}
  */
  readonly autoSwitch?: ExtendercontrollerExtenderModem2AutoSwitch;
}

export function extendercontrollerExtenderModem2ToTerraform(struct?: ExtendercontrollerExtenderModem2OutputReference | ExtendercontrollerExtenderModem2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    _sim_profile: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.simProfile),
    conn_status: cdktf.numberToTerraform(struct!.connStatus),
    default_sim: cdktf.stringToTerraform(struct!.defaultSim),
    gps: cdktf.stringToTerraform(struct!.gps),
    ifname: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ifname),
    modem_id: cdktf.numberToTerraform(struct!.modemId),
    preferred_carrier: cdktf.stringToTerraform(struct!.preferredCarrier),
    redundant_intf: cdktf.stringToTerraform(struct!.redundantIntf),
    redundant_mode: cdktf.stringToTerraform(struct!.redundantMode),
    sim1_pin: cdktf.stringToTerraform(struct!.sim1Pin),
    sim1_pin_code: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sim1PinCode),
    sim2_pin: cdktf.stringToTerraform(struct!.sim2Pin),
    sim2_pin_code: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sim2PinCode),
    status: cdktf.stringToTerraform(struct!.status),
    auto_switch: extendercontrollerExtenderModem2AutoSwitchToTerraform(struct!.autoSwitch),
  }
}


export function extendercontrollerExtenderModem2ToHclTerraform(struct?: ExtendercontrollerExtenderModem2OutputReference | ExtendercontrollerExtenderModem2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    _sim_profile: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.simProfile),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ifname),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    modem_id: {
      value: cdktf.numberToHclTerraform(struct!.modemId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_switch: {
      value: extendercontrollerExtenderModem2AutoSwitchToHclTerraform(struct!.autoSwitch),
      isBlock: true,
      type: "list",
      storageClassType: "ExtendercontrollerExtenderModem2AutoSwitchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExtendercontrollerExtenderModem2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExtendercontrollerExtenderModem2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._simProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.simProfile = this._simProfile;
    }
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
    if (this._modemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.modemId = this._modemId;
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
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._autoSwitch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoSwitch = this._autoSwitch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExtendercontrollerExtenderModem2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._simProfile = undefined;
      this._connStatus = undefined;
      this._defaultSim = undefined;
      this._gps = undefined;
      this._ifname = undefined;
      this._modemId = undefined;
      this._preferredCarrier = undefined;
      this._redundantIntf = undefined;
      this._redundantMode = undefined;
      this._sim1Pin = undefined;
      this._sim1PinCode = undefined;
      this._sim2Pin = undefined;
      this._sim2PinCode = undefined;
      this._status = undefined;
      this._autoSwitch.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._simProfile = value.simProfile;
      this._connStatus = value.connStatus;
      this._defaultSim = value.defaultSim;
      this._gps = value.gps;
      this._ifname = value.ifname;
      this._modemId = value.modemId;
      this._preferredCarrier = value.preferredCarrier;
      this._redundantIntf = value.redundantIntf;
      this._redundantMode = value.redundantMode;
      this._sim1Pin = value.sim1Pin;
      this._sim1PinCode = value.sim1PinCode;
      this._sim2Pin = value.sim2Pin;
      this._sim2PinCode = value.sim2PinCode;
      this._status = value.status;
      this._autoSwitch.internalValue = value.autoSwitch;
    }
  }

  // _sim_profile - computed: true, optional: true, required: false
  private _simProfile?: string[]; 
  public get simProfile() {
    return cdktf.Fn.tolist(this.getListAttribute('_sim_profile'));
  }
  public set simProfile(value: string[]) {
    this._simProfile = value;
  }
  public resetSimProfile() {
    this._simProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simProfileInput() {
    return this._simProfile;
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

  // ifname - computed: true, optional: true, required: false
  private _ifname?: string[]; 
  public get ifname() {
    return cdktf.Fn.tolist(this.getListAttribute('ifname'));
  }
  public set ifname(value: string[]) {
    this._ifname = value;
  }
  public resetIfname() {
    this._ifname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifnameInput() {
    return this._ifname;
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

  // auto_switch - computed: false, optional: true, required: false
  private _autoSwitch = new ExtendercontrollerExtenderModem2AutoSwitchOutputReference(this, "auto_switch");
  public get autoSwitch() {
    return this._autoSwitch;
  }
  public putAutoSwitch(value: ExtendercontrollerExtenderModem2AutoSwitch) {
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
export interface ExtendercontrollerExtenderWanExtension {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#modem1_extension ExtendercontrollerExtender#modem1_extension}
  */
  readonly modem1Extension?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#modem2_extension ExtendercontrollerExtender#modem2_extension}
  */
  readonly modem2Extension?: string[];
}

export function extendercontrollerExtenderWanExtensionToTerraform(struct?: ExtendercontrollerExtenderWanExtensionOutputReference | ExtendercontrollerExtenderWanExtension): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    modem1_extension: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.modem1Extension),
    modem2_extension: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.modem2Extension),
  }
}


export function extendercontrollerExtenderWanExtensionToHclTerraform(struct?: ExtendercontrollerExtenderWanExtensionOutputReference | ExtendercontrollerExtenderWanExtension): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    modem1_extension: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.modem1Extension),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    modem2_extension: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.modem2Extension),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExtendercontrollerExtenderWanExtensionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExtendercontrollerExtenderWanExtension | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modem1Extension !== undefined) {
      hasAnyValues = true;
      internalValueResult.modem1Extension = this._modem1Extension;
    }
    if (this._modem2Extension !== undefined) {
      hasAnyValues = true;
      internalValueResult.modem2Extension = this._modem2Extension;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExtendercontrollerExtenderWanExtension | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._modem1Extension = undefined;
      this._modem2Extension = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._modem1Extension = value.modem1Extension;
      this._modem2Extension = value.modem2Extension;
    }
  }

  // modem1_extension - computed: true, optional: true, required: false
  private _modem1Extension?: string[]; 
  public get modem1Extension() {
    return cdktf.Fn.tolist(this.getListAttribute('modem1_extension'));
  }
  public set modem1Extension(value: string[]) {
    this._modem1Extension = value;
  }
  public resetModem1Extension() {
    this._modem1Extension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modem1ExtensionInput() {
    return this._modem1Extension;
  }

  // modem2_extension - computed: true, optional: true, required: false
  private _modem2Extension?: string[]; 
  public get modem2Extension() {
    return cdktf.Fn.tolist(this.getListAttribute('modem2_extension'));
  }
  public set modem2Extension(value: string[]) {
    this._modem2Extension = value;
  }
  public resetModem2Extension() {
    this._modem2Extension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modem2ExtensionInput() {
    return this._modem2Extension;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender fmgdevice_extendercontroller_extender}
*/
export class ExtendercontrollerExtender extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_extendercontroller_extender";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExtendercontrollerExtender resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExtendercontrollerExtender to import
  * @param importFromId The id of the existing ExtendercontrollerExtender that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExtendercontrollerExtender to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_extendercontroller_extender", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/extendercontroller_extender fmgdevice_extendercontroller_extender} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExtendercontrollerExtenderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ExtendercontrollerExtenderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_extendercontroller_extender',
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
    this._dataplan = config.dataplan;
    this._template = config.template;
    this._aaaSharedSecret = config.aaaSharedSecret;
    this._accessPointName = config.accessPointName;
    this._admin = config.admin;
    this._allowaccess = config.allowaccess;
    this._atDialScript = config.atDialScript;
    this._authorized = config.authorized;
    this._bandwidthLimit = config.bandwidthLimit;
    this._billingStartDay = config.billingStartDay;
    this._cdmaAaaSpi = config.cdmaAaaSpi;
    this._cdmaHaSpi = config.cdmaHaSpi;
    this._cdmaNai = config.cdmaNai;
    this._connStatus = config.connStatus;
    this._description = config.description;
    this._deviceId = config.deviceId;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._dialMode = config.dialMode;
    this._dialStatus = config.dialStatus;
    this._enforceBandwidth = config.enforceBandwidth;
    this._extName = config.extName;
    this._extensionType = config.extensionType;
    this._fosid = config.fosid;
    this._haSharedSecret = config.haSharedSecret;
    this._id = config.id;
    this._ifname = config.ifname;
    this._initiatedUpdate = config.initiatedUpdate;
    this._loginPassword = config.loginPassword;
    this._loginPasswordChange = config.loginPasswordChange;
    this._mode = config.mode;
    this._modemPasswd = config.modemPasswd;
    this._modemType = config.modemType;
    this._multiMode = config.multiMode;
    this._name = config.name;
    this._overrideAllowaccess = config.overrideAllowaccess;
    this._overrideEnforceBandwidth = config.overrideEnforceBandwidth;
    this._overrideLoginPasswordChange = config.overrideLoginPasswordChange;
    this._pppAuthProtocol = config.pppAuthProtocol;
    this._pppEchoRequest = config.pppEchoRequest;
    this._pppPassword = config.pppPassword;
    this._pppUsername = config.pppUsername;
    this._primaryHa = config.primaryHa;
    this._profile = config.profile;
    this._quotaLimitMb = config.quotaLimitMb;
    this._redial = config.redial;
    this._redundantIntf = config.redundantIntf;
    this._roaming = config.roaming;
    this._role = config.role;
    this._secondaryHa = config.secondaryHa;
    this._simPin = config.simPin;
    this._vdom = config.vdom;
    this._wimaxAuthProtocol = config.wimaxAuthProtocol;
    this._wimaxCarrier = config.wimaxCarrier;
    this._wimaxRealm = config.wimaxRealm;
    this._controllerReport.internalValue = config.controllerReport;
    this._modem1.internalValue = config.modem1;
    this._modem2.internalValue = config.modem2;
    this._wanExtension.internalValue = config.wanExtension;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // _dataplan - computed: true, optional: true, required: false
  private _dataplan?: string[]; 
  public get dataplan() {
    return cdktf.Fn.tolist(this.getListAttribute('_dataplan'));
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

  // _template - computed: true, optional: true, required: false
  private _template?: string[]; 
  public get template() {
    return cdktf.Fn.tolist(this.getListAttribute('_template'));
  }
  public set template(value: string[]) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // aaa_shared_secret - computed: true, optional: true, required: false
  private _aaaSharedSecret?: string[]; 
  public get aaaSharedSecret() {
    return cdktf.Fn.tolist(this.getListAttribute('aaa_shared_secret'));
  }
  public set aaaSharedSecret(value: string[]) {
    this._aaaSharedSecret = value;
  }
  public resetAaaSharedSecret() {
    this._aaaSharedSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaSharedSecretInput() {
    return this._aaaSharedSecret;
  }

  // access_point_name - computed: false, optional: true, required: false
  private _accessPointName?: string; 
  public get accessPointName() {
    return this.getStringAttribute('access_point_name');
  }
  public set accessPointName(value: string) {
    this._accessPointName = value;
  }
  public resetAccessPointName() {
    this._accessPointName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPointNameInput() {
    return this._accessPointName;
  }

  // admin - computed: false, optional: true, required: false
  private _admin?: string; 
  public get admin() {
    return this.getStringAttribute('admin');
  }
  public set admin(value: string) {
    this._admin = value;
  }
  public resetAdmin() {
    this._admin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminInput() {
    return this._admin;
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

  // at_dial_script - computed: false, optional: true, required: false
  private _atDialScript?: string; 
  public get atDialScript() {
    return this.getStringAttribute('at_dial_script');
  }
  public set atDialScript(value: string) {
    this._atDialScript = value;
  }
  public resetAtDialScript() {
    this._atDialScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atDialScriptInput() {
    return this._atDialScript;
  }

  // authorized - computed: true, optional: true, required: false
  private _authorized?: string; 
  public get authorized() {
    return this.getStringAttribute('authorized');
  }
  public set authorized(value: string) {
    this._authorized = value;
  }
  public resetAuthorized() {
    this._authorized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedInput() {
    return this._authorized;
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

  // billing_start_day - computed: false, optional: true, required: false
  private _billingStartDay?: number; 
  public get billingStartDay() {
    return this.getNumberAttribute('billing_start_day');
  }
  public set billingStartDay(value: number) {
    this._billingStartDay = value;
  }
  public resetBillingStartDay() {
    this._billingStartDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingStartDayInput() {
    return this._billingStartDay;
  }

  // cdma_aaa_spi - computed: false, optional: true, required: false
  private _cdmaAaaSpi?: string; 
  public get cdmaAaaSpi() {
    return this.getStringAttribute('cdma_aaa_spi');
  }
  public set cdmaAaaSpi(value: string) {
    this._cdmaAaaSpi = value;
  }
  public resetCdmaAaaSpi() {
    this._cdmaAaaSpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdmaAaaSpiInput() {
    return this._cdmaAaaSpi;
  }

  // cdma_ha_spi - computed: false, optional: true, required: false
  private _cdmaHaSpi?: string; 
  public get cdmaHaSpi() {
    return this.getStringAttribute('cdma_ha_spi');
  }
  public set cdmaHaSpi(value: string) {
    this._cdmaHaSpi = value;
  }
  public resetCdmaHaSpi() {
    this._cdmaHaSpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdmaHaSpiInput() {
    return this._cdmaHaSpi;
  }

  // cdma_nai - computed: false, optional: true, required: false
  private _cdmaNai?: string; 
  public get cdmaNai() {
    return this.getStringAttribute('cdma_nai');
  }
  public set cdmaNai(value: string) {
    this._cdmaNai = value;
  }
  public resetCdmaNai() {
    this._cdmaNai = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdmaNaiInput() {
    return this._cdmaNai;
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

  // device_id - computed: true, optional: true, required: false
  private _deviceId?: number; 
  public get deviceId() {
    return this.getNumberAttribute('device_id');
  }
  public set deviceId(value: number) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

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

  // dial_mode - computed: false, optional: true, required: false
  private _dialMode?: string; 
  public get dialMode() {
    return this.getStringAttribute('dial_mode');
  }
  public set dialMode(value: string) {
    this._dialMode = value;
  }
  public resetDialMode() {
    this._dialMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialModeInput() {
    return this._dialMode;
  }

  // dial_status - computed: false, optional: true, required: false
  private _dialStatus?: number; 
  public get dialStatus() {
    return this.getNumberAttribute('dial_status');
  }
  public set dialStatus(value: number) {
    this._dialStatus = value;
  }
  public resetDialStatus() {
    this._dialStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialStatusInput() {
    return this._dialStatus;
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

  // extension_type - computed: false, optional: true, required: false
  private _extensionType?: string; 
  public get extensionType() {
    return this.getStringAttribute('extension_type');
  }
  public set extensionType(value: string) {
    this._extensionType = value;
  }
  public resetExtensionType() {
    this._extensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionTypeInput() {
    return this._extensionType;
  }

  // fosid - computed: false, optional: true, required: false
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

  // ha_shared_secret - computed: true, optional: true, required: false
  private _haSharedSecret?: string[]; 
  public get haSharedSecret() {
    return cdktf.Fn.tolist(this.getListAttribute('ha_shared_secret'));
  }
  public set haSharedSecret(value: string[]) {
    this._haSharedSecret = value;
  }
  public resetHaSharedSecret() {
    this._haSharedSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haSharedSecretInput() {
    return this._haSharedSecret;
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

  // ifname - computed: true, optional: true, required: false
  private _ifname?: string[]; 
  public get ifname() {
    return cdktf.Fn.tolist(this.getListAttribute('ifname'));
  }
  public set ifname(value: string[]) {
    this._ifname = value;
  }
  public resetIfname() {
    this._ifname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifnameInput() {
    return this._ifname;
  }

  // initiated_update - computed: false, optional: true, required: false
  private _initiatedUpdate?: string; 
  public get initiatedUpdate() {
    return this.getStringAttribute('initiated_update');
  }
  public set initiatedUpdate(value: string) {
    this._initiatedUpdate = value;
  }
  public resetInitiatedUpdate() {
    this._initiatedUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiatedUpdateInput() {
    return this._initiatedUpdate;
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

  // mode - computed: false, optional: true, required: false
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

  // modem_passwd - computed: true, optional: true, required: false
  private _modemPasswd?: string[]; 
  public get modemPasswd() {
    return cdktf.Fn.tolist(this.getListAttribute('modem_passwd'));
  }
  public set modemPasswd(value: string[]) {
    this._modemPasswd = value;
  }
  public resetModemPasswd() {
    this._modemPasswd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modemPasswdInput() {
    return this._modemPasswd;
  }

  // modem_type - computed: false, optional: true, required: false
  private _modemType?: string; 
  public get modemType() {
    return this.getStringAttribute('modem_type');
  }
  public set modemType(value: string) {
    this._modemType = value;
  }
  public resetModemType() {
    this._modemType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modemTypeInput() {
    return this._modemType;
  }

  // multi_mode - computed: false, optional: true, required: false
  private _multiMode?: string; 
  public get multiMode() {
    return this.getStringAttribute('multi_mode');
  }
  public set multiMode(value: string) {
    this._multiMode = value;
  }
  public resetMultiMode() {
    this._multiMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiModeInput() {
    return this._multiMode;
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

  // override_allowaccess - computed: true, optional: true, required: false
  private _overrideAllowaccess?: string; 
  public get overrideAllowaccess() {
    return this.getStringAttribute('override_allowaccess');
  }
  public set overrideAllowaccess(value: string) {
    this._overrideAllowaccess = value;
  }
  public resetOverrideAllowaccess() {
    this._overrideAllowaccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideAllowaccessInput() {
    return this._overrideAllowaccess;
  }

  // override_enforce_bandwidth - computed: true, optional: true, required: false
  private _overrideEnforceBandwidth?: string; 
  public get overrideEnforceBandwidth() {
    return this.getStringAttribute('override_enforce_bandwidth');
  }
  public set overrideEnforceBandwidth(value: string) {
    this._overrideEnforceBandwidth = value;
  }
  public resetOverrideEnforceBandwidth() {
    this._overrideEnforceBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideEnforceBandwidthInput() {
    return this._overrideEnforceBandwidth;
  }

  // override_login_password_change - computed: true, optional: true, required: false
  private _overrideLoginPasswordChange?: string; 
  public get overrideLoginPasswordChange() {
    return this.getStringAttribute('override_login_password_change');
  }
  public set overrideLoginPasswordChange(value: string) {
    this._overrideLoginPasswordChange = value;
  }
  public resetOverrideLoginPasswordChange() {
    this._overrideLoginPasswordChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideLoginPasswordChangeInput() {
    return this._overrideLoginPasswordChange;
  }

  // ppp_auth_protocol - computed: false, optional: true, required: false
  private _pppAuthProtocol?: string; 
  public get pppAuthProtocol() {
    return this.getStringAttribute('ppp_auth_protocol');
  }
  public set pppAuthProtocol(value: string) {
    this._pppAuthProtocol = value;
  }
  public resetPppAuthProtocol() {
    this._pppAuthProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pppAuthProtocolInput() {
    return this._pppAuthProtocol;
  }

  // ppp_echo_request - computed: false, optional: true, required: false
  private _pppEchoRequest?: string; 
  public get pppEchoRequest() {
    return this.getStringAttribute('ppp_echo_request');
  }
  public set pppEchoRequest(value: string) {
    this._pppEchoRequest = value;
  }
  public resetPppEchoRequest() {
    this._pppEchoRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pppEchoRequestInput() {
    return this._pppEchoRequest;
  }

  // ppp_password - computed: true, optional: true, required: false
  private _pppPassword?: string[]; 
  public get pppPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('ppp_password'));
  }
  public set pppPassword(value: string[]) {
    this._pppPassword = value;
  }
  public resetPppPassword() {
    this._pppPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pppPasswordInput() {
    return this._pppPassword;
  }

  // ppp_username - computed: false, optional: true, required: false
  private _pppUsername?: string; 
  public get pppUsername() {
    return this.getStringAttribute('ppp_username');
  }
  public set pppUsername(value: string) {
    this._pppUsername = value;
  }
  public resetPppUsername() {
    this._pppUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pppUsernameInput() {
    return this._pppUsername;
  }

  // primary_ha - computed: false, optional: true, required: false
  private _primaryHa?: string; 
  public get primaryHa() {
    return this.getStringAttribute('primary_ha');
  }
  public set primaryHa(value: string) {
    this._primaryHa = value;
  }
  public resetPrimaryHa() {
    this._primaryHa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryHaInput() {
    return this._primaryHa;
  }

  // profile - computed: true, optional: true, required: false
  private _profile?: string[]; 
  public get profile() {
    return cdktf.Fn.tolist(this.getListAttribute('profile'));
  }
  public set profile(value: string[]) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // quota_limit_mb - computed: false, optional: true, required: false
  private _quotaLimitMb?: number; 
  public get quotaLimitMb() {
    return this.getNumberAttribute('quota_limit_mb');
  }
  public set quotaLimitMb(value: number) {
    this._quotaLimitMb = value;
  }
  public resetQuotaLimitMb() {
    this._quotaLimitMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaLimitMbInput() {
    return this._quotaLimitMb;
  }

  // redial - computed: false, optional: true, required: false
  private _redial?: string; 
  public get redial() {
    return this.getStringAttribute('redial');
  }
  public set redial(value: string) {
    this._redial = value;
  }
  public resetRedial() {
    this._redial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redialInput() {
    return this._redial;
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

  // roaming - computed: false, optional: true, required: false
  private _roaming?: string; 
  public get roaming() {
    return this.getStringAttribute('roaming');
  }
  public set roaming(value: string) {
    this._roaming = value;
  }
  public resetRoaming() {
    this._roaming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roamingInput() {
    return this._roaming;
  }

  // role - computed: false, optional: true, required: false
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

  // secondary_ha - computed: false, optional: true, required: false
  private _secondaryHa?: string; 
  public get secondaryHa() {
    return this.getStringAttribute('secondary_ha');
  }
  public set secondaryHa(value: string) {
    this._secondaryHa = value;
  }
  public resetSecondaryHa() {
    this._secondaryHa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryHaInput() {
    return this._secondaryHa;
  }

  // sim_pin - computed: true, optional: true, required: false
  private _simPin?: string[]; 
  public get simPin() {
    return cdktf.Fn.tolist(this.getListAttribute('sim_pin'));
  }
  public set simPin(value: string[]) {
    this._simPin = value;
  }
  public resetSimPin() {
    this._simPin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simPinInput() {
    return this._simPin;
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

  // wimax_auth_protocol - computed: false, optional: true, required: false
  private _wimaxAuthProtocol?: string; 
  public get wimaxAuthProtocol() {
    return this.getStringAttribute('wimax_auth_protocol');
  }
  public set wimaxAuthProtocol(value: string) {
    this._wimaxAuthProtocol = value;
  }
  public resetWimaxAuthProtocol() {
    this._wimaxAuthProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wimaxAuthProtocolInput() {
    return this._wimaxAuthProtocol;
  }

  // wimax_carrier - computed: false, optional: true, required: false
  private _wimaxCarrier?: string; 
  public get wimaxCarrier() {
    return this.getStringAttribute('wimax_carrier');
  }
  public set wimaxCarrier(value: string) {
    this._wimaxCarrier = value;
  }
  public resetWimaxCarrier() {
    this._wimaxCarrier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wimaxCarrierInput() {
    return this._wimaxCarrier;
  }

  // wimax_realm - computed: false, optional: true, required: false
  private _wimaxRealm?: string; 
  public get wimaxRealm() {
    return this.getStringAttribute('wimax_realm');
  }
  public set wimaxRealm(value: string) {
    this._wimaxRealm = value;
  }
  public resetWimaxRealm() {
    this._wimaxRealm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wimaxRealmInput() {
    return this._wimaxRealm;
  }

  // controller_report - computed: false, optional: true, required: false
  private _controllerReport = new ExtendercontrollerExtenderControllerReportOutputReference(this, "controller_report");
  public get controllerReport() {
    return this._controllerReport;
  }
  public putControllerReport(value: ExtendercontrollerExtenderControllerReport) {
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
  private _modem1 = new ExtendercontrollerExtenderModem1OutputReference(this, "modem1");
  public get modem1() {
    return this._modem1;
  }
  public putModem1(value: ExtendercontrollerExtenderModem1) {
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
  private _modem2 = new ExtendercontrollerExtenderModem2OutputReference(this, "modem2");
  public get modem2() {
    return this._modem2;
  }
  public putModem2(value: ExtendercontrollerExtenderModem2) {
    this._modem2.internalValue = value;
  }
  public resetModem2() {
    this._modem2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modem2Input() {
    return this._modem2.internalValue;
  }

  // wan_extension - computed: false, optional: true, required: false
  private _wanExtension = new ExtendercontrollerExtenderWanExtensionOutputReference(this, "wan_extension");
  public get wanExtension() {
    return this._wanExtension;
  }
  public putWanExtension(value: ExtendercontrollerExtenderWanExtension) {
    this._wanExtension.internalValue = value;
  }
  public resetWanExtension() {
    this._wanExtension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanExtensionInput() {
    return this._wanExtension.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      _dataplan: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dataplan),
      _template: cdktf.listMapper(cdktf.stringToTerraform, false)(this._template),
      aaa_shared_secret: cdktf.listMapper(cdktf.stringToTerraform, false)(this._aaaSharedSecret),
      access_point_name: cdktf.stringToTerraform(this._accessPointName),
      admin: cdktf.stringToTerraform(this._admin),
      allowaccess: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowaccess),
      at_dial_script: cdktf.stringToTerraform(this._atDialScript),
      authorized: cdktf.stringToTerraform(this._authorized),
      bandwidth_limit: cdktf.numberToTerraform(this._bandwidthLimit),
      billing_start_day: cdktf.numberToTerraform(this._billingStartDay),
      cdma_aaa_spi: cdktf.stringToTerraform(this._cdmaAaaSpi),
      cdma_ha_spi: cdktf.stringToTerraform(this._cdmaHaSpi),
      cdma_nai: cdktf.stringToTerraform(this._cdmaNai),
      conn_status: cdktf.numberToTerraform(this._connStatus),
      description: cdktf.stringToTerraform(this._description),
      device_id: cdktf.numberToTerraform(this._deviceId),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      dial_mode: cdktf.stringToTerraform(this._dialMode),
      dial_status: cdktf.numberToTerraform(this._dialStatus),
      enforce_bandwidth: cdktf.stringToTerraform(this._enforceBandwidth),
      ext_name: cdktf.stringToTerraform(this._extName),
      extension_type: cdktf.stringToTerraform(this._extensionType),
      fosid: cdktf.stringToTerraform(this._fosid),
      ha_shared_secret: cdktf.listMapper(cdktf.stringToTerraform, false)(this._haSharedSecret),
      id: cdktf.stringToTerraform(this._id),
      ifname: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ifname),
      initiated_update: cdktf.stringToTerraform(this._initiatedUpdate),
      login_password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._loginPassword),
      login_password_change: cdktf.stringToTerraform(this._loginPasswordChange),
      mode: cdktf.stringToTerraform(this._mode),
      modem_passwd: cdktf.listMapper(cdktf.stringToTerraform, false)(this._modemPasswd),
      modem_type: cdktf.stringToTerraform(this._modemType),
      multi_mode: cdktf.stringToTerraform(this._multiMode),
      name: cdktf.stringToTerraform(this._name),
      override_allowaccess: cdktf.stringToTerraform(this._overrideAllowaccess),
      override_enforce_bandwidth: cdktf.stringToTerraform(this._overrideEnforceBandwidth),
      override_login_password_change: cdktf.stringToTerraform(this._overrideLoginPasswordChange),
      ppp_auth_protocol: cdktf.stringToTerraform(this._pppAuthProtocol),
      ppp_echo_request: cdktf.stringToTerraform(this._pppEchoRequest),
      ppp_password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pppPassword),
      ppp_username: cdktf.stringToTerraform(this._pppUsername),
      primary_ha: cdktf.stringToTerraform(this._primaryHa),
      profile: cdktf.listMapper(cdktf.stringToTerraform, false)(this._profile),
      quota_limit_mb: cdktf.numberToTerraform(this._quotaLimitMb),
      redial: cdktf.stringToTerraform(this._redial),
      redundant_intf: cdktf.stringToTerraform(this._redundantIntf),
      roaming: cdktf.stringToTerraform(this._roaming),
      role: cdktf.stringToTerraform(this._role),
      secondary_ha: cdktf.stringToTerraform(this._secondaryHa),
      sim_pin: cdktf.listMapper(cdktf.stringToTerraform, false)(this._simPin),
      vdom: cdktf.numberToTerraform(this._vdom),
      wimax_auth_protocol: cdktf.stringToTerraform(this._wimaxAuthProtocol),
      wimax_carrier: cdktf.stringToTerraform(this._wimaxCarrier),
      wimax_realm: cdktf.stringToTerraform(this._wimaxRealm),
      controller_report: extendercontrollerExtenderControllerReportToTerraform(this._controllerReport.internalValue),
      modem1: extendercontrollerExtenderModem1ToTerraform(this._modem1.internalValue),
      modem2: extendercontrollerExtenderModem2ToTerraform(this._modem2.internalValue),
      wan_extension: extendercontrollerExtenderWanExtensionToTerraform(this._wanExtension.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      _dataplan: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dataplan),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      _template: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._template),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      aaa_shared_secret: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._aaaSharedSecret),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      access_point_name: {
        value: cdktf.stringToHclTerraform(this._accessPointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin: {
        value: cdktf.stringToHclTerraform(this._admin),
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
      at_dial_script: {
        value: cdktf.stringToHclTerraform(this._atDialScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorized: {
        value: cdktf.stringToHclTerraform(this._authorized),
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
      billing_start_day: {
        value: cdktf.numberToHclTerraform(this._billingStartDay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cdma_aaa_spi: {
        value: cdktf.stringToHclTerraform(this._cdmaAaaSpi),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cdma_ha_spi: {
        value: cdktf.stringToHclTerraform(this._cdmaHaSpi),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cdma_nai: {
        value: cdktf.stringToHclTerraform(this._cdmaNai),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_id: {
        value: cdktf.numberToHclTerraform(this._deviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
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
      dial_mode: {
        value: cdktf.stringToHclTerraform(this._dialMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dial_status: {
        value: cdktf.numberToHclTerraform(this._dialStatus),
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
      ext_name: {
        value: cdktf.stringToHclTerraform(this._extName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extension_type: {
        value: cdktf.stringToHclTerraform(this._extensionType),
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
      ha_shared_secret: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._haSharedSecret),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ifname: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ifname),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      initiated_update: {
        value: cdktf.stringToHclTerraform(this._initiatedUpdate),
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
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modem_passwd: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._modemPasswd),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      modem_type: {
        value: cdktf.stringToHclTerraform(this._modemType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_mode: {
        value: cdktf.stringToHclTerraform(this._multiMode),
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
      override_allowaccess: {
        value: cdktf.stringToHclTerraform(this._overrideAllowaccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_enforce_bandwidth: {
        value: cdktf.stringToHclTerraform(this._overrideEnforceBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_login_password_change: {
        value: cdktf.stringToHclTerraform(this._overrideLoginPasswordChange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ppp_auth_protocol: {
        value: cdktf.stringToHclTerraform(this._pppAuthProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ppp_echo_request: {
        value: cdktf.stringToHclTerraform(this._pppEchoRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ppp_password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pppPassword),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ppp_username: {
        value: cdktf.stringToHclTerraform(this._pppUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_ha: {
        value: cdktf.stringToHclTerraform(this._primaryHa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._profile),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      quota_limit_mb: {
        value: cdktf.numberToHclTerraform(this._quotaLimitMb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      redial: {
        value: cdktf.stringToHclTerraform(this._redial),
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
      roaming: {
        value: cdktf.stringToHclTerraform(this._roaming),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_ha: {
        value: cdktf.stringToHclTerraform(this._secondaryHa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sim_pin: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._simPin),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vdom: {
        value: cdktf.numberToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wimax_auth_protocol: {
        value: cdktf.stringToHclTerraform(this._wimaxAuthProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wimax_carrier: {
        value: cdktf.stringToHclTerraform(this._wimaxCarrier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wimax_realm: {
        value: cdktf.stringToHclTerraform(this._wimaxRealm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      controller_report: {
        value: extendercontrollerExtenderControllerReportToHclTerraform(this._controllerReport.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExtendercontrollerExtenderControllerReportList",
      },
      modem1: {
        value: extendercontrollerExtenderModem1ToHclTerraform(this._modem1.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExtendercontrollerExtenderModem1List",
      },
      modem2: {
        value: extendercontrollerExtenderModem2ToHclTerraform(this._modem2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExtendercontrollerExtenderModem2List",
      },
      wan_extension: {
        value: extendercontrollerExtenderWanExtensionToHclTerraform(this._wanExtension.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExtendercontrollerExtenderWanExtensionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
