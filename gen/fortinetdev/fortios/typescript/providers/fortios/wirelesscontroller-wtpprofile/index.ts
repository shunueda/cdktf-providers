// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelesscontrollerWtpprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#admin_auth_tacacs WirelesscontrollerWtpprofile#admin_auth_tacacs}
  */
  readonly adminAuthTacacs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#admin_restrict_local WirelesscontrollerWtpprofile#admin_restrict_local}
  */
  readonly adminRestrictLocal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#allowaccess WirelesscontrollerWtpprofile#allowaccess}
  */
  readonly allowaccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ap_country WirelesscontrollerWtpprofile#ap_country}
  */
  readonly apCountry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ap_handoff WirelesscontrollerWtpprofile#ap_handoff}
  */
  readonly apHandoff?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#apcfg_mesh WirelesscontrollerWtpprofile#apcfg_mesh}
  */
  readonly apcfgMesh?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#apcfg_mesh_ap_type WirelesscontrollerWtpprofile#apcfg_mesh_ap_type}
  */
  readonly apcfgMeshApType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#apcfg_mesh_eth_bridge WirelesscontrollerWtpprofile#apcfg_mesh_eth_bridge}
  */
  readonly apcfgMeshEthBridge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#apcfg_mesh_ssid WirelesscontrollerWtpprofile#apcfg_mesh_ssid}
  */
  readonly apcfgMeshSsid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#apcfg_profile WirelesscontrollerWtpprofile#apcfg_profile}
  */
  readonly apcfgProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ble_profile WirelesscontrollerWtpprofile#ble_profile}
  */
  readonly bleProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#bonjour_profile WirelesscontrollerWtpprofile#bonjour_profile}
  */
  readonly bonjourProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#comment WirelesscontrollerWtpprofile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#console_login WirelesscontrollerWtpprofile#console_login}
  */
  readonly consoleLogin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#control_message_offload WirelesscontrollerWtpprofile#control_message_offload}
  */
  readonly controlMessageOffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#default_mesh_root WirelesscontrollerWtpprofile#default_mesh_root}
  */
  readonly defaultMeshRoot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#dtls_in_kernel WirelesscontrollerWtpprofile#dtls_in_kernel}
  */
  readonly dtlsInKernel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#dtls_policy WirelesscontrollerWtpprofile#dtls_policy}
  */
  readonly dtlsPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#dynamic_sort_subtable WirelesscontrollerWtpprofile#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#energy_efficient_ethernet WirelesscontrollerWtpprofile#energy_efficient_ethernet}
  */
  readonly energyEfficientEthernet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ext_info_enable WirelesscontrollerWtpprofile#ext_info_enable}
  */
  readonly extInfoEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#frequency_handoff WirelesscontrollerWtpprofile#frequency_handoff}
  */
  readonly frequencyHandoff?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#get_all_tables WirelesscontrollerWtpprofile#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#handoff_roaming WirelesscontrollerWtpprofile#handoff_roaming}
  */
  readonly handoffRoaming?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#handoff_rssi WirelesscontrollerWtpprofile#handoff_rssi}
  */
  readonly handoffRssi?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#handoff_sta_thresh WirelesscontrollerWtpprofile#handoff_sta_thresh}
  */
  readonly handoffStaThresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#id WirelesscontrollerWtpprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#indoor_outdoor_deployment WirelesscontrollerWtpprofile#indoor_outdoor_deployment}
  */
  readonly indoorOutdoorDeployment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ip_fragment_preventing WirelesscontrollerWtpprofile#ip_fragment_preventing}
  */
  readonly ipFragmentPreventing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#led_state WirelesscontrollerWtpprofile#led_state}
  */
  readonly ledState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#lldp WirelesscontrollerWtpprofile#lldp}
  */
  readonly lldp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#login_passwd WirelesscontrollerWtpprofile#login_passwd}
  */
  readonly loginPasswd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#login_passwd_change WirelesscontrollerWtpprofile#login_passwd_change}
  */
  readonly loginPasswdChange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#max_clients WirelesscontrollerWtpprofile#max_clients}
  */
  readonly maxClients?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#name WirelesscontrollerWtpprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#poe_mode WirelesscontrollerWtpprofile#poe_mode}
  */
  readonly poeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#split_tunneling_acl_local_ap_subnet WirelesscontrollerWtpprofile#split_tunneling_acl_local_ap_subnet}
  */
  readonly splitTunnelingAclLocalApSubnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#split_tunneling_acl_path WirelesscontrollerWtpprofile#split_tunneling_acl_path}
  */
  readonly splitTunnelingAclPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#syslog_profile WirelesscontrollerWtpprofile#syslog_profile}
  */
  readonly syslogProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#tun_mtu_downlink WirelesscontrollerWtpprofile#tun_mtu_downlink}
  */
  readonly tunMtuDownlink?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#tun_mtu_uplink WirelesscontrollerWtpprofile#tun_mtu_uplink}
  */
  readonly tunMtuUplink?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#unii_4_5ghz_band WirelesscontrollerWtpprofile#unii_4_5ghz_band}
  */
  readonly unii45GhzBand?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#usb_port WirelesscontrollerWtpprofile#usb_port}
  */
  readonly usbPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#vdomparam WirelesscontrollerWtpprofile#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#wan_port_auth WirelesscontrollerWtpprofile#wan_port_auth}
  */
  readonly wanPortAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#wan_port_auth_macsec WirelesscontrollerWtpprofile#wan_port_auth_macsec}
  */
  readonly wanPortAuthMacsec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#wan_port_auth_methods WirelesscontrollerWtpprofile#wan_port_auth_methods}
  */
  readonly wanPortAuthMethods?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#wan_port_auth_password WirelesscontrollerWtpprofile#wan_port_auth_password}
  */
  readonly wanPortAuthPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#wan_port_auth_usrname WirelesscontrollerWtpprofile#wan_port_auth_usrname}
  */
  readonly wanPortAuthUsrname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#wan_port_mode WirelesscontrollerWtpprofile#wan_port_mode}
  */
  readonly wanPortMode?: string;
  /**
  * deny_mac_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#deny_mac_list WirelesscontrollerWtpprofile#deny_mac_list}
  */
  readonly denyMacList?: WirelesscontrollerWtpprofileDenyMacListStruct[] | cdktf.IResolvable;
  /**
  * esl_ses_dongle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#esl_ses_dongle WirelesscontrollerWtpprofile#esl_ses_dongle}
  */
  readonly eslSesDongle?: WirelesscontrollerWtpprofileEslSesDongle;
  /**
  * lan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#lan WirelesscontrollerWtpprofile#lan}
  */
  readonly lan?: WirelesscontrollerWtpprofileLan;
  /**
  * lbs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#lbs WirelesscontrollerWtpprofile#lbs}
  */
  readonly lbs?: WirelesscontrollerWtpprofileLbs;
  /**
  * led_schedules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#led_schedules WirelesscontrollerWtpprofile#led_schedules}
  */
  readonly ledSchedules?: WirelesscontrollerWtpprofileLedSchedules[] | cdktf.IResolvable;
  /**
  * platform block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#platform WirelesscontrollerWtpprofile#platform}
  */
  readonly platform?: WirelesscontrollerWtpprofilePlatform;
  /**
  * radio_1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#radio_1 WirelesscontrollerWtpprofile#radio_1}
  */
  readonly radio1?: WirelesscontrollerWtpprofileRadio1;
  /**
  * radio_2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#radio_2 WirelesscontrollerWtpprofile#radio_2}
  */
  readonly radio2?: WirelesscontrollerWtpprofileRadio2;
  /**
  * radio_3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#radio_3 WirelesscontrollerWtpprofile#radio_3}
  */
  readonly radio3?: WirelesscontrollerWtpprofileRadio3;
  /**
  * radio_4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#radio_4 WirelesscontrollerWtpprofile#radio_4}
  */
  readonly radio4?: WirelesscontrollerWtpprofileRadio4;
  /**
  * split_tunneling_acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#split_tunneling_acl WirelesscontrollerWtpprofile#split_tunneling_acl}
  */
  readonly splitTunnelingAcl?: WirelesscontrollerWtpprofileSplitTunnelingAcl[] | cdktf.IResolvable;
}
export interface WirelesscontrollerWtpprofileDenyMacListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#id WirelesscontrollerWtpprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#mac WirelesscontrollerWtpprofile#mac}
  */
  readonly mac?: string;
}

export function wirelesscontrollerWtpprofileDenyMacListStructToTerraform(struct?: WirelesscontrollerWtpprofileDenyMacListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    mac: cdktf.stringToTerraform(struct!.mac),
  }
}


export function wirelesscontrollerWtpprofileDenyMacListStructToHclTerraform(struct?: WirelesscontrollerWtpprofileDenyMacListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerWtpprofileDenyMacListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelesscontrollerWtpprofileDenyMacListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerWtpprofileDenyMacListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._mac = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._mac = value.mac;
    }
  }

  // id - computed: true, optional: true, required: false
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

  // mac - computed: true, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }
}

export class WirelesscontrollerWtpprofileDenyMacListStructList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerWtpprofileDenyMacListStruct[] | cdktf.IResolvable

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
  public get(index: number): WirelesscontrollerWtpprofileDenyMacListStructOutputReference {
    return new WirelesscontrollerWtpprofileDenyMacListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelesscontrollerWtpprofileEslSesDongle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#apc_addr_type WirelesscontrollerWtpprofile#apc_addr_type}
  */
  readonly apcAddrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#apc_fqdn WirelesscontrollerWtpprofile#apc_fqdn}
  */
  readonly apcFqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#apc_ip WirelesscontrollerWtpprofile#apc_ip}
  */
  readonly apcIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#apc_port WirelesscontrollerWtpprofile#apc_port}
  */
  readonly apcPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#coex_level WirelesscontrollerWtpprofile#coex_level}
  */
  readonly coexLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#compliance_level WirelesscontrollerWtpprofile#compliance_level}
  */
  readonly complianceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#esl_channel WirelesscontrollerWtpprofile#esl_channel}
  */
  readonly eslChannel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#output_power WirelesscontrollerWtpprofile#output_power}
  */
  readonly outputPower?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#scd_enable WirelesscontrollerWtpprofile#scd_enable}
  */
  readonly scdEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#tls_cert_verification WirelesscontrollerWtpprofile#tls_cert_verification}
  */
  readonly tlsCertVerification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#tls_fqdn_verification WirelesscontrollerWtpprofile#tls_fqdn_verification}
  */
  readonly tlsFqdnVerification?: string;
}

export function wirelesscontrollerWtpprofileEslSesDongleToTerraform(struct?: WirelesscontrollerWtpprofileEslSesDongleOutputReference | WirelesscontrollerWtpprofileEslSesDongle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apc_addr_type: cdktf.stringToTerraform(struct!.apcAddrType),
    apc_fqdn: cdktf.stringToTerraform(struct!.apcFqdn),
    apc_ip: cdktf.stringToTerraform(struct!.apcIp),
    apc_port: cdktf.numberToTerraform(struct!.apcPort),
    coex_level: cdktf.stringToTerraform(struct!.coexLevel),
    compliance_level: cdktf.stringToTerraform(struct!.complianceLevel),
    esl_channel: cdktf.stringToTerraform(struct!.eslChannel),
    output_power: cdktf.stringToTerraform(struct!.outputPower),
    scd_enable: cdktf.stringToTerraform(struct!.scdEnable),
    tls_cert_verification: cdktf.stringToTerraform(struct!.tlsCertVerification),
    tls_fqdn_verification: cdktf.stringToTerraform(struct!.tlsFqdnVerification),
  }
}


export function wirelesscontrollerWtpprofileEslSesDongleToHclTerraform(struct?: WirelesscontrollerWtpprofileEslSesDongleOutputReference | WirelesscontrollerWtpprofileEslSesDongle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apc_addr_type: {
      value: cdktf.stringToHclTerraform(struct!.apcAddrType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apc_fqdn: {
      value: cdktf.stringToHclTerraform(struct!.apcFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apc_ip: {
      value: cdktf.stringToHclTerraform(struct!.apcIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apc_port: {
      value: cdktf.numberToHclTerraform(struct!.apcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    coex_level: {
      value: cdktf.stringToHclTerraform(struct!.coexLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compliance_level: {
      value: cdktf.stringToHclTerraform(struct!.complianceLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    esl_channel: {
      value: cdktf.stringToHclTerraform(struct!.eslChannel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_power: {
      value: cdktf.stringToHclTerraform(struct!.outputPower),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scd_enable: {
      value: cdktf.stringToHclTerraform(struct!.scdEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_cert_verification: {
      value: cdktf.stringToHclTerraform(struct!.tlsCertVerification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_fqdn_verification: {
      value: cdktf.stringToHclTerraform(struct!.tlsFqdnVerification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerWtpprofileEslSesDongleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WirelesscontrollerWtpprofileEslSesDongle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apcAddrType !== undefined) {
      hasAnyValues = true;
      internalValueResult.apcAddrType = this._apcAddrType;
    }
    if (this._apcFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.apcFqdn = this._apcFqdn;
    }
    if (this._apcIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.apcIp = this._apcIp;
    }
    if (this._apcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.apcPort = this._apcPort;
    }
    if (this._coexLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.coexLevel = this._coexLevel;
    }
    if (this._complianceLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.complianceLevel = this._complianceLevel;
    }
    if (this._eslChannel !== undefined) {
      hasAnyValues = true;
      internalValueResult.eslChannel = this._eslChannel;
    }
    if (this._outputPower !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputPower = this._outputPower;
    }
    if (this._scdEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.scdEnable = this._scdEnable;
    }
    if (this._tlsCertVerification !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertVerification = this._tlsCertVerification;
    }
    if (this._tlsFqdnVerification !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsFqdnVerification = this._tlsFqdnVerification;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerWtpprofileEslSesDongle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apcAddrType = undefined;
      this._apcFqdn = undefined;
      this._apcIp = undefined;
      this._apcPort = undefined;
      this._coexLevel = undefined;
      this._complianceLevel = undefined;
      this._eslChannel = undefined;
      this._outputPower = undefined;
      this._scdEnable = undefined;
      this._tlsCertVerification = undefined;
      this._tlsFqdnVerification = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apcAddrType = value.apcAddrType;
      this._apcFqdn = value.apcFqdn;
      this._apcIp = value.apcIp;
      this._apcPort = value.apcPort;
      this._coexLevel = value.coexLevel;
      this._complianceLevel = value.complianceLevel;
      this._eslChannel = value.eslChannel;
      this._outputPower = value.outputPower;
      this._scdEnable = value.scdEnable;
      this._tlsCertVerification = value.tlsCertVerification;
      this._tlsFqdnVerification = value.tlsFqdnVerification;
    }
  }

  // apc_addr_type - computed: true, optional: true, required: false
  private _apcAddrType?: string; 
  public get apcAddrType() {
    return this.getStringAttribute('apc_addr_type');
  }
  public set apcAddrType(value: string) {
    this._apcAddrType = value;
  }
  public resetApcAddrType() {
    this._apcAddrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apcAddrTypeInput() {
    return this._apcAddrType;
  }

  // apc_fqdn - computed: false, optional: true, required: false
  private _apcFqdn?: string; 
  public get apcFqdn() {
    return this.getStringAttribute('apc_fqdn');
  }
  public set apcFqdn(value: string) {
    this._apcFqdn = value;
  }
  public resetApcFqdn() {
    this._apcFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apcFqdnInput() {
    return this._apcFqdn;
  }

  // apc_ip - computed: true, optional: true, required: false
  private _apcIp?: string; 
  public get apcIp() {
    return this.getStringAttribute('apc_ip');
  }
  public set apcIp(value: string) {
    this._apcIp = value;
  }
  public resetApcIp() {
    this._apcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apcIpInput() {
    return this._apcIp;
  }

  // apc_port - computed: false, optional: true, required: false
  private _apcPort?: number; 
  public get apcPort() {
    return this.getNumberAttribute('apc_port');
  }
  public set apcPort(value: number) {
    this._apcPort = value;
  }
  public resetApcPort() {
    this._apcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apcPortInput() {
    return this._apcPort;
  }

  // coex_level - computed: true, optional: true, required: false
  private _coexLevel?: string; 
  public get coexLevel() {
    return this.getStringAttribute('coex_level');
  }
  public set coexLevel(value: string) {
    this._coexLevel = value;
  }
  public resetCoexLevel() {
    this._coexLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coexLevelInput() {
    return this._coexLevel;
  }

  // compliance_level - computed: true, optional: true, required: false
  private _complianceLevel?: string; 
  public get complianceLevel() {
    return this.getStringAttribute('compliance_level');
  }
  public set complianceLevel(value: string) {
    this._complianceLevel = value;
  }
  public resetComplianceLevel() {
    this._complianceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceLevelInput() {
    return this._complianceLevel;
  }

  // esl_channel - computed: true, optional: true, required: false
  private _eslChannel?: string; 
  public get eslChannel() {
    return this.getStringAttribute('esl_channel');
  }
  public set eslChannel(value: string) {
    this._eslChannel = value;
  }
  public resetEslChannel() {
    this._eslChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eslChannelInput() {
    return this._eslChannel;
  }

  // output_power - computed: true, optional: true, required: false
  private _outputPower?: string; 
  public get outputPower() {
    return this.getStringAttribute('output_power');
  }
  public set outputPower(value: string) {
    this._outputPower = value;
  }
  public resetOutputPower() {
    this._outputPower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputPowerInput() {
    return this._outputPower;
  }

  // scd_enable - computed: true, optional: true, required: false
  private _scdEnable?: string; 
  public get scdEnable() {
    return this.getStringAttribute('scd_enable');
  }
  public set scdEnable(value: string) {
    this._scdEnable = value;
  }
  public resetScdEnable() {
    this._scdEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scdEnableInput() {
    return this._scdEnable;
  }

  // tls_cert_verification - computed: true, optional: true, required: false
  private _tlsCertVerification?: string; 
  public get tlsCertVerification() {
    return this.getStringAttribute('tls_cert_verification');
  }
  public set tlsCertVerification(value: string) {
    this._tlsCertVerification = value;
  }
  public resetTlsCertVerification() {
    this._tlsCertVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertVerificationInput() {
    return this._tlsCertVerification;
  }

  // tls_fqdn_verification - computed: true, optional: true, required: false
  private _tlsFqdnVerification?: string; 
  public get tlsFqdnVerification() {
    return this.getStringAttribute('tls_fqdn_verification');
  }
  public set tlsFqdnVerification(value: string) {
    this._tlsFqdnVerification = value;
  }
  public resetTlsFqdnVerification() {
    this._tlsFqdnVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsFqdnVerificationInput() {
    return this._tlsFqdnVerification;
  }
}
export interface WirelesscontrollerWtpprofileLan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#port1_mode WirelesscontrollerWtpprofile#port1_mode}
  */
  readonly port1Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#port1_ssid WirelesscontrollerWtpprofile#port1_ssid}
  */
  readonly port1Ssid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#port2_mode WirelesscontrollerWtpprofile#port2_mode}
  */
  readonly port2Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#port2_ssid WirelesscontrollerWtpprofile#port2_ssid}
  */
  readonly port2Ssid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#port3_mode WirelesscontrollerWtpprofile#port3_mode}
  */
  readonly port3Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#port3_ssid WirelesscontrollerWtpprofile#port3_ssid}
  */
  readonly port3Ssid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#port4_mode WirelesscontrollerWtpprofile#port4_mode}
  */
  readonly port4Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#port4_ssid WirelesscontrollerWtpprofile#port4_ssid}
  */
  readonly port4Ssid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#port5_mode WirelesscontrollerWtpprofile#port5_mode}
  */
  readonly port5Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#port5_ssid WirelesscontrollerWtpprofile#port5_ssid}
  */
  readonly port5Ssid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#port6_mode WirelesscontrollerWtpprofile#port6_mode}
  */
  readonly port6Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#port6_ssid WirelesscontrollerWtpprofile#port6_ssid}
  */
  readonly port6Ssid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#port7_mode WirelesscontrollerWtpprofile#port7_mode}
  */
  readonly port7Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#port7_ssid WirelesscontrollerWtpprofile#port7_ssid}
  */
  readonly port7Ssid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#port8_mode WirelesscontrollerWtpprofile#port8_mode}
  */
  readonly port8Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#port8_ssid WirelesscontrollerWtpprofile#port8_ssid}
  */
  readonly port8Ssid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#port_esl_mode WirelesscontrollerWtpprofile#port_esl_mode}
  */
  readonly portEslMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#port_esl_ssid WirelesscontrollerWtpprofile#port_esl_ssid}
  */
  readonly portEslSsid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#port_mode WirelesscontrollerWtpprofile#port_mode}
  */
  readonly portMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#port_ssid WirelesscontrollerWtpprofile#port_ssid}
  */
  readonly portSsid?: string;
}

export function wirelesscontrollerWtpprofileLanToTerraform(struct?: WirelesscontrollerWtpprofileLanOutputReference | WirelesscontrollerWtpprofileLan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port1_mode: cdktf.stringToTerraform(struct!.port1Mode),
    port1_ssid: cdktf.stringToTerraform(struct!.port1Ssid),
    port2_mode: cdktf.stringToTerraform(struct!.port2Mode),
    port2_ssid: cdktf.stringToTerraform(struct!.port2Ssid),
    port3_mode: cdktf.stringToTerraform(struct!.port3Mode),
    port3_ssid: cdktf.stringToTerraform(struct!.port3Ssid),
    port4_mode: cdktf.stringToTerraform(struct!.port4Mode),
    port4_ssid: cdktf.stringToTerraform(struct!.port4Ssid),
    port5_mode: cdktf.stringToTerraform(struct!.port5Mode),
    port5_ssid: cdktf.stringToTerraform(struct!.port5Ssid),
    port6_mode: cdktf.stringToTerraform(struct!.port6Mode),
    port6_ssid: cdktf.stringToTerraform(struct!.port6Ssid),
    port7_mode: cdktf.stringToTerraform(struct!.port7Mode),
    port7_ssid: cdktf.stringToTerraform(struct!.port7Ssid),
    port8_mode: cdktf.stringToTerraform(struct!.port8Mode),
    port8_ssid: cdktf.stringToTerraform(struct!.port8Ssid),
    port_esl_mode: cdktf.stringToTerraform(struct!.portEslMode),
    port_esl_ssid: cdktf.stringToTerraform(struct!.portEslSsid),
    port_mode: cdktf.stringToTerraform(struct!.portMode),
    port_ssid: cdktf.stringToTerraform(struct!.portSsid),
  }
}


export function wirelesscontrollerWtpprofileLanToHclTerraform(struct?: WirelesscontrollerWtpprofileLanOutputReference | WirelesscontrollerWtpprofileLan): any {
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
      value: cdktf.stringToHclTerraform(struct!.port1Ssid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port2_mode: {
      value: cdktf.stringToHclTerraform(struct!.port2Mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port2_ssid: {
      value: cdktf.stringToHclTerraform(struct!.port2Ssid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port3_mode: {
      value: cdktf.stringToHclTerraform(struct!.port3Mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port3_ssid: {
      value: cdktf.stringToHclTerraform(struct!.port3Ssid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port4_mode: {
      value: cdktf.stringToHclTerraform(struct!.port4Mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port4_ssid: {
      value: cdktf.stringToHclTerraform(struct!.port4Ssid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port5_mode: {
      value: cdktf.stringToHclTerraform(struct!.port5Mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port5_ssid: {
      value: cdktf.stringToHclTerraform(struct!.port5Ssid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port6_mode: {
      value: cdktf.stringToHclTerraform(struct!.port6Mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port6_ssid: {
      value: cdktf.stringToHclTerraform(struct!.port6Ssid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port7_mode: {
      value: cdktf.stringToHclTerraform(struct!.port7Mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port7_ssid: {
      value: cdktf.stringToHclTerraform(struct!.port7Ssid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port8_mode: {
      value: cdktf.stringToHclTerraform(struct!.port8Mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port8_ssid: {
      value: cdktf.stringToHclTerraform(struct!.port8Ssid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_esl_mode: {
      value: cdktf.stringToHclTerraform(struct!.portEslMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_esl_ssid: {
      value: cdktf.stringToHclTerraform(struct!.portEslSsid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_mode: {
      value: cdktf.stringToHclTerraform(struct!.portMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_ssid: {
      value: cdktf.stringToHclTerraform(struct!.portSsid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerWtpprofileLanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WirelesscontrollerWtpprofileLan | undefined {
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

  public set internalValue(value: WirelesscontrollerWtpprofileLan | undefined) {
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

  // port1_ssid - computed: false, optional: true, required: false
  private _port1Ssid?: string; 
  public get port1Ssid() {
    return this.getStringAttribute('port1_ssid');
  }
  public set port1Ssid(value: string) {
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

  // port2_ssid - computed: false, optional: true, required: false
  private _port2Ssid?: string; 
  public get port2Ssid() {
    return this.getStringAttribute('port2_ssid');
  }
  public set port2Ssid(value: string) {
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

  // port3_ssid - computed: false, optional: true, required: false
  private _port3Ssid?: string; 
  public get port3Ssid() {
    return this.getStringAttribute('port3_ssid');
  }
  public set port3Ssid(value: string) {
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

  // port4_ssid - computed: false, optional: true, required: false
  private _port4Ssid?: string; 
  public get port4Ssid() {
    return this.getStringAttribute('port4_ssid');
  }
  public set port4Ssid(value: string) {
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

  // port5_ssid - computed: false, optional: true, required: false
  private _port5Ssid?: string; 
  public get port5Ssid() {
    return this.getStringAttribute('port5_ssid');
  }
  public set port5Ssid(value: string) {
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

  // port6_ssid - computed: false, optional: true, required: false
  private _port6Ssid?: string; 
  public get port6Ssid() {
    return this.getStringAttribute('port6_ssid');
  }
  public set port6Ssid(value: string) {
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

  // port7_ssid - computed: false, optional: true, required: false
  private _port7Ssid?: string; 
  public get port7Ssid() {
    return this.getStringAttribute('port7_ssid');
  }
  public set port7Ssid(value: string) {
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

  // port8_ssid - computed: false, optional: true, required: false
  private _port8Ssid?: string; 
  public get port8Ssid() {
    return this.getStringAttribute('port8_ssid');
  }
  public set port8Ssid(value: string) {
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

  // port_esl_ssid - computed: false, optional: true, required: false
  private _portEslSsid?: string; 
  public get portEslSsid() {
    return this.getStringAttribute('port_esl_ssid');
  }
  public set portEslSsid(value: string) {
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

  // port_ssid - computed: false, optional: true, required: false
  private _portSsid?: string; 
  public get portSsid() {
    return this.getStringAttribute('port_ssid');
  }
  public set portSsid(value: string) {
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
export interface WirelesscontrollerWtpprofileLbs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#aeroscout WirelesscontrollerWtpprofile#aeroscout}
  */
  readonly aeroscout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#aeroscout_ap_mac WirelesscontrollerWtpprofile#aeroscout_ap_mac}
  */
  readonly aeroscoutApMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#aeroscout_mmu_report WirelesscontrollerWtpprofile#aeroscout_mmu_report}
  */
  readonly aeroscoutMmuReport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#aeroscout_mu WirelesscontrollerWtpprofile#aeroscout_mu}
  */
  readonly aeroscoutMu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#aeroscout_mu_factor WirelesscontrollerWtpprofile#aeroscout_mu_factor}
  */
  readonly aeroscoutMuFactor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#aeroscout_mu_timeout WirelesscontrollerWtpprofile#aeroscout_mu_timeout}
  */
  readonly aeroscoutMuTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#aeroscout_server_ip WirelesscontrollerWtpprofile#aeroscout_server_ip}
  */
  readonly aeroscoutServerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#aeroscout_server_port WirelesscontrollerWtpprofile#aeroscout_server_port}
  */
  readonly aeroscoutServerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ble_rtls WirelesscontrollerWtpprofile#ble_rtls}
  */
  readonly bleRtls?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ble_rtls_accumulation_interval WirelesscontrollerWtpprofile#ble_rtls_accumulation_interval}
  */
  readonly bleRtlsAccumulationInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ble_rtls_asset_addrgrp_list WirelesscontrollerWtpprofile#ble_rtls_asset_addrgrp_list}
  */
  readonly bleRtlsAssetAddrgrpList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ble_rtls_asset_uuid_list1 WirelesscontrollerWtpprofile#ble_rtls_asset_uuid_list1}
  */
  readonly bleRtlsAssetUuidList1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ble_rtls_asset_uuid_list2 WirelesscontrollerWtpprofile#ble_rtls_asset_uuid_list2}
  */
  readonly bleRtlsAssetUuidList2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ble_rtls_asset_uuid_list3 WirelesscontrollerWtpprofile#ble_rtls_asset_uuid_list3}
  */
  readonly bleRtlsAssetUuidList3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ble_rtls_asset_uuid_list4 WirelesscontrollerWtpprofile#ble_rtls_asset_uuid_list4}
  */
  readonly bleRtlsAssetUuidList4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ble_rtls_protocol WirelesscontrollerWtpprofile#ble_rtls_protocol}
  */
  readonly bleRtlsProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ble_rtls_reporting_interval WirelesscontrollerWtpprofile#ble_rtls_reporting_interval}
  */
  readonly bleRtlsReportingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ble_rtls_server_fqdn WirelesscontrollerWtpprofile#ble_rtls_server_fqdn}
  */
  readonly bleRtlsServerFqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ble_rtls_server_path WirelesscontrollerWtpprofile#ble_rtls_server_path}
  */
  readonly bleRtlsServerPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ble_rtls_server_port WirelesscontrollerWtpprofile#ble_rtls_server_port}
  */
  readonly bleRtlsServerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ble_rtls_server_token WirelesscontrollerWtpprofile#ble_rtls_server_token}
  */
  readonly bleRtlsServerToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ekahau_blink_mode WirelesscontrollerWtpprofile#ekahau_blink_mode}
  */
  readonly ekahauBlinkMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ekahau_tag WirelesscontrollerWtpprofile#ekahau_tag}
  */
  readonly ekahauTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#erc_server_ip WirelesscontrollerWtpprofile#erc_server_ip}
  */
  readonly ercServerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#erc_server_port WirelesscontrollerWtpprofile#erc_server_port}
  */
  readonly ercServerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#fortipresence WirelesscontrollerWtpprofile#fortipresence}
  */
  readonly fortipresence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#fortipresence_ble WirelesscontrollerWtpprofile#fortipresence_ble}
  */
  readonly fortipresenceBle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#fortipresence_frequency WirelesscontrollerWtpprofile#fortipresence_frequency}
  */
  readonly fortipresenceFrequency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#fortipresence_port WirelesscontrollerWtpprofile#fortipresence_port}
  */
  readonly fortipresencePort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#fortipresence_project WirelesscontrollerWtpprofile#fortipresence_project}
  */
  readonly fortipresenceProject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#fortipresence_rogue WirelesscontrollerWtpprofile#fortipresence_rogue}
  */
  readonly fortipresenceRogue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#fortipresence_secret WirelesscontrollerWtpprofile#fortipresence_secret}
  */
  readonly fortipresenceSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#fortipresence_server WirelesscontrollerWtpprofile#fortipresence_server}
  */
  readonly fortipresenceServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#fortipresence_server_addr_type WirelesscontrollerWtpprofile#fortipresence_server_addr_type}
  */
  readonly fortipresenceServerAddrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#fortipresence_server_fqdn WirelesscontrollerWtpprofile#fortipresence_server_fqdn}
  */
  readonly fortipresenceServerFqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#fortipresence_unassoc WirelesscontrollerWtpprofile#fortipresence_unassoc}
  */
  readonly fortipresenceUnassoc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#polestar WirelesscontrollerWtpprofile#polestar}
  */
  readonly polestar?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#polestar_accumulation_interval WirelesscontrollerWtpprofile#polestar_accumulation_interval}
  */
  readonly polestarAccumulationInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#polestar_asset_addrgrp_list WirelesscontrollerWtpprofile#polestar_asset_addrgrp_list}
  */
  readonly polestarAssetAddrgrpList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#polestar_asset_uuid_list1 WirelesscontrollerWtpprofile#polestar_asset_uuid_list1}
  */
  readonly polestarAssetUuidList1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#polestar_asset_uuid_list2 WirelesscontrollerWtpprofile#polestar_asset_uuid_list2}
  */
  readonly polestarAssetUuidList2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#polestar_asset_uuid_list3 WirelesscontrollerWtpprofile#polestar_asset_uuid_list3}
  */
  readonly polestarAssetUuidList3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#polestar_asset_uuid_list4 WirelesscontrollerWtpprofile#polestar_asset_uuid_list4}
  */
  readonly polestarAssetUuidList4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#polestar_protocol WirelesscontrollerWtpprofile#polestar_protocol}
  */
  readonly polestarProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#polestar_reporting_interval WirelesscontrollerWtpprofile#polestar_reporting_interval}
  */
  readonly polestarReportingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#polestar_server_fqdn WirelesscontrollerWtpprofile#polestar_server_fqdn}
  */
  readonly polestarServerFqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#polestar_server_path WirelesscontrollerWtpprofile#polestar_server_path}
  */
  readonly polestarServerPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#polestar_server_port WirelesscontrollerWtpprofile#polestar_server_port}
  */
  readonly polestarServerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#polestar_server_token WirelesscontrollerWtpprofile#polestar_server_token}
  */
  readonly polestarServerToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#station_locate WirelesscontrollerWtpprofile#station_locate}
  */
  readonly stationLocate?: string;
}

export function wirelesscontrollerWtpprofileLbsToTerraform(struct?: WirelesscontrollerWtpprofileLbsOutputReference | WirelesscontrollerWtpprofileLbs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aeroscout: cdktf.stringToTerraform(struct!.aeroscout),
    aeroscout_ap_mac: cdktf.stringToTerraform(struct!.aeroscoutApMac),
    aeroscout_mmu_report: cdktf.stringToTerraform(struct!.aeroscoutMmuReport),
    aeroscout_mu: cdktf.stringToTerraform(struct!.aeroscoutMu),
    aeroscout_mu_factor: cdktf.numberToTerraform(struct!.aeroscoutMuFactor),
    aeroscout_mu_timeout: cdktf.numberToTerraform(struct!.aeroscoutMuTimeout),
    aeroscout_server_ip: cdktf.stringToTerraform(struct!.aeroscoutServerIp),
    aeroscout_server_port: cdktf.numberToTerraform(struct!.aeroscoutServerPort),
    ble_rtls: cdktf.stringToTerraform(struct!.bleRtls),
    ble_rtls_accumulation_interval: cdktf.numberToTerraform(struct!.bleRtlsAccumulationInterval),
    ble_rtls_asset_addrgrp_list: cdktf.stringToTerraform(struct!.bleRtlsAssetAddrgrpList),
    ble_rtls_asset_uuid_list1: cdktf.stringToTerraform(struct!.bleRtlsAssetUuidList1),
    ble_rtls_asset_uuid_list2: cdktf.stringToTerraform(struct!.bleRtlsAssetUuidList2),
    ble_rtls_asset_uuid_list3: cdktf.stringToTerraform(struct!.bleRtlsAssetUuidList3),
    ble_rtls_asset_uuid_list4: cdktf.stringToTerraform(struct!.bleRtlsAssetUuidList4),
    ble_rtls_protocol: cdktf.stringToTerraform(struct!.bleRtlsProtocol),
    ble_rtls_reporting_interval: cdktf.numberToTerraform(struct!.bleRtlsReportingInterval),
    ble_rtls_server_fqdn: cdktf.stringToTerraform(struct!.bleRtlsServerFqdn),
    ble_rtls_server_path: cdktf.stringToTerraform(struct!.bleRtlsServerPath),
    ble_rtls_server_port: cdktf.numberToTerraform(struct!.bleRtlsServerPort),
    ble_rtls_server_token: cdktf.stringToTerraform(struct!.bleRtlsServerToken),
    ekahau_blink_mode: cdktf.stringToTerraform(struct!.ekahauBlinkMode),
    ekahau_tag: cdktf.stringToTerraform(struct!.ekahauTag),
    erc_server_ip: cdktf.stringToTerraform(struct!.ercServerIp),
    erc_server_port: cdktf.numberToTerraform(struct!.ercServerPort),
    fortipresence: cdktf.stringToTerraform(struct!.fortipresence),
    fortipresence_ble: cdktf.stringToTerraform(struct!.fortipresenceBle),
    fortipresence_frequency: cdktf.numberToTerraform(struct!.fortipresenceFrequency),
    fortipresence_port: cdktf.numberToTerraform(struct!.fortipresencePort),
    fortipresence_project: cdktf.stringToTerraform(struct!.fortipresenceProject),
    fortipresence_rogue: cdktf.stringToTerraform(struct!.fortipresenceRogue),
    fortipresence_secret: cdktf.stringToTerraform(struct!.fortipresenceSecret),
    fortipresence_server: cdktf.stringToTerraform(struct!.fortipresenceServer),
    fortipresence_server_addr_type: cdktf.stringToTerraform(struct!.fortipresenceServerAddrType),
    fortipresence_server_fqdn: cdktf.stringToTerraform(struct!.fortipresenceServerFqdn),
    fortipresence_unassoc: cdktf.stringToTerraform(struct!.fortipresenceUnassoc),
    polestar: cdktf.stringToTerraform(struct!.polestar),
    polestar_accumulation_interval: cdktf.numberToTerraform(struct!.polestarAccumulationInterval),
    polestar_asset_addrgrp_list: cdktf.stringToTerraform(struct!.polestarAssetAddrgrpList),
    polestar_asset_uuid_list1: cdktf.stringToTerraform(struct!.polestarAssetUuidList1),
    polestar_asset_uuid_list2: cdktf.stringToTerraform(struct!.polestarAssetUuidList2),
    polestar_asset_uuid_list3: cdktf.stringToTerraform(struct!.polestarAssetUuidList3),
    polestar_asset_uuid_list4: cdktf.stringToTerraform(struct!.polestarAssetUuidList4),
    polestar_protocol: cdktf.stringToTerraform(struct!.polestarProtocol),
    polestar_reporting_interval: cdktf.numberToTerraform(struct!.polestarReportingInterval),
    polestar_server_fqdn: cdktf.stringToTerraform(struct!.polestarServerFqdn),
    polestar_server_path: cdktf.stringToTerraform(struct!.polestarServerPath),
    polestar_server_port: cdktf.numberToTerraform(struct!.polestarServerPort),
    polestar_server_token: cdktf.stringToTerraform(struct!.polestarServerToken),
    station_locate: cdktf.stringToTerraform(struct!.stationLocate),
  }
}


export function wirelesscontrollerWtpprofileLbsToHclTerraform(struct?: WirelesscontrollerWtpprofileLbsOutputReference | WirelesscontrollerWtpprofileLbs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aeroscout: {
      value: cdktf.stringToHclTerraform(struct!.aeroscout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aeroscout_ap_mac: {
      value: cdktf.stringToHclTerraform(struct!.aeroscoutApMac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aeroscout_mmu_report: {
      value: cdktf.stringToHclTerraform(struct!.aeroscoutMmuReport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aeroscout_mu: {
      value: cdktf.stringToHclTerraform(struct!.aeroscoutMu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aeroscout_mu_factor: {
      value: cdktf.numberToHclTerraform(struct!.aeroscoutMuFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aeroscout_mu_timeout: {
      value: cdktf.numberToHclTerraform(struct!.aeroscoutMuTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aeroscout_server_ip: {
      value: cdktf.stringToHclTerraform(struct!.aeroscoutServerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aeroscout_server_port: {
      value: cdktf.numberToHclTerraform(struct!.aeroscoutServerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ble_rtls: {
      value: cdktf.stringToHclTerraform(struct!.bleRtls),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ble_rtls_accumulation_interval: {
      value: cdktf.numberToHclTerraform(struct!.bleRtlsAccumulationInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ble_rtls_asset_addrgrp_list: {
      value: cdktf.stringToHclTerraform(struct!.bleRtlsAssetAddrgrpList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ble_rtls_asset_uuid_list1: {
      value: cdktf.stringToHclTerraform(struct!.bleRtlsAssetUuidList1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ble_rtls_asset_uuid_list2: {
      value: cdktf.stringToHclTerraform(struct!.bleRtlsAssetUuidList2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ble_rtls_asset_uuid_list3: {
      value: cdktf.stringToHclTerraform(struct!.bleRtlsAssetUuidList3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ble_rtls_asset_uuid_list4: {
      value: cdktf.stringToHclTerraform(struct!.bleRtlsAssetUuidList4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ble_rtls_protocol: {
      value: cdktf.stringToHclTerraform(struct!.bleRtlsProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ble_rtls_reporting_interval: {
      value: cdktf.numberToHclTerraform(struct!.bleRtlsReportingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ble_rtls_server_fqdn: {
      value: cdktf.stringToHclTerraform(struct!.bleRtlsServerFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ble_rtls_server_path: {
      value: cdktf.stringToHclTerraform(struct!.bleRtlsServerPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ble_rtls_server_port: {
      value: cdktf.numberToHclTerraform(struct!.bleRtlsServerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ble_rtls_server_token: {
      value: cdktf.stringToHclTerraform(struct!.bleRtlsServerToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ekahau_blink_mode: {
      value: cdktf.stringToHclTerraform(struct!.ekahauBlinkMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ekahau_tag: {
      value: cdktf.stringToHclTerraform(struct!.ekahauTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    erc_server_ip: {
      value: cdktf.stringToHclTerraform(struct!.ercServerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    erc_server_port: {
      value: cdktf.numberToHclTerraform(struct!.ercServerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fortipresence: {
      value: cdktf.stringToHclTerraform(struct!.fortipresence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortipresence_ble: {
      value: cdktf.stringToHclTerraform(struct!.fortipresenceBle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortipresence_frequency: {
      value: cdktf.numberToHclTerraform(struct!.fortipresenceFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fortipresence_port: {
      value: cdktf.numberToHclTerraform(struct!.fortipresencePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fortipresence_project: {
      value: cdktf.stringToHclTerraform(struct!.fortipresenceProject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortipresence_rogue: {
      value: cdktf.stringToHclTerraform(struct!.fortipresenceRogue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortipresence_secret: {
      value: cdktf.stringToHclTerraform(struct!.fortipresenceSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortipresence_server: {
      value: cdktf.stringToHclTerraform(struct!.fortipresenceServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortipresence_server_addr_type: {
      value: cdktf.stringToHclTerraform(struct!.fortipresenceServerAddrType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortipresence_server_fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fortipresenceServerFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortipresence_unassoc: {
      value: cdktf.stringToHclTerraform(struct!.fortipresenceUnassoc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    polestar: {
      value: cdktf.stringToHclTerraform(struct!.polestar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    polestar_accumulation_interval: {
      value: cdktf.numberToHclTerraform(struct!.polestarAccumulationInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    polestar_asset_addrgrp_list: {
      value: cdktf.stringToHclTerraform(struct!.polestarAssetAddrgrpList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    polestar_asset_uuid_list1: {
      value: cdktf.stringToHclTerraform(struct!.polestarAssetUuidList1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    polestar_asset_uuid_list2: {
      value: cdktf.stringToHclTerraform(struct!.polestarAssetUuidList2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    polestar_asset_uuid_list3: {
      value: cdktf.stringToHclTerraform(struct!.polestarAssetUuidList3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    polestar_asset_uuid_list4: {
      value: cdktf.stringToHclTerraform(struct!.polestarAssetUuidList4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    polestar_protocol: {
      value: cdktf.stringToHclTerraform(struct!.polestarProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    polestar_reporting_interval: {
      value: cdktf.numberToHclTerraform(struct!.polestarReportingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    polestar_server_fqdn: {
      value: cdktf.stringToHclTerraform(struct!.polestarServerFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    polestar_server_path: {
      value: cdktf.stringToHclTerraform(struct!.polestarServerPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    polestar_server_port: {
      value: cdktf.numberToHclTerraform(struct!.polestarServerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    polestar_server_token: {
      value: cdktf.stringToHclTerraform(struct!.polestarServerToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    station_locate: {
      value: cdktf.stringToHclTerraform(struct!.stationLocate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerWtpprofileLbsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WirelesscontrollerWtpprofileLbs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aeroscout !== undefined) {
      hasAnyValues = true;
      internalValueResult.aeroscout = this._aeroscout;
    }
    if (this._aeroscoutApMac !== undefined) {
      hasAnyValues = true;
      internalValueResult.aeroscoutApMac = this._aeroscoutApMac;
    }
    if (this._aeroscoutMmuReport !== undefined) {
      hasAnyValues = true;
      internalValueResult.aeroscoutMmuReport = this._aeroscoutMmuReport;
    }
    if (this._aeroscoutMu !== undefined) {
      hasAnyValues = true;
      internalValueResult.aeroscoutMu = this._aeroscoutMu;
    }
    if (this._aeroscoutMuFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.aeroscoutMuFactor = this._aeroscoutMuFactor;
    }
    if (this._aeroscoutMuTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.aeroscoutMuTimeout = this._aeroscoutMuTimeout;
    }
    if (this._aeroscoutServerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.aeroscoutServerIp = this._aeroscoutServerIp;
    }
    if (this._aeroscoutServerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.aeroscoutServerPort = this._aeroscoutServerPort;
    }
    if (this._bleRtls !== undefined) {
      hasAnyValues = true;
      internalValueResult.bleRtls = this._bleRtls;
    }
    if (this._bleRtlsAccumulationInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bleRtlsAccumulationInterval = this._bleRtlsAccumulationInterval;
    }
    if (this._bleRtlsAssetAddrgrpList !== undefined) {
      hasAnyValues = true;
      internalValueResult.bleRtlsAssetAddrgrpList = this._bleRtlsAssetAddrgrpList;
    }
    if (this._bleRtlsAssetUuidList1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.bleRtlsAssetUuidList1 = this._bleRtlsAssetUuidList1;
    }
    if (this._bleRtlsAssetUuidList2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.bleRtlsAssetUuidList2 = this._bleRtlsAssetUuidList2;
    }
    if (this._bleRtlsAssetUuidList3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.bleRtlsAssetUuidList3 = this._bleRtlsAssetUuidList3;
    }
    if (this._bleRtlsAssetUuidList4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.bleRtlsAssetUuidList4 = this._bleRtlsAssetUuidList4;
    }
    if (this._bleRtlsProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.bleRtlsProtocol = this._bleRtlsProtocol;
    }
    if (this._bleRtlsReportingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bleRtlsReportingInterval = this._bleRtlsReportingInterval;
    }
    if (this._bleRtlsServerFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bleRtlsServerFqdn = this._bleRtlsServerFqdn;
    }
    if (this._bleRtlsServerPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.bleRtlsServerPath = this._bleRtlsServerPath;
    }
    if (this._bleRtlsServerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.bleRtlsServerPort = this._bleRtlsServerPort;
    }
    if (this._bleRtlsServerToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.bleRtlsServerToken = this._bleRtlsServerToken;
    }
    if (this._ekahauBlinkMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ekahauBlinkMode = this._ekahauBlinkMode;
    }
    if (this._ekahauTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.ekahauTag = this._ekahauTag;
    }
    if (this._ercServerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ercServerIp = this._ercServerIp;
    }
    if (this._ercServerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.ercServerPort = this._ercServerPort;
    }
    if (this._fortipresence !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortipresence = this._fortipresence;
    }
    if (this._fortipresenceBle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortipresenceBle = this._fortipresenceBle;
    }
    if (this._fortipresenceFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortipresenceFrequency = this._fortipresenceFrequency;
    }
    if (this._fortipresencePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortipresencePort = this._fortipresencePort;
    }
    if (this._fortipresenceProject !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortipresenceProject = this._fortipresenceProject;
    }
    if (this._fortipresenceRogue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortipresenceRogue = this._fortipresenceRogue;
    }
    if (this._fortipresenceSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortipresenceSecret = this._fortipresenceSecret;
    }
    if (this._fortipresenceServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortipresenceServer = this._fortipresenceServer;
    }
    if (this._fortipresenceServerAddrType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortipresenceServerAddrType = this._fortipresenceServerAddrType;
    }
    if (this._fortipresenceServerFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortipresenceServerFqdn = this._fortipresenceServerFqdn;
    }
    if (this._fortipresenceUnassoc !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortipresenceUnassoc = this._fortipresenceUnassoc;
    }
    if (this._polestar !== undefined) {
      hasAnyValues = true;
      internalValueResult.polestar = this._polestar;
    }
    if (this._polestarAccumulationInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.polestarAccumulationInterval = this._polestarAccumulationInterval;
    }
    if (this._polestarAssetAddrgrpList !== undefined) {
      hasAnyValues = true;
      internalValueResult.polestarAssetAddrgrpList = this._polestarAssetAddrgrpList;
    }
    if (this._polestarAssetUuidList1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.polestarAssetUuidList1 = this._polestarAssetUuidList1;
    }
    if (this._polestarAssetUuidList2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.polestarAssetUuidList2 = this._polestarAssetUuidList2;
    }
    if (this._polestarAssetUuidList3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.polestarAssetUuidList3 = this._polestarAssetUuidList3;
    }
    if (this._polestarAssetUuidList4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.polestarAssetUuidList4 = this._polestarAssetUuidList4;
    }
    if (this._polestarProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.polestarProtocol = this._polestarProtocol;
    }
    if (this._polestarReportingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.polestarReportingInterval = this._polestarReportingInterval;
    }
    if (this._polestarServerFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.polestarServerFqdn = this._polestarServerFqdn;
    }
    if (this._polestarServerPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.polestarServerPath = this._polestarServerPath;
    }
    if (this._polestarServerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.polestarServerPort = this._polestarServerPort;
    }
    if (this._polestarServerToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.polestarServerToken = this._polestarServerToken;
    }
    if (this._stationLocate !== undefined) {
      hasAnyValues = true;
      internalValueResult.stationLocate = this._stationLocate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerWtpprofileLbs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aeroscout = undefined;
      this._aeroscoutApMac = undefined;
      this._aeroscoutMmuReport = undefined;
      this._aeroscoutMu = undefined;
      this._aeroscoutMuFactor = undefined;
      this._aeroscoutMuTimeout = undefined;
      this._aeroscoutServerIp = undefined;
      this._aeroscoutServerPort = undefined;
      this._bleRtls = undefined;
      this._bleRtlsAccumulationInterval = undefined;
      this._bleRtlsAssetAddrgrpList = undefined;
      this._bleRtlsAssetUuidList1 = undefined;
      this._bleRtlsAssetUuidList2 = undefined;
      this._bleRtlsAssetUuidList3 = undefined;
      this._bleRtlsAssetUuidList4 = undefined;
      this._bleRtlsProtocol = undefined;
      this._bleRtlsReportingInterval = undefined;
      this._bleRtlsServerFqdn = undefined;
      this._bleRtlsServerPath = undefined;
      this._bleRtlsServerPort = undefined;
      this._bleRtlsServerToken = undefined;
      this._ekahauBlinkMode = undefined;
      this._ekahauTag = undefined;
      this._ercServerIp = undefined;
      this._ercServerPort = undefined;
      this._fortipresence = undefined;
      this._fortipresenceBle = undefined;
      this._fortipresenceFrequency = undefined;
      this._fortipresencePort = undefined;
      this._fortipresenceProject = undefined;
      this._fortipresenceRogue = undefined;
      this._fortipresenceSecret = undefined;
      this._fortipresenceServer = undefined;
      this._fortipresenceServerAddrType = undefined;
      this._fortipresenceServerFqdn = undefined;
      this._fortipresenceUnassoc = undefined;
      this._polestar = undefined;
      this._polestarAccumulationInterval = undefined;
      this._polestarAssetAddrgrpList = undefined;
      this._polestarAssetUuidList1 = undefined;
      this._polestarAssetUuidList2 = undefined;
      this._polestarAssetUuidList3 = undefined;
      this._polestarAssetUuidList4 = undefined;
      this._polestarProtocol = undefined;
      this._polestarReportingInterval = undefined;
      this._polestarServerFqdn = undefined;
      this._polestarServerPath = undefined;
      this._polestarServerPort = undefined;
      this._polestarServerToken = undefined;
      this._stationLocate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aeroscout = value.aeroscout;
      this._aeroscoutApMac = value.aeroscoutApMac;
      this._aeroscoutMmuReport = value.aeroscoutMmuReport;
      this._aeroscoutMu = value.aeroscoutMu;
      this._aeroscoutMuFactor = value.aeroscoutMuFactor;
      this._aeroscoutMuTimeout = value.aeroscoutMuTimeout;
      this._aeroscoutServerIp = value.aeroscoutServerIp;
      this._aeroscoutServerPort = value.aeroscoutServerPort;
      this._bleRtls = value.bleRtls;
      this._bleRtlsAccumulationInterval = value.bleRtlsAccumulationInterval;
      this._bleRtlsAssetAddrgrpList = value.bleRtlsAssetAddrgrpList;
      this._bleRtlsAssetUuidList1 = value.bleRtlsAssetUuidList1;
      this._bleRtlsAssetUuidList2 = value.bleRtlsAssetUuidList2;
      this._bleRtlsAssetUuidList3 = value.bleRtlsAssetUuidList3;
      this._bleRtlsAssetUuidList4 = value.bleRtlsAssetUuidList4;
      this._bleRtlsProtocol = value.bleRtlsProtocol;
      this._bleRtlsReportingInterval = value.bleRtlsReportingInterval;
      this._bleRtlsServerFqdn = value.bleRtlsServerFqdn;
      this._bleRtlsServerPath = value.bleRtlsServerPath;
      this._bleRtlsServerPort = value.bleRtlsServerPort;
      this._bleRtlsServerToken = value.bleRtlsServerToken;
      this._ekahauBlinkMode = value.ekahauBlinkMode;
      this._ekahauTag = value.ekahauTag;
      this._ercServerIp = value.ercServerIp;
      this._ercServerPort = value.ercServerPort;
      this._fortipresence = value.fortipresence;
      this._fortipresenceBle = value.fortipresenceBle;
      this._fortipresenceFrequency = value.fortipresenceFrequency;
      this._fortipresencePort = value.fortipresencePort;
      this._fortipresenceProject = value.fortipresenceProject;
      this._fortipresenceRogue = value.fortipresenceRogue;
      this._fortipresenceSecret = value.fortipresenceSecret;
      this._fortipresenceServer = value.fortipresenceServer;
      this._fortipresenceServerAddrType = value.fortipresenceServerAddrType;
      this._fortipresenceServerFqdn = value.fortipresenceServerFqdn;
      this._fortipresenceUnassoc = value.fortipresenceUnassoc;
      this._polestar = value.polestar;
      this._polestarAccumulationInterval = value.polestarAccumulationInterval;
      this._polestarAssetAddrgrpList = value.polestarAssetAddrgrpList;
      this._polestarAssetUuidList1 = value.polestarAssetUuidList1;
      this._polestarAssetUuidList2 = value.polestarAssetUuidList2;
      this._polestarAssetUuidList3 = value.polestarAssetUuidList3;
      this._polestarAssetUuidList4 = value.polestarAssetUuidList4;
      this._polestarProtocol = value.polestarProtocol;
      this._polestarReportingInterval = value.polestarReportingInterval;
      this._polestarServerFqdn = value.polestarServerFqdn;
      this._polestarServerPath = value.polestarServerPath;
      this._polestarServerPort = value.polestarServerPort;
      this._polestarServerToken = value.polestarServerToken;
      this._stationLocate = value.stationLocate;
    }
  }

  // aeroscout - computed: true, optional: true, required: false
  private _aeroscout?: string; 
  public get aeroscout() {
    return this.getStringAttribute('aeroscout');
  }
  public set aeroscout(value: string) {
    this._aeroscout = value;
  }
  public resetAeroscout() {
    this._aeroscout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aeroscoutInput() {
    return this._aeroscout;
  }

  // aeroscout_ap_mac - computed: true, optional: true, required: false
  private _aeroscoutApMac?: string; 
  public get aeroscoutApMac() {
    return this.getStringAttribute('aeroscout_ap_mac');
  }
  public set aeroscoutApMac(value: string) {
    this._aeroscoutApMac = value;
  }
  public resetAeroscoutApMac() {
    this._aeroscoutApMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aeroscoutApMacInput() {
    return this._aeroscoutApMac;
  }

  // aeroscout_mmu_report - computed: true, optional: true, required: false
  private _aeroscoutMmuReport?: string; 
  public get aeroscoutMmuReport() {
    return this.getStringAttribute('aeroscout_mmu_report');
  }
  public set aeroscoutMmuReport(value: string) {
    this._aeroscoutMmuReport = value;
  }
  public resetAeroscoutMmuReport() {
    this._aeroscoutMmuReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aeroscoutMmuReportInput() {
    return this._aeroscoutMmuReport;
  }

  // aeroscout_mu - computed: true, optional: true, required: false
  private _aeroscoutMu?: string; 
  public get aeroscoutMu() {
    return this.getStringAttribute('aeroscout_mu');
  }
  public set aeroscoutMu(value: string) {
    this._aeroscoutMu = value;
  }
  public resetAeroscoutMu() {
    this._aeroscoutMu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aeroscoutMuInput() {
    return this._aeroscoutMu;
  }

  // aeroscout_mu_factor - computed: true, optional: true, required: false
  private _aeroscoutMuFactor?: number; 
  public get aeroscoutMuFactor() {
    return this.getNumberAttribute('aeroscout_mu_factor');
  }
  public set aeroscoutMuFactor(value: number) {
    this._aeroscoutMuFactor = value;
  }
  public resetAeroscoutMuFactor() {
    this._aeroscoutMuFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aeroscoutMuFactorInput() {
    return this._aeroscoutMuFactor;
  }

  // aeroscout_mu_timeout - computed: true, optional: true, required: false
  private _aeroscoutMuTimeout?: number; 
  public get aeroscoutMuTimeout() {
    return this.getNumberAttribute('aeroscout_mu_timeout');
  }
  public set aeroscoutMuTimeout(value: number) {
    this._aeroscoutMuTimeout = value;
  }
  public resetAeroscoutMuTimeout() {
    this._aeroscoutMuTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aeroscoutMuTimeoutInput() {
    return this._aeroscoutMuTimeout;
  }

  // aeroscout_server_ip - computed: true, optional: true, required: false
  private _aeroscoutServerIp?: string; 
  public get aeroscoutServerIp() {
    return this.getStringAttribute('aeroscout_server_ip');
  }
  public set aeroscoutServerIp(value: string) {
    this._aeroscoutServerIp = value;
  }
  public resetAeroscoutServerIp() {
    this._aeroscoutServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aeroscoutServerIpInput() {
    return this._aeroscoutServerIp;
  }

  // aeroscout_server_port - computed: false, optional: true, required: false
  private _aeroscoutServerPort?: number; 
  public get aeroscoutServerPort() {
    return this.getNumberAttribute('aeroscout_server_port');
  }
  public set aeroscoutServerPort(value: number) {
    this._aeroscoutServerPort = value;
  }
  public resetAeroscoutServerPort() {
    this._aeroscoutServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aeroscoutServerPortInput() {
    return this._aeroscoutServerPort;
  }

  // ble_rtls - computed: true, optional: true, required: false
  private _bleRtls?: string; 
  public get bleRtls() {
    return this.getStringAttribute('ble_rtls');
  }
  public set bleRtls(value: string) {
    this._bleRtls = value;
  }
  public resetBleRtls() {
    this._bleRtls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bleRtlsInput() {
    return this._bleRtls;
  }

  // ble_rtls_accumulation_interval - computed: true, optional: true, required: false
  private _bleRtlsAccumulationInterval?: number; 
  public get bleRtlsAccumulationInterval() {
    return this.getNumberAttribute('ble_rtls_accumulation_interval');
  }
  public set bleRtlsAccumulationInterval(value: number) {
    this._bleRtlsAccumulationInterval = value;
  }
  public resetBleRtlsAccumulationInterval() {
    this._bleRtlsAccumulationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bleRtlsAccumulationIntervalInput() {
    return this._bleRtlsAccumulationInterval;
  }

  // ble_rtls_asset_addrgrp_list - computed: false, optional: true, required: false
  private _bleRtlsAssetAddrgrpList?: string; 
  public get bleRtlsAssetAddrgrpList() {
    return this.getStringAttribute('ble_rtls_asset_addrgrp_list');
  }
  public set bleRtlsAssetAddrgrpList(value: string) {
    this._bleRtlsAssetAddrgrpList = value;
  }
  public resetBleRtlsAssetAddrgrpList() {
    this._bleRtlsAssetAddrgrpList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bleRtlsAssetAddrgrpListInput() {
    return this._bleRtlsAssetAddrgrpList;
  }

  // ble_rtls_asset_uuid_list1 - computed: false, optional: true, required: false
  private _bleRtlsAssetUuidList1?: string; 
  public get bleRtlsAssetUuidList1() {
    return this.getStringAttribute('ble_rtls_asset_uuid_list1');
  }
  public set bleRtlsAssetUuidList1(value: string) {
    this._bleRtlsAssetUuidList1 = value;
  }
  public resetBleRtlsAssetUuidList1() {
    this._bleRtlsAssetUuidList1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bleRtlsAssetUuidList1Input() {
    return this._bleRtlsAssetUuidList1;
  }

  // ble_rtls_asset_uuid_list2 - computed: false, optional: true, required: false
  private _bleRtlsAssetUuidList2?: string; 
  public get bleRtlsAssetUuidList2() {
    return this.getStringAttribute('ble_rtls_asset_uuid_list2');
  }
  public set bleRtlsAssetUuidList2(value: string) {
    this._bleRtlsAssetUuidList2 = value;
  }
  public resetBleRtlsAssetUuidList2() {
    this._bleRtlsAssetUuidList2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bleRtlsAssetUuidList2Input() {
    return this._bleRtlsAssetUuidList2;
  }

  // ble_rtls_asset_uuid_list3 - computed: false, optional: true, required: false
  private _bleRtlsAssetUuidList3?: string; 
  public get bleRtlsAssetUuidList3() {
    return this.getStringAttribute('ble_rtls_asset_uuid_list3');
  }
  public set bleRtlsAssetUuidList3(value: string) {
    this._bleRtlsAssetUuidList3 = value;
  }
  public resetBleRtlsAssetUuidList3() {
    this._bleRtlsAssetUuidList3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bleRtlsAssetUuidList3Input() {
    return this._bleRtlsAssetUuidList3;
  }

  // ble_rtls_asset_uuid_list4 - computed: false, optional: true, required: false
  private _bleRtlsAssetUuidList4?: string; 
  public get bleRtlsAssetUuidList4() {
    return this.getStringAttribute('ble_rtls_asset_uuid_list4');
  }
  public set bleRtlsAssetUuidList4(value: string) {
    this._bleRtlsAssetUuidList4 = value;
  }
  public resetBleRtlsAssetUuidList4() {
    this._bleRtlsAssetUuidList4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bleRtlsAssetUuidList4Input() {
    return this._bleRtlsAssetUuidList4;
  }

  // ble_rtls_protocol - computed: true, optional: true, required: false
  private _bleRtlsProtocol?: string; 
  public get bleRtlsProtocol() {
    return this.getStringAttribute('ble_rtls_protocol');
  }
  public set bleRtlsProtocol(value: string) {
    this._bleRtlsProtocol = value;
  }
  public resetBleRtlsProtocol() {
    this._bleRtlsProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bleRtlsProtocolInput() {
    return this._bleRtlsProtocol;
  }

  // ble_rtls_reporting_interval - computed: true, optional: true, required: false
  private _bleRtlsReportingInterval?: number; 
  public get bleRtlsReportingInterval() {
    return this.getNumberAttribute('ble_rtls_reporting_interval');
  }
  public set bleRtlsReportingInterval(value: number) {
    this._bleRtlsReportingInterval = value;
  }
  public resetBleRtlsReportingInterval() {
    this._bleRtlsReportingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bleRtlsReportingIntervalInput() {
    return this._bleRtlsReportingInterval;
  }

  // ble_rtls_server_fqdn - computed: false, optional: true, required: false
  private _bleRtlsServerFqdn?: string; 
  public get bleRtlsServerFqdn() {
    return this.getStringAttribute('ble_rtls_server_fqdn');
  }
  public set bleRtlsServerFqdn(value: string) {
    this._bleRtlsServerFqdn = value;
  }
  public resetBleRtlsServerFqdn() {
    this._bleRtlsServerFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bleRtlsServerFqdnInput() {
    return this._bleRtlsServerFqdn;
  }

  // ble_rtls_server_path - computed: false, optional: true, required: false
  private _bleRtlsServerPath?: string; 
  public get bleRtlsServerPath() {
    return this.getStringAttribute('ble_rtls_server_path');
  }
  public set bleRtlsServerPath(value: string) {
    this._bleRtlsServerPath = value;
  }
  public resetBleRtlsServerPath() {
    this._bleRtlsServerPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bleRtlsServerPathInput() {
    return this._bleRtlsServerPath;
  }

  // ble_rtls_server_port - computed: true, optional: true, required: false
  private _bleRtlsServerPort?: number; 
  public get bleRtlsServerPort() {
    return this.getNumberAttribute('ble_rtls_server_port');
  }
  public set bleRtlsServerPort(value: number) {
    this._bleRtlsServerPort = value;
  }
  public resetBleRtlsServerPort() {
    this._bleRtlsServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bleRtlsServerPortInput() {
    return this._bleRtlsServerPort;
  }

  // ble_rtls_server_token - computed: false, optional: true, required: false
  private _bleRtlsServerToken?: string; 
  public get bleRtlsServerToken() {
    return this.getStringAttribute('ble_rtls_server_token');
  }
  public set bleRtlsServerToken(value: string) {
    this._bleRtlsServerToken = value;
  }
  public resetBleRtlsServerToken() {
    this._bleRtlsServerToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bleRtlsServerTokenInput() {
    return this._bleRtlsServerToken;
  }

  // ekahau_blink_mode - computed: true, optional: true, required: false
  private _ekahauBlinkMode?: string; 
  public get ekahauBlinkMode() {
    return this.getStringAttribute('ekahau_blink_mode');
  }
  public set ekahauBlinkMode(value: string) {
    this._ekahauBlinkMode = value;
  }
  public resetEkahauBlinkMode() {
    this._ekahauBlinkMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ekahauBlinkModeInput() {
    return this._ekahauBlinkMode;
  }

  // ekahau_tag - computed: true, optional: true, required: false
  private _ekahauTag?: string; 
  public get ekahauTag() {
    return this.getStringAttribute('ekahau_tag');
  }
  public set ekahauTag(value: string) {
    this._ekahauTag = value;
  }
  public resetEkahauTag() {
    this._ekahauTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ekahauTagInput() {
    return this._ekahauTag;
  }

  // erc_server_ip - computed: true, optional: true, required: false
  private _ercServerIp?: string; 
  public get ercServerIp() {
    return this.getStringAttribute('erc_server_ip');
  }
  public set ercServerIp(value: string) {
    this._ercServerIp = value;
  }
  public resetErcServerIp() {
    this._ercServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ercServerIpInput() {
    return this._ercServerIp;
  }

  // erc_server_port - computed: true, optional: true, required: false
  private _ercServerPort?: number; 
  public get ercServerPort() {
    return this.getNumberAttribute('erc_server_port');
  }
  public set ercServerPort(value: number) {
    this._ercServerPort = value;
  }
  public resetErcServerPort() {
    this._ercServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ercServerPortInput() {
    return this._ercServerPort;
  }

  // fortipresence - computed: true, optional: true, required: false
  private _fortipresence?: string; 
  public get fortipresence() {
    return this.getStringAttribute('fortipresence');
  }
  public set fortipresence(value: string) {
    this._fortipresence = value;
  }
  public resetFortipresence() {
    this._fortipresence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortipresenceInput() {
    return this._fortipresence;
  }

  // fortipresence_ble - computed: true, optional: true, required: false
  private _fortipresenceBle?: string; 
  public get fortipresenceBle() {
    return this.getStringAttribute('fortipresence_ble');
  }
  public set fortipresenceBle(value: string) {
    this._fortipresenceBle = value;
  }
  public resetFortipresenceBle() {
    this._fortipresenceBle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortipresenceBleInput() {
    return this._fortipresenceBle;
  }

  // fortipresence_frequency - computed: true, optional: true, required: false
  private _fortipresenceFrequency?: number; 
  public get fortipresenceFrequency() {
    return this.getNumberAttribute('fortipresence_frequency');
  }
  public set fortipresenceFrequency(value: number) {
    this._fortipresenceFrequency = value;
  }
  public resetFortipresenceFrequency() {
    this._fortipresenceFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortipresenceFrequencyInput() {
    return this._fortipresenceFrequency;
  }

  // fortipresence_port - computed: true, optional: true, required: false
  private _fortipresencePort?: number; 
  public get fortipresencePort() {
    return this.getNumberAttribute('fortipresence_port');
  }
  public set fortipresencePort(value: number) {
    this._fortipresencePort = value;
  }
  public resetFortipresencePort() {
    this._fortipresencePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortipresencePortInput() {
    return this._fortipresencePort;
  }

  // fortipresence_project - computed: true, optional: true, required: false
  private _fortipresenceProject?: string; 
  public get fortipresenceProject() {
    return this.getStringAttribute('fortipresence_project');
  }
  public set fortipresenceProject(value: string) {
    this._fortipresenceProject = value;
  }
  public resetFortipresenceProject() {
    this._fortipresenceProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortipresenceProjectInput() {
    return this._fortipresenceProject;
  }

  // fortipresence_rogue - computed: true, optional: true, required: false
  private _fortipresenceRogue?: string; 
  public get fortipresenceRogue() {
    return this.getStringAttribute('fortipresence_rogue');
  }
  public set fortipresenceRogue(value: string) {
    this._fortipresenceRogue = value;
  }
  public resetFortipresenceRogue() {
    this._fortipresenceRogue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortipresenceRogueInput() {
    return this._fortipresenceRogue;
  }

  // fortipresence_secret - computed: false, optional: true, required: false
  private _fortipresenceSecret?: string; 
  public get fortipresenceSecret() {
    return this.getStringAttribute('fortipresence_secret');
  }
  public set fortipresenceSecret(value: string) {
    this._fortipresenceSecret = value;
  }
  public resetFortipresenceSecret() {
    this._fortipresenceSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortipresenceSecretInput() {
    return this._fortipresenceSecret;
  }

  // fortipresence_server - computed: true, optional: true, required: false
  private _fortipresenceServer?: string; 
  public get fortipresenceServer() {
    return this.getStringAttribute('fortipresence_server');
  }
  public set fortipresenceServer(value: string) {
    this._fortipresenceServer = value;
  }
  public resetFortipresenceServer() {
    this._fortipresenceServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortipresenceServerInput() {
    return this._fortipresenceServer;
  }

  // fortipresence_server_addr_type - computed: true, optional: true, required: false
  private _fortipresenceServerAddrType?: string; 
  public get fortipresenceServerAddrType() {
    return this.getStringAttribute('fortipresence_server_addr_type');
  }
  public set fortipresenceServerAddrType(value: string) {
    this._fortipresenceServerAddrType = value;
  }
  public resetFortipresenceServerAddrType() {
    this._fortipresenceServerAddrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortipresenceServerAddrTypeInput() {
    return this._fortipresenceServerAddrType;
  }

  // fortipresence_server_fqdn - computed: false, optional: true, required: false
  private _fortipresenceServerFqdn?: string; 
  public get fortipresenceServerFqdn() {
    return this.getStringAttribute('fortipresence_server_fqdn');
  }
  public set fortipresenceServerFqdn(value: string) {
    this._fortipresenceServerFqdn = value;
  }
  public resetFortipresenceServerFqdn() {
    this._fortipresenceServerFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortipresenceServerFqdnInput() {
    return this._fortipresenceServerFqdn;
  }

  // fortipresence_unassoc - computed: true, optional: true, required: false
  private _fortipresenceUnassoc?: string; 
  public get fortipresenceUnassoc() {
    return this.getStringAttribute('fortipresence_unassoc');
  }
  public set fortipresenceUnassoc(value: string) {
    this._fortipresenceUnassoc = value;
  }
  public resetFortipresenceUnassoc() {
    this._fortipresenceUnassoc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortipresenceUnassocInput() {
    return this._fortipresenceUnassoc;
  }

  // polestar - computed: true, optional: true, required: false
  private _polestar?: string; 
  public get polestar() {
    return this.getStringAttribute('polestar');
  }
  public set polestar(value: string) {
    this._polestar = value;
  }
  public resetPolestar() {
    this._polestar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get polestarInput() {
    return this._polestar;
  }

  // polestar_accumulation_interval - computed: true, optional: true, required: false
  private _polestarAccumulationInterval?: number; 
  public get polestarAccumulationInterval() {
    return this.getNumberAttribute('polestar_accumulation_interval');
  }
  public set polestarAccumulationInterval(value: number) {
    this._polestarAccumulationInterval = value;
  }
  public resetPolestarAccumulationInterval() {
    this._polestarAccumulationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get polestarAccumulationIntervalInput() {
    return this._polestarAccumulationInterval;
  }

  // polestar_asset_addrgrp_list - computed: false, optional: true, required: false
  private _polestarAssetAddrgrpList?: string; 
  public get polestarAssetAddrgrpList() {
    return this.getStringAttribute('polestar_asset_addrgrp_list');
  }
  public set polestarAssetAddrgrpList(value: string) {
    this._polestarAssetAddrgrpList = value;
  }
  public resetPolestarAssetAddrgrpList() {
    this._polestarAssetAddrgrpList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get polestarAssetAddrgrpListInput() {
    return this._polestarAssetAddrgrpList;
  }

  // polestar_asset_uuid_list1 - computed: false, optional: true, required: false
  private _polestarAssetUuidList1?: string; 
  public get polestarAssetUuidList1() {
    return this.getStringAttribute('polestar_asset_uuid_list1');
  }
  public set polestarAssetUuidList1(value: string) {
    this._polestarAssetUuidList1 = value;
  }
  public resetPolestarAssetUuidList1() {
    this._polestarAssetUuidList1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get polestarAssetUuidList1Input() {
    return this._polestarAssetUuidList1;
  }

  // polestar_asset_uuid_list2 - computed: false, optional: true, required: false
  private _polestarAssetUuidList2?: string; 
  public get polestarAssetUuidList2() {
    return this.getStringAttribute('polestar_asset_uuid_list2');
  }
  public set polestarAssetUuidList2(value: string) {
    this._polestarAssetUuidList2 = value;
  }
  public resetPolestarAssetUuidList2() {
    this._polestarAssetUuidList2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get polestarAssetUuidList2Input() {
    return this._polestarAssetUuidList2;
  }

  // polestar_asset_uuid_list3 - computed: false, optional: true, required: false
  private _polestarAssetUuidList3?: string; 
  public get polestarAssetUuidList3() {
    return this.getStringAttribute('polestar_asset_uuid_list3');
  }
  public set polestarAssetUuidList3(value: string) {
    this._polestarAssetUuidList3 = value;
  }
  public resetPolestarAssetUuidList3() {
    this._polestarAssetUuidList3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get polestarAssetUuidList3Input() {
    return this._polestarAssetUuidList3;
  }

  // polestar_asset_uuid_list4 - computed: false, optional: true, required: false
  private _polestarAssetUuidList4?: string; 
  public get polestarAssetUuidList4() {
    return this.getStringAttribute('polestar_asset_uuid_list4');
  }
  public set polestarAssetUuidList4(value: string) {
    this._polestarAssetUuidList4 = value;
  }
  public resetPolestarAssetUuidList4() {
    this._polestarAssetUuidList4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get polestarAssetUuidList4Input() {
    return this._polestarAssetUuidList4;
  }

  // polestar_protocol - computed: true, optional: true, required: false
  private _polestarProtocol?: string; 
  public get polestarProtocol() {
    return this.getStringAttribute('polestar_protocol');
  }
  public set polestarProtocol(value: string) {
    this._polestarProtocol = value;
  }
  public resetPolestarProtocol() {
    this._polestarProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get polestarProtocolInput() {
    return this._polestarProtocol;
  }

  // polestar_reporting_interval - computed: true, optional: true, required: false
  private _polestarReportingInterval?: number; 
  public get polestarReportingInterval() {
    return this.getNumberAttribute('polestar_reporting_interval');
  }
  public set polestarReportingInterval(value: number) {
    this._polestarReportingInterval = value;
  }
  public resetPolestarReportingInterval() {
    this._polestarReportingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get polestarReportingIntervalInput() {
    return this._polestarReportingInterval;
  }

  // polestar_server_fqdn - computed: true, optional: true, required: false
  private _polestarServerFqdn?: string; 
  public get polestarServerFqdn() {
    return this.getStringAttribute('polestar_server_fqdn');
  }
  public set polestarServerFqdn(value: string) {
    this._polestarServerFqdn = value;
  }
  public resetPolestarServerFqdn() {
    this._polestarServerFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get polestarServerFqdnInput() {
    return this._polestarServerFqdn;
  }

  // polestar_server_path - computed: true, optional: true, required: false
  private _polestarServerPath?: string; 
  public get polestarServerPath() {
    return this.getStringAttribute('polestar_server_path');
  }
  public set polestarServerPath(value: string) {
    this._polestarServerPath = value;
  }
  public resetPolestarServerPath() {
    this._polestarServerPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get polestarServerPathInput() {
    return this._polestarServerPath;
  }

  // polestar_server_port - computed: true, optional: true, required: false
  private _polestarServerPort?: number; 
  public get polestarServerPort() {
    return this.getNumberAttribute('polestar_server_port');
  }
  public set polestarServerPort(value: number) {
    this._polestarServerPort = value;
  }
  public resetPolestarServerPort() {
    this._polestarServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get polestarServerPortInput() {
    return this._polestarServerPort;
  }

  // polestar_server_token - computed: false, optional: true, required: false
  private _polestarServerToken?: string; 
  public get polestarServerToken() {
    return this.getStringAttribute('polestar_server_token');
  }
  public set polestarServerToken(value: string) {
    this._polestarServerToken = value;
  }
  public resetPolestarServerToken() {
    this._polestarServerToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get polestarServerTokenInput() {
    return this._polestarServerToken;
  }

  // station_locate - computed: true, optional: true, required: false
  private _stationLocate?: string; 
  public get stationLocate() {
    return this.getStringAttribute('station_locate');
  }
  public set stationLocate(value: string) {
    this._stationLocate = value;
  }
  public resetStationLocate() {
    this._stationLocate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stationLocateInput() {
    return this._stationLocate;
  }
}
export interface WirelesscontrollerWtpprofileLedSchedules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#name WirelesscontrollerWtpprofile#name}
  */
  readonly name?: string;
}

export function wirelesscontrollerWtpprofileLedSchedulesToTerraform(struct?: WirelesscontrollerWtpprofileLedSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function wirelesscontrollerWtpprofileLedSchedulesToHclTerraform(struct?: WirelesscontrollerWtpprofileLedSchedules | cdktf.IResolvable): any {
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

export class WirelesscontrollerWtpprofileLedSchedulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelesscontrollerWtpprofileLedSchedules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WirelesscontrollerWtpprofileLedSchedules | cdktf.IResolvable | undefined) {
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

export class WirelesscontrollerWtpprofileLedSchedulesList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerWtpprofileLedSchedules[] | cdktf.IResolvable

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
  public get(index: number): WirelesscontrollerWtpprofileLedSchedulesOutputReference {
    return new WirelesscontrollerWtpprofileLedSchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelesscontrollerWtpprofilePlatform {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ddscan WirelesscontrollerWtpprofile#ddscan}
  */
  readonly ddscan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#mode WirelesscontrollerWtpprofile#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#type WirelesscontrollerWtpprofile#type}
  */
  readonly type?: string;
}

export function wirelesscontrollerWtpprofilePlatformToTerraform(struct?: WirelesscontrollerWtpprofilePlatformOutputReference | WirelesscontrollerWtpprofilePlatform): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ddscan: cdktf.stringToTerraform(struct!.ddscan),
    mode: cdktf.stringToTerraform(struct!.mode),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function wirelesscontrollerWtpprofilePlatformToHclTerraform(struct?: WirelesscontrollerWtpprofilePlatformOutputReference | WirelesscontrollerWtpprofilePlatform): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ddscan: {
      value: cdktf.stringToHclTerraform(struct!.ddscan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerWtpprofilePlatformOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WirelesscontrollerWtpprofilePlatform | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ddscan !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddscan = this._ddscan;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerWtpprofilePlatform | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ddscan = undefined;
      this._mode = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ddscan = value.ddscan;
      this._mode = value.mode;
      this._type = value.type;
    }
  }

  // ddscan - computed: true, optional: true, required: false
  private _ddscan?: string; 
  public get ddscan() {
    return this.getStringAttribute('ddscan');
  }
  public set ddscan(value: string) {
    this._ddscan = value;
  }
  public resetDdscan() {
    this._ddscan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddscanInput() {
    return this._ddscan;
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
}
export interface WirelesscontrollerWtpprofileRadio1Channel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#chan WirelesscontrollerWtpprofile#chan}
  */
  readonly chan?: string;
}

export function wirelesscontrollerWtpprofileRadio1ChannelToTerraform(struct?: WirelesscontrollerWtpprofileRadio1Channel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chan: cdktf.stringToTerraform(struct!.chan),
  }
}


export function wirelesscontrollerWtpprofileRadio1ChannelToHclTerraform(struct?: WirelesscontrollerWtpprofileRadio1Channel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chan: {
      value: cdktf.stringToHclTerraform(struct!.chan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerWtpprofileRadio1ChannelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelesscontrollerWtpprofileRadio1Channel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chan !== undefined) {
      hasAnyValues = true;
      internalValueResult.chan = this._chan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerWtpprofileRadio1Channel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chan = value.chan;
    }
  }

  // chan - computed: false, optional: true, required: false
  private _chan?: string; 
  public get chan() {
    return this.getStringAttribute('chan');
  }
  public set chan(value: string) {
    this._chan = value;
  }
  public resetChan() {
    this._chan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chanInput() {
    return this._chan;
  }
}

export class WirelesscontrollerWtpprofileRadio1ChannelList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerWtpprofileRadio1Channel[] | cdktf.IResolvable

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
  public get(index: number): WirelesscontrollerWtpprofileRadio1ChannelOutputReference {
    return new WirelesscontrollerWtpprofileRadio1ChannelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelesscontrollerWtpprofileRadio1Vaps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#name WirelesscontrollerWtpprofile#name}
  */
  readonly name?: string;
}

export function wirelesscontrollerWtpprofileRadio1VapsToTerraform(struct?: WirelesscontrollerWtpprofileRadio1Vaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function wirelesscontrollerWtpprofileRadio1VapsToHclTerraform(struct?: WirelesscontrollerWtpprofileRadio1Vaps | cdktf.IResolvable): any {
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

export class WirelesscontrollerWtpprofileRadio1VapsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelesscontrollerWtpprofileRadio1Vaps | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WirelesscontrollerWtpprofileRadio1Vaps | cdktf.IResolvable | undefined) {
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

export class WirelesscontrollerWtpprofileRadio1VapsList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerWtpprofileRadio1Vaps[] | cdktf.IResolvable

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
  public get(index: number): WirelesscontrollerWtpprofileRadio1VapsOutputReference {
    return new WirelesscontrollerWtpprofileRadio1VapsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelesscontrollerWtpprofileRadio1 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#airtime_fairness WirelesscontrollerWtpprofile#airtime_fairness}
  */
  readonly airtimeFairness?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#amsdu WirelesscontrollerWtpprofile#amsdu}
  */
  readonly amsdu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ap_handoff WirelesscontrollerWtpprofile#ap_handoff}
  */
  readonly apHandoff?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ap_sniffer_addr WirelesscontrollerWtpprofile#ap_sniffer_addr}
  */
  readonly apSnifferAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ap_sniffer_bufsize WirelesscontrollerWtpprofile#ap_sniffer_bufsize}
  */
  readonly apSnifferBufsize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ap_sniffer_chan WirelesscontrollerWtpprofile#ap_sniffer_chan}
  */
  readonly apSnifferChan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ap_sniffer_chan_width WirelesscontrollerWtpprofile#ap_sniffer_chan_width}
  */
  readonly apSnifferChanWidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ap_sniffer_ctl WirelesscontrollerWtpprofile#ap_sniffer_ctl}
  */
  readonly apSnifferCtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ap_sniffer_data WirelesscontrollerWtpprofile#ap_sniffer_data}
  */
  readonly apSnifferData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ap_sniffer_mgmt_beacon WirelesscontrollerWtpprofile#ap_sniffer_mgmt_beacon}
  */
  readonly apSnifferMgmtBeacon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ap_sniffer_mgmt_other WirelesscontrollerWtpprofile#ap_sniffer_mgmt_other}
  */
  readonly apSnifferMgmtOther?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ap_sniffer_mgmt_probe WirelesscontrollerWtpprofile#ap_sniffer_mgmt_probe}
  */
  readonly apSnifferMgmtProbe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#arrp_profile WirelesscontrollerWtpprofile#arrp_profile}
  */
  readonly arrpProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#auto_power_high WirelesscontrollerWtpprofile#auto_power_high}
  */
  readonly autoPowerHigh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#auto_power_level WirelesscontrollerWtpprofile#auto_power_level}
  */
  readonly autoPowerLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#auto_power_low WirelesscontrollerWtpprofile#auto_power_low}
  */
  readonly autoPowerLow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#auto_power_target WirelesscontrollerWtpprofile#auto_power_target}
  */
  readonly autoPowerTarget?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#band WirelesscontrollerWtpprofile#band}
  */
  readonly band?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#band_5g_type WirelesscontrollerWtpprofile#band_5g_type}
  */
  readonly band5GType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#bandwidth_admission_control WirelesscontrollerWtpprofile#bandwidth_admission_control}
  */
  readonly bandwidthAdmissionControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#bandwidth_capacity WirelesscontrollerWtpprofile#bandwidth_capacity}
  */
  readonly bandwidthCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#beacon_interval WirelesscontrollerWtpprofile#beacon_interval}
  */
  readonly beaconInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#bss_color WirelesscontrollerWtpprofile#bss_color}
  */
  readonly bssColor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#bss_color_mode WirelesscontrollerWtpprofile#bss_color_mode}
  */
  readonly bssColorMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#call_admission_control WirelesscontrollerWtpprofile#call_admission_control}
  */
  readonly callAdmissionControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#call_capacity WirelesscontrollerWtpprofile#call_capacity}
  */
  readonly callCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#channel_bonding WirelesscontrollerWtpprofile#channel_bonding}
  */
  readonly channelBonding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#channel_bonding_ext WirelesscontrollerWtpprofile#channel_bonding_ext}
  */
  readonly channelBondingExt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#channel_utilization WirelesscontrollerWtpprofile#channel_utilization}
  */
  readonly channelUtilization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#coexistence WirelesscontrollerWtpprofile#coexistence}
  */
  readonly coexistence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#darrp WirelesscontrollerWtpprofile#darrp}
  */
  readonly darrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#drma WirelesscontrollerWtpprofile#drma}
  */
  readonly drma?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#drma_sensitivity WirelesscontrollerWtpprofile#drma_sensitivity}
  */
  readonly drmaSensitivity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#dtim WirelesscontrollerWtpprofile#dtim}
  */
  readonly dtim?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#frag_threshold WirelesscontrollerWtpprofile#frag_threshold}
  */
  readonly fragThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#frequency_handoff WirelesscontrollerWtpprofile#frequency_handoff}
  */
  readonly frequencyHandoff?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#iperf_protocol WirelesscontrollerWtpprofile#iperf_protocol}
  */
  readonly iperfProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#iperf_server_port WirelesscontrollerWtpprofile#iperf_server_port}
  */
  readonly iperfServerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#max_clients WirelesscontrollerWtpprofile#max_clients}
  */
  readonly maxClients?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#max_distance WirelesscontrollerWtpprofile#max_distance}
  */
  readonly maxDistance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#mimo_mode WirelesscontrollerWtpprofile#mimo_mode}
  */
  readonly mimoMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#mode WirelesscontrollerWtpprofile#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#n80211d WirelesscontrollerWtpprofile#n80211d}
  */
  readonly n80211D?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#n80211mc WirelesscontrollerWtpprofile#n80211mc}
  */
  readonly n80211Mc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#optional_antenna WirelesscontrollerWtpprofile#optional_antenna}
  */
  readonly optionalAntenna?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#optional_antenna_gain WirelesscontrollerWtpprofile#optional_antenna_gain}
  */
  readonly optionalAntennaGain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#power_level WirelesscontrollerWtpprofile#power_level}
  */
  readonly powerLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#power_mode WirelesscontrollerWtpprofile#power_mode}
  */
  readonly powerMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#power_value WirelesscontrollerWtpprofile#power_value}
  */
  readonly powerValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#powersave_optimize WirelesscontrollerWtpprofile#powersave_optimize}
  */
  readonly powersaveOptimize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#protection_mode WirelesscontrollerWtpprofile#protection_mode}
  */
  readonly protectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#radio_id WirelesscontrollerWtpprofile#radio_id}
  */
  readonly radioId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#rts_threshold WirelesscontrollerWtpprofile#rts_threshold}
  */
  readonly rtsThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_bssid WirelesscontrollerWtpprofile#sam_bssid}
  */
  readonly samBssid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_ca_certificate WirelesscontrollerWtpprofile#sam_ca_certificate}
  */
  readonly samCaCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_captive_portal WirelesscontrollerWtpprofile#sam_captive_portal}
  */
  readonly samCaptivePortal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_client_certificate WirelesscontrollerWtpprofile#sam_client_certificate}
  */
  readonly samClientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_cwp_failure_string WirelesscontrollerWtpprofile#sam_cwp_failure_string}
  */
  readonly samCwpFailureString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_cwp_match_string WirelesscontrollerWtpprofile#sam_cwp_match_string}
  */
  readonly samCwpMatchString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_cwp_password WirelesscontrollerWtpprofile#sam_cwp_password}
  */
  readonly samCwpPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_cwp_success_string WirelesscontrollerWtpprofile#sam_cwp_success_string}
  */
  readonly samCwpSuccessString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_cwp_test_url WirelesscontrollerWtpprofile#sam_cwp_test_url}
  */
  readonly samCwpTestUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_cwp_username WirelesscontrollerWtpprofile#sam_cwp_username}
  */
  readonly samCwpUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_eap_method WirelesscontrollerWtpprofile#sam_eap_method}
  */
  readonly samEapMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_password WirelesscontrollerWtpprofile#sam_password}
  */
  readonly samPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_private_key WirelesscontrollerWtpprofile#sam_private_key}
  */
  readonly samPrivateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_private_key_password WirelesscontrollerWtpprofile#sam_private_key_password}
  */
  readonly samPrivateKeyPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_report_intv WirelesscontrollerWtpprofile#sam_report_intv}
  */
  readonly samReportIntv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_security_type WirelesscontrollerWtpprofile#sam_security_type}
  */
  readonly samSecurityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_server_fqdn WirelesscontrollerWtpprofile#sam_server_fqdn}
  */
  readonly samServerFqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_server_ip WirelesscontrollerWtpprofile#sam_server_ip}
  */
  readonly samServerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_server_type WirelesscontrollerWtpprofile#sam_server_type}
  */
  readonly samServerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_ssid WirelesscontrollerWtpprofile#sam_ssid}
  */
  readonly samSsid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_test WirelesscontrollerWtpprofile#sam_test}
  */
  readonly samTest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_username WirelesscontrollerWtpprofile#sam_username}
  */
  readonly samUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#short_guard_interval WirelesscontrollerWtpprofile#short_guard_interval}
  */
  readonly shortGuardInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#spectrum_analysis WirelesscontrollerWtpprofile#spectrum_analysis}
  */
  readonly spectrumAnalysis?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#transmit_optimize WirelesscontrollerWtpprofile#transmit_optimize}
  */
  readonly transmitOptimize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#vap_all WirelesscontrollerWtpprofile#vap_all}
  */
  readonly vapAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#wids_profile WirelesscontrollerWtpprofile#wids_profile}
  */
  readonly widsProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#zero_wait_dfs WirelesscontrollerWtpprofile#zero_wait_dfs}
  */
  readonly zeroWaitDfs?: string;
  /**
  * channel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#channel WirelesscontrollerWtpprofile#channel}
  */
  readonly channel?: WirelesscontrollerWtpprofileRadio1Channel[] | cdktf.IResolvable;
  /**
  * vaps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#vaps WirelesscontrollerWtpprofile#vaps}
  */
  readonly vaps?: WirelesscontrollerWtpprofileRadio1Vaps[] | cdktf.IResolvable;
}

export function wirelesscontrollerWtpprofileRadio1ToTerraform(struct?: WirelesscontrollerWtpprofileRadio1OutputReference | WirelesscontrollerWtpprofileRadio1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    airtime_fairness: cdktf.stringToTerraform(struct!.airtimeFairness),
    amsdu: cdktf.stringToTerraform(struct!.amsdu),
    ap_handoff: cdktf.stringToTerraform(struct!.apHandoff),
    ap_sniffer_addr: cdktf.stringToTerraform(struct!.apSnifferAddr),
    ap_sniffer_bufsize: cdktf.numberToTerraform(struct!.apSnifferBufsize),
    ap_sniffer_chan: cdktf.numberToTerraform(struct!.apSnifferChan),
    ap_sniffer_chan_width: cdktf.stringToTerraform(struct!.apSnifferChanWidth),
    ap_sniffer_ctl: cdktf.stringToTerraform(struct!.apSnifferCtl),
    ap_sniffer_data: cdktf.stringToTerraform(struct!.apSnifferData),
    ap_sniffer_mgmt_beacon: cdktf.stringToTerraform(struct!.apSnifferMgmtBeacon),
    ap_sniffer_mgmt_other: cdktf.stringToTerraform(struct!.apSnifferMgmtOther),
    ap_sniffer_mgmt_probe: cdktf.stringToTerraform(struct!.apSnifferMgmtProbe),
    arrp_profile: cdktf.stringToTerraform(struct!.arrpProfile),
    auto_power_high: cdktf.numberToTerraform(struct!.autoPowerHigh),
    auto_power_level: cdktf.stringToTerraform(struct!.autoPowerLevel),
    auto_power_low: cdktf.numberToTerraform(struct!.autoPowerLow),
    auto_power_target: cdktf.stringToTerraform(struct!.autoPowerTarget),
    band: cdktf.stringToTerraform(struct!.band),
    band_5g_type: cdktf.stringToTerraform(struct!.band5GType),
    bandwidth_admission_control: cdktf.stringToTerraform(struct!.bandwidthAdmissionControl),
    bandwidth_capacity: cdktf.numberToTerraform(struct!.bandwidthCapacity),
    beacon_interval: cdktf.numberToTerraform(struct!.beaconInterval),
    bss_color: cdktf.numberToTerraform(struct!.bssColor),
    bss_color_mode: cdktf.stringToTerraform(struct!.bssColorMode),
    call_admission_control: cdktf.stringToTerraform(struct!.callAdmissionControl),
    call_capacity: cdktf.numberToTerraform(struct!.callCapacity),
    channel_bonding: cdktf.stringToTerraform(struct!.channelBonding),
    channel_bonding_ext: cdktf.stringToTerraform(struct!.channelBondingExt),
    channel_utilization: cdktf.stringToTerraform(struct!.channelUtilization),
    coexistence: cdktf.stringToTerraform(struct!.coexistence),
    darrp: cdktf.stringToTerraform(struct!.darrp),
    drma: cdktf.stringToTerraform(struct!.drma),
    drma_sensitivity: cdktf.stringToTerraform(struct!.drmaSensitivity),
    dtim: cdktf.numberToTerraform(struct!.dtim),
    frag_threshold: cdktf.numberToTerraform(struct!.fragThreshold),
    frequency_handoff: cdktf.stringToTerraform(struct!.frequencyHandoff),
    iperf_protocol: cdktf.stringToTerraform(struct!.iperfProtocol),
    iperf_server_port: cdktf.numberToTerraform(struct!.iperfServerPort),
    max_clients: cdktf.numberToTerraform(struct!.maxClients),
    max_distance: cdktf.numberToTerraform(struct!.maxDistance),
    mimo_mode: cdktf.stringToTerraform(struct!.mimoMode),
    mode: cdktf.stringToTerraform(struct!.mode),
    n80211d: cdktf.stringToTerraform(struct!.n80211D),
    n80211mc: cdktf.stringToTerraform(struct!.n80211Mc),
    optional_antenna: cdktf.stringToTerraform(struct!.optionalAntenna),
    optional_antenna_gain: cdktf.stringToTerraform(struct!.optionalAntennaGain),
    power_level: cdktf.numberToTerraform(struct!.powerLevel),
    power_mode: cdktf.stringToTerraform(struct!.powerMode),
    power_value: cdktf.numberToTerraform(struct!.powerValue),
    powersave_optimize: cdktf.stringToTerraform(struct!.powersaveOptimize),
    protection_mode: cdktf.stringToTerraform(struct!.protectionMode),
    radio_id: cdktf.numberToTerraform(struct!.radioId),
    rts_threshold: cdktf.numberToTerraform(struct!.rtsThreshold),
    sam_bssid: cdktf.stringToTerraform(struct!.samBssid),
    sam_ca_certificate: cdktf.stringToTerraform(struct!.samCaCertificate),
    sam_captive_portal: cdktf.stringToTerraform(struct!.samCaptivePortal),
    sam_client_certificate: cdktf.stringToTerraform(struct!.samClientCertificate),
    sam_cwp_failure_string: cdktf.stringToTerraform(struct!.samCwpFailureString),
    sam_cwp_match_string: cdktf.stringToTerraform(struct!.samCwpMatchString),
    sam_cwp_password: cdktf.stringToTerraform(struct!.samCwpPassword),
    sam_cwp_success_string: cdktf.stringToTerraform(struct!.samCwpSuccessString),
    sam_cwp_test_url: cdktf.stringToTerraform(struct!.samCwpTestUrl),
    sam_cwp_username: cdktf.stringToTerraform(struct!.samCwpUsername),
    sam_eap_method: cdktf.stringToTerraform(struct!.samEapMethod),
    sam_password: cdktf.stringToTerraform(struct!.samPassword),
    sam_private_key: cdktf.stringToTerraform(struct!.samPrivateKey),
    sam_private_key_password: cdktf.stringToTerraform(struct!.samPrivateKeyPassword),
    sam_report_intv: cdktf.numberToTerraform(struct!.samReportIntv),
    sam_security_type: cdktf.stringToTerraform(struct!.samSecurityType),
    sam_server_fqdn: cdktf.stringToTerraform(struct!.samServerFqdn),
    sam_server_ip: cdktf.stringToTerraform(struct!.samServerIp),
    sam_server_type: cdktf.stringToTerraform(struct!.samServerType),
    sam_ssid: cdktf.stringToTerraform(struct!.samSsid),
    sam_test: cdktf.stringToTerraform(struct!.samTest),
    sam_username: cdktf.stringToTerraform(struct!.samUsername),
    short_guard_interval: cdktf.stringToTerraform(struct!.shortGuardInterval),
    spectrum_analysis: cdktf.stringToTerraform(struct!.spectrumAnalysis),
    transmit_optimize: cdktf.stringToTerraform(struct!.transmitOptimize),
    vap_all: cdktf.stringToTerraform(struct!.vapAll),
    wids_profile: cdktf.stringToTerraform(struct!.widsProfile),
    zero_wait_dfs: cdktf.stringToTerraform(struct!.zeroWaitDfs),
    channel: cdktf.listMapper(wirelesscontrollerWtpprofileRadio1ChannelToTerraform, true)(struct!.channel),
    vaps: cdktf.listMapper(wirelesscontrollerWtpprofileRadio1VapsToTerraform, true)(struct!.vaps),
  }
}


export function wirelesscontrollerWtpprofileRadio1ToHclTerraform(struct?: WirelesscontrollerWtpprofileRadio1OutputReference | WirelesscontrollerWtpprofileRadio1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    airtime_fairness: {
      value: cdktf.stringToHclTerraform(struct!.airtimeFairness),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    amsdu: {
      value: cdktf.stringToHclTerraform(struct!.amsdu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ap_handoff: {
      value: cdktf.stringToHclTerraform(struct!.apHandoff),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ap_sniffer_addr: {
      value: cdktf.stringToHclTerraform(struct!.apSnifferAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ap_sniffer_bufsize: {
      value: cdktf.numberToHclTerraform(struct!.apSnifferBufsize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ap_sniffer_chan: {
      value: cdktf.numberToHclTerraform(struct!.apSnifferChan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ap_sniffer_chan_width: {
      value: cdktf.stringToHclTerraform(struct!.apSnifferChanWidth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ap_sniffer_ctl: {
      value: cdktf.stringToHclTerraform(struct!.apSnifferCtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ap_sniffer_data: {
      value: cdktf.stringToHclTerraform(struct!.apSnifferData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ap_sniffer_mgmt_beacon: {
      value: cdktf.stringToHclTerraform(struct!.apSnifferMgmtBeacon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ap_sniffer_mgmt_other: {
      value: cdktf.stringToHclTerraform(struct!.apSnifferMgmtOther),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ap_sniffer_mgmt_probe: {
      value: cdktf.stringToHclTerraform(struct!.apSnifferMgmtProbe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arrp_profile: {
      value: cdktf.stringToHclTerraform(struct!.arrpProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
      value: cdktf.stringToHclTerraform(struct!.band),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    band_5g_type: {
      value: cdktf.stringToHclTerraform(struct!.band5GType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth_admission_control: {
      value: cdktf.stringToHclTerraform(struct!.bandwidthAdmissionControl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth_capacity: {
      value: cdktf.numberToHclTerraform(struct!.bandwidthCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    call_admission_control: {
      value: cdktf.stringToHclTerraform(struct!.callAdmissionControl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    call_capacity: {
      value: cdktf.numberToHclTerraform(struct!.callCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    channel_bonding: {
      value: cdktf.stringToHclTerraform(struct!.channelBonding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel_bonding_ext: {
      value: cdktf.stringToHclTerraform(struct!.channelBondingExt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel_utilization: {
      value: cdktf.stringToHclTerraform(struct!.channelUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    coexistence: {
      value: cdktf.stringToHclTerraform(struct!.coexistence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    darrp: {
      value: cdktf.stringToHclTerraform(struct!.darrp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drma: {
      value: cdktf.stringToHclTerraform(struct!.drma),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drma_sensitivity: {
      value: cdktf.stringToHclTerraform(struct!.drmaSensitivity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dtim: {
      value: cdktf.numberToHclTerraform(struct!.dtim),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frag_threshold: {
      value: cdktf.numberToHclTerraform(struct!.fragThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frequency_handoff: {
      value: cdktf.stringToHclTerraform(struct!.frequencyHandoff),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iperf_protocol: {
      value: cdktf.stringToHclTerraform(struct!.iperfProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iperf_server_port: {
      value: cdktf.numberToHclTerraform(struct!.iperfServerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_clients: {
      value: cdktf.numberToHclTerraform(struct!.maxClients),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_distance: {
      value: cdktf.numberToHclTerraform(struct!.maxDistance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mimo_mode: {
      value: cdktf.stringToHclTerraform(struct!.mimoMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    n80211mc: {
      value: cdktf.stringToHclTerraform(struct!.n80211Mc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional_antenna: {
      value: cdktf.stringToHclTerraform(struct!.optionalAntenna),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional_antenna_gain: {
      value: cdktf.stringToHclTerraform(struct!.optionalAntennaGain),
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
    powersave_optimize: {
      value: cdktf.stringToHclTerraform(struct!.powersaveOptimize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protection_mode: {
      value: cdktf.stringToHclTerraform(struct!.protectionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    radio_id: {
      value: cdktf.numberToHclTerraform(struct!.radioId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rts_threshold: {
      value: cdktf.numberToHclTerraform(struct!.rtsThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sam_bssid: {
      value: cdktf.stringToHclTerraform(struct!.samBssid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.samCaCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_captive_portal: {
      value: cdktf.stringToHclTerraform(struct!.samCaptivePortal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.samClientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_cwp_failure_string: {
      value: cdktf.stringToHclTerraform(struct!.samCwpFailureString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_cwp_match_string: {
      value: cdktf.stringToHclTerraform(struct!.samCwpMatchString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_cwp_password: {
      value: cdktf.stringToHclTerraform(struct!.samCwpPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_cwp_success_string: {
      value: cdktf.stringToHclTerraform(struct!.samCwpSuccessString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_cwp_test_url: {
      value: cdktf.stringToHclTerraform(struct!.samCwpTestUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_cwp_username: {
      value: cdktf.stringToHclTerraform(struct!.samCwpUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_eap_method: {
      value: cdktf.stringToHclTerraform(struct!.samEapMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_password: {
      value: cdktf.stringToHclTerraform(struct!.samPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_private_key: {
      value: cdktf.stringToHclTerraform(struct!.samPrivateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_private_key_password: {
      value: cdktf.stringToHclTerraform(struct!.samPrivateKeyPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_report_intv: {
      value: cdktf.numberToHclTerraform(struct!.samReportIntv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sam_security_type: {
      value: cdktf.stringToHclTerraform(struct!.samSecurityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_server_fqdn: {
      value: cdktf.stringToHclTerraform(struct!.samServerFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_server_ip: {
      value: cdktf.stringToHclTerraform(struct!.samServerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_server_type: {
      value: cdktf.stringToHclTerraform(struct!.samServerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_ssid: {
      value: cdktf.stringToHclTerraform(struct!.samSsid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_test: {
      value: cdktf.stringToHclTerraform(struct!.samTest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_username: {
      value: cdktf.stringToHclTerraform(struct!.samUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    short_guard_interval: {
      value: cdktf.stringToHclTerraform(struct!.shortGuardInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spectrum_analysis: {
      value: cdktf.stringToHclTerraform(struct!.spectrumAnalysis),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transmit_optimize: {
      value: cdktf.stringToHclTerraform(struct!.transmitOptimize),
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
    wids_profile: {
      value: cdktf.stringToHclTerraform(struct!.widsProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zero_wait_dfs: {
      value: cdktf.stringToHclTerraform(struct!.zeroWaitDfs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel: {
      value: cdktf.listMapperHcl(wirelesscontrollerWtpprofileRadio1ChannelToHclTerraform, true)(struct!.channel),
      isBlock: true,
      type: "set",
      storageClassType: "WirelesscontrollerWtpprofileRadio1ChannelList",
    },
    vaps: {
      value: cdktf.listMapperHcl(wirelesscontrollerWtpprofileRadio1VapsToHclTerraform, true)(struct!.vaps),
      isBlock: true,
      type: "set",
      storageClassType: "WirelesscontrollerWtpprofileRadio1VapsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerWtpprofileRadio1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WirelesscontrollerWtpprofileRadio1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._airtimeFairness !== undefined) {
      hasAnyValues = true;
      internalValueResult.airtimeFairness = this._airtimeFairness;
    }
    if (this._amsdu !== undefined) {
      hasAnyValues = true;
      internalValueResult.amsdu = this._amsdu;
    }
    if (this._apHandoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.apHandoff = this._apHandoff;
    }
    if (this._apSnifferAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.apSnifferAddr = this._apSnifferAddr;
    }
    if (this._apSnifferBufsize !== undefined) {
      hasAnyValues = true;
      internalValueResult.apSnifferBufsize = this._apSnifferBufsize;
    }
    if (this._apSnifferChan !== undefined) {
      hasAnyValues = true;
      internalValueResult.apSnifferChan = this._apSnifferChan;
    }
    if (this._apSnifferChanWidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.apSnifferChanWidth = this._apSnifferChanWidth;
    }
    if (this._apSnifferCtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.apSnifferCtl = this._apSnifferCtl;
    }
    if (this._apSnifferData !== undefined) {
      hasAnyValues = true;
      internalValueResult.apSnifferData = this._apSnifferData;
    }
    if (this._apSnifferMgmtBeacon !== undefined) {
      hasAnyValues = true;
      internalValueResult.apSnifferMgmtBeacon = this._apSnifferMgmtBeacon;
    }
    if (this._apSnifferMgmtOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.apSnifferMgmtOther = this._apSnifferMgmtOther;
    }
    if (this._apSnifferMgmtProbe !== undefined) {
      hasAnyValues = true;
      internalValueResult.apSnifferMgmtProbe = this._apSnifferMgmtProbe;
    }
    if (this._arrpProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrpProfile = this._arrpProfile;
    }
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
    if (this._band5GType !== undefined) {
      hasAnyValues = true;
      internalValueResult.band5GType = this._band5GType;
    }
    if (this._bandwidthAdmissionControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthAdmissionControl = this._bandwidthAdmissionControl;
    }
    if (this._bandwidthCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthCapacity = this._bandwidthCapacity;
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
    if (this._callAdmissionControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.callAdmissionControl = this._callAdmissionControl;
    }
    if (this._callCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.callCapacity = this._callCapacity;
    }
    if (this._channelBonding !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelBonding = this._channelBonding;
    }
    if (this._channelBondingExt !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelBondingExt = this._channelBondingExt;
    }
    if (this._channelUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelUtilization = this._channelUtilization;
    }
    if (this._coexistence !== undefined) {
      hasAnyValues = true;
      internalValueResult.coexistence = this._coexistence;
    }
    if (this._darrp !== undefined) {
      hasAnyValues = true;
      internalValueResult.darrp = this._darrp;
    }
    if (this._drma !== undefined) {
      hasAnyValues = true;
      internalValueResult.drma = this._drma;
    }
    if (this._drmaSensitivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.drmaSensitivity = this._drmaSensitivity;
    }
    if (this._dtim !== undefined) {
      hasAnyValues = true;
      internalValueResult.dtim = this._dtim;
    }
    if (this._fragThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragThreshold = this._fragThreshold;
    }
    if (this._frequencyHandoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequencyHandoff = this._frequencyHandoff;
    }
    if (this._iperfProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.iperfProtocol = this._iperfProtocol;
    }
    if (this._iperfServerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.iperfServerPort = this._iperfServerPort;
    }
    if (this._maxClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxClients = this._maxClients;
    }
    if (this._maxDistance !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDistance = this._maxDistance;
    }
    if (this._mimoMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mimoMode = this._mimoMode;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._n80211D !== undefined) {
      hasAnyValues = true;
      internalValueResult.n80211D = this._n80211D;
    }
    if (this._n80211Mc !== undefined) {
      hasAnyValues = true;
      internalValueResult.n80211Mc = this._n80211Mc;
    }
    if (this._optionalAntenna !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionalAntenna = this._optionalAntenna;
    }
    if (this._optionalAntennaGain !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionalAntennaGain = this._optionalAntennaGain;
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
    if (this._powersaveOptimize !== undefined) {
      hasAnyValues = true;
      internalValueResult.powersaveOptimize = this._powersaveOptimize;
    }
    if (this._protectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectionMode = this._protectionMode;
    }
    if (this._radioId !== undefined) {
      hasAnyValues = true;
      internalValueResult.radioId = this._radioId;
    }
    if (this._rtsThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtsThreshold = this._rtsThreshold;
    }
    if (this._samBssid !== undefined) {
      hasAnyValues = true;
      internalValueResult.samBssid = this._samBssid;
    }
    if (this._samCaCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.samCaCertificate = this._samCaCertificate;
    }
    if (this._samCaptivePortal !== undefined) {
      hasAnyValues = true;
      internalValueResult.samCaptivePortal = this._samCaptivePortal;
    }
    if (this._samClientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.samClientCertificate = this._samClientCertificate;
    }
    if (this._samCwpFailureString !== undefined) {
      hasAnyValues = true;
      internalValueResult.samCwpFailureString = this._samCwpFailureString;
    }
    if (this._samCwpMatchString !== undefined) {
      hasAnyValues = true;
      internalValueResult.samCwpMatchString = this._samCwpMatchString;
    }
    if (this._samCwpPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.samCwpPassword = this._samCwpPassword;
    }
    if (this._samCwpSuccessString !== undefined) {
      hasAnyValues = true;
      internalValueResult.samCwpSuccessString = this._samCwpSuccessString;
    }
    if (this._samCwpTestUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.samCwpTestUrl = this._samCwpTestUrl;
    }
    if (this._samCwpUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.samCwpUsername = this._samCwpUsername;
    }
    if (this._samEapMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.samEapMethod = this._samEapMethod;
    }
    if (this._samPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.samPassword = this._samPassword;
    }
    if (this._samPrivateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.samPrivateKey = this._samPrivateKey;
    }
    if (this._samPrivateKeyPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.samPrivateKeyPassword = this._samPrivateKeyPassword;
    }
    if (this._samReportIntv !== undefined) {
      hasAnyValues = true;
      internalValueResult.samReportIntv = this._samReportIntv;
    }
    if (this._samSecurityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.samSecurityType = this._samSecurityType;
    }
    if (this._samServerFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.samServerFqdn = this._samServerFqdn;
    }
    if (this._samServerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.samServerIp = this._samServerIp;
    }
    if (this._samServerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.samServerType = this._samServerType;
    }
    if (this._samSsid !== undefined) {
      hasAnyValues = true;
      internalValueResult.samSsid = this._samSsid;
    }
    if (this._samTest !== undefined) {
      hasAnyValues = true;
      internalValueResult.samTest = this._samTest;
    }
    if (this._samUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.samUsername = this._samUsername;
    }
    if (this._shortGuardInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.shortGuardInterval = this._shortGuardInterval;
    }
    if (this._spectrumAnalysis !== undefined) {
      hasAnyValues = true;
      internalValueResult.spectrumAnalysis = this._spectrumAnalysis;
    }
    if (this._transmitOptimize !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitOptimize = this._transmitOptimize;
    }
    if (this._vapAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.vapAll = this._vapAll;
    }
    if (this._widsProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.widsProfile = this._widsProfile;
    }
    if (this._zeroWaitDfs !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeroWaitDfs = this._zeroWaitDfs;
    }
    if (this._channel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel?.internalValue;
    }
    if (this._vaps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaps = this._vaps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerWtpprofileRadio1 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._airtimeFairness = undefined;
      this._amsdu = undefined;
      this._apHandoff = undefined;
      this._apSnifferAddr = undefined;
      this._apSnifferBufsize = undefined;
      this._apSnifferChan = undefined;
      this._apSnifferChanWidth = undefined;
      this._apSnifferCtl = undefined;
      this._apSnifferData = undefined;
      this._apSnifferMgmtBeacon = undefined;
      this._apSnifferMgmtOther = undefined;
      this._apSnifferMgmtProbe = undefined;
      this._arrpProfile = undefined;
      this._autoPowerHigh = undefined;
      this._autoPowerLevel = undefined;
      this._autoPowerLow = undefined;
      this._autoPowerTarget = undefined;
      this._band = undefined;
      this._band5GType = undefined;
      this._bandwidthAdmissionControl = undefined;
      this._bandwidthCapacity = undefined;
      this._beaconInterval = undefined;
      this._bssColor = undefined;
      this._bssColorMode = undefined;
      this._callAdmissionControl = undefined;
      this._callCapacity = undefined;
      this._channelBonding = undefined;
      this._channelBondingExt = undefined;
      this._channelUtilization = undefined;
      this._coexistence = undefined;
      this._darrp = undefined;
      this._drma = undefined;
      this._drmaSensitivity = undefined;
      this._dtim = undefined;
      this._fragThreshold = undefined;
      this._frequencyHandoff = undefined;
      this._iperfProtocol = undefined;
      this._iperfServerPort = undefined;
      this._maxClients = undefined;
      this._maxDistance = undefined;
      this._mimoMode = undefined;
      this._mode = undefined;
      this._n80211D = undefined;
      this._n80211Mc = undefined;
      this._optionalAntenna = undefined;
      this._optionalAntennaGain = undefined;
      this._powerLevel = undefined;
      this._powerMode = undefined;
      this._powerValue = undefined;
      this._powersaveOptimize = undefined;
      this._protectionMode = undefined;
      this._radioId = undefined;
      this._rtsThreshold = undefined;
      this._samBssid = undefined;
      this._samCaCertificate = undefined;
      this._samCaptivePortal = undefined;
      this._samClientCertificate = undefined;
      this._samCwpFailureString = undefined;
      this._samCwpMatchString = undefined;
      this._samCwpPassword = undefined;
      this._samCwpSuccessString = undefined;
      this._samCwpTestUrl = undefined;
      this._samCwpUsername = undefined;
      this._samEapMethod = undefined;
      this._samPassword = undefined;
      this._samPrivateKey = undefined;
      this._samPrivateKeyPassword = undefined;
      this._samReportIntv = undefined;
      this._samSecurityType = undefined;
      this._samServerFqdn = undefined;
      this._samServerIp = undefined;
      this._samServerType = undefined;
      this._samSsid = undefined;
      this._samTest = undefined;
      this._samUsername = undefined;
      this._shortGuardInterval = undefined;
      this._spectrumAnalysis = undefined;
      this._transmitOptimize = undefined;
      this._vapAll = undefined;
      this._widsProfile = undefined;
      this._zeroWaitDfs = undefined;
      this._channel.internalValue = undefined;
      this._vaps.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._airtimeFairness = value.airtimeFairness;
      this._amsdu = value.amsdu;
      this._apHandoff = value.apHandoff;
      this._apSnifferAddr = value.apSnifferAddr;
      this._apSnifferBufsize = value.apSnifferBufsize;
      this._apSnifferChan = value.apSnifferChan;
      this._apSnifferChanWidth = value.apSnifferChanWidth;
      this._apSnifferCtl = value.apSnifferCtl;
      this._apSnifferData = value.apSnifferData;
      this._apSnifferMgmtBeacon = value.apSnifferMgmtBeacon;
      this._apSnifferMgmtOther = value.apSnifferMgmtOther;
      this._apSnifferMgmtProbe = value.apSnifferMgmtProbe;
      this._arrpProfile = value.arrpProfile;
      this._autoPowerHigh = value.autoPowerHigh;
      this._autoPowerLevel = value.autoPowerLevel;
      this._autoPowerLow = value.autoPowerLow;
      this._autoPowerTarget = value.autoPowerTarget;
      this._band = value.band;
      this._band5GType = value.band5GType;
      this._bandwidthAdmissionControl = value.bandwidthAdmissionControl;
      this._bandwidthCapacity = value.bandwidthCapacity;
      this._beaconInterval = value.beaconInterval;
      this._bssColor = value.bssColor;
      this._bssColorMode = value.bssColorMode;
      this._callAdmissionControl = value.callAdmissionControl;
      this._callCapacity = value.callCapacity;
      this._channelBonding = value.channelBonding;
      this._channelBondingExt = value.channelBondingExt;
      this._channelUtilization = value.channelUtilization;
      this._coexistence = value.coexistence;
      this._darrp = value.darrp;
      this._drma = value.drma;
      this._drmaSensitivity = value.drmaSensitivity;
      this._dtim = value.dtim;
      this._fragThreshold = value.fragThreshold;
      this._frequencyHandoff = value.frequencyHandoff;
      this._iperfProtocol = value.iperfProtocol;
      this._iperfServerPort = value.iperfServerPort;
      this._maxClients = value.maxClients;
      this._maxDistance = value.maxDistance;
      this._mimoMode = value.mimoMode;
      this._mode = value.mode;
      this._n80211D = value.n80211D;
      this._n80211Mc = value.n80211Mc;
      this._optionalAntenna = value.optionalAntenna;
      this._optionalAntennaGain = value.optionalAntennaGain;
      this._powerLevel = value.powerLevel;
      this._powerMode = value.powerMode;
      this._powerValue = value.powerValue;
      this._powersaveOptimize = value.powersaveOptimize;
      this._protectionMode = value.protectionMode;
      this._radioId = value.radioId;
      this._rtsThreshold = value.rtsThreshold;
      this._samBssid = value.samBssid;
      this._samCaCertificate = value.samCaCertificate;
      this._samCaptivePortal = value.samCaptivePortal;
      this._samClientCertificate = value.samClientCertificate;
      this._samCwpFailureString = value.samCwpFailureString;
      this._samCwpMatchString = value.samCwpMatchString;
      this._samCwpPassword = value.samCwpPassword;
      this._samCwpSuccessString = value.samCwpSuccessString;
      this._samCwpTestUrl = value.samCwpTestUrl;
      this._samCwpUsername = value.samCwpUsername;
      this._samEapMethod = value.samEapMethod;
      this._samPassword = value.samPassword;
      this._samPrivateKey = value.samPrivateKey;
      this._samPrivateKeyPassword = value.samPrivateKeyPassword;
      this._samReportIntv = value.samReportIntv;
      this._samSecurityType = value.samSecurityType;
      this._samServerFqdn = value.samServerFqdn;
      this._samServerIp = value.samServerIp;
      this._samServerType = value.samServerType;
      this._samSsid = value.samSsid;
      this._samTest = value.samTest;
      this._samUsername = value.samUsername;
      this._shortGuardInterval = value.shortGuardInterval;
      this._spectrumAnalysis = value.spectrumAnalysis;
      this._transmitOptimize = value.transmitOptimize;
      this._vapAll = value.vapAll;
      this._widsProfile = value.widsProfile;
      this._zeroWaitDfs = value.zeroWaitDfs;
      this._channel.internalValue = value.channel;
      this._vaps.internalValue = value.vaps;
    }
  }

  // airtime_fairness - computed: true, optional: true, required: false
  private _airtimeFairness?: string; 
  public get airtimeFairness() {
    return this.getStringAttribute('airtime_fairness');
  }
  public set airtimeFairness(value: string) {
    this._airtimeFairness = value;
  }
  public resetAirtimeFairness() {
    this._airtimeFairness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get airtimeFairnessInput() {
    return this._airtimeFairness;
  }

  // amsdu - computed: true, optional: true, required: false
  private _amsdu?: string; 
  public get amsdu() {
    return this.getStringAttribute('amsdu');
  }
  public set amsdu(value: string) {
    this._amsdu = value;
  }
  public resetAmsdu() {
    this._amsdu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amsduInput() {
    return this._amsdu;
  }

  // ap_handoff - computed: false, optional: true, required: false
  private _apHandoff?: string; 
  public get apHandoff() {
    return this.getStringAttribute('ap_handoff');
  }
  public set apHandoff(value: string) {
    this._apHandoff = value;
  }
  public resetApHandoff() {
    this._apHandoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apHandoffInput() {
    return this._apHandoff;
  }

  // ap_sniffer_addr - computed: true, optional: true, required: false
  private _apSnifferAddr?: string; 
  public get apSnifferAddr() {
    return this.getStringAttribute('ap_sniffer_addr');
  }
  public set apSnifferAddr(value: string) {
    this._apSnifferAddr = value;
  }
  public resetApSnifferAddr() {
    this._apSnifferAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferAddrInput() {
    return this._apSnifferAddr;
  }

  // ap_sniffer_bufsize - computed: true, optional: true, required: false
  private _apSnifferBufsize?: number; 
  public get apSnifferBufsize() {
    return this.getNumberAttribute('ap_sniffer_bufsize');
  }
  public set apSnifferBufsize(value: number) {
    this._apSnifferBufsize = value;
  }
  public resetApSnifferBufsize() {
    this._apSnifferBufsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferBufsizeInput() {
    return this._apSnifferBufsize;
  }

  // ap_sniffer_chan - computed: true, optional: true, required: false
  private _apSnifferChan?: number; 
  public get apSnifferChan() {
    return this.getNumberAttribute('ap_sniffer_chan');
  }
  public set apSnifferChan(value: number) {
    this._apSnifferChan = value;
  }
  public resetApSnifferChan() {
    this._apSnifferChan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferChanInput() {
    return this._apSnifferChan;
  }

  // ap_sniffer_chan_width - computed: true, optional: true, required: false
  private _apSnifferChanWidth?: string; 
  public get apSnifferChanWidth() {
    return this.getStringAttribute('ap_sniffer_chan_width');
  }
  public set apSnifferChanWidth(value: string) {
    this._apSnifferChanWidth = value;
  }
  public resetApSnifferChanWidth() {
    this._apSnifferChanWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferChanWidthInput() {
    return this._apSnifferChanWidth;
  }

  // ap_sniffer_ctl - computed: true, optional: true, required: false
  private _apSnifferCtl?: string; 
  public get apSnifferCtl() {
    return this.getStringAttribute('ap_sniffer_ctl');
  }
  public set apSnifferCtl(value: string) {
    this._apSnifferCtl = value;
  }
  public resetApSnifferCtl() {
    this._apSnifferCtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferCtlInput() {
    return this._apSnifferCtl;
  }

  // ap_sniffer_data - computed: true, optional: true, required: false
  private _apSnifferData?: string; 
  public get apSnifferData() {
    return this.getStringAttribute('ap_sniffer_data');
  }
  public set apSnifferData(value: string) {
    this._apSnifferData = value;
  }
  public resetApSnifferData() {
    this._apSnifferData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferDataInput() {
    return this._apSnifferData;
  }

  // ap_sniffer_mgmt_beacon - computed: true, optional: true, required: false
  private _apSnifferMgmtBeacon?: string; 
  public get apSnifferMgmtBeacon() {
    return this.getStringAttribute('ap_sniffer_mgmt_beacon');
  }
  public set apSnifferMgmtBeacon(value: string) {
    this._apSnifferMgmtBeacon = value;
  }
  public resetApSnifferMgmtBeacon() {
    this._apSnifferMgmtBeacon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferMgmtBeaconInput() {
    return this._apSnifferMgmtBeacon;
  }

  // ap_sniffer_mgmt_other - computed: true, optional: true, required: false
  private _apSnifferMgmtOther?: string; 
  public get apSnifferMgmtOther() {
    return this.getStringAttribute('ap_sniffer_mgmt_other');
  }
  public set apSnifferMgmtOther(value: string) {
    this._apSnifferMgmtOther = value;
  }
  public resetApSnifferMgmtOther() {
    this._apSnifferMgmtOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferMgmtOtherInput() {
    return this._apSnifferMgmtOther;
  }

  // ap_sniffer_mgmt_probe - computed: true, optional: true, required: false
  private _apSnifferMgmtProbe?: string; 
  public get apSnifferMgmtProbe() {
    return this.getStringAttribute('ap_sniffer_mgmt_probe');
  }
  public set apSnifferMgmtProbe(value: string) {
    this._apSnifferMgmtProbe = value;
  }
  public resetApSnifferMgmtProbe() {
    this._apSnifferMgmtProbe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferMgmtProbeInput() {
    return this._apSnifferMgmtProbe;
  }

  // arrp_profile - computed: false, optional: true, required: false
  private _arrpProfile?: string; 
  public get arrpProfile() {
    return this.getStringAttribute('arrp_profile');
  }
  public set arrpProfile(value: string) {
    this._arrpProfile = value;
  }
  public resetArrpProfile() {
    this._arrpProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrpProfileInput() {
    return this._arrpProfile;
  }

  // auto_power_high - computed: true, optional: true, required: false
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

  // auto_power_level - computed: true, optional: true, required: false
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

  // auto_power_low - computed: true, optional: true, required: false
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

  // band - computed: false, optional: true, required: false
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

  // band_5g_type - computed: true, optional: true, required: false
  private _band5GType?: string; 
  public get band5GType() {
    return this.getStringAttribute('band_5g_type');
  }
  public set band5GType(value: string) {
    this._band5GType = value;
  }
  public resetBand5GType() {
    this._band5GType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get band5GTypeInput() {
    return this._band5GType;
  }

  // bandwidth_admission_control - computed: true, optional: true, required: false
  private _bandwidthAdmissionControl?: string; 
  public get bandwidthAdmissionControl() {
    return this.getStringAttribute('bandwidth_admission_control');
  }
  public set bandwidthAdmissionControl(value: string) {
    this._bandwidthAdmissionControl = value;
  }
  public resetBandwidthAdmissionControl() {
    this._bandwidthAdmissionControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthAdmissionControlInput() {
    return this._bandwidthAdmissionControl;
  }

  // bandwidth_capacity - computed: true, optional: true, required: false
  private _bandwidthCapacity?: number; 
  public get bandwidthCapacity() {
    return this.getNumberAttribute('bandwidth_capacity');
  }
  public set bandwidthCapacity(value: number) {
    this._bandwidthCapacity = value;
  }
  public resetBandwidthCapacity() {
    this._bandwidthCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthCapacityInput() {
    return this._bandwidthCapacity;
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

  // call_admission_control - computed: true, optional: true, required: false
  private _callAdmissionControl?: string; 
  public get callAdmissionControl() {
    return this.getStringAttribute('call_admission_control');
  }
  public set callAdmissionControl(value: string) {
    this._callAdmissionControl = value;
  }
  public resetCallAdmissionControl() {
    this._callAdmissionControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callAdmissionControlInput() {
    return this._callAdmissionControl;
  }

  // call_capacity - computed: true, optional: true, required: false
  private _callCapacity?: number; 
  public get callCapacity() {
    return this.getNumberAttribute('call_capacity');
  }
  public set callCapacity(value: number) {
    this._callCapacity = value;
  }
  public resetCallCapacity() {
    this._callCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callCapacityInput() {
    return this._callCapacity;
  }

  // channel_bonding - computed: true, optional: true, required: false
  private _channelBonding?: string; 
  public get channelBonding() {
    return this.getStringAttribute('channel_bonding');
  }
  public set channelBonding(value: string) {
    this._channelBonding = value;
  }
  public resetChannelBonding() {
    this._channelBonding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelBondingInput() {
    return this._channelBonding;
  }

  // channel_bonding_ext - computed: true, optional: true, required: false
  private _channelBondingExt?: string; 
  public get channelBondingExt() {
    return this.getStringAttribute('channel_bonding_ext');
  }
  public set channelBondingExt(value: string) {
    this._channelBondingExt = value;
  }
  public resetChannelBondingExt() {
    this._channelBondingExt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelBondingExtInput() {
    return this._channelBondingExt;
  }

  // channel_utilization - computed: true, optional: true, required: false
  private _channelUtilization?: string; 
  public get channelUtilization() {
    return this.getStringAttribute('channel_utilization');
  }
  public set channelUtilization(value: string) {
    this._channelUtilization = value;
  }
  public resetChannelUtilization() {
    this._channelUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelUtilizationInput() {
    return this._channelUtilization;
  }

  // coexistence - computed: true, optional: true, required: false
  private _coexistence?: string; 
  public get coexistence() {
    return this.getStringAttribute('coexistence');
  }
  public set coexistence(value: string) {
    this._coexistence = value;
  }
  public resetCoexistence() {
    this._coexistence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coexistenceInput() {
    return this._coexistence;
  }

  // darrp - computed: true, optional: true, required: false
  private _darrp?: string; 
  public get darrp() {
    return this.getStringAttribute('darrp');
  }
  public set darrp(value: string) {
    this._darrp = value;
  }
  public resetDarrp() {
    this._darrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darrpInput() {
    return this._darrp;
  }

  // drma - computed: true, optional: true, required: false
  private _drma?: string; 
  public get drma() {
    return this.getStringAttribute('drma');
  }
  public set drma(value: string) {
    this._drma = value;
  }
  public resetDrma() {
    this._drma = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drmaInput() {
    return this._drma;
  }

  // drma_sensitivity - computed: true, optional: true, required: false
  private _drmaSensitivity?: string; 
  public get drmaSensitivity() {
    return this.getStringAttribute('drma_sensitivity');
  }
  public set drmaSensitivity(value: string) {
    this._drmaSensitivity = value;
  }
  public resetDrmaSensitivity() {
    this._drmaSensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drmaSensitivityInput() {
    return this._drmaSensitivity;
  }

  // dtim - computed: true, optional: true, required: false
  private _dtim?: number; 
  public get dtim() {
    return this.getNumberAttribute('dtim');
  }
  public set dtim(value: number) {
    this._dtim = value;
  }
  public resetDtim() {
    this._dtim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtimInput() {
    return this._dtim;
  }

  // frag_threshold - computed: true, optional: true, required: false
  private _fragThreshold?: number; 
  public get fragThreshold() {
    return this.getNumberAttribute('frag_threshold');
  }
  public set fragThreshold(value: number) {
    this._fragThreshold = value;
  }
  public resetFragThreshold() {
    this._fragThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragThresholdInput() {
    return this._fragThreshold;
  }

  // frequency_handoff - computed: false, optional: true, required: false
  private _frequencyHandoff?: string; 
  public get frequencyHandoff() {
    return this.getStringAttribute('frequency_handoff');
  }
  public set frequencyHandoff(value: string) {
    this._frequencyHandoff = value;
  }
  public resetFrequencyHandoff() {
    this._frequencyHandoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyHandoffInput() {
    return this._frequencyHandoff;
  }

  // iperf_protocol - computed: true, optional: true, required: false
  private _iperfProtocol?: string; 
  public get iperfProtocol() {
    return this.getStringAttribute('iperf_protocol');
  }
  public set iperfProtocol(value: string) {
    this._iperfProtocol = value;
  }
  public resetIperfProtocol() {
    this._iperfProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iperfProtocolInput() {
    return this._iperfProtocol;
  }

  // iperf_server_port - computed: true, optional: true, required: false
  private _iperfServerPort?: number; 
  public get iperfServerPort() {
    return this.getNumberAttribute('iperf_server_port');
  }
  public set iperfServerPort(value: number) {
    this._iperfServerPort = value;
  }
  public resetIperfServerPort() {
    this._iperfServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iperfServerPortInput() {
    return this._iperfServerPort;
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

  // max_distance - computed: false, optional: true, required: false
  private _maxDistance?: number; 
  public get maxDistance() {
    return this.getNumberAttribute('max_distance');
  }
  public set maxDistance(value: number) {
    this._maxDistance = value;
  }
  public resetMaxDistance() {
    this._maxDistance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDistanceInput() {
    return this._maxDistance;
  }

  // mimo_mode - computed: true, optional: true, required: false
  private _mimoMode?: string; 
  public get mimoMode() {
    return this.getStringAttribute('mimo_mode');
  }
  public set mimoMode(value: string) {
    this._mimoMode = value;
  }
  public resetMimoMode() {
    this._mimoMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mimoModeInput() {
    return this._mimoMode;
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

  // n80211mc - computed: true, optional: true, required: false
  private _n80211Mc?: string; 
  public get n80211Mc() {
    return this.getStringAttribute('n80211mc');
  }
  public set n80211Mc(value: string) {
    this._n80211Mc = value;
  }
  public resetN80211Mc() {
    this._n80211Mc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get n80211McInput() {
    return this._n80211Mc;
  }

  // optional_antenna - computed: true, optional: true, required: false
  private _optionalAntenna?: string; 
  public get optionalAntenna() {
    return this.getStringAttribute('optional_antenna');
  }
  public set optionalAntenna(value: string) {
    this._optionalAntenna = value;
  }
  public resetOptionalAntenna() {
    this._optionalAntenna = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalAntennaInput() {
    return this._optionalAntenna;
  }

  // optional_antenna_gain - computed: true, optional: true, required: false
  private _optionalAntennaGain?: string; 
  public get optionalAntennaGain() {
    return this.getStringAttribute('optional_antenna_gain');
  }
  public set optionalAntennaGain(value: string) {
    this._optionalAntennaGain = value;
  }
  public resetOptionalAntennaGain() {
    this._optionalAntennaGain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalAntennaGainInput() {
    return this._optionalAntennaGain;
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

  // powersave_optimize - computed: false, optional: true, required: false
  private _powersaveOptimize?: string; 
  public get powersaveOptimize() {
    return this.getStringAttribute('powersave_optimize');
  }
  public set powersaveOptimize(value: string) {
    this._powersaveOptimize = value;
  }
  public resetPowersaveOptimize() {
    this._powersaveOptimize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powersaveOptimizeInput() {
    return this._powersaveOptimize;
  }

  // protection_mode - computed: true, optional: true, required: false
  private _protectionMode?: string; 
  public get protectionMode() {
    return this.getStringAttribute('protection_mode');
  }
  public set protectionMode(value: string) {
    this._protectionMode = value;
  }
  public resetProtectionMode() {
    this._protectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionModeInput() {
    return this._protectionMode;
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

  // rts_threshold - computed: true, optional: true, required: false
  private _rtsThreshold?: number; 
  public get rtsThreshold() {
    return this.getNumberAttribute('rts_threshold');
  }
  public set rtsThreshold(value: number) {
    this._rtsThreshold = value;
  }
  public resetRtsThreshold() {
    this._rtsThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtsThresholdInput() {
    return this._rtsThreshold;
  }

  // sam_bssid - computed: true, optional: true, required: false
  private _samBssid?: string; 
  public get samBssid() {
    return this.getStringAttribute('sam_bssid');
  }
  public set samBssid(value: string) {
    this._samBssid = value;
  }
  public resetSamBssid() {
    this._samBssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samBssidInput() {
    return this._samBssid;
  }

  // sam_ca_certificate - computed: false, optional: true, required: false
  private _samCaCertificate?: string; 
  public get samCaCertificate() {
    return this.getStringAttribute('sam_ca_certificate');
  }
  public set samCaCertificate(value: string) {
    this._samCaCertificate = value;
  }
  public resetSamCaCertificate() {
    this._samCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samCaCertificateInput() {
    return this._samCaCertificate;
  }

  // sam_captive_portal - computed: true, optional: true, required: false
  private _samCaptivePortal?: string; 
  public get samCaptivePortal() {
    return this.getStringAttribute('sam_captive_portal');
  }
  public set samCaptivePortal(value: string) {
    this._samCaptivePortal = value;
  }
  public resetSamCaptivePortal() {
    this._samCaptivePortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samCaptivePortalInput() {
    return this._samCaptivePortal;
  }

  // sam_client_certificate - computed: false, optional: true, required: false
  private _samClientCertificate?: string; 
  public get samClientCertificate() {
    return this.getStringAttribute('sam_client_certificate');
  }
  public set samClientCertificate(value: string) {
    this._samClientCertificate = value;
  }
  public resetSamClientCertificate() {
    this._samClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samClientCertificateInput() {
    return this._samClientCertificate;
  }

  // sam_cwp_failure_string - computed: false, optional: true, required: false
  private _samCwpFailureString?: string; 
  public get samCwpFailureString() {
    return this.getStringAttribute('sam_cwp_failure_string');
  }
  public set samCwpFailureString(value: string) {
    this._samCwpFailureString = value;
  }
  public resetSamCwpFailureString() {
    this._samCwpFailureString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samCwpFailureStringInput() {
    return this._samCwpFailureString;
  }

  // sam_cwp_match_string - computed: false, optional: true, required: false
  private _samCwpMatchString?: string; 
  public get samCwpMatchString() {
    return this.getStringAttribute('sam_cwp_match_string');
  }
  public set samCwpMatchString(value: string) {
    this._samCwpMatchString = value;
  }
  public resetSamCwpMatchString() {
    this._samCwpMatchString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samCwpMatchStringInput() {
    return this._samCwpMatchString;
  }

  // sam_cwp_password - computed: false, optional: true, required: false
  private _samCwpPassword?: string; 
  public get samCwpPassword() {
    return this.getStringAttribute('sam_cwp_password');
  }
  public set samCwpPassword(value: string) {
    this._samCwpPassword = value;
  }
  public resetSamCwpPassword() {
    this._samCwpPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samCwpPasswordInput() {
    return this._samCwpPassword;
  }

  // sam_cwp_success_string - computed: false, optional: true, required: false
  private _samCwpSuccessString?: string; 
  public get samCwpSuccessString() {
    return this.getStringAttribute('sam_cwp_success_string');
  }
  public set samCwpSuccessString(value: string) {
    this._samCwpSuccessString = value;
  }
  public resetSamCwpSuccessString() {
    this._samCwpSuccessString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samCwpSuccessStringInput() {
    return this._samCwpSuccessString;
  }

  // sam_cwp_test_url - computed: false, optional: true, required: false
  private _samCwpTestUrl?: string; 
  public get samCwpTestUrl() {
    return this.getStringAttribute('sam_cwp_test_url');
  }
  public set samCwpTestUrl(value: string) {
    this._samCwpTestUrl = value;
  }
  public resetSamCwpTestUrl() {
    this._samCwpTestUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samCwpTestUrlInput() {
    return this._samCwpTestUrl;
  }

  // sam_cwp_username - computed: false, optional: true, required: false
  private _samCwpUsername?: string; 
  public get samCwpUsername() {
    return this.getStringAttribute('sam_cwp_username');
  }
  public set samCwpUsername(value: string) {
    this._samCwpUsername = value;
  }
  public resetSamCwpUsername() {
    this._samCwpUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samCwpUsernameInput() {
    return this._samCwpUsername;
  }

  // sam_eap_method - computed: true, optional: true, required: false
  private _samEapMethod?: string; 
  public get samEapMethod() {
    return this.getStringAttribute('sam_eap_method');
  }
  public set samEapMethod(value: string) {
    this._samEapMethod = value;
  }
  public resetSamEapMethod() {
    this._samEapMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samEapMethodInput() {
    return this._samEapMethod;
  }

  // sam_password - computed: false, optional: true, required: false
  private _samPassword?: string; 
  public get samPassword() {
    return this.getStringAttribute('sam_password');
  }
  public set samPassword(value: string) {
    this._samPassword = value;
  }
  public resetSamPassword() {
    this._samPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samPasswordInput() {
    return this._samPassword;
  }

  // sam_private_key - computed: false, optional: true, required: false
  private _samPrivateKey?: string; 
  public get samPrivateKey() {
    return this.getStringAttribute('sam_private_key');
  }
  public set samPrivateKey(value: string) {
    this._samPrivateKey = value;
  }
  public resetSamPrivateKey() {
    this._samPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samPrivateKeyInput() {
    return this._samPrivateKey;
  }

  // sam_private_key_password - computed: false, optional: true, required: false
  private _samPrivateKeyPassword?: string; 
  public get samPrivateKeyPassword() {
    return this.getStringAttribute('sam_private_key_password');
  }
  public set samPrivateKeyPassword(value: string) {
    this._samPrivateKeyPassword = value;
  }
  public resetSamPrivateKeyPassword() {
    this._samPrivateKeyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samPrivateKeyPasswordInput() {
    return this._samPrivateKeyPassword;
  }

  // sam_report_intv - computed: false, optional: true, required: false
  private _samReportIntv?: number; 
  public get samReportIntv() {
    return this.getNumberAttribute('sam_report_intv');
  }
  public set samReportIntv(value: number) {
    this._samReportIntv = value;
  }
  public resetSamReportIntv() {
    this._samReportIntv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samReportIntvInput() {
    return this._samReportIntv;
  }

  // sam_security_type - computed: true, optional: true, required: false
  private _samSecurityType?: string; 
  public get samSecurityType() {
    return this.getStringAttribute('sam_security_type');
  }
  public set samSecurityType(value: string) {
    this._samSecurityType = value;
  }
  public resetSamSecurityType() {
    this._samSecurityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samSecurityTypeInput() {
    return this._samSecurityType;
  }

  // sam_server_fqdn - computed: false, optional: true, required: false
  private _samServerFqdn?: string; 
  public get samServerFqdn() {
    return this.getStringAttribute('sam_server_fqdn');
  }
  public set samServerFqdn(value: string) {
    this._samServerFqdn = value;
  }
  public resetSamServerFqdn() {
    this._samServerFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samServerFqdnInput() {
    return this._samServerFqdn;
  }

  // sam_server_ip - computed: true, optional: true, required: false
  private _samServerIp?: string; 
  public get samServerIp() {
    return this.getStringAttribute('sam_server_ip');
  }
  public set samServerIp(value: string) {
    this._samServerIp = value;
  }
  public resetSamServerIp() {
    this._samServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samServerIpInput() {
    return this._samServerIp;
  }

  // sam_server_type - computed: true, optional: true, required: false
  private _samServerType?: string; 
  public get samServerType() {
    return this.getStringAttribute('sam_server_type');
  }
  public set samServerType(value: string) {
    this._samServerType = value;
  }
  public resetSamServerType() {
    this._samServerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samServerTypeInput() {
    return this._samServerType;
  }

  // sam_ssid - computed: false, optional: true, required: false
  private _samSsid?: string; 
  public get samSsid() {
    return this.getStringAttribute('sam_ssid');
  }
  public set samSsid(value: string) {
    this._samSsid = value;
  }
  public resetSamSsid() {
    this._samSsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samSsidInput() {
    return this._samSsid;
  }

  // sam_test - computed: true, optional: true, required: false
  private _samTest?: string; 
  public get samTest() {
    return this.getStringAttribute('sam_test');
  }
  public set samTest(value: string) {
    this._samTest = value;
  }
  public resetSamTest() {
    this._samTest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samTestInput() {
    return this._samTest;
  }

  // sam_username - computed: false, optional: true, required: false
  private _samUsername?: string; 
  public get samUsername() {
    return this.getStringAttribute('sam_username');
  }
  public set samUsername(value: string) {
    this._samUsername = value;
  }
  public resetSamUsername() {
    this._samUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samUsernameInput() {
    return this._samUsername;
  }

  // short_guard_interval - computed: true, optional: true, required: false
  private _shortGuardInterval?: string; 
  public get shortGuardInterval() {
    return this.getStringAttribute('short_guard_interval');
  }
  public set shortGuardInterval(value: string) {
    this._shortGuardInterval = value;
  }
  public resetShortGuardInterval() {
    this._shortGuardInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortGuardIntervalInput() {
    return this._shortGuardInterval;
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

  // transmit_optimize - computed: true, optional: true, required: false
  private _transmitOptimize?: string; 
  public get transmitOptimize() {
    return this.getStringAttribute('transmit_optimize');
  }
  public set transmitOptimize(value: string) {
    this._transmitOptimize = value;
  }
  public resetTransmitOptimize() {
    this._transmitOptimize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitOptimizeInput() {
    return this._transmitOptimize;
  }

  // vap_all - computed: true, optional: true, required: false
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

  // wids_profile - computed: false, optional: true, required: false
  private _widsProfile?: string; 
  public get widsProfile() {
    return this.getStringAttribute('wids_profile');
  }
  public set widsProfile(value: string) {
    this._widsProfile = value;
  }
  public resetWidsProfile() {
    this._widsProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widsProfileInput() {
    return this._widsProfile;
  }

  // zero_wait_dfs - computed: true, optional: true, required: false
  private _zeroWaitDfs?: string; 
  public get zeroWaitDfs() {
    return this.getStringAttribute('zero_wait_dfs');
  }
  public set zeroWaitDfs(value: string) {
    this._zeroWaitDfs = value;
  }
  public resetZeroWaitDfs() {
    this._zeroWaitDfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroWaitDfsInput() {
    return this._zeroWaitDfs;
  }

  // channel - computed: false, optional: true, required: false
  private _channel = new WirelesscontrollerWtpprofileRadio1ChannelList(this, "channel", true);
  public get channel() {
    return this._channel;
  }
  public putChannel(value: WirelesscontrollerWtpprofileRadio1Channel[] | cdktf.IResolvable) {
    this._channel.internalValue = value;
  }
  public resetChannel() {
    this._channel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel.internalValue;
  }

  // vaps - computed: false, optional: true, required: false
  private _vaps = new WirelesscontrollerWtpprofileRadio1VapsList(this, "vaps", true);
  public get vaps() {
    return this._vaps;
  }
  public putVaps(value: WirelesscontrollerWtpprofileRadio1Vaps[] | cdktf.IResolvable) {
    this._vaps.internalValue = value;
  }
  public resetVaps() {
    this._vaps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vapsInput() {
    return this._vaps.internalValue;
  }
}
export interface WirelesscontrollerWtpprofileRadio2Channel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#chan WirelesscontrollerWtpprofile#chan}
  */
  readonly chan?: string;
}

export function wirelesscontrollerWtpprofileRadio2ChannelToTerraform(struct?: WirelesscontrollerWtpprofileRadio2Channel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chan: cdktf.stringToTerraform(struct!.chan),
  }
}


export function wirelesscontrollerWtpprofileRadio2ChannelToHclTerraform(struct?: WirelesscontrollerWtpprofileRadio2Channel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chan: {
      value: cdktf.stringToHclTerraform(struct!.chan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerWtpprofileRadio2ChannelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelesscontrollerWtpprofileRadio2Channel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chan !== undefined) {
      hasAnyValues = true;
      internalValueResult.chan = this._chan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerWtpprofileRadio2Channel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chan = value.chan;
    }
  }

  // chan - computed: false, optional: true, required: false
  private _chan?: string; 
  public get chan() {
    return this.getStringAttribute('chan');
  }
  public set chan(value: string) {
    this._chan = value;
  }
  public resetChan() {
    this._chan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chanInput() {
    return this._chan;
  }
}

export class WirelesscontrollerWtpprofileRadio2ChannelList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerWtpprofileRadio2Channel[] | cdktf.IResolvable

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
  public get(index: number): WirelesscontrollerWtpprofileRadio2ChannelOutputReference {
    return new WirelesscontrollerWtpprofileRadio2ChannelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelesscontrollerWtpprofileRadio2Vaps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#name WirelesscontrollerWtpprofile#name}
  */
  readonly name?: string;
}

export function wirelesscontrollerWtpprofileRadio2VapsToTerraform(struct?: WirelesscontrollerWtpprofileRadio2Vaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function wirelesscontrollerWtpprofileRadio2VapsToHclTerraform(struct?: WirelesscontrollerWtpprofileRadio2Vaps | cdktf.IResolvable): any {
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

export class WirelesscontrollerWtpprofileRadio2VapsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelesscontrollerWtpprofileRadio2Vaps | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WirelesscontrollerWtpprofileRadio2Vaps | cdktf.IResolvable | undefined) {
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

export class WirelesscontrollerWtpprofileRadio2VapsList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerWtpprofileRadio2Vaps[] | cdktf.IResolvable

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
  public get(index: number): WirelesscontrollerWtpprofileRadio2VapsOutputReference {
    return new WirelesscontrollerWtpprofileRadio2VapsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelesscontrollerWtpprofileRadio2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#airtime_fairness WirelesscontrollerWtpprofile#airtime_fairness}
  */
  readonly airtimeFairness?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#amsdu WirelesscontrollerWtpprofile#amsdu}
  */
  readonly amsdu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ap_handoff WirelesscontrollerWtpprofile#ap_handoff}
  */
  readonly apHandoff?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ap_sniffer_addr WirelesscontrollerWtpprofile#ap_sniffer_addr}
  */
  readonly apSnifferAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ap_sniffer_bufsize WirelesscontrollerWtpprofile#ap_sniffer_bufsize}
  */
  readonly apSnifferBufsize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ap_sniffer_chan WirelesscontrollerWtpprofile#ap_sniffer_chan}
  */
  readonly apSnifferChan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ap_sniffer_chan_width WirelesscontrollerWtpprofile#ap_sniffer_chan_width}
  */
  readonly apSnifferChanWidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ap_sniffer_ctl WirelesscontrollerWtpprofile#ap_sniffer_ctl}
  */
  readonly apSnifferCtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ap_sniffer_data WirelesscontrollerWtpprofile#ap_sniffer_data}
  */
  readonly apSnifferData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ap_sniffer_mgmt_beacon WirelesscontrollerWtpprofile#ap_sniffer_mgmt_beacon}
  */
  readonly apSnifferMgmtBeacon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ap_sniffer_mgmt_other WirelesscontrollerWtpprofile#ap_sniffer_mgmt_other}
  */
  readonly apSnifferMgmtOther?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ap_sniffer_mgmt_probe WirelesscontrollerWtpprofile#ap_sniffer_mgmt_probe}
  */
  readonly apSnifferMgmtProbe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#arrp_profile WirelesscontrollerWtpprofile#arrp_profile}
  */
  readonly arrpProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#auto_power_high WirelesscontrollerWtpprofile#auto_power_high}
  */
  readonly autoPowerHigh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#auto_power_level WirelesscontrollerWtpprofile#auto_power_level}
  */
  readonly autoPowerLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#auto_power_low WirelesscontrollerWtpprofile#auto_power_low}
  */
  readonly autoPowerLow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#auto_power_target WirelesscontrollerWtpprofile#auto_power_target}
  */
  readonly autoPowerTarget?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#band WirelesscontrollerWtpprofile#band}
  */
  readonly band?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#band_5g_type WirelesscontrollerWtpprofile#band_5g_type}
  */
  readonly band5GType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#bandwidth_admission_control WirelesscontrollerWtpprofile#bandwidth_admission_control}
  */
  readonly bandwidthAdmissionControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#bandwidth_capacity WirelesscontrollerWtpprofile#bandwidth_capacity}
  */
  readonly bandwidthCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#beacon_interval WirelesscontrollerWtpprofile#beacon_interval}
  */
  readonly beaconInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#bss_color WirelesscontrollerWtpprofile#bss_color}
  */
  readonly bssColor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#bss_color_mode WirelesscontrollerWtpprofile#bss_color_mode}
  */
  readonly bssColorMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#call_admission_control WirelesscontrollerWtpprofile#call_admission_control}
  */
  readonly callAdmissionControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#call_capacity WirelesscontrollerWtpprofile#call_capacity}
  */
  readonly callCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#channel_bonding WirelesscontrollerWtpprofile#channel_bonding}
  */
  readonly channelBonding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#channel_bonding_ext WirelesscontrollerWtpprofile#channel_bonding_ext}
  */
  readonly channelBondingExt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#channel_utilization WirelesscontrollerWtpprofile#channel_utilization}
  */
  readonly channelUtilization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#coexistence WirelesscontrollerWtpprofile#coexistence}
  */
  readonly coexistence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#darrp WirelesscontrollerWtpprofile#darrp}
  */
  readonly darrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#drma WirelesscontrollerWtpprofile#drma}
  */
  readonly drma?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#drma_sensitivity WirelesscontrollerWtpprofile#drma_sensitivity}
  */
  readonly drmaSensitivity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#dtim WirelesscontrollerWtpprofile#dtim}
  */
  readonly dtim?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#frag_threshold WirelesscontrollerWtpprofile#frag_threshold}
  */
  readonly fragThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#frequency_handoff WirelesscontrollerWtpprofile#frequency_handoff}
  */
  readonly frequencyHandoff?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#iperf_protocol WirelesscontrollerWtpprofile#iperf_protocol}
  */
  readonly iperfProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#iperf_server_port WirelesscontrollerWtpprofile#iperf_server_port}
  */
  readonly iperfServerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#max_clients WirelesscontrollerWtpprofile#max_clients}
  */
  readonly maxClients?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#max_distance WirelesscontrollerWtpprofile#max_distance}
  */
  readonly maxDistance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#mimo_mode WirelesscontrollerWtpprofile#mimo_mode}
  */
  readonly mimoMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#mode WirelesscontrollerWtpprofile#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#n80211d WirelesscontrollerWtpprofile#n80211d}
  */
  readonly n80211D?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#n80211mc WirelesscontrollerWtpprofile#n80211mc}
  */
  readonly n80211Mc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#optional_antenna WirelesscontrollerWtpprofile#optional_antenna}
  */
  readonly optionalAntenna?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#optional_antenna_gain WirelesscontrollerWtpprofile#optional_antenna_gain}
  */
  readonly optionalAntennaGain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#power_level WirelesscontrollerWtpprofile#power_level}
  */
  readonly powerLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#power_mode WirelesscontrollerWtpprofile#power_mode}
  */
  readonly powerMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#power_value WirelesscontrollerWtpprofile#power_value}
  */
  readonly powerValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#powersave_optimize WirelesscontrollerWtpprofile#powersave_optimize}
  */
  readonly powersaveOptimize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#protection_mode WirelesscontrollerWtpprofile#protection_mode}
  */
  readonly protectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#radio_id WirelesscontrollerWtpprofile#radio_id}
  */
  readonly radioId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#rts_threshold WirelesscontrollerWtpprofile#rts_threshold}
  */
  readonly rtsThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_bssid WirelesscontrollerWtpprofile#sam_bssid}
  */
  readonly samBssid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_ca_certificate WirelesscontrollerWtpprofile#sam_ca_certificate}
  */
  readonly samCaCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_captive_portal WirelesscontrollerWtpprofile#sam_captive_portal}
  */
  readonly samCaptivePortal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_client_certificate WirelesscontrollerWtpprofile#sam_client_certificate}
  */
  readonly samClientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_cwp_failure_string WirelesscontrollerWtpprofile#sam_cwp_failure_string}
  */
  readonly samCwpFailureString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_cwp_match_string WirelesscontrollerWtpprofile#sam_cwp_match_string}
  */
  readonly samCwpMatchString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_cwp_password WirelesscontrollerWtpprofile#sam_cwp_password}
  */
  readonly samCwpPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_cwp_success_string WirelesscontrollerWtpprofile#sam_cwp_success_string}
  */
  readonly samCwpSuccessString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_cwp_test_url WirelesscontrollerWtpprofile#sam_cwp_test_url}
  */
  readonly samCwpTestUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_cwp_username WirelesscontrollerWtpprofile#sam_cwp_username}
  */
  readonly samCwpUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_eap_method WirelesscontrollerWtpprofile#sam_eap_method}
  */
  readonly samEapMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_password WirelesscontrollerWtpprofile#sam_password}
  */
  readonly samPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_private_key WirelesscontrollerWtpprofile#sam_private_key}
  */
  readonly samPrivateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_private_key_password WirelesscontrollerWtpprofile#sam_private_key_password}
  */
  readonly samPrivateKeyPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_report_intv WirelesscontrollerWtpprofile#sam_report_intv}
  */
  readonly samReportIntv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_security_type WirelesscontrollerWtpprofile#sam_security_type}
  */
  readonly samSecurityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_server_fqdn WirelesscontrollerWtpprofile#sam_server_fqdn}
  */
  readonly samServerFqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_server_ip WirelesscontrollerWtpprofile#sam_server_ip}
  */
  readonly samServerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_server_type WirelesscontrollerWtpprofile#sam_server_type}
  */
  readonly samServerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_ssid WirelesscontrollerWtpprofile#sam_ssid}
  */
  readonly samSsid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_test WirelesscontrollerWtpprofile#sam_test}
  */
  readonly samTest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_username WirelesscontrollerWtpprofile#sam_username}
  */
  readonly samUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#short_guard_interval WirelesscontrollerWtpprofile#short_guard_interval}
  */
  readonly shortGuardInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#spectrum_analysis WirelesscontrollerWtpprofile#spectrum_analysis}
  */
  readonly spectrumAnalysis?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#transmit_optimize WirelesscontrollerWtpprofile#transmit_optimize}
  */
  readonly transmitOptimize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#vap_all WirelesscontrollerWtpprofile#vap_all}
  */
  readonly vapAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#wids_profile WirelesscontrollerWtpprofile#wids_profile}
  */
  readonly widsProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#zero_wait_dfs WirelesscontrollerWtpprofile#zero_wait_dfs}
  */
  readonly zeroWaitDfs?: string;
  /**
  * channel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#channel WirelesscontrollerWtpprofile#channel}
  */
  readonly channel?: WirelesscontrollerWtpprofileRadio2Channel[] | cdktf.IResolvable;
  /**
  * vaps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#vaps WirelesscontrollerWtpprofile#vaps}
  */
  readonly vaps?: WirelesscontrollerWtpprofileRadio2Vaps[] | cdktf.IResolvable;
}

export function wirelesscontrollerWtpprofileRadio2ToTerraform(struct?: WirelesscontrollerWtpprofileRadio2OutputReference | WirelesscontrollerWtpprofileRadio2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    airtime_fairness: cdktf.stringToTerraform(struct!.airtimeFairness),
    amsdu: cdktf.stringToTerraform(struct!.amsdu),
    ap_handoff: cdktf.stringToTerraform(struct!.apHandoff),
    ap_sniffer_addr: cdktf.stringToTerraform(struct!.apSnifferAddr),
    ap_sniffer_bufsize: cdktf.numberToTerraform(struct!.apSnifferBufsize),
    ap_sniffer_chan: cdktf.numberToTerraform(struct!.apSnifferChan),
    ap_sniffer_chan_width: cdktf.stringToTerraform(struct!.apSnifferChanWidth),
    ap_sniffer_ctl: cdktf.stringToTerraform(struct!.apSnifferCtl),
    ap_sniffer_data: cdktf.stringToTerraform(struct!.apSnifferData),
    ap_sniffer_mgmt_beacon: cdktf.stringToTerraform(struct!.apSnifferMgmtBeacon),
    ap_sniffer_mgmt_other: cdktf.stringToTerraform(struct!.apSnifferMgmtOther),
    ap_sniffer_mgmt_probe: cdktf.stringToTerraform(struct!.apSnifferMgmtProbe),
    arrp_profile: cdktf.stringToTerraform(struct!.arrpProfile),
    auto_power_high: cdktf.numberToTerraform(struct!.autoPowerHigh),
    auto_power_level: cdktf.stringToTerraform(struct!.autoPowerLevel),
    auto_power_low: cdktf.numberToTerraform(struct!.autoPowerLow),
    auto_power_target: cdktf.stringToTerraform(struct!.autoPowerTarget),
    band: cdktf.stringToTerraform(struct!.band),
    band_5g_type: cdktf.stringToTerraform(struct!.band5GType),
    bandwidth_admission_control: cdktf.stringToTerraform(struct!.bandwidthAdmissionControl),
    bandwidth_capacity: cdktf.numberToTerraform(struct!.bandwidthCapacity),
    beacon_interval: cdktf.numberToTerraform(struct!.beaconInterval),
    bss_color: cdktf.numberToTerraform(struct!.bssColor),
    bss_color_mode: cdktf.stringToTerraform(struct!.bssColorMode),
    call_admission_control: cdktf.stringToTerraform(struct!.callAdmissionControl),
    call_capacity: cdktf.numberToTerraform(struct!.callCapacity),
    channel_bonding: cdktf.stringToTerraform(struct!.channelBonding),
    channel_bonding_ext: cdktf.stringToTerraform(struct!.channelBondingExt),
    channel_utilization: cdktf.stringToTerraform(struct!.channelUtilization),
    coexistence: cdktf.stringToTerraform(struct!.coexistence),
    darrp: cdktf.stringToTerraform(struct!.darrp),
    drma: cdktf.stringToTerraform(struct!.drma),
    drma_sensitivity: cdktf.stringToTerraform(struct!.drmaSensitivity),
    dtim: cdktf.numberToTerraform(struct!.dtim),
    frag_threshold: cdktf.numberToTerraform(struct!.fragThreshold),
    frequency_handoff: cdktf.stringToTerraform(struct!.frequencyHandoff),
    iperf_protocol: cdktf.stringToTerraform(struct!.iperfProtocol),
    iperf_server_port: cdktf.numberToTerraform(struct!.iperfServerPort),
    max_clients: cdktf.numberToTerraform(struct!.maxClients),
    max_distance: cdktf.numberToTerraform(struct!.maxDistance),
    mimo_mode: cdktf.stringToTerraform(struct!.mimoMode),
    mode: cdktf.stringToTerraform(struct!.mode),
    n80211d: cdktf.stringToTerraform(struct!.n80211D),
    n80211mc: cdktf.stringToTerraform(struct!.n80211Mc),
    optional_antenna: cdktf.stringToTerraform(struct!.optionalAntenna),
    optional_antenna_gain: cdktf.stringToTerraform(struct!.optionalAntennaGain),
    power_level: cdktf.numberToTerraform(struct!.powerLevel),
    power_mode: cdktf.stringToTerraform(struct!.powerMode),
    power_value: cdktf.numberToTerraform(struct!.powerValue),
    powersave_optimize: cdktf.stringToTerraform(struct!.powersaveOptimize),
    protection_mode: cdktf.stringToTerraform(struct!.protectionMode),
    radio_id: cdktf.numberToTerraform(struct!.radioId),
    rts_threshold: cdktf.numberToTerraform(struct!.rtsThreshold),
    sam_bssid: cdktf.stringToTerraform(struct!.samBssid),
    sam_ca_certificate: cdktf.stringToTerraform(struct!.samCaCertificate),
    sam_captive_portal: cdktf.stringToTerraform(struct!.samCaptivePortal),
    sam_client_certificate: cdktf.stringToTerraform(struct!.samClientCertificate),
    sam_cwp_failure_string: cdktf.stringToTerraform(struct!.samCwpFailureString),
    sam_cwp_match_string: cdktf.stringToTerraform(struct!.samCwpMatchString),
    sam_cwp_password: cdktf.stringToTerraform(struct!.samCwpPassword),
    sam_cwp_success_string: cdktf.stringToTerraform(struct!.samCwpSuccessString),
    sam_cwp_test_url: cdktf.stringToTerraform(struct!.samCwpTestUrl),
    sam_cwp_username: cdktf.stringToTerraform(struct!.samCwpUsername),
    sam_eap_method: cdktf.stringToTerraform(struct!.samEapMethod),
    sam_password: cdktf.stringToTerraform(struct!.samPassword),
    sam_private_key: cdktf.stringToTerraform(struct!.samPrivateKey),
    sam_private_key_password: cdktf.stringToTerraform(struct!.samPrivateKeyPassword),
    sam_report_intv: cdktf.numberToTerraform(struct!.samReportIntv),
    sam_security_type: cdktf.stringToTerraform(struct!.samSecurityType),
    sam_server_fqdn: cdktf.stringToTerraform(struct!.samServerFqdn),
    sam_server_ip: cdktf.stringToTerraform(struct!.samServerIp),
    sam_server_type: cdktf.stringToTerraform(struct!.samServerType),
    sam_ssid: cdktf.stringToTerraform(struct!.samSsid),
    sam_test: cdktf.stringToTerraform(struct!.samTest),
    sam_username: cdktf.stringToTerraform(struct!.samUsername),
    short_guard_interval: cdktf.stringToTerraform(struct!.shortGuardInterval),
    spectrum_analysis: cdktf.stringToTerraform(struct!.spectrumAnalysis),
    transmit_optimize: cdktf.stringToTerraform(struct!.transmitOptimize),
    vap_all: cdktf.stringToTerraform(struct!.vapAll),
    wids_profile: cdktf.stringToTerraform(struct!.widsProfile),
    zero_wait_dfs: cdktf.stringToTerraform(struct!.zeroWaitDfs),
    channel: cdktf.listMapper(wirelesscontrollerWtpprofileRadio2ChannelToTerraform, true)(struct!.channel),
    vaps: cdktf.listMapper(wirelesscontrollerWtpprofileRadio2VapsToTerraform, true)(struct!.vaps),
  }
}


export function wirelesscontrollerWtpprofileRadio2ToHclTerraform(struct?: WirelesscontrollerWtpprofileRadio2OutputReference | WirelesscontrollerWtpprofileRadio2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    airtime_fairness: {
      value: cdktf.stringToHclTerraform(struct!.airtimeFairness),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    amsdu: {
      value: cdktf.stringToHclTerraform(struct!.amsdu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ap_handoff: {
      value: cdktf.stringToHclTerraform(struct!.apHandoff),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ap_sniffer_addr: {
      value: cdktf.stringToHclTerraform(struct!.apSnifferAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ap_sniffer_bufsize: {
      value: cdktf.numberToHclTerraform(struct!.apSnifferBufsize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ap_sniffer_chan: {
      value: cdktf.numberToHclTerraform(struct!.apSnifferChan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ap_sniffer_chan_width: {
      value: cdktf.stringToHclTerraform(struct!.apSnifferChanWidth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ap_sniffer_ctl: {
      value: cdktf.stringToHclTerraform(struct!.apSnifferCtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ap_sniffer_data: {
      value: cdktf.stringToHclTerraform(struct!.apSnifferData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ap_sniffer_mgmt_beacon: {
      value: cdktf.stringToHclTerraform(struct!.apSnifferMgmtBeacon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ap_sniffer_mgmt_other: {
      value: cdktf.stringToHclTerraform(struct!.apSnifferMgmtOther),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ap_sniffer_mgmt_probe: {
      value: cdktf.stringToHclTerraform(struct!.apSnifferMgmtProbe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arrp_profile: {
      value: cdktf.stringToHclTerraform(struct!.arrpProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
      value: cdktf.stringToHclTerraform(struct!.band),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    band_5g_type: {
      value: cdktf.stringToHclTerraform(struct!.band5GType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth_admission_control: {
      value: cdktf.stringToHclTerraform(struct!.bandwidthAdmissionControl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth_capacity: {
      value: cdktf.numberToHclTerraform(struct!.bandwidthCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    call_admission_control: {
      value: cdktf.stringToHclTerraform(struct!.callAdmissionControl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    call_capacity: {
      value: cdktf.numberToHclTerraform(struct!.callCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    channel_bonding: {
      value: cdktf.stringToHclTerraform(struct!.channelBonding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel_bonding_ext: {
      value: cdktf.stringToHclTerraform(struct!.channelBondingExt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel_utilization: {
      value: cdktf.stringToHclTerraform(struct!.channelUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    coexistence: {
      value: cdktf.stringToHclTerraform(struct!.coexistence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    darrp: {
      value: cdktf.stringToHclTerraform(struct!.darrp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drma: {
      value: cdktf.stringToHclTerraform(struct!.drma),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drma_sensitivity: {
      value: cdktf.stringToHclTerraform(struct!.drmaSensitivity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dtim: {
      value: cdktf.numberToHclTerraform(struct!.dtim),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frag_threshold: {
      value: cdktf.numberToHclTerraform(struct!.fragThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frequency_handoff: {
      value: cdktf.stringToHclTerraform(struct!.frequencyHandoff),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iperf_protocol: {
      value: cdktf.stringToHclTerraform(struct!.iperfProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iperf_server_port: {
      value: cdktf.numberToHclTerraform(struct!.iperfServerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_clients: {
      value: cdktf.numberToHclTerraform(struct!.maxClients),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_distance: {
      value: cdktf.numberToHclTerraform(struct!.maxDistance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mimo_mode: {
      value: cdktf.stringToHclTerraform(struct!.mimoMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    n80211mc: {
      value: cdktf.stringToHclTerraform(struct!.n80211Mc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional_antenna: {
      value: cdktf.stringToHclTerraform(struct!.optionalAntenna),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional_antenna_gain: {
      value: cdktf.stringToHclTerraform(struct!.optionalAntennaGain),
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
    powersave_optimize: {
      value: cdktf.stringToHclTerraform(struct!.powersaveOptimize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protection_mode: {
      value: cdktf.stringToHclTerraform(struct!.protectionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    radio_id: {
      value: cdktf.numberToHclTerraform(struct!.radioId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rts_threshold: {
      value: cdktf.numberToHclTerraform(struct!.rtsThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sam_bssid: {
      value: cdktf.stringToHclTerraform(struct!.samBssid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.samCaCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_captive_portal: {
      value: cdktf.stringToHclTerraform(struct!.samCaptivePortal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.samClientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_cwp_failure_string: {
      value: cdktf.stringToHclTerraform(struct!.samCwpFailureString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_cwp_match_string: {
      value: cdktf.stringToHclTerraform(struct!.samCwpMatchString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_cwp_password: {
      value: cdktf.stringToHclTerraform(struct!.samCwpPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_cwp_success_string: {
      value: cdktf.stringToHclTerraform(struct!.samCwpSuccessString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_cwp_test_url: {
      value: cdktf.stringToHclTerraform(struct!.samCwpTestUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_cwp_username: {
      value: cdktf.stringToHclTerraform(struct!.samCwpUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_eap_method: {
      value: cdktf.stringToHclTerraform(struct!.samEapMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_password: {
      value: cdktf.stringToHclTerraform(struct!.samPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_private_key: {
      value: cdktf.stringToHclTerraform(struct!.samPrivateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_private_key_password: {
      value: cdktf.stringToHclTerraform(struct!.samPrivateKeyPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_report_intv: {
      value: cdktf.numberToHclTerraform(struct!.samReportIntv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sam_security_type: {
      value: cdktf.stringToHclTerraform(struct!.samSecurityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_server_fqdn: {
      value: cdktf.stringToHclTerraform(struct!.samServerFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_server_ip: {
      value: cdktf.stringToHclTerraform(struct!.samServerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_server_type: {
      value: cdktf.stringToHclTerraform(struct!.samServerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_ssid: {
      value: cdktf.stringToHclTerraform(struct!.samSsid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_test: {
      value: cdktf.stringToHclTerraform(struct!.samTest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_username: {
      value: cdktf.stringToHclTerraform(struct!.samUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    short_guard_interval: {
      value: cdktf.stringToHclTerraform(struct!.shortGuardInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spectrum_analysis: {
      value: cdktf.stringToHclTerraform(struct!.spectrumAnalysis),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transmit_optimize: {
      value: cdktf.stringToHclTerraform(struct!.transmitOptimize),
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
    wids_profile: {
      value: cdktf.stringToHclTerraform(struct!.widsProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zero_wait_dfs: {
      value: cdktf.stringToHclTerraform(struct!.zeroWaitDfs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel: {
      value: cdktf.listMapperHcl(wirelesscontrollerWtpprofileRadio2ChannelToHclTerraform, true)(struct!.channel),
      isBlock: true,
      type: "set",
      storageClassType: "WirelesscontrollerWtpprofileRadio2ChannelList",
    },
    vaps: {
      value: cdktf.listMapperHcl(wirelesscontrollerWtpprofileRadio2VapsToHclTerraform, true)(struct!.vaps),
      isBlock: true,
      type: "set",
      storageClassType: "WirelesscontrollerWtpprofileRadio2VapsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerWtpprofileRadio2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WirelesscontrollerWtpprofileRadio2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._airtimeFairness !== undefined) {
      hasAnyValues = true;
      internalValueResult.airtimeFairness = this._airtimeFairness;
    }
    if (this._amsdu !== undefined) {
      hasAnyValues = true;
      internalValueResult.amsdu = this._amsdu;
    }
    if (this._apHandoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.apHandoff = this._apHandoff;
    }
    if (this._apSnifferAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.apSnifferAddr = this._apSnifferAddr;
    }
    if (this._apSnifferBufsize !== undefined) {
      hasAnyValues = true;
      internalValueResult.apSnifferBufsize = this._apSnifferBufsize;
    }
    if (this._apSnifferChan !== undefined) {
      hasAnyValues = true;
      internalValueResult.apSnifferChan = this._apSnifferChan;
    }
    if (this._apSnifferChanWidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.apSnifferChanWidth = this._apSnifferChanWidth;
    }
    if (this._apSnifferCtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.apSnifferCtl = this._apSnifferCtl;
    }
    if (this._apSnifferData !== undefined) {
      hasAnyValues = true;
      internalValueResult.apSnifferData = this._apSnifferData;
    }
    if (this._apSnifferMgmtBeacon !== undefined) {
      hasAnyValues = true;
      internalValueResult.apSnifferMgmtBeacon = this._apSnifferMgmtBeacon;
    }
    if (this._apSnifferMgmtOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.apSnifferMgmtOther = this._apSnifferMgmtOther;
    }
    if (this._apSnifferMgmtProbe !== undefined) {
      hasAnyValues = true;
      internalValueResult.apSnifferMgmtProbe = this._apSnifferMgmtProbe;
    }
    if (this._arrpProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrpProfile = this._arrpProfile;
    }
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
    if (this._band5GType !== undefined) {
      hasAnyValues = true;
      internalValueResult.band5GType = this._band5GType;
    }
    if (this._bandwidthAdmissionControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthAdmissionControl = this._bandwidthAdmissionControl;
    }
    if (this._bandwidthCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthCapacity = this._bandwidthCapacity;
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
    if (this._callAdmissionControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.callAdmissionControl = this._callAdmissionControl;
    }
    if (this._callCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.callCapacity = this._callCapacity;
    }
    if (this._channelBonding !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelBonding = this._channelBonding;
    }
    if (this._channelBondingExt !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelBondingExt = this._channelBondingExt;
    }
    if (this._channelUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelUtilization = this._channelUtilization;
    }
    if (this._coexistence !== undefined) {
      hasAnyValues = true;
      internalValueResult.coexistence = this._coexistence;
    }
    if (this._darrp !== undefined) {
      hasAnyValues = true;
      internalValueResult.darrp = this._darrp;
    }
    if (this._drma !== undefined) {
      hasAnyValues = true;
      internalValueResult.drma = this._drma;
    }
    if (this._drmaSensitivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.drmaSensitivity = this._drmaSensitivity;
    }
    if (this._dtim !== undefined) {
      hasAnyValues = true;
      internalValueResult.dtim = this._dtim;
    }
    if (this._fragThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragThreshold = this._fragThreshold;
    }
    if (this._frequencyHandoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequencyHandoff = this._frequencyHandoff;
    }
    if (this._iperfProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.iperfProtocol = this._iperfProtocol;
    }
    if (this._iperfServerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.iperfServerPort = this._iperfServerPort;
    }
    if (this._maxClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxClients = this._maxClients;
    }
    if (this._maxDistance !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDistance = this._maxDistance;
    }
    if (this._mimoMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mimoMode = this._mimoMode;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._n80211D !== undefined) {
      hasAnyValues = true;
      internalValueResult.n80211D = this._n80211D;
    }
    if (this._n80211Mc !== undefined) {
      hasAnyValues = true;
      internalValueResult.n80211Mc = this._n80211Mc;
    }
    if (this._optionalAntenna !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionalAntenna = this._optionalAntenna;
    }
    if (this._optionalAntennaGain !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionalAntennaGain = this._optionalAntennaGain;
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
    if (this._powersaveOptimize !== undefined) {
      hasAnyValues = true;
      internalValueResult.powersaveOptimize = this._powersaveOptimize;
    }
    if (this._protectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectionMode = this._protectionMode;
    }
    if (this._radioId !== undefined) {
      hasAnyValues = true;
      internalValueResult.radioId = this._radioId;
    }
    if (this._rtsThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtsThreshold = this._rtsThreshold;
    }
    if (this._samBssid !== undefined) {
      hasAnyValues = true;
      internalValueResult.samBssid = this._samBssid;
    }
    if (this._samCaCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.samCaCertificate = this._samCaCertificate;
    }
    if (this._samCaptivePortal !== undefined) {
      hasAnyValues = true;
      internalValueResult.samCaptivePortal = this._samCaptivePortal;
    }
    if (this._samClientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.samClientCertificate = this._samClientCertificate;
    }
    if (this._samCwpFailureString !== undefined) {
      hasAnyValues = true;
      internalValueResult.samCwpFailureString = this._samCwpFailureString;
    }
    if (this._samCwpMatchString !== undefined) {
      hasAnyValues = true;
      internalValueResult.samCwpMatchString = this._samCwpMatchString;
    }
    if (this._samCwpPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.samCwpPassword = this._samCwpPassword;
    }
    if (this._samCwpSuccessString !== undefined) {
      hasAnyValues = true;
      internalValueResult.samCwpSuccessString = this._samCwpSuccessString;
    }
    if (this._samCwpTestUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.samCwpTestUrl = this._samCwpTestUrl;
    }
    if (this._samCwpUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.samCwpUsername = this._samCwpUsername;
    }
    if (this._samEapMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.samEapMethod = this._samEapMethod;
    }
    if (this._samPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.samPassword = this._samPassword;
    }
    if (this._samPrivateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.samPrivateKey = this._samPrivateKey;
    }
    if (this._samPrivateKeyPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.samPrivateKeyPassword = this._samPrivateKeyPassword;
    }
    if (this._samReportIntv !== undefined) {
      hasAnyValues = true;
      internalValueResult.samReportIntv = this._samReportIntv;
    }
    if (this._samSecurityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.samSecurityType = this._samSecurityType;
    }
    if (this._samServerFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.samServerFqdn = this._samServerFqdn;
    }
    if (this._samServerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.samServerIp = this._samServerIp;
    }
    if (this._samServerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.samServerType = this._samServerType;
    }
    if (this._samSsid !== undefined) {
      hasAnyValues = true;
      internalValueResult.samSsid = this._samSsid;
    }
    if (this._samTest !== undefined) {
      hasAnyValues = true;
      internalValueResult.samTest = this._samTest;
    }
    if (this._samUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.samUsername = this._samUsername;
    }
    if (this._shortGuardInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.shortGuardInterval = this._shortGuardInterval;
    }
    if (this._spectrumAnalysis !== undefined) {
      hasAnyValues = true;
      internalValueResult.spectrumAnalysis = this._spectrumAnalysis;
    }
    if (this._transmitOptimize !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitOptimize = this._transmitOptimize;
    }
    if (this._vapAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.vapAll = this._vapAll;
    }
    if (this._widsProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.widsProfile = this._widsProfile;
    }
    if (this._zeroWaitDfs !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeroWaitDfs = this._zeroWaitDfs;
    }
    if (this._channel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel?.internalValue;
    }
    if (this._vaps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaps = this._vaps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerWtpprofileRadio2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._airtimeFairness = undefined;
      this._amsdu = undefined;
      this._apHandoff = undefined;
      this._apSnifferAddr = undefined;
      this._apSnifferBufsize = undefined;
      this._apSnifferChan = undefined;
      this._apSnifferChanWidth = undefined;
      this._apSnifferCtl = undefined;
      this._apSnifferData = undefined;
      this._apSnifferMgmtBeacon = undefined;
      this._apSnifferMgmtOther = undefined;
      this._apSnifferMgmtProbe = undefined;
      this._arrpProfile = undefined;
      this._autoPowerHigh = undefined;
      this._autoPowerLevel = undefined;
      this._autoPowerLow = undefined;
      this._autoPowerTarget = undefined;
      this._band = undefined;
      this._band5GType = undefined;
      this._bandwidthAdmissionControl = undefined;
      this._bandwidthCapacity = undefined;
      this._beaconInterval = undefined;
      this._bssColor = undefined;
      this._bssColorMode = undefined;
      this._callAdmissionControl = undefined;
      this._callCapacity = undefined;
      this._channelBonding = undefined;
      this._channelBondingExt = undefined;
      this._channelUtilization = undefined;
      this._coexistence = undefined;
      this._darrp = undefined;
      this._drma = undefined;
      this._drmaSensitivity = undefined;
      this._dtim = undefined;
      this._fragThreshold = undefined;
      this._frequencyHandoff = undefined;
      this._iperfProtocol = undefined;
      this._iperfServerPort = undefined;
      this._maxClients = undefined;
      this._maxDistance = undefined;
      this._mimoMode = undefined;
      this._mode = undefined;
      this._n80211D = undefined;
      this._n80211Mc = undefined;
      this._optionalAntenna = undefined;
      this._optionalAntennaGain = undefined;
      this._powerLevel = undefined;
      this._powerMode = undefined;
      this._powerValue = undefined;
      this._powersaveOptimize = undefined;
      this._protectionMode = undefined;
      this._radioId = undefined;
      this._rtsThreshold = undefined;
      this._samBssid = undefined;
      this._samCaCertificate = undefined;
      this._samCaptivePortal = undefined;
      this._samClientCertificate = undefined;
      this._samCwpFailureString = undefined;
      this._samCwpMatchString = undefined;
      this._samCwpPassword = undefined;
      this._samCwpSuccessString = undefined;
      this._samCwpTestUrl = undefined;
      this._samCwpUsername = undefined;
      this._samEapMethod = undefined;
      this._samPassword = undefined;
      this._samPrivateKey = undefined;
      this._samPrivateKeyPassword = undefined;
      this._samReportIntv = undefined;
      this._samSecurityType = undefined;
      this._samServerFqdn = undefined;
      this._samServerIp = undefined;
      this._samServerType = undefined;
      this._samSsid = undefined;
      this._samTest = undefined;
      this._samUsername = undefined;
      this._shortGuardInterval = undefined;
      this._spectrumAnalysis = undefined;
      this._transmitOptimize = undefined;
      this._vapAll = undefined;
      this._widsProfile = undefined;
      this._zeroWaitDfs = undefined;
      this._channel.internalValue = undefined;
      this._vaps.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._airtimeFairness = value.airtimeFairness;
      this._amsdu = value.amsdu;
      this._apHandoff = value.apHandoff;
      this._apSnifferAddr = value.apSnifferAddr;
      this._apSnifferBufsize = value.apSnifferBufsize;
      this._apSnifferChan = value.apSnifferChan;
      this._apSnifferChanWidth = value.apSnifferChanWidth;
      this._apSnifferCtl = value.apSnifferCtl;
      this._apSnifferData = value.apSnifferData;
      this._apSnifferMgmtBeacon = value.apSnifferMgmtBeacon;
      this._apSnifferMgmtOther = value.apSnifferMgmtOther;
      this._apSnifferMgmtProbe = value.apSnifferMgmtProbe;
      this._arrpProfile = value.arrpProfile;
      this._autoPowerHigh = value.autoPowerHigh;
      this._autoPowerLevel = value.autoPowerLevel;
      this._autoPowerLow = value.autoPowerLow;
      this._autoPowerTarget = value.autoPowerTarget;
      this._band = value.band;
      this._band5GType = value.band5GType;
      this._bandwidthAdmissionControl = value.bandwidthAdmissionControl;
      this._bandwidthCapacity = value.bandwidthCapacity;
      this._beaconInterval = value.beaconInterval;
      this._bssColor = value.bssColor;
      this._bssColorMode = value.bssColorMode;
      this._callAdmissionControl = value.callAdmissionControl;
      this._callCapacity = value.callCapacity;
      this._channelBonding = value.channelBonding;
      this._channelBondingExt = value.channelBondingExt;
      this._channelUtilization = value.channelUtilization;
      this._coexistence = value.coexistence;
      this._darrp = value.darrp;
      this._drma = value.drma;
      this._drmaSensitivity = value.drmaSensitivity;
      this._dtim = value.dtim;
      this._fragThreshold = value.fragThreshold;
      this._frequencyHandoff = value.frequencyHandoff;
      this._iperfProtocol = value.iperfProtocol;
      this._iperfServerPort = value.iperfServerPort;
      this._maxClients = value.maxClients;
      this._maxDistance = value.maxDistance;
      this._mimoMode = value.mimoMode;
      this._mode = value.mode;
      this._n80211D = value.n80211D;
      this._n80211Mc = value.n80211Mc;
      this._optionalAntenna = value.optionalAntenna;
      this._optionalAntennaGain = value.optionalAntennaGain;
      this._powerLevel = value.powerLevel;
      this._powerMode = value.powerMode;
      this._powerValue = value.powerValue;
      this._powersaveOptimize = value.powersaveOptimize;
      this._protectionMode = value.protectionMode;
      this._radioId = value.radioId;
      this._rtsThreshold = value.rtsThreshold;
      this._samBssid = value.samBssid;
      this._samCaCertificate = value.samCaCertificate;
      this._samCaptivePortal = value.samCaptivePortal;
      this._samClientCertificate = value.samClientCertificate;
      this._samCwpFailureString = value.samCwpFailureString;
      this._samCwpMatchString = value.samCwpMatchString;
      this._samCwpPassword = value.samCwpPassword;
      this._samCwpSuccessString = value.samCwpSuccessString;
      this._samCwpTestUrl = value.samCwpTestUrl;
      this._samCwpUsername = value.samCwpUsername;
      this._samEapMethod = value.samEapMethod;
      this._samPassword = value.samPassword;
      this._samPrivateKey = value.samPrivateKey;
      this._samPrivateKeyPassword = value.samPrivateKeyPassword;
      this._samReportIntv = value.samReportIntv;
      this._samSecurityType = value.samSecurityType;
      this._samServerFqdn = value.samServerFqdn;
      this._samServerIp = value.samServerIp;
      this._samServerType = value.samServerType;
      this._samSsid = value.samSsid;
      this._samTest = value.samTest;
      this._samUsername = value.samUsername;
      this._shortGuardInterval = value.shortGuardInterval;
      this._spectrumAnalysis = value.spectrumAnalysis;
      this._transmitOptimize = value.transmitOptimize;
      this._vapAll = value.vapAll;
      this._widsProfile = value.widsProfile;
      this._zeroWaitDfs = value.zeroWaitDfs;
      this._channel.internalValue = value.channel;
      this._vaps.internalValue = value.vaps;
    }
  }

  // airtime_fairness - computed: true, optional: true, required: false
  private _airtimeFairness?: string; 
  public get airtimeFairness() {
    return this.getStringAttribute('airtime_fairness');
  }
  public set airtimeFairness(value: string) {
    this._airtimeFairness = value;
  }
  public resetAirtimeFairness() {
    this._airtimeFairness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get airtimeFairnessInput() {
    return this._airtimeFairness;
  }

  // amsdu - computed: true, optional: true, required: false
  private _amsdu?: string; 
  public get amsdu() {
    return this.getStringAttribute('amsdu');
  }
  public set amsdu(value: string) {
    this._amsdu = value;
  }
  public resetAmsdu() {
    this._amsdu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amsduInput() {
    return this._amsdu;
  }

  // ap_handoff - computed: false, optional: true, required: false
  private _apHandoff?: string; 
  public get apHandoff() {
    return this.getStringAttribute('ap_handoff');
  }
  public set apHandoff(value: string) {
    this._apHandoff = value;
  }
  public resetApHandoff() {
    this._apHandoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apHandoffInput() {
    return this._apHandoff;
  }

  // ap_sniffer_addr - computed: true, optional: true, required: false
  private _apSnifferAddr?: string; 
  public get apSnifferAddr() {
    return this.getStringAttribute('ap_sniffer_addr');
  }
  public set apSnifferAddr(value: string) {
    this._apSnifferAddr = value;
  }
  public resetApSnifferAddr() {
    this._apSnifferAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferAddrInput() {
    return this._apSnifferAddr;
  }

  // ap_sniffer_bufsize - computed: true, optional: true, required: false
  private _apSnifferBufsize?: number; 
  public get apSnifferBufsize() {
    return this.getNumberAttribute('ap_sniffer_bufsize');
  }
  public set apSnifferBufsize(value: number) {
    this._apSnifferBufsize = value;
  }
  public resetApSnifferBufsize() {
    this._apSnifferBufsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferBufsizeInput() {
    return this._apSnifferBufsize;
  }

  // ap_sniffer_chan - computed: true, optional: true, required: false
  private _apSnifferChan?: number; 
  public get apSnifferChan() {
    return this.getNumberAttribute('ap_sniffer_chan');
  }
  public set apSnifferChan(value: number) {
    this._apSnifferChan = value;
  }
  public resetApSnifferChan() {
    this._apSnifferChan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferChanInput() {
    return this._apSnifferChan;
  }

  // ap_sniffer_chan_width - computed: true, optional: true, required: false
  private _apSnifferChanWidth?: string; 
  public get apSnifferChanWidth() {
    return this.getStringAttribute('ap_sniffer_chan_width');
  }
  public set apSnifferChanWidth(value: string) {
    this._apSnifferChanWidth = value;
  }
  public resetApSnifferChanWidth() {
    this._apSnifferChanWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferChanWidthInput() {
    return this._apSnifferChanWidth;
  }

  // ap_sniffer_ctl - computed: true, optional: true, required: false
  private _apSnifferCtl?: string; 
  public get apSnifferCtl() {
    return this.getStringAttribute('ap_sniffer_ctl');
  }
  public set apSnifferCtl(value: string) {
    this._apSnifferCtl = value;
  }
  public resetApSnifferCtl() {
    this._apSnifferCtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferCtlInput() {
    return this._apSnifferCtl;
  }

  // ap_sniffer_data - computed: true, optional: true, required: false
  private _apSnifferData?: string; 
  public get apSnifferData() {
    return this.getStringAttribute('ap_sniffer_data');
  }
  public set apSnifferData(value: string) {
    this._apSnifferData = value;
  }
  public resetApSnifferData() {
    this._apSnifferData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferDataInput() {
    return this._apSnifferData;
  }

  // ap_sniffer_mgmt_beacon - computed: true, optional: true, required: false
  private _apSnifferMgmtBeacon?: string; 
  public get apSnifferMgmtBeacon() {
    return this.getStringAttribute('ap_sniffer_mgmt_beacon');
  }
  public set apSnifferMgmtBeacon(value: string) {
    this._apSnifferMgmtBeacon = value;
  }
  public resetApSnifferMgmtBeacon() {
    this._apSnifferMgmtBeacon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferMgmtBeaconInput() {
    return this._apSnifferMgmtBeacon;
  }

  // ap_sniffer_mgmt_other - computed: true, optional: true, required: false
  private _apSnifferMgmtOther?: string; 
  public get apSnifferMgmtOther() {
    return this.getStringAttribute('ap_sniffer_mgmt_other');
  }
  public set apSnifferMgmtOther(value: string) {
    this._apSnifferMgmtOther = value;
  }
  public resetApSnifferMgmtOther() {
    this._apSnifferMgmtOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferMgmtOtherInput() {
    return this._apSnifferMgmtOther;
  }

  // ap_sniffer_mgmt_probe - computed: true, optional: true, required: false
  private _apSnifferMgmtProbe?: string; 
  public get apSnifferMgmtProbe() {
    return this.getStringAttribute('ap_sniffer_mgmt_probe');
  }
  public set apSnifferMgmtProbe(value: string) {
    this._apSnifferMgmtProbe = value;
  }
  public resetApSnifferMgmtProbe() {
    this._apSnifferMgmtProbe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferMgmtProbeInput() {
    return this._apSnifferMgmtProbe;
  }

  // arrp_profile - computed: false, optional: true, required: false
  private _arrpProfile?: string; 
  public get arrpProfile() {
    return this.getStringAttribute('arrp_profile');
  }
  public set arrpProfile(value: string) {
    this._arrpProfile = value;
  }
  public resetArrpProfile() {
    this._arrpProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrpProfileInput() {
    return this._arrpProfile;
  }

  // auto_power_high - computed: true, optional: true, required: false
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

  // auto_power_level - computed: true, optional: true, required: false
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

  // auto_power_low - computed: true, optional: true, required: false
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

  // band - computed: false, optional: true, required: false
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

  // band_5g_type - computed: true, optional: true, required: false
  private _band5GType?: string; 
  public get band5GType() {
    return this.getStringAttribute('band_5g_type');
  }
  public set band5GType(value: string) {
    this._band5GType = value;
  }
  public resetBand5GType() {
    this._band5GType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get band5GTypeInput() {
    return this._band5GType;
  }

  // bandwidth_admission_control - computed: true, optional: true, required: false
  private _bandwidthAdmissionControl?: string; 
  public get bandwidthAdmissionControl() {
    return this.getStringAttribute('bandwidth_admission_control');
  }
  public set bandwidthAdmissionControl(value: string) {
    this._bandwidthAdmissionControl = value;
  }
  public resetBandwidthAdmissionControl() {
    this._bandwidthAdmissionControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthAdmissionControlInput() {
    return this._bandwidthAdmissionControl;
  }

  // bandwidth_capacity - computed: true, optional: true, required: false
  private _bandwidthCapacity?: number; 
  public get bandwidthCapacity() {
    return this.getNumberAttribute('bandwidth_capacity');
  }
  public set bandwidthCapacity(value: number) {
    this._bandwidthCapacity = value;
  }
  public resetBandwidthCapacity() {
    this._bandwidthCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthCapacityInput() {
    return this._bandwidthCapacity;
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

  // call_admission_control - computed: true, optional: true, required: false
  private _callAdmissionControl?: string; 
  public get callAdmissionControl() {
    return this.getStringAttribute('call_admission_control');
  }
  public set callAdmissionControl(value: string) {
    this._callAdmissionControl = value;
  }
  public resetCallAdmissionControl() {
    this._callAdmissionControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callAdmissionControlInput() {
    return this._callAdmissionControl;
  }

  // call_capacity - computed: true, optional: true, required: false
  private _callCapacity?: number; 
  public get callCapacity() {
    return this.getNumberAttribute('call_capacity');
  }
  public set callCapacity(value: number) {
    this._callCapacity = value;
  }
  public resetCallCapacity() {
    this._callCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callCapacityInput() {
    return this._callCapacity;
  }

  // channel_bonding - computed: true, optional: true, required: false
  private _channelBonding?: string; 
  public get channelBonding() {
    return this.getStringAttribute('channel_bonding');
  }
  public set channelBonding(value: string) {
    this._channelBonding = value;
  }
  public resetChannelBonding() {
    this._channelBonding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelBondingInput() {
    return this._channelBonding;
  }

  // channel_bonding_ext - computed: true, optional: true, required: false
  private _channelBondingExt?: string; 
  public get channelBondingExt() {
    return this.getStringAttribute('channel_bonding_ext');
  }
  public set channelBondingExt(value: string) {
    this._channelBondingExt = value;
  }
  public resetChannelBondingExt() {
    this._channelBondingExt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelBondingExtInput() {
    return this._channelBondingExt;
  }

  // channel_utilization - computed: true, optional: true, required: false
  private _channelUtilization?: string; 
  public get channelUtilization() {
    return this.getStringAttribute('channel_utilization');
  }
  public set channelUtilization(value: string) {
    this._channelUtilization = value;
  }
  public resetChannelUtilization() {
    this._channelUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelUtilizationInput() {
    return this._channelUtilization;
  }

  // coexistence - computed: true, optional: true, required: false
  private _coexistence?: string; 
  public get coexistence() {
    return this.getStringAttribute('coexistence');
  }
  public set coexistence(value: string) {
    this._coexistence = value;
  }
  public resetCoexistence() {
    this._coexistence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coexistenceInput() {
    return this._coexistence;
  }

  // darrp - computed: true, optional: true, required: false
  private _darrp?: string; 
  public get darrp() {
    return this.getStringAttribute('darrp');
  }
  public set darrp(value: string) {
    this._darrp = value;
  }
  public resetDarrp() {
    this._darrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darrpInput() {
    return this._darrp;
  }

  // drma - computed: true, optional: true, required: false
  private _drma?: string; 
  public get drma() {
    return this.getStringAttribute('drma');
  }
  public set drma(value: string) {
    this._drma = value;
  }
  public resetDrma() {
    this._drma = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drmaInput() {
    return this._drma;
  }

  // drma_sensitivity - computed: true, optional: true, required: false
  private _drmaSensitivity?: string; 
  public get drmaSensitivity() {
    return this.getStringAttribute('drma_sensitivity');
  }
  public set drmaSensitivity(value: string) {
    this._drmaSensitivity = value;
  }
  public resetDrmaSensitivity() {
    this._drmaSensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drmaSensitivityInput() {
    return this._drmaSensitivity;
  }

  // dtim - computed: true, optional: true, required: false
  private _dtim?: number; 
  public get dtim() {
    return this.getNumberAttribute('dtim');
  }
  public set dtim(value: number) {
    this._dtim = value;
  }
  public resetDtim() {
    this._dtim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtimInput() {
    return this._dtim;
  }

  // frag_threshold - computed: true, optional: true, required: false
  private _fragThreshold?: number; 
  public get fragThreshold() {
    return this.getNumberAttribute('frag_threshold');
  }
  public set fragThreshold(value: number) {
    this._fragThreshold = value;
  }
  public resetFragThreshold() {
    this._fragThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragThresholdInput() {
    return this._fragThreshold;
  }

  // frequency_handoff - computed: false, optional: true, required: false
  private _frequencyHandoff?: string; 
  public get frequencyHandoff() {
    return this.getStringAttribute('frequency_handoff');
  }
  public set frequencyHandoff(value: string) {
    this._frequencyHandoff = value;
  }
  public resetFrequencyHandoff() {
    this._frequencyHandoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyHandoffInput() {
    return this._frequencyHandoff;
  }

  // iperf_protocol - computed: true, optional: true, required: false
  private _iperfProtocol?: string; 
  public get iperfProtocol() {
    return this.getStringAttribute('iperf_protocol');
  }
  public set iperfProtocol(value: string) {
    this._iperfProtocol = value;
  }
  public resetIperfProtocol() {
    this._iperfProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iperfProtocolInput() {
    return this._iperfProtocol;
  }

  // iperf_server_port - computed: true, optional: true, required: false
  private _iperfServerPort?: number; 
  public get iperfServerPort() {
    return this.getNumberAttribute('iperf_server_port');
  }
  public set iperfServerPort(value: number) {
    this._iperfServerPort = value;
  }
  public resetIperfServerPort() {
    this._iperfServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iperfServerPortInput() {
    return this._iperfServerPort;
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

  // max_distance - computed: false, optional: true, required: false
  private _maxDistance?: number; 
  public get maxDistance() {
    return this.getNumberAttribute('max_distance');
  }
  public set maxDistance(value: number) {
    this._maxDistance = value;
  }
  public resetMaxDistance() {
    this._maxDistance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDistanceInput() {
    return this._maxDistance;
  }

  // mimo_mode - computed: true, optional: true, required: false
  private _mimoMode?: string; 
  public get mimoMode() {
    return this.getStringAttribute('mimo_mode');
  }
  public set mimoMode(value: string) {
    this._mimoMode = value;
  }
  public resetMimoMode() {
    this._mimoMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mimoModeInput() {
    return this._mimoMode;
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

  // n80211mc - computed: true, optional: true, required: false
  private _n80211Mc?: string; 
  public get n80211Mc() {
    return this.getStringAttribute('n80211mc');
  }
  public set n80211Mc(value: string) {
    this._n80211Mc = value;
  }
  public resetN80211Mc() {
    this._n80211Mc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get n80211McInput() {
    return this._n80211Mc;
  }

  // optional_antenna - computed: true, optional: true, required: false
  private _optionalAntenna?: string; 
  public get optionalAntenna() {
    return this.getStringAttribute('optional_antenna');
  }
  public set optionalAntenna(value: string) {
    this._optionalAntenna = value;
  }
  public resetOptionalAntenna() {
    this._optionalAntenna = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalAntennaInput() {
    return this._optionalAntenna;
  }

  // optional_antenna_gain - computed: true, optional: true, required: false
  private _optionalAntennaGain?: string; 
  public get optionalAntennaGain() {
    return this.getStringAttribute('optional_antenna_gain');
  }
  public set optionalAntennaGain(value: string) {
    this._optionalAntennaGain = value;
  }
  public resetOptionalAntennaGain() {
    this._optionalAntennaGain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalAntennaGainInput() {
    return this._optionalAntennaGain;
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

  // powersave_optimize - computed: false, optional: true, required: false
  private _powersaveOptimize?: string; 
  public get powersaveOptimize() {
    return this.getStringAttribute('powersave_optimize');
  }
  public set powersaveOptimize(value: string) {
    this._powersaveOptimize = value;
  }
  public resetPowersaveOptimize() {
    this._powersaveOptimize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powersaveOptimizeInput() {
    return this._powersaveOptimize;
  }

  // protection_mode - computed: true, optional: true, required: false
  private _protectionMode?: string; 
  public get protectionMode() {
    return this.getStringAttribute('protection_mode');
  }
  public set protectionMode(value: string) {
    this._protectionMode = value;
  }
  public resetProtectionMode() {
    this._protectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionModeInput() {
    return this._protectionMode;
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

  // rts_threshold - computed: true, optional: true, required: false
  private _rtsThreshold?: number; 
  public get rtsThreshold() {
    return this.getNumberAttribute('rts_threshold');
  }
  public set rtsThreshold(value: number) {
    this._rtsThreshold = value;
  }
  public resetRtsThreshold() {
    this._rtsThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtsThresholdInput() {
    return this._rtsThreshold;
  }

  // sam_bssid - computed: true, optional: true, required: false
  private _samBssid?: string; 
  public get samBssid() {
    return this.getStringAttribute('sam_bssid');
  }
  public set samBssid(value: string) {
    this._samBssid = value;
  }
  public resetSamBssid() {
    this._samBssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samBssidInput() {
    return this._samBssid;
  }

  // sam_ca_certificate - computed: false, optional: true, required: false
  private _samCaCertificate?: string; 
  public get samCaCertificate() {
    return this.getStringAttribute('sam_ca_certificate');
  }
  public set samCaCertificate(value: string) {
    this._samCaCertificate = value;
  }
  public resetSamCaCertificate() {
    this._samCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samCaCertificateInput() {
    return this._samCaCertificate;
  }

  // sam_captive_portal - computed: true, optional: true, required: false
  private _samCaptivePortal?: string; 
  public get samCaptivePortal() {
    return this.getStringAttribute('sam_captive_portal');
  }
  public set samCaptivePortal(value: string) {
    this._samCaptivePortal = value;
  }
  public resetSamCaptivePortal() {
    this._samCaptivePortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samCaptivePortalInput() {
    return this._samCaptivePortal;
  }

  // sam_client_certificate - computed: false, optional: true, required: false
  private _samClientCertificate?: string; 
  public get samClientCertificate() {
    return this.getStringAttribute('sam_client_certificate');
  }
  public set samClientCertificate(value: string) {
    this._samClientCertificate = value;
  }
  public resetSamClientCertificate() {
    this._samClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samClientCertificateInput() {
    return this._samClientCertificate;
  }

  // sam_cwp_failure_string - computed: false, optional: true, required: false
  private _samCwpFailureString?: string; 
  public get samCwpFailureString() {
    return this.getStringAttribute('sam_cwp_failure_string');
  }
  public set samCwpFailureString(value: string) {
    this._samCwpFailureString = value;
  }
  public resetSamCwpFailureString() {
    this._samCwpFailureString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samCwpFailureStringInput() {
    return this._samCwpFailureString;
  }

  // sam_cwp_match_string - computed: false, optional: true, required: false
  private _samCwpMatchString?: string; 
  public get samCwpMatchString() {
    return this.getStringAttribute('sam_cwp_match_string');
  }
  public set samCwpMatchString(value: string) {
    this._samCwpMatchString = value;
  }
  public resetSamCwpMatchString() {
    this._samCwpMatchString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samCwpMatchStringInput() {
    return this._samCwpMatchString;
  }

  // sam_cwp_password - computed: false, optional: true, required: false
  private _samCwpPassword?: string; 
  public get samCwpPassword() {
    return this.getStringAttribute('sam_cwp_password');
  }
  public set samCwpPassword(value: string) {
    this._samCwpPassword = value;
  }
  public resetSamCwpPassword() {
    this._samCwpPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samCwpPasswordInput() {
    return this._samCwpPassword;
  }

  // sam_cwp_success_string - computed: false, optional: true, required: false
  private _samCwpSuccessString?: string; 
  public get samCwpSuccessString() {
    return this.getStringAttribute('sam_cwp_success_string');
  }
  public set samCwpSuccessString(value: string) {
    this._samCwpSuccessString = value;
  }
  public resetSamCwpSuccessString() {
    this._samCwpSuccessString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samCwpSuccessStringInput() {
    return this._samCwpSuccessString;
  }

  // sam_cwp_test_url - computed: false, optional: true, required: false
  private _samCwpTestUrl?: string; 
  public get samCwpTestUrl() {
    return this.getStringAttribute('sam_cwp_test_url');
  }
  public set samCwpTestUrl(value: string) {
    this._samCwpTestUrl = value;
  }
  public resetSamCwpTestUrl() {
    this._samCwpTestUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samCwpTestUrlInput() {
    return this._samCwpTestUrl;
  }

  // sam_cwp_username - computed: false, optional: true, required: false
  private _samCwpUsername?: string; 
  public get samCwpUsername() {
    return this.getStringAttribute('sam_cwp_username');
  }
  public set samCwpUsername(value: string) {
    this._samCwpUsername = value;
  }
  public resetSamCwpUsername() {
    this._samCwpUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samCwpUsernameInput() {
    return this._samCwpUsername;
  }

  // sam_eap_method - computed: true, optional: true, required: false
  private _samEapMethod?: string; 
  public get samEapMethod() {
    return this.getStringAttribute('sam_eap_method');
  }
  public set samEapMethod(value: string) {
    this._samEapMethod = value;
  }
  public resetSamEapMethod() {
    this._samEapMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samEapMethodInput() {
    return this._samEapMethod;
  }

  // sam_password - computed: false, optional: true, required: false
  private _samPassword?: string; 
  public get samPassword() {
    return this.getStringAttribute('sam_password');
  }
  public set samPassword(value: string) {
    this._samPassword = value;
  }
  public resetSamPassword() {
    this._samPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samPasswordInput() {
    return this._samPassword;
  }

  // sam_private_key - computed: false, optional: true, required: false
  private _samPrivateKey?: string; 
  public get samPrivateKey() {
    return this.getStringAttribute('sam_private_key');
  }
  public set samPrivateKey(value: string) {
    this._samPrivateKey = value;
  }
  public resetSamPrivateKey() {
    this._samPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samPrivateKeyInput() {
    return this._samPrivateKey;
  }

  // sam_private_key_password - computed: false, optional: true, required: false
  private _samPrivateKeyPassword?: string; 
  public get samPrivateKeyPassword() {
    return this.getStringAttribute('sam_private_key_password');
  }
  public set samPrivateKeyPassword(value: string) {
    this._samPrivateKeyPassword = value;
  }
  public resetSamPrivateKeyPassword() {
    this._samPrivateKeyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samPrivateKeyPasswordInput() {
    return this._samPrivateKeyPassword;
  }

  // sam_report_intv - computed: false, optional: true, required: false
  private _samReportIntv?: number; 
  public get samReportIntv() {
    return this.getNumberAttribute('sam_report_intv');
  }
  public set samReportIntv(value: number) {
    this._samReportIntv = value;
  }
  public resetSamReportIntv() {
    this._samReportIntv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samReportIntvInput() {
    return this._samReportIntv;
  }

  // sam_security_type - computed: true, optional: true, required: false
  private _samSecurityType?: string; 
  public get samSecurityType() {
    return this.getStringAttribute('sam_security_type');
  }
  public set samSecurityType(value: string) {
    this._samSecurityType = value;
  }
  public resetSamSecurityType() {
    this._samSecurityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samSecurityTypeInput() {
    return this._samSecurityType;
  }

  // sam_server_fqdn - computed: false, optional: true, required: false
  private _samServerFqdn?: string; 
  public get samServerFqdn() {
    return this.getStringAttribute('sam_server_fqdn');
  }
  public set samServerFqdn(value: string) {
    this._samServerFqdn = value;
  }
  public resetSamServerFqdn() {
    this._samServerFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samServerFqdnInput() {
    return this._samServerFqdn;
  }

  // sam_server_ip - computed: true, optional: true, required: false
  private _samServerIp?: string; 
  public get samServerIp() {
    return this.getStringAttribute('sam_server_ip');
  }
  public set samServerIp(value: string) {
    this._samServerIp = value;
  }
  public resetSamServerIp() {
    this._samServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samServerIpInput() {
    return this._samServerIp;
  }

  // sam_server_type - computed: true, optional: true, required: false
  private _samServerType?: string; 
  public get samServerType() {
    return this.getStringAttribute('sam_server_type');
  }
  public set samServerType(value: string) {
    this._samServerType = value;
  }
  public resetSamServerType() {
    this._samServerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samServerTypeInput() {
    return this._samServerType;
  }

  // sam_ssid - computed: false, optional: true, required: false
  private _samSsid?: string; 
  public get samSsid() {
    return this.getStringAttribute('sam_ssid');
  }
  public set samSsid(value: string) {
    this._samSsid = value;
  }
  public resetSamSsid() {
    this._samSsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samSsidInput() {
    return this._samSsid;
  }

  // sam_test - computed: true, optional: true, required: false
  private _samTest?: string; 
  public get samTest() {
    return this.getStringAttribute('sam_test');
  }
  public set samTest(value: string) {
    this._samTest = value;
  }
  public resetSamTest() {
    this._samTest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samTestInput() {
    return this._samTest;
  }

  // sam_username - computed: false, optional: true, required: false
  private _samUsername?: string; 
  public get samUsername() {
    return this.getStringAttribute('sam_username');
  }
  public set samUsername(value: string) {
    this._samUsername = value;
  }
  public resetSamUsername() {
    this._samUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samUsernameInput() {
    return this._samUsername;
  }

  // short_guard_interval - computed: true, optional: true, required: false
  private _shortGuardInterval?: string; 
  public get shortGuardInterval() {
    return this.getStringAttribute('short_guard_interval');
  }
  public set shortGuardInterval(value: string) {
    this._shortGuardInterval = value;
  }
  public resetShortGuardInterval() {
    this._shortGuardInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortGuardIntervalInput() {
    return this._shortGuardInterval;
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

  // transmit_optimize - computed: true, optional: true, required: false
  private _transmitOptimize?: string; 
  public get transmitOptimize() {
    return this.getStringAttribute('transmit_optimize');
  }
  public set transmitOptimize(value: string) {
    this._transmitOptimize = value;
  }
  public resetTransmitOptimize() {
    this._transmitOptimize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitOptimizeInput() {
    return this._transmitOptimize;
  }

  // vap_all - computed: true, optional: true, required: false
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

  // wids_profile - computed: false, optional: true, required: false
  private _widsProfile?: string; 
  public get widsProfile() {
    return this.getStringAttribute('wids_profile');
  }
  public set widsProfile(value: string) {
    this._widsProfile = value;
  }
  public resetWidsProfile() {
    this._widsProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widsProfileInput() {
    return this._widsProfile;
  }

  // zero_wait_dfs - computed: true, optional: true, required: false
  private _zeroWaitDfs?: string; 
  public get zeroWaitDfs() {
    return this.getStringAttribute('zero_wait_dfs');
  }
  public set zeroWaitDfs(value: string) {
    this._zeroWaitDfs = value;
  }
  public resetZeroWaitDfs() {
    this._zeroWaitDfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroWaitDfsInput() {
    return this._zeroWaitDfs;
  }

  // channel - computed: false, optional: true, required: false
  private _channel = new WirelesscontrollerWtpprofileRadio2ChannelList(this, "channel", true);
  public get channel() {
    return this._channel;
  }
  public putChannel(value: WirelesscontrollerWtpprofileRadio2Channel[] | cdktf.IResolvable) {
    this._channel.internalValue = value;
  }
  public resetChannel() {
    this._channel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel.internalValue;
  }

  // vaps - computed: false, optional: true, required: false
  private _vaps = new WirelesscontrollerWtpprofileRadio2VapsList(this, "vaps", true);
  public get vaps() {
    return this._vaps;
  }
  public putVaps(value: WirelesscontrollerWtpprofileRadio2Vaps[] | cdktf.IResolvable) {
    this._vaps.internalValue = value;
  }
  public resetVaps() {
    this._vaps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vapsInput() {
    return this._vaps.internalValue;
  }
}
export interface WirelesscontrollerWtpprofileRadio3Channel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#chan WirelesscontrollerWtpprofile#chan}
  */
  readonly chan?: string;
}

export function wirelesscontrollerWtpprofileRadio3ChannelToTerraform(struct?: WirelesscontrollerWtpprofileRadio3Channel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chan: cdktf.stringToTerraform(struct!.chan),
  }
}


export function wirelesscontrollerWtpprofileRadio3ChannelToHclTerraform(struct?: WirelesscontrollerWtpprofileRadio3Channel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chan: {
      value: cdktf.stringToHclTerraform(struct!.chan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerWtpprofileRadio3ChannelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelesscontrollerWtpprofileRadio3Channel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chan !== undefined) {
      hasAnyValues = true;
      internalValueResult.chan = this._chan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerWtpprofileRadio3Channel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chan = value.chan;
    }
  }

  // chan - computed: false, optional: true, required: false
  private _chan?: string; 
  public get chan() {
    return this.getStringAttribute('chan');
  }
  public set chan(value: string) {
    this._chan = value;
  }
  public resetChan() {
    this._chan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chanInput() {
    return this._chan;
  }
}

export class WirelesscontrollerWtpprofileRadio3ChannelList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerWtpprofileRadio3Channel[] | cdktf.IResolvable

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
  public get(index: number): WirelesscontrollerWtpprofileRadio3ChannelOutputReference {
    return new WirelesscontrollerWtpprofileRadio3ChannelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelesscontrollerWtpprofileRadio3Vaps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#name WirelesscontrollerWtpprofile#name}
  */
  readonly name?: string;
}

export function wirelesscontrollerWtpprofileRadio3VapsToTerraform(struct?: WirelesscontrollerWtpprofileRadio3Vaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function wirelesscontrollerWtpprofileRadio3VapsToHclTerraform(struct?: WirelesscontrollerWtpprofileRadio3Vaps | cdktf.IResolvable): any {
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

export class WirelesscontrollerWtpprofileRadio3VapsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelesscontrollerWtpprofileRadio3Vaps | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WirelesscontrollerWtpprofileRadio3Vaps | cdktf.IResolvable | undefined) {
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

export class WirelesscontrollerWtpprofileRadio3VapsList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerWtpprofileRadio3Vaps[] | cdktf.IResolvable

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
  public get(index: number): WirelesscontrollerWtpprofileRadio3VapsOutputReference {
    return new WirelesscontrollerWtpprofileRadio3VapsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelesscontrollerWtpprofileRadio3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#airtime_fairness WirelesscontrollerWtpprofile#airtime_fairness}
  */
  readonly airtimeFairness?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#amsdu WirelesscontrollerWtpprofile#amsdu}
  */
  readonly amsdu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ap_handoff WirelesscontrollerWtpprofile#ap_handoff}
  */
  readonly apHandoff?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ap_sniffer_addr WirelesscontrollerWtpprofile#ap_sniffer_addr}
  */
  readonly apSnifferAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ap_sniffer_bufsize WirelesscontrollerWtpprofile#ap_sniffer_bufsize}
  */
  readonly apSnifferBufsize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ap_sniffer_chan WirelesscontrollerWtpprofile#ap_sniffer_chan}
  */
  readonly apSnifferChan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ap_sniffer_chan_width WirelesscontrollerWtpprofile#ap_sniffer_chan_width}
  */
  readonly apSnifferChanWidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ap_sniffer_ctl WirelesscontrollerWtpprofile#ap_sniffer_ctl}
  */
  readonly apSnifferCtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ap_sniffer_data WirelesscontrollerWtpprofile#ap_sniffer_data}
  */
  readonly apSnifferData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ap_sniffer_mgmt_beacon WirelesscontrollerWtpprofile#ap_sniffer_mgmt_beacon}
  */
  readonly apSnifferMgmtBeacon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ap_sniffer_mgmt_other WirelesscontrollerWtpprofile#ap_sniffer_mgmt_other}
  */
  readonly apSnifferMgmtOther?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ap_sniffer_mgmt_probe WirelesscontrollerWtpprofile#ap_sniffer_mgmt_probe}
  */
  readonly apSnifferMgmtProbe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#arrp_profile WirelesscontrollerWtpprofile#arrp_profile}
  */
  readonly arrpProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#auto_power_high WirelesscontrollerWtpprofile#auto_power_high}
  */
  readonly autoPowerHigh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#auto_power_level WirelesscontrollerWtpprofile#auto_power_level}
  */
  readonly autoPowerLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#auto_power_low WirelesscontrollerWtpprofile#auto_power_low}
  */
  readonly autoPowerLow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#auto_power_target WirelesscontrollerWtpprofile#auto_power_target}
  */
  readonly autoPowerTarget?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#band WirelesscontrollerWtpprofile#band}
  */
  readonly band?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#band_5g_type WirelesscontrollerWtpprofile#band_5g_type}
  */
  readonly band5GType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#bandwidth_admission_control WirelesscontrollerWtpprofile#bandwidth_admission_control}
  */
  readonly bandwidthAdmissionControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#bandwidth_capacity WirelesscontrollerWtpprofile#bandwidth_capacity}
  */
  readonly bandwidthCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#beacon_interval WirelesscontrollerWtpprofile#beacon_interval}
  */
  readonly beaconInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#bss_color WirelesscontrollerWtpprofile#bss_color}
  */
  readonly bssColor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#bss_color_mode WirelesscontrollerWtpprofile#bss_color_mode}
  */
  readonly bssColorMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#call_admission_control WirelesscontrollerWtpprofile#call_admission_control}
  */
  readonly callAdmissionControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#call_capacity WirelesscontrollerWtpprofile#call_capacity}
  */
  readonly callCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#channel_bonding WirelesscontrollerWtpprofile#channel_bonding}
  */
  readonly channelBonding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#channel_bonding_ext WirelesscontrollerWtpprofile#channel_bonding_ext}
  */
  readonly channelBondingExt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#channel_utilization WirelesscontrollerWtpprofile#channel_utilization}
  */
  readonly channelUtilization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#coexistence WirelesscontrollerWtpprofile#coexistence}
  */
  readonly coexistence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#darrp WirelesscontrollerWtpprofile#darrp}
  */
  readonly darrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#drma WirelesscontrollerWtpprofile#drma}
  */
  readonly drma?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#drma_sensitivity WirelesscontrollerWtpprofile#drma_sensitivity}
  */
  readonly drmaSensitivity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#dtim WirelesscontrollerWtpprofile#dtim}
  */
  readonly dtim?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#frag_threshold WirelesscontrollerWtpprofile#frag_threshold}
  */
  readonly fragThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#frequency_handoff WirelesscontrollerWtpprofile#frequency_handoff}
  */
  readonly frequencyHandoff?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#iperf_protocol WirelesscontrollerWtpprofile#iperf_protocol}
  */
  readonly iperfProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#iperf_server_port WirelesscontrollerWtpprofile#iperf_server_port}
  */
  readonly iperfServerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#max_clients WirelesscontrollerWtpprofile#max_clients}
  */
  readonly maxClients?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#max_distance WirelesscontrollerWtpprofile#max_distance}
  */
  readonly maxDistance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#mimo_mode WirelesscontrollerWtpprofile#mimo_mode}
  */
  readonly mimoMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#mode WirelesscontrollerWtpprofile#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#n80211d WirelesscontrollerWtpprofile#n80211d}
  */
  readonly n80211D?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#n80211mc WirelesscontrollerWtpprofile#n80211mc}
  */
  readonly n80211Mc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#optional_antenna WirelesscontrollerWtpprofile#optional_antenna}
  */
  readonly optionalAntenna?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#optional_antenna_gain WirelesscontrollerWtpprofile#optional_antenna_gain}
  */
  readonly optionalAntennaGain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#power_level WirelesscontrollerWtpprofile#power_level}
  */
  readonly powerLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#power_mode WirelesscontrollerWtpprofile#power_mode}
  */
  readonly powerMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#power_value WirelesscontrollerWtpprofile#power_value}
  */
  readonly powerValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#powersave_optimize WirelesscontrollerWtpprofile#powersave_optimize}
  */
  readonly powersaveOptimize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#protection_mode WirelesscontrollerWtpprofile#protection_mode}
  */
  readonly protectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#rts_threshold WirelesscontrollerWtpprofile#rts_threshold}
  */
  readonly rtsThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_bssid WirelesscontrollerWtpprofile#sam_bssid}
  */
  readonly samBssid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_ca_certificate WirelesscontrollerWtpprofile#sam_ca_certificate}
  */
  readonly samCaCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_captive_portal WirelesscontrollerWtpprofile#sam_captive_portal}
  */
  readonly samCaptivePortal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_client_certificate WirelesscontrollerWtpprofile#sam_client_certificate}
  */
  readonly samClientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_cwp_failure_string WirelesscontrollerWtpprofile#sam_cwp_failure_string}
  */
  readonly samCwpFailureString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_cwp_match_string WirelesscontrollerWtpprofile#sam_cwp_match_string}
  */
  readonly samCwpMatchString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_cwp_password WirelesscontrollerWtpprofile#sam_cwp_password}
  */
  readonly samCwpPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_cwp_success_string WirelesscontrollerWtpprofile#sam_cwp_success_string}
  */
  readonly samCwpSuccessString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_cwp_test_url WirelesscontrollerWtpprofile#sam_cwp_test_url}
  */
  readonly samCwpTestUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_cwp_username WirelesscontrollerWtpprofile#sam_cwp_username}
  */
  readonly samCwpUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_eap_method WirelesscontrollerWtpprofile#sam_eap_method}
  */
  readonly samEapMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_password WirelesscontrollerWtpprofile#sam_password}
  */
  readonly samPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_private_key WirelesscontrollerWtpprofile#sam_private_key}
  */
  readonly samPrivateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_private_key_password WirelesscontrollerWtpprofile#sam_private_key_password}
  */
  readonly samPrivateKeyPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_report_intv WirelesscontrollerWtpprofile#sam_report_intv}
  */
  readonly samReportIntv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_security_type WirelesscontrollerWtpprofile#sam_security_type}
  */
  readonly samSecurityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_server_fqdn WirelesscontrollerWtpprofile#sam_server_fqdn}
  */
  readonly samServerFqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_server_ip WirelesscontrollerWtpprofile#sam_server_ip}
  */
  readonly samServerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_server_type WirelesscontrollerWtpprofile#sam_server_type}
  */
  readonly samServerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_ssid WirelesscontrollerWtpprofile#sam_ssid}
  */
  readonly samSsid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_test WirelesscontrollerWtpprofile#sam_test}
  */
  readonly samTest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_username WirelesscontrollerWtpprofile#sam_username}
  */
  readonly samUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#short_guard_interval WirelesscontrollerWtpprofile#short_guard_interval}
  */
  readonly shortGuardInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#spectrum_analysis WirelesscontrollerWtpprofile#spectrum_analysis}
  */
  readonly spectrumAnalysis?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#transmit_optimize WirelesscontrollerWtpprofile#transmit_optimize}
  */
  readonly transmitOptimize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#vap_all WirelesscontrollerWtpprofile#vap_all}
  */
  readonly vapAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#wids_profile WirelesscontrollerWtpprofile#wids_profile}
  */
  readonly widsProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#zero_wait_dfs WirelesscontrollerWtpprofile#zero_wait_dfs}
  */
  readonly zeroWaitDfs?: string;
  /**
  * channel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#channel WirelesscontrollerWtpprofile#channel}
  */
  readonly channel?: WirelesscontrollerWtpprofileRadio3Channel[] | cdktf.IResolvable;
  /**
  * vaps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#vaps WirelesscontrollerWtpprofile#vaps}
  */
  readonly vaps?: WirelesscontrollerWtpprofileRadio3Vaps[] | cdktf.IResolvable;
}

export function wirelesscontrollerWtpprofileRadio3ToTerraform(struct?: WirelesscontrollerWtpprofileRadio3OutputReference | WirelesscontrollerWtpprofileRadio3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    airtime_fairness: cdktf.stringToTerraform(struct!.airtimeFairness),
    amsdu: cdktf.stringToTerraform(struct!.amsdu),
    ap_handoff: cdktf.stringToTerraform(struct!.apHandoff),
    ap_sniffer_addr: cdktf.stringToTerraform(struct!.apSnifferAddr),
    ap_sniffer_bufsize: cdktf.numberToTerraform(struct!.apSnifferBufsize),
    ap_sniffer_chan: cdktf.numberToTerraform(struct!.apSnifferChan),
    ap_sniffer_chan_width: cdktf.stringToTerraform(struct!.apSnifferChanWidth),
    ap_sniffer_ctl: cdktf.stringToTerraform(struct!.apSnifferCtl),
    ap_sniffer_data: cdktf.stringToTerraform(struct!.apSnifferData),
    ap_sniffer_mgmt_beacon: cdktf.stringToTerraform(struct!.apSnifferMgmtBeacon),
    ap_sniffer_mgmt_other: cdktf.stringToTerraform(struct!.apSnifferMgmtOther),
    ap_sniffer_mgmt_probe: cdktf.stringToTerraform(struct!.apSnifferMgmtProbe),
    arrp_profile: cdktf.stringToTerraform(struct!.arrpProfile),
    auto_power_high: cdktf.numberToTerraform(struct!.autoPowerHigh),
    auto_power_level: cdktf.stringToTerraform(struct!.autoPowerLevel),
    auto_power_low: cdktf.numberToTerraform(struct!.autoPowerLow),
    auto_power_target: cdktf.stringToTerraform(struct!.autoPowerTarget),
    band: cdktf.stringToTerraform(struct!.band),
    band_5g_type: cdktf.stringToTerraform(struct!.band5GType),
    bandwidth_admission_control: cdktf.stringToTerraform(struct!.bandwidthAdmissionControl),
    bandwidth_capacity: cdktf.numberToTerraform(struct!.bandwidthCapacity),
    beacon_interval: cdktf.numberToTerraform(struct!.beaconInterval),
    bss_color: cdktf.numberToTerraform(struct!.bssColor),
    bss_color_mode: cdktf.stringToTerraform(struct!.bssColorMode),
    call_admission_control: cdktf.stringToTerraform(struct!.callAdmissionControl),
    call_capacity: cdktf.numberToTerraform(struct!.callCapacity),
    channel_bonding: cdktf.stringToTerraform(struct!.channelBonding),
    channel_bonding_ext: cdktf.stringToTerraform(struct!.channelBondingExt),
    channel_utilization: cdktf.stringToTerraform(struct!.channelUtilization),
    coexistence: cdktf.stringToTerraform(struct!.coexistence),
    darrp: cdktf.stringToTerraform(struct!.darrp),
    drma: cdktf.stringToTerraform(struct!.drma),
    drma_sensitivity: cdktf.stringToTerraform(struct!.drmaSensitivity),
    dtim: cdktf.numberToTerraform(struct!.dtim),
    frag_threshold: cdktf.numberToTerraform(struct!.fragThreshold),
    frequency_handoff: cdktf.stringToTerraform(struct!.frequencyHandoff),
    iperf_protocol: cdktf.stringToTerraform(struct!.iperfProtocol),
    iperf_server_port: cdktf.numberToTerraform(struct!.iperfServerPort),
    max_clients: cdktf.numberToTerraform(struct!.maxClients),
    max_distance: cdktf.numberToTerraform(struct!.maxDistance),
    mimo_mode: cdktf.stringToTerraform(struct!.mimoMode),
    mode: cdktf.stringToTerraform(struct!.mode),
    n80211d: cdktf.stringToTerraform(struct!.n80211D),
    n80211mc: cdktf.stringToTerraform(struct!.n80211Mc),
    optional_antenna: cdktf.stringToTerraform(struct!.optionalAntenna),
    optional_antenna_gain: cdktf.stringToTerraform(struct!.optionalAntennaGain),
    power_level: cdktf.numberToTerraform(struct!.powerLevel),
    power_mode: cdktf.stringToTerraform(struct!.powerMode),
    power_value: cdktf.numberToTerraform(struct!.powerValue),
    powersave_optimize: cdktf.stringToTerraform(struct!.powersaveOptimize),
    protection_mode: cdktf.stringToTerraform(struct!.protectionMode),
    rts_threshold: cdktf.numberToTerraform(struct!.rtsThreshold),
    sam_bssid: cdktf.stringToTerraform(struct!.samBssid),
    sam_ca_certificate: cdktf.stringToTerraform(struct!.samCaCertificate),
    sam_captive_portal: cdktf.stringToTerraform(struct!.samCaptivePortal),
    sam_client_certificate: cdktf.stringToTerraform(struct!.samClientCertificate),
    sam_cwp_failure_string: cdktf.stringToTerraform(struct!.samCwpFailureString),
    sam_cwp_match_string: cdktf.stringToTerraform(struct!.samCwpMatchString),
    sam_cwp_password: cdktf.stringToTerraform(struct!.samCwpPassword),
    sam_cwp_success_string: cdktf.stringToTerraform(struct!.samCwpSuccessString),
    sam_cwp_test_url: cdktf.stringToTerraform(struct!.samCwpTestUrl),
    sam_cwp_username: cdktf.stringToTerraform(struct!.samCwpUsername),
    sam_eap_method: cdktf.stringToTerraform(struct!.samEapMethod),
    sam_password: cdktf.stringToTerraform(struct!.samPassword),
    sam_private_key: cdktf.stringToTerraform(struct!.samPrivateKey),
    sam_private_key_password: cdktf.stringToTerraform(struct!.samPrivateKeyPassword),
    sam_report_intv: cdktf.numberToTerraform(struct!.samReportIntv),
    sam_security_type: cdktf.stringToTerraform(struct!.samSecurityType),
    sam_server_fqdn: cdktf.stringToTerraform(struct!.samServerFqdn),
    sam_server_ip: cdktf.stringToTerraform(struct!.samServerIp),
    sam_server_type: cdktf.stringToTerraform(struct!.samServerType),
    sam_ssid: cdktf.stringToTerraform(struct!.samSsid),
    sam_test: cdktf.stringToTerraform(struct!.samTest),
    sam_username: cdktf.stringToTerraform(struct!.samUsername),
    short_guard_interval: cdktf.stringToTerraform(struct!.shortGuardInterval),
    spectrum_analysis: cdktf.stringToTerraform(struct!.spectrumAnalysis),
    transmit_optimize: cdktf.stringToTerraform(struct!.transmitOptimize),
    vap_all: cdktf.stringToTerraform(struct!.vapAll),
    wids_profile: cdktf.stringToTerraform(struct!.widsProfile),
    zero_wait_dfs: cdktf.stringToTerraform(struct!.zeroWaitDfs),
    channel: cdktf.listMapper(wirelesscontrollerWtpprofileRadio3ChannelToTerraform, true)(struct!.channel),
    vaps: cdktf.listMapper(wirelesscontrollerWtpprofileRadio3VapsToTerraform, true)(struct!.vaps),
  }
}


export function wirelesscontrollerWtpprofileRadio3ToHclTerraform(struct?: WirelesscontrollerWtpprofileRadio3OutputReference | WirelesscontrollerWtpprofileRadio3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    airtime_fairness: {
      value: cdktf.stringToHclTerraform(struct!.airtimeFairness),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    amsdu: {
      value: cdktf.stringToHclTerraform(struct!.amsdu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ap_handoff: {
      value: cdktf.stringToHclTerraform(struct!.apHandoff),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ap_sniffer_addr: {
      value: cdktf.stringToHclTerraform(struct!.apSnifferAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ap_sniffer_bufsize: {
      value: cdktf.numberToHclTerraform(struct!.apSnifferBufsize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ap_sniffer_chan: {
      value: cdktf.numberToHclTerraform(struct!.apSnifferChan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ap_sniffer_chan_width: {
      value: cdktf.stringToHclTerraform(struct!.apSnifferChanWidth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ap_sniffer_ctl: {
      value: cdktf.stringToHclTerraform(struct!.apSnifferCtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ap_sniffer_data: {
      value: cdktf.stringToHclTerraform(struct!.apSnifferData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ap_sniffer_mgmt_beacon: {
      value: cdktf.stringToHclTerraform(struct!.apSnifferMgmtBeacon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ap_sniffer_mgmt_other: {
      value: cdktf.stringToHclTerraform(struct!.apSnifferMgmtOther),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ap_sniffer_mgmt_probe: {
      value: cdktf.stringToHclTerraform(struct!.apSnifferMgmtProbe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arrp_profile: {
      value: cdktf.stringToHclTerraform(struct!.arrpProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
      value: cdktf.stringToHclTerraform(struct!.band),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    band_5g_type: {
      value: cdktf.stringToHclTerraform(struct!.band5GType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth_admission_control: {
      value: cdktf.stringToHclTerraform(struct!.bandwidthAdmissionControl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth_capacity: {
      value: cdktf.numberToHclTerraform(struct!.bandwidthCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    call_admission_control: {
      value: cdktf.stringToHclTerraform(struct!.callAdmissionControl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    call_capacity: {
      value: cdktf.numberToHclTerraform(struct!.callCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    channel_bonding: {
      value: cdktf.stringToHclTerraform(struct!.channelBonding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel_bonding_ext: {
      value: cdktf.stringToHclTerraform(struct!.channelBondingExt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel_utilization: {
      value: cdktf.stringToHclTerraform(struct!.channelUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    coexistence: {
      value: cdktf.stringToHclTerraform(struct!.coexistence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    darrp: {
      value: cdktf.stringToHclTerraform(struct!.darrp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drma: {
      value: cdktf.stringToHclTerraform(struct!.drma),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drma_sensitivity: {
      value: cdktf.stringToHclTerraform(struct!.drmaSensitivity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dtim: {
      value: cdktf.numberToHclTerraform(struct!.dtim),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frag_threshold: {
      value: cdktf.numberToHclTerraform(struct!.fragThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frequency_handoff: {
      value: cdktf.stringToHclTerraform(struct!.frequencyHandoff),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iperf_protocol: {
      value: cdktf.stringToHclTerraform(struct!.iperfProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iperf_server_port: {
      value: cdktf.numberToHclTerraform(struct!.iperfServerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_clients: {
      value: cdktf.numberToHclTerraform(struct!.maxClients),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_distance: {
      value: cdktf.numberToHclTerraform(struct!.maxDistance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mimo_mode: {
      value: cdktf.stringToHclTerraform(struct!.mimoMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    n80211mc: {
      value: cdktf.stringToHclTerraform(struct!.n80211Mc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional_antenna: {
      value: cdktf.stringToHclTerraform(struct!.optionalAntenna),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional_antenna_gain: {
      value: cdktf.stringToHclTerraform(struct!.optionalAntennaGain),
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
    powersave_optimize: {
      value: cdktf.stringToHclTerraform(struct!.powersaveOptimize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protection_mode: {
      value: cdktf.stringToHclTerraform(struct!.protectionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rts_threshold: {
      value: cdktf.numberToHclTerraform(struct!.rtsThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sam_bssid: {
      value: cdktf.stringToHclTerraform(struct!.samBssid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.samCaCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_captive_portal: {
      value: cdktf.stringToHclTerraform(struct!.samCaptivePortal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.samClientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_cwp_failure_string: {
      value: cdktf.stringToHclTerraform(struct!.samCwpFailureString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_cwp_match_string: {
      value: cdktf.stringToHclTerraform(struct!.samCwpMatchString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_cwp_password: {
      value: cdktf.stringToHclTerraform(struct!.samCwpPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_cwp_success_string: {
      value: cdktf.stringToHclTerraform(struct!.samCwpSuccessString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_cwp_test_url: {
      value: cdktf.stringToHclTerraform(struct!.samCwpTestUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_cwp_username: {
      value: cdktf.stringToHclTerraform(struct!.samCwpUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_eap_method: {
      value: cdktf.stringToHclTerraform(struct!.samEapMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_password: {
      value: cdktf.stringToHclTerraform(struct!.samPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_private_key: {
      value: cdktf.stringToHclTerraform(struct!.samPrivateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_private_key_password: {
      value: cdktf.stringToHclTerraform(struct!.samPrivateKeyPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_report_intv: {
      value: cdktf.numberToHclTerraform(struct!.samReportIntv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sam_security_type: {
      value: cdktf.stringToHclTerraform(struct!.samSecurityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_server_fqdn: {
      value: cdktf.stringToHclTerraform(struct!.samServerFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_server_ip: {
      value: cdktf.stringToHclTerraform(struct!.samServerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_server_type: {
      value: cdktf.stringToHclTerraform(struct!.samServerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_ssid: {
      value: cdktf.stringToHclTerraform(struct!.samSsid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_test: {
      value: cdktf.stringToHclTerraform(struct!.samTest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_username: {
      value: cdktf.stringToHclTerraform(struct!.samUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    short_guard_interval: {
      value: cdktf.stringToHclTerraform(struct!.shortGuardInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spectrum_analysis: {
      value: cdktf.stringToHclTerraform(struct!.spectrumAnalysis),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transmit_optimize: {
      value: cdktf.stringToHclTerraform(struct!.transmitOptimize),
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
    wids_profile: {
      value: cdktf.stringToHclTerraform(struct!.widsProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zero_wait_dfs: {
      value: cdktf.stringToHclTerraform(struct!.zeroWaitDfs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel: {
      value: cdktf.listMapperHcl(wirelesscontrollerWtpprofileRadio3ChannelToHclTerraform, true)(struct!.channel),
      isBlock: true,
      type: "set",
      storageClassType: "WirelesscontrollerWtpprofileRadio3ChannelList",
    },
    vaps: {
      value: cdktf.listMapperHcl(wirelesscontrollerWtpprofileRadio3VapsToHclTerraform, true)(struct!.vaps),
      isBlock: true,
      type: "set",
      storageClassType: "WirelesscontrollerWtpprofileRadio3VapsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerWtpprofileRadio3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WirelesscontrollerWtpprofileRadio3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._airtimeFairness !== undefined) {
      hasAnyValues = true;
      internalValueResult.airtimeFairness = this._airtimeFairness;
    }
    if (this._amsdu !== undefined) {
      hasAnyValues = true;
      internalValueResult.amsdu = this._amsdu;
    }
    if (this._apHandoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.apHandoff = this._apHandoff;
    }
    if (this._apSnifferAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.apSnifferAddr = this._apSnifferAddr;
    }
    if (this._apSnifferBufsize !== undefined) {
      hasAnyValues = true;
      internalValueResult.apSnifferBufsize = this._apSnifferBufsize;
    }
    if (this._apSnifferChan !== undefined) {
      hasAnyValues = true;
      internalValueResult.apSnifferChan = this._apSnifferChan;
    }
    if (this._apSnifferChanWidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.apSnifferChanWidth = this._apSnifferChanWidth;
    }
    if (this._apSnifferCtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.apSnifferCtl = this._apSnifferCtl;
    }
    if (this._apSnifferData !== undefined) {
      hasAnyValues = true;
      internalValueResult.apSnifferData = this._apSnifferData;
    }
    if (this._apSnifferMgmtBeacon !== undefined) {
      hasAnyValues = true;
      internalValueResult.apSnifferMgmtBeacon = this._apSnifferMgmtBeacon;
    }
    if (this._apSnifferMgmtOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.apSnifferMgmtOther = this._apSnifferMgmtOther;
    }
    if (this._apSnifferMgmtProbe !== undefined) {
      hasAnyValues = true;
      internalValueResult.apSnifferMgmtProbe = this._apSnifferMgmtProbe;
    }
    if (this._arrpProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrpProfile = this._arrpProfile;
    }
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
    if (this._band5GType !== undefined) {
      hasAnyValues = true;
      internalValueResult.band5GType = this._band5GType;
    }
    if (this._bandwidthAdmissionControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthAdmissionControl = this._bandwidthAdmissionControl;
    }
    if (this._bandwidthCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthCapacity = this._bandwidthCapacity;
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
    if (this._callAdmissionControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.callAdmissionControl = this._callAdmissionControl;
    }
    if (this._callCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.callCapacity = this._callCapacity;
    }
    if (this._channelBonding !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelBonding = this._channelBonding;
    }
    if (this._channelBondingExt !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelBondingExt = this._channelBondingExt;
    }
    if (this._channelUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelUtilization = this._channelUtilization;
    }
    if (this._coexistence !== undefined) {
      hasAnyValues = true;
      internalValueResult.coexistence = this._coexistence;
    }
    if (this._darrp !== undefined) {
      hasAnyValues = true;
      internalValueResult.darrp = this._darrp;
    }
    if (this._drma !== undefined) {
      hasAnyValues = true;
      internalValueResult.drma = this._drma;
    }
    if (this._drmaSensitivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.drmaSensitivity = this._drmaSensitivity;
    }
    if (this._dtim !== undefined) {
      hasAnyValues = true;
      internalValueResult.dtim = this._dtim;
    }
    if (this._fragThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragThreshold = this._fragThreshold;
    }
    if (this._frequencyHandoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequencyHandoff = this._frequencyHandoff;
    }
    if (this._iperfProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.iperfProtocol = this._iperfProtocol;
    }
    if (this._iperfServerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.iperfServerPort = this._iperfServerPort;
    }
    if (this._maxClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxClients = this._maxClients;
    }
    if (this._maxDistance !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDistance = this._maxDistance;
    }
    if (this._mimoMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mimoMode = this._mimoMode;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._n80211D !== undefined) {
      hasAnyValues = true;
      internalValueResult.n80211D = this._n80211D;
    }
    if (this._n80211Mc !== undefined) {
      hasAnyValues = true;
      internalValueResult.n80211Mc = this._n80211Mc;
    }
    if (this._optionalAntenna !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionalAntenna = this._optionalAntenna;
    }
    if (this._optionalAntennaGain !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionalAntennaGain = this._optionalAntennaGain;
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
    if (this._powersaveOptimize !== undefined) {
      hasAnyValues = true;
      internalValueResult.powersaveOptimize = this._powersaveOptimize;
    }
    if (this._protectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectionMode = this._protectionMode;
    }
    if (this._rtsThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtsThreshold = this._rtsThreshold;
    }
    if (this._samBssid !== undefined) {
      hasAnyValues = true;
      internalValueResult.samBssid = this._samBssid;
    }
    if (this._samCaCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.samCaCertificate = this._samCaCertificate;
    }
    if (this._samCaptivePortal !== undefined) {
      hasAnyValues = true;
      internalValueResult.samCaptivePortal = this._samCaptivePortal;
    }
    if (this._samClientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.samClientCertificate = this._samClientCertificate;
    }
    if (this._samCwpFailureString !== undefined) {
      hasAnyValues = true;
      internalValueResult.samCwpFailureString = this._samCwpFailureString;
    }
    if (this._samCwpMatchString !== undefined) {
      hasAnyValues = true;
      internalValueResult.samCwpMatchString = this._samCwpMatchString;
    }
    if (this._samCwpPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.samCwpPassword = this._samCwpPassword;
    }
    if (this._samCwpSuccessString !== undefined) {
      hasAnyValues = true;
      internalValueResult.samCwpSuccessString = this._samCwpSuccessString;
    }
    if (this._samCwpTestUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.samCwpTestUrl = this._samCwpTestUrl;
    }
    if (this._samCwpUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.samCwpUsername = this._samCwpUsername;
    }
    if (this._samEapMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.samEapMethod = this._samEapMethod;
    }
    if (this._samPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.samPassword = this._samPassword;
    }
    if (this._samPrivateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.samPrivateKey = this._samPrivateKey;
    }
    if (this._samPrivateKeyPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.samPrivateKeyPassword = this._samPrivateKeyPassword;
    }
    if (this._samReportIntv !== undefined) {
      hasAnyValues = true;
      internalValueResult.samReportIntv = this._samReportIntv;
    }
    if (this._samSecurityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.samSecurityType = this._samSecurityType;
    }
    if (this._samServerFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.samServerFqdn = this._samServerFqdn;
    }
    if (this._samServerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.samServerIp = this._samServerIp;
    }
    if (this._samServerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.samServerType = this._samServerType;
    }
    if (this._samSsid !== undefined) {
      hasAnyValues = true;
      internalValueResult.samSsid = this._samSsid;
    }
    if (this._samTest !== undefined) {
      hasAnyValues = true;
      internalValueResult.samTest = this._samTest;
    }
    if (this._samUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.samUsername = this._samUsername;
    }
    if (this._shortGuardInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.shortGuardInterval = this._shortGuardInterval;
    }
    if (this._spectrumAnalysis !== undefined) {
      hasAnyValues = true;
      internalValueResult.spectrumAnalysis = this._spectrumAnalysis;
    }
    if (this._transmitOptimize !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitOptimize = this._transmitOptimize;
    }
    if (this._vapAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.vapAll = this._vapAll;
    }
    if (this._widsProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.widsProfile = this._widsProfile;
    }
    if (this._zeroWaitDfs !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeroWaitDfs = this._zeroWaitDfs;
    }
    if (this._channel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel?.internalValue;
    }
    if (this._vaps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaps = this._vaps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerWtpprofileRadio3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._airtimeFairness = undefined;
      this._amsdu = undefined;
      this._apHandoff = undefined;
      this._apSnifferAddr = undefined;
      this._apSnifferBufsize = undefined;
      this._apSnifferChan = undefined;
      this._apSnifferChanWidth = undefined;
      this._apSnifferCtl = undefined;
      this._apSnifferData = undefined;
      this._apSnifferMgmtBeacon = undefined;
      this._apSnifferMgmtOther = undefined;
      this._apSnifferMgmtProbe = undefined;
      this._arrpProfile = undefined;
      this._autoPowerHigh = undefined;
      this._autoPowerLevel = undefined;
      this._autoPowerLow = undefined;
      this._autoPowerTarget = undefined;
      this._band = undefined;
      this._band5GType = undefined;
      this._bandwidthAdmissionControl = undefined;
      this._bandwidthCapacity = undefined;
      this._beaconInterval = undefined;
      this._bssColor = undefined;
      this._bssColorMode = undefined;
      this._callAdmissionControl = undefined;
      this._callCapacity = undefined;
      this._channelBonding = undefined;
      this._channelBondingExt = undefined;
      this._channelUtilization = undefined;
      this._coexistence = undefined;
      this._darrp = undefined;
      this._drma = undefined;
      this._drmaSensitivity = undefined;
      this._dtim = undefined;
      this._fragThreshold = undefined;
      this._frequencyHandoff = undefined;
      this._iperfProtocol = undefined;
      this._iperfServerPort = undefined;
      this._maxClients = undefined;
      this._maxDistance = undefined;
      this._mimoMode = undefined;
      this._mode = undefined;
      this._n80211D = undefined;
      this._n80211Mc = undefined;
      this._optionalAntenna = undefined;
      this._optionalAntennaGain = undefined;
      this._powerLevel = undefined;
      this._powerMode = undefined;
      this._powerValue = undefined;
      this._powersaveOptimize = undefined;
      this._protectionMode = undefined;
      this._rtsThreshold = undefined;
      this._samBssid = undefined;
      this._samCaCertificate = undefined;
      this._samCaptivePortal = undefined;
      this._samClientCertificate = undefined;
      this._samCwpFailureString = undefined;
      this._samCwpMatchString = undefined;
      this._samCwpPassword = undefined;
      this._samCwpSuccessString = undefined;
      this._samCwpTestUrl = undefined;
      this._samCwpUsername = undefined;
      this._samEapMethod = undefined;
      this._samPassword = undefined;
      this._samPrivateKey = undefined;
      this._samPrivateKeyPassword = undefined;
      this._samReportIntv = undefined;
      this._samSecurityType = undefined;
      this._samServerFqdn = undefined;
      this._samServerIp = undefined;
      this._samServerType = undefined;
      this._samSsid = undefined;
      this._samTest = undefined;
      this._samUsername = undefined;
      this._shortGuardInterval = undefined;
      this._spectrumAnalysis = undefined;
      this._transmitOptimize = undefined;
      this._vapAll = undefined;
      this._widsProfile = undefined;
      this._zeroWaitDfs = undefined;
      this._channel.internalValue = undefined;
      this._vaps.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._airtimeFairness = value.airtimeFairness;
      this._amsdu = value.amsdu;
      this._apHandoff = value.apHandoff;
      this._apSnifferAddr = value.apSnifferAddr;
      this._apSnifferBufsize = value.apSnifferBufsize;
      this._apSnifferChan = value.apSnifferChan;
      this._apSnifferChanWidth = value.apSnifferChanWidth;
      this._apSnifferCtl = value.apSnifferCtl;
      this._apSnifferData = value.apSnifferData;
      this._apSnifferMgmtBeacon = value.apSnifferMgmtBeacon;
      this._apSnifferMgmtOther = value.apSnifferMgmtOther;
      this._apSnifferMgmtProbe = value.apSnifferMgmtProbe;
      this._arrpProfile = value.arrpProfile;
      this._autoPowerHigh = value.autoPowerHigh;
      this._autoPowerLevel = value.autoPowerLevel;
      this._autoPowerLow = value.autoPowerLow;
      this._autoPowerTarget = value.autoPowerTarget;
      this._band = value.band;
      this._band5GType = value.band5GType;
      this._bandwidthAdmissionControl = value.bandwidthAdmissionControl;
      this._bandwidthCapacity = value.bandwidthCapacity;
      this._beaconInterval = value.beaconInterval;
      this._bssColor = value.bssColor;
      this._bssColorMode = value.bssColorMode;
      this._callAdmissionControl = value.callAdmissionControl;
      this._callCapacity = value.callCapacity;
      this._channelBonding = value.channelBonding;
      this._channelBondingExt = value.channelBondingExt;
      this._channelUtilization = value.channelUtilization;
      this._coexistence = value.coexistence;
      this._darrp = value.darrp;
      this._drma = value.drma;
      this._drmaSensitivity = value.drmaSensitivity;
      this._dtim = value.dtim;
      this._fragThreshold = value.fragThreshold;
      this._frequencyHandoff = value.frequencyHandoff;
      this._iperfProtocol = value.iperfProtocol;
      this._iperfServerPort = value.iperfServerPort;
      this._maxClients = value.maxClients;
      this._maxDistance = value.maxDistance;
      this._mimoMode = value.mimoMode;
      this._mode = value.mode;
      this._n80211D = value.n80211D;
      this._n80211Mc = value.n80211Mc;
      this._optionalAntenna = value.optionalAntenna;
      this._optionalAntennaGain = value.optionalAntennaGain;
      this._powerLevel = value.powerLevel;
      this._powerMode = value.powerMode;
      this._powerValue = value.powerValue;
      this._powersaveOptimize = value.powersaveOptimize;
      this._protectionMode = value.protectionMode;
      this._rtsThreshold = value.rtsThreshold;
      this._samBssid = value.samBssid;
      this._samCaCertificate = value.samCaCertificate;
      this._samCaptivePortal = value.samCaptivePortal;
      this._samClientCertificate = value.samClientCertificate;
      this._samCwpFailureString = value.samCwpFailureString;
      this._samCwpMatchString = value.samCwpMatchString;
      this._samCwpPassword = value.samCwpPassword;
      this._samCwpSuccessString = value.samCwpSuccessString;
      this._samCwpTestUrl = value.samCwpTestUrl;
      this._samCwpUsername = value.samCwpUsername;
      this._samEapMethod = value.samEapMethod;
      this._samPassword = value.samPassword;
      this._samPrivateKey = value.samPrivateKey;
      this._samPrivateKeyPassword = value.samPrivateKeyPassword;
      this._samReportIntv = value.samReportIntv;
      this._samSecurityType = value.samSecurityType;
      this._samServerFqdn = value.samServerFqdn;
      this._samServerIp = value.samServerIp;
      this._samServerType = value.samServerType;
      this._samSsid = value.samSsid;
      this._samTest = value.samTest;
      this._samUsername = value.samUsername;
      this._shortGuardInterval = value.shortGuardInterval;
      this._spectrumAnalysis = value.spectrumAnalysis;
      this._transmitOptimize = value.transmitOptimize;
      this._vapAll = value.vapAll;
      this._widsProfile = value.widsProfile;
      this._zeroWaitDfs = value.zeroWaitDfs;
      this._channel.internalValue = value.channel;
      this._vaps.internalValue = value.vaps;
    }
  }

  // airtime_fairness - computed: true, optional: true, required: false
  private _airtimeFairness?: string; 
  public get airtimeFairness() {
    return this.getStringAttribute('airtime_fairness');
  }
  public set airtimeFairness(value: string) {
    this._airtimeFairness = value;
  }
  public resetAirtimeFairness() {
    this._airtimeFairness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get airtimeFairnessInput() {
    return this._airtimeFairness;
  }

  // amsdu - computed: true, optional: true, required: false
  private _amsdu?: string; 
  public get amsdu() {
    return this.getStringAttribute('amsdu');
  }
  public set amsdu(value: string) {
    this._amsdu = value;
  }
  public resetAmsdu() {
    this._amsdu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amsduInput() {
    return this._amsdu;
  }

  // ap_handoff - computed: false, optional: true, required: false
  private _apHandoff?: string; 
  public get apHandoff() {
    return this.getStringAttribute('ap_handoff');
  }
  public set apHandoff(value: string) {
    this._apHandoff = value;
  }
  public resetApHandoff() {
    this._apHandoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apHandoffInput() {
    return this._apHandoff;
  }

  // ap_sniffer_addr - computed: true, optional: true, required: false
  private _apSnifferAddr?: string; 
  public get apSnifferAddr() {
    return this.getStringAttribute('ap_sniffer_addr');
  }
  public set apSnifferAddr(value: string) {
    this._apSnifferAddr = value;
  }
  public resetApSnifferAddr() {
    this._apSnifferAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferAddrInput() {
    return this._apSnifferAddr;
  }

  // ap_sniffer_bufsize - computed: true, optional: true, required: false
  private _apSnifferBufsize?: number; 
  public get apSnifferBufsize() {
    return this.getNumberAttribute('ap_sniffer_bufsize');
  }
  public set apSnifferBufsize(value: number) {
    this._apSnifferBufsize = value;
  }
  public resetApSnifferBufsize() {
    this._apSnifferBufsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferBufsizeInput() {
    return this._apSnifferBufsize;
  }

  // ap_sniffer_chan - computed: true, optional: true, required: false
  private _apSnifferChan?: number; 
  public get apSnifferChan() {
    return this.getNumberAttribute('ap_sniffer_chan');
  }
  public set apSnifferChan(value: number) {
    this._apSnifferChan = value;
  }
  public resetApSnifferChan() {
    this._apSnifferChan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferChanInput() {
    return this._apSnifferChan;
  }

  // ap_sniffer_chan_width - computed: true, optional: true, required: false
  private _apSnifferChanWidth?: string; 
  public get apSnifferChanWidth() {
    return this.getStringAttribute('ap_sniffer_chan_width');
  }
  public set apSnifferChanWidth(value: string) {
    this._apSnifferChanWidth = value;
  }
  public resetApSnifferChanWidth() {
    this._apSnifferChanWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferChanWidthInput() {
    return this._apSnifferChanWidth;
  }

  // ap_sniffer_ctl - computed: true, optional: true, required: false
  private _apSnifferCtl?: string; 
  public get apSnifferCtl() {
    return this.getStringAttribute('ap_sniffer_ctl');
  }
  public set apSnifferCtl(value: string) {
    this._apSnifferCtl = value;
  }
  public resetApSnifferCtl() {
    this._apSnifferCtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferCtlInput() {
    return this._apSnifferCtl;
  }

  // ap_sniffer_data - computed: true, optional: true, required: false
  private _apSnifferData?: string; 
  public get apSnifferData() {
    return this.getStringAttribute('ap_sniffer_data');
  }
  public set apSnifferData(value: string) {
    this._apSnifferData = value;
  }
  public resetApSnifferData() {
    this._apSnifferData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferDataInput() {
    return this._apSnifferData;
  }

  // ap_sniffer_mgmt_beacon - computed: true, optional: true, required: false
  private _apSnifferMgmtBeacon?: string; 
  public get apSnifferMgmtBeacon() {
    return this.getStringAttribute('ap_sniffer_mgmt_beacon');
  }
  public set apSnifferMgmtBeacon(value: string) {
    this._apSnifferMgmtBeacon = value;
  }
  public resetApSnifferMgmtBeacon() {
    this._apSnifferMgmtBeacon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferMgmtBeaconInput() {
    return this._apSnifferMgmtBeacon;
  }

  // ap_sniffer_mgmt_other - computed: true, optional: true, required: false
  private _apSnifferMgmtOther?: string; 
  public get apSnifferMgmtOther() {
    return this.getStringAttribute('ap_sniffer_mgmt_other');
  }
  public set apSnifferMgmtOther(value: string) {
    this._apSnifferMgmtOther = value;
  }
  public resetApSnifferMgmtOther() {
    this._apSnifferMgmtOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferMgmtOtherInput() {
    return this._apSnifferMgmtOther;
  }

  // ap_sniffer_mgmt_probe - computed: true, optional: true, required: false
  private _apSnifferMgmtProbe?: string; 
  public get apSnifferMgmtProbe() {
    return this.getStringAttribute('ap_sniffer_mgmt_probe');
  }
  public set apSnifferMgmtProbe(value: string) {
    this._apSnifferMgmtProbe = value;
  }
  public resetApSnifferMgmtProbe() {
    this._apSnifferMgmtProbe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferMgmtProbeInput() {
    return this._apSnifferMgmtProbe;
  }

  // arrp_profile - computed: false, optional: true, required: false
  private _arrpProfile?: string; 
  public get arrpProfile() {
    return this.getStringAttribute('arrp_profile');
  }
  public set arrpProfile(value: string) {
    this._arrpProfile = value;
  }
  public resetArrpProfile() {
    this._arrpProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrpProfileInput() {
    return this._arrpProfile;
  }

  // auto_power_high - computed: true, optional: true, required: false
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

  // auto_power_level - computed: true, optional: true, required: false
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

  // auto_power_low - computed: true, optional: true, required: false
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

  // band - computed: false, optional: true, required: false
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

  // band_5g_type - computed: true, optional: true, required: false
  private _band5GType?: string; 
  public get band5GType() {
    return this.getStringAttribute('band_5g_type');
  }
  public set band5GType(value: string) {
    this._band5GType = value;
  }
  public resetBand5GType() {
    this._band5GType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get band5GTypeInput() {
    return this._band5GType;
  }

  // bandwidth_admission_control - computed: true, optional: true, required: false
  private _bandwidthAdmissionControl?: string; 
  public get bandwidthAdmissionControl() {
    return this.getStringAttribute('bandwidth_admission_control');
  }
  public set bandwidthAdmissionControl(value: string) {
    this._bandwidthAdmissionControl = value;
  }
  public resetBandwidthAdmissionControl() {
    this._bandwidthAdmissionControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthAdmissionControlInput() {
    return this._bandwidthAdmissionControl;
  }

  // bandwidth_capacity - computed: true, optional: true, required: false
  private _bandwidthCapacity?: number; 
  public get bandwidthCapacity() {
    return this.getNumberAttribute('bandwidth_capacity');
  }
  public set bandwidthCapacity(value: number) {
    this._bandwidthCapacity = value;
  }
  public resetBandwidthCapacity() {
    this._bandwidthCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthCapacityInput() {
    return this._bandwidthCapacity;
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

  // call_admission_control - computed: true, optional: true, required: false
  private _callAdmissionControl?: string; 
  public get callAdmissionControl() {
    return this.getStringAttribute('call_admission_control');
  }
  public set callAdmissionControl(value: string) {
    this._callAdmissionControl = value;
  }
  public resetCallAdmissionControl() {
    this._callAdmissionControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callAdmissionControlInput() {
    return this._callAdmissionControl;
  }

  // call_capacity - computed: true, optional: true, required: false
  private _callCapacity?: number; 
  public get callCapacity() {
    return this.getNumberAttribute('call_capacity');
  }
  public set callCapacity(value: number) {
    this._callCapacity = value;
  }
  public resetCallCapacity() {
    this._callCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callCapacityInput() {
    return this._callCapacity;
  }

  // channel_bonding - computed: true, optional: true, required: false
  private _channelBonding?: string; 
  public get channelBonding() {
    return this.getStringAttribute('channel_bonding');
  }
  public set channelBonding(value: string) {
    this._channelBonding = value;
  }
  public resetChannelBonding() {
    this._channelBonding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelBondingInput() {
    return this._channelBonding;
  }

  // channel_bonding_ext - computed: true, optional: true, required: false
  private _channelBondingExt?: string; 
  public get channelBondingExt() {
    return this.getStringAttribute('channel_bonding_ext');
  }
  public set channelBondingExt(value: string) {
    this._channelBondingExt = value;
  }
  public resetChannelBondingExt() {
    this._channelBondingExt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelBondingExtInput() {
    return this._channelBondingExt;
  }

  // channel_utilization - computed: true, optional: true, required: false
  private _channelUtilization?: string; 
  public get channelUtilization() {
    return this.getStringAttribute('channel_utilization');
  }
  public set channelUtilization(value: string) {
    this._channelUtilization = value;
  }
  public resetChannelUtilization() {
    this._channelUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelUtilizationInput() {
    return this._channelUtilization;
  }

  // coexistence - computed: true, optional: true, required: false
  private _coexistence?: string; 
  public get coexistence() {
    return this.getStringAttribute('coexistence');
  }
  public set coexistence(value: string) {
    this._coexistence = value;
  }
  public resetCoexistence() {
    this._coexistence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coexistenceInput() {
    return this._coexistence;
  }

  // darrp - computed: true, optional: true, required: false
  private _darrp?: string; 
  public get darrp() {
    return this.getStringAttribute('darrp');
  }
  public set darrp(value: string) {
    this._darrp = value;
  }
  public resetDarrp() {
    this._darrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darrpInput() {
    return this._darrp;
  }

  // drma - computed: true, optional: true, required: false
  private _drma?: string; 
  public get drma() {
    return this.getStringAttribute('drma');
  }
  public set drma(value: string) {
    this._drma = value;
  }
  public resetDrma() {
    this._drma = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drmaInput() {
    return this._drma;
  }

  // drma_sensitivity - computed: true, optional: true, required: false
  private _drmaSensitivity?: string; 
  public get drmaSensitivity() {
    return this.getStringAttribute('drma_sensitivity');
  }
  public set drmaSensitivity(value: string) {
    this._drmaSensitivity = value;
  }
  public resetDrmaSensitivity() {
    this._drmaSensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drmaSensitivityInput() {
    return this._drmaSensitivity;
  }

  // dtim - computed: true, optional: true, required: false
  private _dtim?: number; 
  public get dtim() {
    return this.getNumberAttribute('dtim');
  }
  public set dtim(value: number) {
    this._dtim = value;
  }
  public resetDtim() {
    this._dtim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtimInput() {
    return this._dtim;
  }

  // frag_threshold - computed: true, optional: true, required: false
  private _fragThreshold?: number; 
  public get fragThreshold() {
    return this.getNumberAttribute('frag_threshold');
  }
  public set fragThreshold(value: number) {
    this._fragThreshold = value;
  }
  public resetFragThreshold() {
    this._fragThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragThresholdInput() {
    return this._fragThreshold;
  }

  // frequency_handoff - computed: false, optional: true, required: false
  private _frequencyHandoff?: string; 
  public get frequencyHandoff() {
    return this.getStringAttribute('frequency_handoff');
  }
  public set frequencyHandoff(value: string) {
    this._frequencyHandoff = value;
  }
  public resetFrequencyHandoff() {
    this._frequencyHandoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyHandoffInput() {
    return this._frequencyHandoff;
  }

  // iperf_protocol - computed: true, optional: true, required: false
  private _iperfProtocol?: string; 
  public get iperfProtocol() {
    return this.getStringAttribute('iperf_protocol');
  }
  public set iperfProtocol(value: string) {
    this._iperfProtocol = value;
  }
  public resetIperfProtocol() {
    this._iperfProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iperfProtocolInput() {
    return this._iperfProtocol;
  }

  // iperf_server_port - computed: true, optional: true, required: false
  private _iperfServerPort?: number; 
  public get iperfServerPort() {
    return this.getNumberAttribute('iperf_server_port');
  }
  public set iperfServerPort(value: number) {
    this._iperfServerPort = value;
  }
  public resetIperfServerPort() {
    this._iperfServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iperfServerPortInput() {
    return this._iperfServerPort;
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

  // max_distance - computed: false, optional: true, required: false
  private _maxDistance?: number; 
  public get maxDistance() {
    return this.getNumberAttribute('max_distance');
  }
  public set maxDistance(value: number) {
    this._maxDistance = value;
  }
  public resetMaxDistance() {
    this._maxDistance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDistanceInput() {
    return this._maxDistance;
  }

  // mimo_mode - computed: true, optional: true, required: false
  private _mimoMode?: string; 
  public get mimoMode() {
    return this.getStringAttribute('mimo_mode');
  }
  public set mimoMode(value: string) {
    this._mimoMode = value;
  }
  public resetMimoMode() {
    this._mimoMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mimoModeInput() {
    return this._mimoMode;
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

  // n80211mc - computed: true, optional: true, required: false
  private _n80211Mc?: string; 
  public get n80211Mc() {
    return this.getStringAttribute('n80211mc');
  }
  public set n80211Mc(value: string) {
    this._n80211Mc = value;
  }
  public resetN80211Mc() {
    this._n80211Mc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get n80211McInput() {
    return this._n80211Mc;
  }

  // optional_antenna - computed: true, optional: true, required: false
  private _optionalAntenna?: string; 
  public get optionalAntenna() {
    return this.getStringAttribute('optional_antenna');
  }
  public set optionalAntenna(value: string) {
    this._optionalAntenna = value;
  }
  public resetOptionalAntenna() {
    this._optionalAntenna = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalAntennaInput() {
    return this._optionalAntenna;
  }

  // optional_antenna_gain - computed: true, optional: true, required: false
  private _optionalAntennaGain?: string; 
  public get optionalAntennaGain() {
    return this.getStringAttribute('optional_antenna_gain');
  }
  public set optionalAntennaGain(value: string) {
    this._optionalAntennaGain = value;
  }
  public resetOptionalAntennaGain() {
    this._optionalAntennaGain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalAntennaGainInput() {
    return this._optionalAntennaGain;
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

  // powersave_optimize - computed: false, optional: true, required: false
  private _powersaveOptimize?: string; 
  public get powersaveOptimize() {
    return this.getStringAttribute('powersave_optimize');
  }
  public set powersaveOptimize(value: string) {
    this._powersaveOptimize = value;
  }
  public resetPowersaveOptimize() {
    this._powersaveOptimize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powersaveOptimizeInput() {
    return this._powersaveOptimize;
  }

  // protection_mode - computed: true, optional: true, required: false
  private _protectionMode?: string; 
  public get protectionMode() {
    return this.getStringAttribute('protection_mode');
  }
  public set protectionMode(value: string) {
    this._protectionMode = value;
  }
  public resetProtectionMode() {
    this._protectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionModeInput() {
    return this._protectionMode;
  }

  // rts_threshold - computed: true, optional: true, required: false
  private _rtsThreshold?: number; 
  public get rtsThreshold() {
    return this.getNumberAttribute('rts_threshold');
  }
  public set rtsThreshold(value: number) {
    this._rtsThreshold = value;
  }
  public resetRtsThreshold() {
    this._rtsThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtsThresholdInput() {
    return this._rtsThreshold;
  }

  // sam_bssid - computed: true, optional: true, required: false
  private _samBssid?: string; 
  public get samBssid() {
    return this.getStringAttribute('sam_bssid');
  }
  public set samBssid(value: string) {
    this._samBssid = value;
  }
  public resetSamBssid() {
    this._samBssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samBssidInput() {
    return this._samBssid;
  }

  // sam_ca_certificate - computed: false, optional: true, required: false
  private _samCaCertificate?: string; 
  public get samCaCertificate() {
    return this.getStringAttribute('sam_ca_certificate');
  }
  public set samCaCertificate(value: string) {
    this._samCaCertificate = value;
  }
  public resetSamCaCertificate() {
    this._samCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samCaCertificateInput() {
    return this._samCaCertificate;
  }

  // sam_captive_portal - computed: true, optional: true, required: false
  private _samCaptivePortal?: string; 
  public get samCaptivePortal() {
    return this.getStringAttribute('sam_captive_portal');
  }
  public set samCaptivePortal(value: string) {
    this._samCaptivePortal = value;
  }
  public resetSamCaptivePortal() {
    this._samCaptivePortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samCaptivePortalInput() {
    return this._samCaptivePortal;
  }

  // sam_client_certificate - computed: false, optional: true, required: false
  private _samClientCertificate?: string; 
  public get samClientCertificate() {
    return this.getStringAttribute('sam_client_certificate');
  }
  public set samClientCertificate(value: string) {
    this._samClientCertificate = value;
  }
  public resetSamClientCertificate() {
    this._samClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samClientCertificateInput() {
    return this._samClientCertificate;
  }

  // sam_cwp_failure_string - computed: false, optional: true, required: false
  private _samCwpFailureString?: string; 
  public get samCwpFailureString() {
    return this.getStringAttribute('sam_cwp_failure_string');
  }
  public set samCwpFailureString(value: string) {
    this._samCwpFailureString = value;
  }
  public resetSamCwpFailureString() {
    this._samCwpFailureString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samCwpFailureStringInput() {
    return this._samCwpFailureString;
  }

  // sam_cwp_match_string - computed: false, optional: true, required: false
  private _samCwpMatchString?: string; 
  public get samCwpMatchString() {
    return this.getStringAttribute('sam_cwp_match_string');
  }
  public set samCwpMatchString(value: string) {
    this._samCwpMatchString = value;
  }
  public resetSamCwpMatchString() {
    this._samCwpMatchString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samCwpMatchStringInput() {
    return this._samCwpMatchString;
  }

  // sam_cwp_password - computed: false, optional: true, required: false
  private _samCwpPassword?: string; 
  public get samCwpPassword() {
    return this.getStringAttribute('sam_cwp_password');
  }
  public set samCwpPassword(value: string) {
    this._samCwpPassword = value;
  }
  public resetSamCwpPassword() {
    this._samCwpPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samCwpPasswordInput() {
    return this._samCwpPassword;
  }

  // sam_cwp_success_string - computed: false, optional: true, required: false
  private _samCwpSuccessString?: string; 
  public get samCwpSuccessString() {
    return this.getStringAttribute('sam_cwp_success_string');
  }
  public set samCwpSuccessString(value: string) {
    this._samCwpSuccessString = value;
  }
  public resetSamCwpSuccessString() {
    this._samCwpSuccessString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samCwpSuccessStringInput() {
    return this._samCwpSuccessString;
  }

  // sam_cwp_test_url - computed: false, optional: true, required: false
  private _samCwpTestUrl?: string; 
  public get samCwpTestUrl() {
    return this.getStringAttribute('sam_cwp_test_url');
  }
  public set samCwpTestUrl(value: string) {
    this._samCwpTestUrl = value;
  }
  public resetSamCwpTestUrl() {
    this._samCwpTestUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samCwpTestUrlInput() {
    return this._samCwpTestUrl;
  }

  // sam_cwp_username - computed: false, optional: true, required: false
  private _samCwpUsername?: string; 
  public get samCwpUsername() {
    return this.getStringAttribute('sam_cwp_username');
  }
  public set samCwpUsername(value: string) {
    this._samCwpUsername = value;
  }
  public resetSamCwpUsername() {
    this._samCwpUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samCwpUsernameInput() {
    return this._samCwpUsername;
  }

  // sam_eap_method - computed: true, optional: true, required: false
  private _samEapMethod?: string; 
  public get samEapMethod() {
    return this.getStringAttribute('sam_eap_method');
  }
  public set samEapMethod(value: string) {
    this._samEapMethod = value;
  }
  public resetSamEapMethod() {
    this._samEapMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samEapMethodInput() {
    return this._samEapMethod;
  }

  // sam_password - computed: false, optional: true, required: false
  private _samPassword?: string; 
  public get samPassword() {
    return this.getStringAttribute('sam_password');
  }
  public set samPassword(value: string) {
    this._samPassword = value;
  }
  public resetSamPassword() {
    this._samPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samPasswordInput() {
    return this._samPassword;
  }

  // sam_private_key - computed: false, optional: true, required: false
  private _samPrivateKey?: string; 
  public get samPrivateKey() {
    return this.getStringAttribute('sam_private_key');
  }
  public set samPrivateKey(value: string) {
    this._samPrivateKey = value;
  }
  public resetSamPrivateKey() {
    this._samPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samPrivateKeyInput() {
    return this._samPrivateKey;
  }

  // sam_private_key_password - computed: false, optional: true, required: false
  private _samPrivateKeyPassword?: string; 
  public get samPrivateKeyPassword() {
    return this.getStringAttribute('sam_private_key_password');
  }
  public set samPrivateKeyPassword(value: string) {
    this._samPrivateKeyPassword = value;
  }
  public resetSamPrivateKeyPassword() {
    this._samPrivateKeyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samPrivateKeyPasswordInput() {
    return this._samPrivateKeyPassword;
  }

  // sam_report_intv - computed: false, optional: true, required: false
  private _samReportIntv?: number; 
  public get samReportIntv() {
    return this.getNumberAttribute('sam_report_intv');
  }
  public set samReportIntv(value: number) {
    this._samReportIntv = value;
  }
  public resetSamReportIntv() {
    this._samReportIntv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samReportIntvInput() {
    return this._samReportIntv;
  }

  // sam_security_type - computed: true, optional: true, required: false
  private _samSecurityType?: string; 
  public get samSecurityType() {
    return this.getStringAttribute('sam_security_type');
  }
  public set samSecurityType(value: string) {
    this._samSecurityType = value;
  }
  public resetSamSecurityType() {
    this._samSecurityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samSecurityTypeInput() {
    return this._samSecurityType;
  }

  // sam_server_fqdn - computed: false, optional: true, required: false
  private _samServerFqdn?: string; 
  public get samServerFqdn() {
    return this.getStringAttribute('sam_server_fqdn');
  }
  public set samServerFqdn(value: string) {
    this._samServerFqdn = value;
  }
  public resetSamServerFqdn() {
    this._samServerFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samServerFqdnInput() {
    return this._samServerFqdn;
  }

  // sam_server_ip - computed: true, optional: true, required: false
  private _samServerIp?: string; 
  public get samServerIp() {
    return this.getStringAttribute('sam_server_ip');
  }
  public set samServerIp(value: string) {
    this._samServerIp = value;
  }
  public resetSamServerIp() {
    this._samServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samServerIpInput() {
    return this._samServerIp;
  }

  // sam_server_type - computed: true, optional: true, required: false
  private _samServerType?: string; 
  public get samServerType() {
    return this.getStringAttribute('sam_server_type');
  }
  public set samServerType(value: string) {
    this._samServerType = value;
  }
  public resetSamServerType() {
    this._samServerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samServerTypeInput() {
    return this._samServerType;
  }

  // sam_ssid - computed: false, optional: true, required: false
  private _samSsid?: string; 
  public get samSsid() {
    return this.getStringAttribute('sam_ssid');
  }
  public set samSsid(value: string) {
    this._samSsid = value;
  }
  public resetSamSsid() {
    this._samSsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samSsidInput() {
    return this._samSsid;
  }

  // sam_test - computed: true, optional: true, required: false
  private _samTest?: string; 
  public get samTest() {
    return this.getStringAttribute('sam_test');
  }
  public set samTest(value: string) {
    this._samTest = value;
  }
  public resetSamTest() {
    this._samTest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samTestInput() {
    return this._samTest;
  }

  // sam_username - computed: false, optional: true, required: false
  private _samUsername?: string; 
  public get samUsername() {
    return this.getStringAttribute('sam_username');
  }
  public set samUsername(value: string) {
    this._samUsername = value;
  }
  public resetSamUsername() {
    this._samUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samUsernameInput() {
    return this._samUsername;
  }

  // short_guard_interval - computed: true, optional: true, required: false
  private _shortGuardInterval?: string; 
  public get shortGuardInterval() {
    return this.getStringAttribute('short_guard_interval');
  }
  public set shortGuardInterval(value: string) {
    this._shortGuardInterval = value;
  }
  public resetShortGuardInterval() {
    this._shortGuardInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortGuardIntervalInput() {
    return this._shortGuardInterval;
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

  // transmit_optimize - computed: true, optional: true, required: false
  private _transmitOptimize?: string; 
  public get transmitOptimize() {
    return this.getStringAttribute('transmit_optimize');
  }
  public set transmitOptimize(value: string) {
    this._transmitOptimize = value;
  }
  public resetTransmitOptimize() {
    this._transmitOptimize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitOptimizeInput() {
    return this._transmitOptimize;
  }

  // vap_all - computed: true, optional: true, required: false
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

  // wids_profile - computed: false, optional: true, required: false
  private _widsProfile?: string; 
  public get widsProfile() {
    return this.getStringAttribute('wids_profile');
  }
  public set widsProfile(value: string) {
    this._widsProfile = value;
  }
  public resetWidsProfile() {
    this._widsProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widsProfileInput() {
    return this._widsProfile;
  }

  // zero_wait_dfs - computed: true, optional: true, required: false
  private _zeroWaitDfs?: string; 
  public get zeroWaitDfs() {
    return this.getStringAttribute('zero_wait_dfs');
  }
  public set zeroWaitDfs(value: string) {
    this._zeroWaitDfs = value;
  }
  public resetZeroWaitDfs() {
    this._zeroWaitDfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroWaitDfsInput() {
    return this._zeroWaitDfs;
  }

  // channel - computed: false, optional: true, required: false
  private _channel = new WirelesscontrollerWtpprofileRadio3ChannelList(this, "channel", true);
  public get channel() {
    return this._channel;
  }
  public putChannel(value: WirelesscontrollerWtpprofileRadio3Channel[] | cdktf.IResolvable) {
    this._channel.internalValue = value;
  }
  public resetChannel() {
    this._channel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel.internalValue;
  }

  // vaps - computed: false, optional: true, required: false
  private _vaps = new WirelesscontrollerWtpprofileRadio3VapsList(this, "vaps", true);
  public get vaps() {
    return this._vaps;
  }
  public putVaps(value: WirelesscontrollerWtpprofileRadio3Vaps[] | cdktf.IResolvable) {
    this._vaps.internalValue = value;
  }
  public resetVaps() {
    this._vaps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vapsInput() {
    return this._vaps.internalValue;
  }
}
export interface WirelesscontrollerWtpprofileRadio4Channel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#chan WirelesscontrollerWtpprofile#chan}
  */
  readonly chan?: string;
}

export function wirelesscontrollerWtpprofileRadio4ChannelToTerraform(struct?: WirelesscontrollerWtpprofileRadio4Channel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chan: cdktf.stringToTerraform(struct!.chan),
  }
}


export function wirelesscontrollerWtpprofileRadio4ChannelToHclTerraform(struct?: WirelesscontrollerWtpprofileRadio4Channel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chan: {
      value: cdktf.stringToHclTerraform(struct!.chan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerWtpprofileRadio4ChannelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelesscontrollerWtpprofileRadio4Channel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chan !== undefined) {
      hasAnyValues = true;
      internalValueResult.chan = this._chan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerWtpprofileRadio4Channel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chan = value.chan;
    }
  }

  // chan - computed: false, optional: true, required: false
  private _chan?: string; 
  public get chan() {
    return this.getStringAttribute('chan');
  }
  public set chan(value: string) {
    this._chan = value;
  }
  public resetChan() {
    this._chan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chanInput() {
    return this._chan;
  }
}

export class WirelesscontrollerWtpprofileRadio4ChannelList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerWtpprofileRadio4Channel[] | cdktf.IResolvable

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
  public get(index: number): WirelesscontrollerWtpprofileRadio4ChannelOutputReference {
    return new WirelesscontrollerWtpprofileRadio4ChannelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelesscontrollerWtpprofileRadio4Vaps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#name WirelesscontrollerWtpprofile#name}
  */
  readonly name?: string;
}

export function wirelesscontrollerWtpprofileRadio4VapsToTerraform(struct?: WirelesscontrollerWtpprofileRadio4Vaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function wirelesscontrollerWtpprofileRadio4VapsToHclTerraform(struct?: WirelesscontrollerWtpprofileRadio4Vaps | cdktf.IResolvable): any {
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

export class WirelesscontrollerWtpprofileRadio4VapsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelesscontrollerWtpprofileRadio4Vaps | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WirelesscontrollerWtpprofileRadio4Vaps | cdktf.IResolvable | undefined) {
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

export class WirelesscontrollerWtpprofileRadio4VapsList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerWtpprofileRadio4Vaps[] | cdktf.IResolvable

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
  public get(index: number): WirelesscontrollerWtpprofileRadio4VapsOutputReference {
    return new WirelesscontrollerWtpprofileRadio4VapsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelesscontrollerWtpprofileRadio4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#airtime_fairness WirelesscontrollerWtpprofile#airtime_fairness}
  */
  readonly airtimeFairness?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#amsdu WirelesscontrollerWtpprofile#amsdu}
  */
  readonly amsdu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ap_handoff WirelesscontrollerWtpprofile#ap_handoff}
  */
  readonly apHandoff?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ap_sniffer_addr WirelesscontrollerWtpprofile#ap_sniffer_addr}
  */
  readonly apSnifferAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ap_sniffer_bufsize WirelesscontrollerWtpprofile#ap_sniffer_bufsize}
  */
  readonly apSnifferBufsize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ap_sniffer_chan WirelesscontrollerWtpprofile#ap_sniffer_chan}
  */
  readonly apSnifferChan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ap_sniffer_chan_width WirelesscontrollerWtpprofile#ap_sniffer_chan_width}
  */
  readonly apSnifferChanWidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ap_sniffer_ctl WirelesscontrollerWtpprofile#ap_sniffer_ctl}
  */
  readonly apSnifferCtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ap_sniffer_data WirelesscontrollerWtpprofile#ap_sniffer_data}
  */
  readonly apSnifferData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ap_sniffer_mgmt_beacon WirelesscontrollerWtpprofile#ap_sniffer_mgmt_beacon}
  */
  readonly apSnifferMgmtBeacon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ap_sniffer_mgmt_other WirelesscontrollerWtpprofile#ap_sniffer_mgmt_other}
  */
  readonly apSnifferMgmtOther?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#ap_sniffer_mgmt_probe WirelesscontrollerWtpprofile#ap_sniffer_mgmt_probe}
  */
  readonly apSnifferMgmtProbe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#arrp_profile WirelesscontrollerWtpprofile#arrp_profile}
  */
  readonly arrpProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#auto_power_high WirelesscontrollerWtpprofile#auto_power_high}
  */
  readonly autoPowerHigh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#auto_power_level WirelesscontrollerWtpprofile#auto_power_level}
  */
  readonly autoPowerLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#auto_power_low WirelesscontrollerWtpprofile#auto_power_low}
  */
  readonly autoPowerLow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#auto_power_target WirelesscontrollerWtpprofile#auto_power_target}
  */
  readonly autoPowerTarget?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#band WirelesscontrollerWtpprofile#band}
  */
  readonly band?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#band_5g_type WirelesscontrollerWtpprofile#band_5g_type}
  */
  readonly band5GType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#bandwidth_admission_control WirelesscontrollerWtpprofile#bandwidth_admission_control}
  */
  readonly bandwidthAdmissionControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#bandwidth_capacity WirelesscontrollerWtpprofile#bandwidth_capacity}
  */
  readonly bandwidthCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#beacon_interval WirelesscontrollerWtpprofile#beacon_interval}
  */
  readonly beaconInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#bss_color WirelesscontrollerWtpprofile#bss_color}
  */
  readonly bssColor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#bss_color_mode WirelesscontrollerWtpprofile#bss_color_mode}
  */
  readonly bssColorMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#call_admission_control WirelesscontrollerWtpprofile#call_admission_control}
  */
  readonly callAdmissionControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#call_capacity WirelesscontrollerWtpprofile#call_capacity}
  */
  readonly callCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#channel_bonding WirelesscontrollerWtpprofile#channel_bonding}
  */
  readonly channelBonding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#channel_bonding_ext WirelesscontrollerWtpprofile#channel_bonding_ext}
  */
  readonly channelBondingExt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#channel_utilization WirelesscontrollerWtpprofile#channel_utilization}
  */
  readonly channelUtilization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#coexistence WirelesscontrollerWtpprofile#coexistence}
  */
  readonly coexistence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#darrp WirelesscontrollerWtpprofile#darrp}
  */
  readonly darrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#drma WirelesscontrollerWtpprofile#drma}
  */
  readonly drma?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#drma_sensitivity WirelesscontrollerWtpprofile#drma_sensitivity}
  */
  readonly drmaSensitivity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#dtim WirelesscontrollerWtpprofile#dtim}
  */
  readonly dtim?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#frag_threshold WirelesscontrollerWtpprofile#frag_threshold}
  */
  readonly fragThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#frequency_handoff WirelesscontrollerWtpprofile#frequency_handoff}
  */
  readonly frequencyHandoff?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#iperf_protocol WirelesscontrollerWtpprofile#iperf_protocol}
  */
  readonly iperfProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#iperf_server_port WirelesscontrollerWtpprofile#iperf_server_port}
  */
  readonly iperfServerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#max_clients WirelesscontrollerWtpprofile#max_clients}
  */
  readonly maxClients?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#max_distance WirelesscontrollerWtpprofile#max_distance}
  */
  readonly maxDistance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#mimo_mode WirelesscontrollerWtpprofile#mimo_mode}
  */
  readonly mimoMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#mode WirelesscontrollerWtpprofile#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#n80211d WirelesscontrollerWtpprofile#n80211d}
  */
  readonly n80211D?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#n80211mc WirelesscontrollerWtpprofile#n80211mc}
  */
  readonly n80211Mc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#optional_antenna WirelesscontrollerWtpprofile#optional_antenna}
  */
  readonly optionalAntenna?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#optional_antenna_gain WirelesscontrollerWtpprofile#optional_antenna_gain}
  */
  readonly optionalAntennaGain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#power_level WirelesscontrollerWtpprofile#power_level}
  */
  readonly powerLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#power_mode WirelesscontrollerWtpprofile#power_mode}
  */
  readonly powerMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#power_value WirelesscontrollerWtpprofile#power_value}
  */
  readonly powerValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#powersave_optimize WirelesscontrollerWtpprofile#powersave_optimize}
  */
  readonly powersaveOptimize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#protection_mode WirelesscontrollerWtpprofile#protection_mode}
  */
  readonly protectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#rts_threshold WirelesscontrollerWtpprofile#rts_threshold}
  */
  readonly rtsThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_bssid WirelesscontrollerWtpprofile#sam_bssid}
  */
  readonly samBssid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_ca_certificate WirelesscontrollerWtpprofile#sam_ca_certificate}
  */
  readonly samCaCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_captive_portal WirelesscontrollerWtpprofile#sam_captive_portal}
  */
  readonly samCaptivePortal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_client_certificate WirelesscontrollerWtpprofile#sam_client_certificate}
  */
  readonly samClientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_cwp_failure_string WirelesscontrollerWtpprofile#sam_cwp_failure_string}
  */
  readonly samCwpFailureString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_cwp_match_string WirelesscontrollerWtpprofile#sam_cwp_match_string}
  */
  readonly samCwpMatchString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_cwp_password WirelesscontrollerWtpprofile#sam_cwp_password}
  */
  readonly samCwpPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_cwp_success_string WirelesscontrollerWtpprofile#sam_cwp_success_string}
  */
  readonly samCwpSuccessString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_cwp_test_url WirelesscontrollerWtpprofile#sam_cwp_test_url}
  */
  readonly samCwpTestUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_cwp_username WirelesscontrollerWtpprofile#sam_cwp_username}
  */
  readonly samCwpUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_eap_method WirelesscontrollerWtpprofile#sam_eap_method}
  */
  readonly samEapMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_password WirelesscontrollerWtpprofile#sam_password}
  */
  readonly samPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_private_key WirelesscontrollerWtpprofile#sam_private_key}
  */
  readonly samPrivateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_private_key_password WirelesscontrollerWtpprofile#sam_private_key_password}
  */
  readonly samPrivateKeyPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_report_intv WirelesscontrollerWtpprofile#sam_report_intv}
  */
  readonly samReportIntv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_security_type WirelesscontrollerWtpprofile#sam_security_type}
  */
  readonly samSecurityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_server_fqdn WirelesscontrollerWtpprofile#sam_server_fqdn}
  */
  readonly samServerFqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_server_ip WirelesscontrollerWtpprofile#sam_server_ip}
  */
  readonly samServerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_server_type WirelesscontrollerWtpprofile#sam_server_type}
  */
  readonly samServerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_ssid WirelesscontrollerWtpprofile#sam_ssid}
  */
  readonly samSsid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_test WirelesscontrollerWtpprofile#sam_test}
  */
  readonly samTest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#sam_username WirelesscontrollerWtpprofile#sam_username}
  */
  readonly samUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#short_guard_interval WirelesscontrollerWtpprofile#short_guard_interval}
  */
  readonly shortGuardInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#spectrum_analysis WirelesscontrollerWtpprofile#spectrum_analysis}
  */
  readonly spectrumAnalysis?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#transmit_optimize WirelesscontrollerWtpprofile#transmit_optimize}
  */
  readonly transmitOptimize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#vap_all WirelesscontrollerWtpprofile#vap_all}
  */
  readonly vapAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#wids_profile WirelesscontrollerWtpprofile#wids_profile}
  */
  readonly widsProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#zero_wait_dfs WirelesscontrollerWtpprofile#zero_wait_dfs}
  */
  readonly zeroWaitDfs?: string;
  /**
  * channel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#channel WirelesscontrollerWtpprofile#channel}
  */
  readonly channel?: WirelesscontrollerWtpprofileRadio4Channel[] | cdktf.IResolvable;
  /**
  * vaps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#vaps WirelesscontrollerWtpprofile#vaps}
  */
  readonly vaps?: WirelesscontrollerWtpprofileRadio4Vaps[] | cdktf.IResolvable;
}

export function wirelesscontrollerWtpprofileRadio4ToTerraform(struct?: WirelesscontrollerWtpprofileRadio4OutputReference | WirelesscontrollerWtpprofileRadio4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    airtime_fairness: cdktf.stringToTerraform(struct!.airtimeFairness),
    amsdu: cdktf.stringToTerraform(struct!.amsdu),
    ap_handoff: cdktf.stringToTerraform(struct!.apHandoff),
    ap_sniffer_addr: cdktf.stringToTerraform(struct!.apSnifferAddr),
    ap_sniffer_bufsize: cdktf.numberToTerraform(struct!.apSnifferBufsize),
    ap_sniffer_chan: cdktf.numberToTerraform(struct!.apSnifferChan),
    ap_sniffer_chan_width: cdktf.stringToTerraform(struct!.apSnifferChanWidth),
    ap_sniffer_ctl: cdktf.stringToTerraform(struct!.apSnifferCtl),
    ap_sniffer_data: cdktf.stringToTerraform(struct!.apSnifferData),
    ap_sniffer_mgmt_beacon: cdktf.stringToTerraform(struct!.apSnifferMgmtBeacon),
    ap_sniffer_mgmt_other: cdktf.stringToTerraform(struct!.apSnifferMgmtOther),
    ap_sniffer_mgmt_probe: cdktf.stringToTerraform(struct!.apSnifferMgmtProbe),
    arrp_profile: cdktf.stringToTerraform(struct!.arrpProfile),
    auto_power_high: cdktf.numberToTerraform(struct!.autoPowerHigh),
    auto_power_level: cdktf.stringToTerraform(struct!.autoPowerLevel),
    auto_power_low: cdktf.numberToTerraform(struct!.autoPowerLow),
    auto_power_target: cdktf.stringToTerraform(struct!.autoPowerTarget),
    band: cdktf.stringToTerraform(struct!.band),
    band_5g_type: cdktf.stringToTerraform(struct!.band5GType),
    bandwidth_admission_control: cdktf.stringToTerraform(struct!.bandwidthAdmissionControl),
    bandwidth_capacity: cdktf.numberToTerraform(struct!.bandwidthCapacity),
    beacon_interval: cdktf.numberToTerraform(struct!.beaconInterval),
    bss_color: cdktf.numberToTerraform(struct!.bssColor),
    bss_color_mode: cdktf.stringToTerraform(struct!.bssColorMode),
    call_admission_control: cdktf.stringToTerraform(struct!.callAdmissionControl),
    call_capacity: cdktf.numberToTerraform(struct!.callCapacity),
    channel_bonding: cdktf.stringToTerraform(struct!.channelBonding),
    channel_bonding_ext: cdktf.stringToTerraform(struct!.channelBondingExt),
    channel_utilization: cdktf.stringToTerraform(struct!.channelUtilization),
    coexistence: cdktf.stringToTerraform(struct!.coexistence),
    darrp: cdktf.stringToTerraform(struct!.darrp),
    drma: cdktf.stringToTerraform(struct!.drma),
    drma_sensitivity: cdktf.stringToTerraform(struct!.drmaSensitivity),
    dtim: cdktf.numberToTerraform(struct!.dtim),
    frag_threshold: cdktf.numberToTerraform(struct!.fragThreshold),
    frequency_handoff: cdktf.stringToTerraform(struct!.frequencyHandoff),
    iperf_protocol: cdktf.stringToTerraform(struct!.iperfProtocol),
    iperf_server_port: cdktf.numberToTerraform(struct!.iperfServerPort),
    max_clients: cdktf.numberToTerraform(struct!.maxClients),
    max_distance: cdktf.numberToTerraform(struct!.maxDistance),
    mimo_mode: cdktf.stringToTerraform(struct!.mimoMode),
    mode: cdktf.stringToTerraform(struct!.mode),
    n80211d: cdktf.stringToTerraform(struct!.n80211D),
    n80211mc: cdktf.stringToTerraform(struct!.n80211Mc),
    optional_antenna: cdktf.stringToTerraform(struct!.optionalAntenna),
    optional_antenna_gain: cdktf.stringToTerraform(struct!.optionalAntennaGain),
    power_level: cdktf.numberToTerraform(struct!.powerLevel),
    power_mode: cdktf.stringToTerraform(struct!.powerMode),
    power_value: cdktf.numberToTerraform(struct!.powerValue),
    powersave_optimize: cdktf.stringToTerraform(struct!.powersaveOptimize),
    protection_mode: cdktf.stringToTerraform(struct!.protectionMode),
    rts_threshold: cdktf.numberToTerraform(struct!.rtsThreshold),
    sam_bssid: cdktf.stringToTerraform(struct!.samBssid),
    sam_ca_certificate: cdktf.stringToTerraform(struct!.samCaCertificate),
    sam_captive_portal: cdktf.stringToTerraform(struct!.samCaptivePortal),
    sam_client_certificate: cdktf.stringToTerraform(struct!.samClientCertificate),
    sam_cwp_failure_string: cdktf.stringToTerraform(struct!.samCwpFailureString),
    sam_cwp_match_string: cdktf.stringToTerraform(struct!.samCwpMatchString),
    sam_cwp_password: cdktf.stringToTerraform(struct!.samCwpPassword),
    sam_cwp_success_string: cdktf.stringToTerraform(struct!.samCwpSuccessString),
    sam_cwp_test_url: cdktf.stringToTerraform(struct!.samCwpTestUrl),
    sam_cwp_username: cdktf.stringToTerraform(struct!.samCwpUsername),
    sam_eap_method: cdktf.stringToTerraform(struct!.samEapMethod),
    sam_password: cdktf.stringToTerraform(struct!.samPassword),
    sam_private_key: cdktf.stringToTerraform(struct!.samPrivateKey),
    sam_private_key_password: cdktf.stringToTerraform(struct!.samPrivateKeyPassword),
    sam_report_intv: cdktf.numberToTerraform(struct!.samReportIntv),
    sam_security_type: cdktf.stringToTerraform(struct!.samSecurityType),
    sam_server_fqdn: cdktf.stringToTerraform(struct!.samServerFqdn),
    sam_server_ip: cdktf.stringToTerraform(struct!.samServerIp),
    sam_server_type: cdktf.stringToTerraform(struct!.samServerType),
    sam_ssid: cdktf.stringToTerraform(struct!.samSsid),
    sam_test: cdktf.stringToTerraform(struct!.samTest),
    sam_username: cdktf.stringToTerraform(struct!.samUsername),
    short_guard_interval: cdktf.stringToTerraform(struct!.shortGuardInterval),
    spectrum_analysis: cdktf.stringToTerraform(struct!.spectrumAnalysis),
    transmit_optimize: cdktf.stringToTerraform(struct!.transmitOptimize),
    vap_all: cdktf.stringToTerraform(struct!.vapAll),
    wids_profile: cdktf.stringToTerraform(struct!.widsProfile),
    zero_wait_dfs: cdktf.stringToTerraform(struct!.zeroWaitDfs),
    channel: cdktf.listMapper(wirelesscontrollerWtpprofileRadio4ChannelToTerraform, true)(struct!.channel),
    vaps: cdktf.listMapper(wirelesscontrollerWtpprofileRadio4VapsToTerraform, true)(struct!.vaps),
  }
}


export function wirelesscontrollerWtpprofileRadio4ToHclTerraform(struct?: WirelesscontrollerWtpprofileRadio4OutputReference | WirelesscontrollerWtpprofileRadio4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    airtime_fairness: {
      value: cdktf.stringToHclTerraform(struct!.airtimeFairness),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    amsdu: {
      value: cdktf.stringToHclTerraform(struct!.amsdu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ap_handoff: {
      value: cdktf.stringToHclTerraform(struct!.apHandoff),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ap_sniffer_addr: {
      value: cdktf.stringToHclTerraform(struct!.apSnifferAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ap_sniffer_bufsize: {
      value: cdktf.numberToHclTerraform(struct!.apSnifferBufsize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ap_sniffer_chan: {
      value: cdktf.numberToHclTerraform(struct!.apSnifferChan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ap_sniffer_chan_width: {
      value: cdktf.stringToHclTerraform(struct!.apSnifferChanWidth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ap_sniffer_ctl: {
      value: cdktf.stringToHclTerraform(struct!.apSnifferCtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ap_sniffer_data: {
      value: cdktf.stringToHclTerraform(struct!.apSnifferData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ap_sniffer_mgmt_beacon: {
      value: cdktf.stringToHclTerraform(struct!.apSnifferMgmtBeacon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ap_sniffer_mgmt_other: {
      value: cdktf.stringToHclTerraform(struct!.apSnifferMgmtOther),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ap_sniffer_mgmt_probe: {
      value: cdktf.stringToHclTerraform(struct!.apSnifferMgmtProbe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arrp_profile: {
      value: cdktf.stringToHclTerraform(struct!.arrpProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
      value: cdktf.stringToHclTerraform(struct!.band),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    band_5g_type: {
      value: cdktf.stringToHclTerraform(struct!.band5GType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth_admission_control: {
      value: cdktf.stringToHclTerraform(struct!.bandwidthAdmissionControl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth_capacity: {
      value: cdktf.numberToHclTerraform(struct!.bandwidthCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    call_admission_control: {
      value: cdktf.stringToHclTerraform(struct!.callAdmissionControl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    call_capacity: {
      value: cdktf.numberToHclTerraform(struct!.callCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    channel_bonding: {
      value: cdktf.stringToHclTerraform(struct!.channelBonding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel_bonding_ext: {
      value: cdktf.stringToHclTerraform(struct!.channelBondingExt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel_utilization: {
      value: cdktf.stringToHclTerraform(struct!.channelUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    coexistence: {
      value: cdktf.stringToHclTerraform(struct!.coexistence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    darrp: {
      value: cdktf.stringToHclTerraform(struct!.darrp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drma: {
      value: cdktf.stringToHclTerraform(struct!.drma),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drma_sensitivity: {
      value: cdktf.stringToHclTerraform(struct!.drmaSensitivity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dtim: {
      value: cdktf.numberToHclTerraform(struct!.dtim),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frag_threshold: {
      value: cdktf.numberToHclTerraform(struct!.fragThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frequency_handoff: {
      value: cdktf.stringToHclTerraform(struct!.frequencyHandoff),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iperf_protocol: {
      value: cdktf.stringToHclTerraform(struct!.iperfProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iperf_server_port: {
      value: cdktf.numberToHclTerraform(struct!.iperfServerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_clients: {
      value: cdktf.numberToHclTerraform(struct!.maxClients),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_distance: {
      value: cdktf.numberToHclTerraform(struct!.maxDistance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mimo_mode: {
      value: cdktf.stringToHclTerraform(struct!.mimoMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    n80211mc: {
      value: cdktf.stringToHclTerraform(struct!.n80211Mc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional_antenna: {
      value: cdktf.stringToHclTerraform(struct!.optionalAntenna),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional_antenna_gain: {
      value: cdktf.stringToHclTerraform(struct!.optionalAntennaGain),
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
    powersave_optimize: {
      value: cdktf.stringToHclTerraform(struct!.powersaveOptimize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protection_mode: {
      value: cdktf.stringToHclTerraform(struct!.protectionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rts_threshold: {
      value: cdktf.numberToHclTerraform(struct!.rtsThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sam_bssid: {
      value: cdktf.stringToHclTerraform(struct!.samBssid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.samCaCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_captive_portal: {
      value: cdktf.stringToHclTerraform(struct!.samCaptivePortal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.samClientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_cwp_failure_string: {
      value: cdktf.stringToHclTerraform(struct!.samCwpFailureString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_cwp_match_string: {
      value: cdktf.stringToHclTerraform(struct!.samCwpMatchString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_cwp_password: {
      value: cdktf.stringToHclTerraform(struct!.samCwpPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_cwp_success_string: {
      value: cdktf.stringToHclTerraform(struct!.samCwpSuccessString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_cwp_test_url: {
      value: cdktf.stringToHclTerraform(struct!.samCwpTestUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_cwp_username: {
      value: cdktf.stringToHclTerraform(struct!.samCwpUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_eap_method: {
      value: cdktf.stringToHclTerraform(struct!.samEapMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_password: {
      value: cdktf.stringToHclTerraform(struct!.samPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_private_key: {
      value: cdktf.stringToHclTerraform(struct!.samPrivateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_private_key_password: {
      value: cdktf.stringToHclTerraform(struct!.samPrivateKeyPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_report_intv: {
      value: cdktf.numberToHclTerraform(struct!.samReportIntv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sam_security_type: {
      value: cdktf.stringToHclTerraform(struct!.samSecurityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_server_fqdn: {
      value: cdktf.stringToHclTerraform(struct!.samServerFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_server_ip: {
      value: cdktf.stringToHclTerraform(struct!.samServerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_server_type: {
      value: cdktf.stringToHclTerraform(struct!.samServerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_ssid: {
      value: cdktf.stringToHclTerraform(struct!.samSsid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_test: {
      value: cdktf.stringToHclTerraform(struct!.samTest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_username: {
      value: cdktf.stringToHclTerraform(struct!.samUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    short_guard_interval: {
      value: cdktf.stringToHclTerraform(struct!.shortGuardInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spectrum_analysis: {
      value: cdktf.stringToHclTerraform(struct!.spectrumAnalysis),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transmit_optimize: {
      value: cdktf.stringToHclTerraform(struct!.transmitOptimize),
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
    wids_profile: {
      value: cdktf.stringToHclTerraform(struct!.widsProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zero_wait_dfs: {
      value: cdktf.stringToHclTerraform(struct!.zeroWaitDfs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel: {
      value: cdktf.listMapperHcl(wirelesscontrollerWtpprofileRadio4ChannelToHclTerraform, true)(struct!.channel),
      isBlock: true,
      type: "set",
      storageClassType: "WirelesscontrollerWtpprofileRadio4ChannelList",
    },
    vaps: {
      value: cdktf.listMapperHcl(wirelesscontrollerWtpprofileRadio4VapsToHclTerraform, true)(struct!.vaps),
      isBlock: true,
      type: "set",
      storageClassType: "WirelesscontrollerWtpprofileRadio4VapsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerWtpprofileRadio4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WirelesscontrollerWtpprofileRadio4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._airtimeFairness !== undefined) {
      hasAnyValues = true;
      internalValueResult.airtimeFairness = this._airtimeFairness;
    }
    if (this._amsdu !== undefined) {
      hasAnyValues = true;
      internalValueResult.amsdu = this._amsdu;
    }
    if (this._apHandoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.apHandoff = this._apHandoff;
    }
    if (this._apSnifferAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.apSnifferAddr = this._apSnifferAddr;
    }
    if (this._apSnifferBufsize !== undefined) {
      hasAnyValues = true;
      internalValueResult.apSnifferBufsize = this._apSnifferBufsize;
    }
    if (this._apSnifferChan !== undefined) {
      hasAnyValues = true;
      internalValueResult.apSnifferChan = this._apSnifferChan;
    }
    if (this._apSnifferChanWidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.apSnifferChanWidth = this._apSnifferChanWidth;
    }
    if (this._apSnifferCtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.apSnifferCtl = this._apSnifferCtl;
    }
    if (this._apSnifferData !== undefined) {
      hasAnyValues = true;
      internalValueResult.apSnifferData = this._apSnifferData;
    }
    if (this._apSnifferMgmtBeacon !== undefined) {
      hasAnyValues = true;
      internalValueResult.apSnifferMgmtBeacon = this._apSnifferMgmtBeacon;
    }
    if (this._apSnifferMgmtOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.apSnifferMgmtOther = this._apSnifferMgmtOther;
    }
    if (this._apSnifferMgmtProbe !== undefined) {
      hasAnyValues = true;
      internalValueResult.apSnifferMgmtProbe = this._apSnifferMgmtProbe;
    }
    if (this._arrpProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrpProfile = this._arrpProfile;
    }
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
    if (this._band5GType !== undefined) {
      hasAnyValues = true;
      internalValueResult.band5GType = this._band5GType;
    }
    if (this._bandwidthAdmissionControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthAdmissionControl = this._bandwidthAdmissionControl;
    }
    if (this._bandwidthCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthCapacity = this._bandwidthCapacity;
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
    if (this._callAdmissionControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.callAdmissionControl = this._callAdmissionControl;
    }
    if (this._callCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.callCapacity = this._callCapacity;
    }
    if (this._channelBonding !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelBonding = this._channelBonding;
    }
    if (this._channelBondingExt !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelBondingExt = this._channelBondingExt;
    }
    if (this._channelUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelUtilization = this._channelUtilization;
    }
    if (this._coexistence !== undefined) {
      hasAnyValues = true;
      internalValueResult.coexistence = this._coexistence;
    }
    if (this._darrp !== undefined) {
      hasAnyValues = true;
      internalValueResult.darrp = this._darrp;
    }
    if (this._drma !== undefined) {
      hasAnyValues = true;
      internalValueResult.drma = this._drma;
    }
    if (this._drmaSensitivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.drmaSensitivity = this._drmaSensitivity;
    }
    if (this._dtim !== undefined) {
      hasAnyValues = true;
      internalValueResult.dtim = this._dtim;
    }
    if (this._fragThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragThreshold = this._fragThreshold;
    }
    if (this._frequencyHandoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequencyHandoff = this._frequencyHandoff;
    }
    if (this._iperfProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.iperfProtocol = this._iperfProtocol;
    }
    if (this._iperfServerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.iperfServerPort = this._iperfServerPort;
    }
    if (this._maxClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxClients = this._maxClients;
    }
    if (this._maxDistance !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDistance = this._maxDistance;
    }
    if (this._mimoMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mimoMode = this._mimoMode;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._n80211D !== undefined) {
      hasAnyValues = true;
      internalValueResult.n80211D = this._n80211D;
    }
    if (this._n80211Mc !== undefined) {
      hasAnyValues = true;
      internalValueResult.n80211Mc = this._n80211Mc;
    }
    if (this._optionalAntenna !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionalAntenna = this._optionalAntenna;
    }
    if (this._optionalAntennaGain !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionalAntennaGain = this._optionalAntennaGain;
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
    if (this._powersaveOptimize !== undefined) {
      hasAnyValues = true;
      internalValueResult.powersaveOptimize = this._powersaveOptimize;
    }
    if (this._protectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectionMode = this._protectionMode;
    }
    if (this._rtsThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtsThreshold = this._rtsThreshold;
    }
    if (this._samBssid !== undefined) {
      hasAnyValues = true;
      internalValueResult.samBssid = this._samBssid;
    }
    if (this._samCaCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.samCaCertificate = this._samCaCertificate;
    }
    if (this._samCaptivePortal !== undefined) {
      hasAnyValues = true;
      internalValueResult.samCaptivePortal = this._samCaptivePortal;
    }
    if (this._samClientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.samClientCertificate = this._samClientCertificate;
    }
    if (this._samCwpFailureString !== undefined) {
      hasAnyValues = true;
      internalValueResult.samCwpFailureString = this._samCwpFailureString;
    }
    if (this._samCwpMatchString !== undefined) {
      hasAnyValues = true;
      internalValueResult.samCwpMatchString = this._samCwpMatchString;
    }
    if (this._samCwpPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.samCwpPassword = this._samCwpPassword;
    }
    if (this._samCwpSuccessString !== undefined) {
      hasAnyValues = true;
      internalValueResult.samCwpSuccessString = this._samCwpSuccessString;
    }
    if (this._samCwpTestUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.samCwpTestUrl = this._samCwpTestUrl;
    }
    if (this._samCwpUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.samCwpUsername = this._samCwpUsername;
    }
    if (this._samEapMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.samEapMethod = this._samEapMethod;
    }
    if (this._samPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.samPassword = this._samPassword;
    }
    if (this._samPrivateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.samPrivateKey = this._samPrivateKey;
    }
    if (this._samPrivateKeyPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.samPrivateKeyPassword = this._samPrivateKeyPassword;
    }
    if (this._samReportIntv !== undefined) {
      hasAnyValues = true;
      internalValueResult.samReportIntv = this._samReportIntv;
    }
    if (this._samSecurityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.samSecurityType = this._samSecurityType;
    }
    if (this._samServerFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.samServerFqdn = this._samServerFqdn;
    }
    if (this._samServerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.samServerIp = this._samServerIp;
    }
    if (this._samServerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.samServerType = this._samServerType;
    }
    if (this._samSsid !== undefined) {
      hasAnyValues = true;
      internalValueResult.samSsid = this._samSsid;
    }
    if (this._samTest !== undefined) {
      hasAnyValues = true;
      internalValueResult.samTest = this._samTest;
    }
    if (this._samUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.samUsername = this._samUsername;
    }
    if (this._shortGuardInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.shortGuardInterval = this._shortGuardInterval;
    }
    if (this._spectrumAnalysis !== undefined) {
      hasAnyValues = true;
      internalValueResult.spectrumAnalysis = this._spectrumAnalysis;
    }
    if (this._transmitOptimize !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitOptimize = this._transmitOptimize;
    }
    if (this._vapAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.vapAll = this._vapAll;
    }
    if (this._widsProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.widsProfile = this._widsProfile;
    }
    if (this._zeroWaitDfs !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeroWaitDfs = this._zeroWaitDfs;
    }
    if (this._channel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel?.internalValue;
    }
    if (this._vaps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaps = this._vaps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerWtpprofileRadio4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._airtimeFairness = undefined;
      this._amsdu = undefined;
      this._apHandoff = undefined;
      this._apSnifferAddr = undefined;
      this._apSnifferBufsize = undefined;
      this._apSnifferChan = undefined;
      this._apSnifferChanWidth = undefined;
      this._apSnifferCtl = undefined;
      this._apSnifferData = undefined;
      this._apSnifferMgmtBeacon = undefined;
      this._apSnifferMgmtOther = undefined;
      this._apSnifferMgmtProbe = undefined;
      this._arrpProfile = undefined;
      this._autoPowerHigh = undefined;
      this._autoPowerLevel = undefined;
      this._autoPowerLow = undefined;
      this._autoPowerTarget = undefined;
      this._band = undefined;
      this._band5GType = undefined;
      this._bandwidthAdmissionControl = undefined;
      this._bandwidthCapacity = undefined;
      this._beaconInterval = undefined;
      this._bssColor = undefined;
      this._bssColorMode = undefined;
      this._callAdmissionControl = undefined;
      this._callCapacity = undefined;
      this._channelBonding = undefined;
      this._channelBondingExt = undefined;
      this._channelUtilization = undefined;
      this._coexistence = undefined;
      this._darrp = undefined;
      this._drma = undefined;
      this._drmaSensitivity = undefined;
      this._dtim = undefined;
      this._fragThreshold = undefined;
      this._frequencyHandoff = undefined;
      this._iperfProtocol = undefined;
      this._iperfServerPort = undefined;
      this._maxClients = undefined;
      this._maxDistance = undefined;
      this._mimoMode = undefined;
      this._mode = undefined;
      this._n80211D = undefined;
      this._n80211Mc = undefined;
      this._optionalAntenna = undefined;
      this._optionalAntennaGain = undefined;
      this._powerLevel = undefined;
      this._powerMode = undefined;
      this._powerValue = undefined;
      this._powersaveOptimize = undefined;
      this._protectionMode = undefined;
      this._rtsThreshold = undefined;
      this._samBssid = undefined;
      this._samCaCertificate = undefined;
      this._samCaptivePortal = undefined;
      this._samClientCertificate = undefined;
      this._samCwpFailureString = undefined;
      this._samCwpMatchString = undefined;
      this._samCwpPassword = undefined;
      this._samCwpSuccessString = undefined;
      this._samCwpTestUrl = undefined;
      this._samCwpUsername = undefined;
      this._samEapMethod = undefined;
      this._samPassword = undefined;
      this._samPrivateKey = undefined;
      this._samPrivateKeyPassword = undefined;
      this._samReportIntv = undefined;
      this._samSecurityType = undefined;
      this._samServerFqdn = undefined;
      this._samServerIp = undefined;
      this._samServerType = undefined;
      this._samSsid = undefined;
      this._samTest = undefined;
      this._samUsername = undefined;
      this._shortGuardInterval = undefined;
      this._spectrumAnalysis = undefined;
      this._transmitOptimize = undefined;
      this._vapAll = undefined;
      this._widsProfile = undefined;
      this._zeroWaitDfs = undefined;
      this._channel.internalValue = undefined;
      this._vaps.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._airtimeFairness = value.airtimeFairness;
      this._amsdu = value.amsdu;
      this._apHandoff = value.apHandoff;
      this._apSnifferAddr = value.apSnifferAddr;
      this._apSnifferBufsize = value.apSnifferBufsize;
      this._apSnifferChan = value.apSnifferChan;
      this._apSnifferChanWidth = value.apSnifferChanWidth;
      this._apSnifferCtl = value.apSnifferCtl;
      this._apSnifferData = value.apSnifferData;
      this._apSnifferMgmtBeacon = value.apSnifferMgmtBeacon;
      this._apSnifferMgmtOther = value.apSnifferMgmtOther;
      this._apSnifferMgmtProbe = value.apSnifferMgmtProbe;
      this._arrpProfile = value.arrpProfile;
      this._autoPowerHigh = value.autoPowerHigh;
      this._autoPowerLevel = value.autoPowerLevel;
      this._autoPowerLow = value.autoPowerLow;
      this._autoPowerTarget = value.autoPowerTarget;
      this._band = value.band;
      this._band5GType = value.band5GType;
      this._bandwidthAdmissionControl = value.bandwidthAdmissionControl;
      this._bandwidthCapacity = value.bandwidthCapacity;
      this._beaconInterval = value.beaconInterval;
      this._bssColor = value.bssColor;
      this._bssColorMode = value.bssColorMode;
      this._callAdmissionControl = value.callAdmissionControl;
      this._callCapacity = value.callCapacity;
      this._channelBonding = value.channelBonding;
      this._channelBondingExt = value.channelBondingExt;
      this._channelUtilization = value.channelUtilization;
      this._coexistence = value.coexistence;
      this._darrp = value.darrp;
      this._drma = value.drma;
      this._drmaSensitivity = value.drmaSensitivity;
      this._dtim = value.dtim;
      this._fragThreshold = value.fragThreshold;
      this._frequencyHandoff = value.frequencyHandoff;
      this._iperfProtocol = value.iperfProtocol;
      this._iperfServerPort = value.iperfServerPort;
      this._maxClients = value.maxClients;
      this._maxDistance = value.maxDistance;
      this._mimoMode = value.mimoMode;
      this._mode = value.mode;
      this._n80211D = value.n80211D;
      this._n80211Mc = value.n80211Mc;
      this._optionalAntenna = value.optionalAntenna;
      this._optionalAntennaGain = value.optionalAntennaGain;
      this._powerLevel = value.powerLevel;
      this._powerMode = value.powerMode;
      this._powerValue = value.powerValue;
      this._powersaveOptimize = value.powersaveOptimize;
      this._protectionMode = value.protectionMode;
      this._rtsThreshold = value.rtsThreshold;
      this._samBssid = value.samBssid;
      this._samCaCertificate = value.samCaCertificate;
      this._samCaptivePortal = value.samCaptivePortal;
      this._samClientCertificate = value.samClientCertificate;
      this._samCwpFailureString = value.samCwpFailureString;
      this._samCwpMatchString = value.samCwpMatchString;
      this._samCwpPassword = value.samCwpPassword;
      this._samCwpSuccessString = value.samCwpSuccessString;
      this._samCwpTestUrl = value.samCwpTestUrl;
      this._samCwpUsername = value.samCwpUsername;
      this._samEapMethod = value.samEapMethod;
      this._samPassword = value.samPassword;
      this._samPrivateKey = value.samPrivateKey;
      this._samPrivateKeyPassword = value.samPrivateKeyPassword;
      this._samReportIntv = value.samReportIntv;
      this._samSecurityType = value.samSecurityType;
      this._samServerFqdn = value.samServerFqdn;
      this._samServerIp = value.samServerIp;
      this._samServerType = value.samServerType;
      this._samSsid = value.samSsid;
      this._samTest = value.samTest;
      this._samUsername = value.samUsername;
      this._shortGuardInterval = value.shortGuardInterval;
      this._spectrumAnalysis = value.spectrumAnalysis;
      this._transmitOptimize = value.transmitOptimize;
      this._vapAll = value.vapAll;
      this._widsProfile = value.widsProfile;
      this._zeroWaitDfs = value.zeroWaitDfs;
      this._channel.internalValue = value.channel;
      this._vaps.internalValue = value.vaps;
    }
  }

  // airtime_fairness - computed: true, optional: true, required: false
  private _airtimeFairness?: string; 
  public get airtimeFairness() {
    return this.getStringAttribute('airtime_fairness');
  }
  public set airtimeFairness(value: string) {
    this._airtimeFairness = value;
  }
  public resetAirtimeFairness() {
    this._airtimeFairness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get airtimeFairnessInput() {
    return this._airtimeFairness;
  }

  // amsdu - computed: true, optional: true, required: false
  private _amsdu?: string; 
  public get amsdu() {
    return this.getStringAttribute('amsdu');
  }
  public set amsdu(value: string) {
    this._amsdu = value;
  }
  public resetAmsdu() {
    this._amsdu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amsduInput() {
    return this._amsdu;
  }

  // ap_handoff - computed: false, optional: true, required: false
  private _apHandoff?: string; 
  public get apHandoff() {
    return this.getStringAttribute('ap_handoff');
  }
  public set apHandoff(value: string) {
    this._apHandoff = value;
  }
  public resetApHandoff() {
    this._apHandoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apHandoffInput() {
    return this._apHandoff;
  }

  // ap_sniffer_addr - computed: true, optional: true, required: false
  private _apSnifferAddr?: string; 
  public get apSnifferAddr() {
    return this.getStringAttribute('ap_sniffer_addr');
  }
  public set apSnifferAddr(value: string) {
    this._apSnifferAddr = value;
  }
  public resetApSnifferAddr() {
    this._apSnifferAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferAddrInput() {
    return this._apSnifferAddr;
  }

  // ap_sniffer_bufsize - computed: true, optional: true, required: false
  private _apSnifferBufsize?: number; 
  public get apSnifferBufsize() {
    return this.getNumberAttribute('ap_sniffer_bufsize');
  }
  public set apSnifferBufsize(value: number) {
    this._apSnifferBufsize = value;
  }
  public resetApSnifferBufsize() {
    this._apSnifferBufsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferBufsizeInput() {
    return this._apSnifferBufsize;
  }

  // ap_sniffer_chan - computed: true, optional: true, required: false
  private _apSnifferChan?: number; 
  public get apSnifferChan() {
    return this.getNumberAttribute('ap_sniffer_chan');
  }
  public set apSnifferChan(value: number) {
    this._apSnifferChan = value;
  }
  public resetApSnifferChan() {
    this._apSnifferChan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferChanInput() {
    return this._apSnifferChan;
  }

  // ap_sniffer_chan_width - computed: true, optional: true, required: false
  private _apSnifferChanWidth?: string; 
  public get apSnifferChanWidth() {
    return this.getStringAttribute('ap_sniffer_chan_width');
  }
  public set apSnifferChanWidth(value: string) {
    this._apSnifferChanWidth = value;
  }
  public resetApSnifferChanWidth() {
    this._apSnifferChanWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferChanWidthInput() {
    return this._apSnifferChanWidth;
  }

  // ap_sniffer_ctl - computed: true, optional: true, required: false
  private _apSnifferCtl?: string; 
  public get apSnifferCtl() {
    return this.getStringAttribute('ap_sniffer_ctl');
  }
  public set apSnifferCtl(value: string) {
    this._apSnifferCtl = value;
  }
  public resetApSnifferCtl() {
    this._apSnifferCtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferCtlInput() {
    return this._apSnifferCtl;
  }

  // ap_sniffer_data - computed: true, optional: true, required: false
  private _apSnifferData?: string; 
  public get apSnifferData() {
    return this.getStringAttribute('ap_sniffer_data');
  }
  public set apSnifferData(value: string) {
    this._apSnifferData = value;
  }
  public resetApSnifferData() {
    this._apSnifferData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferDataInput() {
    return this._apSnifferData;
  }

  // ap_sniffer_mgmt_beacon - computed: true, optional: true, required: false
  private _apSnifferMgmtBeacon?: string; 
  public get apSnifferMgmtBeacon() {
    return this.getStringAttribute('ap_sniffer_mgmt_beacon');
  }
  public set apSnifferMgmtBeacon(value: string) {
    this._apSnifferMgmtBeacon = value;
  }
  public resetApSnifferMgmtBeacon() {
    this._apSnifferMgmtBeacon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferMgmtBeaconInput() {
    return this._apSnifferMgmtBeacon;
  }

  // ap_sniffer_mgmt_other - computed: true, optional: true, required: false
  private _apSnifferMgmtOther?: string; 
  public get apSnifferMgmtOther() {
    return this.getStringAttribute('ap_sniffer_mgmt_other');
  }
  public set apSnifferMgmtOther(value: string) {
    this._apSnifferMgmtOther = value;
  }
  public resetApSnifferMgmtOther() {
    this._apSnifferMgmtOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferMgmtOtherInput() {
    return this._apSnifferMgmtOther;
  }

  // ap_sniffer_mgmt_probe - computed: true, optional: true, required: false
  private _apSnifferMgmtProbe?: string; 
  public get apSnifferMgmtProbe() {
    return this.getStringAttribute('ap_sniffer_mgmt_probe');
  }
  public set apSnifferMgmtProbe(value: string) {
    this._apSnifferMgmtProbe = value;
  }
  public resetApSnifferMgmtProbe() {
    this._apSnifferMgmtProbe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apSnifferMgmtProbeInput() {
    return this._apSnifferMgmtProbe;
  }

  // arrp_profile - computed: false, optional: true, required: false
  private _arrpProfile?: string; 
  public get arrpProfile() {
    return this.getStringAttribute('arrp_profile');
  }
  public set arrpProfile(value: string) {
    this._arrpProfile = value;
  }
  public resetArrpProfile() {
    this._arrpProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrpProfileInput() {
    return this._arrpProfile;
  }

  // auto_power_high - computed: true, optional: true, required: false
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

  // auto_power_level - computed: true, optional: true, required: false
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

  // auto_power_low - computed: true, optional: true, required: false
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

  // band - computed: false, optional: true, required: false
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

  // band_5g_type - computed: true, optional: true, required: false
  private _band5GType?: string; 
  public get band5GType() {
    return this.getStringAttribute('band_5g_type');
  }
  public set band5GType(value: string) {
    this._band5GType = value;
  }
  public resetBand5GType() {
    this._band5GType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get band5GTypeInput() {
    return this._band5GType;
  }

  // bandwidth_admission_control - computed: true, optional: true, required: false
  private _bandwidthAdmissionControl?: string; 
  public get bandwidthAdmissionControl() {
    return this.getStringAttribute('bandwidth_admission_control');
  }
  public set bandwidthAdmissionControl(value: string) {
    this._bandwidthAdmissionControl = value;
  }
  public resetBandwidthAdmissionControl() {
    this._bandwidthAdmissionControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthAdmissionControlInput() {
    return this._bandwidthAdmissionControl;
  }

  // bandwidth_capacity - computed: true, optional: true, required: false
  private _bandwidthCapacity?: number; 
  public get bandwidthCapacity() {
    return this.getNumberAttribute('bandwidth_capacity');
  }
  public set bandwidthCapacity(value: number) {
    this._bandwidthCapacity = value;
  }
  public resetBandwidthCapacity() {
    this._bandwidthCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthCapacityInput() {
    return this._bandwidthCapacity;
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

  // call_admission_control - computed: true, optional: true, required: false
  private _callAdmissionControl?: string; 
  public get callAdmissionControl() {
    return this.getStringAttribute('call_admission_control');
  }
  public set callAdmissionControl(value: string) {
    this._callAdmissionControl = value;
  }
  public resetCallAdmissionControl() {
    this._callAdmissionControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callAdmissionControlInput() {
    return this._callAdmissionControl;
  }

  // call_capacity - computed: true, optional: true, required: false
  private _callCapacity?: number; 
  public get callCapacity() {
    return this.getNumberAttribute('call_capacity');
  }
  public set callCapacity(value: number) {
    this._callCapacity = value;
  }
  public resetCallCapacity() {
    this._callCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callCapacityInput() {
    return this._callCapacity;
  }

  // channel_bonding - computed: true, optional: true, required: false
  private _channelBonding?: string; 
  public get channelBonding() {
    return this.getStringAttribute('channel_bonding');
  }
  public set channelBonding(value: string) {
    this._channelBonding = value;
  }
  public resetChannelBonding() {
    this._channelBonding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelBondingInput() {
    return this._channelBonding;
  }

  // channel_bonding_ext - computed: true, optional: true, required: false
  private _channelBondingExt?: string; 
  public get channelBondingExt() {
    return this.getStringAttribute('channel_bonding_ext');
  }
  public set channelBondingExt(value: string) {
    this._channelBondingExt = value;
  }
  public resetChannelBondingExt() {
    this._channelBondingExt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelBondingExtInput() {
    return this._channelBondingExt;
  }

  // channel_utilization - computed: true, optional: true, required: false
  private _channelUtilization?: string; 
  public get channelUtilization() {
    return this.getStringAttribute('channel_utilization');
  }
  public set channelUtilization(value: string) {
    this._channelUtilization = value;
  }
  public resetChannelUtilization() {
    this._channelUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelUtilizationInput() {
    return this._channelUtilization;
  }

  // coexistence - computed: true, optional: true, required: false
  private _coexistence?: string; 
  public get coexistence() {
    return this.getStringAttribute('coexistence');
  }
  public set coexistence(value: string) {
    this._coexistence = value;
  }
  public resetCoexistence() {
    this._coexistence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coexistenceInput() {
    return this._coexistence;
  }

  // darrp - computed: true, optional: true, required: false
  private _darrp?: string; 
  public get darrp() {
    return this.getStringAttribute('darrp');
  }
  public set darrp(value: string) {
    this._darrp = value;
  }
  public resetDarrp() {
    this._darrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darrpInput() {
    return this._darrp;
  }

  // drma - computed: true, optional: true, required: false
  private _drma?: string; 
  public get drma() {
    return this.getStringAttribute('drma');
  }
  public set drma(value: string) {
    this._drma = value;
  }
  public resetDrma() {
    this._drma = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drmaInput() {
    return this._drma;
  }

  // drma_sensitivity - computed: true, optional: true, required: false
  private _drmaSensitivity?: string; 
  public get drmaSensitivity() {
    return this.getStringAttribute('drma_sensitivity');
  }
  public set drmaSensitivity(value: string) {
    this._drmaSensitivity = value;
  }
  public resetDrmaSensitivity() {
    this._drmaSensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drmaSensitivityInput() {
    return this._drmaSensitivity;
  }

  // dtim - computed: true, optional: true, required: false
  private _dtim?: number; 
  public get dtim() {
    return this.getNumberAttribute('dtim');
  }
  public set dtim(value: number) {
    this._dtim = value;
  }
  public resetDtim() {
    this._dtim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtimInput() {
    return this._dtim;
  }

  // frag_threshold - computed: true, optional: true, required: false
  private _fragThreshold?: number; 
  public get fragThreshold() {
    return this.getNumberAttribute('frag_threshold');
  }
  public set fragThreshold(value: number) {
    this._fragThreshold = value;
  }
  public resetFragThreshold() {
    this._fragThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragThresholdInput() {
    return this._fragThreshold;
  }

  // frequency_handoff - computed: false, optional: true, required: false
  private _frequencyHandoff?: string; 
  public get frequencyHandoff() {
    return this.getStringAttribute('frequency_handoff');
  }
  public set frequencyHandoff(value: string) {
    this._frequencyHandoff = value;
  }
  public resetFrequencyHandoff() {
    this._frequencyHandoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyHandoffInput() {
    return this._frequencyHandoff;
  }

  // iperf_protocol - computed: true, optional: true, required: false
  private _iperfProtocol?: string; 
  public get iperfProtocol() {
    return this.getStringAttribute('iperf_protocol');
  }
  public set iperfProtocol(value: string) {
    this._iperfProtocol = value;
  }
  public resetIperfProtocol() {
    this._iperfProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iperfProtocolInput() {
    return this._iperfProtocol;
  }

  // iperf_server_port - computed: true, optional: true, required: false
  private _iperfServerPort?: number; 
  public get iperfServerPort() {
    return this.getNumberAttribute('iperf_server_port');
  }
  public set iperfServerPort(value: number) {
    this._iperfServerPort = value;
  }
  public resetIperfServerPort() {
    this._iperfServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iperfServerPortInput() {
    return this._iperfServerPort;
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

  // max_distance - computed: false, optional: true, required: false
  private _maxDistance?: number; 
  public get maxDistance() {
    return this.getNumberAttribute('max_distance');
  }
  public set maxDistance(value: number) {
    this._maxDistance = value;
  }
  public resetMaxDistance() {
    this._maxDistance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDistanceInput() {
    return this._maxDistance;
  }

  // mimo_mode - computed: true, optional: true, required: false
  private _mimoMode?: string; 
  public get mimoMode() {
    return this.getStringAttribute('mimo_mode');
  }
  public set mimoMode(value: string) {
    this._mimoMode = value;
  }
  public resetMimoMode() {
    this._mimoMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mimoModeInput() {
    return this._mimoMode;
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

  // n80211mc - computed: true, optional: true, required: false
  private _n80211Mc?: string; 
  public get n80211Mc() {
    return this.getStringAttribute('n80211mc');
  }
  public set n80211Mc(value: string) {
    this._n80211Mc = value;
  }
  public resetN80211Mc() {
    this._n80211Mc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get n80211McInput() {
    return this._n80211Mc;
  }

  // optional_antenna - computed: true, optional: true, required: false
  private _optionalAntenna?: string; 
  public get optionalAntenna() {
    return this.getStringAttribute('optional_antenna');
  }
  public set optionalAntenna(value: string) {
    this._optionalAntenna = value;
  }
  public resetOptionalAntenna() {
    this._optionalAntenna = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalAntennaInput() {
    return this._optionalAntenna;
  }

  // optional_antenna_gain - computed: true, optional: true, required: false
  private _optionalAntennaGain?: string; 
  public get optionalAntennaGain() {
    return this.getStringAttribute('optional_antenna_gain');
  }
  public set optionalAntennaGain(value: string) {
    this._optionalAntennaGain = value;
  }
  public resetOptionalAntennaGain() {
    this._optionalAntennaGain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalAntennaGainInput() {
    return this._optionalAntennaGain;
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

  // powersave_optimize - computed: false, optional: true, required: false
  private _powersaveOptimize?: string; 
  public get powersaveOptimize() {
    return this.getStringAttribute('powersave_optimize');
  }
  public set powersaveOptimize(value: string) {
    this._powersaveOptimize = value;
  }
  public resetPowersaveOptimize() {
    this._powersaveOptimize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powersaveOptimizeInput() {
    return this._powersaveOptimize;
  }

  // protection_mode - computed: true, optional: true, required: false
  private _protectionMode?: string; 
  public get protectionMode() {
    return this.getStringAttribute('protection_mode');
  }
  public set protectionMode(value: string) {
    this._protectionMode = value;
  }
  public resetProtectionMode() {
    this._protectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionModeInput() {
    return this._protectionMode;
  }

  // rts_threshold - computed: true, optional: true, required: false
  private _rtsThreshold?: number; 
  public get rtsThreshold() {
    return this.getNumberAttribute('rts_threshold');
  }
  public set rtsThreshold(value: number) {
    this._rtsThreshold = value;
  }
  public resetRtsThreshold() {
    this._rtsThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtsThresholdInput() {
    return this._rtsThreshold;
  }

  // sam_bssid - computed: true, optional: true, required: false
  private _samBssid?: string; 
  public get samBssid() {
    return this.getStringAttribute('sam_bssid');
  }
  public set samBssid(value: string) {
    this._samBssid = value;
  }
  public resetSamBssid() {
    this._samBssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samBssidInput() {
    return this._samBssid;
  }

  // sam_ca_certificate - computed: false, optional: true, required: false
  private _samCaCertificate?: string; 
  public get samCaCertificate() {
    return this.getStringAttribute('sam_ca_certificate');
  }
  public set samCaCertificate(value: string) {
    this._samCaCertificate = value;
  }
  public resetSamCaCertificate() {
    this._samCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samCaCertificateInput() {
    return this._samCaCertificate;
  }

  // sam_captive_portal - computed: true, optional: true, required: false
  private _samCaptivePortal?: string; 
  public get samCaptivePortal() {
    return this.getStringAttribute('sam_captive_portal');
  }
  public set samCaptivePortal(value: string) {
    this._samCaptivePortal = value;
  }
  public resetSamCaptivePortal() {
    this._samCaptivePortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samCaptivePortalInput() {
    return this._samCaptivePortal;
  }

  // sam_client_certificate - computed: false, optional: true, required: false
  private _samClientCertificate?: string; 
  public get samClientCertificate() {
    return this.getStringAttribute('sam_client_certificate');
  }
  public set samClientCertificate(value: string) {
    this._samClientCertificate = value;
  }
  public resetSamClientCertificate() {
    this._samClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samClientCertificateInput() {
    return this._samClientCertificate;
  }

  // sam_cwp_failure_string - computed: false, optional: true, required: false
  private _samCwpFailureString?: string; 
  public get samCwpFailureString() {
    return this.getStringAttribute('sam_cwp_failure_string');
  }
  public set samCwpFailureString(value: string) {
    this._samCwpFailureString = value;
  }
  public resetSamCwpFailureString() {
    this._samCwpFailureString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samCwpFailureStringInput() {
    return this._samCwpFailureString;
  }

  // sam_cwp_match_string - computed: false, optional: true, required: false
  private _samCwpMatchString?: string; 
  public get samCwpMatchString() {
    return this.getStringAttribute('sam_cwp_match_string');
  }
  public set samCwpMatchString(value: string) {
    this._samCwpMatchString = value;
  }
  public resetSamCwpMatchString() {
    this._samCwpMatchString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samCwpMatchStringInput() {
    return this._samCwpMatchString;
  }

  // sam_cwp_password - computed: false, optional: true, required: false
  private _samCwpPassword?: string; 
  public get samCwpPassword() {
    return this.getStringAttribute('sam_cwp_password');
  }
  public set samCwpPassword(value: string) {
    this._samCwpPassword = value;
  }
  public resetSamCwpPassword() {
    this._samCwpPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samCwpPasswordInput() {
    return this._samCwpPassword;
  }

  // sam_cwp_success_string - computed: false, optional: true, required: false
  private _samCwpSuccessString?: string; 
  public get samCwpSuccessString() {
    return this.getStringAttribute('sam_cwp_success_string');
  }
  public set samCwpSuccessString(value: string) {
    this._samCwpSuccessString = value;
  }
  public resetSamCwpSuccessString() {
    this._samCwpSuccessString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samCwpSuccessStringInput() {
    return this._samCwpSuccessString;
  }

  // sam_cwp_test_url - computed: false, optional: true, required: false
  private _samCwpTestUrl?: string; 
  public get samCwpTestUrl() {
    return this.getStringAttribute('sam_cwp_test_url');
  }
  public set samCwpTestUrl(value: string) {
    this._samCwpTestUrl = value;
  }
  public resetSamCwpTestUrl() {
    this._samCwpTestUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samCwpTestUrlInput() {
    return this._samCwpTestUrl;
  }

  // sam_cwp_username - computed: false, optional: true, required: false
  private _samCwpUsername?: string; 
  public get samCwpUsername() {
    return this.getStringAttribute('sam_cwp_username');
  }
  public set samCwpUsername(value: string) {
    this._samCwpUsername = value;
  }
  public resetSamCwpUsername() {
    this._samCwpUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samCwpUsernameInput() {
    return this._samCwpUsername;
  }

  // sam_eap_method - computed: true, optional: true, required: false
  private _samEapMethod?: string; 
  public get samEapMethod() {
    return this.getStringAttribute('sam_eap_method');
  }
  public set samEapMethod(value: string) {
    this._samEapMethod = value;
  }
  public resetSamEapMethod() {
    this._samEapMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samEapMethodInput() {
    return this._samEapMethod;
  }

  // sam_password - computed: false, optional: true, required: false
  private _samPassword?: string; 
  public get samPassword() {
    return this.getStringAttribute('sam_password');
  }
  public set samPassword(value: string) {
    this._samPassword = value;
  }
  public resetSamPassword() {
    this._samPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samPasswordInput() {
    return this._samPassword;
  }

  // sam_private_key - computed: false, optional: true, required: false
  private _samPrivateKey?: string; 
  public get samPrivateKey() {
    return this.getStringAttribute('sam_private_key');
  }
  public set samPrivateKey(value: string) {
    this._samPrivateKey = value;
  }
  public resetSamPrivateKey() {
    this._samPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samPrivateKeyInput() {
    return this._samPrivateKey;
  }

  // sam_private_key_password - computed: false, optional: true, required: false
  private _samPrivateKeyPassword?: string; 
  public get samPrivateKeyPassword() {
    return this.getStringAttribute('sam_private_key_password');
  }
  public set samPrivateKeyPassword(value: string) {
    this._samPrivateKeyPassword = value;
  }
  public resetSamPrivateKeyPassword() {
    this._samPrivateKeyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samPrivateKeyPasswordInput() {
    return this._samPrivateKeyPassword;
  }

  // sam_report_intv - computed: false, optional: true, required: false
  private _samReportIntv?: number; 
  public get samReportIntv() {
    return this.getNumberAttribute('sam_report_intv');
  }
  public set samReportIntv(value: number) {
    this._samReportIntv = value;
  }
  public resetSamReportIntv() {
    this._samReportIntv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samReportIntvInput() {
    return this._samReportIntv;
  }

  // sam_security_type - computed: true, optional: true, required: false
  private _samSecurityType?: string; 
  public get samSecurityType() {
    return this.getStringAttribute('sam_security_type');
  }
  public set samSecurityType(value: string) {
    this._samSecurityType = value;
  }
  public resetSamSecurityType() {
    this._samSecurityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samSecurityTypeInput() {
    return this._samSecurityType;
  }

  // sam_server_fqdn - computed: false, optional: true, required: false
  private _samServerFqdn?: string; 
  public get samServerFqdn() {
    return this.getStringAttribute('sam_server_fqdn');
  }
  public set samServerFqdn(value: string) {
    this._samServerFqdn = value;
  }
  public resetSamServerFqdn() {
    this._samServerFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samServerFqdnInput() {
    return this._samServerFqdn;
  }

  // sam_server_ip - computed: true, optional: true, required: false
  private _samServerIp?: string; 
  public get samServerIp() {
    return this.getStringAttribute('sam_server_ip');
  }
  public set samServerIp(value: string) {
    this._samServerIp = value;
  }
  public resetSamServerIp() {
    this._samServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samServerIpInput() {
    return this._samServerIp;
  }

  // sam_server_type - computed: true, optional: true, required: false
  private _samServerType?: string; 
  public get samServerType() {
    return this.getStringAttribute('sam_server_type');
  }
  public set samServerType(value: string) {
    this._samServerType = value;
  }
  public resetSamServerType() {
    this._samServerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samServerTypeInput() {
    return this._samServerType;
  }

  // sam_ssid - computed: false, optional: true, required: false
  private _samSsid?: string; 
  public get samSsid() {
    return this.getStringAttribute('sam_ssid');
  }
  public set samSsid(value: string) {
    this._samSsid = value;
  }
  public resetSamSsid() {
    this._samSsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samSsidInput() {
    return this._samSsid;
  }

  // sam_test - computed: true, optional: true, required: false
  private _samTest?: string; 
  public get samTest() {
    return this.getStringAttribute('sam_test');
  }
  public set samTest(value: string) {
    this._samTest = value;
  }
  public resetSamTest() {
    this._samTest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samTestInput() {
    return this._samTest;
  }

  // sam_username - computed: false, optional: true, required: false
  private _samUsername?: string; 
  public get samUsername() {
    return this.getStringAttribute('sam_username');
  }
  public set samUsername(value: string) {
    this._samUsername = value;
  }
  public resetSamUsername() {
    this._samUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samUsernameInput() {
    return this._samUsername;
  }

  // short_guard_interval - computed: true, optional: true, required: false
  private _shortGuardInterval?: string; 
  public get shortGuardInterval() {
    return this.getStringAttribute('short_guard_interval');
  }
  public set shortGuardInterval(value: string) {
    this._shortGuardInterval = value;
  }
  public resetShortGuardInterval() {
    this._shortGuardInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortGuardIntervalInput() {
    return this._shortGuardInterval;
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

  // transmit_optimize - computed: true, optional: true, required: false
  private _transmitOptimize?: string; 
  public get transmitOptimize() {
    return this.getStringAttribute('transmit_optimize');
  }
  public set transmitOptimize(value: string) {
    this._transmitOptimize = value;
  }
  public resetTransmitOptimize() {
    this._transmitOptimize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitOptimizeInput() {
    return this._transmitOptimize;
  }

  // vap_all - computed: true, optional: true, required: false
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

  // wids_profile - computed: false, optional: true, required: false
  private _widsProfile?: string; 
  public get widsProfile() {
    return this.getStringAttribute('wids_profile');
  }
  public set widsProfile(value: string) {
    this._widsProfile = value;
  }
  public resetWidsProfile() {
    this._widsProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widsProfileInput() {
    return this._widsProfile;
  }

  // zero_wait_dfs - computed: true, optional: true, required: false
  private _zeroWaitDfs?: string; 
  public get zeroWaitDfs() {
    return this.getStringAttribute('zero_wait_dfs');
  }
  public set zeroWaitDfs(value: string) {
    this._zeroWaitDfs = value;
  }
  public resetZeroWaitDfs() {
    this._zeroWaitDfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroWaitDfsInput() {
    return this._zeroWaitDfs;
  }

  // channel - computed: false, optional: true, required: false
  private _channel = new WirelesscontrollerWtpprofileRadio4ChannelList(this, "channel", true);
  public get channel() {
    return this._channel;
  }
  public putChannel(value: WirelesscontrollerWtpprofileRadio4Channel[] | cdktf.IResolvable) {
    this._channel.internalValue = value;
  }
  public resetChannel() {
    this._channel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel.internalValue;
  }

  // vaps - computed: false, optional: true, required: false
  private _vaps = new WirelesscontrollerWtpprofileRadio4VapsList(this, "vaps", true);
  public get vaps() {
    return this._vaps;
  }
  public putVaps(value: WirelesscontrollerWtpprofileRadio4Vaps[] | cdktf.IResolvable) {
    this._vaps.internalValue = value;
  }
  public resetVaps() {
    this._vaps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vapsInput() {
    return this._vaps.internalValue;
  }
}
export interface WirelesscontrollerWtpprofileSplitTunnelingAcl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#dest_ip WirelesscontrollerWtpprofile#dest_ip}
  */
  readonly destIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#id WirelesscontrollerWtpprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function wirelesscontrollerWtpprofileSplitTunnelingAclToTerraform(struct?: WirelesscontrollerWtpprofileSplitTunnelingAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dest_ip: cdktf.stringToTerraform(struct!.destIp),
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function wirelesscontrollerWtpprofileSplitTunnelingAclToHclTerraform(struct?: WirelesscontrollerWtpprofileSplitTunnelingAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dest_ip: {
      value: cdktf.stringToHclTerraform(struct!.destIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class WirelesscontrollerWtpprofileSplitTunnelingAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelesscontrollerWtpprofileSplitTunnelingAcl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WirelesscontrollerWtpprofileSplitTunnelingAcl | cdktf.IResolvable | undefined) {
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
  private _destIp?: string; 
  public get destIp() {
    return this.getStringAttribute('dest_ip');
  }
  public set destIp(value: string) {
    this._destIp = value;
  }
  public resetDestIp() {
    this._destIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destIpInput() {
    return this._destIp;
  }

  // id - computed: true, optional: true, required: false
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

export class WirelesscontrollerWtpprofileSplitTunnelingAclList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerWtpprofileSplitTunnelingAcl[] | cdktf.IResolvable

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
  public get(index: number): WirelesscontrollerWtpprofileSplitTunnelingAclOutputReference {
    return new WirelesscontrollerWtpprofileSplitTunnelingAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile fortios_wirelesscontroller_wtpprofile}
*/
export class WirelesscontrollerWtpprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_wirelesscontroller_wtpprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelesscontrollerWtpprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelesscontrollerWtpprofile to import
  * @param importFromId The id of the existing WirelesscontrollerWtpprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelesscontrollerWtpprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_wirelesscontroller_wtpprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_wtpprofile fortios_wirelesscontroller_wtpprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelesscontrollerWtpprofileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WirelesscontrollerWtpprofileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_wirelesscontroller_wtpprofile',
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
    this._adminAuthTacacs = config.adminAuthTacacs;
    this._adminRestrictLocal = config.adminRestrictLocal;
    this._allowaccess = config.allowaccess;
    this._apCountry = config.apCountry;
    this._apHandoff = config.apHandoff;
    this._apcfgMesh = config.apcfgMesh;
    this._apcfgMeshApType = config.apcfgMeshApType;
    this._apcfgMeshEthBridge = config.apcfgMeshEthBridge;
    this._apcfgMeshSsid = config.apcfgMeshSsid;
    this._apcfgProfile = config.apcfgProfile;
    this._bleProfile = config.bleProfile;
    this._bonjourProfile = config.bonjourProfile;
    this._comment = config.comment;
    this._consoleLogin = config.consoleLogin;
    this._controlMessageOffload = config.controlMessageOffload;
    this._defaultMeshRoot = config.defaultMeshRoot;
    this._dtlsInKernel = config.dtlsInKernel;
    this._dtlsPolicy = config.dtlsPolicy;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._energyEfficientEthernet = config.energyEfficientEthernet;
    this._extInfoEnable = config.extInfoEnable;
    this._frequencyHandoff = config.frequencyHandoff;
    this._getAllTables = config.fetchAllTables;
    this._handoffRoaming = config.handoffRoaming;
    this._handoffRssi = config.handoffRssi;
    this._handoffStaThresh = config.handoffStaThresh;
    this._id = config.id;
    this._indoorOutdoorDeployment = config.indoorOutdoorDeployment;
    this._ipFragmentPreventing = config.ipFragmentPreventing;
    this._ledState = config.ledState;
    this._lldp = config.lldp;
    this._loginPasswd = config.loginPasswd;
    this._loginPasswdChange = config.loginPasswdChange;
    this._maxClients = config.maxClients;
    this._name = config.name;
    this._poeMode = config.poeMode;
    this._splitTunnelingAclLocalApSubnet = config.splitTunnelingAclLocalApSubnet;
    this._splitTunnelingAclPath = config.splitTunnelingAclPath;
    this._syslogProfile = config.syslogProfile;
    this._tunMtuDownlink = config.tunMtuDownlink;
    this._tunMtuUplink = config.tunMtuUplink;
    this._unii45GhzBand = config.unii45GhzBand;
    this._usbPort = config.usbPort;
    this._vdomparam = config.vdomparam;
    this._wanPortAuth = config.wanPortAuth;
    this._wanPortAuthMacsec = config.wanPortAuthMacsec;
    this._wanPortAuthMethods = config.wanPortAuthMethods;
    this._wanPortAuthPassword = config.wanPortAuthPassword;
    this._wanPortAuthUsrname = config.wanPortAuthUsrname;
    this._wanPortMode = config.wanPortMode;
    this._denyMacList.internalValue = config.denyMacList;
    this._eslSesDongle.internalValue = config.eslSesDongle;
    this._lan.internalValue = config.lan;
    this._lbs.internalValue = config.lbs;
    this._ledSchedules.internalValue = config.ledSchedules;
    this._platform.internalValue = config.platform;
    this._radio1.internalValue = config.radio1;
    this._radio2.internalValue = config.radio2;
    this._radio3.internalValue = config.radio3;
    this._radio4.internalValue = config.radio4;
    this._splitTunnelingAcl.internalValue = config.splitTunnelingAcl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_auth_tacacs - computed: false, optional: true, required: false
  private _adminAuthTacacs?: string; 
  public get adminAuthTacacs() {
    return this.getStringAttribute('admin_auth_tacacs');
  }
  public set adminAuthTacacs(value: string) {
    this._adminAuthTacacs = value;
  }
  public resetAdminAuthTacacs() {
    this._adminAuthTacacs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminAuthTacacsInput() {
    return this._adminAuthTacacs;
  }

  // admin_restrict_local - computed: true, optional: true, required: false
  private _adminRestrictLocal?: string; 
  public get adminRestrictLocal() {
    return this.getStringAttribute('admin_restrict_local');
  }
  public set adminRestrictLocal(value: string) {
    this._adminRestrictLocal = value;
  }
  public resetAdminRestrictLocal() {
    this._adminRestrictLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminRestrictLocalInput() {
    return this._adminRestrictLocal;
  }

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

  // ap_country - computed: true, optional: true, required: false
  private _apCountry?: string; 
  public get apCountry() {
    return this.getStringAttribute('ap_country');
  }
  public set apCountry(value: string) {
    this._apCountry = value;
  }
  public resetApCountry() {
    this._apCountry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apCountryInput() {
    return this._apCountry;
  }

  // ap_handoff - computed: true, optional: true, required: false
  private _apHandoff?: string; 
  public get apHandoff() {
    return this.getStringAttribute('ap_handoff');
  }
  public set apHandoff(value: string) {
    this._apHandoff = value;
  }
  public resetApHandoff() {
    this._apHandoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apHandoffInput() {
    return this._apHandoff;
  }

  // apcfg_mesh - computed: true, optional: true, required: false
  private _apcfgMesh?: string; 
  public get apcfgMesh() {
    return this.getStringAttribute('apcfg_mesh');
  }
  public set apcfgMesh(value: string) {
    this._apcfgMesh = value;
  }
  public resetApcfgMesh() {
    this._apcfgMesh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apcfgMeshInput() {
    return this._apcfgMesh;
  }

  // apcfg_mesh_ap_type - computed: true, optional: true, required: false
  private _apcfgMeshApType?: string; 
  public get apcfgMeshApType() {
    return this.getStringAttribute('apcfg_mesh_ap_type');
  }
  public set apcfgMeshApType(value: string) {
    this._apcfgMeshApType = value;
  }
  public resetApcfgMeshApType() {
    this._apcfgMeshApType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apcfgMeshApTypeInput() {
    return this._apcfgMeshApType;
  }

  // apcfg_mesh_eth_bridge - computed: true, optional: true, required: false
  private _apcfgMeshEthBridge?: string; 
  public get apcfgMeshEthBridge() {
    return this.getStringAttribute('apcfg_mesh_eth_bridge');
  }
  public set apcfgMeshEthBridge(value: string) {
    this._apcfgMeshEthBridge = value;
  }
  public resetApcfgMeshEthBridge() {
    this._apcfgMeshEthBridge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apcfgMeshEthBridgeInput() {
    return this._apcfgMeshEthBridge;
  }

  // apcfg_mesh_ssid - computed: false, optional: true, required: false
  private _apcfgMeshSsid?: string; 
  public get apcfgMeshSsid() {
    return this.getStringAttribute('apcfg_mesh_ssid');
  }
  public set apcfgMeshSsid(value: string) {
    this._apcfgMeshSsid = value;
  }
  public resetApcfgMeshSsid() {
    this._apcfgMeshSsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apcfgMeshSsidInput() {
    return this._apcfgMeshSsid;
  }

  // apcfg_profile - computed: false, optional: true, required: false
  private _apcfgProfile?: string; 
  public get apcfgProfile() {
    return this.getStringAttribute('apcfg_profile');
  }
  public set apcfgProfile(value: string) {
    this._apcfgProfile = value;
  }
  public resetApcfgProfile() {
    this._apcfgProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apcfgProfileInput() {
    return this._apcfgProfile;
  }

  // ble_profile - computed: false, optional: true, required: false
  private _bleProfile?: string; 
  public get bleProfile() {
    return this.getStringAttribute('ble_profile');
  }
  public set bleProfile(value: string) {
    this._bleProfile = value;
  }
  public resetBleProfile() {
    this._bleProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bleProfileInput() {
    return this._bleProfile;
  }

  // bonjour_profile - computed: false, optional: true, required: false
  private _bonjourProfile?: string; 
  public get bonjourProfile() {
    return this.getStringAttribute('bonjour_profile');
  }
  public set bonjourProfile(value: string) {
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

  // console_login - computed: true, optional: true, required: false
  private _consoleLogin?: string; 
  public get consoleLogin() {
    return this.getStringAttribute('console_login');
  }
  public set consoleLogin(value: string) {
    this._consoleLogin = value;
  }
  public resetConsoleLogin() {
    this._consoleLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleLoginInput() {
    return this._consoleLogin;
  }

  // control_message_offload - computed: true, optional: true, required: false
  private _controlMessageOffload?: string; 
  public get controlMessageOffload() {
    return this.getStringAttribute('control_message_offload');
  }
  public set controlMessageOffload(value: string) {
    this._controlMessageOffload = value;
  }
  public resetControlMessageOffload() {
    this._controlMessageOffload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlMessageOffloadInput() {
    return this._controlMessageOffload;
  }

  // default_mesh_root - computed: true, optional: true, required: false
  private _defaultMeshRoot?: string; 
  public get defaultMeshRoot() {
    return this.getStringAttribute('default_mesh_root');
  }
  public set defaultMeshRoot(value: string) {
    this._defaultMeshRoot = value;
  }
  public resetDefaultMeshRoot() {
    this._defaultMeshRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMeshRootInput() {
    return this._defaultMeshRoot;
  }

  // dtls_in_kernel - computed: true, optional: true, required: false
  private _dtlsInKernel?: string; 
  public get dtlsInKernel() {
    return this.getStringAttribute('dtls_in_kernel');
  }
  public set dtlsInKernel(value: string) {
    this._dtlsInKernel = value;
  }
  public resetDtlsInKernel() {
    this._dtlsInKernel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtlsInKernelInput() {
    return this._dtlsInKernel;
  }

  // dtls_policy - computed: true, optional: true, required: false
  private _dtlsPolicy?: string; 
  public get dtlsPolicy() {
    return this.getStringAttribute('dtls_policy');
  }
  public set dtlsPolicy(value: string) {
    this._dtlsPolicy = value;
  }
  public resetDtlsPolicy() {
    this._dtlsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtlsPolicyInput() {
    return this._dtlsPolicy;
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

  // energy_efficient_ethernet - computed: true, optional: true, required: false
  private _energyEfficientEthernet?: string; 
  public get energyEfficientEthernet() {
    return this.getStringAttribute('energy_efficient_ethernet');
  }
  public set energyEfficientEthernet(value: string) {
    this._energyEfficientEthernet = value;
  }
  public resetEnergyEfficientEthernet() {
    this._energyEfficientEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get energyEfficientEthernetInput() {
    return this._energyEfficientEthernet;
  }

  // ext_info_enable - computed: true, optional: true, required: false
  private _extInfoEnable?: string; 
  public get extInfoEnable() {
    return this.getStringAttribute('ext_info_enable');
  }
  public set extInfoEnable(value: string) {
    this._extInfoEnable = value;
  }
  public resetExtInfoEnable() {
    this._extInfoEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extInfoEnableInput() {
    return this._extInfoEnable;
  }

  // frequency_handoff - computed: true, optional: true, required: false
  private _frequencyHandoff?: string; 
  public get frequencyHandoff() {
    return this.getStringAttribute('frequency_handoff');
  }
  public set frequencyHandoff(value: string) {
    this._frequencyHandoff = value;
  }
  public resetFrequencyHandoff() {
    this._frequencyHandoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyHandoffInput() {
    return this._frequencyHandoff;
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

  // handoff_roaming - computed: true, optional: true, required: false
  private _handoffRoaming?: string; 
  public get handoffRoaming() {
    return this.getStringAttribute('handoff_roaming');
  }
  public set handoffRoaming(value: string) {
    this._handoffRoaming = value;
  }
  public resetHandoffRoaming() {
    this._handoffRoaming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handoffRoamingInput() {
    return this._handoffRoaming;
  }

  // handoff_rssi - computed: true, optional: true, required: false
  private _handoffRssi?: number; 
  public get handoffRssi() {
    return this.getNumberAttribute('handoff_rssi');
  }
  public set handoffRssi(value: number) {
    this._handoffRssi = value;
  }
  public resetHandoffRssi() {
    this._handoffRssi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handoffRssiInput() {
    return this._handoffRssi;
  }

  // handoff_sta_thresh - computed: true, optional: true, required: false
  private _handoffStaThresh?: number; 
  public get handoffStaThresh() {
    return this.getNumberAttribute('handoff_sta_thresh');
  }
  public set handoffStaThresh(value: number) {
    this._handoffStaThresh = value;
  }
  public resetHandoffStaThresh() {
    this._handoffStaThresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handoffStaThreshInput() {
    return this._handoffStaThresh;
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

  // indoor_outdoor_deployment - computed: true, optional: true, required: false
  private _indoorOutdoorDeployment?: string; 
  public get indoorOutdoorDeployment() {
    return this.getStringAttribute('indoor_outdoor_deployment');
  }
  public set indoorOutdoorDeployment(value: string) {
    this._indoorOutdoorDeployment = value;
  }
  public resetIndoorOutdoorDeployment() {
    this._indoorOutdoorDeployment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indoorOutdoorDeploymentInput() {
    return this._indoorOutdoorDeployment;
  }

  // ip_fragment_preventing - computed: true, optional: true, required: false
  private _ipFragmentPreventing?: string; 
  public get ipFragmentPreventing() {
    return this.getStringAttribute('ip_fragment_preventing');
  }
  public set ipFragmentPreventing(value: string) {
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

  // lldp - computed: true, optional: true, required: false
  private _lldp?: string; 
  public get lldp() {
    return this.getStringAttribute('lldp');
  }
  public set lldp(value: string) {
    this._lldp = value;
  }
  public resetLldp() {
    this._lldp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpInput() {
    return this._lldp;
  }

  // login_passwd - computed: false, optional: true, required: false
  private _loginPasswd?: string; 
  public get loginPasswd() {
    return this.getStringAttribute('login_passwd');
  }
  public set loginPasswd(value: string) {
    this._loginPasswd = value;
  }
  public resetLoginPasswd() {
    this._loginPasswd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginPasswdInput() {
    return this._loginPasswd;
  }

  // login_passwd_change - computed: true, optional: true, required: false
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

  // poe_mode - computed: true, optional: true, required: false
  private _poeMode?: string; 
  public get poeMode() {
    return this.getStringAttribute('poe_mode');
  }
  public set poeMode(value: string) {
    this._poeMode = value;
  }
  public resetPoeMode() {
    this._poeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poeModeInput() {
    return this._poeMode;
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

  // syslog_profile - computed: false, optional: true, required: false
  private _syslogProfile?: string; 
  public get syslogProfile() {
    return this.getStringAttribute('syslog_profile');
  }
  public set syslogProfile(value: string) {
    this._syslogProfile = value;
  }
  public resetSyslogProfile() {
    this._syslogProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogProfileInput() {
    return this._syslogProfile;
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

  // unii_4_5ghz_band - computed: true, optional: true, required: false
  private _unii45GhzBand?: string; 
  public get unii45GhzBand() {
    return this.getStringAttribute('unii_4_5ghz_band');
  }
  public set unii45GhzBand(value: string) {
    this._unii45GhzBand = value;
  }
  public resetUnii45GhzBand() {
    this._unii45GhzBand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unii45GhzBandInput() {
    return this._unii45GhzBand;
  }

  // usb_port - computed: true, optional: true, required: false
  private _usbPort?: string; 
  public get usbPort() {
    return this.getStringAttribute('usb_port');
  }
  public set usbPort(value: string) {
    this._usbPort = value;
  }
  public resetUsbPort() {
    this._usbPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usbPortInput() {
    return this._usbPort;
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

  // wan_port_auth - computed: true, optional: true, required: false
  private _wanPortAuth?: string; 
  public get wanPortAuth() {
    return this.getStringAttribute('wan_port_auth');
  }
  public set wanPortAuth(value: string) {
    this._wanPortAuth = value;
  }
  public resetWanPortAuth() {
    this._wanPortAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanPortAuthInput() {
    return this._wanPortAuth;
  }

  // wan_port_auth_macsec - computed: true, optional: true, required: false
  private _wanPortAuthMacsec?: string; 
  public get wanPortAuthMacsec() {
    return this.getStringAttribute('wan_port_auth_macsec');
  }
  public set wanPortAuthMacsec(value: string) {
    this._wanPortAuthMacsec = value;
  }
  public resetWanPortAuthMacsec() {
    this._wanPortAuthMacsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanPortAuthMacsecInput() {
    return this._wanPortAuthMacsec;
  }

  // wan_port_auth_methods - computed: true, optional: true, required: false
  private _wanPortAuthMethods?: string; 
  public get wanPortAuthMethods() {
    return this.getStringAttribute('wan_port_auth_methods');
  }
  public set wanPortAuthMethods(value: string) {
    this._wanPortAuthMethods = value;
  }
  public resetWanPortAuthMethods() {
    this._wanPortAuthMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanPortAuthMethodsInput() {
    return this._wanPortAuthMethods;
  }

  // wan_port_auth_password - computed: false, optional: true, required: false
  private _wanPortAuthPassword?: string; 
  public get wanPortAuthPassword() {
    return this.getStringAttribute('wan_port_auth_password');
  }
  public set wanPortAuthPassword(value: string) {
    this._wanPortAuthPassword = value;
  }
  public resetWanPortAuthPassword() {
    this._wanPortAuthPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanPortAuthPasswordInput() {
    return this._wanPortAuthPassword;
  }

  // wan_port_auth_usrname - computed: false, optional: true, required: false
  private _wanPortAuthUsrname?: string; 
  public get wanPortAuthUsrname() {
    return this.getStringAttribute('wan_port_auth_usrname');
  }
  public set wanPortAuthUsrname(value: string) {
    this._wanPortAuthUsrname = value;
  }
  public resetWanPortAuthUsrname() {
    this._wanPortAuthUsrname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanPortAuthUsrnameInput() {
    return this._wanPortAuthUsrname;
  }

  // wan_port_mode - computed: true, optional: true, required: false
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

  // deny_mac_list - computed: false, optional: true, required: false
  private _denyMacList = new WirelesscontrollerWtpprofileDenyMacListStructList(this, "deny_mac_list", false);
  public get denyMacList() {
    return this._denyMacList;
  }
  public putDenyMacList(value: WirelesscontrollerWtpprofileDenyMacListStruct[] | cdktf.IResolvable) {
    this._denyMacList.internalValue = value;
  }
  public resetDenyMacList() {
    this._denyMacList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyMacListInput() {
    return this._denyMacList.internalValue;
  }

  // esl_ses_dongle - computed: false, optional: true, required: false
  private _eslSesDongle = new WirelesscontrollerWtpprofileEslSesDongleOutputReference(this, "esl_ses_dongle");
  public get eslSesDongle() {
    return this._eslSesDongle;
  }
  public putEslSesDongle(value: WirelesscontrollerWtpprofileEslSesDongle) {
    this._eslSesDongle.internalValue = value;
  }
  public resetEslSesDongle() {
    this._eslSesDongle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eslSesDongleInput() {
    return this._eslSesDongle.internalValue;
  }

  // lan - computed: false, optional: true, required: false
  private _lan = new WirelesscontrollerWtpprofileLanOutputReference(this, "lan");
  public get lan() {
    return this._lan;
  }
  public putLan(value: WirelesscontrollerWtpprofileLan) {
    this._lan.internalValue = value;
  }
  public resetLan() {
    this._lan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lanInput() {
    return this._lan.internalValue;
  }

  // lbs - computed: false, optional: true, required: false
  private _lbs = new WirelesscontrollerWtpprofileLbsOutputReference(this, "lbs");
  public get lbs() {
    return this._lbs;
  }
  public putLbs(value: WirelesscontrollerWtpprofileLbs) {
    this._lbs.internalValue = value;
  }
  public resetLbs() {
    this._lbs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbsInput() {
    return this._lbs.internalValue;
  }

  // led_schedules - computed: false, optional: true, required: false
  private _ledSchedules = new WirelesscontrollerWtpprofileLedSchedulesList(this, "led_schedules", true);
  public get ledSchedules() {
    return this._ledSchedules;
  }
  public putLedSchedules(value: WirelesscontrollerWtpprofileLedSchedules[] | cdktf.IResolvable) {
    this._ledSchedules.internalValue = value;
  }
  public resetLedSchedules() {
    this._ledSchedules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ledSchedulesInput() {
    return this._ledSchedules.internalValue;
  }

  // platform - computed: false, optional: true, required: false
  private _platform = new WirelesscontrollerWtpprofilePlatformOutputReference(this, "platform");
  public get platform() {
    return this._platform;
  }
  public putPlatform(value: WirelesscontrollerWtpprofilePlatform) {
    this._platform.internalValue = value;
  }
  public resetPlatform() {
    this._platform.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform.internalValue;
  }

  // radio_1 - computed: false, optional: true, required: false
  private _radio1 = new WirelesscontrollerWtpprofileRadio1OutputReference(this, "radio_1");
  public get radio1() {
    return this._radio1;
  }
  public putRadio1(value: WirelesscontrollerWtpprofileRadio1) {
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
  private _radio2 = new WirelesscontrollerWtpprofileRadio2OutputReference(this, "radio_2");
  public get radio2() {
    return this._radio2;
  }
  public putRadio2(value: WirelesscontrollerWtpprofileRadio2) {
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
  private _radio3 = new WirelesscontrollerWtpprofileRadio3OutputReference(this, "radio_3");
  public get radio3() {
    return this._radio3;
  }
  public putRadio3(value: WirelesscontrollerWtpprofileRadio3) {
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
  private _radio4 = new WirelesscontrollerWtpprofileRadio4OutputReference(this, "radio_4");
  public get radio4() {
    return this._radio4;
  }
  public putRadio4(value: WirelesscontrollerWtpprofileRadio4) {
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
  private _splitTunnelingAcl = new WirelesscontrollerWtpprofileSplitTunnelingAclList(this, "split_tunneling_acl", false);
  public get splitTunnelingAcl() {
    return this._splitTunnelingAcl;
  }
  public putSplitTunnelingAcl(value: WirelesscontrollerWtpprofileSplitTunnelingAcl[] | cdktf.IResolvable) {
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
      admin_auth_tacacs: cdktf.stringToTerraform(this._adminAuthTacacs),
      admin_restrict_local: cdktf.stringToTerraform(this._adminRestrictLocal),
      allowaccess: cdktf.stringToTerraform(this._allowaccess),
      ap_country: cdktf.stringToTerraform(this._apCountry),
      ap_handoff: cdktf.stringToTerraform(this._apHandoff),
      apcfg_mesh: cdktf.stringToTerraform(this._apcfgMesh),
      apcfg_mesh_ap_type: cdktf.stringToTerraform(this._apcfgMeshApType),
      apcfg_mesh_eth_bridge: cdktf.stringToTerraform(this._apcfgMeshEthBridge),
      apcfg_mesh_ssid: cdktf.stringToTerraform(this._apcfgMeshSsid),
      apcfg_profile: cdktf.stringToTerraform(this._apcfgProfile),
      ble_profile: cdktf.stringToTerraform(this._bleProfile),
      bonjour_profile: cdktf.stringToTerraform(this._bonjourProfile),
      comment: cdktf.stringToTerraform(this._comment),
      console_login: cdktf.stringToTerraform(this._consoleLogin),
      control_message_offload: cdktf.stringToTerraform(this._controlMessageOffload),
      default_mesh_root: cdktf.stringToTerraform(this._defaultMeshRoot),
      dtls_in_kernel: cdktf.stringToTerraform(this._dtlsInKernel),
      dtls_policy: cdktf.stringToTerraform(this._dtlsPolicy),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      energy_efficient_ethernet: cdktf.stringToTerraform(this._energyEfficientEthernet),
      ext_info_enable: cdktf.stringToTerraform(this._extInfoEnable),
      frequency_handoff: cdktf.stringToTerraform(this._frequencyHandoff),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      handoff_roaming: cdktf.stringToTerraform(this._handoffRoaming),
      handoff_rssi: cdktf.numberToTerraform(this._handoffRssi),
      handoff_sta_thresh: cdktf.numberToTerraform(this._handoffStaThresh),
      id: cdktf.stringToTerraform(this._id),
      indoor_outdoor_deployment: cdktf.stringToTerraform(this._indoorOutdoorDeployment),
      ip_fragment_preventing: cdktf.stringToTerraform(this._ipFragmentPreventing),
      led_state: cdktf.stringToTerraform(this._ledState),
      lldp: cdktf.stringToTerraform(this._lldp),
      login_passwd: cdktf.stringToTerraform(this._loginPasswd),
      login_passwd_change: cdktf.stringToTerraform(this._loginPasswdChange),
      max_clients: cdktf.numberToTerraform(this._maxClients),
      name: cdktf.stringToTerraform(this._name),
      poe_mode: cdktf.stringToTerraform(this._poeMode),
      split_tunneling_acl_local_ap_subnet: cdktf.stringToTerraform(this._splitTunnelingAclLocalApSubnet),
      split_tunneling_acl_path: cdktf.stringToTerraform(this._splitTunnelingAclPath),
      syslog_profile: cdktf.stringToTerraform(this._syslogProfile),
      tun_mtu_downlink: cdktf.numberToTerraform(this._tunMtuDownlink),
      tun_mtu_uplink: cdktf.numberToTerraform(this._tunMtuUplink),
      unii_4_5ghz_band: cdktf.stringToTerraform(this._unii45GhzBand),
      usb_port: cdktf.stringToTerraform(this._usbPort),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      wan_port_auth: cdktf.stringToTerraform(this._wanPortAuth),
      wan_port_auth_macsec: cdktf.stringToTerraform(this._wanPortAuthMacsec),
      wan_port_auth_methods: cdktf.stringToTerraform(this._wanPortAuthMethods),
      wan_port_auth_password: cdktf.stringToTerraform(this._wanPortAuthPassword),
      wan_port_auth_usrname: cdktf.stringToTerraform(this._wanPortAuthUsrname),
      wan_port_mode: cdktf.stringToTerraform(this._wanPortMode),
      deny_mac_list: cdktf.listMapper(wirelesscontrollerWtpprofileDenyMacListStructToTerraform, true)(this._denyMacList.internalValue),
      esl_ses_dongle: wirelesscontrollerWtpprofileEslSesDongleToTerraform(this._eslSesDongle.internalValue),
      lan: wirelesscontrollerWtpprofileLanToTerraform(this._lan.internalValue),
      lbs: wirelesscontrollerWtpprofileLbsToTerraform(this._lbs.internalValue),
      led_schedules: cdktf.listMapper(wirelesscontrollerWtpprofileLedSchedulesToTerraform, true)(this._ledSchedules.internalValue),
      platform: wirelesscontrollerWtpprofilePlatformToTerraform(this._platform.internalValue),
      radio_1: wirelesscontrollerWtpprofileRadio1ToTerraform(this._radio1.internalValue),
      radio_2: wirelesscontrollerWtpprofileRadio2ToTerraform(this._radio2.internalValue),
      radio_3: wirelesscontrollerWtpprofileRadio3ToTerraform(this._radio3.internalValue),
      radio_4: wirelesscontrollerWtpprofileRadio4ToTerraform(this._radio4.internalValue),
      split_tunneling_acl: cdktf.listMapper(wirelesscontrollerWtpprofileSplitTunnelingAclToTerraform, true)(this._splitTunnelingAcl.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_auth_tacacs: {
        value: cdktf.stringToHclTerraform(this._adminAuthTacacs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_restrict_local: {
        value: cdktf.stringToHclTerraform(this._adminRestrictLocal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowaccess: {
        value: cdktf.stringToHclTerraform(this._allowaccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ap_country: {
        value: cdktf.stringToHclTerraform(this._apCountry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ap_handoff: {
        value: cdktf.stringToHclTerraform(this._apHandoff),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apcfg_mesh: {
        value: cdktf.stringToHclTerraform(this._apcfgMesh),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apcfg_mesh_ap_type: {
        value: cdktf.stringToHclTerraform(this._apcfgMeshApType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apcfg_mesh_eth_bridge: {
        value: cdktf.stringToHclTerraform(this._apcfgMeshEthBridge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apcfg_mesh_ssid: {
        value: cdktf.stringToHclTerraform(this._apcfgMeshSsid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apcfg_profile: {
        value: cdktf.stringToHclTerraform(this._apcfgProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ble_profile: {
        value: cdktf.stringToHclTerraform(this._bleProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bonjour_profile: {
        value: cdktf.stringToHclTerraform(this._bonjourProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      console_login: {
        value: cdktf.stringToHclTerraform(this._consoleLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      control_message_offload: {
        value: cdktf.stringToHclTerraform(this._controlMessageOffload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_mesh_root: {
        value: cdktf.stringToHclTerraform(this._defaultMeshRoot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dtls_in_kernel: {
        value: cdktf.stringToHclTerraform(this._dtlsInKernel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dtls_policy: {
        value: cdktf.stringToHclTerraform(this._dtlsPolicy),
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
      energy_efficient_ethernet: {
        value: cdktf.stringToHclTerraform(this._energyEfficientEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_info_enable: {
        value: cdktf.stringToHclTerraform(this._extInfoEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      frequency_handoff: {
        value: cdktf.stringToHclTerraform(this._frequencyHandoff),
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
      handoff_roaming: {
        value: cdktf.stringToHclTerraform(this._handoffRoaming),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      handoff_rssi: {
        value: cdktf.numberToHclTerraform(this._handoffRssi),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      handoff_sta_thresh: {
        value: cdktf.numberToHclTerraform(this._handoffStaThresh),
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
      indoor_outdoor_deployment: {
        value: cdktf.stringToHclTerraform(this._indoorOutdoorDeployment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_fragment_preventing: {
        value: cdktf.stringToHclTerraform(this._ipFragmentPreventing),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      led_state: {
        value: cdktf.stringToHclTerraform(this._ledState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lldp: {
        value: cdktf.stringToHclTerraform(this._lldp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_passwd: {
        value: cdktf.stringToHclTerraform(this._loginPasswd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_passwd_change: {
        value: cdktf.stringToHclTerraform(this._loginPasswdChange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_clients: {
        value: cdktf.numberToHclTerraform(this._maxClients),
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
      poe_mode: {
        value: cdktf.stringToHclTerraform(this._poeMode),
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
      syslog_profile: {
        value: cdktf.stringToHclTerraform(this._syslogProfile),
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
      unii_4_5ghz_band: {
        value: cdktf.stringToHclTerraform(this._unii45GhzBand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usb_port: {
        value: cdktf.stringToHclTerraform(this._usbPort),
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
      wan_port_auth: {
        value: cdktf.stringToHclTerraform(this._wanPortAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wan_port_auth_macsec: {
        value: cdktf.stringToHclTerraform(this._wanPortAuthMacsec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wan_port_auth_methods: {
        value: cdktf.stringToHclTerraform(this._wanPortAuthMethods),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wan_port_auth_password: {
        value: cdktf.stringToHclTerraform(this._wanPortAuthPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wan_port_auth_usrname: {
        value: cdktf.stringToHclTerraform(this._wanPortAuthUsrname),
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
      deny_mac_list: {
        value: cdktf.listMapperHcl(wirelesscontrollerWtpprofileDenyMacListStructToHclTerraform, true)(this._denyMacList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelesscontrollerWtpprofileDenyMacListStructList",
      },
      esl_ses_dongle: {
        value: wirelesscontrollerWtpprofileEslSesDongleToHclTerraform(this._eslSesDongle.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelesscontrollerWtpprofileEslSesDongleList",
      },
      lan: {
        value: wirelesscontrollerWtpprofileLanToHclTerraform(this._lan.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelesscontrollerWtpprofileLanList",
      },
      lbs: {
        value: wirelesscontrollerWtpprofileLbsToHclTerraform(this._lbs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelesscontrollerWtpprofileLbsList",
      },
      led_schedules: {
        value: cdktf.listMapperHcl(wirelesscontrollerWtpprofileLedSchedulesToHclTerraform, true)(this._ledSchedules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WirelesscontrollerWtpprofileLedSchedulesList",
      },
      platform: {
        value: wirelesscontrollerWtpprofilePlatformToHclTerraform(this._platform.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelesscontrollerWtpprofilePlatformList",
      },
      radio_1: {
        value: wirelesscontrollerWtpprofileRadio1ToHclTerraform(this._radio1.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelesscontrollerWtpprofileRadio1List",
      },
      radio_2: {
        value: wirelesscontrollerWtpprofileRadio2ToHclTerraform(this._radio2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelesscontrollerWtpprofileRadio2List",
      },
      radio_3: {
        value: wirelesscontrollerWtpprofileRadio3ToHclTerraform(this._radio3.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelesscontrollerWtpprofileRadio3List",
      },
      radio_4: {
        value: wirelesscontrollerWtpprofileRadio4ToHclTerraform(this._radio4.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelesscontrollerWtpprofileRadio4List",
      },
      split_tunneling_acl: {
        value: cdktf.listMapperHcl(wirelesscontrollerWtpprofileSplitTunnelingAclToHclTerraform, true)(this._splitTunnelingAcl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelesscontrollerWtpprofileSplitTunnelingAclList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
