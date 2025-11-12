// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelesscontrollerWtpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#admin WirelesscontrollerWtp#admin}
  */
  readonly admin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#allowaccess WirelesscontrollerWtp#allowaccess}
  */
  readonly allowaccess?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#apcfg_profile WirelesscontrollerWtp#apcfg_profile}
  */
  readonly apcfgProfile?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#ble_major_id WirelesscontrollerWtp#ble_major_id}
  */
  readonly bleMajorId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#ble_minor_id WirelesscontrollerWtp#ble_minor_id}
  */
  readonly bleMinorId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#bonjour_profile WirelesscontrollerWtp#bonjour_profile}
  */
  readonly bonjourProfile?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#comment WirelesscontrollerWtp#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#coordinate_latitude WirelesscontrollerWtp#coordinate_latitude}
  */
  readonly coordinateLatitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#coordinate_longitude WirelesscontrollerWtp#coordinate_longitude}
  */
  readonly coordinateLongitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#device_name WirelesscontrollerWtp#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#device_vdom WirelesscontrollerWtp#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#dynamic_sort_subtable WirelesscontrollerWtp#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#firmware_provision WirelesscontrollerWtp#firmware_provision}
  */
  readonly firmwareProvision?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#firmware_provision_latest WirelesscontrollerWtp#firmware_provision_latest}
  */
  readonly firmwareProvisionLatest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#id WirelesscontrollerWtp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#image_download WirelesscontrollerWtp#image_download}
  */
  readonly imageDownload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#index WirelesscontrollerWtp#index}
  */
  readonly index?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#ip_fragment_preventing WirelesscontrollerWtp#ip_fragment_preventing}
  */
  readonly ipFragmentPreventing?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#led_state WirelesscontrollerWtp#led_state}
  */
  readonly ledState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#location WirelesscontrollerWtp#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#login_passwd WirelesscontrollerWtp#login_passwd}
  */
  readonly loginPasswd?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#login_passwd_change WirelesscontrollerWtp#login_passwd_change}
  */
  readonly loginPasswdChange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#mesh_bridge_enable WirelesscontrollerWtp#mesh_bridge_enable}
  */
  readonly meshBridgeEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#name WirelesscontrollerWtp#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#override_allowaccess WirelesscontrollerWtp#override_allowaccess}
  */
  readonly overrideAllowaccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#override_ip_fragment WirelesscontrollerWtp#override_ip_fragment}
  */
  readonly overrideIpFragment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#override_lan WirelesscontrollerWtp#override_lan}
  */
  readonly overrideLan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#override_led_state WirelesscontrollerWtp#override_led_state}
  */
  readonly overrideLedState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#override_login_passwd_change WirelesscontrollerWtp#override_login_passwd_change}
  */
  readonly overrideLoginPasswdChange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#override_split_tunnel WirelesscontrollerWtp#override_split_tunnel}
  */
  readonly overrideSplitTunnel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#override_wan_port_mode WirelesscontrollerWtp#override_wan_port_mode}
  */
  readonly overrideWanPortMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#purdue_level WirelesscontrollerWtp#purdue_level}
  */
  readonly purdueLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#region WirelesscontrollerWtp#region}
  */
  readonly region?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#region_x WirelesscontrollerWtp#region_x}
  */
  readonly regionX?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#region_y WirelesscontrollerWtp#region_y}
  */
  readonly regionY?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#split_tunneling_acl_local_ap_subnet WirelesscontrollerWtp#split_tunneling_acl_local_ap_subnet}
  */
  readonly splitTunnelingAclLocalApSubnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#split_tunneling_acl_path WirelesscontrollerWtp#split_tunneling_acl_path}
  */
  readonly splitTunnelingAclPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#tun_mtu_downlink WirelesscontrollerWtp#tun_mtu_downlink}
  */
  readonly tunMtuDownlink?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#tun_mtu_uplink WirelesscontrollerWtp#tun_mtu_uplink}
  */
  readonly tunMtuUplink?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#uuid WirelesscontrollerWtp#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#wan_port_mode WirelesscontrollerWtp#wan_port_mode}
  */
  readonly wanPortMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#wtp_id WirelesscontrollerWtp#wtp_id}
  */
  readonly wtpId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#wtp_mode WirelesscontrollerWtp#wtp_mode}
  */
  readonly wtpMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#wtp_profile WirelesscontrollerWtp#wtp_profile}
  */
  readonly wtpProfile?: string[];
  /**
  * lan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#lan WirelesscontrollerWtp#lan}
  */
  readonly lan?: WirelesscontrollerWtpLan;
  /**
  * radio_1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#radio_1 WirelesscontrollerWtp#radio_1}
  */
  readonly radio1?: WirelesscontrollerWtpRadio1;
  /**
  * radio_2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#radio_2 WirelesscontrollerWtp#radio_2}
  */
  readonly radio2?: WirelesscontrollerWtpRadio2;
  /**
  * radio_3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#radio_3 WirelesscontrollerWtp#radio_3}
  */
  readonly radio3?: WirelesscontrollerWtpRadio3;
  /**
  * radio_4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#radio_4 WirelesscontrollerWtp#radio_4}
  */
  readonly radio4?: WirelesscontrollerWtpRadio4;
  /**
  * split_tunneling_acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#split_tunneling_acl WirelesscontrollerWtp#split_tunneling_acl}
  */
  readonly splitTunnelingAcl?: WirelesscontrollerWtpSplitTunnelingAcl[] | cdktf.IResolvable;
}
export interface WirelesscontrollerWtpLan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#port1_mode WirelesscontrollerWtp#port1_mode}
  */
  readonly port1Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#port1_ssid WirelesscontrollerWtp#port1_ssid}
  */
  readonly port1Ssid?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#port2_mode WirelesscontrollerWtp#port2_mode}
  */
  readonly port2Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#port2_ssid WirelesscontrollerWtp#port2_ssid}
  */
  readonly port2Ssid?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#port3_mode WirelesscontrollerWtp#port3_mode}
  */
  readonly port3Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#port3_ssid WirelesscontrollerWtp#port3_ssid}
  */
  readonly port3Ssid?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#port4_mode WirelesscontrollerWtp#port4_mode}
  */
  readonly port4Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#port4_ssid WirelesscontrollerWtp#port4_ssid}
  */
  readonly port4Ssid?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#port5_mode WirelesscontrollerWtp#port5_mode}
  */
  readonly port5Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#port5_ssid WirelesscontrollerWtp#port5_ssid}
  */
  readonly port5Ssid?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#port6_mode WirelesscontrollerWtp#port6_mode}
  */
  readonly port6Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#port6_ssid WirelesscontrollerWtp#port6_ssid}
  */
  readonly port6Ssid?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#port7_mode WirelesscontrollerWtp#port7_mode}
  */
  readonly port7Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#port7_ssid WirelesscontrollerWtp#port7_ssid}
  */
  readonly port7Ssid?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#port8_mode WirelesscontrollerWtp#port8_mode}
  */
  readonly port8Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#port8_ssid WirelesscontrollerWtp#port8_ssid}
  */
  readonly port8Ssid?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#port_esl_mode WirelesscontrollerWtp#port_esl_mode}
  */
  readonly portEslMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#port_esl_ssid WirelesscontrollerWtp#port_esl_ssid}
  */
  readonly portEslSsid?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#port_mode WirelesscontrollerWtp#port_mode}
  */
  readonly portMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#port_ssid WirelesscontrollerWtp#port_ssid}
  */
  readonly portSsid?: string[];
}

export function wirelesscontrollerWtpLanToTerraform(struct?: WirelesscontrollerWtpLanOutputReference | WirelesscontrollerWtpLan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port1_mode: cdktf.stringToTerraform(struct!.port1Mode),
    port1_ssid: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.port1Ssid),
    port2_mode: cdktf.stringToTerraform(struct!.port2Mode),
    port2_ssid: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.port2Ssid),
    port3_mode: cdktf.stringToTerraform(struct!.port3Mode),
    port3_ssid: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.port3Ssid),
    port4_mode: cdktf.stringToTerraform(struct!.port4Mode),
    port4_ssid: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.port4Ssid),
    port5_mode: cdktf.stringToTerraform(struct!.port5Mode),
    port5_ssid: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.port5Ssid),
    port6_mode: cdktf.stringToTerraform(struct!.port6Mode),
    port6_ssid: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.port6Ssid),
    port7_mode: cdktf.stringToTerraform(struct!.port7Mode),
    port7_ssid: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.port7Ssid),
    port8_mode: cdktf.stringToTerraform(struct!.port8Mode),
    port8_ssid: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.port8Ssid),
    port_esl_mode: cdktf.stringToTerraform(struct!.portEslMode),
    port_esl_ssid: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.portEslSsid),
    port_mode: cdktf.stringToTerraform(struct!.portMode),
    port_ssid: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.portSsid),
  }
}


export function wirelesscontrollerWtpLanToHclTerraform(struct?: WirelesscontrollerWtpLanOutputReference | WirelesscontrollerWtpLan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port1_mode: {
      value: cdktf.stringToHclTerraform(struct!.port1Mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port1_ssid: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.port1Ssid),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    port2_mode: {
      value: cdktf.stringToHclTerraform(struct!.port2Mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port2_ssid: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.port2Ssid),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    port3_mode: {
      value: cdktf.stringToHclTerraform(struct!.port3Mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port3_ssid: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.port3Ssid),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    port4_mode: {
      value: cdktf.stringToHclTerraform(struct!.port4Mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port4_ssid: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.port4Ssid),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    port5_mode: {
      value: cdktf.stringToHclTerraform(struct!.port5Mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port5_ssid: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.port5Ssid),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    port6_mode: {
      value: cdktf.stringToHclTerraform(struct!.port6Mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port6_ssid: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.port6Ssid),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    port7_mode: {
      value: cdktf.stringToHclTerraform(struct!.port7Mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port7_ssid: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.port7Ssid),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    port8_mode: {
      value: cdktf.stringToHclTerraform(struct!.port8Mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port8_ssid: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.port8Ssid),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    port_esl_mode: {
      value: cdktf.stringToHclTerraform(struct!.portEslMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_esl_ssid: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.portEslSsid),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    port_mode: {
      value: cdktf.stringToHclTerraform(struct!.portMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_ssid: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.portSsid),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerWtpLanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WirelesscontrollerWtpLan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port1Mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.port1Mode = this._port1Mode;
    }
    if (this._port1Ssid !== undefined) {
      hasAnyValues = true;
      internalValueResult.port1Ssid = this._port1Ssid;
    }
    if (this._port2Mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.port2Mode = this._port2Mode;
    }
    if (this._port2Ssid !== undefined) {
      hasAnyValues = true;
      internalValueResult.port2Ssid = this._port2Ssid;
    }
    if (this._port3Mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.port3Mode = this._port3Mode;
    }
    if (this._port3Ssid !== undefined) {
      hasAnyValues = true;
      internalValueResult.port3Ssid = this._port3Ssid;
    }
    if (this._port4Mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.port4Mode = this._port4Mode;
    }
    if (this._port4Ssid !== undefined) {
      hasAnyValues = true;
      internalValueResult.port4Ssid = this._port4Ssid;
    }
    if (this._port5Mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.port5Mode = this._port5Mode;
    }
    if (this._port5Ssid !== undefined) {
      hasAnyValues = true;
      internalValueResult.port5Ssid = this._port5Ssid;
    }
    if (this._port6Mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.port6Mode = this._port6Mode;
    }
    if (this._port6Ssid !== undefined) {
      hasAnyValues = true;
      internalValueResult.port6Ssid = this._port6Ssid;
    }
    if (this._port7Mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.port7Mode = this._port7Mode;
    }
    if (this._port7Ssid !== undefined) {
      hasAnyValues = true;
      internalValueResult.port7Ssid = this._port7Ssid;
    }
    if (this._port8Mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.port8Mode = this._port8Mode;
    }
    if (this._port8Ssid !== undefined) {
      hasAnyValues = true;
      internalValueResult.port8Ssid = this._port8Ssid;
    }
    if (this._portEslMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.portEslMode = this._portEslMode;
    }
    if (this._portEslSsid !== undefined) {
      hasAnyValues = true;
      internalValueResult.portEslSsid = this._portEslSsid;
    }
    if (this._portMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.portMode = this._portMode;
    }
    if (this._portSsid !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSsid = this._portSsid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerWtpLan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port1Mode = undefined;
      this._port1Ssid = undefined;
      this._port2Mode = undefined;
      this._port2Ssid = undefined;
      this._port3Mode = undefined;
      this._port3Ssid = undefined;
      this._port4Mode = undefined;
      this._port4Ssid = undefined;
      this._port5Mode = undefined;
      this._port5Ssid = undefined;
      this._port6Mode = undefined;
      this._port6Ssid = undefined;
      this._port7Mode = undefined;
      this._port7Ssid = undefined;
      this._port8Mode = undefined;
      this._port8Ssid = undefined;
      this._portEslMode = undefined;
      this._portEslSsid = undefined;
      this._portMode = undefined;
      this._portSsid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port1Mode = value.port1Mode;
      this._port1Ssid = value.port1Ssid;
      this._port2Mode = value.port2Mode;
      this._port2Ssid = value.port2Ssid;
      this._port3Mode = value.port3Mode;
      this._port3Ssid = value.port3Ssid;
      this._port4Mode = value.port4Mode;
      this._port4Ssid = value.port4Ssid;
      this._port5Mode = value.port5Mode;
      this._port5Ssid = value.port5Ssid;
      this._port6Mode = value.port6Mode;
      this._port6Ssid = value.port6Ssid;
      this._port7Mode = value.port7Mode;
      this._port7Ssid = value.port7Ssid;
      this._port8Mode = value.port8Mode;
      this._port8Ssid = value.port8Ssid;
      this._portEslMode = value.portEslMode;
      this._portEslSsid = value.portEslSsid;
      this._portMode = value.portMode;
      this._portSsid = value.portSsid;
    }
  }

  // port1_mode - computed: true, optional: true, required: false
  private _port1Mode?: string; 
  public get port1Mode() {
    return this.getStringAttribute('port1_mode');
  }
  public set port1Mode(value: string) {
    this._port1Mode = value;
  }
  public resetPort1Mode() {
    this._port1Mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port1ModeInput() {
    return this._port1Mode;
  }

  // port1_ssid - computed: true, optional: true, required: false
  private _port1Ssid?: string[]; 
  public get port1Ssid() {
    return cdktf.Fn.tolist(this.getListAttribute('port1_ssid'));
  }
  public set port1Ssid(value: string[]) {
    this._port1Ssid = value;
  }
  public resetPort1Ssid() {
    this._port1Ssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port1SsidInput() {
    return this._port1Ssid;
  }

  // port2_mode - computed: true, optional: true, required: false
  private _port2Mode?: string; 
  public get port2Mode() {
    return this.getStringAttribute('port2_mode');
  }
  public set port2Mode(value: string) {
    this._port2Mode = value;
  }
  public resetPort2Mode() {
    this._port2Mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port2ModeInput() {
    return this._port2Mode;
  }

  // port2_ssid - computed: true, optional: true, required: false
  private _port2Ssid?: string[]; 
  public get port2Ssid() {
    return cdktf.Fn.tolist(this.getListAttribute('port2_ssid'));
  }
  public set port2Ssid(value: string[]) {
    this._port2Ssid = value;
  }
  public resetPort2Ssid() {
    this._port2Ssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port2SsidInput() {
    return this._port2Ssid;
  }

  // port3_mode - computed: true, optional: true, required: false
  private _port3Mode?: string; 
  public get port3Mode() {
    return this.getStringAttribute('port3_mode');
  }
  public set port3Mode(value: string) {
    this._port3Mode = value;
  }
  public resetPort3Mode() {
    this._port3Mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port3ModeInput() {
    return this._port3Mode;
  }

  // port3_ssid - computed: true, optional: true, required: false
  private _port3Ssid?: string[]; 
  public get port3Ssid() {
    return cdktf.Fn.tolist(this.getListAttribute('port3_ssid'));
  }
  public set port3Ssid(value: string[]) {
    this._port3Ssid = value;
  }
  public resetPort3Ssid() {
    this._port3Ssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port3SsidInput() {
    return this._port3Ssid;
  }

  // port4_mode - computed: true, optional: true, required: false
  private _port4Mode?: string; 
  public get port4Mode() {
    return this.getStringAttribute('port4_mode');
  }
  public set port4Mode(value: string) {
    this._port4Mode = value;
  }
  public resetPort4Mode() {
    this._port4Mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port4ModeInput() {
    return this._port4Mode;
  }

  // port4_ssid - computed: true, optional: true, required: false
  private _port4Ssid?: string[]; 
  public get port4Ssid() {
    return cdktf.Fn.tolist(this.getListAttribute('port4_ssid'));
  }
  public set port4Ssid(value: string[]) {
    this._port4Ssid = value;
  }
  public resetPort4Ssid() {
    this._port4Ssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port4SsidInput() {
    return this._port4Ssid;
  }

  // port5_mode - computed: true, optional: true, required: false
  private _port5Mode?: string; 
  public get port5Mode() {
    return this.getStringAttribute('port5_mode');
  }
  public set port5Mode(value: string) {
    this._port5Mode = value;
  }
  public resetPort5Mode() {
    this._port5Mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port5ModeInput() {
    return this._port5Mode;
  }

  // port5_ssid - computed: true, optional: true, required: false
  private _port5Ssid?: string[]; 
  public get port5Ssid() {
    return cdktf.Fn.tolist(this.getListAttribute('port5_ssid'));
  }
  public set port5Ssid(value: string[]) {
    this._port5Ssid = value;
  }
  public resetPort5Ssid() {
    this._port5Ssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port5SsidInput() {
    return this._port5Ssid;
  }

  // port6_mode - computed: true, optional: true, required: false
  private _port6Mode?: string; 
  public get port6Mode() {
    return this.getStringAttribute('port6_mode');
  }
  public set port6Mode(value: string) {
    this._port6Mode = value;
  }
  public resetPort6Mode() {
    this._port6Mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port6ModeInput() {
    return this._port6Mode;
  }

  // port6_ssid - computed: true, optional: true, required: false
  private _port6Ssid?: string[]; 
  public get port6Ssid() {
    return cdktf.Fn.tolist(this.getListAttribute('port6_ssid'));
  }
  public set port6Ssid(value: string[]) {
    this._port6Ssid = value;
  }
  public resetPort6Ssid() {
    this._port6Ssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port6SsidInput() {
    return this._port6Ssid;
  }

  // port7_mode - computed: true, optional: true, required: false
  private _port7Mode?: string; 
  public get port7Mode() {
    return this.getStringAttribute('port7_mode');
  }
  public set port7Mode(value: string) {
    this._port7Mode = value;
  }
  public resetPort7Mode() {
    this._port7Mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port7ModeInput() {
    return this._port7Mode;
  }

  // port7_ssid - computed: true, optional: true, required: false
  private _port7Ssid?: string[]; 
  public get port7Ssid() {
    return cdktf.Fn.tolist(this.getListAttribute('port7_ssid'));
  }
  public set port7Ssid(value: string[]) {
    this._port7Ssid = value;
  }
  public resetPort7Ssid() {
    this._port7Ssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port7SsidInput() {
    return this._port7Ssid;
  }

  // port8_mode - computed: true, optional: true, required: false
  private _port8Mode?: string; 
  public get port8Mode() {
    return this.getStringAttribute('port8_mode');
  }
  public set port8Mode(value: string) {
    this._port8Mode = value;
  }
  public resetPort8Mode() {
    this._port8Mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port8ModeInput() {
    return this._port8Mode;
  }

  // port8_ssid - computed: true, optional: true, required: false
  private _port8Ssid?: string[]; 
  public get port8Ssid() {
    return cdktf.Fn.tolist(this.getListAttribute('port8_ssid'));
  }
  public set port8Ssid(value: string[]) {
    this._port8Ssid = value;
  }
  public resetPort8Ssid() {
    this._port8Ssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port8SsidInput() {
    return this._port8Ssid;
  }

  // port_esl_mode - computed: true, optional: true, required: false
  private _portEslMode?: string; 
  public get portEslMode() {
    return this.getStringAttribute('port_esl_mode');
  }
  public set portEslMode(value: string) {
    this._portEslMode = value;
  }
  public resetPortEslMode() {
    this._portEslMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portEslModeInput() {
    return this._portEslMode;
  }

  // port_esl_ssid - computed: true, optional: true, required: false
  private _portEslSsid?: string[]; 
  public get portEslSsid() {
    return cdktf.Fn.tolist(this.getListAttribute('port_esl_ssid'));
  }
  public set portEslSsid(value: string[]) {
    this._portEslSsid = value;
  }
  public resetPortEslSsid() {
    this._portEslSsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portEslSsidInput() {
    return this._portEslSsid;
  }

  // port_mode - computed: true, optional: true, required: false
  private _portMode?: string; 
  public get portMode() {
    return this.getStringAttribute('port_mode');
  }
  public set portMode(value: string) {
    this._portMode = value;
  }
  public resetPortMode() {
    this._portMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portModeInput() {
    return this._portMode;
  }

  // port_ssid - computed: true, optional: true, required: false
  private _portSsid?: string[]; 
  public get portSsid() {
    return cdktf.Fn.tolist(this.getListAttribute('port_ssid'));
  }
  public set portSsid(value: string[]) {
    this._portSsid = value;
  }
  public resetPortSsid() {
    this._portSsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSsidInput() {
    return this._portSsid;
  }
}
export interface WirelesscontrollerWtpRadio1 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#auto_power_high WirelesscontrollerWtp#auto_power_high}
  */
  readonly autoPowerHigh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#auto_power_level WirelesscontrollerWtp#auto_power_level}
  */
  readonly autoPowerLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#auto_power_low WirelesscontrollerWtp#auto_power_low}
  */
  readonly autoPowerLow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#auto_power_target WirelesscontrollerWtp#auto_power_target}
  */
  readonly autoPowerTarget?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#band WirelesscontrollerWtp#band}
  */
  readonly band?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#channel WirelesscontrollerWtp#channel}
  */
  readonly channel?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#drma_manual_mode WirelesscontrollerWtp#drma_manual_mode}
  */
  readonly drmaManualMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#override_analysis WirelesscontrollerWtp#override_analysis}
  */
  readonly overrideAnalysis?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#override_band WirelesscontrollerWtp#override_band}
  */
  readonly overrideBand?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#override_channel WirelesscontrollerWtp#override_channel}
  */
  readonly overrideChannel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#override_txpower WirelesscontrollerWtp#override_txpower}
  */
  readonly overrideTxpower?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#override_vaps WirelesscontrollerWtp#override_vaps}
  */
  readonly overrideVaps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#power_level WirelesscontrollerWtp#power_level}
  */
  readonly powerLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#power_mode WirelesscontrollerWtp#power_mode}
  */
  readonly powerMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#power_value WirelesscontrollerWtp#power_value}
  */
  readonly powerValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#radio_id WirelesscontrollerWtp#radio_id}
  */
  readonly radioId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#spectrum_analysis WirelesscontrollerWtp#spectrum_analysis}
  */
  readonly spectrumAnalysis?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#vap1 WirelesscontrollerWtp#vap1}
  */
  readonly vap1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#vap2 WirelesscontrollerWtp#vap2}
  */
  readonly vap2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#vap3 WirelesscontrollerWtp#vap3}
  */
  readonly vap3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#vap4 WirelesscontrollerWtp#vap4}
  */
  readonly vap4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#vap5 WirelesscontrollerWtp#vap5}
  */
  readonly vap5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#vap6 WirelesscontrollerWtp#vap6}
  */
  readonly vap6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#vap7 WirelesscontrollerWtp#vap7}
  */
  readonly vap7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#vap8 WirelesscontrollerWtp#vap8}
  */
  readonly vap8?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#vap_all WirelesscontrollerWtp#vap_all}
  */
  readonly vapAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#vaps WirelesscontrollerWtp#vaps}
  */
  readonly vaps?: string[];
}

export function wirelesscontrollerWtpRadio1ToTerraform(struct?: WirelesscontrollerWtpRadio1OutputReference | WirelesscontrollerWtpRadio1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_power_high: cdktf.numberToTerraform(struct!.autoPowerHigh),
    auto_power_level: cdktf.stringToTerraform(struct!.autoPowerLevel),
    auto_power_low: cdktf.numberToTerraform(struct!.autoPowerLow),
    auto_power_target: cdktf.stringToTerraform(struct!.autoPowerTarget),
    band: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.band),
    channel: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channel),
    drma_manual_mode: cdktf.stringToTerraform(struct!.drmaManualMode),
    override_analysis: cdktf.stringToTerraform(struct!.overrideAnalysis),
    override_band: cdktf.stringToTerraform(struct!.overrideBand),
    override_channel: cdktf.stringToTerraform(struct!.overrideChannel),
    override_txpower: cdktf.stringToTerraform(struct!.overrideTxpower),
    override_vaps: cdktf.stringToTerraform(struct!.overrideVaps),
    power_level: cdktf.numberToTerraform(struct!.powerLevel),
    power_mode: cdktf.stringToTerraform(struct!.powerMode),
    power_value: cdktf.numberToTerraform(struct!.powerValue),
    radio_id: cdktf.numberToTerraform(struct!.radioId),
    spectrum_analysis: cdktf.stringToTerraform(struct!.spectrumAnalysis),
    vap1: cdktf.stringToTerraform(struct!.vap1),
    vap2: cdktf.stringToTerraform(struct!.vap2),
    vap3: cdktf.stringToTerraform(struct!.vap3),
    vap4: cdktf.stringToTerraform(struct!.vap4),
    vap5: cdktf.stringToTerraform(struct!.vap5),
    vap6: cdktf.stringToTerraform(struct!.vap6),
    vap7: cdktf.stringToTerraform(struct!.vap7),
    vap8: cdktf.stringToTerraform(struct!.vap8),
    vap_all: cdktf.stringToTerraform(struct!.vapAll),
    vaps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vaps),
  }
}


export function wirelesscontrollerWtpRadio1ToHclTerraform(struct?: WirelesscontrollerWtpRadio1OutputReference | WirelesscontrollerWtpRadio1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_power_high: {
      value: cdktf.numberToHclTerraform(struct!.autoPowerHigh),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auto_power_level: {
      value: cdktf.stringToHclTerraform(struct!.autoPowerLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_power_low: {
      value: cdktf.numberToHclTerraform(struct!.autoPowerLow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auto_power_target: {
      value: cdktf.stringToHclTerraform(struct!.autoPowerTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    band: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.band),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    channel: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channel),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    drma_manual_mode: {
      value: cdktf.stringToHclTerraform(struct!.drmaManualMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_analysis: {
      value: cdktf.stringToHclTerraform(struct!.overrideAnalysis),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_band: {
      value: cdktf.stringToHclTerraform(struct!.overrideBand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_channel: {
      value: cdktf.stringToHclTerraform(struct!.overrideChannel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_txpower: {
      value: cdktf.stringToHclTerraform(struct!.overrideTxpower),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_vaps: {
      value: cdktf.stringToHclTerraform(struct!.overrideVaps),
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
    power_mode: {
      value: cdktf.stringToHclTerraform(struct!.powerMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    power_value: {
      value: cdktf.numberToHclTerraform(struct!.powerValue),
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
    spectrum_analysis: {
      value: cdktf.stringToHclTerraform(struct!.spectrumAnalysis),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vap1: {
      value: cdktf.stringToHclTerraform(struct!.vap1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vap2: {
      value: cdktf.stringToHclTerraform(struct!.vap2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vap3: {
      value: cdktf.stringToHclTerraform(struct!.vap3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vap4: {
      value: cdktf.stringToHclTerraform(struct!.vap4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vap5: {
      value: cdktf.stringToHclTerraform(struct!.vap5),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vap6: {
      value: cdktf.stringToHclTerraform(struct!.vap6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vap7: {
      value: cdktf.stringToHclTerraform(struct!.vap7),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vap8: {
      value: cdktf.stringToHclTerraform(struct!.vap8),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vap_all: {
      value: cdktf.stringToHclTerraform(struct!.vapAll),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vaps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vaps),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerWtpRadio1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WirelesscontrollerWtpRadio1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoPowerHigh !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoPowerHigh = this._autoPowerHigh;
    }
    if (this._autoPowerLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoPowerLevel = this._autoPowerLevel;
    }
    if (this._autoPowerLow !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoPowerLow = this._autoPowerLow;
    }
    if (this._autoPowerTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoPowerTarget = this._autoPowerTarget;
    }
    if (this._band !== undefined) {
      hasAnyValues = true;
      internalValueResult.band = this._band;
    }
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._drmaManualMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.drmaManualMode = this._drmaManualMode;
    }
    if (this._overrideAnalysis !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideAnalysis = this._overrideAnalysis;
    }
    if (this._overrideBand !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideBand = this._overrideBand;
    }
    if (this._overrideChannel !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideChannel = this._overrideChannel;
    }
    if (this._overrideTxpower !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideTxpower = this._overrideTxpower;
    }
    if (this._overrideVaps !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideVaps = this._overrideVaps;
    }
    if (this._powerLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerLevel = this._powerLevel;
    }
    if (this._powerMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerMode = this._powerMode;
    }
    if (this._powerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerValue = this._powerValue;
    }
    if (this._radioId !== undefined) {
      hasAnyValues = true;
      internalValueResult.radioId = this._radioId;
    }
    if (this._spectrumAnalysis !== undefined) {
      hasAnyValues = true;
      internalValueResult.spectrumAnalysis = this._spectrumAnalysis;
    }
    if (this._vap1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vap1 = this._vap1;
    }
    if (this._vap2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vap2 = this._vap2;
    }
    if (this._vap3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vap3 = this._vap3;
    }
    if (this._vap4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vap4 = this._vap4;
    }
    if (this._vap5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vap5 = this._vap5;
    }
    if (this._vap6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vap6 = this._vap6;
    }
    if (this._vap7 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vap7 = this._vap7;
    }
    if (this._vap8 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vap8 = this._vap8;
    }
    if (this._vapAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.vapAll = this._vapAll;
    }
    if (this._vaps !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaps = this._vaps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerWtpRadio1 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoPowerHigh = undefined;
      this._autoPowerLevel = undefined;
      this._autoPowerLow = undefined;
      this._autoPowerTarget = undefined;
      this._band = undefined;
      this._channel = undefined;
      this._drmaManualMode = undefined;
      this._overrideAnalysis = undefined;
      this._overrideBand = undefined;
      this._overrideChannel = undefined;
      this._overrideTxpower = undefined;
      this._overrideVaps = undefined;
      this._powerLevel = undefined;
      this._powerMode = undefined;
      this._powerValue = undefined;
      this._radioId = undefined;
      this._spectrumAnalysis = undefined;
      this._vap1 = undefined;
      this._vap2 = undefined;
      this._vap3 = undefined;
      this._vap4 = undefined;
      this._vap5 = undefined;
      this._vap6 = undefined;
      this._vap7 = undefined;
      this._vap8 = undefined;
      this._vapAll = undefined;
      this._vaps = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoPowerHigh = value.autoPowerHigh;
      this._autoPowerLevel = value.autoPowerLevel;
      this._autoPowerLow = value.autoPowerLow;
      this._autoPowerTarget = value.autoPowerTarget;
      this._band = value.band;
      this._channel = value.channel;
      this._drmaManualMode = value.drmaManualMode;
      this._overrideAnalysis = value.overrideAnalysis;
      this._overrideBand = value.overrideBand;
      this._overrideChannel = value.overrideChannel;
      this._overrideTxpower = value.overrideTxpower;
      this._overrideVaps = value.overrideVaps;
      this._powerLevel = value.powerLevel;
      this._powerMode = value.powerMode;
      this._powerValue = value.powerValue;
      this._radioId = value.radioId;
      this._spectrumAnalysis = value.spectrumAnalysis;
      this._vap1 = value.vap1;
      this._vap2 = value.vap2;
      this._vap3 = value.vap3;
      this._vap4 = value.vap4;
      this._vap5 = value.vap5;
      this._vap6 = value.vap6;
      this._vap7 = value.vap7;
      this._vap8 = value.vap8;
      this._vapAll = value.vapAll;
      this._vaps = value.vaps;
    }
  }

  // auto_power_high - computed: false, optional: true, required: false
  private _autoPowerHigh?: number; 
  public get autoPowerHigh() {
    return this.getNumberAttribute('auto_power_high');
  }
  public set autoPowerHigh(value: number) {
    this._autoPowerHigh = value;
  }
  public resetAutoPowerHigh() {
    this._autoPowerHigh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPowerHighInput() {
    return this._autoPowerHigh;
  }

  // auto_power_level - computed: false, optional: true, required: false
  private _autoPowerLevel?: string; 
  public get autoPowerLevel() {
    return this.getStringAttribute('auto_power_level');
  }
  public set autoPowerLevel(value: string) {
    this._autoPowerLevel = value;
  }
  public resetAutoPowerLevel() {
    this._autoPowerLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPowerLevelInput() {
    return this._autoPowerLevel;
  }

  // auto_power_low - computed: false, optional: true, required: false
  private _autoPowerLow?: number; 
  public get autoPowerLow() {
    return this.getNumberAttribute('auto_power_low');
  }
  public set autoPowerLow(value: number) {
    this._autoPowerLow = value;
  }
  public resetAutoPowerLow() {
    this._autoPowerLow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPowerLowInput() {
    return this._autoPowerLow;
  }

  // auto_power_target - computed: true, optional: true, required: false
  private _autoPowerTarget?: string; 
  public get autoPowerTarget() {
    return this.getStringAttribute('auto_power_target');
  }
  public set autoPowerTarget(value: string) {
    this._autoPowerTarget = value;
  }
  public resetAutoPowerTarget() {
    this._autoPowerTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPowerTargetInput() {
    return this._autoPowerTarget;
  }

  // band - computed: true, optional: true, required: false
  private _band?: string[]; 
  public get band() {
    return cdktf.Fn.tolist(this.getListAttribute('band'));
  }
  public set band(value: string[]) {
    this._band = value;
  }
  public resetBand() {
    this._band = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandInput() {
    return this._band;
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

  // drma_manual_mode - computed: true, optional: true, required: false
  private _drmaManualMode?: string; 
  public get drmaManualMode() {
    return this.getStringAttribute('drma_manual_mode');
  }
  public set drmaManualMode(value: string) {
    this._drmaManualMode = value;
  }
  public resetDrmaManualMode() {
    this._drmaManualMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drmaManualModeInput() {
    return this._drmaManualMode;
  }

  // override_analysis - computed: false, optional: true, required: false
  private _overrideAnalysis?: string; 
  public get overrideAnalysis() {
    return this.getStringAttribute('override_analysis');
  }
  public set overrideAnalysis(value: string) {
    this._overrideAnalysis = value;
  }
  public resetOverrideAnalysis() {
    this._overrideAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideAnalysisInput() {
    return this._overrideAnalysis;
  }

  // override_band - computed: true, optional: true, required: false
  private _overrideBand?: string; 
  public get overrideBand() {
    return this.getStringAttribute('override_band');
  }
  public set overrideBand(value: string) {
    this._overrideBand = value;
  }
  public resetOverrideBand() {
    this._overrideBand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideBandInput() {
    return this._overrideBand;
  }

  // override_channel - computed: true, optional: true, required: false
  private _overrideChannel?: string; 
  public get overrideChannel() {
    return this.getStringAttribute('override_channel');
  }
  public set overrideChannel(value: string) {
    this._overrideChannel = value;
  }
  public resetOverrideChannel() {
    this._overrideChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideChannelInput() {
    return this._overrideChannel;
  }

  // override_txpower - computed: true, optional: true, required: false
  private _overrideTxpower?: string; 
  public get overrideTxpower() {
    return this.getStringAttribute('override_txpower');
  }
  public set overrideTxpower(value: string) {
    this._overrideTxpower = value;
  }
  public resetOverrideTxpower() {
    this._overrideTxpower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideTxpowerInput() {
    return this._overrideTxpower;
  }

  // override_vaps - computed: true, optional: true, required: false
  private _overrideVaps?: string; 
  public get overrideVaps() {
    return this.getStringAttribute('override_vaps');
  }
  public set overrideVaps(value: string) {
    this._overrideVaps = value;
  }
  public resetOverrideVaps() {
    this._overrideVaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideVapsInput() {
    return this._overrideVaps;
  }

  // power_level - computed: false, optional: true, required: false
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

  // power_mode - computed: true, optional: true, required: false
  private _powerMode?: string; 
  public get powerMode() {
    return this.getStringAttribute('power_mode');
  }
  public set powerMode(value: string) {
    this._powerMode = value;
  }
  public resetPowerMode() {
    this._powerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerModeInput() {
    return this._powerMode;
  }

  // power_value - computed: false, optional: true, required: false
  private _powerValue?: number; 
  public get powerValue() {
    return this.getNumberAttribute('power_value');
  }
  public set powerValue(value: number) {
    this._powerValue = value;
  }
  public resetPowerValue() {
    this._powerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerValueInput() {
    return this._powerValue;
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

  // spectrum_analysis - computed: false, optional: true, required: false
  private _spectrumAnalysis?: string; 
  public get spectrumAnalysis() {
    return this.getStringAttribute('spectrum_analysis');
  }
  public set spectrumAnalysis(value: string) {
    this._spectrumAnalysis = value;
  }
  public resetSpectrumAnalysis() {
    this._spectrumAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spectrumAnalysisInput() {
    return this._spectrumAnalysis;
  }

  // vap1 - computed: false, optional: true, required: false
  private _vap1?: string; 
  public get vap1() {
    return this.getStringAttribute('vap1');
  }
  public set vap1(value: string) {
    this._vap1 = value;
  }
  public resetVap1() {
    this._vap1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap1Input() {
    return this._vap1;
  }

  // vap2 - computed: false, optional: true, required: false
  private _vap2?: string; 
  public get vap2() {
    return this.getStringAttribute('vap2');
  }
  public set vap2(value: string) {
    this._vap2 = value;
  }
  public resetVap2() {
    this._vap2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap2Input() {
    return this._vap2;
  }

  // vap3 - computed: false, optional: true, required: false
  private _vap3?: string; 
  public get vap3() {
    return this.getStringAttribute('vap3');
  }
  public set vap3(value: string) {
    this._vap3 = value;
  }
  public resetVap3() {
    this._vap3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap3Input() {
    return this._vap3;
  }

  // vap4 - computed: false, optional: true, required: false
  private _vap4?: string; 
  public get vap4() {
    return this.getStringAttribute('vap4');
  }
  public set vap4(value: string) {
    this._vap4 = value;
  }
  public resetVap4() {
    this._vap4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap4Input() {
    return this._vap4;
  }

  // vap5 - computed: false, optional: true, required: false
  private _vap5?: string; 
  public get vap5() {
    return this.getStringAttribute('vap5');
  }
  public set vap5(value: string) {
    this._vap5 = value;
  }
  public resetVap5() {
    this._vap5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap5Input() {
    return this._vap5;
  }

  // vap6 - computed: false, optional: true, required: false
  private _vap6?: string; 
  public get vap6() {
    return this.getStringAttribute('vap6');
  }
  public set vap6(value: string) {
    this._vap6 = value;
  }
  public resetVap6() {
    this._vap6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap6Input() {
    return this._vap6;
  }

  // vap7 - computed: false, optional: true, required: false
  private _vap7?: string; 
  public get vap7() {
    return this.getStringAttribute('vap7');
  }
  public set vap7(value: string) {
    this._vap7 = value;
  }
  public resetVap7() {
    this._vap7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap7Input() {
    return this._vap7;
  }

  // vap8 - computed: false, optional: true, required: false
  private _vap8?: string; 
  public get vap8() {
    return this.getStringAttribute('vap8');
  }
  public set vap8(value: string) {
    this._vap8 = value;
  }
  public resetVap8() {
    this._vap8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap8Input() {
    return this._vap8;
  }

  // vap_all - computed: false, optional: true, required: false
  private _vapAll?: string; 
  public get vapAll() {
    return this.getStringAttribute('vap_all');
  }
  public set vapAll(value: string) {
    this._vapAll = value;
  }
  public resetVapAll() {
    this._vapAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vapAllInput() {
    return this._vapAll;
  }

  // vaps - computed: true, optional: true, required: false
  private _vaps?: string[]; 
  public get vaps() {
    return cdktf.Fn.tolist(this.getListAttribute('vaps'));
  }
  public set vaps(value: string[]) {
    this._vaps = value;
  }
  public resetVaps() {
    this._vaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vapsInput() {
    return this._vaps;
  }
}
export interface WirelesscontrollerWtpRadio2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#auto_power_high WirelesscontrollerWtp#auto_power_high}
  */
  readonly autoPowerHigh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#auto_power_level WirelesscontrollerWtp#auto_power_level}
  */
  readonly autoPowerLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#auto_power_low WirelesscontrollerWtp#auto_power_low}
  */
  readonly autoPowerLow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#auto_power_target WirelesscontrollerWtp#auto_power_target}
  */
  readonly autoPowerTarget?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#band WirelesscontrollerWtp#band}
  */
  readonly band?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#channel WirelesscontrollerWtp#channel}
  */
  readonly channel?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#drma_manual_mode WirelesscontrollerWtp#drma_manual_mode}
  */
  readonly drmaManualMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#override_analysis WirelesscontrollerWtp#override_analysis}
  */
  readonly overrideAnalysis?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#override_band WirelesscontrollerWtp#override_band}
  */
  readonly overrideBand?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#override_channel WirelesscontrollerWtp#override_channel}
  */
  readonly overrideChannel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#override_txpower WirelesscontrollerWtp#override_txpower}
  */
  readonly overrideTxpower?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#override_vaps WirelesscontrollerWtp#override_vaps}
  */
  readonly overrideVaps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#power_level WirelesscontrollerWtp#power_level}
  */
  readonly powerLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#power_mode WirelesscontrollerWtp#power_mode}
  */
  readonly powerMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#power_value WirelesscontrollerWtp#power_value}
  */
  readonly powerValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#radio_id WirelesscontrollerWtp#radio_id}
  */
  readonly radioId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#spectrum_analysis WirelesscontrollerWtp#spectrum_analysis}
  */
  readonly spectrumAnalysis?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#vap1 WirelesscontrollerWtp#vap1}
  */
  readonly vap1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#vap2 WirelesscontrollerWtp#vap2}
  */
  readonly vap2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#vap3 WirelesscontrollerWtp#vap3}
  */
  readonly vap3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#vap4 WirelesscontrollerWtp#vap4}
  */
  readonly vap4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#vap5 WirelesscontrollerWtp#vap5}
  */
  readonly vap5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#vap6 WirelesscontrollerWtp#vap6}
  */
  readonly vap6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#vap7 WirelesscontrollerWtp#vap7}
  */
  readonly vap7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#vap8 WirelesscontrollerWtp#vap8}
  */
  readonly vap8?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#vap_all WirelesscontrollerWtp#vap_all}
  */
  readonly vapAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#vaps WirelesscontrollerWtp#vaps}
  */
  readonly vaps?: string[];
}

export function wirelesscontrollerWtpRadio2ToTerraform(struct?: WirelesscontrollerWtpRadio2OutputReference | WirelesscontrollerWtpRadio2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_power_high: cdktf.numberToTerraform(struct!.autoPowerHigh),
    auto_power_level: cdktf.stringToTerraform(struct!.autoPowerLevel),
    auto_power_low: cdktf.numberToTerraform(struct!.autoPowerLow),
    auto_power_target: cdktf.stringToTerraform(struct!.autoPowerTarget),
    band: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.band),
    channel: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channel),
    drma_manual_mode: cdktf.stringToTerraform(struct!.drmaManualMode),
    override_analysis: cdktf.stringToTerraform(struct!.overrideAnalysis),
    override_band: cdktf.stringToTerraform(struct!.overrideBand),
    override_channel: cdktf.stringToTerraform(struct!.overrideChannel),
    override_txpower: cdktf.stringToTerraform(struct!.overrideTxpower),
    override_vaps: cdktf.stringToTerraform(struct!.overrideVaps),
    power_level: cdktf.numberToTerraform(struct!.powerLevel),
    power_mode: cdktf.stringToTerraform(struct!.powerMode),
    power_value: cdktf.numberToTerraform(struct!.powerValue),
    radio_id: cdktf.numberToTerraform(struct!.radioId),
    spectrum_analysis: cdktf.stringToTerraform(struct!.spectrumAnalysis),
    vap1: cdktf.stringToTerraform(struct!.vap1),
    vap2: cdktf.stringToTerraform(struct!.vap2),
    vap3: cdktf.stringToTerraform(struct!.vap3),
    vap4: cdktf.stringToTerraform(struct!.vap4),
    vap5: cdktf.stringToTerraform(struct!.vap5),
    vap6: cdktf.stringToTerraform(struct!.vap6),
    vap7: cdktf.stringToTerraform(struct!.vap7),
    vap8: cdktf.stringToTerraform(struct!.vap8),
    vap_all: cdktf.stringToTerraform(struct!.vapAll),
    vaps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vaps),
  }
}


export function wirelesscontrollerWtpRadio2ToHclTerraform(struct?: WirelesscontrollerWtpRadio2OutputReference | WirelesscontrollerWtpRadio2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_power_high: {
      value: cdktf.numberToHclTerraform(struct!.autoPowerHigh),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auto_power_level: {
      value: cdktf.stringToHclTerraform(struct!.autoPowerLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_power_low: {
      value: cdktf.numberToHclTerraform(struct!.autoPowerLow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auto_power_target: {
      value: cdktf.stringToHclTerraform(struct!.autoPowerTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    band: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.band),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    channel: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channel),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    drma_manual_mode: {
      value: cdktf.stringToHclTerraform(struct!.drmaManualMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_analysis: {
      value: cdktf.stringToHclTerraform(struct!.overrideAnalysis),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_band: {
      value: cdktf.stringToHclTerraform(struct!.overrideBand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_channel: {
      value: cdktf.stringToHclTerraform(struct!.overrideChannel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_txpower: {
      value: cdktf.stringToHclTerraform(struct!.overrideTxpower),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_vaps: {
      value: cdktf.stringToHclTerraform(struct!.overrideVaps),
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
    power_mode: {
      value: cdktf.stringToHclTerraform(struct!.powerMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    power_value: {
      value: cdktf.numberToHclTerraform(struct!.powerValue),
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
    spectrum_analysis: {
      value: cdktf.stringToHclTerraform(struct!.spectrumAnalysis),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vap1: {
      value: cdktf.stringToHclTerraform(struct!.vap1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vap2: {
      value: cdktf.stringToHclTerraform(struct!.vap2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vap3: {
      value: cdktf.stringToHclTerraform(struct!.vap3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vap4: {
      value: cdktf.stringToHclTerraform(struct!.vap4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vap5: {
      value: cdktf.stringToHclTerraform(struct!.vap5),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vap6: {
      value: cdktf.stringToHclTerraform(struct!.vap6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vap7: {
      value: cdktf.stringToHclTerraform(struct!.vap7),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vap8: {
      value: cdktf.stringToHclTerraform(struct!.vap8),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vap_all: {
      value: cdktf.stringToHclTerraform(struct!.vapAll),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vaps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vaps),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerWtpRadio2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WirelesscontrollerWtpRadio2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoPowerHigh !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoPowerHigh = this._autoPowerHigh;
    }
    if (this._autoPowerLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoPowerLevel = this._autoPowerLevel;
    }
    if (this._autoPowerLow !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoPowerLow = this._autoPowerLow;
    }
    if (this._autoPowerTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoPowerTarget = this._autoPowerTarget;
    }
    if (this._band !== undefined) {
      hasAnyValues = true;
      internalValueResult.band = this._band;
    }
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._drmaManualMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.drmaManualMode = this._drmaManualMode;
    }
    if (this._overrideAnalysis !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideAnalysis = this._overrideAnalysis;
    }
    if (this._overrideBand !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideBand = this._overrideBand;
    }
    if (this._overrideChannel !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideChannel = this._overrideChannel;
    }
    if (this._overrideTxpower !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideTxpower = this._overrideTxpower;
    }
    if (this._overrideVaps !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideVaps = this._overrideVaps;
    }
    if (this._powerLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerLevel = this._powerLevel;
    }
    if (this._powerMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerMode = this._powerMode;
    }
    if (this._powerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerValue = this._powerValue;
    }
    if (this._radioId !== undefined) {
      hasAnyValues = true;
      internalValueResult.radioId = this._radioId;
    }
    if (this._spectrumAnalysis !== undefined) {
      hasAnyValues = true;
      internalValueResult.spectrumAnalysis = this._spectrumAnalysis;
    }
    if (this._vap1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vap1 = this._vap1;
    }
    if (this._vap2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vap2 = this._vap2;
    }
    if (this._vap3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vap3 = this._vap3;
    }
    if (this._vap4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vap4 = this._vap4;
    }
    if (this._vap5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vap5 = this._vap5;
    }
    if (this._vap6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vap6 = this._vap6;
    }
    if (this._vap7 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vap7 = this._vap7;
    }
    if (this._vap8 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vap8 = this._vap8;
    }
    if (this._vapAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.vapAll = this._vapAll;
    }
    if (this._vaps !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaps = this._vaps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerWtpRadio2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoPowerHigh = undefined;
      this._autoPowerLevel = undefined;
      this._autoPowerLow = undefined;
      this._autoPowerTarget = undefined;
      this._band = undefined;
      this._channel = undefined;
      this._drmaManualMode = undefined;
      this._overrideAnalysis = undefined;
      this._overrideBand = undefined;
      this._overrideChannel = undefined;
      this._overrideTxpower = undefined;
      this._overrideVaps = undefined;
      this._powerLevel = undefined;
      this._powerMode = undefined;
      this._powerValue = undefined;
      this._radioId = undefined;
      this._spectrumAnalysis = undefined;
      this._vap1 = undefined;
      this._vap2 = undefined;
      this._vap3 = undefined;
      this._vap4 = undefined;
      this._vap5 = undefined;
      this._vap6 = undefined;
      this._vap7 = undefined;
      this._vap8 = undefined;
      this._vapAll = undefined;
      this._vaps = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoPowerHigh = value.autoPowerHigh;
      this._autoPowerLevel = value.autoPowerLevel;
      this._autoPowerLow = value.autoPowerLow;
      this._autoPowerTarget = value.autoPowerTarget;
      this._band = value.band;
      this._channel = value.channel;
      this._drmaManualMode = value.drmaManualMode;
      this._overrideAnalysis = value.overrideAnalysis;
      this._overrideBand = value.overrideBand;
      this._overrideChannel = value.overrideChannel;
      this._overrideTxpower = value.overrideTxpower;
      this._overrideVaps = value.overrideVaps;
      this._powerLevel = value.powerLevel;
      this._powerMode = value.powerMode;
      this._powerValue = value.powerValue;
      this._radioId = value.radioId;
      this._spectrumAnalysis = value.spectrumAnalysis;
      this._vap1 = value.vap1;
      this._vap2 = value.vap2;
      this._vap3 = value.vap3;
      this._vap4 = value.vap4;
      this._vap5 = value.vap5;
      this._vap6 = value.vap6;
      this._vap7 = value.vap7;
      this._vap8 = value.vap8;
      this._vapAll = value.vapAll;
      this._vaps = value.vaps;
    }
  }

  // auto_power_high - computed: false, optional: true, required: false
  private _autoPowerHigh?: number; 
  public get autoPowerHigh() {
    return this.getNumberAttribute('auto_power_high');
  }
  public set autoPowerHigh(value: number) {
    this._autoPowerHigh = value;
  }
  public resetAutoPowerHigh() {
    this._autoPowerHigh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPowerHighInput() {
    return this._autoPowerHigh;
  }

  // auto_power_level - computed: false, optional: true, required: false
  private _autoPowerLevel?: string; 
  public get autoPowerLevel() {
    return this.getStringAttribute('auto_power_level');
  }
  public set autoPowerLevel(value: string) {
    this._autoPowerLevel = value;
  }
  public resetAutoPowerLevel() {
    this._autoPowerLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPowerLevelInput() {
    return this._autoPowerLevel;
  }

  // auto_power_low - computed: false, optional: true, required: false
  private _autoPowerLow?: number; 
  public get autoPowerLow() {
    return this.getNumberAttribute('auto_power_low');
  }
  public set autoPowerLow(value: number) {
    this._autoPowerLow = value;
  }
  public resetAutoPowerLow() {
    this._autoPowerLow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPowerLowInput() {
    return this._autoPowerLow;
  }

  // auto_power_target - computed: true, optional: true, required: false
  private _autoPowerTarget?: string; 
  public get autoPowerTarget() {
    return this.getStringAttribute('auto_power_target');
  }
  public set autoPowerTarget(value: string) {
    this._autoPowerTarget = value;
  }
  public resetAutoPowerTarget() {
    this._autoPowerTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPowerTargetInput() {
    return this._autoPowerTarget;
  }

  // band - computed: true, optional: true, required: false
  private _band?: string[]; 
  public get band() {
    return cdktf.Fn.tolist(this.getListAttribute('band'));
  }
  public set band(value: string[]) {
    this._band = value;
  }
  public resetBand() {
    this._band = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandInput() {
    return this._band;
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

  // drma_manual_mode - computed: false, optional: true, required: false
  private _drmaManualMode?: string; 
  public get drmaManualMode() {
    return this.getStringAttribute('drma_manual_mode');
  }
  public set drmaManualMode(value: string) {
    this._drmaManualMode = value;
  }
  public resetDrmaManualMode() {
    this._drmaManualMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drmaManualModeInput() {
    return this._drmaManualMode;
  }

  // override_analysis - computed: false, optional: true, required: false
  private _overrideAnalysis?: string; 
  public get overrideAnalysis() {
    return this.getStringAttribute('override_analysis');
  }
  public set overrideAnalysis(value: string) {
    this._overrideAnalysis = value;
  }
  public resetOverrideAnalysis() {
    this._overrideAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideAnalysisInput() {
    return this._overrideAnalysis;
  }

  // override_band - computed: true, optional: true, required: false
  private _overrideBand?: string; 
  public get overrideBand() {
    return this.getStringAttribute('override_band');
  }
  public set overrideBand(value: string) {
    this._overrideBand = value;
  }
  public resetOverrideBand() {
    this._overrideBand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideBandInput() {
    return this._overrideBand;
  }

  // override_channel - computed: true, optional: true, required: false
  private _overrideChannel?: string; 
  public get overrideChannel() {
    return this.getStringAttribute('override_channel');
  }
  public set overrideChannel(value: string) {
    this._overrideChannel = value;
  }
  public resetOverrideChannel() {
    this._overrideChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideChannelInput() {
    return this._overrideChannel;
  }

  // override_txpower - computed: true, optional: true, required: false
  private _overrideTxpower?: string; 
  public get overrideTxpower() {
    return this.getStringAttribute('override_txpower');
  }
  public set overrideTxpower(value: string) {
    this._overrideTxpower = value;
  }
  public resetOverrideTxpower() {
    this._overrideTxpower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideTxpowerInput() {
    return this._overrideTxpower;
  }

  // override_vaps - computed: true, optional: true, required: false
  private _overrideVaps?: string; 
  public get overrideVaps() {
    return this.getStringAttribute('override_vaps');
  }
  public set overrideVaps(value: string) {
    this._overrideVaps = value;
  }
  public resetOverrideVaps() {
    this._overrideVaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideVapsInput() {
    return this._overrideVaps;
  }

  // power_level - computed: false, optional: true, required: false
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

  // power_mode - computed: true, optional: true, required: false
  private _powerMode?: string; 
  public get powerMode() {
    return this.getStringAttribute('power_mode');
  }
  public set powerMode(value: string) {
    this._powerMode = value;
  }
  public resetPowerMode() {
    this._powerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerModeInput() {
    return this._powerMode;
  }

  // power_value - computed: false, optional: true, required: false
  private _powerValue?: number; 
  public get powerValue() {
    return this.getNumberAttribute('power_value');
  }
  public set powerValue(value: number) {
    this._powerValue = value;
  }
  public resetPowerValue() {
    this._powerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerValueInput() {
    return this._powerValue;
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

  // spectrum_analysis - computed: false, optional: true, required: false
  private _spectrumAnalysis?: string; 
  public get spectrumAnalysis() {
    return this.getStringAttribute('spectrum_analysis');
  }
  public set spectrumAnalysis(value: string) {
    this._spectrumAnalysis = value;
  }
  public resetSpectrumAnalysis() {
    this._spectrumAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spectrumAnalysisInput() {
    return this._spectrumAnalysis;
  }

  // vap1 - computed: false, optional: true, required: false
  private _vap1?: string; 
  public get vap1() {
    return this.getStringAttribute('vap1');
  }
  public set vap1(value: string) {
    this._vap1 = value;
  }
  public resetVap1() {
    this._vap1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap1Input() {
    return this._vap1;
  }

  // vap2 - computed: false, optional: true, required: false
  private _vap2?: string; 
  public get vap2() {
    return this.getStringAttribute('vap2');
  }
  public set vap2(value: string) {
    this._vap2 = value;
  }
  public resetVap2() {
    this._vap2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap2Input() {
    return this._vap2;
  }

  // vap3 - computed: false, optional: true, required: false
  private _vap3?: string; 
  public get vap3() {
    return this.getStringAttribute('vap3');
  }
  public set vap3(value: string) {
    this._vap3 = value;
  }
  public resetVap3() {
    this._vap3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap3Input() {
    return this._vap3;
  }

  // vap4 - computed: false, optional: true, required: false
  private _vap4?: string; 
  public get vap4() {
    return this.getStringAttribute('vap4');
  }
  public set vap4(value: string) {
    this._vap4 = value;
  }
  public resetVap4() {
    this._vap4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap4Input() {
    return this._vap4;
  }

  // vap5 - computed: false, optional: true, required: false
  private _vap5?: string; 
  public get vap5() {
    return this.getStringAttribute('vap5');
  }
  public set vap5(value: string) {
    this._vap5 = value;
  }
  public resetVap5() {
    this._vap5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap5Input() {
    return this._vap5;
  }

  // vap6 - computed: false, optional: true, required: false
  private _vap6?: string; 
  public get vap6() {
    return this.getStringAttribute('vap6');
  }
  public set vap6(value: string) {
    this._vap6 = value;
  }
  public resetVap6() {
    this._vap6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap6Input() {
    return this._vap6;
  }

  // vap7 - computed: false, optional: true, required: false
  private _vap7?: string; 
  public get vap7() {
    return this.getStringAttribute('vap7');
  }
  public set vap7(value: string) {
    this._vap7 = value;
  }
  public resetVap7() {
    this._vap7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap7Input() {
    return this._vap7;
  }

  // vap8 - computed: false, optional: true, required: false
  private _vap8?: string; 
  public get vap8() {
    return this.getStringAttribute('vap8');
  }
  public set vap8(value: string) {
    this._vap8 = value;
  }
  public resetVap8() {
    this._vap8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap8Input() {
    return this._vap8;
  }

  // vap_all - computed: false, optional: true, required: false
  private _vapAll?: string; 
  public get vapAll() {
    return this.getStringAttribute('vap_all');
  }
  public set vapAll(value: string) {
    this._vapAll = value;
  }
  public resetVapAll() {
    this._vapAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vapAllInput() {
    return this._vapAll;
  }

  // vaps - computed: true, optional: true, required: false
  private _vaps?: string[]; 
  public get vaps() {
    return cdktf.Fn.tolist(this.getListAttribute('vaps'));
  }
  public set vaps(value: string[]) {
    this._vaps = value;
  }
  public resetVaps() {
    this._vaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vapsInput() {
    return this._vaps;
  }
}
export interface WirelesscontrollerWtpRadio3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#auto_power_high WirelesscontrollerWtp#auto_power_high}
  */
  readonly autoPowerHigh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#auto_power_level WirelesscontrollerWtp#auto_power_level}
  */
  readonly autoPowerLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#auto_power_low WirelesscontrollerWtp#auto_power_low}
  */
  readonly autoPowerLow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#auto_power_target WirelesscontrollerWtp#auto_power_target}
  */
  readonly autoPowerTarget?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#band WirelesscontrollerWtp#band}
  */
  readonly band?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#channel WirelesscontrollerWtp#channel}
  */
  readonly channel?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#drma_manual_mode WirelesscontrollerWtp#drma_manual_mode}
  */
  readonly drmaManualMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#override_analysis WirelesscontrollerWtp#override_analysis}
  */
  readonly overrideAnalysis?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#override_band WirelesscontrollerWtp#override_band}
  */
  readonly overrideBand?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#override_channel WirelesscontrollerWtp#override_channel}
  */
  readonly overrideChannel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#override_txpower WirelesscontrollerWtp#override_txpower}
  */
  readonly overrideTxpower?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#override_vaps WirelesscontrollerWtp#override_vaps}
  */
  readonly overrideVaps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#power_level WirelesscontrollerWtp#power_level}
  */
  readonly powerLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#power_mode WirelesscontrollerWtp#power_mode}
  */
  readonly powerMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#power_value WirelesscontrollerWtp#power_value}
  */
  readonly powerValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#radio_id WirelesscontrollerWtp#radio_id}
  */
  readonly radioId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#spectrum_analysis WirelesscontrollerWtp#spectrum_analysis}
  */
  readonly spectrumAnalysis?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#vap1 WirelesscontrollerWtp#vap1}
  */
  readonly vap1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#vap2 WirelesscontrollerWtp#vap2}
  */
  readonly vap2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#vap3 WirelesscontrollerWtp#vap3}
  */
  readonly vap3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#vap4 WirelesscontrollerWtp#vap4}
  */
  readonly vap4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#vap5 WirelesscontrollerWtp#vap5}
  */
  readonly vap5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#vap6 WirelesscontrollerWtp#vap6}
  */
  readonly vap6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#vap7 WirelesscontrollerWtp#vap7}
  */
  readonly vap7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#vap8 WirelesscontrollerWtp#vap8}
  */
  readonly vap8?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#vap_all WirelesscontrollerWtp#vap_all}
  */
  readonly vapAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#vaps WirelesscontrollerWtp#vaps}
  */
  readonly vaps?: string[];
}

export function wirelesscontrollerWtpRadio3ToTerraform(struct?: WirelesscontrollerWtpRadio3OutputReference | WirelesscontrollerWtpRadio3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_power_high: cdktf.numberToTerraform(struct!.autoPowerHigh),
    auto_power_level: cdktf.stringToTerraform(struct!.autoPowerLevel),
    auto_power_low: cdktf.numberToTerraform(struct!.autoPowerLow),
    auto_power_target: cdktf.stringToTerraform(struct!.autoPowerTarget),
    band: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.band),
    channel: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channel),
    drma_manual_mode: cdktf.stringToTerraform(struct!.drmaManualMode),
    override_analysis: cdktf.stringToTerraform(struct!.overrideAnalysis),
    override_band: cdktf.stringToTerraform(struct!.overrideBand),
    override_channel: cdktf.stringToTerraform(struct!.overrideChannel),
    override_txpower: cdktf.stringToTerraform(struct!.overrideTxpower),
    override_vaps: cdktf.stringToTerraform(struct!.overrideVaps),
    power_level: cdktf.numberToTerraform(struct!.powerLevel),
    power_mode: cdktf.stringToTerraform(struct!.powerMode),
    power_value: cdktf.numberToTerraform(struct!.powerValue),
    radio_id: cdktf.numberToTerraform(struct!.radioId),
    spectrum_analysis: cdktf.stringToTerraform(struct!.spectrumAnalysis),
    vap1: cdktf.stringToTerraform(struct!.vap1),
    vap2: cdktf.stringToTerraform(struct!.vap2),
    vap3: cdktf.stringToTerraform(struct!.vap3),
    vap4: cdktf.stringToTerraform(struct!.vap4),
    vap5: cdktf.stringToTerraform(struct!.vap5),
    vap6: cdktf.stringToTerraform(struct!.vap6),
    vap7: cdktf.stringToTerraform(struct!.vap7),
    vap8: cdktf.stringToTerraform(struct!.vap8),
    vap_all: cdktf.stringToTerraform(struct!.vapAll),
    vaps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vaps),
  }
}


export function wirelesscontrollerWtpRadio3ToHclTerraform(struct?: WirelesscontrollerWtpRadio3OutputReference | WirelesscontrollerWtpRadio3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_power_high: {
      value: cdktf.numberToHclTerraform(struct!.autoPowerHigh),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auto_power_level: {
      value: cdktf.stringToHclTerraform(struct!.autoPowerLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_power_low: {
      value: cdktf.numberToHclTerraform(struct!.autoPowerLow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auto_power_target: {
      value: cdktf.stringToHclTerraform(struct!.autoPowerTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    band: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.band),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    channel: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channel),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    drma_manual_mode: {
      value: cdktf.stringToHclTerraform(struct!.drmaManualMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_analysis: {
      value: cdktf.stringToHclTerraform(struct!.overrideAnalysis),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_band: {
      value: cdktf.stringToHclTerraform(struct!.overrideBand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_channel: {
      value: cdktf.stringToHclTerraform(struct!.overrideChannel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_txpower: {
      value: cdktf.stringToHclTerraform(struct!.overrideTxpower),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_vaps: {
      value: cdktf.stringToHclTerraform(struct!.overrideVaps),
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
    power_mode: {
      value: cdktf.stringToHclTerraform(struct!.powerMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    power_value: {
      value: cdktf.numberToHclTerraform(struct!.powerValue),
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
    spectrum_analysis: {
      value: cdktf.stringToHclTerraform(struct!.spectrumAnalysis),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vap1: {
      value: cdktf.stringToHclTerraform(struct!.vap1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vap2: {
      value: cdktf.stringToHclTerraform(struct!.vap2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vap3: {
      value: cdktf.stringToHclTerraform(struct!.vap3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vap4: {
      value: cdktf.stringToHclTerraform(struct!.vap4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vap5: {
      value: cdktf.stringToHclTerraform(struct!.vap5),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vap6: {
      value: cdktf.stringToHclTerraform(struct!.vap6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vap7: {
      value: cdktf.stringToHclTerraform(struct!.vap7),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vap8: {
      value: cdktf.stringToHclTerraform(struct!.vap8),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vap_all: {
      value: cdktf.stringToHclTerraform(struct!.vapAll),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vaps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vaps),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerWtpRadio3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WirelesscontrollerWtpRadio3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoPowerHigh !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoPowerHigh = this._autoPowerHigh;
    }
    if (this._autoPowerLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoPowerLevel = this._autoPowerLevel;
    }
    if (this._autoPowerLow !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoPowerLow = this._autoPowerLow;
    }
    if (this._autoPowerTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoPowerTarget = this._autoPowerTarget;
    }
    if (this._band !== undefined) {
      hasAnyValues = true;
      internalValueResult.band = this._band;
    }
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._drmaManualMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.drmaManualMode = this._drmaManualMode;
    }
    if (this._overrideAnalysis !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideAnalysis = this._overrideAnalysis;
    }
    if (this._overrideBand !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideBand = this._overrideBand;
    }
    if (this._overrideChannel !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideChannel = this._overrideChannel;
    }
    if (this._overrideTxpower !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideTxpower = this._overrideTxpower;
    }
    if (this._overrideVaps !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideVaps = this._overrideVaps;
    }
    if (this._powerLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerLevel = this._powerLevel;
    }
    if (this._powerMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerMode = this._powerMode;
    }
    if (this._powerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerValue = this._powerValue;
    }
    if (this._radioId !== undefined) {
      hasAnyValues = true;
      internalValueResult.radioId = this._radioId;
    }
    if (this._spectrumAnalysis !== undefined) {
      hasAnyValues = true;
      internalValueResult.spectrumAnalysis = this._spectrumAnalysis;
    }
    if (this._vap1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vap1 = this._vap1;
    }
    if (this._vap2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vap2 = this._vap2;
    }
    if (this._vap3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vap3 = this._vap3;
    }
    if (this._vap4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vap4 = this._vap4;
    }
    if (this._vap5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vap5 = this._vap5;
    }
    if (this._vap6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vap6 = this._vap6;
    }
    if (this._vap7 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vap7 = this._vap7;
    }
    if (this._vap8 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vap8 = this._vap8;
    }
    if (this._vapAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.vapAll = this._vapAll;
    }
    if (this._vaps !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaps = this._vaps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerWtpRadio3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoPowerHigh = undefined;
      this._autoPowerLevel = undefined;
      this._autoPowerLow = undefined;
      this._autoPowerTarget = undefined;
      this._band = undefined;
      this._channel = undefined;
      this._drmaManualMode = undefined;
      this._overrideAnalysis = undefined;
      this._overrideBand = undefined;
      this._overrideChannel = undefined;
      this._overrideTxpower = undefined;
      this._overrideVaps = undefined;
      this._powerLevel = undefined;
      this._powerMode = undefined;
      this._powerValue = undefined;
      this._radioId = undefined;
      this._spectrumAnalysis = undefined;
      this._vap1 = undefined;
      this._vap2 = undefined;
      this._vap3 = undefined;
      this._vap4 = undefined;
      this._vap5 = undefined;
      this._vap6 = undefined;
      this._vap7 = undefined;
      this._vap8 = undefined;
      this._vapAll = undefined;
      this._vaps = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoPowerHigh = value.autoPowerHigh;
      this._autoPowerLevel = value.autoPowerLevel;
      this._autoPowerLow = value.autoPowerLow;
      this._autoPowerTarget = value.autoPowerTarget;
      this._band = value.band;
      this._channel = value.channel;
      this._drmaManualMode = value.drmaManualMode;
      this._overrideAnalysis = value.overrideAnalysis;
      this._overrideBand = value.overrideBand;
      this._overrideChannel = value.overrideChannel;
      this._overrideTxpower = value.overrideTxpower;
      this._overrideVaps = value.overrideVaps;
      this._powerLevel = value.powerLevel;
      this._powerMode = value.powerMode;
      this._powerValue = value.powerValue;
      this._radioId = value.radioId;
      this._spectrumAnalysis = value.spectrumAnalysis;
      this._vap1 = value.vap1;
      this._vap2 = value.vap2;
      this._vap3 = value.vap3;
      this._vap4 = value.vap4;
      this._vap5 = value.vap5;
      this._vap6 = value.vap6;
      this._vap7 = value.vap7;
      this._vap8 = value.vap8;
      this._vapAll = value.vapAll;
      this._vaps = value.vaps;
    }
  }

  // auto_power_high - computed: false, optional: true, required: false
  private _autoPowerHigh?: number; 
  public get autoPowerHigh() {
    return this.getNumberAttribute('auto_power_high');
  }
  public set autoPowerHigh(value: number) {
    this._autoPowerHigh = value;
  }
  public resetAutoPowerHigh() {
    this._autoPowerHigh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPowerHighInput() {
    return this._autoPowerHigh;
  }

  // auto_power_level - computed: false, optional: true, required: false
  private _autoPowerLevel?: string; 
  public get autoPowerLevel() {
    return this.getStringAttribute('auto_power_level');
  }
  public set autoPowerLevel(value: string) {
    this._autoPowerLevel = value;
  }
  public resetAutoPowerLevel() {
    this._autoPowerLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPowerLevelInput() {
    return this._autoPowerLevel;
  }

  // auto_power_low - computed: false, optional: true, required: false
  private _autoPowerLow?: number; 
  public get autoPowerLow() {
    return this.getNumberAttribute('auto_power_low');
  }
  public set autoPowerLow(value: number) {
    this._autoPowerLow = value;
  }
  public resetAutoPowerLow() {
    this._autoPowerLow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPowerLowInput() {
    return this._autoPowerLow;
  }

  // auto_power_target - computed: true, optional: true, required: false
  private _autoPowerTarget?: string; 
  public get autoPowerTarget() {
    return this.getStringAttribute('auto_power_target');
  }
  public set autoPowerTarget(value: string) {
    this._autoPowerTarget = value;
  }
  public resetAutoPowerTarget() {
    this._autoPowerTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPowerTargetInput() {
    return this._autoPowerTarget;
  }

  // band - computed: true, optional: true, required: false
  private _band?: string[]; 
  public get band() {
    return cdktf.Fn.tolist(this.getListAttribute('band'));
  }
  public set band(value: string[]) {
    this._band = value;
  }
  public resetBand() {
    this._band = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandInput() {
    return this._band;
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

  // drma_manual_mode - computed: false, optional: true, required: false
  private _drmaManualMode?: string; 
  public get drmaManualMode() {
    return this.getStringAttribute('drma_manual_mode');
  }
  public set drmaManualMode(value: string) {
    this._drmaManualMode = value;
  }
  public resetDrmaManualMode() {
    this._drmaManualMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drmaManualModeInput() {
    return this._drmaManualMode;
  }

  // override_analysis - computed: false, optional: true, required: false
  private _overrideAnalysis?: string; 
  public get overrideAnalysis() {
    return this.getStringAttribute('override_analysis');
  }
  public set overrideAnalysis(value: string) {
    this._overrideAnalysis = value;
  }
  public resetOverrideAnalysis() {
    this._overrideAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideAnalysisInput() {
    return this._overrideAnalysis;
  }

  // override_band - computed: true, optional: true, required: false
  private _overrideBand?: string; 
  public get overrideBand() {
    return this.getStringAttribute('override_band');
  }
  public set overrideBand(value: string) {
    this._overrideBand = value;
  }
  public resetOverrideBand() {
    this._overrideBand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideBandInput() {
    return this._overrideBand;
  }

  // override_channel - computed: true, optional: true, required: false
  private _overrideChannel?: string; 
  public get overrideChannel() {
    return this.getStringAttribute('override_channel');
  }
  public set overrideChannel(value: string) {
    this._overrideChannel = value;
  }
  public resetOverrideChannel() {
    this._overrideChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideChannelInput() {
    return this._overrideChannel;
  }

  // override_txpower - computed: true, optional: true, required: false
  private _overrideTxpower?: string; 
  public get overrideTxpower() {
    return this.getStringAttribute('override_txpower');
  }
  public set overrideTxpower(value: string) {
    this._overrideTxpower = value;
  }
  public resetOverrideTxpower() {
    this._overrideTxpower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideTxpowerInput() {
    return this._overrideTxpower;
  }

  // override_vaps - computed: true, optional: true, required: false
  private _overrideVaps?: string; 
  public get overrideVaps() {
    return this.getStringAttribute('override_vaps');
  }
  public set overrideVaps(value: string) {
    this._overrideVaps = value;
  }
  public resetOverrideVaps() {
    this._overrideVaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideVapsInput() {
    return this._overrideVaps;
  }

  // power_level - computed: false, optional: true, required: false
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

  // power_mode - computed: true, optional: true, required: false
  private _powerMode?: string; 
  public get powerMode() {
    return this.getStringAttribute('power_mode');
  }
  public set powerMode(value: string) {
    this._powerMode = value;
  }
  public resetPowerMode() {
    this._powerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerModeInput() {
    return this._powerMode;
  }

  // power_value - computed: true, optional: true, required: false
  private _powerValue?: number; 
  public get powerValue() {
    return this.getNumberAttribute('power_value');
  }
  public set powerValue(value: number) {
    this._powerValue = value;
  }
  public resetPowerValue() {
    this._powerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerValueInput() {
    return this._powerValue;
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

  // spectrum_analysis - computed: false, optional: true, required: false
  private _spectrumAnalysis?: string; 
  public get spectrumAnalysis() {
    return this.getStringAttribute('spectrum_analysis');
  }
  public set spectrumAnalysis(value: string) {
    this._spectrumAnalysis = value;
  }
  public resetSpectrumAnalysis() {
    this._spectrumAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spectrumAnalysisInput() {
    return this._spectrumAnalysis;
  }

  // vap1 - computed: false, optional: true, required: false
  private _vap1?: string; 
  public get vap1() {
    return this.getStringAttribute('vap1');
  }
  public set vap1(value: string) {
    this._vap1 = value;
  }
  public resetVap1() {
    this._vap1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap1Input() {
    return this._vap1;
  }

  // vap2 - computed: false, optional: true, required: false
  private _vap2?: string; 
  public get vap2() {
    return this.getStringAttribute('vap2');
  }
  public set vap2(value: string) {
    this._vap2 = value;
  }
  public resetVap2() {
    this._vap2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap2Input() {
    return this._vap2;
  }

  // vap3 - computed: false, optional: true, required: false
  private _vap3?: string; 
  public get vap3() {
    return this.getStringAttribute('vap3');
  }
  public set vap3(value: string) {
    this._vap3 = value;
  }
  public resetVap3() {
    this._vap3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap3Input() {
    return this._vap3;
  }

  // vap4 - computed: false, optional: true, required: false
  private _vap4?: string; 
  public get vap4() {
    return this.getStringAttribute('vap4');
  }
  public set vap4(value: string) {
    this._vap4 = value;
  }
  public resetVap4() {
    this._vap4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap4Input() {
    return this._vap4;
  }

  // vap5 - computed: false, optional: true, required: false
  private _vap5?: string; 
  public get vap5() {
    return this.getStringAttribute('vap5');
  }
  public set vap5(value: string) {
    this._vap5 = value;
  }
  public resetVap5() {
    this._vap5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap5Input() {
    return this._vap5;
  }

  // vap6 - computed: false, optional: true, required: false
  private _vap6?: string; 
  public get vap6() {
    return this.getStringAttribute('vap6');
  }
  public set vap6(value: string) {
    this._vap6 = value;
  }
  public resetVap6() {
    this._vap6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap6Input() {
    return this._vap6;
  }

  // vap7 - computed: false, optional: true, required: false
  private _vap7?: string; 
  public get vap7() {
    return this.getStringAttribute('vap7');
  }
  public set vap7(value: string) {
    this._vap7 = value;
  }
  public resetVap7() {
    this._vap7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap7Input() {
    return this._vap7;
  }

  // vap8 - computed: false, optional: true, required: false
  private _vap8?: string; 
  public get vap8() {
    return this.getStringAttribute('vap8');
  }
  public set vap8(value: string) {
    this._vap8 = value;
  }
  public resetVap8() {
    this._vap8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap8Input() {
    return this._vap8;
  }

  // vap_all - computed: false, optional: true, required: false
  private _vapAll?: string; 
  public get vapAll() {
    return this.getStringAttribute('vap_all');
  }
  public set vapAll(value: string) {
    this._vapAll = value;
  }
  public resetVapAll() {
    this._vapAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vapAllInput() {
    return this._vapAll;
  }

  // vaps - computed: true, optional: true, required: false
  private _vaps?: string[]; 
  public get vaps() {
    return cdktf.Fn.tolist(this.getListAttribute('vaps'));
  }
  public set vaps(value: string[]) {
    this._vaps = value;
  }
  public resetVaps() {
    this._vaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vapsInput() {
    return this._vaps;
  }
}
export interface WirelesscontrollerWtpRadio4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#auto_power_high WirelesscontrollerWtp#auto_power_high}
  */
  readonly autoPowerHigh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#auto_power_level WirelesscontrollerWtp#auto_power_level}
  */
  readonly autoPowerLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#auto_power_low WirelesscontrollerWtp#auto_power_low}
  */
  readonly autoPowerLow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#auto_power_target WirelesscontrollerWtp#auto_power_target}
  */
  readonly autoPowerTarget?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#band WirelesscontrollerWtp#band}
  */
  readonly band?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#channel WirelesscontrollerWtp#channel}
  */
  readonly channel?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#drma_manual_mode WirelesscontrollerWtp#drma_manual_mode}
  */
  readonly drmaManualMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#override_analysis WirelesscontrollerWtp#override_analysis}
  */
  readonly overrideAnalysis?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#override_band WirelesscontrollerWtp#override_band}
  */
  readonly overrideBand?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#override_channel WirelesscontrollerWtp#override_channel}
  */
  readonly overrideChannel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#override_txpower WirelesscontrollerWtp#override_txpower}
  */
  readonly overrideTxpower?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#override_vaps WirelesscontrollerWtp#override_vaps}
  */
  readonly overrideVaps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#power_level WirelesscontrollerWtp#power_level}
  */
  readonly powerLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#power_mode WirelesscontrollerWtp#power_mode}
  */
  readonly powerMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#power_value WirelesscontrollerWtp#power_value}
  */
  readonly powerValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#radio_id WirelesscontrollerWtp#radio_id}
  */
  readonly radioId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#spectrum_analysis WirelesscontrollerWtp#spectrum_analysis}
  */
  readonly spectrumAnalysis?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#vap1 WirelesscontrollerWtp#vap1}
  */
  readonly vap1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#vap2 WirelesscontrollerWtp#vap2}
  */
  readonly vap2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#vap3 WirelesscontrollerWtp#vap3}
  */
  readonly vap3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#vap4 WirelesscontrollerWtp#vap4}
  */
  readonly vap4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#vap5 WirelesscontrollerWtp#vap5}
  */
  readonly vap5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#vap6 WirelesscontrollerWtp#vap6}
  */
  readonly vap6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#vap7 WirelesscontrollerWtp#vap7}
  */
  readonly vap7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#vap8 WirelesscontrollerWtp#vap8}
  */
  readonly vap8?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#vap_all WirelesscontrollerWtp#vap_all}
  */
  readonly vapAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#vaps WirelesscontrollerWtp#vaps}
  */
  readonly vaps?: string[];
}

export function wirelesscontrollerWtpRadio4ToTerraform(struct?: WirelesscontrollerWtpRadio4OutputReference | WirelesscontrollerWtpRadio4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_power_high: cdktf.numberToTerraform(struct!.autoPowerHigh),
    auto_power_level: cdktf.stringToTerraform(struct!.autoPowerLevel),
    auto_power_low: cdktf.numberToTerraform(struct!.autoPowerLow),
    auto_power_target: cdktf.stringToTerraform(struct!.autoPowerTarget),
    band: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.band),
    channel: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channel),
    drma_manual_mode: cdktf.stringToTerraform(struct!.drmaManualMode),
    override_analysis: cdktf.stringToTerraform(struct!.overrideAnalysis),
    override_band: cdktf.stringToTerraform(struct!.overrideBand),
    override_channel: cdktf.stringToTerraform(struct!.overrideChannel),
    override_txpower: cdktf.stringToTerraform(struct!.overrideTxpower),
    override_vaps: cdktf.stringToTerraform(struct!.overrideVaps),
    power_level: cdktf.numberToTerraform(struct!.powerLevel),
    power_mode: cdktf.stringToTerraform(struct!.powerMode),
    power_value: cdktf.numberToTerraform(struct!.powerValue),
    radio_id: cdktf.numberToTerraform(struct!.radioId),
    spectrum_analysis: cdktf.stringToTerraform(struct!.spectrumAnalysis),
    vap1: cdktf.stringToTerraform(struct!.vap1),
    vap2: cdktf.stringToTerraform(struct!.vap2),
    vap3: cdktf.stringToTerraform(struct!.vap3),
    vap4: cdktf.stringToTerraform(struct!.vap4),
    vap5: cdktf.stringToTerraform(struct!.vap5),
    vap6: cdktf.stringToTerraform(struct!.vap6),
    vap7: cdktf.stringToTerraform(struct!.vap7),
    vap8: cdktf.stringToTerraform(struct!.vap8),
    vap_all: cdktf.stringToTerraform(struct!.vapAll),
    vaps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vaps),
  }
}


export function wirelesscontrollerWtpRadio4ToHclTerraform(struct?: WirelesscontrollerWtpRadio4OutputReference | WirelesscontrollerWtpRadio4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_power_high: {
      value: cdktf.numberToHclTerraform(struct!.autoPowerHigh),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auto_power_level: {
      value: cdktf.stringToHclTerraform(struct!.autoPowerLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_power_low: {
      value: cdktf.numberToHclTerraform(struct!.autoPowerLow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auto_power_target: {
      value: cdktf.stringToHclTerraform(struct!.autoPowerTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    band: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.band),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    channel: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channel),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    drma_manual_mode: {
      value: cdktf.stringToHclTerraform(struct!.drmaManualMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_analysis: {
      value: cdktf.stringToHclTerraform(struct!.overrideAnalysis),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_band: {
      value: cdktf.stringToHclTerraform(struct!.overrideBand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_channel: {
      value: cdktf.stringToHclTerraform(struct!.overrideChannel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_txpower: {
      value: cdktf.stringToHclTerraform(struct!.overrideTxpower),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_vaps: {
      value: cdktf.stringToHclTerraform(struct!.overrideVaps),
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
    power_mode: {
      value: cdktf.stringToHclTerraform(struct!.powerMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    power_value: {
      value: cdktf.numberToHclTerraform(struct!.powerValue),
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
    spectrum_analysis: {
      value: cdktf.stringToHclTerraform(struct!.spectrumAnalysis),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vap1: {
      value: cdktf.stringToHclTerraform(struct!.vap1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vap2: {
      value: cdktf.stringToHclTerraform(struct!.vap2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vap3: {
      value: cdktf.stringToHclTerraform(struct!.vap3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vap4: {
      value: cdktf.stringToHclTerraform(struct!.vap4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vap5: {
      value: cdktf.stringToHclTerraform(struct!.vap5),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vap6: {
      value: cdktf.stringToHclTerraform(struct!.vap6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vap7: {
      value: cdktf.stringToHclTerraform(struct!.vap7),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vap8: {
      value: cdktf.stringToHclTerraform(struct!.vap8),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vap_all: {
      value: cdktf.stringToHclTerraform(struct!.vapAll),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vaps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vaps),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerWtpRadio4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WirelesscontrollerWtpRadio4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoPowerHigh !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoPowerHigh = this._autoPowerHigh;
    }
    if (this._autoPowerLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoPowerLevel = this._autoPowerLevel;
    }
    if (this._autoPowerLow !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoPowerLow = this._autoPowerLow;
    }
    if (this._autoPowerTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoPowerTarget = this._autoPowerTarget;
    }
    if (this._band !== undefined) {
      hasAnyValues = true;
      internalValueResult.band = this._band;
    }
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._drmaManualMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.drmaManualMode = this._drmaManualMode;
    }
    if (this._overrideAnalysis !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideAnalysis = this._overrideAnalysis;
    }
    if (this._overrideBand !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideBand = this._overrideBand;
    }
    if (this._overrideChannel !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideChannel = this._overrideChannel;
    }
    if (this._overrideTxpower !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideTxpower = this._overrideTxpower;
    }
    if (this._overrideVaps !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideVaps = this._overrideVaps;
    }
    if (this._powerLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerLevel = this._powerLevel;
    }
    if (this._powerMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerMode = this._powerMode;
    }
    if (this._powerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerValue = this._powerValue;
    }
    if (this._radioId !== undefined) {
      hasAnyValues = true;
      internalValueResult.radioId = this._radioId;
    }
    if (this._spectrumAnalysis !== undefined) {
      hasAnyValues = true;
      internalValueResult.spectrumAnalysis = this._spectrumAnalysis;
    }
    if (this._vap1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vap1 = this._vap1;
    }
    if (this._vap2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vap2 = this._vap2;
    }
    if (this._vap3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vap3 = this._vap3;
    }
    if (this._vap4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vap4 = this._vap4;
    }
    if (this._vap5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vap5 = this._vap5;
    }
    if (this._vap6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vap6 = this._vap6;
    }
    if (this._vap7 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vap7 = this._vap7;
    }
    if (this._vap8 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vap8 = this._vap8;
    }
    if (this._vapAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.vapAll = this._vapAll;
    }
    if (this._vaps !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaps = this._vaps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerWtpRadio4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoPowerHigh = undefined;
      this._autoPowerLevel = undefined;
      this._autoPowerLow = undefined;
      this._autoPowerTarget = undefined;
      this._band = undefined;
      this._channel = undefined;
      this._drmaManualMode = undefined;
      this._overrideAnalysis = undefined;
      this._overrideBand = undefined;
      this._overrideChannel = undefined;
      this._overrideTxpower = undefined;
      this._overrideVaps = undefined;
      this._powerLevel = undefined;
      this._powerMode = undefined;
      this._powerValue = undefined;
      this._radioId = undefined;
      this._spectrumAnalysis = undefined;
      this._vap1 = undefined;
      this._vap2 = undefined;
      this._vap3 = undefined;
      this._vap4 = undefined;
      this._vap5 = undefined;
      this._vap6 = undefined;
      this._vap7 = undefined;
      this._vap8 = undefined;
      this._vapAll = undefined;
      this._vaps = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoPowerHigh = value.autoPowerHigh;
      this._autoPowerLevel = value.autoPowerLevel;
      this._autoPowerLow = value.autoPowerLow;
      this._autoPowerTarget = value.autoPowerTarget;
      this._band = value.band;
      this._channel = value.channel;
      this._drmaManualMode = value.drmaManualMode;
      this._overrideAnalysis = value.overrideAnalysis;
      this._overrideBand = value.overrideBand;
      this._overrideChannel = value.overrideChannel;
      this._overrideTxpower = value.overrideTxpower;
      this._overrideVaps = value.overrideVaps;
      this._powerLevel = value.powerLevel;
      this._powerMode = value.powerMode;
      this._powerValue = value.powerValue;
      this._radioId = value.radioId;
      this._spectrumAnalysis = value.spectrumAnalysis;
      this._vap1 = value.vap1;
      this._vap2 = value.vap2;
      this._vap3 = value.vap3;
      this._vap4 = value.vap4;
      this._vap5 = value.vap5;
      this._vap6 = value.vap6;
      this._vap7 = value.vap7;
      this._vap8 = value.vap8;
      this._vapAll = value.vapAll;
      this._vaps = value.vaps;
    }
  }

  // auto_power_high - computed: false, optional: true, required: false
  private _autoPowerHigh?: number; 
  public get autoPowerHigh() {
    return this.getNumberAttribute('auto_power_high');
  }
  public set autoPowerHigh(value: number) {
    this._autoPowerHigh = value;
  }
  public resetAutoPowerHigh() {
    this._autoPowerHigh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPowerHighInput() {
    return this._autoPowerHigh;
  }

  // auto_power_level - computed: false, optional: true, required: false
  private _autoPowerLevel?: string; 
  public get autoPowerLevel() {
    return this.getStringAttribute('auto_power_level');
  }
  public set autoPowerLevel(value: string) {
    this._autoPowerLevel = value;
  }
  public resetAutoPowerLevel() {
    this._autoPowerLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPowerLevelInput() {
    return this._autoPowerLevel;
  }

  // auto_power_low - computed: false, optional: true, required: false
  private _autoPowerLow?: number; 
  public get autoPowerLow() {
    return this.getNumberAttribute('auto_power_low');
  }
  public set autoPowerLow(value: number) {
    this._autoPowerLow = value;
  }
  public resetAutoPowerLow() {
    this._autoPowerLow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPowerLowInput() {
    return this._autoPowerLow;
  }

  // auto_power_target - computed: true, optional: true, required: false
  private _autoPowerTarget?: string; 
  public get autoPowerTarget() {
    return this.getStringAttribute('auto_power_target');
  }
  public set autoPowerTarget(value: string) {
    this._autoPowerTarget = value;
  }
  public resetAutoPowerTarget() {
    this._autoPowerTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPowerTargetInput() {
    return this._autoPowerTarget;
  }

  // band - computed: true, optional: true, required: false
  private _band?: string[]; 
  public get band() {
    return cdktf.Fn.tolist(this.getListAttribute('band'));
  }
  public set band(value: string[]) {
    this._band = value;
  }
  public resetBand() {
    this._band = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandInput() {
    return this._band;
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

  // drma_manual_mode - computed: false, optional: true, required: false
  private _drmaManualMode?: string; 
  public get drmaManualMode() {
    return this.getStringAttribute('drma_manual_mode');
  }
  public set drmaManualMode(value: string) {
    this._drmaManualMode = value;
  }
  public resetDrmaManualMode() {
    this._drmaManualMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drmaManualModeInput() {
    return this._drmaManualMode;
  }

  // override_analysis - computed: false, optional: true, required: false
  private _overrideAnalysis?: string; 
  public get overrideAnalysis() {
    return this.getStringAttribute('override_analysis');
  }
  public set overrideAnalysis(value: string) {
    this._overrideAnalysis = value;
  }
  public resetOverrideAnalysis() {
    this._overrideAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideAnalysisInput() {
    return this._overrideAnalysis;
  }

  // override_band - computed: true, optional: true, required: false
  private _overrideBand?: string; 
  public get overrideBand() {
    return this.getStringAttribute('override_band');
  }
  public set overrideBand(value: string) {
    this._overrideBand = value;
  }
  public resetOverrideBand() {
    this._overrideBand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideBandInput() {
    return this._overrideBand;
  }

  // override_channel - computed: true, optional: true, required: false
  private _overrideChannel?: string; 
  public get overrideChannel() {
    return this.getStringAttribute('override_channel');
  }
  public set overrideChannel(value: string) {
    this._overrideChannel = value;
  }
  public resetOverrideChannel() {
    this._overrideChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideChannelInput() {
    return this._overrideChannel;
  }

  // override_txpower - computed: true, optional: true, required: false
  private _overrideTxpower?: string; 
  public get overrideTxpower() {
    return this.getStringAttribute('override_txpower');
  }
  public set overrideTxpower(value: string) {
    this._overrideTxpower = value;
  }
  public resetOverrideTxpower() {
    this._overrideTxpower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideTxpowerInput() {
    return this._overrideTxpower;
  }

  // override_vaps - computed: true, optional: true, required: false
  private _overrideVaps?: string; 
  public get overrideVaps() {
    return this.getStringAttribute('override_vaps');
  }
  public set overrideVaps(value: string) {
    this._overrideVaps = value;
  }
  public resetOverrideVaps() {
    this._overrideVaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideVapsInput() {
    return this._overrideVaps;
  }

  // power_level - computed: false, optional: true, required: false
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

  // power_mode - computed: true, optional: true, required: false
  private _powerMode?: string; 
  public get powerMode() {
    return this.getStringAttribute('power_mode');
  }
  public set powerMode(value: string) {
    this._powerMode = value;
  }
  public resetPowerMode() {
    this._powerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerModeInput() {
    return this._powerMode;
  }

  // power_value - computed: true, optional: true, required: false
  private _powerValue?: number; 
  public get powerValue() {
    return this.getNumberAttribute('power_value');
  }
  public set powerValue(value: number) {
    this._powerValue = value;
  }
  public resetPowerValue() {
    this._powerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerValueInput() {
    return this._powerValue;
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

  // spectrum_analysis - computed: false, optional: true, required: false
  private _spectrumAnalysis?: string; 
  public get spectrumAnalysis() {
    return this.getStringAttribute('spectrum_analysis');
  }
  public set spectrumAnalysis(value: string) {
    this._spectrumAnalysis = value;
  }
  public resetSpectrumAnalysis() {
    this._spectrumAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spectrumAnalysisInput() {
    return this._spectrumAnalysis;
  }

  // vap1 - computed: false, optional: true, required: false
  private _vap1?: string; 
  public get vap1() {
    return this.getStringAttribute('vap1');
  }
  public set vap1(value: string) {
    this._vap1 = value;
  }
  public resetVap1() {
    this._vap1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap1Input() {
    return this._vap1;
  }

  // vap2 - computed: false, optional: true, required: false
  private _vap2?: string; 
  public get vap2() {
    return this.getStringAttribute('vap2');
  }
  public set vap2(value: string) {
    this._vap2 = value;
  }
  public resetVap2() {
    this._vap2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap2Input() {
    return this._vap2;
  }

  // vap3 - computed: false, optional: true, required: false
  private _vap3?: string; 
  public get vap3() {
    return this.getStringAttribute('vap3');
  }
  public set vap3(value: string) {
    this._vap3 = value;
  }
  public resetVap3() {
    this._vap3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap3Input() {
    return this._vap3;
  }

  // vap4 - computed: false, optional: true, required: false
  private _vap4?: string; 
  public get vap4() {
    return this.getStringAttribute('vap4');
  }
  public set vap4(value: string) {
    this._vap4 = value;
  }
  public resetVap4() {
    this._vap4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap4Input() {
    return this._vap4;
  }

  // vap5 - computed: false, optional: true, required: false
  private _vap5?: string; 
  public get vap5() {
    return this.getStringAttribute('vap5');
  }
  public set vap5(value: string) {
    this._vap5 = value;
  }
  public resetVap5() {
    this._vap5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap5Input() {
    return this._vap5;
  }

  // vap6 - computed: false, optional: true, required: false
  private _vap6?: string; 
  public get vap6() {
    return this.getStringAttribute('vap6');
  }
  public set vap6(value: string) {
    this._vap6 = value;
  }
  public resetVap6() {
    this._vap6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap6Input() {
    return this._vap6;
  }

  // vap7 - computed: false, optional: true, required: false
  private _vap7?: string; 
  public get vap7() {
    return this.getStringAttribute('vap7');
  }
  public set vap7(value: string) {
    this._vap7 = value;
  }
  public resetVap7() {
    this._vap7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap7Input() {
    return this._vap7;
  }

  // vap8 - computed: false, optional: true, required: false
  private _vap8?: string; 
  public get vap8() {
    return this.getStringAttribute('vap8');
  }
  public set vap8(value: string) {
    this._vap8 = value;
  }
  public resetVap8() {
    this._vap8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vap8Input() {
    return this._vap8;
  }

  // vap_all - computed: false, optional: true, required: false
  private _vapAll?: string; 
  public get vapAll() {
    return this.getStringAttribute('vap_all');
  }
  public set vapAll(value: string) {
    this._vapAll = value;
  }
  public resetVapAll() {
    this._vapAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vapAllInput() {
    return this._vapAll;
  }

  // vaps - computed: true, optional: true, required: false
  private _vaps?: string[]; 
  public get vaps() {
    return cdktf.Fn.tolist(this.getListAttribute('vaps'));
  }
  public set vaps(value: string[]) {
    this._vaps = value;
  }
  public resetVaps() {
    this._vaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vapsInput() {
    return this._vaps;
  }
}
export interface WirelesscontrollerWtpSplitTunnelingAcl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#dest_ip WirelesscontrollerWtp#dest_ip}
  */
  readonly destIp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#id WirelesscontrollerWtp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function wirelesscontrollerWtpSplitTunnelingAclToTerraform(struct?: WirelesscontrollerWtpSplitTunnelingAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dest_ip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destIp),
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function wirelesscontrollerWtpSplitTunnelingAclToHclTerraform(struct?: WirelesscontrollerWtpSplitTunnelingAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dest_ip: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destIp),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerWtpSplitTunnelingAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelesscontrollerWtpSplitTunnelingAcl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.destIp = this._destIp;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerWtpSplitTunnelingAcl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destIp = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destIp = value.destIp;
      this._id = value.id;
    }
  }

  // dest_ip - computed: true, optional: true, required: false
  private _destIp?: string[]; 
  public get destIp() {
    return this.getListAttribute('dest_ip');
  }
  public set destIp(value: string[]) {
    this._destIp = value;
  }
  public resetDestIp() {
    this._destIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destIpInput() {
    return this._destIp;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class WirelesscontrollerWtpSplitTunnelingAclList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerWtpSplitTunnelingAcl[] | cdktf.IResolvable

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
  public get(index: number): WirelesscontrollerWtpSplitTunnelingAclOutputReference {
    return new WirelesscontrollerWtpSplitTunnelingAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp fmgdevice_wirelesscontroller_wtp}
*/
export class WirelesscontrollerWtp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_wirelesscontroller_wtp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelesscontrollerWtp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelesscontrollerWtp to import
  * @param importFromId The id of the existing WirelesscontrollerWtp that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelesscontrollerWtp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_wirelesscontroller_wtp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp fmgdevice_wirelesscontroller_wtp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelesscontrollerWtpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WirelesscontrollerWtpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_wirelesscontroller_wtp',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._admin = config.admin;
    this._allowaccess = config.allowaccess;
    this._apcfgProfile = config.apcfgProfile;
    this._bleMajorId = config.bleMajorId;
    this._bleMinorId = config.bleMinorId;
    this._bonjourProfile = config.bonjourProfile;
    this._comment = config.comment;
    this._coordinateLatitude = config.coordinateLatitude;
    this._coordinateLongitude = config.coordinateLongitude;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._firmwareProvision = config.firmwareProvision;
    this._firmwareProvisionLatest = config.firmwareProvisionLatest;
    this._id = config.id;
    this._imageDownload = config.imageDownload;
    this._index = config.index;
    this._ipFragmentPreventing = config.ipFragmentPreventing;
    this._ledState = config.ledState;
    this._location = config.location;
    this._loginPasswd = config.loginPasswd;
    this._loginPasswdChange = config.loginPasswdChange;
    this._meshBridgeEnable = config.meshBridgeEnable;
    this._name = config.name;
    this._overrideAllowaccess = config.overrideAllowaccess;
    this._overrideIpFragment = config.overrideIpFragment;
    this._overrideLan = config.overrideLan;
    this._overrideLedState = config.overrideLedState;
    this._overrideLoginPasswdChange = config.overrideLoginPasswdChange;
    this._overrideSplitTunnel = config.overrideSplitTunnel;
    this._overrideWanPortMode = config.overrideWanPortMode;
    this._purdueLevel = config.purdueLevel;
    this._region = config.region;
    this._regionX = config.regionX;
    this._regionY = config.regionY;
    this._splitTunnelingAclLocalApSubnet = config.splitTunnelingAclLocalApSubnet;
    this._splitTunnelingAclPath = config.splitTunnelingAclPath;
    this._tunMtuDownlink = config.tunMtuDownlink;
    this._tunMtuUplink = config.tunMtuUplink;
    this._uuid = config.uuid;
    this._wanPortMode = config.wanPortMode;
    this._wtpId = config.wtpId;
    this._wtpMode = config.wtpMode;
    this._wtpProfile = config.wtpProfile;
    this._lan.internalValue = config.lan;
    this._radio1.internalValue = config.radio1;
    this._radio2.internalValue = config.radio2;
    this._radio3.internalValue = config.radio3;
    this._radio4.internalValue = config.radio4;
    this._splitTunnelingAcl.internalValue = config.splitTunnelingAcl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin - computed: true, optional: true, required: false
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

  // apcfg_profile - computed: true, optional: true, required: false
  private _apcfgProfile?: string[]; 
  public get apcfgProfile() {
    return cdktf.Fn.tolist(this.getListAttribute('apcfg_profile'));
  }
  public set apcfgProfile(value: string[]) {
    this._apcfgProfile = value;
  }
  public resetApcfgProfile() {
    this._apcfgProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apcfgProfileInput() {
    return this._apcfgProfile;
  }

  // ble_major_id - computed: false, optional: true, required: false
  private _bleMajorId?: number; 
  public get bleMajorId() {
    return this.getNumberAttribute('ble_major_id');
  }
  public set bleMajorId(value: number) {
    this._bleMajorId = value;
  }
  public resetBleMajorId() {
    this._bleMajorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bleMajorIdInput() {
    return this._bleMajorId;
  }

  // ble_minor_id - computed: false, optional: true, required: false
  private _bleMinorId?: number; 
  public get bleMinorId() {
    return this.getNumberAttribute('ble_minor_id');
  }
  public set bleMinorId(value: number) {
    this._bleMinorId = value;
  }
  public resetBleMinorId() {
    this._bleMinorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bleMinorIdInput() {
    return this._bleMinorId;
  }

  // bonjour_profile - computed: true, optional: true, required: false
  private _bonjourProfile?: string[]; 
  public get bonjourProfile() {
    return cdktf.Fn.tolist(this.getListAttribute('bonjour_profile'));
  }
  public set bonjourProfile(value: string[]) {
    this._bonjourProfile = value;
  }
  public resetBonjourProfile() {
    this._bonjourProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bonjourProfileInput() {
    return this._bonjourProfile;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // coordinate_latitude - computed: false, optional: true, required: false
  private _coordinateLatitude?: string; 
  public get coordinateLatitude() {
    return this.getStringAttribute('coordinate_latitude');
  }
  public set coordinateLatitude(value: string) {
    this._coordinateLatitude = value;
  }
  public resetCoordinateLatitude() {
    this._coordinateLatitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coordinateLatitudeInput() {
    return this._coordinateLatitude;
  }

  // coordinate_longitude - computed: false, optional: true, required: false
  private _coordinateLongitude?: string; 
  public get coordinateLongitude() {
    return this.getStringAttribute('coordinate_longitude');
  }
  public set coordinateLongitude(value: string) {
    this._coordinateLongitude = value;
  }
  public resetCoordinateLongitude() {
    this._coordinateLongitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coordinateLongitudeInput() {
    return this._coordinateLongitude;
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

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // firmware_provision - computed: false, optional: true, required: false
  private _firmwareProvision?: string; 
  public get firmwareProvision() {
    return this.getStringAttribute('firmware_provision');
  }
  public set firmwareProvision(value: string) {
    this._firmwareProvision = value;
  }
  public resetFirmwareProvision() {
    this._firmwareProvision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firmwareProvisionInput() {
    return this._firmwareProvision;
  }

  // firmware_provision_latest - computed: true, optional: true, required: false
  private _firmwareProvisionLatest?: string; 
  public get firmwareProvisionLatest() {
    return this.getStringAttribute('firmware_provision_latest');
  }
  public set firmwareProvisionLatest(value: string) {
    this._firmwareProvisionLatest = value;
  }
  public resetFirmwareProvisionLatest() {
    this._firmwareProvisionLatest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firmwareProvisionLatestInput() {
    return this._firmwareProvisionLatest;
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

  // image_download - computed: true, optional: true, required: false
  private _imageDownload?: string; 
  public get imageDownload() {
    return this.getStringAttribute('image_download');
  }
  public set imageDownload(value: string) {
    this._imageDownload = value;
  }
  public resetImageDownload() {
    this._imageDownload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageDownloadInput() {
    return this._imageDownload;
  }

  // index - computed: false, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // ip_fragment_preventing - computed: true, optional: true, required: false
  private _ipFragmentPreventing?: string[]; 
  public get ipFragmentPreventing() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_fragment_preventing'));
  }
  public set ipFragmentPreventing(value: string[]) {
    this._ipFragmentPreventing = value;
  }
  public resetIpFragmentPreventing() {
    this._ipFragmentPreventing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFragmentPreventingInput() {
    return this._ipFragmentPreventing;
  }

  // led_state - computed: true, optional: true, required: false
  private _ledState?: string; 
  public get ledState() {
    return this.getStringAttribute('led_state');
  }
  public set ledState(value: string) {
    this._ledState = value;
  }
  public resetLedState() {
    this._ledState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ledStateInput() {
    return this._ledState;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // login_passwd - computed: true, optional: true, required: false
  private _loginPasswd?: string[]; 
  public get loginPasswd() {
    return cdktf.Fn.tolist(this.getListAttribute('login_passwd'));
  }
  public set loginPasswd(value: string[]) {
    this._loginPasswd = value;
  }
  public resetLoginPasswd() {
    this._loginPasswd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginPasswdInput() {
    return this._loginPasswd;
  }

  // login_passwd_change - computed: false, optional: true, required: false
  private _loginPasswdChange?: string; 
  public get loginPasswdChange() {
    return this.getStringAttribute('login_passwd_change');
  }
  public set loginPasswdChange(value: string) {
    this._loginPasswdChange = value;
  }
  public resetLoginPasswdChange() {
    this._loginPasswdChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginPasswdChangeInput() {
    return this._loginPasswdChange;
  }

  // mesh_bridge_enable - computed: true, optional: true, required: false
  private _meshBridgeEnable?: string; 
  public get meshBridgeEnable() {
    return this.getStringAttribute('mesh_bridge_enable');
  }
  public set meshBridgeEnable(value: string) {
    this._meshBridgeEnable = value;
  }
  public resetMeshBridgeEnable() {
    this._meshBridgeEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshBridgeEnableInput() {
    return this._meshBridgeEnable;
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

  // override_ip_fragment - computed: true, optional: true, required: false
  private _overrideIpFragment?: string; 
  public get overrideIpFragment() {
    return this.getStringAttribute('override_ip_fragment');
  }
  public set overrideIpFragment(value: string) {
    this._overrideIpFragment = value;
  }
  public resetOverrideIpFragment() {
    this._overrideIpFragment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideIpFragmentInput() {
    return this._overrideIpFragment;
  }

  // override_lan - computed: true, optional: true, required: false
  private _overrideLan?: string; 
  public get overrideLan() {
    return this.getStringAttribute('override_lan');
  }
  public set overrideLan(value: string) {
    this._overrideLan = value;
  }
  public resetOverrideLan() {
    this._overrideLan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideLanInput() {
    return this._overrideLan;
  }

  // override_led_state - computed: true, optional: true, required: false
  private _overrideLedState?: string; 
  public get overrideLedState() {
    return this.getStringAttribute('override_led_state');
  }
  public set overrideLedState(value: string) {
    this._overrideLedState = value;
  }
  public resetOverrideLedState() {
    this._overrideLedState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideLedStateInput() {
    return this._overrideLedState;
  }

  // override_login_passwd_change - computed: true, optional: true, required: false
  private _overrideLoginPasswdChange?: string; 
  public get overrideLoginPasswdChange() {
    return this.getStringAttribute('override_login_passwd_change');
  }
  public set overrideLoginPasswdChange(value: string) {
    this._overrideLoginPasswdChange = value;
  }
  public resetOverrideLoginPasswdChange() {
    this._overrideLoginPasswdChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideLoginPasswdChangeInput() {
    return this._overrideLoginPasswdChange;
  }

  // override_split_tunnel - computed: true, optional: true, required: false
  private _overrideSplitTunnel?: string; 
  public get overrideSplitTunnel() {
    return this.getStringAttribute('override_split_tunnel');
  }
  public set overrideSplitTunnel(value: string) {
    this._overrideSplitTunnel = value;
  }
  public resetOverrideSplitTunnel() {
    this._overrideSplitTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideSplitTunnelInput() {
    return this._overrideSplitTunnel;
  }

  // override_wan_port_mode - computed: false, optional: true, required: false
  private _overrideWanPortMode?: string; 
  public get overrideWanPortMode() {
    return this.getStringAttribute('override_wan_port_mode');
  }
  public set overrideWanPortMode(value: string) {
    this._overrideWanPortMode = value;
  }
  public resetOverrideWanPortMode() {
    this._overrideWanPortMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideWanPortModeInput() {
    return this._overrideWanPortMode;
  }

  // purdue_level - computed: true, optional: true, required: false
  private _purdueLevel?: string; 
  public get purdueLevel() {
    return this.getStringAttribute('purdue_level');
  }
  public set purdueLevel(value: string) {
    this._purdueLevel = value;
  }
  public resetPurdueLevel() {
    this._purdueLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purdueLevelInput() {
    return this._purdueLevel;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string[]; 
  public get region() {
    return cdktf.Fn.tolist(this.getListAttribute('region'));
  }
  public set region(value: string[]) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // region_x - computed: true, optional: true, required: false
  private _regionX?: string; 
  public get regionX() {
    return this.getStringAttribute('region_x');
  }
  public set regionX(value: string) {
    this._regionX = value;
  }
  public resetRegionX() {
    this._regionX = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionXInput() {
    return this._regionX;
  }

  // region_y - computed: true, optional: true, required: false
  private _regionY?: string; 
  public get regionY() {
    return this.getStringAttribute('region_y');
  }
  public set regionY(value: string) {
    this._regionY = value;
  }
  public resetRegionY() {
    this._regionY = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionYInput() {
    return this._regionY;
  }

  // split_tunneling_acl_local_ap_subnet - computed: true, optional: true, required: false
  private _splitTunnelingAclLocalApSubnet?: string; 
  public get splitTunnelingAclLocalApSubnet() {
    return this.getStringAttribute('split_tunneling_acl_local_ap_subnet');
  }
  public set splitTunnelingAclLocalApSubnet(value: string) {
    this._splitTunnelingAclLocalApSubnet = value;
  }
  public resetSplitTunnelingAclLocalApSubnet() {
    this._splitTunnelingAclLocalApSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitTunnelingAclLocalApSubnetInput() {
    return this._splitTunnelingAclLocalApSubnet;
  }

  // split_tunneling_acl_path - computed: true, optional: true, required: false
  private _splitTunnelingAclPath?: string; 
  public get splitTunnelingAclPath() {
    return this.getStringAttribute('split_tunneling_acl_path');
  }
  public set splitTunnelingAclPath(value: string) {
    this._splitTunnelingAclPath = value;
  }
  public resetSplitTunnelingAclPath() {
    this._splitTunnelingAclPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitTunnelingAclPathInput() {
    return this._splitTunnelingAclPath;
  }

  // tun_mtu_downlink - computed: false, optional: true, required: false
  private _tunMtuDownlink?: number; 
  public get tunMtuDownlink() {
    return this.getNumberAttribute('tun_mtu_downlink');
  }
  public set tunMtuDownlink(value: number) {
    this._tunMtuDownlink = value;
  }
  public resetTunMtuDownlink() {
    this._tunMtuDownlink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunMtuDownlinkInput() {
    return this._tunMtuDownlink;
  }

  // tun_mtu_uplink - computed: false, optional: true, required: false
  private _tunMtuUplink?: number; 
  public get tunMtuUplink() {
    return this.getNumberAttribute('tun_mtu_uplink');
  }
  public set tunMtuUplink(value: number) {
    this._tunMtuUplink = value;
  }
  public resetTunMtuUplink() {
    this._tunMtuUplink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunMtuUplinkInput() {
    return this._tunMtuUplink;
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

  // wan_port_mode - computed: false, optional: true, required: false
  private _wanPortMode?: string; 
  public get wanPortMode() {
    return this.getStringAttribute('wan_port_mode');
  }
  public set wanPortMode(value: string) {
    this._wanPortMode = value;
  }
  public resetWanPortMode() {
    this._wanPortMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanPortModeInput() {
    return this._wanPortMode;
  }

  // wtp_id - computed: false, optional: true, required: false
  private _wtpId?: string; 
  public get wtpId() {
    return this.getStringAttribute('wtp_id');
  }
  public set wtpId(value: string) {
    this._wtpId = value;
  }
  public resetWtpId() {
    this._wtpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wtpIdInput() {
    return this._wtpId;
  }

  // wtp_mode - computed: true, optional: true, required: false
  private _wtpMode?: string; 
  public get wtpMode() {
    return this.getStringAttribute('wtp_mode');
  }
  public set wtpMode(value: string) {
    this._wtpMode = value;
  }
  public resetWtpMode() {
    this._wtpMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wtpModeInput() {
    return this._wtpMode;
  }

  // wtp_profile - computed: true, optional: true, required: false
  private _wtpProfile?: string[]; 
  public get wtpProfile() {
    return cdktf.Fn.tolist(this.getListAttribute('wtp_profile'));
  }
  public set wtpProfile(value: string[]) {
    this._wtpProfile = value;
  }
  public resetWtpProfile() {
    this._wtpProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wtpProfileInput() {
    return this._wtpProfile;
  }

  // lan - computed: false, optional: true, required: false
  private _lan = new WirelesscontrollerWtpLanOutputReference(this, "lan");
  public get lan() {
    return this._lan;
  }
  public putLan(value: WirelesscontrollerWtpLan) {
    this._lan.internalValue = value;
  }
  public resetLan() {
    this._lan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lanInput() {
    return this._lan.internalValue;
  }

  // radio_1 - computed: false, optional: true, required: false
  private _radio1 = new WirelesscontrollerWtpRadio1OutputReference(this, "radio_1");
  public get radio1() {
    return this._radio1;
  }
  public putRadio1(value: WirelesscontrollerWtpRadio1) {
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
  private _radio2 = new WirelesscontrollerWtpRadio2OutputReference(this, "radio_2");
  public get radio2() {
    return this._radio2;
  }
  public putRadio2(value: WirelesscontrollerWtpRadio2) {
    this._radio2.internalValue = value;
  }
  public resetRadio2() {
    this._radio2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radio2Input() {
    return this._radio2.internalValue;
  }

  // radio_3 - computed: false, optional: true, required: false
  private _radio3 = new WirelesscontrollerWtpRadio3OutputReference(this, "radio_3");
  public get radio3() {
    return this._radio3;
  }
  public putRadio3(value: WirelesscontrollerWtpRadio3) {
    this._radio3.internalValue = value;
  }
  public resetRadio3() {
    this._radio3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radio3Input() {
    return this._radio3.internalValue;
  }

  // radio_4 - computed: false, optional: true, required: false
  private _radio4 = new WirelesscontrollerWtpRadio4OutputReference(this, "radio_4");
  public get radio4() {
    return this._radio4;
  }
  public putRadio4(value: WirelesscontrollerWtpRadio4) {
    this._radio4.internalValue = value;
  }
  public resetRadio4() {
    this._radio4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radio4Input() {
    return this._radio4.internalValue;
  }

  // split_tunneling_acl - computed: false, optional: true, required: false
  private _splitTunnelingAcl = new WirelesscontrollerWtpSplitTunnelingAclList(this, "split_tunneling_acl", false);
  public get splitTunnelingAcl() {
    return this._splitTunnelingAcl;
  }
  public putSplitTunnelingAcl(value: WirelesscontrollerWtpSplitTunnelingAcl[] | cdktf.IResolvable) {
    this._splitTunnelingAcl.internalValue = value;
  }
  public resetSplitTunnelingAcl() {
    this._splitTunnelingAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitTunnelingAclInput() {
    return this._splitTunnelingAcl.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin: cdktf.stringToTerraform(this._admin),
      allowaccess: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowaccess),
      apcfg_profile: cdktf.listMapper(cdktf.stringToTerraform, false)(this._apcfgProfile),
      ble_major_id: cdktf.numberToTerraform(this._bleMajorId),
      ble_minor_id: cdktf.numberToTerraform(this._bleMinorId),
      bonjour_profile: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bonjourProfile),
      comment: cdktf.stringToTerraform(this._comment),
      coordinate_latitude: cdktf.stringToTerraform(this._coordinateLatitude),
      coordinate_longitude: cdktf.stringToTerraform(this._coordinateLongitude),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      firmware_provision: cdktf.stringToTerraform(this._firmwareProvision),
      firmware_provision_latest: cdktf.stringToTerraform(this._firmwareProvisionLatest),
      id: cdktf.stringToTerraform(this._id),
      image_download: cdktf.stringToTerraform(this._imageDownload),
      index: cdktf.numberToTerraform(this._index),
      ip_fragment_preventing: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipFragmentPreventing),
      led_state: cdktf.stringToTerraform(this._ledState),
      location: cdktf.stringToTerraform(this._location),
      login_passwd: cdktf.listMapper(cdktf.stringToTerraform, false)(this._loginPasswd),
      login_passwd_change: cdktf.stringToTerraform(this._loginPasswdChange),
      mesh_bridge_enable: cdktf.stringToTerraform(this._meshBridgeEnable),
      name: cdktf.stringToTerraform(this._name),
      override_allowaccess: cdktf.stringToTerraform(this._overrideAllowaccess),
      override_ip_fragment: cdktf.stringToTerraform(this._overrideIpFragment),
      override_lan: cdktf.stringToTerraform(this._overrideLan),
      override_led_state: cdktf.stringToTerraform(this._overrideLedState),
      override_login_passwd_change: cdktf.stringToTerraform(this._overrideLoginPasswdChange),
      override_split_tunnel: cdktf.stringToTerraform(this._overrideSplitTunnel),
      override_wan_port_mode: cdktf.stringToTerraform(this._overrideWanPortMode),
      purdue_level: cdktf.stringToTerraform(this._purdueLevel),
      region: cdktf.listMapper(cdktf.stringToTerraform, false)(this._region),
      region_x: cdktf.stringToTerraform(this._regionX),
      region_y: cdktf.stringToTerraform(this._regionY),
      split_tunneling_acl_local_ap_subnet: cdktf.stringToTerraform(this._splitTunnelingAclLocalApSubnet),
      split_tunneling_acl_path: cdktf.stringToTerraform(this._splitTunnelingAclPath),
      tun_mtu_downlink: cdktf.numberToTerraform(this._tunMtuDownlink),
      tun_mtu_uplink: cdktf.numberToTerraform(this._tunMtuUplink),
      uuid: cdktf.stringToTerraform(this._uuid),
      wan_port_mode: cdktf.stringToTerraform(this._wanPortMode),
      wtp_id: cdktf.stringToTerraform(this._wtpId),
      wtp_mode: cdktf.stringToTerraform(this._wtpMode),
      wtp_profile: cdktf.listMapper(cdktf.stringToTerraform, false)(this._wtpProfile),
      lan: wirelesscontrollerWtpLanToTerraform(this._lan.internalValue),
      radio_1: wirelesscontrollerWtpRadio1ToTerraform(this._radio1.internalValue),
      radio_2: wirelesscontrollerWtpRadio2ToTerraform(this._radio2.internalValue),
      radio_3: wirelesscontrollerWtpRadio3ToTerraform(this._radio3.internalValue),
      radio_4: wirelesscontrollerWtpRadio4ToTerraform(this._radio4.internalValue),
      split_tunneling_acl: cdktf.listMapper(wirelesscontrollerWtpSplitTunnelingAclToTerraform, true)(this._splitTunnelingAcl.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      apcfg_profile: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._apcfgProfile),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ble_major_id: {
        value: cdktf.numberToHclTerraform(this._bleMajorId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ble_minor_id: {
        value: cdktf.numberToHclTerraform(this._bleMinorId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bonjour_profile: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bonjourProfile),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      coordinate_latitude: {
        value: cdktf.stringToHclTerraform(this._coordinateLatitude),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      coordinate_longitude: {
        value: cdktf.stringToHclTerraform(this._coordinateLongitude),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firmware_provision: {
        value: cdktf.stringToHclTerraform(this._firmwareProvision),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firmware_provision_latest: {
        value: cdktf.stringToHclTerraform(this._firmwareProvisionLatest),
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
      image_download: {
        value: cdktf.stringToHclTerraform(this._imageDownload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      index: {
        value: cdktf.numberToHclTerraform(this._index),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_fragment_preventing: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipFragmentPreventing),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      led_state: {
        value: cdktf.stringToHclTerraform(this._ledState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_passwd: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._loginPasswd),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      login_passwd_change: {
        value: cdktf.stringToHclTerraform(this._loginPasswdChange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mesh_bridge_enable: {
        value: cdktf.stringToHclTerraform(this._meshBridgeEnable),
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
      override_ip_fragment: {
        value: cdktf.stringToHclTerraform(this._overrideIpFragment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_lan: {
        value: cdktf.stringToHclTerraform(this._overrideLan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_led_state: {
        value: cdktf.stringToHclTerraform(this._overrideLedState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_login_passwd_change: {
        value: cdktf.stringToHclTerraform(this._overrideLoginPasswdChange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_split_tunnel: {
        value: cdktf.stringToHclTerraform(this._overrideSplitTunnel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_wan_port_mode: {
        value: cdktf.stringToHclTerraform(this._overrideWanPortMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      purdue_level: {
        value: cdktf.stringToHclTerraform(this._purdueLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._region),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      region_x: {
        value: cdktf.stringToHclTerraform(this._regionX),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_y: {
        value: cdktf.stringToHclTerraform(this._regionY),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      split_tunneling_acl_local_ap_subnet: {
        value: cdktf.stringToHclTerraform(this._splitTunnelingAclLocalApSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      split_tunneling_acl_path: {
        value: cdktf.stringToHclTerraform(this._splitTunnelingAclPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tun_mtu_downlink: {
        value: cdktf.numberToHclTerraform(this._tunMtuDownlink),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tun_mtu_uplink: {
        value: cdktf.numberToHclTerraform(this._tunMtuUplink),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wan_port_mode: {
        value: cdktf.stringToHclTerraform(this._wanPortMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wtp_id: {
        value: cdktf.stringToHclTerraform(this._wtpId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wtp_mode: {
        value: cdktf.stringToHclTerraform(this._wtpMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wtp_profile: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._wtpProfile),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      lan: {
        value: wirelesscontrollerWtpLanToHclTerraform(this._lan.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelesscontrollerWtpLanList",
      },
      radio_1: {
        value: wirelesscontrollerWtpRadio1ToHclTerraform(this._radio1.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelesscontrollerWtpRadio1List",
      },
      radio_2: {
        value: wirelesscontrollerWtpRadio2ToHclTerraform(this._radio2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelesscontrollerWtpRadio2List",
      },
      radio_3: {
        value: wirelesscontrollerWtpRadio3ToHclTerraform(this._radio3.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelesscontrollerWtpRadio3List",
      },
      radio_4: {
        value: wirelesscontrollerWtpRadio4ToHclTerraform(this._radio4.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelesscontrollerWtpRadio4List",
      },
      split_tunneling_acl: {
        value: cdktf.listMapperHcl(wirelesscontrollerWtpSplitTunnelingAclToHclTerraform, true)(this._splitTunnelingAcl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelesscontrollerWtpSplitTunnelingAclList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
