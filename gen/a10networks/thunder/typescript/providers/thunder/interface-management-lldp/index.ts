// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_management_lldp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceManagementLldpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_management_lldp#id InterfaceManagementLldp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_management_lldp#uuid InterfaceManagementLldp#uuid}
  */
  readonly uuid?: string;
  /**
  * enable_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_management_lldp#enable_cfg InterfaceManagementLldp#enable_cfg}
  */
  readonly enableCfg?: InterfaceManagementLldpEnableCfg;
  /**
  * notification_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_management_lldp#notification_cfg InterfaceManagementLldp#notification_cfg}
  */
  readonly notificationCfg?: InterfaceManagementLldpNotificationCfg;
  /**
  * tx_dot1_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_management_lldp#tx_dot1_cfg InterfaceManagementLldp#tx_dot1_cfg}
  */
  readonly txDot1Cfg?: InterfaceManagementLldpTxDot1Cfg;
  /**
  * tx_tlvs_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_management_lldp#tx_tlvs_cfg InterfaceManagementLldp#tx_tlvs_cfg}
  */
  readonly txTlvsCfg?: InterfaceManagementLldpTxTlvsCfg;
}
export interface InterfaceManagementLldpEnableCfg {
  /**
  * Interface lldp enable/disable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_management_lldp#rt_enable InterfaceManagementLldp#rt_enable}
  */
  readonly rtEnable?: number;
  /**
  * Enable lldp rx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_management_lldp#rx InterfaceManagementLldp#rx}
  */
  readonly rx?: number;
  /**
  * Enable lldp tx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_management_lldp#tx InterfaceManagementLldp#tx}
  */
  readonly tx?: number;
}

export function interfaceManagementLldpEnableCfgToTerraform(struct?: InterfaceManagementLldpEnableCfgOutputReference | InterfaceManagementLldpEnableCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rt_enable: cdktf.numberToTerraform(struct!.rtEnable),
    rx: cdktf.numberToTerraform(struct!.rx),
    tx: cdktf.numberToTerraform(struct!.tx),
  }
}


export function interfaceManagementLldpEnableCfgToHclTerraform(struct?: InterfaceManagementLldpEnableCfgOutputReference | InterfaceManagementLldpEnableCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rt_enable: {
      value: cdktf.numberToHclTerraform(struct!.rtEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rx: {
      value: cdktf.numberToHclTerraform(struct!.rx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tx: {
      value: cdktf.numberToHclTerraform(struct!.tx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceManagementLldpEnableCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceManagementLldpEnableCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rtEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtEnable = this._rtEnable;
    }
    if (this._rx !== undefined) {
      hasAnyValues = true;
      internalValueResult.rx = this._rx;
    }
    if (this._tx !== undefined) {
      hasAnyValues = true;
      internalValueResult.tx = this._tx;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceManagementLldpEnableCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rtEnable = undefined;
      this._rx = undefined;
      this._tx = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rtEnable = value.rtEnable;
      this._rx = value.rx;
      this._tx = value.tx;
    }
  }

  // rt_enable - computed: false, optional: true, required: false
  private _rtEnable?: number; 
  public get rtEnable() {
    return this.getNumberAttribute('rt_enable');
  }
  public set rtEnable(value: number) {
    this._rtEnable = value;
  }
  public resetRtEnable() {
    this._rtEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtEnableInput() {
    return this._rtEnable;
  }

  // rx - computed: false, optional: true, required: false
  private _rx?: number; 
  public get rx() {
    return this.getNumberAttribute('rx');
  }
  public set rx(value: number) {
    this._rx = value;
  }
  public resetRx() {
    this._rx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxInput() {
    return this._rx;
  }

  // tx - computed: false, optional: true, required: false
  private _tx?: number; 
  public get tx() {
    return this.getNumberAttribute('tx');
  }
  public set tx(value: number) {
    this._tx = value;
  }
  public resetTx() {
    this._tx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txInput() {
    return this._tx;
  }
}
export interface InterfaceManagementLldpNotificationCfg {
  /**
  * Interface lldp notification enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_management_lldp#notif_enable InterfaceManagementLldp#notif_enable}
  */
  readonly notifEnable?: number;
  /**
  * Interface lldp notification configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_management_lldp#notification InterfaceManagementLldp#notification}
  */
  readonly notification?: number;
}

export function interfaceManagementLldpNotificationCfgToTerraform(struct?: InterfaceManagementLldpNotificationCfgOutputReference | InterfaceManagementLldpNotificationCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notif_enable: cdktf.numberToTerraform(struct!.notifEnable),
    notification: cdktf.numberToTerraform(struct!.notification),
  }
}


export function interfaceManagementLldpNotificationCfgToHclTerraform(struct?: InterfaceManagementLldpNotificationCfgOutputReference | InterfaceManagementLldpNotificationCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notif_enable: {
      value: cdktf.numberToHclTerraform(struct!.notifEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    notification: {
      value: cdktf.numberToHclTerraform(struct!.notification),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceManagementLldpNotificationCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceManagementLldpNotificationCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notifEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifEnable = this._notifEnable;
    }
    if (this._notification !== undefined) {
      hasAnyValues = true;
      internalValueResult.notification = this._notification;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceManagementLldpNotificationCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notifEnable = undefined;
      this._notification = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notifEnable = value.notifEnable;
      this._notification = value.notification;
    }
  }

  // notif_enable - computed: false, optional: true, required: false
  private _notifEnable?: number; 
  public get notifEnable() {
    return this.getNumberAttribute('notif_enable');
  }
  public set notifEnable(value: number) {
    this._notifEnable = value;
  }
  public resetNotifEnable() {
    this._notifEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifEnableInput() {
    return this._notifEnable;
  }

  // notification - computed: false, optional: true, required: false
  private _notification?: number; 
  public get notification() {
    return this.getNumberAttribute('notification');
  }
  public set notification(value: number) {
    this._notification = value;
  }
  public resetNotification() {
    this._notification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification;
  }
}
export interface InterfaceManagementLldpTxDot1Cfg {
  /**
  * Interface link aggregation information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_management_lldp#link_aggregation InterfaceManagementLldp#link_aggregation}
  */
  readonly linkAggregation?: number;
  /**
  * Interface lldp tx IEEE 802.1 Organizationally specific TLVs configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_management_lldp#tx_dot1_tlvs InterfaceManagementLldp#tx_dot1_tlvs}
  */
  readonly txDot1Tlvs?: number;
  /**
  * Interface vlan information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_management_lldp#vlan InterfaceManagementLldp#vlan}
  */
  readonly vlan?: number;
}

export function interfaceManagementLldpTxDot1CfgToTerraform(struct?: InterfaceManagementLldpTxDot1CfgOutputReference | InterfaceManagementLldpTxDot1Cfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    link_aggregation: cdktf.numberToTerraform(struct!.linkAggregation),
    tx_dot1_tlvs: cdktf.numberToTerraform(struct!.txDot1Tlvs),
    vlan: cdktf.numberToTerraform(struct!.vlan),
  }
}


export function interfaceManagementLldpTxDot1CfgToHclTerraform(struct?: InterfaceManagementLldpTxDot1CfgOutputReference | InterfaceManagementLldpTxDot1Cfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    link_aggregation: {
      value: cdktf.numberToHclTerraform(struct!.linkAggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tx_dot1_tlvs: {
      value: cdktf.numberToHclTerraform(struct!.txDot1Tlvs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan: {
      value: cdktf.numberToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceManagementLldpTxDot1CfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceManagementLldpTxDot1Cfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linkAggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkAggregation = this._linkAggregation;
    }
    if (this._txDot1Tlvs !== undefined) {
      hasAnyValues = true;
      internalValueResult.txDot1Tlvs = this._txDot1Tlvs;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceManagementLldpTxDot1Cfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._linkAggregation = undefined;
      this._txDot1Tlvs = undefined;
      this._vlan = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._linkAggregation = value.linkAggregation;
      this._txDot1Tlvs = value.txDot1Tlvs;
      this._vlan = value.vlan;
    }
  }

  // link_aggregation - computed: false, optional: true, required: false
  private _linkAggregation?: number; 
  public get linkAggregation() {
    return this.getNumberAttribute('link_aggregation');
  }
  public set linkAggregation(value: number) {
    this._linkAggregation = value;
  }
  public resetLinkAggregation() {
    this._linkAggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkAggregationInput() {
    return this._linkAggregation;
  }

  // tx_dot1_tlvs - computed: false, optional: true, required: false
  private _txDot1Tlvs?: number; 
  public get txDot1Tlvs() {
    return this.getNumberAttribute('tx_dot1_tlvs');
  }
  public set txDot1Tlvs(value: number) {
    this._txDot1Tlvs = value;
  }
  public resetTxDot1Tlvs() {
    this._txDot1Tlvs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txDot1TlvsInput() {
    return this._txDot1Tlvs;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }
}
export interface InterfaceManagementLldpTxTlvsCfg {
  /**
  * Configure which TLVs excluded. All basic TLVs will be included by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_management_lldp#exclude InterfaceManagementLldp#exclude}
  */
  readonly exclude?: number;
  /**
  * Interface lldp management address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_management_lldp#management_address InterfaceManagementLldp#management_address}
  */
  readonly managementAddress?: number;
  /**
  * Interface lldp port description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_management_lldp#port_description InterfaceManagementLldp#port_description}
  */
  readonly portDescription?: number;
  /**
  * Interface lldp system capabilities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_management_lldp#system_capabilities InterfaceManagementLldp#system_capabilities}
  */
  readonly systemCapabilities?: number;
  /**
  * Interface lldp system description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_management_lldp#system_description InterfaceManagementLldp#system_description}
  */
  readonly systemDescription?: number;
  /**
  * Interface lldp system name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_management_lldp#system_name InterfaceManagementLldp#system_name}
  */
  readonly systemName?: number;
  /**
  * Interface lldp tx TLVs configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_management_lldp#tx_tlvs InterfaceManagementLldp#tx_tlvs}
  */
  readonly txTlvs?: number;
}

export function interfaceManagementLldpTxTlvsCfgToTerraform(struct?: InterfaceManagementLldpTxTlvsCfgOutputReference | InterfaceManagementLldpTxTlvsCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.numberToTerraform(struct!.exclude),
    management_address: cdktf.numberToTerraform(struct!.managementAddress),
    port_description: cdktf.numberToTerraform(struct!.portDescription),
    system_capabilities: cdktf.numberToTerraform(struct!.systemCapabilities),
    system_description: cdktf.numberToTerraform(struct!.systemDescription),
    system_name: cdktf.numberToTerraform(struct!.systemName),
    tx_tlvs: cdktf.numberToTerraform(struct!.txTlvs),
  }
}


export function interfaceManagementLldpTxTlvsCfgToHclTerraform(struct?: InterfaceManagementLldpTxTlvsCfgOutputReference | InterfaceManagementLldpTxTlvsCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.numberToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    management_address: {
      value: cdktf.numberToHclTerraform(struct!.managementAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_description: {
      value: cdktf.numberToHclTerraform(struct!.portDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    system_capabilities: {
      value: cdktf.numberToHclTerraform(struct!.systemCapabilities),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    system_description: {
      value: cdktf.numberToHclTerraform(struct!.systemDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    system_name: {
      value: cdktf.numberToHclTerraform(struct!.systemName),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tx_tlvs: {
      value: cdktf.numberToHclTerraform(struct!.txTlvs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceManagementLldpTxTlvsCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceManagementLldpTxTlvsCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._managementAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementAddress = this._managementAddress;
    }
    if (this._portDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.portDescription = this._portDescription;
    }
    if (this._systemCapabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemCapabilities = this._systemCapabilities;
    }
    if (this._systemDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemDescription = this._systemDescription;
    }
    if (this._systemName !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemName = this._systemName;
    }
    if (this._txTlvs !== undefined) {
      hasAnyValues = true;
      internalValueResult.txTlvs = this._txTlvs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceManagementLldpTxTlvsCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclude = undefined;
      this._managementAddress = undefined;
      this._portDescription = undefined;
      this._systemCapabilities = undefined;
      this._systemDescription = undefined;
      this._systemName = undefined;
      this._txTlvs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclude = value.exclude;
      this._managementAddress = value.managementAddress;
      this._portDescription = value.portDescription;
      this._systemCapabilities = value.systemCapabilities;
      this._systemDescription = value.systemDescription;
      this._systemName = value.systemName;
      this._txTlvs = value.txTlvs;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: number; 
  public get exclude() {
    return this.getNumberAttribute('exclude');
  }
  public set exclude(value: number) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // management_address - computed: false, optional: true, required: false
  private _managementAddress?: number; 
  public get managementAddress() {
    return this.getNumberAttribute('management_address');
  }
  public set managementAddress(value: number) {
    this._managementAddress = value;
  }
  public resetManagementAddress() {
    this._managementAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementAddressInput() {
    return this._managementAddress;
  }

  // port_description - computed: false, optional: true, required: false
  private _portDescription?: number; 
  public get portDescription() {
    return this.getNumberAttribute('port_description');
  }
  public set portDescription(value: number) {
    this._portDescription = value;
  }
  public resetPortDescription() {
    this._portDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portDescriptionInput() {
    return this._portDescription;
  }

  // system_capabilities - computed: false, optional: true, required: false
  private _systemCapabilities?: number; 
  public get systemCapabilities() {
    return this.getNumberAttribute('system_capabilities');
  }
  public set systemCapabilities(value: number) {
    this._systemCapabilities = value;
  }
  public resetSystemCapabilities() {
    this._systemCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemCapabilitiesInput() {
    return this._systemCapabilities;
  }

  // system_description - computed: false, optional: true, required: false
  private _systemDescription?: number; 
  public get systemDescription() {
    return this.getNumberAttribute('system_description');
  }
  public set systemDescription(value: number) {
    this._systemDescription = value;
  }
  public resetSystemDescription() {
    this._systemDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDescriptionInput() {
    return this._systemDescription;
  }

  // system_name - computed: false, optional: true, required: false
  private _systemName?: number; 
  public get systemName() {
    return this.getNumberAttribute('system_name');
  }
  public set systemName(value: number) {
    this._systemName = value;
  }
  public resetSystemName() {
    this._systemName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemNameInput() {
    return this._systemName;
  }

  // tx_tlvs - computed: false, optional: true, required: false
  private _txTlvs?: number; 
  public get txTlvs() {
    return this.getNumberAttribute('tx_tlvs');
  }
  public set txTlvs(value: number) {
    this._txTlvs = value;
  }
  public resetTxTlvs() {
    this._txTlvs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txTlvsInput() {
    return this._txTlvs;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_management_lldp thunder_interface_management_lldp}
*/
export class InterfaceManagementLldp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_interface_management_lldp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceManagementLldp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceManagementLldp to import
  * @param importFromId The id of the existing InterfaceManagementLldp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_management_lldp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceManagementLldp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_interface_management_lldp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_management_lldp thunder_interface_management_lldp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceManagementLldpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: InterfaceManagementLldpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_interface_management_lldp',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._uuid = config.uuid;
    this._enableCfg.internalValue = config.enableCfg;
    this._notificationCfg.internalValue = config.notificationCfg;
    this._txDot1Cfg.internalValue = config.txDot1Cfg;
    this._txTlvsCfg.internalValue = config.txTlvsCfg;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // enable_cfg - computed: false, optional: true, required: false
  private _enableCfg = new InterfaceManagementLldpEnableCfgOutputReference(this, "enable_cfg");
  public get enableCfg() {
    return this._enableCfg;
  }
  public putEnableCfg(value: InterfaceManagementLldpEnableCfg) {
    this._enableCfg.internalValue = value;
  }
  public resetEnableCfg() {
    this._enableCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCfgInput() {
    return this._enableCfg.internalValue;
  }

  // notification_cfg - computed: false, optional: true, required: false
  private _notificationCfg = new InterfaceManagementLldpNotificationCfgOutputReference(this, "notification_cfg");
  public get notificationCfg() {
    return this._notificationCfg;
  }
  public putNotificationCfg(value: InterfaceManagementLldpNotificationCfg) {
    this._notificationCfg.internalValue = value;
  }
  public resetNotificationCfg() {
    this._notificationCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationCfgInput() {
    return this._notificationCfg.internalValue;
  }

  // tx_dot1_cfg - computed: false, optional: true, required: false
  private _txDot1Cfg = new InterfaceManagementLldpTxDot1CfgOutputReference(this, "tx_dot1_cfg");
  public get txDot1Cfg() {
    return this._txDot1Cfg;
  }
  public putTxDot1Cfg(value: InterfaceManagementLldpTxDot1Cfg) {
    this._txDot1Cfg.internalValue = value;
  }
  public resetTxDot1Cfg() {
    this._txDot1Cfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txDot1CfgInput() {
    return this._txDot1Cfg.internalValue;
  }

  // tx_tlvs_cfg - computed: false, optional: true, required: false
  private _txTlvsCfg = new InterfaceManagementLldpTxTlvsCfgOutputReference(this, "tx_tlvs_cfg");
  public get txTlvsCfg() {
    return this._txTlvsCfg;
  }
  public putTxTlvsCfg(value: InterfaceManagementLldpTxTlvsCfg) {
    this._txTlvsCfg.internalValue = value;
  }
  public resetTxTlvsCfg() {
    this._txTlvsCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txTlvsCfgInput() {
    return this._txTlvsCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      enable_cfg: interfaceManagementLldpEnableCfgToTerraform(this._enableCfg.internalValue),
      notification_cfg: interfaceManagementLldpNotificationCfgToTerraform(this._notificationCfg.internalValue),
      tx_dot1_cfg: interfaceManagementLldpTxDot1CfgToTerraform(this._txDot1Cfg.internalValue),
      tx_tlvs_cfg: interfaceManagementLldpTxTlvsCfgToTerraform(this._txTlvsCfg.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_cfg: {
        value: interfaceManagementLldpEnableCfgToHclTerraform(this._enableCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceManagementLldpEnableCfgList",
      },
      notification_cfg: {
        value: interfaceManagementLldpNotificationCfgToHclTerraform(this._notificationCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceManagementLldpNotificationCfgList",
      },
      tx_dot1_cfg: {
        value: interfaceManagementLldpTxDot1CfgToHclTerraform(this._txDot1Cfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceManagementLldpTxDot1CfgList",
      },
      tx_tlvs_cfg: {
        value: interfaceManagementLldpTxTlvsCfgToHclTerraform(this._txTlvsCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceManagementLldpTxTlvsCfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
